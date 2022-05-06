var UK_GUIDE = UK_GUIDE||{};
UK_GUIDE.GNB = {
  init : function(){
    this.setButton();
  },
  reset : function(){
    $(".uknav a").each(function(index, item){
      $(item).removeClass("on");
    });
  },
  setButton : function(){
    var _self = this;
    $(".uknav a").click(function(e){
      _self.reset();
      var id = $(this).attr("id");
      switch(id){
        case "ukSetting":
          UK_GUIDE.content.load("../guide/setting.html");
          break;
        case "ukStyle":
          UK_GUIDE.content.load("../guide/styleguide.html");
          break;
        case "ukComponent":
          UK_GUIDE.content.load("../guide/component.html");
          break;
        case "ukProgress":
          UK_GUIDE.content.load("../guide/progress.html");
          break;
        case "ukPages":
          UK_GUIDE.content.load("../guide/pages.html");
          break;
        default:
          UK_GUIDE.content.load("../guide/progress.html");
          break;
        }
        $(this).addClass("on");
        return false;
    });

    $(".uklogo").click(function(e){
      _self.reset();
      UK_GUIDE.content.load("../guide/progress.html");
    });

    $(".uklogo").trigger( "click" );
  },
};
UK_GUIDE.content = {
  load : function(url){
    $(".ukmain>iframe").attr("src",url)
  }
};
UK_GUIDE.page = {
  init : function(){
    this.setList();
  },
  setList : function(){
    var cnt = 0;
    var tag = "";

    for( var i=0;i<guide_data.length;i++){
      try{
        cnt++;
        tag += "<tr>";
        tag += "<td class='tcenter'>"+cnt+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["id"]+"</td>";
        tag += "<td>"+guide_data[i]["1depth"]+"</td>";
        tag += "<td>"+guide_data[i]["2depth"]+"</td>";
        tag += "<td>"+guide_data[i]["3depth"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["name"]+"</td>";
        tag += "<td class='tcenter'><div class='ia'>"+guide_data[i]["iaend_date"]+"</div></td>";
        tag += "<td class='tcenter'>"+guide_data[i]["mstart_date"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["mend_date"]+"</td>";
        tag += "<td class='tcenter'><div class='design'>"+guide_data[i]["dend_date"]+"</div></td>";
        tag += "<td class='tcenter'>"+guide_data[i]["start_date"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["end_date"]+"</td>";
        tag += "<td class='tcenter'><div class='publish'>"+guide_data[i]["pend_date"]+"</div></td>";
        tag += "<td class='tcenter'><div class='front'>"+guide_data[i]["front_date"]+"</div></td>";
        tag += "<td class='tcenter'>"+guide_data[i]["state"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["progress"]+"%"+"</td>";
        tag += "<td>";
        tag += "<p><a href='../"+guide_data[i]["url"]+"' target='_blank' title='새 창 열림'>"+guide_data[i]["url"]+"</a>";
        tag += "<p><a href='../"+guide_data[i]["url1"]+"' target='_blank' title='새 창 열림'>"+guide_data[i]["url1"]+"</a>";
        tag += "</td>";
        tag += "<td>";
        tag += "<p>"+guide_data[i]["etc_cnt"]+"</p>";
        // tag += "<p>"+guide_data[i]["etc_cnt1"]+"</p>";
        tag += "</td>";
        tag += "</tr>";
      }catch(e){
        console.log(e.message)
      }
    }
    $("#ukPageBody").append(tag);
    
    var ukPub = guide_data.length
        , ukPubSt = guide_data.filter((uk)=>uk.state === "완료")
        , ukPub1 = guide_data.filter((uk)=>uk.name === "김대민")
        , ukPub2 = guide_data.filter((uk)=>uk.name === "조윤호")
        , ukPub3 = guide_data.filter((uk)=>uk.name === "박윤미")
        , ukPub4 = guide_data.filter((uk)=>uk.name === "조아라")
        , ukPub1St = guide_data.filter((uk)=>uk.name === "김대민" && uk.state === "완료")
        , ukPub2St = guide_data.filter((uk)=>uk.name === "조윤호" && uk.state === "완료")
        , ukPub3St = guide_data.filter((uk)=>uk.name === "박윤미" && uk.state === "완료")
        , ukPub4St = guide_data.filter((uk)=>uk.name === "조아라" && uk.state === "완료")
        , ukPub1Len = ukPub1.length
        , ukPub2Len = ukPub2.length
        , ukPub3Len = ukPub3.length
        , ukPub4Len = ukPub4.length
        , ukPubStLen = ukPubSt.length
        , ukPub1StLen = ukPub1St.length
        , ukPub2StLen = ukPub2St.length
        , ukPub3StLen = ukPub3St.length
        , ukPub4StLen = ukPub4St.length
        , ukTotalPer = Math.round((ukPubStLen/ukPub)*100.0)
        , ukPub1Per = Math.round((ukPub1StLen/ukPub1Len)*100.0)
        , ukPub2Per = Math.round((ukPub2StLen/ukPub2Len)*100.0)
        , ukPub3Per = Math.round((ukPub3StLen/ukPub3Len)*100.0)
        , ukPub4Per = Math.round((ukPub4StLen/ukPub4Len)*100.0)
    ;
    $('.ukcountwrap .total .pagecount i').text(ukPub);
    $('.ukcountwrap .pub1 .pagecount i').text(ukPub1Len);
    $('.ukcountwrap .pub2 .pagecount i').text(ukPub2Len);
    $('.ukcountwrap .pub3 .pagecount i').text(ukPub3Len);
    $('.ukcountwrap .pub4 .pagecount i').text(ukPub4Len);
    $('.ukcountwrap .total .pagecount b').text(ukPubStLen);
    $('.ukcountwrap .pub1 .pagecount b').text(ukPub1StLen);
    $('.ukcountwrap .pub2 .pagecount b').text(ukPub2StLen);
    $('.ukcountwrap .pub3 .pagecount b').text(ukPub3StLen);
    $('.ukcountwrap .pub4 .pagecount b').text(ukPub4StLen);
    $('.ukcountwrap .total .percent i').text(ukTotalPer.toFixed(1));
    $('.ukcountwrap .pub1 .percent i').text(ukPub1Per.toFixed(1));
    $('.ukcountwrap .pub2 .percent i').text(ukPub2Per.toFixed(1));
    $('.ukcountwrap .pub3 .percent i').text(ukPub3Per.toFixed(1));
    $('.ukcountwrap .pub4 .percent i').text(ukPub4Per.toFixed(1));

    console.log( "Mobile : " + guide_data.filter((uk)=>uk.id === "MO").length )
    console.log( "PC : " + guide_data.filter((uk)=>uk.id === "PC").length )
    console.log( "APP : " + guide_data.filter((uk)=>uk.id === "APP").length )
  }
}