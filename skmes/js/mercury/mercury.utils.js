var activeDialogError=true;
var ______excelGrid______;
var ______list______;
var ______listCount______ = 0;
(function ($) {
    $.equals = function( x, y ) {
          return JSON.stringify(x) === JSON.stringify(y);
        }
  var getAcrobatInfo = function() {

      var getBrowserName = function() {
          return this.name = this.name || function() {
              var userAgent = navigator ? navigator.userAgent.toLowerCase() : "other";

              if(userAgent.indexOf("chrome") > -1)        return "chrome";
              else if(userAgent.indexOf("safari") > -1)   return "safari";
              else if(userAgent.indexOf("msie") > -1 || userAgent.indexOf("trident") > -1)  return "ie";
              else if(userAgent.indexOf("firefox") > -1)  return "firefox";
              return userAgent;
          }();
      };

      var getActiveXObject = function(name) {
          try { return new ActiveXObject(name); } catch(e) {return null;}
      };

      var getNavigatorPlugin = function(name) {
          for(key in navigator.plugins) {
              var plugin = navigator.plugins[key];
              if(plugin.name == name) return plugin;
          }
      };

      var getPDFPlugin = function() {
          return this.plugin = this.plugin || function() {
              if(getBrowserName() == 'ie') {
                  //
                  // load the activeX control
                  // AcroPDF.PDF is used by version 7 and later
                  // PDF.PdfCtrl is used by version 6 and earlier
                  return getActiveXObject('AcroPDF.PDF') || getActiveXObject('PDF.PdfCtrl');
              }
              else {
                  return getNavigatorPlugin('Adobe Acrobat') || getNavigatorPlugin('Chrome PDF Viewer') || getNavigatorPlugin('WebKit built-in PDF');
              }
          }();
      };

      var isAcrobatInstalled = function() {
          return !!getPDFPlugin();
      };

      var getAcrobatVersion = function() {
          try {
              var plugin = getPDFPlugin();

              if(getBrowserName() == 'ie') {
                  var versions = plugin.GetVersions().split(',');
                  var latest   = versions[0].split('=');
                  return parseFloat(latest[1]);
              }

              if(plugin.version) return parseInt(plugin.version);
              return plugin.name

          }
          catch(e) {
              return null;
          }
      }
      // The returned object
      return {
          browser:        getBrowserName(),
          acrobat:        isAcrobatInstalled() ? 'installed' : false,
          acrobatVersion: getAcrobatVersion()
      };
  };

  $.fn.getDataSet = function() {
      return $(this).serializeObject();
  }

  $.fn.serializeObject = function (variable) {
    var object = {};
    var array;
    var prefix = variable ? variable + '.' : '';
    $(this).find('input, select, textarea').each(function () {
      if(!this.name) {
        return true;
      }
      var name = prefix + this.name;

      if ($(this).prop('type') == 'checkbox') {
        var value = 'N';
        if ($(this).is(':checked')) {
          value = this.value;
        } else {
          if ($(this).data('unchecked')) {
            value = $(this).data('unchecked');
          }
        }
        if (object[this.name] !== undefined) {

          //object[name].push(value);
            object[name] = value;
        } else {
          object[name] = value;
        }
        return true;
      }

      if ($(this).prop('type') == 'radio') {
        if ($(this).is(':checked')) {
          object[name] = this.value;
        }
        return true;
      }


      if ($(this).prop('tagName') == 'SELECT' && $(this).prop('multiple')) {
        var name = prefix+this.name;
        var values = {};
        var i = 0;
        $.each($(this).val(),function(idx, value) {
          values[name+'[' + i + ']'] = value;
          i++;
        });
        $.extend(object,values);
        return true;
      }

      if ($(this).hasClass('num') || $(this).hasClass('num2')) {
        this.value = this.value.replace(/,/g, '');
      }

      var name  = prefix+this.name;
      if (object[name] !== undefined) {
        if (!object[name].push) {
          object[name] = [object[name]];
        }
        object[name].push(this.value || '');
      } else {
        object[name] = this.value || '';
      }
    });

    return object;
  };

  $.fn.serializeFile = function(paramName){
    var fileArea = $(this);
    var dataCount = 0;
    var rowCount = 0;
    var formData = new FormData();
    var storage = fileArea.data('storage');
    var referenceKey = fileArea.data('referenceKey');
    var fileId = fileArea.data('fileId');
    var ext = fileArea.data('ext');
    var extErr = "N";

    if(fileId == "") {
        if($(this)[0].dataset.fileId)
            fileId = $(this)[0].dataset.fileId;
    }


    if (fileId) {
      formData.append('id', fileId);
    }

    if (referenceKey) {
        formData.append('referenceKey', referenceKey);
    }

    if(fileArea.find('input[type="file"]').length > 0) {
        fileArea.find('input[type="file"]').each(function (idx) {

            if(!$.isNull(ext) && !$.isNull($(this)[0].files[0])) {
              var type = $(this)[0].files[0].type;

              if(type.indexOf(ext) < 0) {
                  extErr = "Y";
                }
            }

            if(extErr == "N") {
                var style = $(this).parent().parent()[0].attributes.style;
                if(style !== undefined) {
                    if($(this).parent().parent()[0].attributes.style.value.indexOf("display: none") < 0){
                        formData.append('uploadfile[' + idx + ']', $(this)[0].files[0]);
                        dataCount++;
                    }
                } else {
                    formData.append('uploadfile[' + idx + ']', $(this)[0].files[0]);
                    dataCount++;
                }

            } else {
              return false;
            }
          });
    }
    // [수정 및 변경에 유의]!!!!
    var object = $(this).find('.file-set');
    rowCount = 0;
    var objectChildOption;
    var objectChildFileSize;

    for(i = 0; i < object.length; i++ ) {
        objectChildOption = object[i].style.display;
        objectChildFileSize = object[i].children[2].innerText;
        if(objectChildOption != "none"){
            rowCount++;
        } else {
            if (objectChildFileSize != "") {
                formData.append('deleteFiles',  fileId+ ';' + object[i].dataset.fileSeq);
                dataCount++;
            }
        }
    }

    formData.append('others', storage);
    /**
     * 파일저장 정책이 정해지면 주석을 풀어야 함.
     */
    /*
     * $.each(Storage[storage], function (key, value) {
     *
     * });
     */
    return { data:formData,paramName:paramName,rowCount:rowCount,dataCount:dataCount,extErr:extErr,fileId:fileId};
  };

  $.convertJsonList = function (fieldName, data) {
    var i = 0;
    var dataSet = {};
    $.each(data, function (idx, list) {
      $.each(list, function (field, value) {
        if (typeof value != 'undefined' && value !== '') {
          dataSet[fieldName + '[' + i + '].' + field] = value;
        }
      });
      i++;
    });
    return dataSet;
  };

  $.downFile = function(fileId, fileSeq) {
      location.href = '/files/' + fileId + '/' + fileSeq + '/download';
  }

  $.fn.loadFile = function (fileId, params, callback) {
    var url = '/files/'+fileId+'/all';

    if (fileId && typeof fileId == 'object') {
        if (fileId.referKey) {
          url = '/files/reference/'+fileId.referKey+'/all'
        } else {
          return;
        }
    }
    var table = $(this).children('table');
    var fileForm = $(this);
    var fileId;

    if (typeof params == 'function') {
      callback = params;
      params = null;
    }

    var table = fileForm.find('.file-list');
    var tbody = table.find('tbody');
    var length;
    tbody.html('');
    $.get(url, params, function (data) {
      $.each(data, function (key, value) {
        fileId = value.id;
        length= moment().format('YYYYMMDDhhmmss')+table.find('.mercury-file-row').length;
        var template = '<tr style="height: auto;" class="file-set mercury-file-row"  data-file-seq="' + value.backNumber + '">';
        template += '<td style="vertical-align:middle;"><div class="check txt_center" style="padding-left: 2px;padding-top: 2px;"><input id="checkbox-'+length+'" class="checkbox-custom file-check" name="checkbox-'+length+'" type="checkbox" ><label for="checkbox-'+length+'" class="checkbox-custom-label"></div></td>'
        template += '<td><button class="btn btn-sm btn-primary down-file-li">' + old.js.common.button.down + '</button><span>' + value.originalFilename + '</span></td>';
        template += '<td align="right">'+ $.number(Math.round(value.fileSize/1024))+' KB</td>';
        template += '</tr>';

        tbody.append(template);
      });

      fileForm.attr('data-file-id', fileId);

      if (callback) {
        callback(data);
      }
    })
  };

  $.fn.editable = function(disabled, buttonType) {
    var newButton = true;
    var removeButton = true;
    var fileForm = $(this);
    if (typeof disabled == 'undefined') {
      disabled = false;
    }
    if (buttonType == 'N') {
      removeButton = false;
    }

    if (buttonType == 'R') {
      newButton = false;
    }

    if(newButton) {
      fileForm.children('.new-file-input').prop('disabled',!disabled);  // 추가버튼
    }

    if (removeButton) {
      fileForm.children('.remove-file').prop('disabled',!disabled);     // 삭제버튼
    }
  };

/**
 * 1. DatePicker 2. WeekPicker 3. TimePicker
 */

  var _datePickerOptions = {
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    showOn:'button',
    buttonText: '<i class="fa fa-calendar fa-fw"></i>',
    minDate: '1900-01-01',
    maxDate: '2999-12-31',
    prevText: common.month.prev,
    nextText: common.month.next,
    monthNames: [common.month.month1, common.month.month2, common.month.month3, common.month.month4, common.month.month5, common.month.month6, common.month.month7, common.month.month8, common.month.month9, common.month.month10, common.month.month11, common.month.month12],
    monthNamesShort: [common.month.month1, common.month.month2, common.month.month3, common.month.month4, common.month.month5, common.month.month6, common.month.month7, common.month.month8, common.month.month9, common.month.month10, common.month.month11, common.month.month12],
    dayNames: [common.day.sun, common.day.mon, common.day.tue, common.day.wed, common.day.thu, common.day.fri, common.day.sat],
    dayNamesShort: [common.day.sun, common.day.mon, common.day.tue, common.day.wed, common.day.thu, common.day.fri, common.day.sat],
    dayNamesMin: [common.day.sun, common.day.mon, common.day.tue, common.day.wed, common.day.thu, common.day.fri, common.day.sat],
    weekHeader:biz.date.week
    /*
     * buttonImage:"/images/side-in.png", buttonImageOnly:true
     */
  };

  var _weekOption = {
      showWeek: true,
      firstDay: 0
  };

  $.fn.lDatepicker = function(options) {
    if (!options) {
      options = {};
    }
    var callback = $(this).data('callback');
    $.extend(options, _datePickerOptions);
    $.extend(options, old.js.common.datepicker);
    $(this).prop('readonly', false);
    if ($(this).prop('readonly')) {
      $(this).prop('readonly', true);
    }

    if (typeof  $(this).data('week') =='undefined' || $(this).data('week')==true) {
      var format = 'YYYY - W';
      if ($(this).data('format')) {
        format = $(this).data('format');
      }

      $.extend(options, _weekOption);
      if($(this).data('week')==true && !$(this).hasClass('date-range')) {
        $.extend(options, {
          onSelect: function(dateText, inst) {
            var value = moment(dateText,'YYYY-MM-DD').format(format);
            if (format.indexOf('W') > -1) {
              var date = new Date(dateText);
              value = moment(date.getFullYear()+'-'+moment(date).week(),'YYYY-W').format(format);
            }
              if (!$(this).data('format')) {
                  value += old.js.common.datepicker.weekName;
              }
            $(this).val(value);
              if (callback) {
                window[callback](value);
              }
          }
        });
      }
    }

   if($(this).data('timeFormat') && !$(this).hasClass('date-range')) {
     var insFormat = $(this).data('timeFormat');
     $.extend(options, {
       onSelect: function(dateText, inst) {
         var nowDate = moment();
         var tempDate = moment(nowDate,'YYYY-MM-DD').format('YYYY-MM-DD');
         if(tempDate == dateText){
           $(this).val(moment(nowDate,'YYYY-MM-DD').format('YYYY-MM-DD ' + insFormat));
         } else {
           if(insFormat == 'hh:mm:ss') {
             $(this).val(moment(dateText,'YYYY-MM-DD hh-mm-ss').format('YYYY-MM-DD ' + '00:00:00'));
           } else if(insFormat == 'hh:mm') {
             $(this).val(moment(dateText,'YYYY-MM-DD hh-mm-ss').format('YYYY-MM-DD ' + '00:00'));
           } else if(insFormat == 'hh') {
             $(this).val(moment(dateText,'YYYY-MM-DD hh-mm-ss').format('YYYY-MM-DD ' + '00'));
           }
         }
       }
     });
   }

    return $(this).datepicker(options);
  };

  $.fn.lDaterange = function(options) {
    if (!options) {
      options = {};
    }

    $.extend(options, _datePickerOptions);
    $.extend(options, old.js.common.datepicker);

    $(this).prop('readonly', true);
    if ($(this).data('format')) {
      $(this).prop('readonly', false);
    }

    var pairDateform;
    var dateOption;
    if ($(this).data('to')) {
      pairDateform = $(this).data('to');
      dateOption = 'minDate';
    } else if ($(this).data('from')) {
      pairDateform = $(this).data('from');
      dateOption = 'maxDate';
    }

    if (!$(this).data('week') || $(this).data('week') != 'false') {
      $.extend(options, _weekOption);
    }

    $(this).lDatepicker().on('change', function () {
      $('#' + pairDateform).datepicker('option', dateOption, $.datepicker.parseDate(options.dateFormat, this.value));
    });
  };

  $.fn.lTimepicker = function(options){

    $(this).timepicker(options);
  };


  $('.week-picker .ui-datepicker-calendar tr').on('mousemove', function() { $(this).find('td a').addClass('ui-state-hover'); });
  $('.week-picker .ui-datepicker-calendar tr').on('mouseleave', function() { $(this).find('td a').removeClass('ui-state-hover'); });

  $(document).on("click", ".ui-datepicker-week-col", function() {
    $(this).parents('tr').children('td').each(function(){
      if ($(this).data('handler')) {
        $(this).click();
        return false;
      }
    });
  });

  $.getSync = function (url, data, callback) {
    if ($.isFunction(data)) {
      callback = data;
      data = {};
    }

    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      async: false,
      success: callback
    });
  };

  $.postSync = function (url, data, callback) {
    if ($.isFunction(data)) {
        callback = data;
        data = {};
    }

    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        async: false,
        success: callback
    });
  };

  $.getHtml = function (url, data, callback) {
        if ($.isFunction(data)) {
          callback = data;
          data = {};
        }

        setTimeout(function(){
            $.ajax({
              url: url,
              type: 'GET',
              data: data,
              dataType : "text",
              async: true,
              success: callback
            });
        }, 50);
   };


  /**
     * 셀렉트박스를 초기화 해주는 함수
     */
  $.fn.select = function (textField, valueField, data, defaultOption) {
    var selectBox = $(this);
    $(selectBox).empty();

    if (defaultOption) {
      $(selectBox).append('<option value=' + defaultOption.value + ' selected>' + defaultOption.text + '</option>');
    }

    $.each(data, function (key, value) {
      $(selectBox).append('<option value=' + value[valueField] + '>' + value[textField] + '</option>');
    });
  };

  $.fn.load = function (url, param, callback, options) {
    if (typeof callback == 'object') {
      options = callback;
      callback = null;
    }

    $.get(url, param, function (data) {

      $(this).formBind(data, options);
      if (callback) {
        callback(data);
      }
    })
  };

  $.fn.formClear = function() {
    $(this).find('select, input, textarea, .data-bind').each(function(){
      if ('SELECT, INPUT, TEXTAREA'.indexOf($(this).prop('tagName')) > -1) {
        if ('RADIO, radio'.indexOf($(this).prop('type')) > -1) {
            $(this)[0].checked = false;
        } else
            elementBind($(this), '');
      } else {
        $(this).html('');
      }
    });
  };

  $.fn.formBind = function (data, callback, options) {
    $(this).validClear();
    if (typeof callback == 'object') {
      options = callback;
      callback = null;
    }

    var area = $(this);

    $.each(data, function (key, value) {
      $(area).find('input[name=' + key + '], select[name=' + key + '], textarea[name=' + key + ']').each(function () {
          if ('RADIO, radio'.indexOf($(this).prop('type')) > -1) {
              var radio = $(this);
              var radioName = $(this).prop('name');
                var radioValue = $(this).prop('value');
                $(area).find('input[name=' + key + '], select[name=' + key + '], textarea[name=' + key + ']').each(function () {
                    if(('HIDDEN, hidden'.indexOf($(this).prop('type')) > -1) && ($(this).prop('value') == radioValue) && ($(this).prop('name') == radioName)) {
                        radio[0].checked = true;
                        return false;
                    }
                });
          } else {
              elementBind($(this), value);
          }
      });

      $(area).find('.'+key).each(function(){
        if ('SELECT, INPUT, TEXTAREA'.indexOf($(this).prop('tagName')) > -1) {
          elementBind($(this), value);
        } else {
          $(this).html(value);
        }
      });

    });

    $.number();
    $.numberFormat();


      if (callback) {
      callback(data);
    }
  };

  function elementBind(element, value) {
    if ($(element).attr('type') != 'checkbox') {
      $(element).val(value);
    } else {
      if ($(element).val() == value) {
        $(element).prop('checked', true);
      } else {
        $(element).prop('checked', false);
      }
    }
  }

  $.rest = function (url, data, callback, type, processData, method) {

    if ($.isFunction(data)) {
      processData = processData || type,
        type = callback,
        callback = data,
        data = {}
    }
    var options = {
      url: url,
      type: method,
      success: callback,
      data: data
    };
    if (typeof type != 'undefined' && type != null) {
      $.extend(options, {contentType: type});
    }

    if (typeof processData != 'undefined' && processData != null) {
      $.extend(options, {processData: processData});
    }
    return $.ajax(options);
  };

  $.put = function (url, data, callback, type) {
    return $.rest(url, data, callback, type, true, 'PUT');
  };

  $.delete = function (url, data, callback, type) {
    return $.rest(url, data, callback, type, true, 'DELETE');
  };

  $.postFile = function (url, data, callback) {
    return $.rest(url, data, callback, false, false, 'POST');
  };

  $.save = function (url, data, file, callback, method) {
    if (typeof file == 'function') {
      callback = file;
      file = null;
    }

    if (data) {
      delete data.Sd;
    }

    if (!method) {
      method = 'POST';
    }
    if (file && file.dataCount > 0) {
      var fileUrl = '/files';
      var paramName = 'fileBuckets';
      var fileCount = null;
      var deleteFileCount = 0;

      if (file.rowCount == 0) {
          file.fileId = "";
      }

      if (file.paramName) {
        paramName = file.paramName;
      }

      $.postFile(fileUrl, file.data, function (result) {
        var params = {};
        fileCount = result.length;
        $.extend(params, data);

        if (result && fileCount > 0) {
          if (result[0]) {
            $.extend(params, {fileId:result[0].id});
          }
          $.each(result, function(idx, value) {
            delete value.loginUser;
            if (value.deleted==true) {
              deleteFileCount++;
            }
          });

          if (fileCount == deleteFileCount) {
              if(typeof file.rowCount == 'undefined' || file.rowCount == null) {
                  delete params.fileId;
              } else if (file.rowCount < 1) {
                  delete params.fileId;
              }
          }

          $.extend(params, $.convertJsonList(paramName, result));
        }
        if (url == null) {
          if (method) {
              method(result);
          }
          return;
        }
        $.rest(url, params, callback, null, true, method);
      });
    } else {
        if (file && file.dataCount == 0 && file.rowCount > 0) {
            data.fileId = file.fileId;
        }
        $.rest(url, data, callback, null, true, method);
    }
  };

  $.excel = function (url, file, callback) {
    if (typeof file == 'function') {
      callback = file;
      file = url;
      url = null;
    }

    if (typeof url != 'string') {
      url = '/api/excels'
    }
    $.postFile(url, file.data, callback);
  };

  $.excelOne = function (url, file, callback) {
    if (typeof file == 'function') {
      callback = file;
      file = url;
      url = null;
    }

    if (typeof url != 'string') {
        url = '/api/excels/single'
    }
    $.excel(url, file, callback);
  };

  $.excelUpload = function (grid, callback)  {
      var rowNum = 0;
      var formData = new FormData();

      // var input = event.target;

      formData.append('id', moment().format('YYYY_MM_DD_HH_mm_ss'));
      formData.append('uploadfile[0]', event.target.files[0]);
      formData.append('others', 'EXCEL');

      var input = event.target;

      ______excelGrid______ = grid;
      var reader = new FileReader();
      reader.onload = function(){

          $.postFile('/excelFile', formData, function (result) {
              var rowObj = result; // XLSX.utils.sheet_to_json(targetData);
              var fieldName = {};
              var headerName = {};
              for(var i = 0 ; i < rowObj.length ; i++) {
                  ______excelGrid______.addRow();
                  for(key in rowObj[i]) {
                      var gridCol = ______excelGrid______.__options.column;
                      for(var j = 0 ; j < gridCol._columnsName.length ; j++){
                          if (gridCol._columns[j].hasOwnProperty('group')) {
                              if (gridCol._columns[j].group) {
                                  var groupLength = gridCol._columns[j].columns.length;
                                  for (var k=0; k < groupLength; k++) {
                                      fieldName = gridCol._columns[j].columns[k].fieldName.toLowerCase();
                                      headerName = gridCol._columns[j].columns[k].header.text.toLowerCase();
                                      if((key.toLowerCase() == fieldName) || (key.toLowerCase() == headerName)) {
                                          ______excelGrid______.setValues(i, fieldName, rowObj[i][key]);
                                      }
                                  }
                              }
                          } else {
                              fieldName = gridCol._columns[j].fieldName.toLowerCase();
                              headerName = gridCol._columns[j].header.text.toLowerCase();
                              if((key.toLowerCase() == fieldName) || (key.toLowerCase() == headerName)) {
                                  ______excelGrid______.setValues(i, fieldName, rowObj[i][key]);
                                  break;
                              }
                          }
                      }
                  }
              }
              ______excelGrid______ = '';

              if (callback) {
                  callback(rowObj);
              }
          });
      };
      reader.readAsArrayBuffer(input.files[0]);
  };

  $.json2Excel = function(listMap) {
      var wb = XLSX.utils.book_new();
      var newWorksheet;
      var wbout;
      var headerText = '';

      for(var i = 0 ; i < listMap.length ; i++) {
          var gridList = [];
          for( var j = 0 ; j < listMap[i].data.length ; j++ ){
              var cols = listMap[i].grid.__options.column._columns;
              var gridObj = {};
              for(var k = 0 ; k < cols.length ; k++ ) {

                  if( cols[k].visible == undefined) {

                  } else {
                      if (!cols[k].visible)
                          continue;
                  }

                  if( !$.isNull(cols[k].type) && cols[k].type == 'group') {
                      for(var l = 0 ; l < cols[k].columns.length ; l++) {
                          var key = cols[k].columns[l].fieldName;
                          var val = listMap[i].data[j][cols[k].columns[l].fieldName];
                          var obj = new Object();
                          obj[key] = val;
                          $.extend(gridObj , obj);
                      }
                  }
                  else {
                      var key = cols[k].fieldName
                      var val = listMap[i].data[j][cols[k].fieldName]
                      var obj = new Object();
                      obj[key] = val;
                      $.extend(gridObj , obj);
                  }
              }
              gridList.push(gridObj);
          }

            if ((!$.isNull(listMap[i].grid)) && (gridList.length > 0))  {
          var cols = listMap[i].grid.__options.column._columns;

              newWorksheet = XLSX.utils.json_to_sheet(gridList);
              XLSX.utils.book_append_sheet(wb, newWorksheet, listMap[i].title);



              var lastCell = newWorksheet["!ref"].split(":")[1].toLowerCase();
              var last = lastCell.charCodeAt(0) - 96;
              if (lastCell.charCodeAt(1) > 96)
                  last = last + lastCell.charCodeAt(1) - 96;

              for(var k = 0 ; k < last ; k++){
                  var tempName = newWorksheet[String.fromCharCode(k+65) + "1"].v;

                  for(var j = 0 ; j < cols.length ; j++){

                      if( !$.isNull(cols[j].type) && cols[j].type == 'group') {
                          headerText = cols[j].header.text + '-';

                          for(var l = 0 ; l < cols[j].columns.length ; l++) {
                              if(cols[j].columns[l].fieldName.toLowerCase() == tempName.toLowerCase()) {
                                  newWorksheet[String.fromCharCode(k+65) + "1"].v = headerText + cols[j].columns[l].header.text;
                                  break;
                              }
                          }

                      } else {
                          if(cols[j].fieldName != undefined) {
                              if(cols[j].fieldName.toLowerCase() == tempName.toLowerCase()) {
                                  newWorksheet[String.fromCharCode(k+65) + "1"].v = cols[j].header.text;
                                  break;
                              }
                          }
                      }
                  }
              }
          }

          wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
      }

      return (new Blob([s2ab(wbout)],{type:"application/octet-stream"}));
  };

  // 비동기식으로 동작하므로 조회 쿼리 속도가 심각하게 저하됐을경우 오작동 있을수 있음.
  $.url2Excel = function(listMap) {
      var list = [];
      for(var i = 0 ; i < listMap.length ; i++) {
          if ($.isNull(listMap[i].param)) {
              $.getSync(listMap[i].url , function(data) {
                  if ($.isNull(listMap[i].grid))
                      list.push({title: listMap[i].title, data: data});
                  else
                      list.push({title: listMap[i].title, data: data, grid: listMap[i].grid});

                  if (i == listMap.length - 1)
                      saveAs($.json2Excel(list) , moment().format('YYYY-MM-DD') +'.xlsx');

                  return;
              });
          }
          else {
              $.getSync(listMap[i].url , listMap[i].param, function(data) {
                  if ($.isNull(listMap[i].grid))
                      list.push({title: listMap[i].title, data: data});
                  else
                      list.push({title: listMap[i].title, data: data, grid: listMap[i].grid});

                  if (i == listMap.length - 1)
                      saveAs($.json2Excel(list) , moment().format('YYYY-MM-DD') +'.xlsx');
                  return;
              });
          }
      }
  };

  $.callGridResize = function() {
        var height = $(window).height();
        var bottomGrid = $(document).find('.bottom-grid');
        var searchFormSize = 0;
        var searchFormDefaultSize = 25;
        var gridTitle = 45;
        var mesHeader = 80;
        if ($(document).find('.search-form').length > 0 ) {
            searchFormSize = searchFormDefaultSize + $(document).find('.search-form').height();
        } else {
            if ($(document).find('.search-form2').length > 0 ) {
                searchFormSize = searchFormDefaultSize + $(document).find('.search-form2').height();
            }
        }
        for(var i = 0 ; i < bottomGrid.length ; i++) {
            var className = bottomGrid[i].className;
            var len = parseInt(className.substring(className.lastIndexOf("marginB") + ("marginB:").length, className.length));
            var offSetTop =  bottomGrid[i].parentElement.offsetTop;
            if ((!$.isNull(bottomGrid[i].parentElement.offsetParent)) && ( bottomGrid[i].parentElement.offsetParent.offsetTop > 0) && ( bottomGrid[i].parentElement.offsetParent.offsetTop < 105))
                offSetTop += bottomGrid[i].parentElement.offsetParent.offsetTop;
            bottomGrid[i].style.height = (window.innerHeight - offSetTop - mesHeader- gridTitle - searchFormSize - len) + "px";
        }
  }


  $.isApprovalUrl = function(){
      if(window.location.search.replace("?","").split("=")[0] == "approvalId")
          return true;
      else
          return false;
  }

  $.loadSearchCondition = function(callback){
      if($.isApprovalUrl())
          loadApprovalSearchCondition(callback);
      else
          loadRecentSearchCondition(callback);
  }

  function loadApprovalSearchCondition(callback){
      var mainGroup = null;
      var searchForm = document.getElementById('searchForm');
      var approvalId = window.location.search.replace("?","").split("=")[1];


      if ($.isNull(searchForm)) {
          if (callback) {
              callback();
          }
          return;
      }

      for(var i = 0; i < searchForm.childElementCount ; i++){
          if (searchForm.children[i].className.indexOf("main-group") > -1) {
              mainGroup = searchForm.children[i];
              break;
          }
      }

      if (mainGroup === null) {
          if (callback) {
              callback();
          }
          return;
      }

      var obj = new Object();
      obj.url = window.location.pathname + window.location.search;

      // List Load
      ______list______ = new Array();
      $.getSync('/sys/menu/sysMenu/approval/getSysApprovalSearchList', obj, function(result) {
          if(result.length > 0) {
              ______list______ = [];
              $.extend(______list______, result);
              findChildHasId(mainGroup, 'LOAD');
              ______list______ = null;
          }
          if (callback) {
              callback();
          }
      });
  }


  function loadRecentSearchCondition(callback) {

      var mainGroup = null;
      var searchForm = document.getElementById('searchForm');

      if ($.isNull(searchForm)) {
          if (callback) {
              callback();
          }
          return;
      }

      for(var i = 0; i < searchForm.childElementCount ; i++){
          if (searchForm.children[i].className.indexOf("main-group") > -1) {
              mainGroup = searchForm.children[i];
              break;
          }
      }

      if (mainGroup === null) {
          if (callback) {
              callback();
          }
          return;
      }

      var obj = new Object();
      obj.url = window.location.pathname;

      // List Load
      ______list______ = new Array();
      $.getSync('/sys/menu/sysMenu/recent/getSysMyRecentSearchList', obj, function(result) {
          if(result.length > 0) {
              ______list______ = [];
              $.extend(______list______, result);
              findChildHasId(mainGroup, 'LOAD');
              ______list______ = null;
          }
          if (callback) {
              callback();
          }
      });
  }

  $.makeApprovalSearchCondition = function(callback){
      var mainGroup = null;
      var searchForm = document.getElementById('searchForm');
      var rtnUrl = window.location.origin + window.location.pathname;

      if ($.isNull(searchForm)) {
          callback(rtnUrl);
          return;
      }

      for(var i = 0; i < searchForm.childElementCount ; i++){
          if (searchForm.children[i].className.indexOf("main-group") > -1) {
              mainGroup = searchForm.children[i];
              break;
          }
      }

      if (mainGroup === null){
          callback(rtnUrl);
          return;
      }

      var obj = new Object();
      obj.url = window.location.pathname;

      ______list______ = new Array();
      ______listCount______ = 0;
      findChildHasId(mainGroup, 'SAVE');


      var tab = $(document).find('.mercury-tabs');
      var tabs = tab[0].children[0];

      for(var i = 0 ; i < tabs.childElementCount ; i++ ) {
          var item = tabs.children[i].children[0];
          if(item.className.indexOf("active") > -1) {
              ______list______['sysMyRecentSearchList[' + ______listCount______ + '].id'] = 'selectedTabId';
              ______list______['sysMyRecentSearchList[' + ______listCount______ + '].value'] = item.hash;
              ______listCount______++;
          }
      }

      $.extend(obj, ______list______);

      // List Save
      $.save('/sys/menu/sysMenu/approval/saveSysApprovalSearchList', obj, function(result) {
          ______list______ = null;
          ______listCount______ = 0;

          if(result.rtn > 0){
              rtnUrl = window.location.origin + result.url;
          }

          callback(rtnUrl);
      });
  }

  $.searchFormBtnClick = function(searchForm, target) {
      var mainGroup = null;
      var available = false;

      if ($.isNull(searchForm))
          return;

      if (target.length > 1)
          return;

      for(var i = 0; i < searchForm.childElementCount ; i++){
          if (searchForm.children[i].className.indexOf("main-group") > -1) {
              mainGroup = searchForm.children[i];
              break;
          }
      }

      if (mainGroup === null)
          return;

      for(var i = 0; i < searchForm.childElementCount ; i++){
          if (searchForm.children[i].className.indexOf("btn-group") > -1) {
              for(var j = 0 ; j < searchForm.children[i].childElementCount; j++){
                  if(target[0] == searchForm.children[i].children[j]) {
                      available = true;
                      break;
                  }
              }
          }
      }

      if (!available)
          return;

      var obj = new Object();
      obj.url = window.location.pathname;

      if (target[0].id.toUpperCase().indexOf("SEARCH") > -1)
      {
          ______list______ = new Array();
          ______listCount______ = 0;
          findChildHasId(mainGroup, 'SAVE');

          $.extend(obj, ______list______);

          // List Save
          $.save('/sys/menu/sysMenu/recent/saveSysMyRecentSearchList', obj, function(result) {
              ______list______ = null;
              ______listCount______ = 0;
          });
      }
  }

  function findChildHasId(element, mode){
      if(element.childElementCount > 0) {
          for(var i = 0 ; i < element.childElementCount ; i++) {
              if($.isNull(element.id))
                  findChildHasId(element.children[i], mode);
              else {
                  pushItems(element, mode);
                  break;
              }
          }
      } else {
          findBroHasId(element, mode);
      }
  }

  function findBroHasId(element, mode){
      if(!$.isNull(element.id)) {
          pushItems(element, mode);
      }
      if(!$.isNull(element.nextSibling))
          findBroHasId(element.nextSibling, mode);
  }

  function pushItems(element, mode){
      if(mode == 'SAVE' ){
          var dup = false;
          for(var i = 0 ; i < ______listCount______ ; i++) {
              if(______list______['sysMyRecentSearchList[' + i + '].id'] == element.id) {
                  dup = true;
                  break;
              }
          }
          if((!dup) && (!$.isNull(element.id))) {
              ______list______['sysMyRecentSearchList[' + ______listCount______ + '].id'] = element.id;
              ______list______['sysMyRecentSearchList[' + ______listCount______ + '].value'] = element.value;
              ______listCount______++;
          }
      } else {
          for(var i = 0 ; i < ______list______.length ; i++){
             if( element.id ==  ______list______[i].id){
                 element.value = ______list______[i].value;
                  if (element.nodeName.toUpperCase() == "SELECT") {
                     var tempName = '#'+ element.id;
                     $(tempName).trigger('change');
                  }
                 break;
             }
             if (______list______[i].id == 'selectedTabId')
                 $('.nav-tabs a[href="' + ______list______[i].value + '"]').click();
          }
      }
  }

  function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
  }

  $.fn.setOptions = function (data, options) {
    var value = 'code';
    var textField = 'descr';
    var select = this;
    var drawAll = true;
    var drawChoice = true;
    var defaultText = old.js.common.all;
    var defaultValue = '';
    var isCode = false;
    var text;

    if (options) {
      if (options.value) {
        value = options.value;
      }

      if (options.text) {
        textField = options.text;
      }

      if (options.defaultText) {
        defaultText = options.defaultText;
      }

      if (options.defaultValue) {
        defaultValue = options.defaultValue;
      }

      if (options.all == false) {
        drawAll = false;
      } else if (options.all) {
        defaultText = options.all;
      }

      if (options.choice == false) {
        drawChoice = false;
      } else if (options.choice) {
        defaultText = options.choice;
      }

      if (options.code) {
        isCode = options.code;
      }
    }

    if (drawAll != false && drawChoice !== false) {
      $(select).append('<option value="'+defaultValue+'">'+defaultText+'</option>');
    }

    $.each(data,function(idx, detail) {
      text = detail[textField];
      if (isCode) {
        text = '['+detail[value]+'] ' + text;
      }
      $(select).append('<option value="'+detail[value]+'">'+text+'</option>');
    });
  };

  $.fn.postReport = function(src, params) {
    $(this).report(src, params, true);
  };

  $.fn.report = function(src, params, isPost) {
    activeDialogError = false;
    var actionUrl='';
    var form = $(this);

    if (typeof params == 'boolean') {
      isPost = params;
      params = null;
    }

    if (typeof isPost == 'undefined') {
      isPost = false;
    }

    var authInfo = $.getTokenAuth('report');
    if(authInfo.isAuth==false){
      return;
    }

    actionUrl = authInfo.serverURL + src;

    if (isPost == false) {
        form.attr('src',  actionUrl + '?lang=' + _mes_lang + '&' + $.param(params));
    } else {
        var iframeForm = '<iframe id="ifrm_report_lang" name="ifrm_ifrm_report_lang" src="" width="0px" height="0px" style="display:none"/>';
        $('body').append(iframeForm);
        $('#ifrm_report_lang').attr('src',  authInfo.serverURL + '/ready?lang=' + _mes_lang);
        var reportInterval = setInterval(function() {
            if (_readyList.index && _readyList.index == true) {
                clearInterval(reportInterval);
                var template ='<form id="_reportForm" method="post" action="' + actionUrl + '"target="'+form.attr('id')+'"><textarea name="reportParams">'+JSON.stringify(params)+'</textarea></form>';
                $('body').append(template);
                $('#_reportForm').submit();
                $('#_reportForm').remove();

            }
        }, 2000);

    }
  };

  $.fn.reportExport = function(src, params, isPost) {
        activeDialogError = false;
        var actionUrl='';
        var form = $(this);

        if (typeof params == 'boolean') {
          isPost = params;
          params = null;
        }

        if (typeof isPost == 'undefined') {
          isPost = false;
        }

        var authInfo = $.getTokenAuth('report');
        if(authInfo.isAuth==false){
          return;
        }

        actionUrl = authInfo.serverURL + src;

        if (isPost == false) {
            form.attr('src',  actionUrl + '?lang=' + _mes_lang + '&' + $.param(params));
        } else {
            var iframeForm = '<iframe id="ifrm_report_lang" name="ifrm_ifrm_report_lang" src="" width="0px" height="0px" style="display:none"/>';
            $('body').append(iframeForm);
            $('#ifrm_report_lang').attr('src',  authInfo.serverURL + '/ready?lang=' + _mes_lang);
            var reportInterval = setInterval(function() {
                if (_readyList.index && _readyList.index == true) {
                    clearInterval(reportInterval);
                    var template ='<form id="_reportForm" method="post" action="' + actionUrl + '"target="'+form.attr('id')+'"><textarea name="reportParams">'+JSON.stringify(params)+'</textarea></form>';
                    $('body').append(template);
                    $('#_reportForm').submit();
                    $('#_reportForm').remove();

                }
            }, 2000);

        }
      };

  $.fnSaveAsPdf = function (target, direction ,fileName)  {
          if ((target == null) || (target == ""))
              target = document.body;

        html2canvas(target).then(function(canvas) {
          var imgData = canvas.toDataURL('image/png');
          var imgWidth;
          var pageHeight;
          var imgHeight;
          var heightLeft;
          var dir;
          var margin;

          if ((direction == null) || (direction == "")) {
              imgWidth = 280;
              margin = 10;
              pageHeight = 297 / 1.414;
              imgHeight = canvas.height * imgWidth / canvas.width;
              heightLeft = imgHeight;
              dir = 'landscape';
          } else {
              imgWidth = 210;
              margin = 0;
              pageHeight = 297;
              imgHeight = canvas.height * imgWidth / canvas.width;
              heightLeft = imgHeight;
              dir = 'p';
          }

          var doc = new jsPDF({
            'orientation': dir,
            'unit': 'mm',
            'format': 'a4'
          });

          var position = 0;
          doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          // 한 페이지 이상일 경우 루프 돌면서 출력
          while (heightLeft >= 20) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
          }

          doc.save(fileName+"_"+moment().format('YYYY-MM-DD') +'.pdf');
        });
      }

  $.getChartStepValue = function(min, max, stepCount) {

     var minVal;
     var maxVal;
      var max_min;
      var length_max_min;
      var pow_max_min;
      var rtnVal;

      if (max - min > 10) {
         minVal = min;
         maxVal = max;
      } else if (max - min < 0) {
         minVal = max;
         maxVal = min;
     } else {
         minVal = min * 10000;
         maxVal = max * 10000;
      }

      max_min = Math.round((maxVal - minVal) / stepCount);
     length_max_min = max_min.toString().length;

      if (length_max_min > 0)
          pow_max_min = Math.pow(10, length_max_min - 1);
      else
          pow_max_min = 1;

      rtnVal = Math.round( max_min /pow_max_min) * pow_max_min;

      if (max - min > 10) {
         rtnVal = rtnVal;
      } else if (max - min < 0) {
         rtnVal = rtnVal;
     } else {
         rtnVal = rtnVal / 10000;
      }

     return rtnVal;
  }

  $.getTokenAuth = function(type) {
    var isAuth = false;
    var serverURL = '';
    $.getSync('/token/'+type, function(reportInfo) {
      $.ajax({
        url: reportInfo.authURL,
        type: 'GET',
        async: false,
        xhrFields: {
          withCredentials: true
        },
        success: function (data) {
          if (data.resultCode == '200') {
            isAuth = true;
            serverURL = reportInfo.serverURL;
          }
        }
      });
    });
    return {isAuth:isAuth, serverURL:serverURL};
  };

  $.getReportUrl = function(src, params, isPost) {
    activeDialogError = false;
    var url;
    var authInfo;
    if (typeof params == 'boolean') {
      isPost = params;
      params = null;
    }

    if (typeof isPost == 'undefined') {
      isPost = false;
    }

    var authInfo = $.getTokenAuth('report');
    if(authInfo.isAuth==false){
      return;
    }


    return authInfo.serverURL + src + '?lang=' + _mes_lang + '&' + $.param(params);
  };



  $.toCamelCase = function(name){
    var result = '';
    var names = [];
    var fristPart;
    var secondPart;
    var word;
    name = name.toLowerCase();
    names = name.split('_');
    if (names.length == 1) {
      return name.toLowerCase();
    }

    for (var i=0; i<names.length ; i++) {
      word = names[i];
      if (i == 0) {
        result += word.toLowerCase();
        continue;
      }

      fristPart = word.substring(0, 1);
      result += fristPart.toUpperCase();
      secondPart = word.substring(1, word.length);
      result += secondPart;
    }
    return result;
  };

  $.fn.clearFile = function(){
    $(this).find('.file-list tbody').html('');
    $(this).removeData('fileId');
    $(this).removeAttr('data-file-id');
  }

    $.fn.valid = function(callback, callbackFalse) {
        var value;
        var element;
        var messages;
        var elementValid;
        var length;
        var isValid = true;
        var iscallbackFalse = true;
        var minDate = new Date('1900-01-01');
        var maxDate = new Date('2999-12-31');

        if (typeof callbackFalse !='undefined' && callbackFalse == false) {
            iscallbackFalse = false;
        }
        $(this).find('input, select, textarea').each(function () {
            messages = '';
            elementValid = true;
            element = $(this);

            if (element.attr('tagName') == 'textarea') {
                value = element.html();
            } else {
                value = element.val();
            }

            element.removeClass('error');
            element.attr('title','');

            if (element.attr('required')) {
                if (value == null || value =='') {
                    messages = messages + message.valid.required;
                    elementValid = false;
                }
            }
            length = element.data('length');
            if (elementValid && length) {
                if (value.length < length[0] || value.length > length[1]) {
                    messages = messages + message.valid.range + ' (' +length[0] +'~'+length[1]+')';
                    elementValid = false;
                }
            }

            if (elementValid && element.data('min')) {
                if (value < element.data('min')) {
                    messages = messages + message.valid.min;
                    elementValid = false;
                }
            }

            if (elementValid && element.data('max')) {
                if (value > element.data('max')) {
                    messages = messages + message.valid.max;
                    elementValid = false;
                }
            }

            if (elementValid && (element.hasClass('date-range') || element.hasClass('date-picker'))) {
                var valueDate = new Date(value);
                if (minDate > valueDate ||  maxDate < valueDate) {
                    messages = messages + message.valid.range;
                    elementValid = false;
                }
            }

            if (elementValid && element.data('from')) {
                var toDate = new Date(value);
                var fromDate = new Date($('#'+element.data('from')).val());
                if (toDate==fromDate || fromDate > toDate) {
                    messages = messages + message.valid.daterange;
                    elementValid = false;
                }
            }

            if (elementValid==false) {
                element.addClass('error');
                element.attr('title',messages);
                isValid = false;
            }

        });

        if ((!iscallbackFalse && isValid) || (iscallbackFalse && callback)) {
            callback(isValid);
        }
        return isValid;
    };

    $.fn.validClear = function(){
        $(this).find('.error').each(function () {
            $(this).removeClass('error');
        });
    }

    $.message = function (key /*
                                 * Add parameters as function arguments as
                                 * necessary
                                 */) {
        var value = (new Function ('return '+key))();
        if (value === null) {
            return '[' + key + ']';
        }

        var phvList;
        if (arguments.length == 2 && $.isArray(arguments[1])) {
            // An array was passed as the only parameter, so assume it is the
            // list of place holder values.
            phvList = arguments[1];
        }

        // Place holder replacement
        /**
         * Tested with: test.t1=asdf ''{0}'' test.t2=asdf '{0}' '{1}'{1}'zxcv
         * test.t3=This is \"a quote" 'a''{0}''s'd{fgh{ij' test.t4="'''{'0}''"
         * {0}{a} test.t5="'''{0}'''" {1} test.t6=a {1} b {0} c test.t7=a
         * 'quoted \\ s\ttringy' \t\t x
         *
         * Produces: test.t1, p1 ==> asdf 'p1' test.t2, p1 ==> asdf {0}
         * {1}{1}zxcv test.t3, p1 ==> This is "a quote" a'{0}'sd{fgh{ij test.t4,
         * p1 ==> "'{0}'" p1{a} test.t5, p1 ==> "'{0}'" {1} test.t6, p1 ==> a
         * {1} b p1 c test.t6, p1, p2 ==> a p2 b p1 c test.t6, p1, p2, p3 ==> a
         * p2 b p1 c test.t7 ==> a quoted \ s tringy x
         */

        var i;
        if (typeof(value) == 'string') {
            // Handle escape characters. Done separately from the tokenizing
            // loop below because escape characters are
            // active in quoted strings.
            i = 0;
            while ((i = value.indexOf('\\', i)) != -1) {
                if (value.charAt(i + 1) == 't') {
                    value = value.substring(0, i) + '\t' + value.substring((i++) + 2); // tab
                } else if (value.charAt(i + 1) == 'r') {
                    value = value.substring(0, i) + '\r' + value.substring((i++) + 2); // return
                } else if (value.charAt(i + 1) == 'n') {
                    value = value.substring(0, i) + '\n' + value.substring((i++) + 2); // line
                                                                                        // feed
                } else if (value.charAt(i + 1) == 'f') {
                    value = value.substring(0, i) + '\f' + value.substring((i++) + 2); // form
                                                                                        // feed
                } else if (value.charAt(i + 1) == '\\') {
                    value = value.substring(0, i) + '\\' + value.substring((i++) + 2); // \
                } else {
                    value = value.substring(0, i) + value.substring(i + 1); // Quietly
                                                                            // drop
                                                                            // the
                                                                            // character
                }
            }

            // Lazily convert the string to a list of tokens.
            var arr = [], j, index;
            i = 0;
            while (i < value.length) {
                if (value.charAt(i) == '\'') {
                    // Handle quotes
                    if (i == value.length - 1) {
                        value = value.substring(0, i); // Silently drop the
                                                        // trailing quote
                    } else if (value.charAt(i + 1) == '\'') {
                        value = value.substring(0, i) + value.substring(++i); // Escaped
                                                                                // quote
                    } else {
                        // Quoted string
                        j = i + 2;
                        while ((j = value.indexOf('\'', j)) != -1) {
                            if (j == value.length - 1 || value.charAt(j + 1) != '\'') {
                                // Found start and end quotes. Remove them
                                value = value.substring(0, i) + value.substring(i + 1, j) + value.substring(j + 1);
                                i = j - 1;
                                break;
                            } else {
                                // Found a double quote, reduce to a single
                                // quote.
                                value = value.substring(0, j) + value.substring(++j);
                            }
                        }

                        if (j == -1) {
                            // There is no end quote. Drop the start quote
                            value = value.substring(0, i) + value.substring(i + 1);
                        }
                    }
                } else if (value.charAt(i) == '{') {
                    // Beginning of an unquoted place holder.
                    j = value.indexOf('}', i + 1);
                    if (j == -1) {
                        i++; // No end. Process the rest of the line. Java
                                // would throw an exception
                    } else {
                        // Add 1 to the index so that it aligns with the
                        // function arguments.
                        index = parseInt(value.substring(i + 1, j));
                        if (!isNaN(index) && index >= 0) {
                            // Put the line thus far (if it isn't empty) into
                            // the array
                            var s = value.substring(0, i);
                            if (s !== "") {
                                arr.push(s);
                            }
                            // Put the parameter reference into the array
                            arr.push(index);
                            // Start the processing over again starting from the
                            // rest of the line.
                            i = 0;
                            value = value.substring(j + 1);
                        } else {
                            i = j + 1; // Invalid parameter. Leave as is.
                        }
                    }
                } else {
                    i++;
                }
            } // while

            // Put the remainder of the no-empty line into the array.
            if (value !== "") {
                arr.push(value);
            }
            value = arr;
        }

        if (value.length === 0) {
            return "";
        }
        if (value.length == 1 && typeof(value[0]) == "string") {
            return value[0];
        }

        var str = "";
        for (i = 0, j = value.length; i < j; i++) {
            if (typeof(value[i]) == "string") {
                str += value[i];
            } else if (phvList && value[i] < phvList.length) {
                // Must be a number
                str += phvList[value[i]];
            } else if (!phvList && value[i] + 1 < arguments.length) {
                str += arguments[value[i] + 1];
            } else {
                str += "{" + value[i] + "}";
            }
        }

        return str;
    };
}(jQuery));


