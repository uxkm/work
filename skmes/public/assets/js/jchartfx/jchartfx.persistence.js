(function(){var g,c;"undefined"!==typeof window?(g=window.sfx,c=window.cfx):(g=require("./jchartfx.system.js"),c=g.cfx);"undefined"!=typeof c.VectorStepLine&&(c.VectorStepLine.prototype.k=function(h,a){c.VectorLine.prototype.k.call(this,h,a);this.aI=a.ie8("StepStyle",this.aI,0)});"undefined"!=typeof c.VectorPie&&(c.VectorPie.prototype.k=function(h,a){this.t=a.ie8("Flags",this.t,13);var b=new g._p1(this.B);a.ie4(b,"MaximumLabelMargin",70);this.B=b.a;b.a=this.y;a.ie4(b,"SliceSeparation",20);this.y=
b.a;this.u=a.ie8("ExplodingMode",this.u,0);b.a=this.D;a.ie4(b,"DoughnutThickness",50);this.D=b.a;b.a=this.z;a.ie4(b,"LabelLineBreak",10);this.z=b.a;b.a=this.A;a.ie4(b,"StartAngle",90);this.A=b.a;this.w=a.ie8("AnimationStyle",this.w,1)});"undefined"!=typeof c.eU&&(c.eU.prototype.k=function(h,a){});"undefined"!=typeof c.eU&&(c.eU.prototype.ieP=function(h,a){if(100<=a.ieT()){var b=new g._p1(this.f);a.ieY(b,"Template");this.f=b.a;h||null==this.f||this.a.sw(this.f)}this.k(h,a)});"undefined"!=typeof c.VectorBubble&&
(c.VectorBubble.prototype.k=function(h,a){var b=new g._p1(this.u);a.ie4(b,"MaximumBubbleSize",20);this.u=b.a;this.t=a.ie8("AnimationStyle",this.t,0)});"undefined"!=typeof c.VectorBorder&&(c.VectorBorder.prototype.ieP=function(h,a){if(100>a.ieT()){a.ie8("Enum",1,1);var b=new g._p1(g.m.b);a.ieZ(b,"Color")}});"undefined"!=typeof c.VectorBar&&(c.VectorBar.prototype.k=function(h,a){var b=new g._p1(this.w);a.ie7(b,"Overlap",!1);this.w=b.a;100<=a.ieT()&&(b.a=this.t,a.ie5(b,"IntraSeriesGap",8),this.t=b.a,
this.r=a.ie8("AnimationStyle",this.r,0))});c.c6.prototype.ieP=function(h,a){this.c=a.ie8("Format",this.c,0);var b=new g._p1(this.e);a.ie4(b,"Decimals",0);this.e=b.a;h&&0==(this.b&1)?(b.a=null,a.ieY(b,"CustomFormat")):(h||(this.f=null,this.g=-1),b.a=this.f,a.ieY(b,"CustomFormat"),this.f=b.a,h||g.b.p(this.f)||(this.b|=1,this.g=this.f.indexOf(";")));100>a.ieT()&&(b.a=null,a.ieY(b,"Culture"));h||this.h(!1)};c.bQ.c=function(h,a,b,e,d,f){var c=0!=(b&e);f||(c=!c);c=new g._p1(c);h.ie7(c,a,d);(c=c.a)||(f=
!f);return f?b|e:b&~e};c.Title.prototype.ieP=function(h,a){var b=a.ieS();if(0!=(b&1)){this.b=a.ie8("Dock",this.b,this.N());this.d=a.ie8("Alignment",this.d,this.o);this.h=a.ie8("LineAlignment",this.h,this.I);100>a.ieT()&&a.ie9("Link",null,"Link",0);0!=(a.ieU()&2)?(this.a=c.bQ.c(a,"PlotAreaOnly",this.a,1,!0,!0),this.a=c.bQ.c(a,"RichText",this.a,16,!1,!0)):this.a=a.ie8("Flags",this.a,1);var e=new g._p1(this.l);a.ie4(e,"Indentation",0);this.l=e.a;e.a=this.m;a.ie4(e,"Separation",2);this.m=e.a}0!=(b&2097280)&&
(e=new g._p1(this.c),a.ieY(e,"Text"),this.c=e.a);0!=(b&16)&&(this.u.c("TextColor",a),this.v.c("BackColor",a));0!=(b&2)&&this.t.c("Font",a)};c.SeriesAttributes.prototype.ieP=function(h,a){var b=new g._p1(this.aa);a.ie4(b,"OriginalPosition",this.h);this.aa=b.a;if(100<=a.ieT()&&(!h||this.ab!=this.g().j)){var e=64;h&&(20>=this.ag&&1<=this.ag||0>this.ag)&&(e=4096);b.a=this.ag;a.ie4(b,"Gallery",-1);this.ag=b.a;this.ab=a.ie9("GalleryAttributes",this.ab,null,e);h||null==this.ab||this.aj(this.ag,this.ag,this.ab,
g.TC(this.ab,c.ic6))}this.x(h,a)};c.PointAttributes.F=function(h,a,b,e,d){var f=!1;if(0==d){d=0;d=a?h.a:0;var k=new g._p1(d),f=b.ie3(k,e,d+1);d=k.a;f&&!a&&(h.a=d)}else if(1==d)d=a?h.a:!1,k=new g._p1(d),f=b.ie7(k,e,!d),d=k.a,f&&!a&&(h.a=d);else if(4==d)d=a?h.a:g.m.c(),d=new g._p1(d),f=b.ieZ(d,e),d=d.a,f&&!a&&(h.a=d);else if(3==d)d=a?h.a:null,d=new g._p1(d),f=b.ieY(d,e),d=d.a,f&&!a&&(h.a=d);else if(8!=d)if(5==d)d=a?h.a:null,d=new g._p1(d),f=b.ie0(d,e),d=d.a,f&&!a&&(h.a=d);else if(6==d)d=new g.e(0,0),
a?d._cf(h.a):d._cf(g.e.b),(f=b.ie2(e,d))&&!a&&(h.a=d);else if(2==d)d=a?h.a:-1,h.a=b.ie8(e,d,-1),f=null!=h.a&&d!=h.a;else if(7==d){k=d=0;if(a){var l=h.a;d=l.K;l=g.TD(l,c.AxisY);null!=l&&(k=l.cC.e)}l=new g._p1(d);b.ie4(l,e,0);d=l.a;l.a=k;b.ie4(l,"Pane",0);k=l.a;a||(h.a=new c.ca(k,d))}else 9==d&&(h.a=b.ie9(e,h.a,null,0),f=!0);return f};c.PointAttributes.prototype.x=function(h,a){null==c.PointAttributes.p&&(c.PointAttributes.p="BarShape MarkerShape MarkerSize Picture Volume Line.Width Line.Style Border.Width Border.Style Border.Color PointLabels.Alignment PointLabels.Angle FillMode Border.Effect Color AlternateColor Link MarkerStep Stacked AxisY AxisX Gallery Pattern Visible Border.Visible PointLabels.Visible SeparateSlice PointLabels.TextColor PointLabels.BackColor PointLabels.BorderColor PointLabels.BorderWidth PointLabels.Font Tag Text Line.StartCap Line.EndCap Border.BetweenSegments MarkerFont PointLabels.LineAlignment PointLabels.Offset PointLabels.Format PointLabels.RichText Border.UseForLines DelayedMultiMask MarkerStyle MarkerTemplate MarkerWidth".split(" "),
c.PointAttributes.r=[2,2,0,8,0,0,2,0,2,4,2,0,2,2,4,4,9,0,2,7,7,2,0,1,1,1,0,4,4,4,0,5,3,3,2,2,1,5,2,6,3,1,1,10,2,3,0]);var b=c.PointAttributes.p.length,e=0,d=0,f=null,k=null,l=a.ieT();if(h)for(e=d=0;d<b;d++,e++)10!=c.PointAttributes.r[d]&&(f=this.d(e,!1),k=c.PointAttributes.p[d],null!=f&&(l=new g._p1(f),c.PointAttributes.F(l,h,a,k,c.PointAttributes.r[d])));else{null==this.f?this.f=new g.Z:this.f.clear();100>l&&(b=new g._p1(b),a.ie4(b,null,0),b=b.a);for(var m=0,e=d=0;d<b;d++,e++)f=null,100>l?(e=new g._p1(m),
a.ie4(e,null,0),e=m=e.a):m=d,k=c.PointAttributes.p[m],f=new g._p1(f),k=c.PointAttributes.F(f,h,a,k,c.PointAttributes.r[m]),f=f.a,k&&(null!=f?this.b(e,f):this.m(e,null))}};c.PointAttributes.prototype.ieP=function(c,a){this.x(c,a)};c.Pane.prototype.ieP=function(c,a){var b=a.ieS(),e=new g._p1(this.e);a.ie4(e,"Index",0);this.e=e.a;e.a=this.h;a.ie6(e,"Proportion",1);this.h=e.a;e.a=this.g;a.ie4(e,"Separation",-1);this.g=e.a;0!=(b&16)&&(this.n.c("BackColor",a),this.i=a.ie9("InsideBackground",this.i,null,
64));this.b=a.ie9("Axes",this.b,"AxisYCollection",260);0!=(b&8)&&(this.a=a.ie9("Title",this.a,"Title",0));e.a=this.d;a.ie7(e,"Visible",!0);this.d=e.a};c.cH.prototype.ieP=function(c,a){var b=new g._p1(this.d);a.ie4(b,"Left",0);this.d=b.a;b.a=this.b;a.ie4(b,"Top",0);this.b=b.a;b.a=this.c;a.ie4(b,"Right",0);this.c=b.a;b.a=this.e;a.ie4(b,"Bottom",0);this.e=b.a};c.Line.prototype.k=function(c){var a=new g._p1(this.d);c.ie4(a,"Width",this.i);this.d=a.a;this.h.c("Color",c);this.e=c.ie8("Style",this.e,this.r());
this.f=c.ie8("StartCap",this.f,0);this.g=c.ie8("EndCap",this.g,0)};c.Line.prototype.ieP=function(c,a){this.k(a)};c.LegendItemAttributes.prototype.ieP=function(c,a){var b=new g._p1(this.b);a.ie7(b,"Visible",!0);this.b=b.a;b.a=this.h;a.ie7(b,"Inverted",!1);this.h=b.a;b.a=this.d;a.ie4(b,"OrderIndex",-1);this.d=b.a;b.a=this.f;a.ieZ(b,"TextColor");this.f=b.a;this.c=a.ie8("FontStyle",this.c,-1)};c.LegendBox.prototype.ieP=function(h,a){var b=a.ieT();c.ce.prototype.P.call(this,h,a);this.aU.c("Font",a);this.aI=
a.ie8("ContentLayout",this.aI,1);this.aE=a.ie8("Flags",this.aE,4);this.aT.c("TextColor",a);100>b&&a.ie9("Highlight",null,"HighlightLegendAttributes",0);var e=new g._p1(this.aL);a.ie4(e,"MarginX",5);this.aL=e.a;e.a=this.aJ;a.ie4(e,"MarginY",7);this.aJ=e.a;this.aC=a.ie9("ItemAttributes",this.aC,"LegendItemAttributesCollection",16388);3<=b&&(this.aP=a.ie9("CustomItems",this.aP,"CustomLegendItemCollection",4));if(4<=b){var d=this.getPlotAreaOnly();e.a=d;a.ie7(e,"PlotAreaOnly",!0);d=e.a;h||this.setPlotAreaOnly(d)}10<=
b&&(e.a=this.aS,a.ie6(e,"LineSpacing",2),this.aS=e.a);h||this.sG(0!=this.aI)};c.cX.prototype.I=function(c){c||this.J()};c.cX.prototype.ieP=function(c,a){this.I(c)};c.cw.prototype.ieP=function(c,a){var b=a.ieS(),e=a.ieT();if(0!=(b&1)){var d=new g._p1(this.a);a.ie7(d,"Visible",!1);this.a=d.a;if(100<=e)d.a=this.l,a.ie4(d,"Angle",0),this.l=d.a;else{var f=this.l;d.a=f;a.ie3(d,"Angle",0);this.l=f=d.a}d.a=this.e;a.ieY(d,"Format");this.e=d.a;this.f=a.ie8("Alignment",this.f,1);this.d=a.ie8("LineAlignment",
this.d,2);a.ie2("Offset",this.h);d.a=this.k;a.ie7(d,"RichText",!1);this.k=d.a}0!=(b&16)&&(d=new g._p1(this.b),a.ieZ(d,"TextColor"),this.b=d.a,d.a=this.j,a.ieZ(d,"BackColor"),this.j=d.a,d.a=this.m,a.ieZ(d,"BorderColor"),this.m=d.a,100<=e?(d.a=this.i,a.ie4(d,"BorderWidth",1),this.i=d.a,d.a=this.c,a.ieZ(d,"TextInsideColor"),this.c=d.a):(e=this.i,d.a=e,a.ie3(d,"BorderWidth",0),this.i=e=d.a));0!=(b&2)&&(b=new g._p1(this.g),a.ie0(b,"Font"),this.g=b.a)};c.Palette.prototype.ieP=function(c,a){var b=new g._p1(this.j);
a.ie7(b,"User",!1);(this.j=b.a)?(this.a=a.ie9("Colors",this.a,null,32),this.d=a.ie9("Series",this.d,null,32),this.b=a.ie9("Elem",this.b,null,32)):(b.a=this.e,a.ieY(b,"Name"),this.e=b.a,c||this.m(this.e))};c.cx.prototype.ieP=function(c,a){if(100<=a.ieT()){var b=new g._p1(this.a);a.ie4(b,"Width",1);this.a=b.a}else b=this.a,b=new g._p1(b),a.ie3(b,"Width",1),this.a=b=b.a;b=new g._p1(this.c);a.ieZ(b,"Color");this.c=b.a;this.b=a.ie8("Style",this.b,0);this.d=a.ie8("StartCap",this.d,0);this.e=a.ie8("EndCap",
this.e,0)};c.c9.prototype.ieP=function(c,a){var b=0,b=1;if(c){for(var e=this.l.A,d=e.length,f=0;f<d;f++){var k=e[f];null!=k&&(b=new g._p1(b),a.ie3(b,"_Pos",0),b=b.a,a.ie9("_Contents",k,null,72))}e=new g._p1(0);a.ie3(e,"_Pos",0)}else for(this.l.clear();;){e=new g._p1(b);a.ie3(e,"_Pos",0);b=e.a;if(0==b)break;k=a.ie9("_DockableBar",null,null,72);this.icJ(k,!1)}this.k=a.ie9("_Adornment",this.k,null,72);this.n=a.ie9("_AdornmentBack",this.n,null,72);c||(null!=this.k&&this.k.siu(this.t),this.w(this.k))};
c.a9.prototype.c=function(c,a){var b=new g._p1(this.d);a.ie0(b,c);this.d=b.a};c.a8.prototype.c=function(c,a){var b=new g._p1(this.e);a.ieZ(b,c);this.e=b.a};c.Grids.prototype.ieP=function(c,a){var b=a.ieS();this.a=a.ie9("Major",this.a,"GridLine",0);this.b=a.ie9("Minor",this.b,"GridLine",0);c||(this.a.y=!0);if(0!=(b&1)){var e=new g._p1(this.d);a.ie7(e,"Interlaced",!1);this.d=e.a}0!=(b&16)&&this.e.c("InterlacedColor",a)};c.GridLine.prototype.ieP=function(h,a){var b=a.ieS();0!=(b&16)&&c.Line.prototype.k.call(this,
a);0!=(b&1)&&(b=new g._p1(this.w),a.ie7(b,"Visible",this.D()),this.w=b.a,this.v=a.ie8("TickMark",this.v,0))};c.cv.prototype.ieP=function(h,a){var b=a.ieS(),e=a.ieT();if(0!=(b&16)){if(0!=(a.ieU()&2)){var d=this.aD.b,d=c.bQ.c(a,"Horizontal",d,512,!1,!0),d=c.bQ.c(a,"MultipleColors",d,65536,!1,!0);if(a.ieX("Border")){var f=new g._p1(this.aD.n.a);a.ie4(f,"Width",1);this.aD.n.a=f.a;f.a=this.aD.n.c;a.ieZ(f,"Color");this.aD.n.c=f.a;this.aD.n.b=a.ie8("Style",this.aD.n.b,0);this.aD.m=a.ie8("Effect",this.aD.m,
3);d=c.bQ.c(a,"Visible",d,67108864,!0,!1);d=c.bQ.c(a,"UseForLines",d,1,!0,!0);d=c.bQ.c(a,"BetweenSegments",d,33554432,!1,!0);a.ieW()}a.ieX("Line")&&(f=new g._p1(this.aD.i.a),a.ie4(f,"Width",3),this.aD.i.a=f.a,this.aD.i.b=a.ie8("Style",this.aD.i.b,0),this.aD.i.d=a.ie8("StartCap",this.aD.i.d,0),this.aD.i.e=a.ie8("EndCap",this.aD.i.e,0),a.ieW());this.aD.b=d}else this.aD.b=a.ie8(null,this.aD.b,0),0!=(b&96)&&(this.aD.f=a.ie8(null,this.aD.f,0),100>e&&a.ie8(null,this.aD.f,0)),this.aD.n.ieP(h,a),this.aD.m=
a.ie8(null,this.aD.m,3),this.aD.i.ieP(h,a);d=new g._p1(this.aD.g);a.ieZ(d,"Color");this.aD.g=d.a;this.aD.o=a.ie8("FillMode",this.aD.o,0)}a.ieX("PointLabels")&&(this.aD.a.ieP(h,a),a.ieW());0!=(b&1)&&(100>e?(this.aH=a.ie9("GalleryArray",this.aH,null,544),b=this.aD.r,d=new g._p1(b),a.ie3(d,"Volume",75),b=d.a,this.aD.r=b,b=this.aD.h,d.a=b,a.ie3(d,"MarkerSize",-1),b=d.a,this.aD.h=b):(b=new g._p1(this.aD.r),a.ie4(b,"Volume",75),this.aD.r=b.a,b.a=this.aD.h,a.ie4(b,"MarkerSize",-1),this.aD.h=b.a),this.aD.d=
a.ie8("MarkerShape",this.aD.d,2),this.aD.z=a.ie8("BarShape",this.aD.z,0),d=new g._p1(this.aD.I),a.ie1(d,"Picture"),this.aD.I=d.a,100>e&&a.ie9("Link",null,"Link",0),this.aD.c=a.ie8("Stacked",this.aD.c,0),100<=e?(d.a=this.aD.q,a.ie4(d,"MarkerStep",1),this.aD.q=d.a):(b=this.aD.q,d.a=b,a.ie3(d,"MarkerStep",1),b=d.a,this.aD.q=b),b=a.ie8("Gallery",this.aD.e,1),100>e?a.ie9("PointLabelOrganizer",null,"PointLabelOrganizer",0):(e=64,20>=b&&(h?e=4096:this.aG(b,b,null,null,!0)),this.aD.j=a.ie9("GalleryAttributes",
this.aD.j,null,e)),h||(this.aN++,this.aG(b,b,this.aD.j,g.TC(this.aD.j,c.ic6),!0),c.bu.a(this.aD.j,this.e),this.aN--))};c.cv.prototype.aW=function(h){null!=this.Y()&&this.Y().ic7(this.ah(),h,-1,g.TC(this.aE,c.ib0))};c.FieldMap.prototype.ieP=function(c,a){var b=new g._p1(this.b);a.ieY(b,"Name");this.b=b.a;b.a=this.c;a.ieY(b,"DisplayName");this.c=b.a;this.a=a.ie8("Usage",this.a,0)};c.cj.prototype.ieP=function(c,a){var b=0,e=0,d=g.aI.e();if(c){e=this.c().Se();b=new g._p1(e);a.ie4(b,"Count",0);for(var b=
0,e=this.c().A,f=e.length,k=0;k<f;k++){var l=e[k];a.ie9("Item"+g.u._f(b,d),l,null,64);b++}}else for(b=new g._p1(e),a.ie4(b,"Count",0),e=b.a,b=0;b<e;b++)l=a.ie9("Item"+g.u._f(b,d),null,null,64),this.o(l)};c.cj.prototype.o=function(h){for(var a=!1,b=0,e=c.cj.d.length,d=0;d<e;d++){if(c.cj.d[d].h(h)){var f=this.a[b];if(null!=f)for(var g=0;g<f.Se();g++)null!=f.A[g]&&f.A[g].SD().h(h)&&(f.A[g]=h,a=!0)}b++}a||this.h(null,h)};c.ce.prototype.aa=function(h,a){this.b&=-513;var b=new g._p1(this.w);a.ie7(b,"Visible",
this.am());this.w=b.a;b.a=this.D;a.ie4(b,"ZOrder",this.D);this.D=b.a;this.E.c("BackColor",a);this.e=a.ie8("Dock",this.e,this.ao());this.g=a.ie8("DockBorder",this.g,this.an());0!=(this.b&4)&&(this.k=a.ie9("Titles",this.k,"TitleCollection",4));b.a=this.j;a.ie7(b,"AutoSize",!0);this.j=b.a;var e=0!=(a.ieU()&2);e&&!h&&this.j&&(this.p=this.o=-1);e&&h&&this.j||(b.a=this.p,a.ie4(b,"Width",-1),this.p=b.a,b.a=this.o,a.ie4(b,"Height",-1),this.o=b.a);h||(!e||-1==this.p&&-1==this.o||(this.j=!1),this.j||(this.a&=
-33),this.B(),c.bu.b(this.k,this))};c.ce.prototype.P=function(c,a){this.aa(c,a);c||(this.n++,0!=(a.ieU()&2)&&(0<=this.p&&this.C(this.p,!0),0<=this.o&&this.C(this.o,!1)),this.n--)};c.df.prototype.ieP=function(c,a){var b=a.ieT();100>b&&(this.a=a.ie8("Flags",this.a,12288));var e=new g._p1(this.e);a.ie4(e,"Points",0);this.e=e.a;e.a=this.c;a.ie4(e,"Series",0);this.c=e.a;100>b&&(e.a=this.j,a.ie4(e,"PointAllocated",this.e),this.j=e.a,e.a=this.n,a.ie4(e,"SeriesAllocated",this.c),this.n=e.a);c||(this.j=this.e,
this.n=this.c);this.f=a.ie9("Y",this.f,"DataArray",0);this.g=a.ie9("X",this.g,"DataArray",0);this.h=a.ie9("YFrom",this.h,"DataArray",0);this.f.getHasData()&&!c&&(this.a|=3);100>b&&a.ie9("RealTime",null,"RealTimeSettings",0);e.a=this.l;a.ie6(e,"CompactedBy",0);this.l=e.a;c||(this.f.setData(this),null!=this.g&&this.g.setData(this),null!=this.h&&this.h.setData(this),0!=this.l&&(this.o=!0));c||(this.a&=-65)};c.DataSourceSettings.prototype.u=function(c){this.c=c};c.DataSourceSettings.prototype.ieP=function(c,
a){var b=new g._p1(this.j);a.ieY(b,"LabelSeparator");this.j=b.a;this.d=a.ie8("Flags",this.d,4096);this.g=a.ie9("Fields",this.g,"FieldMapCollection",4)};c.bY.prototype.ieP=function(c,a){c&&a.ie$(0,this.e.e);this.a=a.ie9("Data",this.a,null,2080);if(100>a.ieT()){var b=new g._p1(this.f);a.ie7(b,"IsXValue",!1);this.f=b.a;b.a=this.d;a.ie7(b,"Shared",!1);this.d=b.a}c&&a.ie$(0,-1);c||(null!=this.a&&0<this.a.length?(this.b=this.a.length,this.c=this.a[0].length):this.b=this.c=0)};c.CustomGridLine.prototype.ieP=
function(h,a){var b=a.ieS(),e=a.ieT();if(0!=(b&4)){var d=new g._p1(this.A);a.ie6(d,"Value",0);this.A=d.a}0!=(b&4194432)&&(d=new g._p1(this.y),a.ieY(d,"Text"),this.y=d.a);0!=(b&1)&&(this.v=a.ie8("Flags",this.v,0),0!=(a.ieU()&2)&&(d=this.v,d=c.bQ.c(a,"ShowText",d,1,!0,!1),d=c.bQ.c(a,"ShowLine",d,32,!0,!1),this.v=d=c.bQ.c(a,"OutsideText",d,64,!1,!0)),this.w=a.ie8("Alignment",this.w,0),this.C=a.ie8("LineAlignment",this.C,0),100>e&&a.ie9("Link",null,"Link",0),100>e&&a.ie9("ConditionalHighlightAttributes",
null,"ConditionalHighlightAttributes",0));0!=(b&2)&&this.I.c("Font",a);0!=(b&16)&&(this.F.c("TextColor",a),c.Line.prototype.k.call(this,a))};c.Chart.prototype.a5=function(c,a){var b=null!=this.D,e=null,d=new g._p1(b);a.ie7(d,"StringTable",!1);if(b=d.a)if(c){for(b=this.D.w().Sb();1==b.SK();){var f=b.SM(),e=f;d.a=e;a.ieY(d,"Key");e=this.D.A(f);d.a=e;a.ieY(d,"Value")}e=g.b.b;d.a=e;a.ieY(d,"Key")}else for(f=e=g.b.b;;){d.a=f;a.ieY(d,"Key");f=d.a;if(null==f||0==f.length)break;d.a=e;a.ieY(d,"Value");e=d.a;
this.setMessageText(f,e)}};c.Chart.prototype.a6=function(h,a,b){b?(b=this.x.e,h&&b==c.Palette.g||(b=new g._p1(b),a.ieY(b,"Palette"),b=b.a,h||(null==b&&(b=c.Palette.g),this.x=(new c.Palette)._01_1(b)))):(h||(this.x=new c.Palette),this.x=a.ie9("Palette",this.x,null,0))};c.Chart.prototype.a7=function(c,a,b){this.k=a.ie9("Extensions",this.k,"ExtensionCollection",0)};c.Chart.prototype.a8=function(c,a,b){b=a.ieT();100>b&&(a.ie9("CommandCollection",null,"CommandCollection",0),a.ie9("ToolBar",null,"ToolBar",
0),a.ie9("MenuBar",null,"ToolBar",0));this.p=a.ie9("LegendBox",this.p,"LegendBox",0);0==(a.ieS()&8388608)&&(this.A=a.ie9("DataGrid",this.A,"DataGrid",0));100>b?this.d=a.ie9(null,this.d,null,0):(b=null,b=a.ie9("Border",this.d.icC(),null,64),c||this.d.sicC(b),b=a.ie9("Background",this.d.icA(),null,64),c||this.d.sicA(b))};c.Chart.prototype.a9=function(h,a){var b=100,e=0!=(a.ieU()&2);if(!a.ie_(this.a,"CFX7",0))throw(new g.P)._0P(this.aj("InvalidFileFormat"));this.d.sicF(this.d.icF()+1);h&&0!=(a.ieU()&
2)&&null!=this.i&&0==this.i.Se()&&(this.i=null,this.iag());this.bs();var d=a.ieS();if(!e){var f=new g._p1(b);a.ie4(f,"_Build",b);b=f.a;f.a=0;a.ie4(f,"CodePage",0);d=a.ie8(null,d,d);a.ie8("InternalFlags",this.e,this.e);0!=(d&65536)&&(f.a=null,a.ieY(f,"License"),a.ie8("LicFlags",this.e,this.e))}a.sieT(b);if(0!=(d&1)&&(this.Y=a.ie8("Antialiasing",this.Y,11),100>b&&a.ie8("TemplateMask",this.Y,11),this.E=a.ie9("Margins",this.E,"Margins",128),this.w=a.ie9("View3D",this.w,"Attributes3D",0),h||(f=!1,c.coreBasic&&
(f=!0),this.a.x=null!=this.w&&this.w.a||f?new c.bW(this.w):new c.dj(this,null)),this.T=a.ie8("AxesStyle",this.T,4),100>b&&(a.ie8("AllowChanges",4,4),a.ie8("ExtraStyle",4,4)),100>b)){var k=new g._p1(null);a.ieY(k,"ToolTipFormat");f=k.a;a.ie9("Personalize",null,"PersonalizeAttributes",0);this.a5(h,a);k.a=f;a.ieY(k,"Culture");a.ie9("Highlight",null,"HighlightAttributes",256)}0!=(d&16)&&(this.H.c("BackColor",a),this.Q.c("PlotAreaColor",a),this.P.c("ForeColor",a),100>b&&(f=new g._p1(g.m.b),a.ieZ(f,"PageColor")),
this.L=a.ie9("InsideBackObject",this.L,null,64));0!=(d&2)&&(f=new g._p1(this.R),a.ie0(f,"Font"),this.R=f.a,h||null==this.R||this.sSV(this.R));0!=(d&512)&&(this.l=a.ie9("Data",this.l,"DataValues",0),100>b&&a.ie9("RandomData",null,"RandomData",0));this.h=a.ie9("Panes",this.h,"PaneCollection",260);this.v=a.ie9("AxesX",this.v,"AxisXCollection",260);0!=(d&262144)&&2<=b&&(f=new g._p1(this.bf),a.ie7(f,"Zoom",!1),this.bf=f.a);this.i=a.ie9("ConditionalAttributes",this.i,"ConditionalAttributesCollection",4);
h||0!=(a.ieU()&1)||this.b.aU(this);this.b=a.ie9("AllSeries",this.b,"GlobalAttributes",0);h||(this.b.aQ(),this.m=this.b.aD);0!=(d&32)&&(!h&&null==this.j&&a.ieV("series")&&(this.j=(new c.cY)._01cY(this),this.j.W(this.n)),this.j=a.ie9("Series",this.j,"SeriesAttributesCollection",4));0!=(d&64)&&(null==this.i||0==this.i.Se()?(!h&&null==this.o&&a.ieV("Points")&&(this.o=(new c.cQ)._01cQ(this)),this.o=a.ie9("Points",this.o,"PointAttributesCollection",4)):h||(this.o=null));0!=(d&8)&&(this.B=a.ie9("Titles",
this.B,"TitleCollection",4));0!=(d&16)&&this.a6(h,a,e);100>b&&a.ie9("Printer",null,"PrinterSettings",0);0!=(d&2048)&&this.a7(h,a,0!=(d&1048576));0!=(d&1024)&&this.a8(h,a,e);0!=(d&524288)&&(this.y=a.ie9("DataSourceSettings",this.y,"DataSourceSettings",0));this.d.sicF(this.d.icF()-1);a._d();h?this.aL():(this.bd(),(e||0==(d&4))&&this.f(2097152))};c.Chart.prototype.aL=function(){this.e&=-8388609;null!=this.k&&this.k.g(this);this.b.aW(!0)};c.Chart.prototype.bd=function(){this.b.aS(this);null==this.b.Z()&&
this.b.aG(1,1,null,null,!0);this.a.c=this.b.aJ();this.iag();c.bu.a(this.B,this);c.bu.a(this.l,this);c.bu.a(this.j,this);c.bu.a(this.o,this);c.bu.a(null,this);c.bu.a(this.i,this);c.bu.a(this.h,this);c.bu.a(this.v,this);c.bu.a(this.A,this);c.bu.a(this.p,this);c.bu.a(null,this);c.bu.a(null,this);c.bu.a(this.E,this);null!=this.w&&c.bu.a(this.w,this);this.ag(this.L);this.ag(this.d.icC());this.ag(this.d.icA());null!=this.y&&this.y.u(this);this.aL();var h=!0;void 0===c.advancedVersion&&(h=!1);h&&0!=this.l.l&&
this.l.compact(this.l.l);null!=this.i&&this.i.recalculate();this.f(6230271)};c.Chart.prototype.bs=function(){this.e|=8388608;this.b.aW(!1);null!=this.k&&this.k.g(null)};c.Chart.prototype.ieP=function(c,a){this.a9(c,a)};c.dc.prototype.j=function(c){var a=c.ieS();this.c=c.ie9("Grids",this.c,"Grids",0);100>c.ieT()&&c.ie9("Link",null,"Link",0);0!=(a&16)&&this.h.c("TextColor",c)};c.dd.prototype.ieP=function(h,a){var b=a.ieS(),e=this.o,d=a.ieT(),f=new g._p1(this.K);a.ie4(f,"Index",this.K);this.K=f.a;if(0!=
(b&1)){this.o=a.ie8("Style",this.o,1323874344);if(0!=(a.ieU()&2)){var k=this.o,k=c.bQ.c(a,"AutoScale",k,4096,!0,!0),k=c.bQ.c(a,"Notify",k,2,!1,!0),k=c.bQ.c(a,"Visible",k,64,!0,!1),k=c.bQ.c(a,"ForceZero",k,8192,!0,!0),k=c.bQ.c(a,"Staggered",k,4,!1,!0);this.o=k=c.bQ.c(a,"Inverted",k,262144,!1,!0)}this.r=a.ie9("LabelsFormat",this.r,"ValueFormat",0);this.R=a.ie9("DataFormat",this.R,"ValueFormat",0);f.a=this.O;a.ie6(f,"LogBase",0);this.O=f.a;100<=d?(f.a=this.A,a.ie4(f,"LabelAngle",0),this.A=f.a):(k=this.A,
f.a=k,a.ie3(f,"LabelAngle",0),this.A=k=f.a);this.j(a);f.a=this.aG;a.ie4(f,"FirstLabel",0);this.aG=f.a;this.V=a.ie9("Line",this.V,"Line",256);this.U=a.ie8("Position",this.U,0==this.K?0:2);f.a=this.av;a.ie4(f,"Separation",4);this.av=f.a;f.a=this.aw;a.ie6(f,"LineSpacing",1.5);this.aw=f.a;5<=d&&(f.a=this.aq,a.ie4(f,"MaxSizePercentage",100),this.aq=f.a,100>d&&a.ie8("LabelTrimming",0,0))}0!=(b&128)&&0!=(b&512)&&(this.I=a.ie9("Labels",this.I,"LabelCollection",8196),this.M=a.ie9("KeyLabels",this.M,"LabelCollection",
8196),h||(null!=this.I&&(this.I.V=this.ar()),null!=this.M&&(this.M.V=this.ar())));0!=(b&2)&&this.ax.c("Font",a);0!=(b&4)?(0!=(this.o&4096)?(f.a=this.u,a.ie6(f,"Min",this.u),this.u=f.a,f.a=this.x,a.ie6(f,"Max",this.x)):(f.a=this.u,a.ie6(f,"Min",1.79769E308),this.u=f.a,f.a=this.x,a.ie6(f,"Max",-1.79769E308)),this.x=f.a,f.a=this.C,a.ie6(f,"Step",0<=this.C?0:this.C),this.C=f.a,f.a=this.L,a.ie6(f,"MinorStep",0<=this.L?0:this.L),this.L=f.a,f.a=this.y,a.ie6(f,"ScaleUnit",1),this.y=f.a,f.a=this.ad,a.ie6(f,
"LabelValue",1),this.ad=f.a,f.a=this.N,a.ie6(f,"PixelsPerUnit",0),this.N=f.a,h||null!=this.W||0==(a.ieU()&2)||(this.W=[]),this.W=a.ie9("CustomSteps",this.W,g.b.b,32),null!=this.W&&0==this.W.length&&(this.W=null)):h||(this.o&=-65,this.o|=e&64);100>d&&(f.a=0,a.ie4(f,"ScrollPosition",0),f.a=!1,a.ie7(f,"Zoomed",!1),f.a=0,a.ie6(f,"PixelsPerUnitBeforeZoom",0));0!=(b&8)&&(this.P=a.ie9("Title",this.P,"Title",0));0!=(b&16384)&&(this.F=a.ie9("Sections",this.F,"AxisSectionCollection",4),h||null==this.F||this.F.setAxis(this));
0!=(a.ieS()&32768)&&(this.Y=a.ie9("CustomGridlines",this.Y,"CustomGridLineCollection",4),h||null==this.Y||this.Y.setAxis(this))};"undefined"!=typeof c.cG&&(c.cG.prototype.ieP=function(c,a){var b=new g._p1(this.a);a.ie7(b,"Enabled",!1);this.a=b.a;b.a=this.b;a.ie7(b,"Rotated",!1);this.b=b.a;b.a=this.e;a.ie4(b,"AngleX",6);this.e=b.a;b.a=this.c;a.ie4(b,"AngleY",6);this.c=b.a;b.a=this.j;a.ie4(b,"Perspective",-1);this.j=b.a;b.a=this.m;a.ie4(b,"Depth",100);this.m=b.a;b.a=this.q;a.ie7(b,"Cluster",!1);this.q=
b.a;b.a=this.n;a.ie4(b,"BoxThickness",0);this.n=b.a;this.d=a.ie8("Shadow",this.d,1);this.p()});"undefined"!=typeof c.bC&&(c.bC.prototype.c=function(c,a){});"undefined"!=typeof c.bC&&(c.bC.prototype.ieP=function(c,a){this.c(c,a)});"undefined"!=typeof c.bD&&(c.bD.prototype.c=function(c,a){this.f=a.ie8("Flags",this.f,13);var b=new g._p1(this.o);a.ie4(b,"MaximumLabelMargin",70);this.o=b.a;b.a=this.m;a.ie4(b,"SliceSeparation",20);this.m=b.a;this.i=a.ie8("ExplodingMode",this.i,0);b.a=this.p;a.ie4(b,"DoughnutThickness",
50);this.p=b.a;b.a=this.l;a.ie4(b,"LabelLineBreak",10);this.l=b.a;b.a=this.n;a.ie4(b,"StartAngle",90);this.n=b.a;this.j=a.ie8("AnimationStyle",this.j,1)});"undefined"!=typeof c.bG&&(c.bG.prototype.ieP=function(c,a){});"undefined"!=typeof c.bH&&(c.bH.prototype.ieP=function(c,a){var b=new g._p1(this.b);a.ie4(b,"MaximumBubbleSize",20);this.b=b.a});"undefined"!=typeof c.bI&&(c.bI.prototype.ieP=function(c,a){var b=new g._p1(this.c);a.ie7(b,"Overlap",!1);this.c=b.a});c.persistenceVersion="7.6.6537.25476";
var n=function a(b){a._ic();this.CI=this.A=b;this.SI=[];this.V=0;this.KO=[]};c.JsonPersist=n;n.prototype={ie_:function(a,b,e){return!0},ieS:function(){return 1048575},ieU:function(){return 2},ieT:function(){return this.V},sieT:function(a){this.V=a},_d:function(){},ieV:function(a){return void 0!==this.CI[a]},ieX:function(a){a=this.CI[a];if(void 0===a||"object"!=typeof a)return!1;this.SI.push(this.CI);this.CI=a;return!0},ieW:function(){var a=this.SI.length;0!=a&&(this.CI=this.SI[a-1],this.SI.splice(a-
1,1));return!0},ie8:function(a,b,e){a=this.CI[a];return void 0===a?e:a},ie7:function(a,b,e){b=this.CI[b];if(void 0===b)return a.a=e,!1;a.a=b;return!0},ie0:function(a,b){if(!this.ieX(b))return!1;var e,d,c,k,l,m;c=k=l=m=!1;e=8;var n=a.a;null!=n?(propertyName=n.f(),d=n.i(),c=d&1,k=d&2,l=d&4,m=d&8,e=n.g()):propertyName="Arial";a.a=propertyName;this.ieY(a,"Name");propertyName=a.a;if(null==propertyName||""==propertyName)propertyName="Arial";a.a=e;this.ie5(a,"Size",8);e=a.a;a.a=c;this.ie7(a,"Bold",!1);c=
a.a;a.a=k;this.ie7(a,"Italic",!1);k=a.a;a.a=l;this.ie7(a,"Underline",!1);l=a.a;a.a=m;this.ie7(a,"Strikeout",!1);m=a.a;d=0;c&&(d|=1);k&&(d|=2);l&&(d|=4);m&&(d|=8);a.a=(new g.o)._02o(propertyName,e,d);this.ieW();return!0},ieZ:function(a,b){var c=this.CI[b];if(void 0===c)return!1;a.a=g.m.w(c);return!0},ieY:function(a,b){var c=this.CI[b];if(void 0===c)return!1;a.a=c;return!0},ie1:function(a,b){return!1},ie2:function(a,b){return!1},bS:function(a,b,e,d){b=a.substr(0,b);b=c[b];var f=void 0;void 0!==b&&(e=
e.substr(d),f=b[e],void 0===f&&(e=c._rC[a],void 0!==e&&(f=b[e])));return f},bO:function(a,b){var e=c[a],d=a,f=!1;if(void 0===e){var k=a.indexOf(".");-1!=k?e=this.bS(a,k,a,k+1):b&&void 0!==b._tn&&(k=b._tn.indexOf("."),-1!=k&&(e=this.bS(b._tn,k,a,0)))}void 0===e&&(e=c._rC[a],void 0!==e&&(d=e,e=c[e],f=!0));obj=new e.prototype.constructor;if(g.__d)e="_ctor"+a;else if(f)e="_0"+d;else{e=0;for(d=Object.getPrototypeOf(obj);d;)e++,d=d._bc;e="_0_"+e}e=obj[e];void 0!==e&&e.apply(obj);return obj},ie9:function(a,
b,e,d){a=this.CI[a];if(void 0===a||"object"!=typeof a)return b;var f=this.CI,k;if(d&65568){var l=a.length;if(void 0!==l&&0!=l)return d&65536&&(b=new g.X,b.A=a,a=b),a}if(d&4){l=a.length;if(void 0===l||0==l)return b;null==b&&(b=this.bO(e,null));if(d&40960){for(var m=0;m<l;m++)e=a[m],d&32768&&(e=g.m.w(e)),b.add(e);return b}var n=c._rA[e];void 0===n&&g.b.j(e,"Collection")&&(n=e.substr(0,e.length-10));if(void 0!==n||d&512)for(var r=b.Se(),p,m=0;m<l;m++)m<r?p=b.getItem(m):(d&512?(k=a[m]._type,void 0!==
k&&(k=this.bO(k,b),null!=k&&(p=k,this.KO.push(b)))):p=this.bO(n,b),void 0!==b.__add?b.__add(p):void 0!==b.add&&b.add(p)),k=g.TC(p,c.ieO),null!=k&&(this.CI=a[m],k.ieP(!1,this))}d=!0;null==e?(e=a._objId,void 0!==e?(b=this.KO[e],d=!1):(k=a._type,void 0!==k&&(k=this.bO(k,null),null!=k&&(b=k,this.KO.push(b))))):null==b&&(b=this.bO(e,null));d&&(k=g.TC(b,c.ieO),null!=k&&(this.CI=a,k.ieP(!1,this)));this.CI=f;return b}};n.prototype.ie3=n.prototype.ie7;n.prototype.ie4=n.prototype.ie7;n.prototype.ie6=n.prototype.ie7;
n.prototype.ie5=n.prototype.ie7;n._dt("CWJ",g.SA,0,c.ieQ);c._rC={TitleCollection:"cS",SeriesAttributesCollection:"cY",AxisXCollection:"cW",AxisYCollection:"cV",PaneCollection:"cT",ConditionalAttributesCollection:"c2",CustomGridLineCollection:"c4",LabelCollection:"c3",AxisSectionCollection:"c5",ExtensionCollection:"cj",LegendItemAttributesCollection:"b9",Attributes3D:"cG",ValueFormat:"c6",FieldMapCollection:"cI","financial.SeriesAttributes":"SeriesAttributesF",DataArray:"bY",DataGrid:"cf",CellAttributesCollection:"cb"};
c._rA={TitleCollection:"TitleDockable",StudiesCollection:"Study"};n=function b(){b._ic();this.CI=this.A={};this.SI=[];this.V=0;this.KO=[];this.MO=0;this.CT=1048059;this.Ci=null;this.C=!1};c.JsonSave=n;n.prototype={ie_:function(b,c,d){return!0},ieS:function(){return this.CT},ieU:function(){return 2},ieT:function(){return this.V},sieT:function(b){this.V=b},_d:function(){},ieV:function(b){return!0},ieX:function(b){this.C&&(this.SI.push(this.Ci),null!=this.Ci&&(this.Ci=this.Ci[b]));this.SI.push(this.CI);
this.SI.push(b);this.CI={};return!0},ieW:function(){var b=this.SI.length;if(0!=b){var c=2;this.C&&(this.Ci=this.SI[b-3],c=3);var d=this.SI[b-2],f=this.SI[b-1];this.SI.splice(b-c,c);b=this.CI;this.hP(b)&&(d[f]=b);this.CI=d}return!0},sV:function(b,c,d){if(this.C){if(null!=this.Ci&&this.Ci[c]==b)return!1;this.CI[c]=b;return!0}return b!=d?(this.CI[c]=b,!0):!1},ie8:function(b,c,d){this.sV(c,b,d);return c},ie7:function(b,c,d){return this.sV(b.a,c,d)},ie0:function(b,c){var d=b.a;if(null==d)return!1;this.ieX(c);
var f=d.f(),g=d.i(),l=g&1,m=g&2,n=g&4,g=g&8,d=d.g();this.sV(f,"Name",null);this.sV(d,"Size",8);this.sV(l,"Bold",!1);this.sV(m,"Italic",!1);this.sV(n,"Underline",!1);this.sV(g,"Strikeout",!1);this.ieW();return!0},ieZ:function(b,c){return this.sV(b.a._Th(),c,"#00000000")},ieY:function(b,c){return this.sV(b.a,c,null)},ie1:function(b,c){return!1},ie2:function(b,c){return!1},hP:function(b){for(var c in b)return!0;return!1},cP:function(b){var c=0,d;for(d in b)c++;return c},saveObjectType:function(b,c,d,
f,k){var l=-1;if(d){d=this.KO.length;for(var m=0;m<d;m++)if(this.KO[m]==b){l=m;break}}-1==l?(this.KO.push(b),0==(k&4096)&&(null==f.newItem&&(f.newItem={}),f.newItem._type=g.SA.prototype.SD.call(b)._fn)):(this.CI[c]={_objId:l},f.needsPersist=!1)},ie9:function(b,e,d,f){if(null==e||"object"!=typeof e)return null;var k=this.CI,l,m=null,n;this.C&&(n=this.Ci);if(f&32)return this.CI[b]=e;if(f&65540){var r=e.getCount();if(void 0===r||0==r)return e;var p=[],m=p,u=null,y=!0,t=!1;null!=this.Ci&&(u=this.Ci[b]);
this.C&&(this.Ci=null);for(var v=0;v<r;v++){var w=e.getItem(v);if(f&8192)p.push(w),t=!0;else if(f&32768)p.push(w._Th()),t=!0;else{l=g.TC(w,c.ieO);var x={};p.push(x);if(f&512){var q={needsPersist:!0};q.newItem=x;this.saveObjectType(w,null,!1,q,f)}if(null!=l)if(this.CI=x,null!=u&&(this.Ci=u[v]),l.ieP(!0,this),null!=u){if(this.hP(x)||null==this.Ci)t=!0}else t=!0}}this.C&&(y=t);y&&(k[b]=p)}l=!0;null==d&&null!=e&&(q={},q.needsPersist=l,q.newItem=m,this.saveObjectType(e,b,!0,q,f),l=q.needsPersist,m=q.newItem);
l&&(l=g.TC(e,c.ieO),null!=l&&(null==m&&(m={}),this.CI=m,null!=this.Ci&&(this.Ci=this.Ci[b]),d=0,f&4&&this.C&&(d=this.cP(m)),l.ieP(!0,this),l=!1,(l=f&4&&this.C?this.cP(m)!=d:this.hP(m))&&(k[b]=m)));this.CI=k;this.C&&(this.Ci=n);return e},ie$:function(b,c){0==b&&(this.MO=c)}};n.prototype.ie3=n.prototype.ie7;n.prototype.ie4=n.prototype.ie7;n.prototype.ie6=n.prototype.ie7;n.prototype.ie5=n.prototype.ie7;n._dt("CWJ",g.SA,0,c.ieQ);c.Chart.prototype.loadJson=function(b){b=new c.JsonPersist(b);this.ieP(!1,
b)};c.Chart.prototype.saveJson=function(){var b=new c.JsonSave;if(1<=arguments.length){var e=0,d=arguments[0];"object"==typeof d&&(b.C=!0,b.Ci=d,e++);arguments.length>e&&(e=arguments[e],"number"==typeof e&&(b.CT=e))}this.ieP(!0,b);return b.A};c.Chart.prototype.recordBaseline=function(){this.baseState=this.saveJson({})};c.Chart.prototype.changesFromBaseline=function(){return this.saveJson(this.baseState)}})();
