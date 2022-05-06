var Dialog = (function() {

    function Dialog(message, title, closeCallback, options) {
			this._thisDialog = null;
			var defaultOptions ={};

			$.extend(defaultOptions, options);

					createDialog(defaultOptions);

					this._thisDialog = $('#'+defaultOptions.id);

			if ($.isFunction(title)) {
				closeCallback = title;
				title = undefined;
			}

			if ($.isFunction(closeCallback)) {
				this._thisDialog.off('dialogclose');
				this._thisDialog.on('dialogclose', closeCallback);
			}

			this._thisDialog.html(message);
			this._thisDialog.dialog('option', 'title', title);
    }

    function createDialog(options) {
			var alertForm = '';
			var defaultOptions = {
				modal: true,
					autoOpen: false,
					resizable: false,
					draggable: false
			};

			$.extend(defaultOptions, options);

			if (!options.id) {
				throw 'plz define id';
			}

			if	($('#'+options.id).length > 0 ) {
				$('#'+options.id).dialog('destroy');
				$('#'+options.id).remove();
			}

			if (!options.styleClass) {
				options.styleClass ='';
			}

			if (!defaultOptions.width) {
                defaultOptions.minWidth=410;
            }

            if (!defaultOptions.height) {
                defaultOptions.minHeight=180;
            }

			alertForm += '<div id="'+options.id+'" class="'+options.styleClass+'" title="'+options.title+'">';
			alertForm += options.contents;
			alertForm += '</div>';
			$('body').append(alertForm);
			$.extend(defaultOptions,{
        open: function(event, ui) {
          $('.ui-dialog-titlebar-close', ui.dialog | ui).show();
        }
			});
			$('#'+options.id).dialog(defaultOptions);
    }

    Dialog.prototype = {
        open:function(event, ui){
        	this._thisDialog.dialog('open');
        }
    };
    return Dialog;
})();

(function ( $ ) {
	//TODO 코드정리 필요.
	/**
	 * 기존함수 override
	 */
	//function alert(message, title, callback) {
		//$.alert(message, title, callback)
	//}

	/**
	 * 기존함수 override
	 */
	//function confirm(message, title, callback) {
		//$.confirm(message, title, callback)
	//}

  /**
   * show alert;
   */
  $.dialog = function(message, title, callback,  options) {
    var defaultOptions = {buttons:[
      {text: "확인",
        class: options && options.buttonClass ? options.buttonClass : ' ',
        click: function() {
          $( this ).dialog('close');
        }
      },
    ],
      id:'_mc-alert'};

    if ($.isFunction(title)) {
      callback = title;
      title = undefined;
    }

    if (!title) {
      title = '알림';
    }

    if (options) {
      $.extend(defaultOptions, options);
    }

    var alertDialog = new Dialog(message, title, callback, defaultOptions);
    alertDialog.open();
  };

	/**
	 * show alert;
	 */
	$.alert = function(message, title, callback,  options) {
    message = '<i class="fa fa-4x fa-info-circle fa-middle rpad"></i><strong class="h6"> '+message+'</strong>';
    var options = {
      buttonClass : 'btn btn-sm btn-primary',
      classes: {
        'ui-dialog': 'mercury-modal-alert',
        'ui-dialog-content' : 'justify-content-md-center d-flex align-items-center'
      }}
		$.dialog(message, title, callback, options);
	};
/*
	$.sucess = function(message, title, callback) {
    message = '<div class="mess-pop">' +
      '<div class="mess-center">' +
      '<div class="bluei-circle"></div>' +
      '<p>'+message+'</p>' +
      '</div>' +
      '</div>'
    $.dialog(message, title, callback);
	};*/

	$.warning = function(message, title, callback) {
    message = '<i class="fa fa-4x fa-check-circle fa-middle rpad"></i><strong class="h6"> '+message+'</strong>';
    var options = {
      buttonClass : 'btn btn-sm btn-warning',
      classes: {
        'ui-dialog': 'mercury-modal-warning',
        'ui-dialog-content' : 'justify-content-md-center d-flex align-items-center'
      }}
    $.dialog(message, title, callback, options);
  };

  $.error = function(message, title, callback) {
    message = '<i class="fa fa-4x fa-check-circle fa-middle rpad"></i><strong class="h6"> '+message+'</strong>';

    var options = {
      buttonClass : 'btn btn-sm btn-danger',
      classes: {
        'ui-dialog': 'mercury-modal-error',
        'ui-dialog-content' : 'justify-content-md-center d-flex align-items-center'
      }}
    $.dialog(message, title, callback, options);
  };

	/**
	 *
	 */
	$.confirm = function (message, title, callback, isFalseCallback) {
		if ($.isFunction(title)) {
			isFalseCallback = callback;
			callback = title;
			title = undefined;
		}

		var options = {buttons:[
						    {text: "확인",
                  class:'btn btn-sm btn-primary',
						        click: function() {
						          $( this ).dialog('close');
						          callback(true);
						        }
						    },
						    {text: "취소",
                    class:'btn btn-sm btn-outline-secondary',
						        click: function() {
						          $( this ).dialog('close');
						          if (isFalseCallback==true) {
						        	  callback(false);
						          }
						        }
						    }
						 ],
					    closeOnEscape: false,
					    open: function(event, ui) {
					        $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
					    },
						id:'_mc-confirm',
            classes: {
              'ui-dialog': 'mercury-modal-confirm',
              'ui-dialog-content' : 'justify-content-md-center d-flex align-items-center'
            }
		 			};

		if (!title) {
			title = '확인';
		}

    message ='<i class="fa fa-4x fa-question-circle fa-middle rpad"></i><strong class="h6"> '+message+'</strong>';

		var confirmDialog = new Dialog(message, title, null, options);
		confirmDialog.open();
	};


}( jQuery ));


