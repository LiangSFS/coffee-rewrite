(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"1e32":function(e,r,t){"use strict";var o=t("62b3"),a=t.n(o);a.a},"62b3":function(e,r,t){},"73cf":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"register"},[o("img",{attrs:{src:t("eef7"),alt:""}}),o("CoffeeForm",{ref:"CoffeeForm",attrs:{model:e.formModel,rules:e.formRules}},[o("CoffeeFormItem",{attrs:{prop:"username"}},[o("CoffeeFormInput",{attrs:{placeholder:"用户名",type:"text",name:"username"},model:{value:e.formModel.username,callback:function(r){e.$set(e.formModel,"username",r)},expression:"formModel.username"}})],1),o("CoffeeFormItem",{attrs:{prop:"email"}},[o("CoffeeFormInput",{attrs:{placeholder:"电子邮箱",type:"text",name:"email"},model:{value:e.formModel.email,callback:function(r){e.$set(e.formModel,"email",r)},expression:"formModel.email"}})],1),o("CoffeeFormItem",{attrs:{prop:"password"}},[o("CoffeeFormInput",{attrs:{placeholder:"6-10位数字、字母、下划线组成的密码",type:"password",name:"password"},model:{value:e.formModel.password,callback:function(r){e.$set(e.formModel,"password",r)},expression:"formModel.password"}})],1),o("CoffeeFormItem",[o("CoffeeFormInput",{attrs:{type:"button",value:"注册并登录"},nativeOn:{touchstart:function(r){return e.submitForm(r)}}})],1)],1),o("p",{staticClass:"register-info"},[e._v("登录即代表同意咖啡的《用户使用协议》")]),o("router-link",{staticClass:"register-router",attrs:{to:"/login"}},[e._v("已有账户，马上登陆 ")])],1)},a=[],s=t("6821f"),n=t.n(s),m=t("e297"),f=t.n(m),l=t("1ae1"),u=t("4511"),i=t("47ee"),p={name:"Register",data:function(){return{formRules:{username:{pattern:/^[0-9A-Za-z_\u4e00-\u9fa5]+$/,required:!0},email:{pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,required:!0},password:{pattern:/[a-zA-Z0-9_-]{6,10}/,required:!0}},formModel:{username:"",email:"",password:""}}},methods:{submitForm:function(){var e=this,r=this.$refs.CoffeeForm.allValidate();r.then((function(){var r=n()(e.formModel.password);f.a.set("username",e.username),f.a.set("email",e.formModel.email),f.a.set("password",r),e.$message({type:"success",text:"登录成功"}),e.$router.push("/")})).catch((function(e){}))}},components:{CoffeeForm:l["a"],CoffeeFormItem:u["a"],CoffeeFormInput:i["a"]}},c=p,d=(t("1e32"),t("2877")),C=Object(d["a"])(c,o,a,!1,null,"4c47c4f4",null);r["default"]=C.exports}}]);