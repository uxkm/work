var gv_com_grid_arr = {};  /* grid object 관리하는 전역변수  */

var Grid = (function () {

  function Grid(id, options) {
    divResize(id);
    this.__title = $('#' + id).data('title');
    this.__gridView = null;
    this.__id = id;
    this.__options = options;
    this.__type = 'grid';
    this.__getEditCallBack;
    this.__userContextMenuList = [];
    this.__displayOptions = {
      showInnerFocus: false,
      editItemMerging:true,
      focusColor:"#C00020",
      rowHeight:22,
      fitStyle: "even",
      useCssStyle: true,
    };
    if (!options || options.type !='tree') {
      setGridViewAndProvider(this);
    } else if(options.type =='tree') {
      this.__type = options.type;
      setTreeViewAndProvider(this, options);
    }

    var gridView = this.__gridView;
    var dataProvider = this.__dataProvider;
    // 20191206 it1074 데이터 복원 시작
    dataProvider.setOptions({
        restoreMode: "auto"   //@@@
    });
    // 20191206 it1074 데이터 복원 끝
    gridView.setDataSource(dataProvider);
    gridView.onEditRowChanged = function (grid, itemIndex, dataRow, field, oldValue, newValue) {
      gridView.commit(true);
    };

    gridView.addCellStyle("red", {
      foreground: '#C00020'
    }, true);
    gridView.setSelectOptions({
      style: 'singleRow'
    });
    gridView.setStateBar({
      mark: "text",
      stateTexts: {
        created: "C",
        updated: "U",
        deleted: "D",
        createAndDeleted: "X"
      }
    });
    gridView.setEditOptions({
        insertable: true,
        appendable: true,
        useCssStyle: true,
    });

    //각 Editor에 CSS 스타일 적용 여부 설정 //20220115
    gridView.setEditorOptions({
      //useCssStyle: true,  //모든 에디터에 CSS를 적용할 경우 사용
      useCssStyleDropDownList: true, //dropDown
      useCssStyleDatePicker: true,   //달력
      useCssStylePopupMenu: true,    //popupMenu
      useCssStyleMultiCheck: true    //multiCheck
    });

    // 필터에 CSS 스타일 적용 여부 설정 //20220115
    gridView.setFilteringOptions({selector: {useCssStyle: true}});


    gridView.setHeader(
    	{height : 30}
    );

    gridView.setStyles(mercuryGoldSkin);
    gridView.setPasteOptions({ checkReadOnly: true });
    gridView.setDisplayOptions(this.__displayOptions);

    cfn_grid_set(id, this);
  }

  var setGridViewAndProvider = function(grid) {
    var dataProvider = new RealGridJS.LocalDataProvider();
    var gridView = new RealGridJS.GridView(grid.__id);
    grid.__dataProvider = dataProvider;
    grid.__gridView = gridView;
    gridView.setOptions({sortMode: "explicit"});
    gridView.setCopyOptions({singleMode:true});
  };

  var setTreeViewAndProvider = function(grid, options) {
    var dataProvider = new RealGridJS.LocalTreeDataProvider();
    var treeView = new RealGridJS.TreeView(grid.__id);
    var treeHeader = '';
    var width = 150;

    if (options && options.treeHeader) {
      if (options.treeHeader) {
        treeHeader = options.treeHeader;
      }

      if (options.width) {
        width = options.width;
      }

    }
    var defaultFields = [
      {fieldName: 'icon'},
      {fieldName: 'tree'},
      {fieldName: 'text'},
      {fieldName: 'value'}
    ];

    var defaultColumns = [
      {
        name: 'text',
        fieldName: 'text',
        width: width,
        styles: {textAlignment: 'near'},
        header: {text: treeHeader}
      },
      {
        name: 'value',
        fieldName: 'value',
        width: '150',
        styles: {textAlignment: 'near'},
        header: {text: 'value'},
        visible: false
      }
    ];

    treeView.setPanel({visible: false});
    treeView.setStateBar({visible: false});
    treeView.setCheckBar({visible: false});
    treeView.setEditOptions({editable: false, updatable: false});
    treeView.setHeader({visible: true});

    if (options) {
      if (options.header == false) {
        treeView.setHeader({visible: false});
      }
      if (options.column) {
        defaultColumns = defaultColumns.concat(options.column.getColumns());
        defaultFields = defaultFields.concat(options.column.getFields());
      }
    }

    dataProvider.setFields(defaultFields);
    treeView.setColumns(defaultColumns);

    treeView.setFooter({visible: false});
    treeView.setIndicator({visible: false});

    grid.__dataProvider = dataProvider;
    grid.__gridView = treeView;
  };



  var setGroupBy = function (grid, column) {
    var gridView = grid.__gridView;
    var options = grid.__options;
    var groupOptions;
    if (column.getGroupColumns().length < 1 ) {
      return;
    }
    var mergeExpander = false;
    var rowGroup = 'none';
    if (options.expander) {
      mergeExpander = options.expander;
    }

    if (options.rowGroup) {
      rowGroup = options.rowGroup;
    }

    groupOptions = {
      expandedAdornments: rowGroup,
      mergeExpander: mergeExpander,
      mergeMode: true
    };

    gridView.setRowGroup(groupOptions);
    gridView.groupBy(column.getGroupColumns());
  };

  var setColumns = function (gridView, column) {
    gridView.setColumns(column.getColumns());
  };

  var setFields = function (dataProvider, column) {
    dataProvider.setFields(column.getFields());
  };

  var setValidations = function (gridView, column) {
    var gridColumn;
    $.each(column.getValidations(), function (col, value) {
      if (!value) {
        return true;
      }
      gridColumn = gridView.columnByName(value.name);
      gridColumn.validations = value.rules;
      gridView.setColumn(gridColumn);
    });
  };

  var removeValidations = function (gridView, column) {
    var gridColumn;
    $.each(column.getValidations(), function (col, value) {
      if (!value) {
        return true;
      }
      gridColumn = gridView.columnByName(value.name);
      gridColumn.validations = null;
      gridView.setColumn(gridColumn);
    });
  };

  var divResize = function (id) {
    var gridDiv = $('#' + id);
    var height = gridDiv.height();
    //gridDiv.width('100%');

    if (height < 1) {
      gridDiv.height('200px');
    }
  };

  var bindButtonEvent = function (grid) {
    $('.grid-button-group').each(function () {
      if ($(this).data('gridId') == grid.__id) {
        $(this).children('.add-grid-row').click(function () {

          grid.commit();

          var callback = $(this).data('callback');
          var prev = $(this).data('prev');
          var isNextLogic = true;
          if (prev) {
            isNextLogic = window[prev]();
          }

          if(!isNextLogic) {
            return;
          }

          grid.addRow();
          if (callback && isNextLogic==true) {
            window[callback]();
          }
        });
        $(this).children('.remove-grid-row').click(function () {
          grid.commit();
          var callback = $(this).data('callback');
          var prev = $(this).data('prev');
          var isNextLogic = false;
          $.confirm(message.delete.confirm, common.general.ok, function(){
            if (prev) {
              isNextLogic = window[prev]();
            } else {
              isNextLogic = true;
            }

            if(!isNextLogic) {
              return;
            }
            grid.removeRow();
            if (callback && isNextLogic==true) {
              window[callback]();
            }
          });
        });
        $(this).children('.save-grid').click(function () {
          grid.commit();
          var prev = $(this).data('prev');
          var callback = $(this).data('callback');
          var isNextLogic = false;
          if(callback) {
            if (prev) {
              isNextLogic = window[prev]();
            } else {
              isNextLogic = true;
            }

            if(isNextLogic == false) {
              return;
            }
            $.confirm(message.save.confirm, common.general.ok, function(){
              window[callback]();
            });
          }
        });
        $(this).children('.down-excel-grid').click(function () {
          var prev = $(this).data('prev');
          var callback = $(this).data('callback');
          var isNextLogic = false;
          if(callback) {
            if (prev) {
              isNextLogic = window[prev]();
            } else {
              isNextLogic = true;
            }

            if (!isNextLogic) {
              return;
            }

            grid.downExcel(callback);
          }
        });
      }
    });
  };

  var bindTabEvent = function (grid) {

    $(document).ready(function () {
       grid.__gridView.resetSize();
    });

    var tabId = $('#' + grid.__id).parents('.mercury-tab').prop('id');
    if (!tabId) {
        return;
    }
    $(document).on('click','#li-' + tabId, function () {
      //$.callGridResize();  //@@@ 21.11.30 size 계산오류로 인한 주석처리
      grid.__gridView.resetSize();
    });
  };

  /**************************************
  * @@@ grid resize 처리를 위한 이벤트 등록
  *
  * @param grid object
  * @return void
  **************************************/
  var setResetSize = function(grid)
  {
      $(window).resize(function() {
          grid.__gridView.resetSize();
      });
  }

  var setGridOptions = function (grid, options) {
    if (!options) {
      return;
    }
    var gridView = grid.__gridView;
    gridView.setPanel({visible: false});
    gridView.setCheckBar({visible: false});
    gridView.setFooter({visible: false});

    if (options.panel == true) {
      gridView.setPanel({
        visible: true
      });
    }
    if (options.status == false) {
      gridView.setStateBar({
        visible: false
      });
    }

    if (options.check == true) {
      gridView.setCheckBar({
        visible: true
      });
    }

    if (options.readOnly) {
      gridView.setEditOptions({
        editable: false,
        updatable: false,
        useCssStyle: true,
      });
    }

    if (options.rowNum == false) {
      gridView.setIndicator({visible: false});
    }

    if (options.footer == true) {
      gridView.setFooter({visible: true});
    }

    if(options.hideSelectColor == true) {
      gridView.setSelectOptions({
        style: ''
      });
    }

    if(options.rowSelect == false) {
        gridView.setStyles({ selection: {
                background:null,
                border: null}});
    }

  };

  var getData = function (grid, state, i, suffix) {
    var dataSet = [];
    var dataProvider = grid.__dataProvider;
    var data;
    var gridView = grid.__gridView;
    $.each(dataProvider.getStateRows(state), function (idx, value) {
      data = getValues(grid, {row:value});
      if (!suffix && state!='all') {
        data.gridState = state.substring(0, state.length - 1);
        dataSet.push(data);
        return true;
      }
      $.each(data, function (idx, value) {
        if (value !== '') {
          dataSet[suffix + '[' + i + '].' + idx] = value;
        }
      });
      dataSet[suffix + '[' + i + '].gridState'] = state.substring(0, state.length - 1);
      i++;
    });
    return {data: dataSet, idx: i};
  };



  var setDefaultState = function (grid, row) {
    var dataProvider = grid.__dataProvider;
    var prevState = dataProvider.getRowState(row).toLowerCase();
    var state = 'none';
    if (prevState.search('delete') > -1) {
      if (prevState.indexOf('and') > -1) {
        state = prevState.substr(0, prevState.indexOf('and')) + 'd';
      }
      dataProvider.setRowState(row, state);
    }
  };

  var insertExcelTitle = function (title) {
    var excelTitleOptions = {  //제목
      message: title,
      visible: true,
      styles: {
        fontSize: 40,
        fontBold: true,
        textAlignment: 'center',
        lineAlignment: 'center',
        background: '#08f90000'
      },
      spaceTop: 1,
      spaceBottom: 0,
      height: 60
    };
    return {documentTitle: excelTitleOptions};
  };

  var insertExcelSubtitle = function (subTitle) {
    var excelSubTitleOptions = {  //부제
      message: subTitle,
      visible: true,
      styles: {
        textAlignment: 'far',
        background: '#08f90000',
        height: 60
      }
    };
    return {excelSubTitleOptions: excelSubTitleOptions};
  };

  var insertExcelTail = function (tail) {
    var tailOptions = {  //꼬릿말
      message: tail,
      visible: true,
      styles: {
        fontSize: 12,
        fontBold: true,
        textAlignment: 'center',
        background: '#080000f1'
      }
    };
    return {documentTail: tailOptions};
  };

  var convertGridState = function (state) {
    var gridState;
    switch (state) {
      case 'C' :
        gridState = 'created';
        break;
      case 'U' :
        gridState = 'updated';
        break;
      case 'D' :
        gridState = 'deleted';
        break;
      case 'N' :
        gridState = 'none';
        break;
      default :
        gridState = null;
        break;
    }
    return gridState;
  };

  var getDataRow = function (dataProvider, fieldName, currentValue) {
    var row = -1;
    for (var i = 0; i < dataProvider.getRowCount(); i++) {
      if (currentValue < dataProvider.getValue(i, fieldName)) {
        row = i;
      }
    }
    return row;
  };

  var initStyles = function (){
    return [{criteria:'row mod 2 <> 0', styles:'background=#fff'}];
  };


  var setDynamicStyles = function (gridView, dynamicStyles) {

    gridView.setStyles({
      body: {
        dynamicStyles: dynamicStyles
      }
      ,fixed: {
        dynamicStyles: dynamicStyles
      }
    });
  };


  var convertTreeMap = function (data, options) {
    var tree = [];
    var valueField = 'value';
    var textField = 'text';
    var parentField = 'parent';

    if (options) {
      if (options.text) {
        textField = options.text;
      }

      if (options.value) {
        valueField = options.value
      }
      if (options.parent) {
        parentField = options.parent;
      }
    }

    var nodeText;
    var nodeValue;
    var nodeParent;
    var node;
    $.each(data, function (key, value) {
      nodeText = value[textField];
      nodeValue = value[valueField];
      nodeParent = value[parentField];
      node = value;
      $.extend(node, {text: nodeText, value: nodeValue});

      if (nodeParent) {
        $.extend(node, {parent: nodeParent})
      }
      tree.push(node);
    });

    return tree;
  };

  var sortTree = function (tree, sort) {
    var temp = null;
    for (var i = 0; i < tree.length; i++) {
      for (var j = 1; j < tree.length; j++) {
        if (tree[j - 1][sort] > tree[j][sort]) {
          var temp;
          temp = tree[j - 1];
          tree[j - 1] = tree[j];
          tree[j] = temp;
        }
      }
    }
    return tree;
  };

  var convertTreeData = function (datas, options) {
    var tree = {};
    var rows = [];

    if (options && options.sort) {
      sortTree(datas, options.sort);
    }

    //id값으로 접근가능하도록 json형태 map처럼 변형
    $.each(datas, function (key, data) {
      tree[data.value] = data;
    });
    //parent가 있는 값에 뒤에 rows로 추가한다.
    $.each(datas, function (key, value) {
      if (tree[value.parent]) {
        if (tree[value.parent].rows) {
          tree[value.parent].rows.push(value);
        } else {
          $.extend(tree[value.parent], {rows: [value]});
        }
      }
    });

    //parent
    $.each(tree, function (key, value) {
      if (value.parent && value.parent.replace(/(\s*)/g, "") != '') {
        delete tree[key];
      }
    });

    $.each(tree, function (key, value) {
      rows.push(value);
    });

    if (options && options.sort) {
      sortTree(rows, options.sort);
    }

    return {rows: rows};
  };

  var setColumnOptions = function(grid) {
    var gridView = grid.__gridView;
    var column = grid.__options.column;
    if (!column) {
      return;
    }
    $.each(column.getReadOnlyColumns(), function(idx, value) {
      gridView.setColumnProperty(value, "readOnly", true);
      gridView.setColumnProperty(value, "editable", false);
    });
  };

  var setCellEditedEvent = function(grid) {
    var column = grid.__options.column;
    var gridView = grid.__gridView;

    if (!column) {
      return;
    }
    gridView.onEditCommit = function (grid, index, oldValue, newValue) {
      dateRangeEvent(gridView, column, index, newValue);
      if (oldValue!=newValue) {
        dropDownChangeEvent(gridView, column, index, newValue);
      }
    }
  };

  var checkForUniq = function(gridView, column, index, newValue) {
    var uniqueColumns = column.getUniqueColumns();
    if (!uniqueColumns) {
      return;
    }
    $.each(uniqueColumns, function(idx, value) {

    });
  };

  var setEditValueEvent = function(grid) {
    var column = grid.__options.column;
    var gridView = grid.__gridView;
    var dropDownColumns = column.getDropDownChildColumns();
    var callback = grid.__getEditCallBack;

    gridView.onGetEditValue = function (realGrid, index, editResult) {
      if (dropDownColumns[index.fieldName] &&  editResult) {
        gridView.setValue(index.itemIndex, index.fieldName, editResult.value); //@@@
        gridView.setValue(index.itemIndex, index.fieldName + 'DropDownLabel', editResult.text);
      }
      if(callback) {
        callback(realGrid, index, editResult);
      }
    };
  };

  var setCurrentRowChanged = function(grid) {
    var column = grid.__options.column;
    var gridView = grid.__gridView;
    var dropDownColumns = column.getDropDownColumns();
    gridView.onCurrentRowChanged = function (realGrid, oldRow, newRow) {
      if (newRow >= 0) {
        $.each(dropDownColumns, function(idx, parentCol) {
          dropDownChangeEvent(gridView, column, {fieldName:idx, row:newRow}, grid.getValue(newRow, idx), true);
        });
      }
    };
  };

  var dateRangeEvent = function(gridView, column, index, newValue) {
    var dateRangeColumns = column.getDateRangeColumns();
    var fieldName;
    var options;
    if (!dateRangeColumns) {
      return;
    }

    $.each(dateRangeColumns, function(idx, value) {
      fieldName = null;
      if (index.fieldName != value.columnName) {
        return true;
      }
      if (value.to) {
        fieldName = value.to;
        options = {
          type:"date",
          minDate:new Date(newValue)
        };
      } else if (value.from) {
        fieldName = value.from;
        options = {
          type:"date",
          maxDate:new Date(newValue)
        };
      }
      if (fieldName) {
        gridView.setColumnProperty(fieldName,"editor",options);
      }

    });

  };

  var dropDownChangeEvent = function(gridView, column, index, newValue, isRowChange){
    var dropDownColumns = column.getDropDownColumns();
    var options;
    var col;
    var data;
    var dropDownData;
    var param;
    var url;
    var urls;
    if (!dropDownColumns || !dropDownColumns[index.fieldName]) {
      return;
    }

    $.each(dropDownColumns[index.fieldName], function(idx, dropDownColumn){
      options = dropDownColumn.options;
      url = dropDownColumn.url;
      urls = url.split('/');
      col = gridView.columnByName(dropDownColumn.child);
      if (!isRowChange) {
        clearDropDownLink(index, gridView, dropDownColumns, dropDownColumns[index.fieldName] );
      }

      //col = gridView.columnByName(dropDownColumn.child);

      param = options.params;

      if (options.paramName) {
        if(!param) {
          param = {};
        }
        param[options.paramName] = newValue;
      }
      if (!urls[urls.length-1] || urls[urls.length-1] == ''){
        url += newValue;
      }


      data = column.getData(url, param, options.callback);
      dropDownData = column.bindDropDown(data, options);
      col.values = dropDownData.values;
      col.labels = dropDownData.labels;
      col.lookupDisplay = true;
      col.editor = {
        type:'dropDown',
        domainOnly: true,
        textReadOnly: true,
        useCssStyle: true
//        values:dropDownData.values,
//        labels:dropDownData.labels
      };
      gridView.setColumn(col);
    });

  };

  var clearDropDownLink = function (index, gridView, dropDownColumns, childColumnList) {
    $.each(childColumnList, function(parent, column) {
      if (!gridView.getValue(index.dataRow, column.child + 'DropDownLabel') || gridView.getValue(index.dataRow, column.child + 'DropDownLabel') == '') {
        return true;
      }
      var col = gridView.columnByName(column.child);
      col.values = [];
      col.labels = [];
      col.lookupDisplay=true;
      col.editor = {
        type:'dropDown',
        domainOnly:true,
        textReadOnly:true
      };
      gridView.setColumn(col);
      gridView.setValue(index.dataRow, column.child + 'DropDownLabel', '');
      gridView.setValue(index.dataRow, column.child, '');
      if (dropDownColumns[column.child]) {
         clearDropDownLink(index, gridView, dropDownColumns ,dropDownColumns[column.child]);
      }
    });


  };

  var getValues = function(grid, idx, columnName) {
    var gridView = grid.__gridView;
    var column = grid.__options.column;
    var numberColumns = column.getNumberColumns();
    var dataProvider = grid.__dataProvider;
    var data;
    var newData;
    var state = '';
    var row = idx.itemIndex;
    var dataRow = gridView.getDataRow(row);


    if (typeof idx.row != 'undefined') {
      row = gridView.getItemIndex(idx.row);
      dataRow = gridView.getDataRow(row);
    }

    if (idx.dataRow) {
      dataRow = idx.dataRow;
    }

    if (dataRow == -1) {
    	return null;
    }

    if (grid.__type == 'tree') {
      row = idx.itemIndex;
    }

    if (grid.__type == 'grid') {
      state = dataProvider.getRowState(dataRow);
    }

    if (columnName) {
      data = dataProvider.getValue(dataRow, columnName);
      newData = convertDateFormat(gridView, columnName, data);
      if(newData) {
        data = newData;
      }

    } else {
      data = gridView.getValues(row);
      $.each(data, function(idx, column){
        newData = convertDateFormat(gridView, idx, data[idx]);
        if(newData) {
          data[idx] = newData;
        }
      });
    }

    $.extend(data,{dataRow:row});
    $.extend(data,{gridState:state.substring(0, state.length - 1)});
    if (data == null) {
      return null;
    }
    $.each(numberColumns, function(idx, columnName) {
      if (typeof data[columnName] != 'undefined' && isNaN(data[columnName])) {
        data[columnName] = null;
      }
    });
    return data;
  };

  var convertDateFormat = function(gridView, columnName, value){
    var dateFormat;
    if (!gridView.getColumnProperty(columnName,'styles')) {
      return null;
    }
    dateFormat = gridView.getColumnProperty(columnName,'styles').datetimeFormat;
    if (dateFormat && value) {
      dateFormat = dateFormat.replace('yyyy','YYYY');
      dateFormat = dateFormat.replace('dd','DD');
      return moment(value).format(dateFormat);
    }
  };

  var setButtonClickEvent = function(grid) {
    var gridView = grid.__gridView;
    var column = grid.__options.column;
    var buttonColumns = column.getButtonColumns();
    var buttonColumn;

    if (!buttonColumns) {
	      return;
	}

    var callback;
    gridView.onImageButtonClicked = function (realGrid, itemIndex, column, buttonIndex, name) {
    	buttonColumn = buttonColumns[buttonIndex];
	    if (buttonColumn) {
	        callback = buttonColumn.callback;
	        callback({row:itemIndex, column:column.name, data:getValues(grid,{itemIndex:itemIndex})});
	    	}
	    };

  };

  var setItemCheckedEvent = function(grid) {
    var gridView = grid.__gridView;
    var dataProvider = grid.__dataProvider;
    gridView.onItemChecked = function (realGrid, itemIndex, checked) {
      setDefaultState(grid, gridView.getDataRow(itemIndex));
      if (grid.__itemCheckCallback) {
        grid.__itemCheckCallback(grid, itemIndex, checked);
      }
    };
  };
  //20191206 stateBar click 이벤트 시작
  var setStateBarClickEvent = function(grid) {
	  var gridView = grid.__gridView;
      gridView.onStateBarCellClicked =  function (realGrid, index) {
    	  setDefaultState(grid, gridView.getDataRow(index));
      };
  }
  // 20191206 stateBar click 이벤트 끝
  var setContextMenu = function(grid) {
    var gridView = grid.__gridView;
    var options = grid.__options;
    var userContextMenuList = grid.__userContextMenuList;
    var contextMenuList = [];
    if (options && options.context==false) {
      return;
    }
    if (userContextMenuList.length > 0) {
      contextMenuList = contextMenuList.concat(userContextMenuList);
      contextMenuList.push({label: '-'});
    }
    contextMenuList.push({label: 'ExcelExport'});
    gridView.setContextMenu(contextMenuList);
    setContextMenuEvent(grid, gridView, userContextMenuList);
  };

  var setContextMenuEvent = function(grid, gridView, userContextMenuList) {
    gridView.onContextMenuItemClicked = function (realGrid, label, index) {
      $.each(userContextMenuList,function(key, value) {
        if (label.label == value.label && value.callback) {
          value.callback(realGrid, label, index);
        }
      });
      if (label.label == "ExcelExport") {
        grid.downExcel();
      }
    };
  };


  Grid.prototype = {
    build: function () {
      var options = this.__options;
      var dataProvider = this.__dataProvider;
      var gridView = this.__gridView;
      var type = this.__type;
      var grid = this;

      if (type == 'grid') {
        setFields(dataProvider, options.column);
        setColumns(gridView, options.column);
        setGroupBy(this, options.column);
        $.each(options.column.getColumns(), function(idx, value) {
          if (value.editor) {
            if (value.editor.type =='date') {

              return false;
            }
          }
        });
      }

      setGridOptions(this, options);
      setContextMenu(this);
      setCellEditedEvent(this);
      setColumnOptions(this);
      setEditValueEvent(this);
      setCurrentRowChanged(this);
      setButtonClickEvent(this);
      setItemCheckedEvent(this);
      bindButtonEvent(this);
      bindTabEvent(this);
      setResetSize(this);  // @@@ 20211130 윈도우 resize시 그리드 resize
      // 20191206 stateBar cell 클릭 event 시작
      setStateBarClickEvent(this);
      // 20191206 stateBar cell 클릭 event 끝

      gridView.onItemAllChecked = function (realgrid, checked) {
        if (!checked) {
          for (var row = 0; row < dataProvider.getRowCount(); row++) {
            setDefaultState(grid, row);
          }
        }
      };


      var dynamicStyles = initStyles();
      if (options) {
        if(options.hideRowColor && options.hideRowColor == true) {
          dynamicStyles = [];
        }
      }
      setDynamicStyles(gridView, dynamicStyles);

      this.__dynamicStyles = dynamicStyles;
      this.__dynamicCellStyles = {};

      //@@@ 2022.02.17 그리드 표준 cell style 설정
      //수정가능 컬럼 색상표기, 수정된 cell font color 설정
      $.each(options.column.getFields(), function(idx, value) {
          grid.addColumnStyle(value["fieldName"], "changedcell", {foreground:"#C00020"});

          var oFnTmp = function(oGrdV, index, value) {
              var oGrdOpt = oGrdV.getEditOptions();
              if(!oGrdOpt["readOnly"] && oGrdOpt["editable"])
              {
                  if(oGrdV.getColumnProperty(index.fieldName,"editable"))
                  {
                      return {background:"#FFFFA0"};
                  }
              }
          };

          grid.addColumnStyle(value["fieldName"], oFnTmp);
      });

      return this;
    },
    bind: function (data) {
      //this.clearRows();
      var options = this.__options;
      var current = null;
      var displayOptions = {
        focusVisible:false,
        showEmptyMessage:true,
        emptyMessage : biz.data.notfound
      };
      $.extend(displayOptions, this.__displayOptions);

      if (options && options.keepFocus == true) {
        current = this.getCurrent();
      }

      var gridView = this.__gridView;
      if (!data || data.length  < 1) {
        gridView.setDisplayOptions(displayOptions);
      } else {
        gridView.setDisplayOptions({focusVisible:true});
      }

      if (this.__type == 'grid') {
        this.__dataProvider.setRows(data);
      } else if (this.__type == 'tree') {
        if (!data) {
          return null;
        }
        var treeMap = convertTreeMap(data, this.__options);
        var treeData = convertTreeData(treeMap, this.__options);
        this.__dataProvider.fillJsonData(treeData, {rows: "rows", icon: "icon"});
        this.__gridView.expandAll();
      }
      $('#' + this.__id + '_rows').text(this.getRowCount());
      if (current) {
        this.setCurrent(current);
      } else {
        this.setCurrent(0);
      }
      return this;
    },
    load: function (url, params, callback, isPost) {
      var grid = this;

      if (typeof url == 'boolean') {
        isPost = url;
        params = null;
        callback = null;
        params = null;
      }

      if (typeof params == 'boolean') {
        isPost = params;
        callback = null;
        params = null;
      }

      if (typeof params == 'function') {
        isPost = callback;
        callback = params;
        params = null;
      }

      if (typeof callback == 'boolean') {
        isPost = callback;
        callback = null;
      }

      var resultFunction = function (data) {
        grid.bind(data);

        if (typeof callback === 'function') {
          callback(data);
        }
      };

      if (isPost != true) {
        $.get(url, params, resultFunction);
        return this;
      }

      $.post(url, params, resultFunction);
      return this;
    },
    select: function (callback) {
      var gridView = this.__gridView;
      var grid = this;
      gridView.onDataCellClicked = function (realGrid, idx) {
        var rowData = getValues(grid, idx);
        callback(rowData);
      }
    },
    click: function (columns, callback) {
      var columnList;
      var gridView = this.__gridView;
      var grid = this;
      if (!callback) {
        callback = columns;
        columns = null;
      }

      if (columns) {
        columnList = columns.replace(/ /gi,'').split(',');
      }

      gridView.onDataCellClicked = function (realGrid, idx) {
        var rowData = getValues(grid, idx);
        if (columnList && columnList.indexOf(idx.column) > -1) {
          $.extend(idx, gridView.getColumnProperty(idx.column,'header'));
          callback(rowData, idx);
        } else if (!columns) {
          callback(rowData);
        }
      }
    },
    rowChanged : function (callback) {
      var gridView = this.__gridView;
      var grid = this;
      gridView.onCurrentRowChanged = function (realGrid, oldRow, newRow) {
        if (newRow < 0) {
          return;
        }
        var rowData = getValues(grid, {itemIndex:gridView.getItemIndex(newRow),dataRow:newRow});
        callback(rowData, gridView.getItemIndex(oldRow), gridView.getItemIndex(newRow));
      }

    },
    doubleClick: function (columns, callback) {
      var columnList;
      var gridView = this.__gridView;
      var grid = this;

      if (!callback) {
        callback = columns;
        columns = null;
      }

      if (columns) {
        columnList = columns.replace(/ /gi,'').split(',');
      }
      gridView.onDataCellDblClicked = function (realGrid, idx) {
        var rowData = getValues(grid, idx);

        if (columnList && columnList.indexOf(idx.column) > -1) {
          $.extend(idx, gridView.getColumnProperty(idx.column,'header'));
          callback(rowData, idx);
        } else if (!columns) {
          callback(rowData);
        }
      };
      return this;
    },
    change: function (columnName, callback) {
      if(typeof columnName =='function') {
        callback = columnName;
        columnName = null;
      }

      this.__getEditCallBack = function(grid, index, editResult) {
        if(columnName && index.column == columnName) {
          callback(index.dataRow, editResult.value);
        } else {
          callback(index.dataRow, index.column, editResult.value);
        }
      };
      setEditValueEvent(this);
    },
    commit:function () {
      this.__gridView.commit();
    },
    groupBy:function (list){
      this.__gridView.groupBy(list);
    },
    addRow: function (data) {
	  var displayOptions = {
	        focusVisible:true
	      };
      $.extend(displayOptions, this.__displayOptions);
      this.__gridView.setDisplayOptions(displayOptions);
      if (!data) {
        this.__gridView.beginAppendRow();
        this.__gridView.commit(true);
      } else {
        this.__dataProvider.addRow(data);
      }

      $('#' + this.__id + '_rows').text(this.getRowCount());
    },
    addRows: function (data) {
      var dataProvider = this.__dataProvider;
      $.each(data, function (key, value) {
        dataProvider.addRow(value);
      });
      $('#' + this.__id + '_rows').text(this.getRowCount());
    },
    removeFocusRow:function(isForceDelete,callback) {
      var data = this.getFocusData();
      var dataProvider = this.__dataProvider;
      var current = this.getCurrent();
      // 20200601 정렬 후 삭제 버튼 클릭 시 다른 값 삭제에 따른 변경 Start
      //var row = current.itemIndex;
      var row = current.dataRow;
      // 20200601 정렬 후 삭제 버튼 클릭 시 다른 값 삭제에 따른 변경 End
      var softDeleting;
      if (dataProvider.getRowState(row).search('create') > -1) {
        softDeleting = false;
      } else {
        softDeleting = true;
      }

      if (typeof isForceDelete =='function') {
        callback = isForceDelete;
        isForceDelete = null;
      }

      if (isForceDelete==true) {
        softDeleting = false;
      }

      dataProvider.setOptions({softDeleting: softDeleting});
      dataProvider.removeRow(row);

      $('#' + this.__id + '_rows').text(row);

      if (callback) {
        callback(data);
      }
    },
    removeRow: function (state) {
      var dataProvider = this.__dataProvider;
      var gridView = this.__gridView;
      var softDeleting;
      var stateValue = 'create';
      var forceDelete = false;
      if (state && state == 'U') {
        stateValue = 'update';
      } else if (state && state == 'D') {
        stateValue = 'delete';
      } else if (state && state === true) {
        forceDelete = true;
      }

      var i = 0;
      $.each(this.__gridView.getCheckedRows(), function (idx, row) {
        row = row - i;
        if (dataProvider.getRowState(row).search(stateValue) > -1 || forceDelete) {
          softDeleting = false;
        } else {
          softDeleting = true;
        }

        dataProvider.setOptions({softDeleting: softDeleting});
        dataProvider.removeRow(row);
        if (!softDeleting) {
          i++;
        }
      });
      $('#' + this.__id + '_rows').text(this.getRowCount());
    },
    allChecked: function (checked) {
      this.__gridView.checkAll(checked);
    },
    setVisible: function(columnName, isVisible) {
      var gridView = this.__gridView;
      var column = gridView.columnByName(columnName);
      if (!column) {
        return;
      }
      gridView.setColumnProperty(column, "visible", isVisible);
    },
    getCurrent: function(){
      var gridView = this.__gridView;
      return gridView.getCurrent();
    },
    getCheckRowCount: function () {
      return this.__gridView.getCheckedRows(true).length;
    },
    getCheckData: function () {
      var data = [];
      var gridView = this.__gridView;
      var grid = this;
      $.each(gridView.getCheckedRows(), function (key, idx) {
        data.push(getValues(grid, {row:idx}));
      });
      return data;
    },
    getRowCount: function (state) {
      var dataProvider = this.__dataProvider;
      var rows = 0;
      if (!state) {
        return dataProvider.getRowCount();
      }

      if (state.toUpperCase().indexOf('C') > -1) {
        rows += dataProvider.getRowStateCount(RealGridJS.RowState.CREATED);
      }

      if (state.toUpperCase().indexOf('U') > -1) {
        rows += dataProvider.getRowStateCount(RealGridJS.RowState.UPDATED);
      }

      if (state.toUpperCase().indexOf('D') > -1) {
        rows += dataProvider.getRowStateCount(RealGridJS.RowState.DELETED);
      }

      if (state.toUpperCase().indexOf('N') > -1) {
        rows += dataProvider.getRowStateCount(RealGridJS.RowState.NONE);
      }

      return rows;
    },
    getDataSet: function (suffix) {
      return this.getData(null, suffix);
    },
    getData: function (state, suffix) {
      this.__gridView.commit(true);
      var data;
      var idx = 0;
      var dataSet = [];
      var grid = this;

      var stateList = ['C', 'U', 'D'];
      if (state) {
        if (state =='all') {
          stateList.push('N');
        } else {
          stateList = state.trim().split(',');
        }
      }
      if (suffix) {
        dataSet = {};
      }

      $.each(stateList, function (key, value) {
        data = getData(grid, convertGridState(value), idx, suffix);
        if (suffix) {
          $.extend(dataSet, data.data);
        } else {
          dataSet = dataSet.concat(data.data);
        }

        idx = data.idx;
      });
      if (dataSet.length < 1) {
        dataSet = null;
      }
      return dataSet;
    },
    getValue:function (row, columnName) {
      return getValues(this, {row:row}, columnName);
    },
    valid: function (state) {
      var isValid = true;
      var dataProvider = this.__dataProvider;
      var stateList = ['C', 'U'];
      if (state) {
        if (state =='all') {
          stateList.push('N');
        } else {
          stateList = state.trim().split(',');
        }
      }
      var rows = [];
      var gridView = this.__gridView;
      gridView.clearInvalidCellList();

      setValidations(gridView, this.__options.column);

      $.each(stateList, function (key, value) {
        // 정렬후 행번호를 보도록 수정 20220216
        rows = rows.concat(gridView.getItemsOfRows(dataProvider.getStateRows(convertGridState(value))));
      });

      var checkList = gridView.checkValidateCells(rows);
      if (checkList && checkList.length > 0) {
        isValid = false;
      }
      removeValidations(gridView, this.__options.column);
      return isValid;
    },
    downExcel: function (callback) {
      var options = this.__options;
      var viewOption = true;

      if (callback) {
    	  viewOption = false;
      }

      if (!options) {
        options = {};
      }

      if(!options.fileName) {
        options.fileName = '';
        if (this.__title) {
          options.fileName = this.__title;
        }
        options.fileName +=  moment(new Date()).format('YYYY-MM-DD HH_mm');
      }

      var excelOption = {
        type: 'excel',
        target: 'local',
        fileName: options.fileName + '.xlsx',
        showProgress: true,
        applyDynamicStyles: true, //2018-02-02 요청으로 변경함
        lookupDisplay: viewOption,
        compatibility: '2010',
        done: function () {  //내보내기 완료 후 실행되는 함수
          if (callback) {
            window[callback](excelOption);
          }
        }
      };



      $.extend(options, this.__options);

      if (options.title) {
        $.extend(excelOption, insertExcelTitle(options.title));
      }

      if (options.subTitle) {
        $.extend(excelOption, insertExcelSubtitle(options.subTitle));
      }

      if (options.tail) {
        $.extend(excelOption, insertExcelTail(options.tail));
      }

      this.__gridView.exportGrid(excelOption);
    },
    clean: function () {
      this.bind(null);
    },
    getFocusData: function () {
      var gridView = this.__gridView;
      var current = gridView.getCurrent();
      if (current.itemIndex < 0) {
        return null;
      }
      delete current.dataRow;
      var data;
      try {
        data = getValues(this, current);
      } catch (e) {
    	  return null;
      }
      return data;
    },
    setColumn: function (column) {
      var dataProvider = this.__dataProvider;
      var gridView = this.__gridView;
      var type = this.__type;
      var options = this.__options;
      if (options && options.column) {
          options.column = column;
      } else if (!options) {
        options = {column:column};
      } else if (!options.column) {
        $.extend(options ,{column:column});
      }

      if (type == 'grid') {
        setFields(dataProvider, column);
        setColumns(gridView, column);
        setGroupBy(this, column);
      }
    },
    getColumn: function(){  // @@@
        return this.__options["column"];
    },
    resetCurrent: function () {
      this.__gridView.resetCurrent();
    },
    insertRow: function (row, data) {
      var dataProvider = this.__dataProvider;
      if (data.constructor == Object) {
        dataProvider.insertRow(row, data);
        return;
      }
      $.each(data, function (key, value) {
        dataProvider.insertRow(row, value);
      });
    },
    setTextColor: function (row, fieldName, color) {
      if (!color) {
        color = 'red';
      }
      this.__gridView.setCellStyle(row, fieldName, color);
    },
    setRowFix: function (row) {
      this.setFix(row, null);
    },
    setColFix: function (col) {
      this.setFix(null, col);
    },
    setRightColFix: function (col) {
      this.setFix(null, null, col);
    },
    setFocusValue: function (column, value) {
      var dataProvider = this.__dataProvider;
      var gridView = this.__gridView;
      var len = this.getRowCount();

      for(var i=0; i<len; i++) {
        var colValue = dataProvider.getValue(i, column);
        if(value == colValue) {
          var index = {dataRow: i};
          gridView.setCurrent(index);
          return;
        }
      }
    },
    setFix: function (row, col, rightCol) {
      var options = {};
      if (row) {
        $.extend(options, {rowCount: row})
      }

      if (col) {
        $.extend(options, {colCount: col, resizable: true}) // 20191206 it1074 resizable 옵션 추가
      }

      if (rightCol) {
        $.extend(options, {rightColCount: rightCol, resizable: true}) // 20191206 it1074 resizable 옵션 추가
      }
      this.__gridView.setFixedOptions(options);
    },
    setValues:function(row, columnName, values){
      if (typeof columnName == 'object') {
        values  = columnName;
        columnName = null;
      }

      if (!columnName) {
        this.__gridView.setValues(row, values, true);
      } else {
        this.__gridView.setValue(row, columnName, values);
      }
      return this;
    },
    addColumnStyle:function (columnName, condition, styles) {
      var gridView = this.__gridView;
      var dynamicCellStyles = this.__dynamicCellStyles;
      var cellStyles;
      if (dynamicCellStyles[columnName]) {
        cellStyles = dynamicCellStyles[columnName];
      } else {
        cellStyles = [];
      }

      cellStyles.push({criteria: condition, styles: styles});

      gridView.setColumnProperty(columnName, 'dynamicStyles', cellStyles);
      dynamicCellStyles[columnName] = cellStyles;
      this.__dynamicCellStyles = dynamicCellStyles;
    },
    addColumnBackground:function (columnName, condition, color){
      this.addColumnStyle(columnName, condition, 'background='+color)
    },
    addColumnColor:function (columnName, condition, color){
      this.addColumnStyle(columnName, condition, 'foreground='+color);
    },
    clearRowStyle:function(){

      var dynamicStyles = initStyles();
      var options = this.__options;
      if (options) {
        if(options.hideRowColor && options.hideRowColor == true) {
          dynamicStyles = [];
        }
      }
      this.__dynamicStyles = dynamicStyles;
      setDynamicStyles(this.__gridView, this.__dynamicStyles);
    },
    clearColumnStyle:function(){
      var gridView = this.__gridView;
      $.each(this.__dynamicCellStyles, function(key, value){
        gridView.setColumnProperty(key, 'dynamicStyles', []);
      });
      this.__dynamicCellStyles = {};
    },
    addRowStyle:function (condition, color, target) {
      var styles = 'background';
      if (target) {
        styles = target;
      }
      styles = styles+'='+ color;
      this.__dynamicStyles.push({
        criteria:condition,
        styles:styles
      });
      setDynamicStyles(this.__gridView, this.__dynamicStyles);
    },
    sendCheckData:function(target, key) {
      var row;
      var pgmId;
      $.each(this.getCheckData(), function(idx, rowData) {
        row = 0;
        pgmId = rowData[key];
        $.each(target.getData('all'), function(idx, rowData){
          if (pgmId < rowData[key]) {
            return false;
          }
          row++;
        });
        target.insertRow(row, rowData);
      });
      this.removeRow(true);
    },
    setEditing : function(row, columnName) {
      var index = {dataRow:row, fieldName:columnName};
      var gridView = this.__gridView;
      gridView.setCurrent(index);
      gridView.showEditor();
    },
    setTitle:function(title) {
      this.__title = title;
    },
    setCurrent: function(row) {
      if (typeof row == 'number') {
        row = {itemIndex:row};
      }
      var gridView = this.__gridView;

      gridView.setCurrent(row);
    },
    getGridView : function() {
      return this.__gridView;
    },
    getDataProvider : function() {
      return this.__dataProvider;
    },
    itemChecked : function(callback){
      var grid = this;
      this.__itemCheckCallback = function(realGrid, itemIndex, checked) {
        callback(getValues(grid, {itemIndex:itemIndex}), checked, grid);
      };
      setItemCheckedEvent(this);
      return this
    },
    addContextMenu: function(menuName, callback) {
      this.__userContextMenuList.push({label:menuName, callback:callback});
      setContextMenu(this);
      return this;
    },
    convertJsonData : function (dataList, suffix) {
      var dataSet = [];
      var i=0;
      $.each(dataList, function (idx, data) {
        $.each(data, function (idx, value) {
          if (value && value != '') {
            dataSet[suffix + '[' + i + '].' + idx] = value;
          }
        });
        i++;
      });
      return dataSet;
    },
    clearRows:function(){
      this.__dataProvider.clearRows();
    },
    setDropDownDataBind:function(colName, oValues, oLabels){  //@@@ 콤보 컬럼 데이터 설정
        var oGridView = this.getGridView();
        oGridView.setColumnProperty(colName,"editor", {values:oValues, labels:oLabels});

        var col = oGridView.columnByName(colName);
        col.values = oValues;
        col.labels = oLabels;
        oGridView.setColumn(col);
    }

  };

  return Grid;
})();

