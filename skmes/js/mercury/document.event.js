function receiveMessage(event)
{
    $.extend(_readyList,event.data);
}
(function ($) {

  $(document).on('click', '.showlist-toggle', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var self = $(this);
    if(self.is('.disabled, :disabled')) {
      return false;
    }
    self.parent().toggleClass("open");
  });


  $(document).on('click', '.file-all-checked', function () {
    var checked = $(this).is(':checked');
    var table = $(this).parents('.file-wrap').find('.file-list');
    table.find('.file-check').each(function(){
      $(this).prop('checked',checked);
    });
  });

  $(document).on('click', '.remove-file-input', function () {
    var table = $(this).parents('.file-wrap').find('.file-list');
    table.find('.file-check').each(function(){
      if ($(this).is(':checked')) {
        $(this).parents('.mercury-file-row').remove();
      }
    });
  });

  $(document).on('click', '.new-file-input', function () {
	    var table = $(this).parents('.file-wrap').find('.file-list');
	    var template = '<tr  class="file-set mercury-file-row">';
	    var length = moment().format('YYYYMMDDhhmmss')+table.find('.mercury-file-row').length;
	    template += '<td style="vertical-align:middle;">' +
	      '<div class="check txt_center" style="padding-left: 2px;padding-top: 2px;">' +
	      '<input id="checkbox-'+length+'" class="checkbox-custom file-check" name="checkbox-'+length+'" type="checkbox">' +
	      '<label for="checkbox-'+length+'" class="checkbox-custom-label">' +
	      '</div>';
	    template += '</td>';
	    template += '<td><input type="file" style="border:0px; padding:0px; font-size:12px; !important"/><span></span></td>';
	    template += '<td></td>';
	    template += '</tr>';
	    table.find('tbody').append(template);
  });


  $(document).on('click', '.down-file-li', function () {
      $.downFile($(this).parents('.file-wrap').data('fileId'), $(this).parents('tr').data('fileSeq'));
  });

  $(document).on('click', '.remove-file', function () {
    var wrap = $(this).parents('.file-wrap');
    var table = wrap.find('.file-list');
    table.find('.file-check').each(function(){
      if ($(this).is(':checked')) {
        $(this).parents('.mercury-file-row').hide();
      }
    });
    $('#checkbox-'+wrap.attr('id')).prop('checked',false);
  });

  $(document).on('click', '.ukchoice,.ukadd', function () {
	  setTimeout(function(){
	    cfn_grid_resetSize();
	  },200);
  });

  $(document).ready(function () {
      //$('#_langSelect').val(_mes_lang);
      if (window.addEventListener) {  // IE before version 9 or chrom, firefox, etc.....
          window.addEventListener ("message", receiveMessage, false);
      }
      else {
          if (window.attachEvent) {   // IE before version 9
              window.attachEvent("onmessage", receiveMessage);
          }
      }
      window.addEventListener("message", receiveMessage, false);

    $.ajaxSetup({cache:false});

    $('input[type="checkbox"]').each(function(e){
      var id = $(this).attr("id");
      if (!id) {
        id = 'custom-check'+$(this).index();
      }
      $(this).attr('id', id);
      $(this).next().attr('for', id);
    });

    $('.yaer-picker').each(function () {
        $(this).yearpicker();
      });

    $('.time-picker').each(function () {
      $(this).data('mask','00:00');
      $(this).attr('placeholder','00:00');
      if (!$(this).data('format')) {
        $(this).data('format','HH:mm');
      }
    });

    $('.time-picker-second').each(function () {
      $(this).data('mask','00:00:00');
      $(this).attr('placeholder','00:00:00');
      if (!$(this).data('format')) {
        $(this).data('format','HH:mm:ss');
      }
    });

    $('.date-picker').each(function () {
      $(this).lDatepicker();
    });

    $('.date-range').each(function () {
      $(this).lDaterange();
    });

    $('.date-boot-range').each(function () {
      $(this).datepicker({autoclose:true, format:'yyyy-mm-dd',language:_mes_lang});
    });


    $('.month-picker').each(function () {
        $(this).MonthPicker({Button: function() {
                return $('<button type="button" style="padding: 0.15em 0em;" class="ui-datepicker-trigger"><i class="fa fa-calendar fa-fw"></i></button>').jqueryUIButton({text: false});
            },
            Disabled: false,
            i18n: {
                nextLabel: common.month.prev,
                prevLabel: common.month.next,
                months: [common.month.month1, common.month.month2, common.month.month3, common.month.month4, common.month.month5, common.month.month6, common.month.month7, common.month.month8, common.month.month9, common.month.month10, common.month.month11, common.month.month12]
            },
            MonthFormat:'yy-mm',
        });
    });


    $('.year-picker').each(function () {
        // 참조site -> https://saravanajd.github.io/YearPicker/index.html
        $(this).yearpicker();
    });

    $('.mercury-tabs').each(function () {
      var tabs = $(this);
      tabs.children('.nav-tabs').insertBefore(tabs.children('div:first'));
    });

    Ajax.enableProgressBar();
    Ajax.enableErrorHandler();

    $(".mercury-tabs .nav-item").click(function () {
      if ($(this).data('click')) {
          window[$(this).data('click')]($(this).data('tabNo'));
      }
    });



    $('.mercury-tabs').show();
    $('.mercury-tabs').each(function () {
        var tabs = $(this);
        if (tabs.data('ready')) {
          try {
            window[tabs.data('ready')]();
          } catch(e) {
            console.log(e);
          }
        }
    });

    $('select').each(function(){
      if ($(this).attr('multiple') && $(this).data('ready')!=false) {
        var callback = $(this).data('onchange');
        $(this).multipleSelect({width:'100%',selectAll: true, onClose:function(){
          if (callback) {
            window[callback]();
          }
        }});
      }

      var parents = $(this).parent();
      var style = parents.attr('style');
      if (!style && !parents.hasClass('hide')) {
          parents.show();
      }

    });

    $('input[type="text"]').each(function(){
      if ($(this).data('mask')) {
        $(this).mask($(this).data('mask'));
      }
    });

    $.numberFormat();

    $('form').on('submit', function(){
      if ($(this).hasClass('login')) {
        return true;
      }
      return false;
    });

    $('#sidemenu').resizable({
      handles: 'e, w',
      minWidth: 200,
      maxWidth: 400,
      grid: 50,
      stop:function(){
        var changeWidth = $(this).width();

        $('.sidebar-nav .nav-item:not(.nav-dropdown) .nav-link').css('width',changeWidth-40+'px');
        $('.sidebar-fixed .main').css('margin-left',changeWidth);
        $('.sidebar-fixed .app-footer').css('margin-left',changeWidth);
      }
    });

    //검색영역 숨김 처리 이벤트 정의
    $('.chead').each(function(i, e){
        $(e).find('.ibtn').on('click', function(){
            $(e).toggleClass('is-close');
            cfn_grid_resetSize();
        });
    });

  });


  $(document).ready(function(){

    //중복 로그인 체크
      $.getSync('/loginOverCheck', {}, function(result){
          if(result){
              if(result.length > 0){
                  //alert("");
                  var resultObj = result[0];
                  var msg = "다른곳에서 로그인 하셨습니다.로그아웃 됩니다.";
                  msg += "\nIP : "+resultObj.loginIp;
                  msg += "\n"+resultObj.loginTime;
                  alert(msg);
                  top.location.href="/logout";
              }
          }

      }); //$.getSync('/', param, function(result){
  })
  /*
   * 숫자에 ,(콤마) 입력 하기
   */
  $.numberFormat = function(){

    var fromId;
    var toId;
    var fromValue;
    var toValue;

    $(".num").each(function(){
      if ($(this).prop('tagName') == 'INPUT' ) {

        $(this).val($.number($(this).val()));
      } else {
        $(this).html($.number($(this).html()));
      }
    });

    $(".num2").each(function(){
      var leng = 0;
      if($(this).attr("data-float")){
        leng = $(this).attr("data-float");
      } else {
        $(this).number(true);
      }

      if ($(this).prop('tagName') == 'INPUT') {
        $(this).val($.number($(this).val(),leng));
      } else {
        $(this).html($.number($(this).html(),leng));
      }
    });

    $('.num').blur(function() {
      if ($(this).prop('tagName') == 'INPUT' ) {
        if($(this).attr("data-fromId")){
          fromId = "#"+$(this).attr("data-fromId");
          toId = "#"+$(this).attr("id");
          fromValue = $(fromId).val();
          toValue = $(this).val();
          if(fromValue < toValue) {
            $(this).val($.number($(this).val()));
          } else {
            $.alert(fromValue + " " + old.js.common.message.numGT,common.message.alert, initForm);
            function initForm(){
              $(toId).val(0);
              $(toId).focus();
            }
          }
        } else if($(this).attr("data-toId")) {
          fromId = "#"+$(this).attr("id");
          toId = "#"+$(this).attr("data-toId");
          fromValue = $(this).val();
          toValue = $(toId).val();
          if(fromValue < toValue) {
            $(this).val($.number($(this).val()));
          } else {
            $.alert(toValue + " " + old.js.common.message.numLT,common.message.alert, initForm);
            function initForm(){
              $(fromId).val(0);
              $(fromId).focus();
            }
          }
        }
      } else {
        $(this).html($.number($(this).html()));
      }
    });

    $(document).on('keyup', '.num', function () {
      $(this).number(true);
    });

    $(document).on('keyup', '.num2', function () {
      this.value = this.value.replace(/[^0-9^.]/g,'');
      var leng = 0;

      if($(this).attr("data-float")){
        leng = $(this).attr("data-float");
        ObjValue = $(this).val().split(".");// 입력 받은 값을 ObjValue에 "." 나누어서 저장시킨다.

        // 지정한 소수점 이후의 자리는 입력 할 수 없게 수정
        var num2 = 0.0;
        num2 = $(this).val();
        if(ObjValue[1] != null && ObjValue[1].length > leng) {
          ObjValue[1] = ObjValue[1].substring(0, leng);
          num2 = (ObjValue[0]+'.'+ObjValue[1]) * 1;
        }

        if(ObjValue.length>2){
          num2 = (ObjValue[0]+'.'+ObjValue[1]) * 1;
          $(this).val(num2);
          $(this).html($.number($(this).html(),leng));
          return false;
       } else {
       $(this).val(num2);
         $(this).html($.number($(this).html(),leng));
       }

      } else {
        $(this).number(true);
      }


      $('.num2').blur(function() {
        if ($(this).prop('tagName') == 'INPUT') {
          $(this).val($.number($(this).val(),leng));
        } else {
          $(this).html($.number($(this).html(),leng));
        }
      });

      return true;
    });

    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67;
    //Lot에 숫자만 입력
    $(document).on('keydown', '.lotNumOnly', function (event) {

      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105)
          || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {


      }else {
          if (keyID == ctrlKey) {
              ctrlDown = true;
              return false;
            }
          if (ctrlDown && (keyID == vKey || keyID == cKey)) {
              event.target.value = $(this).val();
          }
      }
    });

    $(document).on('keyup', '.lotNumOnly', function (event) {
      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {

      } else {
          if (keyID == ctrlKey) {
            ctrlDown = false;
          }
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
      }
    });

    //Lot에 숫자 + * 만 입력
    $(document).on('keydown', '.lotNum', function (event) {


      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8
          || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 106) {

      }else {
          if (keyID == ctrlKey) {
              ctrlDown = true;
              return false;
            }
          if (ctrlDown && (keyID == vKey || keyID == cKey)) {
              event.target.value = $(this).val();
          }
      }
    });

    $(document).on('keyup', '.lotNum', function (event) {
      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {

      } else {
        if (keyID == ctrlKey) {
          ctrlDown = false;
        }
        var tempText = event.target.value.replace(/[^0-9*]/g, "");
        var chrIndex = tempText.indexOf("*");
        var chrTemp = "";
        var tempTextall = "";
        if(chrIndex > 0) {
          chrTemp = tempText.substr(chrIndex);
          tempTextall = tempText.replace(chrTemp,'*');
          tempText = tempTextall;
        }
        event.target.value = tempText;
      }
    });


    //Lot에 숫자 + A-Z 만 입력
    $(document).on('keydown', '.lotNumH', function (event) {


      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8
          || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 106 || keyID == 72) {

      }else {
          if (keyID == ctrlKey) {
              ctrlDown = true;
              return false;
            }
          if (ctrlDown && (keyID == vKey || keyID == cKey)) {
              event.target.value = $(this).val();
          }
      }
    });

    $(document).on('keyup', '.lotNumH', function (event) {
      event = event || window.event;
      var keyID = (event.which) ? event.which : event.keyCode;
      if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) {

      } else {
        if (keyID == ctrlKey) {
          ctrlDown = false;
        }
        var tempText = event.target.value.replace(/[^(0-9A-Z)]/g, "");

        event.target.value = tempText;
      }
    });
  };

