(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(29),r=a(30),o=a(32),i=a(31),c=a(0),l=a.n(c),s=a(26),u=function(e){return function(t){Object(o.a)(c,t);var a=Object(i.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return!1===this.props.isAuth?l.a.createElement(s.a,{to:"/login"}):l.a.createElement(e,this.props)}}]),c}(l.a.Component)}},13:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l}));var n=a(136),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b2726463-4ea3-47eb-bcfd-476551e2680d"}}),o={getUsers:function(e,t,a){return r.get("users?page=".concat(e,"&count=").concat(t).concat(a?"&friend="+a:"")).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("!\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 profileAPI!"),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveInfo:function(e){return r.put("/profile",e)}},c={me:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login")}},l={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(140),i=a.n(o),c=a(44),l=a.n(c);t.a=function(e){return r.a.createElement("div",null,e.isFetching?r.a.createElement("img",{className:i.a.loader,src:l.a}):null)}},131:function(e,t,a){"use strict";var n=a(37),r=a(0),o=a.n(r),i=a(75),c=a.n(i);t.a=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),a=[],i=1;i<=t;i++)a.push(i);var l=Math.ceil(t/e.portionSize),s=Object(r.useState)(1),u=Object(n.a)(s,2),m=u[0],f=u[1],p=(m-1)*e.portionSize+1,d=m*e.portionSize;return o.a.createElement("div",{className:c.a.pagin},m>1?o.a.createElement("button",{value:"back",onClick:function(){return f(m-1)}},o.a.createElement("i",{className:"far fa-arrow-alt-circle-left"})):null,o.a.createElement("span",{className:c.a.numbers},a.filter((function(e){return e>=p&&e<=d})).map((function(t){return o.a.createElement("span",{onClick:function(){e.onPageChanged(t)},className:e.currentPage===t&&c.a.active},t)}))),m<l?o.a.createElement("button",{onClick:function(){return f(m+1)}},o.a.createElement("i",{className:"far fa-arrow-alt-circle-right"})):null)}},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(58),r=a(5),o={dialoguesData:[{id:1,name:"Alex"},{id:2,name:"Dima"},{id:3,name:"Nicita"},{id:4,name:"Alex"},{id:5,name:"Dima"},{id:6,name:"Nicita"},{id:7,name:"Bob"},{id:9,name:"Alex"},{id:10,name:"Dima"},{id:11,name:"Nicita"},{id:12,name:"Alex"},{id:13,name:"Dima"},{id:14,name:"Nicita"},{id:15,name:"Bob"}],messagesData:[{id:1,message:"hi"}]};function i(e){return{type:"SEND-SMS",smsText:e}}t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;if("SEND-SMS"===t.type){var a={id:2,message:t.smsText};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(n.a)(e.messagesData),[a])})}return e}},140:function(e,t,a){e.exports={loader:"preloader_loader__ap7o6"}},168:function(e,t,a){e.exports=a(295)},173:function(e,t,a){},174:function(e,t,a){},18:function(e,t,a){e.exports={info:"Info_info__1lPSO",preloader:"Info_preloader__2TwxC",name:"Info_name__15ZA6",about:"Info_about__3oaQM",info_item:"Info_info_item__10eZC",edit:"Info_edit__3-zlO",ProfileFormData:"Info_ProfileFormData__3HHe2",animatetop:"Info_animatetop__NdV1c",save:"Info_save__3l21u",error:"Info_error__RgEx3"}},24:function(e,t,a){e.exports={links:"links_links__3oaVO",item:"links_item__3G4gC",active:"links_active__swv8i"}},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(68),i=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(173);var c=a(29),l=a(30),s=a(32),u=a(31),m=(a(174),a(9)),f=a.n(m),p=a(20),d=a(5),v=a(13),b=a(25),E={id:null,email:null,login:null,captchaUrl:null,isAuth:!1};function h(e,t,a,n){return{type:"SET-USER-DATA",data:{id:e,email:t,login:a,isAuth:n}}}function _(e){return{type:"GET-CAPTCHA-URL",captchaUrl:{captchaUrl:e}}}var g=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.email,i=n.login,t(h(r,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.logout();case 2:0===e.sent.data.resultCode&&t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(_(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return"SET-USER-DATA"===t.type?Object(d.a)(Object(d.a)({},e),t.data):"GET-CAPTCHA-URL"===t.type?Object(d.a)(Object(d.a)({},e),t.captchaUrl):e},S=a(92),x=a.n(S),y=a(10);var k=function(e){return r.a.createElement("div",{className:x.a.header},r.a.createElement("div",{className:"container",style:{justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("i",{className:"fab fa-vk"})),r.a.createElement("span",null,e.isAuth?r.a.createElement("button",{onClick:e.logout,className:x.a.logout},r.a.createElement("i",{className:"fas fa-sign-out-alt"})):r.a.createElement(y.b,{to:"/login"},r.a.createElement("i",{className:"fas fa-sign-in-alt"})))))},w=a(11),C=Object(w.b)((function(e){return{isAuth:e.auth.isAuth}}),(function(e){return{logout:function(){e(O())}}}))(k),P=a(24),D=a.n(P);var T=function(){return r.a.createElement("div",{className:D.a.links},r.a.createElement(y.b,{to:function(e){return Object(d.a)(Object(d.a)({},e),{},{pathname:"/profile"})},className:D.a.item,activeClassName:"/react/profile"==window.location.pathname?D.a.active:null},r.a.createElement("i",{className:"far fa-user-circle"}),r.a.createElement("div",null,"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430")),r.a.createElement(y.b,{to:function(e){return Object(d.a)(Object(d.a)({},e),{},{pathname:"/dialogue"})},className:D.a.item,activeClassName:D.a.active},r.a.createElement("i",{className:"fas fa-comments"}),r.a.createElement("div",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),r.a.createElement(y.b,{to:function(e){return Object(d.a)(Object(d.a)({},e),{},{pathname:"/friends"})},className:D.a.item,activeClassName:D.a.active},r.a.createElement("i",{className:"far fa-address-book"}),r.a.createElement("div",null,"\u0414\u0440\u0443\u0437\u044c\u044f")),r.a.createElement(y.b,{to:function(e){return Object(d.a)(Object(d.a)({},e),{},{pathname:"/Users"})},className:D.a.item,activeClassName:D.a.active},r.a.createElement("i",{className:"far fa-compass"}),r.a.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")))},A=a(58),I={postsData:[{id:1,name:"Alex",likeCounts:"22",text:"\u041f\u043e\u0433\u043e\u0434\u0430 \u0445\u043e\u0440\u043e\u0448\u0430\u044f"},{id:2,name:"Dima",likeCounts:"10"},{id:3,name:"Nikita",likeCounts:"0"}],userProfile:null,status:""};function U(e){return{type:"SET-STATUS",status:e}}var M=function(e){return function(){var t=Object(p.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.d.getProfile(e);case 2:n=t.sent,a({type:"SET-USER-PROFILE",userProfile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if("ADD-POST"===t.type){for(var a={id:1,name:"Rick",text:t.postText,likeCounts:0},n=0;n<e.postsData.length;n++)e.postsData[n].id+=1;return Object(d.a)(Object(d.a)({},e),{},{postsData:[a].concat(Object(A.a)(e.postsData))})}if("DELETE-POST"===t.type){e.postsData.splice(t.id,1);for(n=t.id;n<e.postsData.length;n++)e.postsData[n].id-=1;return Object(d.a)(Object(d.a)({},e),{},{postsData:Object(A.a)(e.postsData)})}return"SET-USER-PROFILE"===t.type?Object(d.a)(Object(d.a)({},e),{},{userProfile:t.userProfile}):"SET-STATUS"===t.type?Object(d.a)(Object(d.a)({},e),{},{status:t.status}):"SET-PHOTO"===t.type?Object(d.a)(Object(d.a)({},e),{},{userProfile:Object(d.a)(Object(d.a)({},e.userProfile),{},{photos:t.photos})}):e},z=a(72),L=a.n(z),R=a(39),J=a.n(R),B=a(44),H=a.n(B),G=a(43),V=a.n(G);var Y=function(e){return e.profile?r.a.createElement("div",null,r.a.createElement("div",{className:J.a.box__avatar},r.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:V.a})),r.a.createElement("div",{className:J.a.box__button},e.isOwner?r.a.createElement("div",null,r.a.createElement("input",{className:J.a.file,type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),r.a.createElement("button",{className:J.a.button},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443")):null)):r.a.createElement("div",{className:J.a.box_avatar},r.a.createElement("div",{className:J.a.avatar},r.a.createElement("img",{src:H.a})))},Z=a(95),K=a.n(Z),q=a(133),W=a(134),X=a(40),Q=a.n(X);var $=function(e){return r.a.createElement("div",{className:Q.a.post},r.a.createElement("img",{className:Q.a.ava,src:V.a}),r.a.createElement("div",{className:Q.a.block},r.a.createElement("div",{className:Q.a.name},e.name),r.a.createElement("div",null,e.text),r.a.createElement("div",{className:Q.a.like},e.likeCounts," like")),e.isOwner?r.a.createElement("div",{className:Q.a.delete,onClick:function(){e.deletePost(e.id-1)}}):null)};var ee=Object(W.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(q.a,{autoComplete:"off",placeholder:"\u0427\u0442\u043e \u0443 \u0412\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",name:"postText",component:"input"})),r.a.createElement("button",null,"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"))}));var te=function(e){var t=e.postsData.map((function(t){return r.a.createElement($,{name:t.name,id:t.id,key:t.id,text:t.text,likeCounts:t.likeCounts,deletePost:e.deletePost,isOwner:e.isOwner})}));return r.a.createElement("div",{className:K.a.posts},r.a.createElement("span",{className:K.a.MyPosts},"\u041c\u043e\u0438 \u041f\u043e\u0441\u0442\u044b",r.a.createElement(ee,{onSubmit:function(t){null!=t.postText&&(e.addPost(t.postText),t.postText=null)}})),t)},ae=Object(w.b)((function(e){return{postsData:e.profile.postsData}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",postText:e}}(t))},deletePost:function(t){e(function(e){return{type:"DELETE-POST",id:e}}(t))}}}))(te),ne=a(37),re=a(18),oe=a.n(re),ie=a(59),ce=a.n(ie);var le=function(e){var t=Object(n.useState)(!1),a=Object(ne.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(e.status),l=Object(ne.a)(c,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){u(e.status)}),[e.status]),r.a.createElement("div",{className:ce.a.status},e.isOwner&&o?r.a.createElement("div",{className:ce.a.status_editMode},r.a.createElement("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(s)},value:s,onChange:function(e){u(e.currentTarget.value)}})):r.a.createElement("div",{className:e.isOwner?ce.a.status_item:ce.a.status_not_yours,onClick:function(){i(!0)}},e.status))},se=Object(W.a)({form:"profile"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:oe.a.ProfileFormData},r.a.createElement("div",null,r.a.createElement("b",null,"Full Name:")," ",r.a.createElement(q.a,{placeholder:"Full Name",autoComplete:"off",name:"fullName",component:"input",type:"text"})),r.a.createElement("div",{className:oe.a.about},r.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," ",r.a.createElement(q.a,{placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",autoComplete:"off",name:"aboutMe",component:"input",type:"text"})),r.a.createElement("div",null,r.a.createElement("b",null,"Instagram:")," ",r.a.createElement(q.a,{placeholder:"Instagram",autoComplete:"off",name:"contacts.instagram",component:"input",type:"text"})),r.a.createElement("div",null,r.a.createElement("b",null,"YouTube:")," ",r.a.createElement(q.a,{placeholder:"YouTube",autoComplete:"off",name:"contacts.youtube",component:"input",type:"text"})),r.a.createElement("div",null,r.a.createElement("b",null,"Description:")," ",r.a.createElement(q.a,{placeholder:"Descriptione",autoComplete:"off",name:"lookingForAJobDescription",component:"input",type:"text"})),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",r.a.createElement(q.a,{name:"lookingForAJob",component:"input",type:"checkbox"})),r.a.createElement("button",{className:oe.a.save},r.a.createElement("i",{className:"fas fa-save"})),e.error?r.a.createElement("div",{className:oe.a.error},e.error):r.a.createElement("span",null))}));var ue=function(e){var t=Object(n.useState)(!1),a=Object(ne.a)(t,2),o=a[0],i=a[1];return e.profile?r.a.createElement("div",{className:oe.a.info},r.a.createElement("div",{className:oe.a.name},r.a.createElement("b",null,e.profile.fullName)),r.a.createElement(le,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),r.a.createElement("div",{className:oe.a.info_item},r.a.createElement("div",{className:oe.a.about},r.a.createElement("b",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")," ",e.profile.aboutMe?e.profile.aboutMe:"---"),r.a.createElement("div",null,r.a.createElement("b",null,"Instagram:")," ",e.profile.contacts.instagram?e.profile.contacts.instagram:"---"),r.a.createElement("div",null,r.a.createElement("b",null,"YouTube:")," ",e.profile.contacts.youtube?e.profile.contacts.youtube:"---"),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",e.profile.lookingForAJob?"Yes":"No"),e.profile.lookingForAJob?r.a.createElement("div",{className:oe.a.about},r.a.createElement("b",null,"My professional skills:")," ",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"---"):null,e.isOwner?r.a.createElement("i",{className:"fas fa-edit "+oe.a.edit,onClick:function(){i(!0)}}):null),o?r.a.createElement(se,{initialValues:e.profile,onSubmit:function(t){e.saveInfo(t,i)},setEditMode:i}):null):r.a.createElement("div",{className:oe.a.info},r.a.createElement("img",{className:oe.a.preloader,src:H.a}))};var me=function(e){return r.a.createElement("div",{className:L.a.Profile},r.a.createElement("div",{className:L.a.col1},r.a.createElement(Y,{profile:e.profile,isOwner:e.isOwner,savePhoto:e.savePhoto})),r.a.createElement("div",{className:L.a.col2},r.a.createElement(ue,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,saveInfo:e.saveInfo}),r.a.createElement(ae,{isOwner:e.isOwner})))},fe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.AuthUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(me,Object.assign({},this.props,{isOwner:!this.props.match.params.userId}))}}]),a}(n.PureComponent),pe=a(26),de=a(129),ve=a(8),be=Object(ve.d)(Object(w.b)((function(e){return{profile:e.profile.userProfile,isAuth:e.auth.isAuth,status:e.profile.status,AuthUserId:e.auth.id}}),(function(e){return{getUserProfile:function(t){e(M(t))},getStatus:function(t){e(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.b.getStatus(e);case 2:n=t.sent,a(U(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},updateStatus:function(t){e(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(U(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},savePhoto:function(t){e(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SET-PHOTO",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},saveInfo:function(t,a){e(function(e,t){return function(){var a=Object(p.a)(f.a.mark((function a(n,r){var o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=r().auth.id,a.prev=1,a.next=4,v.b.saveInfo(e);case 4:0===a.sent.data.resultCode?(n(M(o)),t(!1)):n(Object(b.a)("profile",{_error:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u044b\u0435 URL \u0430\u0434\u0440\u0435\u0441\u0430"})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),n(Object(b.a)("profile",{_error:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 - ".concat(a.t0.response.status)}));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}(t,a))}}})),pe.g,de.a)(fe),Ee=a(74),he=a.n(Ee);function _e(e){return e?void 0:"error message"}var ge=a(142),Oe=a(98),je=a.n(Oe);function Ne(e){var t=e.input,a=e.meta,n=Object(ge.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:je.a.form+" "+(o?je.a.error:"")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,n))),o?r.a.createElement("span",null,a.error):r.a.createElement("span",null))}var Se,xe=(Se=20,function(e){return e.length>Se?"Max length is ".concat(Se," symbols"):void 0});var ye=Object(W.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(q.a,{placeholder:"Email",name:"email",component:Ne,validate:[_e,xe]})),r.a.createElement("div",null,r.a.createElement(q.a,{type:"password",placeholder:"Password",name:"password",component:Ne,validate:[_e,xe]})),e.error?r.a.createElement("div",{className:he.a.error},e.error):r.a.createElement("span",null),r.a.createElement("div",null,r.a.createElement(q.a,{type:"checkbox",name:"rememberMe",component:Ne})," Remember me"),e.captchaUrl?r.a.createElement("img",{src:e.captchaUrl}):null,e.captchaUrl?r.a.createElement(q.a,{placeholder:"captcha",component:Ne,name:"captcha",validate:_e}):null,r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}));var ke=function(e){return e.isAuth?r.a.createElement(pe.a,{to:"/profile"}):r.a.createElement("div",{className:he.a.login},r.a.createElement("div",{className:he.a.reg},r.a.createElement("h2",null,"Login"),r.a.createElement(ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})))},we=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),(function(e){return{login:function(t,a,n,r){e(function(e,t,a,n){return function(){var r=Object(p.a)(f.a.mark((function r(o){var i;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.a.login(e,t,a,n);case 2:0===(i=r.sent).data.resultCode?o(g()):(10===i.data.resultCode&&o(j()),o(Object(b.a)("login",{_error:"wrong email or password"})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(t,a,n,r))},logout:function(){e(O())}}}))(ke),Ce=a(48),Pe=a.n(Ce),De=a(130),Te=a(131);function Ae(e){return r.a.createElement("div",{className:Pe.a.friends_item},r.a.createElement(y.b,{to:"/profile/"+e.id},r.a.createElement("img",{src:e.photo,className:Pe.a.ava})),e.name,r.a.createElement("div",{className:Pe.a.status},'"',e.status,'"'),r.a.createElement("div",{className:Pe.a.location},e.location))}var Ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={friendsData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isFetching:!0}),v.d.getUsers(this.state.currentPage,this.state.pageSize,!0).then((function(t){e.setState({friendsData:t.items,totalUsersCount:t.totalCount,isFetching:!1}),console.log(e.state)}))}},{key:"render",value:function(){var e=this.state.friendsData.map((function(e){return r.a.createElement(Ae,{name:e.name,key:e.id,id:e.id,status:e.status,location:e.location,photo:null!=e.photos.small?e.photos.small:V.a,followed:e.followed,if:e.id})}));return r.a.createElement("div",{className:Pe.a.friends},this.state.isFetching?null:e,this.state.friendsData.length>0?r.a.createElement(Te.a,{totalUsersCount:this.state.totalUsersCount,onPageChanged:this.state.onPageChanged,currentPage:this.state.currentPage,portionSize:3,pageSize:this.state.pageSize}):null,r.a.createElement(De.a,{isFetching:this.state.isFetching}))}}]),a}(r.a.Component),Ue={initialized:!1};var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZED-SUCCESS"===t.type?Object(d.a)(Object(d.a)({},e),{},{initialized:!0}):e},Fe=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",{className:"Loading"},"Loading...")},r.a.createElement(e,t))}},ze=a(132),Le=a(141),Re=a(135),Je=Object(ve.c)({profile:F,dialogue:ze.b,auth:N,form:Re.a,app:Me}),Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,He=Object(ve.e)(Je,Be(Object(ve.a)(Le.a)));window.store=He;var Ge=He,Ve=r.a.lazy((function(){return a.e(3).then(a.bind(null,300))})),Ye=r.a.lazy((function(){return a.e(4).then(a.bind(null,301))})),Ze=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeAppThunkCreator()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement("div",{className:"container"},r.a.createElement(T,null),r.a.createElement("div",{className:"main"},r.a.createElement(pe.d,null,r.a.createElement(pe.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(pe.b,{path:"/dialogue",render:Fe(Ve)}),r.a.createElement(pe.b,{path:"/friends",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(pe.b,{path:"/users",render:Fe(Ye)}),r.a.createElement(pe.b,{path:"/login",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(pe.b,{exact:!0,path:"/",render:function(){return r.a.createElement(be,null)}}))))):null}}]),a}(r.a.Component),Ke=Object(ve.d)(Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppThunkCreator:function(){return function(e){var t=e(g());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}),pe.g)(Ze),qe=function(e){return r.a.createElement(w.a,{store:Ge},r.a.createElement(y.a,{basename:"/react"},r.a.createElement(Ke,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports={box__avatar:"avatar_box__avatar__1u6Ex",box__button:"avatar_box__button__3_1k0",file:"avatar_file__2iinm",button:"avatar_button__FSGGk"}},40:function(e,t,a){e.exports={post:"post_post__2bf2u",block:"post_block__VC7Fz",name:"post_name__2R-Md",ava:"post_ava__10lIC",like:"post_like__KNArq",delete:"post_delete__2tONj"}},43:function(e,t,a){e.exports=a.p+"static/media/ava.c145c92d.png"},44:function(e,t,a){e.exports=a.p+"static/media/preloader.cf805ba2.svg"},48:function(e,t,a){e.exports={friends:"friends_friends__34fBX",friends_item:"friends_friends_item__1l1hS",ava:"friends_ava__3Awc-",status:"friends_status__2z_O-",location:"friends_location__F9DOt",button:"friends_button__38ael"}},59:function(e,t,a){e.exports={status:"status_status__2yQ6U",status_item:"status_status_item__3Sbp9",status_not_yours:"status_status_not_yours__297sn",status_editMode:"status_status_editMode__31RJe"}},72:function(e,t,a){e.exports={Profile:"profile_Profile__1x5iO",col1:"profile_col1__20ymb",avatar:"profile_avatar__O8MHn",col2:"profile_col2__aKu9O"}},74:function(e,t,a){e.exports={login:"login_login__1q1pJ",reg:"login_reg__3xoxf",error:"login_error__21tqr"}},75:function(e,t,a){e.exports={pagin:"paginator_pagin__dtdRf",active:"paginator_active__1GOcB",numbers:"paginator_numbers__1Ibeb"}},92:function(e,t,a){e.exports={header:"header_header__SKS1O",logout:"header_logout__nduo8"}},95:function(e,t,a){e.exports={posts:"MyPost_posts__didW_",MyPosts:"MyPost_MyPosts__3U_ru"}},98:function(e,t,a){e.exports={form:"formsControls_form__1te2p",error:"formsControls_error__2wgZs"}}},[[168,1,2]]]);
//# sourceMappingURL=main.b495097c.chunk.js.map