var Column = (function () {

  function Column() {
    this._columns = [];
    this._columnsName = [];
    this._fields = [];
    this._validations = [];
    this._events = {};
    this._uniqueColumns = [];
    this._groupColumns = [];
    this._readOnlyColumns = [];
    this._dateRangeColumns = [];
    this._dropDownColumns = {};
    this._buttonColumns = [];
    this._numberColumns = [];
  }

  var addColumn = function (name, text, options) {
    var column = {
      name:name,
      fieldName:name,
      header:{text: text}
    };

    if (!options) {
      return column;
    }

    if (options.group) {
      $.extend(column, {type:'group',fieldName:null});
    }

    if (options.labels) {
      $.extend(column, {lookupDisplay:true});
    }

    if (options.columns) {
      $.extend(column, {width:100 * options.columns.length});
    }

    if (options.hidden && options.hidden == true) {
      $.extend(column, {visible:false});
    }

    $.extend(column, options);
    return column;
  };

  var editorProvider = function (type, options) {
    var editorOptions = {
      type: type
      ,textAlignment: 'near'
    };
    if (type == 'number') {
      $.extend(editorOptions, {editFormat: '#,##0.###', multipleChar: '+', textAlignment: 'far'});
    }

    if (type == 'dropDown') {
      $.extend(editorOptions, {domainOnly: true, textReadOnly: true, useCssStyle: true});
    }

    if (type == 'date') {
      $.extend(editorOptions, {
        datetimeFormat: options.datetimeFormat,
        mask: {
          editMask: '9999-99-99',
          placeHolder: 'yyyy-MM-dd',
          includedFormat: true,
          useCssStyle: true
        },
      });
    }

    if (options && options.max && type != 'number') {
      $.extend(editorOptions, {maxLength: options.max});
    }
    $.extend(editorOptions, options);
    return {editor: editorOptions};
  };

  var styleProvider = function (type, options) {
    var styleOptions = {
      type: type
      ,textAlignment: 'near'
    };

    var format;

    if (options) {
      if (options.format) {
        format = options.format;
      }
    }

    if (type == 'number') {
      if (!format) {
        format = '#,##0.###';
      }
      $.extend(styleOptions, {numberFormat: format, textAlignment: 'far'});
    }

    if (type == 'date') {
      $.extend(styleOptions, {datetimeFormat: format});

    }
    $.extend(styleOptions, options);
    return {styles: styleOptions};
  };

  var addField = function (name, type, options) {
    var field = new RealGridJS.DataField();
    field.fieldName = name;

    if (typeof type == 'object') {
      options = type;
      type = null;
    }

    if (!options) {
      return field;
    }

    if (options.min) {
      field.min = options.min;
    }

    if (options.max) {
      field.max = options.max;
    }

    if (options.defaultValue) {
      field.defaultValue = options.defaultValue;
    }

    if (type && (type == 'number' || type == 'date')) {
      field.dataType = type;
      if (options.calc && type == 'number') {
        field.calculateExpression = options.calc;
      }
      // it1074 20200130 calculateCallback 추가 시작
      if (options.calcf && type == 'number') {
          field.calculateCallback = options.calculateCallback;
      }
      // it1074 20200130 calculateCallback 추가 끝
    }

    return field;
  };

  var validationProvider = function (name, text, type, options) {
    var valueString = 'value ';
    var neString = 'is not empty ';
    var minPrefix = '> ';
    var maxPrefix = '< ';
    var ruleList = [];
    if (!options) {
      return null;
    }
    var validRule;
    $.each(options, function (key, value) {
      if (key != 'required' && key != 'min' && key != 'max') {
        return true;
      }

      validRule = new RealGridJS.EditValidation();
      validRule.active = true;
      validRule.mode = 'always';
      validRule.level = 'warning';

      if (key == 'required' && value == true) {
        validRule.criteria = valueString + neString;
        validRule.message = '';
      }

      if (type == 'number' && key == 'min') {
        validRule.criteria = valueString + minPrefix + value;
        validRule.message = '';
      }

      if (type == 'number' && key == 'max') {
        validRule.criteria = valueString + maxPrefix + value;
        validRule.message = '';
      }
      ruleList.push(validRule);
    });

    return {name: name, rules: ruleList};
  };

  var optionsProvider = function (type, width, options) {
    if (typeof type === 'object') {
      options = type;
      type = 'text';
      width = null;
    }

    if (!options) {
      options = {};
    }

    if (!width) {
      width = 120;
    }

    $.extend(options, {width:width});
    $.extend(options, editorProvider(type, options));
    $.extend(options, styleProvider(type, options));
    return options;
  };

  Column.prototype = {
    add: function (name, text, width, options) {
      var type = 'text';
      if (typeof text == 'object') {
        options = text;
        text = name;
        null;
      }

      if (options) {
          if (options.type) {
            type = options.type;
          }
      }

      options = optionsProvider(type, width, options);

      var columnsIndex = this._columnsName.indexOf(name);
      if (columnsIndex > -1) {
        this._validations[columnsIndex] = validationProvider(name, text, type, options);
        this._columns[columnsIndex] = addColumn(name, text, options);
        this._fields[columnsIndex] = addField(name, type, options);
        return this;
      }


      if(options.groupBy && options.groupBy==true) {

        this._groupColumns.push(name);
      }

      if (options.readOnly == true) {
        this._readOnlyColumns.push(name);
      }

      if (options.uniq == true) {
        this._getUniqueColumns.push(name);
      }

      this._columnsName.push(name);
      this._validations.push(validationProvider(name, text, type, options));

      if (options.required) {
        delete options.required;
      }

      this._columns.push(addColumn(name, text, options));

      if (options) {
          if (options.editor.required == true ) {
        	  this._columns[this._columns.length - 1].header ={
        			  "text":text,
              		  "imageLocation": "left",
              	      "imageUrl": "/images/fillsoo.png"
        	  }
          }
      }

      this._fields.push(addField(name, type, options));
      return this;
    },
    addHidden : function (name, text, width, options){
      if (typeof text == 'object') {
        options = text;
        text = null;
      }

      if (typeof width === 'object') {
        options = width;
        width = null;
      }

      if (!options) {
        options = {};
      }

      if (!text) {
        text = name;
      }

      $.extend(options, {hidden:true});

      this.add(name, text, width, options);
      return this;
    },
    addGroup: function (name, text, column, displayWidth, options) {
      if (typeof displayWidth == 'object') {
        options = displayWidth;
        displayWidth = null;
      }

      if (!options) {
        options = {};
      }

      if (!column || typeof column != 'object') {
        throw 'not support type ';
      }
      if (displayWidth) {
        $.extend(options, {displayWidth: displayWidth});
      }
      $.extend(options, {group: true});
      $.extend(options, {columns: column.getColumns()});

      if (column.getFields() && column.getFields().length > 0) {
        this._fields = this._fields.concat(column.getFields());
      }

      if (column.getValidations() && column.getValidations().length > 0) {
        this._validations = this._validations.concat(column.getValidations());
      }

      if (column.getGroupColumns() && column.getGroupColumns().length > 0) {
        this._groupColumns = this._groupColumns.concat(column.getGroupColumns());
      }

      if (column.getReadOnlyColumns() && column.getReadOnlyColumns().length > 0) {
        this._readOnlyColumns = this._readOnlyColumns.concat(column.getReadOnlyColumns());
      }

      this._columns.push(addColumn(name, text, options));
      return this;
    },
    addNumber: function (name, text, width, options) {
      if (!options) {
        options = {};
      }

      $.extend(options, {type:'number'});
      $.extend(options, {textAlignment:'far'});
      this._numberColumns.push(name);
      this.add(name, text, width, options);
      return this;
    },
    addMultiLine: function (name, text, width, options) {
      if (!options) {
        options = {};
      }
      $.extend(options, {type:'multiline'});
      this.add(name, text, width, options);
      return this;
    },
    addDropDown: function (name, text, data, width, options) {
      var url;
      var params;
      var callback;
      if (typeof data === 'string') {
        url = data;
        data = null;
      }

      if (typeof data === 'number') {
        width = data;
        data = null;
      }

      if (typeof width === 'object') {
        options = width;
        width = null;
      }

      if (options) {
        if (options.params) {
          params = options.params;
        }

        if (options.callback) {
          callback = options.callback;
        }
      } else {
        options = {};
      }

      if (!options.parent) {
        if (url) {
          data = this.getData(url, params, callback);
        }
        $.extend(options, this.bindDropDown(data, options));
      } else {
        if(!this._dropDownColumns[options.parent]) {
          this._dropDownColumns[options.parent] = [];
        }
        this._dropDownColumns[options.parent].push({child:name, url:url, options:options});
        this.addHidden(name+'DropDownLabel');
        $.extend(options,{labelField:name+'DropDownLabel'});
      }

      $.extend(options, {type:'dropDown'});
      this.add(name, text, width, options);
      return this;
    },
    addDatePicker: function (name, text, format, width, options) {
      if (format && typeof format === 'object') {
        options = format;
        format = null;
        width = null;
      }

      if (typeof format === 'number') {
        options = width;
        width = format;
        format = null;
      }

      if (!options) {
        options = {};
      }

      if (!format) {
        format = 'yyyy-MM-dd';
      }
      $.extend(options, {format: format});
      $.extend(options, {type:'date'});
      $.extend(options, {textAlignment:'center'});
      this.add(name, text, width, options);
      return this;
    },
    addDateRange: function (name, text, format, width, options) {
      if (typeof format === 'object') {
        options = format;
        format = null;
        width = null;
      }

      if (typeof format === 'number') {
        options = width;
        width = format;
        format = null;
      }

      var rangeOptions = {columnName:name};

      if (!options.from && !options.to) {
        alert('plz define form or to');
      }

      if (options.from) {
        $.extend(rangeOptions,{from:options.from});
      }

      if (options.to) {
        $.extend(rangeOptions,{to:options.to});
      }

      this._dateRangeColumns.push(rangeOptions);
      this.addDatePicker(name, text, format, width, options);
      return this;
    },
    addCheck: function (name, text, width, options) {

      var trueValues = 'Y';
      var falseValues = 'N';
      var labelPosition = 'right';
      var defaultOptions = {
        type: 'check',
        editable: true,
        shape: 'box',
        startEditOnClick: true
      };

      if (options) {

        if (options.checked) {
          trueValues = options.checked;
        }

        if (options.unchecked) {
          falseValues = options.unchecked;
        }
      }

      if (typeof width === 'object') {
        options = width;
        width = null;
      }

      if (typeof text === 'number') {
        width = text;
        text = null;
      }

      $.extend(defaultOptions, {trueValues: trueValues, falseValues: falseValues, type: 'check'});
      this.add(name, text, width, {renderer: defaultOptions, type:'data', defaultValue:falseValues});
      return this;
    },
    addImageButton: function (name, text, width, options) {
      var buttonOptions = {
        type:'button',
        button: 'image',
        alwaysShowButton:true,
        imageButtons : options
      };

      if (typeof width === 'object') {
        options = width;
        width = null;
      }
      $.extend(buttonOptions, options);
      for (var i = 0; i < options.images.length; i++) {
    	  $.extend(options.images[i], {callback:options.images[i].callback});
    	  this._buttonColumns.push(options.images[i]);
      }
      this.add(name, text, width, buttonOptions);
      return this;
    },
    addButton: function (name, text, width, options, callback) {
      var buttonOptions = {
        type:'button',
        button: 'action',
        alwaysShowButton:true
      };

      if (typeof width === 'object') {
        options = width;
        width = null;
      }
      $.extend(buttonOptions, options);
      $.extend(options, {callback:callback});
      this._buttonColumns[name] = options;
      this.add(name, text, width, buttonOptions);
      return this;
    },
    getColumns: function () {
      return this._columns;
    },
    getFields: function () {
      return this._fields;
    },
    getValidations: function () {
      return this._validations;
    },
    getUniqueColumns: function() {
      return this._uniqueColumns;
    },
    getGroupColumns:function() {
      return this._groupColumns;
    },
    getReadOnlyColumns:function(){
      return this._readOnlyColumns;
    },
    getDateRangeColumns:function(){
      return this._dateRangeColumns;
    },
    getDropDownColumns:function(){
      return this._dropDownColumns;
    },
    bindDropDown:function (data, options) {
      var values = [];
      var labels = [];
      var valueField = 'code';
      var textField = 'descr';
      var selectHeader ='';
      var selectHeaderValue ='';

      if (options) {
        if (options.valueField) {
          valueField = options.valueField;
        }

        if (options.textField) {
          textField = options.textField;
        }
      }

      if (!options || options.unselect==true || (options.required != true && options.unselect != false) ) {
          if (options && options.selectHeader) {
              selectHeader = options.selectHeader;
          }
          if (options && options.selectHeaderValue) {
              selectHeaderValue = options.selectHeaderValue;
          }
          labels.push(selectHeader);
          values.push(selectHeaderValue);
      }

      var label;
      $.each(data, function (key, value) {
        values.push(value[valueField]);
        label = value[textField];
        if (!label) {
          label = value[valueField];
        }
        labels.push(label);
      });
      return {values: values, labels: labels};
    },
    getData:function (url, params, callback) {
      var returnData;
      $.getSync(url, params, function (data) {
        returnData = data;
        if(callback) {
          callback(data);
        }
      });
      return returnData;
    },
    getDropDownChildColumns:function () {
      var childs = {};
      $.each(this._dropDownColumns,function(idx,dropChildDown) {
        $.each(dropChildDown,function(idx,dropDown) {
          childs[dropDown.child] = dropDown;
        });
      });
      return childs;
    },
    getButtonColumns:function () {
      return this._buttonColumns;
    },
    getNumberColumns:function () {
      return this._numberColumns;
    }
  };

  return Column;
})();


/**************************************
* @@@ grid object 설정하기
*
* @param grid id
* @param grid object
* @return void
**************************************/
var cfn_grid_set = function(id, obj)
{
    gv_com_grid_arr[id] = obj;
}

/**************************************
* @@@ grid object 가져오기
*
* @param grid id
* @return grid object
**************************************/
var cfn_grid_get = function(id)
{
    return gv_com_grid_arr[id];
}

/**************************************
* @@@ all grid resetsize
*
* @return void
**************************************/
var cfn_grid_resetSize = function()
{
    for(var grdObj in gv_com_grid_arr)
    {
        if(gv_com_grid_arr[grdObj] instanceof Grid)
        {
            gv_com_grid_arr[grdObj].__gridView.resetSize();
        }

    }
}