// 특수 문자 막기(숫자, 영문자 만 입력)
  $(document).on('keypress', '.onlyChar', function () {
    var objId = $(this);
      var hasKeyType = objId.attr("data-keyType");
      var keyType = "Union";
      var flag = false;
      var keyCode = event.keyCode;

      if(!isNull(hasKeyType)) {
        keyType = hasKeyType;
      }

      // 42 : * , 45 : -(포함 시키려는 특수문자 추가 - 1번만  사용)
      var excludeChar = "42";

      if(!isNull(excludeChar)) {
        var arr = excludeChar.split(",");
        var len = arr.length;

        for(var i=0; i<len; i++) {
            if(arr[i] == keyCode && objId.val().indexOf(String.fromCharCode(arr[i])) == -1) {
                return true;
            }
          }
      }

      switch(keyType) {
      case "Number":
        if((keyCode >= 48) && (keyCode <= 57)) {
          flag = true;
        }
        break;
      case "Character":
        if((keyCode >= 97) && (keyCode <= 122) || (keyCode >= 65) && (keyCode <= 90)) {
          flag = true;
        }
        break;
      default:
        if((keyCode >= 48) && (keyCode <= 57) || (keyCode >= 97) && (keyCode <= 122) || (keyCode >= 65) && (keyCode <= 90)) {
              flag = true;
          }
        break;
      }

      return flag;
  });

  /**
   * 숫자 INPUT에서 숫자이외 값 입력 막기.
   */




  $(document).on('change', '.date-picker, .date-range', function () {
    var pattern = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi;
    var format = $(this).data('format');
    if (!format && !$(this).data('notCheck')) {
      format = 'YYYY-MM-DD'
    }
    var beforeFormat;
    var convertDate;
    if (format) {
      beforeFormat = format.replace(pattern, '');
      convertDate = moment($(this).val(), beforeFormat).format(format);
      if (convertDate == 'Invalid date') {
        $.alert('날짜형식이 틀렸습니다.');
        $(this).val('');
      } else {
        $(this).val(convertDate);
      }
    }
  });

  $.fn.hasHorizontalScrollBar = function() {
    return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
  };

  $.fn.hasVerticalScrollBar = function() {
    return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
  };


  $(document).on('focusout','.time-picker, .time-picker-second',function(){
    $(this).removeClass('error');
    $(this).attr("title","");
  });

  $(document).on('focusout','.time-picker, .time-picker-second',function(){
    var format = $(this).data('format');
    if ($(this).val() == '') {
      return;
    }
    if (!moment($(this).val(),format).isValid()) {
      $(this).val('');
      $(this).addClass('error');
      $(this).attr('title',message.valid.time);
      $.alert(message.valid.time);




    }
  });

  $.getMymenu = function() {
      var template = '';
      var myMenu = $('#left-favorite-menu .nav');
      myMenu.html('');
      $.get('/sys/menu/sysMenu/getMyMenuList', function(dataList) {
          $.each(dataList, function(idx, data) {
              template += '<li id="Menu'+data.menuId+'" class="nav-item">';
              template += '<div class="nav-link-div"> <a href="'+data.pgmUrl+'" target="_blank" class="nav-link">'+data.menuName+'</a></div>';
              template += '<div class="star">';
              template += '<button id="btnMenu'+data.menuId+'" value="1839'+data.menuId+'" onclick="myMenuFunction('+data.menuId+')" class="on"><img></button>';
              template += '</div>';
              template += '</li>';
          });
          myMenu.append(template)
      });
  }

  $(document).on('click', '#myMenu', function(e) {
      $.getMymenu();
  });

  $(document).on('click','.ui-dialog-titlebar-close, .js-modal-close', function(){
    var parents = $(this).parents('.ui-widget-content');
    var mercuryModal = parents.children('.mercury-modal');
    if (mercuryModal) {
      if (mercuryModal.data('closeEvent') == true  && mercuryModal.data('callback')) {
          window[mercuryModal.data('callback')]({});
      }
    }
  });

  $(document).on('click','#sidetabs a', function(e){
      e.preventDefault();
      var li = $(this).parents('li');
      if (!li.hasClass('on')) {
          $(".sidebar-nav").hide();
          $("#sidetabs").find('li').each(function(){
              $(this).removeClass('on');
          });
          li.addClass("on");
          $('#'+li.data('target')).show(); // Show scontent for current tab
      }
  });

  $(document).on('blur','.month-picker', function(e) {
    if ($(this).data('callback')) {
        window[$(this).data('callback')]($(this).val());
    }

    $(e.target).trigger('change');
  });

  $(document).on('change', '.month-picker' , function () {
    var pattern = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi;
    var format = $(this).data('format');
    if (!format && !$(this).data('notCheck')) {
      format = 'YYYY-MM'
    }
    var beforeFormat;
    var convertDate;
    if (format) {
      beforeFormat = format.replace(pattern, '');
      convertDate = moment($(this).val(), beforeFormat).format(format);
      if (convertDate == 'Invalid date') {
        $.alert('날짜형식이 틀렸습니다.');
        $(this).val('');
      } else {
        $(this).val(convertDate);
      }
    }
  });

}(jQuery));