(function(){var k={Version:"7.6.6537.25476"},d,c;"undefined"!==typeof window?(d=window.sfx,c=window.cfx):(d=require("./jchartfx.system.js"),c=d.cfx,module.exports=k);c.waterfall=k;var n=function b(){b._ic();this.a=this.g=this.h=this.i=null;this.e=this.f=0;this.m=this.n=null;this._0_1()};k.Waterfall=n;n.prototype={_0_1:function(){this.b=this.c=d._CE;this.c=d.m.k(147,226,78);this.b=d.m.k(242,108,91);this.d=!0;this.l=(new c.c8)._01c8("Attribute GreaterThan GreaterThanLine");this.k=(new c.c8)._01c8("Attribute LessThan LessThanLine");
this.o();return this},getColorGreaterThan:function(){return this.c},setColorGreaterThan:function(b){this.c=b=d.m._t(b)},getColorLessThan:function(){return this.b},setColorLessThan:function(b){this.b=b=d.m._t(b)},getTemplate:function(){return null==this.a?null:this.a.t},setTemplate:function(b){null!=b?(null==this.a&&(this.a=(new c._Zt)._0_Zt()),this.a.sw(b)):this.a=null},getUseValueOnFirst:function(){return this.d},setUseValueOnFirst:function(b){this.d=b},icw:function(b){this.g=d.TD(b,c.Chart);return!0},
ic2:function(b,d,a,e){return null},ic3:function(b){return 1},ic4:function(b){return 20480},ic5:function(b,l,a){b.b=1;b=b.a=0;var e=l=null,c=!0,h=0!=(a.u&8);if(a.e==a.o){this.f=a.ac;this.e=0;b=a.H;this.i=new d.ar(this.c);this.h=new d.ar(this.b);var f=a.b.n._nc();a.b.g=this.c;f.c=a.bJ(!1);this.n=f.h();a.b.g=this.b;f.c=a.bJ(!1);this.m=f.h();this.d||(c=!1)}else a.T?(b=this.f,this.f=a.ac,c=!1):(b=a.j.valueToPixel(this.e+a.w),l=0<=a.w?this.i:this.h);c&&(0<=a.w?(l=this.i,e=this.n,h&&a.c.sidi(this.l)):(l=
this.h,e=this.m,h&&a.c.sidi(this.k)));var f=a.ad,m=this.f,c=a.C+a.a.m*~~((a.ap-f+1)/2),h=0,h=f,f=a.c,g=(new d.c)._02c(c,b,h,m-b);0>g.h&&(g.y+=g.h,g.h=-g.h);var m=a.x,k=a.v;null!=l&&(a.x=l,a.v=e);if(null!=this.a){for(var e=d.d.r(g),g=this.a.id().L.A,n=g.length,p=0;p<n;p++)this.a.m(g[p],a,this,e);this.a.r(f,e,1,0)}else f.idT(a.x,g),f.idD(a.v,g);null!=l&&(a.x=m,a.v=k);a.C=c+~~(a.a.m*h/2);a.aV();this.f=a.m.a=b;a.T?(a.bA=!0,a.B=!0,a.T=!1,a.g|=16777216,a.w=this.e):(this.e+=a.w,a.D=0,a.am=0,a.g&=-16777217)},
ic7:function(b,d,a,c){},ic9:function(b){b=this.g.getAxisY();for(var c=d.D.c,a=d.D.d,e=this.g.l,k=e.e,h=0,f=0;f<k;f++){var m=e.getItem(0,f);1E108!=m&&(h+=m,c=d.a.p(c,h),a=d.a.o(a,h))}b.setMin(d.a.p(0,c));b.setMax(a);return!1},ic$:function(b,c,a,d){return!1},ic_:function(b,c,a,d,k){return!1},ieP:function(b,c){var a=new d._p1(this.d);c.ie7(a,"UseValueOnFirst",!0);this.d=a.a;a.a=this.c;c.ieZ(a,"ColorGreaterThan");this.c=a.a;a.a=this.b;c.ieZ(a,"ColorLessThan");this.b=a.a;var e=null;b&&null!=this.a&&(e=
this.a.t);a.a=e;c.ieY(a,"Template");e=a.a;b||this.setTemplate(e)},o:function(){if(void 0!=c._Zt){var b=c.eU.i("Bar",!0);null!=b&&this.setTemplate(b)}}};n._dt("waterfall.Waterfall",d.SA,0,c.icv,c.ic1,c.ic6,c.ieO)})();
