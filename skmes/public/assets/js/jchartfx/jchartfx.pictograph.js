(function(){var t={Version:"7.6.6537.25476"},a,u;"undefined"!==typeof window?(a=window.sfx,u=window.cfx):(a=require("./jchartfx.system.js"),u=a.cfx,module.exports=t);u.pictograph=t;t.FractionDisplay={None:0,Horizontal:1,Vertical:2};t.MatrixDirection={Horizontal:0,Vertical:1};t.MeasurePosition={Start:0,End:1};t.RoundMethod={None:0,Quarter:1,Halves:2};var C=function(){};C.e=function(F){null==C.b&&(C.b=new a.aQ("pictograph.templates",null),C.d=C.b.b(a.aI.b(),!0,!0));return C.d.d(F)};C.a=function(F,w,
k){var m=w;if(!a.b.p(w)){var e=w.charCodeAt(0);60!=e&&91!=e&&123!=e&&(m=u.vector.eU.i(w,k),null==m&&(m=C.e(w+"Default")))}F.sw(m)};C.c=function(a,w,k){return~~(a*w/k)};var P=function(){this.b=this.a=this.c=0},K=function(){this.a=null;this.c=0};K.prototype={b:function(F,w,k){var m=new P;m.a=F;k<w?(m.c=k,m.b=w):(m.c=w,m.b=k);null==this.a&&(this.a=new a._L);this.a.Si(m)}};var M=function(){this.f=this.b=0;this.p=null;this.c=this.k=this.w=0;this.v=!1;this.u=this.i=0;this.F=!1;this.E=this.o=0;this.t=null;
this.m=this.C=this.r=this.e=this.d=this.z=this.h=this.j=this.A=this.n=0;this.a=new a.d;this.y=new a.l(0,0);this.l=0;this.g=this.x=1};M.prototype={B:function(F,w,k,m){var e=0,r=0;0<w&&(e=m.w/(w+(w-1)*this.o),r=e/F.x);0<k&&(k=m.h/(k+(k-1)*this.m),F=k*F.x,0==w||k<r||F<e)&&(e=F,r=k);return new a.l(e,r)},G:function(a,w){this.w=a.w*(1+this.o);this.k=a.h*(1+this.m);this.j=w.x;this.h=w.y;var k=0,k=this.f*a.w+(this.f-1)*a.w*this.o;k<w.w&&(this.j+=(w.w-k)/2);k=this.e*a.h+(this.e-1)*a.h*this.m;k<w.h&&(this.h+=
(w.h-k)/2);this.n=this.h+k},q:function(a,w,k,m){var e=a._nc(),r=this.g;1==this.i?(e.x+=w*a.w,e.w*=k-w,0!=r&&(e.y-=r,e.h+=2*r,0==w?(e.x-=r,e.w+=r):1==k&&(e.w+=r))):(0!=(this.E&2)&&1==m&&(w=1-w,k=1-k),e.y+=w*a.h,e.h*=k-w,0!=r&&(e.x-=r,e.w+=r,0==w?(e.y-=r,e.h+=r):1==k&&(e.h+=r)));return e},D:function(u){u=u.a("bleedClip");u=a.TD(u,a.b);null!=u&&(this.g=a.C.e(u))}};var I=function w(){w._ic()};t.PictoBarRoundSettings=I;I.prototype={_0_1:function(){this.b=!1;this.a=1;return this},getEnabled:function(){return this.b},
setEnabled:function(a){this.b=a},getMethod:function(){return this.a},setMethod:function(a){this.a=a},c:function(w,k){for(var m=a.a.n(k),e=a.a.k(m-.5),m=0,r=1;;){r=a.a.q(10,e);m=a.a.k(w.a/r)*r;if(0!=m)break;e--}2==this.a?-1<=e&&(e=m+r/2,e<w.a&&(m=e)):1==this.a&&(e=10*r/4,e<w.a&&e>m?m=e:(e*=3,e<w.a&&e>m&&(m=e)));0<m&&(w.a=m)}};I._dt("pictograph.PictoBarRoundSettings",a.SA,0);var y=function k(){k._ic();this.d=null;this.k=0;this.b=null;this.n=this.i=this.p=0;this.c=null;this.t=this.o=0;this._0_1()};t.PictoBar=
y;y.prototype={_0_1:function(){this.q=this.r=a._CE;this.h=new a.l(0,0);this.a=(new u.vector._Zt)._0_Zt();this.l=.2;this.j=8;this.m=!1;this.e=0;void 0!==u.motif&&u._Em("pictobar",this,arguments);return this},iei:function(){return!1},iej:function(){return null},iek:function(){return null!=this.c&&this.c.b},getEmptyColor:function(){return this.q},setEmptyColor:function(k){this.q=k=a.m._t(k);this.f()},getEmptyColorBorder:function(){return this.r},setEmptyColorBorder:function(k){this.r=k=a.m._t(k);this.f()},
getIntraSeriesGap:function(){return this.j},setIntraSeriesGap:function(a){this.j=a;this.f()},getRound:function(){null==this.c&&(this.c=(new I)._0_1());return this.c},getShowEmpty:function(){return this.m},setShowEmpty:function(a){this.m=a;this.f()},getSpacing:function(){return this.l},setSpacing:function(a){this.l=a;this.f()},getTemplate:function(){return this.a.t},setTemplate:function(a){C.a(this.a,a,!1);this.f()},ic2:function(a,m,e,r){switch(m){case 18:return 0}return null},ic3:function(a){return 1},
ic4:function(a){return 268726448},ic5:function(k,m,e){e.h(131072)&&0==e.b.c&&!e.a.C?(k.a=0,k.b=1):(k.a=1,k.b=0);k=e.c;e.e==e.o&&(this.e=0);if(e.e==e.o&&e.d==e.t||null==this.b)this.b=new M,e.h(512)?this.b.i=1:this.b.i=2,this.a.v()&&C.a(this.a,"PictoGraph",!0),m=this.a.k,null!=m&&this.b.D(m),this.h._cf(this.a.E(k,new a.l(0,0))),this.k=this.h.w/this.h.h,this.t=e.j.valueToPixel(0);var r;0!=(k.idf()&8)&&(r=k.idj(),r.osw=!0);k.sidf(k.idf()|1024);var n=e.H,c=~~(e.a.z*e.b.r/100);m=e.C;var b=e.X,f=e.G,h=e.ac,
d=m+e.a.m*~~((e.ap-c+1)/2),g=0;1<b?(m=d+e.a.m*C.c(f+1,c,b),d+=e.a.m*C.c(f,c,b),g=a.a.d(m-d),0!=this.j&&(m=g*a.a.p(this.j,100)/100,4<g&&(m=a.a.o(m,1)),d+=m,g-=2*m)):g=a.a.o(~~(c/b),1);var c=this.l,p=0;null!=this.c&&this.c.b&&(c=0,p=2,0==this.e&&(m=(g*this.k+p)/e.j.D,m=new a._p1(m),this.c.c(m,e.j.x-e.j.u),this.o=m=m.a,this.e=(m*e.j.D-p)/this.k),this.e<g&&(d-=(g-this.e)/2,g=this.e));m=d+e.a.m*g/2;var b=new a.d,l=0,q=f=0,z=0,L=0,B=0,x=0,v=0,t=!1,D=1,y=e.h(512),A=0;y?(b._i2(h,d-g,n-h,g),x=b.h*this.k,v=
x*(1+c)+p,A=a.a.d(b.w),t=0>b.w):(b._i2(d,n,g,h-n),x=b.w/this.k,v=x*(1+c)+p,A=a.a.d(b.h),t=0>b.h);h!=e.n.x&&0!=(e.g&3072)&&(B=a.a.d(h-this.t),q=a.a.k(B/v),B=v-(B-q*v),A<B&&(D=A/v+this.i),A-=B);q=a.a.k(A/v);n=q*v;0>c&&(n=1<q?(q-1)*v+x:q*x,n>A&&0<q&&(q--,f=1-(n-A)/x));0>A?q=0:n<A&&(f=(A-n)/v);t?y?(l=1-f,f=1,b.x-=x,z=-v):(b.y+=b.h,L=v):y?z=v:(l=1-f,f=1,b.y+=b.h-v,L=-v);y?b.w=x:b.h=x;d=null;n=1;p=this.a.id().L.A;x=p.length;for(A=0;A<x;A++)if(h=p[A],g=h.c,"Stroke"==g||"S"==g)if(null!=e.v){n=b.w/this.h.w;
n=e.v.m()/n;d=e.v.d();if(0!=(k.idf()&8)){g=!0;r=k.idj();var E=r._cc;null==E&&(g=!1);g&&(d=r._Gv("stroke",null,E,0))}d=(new a.ao)._03ao(d,n);h.sa(d)}else h.sa(null);else this.a.m(h,e,this,b);0!=B&&(t?(b.x+=v-B,this.g(k,b._nc(),0,this.p,0,v,c),b.x-=v-B,b.x-=B):(b.x-=v-B,this.g(k,b._nc(),this.i,D,0,v,c),this.p=this.i,this.i=D,b.x+=v-B,b.x+=B));for(t=0;t<q;t++)this.a.r(k,b,1,0),b.x+=z,b.y+=L;l!=f&&(this.g(k,b._nc(),l,f,0,v,c),this.p=l,this.i=f);if(this.m&&0==(e.g&1536)){k.sidi((new u.c8)._01c8("EmptyMarker"));
q=l=null;t=this.q;D=this.r;null!=this.d&&(t.e()&&(t=this.d.iM(27)),D.e()&&(D=this.d.iM(28)));B=this.a.id().L.A;p=B.length;for(x=0;x<p;x++)if(h=B[x],g=h.c,"Fill"==g||"F"==g)null==l&&(l=new a.ar(t)),h.sa(l);else if("Stroke"==g||"S"==g)null==d?h.sa(null):(null==q&&(q=(new a.ao)._03ao(D,n)),h.sa(q));this.g(k,b._nc(),f,1,e.n.g(),v,c);b.x+=z;for(b.y+=L;!(b.g()>=e.n.g());)this.a.r(k,b,1,0),b.x+=z,b.y+=L;b.x<=e.n.g()&&this.g(k,b._nc(),0,1,e.n.g(),v,c)}y&&(2==e.O?(e.C=b.y,e.bU=!0):0==e.O?(e.C=b.c(),e.bU=!0):
e.C=m);e.aV();0!=(k.idf()&8)&&(r.osw=!1);k.sidf(k.idf()&-1025);this.a._dispose1(!1)},iel:function(a){},iem:function(a,m,e,r){this.n=0},ien:function(){return 1},ieo:function(a){return!1},iep:function(k,m,e,r,n){k.a=!0;n._cf(a.g.b);return m.idY("1000",e).e()},ieq:function(k,m,e){k.b=this.u();k.a=null;k.c=null;k.d=this.n;if(1<=this.n)return!1;m.b.d=0;k=null;e=this.d.getLegendBox().getTextColor();var r=m.H-2,n=m.ap-8,r=a.d.r((new a.c)._02c(n,r,16,16)),n=this.a.E(m.c,new a.l(0,0))._nc(),n=n.w/n.h;1<n?
(n=r.w/n,r.y+=(r.h-n)/2,r.h=n):(n*=r.h,r.x+=(r.w-n)/2,r.w=n);this.a._dispose1(!1);for(var n=this.a.id().L.A,c=n.length,b=0;b<c;b++){var f=n[b],h=f.c;if("Stroke"==h||"S"==h)f.sa(null);else if("Fill"==h||"F"==h)null==k&&(k=new a.ar(e)),f.sa(k)}this.a.r(m.c,r,1,0);this.n++;return!0},ieP:function(a,m){},ifb:function(a){this.d=a},u:function(){var k=this.o;0==k&&(k=1);var m=this.d.getAxisY().getDataFormat(),e=m.d(k);if(0==m.e){var r=a.a.k(this.o);k!=r&&(e=(new u.c6)._0c6(),e.setFormat(m.c),e.setCulture(m.getCulture()),
e.setDecimals(2),e=e.d(k))}return"= "+e},g:function(k,m,e,r,n,c,b){var f=this.b.g;this.b.g*=m.w/this.h.w;var h=m._nc();0<=b&&(h.w=c);e=this.b.q(h,e,r,0)._nc();0!=n&&(e.w=n-e.x);n=k.idg();k.sidg((new a.aq)._0aq(e));this.a.r(k,m,1,0);k.sidg(n);this.b.g=f},f:function(){null!=this.d&&this.d.iO()}};y._dt("pictograph.PictoBar",a.SA,0,u.ic1,u.ieh,u.iq,u.ieO,u.ifa);var N=function m(e){m._ic();this.a=new a._L;this.b=e};N.prototype={g:function(){return this.a.Se()},f:function(a){return this.a.A[a]},d:function(a){this.a.Si(a);
a.l(this.b);this.c()},h:function(){this.a.clear();this.c()},c:function(){null!=this.b&&this.b.iai(0)},e:function(a){this.b=a;for(var e=this.a.A,r=e.length,n=0;n<r;n++)e[n].l(a)}};N._dt("CWGP",a.SA,0,a.Sa);var G=function e(a,n){e._ic();this.a=a;this.b=n};G.prototype={SC:function(){return this.a+this.b},Sw:function(a){return this.a==a.a&&this.b==a.b}};G._dt("CWGC",a.SA,0,a.IEquatable_1);var E=function r(){r._ic();this.b=this.a=0};t.PictoLayout=E;E.prototype={_0_1:function(){this.c=this.d=-1;return this},
j:function(){return 20},getHorizontalSpacing:function(){return this.d},setHorizontalSpacing:function(a){this.d=a},f:function(){return 0},getVerticalSpacing:function(){return this.c},setVerticalSpacing:function(a){this.c=a},g:function(a,n,c,b){return!0},e:function(r){this.a=this.d;this.b=this.c;var n=r.p.k;if(null!=n){var c=null;-1==this.a&&(c=n.a("horzSpacing"+r.t),c=a.TD(c,a.b),null!=c&&(this.a=a.C.e(c)));-1==this.b&&(c=n.a("vertSpacing"+r.t),c=a.TD(c,a.b),null!=c&&(this.b=a.C.e(c)));r.v||(c=n.a("forceBorder"),
c=a.TD(c,a.b),null!=c&&(r.v=!0));r.D(n)}}};E._dt("pictograph.PictoLayout",a.SA,0);var J=function n(){n._ic();this.m=this.n=0;this._bc._0_1.call(this);this.l=0};t.PictoMatrixLayout=J;J.prototype={getColumns:function(){return this.n},setColumns:function(a){this.n=a},getDirection:function(){return this.l},setDirection:function(a){this.l=a},getRows:function(){return this.m},setRows:function(a){this.m=a},f:function(){var a=0;1==this.l&&(a|=2);return a},o:function(n,c){for(var b=0,f=0,h=n.c,d=0,g=1;g<n.c;g++){var p=
a.a.h(h/g),l=n.B(n,p,g,c),l=l.w*l.h;l>d&&(d=l,f=p,b=g)}return new a.g(b,f)},i:function(a,c,b,f){0==this.l?(c.a.x+=c.w,c.b++,c.b==c.f&&(c.a.x=c.j,c.a.y+=c.k,c.b=0,c.d++)):1==this.l&&(a=b.b,c.a.y=1==a?c.a.y-c.k:c.a.y+c.k,c.d++,c.d==c.e&&(c.b++,0==a?c.a.y=c.h:(c.r==c.b&&(c.n-=c.k*c.z,c.r=-1,c.e--),c.a.y=c.n-c.a.h),c.a.x+=c.w,c.d=0));return!0},e:function(a){a.t="";E.prototype.e.call(this,a);-1==this.a&&(this.a=.1);-1==this.b&&(this.b=.05)},h:function(n,c,b,f,h){h=this.n;n=this.m;if(0==h||0==n)h=this.o(c,
b),n=h.w,h=h.h;var d=c.B(c,h,n,b);c.f=h;c.e=n;c.G(d,b);c.r=-1;c.z=n*h-c.c;c.a._i2(c.j,c.h,d.w,d.h);1==this.l&&1==f.b&&(c.r=c.f-a.a.h(c.z/n),c.a.y=c.n-d.h);c.b=0;c.d=0}};J._dt("pictograph.PictoMatrixLayout",E,0);y=function c(){c._ic();this.o=0;this.v=null;this.u=this.n=this.y=this.q=0;this.x=!1;this.r=this.w=this.m=0;this._bc._0_1.call(this);this.t=new a._D(!0);this.p=new O};t.PictoHiveLayout=y;y.prototype={j:function(){return 50},f:function(){return 1},g:function(c,b,f,h){var d=0;this.v.a=b.b;this.v.b=
b.d;var g;g=new a._p1(null);d=this.t.tryGetValue(g,this.v);g=g.a;if(d){if(d=g.c,null!=g.a){g=g.a.A;for(var d=g.length,p=0;p<d;p++){var l=g[p];l.a!=this.q&&(f.i(c,b.p,h.A[l.a],b),this.q=l.a);var l=b.q(b.a,l.c,l.b,f.b),q=c.idg();c.sidg((new a.aq)._0aq(l));b.p.r(c,b.a,1,0);c.sidg(q)}return!1}}else d=this.w;this.q!=d&&(this.q=d,f.i(c,b.p,h.A[this.q],b));return!0},z:function(c,b,f,h){c=new G(b.d,b.b);var d=1;1==b.A&&(d=-1,c.a=this.p.a.length-1);this.t.clear();this.q=-1;var g=0,p=0,l=0,q=0;b=b.i;var z=
null;f=f.b;1==f&&(p=1);h=h.A;for(var t=h.length,u=0;u<t;u++){l=h[u];if(-1==l.d)this.w=g,0==f&&null!=z&&z.b(g,p,1);else{var x=l.h,q=l=0;null!=z&&(0==f?(l=1-p,l=a.a.p(l,x),q=p+l):(l=p,l=a.a.p(l,x),q=p-l),z.b(g,p,q),p=q,1<=p&&(p=0));q=a.a.k(x-l);l+=q;if(0<q){p=0==f?0:1;for(z=0;z<q;z++){var v=new G(c.a,c.b),y=new K;y.c=g;this.t.x(v,y);this.p.e(c,d)}z=null}0!=b&&l<x&&(q=0==f?x-l:1-(x-l),v=new G(c.a,c.b),y=new K,y.b(g,p,q),z=y,p=q,1<=p&&(p=0),this.t.x(v,y),this.p.e(c,d))}g++}1==f&&null!=z&&z.b(this.w,0,
p)},i:function(c,b,a,h){this.u++;if(this.u==this.n){b.d++;this.u=0;var d=1;if(this.x||0==this.m)d=-1,this.x=!0;this.o-=d;this.m-=d;this.n+=d;this.r-=b.a.w/2*d*(1+this.a);b.a.y+=b.k;b.a.x=this.r;b.b=this.o}else b.b+=2,b.a.x+=b.w;return this.g(c,b,a,h)},e:function(c){c.t="Hive";E.prototype.e.call(this,c);-1==this.b&&(this.b=-.5);-1==this.a&&(this.a=0);20!=c.c&&25!=c.c&&50!=c.c&&75!=c.c&&(c.c=100)},h:function(c,b,a,h,d){this.p.g(this,b);this.y=-.5;b.F=!0;var g=b.B(b,b.f,b.e,a);b.G(g,a);this.p.f(this,
b,g);b.a._i2(this.r,b.h,g.w,g.h);this.v=new G(b.b,b.d);this.x=!1;this.z(c,b,h,d)}};y._dt("pictograph.PictoHiveLayout",E,0);var O=function(){this.d=this.c=0;this.a=this.b=null};O.prototype={g:function(c,b){var a=0,h=0,d=0,g=0,p=0,l=0;c.u=0;20==b.c?(b.f=6,b.e=4,c.n=4,c.o=2,c.m=2,b.d=0,b.b=2,this.a=Array(11),this.b=Array(11),this.a[0]=2,this.b[0]=2,a=1,h=9,p=1,l=3,d=0,g=2,this.a[10]=2,this.b[10]=2,this.c=1):25==b.c?(b.f=7,b.e=5,c.n=3,c.o=4,c.m=100,b.d=0,b.b=4,this.a=Array(13),this.b=Array(13),this.a[0]=
4,this.b[0]=4,this.a[1]=3,this.b[1]=3,this.a[2]=2,this.b[2]=4,a=3,h=9,p=1,l=3,d=0,g=4,this.a[10]=2,this.b[10]=4,this.a[11]=3,this.b[11]=3,this.a[12]=4,this.b[12]=4,this.c=2):50==b.c?(b.f=12,b.e=5,c.n=8,c.o=4,c.m=100,b.d=0,b.b=4,this.c=2,this.a=Array(23),this.b=Array(23),this.a[0]=4,this.b[0]=4,this.a[1]=3,this.b[1]=3,this.a[2]=2,this.b[2]=4,a=3,h=19,p=1,l=3,d=0,g=4,this.a[20]=2,this.b[20]=4,this.a[21]=3,this.b[21]=3,this.a[22]=4,this.b[22]=4):75==b.c?(b.f=14,b.e=6,c.n=11,c.o=3,c.m=3,b.d=0,b.b=3,this.a=
Array(27),this.b=Array(27),this.a[0]=3,this.b[0]=3,this.a[1]=2,this.b[1]=4,a=2,h=24,p=0,l=4,d=1,g=5,this.a[25]=2,this.b[25]=4,this.a[26]=3,this.b[26]=3,this.c=1,this.d=2):(b.f=16,b.e=7,c.n=13,c.o=3,c.m=3,b.d=0,b.b=3,this.c=1,this.d=2,this.a=Array(31),this.b=Array(31),this.a[0]=3,this.b[0]=3,this.a[1]=2,this.b[1]=4,this.a[2]=1,this.b[2]=5,a=3,h=27,p=0,l=6,d=1,g=5,this.a[28]=1,this.b[28]=5,this.a[29]=2,this.b[29]=4,this.a[30]=3,this.b[30]=3);for(;a<=h;a++)0!=a%2?(this.a[a]=p,this.b[a]=l):(this.a[a]=
d,this.b[a]=g)},f:function(a,b,f){f=f.w*(this.c+a.a);0!=this.d&&(f*=this.d+a.y);a.r=b.j+f},e:function(a,b){0==a.a%2?a.b!=this.a[a.a]?a.b-=2:(a.a+=b,0<=a.a&&a.a<this.a.length&&(a.b=this.a[a.a])):a.b!=this.b[a.a]?a.b+=2:(a.a+=b,0<=a.a&&a.a<this.a.length&&(a.b=this.b[a.a]))}};var H=function b(){b._ic();this.f=this.k=null;this.d=this.e=this.c=this.i=this.y=this.h=0;this.b=null;this.x=this.D=0;this.j=!1;this.E=null;this.a=0;this.m=null;this.g=0};H.prototype={_0dU:function(){this.z=this.A=a._CE;this.q();
return this},_01dU:function(b){this.z=this.A=a._CE;this.k=b;this.q();return this},id5:function(){return null},id6:function(){return 4},B:function(){return this.j?this.b:null},u:function(){return null!=this.m?this.m:this},so:function(a){this.i=this.g=a},n:function(b,f){var h=b.c/b.C;this.h=this.i*h;f?(this.e=a.a.k(b.l*h),b.l+=this.i,0!=b.i&&(this.c=b.u,h*=this.i,h<1-this.c?this.a=this.c+h:(0!=this.c&&(h-=1-this.c),this.a=h-a.a.k(h),0==this.a&&(this.a=1)),b.u=this.a,1<=this.a&&(b.u=0))):0==b.A&&(0!=
b.i?(this.e=a.a.k(b.l*h),this.c=b.u,this.a=1):this.e=a.a.h(b.l*h))},ifo:function(a){var f=this.d.toString();if(2==a)return 0>this.d?"EmptyMarker":"Attribute"+f;if(0==a){if(0<=this.d)return"M,"+f}else if(1==a)return"P,"+this.x.toString()+","+f;return null},ifp:function(a){return null},r:function(a,f){return 0>this.d?this.k.iM(4):this.k.iZ(this.d)},q:function(){this.y=-1},p:function(a,f){this.d=f},w:function(){null!=this.f&&(this.f=null);null!=this.b&&(this.b=null)},v:function(b,f,h){if(null==this.f){var d=
this.z;d.e()&&(d=this.r(f,!1));this.f=new a.ar(d)}this.j=0>f.o||0>f.m||f.v;null==this.b?this.j&&(d=this.A,d.e()&&(d=this.r(f,!0)),0!=(b.idf()&8)&&(b=b.idj(),f=this.ifo(2),d=b._Gv("stroke",d,f,0)),this.b=(new a.ao)._03ao(d,h)):this.j&&this.b.sm(h)},l:function(a){this.k=a}};H._dt("CWGP",a.SA,0,u.ifn);y=function f(){f._ic();this.a=this.h=null;this.k=!1;this.f=0;this.l=this.d=null;this.b=0;this.c=this.e=null;this._0_1()};t.PictoGraph=y;y.prototype={_0_1:function(){this.n();this.g=50;void 0!==u.motif&&
u._Em("pictographchart",this,arguments);return this},getCount:function(){return this.g},setCount:function(a){this.g=a;this.j()},getForceBorder:function(){return this.k},setForceBorder:function(a){this.k=a},getFractionDisplay:function(){return this.f},setFractionDisplay:function(a){this.f=a},getLayout:function(){return this.d},setLayout:function(a){null!=a&&(this.d=a,this.j())},getMeasurePosition:function(){return this.b},setMeasurePosition:function(a){this.b=a;this.j()},getTemplate:function(){return this.a.t},
setTemplate:function(a){C.a(this.a,a,!1);this.j()},i:function(f,h,d,g){f.sidi(d.u());h=h.id().L.A;for(var p=h.length,l=0;l<p;l++){var q=h[l];switch(q.c){case "Fill":case "F":q.sa(d.f);break;case "Stroke":case "S":q.sa(d.B());break;case "StrokeThickness":case "ST":q.sa(g.y.w/g.a.w);break;case "FillColor":case "FC":var z=a.TD(d.f,a.ar);if(null!=z){z=z.j();if(0!=(f.idf()&8)){var t=!0,u=f.idj(),x=u._cc;null==x&&(t=!1);t&&(z=u._Gv("fill",null,x,0))}q.sa(z)}}}},p:function(f){var h=this.g;0==h&&(h=this.c.g,
100<h||0>=h)&&(h=this.d.j());var d=new M,g=this.a.k;if(null!=g){var p=null,p=g.a("ratio");null!=p&&(d.x=a.C.e(p.toString()))}d.p=this.a;d.y._cf(this.a.E(f,new a.l(0,0)));d.E=this.d.f();d.C=a.a.o(this.c.g,1);d.A=this.b;d.c=h;d.i=this.f;d.v=this.k;return d},o:function(f){for(var h=new a._L,d=0,g=0,p=this.e.a.A,l=p.length,q=0;q<l;q++){var t=p[q],d=d+t.g;t.p(this,g);g++}1==this.b&&(this.c.i=a.a.o(0,this.c.g-d),h.Si(this.c),this.c.n(f,!0));p=0;d=this.e.g();g=1;1==this.b&&0==(this.d.f()&1)&&(p=d-1,g=d=
-1);for(;p!=d;p+=g)l=this.e.f(p),0!=l.g&&(h.Si(l),l.n(f,!0));0==this.b&&(h.Si(this.c),this.c.n(f,!1));return h},ic2:function(a,h,d,g){switch(h){case 18:return 1;case 12:return 1==this.b}return null},ic3:function(a){return 1},ic4:function(a){return 134365185},ic5:function(f,h,d){f.a=1;f.b=0;f=d.a.d.iaO();h=a.d.r(d.n);var g=d.U;this.e.h();d.e=0;var p=null;0!=(d.c.idf()&8)&&(p=d.c.idj());for(var l=0;l<f;l++){d.ah();d.aK(d.d,d.e,!1);d.V(!0);d.aA(d.d,d.e);var q=(new H)._0dU();q.so(d.M);q.f=d.x.b();if(null!=
p){var t=d.v.d(),t=p._Gv("stroke",t,"Attribute"+l.toString(),0);q.b=(new a.ao)._03ao(t,d.v.m())}else q.b=d.v.n();q.m=d.c.idi();this.e.d(q);d.ag(0,1)}this.c.so(g);this.m(d.c,h);null!=this.a&&this.a._dispose1(!1)},ieP:function(a,h){},ifb:function(a){this.h=a;this.c.l(this.h);this.e.e(this.h)},n:function(){this.c=(new H)._01dU(null);this.c.p(this,-1);this.l=(new H)._01dU(null);this.d=new J;this.b=this.g=0;this.f=1;this.a=(new u.vector._Zt)._0_Zt();this.e=new N(null);this.e.d(this.l)},m:function(f,h){this.a.v()&&
C.a(this.a,"PictoGraph",!0);var d=this.p(f);this.d.e(d);var g=this.o(d);d.o=this.d.a;d.m=this.d.b;var p=f.idj();p.osw=!0;f.sidf(f.idf()|1024);this.d.h(f,d,h._nc(),this,g);var l=d.y.w/d.a.w;d.g/=l;for(var q=g.A,t=q.length,u=0;u<t;u++){var y=q[u];y.v(f,d,l)}var y=d.c,l=1,x=0;1==g.Se()?l=0:0==g.A[0].h&&(x=1,l++);var q=g.A[l],t=q.e,u=0,v=q.c,E=this.f,D=new a.c,G=!1,A=null,H=!1,I=!0;d.F?(t=-1,I=this.d.g(f,d,this,g)):this.i(f,this.a,g.A[x],d);for(x=0;x<y;x++){if(x==t){var J=t,K=q;l++;l<g.Se()&&(K=g.A[l],
J=K.e);0!=E&&(H=!1,!(0==u&&0==v||0==u&&1<=v)&&(D=d.q(d.a,u,v,this.b),A=f.idg(),f.sidg((new a.aq)._0aq(D)),this.a.r(f,d.a,1,0),f.sidg(A),u=v,v=q.a,G=0!=u))&&(J>t||l>=g.Se()?v=1:H=!0,D=d.q(d.a,u,v,this.b),A=f.idg(),f.sidg((new a.aq)._0aq(D)));this.i(f,this.a,q,d);q=K;t=J}I&&this.a.r(f,d.a,1,0);if(G)if(G=!1,f.sidg(A),H)for(;;){this.i(f,this.a,q,d);u=v;v=1<q.h?1:q.a;D=d.q(d.a,u,v,this.b);A=f.idg();f.sidg((new a.aq)._0aq(D));this.a.r(f,d.a,1,0);f.sidg(A);if(1<=q.h){1<l&&1>g.A[l-1].h&&l+1<g.Se()&&(l++,
t=g.A[l].e,u=0,v=q.a,q=g.A[l]);break}l++;if(l>=g.Se())break;q=g.A[l];t=q.e}else v=q.c,u=0;I=this.d.i(f,d,this,g)}p.osw=!1;f.sidf(f.idf()&-1025);d=g.A;g=d.length;for(p=0;p<g;p++)y=d[p],y.w();this.a._dispose1(!1)},j:function(){null!=this.h&&this.h.iO()}};y._dt("pictograph.PictoGraph",a.SA,0,u.ic1,u.ieO,u.ifa);void 0!==u.UserInterface&&(u.UserInterface.prototype.galleryMap["1"].push("=pictograph.PictoGraph,PictoGraph"),u.UserInterface.prototype.galleryMap["0"].push("=pictograph.PictoBar,PictoBar"));
t=a["vector.templates"];void 0!==t&&(t.PictoGraphDefault='<T><T.R><s K="ratio">0.58333</s><s K="forceBorder">true</s></T.R><V VW="13" VH="23"><g><P S="{B S}" F="{B F}"  Reuse="true" D="M6.916,0.5c1.105,0,2,0.896,2,2c0,1.007-0.745,1.841-1.713,1.979C7.107,4.493,7.014,4.5,6.916,4.5c-0.102,0-0.202-0.008-0.3-0.021c-0.963-0.146-1.7-0.977-1.7-1.979C4.916,1.396,5.811,0.5,6.916,0.5M13.432,10.837l-2.604-5.876C10.643,4.549,10.064,4.5,9.729,4.5c-0.334,0-4.863,0-5.185,0c-0.32,0-0.82,0.051-1.009,0.418L0.59,10.624c-0.208,0.401-0.042,0.897,0.368,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.358L4.004,8.48v5.207v9c0,0.449,0.373,0.812,0.835,0.812h0.384c0.461,0,0.833-0.363,0.833-0.812L7.082,14.5l1.025,8.188c0,0.449,0.373,0.812,0.834,0.812h0.386c0.461,0,0.834-0.363,0.834-0.812v-9V8.52l1.39,3.114c0.182,0.412,0.674,0.601,1.096,0.421l0.354-0.146C13.421,11.727,13.613,11.249,13.432,10.837z"/><P Reuse="true" D="M6.916,0.5c1.105,0,2,0.896,2,2c0,1.007-0.745,1.841-1.713,1.979C7.107,4.493,7.014,4.5,6.916,4.5c-0.102,0-0.202-0.008-0.3-0.021c-0.963-0.146-1.7-0.977-1.7-1.979C4.916,1.396,5.811,0.5,6.916,0.5M13.432,10.837l-2.604-5.876C10.643,4.549,10.064,4.5,9.729,4.5c-0.334,0-4.863,0-5.185,0c-0.32,0-0.82,0.051-1.009,0.418L0.59,10.624c-0.208,0.401-0.042,0.897,0.368,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.358L4.004,8.48v5.207v9c0,0.449,0.373,0.812,0.835,0.812h0.384c0.461,0,0.833-0.363,0.833-0.812L7.082,14.5l1.025,8.188c0,0.449,0.373,0.812,0.834,0.812h0.386c0.461,0,0.834-0.363,0.834-0.812v-9V8.52l1.39,3.114c0.182,0.412,0.674,0.601,1.096,0.421l0.354-0.146C13.421,11.727,13.613,11.249,13.432,10.837z"><P.F><L  S="0,0" E="1,0"><G C="#00FFFFFF" O="0"></G><G C="#00FFFFFF" O="0.1"></G><G C="#4CFFFFFF" O="0.3"></G><G C="#00FFFFFF" O="0.75"></G><G C="#0D000000" O="1"></G></L></P.F></P></g></V></T>',
t.PictoFigure1='<T><T.R><s K="ratio">0.42870</s></T.R><V VW="10.289" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M8.219,3.07c0,1.423-1.151,2.574-2.574,2.574c-1.419,0-2.57-1.151-2.57-2.574C3.075,1.651,4.226,0.5,5.645,0.5C7.067,0.5,8.219,1.651,8.219,3.07L8.219,3.07z M8.219,3.07Z" ></P><P S="{B S}" F="{B F}" Reuse="true" D="M10.789,7.214c0,0,0-1.712-1.716-1.712H2.217c0,0-1.717,0-1.717,1.712v6.002c0,1.712,1.717,1.712,1.717,1.712l1,9.572h4.855l1-9.572c0,0,1.716,0,1.716-1.712V7.214z M10.789,7.214Z" ></P></g></V></T>',
t.PictoFigure2='<T><T.R><s K="ratio">0.41666</s></T.R><V VW="10" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M10.5,19.5l-1.907-6.739C9.058,12.568,9.5,12.152,9.5,11.216V7.214C9.5,7.214,9.639,5.5,7.922,5.5H6.305c1.022,0,1.764-1.293,1.764-2.431C8.069,1.65,6.917,0.5,5.495,0.5c-1.419,0-2.57,1.15-2.57,2.569C2.925,4.207,3.666,5.5,4.686,5.5H3.067C3.067,5.5,1.5,5.502,1.5,7.214v4.002c0,0.943,0.444,1.358,0.912,1.549L0.5,19.5h3.135l0.432,5h2.855l0.432-5H10.5z" ></P></g></V></T>',t.PictoFigure3='<T><T.R><s K="ratio">0.36970</s></T.R><V VW="18" VH="48.688"><g><P S="{B S}" F="{B F}" Reuse="true" D="M5.5,0.5B5.5,0.5,8,8,0,360M18.458,14.348c-0.321-3.438-2.626-5.16-5.427-5.16H5.969c-2.801,0-5.105,1.723-5.427,5.161C0.517,14.458,0.5,14.57,0.5,14.688v12c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-11.5h1v13v19c0,1.104,0.896,2,2,2s2-0.896,2-2v-19h2v19c0,1.104,0.896,2,2,2s2-0.896,2-2v-19v-13h1v11.5c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-12C18.5,14.57,18.483,14.458,18.458,14.348z" ></P></g></V></T>',
t.PictoFigure4='<T><T.R><s K="ratio">0.40466</s></T.R><V VW="20.107" VH="49.688"><g><P S="{B S}" F="{B F}" Reuse="true" D="M5.5,0.5B6.5,0.5,8,8,0,360M20.556,24.095l-2.523-9.419c-0.217-3.074-2.36-5.488-4.979-5.488h-5c-2.619,0-4.764,2.416-4.979,5.492l-2.523,9.415c-0.214,0.801,0.262,1.623,1.061,1.838c0.801,0.214,1.623-0.261,1.838-1.062l2.595-9.684h0.759l-4.75,19h5v14.5c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-14.5h1v14.5c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-14.5h5l-4.75-19h0.759l2.596,9.684c0.214,0.801,1.037,1.275,1.837,1.062S20.771,24.896,20.556,24.095z" ></P></g></V></T>',
t.PictoFigure5='<T><T.R><s K="ratio">0.54166</s></T.R><V VW="13" VH="23"><g><P S="{B S}" F="{B F}"  Reuse="true" D="M6.916,0.5c1.105,0,2,0.896,2,2c0,1.007-0.745,1.841-1.713,1.979C7.107,4.493,7.014,4.5,6.916,4.5c-0.102,0-0.202-0.008-0.3-0.021c-0.963-0.146-1.7-0.977-1.7-1.979C4.916,1.396,5.811,0.5,6.916,0.5M13.432,10.837l-2.604-5.876C10.643,4.549,10.064,4.5,9.729,4.5c-0.334,0-4.863,0-5.185,0c-0.32,0-0.82,0.051-1.009,0.418L0.59,10.624c-0.208,0.401-0.042,0.897,0.368,1.101l0.343,0.172c0.412,0.201,0.914,0.043,1.12-0.358L4.004,8.48v5.207v9c0,0.449,0.373,0.812,0.835,0.812h0.384c0.461,0,0.833-0.363,0.833-0.812L7.082,14.5l1.025,8.188c0,0.449,0.373,0.812,0.834,0.812h0.386c0.461,0,0.834-0.363,0.834-0.812v-9V8.52l1.39,3.114c0.182,0.412,0.674,0.601,1.096,0.421l0.354-0.146C13.421,11.727,13.613,11.249,13.432,10.837z"/></g></V></T>',
t.PictoHome1='<T><T.R><s K="ratio">1.09090</s></T.R><V VW="24" VH="22"><g><P S="{B S}" F="{B F}" Reuse="true" D="M24.318,10.758c0.102,0.097,0.161,0.217,0.177,0.361c0.019,0.143-0.016,0.28-0.102,0.4l-0.575,0.744c-0.084,0.132-0.209,0.195-0.369,0.195h-0.828c-0.136,0-0.245-0.04-0.32-0.114l-9.48-8.535c-0.214-0.183-0.425-0.183-0.639,0l-9.48,8.535c-0.068,0.074-0.178,0.114-0.32,0.114h-0.83c-0.151,0-0.276-0.063-0.37-0.195L0.607,11.52c-0.086-0.115-0.119-0.241-0.104-0.389c0.018-0.144,0.078-0.269,0.18-0.373l11.063-9.966C11.979,0.609,12.229,0.506,12.5,0.5c0.281,0,0.531,0.097,0.754,0.292l3.062,2.756V2.115c0-0.154,0.049-0.281,0.145-0.389c0.1-0.109,0.217-0.161,0.352-0.161h2.846c0.136,0,0.25,0.052,0.338,0.161c0.09,0.108,0.137,0.235,0.137,0.389V7L24.318,10.758L24.318,10.758z M21.101,12.7v8.729c0,0.31-0.091,0.567-0.273,0.768C20.643,22.396,20.413,22.5,20.133,22.5h-5.387v-6.994h-4.49V22.5H4.869c-0.281,0-0.513-0.104-0.695-0.303c-0.182-0.201-0.275-0.458-0.275-0.768V12.7L12.5,4.934L21.101,12.7z" ></P></g></V></T>',
t.PictoCurrency1='<T><T.R><s K="ratio">1</s></T.R><V VW="24" VH="24"><g><P S="{B S}" F="{B F}" Reuse="true" D="M12.5,0.5C5.873,0.5,0.5,5.873,0.5,12.5s5.373,12,12,12c6.629,0,12-5.373,12-12S19.129,0.5,12.5,0.5L12.5,0.5z M15.772,17.133c-0.591,0.662-1.442,1.052-2.558,1.169V20h-1.421v-1.689c-1.858-0.19-3.009-1.271-3.452-3.24l2.197-0.573c0.203,1.238,0.877,1.856,2.021,1.856c0.534,0,0.93-0.132,1.182-0.397s0.378-0.584,0.378-0.959c0-0.388-0.126-0.683-0.378-0.882c-0.252-0.201-0.812-0.454-1.682-0.762c-0.781-0.271-1.392-0.538-1.831-0.804c-0.439-0.264-0.797-0.634-1.071-1.11c-0.273-0.478-0.411-1.034-0.411-1.667c0-0.831,0.246-1.579,0.735-2.244c0.489-0.664,1.26-1.069,2.312-1.217V5h1.421v1.311c1.588,0.19,2.616,1.088,3.084,2.695l-1.957,0.803c-0.383-1.102-0.972-1.652-1.771-1.652c-0.401,0-0.724,0.123-0.965,0.369c-0.244,0.246-0.365,0.545-0.365,0.895c0,0.357,0.117,0.631,0.352,0.823c0.232,0.19,0.735,0.426,1.503,0.709c0.844,0.308,1.506,0.599,1.985,0.873c0.48,0.274,0.862,0.653,1.149,1.135c0.286,0.483,0.429,1.047,0.429,1.693C16.658,15.646,16.363,16.473,15.772,17.133L15.772,17.133z M15.772,17.133Z" ></P></g></V></T>',
t.PictoCar1='<T><T.R><s K="ratio">2</s></T.R><V VW="24" VH="12"><g><P S="{B S}" F="{B F}" Reuse="true" D="M0.625,9.475c-0.762,0-0.77-3.611-0.334-4.826c0.332-0.931,2.222-0.653,2.334-0.956C3.273,1.956,5.145,0,7.354,0c1.935,0,0.963,0,3.851,0c2.308,0,4.817,2.627,7.273,3.765h0.447c2.937,0.049,4.195,1.335,4.618,2.55c0.047,0.137,0.35,0.264,0.378,0.396c0.207,0.958-0.037,2.743-0.248,2.763h-1.24v-0.02c0-1.729-1.332-3.134-2.971-3.134c-1.642,0-2.971,1.405-2.971,3.134v0.02H7.609v-0.02c0.018-1.766-1.368-3.134-2.971-3.134c-1.642,0-2.974,1.405-2.974,3.134v0.02H0.861H0.625L0.625,9.475z M4.638,8.213c-0.652,0-1.183,0.559-1.183,1.245c0,0.688,0.53,1.245,1.183,1.245c0.65,0,1.18-0.557,1.18-1.245C5.818,8.772,5.289,8.213,4.638,8.213L4.638,8.213z M4.638,6.913c-1.331,0-2.412,1.138-2.412,2.545C2.226,10.863,3.307,12,4.638,12c1.332,0,2.41-1.137,2.41-2.542C7.048,8.05,5.97,6.913,4.638,6.913L4.638,6.913z M19.462,8.213c-0.653,0-1.18,0.559-1.18,1.245c0,0.688,0.527,1.245,1.18,1.245c0.65,0,1.18-0.557,1.18-1.245C20.642,8.772,20.112,8.213,19.462,8.213L19.462,8.213z M19.462,6.913c-1.332,0-2.412,1.138-2.412,2.545c0,1.405,1.081,2.542,2.412,2.542s2.41-1.137,2.41-2.542C21.872,8.05,20.793,6.913,19.462,6.913L19.462,6.913z M4.403,3.178c-0.068,0.124-0.068,0.268,0,0.391c0.068,0.124,0.186,0.198,0.321,0.198h10.602c0.167,0,0.308-0.113,0.357-0.283c0.044-0.168-0.018-0.342-0.156-0.438c-0.102-0.069-0.204-0.138-0.306-0.207c-1.128-0.768-2.914-2.038-4.294-2.038c-1.718,0-1.188,0-2.906,0C6.314,0.801,5.163,1.798,4.403,3.178z" ></P></g></V></T>')})();
