!function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=p.p+""+e+"."+w+".hot-update.js",n.appendChild(t)}function o(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var o=new XMLHttpRequest,r=p.p+""+w+".hot-update.json";o.open("GET",r,!0),o.timeout=e,o.send(null)}catch(e){return t(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)n();else if(200!==o.status&&304!==o.status)t(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void t(e)}n(e)}}})}function r(e){var n=H[e];if(!n)return p;var t=function(t){return n.hot.active?(H[t]?H[t].parents.indexOf(e)<0&&H[t].parents.push(e):(O=[e],v=t),n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),O=[]),p(t)};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&"e"!==o&&Object.defineProperty(t,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(n){p[e]=n}}}(o));return t.e=function(e){function n(){P--,"prepare"===x&&(k[e]||d(e),0===P&&0===E&&l())}return"ready"===x&&a("prepare"),P++,p.e(e).then(n,function(e){throw n(),e})},t}function i(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:s,apply:f,status:function(e){if(!e)return x;g.push(e)},addStatusHandler:function(e){g.push(e)},removeStatusHandler:function(e){var n=g.indexOf(e);n>=0&&g.splice(n,1)},data:j[e]};return v=void 0,n}function a(e){x=e;for(var n=0;n<g.length;n++)g[n].call(null,e)}function c(e){return+e+""===e?+e:e}function s(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return C=e,a("check"),o(_).then(function(e){if(!e)return a("idle"),null;D={},k={},M=e.c,b=e.h,a("prepare");var n=new Promise(function(e,n){y={resolve:e,reject:n}});m={};return d(0),"prepare"===x&&0===P&&0===E&&l(),n})}function u(e,n){if(M[e]&&D[e]){D[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--E&&0===P&&l()}}function d(e){M[e]?(D[e]=!0,E++,t(e)):k[e]=!0}function l(){a("ready");var e=y;if(y=null,e)if(C)Promise.resolve().then(function(){return f(C)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(c(t));e.resolve(n)}}function f(t){function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];e.indexOf(o)<0&&e.push(o)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");t=t||{};var r,i,s,u,d,l={},f=[],h={},v=function(){console.warn("[HMR] unexpected require("+C.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){d=c(y);var C;C=m[y]?function(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),a=i.id,c=i.chain;if((u=H[a])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<u.parents.length;s++){var d=u.parents[s],l=H[d];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([d]),moduleId:a,parentId:d};n.indexOf(d)>=0||(l.hot._acceptedDependencies[a]?(t[d]||(t[d]=[]),o(t[d],[a])):(delete t[d],n.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}(d):{type:"disposed",moduleId:y};var _=!1,A=!1,g=!1,E="";switch(C.chain&&(E="\nUpdate propagation: "+C.chain.join(" -> ")),C.type){case"self-declined":t.onDeclined&&t.onDeclined(C),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+C.moduleId+E));break;case"declined":t.onDeclined&&t.onDeclined(C),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+C.moduleId+" in "+C.parentId+E));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(C),t.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+E));break;case"accepted":t.onAccepted&&t.onAccepted(C),A=!0;break;case"disposed":t.onDisposed&&t.onDisposed(C),g=!0;break;default:throw new Error("Unexception type "+C.type)}if(_)return a("abort"),Promise.reject(_);if(A){h[d]=m[d],o(f,C.outdatedModules);for(d in C.outdatedDependencies)Object.prototype.hasOwnProperty.call(C.outdatedDependencies,d)&&(l[d]||(l[d]=[]),o(l[d],C.outdatedDependencies[d]))}g&&(o(f,[C.moduleId]),h[d]=v)}var P=[];for(i=0;i<f.length;i++)d=f[i],H[d]&&H[d].hot._selfAccepted&&P.push({module:d,errorHandler:H[d].hot._selfAccepted});a("dispose"),Object.keys(M).forEach(function(e){!1===M[e]&&n(e)});for(var k,D=f.slice();D.length>0;)if(d=D.pop(),u=H[d]){var T={},S=u.hot._disposeHandlers;for(s=0;s<S.length;s++)(r=S[s])(T);for(j[d]=T,u.hot.active=!1,delete H[d],delete l[d],s=0;s<u.children.length;s++){var q=H[u.children[s]];q&&((k=q.parents.indexOf(d))>=0&&q.parents.splice(k,1))}}var I,R;for(d in l)if(Object.prototype.hasOwnProperty.call(l,d)&&(u=H[d]))for(R=l[d],s=0;s<R.length;s++)I=R[s],(k=u.children.indexOf(I))>=0&&u.children.splice(k,1);a("apply"),w=b;for(d in h)Object.prototype.hasOwnProperty.call(h,d)&&(e[d]=h[d]);var L=null;for(d in l)if(Object.prototype.hasOwnProperty.call(l,d)&&(u=H[d])){R=l[d];var N=[];for(i=0;i<R.length;i++)if(I=R[i],r=u.hot._acceptedDependencies[I]){if(N.indexOf(r)>=0)continue;N.push(r)}for(i=0;i<N.length;i++){r=N[i];try{r(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:R[i],error:e}),t.ignoreErrored||L||(L=e)}}}for(i=0;i<P.length;i++){var U=P[i];d=U.module,O=[d];try{p(d)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,orginalError:e,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||L||(L=e)}}return L?(a("fail"),Promise.reject(L)):(a("idle"),new Promise(function(e){e(f)}))}function p(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:i(n),parents:(A=O,O=[],A),children:[]};return e[n].call(t.exports,t,t.exports,r(n)),t.l=!0,t.exports}var h=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){u(e,n),h&&h(e,n)};var v,y,m,b,C=!0,w="ae6a88dc1254b7ff5901",_=1e4,j={},O=[],A=[],g=[],x="idle",E=0,P=0,k={},D={},M={},H={};p.m=e,p.c=H,p.d=function(e,n,t){p.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},p.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(n,"a",n),n},p.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},p.p="",p.h=function(){return w},r("./src/index.js")(p.s="./src/index.js")}({"./src/Component/Audio/Audio.html":function(e,n){e.exports='<div class="Audio" id="audioDiv">\r\n    <audio loop>\r\n        <source id="audio" type="video/mp4">\r\n    </audio>\r\n</div>\r\n'},"./src/Component/Audio/Audio.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=t("./src/Component/Component.ts"),u=o(s);t("./src/Component/Audio/Auido.css");var d=t("./src/Component/Audio/Audio.html"),l=o(d),f=function(e){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,l.default));return t.src=e,t.render(),t.renderAfter(),t}return a(n,e),c(n,[{key:"renderAfter",value:function(){this.div=document.querySelector("#audioDiv"),this.audioSource=document.querySelector("#audio"),this.audio=this.div.querySelector("audio"),this.audioSource.src=this.src,this.audio.play()}}]),n}(u.default);n.default=f},"./src/Component/Audio/Auido.css":function(e,n){},"./src/Component/AudioCanvas/AudioContext.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=function(){function e(n,t,r){o(this,e),window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext,this.audioContext=new window.AudioContext,this.source=this.audioContext.createMediaElementSource(n),this.gainNode=this.audioContext[this.audioContext.createGain?"createGain":"createGainNode"](),this.analyser=this.audioContext.createAnalyser(),this.source.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.analyser.fftSize=t,this.analyser.gainNode=this.gainNode,this.visualizer(r)}return r(e,[{key:"visualizer",value:function(e){function n(){this.analyser.getByteFrequencyData(t),e(t),o(n)}var t=new Uint8Array(this.analyser.frequencyBinCount),o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;n=n.bind(this),o(n)}}]),e}();n.default=i},"./src/Component/AudioControl/AudioControl.css":function(e,n){},"./src/Component/AudioControl/AudioControl.html":function(e,n){e.exports='<div id="AudioControl" class="AudioControl">\r\n    <button><i class="icon-font icon-play"></i></button><br>\r\n    <button><i class="icon-font icon-last"></i></button><br>\r\n    <button><i class="icon-font icon-next"></i></button><br>\r\n    <button><i class="icon-font icon-list-play"></i></button><br>\r\n    <button><i class="icon-font icon-random"></i></button><br>\r\n    <button><i class="icon-font icon-voice"></i></button><br>\r\n</div>'},"./src/Component/AudioControl/AudioControl.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t("./src/Component/AudioControl/AudioControl.css"),t("./src/Component/AudioControl/font.css");var c=t("./src/Component/AudioControl/AudioControl.html"),s=o(c),u=t("./src/Component/Component.ts"),d=o(u),l=function(e){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,s.default));return t.audio=e,t.render(),t}return a(n,e),n}(d.default);n.default=l},"./src/Component/AudioControl/font.css":function(e,n){},"./src/Component/Canvas/Canvas.css":function(e,n){},"./src/Component/Canvas/Canvas.html":function(e,n){e.exports='<div class="Canvas" id="canvas">\r\n    <canvas>\r\n        你的浏览器竟然不支持cavans\r\n    </canvas>\r\n</div>\r\n'},"./src/Component/Canvas/Canvas.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=t("./src/Component/Component.ts"),u=o(s);t("./src/Component/Canvas/Canvas.css");var d=t("./src/Component/Canvas/Canvas.html"),l=o(d),f=function(e){function n(){r(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,l.default));return e.canvas=!1,e.context=!1,e.render(),e.div=document.querySelector("#canvas"),e.canvas=e.div.children[0],e.canvas.width=e.div.clientWidth,e.canvas.height=e.div.clientHeight,e.context=e.canvas.getContext("2d"),e}return a(n,e),c(n,[{key:"getCanvasRect",value:function(){return this.canvas.getBoundingClientRect()}},{key:"renderLine",value:function(e){this.context.moveTo(e.start.x,e.start.y),this.context.lineTo(e.end.x,e.end.y),this.context.lineWidth=e.lineWidth,this.context.strokeStyle=e.lineColor,this.context.stroke()}},{key:"clear",value:function(){this.canvas.width=this.canvas.width}}]),n}(u.default);n.default=f},"./src/Component/Canvas/CanvasElement/Line.ts":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n,t,o){this.start=e,this.end=n,this.lineWidth=t,this.lineColor=o}return e}();n.default=o},"./src/Component/Canvas/CanvasElement/Point.ts":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){this.x=e,this.y=n}return e}();n.default=o},"./src/Component/Component.ts":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("./src/Component/reset.css");var o=function(){function e(e){this.html="",this.html=e}return e.$html=function(e){var n=document.createElement("div");return n.innerHTML=e,n.childNodes},e.prototype.render=function(){if(null===document)return void console.log("不在客户端渲染鸡毛？");for(var n=e.$html(this.html),t=0;t<n.length;t++){var o=n[t];document.body.appendChild(o)}},e}();n.default=o},"./src/Component/reset.css":function(e,n){},"./src/index.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t("./src/test/AudioCanvasTest.js"),i=o(r),a=t("./src/test/AudioControlTest.js");o(a);new i.default},"./src/static/Cranky - Libera Me.mp3":function(e,n,t){e.exports=t.p+"./video/Cranky - Libera Me-25f98d.mp3"},"./src/test/AudioCanvasTest.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=t("./src/Component/Audio/Audio.js"),c=o(a),s=t("./src/static/Cranky - Libera Me.mp3"),u=o(s),d=t("./src/Component/Canvas/Canvas.js"),l=o(d),f=t("./src/Component/Canvas/CanvasElement/Line.ts"),p=o(f),h=t("./src/Component/Canvas/CanvasElement/Point.ts"),v=o(h),y=t("./src/Component/AudioCanvas/AudioContext.js"),m=o(y),b=function(){function e(){r(this,e),this.audio=new c.default(u.default),this.canvas=new l.default,this.after()}return i(e,[{key:"after",value:function(){var e=this,n=this.canvas.getCanvasRect(),t=(n.width,n.height),o=.95*t,r=function(n){n.forEach(function(n,r){var i=0!==n?n/255*t*.9:0,a=22*(r+1),c=o-i,s=new p.default(new v.default(a,c),new v.default(a,o),7,"#97ffaf");e.canvas.renderLine(s)})};new m.default(this.audio.audio,64,function(n){e.canvas.clear(),r(n)})}}]),e}();n.default=b},"./src/test/AudioControlTest.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./src/Component/Audio/Audio.js"),a=o(i),c=t("./src/Component/AudioControl/AudioControl.js"),s=o(c),u=function e(){r(this,e),this.audio=new a.default,this.audioControl=new s.default(this.audio.audio)};n.default=u}});