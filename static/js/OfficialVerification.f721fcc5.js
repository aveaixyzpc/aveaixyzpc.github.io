(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OfficialVerification"],{6432:function(e,t,o){},a27f:function(e,t,o){e.exports=o.p+"static/img/ave-logo.f5f1da6d.svg"},d11d:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),n=o("a27f"),i=o.n(n),r=function(e){return Object(c["pushScopeId"])("data-v-37b78166"),e=e(),Object(c["popScopeId"])(),e},l={class:"official"},a={class:"title"},b=r((function(){return Object(c["createElementVNode"])("img",{src:i.a,alt:""},null,-1)})),s={class:"dialog-content"},d={class:"font-18 font-weight-500"},u={class:"description"},j={class:"mt-10"},f={key:0},O={key:1},m={key:2},p={key:3},g={class:"font-18 font-weight-500"},V={class:"description"};function h(e,t,o,n,i,r){var h=Object(c["resolveComponent"])("el-button"),v=Object(c["resolveComponent"])("el-input"),y=Object(c["resolveComponent"])("el-form-item"),k=Object(c["resolveComponent"])("el-form"),w=Object(c["resolveComponent"])("el-col"),C=Object(c["resolveComponent"])("el-row"),N=Object(c["resolveComponent"])("el-result"),S=Object(c["resolveComponent"])("el-dialog");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,[Object(c["createElementVNode"])("div",a,[b,Object(c["createTextVNode"])("   "+Object(c["toDisplayString"])(e.$t("authenticityVerification")),1)]),Object(c["createVNode"])(C,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(w,{span:10,offset:7},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(k,{model:i.form,rules:i.rules,ref:"form",onSubmit:Object(c["withModifiers"])(r.onSubmit,["prevent"]),"label-width":"auto"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(y,{prop:"content"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(v,{modelValue:i.form.content,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.form.content=e}),placeholder:e.$t("authenticityVerificationTip")},{append:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(h,{type:"primary","native-type":"submit",loading:i.loading},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("verify1")),1)]})),_:1},8,["loading"])]})),_:1},8,["modelValue","placeholder"])]})),_:1})]})),_:1},8,["model","rules","onSubmit"])]})),_:1})]})),_:1}),Object(c["createVNode"])(S,{modelValue:i.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.dialogVisible=e}),width:"300px","close-on-click-modal":!1,"show-close":!1},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",s,[i.is_verify?(Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:0,icon:"success"},{title:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",d,Object(c["toDisplayString"])(e.$t("authentic")),1),Object(c["createElementVNode"])("div",u,[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("isOfficialTip",{n:i.form.content}))+" ",1),Object(c["createElementVNode"])("ul",j,[i.obj.operator_name?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",f,Object(c["toDisplayString"])(e.$t("username"))+": "+Object(c["toDisplayString"])(i.obj.operator_name),1)):Object(c["createCommentVNode"])("",!0),i.obj.email?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",O,Object(c["toDisplayString"])(e.$t("email"))+": "+Object(c["toDisplayString"])(i.obj.email),1)):Object(c["createCommentVNode"])("",!0),i.obj.telegram?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",m,"Telegram: "+Object(c["toDisplayString"])(i.obj.telegram),1)):Object(c["createCommentVNode"])("",!0),i.obj.remark?(Object(c["openBlock"])(),Object(c["createElementBlock"])("li",p,Object(c["toDisplayString"])(e.$t("remark"))+": "+Object(c["toDisplayString"])(i.obj.remark),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])(h,{type:"primary",onClick:Object(c["withModifiers"])(r.close,["stop"]),class:"swap-button mt-20"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("getIt")),1)]})),_:1},8,["onClick"])]})),extra:Object(c["withCtx"])((function(){return[]})),_:1})):(Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:1,icon:"error"},{title:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",g,Object(c["toDisplayString"])(e.$t("unauthentic")),1),Object(c["createElementVNode"])("div",V,Object(c["toDisplayString"])(e.$t("unOfficialTip",{n:i.form.content})),1),Object(c["createVNode"])(h,{type:"primary",onClick:Object(c["withModifiers"])(r.close,["stop"]),class:"swap-button mt-20"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.$t("getIt")),1)]})),_:1},8,["onClick"])]})),_:1}))])]})),_:1},8,["modelValue"])])}o("d3b7");var v=o("365c"),y={name:"",data:function(){return{loading:!1,form:{content:""},rules:{content:[{required:!0,message:this.$t("required"),trigger:"blur"}]},is_verify:!1,dialogVisible:!1,obj:{}}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=!0,Object(v["V"])(e.form.content).then((function(t){var o,c;e.dialogVisible=!0,e.is_verify=null===t||void 0===t||null===(o=t.data)||void 0===o?void 0:o.is_verify,e.obj=null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.operator_info})).catch((function(t){console.log(t),e.$message.error("failed")})).finally((function(){e.loading=!1})))}))},close:function(){this.is_verify=!1,this.dialogVisible=!1,this.obj={}}}},k=(o("fd8b"),o("6b0d")),w=o.n(k);const C=w()(y,[["render",h],["__scopeId","data-v-37b78166"]]);t["default"]=C},fd8b:function(e,t,o){"use strict";o("6432")}}]);