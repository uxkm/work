(function(){var H={Version:"7.6.6537.25476"},b,q;"undefined"!==typeof window?(b=window.sfx,q=window.cfx):(b=require("./jchartfx.system.js"),q=b.cfx,module.exports=H);q.density=H;var D=function(){this.a=this.c=this.b=this.d=0};D.prototype={f:function(){var n=this.a/100;if(-1==this.b)return n*=255,b.m.l(this.d,n,n,n);var g=this.b/60,f=this.c/100,a=b.a.k(g),g=g-a;0==(a&1)&&(g=1-g);var g=n*(1-f*g),e=0,c=0,d=0,f=b.a.o(0,b.a.p(n*(1-f),1)),g=b.a.o(0,b.a.p(g,1)),n=b.a.o(0,b.a.p(n,1));switch(a){case 6:case 0:e=
n;c=g;d=f;break;case 1:e=g;c=n;d=f;break;case 2:e=f;c=n;d=g;break;case 3:e=f;c=g;d=n;break;case 4:e=g;c=f;d=n;break;case 5:e=n,c=f,d=g}return b.m.l(this.d,255*e,255*c,255*d)},_cf:function(b){this.d=b.d;this.b=b.b;this.c=b.c;this.a=b.a;return this},_nc:function(){var b=new D;b._cf(this);return b}};D.h=function(b){return D.g(b.a,b.r,b.g,b.b)};D.g=function(n,g,f,a){g/=255;f/=255;a/=255;var e=0,c=0,d=new D,c=b.a.p(g,b.a.p(f,a)),e=b.a.o(g,b.a.o(f,a));e==c?(d.b=-1,d.c=0):(d.b=60*((g==c?3:f==c?5:1)-(g==
c?f-a:f==c?a-g:g-f)/(e-c)),d.c=(e-c)/e*100);d.a=100*e;d.d=n;return d};var z=function g(b,a){g._ic();this.b=b;this.a=a};z.prototype={SC:function(){return this.b+this.a},d:function(b,f){this.b=b;this.a=f},Sw:function(b){return this.b==b.b&&this.a==b.a}};z._dt("CWGD",b.SA,0,b.IEquatable_1);var G=function f(a,b,c){f._ic();this.e=0;this.b=1;this.d=a;this.c=b;this.a=c};G.prototype={id5:function(){return null},id6:function(){return 16},ifo:function(f){switch(f){case 1:return"g,"+this.e.toString();case 0:f=
this.a.k.getDataFormat();var a=this.a.j.getDataFormat();return b.b.k(null,"X {0} to {1}\nY {2} to {3}\nCount {4}",f.d(this.d),f.d(this.d+this.a.e),a.d(this.c),a.d(this.c+this.a.d),this.b)}return null},ifp:function(b){return 1==b?0:null},f:function(b){switch(b){case "XFrom":return this.a.k.getDataFormat().d(this.d);case "XTo":return this.a.k.getDataFormat().d(this.d+this.a.e);case "YFrom":return this.a.j.getDataFormat().d(this.c);case "YTo":return this.a.j.getDataFormat().d(this.c+this.a.d);case "Count":return this.b.toString()}return null}};
G._dt("CWGD",b.SA,0,q.ifn);var J=function(){this.a=null;this.b=new b.d},K=function(){this.b=this.a=this.c=null},I=function(){this.a=0;this.b=b._CE},l=function a(){a._ic();this.a=this.j=this.k=this.l=null;this.d=this.h=this.p=this.e=this.i=this.q=this.n=0;this._0_1()};H.Density=l;l.prototype={_0_1:function(){this.b=40;this.f=new b._D(!0);this.c=new b._L;this.o=this.g=!0;this.x();return this},getSize:function(){return this.b},setSize:function(a){this.b!=a&&(this.b=a,this.g=!0,null!=this.l&&this.l.iO())},
getTemplate:function(){return null==this.a?"":this.a.t},setTemplate:function(a){l.r=a;null==a?this.a=null:(null==this.a&&(this.a=(new q.vector._Zt)._0_Zt()),this.a.sw(a))},A:function(a){if(this.g){this.g=!1;var e=a.a.d.iaO();this.k=a.i;this.j=a.j;this.i=a.i.u;this.q=a.i.x;this.h=a.j.u;this.p=a.j.x;this.e=b.a.d(this.q-this.i)/this.b;this.d=b.a.d(this.p-this.h)/this.b;var c=new z(0,0);this.f.clear();this.c.clear();for(var d=a.e=0;d<e;d++){a.ah();var p=a.w;c.d(b.a.k((a.a9-this.i)/this.e),b.a.k((p-this.h)/
this.d));var h=null,h=new b._p1(h),p=this.f.tryGetValue(h,c),h=h.a;p?h.b++:(h=new G(this.i+c.b*this.e,this.h+c.a*this.d,this),h.e=this.c.Se(),this.c.Si(h),this.f.x(new z(c.b,c.a),h));this.n=b.a.o(this.n,h.b);a.ag(0,1)}}},ic2:function(a,e,c,d){a=null;switch(e){case 11:return this.w(c);case 13:a=c;a.a=l.z("TipDensity");a.f=!0;a.b=1;break;case 14:a=c;e=b.TD(a.l,G);if(null!=e)return e.f(a.m);break;case 16:return this.y(c);case 18:return 2}return null},ic3:function(a){return 1},ic4:function(a){return 29184},
ic5:function(a,e,c){a.b=b.a.d(c.q-c.o);a.a=0;this.A(c);a=c.c;e=c.n._nc();var d=e.w/(this.b+1),p=e.h/(this.b+1),h=e.x,l=e.c();e=new b._D;var k=null;c.b.a.a=!1;c.e=0;c.d=0;c.ah();c.V(!1);var A=b.TD(c.x,b.ar).j();0!=(a.idf()&8)&&(A=a.idj()._Gv("fill",A,"Attribute0",0));var B=D.h(A),A=B._nc();A.a=20;B=B._nc();B.a=b.a.o(B.a,80);var m=Array(2);m[0]=new I;m[1]=new I;m[0].b=A.f();m[0].a=0;m[1].b=B.f();m[1].a=1;for(var C=m[m.length-1].b,A=c.x,B=c.v,F=(new b.d)._02c(0,0,d,p),r=this.f.Sb();1==r.SK();){var t=
r.SM(),w=t.k,x=h+w.b*d,w=l-(w.a+1)*p,u=t.v.b,v=0,v=0,k=new b._p1(k),v=e.tryGetValue(k,u),k=k.a;if(!v){v=u;c.af&&(v=1+(v-1)*c.b3);for(var v=v/this.n,k=!1,E=0;E<m.length;E++){var y=m[E];if(v>y.a){var k=y.b,C=m[E+1].b,y=(v-y.a)/(m[E+1].a-y.a),z=1-y,v=b.a.k(k.r*y+C.r*z),E=b.a.k(k.g*y+C.g*z),k=b.a.k(k.b*y+C.b*z),C=b.m.k(v,E,k),k=!0;break}}k||(C=m[m.length-1].b);k=new K;k.c=new b.ar(C);this.o&&(k.b=(new b.ao)._01ao(C));null!=this.a&&(k.a=new b._L);e.x(u,k)}null!=this.a?(u=new J,u.b._i2(x,w,d,p),u.a=t.v,
k.a.Si(u)):(a.sidi(t.v),a.idV(k.c,x,w,d,p),this.o&&a.idF(k.b,x,w,d,p))}if(null!=this.a){d=this.a.k;h=null;null!=d&&(d=d.a("background"),h=b.TD(d,q.vector._Zt));if(null!=h)for(l=e.E().A,m=l.length,r=0;r<m;r++){d=l[r];t=h.id().L.A;x=t.length;for(w=0;w<x;w++)p=t[w],h.m(p,c,this,F);d=d.a.A;p=d.length;for(t=0;t<p;t++)u=d[t],a.sidi(u.a),F._cf(u.b),h.r(a,F,1,0)}h=e.E().A;l=h.length;for(m=0;m<l;m++){d=h[m];c.x=d.c;c.v=d.b;r=this.a.id().L.A;t=r.length;for(x=0;x<t;x++)p=r[x],this.a.m(p,c,this,F);d=d.a.A;p=
d.length;for(r=0;r<p;r++)u=d[r],a.sidi(u.a),F._cf(u.b),this.a.r(a,F,1,0)}c.x=A;c.v=B}for(a=e.Sb();1==a.SK();)a.SM();c.R=1},ic7:function(a,b,c,d){},ic9:function(a){this.g=!0;return!1},ic$:function(a,b,c,d){return!1},ic_:function(a,b,c,d,l){return!1},ieP:function(a,e){var c=new b._p1(this.b);e.ie4(c,"Size",40);this.b=c.a;c.a=l.r;e.ieY(c,"Template");l.r=c.a},ifb:function(a){this.l=a;a=b.TD(this.l,q.Chart);null!=a&&(this.u(a.getAxisX()),this.u(a.getAxisY()))},u:function(a){0==a.getDataFormat().e&&a.getDataFormat().setDecimals(2);
a.setStyle(a.o&-1073741825)},y:function(a){try{var e=b.u.e(a);if(e<this.c.Se())return this.c.A[e]}catch(c){}return null},x:function(){if(void 0!=q._Zt){var a=q.vector.eU.i("Density",!0);null!=a&&this.setTemplate(a)}},w:function(a){a.a.b=16;return null}};l.z=function(a){null==l.m&&(l.m=new b.aQ("density.templates",null),l.t=l.m.b(b.aI.b(),!0,!0));return l.t.d(a)};l._dt("density.Density",b.SA,0,q.ic1,q.ic6,q.ieO,q.ifa);b["density.templates"]={TipDensity:'<T xmlns:x="a"><g M="3,0,3,0"><g.CD><CD W="Auto"/><CD W="Auto"/><CD W="4"/><CD W="Auto"/></g.CD><g.RD><RD H="Auto"/><RD H="Auto"/><RD H="Auto"/></g.RD><TextBlock g.R="0" g.C="0" Text="{B SeriesTX}" M="0,0,4,0"/><TextBlock g.R="0" g.C="1" Text="{B DataXFrom}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="0" g.C="3" Text="{B DataXTo}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="0" Text="{B SeriesTY}" M="0,0,4,0"/><TextBlock g.R="1" g.C="1" Text="{B DataYFrom}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="1" g.C="3" Text="{B DataYTo}" FontWeight="Bold" HorizontalAlignment="Right"/><TextBlock g.R="2" g.C="0" Text="Count:" M="0,0,4,0"/><TextBlock g.R="2" g.C="3" Text="{B DataCount}" FontWeight="Bold" HorizontalAlignment="Right"/></g></T>'};
void 0!==q.UserInterface&&(q.UserInterface.prototype.galleryMap["2"].push("+density.Density,Density"),q.UserInterface.prototype.galleryMap["density.Density"]=[{Text:"Size",Type:"Range",Min:20,Max:60,API:"Size"}])})();