var Code = (function () {
  var groupCodes = [];
  var URL = '/api/codes';

  function Code() {

  }

  function getAjaxCode(param) {
    var codeData;
    $.getSync(URL, param, function (data) {
      codeData = data;
    });
    return codeData;
  }

  function convertObject(codeData) {
    var codeObject = {};
    var key;
    $.each(codeData, function (idx, codes) {
      codeObject[codes.groupCode] = codes.commonCodes;
    });
    return codeObject;
  }

  Code.prototype = {
    put: function (code) {
      groupCodes.push({groupCode: code});
      return this;
    }
    , get: function (path, param) {
      URL += '/' + path;
      this._codeObject = getAjaxCode(param);
      return this.getCode();
    }
    , getList: function (param) {

      if (!param) {
        param = {};
      }

      if (groupCodes.length > 0) {
        $.extend(param, $.convertJsonList('commonCodes', groupCodes));
      }

      this._codeObject = convertObject(getAjaxCode(param));
      return this.getCode();
    }
    , getCode: function () {
      return this._codeObject;
    }
  };
  return Code;
})();

/*
 * var Tabs = (function () {
 *
 * function Tabs(tabsId, options) { this._tabSetId = tabsId; this._tabCount = 0;
 * this._options = options; $('#' + tabsId).append('<ul></ul>'); }
 *
 * Tabs.prototype = { tab: function (tabName, src, options) { this._options =
 * options; this.addpendTab(tabName, src); return this; } , put: function
 * (tabName, divId, options) { this._options = options; this.putTabDiv(tabName,
 * divId); return this; } , build: function () { $('#' +
 * this._tabSetId).tabs(this._options); } , putTabDiv: function (tabName, id) {
 * var tabCount = this._tabCount++; var tabSetId = this._tabSetId; var tabSetDiv =
 * $('#' + tabSetId); tabSetDiv.append($('#' + id)); $('#' + id).attr('id',
 * tabSetId + '_' + tabCount); tabSetDiv.children('ul').append('<li><a
 * href="#' + tabSetId + '_' + tabCount + '">' + tabName + '</a></li>');
 * return this; } , addpendTab: function (tabName, src) { var tabCount =
 * this._tabCount++; var tabSetId = this._tabSetId; var tabSetDiv = $('#' +
 * tabSetId); var tabForm = '<div id="' + tabSetId + '_' + tabCount + '"
 * width="100%" height="500">'; tabForm += '<iframe id="ifrm_tab_' + tabSetId +
 * '_' + tabCount + '" src="' + src + '" width="100%" height="500"/>'; tabForm += '</div>';
 * tabSetDiv.append(tabForm); tabSetDiv.children('ul').append('<li><a href="#' +
 * tabSetId + '_' + tabCount + '">' + tabName + '</a></li>'); return this; } };
 * return Tabs; })();
 */
