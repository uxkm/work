var pageRealGirds = new Array(); //리얼그리드개인화
(function ($) {

    $.getRequestQueryString = function (para) {
        var rtnval = "";
        var nowAddress = location.href;
        var parameters = (nowAddress.slice(nowAddress.indexOf("?") + 1, nowAddress.length)).split("&");
        for (var i = 0; i < parameters.length; i++) {
            var varName = parameters[i].split("=")[0];
            if (varName.toUpperCase() == para.toUpperCase()) {
                rtnval = parameters[i].split("=")[1];
                break;
            }
        }
        return unescape(rtnval);
    }

    //리얼그리드 활용을 위하여 페이지에 등록
    $.SetRealGridRegistPage = function (grid, containerId, menuId) {
        grid.id = containerId;
        grid.menuId = menuId;
        grid.personalizationLayout = new Array();
        pageRealGirds.push(grid);
        grid.initColumns = grid.saveColumnLayout();
    }

    //리얼그리드 활용을 위하여 페이지에 등록된 리얼그리드 반환(빈문자열 또는 undefined 인경우 전체 배열, 컨테이너 아이디가 입력된 경우 gridView 반환)
    $.GetRealGridRegistPage = function (containerId) {
        if (containerId == "" || containerId == undefined)
            return pageRealGirds;
        else {
            pageRealGirds.forEach(function (grid) {
                if (grid.id == containerId) {
                    returnvalue = grid;
                    return returnvalue;
                }
            });
        }
    }

    //그리드 개인화 컬럼 적용
    $.SetRealGridPersonalization = function (arrGrid) {
        arrGrid.forEach(function (grid) {
            var gridLayoutBtnID = "btnGridLayout_" + grid.id;
            $("div[data-grid-id=" + grid.id + "]").prepend(
                "<button id='" + gridLayoutBtnID + "' class='btn btn-sm uksave btn-outline-secondary'>" +
                "	<img" +
                " src='/images/button/btn_icoSAVE.png'>" +
                "	<i class='icon'></i>" +
                "	<span>레이아웃저장</span>" +
                "</button>"
            );

            //버튼 이벤트 정의
            $("#" + gridLayoutBtnID).on("click", { grid: grid }, function (e) {
                $.SaveRealGridLayuot(e.data.grid);
            });

            //저장된 레이아웃 설정
            $.SetRealGridLayuot(grid);
        });
    }

    //추가개발 및 유지 보수시 신규/삭제된 컬럼 처리
    $.GridOrganizeColumn = function (grid, layoutColInfo) {

        var layoutColumns = layoutColInfo;
        var AllinitColumns = $.GetRealGridAllColumns(grid.initColumns);// fnComGridGetAllColumns
        var AlllayoutColumns = $.GetRealGridAllColumns(layoutColumns); // fnComGridGetAllColumns

        for (var i = 0; i < AllinitColumns.length; i++) {
            var isNew = true;
            for (var j = 0; j < AlllayoutColumns.length; j++) {
                if (AllinitColumns[i].name == AlllayoutColumns[j].name) {
                    isNew = false;
                    break;
                }
            }

            if (isNew) {
                var c = grid.columnByName(AllinitColumns[i].name);
                var checkColumns = $.GetRealGridAllColumns(layoutColumns);  //fnComGridGetAllColumns
                var isExist = false;
                for (var k = 0; k < checkColumns.length; k++) {
                    if (c.name == checkColumns[k].name) {
                        isExist = true;
                        break;
                    }
                }

                if (c.type == "group") {
                    if (!isExist) {
                        layoutColumns.push(AllinitColumns[i]);
                    }
                } else {
                    if (!isExist) {
                        if (c.parent == undefined || c.parent == null) {
                            layoutColumns.push(AllinitColumns[i]);
                        } else {
                            var parentC = $.GetRealGridColumnAllProperty(layoutColumns, c.parent);  //fnComGridColumnAllProperty
                            parentC.columns.push(AllinitColumns[i]);
                        }
                    }
                }
            }
        }
        return layoutColumns;
    }

    //리얼그리드 하위 컬럼 포함 전체 컬럼 추출
    //fnComGridGetAllColumns
    $.GetRealGridAllColumns = function (columns) {
        var allcolumns = new Array();
        for (var i = 0; i < columns.length; i++) {
            allcolumns.push(columns[i]);
            if (columns[i].columns != undefined) {
                var c = $.GetRealGridAllColumns(columns[i].columns);
                allcolumns = allcolumns.concat(c);
            }
        }
        return allcolumns;
    }

    //페이지에 등록되어 있는 리얼그리드의 컬럼(전체속송용) 추출
    // fnComGridColumnAllProperty
    $.GetRealGridColumnAllProperty = function (columns, columnName) {
        var returnColumn;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].name == columnName) {
                returnColumn = columns[i];
                break;
            } else {
                if (columns[i].columns != undefined) {
                    var c = $.GetRealGridColumnAllProperty(columns[i].columns, columnName);
                    if (c != undefined) {
                        returnColumn = c;
                        break;
                    }
                }
            }
        }
        return returnColumn;
    }


    //리얼그리드 레이아웃저장
    $.SaveRealGridLayuot = function (grid) {
        var gridID = grid.id; //그리드아이디
        var menuID = grid.menuId; //메뉴아이디로
        var layoutinfo = JSON.stringify(grid.saveColumnLayout()); //컬럼레이아웃정보

        //로그인사번,그리드아이디,메뉴아이디로 DB 저장 start------------------------------
        var param = {menuId : menuID, gridId : grid.id, layoutInfo : layoutinfo};

        $.post('/api/user/grid/personalization/save', param, function(data){
        	if(data > 0){
        		alert("그리드 개인화 정보를 저장했습니다.");
        	}
        });
        //로그인사번,그리드아이디,메뉴아이디로 DB 저장 end--------------------------------
    }

    //저장된 레이아웃 설정
    $.SetRealGridLayuot = function (grid) {
        var gridID = grid.id; //그리드아이디
        var menuID = grid.menuId; //메뉴아이디로


        //로그인사번,그리드아이디,메뉴아이디로 저장된 내역 조회 후 바인딩  start---------------------------------

        //데이타가 있는 경우만 실행
        /*
        var layoutColInfo = [
            { "name": "descr", "saveWidth": 200, "width": 200, "visible": true },
            { "name": "parentCodeGroup", "saveWidth": 140, "width": 140, "visible": true },
            { "name": "parentDescr", "saveWidth": 140, "width": 140, "visible": true },
            { "name": "workTypeDescr", "saveWidth": 150, "width": 150, "visible": true },
            { "name": "subWorkTypeDescr", "saveWidth": 150, "width": 150, "visible": true },
            { "name": "workType", "saveWidth": 120, "width": 120, "visible": false },
            { "name": "subWorkType", "saveWidth": 120, "width": 120, "visible": false },
            { "name": "sortOrder", "saveWidth": 120, "width": 120, "visible": false },
            { "name": "useYn", "saveWidth": 120, "width": 120, "visible": false },
            { "name": "codeGroup", "saveWidth": 558, "width": 558, "visible": true }
        ];
        */
        var layoutColInfo = null;
        var param = {menuId : menuID, gridId : grid.id};

        $.post('/api/user/grid/personalization/column', param, function(data){
        	//추가개발 및 유지 보수시 신규/삭제된 컬럼 처리
        	//데이타가 있는 경우만 실행
            if(data.layoutInfo != null && data.layoutInfo.length > 0){
            	var colInfo = $.GridOrganizeColumn(grid, JSON.parse(data.layoutInfo));
                grid.setColumnLayout(colInfo);
            }
        });

        //로그인사번,그리드아이디,메뉴아이디로 저장된 내역 조회 후 바인딩  end------------------------------------
    }

})(jQuery);



/*
//그리드 설정이 스크립트 완료, 바인딩 사이에 정의하여야 함
$.SetRealGridRegistPage(commonCodeGroupList.getGridView(), "commonCodeGroupList", $.getRequestQueryString("menuid")); //그리드등록
var pageRealgrid = $.GetRealGridRegistPage();  //등록된그리드 조회 배열
$.SetRealGridPersonalization(pageRealgrid); //그리드 개인화 컬럼 적용
*/