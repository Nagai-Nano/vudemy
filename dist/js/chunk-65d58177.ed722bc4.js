(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d58177"],{"11e9":function(t,e,r){var a=r("52a7"),n=r("4630"),i=r("6821"),s=r("6a99"),c=r("69a8"),o=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=i(t),e=s(e,!0),o)try{return l(t,e)}catch(r){}if(c(t,e))return n(!a.f.call(t,e),t[e])}},2226:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Loading"):r("v-container",{attrs:{fluid:"","pa-0":"","ma-0":""}},[r("v-layout",[r("HeadTitle",{attrs:{title:t.detail.title}})],1),r("v-layout",{attrs:{wrap:"","mt-4":""}},[r("v-flex",{attrs:{xs12:"",md4:""}},[r("ImageItem",{attrs:{src:t.detail.image_480x270,"max-height":"270px"}})],1),r("v-flex",{staticClass:"letter-spacing",class:{"pl-3":t.bp.mdAndUp,"mt-2":t.bp.smAndDown},attrs:{xs12:"",md8:""}},[r("h2",{staticClass:"mb-2 headline font-weight-regular"},[t._v(t._s(t.detail.headline))]),r("h2",[t._v("\n        Skill level : "),r("span",{staticClass:"font-weight-regular"},[t._v(t._s(t.detail.instructional_level))])]),r("h2",[t._v("\n        Video length : "),r("span",{staticClass:"font-weight-regular"},[t._v(t._s(t.detail.content_info))])]),r("v-btn",{staticClass:"grey darken-3 mt-2",staticStyle:{"margin-left":"1px"},attrs:{to:"/course/"+t.detail.id+"/learn",depressed:""}},[t._v("\n        Learn Now\n      ")])],1)],1),r("v-divider",{staticClass:"my-4"}),r("v-layout",{attrs:{column:""}},[r("h2",{staticClass:"text-uppercase letter-spacing font-weight-regular mb-4"},[t._v("description")]),r("p",{staticStyle:{"font-size":"16px",margin:"0"},domProps:{innerHTML:t._s(t.detail.description)}})]),r("v-divider",{staticClass:"my-4"}),r("v-layout",{attrs:{wrap:""}},[r("h2",{staticClass:"text-uppercase letter-spacing font-weight-regular mb-4"},[t._v("\n      "+t._s(t.detail.visible_instructors.length>1?"Instructors":"Instructor")+"\n    ")]),t._l(t.detail.visible_instructors,function(e){return r("v-flex",{key:e.id,staticClass:"mb-4",attrs:{xs12:""}},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticStyle:{"border-radius":"50%","flex-grow":"0!important",width:"100px!important",height:"100px!important"},attrs:{src:e.image_200_H}}),r("div",{staticClass:"ml-3"},[r("h2",{staticClass:"font-weight-regular letter-spacing"},[t._v(t._s(e.display_name))]),r("h3",{staticClass:"font-weight-regular letter-spacing grey--text text--lighten-2"},[t._v("\n            "+t._s(e.job_title)+"\n          ")])])]),r("p",{staticClass:"mt-3 pl-1",staticStyle:{"font-size":"16px"},domProps:{innerHTML:t._s(e.description)}})])})],2)],1)},n=[],i=(r("96cf"),r("3b8d")),s=r("cebc"),c=(r("c5f6"),r("2f62")),o=r("a576"),l=r("beb1"),u=r("92ac"),p=r("23eb"),f=r("f453"),d={mixins:[l["a"]],props:{id:{type:[String,Number],required:!0}},components:{HeadTitle:u["a"],ImageItem:p["a"],Loading:f["a"]},data:function(){return{detail:{}}},methods:Object(s["a"])({},Object(c["d"])(["SET_LOADING"])),computed:Object(s["a"])({},Object(c["e"])(["isLoading"])),created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.SET_LOADING(!0),t.next=3,Object(o["a"])("/course/detail/".concat(this.id));case 3:e=t.sent,this.detail=e,document.title="VUDEMY | ".concat(e.title.toUpperCase()," OVERVIEW"),this.SET_LOADING(!1);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},v=d,g=r("2877"),h=r("6544"),_=r.n(h),m=r("8336"),b=r("a523"),y=r("ce7e6"),x=r("0e8f"),I=r("a722"),w=Object(g["a"])(v,a,n,!1,null,null,null);e["default"]=w.exports;_()(w,{VBtn:m["a"],VContainer:b["a"],VDivider:y["a"],VFlex:x["a"],VLayout:I["a"]})},"58db":function(t,e,r){},"5dbc":function(t,e,r){var a=r("d3f4"),n=r("8b97").set;t.exports=function(t,e,r){var i,s=e.constructor;return s!==r&&"function"==typeof s&&(i=s.prototype)!==r.prototype&&a(i)&&n&&n(t,i),t}},"8b97":function(t,e,r){var a=r("d3f4"),n=r("cb7c"),i=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},aa77:function(t,e,r){var a=r("5ca1"),n=r("be13"),i=r("79e5"),s=r("fdef"),c="["+s+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(t,e,r){var n={},c=i(function(){return!!s[t]()||o[t]()!=o}),l=n[t]=c?e(f):s[t];r&&(n[r]=l),a(a.P+a.F*c,"String",n)},f=p.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},c5f6:function(t,e,r){"use strict";var a=r("7726"),n=r("69a8"),i=r("2d95"),s=r("5dbc"),c=r("6a99"),o=r("79e5"),l=r("9093").f,u=r("11e9").f,p=r("86cc").f,f=r("aa77").trim,d="Number",v=a[d],g=v,h=v.prototype,_=i(r("2aeb")(h))==d,m="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():f(e,3);var r,a,n,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var s,o=e.slice(2),l=0,u=o.length;l<u;l++)if(s=o.charCodeAt(l),s<48||s>n)return NaN;return parseInt(o,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof v&&(_?o(function(){h.valueOf.call(r)}):i(r)!=d)?s(new g(b(e)),r,v):b(e)};for(var y,x=r("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;x.length>I;I++)n(g,y=x[I])&&!n(v,y)&&p(v,y,u(g,y));v.prototype=h,h.constructor=v,r("2aba")(a,d,v)}},ce7e6:function(t,e,r){"use strict";r("58db");var a=r("6a18"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t};e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:n({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-65d58177.ed722bc4.js.map