$.fn.setTabFocus = function(index) {
  if($.isNull(index)) {
    return;
  }

  var objId = "#" + $(this).attr("id") + " ul li a";

  $(objId).eq(index).click();
};

$.fn.getTabIndex = function() {
    var objId = "#" + $(this).attr("id") + " ul li .active";

    return $(objId).closest("li").data("tabNo");
};

var Storage = {
  EMPLOYEE: ['sample', 'employee'],
  PROD: ['prod']
};

function setProgressBar() {
    if (!$('#loading').length) {
        var $container = $('<div>', {id: 'loading', class:'ukload', style: 'display: none'});
        var $wrapper = $('<div>', {class:'ukload_box'});
        var $ibox = $('<div>', {class: 'ukspiner'});
        // var $image = $('<img>', {src: '/images/ajax-loader.gif'});
        var $text = $('<div>', {class:'ukload_text', text: Ajax.defaults.progressBarText});
        var $background = $('<div>', {'class': 'bg'});

        // $wrapper.append($image).append($text);
        $wrapper.append($ibox).append($text);
        $container.append($wrapper).append($background).appendTo('body');

        $('#loading').css({
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 10000000,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto'
        });

        $('#loading .bg').css({
            background: '#000000',
            opacity: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0
        });

        $('#loading > div:first').css({
            width: '250px',
            height: '75px',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            fontSize: '16px',
            zIndex: 10,
            color: '#000000'
        });
    }
    $('#loading .bg').height('100%');
    $('#loading').show();
    $('body').css('cursor', 'wait');
}

