var Chart = (function() {
	function Chart(id) {
	    this._id = id;
	    this._chart =  new cfx.Chart();
	    this._chart.getSeries().getItem(0).setColor("#FF0000");
	    this._chart.getSeries().getItem(0).getBorder().setColor("#D00000");
		return this;
	}
	
  Chart.prototype = {
    build:function() {
        var gallery = this._gallery;
        var id = this._id;
        var chart = this._chart;
        chart.getAllSeries().setGallery(cfx.Gallery[gallery]);
        if ($('#'+id).data('title')) {
            var title = new cfx.TitleDockable();
            title.setText($('#'+id).data('title'));
            chart.getTitles().add(title);
        }

        var height = $('#'+id).height();

        if (height < 1) {
            gridDiv.height('200px');
        }

        chart.create(document.getElementById(id));
        $('#'+id).find('svg').attr('style','');
        return this;
    },
    bind:function(data){
      var chart = this._chart;
      chart.setDataSource(data);
      return this;
    },
    type:function(gallery) {
      this._gallery = gallery;
      return this;
    },
    load:function(url, param, callback) {
        $.get(url,param,function(data){
            if (data) {
                this.bind(data);
            }
            if (callback) {
                callback(data);
            }
        });
    },
    getChart:function() {
		  return this._chart;
    },
    click:function(hitType, callback) {
		  if (typeof hitType == 'function') {
        callback = hitType;
        hitType = null;
      }
      $('#'+this._id).click(function(evt){
        if (hitType && evt.hitType == cfx.HitType[hitType]) {
          callback(evt);
        } else if (!hitType) {
          callback(evt);
        }
      });
    }
	};
	return Chart;
})();