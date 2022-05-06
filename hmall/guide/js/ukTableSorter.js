$(function() {
    var $table = $( '#table' ),
    isEnabled = true,      // tablesorter enabled
    hideFilterRow = false, // hide filter row setting

    // used by headerTitles widget
    updateTooltips = function( $cell, txt ) {
        if ( $cell.is( ':hover' ) ) {
            $cell
            .attr({ title : txt, 'original-title' : txt })
            // hide, then show the tooltip to force updating & realignment
            .tipsy( 'hide' )
            .tipsy( 'show' );
        }
        return txt;
    };

    $table.tablesorter({
        // sortList: [[9, 0]], 
        theme : 'blue',
        widthFixed : false,
        showProcessing: true,
        widgets : [ 'zebra', 'stickyHeaders', 'filter', 'headerTitles', 'toggle-ts' ],
        widgetOptions : {
            filter_reset           : '.reset',
            filter_external        : '.search',
            filter_columnFilters   : true,
            headerTitle_useAria    : true,
            headerTitle_tooltip    : 'tooltip',
            headerTitle_callback   : updateTooltips,
            // extra class name added to the sticky header row
            stickyHeaders : '',
            // number or jquery selector targeting the position:fixed element
            stickyHeaders_offset : 0,
            // added to table ID, if it exists
            stickyHeaders_cloneId : '-sticky',
            // trigger "resize" event on headers
            stickyHeaders_addResizeEvent : true,
            // if false and a caption exist, it won't be included in the sticky header
            stickyHeaders_includeCaption : true,
            // The zIndex of the stickyHeaders, allows the user to adjust this to their needs
            stickyHeaders_zIndex : 2,
            // jQuery selector or object to attach sticky header to
            stickyHeaders_attachTo : null,
            // jQuery selector or object to monitor horizontal scroll position (defaults: xScroll > attachTo > window)
            stickyHeaders_xScroll : null,
            // jQuery selector or object to monitor vertical scroll position (defaults: yScroll > attachTo > window)
            stickyHeaders_yScroll : null,
            // scroll table top into view after filtering
            stickyHeaders_filteredToTop: true,

            // toggle-ts widget
            toggleTS_hideFilterRow : hideFilterRow,
                toggleTS_callback      : function( c, isEnabled ) {
                    // update tooltips
                    c.$table.trigger( 'refreshHeaderTitle' );
                }
        },
    });
});