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
        tag += "<td>"+guide_data[i]["depth1"]+"</td>";
        tag += "<td>"+guide_data[i]["depth2"]+"</td>";
        tag += "<td>"+guide_data[i]["depth3"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["name"]+"</td>";
        // tag += "<td class='tcenter'><div class='ia'>"+guide_data[i]["iaend_date"]+"</div></td>";
        // tag += "<td class='tcenter'><div class='design'>"+guide_data[i]["dend_date"]+"</div></td>";
        // tag += "<td class='tcenter'>"+guide_data[i]["mstart_date"]+"</td>";
        // tag += "<td class='tcenter'>"+guide_data[i]["mend_date"]+"</td>";
        tag += "<td class='tcenter'><div class='front'>"+guide_data[i]["front_date"]+"</div></td>";
        tag += "<td class='tcenter'>"+guide_data[i]["start_date"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["end_date"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["state"]+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["progress"]+"%"+"</td>";
        tag += "<td>";
        tag += "<p><a href='../"+guide_data[i]["url"]+"' target='_blank' title='새 창 열림'>"+guide_data[i]["url"]+"</a>";
        tag += "<p><a href='../"+guide_data[i]["url1"]+"' target='_blank' title='새 창 열림'>"+guide_data[i]["url1"]+"</a>";
        tag += "</td>";
        tag += "<td>";
        tag += "<p>"+guide_data[i]["etc_cnt9"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt8"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt7"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt6"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt5"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt4"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt3"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt2"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt1"]+"</p>";
        tag += "<p>"+guide_data[i]["etc_cnt"]+"</p>";
        tag += "</td>";
        tag += "</tr>";
      }catch(e){
        console.log(e.message)
      }
    }
    $("#ukPageBody").append(tag);
    
    var ukPub = guide_data.length
        , ukMo = guide_data.filter((uk)=>uk.id === "MO")
        , ukPc = guide_data.filter((uk)=>uk.id === "PC")
        , ukApp = guide_data.filter((uk)=>uk.id === "APP")
        , ukPubSt = guide_data.filter((uk)=>uk.progress === "100")
        , ukPub1 = guide_data.filter((uk)=>uk.name === "김대민")
        , ukPub2 = guide_data.filter((uk)=>uk.name === "조윤호")
        , ukPub3 = guide_data.filter((uk)=>uk.name === "박윤미")
        , ukPub4 = guide_data.filter((uk)=>uk.name === "조아라")
        , ukMoSt = guide_data.filter((uk)=>uk.id === "MO" && uk.progress === "100")
        , ukPcSt = guide_data.filter((uk)=>uk.id === "PC" && uk.progress === "100")
        , ukAppSt = guide_data.filter((uk)=>uk.id === "APP" && uk.progress === "100")
        , ukPub1St = guide_data.filter((uk)=>uk.name === "김대민" && uk.progress === "100")
        , ukPub2St = guide_data.filter((uk)=>uk.name === "조윤호" && uk.progress === "100")
        , ukPub3St = guide_data.filter((uk)=>uk.name === "박윤미" && uk.progress === "100")
        , ukPub4St = guide_data.filter((uk)=>uk.name === "조아라" && uk.progress === "100")
        , ukMoLen = ukMo.length
        , ukPcLen = ukPc.length
        , ukAppLen = ukApp.length
        , ukMoStLen = ukMoSt.length
        , ukPcStLen = ukPcSt.length
        , ukAppStLen = ukAppSt.length
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
        , ukmoTotalPer = Math.round((ukMoStLen/ukMoLen)*100.0)
        , ukpcTotalPer = Math.round((ukPcStLen/ukPcLen)*100.0)
        , ukappTotalPer = Math.round((ukAppStLen/ukAppLen)*100.0)

        , ukmotask1 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "GNB")
        , ukmotask2 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "검색")
        , ukmotask3 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "고객센터")
        , ukmotask4 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "기타")
        , ukmotask5 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "마이페이지")
        , ukmotask6 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "매장/전시")
        , ukmotask7 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "메인탬플릿")
        , ukmotask8 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "상품상세")
        , ukmotask9 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "이벤트/프로모션")
        , ukmotask10 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "장바구니")
        , ukmotask11 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "주문")
        , ukmotask12 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "회원가입")
        , ukmotask13 = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "로그인")
        , ukmotask14 = guide_data.filter((uk)=>uk.id === "MO" && uk.etc_cnt === "기존탬플릿 사용")
        , ukmotask1p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "GNB" && uk.progress === "100")
        , ukmotask2p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "검색" && uk.progress === "100")
        , ukmotask3p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "고객센터" && uk.progress === "100")
        , ukmotask4p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "기타" && uk.progress === "100")
        , ukmotask5p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "마이페이지" && uk.progress === "100")
        , ukmotask6p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "매장/전시" && uk.progress === "100")
        , ukmotask7p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "메인탬플릿" && uk.progress === "100")
        , ukmotask8p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "상품상세" && uk.progress === "100")
        , ukmotask9p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "이벤트/프로모션" && uk.progress === "100")
        , ukmotask10p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "장바구니" && uk.progress === "100")
        , ukmotask11p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "주문" && uk.progress === "100")
        , ukmotask12p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "회원가입" && uk.progress === "100")
        , ukmotask13p = guide_data.filter((uk)=>uk.id === "MO" && uk.depth1 === "로그인" && uk.progress === "100")
        , ukmotask14p = guide_data.filter((uk)=>uk.id === "MO" && uk.etc_cnt === "기존탬플릿 사용" && uk.progress === "100")

        , ukpctask1 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "GNB")
        , ukpctask2 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "검색")
        , ukpctask3 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "고객센터")
        , ukpctask4 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "기타")
        , ukpctask5 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "마이페이지")
        , ukpctask6 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "매장/전시")
        , ukpctask7 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "메인탬플릿")
        , ukpctask8 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "상품상세")
        , ukpctask9 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "이벤트/프로모션")
        , ukpctask10 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "장바구니")
        , ukpctask11 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "주문")
        , ukpctask12 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "회원가입")
        , ukpctask13 = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "로그인")
        , ukpctask14 = guide_data.filter((uk)=>uk.id === "PC" && uk.etc_cnt === "기존탬플릿 사용")
        , ukpctask1p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "GNB" && uk.progress === "100")
        , ukpctask2p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "검색" && uk.progress === "100")
        , ukpctask3p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "고객센터" && uk.progress === "100")
        , ukpctask4p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "기타" && uk.progress === "100")
        , ukpctask5p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "마이페이지" && uk.progress === "100")
        , ukpctask6p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "매장/전시" && uk.progress === "100")
        , ukpctask7p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "메인탬플릿" && uk.progress === "100")
        , ukpctask8p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "상품상세" && uk.progress === "100")
        , ukpctask9p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "이벤트/프로모션" && uk.progress === "100")
        , ukpctask10p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "장바구니" && uk.progress === "100")
        , ukpctask11p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "주문" && uk.progress === "100")
        , ukpctask12p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "회원가입" && uk.progress === "100")
        , ukpctask13p = guide_data.filter((uk)=>uk.id === "PC" && uk.depth1 === "로그인" && uk.progress === "100")
        , ukpctask14p = guide_data.filter((uk)=>uk.id === "PC" && uk.etc_cnt === "기존탬플릿 사용" && uk.progress === "100")


        , ukmoasis = guide_data.filter((uk)=>uk.id === "MO" && uk.state === "as-is기준 완료")
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
    $('.process .mo strong').text(ukMoStLen);
    $('.process .mo i').text(ukMoLen);
    $('.process .mo em').text(ukmoTotalPer);
    $('.process .pc strong').text(ukPcStLen);
    $('.process .pc i').text(ukPcLen);
    $('.process .pc em').text(ukpcTotalPer);
    $('.process .app strong').text(ukAppStLen);
    $('.process .app i').text(ukAppLen);
    $('.process .app em').text(ukappTotalPer);

    $('.process .mo .task1 strong').text(ukmotask1p.length);
    $('.process .mo .task1 i').text(ukmotask1.length);
    $('.process .mo .task2 strong').text(ukmotask2p.length);
    $('.process .mo .task2 i').text(ukmotask2.length);
    $('.process .mo .task3 strong').text(ukmotask3p.length);
    $('.process .mo .task3 i').text(ukmotask3.length);
    $('.process .mo .task4 strong').text(ukmotask4p.length);
    $('.process .mo .task4 i').text(ukmotask4.length);
    $('.process .mo .task5 strong').text(ukmotask5p.length);
    $('.process .mo .task5 i').text(ukmotask5.length);
    $('.process .mo .task6 strong').text(ukmotask6p.length);
    $('.process .mo .task6 i').text(ukmotask6.length);
    $('.process .mo .task7 strong').text(ukmotask7p.length);
    $('.process .mo .task7 i').text(ukmotask7.length);
    $('.process .mo .task8 strong').text(ukmotask8p.length);
    $('.process .mo .task8 i').text(ukmotask8.length);
    $('.process .mo .task9 strong').text(ukmotask9p.length);
    $('.process .mo .task9 i').text(ukmotask9.length);
    $('.process .mo .task10 strong').text(ukmotask10p.length);
    $('.process .mo .task10 i').text(ukmotask10.length);
    $('.process .mo .task11 strong').text(ukmotask11p.length);
    $('.process .mo .task11 i').text(ukmotask11.length);
    $('.process .mo .task12 strong').text(ukmotask12p.length);
    $('.process .mo .task12 i').text(ukmotask12.length);
    $('.process .mo .task13 strong').text(ukmotask13p.length);
    $('.process .mo .task13 i').text(ukmotask13.length);
    $('.process .mo .task14 strong').text(ukmotask14p.length);
    $('.process .mo .task14 i').text(ukmotask14.length);

    $('.process .pc .task1 strong').text(ukpctask1p.length);
    $('.process .pc .task1 i').text(ukpctask1.length);
    $('.process .pc .task2 strong').text(ukpctask2p.length);
    $('.process .pc .task2 i').text(ukpctask2.length);
    $('.process .pc .task3 strong').text(ukpctask3p.length);
    $('.process .pc .task3 i').text(ukpctask3.length);
    $('.process .pc .task4 strong').text(ukpctask4p.length);
    $('.process .pc .task4 i').text(ukpctask4.length);
    $('.process .pc .task5 strong').text(ukpctask5p.length);
    $('.process .pc .task5 i').text(ukpctask5.length);
    $('.process .pc .task6 strong').text(ukpctask6p.length);
    $('.process .pc .task6 i').text(ukpctask6.length);
    $('.process .pc .task7 strong').text(ukpctask7p.length);
    $('.process .pc .task7 i').text(ukpctask7.length);
    $('.process .pc .task8 strong').text(ukpctask8p.length);
    $('.process .pc .task8 i').text(ukpctask8.length);
    $('.process .pc .task9 strong').text(ukpctask9p.length);
    $('.process .pc .task9 i').text(ukpctask9.length);
    $('.process .pc .task10 strong').text(ukpctask10p.length);
    $('.process .pc .task10 i').text(ukpctask10.length);
    $('.process .pc .task11 strong').text(ukpctask11p.length);
    $('.process .pc .task11 i').text(ukpctask11.length);
    $('.process .pc .task12 strong').text(ukpctask12p.length);
    $('.process .pc .task12 i').text(ukpctask12.length);
    $('.process .pc .task13 strong').text(ukpctask13p.length);
    $('.process .pc .task13 i').text(ukpctask13.length);
    $('.process .pc .task14 strong').text(ukpctask14p.length);
    $('.process .pc .task14 i').text(ukpctask14.length);

    console.log(ukmoasis.length)
  }
}