(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-780737be"],{"11e9":function(t,e,n){var o=n("52a7"),a=n("4630"),r=n("6821"),c=n("6a99"),s=n("69a8"),i=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=r(t),e=c(e,!0),i)try{return f(t,e)}catch(n){}if(s(t,e))return a(!o.f.call(t,e),t[e])}},"36e1":function(t,e,n){"use strict";var o=n("7b4a"),a=n.n(o);a.a},"5dbc":function(t,e,n){var o=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var r,c=e.constructor;return c!==n&&"function"==typeof c&&(r=c.prototype)!==n.prototype&&o(r)&&a&&a(t,r),t}},"7b4a":function(t,e,n){},"8b97":function(t,e,n){var o=n("d3f4"),a=n("cb7c"),r=function(t,e){if(a(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var o=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,a)}},aa77:function(t,e,n){var o=n("5ca1"),a=n("be13"),r=n("79e5"),c=n("fdef"),s="["+c+"]",i="​",f=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(t,e,n){var a={},s=r(function(){return!!c[t]()||i[t]()!=i}),f=a[t]=s?e(l):c[t];n&&(a[n]=f),o(o.P+o.F*s,"String",a)},l=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},c5f6:function(t,e,n){"use strict";var o=n("7726"),a=n("69a8"),r=n("2d95"),c=n("5dbc"),s=n("6a99"),i=n("79e5"),f=n("9093").f,u=n("11e9").f,p=n("86cc").f,l=n("aa77").trim,_="Number",d=o[_],h=d,g=d.prototype,b=r(n("2aeb")(g))==_,v="trim"in String.prototype,N=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():l(e,3);var n,o,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+e}for(var c,i=e.slice(2),f=0,u=i.length;f<u;f++)if(c=i.charCodeAt(f),c<48||c>a)return NaN;return parseInt(i,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(b?i(function(){g.valueOf.call(n)}):r(n)!=_)?c(new h(N(e)),n,d):N(e)};for(var x,w=n("9e1e")?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)a(h,x=w[y])&&!a(d,x)&&p(d,x,u(h,x));d.prototype=g,g.constructor=d,n("2aba")(o,_,d)}},dda8:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"error-wrapper"},[n("div",{staticClass:"xs12 mb-3"},[n("img",{attrs:{src:t.imgSrc}})]),n("div",{staticClass:"text-xs-center"},[403===t.status?[n("p",{staticClass:"headline letter-spacing ma-0"},[t._v("\n        Access token has been expired.\n      ")]),n("p",{staticClass:"headline letter-spacing"},[t._v("\n        Please contact the\n        "),n("a",{staticClass:"blue--text text--lighten-2 decoration-none",attrs:{href:"https://www.facebook.com/Nanoooooooooooooooooooooooooooooooooooooooooooooox",target:"_blank"}},[t._v("\n          author\n        ")]),t._v("\n        to update the new one\n      ")])]:[n("p",{staticClass:"headline letter-spacing ma-0"},[t._v("\n        The page you are looking for is not found\n      ")]),n("p",{staticClass:"headline letter-spacing"},[t._v("\n        Go back\n        "),n("router-link",{staticClass:"blue--text text--lighten-2 decoration-none",attrs:{to:"/"}},[t._v("Home")])],1)]],2)])},a=[],r=(n("c5f6"),{props:{status:{type:[String,Number],default:404}},data:function(){return{imgSrc:403===this.status?"https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.1997-6/s168x128/10574694_1498876503686813_1420873835_n.png?_nc_cat=1&_nc_eui2=AeExnPAGS1j9oWOoQgFpj5NwaN8_7e_4b3m8eKB2tvdoDM4xVDywvKsKzxerWxAN4FQLfxuqogvaJP3_J0C3twsuF8U1_Qta1-wm-mh0gwot9w&_nc_ht=scontent.fsgn2-4.fna&oh=86923c3810f7805a5d7c9a39847eebd9&oe=5D0B459E":"https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.1997-6/s168x128/14279490_1804313623147203_1346244953_n.png?_nc_cat=1&_nc_ht=scontent.fsgn2-4.fna&oh=a9d81d20c6e63f219ca7cbe0a23b0524&oe=5D0E6FCA"}},created:function(){document.title="VUDEMY | ERROR"}}),c=r,s=(n("36e1"),n("2877")),i=n("6544"),f=n.n(i),u=n("a722"),p=Object(s["a"])(c,o,a,!1,null,"4270e93f",null);e["default"]=p.exports;f()(p,{VLayout:u["a"]})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-780737be.c3e57e6b.js.map