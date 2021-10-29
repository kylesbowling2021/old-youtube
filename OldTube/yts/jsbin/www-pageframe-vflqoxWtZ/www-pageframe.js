(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
ea("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
ea("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function pa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function qa(){this.B=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.u=this.h=null}
function ra(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
qa.prototype.D=function(a){this.g=a};
function sa(a,b){a.h={Id:b,Hc:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function ta(a,b,c){a.f=c;return{value:b}}
qa.prototype.ka=function(a){this.f=a};
function ua(a){a.l=2;a.j=3}
function va(a){a.l=0;a.h=null}
function wa(a){a.u=[a.h];a.l=0;a.j=0}
function xa(a){var b=a.u.splice(0)[0];(b=a.h=a.h||b)?b.Hc?a.f=a.l||a.j:void 0!=b.ka&&a.j<b.ka?(a.f=b.ka,a.h=null):a.f=a.j:a.f=0}
function ya(a){this.f=new qa;this.g=a}
function za(a,b){ra(a.f);var c=a.f.i;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.B=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ba(a)}a.f.i=null;d.call(a.f,f);return Ba(a)}
function Ba(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.B=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,sa(a.f,c)}a.f.B=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.Hc)throw b.Id;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i.next,b,a.f.D):(a.f.D(b),b=Ba(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i["throw"],b,a.f.D):(sa(a.f,b),b=Ba(a));return b};
this["return"]=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a,b){var c=new Ca(new ya(b));oa&&a.prototype&&oa(c,a.prototype);return c}
ea("Reflect",function(a){return a?a:{}});
ea("Reflect.construct",function(){return ja});
ea("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ea("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ea("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ea("WeakMap",function(a){function b(l){this.f=(k+=Math.random()+1).toString();if(l){l=q(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!Fa(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n["delete"](l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!Fa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&Fa(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&Fa(l,g)&&Fa(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&Fa(l,g)&&Fa(l[g],this.f)?delete l[g][this.f]:!1};
return b});
ea("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return fa(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=k.g[m];if(n&&Fa(k.g,m))for(var p=0;p<n.length;p++){var t=n[p];if(l!==l&&t.key!==t.key||l===t.key)return{id:m,list:n,index:p,W:t}}return{id:m,list:n,index:-1,W:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(q([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=k||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.W?m.W.value=l:(m.W={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.W),this.f.previous.next=m.W,this.f.previous=m.W,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.W&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.W.previous.next=k.W.next,k.W.next.previous=k.W.previous,k.W.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).W};
e.prototype.get=function(k){return(k=d(this,k).W)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,k.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ea("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
ea("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ea("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});
var Ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
ea("Object.assign",function(a){return a||Ha});
ea("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.i(m)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(m){return function(n){l||(l=!0,m.call(k,n))}}
var k=this,l=!1;return{resolve:g(this.C),reject:g(this.j)}};
b.prototype.C=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.H(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.u(g):this.l(g)}};
b.prototype.u=function(g){var k=void 0;try{k=g.then}catch(l){this.j(l);return}"function"==typeof k?this.J(k,g):this.l(g)};
b.prototype.j=function(g){this.B(2,g)};
b.prototype.l=function(g){this.B(1,g)};
b.prototype.B=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.D()};
b.prototype.D=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.H=function(g){var k=this.i();g.tb(k.resolve,k.reject)};
b.prototype.J=function(g,k){var l=this.i();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(t,r){return"function"==typeof t?function(F){try{m(t(F))}catch(Y){n(Y)}}:r}
var m,n,p=new b(function(t,r){m=t;n=r});
this.tb(l(g,m),l(k,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.tb=function(g,k){function l(){switch(m.g){case 1:g(m.h);break;case 2:k(m.h);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=q(g),n=m.next();!n.done;n=m.next())d(n.value).tb(k,l)})};
b.all=function(g){var k=q(g),l=k.next();return l.done?d([]):new b(function(m,n){function p(F){return function(Y){t[F]=Y;r--;0==r&&m(t)}}
var t=[],r=0;do t.push(void 0),r++,d(l.value).tb(p(t.length-1),n),l=k.next();while(!l.done)})};
return b});
ea("Object.setPrototypeOf",function(a){return a||oa});
ea("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
ea("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
ea("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
ea("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
ea("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
var Ia=Ia||{},u=this||self,Ja=/^[\w+/_-]+[=]{0,2}$/,Ka=null;function La(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ja.test(a)?a:""}
function v(a,b){for(var c=a.split("."),d=b||u,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function w(){}
function Ma(a){a.X=void 0;a.getInstance=function(){return a.X?a.X:a.X=new a}}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){return"function"==Na(a)}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Ua:x=Va;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var z=Date.now;function A(a,b){var c=a.split("."),d=u;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function B(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Wa(a){return a}
;function Xa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(Xa,Error);Xa.prototype.name="CustomError";var Ya;function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function $a(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},eb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},fb=Array.prototype.reduce?function(a,b,c,d){d&&(b=x(b,d));
return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
C(a,function(f,g){e=b.call(d,e,f,g,a)});
return e},gb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},hb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function ib(a,b,c){b=jb(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function kb(a,b){return 0<=bb(a,b)}
function lb(a,b){kb(a,b)||a.push(b)}
function mb(a,b){var c=bb(a,b),d;(d=0<=c)&&nb(a,c);return d}
function nb(a,b){Array.prototype.splice.call(a,b,1)}
function ob(a,b){var c=jb(a,b,void 0);0<=c&&nb(a,c)}
function pb(a){return Array.prototype.concat.apply([],arguments)}
function qb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function rb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function sb(a,b,c,d){Array.prototype.splice.apply(a,tb(arguments,1))}
function tb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ub(a,b){return a>b?1:a<b?-1:0}
function vb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=tb(d,e,e+8192);f=vb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function wb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function xb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function yb(a){var b=0,c;for(c in a)b++;return b}
function zb(a,b){a:{for(c in a)if(a[c]==b){var c=!0;break a}c=!1}return c}
function Ab(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Bb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function Cb(a){var b=Db,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Eb(a){for(var b in a)return!1;return!0}
function Fb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Gb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Hb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ib(a){var b=Na(a);if("object"==b||"array"==b){if(Pa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Ib(a[c]);return b}return a}
var Jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Jb.length;f++)c=Jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Lb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return Lb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var Mb;function Nb(){if(void 0===Mb){var a=null,b=u.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){u.console&&u.console.error(c.message)}Mb=a}else Mb=a}return Mb}
;function Ob(a,b){this.f=a===Pb&&b||"";this.g=Qb}
Ob.prototype.Na=!0;Ob.prototype.Da=function(){return this.f};
function Rb(a){return a instanceof Ob&&a.constructor===Ob&&a.g===Qb?a.f:"type_error:Const"}
var Qb={},Pb={};function Sb(a,b){this.g=a===Tb&&b||"";this.h=Ub}
Sb.prototype.Na=!0;Sb.prototype.Da=function(){return this.g.toString()};
Sb.prototype.Qb=!0;Sb.prototype.f=function(){return 1};
function Vb(a){if(a instanceof Sb&&a.constructor===Sb&&a.h===Ub)return a.g;Na(a);return"type_error:TrustedResourceUrl"}
var Ub={};function Wb(a){var b=Nb();a=b?b.createScriptURL(a):a;return new Sb(Tb,a)}
var Tb={};var Xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Yb(a,b){if(b)a=a.replace(Zb,"&amp;").replace($b,"&lt;").replace(ac,"&gt;").replace(bc,"&quot;").replace(cc,"&#39;").replace(dc,"&#0;");else{if(!ec.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Zb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace($b,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ac,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(bc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(cc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(dc,"&#0;"))}return a}
var Zb=/&/g,$b=/</g,ac=/>/g,bc=/"/g,cc=/'/g,dc=/\x00/g,ec=/[\x00&<>"']/;
function fc(a,b){for(var c=0,d=Xb(String(a)).split("."),e=Xb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=gc(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||gc(0==k[2].length,0==l[2].length)||gc(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function gc(a,b){return a<b?-1:a>b?1:0}
;function hc(a,b){this.g=a===ic&&b||"";this.h=jc}
hc.prototype.Na=!0;hc.prototype.Da=function(){return this.g.toString()};
hc.prototype.Qb=!0;hc.prototype.f=function(){return 1};
function kc(a){if(a instanceof hc&&a.constructor===hc&&a.h===jc)return a.g;Na(a);return"type_error:SafeUrl"}
var lc=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,mc=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,nc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function oc(a){if(a instanceof hc)return a;a="object"==typeof a&&a.Na?a.Da():String(a);return nc.test(a)?new hc(ic,a):null}
function pc(a,b){if(a instanceof hc)return a;a="object"==typeof a&&a.Na?a.Da():String(a);if(b&&/^data:/i.test(a)){var c=String(a);c=c.replace(/(%0A|%0D)/g,"");var d=c.match(mc);c=(d&&lc.test(d[1])?new hc(ic,c):null)||qc;if(c.Da()==a)return c}nc.test(a)||(a="about:invalid#zClosurez");return new hc(ic,a)}
var jc={},qc=new hc(ic,"about:invalid#zClosurez"),ic={};var rc;a:{var sc=u.navigator;if(sc){var tc=sc.userAgent;if(tc){rc=tc;break a}}rc=""}function D(a){return-1!=rc.indexOf(a)}
;function uc(){return D("Firefox")||D("FxiOS")}
function vc(){return D("Safari")&&!(wc()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||uc()||D("Silk")||D("Android"))}
function wc(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function xc(){return D("Android")&&!(wc()||uc()||D("Opera")||D("Silk"))}
;function yc(){this.g="";this.i=zc;this.h=null}
yc.prototype.Qb=!0;yc.prototype.f=function(){return this.h};
yc.prototype.Na=!0;yc.prototype.Da=function(){return this.g.toString()};
function Ac(a){if(a instanceof yc&&a.constructor===yc&&a.i===zc)return a.g;Na(a);return"type_error:SafeHtml"}
function Bc(a){if(a instanceof yc)return a;var b="object"==typeof a,c=null;b&&a.Qb&&(c=a.f());return Cc(Yb(b&&a.Na?a.Da():String(a)),c)}
function Dc(a){function b(f){Array.isArray(f)?C(f,b):(f=Bc(f),e.push(Ac(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Bc(Ec),d=c.f(),e=[];C(a,b);return Cc(e.join(Ac(c).toString()),d)}
function Fc(a){return Dc(Array.prototype.slice.call(arguments))}
var zc={};function Cc(a,b){return Gc(a,b)}
function Gc(a,b){var c=new yc,d=Nb();c.g=d?d.createHTML(a):a;c.h=b;return c}
var Hc=new yc;Hc.g=u.trustedTypes&&u.trustedTypes.emptyHTML?u.trustedTypes.emptyHTML:"";Hc.h=0;var Ec=Hc,Ic=Gc("<br>",0);function Jc(a,b){Rb(a);Rb(a);return Gc(b,null)}
;var Kc=ab(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Ac(Ec);return!b.parentElement});
function Lc(a,b){if(Kc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ac(b)}
function Mc(a,b){var c=b instanceof hc?b:pc(b);a.href=kc(c)}
function Nc(a,b){var c=b instanceof hc?b:pc(b,/^data:image\//i.test(b));a.src=kc(c)}
function Oc(a,b){a.src=Vb(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=u?c=La(c.document):(null===Ka&&(Ka=La(u.document)),c=Ka);c&&a.setAttribute("nonce",c)}
;function Pc(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function Qc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Rc(a){return a=Yb(a,void 0)}
var Sc={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Tc={"'":"\\'"};function Uc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Vc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Wc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var Xc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Yc(a){return a?decodeURI(a):a}
function Zc(a,b){return b.match(Xc)[a]||null}
function $c(a){return Yc(Zc(3,a))}
function ad(){var a=window.location.href,b=a.indexOf("#");return 0>b?null:a.substr(b+1)}
function bd(a){var b=a.match(Xc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function cd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?Qc(f):"")}}
function dd(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)dd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ed(a){var b=[],c;for(c in a)dd(c,a[c],b);return b.join("&")}
function fd(a,b){var c=ed(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
function gd(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var hd=/#|$/;function id(a,b){var c=a.search(hd),d=gd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Qc(a.substr(d,e-d))}
var jd=/[?&]($|#)/;function kd(a){for(var b=a.search(hd),c=0,d,e=[];0<=(d=gd(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(jd,"$1")}
;function ld(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
function md(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
function nd(a){a.length?od(a.shift(),function(){nd(a)}):pd()}
function qd(a){return"chrome-extension://"+a+"/cast_sender.js"}
function od(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function pd(){var a=md();a&&a(!1,"No cast extension found")}
function rd(){if(sd){var a=2,b=md(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;od("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",pd,c)}}
function td(){rd();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);nd(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
var sd=ld("loadCastFramework")||ld("loadCastApplicationFramework"),ud=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function vd(a){this.ic=a}
;function wd(a,b,c){this.i=a;this.g=b;this.f=c||[];this.Ra=new Map}
h=wd.prototype;h.rf=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Ra.set(this.yc(c),[new vd(a)])};
h.xc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.yc(b);return this.Ra.has(b)?this.Ra.get(b):void 0};
h.Md=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.xc(b))&&b.length?b[0]:void 0};
h.clear=function(){this.Ra.clear()};
h.yc=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};function xd(a,b){wd.call(this,a,3,b)}
pa(xd,wd);xd.prototype.h=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.Md(c);e&&(d=e.ic);this.rf(d+a,c)};function yd(){this.D=this.D;this.B=this.B}
yd.prototype.D=!1;yd.prototype.K=function(){return this.D};
yd.prototype.dispose=function(){this.D||(this.D=!0,this.F())};
function zd(a,b){a.D?b():(a.B||(a.B=[]),a.B.push(b))}
yd.prototype.F=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Ad(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Bd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Bd.prototype.stopPropagation=function(){this.f=!0};
Bd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Cd(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Dd(){return Cd()||D("iPad")||D("iPod")}
;function Ed(a){Ed[" "](a);return a}
Ed[" "]=w;function Fd(a,b){try{return Ed(a[b]),!0}catch(c){}return!1}
function Gd(a,b){var c=Hd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Id=D("Opera"),G=D("Trident")||D("MSIE"),Jd=D("Edge"),Kd=Jd||G,Ld=D("Gecko")&&!(-1!=rc.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Md=-1!=rc.toLowerCase().indexOf("webkit")&&!D("Edge"),Nd=D("Macintosh"),Od=D("Windows"),Pd=D("Android"),Qd=Cd(),Sd=D("iPad"),Td=D("iPod"),Ud=Dd();function Vd(){var a=u.document;return a?a.documentMode:void 0}
var Wd;a:{var Xd="",Yd=function(){var a=rc;if(Ld)return/rv:([^\);]+)(\)|;)/.exec(a);if(Jd)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Md)return/WebKit\/(\S+)/.exec(a);if(Id)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Yd&&(Xd=Yd?Yd[1]:"");if(G){var Zd=Vd();if(null!=Zd&&Zd>parseFloat(Xd)){Wd=String(Zd);break a}}Wd=Xd}var $d=Wd,Hd={};function ae(a){return Gd(a,function(){return 0<=fc($d,a)})}
function be(a){return Number(ce)>=a}
var de;if(u.document&&G){var ee=Vd();de=ee?ee:parseInt($d,10)||void 0}else de=void 0;var ce=de;function fe(a){var b=v("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||u.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ge(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,he[c])c=he[c];else{c=String(c);if(!he[c]){var f=/function\s+([^\(]+)/m.exec(c);he[c]=f?f[1]:"[Anonymous]"}c=he[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function ge(a,b){b||(b={});b[ie(a)]=!0;var c=a.stack||"",d=a.sg;d&&!b[ie(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=ge(d,b));return c}
function ie(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var he={};var je=!G||be(9),ke=G&&!ae("9"),le=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{u.addEventListener("test",w,b),u.removeEventListener("test",w,b)}catch(c){}return a}();var me;me=Md?"webkitTransitionEnd":Id?"otransitionend":"transitionend";function ne(a,b){Bd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
B(ne,Bd);var oe={2:"touch",3:"pen",4:"mouse"};
ne.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?Ld&&(Fd(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:oe[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
ne.prototype.stopPropagation=function(){ne.L.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
ne.prototype.preventDefault=function(){ne.L.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ke)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var pe="closure_listenable_"+(1E6*Math.random()|0),qe=0;function re(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.yb=e;this.key=++qe;this.Xa=this.sb=!1}
function se(a){a.Xa=!0;a.listener=null;a.f=null;a.src=null;a.yb=null}
;function te(a){this.src=a;this.listeners={};this.f=0}
te.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ue(a,b,d,e);-1<g?(b=a[g],c||(b.sb=!1)):(b=new re(b,this.src,f,!!d,e),b.sb=c,a.push(b));return b};
te.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ue(e,b,c,d);return-1<b?(se(e[b]),nb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ve(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(se(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ue(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xa&&f.listener==b&&f.capture==!!c&&f.yb==d)return e}return-1}
;var we="closure_lm_"+(1E6*Math.random()|0),xe={},ye=0;function ze(a,b,c,d,e){if(d&&d.once)return Ae(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);return null}c=Be(c);a&&a[pe]?f=a.g.add(String(b),c,!1,Qa(d)?!!d.capture:!!d,e):f=Ce(a,b,c,!1,d,e);return f}
function Ce(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,k=De(a);k||(a[we]=k=new te(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=Ee();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)le||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Fe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ye++;return c}
function Ee(){var a=Ge,b=je?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ae(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);return null}c=Be(c);return a&&a[pe]?a.g.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Ce(a,b,c,!0,d,e)}
function He(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Be(c),a&&a[pe])?a.g.remove(String(b),c,d,e):a&&(a=De(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ue(b,c,d,e)),(c=-1<a?b[a]:null)&&Ie(c))}
function Ie(a){if("number"!==typeof a&&a&&!a.Xa){var b=a.src;if(b&&b[pe])ve(b.g,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Fe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ye--;(c=De(b))?(ve(c,a),0==c.f&&(c.src=null,b[we]=null)):se(a)}}}
function Fe(a){return a in xe?xe[a]:xe[a]="on"+a}
function Je(a,b,c,d){var e=!0;if(a=De(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Xa&&(f=Ke(f,d),e=e&&!1!==f)}return e}
function Ke(a,b){var c=a.listener,d=a.yb||a.src;a.sb&&Ie(a);return c.call(d,b)}
function Ge(a,b){if(a.Xa)return!0;if(!je){var c=b||v("window.event"),d=new ne(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=Je(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=Je(c[g],f,!1,d),e=e&&k}return e}return Ke(a,new ne(b,this))}
function De(a){a=a[we];return a instanceof te?a:null}
var Le="__closure_events_fn_"+(1E9*Math.random()>>>0);function Be(a){if(Pa(a))return a;a[Le]||(a[Le]=function(b){return a.handleEvent(b)});
return a[Le]}
;function Me(){yd.call(this);this.g=new te(this);this.eb=this;this.xa=null}
B(Me,yd);Me.prototype[pe]=!0;Me.prototype.addEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
Me.prototype.removeEventListener=function(a,b,c,d){He(this,a,b,c,d)};
Me.prototype.dispatchEvent=function(a){var b=this.xa;if(b){var c=[];for(var d=1;b;b=b.xa)c.push(b),++d}b=this.eb;d=a.type||a;if("string"===typeof a)a=new Bd(a,b);else if(a instanceof Bd)a.target=a.target||b;else{var e=a;a=new Bd(d,b);Kb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=Ne(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=Ne(g,d,!0,a)&&e,a.f||(e=Ne(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=Ne(g,d,!1,a)&&e;return e};
Me.prototype.F=function(){Me.L.F.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,se(d[e]);delete a.listeners[c];a.f--}}this.xa=null};
function Ne(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xa&&g.capture==c){var k=g.listener,l=g.yb||g.src;g.sb&&ve(a.g,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Oe(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Oe.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Pe(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;var Qe=!G||be(9),Re=!Ld&&!G||G&&be(9)||Ld&&ae("1.9.1"),Se=G&&!ae("9"),Te=G||Id||Md;function Ue(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=Ue.prototype;h.clone=function(){return new Ue(this.x,this.y)};
h.equals=function(a){return a instanceof Ue&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ve(a,b){return new Ue(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function We(a,b){this.width=a;this.height=b}
h=We.prototype;h.clone=function(){return new We(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Xe(a){return a?new Ye(Ze(a)):Ya||(Ya=new Ye)}
function H(a){return $e(document,a)}
function $e(a,b){return"string"===typeof b?a.getElementById(b):b}
function af(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):bf(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):bf(c,"*",a,b)[0]||null}return c||null}
function bf(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&kb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function cf(a,b){wb(b,function(c,d){c&&"object"==typeof c&&c.Na&&(c=c.Da());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:df.hasOwnProperty(d)?a.setAttribute(df[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var df={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ef(a){a=a.document;a=ff(a)?a.documentElement:a.body;return new We(a.clientWidth,a.clientHeight)}
function gf(a){var b=hf(a);a=jf(a);return G&&ae("10")&&a.pageYOffset!=b.scrollTop?new Ue(b.scrollLeft,b.scrollTop):new Ue(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function hf(a){return a.scrollingElement?a.scrollingElement:!Md&&ff(a)?a.documentElement:a.body||a.documentElement}
function jf(a){return a.parentWindow||a.defaultView}
function kf(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Qe&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Rc(g.name),'"');if(g.type){f.push(' type="',Rc(g.type),'"');var k={};Kb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=lf(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):cf(f,g));2<d.length&&mf(e,f,d);return f}
function mf(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Oa(f)||Qa(f)&&0<f.nodeType?d(f):C(nf(f)?qb(f):f,d)}}
function lf(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function of(a){var b=document,c=lf(b,"DIV");G?(a=Fc(Ic,a),Lc(c,a),c.removeChild(c.firstChild)):Lc(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function ff(a){return"CSS1Compat"==a.compatMode}
function pf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function qf(a,b){a.insertBefore(b,a.childNodes[0]||null)}
function rf(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function sf(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function tf(a,b){var c=b.cloneNode(!0).childNodes;for(pf(a);c.length;)a.appendChild(c[0])}
function uf(a){return Re&&void 0!=a.children?a.children:db(a.childNodes,function(b){return 1==b.nodeType})}
function vf(a){return void 0!==a.firstElementChild?a.firstElementChild:wf(a.firstChild,!0)}
function wf(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function xf(a){return Qa(a)&&1==a.nodeType}
function yf(){var a=zf,b;if(Te&&!(G&&ae("9")&&!ae("10")&&u.SVGElement&&a instanceof u.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return xf(b)?b:null}
function Af(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ze(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Bf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{pf(a);var c=Ze(a);a.appendChild(c.createTextNode(String(b)))}}
function Cf(a,b){var c=[];return Df(a,b,c,!0)?c[0]:void 0}
function Df(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Df(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ef={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Ff={IMG:" ",BR:"\n"};function Gf(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Hf(a)||If(a)):Hf(a)&&If(a))&&G){var c;!Pa(a.getBoundingClientRect)||G&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Hf(a){return G&&!ae("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function If(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Jf(a){if(Se&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Kf(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Se||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Kf(a,b,c){if(!(a.nodeName in Ef))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Ff)b.push(Ff[a.nodeName]);else for(a=a.firstChild;a;)Kf(a,b,c),a=a.nextSibling}
function nf(a){if(a&&"number"==typeof a.length){if(Qa(a))return"function"==typeof a.item||"string"==typeof a.item;if(Pa(a))return"function"==typeof a.item}return!1}
function Lf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Mf(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&kb(f.className.split(/\s+/),c))},d)}
function Nf(a,b){return Lf(a,null,b,void 0)}
function Mf(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function Ye(a){this.f=a||u.document||document}
h=Ye.prototype;h.qa=function(){return $e(this.f,void 0)};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return lf(this.f,a)};
h.appendChild=function(a,b){a.appendChild(b)};
h.Td=rf;h.isElement=xf;function Of(a){u.setTimeout(function(){throw a;},0)}
var Pf;
function Qf(){var a=u.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=lf(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=x(function(l){if(("*"==k||l.origin==k)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.hc;c.hc=null;e()}};
return function(e){d.next={hc:e};d=d.next;b.port2.postMessage(0)}}return function(e){u.setTimeout(e,0)}}
;function Rf(){this.g=this.f=null}
var Tf=new Oe(function(){return new Sf},function(a){a.reset()});
Rf.prototype.add=function(a,b){var c=Tf.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Rf.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Sf(){this.next=this.scope=this.f=null}
Sf.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Sf.prototype.reset=function(){this.next=this.scope=this.f=null};function Uf(a,b){Vf||Wf();Xf||(Vf(),Xf=!0);Yf.add(a,b)}
var Vf;function Wf(){if(u.Promise&&u.Promise.resolve){var a=u.Promise.resolve(void 0);Vf=function(){a.then(Zf)}}else Vf=function(){var b=Zf;
!Pa(u.setImmediate)||u.Window&&u.Window.prototype&&!D("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(Pf||(Pf=Qf()),Pf(b)):u.setImmediate(b)}}
var Xf=!1,Yf=new Rf;function Zf(){for(var a;a=Yf.remove();){try{a.f.call(a.scope)}catch(b){Of(b)}Pe(Tf,a)}Xf=!1}
;function $f(a){this.f=0;this.B=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=w)try{var b=this;a.call(void 0,function(c){ag(b,2,c)},function(c){ag(b,3,c)})}catch(c){ag(this,3,c)}}
function bg(){this.next=this.context=this.onRejected=this.h=this.f=null;this.g=!1}
bg.prototype.reset=function(){this.context=this.onRejected=this.h=this.f=null;this.g=!1};
var cg=new Oe(function(){return new bg},function(a){a.reset()});
function dg(a,b,c){var d=cg.get();d.h=a;d.onRejected=b;d.context=c;return d}
function eg(a){if(a instanceof $f)return a;var b=new $f(w);ag(b,2,a);return b}
function fg(a){return new $f(function(b,c){c(a)})}
$f.prototype.then=function(a,b,c){return gg(this,Pa(a)?a:null,Pa(b)?b:null,c)};
$f.prototype.$goog_Thenable=!0;function hg(a,b){var c=dg(b,b,void 0);c.g=!0;ig(a,c)}
function jg(a,b){return gg(a,null,b,void 0)}
$f.prototype.cancel=function(a){if(0==this.f){var b=new kg(a);Uf(function(){lg(this,b)},this)}};
function lg(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?lg(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):mg(c),ng(c,e,3,b)))}a.h=null}else ag(a,3,b)}
function ig(a,b){a.g||2!=a.f&&3!=a.f||og(a);a.i?a.i.next=b:a.g=b;a.i=b}
function gg(a,b,c,d){var e=dg(null,null,null);e.f=new $f(function(f,g){e.h=b?function(k){try{var l=b.call(d,k);f(l)}catch(m){g(m)}}:f;
e.onRejected=c?function(k){try{var l=c.call(d,k);void 0===l&&k instanceof kg?g(k):f(l)}catch(m){g(m)}}:g});
e.f.h=a;ig(a,e);return e.f}
$f.prototype.u=function(a){this.f=0;ag(this,2,a)};
$f.prototype.C=function(a){this.f=0;ag(this,3,a)};
function ag(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof $f){ig(d,dg(e||w,f||null,a));var g=!0}else{if(d)try{var k=!!d.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)d.then(e,f,a),g=!0;else{if(Qa(d))try{var l=d.then;if(Pa(l)){pg(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.B=c,a.f=b,a.h=null,og(a),3!=b||c instanceof kg||qg(a,c))}}
function pg(a,b,c,d,e){function f(l){k||(k=!0,d.call(e,l))}
function g(l){k||(k=!0,c.call(e,l))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function og(a){a.l||(a.l=!0,Uf(a.D,a))}
function mg(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
$f.prototype.D=function(){for(var a;a=mg(this);)ng(this,a,this.f,this.B);this.l=!1};
function ng(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,rg(b,c,d);else try{b.g?b.h.call(b.context):rg(b,c,d)}catch(e){sg.call(null,e)}Pe(cg,b)}
function rg(a,b,c){2==b?a.h.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function qg(a,b){a.j=!0;Uf(function(){a.j&&sg.call(null,b)})}
var sg=Of;function kg(a){Xa.call(this,a)}
B(kg,Xa);kg.prototype.name="cancel";function tg(a,b){Me.call(this);this.h=a||1;this.f=b||u;this.i=x(this.yf,this);this.j=z()}
B(tg,Me);h=tg.prototype;h.enabled=!1;h.ja=null;h.setInterval=function(a){this.h=a;this.ja&&this.enabled?(this.stop(),this.start()):this.ja&&this.stop()};
h.yf=function(){if(this.enabled){var a=z()-this.j;0<a&&a<.8*this.h?this.ja=this.f.setTimeout(this.i,this.h-a):(this.ja&&(this.f.clearTimeout(this.ja),this.ja=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.ja||(this.ja=this.f.setTimeout(this.i,this.h),this.j=z())};
h.stop=function(){this.enabled=!1;this.ja&&(this.f.clearTimeout(this.ja),this.ja=null)};
h.F=function(){tg.L.F.call(this);this.stop();delete this.f};
function ug(a,b,c){if(Pa(a))c&&(a=x(a,c));else if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:u.setTimeout(a,b||0)}
;function vg(){this.C=new wg;this.h=new Map;this.D=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.f=new tg(this.flushInterval);this.f.g.add("tick",this.B,!1,!1,this)}
vg.prototype.B=function(){var a=this.h.values();a=[].concat(ha(a)).filter(function(b){return b.Ra.size});
a.length&&this.C.flush(a);xg(a);this.j=0;this.f.enabled&&this.f.stop()};
vg.prototype.g=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.h.has(a)||this.h.set(a,new xd(a,c))};
vg.prototype.i=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.u.apply(this,[a,1].concat(ha(c)))};
vg.prototype.u=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.D.has(a)?void 0:this.h.get(a))&&e instanceof xd&&(e.h(b,d),this.f.enabled||this.f.start(),this.j++,this.j>=this.l&&this.B())};
function xg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function yg(){this.f=zg();this.f.g("/client_streamz/youtube/web/network/one_platform_requests",{La:3,Ka:"request_url"})}
function Ag(){this.f=zg();this.f.g("/client_streamz/youtube/web/network/one_platform_redirects",{La:2,Ka:"response_code"},{La:3,Ka:"request_url"},{La:3,Ka:"response_url"})}
function Bg(a,b,c,d){a.f.i("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)}
function Cg(){this.f=zg();this.f.g("/client_streamz/youtube/web/network/one_platform_request_success",{La:3,Ka:"request_url"})}
function Dg(){this.f=zg();this.f.g("/client_streamz/youtube/web/network/one_platform_request_failed",{La:2,Ka:"response_code"},{La:3,Ka:"request_url"})}
;var Eg=0,Fg=0;function Gg(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));Eg=c;Fg=a}
function Hg(a){var b=0>a?1:0;a=b?-a:a;if(0===a)Fg=0<1/a?0:2147483648,Eg=0;else if(isNaN(a))Fg=2147483647,Eg=4294967295;else if(1.7976931348623157E308<a)Fg=(b<<31|2146435072)>>>0,Eg=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),Fg=(b<<31|a/4294967296)>>>0,Eg=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);Fg=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;Eg=4503599627370496*a>>>0}}
;function Ig(){this.f=[]}
Ig.prototype.length=function(){return this.f.length};
Ig.prototype.end=function(){var a=this.f;this.f=[];return a};
function Jg(a){for(var b=Eg,c=Fg;0<c||127<b;)a.f.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.f.push(b)}
function Kg(a,b){for(;127<b;)a.f.push(b&127|128),b>>>=7;a.f.push(b)}
function Lg(a,b){if(0<=b)Kg(a,b);else{for(var c=0;9>c;c++)a.f.push(b&127|128),b>>=7;a.f.push(1)}}
function Mg(a,b){a.f.push(b>>>0&255);a.f.push(b>>>8&255);a.f.push(b>>>16&255);a.f.push(b>>>24&255)}
;var Ng=uc(),Og=Cd()||D("iPod"),Pg=D("iPad"),Qg=xc(),Rg=wc(),Sg=vc()&&!Dd();var Tg={},Ug=null;
function Vg(a,b){Oa(a);void 0===b&&(b=0);if(!Ug){Ug={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Tg[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===Ug[k]&&(Ug[k]=g)}}}c=Tg[b];d=[];for(e=0;e<a.length;e+=3){var l=a[e],m=(f=e+1<a.length)?a[e+1]:0,n=(g=e+2<a.length)?a[e+2]:0;k=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|n>>6;n&=63;g||(n=64,f||(m=64));d.push(c[k],c[l],c[m]||"",c[n]||"")}return d.join("")}
;function Wg(){this.h=[];this.g=0;this.f=new Ig}
function Xg(a,b){Yg(a,b,2);var c=a.f.end();a.h.push(c);a.g+=c.length;c.push(a.g);return c}
function Zg(a,b){var c=b.pop();for(c=a.g+a.f.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.g++;b.push(c);a.g++}
Wg.prototype.reset=function(){this.h=[];this.f.end();this.g=0};
function Yg(a,b,c){Kg(a.f,8*b+c)}
function $g(a,b,c){null!=c&&(Yg(a,b,1),a=a.f,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Eg=b,Fg=c,Mg(a,Eg),Mg(a,Fg))}
function ah(a,b,c){null!=c&&(Yg(a,b,0),a.f.f.push(c?1:0))}
function bh(a,b,c){if(null!=c){b=Xg(a,b);for(var d=a.f,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.f.push(f);else if(2048>f)d.f.push(f>>6|192),d.f.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var g=c.charCodeAt(e+1);56320<=g&&57343>=g&&(f=1024*(f-55296)+g-56320+65536,d.f.push(f>>18|240),d.f.push(f>>12&63|128),d.f.push(f>>6&63|128),d.f.push(f&63|128),e++)}else d.f.push(f>>12|224),d.f.push(f>>6&63|128),d.f.push(f&63|128)}Zg(a,b)}}
function ch(a,b,c,d){null!=c&&(b=Xg(a,b),d(c,a),Zg(a,b))}
function dh(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=Xg(a,b);d(c[e],a);Zg(a,f)}}
;function fh(){}
var gh="function"==typeof Uint8Array;function hh(a,b,c,d){a.f=null;b||(b=[]);a.B=void 0;a.i=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||gh&&e instanceof Uint8Array)){a.j=b-a.i;a.h=e;break a}}a.j=Number.MAX_VALUE}a.l={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.j?(e+=a.i,a.g[e]=a.g[e]||ih):(jh(a),a.h[e]=a.h[e]||ih);if(d&&d.length)for(b=0;b<d.length;b++)kh(a,d[b])}
var ih=[];function jh(a){var b=a.j+a.i;a.g[b]||(a.h=a.g[b]={})}
function lh(a,b){if(b<a.j){var c=b+a.i,d=a.g[c];return d===ih?a.g[c]=[]:d}if(a.h)return d=a.h[b],d===ih?a.h[b]=[]:d}
function mh(a,b,c){b<a.j?a.g[b+a.i]=c:(jh(a),a.h[b]=c);return a}
function nh(a,b,c,d){(c=kh(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),mh(a,c,void 0));mh(a,b,d)}
function kh(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=lh(a,f);null!=g&&(c=f,d=g,mh(a,f,void 0))}return c?(mh(a,c,d),c):0}
function oh(a,b,c){a.f||(a.f={});if(!a.f[c]){var d=lh(a,c);d&&(a.f[c]=new b(d))}return a.f[c]}
function ph(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=lh(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.f[c]=e}b=a.f[c];b==ih&&(b=a.f[c]=[]);return b}
function qh(a,b,c){a.f||(a.f={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=rh(c[e]);a.f[b]=c;mh(a,b,d)}
function sh(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&rh(c[d]);else c&&rh(c)}}
function rh(a){sh(a);return a.g}
fh.prototype.toString=function(){sh(this);return this.g.toString()};
fh.prototype.clone=function(){return new this.constructor(th(rh(this)))};
function th(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?th(d):d)}return b}if(gh&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?th(d):d);return b}
;var uh=window;function vh(){}
;var wh={};function xh(a){this.f=a||{cookie:""}}
h=xh.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Dg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.Lc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Lc:0,path:b,domain:c});return d};
h.ra=function(){return yh(this).keys};
h.fa=function(){return yh(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=yh(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function yh(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var zh=new xh("undefined"==typeof document?null:document);function Ah(a){Bh();return Gc(a,null)}
function Ch(a){Bh();return Wb(a)}
var Bh=w;function Dh(a){var b=Eh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Fh(){var a=[];Dh(function(b){a.push(b)});
return a}
var Eh={Nf:"allow-forms",Of:"allow-modals",Pf:"allow-orientation-lock",Qf:"allow-pointer-lock",Rf:"allow-popups",Sf:"allow-popups-to-escape-sandbox",Tf:"allow-presentation",Uf:"allow-same-origin",Vf:"allow-scripts",Wf:"allow-top-navigation",Xf:"allow-top-navigation-by-user-activation"},Gh=ab(function(){return Fh()});
function Hh(){var a=lf(document,"IFRAME"),b={};C(Gh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ih(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(l){try{k(b.next(l))}catch(m){e(m)}}
function g(l){try{k(b["throw"](l))}catch(m){e(m)}}
function k(l){l.done?d(l.value):(new c(function(m){m(l.value)})).then(f,g)}
k((b=b.apply(a,void 0)).next())})}
;function Jh(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=Jh.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new Jh(this.top,this.right,this.bottom,this.left)};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Kh(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Kh.prototype.clone=function(){return new Kh(this.left,this.top,this.width,this.height)};
Kh.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Kh.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Kh.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lh(a,b,c){if("string"===typeof b)(b=Mh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Mh(c,d);f&&(c.style[f]=e)}}
var Nh={};function Mh(a,b){var c=Nh[b];if(!c){var d=Vc(b);c=d;void 0===a.style[d]&&(d=(Md?"Webkit":Ld?"Moz":G?"ms":Id?"O":null)+Wc(d),void 0!==a.style[d]&&(c=d));Nh[b]=c}return c}
function Oh(a,b){var c=Ze(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ph(a,b){return Oh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Qh(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function Rh(a){if(G&&!be(8))return a.offsetParent;var b=Ze(a),c=Ph(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ph(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Sh(a){for(var b=new Jh(0,Infinity,Infinity,0),c=Xe(a),d=c.f.body,e=c.f.documentElement,f=hf(c.f);a=Rh(a);)if(!(G&&0==a.clientWidth||Md&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ph(a,"overflow")){var g=Th(a),k=new Ue(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=ef(jf(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Th(a){var b=Ze(a),c=new Ue(0,0);var d=b?Ze(b):document;d=!G||be(9)||ff(Xe(d).f)?d.documentElement:d.body;if(a==d)return c;a=Qh(a);b=gf(Xe(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Uh(a){a=Qh(a);return new Ue(a.left,a.top)}
function Vh(a){if(1==a.nodeType)return Uh(a);a=a.changedTouches?a.changedTouches[0]:a;return new Ue(a.clientX,a.clientY)}
function Wh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Xh(a){var b=Yh;if("none"!=Ph(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Yh(a){var b=a.offsetWidth,c=a.offsetHeight,d=Md&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Qh(a),new We(a.right-a.left,a.bottom-a.top)):new We(b,c)}
function Zh(a){var b=Th(a);a=Xh(a);return new Kh(b.x,b.y,a.width,a.height)}
function $h(a){return"rtl"==Ph(a,"direction")}
function ai(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function bi(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?ai(a,c):0}
function ci(a){if(G){var b=bi(a,"paddingLeft"),c=bi(a,"paddingRight"),d=bi(a,"paddingTop");a=bi(a,"paddingBottom");return new Jh(d,c,a,b)}b=Oh(a,"paddingLeft");c=Oh(a,"paddingRight");d=Oh(a,"paddingTop");a=Oh(a,"paddingBottom");return new Jh(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
var di={thin:2,medium:4,thick:6};function ei(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in di?di[c]:ai(a,c)}
function fi(a){if(G&&!be(9)){var b=ei(a,"borderLeft"),c=ei(a,"borderRight"),d=ei(a,"borderTop");a=ei(a,"borderBottom");return new Jh(d,c,a,b)}b=Oh(a,"borderLeftWidth");c=Oh(a,"borderRightWidth");d=Oh(a,"borderTopWidth");a=Oh(a,"borderBottomWidth");return new Jh(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;var gi=(new Date).getTime();function hi(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ii(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var F=e[1],Y=e[2],E=e[3],nk=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var Rd=E^F&(Y^E);var eh=1518500249}else Rd=F^Y^E,eh=1859775393;else 60>r?(Rd=F&Y|E&(F|Y),eh=2400959708):(Rd=F^Y^E,eh=3395469782);Rd=((p<<5|p>>>27)&4294967295)+Rd+nk+eh+t[r]&4294967295;nk=E;E=Y;Y=(F<<30|F>>>2)&4294967295;F=p;p=Rd}e[0]=e[0]+p&4294967295;e[1]=e[1]+
F&4294967295;e[2]=e[2]+Y&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+nk&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],F=0,Y=p.length;F<Y;++F)r.push(p.charCodeAt(F));p=r}t||(t=p.length);r=0;if(0==m)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[m++]=p[r++],n++,64==m)for(m=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var F=24;0<=F;F-=8)p[t++]=e[r]>>F&255;return p}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,Gd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function ji(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],C(d,function(k){e.push(k)}),ki(e.join(" "));
var f=[],g=[];C(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(k){e.push(k)});
a=ki(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ki(a){var b=ii();b.update(a);return b.Gd().toLowerCase()}
;function li(a){var b=hi(String(u.location.href)),c;(c=u.__SAPISID||u.__APISID||u.__OVERRIDE_SID)?c=!0:(c=new xh(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?u.__SAPISID:u.__APISID,c||(c=new xh(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(u.location.href);return d&&c&&b?[b,ji(hi(d),c,a||null)].join(" "):null}return null}
;function mi(){this.g=-1}
;function ni(){this.g=64;this.f=[];this.l=[];this.B=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
B(ni,mi);ni.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function oi(a,b,c){c||(c=0);var d=a.B;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
ni.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)oi(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){oi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){oi(this,e);f=0;break}}this.h=f;this.j+=b}};
ni.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;oi(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function pi(a){hh(this,a,qi,null)}
B(pi,fh);function ri(a){hh(this,a,null,null)}
B(ri,fh);var qi=[1];function si(a,b){var c=ph(a,ri,1);0<c.length&&dh(b,1,c,ti)}
function ti(a,b){var c=lh(a,1);if(null!=c&&null!=c){Yg(b,1,1);var d=b.f;Hg(c);Mg(d,Eg);Mg(d,Fg)}c=lh(a,2);null!=c&&null!=c&&null!=c&&(Yg(b,2,0),d=b.f,Gg(c),Jg(d))}
;function ui(a){hh(this,a,vi,null)}
B(ui,fh);function wi(a){hh(this,a,null,xi)}
B(wi,fh);function yi(a){hh(this,a,null,null)}
B(yi,fh);function zi(a){hh(this,a,null,null)}
B(zi,fh);function Ai(a){hh(this,a,Bi,null)}
B(Ai,fh);function Ci(a){hh(this,a,null,Di)}
B(Ci,fh);function Ei(a){hh(this,a,null,Fi)}
B(Ei,fh);var vi=[3,6,4],xi=[[1,2]];function Gi(a,b){var c=oh(a,yi,1);null!=c&&ch(b,1,c,Hi);c=oh(a,zi,2);null!=c&&ch(b,2,c,Ii)}
function Hi(a,b){var c=lh(a,1);null!=c&&bh(b,1,c);c=lh(a,2);null!=c&&bh(b,2,c);c=lh(a,3);null!=c&&ah(b,3,c)}
function Ii(a,b){var c=lh(a,1);null!=c&&bh(b,1,c);c=lh(a,2);null!=c&&bh(b,2,c);c=lh(a,3);null!=c&&null!=c&&null!=c&&(Yg(b,3,0),Lg(b.f,c));c=lh(a,4);null!=c&&ah(b,4,c)}
var Bi=[1];function Ji(a,b){var c=ph(a,Ci,1);0<c.length&&dh(b,1,c,Ki);c=oh(a,Ei,2);null!=c&&ch(b,2,c,Li)}
var Di=[[1,2,3]];function Ki(a,b){var c=lh(a,1);null!=c&&bh(b,1,c);c=lh(a,2);null!=c&&null!=c&&null!=c&&(Yg(b,2,0),Lg(b.f,c));c=lh(a,3);null!=c&&ah(b,3,c)}
var Fi=[[1,2,3]];function Li(a,b){var c=lh(a,1);if(null!=c&&null!=c&&null!=c){Yg(b,1,0);var d=b.f;Gg(c);Jg(d)}c=lh(a,2);null!=c&&null!=c&&(Yg(b,2,1),d=b.f,Hg(c),Mg(d,Eg),Mg(d,Fg));c=oh(a,pi,3);null!=c&&ch(b,3,c,si)}
;function Mi(){this.g=[];this.f=-1}
Mi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Mi.prototype.get=function(a){return!!this.g[a]};
function Ni(a){-1==a.f&&(a.f=fb(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;Lb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Oi(a,b,c){yd.call(this);this.f=null;this.i=!1;this.l=a;this.j=c;this.g=b||window;this.h=x(this.Sd,this)}
B(Oi,yd);h=Oi.prototype;h.start=function(){this.stop();this.i=!1;var a=Pi(this),b=Qi(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.f=ze(this.g,"MozBeforePaint",this.h),this.g.mozRequestAnimationFrame(null),this.i=!0):this.f=a&&b?a.call(this.g,this.h):this.g.setTimeout($a(this.h),20)};
h.stop=function(){if(this.isActive()){var a=Pi(this),b=Qi(this);a&&!b&&this.g.mozRequestAnimationFrame?Ie(this.f):a&&b?b.call(this.g,this.f):this.g.clearTimeout(this.f)}this.f=null};
h.isActive=function(){return null!=this.f};
h.Sd=function(){this.i&&this.f&&Ie(this.f);this.f=null;this.l.call(this.j,z())};
h.F=function(){this.stop();Oi.L.F.call(this)};
function Pi(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function Qi(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null}
;function Ri(a,b,c){yd.call(this);this.f=a;this.i=b||0;this.g=c;this.h=x(this.Bc,this)}
B(Ri,yd);h=Ri.prototype;h.jb=0;h.F=function(){Ri.L.F.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.jb=ug(this.h,void 0!==a?a:this.i)};
h.stop=function(){this.isActive()&&u.clearTimeout(this.jb);this.jb=0};
h.isActive=function(){return 0!=this.jb};
h.Bc=function(){this.jb=0;this.f&&this.f.call(this.g)};function Si(a,b,c){yd.call(this);this.l=null!=c?a.bind(c):a;this.j=b;this.i=null;this.g=!1;this.h=0;this.f=null}
pa(Si,yd);h=Si.prototype;h.we=function(a){this.i=arguments;this.f||this.h?this.g=!0:Ti(this)};
h.stop=function(){this.f&&(u.clearTimeout(this.f),this.f=null,this.g=!1,this.i=null)};
h.pause=function(){this.h++};
h.resume=function(){this.h--;this.h||!this.g||this.f||(this.g=!1,Ti(this))};
h.F=function(){yd.prototype.F.call(this);this.stop()};
function Ti(a){a.f=ug(function(){a.f=null;a.g&&!a.h&&(a.g=!1,Ti(a))},a.j);
var b=a.i;a.i=null;a.l.apply(null,b)}
;var Ui="StopIteration"in u?u.StopIteration:{message:"StopIteration",stack:""};function Vi(){}
Vi.prototype.next=function(){throw Ui;};
Vi.prototype.ua=function(){return this};
function Wi(a){if(a instanceof Vi)return a;if("function"==typeof a.ua)return a.ua(!1);if(Oa(a)){var b=0,c=new Vi;c.next=function(){for(;;){if(b>=a.length)throw Ui;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Xi(a,b,c){if(Oa(a))try{C(a,b,c)}catch(d){if(d!==Ui)throw d;}else{a=Wi(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Ui)throw d;}}}
function Yi(a){if(Oa(a))return qb(a);a=Wi(a);var b=[];Xi(a,function(c){b.push(c)});
return b}
;function Zi(a,b){this.g={};this.f=[];this.Ga=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Zi)for(c=a.ra(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=Zi.prototype;h.fa=function(){$i(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.ra=function(){$i(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||aj;$i(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function aj(a,b){return a===b}
h.isEmpty=function(){return 0==this.h};
h.clear=function(){this.g={};this.Ga=this.h=this.f.length=0};
h.remove=function(a){return bj(this.g,a)?(delete this.g[a],this.h--,this.Ga++,this.f.length>2*this.h&&$i(this),!0):!1};
function $i(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];bj(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],bj(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return bj(this.g,a)?this.g[a]:b};
h.set=function(a,b){bj(this.g,a)||(this.h++,this.f.push(a),this.Ga++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new Zi(this)};
h.ua=function(a){$i(this);var b=0,c=this.Ga,d=this,e=new Vi;e.next=function(){if(c!=d.Ga)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ui;var f=d.f[b++];return a?f:d.g[f]};
return e};
function bj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function cj(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function dj(a){return a.classList?a.classList:cj(a).match(/\S+/g)||[]}
function ej(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function J(a,b){return a.classList?a.classList.contains(b):kb(dj(a),b)}
function K(a,b){if(a.classList)a.classList.add(b);else if(!J(a,b)){var c=cj(a);ej(a,c+(0<c.length?" "+b:b))}}
function fj(a,b){if(a.classList)C(b,function(f){K(a,f)});
else{var c={};C(dj(a),function(f){c[f]=!0});
C(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;ej(a,d)}}
function L(a,b){a.classList?a.classList.remove(b):J(a,b)&&ej(a,db(dj(a),function(c){return c!=b}).join(" "))}
function gj(a,b){a.classList?C(b,function(c){L(a,c)}):ej(a,db(dj(a),function(c){return!kb(b,c)}).join(" "))}
function hj(a,b,c){c?K(a,b):L(a,b)}
function ij(a,b,c){J(a,b)&&(L(a,b),K(a,c))}
function jj(a,b){var c=!J(a,b);hj(a,b,c)}
;var kj=!G&&!vc();function lj(a,b){if(/-[a-z]/.test(b))return null;if(kj&&a.dataset){if(xc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function mj(a,b,c){for(var d=a.elements,e,f=0;e=d.item(f);f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=nj(e);if(null!=e)for(var k,l=0;k=e[l];l++)c(b,g,k);break;default:k=nj(e),null!=k&&c(b,g,k)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(g=e.name,c(b,g,e.value),c(b,g+".x","0"),c(b,g+".y","0"))}
function oj(a,b,c){var d=a.get(b);d||(d=[],a.set(b,d));d.push(c)}
function pj(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function nj(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function qj(a){yd.call(this);this.g=a;this.f={}}
B(qj,yd);var rj=[];function sj(a,b,c,d){Array.isArray(c)||(c&&(rj[0]=c.toString()),c=rj);for(var e=0;e<c.length;e++){var f=ze(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function tj(a){wb(a.f,function(b,c){this.f.hasOwnProperty(c)&&Ie(b)},a);
a.f={}}
qj.prototype.F=function(){qj.L.F.call(this);tj(this)};
qj.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function uj(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function vj(a){var b=[];wj(new xj,a,b);return b.join("")}
function xj(){}
function wj(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wj(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yj(d,c),c.push(":"),wj(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yj(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var zj={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Aj=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yj(a,b){b.push('"',a.replace(Aj,function(c){var d=zj[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),zj[c]=d);return d}),'"')}
;function Bj(a){if(u.JSON)try{return u.JSON.parse(a)}catch(b){}return uj(a)}
;function Cj(){}
Cj.prototype.stringify=function(a){return u.JSON.stringify(a,void 0)};
Cj.prototype.parse=function(a){return u.JSON.parse(a,void 0)};function Dj(){}
Dj.prototype.f=null;Dj.prototype.getOptions=function(){var a;(a=this.f)||(a={},Ej(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Fj;function Gj(){}
B(Gj,Dj);function Hj(a){return(a=Ej(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ej(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Fj=new Gj;function Ij(a,b,c,d){this.f=a;this.h=b;this.D=c;this.B=d||1;this.j=45E3;this.i=new qj(this);this.g=new tg;this.g.setInterval(250)}
h=Ij.prototype;h.Ma=null;h.ma=!1;h.bb=null;h.cc=null;h.Ya=null;h.Za=null;h.ya=null;h.Fa=null;h.Pa=null;h.S=null;h.qb=0;h.na=null;h.Hb=null;h.Ea=null;h.lb=-1;h.nd=!0;h.Ha=!1;h.Pb=0;h.Db=null;var Jj={},Kj={};h=Ij.prototype;h.setTimeout=function(a){this.j=a};
function Lj(a,b,c){a.Za=1;a.ya=Mj(b.clone());a.Pa=c;a.l=!0;Nj(a,null)}
function Oj(a,b,c,d,e){a.Za=1;a.ya=Mj(b.clone());a.Pa=null;a.l=c;e&&(a.nd=!1);Nj(a,d)}
function Nj(a,b){a.Ya=z();Pj(a);a.Fa=a.ya.clone();Qj(a.Fa,"t",a.B);a.qb=0;a.S=a.f.Lb(a.f.pb()?b:null);0<a.Pb&&(a.Db=new Si(x(a.td,a,a.S),a.Pb));sj(a.i,a.S,"readystatechange",a.kf);var c=a.Ma?Hb(a.Ma):{};a.Pa?(a.Hb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.S.send(a.Fa,a.Hb,a.Pa,c)):(a.Hb="GET",a.nd&&!Md&&(c.Connection="close"),a.S.send(a.Fa,a.Hb,null,c));a.f.la(1)}
h.kf=function(a){a=a.target;var b=this.Db;b&&3==Rj(a)?b.we():this.td(a)};
h.td=function(a){try{if(a==this.S)a:{var b=Rj(this.S),c=this.S.l,d=this.S.getStatus();if(G&&!be(10)||Md&&!ae("420+")){if(4>b)break a}else if(3>b||3==b&&!Id&&!Sj(this.S))break a;this.Ha||4!=b||7==c||(8==c||0>=d?this.f.la(3):this.f.la(2));Tj(this);var e=this.S.getStatus();this.lb=e;var f=Sj(this.S);(this.ma=200==e)?(4==b&&Uj(this),this.l?(Vj(this,b,f),Id&&this.ma&&3==b&&(sj(this.i,this.g,"tick",this.jf),this.g.start())):Wj(this,f),this.ma&&!this.Ha&&(4==b?this.f.Bb(this):(this.ma=!1,Pj(this)))):(400==
e&&0<f.indexOf("Unknown SID")?(this.Ea=3,Xj(13)):(this.Ea=0,Xj(14)),Uj(this),Yj(this))}}catch(g){this.S&&Sj(this.S)}finally{}};
function Vj(a,b,c){for(var d=!0;!a.Ha&&a.qb<c.length;){var e=Zj(a,c);if(e==Kj){4==b&&(a.Ea=4,Xj(15),d=!1);break}else if(e==Jj){a.Ea=4;Xj(16);d=!1;break}else Wj(a,e)}4==b&&0==c.length&&(a.Ea=1,Xj(17),d=!1);a.ma=a.ma&&d;d||(Uj(a),Yj(a))}
h.jf=function(){var a=Rj(this.S),b=Sj(this.S);this.qb<b.length&&(Tj(this),Vj(this,a,b),this.ma&&4!=a&&Pj(this))};
function Zj(a,b){var c=a.qb,d=b.indexOf("\n",c);if(-1==d)return Kj;c=Number(b.substring(c,d));if(isNaN(c))return Jj;d+=1;if(d+c>b.length)return Kj;var e=b.substr(d,c);a.qb=d+c;return e}
function ak(a,b){a.Ya=z();Pj(a);var c=b?window.location.hostname:"";a.Fa=a.ya.clone();bk(a.Fa,"DOMAIN",c);bk(a.Fa,"t",a.B);try{a.na=new ActiveXObject("htmlfile")}catch(m){Uj(a);a.Ea=7;Xj(22);Yj(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Tc)g=Tc[k];else if(k in Sc)g=Tc[k]=Sc[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Tc[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=Jc(new Ob(Pb,"b/12014412"),d+"</body></html>");a.na.open();a.na.write(Ac(c));a.na.close();a.na.parentWindow.m=x(a.df,a);a.na.parentWindow.d=x(a.hd,a,!0);a.na.parentWindow.rpcClose=x(a.hd,a,!1);c=a.na.createElement("DIV");a.na.parentWindow.document.body.appendChild(c);d=oc(a.Fa.toString())||qc;d=Rc(kc(d));d=Jc(new Ob(Pb,"b/12014412"),'<iframe src="'+d+'"></iframe>');Lc(c,d);a.f.la(1)}
h.df=function(a){ck(x(this.cf,this,a),0)};
h.cf=function(a){this.Ha||(Tj(this),Wj(this,a),Pj(this))};
h.hd=function(a){ck(x(this.bf,this,a),0)};
h.bf=function(a){this.Ha||(Uj(this),this.ma=a,this.f.Bb(this),this.f.la(4))};
h.cancel=function(){this.Ha=!0;Uj(this)};
function Pj(a){a.cc=z()+a.j;dk(a,a.j)}
function dk(a,b){if(null!=a.bb)throw Error("WatchDog timer not null");a.bb=ck(x(a.ef,a),b)}
function Tj(a){a.bb&&(u.clearTimeout(a.bb),a.bb=null)}
h.ef=function(){this.bb=null;var a=z();0<=a-this.cc?(2!=this.Za&&this.f.la(3),Uj(this),this.Ea=2,Xj(18),Yj(this)):dk(this,this.cc-a)};
function Yj(a){a.f.Gc()||a.Ha||a.f.Bb(a)}
function Uj(a){Tj(a);Ad(a.Db);a.Db=null;a.g.stop();tj(a.i);if(a.S){var b=a.S;a.S=null;b.abort();b.dispose()}a.na&&(a.na=null)}
h.getLastError=function(){return this.Ea};
function Wj(a,b){try{a.f.bd(a,b),a.f.la(4)}catch(c){}}
;function ek(a){if(a.fa&&"function"==typeof a.fa)return a.fa();if("string"===typeof a)return a.split("");if(Oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ab(a)}
function fk(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Oa(a)||"string"===typeof a)C(a,b,c);else{if(a.ra&&"function"==typeof a.ra)var d=a.ra();else if(a.fa&&"function"==typeof a.fa)d=void 0;else if(Oa(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Bb(a);e=ek(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function gk(a,b){this.g=this.D=this.i="";this.B=null;this.j=this.f="";this.l=!1;var c;a instanceof gk?(this.l=void 0!==b?b:a.l,hk(this,a.i),this.D=a.D,ik(this,a.g),jk(this,a.B),this.f=a.f,kk(this,a.h.clone()),this.j=a.j):a&&(c=String(a).match(Xc))?(this.l=!!b,hk(this,c[1]||"",!0),this.D=lk(c[2]||""),ik(this,c[3]||"",!0),jk(this,c[4]),this.f=lk(c[5]||"",!0),kk(this,c[6]||"",!0),this.j=lk(c[7]||"")):(this.l=!!b,this.h=new mk(null,this.l))}
gk.prototype.toString=function(){var a=[],b=this.i;b&&a.push(ok(b,pk,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.D)&&a.push(ok(b,pk,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.B,null!=c&&a.push(":",String(c));if(c=this.f)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(ok(c,"/"==c.charAt(0)?qk:rk,!0));(c=this.h.toString())&&a.push("?",c);(c=this.j)&&a.push("#",ok(c,sk));return a.join("")};
gk.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?hk(b,a.i):c=!!a.D;c?b.D=a.D:c=!!a.g;c?ik(b,a.g):c=null!=a.B;var d=a.f;if(c)jk(b,a.B);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.g&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.h.toString();c?kk(b,a.h.clone()):c=!!a.j;c&&(b.j=a.j);return b};
gk.prototype.clone=function(){return new gk(this)};
function hk(a,b,c){a.i=c?lk(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function ik(a,b,c){a.g=c?lk(b,!0):b}
function jk(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.B=b}else a.B=null}
function kk(a,b,c){b instanceof mk?(a.h=b,tk(a.h,a.l)):(c||(b=ok(b,uk)),a.h=new mk(b,a.l))}
function bk(a,b,c){a.h.set(b,c)}
function Qj(a,b,c){Array.isArray(c)||(c=[String(c)]);vk(a.h,b,c)}
function Mj(a){bk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^z()).toString(36));return a}
function wk(a){return a instanceof gk?a.clone():new gk(a,void 0)}
function xk(a,b,c,d){var e=new gk(null,void 0);a&&hk(e,a);b&&ik(e,b);c&&jk(e,c);d&&(e.f=d);return e}
function lk(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ok(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,yk),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function yk(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var pk=/[#\/\?@]/g,rk=/[#\?:]/g,qk=/[#\?]/g,uk=/[#\?@]/g,sk=/#/g;function mk(a,b){this.g=this.f=null;this.h=a||null;this.i=!!b}
function zk(a){a.f||(a.f=new Zi,a.g=0,a.h&&cd(a.h,function(b,c){a.add(Qc(b),c)}))}
h=mk.prototype;h.add=function(a,b){zk(this);this.h=null;a=Ak(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){zk(this);a=Ak(this,a);return bj(this.f.g,a)?(this.h=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.h=null;this.g=0};
h.isEmpty=function(){zk(this);return 0==this.g};
function Bk(a,b){zk(a);b=Ak(a,b);return bj(a.f.g,b)}
h.forEach=function(a,b){zk(this);this.f.forEach(function(c,d){C(c,function(e){a.call(b,e,d,this)},this)},this)};
h.ra=function(){zk(this);for(var a=this.f.fa(),b=this.f.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.fa=function(a){zk(this);var b=[];if("string"===typeof a)Bk(this,a)&&(b=pb(b,this.f.get(Ak(this,a))));else{a=this.f.fa();for(var c=0;c<a.length;c++)b=pb(b,a[c])}return b};
h.set=function(a,b){zk(this);this.h=null;a=Ak(this,a);Bk(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.fa(a);return 0<c.length?String(c[0]):b};
function vk(a,b,c){a.remove(b);0<c.length&&(a.h=null,a.f.set(Ak(a,b),qb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.h)return this.h;if(!this.f)return"";for(var a=[],b=this.f.ra(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.fa(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};
h.clone=function(){var a=new mk;a.h=this.h;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function Ak(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function tk(a,b){b&&!a.i&&(zk(a),a.h=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),vk(this,e,c))},a));
a.i=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)fk(arguments[b],function(c,d){this.add(d,c)},this)};function Ck(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Dk(a,b,function(g){g?c(!0):u.setTimeout(function(){Ck(a,b,c,d,f)},f)})}}
function Dk(a,b,c){var d=new Image;d.onload=function(){try{Ek(d),c(!0)}catch(e){}};
d.onerror=function(){try{Ek(d),c(!1)}catch(e){}};
d.onabort=function(){try{Ek(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Ek(d),c(!1)}catch(e){}};
u.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Nc(d,a)}
function Ek(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Fk(a){this.f=a;this.g=new Cj}
h=Fk.prototype;h.Nb=null;h.aa=null;h.Eb=!1;h.rd=null;h.ub=null;h.Sb=null;h.Ob=null;h.ga=null;h.wa=-1;h.kb=null;h.fb=null;h.connect=function(a){this.Ob=a;a=Gk(this.f,null,this.Ob);Xj(3);this.rd=z();var b=this.f.D;null!=b?(this.kb=b[0],(this.fb=b[1])?(this.ga=1,Hk(this)):(this.ga=2,Ik(this))):(Qj(a,"MODE","init"),this.aa=new Ij(this,void 0,void 0,void 0),this.aa.Ma=this.Nb,Oj(this.aa,a,!1,null,!0),this.ga=0)};
function Hk(a){var b=Gk(a.f,a.fb,"/mail/images/cleardot.gif");Mj(b);Ck(b.toString(),5E3,x(a.Ed,a),3,2E3);a.la(1)}
h.Ed=function(a){if(a)this.ga=2,Ik(this);else{Xj(4);var b=this.f;b.sa=b.za.wa;Jk(b,9)}a&&this.la(2)};
function Ik(a){var b=a.f.u;if(null!=b)Xj(5),b?(Xj(11),Kk(a.f,a,!1)):(Xj(12),Kk(a.f,a,!0));else if(a.aa=new Ij(a,void 0,void 0,void 0),a.aa.Ma=a.Nb,b=a.f,b=Gk(b,b.pb()?a.kb:null,a.Ob),Xj(5),!G||be(10))Qj(b,"TYPE","xmlhttp"),Oj(a.aa,b,!1,a.kb,!1);else{Qj(b,"TYPE","html");var c=a.aa;a=!!a.kb;c.Za=3;c.ya=Mj(b.clone());ak(c,a)}}
h.Lb=function(a){return this.f.Lb(a)};
h.abort=function(){this.aa&&(this.aa.cancel(),this.aa=null);this.wa=-1};
h.Gc=function(){return!1};
h.bd=function(a,b){this.wa=a.lb;if(0==this.ga)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.sa=this.wa;Jk(c,2);return}this.kb=c[0];this.fb=c[1]}else c=this.f,c.sa=this.wa,Jk(c,2);else if(2==this.ga)if(this.Eb)Xj(7),this.Sb=z();else if("11111"==b){if(Xj(6),this.Eb=!0,this.ub=z(),c=this.ub-this.rd,!G||be(10)||500>c)this.wa=200,this.aa.cancel(),Xj(12),Kk(this.f,this,!0)}else Xj(8),this.ub=this.Sb=z(),this.Eb=!1};
h.Bb=function(){this.wa=this.aa.lb;if(this.aa.ma)0==this.ga?this.fb?(this.ga=1,Hk(this)):(this.ga=2,Ik(this)):2==this.ga&&((!G||be(10)?!this.Eb:200>this.Sb-this.ub)?(Xj(11),Kk(this.f,this,!1)):(Xj(12),Kk(this.f,this,!0)));else{0==this.ga?Xj(9):2==this.ga&&Xj(10);var a=this.f;this.aa.getLastError();a.sa=this.wa;Jk(a,2)}};
h.pb=function(){return this.f.pb()};
h.isActive=function(){return this.f.isActive()};
h.la=function(a){this.f.la(a)};function Lk(a){Me.call(this);this.headers=new Zi;this.P=a||null;this.h=!1;this.O=this.f=null;this.oa=this.H="";this.l=0;this.i="";this.j=this.Y=this.C=this.U=!1;this.u=0;this.J=null;this.ta="";this.M=this.ia=!1}
B(Lk,Me);var Mk=/^https?$/i,Nk=["POST","PUT"];h=Lk.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.i="";this.l=0;this.oa=b;this.U=!1;this.h=!0;this.f=this.P?Hj(this.P):Hj(Fj);this.O=this.P?this.P.getOptions():Fj.getOptions();this.f.onreadystatechange=x(this.Zc,this);try{vh(Ok(this,"Opening Xhr")),this.Y=!0,this.f.open(b,String(a),!0),this.Y=!1}catch(f){vh(Ok(this,"Error opening Xhr: "+f.message));Pk(this,f);return}a=c||"";var e=this.headers.clone();
d&&fk(d,function(f,g){e.set(g,f)});
d=ib(e.ra(),Qk);c=u.FormData&&a instanceof u.FormData;!kb(Nk,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.ta&&(this.f.responseType=this.ta);"withCredentials"in this.f&&this.f.withCredentials!==this.ia&&(this.f.withCredentials=this.ia);try{Rk(this),0<this.u&&(this.M=Sk(this.f),vh(Ok(this,"Will abort after "+this.u+"ms if incomplete, xhr2 "+this.M)),this.M?(this.f.timeout=this.u,this.f.ontimeout=x(this.Cc,this)):this.J=ug(this.Cc,this.u,this)),vh(Ok(this,"Sending request")),this.C=!0,this.f.send(a),this.C=!1}catch(f){vh(Ok(this,"Send error: "+f.message)),Pk(this,f)}};
function Sk(a){return G&&ae(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function Qk(a){return"content-type"==a.toLowerCase()}
h.Cc=function(){"undefined"!=typeof Ia&&this.f&&(this.i="Timed out after "+this.u+"ms, aborting",this.l=8,Ok(this,this.i),this.dispatchEvent("timeout"),this.abort(8))};
function Pk(a,b){a.h=!1;a.f&&(a.j=!0,a.f.abort(),a.j=!1);a.i=b;a.l=5;Tk(a);Uk(a)}
function Tk(a){a.U||(a.U=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.h&&(Ok(this,"Aborting"),this.h=!1,this.j=!0,this.f.abort(),this.j=!1,this.l=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Uk(this))};
h.F=function(){this.f&&(this.h&&(this.h=!1,this.j=!0,this.f.abort(),this.j=!1),Uk(this,!0));Lk.L.F.call(this)};
h.Zc=function(){this.K()||(this.Y||this.C||this.j?Vk(this):this.Ue())};
h.Ue=function(){Vk(this)};
function Vk(a){if(a.h&&"undefined"!=typeof Ia)if(a.O[1]&&4==Rj(a)&&2==a.getStatus())Ok(a,"Local request error detected and ignored");else if(a.C&&4==Rj(a))ug(a.Zc,0,a);else if(a.dispatchEvent("readystatechange"),4==Rj(a)){Ok(a,"Request complete");a.h=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Zc(1,String(a.H));if(!f&&u.self&&u.self.location){var g=u.self.location.protocol;
f=g.substr(0,g.length-1)}e=!Mk.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.l=6;try{var k=2<Rj(a)?a.f.statusText:""}catch(l){k=""}a.i=k+" ["+a.getStatus()+"]";Tk(a)}}finally{Uk(a)}}}
function Uk(a,b){if(a.f){Rk(a);var c=a.f,d=a.O[0]?w:null;a.f=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function Rk(a){a.f&&a.M&&(a.f.ontimeout=null);a.J&&(u.clearTimeout(a.J),a.J=null)}
h.isActive=function(){return!!this.f};
function Rj(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<Rj(this)?this.f.status:-1}catch(a){return-1}};
function Sj(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return"string"===typeof this.i?this.i:String(this.i)};
function Ok(a,b){return b+" ["+a.oa+" "+a.H+" "+a.getStatus()+"]"}
;function Wk(a,b,c){this.f=1;this.g=[];this.i=[];this.j=new Cj;this.D=a||null;this.u=null!=b?b:null;this.l=c||!1}
function Xk(a,b){this.f=a;this.map=b;this.context=null}
h=Wk.prototype;h.hb=null;h.Z=null;h.R=null;h.Mb=null;h.wb=null;h.fc=null;h.xb=null;h.mb=0;h.ze=0;h.V=null;h.Ca=null;h.va=null;h.Ja=null;h.za=null;h.Gb=null;h.Va=-1;h.Kc=-1;h.sa=-1;h.Ta=0;h.Qa=0;h.Ia=8;var Yk=new Me;function Zk(a){Bd.call(this,"statevent",a)}
B(Zk,Bd);function $k(a,b){Bd.call(this,"timingevent",a);this.size=b}
B($k,Bd);function al(a){Bd.call(this,"serverreachability",a)}
B(al,Bd);h=Wk.prototype;h.connect=function(a,b,c,d,e){Xj(0);this.Mb=b;this.hb=c||{};d&&void 0!==e&&(this.hb.OSID=d,this.hb.OAID=e);this.l?(ck(x(this.tc,this,a),100),bl(this)):this.tc(a)};
function cl(a){dl(a);if(3==a.f){var b=a.mb++,c=a.wb.clone();bk(c,"SID",a.h);bk(c,"RID",b);bk(c,"TYPE","terminate");el(a,c);b=new Ij(a,a.h,b,void 0);b.Za=2;b.ya=Mj(c.clone());Nc(new Image,b.ya.toString());b.Ya=z();Pj(b)}fl(a)}
h.tc=function(a){this.za=new Fk(this);this.za.Nb=null;this.za.g=this.j;this.za.connect(a)};
function bl(a){a.Hd(1,0);a.wb=Gk(a,null,a.Mb);gl(a)}
function dl(a){a.za&&(a.za.abort(),a.za=null);a.R&&(a.R.cancel(),a.R=null);a.va&&(u.clearTimeout(a.va),a.va=null);hl(a);a.Z&&(a.Z.cancel(),a.Z=null);a.Ca&&(u.clearTimeout(a.Ca),a.Ca=null)}
function il(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new Xk(a.ze++,b));2!=a.f&&3!=a.f||gl(a)}
h.Gc=function(){return 0==this.f};
function gl(a){a.Z||a.Ca||(a.Ca=ck(x(a.fd,a),0),a.Ta=0)}
h.fd=function(a){this.Ca=null;jl(this,a)};
function jl(a,b){if(1==a.f){if(!b){a.mb=Math.floor(1E5*Math.random());var c=a.mb++,d=new Ij(a,"",c,void 0);d.Ma=null;var e=kl(a),f=a.wb.clone();bk(f,"RID",c);bk(f,"CVER","1");el(a,f);Lj(d,f,e);a.Z=d;a.f=2}}else 3==a.f&&(b?ll(a,b):0==a.g.length||a.Z||ll(a))}
function ll(a,b){if(b)if(6<a.Ia){a.g=a.i.concat(a.g);a.i.length=0;var c=a.mb-1;var d=kl(a)}else c=b.D,d=b.Pa;else c=a.mb++,d=kl(a);var e=a.wb.clone();bk(e,"SID",a.h);bk(e,"RID",c);bk(e,"AID",a.Va);el(a,e);c=new Ij(a,a.h,c,a.Ta+1);c.Ma=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Z=c;Lj(c,e,d)}
function el(a,b){if(a.V){var c=a.V.wc();c&&wb(c,function(d,e){bk(b,e,d)})}}
function kl(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Ia&&0<b){var d=a.g[0].f;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].f,g=a.g[e].map;f=6>=a.Ia?e:f-d;try{wb(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.g.splice(0,b));
return c.join("&")}
function ml(a){a.R||a.va||(a.B=1,a.va=ck(x(a.ed,a),0),a.Qa=0)}
function nl(a){if(a.R||a.va||3<=a.Qa)return!1;a.B++;a.va=ck(x(a.ed,a),ol(a,a.Qa));a.Qa++;return!0}
h.ed=function(){this.va=null;this.R=new Ij(this,this.h,"rpc",this.B);this.R.Ma=null;this.R.Pb=0;var a=this.fc.clone();bk(a,"RID","rpc");bk(a,"SID",this.h);bk(a,"CI",this.Gb?"0":"1");bk(a,"AID",this.Va);el(this,a);if(!G||be(10))bk(a,"TYPE","xmlhttp"),Oj(this.R,a,!0,this.xb,!1);else{bk(a,"TYPE","html");var b=this.R,c=!!this.xb;b.Za=3;b.ya=Mj(a.clone());ak(b,c)}};
function Kk(a,b,c){a.Gb=c;a.sa=b.wa;a.l||bl(a)}
h.bd=function(a,b){if(0!=this.f&&(this.R==a||this.Z==a))if(this.sa=a.lb,this.Z==a&&3==this.f)if(7<this.Ia){try{var c=this.j.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.va){if(this.R)if(this.R.Ya+3E3<this.Z.Ya)hl(this),this.R.cancel(),this.R=null;else break a;nl(this);Xj(19)}}else this.Kc=c[1],0<this.Kc-this.Va&&37500>c[2]&&this.Gb&&0==this.Qa&&!this.Ja&&(this.Ja=ck(x(this.Ae,this),6E3));else Jk(this,11)}else b!=wh.ag.f&&Jk(this,11);else if(this.R==a&&hl(this),
!/^[\s\xa0]*$/.test(b)){c=this.j.parse(b);Array.isArray(c);for(var d=0;d<c.length;d++){var e=c[d];this.Va=e[0];e=e[1];2==this.f?"c"==e[0]?(this.h=e[1],this.xb=e[2],e=e[3],null!=e?this.Ia=e:this.Ia=6,this.f=3,this.V&&this.V.lc(),this.fc=Gk(this,this.pb()?this.xb:null,this.Mb),ml(this)):"stop"==e[0]&&Jk(this,7):3==this.f&&("stop"==e[0]?Jk(this,7):"noop"!=e[0]&&this.V&&this.V.kc(e),this.Qa=0)}}};
h.Ae=function(){null!=this.Ja&&(this.Ja=null,this.R.cancel(),this.R=null,nl(this),Xj(20))};
function hl(a){null!=a.Ja&&(u.clearTimeout(a.Ja),a.Ja=null)}
h.Bb=function(a){if(this.R==a){hl(this);this.R=null;var b=2}else if(this.Z==a)this.Z=null,b=1;else return;this.sa=a.lb;if(0!=this.f)if(a.ma)1==b?(b=z()-a.Ya,Yk.dispatchEvent(new $k(Yk,a.Pa?a.Pa.length:0,b,this.Ta)),gl(this),this.i.length=0):ml(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.sa)){if(d=1==b)this.Z||this.Ca||1==this.f||2<=this.Ta?d=!1:(this.Ca=ck(x(this.fd,this,a),ol(this,this.Ta)),this.Ta++,d=!0);d=!(d||2==b&&nl(this))}if(d)switch(c){case 1:Jk(this,5);break;case 4:Jk(this,
10);break;case 3:Jk(this,6);break;case 7:Jk(this,12);break;default:Jk(this,2)}}};
function ol(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.Hd=function(a){if(!kb(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Jk(a,b){if(2==b||9==b){var c=null;a.V&&(c=null);var d=x(a.xf,a);c||(c=new gk("//www.google.com/images/cleardot.gif"),Mj(c));Dk(c.toString(),1E4,d)}else Xj(2);pl(a,b)}
h.xf=function(a){a?Xj(2):(Xj(1),pl(this,8))};
function pl(a,b){a.f=0;a.V&&a.V.jc(b);fl(a);dl(a)}
function fl(a){a.f=0;a.sa=-1;if(a.V)if(0==a.i.length&&0==a.g.length)a.V.Kb();else{qb(a.i);var b=qb(a.g);a.i.length=0;a.g.length=0;a.V.Kb(b)}}
function Gk(a,b,c){var d=wk(c);if(""!=d.g)b&&ik(d,b+"."+d.g),jk(d,d.B);else{var e=window.location;d=xk(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.hb&&wb(a.hb,function(f,g){bk(d,g,f)});
bk(d,"VER",a.Ia);el(a,d);return d}
h.Lb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Lk;a.ia=!1;return a};
h.isActive=function(){return!!this.V&&this.V.isActive(this)};
function ck(a,b){if(!Pa(a))throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},b)}
h.la=function(a){Yk.dispatchEvent(new al(Yk,a))};
function Xj(a){Yk.dispatchEvent(new Zk(Yk,a))}
h.pb=function(){return!(!G||be(10))};
function ql(){}
h=ql.prototype;h.lc=function(){};
h.kc=function(){};
h.jc=function(){};
h.Kb=function(){};
h.wc=function(){return{}};
h.isActive=function(){return!0};var rl=function(){if(Od){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(rc))?a[1]:"0"}return Nd?(a=/10[_.][0-9_.]+/,(a=a.exec(rc))?a[0].replace(/_/g,"."):"10"):Pd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(rc))?a[1]:""):Qd||Sd||Td?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(rc))?a[1].replace(/_/g,"."):""):""}();function sl(a){return(a=a.exec(rc))?a[1]:""}
var tl=function(){if(Ng)return sl(/Firefox\/([0-9.]+)/);if(G||Jd||Id)return $d;if(Rg)return Dd()?sl(/CriOS\/([0-9.]+)/):sl(/Chrome\/([0-9.]+)/);if(Sg&&!Dd())return sl(/Version\/([0-9.]+)/);if(Og||Pg){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(rc);if(a)return a[1]+"."+a[2]}else if(Qg)return(a=sl(/Android\s+([0-9.]+)/))?a:sl(/Version\/([0-9.]+)/);return""}();function ul(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=Ph(k,"position")){var m=Th(k);if(!l){l=$h(k);var n;if(n=l){if(n=Sg)n=0<=fc(tl,10);var p;if(p=Ud)p=0<=fc(rl,10);n=Ld||n||p}l=n?-k.scrollLeft:!l||Kd&&ae("8")||"visible"==Ph(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=Ve(m,new Ue(l,k.scrollTop))}}}k=m||new Ue;m=Zh(a);if(l=Sh(a)){var t=new Kh(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,t.left);
n=Math.min(m.left+m.width,t.left+t.width);l<=n&&(p=Math.max(m.top,t.top),t=Math.min(m.top+m.height,t.top+t.height),p<=t&&(m.left=l,m.top=p,m.width=n-l,m.height=t-p))}l=Xe(a);p=Xe(c);if(l.f!=p.f){n=l.f.body;p=jf(p.f);t=new Ue(0,0);var r=(r=Ze(n))?jf(r):window;if(Fd(r,"parent")){var F=n;do{var Y=r==p?Th(F):Uh(F);t.x+=Y.x;t.y+=Y.y}while(r&&r!=p&&r!=r.parent&&(F=r.frameElement)&&(r=r.parent))}n=Ve(t,Th(n));!G||be(9)||ff(l.f)||(n=Ve(n,gf(l.f)));m.left+=n.x;m.top+=n.y}a=vl(a,b);b=m.left;a&4?b+=m.width:
a&2&&(b+=m.width/2);b=new Ue(b,m.top+(a&1?m.height:0));b=Ve(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var E;g&&(E=Sh(c))&&(E.top-=k.y,E.right-=k.x,E.bottom-=k.y,E.left-=k.x);e=E;E=b.clone();b=vl(c,d);d=Xh(c);a=d.clone();E=E.clone();a=a.clone();k=0;if(f||0!=b)b&4?E.x-=a.width+(f?f.right:0):b&2?E.x-=a.width/2:f&&(E.x+=f.left),b&1?E.y-=a.height+(f?f.bottom:0):f&&(E.y+=f.top);g&&(e?(f=E,b=a,k=0,65==(g&65)&&(f.x<e.left||f.x>=e.right)&&(g&=-2),132==(g&132)&&(f.y<e.top||f.y>=e.bottom)&&(g&=-5),f.x<
e.left&&g&1&&(f.x=e.left,k|=1),g&16&&(m=f.x,f.x<e.left&&(f.x=e.left,k|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,m+b.width-e.left),b.width=Math.max(b.width,0),k|=4)),f.x+b.width>e.right&&g&1&&(f.x=Math.max(e.right-b.width,e.left),k|=1),g&2&&(k|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&g&4&&(f.y=e.top,k|=2),g&32&&(m=f.y,f.y<e.top&&(f.y=e.top,k|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,m+b.height-e.top),b.height=Math.max(b.height,0),k|=8)),f.y+b.height>e.bottom&&
g&4&&(f.y=Math.max(e.bottom-b.height,e.top),k|=2),g&8&&(k|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),g=k):g=256,k=g);f=new Kh(0,0,0,0);f.left=E.x;f.top=E.y;f.width=a.width;f.height=a.height;g=k;g&496||(E=new Ue(f.left,f.top),E instanceof Ue?(e=E.x,E=E.y):(e=E,E=void 0),c.style.left=Wh(e,!1),c.style.top=Wh(E,!1),a=new We(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,d=Ze(c),e=ff(Xe(d).f),!G||ae("10")||e&&ae("8")?(c=c.style,Ld?c.MozBoxSizing="border-box":Md?c.WebkitBoxSizing=
"border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(e=ci(c),c=fi(c),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function vl(a,b){return(b&8&&$h(a)?b^4:b)&-9}
;function wl(a){yd.call(this);this.j=1;this.h=[];this.i=0;this.f=[];this.g={};this.l=!!a}
B(wl,yd);h=wl.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.j=e+3;d.push(e);return e};
function xl(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ha(d),b.apply(void 0,arguments))},a)}
function yl(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=ib(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ha(b)}}
h.ha=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.f[a+1]=w):(c&&mb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.ba=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];zl(this.f[g+1],this.f[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.ha(c)}}return 0!=e}return!1};
function zl(a,b,c){Uf(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.ha,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Al(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Al(a,d);return c}
h.F=function(){wl.L.F.call(this);this.clear();this.h.length=0};function Bl(a){this.f=a}
Bl.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,vj(b))};
Bl.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Bl.prototype.remove=function(a){this.f.remove(a)};function Cl(a){this.f=a}
B(Cl,Bl);function Dl(a){this.data=a}
function El(a){return void 0===a||a instanceof Dl?a:new Dl(a)}
Cl.prototype.set=function(a,b){Cl.L.set.call(this,a,El(b))};
Cl.prototype.g=function(a){a=Cl.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Cl.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Fl(a){this.f=a}
B(Fl,Cl);function Gl(a){var b=a.creation;a=a.expiration;return!!a&&a<z()||!!b&&b>z()}
Fl.prototype.set=function(a,b,c){if(b=El(b)){if(c){if(c<z()){Fl.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}Fl.L.set.call(this,a,b)};
Fl.prototype.g=function(a,b){var c=Fl.L.g.call(this,a);if(c)if(!b&&Gl(c))Fl.prototype.remove.call(this,a);else return c};function Hl(a){this.f=a}
B(Hl,Fl);function Il(a,b){var c=[];Xi(b,function(d){try{var e=Hl.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):Gl(e)&&c.push(d)},a);
return c}
function Jl(a,b){var c=Il(a,b);C(c,function(d){Hl.prototype.remove.call(this,d)},a)}
;function Kl(){}
;function Ll(){}
B(Ll,Kl);Ll.prototype.clear=function(){var a=Yi(this.ua(!0)),b=this;C(a,function(c){b.remove(c)})};function Ml(a){this.f=a}
B(Ml,Ll);h=Ml.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.ua=function(a){var b=0,c=this.f,d=new Vi;d.next=function(){if(b>=c.length)throw Ui;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Nl(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
B(Nl,Ml);function Ol(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
B(Ol,Ml);function Pl(a,b){this.g=a;this.f=null;if(G&&!be(9)){Ql||(Ql=new Zi);this.f=Ql.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ql.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
B(Pl,Ll);var Rl={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ql=null;function Sl(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Rl[b]})}
h=Pl.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(Sl(a),b);Tl(this)};
h.get=function(a){a=this.f.getAttribute(Sl(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(Sl(a));Tl(this)};
h.ua=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Vi;d.next=function(){if(b>=c.length)throw Ui;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Tl(this)};
function Tl(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ul(a,b){this.g=a;this.f=b+"::"}
B(Ul,Ll);Ul.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Ul.prototype.get=function(a){return this.g.get(this.f+a)};
Ul.prototype.remove=function(a){this.g.remove(this.f+a)};
Ul.prototype.ua=function(a){var b=this.g.ua(!0),c=this,d=new Vi;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Vl(a){var b=new Nl;return b.isAvailable()?a?new Ul(b,a):b:null}
;function Wl(){this.f=[];this.g=[]}
Wl.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
Wl.prototype.clear=function(){this.f=[];this.g=[]};
Wl.prototype.remove=function(a){var b=this.f;var c=cb(b,a);0<=c?(nb(b,c),b=!0):b=!1;return b||mb(this.g,a)};
Wl.prototype.fa=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};function Xl(){}
Ma(Xl);Xl.prototype.f=0;function Yl(a){Me.call(this);this.O=a||Xe();this.ia=null;this.Ua=!1;this.i=null;this.f=void 0;this.P=null;this.oa=!1}
B(Yl,Me);h=Yl.prototype;h.he=Xl.getInstance();h.getId=function(){return this.ia||(this.ia=":"+(this.he.f++).toString(36))};
h.qa=function(){return this.i};
function Zl(a,b){return a.i?I(b,a.i||a.O.f):null}
function $l(a){a.f||(a.f=new qj(a));return a.f}
function am(a,b){if(a.Ua)throw Error("Component already rendered");if(b){a.oa=!0;var c=Ze(b);a.O&&a.O.f==c||(a.O=Xe(b));a.i=b;a.Aa()}else throw Error("Invalid element to decorate");}
h.Aa=function(){this.Ua=!0;bm(this,function(a){!a.Ua&&a.qa()&&a.Aa()})};
h.Ba=function(){bm(this,function(a){a.Ua&&a.Ba()});
this.f&&tj(this.f);this.Ua=!1};
h.F=function(){this.Ua&&this.Ba();this.f&&(this.f.dispose(),delete this.f);bm(this,function(a){a.dispose()});
!this.oa&&this.i&&rf(this.i);this.i=this.P=null;Yl.L.F.call(this)};
function bm(a,b){a.P&&C(a.P,b,void 0)}
;var cm=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",cm);function dm(a){var b=arguments,c=cm;1<b.length?c[b[0]]=b[1]:1===b.length&&Object.assign(c,b[0])}
function M(a,b){return a in cm?cm[a]:b}
function em(a){var b=cm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function N(a){a=fm(a);return"string"===typeof a&&"false"===a?!1:!!a}
function gm(a,b){var c=fm(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function fm(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
function hm(){var a=[],b=M("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=M("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function im(a,b,c,d,e,f){zh.set(""+a,b,{Lc:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function jm(a){return zh.get(""+a,void 0)}
function km(a,b,c){return zh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;var lm={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function mm(a,b,c){a&&(a.dataset?a.dataset[nm(b)]=String(c):a.setAttribute("data-"+b,c))}
function O(a,b){return a?a.dataset?a.dataset[nm(b)]:a.getAttribute("data-"+b):null}
function om(a,b){a&&(a.dataset?delete a.dataset[nm(b)]:a.removeAttribute("data-"+b))}
var pm={};function nm(a){return pm[a]||(pm[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var qm=0;function rm(a){var b=a.__yt_uid_key;b||(b=sm(),a.__yt_uid_key=b);return b}
function tm(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?C(a.childNodes,function(c){b.appendChild(tm(c))}):tf(b,a);
return b}
function um(a,b){a=H(a);b=H(b);return!!Mf(a,function(c){return c===b},void 0)}
function vm(a,b,c){a=bf(document,a,b,c);return a.length?a[0]:null}
function wm(a,b){"disabled"in a&&(a.disabled=!b);1==a.nodeType&&hj(a,"disabled",!b);if(a.hasChildNodes())for(var c=0,d;d=a.childNodes[c];++c)d instanceof Element&&wm(d,b)}
function xm(a){a=a.replace(/^[\s\xa0]+/,"");var b=String(a.substr(0,3)).toLowerCase();if(0==("<tr"<b?-1:"<tr"==b?0:1))return a=of(Ah("<table><tbody>"+a+"</tbody></table>")),vm("tr",null,a);b=document.createElement("div");b.innerHTML=a;return vf(b)}
function ym(){hj(document.body,"hide-players",!1);var a=af("preserve-players");C(a,function(b){L(b,"preserve-players")})}
var sm=v("ytDomDomGetNextId")||function(){return++qm};
A("ytDomDomGetNextId",sm);var zm=[];function Am(a){zm.forEach(function(b){return b(a)})}
function Bm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Cm(b),Am(b)}}:a}
function Cm(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),dm("ERRORS",b))}
function Dm(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),dm("ERRORS",b))}
;var Em={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fm(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Em||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Fm.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fm.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fm.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Db=u.ytEventsEventsListeners||{};A("ytEventsEventsListeners",Db);var Gm=u.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Gm);
function Hm(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Cb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Gb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function P(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Hm(a,b,c,d);if(e)return e;e=++Gm.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new Fm(k);if(!Mf(k.relatedTarget,function(l){return l==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new Fm(k);
k.currentTarget=a;return c.call(a,k)};
g=Bm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Im()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Db[e]=[a,b,c,g,d];return e}
function Jm(a,b,c,d){var e=a||document;return P(e,b,function(f){var g=Mf(f.target,function(k){return k===e||d(k)});
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function Km(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in Db){var c=Db[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Im()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Db[b]}}))}
function Lm(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Im=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Mm(a,b,c,d){return Jm(a,b,c,function(e){return J(e,d)})}
function Nm(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Om(a,b,c){var d=void 0===d?{}:d;var e;return e=P(a,b,function(){Km(e);c.apply(a,arguments)},d)}
;function Q(a,b){"function"===typeof a&&(a=Bm(a));return window.setTimeout(a,b)}
function R(a){window.clearTimeout(a)}
;var Pm=u.ytPubsubPubsubInstance||new wl,Qm=u.ytPubsubPubsubSubscribedKeys||{},Rm=u.ytPubsubPubsubTopicToKeys||{},Sm=u.ytPubsubPubsubIsSynchronous||{};function S(a,b,c){var d=Tm();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Qm[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{Sm[a]?g():Q(g,0)}catch(k){Cm(k)}},c);
Qm[e]=!0;Rm[a]||(Rm[a]=[]);Rm[a].push(e);return e}return 0}
function Um(){var a=T.ob,b=T,c=S("yt-ui-dialog-cancelled",function(d){a.apply(b,arguments);Vm(c)},b)}
function Vm(a){var b=Tm();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete Qm[c]}))}
function U(a,b){var c=Tm();c&&c.publish.apply(c,arguments)}
function Wm(a,b){Sm[a]=!0;var c=Tm();c&&c.publish.apply(c,arguments);Sm[a]=!1}
function Xm(a){var b=Tm();if(b)if(b.clear(a),a)Ym(a);else for(var c in Rm)Ym(c)}
function Tm(){return u.ytPubsubPubsubInstance}
function Ym(a){Rm[a]&&(a=Rm[a],C(a,function(b){Qm[b]&&delete Qm[b]}),a.length=0)}
wl.prototype.subscribe=wl.prototype.subscribe;wl.prototype.unsubscribeByKey=wl.prototype.ha;wl.prototype.publish=wl.prototype.ba;wl.prototype.clear=wl.prototype.clear;A("ytPubsubPubsubInstance",Pm);A("ytPubsubPubsubTopicToKeys",Rm);A("ytPubsubPubsubIsSynchronous",Sm);A("ytPubsubPubsubSubscribedKeys",Qm);function Zm(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Qc(e[0]||""),g=Qc(e[1]||"");f in b?Array.isArray(b[f])?rb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};Cm(k)}}}return b}
function $m(a){var b=[];wb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];C(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function an(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zm(a)}
function bn(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),an(1<a.length?a[1]:a[0])):{}}
function cn(a,b){return dn(a,b||{},!0)}
function dn(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=an(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return fd(a,e)+d}
function en(a){if(!b)var b=window.location.href;var c=Zc(1,a),d=$c(a);c&&d?(a=a.match(Xc),b=b.match(Xc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$c(b)==d&&(Number(Zc(4,b))||null)==(Number(Zc(4,a))||null):!0;return a}
;function fn(a){var b=gn;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(hn(b),jn(b));b.ca_type="image";a&&(b.bid=a);return b}
function hn(a){var b={};b.dt=gi;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?uh:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!uh.navigator&&"unknown"!==typeof uh.navigator.javaEnabled&&!!uh.navigator.javaEnabled&&uh.navigator.javaEnabled();uh.screen&&(b.u_h=uh.screen.height,b.u_w=uh.screen.width,b.u_ah=uh.screen.availHeight,b.u_aw=uh.screen.availWidth,b.u_cd=
uh.screen.colorDepth);uh.navigator&&uh.navigator.plugins&&(b.u_nplug=uh.navigator.plugins.length);uh.navigator&&uh.navigator.mimeTypes&&(b.u_nmime=uh.navigator.mimeTypes.length);return b}
function jn(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var k=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var l=ef(c||window).round()}catch(m){l=new We(-12245933,-12245933)}c=l;l={};d=new Mi;u.SVGElement&&u.document.createElementNS&&d.set(0);e=Hh();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);u.crypto&&u.crypto.subtle&&d.set(3);u.TextDecoder&&u.TextEncoder&&d.set(4);d=Ni(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.g;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!uh.WebGLRenderingContext,l}
var gn=new function(){var a=window.document;this.f=window;this.g=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return $m(fn(a))});z();var kn="XMLHttpRequest"in u?function(){return new XMLHttpRequest}:null;
function ln(){if(!kn)return null;var a=kn();return"open"in a?a:null}
;var mn={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},nn="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
on=!1;function pn(a,b){b=void 0===b?{}:b;var c=en(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in mn){var f=M(mn[e]);!f||!c&&$c(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!$c(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!$c(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!$c(a))b["X-YouTube-Ad-Signals"]=$m(fn(void 0));return b}
function qn(a){var b=window.location.search,c=$c(a),d=Yc(Zc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=an(b),f={};C(nn,function(g){e[g]&&(f[g]=e[g])});
return dn(a,f||{},!1)}
function rn(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=sn(a,b);var d=tn(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&R(f);var k=g.ok,l=function(m){m=m||{};var n=b.context||u;k?b.onSuccess&&b.onSuccess.call(n,m,g):b.onError&&b.onError.call(n,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Yc&&0<b.timeout&&(f=Q(function(){e||(e=!0,R(f),b.Yc.call(b.context||u))},b.timeout))}else un(a,b)}
function un(a,b){var c=b.format||"JSON";a=sn(a,b);var d=tn(a,b),e=!1,f=vn(a,function(l){if(!e){e=!0;k&&R(k);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var m=!0;break a;default:m=!1}var n=null,p=400<=l.status&&500>l.status,t=500<=l.status&&600>l.status;if(m||p||t)n=wn(a,c,l,b.tg);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};p=b.context||u;
m?b.onSuccess&&b.onSuccess.call(p,l,n):b.onError&&b.onError.call(p,l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.Oa&&0<b.timeout){var g=b.Oa;var k=Q(function(){e||(e=!0,f.abort(),R(k),g.call(b.context||u,f))},b.timeout)}return f}
function sn(a,b){b.xg&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.ab;d&&(d[c]&&delete d[c],a=cn(a,d));return a}
function tn(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.T,g=M("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.wg||$c(a)&&!b.withCredentials&&$c(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.T&&b.T[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=an(e),Kb(e,f),e=b.kd&&"JSON"==b.kd?JSON.stringify(e):ed(e));f=e||f&&!Eb(f);!on&&f&&"POST"!=b.method&&(on=!0,Cm(Error("AJAX request with postData should use POST")));
return e}
function wn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Dm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?xn(a):null)e={},C(a.getElementsByTagName("*"),function(g){e[g.tagName]=yn(g)})}d&&zn(e);
return e}
function zn(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Jc(new Ob(Pb,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):zn(a[b])}}
function xn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function yn(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function vn(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Bm(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ln();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;N("debug_forward_web_query_parameters")&&(a=qn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pn(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var An=Og||Pg;function Bn(){var a=/WebKit\/([0-9]+)/.exec(rc);return!!(a&&600<=parseInt(a[1],10))}
function Cn(){var a=/WebKit\/([0-9]+)/.exec(rc);return!!(a&&602<=parseInt(a[1],10))}
function Dn(a){var b=rc;return b?0<=b.toLowerCase().indexOf(a):!1}
;var En={},Fn=0;function Gn(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&!Dn("cobalt")?a&&(a=kc(oc(a)||qc),"about:invalid#zClosurez"===a?a="":(a=Ac(Bc(a)).toString(),a=encodeURIComponent(String(vj(a)))),/^[\s\xa0]*$/.test(a)||(a=kf("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),Ze(a).body.appendChild(a))):e?vn(a,b,"POST",e,d):M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?vn(a,b,"GET","",d):Hn(a,b)||In(a,b))}
function Hn(a,b){if(!em("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(em("use_sonic_js_library_for_v4_support")){a:{try{var c=new Za({url:a});if(c.h&&c.g||c.i){var d=Yc(Zc(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==id(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=Yc(Zc(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==id(a,"ae")||"1"!==id(a,"act"))return!1;return Jn(a)?(b&&b(),!0):!1}
function Jn(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function In(a,b){var c=new Image,d=""+Fn++;En[d]=c;c.onload=c.onerror=function(){b&&En[d]&&b();delete En[d]};
c.src=a}
;function Kn(a,b){Gn("/gen_204?"+a,b)}
;function Ln(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",hj(a,"hid",!b))}
function Mn(a){return(a=H(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function Nn(a){if(a=H(a))Mn(a)?(a.style.display="none",K(a,"hid")):(a.style.display="",L(a,"hid"))}
function On(a){C(arguments,function(b){!Oa(b)||b instanceof Element?Ln(b,!0):C(b,function(c){On(c)})})}
function Pn(a){C(arguments,function(b){!Oa(b)||b instanceof Element?Ln(b,!1):C(b,function(c){Pn(c)})})}
function Qn(a){C(arguments,function(b){Oa(b)?C(b,function(c){Qn(c)}):Nn(b)})}
;function Rn(a,b){this.version=a;this.args=b}
;function Sn(a,b){this.topic=a;this.f=b}
Sn.prototype.toString=function(){return this.topic};function Tn(){}
function Un(a,b){return Vn(a,0,b)}
function Wn(a,b){return Vn(a,1,b)}
;function Xn(){}
pa(Xn,Tn);function Vn(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Q(a,c||0)}
Xn.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Xn.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
Ma(Xn);Xn.getInstance();var Yn=v("ytPubsub2Pubsub2Instance")||new wl;wl.prototype.subscribe=wl.prototype.subscribe;wl.prototype.unsubscribeByKey=wl.prototype.ha;wl.prototype.publish=wl.prototype.ba;wl.prototype.clear=wl.prototype.clear;A("ytPubsub2Pubsub2Instance",Yn);var Zn=v("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Zn);var $n=v("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",$n);var ao=v("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",ao);
A("ytPubsub2Pubsub2SkipSubKey",null);function bo(a,b){var c=co();c&&c.publish.call(c,a.toString(),a,b)}
function eo(a,b){var c=co();if(c){var d=c.subscribe(a.toString(),function(e,f){var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Zn[d])try{if(f&&a instanceof Sn&&a!=e)try{var k=a.f,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.Ga){var m=new k;k.Ga=m.version}var n=k.Ga}catch(p){}if(!n||l.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(k,qb(l.args))}catch(p){throw p.message=
"yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+p.message,p;}b.call(window,f)}catch(p){Cm(p)}},ao[a.toString()]?v("yt.scheduler.instance")?Wn(g):Q(g,0):g())});
Zn[d]=!0;$n[a.toString()]||($n[a.toString()]=[]);$n[a.toString()].push(d)}}
function fo(a){var b=co();b&&("number"===typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete Zn[c]}))}
function co(){return v("ytPubsub2Pubsub2Instance")}
;var go={},ho="ontouchstart"in document;function io(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Mf(c,function(e){return J(e,b)},d)}
function jo(a){var b="mouseover"==a.type&&"mouseenter"in go||"mouseout"==a.type&&"mouseleave"in go,c=a.type in go||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=go[b];for(var d in c.g){var e=io(b,d,a.target);e&&!Mf(a.relatedTarget,function(f){return f==e})&&c.ba(d,e,b,a)}}if(b=go[a.type])for(d in b.g)(e=io(a.type,d,a.target))&&b.ba(d,e,a.type,a)}}
P(document,"blur",jo,!0);P(document,"change",jo,!0);P(document,"click",jo);P(document,"focus",jo,!0);P(document,"mouseover",jo);P(document,"mouseout",jo);P(document,"mousedown",jo);P(document,"keydown",jo);P(document,"keyup",jo);P(document,"keypress",jo);P(document,"cut",jo);P(document,"paste",jo);ho&&(P(document,"touchstart",jo),P(document,"touchend",jo),P(document,"touchcancel",jo));function ko(a){this.j=a;this.B={};this.D=[];this.u=[]}
h=ko.prototype;h.da=function(a){return Nf(a,V(this))};
function V(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
h.unregister=function(){Vm(this.D);this.D.length=0;fo(this.u);this.u.length=0};
h.init=w;h.dispose=w;function lo(a,b,c){a.D.push(S(b,c,a))}
function mo(a,b,c,d){d=V(a,d);var e=x(c,a);b in go||(go[b]=new wl);go[b].subscribe(d,e);a.B[c]=e}
function no(a,b,c,d){if(b in go){var e=go[b];yl(e,V(a,d),a.B[c]);0>=Al(e)&&(e.dispose(),delete go[b])}delete a.B[c]}
h.gb=function(a,b,c){var d=this.I(a,b);if(d&&(d=v(d))){var e=tb(arguments,2);sb(e,0,0,a);d.apply(null,e)}};
h.I=function(a,b){return O(a,b)};var oo=window,po=oo.ytcsi&&oo.ytcsi.now?oo.ytcsi.now:oo.performance&&oo.performance.timing&&oo.performance.now&&oo.performance.timing.navigationStart?function(){return oo.performance.timing.navigationStart+oo.performance.now()}:function(){return(new Date).getTime()};var qo=gm("initial_gel_batch_timeout",1E3),ro=Math.pow(2,16)-1,so=null,to=0,uo=void 0,vo=0,wo=0,xo=0,yo=!0,zo=u.ytLoggingTransportLogPayloadsQueue_||{};A("ytLoggingTransportLogPayloadsQueue_",zo);var Ao=u.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Ao);var Bo=u.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Bo);
function Co(){R(vo);R(wo);wo=0;uo&&uo.isReady()?(Do(Ao),"log_event"in zo&&Do(Object.entries(zo.log_event)),Ao.clear(),delete zo.log_event):Eo()}
function Eo(){N("web_gel_timeout_cap")&&!wo&&(wo=Q(Co,6E4));R(vo);var a=M("LOGGING_BATCH_TIMEOUT",gm("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&yo&&(a=qo);vo=Q(Co,a)}
function Do(a){var b=uo,c=Math.round(po());a=q(a);for(var d=a.next();!d.done;d=a.next()){var e=q(d.value);d=e.next().value;var f=e.next().value;e=Ib({context:Fo(b.f||Go())});e.events=f;(f=Bo[d])&&Ho(e,d,f);delete Bo[d];Io(e,c);Jo(b,"log_event",e,{retry:!0,onSuccess:function(){to=Math.round(po()-c)}});
yo=!1}}
function Io(a,b){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=M("EVENT_ID",void 0);if(c){var d=M("BATCH_CLIENT_COUNTER",void 0)||0;!d&&N("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ro/2));d++;d>ro&&(d=1);dm("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;so&&to&&N("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:so,roundtripMs:String(to)});so=c;to=0}}
function Ho(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Ko=u.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Ko);
function Lo(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||po());e[a]=b;a=String;d.timestamp?b=-1:(b=v("_lact",window),b=null==b?-1:Math.max(z()-b,0));e.context={lastActivityMs:a(b)};N("log_sequence_info_on_gel_web")&&d.od&&(a=e.context,b=d.od,Ko[b]=b in Ko?Ko[b]+1:0,a.sequence={index:Ko[b],groupKey:b},d.vg&&delete Ko[d.od]);d=d.ug;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Bo[d.token]=a,a=d.token);d=Ao.get(a)||[];Ao.set(a,d);d.push(e);
c&&(uo=new c);c=gm("web_logging_max_batch")||100;e=po();d.length>=c?Co():10<=e-xo&&(Eo(),xo=e)}
;function Mo(){for(var a={},b=q(Object.entries(an(M("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=q(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function No(){return"INNERTUBE_API_KEY"in cm&&"INNERTUBE_API_VERSION"in cm}
function Go(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),je:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ke:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),me:M("INNERTUBE_CONTEXT_HL",void 0),le:M("INNERTUBE_CONTEXT_GL",void 0),ne:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",pe:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oe:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Fo(a){a={client:{hl:a.me,gl:a.le,clientName:a.ke,clientVersion:a.innertubeContextClientVersion,configInfo:a.je}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=M("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=hm();0<b.length&&(a.request={internalExperimentFlags:b});M("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(a.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Mo());return a}
function Oo(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.qg||M("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().ng:b=li([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
;function Po(a){a=Object.assign({},a);delete a.Authorization;var b=li();if(b){var c=new ni;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Vg(c.digest(),3)}return a}
function Qo(a){a=Po(a);var b=new ni;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function Ro(){var a;(a=Vl("yt.innertube"))||(a=new Pl("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Fl(a):null;this.g=document.domain||window.location.hostname}
Ro.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vj(b))}catch(f){return}else e=escape(b);im(a,e,c,"/",this.g)};
Ro.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=jm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ro.prototype.remove=function(a){this.f&&this.f.remove(a);km(a,"/",this.g)};var So;function To(){So||(So=new Ro);return So}
function Uo(a,b,c,d){if(d)return null;d=To().get("nextId",!0)||1;var e=To().get("requests",!0)||{};e[d]={method:a,request:b,authState:Po(c),requestTime:Math.round(po())};To().set("nextId",d+1,86400,!0);To().set("requests",e,86400,!0);return d}
function Vo(a){var b=To().get("requests",!0)||{};delete b[a];To().set("requests",b,86400,!0)}
function Wo(a){var b=To().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(po())-d.requestTime)){var e=d.authState,f=Po(Oo(!1));Gb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(po())),Jo(a,d.method,e,{}));delete b[c]}}To().set("requests",b,86400,!0)}}
;function Xo(){}
function Yo(){Xo.f||(Xo.f=new Xo);return Xo.f}
function Zo(){var a={},b=li([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=M("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in cm||(a["X-Origin"]=window.location.origin),N("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in cm&&(a["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return eg(a)}
;var $o={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ap(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,ap.prototype)}
pa(ap,Error);function bp(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function cp(a){return new $f(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function dp(a){this.f=a}
h=dp.prototype;h.add=function(a,b,c){return ep(fp(this,[a],"readwrite"),a).add(b,c)};
h.clear=function(a){return ep(fp(this,[a],"readwrite"),a).clear()};
h.close=function(){this.f.close()};
h.count=function(a,b){return ep(fp(this,[a]),a).count(b)};
function gp(a,b,c){a=a.f.createObjectStore(b,c);return new hp(a)}
h["delete"]=function(a,b){return ep(fp(this,[a],"readwrite"),a)["delete"](b)};
h.get=function(a,b){return ep(fp(this,[a]),a).get(b)};
function fp(a,b,c){a=a.f.transaction(b,void 0===c?"readonly":c);return new ip(a,b)}
function hp(a){this.f=a}
h=hp.prototype;h.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return cp(c)};
h.clear=function(){return cp(this.f.clear()).then(function(){})};
h.count=function(a){a=a?this.f.count(a):this.f.count();return cp(a)};
h["delete"]=function(a){return cp(this.f["delete"](a))};
h.get=function(a){return cp(this.f.get(a))};
h.index=function(a){return new jp(this.f.index(a))};
h.getName=function(){return this.f.name};
function kp(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return cp(a)}
function ip(a){var b=this;this.f=a;this.g=new Map;this.done=new $f(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new ap)})})}
ip.prototype.abort=function(){this.f.abort();return this.done};
function ep(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new hp(c),a.g.set(c,d));return d}
function jp(a){this.f=a}
jp.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return cp(a)};
jp.prototype.get=function(a){return cp(this.f.get(a))};
function lp(a,b){this.request=a;this.f=b}
function mp(a){return cp(a).then(function(b){return null===b?null:new lp(a,b)})}
lp.prototype["delete"]=function(){return cp(this.f["delete"]()).then(function(){})};
lp.prototype.getValue=function(){return this.f.value};
lp.prototype.update=function(a){return cp(this.f.update(a))};function np(a,b,c){function d(){n||(n=new dp(f.result));return n}
var e=ip;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,k=c.blocking,l=c.f,m=c.upgrade,n;m&&f.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var t=d(),r=new e(f.transaction);m(t,p.oldVersion,p.newVersion,r)});
g&&f.addEventListener("blocked",function(){g()});
return cp(f).then(function(p){k&&p.addEventListener("versionchange",function(){k(d())});
l&&p.addEventListener("close",function(){l()});
return d()})}
function op(a,b,c){c=void 0===c?{}:c;return np(a,b,c)}
;var pp,qp,rp=["getAll","getAllKeys","getKey","openKeyCursor"],sp=["getAll","getAllKeys","getKey","openKeyCursor"];function tp(){return new Promise(function(a){setTimeout(a,50)})}
function up(){return Ih(this,function b(){var c,d,e;return Da(b,function(f){switch(f.f){case 1:if(An&&Bn()&&!Cn()&&!N("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);ua(f);d=!1;return ta(f,op("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,e=op("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(k){}}),ta(f,Promise.race([e,
tp()]),6);case 6:return f["return"](d);case 3:wa(f);if(c)try{c.close()}catch(g){}xa(f);break;case 2:return va(f),f["return"](!1)}})})}
function vp(){return void 0!==pp?eg(pp):new $f(function(a){up().then(function(b){pp=b;a(b)})})}
function wp(){return void 0!==qp?eg(qp):vp().then(function(a){if(!a)return!1;var b=q(rp);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=q(sp);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return qp=a})}
;var xp;function yp(){function a(b){b.close();xp=void 0}
xp||(xp=jg(op("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&gp(b,"databases",{keyPath:"actualName"})}}),function(b){return bp(b)?op("YtIdbMeta",void 0,{blocking:a}):fg(b)}));
return xp}
function zp(a){return yp().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return kp(ep(fp(b,["databases"],"readwrite"),"databases"),a,void 0)})})}
function Ap(a){return yp().then(function(b){return b["delete"]("databases",a)})}
;function Bp(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return fg(c)}return jg(zp(b).then(function(){return a(b)}),function(c){return jg(Ap(b.actualName),function(){}).then(function(){return fg(c)})})}
function Cp(a,b){b=void 0===b?{}:b;return Bp(function(c){return op(c.actualName,a,b)})}
;var Dp;function Ep(){return Ih(this,function b(){return Da(b,function(c){if(!Dp)try{Dp=Cp(1,{upgrade:function(d,e){1>e&&(gp(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),gp(d,"sapisid"))}})}catch(d){if(!bp(d))return Cm(d),c["return"](Promise.reject(d));
Dp=Cp()}return c["return"](Dp)})})}
function Fp(a){return Ih(this,function c(){var d,e,f,g,k;return Da(c,function(l){switch(l.f){case 1:return ta(l,Ep(),2);case 2:return d=l.g,e=ep(fp(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),ta(l,Gp(),3);case 3:return f=l.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),ta(l,e.add(g),4);case 4:return k=l.g,l["return"](k)}})})}
function Hp(){return Ih(this,function b(){var c,d,e,f,g,k,l,m;return Da(b,function(n){switch(n.f){case 1:return ta(n,Gp(),2);case 2:return c=n.g,d=["NEW",c,0],e=["NEW",c,po()],f=IDBKeyRange.bound(d,e),ta(n,Ep(),3);case 3:g=n.g;k=fp(g,["LogsRequestsStore"],"readwrite");var p=ep(k,"LogsRequestsStore").index("newRequest");p=f?p.f.openCursor(f,"prev"):f?p.f.openCursor(f):p.f.openCursor();p=mp(p);return ta(n,p,4);case 4:l=n.g;m=void 0;if(null===l||void 0===l||!l.getValue()){n.ka(5);break}m=l.getValue();
m.status="QUEUED";return ta(n,l.update(m),5);case 5:return n["return"](m)}})})}
function Ip(a){return Ih(this,function c(){var d,e,f;return Da(c,function(g){switch(g.f){case 1:return ta(g,Ep(),2);case 2:return d=g.g,e=ep(fp(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),ta(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",ta(g,kp(e,f),4);case 4:return g["return"](f)}})})}
function Jp(a){return Ih(this,function c(){var d,e,f;return Da(c,function(g){switch(g.f){case 1:return ta(g,Ep(),2);case 2:return d=g.g,e=ep(fp(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),ta(g,e.get(a),3);case 3:f=g.g;if(!f){g.ka(4);break}f.status="NEW";f.sendCount+=1;return ta(g,kp(e,f),4);case 4:return g["return"](f)}})})}
function Kp(){return Ih(this,function b(){var c,d;return Da(b,function(e){if(1==e.f)return ta(e,Ep(),2);if(3!=e.f)return c=e.g,ta(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function Lp(a){return Ih(this,function c(){var d;return Da(c,function(e){if(1==e.f)return ta(e,Ep(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Gp(){return Ih(this,function b(){var c;return Da(b,function(d){if(1==d.f)return ta(d,Zo(Yo()),2);c=d.g;return d["return"](Qo(c))})})}
;var Mp=gm("network_polling_interval",3E4);function Np(){this.i=0;this.f=window.navigator.onLine;Op(this);Pp(this)}
function Qp(){Np.f||(Np.f=new Np);return Np.f}
function Rp(a){var b=Sp,c=Tp;Up(a);(new $f(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)})}
function Pp(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Op(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function Up(a){a.i||(Vp(a),window.navigator.onLine&&a.g&&a.g())}
function Vp(a){a.i=Un(function(){window.navigator.onLine?(!1===a.f&&Cm(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&Cm(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());Vp(a)},Mp)}
;var Wp=gm("networkless_throttle_timeout")||100,Xp=gm("networkless_retry_attempts")||1,Yp=0;function Zp(a,b){b=void 0===b?{}:b;$p().then(function(c){if(c&&!N("networkless_bypass_write")){var d={url:a,options:b,timestamp:po(),status:"NEW",sendCount:0};Fp(d).then(function(e){d.id=e;e=Qp();e.f?aq(d):Rp(e)})["catch"](function(e){aq(d);
Cm(e)})}else un(a,b)})}
function Sp(){Yp||(Yp=Wn(function(){aq();Yp=0;Sp()},Wp))}
function Tp(){var a=Yp;if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):R(a)}Yp=0}
function aq(a){Ih(this,function c(){var d=this,e,f,g,k;return Da(c,function(l){switch(l.f){case 1:e=d;if(!a)return ta(l,Hp(),6);if(!a.id){l.ka(3);break}return ta(l,Ip(a.id),5);case 5:a=l.g;l.ka(3);break;case 6:if(a=l.g){l.ka(3);break}return ta(l,Kp(),8);case 8:return(f=l.g)&&Tp(),l["return"]();case 3:if(bq(a))g=a.options.onError?a.options.onError:function(){},k=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(m,n){return Ih(e,function t(){return Da(t,function(r){if(1==
r.f)return a&&a.id?a.sendCount<Xp?ta(r,Jp(a.id),6):ta(r,Lp(a.id),2):r.ka(2);
2!=r.f&&(Yp||Rp(Qp()),g(m,n));g(m,n);r.f=0})})},a.options.onSuccess=function(m,n){return Ih(e,function t(){return Da(t,function(r){if(1==r.f)return a&&a.id?ta(r,Lp(a.id),2):r.ka(2);
k(m,n);r.f=0})})},un(a.url,a.options);
else if(Dm(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return ta(l,Lp(a.id),0);l.ka(0)}})})}
function bq(a){a=a.timestamp;return 2592E6<=po()-a?!1:!0}
function $p(){return N("networkless_logging")?2===gm("networkless_ytidb_version")?wp():vp():eg(!1)}
;function cq(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(ha(c))}
pa(cq,Error);function dq(a){var b=this;this.f=null;a?this.f=a:No()&&(this.f=Go());Un(function(){Wo(b)},5E3)}
dq.prototype.isReady=function(){!this.f&&No()&&(this.f=Go());return!!this.f};
function Jo(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Dm(new cq("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new cq("innertube xhrclient not ready",b,c,d);Cm(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",T:c,kd:"JSON",Oa:function(){d.Oa()},
Yc:d.Oa,onSuccess:function(p,t){if(d.onSuccess)d.onSuccess(t)},
Xc:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,t){if(d.onError)d.onError(t)},
yg:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.ne)&&(g=e);var k=a.f.pe||!1,l=Oo(k,g,d);Object.assign(f.headers,l);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var m={alt:"json"};a.f.oe&&f.headers.Authorization||(m.key=a.f.innertubeApiKey);var n=cn(""+g+e,m);$p().then(function(p){if(d.retry&&N("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(N("networkless_gel")&&!p||!N("networkless_gel"))var t=Uo(b,c,l,k);
if(t){var r=f.onSuccess,F=f.Xc;f.onSuccess=function(Y,E){Vo(t);r(Y,E)};
c.Xc=function(Y,E){Vo(t);F(Y,E)}}}try{N("use_fetch_for_op_xhr")?rn(n,f):N("networkless_gel")&&d.retry?(f.method="POST",Zp(n,f)):(f.method="POST",f.T||(f.T={}),un(n,f))}catch(Y){if("InvalidAccessError"==Y.name)t&&(Vo(t),t=0),Dm(Error("An extension is blocking network request."));
else throw Y;}t&&Un(function(){Wo(a)},5E3)})}
;var eq=z().toString();
function fq(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(eq)for(a=1,b=0;b<eq.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^eq.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var gq=u.ytLoggingDocDocumentNonce_||fq();A("ytLoggingDocDocumentNonce_",gq);function hq(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function iq(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
A("yt_logging_screen.getRootVeType",function(a){return M(iq(void 0===a?0:a),void 0)});
function jq(){var a=M("csn-to-ctt-auth-info");a||(a={},dm("csn-to-ctt-auth-info",a));return a}
function kq(a){a=void 0===a?0:a;var b=M(hq(a));if(!b&&!M("USE_CSN_FALLBACK",!0))return null;b||0!=a||(N("kevlar_client_side_screens")||N("c3_client_side_screens")?b="UNDEFINED_CSN":b=M("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",kq);function lq(a,b,c){var d=jq();(c=kq(c))&&delete d[c];b&&(d[a]=b)}
A("yt_logging_screen.getCttAuthInfo",function(a){return jq()[a]});
A("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==M(hq(c))||b!==M(iq(c)))if(lq(a,d,c),dm(hq(c),a),dm(iq(c),b),0==c||N("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Lo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gq,clientScreenNonce:a},dq)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function mq(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=fd(a,b)+c;a=a instanceof hc?a:pc(a);d.href=kc(a)}
function nq(a){(window.ytspf||{}).enabled?spf.navigate(a):mq(a)}
;function oq(){ko.call(this,"button");this.f=null;this.h=[];this.g={}}
B(oq,ko);Ma(oq);h=oq.prototype;h.register=function(){mo(this,"click",this.nc);mo(this,"keydown",this.Ic);mo(this,"keypress",this.Jc);lo(this,"page-scroll",this.be)};
h.unregister=function(){no(this,"click",this.nc);no(this,"keydown",this.Ic);no(this,"keypress",this.Jc);pq(this);this.g={};oq.L.unregister.call(this)};
h.nc=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Ic=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=qq(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=Cf(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ue;else"table"==e&&(f=this.te);f&&rq(this,a,b,c,x(f,this))}}};
h.be=function(){var a=this.g;if(0!=yb(a))for(var b in a){var c=a[b],d=Nf(c.activeButtonNode||c.parentNode,V(this));if(void 0==d||void 0==c)break;sq(this,d,c,!0)}};
function rq(a,b,c,d,e){var f=Mn(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=tq(a,c))?(b=vf(d),"a"==b.tagName.toLowerCase()?mq(b.href):Nm(b)):g&&uq(a,b):f?27==d.keyCode?(tq(a,c),uq(a,b)):e(b,c,d):(a=J(b,V(a,"reverse"))?38:40,d.keyCode==a&&(Nm(b),d.preventDefault()))}
h.Jc=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=qq(this,a),Mn(a)&&c.preventDefault())};
function tq(a,b){var c=V(a,"menu-item-highlight"),d=I(c,b);d&&L(d,c);return d}
function vq(a,b,c){K(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+Ra(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.te=function(a,b,c){var d=tq(this,b);b=vm("table",null,b);var e=vm("tr",null,b);e=bf(document,"td",null,e).length;b=bf(document,"td",null,b);d=wq(d,b,e,c);-1!=d&&(vq(this,a,b[d]),c.preventDefault())};
h.ue=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=tq(this,b);b=db(bf(document,"li",null,b),Mn);d=wq(d,b,1,c);vq(this,a,b[d]);c.preventDefault()}};
function wq(a,b,c,d){var e=b.length;a=bb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function xq(a,b){var c=b.iframeMask;c||(c=lf(document,"IFRAME"),c.src='javascript:""',ej(c,V(a,"menu-mask")),Pn(c),b.iframeMask=c);return c}
function sq(a,b,c,d){var e=Nf(b,V(a,"group")),f=!!a.I(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Zh(b);if(J(b,V(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(n){}}J(b,"flip")&&(J(b,V(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.I(b,"button-has-sibling-menu")?l=Rh(e):a.I(b,"button-menu-root-container")&&(l=yq(a,b));G&&!ae("8")&&(l=null);if(l){var m=Zh(l);m=new Jh(-m.top,m.left,m.top,-m.left)}l=new Ue(0,1);J(b,V(a,"center-menu"))&&(l.x-=Math.round((Xh(c).width-Xh(b).width)/
2));d&&(l.y+=gf(document).y);if(a=xq(a,b))b=Xh(c),a.style.width=b.width+"px",a.style.height=b.height+"px",ul(e,f,a,g,l,m,197),d&&Lh(a,"position","fixed");ul(e,f,c,g,l,m,197)}
function yq(a,b){if(a.I(b,"button-menu-root-container")){var c=a.I(b,"button-menu-root-container");return Nf(b,c)}return document.body}
h.zd=function(a){if(a){var b=qq(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.I(a,"button-has-sibling-menu")?c=a.parentNode:c=yq(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=xq(this,a);d&&c.appendChild(d);(c=!!this.I(a,"button-menu-fixed"))&&(this.g[rm(a).toString()]=b);sq(this,a,b,c);Wm("yt-uix-button-menu-before-show",a,b);On(b);d&&On(d);
this.gb(a,"button-menu-action",!0);K(a,V(this,"active"));b=x(this.yd,this,a,!1);d=x(this.yd,this,a,!0);c=x(this.zf,this,a,void 0);this.f&&qq(this,this.f)==qq(this,a)||pq(this);U("yt-uix-button-menu-show",a);Km(this.h);this.h=[P(document,"click",d),P(document,"contextmenu",b),P(window,"resize",c)];this.f=a}}};
function uq(a,b){if(b){var c=qq(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Pn(c);a.gb(b,"button-menu-action",!1);var d=xq(a,b),e=rm(c).toString();delete a.g[e];Q(function(){d&&d.parentNode&&(Pn(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=Nf(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));gj(b,f);U("yt-uix-button-menu-hide",b);Km(a.h);a.h.length=0}}
h.zf=function(a,b){var c=qq(this,a);if(c){b&&(b instanceof yc?Lc(c,b):Bf(c,b));var d=!!this.I(a,"button-menu-fixed");sq(this,a,c,d)}};
h.yd=function(a,b,c){c=Lm(c);var d=Nf(c,V(this));if(d){d=qq(this,d);var e=qq(this,a);if(d==e)return}d=Nf(c,V(this,"menu"));e=d==qq(this,a);var f=J(c,V(this,"menu-item")),g=J(c,V(this,"menu-close"));if(!d||e&&(f||g))uq(this,a),d&&b&&this.I(a,"button-menu-indicate-selected")&&((a=I(V(this,"content"),a))&&Bf(a,Jf(c)),zq(this,d,c))};
function zq(a,b,c){var d=V(a,"menu-item-selected");a=af(d,b);C(a,function(e){L(e,d)});
K(c.parentNode,d)}
function qq(a,b){if(!b.widgetMenu){var c=a.I(b,"button-menu-id");c=c&&H(c);var d=V(a,"menu");c?fj(c,[d,V(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return J(a,V(this,"toggled"))};
h.toggle=function(a){if(this.I(a,"button-toggle")){var b=Nf(a,V(this,"group")),c=V(this,"toggled"),d=J(a,c);if(b&&this.I(b,"button-toggle-group")){var e=this.I(b,"button-toggle-group");b=af(V(this),b);C(b,function(f){f!=a||"optional"==e&&d?(L(f,c),f.removeAttribute("aria-pressed")):(K(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),jj(a,c)}};
h.click=function(a){if(qq(this,a)){var b=qq(this,a);if(b){var c=Nf(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(uq(this,c),Q(x(this.zd,this,a),1)):Mn(b)?uq(this,a):this.zd(a)}a.focus()}this.gb(a,"button-action")};
function pq(a){a.f&&uq(a,a.f)}
;function Aq(a){ko.call(this,a);this.h=null}
B(Aq,ko);h=Aq.prototype;h.da=function(a){var b=ko.prototype.da.call(this,a);return b?b:a};
h.register=function(){lo(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){Bq(this);Aq.L.dispose.call(this)};
h.I=function(a,b){var c=Aq.L.I.call(this,a,b);return c?c:(c=Aq.L.I.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.da(a);if(b){K(b,V(this,"active"));var c=Cq(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Dq(this,a,c);var d=V(this,"card-visible"),e=this.I(a,"card-delegate-show")&&this.I(b,"card-action");this.gb(b,"card-action",a);this.h=a;Pn(c);Q(x(function(){e||(On(c),U("yt-uix-card-show",b,a,c));Eq(c);K(c,d);U("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Cq(a,b,c){var d=c||b,e=V(a,"card");c=Fq(a,d);var f=H(V(a,"card")+rm(d));if(f)return a=I(V(a,"card-body"),f),Af(a,c)||(rf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+rm(d);ej(f,e);(d=a.I(d,"card-class"))&&fj(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.I(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;rf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Dq(a,b,c){var d=a.I(b,"orientation")||"horizontal";var e=I(V(a,"anchor"),b)||b;var f=a.I(b,"position"),g=!!a.I(b,"force-position"),k=a.I(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var n=13;var p=8}else m&&!l?(n=12,p=9):!m&&l?(n=9,p=12):(n=8,p=13);var t=$h(document.body);f=$h(b);t!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var r=new Ue(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new Ue(b.offsetWidth+6,-12);var F=
Xh(c);f=Math.min(f,(d?F.height:F.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);F=null;g||(F=10);b=V(a,"card-flip");a=V(a,"card-reverse");hj(c,b,m);hj(c,a,l);F=ul(e,n,c,p,r,null,F);!g&&F&&(F&48&&(m=!m,n^=4,p^=4),F&192&&(l=!l,n^=1,p^=1),hj(c,b,m),hj(c,a,l),ul(e,n,c,p,r));k&&(e=parseInt(c.style.top,10),g=gf(document).y,Lh(c,"position","fixed"),Lh(c,"top",e-g+"px"));t&&(c.style.right="",e=Zh(c),e.left=e.left||parseInt(c.style.left,10),g=ef(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!t&&m||t&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=I("yt-uix-card-arrow",c);m=I("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Xh(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.da(a)){var b=H(V(this,"card")+rm(a));b&&(L(a,V(this,"active")),L(b,V(this,"card-visible")),Pn(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(rf(b.cardMask),b.cardMask=null))}};
function Bq(a){a.h&&a.hide(a.h)}
h.sd=function(a,b){var c=this.da(a);if(c){if(b){var d=Fq(this,c);if(!d)return;b instanceof yc?Lc(d,b):Bf(d,b)}J(c,V(this,"active"))&&(c=Cq(this,a,c),Dq(this,a,c),On(c),Eq(c))}};
h.isActive=function(a){return(a=this.da(a))?J(a,V(this,"active")):!1};
function Fq(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.I(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;L(f,d);K(f,e);b.cardContentNode=c}return c}
function Eq(a){var b=a.cardMask;b||(b=lf(document,"IFRAME"),b.src='javascript:""',fj(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Gq(){ko.call(this,"kbd-nav")}
var Hq;B(Gq,ko);Ma(Gq);h=Gq.prototype;h.register=function(){mo(this,"keydown",this.Ec);lo(this,"yt-uix-kbd-nav-move-in",this.Tc);lo(this,"yt-uix-kbd-nav-move-in-to",this.ye);lo(this,"yt-uix-kbd-move-next",this.Uc);lo(this,"yt-uix-kbd-nav-move-to",this.vb)};
h.unregister=function(){no(this,"keydown",this.Ec);Km(Hq)};
h.Ec=function(a,b,c){var d=c.keyCode;if(a=Nf(a,V(this)))switch(d){case 13:case 32:this.Tc(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=lj(a,"kbdNavMoveOut");!c;){c=Nf(a.parentElement,V(this));if(!c)break a;c=lj(c,"kbdNavMoveOut")}c=H(c);this.vb(c);U("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,V(this,"list")))switch(d){case 40:this.Uc(b,a);break;case 38:d=document.activeElement==a,a=Iq(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Jq(this,a[b]))}c.preventDefault()}};
h.Tc=function(a){var b=lj(a,"kbdNavMoveIn");b=H(b);Kq(this,a,b);this.vb(b)};
h.ye=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Kq(this,d,a);this.vb(a)};
h.vb=function(a){if(a)if(Gf(a))a.focus();else{var b=Cf(a,function(c){return xf(c)?Gf(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Kq(a,b,c){if(b&&c)if(K(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,kj&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Uc=function(a,b){var c=document.activeElement==b,d=Iq(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Jq(this,d[c]))};
function Jq(a,b){if(b){var c=Lf(b,"LI");c&&(K(c,V(a,"highlight")),Hq=P(b,"blur",x(function(d){L(d,V(this,"highlight"));Km(Hq)},a,c)))}}
function Iq(a){if("UL"!=a.tagName.toUpperCase())return[];a=db(uf(a),function(b){return"LI"==b.tagName.toUpperCase()});
return db(eb(a,function(b){return Mn(b)?Cf(b,function(c){return xf(c)?Gf(c):!1}):!1}),function(b){return!!b})}
;function Lq(){ko.call(this,"menu");this.g=this.f=null;this.h={};this.l={};this.i=null}
B(Lq,ko);Ma(Lq);function Mq(a){var b=Lq.getInstance();if(J(a,V(b)))return a;var c=b.da(a);return c?c:Nf(a,V(b,"content"))==b.f?b.g:null}
h=Lq.prototype;h.register=function(){mo(this,"click",this.Dc);mo(this,"mouseenter",this.Yd);lo(this,"page-scroll",this.Kf);lo(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.da(a);Nq(this,a)});
this.i=new wl};
h.unregister=function(){no(this,"click",this.Dc);this.g=this.f=null;Km(vb(Ab(this.h)));this.h={};wb(this.l,function(a){rf(a)},this);
this.l={};Ad(this.i);this.i=null;Lq.L.unregister.call(this)};
h.Dc=function(a,b,c){a&&(b=Oq(this,a),!b.disabled&&um(c.target,b)&&Pq(this,a))};
h.Yd=function(a,b,c){a&&J(a,V(this,"hover"))&&(b=Oq(this,a),um(c.target,b)&&Pq(this,a,!0))};
h.Kf=function(){this.f&&this.g&&Qq(this,this.g,this.f)};
function Qq(a,b,c){var d=Rq(a,b);if(d){var e=Xh(c);if(e instanceof We){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Wh(e,!0);d.style.height=Wh(f,!0)}c==a.f&&(e=9,f=8,J(b,V(a,"reversed"))&&(e^=1,f^=1),J(b,V(a,"flipped"))&&(e^=4,f^=4),a=new Ue(0,1),d&&ul(b,e,d,f,a,null,197),ul(b,e,c,f,a,null,197))}
function Pq(a,b,c){Sq(a,b)&&!c?Nq(a,b):(Tq(a,b),!a.f||um(b,a.f)?a.Ad(b):xl(a.i,x(a.Ad,a,b)))}
h.Ad=function(a){if(a){var b=Uq(this,a);if(b){Wm("yt-uix-menu-before-show",a,b);if(this.f)um(a,this.f)||Nq(this,this.g);else{this.g=a;this.f=b;J(a,V(this,"sibling-content"))||(rf(b),document.body.appendChild(b));var c=Oq(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=Rq(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);L(b,V(this,"content-hidden"));Qq(this,a,b);fj(Oq(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);U("yt-uix-menu-show",a);Vq(b);Wq(this,a);U("yt-uix-kbd-nav-move-in-to",
b);var d=x(this.Lf,this,a),e=x(this.re,this,a);c=Ra(a).toString();this.h[c]=[P(b,"click",e),P(document,"click",d)];J(a,V(this,"indicate-selected"))&&(d=x(this.se,this,a),this.h[c].push(P(b,"click",d)));J(a,V(this,"hover"))&&(a=x(this.Zd,this,a),this.h[c].push(P(document,"mousemove",a)))}}};
h.Zd=function(a,b){var c=Lm(b);if(c){var d=Oq(this,a);um(c,d)||Xq(this,c)||Yq(this,a)}};
h.Lf=function(a,b){var c=Lm(b);if(c){if(Xq(this,c)){var d=Nf(c,V(this,"content")),e=Lf(c,"LI");e&&d&&Af(d,e)&&Wm("yt-uix-menu-item-clicked",c);c=Nf(c,V(this,"close-on-select"));if(!c)return;d=Mq(c)}Nq(this,d||a)}};
function Tq(a,b){if(b){var c=Nf(b,V(a,"content"));c&&(c=af(V(a),c),C(c,function(d){!um(d,b)&&Sq(this,d)&&Yq(this,d)},a))}}
function Nq(a,b){if(b){var c=[];c.push(b);var d=Uq(a,b);d&&(d=af(V(a),d),d=qb(d),c=c.concat(d),C(c,function(e){Sq(this,e)&&Yq(this,e)},a))}}
function Yq(a,b){if(b){var c=Uq(a,b);gj(Oq(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,V(a,"content-hidden"));var d=Uq(a,b);d&&cf(d,{"aria-expanded":"false"});(d=Rq(a,b))&&d.parentNode&&rf(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.i&&a.i.ba("ROOT_MENU_REMOVED"));U("yt-uix-menu-hide",b);c=Ra(b).toString();Km(a.h[c]);delete a.h[c]}}
h.re=function(a,b){var c=Lm(b);c&&Zq(this,a,c)};
h.se=function(a,b){var c=Lm(b);if(c){var d=Oq(this,a);if(d&&(c=Lf(c,"LI")))if(c=Jf(c).trim(),d.hasChildNodes()){var e=oq.getInstance();(d=I(V(e,"content"),d))&&Bf(d,c)}else Bf(d,c)}};
function Wq(a,b){var c=Uq(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&cf(e,{role:"menuitem"})});
cf(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ra(c),c.id=d);(c=Oq(a,b))&&cf(c,{"aria-controls":d})}}
function Zq(a,b,c){var d=Uq(a,b);d&&J(b,V(a,"checked"))&&(a=Lf(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(d=af("yt-ui-menu-item-checked",d),C(d,function(e){ij(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ij(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Sq(a,b){var c=Uq(a,b);return c?!J(c,V(a,"content-hidden")):!1}
function Vq(a){a=bf(document,"UL",null,a);C(a,function(b){b.tabIndex=0;var c=Gq.getInstance();fj(b,[V(c),V(c,"list")])})}
function Uq(a,b){var c=O(b,"menu-content-id");return c&&(c=H(c))?(fj(c,[V(a,"content"),V(a,"content-external")]),c):b==a.g?a.f:I(V(a,"content"),b)}
function Rq(a,b){var c=Ra(b).toString(),d=a.l[c];if(!d){d=lf(document,"IFRAME");d.src='javascript:""';var e=[V(a,"mask")];C(dj(b),function(f){e.push(f+"-mask")});
fj(d,e);a.l[c]=d}return d||null}
function Oq(a,b){return I(V(a,"trigger"),b)}
function Xq(a,b){return um(b,a.f)||um(b,a.g)}
;function $q(){Aq.call(this,"clickcard");this.f={};this.g={}}
B($q,Aq);Ma($q);h=$q.prototype;h.register=function(){$q.L.register.call(this);mo(this,"click",this.pc,"target");mo(this,"click",this.oc,"close")};
h.unregister=function(){$q.L.unregister.call(this);no(this,"click",this.pc,"target");no(this,"click",this.oc,"close");for(var a in this.f)Km(this.f[a]);this.f={};for(a in this.g)Km(this.g[a]);this.g={}};
h.pc=function(a,b,c){c.preventDefault();b=Lf(c.target,"button");if(!b||!b.disabled){b=this.I(a,"card-target");var d;b?d=$e(document,b):d=a;a=d;d=this.da(a);this.I(d,"disabled")||(J(d,V(this,"active"))?(this.hide(a),L(d,V(this,"active"))):(this.show(a),K(d,V(this,"active"))))}};
h.show=function(a){$q.L.show.call(this,a);var b=this.da(a),c=Ra(a).toString();if(!O(b,"click-outside-persists")){if(this.f[c])return;b=P(document,"click",x(this.qc,this,a));var d=P(window,"blur",x(this.qc,this,a));this.f[c]=[b,d]}a=P(window,"resize",x(this.sd,this,a,void 0));this.g[c]=a};
h.hide=function(a){$q.L.hide.call(this,a);a=Ra(a).toString();var b=this.f[a];b&&(Km(b),this.f[a]=null);if(b=this.g[a])Km(b),delete this.g[a]};
h.qc=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=Nf(b.target,c)||Nf(Mq(b.target),c));(d=d||Nf(document.activeElement,c)||(document.activeElement?Nf(Mq(document.activeElement),c):null))||this.hide(a)};
h.oc=function(a){(a=Nf(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function ar(){Aq.call(this,"hovercard")}
B(ar,Aq);Ma(ar);h=ar.prototype;h.register=function(){mo(this,"mouseenter",this.Oc,"target");mo(this,"mouseleave",this.Qc,"target");mo(this,"mouseenter",this.Pc,"card");mo(this,"mouseleave",this.Rc,"card")};
h.unregister=function(){no(this,"mouseenter",this.Oc,"target");no(this,"mouseleave",this.Qc,"target");no(this,"mouseenter",this.Pc,"card");no(this,"mouseleave",this.Rc,"card")};
h.Oc=function(a){if(br!=a){br&&(this.hide(br),br=null);var b=x(this.show,this,a),c=parseInt(this.I(a,"delay-show"),10);b=Q(b,-1<c?c:200);mm(a,"card-timer",b.toString());br=a;a.alt&&(mm(a,"card-alt",a.alt),a.alt="");a.title&&(mm(a,"card-title",a.title),a.title="")}};
h.Qc=function(a){var b=parseInt(this.I(a,"card-timer"),10);R(b);this.da(a).isCardHidable=!0;b=parseInt(this.I(a,"delay-hide"),10);b=-1<b?b:200;Q(x(this.ge,this,a),b);if(b=this.I(a,"card-alt"))a.alt=b;if(b=this.I(a,"card-title"))a.title=b};
h.ge=function(a){this.da(a).isCardHidable&&(this.hide(a),br=null)};
h.Pc=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Rc=function(a){a&&this.hide(a.cardTargetNode)};
var br=null;function cr(a,b,c,d,e,f){this.f=a;this.B=null;this.h=I("yt-dialog-fg",this.f)||this.f;if(a=I("yt-dialog-title",this.h)){var g="yt-dialog-title-"+Ra(this.h);a.setAttribute("id",g);this.h.setAttribute("aria-labelledby",g)}this.h.setAttribute("tabindex","-1");this.C=I("yt-dialog-focus-trap",this.f);this.H=!1;this.i=new wl;this.D=[];this.D.push(Mm(this.f,"click",x(this.He,this),"yt-dialog-dismiss"));this.D.push(P(this.C,"focus",x(this.Jd,this),!0));dr(this);this.J=b;this.O=c;this.M=d;this.u=e;this.P=
f;this.l=this.j=null}
var er={LOADING:"loading",Zf:"content",mg:"working"};function dr(a){a=I("yt-dialog-fg-content",a.f);var b=[];wb(er,function(c){b.push("yt-dialog-show-"+c)});
gj(a,b);K(a,"yt-dialog-show-content")}
h=cr.prototype;
h.show=function(){if(!this.K()){this.B=document.activeElement;if(!this.M){this.g||(this.g=H("yt-dialog-bg"),this.g||(this.g=lf(document,"div"),this.g.id="yt-dialog-bg",ej(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=ef(a).height,ff(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";On(this.g)}this.Fc();c=fr(this);gr(c);this.j=P(document,"keydown",x(this.qe,this));this.ac(this.f);this.O&&(this.l=P(document,"click",x(this.gf,this)));On(this.f);this.h.setAttribute("tabindex","0");hr(this);this.u||K(document.body,"yt-dialog-active");pq(oq.getInstance());Bq($q.getInstance());Bq(ar.getInstance());U("yt-ui-dialog-show-complete",this)}};
function ir(){var a=af("yt-dialog");return gb(a,function(b){return Mn(b)})}
h.Fc=function(){if(!this.P){var a=this.f;hj(document.body,"hide-players",!0);a&&hj(a,"preserve-players",!0)}};
function fr(a){var b=bf(document,"iframe",null,a.f);C(b,function(c){var d=O(c,"onload");d&&(d=v(d))&&P(c,"load",d);if(d=O(c,"src"))c.src=d},a);
return qb(b)}
function gr(a){C(document.getElementsByTagName("iframe"),function(b){-1==bb(a,b)&&K(b,"iframe-hid")})}
function jr(){var a=af("iframe-hid");C(a,function(b){L(b,"iframe-hid")})}
h.He=function(a){a=a.currentTarget;a.disabled||(a=O(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.K()){this.i.ba("pre-all");this.i.ba("pre-"+a);Pn(this.f);Bq($q.getInstance());Bq(ar.getInstance());this.h.setAttribute("tabindex","-1");ir()||(Pn(this.g),this.u||L(document.body,"yt-dialog-active"),ym(),jr());this.j&&(Km(this.j),this.j=null);this.l&&(Km(this.l),this.l=null);var b=this.f;if(b){var c=O(b,"player-ready-pubsub-key");c&&(Vm(c),om(b,"player-ready-pubsub-key"))}this.i.ba("post-all");U("yt-ui-dialog-hide-complete",this);"cancel"==a&&U("yt-ui-dialog-cancelled",
this);this.i&&this.i.ba("post-"+a);this.B&&this.B.focus()}};
h.setTitle=function(a){Bf(I("yt-dialog-title",this.f),a)};
h.qe=function(a){Q(x(function(){this.J||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.gf=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.ac=function(a){var b=S("player-added",this.Fc,this);mm(a,"player-ready-pubsub-key",b)};
h.K=function(){return this.H};
h.dispose=function(){Mn(this.f)&&this.dismiss("dispose");Km(this.D);this.D.length=0;Q(x(function(){this.B=null},this),0);
this.C=this.h=null;this.i.dispose();this.i=null;this.H=!0};
h.Jd=function(a){a.stopPropagation();hr(this)};
function hr(a){Q(x(function(){this.h&&this.h.focus()},a),0)}
A("yt.ui.Dialog",cr);function kr(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Hb(b);this.assets=a.assets||{};this.attrs=a.attrs||Hb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
kr.prototype.clone=function(){var a=new kr,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=Hb(c):a[b]=c}return a};var lr=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mr=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function nr(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(lr,""),c=c.replace(mr,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else or(a,b,c)}
function or(a,b,c){c=void 0===c?null:c;var d=pr(a),e=document.getElementById(d),f=e&&O(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=S(d,b),b=""+Ra(b),qr[b]=f),g||(e=rr(a,d,function(){O(e,"loaded")||(mm(e,"loaded","true"),U(d),Q(y(Xm,d),0))},c)))}
function rr(a,b,c,d){d=void 0===d?null:d;var e=lf(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oc(e,Ch(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sr(a,b){if(a&&b){var c=""+Ra(b);(c=qr[c])&&Vm(c)}}
function pr(a){var b=document.createElement("a");Mc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Uc(a)}
var qr={};function tr(a,b,c){c=void 0===c?{}:c;var d=dq;M("ytLoggingEventsDefaultDisabled",!1)&&dq==dq&&(d=null);Lo(a,b,d,c)}
;var ur=[{Mc:function(a){return"Cannot read property '"+a.key+"'"},
Tb:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Mc:function(a){return"Cannot call '"+a.key+"'"},
Tb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var vr=new Set,wr=0,xr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function yr(a){zr(a)}
function Ar(a){zr(a,"WARNING")}
function zr(a,b){var c=void 0===c?{}:c;c.name=M("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(N("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((window&&
window.yterr||e)&&!(5<=wr)&&0!==a.sampleWeight){var g=fe(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var k=g.lineNumber||"Not available",l=g.fileName||"Not available";g=g.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0,n=0;n<a.args.length;n++){var p=a.args[n],t="params."+n;m+=t.length;if(p)if(Array.isArray(p))for(var r=d,F=0;F<p.length&&!(p[F]&&(m+=Br(F,p[F],t,r),500<m));F++);else if("object"===typeof p)for(r in r=void 0,F=d,p){if(p[r]&&(m+=
Br(r,p[r],t,F),500<m))break}else d[t]=String(JSON.stringify(p)).substring(0,500),m+=d[t].length;else d[t]=String(JSON.stringify(p)).substring(0,500),m+=d[t].length;if(500<=m)break}else if(a.hasOwnProperty("params")&&a.params)if(p=a.params,"object"===typeof a.params)for(n in t=0,p){if(p[n]&&(m="params."+n,r=String(JSON.stringify(p[n])).substr(0,500),d[m]=r,t+=m.length+r.length,500<t))break}else d.params=String(JSON.stringify(p)).substr(0,500);navigator.vendor&&!d.hasOwnProperty("vendor")&&(d.vendor=
navigator.vendor);d={message:e,name:f,lineNumber:k,fileName:l,stack:g,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=q(ur);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Tb[d.name])for(l=q(f.Tb[d.name]),k=l.next();!k.done;k=l.next())if(g=k.value,k=d.message.match(g.regexp)){d.params["error.original"]=k[0];l=g.groups;g={};for(n=0;n<l.length;n++)g[l[n]]=k[n+1],d.params["error."+l[n]]=k[n+1];d.message=f.Mc(g);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);
if(!(vr.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){if(N("kevlar_gel_error_routing")){f=c;a:{e=q(xr);for(k=e.next();!k.done;k=e.next())if(Dn(k.value.toLowerCase())){e=!0;break a}e=!1}if(!e){k={stackTrace:d.stack};d.fileName&&(k.filename=d.fileName);e=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==e.length&&(1!==e.length||isNaN(Number(e[0]))?2!==e.length||isNaN(Number(e[0]))||isNaN(Number(e[1]))||(k.lineNumber=Number(e[0]),k.columnNumber=
Number(e[1])):k.lineNumber=Number(e[0]));e={level:"ERROR_LEVEL_UNKNOWN",message:d.message,errorClassName:d.name};"ERROR"===f?e.level="ERROR_LEVEL_ERROR":"WARNING"===f&&(e.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href,kvPairs:[]};if(l=d.params)for(g=q(Object.keys(l)),n=g.next();!n.done;n=g.next())n=n.value,k.kvPairs.push({key:"client."+n,value:String(l[n])});tr("clientError",{errorMetadata:k,stackTrace:f,logMessage:e});Co()}}e=d.params||{};c={ab:{a:"logerror",
t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},T:{url:M("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.T){d.stack&&(c.T.stack=d.stack);f=q(Object.keys(e));for(k=f.next();!k.done;k=f.next())k=k.value,c.T["client."+k]=e[k];if(e=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=q(Object.keys(e)),k=f.next();!k.done;k=f.next())k=k.value,c.T[k]=e[k];e=M("SERVER_NAME",void 0);f=
M("SERVER_VERSION",void 0);e&&f&&(c.T["server.name"]=e,c.T["server.version"]=f)}un(M("ECATCHER_REPORT_HOST","")+"/error_204",c);vr.add(d.message);wr++}}}}
function Br(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Cr(){yd.call(this);this.f=[]}
pa(Cr,yd);Cr.prototype.F=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.rg)}yd.prototype.F.call(this)};var Dr=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Er(a,b){a=a||"";if(window.spf){var c=a.match(Dr);spf.style.load(a,c?c[1]:"",b);return null}return Fr(a,b)}
function Gr(a,b,c){if(a=M(a,void 0)){var d=y(Er,a,b);if(c)var e=S(c,function(){Vm(e);d()});
else d()}}
function Fr(a,b){var c=Hr(a),d=document.getElementById(c),e=d&&O(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(S(c,b),Ra(b));return f?d:d=Ir(a,c,function(){O(d,"loaded")||(mm(d,"loaded","true"),U(c),Q(y(Xm,c),0))})}
function Ir(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ch(a);d.rel="stylesheet";d.href=Vb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Hr(a){var b=lf(document,"A"),c=new Ob(Pb,"This URL is never added to the DOM");Rb(c);Rb(c);Mc(b,new hc(ic,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Uc(a)}
;function Jr(a,b,c,d){yd.call(this);var e=this;this.l=this.oa=a;this.Y=b;this.u=!1;this.api={};this.xa=this.J=null;this.H=new wl;zd(this,y(Ad,this.H));this.i={};this.O=this.ia=this.g=this.Jb=this.f=null;this.M=!1;this.j=this.C=null;this.ta={};this.Bd=["onReady"];this.eb=null;this.dc=NaN;this.P={};this.h=d;Kr(this);this.rb("WATCH_LATER_VIDEO_ADDED",this.Qe.bind(this));this.rb("WATCH_LATER_VIDEO_REMOVED",this.Re.bind(this));this.rb("onAdAnnounce",this.Dd.bind(this));this.Cd=new Cr(this);zd(this,y(Ad,
this.Cd));this.U=0;c?this.U=Q(function(){e.loadNewVideoConfig(c)},0):d&&(Lr(this),Mr(this))}
pa(Jr,yd);h=Jr.prototype;h.getId=function(){return this.Y};
h.loadNewVideoConfig=function(a){if(!this.K()){this.U&&(R(this.U),this.U=0);a instanceof kr||(a=new kr(a));this.Jb=a;this.f=a.clone();Lr(this);this.ia||(this.ia=Nr(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=Wh(Number(a)||a,!0);if(a=this.f.attrs.height)this.l.style.height=Wh(Number(a)||a,!0);Mr(this);this.u&&Or(this)}};
function Lr(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.Y,a.f.attrs.id=a.Y);a.l.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
h.Nd=function(){return this.Jb};
function Or(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Pr(a){var b=!0,c=Qr(a);c&&a.f&&(a=Rr(a),b=O(c,"version")===a);return b&&!!v("yt.player.Application.create")}
function Mr(a){if(!a.K()&&!a.M){var b=Pr(a);if(b&&"html5"==(Qr(a)?"html5":null))a.O="html5",a.u||Sr(a);else if(Tr(a),a.O="html5",b&&a.j)a.oa.appendChild(a.j),Sr(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;var d=Ur(a,"player_bootstrap_method")?v("yt.player.Application.createAlternate")||v("yt.player.Application.create"):v("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.oa,e,a.h);Sr(a)};
a.M=!0;b?a.C():(nr(Rr(a),a.C),(b=a.h?a.h.cssUrl:a.f.assets.css)&&Er(b),Vr(a)&&!c&&A("yt.player.Application.create",null))}}}
function Qr(a){var b=H(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function Sr(a){if(!a.K()){var b=Qr(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,!Ur(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Wr(a)):a.dc=Q(function(){Sr(a)},50)}}
function Wr(a){Kr(a);a.u=!0;var b=Qr(a);b.addEventListener&&(a.J=Xr(a,b,"addEventListener"));b.removeEventListener&&(a.xa=Xr(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Xr(a,b,e))}for(var f in a.i)a.J(f,a.i[f]);Or(a);a.ia&&a.ia(a.api);a.H.ba("onReady",a.api)}
function Xr(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.eb=e,Dm(e))}}}
function Kr(a){a.u=!1;if(a.xa)for(var b in a.i)a.xa(b,a.i[b]);for(var c in a.P)R(parseInt(c,10));a.P={};a.J=null;a.xa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.rb.bind(a);a.api.removeEventListener=a.mf.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Od.bind(a);a.api.getPlayerType=a.Qd.bind(a);a.api.getCurrentVideoConfig=a.Nd.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.xe.bind(a)}
h.xe=function(){return this.u};
h.rb=function(a,b){var c=this,d=Nr(this,b);if(d){if(!kb(this.Bd,a)&&!this.i[a]){var e=Yr(this,a);this.J&&this.J(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&Q(function(){d(c.api)},0)}};
h.mf=function(a,b){if(!this.K()){var c=Nr(this,b);c&&yl(this.H,a,c)}};
function Nr(a,b){var c=b;if("string"==typeof b){if(a.ta[b])return a.ta[b];c=function(){var d=v(b);d&&d.apply(u,arguments)};
a.ta[b]=c}return c?c:null}
function Yr(a,b){var c="ytPlayer"+b+a.Y;a.i[b]=c;u[c]=function(d){var e=Q(function(){if(!a.K()){a.H.ba(b,d);var f=a.P,g=String(e);g in f&&delete f[g]}},0);
Fb(a.P,String(e))};
return c}
h.Dd=function(a){U("a11y-announce",a)};
h.Qe=function(a){U("WATCH_LATER_VIDEO_ADDED",a)};
h.Re=function(a){U("WATCH_LATER_VIDEO_REMOVED",a)};
h.Qd=function(){return this.O||(Qr(this)?"html5":null)};
h.Od=function(){return this.eb};
function Tr(a){a.cancel();Kr(a);a.O=null;a.f&&(a.f.loaded=!1);var b=Qr(a);b&&(Pr(a)||!Vr(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));pf(a.oa)}
h.cancel=function(){if(this.C){var a=Rr(this);sr(a,this.C)}R(this.dc);this.M=!1};
h.F=function(){Tr(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){Cm(b)}this.ta=null;for(var a in this.i)u[this.i[a]]=null;this.Jb=this.f=this.api=null;delete this.oa;delete this.l;yd.prototype.F.call(this)};
function Vr(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Rr(a){return a.h?a.h.jsUrl:a.f.assets.js}
function Ur(a,b){if(a.h)var c=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==Zm(c||"")[b]}
;var Zr={},$r="player_uid_"+(1E9*Math.random()>>>0);function as(){var a=document.getElementById("player-api");if(!a)return null;var b=$r+"_"+Ra(a),c=Zr[b];c||(c=new Jr(a,b),Zr[b]=c);return c.api}
;function bs(){hj(H("page-container"),"remote-connected",!!W)}
;var cs=!1;function ds(a){hj(H("player-mole-container"),"watch-mole",a);a=H("player-mole-container");var b=H("player");cs=!b||J(b,"off-screen")||!a||J(a,"watch-mole");(a=as())&&a.isReady()&&a.setMinimized(cs)}
;function es(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!fs(a)||c.some(function(e){return!fs(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())gs(a,d.value);return a}
function gs(a,b){for(var c in b)if(fs(b[c])){if(c in a&&!fs(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});gs(a[c],b[c])}else if(hs(b[c])){if(c in a&&!hs(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);is(a[c],b[c])}else a[c]=b[c];return a}
function is(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,fs(d)?a.push(gs({},d)):hs(d)?a.push(is([],d)):a.push(d);return a}
function fs(a){return"object"===typeof a&&!Array.isArray(a)}
function hs(a){return"object"===typeof a&&Array.isArray(a)}
;function js(a,b){Rn.call(this,1,arguments)}
pa(js,Rn);function ks(a,b){Rn.call(this,1,arguments)}
pa(ks,Rn);var ls=new Sn("aft-recorded",js),ms=new Sn("timing-sent",ks);var ns=window;function os(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var ps=ns.performance||ns.mozPerformance||ns.msPerformance||ns.webkitPerformance||new os;var qs=!1;x(ps.clearResourceTimings||ps.webkitClearResourceTimings||ps.mozClearResourceTimings||ps.msClearResourceTimings||ps.oClearResourceTimings||w,ps);function rs(a){var b=ss(a);if(b.aft)return b.aft;a=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ts(a){var b;(b=v("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function us(a){a=ts(a);a.info||(a.info={});return a.info}
function ss(a){a=ts(a);a.tick||(a.tick={});return a.tick}
function vs(a){var b=ts(a).nonce;b||(b=fq(),ts(a).nonce=b);return b}
function ws(a){var b=ss(a||""),c=rs(a);c&&!qs&&(bo(ls,new js(Math.round(c-b._start),a)),qs=!0)}
;function xs(){var a=v("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function ys(a){a=a||"";var b=v("ytcsi.reference");b||(xs(),b=v("ytcsi.reference"));if(b[a])return b[a];var c=xs(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var zs=u.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",zs);function As(){this.f=0}
function Bs(){As.f||(As.f=new As);return As.f}
As.prototype.tick=function(a,b,c){Cs(this,"tick_"+a+"_"+b)||tr("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
As.prototype.info=function(a,b){var c=Object.keys(a).join("");Cs(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,tr("latencyActionInfo",c))};
As.prototype.span=function(a,b){var c=Object.keys(a).join("");Cs(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,tr("latencyActionSpan",a))};
function Cs(a,b){zs[b]=zs[b]||{count:0};var c=zs[b];c.count++;c.time=po();a.f||(a.f=Un(function(){var d=po(),e;for(e in zs)zs[e]&&6E4<d-zs[e].time&&delete zs[e];a&&(a.f=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new cq("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ar(c)),!0):!1}
;var X={},Ds=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.cseg="creatorInfo.creatorSegment",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid=
"requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.ncnp="webInfo.nonPreloadedNodeCount",
X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.aq=
"tvInfo.appQuality",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",
X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),Es="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Fs={},Gs=(Fs.ccs="CANARY_STATE_",
Fs.mver="MEASUREMENT_VERSION_",Fs.pis="PLAYER_INITIALIZED_STATE_",Fs.yt_pt="LATENCY_PLAYER_",Fs.pa="LATENCY_ACTION_",Fs.yt_vst="VIDEO_STREAM_TYPE_",Fs),Hs="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Is(a){return!!M("FORCE_CSI_ON_GEL",!1)||N("csi_on_gel")||!!ts(a).useGel}
function Js(a){a=ts(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Ks(a,b,c){if(null!==b)if(us(c)[a]=b,Is(c)){var d=b;b=Js(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ds){b=Ds[a];kb(Es,b)&&(d=!!d);a in Gs&&"string"===typeof d&&(d=Gs[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},k=0;k<d.length-1;k++){var l=d[k];g[l]={};g=g[l]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=es({},e)}else kb(Hs,a)||Ar(new cq("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Is(c)&&(b=ys(c||""),es(b.info,f),b=Js(c),"gelInfos"in b||(b.gelInfos={}),es(b.gelInfos,f),c=vs(c),Bs().info(f,c))}else ys(c||"").info[a]=b}
function Ls(a,b,c){var d=ss(c);if(N("use_first_tick")&&Ms(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;ps.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),ps.mark(e))}e=b||po();d[a]=e;e=Js(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||po();if(Is(c)){ys(c||"").tick[a]=b||po();e=vs(c);if("_start"===a){var f=Bs();Cs(f,"baseline_"+e)||tr("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Bs().tick(a,e,b);ws(c);e=!0}else e=!1;if(!e){if(!v("yt.timing."+(c||"")+"pingSent_")&&
(f=M((c||"")+"TIMING_ACTION",void 0),e=ss(c),v("ytglobal.timing"+(c||"")+"ready_")&&f&&Ms("_start")&&rs(c)))if(ws(c),c)Ns(c);else{f=!0;var g=M("TIMING_WAIT",[]);if(g.length)for(var k=0,l=g.length;k<l;++k)if(!(g[k]in e)){f=!1;break}f&&Ns(c)}ys(c||"").tick[a]=b||po()}return d[a]}
function Ms(a,b){var c=ss(b);return a in c}
function Ns(a){if(!Is(a)){var b=ss(a),c=us(a),d=b._start,e=M("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:M((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=rs(a);var k=ss(a),l=k.pbr,m=k.vc;k=k.pbs;l&&m&&k&&l<m&&m<k&&us(a).yt_pvis&&"youtube"===e&&(Ks("yt_lt","hot_bg",a),e=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=po();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(l=Math.round(b[p]-d),n[p]=l,e.push(p+"."+l));f.rt=
e.join(",");b=!!c.ap;N("debug_csi_data")&&(c=v("yt.timing.csiData"),c||(c=[],A("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var t in f)f.hasOwnProperty(t)&&(c+="&"+t+"="+f[t]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;Jn(f,r)||Gn(f,void 0,void 0,void 0,r)}else Gn(f);A("yt.timing."+(a||"")+"pingSent_",!0);bo(ms,new ks(n.aft+(Number(g)||0),a))}}
if(N("overwrite_polyfill_on_logging_lib_loaded")){var Os=window;Os.ytcsi&&(Os.ytcsi.info=Ks,Os.ytcsi.tick=Ls)};new Ri(Ps,1E3);function Ps(){Ls("vptl",0);Ls("vpl",0)}
;var T={},Qs=null;T.Vb=!1;T.init=function(){var a=H("yt-consent");Mm(a,"click",T.de,"consent-close");Mm(a,"click",T.ee,"consent-review");P(window,"message",T.lf);M("CONSENT_SHOW_DIALOG")&&(a=H("yt-consent-dialog-content"),T.ac(a),T.qd(),Kn(ed({a:"consent",consent:"forced"})),Mm(a,"click",T.Vd,"yt-dialog-dismiss"))};
T.de=function(){L(document.body,"sitewide-consent-visible");im("HideTicker","true",86400,"/");Kn(ed({a:"consent",consent:"later"}))};
T.ee=function(){T.qd();Kn(ed({a:"consent",consent:"review"}))};
T.Vd=function(a){a=a.currentTarget;a.disabled||(a=O(a,"action")||"",cr.prototype.dismiss(a),Kn(ed({a:"consent",consent:"dismiss"})),T.ob())};
T.qd=function(){var a=H("yt-consent-dialog");if(a){var b=!!M("CONSENT_SHOW_DIALOG");Qs=new cr(a,b,!b);T.Ub();T.wf();Qs.show()}};
T.Ub=function(){try{var a=as();a&&(a.isReady()?(1==a.getPlayerState(a.getPresentingPlayerType())&&(T.Vb=!0),a.pauseVideo()):a.addEventListener("onReady",T.Ub))}catch(b){Cm(b)}};
T.ob=function(){try{var a=as();a&&a.isReady()&&T.Vb&&(ym(),a.playVideo(),T.Vb=!1)}catch(b){Cm(b)}};
T.ac=function(a){var b=S("player-added",T.Ub,T);mm(a,"player-ready-pubsub-key",b)};
T.wf=function(){Um()};
T.lf=function(a){var b=a&&a.data,c=a&&a.origin;a=a&&a.source;var d=!1,e=$c(c);(e=lm[e]&&lm.hasOwnProperty(e))||(e=fm("consent_url_override"),e=void 0!==e?String(e):"");if(e){switch(b){case "cb-user-closed":Qs.dispose();T.Wc();T.ob();break;case "cb-ui-done-early":Qs.dismiss("close");T.ob();d=!0;break;case "cb-ui-done":case "cb-already-consented":Qs.dismiss("close");T.Wc();T.ob();d=!0;break;case "verify-origin":a.parent==window&&a.postMessage("verify-origin-reply",c)}d&&(L(document.body,"sitewide-consent-visible"),
Kn(ed({a:"consent",consent:"done"})))}};
T.Wc=function(){var a=H("yt-consent-iframe"),b=Wb(Rb(new Ob(Pb,"about:blank")));a.src=Vb(b).toString()};var Rs,Ss,Ts;function Us(){mm(Vs,"target-id","content")}
function Ws(){var a=H(O(Vs,"target-id"));a.setAttribute("tabindex","0");a.focus();a=Th(H("page-container")).y;window.scrollBy(0,-a)}
var Vs=null;function Xs(a){Ss&&Rs&&(pf(Ss),Ss.setAttribute("role","alert"),Rs.style.clip="auto",Ss.appendChild(document.createTextNode(a)),Ss.style.display="none",Ss.style.display="inline")}
;function Ys(a){Yl.call(this,a);this.ta=[];this.Y=[]}
B(Ys,Yl);Ys.prototype.Ba=function(){C(this.ta,Km);Vm(this.Y);Ys.L.Ba.call(this)};function Zs(){Ys.call(this);this.l=this.h=this.j=null;this.C="horizontal";this.u=null}
pa(Zs,Ys);Zs.prototype.Aa=function(){Ys.prototype.Aa.call(this);this.C=O(this.qa(),"overflowable-list-orientation")||"horizontal";this.j=Zl(this,"parent-list");this.u=Zl(this,"overflow-container");this.h=Zl(this,"overflow-list");Zl(this,"overflowable-list-item");this.l=Zl(this,"overflowable-list-more-button")};
function $s(){var a=af("overflowable-list-root",at),b=[];C(a,function(c){var d=new Zs;am(d,c);b.push(d)});
return b}
function bt(a,b){var c=ct(a),d=ct(b);return c<d?-1:c==d?0:1}
function dt(a,b){var c=qb(af("overflowable-list-item",b));return fb(c,function(d,e){return d+et(this,e)},0,a)}
function et(a,b){return"vertical"==a.C?Xh(b).height:Xh(b).width}
function ft(a){var b=I("overflowable-list-item",a.qa());return b?et(a,b):0}
function ct(a){return dt(a,a.j)+dt(a,a.h)}
;function gt(a,b,c){this.g=a;this.f=null;(a=b||null)||(a=ht(this.g));a=Pc("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.h=c||{}}
var it=/__([a-z]+(?:_[a-z]+)*)__/g;function jt(a,b){var c=kt(H(a));return new gt(c,b,void 0)}
function kt(a){a=a.innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");return a=a.replace(/(\s*--\x3e)?\s*$/,"")}
function ht(a){var b=[],c={};a.replace(it,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function lt(a,b){var c=x(function(d,e){return Rc(b[e]||this.h[e]||"")},a);
return a.g.replace(a.f,c)}
;var at,mt,nt,ot;var pt={jg:"content-snap-width-1",kg:"content-snap-width-2",lg:"content-snap-width-3"};function qt(){var a=[],b;for(b in pt)a.push(pt[b]);return a}
;function rt(){st=bf(document,"html",void 0,void 0)[0];tt=H("appbar-guide-button")}
function ut(a,b){var c=b||!1,d=J(st,"show-guide");hj(st,"show-guide",a);tt&&tt.setAttribute("aria-expanded",a);a&&!J(document.documentElement,"no-focus-outline")&&c?(c=I("guide-item",H("guide-container")))&&c.focus():U("guide-hidden");if(a&&!d||!a&&d){d="";if(c=H("page"))d=c.className;d=ed({"module-id":"guide-main",expanded:!0,auto:!1,"page-class":d,notification:!1});Kn("a=guide-toggled"+(d?"&"+d:""),void 0)}(d=H("page"))&&Sg&&(c=d.style.width,d.style.width="99.99%",Ed(d.offsetWidth),d.style.width=
c)}
function vt(){return J(st,"show-guide")}
function wt(){return J(document.body,"guide-pinning-enabled")}
function xt(){return wt()&&J(st,"guide-pinned")}
var st=null,tt=null;function zt(a){Rn.call(this,1,arguments);this.f=a}
B(zt,Rn);function At(a,b,c){Rn.call(this,1,arguments);this.f=c}
B(At,Rn);var Bt=new Sn("subscription-subscribe-success",At),Ct=new Sn("subscription-unsubscribe-success",zt);var Dt;function Et(){this.f=Ft}
function Gt(){function a(){var c=I("guide-likes-playlist-icon");if(c)return Nf(c,"guide-notification-item")}
Dt=H("appbar-main-guide-notification-container");Ht(function(){return I("guide-item-container",H("behavior-id-guide-playlists-section"))});
It("yt-uix-playlistlike-unliked","appbar-guide-notification-playlist-unlike");Jt("addto-menu-video-added","appbar-guide-notification-playlist-video-added",Kt,null,new Et);It("addto-menu-video-removed","appbar-guide-notification-playlist-video-removed");var b=y(H,"VLWL-guide-item");Jt("WATCH_LATER_VIDEO_ADDED","appbar-guide-notification-watch-later-video-added",b,1);Jt("WATCH_LATER_VIDEO_REMOVED","appbar-guide-notification-watch-later-video-removed",b,-1);Jt("yt-uix-videolike-liked","appbar-guide-notification-video-like",
a,1);Jt("yt-uix-videolike-unliked","appbar-guide-notification-video-unlike",a,-1);eo(Ct,Lt);eo(Bt,Mt)}
function Ft(a){if(!a||H(a.id))return null;var b=["ID","URL","TITLE","NOTIFICATION_OVERLAY_MESSAGE"];a=lt("RD"==a.playlistType?jt("appbar-guide-item-template-mix",b):jt("appbar-guide-item-template-playlist",b),{ID:"VL"+a.id,URL:a.url,TITLE:a.title,NOTIFICATION_OVERLAY_MESSAGE:a.title});return xm(a)}
function Kt(a){return H("VL"+a.id+"-guide-item")}
function Nt(a,b){var c=kt(H(a));c=xm(c);if(b){var d=I("appbar-guide-notification-text-content",c);if(d){var e=document.createTextNode(String(" "+b));d&&e&&d.appendChild(e)}}return c}
function Jt(a,b,c,d,e){S(a,function(f){var g=c.apply(null,arguments);if(d){var k=I("guide-count-value",g);if(k){var l=k.innerHTML;""===l.trim()||isNaN(l)||Bf(k,parseInt(l,10)+d)}}!g&&e&&(k=e.f(f),(l=I("guide-item-container",H("behavior-id-guide-playlists-section")))&&k&&qf(l,k));Ot(b,!!g,f?f.title:null)||((k=I("guide-item-update-notification",g))&&rf(k),k=Nt(b),K(k,"guide-item-update-notification"),g.appendChild(k),Q(y(K,g,"showing-update-notification"),0),Q(y(L,g,"showing-update-notification"),2E3))})}
function Ht(a){var b=Ft;S("yt-uix-playlistlike-liked",function(){var c=a(),d=b.apply(null,arguments);Ot("appbar-guide-notification-playlist-like",!!c)||(qf(c,d),U("guide-playlist-section-updated"))})}
function It(a,b){var c=Kt;S(a,function(){var d=c.apply(null,arguments);Pt(d,b,"guide-playlist-section-updated")})}
function Pt(a,b,c){Ot(b,!!a)||(b=Nt(b),K(b,"guide-item-removal-notification"),a.appendChild(b),Q(y(K,a,"removing-guide-item"),0),Q(function(){rf(a);U(c)},2E3))}
function Ot(a,b,c){if(b&&vt())return!1;pf(Dt);Dt.appendChild(Nt(a,c));K(document.body,"show-guide-button-notification");Q(y(L,document.body,"show-guide-button-notification"),2E3);return!0}
function Mt(a){if(H("guide-subscriptions-promo")){U("force-reload-subscriptions");var b=!0}else b=!1;b||(b=H("guide-channels"),a=a.f,a=lt(jt("appbar-guide-item-template-channel",["ID","URL","TITLE","THUMBNAIL_URL","NOTIFICATION_OVERLAY_MESSAGE"]),{ID:a.external_id,URL:a.url,TITLE:a.title,THUMBNAIL_URL:a.thumbnail,NOTIFICATION_OVERLAY_MESSAGE:a.title}),a=xm(a),Ot("appbar-guide-notification-subscription",!!b)||(qf(b,a),U("guide-channel-section-updated")))}
function Lt(a){a=a.f;Pt(a?H(a+"-guide-item"):null,"appbar-guide-notification-unsubscription","guide-channel-section-updated")}
;function Qt(a,b,c){var d=c&&0<c?c:0;c=d?z()+1E3*d:0;if((d=d?Rt():St())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function Tt(a){var b=St(),c=Rt();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function Ut(a){try{var b=St(),c=Rt();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function Vt(){var a=Rt();a&&Jl(a,a.f.ua(!0))}
var Rt=ab(function(){var a=new Nl;return a.isAvailable()?new Hl(a):null}),St=ab(function(){var a=new Ol;
return a.isAvailable()?new Hl(a):null});var Wt=[];function Xt(a){for(var b=0;b<a.length;b++){var c=a[b];if(J(c,"generic-promo-impression-logging")){for(var d=af("generic-promo-impression-feedback",c),e=0;e<d.length;e++){var f={feedback_tokens:[O(d[e],"feedback-token")]};un("/feed_change_ajax?action_give_feedback=1",{method:"POST",T:f})}L(c,"generic-promo-impression-logging")}}}
;var Yt=[];
function Zt(){var a=af("promoted-button-container");C(a,function(b){a:{var c=O(b,"promo-id");var d=parseInt(O(b,"promo-impression-cap"),10)||0;var e=parseInt(O(b,"promo-impression-delay"),10)||0;if(c&&0<d&&0<e){c="yt-hint-"+c;var f=Tt(c)||{},g=f.lastSeen;f=f.impressions||0;if(g&&z()-new Date(g)<1E3*e||f>=d){d=!1;break a}f={lastSeen:z(),impressions:f+1};Qt(c,f,2592E3)}d=!0}if(d){if("true"===O(b,"promo-visible")&&(d=$q.getInstance(),d.sd(b),"hidden"!=window.getComputedStyle(b).visibility&&(d.show(b),
J(b,"hide-hint-on-scroll")&&(d=H(O(b,"scroll-parent"))||window,Yt.push(Om(d,"scroll",x($t,this,b)))))),b&&(d=v("yt.www.page.visibilitymonitor.delegateByClass")))b=d(b,v("yt.www.page.visibilitymonitor.States.VISIBLE"),Xt,"generic-promo-impression-logging"),Wt.push(b)}else(b=I("generic-promo-impression-logging",b))&&L(b,"generic-promo-impression-logging")})}
function $t(a){$q.getInstance().hide(a)}
;var au=v("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",au);function bu(){this.f=M("ALT_PREF_COOKIE_NAME","PREF");var a=jm(this.f);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(au[d]=c.toString())}}}
h=bu.prototype;h.get=function(a,b){cu(a);du(a);var c=void 0!==au[a]?au[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){cu(a);du(a);if(null==b)throw Error("ExpectedNotNull");au[a]=b.toString()};
function eu(a){return!!((fu("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
function gu(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=fu(c)||0;e=b?e|d:e&~d;0==e?delete au[c]:(d=e.toString(16),au[c]=d.toString())}
h.remove=function(a){cu(a);du(a);delete au[a]};
h.save=function(){im(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in au)delete au[a]};
h.dump=function(){var a=[],b;for(b in au)a.push(b+"="+encodeURIComponent(String(au[b])));return a.join("&")};
function du(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cu(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fu(a){a=void 0!==au[a]?au[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(bu);function hu(a){if(!iu||a)iu=ef(window);return iu}
var iu=null;var ju=[],ku=[],lu=[];
function mu(){at=H("guide");mt=H("guide-channels");nt=H("appbar-guide-menu");ot=H("appbar-guide-iframe-mask");Gt();at&&(rt(),J(document.body,"exp-scrollable-guide")||nu(),ju.push(Mm(at,"click",ou,"guide-sort-choice")),J(document.body,"exp-scrollable-guide")?(pu(hu(!0)),ku.push(S("page-resize",pu))):ku.push(S("page-resize",qu)),ku.push(S("guide-channel-section-updated",ru)),ku.push(S("guide-playlist-section-updated",y(qu,y(hu,!0)))),ku.push(S("force-reload-subscriptions",su)),ku.push(S("update-guide-subscriptions",
tu)),ku.push(S("guide-hidden",uu)),Zt())}
function vu(a,b){C(af("guide-flyout-container",at),function(c){ju.push(P(c,a,b))})}
function wu(a){xu(a.currentTarget)}
function uu(){var a=af("guide-flyout-container",at);C(a,function(b){xu(b)})}
function xu(a){var b=I("guide-flyout",a),c=I("guide-flyout-trigger",a);a=I("guide-flyout-iframe-mask",a);L(b,"flyout-shown");a&&L(a,"flyout-shown");L(c,"on-hover")}
function yu(a){a=a.currentTarget;var b=I("guide-flyout",a),c=I("guide-flyout-trigger",a),d=I("guide-flyout-iframe-mask",a),e=I("guide-flyout",a),f=ci(e),g=I("guide-channels-list",a),k=hu(!0),l=I("guide-flyout-trigger",a),m=I("guide-flyout-iframe-mask",a),n=k.height-(nt?nt.offsetTop:0);g.style.maxHeight=n-f.top-f.bottom+"px";f=Xh(e).height;g=Xh(l);l=Vh(l);n=Math.min(n-f,Math.max(0,k.height-l.y-g.height/2-f/2));g=l.x+g.width;k=k.width-l.x;e.style.bottom=n+"px";m&&(m.style.height=f+"px",m.style.bottom=
n+"px");"rtl"==document.body.getAttribute("dir")?(e.style.right=k+"px",e.style.left="",m&&(m.style.right=k+"px",m.style.left="")):(e.style.left=g+"px",e.style.right="",m&&(m.style.left=g+"px",m.style.right=""));K(b,"flyout-shown");d&&K(d,"flyout-shown");K(c,"on-hover");U("yt-dom-content-change",a)}
function zu(){ot&&nt&&(ot.style.height=Xh(nt).height+"px",ot.style.marginTop=nt.style.marginTop,ot.style.top=nt.style.top)}
function nu(){mt=H("guide-channels");lu=$s();qu(hu(!0));vu("mouseenter",yu);vu("mouseleave",wu)}
function ou(a){var b=I("guide-sort-button"),c=O(b,"guide-sort")||"",d=O(a.currentTarget,"guide-sort")||"";c!=d&&(mm(b,"guide-sort",d),un("/guide_channels_ajax?action_set_guide_sort=1",{method:"POST",ab:{sort:d},format:"JSON",onSuccess:function(e,f){tu(f);var g=af("guide-sort-choice");C(g,function(k){var l=O(k,"guide-sort");oq.getInstance();k=k.parentNode;l=d==l;var m=vm("span","yt-uix-button-icon-wrapper",k);if(!m&&l){var n=kf("SPAN",{"class":"yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"}),
p=kf("DIV",{"class":"yt-uix-button-icon-dropdown-checked"});n.appendChild(p);qf(k,n)}Ln(m,l)})}}))}
function tu(a){var b=a.channels;b&&(a=H("guide-subscriptions-section"),b=of(Ah(b)),sf(b,a),lu=$s(),Au(),a=af("yt-uix-tooltip-tip-visible"),C(a,function(c){L(c,"yt-uix-tooltip-tip-visible")}))}
function Au(){nu();U("yt-dom-content-change",at)}
function ru(){mt&&(mt.firstElementChild?Au():su())}
function Bu(a){var b=af("guide-item",at);return ib(b,function(c){return O(c,"serialized-endpoint")==a})}
function pu(a){nt&&Lh(nt,"max-height",a.height-50+"px")}
function qu(a){if(lu&&!J(document.body,"exp-scrollable-guide")){var b=Cu(a),c=lu.length,d=0;lu.sort(bt||ub);C(lu,function(e,f){var g=ct(e)-d;g=Math.min(g,b/(c-f));b-=(c-f)*g;g=d+=g;g-=g>=ct(e)?0:e.l?et(e,e.l):0;g=Math.max(ft(e),g);var k=dt(e,e.j);if(k>g)for(;k>g;){var l=e.j;if(l=void 0!==l.lastElementChild?l.lastElementChild:wf(l.lastChild,!1)){var m=et(e,l);k-=m;qf(e.h,l)}else break}else if(k<g){for(l=document.createDocumentFragment();0!=uf(e.h).length;)if(m=vf(e.h)){var n=et(e,m);if(k+n<=g)k+=n,
l.appendChild(m);else break}else break;e.j.appendChild(l)}hj(e.u,"empty-overflow-list",0==uf(e.h).length)});
zu()}}
function Cu(a){var b=nt,c=H("guide-container");if(!c||!b)return 0;var d=ci(c);d=d.top+d.bottom;c=vf(c).clientHeight;var e=0;C(lu,function(f){e+=f.j?dt(f,f.j):0;e+=0==uf(f.h).length?0:f.l?et(f,f.l):0});
c=d+c-e;return(xt()?b.clientHeight:a.height-50)-c}
function su(){un("/guide_channels_ajax?action_load_subs_and_footer=1",{format:"JSON",onSuccess:function(a,b){tu(b)}})}
;function Du(){var a={action_get_delegate_accounts:1,owner_picker_redirect_url:M("OWNER_PICKER_REDIRECT_URL")};Object.assign(a,Eu());a.o=Fu().o;return a}
function Eu(){var a={};void 0!==(void 0!==Fu().earst?Gu():Fu().ar)&&(a.ar=void 0!==Fu().earst?Gu():Fu().ar);void 0!==Fu().nv&&(a.nv=Fu().nv);return a}
var Hu=Date.now(),Iu=Date.now();function Gu(){var a=Date.now()-Iu;a=Hu+a;return""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}
function Fu(){return M("CREATOR_CONTEXT",Ju)}
var Ju={o:"U"},Ku=Fu().earst;void 0!==Ku&&(Hu=Ku,Iu=Date.now());var Lu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Lu);function Mu(a){var b=void 0===b?{}:b;a=(a=a in Lu?Lu[a]:void 0)||"";var c={},d;for(d in b){c.cb=d;var e=function(f){return function(){return String(b[f.cb])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.cb+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.cb,"gi"),e);c={cb:c.cb}}return a}
function Nu(a){var b="MASTHEAD_NOTIFICATIONS_LABEL"in Lu?Lu.MASTHEAD_NOTIFICATIONS_LABEL:{},c=M("I18N_PLURAL_RULES");c||(c=function(d){return 1==d?"one":"other"});
return(b=b["case"+a]||b[c(a)])?b.replace("#",a.toString()):a+""}
;var Ou=null;function Pu(a){var b={key:"HighPriorityNotificationTimestamp"};b.value=a;return Qu().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(b);f.onsuccess=function(){d()};
f.onerror=function(){e()}}catch(g){e(g)}})})}
function Ru(a){var b=new cq("Error accessing DB");return Qu().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var g=f.result;d(g?g.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(g){b.params={key:a,
thrownError:String(g)},e(b)}})},function(){return null})}
function Qu(){return Ou?Promise.resolve(Ou):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Ou=d,a(Ou);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Qu()};
c.onupgradeneeded=Su})}
function Su(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;var Tu=0,Uu="";function Vu(a){if(N("desktop_notification_set_title_bar")){var b=Wu();Tu=a;Uu=b;document.title=Xu()}}
function Wu(){if(!Tu)return document.title;if(document.title==Xu())return Uu;var a=Tu?"("+Tu+") ":"";return 0!=document.title.indexOf(a)?document.title:document.title.substring(a.length)}
function Yu(){Tu&&0!=document.title.indexOf(Xu())&&(Uu=document.title,document.title=Xu())}
function Xu(){return(Tu?"("+Tu+") ":"")+Uu}
;var Zu="",$u=!1,av=null,bv=null,cv=null,dv=null,ev=null;function fv(a,b){Ru("NotificationsDisabled").then(function(c){return N("desktop_notification_high_priority_ignore_push")||!window.Notification||"granted"!=Notification.permission||c?Ru("HighPriorityNotificationTimestamp").then(function(d){d||(d=0);if(a<=d)return Promise.resolve();gv(d,b);return Pu(a)}):Promise.resolve()})}
function hv(){un("/feed_ajax?action_get_unseen_notification_count=1",{method:"GET",onSuccess:iv})}
function jv(){J(bv,"yt-high-priority-notification")&&(bv&&L(bv,"yt-high-priority-notification"),dv&&$q.getInstance().hide(dv))}
function gv(a,b,c){dv&&((void 0===c?0:c)||!window.document.hasFocus||window.document.hasFocus()?(Zu&&(Km(Zu),Zu=""),c={action_get_high_priority_notification_flyout:1,timestampLowerBound:a},c[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0),spf.load("/feed_ajax",{method:"POST",postData:ed(c),onDone:function(){J(av,"yt-uix-clickcard-active")||($u=!0,dv&&($q.getInstance().hide(dv),K(bv,"yt-high-priority-notification"),$q.getInstance().show(dv),om(cv,"loaded"),L(av,"yt-uix-clickcard-active")),$u=!1,
Q(jv,b))}})):Zu||(Zu=Om(window,"focus",function(){gv(a,b,!0)})))}
function kv(a){(a=I("unread-dot",a.currentTarget))&&Pn(a)}
function iv(a,b){if(ev){fv(b.timestamp_lower_bound||0,b.high_priority_notification_timeout_ms||5E3);var c=b.unseen_notification_count||0,d=String(c);100<=c&&(d=Mu("MASTHEAD_NOTIFICATIONS_COUNT_99PLUS"));Bf(ev,d);Vu(c);dv&&(0==c?(d=dv,L(d,"sb-notif-on"),K(d,"sb-notif-off")):(d=dv,L(d,"sb-notif-off"),K(d,"sb-notif-on"),om(cv,"loaded")),c=Nu(c),dv.setAttribute("aria-label",c),dv.setAttribute("title",c));(c=b.polling_timeout)&&Q(hv,c)}}
;var lv,mv,nv="";function ov(){if("U"==Fu().o){var a=af("yt-masthead-account-picker-user-option"),b=bd(window.location.href);C(a,function(e){-1!=e.href.indexOf("action_handle_signin")&&Mc(e,bd(cn(e.href,{next:b})))})}else{a=af("yt-masthead-account-picker-owner-option");
var c=ad();if(c){var d=c.indexOf(";");-1!=d&&(c=c.substring(0,d))}c&&C(a,function(e){var f=bn(e.href).next;if(f){var g=f.indexOf("#");f=(0>g?f:f.substr(0,g))+(c?"#"+c:"");Mc(e,bd(cn(e.href,{next:f})))}})}}
function pv(){L(document.body,"sitewide-ticker-visible");U("masthead-ticker-close")}
function qv(){var a=M("SBOX_JS_URL",nv);if(a){nv=a;var b=v("yt.www.masthead.searchbox.init");b?b():rv(a,function(){try{var c=v("yt.www.masthead.searchbox.init");c()}catch(d){throw d.message=d.message+' sbox type: "'+Na(c)+'"',d;}})}}
function rv(a,b){var c=H("masthead-search-term");if(c){var d=function(){sv();mv=b;nr(a,b);Km([e,f])};
var e=Om(c,"mouseover",d);var f=Om(c,"keypress",d)}}
function sv(){v("yt.www.masthead.searchbox.init")||(sr(nv,mv),mv=null)}
function tv(){var a=H("masthead-search-term");a&&a.focus()}
;var uv=[],vv="",wv=[],xv=null,yv=null,zv=0,Av=0,Bv=!1,Cv=!1,Dv=0,Ev=0,Fv=0,Gv=null,Hv=null,Iv=null,Jv=!1,Kv=null,Lv=!1,Mv=null,Nv=!1,Ov=!1,Pv=!1;function Qv(){if(H("masthead-appbar")){yv=H("masthead-positioner");xv=H("masthead-positioner-height-offset");rt();Rv();Sv();Gv=new Oi(Tv);var a=Uv;v("yt.scheduler.instance")&&(a=function(){Wn(Uv)});
wv.push(S("init",a));wv.push(S("dispose",Vv));Iv=qt();Kv=bu.getInstance();Wv(eu(128)?eu(129):!0);Mv=bf(document,"html",void 0,void 0)[0];wv.push(S("masthead-ticker-close",Xv));wv.push(S("appbar-guide-delay-load",Rv));wv.push(S("page-resize",Yv));Nv||Uv()}}
function Uv(){Hv=I("appbar-content-trigger");(Pv=J(document.body,"always-autohide-masthead"))?om(lv,"position-fixed"):mm(lv,"position-fixed","true");Pv||Hv?vv=P(window,"scroll",Zv):$v();Jv=!!H("appbar-guide-menu")&&wt();Nv?(Jv||(hj(st,"guide-pinned",!1),ut(!1),nt&&(nt.scrollTop=0)),Yv()):Nv=!0;var a=-1*Vh(yv).y,b=document.body.scrollHeight,c=a-(b-document.body.clientHeight);0<c&&(document.body.style.minHeight=""+b+c+"px");hf(document).scrollTop+=a;zv=gf(document).y;aw();bw();zu()}
function Vv(){Hv=null;$v()}
function aw(){if(!Hv||Ov)Ln(null,!0);else{var a=Xh(Hv).height,b=Xh(yv).height;b=Vh(yv).y+b;a=Math.floor(Vh(Hv).y)+a;var c=J(document.body,"appbar-hidden"),d=hf(document);c&&a<b+40?(d.scrollTop+=40,Ln(null,!0),L(document.body,"appbar-hidden"),cw()):!c&&b<a&&(d.scrollTop-=40,K(document.body,"appbar-hidden"),cw())}}
function cw(){Ov=!0;Q(function(){Ov=!1;J(document.body,"appbar-hidden")&&Ln(null,!1)},300)}
function Yv(){Jv&&(hj(st,"guide-pinned",1251<=(window.innerWidth||document.documentElement.clientWidth)),ut(xt()&&Lv));dw()}
function dw(){if(document.body)if(J(document.body,"flex-width-enabled-snap")){var a=xt()&&vt();var b=(window.innerWidth||document.documentElement.clientWidth)-21-50;1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&(b-=230);a=1262<=b?"content-snap-width-3":1056<=b?"content-snap-width-2":"content-snap-width-1";J(Mv,a)||(gj(Mv,Iv),K(Mv,a),U("yt-dom-content-change"))}else gj(Mv,Iv)}
function ew(){return H("appbar-guide-menu")}
function Sv(){var a=J(document.body,"appbar-hidden"),b=Vh(yv).y,c=Xh(yv).height;Av=a?b+c:b+c-40}
function fw(a){xt()||Nf(a.target,"appbar-guide-clickable-ancestor")||ut(!1)}
function Tv(){var a=Math.max(0,gf(document).y),b=zv;zv=a;var c=b-a;0<c&&0==Dv?Dv=b:0>c&&(Dv=0);c=Math.min(0,Math.max(c+Ev,-Av));var d=Pv;if(d){var e=a<Av;b=a>b&&Math.abs(Ev)<Av;vt()&&b?a=!1:(a=d?!1:100<=Dv-a,a=e||b||a)}else a=!1;a&&Ev!=c&&(yv.style.top=c+"px",Fv=Ev=c,gw());aw()}
function gw(){var a=ew();a&&(a.style.top=Fv+"px");zu()}
function Rv(){if(!Cv){var a=ew();if(!a||I("guide-module-loading",a)){var b=H("appbar-guide-button");if(!b)return;uv.push(Om(b,"click",function(){U("appbar-show-guide")}))}gw();
uv.push(Mm(a,"click",bw,"guide-item"));uv.push(P(a,"mouseleave",hw));uv.push(P(document.body,"click",fw));a=I("appbar-guide-toggle");uv.push(P(a,"click",iw));Cv=!0}}
function bw(){Bv=!xt()}
function hw(){Bv&&(ut(!1),Bv=!1)}
function iw(){var a=!vt();ut(a,!0);a&&U("yt-dom-content-change");xt()&&Wv(a);dw()}
function Wv(a){gu(128,!0);gu(129,a);Kv.save();Lv=a}
function $v(){Km(vv);Gv&&Gv.stop();vv=""}
function Zv(){Gv.isActive()||Gv.start()}
function Xv(){var a=Vh(yv).y,b=Xh(yv).height;xv.style.height=""+a+b+"px";var c=ew();c&&(J(document.body,"appbar-hidden")?c.style.marginTop=""+a+b+"px":c.style.marginTop=a+b-40+"px",zu());Sv()}
;var jw;function kw(a){lw(H("yt-picker-"+a+"-footer"),a,!1,!1,!0);H("footer").scrollIntoView()}
function lw(a,b,c,d,e){c||(jw&&jw!=a&&Pn(jw),jw=a,e?On(a):Qn(a));d?I("yt-close",a).focus():(c={},c["action_"+b]=1,c.base_url=window.location.href.split("#",1)[0],un("/picker_ajax",{format:"JSON",method:"GET",ab:c,onSuccess:x(mw,null,a),onError:function(){Pn(a)}}))}
function mw(a,b,c){if(c&&c.html){mm(a,"loaded",1);a.innerHTML=c.html;nw(a);c=(b=document.body||hf(document))||hf(document);var d=Th(a),e=Th(c),f=fi(c);if(c==hf(document)){var g=d.x-c.scrollLeft;d=d.y-c.scrollTop;G&&!be(10)&&(g+=f.left,d+=f.top)}else g=d.x-e.x-f.left,d=d.y-e.y-f.top;f=Yh(a);e=c.clientHeight-f.height;var k=c.scrollLeft,l=c.scrollTop;k+=Math.min(g,Math.max(g-(c.clientWidth-f.width),0));l+=Math.min(d,Math.max(d-e,0));c=new Ue(k,l);b.scrollLeft=c.x;b.scrollTop=c.y;I("yt-close",a).focus()}else Pn(a)}
function nw(a,b){var c=I("yt-picker-content",a);if(c){var d=bf(document,null,"yt-picker-section",c);C(d,x(ow,null,Math.floor((b||c.offsetWidth)/180)))}else Dm(Error(".yt-picker-content missing"))}
function ow(a,b){for(var c=bf(document,null,"yt-picker-item",b),d=Math.ceil(c.length/a),e,f=lf(document,"div"),g=0;g<a;g++){e=lf(document,"div");e.className="yt-picker-grid";for(var k=d*g;k<d*(g+1);k++)c[k]&&e.appendChild(c[k]);e.children.length&&f.appendChild(e)}c=tm(f);for(pf(b);0<c.childNodes.length;)b.appendChild(c.childNodes[0])}
;var pw={Yf:"atp",hg:"ska",eg:"que",dg:"mus",gg:"sus",cg:"dsp",fg:"seq"};function qw(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.h=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new Zi;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",rw(this,a.capabilities||""),sw(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
qw.prototype.copy=function(){var a=new qw({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.h=this.h;a.g=this.g;a.f=this.f;return a};
qw.prototype.equals=function(a){return a?this.id==a.id:!1};
function rw(a,b){a.capabilities.clear();db(b.split(","),y(zb,pw)).forEach(function(c){a.capabilities.add(c)})}
function sw(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;function tw(a,b){this.action=a;this.params=b||{}}
;function uw(a,b){yd.call(this);this.f=new Ri(this.af,0,this);zd(this,y(Ad,this.f));this.h=5E3;this.g=0;if("function"===typeof a)b&&(a=x(a,b));else if(a&&"function"===typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");this.i=a}
B(uw,yd);h=uw.prototype;h.af=function(){this.h=Math.min(3E5,2*this.h);this.i();this.g&&this.start()};
h.start=function(){var a=this.h+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=z()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.h=5E3};function vw(a,b,c){this.H=a;this.l=b;this.h=new wl;this.g=new uw(this.pf,this);this.f=null;this.C=!1;this.j=null;this.u="";this.D=this.i=0;this.B=[];this.J=c||!1}
B(vw,ql);h=vw.prototype;h.subscribe=function(a,b,c){return this.h.subscribe(a,b,c)};
h.Nc=function(a,b){yl(this.h,a,b,void 0)};
h.ha=function(a){return this.h.ha(a)};
h.A=function(a,b){this.h.ba.apply(this.h,arguments)};
h.dispose=function(){this.C||(this.C=!0,Ad(this.h),ww(this),Ad(this.g),this.g=null)};
h.K=function(){return this.C};
function xw(a){return{firstTestResults:[""],secondTestResults:!a.f.Gb,sessionId:a.f.h,arrayId:a.f.Va}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.u="";this.g.stop();this.j=a||null;this.i=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new Wk(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.f;e&&(e.V=null);d.V=this;this.f=d;e?this.f.connect(a,b,this.l,e.h,e.Va):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function ww(a,b){a.D=b||0;a.g.stop();a.f&&(3==a.f.f&&jl(a.f),cl(a.f));a.D=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Kb(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.B.push(c):yw(this)&&il(this.f,c)};
h.lc=function(){this.g.reset();this.j=null;this.i=0;if(this.B.length){var a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)il(this.f,a[b])}this.A("handlerOpened")};
h.jc=function(a){var b=2==a&&401==this.f.sa;4==a||b||this.g.start();this.A("handlerError",a)};
h.Kb=function(a){if(!this.g.isActive())this.A("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.B.push(d)}};
h.wc=function(){var a={v:2};this.u&&(a.gsessionid=this.u);0!=this.i&&(a.ui=""+this.i);0!=this.D&&(a.ui=""+this.D);this.j&&Kb(a,this.j);return a};
h.kc=function(a){"S"==a[0]?this.u=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),cl(this.f)):this.A("handlerMessage",new tw(a[0],a[1]))};
function yw(a){return!!a.f&&3==a.f.f}
function zw(a,b){(a.l.loungeIdToken=b)||a.g.stop()}
h.pf=function(){this.g.isActive();var a=this.f,b=0;a.R&&b++;a.Z&&b++;0==b&&this.connect(this.j,this.i)};var Aw=z(),Bw=null,Cw=Array(50),Dw=-1,Ew=!1;function Fw(){var a=Gw;Hw();Bw.push(a);Iw(Bw)}
function Jw(a,b){Hw();var c=Bw,d=Kw(a,String(b));0==c.length?Lw(d):(Iw(c),C(c,function(e){e(d)}))}
function Hw(){Bw||(Bw=v("yt.mdx.remote.debug.handlers_")||[],A("yt.mdx.remote.debug.handlers_",Bw))}
function Lw(a){var b=(Dw+1)%50;Dw=b;Cw[b]=a;Ew||(Ew=49==b)}
function Iw(a){var b=Cw;if(b[0]){var c=Dw,d=Ew?c:-1;do{d=(d+1)%50;var e=b[d];C(a,function(f){f(e)})}while(d!=c);
Cw=Array(50);Dw=-1;Ew=!1}}
function Kw(a,b){var c=(z()-Aw)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function Mw(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Zc(4,a))||"";b&&(this.port=":"+b);this.domain=$c(a)||"";a=rc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>fc(a,"10.0")&&(this.g=!1))}
function Nw(a,b){var c=a.f;a.g&&(c="https://"+a.domain+a.port+a.f);return fd(c+b,{})}
function Ow(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:y(a.i,d,!0),onError:y(a.h,e),Oa:y(a.j,e)};c&&(a.T=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return un(b,a)}
Mw.prototype.i=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Mw.prototype.h=function(a,b){a(Error("Request error: "+b.status))};
Mw.prototype.j=function(a){a(Error("request timed out"))};function Pw(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function Qw(a,b){return!!b&&(a.id==b||a.uuid==b)}
function Rw(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function Sw(a){return new Pw(a)}
function Tw(a){return Array.isArray(a)?eb(a,Sw):[]}
function Uw(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function Vw(a){return Array.isArray(a)?"["+eb(a,Uw).join(",")+"]":"null"}
;function Ww(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function Xw(a,b){return ib(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function Yw(a,b){return ib(a,function(c){return Qw(c,b)})}
;function Zw(a){a=void 0===a?!1:a;yd.call(this);this.l=new wl(a);zd(this,y(Ad,this.l))}
B(Zw,yd);Zw.prototype.subscribe=function(a,b,c){return this.K()?0:this.l.subscribe(a,b,c)};
Zw.prototype.Nc=function(a,b){this.K()||yl(this.l,a,b,void 0)};
Zw.prototype.ha=function(a){return this.K()?!1:this.l.ha(a)};
Zw.prototype.A=function(a,b){this.K()||this.l.ba.apply(this.l,arguments)};function $w(a){Zw.call(this);this.u=a;this.screens=[]}
B($w,Zw);$w.prototype.ea=function(){return this.screens};
$w.prototype.Ib=function(a){return!!Xw(this.screens,a)};
$w.prototype.get=function(a){return a?Yw(this.screens,a):null};
function ax(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function bx(a,b){var c=a.screens.length!=b.length;a.screens=db(a.screens,function(f){return!!Xw(b,f)});
for(var d=0,e=b.length;d<e;d++)c=ax(a,b[d])||c;return c}
function cx(a,b){var c=a.screens.length;a.screens=db(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c}
$w.prototype.info=function(a){Jw(this.u,a)};function dx(a,b,c,d){Zw.call(this);this.C=a;this.u=b;this.i=c;this.j=d;this.h=0;this.f=null;this.g=NaN}
pa(dx,Zw);h=dx.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.jd()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(R(this.g),this.g=NaN)};
h.F=function(){this.stop();Zw.prototype.F.call(this)};
h.jd=function(){this.g=NaN;this.f=un(Nw(this.C,"/pairing/get_screen"),{method:"POST",T:{pairing_code:this.u},timeout:5E3,onSuccess:x(this.Cf,this),onError:x(this.Bf,this),Oa:x(this.Df,this)})};
h.Cf=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.A("pairingComplete",new Pw(c))};
h.Bf=function(a){this.f=null;a.status&&404==a.status?this.h>=ex.length?this.A("pairingFailed",Error("DIAL polling timed out")):(a=ex[this.h],this.g=Q(x(this.jd,this),a),this.h++):this.A("pairingFailed",Error("Server error "+a.status))};
h.Df=function(){this.f=null;this.A("pairingFailed",Error("Server not responding"))};
var ex=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];var fx;function gx(){var a=hx(),b=ix();kb(a,b);if(jx()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var k=ub(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:-d-1;0>d&&sb(c,-(d+1),0,b)}a=kx(a);if(0==a.length)try{km("remote_sid")}catch(l){}else try{im("remote_sid",a.join(","),-1,"/")}catch(l){}}
function hx(){var a=Tt("yt-remote-connected-devices")||[];a.sort(ub);return a}
function kx(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return eb(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function lx(a){Qt("yt-remote-connected-devices",a,86400)}
function ix(){if(mx)return mx;var a=Tt("yt-remote-device-id");a||(a=Ww(),Qt("yt-remote-device-id",a,31536E3));for(var b=hx(),c=1,d=a;kb(b,d);)c++,d=a+"#"+c;return mx=d}
function nx(){return Tt("yt-remote-session-browser-channel")}
function jx(){return Tt("yt-remote-session-screen-id")}
function ox(a){5<a.length&&(a=a.slice(a.length-5));var b=eb(px(),function(d){return d.loungeToken}),c=eb(a,function(d){return d.loungeToken});
hb(c,function(d){return!kb(b,d)})&&qx();
Qt("yt-remote-local-screens",a,31536E3)}
function px(){return Tt("yt-remote-local-screens")||[]}
function qx(){Qt("yt-remote-lounge-token-expiration",!0,86400)}
function rx(a,b){Qt("yt-remote-session-browser-channel",a);Qt("yt-remote-session-screen-id",b);var c=hx(),d=ix();kb(c,d)||c.push(d);lx(c);gx()}
function sx(a){a||(Ut("yt-remote-session-screen-id"),Ut("yt-remote-session-video-id"));gx();a=hx();mb(a,ix());lx(a)}
function tx(){if(!fx){var a=Vl();a&&(fx=new Bl(a))}return fx?!!fx.get("yt-remote-use-staging-server"):!1}
var mx="";function ux(a){$w.call(this,"LocalScreenService");this.g=a;this.f=NaN;vx(this);this.info("Initializing with "+Vw(this.screens))}
B(ux,$w);h=ux.prototype;h.start=function(){vx(this)&&this.A("screenChange");!Tt("yt-remote-lounge-token-expiration")&&wx(this);R(this.f);this.f=Q(x(this.start,this),1E4)};
h.add=function(a,b){vx(this);ax(this,a);xx(this,!1);this.A("screenChange");b(a);a.token||wx(this)};
h.remove=function(a,b){var c=vx(this);cx(this,a)&&(xx(this,!1),c=!0);b(a);c&&this.A("screenChange")};
h.Fb=function(a,b,c,d){var e=vx(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,xx(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.A("screenChange")};
h.F=function(){R(this.f);ux.L.F.call(this)};
function wx(a){if(a.screens.length){var b=eb(a.screens,function(d){return d.id}),c=Nw(a.g,"/pairing/get_lounge_token_batch");
Ow(a.g,c,{screen_ids:b.join(",")},x(a.Xd,a),x(a.Wd,a))}}
h.Xd=function(a){vx(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}xx(this,!b);b&&Jw(this.u,"Missed "+b+" lounge tokens.")};
h.Wd=function(a){Jw(this.u,"Requesting lounge tokens failed: "+a)};
function vx(a){var b=Tw(px());b=db(b,function(c){return!c.uuid});
return bx(a,b)}
function xx(a,b){ox(eb(a.screens,Rw));b&&qx()}
;function yx(a,b){Zw.call(this);this.u=b;var c=Tt("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.u(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=kb(c,k)}this.f=d;this.j=a;this.h=this.i=NaN;this.g=null;zx("Initialized with "+vj(this.f))}
pa(yx,Zw);h=yx.prototype;h.start=function(){var a=parseInt(Tt("yt-remote-fast-check-period")||"0",10);(this.i=z()-144E5<a?0:a)?Ax(this):(this.i=z()+3E5,Qt("yt-remote-fast-check-period",this.i),this.Wb())};
h.isEmpty=function(){return Eb(this.f)};
h.update=function(){zx("Updating availability on schedule.");var a=this.u(),b=xb(this.f,function(c,d){return c&&!!Yw(a,d)},this);
Bx(this,b)};
function Cx(a,b,c){var d=Nw(a.j,"/pairing/get_screen_availability");Ow(a.j,d,{lounge_token:b.token},x(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),x(function(){c(!1)},a))}
h.F=function(){R(this.h);this.h=NaN;this.g&&(this.g.abort(),this.g=null);Zw.prototype.F.call(this)};
function Bx(a,b){a:if(yb(b)!=yb(a.f))var c=!1;else{c=Bb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(zx("Updated online screens: "+vj(a.f)),a.f=b,a.A("screenChange"));Dx(a)}
function Ax(a){isNaN(a.h)||R(a.h);a.h=Q(x(a.Wb,a),0<a.i&&a.i<z()?2E4:1E4)}
h.Wb=function(){R(this.h);this.h=NaN;this.g&&this.g.abort();var a=Ex(this);if(yb(a)){var b=Nw(this.j,"/pairing/get_screen_availability");this.g=Ow(this.j,b,{lounge_token:Bb(a).join(",")},x(this.Ye,this,a),x(this.Xe,this))}else Bx(this,{}),Ax(this)};
h.Ye=function(a,b){this.g=null;a:{var c=Bb(Ex(this));var d=Bb(a);if(Oa(c)&&Oa(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Bx(this,d);Ax(this)}else this.N("Changing Screen set during request."),this.Wb()};
h.Xe=function(a){this.N("Screen availability failed: "+a);this.g=null;Ax(this)};
function zx(a){Jw("OnlineScreenService",a)}
h.N=function(a){Jw("OnlineScreenService",a)};
function Ex(a){var b={};C(a.u(),function(c){c.token?b[c.token]=c.id:this.N("Requesting availability of screen w/o lounge token.")});
return b}
function Dx(a){a=Bb(xb(a.f,function(b){return b}));
a.sort(ub);a.length?Qt("yt-remote-online-screen-ids",a.join(","),60):Ut("yt-remote-online-screen-ids")}
;function Z(a){$w.call(this,"ScreenService");this.j=a;this.f=this.g=null;this.h=[];this.i={};Fx(this)}
B(Z,$w);h=Z.prototype;h.start=function(){this.g.start();this.f.start();this.screens.length&&(this.A("screenChange"),this.f.isEmpty()||this.A("onlineScreenChange"))};
h.add=function(a,b,c){this.g.add(a,b,c)};
h.remove=function(a,b,c){this.g.remove(a,b,c);this.f.update()};
h.Fb=function(a,b,c,d){this.g.Ib(a)?this.g.Fb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Jw(this.u,a),d(Error(a)))};
h.ea=function(a){return a?this.screens:pb(this.screens,db(this.h,function(b){return!this.Ib(b)},this))};
h.ud=function(){return db(this.ea(!0),function(a){return!!this.f.f[a.id]},this)};
function Gx(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var g=a.ea();if(g=(c?Yw(g,c):null)||Yw(g,b)){g.uuid=b;var k=Hx(a,g);Cx(a.f,k,function(l){e(l?k:null)})}else c?Ix(a,c,x(function(l){var m=Hx(this,new Pw({name:d,
screenId:c,loungeToken:l,dialId:b||""}));Cx(this.f,m,function(n){e(n?m:null)})},a),f):e(null)}
h.vd=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new dx(this.j,a,b,c);f.subscribe("pairingComplete",x(function(g){Ad(f);d(Hx(this,g))},this));
f.subscribe("pairingFailed",function(g){Ad(f);e(g)});
f.start();return x(f.stop,f)};
function Jx(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
h.Ff=function(a,b,c,d){un(Nw(this.j,"/pairing/get_screen"),{method:"POST",T:{pairing_code:a},timeout:5E3,onSuccess:x(function(e,f){var g=new Pw(f.screen||{});if(!g.name||Jx(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);Jx(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(Hx(this,g))},this),
onError:x(function(e){d(Error("pairing request failed: "+e.status))},this),
Oa:x(function(){d(Error("pairing request timed out."))},this)})};
h.F=function(){Ad(this.g);Ad(this.f);Z.L.F.call(this)};
function Ix(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={T:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
un(Nw(a.j,"/pairing/get_lounge_token_batch"),e)}
function Kx(a){a.screens=a.g.ea();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Vw(a.screens))}
h.ce=function(){Kx(this);this.A("screenChange");this.f.update()};
function Fx(a){Lx(a);a.g=new ux(a.j);a.g.subscribe("screenChange",x(a.ce,a));Kx(a);a.h=Tw(Tt("yt-remote-automatic-screen-cache")||[]);Lx(a);a.info("Initializing automatic screens: "+Vw(a.h));a.f=new yx(a.j,x(a.ea,a,!0));a.f.subscribe("screenChange",x(function(){this.A("onlineScreenChange")},a))}
function Hx(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=Yw(a.h,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.h.push(b),Qt("yt-remote-automatic-screen-cache",eb(a.h,Rw)));Lx(a);a.i[b.uuid]=b.id;Qt("yt-remote-device-id-map",a.i,31536E3);return b}
function Lx(a){a.i=Tt("yt-remote-device-id-map")||{}}
Z.prototype.dispose=Z.prototype.dispose;function Mx(a,b,c){Zw.call(this);this.P=c;this.J=a;this.f=b;this.H=null}
B(Mx,Zw);h=Mx.prototype;h.getScreen=function(){return this.H};
h.Cb=function(a){this.H=a;this.A("sessionScreen",this.H)};
h.ca=function(a){this.K()||(a&&Nx(this,""+a),this.H=null,this.A("sessionScreen",null))};
h.info=function(a){Jw(this.P,a)};
function Nx(a,b){Jw(a.P,b)}
h.xd=function(){return null};
h.Yb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,x(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),x(function(){Nx(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.F=function(){this.Yb("");Mx.L.F.call(this)};function Ox(a,b){Mx.call(this,a,b,"CastSession");this.g=null;this.h=0;this.j=x(this.Gf,this);this.i=x(this.ff,this);this.h=Q(x(function(){Px(this,null)},this),12E4)}
pa(Ox,Mx);h=Ox.prototype;h.Xb=function(a){if(this.g){if(this.g==a)return;Nx(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.j);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.i)}this.g=a;this.g.addUpdateListener(this.j);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.i);Qx(this)};
h.Wa=function(a){this.info("launchWithParams no-op for Cast: "+vj(a))};
h.stop=function(){this.g?this.g.stop(x(function(){this.ca()},this),x(function(){this.ca(Error("Failed to stop receiver app."))},this)):this.ca(Error("Stopping cast device witout session."))};
h.Yb=function(){};
h.F=function(){this.info("disposeInternal");R(this.h);this.h=0;this.g&&(this.g.removeUpdateListener(this.j),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.i));this.g=null;Mx.prototype.F.call(this)};
function Qx(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+vj(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,w,x(function(){Nx(this,"Failed to send message: getMdxSessionStatus.")},a)):Nx(a,"Sending yt message without session: "+vj(b))}
h.ff=function(a,b){if(!this.K())if(b){var c=Bj(b);if(Qa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+vj(c));switch(d){case "mdxSessionStatus":Px(this,c.screenId);break;default:Nx(this,"Unknown youtube message: "+d)}}else Nx(this,"Unable to parse message.")}else Nx(this,"No data in message.")};
function Px(a,b){R(a.h);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=x(a.Cb,a),d=x(a.ca,a);a.Ac(b,c,d,5)}}else a.ca(Error("Waiting for session status timed out."))}
h.Ac=function(a,b,c,d){Gx(this.J,this.f.label,a,this.f.friendlyName,x(function(e){e?b(e):0<=d?(Nx(this,"Screen "+a+" appears to be offline. "+d+" retries left."),Q(x(this.Ac,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.xd=function(){return this.g};
h.Gf=function(a){this.K()||a||(Nx(this,"Cast session died."),this.ca())};function Rx(a,b,c){Mx.call(this,a,b,"DialSession");this.h=this.C=null;this.M="";this.U=c;this.i=null;this.u=w;this.j=NaN;this.O=x(this.Jf,this);this.g=w}
pa(Rx,Mx);h=Rx.prototype;h.Xb=function(a){this.h=a;this.h.addUpdateListener(this.O)};
h.Wa=function(a){this.i=a;this.u()};
h.stop=function(){this.g();this.g=w;R(this.j);this.h?this.h.stop(x(this.ca,this,null),x(this.ca,this,"Failed to stop DIAL device.")):this.ca()};
h.F=function(){this.g();this.g=w;R(this.j);this.h&&this.h.removeUpdateListener(this.O);this.h=null;Mx.prototype.F.call(this)};
function Sx(a){a.g=a.J.vd(a.M,a.f.label,a.f.friendlyName,x(function(b){this.g=w;this.Cb(b)},a),x(function(b){this.g=w;
this.ca(b)},a))}
h.Jf=function(a){this.K()||a||(Nx(this,"DIAL session died."),this.g(),this.g=w,this.ca())};
function Tx(a){var b={};b.pairingCode=a.M;b.theme=a.U;if(a.i){var c=a.i.currentTime||0;b.v=a.i.videoId;b.t=c}tx()&&(b.env_useStageMdx=1);return ed(b)}
h.Rb=function(a){this.M=Ww();if(this.i){var b=new chrome.cast.DialLaunchResponse(!0,Tx(this));a(b);Sx(this)}else this.u=x(function(){R(this.j);this.u=w;this.j=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Tx(this));a(c);Sx(this)},this),this.j=Q(x(function(){this.u()},this),100)};
h.ie=function(a,b,c){Gx(this.J,this.C.receiver.label,a,this.f.friendlyName,x(function(d){d&&d.token?(this.Cb(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Rb(b,c)},this),x(function(d){Nx(this,"Failed to get DIAL screen: "+d);
this.Rb(b,c)},this))};function Ux(a,b){Mx.call(this,a,b,"ManualSession");this.g=Q(x(this.Wa,this,null),150)}
pa(Ux,Mx);Ux.prototype.stop=function(){this.ca()};
Ux.prototype.Xb=function(){};
Ux.prototype.Wa=function(){R(this.g);this.g=NaN;var a=Yw(this.J.ea(),this.f.label);a?this.Cb(a):this.ca(Error("No such screen"))};
Ux.prototype.F=function(){R(this.g);this.g=NaN;Mx.prototype.F.call(this)};function Vx(a,b,c,d){Zw.call(this);this.g=a;this.C=b||"233637DE";this.u=c||"cl";this.H=d||!1;this.f=null;this.j=!1;this.h=[];this.i=x(this.Ve,this)}
pa(Vx,Zw);h=Vx.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.C);this.H||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=x(this.We,this);c=new chrome.cast.ApiConfig(c,x(this.cd,this),f,d,e);c.customDialLaunchCallback=x(this.Le,this);chrome.cast.initialize(c,x(function(){this.K()||(chrome.cast.addReceiverActionListener(this.i),
Fw(),this.g.subscribe("onlineScreenChange",x(this.wd,this)),this.h=Wx(this),chrome.cast.setCustomReceivers(this.h,w,x(function(g){this.N("Failed to set initial custom receivers: "+vj(g))},this)),this.A("yt-remote-cast2-availability-change",Xx(this)),b(!0))},this),x(function(g){this.N("Failed to initialize API: "+vj(g));
b(!1)},this))};
h.sf=function(a,b){Yx("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.getScreen();if(!a||c&&c.id!=a)Yx("Unsetting old screen status: "+this.f.f.friendlyName),Zx(this,null)}if(a&&b){if(!this.f){c=Yw(this.g.ea(),a);if(!c){Yx("setConnectedScreenStatus: Unknown screen.");return}var d=$x(this,c);d||(Yx("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.h.push(d),chrome.cast.setCustomReceivers(this.h,
w,x(function(e){this.N("Failed to set initial custom receivers: "+vj(e))},this)));
Yx("setConnectedScreenStatus: new active receiver: "+d.friendlyName);Zx(this,new Ux(this.g,d),!0)}this.f.Yb(b)}else Yx("setConnectedScreenStatus: no screen.")};
function $x(a,b){return b?ib(a.h,function(c){return Qw(b,c.label)},a):null}
h.tf=function(a){this.K()?this.N("Setting connection data on disposed cast v2"):this.f?this.f.Wa(a):this.N("Setting connection data without a session")};
h.If=function(){this.K()?this.N("Stopping session on disposed cast v2"):this.f?(this.f.stop(),Zx(this,null)):Yx("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(x(this.cd,this),x(this.Ze,this))};
h.F=function(){this.g.Nc("onlineScreenChange",x(this.wd,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);mb(v("yt.mdx.remote.debug.handlers_")||[],Gw);Ad(this.f);Zw.prototype.F.call(this)};
function Yx(a){Jw("Controller",a)}
h.N=function(a){Jw("Controller",a)};
function Gw(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function Xx(a){return a.j||!!a.h.length||!!a.f}
function Zx(a,b,c){b!=a.f&&(Ad(a.f),(a.f=b)?(c?a.A("yt-remote-cast2-receiver-resumed",b.f):a.A("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",x(a.dd,a,b)),b.getScreen()?a.A("yt-remote-cast2-session-change",b.getScreen()):c&&a.f.Wa(null)):a.A("yt-remote-cast2-session-change",null))}
h.dd=function(a,b){this.f==a&&(b||Zx(this,null),this.A("yt-remote-cast2-session-change",b))};
h.Ve=function(a,b){if(!this.K())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),Yx("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)Yx("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{Yx("onReceiverAction_: Casting to active receiver.");this.f.getScreen()&&this.A("yt-remote-cast2-session-change",this.f.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:Zx(this,
new Ux(this.g,a));break;case chrome.cast.ReceiverType.DIAL:Zx(this,new Rx(this.g,a,this.u));break;case chrome.cast.ReceiverType.CAST:Zx(this,new Ox(this.g,a));break;default:this.N("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.N("Stopping receiver w/o session: "+a.friendlyName)}else this.N("onReceiverAction_ called without receiver.")};
h.Le=function(a){if(this.K())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.N("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.N("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.getScreen())return Yx("Reselecting dial screen."),
this.A("yt-remote-cast2-session-change",this.f.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.N('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);Zx(this,new Rx(this.g,b,this.u))}b=this.f;b.C=a;return b.C.appState==chrome.cast.DialAppState.RUNNING?new Promise(x(b.ie,b,(b.C.extraData||{}).screenId||null)):new Promise(x(b.Rb,b))};
h.cd=function(a){if(!this.K()){Yx("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)Yx("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),Zx(this,new Ox(this.g,b),!0);else{this.N("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=Yw(this.g.ea(),c.label);d&&Qw(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(Yx("onSessionEstablished_: manual to cast session change "+b.friendlyName),Ad(this.f),this.f=new Ox(this.g,b),this.f.subscribe("sessionScreen",x(this.dd,this,this.f)),this.f.Wa(null));this.f.Xb(a)}}};
h.Hf=function(){return this.f?this.f.xd():null};
h.Ze=function(a){this.K()||(this.N("Failed to estabilish a session: "+vj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&Zx(this,null))};
h.We=function(a){Yx("Receiver availability updated: "+a);if(!this.K()){var b=Xx(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;Xx(this)!=b&&this.A("yt-remote-cast2-availability-change",Xx(this))}};
function Wx(a){var b=a.g.ud(),c=a.f&&a.f.f;a=eb(b,function(d){c&&Qw(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=$x(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.wd=function(){this.K()||(this.h=Wx(this),Yx("Updating custom receivers: "+vj(this.h)),chrome.cast.setCustomReceivers(this.h,w,x(function(){this.N("Failed to set custom receivers.")},this)),this.A("yt-remote-cast2-availability-change",Xx(this)))};
Vx.prototype.setLaunchParams=Vx.prototype.tf;Vx.prototype.setConnectedScreenStatus=Vx.prototype.sf;Vx.prototype.stopSession=Vx.prototype.If;Vx.prototype.getCastSession=Vx.prototype.Hf;Vx.prototype.requestSession=Vx.prototype.requestSession;Vx.prototype.init=Vx.prototype.init;Vx.prototype.dispose=Vx.prototype.dispose;function ay(a,b,c,d,e,f){by()?dy(a,d,e,f)&&(ey(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?fy(b):(window.__onGCastApiAvailable=function(g,k){g?fy(b):(gy("Failed to load cast API: "+k),hy(!1),ey(!1),Ut("yt-remote-cast-available"),Ut("yt-remote-cast-receiver"),iy(),b(!1))},c?nr("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?td():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?pd():(rd(),nd(ud.map(qd))))):cy("Cannot initialize because not running Chrome")}
function iy(){cy("dispose");var a=jy();a&&a.dispose();A("yt.mdx.remote.cloudview.instance_",null);ky(!1);Vm(ly);ly.length=0}
function my(){cy("clearCurrentReceiver");Ut("yt-remote-cast-receiver")}
function ny(){return Tt("yt-remote-cast-installed")?jy()?jy().getCastSession():(gy("getCastSelector: Cast is not initialized."),null):(gy("getCastSelector: Cast API is not installed!"),null)}
function oy(a,b){py()?jy().setConnectedScreenStatus(a,b):gy("setConnectedScreenStatus called before ready.")}
function by(){var a=0<=rc.search(/ (CrMo|Chrome|CriOS)\//);return Rg||a}
function dy(a,b,c,d){var e=!1;jy()||(a=new Vx(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){Qt("yt-remote-cast-available",f);Wm("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){cy("onReceiverSelected: "+f.friendlyName);
Qt("yt-remote-cast-receiver",f);Wm("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){cy("onReceiverResumed: "+f.friendlyName);
Qt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){cy("onSessionChange: "+Uw(f));
f||Ut("yt-remote-cast-receiver");Wm("yt-remote-cast2-session-change",f)}),A("yt.mdx.remote.cloudview.instance_",a),e=!0);
cy("cloudview.createSingleton_: "+e);return e}
function jy(){return v("yt.mdx.remote.cloudview.instance_")}
function fy(a){hy(!0);ey(!1);jy().init(!1,function(b){b?(ky(!0),U("yt-remote-cast2-api-ready")):(gy("Failed to initialize cast API."),hy(!1),Ut("yt-remote-cast-available"),Ut("yt-remote-cast-receiver"),iy());a(b)})}
function cy(a){Jw("cloudview",a)}
function gy(a){Jw("cloudview",a)}
function hy(a){cy("setCastInstalled_ "+a);Qt("yt-remote-cast-installed",a)}
function py(){return!!v("yt.mdx.remote.cloudview.apiReady_")}
function ky(a){cy("setApiReady_ "+a);A("yt.mdx.remote.cloudview.apiReady_",a)}
function ey(a){A("yt.mdx.remote.cloudview.initializing_",a)}
var ly=[];function qy(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.h=this.i=0;this.f=null;this.hasNext=this.l=!1;this.D=this.g=this.u=this.C=0;this.j=NaN;this.B=!1;this.reset(a)}
function ry(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.l=!1;a.hasNext=!1;a.i=0;a.h=z();a.C=0;a.u=0;a.g=0;a.D=0;a.j=NaN;a.B=!1}
qy.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";ry(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.l=a.hasPrevious,this.hasNext=a.hasNext,this.i=a.playerTime,this.h=a.playerTimeAt,this.C=a.seekableStart,this.u=a.seekableEnd,this.g=a.duration,this.D=a.loadedTime,this.j=a.liveIngestionTime,this.B=
!isNaN(this.j))};
qy.prototype.isAdPlaying=function(){return 1081==this.playerState};
function sy(a,b){a.i=b;a.h=z()}
function ty(a){switch(a.playerState){case 1:case 1081:return(z()-a.h)/1E3+a.i;case -1E3:return 0}return a.i}
qy.prototype.getDuration=function(){return this.B?this.g+(1==this.playerState?(z()-this.h)/1E3:0):this.g};
function uy(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&ry(a)}
function vy(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=Ib(a.f);b.hasPrevious=a.l;b.hasNext=a.hasNext;b.playerTime=a.i;b.playerTimeAt=a.h;b.seekableStart=a.C;b.seekableEnd=a.u;b.duration=a.g;b.loadedTime=a.D;b.liveIngestionTime=a.j;return b}
qy.prototype.clone=function(){return new qy(vy(this))};function wy(a,b){Zw.call(this);this.f=0;this.i=a;this.u=[];this.j=new Wl;this.h=this.g=null;this.J=x(this.Ce,this);this.C=x(this.nb,this);this.H=x(this.Be,this);this.M=x(this.Ie,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Zb,this),xy(this))):c=3;0!=c&&(b?this.Zb(c):Q(x(function(){this.Zb(c)},this),0));
var d=ny();d&&yy(this,d);this.subscribe("yt-remote-cast2-session-change",this.M)}
pa(wy,Zw);function zy(a){return new qy(a.i.getPlayerContextData())}
h=wy.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,w,Ay(this,"play")):By(this,"play"),Cy(this,1,ty(zy(this))),this.A("remotePlayerChange")):Dy(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,w,Ay(this,"pause")):By(this,"pause"),Cy(this,2,ty(zy(this))),this.A("remotePlayerChange")):Dy(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=zy(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,w,Ay(this,"seekTo",{newTime:a}))}else By(this,"seekTo",{newTime:a});Cy(this,3,a);this.A("remotePlayerChange")}else Dy(this,y(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,w,Ay(this,"stopVideo")):By(this,"stopVideo");var a=zy(this);a.index=-1;a.videoId="";ry(a);Ey(this,a);this.A("remotePlayerChange")}else Dy(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=zy(this);if(this.h){if(c.volume!=a){var d=Math.round(a)/100;this.h.setReceiverVolumeLevel(d,x(function(){Jw("CP","set receiver volume: "+d)},this),x(function(){this.N("failed to set receiver volume.")},this))}c.muted!=b&&this.h.setReceiverMuted(b,x(function(){Jw("CP","set receiver muted: "+b)},this),x(function(){this.N("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);By(this,"setVolume",e)}c.muted=b;c.volume=a;Ey(this,c)}else Dy(this,y(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();By(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=zy(this);d.audioTrackId=c;Ey(this,d)}else Dy(this,y(this.setAudioTrack,a,b))};
h.ec=function(a){1==this.f?By(this,"addVideos",{listId:a}):Dy(this,y(this.ec,a))};
h.md=function(a){1==this.f?By(this,"removeVideo",{videoId:a}):Dy(this,y(this.md,a))};
h.Vc=function(a,b,c){1==this.f?By(this,"moveVideo",{videoId:a,delta:(b>=c?c:c-1)-b}):Dy(this,y(this.Vc,a,b,c))};
h.playVideo=function(a,b,c,d,e,f,g){var k=zy(this);c=c||0;var l={videoId:a,currentIndex:c};uy(k,a,c);void 0!==b&&(sy(k,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=vj(g));By(this,"setPlaylist",l);d||Ey(this,k)};
h.ld=function(a,b){if(1==this.f){if(a&&b){var c=zy(this);uy(c,a,b);Ey(this,c)}By(this,"previous")}else Dy(this,y(this.ld,a,b))};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=zy(this);uy(c,a,b);Ey(this,c)}By(this,"next")}else Dy(this,y(this.nextVideo,a,b))};
h.mc=function(){if(1==this.f){By(this,"clearPlaylist");var a=zy(this);a.reset();Ey(this,a);this.A("remotePlayerChange")}else Dy(this,this.mc)};
h.uc=function(){1==this.f?By(this,"dismissAutoplay"):Dy(this,this.uc)};
h.pd=function(a){1==this.f?a?By(this,"setAutoplayMode",{autoplayMode:"ENABLED"}):By(this,"setAutoplayMode",{autoplayMode:"DISABLED"}):Dy(this,y(this.pd,a))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.A("proxyStateChange",a,this.f)}Zw.prototype.dispose.call(this)};
h.F=function(){Fy(this);this.i=null;this.j.clear();yy(this,null);Zw.prototype.F.call(this)};
function xy(a){C("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.u.push(this.i.subscribe(b,y(this.Te,b),this))},a)}
function Fy(a){C(a.u,function(b){this.i.unsubscribeByKey(b)},a);
a.u.length=0}
function Dy(a,b){var c=a.j;50>c.f.length+c.g.length&&a.j.g.push(b)}
function Cy(a,b,c){var d=zy(a);sy(d,c);-1E3!=d.playerState&&(d.playerState=b);Ey(a,d)}
function By(a,b,c){a.i.sendMessage(b,c)}
function Ey(a,b){Fy(a);a.i.setPlayerContextData(vy(b));xy(a)}
h.Zb=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.A("proxyStateChange",b,a);if(1==a)for(;!this.j.isEmpty();)b=a=this.j,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.Te=function(a,b){this.A(a,b)};
function yy(a,b){a.h&&(a.h.removeUpdateListener(a.J),a.h.removeMediaListener(a.C),a.nb(null));a.h=b;a.h&&(Jw("CP","Setting cast session: "+a.h.sessionId),a.h.addUpdateListener(a.J),a.h.addMediaListener(a.C),a.h.media.length&&a.nb(a.h.media[0]))}
h.Ce=function(a){if(!a)this.nb(null),yy(this,null);else if(this.h.receiver.volume){a=this.h.receiver.volume;var b=zy(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)Jw("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,Ey(this,b)}};
h.nb=function(a){Jw("CP","Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.H);if(this.g=a)this.g.addUpdateListener(this.H),Gy(this),this.A("remotePlayerChange")};
function Gy(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=zy(a);b.contentId!=d.videoId&&Jw("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;sy(d,a.g.getEstimatedTime());Ey(a,d)}else Jw("CP","No cast media video. Ignoring state update.")}
h.Be=function(a){a?(Gy(this),this.A("remotePlayerChange")):this.nb(null)};
h.Ie=function(){var a=ny();a&&yy(this,a)};
h.N=function(a){Jw("CP",a)};
function Ay(a,b,c){return x(function(d){this.N("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.N("Retrying "+b+" using MDx browser channel."),By(this,b,c))},a)}
;function Hy(a,b,c){Zw.call(this);this.j=NaN;this.P=!1;this.H=this.C=this.M=this.O=NaN;this.J=[];this.i=this.u=this.h=this.G=this.f=null;this.Y=a;this.J.push(P(window,"beforeunload",x(this.Ud,this)));this.g=[];this.G=new qy;this.U=b.id;this.f=Iy(this,c);this.f.subscribe("handlerOpened",this.Ge,this);this.f.subscribe("handlerClosed",this.De,this);this.f.subscribe("handlerError",this.Ee,this);this.f.subscribe("handlerMessage",this.Fe,this);zw(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.G.videoId;jx()&&Qt("yt-remote-session-video-id",d)},this)}
pa(Hy,Zw);h=Hy.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);void 0!==g&&(k.currentIndex=g);c&&(this.G.listId=c);this.G.videoId=d;this.G.index=g||0;this.G.state=3;sy(this.G,l);this.i="UNSUPPORTED";Jy("Connecting with setPlaylist and params: "+vj(k));this.f.connect({method:"setPlaylist",params:vj(k)},
a,nx())}else Jy("Connecting without params"),this.f.connect({},a,nx());Ky(this)};
h.dispose=function(){this.K()||(this.A("beforeDispose"),Ly(this,3));Zw.prototype.dispose.call(this)};
h.F=function(){My(this);Ny(this);Oy(this);R(this.C);this.C=NaN;R(this.H);this.H=NaN;this.h=null;Km(this.J);this.J.length=0;this.f.dispose();Zw.prototype.F.call(this);this.i=this.u=this.g=this.G=this.f=null};
function Jy(a){Jw("conn",a)}
h.Ud=function(){this.Sa(2)};
function Iy(a,b){return new vw(Nw(a.Y,"/bc"),b)}
function Ly(a,b){a.A("proxyStateChange",b)}
function Ky(a){a.j=Q(x(function(){Jy("Connecting timeout");this.Sa(1)},a),2E4)}
function My(a){R(a.j);a.j=NaN}
function Oy(a){R(a.O);a.O=NaN}
function Py(a){Ny(a);a.M=Q(x(function(){Qy(this,"getNowPlaying")},a),2E4)}
function Ny(a){R(a.M);a.M=NaN}
h.Ge=function(){Jy("Channel opened");this.P&&(this.P=!1,Oy(this),this.O=Q(x(function(){Jy("Timing out waiting for a screen.");this.Sa(1)},this),15E3));
rx(xw(this.f),this.U)};
h.De=function(){Jy("Channel closed");isNaN(this.j)?sx(!0):sx();this.dispose()};
h.Ee=function(a){sx();isNaN(this.ib())?(Jy("Channel error: "+a+" without reconnection"),this.dispose()):(this.P=!0,Jy("Channel error: "+a+" with reconnection in "+this.ib()+" ms"),Ly(this,2))};
function Ry(a,b){b&&(My(a),Oy(a));b==(yw(a.f)&&isNaN(a.j))?b&&(Ly(a,1),Qy(a,"getSubtitlesTrack")):b?(a.zc()&&a.G.reset(),Ly(a,1),Qy(a,"getNowPlaying"),Sy(a)):a.Sa(1)}
function Ty(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.G.videoId&&(Eb(b.params)?a.G.f=null:a.G.f=b.params,a.A("remotePlayerChange"))}
function Uy(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.G.listId=b.params.listId||a.G.listId;uy(a.G,c,d);a.A("remoteQueueChange")}
function Vy(a,b){b.params=b.params||{};Uy(a,b);Wy(a,b);a.A("autoplayDismissed")}
function Wy(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);sy(a.G,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.G.playerState&&(c=-1E3);a.G.playerState=c;c=Number(b.params.loadedTime);a.G.D=isNaN(c)?0:c;c=Number(b.params.duration);a.G.g=isNaN(c)?0:c;c=a.G;var d=Number(b.params.liveIngestionTime);c.j=d;c.B=isNaN(d)?!1:!0;c=a.G;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.G.playerState?
Py(a):Ny(a);a.A("remotePlayerChange")}
function Xy(a,b){if(-1E3!=a.G.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.G.playerState=c;c=parseInt(b.params.currentTime,10);sy(a.G,isNaN(c)?0:c);a.A("remotePlayerChange")}}
function Yy(a,b){var c="true"==b.params.muted;a.G.volume=parseInt(b.params.volume,10);a.G.muted=c;a.A("remotePlayerChange")}
function Zy(a,b){a.u=b.params.videoId;a.A("nowAutoplaying",parseInt(b.params.timeout,10))}
function $y(a,b){var c="true"==b.params.hasNext;a.G.l="true"==b.params.hasPrevious;a.G.hasNext=c;a.A("previousNextChange")}
h.Fe=function(a){a.params?Jy("Received: action="+a.action+", params="+vj(a.params)):Jy("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Bj(a.params.devices);this.g=eb(a,function(c){return new qw(c)});
a=!!ib(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
Ry(this,a);break;case "loungeScreenDisconnected":ob(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
Ry(this,!1);break;case "remoteConnected":var b=new qw(Bj(a.params.device));ib(this.g,function(c){return c.equals(b)})||lb(this.g,b);
break;case "remoteDisconnected":b=new qw(Bj(a.params.device));ob(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":Uy(this,a);break;case "nowPlaying":Vy(this,a);break;case "onStateChange":Wy(this,a);break;case "onAdStateChange":Xy(this,a);break;case "onVolumeChanged":Yy(this,a);break;case "onSubtitlesTrackChanged":Ty(this,a);break;case "nowAutoplaying":Zy(this,a);break;case "autoplayDismissed":this.A("autoplayDismissed");break;case "autoplayUpNext":this.u=a.params.videoId||null;this.A("autoplayUpNext",this.u);break;case "onAutoplayModeChanged":this.i=
a.params.autoplayMode;this.A("autoplayModeChange",this.i);"DISABLED"==this.i&&this.A("autoplayDismissed");break;case "onHasPreviousNextChanged":$y(this,a);break;case "requestAssistedSignIn":this.A("assistedSignInRequested",a.params.authCode);break;default:Jy("Unrecognized action: "+a.action)}};
h.nf=function(){if(this.h){var a=this.h;this.h=null;this.G.videoId!=a&&Qy(this,"getNowPlaying")}};
h.Rd=function(){var a=3;this.K()||(a=0,isNaN(this.ib())?yw(this.f)&&isNaN(this.j)&&(a=1):a=2);return a};
h.Sa=function(a){Jy("Disconnecting with "+a);My(this);this.A("beforeDisconnect",a);1==a&&sx();ww(this.f,a);this.dispose()};
h.Pd=function(){var a=this.G;this.h&&(a=this.G.clone(),uy(a,this.h,a.index));return vy(a)};
h.uf=function(a){var b=new qy(a);b.videoId&&b.videoId!=this.G.videoId&&(this.h=b.videoId,R(this.C),this.C=Q(x(this.nf,this),5E3));var c=[];this.G.listId==b.listId&&this.G.videoId==b.videoId&&this.G.index==b.index||c.push("remoteQueueChange");this.G.playerState==b.playerState&&this.G.volume==b.volume&&this.G.muted==b.muted&&ty(this.G)==ty(b)&&vj(this.G.f)==vj(b.f)||c.push("remotePlayerChange");this.G.reset(a);C(c,function(d){this.A(d)},this)};
h.zc=function(){var a=this.f.l.id,b=ib(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.ib=function(){var a=this.f;return a.g.isActive()?a.g.g-z():NaN};
h.Kd=function(){return this.i||"UNSUPPORTED"};
h.Ld=function(){return this.u||""};
h.Af=function(){if(!isNaN(this.ib())){var a=this.f.g,b=a.f;b.stop();b.Bc();a.start()}};
function Sy(a){R(a.H);a.H=Q(x(a.Sa,a,1),864E5)}
function Qy(a,b,c){c?Jy("Sending: action="+b+", params="+vj(c)):Jy("Sending: action="+b);a.f.sendMessage(b,c)}
h.qf=function(a,b){Qy(this,a,b);Sy(this)};
Hy.prototype.subscribe=Hy.prototype.subscribe;Hy.prototype.unsubscribeByKey=Hy.prototype.ha;Hy.prototype.getProxyState=Hy.prototype.Rd;Hy.prototype.disconnect=Hy.prototype.Sa;Hy.prototype.getPlayerContextData=Hy.prototype.Pd;Hy.prototype.setPlayerContextData=Hy.prototype.uf;Hy.prototype.getOtherConnectedRemoteId=Hy.prototype.zc;Hy.prototype.getReconnectTimeout=Hy.prototype.ib;Hy.prototype.getAutoplayMode=Hy.prototype.Kd;Hy.prototype.getAutoplayVideoId=Hy.prototype.Ld;Hy.prototype.reconnect=Hy.prototype.Af;
Hy.prototype.sendMessage=Hy.prototype.qf;function az(a){$w.call(this,"ScreenServiceProxy");this.X=a;this.f=[];this.f.push(this.X.$_s("screenChange",x(this.Ef,this)));this.f.push(this.X.$_s("onlineScreenChange",x(this.Pe,this)))}
pa(az,$w);h=az.prototype;h.ea=function(a){return this.X.$_gs(a)};
h.Ib=function(a){return!!this.X.$_c(a)};
h.get=function(a){return this.X.$_g(a)};
h.start=function(){this.X.$_st()};
h.add=function(a,b,c){this.X.$_a(a,b,c)};
h.remove=function(a,b,c){this.X.$_r(a,b,c)};
h.Fb=function(a,b,c,d){this.X.$_un(a,b,c,d)};
h.F=function(){for(var a=0,b=this.f.length;a<b;++a)this.X.$_ubk(this.f[a]);this.f.length=0;this.X=null;$w.prototype.F.call(this)};
h.Ef=function(){this.A("screenChange")};
h.Pe=function(){this.A("onlineScreenChange")};
Z.prototype.$_st=Z.prototype.start;Z.prototype.$_gspc=Z.prototype.Ff;Z.prototype.$_gsppc=Z.prototype.vd;Z.prototype.$_c=Z.prototype.Ib;Z.prototype.$_g=Z.prototype.get;Z.prototype.$_a=Z.prototype.add;Z.prototype.$_un=Z.prototype.Fb;Z.prototype.$_r=Z.prototype.remove;Z.prototype.$_gs=Z.prototype.ea;Z.prototype.$_gos=Z.prototype.ud;Z.prototype.$_s=Z.prototype.subscribe;Z.prototype.$_ubk=Z.prototype.ha;function bz(a){a=M("MDX_CONFIG")||a;Vt();gx();cz||(cz=new Mw(a?a.loungeApiHost:void 0),tx()&&(cz.f="/api/loungedev"));dz||(dz=v("yt.mdx.remote.deferredProxies_")||[],A("yt.mdx.remote.deferredProxies_",dz));ez();var b=fz();if(!b){var c=new Z(cz);A("yt.mdx.remote.screenService_",c);b=fz();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);ay(c,function(k){k?gz()&&oy(gz(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){Wm("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!v("yt.mdx.remote.initialized_")&&(A("yt.mdx.remote.initialized_",!0),hz("Initializing: "+vj(a)),iz.push(S("yt-remote-cast2-availability-change",function(){Wm("yt-remote-receiver-availability-change")})),iz.push(S("yt-remote-cast2-receiver-selected",function(){jz();
Wm("yt-remote-auto-connect","cast-selector-receiver")})),iz.push(S("yt-remote-cast2-receiver-resumed",function(){Wm("yt-remote-receiver-resumed","cast-selector-receiver")})),iz.push(S("yt-remote-cast2-session-change",kz)),iz.push(S("yt-remote-connection-change",function(k){k?oy(gz(),"YouTube TV"):lz()||(oy(null,null),my())})),d=mz(),a.isAuto&&(d.id+="#dial"),N("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),hz(" -- with channel params: "+vj(d)),
nz(d),b.start(),gz()||oz())}
function pz(){var a=gz();if(!a)return null;var b=fz().ea();return Yw(b,a)}
function kz(a){hz("remote.onCastSessionChange_: "+Uw(a));if(a){var b=pz();b&&b.id==a.id?oy(b.id,"YouTube TV"):(b&&qz(),rz(a,1))}else sz()&&qz()}
function qz(){py()?jy().stopSession():gy("stopSession called before API ready.");var a=sz();a&&(a.disconnect(1),tz(null))}
function uz(){var a=sz();return a&&3!=a.getProxyState()?new wy(sz(),void 0):null}
function hz(a){Jw("remote",a)}
function fz(){if(!vz){var a=v("yt.mdx.remote.screenService_");vz=a?new az(a):null}return vz}
function gz(){return v("yt.mdx.remote.currentScreenId_")}
function wz(a){A("yt.mdx.remote.currentScreenId_",a)}
function jz(){A("yt.mdx.remote.connectData_",null)}
function sz(){return v("yt.mdx.remote.connection_")}
function tz(a){var b=sz();jz();a||wz("");A("yt.mdx.remote.connection_",a);dz&&(C(dz,function(c){c(a)}),dz.length=0);
b&&!a?Wm("yt-remote-connection-change",!1):!b&&a&&Wm("yt-remote-connection-change",!0)}
function lz(){var a=jx();if(!a)return null;var b=fz();if(!b)return null;b=b.ea();return Yw(b,a)}
function rz(a,b){pz()&&pz();wz(a.id);var c=new Hy(cz,a,mz());c.connect(b,v("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){Wm("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){sz()&&tz(null)});
tz(c)}
function oz(){var a=lz();a?(hz("Resume connection to: "+Uw(a)),rz(a,0)):(sx(),my(),hz("Skipping connecting because no session screen found."))}
var cz=null,dz=null,vz=null;function ez(){var a=mz();if(Eb(a)){a=ix();var b=Tt("yt-remote-session-name")||"",c=Tt("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};A("yt.mdx.remote.channelParams_",a)}}
function mz(){return v("yt.mdx.remote.channelParams_")||{}}
function nz(a){a?(Qt("yt-remote-session-app",a.app),Qt("yt-remote-session-name",a.name)):(Ut("yt-remote-session-app"),Ut("yt-remote-session-name"));A("yt.mdx.remote.channelParams_",a)}
var iz=[];function xz(){this.f=H("watch-queue-loading-template");jt(this.f,[])}
;function yz(a){Ys.call(this);this.C=a;this.U=0;this.l=this.J=this.j=this.H=this.u=this.h=this.M=null}
pa(yz,Ys);h=yz.prototype;
h.Aa=function(){Ys.prototype.Aa.call(this);this.l=this.qa();this.U=parseInt(O(this.l,"max-title-length"),10)||0;this.H=Zl(this,"create-button");this.j=Zl(this,"cancel-button");this.u=Zl(this,"privacy-button");var a=$l(this);this.h=Zl(this,"title-input");sj(a,this.h,"keyup",this.gd);sj(a,this.h,"paste",this.gd);sj(a,this.l,"reset",this.Ne);sj(a,this.l,"submit",this.Oe);this.M=Zl(this,"create-playlist-widget-privacy-menu");this.J=Zl(this,"is-selected");a=S("yt-uix-menu-item-clicked",x(this.Se,this));
this.Y.push(a)};
h.Ba=function(){zz(this);this.l=this.J=this.j=this.H=this.M=this.u=this.h=null;Ys.prototype.Ba.call(this)};
h.setVideoIds=function(a){Zl(this,"video-ids-input").value=a};
h.gd=function(){var a=Xb(this.h.value).length;wm(this.H,0<a&&(!this.U||a<=this.U))};
h.Se=function(a){Af(this.M,a)&&(a=Nf(a,"yt-ui-menu-item"),Az(this,a),a=O(a,"value"),Zl(this,"privacy-value-input").value=a)};
function Az(a,b){var c=oq.getInstance();c=I(V(c,"content"),a.u);Bf(c,Xb(Jf(b)));c=I("is-selected",a.M);L(c,"is-selected");K(b,"is-selected");c=O(b,"privacy-state");mm(a.u,"privacy-state",c)}
function Bz(a,b){wm(a.H,b);a.j&&wm(a.j,b);wm(a.h,b);wm(a.u,b)}
function zz(a){a.h.value="";var b=Zl(a,"title-input-container");L(b,"yt-uix-form-error");b=I("yt-uix-form-error-message",b);rf(b);wm(a.u,!0);(b=I("is-selected",a.M))&&a.J&&b!=a.J&&Az(a,a.J);wm(a.H,!1);a.j&&wm(a.j,!0);wm(a.h,!0)}
h.Oe=function(a){a.preventDefault();a=this.l;var b={context:this,onSuccess:this.Ke,onError:this.Je};b=void 0===b?{}:b;b.method=a.method.toUpperCase();if("POST"==b.method){var c=b,d=[];mj(a,d,pj);c.postBody=d.join("&")}else{d=new Zi;mj(a,d,oj);$i(d);c={};for(var e=0;e<d.f.length;e++){var f=d.f[e];c[f]=d.g[f]}d=b.ab||{};Kb(d,c);b.ab=d}un(a.action,b);Bz(this,!1)};
h.Ke=function(a,b){zz(this);this.C&&"function"===typeof this.C.Ab&&this.C.Ab({playlistId:b.result.playlistId,playlistName:b.result.playlistName,hf:b.result.playlistUrl});U("yt-uix-videoactionmenu-hide")};
h.Je=function(a,b){if(b&&b.errors&&b.errors.length){var c=Zl(this,"title-input-container"),d=b.errors[0];K(c,"yt-uix-form-error");if(d){var e=I("yt-uix-form-error-message",c);e?e.innerHTML=d:(d=kf("SPAN","yt-uix-form-error-message",document.createTextNode(String(d))),d.setAttribute("role","alert"),c.appendChild(d))}Bz(this,!0)}};
h.Ne=function(){zz(this);if(this.C&&"function"===typeof this.C.onCancel)this.C.onCancel()};function Cz(a){Ys.call(this);this.C={Ab:a.Ab,onCancel:x(function(){$q.getInstance().hide(this.qa());if("function"===typeof a.onCancel)a.onCancel()},this)};
this.j=this.h=null}
pa(Cz,Ys);Cz.prototype.Aa=function(){Ys.prototype.Aa.call(this);this.h=H(O(this.qa(),"dialog-id"));if(!this.h)throw Error("Cannot find create playlist widget dialog.");sj($l(this),document,"click",this.l);var a=S("yt-uix-card-show",x(this.u,this));this.Y.push(a);a=I("create-playlist-widget-form",this.h);this.j=new yz(this.C);am(this.j,a)};
Cz.prototype.Ba=function(){this.h=null;this.j.dispose();this.j=null;Ys.prototype.Ba.call(this)};
Cz.prototype.l=function(a){Af(this.h,Lm(a))||$q.getInstance().hide(this.qa())};
Cz.prototype.u=function(a){a==this.qa()&&Zl(this.j,"title-input").focus()};function Dz(){ko.call(this,"scroller");this.f={}}
B(Dz,ko);Ma(Dz);h=Dz.prototype;h.register=function(){mo(this,"mouseenter",this.Sc);mo(this,"mouseleave",this.zb)};
h.unregister=function(){no(this,"mouseenter",this.Sc);no(this,"mouseleave",this.zb);for(var a in this.f)this.zb(this.f[a]);this.f={};Dz.L.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.zb(this.f[a]);this.f={}};
h.Sc=function(a){var b=P(a,"mousewheel",x(this.ae,this,a));mm(a,"scroller-mousewheel-listener",b);b=P(a,"scroll",x(this.Mf,this,a));mm(a,"scroller-scroll-listener",b);a&&(b=Ra(a).toString(),this.f[b]=a)};
h.zb=function(a){var b=this.I(a,"scroller-mousewheel-listener")||"";mm(a,"scroller-mousewheel-listener","");var c=this.I(a,"scroller-scroll-listener")||"";mm(a,"scroller-scroll-listener","");Km(b);Km(c);mm(a,"scroller-scroll-listener","");a&&(a=Ra(a).toString(),delete this.f[a])};
h.ae=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.I(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.Mf=function(a){this.gb(a,"scroll-action");U("yt-dom-content-change",a)};var Ez=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Fz=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function Gz(){var a=void 0===a?window.location.href:a;if(N("kevlar_disable_theme_param"))return null;var b=Yc(Zc(5,a));if(Hz(b))return"USER_INTERFACE_THEME_DARK";a=bn(a).theme;return Ez.get(a)||null}
function Hz(a){var b=Fz.map(function(c){return c.toLowerCase()});
return!N("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Iz(){this.f={};var a=jm("CONSISTENCY");a&&Jz(this,{encryptedTokenJarContents:a})}
Iz.prototype.replace=function(a,b){for(var c=q(a),d=c.next();!d.done;d=c.next())delete this.f[d.value.encryptedTokenJarContents];Jz(this,b)};
function Jz(a,b){if(b.encryptedTokenJarContents&&(a.f[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.f[b.encryptedTokenJarContents]},1E3*c);
im("CONSISTENCY",b.encryptedTokenJarContents,c,"/",void 0,!0)}}
;var Kz={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};function Lz(a,b){this.f=a;this.h=b;this.g=yr}
function Mz(a){if(!Nz){var b={sc:{playlistEditEndpoint:Oz,subscribeEndpoint:Pz,unsubscribeEndpoint:Qz,modifyChannelNotificationPreferenceEndpoint:Rz}};Sz.f||(Sz.f=new Sz);var c=Sz.f;Yo();Lz.f=new Lz(b,c);Nz=Lz.f}b=Nz;var d=void 0===d?$o:d;a:{var e,f;if((null===(e=a.signalServiceEndpoint)||void 0===e?0:e.signal)&&b.f.vf&&(e=b.f.vf[a.signalServiceEndpoint.signal])){var g=new e;break a}if((null===(f=a.continuationCommand)||void 0===f?0:f.request)&&b.f.Fd&&(f=b.f.Fd[a.continuationCommand.request])){g=
new f;break a}for(g in a)if(b.f.sc[g]&&(f=b.f.sc[g])){g=new f;break a}g=void 0}if(!g)return b.g(new cq("Error: No request builder found for command.",a)),eg({});f=void 0;f=void 0===f?{}:f;e=a.clickTrackingParams;var k=void 0===k?!0:k;if(c=M("INNERTUBE_CONTEXT")){c=Ib(c);c.client||(c.client={});var l=c.client;"MWEB"===l.clientName&&(l.clientFormFactor=M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");l.screenWidthPoints=window.innerWidth;l.screenHeightPoints=window.innerHeight;l.screenPixelDensity=
Math.round(window.devicePixelRatio)||1;l.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var m=void 0===m?!1:m;bu.getInstance();var n=eu(165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";N("kevlar_apply_prefers_color_theme")&&(n=eu(165)?"USER_INTERFACE_THEME_DARK":eu(174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");
m=m?n:Gz()||n;l.userInterfaceTheme=m;if(N("web_log_connection")){c:{if(n=(m=window.navigator)?m.connection:void 0){m=Kz[n.type||"unknown"]||"CONN_UNKNOWN";n=Kz[n.f||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===m&&"CONN_UNKNOWN"!==n&&(m=n);if("CONN_UNKNOWN"!==m)break c;if("CONN_UNKNOWN"!==n){m=n;break c}}m=void 0}m&&(l.connectionType=m)}(m=jm("EXPERIMENTS_DEBUG"))?l.experimentsToken="ZERO"===m?"GgIQAQ%3D%3D":m:delete l.experimentsToken;m=hm();Iz.f||(Iz.f=new Iz);l=Ab(Iz.f.f);c.request=Object.assign(Object.assign({},
c.request),{internalExperimentFlags:m,consistencyTokenJars:l});l=bu.getInstance();m=eu(58);l=l.get("gsml","");c.user=Object.assign({},c.user);m&&(c.user.enableSafetyMode=m);l&&(c.user.lockedSafetyMode=!0);(m=M("DELEGATED_SESSION_ID"))&&!N("pageid_as_header_web")&&(c.user.onBehalfOfUser=m);k&&(k=kq())&&(c.clientScreenNonce=k);e&&(c.clickTracking={clickTrackingParams:e});k=c}else zr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),k={};k={context:k};(e=g.h(a))?g.f(k,e,f):(zr(new cq("Error: Failed to create Request from Command.",
a)),k=void 0);if(!k)return b.g(new cq("Error: Failed to build request for command.",a)),eg({});f=Tz("/youtubei/v1/"+Uz(g.g()));var p;var t=(a=null===(p=null===(t=a.commandMetadata)||void 0===t?void 0:t.webCommandMetadata)||void 0===p?void 0:p.apiUrl)?Tz(a):void 0;t&&(f=t);return Vz(b,k,f,d,g.i())}
function Vz(a,b,c,d,e){d=void 0===d?$o:d;var f=JSON.stringify(b),g=en(c)?"same-origin":"cors",k=en(c)?"same-origin":"include";return Wz().then(function(l){l={method:"POST",mode:g,credentials:k,headers:l,body:f};var m;e&&(m=Object.assign({Ag:c,Bg:l,identity:d,requestTime:po(),Cg:0},e));return a.h.fetch(c,l,m)}).then(function(l){return eg(l)})}
function Tz(a){a=dn(a,{key:M("INNERTUBE_API_KEY")},!1);var b=M("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(bd(a)));return a}
function Wz(){return Zo().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":M("VISITOR_DATA")},a);return eg(a)})}
;var Xz=["notification/modify_channel_preference"],Yz=["browse/edit_playlist"],Zz=["subscription/subscribe"],$z=["subscription/unsubscribe"];var aA={},bA=(aA.WEB_UNPLUGGED="^unplugged/",aA.WEB_UNPLUGGED_ONBOARDING="^unplugged/",aA.WEB_UNPLUGGED_OPS="^unplugged/",aA.WEB_UNPLUGGED_PUBLIC="^unplugged/",aA.WEB_CREATOR="^creator/",aA.WEB_KIDS="^kids/",aA.WEB_EXPERIMENTS="^experiments/",aA.WEB_MUSIC="^music/",aA.WEB_REMIX="^music/",aA.WEB_MUSIC_EMBEDDED_PLAYER="^music/",aA.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",aA);
function Uz(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=bA[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(bA).forEach(function(g){var k=q(g);g=k.next().value;k=k.next().value;b!==g&&f.push(k)});
d=new RegExp(f.join("|"));a.sort(function(g,k){return g.length-k.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function cA(){}
cA.prototype.i=function(){};function Pz(){}
pa(Pz,cA);Pz.prototype.g=function(){return Zz};
Pz.prototype.i=function(){return{}};
Pz.prototype.h=function(a){return a.subscribeEndpoint};
Pz.prototype.f=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function Qz(){}
pa(Qz,cA);Qz.prototype.g=function(){return $z};
Qz.prototype.i=function(){return{}};
Qz.prototype.h=function(a){return a.unsubscribeEndpoint};
Qz.prototype.f=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function Rz(){}
pa(Rz,cA);Rz.prototype.g=function(){return Xz};
Rz.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Rz.prototype.f=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Oz(){}
pa(Oz,cA);Oz.prototype.g=function(){return Yz};
Oz.prototype.h=function(a){return a.playlistEditEndpoint};
Oz.prototype.f=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function wg(){}
wg.prototype.flush=function(a){a=void 0===a?[]:a;if(N("enable_client_streamz_web")){a=q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new ui;c=mh(c,1,b.i);for(var d=b,e=[],f=0;f<d.f.length;f++)e.push(d.f[f].Ka);c=mh(c,3,e||[]);d=[];e=[];f=q(b.Ra.keys());for(var g=f.next();!g.done;g=f.next())e.push(g.value.split(","));for(f=0;f<e.length;f++){g=e[f];var k=b.g;for(var l=b.xc(g)||[],m=[],n=0;n<l.length;n++){var p=l[n];p=p&&p.ic;var t=new Ei;switch(k){case 3:nh(t,1,Fi[0],Number(p));break;case 2:nh(t,
2,Fi[0],Number(p))}m.push(t)}k=m;for(l=0;l<k.length;l++){n=k[l];m=new Ai;m.f||(m.f={});p=n?rh(n):n;m.f[2]=n;m=mh(m,2,p);n=g;p=[];t=b;for(var r=[],F=0;F<t.f.length;F++)r.push(t.f[F].La);t=r;for(r=0;r<t.length;r++){F=t[r];var Y=n[r],E=new Ci;switch(F){case 3:nh(E,1,Di[0],String(Y));break;case 2:nh(E,2,Di[0],Number(Y));break;case 1:nh(E,3,Di[0],"true"==Y)}p.push(E)}qh(m,1,p);d.push(m)}}qh(c,4,d);d=b=new Wg;e=lh(c,1);null!=e&&bh(d,1,e);e=lh(c,5);null!=e&&$g(d,5,e);e=oh(c,wi,2);null!=e&&ch(d,2,e,Gi);e=
lh(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)bh(d,3,e[f]);e=lh(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)$g(d,6,e[f]);e=ph(c,Ai,4);0<e.length&&dh(d,4,e,Ji);c=new Uint8Array(b.g+b.f.length());e=b.h;f=e.length;for(g=d=0;g<f;g++)k=e[g],c.set(k,d),d+=k.length;e=b.f.end();c.set(e,d);b.h=[c];b={serializedIncrementBatch:Vg(c)};tr("streamzIncremented",b)}}};var dA;function zg(){if(!dA){dA=new vg;var a=gm("client_streamz_web_flush_count",-1);-1!==a&&(dA.l=a)}return dA}
;function Sz(){this.i=new yg;this.g=new Ag;this.h=new Cg;this.f=new Dg}
Sz.prototype.fetch=function(a,b){var c=this,d=new Request(a,b),e=Yc(Zc(5,kd(d.url)));this.i.f.i("/client_streamz/youtube/web/network/one_platform_requests",e);return eg(fetch(d).then(function(f){return eA(c,f,e)})["catch"](function(f){Ar(f)}))};
function eA(a,b,c){var d=b.json();b.redirected?Bg(a.g,b.status,c,Yc(Zc(5,b.url))):b.ok?a.h.f.i("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.f.f.i("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){Ar(new cq("Error: API fetch failed",b.status,b.url,e))}));
return d}
;var Nz;function fA(a,b,c){var d={list_id:a};a=Mz({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/browse/edit_playlist",url:"/service_ajax",sendPost:!0}},playlistEditEndpoint:{playlistId:a,actions:c}});hg(a.then(function(e){if(e&&"STATUS_SUCCEEDED"===e.status){if(b.onSuccess)b.onSuccess({},d)}else if(b.onError)b.onError({},d)}),function(){})}
function gA(a){N("web_classic_playlist_one_platform_update")?fA(a.fullListId,a,[{addedVideoId:a.videoIds,action:"ACTION_ADD_VIDEO"}]):hA(a)}
function hA(a){un("/playlist_video_ajax?action_add_to_playlist=1",{method:"POST",ab:{feature:a.feature||null,authuser:a.pg||null,pageid:a.pageId||null},T:{video_ids:a.videoIds||null,source_playlist_id:a.sourcePlaylistId||null,full_list_id:a.fullListId||null,delete_from_playlists:a.zg||null,add_to_playlists:a.og||null,plid:M("PLAYBACK_ID")||null},context:a.context,onError:a.onError,onSuccess:function(b,c){a.onSuccess.call(this,b,c)},
Me:a.Me,withCredentials:!1})}
;var iA,jA,W,kA,lA,mA,nA,oA,pA,qA,rA,sA,tA,uA,vA,zf,wA,xA,yA,zA,AA;var BA;function CA(a,b){this.type=a;this.videoIds=b||[]}
function DA(a){"string"===typeof a&&(a=[a]);var b=new CA(1,a);BA&&EA(function(){C(a,function(c){BA.md(c)})},b,void 0)}
function FA(a,b,c){var d=new CA(2);BA&&EA(function(){BA.Vc(a,b,c)},d,void 0)}
function GA(a){var b=new CA(2);BA&&EA(function(){BA.ec(a)},b,void 0)}
function HA(a,b,c){b||IA(a,b,c)}
function IA(a,b,c){BA&&EA(function(){b&&BA.playVideo(b,0,0,a)},void 0,c)}
function JA(a,b){var c=[];0==c.length||!kb(c,a)||KA(a,c,b)}
function KA(a,b,c){BA&&EA(function(){var d=BA,e=zy(d),f=bb(b,a);By(d,"setPlaylist",{videoId:a,videoIds:b.join(",")});uy(e,a,f);Ey(d,e)},void 0,c)}
function LA(){var a=new CA(2);BA&&EA(function(){BA.stop();BA.mc()},a,void 0)}
function MA(a){BA=a;BA.subscribe("remoteQueueChange",function(){U("queue-change",new CA(2))})}
function NA(){var a=uz();Ad(BA);BA=null;a?MA(a):U("queue-change",new CA(2))}
function EA(a,b,c){BA&&1==BA.f&&(a.call(u),c&&Q(function(){c()},0),void 0!==b&&U("queue-change",b))}
var OA=[];var PA;function QA(){if(!PA){var a=H("watch-queue");if(!a)return[];PA=I("watch-queue-items-list",a)}if(!PA)return[];var b=[];a=uf(PA);C(a,function(c){(c=O(c,"video-id"))&&b.push(c)});
return b}
;function RA(){U("yt-dom-content-change",vA)}
A("yt.www.watchqueue.loadThumbnails",RA);function SA(){var a=H("player-playlist");return a?yf()==a:!1}
function TA(){var a=!1;if(!W||!Mn(iA)||!M("PAGE_NAME"))return UA(),a;var b=VA(),c=WA();XA()&&c&&b!=c&&(YA(c),b=c);c=!!M("LIST_ID");if(b=XA()&&!!b&&(b==M("VIDEO_ID")||b==lA)&&!c){var d=H("player-playlist");d&&!SA()&&(L(iA,"mole-notification"),qf(d,zf),U("watch-queue-show",1),ZA(),a=!0)}else yf()!=iA&&(iA.appendChild(zf),U("watch-queue-show",0),RA(),a=!0);d=H("placeholder-playlist");b||c?On(d):Pn(d);UA();return a}
function YA(a){if(jA){var b=!!W,c=b&&!(a&&(a==M("VIDEO_ID")||a==lA));ds(c);b&&XA()&&(c?U("watch-queue-show",0):U("watch-queue-show",1));if(jA.isReady())jA.loadVideoById(a);else{var d=function(){jA.loadVideoById(a);jA.removeEventListener("onReady",d)};
jA.addEventListener("onReady",d)}}}
function VA(){return jA&&jA.isReady()?jA.getVideoData().video_id||"":""}
function WA(){return W?zy(W).videoId:""}
function $A(a){VA()!=aB()&&bB(VA());cB(1==a);TA()}
function UA(){jA&&(VA()?kA||ds(!!W&&(Mn(iA)||dB())&&yf()==iA):ds(!1))}
function eB(){L(iA,"mole-notification");lA="";bs();TA();var a=jA;a&&a.addEventListener("onStateChange",$A)}
function fB(){var a=iA;L(a,"mole-expanded");K(a,"mole-collapsed");(a=jA)&&a.removeEventListener("onStateChange",$A)}
function XA(){return"watch"==M("PAGE_NAME")}
function gB(a){if(a!=aB()){var b=QA(),c=b[0];hB()&&(c=b[iB()+1]);if(a!=c&&kb(b,a)){var d=bb(b,a);b=bb(b,c);FA(a,d,b)}}}
function jB(a){if(a.currentTarget==rA){if(dB()){var b=uf(vA);a=iB();b=b.length;a=(b+a-1)%b;kB(a);ZA();(b=aB())&&W&&W.ld(b,a)}}else if(a.currentTarget==sA)dB()&&(a=uf(vA),a=(iB()+1)%a.length,kB(a),ZA(),(b=aB())&&W&&W.nextVideo(b,a));else if(a.currentTarget==tA)Pn(tA),On(uA),W?(a=QA(),!WA()&&a[0]?W.playVideo(a[0]):W.play()):jA&&jA.playVideo();else if(a.currentTarget==uA)Pn(uA),On(tA),W?W.pause():jA&&jA.pauseVideo();else if(J(a.currentTarget,"remove-item-watch-queue-button")){if(a=Lf(a.currentTarget,
null,"watch-queue-item"),b=O(a,"video-id"))K(a,"fade-out"),DA(b)}else J(a.currentTarget,"expand-video-watch-queue-button")&&lB(a.currentTarget)}
function mB(a){var b=O(a.currentTarget,"action");nB[b](a.currentTarget);a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();uq(oq.getInstance(),qA)}
function oB(a){yf()==iA&&a.currentTarget==oA&&(a=Lm(a),a&&J(a,"overflow-menu-choice")||(jj(iA,"mole-expanded"),jj(iA,"mole-collapsed")))}
function pB(a){var b=O(a.currentTarget,"action");qB[b](a.currentTarget)}
function rB(){L(iA,"mole-notification");J(iA,"mole-expanded")&&RA();uq(oq.getInstance(),qA)}
function sB(a){J(a.currentTarget,"fade-out")&&(rf(a.currentTarget),bB(WA()),tB());RA()}
function uB(a){a=Lf(a.currentTarget,null,"watch-queue-item");if(!J(a,"currently-playing")){var b=uf(vA);b=bb(b,a);kB(b);(a=O(a,"video-id"))&&W&&W.playVideo(a,0,b)}}
function vB(){var a=!J(xA,"checked");W&&W.pd(a);wB(a)}
function xB(){W&&W.uc()}
function yB(a){var b=a.playlistId,c=a.hf;b&&c&&(a={videoIds:QA().join(","),fullListId:b,onSuccess:function(){nq(c)}},gA(a))}
function lB(a){J(a,"disabled")||(a=O(a,"video-id"))&&zB(a)}
function hB(){return!!I("currently-playing",vA)}
function iB(){var a=I("currently-playing",vA);if(a){var b=uf(vA);return bb(b,a)}return 0}
function aB(){var a=I("currently-playing",vA);return a?O(a,"video-id")||"":""}
function bB(a){a=bb(QA(),a);0<=a?hB()&&iB()==a||(kB(a),ZA()):AB()}
function kB(a){if(dB()){AB();var b=uf(vA);b[a]&&K(b[a],"currently-playing");BB()}}
function AB(){if(dB()){var a=I("currently-playing",vA);a&&L(a,"currently-playing");BB()}}
function CB(a){gB(a);DB()}
function EB(a){W&&W.playVideo(a);a!=aB()&&(YA(a),DB());lA=a}
function FB(a){QA();hB()&&iB();GA(a);DB()}
function GB(a,b,c){b&&(c?JA(b,function(){lA=b}):HA(a,b,function(){lA=b}),DB())}
function DB(){Mn(iA)&&K(iA,"mole-notification")}
function HB(){var a=hB()?iB()+1:0,b=QA().length;0<a&&0<b?Bf(pA,lt(nA,{count:a,total:b})):pf(pA)}
function cB(a){a?(Pn(tA),On(uA)):(Pn(uA),On(tA))}
function BB(){var a=QA().length,b=1>=a,c=hB()?iB():-1;rA.disabled=b||0==c;sA.disabled=b||c==a-1;HB();if(0!=a){var d=null;a=uf(vA);C(a,function(e){var f=O(e,"video-id"),g=I("play-next",e),k=I("goto-video-page",e);hj(k,"disabled",XA()&&f==M("VIDEO_ID")&&!M("LIST_ID"));J(e,"currently-playing")?(d=e,Pn(g)):d?(d=null,hj(g,"disabled",!0)):hj(g,"disabled",!1)})}}
function tB(){BB();0==QA().length?IB():(On(iA),TA()||U("watch-queue-show",yf()==iA?0:1));U("watch-queue-update")}
function dB(){var a=vf(vA);return!!a&&J(a,"watch-queue-item")}
function ZA(){var a=I("currently-playing",vA);if(a){var b=Dz.getInstance(),c=vA;if(c&&a){var d=af(V(b,"scroll-unit"),c);a=bb(d,a);if(0<=a&&!(!c||isNaN(a)||0>a)&&(b=af(V(b,"scroll-unit"),c),!(0>=b.length))){a>=b.length&&(a=b.length-1);if(b.length){d=b[0];var e=d.offsetHeight;1<b.length&&(e=b[1].offsetTop-d.offsetTop);d=e}else d=0;e=c.offsetHeight;a>Math.max(Math.floor(c.scrollTop/d),0)-1&&(d=Math.floor(e/d),e=b.length,a+d>e&&(a=e-d+1));0>a&&(a=0);a=b[a].offsetTop;c&&!isNaN(a)&&(0>a&&(a=0),c.scrollTop=
a,mm(c,"scroller-offset",a+""),U("yt-dom-content-change",c))}}}RA()}
function zB(a){a=fd("/watch",{v:a});nq(a)}
function JB(a){XA()&&(a!=M("VIDEO_ID")||M("LIST_ID")?(Q(function(){zB(a)},100),lA=a):TA())}
function KB(a){LB=a}
function MB(){var a=uz();Ad(W);W=null;R(NB);NB=NaN;pf(vA);tB();if(a){W=a;W.subscribe("proxyStateChange",OB);W.subscribe("remotePlayerChange",PB);W.subscribe("autoplayModeChange",QB);W.subscribe("autoplayUpNext",RB);var b=a.i.getAutoplayMode();QB(b);b=a.i.getAutoplayVideoId();RB(b);W.subscribe("autoplayDismissed",SB);W.subscribe("nowAutoplaying",TB);LB=null;b=zy(a).videoId;M("LIST_ID")&&b&&(b=fd("/watch",{v:b}),nq(b))}else IB();2!=LB&&(bs(),U("watch-queue-remote-connection",!!a))}
function QB(a){"UNSUPPORTED"==a?Pn(wA):(a="ENABLED"==a,hj(xA,"checked",a),wB(a),On(wA))}
function RB(a){W&&(a||Pn(AA))}
function SB(){K(zA,"fade-out")}
function TB(){L(zA,"fade-out")}
function wB(a){a=a?Mu("MDX_AUTOPLAY_ON"):Mu("MDX_AUTOPLAY_OFF");Bf(yA,a)}
function IB(){yf()!=iA&&iA.appendChild(zf);var a=H("placeholder-playlist");M("LIST_ID")?On(a):Pn(a);a=iA;L(a,"mole-expanded");K(a,"mole-collapsed");Pn(iA);UA();U("watch-queue-hide",0)}
function OB(){R(NB);NB=NaN}
function PB(){var a=zy(W);cB(1==a.playerState)}
function UB(){if(W){var a=aB(),b=WA();b&&b!=a&&bB(b);b&&(SA()||lA==b)&&JB(b)}}
var nB={"remove-all":function(){LA();pf(vA);tB();U("watch-queue-empty");IB()},
"save-as-playlist":function(){if(0!=QA().length){var a=mA;$q.getInstance().show(a.qa())}},
disconnect:function(){qz()}},qB={"play-next":function(a){J(a,"disabled")||(a=O(a,"video-id"))&&gB(a)},
"goto-video-page":lB},VB=[],WB=[],NB=NaN,LB=null;A("yt.www.guide.setup",mu);A("yt.www.guide.selectGuideItem",function(a){if(at){var b=null,c=I("guide-item-selected",at);c&&(b=O(c,"serialized-endpoint")||"");b!=a&&(b&&L(c,"guide-item-selected"),a&&(a=Bu(a))&&K(a,"guide-item-selected"))}});
A("yt.www.masthead.dismissReturnToMobileMessage",function(){Kn("a=NO_MWEB",void 0);Pn(H("return-to-mobile"))});
A("yt.www.masthead.dismissChromeAlert",function(){var a=bu.getInstance();gu(169,!0);a.save()});
A("yt.www.masthead.dismissKevlarPromo",function(){var a=bu.getInstance();gu(173,!0);a.save()});
A("yt.www.masthead.dismissTosAlert",function(){var a=bu.getInstance();gu(160,!0);a.save()});
A("yt.www.masthead.handleAccountPickerClick",function(){var a=H("yt-masthead-multilogin");if(O(a,"loaded"))ov();else{var b=Du();b[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/delegate_account_ajax",{method:"POST",postData:ed(b),onDone:function(){mm(a,"loaded","true");ov()}})}});
A("yt.www.notifications.inbox.handleNotificationsClick",function(){Vu(0);if(!$u&&(J(bv,"yt-high-priority-notification")&&(jv(),av&&dv&&($q.getInstance().show(dv),K(av,"yt-uix-clickcard-active"))),!O(cv,"loaded"))){var a={action_get_notifications_flyout:1};a[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/feed_ajax",{method:"POST",postData:ed(a),onDone:function(){mm(cv,"loaded","true");var b=dv;L(b,"sb-notif-on");K(b,"sb-notif-off");Mm(cv,"click",kv,"yt-lockup-notification")}})}});
A("yt.www.masthead.loadSearchbox",qv);A("yt.net.cookies.set",im);A("yt.net.cookies.remove",km);A("yt.www.picker.load",function(a){var b=O(a,"picker-key"),c=O(a,"picker-position"),d="yt-picker-"+b+"-"+c;if(c=H(d))a=O(a,"button-menu-id")==d,d=O(c,"loaded"),lw(c,b,!!a,!!d)});
A("yt.www.picker.displayLang",function(){kw("language")});
A("yt.www.picker.applyGrid",nw);
A("ytbin.www.pageframe.setup",function(){Gr("GUIDE_DELAYLOADED_CSS");Gr("PAGE_FRAME_DELAYLOADED_CSS",y(L,document.body,"delayed-frame-styles-not-in"),M("WAIT_TO_DELAYLOAD_FRAME_CSS")?"yt-www-pageFrameCssNotifications-load":null);Rs=H("a11y-announcements-container");Ss=H("a11y-announcements-message");S("a11y-announce",Xs);S("init",Us);if(Vs=H("a11y-skip-nav"))Us(),P(Vs,"click",Ws);if(null==Ts){var a=Xe(),b=a.f,c=a.createElement("div");c.style.backgroundColor="rgb(1, 2, 3)";a.appendChild(b.body,c);
b=Oh(c,"backgroundColor");b=b.replace(/ /g,"");Ts="rgb(0,0,0)"===b?"black":"rgb(255,255,255)"===b?"white":null;a.Td(c)}Ts&&(fj(document.body,["yt-high-contrast-mode","yt-high-contrast-mode-"+Ts]),Gr("HIGH_CONTRAST_MODE_CSS"));I("guide-module-loading")||mu();T.init();lv=I("yt-masthead-user-icon");Mm(H("ticker"),"click",pv,"yt-uix-close");I("exp-searchbox-redesign")&&P(H("yt-masthead-content"),"click",tv);qv();av=H("yt-masthead-notifications");bv=H("yt-masthead-notifications-clickcard");cv=H("yt-masthead-notifications-content");
(dv=H("yt-masthead-notifications-button"))&&(ev=I("yt-uix-button-content",dv));ev&&hv();Uu=document.title;S("init",Yu);(a=H("yt-masthead-high-priority-notification-content"))&&P(a,"click",jv);Qv();if(iA=H("watch-queue-mole")){zf=H("watch-queue");oA=I("watch-queue-control-bar",zf);pA=I("watch-queue-count",oA);qA=I("yt-uix-button-dark-overflow-action-menu",oA);rA=I("prev-watch-queue-button",zf);sA=I("next-watch-queue-button",zf);tA=I("play-watch-queue-button",zf);uA=I("pause-watch-queue-button",zf);
vA=I("watch-queue-items-list",zf);wA=I("autoplay-control-bar",zf);xA=I("yt-uix-form-input-checkbox-container",wA);yA=I("autoplay-label",wA);zA=I("autoplay-dismiss-bar",zf);I("autoplay-dismiss-button",zA);AA=I("up-next-item-container",zf);VB.push(Mm(zf,"click",jB,"yt-uix-button"));VB.push(Mm(zf,"click",uB,"watch-queue-video"));VB.push(Mm(zf,"click",oB,"control-bar-button"));VB.push(P(vA,me,rB));VB.push(Mm(vA,me,sB,"watch-queue-item"));VB.push(Mm(zf,"click",vB,"autoplay-control-bar"));VB.push(Mm(zA,
"click",xB,"autoplay-dismiss-button"));VB.push(Mm(null,"click",pB,"watch-queue-video-menu-choice"));VB.push(Mm(null,"click",mB,"watch-queue-menu-choice"));nA=new gt(H("watch-queue-count-msg").textContent,["count","total"]);new xz;kA=!1;if(a=H("watch-queue-save-as-playlist-widget"))mA=new Cz({Ab:yB}),am(mA,a);jA=null;bz({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});bz();OA.push(S("yt-remote-connection-change",NA));(a=uz())&&MA(a);WB.push(S("init",eB));WB.push(S("dispose",fB));
WB.push(S("yt-remote-before-disconnect",KB));WB.push(S("yt-remote-connection-change",MB));MB();eB();WB.push(S("queue-change",UB));WB.push(S("watch-queue-addto-video-added",DB));WB.push(S("watch-queue-addto-video-removed",DB));WB.push(S("watch-queue-addto-video-play-next",CB));WB.push(S("watch-queue-addto-video-play-now",EB));WB.push(S("watch-queue-addto-playlist-added",DB));WB.push(S("watch-queue-addto-playlist-removed",DB));WB.push(S("watch-queue-addto-playlist-play-next",FB));WB.push(S("watch-queue-addto-playlist-play-now",
GB))}else bz({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});M("SAFETY_MODE_PENDING")&&kw("safetymode")});
A("ytbin.www.pageframe.cancelSetup",function(){sv()});}).call(this);
