var pubTotal = []
    , pubState = []
    , pubPendDate6 = []
    , pubPendDate7 = []
    , pubPendDate8 = []
    , pubPendDate9 = []
    , pub1Name = []
    , pub1State = []
    , pub1PendDate6 = []
    , pub1PendDate7 = []
    , pub1PendDate8 = []
    , pub1PendDate9 = []
    , pub2Name = []
    , pub2State = []
    , pub2PendDate6 = []
    , pub2PendDate7 = []
    , pub2PendDate8 = []
    , pub2PendDate9 = []
    , pub3Name = []
    , pub3State = []
    , pub3PendDate6 = []
    , pub3PendDate7 = []
    , pub3PendDate8 = []
    , pub3PendDate9 = []
    , pub4Name = []
    , pub4State = []
    , pub4PendDate6 = []
    , pub4PendDate7 = []
    , pub4PendDate8 = []
    , pub4PendDate9 = []
;
for(var i=0; i<guide_data.length; i++){
    var guData = guide_data[i];
    if ( !guData.no ){
        if ( !guData.state.indexOf("완료") ){
            pubState.push(guData);
            $('.ukcountwrap .total .pagecount b').text(pubState.length);
        }
        if ( !guData.pend_date.indexOf("6/") ){
            pubPendDate6.push(guData);
            $('.ukcountwrap .total .datecount6 i').text(pubPendDate6.length);
        }
        if ( !guData.pend_date.indexOf("7/") ){
            pubPendDate7.push(guData);
            $('.ukcountwrap .total .datecount7 i').text(pubPendDate7.length);
        }
        if ( !guData.pend_date.indexOf("8/") ){
            pubPendDate8.push(guData);
            $('.ukcountwrap .total .datecount8 i').text(pubPendDate8.length);
        }
        if ( !guData.pend_date.indexOf("9/") ){
            pubPendDate9.push(guData);
            $('.ukcountwrap .total .datecount9 i').text(pubPendDate9.length);
        }
    } 
    if ( !guData.name.indexOf("김대민") ){
        pub1Name.push(guData);
        if ( !guData.pend_date.indexOf("6/") ){
            pub1PendDate6.push(guData)
            $('.ukcountwrap .pub1 .datecount6 i').text(pub1PendDate6.length);
        } else if( !guData.pend_date.indexOf("7/") ){
            pub1PendDate7.push(guData)
            $('.ukcountwrap .pub1 .datecount7 i').text(pub1PendDate7.length);
        } else if ( !guData.pend_date.indexOf("8/") ){
            pub1PendDate8.push(guData)
            $('.ukcountwrap .pub1 .datecount8 i').text(pub1PendDate8.length);
        } else if ( !guData.pend_date.indexOf("9/") ){
            pub1PendDate9.push(guData)
            $('.ukcountwrap .pub1 .datecount9 i').text(pub1PendDate9.length);
        }
    } else if ( guData.name === "조윤호" ) {
        pub2Name.push(guData)
        if ( !guData.pend_date.indexOf("6/") ){
            pub2PendDate6.push(guData);
            $('.ukcountwrap .pub2 .datecount6 i').text(pub2PendDate6.length);
        } else if( !guData.pend_date.indexOf("7/") ){
            pub2PendDate7.push(guData);
            $('.ukcountwrap .pub2 .datecount7 i').text(pub2PendDate7.length);
        } else if ( !guData.pend_date.indexOf("8/") ){
            pub2PendDate8.push(guData);
            $('.ukcountwrap .pub2 .datecount8 i').text(pub2PendDate8.length);
        } else if ( !guData.pend_date.indexOf("9/") ){
            pub2PendDate9.push(guData);
            $('.ukcountwrap .pub2 .datecount9 i').text(pub2PendDate9.length);
        }
    } else if ( guData.name === "박윤미" ) {
        pub3Name.push(guData)
        if ( !guData.pend_date.indexOf("6/") ){
            pub3PendDate6.push(guData);
            $('.ukcountwrap .pub3 .datecount6 i').text(pub3PendDate6.length);
        } else if( !guData.pend_date.indexOf("7/") ){
            pub3PendDate7.push(guData);
            $('.ukcountwrap .pub3 .datecount7 i').text(pub3PendDate7.length);
        } else if ( !guData.pend_date.indexOf("8/") ){
            pub3PendDate8.push(guData);
            $('.ukcountwrap .pub3 .datecount8 i').text(pub3PendDate8.length);
        } else if ( !guData.pend_date.indexOf("9/") ){
            pub3PendDate9.push(guData);
            $('.ukcountwrap .pub3 .datecount9 i').text(pub3PendDate9.length);
        }
    } else if ( guData.name === "조아라" ) {
        pub4Name.push(guData)
        if ( !guData.pend_date.indexOf("6/") ){
            pub4PendDate6.push(guData);
            $('.ukcountwrap .pub4 .datecount6 i').text(pub4PendDate6.length);
        } else if( !guData.pend_date.indexOf("7/") ){
            pub4PendDate7.push(guData);
            $('.ukcountwrap .pub4 .datecount7 i').text(pub4PendDate7.length);
        } else if ( !guData.pend_date.indexOf("8/") ){
            pub4PendDate8.push(guData);
            $('.ukcountwrap .pub4 .datecount8 i').text(pub4PendDate8.length);
        } else if ( !guData.pend_date.indexOf("9/") ){
            pub4PendDate9.push(guData);
            $('.ukcountwrap .pub4 .datecount9 i').text(pub4PendDate9.length);
        }
    }
}