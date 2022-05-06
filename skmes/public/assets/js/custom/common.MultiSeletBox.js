


$(function ($) {

    //멀티 콤보 설정
    $.fn.setMultCombo = function () {

        var id = $(this).attr("id");


        var mainTitleID = "multCombo_mainTitle_" + id;
        $("#" + id).attr("mainTitleID", mainTitleID);

        var checkBoxItemName = "multCombo_checkBoxItemName_" + id;
        $("#" + id).attr("checkBoxItemName", checkBoxItemName);

        var checkBoxAllID = "multCombo_checkBoxAllID_" + id;
        $("#" + id).attr("checkBoxAllID", checkBoxAllID);

        var closeName = "multCombo_closeName_" + id;
        $("#" + id).attr("closeName", closeName);

        var itemsZone = "multCombo_itemsZone" + id;
        $("#" + id).attr("itemsZone", itemsZone);

        $("#" + id).addClass("multiple_select");
        $("#" + id).attr("mcomboreadonly", 'false');


        var html = "";
        html += "    <div id='" + mainTitleID + "' name='" + closeName +"' class='select_text' ><span>선택해주세요.</span></div>";
        html += "    <div class='select_wrap'>";
        html += "        <ul id='" + itemsZone+"' class='select_list'>";
        html += "       </ul > ";
        html += "        <div class='btngroup'>";
        html += "            <label class='btn xsm allchk'><input id='" + checkBoxAllID+"' type='checkbox' ><span>전체선택</span></label>";
        html += "            <button name='" + closeName +"' class='btn xsm xclose'><span>닫기</span></button>";
        html += "        </div>";
        html += "    </div>";

        $("#" + id).append(html);

        //닫기 이벤트
        $("[name=" + closeName + "]").click(
            {id: id},
            function (e) {
                if ($("#" + e.data.id).attr("mcomboreadonly") == "true")
                    return;


                if ($("#" + e.data.id).hasClass("selected"))
                    $("#" + e.data.id).removeClass('selected');
                else
                    $("#" + e.data.id).addClass('selected');
            }
        );

        //전체체크 이벤트
        $("#" + checkBoxAllID).click(
            { id: id, checkBoxAllID: checkBoxAllID, checkBoxItemName: checkBoxItemName, mainTitleID: mainTitleID },
            function (e) {
                if ($(this).is(':checked')) {
                    $("input:checkbox[name=" + checkBoxItemName + "]").prop("checked", true);
                } else {
                    $("input:checkbox[name=" + checkBoxItemName + "]").prop("checked", false);
                }

                $("#" + e.data.id).setDisplayTitleCheckedMultCombo();
            }
        );

        //항목체크박스 이벤트
    	$(document).on("click","input:checkbox[name=" + checkBoxItemName + "]",{ id: id },function(e){
    		$("#" + e.data.id).setDisplayTitleCheckedMultCombo();
		});

    	// 마우스 벗어났을시 닫기 이벤트
//    	$("#"+id).mouseleave(
//			{ id: id},
//			function(e) {
//				   if ($("#" + e.data.id).attr("mcomboreadonly") == "true")
//	                    return;
//
//
//	                if ($("#" + e.data.id).hasClass("selected"))
//	                    $("#" + e.data.id).removeClass('selected');
//	                else
//	                    $("#" + e.data.id).addClass('selected');
//			}
//		);

    }

    //멀티 콤보 선택된 내역 display
    $.fn.setDisplayTitleCheckedMultCombo = function () {

        var id = $(this).attr("id");
        var mainTitleID = $(this).attr("mainTitleID");

        var arrChk = $("#" + id).getCheckedMultCombo();
        var title = "";

        for (var i = 0; i < arrChk.length; i++) {
            title += arrChk[i].text;

            if (arrChk.length - 1 > i)
                title += ", ";
        }

        if (title == "")
            title = "선택하세요.";

        $("#" + mainTitleID).children("span").attr("title", title);
        $("#" + mainTitleID).children("span").html(title);

    }

    //멀티 콤보  체크된값 추출
    $.fn.getCheckedMultCombo = function () {

        var id = $(this).attr("id");
        var checkBoxItemName = $(this).attr("checkBoxItemName");
        var obj = $("input:checkbox[name=" + checkBoxItemName + "]:checked");

        var returnValue = [];
        for (var i = 0; i < obj.length; i++) {

            var chkObj = $(obj[i]);

            returnValue.push({
                value: chkObj.attr("valuedata"),
                text: chkObj.attr("textdata")
            });
        }

        return returnValue;
    }

    //멀티 콤보  체크된값 추출(쿼리용)
    $.fn.getCheckedMultComboSplit = function (separator) {

        if (!separator)
            separator = ","

        var id = $(this).attr("id");
        var checkBoxItemName = $(this).attr("checkBoxItemName");
        var obj = $("input:checkbox[name=" + checkBoxItemName + "]:checked");

        var returnValue = "";
        for (var i = 0; i < obj.length; i++) {

            var chkObj = $(obj[i]);

            returnValue += chkObj.attr("valuedata");

            if (obj.length - 1 > i)
                returnValue += separator
        }

        return returnValue;
    }

    //멀티 콤보  리드온리
    $.fn.setReadOnlyMultCombo = function (value) {
        var id = $(this).attr("id");
        var mainTitleID = $("#" + id).attr("mainTitleID");

        if (value == true) {
            $("#" + id).attr("mcomboreadonly", "true");
            $("#" + mainTitleID).addClass("disabled_text");
            $("#" + id).removeClass('selected');
        } else {
            $("#" + id).attr("mcomboreadonly", "false");
            $("#" + mainTitleID).removeClass("disabled_text");

        }
    }

    //멀티 콤보  바인딩된 내역 중 전체 체크 하기
    $.fn.setCheckAllMultCombo = function () {
        var id = $(this).attr("id");
        var checkBoxAllID = $("#" + id).attr("checkBoxAllID");
        $("#" + checkBoxAllID).prop("checked", false);
        $("#" + checkBoxAllID).click();
    }

    //멀티 콤보  바인된된 내역 중 전체 체크 해지 하기
    $.fn.setUnCheckAllMultCombo = function () {
        var id = $(this).attr("id");
        var checkBoxAllID = $("#" + id).attr("checkBoxAllID");
        $("#" + checkBoxAllID).prop("checked", true);
        $("#" + checkBoxAllID).click();
    }

    //멀티 콤보  바인딩된 내역 중 체크박스 체크하기
    $.fn.setCheckMultCombo = function (checkItemValues) {

        var id = $(this).attr("id");
        var checkBoxItemName = $(this).attr("checkBoxItemName");
        var objChkBox = $("input:checkbox[name=" + checkBoxItemName + "]");

        for (var i = 0; i < checkItemValues.length; i++) {
            for (var j = 0; j < objChkBox.length; j++) {

                var chkObj = $(objChkBox[j]);

                if (chkObj.attr("valuedata") == checkItemValues[i]) {
                    chkObj.prop("checked", true);
                    break;
                }
            }
        }

        $("#" + id).setDisplayTitleCheckedMultCombo();
    }

    //멀티 콤보 바인딩
    $.fn.bindMultCombo = function (data, valueField, textField) {

        var id = $(this).attr("id");
        var itemsZone = $("#" + id).attr("itemsZone");
        var checkBoxItemName = $("#" + id).attr("checkBoxItemName");

        var html = "";
        for (var i = 0; i < data.length; i++) {

            html += "       <li class='select_option'>";
            html += "            <label class='chkrad'>";
            html += "                <input type='checkbox' name='" + checkBoxItemName + "'  valuedata='" + data[i][valueField]+"'  textdata='" + data[i][textField]+"' >";
            html += "                <span title='" + data[i][textField] + "'>" + data[i][textField]+"</span>";
            html += "            </label>";
            html += "        </li>";
        }

        $("#" + itemsZone).html("");
        $("#" + itemsZone).append(html);
    }

    //멀티 콤보 reset
    $.fn.resetMultCombo = function () {
    	var id = $(this).attr("id");
    	var currentMultiCombo = $("#" + id ).empty();

    	currentMultiCombo.removeAttr("mainTitleID");

    	currentMultiCombo.removeAttr("checkBoxItemName");
    	currentMultiCombo.removeAttr("checkBoxAllID");
    	currentMultiCombo.removeAttr("closeName");
    	currentMultiCombo.removeAttr("itemsZone");
    	currentMultiCombo.removeAttr("mainTitleID");
    	currentMultiCombo.removeAttr("mcomboreadonly");
    	currentMultiCombo.removeAttr("class");
    }
});