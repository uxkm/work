var UK_GUIDE = UK_GUIDE||{};
var d = new Date()
var mm = "" + (d.getMonth()+1);
if(mm.length < 2) mm = "0" + mm;
var dd = "" + d.getDate();
if(dd.length < 2) dd = "0" + dd;
var dt = mm + "/" + dd;
var cntM = {
    "TOTAL": [0,0]
};
var cntP = {
    "TOTAL": [0,0]
};
var cntA = {
    "TOTAL": [0,0]
};
var cntE = {
    "TOTAL": [0,0]
};
UK_GUIDE.GNB = {
  init : function(){
    this.setButton();
    // guide_data.sort = function(a,b) {
    //   return a.progress - b.progress;
    // }
  },
  reset : function(){
    $(".uknav a").each(function(index, item){
      $(item).removeClass("on");
    });
  },
  setButton : function(){
    var _self = this;
    var id = window.location.hash.substr(1);
    UK_GUIDE.GNB.goUrl(id);
    $(".uknav a").click(function(e){
      _self.reset();
      id = $(this).attr("id");
      window.location.hash = id;
      UK_GUIDE.GNB.goUrl(id);
      $(this).addClass("on");
      return false;
    });

    $(".uklogo").click(function(e){
      _self.reset();
      UK_GUIDE.content.load("../guide/progress.html");
    });

    //$(".uklogo").trigger( "click" );
  },
  goUrl : function (id) {
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
      case "ukSchedule":
        UK_GUIDE.content.load("../guide/schedule.html");
        break;
      default:
        UK_GUIDE.content.load("../guide/progress.html");
        break;
      }
  }
};
UK_GUIDE.content = {
  load : function(url){
    $(".ukmain>iframe").attr("src",url)
  }
};
UK_GUIDE.page = {
  init : function(){
    //this.jsonMaker();
    for( var i=0;i<guide_data.length;i++){
      var arr = guide_data[i]["url"][0].split("/");
      guide_data[i]["ia"] = arr[arr.length-1].replace('.html','');
      if((i+1) >= guide_data.length) {
        this.setList();
      }
    }
  },
  child : function (n,depth) {
    ret = "";
    for(var c=0;c<guide_data[n][depth].length;c++) {
        if(c > 0) ret += ", "
        ret += "\"" + guide_data[n][depth][c] + "\"";
    }
    return ret
  },
  jsonMaker : function () {
    var txt = "var guide_data = [\n";
    for( var i=0;i<guide_data.length;i++){
        if(i>0)
        txt += ", ";

        txt += "{\n";
        txt += "\tid: \"" + guide_data[i]["id"] + "\",\n";
        txt += "\tdepth: [" + this.child(i,"depth") + "],\n";
        txt += "\tname: \"" + guide_data[i]["name"] + "\",\n";
        txt += "\tstart_date: [" + this.child(i,"start_date") + "],\n";
        txt += "\tend_date: [" + this.child(i,"end_date") + "],\n";
        txt += "\tfront_date: [" + this.child(i,"front_date") + "],\n";
        txt += "\tstate: \"" + guide_data[i]["state"] + "\",\n";
        txt += "\tprogress: \"" + guide_data[i]["progress"] + "\",\n";
        txt += "\tdebuging: \"\",\n";
        txt += "\tfixed: \"" + guide_data[i]["fixed"] + "\",\n";
        txt += "\tdeleted: \"" + "" + "\",\n";
        txt += "\turl: [\n";
        for (var j=0; j< guide_data[i]["url"].length;j++) {
            txt += (j > 0) ? "\n\t\t, " : "\t\t";
            txt += "\"" + guide_data[i]["url"][j] + "\"";
        }
        txt += "\n\t],\n";
        txt += "\tetc_cnt: [\n";
        for (var j=0; j< guide_data[i]["etc_cnt"].length;j++) {
            txt += (j > 0) ? "\n\t\t, " : "\t\t";
            txt += "\"" + guide_data[i]["etc_cnt"][j] + "\"";
        }
        txt += "\n\t]\n";
        txt += "}";
    }    
    txt += "]";
    $("body").append("<textarea style='width: 100%; height: 500px;'>" + txt + "</textarea>")    
  },
  openWin : function (t, url) {
      var host = location.origin;

      if(host.indexOf('//dev.') >= 0) {
        host = "//dev.hyundaihmall.com/html/hmall_publish";
      } else if(host.indexOf('file:') >= 0) {
        host = "http://localhost";
      } else if(checkIP(location.host)) {
        host = "http://"+location.host;
      } else if(host.indexOf('localhost') >= 0) {
        host = "//localhost/";
        
      } else {
        host = "//imagedev.hmall.com/";
      }
      url = host + '/' + url;
      window.open (url);
      // if(t === "PC") {
      // } else {
      //   $("#ifrm").prop("src","about:blank;");
      //   $("#ifrm").prop("src",url).prev().text(url);
      //   $(".iframe").css({
      //       top: ($("html,body").scrollTop()),
      //       left: ($(window).width()-450)/2
      //   }).show();
      // }
      function checkIP(strIP) {
        var expUrl = /^(1|2)?\d?\d([.](1|2)?\d?\d){3}$/;
        return expUrl.test(strIP);
      }
  },
  setList : function(){
    var tagTot = "";

    $(".close").on("click", function (argument) {
        $(".iframe").hide();
    });
    var cnt = {};
    var arrNum = 1;
    // guide_data.sort = function (a,b){
    //   return a.ia - b.ia;
    // }

    for( var i=0;i<guide_data.length;i++){
        var tag = "";
      try {
        tag += "<tr>";
        tag += "<td class='tcenter'>"+(arrNum)+"</td>";
        tag += "<td class='tcenter'>"+guide_data[i]["id"]+"</td>";
        for (var n=0;n<3;n++){
            tag += "<td>"+guide_data[i]["depth"][n]+"</td>";
        }
        tag += "<td class='tcenter'>"+guide_data[i]["name"]+"</td>";
        // tag += "<td class='tcenter'>"
        // if(guide_data[i]["fixed"] != "") tag += "<div class='front fixed'>" + guide_data[i]["fixed"] + "</div>";
        // tag += "</td>";
        tag += "<td class='tcenter'>";
        if(typeof(guide_data[i]["front_date"]) == "object") {
            for(var n = 0;n<guide_data[i]["front_date"].length;n++){
                var cls = "front";
                if(n>0) cls += " old";
                tag += "<div class='" + cls + "'>"+ guide_data[i]["front_date"][n] + "</div>";
            }
        }
        if(guide_data[i]["front_date"].length > 0 && guide_data[i]["front_date"].length == 1) {
            tag +="<div class='front' style='display: none;'>30/00</div>";
        }
        tag += "</td>";
        tag += "<td class='tcenter'>";
        var mod;
        var startLen = guide_data[i]["start_date"].length;
        var endLen = guide_data[i]["end_date"].length;
        for(var n = 0;n<startLen;n++){
            var cls = "pub-start";
            if(n>0) cls += " old";
            if(guide_data[i]["start_date"][0] == "?" && endLen < 1) guide_data[i]["start_date"][n] = "신규예정";
            if(guide_data[i]["start_date"][0] == "?" && endLen >= 1) guide_data[i]["start_date"][n] = "수정예정";
            tag +="<div class='" + cls + "' data-val='"+guide_data[i]["start_date"][n]+"'>" + guide_data[i]["start_date"][n] + "</div>";
        }
        if(startLen > 0 && startLen < 2) {
            tag +="<div class='start-end' style='display: none;'>30/00</div>";   
        }
        tag += "</td>";
        tag += "<td class='tcenter'>";
        if(endLen >= 1)
          tag +="<div class='pub-end' data-date='" + guide_data[i]["end_date"][endLen-1] + "'>" + guide_data[i]["end_date"][endLen-1] + "</div>";
        tag += "</td>";
        tag += "<td class='tcenter edit-count'>";
        for(var n = 0;n<endLen-1; n++){
            var cls = "pub-modify";
            if(n>0) cls += " old";
            mod = (endLen == 1) ? "N" : "E";
            tag +="<div class='" + cls + "' data-date='" + guide_data[i]["end_date"][n] + "'>" + guide_data[i]["end_date"][n] + "</div>";
        }
        if(endLen > 1 && endLen < 3) {
            tag +="<div class='start-end' style='display: none;'>30/00</div>";   
        }
        tag += "</td>";
        tag += "<td class='tcenter'>";
        if(endLen >= 0 && guide_data[i]["end_date"][0] < guide_data[i]["front_date"][0]) guide_data[i]["debuging"] = "디자인수정";
        if(endLen < 1 && guide_data[i]["front_date"].length > 0) guide_data[i]["debuging"] = "신규";
        if(guide_data[i]["debuging"] != "") tag += "<div class='debug'>" + guide_data[i]["debuging"] + "</div>";
        tag += (guide_data[i]["progress"] == 0) ? "-" : guide_data[i]["progress"]+"%"; 
        tag += "</td>";
//        var arr = guide_data[i]["url"][0].split("/");
        tag += "<td class='tcenter'>"+guide_data[i]["ia"]+"</td>";
        tag += "<td>";
        for(var n = 0;n<guide_data[i]["url"].length;n++){
          if (guide_data[i]["id"] == "Script1"){
            tag += "<p><a href='../"+guide_data[i]["url"][n]+"' target='_blank'>"+guide_data[i]["url"][n]+"</a></p>";
          }else{
            if(parseInt(guide_data[i]["progress"]) < 100) 
              tag += "<p style='color:#a1a1a1;'>"+guide_data[i]["url"][n]+"</p>";
            else
              tag += "<p><a href=\"javascript:;\" onclick=\"UK_GUIDE.page.openWin('" + guide_data[i]["id"] + "','" + guide_data[i]["url"][n] + "')\">"+guide_data[i]["url"][n]+"</a></p>";
          }
            
        }
        tag += "</td>";
        tag += "<td>";
        for(var n = 0;n<guide_data[i]["etc_cnt"].length;n++){
            var clor = "";
            if(guide_data[i]["etc_cnt"][n].substring(0,1) == "@") {
                clor = " style='color: red; font-weight: bold;'";
                //guide_data[i]["etc_cnt"][n] = guide_data[i]["etc_cnt"][n].substring(1)
            }
            tag += "<p" + clor + ">"+guide_data[i]["etc_cnt"][n]+"</p>";
        }
        tag += "</td>";
        tag += "</tr>";
        if(guide_data[i]["deleted"] != "") tag = "";
        if(tag != "") {
            arrNum++;
            if(guide_data[i]["id"] === "MO") {
                if(typeof (cntM[guide_data[i]["depth"][0]]) != "object")
                    cntM[guide_data[i]["depth"][0]] = [0,0];
                cntM[guide_data[i]["depth"][0]][1] = cntM[guide_data[i]["depth"][0]][1]+1;
                cntM["TOTAL"][1] = cntM["TOTAL"][1]+1;
                if(guide_data[i]["progress"] == "100") {
                    cntM[guide_data[i]["depth"][0]][0] = cntM[guide_data[i]["depth"][0]][0]+1;
                    cntM["TOTAL"][0] = cntM["TOTAL"][0] + 1;
                }
            } else if(guide_data[i]["id"] === "PC") {
                if(typeof (cntP[guide_data[i]["depth"][0]]) != "object")
                    cntP[guide_data[i]["depth"][0]] = [0,0];
                cntP[guide_data[i]["depth"][0]][1] = cntP[guide_data[i]["depth"][0]][1]+1;
                cntP["TOTAL"][1] = cntP["TOTAL"][1]+1;
                if(guide_data[i]["progress"] == "100") {
                    cntP[guide_data[i]["depth"][0]][0] = cntP[guide_data[i]["depth"][0]][0]+1;
                    cntP["TOTAL"][0] = cntP["TOTAL"][0]+1;
                }
            } else if(guide_data[i]["id"] === "APP") {
                if(typeof (cntA[guide_data[i]["depth"][0]]) != "object")
                    cntA[guide_data[i]["depth"][0]] = [0,0];
                cntA[guide_data[i]["depth"][0]][1] = cntA[guide_data[i]["depth"][0]][1]+1;
                cntA["TOTAL"][1] = cntA["TOTAL"][1]+1;
                if(guide_data[i]["progress"] == "100") {
                    cntA[guide_data[i]["depth"][0]][0] = cntA[guide_data[i]["depth"][0]][0]+1;
                    cntA["TOTAL"][0] = cntA["TOTAL"][0]+1;
                }
            } else {
                if(typeof (cntE[guide_data[i]["depth"][0]]) != "object")
                    cntE[guide_data[i]["depth"][0]] = [0,0];
                cntE[guide_data[i]["depth"][0]][1] = cntE[guide_data[i]["depth"][0]][1]+1;
                cntE["TOTAL"][1] = cntE["TOTAL"][1]+1;
                if(guide_data[i]["progress"] == "100") {
                    cntE[guide_data[i]["depth"][0]][0] = cntE[guide_data[i]["depth"][0]][0]+1;
                    cntE["TOTAL"][0] = cntE["TOTAL"][0]+1;
                }
            }
            // console.log(cnt[guide_data[i]["id"]]);
        }
        tagTot += tag;
      } catch(e) {
        console.log(e.message)
      }
    }

    $("#ukPageBody").append(tagTot);
    for (const [key, v] of Object.entries(cntM)) {
        $("tr.mo").append('<td><strong><a href="javascript:;" onclick="UK_GUIDE.page.sort(\'MO\',\'' + ((key == "TOTAL") ? "" : key) + '\');">' + key + '</strong><br/><strong style="color: red;">' + v[0] + '</strong>/<i>' + v[1] + '</i></a></td>');
    }
    for (const [key, v] of Object.entries(cntP)) {
        $("tr.pc").append('<td><strong><a href="javascript:;" onclick="UK_GUIDE.page.sort(\'PC\',\'' + ((key == "TOTAL") ? "" : key) + '\');">' + key + '</strong><br/><strong style="color: red;">' + v[0] + '</strong>/<i>' + v[1] + '</i></a></td>');
    }
    for (const [key, v] of Object.entries(cntA)) {
        $("tr.app").append('<td><strong><a href="javascript:;" onclick="UK_GUIDE.page.sort(\'APP\',\'' + ((key == "TOTAL") ? "" : key) + '\');">' + key + '</strong><br/><strong style="color: red;">' + v[0] + '</strong>/<i>' + v[1] + '</i></a></td>');
    }
    $(".tot").html('<td><strong style="color: red;">' + (cntM["TOTAL"][0]+cntP["TOTAL"][0]+cntA["TOTAL"][0]) + '</strong>/<i>' + (cntM["TOTAL"][1]+cntP["TOTAL"][1]+cntA["TOTAL"][1]) + '</i></a></td>')
    $("#today").text("오늘 (" + dt + ")");
    $("#todayCnt").html(
      "<strong class='red'>신규: " + $(".pub-end[data-date='" + dt + "']").length
      + "</strong>&nbsp;"
      + "<strong>[ <a href='javascript:;' onclick=\"UK_GUIDE.page.sort('today','new','!매장 and !메인');\">모듈</a>&nbsp;&nbsp;|&nbsp;&nbsp;"
      + "<strong><a href='javascript:;' onclick=\"UK_GUIDE.page.sort('today','new','매장/전시');\">매장/전시</a>&nbsp;&nbsp;|&nbsp;&nbsp;"
      + "<strong><a href='javascript:;' onclick=\"UK_GUIDE.page.sort('today','new','메인탬플릿');\">메인탬플릿</a>&nbsp;&nbsp;]"
      + "<a href='javascript:;' onclick=\"UK_GUIDE.page.sort('today','edit');\"><strong class='red' style='margin-left: 20px;'>수정: " + $(".pub-modify[data-date='" + dt + "']").length
      +"</strong></a>"
    );
    
    // $("#tommorow").text("예정");
    // $("#tommorowCnt").html(
    //   "<strong class='red'>신규: " + $(".pub-start[data-val='신규예정']").length
    //   + "</strong><strong class='red' style='margin-left: 20px;'>수정: " + $(".pub-start[data-val='수정예정']").length
    //   +"</strong>"
    // );
  },
  sort : function (a,b,c) {
    var sn = 8;
    if(a == "today") {
      if(b == 'edit') 
       $('.tablesorter').trigger('search', [ ['','','','','','','','','',dt] ]);
      else
        $('.tablesorter').trigger('search', [ ['','',c,'','','','','',dt] ]);
    } else {
      $('.tablesorter').trigger('search', [ ['',a,b] ]);
    }
    $('.tablesorter').find('th:eq(' + sn + ')').trigger('sort');
    $('html,body').scrollTop(0);
    this.orderNum();
  },
  orderNum : function () {
    setTimeout(function (argument) {
        var l = $("#table tbody tr:not(.filtered)").length;
        $("#table tbody tr:not(.filtered)").each(function(n){
          var $this = $(this);
          $this.find("td:first-child").text(l)
          l--;
        })
    },1000)

  }
}