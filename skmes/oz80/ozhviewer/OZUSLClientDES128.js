(function(){var EQR=function(){if(this.SIL){this.SIL();return;}var kL=EQR.prototype;kL.SIL=function(){this.x8U="";this.J46="";};kL.setServerURL=function(t8){
this.x8U=t8;};kL.setServerIP=function(b5V){this.J46=b5V;};kL.createSecureOutputStream=function(Wq,cj){var mzL=new ByteArray();var WV=0;var iwL;
for(iwL in cj){WV++;}mzL.writeInt(WV);for(iwL in cj){var UmN=cj[iwL];this.RT(mzL,iwL);this.RT(mzL,UmN);}var hU6=new ByteArray();var blT=new this.gj6("forcs@#$",hU6);
blT.write(Wq,0,Wq.length);mzL.writeBytes(hU6,0,hU6.length);mzL.position=0;return mzL;};kL.createSecureInputStream=function(Wq,cj){var size=Wq.readInt();
for(var i=0; i<size; i++){var iwL=this.q1(Wq);var UmN=this.q1(Wq);cj[iwL]=UmN;}var mzL=new ByteArray();var Nqy=new this.bj6("forcs@#$",Wq);var eKr=new ByteArray();
Nqy.MB(eKr,0,Wq.length-Wq.position);mzL.writeBytes(eKr,0,eKr.length);mzL.position=0;return mzL;};kL.RT=function(Wq,MF){var i;var T6F=MF.length;
Wq.writeInt(T6F);var v;for(i=0; i<T6F; i++){v=MF.charCodeAt(i);Wq.writeByte((v>>>8)&255);Wq.writeByte((v>>>0)&255);}};kL.q1=function(Wq){var T6F;
var bSV,JvV;T6F=Wq.readInt();if(T6F==-1){return "<NULL>";}else{if(T6F<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var MF="";var position=Wq.position;for(var i=0; i<T6F; i++){bSV=Wq[position+i*2];JvV=Wq[position+i*2+1];if((bSV|JvV)<0){throw new Error("A malformed string has been read in a data input stream.");
}MF+=String.fromCharCode((bSV<<8)+(JvV<<0));}Wq.position+=T6F*2;return MF;};var bj6=function(AI,tOo){if(this.Z8d){this.Z8d(AI,tOo);return;}var V2L=bj6.prototype;
V2L.Z8d=function(AI,tOo){this.TG_=AI;this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.tF=0;this.qYy=0;this.erL=0;this.i=0;this.oUL=0;this.pIL=new Array();
this.yR6=0;this.tR6=0;this.ydN=0;this.zw=tOo;this.TKL=new ByteArray();this.TKL.setLength(17);var AEL=new ByteArray();AEL.writeMultiByte(AI,"iso-8859-1");
this.TKL.writeBytes(AEL,0,AEL.length>16?16:AEL.length);this.TKL.set(16,0);this.clear();};V2L.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.tF=0;this.qYy=0;this.erL=0;this.i=0;this.oUL=0;this.yR6=0;this.tR6=0;this.ydN=0;for(var i=0; i<8; i++){this.pIL[i]=0;}};V2L.CPV=function(){
var c=this.zw.readByte();if(c==-1){return -1;}this.Ib6();this.yR6=this.oUL>>>8;this.tR6=this.oUL&255;c=c^(this.yR6^this.tR6);for(this.ydN=0; this.ydN<=15; this.ydN++){
this.TKL.set(this.ydN,this.TKL.get(this.ydN)^c);}return c;};V2L.MB=function(b,off,OV,kqN){if(b===undefined){b=null;}if(off===undefined){off=-1;
}if(OV===undefined){OV=-1;}if(kqN===undefined){kqN=-1;}if((b==null)||this.zw==null){h6L("Null point exception");return -1;}if(OV<1){return 0;
}this.zw.readBytes(b,off,OV);var rt=OV;if(rt<=0){return rt;}var c=0;var i=0;for(i=0; i<rt; i++){this.Ib6();this.yR6=this.oUL>>>8;this.tR6=this.oUL&255;
c=b.get(i+off);c=c^(this.yR6^this.tR6);for(var j=0; j<16; j++){this.TKL.set(j,this.TKL.get(j)^c);}b.set(i+off,c);}return rt;};V2L.jQ=function(){
return 0;};V2L.zZN=function(){this.dx=this.qYy+this.i;this.ax=this.pIL[this.i];this.cx=346;this.bx=20021;this.tF=this.ax;this.ax=this.si;this.si=this.tF;
this.tF=this.ax;this.ax=this.dx;this.dx=this.tF;this.ax=this.ax*this.bx&65535;this.tF=this.ax;this.ax=this.cx;this.cx=this.tF;if(this.ax!=0){
this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.tF=this.ax;this.ax=this.si;this.si=this.tF;this.ax=(this.ax*this.bx)&65535;
this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.qYy=this.dx;this.pIL[this.i]=this.ax;this.erL=this.ax^this.dx;this.i=this.i+1;};V2L.Ib6=function(){
this.pIL[0]=(this.TKL.get(0)*256)+this.TKL.get(1);this.zZN();this.oUL=this.erL;this.pIL[1]=this.pIL[0]^((this.TKL.get(2)*256)+this.TKL.get(3));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[2]=this.pIL[1]^((this.TKL.get(4)*256)+this.TKL.get(5));this.zZN();this.oUL=this.oUL^this.erL;this.pIL[3]=this.pIL[2]^((this.TKL.get(6)*256)+this.TKL.get(7));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[4]=this.pIL[3]^((this.TKL.get(8)*256)+this.TKL.get(9));this.zZN();this.oUL=this.oUL^this.erL;this.pIL[5]=this.pIL[4]^((this.TKL.get(10)*256)+this.TKL.get(11));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[6]=this.pIL[5]^((this.TKL.get(12)*256)+this.TKL.get(13));this.zZN();this.oUL=this.oUL^this.erL;
this.pIL[7]=this.pIL[6]^((this.TKL.get(14)*256)+this.TKL.get(15));this.zZN();this.oUL=this.oUL^this.erL;this.i=0;};this.Z8d(AI,tOo);};kL.bj6=bj6;
var gj6=function(AI,aT1){if(this.p8d){this.p8d(AI,aT1);return;}var V2L=gj6.prototype;V2L.p8d=function(AI,aT1){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.tF=0;this.qYy=0;this.erL=0;this.i=0;this.oUL=0;this.pIL=new Array();this.yR6=0;this.tR6=0;this.ydN=0;this.Rh=aT1;this.pIL.length=8;
this.TKL=new ByteArray();this.TKL.setLength(17);var AEL=new ByteArray();AEL.writeMultiByte(AI,"iso-8859-1");this.TKL.writeBytes(AEL,0,AEL.length>16?16:AEL.length);
this.TKL.set(16,0);this.clear();};V2L.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.tF=0;this.qYy=0;this.erL=0;this.i=0;
this.oUL=0;this.yR6=0;this.tR6=0;this.ydN=0;for(var i=0; i<8; i++){this.pIL[i]=0;}};V2L.uRL=function(b){this.Ib6();this.yR6=this.oUL>>>8;this.tR6=this.oUL&255;
for(this.ydN=0; this.ydN<=15; this.ydN++){this.TKL.set(this.ydN,this.TKL.get(this.ydN)^b);}b=b^(this.yR6^this.tR6);this.Rh.writeByte(b);};V2L.write=function(b,off,OV){
if(b===undefined){b=null;}if(off===undefined){off=-1;}if(OV===undefined){OV=-1;}if((b==null)||this.Rh==null){h6L("Null point exception");return;
}if(OV<1){return;}var c=0;var qg6=new ByteArray();qg6.setLength(OV);for(var i=0; i<OV; i++){this.Ib6();this.yR6=this.oUL>>>8;this.tR6=this.oUL&255;
c=b.get(i+off);for(var j=0; j<16; j++){this.TKL.set(j,this.TKL.get(j)^c);}c=c^(this.yR6^this.tR6);qg6.set(i,c);}this.Rh.writeBytes(qg6,0,OV);
qg6=null;};V2L.flush=function(){};V2L.close=function(){};V2L.zZN=function(){this.dx=this.qYy+this.i;this.ax=this.pIL[this.i];this.cx=346;this.bx=20021;
this.tF=this.ax;this.ax=this.si;this.si=this.tF;this.tF=this.ax;this.ax=this.dx;this.dx=this.tF;this.ax=this.ax*this.bx&65535;this.tF=this.ax;
this.ax=this.cx;this.cx=this.tF;if(this.ax!=0){this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.tF=this.ax;this.ax=this.si;
this.si=this.tF;this.ax=(this.ax*this.bx)&65535;this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.qYy=this.dx;this.pIL[this.i]=this.ax;this.erL=this.ax^this.dx;
this.i=this.i+1;};V2L.Ib6=function(){this.pIL[0]=(this.TKL.get(0)*256)+this.TKL.get(1);this.zZN();this.oUL=this.erL;this.pIL[1]=this.pIL[0]^((this.TKL.get(2)*256)+this.TKL.get(3));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[2]=this.pIL[1]^((this.TKL.get(4)*256)+this.TKL.get(5));this.zZN();this.oUL=this.oUL^this.erL;this.pIL[3]=this.pIL[2]^((this.TKL.get(6)*256)+this.TKL.get(7));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[4]=this.pIL[3]^((this.TKL.get(8)*256)+this.TKL.get(9));this.zZN();this.oUL=this.oUL^this.erL;this.pIL[5]=this.pIL[4]^((this.TKL.get(10)*256)+this.TKL.get(11));
this.zZN();this.oUL=this.oUL^this.erL;this.pIL[6]=this.pIL[5]^((this.TKL.get(12)*256)+this.TKL.get(13));this.zZN();this.oUL=this.oUL^this.erL;
this.pIL[7]=this.pIL[6]^((this.TKL.get(14)*256)+this.TKL.get(15));this.zZN();this.oUL=this.oUL^this.erL;this.i=0;};this.p8d(AI,aT1);};kL.gj6=gj6;
this.SIL();};return EQR;})();
