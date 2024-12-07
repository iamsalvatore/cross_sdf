(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ja=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;ma=pa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=la;
function w(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||va});
function wa(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.R=this.j=null}
function xa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
wa.prototype.H=function(a){this.i=a};
function ya(a,b){a.j={exception:b,nd:!0};a.h=a.o||a.D}
wa.prototype.return=function(a){this.j={return:a};this.h=this.D};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.F=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.R.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.H):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ka});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ja(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.u(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.ta(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ha();this.R()};
b.prototype.ha=function(){var g=this;e(function(){if(g.U()){var h=ea.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.R=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ja=function(g){var h=this.o();g.ac(h.resolve,h.reject)};
b.prototype.ta=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.ac(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ac=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).ac(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).ac(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||ea});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var eb=globalThis.trustedTypes,fb;function gb(){var a=null;if(!eb)return a;try{var b=function(c){return c};
a=eb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function hb(){fb===void 0&&(fb=gb());return fb}
;function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){var b=hb();return new ib(b?b.createScriptURL(a):a)}
function kb(a){if(a instanceof ib)return a.h;throw Error("");}
;var lb=sa([""]),mb=ta(["\x00"],["\\0"]),nb=ta(["\n"],["\\n"]),ob=ta(["\x00"],["\\u0000"]);function pb(a){return a.toString().indexOf("`")===-1}
pb(function(a){return a(lb)})||pb(function(a){return a(mb)})||pb(function(a){return a(nb)})||pb(function(a){return a(ob)});function qb(a){this.h=a}
qb.prototype.toString=function(){return this.h};
var rb=new qb("about:invalid#zClosurez");function sb(a){this.re=a}
function tb(a){return new sb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ub=[tb("data"),tb("http"),tb("https"),tb("mailto"),tb("ftp"),new sb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],vb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function wb(a){if(a instanceof qb)if(a instanceof qb)a=a.h;else throw Error("");else a=vb.test(a)?a:void 0;return a}
;function xb(a,b){b=wb(b);b!==void 0&&(a.href=b)}
;function yb(){this.h=zb[0].toLowerCase()}
yb.prototype.toString=function(){return this.h};function Ab(a){this.h=a}
Ab.prototype.toString=function(){return this.h+""};function Bb(a){var b="true".toString(),c=[new yb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof yb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Cb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Db="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Eb(a,b){if(b instanceof ib)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Db.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=wb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Fb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h+""};function Hb(a){var b=Fb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Ib(a,b){if(b instanceof Gb)b=b.h;else throw Error("");a.textContent=b;Hb(a)}
function Jb(a,b){a.src=kb(b);Hb(a)}
;var Kb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Lb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Mb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Nb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ob=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Lb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Pb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Qb(a,b){b=Kb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Rb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Sb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Tb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ub(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Vb[c])c=Vb[c];else{c=String(c);if(!Vb[c]){var f=/function\s+([^\(]+)/m.exec(c);Vb[c]=f?f[1]:"[Anonymous]"}c=Vb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Ub(a,b){b||(b={});b[Wb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Wb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Ub(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Wb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Ub(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Wb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Vb={};function Xb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a,b){return b.match(Yb)[a]||null}
function ac(a){return Zb($b(3,a))}
function bc(a){var b=a.match(Yb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function cc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function dc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ec(a){var b=[],c;for(c in a)dc(c,a[c],b);return b.join("&")}
function fc(a,b){b=ec(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var ic=/#|$/,jc=/[?&]($|#)/;function kc(a,b){for(var c=a.search(ic),d=0,e,f=[];(e=hc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(jc,"$1")}
;function lc(a){var b=b===void 0?37:b;var c=[];mc(a,nc,1).forEach(function(d){oc(d,2)<=b&&c.push(oc(d,1))});
return c}
function pc(a){var b=b===void 0?37:b;var c=[];mc(a,nc,1).forEach(function(d){oc(d,2)>b&&c.push(oc(d,1))});
return c}
;function qc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function rc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?rc.apply(null,d):qc(d)}}
;function G(){this.da=this.da;this.D=this.D}
G.prototype.da=!1;G.prototype.dispose=function(){this.da||(this.da=!0,this.aa())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function sc(a,b){a.addOnDisposeCallback(Ya(qc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.da?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
G.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};var tc;function uc(){G.apply(this,arguments);this.B=1;this[tc]=this.dispose}
w(uc,G);uc.prototype.share=function(){if(this.da)throw Error("E:AD");this.B++;return this};
uc.prototype.dispose=function(){--this.B||G.prototype.dispose.call(this)};
tc=Symbol.dispose;function vc(a){return{fieldType:2,fieldName:a}}
function H(a){return{fieldType:3,fieldName:a}}
;function wc(a){this.h=a;a.Ha("/client_streamz/bg/fic",H("ke"))}
function xc(a){this.h=a;a.Ha("/client_streamz/bg/fiec",H("ke"),vc("ec"))}
function yc(a){this.h=a;a.mb("/client_streamz/bg/fil",H("ke"))}
yc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function zc(a){this.h=a;a.Ha("/client_streamz/bg/fcc",vc("ph"),H("ke"))}
function Ac(a){this.h=a;a.mb("/client_streamz/bg/fcd",vc("ph"),H("ke"))}
Ac.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function Bc(a){this.h=a;a.Ha("/client_streamz/bg/fsc",H("ke"))}
function Cc(a){this.h=a;a.mb("/client_streamz/bg/fsl",H("ke"))}
Cc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function Dc(a){this.h=a;a.mb("/client_streamz/bg/frs",H("ke"))}
Dc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Ec(a){this.h=a;a.mb("/client_streamz/bg/wrl",H("mn"),vc("ac"),vc("sc"),H("rk"),H("mk"))}
Ec.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Fc(a){this.h=a;a.Ha("/client_streamz/bg/ec",H("en"),H("mk"))}
function Gc(a){this.h=a;a.mb("/client_streamz/bg/el",H("en"),H("rk"),H("mk"))}
Gc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Hc(a){this.h=a;a.Ha("/client_streamz/bg/cec",vc("ec"),H("rk"),H("mk"))}
function Ic(a){a.Ha("/client_streamz/bg/po/csc",vc("cs"),H("rk"),H("mk"))}
function Jc(a){a.Ha("/client_streamz/bg/po/ctav",H("av"),H("rk"),H("mk"))}
function Kc(a){a.Ha("/client_streamz/bg/po/cwsc",H("su"),H("rk"),H("mk"))}
;function Lc(a){C.setTimeout(function(){throw a;},0)}
;var Mc=Oa(610401301,!1),Nc=Oa(653718497,Oa(1,!0));function Oc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Pc,Qc=C.navigator;Pc=Qc?Qc.userAgentData||null:null;function Rc(a){return Mc?Pc?Pc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Oc().indexOf(a)!=-1}
;function Sc(){return Mc?!!Pc&&Pc.brands.length>0:!1}
function Tc(){return Sc()?!1:J("Opera")}
function Uc(){return J("Firefox")||J("FxiOS")}
function Vc(){return Sc()?Rc("Chromium"):(J("Chrome")||J("CriOS"))&&!(Sc()?0:J("Edge"))||J("Silk")}
;function Wc(){return Mc?!!Pc&&!!Pc.platform:!1}
function Xc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;var Yc=Tc(),Zc=Sc()?!1:J("Trident")||J("MSIE"),$c=J("Edge"),ad=J("Gecko")&&!(Oc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),bd=Oc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");bd&&J("Mobile");Wc()||J("Macintosh");Wc()||J("Windows");(Wc()?Pc.platform==="Linux":J("Linux"))||Wc()||J("CrOS");var cd=Wc()?Pc.platform==="Android":J("Android");Xc();J("iPad");J("iPod");Xc()||J("iPad")||J("iPod");Oc().toLowerCase().indexOf("kaios");Uc();var dd=Xc()||J("iPod"),ed=J("iPad");!J("Android")||Vc()||Uc()||Tc()||J("Silk");Vc();var fd=J("Safari")&&!(Vc()||(Sc()?0:J("Coast"))||Tc()||(Sc()?0:J("Edge"))||(Sc()?Rc("Microsoft Edge"):J("Edg/"))||(Sc()?Rc("Opera"):J("OPR"))||Uc()||J("Silk")||J("Android"))&&!(Xc()||J("iPad")||J("iPod"));var gd={},hd=null;function id(a,b){Qa(a);b===void 0&&(b=0);jd();b=gd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function kd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ld(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ld(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=hd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
jd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function jd(){if(!hd){hd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));gd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];hd[f]===void 0&&(hd[f]=e)}}}}
;var md=typeof Uint8Array!=="undefined",nd=!Zc&&typeof btoa==="function";function od(a){if(!nd)return id(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var pd=/[-_.]/g,qd={"-":"+",_:"/",".":"="};function rd(a){return qd[a]||""}
function sd(a){return md&&a!=null&&a instanceof Uint8Array}
var td={};function ud(a,b){vd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
ud.prototype.sizeBytes=function(){vd(td);var a=this.h;if(a!=null&&!sd(a))if(typeof a==="string")if(nd){pd.test(a)&&(a=a.replace(pd,rd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=kd(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var wd;function vd(a){if(a!==td)throw Error("illegal external caller");}
;var xd;function yd(){var a=Error();Sb(a,"incident");Lc(a)}
function zd(a){a=Error(a);Sb(a,"warning");return a}
;function Ad(){return typeof BigInt==="function"}
;function Bd(a){return Array.prototype.slice.call(a)}
;var Cd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Dd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var Ed=Dd(),Fd=Dd("2ex"),Gd=Dd("1oa");Math.max.apply(Math,ra(Object.values({fh:1,dh:2,bh:4,ih:8,hh:16,gh:32,Hf:64,kh:128,ah:256,Zg:512,eh:1024,Nf:2048,jh:4096,Of:8192,If:16384})));var Hd=Cd?function(a,b){a[Ed]|=b}:function(a,b){a.Sa!==void 0?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Id=Cd?function(a){return a[Ed]|0}:function(a){return a.Sa|0},Jd=Cd?function(a){return a[Ed]}:function(a){return a.Sa},Kd=Cd?function(a,b){a[Ed]=b}:function(a,b){a.Sa!==void 0?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ld(a,b){Kd(b,(a|0)&-30975)}
function Md(a,b){Kd(b,(a|34)&-30941)}
;var Nd={},Od={};function Pd(a){return!(!a||typeof a!=="object"||a.h!==Od)}
function Qd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Rd(a){return!Array.isArray(a)||a.length?!1:Id(a)&1?!0:!1}
var Sd,Td=[];Kd(Td,55);Sd=Object.freeze(Td);function Ud(a){if(a&2)throw Error();}
var Vd=Object.freeze({});function Wd(a){a.yh=!0;return a}
;var Xd=Wd(function(a){return typeof a==="number"}),Yd=Wd(function(a){return typeof a==="string"}),Zd=Wd(function(a){return typeof a==="boolean"});
function $d(){var a=ae;return Wd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var be=Wd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ce=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function de(a){var b=a;if(Yd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Xd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ce?BigInt(a):a=Zd(a)?a?"1":"0":Yd(a)?a.trim()||"0":String(a)}
var je=Wd(function(a){return ce?a>=ee&&a<=fe:a[0]==="-"?ge(a,he):ge(a,ie)}),he=Number.MIN_SAFE_INTEGER.toString(),ee=ce?BigInt(Number.MIN_SAFE_INTEGER):void 0,ie=Number.MAX_SAFE_INTEGER.toString(),fe=ce?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ge(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ke=0,le=0;function me(a){var b=a>>>0;ke=b;le=(a-b)/4294967296>>>0}
function ne(a){if(a<0){me(0-a);var b=z(oe(ke,le));a=b.next().value;b=b.next().value;ke=a>>>0;le=b>>>0}else me(a)}
function pe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Ad()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+qe(c)+qe(a));return c}
function qe(a){a=String(a);return"0000000".slice(a.length)+a}
function re(){var a=ke,b=le;b&2147483648?Ad()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(oe(a,b)),a=b.next().value,b=b.next().value,a="-"+pe(a,b)):a=pe(a,b);return a}
function oe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function se(a){return a.displayName||a.name||"unknown type name"}
function te(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var ue=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ve(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:ue.test(a)}
function we(a){if(typeof a!=="number")throw zd("int32");if(!Number.isFinite(a))throw zd("int32");return a|0}
function xe(a){return a==null?a:we(a)}
function ye(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function ze(a){var b=0;b=b===void 0?0:b;if(!ve(a))throw zd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Ae(a);case "bigint":return String(BigInt.asIntN(64,a));default:return Be(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=de(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Ad()?de(BigInt.asIntN(64,BigInt(a))):de(Ce(a))),a;case "bigint":return de(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?de(De(a)):de(Be(a))}case 0:switch(c){case "string":return Ae(a);
case "bigint":return de(BigInt.asIntN(64,a));default:return De(a)}default:return Cb(b,"Unknown format requested type for int64")}}
function Ee(a){return a==null?a:ze(a)}
function Fe(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Ce(a){a.indexOf(".");if(Fe(a))return a;if(a.length<16)ne(Number(a));else if(Ad())a=BigInt(a),ke=Number(a&BigInt(4294967295))>>>0,le=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");le=ke=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),le*=1E6,ke=ke*1E6+d,ke>=4294967296&&(le+=Math.trunc(ke/4294967296),le>>>=0,ke>>>=0);b&&(b=z(oe(ke,le)),a=b.next().value,b=b.next().value,ke=a,le=b)}return re()}
function De(a){ve(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){ne(a);var b=ke,c=le;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:pe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Be(a){ve(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Fe(b)?a=b:(ne(a),a=re())}return a}
function Ae(a){ve(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ce(a)}
function Ge(a){if(a==null)return a;if(typeof a==="bigint")return je(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=je(a)?Number(a):String(a)),a;if(ve(a))return typeof a==="number"?De(a):Ae(a)}
function He(a){if(typeof a!=="string")throw Error();return a}
function Ie(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Je(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+se(b)+" but got "+(a&&se(a.constructor)));}
function Ke(a,b,c){if(a!=null&&typeof a==="object"&&a.Kc===Nd)return a;if(Array.isArray(a)){var d=Id(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Kd(a,e);return new b(a)}}
;function Le(a){Me===void 0&&(Me=typeof Proxy==="function"?Ne(Proxy):null);var b;(b=!Me)||(Oe===void 0&&(Oe=typeof WeakMap==="function"?Ne(WeakMap):null),b=!Oe);if(b)return a;if(b=Pe(a))return b;if(Math.random()>.01)return a;Qe(a);b=new Me(a,{set:function(c,d,e){Re();c[d]=e;return!0}});
Se(a,b);return b}
function Re(){yd()}
var Te=void 0,Ue=void 0;function Pe(a){var b;return(b=Te)==null?void 0:b.get(a)}
function Ve(a){var b;return((b=Ue)==null?void 0:b.get(a))||a}
function Se(a,b){(Te||(Te=new Oe)).set(a,b);(Ue||(Ue=new Oe)).set(b,a)}
var Me=void 0,Oe=void 0;function Ne(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var We=void 0;function Qe(a){if(We===void 0){var b=new Me([],{});We=Array.prototype.concat.call([],b).length===1}We&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
;var Xe;function Ye(a,b){Id(b);Xe=b;a=new a(b);Xe=void 0;return a}
function K(a,b,c){var d=d!=null?d:0;a==null&&(a=Xe);Xe=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Id(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Qd(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Kd(a,e);return a}
;function Ze(a,b){return $e(b)}
function $e(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return je(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Rd(a))return}else{if(sd(a))return od(a);if(a instanceof ud){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=od(b)}}}return a}
;function af(a,b,c){a=Bd(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function bf(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Rd(a)?void 0:e&&Id(a)&2?a:cf(a,b,c,d!==void 0,e);else if(Qd(a)){var f={},g;for(g in a)f[g]=bf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function cf(a,b,c,d,e){var f=d||c?Id(a):0;d=d?!!(f&32):void 0;a=Bd(a);for(var g=0;g<a.length;g++)a[g]=bf(a[g],b,c,d,e);c&&c(f,a);return a}
function df(a){return a.Kc===Nd?a.toJSON():$e(a)}
;function ef(a,b,c){c=c===void 0?Md:c;if(a!=null){if(md&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Id(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Kd(a,(d|34)&-12293),a):cf(a,ef,d&4?Md:c,!0,!0)}a.Kc===Nd&&(c=a.G,d=Jd(c),a=d&2?a:Ye(a.constructor,ff(c,d,!0)));return a}}
function ff(a,b,c){var d=c||b&2?Md:Ld,e=!!(b&32);a=af(a,b,function(f){return ef(f,e,d)});
Hd(a,32|(c?2:0));return a}
function gf(a){var b=a.G,c=Jd(b);return c&2?Ye(a.constructor,ff(b,c,!1)):a}
;function hf(a,b){a=a.G;return jf(a,Jd(a),b)}
function kf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function jf(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(kf(a,b,e,c)&&Fd!=null){var g;a=(g=xd)!=null?g:xd={};g=a[Fd]||0;g>=4||(a[Fd]=g+1,yd())}return d}return kf(a,b,e,c)}}
function lf(a,b,c){var d=a.G,e=Jd(d);Ud(e);mf(d,e,b,c);return a}
function mf(a,b,c,d){Qd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Kd(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function nf(a){return of(a,pf,11,!1)!==void 0}
function qf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function rf(a,b,c){var d=a.G,e=Jd(d);Ud(e);if(b==null)return mf(d,e,3),a;b=Ve(b);if(!Array.isArray(b))throw zd();var f=Id(b),g=f,h=!!(4&f),k=qf(f),l=k||Object.isFrozen(b);k||(f=0);l||(b=Bd(b),g=0,f=sf(f,e),f=tf(f,e,!0),l=!1);f|=21;k=4&f?4096&f?4096:8192&f?8192:0:void 0;k=k!=null?k:0;if(!h)for(h=0;h<b.length;h++){var m=b[h],n=c(m,k);Object.is(m,n)||(l&&(b=Bd(b),g=0,f=sf(f,e),f=tf(f,e,!0),l=!1),b[h]=n)}f!==g&&(l&&(b=Bd(b),f=sf(f,e),f=tf(f,e,!0)),Kd(b,f));mf(d,e,3,b);return a}
function uf(a,b,c,d){a=a.G;var e=Jd(a);Ud(e);if(d==null){var f=vf(a);if(wf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=vf(a);var g=wf(f,a,e,c);g!==b&&(g&&(e=mf(a,e,g)),f.set(c,b))}mf(a,e,b,d)}
function vf(a){if(Cd){var b;return(b=a[Gd])!=null?b:a[Gd]=new Map}if(Gd in a)return a[Gd];b=new Map;Object.defineProperty(a,Gd,{value:b});return b}
function wf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];jf(b,c,g)!=null&&(e!==0&&(c=mf(b,c,e)),e=g)}a.set(d,e);return e}
function of(a,b,c,d){a=a.G;var e=Jd(a);d=jf(a,e,c,d);b=Ke(d,b,e);b!==d&&b!=null&&mf(a,e,c,b);return b}
function xf(a,b,c,d){b=of(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Jd(a);if(!(d&2)){var e=gf(b);e!==b&&(b=e,mf(a,d,c,b))}return b}
function mc(a,b,c){var d=void 0===Vd?2:Nc?4:5;var e=Jd(a.G),f=e,g=!(2&e);a=a.G;d=(e=!!(2&f))?1:d;g&&(g=!e);e=jf(a,f,c);e=Array.isArray(e)?e:Sd;var h=Id(e),k=!!(4&h);if(!k){var l=h;l===0&&(l=sf(l,f));h=e;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,v=0,x=0;v<h.length;v++){var y=Ke(h[v],b,m);if(y instanceof b){if(!n){var F=!!(Id(y.G)&2);p&&(p=!F);t&&(t=F)}h[x++]=y}}x<v&&(h.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Kd(h,l);n&&Object.freeze(h);h=l}if(g&&!(8&h||!e.length&&(d===1||d===4&&32&h))){qf(h)&&
(e=Bd(e),h=sf(h,f),f=mf(a,f,c,e));b=e;g=h;for(h=0;h<b.length;h++)l=b[h],m=gf(l),l!==m&&(b[h]=m);g|=8;g=b.length?g&-17:g|16;Kd(b,g);h=g}var I;if(d===1||d===4&&32&h){if(!qf(h)){f=h;var W=!!(32&h);h|=!e.length||16&h&&(!k||W)?2:2048;h!==f&&Kd(e,h);Object.freeze(e)}}else k=d!==5?!1:!!(32&h)||qf(h)||!!Pe(e),(d===2||k)&&qf(h)&&(e=Bd(e),h=sf(h,f),h=tf(h,f,!1),Kd(e,h),f=mf(a,f,c,e)),qf(h)||(c=h,h=tf(h,f,!1),h!==c&&Kd(e,h)),k?I=Le(e):d===2&&((W=Te)==null||W.delete(e));return I||e}
function yf(a,b,c,d){d!=null?Je(d,b):d=void 0;return lf(a,c,d)}
function zf(a,b,c,d){var e=a.G,f=Jd(e);Ud(f);if(d==null)return mf(e,f,c),a;d=Ve(d);if(!Array.isArray(d))throw zd();for(var g=Id(d),h=g,k=qf(g),l=k||Object.isFrozen(d),m=!l&&!0,n=!0,p=!0,t=0;t<d.length;t++){var v=d[t];Je(v,b);k||(v=!!(Id(v.G)&2),n&&(n=!v),p&&(p=v))}k||(g=n?13:5,g=p?g|16:g&-17);if(m||l&&g!==h)d=Bd(d),h=0,g=sf(g,f),g=tf(g,f,!0);g!==h&&Kd(d,g);mf(e,f,c,d);return a}
function sf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function tf(a,b,c){32&b&&c||(a&=-33);return a}
function Af(a){a=hf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):ve(a)?c==="string"?Ae(a):b?Be(a):De(a):void 0;return b}
function Bf(a,b){return a!=null?a:b}
function Cf(a){var b=b===void 0?!1:b;a=hf(a,4);return Bf(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function oc(a,b,c){c=c===void 0?0:c;return Bf(ye(hf(a,b)),c)}
function Df(a,b){var c=c===void 0?"":c;a=hf(a,b);return Bf(a==null||typeof a==="string"?a:void 0,c)}
function Ef(a){var b=0;b=b===void 0?0:b;a=hf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Bf(a,b)}
function Ff(a,b,c){return lf(a,b,Ie(c))}
function Gf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw zd("enum");c|=0}return lf(a,b,c)}
;function Hf(a){return a}
function If(a){return a}
function Jf(a,b,c,d){return Kf(a,b,c,d,Lf,Mf)}
function Nf(a,b,c,d){return Kf(a,b,c,d,Of,Pf)}
function Kf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Qf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var F=e(y,t)+f(n,p,v);F<l&&(a=1+y,l=F);n++;t--;v+=Qf(y);p=Math.max(p,y)}}b=e(0,0)+f(n,p,v);b<l&&(a=0,l=b);if(d){n=h;p=g;v=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,v-=I.length,g=e(d,t)+f(n,p,v),g<l&&(a=1+d,l=g))}return a}
function Pf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Of(a,b){return(a>1?a-1:0)+(a-b)*4}
function Mf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Lf(a){return 40+4*a}
function Qf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Rf,Sf;function L(a,b,c){this.G=K(a,b,c)}
r=L.prototype;r.toJSON=function(){return Tf(this)};
r.serialize=function(a){try{return Sf=!0,a&&(Rf=a===If||a!==Hf&&a!==Jf&&a!==Nf?If:a),JSON.stringify(Tf(this),Ze)}finally{a&&(Rf=void 0),Sf=!1}};
function Uf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Hd(b,32);return Ye(a,b)}
r.clone=function(){var a=this.G,b=Jd(a);return Ye(this.constructor,ff(a,b,!1))};
r.Kc=Nd;r.toString=function(){try{return Sf=!0,Tf(this).toString()}finally{Sf=!1}};
function Tf(a){var b;Sf?b=a.G:b=cf(a.G,df,void 0,void 0,!1);var c=!Sf,d=Jd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Qd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Rf&&!(d&512);var k,l=(k=Rf)!=null?k:If;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Rd(t)||Pd(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=
p)!=null?l:p={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Rd(t)||Pd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var y in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){p=d[a-1];if(!(p==null||Rd(p)||Pd(p)&&p.size===0))break;var F=!0}if(d!==b||m||F){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(F||m||n)d.length=a;n&&d.push(n)}F=
d}else F=b;return F}
;function Vf(a){return function(b){return Uf(a,b)}}
;function Wf(a){this.G=K(a)}
w(Wf,L);function Xf(a,b){return rf(a,b,we)}
;function Yf(a){this.G=K(a)}
w(Yf,L);var Zf=[1,2,3];function $f(a){this.G=K(a)}
w($f,L);var ag=[1,2,3];function bg(a){this.G=K(a)}
w(bg,L);function cg(a){this.G=K(a)}
w(cg,L);function dg(a){this.G=K(a)}
w(dg,L);function eg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function fg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],F=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=y^v&(x^y);var W=1518500249}else I=v^x^y,W=1859775393;else t<60?(I=v&x|y&(v|x),W=2400959708):(I=v^x^y,W=3395469782);I=((n<<5|n>>>27)&4294967295)+I+F+W+p[t]&4294967295;F=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+F&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Vd:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function gg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,hg(eg(d),a,c||null)].join(" "):null}
function hg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Lb(d,function(h){e.push(h)}),ig(e.join(" "));
var f=[],g=[];Lb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Lb(d,function(h){e.push(h)});
a=ig(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ig(a){var b=fg();b.update(a);return b.Vd().toLowerCase()}
;function jg(a){this.h=a||{cookie:""}}
r=jg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Nb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Se;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Nb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Nb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var kg=new jg(typeof document=="undefined"?null:document);function lg(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new jg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function mg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new jg(document)).get(b));return a?gg(a,c,d):null}
function ng(a){var b=eg(String(C.location.href)),c=[];if(lg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new jg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?gg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=mg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=mg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function og(){}
og.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
og.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function pg(a){this.G=K(a)}
w(pg,L);function qg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
qg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
qg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
qg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
qg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function rg(a){this.G=K(a)}
w(rg,L);function sg(a){this.G=K(a)}
w(sg,L);function tg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=tg.prototype;r.clone=function(){return new tg(this.x,this.y)};
r.equals=function(a){return a instanceof tg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function ug(a,b){this.width=a;this.height=b}
r=ug.prototype;r.clone=function(){return new ug(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function vg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function wg(a){var b=xg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function yg(a){for(var b in a)return!1;return!0}
function zg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ag(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Bg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Cg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Dg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Dg(a[c]);return b}
var Eg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Eg.length;f++)c=Eg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Gg(a,b){this.h=a===Hg&&b||""}
Gg.prototype.toString=function(){return this.h};
var Hg={};new Gg(Hg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Ig(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Jg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Kg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Lg(a){this.G=K(a)}
w(Lg,L);Lg.prototype.hc=function(){return Ef(this)};function Mg(a){this.G=K(a)}
w(Mg,L);function Ng(a){this.G=K(a)}
w(Ng,L);function Og(a,b){zf(a,Mg,1,b)}
;function pf(a){this.G=K(a)}
w(pf,L);var Pg=["platform","platformVersion","architecture","model","uaFullVersion"],Qg=new Ng,Rg=null;function Sg(a,b){b=b===void 0?Pg:b;if(!Rg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Mg;f=Ff(f,1,e.brand);return Ff(f,2,e.version)});
Og(lf(Qg,2,te(a.mobile)),c);Rg=a.getHighEntropyValues(b)}var d=new Set(b);return Rg.then(function(e){var f=Qg.clone();d.has("platform")&&Ff(f,3,e.platform);d.has("platformVersion")&&Ff(f,4,e.platformVersion);d.has("architecture")&&Ff(f,5,e.architecture);d.has("model")&&Ff(f,6,e.model);d.has("uaFullVersion")&&Ff(f,7,e.uaFullVersion);return f}).catch(function(){return Qg.clone()})}
;function Tg(a){this.G=K(a)}
w(Tg,L);function Ug(a){this.G=K(a,4)}
w(Ug,L);function Vg(a){this.G=K(a,36)}
w(Vg,L);function Wg(a){this.G=K(a,19)}
w(Wg,L);Wg.prototype.Qb=function(a){return Gf(this,2,a)};function Zg(a,b){this.cb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Wg;Number.isInteger(a)&&this.h.Qb(a);b||(this.locale=document.documentElement.getAttribute("lang"));$g(this,new Tg)}
Zg.prototype.Qb=function(a){this.h.Qb(a);return this};
function $g(a,b){yf(a.h,Tg,1,b);Ef(b)||Gf(b,1,1);a.cb||(b=ah(a),Df(b,5)||Ff(b,5,a.locale));a.i&&(b=ah(a),xf(b,Ng,9)||yf(b,Ng,9,a.i))}
function bh(a,b){nf(ch(a))&&(a=dh(a),Gf(a,1,b))}
function eh(a,b){nf(ch(a))&&(a=dh(a),lf(a,2,te(b)))}
function ch(a){return xf(a.h,Tg,1)}
function fh(a){var b=b===void 0?Pg:b;var c=a.cb?void 0:window;c?Sg(c,b).then(function(d){a.i=d;d=ah(a);yf(d,Ng,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function ah(a){a=ch(a);var b=xf(a,pf,11);b||(b=new pf,yf(a,pf,11,b));return b}
function dh(a){a=ah(a);var b=xf(a,Lg,10);b||(b=new Lg,lf(b,2,te(!1)),yf(a,Lg,10,b));return b}
function gh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(nf(ch(a))){var h=dh(a);lf(h,3,xe(d))}nf(ch(a))&&(d=dh(a),lf(d,4,xe(f)));nf(ch(a))&&(f=dh(a),lf(f,5,xe(g)));a=a.h.clone();g=Date.now().toString();a=lf(a,4,Ee(g));b=b.slice();b=zf(a,Vg,3,b);e&&(a=new rg,e=lf(a,13,xe(e)),a=new sg,e=yf(a,rg,2,e),a=new Ug,e=yf(a,sg,1,e),e=Gf(e,2,9),yf(b,Ug,18,e));c&&lf(b,14,Ee(c));return b}
;var hh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function ih(a){this.h=this.i=this.j=a}
ih.prototype.reset=function(){this.h=this.i=this.j};
ih.prototype.getValue=function(){return this.i};function jh(a){this.G=K(a,8)}
w(jh,L);var kh=Vf(jh);function lh(a){this.G=K(a)}
w(lh,L);var mh=new function(){this.ctor=lh;this.isRepeated=0;this.h=xf;this.defaultValue=void 0};function nh(a){G.call(this);var b=this;this.componentId="";this.j=[];this.ha="";this.pageId=null;this.ja=this.U=-1;this.B=this.experimentIds=null;this.R=this.u=0;this.ta=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Jb=a.Jb||function(){};
this.i=new Zg(a.logSource,a.cb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.H=a.tf||null;this.sessionIndex=a.sessionIndex||null;this.Gb=a.Gb||!1;this.logger=null;this.withCredentials=!a.dd;this.cb=a.cb||!1;this.Z=typeof URLSearchParams!=="undefined"&&!!(new URL(oh())).searchParams&&!!(new URL(oh())).searchParams.set;var c=Gf(new Tg,1,1);$g(this.i,c);this.o=new ih(1E4);a=ph(this,a.Xc);this.h=new qg(this.o.getValue(),a);this.Y=new qg(6E5,a);this.Gb||this.Y.start();this.cb||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.Cc()}),document.addEventListener("pagehide",this.Cc.bind(this)))}
w(nh,G);function ph(a,b){return a.Z?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=nh.prototype;r.aa=function(){this.Cc();this.h.stop();this.Y.stop();G.prototype.aa.call(this)};
r.log=function(a){if(this.Z){a=a.clone();var b=this.ta++;a=lf(a,21,Ee(b));this.componentId&&Ff(a,26,this.componentId);if(Af(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";lf(b,1,Ee(c))}Ge(hf(a,15))==null&&lf(a,15,Ee((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),yf(b,pg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Gb||this.h.enabled||this.h.start()}};
r.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ja>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.hc==="function"?bh(this.i,this.network.hc()):bh(this.i,0));var e=gh(this.i,this.j,this.u,this.R,this.yb);d={};var f=this.Jb();f&&(d.Authorization=f);this.H||(this.H=oh());try{var g=(new URL(this.H)).toString()}catch(t){g=(new URL(this.H,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.ha===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g.toString(),body:h,Qd:1,wc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},m=function(t){c.o.reset();
c.h.setInterval(c.o.getValue());if(t){var v=null;try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));v=kh(x)}catch(y){}v&&(t=Number,x="-1",x=x===void 0?"0":x,x=Bf(Af(v),x),t=t(x),t>0&&(c.U=Date.now(),c.ja=c.U+t),v=mh.ctor?mh.h(v,mh.ctor,175237375,!0):mh.h(v,175237375,null,!0),v=v===null?void 0:v)&&(v=oc(v,1,-1),v!==-1&&(c.o=new ih(v<1?1:v),c.h.setInterval(c.o.getValue())))}a&&a();c.R=0},n=function(t,v){var x=mc(e,Vg,3);
var y=Ge(hf(e,14));y=y==null?void 0:y;var F=c.o;F.h=Math.min(3E5,F.h*2);F.i=Math.min(3E5,F.h+Math.round(.1*(Math.random()-.5)*2*F.h));c.h.setInterval(c.o.getValue());t===401&&f&&(c.ha=f);y&&(c.u+=y);v===void 0&&(v=c.isRetryable(t));v&&(c.j=x.concat(c.j),c.Gb||c.h.enabled||c.h.start());b&&b("net-send-failed",t);++c.R},p=function(){c.network&&c.network.send(l,m,n)};
k?k.then(function(t){l.wc["Content-Encoding"]="gzip";l.wc["Content-Type"]="application/binary";l.body=t;l.Qd=2;p()},function(){p()}):p()}}}};
r.Cc=function(){eh(this.i,!0);this.flush();eh(this.i,!1)};
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function oh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function qh(){this.Ld=typeof AbortController!=="undefined"}
qh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Ld?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.wc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.F(3);break}if((l=b)==null){v.F(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.R=[v.j];v.o=0;v.D=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.F(3)}})};
qh.prototype.hc=function(){return 4};function rh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.Qa="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.h=this.yb=null}
w(rh,G);function sh(a,b){a.i=b;return a}
function th(a,b){a.network=b;return a}
function uh(a,b){a.h=b}
rh.prototype.dd=function(){this.o=!0;return this};
function vh(a){a.network||(a.network=new qh);var b=new nh({logSource:a.logSource,Jb:a.Jb?a.Jb:ng,sessionIndex:a.sessionIndex,tf:a.Qa,cb:a.j,Gb:!1,dd:a.o,Xc:a.Xc,network:a.network});sc(a,b);if(a.i){var c=a.i,d=ah(b.i);Ff(d,7,c)}Math.random()<.1&&(b.B=new og);a.componentId&&(b.componentId=a.componentId);a.yb&&(b.yb=a.yb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new pg),c=b.experimentIds,d=d.serialize(),Ff(c,4,d)):b.experimentIds&&lf(b.experimentIds,4));fh(b.i);
a.network.Qb&&a.network.Qb(a.logSource);a.network.df&&a.network.df(b);return b}
;function wh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new rh(a,"0"),a.componentId=b,sc(this,a),c!==""&&(a.Qa=c),d&&(a.j=!0),e&&sh(a,e),g&&th(a,g),b=vh(a));this.h=b}
w(wh,G);
wh.prototype.flush=function(a){var b=a||[];if(b.length){a=new dg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new cg;f=Ff(f,1,e.i);var g=xh(e);f=rf(f,g,He);g=[];var h=[];for(var k=z(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Dc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new $f;switch(m){case 3:x=Number(x);Number.isFinite(x)&&uf(v,1,ag,Ee(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);uf(v,2,ag,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new bg;p=yf(t,$f,2,p);t=l;v=[];x=yh(e);for(var y=0;y<x.length;y++){var F=x[y],I=t[y],W=new Yf;switch(F){case 3:uf(W,1,Zf,Ie(String(I)));break;case 2:F=Number(I);Number.isFinite(F)&&uf(W,2,Zf,xe(F));break;case 1:uf(W,3,Zf,te(I==="true"))}v.push(W)}zf(p,Yf,1,v);g.push(p)}}zf(f,bg,4,g);c.push(f);e.clear()}zf(a,cg,1,c);b=this.h;if(a instanceof Vg)b.log(a);else try{var ia=new Vg,Ja=a.serialize();var cb=Ff(ia,8,Ja);b.log(cb)}catch(ba){}this.h.flush()}};function zh(a){this.h=a}
;function Ah(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function yh(a){return a.fields.map(function(b){return b.fieldType})}
function xh(a){return a.fields.map(function(b){return b.fieldName})}
r=Ah.prototype;r.Md=function(a){var b=B.apply(1,arguments),c=this.Dc(b);c?c.push(new zh(a)):this.xd(a,b)};
r.xd=function(a){var b=this.Wc(B.apply(1,arguments));this.h.set(b,[new zh(a)])};
r.Dc=function(){var a=this.Wc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.ee=function(){var a=this.Dc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Wc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Bh(a,b){Ah.call(this,a,3,b)}
w(Bh,Ah);Bh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ee(b);d&&(c=d.h);this.xd(c+a,b)};function Ch(a,b){Ah.call(this,a,2,b)}
w(Ch,Ah);Ch.prototype.record=function(a){this.Md(a,B.apply(1,arguments))};function Dh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Dh.prototype.stopPropagation=function(){this.j=!0};
Dh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Eh(a,b){Dh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Eh,Dh);
Eh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Eh.Aa.preventDefault.call(this)};
Eh.prototype.stopPropagation=function(){Eh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Eh.prototype.preventDefault=function(){Eh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fh="closure_listenable_"+(Math.random()*1E6|0);var Gh=0;function Hh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ic=e;this.key=++Gh;this.Pb=this.Zb=!1}
function Ih(a){a.Pb=!0;a.listener=null;a.proxy=null;a.src=null;a.ic=null}
;function Jh(a){this.src=a;this.listeners={};this.h=0}
Jh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Kh(a,b,d,e);g>-1?(b=a[g],c||(b.Zb=!1)):(b=new Hh(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
Jh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Kh(e,b,c,d);return b>-1?(Ih(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Lh(a,b){var c=b.type;c in a.listeners&&Qb(a.listeners[c],b)&&(Ih(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Kh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pb&&f.listener==b&&f.capture==!!c&&f.ic==d)return e}return-1}
;var Mh="closure_lm_"+(Math.random()*1E6|0),Nh={},Oh=0;function Ph(a,b,c,d,e){if(d&&d.once)Qh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ph(a,b[f],c,d,e);else c=Rh(c),a&&a[Fh]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):Sh(a,b,c,!1,d,e)}
function Sh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Th(a);h||(a[Mh]=h=new Jh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Uh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)hh||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Vh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oh++}}
function Uh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Wh;return a}
function Qh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qh(a,b[f],c,d,e);else c=Rh(c),a&&a[Fh]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Sh(a,b,c,!0,d,e)}
function Xh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xh(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Rh(c),a&&a[Fh])?a.h.remove(String(b),c,d,e):a&&(a=Th(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Kh(b,c,d,e)),(c=a>-1?b[a]:null)&&Yh(c))}
function Yh(a){if(typeof a!=="number"&&a&&!a.Pb){var b=a.src;if(b&&b[Fh])Lh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Vh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oh--;(c=Th(b))?(Lh(c,a),c.h==0&&(c.src=null,b[Mh]=null)):Ih(a)}}}
function Vh(a){return a in Nh?Nh[a]:Nh[a]="on"+a}
function Wh(a,b){if(a.Pb)a=!0;else{b=new Eh(b,this);var c=a.listener,d=a.ic||a.src;a.Zb&&Yh(a);a=c.call(d,b)}return a}
function Th(a){a=a[Mh];return a instanceof Jh?a:null}
var Zh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Rh(a){if(typeof a==="function")return a;a[Zh]||(a[Zh]=function(b){return a.handleEvent(b)});
return a[Zh]}
;function $h(){G.call(this);this.h=new Jh(this);this.ta=this;this.Z=null}
$a($h,G);$h.prototype[Fh]=!0;r=$h.prototype;r.addEventListener=function(a,b,c,d){Ph(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Xh(this,a,b,c,d)};
function ai(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.ta;c=b.type||b;typeof b==="string"?b=new Dh(b,a):b instanceof Dh?b.target=b.target||a:(e=b,b=new Dh(c,a),Fg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=bi(g,c,!0,b)&&e}b.j||(g=b.h=a,e=bi(g,c,!0,b)&&e,b.j||(e=bi(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=bi(g,c,!1,b)&&e}
r.aa=function(){$h.Aa.aa.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Ih(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function bi(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pb&&g.capture==c){var h=g.listener,k=g.ic||g.src;g.Zb&&Lh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var ci=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function di(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
di.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ei(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function fi(){this.i=this.h=null}
fi.prototype.add=function(a,b){var c=gi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gi=new di(function(){return new hi},function(a){return a.reset()});
function hi(){this.next=this.scope=this.h=null}
hi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hi.prototype.reset=function(){this.next=this.scope=this.h=null};var ii,ji=!1,ki=new fi;function li(a,b){ii||mi();ji||(ii(),ji=!0);ki.add(a,b)}
function mi(){var a=Promise.resolve(void 0);ii=function(){a.then(ni)}}
function ni(){for(var a;a=ki.remove();){try{a.h.call(a.scope)}catch(b){Lc(b)}ei(gi,a)}ji=!1}
;function oi(){}
function pi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function qi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=oi)try{var b=this;a.call(void 0,function(c){ri(b,2,c)},function(c){ri(b,3,c)})}catch(c){ri(this,3,c)}}
function si(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
si.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ti=new di(function(){return new si},function(a){a.reset()});
function ui(a,b,c){var d=ti.get();d.i=a;d.h=b;d.context=c;return d}
function vi(a){return new qi(function(b,c){c(a)})}
qi.prototype.then=function(a,b,c){return wi(this,ci(typeof a==="function"?a:null),ci(typeof b==="function"?b:null),c)};
qi.prototype.$goog_Thenable=!0;r=qi.prototype;r.yc=function(a,b){return wi(this,null,ci(a),b)};
r.catch=qi.prototype.yc;r.cancel=function(a){if(this.h==0){var b=new xi(a);li(function(){yi(this,b)},this)}};
function yi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?yi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):zi(c),Ai(c,e,3,b)))}a.j=null}else ri(a,3,b)}
function Bi(a,b){a.i||a.h!=2&&a.h!=3||Ci(a);a.o?a.o.next=b:a.i=b;a.o=b}
function wi(a,b,c,d){var e=ui(null,null,null);e.child=new qi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof xi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Bi(a,e);return e.child}
r.rf=function(a){this.h=0;ri(this,2,a)};
r.sf=function(a){this.h=0;ri(this,3,a)};
function ri(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.rf,f=a.sf;if(d instanceof qi){Bi(d,ui(e||oi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){Di(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Ci(a),b!=3||c instanceof xi||Ei(a,c))}}
function Di(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ci(a){a.u||(a.u=!0,li(a.Zd,a))}
function zi(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
r.Zd=function(){for(var a;a=zi(this);)Ai(this,a,this.h,this.B);this.u=!1};
function Ai(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Fi(b,c,d);else try{b.j?b.i.call(b.context):Fi(b,c,d)}catch(e){Gi.call(null,e)}ei(ti,b)}
function Fi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ei(a,b){a.D=!0;li(function(){a.D&&Gi.call(null,b)})}
var Gi=Lc;function xi(a){ab.call(this,a)}
$a(xi,ab);xi.prototype.name="cancel";function Hi(a,b){$h.call(this);this.j=a||1;this.i=b||C;this.o=Xa(this.nf,this);this.u=Za()}
$a(Hi,$h);r=Hi.prototype;r.enabled=!1;r.Da=null;r.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
r.nf=function(){if(this.enabled){var a=Za()-this.u;a>0&&a<this.j*.8?this.Da=this.i.setTimeout(this.o,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),ai(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.o,this.j),this.u=Za())};
r.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
r.aa=function(){Hi.Aa.aa.call(this);this.stop();delete this.i};function Ii(a){G.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Hi(this.flushInterval);this.h.listen("tick",this.Sb,!1,this);sc(this,this.h)}
w(Ii,G);r=Ii.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ji(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Sb()}
r.Sb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Ki(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Ha=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bh(a,b))};
r.mb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ch(a,b))};
function Li(a,b){return a.B.has(b)?void 0:a.i.get(b)}
r.Xa=function(a){this.Kd(a,1,B.apply(1,arguments))};
r.Kd=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof Bh&&(d.j(b,c),Ji(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof Ch&&(d.record(b,c),Ji(this))};
function Ki(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Mi(){}
Mi.prototype.serialize=function(a){var b=[];Ni(this,a,b);return b.join("")};
function Ni(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ni(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Oi(d,c),c.push(":"),Ni(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Oi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Qi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Oi(a,b){b.push('"',a.replace(Qi,function(c){var d=Pi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Pi[c]=d);return d}),'"')}
;function Ri(){$h.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.B=this.R=!1;this.H=0;this.u=null;this.ja="";this.ha=!1}
$a(Ri,$h);var Si=/^https?$/i,Ti=["POST","PUT"],Ui=[];function Vi(a,b,c,d,e,f,g){var h=new Ri;Ui.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Sd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Ri.prototype;r.Sd=function(){this.dispose();Qb(Ui,this)};
r.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.R=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=ci(Xa(this.qd,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Wi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Kb(Ti,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ja&&(this.K.responseType=this.ja);"withCredentials"in this.K&&this.K.withCredentials!==this.ha&&(this.K.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.H>0&&(this.getStatus(),this.u=setTimeout(this.qf.bind(this),this.H)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),Wi(this,g)}};
r.qf=function(){typeof La!="undefined"&&this.K&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),ai(this,"timeout"),this.abort(8))};
function Wi(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;Xi(a);Yi(a)}
function Xi(a){a.R||(a.R=!0,ai(a,"complete"),ai(a,"error"))}
r.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,ai(this,"complete"),ai(this,"abort"),Yi(this))};
r.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),Yi(this,!0));Ri.Aa.aa.call(this)};
r.qd=function(){this.da||(this.U||this.B||this.j?Zi(this):this.He())};
r.He=function(){Zi(this)};
function Zi(a){if(a.i&&typeof La!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.qd.bind(a),0);else if(ai(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if($i(a))ai(a,"complete"),ai(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Xi(a)}}finally{Yi(a)}}}
function Yi(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ai(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.K};
r.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function $i(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=$b(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Si.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function aj(){}
aj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Vi(a.url,function(d){d=d.target;if($i(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.wc,a.timeoutMillis,a.withCredentials)};
aj.prototype.hc=function(){return 1};function bj(a,b){this.logger=a;this.event=b;this.startTime=cj()}
bj.prototype.done=function(){this.logger.Mb(this.event,cj()-this.startTime)};
function dj(){uc.apply(this,arguments)}
w(dj,uc);function ej(a,b){var c=cj();b=b();a.Mb("n",cj()-c);return b}
function fj(){dj.apply(this,arguments)}
w(fj,dj);r=fj.prototype;r.Hc=function(){};
r.tb=function(){};
r.Mb=function(){};
r.Ea=function(){};
r.vc=function(){};
r.Cd=function(){};
function gj(a){return{we:new wc(a),ye:new yc(a),xe:new xc(a),ze:new Bc(a),Ae:new Cc(a),te:new zc(a),ue:new Ac(a),kf:new Dc(a),errorCount:new Hc(a),eventCount:new Fc(a),gd:new Gc(a),Rh:new Ec(a),Th:new Ic(a),oh:new Jc(a),Sh:new Kc(a)}}
function hj(a,b,c,d){a=th(sh(new rh(1828,"0"),a),new aj);b.length&&uh(a,Xf(new Wf,b));d!==void 0&&(a.Qa=d);var e=new wh(1828,"","",!1,"",vh(a));sc(e,a);var f=new Ii({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.Sb()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function ij(a,b){G.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(ij,G);function jj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-cj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=cj(),a.timer=void 0}},b)}}
function kj(a,b,c,d){dj.call(this);this.metrics=a;this.ga=b;this.Oa=c;this.Ib=d;this.h=new Map;this.i=new Map;this.u=d&&Math.random()<.5;this.h.set("h",1);this.h.set("u",2);this.h.set("k",3);this.i.set(25,1);this.i.set(26,2);this.i.set(27,3);this.i.set(28,4)}
w(kj,dj);kj.prototype.Hc=function(a){this.metrics.kf.record(a,this.ga)};
kj.prototype.tb=function(a){this.u?this.metrics.eventCount.h.Xa("/client_streamz/bg/ec",a,this.ga):a==="t"?this.metrics.we.h.Xa("/client_streamz/bg/fic",this.ga):a==="n"?this.metrics.ze.h.Xa("/client_streamz/bg/fsc",this.ga):(a==="h"||a==="u"||a==="k")&&(a=this.h.get(a))&&this.metrics.te.h.Xa("/client_streamz/bg/fcc",a,this.ga)};
kj.prototype.Mb=function(a,b){this.u?this.metrics.gd.record(b,a,this.Oa,this.ga):a==="t"?this.metrics.ye.record(b,this.ga):a==="n"?this.metrics.Ae.record(b,this.ga):a==="h"||a==="u"||a==="k"?(a=this.h.get(a))&&this.metrics.ue.record(b,a,this.ga):this.metrics.gd.record(b,a,this.Oa,this.ga)};
kj.prototype.Ea=function(a){var b=this.i.get(a);b?(this.metrics.xe.h.Xa("/client_streamz/bg/fiec",this.ga,b),this.Ib&&this.metrics.errorCount.h.Xa("/client_streamz/bg/cec",a,this.Oa,this.ga)):this.metrics.errorCount.h.Xa("/client_streamz/bg/cec",a,this.Oa,this.ga)};
function lj(a,b){b=b===void 0?[]:b;var c={ga:a.ga||"_",Oa:a.Oa||"",fc:a.fc||[],lc:a.lc|0,Qa:a.Qa,nc:a.nc||function(){},
Ab:a.Ab||function(e,f){return hj(e,f,c.nc,c.Qa)},
Ib:!!a.Ib};b=c.Ab("37",c.fc.concat(b));kj.call(this,gj(b),c.ga,c.Oa,c.Ib);var d=this;this.options=c;this.service=b;this.o=!a.Ab;this.j=new ij(function(){return void d.service.Sb()},c.lc);
this.addOnDisposeCallback(function(){d.j.dispose();d.o&&d.service.dispose()})}
w(lj,kj);lj.prototype.Cd=function(a){var b=this;this.j.dispose();this.o&&this.service.dispose();this.service=this.options.Ab("37",this.options.fc.concat(a));this.j=new ij(function(){return void b.service.Sb()},this.options.lc);
this.metrics=gj(this.service)};
lj.prototype.vc=function(){jj(this.j)};
function cj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mj(a){this.G=K(a,0,"bfkj")}
w(mj,L);var nj=function(a){return Wd(function(b){return b instanceof a&&!(Id(b.G)&2)})}(mj);function nc(a){this.G=K(a)}
w(nc,L);function oj(a){this.G=K(a)}
w(oj,L);var pj=Vf(oj);function qj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function rj(a,b,c){if(a.disable)return new fj;b=(b==null?0:Cf(b))?lc(b):[];return c?(c.Cd(b),c.share()):new lj({ga:a.ga,Oa:a.Oa,fc:a.uh,lc:a.Eh,Qa:a.Qa,nc:a.nc,Ab:a.Ab,Ib:!0},b)}
function sj(a){function b(v,x,y,F){Promise.resolve().then(function(){k.done();h.vc();h.dispose();g.resolve({Od:v,gf:x,Gh:y,qh:F})})}
function c(v,x,y,F){if(!d.logger.da){var I="k";x?I="h":y&&(I="u");I!=="k"?F!==0&&(d.logger.tb(I),d.logger.Mb(I,v)):d.i<=0?(d.logger.tb(I),d.logger.Mb(I,v),d.i=Math.floor(Math.random()*200)):d.i--}}
G.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new oj;if("challenge"in a&&nj(a.challenge)){var e=Df(a.challenge,4);var f=Df(a.challenge,5);Df(a.challenge,7)&&(this.h=pj(Df(a.challenge,7)))}else e=a.program,f=a.he;this.addOnDisposeCallback(function(){var v,x,y;return A(function(F){if(F.h==1)return F.yield(d.j,2);v=F.i;x=v.gf;(y=x)==null||y();F.h=0})});
this.logger=rj(a.Fe||{},this.h,a.rh);sc(this,this.logger);var g=new qj;this.j=g.promise;this.logger.tb("t");var h=this.logger.share(),k=new bj(h,"t");if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(Cf(this.h)){for(var n=lc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=pc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.o=z(l(e,b,!0,a.Qh,c,[f,m],Df(this.h,5))).next().value;this.ff=g.promise.then(function(){})}catch(v){throw this.logger.Ea(28),
v;
}}
w(sj,G);sj.prototype.snapshot=function(a){if(this.da)throw Error("Already disposed");this.logger.tb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Od;return new Promise(function(e){var f=new bj(b,"n");d(function(g){f.done();b.Hc(g.length);b.vc();b.dispose();e(g)},[a.cd,
a.hf,a.vf,a.jf])})})};
sj.prototype.zd=function(a){var b=this;if(this.da)throw Error("Already disposed");this.logger.tb("n");var c=ej(this.logger,function(){return b.o([a.cd,a.hf,a.vf,a.jf])});
this.logger.Hc(c.length);this.logger.vc();return c};var tj=window;function uj(a){var b=vj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function wj(){var a=[];uj(function(b){a.push(b)});
return a}
var vj={wf:"allow-forms",xf:"allow-modals",yf:"allow-orientation-lock",zf:"allow-pointer-lock",Af:"allow-popups",Bf:"allow-popups-to-escape-sandbox",Cf:"allow-presentation",Df:"allow-same-origin",Ef:"allow-scripts",Ff:"allow-top-navigation",Gf:"allow-top-navigation-by-user-activation"},xj=pi(function(){return wj()});
function yj(){var a=zj(),b={};Lb(xj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function zj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Aj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Bj=(new Date).getTime();function Cj(a){$h.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Dj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Ej(this)}
w(Cj,$h);function Fj(){var a=Gj;Cj.h||(Cj.h=new Cj(a));return Cj.h}
Cj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.B);delete Cj.h};
Cj.prototype.wa=function(){return this.i};
function Ej(a){a.B=a.Ca.pa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Dj(a),3):c.yield(Dj(a),3);Ej(a);c.h=0})},3E4)}
function Dj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.R=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ai(a,"networkstatus-online"):ai(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.F(3)}})})}
;function Hj(){this.data=[];this.h=-1}
Hj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Hj.prototype.get=function(a){return!!this.data[a]};
function Ij(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Jj(){this.blockSize=-1}
;function Kj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
$a(Kj,Jj);Kj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Lj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Kj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Lj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Lj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Lj(this,e);f=0;break}}this.i=f;this.o+=b}};
Kj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Lj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Mj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Nj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Oj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Mj(a).match(/\S+/g)||[],b=Kb(a,b)>=0);return b}
function Pj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Oj(a,"inverted-hdpi")&&Nj(a,Array.prototype.filter.call(a.classList?a.classList:Mj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Qj(){}
Qj.prototype.next=function(){return Rj};
var Rj={done:!0,value:void 0};Qj.prototype.lb=function(){return this};function Sj(a){if(a instanceof Tj||a instanceof Uj||a instanceof Vj)return a;if(typeof a.next=="function")return new Tj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Tj(function(){return a[Symbol.iterator]()});
if(typeof a.lb=="function")return new Tj(function(){return a.lb()});
throw Error("Not an iterator or iterable.");}
function Tj(a){this.h=a}
Tj.prototype.lb=function(){return new Uj(this.h())};
Tj.prototype[Symbol.iterator]=function(){return new Vj(this.h())};
Tj.prototype.i=function(){return new Vj(this.h())};
function Uj(a){this.h=a}
w(Uj,Qj);Uj.prototype.next=function(){return this.h.next()};
Uj.prototype[Symbol.iterator]=function(){return new Vj(this.h)};
Uj.prototype.i=function(){return new Vj(this.h)};
function Vj(a){Tj.call(this,function(){return a});
this.j=a}
w(Vj,Tj);Vj.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
$a(M,G);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ub(a)}return!1};
r.Ub=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Qb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.kb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Wj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.da;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Ub(c)}}return f!=0}return!1};
function Wj(a,b,c){li(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ub,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.aa=function(){M.Aa.aa.call(this);this.clear();this.j.length=0};function Xj(a){this.h=a}
Xj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Mi).serialize(b))};
Xj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Xj.prototype.remove=function(a){this.h.remove(a)};function Yj(a){this.h=a}
$a(Yj,Xj);function Zj(a){this.data=a}
function ak(a){return a===void 0||a instanceof Zj?a:new Zj(a)}
Yj.prototype.set=function(a,b){Yj.Aa.set.call(this,a,ak(b))};
Yj.prototype.i=function(a){a=Yj.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Yj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function bk(a){this.h=a}
$a(bk,Yj);bk.prototype.set=function(a,b,c){if(b=ak(b)){if(c){if(c<Za()){bk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}bk.Aa.set.call(this,a,b)};
bk.prototype.i=function(a){var b=bk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())bk.prototype.remove.call(this,a);else return b}};function ck(){}
;function dk(){}
$a(dk,ck);dk.prototype[Symbol.iterator]=function(){return Sj(this.lb(!0)).i()};
dk.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ek(a){this.h=a;this.i=null}
$a(ek,dk);r=ek.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){fk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){fk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){fk(this);this.h.removeItem(a)};
r.lb=function(a){fk(this);var b=0,c=this.h,d=new Qj;d.next=function(){if(b>=c.length)return Rj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){fk(this);this.h.clear()};
r.key=function(a){fk(this);return this.h.key(a)};
function fk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Lc(Error("Storage mechanism: Storage unavailable"))}
;function gk(){var a=null;try{a=C.localStorage||null}catch(b){}ek.call(this,a)}
$a(gk,ek);function hk(a,b){this.i=a;this.h=b+"::"}
$a(hk,dk);hk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
hk.prototype.get=function(a){return this.i.get(this.h+a)};
hk.prototype.remove=function(a){this.i.remove(this.h+a)};
hk.prototype.lb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Qj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},ik=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var jk={nb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},kk={nb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
N.ef=function(){ik?(N.jb=Uint8Array,N.Ga=Uint16Array,N.Jd=Int32Array,N.assign(N,jk)):(N.jb=Array,N.Ga=Array,N.Jd=Array,N.assign(N,kk))};
N.ef();var lk=!0;try{new Uint8Array(1)}catch(a){lk=!1}
function mk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var nk={};nk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ok={},pk,qk=[],rk=0;rk<256;rk++){pk=rk;for(var sk=0;sk<8;sk++)pk=pk&1?3988292384^pk>>>1:pk>>>1;qk[rk]=pk}ok=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^qk[(a^b[d])&255];return a^-1};var tk={};tk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function uk(a){for(var b=a.length;--b>=0;)a[b]=0}
var vk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],wk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],xk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],yk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],zk=Array(576);uk(zk);var Ak=Array(60);uk(Ak);var Bk=Array(512);uk(Bk);var Ck=Array(256);uk(Ck);var Dk=Array(29);uk(Dk);var Ek=Array(30);uk(Ek);function Fk(a,b,c,d,e){this.Ad=a;this.ce=b;this.be=c;this.Wd=d;this.Ee=e;this.ld=a&&a.length}
var Gk,Hk,Ik;function Jk(a,b){this.ed=a;this.vb=0;this.Va=b}
function Kk(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Lk(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Kk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Mk(a,b,c){Lk(a,c[b*2],c[b*2+1])}
function Nk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Ok(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Nk(d[e]++,e))}
function Pk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ra[512]=1;a.Na=a.zb=0;a.ya=a.matches=0}
function Qk(a){a.ia>8?Kk(a,a.oa):a.ia>0&&(a.X[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Rk(a,b,c){Qk(a);Kk(a,c);Kk(a,~c);N.nb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Sk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Tk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.La;){e<a.La&&Sk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Sk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function Uk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.X[a.Fb+d*2]<<8|a.X[a.Fb+d*2+1];var f=a.X[a.Gc+d];d++;if(e===0)Mk(a,f,b);else{var g=Ck[f];Mk(a,g+256+1,b);var h=vk[g];h!==0&&(f-=Dk[g],Lk(a,f,h));e--;g=e<256?Bk[e]:Bk[256+(e>>>7)];Mk(a,g,c);h=wk[g];h!==0&&(e-=Ek[g],Lk(a,e,h))}}while(d<a.ya)}Mk(a,256,b)}
function Vk(a,b){var c=b.ed,d=b.Va.Ad,e=b.Va.ld,f=b.Va.Wd,g,h=-1;a.La=0;a.qb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.La]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.La<2;){var k=a.ba[++a.La]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[k*2+1])}b.vb=h;for(g=a.La>>1;g>=1;g--)Tk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.La--],Tk(a,c,1),d=a.ba[1],a.ba[--a.qb]=g,a.ba[--a.qb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Tk(a,c,1);while(a.La>=
2);a.ba[--a.qb]=a.ba[1];g=b.ed;k=b.vb;d=b.Va.Ad;e=b.Va.ld;f=b.Va.ce;var l=b.Va.be,m=b.Va.Ee,n,p=0;for(n=0;n<=15;n++)a.Ia[n]=0;g[a.ba[a.qb]*2+1]=0;for(b=a.qb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ia[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Na+=x*(n+v);e&&(a.zb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ia[n]===0;)n--;a.Ia[n]--;a.Ia[n+1]+=2;a.Ia[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ia[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Na+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Ok(c,h,a.Ia)}
function Wk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Xk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Mk(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Mk(a,l,a.ka),g--),Mk(a,16,a.ka),Lk(a,g-3,2)):g<=10?(Mk(a,17,a.ka),Lk(a,g-3,3)):(Mk(a,18,a.ka),Lk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Yk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Zk=!1;function $k(a,b,c){a.X[a.Fb+a.ya*2]=b>>>8&255;a.X[a.Fb+a.ya*2+1]=b&255;a.X[a.Gc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Ck[c]+256+1)*2]++,a.ab[(b<256?Bk[b]:Bk[256+(b>>>7)])*2]++);return a.ya===a.Lb-1}
;function al(a,b){a.msg=tk[b];return b}
function bl(a){for(var b=a.length;--b>=0;)a[b]=0}
function cl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.nb(a.output,b.X,b.Ob,c,a.wb),a.wb+=c,b.Ob+=c,a.Tc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Ob=0))}
function dl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.Bc===2&&(a.M.Bc=Yk(a));Vk(a,a.kc);Vk(a,a.dc);Wk(a,a.ra,a.kc.vb);Wk(a,a.ab,a.dc.vb);Vk(a,a.Yc);for(e=18;e>=3&&a.ka[yk[e]*2+1]===0;e--);a.Na+=3*(e+1)+5+5+4;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Lk(a,b?1:0,3),Rk(a,c,d);else if(a.strategy===4||g===f)Lk(a,2+(b?1:0),3),Uk(a,zk,Ak);else{Lk(a,4+(b?1:0),3);c=a.kc.vb+1;d=a.dc.vb+1;e+=1;Lk(a,c-257,5);Lk(a,d-1,5);Lk(a,e-4,4);for(f=0;f<e;f++)Lk(a,
a.ka[yk[f]*2+1],3);Xk(a,a.ra,c-1);Xk(a,a.ab,d-1);Uk(a,a.ra,a.ab)}Pk(a);b&&Qk(a);a.va=a.v;cl(a.M)}
function O(a,b){a.X[a.pending++]=b}
function el(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function fl(a,b){var c=a.od,d=a.v,e=a.xa,f=a.pd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Fa,m=a.v+258,n=h[d+e-1],p=h[d+e];a.xa>=a.kd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.ub=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function gl(a){var b=a.ma,c;do{var d=a.Hd-a.A-a.v;if(a.v>=b+(b-262)){N.nb(a.window,a.window,b,b,0);a.ub-=b;a.v-=b;a.va-=b;var e=c=a.jc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.nb(c,e.input,e.gb,g,f),e.state.wrap===1?e.J=nk(e.J,c,g,f):e.state.wrap===2&&(e.J=ok(e.J,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.A+=c;if(a.A+a.sa>=3)for(d=a.v-a.sa,a.P=a.window[d],
a.P=(a.P<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.P=(a.P<<a.Ka^a.window[d+3-1])&a.Ja,a.Fa[d&a.Wa]=a.head[a.P],a.head[a.P]=d,d++,a.sa--,a.A+a.sa<3););}while(a.A<262&&a.M.na!==0)}
function hl(a,b){for(var c;;){if(a.A<262){gl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Fa[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.T=fl(a,c));if(a.T>=3)if(c=$k(a,a.v-a.ub,a.T-3),a.A-=a.T,a.T<=a.Ic&&a.A>=3){a.T--;do a.v++,a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Fa[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.P=a.window[a.v],a.P=(a.P<<a.Ka^a.window[a.v+1])&a.Ja;else c=$k(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(dl(a,!1),a.M.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(dl(a,!0),a.M.S===0?3:4):a.ya&&(dl(a,!1),a.M.S===0)?1:2}
function il(a,b){for(var c,d;;){if(a.A<262){gl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Fa[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.T;a.sd=a.ub;a.T=2;c!==0&&a.xa<a.Ic&&a.v-c<=a.ma-262&&(a.T=fl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.ub>4096)&&(a.T=2));if(a.xa>=3&&a.T<=a.xa){d=a.v+a.A-3;c=$k(a,a.v-1-a.sd,a.xa-3);a.A-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Fa[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.eb=0;a.T=2;a.v++;if(c&&(dl(a,!1),a.M.S===0))return 1}else if(a.eb){if((c=$k(a,0,a.window[a.v-1]))&&dl(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.eb=1,a.v++,a.A--}a.eb&&($k(a,0,a.window[a.v-1]),a.eb=0);a.sa=a.v<2?a.v:2;return b===4?(dl(a,!0),a.M.S===0?3:4):a.ya&&(dl(a,!1),a.M.S===0)?1:2}
function jl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){gl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=$k(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=$k(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(dl(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(dl(a,!0),a.M.S===0?3:4):
a.ya&&(dl(a,!1),a.M.S===0)?1:2}
function kl(a,b){for(var c;;){if(a.A===0&&(gl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=$k(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(dl(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(dl(a,!0),a.M.S===0?3:4):a.ya&&(dl(a,!1),a.M.S===0)?1:2}
function ll(a,b,c,d,e){this.je=a;this.De=b;this.Ge=c;this.Ce=d;this.de=e}
var ml;ml=[new ll(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.A<=1){gl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,dl(a,!1),a.M.S===0)return 1;if(a.v-a.va>=a.ma-262&&(dl(a,!1),a.M.S===0))return 1}a.sa=0;if(b===4)return dl(a,!0),a.M.S===0?3:4;a.v>a.va&&dl(a,!1);return 1}),
new ll(4,4,8,4,hl),new ll(4,5,16,8,hl),new ll(4,6,32,32,hl),new ll(4,4,16,16,il),new ll(8,16,32,32,il),new ll(8,16,128,128,il),new ll(8,32,128,256,il),new ll(32,128,258,1024,il),new ll(32,258,258,4096,il)];
function nl(){this.M=null;this.status=0;this.X=null;this.wrap=this.pending=this.Ob=this.za=0;this.I=null;this.Ba=0;this.method=8;this.sb=-1;this.Wa=this.Vc=this.ma=0;this.window=null;this.Hd=0;this.head=this.Fa=null;this.pd=this.kd=this.strategy=this.level=this.Ic=this.od=this.xa=this.A=this.ub=this.v=this.eb=this.sd=this.T=this.va=this.Ka=this.Ja=this.Ec=this.jc=this.P=0;this.ra=new N.Ga(1146);this.ab=new N.Ga(122);this.ka=new N.Ga(78);bl(this.ra);bl(this.ab);bl(this.ka);this.Yc=this.dc=this.kc=
null;this.Ia=new N.Ga(16);this.ba=new N.Ga(573);bl(this.ba);this.qb=this.La=0;this.depth=new N.Ga(573);bl(this.depth);this.ia=this.oa=this.sa=this.matches=this.zb=this.Na=this.Fb=this.ya=this.Lb=this.Gc=0}
function ol(a,b){if(!a||!a.state||b>5||b<0)return a?al(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return al(a,a.S===0?-5:-2);c.M=a;var d=c.sb;c.sb=b;if(c.status===42)if(c.wrap===2)a.J=0,O(c,31),O(c,139),O(c,8),c.I?(O(c,(c.I.text?1:0)+(c.I.Ra?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),O(c,c.I.time&255),O(c,c.I.time>>8&255),O(c,c.I.time>>16&255),O(c,c.I.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(O(c,c.I.extra.length&255),O(c,c.I.extra.length>>8&255)),c.I.Ra&&(a.J=ok(a.J,c.X,c.pending,0)),c.Ba=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;el(c,e+(31-e%31));c.v!==0&&(el(c,a.J>>>16),el(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Ra&&c.pending>e&&(a.J=ok(a.J,c.X,c.pending-e,e)),cl(a),e=c.pending,c.pending!==c.za));)O(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Ra&&c.pending>e&&(a.J=ok(a.J,c.X,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Ra&&c.pending>e&&(a.J=ok(a.J,c.X,c.pending-e,e)),cl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.I.Ra&&c.pending>
e&&(a.J=ok(a.J,c.X,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Ra&&c.pending>e&&(a.J=ok(a.J,c.X,c.pending-e,e)),cl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.I.Ra&&c.pending>e&&(a.J=ok(a.J,c.X,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Ra?(c.pending+2>c.za&&cl(a),c.pending+2<=c.za&&(O(c,a.J&
255),O(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(cl(a),a.S===0)return c.sb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return al(a,-5);if(c.status===666&&a.na!==0)return al(a,-5);if(a.na!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?kl(c,b):c.strategy===3?jl(c,b):ml[c.level].de(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.sb=-1),0;if(d===2&&(b===1?(Lk(c,2,3),Mk(c,256,zk),c.ia===16?(Kk(c,c.oa),c.oa=0,c.ia=0):c.ia>=8&&
(c.X[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Lk(c,0,3),Rk(c,0,0),b===3&&(bl(c.head),c.A===0&&(c.v=0,c.va=0,c.sa=0))),cl(a),a.S===0))return c.sb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.J&255),O(c,a.J>>8&255),O(c,a.J>>16&255),O(c,a.J>>24&255),O(c,a.ib&255),O(c,a.ib>>8&255),O(c,a.ib>>16&255),O(c,a.ib>>24&255)):(el(c,a.J>>>16),el(c,a.J&65535));cl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var pl={};pl=function(){this.input=null;this.ib=this.na=this.gb=0;this.output=null;this.Tc=this.S=this.wb=0;this.msg="";this.state=null;this.Bc=2;this.J=0};var ql=Object.prototype.toString;
function rl(a){if(!(this instanceof rl))return new rl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new pl;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=al(b,-2);else{e===8&&(e=9);var k=new nl;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Vc=e;k.ma=1<<k.Vc;k.Wa=k.ma-1;k.Ec=f+7;k.jc=1<<k.Ec;k.Ja=k.jc-1;k.Ka=~~((k.Ec+3-1)/3);k.window=new N.jb(k.ma*2);k.head=new N.Ga(k.jc);k.Fa=new N.Ga(k.ma);k.Lb=1<<f+6;k.za=k.Lb*4;k.X=new N.jb(k.za);k.Fb=1*k.Lb;k.Gc=3*k.Lb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.Tc=0;b.Bc=2;c=b.state;c.pending=0;c.Ob=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.sb=0;if(!Zk){d=Array(16);for(f=g=0;f<28;f++)for(Dk[f]=g,e=0;e<1<<vk[f];e++)Ck[g++]=f;Ck[g-1]=f;for(f=g=0;f<16;f++)for(Ek[f]=g,e=0;e<1<<wk[f];e++)Bk[g++]=f;for(g>>=7;f<30;f++)for(Ek[f]=g<<7,e=0;e<1<<wk[f]-7;e++)Bk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)zk[e*2+1]=8,e++,d[8]++;for(;e<=255;)zk[e*2+1]=9,e++,d[9]++;for(;e<=279;)zk[e*2+1]=7,e++,d[7]++;for(;e<=287;)zk[e*2+1]=8,e++,d[8]++;Ok(zk,287,d);for(e=0;e<30;e++)Ak[e*2+1]=5,Ak[e*2]=Nk(e,5);Gk=new Fk(zk,vk,257,286,15);Hk=new Fk(Ak,
wk,0,30,15);Ik=new Fk([],xk,0,19,7);Zk=!0}c.kc=new Jk(c.ra,Gk);c.dc=new Jk(c.ab,Hk);c.Yc=new Jk(c.ka,Ik);c.oa=0;c.ia=0;Pk(c);c=0}else c=al(b,-2);c===0&&(b=b.state,b.Hd=2*b.ma,bl(b.head),b.Ic=ml[b.level].De,b.kd=ml[b.level].je,b.pd=ml[b.level].Ge,b.od=ml[b.level].Ce,b.v=0,b.va=0,b.A=0,b.sa=0,b.T=b.xa=2,b.eb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(tk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=mk(a.dictionary):
ql.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=nk(a.J,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(bl(l.head),l.v=0,l.va=0,l.sa=0),c=new N.jb(l.ma),N.nb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.gb;e=a.input;a.na=g;a.gb=0;a.input=f;for(gl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ka^l.window[f+3-1])&l.Ja,l.Fa[f&l.Wa]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;gl(l)}l.v+=l.A;l.va=l.v;l.sa=l.A;l.A=0;l.T=l.xa=2;l.eb=0;a.gb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(tk[b]);this.lh=!0}}
rl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=mk(a):ql.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.na=c.input.length;do{c.S===0&&(c.output=new N.jb(d),c.wb=0,c.S=d);a=ol(c,e);if(a!==1&&a!==0)return sl(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Sc(c.output,c.wb);b=f;f=f.length;if(f<65537&&(b.subarray&&lk||!b.subarray))b=
String.fromCharCode.apply(null,N.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Sc(c.output,c.wb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=al(c,-2):(c.state=null,a=d===113?al(c,-3):0)):a=-2,sl(this,a),this.ended=!0,a===0;e===2&&(sl(this,0),c.S=0);return!0};
function sl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function tl(a,b){b=b||{};b.gzip=!0;b=new rl(b);b.push(a,!0);if(b.err)throw b.msg||tk[b.err];return b.result}
;function ul(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=jb(a):b=null;return b}
;function vl(a){return jb(a===null?"null":a===void 0?"undefined":a)}
;function wl(a){this.name=a}
;var xl=new wl("rawColdConfigGroup");var yl=new wl("rawHotConfigGroup");function zl(a){this.G=K(a)}
w(zl,L);function Al(a){this.G=K(a)}
w(Al,L);Al.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new ud(a,td):wd||(wd=new ud(null,td));else if(a.constructor!==ud)if(sd(a))a=a.length?new ud(new Uint8Array(a),td):wd||(wd=new ud(null,td));else throw Error();return lf(this,1,a)};var Bl=new wl("continuationCommand");var Cl=new wl("webCommandMetadata");var Dl=new wl("signalServiceEndpoint");var El={Mf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Jf:"EMBEDDED_PLAYER_MODE_DEFAULT",Lf:"EMBEDDED_PLAYER_MODE_PFP",Kf:"EMBEDDED_PLAYER_MODE_PFL"};var Fl=new wl("feedbackEndpoint");var ae={Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Gl=new wl("shareEndpoint"),Hl=new wl("shareEntityEndpoint"),Il=new wl("shareEntityServiceEndpoint"),Jl=new wl("webPlayerShareEntityServiceEndpoint");var Kl=new wl("playlistEditEndpoint");var Ll=new wl("modifyChannelNotificationPreferenceEndpoint");var Ml=new wl("unsubscribeEndpoint");var Nl=new wl("subscribeEndpoint");function Ol(){var a=Pl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Ql(a){D("yt.ads.biscotti.lastId_",a)}
;function Rl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Sl=C.window,Tl,Ul,Vl=(Sl==null?void 0:(Tl=Sl.yt)==null?void 0:Tl.config_)||(Sl==null?void 0:(Ul=Sl.ytcfg)==null?void 0:Ul.data_)||{};D("yt.config_",Vl);function Wl(){Rl(Vl,arguments)}
function P(a,b){return a in Vl?Vl[a]:b}
function Xl(a){var b=Vl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Yl=[];function Zl(a){Yl.forEach(function(b){return b(a)})}
function $l(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){am(b)}}:a}
function am(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Wl("ERRORS",b));Zl(a)}
function bm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Wl("ERRORS",f))}
;var cm=/^[\w.]*$/,dm={q:!0,search_query:!0};function em(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=fm(f[0]||""),h=fm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Rb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(em);l.args=[{key:m,value:f[1],query:a,method:gm===n?"unchanged":n}];dm.hasOwnProperty(m)||bm(l)}}return c}
var gm=String(em);function hm(a){var b=[];vg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Lb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function im(a){a.charAt(0)==="?"&&(a=a.substring(1));return em(a,"&")}
function jm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),im(a.length>1?a[1]:a[0])):{}}
function km(a,b){return lm(a,b||{},!0)}
function lm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=im(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return fc(a,e)+d}
function mm(a){if(!b)var b=window.location.href;var c=$b(1,a),d=ac(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)===d&&(Number($b(4,b))||null)===(Number($b(4,a))||null):!0;return a}
function fm(a){return a&&a.match(cm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nm(a){var b=om;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Bj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?tj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=tj.screen)==null?void 0:k.height;var l;e.u_w=(l=tj.screen)==null?void 0:l.width;var m;e.u_ah=(m=tj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=tj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=tj.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var F=h.innerWidth;var I=h.innerHeight}catch(Ma){}try{var W=h.screenLeft;var ia=h.screenTop}catch(Ma){}try{F=h.innerWidth,I=h.innerHeight}catch(Ma){}try{var Ja=h.screen.availWidth;var cb=h.screen.availTop}catch(Ma){}t=[W,ia,t,v,Ja,cb,x,y,F,I];try{var ba=(b.h.top||window).document,Y=ba.compatMode==
"CSS1Compat"?ba.documentElement:ba.body;var na=(new ug(Y.clientWidth,Y.clientHeight)).round()}catch(Ma){na=new ug(-12245933,-12245933)}ba=na;na={};var Na=Na===void 0?C:Na;Y=new Hj;"SVGElement"in Na&&"createElementNS"in Na.document&&Y.set(0);v=yj();v["allow-top-navigation-by-user-activation"]&&Y.set(1);v["allow-popups-to-escape-sandbox"]&&Y.set(2);Na.crypto&&Na.crypto.subtle&&Y.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Y.set(4);Na=Ij(Y);na.bc=Na;na.bih=ba.height;na.biw=ba.width;na.brdim=t.join();
b=b.i;b=(na.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,na.wgl=!!tj.WebGLRenderingContext,na);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var om=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return hm(nm(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var pm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function qm(){if(!pm)return null;var a=pm();return"open"in a?a:null}
function rm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sm(a,b){typeof a==="function"&&(a=$l(a));return window.setTimeout(a,b)}
;var tm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(tm),["client_dev_set_cookie"]);function R(a){a=um(a);return typeof a==="string"&&a==="false"?!1:!!a}
function wm(a,b){a=um(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function um(a){return P("EXPERIMENT_FLAGS",{})[a]}
function xm(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var ym={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},zm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(tm)),Am=!1;function Bm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&$l(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=qm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Cm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Dm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){bm(n)}}l.send(d);return l}
function Dm(a,b){b=b===void 0?{}:b;var c=mm(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in ym){var g=P(ym[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(ac(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=ac(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Zb($b(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=hm(nm()));return b}
function Em(a,b){b.method="POST";b.postParams||(b.postParams={});return Fm(a,b)}
function Fm(a,b){var c=b.format||"JSON";a=Gm(a,b);var d=Hm(a,b),e=!1,f=Im(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=rm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Jm(a,c,k,b.convertToSafeHtml);l&&(l=Km(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=sm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Gm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=km(a,b);return a}
function Hm(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=im(e),Fg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):ec(e));f=e||f&&!yg(f);!Am&&f&&b.method!=="POST"&&(Am=!0,am(Error("AJAX request with postData should use POST")));return e}
function Jm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,bm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Lm(a):null)e={},Lb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Mm(g)})}d&&Nm(e);
return e}
function Nm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=hb();d=new Ab(e?e.createHTML(d):d);a[c]=d}else Nm(a[b])}}
function Km(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Lm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Mm(a){var b="";Lb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Cm(a){var b=window.location.search,c=ac(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&mm(a)&&(c=document.location.hostname);var d=Zb($b(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=im(b),f={};Lb(zm,function(g){e[g]&&(f[g]=e[g])});
return lm(a,f||{},!1)}
var Im=Bm;var Om=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
oc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
oc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
oc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Qm={Ua:[],Pa:[{callback:Pm,weight:500}]};function Pm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Rm(){this.Pa=[];this.Ua=[]}
var Sm;function Tm(){if(!Sm){var a=Sm=new Rm;a.Ua.length=0;a.Pa.length=0;Qm.Ua&&a.Ua.push.apply(a.Ua,Qm.Ua);Qm.Pa&&a.Pa.push.apply(a.Pa,Qm.Pa)}return Sm}
;var Um=new M;function Vm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Wm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Wm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Wm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Wm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Xm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ym(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Vm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ym(f+".ve",g,h,k):0;d+=f;d+=Ym(e,a[e],b,c);if(d>500)break}}else c[b]=Zm(a),d+=c[b].length;else c[b]=Zm(a),d+=c[b].length;return d}
function Ym(a,b,c,d){c+="."+a;a=Zm(b);d[c]=a;return c.length+a.length}
function Zm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function $m(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function an(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function bn(){this.lf=!0}
function cn(){bn.h||(bn.h=new bn);return bn.h}
function dn(a,b){a={};var c=[];"USER_SESSION_ID"in Vl&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=ng(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Vl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Vl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var en={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function fn(a,b,c,d,e){kg.set(""+a,b,{Nb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function gn(a){return kg.get(""+a,void 0)}
function hn(a,b,c){kg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function jn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!kg.isEnabled())return!1;if(kg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?kg.set("TESTCOOKIESENABLED","1",{Nb:60,Se:"none",secure:!0}):kg.set("TESTCOOKIESENABLED","1",{Nb:60});if(kg.get("TESTCOOKIESENABLED")!=="1")return!1;kg.remove("TESTCOOKIESENABLED");return!0}
;var kn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",kn);function ln(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=gn(this.h);a&&this.parse(a)}
var mn;function nn(){mn||(mn=new ln);return mn}
r=ln.prototype;r.get=function(a,b){on(a);pn(a);a=kn[a]!==void 0?kn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){on(a);pn(a);if(b==null)throw Error("ExpectedNotNull");kn[a]=b.toString()};
function qn(a){return!!((rn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){on(a);pn(a);delete kn[a]};
r.clear=function(){for(var a in kn)delete kn[a]};
function pn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function on(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function rn(a){a=kn[a]!==void 0?kn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(kn[d]=c.toString())}};var sn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},tn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function un(){var a=C.navigator;return a?a.connection:void 0}
function vn(){var a=un();if(a){var b=sn[a.type||"unknown"]||"CONN_UNKNOWN";a=sn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function wn(){var a=un();if(a!=null&&a.effectiveType)return tn.hasOwnProperty(a.effectiveType)?tn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function S(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(S,Error);function xn(){try{return yn(),!0}catch(a){return!1}}
function yn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new S("Datasync ID not set",a===void 0?"unknown":a);}
;function zn(){}
function An(a,b){return Gj.Za(a,0,b)}
zn.prototype.pa=function(a,b){return this.Za(a,1,b)};
zn.prototype.Db=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Bn=wm("web_emulated_idle_callback_delay",300),Cn=1E3/60-3,Dn=[8,5,4,3,2,1,0];
function En(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.R=[];this.U=this.ha=!1;for(var b=z(Dn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Ac=a.timeout||1;this.H=Cn;this.B=0;this.ta=this.Ie.bind(this);this.zc=this.pf.bind(this);this.Bb=this.Nd.bind(this);this.Cb=this.ke.bind(this);this.Vb=this.Me.bind(this);this.Ya=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.ja=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ta)}
w(En,G);r=En.prototype;r.Db=function(a){var b=Za();Fn(this,a);a=Za()-b;this.u||(this.H-=a)};
r.Za=function(a,b,c){++this.Z;if(b===10)return this.Db(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Gn(this)!==this.B&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Hn(a){a.R.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function In(a){return!a.isHidden()&&a.ja}
function Gn(a){if(a.i[8].length){if(a.U)return 4;if(In(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?In(a)?3:2:1;return 0}
r.Ea=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Fn(a,b){try{b()}catch(c){a.Ea(c)}}
function Jn(a){for(var b=z(Dn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.ke=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Kn(this,b);this.ha=!1};
r.pf=function(){Kn(this)};
r.Nd=function(){Ln(this)};
r.Me=function(a){this.U=!0;var b=Gn(this);b===4&&b!==this.B&&(this.stop(),this.start());Kn(this,void 0,a);this.U=!1};
r.Ie=function(){this.isHidden()||Ln(this);this.h&&(this.stop(),this.start())};
function Ln(a){a.stop();a.u=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Fn(a,e)}Mn(a);a.u=!1;Jn(a)&&a.start();b=Za()-b;a.H-=b}
function Mn(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Kn(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Za()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Fn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Fn(a,c)}while(c&&Za()<b)}a.u=!1;Mn(a);a.H=Cn;Jn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.B=Gn(this),this.B){case 1:var a=this.Cb;this.h=this.Ya?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Bn);break;case 2:this.h=window.setTimeout(this.zc,this.Ac);break;case 3:this.h=window.requestAnimationFrame(this.Vb);break;case 4:this.h=window.setTimeout(this.Bb,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ya?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.aa=function(){Hn(this);this.stop();this.ja&&document.removeEventListener("visibilitychange",this.ta);G.prototype.aa.call(this)};var Nn=E("yt.scheduler.instance.timerIdMap_")||{},On=wm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Pn=0,Qn=0;function Rn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.da)a=new En(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Sn(){Tn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(qc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Tn(){Hn(Rn());for(var a in Nn)Nn.hasOwnProperty(a)&&delete Nn[Number(a)]}
function Un(a,b,c){if(!c)return c=c===void 0,-Rn().Za(a,b,c);var d=window.setTimeout(function(){var e=Rn().Za(a,b);Nn[d]=e},c);
return d}
function Vn(a){Rn().Db(a)}
function Wn(a){var b=Rn();if(a<0)b.qa(-a);else{var c=Nn[a];c?(b.qa(c),delete Nn[a]):window.clearTimeout(a)}}
function Xn(){Yn()}
function Yn(){window.clearTimeout(Pn);Rn().start()}
function Zn(){Rn().pause();window.clearTimeout(Pn);Pn=window.setTimeout(Xn,On)}
function $n(){window.clearTimeout(Qn);Qn=window.setTimeout(function(){ao(0)},On)}
function ao(a){$n();var b=Rn();b.o=a;b.start()}
function bo(a){$n();var b=Rn();b.o>a&&(b.o=a,b.start())}
function co(){window.clearTimeout(Qn);var a=Rn();a.o=0;a.start()}
;function eo(){zn.apply(this,arguments)}
w(eo,zn);function fo(){eo.h||(eo.h=new eo);return eo.h}
eo.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):sm(a,c||0)};
eo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
eo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
eo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Gj=fo();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Sn),D("yt.scheduler.instance.addJob",Un),D("yt.scheduler.instance.addImmediateJob",Vn),D("yt.scheduler.instance.cancelJob",Wn),D("yt.scheduler.instance.cancelAllJobs",Tn),D("yt.scheduler.instance.start",Yn),D("yt.scheduler.instance.pause",Zn),D("yt.scheduler.instance.setPriorityThreshold",ao),D("yt.scheduler.instance.enablePriorityThreshold",bo),D("yt.scheduler.instance.clearPriorityThreshold",co),D("yt.scheduler.initialized",
!0));function go(a){var b=new gk;this.h=(a=b.isAvailable()?a?new hk(b,a):b:null)?new bk(a):null;this.i=document.domain||window.location.hostname}
go.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Mi).serialize(b))}catch(f){return}else e=escape(b);fn(a,e,c,this.i)};
go.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=gn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
go.prototype.remove=function(a){this.h&&this.h.remove(a);hn(a,"/",this.i)};var ho=function(){var a;return function(){a||(a=new go("ytidb"));return a}}();
function io(){var a;return(a=ho())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var jo=[],ko,lo=!1;function mo(){var a={};for(ko=new no(a.handleError===void 0?oo:a.handleError,a.logEvent===void 0?po:a.logEvent);jo.length>0;)switch(a=jo.shift(),a.type){case "ERROR":ko.Ea(a.payload);break;case "EVENT":ko.logEvent(a.eventType,a.payload)}}
function qo(a){lo||(ko?ko.Ea(a):(jo.push({type:"ERROR",payload:a}),jo.length>10&&jo.shift()))}
function ro(a,b){lo||(ko?ko.logEvent(a,b):(jo.push({type:"EVENT",eventType:a,payload:b}),jo.length>10&&jo.shift()))}
;function so(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function to(a){return a.substr(0,a.indexOf(":"))||a}
;var uo=dd||ed;function vo(a){var b=Oc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var wo={},xo=(wo.AUTH_INVALID="No user identifier specified.",wo.EXPLICIT_ABORT="Transaction was explicitly aborted.",wo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",wo.MISSING_INDEX="Index not created.",wo.MISSING_OBJECT_STORES="Object stores not created.",wo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",wo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",wo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
wo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",wo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",wo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",wo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",wo),yo={},zo=(yo.AUTH_INVALID="ERROR",yo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",yo.EXPLICIT_ABORT="IGNORED",yo.IDB_NOT_SUPPORTED="ERROR",yo.MISSING_INDEX=
"WARNING",yo.MISSING_OBJECT_STORES="ERROR",yo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",yo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",yo.QUOTA_EXCEEDED="WARNING",yo.QUOTA_MAYBE_EXCEEDED="WARNING",yo.UNKNOWN_ABORT="WARNING",yo.INCOMPATIBLE_DB_VERSION="WARNING",yo),Ao={},Bo=(Ao.AUTH_INVALID=!1,Ao.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ao.EXPLICIT_ABORT=!1,Ao.IDB_NOT_SUPPORTED=!1,Ao.MISSING_INDEX=!1,Ao.MISSING_OBJECT_STORES=!1,Ao.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ao.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ao.QUOTA_EXCEEDED=!1,Ao.QUOTA_MAYBE_EXCEEDED=!0,Ao.UNKNOWN_ABORT=!0,Ao.INCOMPATIBLE_DB_VERSION=!1,Ao);function Co(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?xo[a]:c;d=d===void 0?zo[a]:d;e=e===void 0?Bo[a]:e;S.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Co.prototype)}
w(Co,S);function Do(a,b){Co.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},xo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Do.prototype)}
w(Do,Co);function Eo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Eo.prototype)}
w(Eo,Error);var Fo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Go(a,b,c,d){b=to(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Co)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Co("QUOTA_EXCEEDED",a);if(fd&&e.name==="UnknownError")return new Co("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Eo)return new Co("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Fo.some(function(f){return e.message.includes(f)}))return new Co("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Co("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",rd:e.name})];e.level="WARNING";return e}
function Ho(a,b,c){var d=io();return new Co("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Io(a){if(!a)throw Error();throw a;}
function Jo(a){return a}
function Ko(a){this.h=a}
function Lo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Lo.all=function(a){return new Lo(new Ko(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)Lo.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Lo.resolve=function(a){return new Lo(new Ko(function(b,c){a instanceof Lo?a.then(b,c):b(a)}))};
Lo.reject=function(a){return new Lo(new Ko(function(b,c){c(a)}))};
Lo.prototype.then=function(a,b){var c=this,d=a!=null?a:Jo,e=b!=null?b:Io;return new Lo(new Ko(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Mo(c,c,d,f,g)}),c.i.push(function(){No(c,c,e,f,g)})):c.state.status==="FULFILLED"?Mo(c,c,d,f,g):c.state.status==="REJECTED"&&No(c,c,e,f,g)}))};
Lo.prototype.catch=function(a){return this.then(void 0,a)};
function Mo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Lo?Oo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function No(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Lo?Oo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Lo?Oo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Po(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Qo(a){return new Promise(function(b,c){Po(a,b,c)})}
function Ro(a){return new Lo(new Ko(function(b,c){Po(a,b,c)}))}
;function So(a,b){return new Lo(new Ko(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var To=window,T=To.ytcsi&&To.ytcsi.now?To.ytcsi.now:To.performance&&To.performance.timing&&To.performance.now&&To.performance.timing.navigationStart?function(){return To.performance.timing.navigationStart+To.performance.now()}:function(){return(new Date).getTime()};function Uo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
r=Uo.prototype;r.add=function(a,b,c){return Vo(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Vo(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Vo(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function Wo(a,b,c){a=a.h.createObjectStore(b,c);return new Xo(a)}
r.delete=function(a,b){return Vo(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Vo(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function Yo(a,b,c){return Vo(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return Ro(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Vo(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return A(function(y){switch(y.h){case 1:var F={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?F.mode=c:Object.assign(F,c);e=F;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(T());za(y,5);l=a.h.transaction(b,e.mode);F=y.yield;var I=new Zo(l);I=$o(I,d);return F.call(y,I,7);case 7:return m=y.i,n=Math.round(T()),ap(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:p=Aa(y);t=Math.round(T());v=Go(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Co&&!v.h)||g>=f)ap(a,k,t,g,v,b.join(),e),h=v;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function ap(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Co&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&ro("QUOTA_EXCEEDED",{dbName:to(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Co&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),ro("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),bp(a,!1,d,f,b,g.tag),qo(e)):bp(a,!0,d,f,b,g.tag)}
function bp(a,b,c,d,e,f){ro("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function Xo(a){this.h=a}
r=Xo.prototype;r.add=function(a,b){return Ro(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Ro(this.h.clear()).then(function(){})};
function cp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Ro(this.h.count(a))};
function dp(a,b){return ep(a,{query:b},function(c){return c.delete().then(function(){return fp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?dp(this,a):Ro(this.h.delete(a))};
r.get=function(a){return Ro(this.h.get(a))};
r.index=function(a){try{return new gp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Eo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function ep(a,b,c){a=a.h.openCursor(b.query,b.direction);return hp(a).then(function(d){return So(d,c)})}
function Zo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Co;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function $o(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return z(d).next().value})}
Zo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Co("EXPLICIT_ABORT");};
Zo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Xo(a),this.i.set(a,b));return b};
function gp(a){this.h=a}
r=gp.prototype;r.count=function(a){return Ro(this.h.count(a))};
r.delete=function(a){return ip(this,{query:a},function(b){return b.delete().then(function(){return fp(b)})})};
r.get=function(a){return Ro(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function ip(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return hp(a).then(function(d){return So(d,c)})}
function jp(a,b){this.request=a;this.cursor=b}
function hp(a){return Ro(a).then(function(b){return b?new jp(a,b):null})}
function fp(a){a.cursor.continue(void 0);return hp(a.request)}
jp.prototype.delete=function(){return Ro(this.cursor.delete()).then(function(){})};
jp.prototype.getValue=function(){return this.cursor.value};
jp.prototype.update=function(a){return Ro(this.cursor.update(a))};function kp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Uo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pd,k=c.blocking,l=c.mf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&ro("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:to(a)});var v=f(),x=new Zo(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){ro("IDB_UNEXPECTEDLY_CLOSED",{dbName:to(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function lp(a,b,c){c=c===void 0?{}:c;return kp(a,b,c)}
function mp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pd)&&c.addEventListener("blocked",function(){e()}),g.yield(Qo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Go(f,a,"",-1);})}
;function np(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
np.prototype.i=function(a,b,c){c=c===void 0?{}:c;return lp(a,b,c)};
np.prototype.delete=function(a){a=a===void 0?{}:a;return mp(this.name,a)};
function op(a,b){return new Co("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function pp(a,b){if(!b)throw Ho("openWithToken",to(a.name));return a.open()}
np.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,F=c.options,I=[],W=z(Object.keys(F.xb)),ia=W.next();!ia.done;ia=W.next()){ia=ia.value;var Ja=F.xb[ia],cb=Ja.Ne===void 0?Number.MAX_VALUE:Ja.Ne;!(y.h.version>=Ja.Eb)||y.h.version>=cb||y.h.objectStoreNames.contains(ia)||I.push(ia)}k=I;if(k.length===0){x.F(5);break}l=Object.keys(c.options.xb);
m=h.objectStoreNames();if(c.D<wm("ytidb_reopen_db_retries",0))return c.D++,h.close(),qo(new Co("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<wm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return qo(new Co("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Do(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,op(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Go(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw op(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,mf:b,upgrade:this.options.upgrade};return this.h=d=a()};var qp=new np("YtIdbMeta",{xb:{databases:{Eb:1}},upgrade:function(a,b){b(1)&&Wo(a,"databases",{keyPath:"actualName"})}});
function rp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(pp(qp,b),2);c=d.i;return d.return(Vo(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ro(f.h.put(a,void 0)).then(function(){})})}))})}
function sp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(pp(qp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function tp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(pp(qp,b),2)):e.h!=3?(d=e.i,e.yield(Vo(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return ep(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return fp(g)})}),3)):e.return(c)})}
function up(a){return tp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function vp(a,b,c){return tp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function wp(a){var b,c;return A(function(d){if(d.h==1)return b=yn("YtIdbMeta hasAnyMeta other"),d.yield(tp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var xp,yp=new function(){}(new function(){});
function zp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=io();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=uo)f=/WebKit\/([0-9]+)/.exec(Oc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Oc()),f=!(f&&parseInt(f[1],10)>=602));if(f||$c)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(rp(d,yp),4);case 4:return e.yield(sp("yt-idb-test-do-not-use",yp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Ap(){if(xp!==void 0)return xp;lo=!0;return xp=zp().then(function(a){lo=!1;var b;if((b=ho())!=null&&b.h){var c;b={hasSucceededOnce:((c=io())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ho())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Bp(){return E("ytglobal.idbToken_")||void 0}
function Cp(){var a=Bp();return a?Promise.resolve(a):Ap().then(function(b){(b=b?yp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Dp=0;function Ep(a,b){Dp||(Dp=Gj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Cp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(vp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(mp(f.actualName),7);case 7:return h.yield(sp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),qo(g),d=!1;case 4:Gj.qa(Dp),Dp=0,d&&Ep(a,b),h.h=0}})}))}
function Fp(){var a;return A(function(b){return b.h==1?b.yield(Cp(),2):(a=b.i)?b.return(wp(a)):b.return(!1)})}
new qj;function Gp(a){if(!xn())throw a=new Co("AUTH_INVALID",{dbName:a}),qo(a),a;var b=yn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Hp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Cp(),2);case 2:g=m.i;if(!g)throw h=Ho("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),qo(h),h;so(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Gp(a);za(m,3);return m.yield(rp(k,g),5);case 5:return m.yield(lp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(sp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Ip(a,b,c){c=c===void 0?{}:c;return Hp(a,b,!1,c)}
function Jp(a,b,c){c=c===void 0?{}:c;return Hp(a,b,!0,c)}
function Kp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Cp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();so(a);d=Gp(a);return e.yield(mp(d.actualName,b),3)}return e.yield(sp(d.actualName,c),0)})}
function Lp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(mp(d.actualName,b),2):e.yield(sp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Mp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Cp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();so("LogsDatabaseV2");return d.yield(up(b),3)}c=d.i;return d.yield(Lp(c,a,b),0)})}
function Np(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Cp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();so(a);return d.yield(mp(a,b),3)}return d.yield(sp(a,c),0)})}
;function Op(a,b){np.call(this,a,b);this.options=b;so(a)}
w(Op,np);function Pp(a,b){var c;return function(){c||(c=new Op(a,b));return c}}
Op.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Jp:Ip)(a,b,Object.assign({},c))};
Op.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Np:Kp)(this.name,a)};
function Qp(a,b){return Pp(a,b)}
;var Rp={},Sp=Qp("ytGcfConfig",{xb:(Rp.coldConfigStore={Eb:1},Rp.hotConfigStore={Eb:1},Rp),shared:!1,upgrade:function(a,b){b(1)&&(cp(Wo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),cp(Wo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Tp(a){return pp(Sp(),a)}
function Up(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},g.yield(Tp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Yo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Vp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},h.yield(Tp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Yo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Wp(a){var b,c;return A(function(d){return d.h==1?d.yield(Tp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Vo(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return ip(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Xp(a){var b,c;return A(function(d){return d.h==1?d.yield(Tp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Vo(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return ip(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Yp(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Yp,G);Yp.prototype.aa=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.aa.call(this)};function Zp(){this.h=0;this.i=new Yp}
function $p(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function aq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Bp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Xp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Up(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function bq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Bp())?c?h.F(4):h.yield(Wp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Vp(c,b,g,d),0)})}
function cq(){if(!Zp.h){var a=new Zp;Zp.h=a}a=Zp.h;var b=T()-a.h;if(!(a.h!==0&&b<wm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=T());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Zp.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function dq(){return"INNERTUBE_API_KEY"in Vl&&"INNERTUBE_API_VERSION"in Vl}
function eq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),le:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),wh:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),oe:P("INNERTUBE_CONTEXT_HL"),ne:P("INNERTUBE_CONTEXT_GL"),pe:P("INNERTUBE_HOST_OVERRIDE")||"",qe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),xh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function fq(a){var b={client:{hl:a.oe,gl:a.ne,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.le}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=xm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.md;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=an()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=vn())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=wn())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=cq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(im(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function gq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().mh:(a=dn(cn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var hq=typeof TextEncoder!=="undefined"?new TextEncoder:null,iq=hq?function(a){return hq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function jq(a,b){this.version=a;this.args=b}
jq.prototype.serialize=function(){return{version:this.version,args:this.args}};function kq(a,b){this.topic=a;this.h=b}
kq.prototype.toString=function(){return this.topic};var lq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Ub;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",lq);var mq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",mq);var nq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",nq);var oq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",oq);
D("ytPubsub2Pubsub2SkipSubKey",null);function pq(a,b){var c=qq();c&&c.publish.call(c,a.toString(),a,b)}
function rq(a){var b=sq,c=qq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(mq[d])try{if(f&&b instanceof kq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Fd){var l=new h;h.Fd=l.version}var m=h.Fd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){am(y)}},oq[b.toString()]?E("yt.scheduler.instance")?Gj.pa(g):sm(g,0):g())});
mq[d]=!0;nq[b.toString()]||(nq[b.toString()]=[]);nq[b.toString()].push(d);return d}
function tq(){var a=uq,b=rq(function(c){a.apply(void 0,arguments);vq(b)});
return b}
function vq(a){var b=qq();b&&(typeof a==="number"&&(a=[a]),Lb(a,function(c){b.unsubscribeByKey(c);delete mq[c]}))}
function qq(){return E("ytPubsub2Pubsub2Instance")}
;function wq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&pq("meta_logging_csi_event",{timerName:a,Ph:b})}
;var xq=void 0,yq=void 0;function zq(){yq||(yq=ul(P("WORKER_SERIALIZATION_URL")));return yq||void 0}
function Aq(){var a=zq();xq||a===void 0||(xq=new Worker(kb(a),void 0));return xq}
;var Bq=wm("max_body_size_to_compress",5E5),Cq=wm("min_body_size_to_compress",500),Dq=!0,Eq=0,Fq=0,Gq=wm("compression_performance_threshold_lr",250),Hq=wm("slow_compressions_before_abandon_count",4),Iq=!1,Jq=new Map,Kq=1,Lq=!0;function Mq(){if(typeof Worker==="function"&&zq()&&!Iq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Jq.get(c.key);d&&(Nq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Jq.delete(c.key))}},b=Aq();
b&&(b.addEventListener("message",a),b.onerror=function(){Jq.clear()},Iq=!0)}}
function Oq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:T(),ticks:{},infos:{}};if(Dq)try{var g=Pq(b);if(g!=null&&(g>Bq||g<Cq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Lq||!R("initial_gzip_use_main_thread"))){Iq||Mq();var h=Aq();if(h&&!e){Jq.set(Kq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Kq});Kq++;return}}var k=tl(iq(b));Nq(k,f,a,c,d)}}catch(l){bm(l),d(a,c)}else d(a,c)}
function Nq(a,b,c,d,e){Lq=!1;var f=T();b.ticks.gelc=f;Fq++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Gq&&(Eq++,R("abandon_compression_after_N_slow_zips")?Fq===wm("compression_disable_point")&&Eq>Hq&&(Dq=!1):Dq=!1);Qq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Rq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=T(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Dq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Pq(g);if(h!=null&&(h>Bq||h<Cq))return a;c=b?{level:1}:void 0;f=tl(iq(g),c);var k=T();e.ticks.gelc=k;if(b){Fq++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Gq)if(Eq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Eq/Fq;var l=Hq/wm("compression_disable_point");Fq>0&&Fq%wm("compression_disable_point")===0&&b>=l&&(Dq=!1)}else Dq=!1;Qq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return bm(m),a}}else return a}
function Pq(a){try{return(new Blob(a.split(""))).size}catch(b){return bm(b),null}}
function Qq(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||wq("gel_compression",a,{sampleRate:.1})}
;function Sq(a){a=Object.assign({},a);delete a.Authorization;var b=ng();if(b){var c=new Kj;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=id(c.digest(),3)}return a}
;var Tq;function Uq(){Tq||(Tq=new go("yt.innertube"));return Tq}
function Vq(a,b,c,d){if(d)return null;d=Uq().get("nextId",!0)||1;var e=Uq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sq(c),requestTime:Math.round(T())};Uq().set("nextId",d+1,86400,!0);Uq().set("requests",e,86400,!0);return d}
function Wq(a){var b=Uq().get("requests",!0)||{};delete b[a];Uq().set("requests",b,86400,!0)}
function Xq(a){var b=Uq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(T())-d.requestTime<6E4)){var e=d.authState,f=Sq(gq(!1));Bg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Yq(a,d.method,e,{}));delete b[c]}}Uq().set("requests",b,86400,!0)}}
;function Zq(a){this.Yb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Hb=!1;var b;this.Bd=(b=a.Bd)!=null?b:100;var c;this.wd=(c=a.wd)!=null?c:1;var d;this.ud=(d=a.ud)!=null?d:2592E6;var e;this.td=(e=a.td)!=null?e:12E4;var f;this.vd=(f=a.vd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.ec=!!a.ec;var h;this.cc=(h=a.cc)!=null?h:.1;var k;this.qc=(k=a.qc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Hb&&(this.Hb=a.Hb);a.Yb&&(this.Yb=a.Yb);this.W=a.W;this.Ca=a.Ca;this.fa=a.fa;this.ea=a.ea;this.sendFn=a.sendFn;
this.Pc=a.Pc;this.Mc=a.Mc;$q(this)&&(!this.W||this.W("networkless_logging"))&&ar(this)}
function ar(a){$q(a)&&!a.Hb&&(a.h=!0,a.ec&&Math.random()<=a.cc&&a.fa.Rd(a.V),br(a),a.ea.wa()&&a.Tb(),a.ea.listen(a.Pc,a.Tb.bind(a)),a.ea.listen(a.Mc,a.Zc.bind(a)))}
r=Zq.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if($q(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.ea.wa()&&cr(c,d)}).catch(function(e){cr(c,d);
dr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if($q(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ea.wa()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){dr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
dr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if($q(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.ob(d.id,c.V):e=!0;c.ea.fb&&c.W&&c.W("vss_network_hint")&&c.ea.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.V)}).catch(function(g){dr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Tb=function(){var a=this;if(!$q(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.jd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(cr(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Bd))};
r.Zc=function(){this.Ca.qa(this.i);this.i=0};
function cr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!$q(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.Be(b.id,a.V),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(er(a,b,a.ud)){d.F(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.ob(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=fr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.ob(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function fr(a,b){if(!$q(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=gr(f);(h=hr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.qc)){m.F(2);break}if(!a.ea.xc){m.F(3);break}return m.yield(a.ea.xc(),3);case 3:if(a.ea.wa()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Qc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.qc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.wd?m.yield(a.fa.Qc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.ob(b.id,a.V),8);case 12:a.Ca.pa(function(){a.ea.wa()&&a.Tb()},a.vd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.ob(b.id,a.V),2);a.ea.fb&&a.W&&a.W("vss_network_hint")&&a.ea.fb(!0);d(e,f);h.h=0})};
return b}
function er(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function br(a){if(!$q(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.jd("QUEUED",a.V).then(function(b){b&&!er(a,b,a.td)?a.Ca.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Qc(b.id,a.V),2);br(a);c.h=0})}):a.ea.wa()&&a.Tb()})}
function dr(a,b){a.Id&&!a.ea.wa()?a.Id(b):a.handleError(b)}
function $q(a){return!!a.V||a.Yb}
function gr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function hr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var ir;
function jr(){if(ir)return ir();var a={};ir=Qp("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Eb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Wo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),cp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return ir()}
;function kr(a){return pp(jr(),a)}
function lr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(kr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Yo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();mr(c);return g.return(f)})}
function nr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(kr(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Vo(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(n){return ip(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=T();mr(c);return m.return(l)})}
function or(a,b){var c;return A(function(d){if(d.h==1)return d.yield(kr(b),2);c=d.i;return d.return(Vo(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ro(f.h.put(g,void 0)).then(function(){return g})})}))})}
function pr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(kr(b),2);e=f.i;return f.return(Vo(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Ro(h.h.put(k,void 0)).then(function(){return k})):Lo.resolve(void 0)})}))})}
function qr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(kr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function rr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(kr(a),2);b=d.i;c=T()-2592E6;return d.yield(Vo(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return ep(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return fp(f)})})}),0)})}
function sr(){A(function(a){return a.yield(Mp(),0)})}
function mr(a){R("nwl_csi_killswitch")||wq("networkless_performance",a,{sampleRate:1})}
;var tr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511};var ur={},vr=Qp("ServiceWorkerLogsDatabase",{xb:(ur.SWHealthLog={Eb:1},ur),shared:!0,upgrade:function(a,b){b(1)&&cp(Wo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function wr(a){return pp(vr(),a)}
function xr(a){var b,c;A(function(d){if(d.h==1)return d.yield(wr(a),2);b=d.i;c=T()-2592E6;return d.yield(Vo(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return ep(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return fp(f)})})}),0)})}
function yr(a){var b;return A(function(c){if(c.h==1)return c.yield(wr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var zr={},Ar=0;function Br(a){var b=new Image,c=""+Ar++;zr[c]=b;b.onload=b.onerror=function(){delete zr[c]};
b.src=a}
;var Cr;function Dr(){Cr||(Cr=new go("yt.offline"));return Cr}
function Er(a){if(R("offline_error_handling")){var b=Dr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Dr().set("errors",b,2592E3,!0)}}
;function Fr(){this.h=new Map;this.i=!1}
function Gr(){if(!Fr.h){var a=E("yt.networkRequestMonitor.instance")||new Fr;D("yt.networkRequestMonitor.instance",a);Fr.h=a}return Fr.h}
Fr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Fr.prototype.removeParams=function(a){return a.split("?")[0]};
Fr.prototype.removeParams=Fr.prototype.removeParams;Fr.prototype.isEndpointCFR=Fr.prototype.isEndpointCFR;Fr.prototype.requestComplete=Fr.prototype.requestComplete;Fr.getInstance=Gr;function Hr(){$h.call(this);var a=this;this.j=!1;this.i=Fj();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Dr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;am(d)}Dr().set("errors",{},2592E3,!0)}}})}
w(Hr,$h);function Ir(){if(!Hr.h){var a=E("yt.networkStatusManager.instance")||new Hr;D("yt.networkStatusManager.instance",a);Hr.h=a}return Hr.h}
r=Hr.prototype;r.wa=function(){return this.i.wa()};
r.fb=function(a){this.i.i=a};
r.ge=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Xd=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.xc=function(a){a=Dj(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Gr().requestComplete("generate_204",b)});
return a};
Hr.prototype.sendNetworkCheckRequest=Hr.prototype.xc;Hr.prototype.listen=Hr.prototype.listen;Hr.prototype.enableErrorFlushing=Hr.prototype.Xd;Hr.prototype.getWindowStatus=Hr.prototype.ge;Hr.prototype.networkStatusHint=Hr.prototype.fb;Hr.prototype.isNetworkAvailable=Hr.prototype.wa;Hr.getInstance=Ir;function Jr(a){a=a===void 0?{}:a;$h.call(this);var b=this;this.i=this.u=0;this.j=Ir();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Or(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Or(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ai(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ai(b,"publicytnetworkstatus-offline")})))}
w(Jr,$h);Jr.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Jr.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Jr.prototype.xc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Gr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Or(a,b){a.rateLimit?a.i?(Gj.qa(a.u),a.u=Gj.pa(function(){a.o!==b&&(ai(a,b),a.o=b,a.i=T())},a.rateLimit-(T()-a.i))):(ai(a,b),a.o=b,a.i=T()):ai(a,b)}
;var Pr;function Qr(){var a=Zq.call;Pr||(Pr=new Jr({Ch:!0,th:!0}));a.call(Zq,this,{fa:{Rd:rr,ob:qr,jd:nr,Be:or,Qc:pr,set:lr},ea:Pr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;bm(new S(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else am(b)},
pb:bm,sendFn:Rr,now:T,Id:Er,Ca:fo(),Pc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",ec:!0,cc:.1,qc:wm("potential_esf_error_limit",10),W:R,Hb:!(xn()&&Sr())});this.j=new qj;R("networkless_immediately_drop_all_requests")&&sr();Np("LogsDatabaseV2")}
w(Qr,Zq);function Tr(){var a=E("yt.networklessRequestController.instance");a||(a=new Qr,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Cp().then(function(b){a.V=b;ar(a);a.j.resolve();a.ec&&Math.random()<=a.cc&&a.V&&xr(a.V);R("networkless_immediately_drop_sw_health_store")&&Ur(a)}));
return a}
Qr.prototype.writeThenSend=function(a,b){b||(b={});b=Vr(a,b);xn()||(this.h=!1);Zq.prototype.writeThenSend.call(this,a,b)};
Qr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Vr(a,b);xn()||(this.h=!1);Zq.prototype.sendThenWrite.call(this,a,b,c)};
Qr.prototype.sendAndWrite=function(a,b){b||(b={});b=Vr(a,b);xn()||(this.h=!1);Zq.prototype.sendAndWrite.call(this,a,b)};
Qr.prototype.awaitInitialization=function(){return this.j.promise};
function Ur(a){var b;A(function(c){if(!a.V)throw b=Ho("clearSWHealthLogsDb"),b;return c.return(yr(a.V).catch(function(d){a.handleError(d)}))})}
function Rr(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Wr(a,b);if(R("use_request_time_ms_header"))b.headers&&mm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Bm(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Bm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.o){var l=Zb($b(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(ic),p=hc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(F){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(F){}y=!1}c=y?!0:!1}else c=
!1;c||Br(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Oq(a,b.postBody,b,Fm,d)):Oq(a,JSON.stringify(b.postParams),b,Em,d):Fm(a,b)}
function Vr(a,b){R("use_event_time_ms_header")&&mm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(T())));return b}
function Wr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gr().requestComplete(a,!0);d(e,f)}}
function Sr(){return ac(document.location.toString())!=="www.youtube-nocookie.com"}
;var Xr=!1,Yr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Xr};D("ytNetworklessLoggingInitializationOptions",Yr);function Zr(){var a;A(function(b){if(b.h==1)return b.yield(Cp(),2);a=b.i;if(!a||!xn()&&!R("nwl_init_require_datasync_id_killswitch")||!Sr())return b.F(0);Xr=!0;Yr.isNwlInitialized=Xr;return b.yield(Tr().awaitInitialization(),0)})}
;function $r(a){var b=this;this.config_=null;a?this.config_=a:dq()&&(this.config_=eq());An(function(){Xq(b)},5E3)}
$r.prototype.isReady=function(){!this.config_&&dq()&&(this.config_=eq());return!!this.config_};
function Yq(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=Vq(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(F,I){Wq(p);t(F,I)};
c.onFetchSuccess=function(F,I){Wq(p);v(F,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Tr().writeThenSend(m,g):Tr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Oq(m,y,g,Fm,x)}else Oq(m,JSON.stringify(g.postParams),g,Em,x)}else R("web_all_payloads_via_jspb")?Fm(m,g):Em(m,g)}catch(F){if(F.name==="InvalidAccessError")p&&(Wq(p),p=0),bm(Error("An extension is blocking network request."));else throw F;}p&&An(function(){Xq(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&bm(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new S("innertube xhrclient not ready",b,c,d);am(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.pe)&&(h=f);var k=a.config_.qe||!1,l=gq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=km(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?Yr.isNwlInitialized:Xr)?Ap().then(function(n){e(n)}):e(!1)}
;var as=0,bs=bd?"webkit":ad?"moz":Zc?"ms":Yc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++as});var cs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ds(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in cs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function es(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ds.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ds.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ds.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var xg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",xg);var gs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",gs);
function hs(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return wg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Bg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function is(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hs(a,b,c,d);if(e)return e;e=++gs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ds(h);if(!Kg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ds(h);
h.currentTarget=a;return c.call(a,h)};
g=$l(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),js()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);xg[e]=[a,b,c,g,d];return e}
function ks(a){a&&(typeof a=="string"&&(a=[a]),Lb(a,function(b){if(b in xg){var c=xg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?js()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete xg[b]}}))}
var js=pi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ls(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=is(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);typeof a==="function"&&(a=$l(a));this.Z=window.setInterval(a,25)}
$a(ls,G);ls.prototype.Y=function(a){a.h===void 0&&es(a);var b=a.h;a.i===void 0&&es(a);this.h=new tg(b,a.i)};
ls.prototype.R=function(){if(this.h){var a=T();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
ls.prototype.aa=function(){window.clearInterval(this.Z);ks(this.U)};var ms={};
function ns(a){var b=a===void 0?{}:a;a=b.Ke===void 0?!1:b.Ke;b=b.Yd===void 0?!0:b.Yd;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&ps();is(document,"keydown",ps);is(document,"keyup",ps);is(document,"mousedown",ps);is(document,"mouseup",ps);a?is(window,"touchmove",function(){qs("touchmove",200)},{passive:!0}):(is(window,"resize",function(){qs("resize",200)}),b&&is(window,"scroll",function(){qs("scroll",200)}));
new ls(function(){qs("mouse",100)});
is(document,"touchstart",ps,{passive:!0});is(document,"touchend",ps,{passive:!0})}}
function qs(a,b){ms[a]||(ms[a]=!0,Gj.pa(function(){ps();ms[a]=!1},b))}
function ps(){E("_lact",window)==null&&ns();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function rs(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ss=C.ytPubsubPubsubInstance||new M,ts=C.ytPubsubPubsubSubscribedKeys||{},us=C.ytPubsubPubsubTopicToKeys||{},vs=C.ytPubsubPubsubIsSynchronous||{};function ws(a,b){var c=xs();if(c&&b){var d=c.subscribe(a,function(){function e(){ts[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{vs[a]?e():sm(e,0)}catch(g){am(g)}},void 0);
ts[d]=!0;us[a]||(us[a]=[]);us[a].push(d);return d}return 0}
function ys(a){var b=xs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Lb(a,function(c){b.unsubscribeByKey(c);delete ts[c]}))}
function zs(a,b){var c=xs();c&&c.publish.apply(c,arguments)}
function As(a){var b=xs();if(b)if(b.clear(a),a)Bs(a);else for(var c in us)Bs(c)}
function xs(){return C.ytPubsubPubsubInstance}
function Bs(a){us[a]&&(a=us[a],Lb(a,function(b){ts[b]&&delete ts[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Ub;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ss);D("ytPubsubPubsubTopicToKeys",us);D("ytPubsubPubsubIsSynchronous",vs);D("ytPubsubPubsubSubscribedKeys",ts);var Cs=Symbol("injectionDeps");function Ds(a){this.name=a}
Ds.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Es(a){this.key=a}
function Fs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Gs(a,b){a.i.set(b.uc,b);var c=a.j.get(b.uc);if(c)try{c.Lh(a.resolve(b.uc))}catch(d){c.Jh(d)}}
Fs.prototype.resolve=function(a){return a instanceof Es?Hs(this,a.key,[],!0):Hs(this,a,[])};
function Hs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ed!==void 0)var e=d.Ed;else if(d.uf)e=d[Cs]?Is(a,d[Cs],c):[],e=d.uf.apply(d,ra(e));else if(d.Dd){e=d.Dd;var f=e[Cs]?Is(a,e[Cs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Oh||a.h.set(b,e);return e}
function Is(a,b,c){return b?b.map(function(d){return d instanceof Es?Hs(a,d.key,c,!0):Hs(a,d,c)}):[]}
;var Js;function Ks(){Js||(Js=new Fs);return Js}
;var Ls=window;function Ms(){var a,b;return"h5vcc"in Ls&&((a=Ls.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ls.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ls&&Ls.performance.mark&&Ls.performance.measure?2:0}
function Ns(a){var b=Ms();switch(b){case 1:Ls.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ls.performance.mark(a+"-start");break;case 0:break;default:Cb(b,"unknown trace type")}}
function Os(a){var b=Ms();switch(b){case 1:Ls.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ls.performance.mark(c);Ls.performance.measure(a,b,c);break;case 0:break;default:Cb(b,"unknown trace type")}}
;var Ps=R("web_enable_lifecycle_monitoring")&&Ms()!==0,Qs=R("web_enable_lifecycle_monitoring");function Rs(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ss(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?fo():d;this.j=c;this.scheduler=d;this.i=new qj;this.h=a;for(a={bb:0};a.bb<this.h.length;a={pc:void 0,bb:a.bb},a.bb++)a.pc=this.h[a.bb],c=function(e){return function(){e.pc.Fc();b.h[e.bb].sc=!0;b.h.every(function(f){return f.sc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.pc),d=this.scheduler.Za(c,d),this.h[a.bb]=Object.assign({},a.pc,{Fc:c,
jobId:d})}
function Ts(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.sc||(a.scheduler.qa(c.jobId),a.scheduler.Za(c.Fc,10))}
Ss.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.sc||this.scheduler.qa(b.jobId),b.sc=!0;this.i.resolve()};
Ss.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Us(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Ps&&Ns(this.state)}
r=Us.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Ps&&Os(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Ts(this.j),this.j=void 0);Vs(this,a,b);this.state=a;Ps&&Ns(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ws(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ws(a,b){var c=b.filter(function(e){return Xs(a,e)===10}),d=b.filter(function(e){return Xs(a,e)!==10});
return a.B.Nh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Qe.apply(a,[c].concat(ra(e))),2);a.yd.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Re.apply(a,[c].concat(ra(e)));a.yd.apply(a,[d].concat(ra(e)))}}
r.Re=function(a){for(var b=B.apply(1,arguments),c=fo(),d=z(a),e=d.next(),f={};!e.done;f={Kb:void 0},e=d.next())f.Kb=e.value,c.Db(function(g){return function(){Ys(g.Kb.name);Zs(function(){return g.Kb.callback.apply(g.Kb,ra(b))});
$s(g.Kb.name)}}(f))};
r.Qe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=fo(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.Ta=e.value;f.Wb=void 0;g=function(k){return function(){Ys(k.Ta.name);var l=Zs(function(){return k.Ta.callback.apply(k.Ta,ra(b))});
be(l)?k.Wb=R("web_lifecycle_error_handling_killswitch")?l.then(function(){$s(k.Ta.name)}):l.then(function(){$s(k.Ta.name)},function(m){Rs(m);
$s(k.Ta.name)}):$s(k.Ta.name)}}(f);
c.Db(g);return f.Wb?h.yield(f.Wb,3):h.F(3)}f={Ta:void 0,Wb:void 0};e=d.next();return h.F(2)})};
r.yd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Ys(e.name);Zs(function(){return e.callback.apply(e,ra(b))});
$s(e.name)},
priority:Xs(c,e)}});
d.length&&(this.j=new Ss(d))};
function Xs(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ys(a){Ps&&a&&Ns(a)}
function $s(a){Ps&&a&&Os(a)}
function Vs(a,b,c){Qs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Us.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Zs(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Rs(b)}}
;function at(a){Us.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var bt;w(at,Us);at.prototype.i=function(a,b){var c=this;this.h=An(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
at.prototype.D=function(a,b){this.h&&(Gj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ct(){bt||(bt=new at);return bt}
;var dt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return dt});function et(){this.store={};this.h={}}
et.prototype.storePayload=function(a,b){a=ft(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
et.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=gt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
et.prototype.extractMatchingEntries=function(a){a=gt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
et.prototype.getSequenceCount=function(a){a=gt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function gt(a,b){var c=ft(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&ft(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ht(b.auth,g[0])){var h=b.isJspb;ht(h===void 0?"undefined":h?"true":"false",g[1])&&ht(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),ht(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function ht(a,b){return a===void 0||a==="undefined"?!0:a===b}
et.prototype.getSequenceCount=et.prototype.getSequenceCount;et.prototype.extractMatchingEntries=et.prototype.extractMatchingEntries;et.prototype.smartExtractMatchingEntries=et.prototype.smartExtractMatchingEntries;et.prototype.storePayload=et.prototype.storePayload;function ft(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function jt(a,b){if(a)return a[b.name]}
;var kt=wm("initial_gel_batch_timeout",2E3),lt=wm("gel_queue_timeout_max_ms",6E4),mt=wm("gel_min_batch_size",5),nt=void 0;function ot(){this.o=this.h=this.i=0;this.j=!1}
var pt=new ot,qt=new ot,rt=new ot,st=new ot,tt,ut=!0,vt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",vt);var wt={};function xt(){var a=E("yt.logging.ims");a||(a=new et,D("yt.logging.ims",a));return a}
function zt(a,b){if(a.endpoint==="log_event"){At();var c=Bt(a),d=Ct(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=tr[d||""];var f,g,h,k=Ks().resolve(new Es(Zp))==null?void 0:(f=$p())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=Dt(e.tier);if(k===400){Et(a,b);return}}wt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};xt().storePayload(e,a.payload);Ft(b,c,e,d==="gelDebuggingEvent")}}
function Ft(a,b,c,d){function e(){Gt({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(nt=new a);a=wm("tvhtml5_logging_max_batch_ads_fork")||wm("tvhtml5_logging_max_batch")||wm("web_logging_max_batch")||100;var g=T(),h=Ht(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=xt().getSequenceCount(c));d>=1E3?e():d>=a?tt||(tt=It(function(){e();tt=void 0},0)):g-k>=10&&(Jt(f,c.tier),h.o=g)}
function Et(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&xt().storePayload({isJspb:!1},a.payload);At();var c=Bt(a),d=new Map;d.set(c,[a.payload]);var e=Ct(a.payload)||"";b&&(nt=new b);return new qi(function(f,g){nt&&nt.isReady()?Kt(d,nt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Bt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);vt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Gt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new qi(function(e,f){var g=Ht(c,d),h=g.j;g.j=!1;Lt(g.i);Lt(g.h);g.h=0;nt&&nt.isReady()?d===void 0&&R("enable_web_tiered_gel")?Mt(e,f,a,b,c,300,h):Mt(e,f,a,b,c,d,h):(Jt(c,d),e())})}
function Mt(a,b,c,d,e,f,g){var h=nt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?xt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):xt().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(wt)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?xt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):xt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete wt[l];Kt(k,h,a,b,c,!1,g)}
function Jt(a,b){function c(){Gt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Ht(a,b),e=d===st||d===rt?5E3:lt;R("web_gel_timeout_cap")&&!d.h&&(e=It(function(){c()},e),d.h=e);
Lt(d.i);e=P("LOGGING_BATCH_TIMEOUT",wm("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ut&&(e=kt);e=It(function(){wm("gel_min_batch_size")>0?xt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=mt&&c():c()},e);
d.i=e}
function Kt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(T()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Lc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Oc:void 0,Nc:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Dg({context:fq(b.config_||eq())});if(!Qa(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=vt[m])&&
Nt(g.batchRequest,m,n);delete vt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Ot(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Oc=function(p){R("start_client_gcf")&&Gj.pa(function(){return A(function(t){return t.yield(Pt(p),0)})});
k--;k||c()};
g.Lc=0;g.Nc=function(p){return function(){p.Lc++;if(e.bypassNetworkless&&p.Lc===1)try{Yq(b,l,p.batchRequest,Qt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Oc,p.Nc,f)),ut=!1}catch(t){am(t),d()}k--;k||c()}}(g);
try{Yq(b,l,g.batchRequest,Qt(e,g.dangerousLogToVisitorSession,g.Oc,g.Nc,f)),ut=!1}catch(p){am(p),d()}}}
function Qt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,nh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Rt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Ot(a,b,c){Rt()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Wl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Nt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function At(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=um("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(dt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",dt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Rt(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function It(a,b){return R("transport_use_scheduler")===!1?sm(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?An(function(){if(ct().currentState==="none")a();else{var c={};ct().install((c.none={callback:a},c))}},b):An(a,b)}
function Lt(a){R("transport_use_scheduler")?Gj.qa(a):window.clearTimeout(a)}
function Pt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=jt(d,yl),g=(f=d)==null?void 0:f.hotHashData,h=jt(d,xl),l=(k=d)==null?void 0:k.coldHashData,(m=Ks().resolve(new Es(Zp)))?g?e?n.yield(aq(m,g,e),2):n.yield(aq(m,g),2):n.F(2):n.return()):l?h?n.yield(bq(m,l,h),0):n.yield(bq(m,l),0):n.F(0)})}
function Ht(a,b){b=b===void 0?200:b;return a?b===300?st:qt:b===300?rt:pt}
function Ct(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,tr[b])return b}
function Dt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var St=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",St);
function Tt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=rs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,St[b]=b in St?St[b]+1:0,a.sequence={index:St[b],groupKey:b},d.endOfSequence&&delete St[d.sequenceGroup]);(d.sendIsolatedPayload?Et:zt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function po(a,b,c){c=c===void 0?{}:c;var d=$r;P("ytLoggingEventsDefaultDisabled",!1)&&$r===$r&&(d=null);Tt(a,b,d,c)}
;function Ut(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Vt=new Set,Wt=0,Xt=0,Yt=0,Zt=[],$t=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function oo(a){au(a)}
function bu(a){au(a,"WARNING")}
function cu(a){a instanceof Error?au(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new S(a),a.name="RejectedPromiseError",bu(a))}
function au(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Wt>=5))){d=Zt;var k=Tb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=Xm(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=Zm(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=Zm(t)}if(d.length)for(p=0;p<d.length&&!(n=Xm(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Tm();c=z(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Dh)){a=d.weight;break a}a=z(a.Pa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=z(Om);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.oc[p.name])for(e=z(c.oc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Jc(f);break}p.params||(p.params={});a=Tm();p.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Pa.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Gg(Hg,"sample")).constructor!==Gg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!Vt.has(p.message)){if(g&&R("web_enable_error_204"))du(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Um.kb("handleError",p),R("record_app_crashed_web")&&Yt===0&&p.sampleWeight===1&&(Yt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),po("appCrashed",g)),Xt++):b==="WARNING"&&Um.kb("handleWarning",p);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=z($t);for(c=a.next();!c.done;c=a.next())if(vo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Xl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=z(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(po("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&Gt(void 0,void 0,!1))}R("suppress_error_204_logging")||du(b,p)}try{Vt.add(p.message)}catch(y){}Wt++}}}
function du(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Fm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function eu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function fu(){this.register=new Map}
function gu(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ih("ABORTED")}
fu.prototype.clear=function(){gu(this);this.register.clear()};
var hu=new fu;var iu=Date.now().toString();
function ju(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(iu)for(a=1,b=0;b<iu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^iu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ku,lu=C.ytLoggingDocDocumentNonce_;lu||(lu=ju(),D("ytLoggingDocDocumentNonce_",lu));ku=lu;function mu(a){this.h=a}
r=mu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Al;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&lf(a,2,xe(this.h.veType)),this.h.veCounter!==void 0&&lf(a,6,xe(this.h.veCounter)),this.h.elementIndex!==void 0&&lf(a,3,xe(this.h.elementIndex)),this.h.isCounterfactual&&lf(a,5,te(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();yf(a,Al,7,b)}this.h.youtubeData!==void 0&&yf(a,zl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function nu(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function ou(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},Wl("client-screen-nonce-store",c));c[b]=a}
function pu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function qu(a){return P(pu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",qu);function ru(){var a=P("csn-to-ctt-auth-info");a||(a={},Wl("csn-to-ctt-auth-info",a));return a}
function su(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function tu(a){a=nu(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",tu);function uu(a,b,c){var d=ru();(c=tu(c))&&delete d[c];b&&(d[a]=b)}
function vu(a){return ru()[a]}
D("yt_logging_screen.getCttAuthInfo",vu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==nu(c)||b!==P(pu(c)))if(uu(a,d,c),ou(a,c),Wl(pu(c),b),b=function(){setTimeout(function(){a&&po("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ku,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function wu(){var a=Cg(xu),b;return(new qi(function(c,d){a.onSuccess=function(e){rm(e)?c(new yu(e)):d(new zu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new zu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new zu("Request timed out","net.timeout",e))};
b=Fm("//googleads.g.doubleclick.net/pagead/id",a)})).yc(function(c){if(c instanceof xi){var d;
(d=b)==null||d.abort()}return vi(c)})}
function zu(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(zu,ab);function yu(a){this.xhr=a}
;function Au(){this.h=0;this.i=null}
Au.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Bu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Cu(a):this};
Au.prototype.getValue=function(){return this.i};
Au.prototype.isRejected=function(){return this.h==2};
Au.prototype.$goog_Thenable=!0;function Cu(a){var b=new Au;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Bu(a){var b=new Au;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Du(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:mm(a)?"same-origin":"cors",credentials:mm(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Eu(){return lg()||(dd||ed)&&vo("applewebkit")&&!vo("version")&&(!vo("safari")||vo("gsa/"))||cd&&vo("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Fu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in El)if(El[d]==c.embeddedPlayerMode){b=El[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Gu(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hu;this.isTimeout=a instanceof zu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof xi}
w(Gu,ab);Gu.prototype.name="BiscottiError";function Hu(){ab.call(this,"Biscotti ID is missing from server")}
w(Hu,ab);Hu.prototype.name="BiscottiMissingError";var xu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Iu=null;function Ju(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Eu())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(Ag(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Fu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Pl(){var a=Ju();if(a!==void 0)return vi(a);Iu||(Iu=wu().then(Ku).yc(function(b){return Lu(2,b)}));
return Iu}
function Ku(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Hu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Hu;a=a.id;Ql(a);Iu=Bu(a);Mu(18E5,2);return a}
function Lu(a,b){b=new Gu(b);Ql("");Iu=Cu(b);a>0&&Mu(12E4,a-1);throw b;}
function Mu(a,b){sm(function(){wu().then(Ku,function(c){return Lu(b,c)}).yc(oi)},a)}
function Nu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Pl()}catch(b){return vi(b)}}
;var zb=sa(["data-"]);function Ou(a){a&&(a.dataset?a.dataset[Pu()]="true":Bb(a))}
function Qu(a){return a?a.dataset?a.dataset[Pu()]:a.getAttribute("data-loaded"):null}
var Ru={};function Pu(){return Ru.loaded||(Ru.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Su(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Cg(b);this.assets=a.assets||{};this.attrs=a.attrs||Cg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Su.prototype.clone=function(){var a=new Su,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=Cg(c):a[b]=c}return a};var Tu=["share/get_share_panel"],Uu=["share/get_web_player_share_panel"],Vu=["feedback"],Wu=["notification/modify_channel_preference"],Xu=["browse/edit_playlist"],Yu=["subscription/subscribe"],Zu=["subscription/unsubscribe"];var $u=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",$u);function av(a){Rl($u,arguments)}
;function bv(a,b,c){cv(a,b,c===void 0?null:c)}
function dv(a){a=ev(a);var b=document.getElementById(a);b&&(As(a),b.parentNode.removeChild(b))}
function fv(a,b){a&&b&&(a=""+Sa(b),(a=gv[a])&&ys(a))}
function cv(a,b,c){c=c===void 0?null:c;var d=ev(a),e=document.getElementById(d),f=e&&Qu(e),g=e&&!f;f?b&&b():(b&&(f=ws(d,b),b=""+Sa(b),gv[b]=f),g||(e=hv(a,d,function(){Qu(e)||(Ou(e),zs(d),sm(function(){As(d)},0))},c)))}
function hv(a,b,c,d){d=d===void 0?null:d;var e=Jg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Jb(e,vl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ev(a){var b=document.createElement("a");xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Xb(a)}
var gv={};function iv(a){var b=jv(a),c=document.getElementById(b),d=c&&Qu(c);d||c&&!d||(c=kv(a,b,function(){if(!Qu(c)){Ou(c);zs(b);var e=Ya(As,b);sm(e,0)}}))}
function kv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=vl(a);Eb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jv(a){var b=Jg("A");xb(b,new qb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Xb(a)}
;function lv(a){var b=B.apply(1,arguments);if(!mv(a)||b.some(function(d){return!mv(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())nv(a,c.value)}
function nv(a,b){for(var c in b)if(mv(b[c])){if(c in a&&!mv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});nv(a[c],b[c])}else if(ov(b[c])){if(c in a&&!ov(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);pv(a[c],b[c])}else a[c]=b[c];return a}
function pv(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,mv(c)?a.push(nv({},c)):ov(c)?a.push(pv([],c)):a.push(c);return a}
function mv(a){return typeof a==="object"&&!Array.isArray(a)}
function ov(a){return typeof a==="object"&&Array.isArray(a)}
;var qv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function rv(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ac(window.location.href);e&&d.push(e);e=ac(a);if(Kb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),xb(d,a),a=d.href)if(a=bc(a),a=cc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:tu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&sv(a,b,f)}else sv(a,b)}
function sv(a,b,c){a=tv(a);b=b?ec(b):"";c=c||5;Eu()&&fn(a,b,c)}
function tv(a){for(var b=z(qv),c=b.next();!c.done;c=b.next())a=kc(a,c.value);return"ST-"+Xb(a).toString(36)}
;function uv(a){jq.call(this,1,arguments);this.csn=a}
w(uv,jq);var sq=new kq("screen-created",uv),vv=[],wv=0,xv=new Map,yv=new Map,zv=new Map;
function Av(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Bv({cttAuthInfo:vu(b)||void 0},b),g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(yg(k)||!k.trackingParams&&!k.veType)&&bu(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Cv(h,b);if(k.veType&&!yv.has(l)&&!zv.has(l)&&!e){if(!R("il_attach_cache_limit")||xv.size<1E3){xv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&xv.size>1E3&&bu(new S("IL Attach cache exceeded limit"))}h=Cv(c,b);xv.has(h)?
Dv(c,b):zv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Nb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Ev("visualElementAttached",f,c):a?Tt("visualElementAttached",c,a,f):po("visualElementAttached",c,f)}
function Ev(a,b,c){vv.push({Je:a,payload:c,zh:void 0,options:b});wv||(wv=tq())}
function uq(a){if(vv){for(var b=z(vv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,po(c.Je,c.payload,c.options));vv.length=0}wv=0}
function Cv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Dv(a,b){a=Cv(a,b);xv.has(a)&&(b=xv.get(a)||[],Av(b[0],b[1],b[2],[b[3]],!0),xv.delete(a))}
function Bv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Fv(){try{return!!self.localStorage}catch(a){return!1}}
;function Gv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Hv(a){if(Fv()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Gv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Iv(){if(!Fv())return!1;var a=yn(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Gv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Jv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Kv(a){if(P("LOGGED_IN",!0)&&Jv()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ac(window.location.href);c&&b.push(c);c=ac(a);Kb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=bc(a),(b=cc(b))?(b=tv(b),b=(b=gn(b)||null)?im(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Jv()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&rv(a,b)}}
;function Lv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&rv(a,b);if(c)return!1;Kv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=fc(a,e);Kv(a);f=a+f;var h=h===void 0?ub:h;a:if(h=h===void 0?ub:h,f instanceof qb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof sb&&b.re(f)){h=new qb(f);break a}h=void 0}g=g.location;h=wb(h||rb);h!==void 0&&(g.href=h);return!0}
;function Mv(a){if(Ag(P("PLAYER_VARS",{}))!="1"){a&&Ol();try{Nu().then(function(){},function(){}),sm(Mv,18E5)}catch(b){am(b)}}}
;var Nv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ov(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=Zb($b(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=jm(a).theme;return Nv.get(c)||null}catch(d){}return null}
;function Pv(){this.h={};if(this.i=jn()){var a=gn("CONSISTENCY");a&&Qv(this,{encryptedTokenJarContents:a})}}
Pv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ma.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Qv(this,a)}};
function Qv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&fn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Rv=window.location.hostname.split(".").slice(-2).join(".");function Sv(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Tv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Uv;function Vv(){Uv=E("yt.clientLocationService.instance");Uv||(Uv=new Sv,D("yt.clientLocationService.instance",Uv));return Uv}
r=Sv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Tv(this))&&this.h.set("yt-location-playability-token",a,15552E3):fn("YT_CL",JSON.stringify({loctok:a}),15552E3,Rv,!0))};
function Tv(a){return a.h===void 0?new go("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Tv(this))&&this.h.remove("yt-location-playability-token"):hn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Wv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Xv(){this.h={}}
Xv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Xv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Xv.prototype.set=function(a,b){this.h[a]=b};
Xv.prototype.remove=function(a){delete this.h[a]};function Yv(){this.mappings=new Xv}
Yv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Yv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Cb(b)}}return a};
new Yv;function Zv(a){return function(){return new a}}
;var $v={},aw=($v.WEB_UNPLUGGED="^unplugged/",$v.WEB_UNPLUGGED_ONBOARDING="^unplugged/",$v.WEB_UNPLUGGED_OPS="^unplugged/",$v.WEB_UNPLUGGED_PUBLIC="^unplugged/",$v.WEB_CREATOR="^creator/",$v.WEB_KIDS="^kids/",$v.WEB_EXPERIMENTS="^experiments/",$v.WEB_MUSIC="^music/",$v.WEB_REMIX="^music/",$v.WEB_MUSIC_EMBEDDED_PLAYER="^music/",$v.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",$v);
function bw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=aw[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(aw).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function cw(){}
cw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?en:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=Dg(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;nn();var l="USER_INTERFACE_THEME_LIGHT";qn(165)?l="USER_INTERFACE_THEME_DARK":qn(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Ov()||l;h.userInterfaceTheme=k;if(!f){if(k=vn())h.connectionType=k;R("web_log_effective_connection_type")&&(k=wn())&&(g.client.effectiveConnectionType=k)}var m;if(R("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}R("web_gcf_hashes_innertube")&&(k=cq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=jm(C.location.href);!R("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&$m.h&&(n=$m.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=an(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(n=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}p=
void 0}p&&(h.timeZone=p)}(p=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=xm();Pv.h||(Pv.h=new Pv);h=Pv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:n});!R("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=nn();t=qn(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?e&&(f=tu())&&(g.clientScreenNonce=f):!f&&(f=tu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Vv().setLocationOnInnerTubeContext(g);try{var v=nm(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=z(Object.entries(v));for(var F=y.next();!F.done;F=y.next()){var I=z(F.value),W=I.next().value,ia=I.next().value;v=W;x=ia;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var Ja,cb;if(((Ja=g.client)==null?void 0:Ja.clientName)==="TVHTML5"||((cb=g.client)==null?void 0:cb.clientName)==="TVHTML5_UNPLUGGED"&&R("add_ifa_to_tvh5_requests")){var ba=P("INNERTUBE_CONTEXT");ba.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ba.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ba.adSignalsInfo.limitAdTracking)}}catch(na){au(na)}y=g}else au(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(F=this.i(a)){this.h(y,F,b);var Y;b="/youtubei/v1/"+bw(this.j());(F=(Y=jt(a.commandMetadata,Cl))==null?void 0:Y.apiUrl)&&(b=F);Y=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(Y=String(b)+String(bc(Y)));b={};R("json_condensed_response")&&(b.prettyPrint="false");Y=lm(Y,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Y,hb:Du(Y),Ma:y,config:a};a.config.Xb?a.config.Xb.identity=c:a.config.Xb={identity:c};return a}au(new S("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(cw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function dw(){}
w(dw,cw);function ew(){}
w(ew,dw);ew.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",hb:Du("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
ew.prototype.j=function(){return[]};
ew.prototype.i=function(){};
ew.prototype.h=function(){};var fw={},gw=(fw.GET_DATASYNC_IDS=Zv(ew),fw);function hw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function iw(){var a=hw();a.info||(a.info={});return a.info}
function jw(a){a=hw(a);a.metadata||(a.metadata={});return a.metadata}
function kw(a){a=hw(a);a.tick||(a.tick={});return a.tick}
function lw(a){a=hw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function mw(a){a=lw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function nw(a){var b=hw(a).nonce;b||(b=ju(),hw(a).nonce=b);return b}
;function ow(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function pw(a){a=a||"";var b=E("ytcsi.reference");b||(ow(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=ow(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},qw=(U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",U["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",U["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",U["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",U["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",U["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",U["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
U["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U),V={},rw=(V.auto_search="LATENCY_ACTION_AUTO_SEARCH",V.ad_to_ad="LATENCY_ACTION_AD_TO_AD",V.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",V.app_startup="LATENCY_ACTION_APP_STARTUP",V.browse="LATENCY_ACTION_BROWSE",V.cast_splash="LATENCY_ACTION_CAST_SPLASH",V.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",V.channels="LATENCY_ACTION_CHANNELS",V.chips="LATENCY_ACTION_CHIPS",V.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",V.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",V.editor="LATENCY_ACTION_EDITOR",V.embed="LATENCY_ACTION_EMBED",V.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",V.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",V.explore="LATENCY_ACTION_EXPLORE",V.favorites="LATENCY_ACTION_FAVORITES",V.home="LATENCY_ACTION_HOME",V.inboarding="LATENCY_ACTION_INBOARDING",V.library="LATENCY_ACTION_LIBRARY",V.live="LATENCY_ACTION_LIVE",V.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
V.management="LATENCY_ACTION_MANAGEMENT",V.mini_app="LATENCY_ACTION_MINI_APP_PLAY",V.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",V.onboarding="LATENCY_ACTION_ONBOARDING",V.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",V.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",V.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",V.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",V.prebuffer="LATENCY_ACTION_PREBUFFER",V.prefetch="LATENCY_ACTION_PREFETCH",
V.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",V.profile_switcher="LATENCY_ACTION_LOGIN",V.projects="LATENCY_ACTION_PROJECTS",V.reel_watch="LATENCY_ACTION_REEL_WATCH",V.results="LATENCY_ACTION_RESULTS",V.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",V.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",V.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",V.review="LATENCY_ACTION_REVIEW",V.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",V.search_ui="LATENCY_ACTION_SEARCH_UI",
V.search_suggest="LATENCY_ACTION_SUGGEST",V.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",V.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",V.seek="LATENCY_ACTION_PLAYER_SEEK",V.settings="LATENCY_ACTION_SETTINGS",V.store="LATENCY_ACTION_STORE",V.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",V.tenx="LATENCY_ACTION_TENX",V.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",V.watch="LATENCY_ACTION_WATCH",V.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",V["watch,watch7"]="LATENCY_ACTION_WATCH",
V["watch,watch7_html5"]="LATENCY_ACTION_WATCH",V["watch,watch7ad"]="LATENCY_ACTION_WATCH",V["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",V.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",V.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",V.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",V.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",V.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",V.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",V.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
V.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",V);Object.assign(rw,qw);function sw(a,b){jq.call(this,1,arguments);this.timer=b}
w(sw,jq);var tw=new kq("aft-recorded",sw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var uw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",uw);function vw(){this.h=0}
function ww(){vw.h||(vw.h=new vw);return vw.h}
vw.prototype.tick=function(a,b,c,d){xw(this,"tick_"+a+"_"+b)||po("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
vw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");xw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,po("latencyActionInfo",a,{cttAuthInfo:c}))};
vw.prototype.jspbInfo=function(){};
vw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");xw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,po("latencyActionSpan",a,{cttAuthInfo:c}))};
function xw(a,b){uw[b]=uw[b]||{count:0};var c=uw[b];c.count++;c.time=T();a.h||(a.h=An(function(){var d=T(),e;for(e in uw)uw[e]&&d-uw[e].time>6E4&&delete uw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||bu(c)),!0):!1}
;var yw=window;function zw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Aw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Bw(e.requestStart),e.responseEnd=Bw(e.responseEnd),e.redirectStart=Bw(e.redirectStart),e.redirectEnd=Bw(e.redirectEnd),e.domainLookupEnd=Bw(e.domainLookupEnd),e.connectStart=Bw(e.connectStart),e.connectEnd=
Bw(e.connectEnd),e.responseStart=Bw(e.responseStart),e.secureConnectionStart=Bw(e.secureConnectionStart),e.domainLookupStart=Bw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Bw(a){return Math.round(Cw()+a)}
function Cw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=yw.performance||yw.mozPerformance||yw.msPerformance||yw.webkitPerformance||new zw;var Dw=!1,Ew=!1,Fw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||oi,X);function Gw(a,b){if(!R("web_csi_action_sampling_enabled")||!hw(b).actionDisabled){var c=pw(b||"");lv(c.info,a);a.loadType&&(c=a.loadType,jw(b).loadType=c);lv(mw(b),a);c=nw(b);b=hw(b).cttAuthInfo;ww().info(a,c,b)}}
function Hw(){var a,b,c,d;return((d=Ks().resolve(new Es(Zp))==null?void 0:(a=$p())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!hw(c).actionDisabled){var d=nw(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(Ks().resolve(new Es(Zp))==null?0:$p())&&!Ew&&(Ew=!0,Z("gcfl",T(),c));var f,g,h;e=(Ks().resolve(new Es(Zp))==null?void 0:(f=$p())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Hw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;hw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Gw(f,c));hw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,
{startTime:f})}catch(k){}}e=pw(c||"");e.tick[a]=b||T();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=lw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=kw(c);e=b||T();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=hw(c).cttAuthInfo;a==="_start"?(a=ww(),xw(a,"baseline_"+d)||po("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):ww().tick(a,d,b,f);Iw(c);return e}}}
function Jw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=bs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Kw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Lw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Fb(window)&&a.setAttribute("nonce",Fb(window));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Cw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Mw(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Mb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Ob(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Bw(b.startTime)),Z("wffe",Bw(b.responseEnd)))}
function Nw(a){var b=Ow("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Ow(b[d],a);if(e)return e}return NaN}
function Ow(a,b){if(a=kw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Iw(a){var b=Ow("_start",a),c=Nw(a),d=R("enable_cow_info_csi")||!Dw;b&&c&&d&&(pq(tw,new sw(Math.round(c-b),a)),Dw=!0)}
function Pw(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Pb(a,function(c){return c.name==="first-paint"}))return Bw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Fh;return b?Math.max(0,b):0}
;function Qw(a,b){$l(function(){pw("").info.actionType=a;b&&Wl("TIMING_AFT_KEYS",b);Wl("TIMING_ACTION",a);var c=Kw();Object.keys(c).length>0&&Gw(c);c={isNavigation:!0,actionType:rw[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=rw[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=tu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Jw();if(d===1||d===-1)c.isVisible=!0;jw();iw();
c.loadType="cold";d=iw();var e=Aw(),f=Cw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Pw();d>0&&Z("fpt",d);d=Aw();d.isPerformanceNavigationTiming&&Gw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Cw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Mw();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Fw)Fw.hasOwnProperty(h)&&(e=Fw[h],
Lw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Gw(c);c=lw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=mw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(jw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=kw();e=lw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Ow(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,lv(c,d),lv(k,d),d=!0;d&&Gw(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Rw()&&Nw()&&Iw()})()}
function Rw(){return $l(function(){return Sw()})()}
function Tw(a,b,c){$l(Gw)(a,b,c===void 0?!1:c)}
function Uw(a,b,c){return $l(Z)(a,b,c)}
function Sw(){return $l(function(){return"_start"in kw()})()}
function Vw(){$l(function(){var a=nw();requestAnimationFrame(function(){setTimeout(function(){a===nw()&&Uw("ol",void 0,void 0)},0)})})()}
var Ww=window;Ww.ytcsi&&(Ww.ytcsi.infoGel=Tw,Ww.ytcsi.tick=Uw);var Xw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Yw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Zw(a,b,c,d){this.D=a;this.ea=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Rb||(a.Rb={});a.Rb=Object.assign({},gw,a.Rb)}
function $w(a,b,c,d){if(Zw.h!==void 0){if(d=Zw.h,a=[a!==d.D,b!==d.ea,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new S("InnerTubeTransportService is already initialized",a);
}else Zw.h=new Zw(a,b,c,d)}
function ax(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?en:c;var d=bx(a,b);return d?new qi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new S("Error: Failed to build request for command.",b));n.F(0);break}Kv(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.lf){var p=h.config,t;p=p==null?void 0:(t=p.Xb)==null?void 0:t.sessionIndex;t=dn(0,{sessionIndex:p});m=Object.assign({},
Wv(l),t);n.F(4);break}return n.yield(cx(h.config,l),5);case 5:m=n.i;case 4:e(dx(a,h,m)),n.h=0}})}):vi(new S("Error: No request builder found for command.",b))}
function ex(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=z(Xw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function dx(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,y,F,I,W,ia,Ja,cb,ba,Y,na,Na,Ma,Xg,Yg,Kr,Lr,Mr,Nr;return A(function(ha){switch(ha.h){case 1:ha.F(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ma)==null?0:g.context)){ha.F(4);break}h=b.Ma.context;ha.F(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){ha.F(4);break}m=l.value;return ha.yield(m.Hh(h),9);case 9:l=k.next();ha.F(8);break;case 4:if((n=a.i)==null||!n.Mh(b.input,b.Ma)){ha.F(12);break}return ha.yield(a.i.Bh(b.input,
b.Ma),13);case 13:return p=ha.i,ex(a,p,b),ha.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Kh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ma),W=(I=(F=b.hb)==null?void 0:F.headers)!=null?I:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},W,c)}),ia=Object.assign({},b.hb),b.hb.method==="POST"&&(ia=Object.assign({},ia,{body:y})),((Ja=b.config)==null?0:Ja.Oe)&&Uw(b.config.Oe),cb=function(){return a.ea.fetch(b.input,ia,b.config)},t=cb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:if((ba=ha.i)&&"error"in ba&&((Y=ba)==null?0:(na=Y.error)==null?0:na.details))for(Na=ba.error.details,Ma=z(Na),Xg=Ma.next();!Xg.done;Xg=Ma.next())Yg=Xg.value,(Kr=Yg["@type"])&&Yw.indexOf(Kr)>-1&&(delete Yg["@type"],ba=Yg);x&&a.h.has(x)&&a.h.delete(x);((Lr=b.config)==null?0:Lr.Pe)&&Uw(b.config.Pe);if(ba||(Mr=a.i)==null||!Mr.ph(b.input,b.Ma)){ha.F(15);break}return ha.yield(a.i.Ah(b.input,b.Ma),16);case 16:ba=ha.i;case 15:return ex(a,ba,b),((Nr=b.config)==null?0:Nr.Le)&&Uw(b.config.Le),d(),ha.return(ba||
void 0)}})}
function bx(a,b){a:{a=a.D;var c,d=(c=jt(b,Dl))==null?void 0:c.signal;if(d&&a.Rb&&(c=a.Rb[d])){var e=c();break a}var f;if((c=(f=jt(b,Bl))==null?void 0:f.request)&&a.Ud&&(f=a.Ud[c])){e=f();break a}for(e in b)if(a.bd[e]&&(b=a.bd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function cx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Xb)==null?void 0:d.sessionIndex;var h=g.yield;var k=dn(0,{sessionIndex:e});if(!(k instanceof qi)){var l=new qi(oi);ri(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Wv(b),f)))})}
;var fx=new Ds("INNERTUBE_TRANSPORT_TOKEN");function gx(){}
w(gx,dw);gx.prototype.j=function(){return Yu};
gx.prototype.i=function(a){return jt(a,Nl)||void 0};
gx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(gx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function hx(){}
w(hx,dw);hx.prototype.j=function(){return Zu};
hx.prototype.i=function(a){return jt(a,Ml)||void 0};
hx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(hx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var ix=new Ds("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function jx(a){this.u=a}
w(jx,dw);jx.prototype.j=function(){return Tu};
jx.prototype.i=function(a){return jt(a,Hl)||jt(a,Il)||jt(a,Gl)};
jx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
jx[Cs]=[ix];function kx(){}
w(kx,dw);kx.prototype.j=function(){return Vu};
kx.prototype.i=function(a){return jt(a,Fl)||void 0};
kx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(kx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function lx(){}
w(lx,dw);lx.prototype.j=function(){return Wu};
lx.prototype.i=function(a){return jt(a,Ll)||void 0};
lx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function mx(){}
w(mx,dw);mx.prototype.j=function(){return Xu};
mx.prototype.i=function(a){return jt(a,Kl)||void 0};
mx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function nx(){}
w(nx,dw);nx.prototype.j=function(){return Uu};
nx.prototype.i=function(a){return jt(a,Jl)};
nx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var ox=new Ds("FETCH_FN_TOKEN"),px=new Ds("PARSE_FN_TOKEN");function qx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;S.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(qx,S);var rx=new Ds("NETWORK_SLI_TOKEN");function sx(a,b,c){this.h=a;this.i=b;this.j=c}
sx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=tx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){bu(k);
if((c==null?0:c.ae)&&k instanceof qx&&k.errorType===1)return Promise.reject(k)}))})};
function tx(a,b,c){if(a.h){var d=Zb($b(5,kc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Rq(c));return new window.Request(b,a)}
sx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.se)&&a.ok)return Uf(b.se,e);e=e.replace(")]}'","");if((b==null?0:b.ae)&&e)try{var f=d(e)}catch(h){throw new qx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.vh(),c=c.then(function(e){bu(new S("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
sx[Cs]=[new Es(rx),new Es(ox),new Es(px)];var ux=new Ds("NETWORK_MANAGER_TOKEN");var vx;function wx(){var a,b,c;return A(function(d){if(d.h==1)return a=Ks().resolve(fx),a?d.yield(ax(a),2):(bu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return bu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.sh;return d.return(c)}bu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function xx(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var yx=C.caches,zx;function Ax(a){var b=a.indexOf(":");return b===-1?{rd:a}:{rd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Bx(){return A(function(a){if(zx!==void 0)return a.return(zx);zx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(yx.open("test-only"),4);case 4:return d.yield(yx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(zx)})}
function Cx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Bx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(yx.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ax(f),h=g.datasyncId,!h||a.includes(h)||b.push(yx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Dx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Bx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=yn("cache contains other");return h.yield(yx.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ax(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ex(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Fx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Gx(a){if(Ex()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Fx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Hx(){if(!Ex())return!1;var a=yn(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Fx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Ix(){wx().then(function(a){a&&(Ep(a),Cx(a),Hv(a),Gx(a))})}
function Jx(){var a=new Jr;Gj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=yn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Ep(h);Cx(h);Hv(h);Gx(h);return g.return()}c=Iv();d=Hx();return g.yield(Dx(),3);case 3:return e=g.i,g.yield(Fp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.wa()?Ix():a.h.add("publicytnetworkstatus-online",Ix,!0,void 0,void 0),g.h=0}})})}
;function Kx(){this.state=1;this.h=null}
r=Kx.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=hb(),f=new Gb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=ul(a.interpreterSafeUrl).toString());Lx(this,d,e,a.program,b,c)}else bu(Error("Cannot initialize botguard without program"))};
function Lx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,bv(c,function(){window[g]?Mx(a,d,g,e):(a.state=3,dv(c),bu(new S("Unable to load Botguard","from "+c)))},f)):b?(f=Jg("SCRIPT"),b instanceof Gb?Ib(f,b):f.textContent=b,f.nonce=Fb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Mx(a,d,g,e):(a.state=4,bu(new S("Unable to load Botguard from JS")))):bu(new S("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Mx(a,b,c,d){a.state=5;try{var e=new sj({program:b,he:c,Fe:{disable:!R("att_web_record_metrics"),ga:"aGIf"}});e.ff.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&bu(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Uc()?this.Gd({cd:a}):null};
r.dispose=function(){this.Rc(null);this.state=8};
r.Uc=function(){return!!this.h};
r.Gd=function(a){return this.h.zd(a)};
r.Rc=function(a){qc(this.h);this.h=a};var Nx=[],Ox=!1;function Px(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Eu()){var a=P("PLAYER_VARS",{});if(Ag(a)!="1"&&!Fu(a)){var b=function(){Ox=!0;"google_ad_status"in window?Wl("DCLKSTAT",1):Wl("DCLKSTAT",2)};
try{bv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Nx.push(Gj.pa(function(){if(!(Ox||"google_ad_status"in window)){try{fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ox=!0;Wl("DCLKSTAT",3)}},5E3))}}}
function Qx(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function Rx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Sx(){Kx.apply(this,arguments)}
w(Sx,Kx);Sx.prototype.Rc=function(a){var b;(b=Rx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.zd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Sx.prototype.Uc=function(){return!!Rx()};
Sx.prototype.Gd=function(a){return Rx().bgvmc(a)};function Tx(a){Us.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Tx,Us);Tx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Tx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Tx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Tx.prototype.i=function(){this.h=new Map};function Ux(a){Us.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ux,Us);Ux.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ux.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ux.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Ux.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Vx(){this.o=new Tx;this.D=new Ux}
Vx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function Wx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Wx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=tu(c===void 0?0:c)){a=this.client;d=new mu({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Cv(d,c);yv.set(f,!0);Dv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Bv({cttAuthInfo:vu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Ev("visualElementGestured",f,d):a?Tt("visualElementGestured",d,a,f):po("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Wx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new mu({trackingParams:a}),b,c===void 0?0:c)};
Wx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=tu(d);a||(a=(a=qu(d===void 0?0:d))?new mu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Bv({cttAuthInfo:vu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Ev("visualElementStateChanged",d,b):a?Tt("visualElementStateChanged",b,a,d):po("visualElementStateChanged",b,d))}};
function Xx(a,b){if(b===void 0)for(var c=su(),d=0;d<c.length;d++)c[d]!==void 0&&Xx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Av(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Yx(){Vx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||An(Zx)}
w(Yx,Vx);Yx.prototype.j=function(){po("finalPayload",{csn:tu()})};
Yx.prototype.h=function(){gu(hu)};
Yx.prototype.i=function(){var a=Xx;Wx.h||(Wx.h=new Wx);a(Wx.h)};
function Zx(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=$d();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&po("genericClientExperimentEvent",{eventType:c});delete Vl.CLIENT_EXPERIMENT_EVENTS}}
;function $x(){}
function ay(){var a=E("ytglobal.storage_");a||(a=new $x,D("ytglobal.storage_",a));return a}
$x.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(by()):d.return()})};
function by(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",$x);function no(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
no.prototype.Ea=function(a){this.handleError(a)};
no.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":cy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function cy(a,b){ay().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:dy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:dy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function dy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var ey={},fy=(ey["api.invalidparam"]=2,ey.auth=150,ey["drm.auth"]=150,ey["heartbeat.net"]=150,ey["heartbeat.servererror"]=150,ey["heartbeat.stop"]=150,ey["html5.unsupportedads"]=5,ey["fmt.noneavailable"]=5,ey["fmt.decode"]=5,ey["fmt.unplayable"]=5,ey["html5.missingapi"]=5,ey["html5.unsupportedlive"]=5,ey["drm.unavailable"]=5,ey["mrm.blocked"]=151,ey["embedder.identity.denied"]=152,ey);var gy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function hy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function iy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(gy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function jy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function ky(a){G.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.B=[];this.R={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",ly(b));b.sendMessage("onReady");e=z(b.B);for(d=e.next();!d.done;d=e.next())my(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.R[e]||e==="onReady"||
(c=ny(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.R[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&hy(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=iy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=iy(g);break;case "loadPlaylist":case "cuePlaylist":g=jy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);hy(e)&&oy(b,ly(b))}}}};
py.addEventListener("message",this.H);if(a=P("WIDGET_ID"))this.sessionId=a;qy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?fy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
qy(this,"onVideoProgress",this.af.bind(this));qy(this,"onVolumeChange",this.bf.bind(this));qy(this,"onApiChange",this.Te.bind(this));qy(this,"onPlaybackQualityChange",this.Xe.bind(this));qy(this,"onPlaybackRateChange",this.Ye.bind(this));qy(this,"onStateChange",this.Ze.bind(this));qy(this,"onWebglSettingsChanged",this.cf.bind(this));qy(this,"onCaptionsTrackListChanged",this.Ue.bind(this));qy(this,"captionssettingschanged",this.Ve.bind(this))}
w(ky,G);function oy(a,b){a.sendMessage("infoDelivery",b)}
r=ky.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?my(this,a):this.B.push(a)};
function ny(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function qy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function ly(a){if(!a.api)return null;var b=a.api.getApiInterface();Qb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Ze=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());oy(this,a)};
r.Xe=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());oy(this,a)};
r.Ye=function(a){oy(this,{playbackRate:a})};
r.Te=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.bf=function(){oy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.af=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());oy(this,a)};
r.cf=function(){oy(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Ue=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};oy(this,a)}};
r.Ve=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};oy(this,a)}};
function my(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){bu(d)}}}
r.aa=function(){G.prototype.aa.call(this);py.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var py=window;function ry(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.da){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=sy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=ty(g,f))&&uy(d,g,f))}}}}}};
vy.addEventListener("message",this.i);uy(this,"RECEIVING")}
w(ry,G);r=ry.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.We.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.We=function(a,b){this.da||uy(this,a,wy(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function sy(a,b){switch(a){case "loadVideoById":return[iy(b)];case "cueVideoById":return[iy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[jy(b)];case "cuePlaylist":return[jy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ty(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function wy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function uy(a,b,c){a.da||(b={id:a.id,command:b},c&&(b.data=c),xy.postMessage(JSON.stringify(b),a.origin))}
r.aa=function(){vy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.aa.call(this)};
var vy=window,xy=window.parent;var yy=new Sx;function zy(){return yy.Uc()}
function Ay(a){a=a===void 0?{}:a;return yy.invoke(a)}
;function By(a,b,c,d,e){G.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.zc=e;this.Bb=!1;this.api={};this.ja=this.u=null;this.U=new M;this.h={};this.Z=this.ta=this.elementId=this.Cb=this.config=null;this.Y=!1;this.j=this.H=null;this.Ya={};this.Ac=["onReady"];this.lastError=null;this.Vb=NaN;this.R={};this.ha=0;this.i=this.o=a;sc(this,this.U);Cy(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Dy(this),Ey(this))}
w(By,G);r=By.prototype;r.getId=function(){return this.B};
r.loadNewVideoConfig=function(a){if(!this.da){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof Su||(b=new Su(b));this.config=b;this.setConfig(a);Ey(this);this.isReady()&&Fy(this)}};
function Dy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Cb=a;this.config=Gy(a);Dy(this);if(!this.ta){var b;this.ta=Hy(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Aj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Aj(Number(a)||a))};
function Fy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Iy(a){var b=!0,c=Jy(a);c&&a.config&&(b=c.dataset.version===Ky(a));return b&&!!E("yt.player.Application.create")}
function Ey(a){if(!a.da&&!a.Y){var b=Iy(a);if(b&&(Jy(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Ly(a);else if(My(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Ly(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Ny(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Gy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.zc);Ly(a)};
a.Y=!0;b?a.H():(bv(Ky(a),a.H),(b=Oy(a))&&iv(b||""),Py(a)&&!c&&D("yt.player.Application.create",null))}}}
function Jy(a){var b=Ig(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Ly(a){if(!a.da){var b=Jy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Ny(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Qy(a)}else a.Vb=setTimeout(function(){Ly(a)},50)}}
function Qy(a){Cy(a);a.Bb=!0;var b=Jy(a);if(b){a.u=Ry(a,b,"addEventListener");a.ja=Ry(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Ry(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Fy(a);a.ta&&a.ta(a.api);a.U.kb("onReady",a.api)}
function Ry(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new S("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function Cy(a){a.Bb=!1;if(a.ja)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ja(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&clearTimeout(Number(c));a.R={};a.u=null;a.ja=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Cb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Bb};
r.addEventListener=function(a,b){var c=this,d=Hy(this,b);d&&(Kb(this.Ac,a)>=0||this.h[a]||(b=Sy(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.da||(b=Hy(this,b))&&this.U.unsubscribe(a,b)};
function Hy(a,b){var c=b;if(typeof b==="string"){if(a.Ya[b])return a.Ya[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new S("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ya[b]=c}return c?c:null}
function Sy(a,b){function c(d){function e(){if(!a.da)try{a.U.kb(b,d!=null?d:void 0)}catch(h){var g=new S("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Td});g.level="WARNING";throw g;}}
if(Ny(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.R,h=String(f);h in g&&delete g[h]},0);
zg(a.R,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Jy(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function My(a){a.cancel();Cy(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Jy(a);b&&(Iy(a)||!Py(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.H&&fv(Ky(this),this.H);clearTimeout(this.Vb);this.Y=!1};
r.aa=function(){My(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new S("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ya=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Cb=this.config=this.api=null;delete this.o;delete this.i;G.prototype.aa.call(this)};
function Py(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Ky(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Oy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ny(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Gy(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Cg(e):e}return b}
;var Ty={},Uy="player_uid_"+(Math.random()*1E9>>>0);function Vy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Ig(c):c;var e=Uy+"_"+Sa(c),f=Ty[e];if(f&&d)return Wy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new By(c,e,a,b,void 0);Ty[e]=f;f.addOnDisposeCallback(function(){delete Ty[f.getId()]});
return f.api}
function Wy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Xy=null,Yy=null;
function Zy(){Vw();var a=nn(),b=qn(119),c=window.devicePixelRatio>1;if(document.body&&Oj(document.body,"exp-invert-logo"))if(c&&!Oj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Oj(d,"inverted-hdpi")){var e=Mj(d);Nj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Oj(document.body,"inverted-hdpi")&&Pj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=rn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete kn[b]:(c=d.toString(16),kn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in kn)kn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(kn[f])));var f=d.join("&");fn(b,f,63072E3,a.i,c)}}
function $y(){az()}
function bz(){Uw("ep_init_pr");az()}
function az(){var a=Xy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function cz(){Xy&&Xy.sendAbandonmentPing&&Xy.sendAbandonmentPing();P("PL_ATT")&&yy.dispose();for(var a=Gj,b=0,c=Nx.length;b<c;b++)a.qa(Nx[b]);Nx.length=0;dv("//static.doubleclick.net/instream/ad_status.js");Ox=!1;Wl("DCLKSTAT",0);rc(Yy);Xy&&(Xy.removeEventListener("onVideoDataChange",$y),Xy.destroy())}
;D("yt.setConfig",Wl);D("yt.config.set",Wl);D("yt.setMsg",av);D("yt.msgs.set",av);D("yt.logging.errors.log",au);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Mv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Qw("embed",["ol"]);c=xx();if(!c.serializedForcedExperimentIds){var d=jm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Qw("watch",["pbs","pbu","pbp"]);Xy=Vy(a,c);Xy.addEventListener("onVideoDataChange",$y);Xy.addEventListener("onReady",bz);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Yy=new ky(Xy):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Yy=new ry(Xy,a,b));Px();R("ytidb_create_logger_embed_killswitch")||mo();a={};Yx.h||(Yx.h=new Yx);Yx.h.install((a.flush_logs={callback:function(){Gt()}},a));
Zr();R("ytidb_clear_embedded_player")&&Gj.pa(function(){var f,g;if(!vx){var h=Ks();Gs(h,{uc:ux,Dd:sx});var k={bd:{feedbackEndpoint:Zv(kx),modifyChannelNotificationPreferenceEndpoint:Zv(lx),playlistEditEndpoint:Zv(mx),shareEntityEndpoint:Zv(jx),subscribeEndpoint:Zv(gx),unsubscribeEndpoint:Zv(hx),webPlayerShareEntityServiceEndpoint:Zv(nx)}},l=Vv(),m={};l&&(m.client_location=l);f===void 0&&(f=cn());g===void 0&&(g=h.resolve(ux));$w(k,g,f,m);Gs(h,{uc:fx,Ed:Zw.h});vx=h.resolve(fx)}Jx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||zy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Ay);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Qx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Lv);D("yt.util.activity.init",E("yt.util.activity.init")||ns);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||rs);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||ps);window.addEventListener("load",$l(function(){Zy()}));
window.addEventListener("pageshow",$l(function(a){a.persisted||Zy()}));
window.addEventListener("pagehide",$l(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?cz():a.persisted||cz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Xl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new S(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Td)f||(f={}),f.componentStack=Ut(m)}f&&eu(e,f);g?au(e):bu(e)}};
Gi=cu;window.addEventListener("unhandledrejection",function(a){cu(a.reason)});
Lb(P("ERRORS")||[],function(a){au.apply(null,a)});
Wl("ERRORS",[]);}).call(this);