function destroyProgressBar() {
    $('#loading').hide();
    $('body').css('cursor', 'default');
}

var Ajax = {
  defaults: {
    enabledProgressBar: false,
    progressBarText: ''// 'please wait...'
  },
  setProgressBarText: function (text) {
    Ajax.defaults.progressBarText = text;
  },
  enableProgressBar: function () {
    $(document).ajaxStart(function () {
      Ajax.defaults.enabledProgressBar = true;
      setProgressBar();
    });

    $(document).ajaxStop(function () {
      destroyProgressBar();
    });
  },
  enableErrorHandler: function () {
    $(document).ajaxError(function (evnet, xhr, settings, thrownError) {
      var response;
      if (xhr.responseText) {
        response = JSON.parse(xhr.responseText);
      } else {
        response = {};
      }

      console.log(response, xhr, settings, thrownError);

      if (xhr.status == '0') {
        response.message = base.server.connection.fail;
      }

      if (xhr.status =='404') {
        response.message = base.security.notfound;
      }

      if (xhr.status == '419') {
        response.message = base.security.session.invalid;
      }
      if (activeDialogError) {
        $.error(response.message, function () {
            if (xhr.status == '419') {
                if (self != top) {
                    window.parent.location.href = '/';
                } else {
                    location.href = '/';
                }
            }
        });
      } else {
          alert(response.message);
        if (xhr.status == '419') {
            if (self != top) {
                window.parent.location.href = '/';
            } else {
                location.href = '/';
            }
        }
      }
    });
  }
};


