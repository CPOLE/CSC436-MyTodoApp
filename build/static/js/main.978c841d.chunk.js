(this.webpackJsonpweek2demo=this.webpackJsonpweek2demo||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),s=a.n(r),o=a(6),i=a(55);function d(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token};case"LOGOUT":return{username:void 0,access_token:void 0};default:return e}}function j(e,t){switch(t.type){case"CREATE_TODO":return[{title:t.title,description:t.description,author:t.author,id:t.todoId,completed:!1,dateCompleted:void 0}].concat(Object(i.a)(e));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.todoId&&(e.completed=t.completed,e.dateCompleted=t.dateCompleted),e}));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.todoId}));case"FETCH_TODOS":return t.todos;default:return e}}function u(e,t){return{user:d(e.user,t),todos:j(e.todos,t)}}var l=a(9),b=a(2),O=a(11),h=a(108),p=a(106),x=a(103),f=a(1);function m(e){var t=e.show,a=e.handleClose,n=Object(c.useContext)(l.a).dispatch,r=Object(c.useState)({username:"",password:"",passwordRepeat:""}),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),m=(u[0],u[1]),g=Object(O.b)((function(e,t){return{url:"auth/register",method:"post",data:{username:e,password:t,passwordRepeat:t}}})),v=Object(o.a)(g,2),C=v[0],w=v[1];return Object(c.useEffect)((function(){C&&C.data&&n({type:"REGISTER",username:C.data.username})}),[C]),Object(c.useEffect)((function(){C&&!1===C.isLoading&&(C.data||C.error)&&(C.error?(console.log(C),m("Registration failed, please try again later."),alert("fail")):(console.log(C),m("Registration successful. You may now login."),alert("success")))}),[C]),Object(f.jsx)(h.a,{show:t,onHide:a,children:Object(f.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),w(i.username,i.password),a()},children:[Object(f.jsx)(h.a.Header,{closeButton:!0,children:Object(f.jsx)(h.a.Title,{children:"Registration Page"})}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsx)(p.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(f.jsx)(p.a.Control,{type:"text",value:i.username,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(f.jsx)(p.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(f.jsx)(p.a.Control,{type:"password",name:"register-password",id:"register-password",value:i.password,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{password:e.target.value}))}}),Object(f.jsx)(p.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(f.jsx)(p.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:i.passwordRepeat,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{passwordRepeat:e.target.value}))}})]}),Object(f.jsxs)(h.a.Footer,{children:[Object(f.jsx)(x.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(f.jsx)(x.a,{variant:"primary",type:"submit",disabled:0===i.username.length||0===i.password.length||i.password!==i.passwordRepeat,children:"Register"})]})]})})}function g(e){var t=e.show,a=e.handleClose,n=Object(c.useContext)(l.a).dispatch,r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),b=u[0],m=u[1],g=Object(c.useState)(!1),v=Object(o.a)(g,2),C=v[0],w=v[1];var y=Object(O.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),T=Object(o.a)(y,2),E=T[0],k=T[1];return Object(c.useEffect)((function(){E&&!1===E.isLoading&&(E.data||E.error)&&(E.error?(w(!0),alert("failed")):(w(!1),console.log(E.data),n({type:"LOGIN",username:i,access_token:E.data.access_token})))}),[E]),Object(f.jsx)(h.a,{show:t,onHide:a,children:Object(f.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),k(i,b),a()},children:[Object(f.jsx)(h.a.Header,{closeButton:!0,children:Object(f.jsx)(h.a.Title,{children:"Login Page"})}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsx)(p.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(f.jsx)(p.a.Control,{type:"text",value:i,onChange:function(e){d(e.target.value)},name:"login-username",id:"login-username"}),Object(f.jsx)(p.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(f.jsx)(p.a.Control,{type:"password",value:b,onChange:function(e){m(e.target.value)},name:"login-password",id:"login-password"}),C&&Object(f.jsx)(p.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(f.jsxs)(h.a.Footer,{children:[Object(f.jsx)(x.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(f.jsx)(x.a,{variant:"primary",disabled:0===i.length,type:"submit",children:"Login"})]})]})})}function v(){var e=n.a.lazy((function(){return a.e(3).then(a.bind(null,110))})),t=Object(c.useContext)(l.a).state,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],O=u[1];return t.user.username&&!t.loginFailed?Object(f.jsx)(e,{}):Object(f.jsxs)("div",{className:"justify-content-end",children:[Object(f.jsx)(x.a,{variant:"link",onClick:function(e){return d(!0)},children:"Login"}),Object(f.jsx)(g,{show:i,handleClose:function(){return d(!1)}}),Object(f.jsx)(x.a,{variant:"link",onClick:function(e){return O(!0)},children:"Register"}),Object(f.jsx)(m,{show:b,handleClose:function(){return O(!1)}})]})}var C=a(13);function w(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],d=s[1],j=Object(C.d)(),u=Object(c.useContext)(l.a),b=u.state,h=u.dispatch,p=b.user,x=Object(O.b)((function(e){var t=e.title,a=e.description,c=e.author;return{url:"/todo",method:"post",headers:{Authorization:"".concat(b.user.access_token)},data:{title:t,description:a,author:c}}})),m=Object(o.a)(x,2),g=m[0],v=m[1];return Object(c.useEffect)((function(){g&&g.data&&(h({type:"CREATE_TODO",title:g.data.title,description:g.data.description,author:p.username,id:g.data.id}),console.log(g.data),j.navigate("/todo/".concat(g.data.id)))}),[g]),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({title:a,description:i,author:p.username})},children:[Object(f.jsx)("h3",{children:"Create Todo: "}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Author:"})," ",p.username]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("label",{htmlFor:"create-todo-title",children:[Object(f.jsx)("b",{children:"Title:"})," "]}),Object(f.jsx)("input",{type:"text",name:"create-todo-title",id:"create-todo-title",value:a,onChange:function(e){n(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("label",{htmlFor:"create-todo-description",children:[Object(f.jsx)("b",{children:"Description:"})," "]}),Object(f.jsx)("textarea",{name:"create-todo-description",id:"create-todo-description",value:i,onChange:function(e){d(e.target.value)}})]}),Object(f.jsx)("input",{type:"submit",value:"Create"})]})}var y=a(107),T=function(e){var t=e.text;return Object(f.jsx)(C.a,{href:"/",children:Object(f.jsx)(y.a.Brand,{children:t})})},E=a(104),k=a(105);function L(){var e=Object(c.useContext)(l.a).state.user;return Object(f.jsx)(y.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(y.a.Brand,{href:"/",children:Object(f.jsx)(T,{text:"My Todos"})}),Object(f.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsx)(k.a,{className:"me-auto",children:e.username&&Object(f.jsx)(k.a.Link,{children:Object(f.jsx)(C.a,{href:"/todo/create",children:"Create New Todo"})})}),Object(f.jsx)(n.a.Suspense,{fallback:"Loading...",children:Object(f.jsx)(v,{})})]})]})})}var D=a(109);function S(e){var t=e.title,a=e.description,n=(e.author,e.todoId),r=e.completed,s=e.dateCompleted,i=e.short,d=void 0!==i&&i,j=Object(c.useContext)(l.a).dispatch,u=Object(O.b)((function(e,t){return{url:"/todo/".concat(e),method:"patch",data:{completed:t,dateCompleted:Date.now()}}})),b=Object(o.a)(u,2),h=b[0],m=b[1],g=Object(O.b)((function(e){return{url:"/todo/".concat(e),method:"delete"}})),v=Object(o.a)(g,2),w=v[0],y=v[1];Object(c.useEffect)((function(){h&&h.data&&!1===h.isLoading&&j({type:"TOGGLE_TODO",todoId:n,completed:h.data.completed,dateCompleted:h.data.dateCompleted})}),[h]),Object(c.useEffect)((function(){w&&w.data&&!1===w.isLoading&&j({type:"DELETE_TODO",todoId:n})}),[w]);var T=a;return d&&a.length>30&&(T=a.substring(0,30)+"..."),Object(f.jsxs)(D.a,{children:[Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(D.a.Title,{children:Object(f.jsx)(C.a,{href:"/todo/".concat(n),children:t})}),Object(f.jsxs)(D.a.Subtitle,{children:["Date Created: ",(new Date).toDateString(),!r&&Object(f.jsxs)("div",{children:["Date Completed: ",new Date(s).toDateString()]})]}),Object(f.jsx)(D.a.Text,{children:T}),d&&Object(f.jsx)(C.a,{href:"/todo/".concat(n),children:"View full todo"})]}),Object(f.jsx)(x.a,{onClick:function(e){y(n)},children:"Delete Todo"}),Object(f.jsxs)(p.a.Label,{children:["Completed:",Object(f.jsx)(p.a.Check,{type:"checkbox",onClick:function(e){m(n,e.target.checked)}})]})]})}var R=n.a.memo(S);function _(){var e=Object(c.useContext)(l.a).state.todos;return Object(f.jsxs)("div",{children:["Todo List",e.map((function(e,t){return Object(c.createElement)(R,Object(b.a)(Object(b.a)({},e),{},{short:!0,title:e.title,author:e.author,key:"todo-"+t,todoId:e.id}))}))]})}function I(){var e=Object(c.useContext)(l.a),t=e.state,a=e.dispatch,n=Object(O.b)((function(){return{url:"/todo",method:"get",headers:{Authorization:"".concat(t.user.access_token)}}})),r=Object(o.a)(n,2),s=r[0],i=r[1];Object(c.useEffect)((function(){i()}),[t.user.access_token]),Object(c.useEffect)((function(){s&&!1===s.isLoading&&s.data&&a({type:"FETCH_TODOS",todos:s.data.todos})}),[s]);s.data;var d=s.isLoading;return Object(f.jsxs)("div",{children:[d&&"Todos loading..."," ",Object(f.jsx)(_,{})]})}var F=a(10);function G(e){var t=e.id,a=Object(c.useContext)(l.a).state,n=Object(O.b)((function(){return{url:"/todo/".concat(t),headers:{Authorization:"".concat(a.user.access_token)},method:"get"}})),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)(i,[t]),Object(f.jsxs)("div",{children:[s&&s.data?Object(f.jsx)(R,Object(b.a)({},s.data)):"Loading...",Object(f.jsx)("div",{children:Object(f.jsx)(C.a,{href:"/",children:"Go back"})})]})}var B=function(){var e=Object(c.useReducer)(u,{user:{},todos:[]}),t=Object(o.a)(e,2),a=t[0],n=t[1],r=(a.user,Object(F.f)({"/":Object(F.g)({view:Object(f.jsx)(I,{})}),"/todo/create":Object(F.g)({view:Object(f.jsx)(w,{})}),"/todo/:id":Object(F.g)((function(e){return{view:Object(f.jsx)(G,{id:e.params.id})}}))}));return Object(f.jsx)("div",{children:Object(f.jsx)(l.a.Provider,{value:{state:a,dispatch:n},children:Object(f.jsx)(C.b,{routes:r,children:Object(f.jsxs)(E.a,{fluid:!0,children:[Object(f.jsx)(L,{}),Object(f.jsx)(C.c,{})]})})})})},A=a(37),H=a.n(A).a.create({baseURL:"/"});s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(O.a,{value:H,children:Object(f.jsx)(B,{})})}),document.getElementById("root"))},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a(0),n=a.n(c).a.createContext({state:{},dispatch:function(){}})}},[[100,1,2]]]);
//# sourceMappingURL=main.978c841d.chunk.js.map