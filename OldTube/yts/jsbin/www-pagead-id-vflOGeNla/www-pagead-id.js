(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function l(a,b){if(b)a:{for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
var da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ea={u:!0},fa={};try{fa.__proto__=ea;q=fa.u;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=p;
function r(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
function ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
l("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
l("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
l("Object.assign",function(a){return a||ja});
var t=this||self;function u(a){a=a.split(".");for(var b=t,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function w(){}
function ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function la(a){var b=ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function x(a){return"function"==ka(a)}
function ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=na:y=oa;return y.apply(null,arguments)}
var pa=Date.now;function z(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function qa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function A(a){return a}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
qa(B,Error);B.prototype.name="CustomError";var C=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ra=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(la(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ua(a,b){var c=la(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function va(){var a=wa,b={},c;for(c in a)b[c]=a[c];return b}
var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var D;var za=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var E;a:{var Aa=t.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){E=Ba;break a}}E=""};function Ca(){}
;var F=window;function G(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}
G.prototype.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.W;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.A}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(pa()+1E3*k)).toUTCString();this.a.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+
e:"")};
G.prototype.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
G.prototype.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{A:0,path:b,domain:c});return d};
G.prototype.clear=function(){for(var a=(this.a.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Da=new G;function H(a,b){this.width=a;this.height=b}
H.prototype.aspectRatio=function(){return this.width/this.height};
H.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
H.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
H.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ea(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;var I=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fa(a){return a?decodeURI(a):a}
function J(a){return Fa(a.match(I)[3]||null)}
function Ga(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ga(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ha(a){var b=[],c;for(c in a)Ga(c,a[c],b);return b.join("&")}
;function Ia(a){var b=Ja;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ka(){var a=[];Ia(function(b){a.push(b)});
return a}
var Ja={G:"allow-forms",H:"allow-modals",I:"allow-orientation-lock",J:"allow-pointer-lock",K:"allow-popups",L:"allow-popups-to-escape-sandbox",M:"allow-presentation",N:"allow-same-origin",O:"allow-scripts",P:"allow-top-navigation",R:"allow-top-navigation-by-user-activation"},La=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Ka()});
function Ma(){var a=Ea(),b={};C(La(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;var Na=(new Date).getTime();function K(){this.b=[];this.a=-1}
K.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.b[a]!=b&&(this.b[a]=b,this.a=-1)};
K.prototype.get=function(a){return!!this.b[a]};
function Oa(a){-1==a.a&&(a.a=ra(a.b,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.a}
;function L(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
L.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};
function Pa(a,b){a.g(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)}
;function Qa(a){t.setTimeout(function(){throw a;},0)}
var M;function Ra(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var e=Ea();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(h){if(("*"==k||h.origin==k)&&h.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.j;c.j=null;e()}};
return function(e){d.next={j:e};d=d.next;b.port2.postMessage(0)}}return function(e){t.setTimeout(e,0)}}
;function Sa(){this.b=this.a=null}
var Ua=new L(function(){return new Ta},function(a){a.reset()});
Sa.prototype.add=function(a,b){var c=Ua.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
Sa.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Ta(){this.next=this.b=this.a=null}
Ta.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Ta.prototype.reset=function(){this.next=this.b=this.a=null};function Va(a,b){N||Wa();Xa||(N(),Xa=!0);Ya.add(a,b)}
var N;function Wa(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);N=function(){a.then(Za)}}else N=function(){var b=Za,c;
!(c=!x(t.setImmediate))&&(c=t.Window&&t.Window.prototype)&&(c=-1==E.indexOf("Edge")&&t.Window.prototype.setImmediate==t.setImmediate);c?(M||(M=Ra()),M(b)):t.setImmediate(b)}}
var Xa=!1,Ya=new Sa;function Za(){for(var a;a=Ya.remove();){try{a.a.call(a.b)}catch(b){Qa(b)}Pa(Ua,a)}Xa=!1}
;function $a(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.a=0;this.l=void 0;this.g=this.b=this.f=null;this.h=this.i=!1;if(a!=w)try{var b=this;a.call(void 0,function(c){P(b,2,c)},function(c){P(b,3,c)})}catch(c){P(this,3,c)}}
function ab(){this.next=this.context=this.b=this.f=this.a=null;this.g=!1}
ab.prototype.reset=function(){this.context=this.b=this.f=this.a=null;this.g=!1};
var bb=new L(function(){return new ab},function(a){a.reset()});
function cb(a,b,c){var d=bb.get();d.f=a;d.b=b;d.context=c;return d}
function Q(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return db(this,x(a)?a:null,x(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function R(a,b){return db(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.a){var b=new S(a);Va(function(){eb(this,b)},this)}};
function eb(a,b){if(0==a.a)if(a.f){var c=a.f;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?eb(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):fb(c),gb(c,e,3,b)))}a.f=null}else P(a,3,b)}
function hb(a,b){a.b||2!=a.a&&3!=a.a||ib(a);a.g?a.g.next=b:a.b=b;a.g=b}
function db(a,b,c,d){var e=cb(null,null,null);e.a=new O(function(f,g){e.f=b?function(k){try{var h=b.call(d,k);f(h)}catch(m){g(m)}}:f;
e.b=c?function(k){try{var h=c.call(d,k);void 0===h&&k instanceof S?g(k):f(h)}catch(m){g(m)}}:g});
e.a.f=a;hb(a,e);return e.a}
O.prototype.B=function(a){this.a=0;P(this,2,a)};
O.prototype.F=function(a){this.a=0;P(this,3,a)};
function P(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof O){hb(d,cb(e||w,f||null,a));var g=!0}else if($a(d))d.then(e,f,a),g=!0;else{if(ma(d))try{var k=d.then;if(x(k)){jb(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.l=c,a.a=b,a.f=null,ib(a),3!=b||c instanceof S||kb(a,c))}}
function jb(a,b,c,d,e){function f(h){k||(k=!0,d.call(e,h))}
function g(h){k||(k=!0,c.call(e,h))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function ib(a){a.i||(a.i=!0,Va(a.v,a))}
function fb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.g=null);return b}
O.prototype.v=function(){for(var a;a=fb(this);)gb(this,a,this.a,this.l);this.i=!1};
function gb(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.h;a=a.f)a.h=!1;if(b.a)b.a.f=null,lb(b,c,d);else try{b.g?b.f.call(b.context):lb(b,c,d)}catch(e){mb.call(null,e)}Pa(bb,b)}
function lb(a,b,c){2==b?a.f.call(a.context,c):a.b&&a.b.call(a.context,c)}
function kb(a,b){a.h=!0;Va(function(){a.h&&mb.call(null,b)})}
var mb=Qa;function S(a){B.call(this,a)}
qa(S,B);S.prototype.name="cancel";function nb(a){z("yt.ads.biscotti.lastId_",a)}
;var T=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",T);function ob(a){var b=arguments;1<b.length?T[b[0]]=b[1]:1===b.length&&Object.assign(T,b[0])}
function U(a,b){return a in T?T[a]:b}
;function V(a){var b=U("EXPERIMENTS_FORCED_FLAGS",{});a=void 0!==b[a]?b[a]:U("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
;var pb=[];function qb(a){pb.forEach(function(b){return b(a)})}
function rb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){sb(b),qb(b)}}:a}
function sb(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ob("ERRORS",b))}
function tb(a){var b=u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ob("ERRORS",b))}
;function ub(a){var b=[];ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function vb(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?sa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(h){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};sb(k)}}}return b}
function wb(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vb(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ha(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function xb(a){var b=yb;a=void 0===a?u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(zb(b),Ab(b));b.ca_type="image";a&&(b.bid=a);return b}
function zb(a){var b={};b.dt=Na;b.flash="0";a:{try{var c=a.a.top.location.href}catch(f){a=2;break a}a=c?c===a.b.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?F:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(b.u_h=F.screen.height,b.u_w=F.screen.width,b.u_ah=F.screen.availHeight,b.u_aw=F.screen.availWidth,b.u_cd=F.screen.colorDepth);
F.navigator&&F.navigator.plugins&&(b.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(b.u_nmime=F.navigator.mimeTypes.length);return b}
function Ab(a){var b=a.a;try{var c=b.screenX;var d=b.screenY}catch(v){}try{var e=b.outerWidth;var f=b.outerHeight}catch(v){}try{var g=b.innerWidth;var k=b.innerHeight}catch(v){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.a.top;try{var h=(c||window).document,m="CSS1Compat"==h.compatMode?h.documentElement:h.body;var n=(new H(m.clientWidth,m.clientHeight)).round()}catch(v){n=new H(-12245933,-12245933)}h=n;n={};m=new K;t.SVGElement&&
t.document.createElementNS&&m.set(0);c=Ma();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);t.crypto&&t.crypto.subtle&&m.set(3);t.TextDecoder&&t.TextEncoder&&m.set(4);m=Oa(m);n.bc=m;n.bih=h.height;n.biw=h.width;n.brdim=b.join();a=a.b;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!F.WebGLRenderingContext,n}
var yb=new function(){var a=window.document;this.a=window;this.b=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ub(xb(a))});pa();var Bb="XMLHttpRequest"in t?function(){return new XMLHttpRequest}:null;
function Cb(){if(!Bb)return null;var a=Bb();return"open"in a?a:null}
function Db(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Eb(a,b){"function"===typeof a&&(a=rb(a));return window.setTimeout(a,b)}
;var Fb={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Gb="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Hb=!1;
function Ib(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(I)[1]||null,e=J(a);d&&e?(d=c,c=a.match(I),d=d.match(I),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(c)==e&&(Number(c.match(I)[4]||null)||null)==(Number(a.match(I)[4]||null)||null):!0;d=V("web_ajax_ignore_global_headers_if_set");for(var f in Fb)e=U(Fb[f]),!e||!c&&J(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!J(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!J(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!J(a))b["X-YouTube-Ad-Signals"]=ub(xb(void 0));return b}
function Jb(a){var b=window.location.search,c=J(a),d=Fa(a.match(I)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vb(b),f={};C(Gb,function(g){e[g]&&(f[g]=e[g])});
return wb(a,f||{},!1)}
function Kb(a){var b="//googleads.g.doubleclick.net/pagead/id",c=a.format||"JSON";b=Lb(b,a);var d=Mb(b,a),e=!1,f=Nb(b,function(h){if(!e){e=!0;k&&window.clearTimeout(k);var m=Db(h),n=null,v=400<=h.status&&500>h.status,Zb=500<=h.status&&600>h.status;if(m||v||Zb)n=Ob(b,c,h,a.S);if(m)a:if(h&&204==h.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};v=a.context||t;m?a.m&&a.m.call(v,h,n):a.onError&&a.onError.call(v,h,n);a.C&&a.C.call(v,
h,n)}},a.method,d,a.headers,a.responseType,a.withCredentials);
if(a.o&&0<a.timeout){var g=a.o;var k=Eb(function(){e||(e=!0,f.abort(),window.clearTimeout(k),g.call(a.context||t,f))},a.timeout)}return f}
function Lb(a,b){b.U&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME",void 0),d=b.X;d&&(d[c]&&delete d[c],a=wb(a,d||{},!0));return a}
function Mb(a,b){var c=U("XSRF_FIELD_NAME",void 0),d=U("XSRF_TOKEN",void 0),e=b.V||"",f=b.s,g=U("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.T||J(a)&&!b.withCredentials&&J(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.s&&b.s[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=vb(e),ya(e,f),e=b.D&&"JSON"==b.D?JSON.stringify(e):Ha(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!Hb&&c&&"POST"!=b.method&&(Hb=!0,
sb(Error("AJAX request with postData should use POST")));return e}
function Ob(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,tb(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Pb(a):null)e={},C(a.getElementsByTagName("*"),function(g){e[g.tagName]=Qb(g)})}d&&Rb(e);
return e}
function Rb(a){if(ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=new Ca;if(void 0===D){var f=null;var g=t.trustedTypes;if(g&&g.createPolicy){try{f=g.createPolicy("goog#html",{createHTML:A,createScript:A,createScriptURL:A})}catch(k){t.console&&t.console.error(k.message)}D=f}else D=f}(f=D)&&f.createHTML(d);a[c]=e}else Rb(a[b])}}
function Pb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Qb(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Nb(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&rb(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Cb();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;V("debug_forward_web_query_parameters")&&(a=Jb(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ib(a,e))for(var m in e)h.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function Sb(){var a=va(),b;return R(new O(function(c,d){a.m=function(e){Db(e)?c(e):d(new W("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new W("Unknown request error","net.unknown",e))};
a.o=function(e){d(new W("Request timed out","net.timeout",e))};
b=Kb(a)}),function(c){c instanceof S&&b.abort();
return Q(c)})}
function W(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
r(W,B);function X(){this.a=0;this.b=null}
X.prototype.then=function(a,b,c){return 1===this.a&&a?(a=a.call(c,this.b),$a(a)?a:Tb(a)):2===this.a&&b?(a=b.call(c,this.b),$a(a)?a:Ub(a)):this};
X.prototype.$goog_Thenable=!0;function Ub(a){var b=new X;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function Tb(a){var b=new X;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function Vb(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Y;this.isTimeout=a instanceof W&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof S}
r(Vb,B);Vb.prototype.name="BiscottiError";function Y(){B.call(this,"Biscotti ID is missing from server")}
r(Y,B);Y.prototype.name="BiscottiMissingError";var wa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Z=null;
function Wb(){if(V("disable_biscotti_fetch_on_html5_clients"))return Q(Error("Fetching biscotti ID is disabled."));if(V("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Da.get("CONSENT","").startsWith("YES+"))return Q(Error("User has not consented - not fetching biscotti id."));if("1"===ua(U("PLAYER_CONFIG",{}),"args","privembed"))return Q(Error("Biscotti ID is not available in private embed mode"));Z||(Z=R(Sb().then(Xb),function(a){return Yb(2,a)}));
return Z}
function Xb(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Y;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Y;a=a.id;nb(a);Z=Tb(a);$b(18E5,2);return a}
function Yb(a,b){var c=new Vb(b);nb("");Z=Ub(c);0<a&&$b(12E4,a-1);throw c;}
function $b(a,b){Eb(function(){R(Sb().then(Xb,function(c){return Yb(b,c)}),w)},a)}
;u("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",Wb);var ac;try{var bc=u("yt.ads.biscotti.getId_");ac=bc?bc():Wb()}catch(a){ac=Q(a)}R(ac,w);}).call(this);
