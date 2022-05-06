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
        click: function() {
          $( this ).dialog('close');
        }
      },
    ],
        width:'350px',
      id:'_mc-alert'};

    if ($.isFunction(title)) {
      callback = title;
      title = undefined;
    }

    if (!title) {
      title = 'Alert';
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
    message = '<div class="mess-pop">' +
      '<div class="mess-center">' +
      '<div class="bluei-circle"></div>' +
      '<p>'+message+'</p>' +
      '</div>' +
      '</div>';
		$.dialog(message, title, callback);
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
    message = '<div class="mess-pop">' +
      '<div class="mess-center">' +
      '<div class="noti-trangle"></div>' +
      '<p>'+message+'</p>' +
      '</div>' +
      '</div>';
    $.dialog(message, title, callback);
  };

  $.error = function(message, title, callback) {
    message = '<div class="mess-pop">' +
      '<div class="mess-center">' +
      '<div class="red-circle"></div>' +
      '<p>'+message+'</p>' +
      '</div>' +
      '</div>';
    $.dialog(message, title, callback);
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
						        click: function() {
						          $( this ).dialog('close');
						          callback(true);
						        }
						    },
						    {text: "취소",
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
						id:'_mc-confirm'
		 			};



		if (!title) {
			title = 'Confirm';
		}

    message = '<div class="mess-pop">' +
      '<div class="mess-center">' +
      '<div class="blue-circle"></div>' +
      '<p>'+message+'</p>' +
      '</div>' +
      '</div>';

		var confirmDialog = new Dialog(message, title, null, options);
		confirmDialog.open();
	};


}( jQuery ));


var Modal = (function() {

    function Modal(id, title, src, options) {
        this._id = id;
        this._title = title;
        this._options = options;
        this._isTag = false;

        if (!title && !src && !options) {
            this._isTag = true;
            return;
        }

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

        $.extend(defaultOptions, options);

        if ($('#' + id).length > 0) {
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

        var template = '';
        template += '<div id="'+id+'" class="modal fade mercury-modal" data-callback="'+callback+'" data-close-event="'+closeEvent+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static" >';
        template += '<div class="modal-dialog" style="    max-width: '+width+'px; margin: 0px auto;top:50px;">';
        template += '<div class="card" style="width:'+width+'px; height:'+height+'px">';
        template += '<div class="card-header">';
        template += '<div class="row"><div class="col-9">';
        template += '<p id="myModalLabel" class="modal-title">'+title+'</p>';
        template += '</div>';
        template += '<div class="col-md-3">';
        template += '<button type="button" class="close mercury-modal-close" style="cursor:pointer">&times;</button>';
        template += '</div></div>';
        template += '</div>';
        template += '<div class="card-body" style="height:'+(height-70)+'px">';
        template += '<iframe id="ifrm_' + id + '" name="ifrm_' + id + '" src="' + src + '" width="100%" height="100%" data-receiver="'+receiver+'" style="border:none"/>';
        template += '</div>';
        template += '</div>';
        template += '</div>';
        template += '</div>';
        $('body').append(template);

        if (options.open) {
            $('#' + id).modal();
        }
    };

    Modal.prototype = {
        create:function(id, title, src, options) {
            if (!title && !src && !options) {
                this._isTag = true;
                return;
            }
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
                $('#ifrm_'+this._id).attr('src',url);
            } else if(typeof url == 'undefined') {
                if (!this._isTag && !$('#ifrm_'+this._id).get(0).contentWindow['_ready']) {
                    $.alert(base.modal.not.ready);
                    return;
                }
            }
            modalDiv.modal();
        }
        ,close:function(url){
            if (url) {
                $('#ifrm_'+this._id).attr('src', url);
            }
            $('#'+this._id).modal('hide');
        }
        ,send:function(options){
            if (this._isTag) {
                var callback = $('#'+this._id).data('callback');
                if (!callback) {
                    return;
                }
                window[callback](options);
                return;
            }
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
        if(id instanceof Object) {
            options = id;
            id = null;
        }

        //
        if (!id) {
            window.parent.DataBroker.send(options);
        } else {
            if (self != top) {
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
            if($(dialogDiv).css('display')!='none' && $(this).data('callback')) {
                window[$(this).data('callback')](options);
            }
        });
    },
    sendModal: function (id, options) {
        var iframe = $('#ifrm_'+id);
        var receiver = $(iframe).data('receiver');
        if(receiver) {
            $(iframe).get(0).contentWindow[receiver](options);
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
            $(this).modal('hide')
        });
        $('#'+id).modal('show');
    }
};

