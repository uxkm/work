(function(){var e,f;"undefined"!==typeof window?(e=window.sfx,f=window.cfx):(e=require("./jchartfx.system.js"),f=e.cfx);f.coreVector3dVersion="7.6.6537.25476";f.Shadow={None:0,Fixed:1,Realistic:2};var O=function R(){R._ic();this.f=!1;this.a=this.b=this.d=this.e=0};f.bA=O;O.prototype={getStepStyle:function(){return this.a},setStepStyle:function(e){this.a=e},ic2:function(e,f,u,k){switch(f){case 11:return O.c(u,k,this.b);case 18:return 0}return null},ic3:function(e){return 1},ic4:function(e){var f=5734;
8==e&&(f=16782950);return f},ic5:function(e,w,u){var k=w=0;w=u.m.b;k=u.m.a;u.e==u.o&&(this.f=!1);!u.B||0!=u.D&&1==u.b.e||this.g(u,w,k,this.e,this.d);f.bQ.r(u,this.e,this.d,w,k,!u.h(256));u.T||(this.e=w,this.d=k,this.f=!0);e.a=0;e.b=1},g:function(e,w,u,k,b){this.f&&(e.aW(e.d,e.e-1,!0),8==e.b.e?w<k?0==this.a?(b!=u&&0==(e.am&8)&&f.bQ.e(e,k,u,k,b),k!=w&&0==(e.D&3)&&f.bQ.e(e,w,u,k,u)):(k!=w&&0==(e.D&3)&&f.bQ.e(e,w,b,k,b),b!=u&&0==(e.am&8)&&f.bQ.e(e,w,u,w,b)):0==this.a?(k!=w&&0==(e.am&3)&&f.bQ.e(e,w,b,
k,b),b!=u&&0==(e.D&4)&&f.bQ.e(e,w,u,w,b)):(b!=u&&0==(e.D&4)&&f.bQ.e(e,k,u,k,b),k!=w&&0==(e.am&3)&&f.bQ.e(e,w,u,k,u)):f.bQ.e(e,w,u,k,b))}};O.c=function(f,w,u){f=f.a;var k=0,b=0;switch(u){case 0:f.b=1;k=4096;break;case 1:k=2;break;case 2:b=k=f.b=2}0==f.c&&(f.c=k);0==f.a&&(f.a=b);if(2==u){u=e.D.c;k=e.D.d;for(b=w.t;;){for(var a=w.o;a<=w.q;a++){var c=w.ab.getItem(b,a);1E108!=c&&(u=e.a.p(u,c),k=e.a.o(k,c))}if(b==w.r)break;b+=w.p}w=w.j;b=0;2==f.a?b=w.t-u:1==f.a?b=k-w.q:(w=(w.t+w.q)/2,b=e.a.o(k-w,w-u));f.i=
b}return null};O._dt("GL",e.SA,0,f.ic1);var Q=function w(){w._ic();this.g=this.h=null;this.q=!1;this.l=this.k=this.f=this.m=0;this.j=this.i=this.d=null;this.b=0;this.a=null;this.u=this.v=0;this.e=2;this.n=0};f.bG=Q;Q.prototype={r:function(f,u){if(1>=e.a.d(this.b-this.k))return!1;this.k!=this.b&&(this.h.Si(u?1:0),this.h.Si(this.l),this.h.Si(this.k),this.h.Si(this.b));return!0},E:function(f){var u=f.a.i;f.h(256)||f.c.idf();null==this.h&&(this.h=new e.X);u+=2*this.e;if(null==this.a||this.a.length!=u)this.a=
e.e._ca(u),this.d=Array(u),this.j=Array(u),this.i=Array(u)},D:function(e,f){for(var k=0,b=0,a=0,k=e+1;k<f;k++)this.d[k]=2*(this.a[k+1].x-this.a[k-1].x),0==this.d[k]&&(this.d[k]=1);for(k=e+1;k<f;k++)b=this.c(k),0==b&&(b=1),a=this.c(k-1),0==a&&(a=1),this.j[k]=6*((this.a[k+1].y-this.a[k].y)/b-(this.a[k].y-this.a[k-1].y)/a);this.i[e]=0;this.i[f]=0;for(k=e+1;k<f-1;k++)this.j[k+1]-=this.j[k]*this.c(k)/this.d[k],this.d[k+1]-=this.c(k)*this.c(k)/this.d[k];for(k=f-1;k>e;k--)this.i[k]=(this.j[k]-this.c(k)*
this.i[k+1])/this.d[k]},ic2:function(e,f,k,b){switch(f){case 11:return O.c(k,b,this.n);case 18:return 0}return null},ic3:function(e){return 1},ic4:function(e){return 6==e?1054278:1054220},ic5:function(e,u,k){var b=u=0;e.a=0;e.b=1;k.aU&&(this.E(k),this.t(),this.l=k.o);u=k.m.b;b=k.m.a;this.q?(this.f<this.g.length&&this.g[this.f+1]==k.e-k.z&&(this.A(k,this.f,this.f+4),this.f+=4),f.bQ.r(k,this.v,this.u,k.m.b,k.m.a,!k.h(256)&&6==k.b.e),1.79769E308!=k.w&&this.b++,k.e==k.q&&this.t(),this.v=u,this.u=b):1.79769E308!=
k.w&&(e=!0,0!=k.aw&&(b=!1,k.T?(b=this.r(k,!0),e=!1):b=!0,b&&(this.l=k.e,this.k=this.b)),b=0!=(k.g&48),0!=(k.u&8)&&0!=(k.g&4352)&&(b=!0),b&&this.b!=this.e&&e&&this.r(k,!1)&&(this.l=k.e-k.z,this.k=this.b-1),e&&(this.a[this.b].x=u,this.a[this.b].y=k.H,this.m=this.b,this.b++),k.R++,k.e==k.q&&(this.r(k,!0),this.q=!0,this.b=this.e,k.e=k.o-k.z,this.l=k.o,this.C(k)),this.f=0)},ifb:function(e){},C:function(f){var u=this.e,k=this.w(f,f.o,this.e,-1),b=u-k,a=this.a[b]._nc();for(b--;0<=b;b--)this.a[b]._cf(a);
f=this.w(f,f.q,this.m,1);b=this.m+f;if(b<this.a.length)for(a._cf(this.a[b]),b++;b<this.a.length;b++)this.a[b]._cf(a);this.D(u-k,this.m+f);this.g=this.h.g(e.V.A(e.u))},B:function(e,f){var k=0,b=0,b=k=0,b=this.c(f);0==b&&(b=1);k=(e-this.a[f].x)/b;b=k*this.a[f+1].y+(1-k)*this.a[f].y;k=this.c(f)*this.c(f)*(Q.x(k)*this.i[f+1]+Q.x(1-k)*this.i[f])/6;return b+k},w:function(e,u,k,b){for(var a=0;a<this.e;){u+=b*e.z;if(0>u||u>=e.a.k)break;var c=e.a.d.f.getItem(e.d,u);f.df.i(c)||(k+=b,this.a[k].y=e.j.ai(e.a,
c),this.a[k].x=e.bI(e.d,u),a++)}return a},A:function(f,u,k){null!=f.aq&&f.c.sidg(f.aq);var b=0,a=0,c=0,c=0;for(k=e.a.p(this.g.length,k);u<k&&(u++,a=this.g[u++],b=this.g[u++],c=this.g[u++],c=e.a.d(c-b)-1,!(1<=c)||this.z(f,b,c,a)););null!=f.aq&&f.c.sidg(f.aM)},z:function(f,u,k,b){b=0;b=this.a.length;if(u>=b)return!0;k=e.a.p(b-u-1,k);for(b=0;b<k;b++,u++)this.y(f,u,b,k,this.a[u].x,this.a[u].y,this.a[u+1].x,this.a[u+1].y);return!0},y:function(w,u,k,b,a,c,d,q){var h=0,g=0;if(!(a*w.a.m<w.at*w.a.m&&d*w.a.m<
w.at*w.a.m||a*w.a.m>w.au*w.a.m&&d*w.a.m>w.au*w.a.m)){var n=w.c,l=w.f,p=w.m.c,m=p,v=new f.a_;l.ich(0,0,-100,v)?m+=w.W:p+=w.W;var v=d,t=0,F=0;a>d?(h=new e._p2(a,d),f.bQ.b(h),a=h.a,d=h.b,h.Y(c,q),f.bQ.b(h),c=h.a,F=524288):F=262144;k!=b-1&&(F=0);19==w.b.e?t=20119552:(t=19922944,F=0);k=new f.a_;b=new f.a_;k.c=p;b.c=m;g=c;q=!1;for(h=a;h<d;)if(k.b=h,k.a=g,h+=6,h=e.a.p(h,d),b.b=h,g=this.B(h,u),19==w.b.e){g=e.a.p(g,w.A);g=e.a.o(g,w.J);k.a=e.a.p(k.a,w.A);k.a=e.a.o(k.a,w.J);b.a=w.ac;var y=t;if(k.b==v||b.b==
v)y|=F;l.icu(n,k,b,w.x,w.v,0!=w.D?w.aT:null,y,0,0,g-k.a)}else{b.a=g;if(q||g>w.A||g<w.J){if(g==k.a)continue;w.D=1;var A=y=0,y=(w.A-k.a)*(h-k.b)/(g-k.a)+k.b;if(y>=k.b&&y<=h)A=w.A;else if(y=(w.J-k.a)*(h-k.b)/(g-k.a)+k.b,y>=k.b&&y<=h)A=w.J;else{q=!0;continue}q?(k.b=y,k.a=A):(b.b=y,b.a=A);q=g>w.A||g<w.J}else q=!1;l.icu(n,k,b,w.x,w.v,null,t,0,k.a-b.a,b.a-k.a)}19!=w.b.e||!w.h(33554432)&&2!=u||(l.icj(n,a,w.ac,p),l.ici(n,w.v,a,c,p),l.ici(n,w.v,a,c,m))}},c:function(e){return this.a[e+1].x-this.a[e].x},t:function(){this.b=
this.e;this.q=!1;this.k=this.e;this.h.clear();this.g=null;this.f=0}};Q.x=function(e){return e*e*e-e};Q._dt("GC",e.SA,0,f.ic1,f.ieO,f.ifa);var L=function u(){u._ic();this.a=null;this.c=!1;this.b=8;this.d=0};f.bI=L;L.prototype={getIntraSeriesGap:function(){return this.b},setIntraSeriesGap:function(e){this.b=e;null!=this.a&&this.a.iai(32)},getOverlap:function(){return this.c},setOverlap:function(e){this.c=e;null!=this.a&&(e=this.a.m,e.l=e.j.ic4(e.e),this.a.iai(16777264))},ic2:function(e,k,b,a){switch(k){case 11:return this.e(b,
a);case 18:return 0}return null},ic3:function(e){return 1},ic4:function(e){var k=266288;12==e?k=4128:20==e&&(k=268701744);this.c||(k|=128);return k},ic5:function(u,k,b){var a=0,c=k=0,d=0,q=a=c=0;k=b.H;a=~~((b.ap-b.ad+1)/2);a=b.C+b.a.m*a;1<b.X?(c=a+b.a.m*f.bQ.a(b.G+1,b.ad,b.X),a+=b.a.m*f.bQ.a(b.G,b.ad,b.X),c=e.a.d(c-a),0!=this.b&&(d=c*e.a.p(this.b,100)/100,4<c&&(d=e.a.o(d,1)),a+=d,c-=2*d)):c=e.a.o(~~(b.ad/b.X),1);b.B&&(0!=b.b.c&&b.h(256)?(q=983040,q=(b.a.C?b.M==b.w:b.d==b.t)?q|3145728:q|(0<b.w*b.j.D?
1048576:2097152)):q=4128768,q|=b.b.m,d=b.ac,f.bQ.i(b,a,k,c,d,b.m.c,b.W,q));b.C=a+~~(b.a.m*c/2);b.aV();b.av=2!=b.O;!b.h(131072)&&b.h(256)||0!=b.b.c||b.a.C?(u.a=1,u.b=0):(u.a=0,u.b=1)},ifb:function(e){this.a=e},e:function(e,k){if(1==this.d){e.a.b=32;var b=new f.co(e);b.l(k.j);b.g=null;b.a=2;0==e.a.d&&(b.d=5);e.a.k=b}return null}};L._dt("GB",e.SA,0,f.ic1,f.ieO,f.ifa);var M=function k(){k._ic();this.b=null;this.c=1};f.bJ=M;M.prototype={ic2:function(e,b,a,c){switch(b){case 11:return O.c(a,c,this.c);case 18:return 0}return null},
ic3:function(e){return 1},ic4:function(e){return 267804},ic5:function(e,b,a){b=a.b.c;var c=null;0!=b||a.a.C?(null!=this.b&&this.b.length==a.a.h||this.e(a.a.h),c=this.b[a.d]):(null!=this.b&&1==this.b.length||this.e(1),c=this.b[0]);var d=a.m.b,f=a.m.a,h=a.ac,g=0,n=0,l=0;0<a.z?(n=34078720,l=67371008):(n=67371008,l=34078720);a.e==a.o&&(a.B=!1,c.c=!1,c.f=c.c,c.d=!1,c.g=c.d);var p=a.a.d.iaM();c.d&&!p&&(a.B=!1);c.c&&(c.f||a.T&&a.e==a.q)&&(!a.T&&!p||a.e==a.q)&&M.d(a,c.b,c.a,c.b,c.a,c.e,c.e,l|a.b.m);if(c.c&&
a.B&&(d!=c.b||f!=c.a||a.h(256)))if(a.e!=a.o){g=196608|a.b.m;a.h(33554432)?1.79769E308==a.w?g|=50331648:1.79769E308==c.h&&(g|=16777216,n&=-100663297):g|=16777216;if(a.e==a.o+a.z||c.g&&!p)g|=n;a.e==a.q&&(g|=l);g=0!=b?a.d==a.t?g|3145728:g|(0<=a.w*a.j.D?1048576:2097152):g|3145728;M.d(a,c.b,c.a,d,f,c.e,h,g)}else a.o==a.q&&M.d(a,d,f,d+1,f,h,h,4128768);a.T?c.f=!0:(c.b=d,c.a=f,c.e=h,c.h=a.w,c.c=!0,c.f=!1);c.g=c.d;c.d=a.T;0!=b||a.a.C?(a.D=0,e.a=1,e.b=0):(e.a=0,e.b=1)},e:function(e){this.b=Array(e);for(var b=
0;b<e;b++)this.b[b]=new S}};M.d=function(k,b,a,c,d,q,h,g){var n=new f.a_,l=new f.a_,p=0,m=0,v=null;b>c&&(m=new e._p2(b,c),f.bQ.b(m),b=m.a,c=m.b,m.Y(a,d),f.bQ.b(m),a=m.a,d=m.b,m.Y(q,h),f.bQ.b(m),q=m.a,h=m.b);n.c=k.m.c;l.c=k.m.c+k.W;v=0!=k.D?k.aT:null;k.f.ai(k.c);m=k.j.ai(k.a,k.aF);if(0!=(k.j.o&32)&&0>=k.N&&0<=k.K&&c!=b&&null==k.aB&&(a>m&&d<m||a<m&&d>m)){var t=p=0;q>m&&h<m||q<m&&h>m?(p=(h-q)/(c-b),t=q-p*b):(p=(d-a)/(c-b),t=a-p*b);p=(m-t)/p;n.b=b;n.a=a;l.b=p;l.a=m;a<m?k.f.icu(k.c,n,l,k.x,k.v,v,g,0,q-
m,m-a):k.f.icu(k.c,n,l,k.x,k.v,v,g,0,q>m?q-m:0,m-a);n.b=p;n.a=m;l.b=c;l.a=d;d>m?k.f.icu(k.c,n,l,k.x,k.v,v,g,0,m-d,h>m?h-m:0):k.f.icu(k.c,n,l,k.x,k.v,v,g,0,m-d,h-m)}else n.b=b,n.a=a,l.b=c,l.a=h,k.f.icu(k.c,n,l,k.x,k.v,v,g,16,q-h,d-a);f.bQ.r(k,b,a,c,d,!1)};M._dt("GA",e.SA,0,f.ic1);var S=function(){this.c=this.f=this.g=this.d=!1;this.e=this.a=this.b=this.h=0},C=function b(a){b._ic();this.g=this.p=this.c=this.b=this.q=this.i=null;this.V=0;this.o=this.E=!1;this.y=this.n=this.z=this.e=null;this.x=!1;this.t=
this.u=this.C=this.L=this.M=this.N=0;this.h=e._CE;this.D=new e.e(0,0);this.a=a;this.A=this.F=1};f.bW=C;C.prototype={ib7:function(){return this.a.getAngleX()},ib8:function(){return this.a.getAngleY()},ib9:function(){return 2},ib$:function(){return this.a.b},al:function(b,a,c,d,q,h,g){if(this.a.b&&h[2].y!=h[0].y){var n=~~(e.a.d(h[1].x-h[2].x)/2),l=~~(e.a.d(h[0].y-h[2].y)/2);if(0!=n&&0!=l){var p=~~((h[0].x+h[1].x)/2),m=~~((h[0].y+h[2].y)/2),v=h=0,t=!1;g?(h=(new f.a_)._01a_(0!=d?a.b+d-q:c.b,~~((a.a+c.a)/
2),~~((a.c+c.c)/2)),a=this.icn(h,0),v=a.x-p,h=m-a.y,t=1<=n*n/(h*h)):(h=(new f.a_)._01a_(~~((a.b+c.b)/2),0!=d?c.a-d+q:a.a,~~((a.c+c.c)/2)),a=this.icn(h,0),h=a.x-m,v=m-a.y,t=1<=l*l/(v*v));t?(b.a=0,b.b=360):(m=p=0,g?(m=l*e.a.v((h*h-n*n)/(h*h)),p=n*n/h*(n/l)):(m=n*e.a.v((v*v-l*l)/(v*v)),p=l*l/v,m*=l/n),p=f.bT.g(e.a.g(p,m)),p=f.bT.m(p,n,l,g),90<this.a.getAngleX()&&(p=-p),b.a-=p,b.b+=2*p)}}},Z:function(b){var a=0,a=0;0<this.a.j&&0!=this.u-this.t&&(a=this.a.j/200,a=1-(b.c-this.t)*a/(this.u-this.t),b.b*=
a,b.a*=a)},ib_:function(b,a){this.x=0!=(b.idf()&8);this.E=this.o=!1},icd:function(b){},Q:function(){null!=this.e&&(this.e=null);null!=this.n&&(this.n=null);null!=this.y&&(this.y=null);null!=this.z&&(this.z=null);null!=this.p&&(this.p=null);null!=this.g&&(this.g=null);null!=this.c&&(this.c=null);null!=this.q&&(this.q=null);null!=this.b&&(this.b=null)},ica:function(b,a,c,d,e,h,g,f,l,p,m){this.X(b,a,c,d,e,h,!0,g,f,l,p)},Y:function(b,a,c){if(0==this.a.d||2>=f.bT.f(b,a))return c;null==this.i&&(this.i=
new e.aw(3),this.i.b()[0]=0,this.i.b()[1]=1,this.i.b()[2]=0,this.i.c()[0]=0,this.i.c()[1]=.5,this.i.c()[2]=1);b=(new e.aC)._0aC(b,a,f.bQ.l(this.h),this.h);b.sj(this.i);return b},icb:function(b,a,c,d,e,h,g,f,l){this.icu(b,a._nc(),c._nc(),d,e,h,g,f,0,0)},icc:function(b,a,c,d,e,h,g,f){this.X(b,a,c,d,e,h,!1,g,f,0,0)},X:function(b,a,c,d,q,h,g,n,l,p,m){var v=0!=(l&8),t=C.ag(a,c,p,m,v,g);if(this.a.a){l=g&&(0==p||v&&p-m==c.b-a.b||!v&&p-m==c.a-a.a);var F=(null!=this.c||!this.a.a&&0!=this.a.d)&&0==(n&134217728),
y=new e.aA,A=new e.c,x=this.ah(t,v,A),B=new e.c,D=this.af(t,v,B),t=this.a.b?v?this.a.A:-this.a.getAngleY():v?112.5:-22.5,t=f.bT.m(t,~~(A.w/2),~~(A.h/2),v),J=180;g&&(g=new e._p2(t,J),this.al(g,a,c,p,m,x,v),t=g.a,J=g.b);m=new e.e(0,0);g=new e.e(0,0);x=C.aa(y,A,x,t,J,!0,m,g);p=null;if(l)y.q(D[0],D[0]);else{p=new e.e(0,0);var G=new e.e(0,0);p=C.aa(y,B,D,t+J,-J,!1,p,G)}y.E();v?this.a.b?(D=(new f.a_)._01a_(a.b,a.a,a.c),t=(new f.a_)._01a_(c.b,a.a,a.c),D=this.icn(D,1),t=this.icn(t,1),t=e.a.g(-(t.y-D.y),t.x-
D.x),D=e.a.v((g.y-m.y)*(g.y-m.y)+(g.x-m.x)*(g.x-m.x)),m.x=g.x+D*e.a.u(-t),m.y=g.y-D*e.a.i(-t)):g.x=m.x:g.y=m.y;0!=(n&983040)&&(t=this.Y(m,g,d),b.idP(t,y),null!=q&&b.idx(q,y));a=v?a.b>c.b:a.a>c.a;c=!1;y=new f.a_;c=v?this.ich(a?-100:100,0,0,y):this.ich(0,a?-100:100,0,y);v=a?1048576:2097152;0!=y.c&&(d=F?null!=h?h:this.c:d,c?0==(n&(a?2097152:1048576))||l||C.R(b,p,d,q,B):0!=(n&v)&&C.R(b,x,d,q,A))}else this.ak(b,a,c,d,q,v,g,t)},ak:function(b,a,c,d,f,h,g,n){var l=new e.e(0,0),p=new e.e(0,0);h?(l._i1(a.b,
a.a),p._i1(a.b,c.a)):(l._i1(a.b,a.a),p._i1(c.b,a.a));d=this.Y(l,p,d);g?this.icm(b,n,n.length,d,f):(a=(new e.c)._02c(e.a.p(a.b,c.b),e.a.p(a.a,c.a),e.a.d(c.b-a.b),e.a.d(c.a-a.a)),b.idT(d,a),null!=f&&b.idD(f,a))},G:function(b){this.h=b.idj()._Gv("fill",this.h,null,0);this.T(null,this.h,this.V);this.o=!1},ice:function(b,a,c,d,q,h,g,n){var l=new f.a_,p=new f.a_,m=e._PE,v=e._PE;l.b=c;l.a=d;l.c=q;m=this.icn(l,0);p.b=h;p.a=g;p.c=n;v=this.icn(p,0);b.idv(a,m.x,m.y,v.x,v.y)},ai:function(b){if(this.E){var a=
this.h,a=b.idj()._Gv("fill",a,null,0);this.e=(new e.ao)._01ao(a);this.E=!1}},ah:function(b,a,c){var d=null;a?(d=[(new f.a_)._01a_(b[0].b,b[0].a,b[0].c),(new f.a_)._01a_(b[0].b,b[0].a,b[3].c),(new f.a_)._01a_(b[0].b,b[3].a,b[0].c)],c._i2(b[0].c,b[0].a,b[3].c-b[0].c,b[3].a-b[0].a)):(d=[(new f.a_)._01a_(b[3].b,b[2].a,b[3].c),(new f.a_)._01a_(b[2].b,b[2].a,b[3].c),(new f.a_)._01a_(b[3].b,b[2].a,b[2].c)],c._i2(b[3].b,b[2].c,b[2].b-b[3].b,b[3].c-b[2].c));return this.H(d,3,0)},af:function(b,a,c){var d=null;
a?(d=[(new f.a_)._01a_(b[1].b,b[1].a,b[2].c),(new f.a_)._01a_(b[1].b,b[1].a,b[1].c),(new f.a_)._01a_(b[1].b,b[2].a,b[2].c)],c._i2(b[2].c,b[1].a,b[1].c-b[2].c,b[2].a-b[1].a)):(d=[(new f.a_)._01a_(b[0].b,b[0].a,b[1].c),(new f.a_)._01a_(b[1].b,b[0].a,b[1].c),(new f.a_)._01a_(b[0].b,b[0].a,b[0].c)],c._i2(b[0].b,b[0].c,b[1].b-b[0].b+1,e.a.d(b[1].c-b[0].c)+1));return this.H(d,3,0)},icg:function(b,a){for(var c=0,d=f.a_._ca(3),c=0;3>c;c++)d[c]._cf(b.a[c]),this.ict(d[c]);a.b=d[0].a*(d[1].c-d[2].c)+d[1].a*
(d[2].c-d[0].c)+d[2].a*(d[0].c-d[1].c);a.a=d[0].c*(d[1].b-d[2].b)+d[1].c*(d[2].b-d[0].b)+d[2].c*(d[0].b-d[1].b);a.c=d[0].b*(d[2].a-d[1].a)+d[1].b*(d[0].a-d[2].a)+d[2].b*(d[1].a-d[0].a);return 0>a.c},ich:function(b,a,c,d){this.a.b?(d.b=b,d.a=a,d.c=c,this.a.y(d),this.Z(d)):(d.b=.35355*b,d.a=.35355*a,d.c=~~(-b/2)+c-~~(3*a/4));return 0>d.c},ici:function(b,a,c,d,q){var h=new f.a_,g=e._PE;h.b=c;h.a=d;h.c=q;g=this.icn(h,0);b.idv(a,this.D.x,this.D.y,g.x,g.y);this.D._cf(g)},icj:function(b,a,c,d){b=new f.a_;
b.b=a;b.a=c;b.c=d;this.D._cf(this.icn(b,0))},ick:function(b,a,c,d,q,h,g,n,l,p,m){var v=!1;this.o&&(v=!0,this.G(b));m=null;m=f.bQ.l(this.h);var t=null;h.sb(1);var F=0!=(b.idf()&8),y=null;F?y=b.idi():v=!1;v&&(h=(new e.ao)._01ao(m));var A=c+d,x=new e._p1(c);f.bT.a(x);v=x.a;x.a=A;f.bT.a(x);var A=x.a,B=null,x=null;x=0!=this.a.d?B=(new e.aC)._02aC(a,m,this.h,0):this.b;0!=(g&4)&&(180<v||180<A||180<e.a.d(d))&&(null!=B&&(t=new e.aw(3),t.b()[0]=1,t.b()[1]=0,t.b()[2]=1,t.c()[0]=0,t.c()[1]=.5,t.c()[2]=1,B.sj(t)),
t=(new e.c)._01c(new e.e(l.x,l.y+n),l.i()),m=new e.aA,m.g(l.x-1,l.y-1,l.w+2,l.h+2,c,d),m.g(t.x-1,t.y-1,t.w+2,t.h+2,c+d,-d),m.E(),0!=(g&1)?b.idx(h,m):(b.idm(h,a.x,a.y,a.w,a.h,c,d),b.idm(h,l.x,l.y,l.w,l.h,c+d,-d)),b.idP(x,m));if(180>v||180>A||180<e.a.d(d)){null!=B&&(t=new e.aw(3),t.b()[0]=0,t.b()[1]=1,t.b()[2]=0,t.c()[0]=0,t.c()[1]=.5,t.c()[2]=1,B.sj(t));var B=(new e.c)._01c(new e.e(a.x,a.y+n),a.i()),t=1,D=!1;180<e.a.d(d)&&180>v&&180>A&&(t=2,D=!0);var J=F&&0!=t;for(J&&b.sidi(null);0!=t--;){var G=v,
z=A;D&&(1==t&&0<d||0==t&&0>d?z=0:G=180);180<G&&(G=0>d?180:0);180<z&&(z=0>d?0:180);m=new e.aA;m.g(a.x,a.y,a.w,a.h,G,z-G);m.g(B.x,B.y,B.w,B.h,z,G-z);m.E();m.sb(1);b.idP(x,m);0!=(g&1)?b.idx(h,m):(b.idm(h,a.x,a.y,a.w,a.h,G,z-G),b.idm(h,B.x,B.y,a.w,a.h,z,G-z),m=~~((a.y+a.c())/2),0!=z&&0!=G||b.idv(h,a.g(),m,a.g(),m+n+1),180!=z&&180!=G||b.idv(h,a.x,m,a.x,m+n+1))}J&&b.sidi(y)}m=C.O(b,a,c,d,h,q,g,l);if(p){F&&b.sidi(null);q=c=0;a=e.e._ca(4);g=!0;l=m.c();p=l.length;for(F=0;F<p;F++)y=l[F],0==m.d()[c]?(a[q].x=
y.x,a[q++].y=y.y):1==m.d()[c]&&g?(g=!1,a[q].x=m.c()[c-1].x,a[q++].y=m.c()[c-1].y,a[q].x=y.x,a[q++].y=y.y):0!=(m.d()[c]&128)&&(a[q].x=y.x,a[q++].y=y.y),c++;m=e.e._ca(4);if(0<d&&a[0].x+1<a[3].x||0>d&&a[0].x>a[3].x+1)m[0]._cf(a[0]),m[1]._cf(a[3]),m[2]._cf(a[3]),m[2].y+=n,m[3]._cf(a[0]),m[3].y+=n,b.idR(this.b,m),b.idy(h,m);if(0<d&&a[2].x+1<a[1].x||0>d&&a[2].x>a[1].x+1)m[0]._cf(a[1]),m[1]._cf(a[2]),m[2]._cf(a[2]),m[2].y+=n,m[3]._cf(a[1]),m[3].y+=n,b.idR(this.b,m),b.idy(h,m)}},icl:function(b,a,c,d,q,h){var g=
h=null;this.o&&this.G(b);null!=this.c?(h=new f.a_,a=new e._p1(a),this.icg(a,h),a=a.a,0<h.c?(h=this.b,g=this.n):0<=h.b?(h=this.c,g=this.y):(h=this.q,g=this.z),null==h&&(h=d,g=this.e)):(h=d,g=this.e);this.j(b,a,c,h,g,q,0)},icm:function(b,a,c,d,e){a=this.H(a,c,0);null!=d&&b.idR(d,a);null!=e&&b.idA(e,a)},j:function(b,a,c,d,f,h,g){var n=0,l=e.e._ca(c);g&=65535;for(n=0;n<c;n++)l[n]._cf(this.icn(a[n],0));null!=d&&(b.idR(d,l),null!=f&&0!=(b.idk()&1)&&(a=null,this.x&&(a=b.idi(),b.sidi(null)),b.idA(f,l),this.x&&
b.sidi(a)));switch(g){case 1:null!=this.g&&(f=e.e._ca(2),f[0]._cf(l[0]),f[1]._cf(l[1]),l[0].y<l[1].y||(f[0].d(1,1),f[1].d(1,1),b.idA(this.g,f)));break;default:null!=h&&b.idA(h,l)}},icn:function(b,a){if(!this.a.a)return new e.e(b.b,b.a);var c=b._nc();this.ict(c);return new e.e(c.b,c.a)},H:function(b,a,c){for(var d=0,f=e.e._ca(a),d=0;d<a;d++)f[d]._cf(this.icn(b[d],c));return f},ico:function(b,a,c){this.a.a&&(b=b._nc(),this.ict(b));a.x=b.b;a.y=b.a},icp:function(b,a,c,d,q,h,g,n,l,p,m){this.o&&this.G(b);
var v=null,t=null,F=v=t=null,y=0,A=0,x=0,B=!1,D=!1,J=B=0,G=0,z=0,r=0,K=A=G=y=J=0,E=0,H=0,I=z=0,N=0,P=0,I=E=0,O=new f.a_;new f.a_;new f.a_;var L=null,M=g&65535,L=0!=(n&1)?q:null,t=f.a_._ca(32),v=f.a_._ca(32),F=f.a_._ca(4),B=~~((a.b+c.b)/2),J=~~((a.c+c.c)/2),D=a.a>c.a,G=c.a-a.a,z=c.b-a.b,r=c.c-a.c,y=~~(z/2),A=~~(r/2),r=!0,I=0==m?4:m;if(0!=l)N=m=0,m=f.bQ.a(p,y,l),N=f.bQ.a(p,A,l),P=new e._p1(x),z=C.I(P,I,B,c.a,J,y-m,A-N,t,-1),x=P.a,m=f.bQ.a(p+G,y,l),N=f.bQ.a(p+G,A,l),r=l-p==c.a-a.a,r||(C.I(P,I,B,a.a,
J,y-m,A-N,v,-1),x=P.a);else{p=new e._p1(x);z=C.I(p,I,B,c.a,J,y,A,t,c.b);x=p.a;for(E=0;E<I;E++)v[E]._cf(t[E]);for(E=0;E<I;E++)v[E].a=a.a}E=~~((z-1)/2);this.a.b&&(E+=e.a.k(f.bT.b(this.a.getAngleY())/x+.5),E%=z);B=(p=this.a.a)&&0!=this.a.d&&0==(n&32);m=this.h;B?(J=m.r,y=m.g,G=m.b,A=m.a,P=z*(r||0!=l?3:2)):(J=y=G=0,A=255,P=1);I=~~(z/2);N=r?3:4;x=null;p||0==l&&!r||(x=e.e._ca(N),x[0].x=t[1].b,x[0].y=c.a,x[1].x=t[3].b,x[1].y=c.a,x[2].y=a.a,r?x[2].x=~~((a.b+c.b)/2):(x[2].x=v[3].b,x[3].x=v[1].b,x[3].y=a.a));
if(c.a!=a.a)for(K=0;K<z;K++)H=(E+1)%z,D&&(l=new e._p2(E,H),f.bQ.b(l),E=l.a,H=l.b),C.ae(r,F,a,c,t,v,E,H),F=new e._p1(F),l=this.icg(F,O),F=F.a,l&&(B?(m=null,m=C.W(K,A,J,y,G,z,I,P),l=new e.ar(m),m=(new e.ao)._01ao(m),this.j(b,F,N,l,m,L,0)):(m=null==L?(new e.ao)._0ao(d):L,this.icm(b,F,N,d,m))),D||(E=H);p||0!=(n&1)||0==M&&!e.m.p(q.d(),e.m.g())||null==x||(a=null,1==M?(m=C.W(~~(z/4),A,J,y,G,z,I,P),a=f.bQ.ab(q,m,M)):a=q,b.idv(q,x[0].x,x[0].y,x[N-1].x,x[N-1].y),0==(g&1048576)||r||b.idv(q,x[2].x,x[2].y,x[3].x,
x[3].y),b.idv(a,x[1].x,x[1].y,x[2].x,x[2].y),0!=(g&2097152)&&b.idv(a,x[0].x,x[0].y,x[1].x,x[1].y));p&&(d=B?null!=h?h:this.c:d,q=D?2097152:1048576,h=D?1048576:2097152,M=!1,(M=this.ich(0,D?-100:100,0,O))?0==(g&q)||r||this.icm(b,v,z,d,L):0!=(g&h)&&this.icm(b,t,z,d,L))},ad:function(b){b.b*=this.F;b.a*=this.A},icq:function(b,a,c,d){this.h=c;this.Q();if(this.x&&(this.E=!0,this.a.a)){this.o=!0;this.V=d;return}this.T(a,c,d)},T:function(b,a,c){this.e=null!=b?f.bQ.j(b):(new e.ao)._01ao(a);if(this.a.a)if(0==
this.a.d)this.b=new e.ar(a),this.n=f.bQ.j(this.b);else{if(1!=this.a.d&&this.a.b){b=new f.a_;var d=c=0,q=0,h=0,d=a.r,q=a.g,h=a.b;c=a.a;this.ich(50,0,0,b);b.c=e.a.d(b.c)+50;this.b=new e.ar(e.m.l(c,~~(d*b.c/100),~~(q*b.c/100),~~(h*b.c/100)));this.ich(0,-50,0,b);b.c=e.a.d(b.c)+50;this.c=new e.ar(e.m.l(c,~~(d*b.c/100),~~(q*b.c/100),~~(h*b.c/100)));this.ich(0,0,-50,b);b.c=e.a.d(b.c)+50;this.q=new e.ar(e.m.l(c,~~(d*b.c/100),~~(q*b.c/100),~~(h*b.c/100)));this.z=f.bQ.j(this.q)}else this.b=new e.ar(f.bQ.l(a)),
this.c=new e.ar(f.bQ.K(a));this.n=f.bQ.j(this.b);this.y=f.bQ.j(this.c)}else 1==c&&(this.p=(new e.ao)._01ao(f.bQ.K(a)),this.g=(new e.ao)._01ao(f.bQ.J(a)))},icr:function(b,a,c,d,q,h,g){b=f.a_._ca(8);var n=g=c=a=0,l=0,p=0,m=0;this.F=this.A=1;this.M=this.C=0;this.N=~~((d.g()+d.x)/2);this.L=~~((d.y+d.c())/2);b[1].b=d.x;b[0].b=b[1].b;b[3].a=d.y;b[2].a=b[3].a;b[1].a=b[2].a;b[0].a=b[1].a;b[3].c=q;b[0].c=b[3].c;b[2].c=h;b[1].c=b[2].c;b[3].b=d.g();b[2].b=b[3].b;for(l=4;8>l;l++)b[l].b=b[l-4].b,b[l].c=b[l-4].c,
b[l].a=d.c();this.ict(b[0]);this.t=this.u=b[0].c;a=g=b[0].b;c=n=b[0].a;for(l=1;8>l;l++)this.ict(b[l]),b[l].b>g?g=b[l].b:b[l].b<a&&(a=b[l].b),b[l].a>n?n=b[l].a:b[l].a<c&&(c=b[l].a),b[l].c>this.u?this.u=b[l].c:b[l].c<this.t&&(this.t=b[l].c);a!=g&&(p=d.w/(g-a));c!=n&&(m=d.h/(n-c));p=e.a.p(p,1);m=e.a.p(m,1);g*=p;c*=m;n*=m;this.M=~~((d.x-p*a+d.g()-g)/2);this.C=~~((d.c()-n+d.y-c)/2);this.F=p;this.A=m},ict:function(b){if(this.a.b)b.b-=this.N,b.a=this.L-b.a,this.a.y(b),this.Z(b),b.b+=this.N,b.a=this.L-b.a,
this.ad(b),b.b+=this.M,b.a+=this.C;else{var a=0,a=b.c;b.c=b.c+.35355*-b.b+.35355*b.b;b.b+=.35355*a;b.a-=.35355*a}},icu:function(b,a,c,d,q,h,g,n,l,p){var m=!1,v=!1,t=null,F=null,y=null,A=null,x=null,B=null,D=null,C=null,G=null,z=null,r=f.a_._ca(4),K=new f.a_,E=new f.a_,H=0,I=z=0;0!=(n&8)&&(g=g&-3932161|g>>2&786432|g<<2&3145728);a.b>c.b&&(m=new e._p2(a.b,c.b),f.bQ.b(m),a.b=m.a,c.b=m.b);a.c>c.c&&(m=new e._p2(a.c,c.c),f.bQ.b(m),a.c=m.a,c.c=m.b);if(a.a>c.a+l||a.a+p>c.a)m=0,m=a.a,a.a=c.a+l,c.a=m+p,m=l,
l=-p,p=-m;l=c.a+l;p=a.a+p;B=x=q;m=v=!1;this.o&&this.G(b);this.x&&(B=this.n);F=this.b;G=this.n;y=this.c;C=this.y;null!=h&&(z=f.bQ.j(h),0!=(n&8)?(F=h,G=z):(y=h,C=z));A=0!=(g&16777216)?e.ao.H():B;z=a.c;I=c.c;if(a.b!=c.b){null!=this.q?(t=this.q,D=this.z):(t=d,D=this.e);r[3].b=a.b;r[0].b=r[3].b;r[2].b=c.b;r[1].b=r[2].b;r[0].a=a.a;r[1].a=p;r[2].a=c.a;r[3].a=l;if(0!=(g&65536)){for(H=0;4>H;H++)r[H].c=a.c;r=new e._p1(r);this.icg(r,K);r=r.a;0>=K.c&&this.j(b,r,4,t,D,A,g)}if(0!=(g&131072)){for(H=0;4>H;H++)r[H].c=
c.c;r=new e._p1(r);this.icg(r,K);r=r.a;0<K.c&&(this.j(b,r,4,t,D,A,g),z=c.c,I=a.c)}}q=null;q=b.idi();b.sidi(null);a.c==c.c||a.b==c.b&&a.a==p&&c.a==l||(null!=y?(t=y,D=C):(t=d,D=this.e),r[1].b=a.b,r[0].b=r[1].b,r[3].b=c.b,r[2].b=r[3].b,0!=(g&1048576)&&(r[3].c=a.c,r[0].c=r[3].c,r[2].c=c.c,r[1].c=r[2].c,r[1].a=a.a,r[0].a=r[1].a,r[3].a=p,r[2].a=r[3].a,r=new e._p1(r),h=this.icg(r,E),r=r.a,h&&(m=!0,this.j(b,r,4,t,D,A,g))),0!=(g&2097152)&&(r[3].c=c.c,r[0].c=r[3].c,r[2].c=a.c,r[1].c=r[2].c,r[1].a=l,r[0].a=
r[1].a,r[3].a=c.a,r[2].a=r[3].a,r=new e._p1(r),h=this.icg(r,E),r=r.a,h&&(v=!0,this.j(b,r,4,t,D,A,g))));A=B;if(a.c!=c.c){null!=F?(t=F,D=G):(t=d,D=this.e);r[3].c=a.c;r[0].c=r[3].c;r[2].c=c.c;r[1].c=r[2].c;if(0!=(g&262144)){for(H=0;4>H;H++)r[H].b=c.b;r[1].a=p;r[0].a=r[1].a;r[3].a=c.a;r[2].a=r[3].a;d=new e._p1(r);E=this.icg(d,E);r=d.a;E&&(this.j(b,r,4,t,D,A,g),g&=-67108865)}if(0!=(g&524288)){for(H=0;4>H;H++)r[H].b=a.b;r[1].a=a.a;r[0].a=r[1].a;r[3].a=l;r[2].a=r[3].a;E=new e._p1(r);this.icg(E,K);r=E.a;
0<K.c&&(this.j(b,r,4,t,D,A,g),g&=-33554433)}}b.sidi(q);0!=(g&16777216)&&(null!=B&&(m&&(this.icj(b,c.b,p,I),this.ici(b,B,a.b,a.a,I)),this.icj(b,c.b,p,z),this.ici(b,B,a.b,a.a,z),v&&(this.icj(b,c.b,c.a,I),this.ici(b,B,a.b,l,I)),this.icj(b,c.b,c.a,z),this.ici(b,B,a.b,l,z)),0!=(g&33554432)&&null!=x&&(K=E=d=d=E=K=0,v?(this.icj(b,a.b,l,I),this.ici(b,x,a.b,l,z)):this.icj(b,a.b+d,l+E,z),this.ici(b,x,a.b+d,a.a-K,z),m&&this.ici(b,x,a.b,a.a-K,I)),0!=(g&67108864)&&null!=B&&(v?(this.icj(b,c.b,c.a,I),this.ici(b,
B,c.b,c.a,z)):this.icj(b,c.b,c.a,z),this.ici(b,B,c.b,p,z),m&&this.ici(b,B,c.b,p,I)))}};C.aa=function(b,a,c,d,f,h,g,n){var l=null;if(2>=a.w||2>=a.h)0<d?b.t(c[0].x,c[0].y,c[1].x,c[1].y):b.t(c[1].x,c[1].y,c[0].x,c[0].y);else{var p=new e.aA;p._sT();p.e(a,d,f);l=(new e.aE)._01aE(a,c);p.I(l);b.x(p,!0)}h?(b=b.F(),g._i1(b.x,b.y),n._i1(b.g(),b.c())):(g._i1(0,0),n._i1(0,0));return l};C.P=function(b,a,c,d,f){for(var h=0,g=0,n=0,l=0,l=n=!1,p=0,n=l=!0,g=h=0;h<f;h++,g++)b[h].a>=c&&(n=!1),b[h].a<=d&&(l=!1);if(n||
l)return 0;for(g=h=0;h<f;h++)b[h].a<=d&&b[h].a>=c?(a[g].b=b[h].b,a[g].a=b[h].a,a[g].c=b[h].c,g++):(p=b[h].a>d?d:c,n=h-1,0>n&&(n=f-1),l=(h+1)%f,0!=b[h].a-b[n].a&&(a[g].b=e.i2((p-b[n].a)*(b[h].b-b[n].b),b[h].a-b[n].a)+b[n].b,a[g].a=p,a[g].c=e.i2((p-b[n].a)*(b[h].c-b[n].c),b[h].a-b[n].a)+b[n].c,(a[g].b>=b[n].b&&a[g].b<=b[h].b||a[g].b>=b[h].b&&a[g].b<=b[n].b)&&(a[g].c>=b[n].c&&a[g].c<=b[h].c||a[g].c>=b[h].c&&a[g].c<=b[n].c)&&g++),0!=b[h].a-b[l].a&&(a[g].b=e.i2((p-b[l].a)*(b[h].b-b[l].b),b[h].a-b[l].a)+
b[l].b,a[g].a=p,a[g].c=e.i2((p-b[l].a)*(b[h].c-b[l].c),b[h].a-b[l].a)+b[l].c,(a[g].b>=b[l].b&&a[g].b<=b[h].b||a[g].b>=b[h].b&&a[g].b<=b[l].b)&&(a[g].c>=b[l].c&&a[g].c<=b[h].c||a[g].c>=b[h].c&&a[g].c<=b[l].c)&&g++));return g};C.O=function(b,a,c,d,f,h,g,n){var l=new e.aA;l._sT();if(0!=(g&4)){l.e(a,c,d);l.e(n,c+d,-d);l.E();b.idP(h,l);try{0!=(g&1)?b.idx(f,l):(b.idm(f,a.x,a.y,a.w,a.h,c,d),b.idm(f,n.x,n.y,n.w,n.h,c+d,-d))}catch(p){}}else{l.y(a,c,d);b.idP(h,l);try{0!=(g&1)?b.idx(f,l):b.idm(f,a.x,a.y,a.w,
a.h,c,d)}catch(m){}}return l};C.ag=function(b,a,c,d,e,h){var g=null,n=0,l=0,p=g=0;h&&(h=e?~~((a.a-b.a)/2):~~((a.b-b.b)/2),n=~~((a.c-b.c)/2),0==c?(g=n,n=h):(l=e?a.b-b.b:a.a-b.a,g=f.bQ.a(d+l,n,c),p=f.bQ.a(d,n,c),n=f.bQ.a(d+l,h,c),l=f.bQ.a(d,h,c)));return g=e?[(new f.a_)._01a_(b.b,b.a+l,b.c+p),(new f.a_)._01a_(a.b,b.a+n,a.c-g),(new f.a_)._01a_(a.b,a.a-n,b.c+g),(new f.a_)._01a_(b.b,a.a-l,a.c-p)]:[(new f.a_)._01a_(b.b+n,b.a,b.c+g),(new f.a_)._01a_(a.b-n,b.a,a.c-g),(new f.a_)._01a_(a.b-l,a.a,b.c+p),(new f.a_)._01a_(b.b+
l,a.a,a.c-p)]};C.ae=function(b,a,c,d,e,f,g,n){b?(a[0].a=c.a,a[0].b=~~((c.b+d.b)/2),a[0].c=~~((c.c+d.c)/2),a[2].a=d.a,a[1].a=a[2].a,a[1].b=e[n].b,a[1].c=e[n].c,a[2].b=e[g].b,a[2].c=e[g].c):(a[0].a=c.a,a[1].a=d.a,a[2].a=d.a,a[3].a=c.a,a[0].b=f[n].b,a[1].b=e[n].b,a[2].b=e[g].b,a[3].b=f[g].b,a[0].c=f[n].c,a[1].c=e[n].c,a[2].c=e[g].c,a[3].c=f[g].c)};C.W=function(b,a,c,d,f,h,g,n){b=b>=g?h-b:b;return e.m.l(a,c-~~(b*c*4/n),d-~~(b*d*4/n),f-~~(b*f*4/n))};C.I=function(b,a,c,d,f,h,g,n,l){var p=0,m=0,v=0,t=v=
m=0,C=0,y=0,A=0;a=e.a.o(e.a.d(a),2);a=e.a.p(a,32);A=6.28318530717959/a;t=e.a.u(A);C=e.a.i(A);m=1;for(p=v=0;p<a;p++)n[p].a=d,n[p].b=c+e.a.k(h*v+.5),n[p].c=f+e.a.k(g*m+.5),y=m*C+v*t,v=v*C-m*t,m=y;b.a=A;if(-1!=l){m=e.u.c;v=-1;for(p=0;p<a;p++)n[p].b>m&&(v=p,m=n[p].b);if(-1!=v)for(p=0;p<a;p++)n[p].b==m&&(n[p].b=l)}return a};C.ac=function(b,a,c,d,q,h,g,n,l){n&&(h=new e.aA,h.o(a,c,d,q),h=new e.aF(h),n=f.bQ.l(l),h.sk(f.bQ.y(l)),h.sl(new e.e(a+~~(1*d/2),c+~~(1*q/3))),h.so([n]));b.idN(h,a,c,d,q);b.idp(g,a,
c,d,q)};C.R=function(b,a,c,d,e){if(null!=a){var f=b.idl();try{b.sidl(a)}catch(g){return}null!=c&&b.idN(c,e.x,e.y,e.w,e.h);null!=d&&b.idp(d,e.x,e.y,e.w,e.h);b.sidl(f)}};C.prototype.icf=C.prototype.Q;C.prototype._d=C.prototype.Q;C._dt("E",e.SA,0,e.Su);L=function a(c,d){a._ic();this.n=this.c=0;this.q=!1;this.A=0;this.b=this.a=!1;this.g=c;this.e=this.c=d?0:6;this.d=1;this.m=100;this.k=null;this.j=-1;if(null==a.h){a.h=Array(73);a.i=Array(73);for(var q=0,q=0;72>=q;q++)a.h[q]=e.a.u(f.bT.b(5*q)),a.i[q]=e.a.i(f.bT.b(5*
q))}this.p()};f.cG=L;L.prototype={getAngleX:function(){return 5*this.e},setAngleX:function(a){a=new e._p1(a);f.bT.a(a);a=a.a;this.e=~~((180>=a?e.a.p(90,a):e.a.o(270,a))/5);this.p();this.u();this.f(47)},getAngleY:function(){return 5*this.c},setAngleY:function(a){a=new e._p1(a);f.bT.a(a);a=a.a;this.c=~~(a/5);this.p();this.u();this.f(47)},getBoxThickness:function(){return this.n},setBoxThickness:function(a){this.n=a;this.o();this.f(47)},getCluster:function(){return this.q},setCluster:function(a){this.q=
a;this.o();this.f(65647)},getDepth:function(){return this.m},setDepth:function(a){this.m=a;this.o();this.f(47)},getEnabled:function(){return this.a},setEnabled:function(a){this.a=a;if(null!=this.g){a=this.g.a;var c=0;if(this.a){var d=this.k;null!=d?(a.x=d,c=d._uc):a.x=new C(this)}else a.x=new f.dj(this.g,this);null!=this.k&&this.z(c,this.k)}this.f(1310831)},getPerspective:function(){return this.j},setPerspective:function(a){this.j=a;this.u();this.f(48)},getRotated:function(){return this.b},setRotated:function(a){this.b=
a;this.o();this.f(262191)},getShadow:function(){return this.d},setShadow:function(a){this.d=a;this.o();this.f(32)},getWebGL:function(){return this.k},setWebGL:function(a){var c=0,d=null;e.TE(a,e.G)||e.TE(a,e.u)?(c=a,0!=c?d=new f.WebGLEngine(this,c):null!=this.g&&(this.g.a.x=new C(this))):(d=a,null!=d&&(c=1));this.z(c,d);this.k=d;null!=d?this.setEnabled(!0):this.f(1310831)},ifb:function(a){this.g=a},o:function(){this.a||this.setEnabled(!0)},u:function(){this.b||this.setRotated(!0)},z:function(a,c){var d=
this.g.t;d._uc=a;d._z=null!=c&&a?1E3:0},f:function(a){null!=this.g&&this.g.iai(a)},y:function(a){var c=0,d=0,e=0,c=a.b,d=a.a,e=a.c;0!=this.c&&(a.c=e*f.cG.i[this.c]-c*f.cG.h[this.c],a.b=c*f.cG.i[this.c]+e*f.cG.h[this.c],e=a.c);0!=this.e&&(a.a=d*f.cG.i[this.e]+e*f.cG.h[this.e],a.c=e*f.cG.i[this.e]-d*f.cG.h[this.e])},p:function(){this.A=90+f.bT.g(e.a.g(f.cG.h[this.e]/f.cG.i[this.e],f.cG.i[this.c]))}};L._dt("A",e.SA,0,f.ieO,f.ifa);f.bQ.W=function(a,c,d,q,h){if(q>c){var g=new e._p2(q,c);f.bQ.b(g);q=g.a;
c=g.b;g.Y(h,d);f.bQ.b(g);h=g.a;d=g.b}g=f.a_._ca(4);g[3].c=a.m.c;g[0].c=g[3].c;g[2].c=a.m.c+a.W;g[1].c=g[2].c;g[3].b=c;g[2].b=g[3].b;g[3].a=d;g[2].a=g[3].a;g[1].b=q;g[0].b=g[1].b;g[1].a=h;g[0].a=g[1].a;a.f.icl(a.c,g,4,a.x,a.az?a.al:null,!0)};f.cE.prototype.aF=function(a,c,d){var f=this.D,h=f,h=e.a.o(f,a.i.ap());0>this.w?d.x+=0!=this.af.getAxisY().N?h:f:d.w+=0!=this.af.getAxisY().N?h:f;this.M()&&(d.h+=0!=this.af.getAxisX().N?h:f);a.I||(f*=.35355,d.y+=f,d.w+=f);a=a.c5();null!=a&&(f=new e._p1(!1),c=a.ied(f,
c,this.af.getAxisX().getFont(),!1),d.w+=c.w)};f.Pane.prototype.x=function(a){var c=0!=(a.u&8);c?a.c.sidi((new f.c8)._01c8("PlotArea3D")):a.c.sidi(null);var d=a.a,q=d.M(),h=this.getBackColor(),g=d.D,n=this.l(d),l=a.f;l.icd(4);switch(a.an){case 4:case 5:case 3:if(0<=g){0==h.a&&(h=this.c.iM(0));var p=new e._p1(!1),p=a.b5(p,h,4),m=new e.ar(h);a.f.icq(a.c,m,h,0);var v=0!=(d.H&1048576),h=v&&0!=a.j.N?e.a.o(g,a.j.ap()):g,v=v&&0!=a.i.N?e.a.o(g,a.i.ap()):g;c||a.c.sidi(this);var c=new f.a_,t=new f.a_;c.b=d.v;
t.b=d.v+h*d.w;c.a=n.y;t.a=n.c()+(q?v:0);c.c=0<d.u?0:-g;t.c=0<d.u?d.e+g:d.e;l.icb(a.c,c,t,m,p,null,4128768,0,0);c.b=n.x;t.b=n.g();c.c=d.g;t.c=d.g+g*d.u;l.icb(a.c,c,t,m,p,null,4128768,0,0);q&&(c.b=n.x,t.b=n.g(),c.a=n.c(),t.a=n.c()+v,c.c=0,t.c=d.e,l.icb(a.c,c,t,m,p,null,4128768,0,0))}a.c.sidi(null);break;case 2:c=e.m.b,h=n.y-1,q=n.g()+1,m=d.v==n.g()?n.x:q,p=a.j.V.c(c),l.ice(a.c,p,d.v,h,0,d.v,n.c(),0),0>g&&(l.ice(a.c,p,d.v,h,d.e,d.v,n.c(),d.e),l.ice(a.c,p,m,h,d.g,m,n.c(),d.g)),p=a.i.V.c(c),l.ice(a.c,
p,n.x,n.c(),0,q,n.c(),0),l.ice(a.c,p,d.v,n.c(),0,d.v,n.c(),d.e),0>g&&(l.ice(a.c,p,n.x,h,d.g,q,h,d.g),l.ice(a.c,p,d.v,h,0,d.v,h,d.e),g=0==d.g?d.e:d.g,l.ice(a.c,p,n.x,n.c(),g,q,n.c(),g),l.ice(a.c,p,m,n.c(),0,m,n.c(),d.e))}l.icd(0)};f.cA.prototype.cZ=function(){var a=this.a.D,c=this.a.a._nc();this.a.M()&&(c.h+=a);0>this.a.w?c.x-=a:c.w+=a;this.f.icr(this,this.c,this.a.j,c,-a,this.a.e+a,0!=(this.g&12)?1:0)};f.cA.prototype.dm=function(){var a=this.c5();if(null!=a){this.f.icd(3);var c=this.a.D,d=new f.a_;
d.b=0>this.a.w?this.a.a.g()+c:this.a.a.x-c;d.a=this.a.a.c();d.c=0;var c=0!=(this.l&4194304),q=~~(this.a.e/this.a.p),h=new e.at;h.sb(this.I&&this.a.u==this.a.w?2:0);h.sd(c&&90==this.f.ib7()?1:0);for(var g=this.i.getFont(),n=new e.ar(this.cu(8,e.m.b)),l=this.a.d.c,p=0;p<l;p++)if(this.b_.iaa(p).getVisible()){var m=a.iee(p);d.c=c?q*p+f.bQ.a(q,p,l):q*p+~~(q/2);var v=this.f.icn(d,0);this.c.idH(m,g,n,v,h)}}};f.cA.prototype.du=function(a,c,d,e){var f=0,f=0,f=!1,f=d?this.a.g:0!=this.a.g?0:this.a.e;this.f.ice(this.c,
a,c,e.c(),f,c,e.y,f);f=d;this.a.M()||(f=!d);f=f?e.c():e.y;this.f.ice(this.c,a,c,f,0,c,f,this.a.e)};f.cA.prototype.dx=function(a,c,d,e){var f=0>this.a.w?!d:d;d=d?this.a.g:0!=this.a.g?0:this.a.e;this.f.ice(this.c,a,e.x,c,d,e.g()-1,c,d);e=f?e.g()-1:e.x;this.f.ice(this.c,a,e,c,0,e,c,this.a.e)};f.cA.prototype.dH=function(a){var c=new f.a_,d=e._PE;c.b=0;c.a=0;c.c=this.Q*this.aa;d=this.f.icn(c,0);a.q(d.x,d.y);c=.35355*this.W;a.w+=c;a.y-=c;a.h+=c};f.Chart.prototype.getView3D=function(){null==this.w&&(this.w=
new f.cG(this,!1));return this.w};f.dd.prototype.b1=function(a,c,d){var e=d.w;d.w=c.n;if(c.b)d.x=c.a,h=(new f.a_)._01a_(d.x,d.y,c.d),c=(new f.a_)._01a_(d.x,d.c(),c.d),h=a.f.icn(h,0),a=a.f.icn(c,0),d.x=h.x+e-d.w;else{d.x=c.a-e;var h=(new f.a_)._01a_(d.x+e,d.y,c.d);c=(new f.a_)._01a_(d.x+e,d.c(),c.d);h=a.f.icn(h,0);a=a.f.icn(c,0);d.x=h.x-e}d.y=h.y;d.h=a.y-h.y}})();