(function(){var EOR=function(){if(this.SIL){this.SIL();return;}var kL=EOR.prototype;kL.SIL=function(){this.x8U="";this.J46="";};kL.setServerURL=function(t8){
this.x8U=t8;};kL.setServerIP=function(b5V){this.J46=b5V;};kL.createSecureOutputStream=function(Wq,cj){var mzL=new ByteArray();var WV=0;var iwL;
for(iwL in cj){WV++;}mzL.writeInt(WV);for(iwL in cj){var UmN=cj[iwL];this.RT(mzL,iwL);this.RT(mzL,UmN);}mzL.writeBytes(Wq,0,Wq.length);mzL.position=0;
return mzL;};kL.createSecureInputStream=function(Wq,cj){var size=Wq.readInt();for(var i=0; i<size; i++){var iwL=this.q1(Wq);var UmN=this.q1(Wq);
cj[iwL]=UmN;}var mzL=new ByteArray();mzL.writeBytes(Wq,Wq.position,Wq.length-Wq.position);mzL.position=0;return mzL;};kL.RT=function(Wq,MF){var i;
var T6F=MF.length;Wq.writeInt(T6F);var v;for(i=0; i<T6F; i++){v=MF.charCodeAt(i);Wq.writeByte((v>>>8)&255);Wq.writeByte((v>>>0)&255);}};kL.q1=function(Wq){
var T6F;var bSV,JvV;T6F=Wq.readInt();if(T6F==-1){return "<NULL>";}else{if(T6F<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var MF="";var position=Wq.position;for(var i=0; i<T6F; i++){bSV=Wq[position+i*2];JvV=Wq[position+i*2+1];if((bSV|JvV)<0){throw new Error("A malformed string has been read in a data input stream.");
}MF+=String.fromCharCode((bSV<<8)+(JvV<<0));}Wq.position+=T6F*2;return MF;};this.SIL();};return EOR;})();