var Modal = (function() {

    function Modal(id, title, src, options) {
        this._id = id;
        this._title = title;
        this._options = options;

        if(typeof src == 'string') {
            this._src = src;
        } else {
            this._options = src;
        }
        appendModal(id, title, src, options);
    }

    var width, height;
    var closeEvent = false;
    var appendModal = function(id, title, src, options) {

        if (!id)
            throw 'Please define id.';

        var modalForm = '';
        var defaultOptions = {
            modal: true,
            autoOpen: false,
            resize: function( event, ui ) {
                /*              var modalHeight = $('#'+id).height();
                              $('#ifrm_'+id).height(modalHeight- 80);*/
            }
        };
        var callback = '';
        var receiver = '';
        var closeCallback = '';
        $.extend(defaultOptions, options);

        if ($('#' + id).length > 0) {
            $('#' + id).dialog('destroy');
            $('#' + id).remove();
        }

        if (!options.styleClass) {
            options.styleClass = '';
        }

        if (options.width) { width = options.width; }

        if (options.height) { height = options.height; }

        if ($.isFunction(options.receive)) {setCallBack();}


        if(options.callback) {
            callback = options.callback;
        }

        if(options.receiver) {
            receiver = options.receiver;
        }

        if(options.closeEvent) {
            closeEvent = options.closeEvent;
        }

        if(options.closeCallback) {
        	closeCallback = options.closeCallback;
        }


        modalForm += '<div id="' + id + '" class="card-body mercury-modal" title="' + title + '" width="' + width + '" height="' + height + '" data-callback="'+callback+'" data-close-event="'+closeEvent+'">';
        modalForm += '<iframe id="ifrm_' + id + '" name="ifrm_' + id + '" src="' + src + '" width="100%" height="100%" data-receiver="'+receiver+'"/>';
        modalForm += '</div>';
        $('body').append(modalForm);
        $('#' + id).dialog(defaultOptions);

		if (closeCallback) {
			if (!$.isFunction(closeCallback)) {
				callback = (new Function ('return '+closeCallback))();
			}
			$('#' + id).off('dialogclose');
			$('#' + id).on('dialogclose', callback);
		}

        if (options.open) {
            $('#' + id).open();
        }
    };

    Modal.prototype = {
        create:function(id, title, src, options) {
            this._id = id;
            this._title = title;
            this._options = options;

            if(typeof src == 'string') {
                this._src = src;
            } else {
                this._options = src;
            }
            appendModal(id, title, src, options);
        }
        ,open:function(url){

            var modalDiv = $('#'+this._id);
            if (typeof url == 'string') {
                modalDiv.children('iframe').attr('src',url);
            } else if(typeof url == 'undefined') {
                if (!$('#ifrm_'+this._id).get(0).contentWindow['_ready']) {
                    $.alert(base.modal.not.ready);
                    return;
                }
            }
            modalDiv.dialog('open');
        }
        ,close:function(url){
            var modalDiv = $('#'+this._id);
            if (url) {
                modalDiv.children('iframe').attr('src', url);
            }
            $('#'+this._id).dialog('close');
        }
        ,send:function(options){
            $.send(this._id,options);
        }
        ,sendModal:function(options){
            $.sendModal(this._id,options);
        }
        ,getFrame:function(){
            return $('#ifrm_'+this._id);
        }
    };
    return Modal;
})();

(function ( $ ) {
    $.send = function(id, options) {
        DataBroker.provider(id, options);
    };

    $.sendModal = function(id, options) {
        if (!id) {
            window.parent.DataBroker.send(options);
        } else {
            DataBroker.sendModal(id, options);
        }
    };

    $.changeModal = function(id) {
        ModalSwitch.provider(id);
    };
}( jQuery ));

var DataBroker = {
	provider : function(id, options){
        if(typeof id === 'object') {
            options = id;
            id = null;
        }
        var url = window.location.href;
        var lastURL = url.substring(url.lastIndexOf('/')+1);
        var path = lastURL;
        if (lastURL.indexOf('?') > -1) {
            path = lastURL.substring(0, lastURL.indexOf('?'));
        }

        if (!options) {
            options = {};
        }

        options._sender = path;

        if (!id) {
            window.parent.DataBroker.send(options);
        } else {
        	/**
             * patch MDI iframe 20211118
             * Modal is iframe of iframe. so not found $('#ifrm_'+id)
             */
            //if (self != top) {
        	if (self == top) {
                window.parent.DataBroker.sendModal(id, options);
            } else {
                DataBroker.sendModal(id, options);
            }
        }
    },
    send: function(options){
        var dialogDiv;

        $('.mercury-modal').each(function(){
            dialogDiv = $(this).parent('div');
            if($(dialogDiv).css('display')!='none') {
                window[$(this).data('callback')](options);
            }
        });
    },
    sendModal: function (id, options) {
        var iframe = $('#ifrm_'+id);
        var receiver = $(iframe).data('receiver');

        if(receiver) {
        	if(!$.isNull($(iframe).get(0).contentWindow[receiver])){
        		$(iframe).get(0).contentWindow[receiver](options);
        	}
        }
    }
};

var ModalSwitch = {
    provider : function(id){
        if (self != top) {
            window.parent.ModalSwitch.provider(id);
        } else {
            ModalSwitch.show(id);
        }
    },
    show:function(id) {
        $('.mercury-modal').each( function() {
            $(this).dialog('close')
        });
        $('#'+id).dialog('open');
    }
};

