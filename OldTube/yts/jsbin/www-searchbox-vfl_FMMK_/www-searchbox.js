(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.fa=b.prototype}
function oa(){this.s=!1;this.l=null;this.i=void 0;this.f=1;this.m=this.o=0;this.C=this.g=null}
function pa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
oa.prototype.u=function(a){this.i=a};
function qa(a,b){a.g={Nc:b,Nb:!0};a.f=a.o||a.m}
oa.prototype["return"]=function(a){this.g={"return":a};this.f=this.m};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.da=function(a){this.f=a};
function ra(a){a.o=2;a.m=3}
function sa(a){a.o=0;a.g=null}
function ta(a){a.C=[a.g];a.o=0;a.m=0}
function ua(a){var b=a.C.splice(0)[0];(b=a.g=a.g||b)?b.Nb?a.f=a.o||a.m:void 0!=b.da&&a.m<b.da?(a.f=b.da,a.g=null):a.f=a.m:a.f=0}
function va(a){this.f=new oa;this.i=a}
function wa(a,b){pa(a.f);var c=a.f.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.f.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.s=!1,e;var f=e.value}catch(g){return a.f.l=null,qa(a.f,g),ya(a)}a.f.l=null;d.call(a.f,f);return ya(a)}
function ya(a){for(;a.f.f;)try{var b=a.i(a.f);if(b)return a.f.s=!1,{value:b.value,done:!1}}catch(c){a.f.i=void 0,qa(a.f,c)}a.f.s=!1;if(a.f.g){b=a.f.g;a.f.g=null;if(b.Nb)throw b.Nc;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){pa(a.f);a.f.l?b=xa(a,a.f.l.next,b,a.f.u):(a.f.u(b),b=ya(a));return b};
this["throw"]=function(b){pa(a.f);a.f.l?b=xa(a,a.f.l["throw"],b,a.f.u):(qa(a.f,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function x(a,b){var c=new za(new va(b));na&&a.prototype&&na(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ba(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
t("Array.prototype.keys",function(a){return a?a:function(){return Ba(this,function(b){return b})}});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.i=0;this.g=void 0;this.f=[];var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.f){this.f=[];var h=this;this.g(function(){h.m()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.g=function(g){e(g,0)};
c.prototype.m=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.f=null};
c.prototype.l=function(g){this.g(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.D),reject:g(this.m)}};
b.prototype.D=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.F(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.C(g):this.o(g)}};
b.prototype.C=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.G(h,g):this.o(g)};
b.prototype.m=function(g){this.s(2,g)};
b.prototype.o=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.g=h;this.u()};
b.prototype.u=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.i(this.f[g]);this.f=null}};
var f=new c;b.prototype.F=function(g){var h=this.l();g.Ea(h.resolve,h.reject)};
b.prototype.G=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(z){try{l(r(z))}catch(B){n(B)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.Ea(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.Ea=function(g,h){function k(){switch(l.i){case 1:g(l.g);break;case 2:h(l.g);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.f?f.i(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).Ea(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(B){r[z]=B;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).Ea(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||na});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&Ca(h.i,l))for(var p=0;p<n.length;p++){var r=n[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:p,Y:r}}return{id:l,list:n,index:-1,Y:void 0}}
function e(h){this.i={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.Y?l.Y.value=k:(l.Y={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.Y),this.f.previous.next=l.Y,this.f.previous=l.Y,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.Y&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.Y.previous.next=h.Y.next,h.Y.next.previous=h.Y.previous,h.Y.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).Y};
e.prototype.get=function(h){return(h=d(this,h).Y)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Array.prototype.entries",function(a){return a?a:function(){return Ba(this,function(b,c){return[b,c]})}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
var y=this||self;function A(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ea(){}
function Fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ga(a){var b=Fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ha(a){return"function"==Fa(a)}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ja:C=Ka;return C.apply(null,arguments)}
function La(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now;function E(a,b){var c=a.split("."),d=y;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.fa=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Na(a){return a}
;function Oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Oa,Error);Oa.prototype.name="CustomError";function Pa(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");Oa.call(this,d+c[e])}
F(Pa,Oa);Pa.prototype.name="AssertionError";var Qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ra=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Sa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ta=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ua(a,b){var c=Qa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a){return Array.prototype.concat.apply([],arguments)}
function Wa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ya(a,b){return Va.apply([],Sa(a,b,void 0))}
;function Za(){return null}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ab(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function bb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function cb(a,b){return null!==a&&b in a}
function db(a){var b={},c;for(c in a)b[c]=a[c];return b}
function eb(a){var b=Fa(a);if("object"==b||"array"==b){if(Ha(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=eb(a[c]);return b}return a}
var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var hb;function ib(a,b){this.f=a===jb&&b||"";this.i=kb}
ib.prototype.la=!0;ib.prototype.ha=function(){return this.f};
function lb(a){return a instanceof ib&&a.constructor===ib&&a.i===kb?a.f:"type_error:Const"}
var kb={},jb={};var H=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},mb=/&/g,nb=/</g,ob=/>/g,pb=/"/g,qb=/'/g,rb=/\x00/g,sb=/[\x00&<>"']/;
function tb(){return-1!=ub.toLowerCase().indexOf("webkit")}
function vb(a,b){for(var c=0,d=H(String(a)).split("."),e=H(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=wb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||wb(0==h[2].length,0==k[2].length)||wb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function wb(a,b){return a<b?-1:a>b?1:0}
;function I(a,b){this.f=a===xb&&b||"";this.i=yb}
I.prototype.la=!0;I.prototype.ha=function(){return this.f.toString()};
I.prototype.Mb=!0;I.prototype.gb=function(){return 1};
function zb(a){if(a instanceof I&&a.constructor===I&&a.i===yb)return a.f;Fa(a);return"type_error:SafeUrl"}
var Ab=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Bb(a){a instanceof I||(a="object"==typeof a&&a.la?a.ha():String(a),a=Ab.test(a)?new I(xb,a):null);return a||Cb}
function Db(a){if(a instanceof I)return a;a="object"==typeof a&&a.la?a.ha():String(a);Ab.test(a)||(a="about:invalid#zClosurez");return new I(xb,a)}
var yb={},Cb=new I(xb,"about:invalid#zClosurez"),xb={};function Eb(){this.f="";this.i=Fb}
Eb.prototype.la=!0;var Fb={};Eb.prototype.ha=function(){return this.f};
function Gb(a){var b=new Eb;b.f=a;return b}
var Hb=Gb("");function Ib(a){if(a instanceof I)return'url("'+zb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof ib)a=lb(a);else{a=String(a);var b=a.replace(Jb,"$1").replace(Jb,"$1").replace(Kb,"url");if(Lb.test(b)){if(b=!Mb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Nb(a)}a=b?Ob(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Pa("Value does not allow [{;}], got: %s.",[a]);return a}
function Nb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Lb=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Kb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Jb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),Mb=/\/\*/;function Ob(a){return a.replace(Kb,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=Bb(d).ha();return c+f+b+f+e})}
;function Pb(){this.f="";this.i=Qb}
Pb.prototype.la=!0;var Qb={};
function Rb(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else{b:{var h=void 0;for(h in d)if(d[h]==g){h=!0;break b}h=!1}if(h&&e.pop()!=g){c=!1;break a}}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+
a);if(!(b instanceof Eb)){c=b;d="";for(var k in c)if(Object.prototype.hasOwnProperty.call(c,k)){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);e=c[k];null!=e&&(e=Array.isArray(e)?Sa(e,Ib).join(" "):Ib(e),d+=k+":"+e+";")}b=d?Gb(d):Hb}b instanceof Eb&&b.constructor===Eb&&b.i===Fb?k=b.f:(Fa(b),k="type_error:SafeStyle");k=a+"{"+k.replace(/</g,"\\3C ")+"}";return Sb(k)}
function Tb(a){function b(d){Array.isArray(d)?G(d,b):c+=Ub(d)}
var c="";G(arguments,b);return Sb(c)}
Pb.prototype.ha=function(){return this.f};
function Ub(a){if(a instanceof Pb&&a.constructor===Pb&&a.i===Qb)return a.f;Fa(a);return"type_error:SafeStyleSheet"}
function Sb(a){var b=new Pb;b.f=a;return b}
var Vb=Sb("");var ub;a:{var Wb=y.navigator;if(Wb){var Xb=Wb.userAgent;if(Xb){ub=Xb;break a}}ub=""}function J(a){return-1!=ub.indexOf(a)}
function Yb(a){for(var b=RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g"),c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c}
;function Zb(){return J("Opera")}
function $b(){return J("Trident")||J("MSIE")}
function ac(){return J("Safari")&&!(bc()||J("Coast")||Zb()||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function bc(){return(J("Chrome")||J("CriOS"))&&!J("Edge")}
function cc(){function a(e){a:{var f=d;for(var g=e.length,h="string"===typeof e?e.split(""):e,k=0;k<g;k++)if(k in h&&f.call(void 0,h[k],k,e)){f=k;break a}f=-1}return c[0>f?null:"string"===typeof e?e.charAt(f):e[f]]||""}
var b=ub;if($b())return dc(b);b=Yb(b);var c={};G(b,function(e){c[e[0]]=e[1]});
var d=La(cb,c);return Zb()?a(["Version","Opera"]):J("Edge")?a(["Edge"]):J("Edg/")?a(["Edg"]):bc()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""}
function dc(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b}
;function ec(){this.f="";this.g=fc;this.i=null}
ec.prototype.Mb=!0;ec.prototype.gb=function(){return this.i};
ec.prototype.la=!0;ec.prototype.ha=function(){return this.f.toString()};
function gc(a){if(a instanceof ec&&a.constructor===ec&&a.g===fc)return a.f;Fa(a);return"type_error:SafeHtml"}
var fc={};function hc(a,b){var c=new ec;if(void 0===hb){var d=null;var e=y.trustedTypes;if(e&&e.createPolicy){try{d=e.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(f){y.console&&y.console.error(f.message)}hb=d}else hb=d}d=hb;c.f=d?d.createHTML(a):a;c.i=b;return c}
var jc=new ec;jc.f=y.trustedTypes&&y.trustedTypes.emptyHTML?y.trustedTypes.emptyHTML:"";jc.i=0;var kc=$a(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=gc(jc);return!b.parentElement});
function lc(a,b){if(kc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=gc(b)}
function mc(a,b){var c=b instanceof I?b:Db(b);a.href=zb(c)}
;function nc(a){return decodeURIComponent(a.replace(/\+/g," "))}
;function oc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function pc(){return J("Gecko")&&!(tb()&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function qc(a){qc[" "](a);return a}
qc[" "]=Ea;function rc(a,b){var c=sc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var tc=Zb(),K=$b(),uc=J("Edge"),vc=pc(),wc=tb()&&!J("Edge");function xc(){var a=y.document;return a?a.documentMode:void 0}
var yc;a:{var zc="",Ac=function(){var a=ub;if(vc)return/rv:([^\);]+)(\)|;)/.exec(a);if(uc)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wc)return/WebKit\/(\S+)/.exec(a);if(tc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ac&&(zc=Ac?Ac[1]:"");if(K){var Bc=xc();if(null!=Bc&&Bc>parseFloat(zc)){yc=String(Bc);break a}}yc=zc}var Cc=yc,sc={};function Dc(a){return rc(a,function(){return 0<=vb(Cc,a)})}
var Ec;if(y.document&&K){var Fc=xc();Ec=Fc?Fc:parseInt(Cc,10)||void 0}else Ec=void 0;var Gc=Ec;var Hc=oc()||J("iPod"),Ic=J("iPad");var Jc={},Kc=null;var L=window;function Lc(a){this.f=a||{cookie:""}}
m=Lc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Re;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ob}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=H(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ob:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=H(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Mc=new Lc("undefined"==typeof document?null:document);function Nc(a,b){this.width=a;this.height=b}
m=Nc.prototype;m.clone=function(){return new Nc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Oc(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Pc(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
;function Qc(){return!(J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;var Rc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Sc(a){return a?decodeURI(a):a}
function Tc(a){return Sc(a.match(Rc)[3]||null)}
function Uc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Uc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Vc(a){var b=[],c;for(c in a)Uc(c,a[c],b);return b.join("&")}
function Wc(a,b){var c=Vc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Xc(a){var b=Yc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Zc(){var a=[];Xc(function(b){a.push(b)});
return a}
var Yc={ee:"allow-forms",fe:"allow-modals",ge:"allow-orientation-lock",he:"allow-pointer-lock",ie:"allow-popups",je:"allow-popups-to-escape-sandbox",ke:"allow-presentation",le:"allow-same-origin",me:"allow-scripts",ne:"allow-top-navigation",oe:"allow-top-navigation-by-user-activation"},$c=$a(function(){return Zc()});
function ad(){var a=Oc("IFRAME"),b={};G($c(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function bd(){this.g=this.g;this.m=this.m}
bd.prototype.g=!1;bd.prototype.dispose=function(){this.g||(this.g=!0,this.ka())};
bd.prototype.ka=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function M(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cd(){var a=document.body||document.documentElement;a:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var dd=(new Date).getTime();function ed(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function fd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],B=e[2],N=e[3],Ma=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var fa=N^z&(B^N);var ic=1518500249}else fa=z^B^N,ic=1859775393;else 60>q?(fa=z&B|N&(z|B),ic=2400959708):(fa=z^B^N,ic=3395469782);fa=((p<<5|p>>>27)&4294967295)+fa+Ma+ic+r[q]&4294967295;Ma=N;N=B;B=(z<<30|z>>>2)&4294967295;z=p;p=fa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+N&4294967295;e[4]=e[4]+Ma&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,B=p.length;z<B;++z)q.push(p.charCodeAt(z));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var z=24;0<=z;z-=8)p[r++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Dc:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function gd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),hd(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=hd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function hd(a){var b=fd();b.update(a);return b.Dc().toLowerCase()}
;function id(a){var b=ed(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new Lc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new Lc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,gd(ed(d),c,a||null)].join(" "):null}return null}
;function jd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function kd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ld(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:jd(a).match(/\S+/g)||[],c=0<=Qa(c,b);return c}
function md(a,b){if(a.classList)a.classList.add(b);else if(!ld(a,b)){var c=jd(a);kd(a,c+(0<c.length?" "+b:b))}}
function nd(a,b){a.classList?a.classList.remove(b):ld(a,b)&&kd(a,Ra(a.classList?a.classList:jd(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;var od="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function pd(){}
pd.prototype.next=function(){throw od;};
pd.prototype.ga=function(){return this};
function qd(a){if(a instanceof pd)return a;if("function"==typeof a.ga)return a.ga(!1);if(Ga(a)){var b=0,c=new pd;c.next=function(){for(;;){if(b>=a.length)throw od;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function rd(a,b){if(Ga(a))try{G(a,b,void 0)}catch(c){if(c!==od)throw c;}else{a=qd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==od)throw c;}}}
function sd(a){if(Ga(a))return Wa(a);a=qd(a);var b=[];rd(a,function(c){b.push(c)});
return b}
;var td={};
function ud(a){if(K&&!Dc(9))return[0,0,0,0];var b=td.hasOwnProperty(a)?td[a]:null;if(b)return b;65536<Object.keys(td).length&&(td={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=vd(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=vd(b,d);b=vd(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=wd(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=wd(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=wd(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=
wd(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);b=wd(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=wd(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");wd(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return td[a]=b}
function wd(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}
function vd(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})}
;var xd={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},yd=/[\n\f\r"'()*<>]/g,zd={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function Ad(a){return zd[a]}
function Bd(a,b,c){b=H(b);if(""==b)return null;var d=String(b.substr(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=zb(a)?'url("'+zb(a).replace(yd,Ad)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in xd))return null}return b}
;function Cd(a,b){var c=y[a];return c&&c.prototype?(c=Object.getOwnPropertyDescriptor(c.prototype,b))&&c.get||null:null}
function Dd(a,b){var c=y[a];return c&&c.prototype&&c.prototype[b]||null}
var Ed=Cd("Element","attributes")||Cd("Node","attributes"),Fd=Dd("Element","hasAttribute"),Gd=Dd("Element","getAttribute"),Hd=Dd("Element","setAttribute"),Id=Dd("Element","removeAttribute"),Jd=Dd("Element","getElementsByTagName"),Kd=Dd("Element","matches")||Dd("Element","msMatchesSelector"),Ld=Cd("Node","nodeName"),Md=Cd("Node","nodeType"),Nd=Cd("Node","parentNode"),Od=Cd("HTMLElement","style")||Cd("Element","style"),Pd=Cd("HTMLStyleElement","sheet"),Qd=Dd("CSSStyleDeclaration","getPropertyValue"),
Rd=Dd("CSSStyleDeclaration","setProperty");function Sd(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}
function Td(a,b,c,d){if(a)return a.apply(b,d);if(K&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}
function Ud(a){return Sd(Ed,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Vd(a,b,c){try{Td(Hd,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}
function Wd(a){return Sd(Od,a,"style",function(b){return b instanceof CSSStyleDeclaration})}
function Xd(a){return Sd(Pd,a,"sheet",function(b){return b instanceof CSSStyleSheet})}
function Yd(a){return Sd(Ld,a,"nodeName",function(b){return"string"==typeof b})}
function Zd(a){return Sd(Md,a,"nodeType",function(b){return"number"==typeof b})}
function $d(a){return Sd(Nd,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}
function ae(a,b){return Td(Qd,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}
function be(a,b,c){Td(Rd,a,a.setProperty?"setProperty":"setAttribute",[b,c])}
;var ce=K&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),de={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function ee(a,b,c){var d=[];a=fe(Wa(a.cssRules));G(a,function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&K&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(ce,"#"+b+" $1"):e.selectorText;d.push(Rb(f,ge(e.style,c)))}});
return Tb(d)}
function fe(a){return Ra(a,function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}
function he(a,b,c){a=ie("<style>"+a+"</style>");return null==a||null==a.sheet?Vb:ee(a.sheet,void 0!=b?b:null,c)}
function ie(a){if(K&&!Dc(10)||"function"!=typeof y.DOMParser)return null;a=hc("<html><head></head><body>"+a+"</body></html>",null);return(new DOMParser).parseFromString(gc(a),"text/html").body.children[0]}
function ge(a,b){if(!a)return Hb;var c=document.createElement("div").style,d=je(a);G(d,function(e){var f=wc&&e in de?e:e.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=f.lastIndexOf("--",0)&&0!=f.lastIndexOf("var",0)&&(e=ae(a,e),e=Bd(f,e,b),null!=e&&be(c,f,e))});
return Gb(c.cssText||"")}
function ke(a){var b=Array.from(Td(Jd,a,"getElementsByTagName",["STYLE"])),c=Ya(b,function(e){return Wa(Xd(e).cssRules)});
c=fe(c);c.sort(function(e,f){var g=ud(e.selectorText);a:{var h=ud(f.selectorText);for(var k=Math.min(g.length,h.length),l=0;l<k;l++){var n=g[l];var p=h[l];n=n>p?1:n<p?-1:0;if(0!=n){h=n;break a}}g=g.length;h=h.length;h=g>h?1:g<h?-1:0}return-h});
a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,null,!1);for(var d;d=a.nextNode();)G(c,function(e){Td(Kd,d,d.matches?"matches":"msMatchesSelector",[e.selectorText])&&e.style&&le(d,e.style)});
G(b,Pc)}
function le(a,b){var c=je(a.style),d=je(b);G(d,function(e){if(!(0<=c.indexOf(e))){var f=ae(b,e);be(a.style,e,f)}})}
function je(a){Ga(a)?a=Wa(a):(a=bb(a),Ua(a,"cssText"));return a}
;Oc("DIV");var me={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-CONTROLS":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-EXPANDED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-HASPOPUP":!0,"* ARIA-HIDDEN":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,
"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,
"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},ne={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,
"* CLASS":!0,"* ID":!0,"* STYLE":!0};var oe="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),pe=0;function qe(){this.g=[];this.i=[];this.f="data-elementweakmap-index-"+pe++}
qe.prototype.set=function(a,b){if(Td(Fd,a,"hasAttribute",[this.f])){var c=parseInt(Td(Gd,a,"getAttribute",[this.f])||null,10);this.i[c]=b}else c=this.i.push(b)-1,Vd(a,this.f,c.toString()),this.g.push(a);return this};
qe.prototype.get=function(a){if(Td(Fd,a,"hasAttribute",[this.f]))return a=parseInt(Td(Gd,a,"getAttribute",[this.f])||null,10),this.i[a]};
qe.prototype.clear=function(){this.g.forEach(function(a){Td(Id,a,"removeAttribute",[this.f])},this);
this.g=[];this.i=[]};var re=!K||10<=Number(Gc),se=!K||null==document.documentMode;function te(){}
;var ue={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var ve={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var we={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function xe(a){a=a||new ye;ze(a);this.f=db(a.f);this.m=db(a.F);this.g=db(a.G);this.u=a.C;G(a.s,function(b){if(0!=b.lastIndexOf("data-",0))throw new Pa('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new Pa('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.f["* "+b.toUpperCase()]=Ae},this);
G(a.o,function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||we[b])throw new Pa("Only valid custom element tag names allowed, got: %s.",[b]);this.g[b]=!0},this);
this.s=a.g;this.l=a.D;this.i=null;this.o=a.u}
F(xe,te);function Be(a){return function(b,c){var d=a(H(b),c);return d&&"about:invalid#zClosurez"!=zb(d)?zb(d):null}}
function ye(){this.f={};G([me,ne],function(a){G(bb(a),function(b){this.f[b]=Ae},this)},this);
this.i={};this.s=[];this.o=[];this.F=db(ue);this.G=db(ve);this.C=!1;this.M=Bb;this.J=this.m=this.H=this.g=Za;this.D=null;this.l=this.u=!1}
function Ce(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}
function De(a,b,c,d){a[c]&&!b[c]&&(a[c]=Ce(a[c],d))}
function ze(a){if(a.l)throw Error("HtmlSanitizer.Builder.build() can only be used once.");De(a.f,a.i,"* USEMAP",Ee);var b=Be(a.M);G(["* ACTION","* CITE","* HREF"],function(d){De(this.f,this.i,d,b)},a);
var c=Be(a.g);G(["* LONGDESC","* SRC","LINK HREF"],function(d){De(this.f,this.i,d,c)},a);
G(["* FOR","* HEADERS","* NAME"],function(d){De(this.f,this.i,d,La(Fe,this.H))},a);
De(a.f,a.i,"A TARGET",La(Ge,["_blank","_self"]));De(a.f,a.i,"* CLASS",La(He,a.m));De(a.f,a.i,"* ID",La(Ie,a.m));De(a.f,a.i,"* STYLE",La(a.J,c));a.l=!0}
function Je(a,b){a||(a="*");return(a+" "+b).toUpperCase()}
function Ae(a){return H(a)}
function Ge(a,b){var c=H(b);return 0<=Qa(a,c.toLowerCase())?c:null}
function Ee(a){return(a=H(a))&&"#"==a.charAt(0)?a:null}
function Fe(a,b,c){return a(H(b),c)}
function He(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}
function Ie(a,b,c){return a(H(b),c)}
function Ke(a,b){var c=b.data,d=$d(b);d&&"style"==Yd(d).toLowerCase()&&!("STYLE"in a.m)&&"STYLE"in a.g&&(c=Ub(he(c,a.i,C(function(e,f){return this.s(e,{ue:f})},a))));
return document.createTextNode(c)}
;function Le(a){var b=new ye;b=new xe(b);var c=!("STYLE"in b.m)&&"STYLE"in b.g;c="*"==b.l&&c?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^D()).toString(36)):b.l;b.i=c;if(re){c=a;if(re){a=Oc("SPAN");b.i&&"*"==b.l&&(a.id=b.i);b.o&&(c=ie("<div>"+c+"</div>"),ke(c),c=c.innerHTML);c=hc(c,null);var d=document.createElement("template");if(se&&"content"in d)lc(d,c),d=d.content;else{var e=document.implementation.createHTMLDocument("x");d=e.body;
lc(e.body,c)}c=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(d=oe?new WeakMap:new qe;e=c.nextNode();){c:{var f=b;var g=e;switch(Zd(g)){case 3:f=Ke(f,g);break c;case 1:if("TEMPLATE"==Yd(g).toUpperCase())f=null;else{var h=Yd(g).toUpperCase();if(h in f.m)var k=null;else f.g[h]?k=document.createElement(h):(k=Oc("SPAN"),f.u&&Vd(k,"data-sanitizer-original-tag",h.toLowerCase()));if(k){var l=k,n=Ud(g);if(null!=n)for(var p=0;h=n[p];p++)if(h.specified){var r=f;var q=
g,z=h,B=z.name;if(0==B.lastIndexOf("data-sanitizer-",0))r=null;else{var N=Yd(q);z=z.value;var Ma={tagName:H(N).toLowerCase(),attributeName:H(B).toLowerCase()},fa={Cc:void 0};"style"==Ma.attributeName&&(fa.Cc=Wd(q));q=Je(N,B);q in r.f?(r=r.f[q],r=r(z,Ma,fa)):(B=Je(null,B),B in r.f?(r=r.f[B],r=r(z,Ma,fa)):r=null)}null!==r&&Vd(l,h.name,r)}f=k}else f=null}break c;default:f=null}}if(f){if(1==Zd(f)&&d.set(e,f),e=$d(e),g=!1,e)h=Zd(e),k=Yd(e).toLowerCase(),l=$d(e),11!=h||l?"body"==k&&l&&(h=$d(l))&&!$d(h)&&
(g=!0):g=!0,h=null,g||!e?h=a:1==Zd(e)&&(h=d.get(e)),h.content&&(h=h.content),h.appendChild(f)}else for(f=e;e=f.firstChild;)f.removeChild(e)}d.clear&&d.clear();b=a}else b=Oc("SPAN");0<Ud(b).length&&(a=Oc("SPAN"),a.appendChild(b),b=a);b=(new XMLSerializer).serializeToString(b);b=b.slice(b.indexOf(">")+1,b.lastIndexOf("</"))}else b="";return hc(b,null)}
;var Me=/^[6-9]$/,Ne=/<\/?(?:b|em)>/gi;function Oe(a){this.f=a}
var Pe=new Oe({});function Qe(a,b,c,d,e,f){var g;a instanceof ec?g=a:g=hc(a,null);this.u=g;this.f=b;this.i=c;this.o=d;this.g=e;this.m=f||Pe;this.l=!1;switch(this.o){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.l=!0}}
Qe.prototype.getHtml=function(){return gc(this.u).toString()};
Qe.prototype.s=function(){return this.i};
Qe.prototype.V=function(){return this.o};var Re=/^\s/,Se=/\s+/,Te=/\s+/g,Ue=/^\s+|\s+$/g,Ve=/^\s+$/,We=/<[^>]*>/g,Xe=/&nbsp;/g,Ye=/&#x3000;/g,Ze=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],$e=document.getElementsByTagName("head")[0],af=0,bf=1;function cf(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function df(a,b){function c(){return b}
void 0===b&&(b=a);return{Ka:c,Hb:function(){return a},
Uc:c,He:function(){return a<b},
equals:function(d){return d&&a==d.Hb()&&b==d.Uc()}}}
function O(a,b,c,d){if(null==b||""===b){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function ef(a,b){var c=[],d;for(d in a)O(d,a[d],c,b);return c.join("&")}
function ff(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(0<=c&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function gf(a){return!!a&&!Ve.test(a)}
function hf(a){for(var b=Ze.length,c=0;c<b;c+=2)a=a.replace(Ze[c],Ze[c+1].source);return a}
function jf(a){for(var b=Ze.length,c=0;c<b;c+=2)a=a.replace(Ze[c+1],Ze[c].source);a=a.replace(Xe," ");return a.replace(Ye,"\u3000")}
function kf(a,b){return a&&(-1<a.indexOf(" ")||Se.test(a))?(a=a.replace(Te," "),a.replace(b?Ue:Re,"")):a}
function lf(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function mf(){}
function nf(a){var b=of;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function pf(){return 0}
function qf(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rf(a,b){var c=a+"";b.length&&(c+="i"+b.join("i"),c+="k"+(-1!=Qa(b,173)?14:1));return c}
;function sf(a,b,c){this.f=a;this.J=b;this.D=c||"";this.s=(af++).toString(36);this.C=this.f.toLowerCase();this.i=kf(this.C);this.H={};this.u={};this.m=this.G=this.l=!1;this.F=1}
sf.prototype.getId=function(){return this.s};
function tf(a){a=parseInt(a.s,36);return isNaN(a)?-1:a}
function uf(a,b,c,d){a.l||(a.H[b]=c,d&&(a.u[b]=c))}
;function vf(a,b,c,d,e,f){this.i=a;this.f=b;this.g=c;this.m=d;this.l=e;this.s=f;this.o=!0;this.f?this.f.length&&33==this.f[0].V()&&(this.l=this.o=!1):this.f=[];this.g||(this.g=Pe)}
vf.prototype.V=function(){return this.o};function wf(){}
wf.prototype.search=function(){};
wf.prototype.redirect=function(){};
wf.prototype.kc=function(){return""};
wf.prototype.Qb=function(){};function xf(){this.i={};this.f={}}
xf.prototype.set=function(a,b){this.i[a]=b};
xf.prototype.has=function(a){return!!this.i[a]};
function P(a,b,c){b in a.f||(a.f[b]=[]);a.f[b].push(c)}
;function yf(a,b,c,d,e,f){this.u=a;this.C=b;this.D=c;this.m=d;this.g=e;this.o=f;this.s={};this.l={};this.f=[];this.i=!1;a=this.C;d=a.i;for(var g in d)if(b=g,c=d[b])this.s[b]=c,this.f.push(c);a=a.f;for(g in a){b=g;d=c=a[b];e=this.l[b]||[];for(f=0;f<d.length;++f)if(c=d[f])e.push(c),this.f.push(c);this.l[b]=e}this.f.sort(zf);for(g=0;a=this.f[g++];)a.aa(this.D,this.m);this.u.Qb(this.m);this.m.Ac();for(g=0;a=this.f[g++];)a.K(this);for(g=0;a=this.f[g++];)a.setup(this.o);for(g=0;a=this.f[g++];)a.na(this.o);
for(g=0;a=this.f[g++];)a.L(this.o);this.i=!0}
var of=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];yf.prototype.deactivate=function(){if(this.i){for(var a=0,b;b=this.f[a++];)b.deactivate();this.i=!1}};
yf.prototype.isActive=function(){return this.i};
yf.prototype.get=function(a){return this.s[a]};
function Q(a,b){return a.l[b]||[]}
function zf(a,b){var c=nf(a.V()),d=nf(b.V());return 0>c?1:0>d?-1:c-d}
;function R(a){this.i=a}
m=R.prototype;m.aa=function(){};
m.K=function(){};
m.setup=function(){};
m.na=function(){};
m.L=function(){};
m.V=function(){return this.i};
m.deactivate=function(){};function Af(){}
Af.prototype.f=null;Af.prototype.getOptions=function(){var a;(a=this.f)||(a={},Bf(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Cf;function Df(){}
F(Df,Af);function Ef(){var a=Bf(Cf);return a?new ActiveXObject(a):new XMLHttpRequest}
function Bf(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Cf=new Df;function Ff(){this.i=149;this.f={};this.g=0}
v(Ff,R);m=Ff.prototype;m.K=function(a){this.C=a.get(127)};
m.L=function(a){if(a.connectionType==this.wa()){this.l=a;var b=this.C.g,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.Fa;this.u=b.Qa;this.m=b.tc}};
m.deactivate=function(){Gf(this);this.g=0};
m.oc=function(a,b,c){Hf(this,a.getId(),a.f,b,c);return!0};
m.wa=function(){return 1};
m.hb=function(){return this.g};
m.ab=function(a){var b=this.f[a];b&&(If(b),delete this.f[a])};
function Hf(a,b,c,d,e){a.l.Ab||Gf(a);var f=Ef();f&&(c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t",f.open("GET",c,!0),f.withCredentials=!0,a.l.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.l.visitorData),f.onreadystatechange=function(){if(4==f.readyState){switch(f.status){case 403:a.g=1E3;break;case 302:case 500:case 502:case 503:++a.g;break;case 200:var g=f.responseText;0==g.lastIndexOf(")]}'\n",0)&&(g=g.substring(5));e(JSON.parse(g));default:a.g=
0}a.ab(b)}},a.f[b]=f,f.send(null))}
function Gf(a){for(var b in a.f)If(a.f[b]);a.f={}}
function If(a){a.onreadystatechange=mf;var b=a.readyState;0!=b&&4!=b&&a.abort()}
;var Jf;function Kf(){this.i=153}
v(Kf,R);function Lf(a,b){a.length&&b.push({V:function(){return 507},
position:2})}
;function Mf(a){this.o=a}
Mf.prototype.V=function(){return this.o};
Mf.prototype.isSelectable=function(){return!0};function Nf(a){this.i=152;this.m=a}
F(Nf,R);Nf.prototype.Ra=mf;var Of=$b(),Pf=Of&&0<=vb(cc(),10),Qf=pc();Qf&&cc();var Rf=Zb(),Sf=tb()&&!J("Edge"),Tf=ac(),Uf=bc(),Vf=Qc()&&ac(),Wf=J("Android"),Xf=J("Macintosh"),Yf=Qc();var Zf=void 0!=document.documentElement.style.opacity,$f={rtl:"right",ltr:"left"};function ag(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function bg(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Va:b,ia:c}}
function cg(a){try{return dg(a).activeElement==a}catch(b){}return!1}
function S(a,b){var c=document.createElement(a);b&&(c.className=b);return c}
function T(a){return S("div",a)}
function eg(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=$f[b])}
function fg(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function gg(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return fg(a)}
function hg(a){var b=S("a");mc(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function ig(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{yc:c,Kb:b}}
function dg(a){return a?a.ownerDocument||a.document:window.document}
function jg(a){return a?(a=dg(a),a.defaultView||a.parentWindow):window}
function kg(){return Zf?"opacity":"filter"}
function lg(a){return Zf?a+"":"alpha(opacity="+Math.floor(100*a)+")"}
;function mg(){this.o=507;ng(this)}
v(mg,Mf);mg.prototype.f=function(){return this.g};
function og(a,b,c,d){ng(a,c,d);b=Le(b);lc(a.i,b)}
function ng(a,b,c){a.g=T("sbfl_a");a.i=T("sbfl_b");a.i.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.g.appendChild(a.i)}
;var pg=[30,35,33,41],qg=[39,10,21];function rg(a,b){Nf.call(this,507);this.f=a;this.g=b}
v(rg,Nf);rg.prototype.K=function(a){this.l=a.get(128)};
rg.prototype.aa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
rg.prototype.Ga=function(){return new mg};
function sg(a){return a.map(function(b){return{label:b.f}})}
rg.prototype.Sa=function(a,b){var c=Ra(this.l.g,function(d){a:if(0<=pg.indexOf(d.V()))d=!1;else{d=d.g||[];for(var e=u(qg),f=e.next();!f.done;f=e.next())if(0<=d.indexOf(f.value)){d=!1;break a}d=!0}return d},this);
0<c.length?(og(b,this.f,sg(c),this.g),b.f().style.display=""):b.f().style.display="none"};function tg(a,b,c,d,e,f,g,h){this.o=35;this.O=b;this.N=c;this.G=d;this.C=e;this.H=g;this.R=h;this.u=!0;this.s=!1;this.g=T("sbpqs_d");this.m=T();this.J=S("span","sbpqs_a");this.H&&(this.l=S("a"),mc(this.l,"#ps"),this.l.className="sbsb_i",this.D=T("fr sbpqs_b"),this.m.appendChild(this.D),this.D.appendChild(this.l),this.i=T("sbpqs_c"),a=Le(this.R),lc(this.i,a),this.i.setAttribute("role","alert"));this.m.appendChild(this.J);this.g.appendChild(this.m);this.i&&this.g.appendChild(this.i)}
v(tg,Mf);tg.prototype.f=function(){return this.g};
tg.prototype.isSelectable=function(){return this.u};
tg.prototype.M=function(a){this.s=!0;var b=C(this.W,this),c=this.O.g,d=this.T;c.g[d]=b;b=[];"1"===ff(window.location.search).ssl_dbg&&O("ssl_dbg","1",b);O("delq",d,b);O("client",c.o,b);O("callback","google.sbox.d"+c.m,b);d=c.s;O("tok",c.u,b);c.l&&O("authuser",c.l,b);c.f=S("script");c.f.src=d+b.join("&");ug.appendChild(c.f);return gg(a)};
tg.prototype.W=function(){if(this.s){var a=this.N;if(a.g){a=a.f;for(var b in a.g)for(var c=a.g[b].f,d=0,e;e=c[d++];)if(35==e.V()){delete a.g[b];break}for(b=0;b<a.f.length;++b)a.f[b].reset()}this.g.onmouseover=this.g.onmouseout=this.g.onclick=null;this.m.style.display="none";this.i.style.display="";this.C.l==this.F&&vg(this.G);this.C.f==this.F&&(wg(this.C),this.G.g.focus());this.u=!1}};function xg(){Nf.call(this,35)}
v(xg,Nf);m=xg.prototype;m.aa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
m.K=function(a){this.g=a.get(123);this.l=a.get(118);this.o=a.get(189);this.u=a.get(127);this.D=a.get(128)};
m.setup=function(a){this.L(a)};
m.L=function(a){this.C=a.sc;this.f=a.ec;this.s=a.dc};
m.Ga=function(a){return new tg(this.u,this.o,this.g,this.l,this.D,a,this.C,this.s)};
m.Sa=function(a,b){var c=a.getHtml(),d=a.f,e=a.i,f=this.f;b.s=!1;b.u=!0;b.T=d;b.F=e;b.m.style.display="";c=Le(c);lc(b.J,c);b.H&&(b.i.style.display="none",f=Le(f),lc(b.l,f),b.l.onclick=C(b.M,b))};
m.Ra=function(a,b,c){c.search(b.f,1)};function yg(){this.i=134;this.g={}}
v(yg,R);m=yg.prototype;m.K=function(a){this.m=a.g.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=C(this.Td,this)};
m.L=function(a){this.s="//"+(a.fc||"clients1."+a.Fa)+"/complete/deleteitems?";this.u=a.vb;this.l=a.authuser;this.o=a.clientName};
m.deactivate=function(){zg(this)};
function zg(a){a.f&&(ug.removeChild(a.f),a.f=null)}
m.Td=function(a){zg(this);a=a[0];var b=this.g[a];b&&(delete this.g[a],b())};
var ug=$e;function Ag(){this.i=189}
v(Ag,R);Ag.prototype.K=function(a){this.g=a.get(134);this.l=a.get(123);this.s=a.get(118);this.C=a.get(553)};
Ag.prototype.setup=function(a){this.f=a.Qc};
Ag.prototype.L=function(a){this.m=a.vb;this.u=!(!this.g||!this.m);this.f&&(a=this.s.f?3E3:0,window.setTimeout(C(this.o,this),a),this.f=!1)};
Ag.prototype.o=function(){var a=Bg(this.C,"",void 0,void 0,!0);Cg(this.l,a);a=this.l;a.m=a.l};function Dg(){this.i=156}
v(Dg,R);Dg.prototype.K=function(a){this.l=a.get(189)};
Dg.prototype.g=function(a){var b=this.l,c={};b.u&&(c.tok=b.m);"1"===ff(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)uf(a,d,c[d]);return 1};
Dg.prototype.f=function(){return 12};function Eg(){this.i=157}
v(Eg,R);function Fg(){this.i=156}
v(Fg,R);Fg.prototype.g=function(a){var b=ff(nc(window.location.href));b.v&&uf(a,"video_id",b.v,!0);return 1};
Fg.prototype.f=function(){return 24};function Gg(a,b,c){this.i=598;this.D=b;this.u=c;this.o="";this.g=a;this.s=!1}
v(Gg,R);Gg.prototype.K=function(a){this.H=a.get(553);this.f=a.get(128);this.G=a.get(118);this.F=a.get(150)};
Gg.prototype.setup=function(a){this.m=a.rb;this.C=a.Oc};
function Hg(a,b){a.o=b;a.H.sb(a.o)}
function Ig(a){if(!a.D||a.f.isVisible())return!1;var b=a.G.f;if(!b||0==b.length)return!1;if(b!=a.m)return"always"==a.u&&a.f&&a.f.g&&0<a.f.g.length&&a.f.show(),!1;if(a.g&&a.g.getRefinementsTuple){var c=a.g.getRefinementsTuple();if(c){var d=c[0];"ClearBySearchbox"==d?a.l=[]:"FromSearchResponse"==d&&a.s&&(a.l=c[1],a.s=!1)}}if(!a.l||0>=a.l.length)return a.f&&a.f.g&&0<a.f.g.length?(a.f.show(),!1):"always"==a.u||"fallback"==a.u;c=[];for(var e=d=0;e<a.l.length&&!(c.length>=a.C);++e){var f=a.l[e];f&&0<f.length&&
c.push(new Qe(a.F.bold(b,f),f,d++,0,[71],null))}0<c.length&&Jg(a.f,c,!1);return!1}
;function Kg(){this.i=156}
v(Kg,R);Kg.prototype.K=function(a){this.l=a.get(598)};
Kg.prototype.g=function(a){var b=this.l,c;a:{if(b.g&&b.g.getPreviousQuery&&(c=b.g.getPreviousQuery()))break a;c=null}var d;d=(d=ff(nc(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.s=!0,b.m=c,Hg(b,c)):d||""==b.o?d&&""==b.o&&Hg(b,b.m):Hg(b,"");return"mousedown"!=a.D&&"focus"!=a.D||!Ig(this.l)?1:2};
Kg.prototype.f=function(){return 46};function Lg(){this.i=149;this.g=$e;this.f={}}
v(Lg,R);m=Lg.prototype;m.K=function(a){this.G=a.get(127);this.u=a.g.getId()};
m.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
m.L=function(a){this.m=a;a.connectionType==this.wa()&&(a=this.G.g,this.s=a.protocol,this.o=a.host,this.F=a.Qa,this.C=a.tc,this.D="https:"==document.location.protocol,Mg(this,C(this.Sd,this)),(new Image).src=this.s+this.o+"/generate_204")};
m.deactivate=function(){Mg(this,null);Ng(this)};
m.oc=function(a,b,c,d){c=a.getId();var e=a.f;this.m.Ab||Ng(this);b=this.s+this.o+this.F+"?"+(this.C?this.C+"&":"")+(b?b+"&":"");a=[];O("q",e,a,!0);this.m.xc||O("callback","google.sbox.p"+this.u,a);if(this.D){e="";for(var f=4+Math.floor(32*Math.random()),g=0,h;g<f;++g)h=.3>Math.random()?48+Math.floor(10*Math.random()):(.5<Math.random()?65:97)+Math.floor(26*Math.random()),e+=String.fromCharCode(h);O("gs_gbg",e,a)}e=S("script");e.src=b+a.join("&");e.charset="utf-8";this.f[c]=e;this.l=d;this.g.appendChild(e);
return!0};
m.wa=function(){return 0};
m.hb=function(){return 0};
m.ab=function(a){var b=this.f[a];b&&(this.g.removeChild(b),delete this.f[a])};
function Ng(a){for(var b in a.f)a.g.removeChild(a.f[b]);a.f={};a.l=null}
m.Sd=function(a){this.l&&this.l(a)};
function Mg(a,b){b||(b=mf);var c=window.google;a.m.xc?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Og(){this.i=115;this.m={}}
v(Og,R);m=Og.prototype;m.K=function(a){this.l=a.get(116);if(a=Q(a,154))for(var b=0,c;c=a[b++];)this.m[Pg]=c};
m.L=function(){this.f=!1};
m.deactivate=function(){this.hide()};
m.isVisible=function(){return this.f};
m.getHeight=function(){return this.f?this.l.getHeight():0};
m.show=function(){this.f||(this.l.show(Qg(this)),this.f=!0)};
m.hide=function(){this.f&&(this.l.hide(),this.f=!1)};
function Qg(a){var b=qf(Rg);if(a.g){a=a.g.g;b.oa=a.D;b.marginWidth=a.J;var c=a.C.Zd;c||(c="rtl"==a.D?"right":"left");b.horizontalAlignment=c}return b}
var Rg={horizontalAlignment:"left",Ed:!0,oa:null,marginWidth:0};function Sg(){this.i=118}
v(Sg,R);m=Sg.prototype;m.K=function(a){this.g=a.get(119);this.D=a.get(130);this.T=a.get(145);this.s=a.get(117);this.N=a.get(123);this.F=a.get(374);this.M=a.get(121);this.W=a.get(553);this.l=a.get(128);this.O=a.get(139);this.Z=a.get(173);this.ba=Q(a,160)};
m.setup=function(a){this.o=a;this.f=this.m=this.g.f.value||""};
m.L=function(a){this.o=a;this.C=this.H=!1;Tg(this)};
function Ug(a){var b={};U(a.s,11,b);!b.cancel&&a.o.pd&&Vg(a.s,function(){a.l.dismiss()})}
function Wg(a,b){if(0==a.o.Ua||2==a.o.Ua||3==a.o.Ua&&!a.m&&!b)return!1;a:{if(Xg(a.l)){if(null!=a.l.l)var c=Yg(a.l);else c=a.l,c=Xg(c)?c.g[0]:null;if(c.l)break a}c=null}var d;if(d=c){if(d=c=c.f)d=a.m,d=!(d||c?d&&c&&d.toLowerCase()==c.toLowerCase():1);d?(a.m=a.f,lf(c,a.f,!0)&&(c=a.f+c.substr(a.f.length)),Zg(a,c,df(c.length),"",!0),$g(a,c,!0),d=!0):d=!1}return d?(a.F.add(8),!0):!1}
function Zg(a,b,c,d,e){a.o.Gc&&!a.l.isVisible()&&"mousedown"==d&&ah(a.l,c,d);var f=!1,g=!1;if(b!=a.f||"onremovechip"==d)lf(d,"key")?a.F.add(1):"paste"==d&&a.F.add(2),f=!0,bh(a,b),U(a.s,1,{Aa:d,oa:a.u}),g=D(),a.G||(a.G=g),a.J=g,gf(b)&&(e=!0),g=!0;b=Bg(a.W,b,c,d);switch(b.F){case 3:b.m=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.l,f.m&&!f.s&&(f.s=window.setTimeout(C(f.clear,f),f.C.qd))),a.H&&uf(b,"gs_is",1),Cg(a.N,b)):g&&(a.l.clear(),f=a.N,f.m=f.l);U(a.s,2,{Aa:d})}
function ch(a,b){bh(a,b);a.g.refresh();U(a.s,4,{oa:a.u,input:b})}
function vg(a){a.f!=a.m&&bh(a,a.m);U(a.s,5,{input:a.m,suggestions:a.l.g,oa:a.u});a.g.refresh()}
m.getHeight=function(){return this.g.getHeight()};
function dh(a){if(a.Z){if(a.o.lb)return!0;for(var b=0,c;c=a.ba[b++];)if(c.isEnabled())return!0}return!1}
m.search=function(a){this.M.search(this.f,a)};
m.clear=function(){this.f&&(bh(this,""),this.g.clear(),U(this.s,1),U(this.s,16),this.l.clear())};
function eh(a,b){var c=a.g.s.Ka();a.u==b?Xg(a.l)&&c==a.f.length&&(null!=a.l.l?a.o.Ia&&a.M.search(Yg(a.l).f,6):a.o.Pb&&Wg(a,!0)):a.D&&0==c&&a.D.f()}
function $g(a,b,c){a.f=b||"";Tg(a);a.g.refresh();c||U(a.s,4,{oa:a.u,input:a.f})}
function Tg(a){var b=fh(a.T,a.f);if(b!=a.u){var c=a.g;c.D&&(c.D.dir=b);c.f.dir=b;c.u&&(c.u.dir=b);if(c.ja){c=c.f;var d=0,e=c.style;"INPUT"!=c.nodeName&&(d+=1);e.left=e.right="";e["rtl"==b?"right":"left"]=d+"px"}a.u=b}}
function bh(a,b){a.f=a.m=b||"";Tg(a)}
;function gh(){this.i=128}
v(gh,R);m=gh.prototype;m.K=function(a){this.o=a.get(129);this.N=a.get(145);this.H=a.get(115);this.O=a.get(123);this.u=a.get(118);this.R=a.get(147);this.M=Q(a,153);this.W=a.get(553);this.G=a.get(184);this.Z=a.get(157)};
m.setup=function(){this.M.sort(pf)};
m.L=function(a){this.C=a;this.l=this.f=null;this.m=this.F=!1;this.T=!0;this.D="";this.J=0};
m.deactivate=function(){this.s&&(window.clearTimeout(this.s),this.s=null);this.g=null;this.hide()};
function Jg(a,b,c){var d=a.G&&a.G.g(b);a.clear();a.g=b;var e=Xg(a)?b[0].f:a.u.m;a:{var f=e;if(a.N.f){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!hh.test(l)&&(ih.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.m);a.D=fh(a.N,e);if(a.C.Md&&Xg(a)&&c&&!Yf){a.F=!0;c=a.o;if(c.m){c.F=a.D;jh(c);e=!1;for(f=0;g=b[f++];)kh(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.f.a||"";e=jf(e);b=a.R;f=0;e&&(b.f||lh(b),mh(b),e in b.l?f=b.l[e]:(f=b.f,g=hf(e),f.innerHTML!=g&&(f.innerHTML=g),b.l[e]=f=b.f.offsetWidth,
b=b.f,""!=b.innerHTML&&(b.innerHTML="")));a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.C.Vd&&!Xg(a))c=[];else{c=[];e=[];for(f=0;a.M[f++]&&!Lf(a.g,e););(f=e?e.length:0)&&(f-=nh(e,c,0));for(g=0;g<a.g.length;++g)c.push(a.g[g]);f&&(f-=nh(e,c,1));a.C.md&&c.push(1);f&&(f-=nh(e,c,2));f&&nh(e,c,3);a.C.Jb&&c.push(2);a.Z&&1<c.length&&5==c[0].V()&&c.splice(1,0,3)}if(b.m){b.F=a.D;jh(b);e=!1;for(f=0;g=c[f++];)if(1==g)g=b,g.s?g.s.style.display="":(h=S("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace=
"nowrap",h.dir=g.G,g.l=T(),g.l.className="sbsb_g",g.f.Jb&&(g.l.style.paddingBottom="1px"),oh(g,g.f.searchText,g.l,13),g.f.ld?oh(g,g.f.Cb,g.l,8):g.f.nd&&oh(g,g.f.Ud,g.l,14),h.appendChild(g.l),h.onmousedown=C(g.qb,g),h.className=g.f.Ta,g.s=h),g.g.appendChild(g.s);else if(2==g)if(g=b,g.o)g.o.style.display="";else{h=T("sbsb_j "+g.f.Ta);k=S("a");k.id="sbsb_f";mc(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.f.nb+"&answer=106230");var n=g.f.learnMoreText;if(n instanceof ec)l=n;else{if(n instanceof
ec)l=n;else{var p="object"==typeof n;l=null;p&&n.Mb&&(l=n.gb());n=p&&n.la?n.ha():String(n);sb.test(n)&&(-1!=n.indexOf("&")&&(n=n.replace(mb,"&amp;")),-1!=n.indexOf("<")&&(n=n.replace(nb,"&lt;")),-1!=n.indexOf(">")&&(n=n.replace(ob,"&gt;")),-1!=n.indexOf('"')&&(n=n.replace(pb,"&quot;")),-1!=n.indexOf("'")&&(n=n.replace(qb,"&#39;")),-1!=n.indexOf("\x00")&&(n=n.replace(rb,"&#0;")));l=hc(n,l)}n=gc(l).toString().replace(/(\r\n|\r|\n)/g,"<br>");l=hc(n,l.gb())}lc(k,l);h.appendChild(k);h.onmousedown=C(g.qb,
g);g.o=h;g.m.appendChild(g.o)}else 3==g?(g=b,h=g.R.pop(),h||(h=S("li"),h.setAttribute("aria-hidden","true"),h.i=!0,k=S("div","sbsb_e"),h.appendChild(k)),g.g.appendChild(h)):kh(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.l=a.G.i(),ph(a,a.G.f()));c?a.show():a.clear()}
function ph(a,b){if(a.f!=b){var c=a.f;a.f=b;qh(a,c)}}
m.ic=function(){if(Xg(this))if(this.m){var a=this.f;this.f==this.g.length-1?this.l=this.f=null:null==this.f?this.f=0:++this.f;this.l=this.f;rh(this,a,C(this.ic,this))}else this.show()};
m.jc=function(){if(Xg(this))if(this.m){var a=this.f;this.g&&0!=this.f?null==this.f?this.f=this.g.length-1:--this.f:this.l=this.f=null;this.l=this.f;rh(this,a,C(this.jc,this))}else this.show()};
m.isVisible=function(){return this.m};
m.isEnabled=function(){return this.T};
function Yg(a){return null!=a.l?a.g[a.l]:null}
function Xg(a){return!(!a.g||!a.g.length)}
m.show=function(){if(!this.m){a:{var a=this.H,b=Pg;if(b in a.m){if(a.g){if(b==Pg)break a;a.hide();a.g.g.m=!1}a.g=a.m[b];b=a.l;a=a.g;a!=b.u&&(b.u=a,a=a.f.m,b.G?a!=b.G&&b.o.replaceChild(a,b.G):b.o.appendChild(a),b.G=a)}}this.H.show();this.m=!0}};
m.hide=function(){this.m&&(this.s&&(window.clearTimeout(this.s),this.s=null),this.H.hide(),this.m=!1)};
m.clear=function(){this.hide();this.g=null;this.F=!1;null!=this.f&&sh(this.o,this.f);this.l=this.f=null;this.o.clear()};
m.dismiss=function(){var a=this.O;a.m=a.l;this.hide()};
function wg(a){null!=a.f&&sh(a.o,a.f);a.l=a.f=null}
function ah(a,b,c){if(Xg(a))a.show();else{var d=a.u.m;d&&(b=Bg(a.W,d,b||a.u.g.s,c),Cg(a.O,b))}}
function nh(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(3==c?f.Bd&&f.Bd(b)&&++d:(b.push(f),++d));return d}
function rh(a,b,c){null==a.f||a.o.isSelectable(a.f)?(qh(a,b),null==a.f?vg(a.u):$g(a.u,a.g[a.f].f)):(sh(a.o,b),c())}
function qh(a,b){null!=b&&sh(a.o,b);null!=a.f&&a.o.highlight(a.f)}
var Pg=bf++;function th(){this.i=154}
v(th,R);th.prototype.K=function(a){this.g=a.get(128);this.f=a.get(129)};function uh(){this.i=145;this.f=ih.test("x")}
v(uh,R);uh.prototype.aa=function(a){this.g=a.Ja()};
function fh(a,b){var c=a.g;a.f&&(ih.test(b)?c="ltr":hh.test(b)||(c="rtl"));return c}
var hh=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),ih=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function vh(){this.i=117;this.g=[];this.l={zc:1}}
v(vh,R);vh.prototype.deactivate=function(){this.f=null};
function V(a,b,c,d,e,f){var g=wh(a,b);g||(g={},a.g.push({element:b,gd:g}));var h=g[c];h||(h=g[c]=[],a=xh(a,c,b.zc?window:jg(b),h),"string"!==typeof c?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({Dd:!!f,ob:!1,priority:e||0,process:d});h.sort(yh);d.Mc=c}
function zh(a,b,c){if(a=wh(a,b))if(a=a[c.Mc]){b=0;for(var d;d=a[b++];)if(d.process==c){d.ob=!0;break}}}
function Ah(a,b,c){V(a,a.l,b,c,void 0,void 0)}
function U(a,b,c){c=c||{};(a=a.l[b])&&a(c,c.Aa)}
function Bh(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}
function Vg(a,b){if(Ch){if(!a.f){a.f=[];var c=C(a.m,a);Bh(window,"message",c)}a.f.push(b);c=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(c)?c:"*")}else window.setTimeout(b,0)}
vh.prototype.m=function(a){this.f&&a&&a.source==window&&"sbox.df"==a.data&&this.f.length&&(this.f.shift()(),this.f&&this.f.length&&window.postMessage("sbox.df",window.location.href))};
function xh(a,b,c,d){return C(function(e,f){if(d.length){var g;if(!(g=e)){g={};var h=c.event;h&&(h.keyCode&&(g.keyCode=h.keyCode),g.Cd=!0)}g.Aa=f||b;h=g;for(var k,l,n=0,p;p=d[n++];)p.ob?l=!0:k||(p.Dd?Dh(this,p,h):k=p.process(h));if(l)for(n=0;p=d[n];)p.ob?d.splice(n,1):++n;if(g.Na)return delete g.Na,g.Cd&&(g=c.event||g),gg(g),g.returnValue=!1}},a)}
function wh(a,b){for(var c=0,d;c<a.g.length;++c)if(d=a.g[c],d.element==b)return d.gd;return null}
function Dh(a,b,c){Vg(a,function(){b.process(c)})}
function yh(a,b){return b.priority-a.priority}
var Ch=window.postMessage&&!(Of||Tf||Rf);function Eh(){this.i=494;this.f={};this.m=this.s=0;this.g=-1;this.l=0;this.o={}}
v(Eh,R);Eh.prototype.L=function(){this.reset()};
Eh.prototype.reset=function(){this.f={};this.m=this.s=0;this.g=-1;this.l=0;this.o={}};function Fh(){this.i=374}
v(Fh,R);Fh.prototype.L=function(){this.reset()};
Fh.prototype.add=function(a){this.f||(this.f={});this.f[a]=!0};
Fh.prototype.reset=function(){this.f={}};function Gh(){this.i=120;this.F=-1}
v(Gh,R);Gh.prototype.K=function(a){this.H=a.get(191);this.f=a.get(123);this.m=a.get(118);this.C=a.get(374);this.g=a.get(494);this.D=a.get(126);this.o=a.get(128);this.G=Q(a,311)};
Gh.prototype.setup=function(a){this.u=a.Id};
Gh.prototype.L=function(a){this.l=a;this.reset()};
function Hh(a,b,c,d){var e=a.m.m;c&&(e=e.replace(Ih,"#"));c=[];c[27]=64;c[0]=Jh(a.l.clientName);c[28]=Jh(a.l.requestIdentifier);c[1]=void 0==b?"":b+"";b=a.C;var f=[];for(g in b.f)f.push(parseInt(g,10));c[26]=f.join("j");var g="";null!=a.o.l?g=a.o.l+"":(b=a.D.g,(10<=b.u||3<=b.C.hb())&&(g="o"));c[2]=g;g="";if(b=a.o.g){for(var h=f=0,k;k=b[h++];){k=rf(k.V(),k.g||[]);if(k!=l){1<f&&(g+="l"+f);g+=(l?"j":"")+k;f=0;var l=k}++f}1<f&&(g+="l"+f)}c[3]=g;l="";g=a.o.g;b=a.g.o;if(g)for(f=0;h=g[f++];){var n=rf(h.V(),
h.g||[]);n in b&&delete b[n]}if(b)for(n in b)l+=(l?"j":"")+n;c[35]=l;n=a.g.g;c[33]=-1<n?String(n):"";c[4]=Math.max(a.m.G-a.s,0);c[5]=Math.max(a.m.J-a.s,0);c[6]=a.F;c[7]=D()-a.s;c[18]=Math.max(a.m.R-a.s,0);c[8]=a.f.ba;l=a.f;l=(n=l.g)?l.f.l:0;c[25]=n?"1"+(a.l.Ic?"a":"")+(a.l.yb?"c":""):"";c[10]=l;n=a.f;c[11]=n.g?n.f.m:0;c[12]=a.f.W;g=a.f;n=g.R;l=g.O;g=g.T;c[9]=n;c[22]=l;c[17]=g;c[13]=a.f.Z;c[14]=a.f.H;c[15]=a.f.M;n=a.f;l=[];for(b=f=0;b<=Kh;++b)g=n.J[b],0==g?f++:(f=1==f?"0j":1<f?b+"-":"",l.push(f+g),
f=0);c[16]=l.join("j");c[36]=a.f.N;n=0;for(var p in a.g.f)n++;c[30]=n;c[31]=a.g.s;c[32]=a.g.m;c[19]=Jh(a.l.tb);p=a.g;l=a.D.f;n=!1;l&&(n=l.g.f.e||"");l=0;n?(l|=1,1<p.l&&(l|=2)):0<p.l&&(l|=2);p=l;c[20]=0==p?"":p+"";for(p=0;n=a.G[p++];)l=n.i,Lh[l]&&(c[l]=void 0==c[l]?Jh(n.f()):"");c=c.join(".").replace(Mh,"");if(a.H&&a.u){p=e+c;b:{n=a.u;l=[];if(n)for(f=b=g=0;f<n.length;++f){h=n.charCodeAt(f);if(32>h||127<h||!Nh[h-32]){n=[];break b}g<<=6;g|=Nh[h-32]-1;b+=6;8<=b&&(l.push(g>>b-8&255),b-=8)}n=l}g=n;n={};
n.X=Array(4);n.buffer=Array(4);n.de=Array(4);n.padding=Array(64);n.padding[0]=128;for(l=1;64>l;++l)n.padding[l]=0;Oh(n);l=Array(64);64<g.length&&(Oh(n),Ph(n,g),g=Qh(n));for(b=0;b<g.length;++b)l[b]=g[b]^92;for(b=g.length;64>b;++b)l[b]=92;Oh(n);for(b=0;64>b;++b)n.buffer[b]=l[b]^106;Rh(n,n.buffer);n.total=64;Ph(n,Sh(p));p=Qh(n);Oh(n);Rh(n,l);n.total=64;Ph(n,p);p=Qh(n);p=p.slice(0,8);"string"===typeof p&&(p=Sh(p));n="";if(p){l=p.length;for(f=b=g=0;l--;)for(b<<=8,b|=p[f++],g+=8;6<=g;)n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>
g-6&63),g-=6;g&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>g+8-6&63))}p=n}else p="";e={oq:e,gs_l:c+"."+p};d&&(e.ei=d);a.l.Fd&&(e.q=a.m.f);return e}
Gh.prototype.reset=function(){this.s=D();++this.F;var a=this.m;a.G=0;a.J=0;a.R=0;this.C.reset();a=this.f;if(a.g){var b=a.f;b.l=0;b.m=0}a.ba=0;a.u=0;a.W=0;a.R=0;a.O=0;a.T=0;a.Z=0;a.H=0;a.M=0;a.N=0;a.J=[];for(b=0;b<=Kh;++b)a.J[b]=0;for(a=0;b=this.G[a++];)b.reset();this.g.reset()};
function Jh(a){return a?a.replace(Th,"-"):""}
var Mh=/\.+$/,Th=/\./g,Ih=/./g,Lh=cf([23]);function Uh(){this.i=121}
v(Uh,R);m=Uh.prototype;m.aa=function(a){this.m=a.Fb()};
m.K=function(a){this.g=a.get(347);this.u=a.get(130);this.G=a.get(117);this.D=a.get(123);this.o=a.get(118);this.H=a.get(120);this.J=a.get(128);this.F=a.get(139);this.C=a.u;this.s=Q(a,294)};
m.L=function(a){this.l=a};
m.search=function(a,b){if(this.s){for(var c=!1,d=0,e;e=this.s[d++];)2==e.f(a,b)&&(c=!0);if(c)return}if(gf(a)||this.l.ma||this.u&&this.u.ma()){if(Me.test(b)){if(this.m&&!this.f){c=this.m;b:{if(d=c.getElementsByTagName("input")){e=0;for(var f;f=d[e++];)if("btnI"==f.name&&"submit"!=f.type.toLowerCase()){d=f;break b}}d=null}d?c=null:(d=S("input"),d.type="hidden",d.name="btnI",d.value="1",c.appendChild(d),c=d);this.f=c}}else this.f&&(this.m.removeChild(this.f),this.f=null);this.g&&this.l.cb&&Vh(this.g,
b);this.C.search(a,b);Wh(this);U(this.G,12,{query:a})}};
m.redirect=function(a){this.g&&this.l.cb&&Vh(this.g,void 0);this.C.redirect(a);Wh(this)};
function Wh(a){var b=a.D;b.m=b.l;a.D.s=null;a.H.reset();a.J.clear();a.o.m!=a.o.f&&(b=a.o,b.m=b.f);a.F&&a.F.clear()}
;function Xh(){this.i=553}
v(Xh,R);Xh.prototype.K=function(a){this.g=Q(a,156);a.get(126)};
Xh.prototype.setup=function(){this.g.sort(Yh)};
Xh.prototype.L=function(a){this.f=a;this.l=a.rb};
Xh.prototype.sb=function(a){this.l=a};
function Bg(a,b,c,d,e){b=new sf(b,c||df(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.g(b),f>c&&(c=f)}b.F=c;null!=a.f.Za&&uf(b,"ds",a.f.Za,!0);null!=a.f.qc&&uf(b,"swl",a.f.qc,!0);uf(b,"pq",a.l,!0);e&&!b.l&&(b.G=!0);b.l||(b.o=D(),"cp"in b.u||(a=b.J.Ka(),uf(b,"cp",a,!0)),uf(b,"gs_id",b.s),b.g=ef(b.u)+":"+b.C,b.l=!0);return b}
function Yh(a,b){return a.f()-b.f()}
;function Zh(){this.i=123;this.D=!1;this.l=-1}
v(Zh,R);m=Zh.prototype;m.K=function(a){this.f=a.get(133);this.ra=a.get(130);this.Ca=a.get(118);this.Tc=a.get(120);this.ta=a.get(494);this.Pc=a.get(124);this.ja=a.get(125);this.qa=a.get(230);this.Vc=a.get(127)};
m.L=function(a){this.C=this.Vc.f;this.sa=a;this.D=!0;this.o={};this.G=0;this.Ya=a.Rc;this.bb=a.Lb;this.m=-1;this.g=this.sa.Jc&&!!this.f};
m.deactivate=function(){this.D=!1;$h(this);this.o=this.s=null;this.m=this.l};
function Cg(a,b){if(!(!a.D||a.bb||a.ra&&a.ra.i())){var c=!0,d=tf(b);d>a.l&&(a.l=d);++a.ba;a.ta.f[b.getId()]=!0;gf(a.Ca.f)||gf(b.f)||(d=a.ta,d.g=Math.max(d.g,0));d=D();for(var e in a.o)2500<d-a.o[e].o&&ai(a,e);a.g&&(e=a.f.get(b))&&((c=a.Ya||b.G)&&a.sa.sd&&(b.m=!0),a.ja.process(e),e.m&&++a.W,a.s=null);c&&(a.s=b,a.F||a.Yb())}}
function bi(a,b){return C(function(c){this.nc(c,b)},a)}
m.Yb=function(){$h(this);if(!(2<this.C.hb())){var a=this.s;this.s=null;if(a){var b=[],c=a.H;if(c)for(var d in c)O(d,c[d],b);b=this.C.oc(a,b.join("&"),bi(this,a),C(this.nc,this));a.m||(++this.R,b?(this.o[a.getId()]=a,++this.u):++this.O);a=100;b=(this.u-2)/2;for(c=1;c++<=b;)a*=2;a<this.G&&(a=this.G);this.F=window.setTimeout(C(this.Yb,this),a)}}};
function $h(a){null!=a.F&&(window.clearTimeout(a.F),a.F=null)}
function ai(a,b){a.C.ab(b);delete a.o[b];a.u&&--a.u}
m.nc=function(a,b){if(this.D){if(!b&&(b=this.o[(a[2]||{}).j],!b))return;if(!b.m){var c=this.Pc;var d=b,e=a[0],f=a[1],g={},h=a[2];if(h)for(var k in h){var l=h[k];k in c.f&&(l=c.f[k].parse(l));g[k]=l}var n=l=!1;h=!1;k=0;for(var p;p=f[k++];)if(33==(p[1]||0)?n=!0:l=!0,n&&l){h=!0;break}l=0;n=[];for(k=0;p=f[k++];){var r=p[1]||0;if(!h||33!=r){var q=p[0];c.l&&(q=c.g.bold(e.toLowerCase(),jf(q).replace(We,"")));n.push(new Qe(q,jf(q).replace(We,""),l++,r,p[2]||[],ci(p)))}}c=new vf(d,n,new Oe(g),!1,!0,!1);this.qa&&
(c=this.qa.f(c,this.Ca.f));if(this.g)for(d=this.f,e=c,(e.f&&e.f[0]||""!=e.i.f)&&e&&e.l&&(d.g[e.i.g]=e),f=0;f<d.f.length;++f)d.f[f].update(e);tf(b)<=this.m?!b||b.f||c.m||(d=b,this.N=D()-d.o):(++this.T,this.ja.process(c)||++this.Z,d=b,this.G=c.g.f.d||0,d&&(ai(this,d.getId()),e=d.o,e=D()-e,d.f?(this.M+=e,this.H=Math.max(e,this.H),++this.J[e>di?Kh:ei[Math.floor(e/100)]]):this.N=e));c&&(c=c.g.f.q||"")&&(this.Tc.u=c)}}};
var ei=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Kh=ei[ei.length-1]+1,di=100*ei.length-1;function fi(){this.i=124;this.f={}}
v(fi,R);fi.prototype.K=function(a){this.g=a.get(150);if(a=Q(a,158))for(var b=0,c;c=a[b++];)this.f[c.Ee()]=c};
fi.prototype.L=function(a){this.l=a.kb};
function ci(a){return(a=a[3])?new Oe(a):Pe}
;function gi(){this.i=125}
v(gi,R);gi.prototype.K=function(a){this.m=a.get(117);this.s=a.get(118);this.o=a.get(494);this.f=Q(a,122);this.g=a.get(126);this.l=a.get(128);this.f.sort(hi)};
gi.prototype.process=function(a){var b=a,c=this.s.f.toLowerCase(),d=this.g.f;c=kf(c);var e=b.i;b=e?e.i:kf(b.i.f.toLowerCase());var f=(d=d?d.i:null)?d.i:"";e=1==(0==c.indexOf(b)?0==c.indexOf(f)?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1);c=-1!=e;if(e){if(this.f)for(e=0;b=this.f[e++];)a=b.edit(a);d=this.g.f=a;a=d.i.f;e=d.f;this.l.isEnabled()&&Jg(this.l,e,0==d.V());b=this.o;var g=d.i;f=g.getId();if(f in b.f){var h=d.f.length;0<h&&(gf(g.f)||(b.g=h),g=g.o,g=D()-g,b.m+=g,++b.s);d.g.f.e&&++b.l;
delete b.f[f]}d=d.f;for(f=0;g=d[f++];)b.o[rf(g.V(),g.g||[])]=!0;U(this.m,3,{input:a,suggestions:e})}return c};
function hi(a,b){return a.f()-b.f()}
;function ii(){this.i=126}
v(ii,R);ii.prototype.K=function(a){this.g=a.get(123)};
ii.prototype.L=function(){this.f=null};var ji=["expflags","plugin"];function ki(){this.i=127;this.l={}}
v(ki,R);ki.prototype.K=function(a){a=Q(a,149);for(var b=0,c;c=a[b++];)this.l[c.wa()]=c};
ki.prototype.L=function(a){var b="https:"==document.location.protocol,c=[];O("client",a.clientName,c);O("hl",a.nb,c);O("gl",a.uc,c);O("sugexp",a.tb,c);O("gs_rn",64,c);O("gs_ri",a.requestIdentifier,c);var d=ff(a.url||y.location.href);ji.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&O("authuser",a.authuser,c);this.g={protocol:"http"+(b?"s":"")+"://",host:a.fc||"clients1."+a.Fa,Qa:a.Qa||"/complete/search",tc:c.length?c.join("&"):""};this.f&&this.f.wa()==a.connectionType||(this.f=this.l[a.connectionType])};function li(){this.i=191}
F(li,R);
var Nh=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],mi=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],ni=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,
4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,
4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function Sh(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Oh(a){a.X[0]=1732584193;a.X[1]=4023233417;a.X[2]=2562383102;a.X[3]=271733878;a.Ba=a.total=0}
function Rh(a,b){for(var c=a.de,d=0;64>d;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.X[0];d=a.X[1];for(var f=a.X[2],g=a.X[3],h,k,l,n=0;64>n;++n)16>n?(h=g^d&(f^g),k=n):32>n?(h=f^g&(d^f),k=5*n+1&15):48>n?(h=d^f^g,k=3*n+5&15):(h=f^(d|~g),k=7*n&15),l=g,g=f,f=d,e=e+h+ni[n]+c[k]&4294967295,h=mi[n],d=d+((e<<h|e>>>32-h)&4294967295)&4294967295,e=l;a.X[0]=a.X[0]+e&4294967295;a.X[1]=a.X[1]+d&4294967295;a.X[2]=a.X[2]+f&4294967295;a.X[3]=a.X[3]+g&4294967295}
function Ph(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Ba++]=b[d],64==a.Ba&&(Rh(a,a.buffer),a.Ba=0)}
function Qh(a){var b=Array(16),c=8*a.total,d=a.Ba;Ph(a,a.padding,56>d?56-d:64-(d-56));for(var e=56;64>e;++e)a.buffer[e]=c&255,c>>>=8;Rh(a,a.buffer);for(e=d=0;4>e;++e)for(c=0;32>c;c+=8)b[d++]=a.X[e]>>c&255;return b}
;function oi(){this.i=150}
F(oi,R);
oi.prototype.bold=function(a,b){b=hf(b.replace(Ne,""));a=hf(kf(a,!0));if(lf(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)" "==h||"\t"==h?c.length&&(d.push({t:c,za:g,e:f+1}),c="",g=-1):(c+=h,-1==g?g=f:f==e&&d.push({t:c,za:g,e:f+1}));c=a.split(/\s+/);f={};for(e=0;g=c[e++];)f[g]=1;h=-1;c=[];var k=d.length-1;for(e=0;g=d[e];++e)f[g.t]?(g=-1==h,e==k?c.push({za:g?e:h,e:e}):g&&(h=e)):-1<h&&(c.push({za:h,e:e-1}),h=-1);if(!c.length)return"<b>"+b+
"</b>";e="";for(f=g=0;h=c[f];++f)(k=d[h.za].za)&&(e+="<b>"+b.substring(g,k-1)+"</b> "),g=d[h.e].e,e+=b.substring(k,g);g<b.length&&(e+="<b>"+b.substring(g)+"</b> ");return e};function pi(){this.i=146}
F(pi,R);function qi(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
qi("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");qi("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");qi("D1,D4,D7,DA,DD");qi("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");qi("D1__,D4__,D7__,DA__,DD");qi("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");qi("CF,D2,D5,D8,DB");function ri(){this.i=116;this.N=!0}
F(ri,R);m=ri.prototype;
m.aa=function(a,b){this.T=a.Ja();b.addRule(".sbdd_a",(Yf?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Yf?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");
b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
m.K=function(a){this.O=a.get(130);a.get(115);this.s=a.get(118);this.J=a.get(117);this.Z=a.g.getId()};
m.setup=function(a){this.f=a};
m.na=function(a){this.g=T();this.g.className="gstl_"+this.Z+" sbdd_a";si(this.g,!1);this.R=this.g;this.F=T("fl");this.g.appendChild(this.F);this.C=T();this.g.appendChild(this.C);this.o=T("sbdd_b");this.C.appendChild(this.o);this.ba=T();this.C.appendChild(this.ba);this.f.Ib&&(this.l=S("iframe","gstl_"+this.Z+" sbdd_c"),si(this.l,!1),(this.f.ea||document.body).appendChild(this.l));if(this.m=this.f.Hc)"number"===typeof this.m&&(this.m+=this.f.Ha[2],this.m-=ti(this)),ui(this,this.g,this.m);vi(this);(a.ea||
document.body).appendChild(this.g);Ah(this.J,8,C(this.lc,this))};
m.L=function(a){this.f=a;this.g.style.position=a.ua};
m.getHeight=function(){this.D||(this.D=this.o?Math.max(this.o.offsetHeight,0):0);return this.D};
m.show=function(a){wi(this,a.oa||this.T);var b=a.marginWidth;if(this.W!=b){var c=this.F.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.W=b}this.N=a.Ed;this.M=a.horizontalAlignment;xi(this.s.g,!0);si(this.R,!0);si(this.l,!0);U(this.J,14);this.lc()};
m.hide=function(){this.D=0;xi(this.s.g,!1);si(this.R,!1);si(this.l,!1);wi(this,this.T);U(this.J,9)};
m.lc=function(){this.D=0;vi(this);if(this.l){var a=this.f.wb[0],b=this.l.style;"relative"!=this.f.ua&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.F.offsetWidth+"px");a=this.getHeight()+a;this.l.style.height=Math.max(a,0)+"px";ui(this,this.l,this.o.offsetWidth)}this.u&&jh(this.u.f)};
function vi(a){var b,c;if(c=a.u)c=a.u.f,c=c.f.kd||c.G==c.F?c.W:null;var d=(b=c)?b.offsetWidth:yi(a.s.g);var e=a.m;c=ti(a);e?"string"===typeof e&&(e=null):a.W||!a.N?a.C.style.display="inline-block":(a.C.style.display="",e=d+a.f.Ha[2]-c,ui(a,a.g,e));if("relative"!=a.f.ua){var f="rtl"==cd()!=("rtl"==a.H),g=a.f.ea;var h={ia:0,Va:0};if(f||!g||g==document.body||a.f.Db)h=bg(a.s.g.F),b&&(h.ia=bg(b).ia);b=h;h=e;e=a.f.Ha;g=e[1];e=e[0];e=b.Va+a.s.getHeight()+e;if("right"==a.M){h="rtl"==cd()!=("rtl"==a.H);var k=
a.f.ea;g=-g;if(h||!k||k==document.body)g+=(jg(a.g)||window).document.documentElement.clientWidth-d-b.ia;d=g;h=e;b=void 0}else b=b.ia+g,"center"==a.M&&h&&(b+=(d-h)/2),h=e,d=void 0;e={ia:0,Va:0};"absolute"==a.f.ua&&a.f.ea&&a.f.ea!=document.body&&(f||a.f.Db)&&(e=bg(a.f.ea));g=a.g.style;g.top=h-e.Va+"px";g.left=g.right="";void 0!=b?g.left=b+c-e.ia+"px":(b=0,a.f.ea&&f&&(b=document.body.clientWidth-(e.ia+a.f.ea.offsetWidth)),g.right=d+c-b+"px")}}
function ui(a,b,c){"number"===typeof c?0<c&&(a.f.ce?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function si(a,b){a&&(a.style.display=b?"":"none")}
function wi(a,b){if(a.H!=b){a.H=b;var c=a.f.ea;c&&c!=document.body&&(c.style.textAlign="rtl"==b?"right":"left");eg(a.g,b)}}
function ti(a){return a.O&&a.O.g()&&(a=a.s.g.u.offsetWidth,"number"===typeof a)?a:0}
;function zi(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.i=!1}
zi.prototype.stopPropagation=function(){this.i=!0};
zi.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ai=!K||9<=Number(Gc),Bi=K&&!Dc("9"),Ci=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ea,b),y.removeEventListener("test",Ea,b)}catch(c){}return a}();function Di(a,b){zi.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
F(Di,zi);var Ei={2:"touch",3:"pen",4:"mouse"};
Di.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(vc){a:{try{qc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ei[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Di.prototype.stopPropagation=function(){Di.fa.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Di.prototype.preventDefault=function(){Di.fa.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Bi)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Fi="closure_listenable_"+(1E6*Math.random()|0),Gi=0;function Hi(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++Gi;this.pa=this.Da=!1}
function Ii(a){a.pa=!0;a.listener=null;a.f=null;a.src=null;a.La=null}
;function Ji(a){this.src=a;this.listeners={};this.f=0}
Ji.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Ki(a,b,d,e);-1<g?(b=a[g],c||(b.Da=!1)):(b=new Hi(b,this.src,f,!!d,e),b.Da=c,a.push(b));return b};
Ji.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ki(e,b,c,d);return-1<b?(Ii(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Li(a,b){var c=b.type;c in a.listeners&&Ua(a.listeners[c],b)&&(Ii(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Ki(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.pa&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}
;var Mi="closure_lm_"+(1E6*Math.random()|0),Ni={},Oi=0;function Pi(a,b,c,d,e){if(d&&d.once)Qi(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Pi(a,b[f],c,d,e);else c=Ri(c),a&&a[Fi]?a.f.add(String(b),c,!1,Ia(d)?!!d.capture:!!d,e):Si(a,b,c,!1,d,e)}
function Si(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Ti(a);h||(a[Mi]=h=new Ji(a));c=h.add(b,c,d,g,f);if(!c.f){d=Ui();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Ci||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Vi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oi++}}
function Ui(){var a=Wi,b=Ai?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Qi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qi(a,b[f],c,d,e);else c=Ri(c),a&&a[Fi]?a.f.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Si(a,b,c,!0,d,e)}
function Xi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xi(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=Ri(c),a&&a[Fi])?a.f.remove(String(b),c,d,e):a&&(a=Ti(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ki(b,c,d,e)),(c=-1<a?b[a]:null)&&Yi(c))}
function Yi(a){if("number"!==typeof a&&a&&!a.pa){var b=a.src;if(b&&b[Fi])Li(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Vi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oi--;(c=Ti(b))?(Li(c,a),0==c.f&&(c.src=null,b[Mi]=null)):Ii(a)}}}
function Vi(a){return a in Ni?Ni[a]:Ni[a]="on"+a}
function Zi(a,b,c,d){var e=!0;if(a=Ti(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.pa&&(f=$i(f,d),e=e&&!1!==f)}return e}
function $i(a,b){var c=a.listener,d=a.La||a.src;a.Da&&Yi(a);return c.call(d,b)}
function Wi(a,b){if(a.pa)return!0;if(!Ai){var c=b||A("window.event"),d=new Di(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.f=c[g];var h=Zi(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.f=c[g],h=Zi(c[g],f,!1,d),e=e&&h}return e}return $i(a,new Di(b,this))}
function Ti(a){a=a[Mi];return a instanceof Ji?a:null}
var aj="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ri(a){if(Ha(a))return a;a[aj]||(a[aj]=function(b){return a.handleEvent(b)});
return a[aj]}
;function bj(){bd.call(this);this.f=new Ji(this);this.C=this;this.o=null}
F(bj,bd);bj.prototype[Fi]=!0;bj.prototype.addEventListener=function(a,b,c,d){Pi(this,a,b,c,d)};
bj.prototype.removeEventListener=function(a,b,c,d){Xi(this,a,b,c,d)};
bj.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.C;d=a.type||a;if("string"===typeof a)a=new zi(a,b);else if(a instanceof zi)a.target=a.target||b;else{var e=a;a=new zi(d,b);gb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.f=c[f];e=cj(g,d,!0,a)&&e}a.i||(g=a.f=b,e=cj(g,d,!0,a)&&e,a.i||(e=cj(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.f=c[f],e=cj(g,d,!1,a)&&e;return e};
bj.prototype.ka=function(){bj.fa.ka.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ii(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function cj(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.pa&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Da&&Li(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function dj(a,b){this.g=a;this.l=b;this.i=0;this.f=null}
dj.prototype.get=function(){if(0<this.i){this.i--;var a=this.f;this.f=a.next;a.next=null}else a=this.g();return a};
function ej(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.f,a.f=b)}
;function fj(a){y.setTimeout(function(){throw a;},0)}
var gj;function hj(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Oc("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!$b()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.xb;c.xb=null;e()}};
return function(e){d.next={xb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function ij(){this.i=this.f=null}
var kj=new dj(function(){return new jj},function(a){a.reset()});
ij.prototype.add=function(a,b){var c=kj.get();c.set(a,b);this.i?this.i.next=c:this.f=c;this.i=c};
ij.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.i=null),a.next=null);return a};
function jj(){this.next=this.scope=this.f=null}
jj.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
jj.prototype.reset=function(){this.next=this.scope=this.f=null};function lj(a,b){mj||nj();oj||(mj(),oj=!0);pj.add(a,b)}
var mj;function nj(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);mj=function(){a.then(qj)}}else mj=function(){var b=qj;
!Ha(y.setImmediate)||y.Window&&y.Window.prototype&&!J("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(gj||(gj=hj()),gj(b)):y.setImmediate(b)}}
var oj=!1,pj=new ij;function qj(){for(var a;a=pj.remove();){try{a.f.call(a.scope)}catch(b){fj(b)}ej(kj,a)}oj=!1}
;function W(a){this.f=0;this.s=void 0;this.l=this.i=this.g=null;this.m=this.o=!1;if(a!=Ea)try{var b=this;a.call(void 0,function(c){rj(b,2,c)},function(c){rj(b,3,c)})}catch(c){rj(this,3,c)}}
function sj(){this.next=this.context=this.onRejected=this.i=this.f=null;this.g=!1}
sj.prototype.reset=function(){this.context=this.onRejected=this.i=this.f=null;this.g=!1};
var tj=new dj(function(){return new sj},function(a){a.reset()});
function uj(a,b,c){var d=tj.get();d.i=a;d.onRejected=b;d.context=c;return d}
function vj(a){if(a instanceof W)return a;var b=new W(Ea);rj(b,2,a);return b}
function wj(a){return new W(function(b,c){c(a)})}
W.prototype.then=function(a,b,c){return xj(this,Ha(a)?a:null,Ha(b)?b:null,c)};
W.prototype.$goog_Thenable=!0;function yj(a,b){return xj(a,null,b,void 0)}
W.prototype.cancel=function(a){if(0==this.f){var b=new zj(a);lj(function(){Aj(this,b)},this)}};
function Aj(a,b){if(0==a.f)if(a.g){var c=a.g;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Aj(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Bj(c),Cj(c,e,3,b)))}a.g=null}else rj(a,3,b)}
function Dj(a,b){a.i||2!=a.f&&3!=a.f||Ej(a);a.l?a.l.next=b:a.i=b;a.l=b}
function xj(a,b,c,d){var e=uj(null,null,null);e.f=new W(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof zj?g(h):f(k)}catch(l){g(l)}}:g});
e.f.g=a;Dj(a,e);return e.f}
W.prototype.C=function(a){this.f=0;rj(this,2,a)};
W.prototype.D=function(a){this.f=0;rj(this,3,a)};
function rj(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.C,f=a.D;if(d instanceof W){Dj(d,uj(e||Ea,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ia(d))try{var k=d.then;if(Ha(k)){Fj(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.f=b,a.g=null,Ej(a),3!=b||c instanceof zj||Gj(a,c))}}
function Fj(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ej(a){a.o||(a.o=!0,lj(a.u,a))}
function Bj(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
W.prototype.u=function(){for(var a;a=Bj(this);)Cj(this,a,this.f,this.s);this.o=!1};
function Cj(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.m;a=a.g)a.m=!1;if(b.f)b.f.g=null,Hj(b,c,d);else try{b.g?b.i.call(b.context):Hj(b,c,d)}catch(e){Ij.call(null,e)}ej(tj,b)}
function Hj(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Gj(a,b){a.m=!0;lj(function(){a.m&&Ij.call(null,b)})}
var Ij=fj;function zj(a){Oa.call(this,a)}
F(zj,Oa);zj.prototype.name="cancel";function Jj(a,b){bj.call(this);this.l=a||1;this.i=b||y;this.s=C(this.be,this);this.u=D()}
F(Jj,bj);m=Jj.prototype;m.enabled=!1;m.ca=null;m.setInterval=function(a){this.l=a;this.ca&&this.enabled?(this.stop(),this.start()):this.ca&&this.stop()};
m.be=function(){if(this.enabled){var a=D()-this.u;0<a&&a<.8*this.l?this.ca=this.i.setTimeout(this.s,this.l-a):(this.ca&&(this.i.clearTimeout(this.ca),this.ca=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.ca||(this.ca=this.i.setTimeout(this.s,this.l),this.u=D())};
m.stop=function(){this.enabled=!1;this.ca&&(this.i.clearTimeout(this.ca),this.ca=null)};
m.ka=function(){Jj.fa.ka.call(this);this.stop();delete this.i};function Kj(){this.i=119;this.O=!1;this.s=df(0);this.T=-1;this.W=!1}
F(Kj,R);m=Kj.prototype;
m.aa=function(a,b){this.H=a;this.f=a.ib();this.f.setAttribute("aria-haspopup",!1);this.f.setAttribute("role","combobox");this.f.setAttribute("aria-autocomplete","list");this.Ya=a.Ja();if(!a.Xa()){b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;"));var c=Xf&&Sf||Of?6:5;b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+c+"px 9px 0");b.addRule(".sbib_c[dir=ltr]","float:right");b.addRule(".sbib_c[dir=rtl]","float:left");b.addRule(".sbib_d",
b.prefix("box-sizing:border-box;")+"height:100%;unicode-bidi:embed;white-space:nowrap");b.addRule(".sbib_d[dir=ltr]","float:left");b.addRule(".sbib_d[dir=rtl]","float:right");Pf&&b.addRule(".sbib_a input::-ms-clear","display: none");b.addRule(".sbib_a,.sbib_c","vertical-align:top")}};
m.K=function(a){this.g=a.get(118);this.l=a.get(117);this.ta=a.get(128);this.J=a.get(173);this.ja=!!a.get(136);this.bb=a.g.getId()};
m.setup=function(a){this.C=a;this.M=a.xa;this.N=a.Ad;this.Ca=a.zb;this.m=cg(this.f);this.Wa();var b=this;Of&&V(this.l,this.f,"beforedeactivate",function(c){b.W&&(b.W=!1,c.Na=!0)},10);
a=(oc()||J("iPad")||J("iPod"))&&Uf;Qf&&Lj(this);(Vf||a)&&Mj(this);this.F=this.f};
m.na=function(a){var b=!!a.Lc[130];if(this.ja||dh(this.g)||b||a.Sc)(this.o=this.H.get("gs_id"))?(b&&(this.u=this.H.get("sb_chc")),this.D=this.H.get("sb_ifc")):(this.o=T("gstl_"+this.bb+" sbib_a"),a=this.o.style,this.N&&(a.width=this.N+"px"),this.M&&(a.height=this.M+"px"),a=this.f.style,a.border="none",a.padding=Rf||Of?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.f.className=this.C.mb,b&&(this.u=T("sbib_d"),this.u.id=this.H.getId("sb_chc"),this.o.appendChild(this.u)),dh(this.g)&&this.J&&
(this.J.f.className+=" sbib_c",b=this.J,a=this.Ya,b.s!=a&&(b.f.dir=b.s=a),this.o.appendChild(this.J.f)),this.D=T("sbib_b"),this.D.id=this.H.getId("sb_ifc"),this.o.appendChild(this.D),Nj(this,this.o,this.D)),this.C.Wd||this.C.Ec||Oj(this,this.o),this.F=this.o;this.Ca&&(b=C(this.Wb,this),V(this.l,this.f,"blur",b,10),b=C(this.hc,this),V(this.l,this.f,"focus",b,10),this.sa=!0);Ah(this.l,8,C(this.fd,this));Pj(this)};
m.L=function(a){this.C=a;this.f.setAttribute("autocomplete","off");this.f.setAttribute("spellcheck",!1);this.f.style.outline=a.Rb?"":"none";this.qa=this.f.value;this.sa&&this.hc();Qj(this)};
m.deactivate=function(){this.sa&&this.Wb();Rj(this)};
function Nj(a,b,c){Rj(a);c||(c=b);a.f.parentNode.replaceChild(b,a.f);c.appendChild(a.f);a.m&&a.C.Od&&(Of||Qf?Vg(a.l,function(){a.f.focus();ag(a.f,a.s.Ka())}):a.f.focus());
Qj(a)}
m.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.M>a&&(a=this.M);return a};
function yi(a){return a.N?a.N:a.F?a.F.offsetWidth:0}
m.select=function(){this.f.select();this.Wa()};
m.refresh=function(){Wf&&(this.f.value="");this.f.value=this.g.f;Wf&&(this.f.value=this.f.value);Sj(this)};
m.focus=function(){if(!this.m)try{this.f.focus(),this.m=!0,Sj(this)}catch(a){}};
m.blur=function(){this.m&&(this.f.blur(),this.m=!1)};
m.isFocused=function(){return this.m};
m.clear=function(){this.f.value=""};
function Sj(a){if(a.m){var b=a.f.value.length;a.s=df(b);ag(a.f,b)}}
function Oj(a,b){V(a.l,b,"mouseup",function(){a.f.focus()})}
function Pj(a){function b(e){V(a.l,a.f,e,C(a.cc,a),10,c)}
V(a.l,a.f,"keydown",C(a.dd,a));(Rf||a.C.Bc)&&V(a.l,a.f,"keypress",C(a.ed,a));V(a.l,a.f,"select",C(a.Wa,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=C(a.ad,a);V(a.l,a.f,"compositionstart",d);V(a.l,a.f,"compositionend",d)}
m.ad=function(a){a=a.type;"compositionstart"==a?(a=this.g,1!=a.C&&(a.C=!0)):"compositionend"==a&&(a=this.g,0!=a.C&&(a.C=!1))};
m.dd=function(a){var b=a.keyCode;this.T=b;var c=(Sf||Qf)&&(38==b||40==b)&&Xg(this.ta),d=13==b,e=27==b;this.R=!1;9!=b||a.shiftKey||(this.R=Wg(this.g));if(d){var f=this;Vg(this.l,function(){f.ta.u.search(a.shiftKey?4:3)})}if(c||d||e||this.R)a.Na=!0};
m.ed=function(a){var b=a.keyCode,c=9==b&&this.R;if(13==b||27==b||c)a.Na=!0};
m.cc=function(a){if(!this.ra){var b=a.Aa;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,"keypress"!=b){var c=38==a||40==a;if("keydown"==b){var d=this.g;var e=229==a;(d.H=e)&&d.F.add(4);if(c)break a}else if(d=a!=this.T,this.T=-1,!c||d)break a;switch(a){case 27:a=this.g;a.o.Rd?a.search(5):(a.l.isVisible()?a.l.dismiss():a.g.blur(),vg(a));break;case 37:eh(this.g,"rtl");break;case 39:eh(this.g,"ltr");break;case 38:this.g.l.jc();break;case 40:a=this.g;c=this.s;Xg(a.l)?
a.l.ic():ah(a.l,c);break;case 46:a=this.g;a.f&&this.s.Hb()==a.f.length&&(a.O&&a.O.clear(),a.o.Qd&&a.search(2));break;case 8:a=this.g,a.D&&0==this.s.Ka()&&a.D.f()}}this.Wa();Zg(this.g,this.f.value,this.s,b)}};
m.Zc=function(){this.m=!0;U(this.g.s,10)};
m.Xc=function(){this.m=!1;Ug(this.g)};
function Qj(a){a.O||(a.O=!0,a.ba=C(a.Zc,a),V(a.l,a.f,"focus",a.ba,99),a.Z=C(a.Xc,a),V(a.l,a.f,"blur",a.Z,99))}
function Rj(a){a.O&&(a.O=!1,zh(a.l,a.f,a.ba),zh(a.l,a.f,a.Z))}
m.hc=function(){this.G||(this.G=new Jj(this.C.pollingInterval||50),this.G.f.add("tick",this.Ld,!1,void 0,this),this.G.start())};
m.Wb=function(){this.G&&(this.G.stop(),this.G=null)};
m.Ld=function(){this.cc({Aa:"polling"})};
m.fd=function(){if(Qf){var a=this.f,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
m.Wa=function(){if(this.m){a:{var a=this.f;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=dg(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(void 0!==b){var f=df(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Lj(a){var b;Bh(window,"pagehide",function(){a.ra=!0;b=a.f.value});
Bh(window,"pageshow",function(c){a.ra=!1;(c.persisted||void 0!==b)&&ch(a.g,b)})}
function Mj(a){Bh(window,"pageshow",function(b){b.persisted&&a.qa&&ch(a.g,a.qa)})}
function xi(a,b){a.f.setAttribute("aria-haspopup",b);b||a.f.removeAttribute("aria-activedescendant")}
;function Tj(){this.i=129;this.J={};this.M=[];this.O=[];this.R=[];this.C=[];this.T=0}
F(Tj,R);m=Tj.prototype;
m.aa=function(a,b){this.Z=a;this.ba=a.ib();this.G=a.Ja();Yf||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Yf||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Sf?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Yf&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
m.K=function(a){this.D=a.get(128);this.u=a.get(118);this.H=a.get(121);a=Q(a,152);var b={};if(a)for(var c=0,d;d=a[c++];)b[d.m]=d;this.ja=b};
m.setup=function(a){this.f=a};
m.na=function(){this.m=T();this.g=S("ul","sbsb_b");this.g.setAttribute("role","listbox");this.m.appendChild(this.g)};
m.L=function(a){this.f=a;var b=a.Zb;b&&(this.W=this.Z.Eb(b));this.m.className=a.ae||"sbsb_a";this.N=a.Yd||"sbsb_d"};
m.highlight=function(a){(a=this.C[a])&&a.isSelectable()&&(md(a.f().parentNode,this.N),(a=a.f().id)&&this.ba.setAttribute("aria-activedescendant",a))};
function sh(a,b){var c=a.C[b];c&&nd(c.f().parentNode,a.N)}
m.clear=function(){for(var a,b,c;c=this.M.pop();)a=c.V(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.f(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.i?this.R.push(a):a!=this.s&&a!=this.o&&this.O.push(a);this.s&&(this.s.style.display="none");this.o&&(this.o.style.display="none");this.C=[]};
m.isSelectable=function(a){return(a=this.C[a])?a.isSelectable():!1};
function kh(a,b){var c=b.V(),d=a.ja[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Uj(a,d));d.Sa(b,c);a.M.push(c);var e=c.f(),f=Vj(a);f.appendChild(e);if(void 0!==b.s){a.C.push(c);var g=a.F;var h=b.i;a.f.rd&&(e.onmouseover=function(){ph(a.D,h)},e.onmouseout=function(){wg(a.D)});
var k=c.f();k.onclick=function(l){a.u.g.blur();b.l&&$g(a.u,b.f);wg(a.D);var n=a.D;n.l=n.f=h;l=l||jg(k).event;d.Ra(l,b,a.H)}}else g=a.G;
eg(f,g);return!0}
function Uj(a,b){var c=b.Ga(a.H),d=c.f();md(d,"sbse");d.id="sbse"+a.T;(d=c.f())&&d.setAttribute("role","option");a.T++;return c}
function oh(a,b,c,d){var e=S("input");e.type="button";e.value=jf(b);e.onclick=function(){a.H.search(a.u.f,d)};
if(a.f.jd){b="lsb";var f=S("span");var g=S("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Vj(a){var b=a.O.pop();if(b)return a.g.appendChild(b),b;b=S("li");b.setAttribute("role","presentation");b.className="sbsb_c "+a.f.Ta;b.onmousedown=C(a.qb,a);a.g.appendChild(b);return b}
m.qb=function(a){a=a||jg(this.m).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):Of&&!Rf&&(this.u.g.W=!0);return!1};
function jh(a){if(a.l){var b=0,c=a.u.g.u;c&&(b=c.offsetWidth);b=yi(a.u.g)-b-3;0<b&&(a.l.style.width=b+"px")}}
;function Wj(){this.i=147}
F(Wj,R);Wj.prototype.aa=function(a){this.s=a.Fb()||document.body};
Wj.prototype.setup=function(a){this.u=a};
Wj.prototype.getHeight=function(){this.f||lh(this);mh(this);if(!this.g){var a=this.f;"|"!=a.innerHTML&&(a.innerHTML="|");this.g=this.f.offsetHeight}return this.g};
function lh(a){var b=T(a.u.mb),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.f=b;a.f.style.visibility="hidden";a.s.appendChild(a.f)}
function mh(a){var b=D();if(!a.m||a.m+3E3<b){a.m=b;b=a.f;var c=jg(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.o&&b==a.o||(a.l={},a.g=null,a.o=b)}}
;function Xj(){xf.call(this);this.set(191,new li);this.set(150,new oi);this.set(146,new pi);this.set(147,new Wj);P(this,149,new Lg);this.set(145,new uh);this.set(117,new vh);this.set(494,new Eh);this.set(374,new Fh);this.set(120,new Gh);this.set(121,new Uh);this.set(553,new Xh);this.set(124,new fi);this.set(125,new gi);this.set(123,new Zh);this.set(126,new ii);this.set(127,new ki);this.set(115,new Og);this.set(118,new Sg);this.set(128,new gh);P(this,154,new th);this.set(116,new ri);this.set(119,new Kj);
this.set(129,new Tj)}
F(Xj,xf);function Yj(){this.i=347;this.f=[];this.g=0}
F(Yj,R);Yj.prototype.K=function(a){this.o=a.get(120)};
Yj.prototype.L=function(a){this.m="//"+(a.Hd||"www."+a.Fa)+"/gen_204?";this.l=a.Xd||{}};
function Vh(a,b){var c=Hh(a.o,b,void 0,void 0),d;for(d in a.l)d in c||(c[d]=a.l[d]);c=ef(c,!0);Zj(a,a.m+c)}
function Zj(a,b){var c=new Image,d=a.g,e=a.f;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.f[a.g++]=c;c.src=b}
;function ak(){this.i=151;this.g=!0;this.f={}}
v(ak,R);m=ak.prototype;m.K=function(a){this.l=a.get(150)};
m.setup=function(){this.o=cf([0])};
m.L=function(a){this.m=a.kb;this.g=a.yb};
m.deactivate=function(){this.g=!1};
m.update=function(a){if(this.g){var b=a.f;if(b.length){var c=a.i.i;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.o[e.V()]){d=-1;break a}e=e.f;d=Math.min(e.length,d)}}if(-1!=d){var g=b[0].f;if(lf(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.f;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.f[c]=a;++f}}}}};
m.get=function(a){if(this.g){var b=this.f[a.i];if(b){for(var c=a.C,d=a.i,e=b.g,f=this.m||!e.f.k,g=[],h,k,l=b.f,n=0,p;p=l[n++];)k=p.f,h=f?this.l.bold(c,k):hf(k),g.push(new Qe(h,k,p.i,p.V(),p.g||[],p.m));delete this.f[d];return new vf(a,g,e,!0,b.l,!1)}}return null};
m.reset=function(){this.f={}};function bk(){this.i=133;this.g={};this.f=[];this.m=this.l=0}
F(bk,R);bk.prototype.K=function(a){this.f=Q(a,151);this.f.sort(ck)};
bk.prototype.L=function(){this.m=this.l=0};
bk.prototype.get=function(a){var b=this.g[a.g];if(b)++this.l;else if(this.f)for(var c=0;c<this.f.length;++c)if(b=this.f[c].get(a)){b&&b.l&&(this.g[b.i.g]=b);++this.m;break}return b?new vf(a,b.f,b.g,b.m,b.l,b.s):null};
bk.prototype.has=function(a){return!!this.g[a.g]};
function ck(){return 0}
;function dk(a){this.i=a;this.f=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function ek(a,b){b&&!a.f.test(b.className)&&(b.className+=" "+a.i)}
function fk(a,b){b&&(b.className=b.className.replace(a.f," "))}
;function gk(){this.i=570;this.m=!1}
F(gk,R);m=gk.prototype;m.aa=function(a){this.s=a};
m.K=function(a){this.o=a.get(117);this.u=a.get(118)};
m.setup=function(a){var b=a.va;if(this.f=b?this.s.Eb(b):null)Ah(this.o,10,C(this.Yc,this)),Ah(this.o,11,C(this.Wc,this)),V(this.o,this.f,"mouseover",C(this.cd,this)),V(this.o,this.f,"mouseout",C(this.bd,this)),a.fb&&(this.l=new dk(a.fb)),a.eb&&(this.g=new dk(a.eb))};
m.L=function(){this.m=!0;this.f&&this.u.g.isFocused()&&this.g&&ek(this.g,this.f)};
m.deactivate=function(){this.m=!1;this.f&&(this.l&&fk(this.l,this.f),this.g&&fk(this.g,this.f))};
m.cd=function(){this.m&&this.l&&ek(this.l,this.f)};
m.bd=function(){this.m&&this.l&&fk(this.l,this.f)};
m.Yc=function(){this.m&&this.g&&ek(this.g,this.f)};
m.Wc=function(){this.m&&this.g&&fk(this.g,this.f)};function hk(){this.i=156}
F(hk,R);hk.prototype.g=function(a){var b=1,c=a.D;gf(a.f)||"focus"!=c&&"input"!=c||(b=2);return b};
hk.prototype.f=function(){return 2};function ik(){this.i=160}
F(ik,R);m=ik.prototype;m.aa=function(a,b){this.l=a;a.Xa()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
m.K=function(a){this.C=a.get(374);this.D=a.get(128)};
m.setup=function(a){this.m=!!a.Ma;this.o=a.Ub;this.u=a.Oa;this.F=a.Kd;this.G=a.Jd};
m.na=function(){(this.g=this.l.get("gs_ok"))?this.f=this.g.firstChild:(this.f=S("img"),this.f.src=this.o+"/tia.png",this.g=S("span","gsok_a gsst_e"),this.g.id=this.l.getId("gs_ok"),this.g.appendChild(this.f));this.f.ds=C(this.Fc,this);this.f.setAttribute("tia_field_name",this.l.ib().name);this.f.setAttribute("tia_disable_swap",!0)};
m.L=function(a){a.lb&&(this.m=!!a.Ma);this.f.setAttribute("tia_property",a.Vb)};
m.isEnabled=function(){return this.m};
m.Gb=function(){return{tooltip:this.G}};
m.mc=function(a){if(!this.s)a=document.createElement("script"),a.src="//www.google.com/textinputassistant/"+this.F+"/"+this.u+"_tia.js",document.body.appendChild(a),this.s=!0,this.C.add(3);else if(this.f.onclick)this.f.onclick(a)};
m.Fc=function(){this.D.dismiss()};
var jk=bf++;function kk(){this.i=173;this.l={}}
F(kk,R);m=kk.prototype;
m.aa=function(a,b){this.m=a;a.Xa()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(kg()+":"+lg(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",kg()+":"+lg(.8)+";"),b.addRule(".gsst_a:active .gsst_e",kg()+":"+
lg(1)+";"))};
m.K=function(a){this.u=a.get(118);this.g=Q(a,160)};
m.setup=function(a){this.o=a.lb;this.g.sort(lk)};
m.na=function(a){this.f=this.m.get("gs_st");if(!this.f){this.f=T("gsst_b");this.f.id=this.m.getId("gs_st");if(a=a.xa)this.f.style.lineHeight=a+"px";mk(this)}nk(this)};
m.L=function(){if(this.o)for(var a=0,b;b=this.g[a++];){var c=!!this.l[jk];if(b.isEnabled()!=c){for(;this.f.hasChildNodes();)this.f.removeChild(this.f.lastChild);mk(this);nk(this);break}}};
function lk(){return 0}
function mk(a){for(var b,c=0,d;d=a.g[c++];)if(d.isEnabled()){b=!0;var e=S("a","gsst_a");ok(a,e,d);e.appendChild(d.g);a.f.appendChild(e)}a.f.style.display=b?"":"none"}
function nk(a){a.l={};for(var b=0,c;c=a.g[b++];)if(c.isEnabled()){var d=jk,e=c.g.parentNode;e.onclick=C(c.mc,c);a.l[d]=e;c.Gb&&(c=c.Gb(),c.Ke&&(d=a.l[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function ok(a,b,c){mc(b,new I(xb,lb(new ib(jb,"javascript:void(0)"))));Rf&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(13==e||32==e)c.mc(d),a.u.g.focus(),gg(d)}}
bf++;function pk(){this.o=33;this.i=T();this.i.className="gspr_a"}
F(pk,Mf);pk.prototype.f=function(){return this.i};function qk(){Nf.call(this,33)}
F(qk,Nf);qk.prototype.aa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
qk.prototype.Ga=function(){return new pk};
qk.prototype.Sa=function(a,b){var c=Le(a.m.f.b||"");lc(b.i,c)};
qk.prototype.Ra=function(a,b,c){c.search(b.f,1)};function rk(a,b){this.o=0;this.m=a;this.C=b;this.l=T();this.i=T("sbqs_a");this.l.appendChild(this.i);this.u=T("sbqs_c");this.l.appendChild(this.u)}
F(rk,Mf);rk.prototype.f=function(){return this.l};
function sk(a,b,c,d){a.u.innerHTML=b;a.s=c;d&&!a.g&&(a.g=hg(a.i),a.g.onclick=C(function(e){this.m.g.blur();$g(this.m,this.s);this.C.search(this.s,9);return gg(e)},a));
d?(a.g.innerHTML=d+" &raquo;",a.i.style.display="",a.i.setAttribute("aria-hidden","true")):a.g&&(a.i.style.display="none")}
;function tk(){Nf.call(this,0)}
F(tk,Nf);m=tk.prototype;m.aa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
m.K=function(a){this.g=a.get(118)};
m.L=function(a){this.f=a.Bb?a.Cb:""};
m.Ga=function(a){return new rk(this.g,a)};
m.Sa=function(a,b){sk(b,a.getHtml(),a.f,this.f)};
m.Ra=function(a,b,c){c.search(b.f,1)};function uk(a){Xj.call(this);P(this,149,new Ff);this.set(347,new Yj);this.set(133,new bk);P(this,151,new ak);this.set(570,new gk);this.set(134,new yg);this.set(189,new Ag);P(this,156,new Dg);P(this,152,new xg);P(this,152,new qk);P(this,152,new tk);this.set(173,new kk);P(this,160,new ik);this.set(157,new Eg);P(this,156,new Fg);"zero-prefix"==a.SEARCHBOX_BEHAVIOR_EXPERIMENT&&P(this,156,new hk);var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&b.SBOX_REPORT_SUGGESTIONS&&(P(this,
153,new Kf),P(this,152,new rg(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Gg(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),P(this,156,new Kg))}
v(uk,Xj);function vk(){return{jb:function(){return{clientName:"hp",requestIdentifier:"hp",Fa:"google.com",uc:"",nb:"en",Za:"",rb:"",videoId:"",vb:"",authuser:0,Id:"",Ze:"",qc:null,tb:"",Ab:!1,fc:"",Qa:"",connectionType:0,Xe:null,xc:!1,Qe:!1,Lb:!1,Jc:!0,Oc:10,De:10,Ic:!0,yb:!0,ye:!1,Rc:!1,Fd:!1,Gd:!1,Me:!1,pd:!0,Gc:!1,qd:500,lb:!1,hd:!0,Ie:!0,Te:!1,Ma:!1,Oa:"",Ub:"//www.google.com/textinputassistant",Vb:"",Kd:7,Fe:!1,Ge:!1,md:!1,ld:!0,nd:!1,Jb:!1,Rd:!1,Qd:!1,Ua:1,Pb:!0,Ia:!1,Bb:!1,zb:!1,pollingInterval:10,
kb:!1,Od:!0,ea:document.body,od:!0,vc:null,Lc:{},Ae:{},Pe:0,Sc:!1,sd:!0,ma:!1,Qc:!1,Vd:!1,Ue:null,Kc:!1,Hd:null,Xd:null,cb:!1,rd:!0,Bc:!1,We:1,Rb:!1,searchText:"Search",Cb:"I'm  Feeling Lucky",Ud:"",learnMoreText:"Learn more",ec:"Remove",dc:"This search was removed from your Web History",hintText:"",xe:"Did you mean:",Jd:"",Se:"",cf:"Search by voice",bf:'Listening for "Ok Google"',af:'Say "Ok Google"',se:"Clear Search",xa:0,Ad:0,mb:"",Ta:"",isRtl:!1,ua:"absolute",jd:!1,Ib:!1,Zb:null,kd:!0,Ha:[0,0,
0],Hc:null,Zd:null,wb:[0],sc:!0,wc:"",ae:"",Yd:"",va:null,fb:"",eb:"",re:1,ce:!1,Db:!1,Ne:0,Wd:!1,Ec:!1,ze:!1,Md:!0}}}}
;function wk(a,b,c,d,e){var f=Qf?"-moz-":Of?"-ms-":Rf?"-o-":Sf?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,n){if(b){if(c){for(var p=l.split(","),r=[],q=0,z;z=p[q++];)z=h.test(z)?z.replace(h,g+"$1"):g+" "+z,r.push(z);l=r.join(",")}k.push(l,"{",n,"}")}},
Ac:function(){if(b&&k.length){b=!1;var l=S("style");l.setAttribute("type","text/css");(a||$e).appendChild(l);var n=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}},
prefix:function(l,n){var p=l+(n||"");f&&(p+=n?l+f+n:f+l);return p}}}
;function xk(a,b,c,d){this.g=a;this.M=b;this.G=c;this.H=d;this.i=-1;this.C=!1}
m=xk.prototype;m.install=function(a){if(!this.C){a=yk(a);0>this.i&&(this.i=zk(a));var b=dg(this.g),c=Ak(this),d=!!b.getElementById("gs_id"+this.i),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.wc&&f.push(a.wc);f=wk(a.vc,a.od,a.Kc,this.i,f);this.s=a.ma;this.f=new yf(this.G,this.H,{Xa:function(){return d},
get:function(g){return b.getElementById(g+e.i)},
Eb:function(g){return b.getElementById(g)},
Fb:function(){return e.M},
Ja:function(){return c},
getId:function(g){return g+e.i},
ib:function(){return e.g}},f,this,a);
this.f.get(347);this.D=this.f.get(130);this.f.get(115);this.J=this.f.get(117);this.f.get(123);this.f.get(135);this.N=this.f.get(118);this.l=this.f.get(119);this.f.get(374);this.m=this.f.get(120);this.f.get(189);this.O=this.f.get(553);this.f.get(419);this.f.get(126);this.f.get(128);this.f.get(139);this.F=this.f.get(121);a=jg(this.g);this.o=ig(a);this.u=C(this.Pd,this);Bh(a,"resize",this.u);this.C=!0}};
m.deactivate=function(){var a=jg(this.g),b=this.u;a.removeEventListener?a.removeEventListener("resize",b,!1):a.detachEvent("onresize",b);this.f.deactivate()};
m.isActive=function(){return!!this.f&&this.f.isActive()};
function Bk(a,b){function c(d){a.F.search(a.N.f,12);return fg(d)}
Bh(b,"keyup",function(d){13!=d.keyCode&&32!=d.keyCode||c(d)});
Bh(b,"click",c)}
m.focus=function(){this.l.focus()};
m.blur=function(){this.l.blur()};
m.isFocused=function(){return this.l.isFocused()};
m.getId=function(){return this.i};
m.search=function(a,b){this.F.search(a,b)};
m.ma=function(){return this.s||!!this.D&&this.D.ma()};
m.sb=function(a){this.O.sb(a)};
function zk(a){a=jg(a.vc||$e);void 0==a.nextSearchboxId&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Ak(a){if(a.g)for(a=a.g;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function yk(a){a=qf(a);var b=a.Oa;b?a.Oa=b.toLowerCase():a.Ma=!1;a.Ia&&!a.Bb&&(a.Ia=!1);Uf||(a.Gd=!1);return a}
m.Pd=function(){var a=ig(jg(this.g));if(a.yc!=this.o.yc||a.Kb!=this.o.Kb)this.o=a,U(this.J,8)};function Ck(){this.D=/\/(movie|show)s?($|[?#/])/i;this.F=/\/results\?(.*&)?search_type=(movies|shows)($|[&#])/i;this.s="sbhcn";this.o="sbfcn";this.l="gsfi";this.m="gsfs";this.C=function(){return!0}}
v(Ck,wf);m=Ck.prototype;m.search=function(a,b){this.C(Hh(this.f.m,b,void 0))&&this.J.submit()};
m.redirect=function(a){this.G(this.kc(a))};
m.kc=function(a){var b=0<=a.indexOf("?")?"&":"?",c;(c=Hh(this.f.m,void 0,void 0))||(c=Hh(this.f.m,void 0));c=ef(c);return a+b+c};
m.Qb=function(a){if(this.g||this.i){if(22<this.u){var b=(this.u-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.H?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}this.g?(a.addRule("."+this.m,"font-size:1.6rem;color:#222"),a.addRule(".sbqs_c b","font-weight:500"),a.addRule(".sbdd_c",
"z-index:2010"),a.addRule(".sbdd_a","z-index:2011"),a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;"),a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)")):(a.addRule("."+this.l,"font-size:16px;height:100% !important"),a.addRule(".sbib_b ."+this.l,"position:relative !important"),a.addRule("."+this.m,"font-size:16px"),a.addRule("a.sbsb_i","font-size:12px;color:#03c"),a.addRule(".sbdd_c","z-index:2000000006"),a.addRule(".sbdd_a","z-index:2000000007"),this.i||(a.addRule(".sbsb_c,.sbsb_c td",
"line-height:20px"),a.addRule(".sbsb_c","padding:0 6px"),a.addRule(".sbsb_d td","background:#eee"),a.addRule(".sbsb_e","margin:2px 0"),a.addRule(".sbib_a","background:transparent"),a.addRule(".sbib_b","padding:2px 6px"),a.addRule(".gsok_a","padding:0"),a.addRule(".gsok_a img","display:block"),a.addRule("."+this.s,"border:1px solid #b9b9b9;border-top-color:#a0a0a0"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);")),a.addRule("."+this.o,"border:1px solid #1c62b9;"+a.prefix("box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);")+
"outline:none;")))};
m.install=function(a,b,c,d,e,f,g){this.J=a;this.G=f;g&&(this.C=g);f=vk().jb();f.clientName="youtube";f.requestIdentifier="youtube";f.Za="yt";f.nb=d.REQUEST_LANGUAGE;f.uc=d.REQUEST_DOMAIN;f.hd=!1;f.Ua=0;f.Pb=!1;f.Ia=!1;f.Rb=!1;f.kb=!0;f.mb=this.l;f.Ta=this.m;f.fb=this.s;f.eb=this.o;f.Le=!0;g=window.location.href;g=this.D.test(g)||this.F.test(g);f.Lb=g;f.Ma=d.HAS_ON_SCREEN_KEYBOARD;f.Oa=d.REQUEST_LANGUAGE;f.Ub="//www.gstatic.com/inputtools/images";f.Vb="youtube";f.cb=!0;f.ua="fixed";this.g=d.IS_POLYMER;
this.i=d.IS_FUSION;this.H=d.SEARCHBOX_REPORTING;this.u=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;d.PQ&&(f.rb=d.PQ);f.vb=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.dc=e.SUGGESTION_DISMISSED_LABEL;f.ec=e.SUGGESTION_DISMISS_LABEL;f.sc=!d.HIDE_REMOVE_LINK;f.Ve=cf([0,33,35]);this.g?(f.va="search-container",f.xa=24):this.i?(f.va="masthead-search",f.xa=24):(f.va="masthead-search-terms",f.xa=30);Zb()||(f.Ib=!0);f.Zb=f.va;e=-3;J("Windows")&&$b()&&"8.0"==cc()&&(e=-5);this.i?e=17:this.g&&(e=16);f.Ha=[e,0,0];e=[0];
$b()&&"8.0"==cc()&&(e[0]=-1);f.wb=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e="zh-tw"==e||"zh-cn"==e||"ja"==e||"ko"==e):e=!1;e&&(f.zb=!0);if(e=d.SUGG_EXP_ID)f.tb=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.f){a=this.f;b=f;a.deactivate();b=yk(b);a.s=b.ma;a=a.f;a.deactivate();for(c=0;d=a.f[c++];)d.L(b);a.i=!0}else d=new uk(d),this.f=new xk(b,a,this,d),this.f.install(f),c&&(Bk(this.f,c),c.onclick=null)};function Dk(){this.i=[];this.f=-1}
Dk.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.f=-1)};
Dk.prototype.get=function(a){return!!this.i[a]};
function Ek(a){-1==a.f&&(a.f=Ta(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Fk(){this.i=-1}
;function Gk(){this.i=64;this.f=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.g=0;this.reset()}
F(Gk,Fk);Gk.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.m=this.g=0};
function Hk(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Gk.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.g;d<b;){if(0==f)for(;d<=c;)Hk(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Hk(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Hk(this,e);f=0;break}}this.g=f;this.m+=b}};
Gk.prototype.digest=function(){var a=[],b=8*this.m;56>this.g?this.update(this.l,56-this.g):this.update(this.l,this.i-(this.g-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Hk(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Ik(a,b){this.g={};this.f=[];this.l=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ik)for(c=Jk(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Jk(a){Kk(a);return a.f.concat()}
m=Ik.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Lk;Kk(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Lk(a,b){return a===b}
m.isEmpty=function(){return 0==this.i};
m.clear=function(){this.g={};this.l=this.i=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.i--,this.l++,this.f.length>2*this.i&&Kk(this),!0):!1};
function Kk(a){if(a.i!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.i!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.i++,this.f.push(a),this.l++);this.g[a]=b};
m.forEach=function(a,b){for(var c=Jk(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Ik(this)};
m.ga=function(a){Kk(this);var b=0,c=this.l,d=this,e=new pd;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw od;var f=d.f[b++];return a?f:d.g[f]};
return e};function Mk(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function Nk(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function Ok(a){var b=[];Pk(new Qk,a,b);return b.join("")}
function Qk(){}
function Pk(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rk(d,c),c.push(":"),Pk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rk(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Tk=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rk(a,b){b.push('"',a.replace(Tk,function(c){var d=Sk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Sk[c]=d);return d}),'"')}
;function X(a){bd.call(this);this.s=1;this.l=[];this.o=0;this.f=[];this.i={};this.u=!!a}
F(X,bd);m=X.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.s=e+3;d.push(e);return e};
m.ub=function(a){var b=this.f[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.f[a+1]=Ea):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.Nd=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Uk(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.ub(c)}}return 0!=e}return!1};
function Uk(a,b,c){lj(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(G(b,this.ub,this),delete this.i[a])}else this.f.length=0,this.i={}};
m.ka=function(){X.fa.ka.call(this);this.clear();this.l.length=0};function Vk(a){this.f=a}
Vk.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Ok(b))};
Vk.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vk.prototype.remove=function(a){this.f.remove(a)};function Wk(a){this.f=a}
F(Wk,Vk);function Xk(a){this.data=a}
function Yk(a){return void 0===a||a instanceof Xk?a:new Xk(a)}
Wk.prototype.set=function(a,b){Wk.fa.set.call(this,a,Yk(b))};
Wk.prototype.i=function(a){a=Wk.fa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zk(a){this.f=a}
F(Zk,Wk);Zk.prototype.set=function(a,b,c){if(b=Yk(b)){if(c){if(c<D()){Zk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Zk.fa.set.call(this,a,b)};
Zk.prototype.i=function(a){var b=Zk.fa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Zk.prototype.remove.call(this,a);else return b}};function $k(){}
;function al(){}
F(al,$k);al.prototype.clear=function(){var a=sd(this.ga(!0)),b=this;G(a,function(c){b.remove(c)})};function bl(a){this.f=a}
F(bl,al);m=bl.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.ga=function(a){var b=0,c=this.f,d=new pd;d.next=function(){if(b>=c.length)throw od;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function cl(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(cl,bl);function dl(a,b){this.i=a;this.f=null;if(K&&!(9<=Number(Gc))){el||(el=new Ik);this.f=el.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),el.set(a,this.f));try{this.f.load(this.i)}catch(c){this.f=null}}}
F(dl,al);var fl={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},el=null;function gl(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fl[b]})}
m=dl.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(gl(a),b);hl(this)};
m.get=function(a){a=this.f.getAttribute(gl(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(gl(a));hl(this)};
m.ga=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new pd;d.next=function(){if(b>=c.length)throw od;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hl(this)};
function hl(a){try{a.f.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function il(a,b){this.i=a;this.f=b+"::"}
F(il,al);il.prototype.set=function(a,b){this.i.set(this.f+a,b)};
il.prototype.get=function(a){return this.i.get(this.f+a)};
il.prototype.remove=function(a){this.i.remove(this.f+a)};
il.prototype.ga=function(a){var b=this.i.ga(!0),c=this,d=new pd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.i.get(e)};
return d};var jl=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",jl);function kl(a){var b=arguments;1<b.length?jl[b[0]]=b[1]:1===b.length&&Object.assign(jl,b[0])}
function Y(a,b){return a in jl?jl[a]:b}
;var ll={};function ml(){return ll.clicktracking||(ll.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function nl(){}
function ol(a,b){return pl(a,0,b)}
nl.prototype.f=function(a,b){return pl(a,1,b)};var ql=[];function rl(a){ql.forEach(function(b){return b(a)})}
function sl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){tl(b),rl(b)}}:a}
function tl(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Y("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),kl("ERRORS",b))}
function ul(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Y("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),kl("ERRORS",b))}
;function vl(a,b){"function"===typeof a&&(a=sl(a));return window.setTimeout(a,b)}
;function wl(){}
v(wl,nl);function pl(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vl(a,c||0)}
wl.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
wl.f=void 0;wl.jb=function(){return wl.f?wl.f:wl.f=new wl};
var xl=wl.jb();function Z(a){a=yl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function zl(a,b){var c=yl(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function yl(a){var b=Y("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Y("EXPERIMENT_FLAGS",{})[a]}
;var Al=0;E("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Al});E("ytEventsEventsListeners",y.ytEventsEventsListeners||{});E("ytEventsEventsCounter",y.ytEventsEventsCounter||{count:0});var Bl=y.ytPubsubPubsubInstance||new X,Cl=y.ytPubsubPubsubSubscribedKeys||{},Dl=y.ytPubsubPubsubTopicToKeys||{},El=y.ytPubsubPubsubIsSynchronous||{};X.prototype.subscribe=X.prototype.subscribe;X.prototype.unsubscribeByKey=X.prototype.ub;X.prototype.publish=X.prototype.Nd;X.prototype.clear=X.prototype.clear;E("ytPubsubPubsubInstance",Bl);E("ytPubsubPubsubTopicToKeys",Dl);E("ytPubsubPubsubIsSynchronous",El);E("ytPubsubPubsubSubscribedKeys",Cl);var Fl=window,Gl=Fl.ytcsi&&Fl.ytcsi.now?Fl.ytcsi.now:Fl.performance&&Fl.performance.timing&&Fl.performance.now&&Fl.performance.timing.navigationStart?function(){return Fl.performance.timing.navigationStart+Fl.performance.now()}:function(){return(new Date).getTime()};var Hl=zl("initial_gel_batch_timeout",1E3),Il=Math.pow(2,16)-1,Jl=null,Kl=0,Ll=void 0,Ml=0,Nl=0,Ol=0,Pl=!0,Ql=y.ytLoggingTransportLogPayloadsQueue_||{};E("ytLoggingTransportLogPayloadsQueue_",Ql);var Rl=y.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Rl);var Sl=y.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Sl);
function Tl(){window.clearTimeout(Ml);window.clearTimeout(Nl);Nl=0;Ll&&Ll.isReady()?(Ul(Rl),"log_event"in Ql&&Ul(Object.entries(Ql.log_event)),Rl.clear(),delete Ql.log_event):Vl()}
function Vl(){Z("web_gel_timeout_cap")&&!Nl&&(Nl=vl(Tl,6E4));window.clearTimeout(Ml);var a=Y("LOGGING_BATCH_TIMEOUT",zl("web_gel_debounce_ms",1E4));Z("shorten_initial_gel_batch_timeout")&&Pl&&(a=Hl);Ml=vl(Tl,a)}
function Ul(a){var b=Ll,c=Math.round(Gl());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=eb({context:Wl(b.f||Xl())});e.events=f;(f=Sl[d])&&Yl(e,d,f);delete Sl[d];Zl(e,c);$l(b,"log_event",e,{retry:!0,onSuccess:function(){Kl=Math.round(Gl()-c)}});
Pl=!1}}
function Zl(a,b){a.requestTimeMs=String(b);Z("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=Y("EVENT_ID",void 0);if(c){var d=Y("BATCH_CLIENT_COUNTER",void 0)||0;!d&&Z("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Il/2));d++;d>Il&&(d=1);kl("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Jl&&Kl&&Z("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Jl,roundtripMs:String(Kl)});Jl=c;Kl=0}}
function Yl(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var am=y.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",am);function bm(a){var b=[];ab(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function cm(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=nc(e[0]||""),g=nc(e[1]||"");f in b?Array.isArray(b[f])?Xa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};tl(h)}}}return b}
function dm(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cm(e[1]||"");for(var f in b)if(c||!cb(e,f))e[f]=b[f];return Wc(a,e)+d}
;function em(a){var b=fm;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(gm(b),hm(b));b.ca_type="image";a&&(b.bid=a);return b}
function gm(a){var b={};b.dt=dd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.i.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function hm(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new Nc(l.clientWidth,l.clientHeight)).round()}catch(p){n=new Nc(-12245933,-12245933)}k=n;n={};l=new Dk;y.SVGElement&&
y.document.createElementNS&&l.set(0);c=ad();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);y.crypto&&y.crypto.subtle&&l.set(3);y.TextDecoder&&y.TextEncoder&&l.set(4);l=Ek(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.i;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!L.WebGLRenderingContext,n}
var fm=new function(){var a=window.document;this.f=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return bm(em(a))});D();var im="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function jm(){if(!im)return null;var a=im();return"open"in a?a:null}
;var km={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},lm="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
mm=!1;
function nm(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Rc)[1]||null,e=Tc(a);d&&e?(d=c,c=a.match(Rc),d=d.match(Rc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Tc(c)==e&&(Number(c.match(Rc)[4]||null)||null)==(Number(a.match(Rc)[4]||null)||null):!0;d=Z("web_ajax_ignore_global_headers_if_set");for(var f in km)e=Y(km[f]),!e||!c&&Tc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Tc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Tc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Tc(a))b["X-YouTube-Ad-Signals"]=bm(em(void 0));return b}
function om(a){var b=window.location.search,c=Tc(a),d=Sc(a.match(Rc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cm(b),f={};G(lm,function(g){e[g]&&(f[g]=e[g])});
return dm(a,f||{},!1)}
function pm(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=qm(a,b);var d=rm(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||y;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.pb&&b.pb.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Tb&&0<b.timeout&&(f=vl(function(){e||(e=!0,window.clearTimeout(f),b.Tb.call(b.context||y))},b.timeout))}else sm(a,b)}
function sm(a,b){var c=b.format||"JSON";a=qm(a,b);var d=rm(a,b),e=!1,f=tm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=um(a,c,k,b.te);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||
{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.pb&&b.pb.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.Pa&&0<b.timeout){var g=b.Pa;var h=vl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},b.timeout)}}
function qm(a,b){b.Je&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Y("XSRF_FIELD_NAME",void 0),d=b.Ye;d&&(d[c]&&delete d[c],a=dm(a,d||{},!0));return a}
function rm(a,b){var c=Y("XSRF_FIELD_NAME",void 0),d=Y("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ya,g=Y("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ce||Tc(a)&&!b.withCredentials&&Tc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.ya&&b.ya[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=cm(e),gb(e,f),e=b.Xb&&"JSON"==b.Xb?JSON.stringify(e):Vc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!mm&&c&&"POST"!=b.method&&
(mm=!0,tl(Error("AJAX request with postData should use POST")));return e}
function um(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ul(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?vm(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=wm(g)})}d&&xm(e);
return e}
function xm(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=hc(a[b],null):xm(a[b])}}
function vm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wm(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function tm(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&sl(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=jm();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Z("debug_forward_web_query_parameters")&&(a=om(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=nm(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ym(){for(var a={},b=u(Object.entries(cm(Y("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function zm(){return"INNERTUBE_API_KEY"in jl&&"INNERTUBE_API_VERSION"in jl}
function Xl(){return{innertubeApiKey:Y("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Y("INNERTUBE_API_VERSION",void 0),td:Y("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ud:Y("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Y("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wd:Y("INNERTUBE_CONTEXT_HL",void 0),vd:Y("INNERTUBE_CONTEXT_GL",void 0),xd:Y("INNERTUBE_HOST_OVERRIDE",void 0)||"",zd:!!Y("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),yd:!!Y("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Wl(a){a={client:{hl:a.wd,gl:a.vd,clientName:a.ud,clientVersion:a.innertubeContextClientVersion,configInfo:a.td}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=Y("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=Y("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=Y("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
Y("DELEGATED_SESSION_ID")&&!Z("pageid_as_header_web")&&(a.user={onBehalfOfUser:Y("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,ym());return a}
function Am(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Y("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.qe||Y("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().pe:b=id([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Y("SESSION_INDEX",0),Z("pageid_as_header_web")&&(d["X-Goog-PageId"]=Y("DELEGATED_SESSION_ID")));return d}
;function Bm(a){a=Object.assign({},a);delete a.Authorization;var b=id();if(b){var c=new Gk;c.update(Y("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!Kc){Kc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Jc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Kc[k]&&(Kc[k]=h)}}}c=Jc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
function Cm(a){a=Bm(a);var b=new Gk;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Dm(a,b,c,d){Mc.set(""+a,b,{Ob:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Em(){var a=new cl;(a=a.isAvailable()?new il(a,"yt.innertube"):null)||(a=new dl("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Zk(a):null;this.i=document.domain||window.location.hostname}
Em.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ok(b))}catch(f){return}else e=escape(b);Dm(a,e,c,this.i)};
Em.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Mc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Em.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.i;Mc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Fm;function Gm(){Fm||(Fm=new Em);return Fm}
function Hm(a,b,c,d){if(d)return null;d=Gm().get("nextId",!0)||1;var e=Gm().get("requests",!0)||{};e[d]={method:a,request:b,authState:Bm(c),requestTime:Math.round(Gl())};Gm().set("nextId",d+1,86400,!0);Gm().set("requests",e,86400,!0);return d}
function Im(a){var b=Gm().get("requests",!0)||{};delete b[a];Gm().set("requests",b,86400,!0)}
function Jm(a){var b=Gm().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Gl())-d.requestTime)){var e=d.authState;var f=Bm(Am(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Gl())),$l(a,d.method,e,{}));delete b[c]}}Gm().set("requests",b,86400,!0)}}
;function Km(){}
;var Lm=Hc||Ic;function Mm(){var a=/WebKit\/([0-9]+)/.exec(ub);return!!(a&&600<=parseInt(a[1],10))}
function Nm(){var a=/WebKit\/([0-9]+)/.exec(ub);return!!(a&&602<=parseInt(a[1],10))}
;function Om(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Om.prototype)}
v(Om,Error);function Pm(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function Qm(a){return new W(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Rm(a){this.f=a}
m=Rm.prototype;m.add=function(a,b,c){return Sm(Tm(this,[a],"readwrite"),a).add(b,c)};
m.clear=function(a){return Sm(Tm(this,[a],"readwrite"),a).clear()};
m.close=function(){this.f.close()};
m.count=function(a,b){return Sm(Tm(this,[a]),a).count(b)};
function Um(a,b,c){a=a.f.createObjectStore(b,c);return new Vm(a)}
m["delete"]=function(a,b){return Sm(Tm(this,[a],"readwrite"),a)["delete"](b)};
m.get=function(a,b){return Sm(Tm(this,[a]),a).get(b)};
function Tm(a,b,c){a=a.f.transaction(b,void 0===c?"readonly":c);return new Wm(a,b)}
function Vm(a){this.f=a}
m=Vm.prototype;m.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return Qm(c)};
m.clear=function(){return Qm(this.f.clear()).then(function(){})};
m.count=function(a){a=a?this.f.count(a):this.f.count();return Qm(a)};
m["delete"]=function(a){return Qm(this.f["delete"](a))};
m.get=function(a){return Qm(this.f.get(a))};
m.index=function(a){return new Xm(this.f.index(a))};
m.getName=function(){return this.f.name};
function Ym(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return Qm(a)}
function Wm(a){var b=this;this.f=a;this.i=new Map;this.done=new W(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new Om)})})}
Wm.prototype.abort=function(){this.f.abort();return this.done};
function Sm(a,b){var c=a.f.objectStore(b),d=a.i.get(c);d||(d=new Vm(c),a.i.set(c,d));return d}
function Xm(a){this.f=a}
Xm.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return Qm(a)};
Xm.prototype.get=function(a){return Qm(this.f.get(a))};
function Zm(a,b){this.request=a;this.f=b}
function $m(a){return Qm(a).then(function(b){return null===b?null:new Zm(a,b)})}
Zm.prototype["delete"]=function(){return Qm(this.f["delete"]()).then(function(){})};
Zm.prototype.update=function(a){return Qm(this.f.update(a))};function an(a,b,c){function d(){n||(n=new Rm(f.result));return n}
var e=Wm;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,h=c.blocking,k=c.f,l=c.upgrade,n;l&&f.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),q=new e(f.transaction);l(r,p.oldVersion,p.newVersion,q)});
g&&f.addEventListener("blocked",function(){g()});
return Qm(f).then(function(p){h&&p.addEventListener("versionchange",function(){h(d())});
k&&p.addEventListener("close",function(){k()});
return d()})}
function bn(a,b,c){c=void 0===c?{}:c;return an(a,b,c)}
;var cn,dn,en=["getAll","getAllKeys","getKey","openKeyCursor"],fn=["getAll","getAllKeys","getKey","openKeyCursor"];function gn(){return new Promise(function(a){setTimeout(a,50)})}
function hn(){return M(this,function b(){var c,d,e;return x(b,function(f){switch(f.f){case 1:if(Lm&&Mm()&&!Nm()&&!Z("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);ra(f);d=!1;return w(f,bn("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.i,e=bn("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(h){}}),w(f,Promise.race([e,
gn()]),6);case 6:return f["return"](d);case 3:ta(f);if(c)try{c.close()}catch(g){}ua(f);break;case 2:return sa(f),f["return"](!1)}})})}
function jn(){return void 0!==cn?vj(cn):new W(function(a){hn().then(function(b){cn=b;a(b)})})}
function kn(){return void 0!==dn?vj(dn):jn().then(function(a){if(!a)return!1;var b=u(en);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(fn);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return dn=a})}
;var ln;function mn(){function a(b){b.close();ln=void 0}
ln||(ln=yj(bn("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Um(b,"databases",{keyPath:"actualName"})}}),function(b){return Pm(b)?bn("YtIdbMeta",void 0,{blocking:a}):wj(b)}));
return ln}
function nn(a){return mn().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return Ym(Sm(Tm(b,["databases"],"readwrite"),"databases"),a,void 0)})})}
function on(a){return mn().then(function(b){return b["delete"]("databases",a)})}
;function pn(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return wj(c)}return yj(nn(b).then(function(){return a(b)}),function(c){return yj(on(b.actualName),function(){}).then(function(){return wj(c)})})}
function qn(a,b){b=void 0===b?{}:b;return pn(function(c){return bn(c.actualName,a,b)})}
;var rn;function sn(){return M(this,function b(){return x(b,function(c){if(!rn)try{rn=qn(1,{upgrade:function(d,e){1>e&&(Um(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Um(d,"sapisid"))}})}catch(d){if(!Pm(d))return tl(d),c["return"](Promise.reject(d));
rn=qn()}return c["return"](rn)})})}
function tn(a){return M(this,function c(){var d,e,f,g,h;return x(c,function(k){switch(k.f){case 1:return w(k,sn(),2);case 2:return d=k.i,e=Sm(Tm(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(k,un(),3);case 3:return f=k.i,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),w(k,e.add(g),4);case 4:return h=k.i,k["return"](h)}})})}
function vn(){return M(this,function b(){var c,d,e,f,g,h,k,l;return x(b,function(n){switch(n.f){case 1:return w(n,un(),2);case 2:return c=n.i,d=["NEW",c,0],e=["NEW",c,Gl()],f=IDBKeyRange.bound(d,e),w(n,sn(),3);case 3:g=n.i;h=Tm(g,["LogsRequestsStore"],"readwrite");var p=Sm(h,"LogsRequestsStore").index("newRequest");p=f?p.f.openCursor(f,"prev"):f?p.f.openCursor(f):p.f.openCursor();p=$m(p);return w(n,p,4);case 4:k=n.i;l=void 0;if(null===k||void 0===k||!k.f.value){n.da(5);break}l=k.f.value;l.status=
"QUEUED";return w(n,k.update(l),5);case 5:return n["return"](l)}})})}
function wn(a){return M(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,sn(),2);case 2:return d=g.i,e=Sm(Tm(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.i,f.status="QUEUED",w(g,Ym(e,f),4);case 4:return g["return"](f)}})})}
function xn(a){return M(this,function c(){var d,e,f;return x(c,function(g){switch(g.f){case 1:return w(g,sn(),2);case 2:return d=g.i,e=Sm(Tm(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:f=g.i;if(!f){g.da(4);break}f.status="NEW";f.sendCount+=1;return w(g,Ym(e,f),4);case 4:return g["return"](f)}})})}
function yn(){return M(this,function b(){var c,d;return x(b,function(e){if(1==e.f)return w(e,sn(),2);if(3!=e.f)return c=e.i,w(e,c.count("LogsRequestsStore"),3);d=e.i;return e["return"](!d)})})}
function zn(a){return M(this,function c(){var d;return x(c,function(e){if(1==e.f)return w(e,sn(),2);d=e.i;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function un(){return M(this,function b(){var c;return x(b,function(d){if(1==d.f){Km.f||(Km.f=new Km);var e={};var f=id([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=Y("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in jl||(e["X-Origin"]=window.location.origin),Z("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in jl&&(e["X-Goog-PageId"]=Y("DELEGATED_SESSION_ID")));e=vj(e);return w(d,e,2)}c=d.i;return d["return"](Cm(c))})})}
;var An=zl("network_polling_interval",3E4);function Bn(){this.l=0;this.f=window.navigator.onLine;Cn(this);Dn(this)}
function En(){Bn.f||(Bn.f=new Bn);return Bn.f}
function Fn(a){var b=Gn,c=Hn;In(a);(new W(function(d){a.i=d})).then(function(){b();
c&&(a.g=c)})}
function Dn(a){window.addEventListener("online",function(){a.f=!0;a.i&&a.i()})}
function Cn(a){window.addEventListener("offline",function(){a.f=!1;a.g&&a.g()})}
function In(a){a.l||(Jn(a),window.navigator.onLine&&a.i&&a.i())}
function Jn(a){a.l=ol(function(){window.navigator.onLine?(!1===a.f&&tl(Error("NetworkStatusManager missed online event.")),a.f=!0,a.i&&a.i()):(!0===a.f&&tl(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.g&&a.g());Jn(a)},An)}
;var Kn=zl("networkless_throttle_timeout")||100,Ln=zl("networkless_retry_attempts")||1,Mn=0;function Nn(a,b){b=void 0===b?{}:b;On().then(function(c){if(c&&!Z("networkless_bypass_write")){var d={url:a,options:b,timestamp:Gl(),status:"NEW",sendCount:0};tn(d).then(function(e){d.id=e;e=En();e.f?Pn(d):Fn(e)})["catch"](function(e){Pn(d);
tl(e)})}else sm(a,b)})}
function Gn(){Mn||(Mn=xl.f(function(){Pn();Mn=0;Gn()},Kn))}
function Hn(){var a=Mn;if(!isNaN(a)){var b=A("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Mn=0}
function Pn(a){M(this,function c(){var d=this,e,f,g,h;return x(c,function(k){switch(k.f){case 1:e=d;if(!a)return w(k,vn(),6);if(!a.id){k.da(3);break}return w(k,wn(a.id),5);case 5:a=k.i;k.da(3);break;case 6:if(a=k.i){k.da(3);break}return w(k,yn(),8);case 8:return(f=k.i)&&Hn(),k["return"]();case 3:if(Qn(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,n){return M(e,function r(){return x(r,function(q){if(1==q.f)return a&&
a.id?a.sendCount<Ln?w(q,xn(a.id),6):w(q,zn(a.id),2):q.da(2);
2!=q.f&&(Mn||Fn(En()),g(l,n));g(l,n);q.f=0})})},a.options.onSuccess=function(l,n){return M(e,function r(){return x(r,function(q){if(1==q.f)return a&&a.id?w(q,zn(a.id),2):q.da(2);
h(l,n);q.f=0})})},sm(a.url,a.options);
else if(ul(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(k,zn(a.id),0);k.da(0)}})})}
function Qn(a){a=a.timestamp;return 2592E6<=Gl()-a?!1:!0}
function On(){return Z("networkless_logging")?2===zl("networkless_ytidb_version")?kn():jn():vj(!1)}
;function Rn(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(Rn,Error);function Sn(a){var b=this;this.f=null;a?this.f=a:zm()&&(this.f=Xl());ol(function(){Jm(b)},5E3)}
Sn.prototype.isReady=function(){!this.f&&zm()&&(this.f=Xl());return!!this.f};
function $l(a,b,c,d){!Y("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ul(new Rn("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Rn("innertube xhrclient not ready",b,c,d);tl(e);e.f=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",ya:c,Xb:"JSON",Pa:function(){d.Pa()},
Tb:d.Pa,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
Sb:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
Oe:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.xd)&&(g=e);var h=a.f.zd||!1,k=Am(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.yd&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var n=dm(""+g+e,l||{},!0);On().then(function(p){if(d.retry&&Z("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(Z("networkless_gel")&&!p||!Z("networkless_gel"))var r=Hm(b,
c,k,h);if(r){var q=f.onSuccess,z=f.Sb;f.onSuccess=function(B,N){Im(r);q(B,N)};
c.Sb=function(B,N){Im(r);z(B,N)}}}try{Z("use_fetch_for_op_xhr")?pm(n,f):Z("networkless_gel")&&d.retry?(f.method="POST",Nn(n,f)):(f.method="POST",f.ya||(f.ya={}),sm(n,f))}catch(B){if("InvalidAccessError"==B.name)r&&(Im(r),r=0),ul(Error("An extension is blocking network request."));
else throw B;}r&&ol(function(){Jm(a)},5E3)})}
;var Tn=D().toString();var Un;
if(!(Un=y.ytLoggingDocDocumentNonce_)){var Vn;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Wn=Array(16),Xn=new Uint8Array(16);window.crypto.getRandomValues(Xn);for(var Yn=0;Yn<Wn.length;Yn++)Wn[Yn]=Xn[Yn];Vn=Wn;break a}catch(a){}for(var Zn=Array(16),$n=0;16>$n;$n++){for(var ao=D(),bo=0;bo<ao%23;bo++)Zn[$n]=Math.random();Zn[$n]=Math.floor(256*Math.random())}if(Tn)for(var co=1,eo=0;eo<Tn.length;eo++)Zn[co%16]=Zn[co%16]^Zn[(co-1)%16]/4^Tn.charCodeAt(eo),co++;Vn=Zn}for(var fo=Vn,go=[],ho=
0;ho<fo.length;ho++)go.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(fo[ho]&63));Un=go.join("")}var io=Un;E("ytLoggingDocDocumentNonce_",io);function jo(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function ko(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
E("yt_logging_screen.getRootVeType",function(a){return Y(ko(void 0===a?0:a),void 0)});
function lo(){var a=Y("csn-to-ctt-auth-info");a||(a={},kl("csn-to-ctt-auth-info",a));return a}
function mo(a){a=void 0===a?0:a;var b=Y(jo(a));if(!b&&!Y("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Z("kevlar_client_side_screens")||Z("c3_client_side_screens")?b="UNDEFINED_CSN":b=Y("EVENT_ID"));return b?b:null}
E("yt_logging_screen.getCurrentCsn",mo);function no(a,b,c){var d=lo();(c=mo(c))&&delete d[c];b&&(d[a]=b)}
E("yt_logging_screen.getCttAuthInfo",function(a){return lo()[a]});
E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Y(jo(c))||b!==Y(ko(c)))if(no(a,d,c),kl(jo(c),a),kl(ko(c),b),0==c||Z("web_screen_associated_all_layers"))b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:io,clientScreenNonce:a};var f=void 0===f?{}:f;var g={};g.eventTimeMs=Math.round(f.timestamp||Gl());g.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var h=-1;else h=A("_lact",window),h=null==h?-1:Math.max(D()-h,0);g.context={lastActivityMs:e(h)};
Z("log_sequence_info_on_gel_web")&&f.pc&&(e=g.context,h=f.pc,am[h]=h in am?am[h]+1:0,e.sequence={index:am[h],groupKey:h},f.Be&&delete am[f.pc]);f=f.we;e="";f&&(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),Sl[f.token]=e,e=f.token);f=Rl.get(e)||[];Rl.set(e,f);f.push(g);Sn&&(Ll=new Sn);g=zl("web_logging_max_batch")||100;e=Gl();f.length>=g?Tl():10<=e-Ol&&(Vl(),Ol=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function oo(a,b,c){for(var d=0,e=0;e<a.length;++e)d=31*d+a.charCodeAt(e)>>>0;a="ST-"+d.toString(36);b=b?Vc(b):"";Dm(a,b,c||5)}
;function po(a,b,c,d,e){if(a&&e){var f=Y("SBOX_SETTINGS"),g=Y("SBOX_LABELS");f&&g&&(a=A("searchbox.yt.install")(a,b,c,f,g,qo,d))&&e(a,100)}}
function ro(a,b){var c=Y("EVENT_ID");if(c){b.ei=c;c=(c=document.getElementById("masthead-search"))?c.dataset?c.dataset[ml()]:c.getAttribute("data-clicktracking"):null;b.ved=c||"";var d=a;c=b;var e=void 0===e?!0:e;var f=Y("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Tc(window.location.href);g&&f.push(g);g=Tc(d);if(0<=Qa(f,g)||!g&&0==d.lastIndexOf("/",0))if(Z("autoescape_tempdata_url")&&(f=document.createElement("a"),mc(f,d),d=f.href),d){g=d.match(Rc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);
g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!c.csn&&(c.itct||c.ved)&&(c=Object.assign({csn:mo()},c)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&oo(d,c,k)}else oo(d,c)}}}
function qo(a,b){ro(a,b?{feature:b}:{});var c=A("yt.window.navigate");try{c(a)}catch(g){var d=void 0===d?{}:d;var e=void 0===e?"":e;var f=void 0===f?window:f;c=f.location;d=Wc(a,d)+e;d=d instanceof I?d:Db(d);c.href=zb(d)}}
function so(a){for(var b=document.getElementById("masthead-search"),c=[],d=b.elements,e,f=0;e=d.item(f);f++)if(e.form==b&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=Nk(e);if(null!=e)for(var h,k=0;h=e[k];k++)Mk(c,g,h);break;default:h=Nk(e),null!=h&&Mk(c,g,h)}}d=b.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==b&&"image"==e.type.toLowerCase()&&(g=e.name,Mk(c,g,e.value),Mk(c,
g+".x","0"),Mk(c,g+".y","0"));c=c.join("&").replace(/%20/g,"+");b=b.action+"?"+c;ro(b,a);a=!!Y("SPF_SEARCH_BOX");if(!A("ytspf.enabled")||!a)return!0;a=A("yt.window.navigate");try{a(b)}catch(l){return!0}return!1}
;E("searchbox.yt.install",function(a,b,c,d,e,f,g){Jf||(Jf=new Ck);Jf.install(a,b,c,d,e,f,g)});
E("yt.www.masthead.searchbox.init",function(){var a=document.getElementById("masthead-search");po(a,a.search_query,document.getElementById("search-btn"),so,window.setTimeout)});
E("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){po(a,b,c,d,xl.f)});}).call(this);
