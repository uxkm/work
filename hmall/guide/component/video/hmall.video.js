/* https://github.com/video-dev/hls.js */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Hls=e()}}(function(){return function n(s,o,l){function u(r,e){if(!o[r]){if(!s[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(d)return d(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var i=o[r]={exports:{}};s[r][0].call(i.exports,function(e){var t=s[r][1][e];return u(t||e)},i,i.exports,n,s,o,l)}return o[r].exports}for(var d="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,t,r){function a(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function l(e){return"function"==typeof e}function u(e){return"object"==typeof e&&null!==e}function d(e){return void 0===e}((t.exports=a).EventEmitter=a).prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},a.prototype.emit=function(e){var t,r,a,i,n,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||u(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var o=new Error('Uncaught, unspecified "error" event. ('+t+")");throw o.context=t,o}if(d(r=this._events[e]))return!1;if(l(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),r.apply(this,i)}else if(u(r))for(i=Array.prototype.slice.call(arguments,1),a=(s=r.slice()).length,n=0;n<a;n++)s[n].apply(this,i);return!0},a.prototype.on=a.prototype.addListener=function(e,t){var r;if(!l(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,l(t.listener)?t.listener:t),this._events[e]?u(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,u(this._events[e])&&!this._events[e].warned&&(r=d(this._maxListeners)?a.defaultMaxListeners:this._maxListeners)&&0<r&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},a.prototype.once=function(e,t){if(!l(t))throw TypeError("listener must be a function");var r=!1;function a(){this.removeListener(e,a),r||(r=!0,t.apply(this,arguments))}return a.listener=t,this.on(e,a),this},a.prototype.removeListener=function(e,t){var r,a,i,n;if(!l(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(r=this._events[e]).length,a=-1,r===t||l(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(u(r)){for(n=i;0<n--;)if(r[n]===t||r[n].listener&&r[n].listener===t){a=n;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},a.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(l(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},a.prototype.listeners=function(e){return this._events&&this._events[e]?l(this._events[e])?[this._events[e]]:this._events[e].slice():[]},a.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(l(t))return 1;if(t)return t.length}return 0},a.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,r){var a,i,d,n,s,f;a=this,i=/^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,d=/^([^\/;?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,f={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var a=this.parseURL(e);if(!n)throw new Error("Error trying to parse base URL.");return a.path=f.normalizePath(a.path),f.buildURLFromParts(a)}var i=this.parseURL(t);if(!i)throw new Error("Error trying to parse relative URL.");if(i.scheme)return r.alwaysNormalize?(i.path=f.normalizePath(i.path),f.buildURLFromParts(i)):t;var n=this.parseURL(e);if(!n)throw new Error("Error trying to parse base URL.");if(!n.netLoc&&n.path&&"/"!==n.path[0]){var s=d.exec(n.path);n.netLoc=s[1],n.path=s[2]}n.netLoc&&!n.path&&(n.path="/");var o={scheme:n.scheme,netLoc:i.netLoc,path:null,params:i.params,query:i.query,fragment:i.fragment};if(!i.netLoc&&(o.netLoc=n.netLoc,"/"!==i.path[0]))if(i.path){var l=n.path,u=l.substring(0,l.lastIndexOf("/")+1)+i.path;o.path=f.normalizePath(u)}else o.path=n.path,i.params||(o.params=n.params,i.query||(o.query=n.query));return null===o.path&&(o.path=r.alwaysNormalize?f.normalizePath(i.path):i.path),f.buildURLFromParts(o)},parseURL:function(e){var t=i.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(n,"");e.length!==(e=e.replace(s,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},"object"==typeof r&&"object"==typeof t?t.exports=f:"object"==typeof r?r.URLToolkit=f:a.URLToolkit=f},{}],3:[function(e,t,r){var y=arguments[3],m=arguments[4],b=arguments[5],E=JSON.stringify;t.exports=function(e,t){for(var r,a=Object.keys(b),i=0,n=a.length;i<n;i++){var s=a[i],o=b[s].exports;if(o===e||o&&o.default===e){r=s;break}}if(!r){r=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var l={};for(i=0,n=a.length;i<n;i++){l[s=a[i]]=s}m[r]=[Function(["require","module","exports"],"("+e+")(self)"),l]}var u=Math.floor(Math.pow(16,8)*Math.random()).toString(16),d={};d[r]=r,m[u]=[Function(["require"],"var f = require("+E(r)+");(f.default ? f.default : f)(self);"),d];var f={};!function e(t){f[t]=!0;for(var r in m[t][1]){var a=m[t][1][r];f[a]||e(a)}}(u);var c="("+y+")({"+Object.keys(f).map(function(e){return E(e)+":["+m[e][0]+","+E(m[e][1])+"]"}).join(",")+"},{},["+E(u)+"])",h=window.URL||window.webkitURL||window.mozURL||window.msURL,g=new Blob([c],{type:"text/javascript"});if(t&&t.bare)return g;var v=h.createObjectURL(g),p=new Worker(v);return p.objectURL=v,p}},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.hlsDefaultConfig=void 0;var a=g(e(5)),i=g(e(8)),n=g(e(9)),s=g(e(10)),o=g(e(56)),l=g(e(7)),u=g(e(6)),d=g(e(48)),f=g(e(16)),c=g(e(15)),h=g(e(14));function g(e){return e&&e.__esModule?e:{default:e}}r.hlsDefaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.2,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:o.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,fetchSetup:void 0,abrController:a.default,bufferController:i.default,capLevelController:n.default,fpsController:s.default,audioStreamController:u.default,audioTrackController:l.default,subtitleStreamController:h.default,subtitleTrackController:c.default,timelineController:f.default,cueHandler:d.default,enableCEA708Captions:!0,enableWebVTT:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",stretchShortVideoTrack:!1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0}},{10:10,14:14,15:15,16:16,48:48,5:5,56:56,6:6,7:7,8:8,9:9}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var b=o(e(33)),n=o(e(32)),E=o(e(35)),s=e(31),T=e(51),l=o(e(49));function o(e){return e&&e.__esModule?e:{default:e}}var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,n.default),a(d,[{key:"destroy",value:function(){this.clearTimer(),n.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag;if("main"===t.type){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this._bwEstimator){var r=this.hls,a=e.frag.level,i=r.levels[a].details.live,n=r.config,s=void 0,o=void 0;o=i?(s=n.abrEwmaFastLive,n.abrEwmaSlowLive):(s=n.abrEwmaFastVoD,n.abrEwmaSlowVoD),this._bwEstimator=new l.default(r,o,s,n.abrEwmaDefaultEstimate)}this.fragCurrent=t}}},{key:"_abandonRulesCheck",value:function(){var e=this.hls,t=e.media,r=this.fragCurrent,a=r.loader,i=e.minAutoLevel;if(!a||a.stats&&a.stats.aborted)return T.logger.warn("frag loader destroy or aborted, disarm abandonRules"),void this.clearTimer();var n=a.stats;if(t&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var s=performance.now()-n.trequest,o=Math.abs(t.playbackRate);if(s>500*r.duration/o){var l=e.levels,u=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/s),d=l[r.level],f=d.realBitrate?Math.max(d.realBitrate,d.bitrate):d.bitrate,c=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*f/8)),h=t.currentTime,g=(c-n.loaded)/u,v=(E.default.bufferInfo(t,h,e.config.maxBufferHole).end-h)/o;if(v<2*r.duration/o&&v<g){var p=void 0,y=void 0;for(y=r.level-1;i<y;y--){var m=l[y].realBitrate?Math.max(l[y].realBitrate,l[y].bitrate):l[y].bitrate;if((p=r.duration*m/(6.4*u))<v)break}p<g&&(T.logger.warn("loading too slow, abort fragment loading and switch to level "+y+":fragLoadedDelay["+y+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+p.toFixed(1)+"<"+g.toFixed(1)+":"+v.toFixed(1)),e.nextLoadLevel=y,this._bwEstimator.sample(s,n.loaded),a.abort(),this.clearTimer(),e.trigger(b.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if("main"===t.type&&!isNaN(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],a=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,i=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:a,duration:i},r.realBitrate=Math.round(8*a/i)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}}},{key:"onFragBuffered",value:function(e){var t=e.stats,r=e.frag;if(!(!0===t.aborted||1!==r.loadCounter||"main"!==r.type||isNaN(r.sn)||r.bitrateTest&&t.tload!==t.tbuffered)){var a=t.tparsed-t.trequest;T.logger.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(a,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=a/1e3:this.bitrateTestDelay=0}}},{key:"onError",value:function(e){switch(e.details){case s.ErrorDetails.FRAG_LOAD_ERROR:case s.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}}},{key:"clearTimer",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"_findBestLevel",value:function(e,t,r,a,i,n,s,o,l){for(var u=i;a<=u;u--){var d=l[u].details,f=d?d.totalduration/d.fragments.length:t,c=!!d&&d.live,h=void 0;h=u<=e?s*r:o*r;var g=l[u].realBitrate?Math.max(l[u].realBitrate,l[u].bitrate):l[u].bitrate,v=g*f/h;if(T.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+u+"/"+Math.round(h)+"/"+g+"/"+f+"/"+n+"/"+v),g<h&&(!v||c||v<n))return u}return-1}},{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,a=e.config,i=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,u=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,d=this._bwEstimator?this._bwEstimator.getEstimate():a.abrEwmaDefaultEstimate,f=(E.default.bufferInfo(n,l,a.maxBufferHole).end-l)/u,c=this._findBestLevel(s,o,d,i,t,f,a.abrBandWidthFactor,a.abrBandWidthUpFactor,r);if(0<=c)return c;T.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var h=o?Math.min(o,a.maxStarvationDelay):a.maxStarvationDelay,g=a.abrBandWidthFactor,v=a.abrBandWidthUpFactor;if(0==f){var p=this.bitrateTestDelay;p&&(h=(o?Math.min(o,a.maxLoadingDelay):a.maxLoadingDelay)-p,T.logger.trace("bitrate test took "+Math.round(1e3*p)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*h)+" ms"),g=v=1)}return c=this._findBestLevel(s,o,d,i,t,f+h,g,v,r),Math.max(c,0)}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e,b.default.FRAG_LOADING,b.default.FRAG_LOADED,b.default.FRAG_BUFFERED,b.default.ERROR));return t.lastLoadedFragLevel=0,t._nextAutoLevel=-1,t.hls=e,t.onCheck=t._abandonRulesCheck.bind(t),t}r.default=u},{31:31,32:32,33:33,35:35,49:49,51:51}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var L=o(e(46)),O=o(e(35)),h=o(e(25)),D=o(e(33)),n=o(e(32)),c=o(e(36)),s=o(e(52)),P=e(31),C=e(51);function o(e){return e&&e.__esModule?e:{default:e}}var l="STOPPED",I="STARTING",x="IDLE",M="PAUSED",F="KEY_LOADING",N="FRAG_LOADING",U="FRAG_LOADING_WAITING_RETRY",B="WAITING_TRACK",g="PARSING",u="PARSED",G="BUFFER_FLUSHING",j="ENDED",V="ERROR",v="WAITING_INIT_PTS",d=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(f,n.default),a(f,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),n.default.prototype.destroy.call(this),this.state=l}},{key:"onInitPtsFound",value:function(e){var t=e.id,r=e.frag.cc,a=e.initPTS;"main"===t&&(this.initPTS[r]=a,C.logger.log("InitPTS for cc:"+r+" found from video track:"+a),this.state===v&&(C.logger.log("sending pending audio frag to demuxer"),this.state=N,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null))}},{key:"startLoad",value:function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),(this.fragLoadError=0)<t&&-1===e?(C.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=x):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=I),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=l}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=l}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),1<this.ticks&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){var e,t,r,a=this.hls,i=a.config;switch(this.state){case V:case M:case G:break;case I:this.state=B,this.loadedmetadata=!1;break;case x:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!i.startFragPrefetch))break;e=this.loadedmetadata?this.media.currentTime:this.nextLoadPosition;var s=this.mediaBuffer?this.mediaBuffer:this.media,o=O.default.bufferInfo(s,e,i.maxBufferHole),l=o.len,u=o.end,d=this.fragPrevious,f=i.maxMaxBufferLength,c=this.audioSwitch,h=this.trackId;if((l<f||c)&&h<n.length){if(void 0===(r=n[h].details)){this.state=B;break}if(!c&&!r.live&&d&&d.sn===r.endSN&&(!this.media.seeking||this.media.duration-u<d.duration/2)){this.hls.trigger(D.default.BUFFER_EOS,{type:"audio"}),this.state=j;break}var g=r.fragments,v=g.length,p=g[0].start,y=g[v-1].start+g[v-1].duration,m=void 0;if(c)if(r.live&&!r.PTSKnown)C.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),u=0;else if(u=e,r.PTSKnown&&e<p){if(!(o.end>p||o.nextStart))return;C.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=p+.05}if(r.initSegment&&!r.initSegment.data)m=r.initSegment;else if(u<=p){if(m=g[0],r.live&&m.loadIdx&&m.loadIdx===this.fragLoadIdx){var b=o.nextStart?o.nextStart:p;return C.logger.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(b+.05)),void(this.media.currentTime=b+.05)}}else{var E=void 0,T=i.maxFragLookUpTolerance,k=d?g[d.sn-g[0].sn+1]:void 0,_=function(e){var t=Math.min(T,e.duration);return e.start+e.duration-t<=u?1:e.start-t>u&&e.start?-1:0};(E=u<y?(y-T<u&&(T=0),k&&!_(k)?k:L.default.search(g,_)):g[v-1])&&(p=(m=E).start,d&&m.level===d.level&&m.sn===d.sn&&(m.sn<r.endSN?(m=g[m.sn+1-r.startSN],C.logger.log("SN just loaded, load next one: "+m.sn)):m=null))}if(m)if(m.decryptdata&&null!=m.decryptdata.uri&&null==m.decryptdata.key)C.logger.log("Loading key for "+m.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+h),this.state=F,a.trigger(D.default.KEY_LOADING,{frag:m});else{if(C.logger.log("Loading "+m.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+h+", currentTime:"+e+",bufferEnd:"+u.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,m.loadCounter){m.loadCounter++;var R=i.fragLoadingLoopThreshold;if(m.loadCounter>R&&Math.abs(this.fragLoadIdx-m.loadIdx)<R)return void a.trigger(D.default.ERROR,{type:P.ErrorTypes.MEDIA_ERROR,details:P.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:m})}else m.loadCounter=1;m.loadIdx=this.fragLoadIdx,this.fragCurrent=m,this.startFragRequested=!0,isNaN(m.sn)||(this.nextLoadPosition=m.start+m.duration),a.trigger(D.default.FRAG_LOADING,{frag:m}),this.state=N}}break;case B:(t=this.tracks[this.trackId])&&t.details&&(this.state=x);break;case U:var S=performance.now(),A=this.retryDate,w=(s=this.media)&&s.seeking;(!A||A<=S||w)&&(C.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=x)}}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(C.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.tracks;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){this.state===j&&(this.state=x),this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()}},{key:"onMediaEnded",value:function(){this.startPosition=this.lastCurrentTime=0}},{key:"onAudioTracksUpdated",value:function(e){C.logger.log("audio tracks updated"),this.tracks=e.audioTracks}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url;this.trackId=e.id,this.state=x,this.fragCurrent=null,this.state=M,this.waitingFragment=null,t?this.timer||(this.timer=setInterval(this.ontick,100)):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=x,void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold)),this.tick()}},{key:"onAudioTrackLoaded",value:function(e){var t=e.details,r=e.id,a=this.tracks[r],i=t.totalduration,n=0;if(C.logger.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+i),t.live){var s=a.details;s&&0<t.fragments.length?(c.default.mergeDetails(s,t),n=t.fragments[0].start,t.PTSKnown?C.logger.log("live audio playlist sliding:"+n.toFixed(3)):C.logger.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,C.logger.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(a.details=t,!this.startFragRequested){if(-1===this.startPosition){var o=t.startTimeOffset;isNaN(o)?this.startPosition=0:(C.logger.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o)}this.nextLoadPosition=this.startPosition}this.state===B&&(this.state=x),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===F&&(this.state=x,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===N&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var a=this.tracks[this.trackId],i=a.details,n=i.totalduration,s=t.level,o=t.sn,l=t.cc,u=this.config.defaultAudioCodec||a.audioCodec||"mp4a.40.2",d=this.stats=e.stats;if("initSegment"===o)this.state=x,d.tparsed=d.tbuffered=performance.now(),i.initSegment.data=e.payload,this.hls.trigger(D.default.FRAG_BUFFERED,{stats:d,frag:t,id:"audio"}),this.tick();else{this.state=g,this.appended=!1,this.demuxer||(this.demuxer=new h.default(this.hls,"audio"));var f=this.initPTS[l],c=i.initSegment?i.initSegment.data:[];i.initSegment||void 0!==f?(this.pendingBuffering=!0,C.logger.log("Demuxing "+o+" of ["+i.startSN+" ,"+i.endSN+"],track "+s),this.demuxer.push(e.payload,c,u,null,t,n,!1,f)):(C.logger.log("unknown video PTS for continuity counter "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+i.startSN+" ,"+i.endSN+"],track "+s),this.waitingFragment=e,this.state=v)}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g){var a=e.tracks,i=void 0;if(a.video&&delete a.video,i=a.audio){i.levelCodec="mp4a.40.2",i.id=e.id,this.hls.trigger(D.default.BUFFER_CODECS,a),C.logger.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var n=i.initSegment;if(n){var s={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[s]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(D.default.BUFFER_APPENDING,s))}this.tick()}}}},{key:"onFragParsingData",value:function(t){var r=this,e=this.fragCurrent,a=t.frag;if(e&&"audio"===t.id&&"audio"===t.type&&a.sn===e.sn&&a.level===e.level&&this.state===g){var i=this.trackId,n=this.tracks[i],s=this.hls;isNaN(t.endPTS)&&(t.endPTS=t.startPTS+e.duration,t.endDTS=t.startDTS+e.duration),C.logger.log("parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb),c.default.updateFragPTSDTS(n.details,e,t.startPTS,t.endPTS);var o=this.audioSwitch,l=this.media,u=!1;if(o&&l)if(l.readyState){var d=l.currentTime;C.logger.log("switching audio track : currentTime:"+d),d>=t.startPTS&&(C.logger.log("switching audio track : flushing all audio"),this.state=G,s.trigger(D.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),u=!0,this.audioSwitch=!1,s.trigger(D.default.AUDIO_TRACK_SWITCHED,{id:i}))}else this.audioSwitch=!1,s.trigger(D.default.AUDIO_TRACK_SWITCHED,{id:i});var f=this.pendingData;this.audioSwitch||([t.data1,t.data2].forEach(function(e){e&&e.length&&f.push({type:t.type,data:e,parent:"audio",content:"data"})}),!u&&f.length&&(f.forEach(function(e){r.state===g&&(r.pendingBuffering=!0,r.hls.trigger(D.default.BUFFER_APPENDING,e))}),this.pendingData=[],this.appended=!0)),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g&&(this.stats.tparsed=performance.now(),this.state=u,this._checkAppendedParsed())}},{key:"onBufferCreated",value:function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0)}},{key:"onBufferAppended",value:function(e){if("audio"===e.parent){var t=this.state;t!==g&&t!==u||(this.pendingBuffering=0<e.pending,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==u||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=performance.now(),r.trigger(D.default.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var a=this.mediaBuffer?this.mediaBuffer:this.media;C.logger.log("audio buffered : "+s.default.toString(a.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(D.default.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=x}this.tick()}}},{key:"onError",value:function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case P.ErrorDetails.FRAG_LOAD_ERROR:case P.ErrorDetails.FRAG_LOAD_TIMEOUT:if(!e.fatal){var r=this.fragLoadError;r?r++:r=1;var a=this.config;if(r<=a.fragLoadingMaxRetry){this.fragLoadError=r,t.loadCounter=0;var i=Math.min(Math.pow(2,r-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);C.logger.warn("audioStreamController: frag loading failed, retry in "+i+" ms"),this.retryDate=performance.now()+i,this.state=U}else C.logger.error("audioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=V}break;case P.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case P.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case P.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case P.ErrorDetails.KEY_LOAD_ERROR:case P.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==V&&(this.state=e.fatal?V:x,C.logger.warn("audioStreamController: "+e.details+" while loading frag,switch to "+this.state+" state ..."));break;case P.ErrorDetails.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===g||this.state===u)){var n=this.mediaBuffer,s=this.media.currentTime;if(n&&O.default.isBuffered(n,s)&&O.default.isBuffered(n,s+.5)){var o=this.config;o.maxMaxBufferLength>=o.maxBufferLength&&(o.maxMaxBufferLength/=2,C.logger.warn("audio:reduce max buffer length to "+o.maxMaxBufferLength+"s"),this.fragLoadIdx+=2*o.fragLoadingLoopThreshold),this.state=x}else C.logger.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=G,this.hls.trigger(D.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}}},{key:"onBufferFlushed",value:function(){var t=this,e=this.pendingData;e&&e.length?(C.logger.log("appending pending audio data on Buffer Flushed"),e.forEach(function(e){t.hls.trigger(D.default.BUFFER_APPENDING,e)}),this.appended=!0,this.pendingData=[],this.state=u):(this.state=x,this.fragPrevious=null,this.tick())}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,C.logger.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}]),f);function f(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e,D.default.MEDIA_ATTACHED,D.default.MEDIA_DETACHING,D.default.AUDIO_TRACKS_UPDATED,D.default.AUDIO_TRACK_SWITCHING,D.default.AUDIO_TRACK_LOADED,D.default.KEY_LOADED,D.default.FRAG_LOADED,D.default.FRAG_PARSING_INIT_SEGMENT,D.default.FRAG_PARSING_DATA,D.default.FRAG_PARSED,D.default.ERROR,D.default.BUFFER_CREATED,D.default.BUFFER_APPENDED,D.default.BUFFER_FLUSHED,D.default.INIT_PTS_FOUND));return t.config=e.config,t.audioCodecSwap=!1,t.ticks=0,t._state=l,t.ontick=t.tick.bind(t),t.initPTS=[],t.waitingFragment=null,t}r.default=d},{25:25,31:31,32:32,33:33,35:35,36:36,46:46,51:51,52:52}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=s(e(33)),n=s(e(32)),l=e(51);function s(e){return e&&e.__esModule?e:{default:e}}var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,n.default),a(d,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),1<this.ticks&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){this.updateTrack(this.trackId)}},{key:"onManifestLoading",value:function(){this.tracks=[],this.trackId=-1}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.audioTracks||[],a=!1;this.tracks=r,this.hls.trigger(o.default.AUDIO_TRACKS_UPDATED,{audioTracks:r});var i=0;r.forEach(function(e){if(e.default)return t.audioTrack=i,void(a=!0);i++}),!1===a&&r.length&&(l.logger.log("no default audio track defined, use first audio track as default"),this.audioTrack=0)}},{key:"onAudioTrackLoaded",value:function(e){e.id<this.tracks.length&&(l.logger.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.timer&&(this.timer=setInterval(this.ontick,1e3*e.details.targetduration)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))}},{key:"setAudioTrackInternal",value:function(e){if(0<=e&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,l.logger.log("switching to audioTrack "+e);var t=this.tracks[e],r=this.hls,a=t.type,i=t.url,n={id:e,type:a,url:i};r.trigger(o.default.AUDIO_TRACK_SWITCH,n),r.trigger(o.default.AUDIO_TRACK_SWITCHING,n);var s=t.details;!i||void 0!==s&&!0!==s.live||(l.logger.log("(re)loading playlist for audioTrack "+e),r.trigger(o.default.AUDIO_TRACK_LOADING,{url:i,id:e}))}}},{key:"updateTrack",value:function(e){if(0<=e&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,l.logger.log("updating audioTrack "+e);var t=this.tracks[e],r=t.url,a=t.details;!r||void 0!==a&&!0!==a.live||(l.logger.log("(re)loading playlist for audioTrack "+e),this.hls.trigger(o.default.AUDIO_TRACK_LOADING,{url:r,id:e}))}}},{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this.trackId},set:function(e){this.trackId===e&&void 0!==this.tracks[e].details||this.setAudioTrackInternal(e)}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e,o.default.MANIFEST_LOADING,o.default.MANIFEST_LOADED,o.default.AUDIO_TRACK_LOADED));return t.ticks=0,t.ontick=t.tick.bind(t),t}r.default=u},{32:32,33:33,51:51}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=s(e(33)),n=s(e(32)),f=e(51),u=e(31);function s(e){return e&&e.__esModule?e:{default:e}}var o=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,n.default),a(d,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onLevelPtsUpdated",value:function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var a=this.sourceBuffer.audio;if(.1<Math.abs(a.timestampOffset-e.start)){var i=a.updating;try{a.abort()}catch(e){i=!0,f.logger.warn("can not abort audio buffer: "+e)}i?this.audioTimestampOffset=e.start:(f.logger.warn("change mpeg audio timestamp offset from "+a.timestampOffset+" to "+e.start),a.timestampOffset=e.start)}}}},{key:"onManifestParsed",value:function(e){var t=e.audio,r=e.video,a=0;e.altAudio&&(t||r)&&(a=(t?1:0)+(r?1:0),f.logger.log(a+" sourceBuffer(s) expected")),this.sourceBufferNb=a}},{key:"onMediaAttaching",value:function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=URL.createObjectURL(r)}}},{key:"onMediaDetaching",value:function(){f.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){f.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(URL.revokeObjectURL(this.media.src),this.media.removeAttribute("src"),this.media.load()),this.mediaSource=null,this.media=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(l.default.MEDIA_DETACHED)}},{key:"onMediaSourceOpen",value:function(){f.logger.log("media source opened"),this.hls.trigger(l.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()}},{key:"checkPendingTracks",value:function(){var e=this.pendingTracks,t=Object.keys(e).length;t&&(this.sourceBufferNb<=t||0===this.sourceBufferNb)&&(this.createSourceBuffers(e),this.pendingTracks={},this.doAppending())}},{key:"onMediaSourceClose",value:function(){f.logger.log("media source closed")}},{key:"onMediaSourceEnded",value:function(){f.logger.log("media source ended")}},{key:"onSBUpdateEnd",value:function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;f.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var r=this.parent,t=this.segments.reduce(function(e,t){return t.parent===r?e+1:e},0);this.hls.trigger(l.default.BUFFER_APPENDED,{parent:r,pending:t}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()}},{key:"onSBUpdateError",value:function(e){f.logger.error("sourceBuffer error:",e),this.hls.trigger(l.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferReset",value:function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}},{key:"onBufferCodecs",value:function(e){if(0===Object.keys(this.sourceBuffer).length){for(var t in e)this.pendingTracks[t]=e[t];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}}},{key:"createSourceBuffers",value:function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var a in e)if(!t[a]){var i=e[a],n=i.levelCodec||i.codec,s=i.container+";codecs="+n;f.logger.log("creating sourceBuffer("+s+")");try{var o=t[a]=r.addSourceBuffer(s);o.addEventListener("updateend",this.onsbue),o.addEventListener("error",this.onsbe),this.tracks[a]={codec:n,container:i.container},i.buffer=o}catch(e){f.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(l.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(l.default.BUFFER_CREATED,{tracks:e})}},{key:"onBufferAppending",value:function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())}},{key:"onBufferAppendFail",value:function(e){f.logger.error("sourceBuffer error:",e.event),this.hls.trigger(l.default.ERROR,{type:u.ErrorTypes.MEDIA_ERROR,details:u.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferEos",value:function(e){var t=this.sourceBuffer,r=e.type;for(var a in t)r&&a!==r||t[a].ended||(t[a].ended=!0,f.logger.log(a+" sourceBuffer now EOS"));this.checkEos()}},{key:"checkEos",value:function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var a=e[r];if(!a.ended)return;if(a.updating)return void(this._needsEos=!0)}f.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){f.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1}},{key:"onBufferFlushing",value:function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()}},{key:"onLevelUpdated",value:function(e){var t=e.details;0!==t.fragments.length&&(this._levelDuration=t.totalduration+t.fragments[0].start,this.updateMediaElementDuration())}},{key:"updateMediaElementDuration",value:function(){var e=this.media,t=this.mediaSource,r=this.sourceBuffer,a=this._levelDuration;if(null!==a&&e&&t&&r&&0!==e.readyState&&"open"===t.readyState){for(var i in r)if(r[i].updating)return;null===this._msDuration&&(this._msDuration=t.duration);var n=e.duration;(a>this._msDuration&&n<a||n===1/0||isNaN(n))&&(f.logger.log("Updating mediasource duration to "+a.toFixed(3)),this._msDuration=t.duration=a)}}},{key:"doFlush",value:function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var a in r)t+=r[a].buffered.length}catch(e){f.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(l.default.BUFFER_FLUSHED)}}},{key:"doAppending",value:function(){var t=this.hls,e=this.sourceBuffer,r=this.segments;if(Object.keys(e).length){if(this.media.error)return this.segments=[],void f.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var a=r.shift();try{var i=e[a.type];i?i.updating?r.unshift(a):(i.ended=!1,this.parent=a.parent,i.appendBuffer(a.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(e){f.logger.error("error while trying to append buffer:"+e.message),r.unshift(a);var n={type:u.ErrorTypes.MEDIA_ERROR,parent:a.parent};if(22===e.code)return this.segments=[],n.details=u.ErrorDetails.BUFFER_FULL_ERROR,n.fatal=!1,void t.trigger(l.default.ERROR,n);if(this.appendError?this.appendError++:this.appendError=1,n.details=u.ErrorDetails.BUFFER_APPEND_ERROR,this.appendError>t.config.appendErrorMaxRetry)return f.logger.log("fail "+t.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],n.fatal=!0,void t.trigger(l.default.ERROR,n);n.fatal=!1,t.trigger(l.default.ERROR,n)}}}}},{key:"flushBuffer",value:function(e,t,r){var a,i,n,s,o,l,u=this.sourceBuffer;if(Object.keys(u).length){if(f.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var d in u)if(!r||d===r){if((a=u[d]).ended=!1,a.updating)return f.logger.warn("cannot flush, sb updating in progress"),!1;try{for(i=0;i<a.buffered.length;i++)if(n=a.buffered.start(i),s=a.buffered.end(i),l=-1!==navigator.userAgent.toLowerCase().indexOf("firefox")&&t===Number.POSITIVE_INFINITY?(o=e,t):(o=Math.max(n,e),Math.min(s,t)),.5<Math.min(l,s)-o)return this.flushBufferCounter++,f.logger.log("flush "+d+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+this.media.currentTime),a.remove(o,l),!1}catch(e){f.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else f.logger.warn("abort flushing too many retries");f.logger.log("buffer flushed")}return!0}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e,l.default.MEDIA_ATTACHING,l.default.MEDIA_DETACHING,l.default.MANIFEST_PARSED,l.default.BUFFER_RESET,l.default.BUFFER_APPENDING,l.default.BUFFER_CODECS,l.default.BUFFER_EOS,l.default.BUFFER_FLUSHING,l.default.LEVEL_PTS_UPDATED,l.default.LEVEL_UPDATED));return t._msDuration=null,t._levelDuration=null,t.onsbue=t.onSBUpdateEnd.bind(t),t.onsbe=t.onSBUpdateError.bind(t),t.pendingTracks={},t.tracks={},t}r.default=o},{31:31,32:32,33:33,51:51}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=s(e(33));function s(e){return e&&e.__esModule?e:{default:e}}var o=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,s(e(32)).default),a(l,[{key:"destroy",value:function(){this.hls.config.capLevelToPlayerSize&&(this.media=this.restrictedLevels=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))}},{key:"onFpsDropLevelCapping",value:function(e){this.restrictedLevels||(this.restrictedLevels=[]),this.isLevelRestricted(e.droppedLevel)||this.restrictedLevels.push(e.droppedLevel)}},{key:"onMediaAttaching",value:function(e){this.media=e.media instanceof HTMLVideoElement?e.media:null}},{key:"onManifestParsed",value:function(e){var t=this.hls;t.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=e.levels,t.firstLevel=this.getMaxLevel(e.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}},{key:"detectPlayerSize",value:function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}},{key:"getMaxLevel",value:function(e){var t=0,r=void 0,a=void 0,i=this.mediaWidth,n=this.mediaHeight,s=0,o=0;for(r=0;r<=e&&(a=this.levels[r],!this.isLevelRestricted(r))&&(t=r,s=a.width,o=a.height,!(i<=s||n<=o));r++);return t}},{key:"isLevelRestricted",value:function(e){return!(!this.restrictedLevels||-1===this.restrictedLevels.indexOf(e))}},{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}},{key:"mediaWidth",get:function(){var e=void 0,t=this.media;return t&&(e=t.width||t.clientWidth||t.offsetWidth,e*=this.contentScaleFactor),e}},{key:"mediaHeight",get:function(){var e=void 0,t=this.media;return t&&(e=t.height||t.clientHeight||t.offsetHeight,e*=this.contentScaleFactor),e}}]),l);function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e,n.default.FPS_DROP_LEVEL_CAPPING,n.default.MEDIA_ATTACHING,n.default.MANIFEST_PARSED))}r.default=o},{32:32,33:33}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=s(e(33)),n=s(e(32)),f=e(51);function s(e){return e&&e.__esModule?e:{default:e}}var o=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,n.default),a(l,[{key:"destroy",value:function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1}},{key:"onMediaAttaching",value:function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))}},{key:"checkFPS",value:function(e,t,r){var a=performance.now();if(t){if(this.lastTime){var i=a-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/i,l=this.hls;if(l.trigger(d.default.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),0<o&&n>l.config.fpsDroppedMonitoringThreshold*s){var u=l.currentLevel;f.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),0<u&&(-1===l.autoLevelCapping||l.autoLevelCapping>=u)&&(--u,l.trigger(d.default.FPS_DROP_LEVEL_CAPPING,{level:u,droppedLevel:l.currentLevel}),l.autoLevelCapping=u,l.streamController.nextLevelSwitch())}}this.lastTime=a,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}},{key:"checkFPSInterval",value:function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}]),l);function l(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e,d.default.MEDIA_ATTACHING))}r.default=o},{32:32,33:33,51:51}],11:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=o(e(33)),s=o(e(32));function o(e){return e&&e.__esModule?e:{default:e}}var l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,s.default),a(u,[{key:"destroy",value:function(){s.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){this.media=e.media,this.media&&(this.id3Track=this.media.addTextTrack("metadata","id3"),this.id3Track.mode="hidden")}},{key:"onMediaDetaching",value:function(){this.media=void 0}},{key:"onFragParsingMetadata",value:function(e){var t=e.frag,r=e.samples,a=t.start,i=t.start+t.duration;a===i&&(i+=1e-4);for(var n=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,s=0;s<r.length;s++){var o=this.parseID3Frame(r[s].data),l=this.decodeID3Frame(o);if(l){var u=new n(a,i,"");u.value=l,this.id3Track.addCue(u)}}}},{key:"parseID3Frame",value:function(e){if(!(e.length<21)&&73===e[0]&&68===e[1]&&51===e[2])return{type:String.fromCharCode(e[10],e[11],e[12],e[13]),data:e=e.subarray(20)}}},{key:"decodeID3Frame",value:function(e){return"TXXX"===e.type?this.decodeTxxxFrame(e):"PRIV"===e.type?this.decodePrivFrame(e):"T"===e.type[0]?this.decodeTextFrame(e):void 0}},{key:"decodeTxxxFrame",value:function(e){if(!(e.size<2)&&3===e.data[0]){var t=1,r=this.utf8ArrayToStr(e.data.subarray(t));return t+=r.length+1,{key:"TXXX",description:r,data:this.utf8ArrayToStr(e.data.subarray(t))}}}},{key:"decodeTextFrame",value:function(e){if(!(e.size<2)&&3===e.data[0]){var t=e.data.subarray(1);return{key:e.type,data:this.utf8ArrayToStr(t)}}}},{key:"decodePrivFrame",value:function(e){if(!(e.size<2)){var t=this.utf8ArrayToStr(e.data);return{key:"PRIV",info:t,data:e.data.subarray(t.length+1).buffer}}}},{key:"utf8ArrayToStr",value:function(e){for(var t=void 0,r=void 0,a="",i=0,n=e.length;i<n;){var s=e[i++];switch(s>>4){case 0:return a;case 1:case 2:case 3:case 4:case 5:case 6:case 7:a+=String.fromCharCode(s);break;case 12:case 13:t=e[i++],a+=String.fromCharCode((31&s)<<6|63&t);break;case 14:t=e[i++],r=e[i++],a+=String.fromCharCode((15&s)<<12|(63&t)<<6|(63&r)<<0)}}return a}}]),u);function u(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e,n.default.MEDIA_ATTACHED,n.default.MEDIA_DETACHING,n.default.FRAG_PARSING_METADATA));return t.id3Track=void 0,t.media=void 0,t}r.default=l},{32:32,33:33}],12:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=s(e(33)),n=s(e(32)),c=e(51),h=e(31),u=s(e(35));function s(e){return e&&e.__esModule?e:{default:e}}var o=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,n.default),a(l,[{key:"destroy",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this._manualLevel=-1}},{key:"startLoad",value:function(){this.canload=!0;var e=this._levels;e&&e.forEach(function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)}),this.timer&&this.tick()}},{key:"stopLoad",value:function(){this.canload=!1}},{key:"onManifestLoaded",value:function(e){function a(e,t){return MediaSource.isTypeSupported(e+"/mp4;codecs="+t)}var t,r=[],i=[],n={},s=!1,o=!1,l=this.hls,u=/chrome|firefox/.test(navigator.userAgent.toLowerCase());if(e.levels.forEach(function(e){e.videoCodec&&(s=!0),u&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(e.audioCodec||e.attrs&&e.attrs.AUDIO)&&(o=!0);var t=n[e.bitrate];void 0===t?(n[e.bitrate]=r.length,e.url=[e.url],e.urlId=0,r.push(e)):r[t].url.push(e.url)}),s&&o?r.forEach(function(e){e.videoCodec&&i.push(e)}):i=r,(i=i.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||a("audio",t))&&(!r||a("video",r))})).length){t=i[0].bitrate,i.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=i;for(var d=0;d<i.length;d++)if(i[d].bitrate===t){this._firstLevel=d,c.logger.log("manifest loaded,"+i.length+" level(s) found, first bitrate:"+t);break}l.trigger(f.default.MANIFEST_PARSED,{levels:i,firstLevel:this._firstLevel,stats:e.stats,audio:o,video:s,altAudio:0<e.audioTracks.length})}else l.trigger(f.default.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:l.url,reason:"no level with compatible codecs found in manifest"})}},{key:"setLevelInternal",value:function(e){var t=this._levels,r=this.hls;if(0<=e&&e<t.length){if(this.timer&&(clearTimeout(this.timer),this.timer=null),this._level!==e){c.logger.log("switching to level "+e);var a=t[this._level=e];a.level=e,r.trigger(f.default.LEVEL_SWITCH,a),r.trigger(f.default.LEVEL_SWITCHING,a)}var i=t[e],n=i.details;if(!n||!0===n.live){var s=i.urlId;r.trigger(f.default.LEVEL_LOADING,{url:i.url[s],level:e,id:s})}}else r.trigger(f.default.ERROR,{type:h.ErrorTypes.OTHER_ERROR,details:h.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})}},{key:"onError",value:function(e){if(!e.fatal){var t=e.details,r=this.hls,a=void 0,i=void 0,n=!1;switch(t){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.FRAG_LOOP_LOADING_ERROR:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:a=e.frag.level;break;case h.ErrorDetails.LEVEL_LOAD_ERROR:case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:a=e.context.level,n=!0;break;case h.ErrorDetails.REMUX_ALLOC_ERROR:a=e.level}if(void 0!==a){(i=this._levels[a]).loadError?i.loadError++:i.loadError=1;var s=i.url.length;if(1<s&&i.loadError<s)i.urlId=(i.urlId+1)%s,i.details=void 0,c.logger.warn("level controller,"+t+" for level "+a+": switching to redundant stream id "+i.urlId);else if(-1===this._manualLevel&&a)c.logger.warn("level controller,"+t+": switch-down for next fragment"),r.nextAutoLevel=Math.max(0,a-1);else if(i&&i.details&&i.details.live)c.logger.warn("level controller,"+t+" on live stream, discard"),n&&(this._level=void 0);else if(t===h.ErrorDetails.LEVEL_LOAD_ERROR||t===h.ErrorDetails.LEVEL_LOAD_TIMEOUT){var o=r.media;if(o&&u.default.isBuffered(o,o.currentTime)&&u.default.isBuffered(o,o.currentTime+.5)){var l=r.config.levelLoadingRetryDelay;c.logger.warn("level controller,"+t+", but media buffered, retry in "+l+"ms"),this.timer=setTimeout(this.ontick,l)}else c.logger.error("cannot recover "+t+" error"),this._level=void 0,this.timer&&(clearTimeout(this.timer),this.timer=null),e.fatal=!0}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if(t&&"main"===t.type){var r=this._levels[t.level];r&&(r.loadError=0)}}},{key:"onLevelLoaded",value:function(e){var t=e.level;if(t===this._level){var r=this._levels[t];r.loadError=0;var a=e.details;if(a.live){var i=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),n=r.details;n&&a.endSN===n.endSN&&(i/=2,c.logger.log("same live playlist, reload twice faster")),i-=performance.now()-e.stats.trequest,i=Math.max(1e3,Math.round(i)),c.logger.log("live playlist, reload in "+i+" ms"),this.timer=setTimeout(this.ontick,i)}else this.timer=null}}},{key:"tick",value:function(){var e=this._level;if(void 0!==e&&this.canload){var t=this._levels[e];if(t&&t.url){var r=t.urlId;this.hls.trigger(f.default.LEVEL_LOADING,{url:t.url[r],level:e,id:r})}}}},{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this._level},set:function(e){var t=this._levels;t&&t.length>e&&(this._level===e&&void 0!==t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this._manualLevel},set:function(e){this._manualLevel=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0!==this._startLevel)return this._startLevel;var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this._manualLevel?this._manualLevel:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this._manualLevel&&(this.hls.nextAutoLevel=e)}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e,f.default.MANIFEST_LOADED,f.default.LEVEL_LOADED,f.default.FRAG_LOADED,f.default.ERROR));return t.ontick=t.tick.bind(t),t._manualLevel=-1,t}r.default=o},{31:31,32:32,33:33,35:35,51:51}],13:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var m=o(e(46)),E=o(e(35)),g=o(e(25)),T=o(e(33)),n=o(e(32)),l=o(e(36)),s=o(e(52)),k=e(31),_=e(51);function o(e){return e&&e.__esModule?e:{default:e}}var u="STOPPED",v="IDLE",d="KEY_LOADING",p="FRAG_LOADING",f="FRAG_LOADING_WAITING_RETRY",h="WAITING_LEVEL",y="PARSING",c="PARSED",b="BUFFER_FLUSHING",R="ENDED",S="ERROR",A=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(w,n.default),a(w,[{key:"destroy",value:function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),n.default.prototype.destroy.call(this),this.state=u}},{key:"startLoad",value:function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var a=r.startLevel;-1===a&&(a=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=a,this.loadedmetadata=!1}0<t&&-1===e&&(_.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=v,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=u}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=u,this.forceStartLoad=!1}},{key:"tick",value:function(){this.ticks++,1===this.ticks&&(this.doTick(),1<this.ticks&&setTimeout(this.tick,1),this.ticks=0)}},{key:"doTick",value:function(){switch(this.state){case S:break;case b:this.fragLoadError=0;break;case v:this._doTickIdle();break;case h:var e=this.levels[this.level];e&&e.details&&(this.state=v);break;case f:var t=performance.now(),r=this.retryDate;(!r||r<=t||this.media&&this.media.seeking)&&(_.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=v)}this._checkBuffer(),this._checkFragmentChanged()}},{key:"_doTickIdle",value:function(){var e=this.hls,t=e.config,r=this.media;if(void 0===this.levelLastLoaded||r||!this.startFragRequested&&t.startFragPrefetch){var a=void 0;a=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var i=e.nextLoadLevel,n=this.levels[i],s=n.bitrate,o=void 0;o=s?Math.max(8*t.maxBufferSize/s,t.maxBufferLength):t.maxBufferLength,o=Math.min(o,t.maxMaxBufferLength);var l=E.default.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,a,t.maxBufferHole),u=l.len;if(!(o<=u)){_.logger.trace("buffer length of "+u.toFixed(3)+" is below max of "+o.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=i;var d=n.details;if(void 0===d||d.live&&this.levelLastLoaded!==i)this.state=h;else{var f=this.fragPrevious;if(!d.live&&f&&f.sn===d.endSN&&Math.min(r.duration,f.start+f.duration)-Math.max(l.end,f.start)<=Math.max(.2,f.duration/2)){var c={};return this.altAudio&&(c.type="video"),this.hls.trigger(T.default.BUFFER_EOS,c),void(this.state=R)}this._fetchPayloadOrEos(a,l,d)}}}}},{key:"_fetchPayloadOrEos",value:function(e,t,r){var a=this.fragPrevious,i=this.level,n=r.fragments,s=n.length;if(0!==s){var o=n[0].start,l=n[s-1].start+n[s-1].duration,u=t.end,d=void 0;if(r.initSegment&&!r.initSegment.data)d=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(s<f)return void _.logger.warn("Can not start playback of a level, reason: not enough fragments "+s+" < "+f);if(null===(d=this._ensureFragmentAtLivePoint(r,u,o,l,a,n,s)))return}else u<o&&(d=n[0]);(d=d||this._findFragment(o,a,s,n,u,l,r))&&this._loadFragmentOrKey(d,i,r,e,u)}}},{key:"_ensureFragmentAtLivePoint",value:function(e,t,r,a,i,n,s){var o=this.hls.config,l=this.media,u=void 0,d=void 0!==o.liveMaxLatencyDuration?o.liveMaxLatencyDuration:o.liveMaxLatencyDurationCount*e.targetduration;if(t<Math.max(r-o.maxFragLookUpTolerance,a-d)){var f=this.liveSyncPosition=this.computeLivePosition(r,e);_.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+f.toFixed(3)),t=f,l&&l.readyState&&l.duration>f&&(l.currentTime=f)}if(e.PTSKnown&&a<t&&l&&l.readyState)return null;if(this.startFragRequested&&!e.PTSKnown){if(i){var c=i.sn+1;c>=e.startSN&&c<=e.endSN&&(u=n[c-e.startSN],_.logger.log("live playlist, switching playlist, load frag with next SN: "+u.sn))}u||(u=n[Math.min(s-1,Math.round(s/2))],_.logger.log("live playlist, switching playlist, unknown, load middle frag : "+u.sn))}return u}},{key:"_findFragment",value:function(e,t,r,a,i,n,s){function o(e){var t=Math.min(f,e.duration);return e.start+e.duration-t<=i?1:e.start-t>i&&e.start?-1:0}var l=this.hls.config,u=void 0,d=void 0,f=l.maxFragLookUpTolerance,c=t?a[t.sn-a[0].sn+1]:void 0;if(d=i<n?(n-f<i&&(f=0),c&&!o(c)?c:m.default.search(a,o)):a[r-1]){var h=(u=d).sn-s.startSN,g=t&&u.level===t.level,v=a[h-1],p=a[1+h];if(g&&u.sn===t.sn)if(u.sn<s.endSN){var y=t.deltaPTS;y&&y>l.maxBufferHole&&t.dropped&&h?(u=v,_.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"),t.loadCounter--):(u=p,_.logger.log("SN just loaded, load next one: "+u.sn))}else u=null;else u.dropped&&!g&&(u=p&&p.backtracked?(_.logger.warn("Already backtracked from fragment "+(1+h)+", will not backtrack to fragment "+h+". Loading fragment "+(1+h)),p):(_.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),u.dropped=0,v?(v.loadCounter&&v.loadCounter--,v):null))}return u}},{key:"_loadFragmentOrKey",value:function(e,t,r,a,i){var n=this.hls,s=n.config;if(!e.decryptdata||null==e.decryptdata.uri||null!=e.decryptdata.key){if(_.logger.log("Loading "+e.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+t+", currentTime:"+a.toFixed(3)+",bufferEnd:"+i.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,e.loadCounter){e.loadCounter++;var o=s.fragLoadingLoopThreshold;if(e.loadCounter>o&&Math.abs(this.fragLoadIdx-e.loadIdx)<o)return void n.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:e})}else e.loadCounter=1;return e.loadIdx=this.fragLoadIdx,this.fragCurrent=e,this.startFragRequested=!0,isNaN(e.sn)||(this.nextLoadPosition=e.start+e.duration),e.autoLevel=n.autoLevelEnabled,e.bitrateTest=this.bitrateTest,n.trigger(T.default.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new g.default(n,"main")),void(this.state=p)}_.logger.log("Loading key for "+e.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+t),this.state=d,n.trigger(T.default.KEY_LOADING,{frag:e})}},{key:"getBufferedFrag",value:function(t){return m.default.search(this._bufferedFrags,function(e){return t<e.startPTS?-1:t>e.endPTS?1:0})}},{key:"followingBufferedFrag",value:function(e){return e?this.getBufferedFrag(e.endPTS+.5):null}},{key:"_checkFragmentChanged",value:function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>r.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=t),E.default.isBuffered(r,t)?e=this.getBufferedFrag(t):E.default.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var a=e;if(a!==this.fragPlaying){this.hls.trigger(T.default.FRAG_CHANGED,{frag:a});var i=a.level;this.fragPlaying&&this.fragPlaying.level===i||this.hls.trigger(T.default.LEVEL_SWITCHED,{level:i}),this.fragPlaying=a}}}},{key:"immediateLevelSwitch",value:function(){if(_.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e=this.media,t=void 0;e?(t=e.paused,e.pause()):t=!0,this.previouslyPaused=t}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}},{key:"immediateLevelSwitchEnd",value:function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,E.default.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())}},{key:"nextLevelSwitch",value:function(){var e=this.media;if(e&&e.readyState){var t,r=void 0,a=void 0;if(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,(t=this.getBufferedFrag(e.currentTime))&&1<t.startPTS&&this.flushMainBuffer(0,t.startPTS-1),e.paused)r=0;else{var i=this.hls.nextLoadLevel,n=this.levels[i],s=this.fragLastKbps;r=s&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*s)+1:0}if(a=(a=this.getBufferedFrag(e.currentTime+r))&&this.followingBufferedFrag(a)){var o=this.fragCurrent;o&&o.loader&&o.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(a.startPTS,Number.POSITIVE_INFINITY)}}}},{key:"flushMainBuffer",value:function(e,t){this.state=b;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(T.default.BUFFER_FLUSHING,r)}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(_.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.loadCounter=void 0,e.backtracked=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeking",value:function(){var e=this.media,t=e?e.currentTime:void 0,r=this.config;if(_.logger.log("media seeking to "+t.toFixed(3)),this.state===p){var a=this.mediaBuffer?this.mediaBuffer:e,i=E.default.bufferInfo(a,t,this.config.maxBufferHole),n=this.fragCurrent;if(0===i.len&&n){var s=r.maxFragLookUpTolerance,o=n.start-s,l=n.start+n.duration+s;t<o||l<t?(n.loader&&(_.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=v):_.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===R&&(this.state=v);e&&(this.lastCurrentTime=t),this.state!==p&&void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*r.fragLoadingLoopThreshold),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=t),this.tick()}},{key:"onMediaSeeked",value:function(){_.logger.log("media seeked to "+this.media.currentTime.toFixed(3)),this.tick()}},{key:"onMediaEnded",value:function(){_.logger.log("media ended"),this.startPosition=this.lastCurrentTime=0}},{key:"onManifestLoading",value:function(){_.logger.log("trigger BUFFER_RESET"),this.hls.trigger(T.default.BUFFER_RESET),this._bufferedFrags=[],this.stalled=!1,this.startPosition=this.lastCurrentTime=0}},{key:"onManifestParsed",value:function(e){var t,r=!1,a=!1;e.levels.forEach(function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(a=!0))}),this.audioCodecSwitch=r&&a,this.audioCodecSwitch&&_.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startLevelLoaded=!1,this.startFragRequested=!1;var i=this.config;(i.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(i.startPosition)}},{key:"onLevelLoaded",value:function(e){var t=e.details,r=e.level,a=this.levels[r],i=t.totalduration,n=0;if(_.logger.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+i),this.levelLastLoaded=r,t.live){var s=a.details;s&&0<t.fragments.length?(l.default.mergeDetails(s,t),n=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(n,s),t.PTSKnown?_.logger.log("live playlist sliding:"+n.toFixed(3)):_.logger.log("live playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,_.logger.log("live playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(a.details=t,this.hls.trigger(T.default.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var o=t.startTimeOffset;isNaN(o)?t.live?(this.startPosition=this.computeLivePosition(n,t),_.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(o<0&&(_.logger.log("negative start time offset "+o+", count from end of last fragment"),o=n+i+o),_.logger.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===h&&(this.state=v),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===d&&(this.state=v,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===p&&t&&"main"===r.type&&r.level===t.level&&r.sn===t.sn){var a=e.stats,i=this.levels[t.level],n=i.details;if(_.logger.log("Loaded  "+t.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+t.level),this.bitrateTest=!1,this.stats=a,!0===r.bitrateTest&&this.hls.nextLoadLevel)this.state=v,this.startFragRequested=!1,a.tparsed=a.tbuffered=performance.now(),this.hls.trigger(T.default.FRAG_BUFFERED,{stats:a,frag:t,id:"main"}),this.tick();else if("initSegment"===r.sn)this.state=v,a.tparsed=a.tbuffered=performance.now(),n.initSegment.data=e.payload,this.hls.trigger(T.default.FRAG_BUFFERED,{stats:a,frag:t,id:"main"}),this.tick();else{this.state=y;var s=n.totalduration,o=t.level,l=t.sn,u=this.config.defaultAudioCodec||i.audioCodec;this.audioCodecSwap&&(_.logger.log("swapping playlist audio codec"),void 0===u&&(u=this.lastAudioCodec),u=u&&(-1!==u.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),this.pendingBuffering=!0,this.appended=!1,_.logger.log("Parsing "+l+" of ["+n.startSN+" ,"+n.endSN+"],level "+o+", cc "+t.cc);var d=this.demuxer;d=d||(this.demuxer=new g.default(this.hls,"main"));var f=this.media,c=!(f&&f.seeking)&&(n.PTSKnown||!n.live),h=n.initSegment?n.initSegment.data:[];d.push(e.payload,h,u,i.videoCodec,t,s,c,void 0)}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y){var a,i,n=e.tracks;if(n.audio&&this.altAudio&&delete n.audio,i=n.audio){var s=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(_.logger.log("swapping playlist audio codec"),s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==i.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),-1!==o.indexOf("android")&&"audio/mpeg"!==i.container&&(s="mp4a.40.2",_.logger.log("Android: force audio codec to "+s)),i.levelCodec=s,i.id=e.id}for(a in(i=n.video)&&(i.levelCodec=this.levels[this.level].videoCodec,i.id=e.id),this.hls.trigger(T.default.BUFFER_CODECS,n),n){i=n[a],_.logger.log("main track:"+a+",container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var l=i.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(T.default.BUFFER_APPENDING,{type:a,data:l,parent:"main",content:"initSegment"}))}this.tick()}}},{key:"onFragParsingData",value:function(t){var r=this,e=this.fragCurrent,a=t.frag;if(e&&"main"===t.id&&a.sn===e.sn&&a.level===e.level&&("audio"!==t.type||!this.altAudio)&&this.state===y){var i=this.levels[this.level],n=e;if(isNaN(t.endPTS)&&(t.endPTS=t.startPTS+e.duration,t.endDTS=t.startDTS+e.duration),_.logger.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(n.dropped=t.dropped,n.dropped){if(!n.backtracked)return n.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=v,void this.tick();_.logger.warn("Already backtracked on this fragment, appending with the gap")}else n.backtracked=!1;var s=l.default.updateFragPTSDTS(i.details,n,t.startPTS,t.endPTS,t.startDTS,t.endDTS),o=this.hls;o.trigger(T.default.LEVEL_PTS_UPDATED,{details:i.details,level:this.level,drift:s,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(e){e&&e.length&&r.state===y&&(r.appended=!0,r.pendingBuffering=!0,o.trigger(T.default.BUFFER_APPENDING,{type:t.type,data:e,parent:"main",content:"data"}))}),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===y&&(this.stats.tparsed=performance.now(),this.state=c,this._checkAppendedParsed())}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url,r=e.id;if(!t){if(this.mediaBuffer!==this.media){_.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(_.logger.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=v}var i=this.hls;i.trigger(T.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),i.trigger(T.default.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}}},{key:"onAudioTrackSwitched",value:function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var a=this.videoBuffer;a&&this.mediaBuffer!==a&&(_.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=a)}this.altAudio=r,this.tick()}},{key:"onBufferCreated",value:function(e){var t=e.tracks,r=void 0,a=void 0,i=!1;for(var n in t){var s=t[n];"main"===s.id?(r=s,"video"===(a=n)&&(this.videoBuffer=t[n].buffer)):i=!0}i&&r?(_.logger.log("alternate track found, use "+a+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media}},{key:"onBufferAppended",value:function(e){if("main"===e.parent){var t=this.state;t!==y&&t!==c||(this.pendingBuffering=0<e.pending,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==c||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;_.logger.log("main buffered : "+s.default.toString(t.buffered));var r=this._bufferedFrags.filter(function(e){return E.default.isBuffered(t,(e.startPTS+e.endPTS)/2)});r.push(e),this._bufferedFrags=r.sort(function(e,t){return e.startPTS-t.startPTS}),this.fragPrevious=e;var a=this.stats;a.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*a.total/(a.tbuffered-a.tfirst)),this.hls.trigger(T.default.FRAG_BUFFERED,{stats:a,frag:e,id:"main"}),this.state=v}this.tick()}}},{key:"onError",value:function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=this.media,a=r&&E.default.isBuffered(r,r.currentTime)&&E.default.isBuffered(r,r.currentTime+.5);switch(e.details){case k.ErrorDetails.FRAG_LOAD_ERROR:case k.ErrorDetails.FRAG_LOAD_TIMEOUT:case k.ErrorDetails.KEY_LOAD_ERROR:case k.ErrorDetails.KEY_LOAD_TIMEOUT:if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var n=this.config;if(i<=n.fragLoadingMaxRetry||a||t.autoLevel&&t.level){this.fragLoadError=i,t.loadCounter=0;var s=Math.min(Math.pow(2,i-1)*n.fragLoadingRetryDelay,n.fragLoadingMaxRetryTimeout);_.logger.warn("mediaController: frag loading failed, retry in "+s+" ms"),this.retryDate=performance.now()+s,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.state=f}else _.logger.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=S}break;case k.ErrorDetails.FRAG_LOOP_LOADING_ERROR:e.fatal||(a?(this._reduceMaxBufferLength(t.duration),this.state=v):t.autoLevel&&0!==t.level||(e.fatal=!0,this.state=S));break;case k.ErrorDetails.LEVEL_LOAD_ERROR:case k.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==S&&(e.fatal?(this.state=S,_.logger.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):this.state===h&&(this.state=v));break;case k.ErrorDetails.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==y&&this.state!==c||(a?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=v):(_.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}}},{key:"_reduceMaxBufferLength",value:function(e){var t=this.config;t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,_.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),this.fragLoadIdx+=2*t.fragLoadingLoopThreshold)}},{key:"_checkBuffer",value:function(){var e=this.media;if(e&&e.readyState){var t=e.currentTime,r=this.mediaBuffer?this.mediaBuffer:e,a=r.buffered;if(!this.loadedmetadata&&a.length){this.loadedmetadata=!0;var i=e.seeking?t:this.startPosition,n=E.default.isBuffered(r,i);t===i&&n||(_.logger.log("target start position:"+i),n||(i=a.start(0),_.logger.log("target start position not buffered, seek to buffered.start(0) "+i)),_.logger.log("adjust currentTime from "+t+" to "+i),e.currentTime=i)}else if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var s=E.default.bufferInfo(e,t,0),o=!(e.paused||e.ended||0===e.buffered.length),l=t!==this.lastCurrentTime,u=this.config;if(l)this.stallReported&&(_.logger.warn("playback not stuck anymore @"+t+", after "+Math.round(performance.now()-this.stalled)+"ms"),this.stallReported=!1),this.stalled=void 0,this.nudgeRetry=0;else if(o){var d=performance.now(),f=this.hls;if(this.stalled){var c=d-this.stalled,h=s.len,g=this.nudgeRetry||0;if(h<=.5&&c>1e3*u.lowBufferWatchdogPeriod){this.stallReported||(this.stallReported=!0,_.logger.warn("playback stalling in low buffer @"+t),f.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:h}));var v=s.nextStart,p=v-t;if(v&&p<u.maxSeekHole&&0<p){this.nudgeRetry=++g;var y=g*u.nudgeOffset;_.logger.log("adjust currentTime from "+e.currentTime+" to next buffered @ "+v+" + nudge "+y),e.currentTime=v+y,this.stalled=void 0,f.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,hole:v+y-t})}}else if(.5<h&&c>1e3*u.highBufferWatchdogPeriod)if(this.stallReported||(this.stallReported=!0,_.logger.warn("playback stalling in high buffer @"+t),f.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:h})),this.stalled=void 0,this.nudgeRetry=++g,g<u.nudgeMaxRetry){var m=e.currentTime,b=m+g*u.nudgeOffset;_.logger.log("adjust currentTime from "+m+" to "+b),e.currentTime=b,f.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else _.logger.error("still stuck in high buffer @"+t+" after "+u.nudgeMaxRetry+", raise fatal error"),f.trigger(T.default.ERROR,{type:k.ErrorTypes.MEDIA_ERROR,details:k.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}else this.stalled=d,this.stallReported=!1}}}}},{key:"onFragLoadEmergencyAborted",value:function(){this.state=v,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()}},{key:"onBufferFlushed",value:function(){var t=this.mediaBuffer?this.mediaBuffer:this.media;this._bufferedFrags=this._bufferedFrags.filter(function(e){return E.default.isBuffered(t,(e.startPTS+e.endPTS)/2)}),this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold,this.state=v,this.fragPrevious=null}},{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}},{key:"computeLivePosition",value:function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,_.logger.log("main stream:"+t+"->"+e),this.hls.trigger(T.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}]),w);function w(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,e,T.default.MEDIA_ATTACHED,T.default.MEDIA_DETACHING,T.default.MANIFEST_LOADING,T.default.MANIFEST_PARSED,T.default.LEVEL_LOADED,T.default.KEY_LOADED,T.default.FRAG_LOADED,T.default.FRAG_LOAD_EMERGENCY_ABORTED,T.default.FRAG_PARSING_INIT_SEGMENT,T.default.FRAG_PARSING_DATA,T.default.FRAG_PARSED,T.default.ERROR,T.default.AUDIO_TRACK_SWITCHING,T.default.AUDIO_TRACK_SWITCHED,T.default.BUFFER_CREATED,T.default.BUFFER_APPENDED,T.default.BUFFER_FLUSHED));return t.config=e.config,t.audioCodecSwap=!1,t.ticks=0,t._state=u,t.ontick=t.tick.bind(t),t}r.default=A},{25:25,31:31,32:32,33:33,35:35,36:36,46:46,51:51,52:52}],14:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=l(e(33)),s=l(e(32)),o=e(51);function l(e){return e&&e.__esModule?e:{default:e}}var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,s.default),a(d,[{key:"destroy",value:function(){s.default.prototype.destroy.call(this)}},{key:"clearVttFragQueues",value:function(){var t=this;this.vttFragQueues={},this.tracks.forEach(function(e){t.vttFragQueues[e.id]=[]})}},{key:"nextFrag",value:function(){if(null===this.currentlyProcessing&&-1<this.currentTrackId&&this.vttFragQueues[this.currentTrackId].length){var e=this.currentlyProcessing=this.vttFragQueues[this.currentTrackId].shift();this.hls.trigger(n.default.FRAG_LOADING,{frag:e})}}},{key:"onSubtitleFragProcessed",value:function(e){e.success&&this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),this.currentlyProcessing=null,this.nextFrag()}},{key:"onError",value:function(e){var t=e.frag;t&&"subtitle"!==t.type||this.currentlyProcessing&&(this.currentlyProcessing=null,this.nextFrag())}},{key:"onSubtitleTracksUpdated",value:function(e){var t=this;o.logger.log("subtitle tracks updated"),this.tracks=e.subtitleTracks,this.clearVttFragQueues(),this.vttFragSNsProcessed={},this.tracks.forEach(function(e){t.vttFragSNsProcessed[e.id]=[]})}},{key:"onSubtitleTrackSwitch",value:function(e){this.currentTrackId=e.id,this.clearVttFragQueues()}},{key:"onSubtitleTrackLoaded",value:function(a){var i=this.vttFragSNsProcessed[a.id],n=this.vttFragQueues[a.id],s=this.currentlyProcessing?this.currentlyProcessing.sn:-1;a.details.fragments.forEach(function(e){var t,r;r=e,-1<i.indexOf(r.sn)||e.sn===s||(t=e,n.some(function(e){return e.sn===t.sn}))||(e.trackId=a.id,n.push(e))}),this.nextFrag()}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e,n.default.ERROR,n.default.SUBTITLE_TRACKS_UPDATED,n.default.SUBTITLE_TRACK_SWITCH,n.default.SUBTITLE_TRACK_LOADED,n.default.SUBTITLE_FRAG_PROCESSED));return t.config=e.config,t.vttFragSNsProcessed={},t.vttFragQueues=void 0,t.currentlyProcessing=null,t.currentTrackId=-1,t}r.default=u},{32:32,33:33,51:51}],15:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=l(e(33)),s=l(e(32)),o=e(51);function l(e){return e&&e.__esModule?e:{default:e}}var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(d,s.default),a(d,[{key:"destroy",value:function(){s.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){var a=this;this.media=e.media,this.media&&this.media.textTracks.addEventListener("change",function(){if(a.media){for(var e=-1,t=function(e){for(var t=[],r=0;r<e.length;r++)"subtitles"===e[r].kind&&t.push(e[r]);return t}(a.media.textTracks),r=0;r<t.length;r++)"showing"===t[r].mode&&(e=r);a.subtitleTrack=e}})}},{key:"onMediaDetaching",value:function(){this.media=void 0}},{key:"onManifestLoading",value:function(){this.tracks=[],this.trackId=-1}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.trackId=-1,this.hls.trigger(n.default.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach(function(e){e.default&&(t.subtitleTrack=e.id)})}},{key:"onTick",value:function(){var e=this.trackId,t=this.tracks[e];if(t){var r=t.details;void 0!==r&&!0!==r.live||(o.logger.log("(re)loading playlist for subtitle track "+e),this.hls.trigger(n.default.SUBTITLE_TRACK_LOADING,{url:t.url,id:e}))}}},{key:"onSubtitleTrackLoaded",value:function(e){var t=this;e.id<this.tracks.length&&(o.logger.log("subtitle track "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.timer&&(this.timer=setInterval(function(){t.onTick()},1e3*e.details.targetduration,this)),!e.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))}},{key:"setSubtitleTrackInternal",value:function(e){if(0<=e&&e<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=e,o.logger.log("switching to subtitle track "+e);var t=this.tracks[e];this.hls.trigger(n.default.SUBTITLE_TRACK_SWITCH,{id:e});var r=t.details;void 0!==r&&!0!==r.live||(o.logger.log("(re)loading playlist for subtitle track "+e),this.hls.trigger(n.default.SUBTITLE_TRACK_LOADING,{url:t.url,id:e}))}}},{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&this.setSubtitleTrackInternal(e)}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e,n.default.MEDIA_ATTACHED,n.default.MEDIA_DETACHING,n.default.MANIFEST_LOADING,n.default.MANIFEST_LOADED,n.default.SUBTITLE_TRACK_LOADED));return t.tracks=[],t.trackId=-1,t.media=void 0,t}r.default=u},{32:32,33:33,51:51}],16:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=s(e(33)),n=s(e(32)),l=s(e(47)),u=s(e(55)),d=e(51);function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.cues)for(;0<e.cues.length;)e.removeCue(e.cues[0])}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(h,n.default),a(h,[{key:"addCues",value:function(e,t,r,a){for(var i,n,s,o,l=this.cueRanges,u=!1,d=l.length;d--;){var f=l[d],c=(i=f[0],n=f[1],s=t,o=r,Math.min(n,o)-Math.max(i,s));if(0<=c&&(f[0]=Math.min(f[0],t),f[1]=Math.max(f[1],r),u=!0,.5<c/(r-t)))return}u||l.push([t,r]),this.Cues.newCue(this[e],t,r,a)}},{key:"onInitPtsFound",value:function(e){var t=this;void 0===this.initPTS&&(this.initPTS=e.initPTS),this.unparsedVttFrags.length&&(this.unparsedVttFrags.forEach(function(e){t.onFragLoaded(e)}),this.unparsedVttFrags=[])}},{key:"getExistingTrack",value:function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var a=t.textTracks[r];if(!0===a["textTrack"+e])return a}return null}},{key:"createTextTrack",value:function(e,t,r){var a=this.media;if(a)return a.addTextTrack(e,t,r)}},{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(e){this.media=e.media}},{key:"onMediaDetaching",value:function(){f(this.textTrack1),f(this.textTrack2)}},{key:"onManifestLoading",value:function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0};var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)f(t[r])}}},{key:"onManifestLoaded",value:function(e){var s=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=void 0,this.cueRanges=[],this.config.enableWebVTT){this.tracks=e.subtitles||[];var o=this.media?this.media.textTracks:[];this.tracks.forEach(function(e,t){var r,a,i=void 0;if(t<o.length){var n=o[t];a=e,!(r=n)||r.label!==a.name||r.textTrack1||r.textTrack2||(i=n)}(i=i||s.createTextTrack("subtitles",e.name,e.lang)).mode=e.default?"showing":"hidden",s.textTracks.push(i)})}}},{key:"onLevelSwitching",value:function(){this.enabled="NONE"!==this.hls.currentLevel.closedCaptions}},{key:"onFragLoaded",value:function(e){var t=e.frag,r=e.payload;if("main"===t.type){var a=t.sn;a!==this.lastSn+1&&this.cea608Parser.reset(),this.lastSn=a}else if("subtitle"===t.type)if(r.byteLength){if(void 0===this.initPTS)return void this.unparsedVttFrags.push(e);var i=this.vttCCs;i[t.cc]||(i[t.cc]={start:t.start,prevCC:this.prevCC,new:!0},this.prevCC=t.cc);var n=this.textTracks,s=this.hls;u.default.parse(r,this.initPTS,i,t.cc,function(e){e.forEach(function(e){n[t.trackId].addCue(e)}),s.trigger(o.default.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:t})},function(e){d.logger.log("Failed to parse VTT cue: "+e),s.trigger(o.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})})}else this.hls.trigger(o.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})}},{key:"onFragParsingUserdata",value:function(e){if(this.enabled&&this.config.enableCEA708Captions)for(var t=0;t<e.samples.length;t++){var r=this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts,r)}}},{key:"extractCea608Data",value:function(e){for(var t,r,a,i=31&e[0],n=2,s=[],o=0;o<i;o++)t=e[n++],r=127&e[n++],a=127&e[n++],0==r&&0==a||0!=(4&t)&&0==(3&t)&&(s.push(r),s.push(a));return s}}]),h);function h(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(h.__proto__||Object.getPrototypeOf(h)).call(this,e,o.default.MEDIA_ATTACHING,o.default.MEDIA_DETACHING,o.default.FRAG_PARSING_USERDATA,o.default.MANIFEST_LOADING,o.default.MANIFEST_LOADED,o.default.FRAG_LOADED,o.default.LEVEL_SWITCHING,o.default.INIT_PTS_FOUND));if(t.hls=e,t.config=e.config,t.enabled=!0,t.Cues=e.config.cueHandler,t.textTracks=[],t.tracks=[],t.unparsedVttFrags=[],t.initPTS=void 0,t.cueRanges=[],t.config.enableCEA708Captions){var n=t,s=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},r={newCue:function(e,t,r){if(!n.textTrack1){var a=n.getExistingTrack("1");if(a)n.textTrack1=a,f(n.textTrack1),s(n.textTrack1,n.media);else{var i=n.createTextTrack("captions",n.config.captionsTextTrack1Label,n.config.captionsTextTrack1LanguageCode);i&&(i.textTrack1=!0,n.textTrack1=i)}}n.addCues("textTrack1",e,t,r)}},a={newCue:function(e,t,r){if(!n.textTrack2){var a=n.getExistingTrack("2");if(a)n.textTrack2=a,f(n.textTrack2),s(n.textTrack2,n.media);else{var i=n.createTextTrack("captions",n.config.captionsTextTrack2Label,n.config.captionsTextTrack1LanguageCode);i&&(i.textTrack2=!0,n.textTrack2=i)}}n.addCues("textTrack2",e,t,r)}};t.cea608Parser=new l.default(0,r,a)}return t}r.default=c},{32:32,33:33,47:47,51:51,55:55}],17:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(n,[{key:"decrypt",value:function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}]),n);function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.subtle=e,this.aesIV=t}r.default=i},{}],18:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(n,[{key:"uint8ArrayToUint32Array_",value:function(e){for(var t=new DataView(e),r=new Uint32Array(4),a=0;a<4;a++)r[a]=t.getUint32(4*a);return r}},{key:"initTable",value:function(){var e=this.sBox,t=this.invSBox,r=this.subMix,a=r[0],i=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],u=o[1],d=o[2],f=o[3],c=new Uint32Array(256),h=0,g=0,v=0;for(v=0;v<256;v++)c[v]=v<128?v<<1:v<<1^283;for(v=0;v<256;v++){var p=g^g<<1^g<<2^g<<3^g<<4;p=p>>>8^255&p^99;var y=c[t[e[h]=p]=h],m=c[y],b=c[m],E=257*c[p]^16843008*p;a[h]=E<<24|E>>>8,i[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,s[h]=E,E=16843009*b^65537*m^257*y^16843008*h,l[p]=E<<24|E>>>8,u[p]=E<<16|E>>>16,d[p]=E<<8|E>>>24,f[p]=E,h?(h=y^c[c[c[b^y]]],g^=c[c[g]]):h=g=1}}},{key:"expandKey",value:function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,a=0;a<t.length&&r;)r=t[a]===this.key[a],a++;if(!r){this.key=t;var i=this.keySize=t.length;if(4!==i&&6!==i&&8!==i)throw new Error("Invalid aes key size="+i);var n=this.ksRows=4*(i+6+1),s=void 0,o=void 0,l=this.keySchedule=new Uint32Array(n),u=this.invKeySchedule=new Uint32Array(n),d=this.sBox,f=this.rcon,c=this.invSubMix,h=c[0],g=c[1],v=c[2],p=c[3],y=void 0,m=void 0;for(s=0;s<n;s++)s<i?y=l[s]=t[s]:(m=y,s%i==0?(m=d[(m=m<<8|m>>>24)>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m],m^=f[s/i|0]<<24):6<i&&s%i==4&&(m=d[m>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m]),l[s]=y=(l[s-i]^m)>>>0);for(o=0;o<n;o++)s=n-o,m=3&o?l[s]:l[s-4],u[o]=o<4||s<=4?m:h[d[m>>>24]]^g[d[m>>>16&255]]^v[d[m>>>8&255]]^p[d[255&m]],u[o]=u[o]>>>0}}},{key:"networkToHostOrderSwap",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"decrypt",value:function(e,t,r){for(var a,i,n=this.keySize+6,s=this.invKeySchedule,o=this.invSBox,l=this.invSubMix,u=l[0],d=l[1],f=l[2],c=l[3],h=this.uint8ArrayToUint32Array_(r),g=h[0],v=h[1],p=h[2],y=h[3],m=new Int32Array(e),b=new Int32Array(m.length),E=void 0,T=void 0,k=void 0,_=void 0,R=void 0,S=void 0,A=void 0,w=void 0,L=void 0,O=void 0,D=void 0,P=void 0,C=this.networkToHostOrderSwap;t<m.length;){for(L=C(m[t]),O=C(m[t+1]),D=C(m[t+2]),P=C(m[t+3]),R=L^s[0],S=P^s[1],A=D^s[2],w=O^s[3],a=4,i=1;i<n;i++)E=u[R>>>24]^d[S>>16&255]^f[A>>8&255]^c[255&w]^s[a],T=u[S>>>24]^d[A>>16&255]^f[w>>8&255]^c[255&R]^s[a+1],k=u[A>>>24]^d[w>>16&255]^f[R>>8&255]^c[255&S]^s[a+2],_=u[w>>>24]^d[R>>16&255]^f[S>>8&255]^c[255&A]^s[a+3],R=E,S=T,A=k,w=_,a+=4;E=o[R>>>24]<<24^o[S>>16&255]<<16^o[A>>8&255]<<8^o[255&w]^s[a],T=o[S>>>24]<<24^o[A>>16&255]<<16^o[w>>8&255]<<8^o[255&R]^s[a+1],k=o[A>>>24]<<24^o[w>>16&255]<<16^o[R>>8&255]<<8^o[255&S]^s[a+2],_=o[w>>>24]<<24^o[R>>16&255]<<16^o[S>>8&255]<<8^o[255&A]^s[a+3],a+=3,b[t]=C(E^g),b[t+1]=C(_^v),b[t+2]=C(k^p),b[t+3]=C(T^y),g=L,v=O,p=D,y=P,t+=4}return b.buffer}},{key:"destroy",value:function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0}}]),n);function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}r.default=i},{}],19:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=s(e(17)),l=s(e(20)),u=s(e(18)),n=e(31),d=e(51);function s(e){return e&&e.__esModule?e:{default:e}}var f=(a(c,[{key:"isSync",value:function(){return this.disableWebCrypto&&this.config.enableSoftwareAES}},{key:"decrypt",value:function(t,r,a,i){var n=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(d.logger.log("JS AES decrypt"),this.logEnabled=!1);var e=this.decryptor;e||(this.decryptor=e=new u.default),e.expandKey(r),i(e.decrypt(t,0,a))}else{this.logEnabled&&(d.logger.log("WebCrypto AES decrypt"),this.logEnabled=!1);var s=this.subtle;this.key!==r&&(this.key=r,this.fastAesKey=new l.default(s,r)),this.fastAesKey.expandKey().then(function(e){new o.default(s,a).decrypt(t,e).catch(function(e){n.onWebCryptoError(e,t,r,a,i)}).then(function(e){i(e)})}).catch(function(e){n.onWebCryptoError(e,t,r,a,i)})}}},{key:"onWebCryptoError",value:function(e,t,r,a,i){this.config.enableSoftwareAES?(d.logger.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,a,i)):(d.logger.error("decrypting error : "+e.message),this.observer.trigger(Event.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))}},{key:"destroy",value:function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)}}]),c);function c(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),this.observer=e,this.config=t,this.logEnabled=!0;try{var r=crypto||self.crypto;this.subtle=r.subtle||r.webkitSubtle}catch(e){}this.disableWebCrypto=!this.subtle}r.default=f},{17:17,18:18,20:20,31:31,51:51}],20:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(n,[{key:"expandKey",value:function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}]),n);function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.subtle=e,this.key=t}r.default=i},{}],21:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=n(e(22)),y=e(51),m=n(e(27));function n(e){return e&&e.__esModule?e:{default:e}}var s=(a(o,[{key:"resetInitSegment",value:function(e,t,r,a){this._aacTrack={container:"audio/adts",type:"audio",id:-1,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:a,inputTimeScale:9e4}}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,a){var i,n,s,o,l,u,d,f,c,h,g=new m.default(e),v=90*g.timeStamp;for(i=this._aacTrack,u=g.length,c=e.length;u<c-1&&(255!==e[u]||240!=(240&e[u+1]));u++);for(i.samplerate||(n=p.default.getAudioConfig(this.observer,e,u,i.manifestCodec),i.config=n.config,i.samplerate=n.samplerate,i.channelCount=n.channelCount,i.codec=n.codec,y.logger.log("parsed codec:"+i.codec+",rate:"+n.samplerate+",nb channel:"+n.channelCount)),l=0,o=9216e4/i.samplerate;u+5<c&&(d=1&e[u+1]?7:9,s=(3&e[u+3])<<11|e[u+4]<<3|(224&e[u+5])>>>5,0<(s-=d)&&u+d+s<=c);)for(f=v+l*o,h={unit:e.subarray(u+d,u+d+s),pts:f,dts:f},i.samples.push(h),i.len+=s,u+=s+d,l++;u<c-1&&(255!==e[u]||240!=(240&e[u+1]));u++);this.remuxer.remux(i,{samples:[]},{samples:[{pts:v,dts:v,unit:g.payload}],inputTimeScale:9e4},{samples:[]},t,r,a)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){var t,r,a=new m.default(e);if(a.hasTimeStamp)for(t=a.length,r=e.length;t<r-1;t++)if(255===e[t]&&240==(240&e[t+1]))return!0;return!1}}]),o);function o(e,t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.observer=e,this.config=r,this.remuxer=t}r.default=s},{22:22,27:27,51:51}],22:[function(e,t,r){"use strict";var c=e(51),h=e(31),a={getAudioConfig:function(e,t,r,a){var i,n,s,o,l,u=navigator.userAgent.toLowerCase(),d=a,f=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(i=1+((192&t[r+2])>>>6),n=(60&t[r+2])>>>2,!(f.length-1<n))return o=(1&t[r+2])<<2,o|=(192&t[r+3])>>>6,c.logger.log("manifest codec:"+a+",ADTS data:type:"+i+",sampleingIndex:"+n+"["+f[n]+"Hz],channelConfig:"+o),s=/firefox/i.test(u)?6<=n?(i=5,l=new Array(4),n-3):(i=2,l=new Array(2),n):-1!==u.indexOf("android")?(i=2,l=new Array(2),n):(i=5,l=new Array(4),a&&(-1!==a.indexOf("mp4a.40.29")||-1!==a.indexOf("mp4a.40.5"))||!a&&6<=n?n-3:((a&&-1!==a.indexOf("mp4a.40.2")&&6<=n&&1==o||!a&&1==o)&&(i=2,l=new Array(2)),n)),l[0]=i<<3,l[0]|=(14&n)>>1,l[1]|=(1&n)<<7,l[1]|=o<<3,5===i&&(l[1]|=(14&s)>>1,l[2]=(1&s)<<7,l[2]|=8,l[3]=0),{config:l,samplerate:f[n],channelCount:o,codec:"mp4a.40."+i,manifestCodec:d};e.trigger(Event.ERROR,{type:h.ErrorTypes.MEDIA_ERROR,details:h.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+n})}};t.exports=a},{31:31,51:51}],23:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var k=n(e(33)),_=e(31),v=n(e(19)),R=n(e(21)),S=n(e(28)),A=n(e(30)),w=n(e(43)),L=n(e(44));function n(e){return e&&e.__esModule?e:{default:e}}var s=(a(o,[{key:"destroy",value:function(){var e=this.demuxer;e&&e.destroy()}},{key:"push",value:function(e,r,a,i,n,s,o,l,u,d,f,c){if(0<e.byteLength&&null!=r&&null!=r.key&&"AES-128"===r.method){var t=this.decrypter;null==t&&(t=this.decrypter=new v.default(this.observer,this.config));var h,g=this;try{h=performance.now()}catch(e){h=Date.now()}t.decrypt(e,r.key.buffer,r.iv.buffer,function(e){var t;try{t=performance.now()}catch(e){t=Date.now()}g.observer.trigger(k.default.FRAG_DECRYPTED,{stats:{tstart:h,tdecrypt:t}}),g.pushDecrypted(new Uint8Array(e),r,new Uint8Array(a),i,n,s,o,l,u,d,f,c)})}else this.pushDecrypted(new Uint8Array(e),r,new Uint8Array(a),i,n,s,o,l,u,d,f,c)}},{key:"pushDecrypted",value:function(e,t,r,a,i,n,s,o,l,u,d,f){var c=this.demuxer;if(!c||s&&!this.probe(e)){var h=this.observer,g=this.typeSupported,v=this.config,p=[{demux:A.default,remux:w.default},{demux:R.default,remux:w.default},{demux:S.default,remux:L.default}];for(var y in p){var m=p[y],b=m.demux.probe;if(b(e)){var E=this.remuxer=new m.remux(h,v,g,this.vendor);c=new m.demux(h,E,v,g),this.probe=b;break}}if(!c)return void h.trigger(k.default.ERROR,{type:_.ErrorTypes.MEDIA_ERROR,details:_.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=c}var T=this.remuxer;(s||o)&&(c.resetInitSegment(r,a,i,u),T.resetInitSegment()),s&&(c.resetTimeStamp(),T.resetTimeStamp(f)),"function"==typeof c.setDecryptData&&c.setDecryptData(t),c.append(e,n,l,d)}}]),o);function o(e,t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.observer=e,this.typeSupported=t,this.config=r,this.vendor=a}r.default=s},{19:19,21:21,28:28,30:30,31:31,33:33,43:43,44:44}],24:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=a(e(23)),o=a(e(33)),l=e(51),u=a(e(1));function a(e){return e&&e.__esModule?e:{default:e}}r.default=function(i){var n=new u.default;n.trigger=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n.emit.apply(n,[e,e].concat(r))},n.off=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n.removeListener.apply(n,[e].concat(r))};function a(e,t){i.postMessage({event:e,data:t})}i.addEventListener("message",function(e){var t=e.data;switch(t.cmd){case"init":var r=JSON.parse(t.config);i.demuxer=new s.default(n,t.typeSupported,r,t.vendor);try{(0,l.enableLogs)(!0===r.debug)}catch(e){console.warn("demuxerWorker: unable to enable logs")}a("init",null);break;case"demux":i.demuxer.push(t.data,t.decryptdata,t.initSegment,t.audioCodec,t.videoCodec,t.timeOffset,t.discontinuity,t.trackSwitch,t.contiguous,t.duration,t.accurateTimeOffset,t.defaultInitPTS)}}),n.on(o.default.FRAG_DECRYPTED,a),n.on(o.default.FRAG_PARSING_INIT_SEGMENT,a),n.on(o.default.FRAG_PARSED,a),n.on(o.default.ERROR,a),n.on(o.default.FRAG_PARSING_METADATA,a),n.on(o.default.FRAG_PARSING_USERDATA,a),n.on(o.default.INIT_PTS_FOUND,a),n.on(o.default.FRAG_PARSING_DATA,function(e,t){var r=[],a={event:e,data:t};t.data1&&(a.data1=t.data1.buffer,r.push(t.data1.buffer),delete t.data1),t.data2&&(a.data2=t.data2.buffer,r.push(t.data2.buffer),delete t.data2),i.postMessage(a,r)})}},{1:1,23:23,33:33,51:51}],25:[function(u,e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e};function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=i(u(33)),f=i(u(23)),c=i(u(24)),y=u(51),h=u(31),g=i(u(1));function i(e){return e&&e.__esModule?e:{default:e}}var n=(r(v,[{key:"destroy",value:function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)}},{key:"push",value:function(e,t,r,a,i,n,s,o){var l=this.w,u=isNaN(i.startDTS)?i.start:i.startDTS,d=i.decryptdata,f=this.frag,c=!(f&&i.cc===f.cc),h=!(f&&i.level===f.level),g=f&&i.sn===f.sn+1,v=!h&&g;if(c&&y.logger.log(this.id+":discontinuity detected"),h&&y.logger.log(this.id+":switch detected"),this.frag=i,l)l.postMessage({cmd:"demux",data:e,decryptdata:d,initSegment:t,audioCodec:r,videoCodec:a,timeOffset:u,discontinuity:c,trackSwitch:h,contiguous:v,duration:n,accurateTimeOffset:s,defaultInitPTS:o},[e]);else{var p=this.demuxer;p&&p.push(e,d,t,r,a,u,c,h,v,n,s,o)}}},{key:"onWorkerMessage",value:function(e){var t=e.data,r=this.hls;switch(t.event){case"init":URL.revokeObjectURL(this.w.objectURL);break;case d.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}}}]),v);function v(r,e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),this.hls=r,this.id=e;var i=this.observer=new g.default,t=r.config;i.trigger=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];i.emit.apply(i,[e,e].concat(r))},i.off=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];i.removeListener.apply(i,[e].concat(r))};var a=function(e,t){(t=t||{}).frag=this.frag,t.id=this.id,r.trigger(e,t)}.bind(this);i.on(d.default.FRAG_DECRYPTED,a),i.on(d.default.FRAG_PARSING_INIT_SEGMENT,a),i.on(d.default.FRAG_PARSING_DATA,a),i.on(d.default.FRAG_PARSED,a),i.on(d.default.ERROR,a),i.on(d.default.FRAG_PARSING_METADATA,a),i.on(d.default.FRAG_PARSING_USERDATA,a),i.on(d.default.INIT_PTS_FOUND,a);var n={mp4:MediaSource.isTypeSupported("video/mp4"),mpeg:MediaSource.isTypeSupported("audio/mpeg"),mp3:MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')},s=navigator.vendor;if(t.enableWorker&&"undefined"!=typeof Worker){y.logger.log("demuxing in webworker");var o=void 0;try{var l=u(3);o=this.w=l(c.default),this.onwmsg=this.onWorkerMessage.bind(this),o.addEventListener("message",this.onwmsg),o.onerror=function(e){r.trigger(d.default.ERROR,{type:h.ErrorTypes.OTHER_ERROR,details:h.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:e.message+" ("+e.filename+":"+e.lineno+")"}})},o.postMessage({cmd:"init",typeSupported:n,vendor:s,id:e,config:JSON.stringify(t)})}catch(e){y.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),o&&URL.revokeObjectURL(o.objectURL),this.demuxer=new f.default(i,n,t,s),this.w=void 0}}else this.demuxer=new f.default(i,n,t,s)}t.default=n},{1:1,23:23,24:24,3:3,31:31,33:33,51:51}],26:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=e(51);var s=(a(o,[{key:"loadWord",value:function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,a=new Uint8Array(4),i=Math.min(4,t);if(0===i)throw new Error("no bytes available");a.set(e.subarray(r,r+i)),this.word=new DataView(a.buffer).getUint32(0),this.bitsAvailable=8*i,this.bytesAvailable-=i}},{key:"skipBits",value:function(e){var t;this.bitsAvailable>e||(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord()),this.word<<=e,this.bitsAvailable-=e}},{key:"readBits",value:function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return 32<e&&n.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,0<this.bitsAvailable?this.word<<=t:0<this.bytesAvailable&&this.loadWord(),0<(t=e-t)&&this.bitsAvailable?r<<t|this.readBits(t):r}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){return this.readBits(8)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"skipScalingList",value:function(e){var t,r=8,a=8;for(t=0;t<e;t++)0!==a&&(a=(r+this.readEG()+256)%256),r=0===a?r:a}},{key:"readSPS",value:function(){var e,t,r,a,i,n,s,o=0,l=0,u=0,d=0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),g=this.readBoolean.bind(this),v=this.skipBits.bind(this),p=this.skipEG.bind(this),y=this.skipUEG.bind(this),m=this.skipScalingList.bind(this);if(f(),e=f(),c(5),v(3),f(),y(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var b=h();if(3===b&&v(1),y(),y(),v(1),g())for(n=3!==b?8:12,s=0;s<n;s++)g()&&m(s<6?16:64)}y();var E=h();if(0===E)h();else if(1===E)for(v(1),p(),p(),t=h(),s=0;s<t;s++)p();y(),v(1),r=h(),a=h(),0===(i=c(1))&&v(1),v(1),g()&&(o=h(),l=h(),u=h(),d=h());var T=[1,1];if(g()&&g())switch(f()){case 1:T=[1,1];break;case 2:T=[12,11];break;case 3:T=[10,11];break;case 4:T=[16,11];break;case 5:T=[40,33];break;case 6:T=[24,11];break;case 7:T=[20,11];break;case 8:T=[32,11];break;case 9:T=[80,33];break;case 10:T=[18,11];break;case 11:T=[15,11];break;case 12:T=[64,33];break;case 13:T=[160,99];break;case 14:T=[4,3];break;case 15:T=[3,2];break;case 16:T=[2,1];break;case 255:T=[f()<<8|f(),f()<<8|f()]}return{width:Math.ceil(16*(r+1)-2*o-2*l),height:(2-i)*(a+1)*16-(i?2:4)*(u+d),pixelRatio:T}}},{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}]),o);function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}r.default=s},{51:51}],27:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=e(51);var n=(a(d,[{key:"readUTF",value:function(e,t,r){for(var a="",i=t,n=t+r;a+=String.fromCharCode(e[i++]),i<n;);return a}},{key:"_parseID3Frames",value:function(e,t,r){for(var a,i;t+8<=r;)switch(a=this.readUTF(e,t,4),t+=4,e[t++],e[t++],e[t++],e[t++],e[t++],e[t++],a){case"PRIV":if("com.apple.streaming.transportStreamTimestamp"===this.readUTF(e,t,44)){t+=44,t+=4;var n=1&e[t++];this._hasTimeStamp=!0,i=((e[t++]<<23)+(e[t++]<<15)+(e[t++]<<7)+e[t++])/45,n&&(i+=47721858.84),i=Math.round(i),u.logger.trace("ID3 timestamp found: "+i),this._timeStamp=i}}}},{key:"hasTimeStamp",get:function(){return this._hasTimeStamp}},{key:"timeStamp",get:function(){return this._timeStamp}},{key:"length",get:function(){return this._length}},{key:"payload",get:function(){return this._payload}}]),d);function d(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),this._hasTimeStamp=!1;for(var t,r,a,i,n,s,o,l=0;;)if(s=this.readUTF(e,l,3),l+=3,"ID3"===s)l+=3,t=127&e[l++],r=127&e[l++],a=127&e[l++],i=127&e[l++],n=l+((t<<21)+(r<<14)+(a<<7)+i),this._parseID3Frames(e,l,n),l=n;else{if("3DI"!==s)return void((o=l-=3)&&(this.hasTimeStamp||u.logger.warn("ID3 tag found, but no timestamp"),this._length=o,this._payload=e.subarray(0,o)));l+=7,u.logger.log("3DI footer found, end: "+l)}}r.default=n},{51:51}],28:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n,s=e(33),o=(n=s)&&n.__esModule?n:{default:n};var l=(a(d,[{key:"resetTimeStamp",value:function(){}},{key:"resetInitSegment",value:function(e,t,r){var a=this.initData=d.parseInitSegment(e),i={};a.audio&&(i.audio={container:"audio/mp4",codec:t,initSegment:e}),a.video&&(i.video={container:"video/mp4",codec:r,initSegment:e}),this.observer.trigger(o.default.FRAG_PARSING_INIT_SEGMENT,{tracks:i})}},{key:"append",value:function(e,t,r,a){var i=this.initData,n=d.startDTS(i,e);this.remuxer.remux(i.audio,i.video,null,null,n,r,a,e)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){if(8<=e.length){var t=d.bin2str(e.subarray(4,8));return 0<=["moof","ftyp","styp"].indexOf(t)}return!1}},{key:"bin2str",value:function(e){return String.fromCharCode.apply(null,e)}},{key:"findBox",value:function(e,t){var r,a,i,n,s,o=[];if(!t.length)return null;for(r=0;r<e.byteLength;)a=e[r]<<24,a|=e[r+1]<<16,a|=e[r+2]<<8,a|=e[r+3],i=d.bin2str(e.subarray(r+4,r+8)),n=1<a?r+a:e.byteLength,i===t[0]&&(1===t.length?o.push(e.subarray(r+8,n)):(s=d.findBox(e.subarray(r+8,n),t.slice(1))).length&&(o=o.concat(s))),r=n;return o}},{key:"parseInitSegment",value:function(e){var u=[];return d.findBox(e,["moov","trak"]).forEach(function(e){var t=d.findBox(e,["tkhd"])[0];if(t){var r=t[0],a=0===r?12:20,i=t[a]<<24|t[a+1]<<16|t[a+2]<<8|t[a+3];i=i<0?4294967296+i:i;var n=d.findBox(e,["mdia","mdhd"])[0];if(n){var s=n[a=0===(r=n[0])?12:20]<<24|n[a+1]<<16|n[a+2]<<8|n[a+3],o=d.findBox(e,["mdia","hdlr"])[0];if(o){var l={soun:"audio",vide:"video"}[d.bin2str(o.subarray(8,12))];l&&(u[i]={timescale:s,type:l},u[l]={timescale:s,id:i})}}}}),u}},{key:"startDTS",value:function(i,e){var t,r,a;return t=d.findBox(e,["moof","traf"]),r=[].concat.apply([],t.map(function(a){return d.findBox(a,["tfhd"]).map(function(e){var t,r;return t=e[4]<<24|e[5]<<16|e[6]<<8|e[7],r=i[t].timescale||9e4,(d.findBox(a,["tfdt"]).map(function(e){var t,r;return t=e[0],r=e[4]<<24|e[5]<<16|e[6]<<8|e[7],1===t&&(r*=Math.pow(2,32),r+=e[8]<<24|e[9]<<16|e[10]<<8|e[11]),r})[0]||1/0)/r})})),a=Math.min.apply(null,r),isFinite(a)?a:0}}]),d);function d(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),this.observer=e,this.remuxer=t}r.default=l},{33:33}],29:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n,s=e(19),o=(n=s)&&n.__esModule?n:{default:n};var l=(a(u,[{key:"decryptBuffer",value:function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)}},{key:"decryptAacSample",value:function(t,r,a,i){var n=t[r].unit,e=n.subarray(16,n.length-n.length%16),s=e.buffer.slice(e.byteOffset,e.byteOffset+e.length),o=this;this.decryptBuffer(s,function(e){e=new Uint8Array(e),n.set(e,16),i||o.decryptAacSamples(t,r+1,a)})}},{key:"decryptAacSamples",value:function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var a=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,a),!a)return}}}},{key:"getAvcEncryptedData",value:function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),a=0,i=32;i<=e.length-16;i+=160,a+=16)r.set(e.subarray(i,i+16),a);return r}},{key:"getAvcDecryptedUnit",value:function(e,t){t=new Uint8Array(t);for(var r=0,a=32;a<=e.length-16;a+=160,r+=16)e.set(t.subarray(r,r+16),a);return e}},{key:"decryptAvcSample",value:function(t,r,a,i,n,s){var o=this.discardEPB(n.data),e=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(e.buffer,function(e){n.data=l.getAvcDecryptedUnit(o,e),s||l.decryptAvcSamples(t,r,a+1,i)})}},{key:"decryptAvcSamples",value:function(e,t,r,a){for(;;t++,r=0){if(t>=e.length)return void a();for(var i=e[t].units;!(r>=i.length);r++){var n=i[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,a,n,s),!s)return}}}}}]),u);function u(e,t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),this.decryptdata=r,this.discardEPB=a,this.decrypter=new o.default(e,t)}r.default=l},{19:19}],30:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var E=s(e(22)),D=s(e(33)),T=s(e(26)),n=s(e(29)),P=e(51),C=e(31);function s(e){return e&&e.__esModule?e:{default:e}}var o=(a(l,[{key:"setDecryptData",value:function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new n.default(this.observer,this.config,e,this.discardEPB):this.sampleAes=null}},{key:"resetInitSegment",value:function(e,t,r,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack={container:"video/mp2t",type:"video",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:0},this._audioTrack={container:"video/mp2t",type:"audio",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,isAAC:!0},this._id3Track={type:"id3",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this._txtTrack={type:"text",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=t,this.videoCodec=r,this._duration=a}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,a){var i,n,s,o,l,u=e.length,d=!1;this.contiguous=r;var f=this.pmtParsed,c=this._avcTrack,h=this._audioTrack,g=this._id3Track,v=c.id,p=h.id,y=g.id,m=this._pmtId,b=c.pesData,E=h.pesData,T=g.pesData,k=this._parsePAT,_=this._parsePMT,R=this._parsePES,S=this._parseAVCPES.bind(this),A=this._parseAACPES.bind(this),w=this._parseMPEGPES.bind(this),L=this._parseID3PES.bind(this);for(u-=u%188,i=0;i<u;i+=188)if(71===e[i]){if(n=!!(64&e[i+1]),s=((31&e[i+1])<<8)+e[i+2],1<(48&e[i+3])>>4){if((o=i+5+e[i+4])===i+188)continue}else o=i+4;switch(s){case v:n&&(b&&(l=R(b))&&S(l,!1),b={data:[],size:0}),b&&(b.data.push(e.subarray(o,i+188)),b.size+=i+188-o);break;case p:n&&(E&&(l=R(E))&&(h.isAAC?A:w)(l),E={data:[],size:0}),E&&(E.data.push(e.subarray(o,i+188)),E.size+=i+188-o);break;case y:n&&(T&&(l=R(T))&&L(l),T={data:[],size:0}),T&&(T.data.push(e.subarray(o,i+188)),T.size+=i+188-o);break;case 0:n&&(o+=e[o]+1),m=this._pmtId=k(e,o);break;case m:n&&(o+=e[o]+1);var O=_(e,o,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);0<(v=O.avc)&&(c.id=v),0<(p=O.audio)&&(h.id=p,h.isAAC=O.isAAC),0<(y=O.id3)&&(g.id=y),d&&!f&&(P.logger.log("reparse from beginning"),d=!1,i=-188),f=this.pmtParsed=!0;break;case 17:case 8191:break;default:d=!0}}else this.observer.trigger(D.default.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});b&&(l=R(b))?(S(l,!0),c.pesData=null):c.pesData=b,E&&(l=R(E))?((h.isAAC?A:w)(l),h.pesData=null):(E&&E.size&&P.logger.log("last AAC PES packet truncated,might overlap between fragments"),h.pesData=E),T&&(l=R(T))?(L(l),g.pesData=null):g.pesData=T,null==this.sampleAes?this.remuxer.remux(h,c,g,this._txtTrack,t,r,a):this.decryptAndRemux(h,c,g,this._txtTrack,t,r,a)}},{key:"decryptAndRemux",value:function(e,t,r,a,i,n,s){if(e.samples&&e.isAAC){var o=this;this.sampleAes.decryptAacSamples(e.samples,0,function(){o.decryptAndRemuxAvc(e,t,r,a,i,n,s)})}else this.decryptAndRemuxAvc(e,t,r,a,i,n,s)}},{key:"decryptAndRemuxAvc",value:function(e,t,r,a,i,n,s){if(t.samples){var o=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,function(){o.remuxer.remux(e,t,r,a,i,n,s)})}else this.remuxer.remux(e,t,r,a,i,n,s)}},{key:"destroy",value:function(){this._initPTS=this._initDTS=void 0,this._duration=0}},{key:"_parsePAT",value:function(e,t){return(31&e[t+10])<<8|e[t+11]}},{key:"_parsePMT",value:function(e,t,r,a){var i,n,s={audio:-1,avc:-1,id3:-1,isAAC:!0};for(i=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<i;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!a){P.logger.log("unkown stream type:"+e[t]);break}case 15:-1===s.audio&&(s.audio=n);break;case 21:-1===s.id3&&(s.id3=n);break;case 219:if(!a){P.logger.log("unkown stream type:"+e[t]);break}case 27:-1===s.avc&&(s.avc=n);break;case 3:case 4:r?-1===s.audio&&(s.audio=n,s.isAAC=!1):P.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:P.logger.warn("HEVC stream type found, not supported for now");break;default:P.logger.log("unkown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return s}},{key:"_parsePES",value:function(e){var t,r,a,i,n,s,o,l,u=0,d=e.data;if(!e||0===e.size)return null;for(;d[0].length<19&&1<d.length;){var f=new Uint8Array(d[0].length+d[1].length);f.set(d[0]),f.set(d[1],d[0].length),d[0]=f,d.splice(1,1)}if(1!==((t=d[0])[0]<<16)+(t[1]<<8)+t[2])return null;if((a=(t[4]<<8)+t[5])&&a>e.size-6)return null;192&(r=t[7])&&(4294967295<(s=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2)&&(s-=8589934592),64&r?(4294967295<(o=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)&&(o-=8589934592),54e5<s-o&&(P.logger.warn(Math.round((s-o)/9e4)+"s delta between PTS and DTS, align them"),s=o)):o=s),l=(i=t[8])+9,e.size-=l,n=new Uint8Array(e.size);for(var c=0,h=d.length;c<h;c++){var g=(t=d[c]).byteLength;if(l){if(g<l){l-=g;continue}t=t.subarray(l),g-=l,l=0}n.set(t,u),u+=g}return a&&(a-=i+3),{data:n,pts:s,dts:o,len:a}}},{key:"pushAccesUnit",value:function(e,t){if(e.units.length&&e.frame){var r=t.samples,a=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(a||this.contiguous)?(e.id=a,r.push(e)):t.dropped++}e.debug.length&&P.logger.log(e.pts+"/"+e.dts+":"+e.debug)}},{key:"_parseAVCPES",value:function(g,e){var v,p,y,m=this,b=this._avcTrack,t=this._parseAVCNALu(g.data),E=this.avcSample;g.data=null,t.forEach(function(e){switch(e.type){case 1:p=!0,E.frame=!0;var t=e.data;if(4<t.length){var r=new T.default(t).readSliceType();2!==r&&4!==r&&7!==r&&9!==r||(E.key=!0)}break;case 5:p=!0,(E=E||(m.avcSample=m._createAVCSample(!0,g.pts,g.dts,""))).key=!0,E.frame=!0;break;case 6:p=!0,(v=new T.default(m.discardEPB(e.data))).readUByte();for(var a=0,i=0,n=!1,s=0;!n&&1<v.bytesAvailable;){for(a=0;a+=s=v.readUByte(),255===s;);for(i=0;i+=s=v.readUByte(),255===s;);if(4===a&&0!==v.bytesAvailable){if(n=!0,181===v.readUByte()&&49===v.readUShort()&&1195456820===v.readUInt()&&3===v.readUByte()){var o=v.readUByte(),l=31&o,u=[o,v.readUByte()];for(y=0;y<l;y++)u.push(v.readUByte()),u.push(v.readUByte()),u.push(v.readUByte());m._insertSampleInOrder(m._txtTrack.samples,{type:3,pts:g.pts,bytes:u})}}else if(i<v.bytesAvailable)for(y=0;y<i;y++)v.readUByte()}break;case 7:if(p=!0,!b.sps){var d=(v=new T.default(e.data)).readSPS();b.width=d.width,b.height=d.height,b.pixelRatio=d.pixelRatio,b.sps=[e.data],b.duration=m._duration;var f=e.data.subarray(1,4),c="avc1.";for(y=0;y<3;y++){var h=f[y].toString(16);h.length<2&&(h="0"+h),c+=h}b.codec=c}break;case 8:p=!0,b.pps||(b.pps=[e.data]);break;case 9:p=!1,E&&m.pushAccesUnit(E,b),E=m.avcSample=m._createAVCSample(!1,g.pts,g.dts,"");break;case 12:p=!1;break;default:p=!1,E&&(E.debug+="unknown NAL "+e.type+" ")}E&&p&&E.units.push(e)}),e&&E&&(this.pushAccesUnit(E,b),this.avcSample=null)}},{key:"_createAVCSample",value:function(e,t,r,a){return{key:e,pts:t,dts:r,units:[],debug:a}}},{key:"_insertSampleInOrder",value:function(e,t){var r=e.length;if(0<r){if(t.pts>=e[r-1].pts)e.push(t);else for(var a=r-1;0<=a;a--)if(t.pts<e[a].pts){e.splice(a,0,t);break}}else e.push(t)}},{key:"_getLastNalUnit",value:function(){var e=this.avcSample,t=void 0;if(!e||0===e.units.length){var r=this._avcTrack.samples;e=r[r.length-1]}if(e){var a=e.units;t=a[a.length-1]}return t}},{key:"_parseAVCNALu",value:function(e){var t,r,a,i,n=0,s=e.byteLength,o=this._avcTrack,l=o.naluState||0,u=l,d=[],f=-1;for(-1===l&&(i=31&e[f=0],l=0,n=1);n<s;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){if(0<=f)a={data:e.subarray(f,n-l-1),type:i},d.push(a);else{var c=this._getLastNalUnit();if(c&&(u&&n<=4-u&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-u)),0<(r=n-l-1))){var h=new Uint8Array(c.data.byteLength+r);h.set(c.data,0),h.set(e.subarray(0,r),c.data.byteLength),c.data=h}}l=n<s?(i=31&e[f=n],0):-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;if(0<=f&&0<=l&&(a={data:e.subarray(f,s),type:i,state:l},d.push(a)),0===d.length){var g=this._getLastNalUnit();if(g){var v=new Uint8Array(g.data.byteLength+e.byteLength);v.set(g.data,0),v.set(e,g.data.byteLength),g.data=v}}return o.naluState=l,d}},{key:"discardEPB",value:function(e){for(var t,r,a=e.byteLength,i=[],n=1;n<a-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(i.push(n+2),n+=2):n++;if(0===i.length)return e;t=a-i.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===i[0]&&(s++,i.shift()),r[n]=e[s];return r}},{key:"_parseAACPES",value:function(e){var t,r,a,i,n,s,o,l,u,d,f,c=this._audioTrack,h=e.data,g=e.pts,v=this.aacOverFlow,p=this.aacLastPTS;if(v){var y=new Uint8Array(v.byteLength+h.byteLength);y.set(v,0),y.set(h,v.byteLength),h=y}for(n=0,l=h.length;n<l-1&&(255!==h[n]||240!=(240&h[n+1]));n++);if(!n||(f=n<l-1?(d="AAC PES did not start with ADTS header,offset:"+n,!1):(d="no ADTS header found in AAC PES",!0),P.logger.warn("parsing error:"+d),this.observer.trigger(D.default.ERROR,{type:C.ErrorTypes.MEDIA_ERROR,details:C.ErrorDetails.FRAG_PARSING_ERROR,fatal:f,reason:d}),!f)){if(!c.samplerate){var m=this.audioCodec;t=E.default.getAudioConfig(this.observer,h,n,m),c.config=t.config,c.samplerate=t.samplerate,c.channelCount=t.channelCount,c.codec=t.codec,c.manifestCodec=t.manifestCodec,c.duration=this._duration,P.logger.log("parsed codec:"+c.codec+",rate:"+t.samplerate+",nb channel:"+t.channelCount)}if(i=0,a=9216e4/c.samplerate,v&&p){var b=p+a;1<Math.abs(b-g)&&(P.logger.log("AAC: align PTS for overlapping frames by "+Math.round((b-g)/90)),g=b)}for(;n+5<l&&(s=1&h[n+1]?7:9,r=(3&h[n+3])<<11|h[n+4]<<3|(224&h[n+5])>>>5,0<(r-=s)&&n+s+r<=l);)for(o=g+i*a,u={unit:h.subarray(n+s,n+s+r),pts:o,dts:o},c.samples.push(u),c.len+=r,n+=r+s,i++;n<l-1&&(255!==h[n]||240!=(240&h[n+1]));n++);v=n<l?h.subarray(n,l):null,this.aacOverFlow=v,this.aacLastPTS=o}}},{key:"_parseMPEGPES",value:function(e){for(var t,r=e.data,a=e.pts,i=r.length,n=0,s=0;s<i&&0<(t=this._parseMpeg(r,s,i,n++,a));)s+=t}},{key:"_onMpegFrame",value:function(e,t,r,a,i,n){var s=n+i*(1152/r*1e3),o=this._audioTrack;o.config=[],o.channelCount=a,o.samplerate=r,o.duration=this._duration,o.samples.push({unit:e,pts:s,dts:s}),o.len+=e.length}},{key:"_onMpegNoise",value:function(e){P.logger.warn("mpeg audio has noise: "+e.length+" bytes")}},{key:"_parseMpeg",value:function(e,t,r,a,i){if(r<t+2)return-1;if(255===e[t]||224==(224&e[t+1])){if(r<t+24)return-1;var n=e[t+1]>>3&3,s=e[t+1]>>1&3,o=e[t+2]>>4&15,l=e[t+2]>>2&3,u=!!(2&e[t+2]);if(1!=n&&0!=o&&15!=o&&3!=l){var d=1e3*[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160][14*(3==n?3-s:3==s?3:4)+o-1],f=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3][3*(3==n?0:2==n?1:2)+l],c=u?1:0,h=e[t+3]>>6==3?1:2,g=3==s?(3==n?12:6)*d/f+c<<2:(3==n?144:72)*d/f+c|0;return r<t+g?-1:(this._onMpegFrame&&this._onMpegFrame(e.subarray(t,t+g),d,f,h,a,i),g)}}for(var v=t+2;v<r;){if(255===e[v-1]&&224==(224&e[v]))return this._onMpegNoise&&this._onMpegNoise(e.subarray(t,v-1)),v-t-1;v++}return-1}},{key:"_parseID3PES",value:function(e){this._id3Track.samples.push(e)}}],[{key:"probe",value:function(e){return 564<=e.length&&71===e[0]&&71===e[188]&&71===e[376]}}]),l);function l(e,t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.observer=e,this.config=r,this.typeSupported=a,this.remuxer=t,this.sampleAes=null}r.default=o},{22:22,26:26,29:29,31:31,33:33,51:51}],31:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},r.ErrorDetails={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException",WEBVTT_EXCEPTION:"webVTTException"}},{}],32:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e};function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s,o=e(51),l=e(31),u=e(33),d=(s=u)&&s.__esModule?s:{default:s};var f=(i(c,[{key:"destroy",value:function(){this.unregisterListeners()}},{key:"isEventHandler",value:function(){return"object"===a(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}},{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if("hlsEventGeneric"===e)throw new Error("Forbidden event name: "+e);this.hls.on(e,this.onEvent)}.bind(this))}},{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)}.bind(this))}},{key:"onEvent",value:function(e,t){this.onEventGeneric(e,t)}},{key:"onEventGeneric",value:function(t,e){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,t,e).call()}catch(e){o.logger.error("internal error happened while processing "+t+":"+e.message),this.hls.trigger(d.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:t,err:e})}}}]),c);function c(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),this.hls=e,this.onEvent=this.onEvent.bind(this);for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];this.handledEvents=r,this.useGenericHandler=!0,this.registerListeners()}r.default=f},{31:31,33:33,51:51}],33:[function(e,t,r){"use strict";t.exports={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCH:"hlsLevelSwitch",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCH:"hlsAudioTrackSwitch",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},{}],34:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(n,null,[{key:"getSilentFrame",value:function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null}}]),n);function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}r.default=i},{}],35:[function(e,t,r){"use strict";var a={isBuffered:function(e,t){if(e)for(var r=e.buffered,a=0;a<r.length;a++)if(t>=r.start(a)&&t<=r.end(a))return!0;return!1},bufferInfo:function(e,t,r){if(e){var a,i=e.buffered,n=[];for(a=0;a<i.length;a++)n.push({start:i.start(a),end:i.end(a)});return this.bufferedInfo(n,t,r)}return{len:0,start:t,end:t,nextStart:void 0}},bufferedInfo:function(e,t,r){var a,i,n,s,o,l=[];for(e.sort(function(e,t){var r=e.start-t.start;return r||t.end-e.end}),o=0;o<e.length;o++){var u=l.length;if(u){var d=l[u-1].end;e[o].start-d<r?e[o].end>d&&(l[u-1].end=e[o].end):l.push(e[o])}else l.push(e[o])}for(a=o=0,i=n=t;o<l.length;o++){var f=l[o].start,c=l[o].end;if(f<=t+r&&t<c)i=f,a=(n=c)-t;else if(t+r<f){s=f;break}}return{len:a,start:i,end:n,nextStart:s}}};t.exports=a},{}],36:[function(e,t,r){"use strict";var h=e(51),g={mergeDetails:function(e,t){var r,a=Math.max(e.startSN,t.startSN)-t.startSN,i=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,s=e.fragments,o=t.fragments,l=0;if(i<a)t.PTSKnown=!1;else{for(var u=a;u<=i;u++){var d=s[n+u],f=o[u];f&&d&&(l=d.cc-f.cc,isNaN(d.startPTS)||(f.start=f.startPTS=d.startPTS,f.endPTS=d.endPTS,f.duration=d.duration,r=f))}if(l)for(h.logger.log("discontinuity sliding from playlist, take drift into account"),u=0;u<o.length;u++)o[u].cc+=l;if(r)g.updateFragPTSDTS(t,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS);else if(0<=n&&n<s.length){var c=s[n].start;for(u=0;u<o.length;u++)o[u].start+=c}t.PTSKnown=e.PTSKnown}},updateFragPTSDTS:function(e,t,r,a,i,n){if(!isNaN(t.startPTS)){var s=Math.abs(t.startPTS-r);isNaN(t.deltaPTS)?t.deltaPTS=s:t.deltaPTS=Math.max(s,t.deltaPTS),r=Math.min(r,t.startPTS),a=Math.max(a,t.endPTS),i=Math.min(i,t.startDTS),n=Math.max(n,t.endDTS)}var o=r-t.start;t.start=t.startPTS=r,t.endPTS=a,t.startDTS=i,t.endDTS=n,t.duration=a-r;var l,u,d,f=t.sn;if(!e||f<e.startSN||f>e.endSN)return 0;for(l=f-e.startSN,t=(u=e.fragments)[l],d=l;0<d;d--)g.updatePTS(u,d,d-1);for(d=l;d<u.length-1;d++)g.updatePTS(u,d,d+1);return e.PTSKnown=!0,o},updatePTS:function(e,t,r){var a=e[t],i=e[r],n=i.startPTS;isNaN(n)?i.start=t<r?a.start+a.duration:Math.max(a.start-i.duration,0):t<r?(a.duration=n-a.start,a.duration<0&&h.logger.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!")):(i.duration=a.start-n,i.duration<0&&h.logger.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!"))}};t.exports=g},{51:51}],37:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=u(e(2)),s=u(e(33)),o=e(31),m=u(e(41)),b=u(e(39)),E=u(e(40)),T=u(e(13)),k=u(e(12)),_=u(e(11)),R=e(51),S=u(e(1)),l=e(4);function u(e){return e&&e.__esModule?e:{default:e}}var d=(a(A,null,[{key:"isSupported",value:function(){return window.MediaSource=window.MediaSource||window.WebKitMediaSource,window.MediaSource&&"function"==typeof window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}},{key:"version",get:function(){return"0.7.6"}},{key:"Events",get:function(){return s.default}},{key:"ErrorTypes",get:function(){return o.ErrorTypes}},{key:"ErrorDetails",get:function(){return o.ErrorDetails}},{key:"DefaultConfig",get:function(){return A.defaultConfig?A.defaultConfig:l.hlsDefaultConfig},set:function(e){A.defaultConfig=e}}]),a(A,[{key:"destroy",value:function(){R.logger.log("destroy"),this.trigger(s.default.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(e){e.destroy()}),this.url=null,this.observer.removeAllListeners(),this._autoLevelCapping=-1}},{key:"attachMedia",value:function(e){R.logger.log("attachMedia"),this.media=e,this.trigger(s.default.MEDIA_ATTACHING,{media:e})}},{key:"detachMedia",value:function(){R.logger.log("detachMedia"),this.trigger(s.default.MEDIA_DETACHING),this.media=null}},{key:"loadSource",value:function(e){e=n.default.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),R.logger.log("loadSource:"+e),this.url=e,this.trigger(s.default.MANIFEST_LOADING,{url:e})}},{key:"startLoad",value:function(e){var t=0<arguments.length&&void 0!==e?e:-1;R.logger.log("startLoad("+t+")"),this.networkControllers.forEach(function(e){e.startLoad(t)})}},{key:"stopLoad",value:function(){R.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})}},{key:"swapAudioCodec",value:function(){R.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}},{key:"recoverMediaError",value:function(){R.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)}},{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){R.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){R.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){R.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){R.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){R.logger.log("set startLevel:"+e),-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){R.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,a=0;a<r;a++)if(t<(e[a].realBitrate?Math.max(e[a].realBitrate,e[a].bitrate):e[a].bitrate))return a;return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}}]),A);function A(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,A);var r=A.DefaultConfig;if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var a in r)a in e||(e[a]=r[a]);if(void 0!==e.liveMaxLatencyDurationCount&&e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(e.liveMaxLatencyDuration<=e.liveSyncDuration||void 0===e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0,R.enableLogs)(e.debug),this.config=e,this._autoLevelCapping=-1;var i=this.observer=new S.default;i.trigger=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];i.emit.apply(i,[e,e].concat(r))},i.off=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];i.removeListener.apply(i,[e].concat(r))},this.on=i.on.bind(i),this.off=i.off.bind(i),this.trigger=i.trigger.bind(i);var n=this.abrController=new e.abrController(this),s=new e.bufferController(this),o=new e.capLevelController(this),l=new e.fpsController(this),u=new m.default(this),d=new b.default(this),f=new E.default(this),c=new _.default(this),h=[this.levelController=new k.default(this),this.streamController=new T.default(this)],g=e.audioStreamController;g&&h.push(new g(this)),this.networkControllers=h;var v=[u,d,f,n,s,o,l,c];if(g=e.audioTrackController){var p=new g(this);this.audioTrackController=p,v.push(p)}if(g=e.subtitleTrackController){var y=new g(this);this.subtitleTrackController=y,v.push(y)}[e.subtitleStreamController,e.timelineController].forEach(function(e){e&&v.push(new e(t))}),this.coreComponents=v}r.default=d},{1:1,11:11,12:12,13:13,2:2,31:31,33:33,39:39,4:4,40:40,41:41,51:51}],38:[function(e,t,r){"use strict";t.exports=e(37).default},{37:37}],39:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=l(e(33)),s=l(e(32)),o=e(31),d=e(51);function l(e){return e&&e.__esModule?e:{default:e}}var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(f,s.default),a(f,[{key:"destroy",value:function(){var e=this.loaders;for(var t in e){var r=e[t];r&&r.destroy()}this.loaders={},s.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag,r=t.type,a=this.loaders[r],i=this.hls.config;t.loaded=0,a&&(d.logger.warn("abort previous fragment loader for type:"+r),a.abort()),a=this.loaders[r]=t.loader=void 0!==i.fLoader?new i.fLoader(i):new i.loader(i);var n,s,o=void 0;o={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var l=t.byteRangeStartOffset,u=t.byteRangeEndOffset;isNaN(l)||isNaN(u)||(o.rangeStart=l,o.rangeEnd=u),n={timeout:i.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:i.fragLoadingMaxRetryTimeout},s={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},a.load(o,n,s)}},{key:"loadsuccess",value:function(e,t,r){var a=e.data,i=r.frag;i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(n.default.FRAG_LOADED,{payload:a,frag:i,stats:t})}},{key:"loaderror",value:function(e,t){var r=t.loader;r&&r.abort(),this.loaders[t.type]=void 0,this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.loader;r&&r.abort(),this.loaders[t.type]=void 0,this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag})}},{key:"loadprogress",value:function(e,t){var r=t.frag;r.loaded=e.loaded,this.hls.trigger(n.default.FRAG_LOAD_PROGRESS,{frag:r,stats:e})}}]),f);function f(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e,n.default.FRAG_LOADING));return t.loaders={},t}r.default=u},{31:31,32:32,33:33,51:51}],40:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=o(e(33)),n=o(e(32)),s=e(31),f=e(51);function o(e){return e&&e.__esModule?e:{default:e}}var l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,n.default),a(u,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},n.default.prototype.destroy.call(this)}},{key:"onKeyLoading",value:function(e){var t=e.frag,r=t.type,a=this.loaders[r],i=t.decryptdata,n=i.uri;if(n!==this.decrypturl||null===this.decryptkey){var s,o,l,u=this.hls.config;a&&(f.logger.warn("abort previous key loader for type:"+r),a.abort()),t.loader=this.loaders[r]=new u.loader(u),this.decrypturl=n,this.decryptkey=null,s={url:n,frag:t,responseType:"arraybuffer"},o={timeout:u.fragLoadingTimeOut,maxRetry:u.fragLoadingMaxRetry,retryDelay:u.fragLoadingRetryDelay,maxRetryDelay:u.fragLoadingMaxRetryTimeout},l={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(s,o,l)}else this.decryptkey&&(i.key=this.decryptkey,this.hls.trigger(d.default.KEY_LOADED,{frag:t}))}},{key:"loadsuccess",value:function(e,t,r){var a=r.frag;this.decryptkey=a.decryptdata.key=new Uint8Array(e.data),a.loader=void 0,this.loaders[a.type]=void 0,this.hls.trigger(d.default.KEY_LOADED,{frag:a})}},{key:"loaderror",value:function(e,t){var r=t.frag,a=r.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(d.default.ERROR,{type:s.ErrorTypes.NETWORK_ERROR,details:s.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.frag,a=r.loader;a&&a.abort(),this.loaders[t.type]=void 0,this.hls.trigger(d.default.ERROR,{type:s.ErrorTypes.NETWORK_ERROR,details:s.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})}}]),u);function u(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e,d.default.KEY_LOADING));return t.loaders={},t.decryptkey=null,t.decrypturl=null,t}r.default=l},{31:31,32:32,33:33,51:51}],41:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=o(e(2)),p=o(e(33)),s=o(e(32)),y=e(31),w=o(e(45)),L=e(51);function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var d=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,u=/#EXT-X-MEDIA:(.*)/g,O=/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*))?|(?!#)(\S.+)|#EXT-X-BYTERANGE: *(.+)|#EXT-X-PROGRAM-DATE-TIME:(.+)|#.*/g,D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,P=(a(f,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=n.default.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),f);function f(){l(this,f),this.method=null,this.key=null,this.iv=null,this._uri=null}var C=(a(c,[{key:"createInitializationVector",value:function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t}},{key:"fragmentDecryptdataFromLevelkey",value:function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&((r=new P).method=e.method,r.baseuri=e.baseuri,r.reluri=e.reluri,r.iv=this.createInitializationVector(t)),r}},{key:"cloneObj",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=n.default.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"programDateTime",get:function(){return!this._programDateTime&&this.rawProgramDateTime&&(this._programDateTime=new Date(Date.parse(this.rawProgramDateTime))),this._programDateTime}},{key:"byteRange",get:function(){if(!this._byteRange){var e=this._byteRange=[];if(this.rawByteRange){var t=this.rawByteRange.split("@",2);if(1===t.length){var r=this.lastByteRangeEndOffset;e[0]=r||0}else e[0]=parseInt(t[1]);e[1]=parseInt(t[0])+e[0]}}return this._byteRange}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}}]),c);function c(){l(this,c),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[]}var h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(g,s.default),a(g,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},s.default.prototype.destroy.call(this)}},{key:"onManifestLoading",value:function(e){this.load(e.url,{type:"manifest"})}},{key:"onLevelLoading",value:function(e){this.load(e.url,{type:"level",level:e.level,id:e.id})}},{key:"onAudioTrackLoading",value:function(e){this.load(e.url,{type:"audioTrack",id:e.id})}},{key:"onSubtitleTrackLoading",value:function(e){this.load(e.url,{type:"subtitleTrack",id:e.id})}},{key:"load",value:function(e,t){var r=this.loaders[t.type];if(r){var a=r.context;if(a&&a.url===e)return void L.logger.trace("playlist request ongoing");L.logger.warn("abort previous loader for type:"+t.type),r.abort()}var i,n,s=this.hls.config,o=void 0,l=void 0,u=void 0,d=void 0;"manifest"===t.type?(o=s.manifestLoadingMaxRetry,l=s.manifestLoadingTimeOut,u=s.manifestLoadingRetryDelay,d=s.manifestLoadingMaxRetryTimeout):(o=s.levelLoadingMaxRetry,l=s.levelLoadingTimeOut,u=s.levelLoadingRetryDelay,d=s.levelLoadingMaxRetryTimeout,L.logger.log("loading playlist for "+t.type+" "+(t.level||t.id))),r=this.loaders[t.type]=t.loader=void 0!==s.pLoader?new s.pLoader(s):new s.loader(s),t.url=e,t.responseType="",i={timeout:l,maxRetry:o,retryDelay:u,maxRetryDelay:d},n={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},r.load(t,i,n)}},{key:"resolve",value:function(e,t){return n.default.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}},{key:"parseMasterPlaylist",value:function(e,t){var r=[],a=void 0;for(d.lastIndex=0;null!=(a=d.exec(e));){var i={},n=i.attrs=new w.default(a[1]);i.url=this.resolve(a[2],t);var s=n.decimalResolution("RESOLUTION");s&&(i.width=s.width,i.height=s.height),i.bitrate=n.decimalInteger("AVERAGE-BANDWIDTH")||n.decimalInteger("BANDWIDTH"),i.name=n.NAME;var o=n.CODECS;if(o){o=o.split(/[ ,]+/);for(var l=0;l<o.length;l++){var u=o[l];-1!==u.indexOf("avc1")?i.videoCodec=this.avc1toavcoti(u):i.audioCodec=u}}r.push(i)}return r}},{key:"parseMasterPlaylistMedia",value:function(e,t,r){var a=void 0,i=[],n=0;for(u.lastIndex=0;null!=(a=u.exec(e));){var s={},o=new w.default(a[1]);o.TYPE===r&&(s.groupId=o["GROUP-ID"],s.name=o.NAME,s.type=r,s.default="YES"===o.DEFAULT,s.autoselect="YES"===o.AUTOSELECT,s.forced="YES"===o.FORCED,o.URI&&(s.url=this.resolve(o.URI,t)),s.lang=o.LANGUAGE,s.name||(s.name=s.lang),s.id=n++,i.push(s))}return i}},{key:"avc1toavcoti",value:function(e){var t,r=e.split(".");return 2<r.length?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t}},{key:"parseLevelPlaylist",value:function(e,t,r,a){var i,n,s=0,o=0,l={type:null,version:null,url:t,fragments:[],live:!0,startSN:0},u=new P,d=0,f=null,c=new C;for(O.lastIndex=0;null!==(i=O.exec(e));){var h=i[1];if(h){c.duration=parseFloat(h);var g=(" "+i[2]).slice(1);c.title=g||null,c.tagList.push(g?["INF",h,g]:["INF",h])}else if(i[3]){if(!isNaN(c.duration)){var v=s++;c.type=a,c.start=o,c.levelkey=u,c.sn=v,c.level=r,c.cc=d,c.baseurl=t,c.relurl=(" "+i[3]).slice(1),l.fragments.push(c),o+=(f=c).duration,c=new C}}else if(i[4]){if(c.rawByteRange=(" "+i[4]).slice(1),f){var p=f.byteRangeEndOffset;p&&(c.lastByteRangeEndOffset=p)}}else if(i[5])c.rawProgramDateTime=(" "+i[5]).slice(1),c.tagList.push(["PROGRAM-DATE-TIME",c.rawProgramDateTime]);else{for(i=i[0].match(D),n=1;n<i.length&&void 0===i[n];n++);var y=(" "+i[n+1]).slice(1),m=(" "+i[n+2]).slice(1);switch(i[n]){case"#":c.tagList.push(m?[y,m]:[y]);break;case"PLAYLIST-TYPE":l.type=y.toUpperCase();break;case"MEDIA-SEQUENCE":s=l.startSN=parseInt(y);break;case"TARGETDURATION":l.targetduration=parseFloat(y);break;case"VERSION":l.version=parseInt(y);break;case"EXTM3U":break;case"ENDLIST":l.live=!1;break;case"DIS":d++,c.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":d=parseInt(y);break;case"KEY":var b=y,E=new w.default(b),T=E.enumeratedString("METHOD"),k=E.URI,_=E.hexadecimalInteger("IV");T&&(u=new P,k&&0<=["AES-128","SAMPLE-AES"].indexOf(T)&&(u.method=T,u.baseuri=t,u.reluri=k,u.key=null,u.iv=_));break;case"START":var R=y,S=new w.default(R).decimalFloatingPoint("TIME-OFFSET");isNaN(S)||(l.startTimeOffset=S);break;case"MAP":var A=new w.default(y);c.relurl=A.URI,c.rawByteRange=A.BYTERANGE,c.baseurl=t,c.level=r,c.type=a,c.sn="initSegment",l.initSegment=c,c=new C;break;default:L.logger.warn("line parsed but not handled: "+i)}}}return(c=f)&&!c.relurl&&(l.fragments.pop(),o-=c.duration),l.totalduration=o,l.averagetargetduration=o/l.fragments.length,l.endSN=s-1,l}},{key:"loadsuccess",value:function(e,t,r){var a=e.data,i=e.url,n=r.type,s=r.id,o=r.level,l=this.hls;if((this.loaders[n]=void 0)!==i&&0!==i.indexOf("data:")||(i=r.url),t.tload=performance.now(),0===a.indexOf("#EXTM3U"))if(0<a.indexOf("#EXTINF:")){var u="audioTrack"!==n&&"subtitleTrack"!==n,d=isNaN(o)?isNaN(s)?0:s:o,f=this.parseLevelPlaylist(a,i,d,"audioTrack"===n?"audio":"subtitleTrack"===n?"subtitle":"main");f.tload=t.tload,"manifest"===n&&l.trigger(p.default.MANIFEST_LOADED,{levels:[{url:i,details:f}],audioTracks:[],url:i,stats:t}),t.tparsed=performance.now(),f.targetduration?u?l.trigger(p.default.LEVEL_LOADED,{details:f,level:o||0,id:s||0,stats:t}):"audioTrack"===n?l.trigger(p.default.AUDIO_TRACK_LOADED,{details:f,id:s,stats:t}):"subtitleTrack"===n&&l.trigger(p.default.SUBTITLE_TRACK_LOADED,{details:f,id:s,stats:t}):l.trigger(p.default.ERROR,{type:y.ErrorTypes.NETWORK_ERROR,details:y.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:i,reason:"invalid targetduration"})}else{var c=this.parseMasterPlaylist(a,i);if(c.length){var h=this.parseMasterPlaylistMedia(a,i,"AUDIO"),g=this.parseMasterPlaylistMedia(a,i,"SUBTITLES");if(h.length){var v=!1;h.forEach(function(e){e.url||(v=!0)}),!1===v&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(L.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}l.trigger(p.default.MANIFEST_LOADED,{levels:c,audioTracks:h,subtitles:g,url:i,stats:t})}else l.trigger(p.default.ERROR,{type:y.ErrorTypes.NETWORK_ERROR,details:y.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:i,reason:"no level found in manifest"})}else l.trigger(p.default.ERROR,{type:y.ErrorTypes.NETWORK_ERROR,details:y.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:i,reason:"no EXTM3U delimiter"})}},{key:"loaderror",value:function(e,t){var r,a,i=t.loader;switch(t.type){case"manifest":r=y.ErrorDetails.MANIFEST_LOAD_ERROR,a=!0;break;case"level":r=y.ErrorDetails.LEVEL_LOAD_ERROR,a=!1;break;case"audioTrack":r=y.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,a=!1}i&&(i.abort(),this.loaders[t.type]=void 0),this.hls.trigger(p.default.ERROR,{type:y.ErrorTypes.NETWORK_ERROR,details:r,fatal:a,url:i.url,loader:i,response:e,context:t})}},{key:"loadtimeout",value:function(e,t){var r,a,i=t.loader;switch(t.type){case"manifest":r=y.ErrorDetails.MANIFEST_LOAD_TIMEOUT,a=!0;break;case"level":r=y.ErrorDetails.LEVEL_LOAD_TIMEOUT,a=!1;break;case"audioTrack":r=y.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT,a=!1}i&&(i.abort(),this.loaders[t.type]=void 0),this.hls.trigger(p.default.ERROR,{type:y.ErrorTypes.NETWORK_ERROR,details:r,fatal:a,url:i.url,loader:i,context:t})}}]),g);function g(e){l(this,g);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,e,p.default.MANIFEST_LOADING,p.default.LEVEL_LOADING,p.default.AUDIO_TRACK_LOADING,p.default.SUBTITLE_TRACK_LOADING));return t.loaders={},t}r.default=h},{2:2,31:31,32:32,33:33,45:45,51:51}],42:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=Math.pow(2,32)-1,n=(a(c,null,[{key:"init",value:function(){var e;for(e in c.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]})c.types.hasOwnProperty(e)&&(c.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);c.HDLR_TYPES={video:t,audio:r};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),i=new Uint8Array([0,0,0,0,0,0,0,0]);c.STTS=c.STSC=c.STCO=i,c.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),c.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),c.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),c.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var n=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),o=new Uint8Array([0,0,0,1]);c.FTYP=c.box(c.types.ftyp,n,o,n,s),c.DINF=c.box(c.types.dinf,c.box(c.types.dref,a))}},{key:"box",value:function(e){for(var t,r=Array.prototype.slice.call(arguments,1),a=8,i=r.length,n=i;i--;)a+=r[i].byteLength;for((t=new Uint8Array(a))[0]=a>>24&255,t[1]=a>>16&255,t[2]=a>>8&255,t[3]=255&a,t.set(e,4),i=0,a=8;i<n;i++)t.set(r[i],a),a+=r[i].byteLength;return t}},{key:"hdlr",value:function(e){return c.box(c.types.hdlr,c.HDLR_TYPES[e])}},{key:"mdat",value:function(e){return c.box(c.types.mdat,e)}},{key:"mdhd",value:function(e,t){t*=e;var r=Math.floor(t/(1+o)),a=Math.floor(t%(1+o));return c.box(c.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24,r>>16&255,r>>8&255,255&r,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))}},{key:"mdia",value:function(e){return c.box(c.types.mdia,c.mdhd(e.timescale,e.duration),c.hdlr(e.type),c.minf(e))}},{key:"mfhd",value:function(e){return c.box(c.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))}},{key:"minf",value:function(e){return"audio"===e.type?c.box(c.types.minf,c.box(c.types.smhd,c.SMHD),c.DINF,c.stbl(e)):c.box(c.types.minf,c.box(c.types.vmhd,c.VMHD),c.DINF,c.stbl(e))}},{key:"moof",value:function(e,t,r){return c.box(c.types.moof,c.mfhd(e),c.traf(r,t))}},{key:"moov",value:function(e){for(var t=e.length,r=[];t--;)r[t]=c.trak(e[t]);return c.box.apply(null,[c.types.moov,c.mvhd(e[0].timescale,e[0].duration)].concat(r).concat(c.mvex(e)))}},{key:"mvex",value:function(e){for(var t=e.length,r=[];t--;)r[t]=c.trex(e[t]);return c.box.apply(null,[c.types.mvex].concat(r))}},{key:"mvhd",value:function(e,t){t*=e;var r=Math.floor(t/(1+o)),a=Math.floor(t%(1+o)),i=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24,r>>16&255,r>>8&255,255&r,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return c.box(c.types.mvhd,i)}},{key:"sdtp",value:function(e){var t,r,a=e.samples||[],i=new Uint8Array(4+a.length);for(r=0;r<a.length;r++)t=a[r].flags,i[r+4]=t.dependsOn<<4|t.isDependedOn<<2|t.hasRedundancy;return c.box(c.types.sdtp,i)}},{key:"stbl",value:function(e){return c.box(c.types.stbl,c.stsd(e),c.box(c.types.stts,c.STTS),c.box(c.types.stsc,c.STSC),c.box(c.types.stsz,c.STSZ),c.box(c.types.stco,c.STCO))}},{key:"avc1",value:function(e){var t,r,a,i=[],n=[];for(t=0;t<e.sps.length;t++)a=(r=e.sps[t]).byteLength,i.push(a>>>8&255),i.push(255&a),i=i.concat(Array.prototype.slice.call(r));for(t=0;t<e.pps.length;t++)a=(r=e.pps[t]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(r));var s=c.box(c.types.avcC,new Uint8Array([1,i[3],i[4],i[5],255,224|e.sps.length].concat(i).concat([e.pps.length]).concat(n))),o=e.width,l=e.height,u=e.pixelRatio[0],d=e.pixelRatio[1];return c.box(c.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,o>>8&255,255&o,l>>8&255,255&l,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,c.box(c.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),c.box(c.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,255&u,d>>24,d>>16&255,d>>8&255,255&d])))}},{key:"esds",value:function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}},{key:"mp4a",value:function(e){var t=e.samplerate;return c.box(c.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,255&t,0,0]),c.box(c.types.esds,c.esds(e)))}},{key:"mp3",value:function(e){var t=e.samplerate;return c.box(c.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,255&t,0,0]))}},{key:"stsd",value:function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?c.box(c.types.stsd,c.STSD,c.mp4a(e)):c.box(c.types.stsd,c.STSD,c.mp3(e)):c.box(c.types.stsd,c.STSD,c.avc1(e))}},{key:"tkhd",value:function(e){var t=e.id,r=e.duration*e.timescale,a=e.width,i=e.height,n=Math.floor(r/(1+o)),s=Math.floor(r%(1+o));return c.box(c.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,i>>8&255,255&i,0,0]))}},{key:"traf",value:function(e,t){var r=c.sdtp(e),a=e.id,i=Math.floor(t/(1+o)),n=Math.floor(t%(1+o));return c.box(c.types.traf,c.box(c.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),c.box(c.types.tfdt,new Uint8Array([1,0,0,0,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n])),c.trun(e,r.length+16+20+8+16+8+8),r)}},{key:"trak",value:function(e){return e.duration=e.duration||4294967295,c.box(c.types.trak,c.tkhd(e),c.mdia(e))}},{key:"trex",value:function(e){var t=e.id;return c.box(c.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(e,t){var r,a,i,n,s,o,l=e.samples||[],u=l.length,d=12+16*u,f=new Uint8Array(d);for(t+=8+d,f.set([0,0,15,1,u>>>24&255,u>>>16&255,u>>>8&255,255&u,t>>>24&255,t>>>16&255,t>>>8&255,255&t],0),r=0;r<u;r++)i=(a=l[r]).duration,n=a.size,s=a.flags,o=a.cts,f.set([i>>>24&255,i>>>16&255,i>>>8&255,255&i,n>>>24&255,n>>>16&255,n>>>8&255,255&n,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,61440&s.degradPrio,15&s.degradPrio,o>>>24&255,o>>>16&255,o>>>8&255,255&o],12+16*r);return c.box(c.types.trun,f)}},{key:"initSegment",value:function(e){c.types||c.init();var t,r=c.moov(e);return(t=new Uint8Array(c.FTYP.byteLength+r.byteLength)).set(c.FTYP),t.set(r,c.FTYP.byteLength),t}}]),c);function c(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c)}r.default=n},{}],43:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var K=n(e(34)),$=n(e(33)),ee=e(51),te=n(e(42)),re=e(31);function n(e){return e&&e.__esModule?e:{default:e}}var s=(a(o,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(e){this._initPTS=this._initDTS=e}},{key:"resetInitSegment",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(e,t,r,a,i,n,s){if(this.ISGenerated||this.generateIS(e,t,i),this.ISGenerated)if(e.samples.length){e.timescale||(ee.logger.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,i));var o=this.remuxAudio(e,i,n,s);if(t.samples.length){var l=void 0;o&&(l=o.endPTS-o.startPTS),t.timescale||(ee.logger.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,i)),this.remuxVideo(t,i,n,l)}}else{var u=void 0;t.samples.length&&(u=this.remuxVideo(t,i,n)),u&&e.codec&&this.remuxEmptyAudio(e,i,n,u)}r.samples.length&&this.remuxID3(r,i),a.samples.length&&this.remuxText(a,i),this.observer.trigger($.default.FRAG_PARSED)}},{key:"generateIS",value:function(e,t,r){var a,i,n=this.observer,s=e.samples,o=t.samples,l=this.typeSupported,u="audio/mp4",d={},f={tracks:d},c=void 0===this._initPTS;if(c&&(a=i=1/0),e.config&&s.length&&(e.timescale=e.samplerate,ee.logger.log("audio sampling rate : "+e.samplerate),e.isAAC||(l.mpeg?(u="audio/mpeg",e.codec=""):l.mp3&&(e.codec="mp3")),d.audio={container:u,codec:e.codec,initSegment:!e.isAAC&&l.mpeg?new Uint8Array:te.default.initSegment([e]),metadata:{channelCount:e.channelCount}},c&&(a=i=s[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&o.length){var h=t.inputTimeScale;t.timescale=h,d.video={container:"video/mp4",codec:t.codec,initSegment:te.default.initSegment([t]),metadata:{width:t.width,height:t.height}},c&&(a=Math.min(a,o[0].pts-h*r),i=Math.min(i,o[0].dts-h*r),this.observer.trigger($.default.INIT_PTS_FOUND,{initPTS:a}))}Object.keys(d).length?(n.trigger($.default.FRAG_PARSING_INIT_SEGMENT,f),this.ISGenerated=!0,c&&(this._initPTS=a,this._initDTS=i)):n.trigger($.default.ERROR,{type:re.ErrorTypes.MEDIA_ERROR,details:re.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})}},{key:"remuxVideo",value:function(e,t,r,a){var i,n,s,o,l,u,d,f=8,c=e.timescale,h=e.samples,g=[],v=h.length,p=this._PTSNormalize,y=this._initDTS;h.sort(function(e,t){var r=e.dts-t.dts,a=e.pts-t.pts;return r||a||e.id-t.id});var m=h.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(m<0){ee.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(m/90)+" ms to overcome this issue");for(var b=0;b<h.length;b++)h[b].dts+=m}var E=void 0;E=r?this.nextAvcDts:t*c;var T=h[0];l=Math.max(p(T.dts-y,E),0),o=Math.max(p(T.pts-y,E),0);var k=Math.round((l-E)/90);r&&k&&(1<k?ee.logger.log("AVC:"+k+" ms hole between fragments detected,filling it"):k<-1&&ee.logger.log("AVC:"+-k+" ms overlapping between fragments detected"),l=E,h[0].dts=l+y,o=Math.max(o-k,E),h[0].pts=o+y,ee.logger.log("Video/PTS/DTS adjusted: "+Math.round(o/90)+"/"+Math.round(l/90)+",delta:"+k+" ms")),T=h[h.length-1],d=Math.max(p(T.dts-y,E),0),u=Math.max(p(T.pts-y,E),0),u=Math.max(u,d);var _=this.isSafari;_&&(i=Math.round((d-l)/(h.length-1)));for(var R=0,S=0,A=0;A<v;A++){for(var w=h[A],L=w.units,O=L.length,D=0,P=0;P<O;P++)D+=L[P].data.length;S+=D,R+=O,w.length=D,w.dts=_?l+A*i:Math.max(p(w.dts-y,E),l),w.pts=Math.max(p(w.pts-y,E),w.dts)}var C=S+4*R+8;try{n=new Uint8Array(C)}catch(e){return void this.observer.trigger($.default.ERROR,{type:re.ErrorTypes.MUX_ERROR,details:re.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:C,reason:"fail allocating video mdat "+C})}var I=new DataView(n.buffer);I.setUint32(0,C),n.set(te.default.types.mdat,4);for(var x=0;x<v;x++){for(var M=h[x],F=M.units,N=0,U=void 0,B=0,G=F.length;B<G;B++){var j=F[B],V=j.data,H=j.data.byteLength;I.setUint32(f,H),f+=4,n.set(V,f),f+=H,N+=4+H}if(_)U=Math.max(0,i*Math.round((M.pts-M.dts)/i));else{if(x<v-1)i=h[x+1].dts-M.dts;else{var K=this.config,W=M.dts-h[0<x?x-1:x].dts;if(K.stretchShortVideoTrack){var X=K.maxBufferHole,Y=K.maxSeekHole,z=Math.floor(Math.min(X,Y)*c),q=(a?o+a*c:this.nextAudioPts)-M.pts;z<q?((i=q-W)<0&&(i=W),ee.logger.log("It is approximately "+q/90+" ms to the next segment; using duration "+i/90+" ms for the last video frame.")):i=W}else i=W}U=Math.round(M.pts-M.dts)}g.push({size:N,duration:i,cts:U,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:M.key?2:1,isNonSync:M.key?0:1}})}this.nextAvcDts=d+i;var Q=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,g.length&&-1<navigator.userAgent.toLowerCase().indexOf("chrome")){var J=g[0].flags;J.dependsOn=2,J.isNonSync=0}e.samples=g,s=te.default.moof(e.sequenceNumber++,l,e),e.samples=[];var Z={data1:s,data2:n,startPTS:o/c,endPTS:(u+i)/c,startDTS:l/c,endDTS:this.nextAvcDts/c,type:"video",nb:g.length,dropped:Q};return this.observer.trigger($.default.FRAG_PARSING_DATA,Z),Z}},{key:"remuxAudio",value:function(e,t,r,a){var i,n,s,o,l,u,d,f,c,h,g,v,p,y,m,b=e.inputTimeScale,E=b/e.timescale,T=(e.isAAC?1024:1152)*E,k=this._PTSNormalize,_=this._initDTS,R=!e.isAAC&&this.typeSupported.mpeg,S=R?0:8,A=[],w=[];if(e.samples.sort(function(e,t){return e.pts-t.pts}),w=e.samples,m=this.nextAudioPts,(r|=w.length&&m&&(a&&Math.abs(t-m/b)<.1||Math.abs(w[0].pts-m-_)<20*T))||(m=t*b),a&&e.isAAC)for(var L=0,O=m;L<w.length;){var D=w[L],P=k(D.pts-_,m)-O;if(P<=-T)ee.logger.warn("Dropping 1 audio frame @ "+(O/b).toFixed(3)+"s due to "+Math.abs(1e3*P/b)+" ms overlap."),w.splice(L,1),e.len-=D.unit.length;else if(T<=P&&O){var C=Math.round(P/T);ee.logger.warn("Injecting "+C+" audio frame @ "+(O/b).toFixed(3)+"s due to "+1e3*P/b+" ms gap.");for(var I=0;I<C;I++)y=O+_,y=Math.max(y,_),(p=K.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(ee.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),p=D.unit.subarray()),w.splice(L,0,{unit:p,pts:y,dts:y}),e.len+=p.length,O+=T,L+=1;D.pts=D.dts=O+_,O+=T,L+=1}else Math.abs(P),O+=T,D.pts=D.dts=0===L?_+m:w[L-1].pts+T,L+=1}for(var x=0,M=w.length;x<M;x++){if(s=(i=w[x]).unit,c=i.pts-_,h=i.dts-_,void 0!==f)g=k(c,f),v=k(h,f),n.duration=Math.round((v-f)/E);else{g=k(c,m),v=k(h,m);var F=Math.round(1e3*(g-m)/b),N=0;if(r&&e.isAAC&&F){if(0<F)N=Math.round((g-m)/T),ee.logger.log(F+" ms hole between AAC samples detected,filling it"),0<N&&(p=(p=K.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||s.subarray(),e.len+=N*p.length);else if(F<-12){ee.logger.log("drop overlapping AAC sample, expected/parsed/delta:"+(m/b).toFixed(3)+"s/"+(g/b).toFixed(3)+"s/"+-F+"ms"),e.len-=s.byteLength;continue}g=v=m}if(u=Math.max(0,g),d=Math.max(0,v),!(0<e.len))return;var U=R?e.len:e.len+8;try{o=new Uint8Array(U)}catch(e){return void this.observer.trigger($.default.ERROR,{type:re.ErrorTypes.MUX_ERROR,details:re.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:U,reason:"fail allocating audio mdat "+U})}R||(new DataView(o.buffer).setUint32(0,U),o.set(te.default.types.mdat,4));for(var B=0;B<N;B++)y=g-(N-B)*T,(p=K.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(ee.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),p=s.subarray()),o.set(p,S),S+=p.byteLength,n={size:p.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(n)}o.set(s,S);var G=s.byteLength;S+=G,n={size:G,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},A.push(n),f=v}var j=0,V=A.length;if(2<=V&&(j=A[V-2].duration,n.duration=j),V){this.nextAudioPts=g+E*j,e.len=0,e.samples=A,l=R?new Uint8Array:te.default.moof(e.sequenceNumber++,d/E,e),e.samples=[];var H={data1:l,data2:o,startPTS:u/b,endPTS:this.nextAudioPts/b,startDTS:d/b,endDTS:(v+E*j)/b,type:"audio",nb:V};return this.observer.trigger($.default.FRAG_PARSING_DATA,H),H}return null}},{key:"remuxEmptyAudio",value:function(e,t,r,a){var i=e.inputTimeScale,n=i/(e.samplerate?e.samplerate:i),s=this.nextAudioPts,o=(void 0!==s?s:a.startDTS*i)+this._initDTS,l=a.endDTS*i+this._initDTS,u=1024*n,d=Math.ceil((l-o)/u),f=K.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(ee.logger.warn("remux empty Audio"),f){for(var c=[],h=0;h<d;h++){var g=o+h*u;c.push({unit:f,pts:g,dts:g}),e.len+=f.length}e.samples=c,this.remuxAudio(e,t,r)}else ee.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")}},{key:"remuxID3",value:function(e){var t,r=e.samples.length,a=e.inputTimeScale,i=this._initPTS,n=this._initDTS;if(r){for(var s=0;s<r;s++)(t=e.samples[s]).pts=(t.pts-i)/a,t.dts=(t.dts-n)/a;this.observer.trigger($.default.FRAG_PARSING_METADATA,{samples:e.samples})}e.samples=[]}},{key:"remuxText",value:function(e){e.samples.sort(function(e,t){return e.pts-t.pts});var t,r=e.samples.length,a=e.inputTimeScale,i=this._initPTS;if(r){for(var n=0;n<r;n++)(t=e.samples[n]).pts=(t.pts-i)/a;this.observer.trigger($.default.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]}},{key:"_PTSNormalize",value:function(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;4294967296<Math.abs(e-t);)e+=r;return e}}]),o);function o(e,t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.observer=e,this.config=t,this.typeSupported=r;var i=navigator.userAgent;this.isSafari=a&&-1<a.indexOf("Apple")&&i&&!i.match("CriOS"),this.ISGenerated=!1}r.default=s},{31:31,33:33,34:34,42:42,51:51}],44:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n,s=e(33),d=(n=s)&&n.__esModule?n:{default:n};var o=(a(l,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(){}},{key:"resetInitSegment",value:function(){}},{key:"remux",value:function(e,t,r,a,i,n,s,o){var l=this.observer,u="";e&&(u+="audio"),t&&(u+="video"),l.trigger(d.default.FRAG_PARSING_DATA,{data1:o,startPTS:i,startDTS:i,type:u,nb:1,dropped:0}),l.trigger(d.default.FRAG_PARSED)}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.observer=e}r.default=o},{33:33}],45:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=/^(\d+)x(\d+)$/,n=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,s=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(o,[{key:"decimalInteger",value:function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"hexadecimalInteger",value:function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),a=0;a<t.length/2;a++)r[a]=parseInt(t.slice(2*a,2*a+2),16);return r}return null}},{key:"hexadecimalIntegerAsNumber",value:function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"decimalFloatingPoint",value:function(e){return parseFloat(this[e])}},{key:"enumeratedString",value:function(e){return this[e]}},{key:"decimalResolution",value:function(e){var t=i.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}}],[{key:"parseAttrList",value:function(e){var t,r={};for(n.lastIndex=0;null!==(t=n.exec(e));){var a=t[2];0===a.indexOf('"')&&a.lastIndexOf('"')===a.length-1&&(a=a.slice(1,-1)),r[t[1]]=a}return r}}]),o);function o(e){for(var t in!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),"string"==typeof e&&(e=o.parseAttrList(e)),e)e.hasOwnProperty(t)&&(this[t]=e[t])}r.default=s},{}],46:[function(e,t,r){"use strict";t.exports={search:function(e,t){for(var r=0,a=e.length-1,i=null,n=null;r<=a;){var s=t(n=e[i=(r+a)/2|0]);if(0<s)r=i+1;else{if(!(s<0))return n;a=i-1}}return null}}},{}],47:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=e;return n.hasOwnProperty(e)&&(t=n[e]),String.fromCharCode(t)}function l(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t}var n={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},u={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},d={17:2,18:4,21:6,22:8,23:10,19:13,20:15},f={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},c={25:2,26:4,29:6,30:8,31:10,27:13,28:15},h=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],g={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(e){this.time=e},log:function(e,t){var r=this.verboseFilter[e];this.verboseLevel>=r&&console.log(this.time+" ["+e+"] "+t)}},v=(a(p,[{key:"reset",value:function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}},{key:"setStyles",value:function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var a=t[r];e.hasOwnProperty(a)&&(this[a]=e[a])}}},{key:"isDefault",value:function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash}},{key:"equals",value:function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}},{key:"copy",value:function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}},{key:"toString",value:function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}]),p);function p(e,t,r,a,i){s(this,p),this.foreground=e||"white",this.underline=t||!1,this.italics=r||!1,this.background=a||"black",this.flash=i||!1}var y=(a(m,[{key:"reset",value:function(){this.uchar=" ",this.penState.reset()}},{key:"setChar",value:function(e,t){this.uchar=e,this.penState.copy(t)}},{key:"setPenState",value:function(e){this.penState.copy(e)}},{key:"equals",value:function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}},{key:"copy",value:function(e){this.uchar=e.uchar,this.penState.copy(e.penState)}},{key:"isEmpty",value:function(){return" "===this.uchar&&this.penState.isDefault()}}]),m);function m(e,t,r,a,i,n){s(this,m),this.uchar=e||" ",this.penState=new v(t,r,a,i,n)}var b=(a(E,[{key:"equals",value:function(e){for(var t=!0,r=0;r<100;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<100;t++)this.chars[t].copy(e.chars[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<100;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}},{key:"setCursor",value:function(e){this.pos!==e&&(this.pos=e),this.pos<0?(g.log("ERROR","Negative cursor position "+this.pos),this.pos=0):100<this.pos&&(g.log("ERROR","Too large cursor position "+this.pos),this.pos=100)}},{key:"moveCursor",value:function(e){var t=this.pos+e;if(1<e)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}},{key:"backSpace",value:function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}},{key:"insertChar",value:function(e){144<=e&&this.backSpace();var t=o(e);100<=this.pos?g.log("ERROR","Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))}},{key:"clearFromPos",value:function(e){var t;for(t=e;t<100;t++)this.chars[t].reset()}},{key:"clear",value:function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}},{key:"clearToEndOfRow",value:function(){this.clearFromPos(this.pos)}},{key:"getTextString",value:function(){for(var e=[],t=!0,r=0;r<100;r++){var a=this.chars[r].uchar;" "!==a&&(t=!1),e.push(a)}return t?"":e.join("")}},{key:"setPenStyles",value:function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}]),E);function E(){s(this,E),this.chars=[];for(var e=0;e<100;e++)this.chars.push(new y);this.pos=0,this.currPenState=new v}var T=(a(k,[{key:"reset",value:function(){for(var e=0;e<15;e++)this.rows[e].clear();this.currRow=14}},{key:"equals",value:function(e){for(var t=!0,r=0;r<15;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<15;t++)this.rows[t].copy(e.rows[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<15;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}},{key:"backSpace",value:function(){this.rows[this.currRow].backSpace()}},{key:"clearToEndOfRow",value:function(){this.rows[this.currRow].clearToEndOfRow()}},{key:"insertChar",value:function(e){this.rows[this.currRow].insertChar(e)}},{key:"setPen",value:function(e){this.rows[this.currRow].setPenStyles(e)}},{key:"moveCursor",value:function(e){this.rows[this.currRow].moveCursor(e)}},{key:"setCursor",value:function(e){g.log("INFO","setCursor: "+e),this.rows[this.currRow].setCursor(e)}},{key:"setPAC",value:function(e){g.log("INFO","pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<15;r++)this.rows[r].clear();var a=this.currRow+1-this.nrRollUpRows,i=this.lastOutputScreen;if(i){var n=i.rows[a].cueStartTime;if(n&&n<g.time)for(var s=0;s<this.nrRollUpRows;s++)this.rows[t-this.nrRollUpRows+s+1].copy(i.rows[a+s])}}this.currRow=t;var o=this.rows[this.currRow];if(null!==e.indent){var l=e.indent,u=Math.max(l-1,0);o.setCursor(e.indent),e.color=o.chars[u].penState.foreground}var d={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(d)}},{key:"setBkgData",value:function(e){g.log("INFO","bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}},{key:"setRollUpRows",value:function(e){this.nrRollUpRows=e}},{key:"rollUp",value:function(){if(null!==this.nrRollUpRows){g.log("TEXT",this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),g.log("INFO","Rolling up")}else g.log("DEBUG","roll_up but nrRollUpRows not set yet")}},{key:"getDisplayText",value:function(e){e=e||!1;for(var t=[],r="",a=-1,i=0;i<15;i++){var n=this.rows[i].getTextString();n&&(a=i+1,e?t.push("Row "+a+": '"+n+"'"):t.push(n.trim()))}return 0<t.length&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r}},{key:"getTextAndFormat",value:function(){return this.rows}}]),k);function k(){s(this,k),this.rows=[];for(var e=0;e<15;e++)this.rows.push(new b);this.currRow=14,this.nrRollUpRows=null,this.reset()}var _=(a(R,[{key:"reset",value:function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null}},{key:"getHandler",value:function(){return this.outputFilter}},{key:"setHandler",value:function(e){this.outputFilter=e}},{key:"setPAC",value:function(e){this.writeScreen.setPAC(e)}},{key:"setBkgData",value:function(e){this.writeScreen.setBkgData(e)}},{key:"setMode",value:function(e){e!==this.mode&&(this.mode=e,g.log("INFO","MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}},{key:"insertChars",value:function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";g.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(g.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}},{key:"ccRCL",value:function(){g.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}},{key:"ccBS",value:function(){g.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}},{key:"ccAOF",value:function(){}},{key:"ccAON",value:function(){}},{key:"ccDER",value:function(){g.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}},{key:"ccRU",value:function(e){g.log("INFO","RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}},{key:"ccFON",value:function(){g.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})}},{key:"ccRDC",value:function(){g.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}},{key:"ccTR",value:function(){g.log("INFO","TR"),this.setMode("MODE_TEXT")}},{key:"ccRTD",value:function(){g.log("INFO","RTD"),this.setMode("MODE_TEXT")}},{key:"ccEDM",value:function(){g.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate()}},{key:"ccCR",value:function(){g.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate()}},{key:"ccENM",value:function(){g.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}},{key:"ccEOC",value:function(){if(g.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,g.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate()}},{key:"ccTO",value:function(e){g.log("INFO","TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}},{key:"ccMIDROW",value:function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=46<=e,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}g.log("INFO","MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}},{key:"outputDataUpdate",value:function(){var e=g.time;null!==e&&this.outputFilter&&(this.outputFilter.updateData&&this.outputFilter.updateData(e,this.displayedMemory),null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.lastOutputScreen),this.cueStartTime=this.displayedMemory.isEmpty()?null:e):this.cueStartTime=e,this.lastOutputScreen.copy(this.displayedMemory))}},{key:"cueSplitAtTime",value:function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}]),R);function R(e,t){s(this,R),this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new T,this.nonDisplayedMemory=new T,this.lastOutputScreen=new T,this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}var S=(a(A,[{key:"getHandler",value:function(e){return this.channels[e].getHandler()}},{key:"setHandler",value:function(e,t){this.channels[e].setHandler(t)}},{key:"addData",value:function(e,t){var r,a,i,n=!1;this.lastTime=e,g.setTime(e);for(var s=0;s<t.length;s+=2)a=127&t[s],i=127&t[s+1],0!=a||0!=i?(g.log("DATA","["+l([t[s],t[s+1]])+"] -> ("+l([a,i])+")"),(r=(r=(r=(r=this.parseCmd(a,i))||this.parseMidrow(a,i))||this.parsePAC(a,i))||this.parseBackgroundAttributes(a,i))||(n=this.parseChars(a,i))&&(this.currChNr&&0<=this.currChNr?this.channels[this.currChNr-1].insertChars(n):g.log("WARNING","No channel found yet. TEXT-MODE?")),r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,g.log("WARNING","Couldn't parse cleaned data "+l([a,i])+" orig: "+l([t[s],t[s+1]])))):this.dataCounters.padding+=2}},{key:"parseCmd",value:function(e,t){var r=null;if(!((20===e||28===e)&&32<=t&&t<=47||(23===e||31===e)&&33<=t&&t<=35))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,g.log("DEBUG","Repeated command ("+l([e,t])+") is dropped"),!0;r=20===e||23===e?1:2;var a=this.channels[r-1];return 20===e||28===e?32===t?a.ccRCL():33===t?a.ccBS():34===t?a.ccAOF():35===t?a.ccAON():36===t?a.ccDER():37===t?a.ccRU(2):38===t?a.ccRU(3):39===t?a.ccRU(4):40===t?a.ccFON():41===t?a.ccRDC():42===t?a.ccTR():43===t?a.ccRTD():44===t?a.ccEDM():45===t?a.ccCR():46===t?a.ccENM():47===t&&a.ccEOC():a.ccTO(t-32),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"parseMidrow",value:function(e,t){var r=null;return(17===e||25===e)&&32<=t&&t<=47&&((r=17===e?1:2)!==this.currChNr?(g.log("ERROR","Mismatch channel in midrow parsing"),!1):(this.channels[r-1].ccMIDROW(t),g.log("DEBUG","MIDROW ("+l([e,t])+")"),!0))}},{key:"parsePAC",value:function(e,t){var r,a=null;if(!((17<=e&&e<=23||25<=e&&e<=31)&&64<=t&&t<=127||(16===e||24===e)&&64<=t&&t<=95))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,!(this.lastCmdB=null);r=e<=23?1:2,a=64<=t&&t<=95?1==r?u[e]:f[e]:1==r?d[e]:c[e];var i=this.interpretPAC(a,t);return this.channels[r-1].setPAC(i),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"interpretPAC",value:function(e,t){var r=t,a={color:null,italics:!1,indent:null,underline:!1,row:e};return r=95<t?t-96:t-64,a.underline=1==(1&r),r<=13?a.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(a.italics=!0,a.color="white"):a.indent=4*Math.floor((r-16)/2),a}},{key:"parseChars",value:function(e,t){var r=null,a=null,i=null;if(17<=(i=25<=e?(r=2,e-8):(r=1,e))&&i<=19){var n=t;n=17===i?t+80:18===i?t+112:t+144,g.log("INFO","Special char '"+o(n)+"' in channel "+r),a=[n]}else 32<=e&&e<=127&&(a=0===t?[e]:[e,t]);if(a){var s=l(a);g.log("DEBUG","Char codes =  "+s.join(",")),this.lastCmdA=null,this.lastCmdB=null}return a}},{key:"parseBackgroundAttributes",value:function(e,t){var r,a,i;return((16===e||24===e)&&32<=t&&t<=47||(23===e||31===e)&&45<=t&&t<=47)&&(r={},16===e||24===e?(a=Math.floor((t-32)/2),r.background=h[a],t%2==1&&(r.background=r.background+"_semi")):45===t?r.background="transparent":(r.foreground="black",47===t&&(r.underline=!0)),i=e<24?1:2,this.channels[i-1].setBkgData(r),this.lastCmdA=null,!(this.lastCmdB=null))}},{key:"reset",value:function(){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].reset();this.lastCmdA=null,this.lastCmdB=null}},{key:"cueSplitAtTime",value:function(e){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].cueSplitAtTime(e)}}]),A);function A(e,t,r){s(this,A),this.field=e||1,this.outputs=[t,r],this.channels=[new _(1,t),new _(2,r)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}r.default=S},{}],48:[function(e,t,r){"use strict";var c=e(54),a={newCue:function(e,t,r,a){for(var i,n,s,o,l,u=window.VTTCue||window.TextTrackCue,d=0;d<a.rows.length;d++)if(s=!0,o=0,l="",!(i=a.rows[d]).isEmpty()){for(var f=0;f<i.chars.length;f++)i.chars[f].uchar.match(/\s/)&&s?o++:(l+=i.chars[f].uchar,s=!1);(i.cueStartTime=t)===r&&(r+=1e-4),n=new u(t,r,(0,c.fixLineBreaks)(l.trim())),16<=o?o--:o++,navigator.userAgent.match(/Firefox\//)?n.line=d+1:n.line=7<d?d-2:d+1,n.align="left",n.position=Math.max(0,Math.min(100,o/32*100+(navigator.userAgent.match(/Firefox\//)?50:0))),e.addCue(n)}}};t.exports=a},{54:54}],49:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n,s=e(50),o=(n=s)&&n.__esModule?n:{default:n};var l=(a(u,[{key:"sample",value:function(e,t){var r=8e3*t/(e=Math.max(e,this.minDelayMs_)),a=e/1e3;this.fast_.sample(a,r),this.slow_.sample(a,r)}},{key:"canEstimate",value:function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_}},{key:"getEstimate",value:function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}},{key:"destroy",value:function(){}}]),u);function u(e,t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),this.hls=e,this.defaultEstimate_=a,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new o.default(t),this.fast_=new o.default(r)}r.default=l},{50:50}],50:[function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0});var i=(function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(n,[{key:"sample",value:function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}},{key:"getTotalWeight",value:function(){return this.totalWeight_}},{key:"getEstimate",value:function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_}}]),n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}r.default=i},{}],51:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(){}var n={trace:i,debug:i,log:i,warn:i,info:i,error:i},s=n;function o(n){var s=self.console[n];return s?function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var a,i;t[0]&&(t[0]=(a=n,i=t[0],i="["+a+"] > "+i)),s.apply(self.console,t)}:i}r.enableLogs=function(e){if(!0===e||"object"===(void 0===e?"undefined":a(e))){!function(t){for(var e=arguments.length,r=Array(1<e?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];r.forEach(function(e){s[e]=t[e]?t[e].bind(t):o(e)})}(e,"debug","log","info","warn","error");try{s.log()}catch(e){s=n}}else s=n},r.logger=s},{}],52:[function(e,t,r){"use strict";t.exports={toString:function(e){for(var t="",r=e.length,a=0;a<r;a++)t+="["+e.start(a).toFixed(3)+","+e.end(a).toFixed(3)+"]";return t}}},{}],53:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var E={"":!0,lr:!0,rl:!0},t={start:!0,middle:!0,end:!0,left:!0,right:!0};function T(e){return"string"==typeof e&&(!!t[e.toLowerCase()]&&e.toLowerCase())}function k(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)e[a]=r[a]}return e}function e(e,t,r){var a=this,i=function(){if("undefined"!=typeof navigator)return/MSIE\s8\.0/.test(navigator.userAgent)}(),n={};i?a=document.createElement("custom"):n.enumerable=!0,a.hasBeenReset=!1;var s="",o=!1,l=e,u=t,d=r,f=null,c="",h=!0,g="auto",v="start",p=50,y="middle",m=50,b="middle";if(Object.defineProperty(a,"id",k({},n,{get:function(){return s},set:function(e){s=""+e}})),Object.defineProperty(a,"pauseOnExit",k({},n,{get:function(){return o},set:function(e){o=!!e}})),Object.defineProperty(a,"startTime",k({},n,{get:function(){return l},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");l=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"endTime",k({},n,{get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");u=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"text",k({},n,{get:function(){return d},set:function(e){d=""+e,this.hasBeenReset=!0}})),Object.defineProperty(a,"region",k({},n,{get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"vertical",k({},n,{get:function(){return c},set:function(e){var t,r="string"==typeof(t=e)&&!!E[t.toLowerCase()]&&t.toLowerCase();if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");c=r,this.hasBeenReset=!0}})),Object.defineProperty(a,"snapToLines",k({},n,{get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}})),Object.defineProperty(a,"line",k({},n,{get:function(){return g},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");g=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"lineAlign",k({},n,{get:function(){return v},set:function(e){var t=T(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");v=t,this.hasBeenReset=!0}})),Object.defineProperty(a,"position",k({},n,{get:function(){return p},set:function(e){if(e<0||100<e)throw new Error("Position must be between 0 and 100.");p=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"positionAlign",k({},n,{get:function(){return y},set:function(e){var t=T(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");y=t,this.hasBeenReset=!0}})),Object.defineProperty(a,"size",k({},n,{get:function(){return m},set:function(e){if(e<0||100<e)throw new Error("Size must be between 0 and 100.");m=e,this.hasBeenReset=!0}})),Object.defineProperty(a,"align",k({},n,{get:function(){return b},set:function(e){var t=T(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),a.displayState=void 0,i)return a}return e.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},e}()},{}],54:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.fixLineBreaks=void 0;var a,i=e(53),o=(a=i)&&a.__esModule?a:{default:a};function n(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}}function s(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new n,this.regionList=[]}function l(){this.values=Object.create(null)}function u(e,t,r,a){var i=a?e.split(a):[e];for(var n in i)if("string"==typeof i[n]){var s=i[n].split(r);if(2===s.length)t(s[0],s[1])}}l.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var a=0;a<r.length;++a)if(t===r[a]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(t=parseFloat(t))&&t<=100)&&(this.set(e,t),!0)}};var d=new o.default(0,0,0),f="middle"===d.align?"middle":"center";function c(a,e,s){var i=a;function t(){var e,t=(e=a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/))?e[3]?r(e[1],e[2],e[3].replace(":",""),e[4]):59<e[1]?r(e[1],e[2],0,e[4]):r(0,e[1],e[2],e[4]):null;function r(e,t,r,a){return 3600*(0|e)+60*(0|t)+(0|r)+(0|a)/1e3}if(null===t)throw new Error("Malformed timestamp: "+i);return a=a.replace(/^[^\sa-zA-Z-]+/,""),t}function r(){a=a.replace(/^\s+/,"")}if(r(),e.startTime=t(),r(),"--\x3e"!==a.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);a=a.substr(3),r(),e.endTime=t(),r(),function(e,t){var n=new l;u(e,function(e,t){switch(e){case"region":for(var r=s.length-1;0<=r;r--)if(s[r].id===t){n.set(e,s[r].region);break}break;case"vertical":n.alt(e,t,["rl","lr"]);break;case"line":var a=t.split(","),i=a[0];n.integer(e,i),n.percent(e,i)&&n.set("snapToLines",!1),n.alt(e,i,["auto"]),2===a.length&&n.alt("lineAlign",a[1],["start",f,"end"]);break;case"position":a=t.split(","),n.percent(e,a[0]),2===a.length&&n.alt("positionAlign",a[1],["start",f,"end","line-left","line-right","auto"]);break;case"size":n.percent(e,t);break;case"align":n.alt(e,t,["start",f,"end","left","right"])}},/:/,/\s/),t.region=n.get("region",null),t.vertical=n.get("vertical","");var r=n.get("line","auto");"auto"===r&&-1===d.line&&(r=-1),t.line=r,t.lineAlign=n.get("lineAlign","start"),t.snapToLines=n.get("snapToLines",!0),t.size=n.get("size",100),t.align=n.get("align",f);var a=n.get("position","auto");"auto"===a&&50===d.position&&(a="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=a}(a,e)}function h(e){return e.replace(/<br(?: \/)?>/gi,"\n")}s.prototype={parse:function(e){var a=this;function t(){var e=a.buffer,t=0;for(e=h(e);t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var r=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,a.buffer=e.substr(t),r}e&&(a.buffer+=a.decoder.decode(e,{stream:!0}));try{var r;if("INITIAL"===a.state){if(!/\r\n|\n/.test(a.buffer))return this;var i=(r=t()).match(/^WEBVTT([ \t].*)?$/);if(!i||!i[0])throw new Error("Malformed WebVTT signature.");a.state="HEADER"}for(var n=!1;a.buffer;){if(!/\r\n|\n/.test(a.buffer))return this;switch(n?n=!1:r=t(),a.state){case"HEADER":/:/.test(r)?u(r,function(e,t){switch(e){case"Region":console.log("parse region",t)}},/:/):r||(a.state="ID");continue;case"NOTE":r||(a.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){a.state="NOTE";break}if(!r)continue;if(a.cue=new o.default(0,0,""),a.state="CUE",-1===r.indexOf("--\x3e")){a.cue.id=r;continue}case"CUE":try{c(r,a.cue,a.regionList)}catch(e){a.cue=null,a.state="BADCUE";continue}a.state="CUETEXT";continue;case"CUETEXT":var s=-1!==r.indexOf("--\x3e");if(!r||s&&(n=!0)){a.oncue&&a.oncue(a.cue),a.cue=null,a.state="ID";continue}a.cue.text&&(a.cue.text+="\n"),a.cue.text+=r;continue;case"BADCUE":r||(a.state="ID");continue}}}catch(e){"CUETEXT"===a.state&&a.cue&&a.oncue&&a.oncue(a.cue),a.cue=null,a.state="INITIAL"===a.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),!this.cue&&"HEADER"!==this.state||(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}},r.fixLineBreaks=h,r.default=s},{53:53}],55:[function(e,t,r){"use strict";var a,i=e(54),v=(a=i)&&a.__esModule?a:{default:a};var n={parse:function(e,s,a,i,t,r){var n=String.fromCharCode.apply(null,new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),o="00:00.000",l=0,u=0,d=0,f=[],c=void 0,h=!0,g=new v.default;g.oncue=function(e){var t=a[i],r=a.ccOffset;t&&t.new&&(u?r=a.ccOffset=t.start:function(e,t,r){var a=e[t],i=e[a.prevCC];if(!i||!i.new&&a.new)return e.ccOffset=e.presentationOffset=a.start,a.new=!1;for(;i&&i.new;)e.ccOffset+=a.start-i.start,a.new=!1,i=e[(a=i).prevCC];e.presentationOffset=r}(a,i,d)),d&&!u&&(r=d+a.ccOffset-a.presentationOffset),e.startTime+=r-u,e.endTime+=r-u,e.text=decodeURIComponent(escape(e.text)),0<e.endTime&&f.push(e)},g.onparsingerror=function(e){c=e},g.onflush=function(){c&&r?r(c):t(f)},n.forEach(function(t){if(h){if(t.startsWith("X-TIMESTAMP-MAP=")){h=!1,t.substr(16).split(",").forEach(function(e){e.startsWith("LOCAL:")?o=e.substr(6):e.startsWith("MPEGTS:")&&(l=parseInt(e.substr(7)))});try{l-=s=s<0?s+8589934592:s,e=o,r=parseInt(e.substr(-3)),a=parseInt(e.substr(-6,2)),i=parseInt(e.substr(-9,2)),n=9<e.length?parseInt(e.substr(0,e.indexOf(":"))):0,u=(isNaN(r)||isNaN(a)||isNaN(i)||isNaN(n)?-1:(r+=1e3*a,r+=6e4*i,r+=36e5*n))/1e3,d=l/9e4,-1===u&&(c=new Error("Malformed X-TIMESTAMP-MAP: "+t))}catch(e){c=new Error("Malformed X-TIMESTAMP-MAP: "+t)}return}""===t&&(h=!1)}var e,r,a,i,n;g.parse(t+"\n")}),g.flush()}};t.exports=n},{54:54}],56:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=e(51);var n=(a(s,[{key:"destroy",value:function(){this.abort(),this.loader=null}},{key:"abort",value:function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null}},{key:"load",value:function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()}},{key:"loadInternal",value:function(){var t,r=this.context;t="undefined"!=typeof XDomainRequest?this.loader=new XDomainRequest:this.loader=new XMLHttpRequest;var e=this.stats;e.tfirst=0,e.loaded=0;var a=this.xhrSetup;if(a)try{a(t,r.url)}catch(e){t.open("GET",r.url,!0),a(t,r.url)}t.readyState||t.open("GET",r.url,!0),r.rangeEnd&&t.setRequestHeader("Range","bytes="+r.rangeStart+"-"+(r.rangeEnd-1)),t.onreadystatechange=this.readystatechange.bind(this),t.onprogress=this.loadprogress.bind(this),t.responseType=r.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),t.send()}},{key:"readystatechange",value:function(e){var t=e.currentTarget,r=t.readyState,a=this.stats,i=this.context,n=this.config;if(!a.aborted&&2<=r)if(window.clearTimeout(this.requestTimeout),0===a.tfirst&&(a.tfirst=Math.max(performance.now(),a.trequest)),4===r){var s=t.status;if(200<=s&&s<300){a.tload=Math.max(a.tfirst,performance.now());var o=void 0,l=void 0;l="arraybuffer"===i.responseType?(o=t.response).byteLength:(o=t.responseText).length,a.loaded=a.total=l;var u={url:t.responseURL,data:o};this.callbacks.onSuccess(u,a,i)}else a.retry>=n.maxRetry||400<=s&&s<499?(d.logger.error(s+" while loading "+i.url),this.callbacks.onError({code:s,text:t.statusText},i)):(d.logger.warn(s+" while loading "+i.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),a.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),n.timeout)}},{key:"loadtimeout",value:function(){d.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context)}},{key:"loadprogress",value:function(e){var t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total);var r=this.callbacks.onProgress;r&&r(t,this.context,null)}}]),s);function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}r.default=n},{51:51}]},{},[38])(38)});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
void 0===$.cookie&&function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(v){function x(e){return l.raw?e:encodeURIComponent(e)}function k(e,o){var i=l.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),l.json?JSON.parse(e):e}catch(e){}}(e);return v.isFunction(o)?o(i):i}var n=/\+/g,l=v.cookie=function(e,o,i){if(void 0!==o&&!v.isFunction(o)){if("number"==typeof(i=v.extend({},l.defaults,i)).expires){var n=i.expires,r=i.expires=new Date;r.setTime(+r+864e5*n)}return document.cookie=[x(e),"=",(t=o,x(l.json?JSON.stringify(t):String(t))),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var t,c,u=e?void 0:{},d=document.cookie?document.cookie.split("; "):[],a=0,f=d.length;a<f;a++){var p=d[a].split("="),s=(c=p.shift(),l.raw?c:decodeURIComponent(c)),m=p.join("=");if(e&&e===s){u=k(m,o);break}e||void 0===(m=k(m))||(u[s]=m)}return u};l.defaults={},v.removeCookie=function(e,o){return void 0!==v.cookie(e)&&(v.cookie(e,"",v.extend({},o,{expires:-1})),!v.cookie(e))}});

