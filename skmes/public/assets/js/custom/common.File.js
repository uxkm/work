
/* 사용법
    1. div 넓이 지정 생성
        <div id="divAttachFile01" style="width:1000px;"></div>

    2. 최초 등록시 멀티파일 컨트롤 설정

        var fileGroupID = $.fileMakeUniqueKey();
        $("#divAttachFile01").InitMultiAttachFile(fileGroupID, false, 100, ["jpg","png", 'zip']);
        // 파라미터 (파일그룹 아이디 , 리드온리여부 , 파일사이지 제한(메가) , 업로드 가능 확장자 )

     3. 최초 등록 후 파일그룹아이디가 저장된 상태 (DB에 저장된 파일 그룹 아이디를 불러와 맵핑)

        var fileGroupID = "DB에 저장한 파일 그룹 아이디 맵핑";
        $("#divAttachFile01").InitMultiAttachFile(fileGroupID, false, 100);
        // 파라미터 (파일그룹 아이디 , 리드온리여부 , 파일사이지 제한(메가) )

     4. 파일그룹 아이디를 이용 하여 파일 리스트 바인딩

        var fileGroupID = "DB에 저장한 파일 그룹 아이디 맵핑";
        $("#divAttachFile01").bindMultiAttachFile(fileGroupID);


     5. 커밋처리할 파일 조회 json 객체를 직렬화한 문자열 반환
        - 업무처리 로직 완료 후 커밋처리에 활용
        - 구조  --> {"ID":"divAttachFile01","FILE_GROUP_ID":"1111","FILES":[{"STATE":"IC","SAVE_FILE_ID":"4","PAGE_FILE_ID":"DfZPdzUpET1636603416306","FILE_NAME":"WMS.IF.zip"}]}

        var info = $("#divAttachFile01").getMultiAttachFileInfo();

    * 서버 코딩 포인트

        - 저장 시
        - 삭제 시
        - 바인딩 시
        - 다운로드 시
        - 업무 로직 저장 완료 후 파일 커밋 처리



    * 참고 사항
      - DB table - SYS_ATTACH
      - COMMIT_YN 설명
          . 파일 등록 시 COMMIT_YN 필드 값 "N" 으로 입력
          . 업무단 처리 완료 후 COMMIT_YN 값을 "Y"로 변경
            (바인딩 시 COMMIT_YN ='Y' 이 아닌 경우 가비지로 인식 하고 가져 오지 못하도록)
          . 추후 스케줄러(배치)에서 COMMIT_YN ='N' 인 건들은 삭제 처리 로직 추가 필요


 */



var _attachFiles = new Array();
var _attachSingleFiles = new Array();