function linkSelectBox(_url, param, coupleId, allFlag){
  var selector = "#" + coupleId;
  var subCoupleId = $(selector).attr("data-coupleId");
  var contents = "";
  var option = "";
  if(allFlag == true){
    option = common.general.all;
    contents += "<option value=''>" + option + "</option>";
  } else if((allFlag == false)){
    option = biz.general.select;
    contents += "<option value=''>" + option + "</option>";
  } else {
    contents = "";
  }

  $.get(_url, param, function (list) {
    $(selector).empty();
    $.each(list,function(idx, data) {
      var code = data.code;
      var descr = data.descr;
      contents += "<option value=" + code +">" + descr + "</option>";
    });

    if(list){
      $(selector).append(contents);
    }
  });

}

var LinkSelect = (function () {

  function LinkSelect(){
    this._selectList = {};
    this._selectObject = {};
    return this;
  }

  var bind = function(id, selectData, options) {
    var valueField = 'code';
    var textField = 'descr';
    var selectFieldOptions = '';
    var isCode = false;
    var text;
    var customTag;

    if (!options) {
      options = {};
    }

    if (options.value) {
      valueField = options.value;
    }

    if (options.text) {
      textField = options.text;
    }

    if (options.code) {
      isCode = options.code;
    }


    var selector = $('#'+id);

    selector.html('');

    /**
     * option 추가로직 all:'select:선택', 'all : 전체'
     */
    if (options.all == 'select') {
      selectFieldOptions = '<option value="" selected>'+biz.general.select+'</option>';
    } else if(options.all == 'all') {
      selectFieldOptions = '<option value="" selected>'+common.general.all+'</option>';
    }

    if (selectData.length < 1) {
        selector.append(selectFieldOptions);
        return;
    }

    $.each(selectData, function (idx, value) {
      customTag = '';
      text = value[textField];
      if (isCode == true) {
        text = '['+ value[valueField] +'] ' + text;
      }
      if (options.datas != undefined) {
          var jbString = options.datas;
          var jbSplit = jbString.split(',');
          for ( var i in jbSplit ) {
            customTag += 'data-'+jbSplit[i]+'="'+$.trim(value[jbSplit[i]]) +'"';
          }
      }
      selectFieldOptions += '<option value="'+value[valueField]+'" '+customTag+' >' + text + '</option>';
    });
    selector.append(selectFieldOptions);
  };

  var bindEvent = function(linkSelect, selectList, selectObject) {
    var callback = linkSelect.__change;
    var selectBox;
    var options;
    $.each(selectList, function(idx,select) {
      selectBox = $('#'+select.id);
      options = select.options;
      var multiCallback = $(this).data('onchange');
      if(selectBox.attr('multiple')) {
        $('#'+select.id).multipleSelect({checkAll: true, isLink:true, onClose:function(){
          childBind(selectObject, selectList, select.id);
          if (callback) {
            callback(select.id);
          }
          if (multiCallback) {
            window[multiCallback]();
          }
        }});
        if (options.checkAll && options.checkAll == true) {
          selectBox.multipleSelect('checkAll');
        }
        if (options && options.setValues) {
          selectBox.multipleSelect("setSelects",options.setValues);
        }
      } else {
        $(document).on('change','#'+select.id, function() {
          childBind(selectObject, selectList, select.id);
          if (callback) {
            callback(select.id);
          }
        });
        if (options && options.setValues) {
          selectBox.val(options.setValues);
        }
      }
      triggerChangeEvent (select.id);
    });

  };

  var childBind = function (selectObject, selectList, parentId) {
    var params;
    var options;
    if (!selectObject[parentId]) {
      return;
    }

    $.each(selectObject[parentId], function(idx,select) {
      params = {};
      options = select.options;
      if (options && options.param) {
        $.extend(params, options.param);
      }

      $.extend(params, getParentsValue(selectList, parentId));
      $.getSync(select.url, params, function(data){
        bind(select.id, data, select.options);
      });
      triggerChangeEvent(select.id);
      setMultiselectOption(selectObject, selectList, parentId);
    });
  };
  var setMultiselectOption = function (selectObject, selectList, parentId) {
    var options;
    if (!selectObject[parentId]) {
      return;
    }

    $.each(selectObject[parentId], function(idx,select) {
      options = select.options;
      if (!options) {
        return true;
      }
      if (options.checkAll && options.checkAll == true) {
        $('#'+select.id).multipleSelect('checkAll');
      }
    });
  };


  var triggerChangeEvent = function(id) {
    var selector = $('#'+id);
    if (selector.attr('multiple')) {
      selector.multipleSelect('refresh');
      selector.multipleSelect('close');
    } else {
      selector.change();
    }
  };

  var getParentsValue = function (selectList, parentId) {
    var params = {};
    if (!selectList[parentId]) {
      return params;
    }

    if (selectList[parentId].parent) {
        $.extend(params, getParentsValue(selectList, selectList[parentId].parent));
    }
    $.extend(params, getSelectValue(parentId, selectList[parentId]));

    return params;
  };

  var getSelectValue = function (id, selectObject){
    var select = $('#'+id);
    var param = {};
    var value = select.val();
    var field;

    if (typeof selectObject  != 'undefined' &&  typeof selectObject.options != 'undefined' &&  typeof selectObject.options.field != 'undefined') {
      field = selectObject.options.field;
    } else {
      field = select.attr('name');
    }

    if (typeof value == 'undefined' || value == null) {
      return param;
    }

    if (typeof value == 'string') {
      param[field] = value;
      return param;
    }

    for (var i=0; i< value.length; i++) {
      param[field+'['+i+']'] = value[i];
    }
    return param;
  };

  LinkSelect.prototype = {
    add:function (id, url, parent, options) {
      if (typeof parent=='object') {
        options = parent;
        parent = null;
      }
      /**
         * options --- all:'select', 'all' field:'변수명' param:기본파라미터
         * value:'value값이될 변수' text :'text값이될 변수'
         */
      if (typeof parent=='string') {
        $.extend(options,{parent:parent});
      }
      var select = {
        id:id,
        url:url,
        parent:parent,
        options:options
      };


      this._selectList[id] = select;
      if (parent) {
        if (!this._selectObject[parent]) {
          this._selectObject[parent] = [];
        }
        this._selectObject[parent].push(select);
      }

      if (Object.keys(this._selectList).length == 1) {
        this.firstSelect = id;
      }

      return this;
    },
    build:function(){
      var select = this._selectList[this.firstSelect];
      var params = {};
      if (select.options && select.options.param) {
        params = select.options.param;
      }
      $.getSync(select.url, params, function(data){
        bind(select.id, data, select.options);
      });
      bindEvent(this, this._selectList, this._selectObject);
/*
 * var selectBox = $('#'+select.id); if (selectBox.attr('multiple')) {
 * selectBox.multipleSelect('checkAll'); }
 */
    },
    change:function(callback){
      this.__change=callback;
      return this;
    }
  };

  return LinkSelect;
})();


