(this["webpackJsonpbrocolli-and-co"]=this["webpackJsonpbrocolli-and-co"]||[]).push([[0],{103:function(e,i,t){},104:function(e,i,t){},105:function(e,i,t){},128:function(e,i,t){},129:function(e,i,t){},130:function(e,i,t){"use strict";t.r(i);var a=t(5),n=t(0),c=t.n(n),o=t(11),l=t.n(o),s=(t(103),t(104),t(164)),r=t(167),d=t(82),m=t.p+"static/media/broccoli_logo.1818539d.svg",j=(t(105),function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)(s.a,{className:"header",color:"secondary",children:Object(a.jsxs)(r.a,{children:[Object(a.jsx)(d.a,{variant:"h6",color:"primary",className:"company-name",children:"Broccoli & Co."}),Object(a.jsx)("div",{className:"icon-logo",children:Object(a.jsx)("img",{src:m})})]})})})}),u=t(172),b=t(173),h=t(176),x=t(171),f=t(74),g=t.n(f),O=t(178),p=t(168),v=t(170),y=t(169),S=t(18),N=t(52),F=t(57),w=t(50),D=t(27),k=t(79),C=t(78),z=Object(n.createContext)(),E=function(e){Object(k.a)(t,e);var i=Object(C.a)(t);function t(e){var a;return Object(w.a)(this,t),(a=i.call(this,e)).toggleFormDialog=function(){a.setState((function(e,i){return{isFormDialogVisible:!e.isFormDialogVisible}}))},a.toggleSuccessDialog=function(){a.setState((function(e,i){return{isSuccessDialogVisible:!e.isSuccessDialogVisible}}))},a.state=e.initialState?e.initialState:{isFormDialogVisible:!1,isSuccessDialogVisible:!1},a}return Object(D.a)(t,[{key:"render",value:function(){return Object(a.jsx)(z.Provider,{value:Object(F.a)(Object(F.a)({},this.state),{},{toggleFormDialog:this.toggleFormDialog,toggleSuccessDialog:this.toggleSuccessDialog}),children:this.props.children})}}]),t}(n.Component),P=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t="";return i&&e!==i?t="Email addresses do not match.":e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Please enter an email address in the format 'email@address.com'."):t="Please enter an email address.",t},A=function(){return Object(a.jsx)(z.Consumer,{children:function(e){var i=e.isFormDialogVisible,t=e.toggleFormDialog,n=e.toggleSuccessDialog;return Object(a.jsx)(O.a,{className:"dialog-box",open:i,onBackdropClick:t,children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(y.a,{className:"dialog-title",children:"Request an invitation"}),Object(a.jsx)(v.a,{className:"dialog-text",children:"Please fill in your details below, and click Submit to receive an invitation."}),Object(a.jsx)(S.c,{initialValues:{fullName:"",email:"",confirmEmail:""},validate:function(e){var i={};if(i.fullName=function(e){var i="";return e?/^[a-zA-Z\s]{3,}$/.test(e)||(i="Please enter at least 3 characters for your name, using only alphabetical letters and spaces."):i="Please enter a name.",i}(e.fullName),i.email=P(e.email),i.confirmEmail=P(e.confirmEmail,e.email),Object.values(i).some((function(e){return""!==e})))return i},onSubmit:function(e,i){var a=i.setSubmitting,c=i.setErrors;i.props;console.log("POST values"),g.a.post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",{name:e.fullName,email:e.email}).then((function(e){console.log(e),t(),n(),a(!1)})).catch((function(e){c({confirmEmail:e.response.data.errorMessage}),a(!1)}))},children:function(e){var i=e.submitForm,t=e.isSubmitting;return Object(a.jsxs)(S.b,{className:"invite-form",children:[Object(a.jsx)(S.a,{component:N.a,variant:"outlined",size:"small",margin:"normal",name:"fullName",type:"name",label:"Full Name",inputProps:{"data-testid":"nameField"},fullWidth:!0}),Object(a.jsx)(S.a,{component:N.a,variant:"outlined",size:"small",margin:"normal",name:"email",type:"email",label:"Email",inputProps:{"data-testid":"emailField"},fullWidth:!0}),Object(a.jsx)(S.a,{component:N.a,variant:"outlined",size:"small",margin:"normal",name:"confirmEmail",type:"email",label:"Confirm Email",inputProps:{"data-testid":"confirmEmailField"},fullWidth:!0}),t&&Object(a.jsx)(x.a,{}),Object(a.jsx)("div",{className:"dialog-button",children:Object(a.jsx)(u.a,{variant:"contained",disabled:t,onClick:i,fullWidth:!0,children:"Submit"})})]})}})]})})}})},V=function(){return Object(a.jsx)(z.Consumer,{children:function(e){var i=e.isSuccessDialogVisible,t=e.toggleSuccessDialog;return Object(a.jsx)(O.a,{open:i,onBackdropClick:t,children:Object(a.jsxs)(p.a,{className:"dialog-box",children:[Object(a.jsx)(y.a,{className:"dialog-title",children:"All done!"}),Object(a.jsx)(v.a,{className:"dialog-text",children:"You will be one of the first to experience Broccoli & Co. when we launch."}),Object(a.jsx)("div",{className:"dialog-button",children:Object(a.jsx)(u.a,{variant:"contained",onClick:t,fullWidth:!0,children:"OK"})})]})})}})},B=(t(128),function(){return Object(a.jsx)(z.Consumer,{children:function(e){var i=e.toggleFormDialog;return Object(a.jsx)("div",{className:"body-section",children:Object(a.jsxs)(b.a,{container:!0,direction:"column",className:"title-container",children:[Object(a.jsx)(b.a,{item:!0,xs:10,children:Object(a.jsx)(h.a,{className:"title-text-box",children:Object(a.jsxs)(b.a,{container:!0,justify:"center",spacing:2,children:[Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"h3",color:"secondary",children:"A better way to enjoy every day."})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{variant:"h6",color:"secondary",children:"Be the first to know when we launch."})}),Object(a.jsx)(b.a,{item:!0,xs:12,children:Object(a.jsx)(u.a,{variant:"contained",onClick:i,children:"Request an Invite"})})]})})}),Object(a.jsxs)(b.a,{item:!0,children:[Object(a.jsx)(A,{}),Object(a.jsx)(V,{})]})]})})}})}),W=(t(129),function(){return Object(a.jsxs)(h.a,{className:"footer",bgcolor:"secondary.main",children:[Object(a.jsx)(d.a,{variant:"body2",children:"Made with \ud83d\udc9a in Melbourne. "}),Object(a.jsx)(d.a,{variant:"body2",children:"\xa9 2020 Broccoli & Co. All rights reserved. "})]})});var M=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(E,{children:Object(a.jsx)(B,{})}),Object(a.jsx)(W,{})]})},Z=t(174),R=t(77),q=Object(R.a)({palette:{primary:{main:"#33A721"},secondary:{main:"#FFFFFF"}},overrides:{MuiButton:{root:{background:"linear-gradient(45deg, #caf761 30%, #9ddb38 90%);"}}},typography:{fontFamily:["Poppins","Roboto","sans-serif"].join(","),h3:{textShadow:"2px 2px rgba(0,0,0,0.3)",fontSize:"1.3rem","@media (min-width:600px)":{fontSize:"3rem"}},h6:{fontSize:"0.8rem","@media (min-width:600px)":{fontSize:"1.2rem"}},body1:{fontWeight:"300",fontSize:"0.7rem","@media (min-width:600px)":{fontSize:"1rem"}},body2:{fontWeight:"200",fontSize:"0.6rem","@media (min-width:600px)":{fontSize:"1rem"}}}});l.a.render(Object(a.jsx)(Z.a,{theme:q,children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.923644d4.chunk.js.map