$(function ($) {

    //멀티파일 저장
    $.fn.saveMultiAttachFile = function (files) {

        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();


        var maxFileSize = Number($(this).attr("maxFileSize"));
        var fileTotalSize = 0;
        var fileName;


        //업로드 가능 파일 체크
        //attachFile.ENABLE_FILE_TYPE

        if (attachFile.ENABLE_FILE_TYPE) {
            var notEnableFileTypes = "";
            for (var i = 0; i < files.length; i++) {

                var arr = files[i].name.split(".");
                var fileExt = arr[arr.length - 1].toUpperCase();

                var isSubEnable = false
                for (var j = 0; j < attachFile.ENABLE_FILE_TYPE.length; j++) {
                    if (fileExt == attachFile.ENABLE_FILE_TYPE[j].toUpperCase()) {
                        isSubEnable = true;
                    }
                }

                if (!isSubEnable) {
                    notEnableFileTypes += fileExt + " "
                }
            }

            if (notEnableFileTypes != "") {
                alert("업로드가 불가능한 파일 종류가 포함되어 있습니다.\r( 업로드 불가 확장자 : " + notEnableFileTypes + ")")
                return false;
            }
        }



        //파일 중복 체크 & 사이즈 초과 체크
        var tFilesName = "";
        for (var i = 0; i < files.length; i++) {

            fileName = files[i].name;
            if (!$("#" + containerID).checkFileDuplicate(fileName))
                tFilesName += "     " + fileName + "\r";

            fileTotalSize += files[i].size / 1024 / 1024;
        }

        if (fileTotalSize > maxFileSize) {
            alert("업로드 할 수 있는 파일 최대 사이즈의 합은 " + maxFileSize + "MB 입니다.");
            return false;
        }

        if (tFilesName != "") {
            alert("중복된 파일명이 존재 합니다.\r" + tFilesName)
            return false;
        }
        //파일 중복 체크 & 사이즈 초과 체크


        //객체담기 & 파일 리스트 추가
        //var dragHighlightZoneID = containerID + "_dragHighlight";
        //var fileAddBtnFileID = containerID + "_BtnAdd";
        var fileGridID = containerID + "_Grid";

        for (var i = 0; i < files.length; i++) {
            var obj = {
                STATE: "I",
                SAVE_FILE_ID: "",
                PAGE_FILE_ID: $.fileMakeUniqueKey(),
                FILE_NAME: files[i].name,
                FILE_OBJ: files[i]
            };

            attachFile.FILES.push(obj);

            var fileSize = files[i].size / 1024 / 1024;
            fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);

            var html = "";
            html += "<li id='" + obj.PAGE_FILE_ID + "'>";
            html += "    <label class='chkrad'>";
            html += "        <input type='checkbox' name='chk_" + attachFile.FILE_GROUP_ID + "' saveFileID='" + obj.SAVE_FILE_ID + "' pageFileID = '" + obj.PAGE_FILE_ID + "'>";
            html += "    </label>";
            html += "    <a name='link_" + attachFile.FILE_GROUP_ID + "' class='btn btn_link' style='cursor:default;'  saveFileID='" + obj.SAVE_FILE_ID + "' pageFileID = '" + obj.PAGE_FILE_ID + "' >" + obj.FILE_NAME + "</a>";
            html += "    <span class='file_size'>" + $.getFileCommaFomat(fileSize) + " MB</span>";
            html += "</li>";

            $("#" + fileGridID).prepend(html);

        }

        var saveFiles = [];

        var model = new FormData();

        for (var i = 0; i < attachFile.FILES.length; i++) {
            if (attachFile.FILES[i].STATE == "I" || (attachFile.FILES[i].STATE == "D" && attachFile.FILES[i].SAVE_FILE_ID)) {
                model.append("FILE_GROUP_ID", attachFile.FILE_GROUP_ID);
                model.append("UPLOAD_FILES", attachFile.FILES[i].FILE_OBJ);

                model.append("STATE", attachFile.FILES[i].STATE);
                model.append("SAVE_FILE_ID", attachFile.FILES[i].SAVE_FILE_ID);
                model.append("PAGE_FILE_ID", attachFile.FILES[i].PAGE_FILE_ID);
                model.append("FILE_NAME", attachFile.FILES[i].FILE_NAME);

//                saveFiles.push({
//                    STATE: attachFile.FILES[i].STATE,
//                    SAVE_FILE_ID: attachFile.FILES[i].SAVE_FILE_ID,
//                    PAGE_FILE_ID: attachFile.FILES[i].PAGE_FILE_ID,
//                    FILE_NAME: attachFile.FILES[i].FILE_NAME
//                });
            }
        }

        //model.append("INFOS", JSON.stringify(saveFiles));

        $("#" + containerID + "_pbarZone").css("display", "block");


        /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
         전송 FormData
            - FILE_GROUP_ID : 파일그룹아이디
            - INFOS : 파일기본정보(json의 직렬화 문자열)
                      STATE : I , R , D
                      SAVE_FILE_ID : DB에 저장된 파일 아이디
                      PAGE_FILE_ID : web page 내 사용되는 파일 아이디
                      FILE_NAME : 파일명(파일기본정보와 UPLOAD_FILES의 파일명으로 정보 맵핑)

            - UPLOAD_FILES : input file (멀티)

            * 추가 사항 : 업무 로직 저장 후  등록된 파일을 커밋 하는 공통 함수지원


         저장 후 수신 Data
            - 문자열로 직역화된 json 구문
               STATE : I , R , D
               SAVE_FILE_ID : DB에 저장된 파일 아이디  --> (DB 저장 후 생성된 파일 아이디를 담아 반환)
               PAGE_FILE_ID : web page 내 사용되는 파일 아이디
               FILE_NAME : 파일명(파일기본정보와 UPLOAD_FILES의 파일명으로 정보 맵핑)
        -------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        model.append('id', attachFile.FILE_GROUP_ID);
        model.append('others', 'ATTACH_FILE');

        $.ajax({
            url: "/attchFile", //-----------------------------------------------------------------------------------------------------------------------------------------
            type: 'POST',
            data: model,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            xhr: function () {

                var xhr = $.ajaxSettings.xhr();
                xhr.upload.onprogress = function (e) {

                    var per = e.loaded * 100 / e.total;
                    per = per.toFixed(1) - 1;

                    $("#" + containerID + "_pbar").attr("data-progress", per + "%");
                    $("#" + containerID + "_pbar").css("width", per + "%");
                };
                return xhr;
            },
            success: function (data) {

                if(data == null || data["attchFileInfo"] == undefined)
                {
                    $("#" + containerID + "_pbarZone").css("display", "none");
                    return;
                }

                //var jData = JSON.parse(data);
                var respData = data["attchFileInfo"];
                var attachFile = $("#" + containerID).getMultiAttachFile();

                if(respData != undefined && respData.length > 0)
                {
                    //저장건 파일아이디 업데이트
                    for (var i = 0; i < respData.length; i++) {

                        for (var j = 0; j < attachFile.FILES.length; j++) {
                            if (respData[i].pageFileId == attachFile.FILES[j].PAGE_FILE_ID) {
                                attachFile.FILES[j].STATE = "IC";
                                attachFile.FILES[j].SAVE_FILE_ID = respData[i].saveFileId;
                                break;
                            }
                        }

                        var checkbox = $("input[name=chk_" + attachFile.FILE_GROUP_ID + "]");
                        for (var k = 0; k < checkbox.length; k++) {
                            if (respData[i].pageFileId == $(checkbox[k]).attr("pageFileID")) {
                                $(checkbox[k]).attr("saveFileID", respData[i].saveFileId);
                                break;
                            }
                        }

                        var alink = $("a[name=link_" + attachFile.FILE_GROUP_ID + "]");
                        for (var z = 0; z < alink.length; z++) {
                            if (respData[i].pageFileId == $(alink[z]).attr("pageFileID")) {
                                $(alink[z]).attr("saveFileID", respData[i].saveFileId);
                                break;
                            }
                        }
                    }
                }

                $("#" + containerID + "_pbarZone").css("display", "none");

            }, error: function (data) {
                console.log(data);
                $("#" + containerID + "_pbarZone").css("display", "none");
                alert("오류 발생.\n관리자에게 문의해주세요.");
            }
        });
    }

    //멀티파일제거
    $.fn.DeleteMultiAttachFile = function () {

        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();

        var checkbox = $("input[name=chk_" + attachFile.FILE_GROUP_ID + "]:checked");

        if (checkbox.length > 0) {
            var ing = confirm("선택한 파일이 삭제됩니다. 진행 하시겠습니까?");
            if (ing) {
                var model = new FormData();
                var delSaveFileIDs = [];
                for (var i = 0; i < checkbox.length; i++) {
                    if ($(checkbox[i]).is(":checked")) {

                        var pageFileID = $(checkbox[i]).attr("pageFileID");
                        var saveFileID = $(checkbox[i]).attr("saveFileID");
                        var file = $("#" + containerID).getMultiAttachFile_File(pageFileID)
                        file.STATE = "D";

                        $("#" + pageFileID).remove();
                        model.append("FILE_GROUP_ID", attachFile.FILE_GROUP_ID);
                        model.append("SAVE_FILE_ID", saveFileID);

//                        delSaveFileIDs.push({
//                            FILE_GROUP_ID: attachFile.FILE_GROUP_ID,
//                            SAVE_FILE_ID: saveFileID
//                        });
                    }
                }


                //파일 삭제 로직 시작------------------------------------------------------------------------------------------------------------
                /*
                 * 삭제할 내역 delSaveFileIDs은 json 배열로
                 * 파일 그룹 아이디(FILE_GROUP_ID)
                 * 파일아이디(SAVE_FILE_ID) 로 구성됨
                */
                $.ajax({
                    url: "/attchFile/delete", //-----------------------------------------------------------------------------------------------------------------------------------------
                    type: 'DELETE',
                    data: model,
                    dataType: "json",
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        alert("삭제 되었습니다.");
                    },
                    error: function (data) {
                        console.log(data);
                        alert("오류 발생.\n관리자에게 문의해주세요.");
                    }
                });
            }
        }
    }

    //멀티 파일 바인딩, 파일그룹 아이디 이용(전체 바인딩 후 스크롤 매 마지막으로 옵션 추가)
    $.fn.bindMultiAttachFile = function (vFileGroupId) {
        var containerID = $(this).attr("id");
        var fileGridID = containerID + "_Grid";
        $("#" + containerID).clearMultiAttachFile(vFileGroupId);
        var attachFile = $("#" + containerID).getMultiAttachFile();

        //파일그룹 아이디(attachFile.FILE_GROUP_ID)를 이용하여 파일 내역 추출 (커밋된 파일만 추출)-------------------------------------------------------------------------------------
        $.ajax({
            url: "/attchFile/"+attachFile.FILE_GROUP_ID+"/select", //-----------------------------------------------------------------------------------------------------------------------------------------
            type: "GET",
            data: {},
            async: true,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (respdata) {

                if(respdata.length <= 0){ return; }

                attachFile.FILE_GROUP_ID = vFileGroupId;
                $("#" + fileGridID).prepend("");

                for (var i = 0; i < respdata.length; i++) {
                    var obj = {
                        FILE_GROUP_ID: respdata[i].fileGroupId,
                        STATE: "R",
                        SAVE_FILE_ID: respdata[i].fileSeq,
                        PAGE_FILE_ID: $.fileMakeUniqueKey(),
                        FILE_NAME: respdata[i].fileNm // + "." + respdata[i].FILE_EXT
                    };

                    attachFile.FILES.push(obj);

                    var fileSize = respdata[i].fileSize / 1024 / 1024;
                    fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);

                    var html = "";
                    html += "<li id='" + obj.PAGE_FILE_ID + "'>";
                    html += "    <label class='chkrad'>";
                    html += "        <input type='checkbox' name='chk_" + obj.FILE_GROUP_ID + "' saveFileID='" + obj.SAVE_FILE_ID + "' pageFileID = '" + obj.PAGE_FILE_ID + "'>";
                    html += "    </label>";
                    html += "    <a class='btn btn_link'  saveFileID='" + obj.SAVE_FILE_ID + "' pageFileID = '" + obj.PAGE_FILE_ID + "' onclick=\"$('#" + containerID + "').DownloadMultiAttachFile(this)\">" + obj.FILE_NAME + "</a>";
                    html += "    <span class='file_size'>" + $.getFileCommaFomat(fileSize) + " MB</span>";
                    html += "</li>";

                    $("#" + fileGridID).prepend(html);
                }

            },
            error: function (data) {
                console.log(data);
                alert("오류 발생.\n관리자에게 문의해주세요.");
            }
        });
    }

    //멀티 파일 다운로드
    $.fn.DownloadMultiAttachFile = function (linkObj) {

        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();
        var fileGroupID = attachFile.FILE_GROUP_ID;
        var pageFileID = $(linkObj).attr("pageFileID");
        var saveFileID = $(linkObj).attr("saveFileID");

        if (saveFileID) {
            //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            //파일그룹아이디 fileGroupID , saveFileID 아이디로 다운로드 링크 호출
            //alert("파일그룹아이디 fileGroupID(" + fileGroupID + ") , saveFileID(" + saveFileID + ") 아이디로 다운로드 링크 호출");
            location.href = "/attchFile/"+ fileGroupID +"/" + saveFileID + "/download";
           // var url = "/Com/FileDownload?reqData=" + JSON.stringify(reqData);
           // $("#bodyInFrame").attr('src', url);
        }
    }

    //멀티파일 초기화
    $.fn.InitMultiAttachFile = function (fileGroupID, isReadOnly, maxFilesSize, enableFileType) {


        $(this).attr("maxFileSize", maxFilesSize);
        var containerID = $(this).attr("id");
        var dragHighlightZoneID = containerID + "_dragHighlight";
        var fileAddBtnFileID = containerID + "_BtnAdd";
        var fileGridID = containerID + "_Grid";



        //파일 그리드 버튼 영역 생성
        var html = "";
        html += "<div class='multiple_wrap' style='width:100%' maxFileSize='" + maxFilesSize + "'>";
        html += "    <div class='multiple_head'>  ";
        html += "        <div class=btngroup'> ";
        if (!isReadOnly) {
            html += "            <button type='button' class='btn btn_add xs' onclick=\"$('#" + containerID + "').AddMultiAttachFile('" + fileAddBtnFileID + "');\"><i class='fa fa-upload' aria-hidden='true'></i><span>추가</span></button>";
            html += "            <button type='button' class='btn btn_del xs' onclick=\"$('#" + containerID + "').DeleteMultiAttachFile();\"><i class='fa fa-trash-o' aria-hidden='true'></i><span>삭제</span></button>";
        }
        html += "        </div> ";
        html += "        <p class='text'>첨부파일은  " + maxFilesSize + "MB 까지 가능 합니다.</p>";
        html += "    </div>";
        html += "    <div id='" + dragHighlightZoneID + "' class='multiple_body' style='height:150px;'>";
        html += "        <ul id=" + fileGridID + " class='file_list'>";
        html += "        </ul>";
        html += "    </div>";
        html += "    <div id='" + containerID + "_pbarZone' class='state_bar' style='display: none'><div id='" + containerID + "_pbar' class='sbar' data-progress='1%' style='width:1%'></div></div>";
        html += "    <input type='file' id='" + fileAddBtnFileID + "' containerID='" + containerID + "' multiple style='display:none;' />";
        html += "</div>";

        $("#" + containerID).append(html);


        //파일컨트롤 담기
        _attachFiles.push({
            ID: containerID,
            FILE_GROUP_ID: fileGroupID,
            ENABLE_FILE_TYPE : enableFileType,
            FILES: []
        });

        if (!isReadOnly) {

            //마우스가 대상 객체의 위로 처음 진입할 때 발생함.
            $("#" + containerID).on("dragenter", function (e) {
                e.preventDefault();
                e.stopPropagation();
            });

            //드래그하면서 마우스가 대상 객체의 위에 자리 잡고 있을 때 발생함.
            $("#" + containerID).on("dragover", function (e) {
                e.preventDefault();
                e.stopPropagation();
                $("#" + dragHighlightZoneID).addClass("drag-on");
            });

            //드래그가 끝나서 마우스가 대상 객체의 위에서 벗어날 때 발생함.
            $("#" + containerID).on("dragleave", function (e) {
                e.preventDefault();
                e.stopPropagation();
                $("#" + dragHighlightZoneID).removeClass("drag-on");
            });

            //드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생함.
            $("#" + containerID).on("drop", function (e) {
                e.preventDefault();

                var files = e.originalEvent.dataTransfer.files;
                if (files) {
                    $("#" + containerID).saveMultiAttachFile(files);
                }

                $("#" + dragHighlightZoneID).removeClass("drag-on");
            });


            //파일 추가 버튼 클릭 파일 객체 이벤트
            $('#' + fileAddBtnFileID).change(function (e) {
                var files = $(this)[0].files;
                $("#" + containerID).saveMultiAttachFile(files);
            });
        }
    }

    //멀티파일추가
    $.fn.AddMultiAttachFile = function (fileAddBtnFileID) {
        var containerID = $(this).attr("id");
        var agent = navigator.userAgent.toLowerCase();
        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
            $("#" + fileAddBtnFileID).replaceWith($("#" + fileAddBtnFileID).clone(true));
        } else {
            $("#" + fileAddBtnFileID).val("");
        }
        $("#" + fileAddBtnFileID).click();
    }

    //컨테이너 아이디로 파일 컨트롤 가져오기
    $.fn.getMultiAttachFile = function () {
        var containerID = $(this).attr("id");
        var returnObj;
        for (var i = 0; i < _attachFiles.length; i++) {
            if (containerID == _attachFiles[i].ID) {
                returnObj = _attachFiles[i];
                break;
            }
        }
        return returnObj;
    }

    //멀티파일그룹아이디 추출
    $.fn.getMultiAttachFileGroupID = function () {
        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();
        return attachFile.FILE_GROUP_ID;
    }

    //컨테이너 아이디, 페이지파일아이디로 파일 obj 가져오기
    $.fn.getMultiAttachFile_File = function (pageFileID) {

        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();

        var returnObj;
        for (var i = 0; i < attachFile.FILES.length; i++) {
            if (pageFileID == attachFile.FILES[i].PAGE_FILE_ID) {
                returnObj = attachFile.FILES[i]
                break;
            }
        }
        return returnObj;
    }

    //파일명중복체크
    $.fn.checkFileDuplicate = function (fileName) {
        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();
        for (var i = 0; i < attachFile.FILES.length; i++) {
            if (attachFile.FILES[i].STATE != "D") {
                if (attachFile.FILES[i].FILE_NAME == fileName) {
                    return false;
                }
            }
        }
        return true;
    }

    //UniqueKey 생성
    $.fileMakeUniqueKey = function () {
        var uniqueKey = "";
        for (var i = 1; i <= 10; i++) {
        	if (Math.floor((window.crypto.getRandomValues(new Uint32Array(1))/4294967296) * 100) + 10 > 50)
        		uniqueKey += String.fromCharCode(((window.crypto.getRandomValues(new Uint32Array(1))/4294967296) * 26) + 65); //대문자 A-Z 랜덤 알파벳 생성
        	else
        		uniqueKey += String.fromCharCode(((window.crypto.getRandomValues(new Uint32Array(1))/4294967296) * 26) + 97); //소문자 a-z 랜덤 알파벳 생성
        }
        var d = new Date();
        return uniqueKey + d.getTime();
    }

    //천 단위 콤마 변환 후 문자열 반환
    $.getFileCommaFomat = function (d) {
        if (d != null) {
            var parts = d.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        }

        return "";
    }

    //처리 해야할 파일 정보 추출
    $.fn.getMultiAttachFileInfo = function () {

        var containerID = $(this).attr("id");
        var attachFile = $("#" + containerID).getMultiAttachFile();

        var info = ({
            ID: containerID,
            FILE_GROUP_ID: attachFile.FILE_GROUP_ID,
            FILES: []
        });


        for (var i = 0; i < attachFile.FILES.length; i++) {
            if (attachFile.FILES[i].STATE == "IC" || (attachFile.FILES[i].STATE == "D" && attachFile.FILES[i].SAVE_FILE_ID)) {
                info.FILES.push({
                    STATE: attachFile.FILES[i].STATE,
                    SAVE_FILE_ID: attachFile.FILES[i].SAVE_FILE_ID,
                    PAGE_FILE_ID: attachFile.FILES[i].PAGE_FILE_ID,
                    FILE_NAME: attachFile.FILES[i].FILE_NAME
                });
            }
        }

        return JSON.stringify(info) ;
    }

    //멀티파일업로드 초기화
    $.fn.clearMultiAttachFile = function (fileGroupID) {
        var containerID = $(this).attr("id");
        var fileGridID = containerID + "_Grid";
        var attachFile = $("#" + containerID).getMultiAttachFile();
        attachFile.FILE_GROUP_ID = fileGroupID;
        attachFile.FILES = [];
        $("#" + fileGridID).html("");
    }

});