/* http://wenzhixin.net.cn/p/multiple-select/docs/ */
(function ($) {

    'use strict';

    // it only does '%s', and return '' when arguments are undefined
    var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    var removeDiacritics = function (str) {
        var defaultDiacriticsRemovalMap = [
            {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
            {'base':'AA','letters':/[\uA732]/g},
            {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
            {'base':'AO','letters':/[\uA734]/g},
            {'base':'AU','letters':/[\uA736]/g},
            {'base':'AV','letters':/[\uA738\uA73A]/g},
            {'base':'AY','letters':/[\uA73C]/g},
            {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
            {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
            {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
            {'base':'DZ','letters':/[\u01F1\u01C4]/g},
            {'base':'Dz','letters':/[\u01F2\u01C5]/g},
            {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
            {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
            {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
            {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
            {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
            {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
            {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
            {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
            {'base':'LJ','letters':/[\u01C7]/g},
            {'base':'Lj','letters':/[\u01C8]/g},
            {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
            {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
            {'base':'NJ','letters':/[\u01CA]/g},
            {'base':'Nj','letters':/[\u01CB]/g},
            {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
            {'base':'OI','letters':/[\u01A2]/g},
            {'base':'OO','letters':/[\uA74E]/g},
            {'base':'OU','letters':/[\u0222]/g},
            {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
            {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
            {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
            {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
            {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
            {'base':'TZ','letters':/[\uA728]/g},
            {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
            {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
            {'base':'VY','letters':/[\uA760]/g},
            {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
            {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
            {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
            {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
            {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
            {'base':'aa','letters':/[\uA733]/g},
            {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
            {'base':'ao','letters':/[\uA735]/g},
            {'base':'au','letters':/[\uA737]/g},
            {'base':'av','letters':/[\uA739\uA73B]/g},
            {'base':'ay','letters':/[\uA73D]/g},
            {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
            {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
            {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
            {'base':'dz','letters':/[\u01F3\u01C6]/g},
            {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
            {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
            {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
            {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
            {'base':'hv','letters':/[\u0195]/g},
            {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
            {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
            {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
            {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
            {'base':'lj','letters':/[\u01C9]/g},
            {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
            {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
            {'base':'nj','letters':/[\u01CC]/g},
            {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
            {'base':'oi','letters':/[\u01A3]/g},
            {'base':'ou','letters':/[\u0223]/g},
            {'base':'oo','letters':/[\uA74F]/g},
            {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
            {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
            {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
            {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
            {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
            {'base':'tz','letters':/[\uA729]/g},
            {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
            {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
            {'base':'vy','letters':/[\uA761]/g},
            {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
            {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
            {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
            {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
        ];

        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }

        return str;

    };

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '';

        this.options = options;

        // hide select element
        this.$el = $el.hide();

        // label element
        this.$label = this.$el.closest('label');
        if (this.$label.length === 0 && this.$el.attr('id')) {
            this.$label = $(sprintf('label[for="%s"]', this.$el.attr('id').replace(/:/g, '\\:')));
        }

        // restore class and title from select element
        this.$parent = $(sprintf(
            '<div class="ms-parent %s" %s/>',
            $el.attr('class') || '',
            sprintf('title="%s"', $el.attr('title'))));

        // add placeholder to choice button
        this.$choice = $(sprintf([
                '<button type="button" class="ms-choice">',
                '<span class="placeholder">%s</span>',
                '</button>'
            ].join(''),
            this.options.placeholder));

        // default position is bottom
        this.$drop = $(sprintf('<div class="ms-drop %s"%s></div>',
            this.options.position,
            sprintf(' style="width: %s"', this.options.dropWidth)));

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width',
            this.options.width ||
            this.$el.css('width') ||
            this.$el.outerWidth() + 20);

        this.selectAllName = 'data-name="selectAll' + name + '"';
        this.selectGroupName = 'data-name="selectGroup' + name + '"';
        this.selectItemName = 'data-name="selectItem' + name + '"';

        if (!this.options.keepOpen) {
            $(document).click(function (e) {
                if ($(e.target)[0] === that.$choice[0] ||
                    $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] ||
                        $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) &&
                    that.options.isOpen) {
                    that.close();
                }
            });
        }
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function () {
            var that = this,
                $ul = $('<ul></ul>');

            this.$drop.html('');

            if (this.options.filter) {
                this.$drop.append([
                    '<div class="ms-search">',
                    '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',
                    '</div>'].join('')
                );
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append([
                    '<li class="ms-select-all">',
                    '<label>',
                    sprintf('<input type="checkbox" %s /> ', this.selectAllName),
                    this.options.selectAllDelimiter[0],
                    this.options.selectAllText,
                    this.options.selectAllDelimiter[1],
                    '</label>',
                    '</li>'
                ].join(''));
            }

            $.each(this.$el.children(), function (i, elm) {
                $ul.append(that.optionToHtml(i, elm));
            });
            $ul.append(sprintf('<li class="ms-no-results"></li>'));
            this.$drop.append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function (i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                classes = $elm.attr('class') || '',
                title = sprintf('title="%s"', $elm.attr('title')),
                multiple = this.options.multiple ? 'multiple' : '',
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = sprintf('style="%s"', this.options.styler(value)),
                    $el;

                disabled = groupDisabled || $elm.prop('disabled');

                $el = $([
                    sprintf('<li class="%s %s" %s %s>', multiple, classes, title, style),
                    sprintf('<label class="%s">', disabled ? 'disabled' : ''),
                    sprintf('<input type="%s" %s%s%s%s>',
                        type, this.selectItemName,
                        selected ? ' checked="checked"' : '',
                        disabled ? ' disabled="disabled"' : '',
                        sprintf(' data-group="%s"', group)),
                    text,
                    '</label>',
                    '</li>'
                ].join(''));
                $el.find('input').val(value);
                return $el;
            }
            if ($elm.is('optgroup')) {
                var label = that.options.labelTemplate($elm),
                    $group = $('<div/>');

                group = 'group_' + i;
                disabled = $elm.prop('disabled');

                $group.append([
                    '<li class="group">',
                    sprintf('<label class="optgroup %s" data-group="%s">', disabled ? 'disabled' : '', group),
                    this.options.hideOptgroupCheckboxes || this.options.single ? '' :
                        sprintf('<input type="checkbox" %s %s>',
                            this.selectGroupName, disabled ? 'disabled="disabled"' : ''),
                    label,
                    '</label>',
                    '</li>'
                ].join(''));

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        },

        events: function () {
            var that = this,
                toggleOpen = function (e) {
                    e.preventDefault();
                    that[that.options.isOpen ? 'close' : 'open']();
                };

            if (this.$label) {
                this.$label.off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }

            this.$choice.off('click').on('click', toggleOpen)
                .off('focus').on('focus', this.options.onFocus)
                .off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27: // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown',function (e) {
                // Ensure shift-tab causes lost focus from filter as with
                // clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else { // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group)),
                    checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get(),
                    instance: that
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked'),
                    instance: that
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }

                if (that.options.single) {
                    var clickedVal = $(this).val();
                    that.$selectItems.filter(function() {
                        return $(this).val() !== clickedVal;
                    }).each(function() {
                        $(this).prop('checked', false);
                    });
                    /* that.update(); */
                }
                that.update();
            });
        },

        open: function () {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop[this.animateMethod('show')]();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({
                    top: offset.top,
                    left: offset.left
                });
            }

            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        },

        close: function () {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop[this.animateMethod('hide')]();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        animateMethod: function (method) {
            var methods = {
                show: {
                    fade: 'fadeIn',
                    slide: 'slideDown'
                },
                hide: {
                    fade: 'fadeOut',
                    slide: 'slideUp'
                }
            };

            return methods[method][this.options.animate] || method;
        },

        update: function (isInit) {
            var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                $span = this.$choice.find('>span'),
                sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected)
                    .join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected
                    .replace('#', selects.length)
                    .replace('%', this.$selectItems.length + this.$disableItems.length));
            } else {
                $span.removeClass('placeholder').text(selects.join(this.options.delimiter));
            }

            if (this.options.addTitle) {
                $span.prop('title', this.getSelects('text'));
            }

            // set selects to select
            this.$el.val(this.getSelects()).trigger('change');

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find('input:checked').each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function (isInit) {
            var $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length &&
                $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function () {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group));
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });
        },

        // value or text, default: 'value'
        getSelects: function (type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find(sprintf('[%s][data-group="%s"]', that.selectItemName, group)),
                        $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function (values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            this.$disableItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
                that.$disableItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length ===
                this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);

            $.each(that.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = that.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length &&
                    $children.length === $children.filter(':checked').length);
            });

            this.update();
        },

        enable: function () {
            this.$choice.removeClass('disabled');
        },

        disable: function () {
            this.$choice.addClass('disabled');
        },

        checkAll: function () {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function () {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function () {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function () {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function () {
            this.init();
        },

        filter: function () {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();

            if (text.length === 0) {
                this.$selectAll.parent().show();
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
                this.$noResults.hide();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[removeDiacritics($parent.text().toLowerCase()).indexOf(removeDiacritics(text)) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter(sprintf('[data-group="%s"]', group)).length ? 'show' : 'hide']();
                });

                // Check if no matches found
                if (this.$selectItems.parent().filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
            this.options.onFilter(text);
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,

            value,
            allowedMethods = [
                'getSelects', 'setSelects',
                'enable', 'disable',
                'open', 'close',
                'checkAll', 'uncheckAll',
                'focus', 'blur',
                'refresh', 'close'
            ];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults, $this.data(), typeof option === 'object' && option);

            if (typeof data ==='object' && options.isLink && options.isLink == true) {
                data.options = options;
            }

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw 'Unknown method: ' + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    };

    $.fn.multipleSelect.refresh = function(){
        $(this).multipleSelect('refresh');
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllDelimiter: ['[', ']'],
        minimumCountSelected: 3,
        ellipsis: false,
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        dropWidth: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        animate: 'none', // 'none', 'fade', 'slide'
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,
        selectAllText: common.general.allselect,
        allSelected: common.general.allselect,
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: function () {
            return false;
        },
        textTemplate: function ($elm) {
            return $elm.html();
        },
        labelTemplate: function ($elm) {
            return $elm.attr('label');
        },

        onOpen: function () {
            return false;
        },
        onClose: function () {
            return false;
        },
        onCheckAll: function () {
            return false;
        },
        onUncheckAll: function () {
            return false;
        },
        onFocus: function () {
            return false;
        },
        onBlur: function () {
            return false;
        },
        onOptgroupClick: function () {
            return false;
        },
        onClick: function () {
            return false;
        },
        onFilter: function () {
            return false;
        }
    };

    $.fn.setYearPicker = function(year) {
        var yearSelect = $(this);
        if (!year) {
            year = new Date().getFullYear();
        }
        var template = '';
        var selected;
        for(var i = year-10; i <= year+2; i++) {
            selected = '';
            if (year==i) {
                selected = 'selected';
            }
            template += '<option value="'+i+'" '+selected+'>'+i+'</option>';
        }
        yearSelect.append(template);
        // 현재년도 선택
        // yearSelect.find('option:eq(1)').prop('selected', true);
    };

    $.leftPad = function (str, padLen, padStr) {
        str += "";
        padStr += "";
        while (str.length < padLen)
            str = padStr + str;
        str = str.length >= padLen ? str.substring(0, padLen) : str;
        return str;

    };

    $.isNull = function (value) {
          if(value == null || value === "" || value == "undefined" || value == "null") {
            return true;
          }
          return false;
    };

    //@@@
    $.isNvl = function (value, value2) {
        if(value == null || value === "" || value == "undefined" || value == "null") {
            if(value2 == undefined)
            {
                return "";
            }else{
                return value2;
            }
        }
        return value;
    };

    $.right = function(str, size){
        if($.isNull(str))   str = new String();
        else                str = new String(str);

        var nStart      = str.length;
        var nEnd        = Number(nStart) - Number(size);
        var rtnVal      = str.substring(nStart, nEnd);

        return rtnVal;
    }

    $.left = function(str, size){
        if($.isNull(str))   str = new String();
        else                str = new String(str);

        return str.substr(0, size);
    }

    $.convertQtyUnit = function(before, after){

        var convertData = 1;

        var sendData = new Object();
        sendData.beforeQtyUnit = before;
        sendData.afterQtyUnit = after;
        $.getSync('/api/deliveryOrder/getConvertQtyUnit', sendData, function(data){
            convertData = data;
        });

        return convertData;

    }

    $.AvailableStockCheck = function(plantCode, matCode, storageLoc, batchNo, qty){

        if(!plantCode || !matCode || !storageLoc || !qty)
        {
            $.alert("필수 입력값을 누락하였습니다.");
            return;
        }

        var param = new Object();

        param.plantCode  = plantCode;
        param.matCode    = matCode;
        param.storageLoc = storageLoc;
        param.batchNo    = batchNo;
        param.qty        = qty;

        $.getSync('/api/common/AvailableStock/selectAvailableStock', param, function(data){
            qty = data;
        });

        return qty;

    }


    $.getPasteMaterial = function(gridObj, itemIndex, newValue, strPlantColumn, strMaterialCodeColumn, strMaterialNameColumn, booleanIsNull, strLotColumn){
        if($.isNull(booleanIsNull)) booleanIsNull = true;

        var param = new Object();
        param.plantCode     = gridObj.getValue(itemIndex, strPlantColumn);
        param.materialCode  = newValue;

        $.getSync("/api/code/material/popup/getMaterial",param,function(data){
            if(!$.isNull(data)){
                gridObj.setValues(itemIndex, strMaterialNameColumn, data[0].materialName);
                if(!$.isNull(strLotColumn)){
                    gridObj.setValues(itemIndex, strLotColumn, data[0].lot);
                }
            }
            else{
                if(booleanIsNull){
                    gridObj.setValues(itemIndex, strMaterialCodeColumn, null);
                    gridObj.setValues(itemIndex, strMaterialNameColumn, null);
                    if(!$.isNull(strLotColumn)){
                        gridObj.setValues(itemIndex, strLotColumn, null);
                    }
                }
            }
        });
    };

    $.setPasteGridStatus = function(gridObj){

        gridObj.getGridView().setEditOptions({
            enterToNextRow : true
        });

        gridObj.getGridView().setCopyOptions({
            singleMode : false
        });

        gridObj.getGridView().setSelectOptions({
            style : "block"
        });

        gridObj.getGridView().setPasteOptions({
            enableAppend : false
        ,   eventEachRow : true
        ,   numberChars: ","
        });
        gridObj.getGridView().onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue) {};
        gridObj.getGridView().onEditRowPasted = function(grid, itemIndex, dataRow, fields, oldValues, newValues){};
    };


    $.setPasteMaterialName = function(gridObj, strPlantColumn, strMaterialCodeColumn, strMaterialNameColumn, booleanIsNull, strLotColumn){
        if($.isNull(booleanIsNull)) booleanIsNull = true;

        var columns         = gridObj.getGridView().getColumnNames();
        var isPlant         = columns.indexOf(strPlantColumn);
        var isMaterialCode  = columns.indexOf(strMaterialCodeColumn);
        var isMaterialName  = columns.indexOf(strMaterialNameColumn);
        var isLot           = columns.indexOf(strLotColumn);

        if(isLot < 0)   strLotColumn = null;

        if(isPlant > -1 && isMaterialCode > -1 && isMaterialName > -1){

//          /*
            gridObj.getGridView().onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue) {
                if (field == grid.getDataProvider().getFieldIndex(strMaterialCodeColumn)) {
                    if(!$.isNull(newValue)){
                        $.getPasteMaterial(gridObj, itemIndex, newValue, strPlantColumn, strMaterialCodeColumn, strMaterialNameColumn, booleanIsNull, strLotColumn);
                    }
                    else{
                        if(booleanIsNull){
                            gridObj.setValues(itemIndex, strMaterialCodeColumn, null);
                            gridObj.setValues(itemIndex, strMaterialNameColumn, null);
                            if(!$.isNull(strLotColumn)){
                                gridObj.setValues(itemIndex, strLotColumn, null);
                            }
                        }
                    }
                }
            }
//          */

            gridObj.getGridView().setPasteOptions({
                enableAppend : false
            ,   eventEachRow : true
            });

            gridObj.getGridView().onEditRowPasted = function(grid, itemIndex, dataRow, fields, oldValues, newValues){
                for(var i in fields){
                    var field = fields[i];

                    if (field == grid.getDataProvider().getFieldIndex(strMaterialCodeColumn)) {
                        for(var k in newValues){
                            var newValue = newValues[k].toString();

                            if(!$.isNull(newValue)){
                                $.getPasteMaterial(gridObj, itemIndex, newValue, strPlantColumn, strMaterialCodeColumn, strMaterialNameColumn, booleanIsNull, strLotColumn);
                            }
                            else{
                                if(booleanIsNull){
                                    gridObj.setValues(itemIndex, strMaterialCodeColumn, null);
                                    gridObj.setValues(itemIndex, strMaterialNameColumn, null);
                                    if(!$.isNull(strLotColumn)){
                                        gridObj.setValues(itemIndex, strLotColumn, null);
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
    }

    //최상위 객체 추출
    $.getFirstParent = function(p){
        if (p.parent && p.parent != p) {
            return $.getFirstParent(p.parent);
        }else {
            return p;
        }
    }

})(jQuery);

var ozDomain = location.hostname == "localhost" ? "http://192.168.46.250:8080/oz80" : "https://"+location.hostname+"/oz80";

//@@@ skh oz report 호출 모듈
var OZ_REPORT = (function() {
    var target = this;

    function OZ_REPORT() {
        this._target = target;
        this._oReportInfo = $.extend(this._oReportInfo, {});
        this._report_viewer_url = "/oz80/ozhviewer/";
        this._report_domain_url = ozDomain;
        this._report_server_url = ozDomain + "/server";
        this._report_launcher_url = "/oz80/ozweblauncher/OnLine_Install_Dialog_UI_SSL.exe";
        this._popup_def_url = "/api/popup/reportInfoPopup";
        this._popup_def_option = {height:750, width:1050, callback:'cfn_reportPopoup_callBack', receiver:'receiveData', closeCallback:'cfn_reportPopoup_closeCallback' };
    };

    // 미리보기 viewer 팝업  콜백 설정
    this.cfn_reportPopoup_callBack = function(rtnData)
    {
        //console.log("cfn_reportPopoup_callBack", rtnData);
    };

    // 미리보기 viewer 팝업  닫기 콜백 설정
    this.cfn_reportPopoup_closeCallback = function(rtnData)
    {
        //console.log("cfn_reportPopoup_closeCallback", rtnData);
    };

    OZ_REPORT.prototype = {
        getTarget : function(){ return this._target; }
      , init :
        function(svcId, rptOpt, popOpt){
            var id = svcId;
            var oRptOpt = $.extend(rptOpt, {});
            oRptOpt["OPTION"] = $.extend(oRptOpt["OPTION"], {});
            var oPopOpt = $.extend(popOpt, {});
            oPopOpt["OPTION"] = $.extend(oPopOpt["OPTION"], {});
            var sType   = $.isNull(oRptOpt["TYPE"]) ? "PREVIEW" : oRptOpt["TYPE"];

            var popUpTitle = oPopOpt["TITLE"] ? oPopOpt["TITLE"] : "미리보기";
            var popUpUrl   = oPopOpt["URL"] ? oPopOpt["URL"] : this._popup_def_url;
            var popUpInfo  = $.extend(this._popup_def_option, oPopOpt["OPTION"]);
            oPopOpt["TARGET"] = new Modal(id + "_report_pop", popUpTitle, popUpUrl, popUpInfo);

            var oInfo =
            {
                CALL_TYPE : sType
              , REPORT : oRptOpt
              , POPUP  : oPopOpt
              , PARAM  : []
            };

            this.setInfo(svcId, oInfo);


            //////////////////////////////////////////////////////////////////////////////////////////////
            // [OZ EVENT] 이벤트 등록 (함수명_ +"뷰어id")
            //////////////////////////////////////////////////////////////////////////////////////////////

            // [OZ EVENET SetOZParamters] REPORT PARAM 설정
            this.getTarget()["SetOZParamters_"+id] = function()
            {
                if($.isNull(id)){ $.alert("호출할 레포트가 없습니다."); return false;}

                var oz = document.getElementById(id);

                // default report option 설정
                oz.sendToActionScript("connection.servlet", $.OZ_REPORT.getServerUrl());  // 오즈 서버의 URL (오즈 서버가 TCP 타입인 경우 connection.server, connection.port 사용)
                oz.sendToActionScript("viewer.usetoolbar", "true");
                oz.sendToActionScript("toolbar.addmemo", "false");       //툴바.메모 아이콘
                oz.sendToActionScript("toolbar.etc", "false");           //툴바.다른 메뉴 아이콘의 표시
                oz.sendToActionScript("toolbar.savedm", "false");        //툴바.HCDATA
                oz.sendToActionScript("toolbar.find", "false");          //툴바.찾기

//                oz.sendToActionScript("toolbar.addline", "true");       //툴바에 선 추가 아이콘
//                oz.sendToActionScript("toolbar.addarrow", "true");      //툴바에 화살표 추가 아이콘
//                oz.sendToActionScript("toolbar.addrectangle", "true");  //툴바에 사각형 추가 아이콘
//                oz.sendToActionScript("toolbar.addcircle", "true");     //툴바에 원 추가 아이콘
                oz.sendToActionScript("information.debug", "true");
                oz.sendToActionScript("viewer.progresscommand", "true");  //EVENT 보고서 생성 중
                oz.sendToActionScript("viewer.printcommand", "true");     //EVENT 보고서 인쇄 후
                oz.sendToActionScript("viewer.exportcommand", "true");    //EVENT 보고서 저장 후

                // report option 설정
                var oRptOption = $.OZ_REPORT.getPrintOption(id);
                for(key in oRptOption)
                {
                    var tmpValue;
                    oz.sendToActionScript(key, oRptOption[key]);
                }

                //레포트 PARAM 설정
                var oRptSet   = $.OZ_REPORT.getReportSet(id);
                var oRptParam = $.OZ_REPORT.getParam(id);
                var sRptName = oRptSet["NAME"] ? oRptSet["NAME"] : "";
                var sRptPath = oRptSet["PATH"] ? oRptSet["PATH"] : "";

                oz.sendToActionScript("connection.reportname",  sRptPath + sRptName + ".ozr");  // ozr 경로
                oz.sendToActionScript("odi.odinames", sRptName);                                // odi명

                oz.sendToActionScript("connection.pcount", oRptParam.length);             // ozr form param count
                oz.sendToActionScript("odi."+ sRptName +".pcount", oRptParam.length);     // odi param count

                for(var i=0; i<oRptParam.length; i++)
                {
                    oz.sendToActionScript("connection.args"+(i+1), oRptParam[i]);         // ozr param set
                    oz.sendToActionScript("odi."+ sRptName +".args"+(i+1), oRptParam[i]);  // odi param set - args : value갯수에 맞추어 args를 설정해줘야함 (args1, args2, args3, ...)
                }

                // 아래 옵션 필요한지 확인 필요.
                oz.sendToActionScript("odi."+sRptName+".clientdmtype", "Memory");
                oz.sendToActionScript("odi."+sRptName+".serverdmtype", "Memory");
                oz.sendToActionScript("odi."+sRptName+".fetchtype", "Concurrent");      // 서버에서 실시간으로 데이터를 전송 받으려면 ‘Concurrent’로 설정 (첫 페이지 먼저 출력)

                return true;
            };


            // [OZ EVENET OZProgressCommand] 보고서 생성 중
            this.getTarget()["OZProgressCommand_"+id] = function(step, state, reportname)
            {
                if(!$.isNull($.OZ_REPORT.getPrintEvent(id)["OZProgressCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(id)["OZProgressCommand"]))
                    {
                        var oParam =
                        {
                                target      : document.getElementById(id)
                              , step        : step
                              , state       : state
                              , reportname  : reportname
                        };

                        $.OZ_REPORT.getPrintEvent(id)["OZProgressCommand"](oParam);
                    }
                }
            };

            // [OZ EVENET OZPrintCommand] 보고서 인쇄 후
            this.getTarget()["OZPrintCommand_"+id] = function(msg, code, reportname, printername, printcopy, printedpage, printrange, username, drivername)
            {
                if(!$.isNull($.OZ_REPORT.getPrintEvent(id)["OZPrintCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(id)["OZPrintCommand"]))
                    {
                        var oParam =
                        {
                                target      : document.getElementById(id)
                              , msg         : msg
                              , code        : code
                              , reportname  : reportname
                              , printername : printername
                              , printcopy   : printcopy
                              , printedpage : printedpage
                              , printrange  : printrange
                              , username    : username
                              , drivername  : drivername
                        };

                        $.OZ_REPORT.getPrintEvent(id)["OZPrintCommand"](oParam);
                    }
                }
            };

            // [OZ EVENET OZExportCommand] 보고서 저장 후
            this.getTarget()["OZExportCommand_"+id] = function(code, path, filename)
            {
                if(!$.isNull($.OZ_REPORT.getPrintEvent(id)["OZExportCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(id)["OZExportCommand"]))
                    {
                        var oParam =
                        {
                                target   : document.getElementById(id)
                              , code     : code
                              , path     : path
                              , filename : filename
                        };

                        $.OZ_REPORT.getPrintEvent(id)["OZExportCommand"](oParam);
                    }
                }
            };
        }
      , call :
        function(pCallType, pSvcId, pParam, pOption)
        {
            var sCallType = pCallType;
            var svcId = pSvcId;
            var oParam = pParam;
            var oOption = pOption;

            switch(sCallType)
            {
                case "PREVIEW":
                case "PREVIEW_POP":
                case "PRINT":
                case "EXPORT":
                case "PREVIEW_ACTIVE":
                    break;
                default:
                    oOption = oParam;
                    oParam = svcId;
                    svcId = sCallType;
                    sCallType = $.OZ_REPORT.getCallType(svcId);
            }

            if($.isNull(this.getInfo(svcId))) { $.alert("호출할 레포트가 없습니다."); return false;}

            //switch($.OZ_REPORT.getCallType(svcId))
            switch(sCallType)
            {
                case "PREVIEW":
                    var oTmpParam = $.extend(oParam, {});
                    this.setParam(svcId, oTmpParam);

                    if(!$.isNull(oOption))
                    {
                        this.setPrintOption(svcId, oOption);
                    }

                    $("#"+svcId).html("");
                    start_ozjs(svcId, this.getViewerUrl()); //레포트 로드

                    break;

                case "PREVIEW_POP":
                    var oPop = $.OZ_REPORT.getReportPopTarget(svcId);

                    if($.isNull(oPop)){ $.alert("호출할 레포트 팝업 정보가 없습니다."); return false; }

                    var oPopParam = {};
                    oPopParam["REPORT_SVCID"]  = svcId;
                    oPopParam["REPORT_INFO"]   = $.extend($.OZ_REPORT.getReportSet(svcId), {});
                    oPopParam["REPORT_PARAM"]  = $.extend(oParam, {});
                    oPopParam["REPORT_OPTION"] = $.extend($.OZ_REPORT.getPrintOption(svcId), oOption, {});

                    oPop.send($.extend(oPopParam, {}));
                    oPop.open();

                    break;

                case "PRINT":
                    this.activeCall("PRINT", svcId, oParam, oOption);
                    break;

                case "EXPORT":
                    this.activeCall("EXPORT", svcId, oParam, oOption);
                    break;

                case "PREVIEW_ACTIVE":
                    this.activeCall("PREVIEW", svcId, oParam, oOption);
                    break;
            }
        }
      , activeCall : // 박성호 매니저 작업 - activex 사용
        function(callGb, svcId, oParam, oOption)
        {
            if($.isNull(this.getInfo(svcId))) { $.alert("호출할 레포트가 없습니다."); return false;}

            var OZUtil = start_OZUtil;
            var OZViewerID = svcId;

            // param 설정
            var oTmpParam = $.extend(oParam, {});
            this.setParam(svcId, oTmpParam);

            // 옵션 변경사항 적용
            if(!$.isNull(oOption))
            {
                this.setPrintOption(svcId, oOption);
            }

            var oRptInitParam = new Object();
            oRptInitParam.InstallBase = "<PROGRAMS>/Forcs";
            oRptInitParam.InstallNamespace = "ozViewerMes";
            oRptInitParam.DownloadServer = location.hostname == "localhost" ? "http://192.168.46.250/oz80/ozweblauncher/ozrviewer/" : "https://"+location.hostname+"/oz80/ozweblauncher/ozrviewer/";
            oRptInitParam.DownloadPort = location.hostname == "localhost" ? 8080 : 443;
            oRptInitParam.InstallErrorMessage = "123\n456";
            oRptInitParam.DownloadInstruction = "ozrviewer.idf";

            var oFn_installOZWebLauncher = function()
            {
                if(confirm("설치가 필요 합니다. 프로그램 설치 후 다시 시도 하십시오."))
                {
                  document.getElementById('commonOzExeViewerDownfrm').src = $.OZ_REPORT.getLauncherUrl();
                }
            };

            var oFn_installCheckEnd = function(arg1,arg2)
            {
                if(arg2.length != 0){alert(arg2);}
            };

            OZUtil.installViewer("2013", oRptInitParam, oFn_installOZWebLauncher, oFn_installCheckEnd);
            OZUtil.setParameter("connection.servlet", $.OZ_REPORT.getServerUrl());
            OZUtil.setParameter("information.debug","true");

            //OZUtil.setParameter("viewer.postcommand","true");
            //OZUtil.setParameter("viewer.showtree","true");
            OZUtil.setParameter("connection.usingusl", "true");
            OZUtil.setParameter("viewer.closeframe", "true");

            switch(callGb)
            {
                case "PRINT":
                    OZUtil.setParameter("viewer.mode", "print");
                    OZUtil.setParameter("print.mode", "silent");
                    OZUtil.setParameter("print.printername", "DEFAULT_PRINTER");
                    break;
                case "EXPORT":
                    OZUtil.setParameter("viewer.mode", "export");
                    break;
                case "PREVIEW":
                    OZUtil.setParameter("viewer.mode", "preview");
                    break;
                default :
                    OZUtil.setParameter("viewer.mode", "print");
                    OZUtil.setParameter("print.mode", "silent");
                    OZUtil.setParameter("print.printername", "DEFAULT_PRINTER");
            }

            // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            OZUtil.setParameter("viewer.progresscommand","true");  // EVENT 보고서 생성 중
            OZUtil.setParameter("viewer.printcommand","true");     // EVENT 보고서 인쇄 후
            OZUtil.setParameter("viewer.exportcommand","true");    // EVENT 보고서 저장 후

            // report option 설정
            var oRptOption = $.OZ_REPORT.getPrintOption(svcId);
            for(key in oRptOption)
            {
                OZUtil.setParameter(key, oRptOption[key]);
            }

            var oRptSet   = $.OZ_REPORT.getReportSet(svcId);
            var oRptParam = $.OZ_REPORT.getParam(svcId);
            var sRptName = oRptSet["NAME"] ? oRptSet["NAME"] : "";
            var sRptPath = oRptSet["PATH"] ? oRptSet["PATH"] : "";

            OZUtil.setParameter("connection.reportname", sRptPath + sRptName + ".ozr");   // ozr 설정
            OZUtil.setParameter("odi.odinames", sRptName);                                // odi 설정

            OZUtil.setParameter("connection.pcount", oRptParam.length);         // ozr form param count
            OZUtil.setParameter("odi."+ sRptName +".pcount", oRptParam.length); // odi param count

            for(var i=0; i<oRptParam.length; i++)
            {
                OZUtil.setParameter("connection.args"+(i+1), oRptParam[i]);         // ozr param set
                OZUtil.setParameter("odi."+ sRptName +".args"+(i+1), oRptParam[i]);  // odi param set - args : value갯수에 맞추어 args를 설정해줘야함 (args1, args2, args3, ...)
            }

            // 아래 옵션 필요한지 확인 필요.
            OZUtil.setParameter("odi."+sRptName+".clientdmtype", "Memory");
            OZUtil.setParameter("odi."+sRptName+".serverdmtype", "Memory");
            OZUtil.setParameter("odi."+sRptName+".fetchtype", "Concurrent");      // 서버에서 실시간으로 데이터를 전송 받으려면 ‘Concurrent’로 설정 (첫 페이지 먼저 출력)
            // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


            OZUtil.addEventListener("OZProgressCommand", function(step,state,reportname){
                if(!$.isNull($.OZ_REPORT.getPrintEvent(svcId)["OZProgressCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(svcId)["OZProgressCommand"]))
                    {
                        var oParam =
                        {
                             target : svcId
                            , step : step
                            , state : state
                            , reportname : reportname
                        }
                        $.OZ_REPORT.getPrintEvent(svcId)["OZProgressCommand"](oParam);
                    }
                }
            }, OZViewerID);

            OZUtil.addEventListener("OZPrintCommand", function(msg, code, reportname, printername, printcopy, printpages, printrange, username, printerdrivername, printpagesrange) {
                if(!$.isNull($.OZ_REPORT.getPrintEvent(svcId)["OZPrintCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(svcId)["OZPrintCommand"]))
                    {
                        var oParam =
                        {
                             target : svcId
                            , msg : msg
                            , code : code
                            , reportname : reportname
                            , printername : printername
                            , printcopy : printcopy
                            , printpages : printpages
                            , printrange : printrange
                            , username : username
                            , printerdrivername : printerdrivername
                            , printpagesrange : printpagesrange
                        }
                        $.OZ_REPORT.getPrintEvent(svcId)["OZPrintCommand"](oParam);
                    }
                }
               },OZViewerID);

            OZUtil.addEventListener("OZExportCommand", function(code, path, filename, pagecount, filepaths){
                if(!$.isNull($.OZ_REPORT.getPrintEvent(svcId)["OZExportCommand"]))
                {
                    if($.isFunction($.OZ_REPORT.getPrintEvent(svcId)["OZExportCommand"]))
                    {
                        var oParam =
                        {
                             target : svcId
                            , code : code
                            , path : path
                            , filename : filename
                            , pagecount : pagecount
                            , filepaths : filepaths
                        }
                        $.OZ_REPORT.getPrintEvent(svcId)["OZExportCommand"](oParam);
                    }
                }
            },OZViewerID);

            var options = {};
            options['namespace'] = "ozViewerMes";
            OZUtil.setOption(options);
            OZUtil.createViewer(OZViewerID,OZViewerLoaded_OZViewerID);

            var OZViewerLoaded_OZViewerID = function()
            {
                OZUtil.Script(OZViewerID, "disable_input_all", function(retval) {
                      alert(retval);
                });
            }

        }
      , setInfo :
        function(svcId, option)
        {
            this._oReportInfo[svcId] = option;
        }
      , getInfo :
        function(svcId)
        {
            return this._oReportInfo[svcId];
        }
      , setCallType :
        function(svcId, type)
        {
            this.getInfo(svcId)["CALL_TYPE"] = type;
        }
      , getCallType :
        function(svcId)
        {
            return this.getInfo(svcId)["CALL_TYPE"];
        }
      , getReportSet :
        function(svcId)
        {
            return this.getInfo(svcId)["REPORT"];
        }
      , getReportPopSet :
        function(svcId)
        {
            return this.getInfo(svcId)["POPUP"];
        }
      , getReportPopTarget :
        function(svcId)
        {
            return this.getReportPopSet(svcId)["TARGET"]
        }
      , setParam :
        function(svcId, oParam)
        {
            var obj = this.getInfo(svcId);
            obj["PARAM"] = $.extend(oParam, []);
        }
      , getParam :
        function(svcId)
        {
            return this.getInfo(svcId)["PARAM"];
        }
      , setPrintOption :
        function(svcId, oOption)
        {
            this.getReportSet(svcId)["OPTION"] = $.extend(oOption, {});

        }
      , getPrintOption :
        function(svcId)
        {
            return this.getReportSet(svcId)["OPTION"];
        }
      , setPrintEvent :
        function(svcId, oEvent)
        {
            this.getReportSet(svcId)["EVENT"] = $.extend(oEvent, {});

        }
      , getPrintEvent :
        function(svcId)
        {
            return this.getReportSet(svcId)["EVENT"];
        }
      , getViewerUrl :
        function()
        {
            return this._report_viewer_url;
        }
      , getServerUrl :
        function()
        {
            return this._report_server_url;
        }
      , getDomainUrl :
        function()
        {
            return this._report_domain_url;
        }
      , getLauncherUrl :
        function()
        {
            return this._report_launcher_url;
        }
    };

    return OZ_REPORT;
})();

//@@@ oz report 생성
$.OZ_REPORT = new OZ_REPORT();
