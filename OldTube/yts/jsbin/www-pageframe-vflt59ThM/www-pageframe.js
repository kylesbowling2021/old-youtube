(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function ea(){ea=function(){};
da.Symbol||(da.Symbol=fa)}
function ha(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ha.prototype.toString=function(){return this.f};
var fa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ia(){ea();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}});
ia=function(){}}
function ja(a){ia();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a}
function ka(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function la(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if("function"==typeof Object.setPrototypeOf)na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=na;
function sa(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
function ta(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function ua(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ta("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ua(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ta("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ua(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function va(a,b){ia();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
ta("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});
ta("Array.prototype.values",function(a){return a?a:function(){return va(this,function(b,c){return c})}});
function xa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ya="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)xa(d,e)&&(a[e]=d[e])}return a};
ta("Object.assign",function(a){return a||ya});
var za=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ta("Reflect.construct",function(){return za});
ta("WeakMap",function(a){function b(l){this.f=(k+=Math.random()+1).toString();if(l){l=ka(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!xa(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(p){if(p instanceof c)return p;e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),p=new a([[l,2],[m,3]]);if(2!=p.get(l)||3!=p.get(m))return!1;p["delete"](l);p.set(m,4);return!p.has(l)&&4==p.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!xa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.f]=m;return this};
b.prototype.get=function(l){return d(l)&&xa(l,g)?l[g][this.f]:void 0};
b.prototype.has=function(l){return d(l)&&xa(l,g)&&xa(l[g],this.f)};
b.prototype["delete"]=function(l){return d(l)&&xa(l,g)&&xa(l[g],this.f)?delete l[g][this.f]:!1};
return b});
ta("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,l){var m=k.f;return ja(function(){if(m){for(;m.head!=k.f;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(k,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var p=k.g[m];if(p&&xa(k.g,m))for(var q=0;q<p.length;q++){var w=p[q];if(l!==l&&w.key!==w.key||l===w.key)return{id:m,list:p,index:q,U:w}}return{id:m,list:p,index:-1,U:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=ka(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),l=new a(ka([[k,"s"]]));if("s"!=l.get(k)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),p=m.next();if(p.done||p.value[0]!=k||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
ia();var f=new WeakMap;e.prototype.set=function(k,l){k=0===k?0:k;var m=d(this,k);m.list||(m.list=this.g[m.id]=[]);m.U?m.U.value=l:(m.U={next:this.f,previous:this.f.previous,head:this.f,key:k,value:l},m.list.push(m.U),this.f.previous.next=m.U,this.f.previous=m.U,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.U&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.U.previous.next=k.U.next,k.U.next.previous=k.U.previous,k.U.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).U};
e.prototype.get=function(k){return(k=d(this,k).U)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,l){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,k.call(l,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ta("Set",function(a){function b(c){this.f=new Map;if(c){c=ka(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ka([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ia();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ta("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)xa(b,d)&&c.push([d,b[d]]);return c}});
ta("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ua(this,b,"includes").indexOf(b,c||0)}});
ta("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(l){k.reject(l)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var l=g[k];g[k]=null;try{l()}catch(m){this.i(m)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(m){return function(p){l||(l=!0,m.call(k,p))}}
var k=this,l=!1;return{resolve:g(this.A),reject:g(this.j)}};
b.prototype.A=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.F(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.u(g):this.l(g)}};
b.prototype.u=function(g){var k=void 0;try{k=g.then}catch(l){this.j(l);return}"function"==typeof k?this.I(k,g):this.l(g)};
b.prototype.j=function(g){this.C(2,g)};
b.prototype.l=function(g){this.C(1,g)};
b.prototype.C=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.G()};
b.prototype.G=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.F=function(g){var k=this.i();g.rb(k.resolve,k.reject)};
b.prototype.I=function(g,k){var l=this.i();try{g.call(k,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,k){function l(w,r){return"function"==typeof w?function(R){try{m(w(R))}catch(wa){p(wa)}}:r}
var m,p,q=new b(function(w,r){m=w;p=r});
this.rb(l(g,m),l(k,p));return q};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.rb=function(g,k){function l(){switch(m.g){case 1:g(m.h);break;case 2:k(m.h);break;default:throw Error("Unexpected state: "+m.g);}}
var m=this;null==this.f?f.g(l):this.f.push(l)};
b.resolve=d;b.reject=function(g){return new b(function(k,l){l(g)})};
b.race=function(g){return new b(function(k,l){for(var m=ka(g),p=m.next();!p.done;p=m.next())d(p.value).rb(k,l)})};
b.all=function(g){var k=ka(g),l=k.next();return l.done?d([]):new b(function(m,p){function q(R){return function(wa){w[R]=wa;r--;0==r&&m(w)}}
var w=[],r=0;do w.push(void 0),r++,d(l.value).rb(q(w.length-1),p),l=k.next();while(!l.done)})};
return b});
ta("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
var Aa=Aa||{},n=this||self,Ba=/^[\w+/_-]+[=]{0,2}$/,Ca=null;function t(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function u(){}
function Da(a){a.V=void 0;a.getInstance=function(){return a.V?a.V:a.V=new a}}
function Ea(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Fa(a){return"array"==Ea(a)}
function Ga(a){var b=Ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ha(a){return"function"==Ea(a)}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a){return Object.prototype.hasOwnProperty.call(a,Ka)&&a[Ka]||(a[Ka]=++La)}
var Ka="closure_uid_"+(1E9*Math.random()>>>0),La=0;function Ma(a,b,c){return a.call.apply(a.bind,arguments)}
function Na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=Ma:v=Na;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var y=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function A(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Oa(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{ud:a.slice(0,d)+"&act=1"+a.slice(d),yd:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{ud:c+"&act=1"+d,yd:c+"&dct=1"+d}}return null}
;var Pa;var Qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ra=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===
typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},Ta=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Ua=Array.prototype.reduce?function(a,b,c,d){d&&(b=v(b,d));
return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
B(a,function(f,g){e=b.call(d,e,f,g,a)});
return e},Va=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1},Wa=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function Xa(a,b,c){b=Ya(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Ya(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function Za(a,b){return 0<=Qa(a,b)}
function $a(a,b){Za(a,b)||a.push(b)}
function ab(a,b){var c=Qa(a,b),d;(d=0<=c)&&bb(a,c);return d}
function bb(a,b){Array.prototype.splice.call(a,b,1)}
function cb(a,b){var c=Ya(a,b,void 0);0<=c&&bb(a,c)}
function db(a){return Array.prototype.concat.apply([],arguments)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function gb(a,b,c,d){Array.prototype.splice.apply(a,hb(arguments,1))}
function hb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ib(a,b){return a>b?1:a<b?-1:0}
function jb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=jb.apply(null,hb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function kb(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}}
function lb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function mb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function nb(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function ob(a){var b=0,c;for(c in a)b++;return b}
function pb(a,b){a:{for(c in a)if(a[c]==b){var c=!0;break a}c=!1}return c}
function qb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function rb(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function sb(a){var b=tb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ub(a){for(var b in a)return!1;return!0}
function vb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function wb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function xb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function yb(a){var b=Ea(a);if("object"==b||"array"==b){if(Ha(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=yb(a[c]);return b}return a}
var zb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<zb.length;f++)c=zb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function Bb(a){var b=arguments.length;if(1==b&&Array.isArray(arguments[0]))return Bb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function Cb(a,b){this.f=a===Db&&b||"";this.g=Eb}
Cb.prototype.Ja=!0;Cb.prototype.Aa=function(){return this.f};
function Fb(a){return a instanceof Cb&&a.constructor===Cb&&a.g===Eb?a.f:"type_error:Const"}
var Eb={},Db={},Gb=new Cb(Db,"");function Hb(a,b){this.g=a===Ib&&b||"";this.h=Jb}
Hb.prototype.Ja=!0;Hb.prototype.Aa=function(){return this.g.toString()};
Hb.prototype.Ob=!0;Hb.prototype.f=function(){return 1};
function Kb(a){if(a instanceof Hb&&a.constructor===Hb&&a.h===Jb)return a.g;Ea(a);return"type_error:TrustedResourceUrl"}
var Jb={},Ib={};var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Mb(a,b){if(b)a=a.replace(Nb,"&amp;").replace(Ob,"&lt;").replace(Pb,"&gt;").replace(Qb,"&quot;").replace(Rb,"&#39;").replace(Sb,"&#0;");else{if(!Tb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Nb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ob,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Pb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Qb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Rb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Sb,"&#0;"))}return a}
var Nb=/&/g,Ob=/</g,Pb=/>/g,Qb=/"/g,Rb=/'/g,Sb=/\x00/g,Tb=/[\x00&<>"']/;
function Ub(a,b){for(var c=0,d=Lb(String(a)).split("."),e=Lb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Vb(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Vb(0==k[2].length,0==l[2].length)||Vb(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Vb(a,b){return a<b?-1:a>b?1:0}
;function Wb(a,b){this.g=a===Xb&&b||"";this.h=Yb}
Wb.prototype.Ja=!0;Wb.prototype.Aa=function(){return this.g.toString()};
Wb.prototype.Ob=!0;Wb.prototype.f=function(){return 1};
function Zb(a){if(a instanceof Wb&&a.constructor===Wb&&a.h===Yb)return a.g;Ea(a);return"type_error:SafeUrl"}
var $b=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,ac=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,bc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function cc(a){if(a instanceof Wb)return a;a="object"==typeof a&&a.Ja?a.Aa():String(a);bc.test(a)||(a="about:invalid#zClosurez");return new Wb(Xb,a)}
function dc(a,b){if(a instanceof Wb)return a;a="object"==typeof a&&a.Ja?a.Aa():String(a);if(b&&/^data:/i.test(a)){var c=a.replace(/(%0A|%0D)/g,"");var d=c.match(ac);d=d&&$b.test(d[1]);c=new Wb(Xb,d?c:"about:invalid#zClosurez");if(c.Aa()==a)return c}bc.test(a)||(a="about:invalid#zClosurez");return new Wb(Xb,a)}
var Yb={},Xb={};var ec;a:{var fc=n.navigator;if(fc){var gc=fc.userAgent;if(gc){ec=gc;break a}}ec=""}function C(a){return-1!=ec.indexOf(a)}
;function hc(){return C("Firefox")||C("FxiOS")}
function ic(){return C("Safari")&&!(jc()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||hc()||C("Silk")||C("Android"))}
function jc(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function kc(){return C("Android")&&!(jc()||hc()||C("Opera")||C("Silk"))}
;function lc(){this.g="";this.i=mc;this.h=null}
lc.prototype.Ob=!0;lc.prototype.f=function(){return this.h};
lc.prototype.Ja=!0;lc.prototype.Aa=function(){return this.g.toString()};
function nc(a){if(a instanceof lc&&a.constructor===lc&&a.i===mc)return a.g;Ea(a);return"type_error:SafeHtml"}
function oc(a){if(a instanceof lc)return a;var b="object"==typeof a,c=null;b&&a.Ob&&(c=a.f());return pc(Mb(b&&a.Ja?a.Aa():String(a)),c)}
function qc(a){function b(f){Array.isArray(f)?B(f,b):(f=oc(f),e.push(nc(f).toString()),f=f.f(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=oc(rc),d=c.f(),e=[];B(a,b);return pc(e.join(nc(c).toString()),d)}
function sc(a){return qc(Array.prototype.slice.call(arguments))}
var mc={};function pc(a,b){return tc(a,b)}
function tc(a,b){var c=new lc;c.g=a;c.h=b;return c}
tc("<!DOCTYPE html>",0);var rc=tc("",0),uc=tc("<br>",0);var vc=lb(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=nc(rc);return!b.parentElement});
function wc(a,b){if(vc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=nc(b)}
function xc(a,b){var c=b instanceof Wb?b:dc(b);a.href=Zb(c)}
function yc(a,b){var c=b instanceof Wb?b:dc(b,/^data:image\//i.test(b));a.src=Zb(c)}
function zc(a,b){a.src=Kb(b).toString()}
function Ac(a,b){a.src=Kb(b);if(null===Ca)b:{var c=n.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&Ba.test(c)){Ca=c;break b}Ca=""}c=Ca;c&&a.setAttribute("nonce",c)}
;function Bc(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}
function Cc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function Dc(a){return a=Mb(a,void 0)}
var Ec={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Fc={"'":"\\'"};function Gc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Hc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ic(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var Jc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Kc(a){return a.match(Jc)}
function Lc(a){return a?decodeURI(a):a}
function Mc(a){return Lc(Kc(a)[3]||null)}
function Nc(){var a=window.location.href,b=a.indexOf("#");return 0>b?null:a.substr(b+1)}
function Oc(a){var b=Kc(a);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Pc(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?Cc(f):"")}}
function Qc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Qc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Rc(a){var b=[],c;for(c in a)Qc(c,a[c],b);return b.join("&")}
function Sc(a,b){var c=Rc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Tc=/#|$/;function Uc(a,b){var c=a.search(Tc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return Cc(a.substr(d,e-d))}
;function Vc(a){var b=a.url,c=a.jg;this.j=!!a.ng;this.g=Oa(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.h=!a&&/[?&]ae=1(&|$)/.test(b);this.i=!a&&/[?&]ae=2(&|$)/.test(b);this.f=/[?&]adurl=([^&]+)/.exec(b)}
;function Wc(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))}
var Xc=Wc("loadCastFramework")||Wc("loadCastApplicationFramework");function Yc(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null}
var Zc=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];function $c(a){a.length?ad(a.shift(),function(){$c(a)}):bd()}
function cd(a){return"chrome-extension://"+a+"/cast_sender.js"}
function ad(a,b,c){var d=document.createElement("script");d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)}
function bd(){var a=Yc();a&&a(!1,"No cast extension found")}
function dd(){if(Xc){var a=2,b=Yc(),c=function(){a--;0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;ad("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",bd,c)}}
function ed(){dd();var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);$c(["//www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//www.gstatic.com/eureka/clank/cast_sender.js"])}
;function fd(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function gd(){return fd()||C("iPad")||C("iPod")}
;function hd(a){hd[" "](a);return a}
hd[" "]=u;function id(a,b){try{return hd(a[b]),!0}catch(c){}return!1}
function jd(a,b){var c=kd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var ld=C("Opera"),D=C("Trident")||C("MSIE"),md=C("Edge"),nd=md||D,od=C("Gecko")&&!(-1!=ec.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),pd=-1!=ec.toLowerCase().indexOf("webkit")&&!C("Edge"),qd=C("Macintosh"),rd=C("Windows"),sd=C("Android"),td=fd(),ud=C("iPad"),wd=C("iPod"),xd=gd();function yd(){var a=n.document;return a?a.documentMode:void 0}
var zd;a:{var Ad="",Bd=function(){var a=ec;if(od)return/rv:([^\);]+)(\)|;)/.exec(a);if(md)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pd)return/WebKit\/(\S+)/.exec(a);if(ld)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bd&&(Ad=Bd?Bd[1]:"");if(D){var Cd=yd();if(null!=Cd&&Cd>parseFloat(Ad)){zd=String(Cd);break a}}zd=Ad}var Dd=zd,kd={};function Ed(a){return jd(a,function(){return 0<=Ub(Dd,a)})}
function Fd(a){return Number(Gd)>=a}
var Hd;if(n.document&&D){var Id=yd();Hd=Id?Id:parseInt(Dd,10)||void 0}else Hd=void 0;var Gd=Hd;var Jd=hc(),Kd=fd()||C("iPod"),Ld=C("iPad"),Md=kc(),Nd=jc(),Od=ic()&&!gd();var Pd={},Qd=null;var Rd=window;var Sd={};function Td(a){this.f=a||{cookie:""}}
h=Td.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.mg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.Dc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:
"")};
h.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Dc:0,path:b,domain:c});return d};
h.qa=function(){return Ud(this).keys};
h.da=function(){return Ud(this).values};
h.isEmpty=function(){return!this.f.cookie};
h.clear=function(){for(var a=Ud(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ud(a){a=(a.f.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Vd=new Td("undefined"==typeof document?null:document);var Wd=!D||Fd(9),Xd=!od&&!D||D&&Fd(9)||od&&Ed("1.9.1"),Yd=D&&!Ed("9"),Zd=D||ld||pd;function $d(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
h=$d.prototype;h.clone=function(){return new $d(this.x,this.y)};
h.equals=function(a){return a instanceof $d&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function ae(a,b){return new $d(a.x-b.x,a.y-b.y)}
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function be(a,b){this.width=a;this.height=b}
h=be.prototype;h.clone=function(){return new be(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ce(a){return a?new de(ee(a)):Pa||(Pa=new de)}
function E(a){return fe(document,a)}
function fe(a,b){return"string"===typeof b?a.getElementById(b):b}
function ge(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):he(document,"*",a,b)}
function F(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):he(c,"*",a,b)[0]||null}return c||null}
function he(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Za(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function ie(a,b){mb(b,function(c,d){c&&"object"==typeof c&&c.Ja&&(c=c.Aa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:je.hasOwnProperty(d)?a.setAttribute(je[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var je={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ke(a){a=a.document;a=le(a)?a.documentElement:a.body;return new be(a.clientWidth,a.clientHeight)}
function me(a){var b=ne(a);a=oe(a);return D&&Ed("10")&&a.pageYOffset!=b.scrollTop?new $d(b.scrollLeft,b.scrollTop):new $d(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function ne(a){return a.scrollingElement?a.scrollingElement:!pd&&le(a)?a.documentElement:a.body||a.documentElement}
function oe(a){return a.parentWindow||a.defaultView}
function pe(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Wd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Dc(g.name),'"');if(g.type){f.push(' type="',Dc(g.type),'"');var k={};Ab(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=qe(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):ie(f,g));2<d.length&&re(e,f,d);return f}
function re(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ga(f)||Ia(f)&&0<f.nodeType?d(f):B(se(f)?eb(f):f,d)}}
function qe(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function te(a){var b=document,c=qe(b,"DIV");D?(a=sc(uc,a),wc(c,a),c.removeChild(c.firstChild)):wc(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c}
function le(a){return"CSS1Compat"==a.compatMode}
function ue(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function ve(a,b){a.insertBefore(b,a.childNodes[0]||null)}
function we(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function xe(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)}
function ye(a){return Xd&&void 0!=a.children?a.children:Sa(a.childNodes,function(b){return 1==b.nodeType})}
function ze(a){return void 0!==a.firstElementChild?a.firstElementChild:Ae(a.firstChild,!0)}
function Ae(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}
function Be(a){return Ia(a)&&1==a.nodeType}
function Ce(){var a=De,b;if(Zd&&!(D&&Ed("9")&&!Ed("10")&&n.SVGElement&&a instanceof n.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Be(b)?b:null}
function Ee(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function ee(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Fe(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else ue(a),a.appendChild(ee(a).createTextNode(String(b)))}
function Ge(a,b){var c=[];return He(a,b,c,!0)?c[0]:void 0}
function He(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||He(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ie={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Je={IMG:" ",BR:"\n"};function Ke(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Le(a)||Me(a)):Le(a)&&Me(a))&&D){var c;!Ha(a.getBoundingClientRect)||D&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Le(a){return D&&!Ed("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Me(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Ne(a){if(Yd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Oe(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Yd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Oe(a,b,c){if(!(a.nodeName in Ie))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Je)b.push(Je[a.nodeName]);else for(a=a.firstChild;a;)Oe(a,b,c),a=a.nextSibling}
function se(a){if(a&&"number"==typeof a.length){if(Ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ha(a))return"function"==typeof a.item}return!1}
function Pe(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Qe(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&Za(f.className.split(/\s+/),c))},d)}
function Re(a,b){return Pe(a,null,b,void 0)}
function Qe(a,b,c){for(var d=0;a&&(null==c||d<=c);){if(b(a))return a;a=a.parentNode;d++}return null}
function de(a){this.f=a||n.document||document}
h=de.prototype;h.oa=function(){return fe(this.f,void 0)};
h.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
h.createElement=function(a){return qe(this.f,a)};
h.appendChild=function(a,b){a.appendChild(b)};
h.Jd=we;h.isElement=Be;function Se(a){Te();return tc(a,null)}
function Ue(a){Te();return new Hb(Ib,a)}
var Te=u;function Ve(a){var b=We;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Xe(){var a=[];Ve(function(b){a.push(b)});
return a}
var We={zf:"allow-forms",Af:"allow-modals",Bf:"allow-orientation-lock",Cf:"allow-pointer-lock",Df:"allow-popups",Ef:"allow-popups-to-escape-sandbox",Ff:"allow-presentation",Gf:"allow-same-origin",Hf:"allow-scripts",If:"allow-top-navigation",Jf:"allow-top-navigation-by-user-activation"},Ye=lb(function(){return Xe()});
function Ze(){var a=qe(document,"IFRAME"),b={};B(Ye(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function $e(){this.G=this.G;this.C=this.C}
$e.prototype.G=!1;$e.prototype.K=function(){return this.G};
$e.prototype.dispose=function(){this.G||(this.G=!0,this.B())};
function af(a,b){a.G?b():(a.C||(a.C=[]),a.C.push(b))}
$e.prototype.B=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function bf(a){a&&"function"==typeof a.dispose&&a.dispose()}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function cf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=cf.prototype;h.getHeight=function(){return this.bottom-this.top};
h.clone=function(){return new cf(this.top,this.right,this.bottom,this.left)};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function df(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
df.prototype.clone=function(){return new df(this.left,this.top,this.width,this.height)};
df.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
df.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
df.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ef(a,b,c){if("string"===typeof b)(b=ff(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ff(c,d);f&&(c.style[f]=e)}}
var gf={};function ff(a,b){var c=gf[b];if(!c){var d=Hc(b);c=d;void 0===a.style[d]&&(d=(pd?"Webkit":od?"Moz":D?"ms":ld?"O":null)+Ic(d),void 0!==a.style[d]&&(c=d));gf[b]=c}return c}
function hf(a,b){var c=ee(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function jf(a,b){return hf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function kf(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}D&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function lf(a){if(D&&!Fd(8))return a.offsetParent;var b=ee(a),c=jf(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=jf(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function mf(a){for(var b=new cf(0,Infinity,Infinity,0),c=ce(a),d=c.f.body,e=c.f.documentElement,f=ne(c.f);a=lf(a);)if(!(D&&0==a.clientWidth||pd&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=jf(a,"overflow")){var g=nf(a),k=new $d(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);
c=ke(oe(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function nf(a){var b=ee(a),c=new $d(0,0);var d=b?ee(b):document;d=!D||Fd(9)||le(ce(d).f)?d.documentElement:d.body;if(a==d)return c;a=kf(a);b=me(ce(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function of(a){a=kf(a);return new $d(a.left,a.top)}
function pf(a){if(1==a.nodeType)return of(a);a=a.changedTouches?a.changedTouches[0]:a;return new $d(a.clientX,a.clientY)}
function qf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function rf(a){var b=sf;if("none"!=jf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function sf(a){var b=a.offsetWidth,c=a.offsetHeight,d=pd&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=kf(a),new be(a.right-a.left,a.bottom-a.top)):new be(b,c)}
function tf(a){var b=nf(a);a=rf(a);return new df(b.x,b.y,a.width,a.height)}
function uf(a){return"rtl"==jf(a,"direction")}
function vf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function wf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?vf(a,c):0}
function xf(a){if(D){var b=wf(a,"paddingLeft"),c=wf(a,"paddingRight"),d=wf(a,"paddingTop");a=wf(a,"paddingBottom");return new cf(d,c,a,b)}b=hf(a,"paddingLeft");c=hf(a,"paddingRight");d=hf(a,"paddingTop");a=hf(a,"paddingBottom");return new cf(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
var yf={thin:2,medium:4,thick:6};function zf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in yf?yf[c]:vf(a,c)}
function Af(a){if(D&&!Fd(9)){var b=zf(a,"borderLeft"),c=zf(a,"borderRight"),d=zf(a,"borderTop");a=zf(a,"borderBottom");return new cf(d,c,a,b)}b=hf(a,"borderLeftWidth");c=hf(a,"borderRightWidth");d=hf(a,"borderTopWidth");a=hf(a,"borderBottomWidth");return new cf(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))}
;var Bf=(new Date).getTime();function Cf(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Df(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(q){for(var w=g,r=0;64>r;r+=4)w[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=w[r-3]^w[r-8]^w[r-14]^w[r-16],w[r]=(q<<1|q>>>31)&4294967295;q=e[0];var R=e[1],wa=e[2],L=e[3],zi=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var vd=L^R&(wa^L);var cg=1518500249}else vd=R^wa^L,cg=1859775393;else 60>r?(vd=R&wa|L&(R|wa),cg=2400959708):(vd=R^wa^L,cg=3395469782);vd=((q<<5|q>>>27)&4294967295)+vd+zi+cg+w[r]&4294967295;zi=L;L=wa;wa=(R<<30|R>>>2)&4294967295;R=q;q=vd}e[0]=e[0]+q&4294967295;e[1]=
e[1]+R&4294967295;e[2]=e[2]+wa&4294967295;e[3]=e[3]+L&4294967295;e[4]=e[4]+zi&4294967295}
function c(q,w){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],R=0,wa=q.length;R<wa;++R)r.push(q.charCodeAt(R));q=r}w||(w=q.length);r=0;if(0==m)for(;r+64<w;)b(q.slice(r,r+64)),r+=64,p+=64;for(;r<w;)if(f[m++]=q[r++],p++,64==m)for(m=0,b(f);r+64<w;)b(q.slice(r,r+64)),r+=64,p+=64}
function d(){var q=[],w=8*p;56>m?c(k,56-m):c(k,64-(m-56));for(var r=63;56<=r;r--)f[r]=w&255,w>>>=8;b(f);for(r=w=0;5>r;r++)for(var R=24;0<=R;R-=8)q[w++]=e[r]>>R&255;return q}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,p;a();return{reset:a,update:c,digest:d,wd:function(){for(var q=d(),w="",r=0;r<q.length;r++)w+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return w}}}
;function Ef(a,b,c){var d=[],e=[];if(1==(Fa(c)?2:1))return e=[b,a],B(d,function(k){e.push(k)}),Ff(e.join(" "));
var f=[],g=[];B(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(k){e.push(k)});
a=Ff(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ff(a){var b=Df();b.update(a);return b.wd().toLowerCase()}
;function Gf(a){var b=Cf(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new Td(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new Td(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,Ef(Cf(d),c,a||null)].join(" "):null}return null}
;function Hf(){}
Da(Hf);Hf.prototype.f=0;var If=!D||Fd(9),Jf=D&&!Ed("9"),Kf=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{n.addEventListener("test",u,b),n.removeEventListener("test",u,b)}catch(c){}return a}();function Lf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
Lf.prototype.stopPropagation=function(){this.f=!0};
Lf.prototype.preventDefault=function(){this.defaultPrevented=!0};var Mf;Mf=pd?"webkitTransitionEnd":ld?"otransitionend":"transitionend";function Nf(a,b){Lf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(Nf,Lf);var Of={2:"touch",3:"pen",4:"mouse"};
Nf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?od&&(id(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Of[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Nf.prototype.stopPropagation=function(){Nf.J.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Nf.prototype.preventDefault=function(){Nf.J.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jf)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Pf="closure_listenable_"+(1E6*Math.random()|0),Qf=0;function Rf(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.wb=e;this.key=++Qf;this.Ta=this.qb=!1}
function Sf(a){a.Ta=!0;a.listener=null;a.f=null;a.src=null;a.wb=null}
;function Tf(a){this.src=a;this.listeners={};this.f=0}
Tf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Uf(a,b,d,e);-1<g?(b=a[g],c||(b.qb=!1)):(b=new Rf(b,this.src,f,!!d,e),b.qb=c,a.push(b));return b};
Tf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Uf(e,b,c,d);return-1<b?(Sf(e[b]),bb(e,b),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Vf(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(Sf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Uf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ta&&f.listener==b&&f.capture==!!c&&f.wb==d)return e}return-1}
;var Wf="closure_lm_"+(1E6*Math.random()|0),Xf={},Yf=0;function Zf(a,b,c,d,e){if(d&&d.once)return $f(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Zf(a,b[f],c,d,e);return null}c=ag(c);return a&&a[Pf]?a.h.add(String(b),c,!1,Ia(d)?!!d.capture:!!d,e):bg(a,b,c,!1,d,e)}
function bg(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,k=dg(a);k||(a[Wf]=k=new Tf(a));c=k.add(b,c,d,g,f);if(c.f)return c;d=eg();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Kf||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(fg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yf++;return c}
function eg(){var a=gg,b=If?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function $f(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)$f(a,b[f],c,d,e);return null}c=ag(c);return a&&a[Pf]?a.h.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):bg(a,b,c,!0,d,e)}
function hg(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)hg(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=ag(c),a&&a[Pf])?a.h.remove(String(b),c,d,e):a&&(a=dg(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Uf(b,c,d,e)),(c=-1<a?b[a]:null)&&ig(c))}
function ig(a){if("number"!==typeof a&&a&&!a.Ta){var b=a.src;if(b&&b[Pf])Vf(b.h,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(fg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yf--;(c=dg(b))?(Vf(c,a),0==c.f&&(c.src=null,b[Wf]=null)):Sf(a)}}}
function fg(a){return a in Xf?Xf[a]:Xf[a]="on"+a}
function jg(a,b,c,d){var e=!0;if(a=dg(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Ta&&(f=kg(f,d),e=e&&!1!==f)}return e}
function kg(a,b){var c=a.listener,d=a.wb||a.src;a.qb&&ig(a);return c.call(d,b)}
function gg(a,b){if(a.Ta)return!0;if(!If){var c=b||t("window.event"),d=new Nf(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(l){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var k=jg(c[g],f,!0,d);e=e&&k}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],k=jg(c[g],f,!1,d),e=e&&k}return e}return kg(a,new Nf(b,this))}
function dg(a){a=a[Wf];return a instanceof Tf?a:null}
var lg="__closure_events_fn_"+(1E9*Math.random()>>>0);function ag(a){if(Ha(a))return a;a[lg]||(a[lg]=function(b){return a.handleEvent(b)});
return a[lg]}
;function mg(a){$e.call(this);this.g=a;this.f={}}
A(mg,$e);var ng=[];function og(a,b,c,d){Array.isArray(c)||(c&&(ng[0]=c.toString()),c=ng);for(var e=0;e<c.length;e++){var f=Zf(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.f[f.key]=f}}
function pg(a){mb(a.f,function(b,c){this.f.hasOwnProperty(c)&&ig(b)},a);
a.f={}}
mg.prototype.B=function(){mg.J.B.call(this);pg(this)};
mg.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function qg(){$e.call(this);this.h=new Tf(this);this.Ma=this;this.ma=null}
A(qg,$e);qg.prototype[Pf]=!0;qg.prototype.addEventListener=function(a,b,c,d){Zf(this,a,b,c,d)};
qg.prototype.removeEventListener=function(a,b,c,d){hg(this,a,b,c,d)};
qg.prototype.dispatchEvent=function(a){var b=this.ma;if(b){var c=[];for(var d=1;b;b=b.ma)c.push(b),++d}b=this.Ma;d=a.type||a;if("string"===typeof a)a=new Lf(a,b);else if(a instanceof Lf)a.target=a.target||b;else{var e=a;a=new Lf(d,b);Ab(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=rg(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=rg(g,d,!0,a)&&e,a.f||(e=rg(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=rg(g,d,!1,a)&&e;return e};
qg.prototype.B=function(){qg.J.B.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Sf(d[e]);delete a.listeners[c];a.f--}}this.ma=null};
function rg(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ta&&g.capture==c){var k=g.listener,l=g.wb||g.src;g.qb&&Vf(a.h,g);e=!1!==k.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function sg(a){qg.call(this);this.N=a||ce();this.ga=null;this.Qa=!1;this.i=null;this.f=void 0;this.O=null;this.na=!1}
A(sg,qg);h=sg.prototype;h.Wd=Hf.getInstance();h.getId=function(){return this.ga||(this.ga=":"+(this.Wd.f++).toString(36))};
h.oa=function(){return this.i};
function tg(a,b){return a.i?F(b,a.i||a.N.f):null}
function ug(a){a.f||(a.f=new mg(a));return a.f}
function vg(a,b){if(a.Qa)throw Error("Component already rendered");if(b){a.na=!0;var c=ee(b);a.N&&a.N.f==c||(a.N=ce(b));a.i=b;a.xa()}else throw Error("Invalid element to decorate");}
h.xa=function(){this.Qa=!0;wg(this,function(a){!a.Qa&&a.oa()&&a.xa()})};
h.ya=function(){wg(this,function(a){a.Qa&&a.ya()});
this.f&&pg(this.f);this.Qa=!1};
h.B=function(){this.Qa&&this.ya();this.f&&(this.f.dispose(),delete this.f);wg(this,function(a){a.dispose()});
!this.na&&this.i&&we(this.i);this.i=this.O=null;sg.J.B.call(this)};
function wg(a,b){a.O&&B(a.O,b,void 0)}
;function xg(){this.g=[];this.f=-1}
xg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
xg.prototype.get=function(a){return!!this.g[a]};
function yg(a){-1==a.f&&(a.f=Ua(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;Bb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function zg(a,b,c){$e.call(this);this.f=null;this.i=!1;this.l=a;this.j=c;this.g=b||window;this.h=v(this.Hd,this)}
A(zg,$e);h=zg.prototype;h.start=function(){this.stop();this.i=!1;var a=Ag(this),b=Bg(this);a&&!b&&this.g.mozRequestAnimationFrame?(this.f=Zf(this.g,"MozBeforePaint",this.h),this.g.mozRequestAnimationFrame(null),this.i=!0):this.f=a&&b?a.call(this.g,this.h):this.g.setTimeout(kb(this.h),20)};
h.stop=function(){if(this.isActive()){var a=Ag(this),b=Bg(this);a&&!b&&this.g.mozRequestAnimationFrame?ig(this.f):a&&b?b.call(this.g,this.f):this.g.clearTimeout(this.f)}this.f=null};
h.isActive=function(){return null!=this.f};
h.Hd=function(){this.i&&this.f&&ig(this.f);this.f=null;this.l.call(this.j,y())};
h.B=function(){this.stop();zg.J.B.call(this)};
function Ag(a){a=a.g;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function Bg(a){a=a.g;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null}
;function Cg(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Cg.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function Dg(a){n.setTimeout(function(){throw a;},0)}
var Eg;
function Fg(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=qe(document,"IFRAME");e.style.display="none";zc(e,new Hb(Ib,Fb(Gb)));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(nc(rc));e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=v(function(l){if(("*"==k||l.origin==k)&&
l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.dc;c.dc=null;e()}};
return function(e){d.next={dc:e};d=d.next;b.port2.postMessage(0)}}return function(e){n.setTimeout(e,0)}}
;function Gg(){this.g=this.f=null}
var Ig=new Cg(function(){return new Hg},function(a){a.reset()});
Gg.prototype.add=function(a,b){var c=Ig.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Gg.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Hg(){this.next=this.scope=this.f=null}
Hg.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Hg.prototype.reset=function(){this.next=this.scope=this.f=null};function Jg(a){Kg||Lg();Mg||(Kg(),Mg=!0);Ng.add(a,void 0)}
var Kg;function Lg(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Kg=function(){a.then(Og)}}else Kg=function(){var b=Og;
!Ha(n.setImmediate)||n.Window&&n.Window.prototype&&!C("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Eg||(Eg=Fg()),Eg(b)):n.setImmediate(b)}}
var Mg=!1,Ng=new Gg;function Og(){for(var a;a=Ng.remove();){try{a.f.call(a.scope)}catch(c){Dg(c)}var b=Ig;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}Mg=!1}
;function Pg(a,b){qg.call(this);this.g=a||1;this.f=b||n;this.i=v(this.jf,this);this.j=y()}
A(Pg,qg);h=Pg.prototype;h.enabled=!1;h.ha=null;h.setInterval=function(a){this.g=a;this.ha&&this.enabled?(this.stop(),this.start()):this.ha&&this.stop()};
h.jf=function(){if(this.enabled){var a=y()-this.j;0<a&&a<.8*this.g?this.ha=this.f.setTimeout(this.i,this.g-a):(this.ha&&(this.f.clearTimeout(this.ha),this.ha=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
h.start=function(){this.enabled=!0;this.ha||(this.ha=this.f.setTimeout(this.i,this.g),this.j=y())};
h.stop=function(){this.enabled=!1;this.ha&&(this.f.clearTimeout(this.ha),this.ha=null)};
h.B=function(){Pg.J.B.call(this);this.stop();delete this.f};
function Qg(a,b,c){if(Ha(a))c&&(a=v(a,c));else if(a&&"function"==typeof a.handleEvent)a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:n.setTimeout(a,b||0)}
;function Rg(a,b,c){$e.call(this);this.f=a;this.i=b||0;this.g=c;this.h=v(this.tc,this)}
A(Rg,$e);h=Rg.prototype;h.fb=0;h.B=function(){Rg.J.B.call(this);this.stop();delete this.f;delete this.g};
h.start=function(a){this.stop();this.fb=Qg(this.h,void 0!==a?a:this.i)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.fb);this.fb=0};
h.isActive=function(){return 0!=this.fb};
h.tc=function(){this.fb=0;this.f&&this.f.call(this.g)};function Sg(a,b,c){$e.call(this);this.i=null!=c?v(a,c):a;this.h=b;this.g=v(this.Oe,this);this.f=[]}
A(Sg,$e);h=Sg.prototype;h.Va=!1;h.kb=0;h.Ha=null;h.Id=function(a){this.f=arguments;this.Ha||this.kb?this.Va=!0:Tg(this)};
h.stop=function(){this.Ha&&(n.clearTimeout(this.Ha),this.Ha=null,this.Va=!1,this.f=[])};
h.pause=function(){this.kb++};
h.resume=function(){this.kb--;this.kb||!this.Va||this.Ha||(this.Va=!1,Tg(this))};
h.B=function(){Sg.J.B.call(this);this.stop()};
h.Oe=function(){this.Ha=null;this.Va&&!this.kb&&(this.Va=!1,Tg(this))};
function Tg(a){a.Ha=Qg(a.g,a.h);a.i.apply(null,a.f)}
;function Ug(){this.g=-1}
;function Vg(){this.g=64;this.f=[];this.l=[];this.C=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
A(Vg,Ug);Vg.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Wg(a,b,c){c||(c=0);var d=a.C;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],l=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):
(f=c^g^k,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
Vg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Wg(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Wg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Wg(this,e);f=0;break}}this.h=f;this.j+=b}};
Vg.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Wg(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Xg(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yg(a){return a.classList?a.classList:Xg(a).match(/\S+/g)||[]}
function Zg(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function G(a,b){return a.classList?a.classList.contains(b):Za(Yg(a),b)}
function H(a,b){if(a.classList)a.classList.add(b);else if(!G(a,b)){var c=Xg(a);Zg(a,c+(0<c.length?" "+b:b))}}
function $g(a,b){if(a.classList)B(b,function(f){H(a,f)});
else{var c={};B(Yg(a),function(f){c[f]=!0});
B(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Zg(a,d)}}
function I(a,b){a.classList?a.classList.remove(b):G(a,b)&&Zg(a,Sa(Yg(a),function(c){return c!=b}).join(" "))}
function ah(a,b){a.classList?B(b,function(c){I(a,c)}):Zg(a,Sa(Yg(a),function(c){return!Za(b,c)}).join(" "))}
function bh(a,b,c){c?H(a,b):I(a,b)}
function ch(a,b,c){G(a,b)&&(I(a,b),H(a,c))}
function dh(a,b){var c=!G(a,b);bh(a,b,c)}
;var eh=!D&&!ic();function fh(a,b){if(/-[a-z]/.test(b))return null;if(eh&&a.dataset){if(kc()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var gh="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function hh(){}
hh.prototype.next=function(){throw gh;};
hh.prototype.sa=function(){return this};
function ih(a){if(a instanceof hh)return a;if("function"==typeof a.sa)return a.sa(!1);if(Ga(a)){var b=0,c=new hh;c.next=function(){for(;;){if(b>=a.length)throw gh;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function jh(a,b,c){if(Ga(a))try{B(a,b,c)}catch(d){if(d!==gh)throw d;}else{a=ih(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==gh)throw d;}}}
function kh(a){if(Ga(a))return eb(a);a=ih(a);var b=[];jh(a,function(c){b.push(c)});
return b}
;function lh(a,b){this.g={};this.f=[];this.Da=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof lh)for(c=a.qa(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
h=lh.prototype;h.da=function(){mh(this);for(var a=[],b=0;b<this.f.length;b++)a.push(this.g[this.f[b]]);return a};
h.qa=function(){mh(this);return this.f.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||nh;mh(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function nh(a,b){return a===b}
h.isEmpty=function(){return 0==this.h};
h.clear=function(){this.g={};this.Da=this.h=this.f.length=0};
h.remove=function(a){return oh(this.g,a)?(delete this.g[a],this.h--,this.Da++,this.f.length>2*this.h&&mh(this),!0):!1};
function mh(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];oh(a.g,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],oh(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
h.get=function(a,b){return oh(this.g,a)?this.g[a]:b};
h.set=function(a,b){oh(this.g,a)||(this.h++,this.f.push(a),this.Da++);this.g[a]=b};
h.forEach=function(a,b){for(var c=this.qa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new lh(this)};
h.sa=function(a){mh(this);var b=0,c=this.Da,d=this,e=new hh;e.next=function(){if(c!=d.Da)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw gh;var f=d.f[b++];return a?f:d.g[f]};
return e};
function oh(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ph(a,b,c){for(var d=a.elements,e,f=0;e=d.item(f);f++)if(e.form==a&&!e.disabled&&"FIELDSET"!=e.tagName){var g=e.name;switch(e.type.toLowerCase()){case "file":case "submit":case "reset":case "button":break;case "select-multiple":e=qh(e);if(null!=e)for(var k,l=0;k=e[l];l++)c(b,g,k);break;default:k=qh(e),null!=k&&c(b,g,k)}}d=a.getElementsByTagName("INPUT");for(f=0;e=d[f];f++)e.form==a&&"image"==e.type.toLowerCase()&&(g=e.name,c(b,g,e.value),c(b,g+".x","0"),c(b,g+".y","0"))}
function rh(a,b,c){var d=a.get(b);d||(d=[],a.set(b,d));d.push(c)}
function sh(a,b,c){a.push(encodeURIComponent(b)+"="+encodeURIComponent(c))}
function qh(a){var b=a.type;if("string"===typeof b)switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);return b.length?b:null}return null!=a.value?a.value:null}
;function th(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function uh(a){var b=[];vh(new wh,a,b);return b.join("")}
function wh(){}
function vh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xh(d,c),c.push(":"),vh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xh(a,b){b.push('"',a.replace(zh,function(c){var d=yh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),yh[c]=d);return d}),'"')}
;function Ah(a){if(n.JSON)try{return n.JSON.parse(a)}catch(b){}return th(a)}
;function Bh(){}
Bh.prototype.stringify=function(a){return n.JSON.stringify(a,void 0)};
Bh.prototype.parse=function(a){return n.JSON.parse(a,void 0)};function Ch(){}
Ch.prototype.f=null;Ch.prototype.getOptions=function(){var a;(a=this.f)||(a={},Dh(this)&&(a[0]=!0,a[1]=!0),a=this.f=a);return a};var Eh;function Fh(){}
A(Fh,Ch);function Gh(a){return(a=Dh(a))?new ActiveXObject(a):new XMLHttpRequest}
function Dh(a){if(!a.g&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.g=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.g}
Eh=new Fh;function Hh(a,b,c,d){this.f=a;this.h=b;this.G=c;this.C=d||1;this.j=45E3;this.i=new mg(this);this.g=new Pg;this.g.setInterval(250)}
h=Hh.prototype;h.Ia=null;h.ka=!1;h.Xa=null;h.Yb=null;h.Ua=null;h.Wa=null;h.va=null;h.Ca=null;h.La=null;h.R=null;h.ob=0;h.la=null;h.Fb=null;h.Ba=null;h.hb=-1;h.cd=!0;h.Ea=!1;h.Nb=0;h.Bb=null;var Ih={},Jh={};h=Hh.prototype;h.setTimeout=function(a){this.j=a};
function Kh(a,b,c){a.Wa=1;a.va=Lh(b.clone());a.La=c;a.l=!0;Mh(a,null)}
function Nh(a,b,c,d,e){a.Wa=1;a.va=Lh(b.clone());a.La=null;a.l=c;e&&(a.cd=!1);Mh(a,d)}
function Mh(a,b){a.Ua=y();Oh(a);a.Ca=a.va.clone();Ph(a.Ca,"t",a.C);a.ob=0;a.R=a.f.Jb(a.f.mb()?b:null);0<a.Nb&&(a.Bb=new Sg(v(a.jd,a,a.R),a.Nb));og(a.i,a.R,"readystatechange",a.Xe);var c=a.Ia?xb(a.Ia):{};a.La?(a.Fb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.R.send(a.Ca,a.Fb,a.La,c)):(a.Fb="GET",a.cd&&!pd&&(c.Connection="close"),a.R.send(a.Ca,a.Fb,null,c));a.f.ia(1)}
h.Xe=function(a){a=a.target;var b=this.Bb;b&&3==Qh(a)?b.Id():this.jd(a)};
h.jd=function(a){try{if(a==this.R)a:{var b=Qh(this.R),c=this.R.l,d=this.R.getStatus();if(D&&!Fd(10)||pd&&!Ed("420+")){if(4>b)break a}else if(3>b||3==b&&!ld&&!Rh(this.R))break a;this.Ea||4!=b||7==c||(8==c||0>=d?this.f.ia(3):this.f.ia(2));Sh(this);var e=this.R.getStatus();this.hb=e;var f=Rh(this.R);(this.ka=200==e)?(4==b&&Th(this),this.l?(Uh(this,b,f),ld&&this.ka&&3==b&&(og(this.i,this.g,"tick",this.We),this.g.start())):Vh(this,f),this.ka&&!this.Ea&&(4==b?this.f.zb(this):(this.ka=!1,Oh(this)))):(400==
e&&0<f.indexOf("Unknown SID")?(this.Ba=3,J(13)):(this.Ba=0,J(14)),Th(this),Wh(this))}}catch(g){}finally{}};
function Uh(a,b,c){for(var d=!0;!a.Ea&&a.ob<c.length;){var e=Xh(a,c);if(e==Jh){4==b&&(a.Ba=4,J(15),d=!1);break}else if(e==Ih){a.Ba=4;J(16);d=!1;break}else Vh(a,e)}4==b&&0==c.length&&(a.Ba=1,J(17),d=!1);a.ka=a.ka&&d;d||(Th(a),Wh(a))}
h.We=function(){var a=Qh(this.R),b=Rh(this.R);this.ob<b.length&&(Sh(this),Uh(this,a,b),this.ka&&4!=a&&Oh(this))};
function Xh(a,b){var c=a.ob,d=b.indexOf("\n",c);if(-1==d)return Jh;c=Number(b.substring(c,d));if(isNaN(c))return Ih;d+=1;if(d+c>b.length)return Jh;var e=b.substr(d,c);a.ob=d+c;return e}
function Yh(a,b){a.Ua=y();Oh(a);var c=b?window.location.hostname:"";a.Ca=a.va.clone();Zh(a.Ca,"DOMAIN",c);Zh(a.Ca,"t",a.C);try{a.la=new ActiveXObject("htmlfile")}catch(m){Th(a);a.Ba=7;J(22);Wh(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var g=c.charAt(f);if("<"==g)e+="\\x3c";else if(">"==g)e+="\\x3e";else{var k=g;if(k in Fc)g=Fc[k];else if(k in Ec)g=Fc[k]=Ec[k];else{var l=k.charCodeAt(0);if(31<l&&127>l)g=k;else{if(256>l){if(g="\\x",16>l||256<l)g+="0"}else g="\\u",4096>l&&
(g+="0");g+=l.toString(16).toUpperCase()}g=Fc[k]=g}e+=g}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=tc(d+"</body></html>",null);a.la.open();a.la.write(nc(c));a.la.close();a.la.parentWindow.m=v(a.Re,a);a.la.parentWindow.d=v(a.Xc,a,!0);a.la.parentWindow.rpcClose=v(a.Xc,a,!1);c=a.la.createElement("DIV");a.la.parentWindow.document.body.appendChild(c);d=cc(a.Ca.toString());d=Dc(Zb(d));d=tc('<iframe src="'+d+'"></iframe>',null);wc(c,d);a.f.ia(1)}
h.Re=function(a){$h(v(this.Qe,this,a),0)};
h.Qe=function(a){this.Ea||(Sh(this),Vh(this,a),Oh(this))};
h.Xc=function(a){$h(v(this.Pe,this,a),0)};
h.Pe=function(a){this.Ea||(Th(this),this.ka=a,this.f.zb(this),this.f.ia(4))};
h.cancel=function(){this.Ea=!0;Th(this)};
function Oh(a){a.Yb=y()+a.j;ai(a,a.j)}
function ai(a,b){if(null!=a.Xa)throw Error("WatchDog timer not null");a.Xa=$h(v(a.Se,a),b)}
function Sh(a){a.Xa&&(n.clearTimeout(a.Xa),a.Xa=null)}
h.Se=function(){this.Xa=null;var a=y();0<=a-this.Yb?(2!=this.Wa&&this.f.ia(3),Th(this),this.Ba=2,J(18),Wh(this)):ai(this,this.Yb-a)};
function Wh(a){a.f.zc()||a.Ea||a.f.zb(a)}
function Th(a){Sh(a);bf(a.Bb);a.Bb=null;a.g.stop();pg(a.i);if(a.R){var b=a.R;a.R=null;b.abort();b.dispose()}a.la&&(a.la=null)}
h.getLastError=function(){return this.Ba};
function Vh(a,b){try{a.f.Rc(a,b),a.f.ia(4)}catch(c){}}
;function bi(a){if(a.da&&"function"==typeof a.da)return a.da();if("string"===typeof a)return a.split("");if(Ga(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return qb(a)}
function ci(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(Ga(a)||"string"===typeof a)B(a,b,c);else{if(a.qa&&"function"==typeof a.qa)var d=a.qa();else if(a.da&&"function"==typeof a.da)d=void 0;else if(Ga(a)||"string"===typeof a){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=rb(a);e=bi(a);f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}}
;function di(a,b){this.g=this.G=this.i="";this.C=null;this.j=this.f="";this.l=!1;var c;a instanceof di?(this.l=void 0!==b?b:a.l,ei(this,a.i),this.G=a.G,fi(this,a.g),gi(this,a.C),this.f=a.f,hi(this,a.h.clone()),this.j=a.j):a&&(c=Kc(String(a)))?(this.l=!!b,ei(this,c[1]||"",!0),this.G=ii(c[2]||""),fi(this,c[3]||"",!0),gi(this,c[4]),this.f=ii(c[5]||"",!0),hi(this,c[6]||"",!0),this.j=ii(c[7]||"")):(this.l=!!b,this.h=new ji(null,this.l))}
di.prototype.toString=function(){var a=[],b=this.i;b&&a.push(ki(b,li,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.G)&&a.push(ki(b,li,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.f)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(ki(c,"/"==c.charAt(0)?mi:ni,!0));(c=this.h.toString())&&a.push("?",c);(c=this.j)&&a.push("#",ki(c,oi));return a.join("")};
di.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?ei(b,a.i):c=!!a.G;c?b.G=a.G:c=!!a.g;c?fi(b,a.g):c=null!=a.C;var d=a.f;if(c)gi(b,a.C);else if(c=!!a.f){if("/"!=d.charAt(0))if(this.g&&!this.f)d="/"+d;else{var e=b.f.lastIndexOf("/");-1!=e&&(d=b.f.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.f=d:c=""!==a.h.toString();c?hi(b,a.h.clone()):c=!!a.j;c&&(b.j=a.j);return b};
di.prototype.clone=function(){return new di(this)};
function ei(a,b,c){a.i=c?ii(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function fi(a,b,c){a.g=c?ii(b,!0):b}
function gi(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null}
function hi(a,b,c){b instanceof ji?(a.h=b,pi(a.h,a.l)):(c||(b=ki(b,qi)),a.h=new ji(b,a.l))}
function Zh(a,b,c){a.h.set(b,c)}
function Ph(a,b,c){Array.isArray(c)||(c=[String(c)]);ri(a.h,b,c)}
function Lh(a){Zh(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^y()).toString(36));return a}
function si(a){return a instanceof di?a.clone():new di(a,void 0)}
function ti(a,b,c,d){var e=new di(null,void 0);a&&ei(e,a);b&&fi(e,b);c&&gi(e,c);d&&(e.f=d);return e}
function ii(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function ki(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,ui),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function ui(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var li=/[#\/\?@]/g,ni=/[#\?:]/g,mi=/[#\?]/g,qi=/[#\?@]/g,oi=/#/g;function ji(a,b){this.g=this.f=null;this.h=a||null;this.i=!!b}
function vi(a){a.f||(a.f=new lh,a.g=0,a.h&&Pc(a.h,function(b,c){a.add(Cc(b),c)}))}
h=ji.prototype;h.add=function(a,b){vi(this);this.h=null;a=wi(this,a);var c=this.f.get(a);c||this.f.set(a,c=[]);c.push(b);this.g=this.g+1;return this};
h.remove=function(a){vi(this);a=wi(this,a);return oh(this.f.g,a)?(this.h=null,this.g=this.g-this.f.get(a).length,this.f.remove(a)):!1};
h.clear=function(){this.f=this.h=null;this.g=0};
h.isEmpty=function(){vi(this);return 0==this.g};
function xi(a,b){vi(a);b=wi(a,b);return oh(a.f.g,b)}
h.forEach=function(a,b){vi(this);this.f.forEach(function(c,d){B(c,function(e){a.call(b,e,d,this)},this)},this)};
h.qa=function(){vi(this);for(var a=this.f.da(),b=this.f.qa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.da=function(a){vi(this);var b=[];if("string"===typeof a)xi(this,a)&&(b=db(b,this.f.get(wi(this,a))));else{a=this.f.da();for(var c=0;c<a.length;c++)b=db(b,a[c])}return b};
h.set=function(a,b){vi(this);this.h=null;a=wi(this,a);xi(this,a)&&(this.g=this.g-this.f.get(a).length);this.f.set(a,[b]);this.g=this.g+1;return this};
h.get=function(a,b){if(!a)return b;var c=this.da(a);return 0<c.length?String(c[0]):b};
function ri(a,b,c){a.remove(b);0<c.length&&(a.h=null,a.f.set(wi(a,b),eb(c)),a.g=a.g+c.length)}
h.toString=function(){if(this.h)return this.h;if(!this.f)return"";for(var a=[],b=this.f.qa(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.da(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};
h.clone=function(){var a=new ji;a.h=this.h;this.f&&(a.f=this.f.clone(),a.g=this.g);return a};
function wi(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function pi(a,b){b&&!a.i&&(vi(a),a.h=null,a.f.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),ri(this,e,c))},a));
a.i=b}
h.extend=function(a){for(var b=0;b<arguments.length;b++)ci(arguments[b],function(c,d){this.add(d,c)},this)};function yi(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;Ai(a,b,function(g){g?c(!0):n.setTimeout(function(){yi(a,b,c,d,f)},f)})}}
function Ai(a,b,c){var d=new Image;d.onload=function(){try{Bi(d),c(!0)}catch(e){}};
d.onerror=function(){try{Bi(d),c(!1)}catch(e){}};
d.onabort=function(){try{Bi(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Bi(d),c(!1)}catch(e){}};
n.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
yc(d,a)}
function Bi(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function Ci(a){this.f=a;this.g=new Bh}
h=Ci.prototype;h.Lb=null;h.X=null;h.Cb=!1;h.gd=null;h.sb=null;h.Qb=null;h.Mb=null;h.ea=null;h.ua=-1;h.gb=null;h.ab=null;h.connect=function(a){this.Mb=a;a=Di(this.f,null,this.Mb);J(3);this.gd=y();var b=this.f.G;null!=b?(this.gb=b[0],(this.ab=b[1])?(this.ea=1,Ei(this)):(this.ea=2,Fi(this))):(Ph(a,"MODE","init"),this.X=new Hh(this,void 0,void 0,void 0),this.X.Ia=this.Lb,Nh(this.X,a,!1,null,!0),this.ea=0)};
function Ei(a){var b=Di(a.f,a.ab,"/mail/images/cleardot.gif");Lh(b);yi(b.toString(),5E3,v(a.vd,a),3,2E3);a.ia(1)}
h.vd=function(a){if(a)this.ea=2,Fi(this);else{J(4);var b=this.f;b.ra=b.wa.ua;Gi(b,9)}a&&this.ia(2)};
function Fi(a){var b=a.f.u;if(null!=b)J(5),b?(J(11),Hi(a.f,a,!1)):(J(12),Hi(a.f,a,!0));else if(a.X=new Hh(a,void 0,void 0,void 0),a.X.Ia=a.Lb,b=a.f,b=Di(b,b.mb()?a.gb:null,a.Mb),J(5),!D||Fd(10))Ph(b,"TYPE","xmlhttp"),Nh(a.X,b,!1,a.gb,!1);else{Ph(b,"TYPE","html");var c=a.X;a=!!a.gb;c.Wa=3;c.va=Lh(b.clone());Yh(c,a)}}
h.Jb=function(a){return this.f.Jb(a)};
h.abort=function(){this.X&&(this.X.cancel(),this.X=null);this.ua=-1};
h.zc=function(){return!1};
h.Rc=function(a,b){this.ua=a.hb;if(0==this.ea)if(b){try{var c=this.g.parse(b)}catch(d){c=this.f;c.ra=this.ua;Gi(c,2);return}this.gb=c[0];this.ab=c[1]}else c=this.f,c.ra=this.ua,Gi(c,2);else if(2==this.ea)if(this.Cb)J(7),this.Qb=y();else if("11111"==b){if(J(6),this.Cb=!0,this.sb=y(),c=this.sb-this.gd,!D||Fd(10)||500>c)this.ua=200,this.X.cancel(),J(12),Hi(this.f,this,!0)}else J(8),this.sb=this.Qb=y(),this.Cb=!1};
h.zb=function(){this.ua=this.X.hb;if(this.X.ka)0==this.ea?this.ab?(this.ea=1,Ei(this)):(this.ea=2,Fi(this)):2==this.ea&&((!D||Fd(10)?!this.Cb:200>this.Qb-this.sb)?(J(11),Hi(this.f,this,!1)):(J(12),Hi(this.f,this,!0)));else{0==this.ea?J(9):2==this.ea&&J(10);var a=this.f;this.X.getLastError();a.ra=this.ua;Gi(a,2)}};
h.mb=function(){return this.f.mb()};
h.isActive=function(){return this.f.isActive()};
h.ia=function(a){this.f.ia(a)};function Ii(a){qg.call(this);this.headers=new lh;this.L=a||null;this.g=!1;this.I=this.f=null;this.S="";this.l=0;this.i="";this.j=this.O=this.u=this.N=!1;this.F=0;this.A=null;this.na="";this.aa=this.ga=!1}
A(Ii,qg);var Ji=/^https?$/i,Ki=["POST","PUT"];h=Ii.prototype;
h.send=function(a,b,c,d){if(this.f)throw Error("[goog.net.XhrIo] Object is active with another request="+this.S+"; newUri="+a);b=b?b.toUpperCase():"GET";this.S=a;this.i="";this.l=0;this.N=!1;this.g=!0;this.f=this.L?Gh(this.L):Gh(Eh);this.I=this.L?this.L.getOptions():Eh.getOptions();this.f.onreadystatechange=v(this.Qc,this);try{this.getStatus(),this.O=!0,this.f.open(b,String(a),!0),this.O=!1}catch(f){this.getStatus();Li(this,f);return}a=c||"";var e=this.headers.clone();d&&ci(d,function(f,g){e.set(g,
f)});
d=Xa(e.qa(),Mi);c=n.FormData&&a instanceof n.FormData;!Za(Ki,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,g){this.f.setRequestHeader(g,f)},this);
this.na&&(this.f.responseType=this.na);"withCredentials"in this.f&&this.f.withCredentials!==this.ga&&(this.f.withCredentials=this.ga);try{Ni(this),0<this.F&&(this.aa=Oi(this.f),this.getStatus(),this.aa?(this.f.timeout=this.F,this.f.ontimeout=v(this.uc,this)):this.A=Qg(this.uc,this.F,this)),this.getStatus(),this.u=!0,this.f.send(a),this.u=!1}catch(f){this.getStatus(),Li(this,f)}};
function Oi(a){return D&&Ed(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
function Mi(a){return"content-type"==a.toLowerCase()}
h.uc=function(){"undefined"!=typeof Aa&&this.f&&(this.i="Timed out after "+this.F+"ms, aborting",this.l=8,this.getStatus(),this.dispatchEvent("timeout"),this.abort(8))};
function Li(a,b){a.g=!1;a.f&&(a.j=!0,a.f.abort(),a.j=!1);a.i=b;a.l=5;Pi(a);Qi(a)}
function Pi(a){a.N||(a.N=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.f&&this.g&&(this.getStatus(),this.g=!1,this.j=!0,this.f.abort(),this.j=!1,this.l=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Qi(this))};
h.B=function(){this.f&&(this.g&&(this.g=!1,this.j=!0,this.f.abort(),this.j=!1),Qi(this,!0));Ii.J.B.call(this)};
h.Qc=function(){this.K()||(this.O||this.u||this.j?Ri(this):this.He())};
h.He=function(){Ri(this)};
function Ri(a){if(a.g&&"undefined"!=typeof Aa)if(a.I[1]&&4==Qh(a)&&2==a.getStatus())a.getStatus();else if(a.u&&4==Qh(a))Qg(a.Qc,0,a);else if(a.dispatchEvent("readystatechange"),4==Qh(a)){a.getStatus();a.g=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Kc(String(a.S))[1]||null;if(!f&&n.self&&n.self.location){var g=n.self.location.protocol;f=g.substr(0,g.length-1)}e=!Ji.test(f?
f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.l=6;try{var k=2<Qh(a)?a.f.statusText:""}catch(l){k=""}a.i=k+" ["+a.getStatus()+"]";Pi(a)}}finally{Qi(a)}}}
function Qi(a,b){if(a.f){Ni(a);var c=a.f,d=a.I[0]?u:null;a.f=null;a.I=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}}
function Ni(a){a.f&&a.aa&&(a.f.ontimeout=null);a.A&&(n.clearTimeout(a.A),a.A=null)}
h.isActive=function(){return!!this.f};
function Qh(a){return a.f?a.f.readyState:0}
h.getStatus=function(){try{return 2<Qh(this)?this.f.status:-1}catch(a){return-1}};
function Rh(a){try{return a.f?a.f.responseText:""}catch(b){return""}}
h.getLastError=function(){return"string"===typeof this.i?this.i:String(this.i)};function Si(a,b,c){this.f=1;this.g=[];this.i=[];this.j=new Bh;this.G=a||null;this.u=null!=b?b:null;this.l=c||!1}
function Ti(a,b){this.g=a;this.f=b;this.context=null}
h=Si.prototype;h.cb=null;h.W=null;h.P=null;h.Kb=null;h.ub=null;h.cc=null;h.vb=null;h.ib=0;h.le=0;h.T=null;h.za=null;h.ta=null;h.Ga=null;h.wa=null;h.Eb=null;h.Ra=-1;h.Cc=-1;h.ra=-1;h.Pa=0;h.Na=0;h.Fa=8;var Ui=new qg;function Vi(a){Lf.call(this,"statevent",a)}
A(Vi,Lf);function Wi(a,b){Lf.call(this,"timingevent",a);this.size=b}
A(Wi,Lf);function Xi(a){Lf.call(this,"serverreachability",a)}
A(Xi,Lf);h=Si.prototype;h.connect=function(a,b,c,d,e){J(0);this.Kb=b;this.cb=c||{};d&&void 0!==e&&(this.cb.OSID=d,this.cb.OAID=e);this.l?($h(v(this.nc,this,a),100),Yi(this)):this.nc(a)};
function Zi(a){$i(a);if(3==a.f){var b=a.ib++,c=a.ub.clone();Zh(c,"SID",a.h);Zh(c,"RID",b);Zh(c,"TYPE","terminate");aj(a,c);b=new Hh(a,a.h,b,void 0);b.Wa=2;b.va=Lh(c.clone());yc(new Image,b.va.toString());b.Ua=y();Oh(b)}bj(a)}
h.nc=function(a){this.wa=new Ci(this);this.wa.Lb=null;this.wa.g=this.j;this.wa.connect(a)};
function Yi(a){a.xd(1,0);a.ub=Di(a,null,a.Kb);cj(a)}
function $i(a){a.wa&&(a.wa.abort(),a.wa=null);a.P&&(a.P.cancel(),a.P=null);a.ta&&(n.clearTimeout(a.ta),a.ta=null);dj(a);a.W&&(a.W.cancel(),a.W=null);a.za&&(n.clearTimeout(a.za),a.za=null)}
function ej(a,b){if(0==a.f)throw Error("Invalid operation: sending map when state is closed");a.g.push(new Ti(a.le++,b));2!=a.f&&3!=a.f||cj(a)}
h.zc=function(){return 0==this.f};
function cj(a){a.W||a.za||(a.za=$h(v(a.Vc,a),0),a.Pa=0)}
h.Vc=function(a){this.za=null;fj(this,a)};
function fj(a,b){if(1==a.f){if(!b){a.ib=Math.floor(1E5*Math.random());var c=a.ib++,d=new Hh(a,"",c,void 0);d.Ia=null;var e=gj(a),f=a.ub.clone();Zh(f,"RID",c);Zh(f,"CVER","1");aj(a,f);Kh(d,f,e);a.W=d;a.f=2}}else 3==a.f&&(b?hj(a,b):0==a.g.length||a.W||hj(a))}
function hj(a,b){if(b)if(6<a.Fa){a.g=a.i.concat(a.g);a.i.length=0;var c=a.ib-1;var d=gj(a)}else c=b.G,d=b.La;else c=a.ib++,d=gj(a);var e=a.ub.clone();Zh(e,"SID",a.h);Zh(e,"RID",c);Zh(e,"AID",a.Ra);aj(a,e);c=new Hh(a,a.h,c,a.Pa+1);c.Ia=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.W=c;Kh(c,e,d)}
function aj(a,b){if(a.T){var c=a.T.pc();c&&mb(c,function(d,e){Zh(b,e,d)})}}
function gj(a){var b=Math.min(a.g.length,1E3),c=["count="+b];if(6<a.Fa&&0<b){var d=a.g[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.g[e].g,g=a.g[e].f;f=6>=a.Fa?e:f-d;try{mb(g,function(k,l){c.push("req"+f+"_"+l+"="+encodeURIComponent(k))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.g.splice(0,b));
return c.join("&")}
function ij(a){a.P||a.ta||(a.C=1,a.ta=$h(v(a.Uc,a),0),a.Na=0)}
function jj(a){if(a.P||a.ta||3<=a.Na)return!1;a.C++;a.ta=$h(v(a.Uc,a),kj(a,a.Na));a.Na++;return!0}
h.Uc=function(){this.ta=null;this.P=new Hh(this,this.h,"rpc",this.C);this.P.Ia=null;this.P.Nb=0;var a=this.cc.clone();Zh(a,"RID","rpc");Zh(a,"SID",this.h);Zh(a,"CI",this.Eb?"0":"1");Zh(a,"AID",this.Ra);aj(this,a);if(!D||Fd(10))Zh(a,"TYPE","xmlhttp"),Nh(this.P,a,!0,this.vb,!1);else{Zh(a,"TYPE","html");var b=this.P,c=!!this.vb;b.Wa=3;b.va=Lh(a.clone());Yh(b,c)}};
function Hi(a,b,c){a.Eb=c;a.ra=b.ua;a.l||Yi(a)}
h.Rc=function(a,b){if(0!=this.f&&(this.P==a||this.W==a))if(this.ra=a.hb,this.W==a&&3==this.f)if(7<this.Fa){try{var c=this.j.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.ta){if(this.P)if(this.P.Ua+3E3<this.W.Ua)dj(this),this.P.cancel(),this.P=null;else break a;jj(this);J(19)}}else this.Cc=c[1],0<this.Cc-this.Ra&&37500>c[2]&&this.Eb&&0==this.Na&&!this.Ga&&(this.Ga=$h(v(this.me,this),6E3));else Gi(this,11)}else b!=Sd.Mf.f&&Gi(this,11);else if(this.P==a&&dj(this),!/^[\s\xa0]*$/.test(b)){c=
this.j.parse(b);Array.isArray(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ra=e[0];e=e[1];2==this.f?"c"==e[0]?(this.h=e[1],this.vb=e[2],e=e[3],null!=e?this.Fa=e:this.Fa=6,this.f=3,this.T&&this.T.hc(),this.cc=Di(this,this.mb()?this.vb:null,this.Kb),ij(this)):"stop"==e[0]&&Gi(this,7):3==this.f&&("stop"==e[0]?Gi(this,7):"noop"!=e[0]&&this.T&&this.T.fc(e),this.Na=0)}}};
h.me=function(){null!=this.Ga&&(this.Ga=null,this.P.cancel(),this.P=null,jj(this),J(20))};
function dj(a){null!=a.Ga&&(n.clearTimeout(a.Ga),a.Ga=null)}
h.zb=function(a){if(this.P==a){dj(this);this.P=null;var b=2}else if(this.W==a)this.W=null,b=1;else return;this.ra=a.hb;if(0!=this.f)if(a.ka)1==b?(b=y()-a.Ua,Ui.dispatchEvent(new Wi(Ui,a.La?a.La.length:0,b,this.Pa)),cj(this),this.i.length=0):ij(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.ra)){if(d=1==b)this.W||this.za||1==this.f||2<=this.Pa?d=!1:(this.za=$h(v(this.Vc,this,a),kj(this,this.Pa)),this.Pa++,d=!0);d=!(d||2==b&&jj(this))}if(d)switch(c){case 1:Gi(this,5);break;case 4:Gi(this,
10);break;case 3:Gi(this,6);break;case 7:Gi(this,12);break;default:Gi(this,2)}}};
function kj(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
h.xd=function(a){if(!Za(arguments,this.f))throw Error("Unexpected channel state: "+this.f);};
function Gi(a,b){if(2==b||9==b){var c=null;a.T&&(c=null);var d=v(a.hf,a);c||(c=new di("//www.google.com/images/cleardot.gif"),Lh(c));Ai(c.toString(),1E4,d)}else J(2);lj(a,b)}
h.hf=function(a){a?J(2):(J(1),lj(this,8))};
function lj(a,b){a.f=0;a.T&&a.T.ec(b);bj(a);$i(a)}
function bj(a){a.f=0;a.ra=-1;if(a.T)if(0==a.i.length&&0==a.g.length)a.T.Ib();else{eb(a.i);var b=eb(a.g);a.i.length=0;a.g.length=0;a.T.Ib(b)}}
function Di(a,b,c){var d=si(c);if(""!=d.g)b&&fi(d,b+"."+d.g),gi(d,d.C);else{var e=window.location;d=ti(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.cb&&mb(a.cb,function(f,g){Zh(d,g,f)});
Zh(d,"VER",a.Fa);aj(a,d);return d}
h.Jb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Ii;a.ga=!1;return a};
h.isActive=function(){return!!this.T&&this.T.isActive(this)};
function $h(a,b){if(!Ha(a))throw Error("Fn must not be null and must be a function");return n.setTimeout(function(){a()},b)}
h.ia=function(a){Ui.dispatchEvent(new Xi(Ui,a))};
function J(a){Ui.dispatchEvent(new Vi(Ui,a))}
h.mb=function(){return!(!D||Fd(10))};
function mj(){}
h=mj.prototype;h.hc=function(){};
h.fc=function(){};
h.ec=function(){};
h.Ib=function(){};
h.pc=function(){return{}};
h.isActive=function(){return!0};var nj=function(){if(rd){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(ec))?a[1]:"0"}return qd?(a=/10[_.][0-9_.]+/,(a=a.exec(ec))?a[0].replace(/_/g,"."):"10"):sd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(ec))?a[1]:""):td||ud||wd?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(ec))?a[1].replace(/_/g,"."):""):""}();function oj(a){return(a=a.exec(ec))?a[1]:""}
var pj=function(){if(Jd)return oj(/Firefox\/([0-9.]+)/);if(D||md||ld)return Dd;if(Nd)return gd()?oj(/CriOS\/([0-9.]+)/):oj(/Chrome\/([0-9.]+)/);if(Od&&!gd())return oj(/Version\/([0-9.]+)/);if(Kd||Ld){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(ec);if(a)return a[1]+"."+a[2]}else if(Md)return(a=oj(/Android\s+([0-9.]+)/))?a:oj(/Version\/([0-9.]+)/);return""}();function qj(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=jf(k,"position")){var m=nf(k);if(!l){l=uf(k);var p;if(p=l){if(p=Od)p=0<=Ub(pj,10);var q;if(q=xd)q=0<=Ub(nj,10);p=od||p||q}l=p?-k.scrollLeft:!l||nd&&Ed("8")||"visible"==jf(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;m=ae(m,new $d(l,k.scrollTop))}}}k=m||new $d;m=tf(a);if(l=mf(a)){var w=new df(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(m.left,w.left);
p=Math.min(m.left+m.width,w.left+w.width);l<=p&&(q=Math.max(m.top,w.top),w=Math.min(m.top+m.height,w.top+w.height),q<=w&&(m.left=l,m.top=q,m.width=p-l,m.height=w-q))}l=ce(a);q=ce(c);if(l.f!=q.f){p=l.f.body;q=oe(q.f);w=new $d(0,0);var r=(r=ee(p))?oe(r):window;if(id(r,"parent")){var R=p;do{var wa=r==q?nf(R):of(R);w.x+=wa.x;w.y+=wa.y}while(r&&r!=q&&r!=r.parent&&(R=r.frameElement)&&(r=r.parent))}p=ae(w,nf(p));!D||Fd(9)||le(l.f)||(p=ae(p,me(l.f)));m.left+=p.x;m.top+=p.y}a=rj(a,b);b=m.left;a&4?b+=m.width:
a&2&&(b+=m.width/2);b=new $d(b,m.top+(a&1?m.height:0));b=ae(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var L;g&&(L=mf(c))&&(L.top-=k.y,L.right-=k.x,L.bottom-=k.y,L.left-=k.x);e=L;L=b.clone();b=rj(c,d);d=rf(c);a=d.clone();L=L.clone();a=a.clone();k=0;if(f||0!=b)b&4?L.x-=a.width+(f?f.right:0):b&2?L.x-=a.width/2:f&&(L.x+=f.left),b&1?L.y-=a.height+(f?f.bottom:0):f&&(L.y+=f.top);g&&(e?(f=L,b=a,k=0,65==(g&65)&&(f.x<e.left||f.x>=e.right)&&(g&=-2),132==(g&132)&&(f.y<e.top||f.y>=e.bottom)&&(g&=-5),f.x<
e.left&&g&1&&(f.x=e.left,k|=1),g&16&&(m=f.x,f.x<e.left&&(f.x=e.left,k|=4),f.x+b.width>e.right&&(b.width=Math.min(e.right-f.x,m+b.width-e.left),b.width=Math.max(b.width,0),k|=4)),f.x+b.width>e.right&&g&1&&(f.x=Math.max(e.right-b.width,e.left),k|=1),g&2&&(k|=(f.x<e.left?16:0)|(f.x+b.width>e.right?32:0)),f.y<e.top&&g&4&&(f.y=e.top,k|=2),g&32&&(m=f.y,f.y<e.top&&(f.y=e.top,k|=8),f.y+b.height>e.bottom&&(b.height=Math.min(e.bottom-f.y,m+b.height-e.top),b.height=Math.max(b.height,0),k|=8)),f.y+b.height>e.bottom&&
g&4&&(f.y=Math.max(e.bottom-b.height,e.top),k|=2),g&8&&(k|=(f.y<e.top?64:0)|(f.y+b.height>e.bottom?128:0)),g=k):g=256,k=g);f=new df(0,0,0,0);f.left=L.x;f.top=L.y;f.width=a.width;f.height=a.height;g=k;g&496||(L=new $d(f.left,f.top),L instanceof $d?(e=L.x,L=L.y):(e=L,L=void 0),c.style.left=qf(e,!1),c.style.top=qf(L,!1),a=new be(f.width,f.height),d==a||d&&a&&d.width==a.width&&d.height==a.height||(f=a,e=le(ce(ee(c)).f),!D||Ed("10")||e&&Ed("8")?(c=c.style,od?c.MozBoxSizing="border-box":pd?c.WebkitBoxSizing=
"border-box":c.boxSizing="border-box",c.width=Math.max(f.width,0)+"px",c.height=Math.max(f.height,0)+"px"):(d=c.style,e?(e=xf(c),c=Af(c),d.pixelWidth=f.width-c.left-e.left-e.right-c.right,d.pixelHeight=f.height-c.top-e.top-e.bottom-c.bottom):(d.pixelWidth=f.width,d.pixelHeight=f.height))));return g}
function rj(a,b){return(b&8&&uf(a)?b^4:b)&-9}
;function K(a){$e.call(this);this.j=1;this.h=[];this.i=0;this.f=[];this.g={};this.l=!!a}
A(K,$e);h=K.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.j=e+3;d.push(e);return e};
function sj(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.fa(d),b.apply(void 0,arguments))},a)}
function tj(a,b,c,d){if(b=a.g[b]){var e=a.f;(b=Xa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.fa(b)}}
h.fa=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.f[a+1]=u):(c&&ab(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
h.Y=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];uj(this.f[g+1],this.f[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.fa(c)}}return 0!=e}return!1};
function uj(a,b,c){Jg(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(B(b,this.fa,this),delete this.g[a])}else this.f.length=0,this.g={}};
function vj(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=vj(a,d);return c}
h.B=function(){K.J.B.call(this);this.clear();this.h.length=0};function wj(a){this.f=a}
wj.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,uh(b))};
wj.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
wj.prototype.remove=function(a){this.f.remove(a)};function xj(a){this.f=a}
A(xj,wj);function yj(a){this.data=a}
function zj(a){return void 0===a||a instanceof yj?a:new yj(a)}
xj.prototype.set=function(a,b){xj.J.set.call(this,a,zj(b))};
xj.prototype.g=function(a){a=xj.J.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
xj.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Aj(a){this.f=a}
A(Aj,xj);function Bj(a){var b=a.creation;a=a.expiration;return!!a&&a<y()||!!b&&b>y()}
Aj.prototype.set=function(a,b,c){if(b=zj(b)){if(c){if(c<y()){Aj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}Aj.J.set.call(this,a,b)};
Aj.prototype.g=function(a,b){var c=Aj.J.g.call(this,a);if(c)if(!b&&Bj(c))Aj.prototype.remove.call(this,a);else return c};function Cj(a){this.f=a}
A(Cj,Aj);function Dj(a,b){var c=[];jh(b,function(d){try{var e=Cj.prototype.g.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):Bj(e)&&c.push(d)},a);
return c}
function Ej(a,b){var c=Dj(a,b);B(c,function(d){Cj.prototype.remove.call(this,d)},a)}
;function Fj(){}
;function Gj(){}
A(Gj,Fj);Gj.prototype.clear=function(){var a=kh(this.sa(!0)),b=this;B(a,function(c){b.remove(c)})};function Hj(a){this.f=a}
A(Hj,Gj);h=Hj.prototype;h.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeItem(a)};
h.sa=function(a){var b=0,c=this.f,d=new hh;d.next=function(){if(b>=c.length)throw gh;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){this.f.clear()};
h.key=function(a){return this.f.key(a)};function Ij(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(Ij,Hj);function Jj(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.f=a}
A(Jj,Hj);function Kj(a,b){this.g=a;this.f=null;if(D&&!Fd(9)){Lj||(Lj=new lh);this.f=Lj.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Lj.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(Kj,Gj);var Mj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Lj=null;function Nj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Mj[b]})}
h=Kj.prototype;h.isAvailable=function(){return!!this.f};
h.set=function(a,b){this.f.setAttribute(Nj(a),b);Oj(this)};
h.get=function(a){a=this.f.getAttribute(Nj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.f.removeAttribute(Nj(a));Oj(this)};
h.sa=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new hh;d.next=function(){if(b>=c.length)throw gh;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
h.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Oj(this)};
function Oj(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Pj(a,b){this.g=a;this.f=b+"::"}
A(Pj,Gj);Pj.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Pj.prototype.get=function(a){return this.g.get(this.f+a)};
Pj.prototype.remove=function(a){this.g.remove(this.f+a)};
Pj.prototype.sa=function(a){var b=this.g.sa(!0),c=this,d=new hh;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Qj(a){var b=new Ij;return b.isAvailable()?a?new Pj(b,a):b:null}
;function Rj(){this.f=[];this.g=[]}
Rj.prototype.isEmpty=function(){return 0==this.f.length&&0==this.g.length};
Rj.prototype.clear=function(){this.f=[];this.g=[]};
Rj.prototype.remove=function(a){var b=this.f;var c=Ra(b,a);0<=c?(bb(b,c),b=!0):b=!1;return b||ab(this.g,a)};
Rj.prototype.da=function(){for(var a=[],b=this.f.length-1;0<=b;--b)a.push(this.f[b]);var c=this.g.length;for(b=0;b<c;++b)a.push(this.g[b]);return a};var Sj=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Sj);function Tj(a){var b=arguments;1<b.length?Sj[b[0]]=b[1]:1===b.length&&Object.assign(Sj,b[0])}
function M(a,b){return a in Sj?Sj[a]:b}
function Uj(){return M("ERRORS",[])}
function Vj(){return M("CREATOR_CONTEXT",Wj)}
function Xj(a){var b=Sj.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function Yj(a){a=Zj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ak(a,b){var c=Zj(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Zj(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;function bk(a,b,c,d,e,f){Vd.set(""+a,b,{Dc:c,path:d,domain:void 0===e?"youtube.com":e,secure:void 0===f?!1:f})}
function ck(a,b,c){return Vd.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
;var dk={"consent.google.com":!0,"consent.youtube.com":!0,"consent-daily-0.sandbox.youtube.com":!0,"consent-daily-1.sandbox.youtube.com":!0,"consent-daily-2.sandbox.youtube.com":!0,"consent-daily-3.sandbox.youtube.com":!0,"consent-daily-4.sandbox.youtube.com":!0,"consent-daily-5.sandbox.youtube.com":!0,"consent-daily-6.sandbox.youtube.com":!0,"consent-autopush.sandbox.youtube.com":!0,"daily-0.consent.corp.youtube.com":!0,"daily-1.consent.corp.youtube.com":!0,"daily-2.consent.corp.youtube.com":!0,"daily-3.consent.corp.youtube.com":!0,
"daily-4.consent.corp.youtube.com":!0,"daily-5.consent.corp.youtube.com":!0,"daily-6.consent.corp.youtube.com":!0,"autopush.consent.corp.youtube.com":!0,"dev.consent.corp.youtube.com":!0,"consent-daily-0.sandbox.google.com":!0,"consent-daily-1.sandbox.google.com":!0,"consent-daily-2.sandbox.google.com":!0,"consent-daily-3.sandbox.google.com":!0,"consent-daily-4.sandbox.google.com":!0,"consent-daily-5.sandbox.google.com":!0,"consent-daily-6.sandbox.google.com":!0,"consent-autopush.sandbox.google.com":!0,
"daily-0.consent.corp.google.com":!0,"daily-1.consent.corp.google.com":!0,"daily-2.consent.corp.google.com":!0,"daily-3.consent.corp.google.com":!0,"daily-4.consent.corp.google.com":!0,"daily-5.consent.corp.google.com":!0,"daily-6.consent.corp.google.com":!0,"autopush.consent.corp.google.com":!0,"dev.consent.corp.google.com":!0};function ek(a,b,c){a&&(a.dataset?a.dataset[fk(b)]=String(c):a.setAttribute("data-"+b,c))}
function N(a,b){return a?a.dataset?a.dataset[fk(b)]:a.getAttribute("data-"+b):null}
function gk(a,b){a&&(a.dataset?delete a.dataset[fk(b)]:a.removeAttribute("data-"+b))}
var hk={};function fk(a){return hk[a]||(hk[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ik=0;function jk(a){var b=a.__yt_uid_key;b||(b=kk(),a.__yt_uid_key=b);return b}
function lk(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?B(a.childNodes,function(c){b.appendChild(lk(c))}):b.innerHTML=a.innerHTML;
return b}
function mk(a,b){a=E(a);b=E(b);return!!Qe(a,function(c){return c===b},void 0)}
function nk(a,b,c){a=he(document,a,b,c);return a.length?a[0]:null}
function ok(a,b){"disabled"in a&&(a.disabled=!b);1==a.nodeType&&bh(a,"disabled",!b);if(a.hasChildNodes())for(var c=0,d;d=a.childNodes[c];++c)d instanceof Element&&ok(d,b)}
function pk(a){a=a.replace(/^[\s\xa0]+/,"");var b=String(a.substr(0,3)).toLowerCase();if(0==("<tr"<b?-1:"<tr"==b?0:1))return a=te(Se("<table><tbody>"+a+"</tbody></table>")),nk("tr",null,a);b=document.createElement("div");b.innerHTML=a;return ze(b)}
function qk(){bh(document.body,"hide-players",!1);B(ge("preserve-players"),function(a){I(a,"preserve-players")})}
var kk=t("ytDomDomGetNextId")||function(){return++ik};
z("ytDomDomGetNextId",kk);var rk=[];function sk(a){rk.forEach(function(b){return b(a)})}
function tk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){uk(b),sk(b)}}:a}
function uk(a){var b=t("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Uj(),b.push([a,"ERROR",void 0,void 0,void 0]),Tj("ERRORS",b))}
function vk(a){var b=t("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Uj(),b.push([a,"WARNING",void 0,void 0,void 0]),Tj("ERRORS",b))}
;var wk={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xk(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wk||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
xk.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xk.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xk.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var tb=t("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",tb);var yk=t("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",yk);
function zk(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return sb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ia(e[4])&&Ia(d)&&wb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function O(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=zk(a,b,c,d);if(e)return e;e=++yk.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new xk(k);if(!Qe(k.relatedTarget,function(l){return l==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new xk(k);
k.currentTarget=a;return c.call(a,k)};
g=tk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ak()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);tb[e]=[a,b,c,g,d];return e}
function Bk(a,b,c,d){var e=a||document;return O(e,b,function(f){var g=Qe(f.target,function(k){return k===e||d(k)});
g&&g!==e&&!g.disabled&&(f.currentTarget=g,c.call(g,f))})}
function Ck(a){a&&("string"==typeof a&&(a=[a]),B(a,function(b){if(b in tb){var c=tb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ak()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete tb[b]}}))}
function Dk(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Ak=lb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ek(a,b,c,d){return Bk(a,b,c,function(e){return G(e,d)})}
function Fk(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Gk(a,b,c){var d=void 0===d?{}:d;var e;return e=O(a,b,function(){Ck(e);c.apply(a,arguments)},d)}
;function P(a,b){Ha(a)&&(a=tk(a));return window.setTimeout(a,b)}
function Q(a){window.clearTimeout(a)}
;var Hk=t("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.fa;K.prototype.publish=K.prototype.Y;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",Hk);var Ik=t("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",Ik);var Jk=t("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",Jk);var Kk=t("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",Kk);
function S(a,b,c){var d=Lk();if(d){var e=d.subscribe(a,function(){var f=arguments;var g=function(){Ik[e]&&b.apply(c||window,f)};
try{Kk[a]?g():P(g,0)}catch(k){uk(k)}},c);
Ik[e]=!0;Jk[a]||(Jk[a]=[]);Jk[a].push(e);return e}return 0}
function Mk(){var a=T.lb,b=T,c=S("yt-ui-dialog-cancelled",function(d){a.apply(b,arguments);Nk(c)},b)}
function Nk(a){var b=Lk();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),B(a,function(c){b.unsubscribeByKey(c);delete Ik[c]}))}
function U(a,b){var c=Lk();c&&c.publish.apply(c,arguments)}
function Ok(a,b){Kk[a]=!0;var c=Lk();c&&c.publish.apply(c,arguments);Kk[a]=!1}
function Pk(a){var b=Lk();if(b)if(b.clear(a),a)Qk(a);else for(var c in Jk)Qk(c)}
function Lk(){return t("ytPubsubPubsubInstance")}
function Qk(a){Jk[a]&&(a=Jk[a],B(a,function(b){Ik[b]&&delete Ik[b]}),a.length=0)}
;function Rk(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=Cc(e[0]||""),g=Cc(e[1]||"");f in b?Fa(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(l){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};uk(k)}}}return b}
function Sk(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Fa(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Tk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Rk(a)}
function Uk(a,b){return Vk(a,b||{},!0)}
function Vk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Tk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Sc(a,e)+d}
;function Wk(a){var b=Xk;a=void 0===a?t("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Yk(b),Zk(b));b.ca_type="image";a&&(b.bid=a);return b}
function Yk(a){var b={};b.dt=Bf;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?Rd:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!Rd.navigator&&"unknown"!==typeof Rd.navigator.javaEnabled&&!!Rd.navigator.javaEnabled&&Rd.navigator.javaEnabled();Rd.screen&&(b.u_h=Rd.screen.height,b.u_w=Rd.screen.width,b.u_ah=Rd.screen.availHeight,b.u_aw=Rd.screen.availWidth,b.u_cd=
Rd.screen.colorDepth);Rd.navigator&&Rd.navigator.plugins&&(b.u_nplug=Rd.navigator.plugins.length);Rd.navigator&&Rd.navigator.mimeTypes&&(b.u_nmime=Rd.navigator.mimeTypes.length);return b}
function Zk(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var g=b.innerWidth;var k=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var l=ke(c||window).round()}catch(m){l=new be(-12245933,-12245933)}c=l;l={};d=new xg;n.SVGElement&&n.document.createElementNS&&d.set(0);e=Ze();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=yg(d);l.bc=d;l.bih=c.height;l.biw=c.width;l.brdim=b.join();a=a.g;return l.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,l.wgl=!!Rd.WebGLRenderingContext,l}
var Xk=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Sk(Wk(a))});y();var $k=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function al(){if(!$k)return null;var a=$k();return"open"in a?a:null}
;var bl={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},cl="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
dl=!1;
function el(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Kc(a)[1]||null,e=Mc(a);d&&e?(d=c,c=Kc(a),d=Kc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Mc(c)==e&&(Number(Kc(c)[4]||null)||null)==(Number(Kc(a)[4]||null)||null):!0;d=Yj("web_ajax_ignore_global_headers_if_set");for(var f in bl)e=M(bl[f]),!e||!c&&!fl(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||fl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||fl(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=
typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||fl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Sk(Wk(void 0));return b}
function gl(a){var b=window.location.search,c=Mc(a),d=Lc(Kc(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Tk(b),f={};B(cl,function(g){e[g]&&(f[g]=e[g])});
return Vk(a,f||{},!1)}
function fl(a,b){var c=M("CORS_HEADER_WHITELIST")||{},d=Mc(a);return d?(c=c[d])?Za(c,b):!1:!0}
function hl(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=il(a,b);var d=jl(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Q(f);var k=g.ok,l=function(m){m=m||{};var p=b.context||n;k?b.onSuccess&&b.onSuccess.call(p,m,g):b.onError&&b.onError.call(p,m,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(l,function(){l(null)}):l(null)}});
b.Pc&&0<b.timeout&&(f=P(function(){e||(e=!0,Q(f),b.Pc.call(b.context||n))},b.timeout))}else kl(a,b)}
function kl(a,b){var c=b.format||"JSON";a=il(a,b);var d=jl(a,b),e=!1,f,g=ll(a,function(k){if(!e){e=!0;f&&Q(f);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=ml(c,k,b.dg);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||n;
l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ka&&0<b.timeout&&(f=P(function(){e||(e=!0,g.abort(),Q(f),b.Ka.call(b.context||n,g))},b.timeout));
return g}
function il(a,b){b.hg&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.nb;d&&(d[c]&&delete d[c],a=Uk(a,d));return a}
function jl(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ja,g=M("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.gg||Mc(a)&&!b.withCredentials&&Mc(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.ja&&b.ja[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Tk(e),Ab(e,f),e=b.Zc&&"JSON"==b.Zc?JSON.stringify(e):Rc(e));f=e||f&&!ub(f);!dl&&f&&"POST"!=b.method&&(dl=!0,uk(Error("AJAX request with postData should use POST")));
return e}
function ml(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?nl(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=ol(e)})}c&&pl(d);
return d}
function pl(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=tc(a[b],null):pl(a[b])}}
function nl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ol(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ll(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&tk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=al();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;Yj("debug_forward_web_query_parameters")&&(a=gl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=el(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var ql={},rl=0;function sl(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=ec,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Zb(cc(a)),"about:invalid#zClosurez"===a?a="":(a=nc(oc(a)).toString(),a=encodeURIComponent(String(uh(a)))),/^[\s\xa0]*$/.test(a)||(a=pe("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),ee(a).body.appendChild(a))):e?ll(a,b,"POST",e,d):M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ll(a,b,"GET","",d):tl(a,b)||ul(a,b))}
function tl(a,b){if(!Xj("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Xj("use_sonic_library_for_v4_support"))try{var c,d=Lc(Kc(a)[5]||null);if(!(c=!(d&&d.endsWith("/aclk")))){var e=new Vc({url:a});c=!(e.j?e.h&&e.f||e.i:e.g)}if(c)return!1}catch(f){return vk(Error("ClickUrl library throws error, url = "+a)),!1}else if(c=Lc(Kc(a)[5]||null),!c||-1==c.indexOf("/aclk")||"1"!==Uc(a,"ae")||"1"!==Uc(a,"act"))return!1;return vl(a)?(b&&b(),!0):!1}
function vl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ul(a,b){var c=new Image,d=""+rl++;ql[d]=c;c.onload=c.onerror=function(){b&&ql[d]&&b();delete ql[d]};
c.src=a}
;function wl(a,b){sl("/gen_204?"+a,b)}
;function xl(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",bh(a,"hid",!b))}
function yl(a){return(a=E(a))?"none"!=a.style.display&&!G(a,"hid"):!1}
function zl(a){if(a=E(a))yl(a)?(a.style.display="none",H(a,"hid")):(a.style.display="",I(a,"hid"))}
function Al(a){B(arguments,function(b){!Ga(b)||b instanceof Element?xl(b,!0):B(b,function(c){Al(c)})})}
function Bl(a){B(arguments,function(b){!Ga(b)||b instanceof Element?xl(b,!1):B(b,function(c){Bl(c)})})}
function Cl(a){B(arguments,function(b){Ga(b)?B(b,function(c){Cl(c)}):zl(b)})}
;function Dl(a,b){this.version=a;this.args=b}
;function El(a,b){this.topic=a;this.f=b}
El.prototype.toString=function(){return this.topic};function Fl(){}
;function Gl(){}
sa(Gl,Fl);function Hl(a,b,c){isNaN(c)&&(c=void 0);var d=t("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):P(a,c||0)}
Gl.prototype.start=function(){var a=t("yt.scheduler.instance.start");a&&a()};
Gl.prototype.pause=function(){var a=t("yt.scheduler.instance.pause");a&&a()};
Da(Gl);Gl.getInstance();var Il=t("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.fa;K.prototype.publish=K.prototype.Y;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Il);var Jl=t("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Jl);var Kl=t("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Kl);var Ll=t("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Ll);
z("ytPubsub2Pubsub2SkipSubKey",null);function Ml(a,b){var c=Nl();c&&c.publish.call(c,a.toString(),a,b)}
function Ol(a,b){var c=Nl();if(c){var d=c.subscribe(a.toString(),function(e,f){var g=t("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Jl[d])try{if(f&&a instanceof El&&a!=e)try{var k=a.f,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.Da){var m=new k;k.Da=m.version}var p=k.Da}catch(q){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(k,eb(l.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(window,f)}catch(q){uk(q)}},Ll[a.toString()]?t("yt.scheduler.instance")?Hl(g,1,void 0):P(g,0):g())});
Jl[d]=!0;Kl[a.toString()]||(Kl[a.toString()]=[]);Kl[a.toString()].push(d)}}
function Pl(a){var b=Nl();b&&("number"===typeof a&&(a=[a]),B(a,function(c){b.unsubscribeByKey(c);delete Jl[c]}))}
function Nl(){return t("ytPubsub2Pubsub2Instance")}
;var Ql={},Rl="ontouchstart"in document;function Sl(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Qe(c,function(e){return G(e,b)},d)}
function Tl(a){var b="mouseover"==a.type&&"mouseenter"in Ql||"mouseout"==a.type&&"mouseleave"in Ql,c=a.type in Ql||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Ql[b];for(var d in c.g){var e=Sl(b,d,a.target);e&&!Qe(a.relatedTarget,function(f){return f==e})&&c.Y(d,e,b,a)}}if(b=Ql[a.type])for(d in b.g)(e=Sl(a.type,d,a.target))&&b.Y(d,e,a.type,a)}}
O(document,"blur",Tl,!0);O(document,"change",Tl,!0);O(document,"click",Tl);O(document,"focus",Tl,!0);O(document,"mouseover",Tl);O(document,"mouseout",Tl);O(document,"mousedown",Tl);O(document,"keydown",Tl);O(document,"keyup",Tl);O(document,"keypress",Tl);O(document,"cut",Tl);O(document,"paste",Tl);Rl&&(O(document,"touchstart",Tl),O(document,"touchend",Tl),O(document,"touchcancel",Tl));function Ul(a){this.j=a;this.C={};this.G=[];this.u=[]}
h=Ul.prototype;h.ba=function(a){return Re(a,V(this))};
function V(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
h.unregister=function(){Nk(this.G);this.G.length=0;Pl(this.u);this.u.length=0};
h.init=u;h.dispose=u;function Vl(a,b,c){a.G.push(S(b,c,a))}
function Wl(a,b,c,d){d=V(a,d);var e=v(c,a);b in Ql||(Ql[b]=new K);Ql[b].subscribe(d,e);a.C[c]=e}
function Xl(a,b,c,d){if(b in Ql){var e=Ql[b];tj(e,V(a,d),a.C[c]);0>=vj(e)&&(e.dispose(),delete Ql[b])}delete a.C[c]}
h.bb=function(a,b,c){var d=this.H(a,b);if(d&&(d=t(d))){var e=hb(arguments,2);gb(e,0,0,a);d.apply(null,e)}};
h.H=function(a,b){return N(a,b)};var Yl={Kf:"atp",Sf:"ska",Pf:"que",Of:"mus",Rf:"sus",Nf:"dsp",Qf:"seq"};var Zl=window,$l=Zl.ytcsi&&Zl.ytcsi.now?Zl.ytcsi.now:Zl.performance&&Zl.performance.timing&&Zl.performance.now&&Zl.performance.timing.navigationStart?function(){return Zl.performance.timing.navigationStart+Zl.performance.now()}:function(){return(new Date).getTime()};var am=ak("initial_gel_batch_timeout",1E3),bm=Math.pow(2,16)-1,cm=null,dm=0,em={log_event:"events",log_interaction:"interactions"},fm=Object.create(null);fm.log_event="GENERIC_EVENT_LOGGING";fm.log_interaction="INTERACTION_LOGGING";var gm=new Set(["log_event"]),hm={},im=0,jm=0,km=0,lm=!0,mm=t("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",mm);var nm=t("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",nm);
var om=t("ytLoggingTransportDispatchedStats_")||{};z("ytLoggingTransportDispatchedStats_",om);z("ytytLoggingTransportCapturedTime_",t("ytLoggingTransportCapturedTime_")||{});
function pm(){Q(im);Q(jm);jm=0;if(!ub(mm)){for(var a in mm){var b=hm[a];if(b&&b.isReady()){var c=void 0,d=a,e=b,f=em[d],g=om[d]||{};om[d]=g;b=Math.round($l());for(c in mm[d]){var k=yb,l=e.f||qm();l={client:{hl:l.be,gl:l.ae,clientName:l.Zd,clientVersion:l.innertubeContextClientVersion,configInfo:l.Yd}};var m=window.devicePixelRatio;m&&1!=m&&(l.client.screenDensityFloat=String(m));m=M("EXPERIMENTS_TOKEN","");""!==m&&(l.client.experimentsToken=m);var p=m=void 0,q=[],w=M("EXPERIMENTS_FORCED_FLAGS",{});
for(p in w)q.push({key:p,value:String(w[p])});p=M("EXPERIMENT_FLAGS",{});for(m in p)m.startsWith("force_")&&void 0===w[m]&&q.push({key:m,value:String(p[m])});m=q;0<m.length&&(l.request={internalExperimentFlags:m});M("DELEGATED_SESSION_ID")&&!Yj("pageid_as_header_web")&&(l.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});Yj("enable_device_forwarding_from_xhr_client")&&(l.client=Object.assign(l.client,rm()));k=k({context:l});k[f]=sm(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
k[f].length;if(l=nm[c])a:{q=k;w=c;if(l.videoId)m="VIDEO";else if(l.playlistId)m="PLAYLIST";else break a;q.credentialTransferTokenTargetId=l;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=[{token:w,scope:m}]}delete nm[c];l=k;l.requestTimeMs=b;Yj("unsplit_gel_payloads_in_logs")&&(l.unsplitGelPayloadsInLogs=!0);if(m=M("EVENT_ID",void 0))q=M("BATCH_CLIENT_COUNTER",void 0)||0,!q&&Yj("web_client_counter_random_seed")&&(q=Math.floor(Math.random()*bm/2)),
q++,q>bm&&(q=1),Tj("BATCH_CLIENT_COUNTER",q),m={serializedEventId:m,clientCounter:q},l.serializedClientEventId=m,cm&&dm&&Yj("log_gel_rtt_web")&&(l.previousBatchInfo={serializedClientEventId:cm,roundtripMs:dm}),cm=m,dm=0;tm(e,d,k,{retry:gm.has(d),onSuccess:x(um,$l())})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?((c.averageTimeBetweenDispatchesMs||0)*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete mm[a];lm=!1}}ub(mm)||vm()}}
function vm(){Yj("web_gel_timeout_cap")&&!jm&&(jm=P(pm,6E4));Q(im);var a=M("LOGGING_BATCH_TIMEOUT",ak("web_gel_debounce_ms",1E4));Yj("shorten_initial_gel_batch_timeout")&&lm&&(a=am);im=P(pm,a)}
function sm(a,b){b=void 0===b?"":b;mm[a]=mm[a]||{};mm[a][b]=mm[a][b]||[];return mm[a][b]}
function um(a){dm=Math.round($l()-a)}
;var wm=t("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",wm);
function xm(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||$l());e[a]=b;a=String;d.timestamp?b=-1:(b=t("_lact",window),b=null==b?-1:Math.max(y()-b,0));e.context={lastActivityMs:a(b)};Yj("log_sequence_info_on_gel_web")&&d.dd&&(a=e.context,b=d.dd,wm[b]=b in wm?wm[b]+1:0,a.sequence={index:wm[b],groupKey:b},d.fg&&delete wm[d.dd]);(d=d.eg)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),nm[d.token]=a,d=sm("log_event",d.token)):d=sm("log_event");
d.push(e);c&&(hm.log_event=new c);c=ak("web_logging_max_batch")||100;e=$l();d.length>=c?pm():10<=e-km&&(vm(),km=e)}
;function rm(){for(var a={},b=ka(Object.entries(Tk(M("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=ka(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function ym(){return"INNERTUBE_API_KEY"in Sj&&"INNERTUBE_API_VERSION"in Sj}
function qm(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),Yd:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),be:M("INNERTUBE_CONTEXT_HL",void 0),ae:M("INNERTUBE_CONTEXT_GL",void 0),ce:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",de:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function zm(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ag||M("AUTHORIZATION"))||(a?b="Bearer "+t("gapi.auth.getToken")().Xf:b=Gf([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),Yj("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
function Am(a){a=Object.assign({},a);delete a.Authorization;var b=Gf();if(b){var c=new Vg;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ga(b);void 0===c&&(c=0);if(!Qd){Qd={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Pd[f]=g;for(var k=0;k<g.length;k++){var l=g[k];void 0===Qd[l]&&(Qd[l]=k)}}}c=Pd[c];d=[];for(e=0;e<b.length;e+=3){var m=b[e],p=(f=e+1<b.length)?
b[e+1]:0;l=(g=e+2<b.length)?b[e+2]:0;k=m>>2;m=(m&3)<<4|p>>4;p=(p&15)<<2|l>>6;l&=63;g||(l=64,f||(p=64));d.push(c[k],c[m],c[p]||"",c[l]||"")}a.hash=d.join("")}return a}
;function Bm(){var a;(a=Qj("yt.innertube"))||(a=new Kj("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Aj(a):null;this.g=document.domain||window.location.hostname}
Bm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,y()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(uh(b))}catch(f){return}else e=escape(b);bk(a,e,c,"/",this.g)};
Bm.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Vd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bm.prototype.remove=function(a){this.f&&this.f.remove(a);ck(a,"/",this.g)};var Cm=new Bm;function Dm(a,b,c,d){if(d)return null;d=Cm.get("nextId",!0)||1;var e=Cm.get("requests",!0)||{};e[d]={method:a,request:b,authState:Am(c),requestTime:Math.round($l())};Cm.set("nextId",d+1,86400,!0);Cm.set("requests",e,86400,!0);return d}
function Em(a){var b=Cm.get("requests",!0)||{};delete b[a];Cm.set("requests",b,86400,!0)}
function Fm(a){var b=Cm.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round($l())-d.requestTime)){var e=d.authState,f=Am(zm(!1));wb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round($l())),tm(a,d.method,e,{}));delete b[c]}}Cm.set("requests",b,86400,!0)}}
;function Gm(a){var b=this;this.f=null;a?this.f=a:ym()&&(this.f=qm());Hl(function(){Fm(b)},0,5E3)}
Gm.prototype.isReady=function(){!this.f&&ym()&&(this.f=qm());return!!this.f};
function tm(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&vk(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ja:c,Zc:"JSON",Ka:function(){d.Ka()},
Pc:d.Ka,onSuccess:function(w,r){if(d.onSuccess)d.onSuccess(r)},
Oc:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,r){if(d.onError)d.onError(r)},
kg:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.ce;g&&(f=g);g=a.f.de||!1;var k=zm(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=Uk(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),m;if(d.retry&&Yj("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Dm(b,c,k,g))){var p=e.onSuccess,q=e.Oc;e.onSuccess=function(w,r){Em(m);p(w,r)};
c.Oc=function(w,r){Em(m);q(w,r)}}try{Yj("use_fetch_for_op_xhr")?hl(l,e):(e.method="POST",e.ja||(e.ja={}),kl(l,e))}catch(w){if("InvalidAccessError"==w)m&&(Em(m),m=0),vk(Error("An extension is blocking network request."));
else throw w;}m&&Hl(function(){Fm(a)},0,5E3)}
;var Hm=y().toString();
function Im(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=y();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Hm)for(a=1,b=0;b<Hm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Hm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Jm=t("ytLoggingDocDocumentNonce_")||Im();z("ytLoggingDocDocumentNonce_",Jm);function Km(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Lm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return M(Lm(void 0===a?0:a),void 0)});
function Mm(){var a=M("csn-to-ctt-auth-info");a||(a={},Tj("csn-to-ctt-auth-info",a));return a}
function Nm(a){a=void 0===a?0:a;var b=M(Km(a));if(!b&&!M("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Yj("kevlar_client_side_screens")||Yj("c3_client_side_screens")?b="UNDEFINED_CSN":b=M("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Nm);function Om(a,b,c){var d=Mm();(c=Nm(c))&&delete d[c];b&&(d[a]=b)}
z("yt_logging_screen.getCttAuthInfo",function(a){return Mm()[a]});
z("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==M(Km(c))||b!==M(Lm(c)))if(Om(a,d,c),Tj(Km(c),a),Tj(Lm(c),b),0==c||Yj("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&xm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Jm,clientScreenNonce:a},Gm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function Pm(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=Sc(a,b)+c;a=a instanceof Wb?a:dc(a);d.href=Zb(a)}
function Qm(a){(window.ytspf||{}).enabled?spf.navigate(a):Pm(a)}
;function Rm(){Ul.call(this,"button");this.f=null;this.h=[];this.g={}}
A(Rm,Ul);Da(Rm);h=Rm.prototype;h.register=function(){Wl(this,"click",this.jc);Wl(this,"keydown",this.Ac);Wl(this,"keypress",this.Bc);Vl(this,"page-scroll",this.Rd)};
h.unregister=function(){Xl(this,"click",this.jc);Xl(this,"keydown",this.Ac);Xl(this,"keypress",this.Bc);Sm(this);this.g={};Rm.J.unregister.call(this)};
h.jc=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.Ac=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Tm(this,a))){var d=function(g){var k="";g.tagName&&(k=g.tagName.toLowerCase());return"ul"==k||"table"==k},e;
d(b)?e=b:e=Ge(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ie;else"table"==e&&(f=this.he);f&&Um(this,a,b,c,v(f,this))}}};
h.Rd=function(){var a=this.g;if(0!=ob(a))for(var b in a){var c=a[b],d=Re(c.activeButtonNode||c.parentNode,V(this));if(void 0==d||void 0==c)break;Vm(this,d,c,!0)}};
function Um(a,b,c,d,e){var f=yl(c),g=9==d.keyCode;g||32==d.keyCode||13==d.keyCode?(d=Wm(a,c))?(b=ze(d),"a"==b.tagName.toLowerCase()?Pm(b.href):Fk(b)):g&&Xm(a,b):f?27==d.keyCode?(Wm(a,c),Xm(a,b)):e(b,c,d):(a=G(b,V(a,"reverse"))?38:40,d.keyCode==a&&(Fk(b),d.preventDefault()))}
h.Bc=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Tm(this,a),yl(a)&&c.preventDefault())};
function Wm(a,b){var c=V(a,"menu-item-highlight"),d=F(c,b);d&&I(d,c);return d}
function Ym(a,b,c){H(c,V(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=V(a,"item-id-"+Ja(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.he=function(a,b,c){var d=Wm(this,b),e=nk("table",null,b);b=he(document,"td",null,e);d=Zm(d,b,he(document,"td",null,nk("tr",null,e)).length,c);-1!=d&&(Ym(this,a,b[d]),c.preventDefault())};
h.ie=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Wm(this,b);b=Sa(he(document,"li",null,b),yl);Ym(this,a,b[Zm(d,b,1,c)]);c.preventDefault()}};
function Zm(a,b,c,d){var e=b.length;a=Qa(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function $m(a,b){var c=b.iframeMask;c||(c=qe(document,"IFRAME"),c.src='javascript:""',Zg(c,V(a,"menu-mask")),Bl(c),b.iframeMask=c);return c}
function Vm(a,b,c,d){var e=Re(b,V(a,"group")),f=!!a.H(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=tf(b);if(G(b,V(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(p){}}G(b,"flip")&&(G(b,V(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.H(b,"button-has-sibling-menu")?l=lf(e):a.H(b,"button-menu-root-container")&&(l=an(a,b));D&&!Ed("8")&&(l=null);if(l){var m=tf(l);m=new cf(-m.top,m.left,m.top,-m.left)}l=new $d(0,1);G(b,V(a,"center-menu"))&&(l.x-=Math.round((rf(c).width-rf(b).width)/
2));d&&(l.y+=me(document).y);if(a=$m(a,b))b=rf(c),a.style.width=b.width+"px",a.style.height=b.height+"px",qj(e,f,a,g,l,m,197),d&&ef(a,"position","fixed");qj(e,f,c,g,l,m,197)}
function an(a,b){if(a.H(b,"button-menu-root-container")){var c=a.H(b,"button-menu-root-container");return Re(b,c)}return document.body}
h.pd=function(a){if(a){var b=Tm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.H(a,"button-has-sibling-menu")?c=a.parentNode:c=an(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=$m(this,a);d&&c.appendChild(d);(c=!!this.H(a,"button-menu-fixed"))&&(this.g[jk(a).toString()]=b);Vm(this,a,b,c);Ok("yt-uix-button-menu-before-show",a,b);Al(b);d&&Al(d);
this.bb(a,"button-menu-action",!0);H(a,V(this,"active"));b=v(this.od,this,a,!1);d=v(this.od,this,a,!0);c=v(this.kf,this,a,void 0);this.f&&Tm(this,this.f)==Tm(this,a)||Sm(this);U("yt-uix-button-menu-show",a);Ck(this.h);this.h=[O(document,"click",d),O(document,"contextmenu",b),O(window,"resize",c)];this.f=a}}};
function Xm(a,b){if(b){var c=Tm(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Bl(c);a.bb(b,"button-menu-action",!1);var d=$m(a,b),e=jk(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&(Bl(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=Re(b,V(a,"group"));
var f=[V(a,"active")];e&&f.push(V(a,"group-active"));ah(b,f);U("yt-uix-button-menu-hide",b);Ck(a.h);a.h.length=0}}
h.kf=function(a,b){var c=Tm(this,a);if(c){b&&(b instanceof lc?wc(c,b):Fe(c,b));var d=!!this.H(a,"button-menu-fixed");Vm(this,a,c,d)}};
h.od=function(a,b,c){c=Dk(c);var d=Re(c,V(this));if(d){d=Tm(this,d);var e=Tm(this,a);if(d==e)return}d=Re(c,V(this,"menu"));e=d==Tm(this,a);var f=G(c,V(this,"menu-item")),g=G(c,V(this,"menu-close"));if(!d||e&&(f||g))Xm(this,a),d&&b&&this.H(a,"button-menu-indicate-selected")&&((a=F(V(this,"content"),a))&&Fe(a,Ne(c)),bn(this,d,c))};
function bn(a,b,c){var d=V(a,"menu-item-selected");B(ge(d,b),function(e){I(e,d)});
H(c.parentNode,d)}
function Tm(a,b){if(!b.widgetMenu){var c=a.H(b,"button-menu-id");c=c&&E(c);var d=V(a,"menu");c?$g(c,[d,V(a,"menu-external")]):c=F(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return G(a,V(this,"toggled"))};
h.toggle=function(a){if(this.H(a,"button-toggle")){var b=Re(a,V(this,"group")),c=V(this,"toggled"),d=G(a,c);if(b&&this.H(b,"button-toggle-group")){var e=this.H(b,"button-toggle-group");B(ge(V(this),b),function(f){f!=a||"optional"==e&&d?(I(f,c),f.removeAttribute("aria-pressed")):(H(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),dh(a,c)}};
h.click=function(a){if(Tm(this,a)){var b=Tm(this,a);if(b){var c=Re(b.activeButtonNode||b.parentNode,V(this));c&&c!=a?(Xm(this,c),P(v(this.pd,this,a),1)):yl(b)?Xm(this,a):this.pd(a)}a.focus()}this.bb(a,"button-action")};
function Sm(a){a.f&&Xm(a,a.f)}
;function cn(a){Ul.call(this,a);this.h=null}
A(cn,Ul);h=cn.prototype;h.ba=function(a){var b=Ul.prototype.ba.call(this,a);return b?b:a};
h.register=function(){Vl(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){dn(this);cn.J.dispose.call(this)};
h.H=function(a,b){var c=cn.J.H.call(this,a,b);return c?c:(c=cn.J.H.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.ba(a);if(b){H(b,V(this,"active"));var c=en(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;fn(this,a,c);var d=V(this,"card-visible"),e=this.H(a,"card-delegate-show")&&this.H(b,"card-action");this.bb(b,"card-action",a);this.h=a;Bl(c);P(v(function(){e||(Al(c),U("yt-uix-card-show",b,a,c));gn(c);H(c,d);U("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function en(a,b,c){var d=c||b,e=V(a,"card");c=hn(a,d);var f=E(V(a,"card")+jk(d));if(f)return a=F(V(a,"card-body"),f),Ee(a,c)||(we(c),a.appendChild(c)),f;f=document.createElement("div");f.id=V(a,"card")+jk(d);Zg(f,e);(d=a.H(d,"card-class"))&&$g(f,d.split(/\s+/));d=document.createElement("div");d.className=V(a,"card-border");b=a.H(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
V(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;we(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function fn(a,b,c){var d=a.H(b,"orientation")||"horizontal",e=F(V(a,"anchor"),b)||b,f=a.H(b,"position"),g=!!a.H(b,"force-position"),k=a.H(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f;if(m&&l){var p=13;var q=8}else m&&!l?(p=12,q=9):!m&&l?(p=9,q=12):(p=8,q=13);var w=uf(document.body);f=uf(b);w!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var r=new $d(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new $d(b.offsetWidth+6,-12);var R=rf(c);
f=Math.min(f,(d?R.height:R.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);R=null;g||(R=10);b=V(a,"card-flip");a=V(a,"card-reverse");bh(c,b,m);bh(c,a,l);R=qj(e,p,c,q,r,null,R);!g&&R&&(R&48&&(m=!m,p^=4,q^=4),R&192&&(l=!l,p^=1,q^=1),bh(c,b,m),bh(c,a,l),qj(e,p,c,q,r));k&&(e=parseInt(c.style.top,10),g=me(document).y,ef(c,"position","fixed"),ef(c,"top",e-g+"px"));w&&(c.style.right="",e=tf(c),e.left=e.left||parseInt(c.style.left,10),g=ke(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=F("yt-uix-card-body-arrow",c);g=F("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!w&&m||w&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=F("yt-uix-card-arrow",c);m=F("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?rf(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.ba(a)){var b=E(V(this,"card")+jk(a));b&&(I(a,V(this,"active")),I(b,V(this,"card-visible")),Bl(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(we(b.cardMask),b.cardMask=null))}};
function dn(a){a.h&&a.hide(a.h)}
h.hd=function(a,b){var c=this.ba(a);if(c){if(b){var d=hn(this,c);if(!d)return;b instanceof lc?wc(d,b):Fe(d,b)}G(c,V(this,"active"))&&(c=en(this,a,c),fn(this,a,c),Al(c),gn(c))}};
h.isActive=function(a){return(a=this.ba(a))?G(a,V(this,"active")):!1};
function hn(a,b){var c=b.cardContentNode;if(!c){var d=V(a,"content"),e=V(a,"card-content");(c=(c=a.H(b,"card-id"))?E(c):F(d,b))||(c=document.createElement("div"));var f=c;I(f,d);H(f,e);b.cardContentNode=c}return c}
function gn(a){var b=a.cardMask;b||(b=qe(document,"IFRAME"),b.src='javascript:""',$g(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function jn(){Ul.call(this,"kbd-nav")}
var kn;A(jn,Ul);Da(jn);h=jn.prototype;h.register=function(){Wl(this,"keydown",this.xc);Vl(this,"yt-uix-kbd-nav-move-in",this.Kc);Vl(this,"yt-uix-kbd-nav-move-in-to",this.ke);Vl(this,"yt-uix-kbd-move-next",this.Lc);Vl(this,"yt-uix-kbd-nav-move-to",this.tb)};
h.unregister=function(){Xl(this,"keydown",this.xc);Ck(kn)};
h.xc=function(a,b,c){var d=c.keyCode;if(a=Re(a,V(this)))switch(d){case 13:case 32:this.Kc(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=fh(a,"kbdNavMoveOut");!c;){c=Re(a.parentElement,V(this));if(!c)break a;c=fh(c,"kbdNavMoveOut")}c=E(c);this.tb(c);U("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&G(a,V(this,"list")))switch(d){case 40:this.Lc(b,a);break;case 38:d=document.activeElement==a,a=ln(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),mn(this,a[b]))}c.preventDefault()}};
h.Kc=function(a){var b=fh(a,"kbdNavMoveIn");b=E(b);nn(this,a,b);this.tb(b)};
h.ke=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}nn(this,d,a);this.tb(a)};
h.tb=function(a){if(a)if(Ke(a))a.focus();else{var b=Ge(a,function(c){return Be(c)?Ke(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function nn(a,b,c){if(b&&c)if(H(c,V(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,eh&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.Lc=function(a,b){var c=document.activeElement==b,d=ln(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),mn(this,d[c]))};
function mn(a,b){if(b){var c=Pe(b,"LI");c&&(H(c,V(a,"highlight")),kn=O(b,"blur",v(function(d){I(d,V(this,"highlight"));Ck(kn)},a,c)))}}
function ln(a){if("UL"!=a.tagName.toUpperCase())return[];a=Sa(ye(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Sa(Ta(a,function(b){return yl(b)?Ge(b,function(c){return Be(c)?Ke(c):!1}):!1}),function(b){return!!b})}
;function on(){Ul.call(this,"menu");this.g=this.f=null;this.h={};this.l={};this.i=null}
A(on,Ul);Da(on);function pn(a){var b=on.getInstance();if(G(a,V(b)))return a;var c=b.ba(a);return c?c:Re(a,V(b,"content"))==b.f?b.g:null}
h=on.prototype;h.register=function(){Wl(this,"click",this.wc);Wl(this,"mouseenter",this.Od);Vl(this,"page-scroll",this.wf);Vl(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.ba(a);qn(this,a)});
this.i=new K};
h.unregister=function(){Xl(this,"click",this.wc);this.g=this.f=null;Ck(jb(qb(this.h)));this.h={};mb(this.l,function(a){we(a)},this);
this.l={};bf(this.i);this.i=null;on.J.unregister.call(this)};
h.wc=function(a,b,c){a&&(b=rn(this,a),!b.disabled&&mk(c.target,b)&&sn(this,a))};
h.Od=function(a,b,c){a&&G(a,V(this,"hover"))&&mk(c.target,rn(this,a))&&sn(this,a,!0)};
h.wf=function(){this.f&&this.g&&tn(this,this.g,this.f)};
function tn(a,b,c){var d=un(a,b);if(d){var e=rf(c);if(e instanceof be){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=qf(e,!0);d.style.height=qf(f,!0)}c==a.f&&(e=9,f=8,G(b,V(a,"reversed"))&&(e^=1,f^=1),G(b,V(a,"flipped"))&&(e^=4,f^=4),a=new $d(0,1),d&&qj(b,e,d,f,a,null,197),qj(b,e,c,f,a,null,197))}
function sn(a,b,c){vn(a,b)&&!c?qn(a,b):(wn(a,b),!a.f||mk(b,a.f)?a.qd(b):sj(a.i,v(a.qd,a,b)))}
h.qd=function(a){if(a){var b=xn(this,a);if(b){Ok("yt-uix-menu-before-show",a,b);this.f?mk(a,this.f)||qn(this,this.g):(this.g=a,this.f=b,G(a,V(this,"sibling-content"))||(we(b),document.body.appendChild(b)),b.style.minWidth=rn(this,a).offsetWidth-2+"px");var c=un(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);I(b,V(this,"content-hidden"));tn(this,a,b);$g(rn(this,a),[V(this,"trigger-selected"),"yt-uix-button-toggled"]);U("yt-uix-menu-show",a);yn(b);zn(this,a);U("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.xf,this,a),e=v(this.fe,this,a);c=Ja(a).toString();this.h[c]=[O(b,"click",e),O(document,"click",d)];G(a,V(this,"indicate-selected"))&&(d=v(this.ge,this,a),this.h[c].push(O(b,"click",d)));G(a,V(this,"hover"))&&(a=v(this.Pd,this,a),this.h[c].push(O(document,"mousemove",a)))}}};
h.Pd=function(a,b){var c=Dk(b);c&&(mk(c,rn(this,a))||An(this,c)||Bn(this,a))};
h.xf=function(a,b){var c=Dk(b);if(c){if(An(this,c)){var d=Re(c,V(this,"content")),e=Pe(c,"LI");e&&d&&Ee(d,e)&&Ok("yt-uix-menu-item-clicked",c);c=Re(c,V(this,"close-on-select"));if(!c)return;d=pn(c)}qn(this,d||a)}};
function wn(a,b){if(b){var c=Re(b,V(a,"content"));c&&B(ge(V(a),c),function(d){!mk(d,b)&&vn(this,d)&&Bn(this,d)},a)}}
function qn(a,b){if(b){var c=[];c.push(b);var d=xn(a,b);d&&(d=ge(V(a),d),d=eb(d),c=c.concat(d),B(c,function(e){vn(this,e)&&Bn(this,e)},a))}}
function Bn(a,b){if(b){var c=xn(a,b);ah(rn(a,b),[V(a,"trigger-selected"),"yt-uix-button-toggled"]);H(c,V(a,"content-hidden"));var d=xn(a,b);d&&ie(d,{"aria-expanded":"false"});(d=un(a,b))&&d.parentNode&&we(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.i&&a.i.Y("ROOT_MENU_REMOVED"));U("yt-uix-menu-hide",b);c=Ja(b).toString();Ck(a.h[c]);delete a.h[c]}}
h.fe=function(a,b){var c=Dk(b);c&&Cn(this,a,c)};
h.ge=function(a,b){var c=Dk(b);if(c){var d=rn(this,a);if(d&&(c=Pe(c,"LI")))if(c=Ne(c).trim(),d.hasChildNodes()){var e=Rm.getInstance();(d=F(V(e,"content"),d))&&Fe(d,c)}else Fe(d,c)}};
function zn(a,b){var c=xn(a,b);if(c){B(c.children,function(e){"LI"==e.tagName&&ie(e,{role:"menuitem"})});
ie(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ja(c),c.id=d);(c=rn(a,b))&&ie(c,{"aria-controls":d})}}
function Cn(a,b,c){var d=xn(a,b);d&&G(b,V(a,"checked"))&&(a=Pe(c,"LI"))&&(a=F("yt-ui-menu-item-checked-hid",a))&&(B(ge("yt-ui-menu-item-checked",d),function(e){ch(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),ch(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function vn(a,b){var c=xn(a,b);return c?!G(c,V(a,"content-hidden")):!1}
function yn(a){B(he(document,"UL",null,a),function(b){b.tabIndex=0;var c=jn.getInstance();$g(b,[V(c),V(c,"list")])})}
function xn(a,b){var c=N(b,"menu-content-id");return c&&(c=E(c))?($g(c,[V(a,"content"),V(a,"content-external")]),c):b==a.g?a.f:F(V(a,"content"),b)}
function un(a,b){var c=Ja(b).toString(),d=a.l[c];if(!d){d=qe(document,"IFRAME");d.src='javascript:""';var e=[V(a,"mask")];B(Yg(b),function(f){e.push(f+"-mask")});
$g(d,e);a.l[c]=d}return d||null}
function rn(a,b){return F(V(a,"trigger"),b)}
function An(a,b){return mk(b,a.f)||mk(b,a.g)}
;function Dn(){cn.call(this,"clickcard");this.f={};this.g={}}
A(Dn,cn);Da(Dn);h=Dn.prototype;h.register=function(){Dn.J.register.call(this);Wl(this,"click",this.lc,"target");Wl(this,"click",this.kc,"close")};
h.unregister=function(){Dn.J.unregister.call(this);Xl(this,"click",this.lc,"target");Xl(this,"click",this.kc,"close");for(var a in this.f)Ck(this.f[a]);this.f={};for(a in this.g)Ck(this.g[a]);this.g={}};
h.lc=function(a,b,c){c.preventDefault();b=Pe(c.target,"button");if(!b||!b.disabled){b=this.H(a,"card-target");var d;b?d=fe(document,b):d=a;a=d;d=this.ba(a);this.H(d,"disabled")||(G(d,V(this,"active"))?(this.hide(a),I(d,V(this,"active"))):(this.show(a),H(d,V(this,"active"))))}};
h.show=function(a){Dn.J.show.call(this,a);var b=this.ba(a),c=Ja(a).toString();if(!N(b,"click-outside-persists")){if(this.f[c])return;b=O(document,"click",v(this.mc,this,a));var d=O(window,"blur",v(this.mc,this,a));this.f[c]=[b,d]}a=O(window,"resize",v(this.hd,this,a,void 0));this.g[c]=a};
h.hide=function(a){Dn.J.hide.call(this,a);a=Ja(a).toString();var b=this.f[a];b&&(Ck(b),this.f[a]=null);if(b=this.g[a])Ck(b),delete this.g[a]};
h.mc=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=Re(b.target,c)||Re(pn(b.target),c));(d=d||Re(document.activeElement,c)||(document.activeElement?Re(pn(document.activeElement),c):null))||this.hide(a)};
h.kc=function(a){(a=Re(a,V(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function En(){cn.call(this,"hovercard")}
A(En,cn);Da(En);h=En.prototype;h.register=function(){Wl(this,"mouseenter",this.Fc,"target");Wl(this,"mouseleave",this.Hc,"target");Wl(this,"mouseenter",this.Gc,"card");Wl(this,"mouseleave",this.Ic,"card")};
h.unregister=function(){Xl(this,"mouseenter",this.Fc,"target");Xl(this,"mouseleave",this.Hc,"target");Xl(this,"mouseenter",this.Gc,"card");Xl(this,"mouseleave",this.Ic,"card")};
h.Fc=function(a){if(Fn!=a){Fn&&(this.hide(Fn),Fn=null);var b=v(this.show,this,a),c=parseInt(this.H(a,"delay-show"),10);b=P(b,-1<c?c:200);ek(a,"card-timer",b.toString());Fn=a;a.alt&&(ek(a,"card-alt",a.alt),a.alt="");a.title&&(ek(a,"card-title",a.title),a.title="")}};
h.Hc=function(a){var b=parseInt(this.H(a,"card-timer"),10);Q(b);this.ba(a).isCardHidable=!0;b=parseInt(this.H(a,"delay-hide"),10);b=-1<b?b:200;P(v(this.Vd,this,a),b);if(b=this.H(a,"card-alt"))a.alt=b;if(b=this.H(a,"card-title"))a.title=b};
h.Vd=function(a){this.ba(a).isCardHidable&&(this.hide(a),Fn=null)};
h.Gc=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.Ic=function(a){a&&this.hide(a.cardTargetNode)};
var Fn=null;function Gn(a,b,c,d,e,f){this.f=a;this.C=null;this.h=F("yt-dialog-fg",this.f)||this.f;if(a=F("yt-dialog-title",this.h)){var g="yt-dialog-title-"+Ja(this.h);a.setAttribute("id",g);this.h.setAttribute("aria-labelledby",g)}this.h.setAttribute("tabindex","-1");this.A=F("yt-dialog-focus-trap",this.f);this.F=!1;this.i=new K;this.G=[];this.G.push(Ek(this.f,"click",v(this.te,this),"yt-dialog-dismiss"));this.G.push(O(this.A,"focus",v(this.zd,this),!0));Hn(this);this.I=b;this.N=c;this.L=d;this.u=e;this.O=f;
this.l=this.j=null}
var In={LOADING:"loading",Lf:"content",Wf:"working"};function Hn(a){a=F("yt-dialog-fg-content",a.f);var b=[];mb(In,function(c){b.push("yt-dialog-show-"+c)});
ah(a,b);H(a,"yt-dialog-show-content")}
h=Gn.prototype;
h.show=function(){if(!this.K()){this.C=document.activeElement;if(!this.L){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=qe(document,"div"),this.g.id="yt-dialog-bg",Zg(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=ke(a).height,le(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";Al(this.g)}this.yc();c=Jn(this);Kn(c);this.j=O(document,"keydown",v(this.ee,this));this.Xb(this.f);this.N&&(this.l=O(document,"click",v(this.Ue,this)));Al(this.f);this.h.setAttribute("tabindex","0");Ln(this);this.u||H(document.body,"yt-dialog-active");Sm(Rm.getInstance());dn(Dn.getInstance());dn(En.getInstance());U("yt-ui-dialog-show-complete",this)}};
function Mn(){return Va(ge("yt-dialog"),function(a){return yl(a)})}
h.yc=function(){if(!this.O){var a=this.f;bh(document.body,"hide-players",!0);a&&bh(a,"preserve-players",!0)}};
function Jn(a){var b=he(document,"iframe",null,a.f);B(b,function(c){var d=N(c,"onload");d&&(d=t(d))&&O(c,"load",d);if(d=N(c,"src"))c.src=d},a);
return eb(b)}
function Kn(a){B(document.getElementsByTagName("iframe"),function(b){-1==Qa(a,b)&&H(b,"iframe-hid")})}
function Nn(){B(ge("iframe-hid"),function(a){I(a,"iframe-hid")})}
h.te=function(a){a=a.currentTarget;a.disabled||(a=N(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.K()){this.i.Y("pre-all");this.i.Y("pre-"+a);Bl(this.f);dn(Dn.getInstance());dn(En.getInstance());this.h.setAttribute("tabindex","-1");Mn()||(Bl(this.g),this.u||I(document.body,"yt-dialog-active"),qk(),Nn());this.j&&(Ck(this.j),this.j=null);this.l&&(Ck(this.l),this.l=null);var b=this.f;if(b){var c=N(b,"player-ready-pubsub-key");c&&(Nk(c),gk(b,"player-ready-pubsub-key"))}this.i.Y("post-all");U("yt-ui-dialog-hide-complete",this);"cancel"==a&&U("yt-ui-dialog-cancelled",
this);this.i&&this.i.Y("post-"+a);this.C&&this.C.focus()}};
h.setTitle=function(a){Fe(F("yt-dialog-title",this.f),a)};
h.ee=function(a){P(v(function(){this.I||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&G(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Ue=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.Xb=function(a){var b=S("player-added",this.yc,this);ek(a,"player-ready-pubsub-key",b)};
h.K=function(){return this.F};
h.dispose=function(){yl(this.f)&&this.dismiss("dispose");Ck(this.G);this.G.length=0;P(v(function(){this.C=null},this),0);
this.A=this.h=null;this.i.dispose();this.i=null;this.F=!0};
h.zd=function(a){a.stopPropagation();Ln(this)};
function Ln(a){P(v(function(){this.h&&this.h.focus()},a),0)}
z("yt.ui.Dialog",Gn);function On(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||xb(b);this.assets=a.assets||{};this.attrs=a.attrs||xb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
On.prototype.clone=function(){var a=new On,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ea(c)?a[b]=xb(c):a[b]=c}return a};var Pn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Rn(a,b){var c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Pn,""),c=c.replace(Qn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Sn(a,b,c)}
function Sn(a,b,c){c=void 0===c?null:c;var d=Tn(a),e=document.getElementById(d),f=e&&N(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=S(d,b),b=""+Ja(b),Un[b]=f),g||(e=Vn(a,d,function(){N(e,"loaded")||(ek(e,"loaded","true"),U(d),P(x(Pk,d),0))},c)))}
function Vn(a,b,c,d){d=void 0===d?null:d;var e=qe(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ac(e,Ue(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Wn(a,b){if(a&&b){var c=""+Ja(b);(c=Un[c])&&Nk(c)}}
function Tn(a){var b=document.createElement("a");xc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Gc(a)}
var Un={};function Xn(a,b,c){c=void 0===c?{}:c;var d=Gm;M("ytLoggingEventsDefaultDisabled",!1)&&Gm==Gm&&(d=null);xm(a,b,d,c)}
;function Yn(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:la(ka(c)))}
sa(Yn,Error);function Zn(a){var b=t("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,!1,void 0):(b=Uj(),b.push([a,"ERROR",void 0,void 0,!1,void 0]),Tj("ERRORS",b))}
function $n(a){var b=t("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,!1,void 0):(b=Uj(),b.push([a,"WARNING",void 0,void 0,!1,void 0]),Tj("ERRORS",b))}
;function ao(){$e.call(this);this.f=[]}
sa(ao,$e);ao.prototype.B=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.cg)}$e.prototype.B.call(this)};var bo=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function co(a,b){a=a||"";if(window.spf){var c=a.match(bo);spf.style.load(a,c?c[1]:"",b);return null}return eo(a,b)}
function fo(a,b,c){if(a=M(a,void 0)){var d=x(co,a,b);if(c)var e=S(c,function(){Nk(e);d()});
else d()}}
function eo(a,b){var c=go(a),d=document.getElementById(c),e=d&&N(d,"loaded"),f=d&&!e;if(e)return b&&b(),d;b&&(S(c,b),Ja(b));return f?d:d=ho(a,c,function(){N(d,"loaded")||(ek(d,"loaded","true"),U(c),P(x(Pk,c),0))})}
function ho(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ue(a);d.rel="stylesheet";d.href=Kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function go(a){var b=qe(document,"A");xc(b,new Wb(Xb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Gc(a)}
;function io(a,b,c,d){$e.call(this);var e=this;this.l=this.na=a;this.ma=b;this.u=!1;this.api={};this.aa=this.I=null;this.F=new K;af(this,x(bf,this.F));this.i={};this.N=this.ga=this.g=this.Hb=this.f=null;this.L=!1;this.j=this.A=null;this.Ma={};this.rd=["onReady"];this.Za=null;this.Zb=NaN;this.O={};this.h=d;jo(this);this.pb("WATCH_LATER_VIDEO_ADDED",this.De.bind(this));this.pb("WATCH_LATER_VIDEO_REMOVED",this.Ee.bind(this));this.pb("onAdAnnounce",this.td.bind(this));this.sd=new ao(this);af(this,x(bf,
this.sd));this.S=0;c?this.S=P(function(){e.loadNewVideoConfig(c)},0):d&&(ko(this),lo(this))}
sa(io,$e);h=io.prototype;h.getId=function(){return this.ma};
h.loadNewVideoConfig=function(a){if(!this.K()){this.S&&(Q(this.S),this.S=0);a instanceof On||(a=new On(a));this.Hb=a;this.f=a.clone();ko(this);this.ga||(this.ga=mo(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=qf(Number(a)||a,!0);if(a=this.f.attrs.height)this.l.style.height=qf(Number(a)||a,!0);lo(this);this.u&&no(this)}};
function ko(a){var b;a.h?b=a.h.rootElementId:b=a.f.attrs.id;a.g=b||a.g;"video-player"==a.g&&(a.g=a.ma,a.f.attrs.id=a.ma);a.l.id==a.g&&(a.g+="-player",a.f.attrs.id=a.g)}
h.Cd=function(){return this.Hb};
function no(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function oo(a){var b=!0,c=po(a);c&&a.f&&(a=qo(a),b=N(c,"version")===a);return b&&!!t("yt.player.Application.create")}
function lo(a){if(!a.K()&&!a.L){var b=oo(a);if(b&&"html5"==(po(a)?"html5":null))a.N="html5",a.u||ro(a);else if(so(a),a.N="html5",b&&a.j)a.na.appendChild(a.j),ro(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.A=function(){c=!0;if(a.h)var d=a.h.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==Rk(d||"").player_bootstrap_method?t("yt.player.Application.createAlternate")||t("yt.player.Application.create"):t("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.na,e,a.h);
ro(a)};
a.L=!0;b?a.A():(Rn(qo(a),a.A),(b=a.h?a.h.cssUrl:a.f.assets.css)&&co(b),to(a)&&!c&&z("yt.player.Application.create",null))}}}
function po(a){var b=E(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function ro(a){if(!a.K()){var b=po(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.L=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||uo(a)):a.Zb=P(function(){ro(a)},50)}}
function uo(a){jo(a);a.u=!0;var b=po(a);b.addEventListener&&(a.I=vo(a,b,"addEventListener"));b.removeEventListener&&(a.aa=vo(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=vo(a,b,e))}for(var f in a.i)a.I(f,a.i[f]);no(a);a.ga&&a.ga(a.api);a.F.Y("onReady",a.api)}
function vo(a,b,c){var d=b[c];return function(){try{return a.Za=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.Za=e,vk(e))}}}
function jo(a){a.u=!1;if(a.aa)for(var b in a.i)a.aa(b,a.i[b]);for(var c in a.O)Q(parseInt(c,10));a.O={};a.I=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.pb.bind(a);a.api.removeEventListener=a.Ze.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Dd.bind(a);a.api.getPlayerType=a.Fd.bind(a);a.api.getCurrentVideoConfig=a.Cd.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.je.bind(a)}
h.je=function(){return this.u};
h.pb=function(a,b){var c=this,d=mo(this,b);if(d){if(!Za(this.rd,a)&&!this.i[a]){var e=wo(this,a);this.I&&this.I(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.u&&P(function(){d(c.api)},0)}};
h.Ze=function(a,b){if(!this.K()){var c=mo(this,b);c&&tj(this.F,a,c)}};
function mo(a,b){var c=b;if("string"==typeof b){if(a.Ma[b])return a.Ma[b];c=function(){var d=t(b);d&&d.apply(n,arguments)};
a.Ma[b]=c}return c?c:null}
function wo(a,b){var c="ytPlayer"+b+a.ma;a.i[b]=c;n[c]=function(d){var e=P(function(){if(!a.K()){a.F.Y(b,d);var f=a.O,g=String(e);g in f&&delete f[g]}},0);
vb(a.O,String(e))};
return c}
h.td=function(a){U("a11y-announce",a)};
h.De=function(a){U("WATCH_LATER_VIDEO_ADDED",a)};
h.Ee=function(a){U("WATCH_LATER_VIDEO_REMOVED",a)};
h.Fd=function(){return this.N||(po(this)?"html5":null)};
h.Dd=function(){return this.Za};
function so(a){a.cancel();jo(a);a.N=null;a.f&&(a.f.loaded=!1);var b=po(a);b&&(oo(a)||!to(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));ue(a.na)}
h.cancel=function(){this.A&&Wn(qo(this),this.A);Q(this.Zb);this.L=!1};
h.B=function(){so(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){uk(b)}this.Ma=null;for(var a in this.i)n[this.i[a]]=null;this.Hb=this.f=this.api=null;delete this.na;delete this.l;$e.prototype.B.call(this)};
function to(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function qo(a){return a.h?a.h.jsUrl:a.f.assets.js}
;var xo={},yo="player_uid_"+(1E9*Math.random()>>>0);function zo(){var a=document.getElementById("player-api");if(!a)return null;var b=yo+"_"+Ja(a),c=xo[b];c||(c=new io(a,b),xo[b]=c);return c.api}
;function Ao(){bh(E("page-container"),"remote-connected",!!W)}
;var Bo=!1;function Co(a){bh(E("player-mole-container"),"watch-mole",a);a=E("player-mole-container");var b=E("player");Bo=!b||G(b,"off-screen")||!a||G(a,"watch-mole");(a=zo())&&a.isReady()&&a.setMinimized(Bo)}
;function Do(a,b){Dl.call(this,1,arguments)}
sa(Do,Dl);function Eo(a,b){Dl.call(this,1,arguments)}
sa(Eo,Dl);var Fo=new El("aft-recorded",Do),Go=new El("timing-sent",Eo);var Ho=window;function Io(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Jo=Ho.performance||Ho.mozPerformance||Ho.msPerformance||Ho.webkitPerformance||new Io;var Ko=!1;function Lo(a){var b=Mo(a);if(b.aft)return b.aft;a=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function No(a){var b;(b=t("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Oo(a){a=No(a);a.info||(a.info={});return a.info}
function Mo(a){a=No(a);a.tick||(a.tick={});return a.tick}
function Po(a){var b=No(a).nonce;b||(b=Im(),No(a).nonce=b);return b}
function Qo(a){var b=Mo(a||""),c=Lo(a);c&&!Ko&&(Ml(Fo,new Do(Math.round(c-b._start),a)),Ko=!0)}
;function Ro(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!So(a)||c.some(function(e){return!So(e)}))throw Error("Only objects may be merged.");
c=ka(c);for(d=c.next();!d.done;d=c.next())To(a,d.value);return a}
function To(a,b){for(var c in b)if(So(b[c])){if(c in a&&!So(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});To(a[c],b[c])}else if(Uo(b[c])){if(c in a&&!Uo(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Vo(a[c],b[c])}else a[c]=b[c];return a}
function Vo(a,b){for(var c=ka(b),d=c.next();!d.done;d=c.next())d=d.value,So(d)?a.push(To({},d)):Uo(d)?a.push(Vo([],d)):a.push(d);return a}
function So(a){return"object"===typeof a&&!Array.isArray(a)}
function Uo(a){return"object"===typeof a&&Array.isArray(a)}
;function Wo(){var a=t("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Xo(a){a=a||"";var b=t("ytcsi.reference");b||(Wo(),b=t("ytcsi.reference"));if(b[a])return b[a];var c=Wo(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d}
;var Yo=t("ytLoggingLatencyUsageStats_")||{};z("ytLoggingLatencyUsageStats_",Yo);function Zo(){this.f=0}
function $o(){Zo.instance||(Zo.instance=new Zo);return Zo.instance}
Zo.prototype.tick=function(a,b,c){ap(this,"tick_"+a+"_"+b)||Xn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Zo.prototype.info=function(a,b){var c=Object.keys(a).join("");ap(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,Xn("latencyActionInfo",a))};
function ap(a,b){Yo[b]=Yo[b]||{count:0};var c=Yo[b];c.count++;c.time=$l();a.f||(a.f=Hl(function(){var d=$l(),e;for(e in Yo)Yo[e]&&6E4<d-Yo[e].time&&delete Yo[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Yn("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?$n(c):Zn(c)),!0):!1}
;var X={},bp=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.cseg="creatorInfo.creatorSegment",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="getHomeRequestId",X.GetSearch_rid="getSearchRequestId",X.GetPlayer_rid="getPlayerRequestId",X.GetWatchNext_rid=
"getWatchNextRequestId",X.GetBrowse_rid="getBrowseRequestId",X.GetLibrary_rid="getLibraryRequestId",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.prev_browse_id="kabukiInfo.prevBrowseId",X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",
X.nrsu="navigationRequestedSameUrl",X.ncnp="webInfo.nonPreloadedNodeCount",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.scrh="screenHeight",X.scrw=
"screenWidth",X.st="serverTimeMs",X.aq="tvInfo.appQuality",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis=
"isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="mwebInfo.getSettingsRequestId",X.GetTrending_rid="mwebInfo.getTrendingRequestId",X.GetMusicSearchSuggestions_rid="musicInfo.getMusicSearchSuggestionsRequestId",X),cp="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
dp={},ep=(dp.ccs="CANARY_STATE_",dp.mver="MEASUREMENT_VERSION_",dp.pis="PLAYER_INITIALIZED_STATE_",dp.yt_pt="LATENCY_PLAYER_",dp.pa="LATENCY_ACTION_",dp.yt_vst="VIDEO_STREAM_TYPE_",dp),fp="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function gp(a){return!!M("FORCE_CSI_ON_GEL",!1)||Yj("csi_on_gel")||!!No(a).useGel}
function hp(a){a=No(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function ip(a,b,c){if(null!==b)if(Oo(c)[a]=b,gp(c)){var d=hp(c);if(d.gelInfos)d.gelInfos["info_"+a]=!0;else{var e={};d.gelInfos=(e["info_"+a]=!0,e)}if(a in bp){d=bp[a];Za(cp,d)&&(b=!!b);a in ep&&"string"===typeof b&&(b=ep[a]+b.toUpperCase());a=d.split(".");e=d={};for(var f=0;f<a.length-1;f++){var g=a[f];e[g]={};e=e[g]}e[a[a.length-1]]=b;b=Ro({},d)}else Za(fp,a)||$n(new Yn("Unknown label logged with GEL CSI",a)),b=void 0;b&&gp(c)&&(a=Xo(c||""),Ro(a.info,b),a=hp(c),"gelInfos"in a||(a.gelInfos={}),Ro(a.gelInfos,
b),c=Po(c),$o().info(b,c))}else Xo(c||"").info[a]=b}
if(Yj("overwrite_polyfill_on_logging_lib_loaded")){var jp=window;jp.ytcsi&&(jp.ytcsi.info=ip)};function kp(a,b,c){var d=Mo(c),e;if(e=Yj("use_first_tick"))e=Mo(c),e=a in e;if(e)return d[a];b||"_"==a[0]||(e=a,Jo.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Jo.mark(e)));e=b||$l();d[a]=e;e=hp(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||$l();if(gp(c)){Xo(c||"").tick[a]=b||$l();e=Po(c);if("_start"===a){var f=$o();ap(f,"baseline_"+e)||Xn("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else $o().tick(a,e,b);Qo(c);e=!0}else e=!1;if(!e){if(!t("yt.timing."+(c||
"")+"pingSent_")&&(f=M((c||"")+"TIMING_ACTION",void 0),e=Mo(c),t("ytglobal.timing"+(c||"")+"ready_")&&f&&e._start&&Lo(c)))if(Qo(c),c)lp(c);else{f=!0;var g=M("TIMING_WAIT",[]);if(g.length)for(var k=0,l=g.length;k<l;++k)if(!(g[k]in e)){f=!1;break}f&&lp(c)}Xo(c||"").tick[a]=b||$l()}return d[a]}
function lp(a){if(!gp(a)){var b=Mo(a),c=Oo(a),d=b._start,e=M("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:M((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var k=window.location.protocol+t("ytplayer.config.assets.js");(k=Jo.getEntriesByName?Jo.getEntriesByName(k)[0]:void 0)?c.h5jse=Math.round(c.h5jse-k.responseEnd):delete c.h5jse}b.aft=Lo(a);var l=Mo(a);k=l.pbr;var m=l.vc;l=l.pbs;k&&m&&l&&k<m&&m<l&&Oo(a).yt_pvis&&"youtube"==e&&(ip("yt_lt","hot_bg",a),e=b.vc,k=
b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var p in c)"_"!=p.charAt(0)&&(f[p]=c[p]);b.ps=$l();p={};e=[];for(var q in b)"_"!=q.charAt(0)&&(k=Math.round(b[q]-d),p[q]=k,e.push(q+"."+k));f.rt=e.join(",");(b=t("ytdebug.logTiming"))&&b(f,p);c=!!c.ap;Yj("debug_csi_data")&&(b=t("yt.timing.csiData"),b||(b=[],z("yt.timing.csiData",b)),b.push({page:location.href,time:new Date,args:f}));b="";for(var w in f)f.hasOwnProperty(w)&&(b+="&"+w+"="+f[w]);f="/csi_204?"+b.substring(1);if(window.navigator&&window.navigator.sendBeacon&&
c){var r=void 0===r?"":r;vl(f,r)||sl(f,void 0,void 0,void 0,r)}else sl(f);z("yt.timing."+(a||"")+"pingSent_",!0);Ml(Go,new Eo(p.aft+(g||0),a))}}
v(Jo.clearResourceTimings||Jo.webkitClearResourceTimings||Jo.mozClearResourceTimings||Jo.msClearResourceTimings||Jo.oClearResourceTimings||u,Jo);var mp=window;Yj("csi_on_gel")&&mp.ytcsi&&(mp.ytcsi.tick=kp);new Rg(np,1E3);function np(){kp("vptl",0);kp("vpl",0)}
;var T={},op=null;T.Sb=!1;T.init=function(){var a=E("yt-consent");Ek(a,"click",T.Td,"consent-close");Ek(a,"click",T.Ud,"consent-review");O(window,"message",T.Ye);M("CONSENT_SHOW_DIALOG")&&(a=E("yt-consent-dialog-content"),T.Xb(a),T.fd(),wl(Rc({a:"consent",consent:"forced"})),Ek(a,"click",T.Ld,"yt-dialog-dismiss"))};
T.Td=function(){I(document.body,"sitewide-consent-visible");bk("HideTicker","true",86400,"/");wl(Rc({a:"consent",consent:"later"}))};
T.Ud=function(){T.fd();wl(Rc({a:"consent",consent:"review"}))};
T.Ld=function(a){a=a.currentTarget;a.disabled||(a=N(a,"action")||"",Gn.prototype.dismiss(a),wl(Rc({a:"consent",consent:"dismiss"})),T.lb())};
T.fd=function(){var a=E("yt-consent-dialog");if(a){var b=!!M("CONSENT_SHOW_DIALOG");op=new Gn(a,b,!b);T.Rb();T.gf();op.show()}};
T.Rb=function(){try{var a=zo();a&&(a.isReady()?(1==a.getPlayerState(a.getPresentingPlayerType())&&(T.Sb=!0),a.pauseVideo()):a.addEventListener("onReady",T.Rb))}catch(b){uk(b)}};
T.lb=function(){try{var a=zo();a&&a.isReady()&&T.Sb&&(qk(),a.playVideo(),T.Sb=!1)}catch(b){uk(b)}};
T.Xb=function(a){var b=S("player-added",T.Rb,T);ek(a,"player-ready-pubsub-key",b)};
T.gf=function(){Mk()};
T.Ye=function(a){var b=a&&a.data,c=a&&a.origin;a=a&&a.source;var d=!1,e=Mc(c);(e=dk[e]&&dk.hasOwnProperty(e))||(e=Zj("consent_url_override"),e=void 0!==e?String(e):"");if(e){switch(b){case "cb-user-closed":op.dispose();T.Nc();T.lb();break;case "cb-ui-done-early":op.dismiss("close");T.lb();d=!0;break;case "cb-ui-done":case "cb-already-consented":op.dismiss("close");T.Nc();T.lb();d=!0;break;case "verify-origin":a.parent==window&&a.postMessage("verify-origin-reply",c)}d&&(I(document.body,"sitewide-consent-visible"),
wl(Rc({a:"consent",consent:"done"})))}};
T.Nc=function(){zc(E("yt-consent-iframe"),new Hb(Ib,Fb(new Cb(Db,"about:blank"))))};var pp,qp,rp;function sp(){var a=ce(),b=a.f,c=a.createElement("div");c.style.backgroundColor="rgb(1, 2, 3)";a.appendChild(b.body,c);b=hf(c,"backgroundColor");b=b.replace(/ /g,"");rp="rgb(0,0,0)"===b?"black":"rgb(255,255,255)"===b?"white":null;a.Jd(c)}
;function tp(){ek(up,"target-id","content")}
function vp(){var a=E(N(up,"target-id"));a.setAttribute("tabindex","0");a.focus();a=nf(E("page-container")).y;window.scrollBy(0,-a)}
var up=null;function wp(a){qp&&pp&&(ue(qp),qp.setAttribute("role","alert"),pp.style.clip="auto",qp.appendChild(document.createTextNode(a)),qp.style.display="none",qp.style.display="inline")}
;function xp(a){sg.call(this,a);this.Za=[];this.aa=[]}
A(xp,sg);xp.prototype.ya=function(){B(this.Za,Ck);Nk(this.aa);xp.J.ya.call(this)};function yp(){xp.call(this);this.l=this.g=this.j=null;this.A="horizontal";this.u=null}
sa(yp,xp);yp.prototype.xa=function(){xp.prototype.xa.call(this);this.A=N(this.oa(),"overflowable-list-orientation")||"horizontal";this.j=tg(this,"parent-list");this.u=tg(this,"overflow-container");this.g=tg(this,"overflow-list");this.l=tg(this,"overflowable-list-more-button")};
function zp(){var a=[];B(ge("overflowable-list-root",Ap),function(b){var c=new yp;vg(c,b);a.push(c)});
return a}
function Bp(a,b){var c=Cp(a),d=Cp(b);return c<d?-1:c==d?0:1}
function Dp(a,b){var c=eb(ge("overflowable-list-item",b));return Ua(c,function(d,e){return d+Ep(this,e)},0,a)}
function Ep(a,b){return"vertical"==a.A?rf(b).height:rf(b).width}
function Fp(a){var b=F("overflowable-list-item",a.oa());return b?Ep(a,b):0}
function Cp(a){return Dp(a,a.j)+Dp(a,a.g)}
;function Gp(a,b,c){this.g=a;this.f=null;(a=b||null)||(a=Hp(this.g));a=Bc("__%s__","("+a.join("|")+")");this.f=new RegExp(a,"g");this.h=c||{}}
var Ip=/__([a-z]+(?:_[a-z]+)*)__/g;function Jp(a,b){var c=Kp(E(a));return new Gp(c,b,void 0)}
function Kp(a){a=a.innerHTML;a=a.replace(/^\s*(\x3c!--\s*)?/,"");return a=a.replace(/(\s*--\x3e)?\s*$/,"")}
function Hp(a){var b=[],c={};a.replace(Ip,function(d,e){e in c||(c[e]=!0,b.push(e))});
return b}
function Lp(a,b){var c=v(function(d,e){return Dc(b[e]||this.h[e]||"")},a);
return a.g.replace(a.f,c)}
;var Ap,Mp,Np,Op;var Pp={Tf:"content-snap-width-1",Uf:"content-snap-width-2",Vf:"content-snap-width-3"};function Qp(){var a=[],b;for(b in Pp)a.push(Pp[b]);return a}
;function Rp(){Sp=he(document,"html",void 0,void 0)[0];Tp=E("appbar-guide-button")}
function Up(a,b){var c=b||!1,d=G(Sp,"show-guide");bh(Sp,"show-guide",a);Tp&&Tp.setAttribute("aria-expanded",a);a&&!G(document.documentElement,"no-focus-outline")&&c?(c=F("guide-item",E("guide-container")))&&c.focus():U("guide-hidden");if(a&&!d||!a&&d){d="";if(c=E("page"))d=c.className;d=Rc({"module-id":"guide-main",expanded:!0,auto:!1,"page-class":d,notification:!1});wl("a=guide-toggled"+(d?"&"+d:""),void 0)}(d=E("page"))&&Od&&(c=d.style.width,d.style.width="99.99%",hd(d.offsetWidth),d.style.width=
c)}
function Vp(){return G(Sp,"show-guide")}
function Wp(){return G(document.body,"guide-pinning-enabled")}
function Xp(){return Wp()&&G(Sp,"guide-pinned")}
var Sp=null,Tp=null;function Yp(a){Dl.call(this,1,arguments);this.f=a}
A(Yp,Dl);function Zp(a,b,c){Dl.call(this,1,arguments);this.f=c}
A(Zp,Dl);var $p=new El("subscription-subscribe-success",Zp),aq=new El("subscription-unsubscribe-success",Yp);var bq;function cq(){this.f=dq}
function eq(){function a(){var c=F("guide-likes-playlist-icon");if(c)return Re(c,"guide-notification-item")}
bq=E("appbar-main-guide-notification-container");fq(function(){return F("guide-item-container",E("behavior-id-guide-playlists-section"))});
gq("yt-uix-playlistlike-unliked","appbar-guide-notification-playlist-unlike");hq("addto-menu-video-added","appbar-guide-notification-playlist-video-added",iq,null,new cq);gq("addto-menu-video-removed","appbar-guide-notification-playlist-video-removed");var b=x(E,"VLWL-guide-item");hq("WATCH_LATER_VIDEO_ADDED","appbar-guide-notification-watch-later-video-added",b,1);hq("WATCH_LATER_VIDEO_REMOVED","appbar-guide-notification-watch-later-video-removed",b,-1);hq("yt-uix-videolike-liked","appbar-guide-notification-video-like",
a,1);hq("yt-uix-videolike-unliked","appbar-guide-notification-video-unlike",a,-1);Ol(aq,jq);Ol($p,kq)}
function dq(a){if(!a||E(a.id))return null;var b=["ID","URL","TITLE","NOTIFICATION_OVERLAY_MESSAGE"];a=Lp("RD"==a.playlistType?Jp("appbar-guide-item-template-mix",b):Jp("appbar-guide-item-template-playlist",b),{ID:"VL"+a.id,URL:a.url,TITLE:a.title,NOTIFICATION_OVERLAY_MESSAGE:a.title});return pk(a)}
function iq(a){return E("VL"+a.id+"-guide-item")}
function lq(a,b){var c=Kp(E(a));c=pk(c);if(b){var d=F("appbar-guide-notification-text-content",c);if(d){var e=document.createTextNode(String(" "+b));d&&e&&d.appendChild(e)}}return c}
function hq(a,b,c,d,e){S(a,function(f){var g=c.apply(null,arguments);if(d){var k=F("guide-count-value",g);if(k){var l=k.innerHTML;""===l.trim()||isNaN(l)||Fe(k,parseInt(l,10)+d)}}!g&&e&&(k=e.f(f),(l=F("guide-item-container",E("behavior-id-guide-playlists-section")))&&k&&ve(l,k));mq(b,!!g,f?f.title:null)||((k=F("guide-item-update-notification",g))&&we(k),k=lq(b),H(k,"guide-item-update-notification"),g.appendChild(k),P(x(H,g,"showing-update-notification"),0),P(x(I,g,"showing-update-notification"),2E3))})}
function fq(a){var b=dq;S("yt-uix-playlistlike-liked",function(){var c=a(),d=b.apply(null,arguments);mq("appbar-guide-notification-playlist-like",!!c)||(ve(c,d),U("guide-playlist-section-updated"))})}
function gq(a,b){var c=iq;S(a,function(){var d=c.apply(null,arguments);nq(d,b,"guide-playlist-section-updated")})}
function nq(a,b,c){mq(b,!!a)||(b=lq(b),H(b,"guide-item-removal-notification"),a.appendChild(b),P(x(H,a,"removing-guide-item"),0),P(function(){we(a);U(c)},2E3))}
function mq(a,b,c){if(b&&Vp())return!1;ue(bq);bq.appendChild(lq(a,c));H(document.body,"show-guide-button-notification");P(x(I,document.body,"show-guide-button-notification"),2E3);return!0}
function kq(a){if(E("guide-subscriptions-promo")){U("force-reload-subscriptions");var b=!0}else b=!1;b||(b=E("guide-channels"),a=a.f,a=Lp(Jp("appbar-guide-item-template-channel",["ID","URL","TITLE","THUMBNAIL_URL","NOTIFICATION_OVERLAY_MESSAGE"]),{ID:a.external_id,URL:a.url,TITLE:a.title,THUMBNAIL_URL:a.thumbnail,NOTIFICATION_OVERLAY_MESSAGE:a.title}),a=pk(a),mq("appbar-guide-notification-subscription",!!b)||(ve(b,a),U("guide-channel-section-updated")))}
function jq(a){a=a.f;nq(a?E(a+"-guide-item"):null,"appbar-guide-notification-unsubscription","guide-channel-section-updated")}
;function oq(a,b,c){var d=c&&0<c?c:0;c=d?y()+1E3*d:0;if((d=d?pq():qq())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function rq(a){var b=qq(),c=pq();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d}
function sq(a){try{var b=qq(),c=pq();b&&b.remove(a);c&&c.remove(a)}catch(d){}}
function tq(){var a=pq();a&&Ej(a,a.f.sa(!0))}
var pq=lb(function(){var a=new Ij;return a.isAvailable()?new Cj(a):null}),qq=lb(function(){var a=new Jj;
return a.isAvailable()?new Cj(a):null});var uq=[];function vq(a){for(var b=0;b<a.length;b++){var c=a[b];if(G(c,"generic-promo-impression-logging")){for(var d=ge("generic-promo-impression-feedback",c),e=0;e<d.length;e++){var f={feedback_tokens:[N(d[e],"feedback-token")]};kl("/feed_change_ajax?action_give_feedback=1",{method:"POST",ja:f})}I(c,"generic-promo-impression-logging")}}}
;var wq=[];
function xq(){B(ge("promoted-button-container"),function(a){a:{var b=N(a,"promo-id");var c=parseInt(N(a,"promo-impression-cap"),10)||0;var d=parseInt(N(a,"promo-impression-delay"),10)||0;if(b&&0<c&&0<d){b="yt-hint-"+b;var e=rq(b)||{},f=e.lastSeen;e=e.impressions||0;if(f&&y()-new Date(f)<1E3*d||e>=c){c=!1;break a}e={lastSeen:y(),impressions:e+1};oq(b,e,2592E3)}c=!0}if(c){if("true"===N(a,"promo-visible")&&(c=Dn.getInstance(),c.hd(a),"hidden"!=window.getComputedStyle(a).visibility&&(c.show(a),G(a,"hide-hint-on-scroll")&&
(c=E(N(a,"scroll-parent"))||window,wq.push(Gk(c,"scroll",v(yq,this,a)))))),a&&(c=t("yt.www.page.visibilitymonitor.delegateByClass")))a=c(a,t("yt.www.page.visibilitymonitor.States.VISIBLE"),vq,"generic-promo-impression-logging"),uq.push(a)}else(a=F("generic-promo-impression-logging",a))&&I(a,"generic-promo-impression-logging")})}
function yq(a){Dn.getInstance().hide(a)}
;var zq=t("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",zq);function Aq(){this.f=M("ALT_PREF_COOKIE_NAME","PREF");var a=Vd.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zq[d]=c.toString())}}}
h=Aq.prototype;h.get=function(a,b){Bq(a);Cq(a);var c=void 0!==zq[a]?zq[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Bq(a);Cq(a);if(null==b)throw Error("ExpectedNotNull");zq[a]=b.toString()};
function Dq(a){return!!((Eq("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
function Fq(a,b){var c="f"+(Math.floor(a/31)+1),d=1<<a%31,e=Eq(c)||0;e=b?e|d:e&~d;0==e?delete zq[c]:(d=e.toString(16),zq[c]=d.toString())}
h.remove=function(a){Bq(a);Cq(a);delete zq[a]};
h.save=function(){bk(this.f,this.dump(),63072E3,"/")};
h.clear=function(){for(var a in zq)delete zq[a]};
h.dump=function(){var a=[],b;for(b in zq)a.push(b+"="+encodeURIComponent(String(zq[b])));return a.join("&")};
function Cq(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bq(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Eq(a){a=void 0!==zq[a]?zq[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Da(Aq);function Gq(a){if(!Hq||a)Hq=ke(window);return Hq}
var Hq=null;var Iq=[],Jq=[],Kq=[];
function Lq(){Ap=E("guide");Mp=E("guide-channels");Np=E("appbar-guide-menu");Op=E("appbar-guide-iframe-mask");eq();Ap&&(Rp(),G(document.body,"exp-scrollable-guide")||Mq(),Iq.push(Ek(Ap,"click",Nq,"guide-sort-choice")),G(document.body,"exp-scrollable-guide")?(Oq(Gq(!0)),Jq.push(S("page-resize",Oq))):Jq.push(S("page-resize",Pq)),Jq.push(S("guide-channel-section-updated",Qq)),Jq.push(S("guide-playlist-section-updated",x(Pq,x(Gq,!0)))),Jq.push(S("force-reload-subscriptions",Rq)),Jq.push(S("update-guide-subscriptions",
Sq)),Jq.push(S("guide-hidden",Tq)),xq())}
function Uq(a,b){B(ge("guide-flyout-container",Ap),function(c){Iq.push(O(c,a,b))})}
function Vq(a){Wq(a.currentTarget)}
function Tq(){B(ge("guide-flyout-container",Ap),function(a){Wq(a)})}
function Wq(a){var b=F("guide-flyout-trigger",a),c=F("guide-flyout-iframe-mask",a);I(F("guide-flyout",a),"flyout-shown");c&&I(c,"flyout-shown");I(b,"on-hover")}
function Xq(a){a=a.currentTarget;var b=F("guide-flyout",a),c=F("guide-flyout-trigger",a),d=F("guide-flyout-iframe-mask",a),e=F("guide-flyout",a),f=xf(e),g=F("guide-channels-list",a),k=Gq(!0),l=F("guide-flyout-trigger",a),m=F("guide-flyout-iframe-mask",a),p=k.height-(Np?Np.offsetTop:0);g.style.maxHeight=p-f.top-f.bottom+"px";f=rf(e).height;g=rf(l);l=pf(l);p=Math.min(p-f,Math.max(0,k.height-l.y-g.height/2-f/2));g=l.x+g.width;k=k.width-l.x;e.style.bottom=p+"px";m&&(m.style.height=f+"px",m.style.bottom=
p+"px");"rtl"==document.body.getAttribute("dir")?(e.style.right=k+"px",e.style.left="",m&&(m.style.right=k+"px",m.style.left="")):(e.style.left=g+"px",e.style.right="",m&&(m.style.left=g+"px",m.style.right=""));H(b,"flyout-shown");d&&H(d,"flyout-shown");H(c,"on-hover");U("yt-dom-content-change",a)}
function Yq(){Op&&Np&&(Op.style.height=rf(Np).height+"px",Op.style.marginTop=Np.style.marginTop,Op.style.top=Np.style.top)}
function Mq(){Mp=E("guide-channels");Kq=zp();Pq(Gq(!0));Uq("mouseenter",Xq);Uq("mouseleave",Vq)}
function Nq(a){var b=F("guide-sort-button"),c=N(b,"guide-sort")||"",d=N(a.currentTarget,"guide-sort")||"";c!=d&&(ek(b,"guide-sort",d),kl("/guide_channels_ajax?action_set_guide_sort=1",{method:"POST",nb:{sort:d},format:"JSON",onSuccess:function(e,f){Sq(f);B(ge("guide-sort-choice"),function(g){var k=N(g,"guide-sort");Rm.getInstance();g=g.parentNode;k=d==k;var l=nk("span","yt-uix-button-icon-wrapper",g);if(!l&&k){var m=pe("SPAN",{"class":"yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"}),p=pe("DIV",
{"class":"yt-uix-button-icon-dropdown-checked"});m.appendChild(p);ve(g,m)}xl(l,k)})}}))}
function Sq(a){var b=a.channels;b&&(a=E("guide-subscriptions-section"),b=te(Se(b)),xe(b,a),Kq=zp(),Zq(),B(ge("yt-uix-tooltip-tip-visible"),function(c){I(c,"yt-uix-tooltip-tip-visible")}))}
function Zq(){Mq();U("yt-dom-content-change",Ap)}
function Qq(){Mp&&(Mp.firstElementChild?Zq():Rq())}
function $q(a){return Xa(ge("guide-item",Ap),function(b){return N(b,"serialized-endpoint")==a})}
function Oq(a){Np&&ef(Np,"max-height",a.height-50+"px")}
function Pq(a){if(Kq&&!G(document.body,"exp-scrollable-guide")){var b=ar(a),c=Kq.length,d=0;Kq.sort(Bp||ib);B(Kq,function(e,f){var g=Cp(e)-d;g=Math.min(g,b/(c-f));b-=(c-f)*g;g=d+=g;g-=g>=Cp(e)?0:e.l?Ep(e,e.l):0;g=Math.max(Fp(e),g);var k=Dp(e,e.j);if(k>g)for(;k>g;){var l=e.j;if(l=void 0!==l.lastElementChild?l.lastElementChild:Ae(l.lastChild,!1)){var m=Ep(e,l);k-=m;ve(e.g,l)}else break}else if(k<g){for(l=document.createDocumentFragment();0!=ye(e.g).length;)if(m=ze(e.g)){var p=Ep(e,m);if(k+p<=g)k+=p,
l.appendChild(m);else break}else break;e.j.appendChild(l)}bh(e.u,"empty-overflow-list",0==ye(e.g).length)});
Yq()}}
function ar(a){var b=Np,c=E("guide-container");if(!c||!b)return 0;var d=xf(c);d=d.top+d.bottom;c=ze(c).clientHeight;var e=0;B(Kq,function(f){e+=f.j?Dp(f,f.j):0;e+=0==ye(f.g).length?0:f.l?Ep(f,f.l):0});
c=d+c-e;return(Xp()?b.clientHeight:a.height-50)-c}
function Rq(){kl("/guide_channels_ajax?action_load_subs_and_footer=1",{format:"JSON",onSuccess:function(a,b){Sq(b)}})}
;function br(){var a={action_get_delegate_accounts:1,owner_picker_redirect_url:M("OWNER_PICKER_REDIRECT_URL")},b={};void 0!==cr()&&(b.ar=cr());void 0!==Vj().nv&&(b.nv=Vj().nv);Object.assign(a,b);a.o=Vj().o;return a}
function cr(){if(void 0!==Vj().earst){var a=dr+(Date.now()-er);a=""+(a-100*Math.floor(a%1E3/100)-1E5*Math.floor(a%1E6/1E5))}else a=Vj().ar;return a}
var dr=Date.now(),er=Date.now(),Wj={o:"U"},fr=Vj().earst;void 0!==fr&&(dr=fr,er=Date.now());var gr=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",gr);function hr(a){var b=void 0===b?{}:b;a=(a=a in gr?gr[a]:void 0)||"";var c={},d;for(d in b){c.Ya=d;var e=function(f){return function(){return String(b[f.Ya])}}(c);
a=a.replace(new RegExp("\\$\\{"+c.Ya+"\\}","gi"),e);a=a.replace(new RegExp("\\$"+c.Ya,"gi"),e);c={Ya:c.Ya}}return a}
function ir(a){var b="MASTHEAD_NOTIFICATIONS_LABEL"in gr?gr.MASTHEAD_NOTIFICATIONS_LABEL:{},c=M("I18N_PLURAL_RULES");c||(c=function(d){return 1==d?"one":"other"});
return(b=b["case"+a]||b[c(a)])?b.replace("#",a.toString()):a+""}
;var jr=null;function kr(a){var b={key:"HighPriorityNotificationTimestamp"};b.value=a;return lr().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(b);f.onsuccess=function(){d()};
f.onerror=function(){e()}}catch(g){e(g)}})})}
function mr(a){var b=new Yn("Error accessing DB");return lr().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var g=f.result;d(g?g.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(g){b.params={key:a,
thrownError:String(g)},e(b)}})},function(){return null})}
function lr(){return jr?Promise.resolve(jr):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))jr=d,a(jr);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),lr()};
c.onupgradeneeded=nr})}
function nr(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;var or=0,pr="";function qr(a){if(Yj("desktop_notification_set_title_bar")){var b=rr();or=a;pr=b;document.title=sr()}}
function rr(){if(!or)return document.title;if(document.title==sr())return pr;var a=or?"("+or+") ":"";return 0!=document.title.indexOf(a)?document.title:document.title.substring(a.length)}
function tr(){or&&0!=document.title.indexOf(sr())&&(pr=document.title,document.title=sr())}
function sr(){return(or?"("+or+") ":"")+pr}
;var ur="",vr=!1,wr=null,xr=null,yr=null,zr=null,Ar=null;function Br(){wr=E("yt-masthead-notifications");xr=E("yt-masthead-notifications-clickcard");yr=E("yt-masthead-notifications-content");(zr=E("yt-masthead-notifications-button"))&&(Ar=F("yt-uix-button-content",zr));Ar&&Cr();pr=document.title;S("init",tr);var a=E("yt-masthead-high-priority-notification-content");a&&O(a,"click",Dr)}
function Er(a,b){mr("NotificationsDisabled").then(function(c){return Yj("desktop_notification_high_priority_ignore_push")||!window.Notification||"granted"!=Notification.permission||c?mr("HighPriorityNotificationTimestamp").then(function(d){d||(d=0);if(a<=d)return Promise.resolve();Fr(d,b);return kr(a)}):Promise.resolve()})}
function Cr(){kl("/feed_ajax?action_get_unseen_notification_count=1",{method:"GET",onSuccess:Gr})}
function Dr(){G(xr,"yt-high-priority-notification")&&(xr&&I(xr,"yt-high-priority-notification"),zr&&Dn.getInstance().hide(zr))}
function Fr(a,b,c){zr&&((void 0===c?0:c)||!window.document.hasFocus||window.document.hasFocus()?(ur&&(Ck(ur),ur=""),c={action_get_high_priority_notification_flyout:1,timestampLowerBound:a},c[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0),spf.load("/feed_ajax",{method:"POST",postData:Rc(c),onDone:function(){G(wr,"yt-uix-clickcard-active")||(vr=!0,zr&&(Dn.getInstance().hide(zr),H(xr,"yt-high-priority-notification"),Dn.getInstance().show(zr),gk(yr,"loaded"),I(wr,"yt-uix-clickcard-active")),vr=!1,
P(Dr,b))}})):ur||(ur=Gk(window,"focus",function(){Fr(a,b,!0)})))}
function Hr(a){(a=F("unread-dot",a.currentTarget))&&Bl(a)}
function Gr(a,b){if(Ar){Er(b.timestamp_lower_bound||0,b.high_priority_notification_timeout_ms||5E3);var c=b.unseen_notification_count||0,d=String(c);100<=c&&(d=hr("MASTHEAD_NOTIFICATIONS_COUNT_99PLUS"));Fe(Ar,d);qr(c);zr&&(0==c?(d=zr,I(d,"sb-notif-on"),H(d,"sb-notif-off")):(d=zr,I(d,"sb-notif-off"),H(d,"sb-notif-on"),gk(yr,"loaded")),c=ir(c),zr.setAttribute("aria-label",c),zr.setAttribute("title",c));(c=b.polling_timeout)&&P(Cr,c)}}
;var Ir,Jr,Kr="";function Lr(){if("U"==Vj().o){var a=ge("yt-masthead-account-picker-user-option"),b=Oc(window.location.href);B(a,function(e){-1!=e.href.indexOf("action_handle_signin")&&xc(e,Oc(Uk(e.href,{next:b})))})}else{a=ge("yt-masthead-account-picker-owner-option");
var c=Nc();if(c){var d=c.indexOf(";");-1!=d&&(c=c.substring(0,d))}c&&B(a,function(e){var f=e.href;-1!=f.indexOf("?")?(f=(f||"").split("#")[0],f=f.split("?",2),f=Tk(1<f.length?f[1]:f[0])):f={};if(f=f.next){var g=f.indexOf("#");f=(0>g?f:f.substr(0,g))+(c?"#"+c:"");xc(e,Oc(Uk(e.href,{next:f})))}})}}
function Mr(){I(document.body,"sitewide-ticker-visible");U("masthead-ticker-close")}
function Nr(){var a=M("SBOX_JS_URL",Kr);if(a){Kr=a;var b=t("yt.www.masthead.searchbox.init");b?b():Or(a,function(){try{var c=t("yt.www.masthead.searchbox.init");c()}catch(d){throw d.message=d.message+' sbox type: "'+Ea(c)+'"',d;}})}}
function Or(a,b){var c=E("masthead-search-term");if(c){var d=function(){Pr();Jr=b;Rn(a,b);Ck([e,f])};
var e=Gk(c,"mouseover",d);var f=Gk(c,"keypress",d)}}
function Pr(){t("yt.www.masthead.searchbox.init")||(Wn(Kr,Jr),Jr=null)}
function Qr(){var a=E("masthead-search-term");a&&a.focus()}
;var Rr=[],Sr="",Tr=[],Ur=null,Vr=null,Wr=0,Xr=0,Yr=!1,Zr=!1,$r=0,as=0,bs=0,cs=null,ds=null,es=null,fs=!1,gs=null,hs=!1,is=null,js=!1,ks=!1,ls=!1;function ms(){if(E("masthead-appbar")){Vr=E("masthead-positioner");Ur=E("masthead-positioner-height-offset");Rp();ns();os();cs=new zg(ps);var a=qs;t("yt.scheduler.instance")&&(a=function(){Hl(qs,1,void 0)});
Tr.push(S("init",a));Tr.push(S("dispose",rs));es=Qp();gs=Aq.getInstance();ss(Dq(128)?Dq(129):!0);is=he(document,"html",void 0,void 0)[0];Tr.push(S("masthead-ticker-close",ts));Tr.push(S("appbar-guide-delay-load",ns));Tr.push(S("page-resize",us));js||qs()}}
function qs(){ds=F("appbar-content-trigger");(ls=G(document.body,"always-autohide-masthead"))?gk(Ir,"position-fixed"):ek(Ir,"position-fixed","true");ls||ds?Sr=O(window,"scroll",vs):ws();fs=!!E("appbar-guide-menu")&&Wp();js?(fs||(bh(Sp,"guide-pinned",!1),Up(!1),Np&&(Np.scrollTop=0)),us()):js=!0;var a=-1*pf(Vr).y,b=document.body.scrollHeight,c=a-(b-document.body.clientHeight);0<c&&(document.body.style.minHeight=""+b+c+"px");ne(document).scrollTop+=a;Wr=me(document).y;xs();ys();Yq()}
function rs(){ds=null;ws()}
function xs(){if(!ds||ks)xl(null,!0);else{var a=rf(ds).height,b=rf(Vr).height;b=pf(Vr).y+b;a=Math.floor(pf(ds).y)+a;var c=G(document.body,"appbar-hidden"),d=ne(document);c&&a<b+40?(d.scrollTop+=40,xl(null,!0),I(document.body,"appbar-hidden"),zs()):!c&&b<a&&(d.scrollTop-=40,H(document.body,"appbar-hidden"),zs())}}
function zs(){ks=!0;P(function(){ks=!1;G(document.body,"appbar-hidden")&&xl(null,!1)},300)}
function us(){fs&&(bh(Sp,"guide-pinned",1251<=(window.innerWidth||document.documentElement.clientWidth)),Up(Xp()&&hs));As()}
function As(){if(document.body)if(G(document.body,"flex-width-enabled-snap")){var a=Xp()&&Vp();var b=(window.innerWidth||document.documentElement.clientWidth)-21-50;1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&(b-=230);a=1262<=b?"content-snap-width-3":1056<=b?"content-snap-width-2":"content-snap-width-1";G(is,a)||(ah(is,es),H(is,a),U("yt-dom-content-change"))}else ah(is,es)}
function Bs(){return E("appbar-guide-menu")}
function os(){var a=G(document.body,"appbar-hidden"),b=pf(Vr).y,c=rf(Vr).height;Xr=a?b+c:b+c-40}
function Cs(a){Xp()||Re(a.target,"appbar-guide-clickable-ancestor")||Up(!1)}
function ps(){var a=Math.max(0,me(document).y),b=Wr;Wr=a;var c=b-a;0<c&&0==$r?$r=b:0>c&&($r=0);c=Math.min(0,Math.max(c+as,-Xr));var d=ls;if(d){var e=a<Xr;b=a>b&&Math.abs(as)<Xr;Vp()&&b?a=!1:(a=d?!1:100<=$r-a,a=e||b||a)}else a=!1;a&&as!=c&&(Vr.style.top=c+"px",bs=as=c,Ds());xs()}
function Ds(){var a=Bs();a&&(a.style.top=bs+"px");Yq()}
function ns(){if(!Zr){var a=Bs();if(!a||F("guide-module-loading",a)){var b=E("appbar-guide-button");if(!b)return;Rr.push(Gk(b,"click",function(){U("appbar-show-guide")}))}Ds();
Rr.push(Ek(a,"click",ys,"guide-item"));Rr.push(O(a,"mouseleave",Es));Rr.push(O(document.body,"click",Cs));Rr.push(O(F("appbar-guide-toggle"),"click",Fs));Zr=!0}}
function ys(){Yr=!Xp()}
function Es(){Yr&&(Up(!1),Yr=!1)}
function Fs(){var a=!Vp();Up(a,!0);a&&U("yt-dom-content-change");Xp()&&ss(a);As()}
function ss(a){Fq(128,!0);Fq(129,a);gs.save();hs=a}
function ws(){Ck(Sr);cs&&cs.stop();Sr=""}
function vs(){cs.isActive()||cs.start()}
function ts(){var a=pf(Vr).y,b=rf(Vr).height;Ur.style.height=""+a+b+"px";var c=Bs();c&&(G(document.body,"appbar-hidden")?c.style.marginTop=""+a+b+"px":c.style.marginTop=a+b-40+"px",Yq());os()}
;var Gs;function Hs(a){Is(E("yt-picker-"+a+"-footer"),a,!1,!1,!0);E("footer").scrollIntoView()}
function Is(a,b,c,d,e){c||(Gs&&Gs!=a&&Bl(Gs),Gs=a,e?Al(a):Cl(a));d?F("yt-close",a).focus():(c={},c["action_"+b]=1,c.base_url=window.location.href.split("#",1)[0],kl("/picker_ajax",{format:"JSON",method:"GET",nb:c,onSuccess:v(Js,null,a),onError:function(){Bl(a)}}))}
function Js(a,b,c){if(c&&c.html){ek(a,"loaded",1);a.innerHTML=c.html;Ks(a);c=(b=document.body||ne(document))||ne(document);var d=nf(a),e=nf(c),f=Af(c);if(c==ne(document)){var g=d.x-c.scrollLeft;d=d.y-c.scrollTop;D&&!Fd(10)&&(g+=f.left,d+=f.top)}else g=d.x-e.x-f.left,d=d.y-e.y-f.top;f=sf(a);e=c.clientHeight-f.height;var k=c.scrollLeft,l=c.scrollTop;k+=Math.min(g,Math.max(g-(c.clientWidth-f.width),0));l+=Math.min(d,Math.max(d-e,0));c=new $d(k,l);b.scrollLeft=c.x;b.scrollTop=c.y;F("yt-close",a).focus()}else Bl(a)}
function Ks(a,b){var c=F("yt-picker-content",a);c?B(he(document,null,"yt-picker-section",c),v(Ls,null,Math.floor((b||c.offsetWidth)/180))):vk(Error(".yt-picker-content missing"))}
function Ls(a,b){for(var c=he(document,null,"yt-picker-item",b),d=Math.ceil(c.length/a),e,f=qe(document,"div"),g=0;g<a;g++){e=qe(document,"div");e.className="yt-picker-grid";for(var k=d*g;k<d*(g+1);k++)c[k]&&e.appendChild(c[k]);e.children.length&&f.appendChild(e)}c=lk(f);for(ue(b);0<c.childNodes.length;)b.appendChild(c.childNodes[0])}
;function Ms(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.h=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new lh;this.f=this.g="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Ns(this,a.capabilities||""),Os(this,a.experiments||""),this.g=
a.remoteControllerUrl||"",this.f=a.localChannelEncryptionKey||"")}
Ms.prototype.copy=function(){var a=new Ms({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.h=this.h;a.g=this.g;a.f=this.f;return a};
Ms.prototype.equals=function(a){return a?this.id==a.id:!1};
function Ns(a,b){a.capabilities.clear();Sa(b.split(","),x(pb,Yl)).forEach(function(c){a.capabilities.add(c)})}
function Os(a,b){a.experiments.clear();b.split(",").forEach(function(c){a.experiments.add(c)})}
;function Ps(a,b){this.action=a;this.params=b||{}}
;function Qs(a,b){$e.call(this);this.f=new Rg(this.Ne,0,this);af(this,x(bf,this.f));this.h=5E3;this.g=0;if(Ha(a))b&&(a=v(a,b));else if(a&&Ha(a.handleEvent))a=v(a.handleEvent,a);else throw Error("Invalid listener argument");this.i=a}
A(Qs,$e);h=Qs.prototype;h.Ne=function(){this.h=Math.min(3E5,2*this.h);this.i();this.g&&this.start()};
h.start=function(){var a=this.h+15E3*Math.random(),b=this.f;b.isActive()||b.start(a);this.g=y()+a};
h.stop=function(){this.f.stop();this.g=0};
h.isActive=function(){return this.f.isActive()};
h.reset=function(){this.f.stop();this.h=5E3};function Rs(a,b,c){this.F=a;this.l=b;this.h=new K;this.g=new Qs(this.bf,this);this.f=null;this.A=!1;this.j=null;this.u="";this.G=this.i=0;this.C=[];this.I=c||!1}
A(Rs,mj);h=Rs.prototype;h.subscribe=function(a,b,c){return this.h.subscribe(a,b,c)};
h.Ec=function(a,b){tj(this.h,a,b,void 0)};
h.fa=function(a){return this.h.fa(a)};
h.w=function(a,b){this.h.Y.apply(this.h,arguments)};
h.dispose=function(){this.A||(this.A=!0,bf(this.h),Ss(this),bf(this.g),this.g=null)};
h.K=function(){return this.A};
function Ts(a){return{firstTestResults:[""],secondTestResults:!a.f.Eb,sessionId:a.f.h,arrayId:a.f.Ra}}
h.connect=function(a,b,c){if(!this.f||2!=this.f.f){this.u="";this.g.stop();this.j=a||null;this.i=b||0;a=this.F+"/test";b=this.F+"/bind";var d=new Si(c?c.firstTestResults:null,c?c.secondTestResults:null,this.I),e=this.f;e&&(e.T=null);d.T=this;this.f=d;e?this.f.connect(a,b,this.l,e.h,e.Ra):c?this.f.connect(a,b,this.l,c.sessionId,c.arrayId):this.f.connect(a,b,this.l)}};
function Ss(a,b){a.G=b||0;a.g.stop();a.f&&(3==a.f.f&&fj(a.f),Zi(a.f));a.G=0}
h.sendMessage=function(a,b){var c={_sc:a};b&&Ab(c,b);this.g.isActive()||2==(this.f?this.f.f:0)?this.C.push(c):Us(this)&&ej(this.f,c)};
h.hc=function(){this.g.reset();this.j=null;this.i=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)ej(this.f,a[b])}this.w("handlerOpened")};
h.ec=function(a){var b=2==a&&401==this.f.ra;4==a||b||this.g.start();this.w("handlerError",a)};
h.Ib=function(a){if(!this.g.isActive())this.w("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].f;d&&this.C.push(d)}};
h.pc=function(){var a={v:2};this.u&&(a.gsessionid=this.u);0!=this.i&&(a.ui=""+this.i);0!=this.G&&(a.ui=""+this.G);this.j&&Ab(a,this.j);return a};
h.fc=function(a){"S"==a[0]?this.u=a[1]:"gracefulReconnect"==a[0]?(this.g.start(),Zi(this.f)):this.w("handlerMessage",new Ps(a[0],a[1]))};
function Us(a){return!!a.f&&3==a.f.f}
function Vs(a,b){(a.l.loungeIdToken=b)||a.g.stop()}
h.bf=function(){this.g.isActive();var a=this.f,b=0;a.P&&b++;a.W&&b++;0==b&&this.connect(this.j,this.i)};var Ws=y(),Xs=null,Ys=Array(50),Zs=-1,$s=!1;function at(){var a=bt;ct();Xs.push(a);dt(Xs)}
function et(a,b){ct();var c=Xs,d=ft(a,String(b));0==c.length?gt(d):(dt(c),B(c,function(e){e(d)}))}
function ht(a){et("CP",a)}
function ct(){Xs||(Xs=t("yt.mdx.remote.debug.handlers_")||[],z("yt.mdx.remote.debug.handlers_",Xs))}
function gt(a){var b=(Zs+1)%50;Zs=b;Ys[b]=a;$s||($s=49==b)}
function dt(a){var b=Ys;if(b[0]){var c=Zs,d=$s?c:-1;do{d=(d+1)%50;var e=b[d];B(a,function(f){f(e)})}while(d!=c);
Ys=Array(50);Zs=-1;$s=!1}}
function ft(a,b){var c=(y()-Ws)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function it(a){this.port=this.domain="";this.f="/api/lounge";this.g=!0;a=a||document.location.href;var b=Number(Kc(a)[4]||null)||"";b&&(this.port=":"+b);this.domain=Mc(a)||"";a=ec;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Ub(a,"10.0")&&(this.g=!1))}
function jt(a,b){var c=a.f;a.g&&(c="https://"+a.domain+a.port+a.f);return Sc(c+b,{})}
function kt(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:x(a.i,d,!0),onError:x(a.h,e),Ka:x(a.j,e)};c&&(a.ja=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return kl(b,a)}
it.prototype.i=function(a,b,c,d){b?a(d):a({text:c.responseText})};
it.prototype.h=function(a,b){a(Error("Request error: "+b.status))};
it.prototype.j=function(a){a(Error("request timed out"))};function lt(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function mt(a,b){return!!b&&(a.id==b||a.uuid==b)}
function nt(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function ot(a){return new lt(a)}
function pt(a){return Fa(a)?Ta(a,ot):[]}
function qt(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function rt(a){return Fa(a)?"["+Ta(a,qt).join(",")+"]":"null"}
;function st(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function tt(a,b){return Xa(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})}
function ut(a,b){return Xa(a,function(c){return mt(c,b)})}
;function vt(a){a=void 0===a?!1:a;$e.call(this);this.l=new K(a);af(this,x(bf,this.l))}
A(vt,$e);vt.prototype.subscribe=function(a,b,c){return this.K()?0:this.l.subscribe(a,b,c)};
vt.prototype.Ec=function(a,b){this.K()||tj(this.l,a,b,void 0)};
vt.prototype.fa=function(a){return this.K()?!1:this.l.fa(a)};
vt.prototype.w=function(a,b){this.K()||this.l.Y.apply(this.l,arguments)};function wt(a){vt.call(this);this.A=a;this.f=[]}
A(wt,vt);wt.prototype.ca=function(){return this.f};
wt.prototype.Gb=function(a){return!!tt(this.f,a)};
wt.prototype.get=function(a){return a?ut(this.f,a):null};
function xt(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.f.push(b);return!0}
function zt(a,b){var c=a.f.length!=b.length;a.f=Sa(a.f,function(f){return!!tt(b,f)});
for(var d=0,e=b.length;d<e;d++)c=xt(a,b[d])||c;return c}
function At(a,b){var c=a.f.length;a.f=Sa(a.f,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.f.length<c}
wt.prototype.info=function(a){et(this.A,a)};function Bt(a,b,c,d){vt.call(this);this.A=a;this.u=b;this.i=c;this.j=d;this.h=0;this.f=null;this.g=NaN}
sa(Bt,vt);h=Bt.prototype;h.start=function(){!this.f&&isNaN(this.g)&&this.Yc()};
h.stop=function(){this.f&&(this.f.abort(),this.f=null);isNaN(this.g)||(Q(this.g),this.g=NaN)};
h.B=function(){this.stop();vt.prototype.B.call(this)};
h.Yc=function(){this.g=NaN;this.f=kl(jt(this.A,"/pairing/get_screen"),{method:"POST",ja:{pairing_code:this.u},timeout:5E3,onSuccess:v(this.nf,this),onError:v(this.mf,this),Ka:v(this.pf,this)})};
h.nf=function(a,b){this.f=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.w("pairingComplete",new lt(c))};
h.mf=function(a){this.f=null;a.status&&404==a.status?this.h>=Ct.length?this.w("pairingFailed",Error("DIAL polling timed out")):(a=Ct[this.h],this.g=P(v(this.Yc,this),a),this.h++):this.w("pairingFailed",Error("Server error "+a.status))};
h.pf=function(){this.f=null;this.w("pairingFailed",Error("Server not responding"))};
var Ct=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];var Dt;function Et(){var a=Ft(),b=Gt();if(Ht()){var c=a;var d=0;for(var e=c.length,f;d<e;){var g=d+(e-d>>>1);var k=ib(b,c[g]);0<k?d=g+1:(e=g,f=!k)}d=f?d:-d-1;0>d&&gb(c,-(d+1),0,b)}a=It(a);if(0==a.length)try{ck("remote_sid")}catch(l){}else try{bk("remote_sid",a.join(","),-1,"/")}catch(l){}}
function Ft(){var a=rq("yt-remote-connected-devices")||[];a.sort(ib);return a}
function It(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ta(a,function(d,e){return 0==e?d:d.substring(c.length)})}
function Jt(a){oq("yt-remote-connected-devices",a,86400)}
function Gt(){if(Kt)return Kt;var a=rq("yt-remote-device-id");a||(a=st(),oq("yt-remote-device-id",a,31536E3));for(var b=Ft(),c=1,d=a;Za(b,d);)c++,d=a+"#"+c;return Kt=d}
function Lt(){return rq("yt-remote-session-browser-channel")}
function Ht(){return rq("yt-remote-session-screen-id")}
function Mt(a){5<a.length&&(a=a.slice(a.length-5));var b=Ta(Nt(),function(d){return d.loungeToken}),c=Ta(a,function(d){return d.loungeToken});
Wa(c,function(d){return!Za(b,d)})&&Ot();
oq("yt-remote-local-screens",a,31536E3)}
function Nt(){return rq("yt-remote-local-screens")||[]}
function Ot(){oq("yt-remote-lounge-token-expiration",!0,86400)}
function Pt(a,b){oq("yt-remote-session-browser-channel",a);oq("yt-remote-session-screen-id",b);var c=Ft(),d=Gt();Za(c,d)||c.push(d);Jt(c);Et()}
function Qt(a){a||(sq("yt-remote-session-screen-id"),sq("yt-remote-session-video-id"));Et();a=Ft();ab(a,Gt());Jt(a)}
function Rt(){if(!Dt){var a=Qj();a&&(Dt=new wj(a))}return Dt?!!Dt.get("yt-remote-use-staging-server"):!1}
var Kt="";function St(a){wt.call(this,"LocalScreenService");this.h=a;this.g=NaN;Tt(this);this.info("Initializing with "+rt(this.f))}
A(St,wt);h=St.prototype;h.start=function(){Tt(this)&&this.w("screenChange");!rq("yt-remote-lounge-token-expiration")&&Ut(this);Q(this.g);this.g=P(v(this.start,this),1E4)};
h.add=function(a,b){Tt(this);xt(this,a);Vt(this,!1);this.w("screenChange");b(a);a.token||Ut(this)};
h.remove=function(a,b){var c=Tt(this);At(this,a)&&(Vt(this,!1),c=!0);b(a);c&&this.w("screenChange")};
h.Db=function(a,b,c,d){var e=Tt(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Vt(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.w("screenChange")};
h.B=function(){Q(this.g);St.J.B.call(this)};
function Ut(a){if(a.f.length){var b=Ta(a.f,function(d){return d.id}),c=jt(a.h,"/pairing/get_lounge_token_batch");
kt(a.h,c,{screen_ids:b.join(",")},v(a.Nd,a),v(a.Md,a))}}
h.Nd=function(a){Tt(this);var b=this.f.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Vt(this,!b);b&&et(this.A,"Missed "+b+" lounge tokens.")};
h.Md=function(a){et(this.A,"Requesting lounge tokens failed: "+a)};
function Tt(a){var b=pt(Nt());b=Sa(b,function(c){return!c.uuid});
return zt(a,b)}
function Vt(a,b){Mt(Ta(a.f,nt));b&&Ot()}
;function Wt(a,b){vt.call(this);this.u=b;var c=rq("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.u(),f=0,g=e.length;f<g;++f){var k=e[f].id;d[k]=Za(c,k)}this.f=d;this.j=a;this.h=this.i=NaN;this.g=null;Xt("Initialized with "+uh(this.f))}
sa(Wt,vt);h=Wt.prototype;h.start=function(){var a=parseInt(rq("yt-remote-fast-check-period")||"0",10);(this.i=y()-144E5<a?0:a)?Yt(this):(this.i=y()+3E5,oq("yt-remote-fast-check-period",this.i),this.Tb())};
h.isEmpty=function(){return ub(this.f)};
h.update=function(){Xt("Updating availability on schedule.");var a=this.u(),b=nb(this.f,function(c,d){return c&&!!ut(a,d)},this);
Zt(this,b)};
function $t(a,b,c){var d=jt(a.j,"/pairing/get_screen_availability");kt(a.j,d,{lounge_token:b.token},v(function(e){e=e.screens||[];for(var f=0,g=e.length;f<g;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),v(function(){c(!1)},a))}
h.B=function(){Q(this.h);this.h=NaN;this.g&&(this.g.abort(),this.g=null);vt.prototype.B.call(this)};
function Zt(a,b){a:if(ob(b)!=ob(a.f))var c=!1;else{c=rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.f[c[d]]){c=!1;break a}c=!0}c||(Xt("Updated online screens: "+uh(a.f)),a.f=b,a.w("screenChange"));au(a)}
function Yt(a){isNaN(a.h)||Q(a.h);a.h=P(v(a.Tb,a),0<a.i&&a.i<y()?2E4:1E4)}
h.Tb=function(){Q(this.h);this.h=NaN;this.g&&this.g.abort();var a=bu(this);if(ob(a)){var b=jt(this.j,"/pairing/get_screen_availability");this.g=kt(this.j,b,{lounge_token:rb(a).join(",")},v(this.Le,this,a),v(this.Ke,this))}else Zt(this,{}),Yt(this)};
h.Le=function(a,b){this.g=null;a:{var c=rb(bu(this));var d=rb(a);if(Ga(c)&&Ga(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Zt(this,d);Yt(this)}else this.M("Changing Screen set during request."),this.Tb()};
h.Ke=function(a){this.M("Screen availability failed: "+a);this.g=null;Yt(this)};
function Xt(a){et("OnlineScreenService",a)}
h.M=function(a){et("OnlineScreenService",a)};
function bu(a){var b={};B(a.u(),function(c){c.token?b[c.token]=c.id:this.M("Requesting availability of screen w/o lounge token.")});
return b}
function au(a){a=rb(nb(a.f,function(b){return b}));
a.sort(ib);a.length?oq("yt-remote-online-screen-ids",a.join(","),60):sq("yt-remote-online-screen-ids")}
;function Y(a){wt.call(this,"ScreenService");this.u=a;this.g=this.h=null;this.i=[];this.j={};cu(this)}
A(Y,wt);h=Y.prototype;h.start=function(){this.h.start();this.g.start();this.f.length&&(this.w("screenChange"),this.g.isEmpty()||this.w("onlineScreenChange"))};
h.add=function(a,b,c){this.h.add(a,b,c)};
h.remove=function(a,b,c){this.h.remove(a,b,c);this.g.update()};
h.Db=function(a,b,c,d){this.h.Gb(a)?this.h.Db(a,b,c,d):(a="Updating name of unknown screen: "+a.name,et(this.A,a),d(Error(a)))};
h.ca=function(a){return a?this.f:db(this.f,Sa(this.i,function(b){return!this.Gb(b)},this))};
h.kd=function(){return Sa(this.ca(!0),function(a){return!!this.g.f[a.id]},this)};
function du(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.j[b]);var g=a.ca();if(g=(c?ut(g,c):null)||ut(g,b)){g.uuid=b;var k=eu(a,g);$t(a.g,k,function(l){e(l?k:null)})}else c?fu(a,c,v(function(l){var m=eu(this,new lt({name:d,
screenId:c,loungeToken:l,dialId:b||""}));$t(this.g,m,function(p){e(p?m:null)})},a),f):e(null)}
h.ld=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Bt(this.u,a,b,c);f.subscribe("pairingComplete",v(function(g){bf(f);d(eu(this,g))},this));
f.subscribe("pairingFailed",function(g){bf(f);e(g)});
f.start();return v(f.stop,f)};
function gu(a,b){for(var c=0,d=a.f.length;c<d;++c)if(a.f[c].name==b)return a.f[c];return null}
h.rf=function(a,b,c,d){kl(jt(this.u,"/pairing/get_screen"),{method:"POST",ja:{pairing_code:a},timeout:5E3,onSuccess:v(function(e,f){var g=new lt(f.screen||{});if(!g.name||gu(this,g.name)){a:{var k=g.name;for(var l=2,m=b(k,l);gu(this,m);){l++;if(20<l)break a;m=b(k,l)}k=m}g.name=k}c(eu(this,g))},this),
onError:v(function(e){d(Error("pairing request failed: "+e.status))},this),
Ka:v(function(){d(Error("pairing request timed out."))},this)})};
h.B=function(){bf(this.h);bf(this.g);Y.J.B.call(this)};
function fu(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={ja:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,g){var k=g&&g.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
kl(jt(a.u,"/pairing/get_lounge_token_batch"),e)}
function hu(a){a.f=a.h.ca();var b=a.j,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.f.length;b<d;++b){var e=a.f[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+rt(a.f))}
h.Sd=function(){hu(this);this.w("screenChange");this.g.update()};
function cu(a){iu(a);a.h=new St(a.u);a.h.subscribe("screenChange",v(a.Sd,a));hu(a);a.i=pt(rq("yt-remote-automatic-screen-cache")||[]);iu(a);a.info("Initializing automatic screens: "+rt(a.i));a.g=new Wt(a.u,v(a.ca,a,!0));a.g.subscribe("screenChange",v(function(){this.w("onlineScreenChange")},a))}
function eu(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=ut(a.i,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.i.push(b),oq("yt-remote-automatic-screen-cache",Ta(a.i,nt)));iu(a);a.j[b.uuid]=b.id;oq("yt-remote-device-id-map",a.j,31536E3);return b}
function iu(a){a.j=rq("yt-remote-device-id-map")||{}}
Y.prototype.dispose=Y.prototype.dispose;function ju(a,b,c){vt.call(this);this.O=c;this.I=a;this.f=b;this.h=null}
A(ju,vt);h=ju.prototype;h.Ab=function(a){this.h=a;this.w("sessionScreen",this.h)};
h.Z=function(a){this.K()||(a&&ku(this,""+a),this.h=null,this.w("sessionScreen",null))};
h.info=function(a){et(this.O,a)};
function ku(a,b){et(a.O,b)}
h.nd=function(){return null};
h.Vb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,v(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),v(function(){ku(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
h.B=function(){this.Vb("");ju.J.B.call(this)};function lu(a,b){ju.call(this,a,b,"CastSession");this.g=null;this.i=0;this.u=v(this.sf,this);this.j=v(this.Te,this);this.i=P(v(function(){mu(this,null)},this),12E4)}
A(lu,ju);h=lu.prototype;h.Ub=function(a){if(this.g){if(this.g==a)return;ku(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.u);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j)}this.g=a;this.g.addUpdateListener(this.u);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.j);nu(this)};
h.Sa=function(a){this.info("launchWithParams no-op for Cast: "+uh(a))};
h.stop=function(){this.g?this.g.stop(v(function(){this.Z()},this),v(function(){this.Z(Error("Failed to stop receiver app."))},this)):this.Z(Error("Stopping cast device witout session."))};
h.Vb=u;h.B=function(){this.info("disposeInternal");Q(this.i);this.i=0;this.g&&(this.g.removeUpdateListener(this.u),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.j));this.g=null;lu.J.B.call(this)};
function nu(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+uh(void 0));var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,u,v(function(){ku(this,"Failed to send message: getMdxSessionStatus.")},a)):ku(a,"Sending yt message without session: "+uh(b))}
h.Te=function(a,b){if(!this.K())if(b){var c=Ah(b);if(Ia(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+uh(c));switch(d){case "mdxSessionStatus":mu(this,c.screenId);break;default:ku(this,"Unknown youtube message: "+d)}}else ku(this,"Unable to parse message.")}else ku(this,"No data in message.")};
function mu(a,b){Q(a.i);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.h||a.h.id!=b){var c=v(a.Ab,a),d=v(a.Z,a);a.sc(b,c,d,5)}}else a.Z(Error("Waiting for session status timed out."))}
h.sc=function(a,b,c,d){du(this.I,this.f.label,a,this.f.friendlyName,v(function(e){e?b(e):0<=d?(ku(this,"Screen "+a+" appears to be offline. "+d+" retries left."),P(v(this.sc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
h.nd=function(){return this.g};
h.sf=function(a){this.K()||a||(ku(this,"Cast session died."),this.Z())};function ou(a,b,c){ju.call(this,a,b,"DialSession");this.i=this.F=null;this.L="";this.S=c;this.j=null;this.A=u;this.u=NaN;this.N=v(this.vf,this);this.g=u}
A(ou,ju);h=ou.prototype;h.Ub=function(a){this.i=a;this.i.addUpdateListener(this.N)};
h.Sa=function(a){this.j=a;this.A()};
h.stop=function(){this.g();this.g=u;Q(this.u);this.i?this.i.stop(v(this.Z,this,null),v(this.Z,this,"Failed to stop DIAL device.")):this.Z()};
h.B=function(){this.g();this.g=u;Q(this.u);this.i&&this.i.removeUpdateListener(this.N);this.i=null;ou.J.B.call(this)};
function pu(a){a.g=a.I.ld(a.L,a.f.label,a.f.friendlyName,v(function(b){this.g=u;this.Ab(b)},a),v(function(b){this.g=u;
this.Z(b)},a))}
h.vf=function(a){this.K()||a||(ku(this,"DIAL session died."),this.g(),this.g=u,this.Z())};
function qu(a){var b={};b.pairingCode=a.L;b.theme=a.S;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Rt()&&(b.env_useStageMdx=1);return Rc(b)}
h.Pb=function(a){this.L=st();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,qu(this));a(b);pu(this)}else this.A=v(function(){Q(this.u);this.A=u;this.u=NaN;var c=new chrome.cast.DialLaunchResponse(!0,qu(this));a(c);pu(this)},this),this.u=P(v(function(){this.A()},this),100)};
h.Xd=function(a,b,c){du(this.I,this.F.receiver.label,a,this.f.friendlyName,v(function(d){d&&d.token?(this.Ab(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Pb(b,c)},this),v(function(d){ku(this,"Failed to get DIAL screen: "+d);
this.Pb(b,c)},this))};function ru(a,b){ju.call(this,a,b,"ManualSession");this.g=P(v(this.Sa,this,null),150)}
A(ru,ju);ru.prototype.stop=function(){this.Z()};
ru.prototype.Ub=u;ru.prototype.Sa=function(){Q(this.g);this.g=NaN;var a=ut(this.I.ca(),this.f.label);a?this.Ab(a):this.Z(Error("No such screen"))};
ru.prototype.B=function(){Q(this.g);this.g=NaN;ru.J.B.call(this)};function su(a,b,c,d){vt.call(this);this.g=a;this.A=b||"233637DE";this.u=c||"cl";this.F=d||!1;this.f=null;this.j=!1;this.h=[];this.i=v(this.Ie,this)}
A(su,vt);h=su.prototype;
h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.A);this.F||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=v(this.Je,this);c=new chrome.cast.ApiConfig(c,v(this.Sc,this),f,d,e);c.customDialLaunchCallback=v(this.ye,this);chrome.cast.initialize(c,v(function(){this.K()||(chrome.cast.addReceiverActionListener(this.i),
at(),this.g.subscribe("onlineScreenChange",v(this.md,this)),this.h=tu(this),chrome.cast.setCustomReceivers(this.h,u,v(function(g){this.M("Failed to set initial custom receivers: "+uh(g))},this)),this.w("yt-remote-cast2-availability-change",uu(this)),b(!0))},this),v(function(g){this.M("Failed to initialize API: "+uh(g));
b(!1)},this))};
h.df=function(a,b){vu("Setting connected screen ID: "+a+" -> "+b);if(this.f){var c=this.f.h;if(!a||c&&c.id!=a)vu("Unsetting old screen status: "+this.f.f.friendlyName),wu(this,null)}if(a&&b){if(!this.f){c=ut(this.g.ca(),a);if(!c){vu("setConnectedScreenStatus: Unknown screen.");return}var d=xu(this,c);d||(vu("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.h.push(d),chrome.cast.setCustomReceivers(this.h,
u,v(function(e){this.M("Failed to set initial custom receivers: "+uh(e))},this)));
vu("setConnectedScreenStatus: new active receiver: "+d.friendlyName);wu(this,new ru(this.g,d),!0)}this.f.Vb(b)}else vu("setConnectedScreenStatus: no screen.")};
function xu(a,b){return b?Xa(a.h,function(c){return mt(b,c.label)},a):null}
h.ef=function(a){this.K()?this.M("Setting connection data on disposed cast v2"):this.f?this.f.Sa(a):this.M("Setting connection data without a session")};
h.uf=function(){this.K()?this.M("Stopping session on disposed cast v2"):this.f?(this.f.stop(),wu(this,null)):vu("Stopping non-existing session")};
h.requestSession=function(){chrome.cast.requestSession(v(this.Sc,this),v(this.Me,this))};
h.B=function(){this.g.Ec("onlineScreenChange",v(this.md,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);ab(t("yt.mdx.remote.debug.handlers_")||[],bt);bf(this.f);su.J.B.call(this)};
function vu(a){et("Controller",a)}
h.M=function(a){et("Controller",a)};
function bt(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function uu(a){return a.j||!!a.h.length||!!a.f}
function wu(a,b,c){b!=a.f&&(bf(a.f),(a.f=b)?(c?a.w("yt-remote-cast2-receiver-resumed",b.f):a.w("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",v(a.Tc,a,b)),b.h?a.w("yt-remote-cast2-session-change",b.h):c&&a.f.Sa(null)):a.w("yt-remote-cast2-session-change",null))}
h.Tc=function(a,b){this.f==a&&(b||wu(this,null),this.w("yt-remote-cast2-session-change",b))};
h.Ie=function(a,b){if(!this.K())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),vu("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.f)if(this.f.f.label!=a.label)vu("onReceiverAction_: Stopping active receiver: "+this.f.f.friendlyName),this.f.stop();else{vu("onReceiverAction_: Casting to active receiver.");this.f.h&&this.w("yt-remote-cast2-session-change",this.f.h);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:wu(this,
new ru(this.g,a));break;case chrome.cast.ReceiverType.DIAL:wu(this,new ou(this.g,a,this.u));break;case chrome.cast.ReceiverType.CAST:wu(this,new lu(this.g,a));break;default:this.M("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.f&&this.f.f.label==a.label?this.f.stop():this.M("Stopping receiver w/o session: "+a.friendlyName)}else this.M("onReceiverAction_ called without receiver.")};
h.ye=function(a){if(this.K())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.M("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.f?this.f.f:null;if(!c||c.label!=b.label)return this.M("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.f.h)return vu("Reselecting dial screen."),
this.w("yt-remote-cast2-session-change",this.f.h),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.M('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);wu(this,new ou(this.g,b,this.u))}b=this.f;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise(v(b.Xd,b,(b.F.extraData||{}).screenId||null)):new Promise(v(b.Pb,b))};
h.Sc=function(a){if(!this.K()){vu("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.f)if(b.receiverType==chrome.cast.ReceiverType.CAST)vu("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),wu(this,new lu(this.g,b),!0);else{this.M("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.f.f,d=ut(this.g.ca(),c.label);d&&mt(d,b.label)&&c.receiverType!=
chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(vu("onSessionEstablished_: manual to cast session change "+b.friendlyName),bf(this.f),this.f=new lu(this.g,b),this.f.subscribe("sessionScreen",v(this.Tc,this,this.f)),this.f.Sa(null));this.f.Ub(a)}}};
h.tf=function(){return this.f?this.f.nd():null};
h.Me=function(a){this.K()||(this.M("Failed to estabilish a session: "+uh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&wu(this,null))};
h.Je=function(a){vu("Receiver availability updated: "+a);if(!this.K()){var b=uu(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;uu(this)!=b&&this.w("yt-remote-cast2-availability-change",uu(this))}};
function tu(a){var b=a.g.kd(),c=a.f&&a.f.f;a=Ta(b,function(d){c&&mt(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=xu(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
h.md=function(){this.K()||(this.h=tu(this),vu("Updating custom receivers: "+uh(this.h)),chrome.cast.setCustomReceivers(this.h,u,v(function(){this.M("Failed to set custom receivers.")},this)),this.w("yt-remote-cast2-availability-change",uu(this)))};
su.prototype.setLaunchParams=su.prototype.ef;su.prototype.setConnectedScreenStatus=su.prototype.df;su.prototype.stopSession=su.prototype.uf;su.prototype.getCastSession=su.prototype.tf;su.prototype.requestSession=su.prototype.requestSession;su.prototype.init=su.prototype.init;su.prototype.dispose=su.prototype.dispose;function yu(a,b,c,d,e,f){zu()?Bu(a,d,e,f)&&(Cu(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Du(b):(window.__onGCastApiAvailable=function(g,k){g?Du(b):(Eu("Failed to load cast API: "+k),Fu(!1),Cu(!1),sq("yt-remote-cast-available"),sq("yt-remote-cast-receiver"),Gu(),b(!1))},c?Rn("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?ed():!window.chrome||!window.navigator.presentation||
0<=window.navigator.userAgent.indexOf("Edge")?bd():(dd(),$c(Zc.map(cd))))):Au("Cannot initialize because not running Chrome")}
function Gu(){Au("dispose");var a=Hu();a&&a.dispose();z("yt.mdx.remote.cloudview.instance_",null);Iu(!1);Nk(Ju);Ju.length=0}
function Ku(){Au("clearCurrentReceiver");sq("yt-remote-cast-receiver")}
function Lu(){return rq("yt-remote-cast-installed")?Hu()?Hu().getCastSession():(Eu("getCastSelector: Cast is not initialized."),null):(Eu("getCastSelector: Cast API is not installed!"),null)}
function Mu(a,b){Nu()?Hu().setConnectedScreenStatus(a,b):Eu("setConnectedScreenStatus called before ready.")}
function zu(){var a=0<=ec.search(/ (CrMo|Chrome|CriOS)\//);return Nd||a}
function Bu(a,b,c,d){var e=!1;Hu()||(a=new su(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){oq("yt-remote-cast-available",f);Ok("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){Au("onReceiverSelected: "+f.friendlyName);
oq("yt-remote-cast-receiver",f);Ok("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){Au("onReceiverResumed: "+f.friendlyName);
oq("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){Au("onSessionChange: "+qt(f));
f||sq("yt-remote-cast-receiver");Ok("yt-remote-cast2-session-change",f)}),z("yt.mdx.remote.cloudview.instance_",a),e=!0);
Au("cloudview.createSingleton_: "+e);return e}
function Hu(){return t("yt.mdx.remote.cloudview.instance_")}
function Du(a){Fu(!0);Cu(!1);Hu().init(!1,function(b){b?(Iu(!0),U("yt-remote-cast2-api-ready")):(Eu("Failed to initialize cast API."),Fu(!1),sq("yt-remote-cast-available"),sq("yt-remote-cast-receiver"),Gu());a(b)})}
function Au(a){et("cloudview",a)}
function Eu(a){et("cloudview",a)}
function Fu(a){Au("setCastInstalled_ "+a);oq("yt-remote-cast-installed",a)}
function Nu(){return!!t("yt.mdx.remote.cloudview.apiReady_")}
function Iu(a){Au("setApiReady_ "+a);z("yt.mdx.remote.cloudview.apiReady_",a)}
function Cu(a){z("yt.mdx.remote.cloudview.initializing_",a)}
var Ju=[];function Ou(a){this.index=-1;this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.h=this.i=0;this.f=null;this.hasNext=this.l=!1;this.G=this.g=this.u=this.A=0;this.j=NaN;this.C=!1;this.reset(a)}
function Pu(a){a.audioTrackId=null;a.f=null;a.playerState=-1;a.l=!1;a.hasNext=!1;a.i=0;a.h=y();a.A=0;a.u=0;a.g=0;a.G=0;a.j=NaN;a.C=!1}
Ou.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";Pu(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.f=a.trackData,this.l=a.hasPrevious,this.hasNext=a.hasNext,this.i=a.playerTime,this.h=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.g=a.duration,this.G=a.loadedTime,this.j=a.liveIngestionTime,this.C=
!isNaN(this.j))};
Ou.prototype.isAdPlaying=function(){return 1081==this.playerState};
function Qu(a,b){a.i=b;a.h=y()}
function Ru(a){switch(a.playerState){case 1:case 1081:return(y()-a.h)/1E3+a.i;case -1E3:return 0}return a.i}
Ou.prototype.getDuration=function(){return this.C?this.g+(1==this.playerState?(y()-this.h)/1E3:0):this.g};
function Su(a,b,c){var d=a.videoId;a.videoId=b;a.index=c;b!=d&&Pu(a)}
function Tu(a){var b={};b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=yb(a.f);b.hasPrevious=a.l;b.hasNext=a.hasNext;b.playerTime=a.i;b.playerTimeAt=a.h;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.g;b.loadedTime=a.G;b.liveIngestionTime=a.j;return b}
Ou.prototype.clone=function(){return new Ou(Tu(this))};function Uu(a,b){vt.call(this);this.f=0;this.i=a;this.u=[];this.j=new Rj;this.h=this.g=null;this.I=v(this.oe,this);this.A=v(this.jb,this);this.F=v(this.ne,this);this.L=v(this.ue,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Wb,this),Vu(this))):c=3;0!=c&&(b?this.Wb(c):P(v(function(){this.Wb(c)},this),0));
var d=Lu();d&&Wu(this,d);this.subscribe("yt-remote-cast2-session-change",this.L)}
sa(Uu,vt);function Xu(a){return new Ou(a.i.getPlayerContextData())}
h=Uu.prototype;h.play=function(){1==this.f?(this.g?this.g.play(null,u,Yu(this,"play")):Zu(this,"play"),$u(this,1,Ru(Xu(this))),this.w("remotePlayerChange")):av(this,this.play)};
h.pause=function(){1==this.f?(this.g?this.g.pause(null,u,Yu(this,"pause")):Zu(this,"pause"),$u(this,2,Ru(Xu(this))),this.w("remotePlayerChange")):av(this,this.pause)};
h.seekTo=function(a){if(1==this.f){if(this.g){var b=Xu(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.g.seek(c,u,Yu(this,"seekTo",{newTime:a}))}else Zu(this,"seekTo",{newTime:a});$u(this,3,a);this.w("remotePlayerChange")}else av(this,x(this.seekTo,a))};
h.stop=function(){if(1==this.f){this.g?this.g.stop(null,u,Yu(this,"stopVideo")):Zu(this,"stopVideo");var a=Xu(this);a.index=-1;a.videoId="";Pu(a);bv(this,a);this.w("remotePlayerChange")}else av(this,this.stop)};
h.setVolume=function(a,b){if(1==this.f){var c=Xu(this);if(this.h){if(c.volume!=a){var d=Math.round(a)/100;this.h.setReceiverVolumeLevel(d,v(function(){ht("set receiver volume: "+d)},this),v(function(){this.M("failed to set receiver volume.")},this))}c.muted!=b&&this.h.setReceiverMuted(b,v(function(){ht("set receiver muted: "+b)},this),v(function(){this.M("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Zu(this,"setVolume",e)}c.muted=b;c.volume=a;bv(this,c)}else av(this,x(this.setVolume,a,b))};
h.setAudioTrack=function(a,b){if(1==this.f){var c=b.getLanguageInfo().getId();Zu(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=Xu(this);d.audioTrackId=c;bv(this,d)}else av(this,x(this.setAudioTrack,a,b))};
h.ac=function(a){1==this.f?Zu(this,"addVideos",{listId:a}):av(this,x(this.ac,a))};
h.bd=function(a){1==this.f?Zu(this,"removeVideo",{videoId:a}):av(this,x(this.bd,a))};
h.Mc=function(a,b,c){1==this.f?Zu(this,"moveVideo",{videoId:a,delta:(b>=c?c:c-1)-b}):av(this,x(this.Mc,a,b,c))};
h.playVideo=function(a,b,c,d,e,f,g){var k=Xu(this);c=c||0;var l={videoId:a,currentIndex:c};Su(k,a,c);void 0!==b&&(Qu(k,b),l.currentTime=b);void 0!==d&&(l.listId=d);null!=e&&(l.playerParams=e);null!=f&&(l.clickTrackingParams=f);null!=g&&(l.locationInfo=uh(g));Zu(this,"setPlaylist",l);d||bv(this,k)};
h.ad=function(a,b){if(1==this.f){if(a&&b){var c=Xu(this);Su(c,a,b);bv(this,c)}Zu(this,"previous")}else av(this,x(this.ad,a,b))};
h.nextVideo=function(a,b){if(1==this.f){if(a&&b){var c=Xu(this);Su(c,a,b);bv(this,c)}Zu(this,"next")}else av(this,x(this.nextVideo,a,b))};
h.ic=function(){if(1==this.f){Zu(this,"clearPlaylist");var a=Xu(this);a.reset();bv(this,a);this.w("remotePlayerChange")}else av(this,this.ic)};
h.oc=function(){1==this.f?Zu(this,"dismissAutoplay"):av(this,this.oc)};
h.ed=function(a){1==this.f?a?Zu(this,"setAutoplayMode",{autoplayMode:"ENABLED"}):Zu(this,"setAutoplayMode",{autoplayMode:"DISABLED"}):av(this,x(this.ed,a))};
h.dispose=function(){if(3!=this.f){var a=this.f;this.f=3;this.w("proxyStateChange",a,this.f)}vt.prototype.dispose.call(this)};
h.B=function(){cv(this);this.i=null;this.j.clear();Wu(this,null);vt.prototype.B.call(this)};
function Vu(a){B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.u.push(this.i.subscribe(b,x(this.Ge,b),this))},a)}
function cv(a){B(a.u,function(b){this.i.unsubscribeByKey(b)},a);
a.u.length=0}
function av(a,b){var c=a.j;50>c.f.length+c.g.length&&a.j.g.push(b)}
function $u(a,b,c){var d=Xu(a);Qu(d,c);-1E3!=d.playerState&&(d.playerState=b);bv(a,d)}
function Zu(a,b,c){a.i.sendMessage(b,c)}
function bv(a,b){cv(a);a.i.setPlayerContextData(Tu(b));Vu(a)}
h.Wb=function(a){if((a!=this.f||2==a)&&3!=this.f&&0!=a){var b=this.f;this.f=a;this.w("proxyStateChange",b,a);if(1==a)for(;!this.j.isEmpty();)b=a=this.j,0==b.f.length&&(b.f=b.g,b.f.reverse(),b.g=[]),a.f.pop().apply(this);else 3==a&&this.dispose()}};
h.Ge=function(a,b){this.w(a,b)};
function Wu(a,b){a.h&&(a.h.removeUpdateListener(a.I),a.h.removeMediaListener(a.A),a.jb(null));a.h=b;a.h&&(ht("Setting cast session: "+a.h.sessionId),a.h.addUpdateListener(a.I),a.h.addMediaListener(a.A),a.h.media.length&&a.jb(a.h.media[0]))}
h.oe=function(a){if(!a)this.jb(null),Wu(this,null);else if(this.h.receiver.volume){a=this.h.receiver.volume;var b=Xu(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)ht("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,bv(this,b)}};
h.jb=function(a){ht("Cast media: "+!!a);this.g&&this.g.removeUpdateListener(this.F);if(this.g=a)this.g.addUpdateListener(this.F),dv(this),this.w("remotePlayerChange")};
function dv(a){var b=a.g.media,c=a.g.customData;if(b&&c){var d=Xu(a);b.contentId!=d.videoId&&ht("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;Qu(d,a.g.getEstimatedTime());bv(a,d)}else ht("No cast media video. Ignoring state update.")}
h.ne=function(a){a?(dv(this),this.w("remotePlayerChange")):this.jb(null)};
h.ue=function(){var a=Lu();a&&Wu(this,a)};
h.M=function(a){et("CP",a)};
function Yu(a,b,c){return v(function(d){this.M("Failed to "+b+" with cast v2 channel. Error code: "+d.code);d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.M("Retrying "+b+" using MDx browser channel."),Zu(this,b,c))},a)}
;function Z(a,b,c){vt.call(this);this.j=NaN;this.O=!1;this.F=this.A=this.L=this.N=NaN;this.I=[];this.i=this.u=this.h=this.D=this.f=null;this.ma=a;this.I.push(O(window,"beforeunload",v(this.Kd,this)));this.g=[];this.D=new Ou;this.S=b.id;this.f=ev(this,c);this.f.subscribe("handlerOpened",this.se,this);this.f.subscribe("handlerClosed",this.pe,this);this.f.subscribe("handlerError",this.qe,this);this.f.subscribe("handlerMessage",this.re,this);Vs(this.f,b.token);this.subscribe("remoteQueueChange",function(){var d=
this.D.videoId;Ht()&&oq("yt-remote-session-video-id",d)},this)}
sa(Z,vt);h=Z.prototype;
h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,g=b.index,k={videoId:d},l=b.currentTime,m=b.locationInfo;void 0!==l&&(k.currentTime=5>=l?0:l);e&&(k.playerParams=e);m&&(k.locationInfo=m);f&&(k.clickTrackingParams=f);c&&(k.listId=c);void 0!==g&&(k.currentIndex=g);c&&(this.D.listId=c);this.D.videoId=d;this.D.index=g||0;this.D.state=3;Qu(this.D,l);this.i="UNSUPPORTED";fv("Connecting with setPlaylist and params: "+uh(k));this.f.connect({method:"setPlaylist",params:uh(k)},
a,Lt())}else fv("Connecting without params"),this.f.connect({},a,Lt());gv(this)};
h.dispose=function(){this.K()||(this.w("beforeDispose"),hv(this,3));vt.prototype.dispose.call(this)};
h.B=function(){iv(this);jv(this);kv(this);Q(this.A);this.A=NaN;Q(this.F);this.F=NaN;this.h=null;Ck(this.I);this.I.length=0;this.f.dispose();vt.prototype.B.call(this);this.i=this.u=this.g=this.D=this.f=null};
function fv(a){et("conn",a)}
h.Kd=function(){this.Oa(2)};
function ev(a,b){return new Rs(jt(a.ma,"/bc"),b)}
function hv(a,b){a.w("proxyStateChange",b)}
function gv(a){a.j=P(v(function(){fv("Connecting timeout");this.Oa(1)},a),2E4)}
function iv(a){Q(a.j);a.j=NaN}
function kv(a){Q(a.N);a.N=NaN}
function lv(a){jv(a);a.L=P(v(function(){mv(this,"getNowPlaying")},a),2E4)}
function jv(a){Q(a.L);a.L=NaN}
h.se=function(){fv("Channel opened");this.O&&(this.O=!1,kv(this),this.N=P(v(function(){fv("Timing out waiting for a screen.");this.Oa(1)},this),15E3));
Pt(Ts(this.f),this.S)};
h.pe=function(){fv("Channel closed");isNaN(this.j)?Qt(!0):Qt();this.dispose()};
h.qe=function(a){Qt();isNaN(this.eb())?(fv("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,fv("Channel error: "+a+" with reconnection in "+this.eb()+" ms"),hv(this,2))};
function nv(a,b){b&&(iv(a),kv(a));b==(Us(a.f)&&isNaN(a.j))?b&&(hv(a,1),mv(a,"getSubtitlesTrack")):b?(a.qc()&&a.D.reset(),hv(a,1),mv(a,"getNowPlaying"),ov(a)):a.Oa(1)}
function pv(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.D.videoId&&(ub(b.params)?a.D.f=null:a.D.f=b.params,a.w("remotePlayerChange"))}
function qv(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.D.listId=b.params.listId||a.D.listId;Su(a.D,c,d);a.w("remoteQueueChange")}
function rv(a,b){b.params=b.params||{};qv(a,b);sv(a,b);a.w("autoplayDismissed")}
function sv(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);Qu(a.D,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.D.playerState&&(c=-1E3);a.D.playerState=c;c=Number(b.params.loadedTime);a.D.G=isNaN(c)?0:c;c=Number(b.params.duration);a.D.g=isNaN(c)?0:c;c=a.D;var d=Number(b.params.liveIngestionTime);c.j=d;c.C=isNaN(d)?!1:!0;c=a.D;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.D.playerState?
lv(a):jv(a);a.w("remotePlayerChange")}
function tv(a,b){if(-1E3!=a.D.playerState){var c=1085;switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.D.playerState=c;c=parseInt(b.params.currentTime,10);Qu(a.D,isNaN(c)?0:c);a.w("remotePlayerChange")}}
function uv(a,b){var c="true"==b.params.muted;a.D.volume=parseInt(b.params.volume,10);a.D.muted=c;a.w("remotePlayerChange")}
function vv(a,b){a.u=b.params.videoId;a.w("nowAutoplaying",parseInt(b.params.timeout,10))}
function wv(a,b){var c="true"==b.params.hasNext;a.D.l="true"==b.params.hasPrevious;a.D.hasNext=c;a.w("previousNextChange")}
h.re=function(a){a.params?fv("Received: action="+a.action+", params="+uh(a.params)):fv("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Ah(a.params.devices);this.g=Ta(a,function(c){return new Ms(c)});
a=!!Xa(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
nv(this,a);break;case "loungeScreenDisconnected":cb(this.g,function(c){return"LOUNGE_SCREEN"==c.type});
nv(this,!1);break;case "remoteConnected":var b=new Ms(Ah(a.params.device));Xa(this.g,function(c){return c.equals(b)})||$a(this.g,b);
break;case "remoteDisconnected":b=new Ms(Ah(a.params.device));cb(this.g,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":qv(this,a);break;case "nowPlaying":rv(this,a);break;case "onStateChange":sv(this,a);break;case "onAdStateChange":tv(this,a);break;case "onVolumeChanged":uv(this,a);break;case "onSubtitlesTrackChanged":pv(this,a);break;case "nowAutoplaying":vv(this,a);break;case "autoplayDismissed":this.w("autoplayDismissed");break;case "autoplayUpNext":this.u=a.params.videoId||null;this.w("autoplayUpNext",this.u);break;case "onAutoplayModeChanged":this.i=
a.params.autoplayMode;this.w("autoplayModeChange",this.i);"DISABLED"==this.i&&this.w("autoplayDismissed");break;case "onHasPreviousNextChanged":wv(this,a);break;case "requestAssistedSignIn":this.w("assistedSignInRequested",a.params.authCode);break;default:fv("Unrecognized action: "+a.action)}};
h.af=function(){if(this.h){var a=this.h;this.h=null;this.D.videoId!=a&&mv(this,"getNowPlaying")}};
h.Gd=function(){var a=3;this.K()||(a=0,isNaN(this.eb())?Us(this.f)&&isNaN(this.j)&&(a=1):a=2);return a};
h.Oa=function(a){fv("Disconnecting with "+a);iv(this);this.w("beforeDisconnect",a);1==a&&Qt();Ss(this.f,a);this.dispose()};
h.Ed=function(){var a=this.D;this.h&&(a=this.D.clone(),Su(a,this.h,a.index));return Tu(a)};
h.ff=function(a){var b=new Ou(a);b.videoId&&b.videoId!=this.D.videoId&&(this.h=b.videoId,Q(this.A),this.A=P(v(this.af,this),5E3));var c=[];this.D.listId==b.listId&&this.D.videoId==b.videoId&&this.D.index==b.index||c.push("remoteQueueChange");this.D.playerState==b.playerState&&this.D.volume==b.volume&&this.D.muted==b.muted&&Ru(this.D)==Ru(b)&&uh(this.D.f)==uh(b.f)||c.push("remotePlayerChange");this.D.reset(a);B(c,function(d){this.w(d)},this)};
h.qc=function(){var a=this.f.l.id,b=Xa(this.g,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
h.eb=function(){var a=this.f;return a.g.isActive()?a.g.g-y():NaN};
h.Ad=function(){return this.i||"UNSUPPORTED"};
h.Bd=function(){return this.u||""};
h.lf=function(){if(!isNaN(this.eb())){var a=this.f.g,b=a.f;b.stop();b.tc();a.start()}};
function ov(a){Q(a.F);a.F=P(v(a.Oa,a,1),864E5)}
function mv(a,b,c){c?fv("Sending: action="+b+", params="+uh(c)):fv("Sending: action="+b);a.f.sendMessage(b,c)}
h.cf=function(a,b){mv(this,a,b);ov(this)};
Z.prototype.subscribe=Z.prototype.subscribe;Z.prototype.unsubscribeByKey=Z.prototype.fa;Z.prototype.getProxyState=Z.prototype.Gd;Z.prototype.disconnect=Z.prototype.Oa;Z.prototype.getPlayerContextData=Z.prototype.Ed;Z.prototype.setPlayerContextData=Z.prototype.ff;Z.prototype.getOtherConnectedRemoteId=Z.prototype.qc;Z.prototype.getReconnectTimeout=Z.prototype.eb;Z.prototype.getAutoplayMode=Z.prototype.Ad;Z.prototype.getAutoplayVideoId=Z.prototype.Bd;Z.prototype.reconnect=Z.prototype.lf;
Z.prototype.sendMessage=Z.prototype.cf;function xv(a){wt.call(this,"ScreenServiceProxy");this.V=a;this.g=[];this.g.push(this.V.$_s("screenChange",v(this.qf,this)));this.g.push(this.V.$_s("onlineScreenChange",v(this.Ce,this)))}
sa(xv,wt);h=xv.prototype;h.ca=function(a){return this.V.$_gs(a)};
h.Gb=function(a){return!!this.V.$_c(a)};
h.get=function(a){return this.V.$_g(a)};
h.start=function(){this.V.$_st()};
h.add=function(a,b,c){this.V.$_a(a,b,c)};
h.remove=function(a,b,c){this.V.$_r(a,b,c)};
h.Db=function(a,b,c,d){this.V.$_un(a,b,c,d)};
h.B=function(){for(var a=0,b=this.g.length;a<b;++a)this.V.$_ubk(this.g[a]);this.g.length=0;this.V=null;wt.prototype.B.call(this)};
h.qf=function(){this.w("screenChange")};
h.Ce=function(){this.w("onlineScreenChange")};
Y.prototype.$_st=Y.prototype.start;Y.prototype.$_gspc=Y.prototype.rf;Y.prototype.$_gsppc=Y.prototype.ld;Y.prototype.$_c=Y.prototype.Gb;Y.prototype.$_g=Y.prototype.get;Y.prototype.$_a=Y.prototype.add;Y.prototype.$_un=Y.prototype.Db;Y.prototype.$_r=Y.prototype.remove;Y.prototype.$_gs=Y.prototype.ca;Y.prototype.$_gos=Y.prototype.kd;Y.prototype.$_s=Y.prototype.subscribe;Y.prototype.$_ubk=Y.prototype.fa;function yv(a){a=M("MDX_CONFIG")||a;tq();Et();zv||(zv=new it(a?a.loungeApiHost:void 0),Rt()&&(zv.f="/api/loungedev"));Av||(Av=t("yt.mdx.remote.deferredProxies_")||[],z("yt.mdx.remote.deferredProxies_",Av));Bv();var b=Cv();if(!b){var c=new Y(zv);z("yt.mdx.remote.screenService_",c);b=Cv();var d=!1,e=void 0,f=void 0,g=!1;a&&(d=!!a.loadCastApiSetupScript,e=a.appId,f=a.theme,g=!!a.disableDial);yu(c,function(k){k?Dv()&&Mu(Dv(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){Ok("yt-remote-receiver-availability-change")})},
d,e,f,g)}a&&!t("yt.mdx.remote.initialized_")&&(z("yt.mdx.remote.initialized_",!0),Ev("Initializing: "+uh(a)),Fv.push(S("yt-remote-cast2-availability-change",function(){Ok("yt-remote-receiver-availability-change")})),Fv.push(S("yt-remote-cast2-receiver-selected",function(){Gv();
Ok("yt-remote-auto-connect","cast-selector-receiver")})),Fv.push(S("yt-remote-cast2-receiver-resumed",function(){Ok("yt-remote-receiver-resumed","cast-selector-receiver")})),Fv.push(S("yt-remote-cast2-session-change",Hv)),Fv.push(S("yt-remote-connection-change",function(k){k?Mu(Dv(),"YouTube TV"):Iv()||(Mu(null,null),Ku())})),d=Jv(),a.isAuto&&(d.id+="#dial"),Yj("desktop_enable_autoplay")&&(d.capabilities=["atp"]),d.name=a.device,d.app=a.app,(f=a.theme)&&(d.theme=f),Ev(" -- with channel params: "+
uh(d)),Kv(d),b.start(),Dv()||Lv())}
function Mv(){var a=Dv();if(!a)return null;var b=Cv().ca();return ut(b,a)}
function Hv(a){Ev("remote.onCastSessionChange_: "+qt(a));if(a){var b=Mv();b&&b.id==a.id?Mu(b.id,"YouTube TV"):(b&&Nv(),Ov(a,1))}else Pv()&&Nv()}
function Nv(){Nu()?Hu().stopSession():Eu("stopSession called before API ready.");var a=Pv();a&&(a.disconnect(1),Qv(null))}
function Rv(){var a=Pv();return a&&3!=a.getProxyState()?new Uu(Pv(),void 0):null}
function Ev(a){et("remote",a)}
function Cv(){if(!Sv){var a=t("yt.mdx.remote.screenService_");Sv=a?new xv(a):null}return Sv}
function Dv(){return t("yt.mdx.remote.currentScreenId_")}
function Tv(a){z("yt.mdx.remote.currentScreenId_",a)}
function Gv(){z("yt.mdx.remote.connectData_",null)}
function Pv(){return t("yt.mdx.remote.connection_")}
function Qv(a){var b=Pv();Gv();a||Tv("");z("yt.mdx.remote.connection_",a);Av&&(B(Av,function(c){c(a)}),Av.length=0);
b&&!a?Ok("yt-remote-connection-change",!1):!b&&a&&Ok("yt-remote-connection-change",!0)}
function Iv(){var a=Ht();if(!a)return null;var b=Cv().ca();return ut(b,a)}
function Ov(a,b){Mv()&&Mv();Tv(a.id);var c=new Z(zv,a,Jv());c.connect(b,t("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(d){Ok("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){Pv()&&Qv(null)});
Qv(c)}
function Lv(){var a=Iv();a?(Ev("Resume connection to: "+qt(a)),Ov(a,0)):(Qt(),Ku(),Ev("Skipping connecting because no session screen found."))}
var zv=null,Av=null,Sv=null;function Bv(){var a=Jv();if(ub(a)){a=Gt();var b=rq("yt-remote-session-name")||"",c=rq("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};z("yt.mdx.remote.channelParams_",a)}}
function Jv(){return t("yt.mdx.remote.channelParams_")||{}}
function Kv(a){a?(oq("yt-remote-session-app",a.app),oq("yt-remote-session-name",a.name)):(sq("yt-remote-session-app"),sq("yt-remote-session-name"));z("yt.mdx.remote.channelParams_",a)}
var Fv=[];function Uv(){this.f=E("watch-queue-loading-template");Jp(this.f,[])}
;function Vv(a){xp.call(this);this.A=a;this.S=0;this.l=this.I=this.j=this.F=this.u=this.g=this.L=null}
sa(Vv,xp);h=Vv.prototype;
h.xa=function(){xp.prototype.xa.call(this);this.l=this.oa();this.S=parseInt(N(this.l,"max-title-length"),10)||0;this.F=tg(this,"create-button");this.j=tg(this,"cancel-button");this.u=tg(this,"privacy-button");var a=ug(this);this.g=tg(this,"title-input");og(a,this.g,"keyup",this.Wc);og(a,this.g,"paste",this.Wc);og(a,this.l,"reset",this.Ae);og(a,this.l,"submit",this.Be);this.L=tg(this,"create-playlist-widget-privacy-menu");this.I=tg(this,"is-selected");a=S("yt-uix-menu-item-clicked",v(this.Fe,this));
this.aa.push(a)};
h.ya=function(){Wv(this);this.l=this.I=this.j=this.F=this.L=this.u=this.g=null;xp.prototype.ya.call(this)};
h.setVideoIds=function(a){tg(this,"video-ids-input").value=a};
h.Wc=function(){var a=Lb(this.g.value).length;ok(this.F,0<a&&(!this.S||a<=this.S))};
h.Fe=function(a){Ee(this.L,a)&&(a=Re(a,"yt-ui-menu-item"),Xv(this,a),a=N(a,"value"),tg(this,"privacy-value-input").value=a)};
function Xv(a,b){var c=Rm.getInstance();Fe(F(V(c,"content"),a.u),Lb(Ne(b)));I(F("is-selected",a.L),"is-selected");H(b,"is-selected");c=N(b,"privacy-state");ek(a.u,"privacy-state",c)}
function Yv(a,b){ok(a.F,b);a.j&&ok(a.j,b);ok(a.g,b);ok(a.u,b)}
function Wv(a){a.g.value="";var b=tg(a,"title-input-container");I(b,"yt-uix-form-error");we(F("yt-uix-form-error-message",b));ok(a.u,!0);(b=F("is-selected",a.L))&&a.I&&b!=a.I&&Xv(a,a.I);ok(a.F,!1);a.j&&ok(a.j,!0);ok(a.g,!0)}
h.Be=function(a){a.preventDefault();a=this.l;var b={context:this,onSuccess:this.xe,onError:this.we};b=void 0===b?{}:b;b.method=a.method.toUpperCase();if("POST"==b.method){var c=b,d=[];ph(a,d,sh);c.postBody=d.join("&")}else{d=new lh;ph(a,d,rh);mh(d);c={};for(var e=0;e<d.f.length;e++){var f=d.f[e];c[f]=d.g[f]}d=b.nb||{};Ab(d,c);b.nb=d}kl(a.action,b);Yv(this,!1)};
h.xe=function(a,b){Wv(this);this.A&&Ha(this.A.yb)&&this.A.yb({playlistId:b.result.playlistId,playlistName:b.result.playlistName,Ve:b.result.playlistUrl});U("yt-uix-videoactionmenu-hide")};
h.we=function(a,b){if(b&&b.errors&&b.errors.length){var c=tg(this,"title-input-container"),d=b.errors[0];H(c,"yt-uix-form-error");if(d){var e=F("yt-uix-form-error-message",c);e?e.innerHTML=d:(d=pe("SPAN","yt-uix-form-error-message",document.createTextNode(String(d))),d.setAttribute("role","alert"),c.appendChild(d))}Yv(this,!0)}};
h.Ae=function(){Wv(this);if(this.A&&Ha(this.A.onCancel))this.A.onCancel()};function Zv(a){xp.call(this);this.A={yb:a.yb,onCancel:v(function(){Dn.getInstance().hide(this.oa());if(Ha(a.onCancel))a.onCancel()},this)};
this.j=this.g=null}
sa(Zv,xp);Zv.prototype.xa=function(){xp.prototype.xa.call(this);this.g=E(N(this.oa(),"dialog-id"));if(!this.g)throw Error("Cannot find create playlist widget dialog.");og(ug(this),document,"click",this.l);var a=S("yt-uix-card-show",v(this.u,this));this.aa.push(a);a=F("create-playlist-widget-form",this.g);this.j=new Vv(this.A);vg(this.j,a)};
Zv.prototype.ya=function(){this.g=null;this.j.dispose();this.j=null;xp.prototype.ya.call(this)};
Zv.prototype.l=function(a){Ee(this.g,Dk(a))||Dn.getInstance().hide(this.oa())};
Zv.prototype.u=function(a){a==this.oa()&&tg(this.j,"title-input").focus()};function $v(){Ul.call(this,"scroller");this.f={}}
A($v,Ul);Da($v);h=$v.prototype;h.register=function(){Wl(this,"mouseenter",this.Jc);Wl(this,"mouseleave",this.xb)};
h.unregister=function(){Xl(this,"mouseenter",this.Jc);Xl(this,"mouseleave",this.xb);for(var a in this.f)this.xb(this.f[a]);this.f={};$v.J.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.xb(this.f[a]);this.f={}};
h.Jc=function(a){var b=O(a,"mousewheel",v(this.Qd,this,a));ek(a,"scroller-mousewheel-listener",b);b=O(a,"scroll",v(this.yf,this,a));ek(a,"scroller-scroll-listener",b);a&&(b=Ja(a).toString(),this.f[b]=a)};
h.xb=function(a){var b=this.H(a,"scroller-mousewheel-listener")||"";ek(a,"scroller-mousewheel-listener","");var c=this.H(a,"scroller-scroll-listener")||"";ek(a,"scroller-scroll-listener","");Ck(b);Ck(c);ek(a,"scroller-scroll-listener","");a&&(a=Ja(a).toString(),delete this.f[a])};
h.Qd=function(a,b){var c=b||window.event;var d=0;"MozMousePixelScroll"==c.type?d=0==(c.axis==c.HORIZONTAL_AXIS)?c.detail:0:window.opera?d=c.detail:d=0==c.wheelDelta%120?"WebkitTransform"in document.documentElement.style?window.chrome&&0==navigator.platform.indexOf("Mac")?c.wheelDeltaY/-30:c.wheelDeltaY/-1.2:c.wheelDelta/-1.6:c.wheelDeltaY/-3;if(c=d)d=a.scrollTop,a.scrollTop+=c,d==a.scrollTop&&this.H(a,"scroller-allow-pagescroll")||b.preventDefault()};
h.yf=function(a){this.bb(a,"scroll-action");U("yt-dom-content-change",a)};function aw(a){kl("/playlist_video_ajax?action_add_to_playlist=1",{method:"POST",nb:{feature:a.feature||null,authuser:a.Zf||null,pageid:a.pageId||null},ja:{video_ids:a.videoIds||null,source_playlist_id:a.sourcePlaylistId||null,full_list_id:a.fullListId||null,delete_from_playlists:a.lg||null,add_to_playlists:a.Yf||null,plid:M("PLAYBACK_ID")||null},context:a.context,onError:a.onError,onSuccess:function(b,c){a.onSuccess.call(this,b,c)},
ze:a.ze,withCredentials:!1})}
;var bw,cw,W,dw,ew,fw,gw,hw,iw,jw,kw,lw,mw,nw,ow,De,pw,qw,rw,sw,tw;var uw;function vw(a,b){this.type=a;this.videoIds=b||[]}
function ww(a){"string"===typeof a&&(a=[a]);var b=new vw(1,a);uw&&xw(function(){B(a,function(c){uw.bd(c)})},b,void 0)}
function yw(a,b,c){var d=new vw(2);uw&&xw(function(){uw.Mc(a,b,c)},d,void 0)}
function zw(a){var b=new vw(2);uw&&xw(function(){uw.ac(a)},b,void 0)}
function Aw(a,b,c){b||Bw(a,b,c)}
function Bw(a,b,c){uw&&xw(function(){b&&uw.playVideo(b,0,0,a)},void 0,c)}
function Cw(a,b){var c=[];0==c.length||!Za(c,a)||Dw(a,c,b)}
function Dw(a,b,c){uw&&xw(function(){var d=uw,e=Xu(d),f=Qa(b,a);Zu(d,"setPlaylist",{videoId:a,videoIds:b.join(",")});Su(e,a,f);bv(d,e)},void 0,c)}
function Ew(){var a=new vw(2);uw&&xw(function(){uw.stop();uw.ic()},a,void 0)}
function Fw(a){uw=a;uw.subscribe("remoteQueueChange",function(){U("queue-change",new vw(2))})}
function Gw(){var a=Rv();bf(uw);uw=null;a?Fw(a):U("queue-change",new vw(2))}
function xw(a,b,c){uw&&1==uw.f&&(a.call(n),c&&P(function(){c()},0),void 0!==b&&U("queue-change",b))}
var Hw=[];var Iw;function Jw(){if(!Iw){var a=E("watch-queue");if(!a)return[];Iw=F("watch-queue-items-list",a)}if(!Iw)return[];var b=[];a=ye(Iw);B(a,function(c){(c=N(c,"video-id"))&&b.push(c)});
return b}
;function Kw(){U("yt-dom-content-change",ow)}
z("yt.www.watchqueue.loadThumbnails",Kw);
function Lw(){De=E("watch-queue");hw=F("watch-queue-control-bar",De);iw=F("watch-queue-count",hw);jw=F("yt-uix-button-dark-overflow-action-menu",hw);kw=F("prev-watch-queue-button",De);lw=F("next-watch-queue-button",De);mw=F("play-watch-queue-button",De);nw=F("pause-watch-queue-button",De);ow=F("watch-queue-items-list",De);pw=F("autoplay-control-bar",De);qw=F("yt-uix-form-input-checkbox-container",pw);rw=F("autoplay-label",pw);sw=F("autoplay-dismiss-bar",De);tw=F("up-next-item-container",De);Mw.push(Ek(De,
"click",Nw,"yt-uix-button"));Mw.push(Ek(De,"click",Ow,"watch-queue-video"));Mw.push(Ek(De,"click",Pw,"control-bar-button"));Mw.push(O(ow,Mf,Qw));Mw.push(Ek(ow,Mf,Rw,"watch-queue-item"));Mw.push(Ek(De,"click",Sw,"autoplay-control-bar"));Mw.push(Ek(sw,"click",Tw,"autoplay-dismiss-button"));Mw.push(Ek(null,"click",Uw,"watch-queue-video-menu-choice"));Mw.push(Ek(null,"click",Vw,"watch-queue-menu-choice"));gw=new Gp(E("watch-queue-count-msg").textContent,["count","total"]);new Uv;dw=!1;var a=E("watch-queue-save-as-playlist-widget");
a&&(fw=new Zv({yb:Ww}),vg(fw,a));cw=null;yv({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});yv();Hw.push(S("yt-remote-connection-change",Gw));(a=Rv())&&Fw(a);Xw.push(S("init",Yw));Xw.push(S("dispose",Zw));Xw.push(S("yt-remote-before-disconnect",$w));Xw.push(S("yt-remote-connection-change",ax));ax();Yw();Xw.push(S("queue-change",bx));Xw.push(S("watch-queue-addto-video-added",cx));Xw.push(S("watch-queue-addto-video-removed",cx));Xw.push(S("watch-queue-addto-video-play-next",dx));
Xw.push(S("watch-queue-addto-video-play-now",ex));Xw.push(S("watch-queue-addto-playlist-added",cx));Xw.push(S("watch-queue-addto-playlist-removed",cx));Xw.push(S("watch-queue-addto-playlist-play-next",fx));Xw.push(S("watch-queue-addto-playlist-play-now",gx))}
function hx(){var a=E("player-playlist");return a?Ce()==a:!1}
function ix(){var a=!1;if(!W||!yl(bw)||!M("PAGE_NAME"))return jx(),a;var b=kx(),c=lx();mx()&&c&&b!=c&&(nx(c),b=c);c=!!M("LIST_ID");if(b=mx()&&!!b&&(b==M("VIDEO_ID")||b==ew)&&!c){var d=E("player-playlist");d&&!hx()&&(I(bw,"mole-notification"),ve(d,De),U("watch-queue-show",1),ox(),a=!0)}else Ce()!=bw&&(bw.appendChild(De),U("watch-queue-show",0),Kw(),a=!0);d=E("placeholder-playlist");b||c?Al(d):Bl(d);jx();return a}
function nx(a){if(cw){var b=!!W,c=b&&!(a&&(a==M("VIDEO_ID")||a==ew));Co(c);b&&mx()&&(c?U("watch-queue-show",0):U("watch-queue-show",1));if(cw.isReady())cw.loadVideoById(a);else{var d=function(){cw.loadVideoById(a);cw.removeEventListener("onReady",d)};
cw.addEventListener("onReady",d)}}}
function kx(){return cw&&cw.isReady()?cw.getVideoData().video_id||"":""}
function lx(){return W?Xu(W).videoId:""}
function px(a){kx()!=qx()&&rx(kx());sx(1==a);ix()}
function jx(){cw&&(kx()?dw||Co(!!W&&(yl(bw)||tx())&&Ce()==bw):Co(!1))}
function Yw(){I(bw,"mole-notification");ew="";Ao();ix();var a=cw;a&&a.addEventListener("onStateChange",px)}
function Zw(){var a=bw;I(a,"mole-expanded");H(a,"mole-collapsed");(a=cw)&&a.removeEventListener("onStateChange",px)}
function mx(){return"watch"==M("PAGE_NAME")}
function ux(a){if(a!=qx()){var b=Jw(),c=b[0];vx()&&(c=b[wx()+1]);a!=c&&Za(b,a)&&yw(a,Qa(b,a),Qa(b,c))}}
function Nw(a){if(a.currentTarget==kw){if(tx()){var b=ye(ow);a=wx();b=b.length;a=(b+a-1)%b;xx(a);ox();(b=qx())&&W&&W.ad(b,a)}}else if(a.currentTarget==lw)tx()&&(a=ye(ow),a=(wx()+1)%a.length,xx(a),ox(),(b=qx())&&W&&W.nextVideo(b,a));else if(a.currentTarget==mw)Bl(mw),Al(nw),W?(a=Jw(),!lx()&&a[0]?W.playVideo(a[0]):W.play()):cw&&cw.playVideo();else if(a.currentTarget==nw)Bl(nw),Al(mw),W?W.pause():cw&&cw.pauseVideo();else if(G(a.currentTarget,"remove-item-watch-queue-button")){if(a=Pe(a.currentTarget,
null,"watch-queue-item"),b=N(a,"video-id"))H(a,"fade-out"),ww(b)}else G(a.currentTarget,"expand-video-watch-queue-button")&&yx(a.currentTarget)}
function Vw(a){var b=N(a.currentTarget,"action");zx[b](a.currentTarget);a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();Xm(Rm.getInstance(),jw)}
function Pw(a){Ce()==bw&&a.currentTarget==hw&&(a=Dk(a),a&&G(a,"overflow-menu-choice")||(dh(bw,"mole-expanded"),dh(bw,"mole-collapsed")))}
function Uw(a){var b=N(a.currentTarget,"action");Ax[b](a.currentTarget)}
function Qw(){I(bw,"mole-notification");G(bw,"mole-expanded")&&Kw();Xm(Rm.getInstance(),jw)}
function Rw(a){G(a.currentTarget,"fade-out")&&(we(a.currentTarget),rx(lx()),Bx());Kw()}
function Ow(a){a=Pe(a.currentTarget,null,"watch-queue-item");if(!G(a,"currently-playing")){var b=ye(ow);b=Qa(b,a);xx(b);(a=N(a,"video-id"))&&W&&W.playVideo(a,0,b)}}
function Sw(){var a=!G(qw,"checked");W&&W.ed(a);Cx(a)}
function Tw(){W&&W.oc()}
function Ww(a){var b=a.playlistId,c=a.Ve;b&&c&&(a={videoIds:Jw().join(","),fullListId:b,onSuccess:function(){Qm(c)}},aw(a))}
function yx(a){G(a,"disabled")||(a=N(a,"video-id"))&&Dx(a)}
function vx(){return!!F("currently-playing",ow)}
function wx(){var a=F("currently-playing",ow);if(a){var b=ye(ow);return Qa(b,a)}return 0}
function qx(){var a=F("currently-playing",ow);return a?N(a,"video-id")||"":""}
function rx(a){a=Qa(Jw(),a);0<=a?vx()&&wx()==a||(xx(a),ox()):Ex()}
function xx(a){if(tx()){Ex();var b=ye(ow);b[a]&&H(b[a],"currently-playing");Fx()}}
function Ex(){if(tx()){var a=F("currently-playing",ow);a&&I(a,"currently-playing");Fx()}}
function dx(a){ux(a);cx()}
function ex(a){W&&W.playVideo(a);a!=qx()&&(nx(a),cx());ew=a}
function fx(a){Jw();vx()&&wx();zw(a);cx()}
function gx(a,b,c){b&&(c?Cw(b,function(){ew=b}):Aw(a,b,function(){ew=b}),cx())}
function cx(){yl(bw)&&H(bw,"mole-notification")}
function Gx(){var a=vx()?wx()+1:0,b=Jw().length;0<a&&0<b?Fe(iw,Lp(gw,{count:a,total:b})):ue(iw)}
function sx(a){a?(Bl(mw),Al(nw)):(Bl(nw),Al(mw))}
function Fx(){var a=Jw().length,b=1>=a,c=vx()?wx():-1;kw.disabled=b||0==c;lw.disabled=b||c==a-1;Gx();if(0!=a){var d=null;a=ye(ow);B(a,function(e){var f=N(e,"video-id"),g=F("play-next",e);bh(F("goto-video-page",e),"disabled",mx()&&f==M("VIDEO_ID")&&!M("LIST_ID"));G(e,"currently-playing")?(d=e,Bl(g)):d?(d=null,bh(g,"disabled",!0)):bh(g,"disabled",!1)})}}
function Bx(){Fx();0==Jw().length?Hx():(Al(bw),ix()||U("watch-queue-show",Ce()==bw?0:1));U("watch-queue-update")}
function tx(){var a=ze(ow);return!!a&&G(a,"watch-queue-item")}
function ox(){var a=F("currently-playing",ow);if(a){var b=$v.getInstance(),c=ow;if(c&&a&&(a=Qa(ge(V(b,"scroll-unit"),c),a),0<=a&&!(!c||isNaN(a)||0>a)&&(b=ge(V(b,"scroll-unit"),c),!(0>=b.length)))){a>=b.length&&(a=b.length-1);if(b.length){var d=b[0];var e=d.offsetHeight;1<b.length&&(e=b[1].offsetTop-d.offsetTop);d=e}else d=0;e=c.offsetHeight;a>Math.max(Math.floor(c.scrollTop/d),0)-1&&(d=Math.floor(e/d),e=b.length,a+d>e&&(a=e-d+1));0>a&&(a=0);a=b[a].offsetTop;c&&!isNaN(a)&&(0>a&&(a=0),c.scrollTop=a,
ek(c,"scroller-offset",a+""),U("yt-dom-content-change",c))}}Kw()}
function Dx(a){a=Sc("/watch",{v:a});Qm(a)}
function Ix(a){mx()&&(a!=M("VIDEO_ID")||M("LIST_ID")?(P(function(){Dx(a)},100),ew=a):ix())}
function $w(a){Jx=a}
function ax(){var a=Rv();bf(W);W=null;Q(Kx);Kx=NaN;ue(ow);Bx();if(a){W=a;W.subscribe("proxyStateChange",Lx);W.subscribe("remotePlayerChange",Mx);W.subscribe("autoplayModeChange",Nx);W.subscribe("autoplayUpNext",Ox);var b=a.i.getAutoplayMode();Nx(b);b=a.i.getAutoplayVideoId();Ox(b);W.subscribe("autoplayDismissed",Px);W.subscribe("nowAutoplaying",Qx);Jx=null;b=Xu(a).videoId;M("LIST_ID")&&b&&(b=Sc("/watch",{v:b}),Qm(b))}else Hx();2!=Jx&&(Ao(),U("watch-queue-remote-connection",!!a))}
function Nx(a){"UNSUPPORTED"==a?Bl(pw):(a="ENABLED"==a,bh(qw,"checked",a),Cx(a),Al(pw))}
function Ox(a){W&&(a||Bl(tw))}
function Px(){H(sw,"fade-out")}
function Qx(){I(sw,"fade-out")}
function Cx(a){a=a?hr("MDX_AUTOPLAY_ON"):hr("MDX_AUTOPLAY_OFF");Fe(rw,a)}
function Hx(){Ce()==bw||bw.appendChild(De);var a=E("placeholder-playlist");M("LIST_ID")?Al(a):Bl(a);a=bw;I(a,"mole-expanded");H(a,"mole-collapsed");Bl(bw);jx();U("watch-queue-hide",0)}
function Lx(){Q(Kx);Kx=NaN}
function Mx(){var a=Xu(W);sx(1==a.playerState)}
function bx(){if(W){var a=qx(),b=lx();b&&b!=a&&rx(b);b&&(hx()||ew==b)&&Ix(b)}}
var zx={"remove-all":function(){Ew();ue(ow);Bx();U("watch-queue-empty");Hx()},
"save-as-playlist":function(){if(0!=Jw().length){var a=fw;Dn.getInstance().show(a.oa())}},
disconnect:function(){Nv()}},Ax={"play-next":function(a){G(a,"disabled")||(a=N(a,"video-id"))&&ux(a)},
"goto-video-page":yx},Mw=[],Xw=[],Kx=NaN,Jx=null;z("yt.www.guide.setup",Lq);z("yt.www.guide.selectGuideItem",function(a){if(Ap){var b=null,c=F("guide-item-selected",Ap);c&&(b=N(c,"serialized-endpoint")||"");b!=a&&(b&&I(c,"guide-item-selected"),a&&(a=$q(a))&&H(a,"guide-item-selected"))}});
z("yt.www.masthead.dismissReturnToMobileMessage",function(){wl("a=NO_MWEB",void 0);Bl(E("return-to-mobile"))});
z("yt.www.masthead.dismissChromeAlert",function(){var a=Aq.getInstance();Fq(169,!0);a.save()});
z("yt.www.masthead.dismissKevlarPromo",function(){var a=Aq.getInstance();Fq(173,!0);a.save()});
z("yt.www.masthead.dismissTosAlert",function(){var a=Aq.getInstance();Fq(160,!0);a.save()});
z("yt.www.masthead.handleAccountPickerClick",function(){var a=E("yt-masthead-multilogin");if(N(a,"loaded"))Lr();else{var b=br();b[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/delegate_account_ajax",{method:"POST",postData:Rc(b),onDone:function(){ek(a,"loaded","true");Lr()}})}});
z("yt.www.notifications.inbox.handleNotificationsClick",function(){qr(0);if(!vr&&(G(xr,"yt-high-priority-notification")&&(Dr(),wr&&zr&&(Dn.getInstance().show(zr),H(wr,"yt-uix-clickcard-active"))),!N(yr,"loaded"))){var a={action_get_notifications_flyout:1};a[M("XSRF_FIELD_NAME",void 0)]=M("XSRF_TOKEN",void 0);spf.load("/feed_ajax",{method:"POST",postData:Rc(a),onDone:function(){ek(yr,"loaded","true");var b=zr;I(b,"sb-notif-on");H(b,"sb-notif-off");Ek(yr,"click",Hr,"yt-lockup-notification")}})}});
z("yt.www.masthead.loadSearchbox",Nr);z("yt.net.cookies.set",bk);z("yt.net.cookies.remove",ck);z("yt.www.picker.load",function(a){var b=N(a,"picker-key"),c=N(a,"picker-position"),d="yt-picker-"+b+"-"+c;if(c=E(d))a=N(a,"button-menu-id")==d,d=N(c,"loaded"),Is(c,b,!!a,!!d)});
z("yt.www.picker.displayLang",function(){Hs("language")});
z("yt.www.picker.applyGrid",Ks);
z("ytbin.www.pageframe.setup",function(){fo("GUIDE_DELAYLOADED_CSS");fo("PAGE_FRAME_DELAYLOADED_CSS",x(I,document.body,"delayed-frame-styles-not-in"),M("WAIT_TO_DELAYLOAD_FRAME_CSS")?"yt-www-pageFrameCssNotifications-load":null);pp=E("a11y-announcements-container");qp=E("a11y-announcements-message");S("a11y-announce",wp);S("init",tp);if(up=E("a11y-skip-nav"))tp(),O(up,"click",vp);null==rp&&sp();rp&&($g(document.body,["yt-high-contrast-mode","yt-high-contrast-mode-"+rp]),fo("HIGH_CONTRAST_MODE_CSS"));
F("guide-module-loading")||Lq();T.init();Ir=F("yt-masthead-user-icon");Ek(E("ticker"),"click",Mr,"yt-uix-close");F("exp-searchbox-redesign")&&O(E("yt-masthead-content"),"click",Qr);Nr();Br();ms();(bw=E("watch-queue-mole"))?Lw():yv({device:"Desktop",app:"youtube-desktop",isSignedIn:M("LOGGED_IN")});M("YOODLE_IS_ANIMATED")&&Rn(M("YOODLE_JS_URL",void 0),function(){t("yt.www.masthead.AnimatedYoodle.init")(M("YOODLE_ANIMATION_FRAMES"),M("YOODLE_ANIMATION_DURATION"),M("YOODLE_ANIMATION_DELAY"),M("YOODLE_STOP_ON_LAST_FRAME"))});
M("SAFETY_MODE_PENDING")&&Hs("safetymode")});
z("ytbin.www.pageframe.cancelSetup",function(){Pr()});}).call(this);