/* hmall.video.js */
(function($, window, document){
    function Sp_video(element, options) {
        var _ = this;

        _.$selector = $(element);

        // options
        _.defaults = {};
        _.options = $.extend(true, _.defaults, options);

        // variable
        _.initials = {
            _hls : new Hls({
                autoStartLoad : false,
                debug: false,
                enableWorker: true,
                liveBackBufferLength: 900
            }),
            _hlsSupported : Hls.isSupported(),
            _type : (_.$selector.attr("data-type") == "" || _.$selector.attr("data-type") == undefined) ? "def" : _.$selector.attr("data-type"),    // 일반[def] | 온에어[onair] | 모바일라이브[live] | 방송톡[talk]
            _vid : (_.$selector.attr("data-src") != undefined && _.$selector.attr("data-src").split("/")[9] != "") ? _.$selector.attr("data-src").split("/")[9] : null,
            _sourceSrc : (_.$selector.attr("data-src") == "" || _.$selector.attr("data-src") == undefined) ? "" : _.$selector.attr("data-src"),
            _button :[
                { "class": "_back", "text": "뒤로가기", "type" : "live" },
                { "class": "_share", "text": "공유하기", "type" : null },
                { "class": "_play", "text": "영상보기", "type" : null },
                { "class": "_pause", "text": "일시정지", "type" : null },
                { "class": "_reload", "text": "다시보기", "type" : null },
                { "class": "_detail", "text": (_.$selector.attr("data-type") == "talk") ? "방송참여" : "상세보기", "type" : null }
            ],
            _msg :[
                { "class": "_msgCnsmp", "text": "3G/LTE 등으로 재생 시,<br> 데이터 요금이 부과 될 수 있습니다." },         // 데이터소모
                { "class": "_msgNtwrk", "text": "네트워크 상태로 인해 로딩에 실패했습니다.<br> 새로고침 후 다시 이용해 주시기 바랍니다." }, // 네트워크불안정
                { "class": "_msgBrdcs", "text": "방송이 종료 되었습니다." },  // 다음방송보기
                { "class": "_msgLiveWait", "text": "방송을 준비중입니다.<br> 잠시만 기다려주세요." },  // 모바일라이브 방송시작전
                { "class": "_msgLiveRetry", "text": "방송에 접속하고 있습니다.<br> 잠시만 기다려주세요." },  // 모바일라이브 방송시작전
                { "class": "_msgLiveEnd", "text": "방송이 종료 되었습니다.<br> 감사합니다." }  // 모바일라이브 방송종료
            ],
            _firstLoad : false,
            _confirm : false,
            _videostatus : null,
            _interruptTimeout : null,
            _pausedFlag : false,
            _duration : null,
            _timer : 3000,
            _drag : false,
            _timesave : false,
            _timesaveTimeout : null,
            _remainTimer : null,

            _saveRemainTimer : null,
            _nextBrdcsTimer : null,
            _nextBrdcsUrl : null,
            _liveStatus : null,
            _liveRetryCount : 1,
            _liveRetryCountTimer : null,
            _serverCurrentTime : (_.$selector.attr("data-servercurrenttime") != undefined && _.$selector.attr("data-servercurrenttime") != "") ? _.$selector.attr("data-servercurrenttime") : null,
            _remainCalcTime : null,
            _currentRemainCalcTime : null,
            _currentRemainCalcTimer : null,
            _waitingUnlockFlag : false,
            _vodCoverFlag : false,
            _HLS_initial : false,
            _byPassYN : (_.$selector.attr("data-bypass") != undefined && _.$selector.attr("data-bypass") != "") ? _.$selector.attr("data-bypass") : "N",
            _byPassFlag : false,
            _dragCoord : 0,
            _dragDuration : 0,
            _currentPosY : 0,
            _compareCurrentPosY : 0,
            _verticalYN : "N",
            _capturePaused : false,
            $videoContainer : _.$selector.children("._video-container"),
            $posterObj : _.$selector.children("._video-container").find("img"),
            $videoObj : null,
            $controlObj : null,
            $controlPanelObj : null,
            $progressObj : null,
            $butnObj : null,
            $msgboxObj : null,
            $previewObj : null,
            $loadingObj : null
        };

        $.extend(_, _.initials);

        _.init();
    }

    Sp_video.prototype.init = function(){
        var _ = this;

        if(_.$selector.hasClass("_init") && (_._sourceSrc != undefined && _._sourceSrc != "")){
            _._firstLoad = true;

            // 비디오 컨트롤러 및 메세지 박스 생성
            _.buildContent();

            // hls
            if(_._hlsSupported){
                if(!_._HLS_initial) {
                    _.videoEventHLS();
                } else {    // 플레이어가 2개 이상일 경우 HLS 중복 실행 우회
                    _._hls.detachMedia();
                    _._hls.attachMedia(_.$videoObj.get(0));
                    _.videoEventHtml5();
                }
            } else {
                if(_._type == "live"){  // 모바일 라이브 방송만 진입전 신호 체크
                    _.beforeLiveCheck();
                } else {    // 라이브 제외 모든 영상
                    _._liveStatus = "_ready";

                    // 비디오 동작/이벤트 제어
                    _.eventHandler();
                }
            }
        }

        // add. 0918 - 데이터소진 스킵 바로 재생
        if(_._byPassYN == "Y"){
            _._byPassFlag = true;
            _.bypass();
        }
    };

    Sp_video.prototype.videoEventHLS = function(){
        var _ = this;

        _._hls.detachMedia();
        _._hls.attachMedia(_.$videoObj.get(0));

        _._hls.on(Hls.Events.MANIFEST_PARSED,function(event, data) {
            //console.log("event MANIFEST_PARSED : " + event);
            //console.log("data : ");
            //console.log(data);
            //console.log("--------------------------------------------------");

            _._liveStatus = "_ready";

            // 비디오 동작/이벤트 제어
            _.eventHandler();
        });

        _._hls.on(Hls.Events.MEDIA_ATTACHED,function(event, data) {
            //console.log("@@@ HLS event MEDIA_ATTACHED : " + event);
            //console.log("@@@ HLS data : ");
            //console.log(data);
            //console.log("--------------------------------------------------");

            _._hls.loadSource(_._sourceSrc);
        });

        _._hls.on(Hls.Events.MANIFEST_LOADED,function(event, data) {
            //console.log("@@@ HLS event MANIFEST_LOADED : " + event);
            //console.log("@@@ HLS data : ");
            //console.log(data);
            //console.log("--------------------------------------------------");
        });

        _._hls.on(Hls.Events.ERROR,function(event, data) {
            var errorType = data.type; // 오류 유형
            var errorDetails = data.details; // 오류 세부사항
            var errorFatal = data.fatal; // 치명적인 오류 여부 (false: hls가 자체 복구 시도)

            //console.log("@@@ HLS ERROR -----------------------------------------------------------------------------");
            //console.log("@@@@@ HLS errorType : " + errorType);
            //console.log("@@@@@ HLS errorDetails : " + errorDetails);
            //console.log("@@@@@ HLS errorFatal : " + errorFatal);

            switch (errorDetails) {
                case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                    //console.log("@@@ case : " + errorDetails);

                    try {
                        //console.log('Cannot load <a href="' + data.context.url + '">' + url + '</a><br>HTTP response code:' + data.response.code + ' <br>' + data.response.text);

                        if (data.response.code === 0) {
                            //console.log('This might be a CORS issue, consider installing <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Allow-Control-Allow-Origin</a> Chrome Extension');
                        }
                    } catch (err) {
                        //console.log('Cannot load url <br> Response body: ' + data.response.text);
                    }

                    _.endMessage("loadError");

                    break;

                case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Timeout while loading manifest');

                    _.endMessage("loadError");
                    break;

                case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Error while parsing manifest:' + data.reason);

                    _.endMessage("loadError");
                    break;

                case Hls.ErrorDetails.LEVEL_EMPTY_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Loaded level contains no fragments ' + data.level + ' ' + data.url);

                    _.endMessage("levelError");
                    break;

                case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Error while loading level playlist ' + data.context.level + ' ' + data.url);

                    _.endMessage("levelError");
                    break;

                case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Timeout while loading level playlist ' + data.context.level + ' ' + data.url);

                    _.endMessage("levelError");
                    break;

                case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Error while trying to switch to level ' + data.level);
                    break;

                case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Error while loading fragment ' + data.frag.url);
                    break;

                case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Timeout while loading fragment ' + data.frag.url);
                    break;

                case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Fragment-loop loading error');
                    break;

                case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Decrypting error:' + data.reason);
                    break;

                case Hls.ErrorDetails.FRAG_PARSING_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Parsing error:' + data.reason);
                    break;

                case Hls.ErrorDetails.KEY_LOAD_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Error while loading key ' + data.frag.decryptdata.uri);
                    break;

                case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Timeout while loading key ' + data.frag.decryptdata.uri);
                    break;

                case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Buffer append error');
                    break;

                case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Buffer add codec error for ' + data.mimeType + ':' + data.err.message);
                    break;

                case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Buffer appending error');
                    break;

                case Hls.ErrorDetails.BUFFER_STALLED_ERROR:
                    //console.log("@@@ case : " + errorDetails);
                    //console.log('Buffer stalled error');
                    break;

                default:
                    break;
            }

            if (errorFatal) {
                //console.error('@@@ Fatal error :' + errorDetails);

                switch (errorType) {
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        //console.log("@@@ Fatal case : " + errorType);
                        //console.log("@@@ Fatal case errorDetails : " + errorDetails);
                        //handleMediaError();
                        break;

                    case Hls.ErrorTypes.NETWORK_ERROR:
                        //console.log("@@@ Fatal case : " + errorType);
                        //console.log("@@@ Fatal case errorDetails : " + errorDetails);
                        //console.log('A network error occurred');

                        _.endMessage("loadError");
                        break;

                    default:
                        //console.log("@@@ Fatal case : " + errorType);
                        //console.log("@@@ Fatal case errorDetails : " + errorDetails);
                        //console.log('An unrecoverable error occurred');

                        _._hls.destroy();
                        break;
                }
            }
        });

        _.videoEventHtml5();
    };

    Sp_video.prototype.videoEventHtml5 = function(){
        var _ = this;

        if(_._hlsSupported){
            _.$videoObj.on("loadeddata", loadeddata);
            _.$videoObj.on("loadstart", loadstart);
            _.$videoObj.on("loadedmetadata", loadedmetadata);
            _.$videoObj.on("waiting", waiting);
            _.$videoObj.on("progress", progress);
            _.$videoObj.on("canplay", canplay);
            _.$videoObj.on("canplaythrough", canplaythrough);
            _.$videoObj.on("playing", playing);
            _.$videoObj.on("timeupdate", timeupdate);
            _.$videoObj.on("stalled", stalled);
            _.$videoObj.on("seeked", seeked);
            _.$videoObj.on("suspend", suspend);
            _.$videoObj.on("pause", pause);
            _.$videoObj.on("ended", ended);
            _.$videoObj.on("error", error);
        } else if(!_._hlsSupported){
            _.$videoObj.one("loadeddata", loadeddata);
            _.$videoObj.one("loadstart", loadstart);
            _.$videoObj.one("loadedmetadata", loadedmetadata);
            _.$videoObj.one("waiting", waiting);
            _.$videoObj.one("progress", progress);
            _.$videoObj.one("canplay", canplay);
            _.$videoObj.one("canplaythrough", canplaythrough);
            _.$videoObj.one("playing", playing);
            _.$videoObj.on("timeupdate", timeupdate);
            _.$videoObj.one("stalled", stalled);
            _.$videoObj.one("seeked", seeked);
            _.$videoObj.one("suspend", suspend);
            _.$videoObj.one("pause", pause);
            _.$videoObj.one("ended", ended);
            _.$videoObj.one("error", error);
        }

        $(document).on("visibilitychange", visibilitychange);

        // HTML5 VIDEO EVENT
        function loadstart(){
            //console.log("@@@ HTML5 loadstart -----------------------------------------------------------------------------");

            // 중단된 시간부터 재생하기 위한 세팅
            if(_.$selector.attr("data-timesave") !== undefined){
                _.$videoObj.get(0).currentTime = _.$selector.attr("data-timesave");
            }
        }

        function loadeddata(){
            //console.log("@@@ HTML5 loadeddata -----------------------------------------------------------------------------");

            if(!_._hlsSupported) _.loading();
        }

        function loadedmetadata(){
            //console.log("@@@ HTML5 loadedmetadata -----------------------------------------------------------------------------");

            // playtime
            _._duration = (_.$videoObj.get(0).duration == 0) ? _.getDuration(_._vid) : _.fillDigit(_.$videoObj.get(0).duration);

            if(_._type == "onair" || _._type == "live"){
                _.$controlPanelObj.find("._duration").text(_._saveRemainTimer);
            } else {
                _.$controlPanelObj.find("._duration").text(_._duration);
            }
        }

        function waiting(){
            //console.log("@@@ HTML5 waiting -----------------------------------------------------------------------------");
            _.loading();

            if(_.$loadingObj !== null){
                _.displayElement([_.$butnObj.find("button")], "hide");
            }
        }

        function progress(){
            //console.log("@@@ HTML5 progress -----------------------------------------------------------------------------");
        }

        function canplay(){
            //console.log("@@@ HTML5 canplay -----------------------------------------------------------------------------");
            if(_.$loadingObj !== null) _.$loadingObj.remove();

            if(!_._hlsSupported) _.$videoObj.get(0).play();
        }

        function canplaythrough(){
            //console.log("@@@ HTML5 canplaythrough -----------------------------------------------------------------------------");
            if(_.$loadingObj !== null) _.$loadingObj.remove();
        }

        function playing(){
            //console.log("@@@ HTML5 playing -----------------------------------------------------------------------------");

            // 중단된 시간부터 재생하기 위한 세팅
            if(_.$selector.attr("data-timesave") !== undefined){
                _.$videoObj.get(0).currentTime = _.$selector.attr("data-timesave");
                _.$selector.removeAttr("data-timesave");
            }

            if(_.$loadingObj !== null) _.$loadingObj.remove();

            _.$controlObj.find("._duration").remove();
            _._videostatus = "playing";

            if(_._pausedFlag == true) _._videostatus = null;

            // 모바일 라이브 방송인 경우 상세보기 버튼 숨김
            if(_._type == "live"){
                _.displayElement([_.$butnObj.find("._detail")], "hide");
            }

            _.displayElement([_.$controlObj, _.$controlPanelObj], "hide");

            // 방송톡
            if(_._type == "talk") {
                _.$controlPanelObj.css({ display : "flex", background : "rgba(0,0,0,0.5)" });
                _.$controlPanelObj.find("button").hide();
            }

            // 새로운 재생 이벤트가 들어온 경우, 이미 재생 중인 비디오에 한해 초기화 진행
            $("video").not($(this)).each(function(i){
                console.log(i);
                if(!$(this).get(0).paused){
                    $(this).closest(".video-wrapper").spVideo("initial");
                }
            });

            _.updateProgress();

            if(_._videostatus == null){
                _._pausedFlag = false;
                _._videostatus = "playing";
            }

            // liveStatistics
            if(_._type == "live"){
                if(typeof sendStatistics !== "undefined") {
                    sendStatistics(liveStatsEvent.PLAY);
                }
            }
        }

        function timeupdate(){
            //console.log("@@@ HTML5 timeupdate -----------------------------------------------------------------------------");

            if(_.$loadingObj !== null) _.$loadingObj.remove();

            // del. 0507 - safari 이슈 확인
            //if(_._drag) _.capture(_._dragCoord, _._dragDuration);
        }

        function stalled(){
            //console.log("@@@ HTML5 stalled -----------------------------------------------------------------------------");
            if(_.$loadingObj !== null) _.$loadingObj.remove();
        }

        function seeked(){
            //console.log("@@@ HTML5 seeked -----------------------------------------------------------------------------");
            if(_.$loadingObj !== null) _.$loadingObj.remove();
        }

        function suspend(){
            //console.log("@@@ HTML5 suspend -----------------------------------------------------------------------------");
            if(_.$loadingObj !== null) _.$loadingObj.remove();
        }

        function pause(){
            //console.log("@@@ HTML5 pause -----------------------------------------------------------------------------");
        }

        function ended(){
            //console.log("@@@ HTML5 ended -----------------------------------------------------------------------------");

            _._videostatus = "ended";
            _._timesave = false;

            if(_.$selector.attr("data-timesave") > 0 && _._type == "def"){
                _.$selector.removeAttr("data-timesave");
            }

            clearInterval(_._remainTimer);
            clearInterval(_._currentRemainCalcTimer);
            _.$controlPanelObj.css({ display : "flex" });

            _.displayElement([_.$butnObj.find("button")], "hide");
            _.displayElement([_.$controlObj, _.$butnObj, _.$butnObj.find("button:not(._play):not(._pause)")], "show");

            // liveStatistics
            if(_._type == "live"){
                _.displayElement([_.$butnObj.find("._detail")], "hide");    // 모바일 라이브 방송인 경우 상세보기 버튼 숨김

                if(typeof sendStatistics !== "undefined") {
                    sendStatistics(liveStatsEvent.COMPLETE);
                }
            }
        }

        function error(){
            //console.log("@@@ HTML5 error -----------------------------------------------------------------------------");

            if(!_._hlsSupported) {
                _._videostatus = "error";

                _.$selector.spVideo("initial", true);
            }
        }

        function visibilitychange(){
            //console.log("@@@ HTML5 visibilitychange -----------------------------------------------------------------------------");

            if(_._type != "def") {
                // 백그라운드 이동 및 초기화 시 기기 기준 시간 재세팅
                if($(".video-wrapper:not(._init)").attr("data-servercurrenttime") !== undefined){
                    $(".video-wrapper:not(._init)").attr("data-servercurrenttime", _.yyyymmddhourminutes());
                    $(".video-wrapper:not(._init)").spVideo("initial");
                }
            }
        }
    };

    Sp_video.prototype.endMessage = function(mode){
        var _ = this;

        if(_.$loadingObj !== null){
            _.$loadingObj.remove();
        }

        clearTimeout(_._interruptTimeout);

        _.$selector.off("touchstart");
        _.$controlObj.show();
        _.$butnObj.remove();
        _.$controlObj.find("._duration").remove();
        _.$controlPanelObj.remove();

        if(mode == "loadError"){
            _.displayMsg("_msgNtwrk");
            $(_.$selector.find("._msgbox > ._msgNtwrk")).siblings().hide();
        } else if(mode == "levelError"){
            _.displayMsg("_msgLiveEnd");
            $(_.$selector.find("._msgbox > ._msgLiveEnd")).siblings().hide();
        }

        _._hls.destroy();
    };

    Sp_video.prototype.bypass = function(){
        var _ = this;

        if(_._byPassYN == "Y"){
            _.$selector.removeAttr("data-bypass");  // add. 0918 - 자동재생 이후 구별 데이터셋 삭제
            _.$controlPanelObj.find("._sound").addClass("_mute");   // add. 0918 - 자동재생 전 영상 음소거 아이콘 토글
            _.play();
        }
    };

    Sp_video.prototype.beforeLiveCheck = function(){
        var _ = this;

        var _videoSrc = _.$selector.attr("data-src");
        if(_.$videoObj == null) _.createVideo(_videoSrc);

        // 비디오 상태 체크
        _.$videoObj.one("loadedmetadata error", function(e){
            if(e.type === "loadedmetadata") _._liveStatus = "_ready";
            else if(e.type === "error") _._liveStatus = "_error";

            /*if(flag == "_init"){
                // 비디오 컨트롤러 및 메세지 박스 생성
                _.buildContent();
            }*/

            // 비디오 동작/이벤트 제어
            _.eventHandler();

            // 상태 체크 비디오 삭제 및 변수 초기화
            this.remove();
            _.$videoObj = null;
        });
    };

    Sp_video.prototype.buildContent = function(){
        var _ = this;

        var $Wrap = '<div class=_control>'+ (_._type == "talk" ? "" : "<div class=_duration>"+ ((_._type == "def") ? _.getDuration(_._vid) : "") +"</div>")
            +'<div class=_butn>'+ _.createButton()
            +'</div><div class=_msgbox>'+ _.createMsg()
            +'</div></div> <div class=_control-panel><div class=time>'+ ((_._type == "onair" || _._type == "live") ? "<span class=_onair>ONAIR</span> <span class=_duration>00:00</span>" : (_._type == "talk") ? "<span class=_talk>방송톡</span>" : "<span class=_current>00:00</span><span class=_duration>00:00</span>")
            +'</div><div class='+ ((_._type == 'onair') ? "'progress-bar _onair'" : "'progress-bar'") +'>'+ ((_._type == "talk") ? "<div class=talk-chat></div>" : (_._type == "onair" || _._type == "live") ? "" : "<div class=progress><span class=buffer-bar></span><span class=buffer-bg></span><span class=time-bar></span></div>")
            +'</div><button type=button class=_sound><i class=_icon></i>사운드</button><button type=button class=_fullscreen><i class=_icon></i>전체화면</button></div>';

        _.$selector.append($Wrap).removeClass("_init");

        // add 0330.
        // isSupported : true
        if(_._hlsSupported){
            _.displayElement([_.$posterObj], "hide");
            _.createVideo();
        }

        _.$controlObj = _.$selector.find("._control");
        _.$controlPanelObj = _.$selector.find("._control-panel");
        _.$progressObj = _.$selector.find(".progress");
        _.$butnObj = _.$selector.find("._butn");
        _.$msgboxObj = _.$selector.find("._msgbox");

        if(_._type == "onair" || _._type == "live"){
            _.$controlObj.find("._duration").hide();
        }

        // add. 0709 - 썸네일을 위한 캔버스 생성
        if(_._type != "def" && !_._capturePaused){

            if(_.$videoObj != null && ($(window).height() == _.$videoObj.height())){
                _.$controlPanelObj.find("._fullscreen").addClass("_active");
            }

            var imageServer;
            if (location.protocol == "https:") imageServer = "https://imagessl.hyundaihmall.com";
            else if (location.protocol == "http:") imageServer = "http://image.hyundaihmall.com";

            var _previewThumbnail = '<div class="_preview"><canvas /><img src="'+ imageServer +'/hmall/co/space.gif" /></div>';
            _.$selector.append(_previewThumbnail);
            _.$previewObj = _.$selector.find("._preview");
        }

        _.actionEventHandler();
    };

    Sp_video.prototype.getDuration = function(vid, original){
        var _ = this, _coverDuration;

        if(_._type == "def"){
            $.ajax({
                url : location.protocol + "//livejj.hyundaihmall.com/rest/file/view/" + vid,
                type : "get",
                dataType : 'xml',
                async : false,
                success:function(data){
                    var _getPlaytime = $(data).find("playTime").text();
                    _coverDuration = (original != "Y") ? _.fillDigit(_getPlaytime) : _getPlaytime;
                },
                error:function(jqXHR, textStatus, errorThrown){
                    console.log("error : \n" + textStatus + " : " + errorThrown);
                }
            });

            return _coverDuration;
        }
    };

    Sp_video.prototype.generateNewDate = function(date, type){
        var _ = this;

        if(!date || date == null || date == NaN){
            return new Date();
        }

        if(type == "endTime"){
            date = date + "00";
        }

        return new Date(date.replace(/([\d]{4})([\d]{2})([\d]{2})([\d]{2})([\d]{2})([\d]{2})/, '$2/$3/$1 $4:$5:$6'));
    };

    Sp_video.prototype.calcRemainTime = function(getRemainTime){
        var _ = this, _countdown;

        _._saveRemainTimer = _.fillDigit(getRemainTime);

        if(_._type == "live" && _._liveStatus == "_waiting"){   // 모바일 라이브 방송시작전 <> ONAIR 남은시간
            if(getRemainTime <= 0){
                location.reload();

                /* del. 0319 - 서버시간 재수신 위해 변경 페이지 새로고침으로 변경
                _._waitingUnlockFlag = true;
                clearInterval(_._remainTimer);
                _.beforeLiveCheck();
                */
                return false;
            }

            // 남은시간 들어갈 태그 생성
            if(_.$msgboxObj.find("._msgLiveWait ._timeRemain").length == 0){
                var timeRemain = "<p class='_timeRemain'>- ONAIR <span></span> 남음 -</p>";
                _.$msgboxObj.find("._msgLiveWait").append(timeRemain);
            }

            // 남은시간 표시
            _.$msgboxObj.find("._msgLiveWait ._timeRemain span").text(_._saveRemainTimer);
        } else if((_._type == "live" || _._type == "onair" || _._type == "talk") && _._liveStatus == "_ready"){
            if(_._type != "talk") _countdown = "<span class=_status>ONAIR</span>";

            if(getRemainTime <= 0){
                clearInterval(_._remainTimer);

                if(_._type == "onair" || _._type == "talk"){ // 방송종료시간을 지난경우 다음방송 안내

                    if(!_._vodCoverFlag){   // 대체방송이 아닌 경우(data-time 값이 있는 경우)만 아래 조건 실행

                        if(_.$selector.parents("#smMblDtvRenew_onair").length > 0) {
                            if (typeof reloadDtvShop == "function") {  // TV+
                                reloadDtvShop();
                            }
                        }

                        if(_.$selector.parents("#homeNew2Onair").length > 0){
                            if(typeof reloadTvShop2 == "function"){  // 홈쇼핑탭
                                reloadTvShop2();
                            }
                        }

                        /*if(typeof reloadTvShop == "function"){ // 홈탭
                            //reloadTvShop();
                        }*/
                    }

                    // #0302 - 방송상품 비디오 끊김 로직 제거
                    // #0302 - 방송시간 종료 후 ONAIR 표시로대체
                    _.$controlObj.find("._duration").addClass("_removeSpace").show().html(_countdown);
                    _.$controlPanelObj.find("._duration").hide();
                } else if(_._type == "live") {
                    _.$controlPanelObj.find("._duration").hide();
                    _countdown = _countdown;

                    _.$controlObj.find("._duration").addClass("_removeSpace").show().html(_countdown);
                }
            } else {
                if(_._type != "talk"){
                    _countdown = _countdown + _._saveRemainTimer;

                    _.$controlObj.find("._duration").show().html(_countdown);
                    _.$controlPanelObj.find("._duration").html(_._saveRemainTimer);
                }
            }
        }
    };

    Sp_video.prototype.fillDigit = function(playtime){
        var _hour = parseInt(Math.floor(playtime) / 3600) < 10 ? "0"+parseInt(Math.floor(playtime) / 3600) : parseInt(Math.floor(playtime) / 3600);
        var _min = parseInt((Math.floor(playtime) % 3600) / 60) < 10 ? "0"+parseInt((Math.floor(playtime) % 3600) / 60) : parseInt((Math.floor(playtime) % 3600) / 60);
        var _sec = Math.floor(playtime) % 60 < 10 ? "0"+Math.floor(playtime) % 60 : Math.floor(playtime) % 60;

        if(_hour < 1) return _min+":"+_sec;
        else return _hour+":"+_min+":"+_sec;
    };

    Sp_video.prototype.createButton = function(){
        var _ = this, _buttonHtml = '';

        $.each(_._button, function(i, d){
            // 방송&버튼 타입 live 유무 판단
            if(d.type === "live" && _._type !== "live") return;
            _buttonHtml += '<button class=\''+ (d.class == "_back" ? d.class + " btn_back" : d.class) +'\' type=button><i class=_icon></i> '+ d.text +'</button>';
        });

        return _buttonHtml;
    };

    Sp_video.prototype.errorHandler = function(dataType){
        var _ = this;

        if(dataType == "def") {    // 기본형. SHOW핑
            _.displayMsg("_msgNtwrk");
            _.$msgboxObj.children(":not(._msgNtwrk)").remove();
            _.$butnObj.remove();
            _.$controlObj.find("._duration").remove();
            _.$controlPanelObj.remove();
        } else if(dataType == "onair" || dataType == "talk"){    // TV쇼핑, TV+SHOP, 방송톡(TV쇼핑)
            _.nextBrdcsMsg({ type : "_msgBrdcs", nextUrl : "/front/index.do" });
            _.$msgboxObj.children(":not(._msgBrdcs)").remove();
            _.$butnObj.remove();
            _.$controlObj.find("._duration").remove();
            _.$controlPanelObj.remove();
        } else if(dataType == "live"){  // 모바일라이브
            clearInterval(_._remainTimer);

            if(((_.$selector.attr("data-begintime") > _._serverCurrentTime)) && !_._waitingUnlockFlag){   // 방송시작전
                _._liveStatus = "_waiting";
                _.displayMsg("_msgLiveWait");

                // 남은시간 영역 숨김
                _.$controlObj.find("._duration").hide();

                // 방송시작까지 카운트다운 실행
                _.controlRemainTimer();
            } else {
                // 방송종료 시간 이전 시그널이 정상이 아닌 경우 3회 재시도, 재시도 안될 경우 오류 메세지 노출
                if(!_._hlsSupported && (_._serverCurrentTime < _.$selector.attr("data-time"))){
                    _.displayMsg("_msgLiveRetry");

                    // 남은시간 영역 숨김
                    _.$controlObj.find("._duration").hide();

                    var _retryCheckerCount = 5;
                    if(_.$msgboxObj.find("._msgLiveRetry ._countRemain").length == 0) {
                        var reTry = "<p class='_countRemain'>- <span>"+ _retryCheckerCount +"</span>초 후 재시도 (<span>"+ _._liveRetryCount +"</span>/3) -</p>";
                        _.$msgboxObj.find("._msgLiveRetry").append(reTry);
                    }

                    _._liveRetryCountTimer = setInterval(function(){
                        _.$msgboxObj.find("._msgLiveRetry ._countRemain span:eq(0)").text(_retryCheckerCount);

                        if(_retryCheckerCount == 0){
                            clearTimeout(_._liveRetryCountTimer);

                            if(_._liveRetryCount < 3){
                                _.beforeLiveCheck();
                                _._liveRetryCount++;
                                _.$msgboxObj.find("._msgLiveRetry ._countRemain span:eq(1)").text(_._liveRetryCount);
                            } else if(_._liveRetryCount == 3){
                                _.displayMsg("_msgNtwrk");
                                _.$msgboxObj.children(":not(._msgNtwrk)").remove();
                                _.$butnObj.remove();
                                _.$controlObj.find("._duration").remove();
                                _.$controlPanelObj.remove();
                            }

                            return false;
                        }
                        _retryCheckerCount--;
                    }, 1000);
                } else {
                    // 서버시간이 방송종료 시간을 지난 경우
                    // 방송종료 메세지 노출
                    if (_.$selector.attr("data-time") <= _._serverCurrentTime){
                        _.displayMsg("_msgLiveEnd");
                        _.$msgboxObj.children(":not(._msgLiveEnd)").remove();
                        _.$butnObj.find("button:not(._back)").remove();
                        _.$controlObj.find("._duration").remove();
                        _.$controlPanelObj.remove();
                    }
                }
            }
        }
    };

    Sp_video.prototype.yyyymmddhourminutes = function(){
        var now = new Date();
        var yyyy = now.getFullYear().toString();
        var mm = (now.getMonth() + 1).toString();
        var dd = now.getDate().toString();
        var hour = now.getHours().toString();
        var minutes = now.getMinutes().toString();
        var seconds = now.getSeconds().toString();

        return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]) + (hour[1] ? hour : "0" + hour[0]) + (minutes[1] ? minutes : "0" + minutes[0]) + (seconds[1] ? seconds : "0" + seconds[0]);
    };

    Sp_video.prototype.eventHandler = function(){
        var _ = this;

        // 서버시간 체크 안될 경우 PC 시간 기준으로 설정
        if(!_._serverCurrentTime || _._serverCurrentTime == null || _._serverCurrentTime == NaN){
            _._serverCurrentTime = _.yyyymmddhourminutes();
        }

        if(_._liveStatus != "_error"){  // 영상 재생 가능
            if(_._type == "def") {
                _.displayElement([_.$butnObj.find("._play")], "show");
            } else if(_._type == "onair" || _._type == "talk") {
                // add. 0918 - 자동재생 시 최초 재생 버튼 숨김 조건 추가
                if(_._byPassYN != "Y") _.displayElement([_.$butnObj.find("._play")], "show");
                _.controlRemainTimer();

                // 방송톡인경우 메세지바 노출
                if(_._type == "talk"){
                    _.displayElement([_.$butnObj.find("._detail")], "show");
                    _.$controlPanelObj.css({ display : "flex" });
                }
                /*}*/
            } else if(_._type == "live") {
                if(_.$selector.attr('data-begintime') > _._serverCurrentTime){
                    _._liveStatus = "_error";
                    _.eventHandler();
                } else {
                    _.$controlObj.find("._duration").hide();
                    //_.displayMsg("_msgCnsmp");    // del. 0413
                    _.displayElement([_.$butnObj.find("._play")], "show");
                    _.controlRemainTimer();
                }
            }
        } else {    // 영상 재생 불가능
            if(document.location.href.indexOf("preView=true") > 0){
                _.$controlObj.find("._duration").hide();
                //_.displayMsg("_msgCnsmp");    // del. 0413
                _.displayElement([_.$butnObj.find("._play")], "show");
                _.controlRemainTimer();

                return false;
            }

            _.errorHandler(_._type);

            return false;
        }
    };

    Sp_video.prototype.actionEventHandler = function(){
        var _ = this;

        // 비디오 재생
        $(_.$butnObj).on("click", "._play, ._reload, ._pause, ._detail", function(e){
            if(!$(this).is(":animated")){
                if(e.currentTarget.className == "_play" || e.currentTarget.className == "_reload"){
                    if(_._byPassFlag){  // add. 0918 - 자동재생 시 재시작 데이터 소진 스킵
                        _._videostatus = null;
                        _.play();
                    } else {
                        if(!_._confirm && ($.cookie("dataNotification") === undefined && sessionStorage.getItem("dataNotification") === null)){
                            _.displayMsg("_msgCnsmp");
                        } else {
                            _._videostatus = null;
                            _.play();
                        }
                    }
                } else if(e.currentTarget.className == "_pause"){
                    _.pause();

                    // liveStatistics
                    if(_._type == "live"){
                        if(typeof sendStatistics !== "undefined") {
                            sendStatistics(liveStatsEvent.PAUSE);
                        }
                    }
                } else if(e.currentTarget.className == "_detail"){
                    if(_.$selector.attr("data-url") != "" && _.$selector.attr("data-url") != undefined){

                        if(_.$selector.attr("data-ga-cr") != "" && _.$selector.attr("data-ga-cr") != undefined){  //GA태깅용.

                            var slitmCd = _.$selector.attr("data-ga-slitmCd");
                            var slitmNm = _.$selector.attr("data-ga-slitmNm");
                            var gaId = slitmCd+"_"+slitmNm;

                            setGaPromotion("메인>홈쇼핑", "메인_홈쇼핑탭", "TV쇼핑", _.$selector.attr("data-ga-cr"), gaId);
                        }

                        if(_.$selector.attr("data-type") == "talk"){
                            location.href = _.$selector.attr("data-talk");
                        }else{
                            location.href = _.$selector.attr("data-url");
                        }
                    }
                }
            }
        });

        // 데이터 소모 안내 - 확인
        $(_.$msgboxObj.find("._confirm")).on("click", function(){
            if(typeof isApp !== "undefined"){
                if(!isApp && sessionStorage.getItem("dataNotification") === null){
                    sessionStorage.setItem("dataNotification", "Y");
                } else if(isApp && $.cookie("dataNotification") === undefined){
                    $.cookie("dataNotification", "Y", { path: "/" });
                }
            } else {    // 안드로이드 앱인 경우 isApp이 메인탭에 선언되어 있지 않음
                if($.cookie("dataNotification") === undefined){
                    $.cookie("dataNotification", "Y", { path: "/" });
                }
            }

            _._confirm = true;
            _.play();
        });

        // 데이터 소모 안내 - 취소
        $(_.$msgboxObj.find("._cancel")).on("click", function(){
            _.displayElement([_.$msgboxObj.find("div[class^=_msg]")], "hide");
            _.displayElement([_.$butnObj.find("button:not(._reload):not(._detail):not(._pause)")], "show");

            if(_._type == "talk"){
                _.displayElement([_.$butnObj.find("._detail")], "show");
            }
        });

        // 음량
        $(_.$controlPanelObj.find("._sound")).on("click", function(){
            $(this).toggleClass("_mute");

            if($(this).hasClass("_mute")) _.$videoObj.get(0).muted = true;
            else _.$videoObj.get(0).muted = false;

            if(!_.$videoObj.get(0).paused) _.controlTimeout();
        });

        // 풀스크린
        $(_.$controlPanelObj.find("._fullscreen")).on("click", function(){
            var currentOS;
            var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
            if(mobile){
                // 유저에이전트를 불러와서 OS를 구분합니다.
                var userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.search("android") > -1){
                    currentOS = "AOS";
                } else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1)|| (userAgent.search("ipad") > -1)) {
                    currentOS = "IOS";
                }
            }

            var varUA = navigator.userAgent.toLowerCase();
            if (varUA.match("android") != null) {
                $(this).addClass("_active");
            }

            if(currentOS == "AOS") {
                var e = {
                    requestFullscreen: null,
                    exitFullscreen: null
                };

                var type = {
                    requestFullscreen: ["requestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    exitFullscreen: ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"],
                    fullscreenElement: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"]
                };

                var i;
                var o, n;
                for (i in type) {
                    for (o = 0, n = type[i].length; o < n; o++) {
                        if (type[i][o] in document || type[i][o] in document.documentElement) {
                            e[i] = type[i][o];
                            break
                        }
                    }
                }

                if (!Boolean(document[e.fullscreenElement])) {
                    _.$selector.get(0)[e.requestFullscreen]();

                    $(window).on("resize.video_fullscreen", function(){
                        if(window.matchMedia("(orientation: portrait)").matches){
                            _.$selector.removeAttr("style");
                        } else if(window.matchMedia("(orientation: landscape)").matches){
                            _.$selector.css({ paddingTop : 100*($(window).height() / $(window).width()) + "%" });
                        }
                    });
                } else {
                    $(window).off("resize.video_fullscreen");
                    _.$selector.removeAttr("style");
                    $(this).removeClass("_active");
                    document[e.exitFullscreen]();
                }
            } else if(currentOS == "IOS"){
                var isInFullScreen = (document.webkitFullscreenElement && document.webkitFullscreenElement !== null);

                _.$videoObj.get(0).webkitEnterFullscreen();

                _.displayElement([_.$butnObj.find("._pause")], "hide");
                _.displayElement([_.$butnObj.find("button:not(._reload):not(._detail):not(._pause)")], "show");

                if(isInFullScreen){
                    document.webkitExitFullscreen();
                }
            }
        });

        // 컨트롤바 및 버튼 제어
        _.$selector.on("touchstart touchmove touchend", function(e){
            clearTimeout(_._interruptTimeout);

            if(e.type === "touchstart"){
                _._verticalYN = "N";
                _._currentPosY = e.originalEvent.changedTouches[0].screenY;
            }
            else if(e.type === "touchmove") {
                _._compareCurrentPosY = e.originalEvent.changedTouches[0].screenY;

                if(_._currentPosY != _._compareCurrentPosY && (_._currentPosY < _._compareCurrentPosY || _._currentPosY > _._compareCurrentPosY)){
                    _._verticalYN = "Y";
                }
            }
            else if(e.type === "touchend"){
                if(_._verticalYN == "Y") {
                    _._verticalYN = "N";

                    return false;
                }
                else if(_._verticalYN == "N"){
                    if(_._videostatus == "playing" && !_.$controlObj.is(":visible")){
                        _._pausedFlag = false;

                        // 버튼
                        _.displayElement([_.$controlObj, _.$butnObj.find("button:not(._play):not(._reload)")], "show");

                        // 모바일 라이브 방송인 경우 상세보기 버튼 숨김
                        if(_._type == "live"){
                            _.displayElement([_.$butnObj.find("._detail")], "hide");
                        }

                        // 컨트롤바
                        if(_._type != "talk") _.$controlPanelObj.css({ display : "flex" }).hide().stop().fadeIn(250);
                        else _.$controlPanelObj.css({ display : "flex" });
                        _.controlTimeout();

                        e.preventDefault();
                    } else if(((_._videostatus == "playing" && _.$controlObj.is(":visible")) || (_._videostatus == "playing" && _.$controlObj.is(":visible") && _._type == "talk")) && (e.target.className == _.$controlObj.attr("class"))){
                        if(_.$videoObj.get(0).paused == false){
                            _._pausedFlag = true;
                            _.controlTimeout();
                            e.preventDefault();
                        }
                    }
                }
            }
        });

        // 다음방송
        _.$selector.on("click", "button._nextBrdcs", function(){
            clearInterval(_._nextBrdcsTimer);
            location.href = _._nextBrdcsUrl;
        });

        // 새로고침
        _.$msgboxObj.find("._refresh").on("click", function(){
            location.reload();
        });

        _.$progressObj.on("touchstart touchend touchmove", function(e){
            clearTimeout(_._interruptTimeout);

            if(e.type == "touchstart"){
                _._drag = true;
                _.$videoObj.get(0).pause();
                _.updateProgressBar(e.originalEvent.changedTouches[0].clientX, e.type);
            } else if(e.type == "touchmove"){
                if(_._drag) _.updateProgressBar(e.originalEvent.changedTouches[0].clientX, e.type);
            } else if(e.type == "touchend"){
                if(_._drag){
                    _._drag = false;
                    _.updateProgressBar(e.originalEvent.changedTouches[0].clientX, e.type);
                }
            }

            e.preventDefault();
        });
    };

    Sp_video.prototype.controlRemainTimer = function(){
        var _ = this;

        var serverCurrentTime = _.generateNewDate(_._serverCurrentTime, "serverTime");
        var broadEndTime = (_._type == "live" && _._liveStatus == "_waiting") ? _.generateNewDate(_.$selector.attr("data-begintime"), "endTime") : _.generateNewDate(_.$selector.attr("data-time"), "endTime");

        _._remainCalcTime = (_._currentRemainCalcTimer === null) ? Math.round(broadEndTime.getTime() - serverCurrentTime.getTime()) / 1000 : _._currentRemainCalcTime;

        // 최초 서버시간 후 백그라운드에서 매초 감소
        if(_._currentRemainCalcTimer === null) _.flowRemainTime(_._remainCalcTime);

        _._remainTimer = setInterval(function(){
            if((_._type == "onair" || _._type == "talk") && _.$selector.attr("data-time") == undefined){
                _._vodCoverFlag = true;
            }

            _.calcRemainTime(_._remainCalcTime--);
        }, 1000);
    };

    Sp_video.prototype.flowRemainTime = function(time){
        var _ = this;

        _._currentRemainCalcTimer = setInterval(function(){
            _._currentRemainCalcTime = time--;

            if(_._currentRemainCalcTime <= 0) clearInterval(_._currentRemainCalcTimer);
        }, 1000);
    };

    Sp_video.prototype.controlTimeout = function(){
        var _ = this;

        _._interruptTimeout = setTimeout(function(){
            if(_._videostatus == "playing"){
                _.displayElement([_.$controlObj, _.$butnObj.find("button")], "hide");
                if(_._type != "talk") _.$controlPanelObj.stop().fadeOut(250);
            }
        }, (_._pausedFlag) ? 0 : _._timer);
    };

    Sp_video.prototype.play = function(){
        var _ = this, _videoSrc = _.$selector.attr("data-src");

        if(_.$videoObj == null && !_._hlsSupported) _.createVideo(_videoSrc);

        // add. 0918 - 자동재생 후 멈춤 뒤 다시 재생할 경우 음소거 해제
        if(_._byPassYN == "N" && _.$videoObj.prop("muted") == true){
            _.$videoObj.prop("muted", false);
        }

        // display element
        _.displayElement([_.$butnObj.find("button"), _.$posterObj, _.$msgboxObj.find("div[class^=_msg]")], "hide");

        // 새로운 재생 이벤트가 들어온 경우, 이미 재생 중인 비디오에 한해 초기화 진행
        $("video").not($(this)).each(function(i){
            if(!$(this).get(0).paused){
                $(this).closest(".video-wrapper").spVideo("initial");
            }
        });

        // hls startpoint
        if(_._hlsSupported){
            _._hls.startLoad();
        } else if(!_._hlsSupported){
            _.videoEventHtml5();
        }

        if(_._firstLoad){
            if(_._hlsSupported){
                _.$videoObj.get(0).play();
            } else if(!_._hlsSupported){
                _.$videoObj.get(0).load();
            }
        } else if(!_._firstLoad){
            _.$videoObj.get(0).play();
            _.controlRemainTimer();
        }

        _._firstLoad = false;
        
        if(_.$selector.attr("data-ga-custom-title") != undefined && _.$selector.attr("data-ga-custom-name") != undefined && 
                _.$selector.attr("data-ga-custom-position") != undefined && _.$selector.attr("data-ga-custom-creative") != undefined &&
                _.$selector.attr("data-ga-custom-id") != undefined){  //GA태깅용.

          	var gaTitle = _.$selector.attr("data-ga-custom-title");
          	var gaName = _.$selector.attr("data-ga-custom-name");
          	var gaPosition = _.$selector.attr("data-ga-custom-position");
          	var gaCr = _.$selector.attr("data-ga-custom-creative");
          	var gaId = _.$selector.attr("data-ga-custom-id");
          	
          	setGaPromotion(gaTitle, gaName, gaPosition, gaCr, gaId);
         }
    };

    Sp_video.prototype.pause = function(){
        var _ = this;

        clearInterval(_._remainTimer);

        _._pausedFlag = true;
        _.$videoObj.get(0).pause();

        // add. 0709 - 모바일라이브인 경우 멈춤 시 초기화
        if(_._type != "def" && !_._capturePaused){
            _._capturePaused = true;
            $(document).trigger("visibilitychange");
        }

        _.displayElement([_.$butnObj.find("._pause")], "hide");
        _.displayElement([_.$butnObj.find("button:not(._reload):not(._detail):not(._pause)")], "show");
    };

    Sp_video.prototype.initial = function(destroy){
        var _ = this, _destroy;

        _destroy = (destroy) ? destroy : false;

        if(_destroy) _.endMessage("loadError");
        else {
            if(_._type == "def"){
                var duration = (_.$videoObj.get(0).duration == 0) ? _.getDuration(_._vid, "Y") : _.$videoObj.get(0).duration;
                var currentTime = _.$videoObj.get(0).currentTime;

                if(currentTime < duration) _.$selector.attr({ "data-timesave" : currentTime });

                // del. 0507 - safari 이슈 확인
                // 초기화 당시 캡쳐를 $posterObj로 업데이트
                //_.capture(0, currentTime);
                //_.$posterObj.attr({ src : _.$previewObj.find("img").attr("src") });
            }

            // add. 0709 - 초기화 당시 화면을 $posterObj로 업데이트
            if(_._type != "def" && _._capturePaused){
                _.capture(0, _.$videoObj.get(0).currentTime);
                _.$posterObj.attr({ src : _.$previewObj.find("img").attr("src") });
                _._capturePaused = false;
            }

            clearTimeout(_._timesaveTimeout);
            clearTimeout(_._interruptTimeout);
            clearInterval(_._remainTimer);

            _.$videoContainer.find("img").removeAttr("style");

            if(_.$loadingObj !== null) _.$loadingObj.remove();
            if(_.$controlObj !== null) _.$controlObj.remove();
            if(_.$controlPanelObj !== null) _.$controlPanelObj.remove();
            if(_.$previewObj !== null) _.$previewObj.remove();
            if(_.$videoObj !== null) {
                _.$videoObj.remove();
                _.$videoObj.off("loadeddata");
                _.$videoObj.off("loadstart");
                _.$videoObj.off("loadedmetadata");
                _.$videoObj.off("waiting");
                _.$videoObj.off("progress");
                _.$videoObj.off("canplay");
                _.$videoObj.off("canplaythrough");
                _.$videoObj.off("playing");
                _.$videoObj.off("timeupdate");
                _.$videoObj.off("stalled");
                _.$videoObj.off("seeked");
                _.$videoObj.off("suspend");
                _.$videoObj.off("pause");
                _.$videoObj.off("ended");
                _.$videoObj.off("error");
            }
            $(document).off("visibilitychange");

            _.$butnObj.find("button").stop();
            $(_.$butnObj).off("click", "._play, ._reload, ._pause");
            $(_.$msgboxObj.find("._confirm")).off("click");
            $(_.$msgboxObj.find("._cancel")).off("click");
            $(_.$controlPanelObj.find("._sound")).off("click");

            _.$selector.off("touchstart touchmove touchend");
            _.$progressObj.off("touchstart touchend touchmove");

            _.$selector.addClass("_init");

            // del. 0514
            //$.extend(_, _.initials);

            if(_.$selector.attr("data-timesave") > 0 && _._type == "def"){
                _._timesave = true;
            }

            if(_._hlsSupported){
                _._hls.destroy();
                _._HLS_initial = true;
            }

            // del. 0514
            //_.init();

            $(".video-wrapper._init").spVideo();
        }
    };

    Sp_video.prototype.loading = function(){
        var _ = this, _loading = '';
        var _loadingClass = (_._timesave) ? "_loading _resume" : "_loading";

        //console.log("@@@ loading bounce ----------------------------------------------");
        if(_.$selector.find("._loading").length == 0){
            _loading += '<div class="'+ _loadingClass +'"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
            _.$selector.append(_loading);

            _.$loadingObj = _.$selector.find("._loading");
        }
    };

    Sp_video.prototype.updateProgress = function(){
        var _ = this;
        var duration = (_.$videoObj.get(0).duration == 0) ? _.getDuration(_._vid, "Y") : _.$videoObj.get(0).duration;

        _.$videoObj.off(".updateProgress").on("progress.updateProgress", function(e){
            if(!_.$videoObj.get(0).buffered.length) return;

            var currentBuffer = _.$videoObj.get(0).buffered.end(0);
            var perc = 100 * currentBuffer / duration;

            _.$selector.find(".buffer-bar").css({ width : perc+"%" });
        }).on("timeupdate.updateProgress", function(){
            var currentTime = _.$videoObj.get(0).currentTime;
            var perc = 100 * currentTime / duration;
            var getCurrentTime = _.fillDigit(currentTime);

            if(Math.floor(duration-currentTime) == 0) clearTimeout(_._interruptTimeout);

            _.$selector.find(".time-bar").css({ width : perc+"%" });
            _.$controlPanelObj.find("._current").text(getCurrentTime);
        });
    };

    Sp_video.prototype.updateProgressBar = function(coord, events){
        var _ = this;
        var duration = (_.$videoObj.get(0).duration == 0) ? _.getDuration(_._vid, "Y") : _.$videoObj.get(0).duration;
        var position = coord - _.$progressObj.offset().left;
        var percentage = 100 * position / _.$progressObj.width();

        if(percentage > 100) percentage = 100;
        if(percentage < 0) percentage = 0;

        _.$selector.find(".time-bar").css({ width : percentage + "%" });

        _._dragCoord = coord;
        _._dragDuration = duration * percentage / 100;

        if(events == "touchstart" || events == "touchmove"){
            _.$videoObj.get(0).currentTime = _._dragDuration;

            // 스냅샷 가져오기
            //_.$videoObj.trigger("timeupdate");

            if(events == "touchstart"){
                _.displayElement([_.$butnObj.find("button")], "hide");

                /* del. 0507 - safari 이슈 확인
                _.$previewObj.show();

                // seek 당시 캡쳐를 $posterObj로 업데이트
                _.$posterObj.attr({ src : _.$previewObj.find("img").attr("src") });
                _.displayElement([_.$posterObj], "show");*/
            }
        } else if(events == "touchend"){
            /* del. 0507 - safari 이슈 확인
            _.$previewObj.hide();
            _.displayElement([_.$posterObj], "hide");*/
            _.controlTimeout();
            _.$videoObj.get(0).play();
        }
    };

    Sp_video.prototype.createVideo = function(videoSrc){
        var _ = this, _videoTag = '';

        _videoTag += '<video src="'+ videoSrc +'" poster="'+ _.$posterObj.attr("src") +'" preload="metadata" muted="'+ (_._byPassYN == "Y" ? "muted" : "") +'" webkit-playsinline playsinline controlsList="nodownload">';
        _.$videoContainer.append(_videoTag);
        _.$videoObj = _.$videoContainer.find("video");
    };

    Sp_video.prototype.createMsg = function(){
        var _ = this, _msgHtml = '';

        $.each(_._msg, function(i, d){
            _msgHtml += '<div class='+ d.class +'><p>'+ d.text +'</p>'

            if(d.class === "_msgCnsmp"){
                _msgHtml += '<button class=_cancel>취소</button><button class=_confirm>확인</button>'
            } else if(d.class === "_msgBrdcs"){
                _msgHtml += '<button class=_nextBrdcs>다음방송</button>'
            } else {
                if(d.class != "_msgBrdcs" && d.class != "_msgLiveWait" && d.class != "_msgLiveRetry" && d.class != "_msgLiveEnd") _msgHtml += '<button class=_refresh>새로고침</button>'
            }
            _msgHtml +='</div>';
        });

        return _msgHtml;
    };

    Sp_video.prototype.nextBrdcsMsg = function(obj){
        var _ = this, _msgHtml = '';

        _._nextBrdcsUrl = obj.nextUrl;

        var _defSeverCurrentTime, _defEndTime, _timeLeftOnair;
        if(_._type == "onair" || _._type == "talk"){
            _defSeverCurrentTime = _.generateNewDate(_._serverCurrentTime, "serverTime");
            _defEndTime = _.generateNewDate(_.$selector.attr("data-time"), "endTime");

            if(_defSeverCurrentTime.getTime() > _defEndTime.getTime()){	// 종료시간보다 서버현재시간이 클때 (비디오를 새로 불러온 유형)
                if((_defSeverCurrentTime.getTime() - _defEndTime.getTime()) >= 60000){	// 다음방송 업데이트 안된 경우 예외처리
                    _timeLeftOnair = 0;
                } else {
                    _timeLeftOnair = 60 - (Math.round(_defSeverCurrentTime.getTime() - _defEndTime.getTime()) / 1000);
                }
            } else {	// 종료시간이 서버현재시간보다 큰 경우 (비디오 재생 유지 상태)
                _timeLeftOnair = 60;
            }
        }

        // 다음 방송 노출
        // 모바일라이브 : 5초 후 자동이동
        // 온에어, 방송톡 : 남은 시간만큼 카운트다운 후 수동이동
        $.each(_._msg, function(i, d){
            if(d.class == obj.type){  // 다음방송 : _msgBrdcs
                if(_._type == "live"){
                    _msgHtml += '<div class='+ d.class +'><p>'+ d.text +'<br>다음방송을 누르거나<br><span class=_count>'+ _._remainCalcTime +'</span>초 후 자동 이동합니다.</p><button class=_nextBrdcs>다음방송</button></div>';
                } else {
                    _msgHtml += '<div class='+ d.class +'><p>'+ d.text +'<span class=nextBroadMask><br>다음방송까지 <span class=_count>'+ _timeLeftOnair +'</span>초 남았습니다.</span></p><button class=_nextBrdcs style=display:none;>다음방송</button></div>';
                }
            }
        });

        _.$controlObj.show();
        _.$controlObj.find("._duration").remove();
        _.$controlPanelObj.remove();
        _.$butnObj.remove();
        _.$msgboxObj.html(_msgHtml);
        _.displayMsg("_msgBrdcs");

        if(_._type == "live"){
            _._nextBrdcsTimer = setInterval(function(){
                _.$selector.find("._msgbox > ." + obj.type + " ._count").text(_._remainCalcTime);

                if(_._remainCalcTime == 0){
                    clearInterval(_._nextBrdcsTimer);
                    location.href = _._nextBrdcsUrl;
                }
            }, 1000);
        } else if (_._type == "onair" || _._type == "talk"){
            _._nextBrdcsTimer = setInterval(function(){
                _timeLeftOnair--;

                _.$selector.find("._msgbox > ." + obj.type + " ._count").text(_timeLeftOnair);

                if(_timeLeftOnair <= 0){
                    clearInterval(_._nextBrdcsTimer);
                    _msgHtml = '<div><p>방송을 보시려면 <br>다음방송 버튼을 눌러 주세요.</p><button class=_nextBrdcs>다음방송</button></div>';
                    _.$msgboxObj.html(_msgHtml);
                    _.$msgboxObj.children().show();
                }
            }, 1000);
        }
    };

    Sp_video.prototype.displayElement = function(element, type){
        var _ = this;

        if(element.length > 1){
            $.each(element, function(i){
                if(_._videostatus == "playing"){
                    (type === "show") ? $(element[i]).stop().show() : $(element[i]).stop().hide();
                } else {
                    (type === "show") ? $(element[i]).show() : $(element[i]).hide();
                }
            });
        } else {
            (type === "show") ? $(element[0]).show() : $(element[0]).hide();
        }
    };

    Sp_video.prototype.displayMsg = function(msgType){
        var _ = this;

        if(msgType === "_msgCnsmp" || msgType === "_msgBrdcs" || msgType === "_msgNtwrk" || msgType === "_msgLiveWait" || msgType === "_msgLiveEnd"){    // 데이터 소진 안내 - 종료된 방송 안내
            // display element
            _.displayElement([_.$butnObj.find("button")], "hide");
        }

        if(_._type == "live"){
            _.displayElement([_.$butnObj.find("._back")], "show");
        }

        $(_.$selector.find("._msgbox > ." + msgType)).show().siblings().hide();
    };

    Sp_video.prototype.capture = function(coord, duration){
        var _ = this, getContext, dataURL;

        getContext = _.$previewObj.find("canvas").get(0).getContext('2d');

        _.$previewObj.find("canvas").get(0).width = _.$videoObj.width();
        _.$previewObj.find("canvas").get(0).height = _.$videoObj.height();

        getContext.drawImage(_.$videoObj.get(0), 0, 0, _.$previewObj.find("canvas").get(0).width, _.$previewObj.find("canvas").get(0).height);

        try {
            if(_.$controlPanelObj.find("._fullscreen").is("._active") === true){
                dataURL = _.$posterObj.attr("src");
            } else {
                dataURL = _.$previewObj.find("canvas").get(0).toDataURL("image/jpeg");
            }
        } catch(e) {
            dataURL = _.$posterObj.attr("src");
        }

        _.$previewObj.css({ position: "absolute", zIndex: 1000, transform: "translate("+ (coord-60) +"px, -110px)" }).find("img").attr({ src : dataURL });
        //_.$previewObj.find("span").text(_.fillDigit(duration));
    };

    // default
    $.fn.spVideo = function(){
        var opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), ret;

        return this.each(function(){
            if (typeof opt == 'object' || typeof opt == 'undefined')
                this.spVideo = new Sp_video(this, opt);
            else
                ret = this.spVideo[opt].apply(this.spVideo, args);
            if (typeof ret != 'undefined') return ret;
        });
    };
}(jQuery, window, document));

$(".video-wrapper._init").spVideo();