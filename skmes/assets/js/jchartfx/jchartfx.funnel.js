(function(){var z={Version:"7.6.6537.25476"},k,l;"undefined"!==typeof window?(k=window.sfx,l=window.cfx):(k=require("./jchartfx.system.js"),l=k.cfx,module.exports=z);l.funnel=z;var A=function(l,b){this.b=this.c=0;l.x==b.x?(this.b=l.x,this.c=k.D.e):(this.b=(b.y-l.y)/(b.x-l.x),this.c=b.y-this.b*b.x)};A.prototype={a:function(l){return 0==this.b?0:k.D.h(this.c)?this.b:(l-this.c)/this.b}};var x=function b(){b._ic();this.r=null;this.j=!1;this.a=null;this.h=0;this.x=this.e=this.f=null;this.b=this.t=this.c=
this.u=this.d=0;this._0_1()};z.Funnel=x;x.prototype={_0_1:function(){this.n=-1;this.q=5;this.i=30;this.m=10;this.o=this.g=!1;this.p=(new l.Line)._01_2(9);this.E();return this},getConic:function(){return this.j},setConic:function(b){this.j=b;this.k()},getFaces:function(){return 0==this.h?4:this.h},setFaces:function(b){this.h=k.a.o(b,3);this.k()},getLabelInside:function(){return this.g},setLabelInside:function(b){this.g=b;this.k()},getLabelLine:function(){return this.p},getLabelLineAsSeries:function(){return this.o},
setLabelLineAsSeries:function(b){this.o=b;this.k()},getSeparation:function(){return-1!=this.n?this.n:this.q},setSeparation:function(b){this.n=b;this.k()},getTemplate:function(){return null==this.a?"":this.a.t},setTemplate:function(b){this.x=b;null==b?this.a=null:(null==this.a&&(this.a=(new l._Zt)._0_Zt()),this.a.sw(b));this.C()},getTipHeight:function(){return this.i},setTipHeight:function(b){this.i=b},getTipWidth:function(){return this.m},setTipWidth:function(b){this.m=b},ic2:function(b,c,a,f){switch(c){case 11:return this.z(a);
case 12:return!0;case 18:return 1}return null},ic3:function(b){return 1},ic4:function(b){return 142622977},ic5:function(b,c,a){b.a=1;b.b=0;if(b=a.h(256))a.bm=!0;c=a.a.d.iaO();var f=a.n._nc();f.w-=a.a.q;f.y+=a.a.q;f.h-=a.a.q;if(a.b.a.a&&!this.g){for(var g=0,e=0;e<c;e++){a.M=a.ab.getItem(a.d,e);var d=a.b7(),d=a.c.idY(d,a.L).w,g=k.a.o(g,d)}g+=8;2!=a.b.a.f&&(f.x+=g);f.w-=g}var g=f.h,d=f.w,w=this.getSeparation(),m=983040|a.b.m;b||(m|=134217728);0!=w&&(m|=3145728);var h=0,n=0,q=0,e=0,h=-g,n=-1,q=f.c(),
e=f.y,t=new l.a_,u=new l.a_;t.b=f.x;t.a=e+n*w;t.c=0;u.b=f.g();u.a=q-n*w;u.c=a.a.e;var p=~~((f.g()+f.x)/2);90<a.f.ib7()?(a.z=-1,a.o=c-1,a.e=a.o,a.q=0):(a.z=1,a.o=0,a.e=a.o,a.q=c-1);var r=0,v=0,y=a.U,x=a.af;if(x){for(e=y=0;e<c;e++)a.aK(a.d,e,!1),r=a.ab.getItem(a.d,e)*a.a2,y+=r;if(0==y)return}a.bX=y;this.F(a,f);for(e=a.bF=0;e<c;e++){a.ah();if(x){if(0==a.a2){a.ag(0,1);continue}a.M*=a.a2;v+=a.M}else v=a.F;a.a1=v;if(0!=a.M&&1E108!=a.M){0>a.z?(r=g-v/y*g,u.a=t.a-n*w,t.a=q+n*r):(r=v/y*g,t.a=u.a+n*w,u.a=q+
n*r);var r=f.y-u.a,z=0;a.h(33554432)&&(z|=1);a.aK(a.d,a.e,!1);a.V(!0);a.aA(a.d,a.e);var A=m;e==c-1&&(A|=3145728);this.A(a.c,t._nc(),u,z,h,r,a,b,A);r=a.M/y;a.b.a.a&&this.B(a,d,g,t,u,p,q,r,f);a.bF=v}a.ag(0,1)}a.R-=c-1;a.e=a.q;null!=this.a&&this.a._dispose1(!1)},ieP:function(b,c){var a=new k._p1(this.h);c.ie4(a,"Faces",0);this.h=a.a;a.a=this.n;c.ie4(a,"Separation",-1);this.n=a.a;a.a=this.i;c.ie6(a,"TipHeight",30);this.i=a.a;a.a=this.m;c.ie6(a,"TipWidth",10);this.m=a.a;a.a=this.x;c.ieY(a,"Template");
this.x=a.a;a.a=this.j;c.ie7(a,"Conic",!1);this.j=a.a;a.a=this.g;c.ie7(a,"LabelInside",!1);this.g=a.a;a.a=this.o;c.ie7(a,"LabelLineAsSeries",!1);this.o=a.a},ifb:function(b){this.r=b;this.p.ifb(this.r)},F:function(b,c){var a=~~((c.x+c.g())/2),f=this.m*c.w/100;this.d=a-f/2;this.c=a+f/2;this.u=(c.h-this.getSeparation()*(b.a.d.iaO()-1))*this.i/100;this.b=c.c()-this.u;this.t=b.bX*this.i/100;a=c.y;this.f=new A(new k.e(c.x,a),new k.e(this.d,this.b));this.e=new A(new k.e(c.g(),a),new k.e(this.c,this.b))},
E:function(){if(void 0!=l._Zt){var b=l.eU.i("Funnel",!0);null!=b&&this.setTemplate(b)}},D:function(b,c,a){var f=!1,g=a[0].y,e=a[2].y,d=a;if(c.bF<this.t||0==c.bX){if(g<this.b&&a[2].x==a[3].x)return d=k.e._ca(6),d[0]._i1(this.e.a(g),g),d[1]._i1(this.f.a(g),g),d[2]._i1(this.f.a(this.b),this.b),d[3]._i1(d[2].x,e),d[5]._i1(this.e.a(this.b),this.b),d[4]._i1(d[5].x,e),b.a=1,d;a[0]._i1(this.d,g);a[1]._i1(this.c,g);f=!0}c.a1<this.t?(a[2]._i1(this.c,e),a[3]._i1(this.d,e),b.a=2):f&&this.b<e?(d=k.e._ca(6),d[0]._i1(this.e.a(g),
g),d[1]._i1(this.f.a(g),g),d[2]._i1(this.d,this.b),d[3]._i1(this.d,e),d[4]._i1(this.c,e),d[5]._i1(this.c,this.b),b.a=1):(a[0]._i1(this.e.a(g),g),a[1]._i1(this.f.a(g),g),a[2]._i1(this.f.a(e),e),a[3]._i1(this.e.a(e),e));return d},C:function(){this.q=5;if(null!=this.a){var b=this.a.k;null!=b&&(b=b.a("cfxDefSeparation"),b=k.TD(b,k.b),null!=b&&(this.q=k.u.e(b)))}},B:function(b,c,a,f,g,e,d,w,m){if(!b.af){var h=new l.a_,n=b.b.a;w=n.f;n=n.d;b.h(256)&&(w=0);switch(n){case 0:h.a=g.a;break;case 2:h.a=f.a;break;
default:h.a=~~((f.a+g.a)/2)}f=b.b7();this.g?1!=w?(m=x.l(h.a-d,~~(c/2),a),h.b=0==w?e-m:e+m,h.b=2==w?h.b-~~(b.aS/2):h.b+~~(b.aS/2)):h.b=e:(c=e=0,2==w?(h.b=m.g(),c=-2,e=h.a>this.b?this.c:this.e.a(h.a),e+=4,w=0):(h.b=m.x,c=2,e=h.a>this.b?this.d:this.f.a(h.a),e-=4,w=2),0!=this.p.d?(m=k.m.b,this.o&&(m=b.v.d()),m=this.p.c(m),b.c.idv(m,e,h.a,h.b+c,h.a)):h.b=e,n=1);h.c=~~(b.a.e/2);h=b.f.icn(h,0);f=b.a_(b.j,f);b.bN(f,h._nc(),w,n,this.g,0)}},A:function(b,c,a,f,g,e,d,w,m){var h=null,n=null,q=n=null,t=0,u=0,p=
0,r=0,v=0,q=h=t=0,r=new l.a_;new l.a_;r._cf(c);n=l.a_._ca(4);q=l.a_._ca(4);l.a_._ca(4);p=~~((c.b+a.b)/2);r=~~((c.c+a.c)/2);v=a.a-c.a;t=a.b-c.b;h=a.c-c.c;t=~~(t/2);u=~~(h/2);h=q;if(0!=g){var y=q=0,q=x.l(e,t,g),y=x.l(e,u,g),z=new k._p1(0);x.w(z,4,p,a.a,r,t-q,u-y,n,-1);q=x.l(e+v,t,g);y=x.l(e+v,u,g);x.w(z,4,p,c.a,r,t-q,u-y,h,-1)}q=4;p=null;0!=g&&(p=k.e._ca(q),p[0].x=n[1].b,p[0].y=a.a,p[1].x=n[3].b,p[1].y=a.a,p[2].y=c.a,p[2].x=h[3].b,p[3].x=h[1].b,p[3].y=c.a);if(a.a!=c.a)if(q=new k._p1(0),p=this.D(q,d,
p),v=q.a,q=new k.d,n=null,w)this.j||0!=(d.aG&4)||(v=0),1==v&&(c.a=p[2].y),2!=v&&(this.j?d.f.ica(d.c,c,a,d.x,d.v,null,m,f,g,e,this.h):d.f.icp(d.c,c,a,d.x,d.v,null,m,f,g,e,this.h)),0!=v&&(b=(a.b-c.b)/2*(g+this.u)/g,q=c.b+b,c=a.b-b,a=k.a.d(c-q)/2,b=(new l.a_)._01a_(q,p[2==v?0:2].y,r-a),c=(new l.a_)._01a_(c,p[2==v?3:4].y,r+a),this.j?d.f.icc(d.c,b,c,d.x,d.v,null,m,f):d.f.icb(d.c,b,c,d.x,d.v,null,m,f,this.h));else if(null!=this.a){f=this.a.id().L.A;m=f.length;for(r=0;r<m;r++)switch(b=f[r],b.c){case "P":case "PointsPolygon":b.sa(p);
break;case "X":b.sa(k.a.p(c.b,a.b));break;case "W":b.sa(k.a.d(a.b-c.b));break;case "Y":b.sa(k.a.p(c.a,a.a));break;case "H":b.sa(k.a.d(a.a-c.a));break;case "G":case "Geometry":null==n&&(n=new k.aA,n.z(p));b.sa(n);break;default:this.a.m(b,d,this,q)}c=new k.d;this.a.r(d.c,c,1,0)}else b.idR(d.x,p),b.idy(d.v,p)},k:function(){null!=this.r&&this.r.iai(16777248)},z:function(b){b=b.a;0==b.c&&(b.c=1);0==b.d&&(b.d=1);return null}};x.l=function(b,c,a){return~~(b*c/a)};x.w=function(b,c,a,f,g,e,d,l,m){var h=m=
0,n=0,q=0,t=0,u=0,p=0;c=k.a.o(k.a.d(c),2);c=k.a.p(c,4);p=6.28318530717959/c;q=k.a.u(p);t=k.a.i(p);h=1;for(m=n=0;m<c;m++)l[m].a=f,l[m].b=a+k.a.k(e*n+.5),l[m].c=g+k.a.k(d*h+.5),u=h*t+n*q,n=n*t-h*q,h=u;b.a=p;return c};x._dt("funnel.Funnel",k.SA,0,l.ic1,l.ieO,l.ifa);void 0!==l.UserInterface&&l.UserInterface.prototype.galleryMap["1"].push("=funnel.Funnel,Funnel")})();