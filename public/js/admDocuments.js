(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LbRV:function(t,e,a){"use strict";a("ynEo");var n=a("jdmY"),i=a("qa07"),s=a("dWAg"),o=a("8ud9"),r=a("/myT"),l=a("WN+I"),c=a("gNKD"),v=a("2b3T");e.a=Object(l.a)(n.a,i.a,o.a,Object(r.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"==typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:s.a.options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:a,insetFooter:n,left:i,right:s,top:o}=this.$vuetify.application;return{paddingBottom:Object(c.f)(e+a+n),paddingLeft:this.app?Object(c.f)(i):void 0,paddingRight:this.app?Object(c.f)(s):void 0,paddingTop:Object(c.f)(t+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(v.e)("auto-height",this),0==this.timeout&&Object(v.d)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(c.l)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(c.l)(this)])},genWrapper(){const t=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:n.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",t,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},QoT8:function(t,e,a){var n=a("ZPZD");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)},ZPZD:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"input[type=file]{position:absolute;top:-500px}div.file-listing{width:80%}span.remove-file{color:red;cursor:pointer;float:right}",""])},"k/rp":function(t,e,a){"use strict";a.r(e);var n={name:"admindocumentComponent",data:function(){return{files:[],name:"",url:"",format:"",type:"",snackbar:!1,text:"File uploaded successfully !!",timeout:3e3}},mounted:function(){},computed:{},methods:{addFiles:function(){this.$refs.files.click()},submitFiles:function(){var t=new FormData;t.append("name",this.name),t.append("url",this.url),t.append("format",this.format),t.append("type",this.type);for(var e=0;e<this.files.length;e++){var a=this.files[e];t.append("files["+e+"]",a)}this.$store.dispatch("adminStore/POST_Documents",t),this.snackbar=!0,this.files=[],this.name="",this.url="",this.format="",this.type=""},handleFilesUpload:function(){for(var t=this.$refs.files.files,e=0;e<t.length;e++)this.files.push(t[e]);this.addName()},removeFile:function(t){this.files.splice(t,1)},addName:function(){this.name,this.url;var t=this.files[0].name.split(".").slice(0,-1).join(".");t=t.replace(/_\d*$/g,""),this.name=t.replace(/_/g," "),this.url=this.files[0].name},addUrLPrefix:function(){var t=document.getElementById("selectFormat");if(1==t.options[t.selectedIndex].value){var e=document.getElementById("docUpUrl");this.url="PDF/"+e.value}}}},i=(a("k4Ro"),a("KHd+")),s=a("ZUTo"),o=a.n(s),r=a("gzZi"),l=a("Yq0q"),c=a("D9m0"),v=a("LbRV"),p=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"pb-5 text-center grey--text"},[t._v("Upload Documents")]),t._v(" "),a("div",{staticClass:"large-12 medium-12 small-12 cell"},[a("label",[a("input",{ref:"files",attrs:{type:"file",id:"files"},on:{change:function(e){return t.handleFilesUpload()}}})])]),t._v(" "),a("div",{staticClass:"large-12 medium-12 small-12 cell"},t._l(t.files,(function(e,n){return a("div",{key:n,staticClass:"file-listing"},[t._v(t._s(e.name)+" "),a("span",{staticClass:"remove-file",on:{click:function(e){return t.removeFile(n)}}},[t._v("Remove")])])})),0),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"large-12 medium-12 small-12 cell"},[a("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.addFiles()}}},[t._v("Add File")])],1),t._v(" "),a("br"),t._v(" "),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Document Name"}},[t._v(" Document Name ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"docUpName",name:"name",placeholder:"Document Name",minlength:"3",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Documents Url"}},[t._v(" Documents Url ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",id:"docUpUrl",name:"url",placeholder:"Documents Url",minlength:"3",required:""},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Document Format"}},[t._v("Document Format")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],staticClass:"form-control",attrs:{id:"selectFormat",minlength:"1",name:"format",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.format=e.target.multiple?a:a[0]},function(e){return t.addUrLPrefix()}]}},[a("option",{attrs:{value:""}},[t._v("Select Format")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("PDF")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Word")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Excel")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("Link")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("Folder")])])]),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Documents Type"}},[t._v("Documents Type")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{id:"",name:"type",minlength:"1",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Document Type")]),t._v(" "),a("option",{attrs:{value:"1"}},[t._v("Member")]),t._v(" "),a("option",{attrs:{value:"2"}},[t._v("Credit")]),t._v(" "),a("option",{attrs:{value:"3"}},[t._v("Operation Procedures")]),t._v(" "),a("option",{attrs:{value:"4"}},[t._v("MIS")]),t._v(" "),a("option",{attrs:{value:"5"}},[t._v("DMU")]),t._v(" "),a("option",{attrs:{value:"6"}},[t._v("HR & Learning")]),t._v(" "),a("option",{attrs:{value:"7"}},[t._v("Other")]),t._v(" "),a("option",{attrs:{value:"8"}},[t._v("Policy")]),t._v(" "),a("option",{attrs:{value:"9"}},[t._v("Risk & Compliance")]),t._v(" "),a("option",{attrs:{value:"10"}},[t._v("Universa Training Manuals")]),t._v(" "),a("option",{attrs:{value:"11"}},[t._v("Letters to Network")])])]),a("br")])],1),t._v(" "),a("div",{staticClass:"large-12 medium-12 small-12 cell"},[a("v-btn",{attrs:{color:"light-green white--text float-right"},on:{click:function(e){return t.submitFiles()}}},[t._v("Submit")])],1),t._v(" "),a("v-snackbar",{attrs:{top:"",timeout:t.timeout,color:"lime--text"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"amber",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v("\n          Close\n        ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n\n      ")])],1)}),[],!1,null,null,null);e.default=p.exports;o()(p,{VBtn:r.a,VCol:l.a,VRow:c.a,VSnackbar:v.a})},k4Ro:function(t,e,a){"use strict";var n=a("QoT8");a.n(n).a},tEIh:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0px 3px 5px -1px rgba(0,0,0,.2),0px 6px 10px 0px rgba(0,0,0,.14),0px 1px 18px 0px rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor !important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}.v-snack__wrapper.theme--dark{background-color:#333;color:rgba(255,255,255,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin-left:0;margin-right:0;margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none !important}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(0.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""])},ynEo:function(t,e,a){var n=a("tEIh");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("4566d069",n,!0,{})}}]);