(function(){var e={Version:"7.6.6537.25476"},l,d;"undefined"!==typeof window?(l=window.sfx,d=window.cfx):(l=require("./jchartfx.system.js"),d=l.cfx,module.exports=e);d.errorbar=e;var g=function b(){b._ic();this.c=this.b=!1;this.d=0;this._0_1()};e.ErrorBar=g;g.prototype={_0_1:function(){this.a=!0;return this},getCluster:function(){return this.b},setCluster:function(b){this.b=b},getMaxLength:function(){return this.d},setMaxLength:function(b){this.d=b},getSideBySide:function(){return this.a},setSideBySide:function(b){this.a=
b},ic2:function(b,m,a,f){return null},ic3:function(b){return 2},ic4:function(b){b=28672;this.a&&(b|=128);this.b||(b|=1024);return b},ic5:function(b,m,a){b.b=1;b.a=0;if(a.e==a.o&&a.d==a.t)this.c=!1;else if(a.e==a.q){if(this.c=!this.c,!this.c)return}else if(this.c)return;var f=a.a.d.iaT().getItem(a.d+a.p,a.e);if(!a.T&&1E108!=f){b=a.c;m=a.v;var c=a.m.b,h=a.X;if(this.b||this.a){var c=a.ad,k=a.G,d=a.a.m,e=~~((a.ap-c-1)/2),n=a.C;this.b&&(n+=d*e);e=n+d*g.e(k+1,c,h);c=~~((n+d*g.e(k,c,h)+e)/2);this.a&&!this.b&&
(c-=~~(a.ad/2))}k=a.m.a;f=a.j.valueToPixel(f);a=~~(a.ap*a.b.r/200);a/=h;0<this.d&&(a=l.a.p(a,~~(this.d/2)));h=c-a;a=c+a;b.idv(m,c,k,c,f);b.idv(m,h,k,a,k);b.idv(m,h,f,a,f)}}};g.e=function(b,d,a){return~~(b*d/a)};g._dt("errorbar.ErrorBar",l.SA,0,d.ic1)})();