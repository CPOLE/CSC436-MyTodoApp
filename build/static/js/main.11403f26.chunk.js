(this.webpackJsonpweek2demo=this.webpackJsonpweek2demo||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(22),s=a.n(n),o=a(6),i=a(55);function d(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token};case"LOGOUT":return{username:void 0,access_token:void 0};case"FETCH_USERS":return t.users;default:return e}}function j(e,t){switch(t.type){case"CREATE_TODO":return[{title:t.title,description:t.description,author:t.author,id:t.todoId,completed:!1,dateCompleted:void 0}].concat(Object(i.a)(e));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.todoId&&(e.completed=t.completed,e.dateCompleted=t.dateCompleted),e}));case"DELETE_TODO":return e.filter((function(e){return e.id!==t.todoId}));case"FETCH_TODOS":return t.todos;default:return e}}function u(e,t){return{user:d(e.user,t),todos:j(e.todos,t)}}var l=a(8),b=a(2),O=a(11),h=a(108),x=a(106),p=a(103),f=a(1);function m(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(l.a).dispatch,n=Object(c.useState)({username:"",password:"",passwordRepeat:""}),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),m=(u[0],u[1]),g=Object(O.b)((function(e,t){return{url:"auth/register",method:"post",data:{username:e,password:t,passwordRepeat:t}}})),v=Object(o.a)(g,2),C=v[0],w=v[1];return Object(c.useEffect)((function(){C&&C.data&&r({type:"REGISTER",username:C.data.username})}),[C]),Object(c.useEffect)((function(){C&&!1===C.isLoading&&(C.data||C.error)&&(C.error?(console.log(C),m("Registration failed, please try again later."),alert("fail")):(console.log(C),m("Registration successful. You may now login."),alert("success")))}),[C]),Object(f.jsx)(h.a,{show:t,onHide:a,children:Object(f.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),w(i.username,i.password),a()},children:[Object(f.jsx)(h.a.Header,{closeButton:!0,children:Object(f.jsx)(h.a.Title,{children:"Registration Page"})}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsx)(x.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(f.jsx)(x.a.Control,{type:"text",value:i.username,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(f.jsx)(x.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(f.jsx)(x.a.Control,{type:"password",name:"register-password",id:"register-password",value:i.password,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{password:e.target.value}))}}),Object(f.jsx)(x.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(f.jsx)(x.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:i.passwordRepeat,onChange:function(e){return d(Object(b.a)(Object(b.a)({},i),{},{passwordRepeat:e.target.value}))}})]}),Object(f.jsxs)(h.a.Footer,{children:[Object(f.jsx)(p.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(f.jsx)(p.a,{variant:"primary",type:"submit",disabled:0===i.username.length||0===i.password.length||i.password!==i.passwordRepeat,children:"Register"})]})]})})}function g(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(l.a).dispatch,n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),b=u[0],m=u[1],g=Object(c.useState)(!1),v=Object(o.a)(g,2),C=v[0],w=v[1];var y=Object(O.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),E=Object(o.a)(y,2),T=E[0],k=E[1];return Object(c.useEffect)((function(){T&&!1===T.isLoading&&(T.data||T.error)&&(T.error?(w(!0),alert("failed")):(w(!1),console.log(T.data),r({type:"LOGIN",username:i,access_token:T.data.access_token})))}),[T]),Object(f.jsx)(h.a,{show:t,onHide:a,children:Object(f.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),k(i,b),a()},children:[Object(f.jsx)(h.a.Header,{closeButton:!0,children:Object(f.jsx)(h.a.Title,{children:"Login Page"})}),Object(f.jsxs)(h.a.Body,{children:[Object(f.jsx)(x.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(f.jsx)(x.a.Control,{type:"text",value:i,onChange:function(e){d(e.target.value)},name:"login-username",id:"login-username"}),Object(f.jsx)(x.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(f.jsx)(x.a.Control,{type:"password",value:b,onChange:function(e){m(e.target.value)},name:"login-password",id:"login-password"}),C&&Object(f.jsx)(x.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(f.jsxs)(h.a.Footer,{children:[Object(f.jsx)(p.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(f.jsx)(p.a,{variant:"primary",disabled:0===i.length,type:"submit",children:"Login"})]})]})})}function v(){var e=r.a.lazy((function(){return a.e(3).then(a.bind(null,110))})),t=Object(c.useContext)(l.a).state,n=Object(c.useState)(!1),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],O=u[1];return t.user.username&&!t.loginFailed?Object(f.jsx)(e,{}):Object(f.jsxs)("div",{className:"justify-content-end",children:[Object(f.jsx)(p.a,{variant:"link",href:"/users",children:"Users"}),Object(f.jsx)(p.a,{variant:"link",onClick:function(e){return d(!0)},children:"Login"}),Object(f.jsx)(g,{show:i,handleClose:function(){return d(!1)}}),Object(f.jsx)(p.a,{variant:"link",onClick:function(e){return O(!0)},children:"Register"}),Object(f.jsx)(m,{show:b,handleClose:function(){return O(!1)}})]})}var C=a(12);function w(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],d=s[1],j=Object(C.d)(),u=Object(c.useContext)(l.a),b=u.state,h=u.dispatch,x=b.user,p=Object(O.b)((function(e){var t=e.title,a=e.description,c=e.author;return{url:"/todo",method:"post",headers:{Authorization:"".concat(b.user.access_token)},data:{title:t,description:a,author:c}}})),m=Object(o.a)(p,2),g=m[0],v=m[1];return Object(c.useEffect)((function(){g&&g.data&&(h({type:"CREATE_TODO",title:g.data.title,description:g.data.description,author:x.username,id:g.data.id}),console.log(g.data),j.navigate("/todo/".concat(g.data.id)))}),[g]),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({title:a,description:i,author:x.username})},children:[Object(f.jsx)("h3",{children:"Create Todo: "}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Author:"})," ",x.username]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("label",{htmlFor:"create-todo-title",children:[Object(f.jsx)("b",{children:"Title:"})," "]}),Object(f.jsx)("input",{type:"text",name:"create-todo-title",id:"create-todo-title",value:a,onChange:function(e){r(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("label",{htmlFor:"create-todo-description",children:[Object(f.jsx)("b",{children:"Description:"})," "]}),Object(f.jsx)("textarea",{name:"create-todo-description",id:"create-todo-description",value:i,onChange:function(e){d(e.target.value)}})]}),Object(f.jsx)("input",{type:"submit",value:"Create"})]})}var y=a(107),E=function(e){var t=e.text;return Object(f.jsx)(C.a,{href:"/",children:Object(f.jsx)(y.a.Brand,{children:t})})},T=a(104),k=a(105);function L(){var e=Object(c.useContext)(l.a).state.user;return Object(f.jsx)(y.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(T.a,{children:[Object(f.jsx)(y.a.Brand,{href:"/",children:Object(f.jsx)(E,{text:"My Todos"})}),Object(f.jsx)(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsxs)(y.a.Collapse,{id:"basic-navbar-nav",children:[Object(f.jsx)(k.a,{className:"me-auto",children:e.username&&Object(f.jsx)(k.a.Link,{children:Object(f.jsx)(C.a,{href:"/todo/create",children:"Create New Todo"})})}),Object(f.jsx)(r.a.Suspense,{fallback:"Loading...",children:Object(f.jsx)(v,{})})]})]})})}var S=a(109);function D(e){var t=e.title,a=e.description,r=(e.author,e.todoId),n=e.completed,s=e.dateCompleted,i=e.short,d=void 0!==i&&i,j=Object(c.useContext)(l.a).dispatch,u=Object(O.b)((function(e,t){return{url:"/todo/".concat(e),method:"patch",data:{completed:t,dateCompleted:Date.now()}}})),b=Object(o.a)(u,2),h=b[0],m=b[1],g=Object(O.b)((function(e){return{url:"/todo/".concat(e),method:"delete"}})),v=Object(o.a)(g,2),w=v[0],y=v[1];Object(c.useEffect)((function(){h&&h.data&&!1===h.isLoading&&j({type:"TOGGLE_TODO",todoId:r,completed:h.data.completed,dateCompleted:h.data.dateCompleted})}),[h]),Object(c.useEffect)((function(){w&&w.data&&!1===w.isLoading&&j({type:"DELETE_TODO",todoId:r})}),[w]);var E=a;return d&&a.length>30&&(E=a.substring(0,30)+"..."),Object(f.jsxs)(S.a,{children:[Object(f.jsxs)(S.a.Body,{children:[Object(f.jsx)(S.a.Title,{children:Object(f.jsx)(C.a,{href:"/todo/".concat(r),children:t})}),Object(f.jsxs)(S.a.Subtitle,{children:["Date Created: ",(new Date).toDateString(),!n&&Object(f.jsxs)("div",{children:["Date Completed: ",new Date(s).toDateString()]})]}),Object(f.jsx)(S.a.Text,{children:E}),d&&Object(f.jsx)(C.a,{href:"/todo/".concat(r),children:"View full todo"})]}),Object(f.jsx)(p.a,{onClick:function(e){y(r)},children:"Delete Todo"}),Object(f.jsxs)(x.a.Label,{children:["Completed:",Object(f.jsx)(x.a.Check,{type:"checkbox",onClick:function(e){m(r,e.target.checked)}})]})]})}var R=r.a.memo(D);function _(){var e=Object(c.useContext)(l.a).state.todos;return Object(f.jsxs)("div",{children:["Todo List",e.map((function(e,t){return Object(c.createElement)(R,Object(b.a)(Object(b.a)({},e),{},{short:!0,title:e.title,author:e.author,key:"todo-"+t,todoId:e.id}))}))]})}function F(){var e=Object(c.useContext)(l.a),t=e.state,a=e.dispatch,r=Object(O.b)((function(){return{url:"/todo",method:"get",headers:{Authorization:"".concat(t.user.access_token)}}})),n=Object(o.a)(r,2),s=n[0],i=n[1];Object(c.useEffect)((function(){i()}),[t.user.access_token]),Object(c.useEffect)((function(){s&&!1===s.isLoading&&s.data&&a({type:"FETCH_TODOS",todos:s.data.todos})}),[s]);s.data;var d=s.isLoading;return Object(f.jsxs)("div",{children:[d&&"Todos loading..."," ",Object(f.jsx)(_,{})]})}function I(){return Object(f.jsx)(S.a,{children:Object(f.jsx)(S.a.Body,{children:Object(f.jsx)(S.a.Title,{children:"User xyz"})})})}var G=r.a.memo(I);function U(e){var t=e.users;Object(c.useContext)(l.a).state;return Object(f.jsxs)("div",{children:["Users",t.map((function(e,t){return Object(f.jsx)(G,Object(b.a)({},e))}))]})}function B(){var e=Object(c.useContext)(l.a),t=(e.state,e.dispatch),a=Object(O.b)((function(){return{url:"auth/register",method:"get"}})),r=Object(o.a)(a,2),n=r[0],s=r[1];Object(c.useEffect)(s,[]),Object(c.useEffect)((function(){n&&!1===n.isLoading&&n.data&&t({type:"FETCH_USERS",users:n.data.users})}),[n]);n.data;var i=n.isLoading;return Object(f.jsxs)("div",{children:[i&&"Users loading..."," ",Object(f.jsx)(U,{users:n}),Object(f.jsx)("div",{children:Object(f.jsx)(C.a,{href:"/",children:"Go back"})})]})}var H=a(10);function A(e){var t=e.id,a=Object(c.useContext)(l.a).state,r=Object(O.b)((function(){return{url:"/todo/".concat(t),headers:{Authorization:"".concat(a.user.access_token)},method:"get"}})),n=Object(o.a)(r,2),s=n[0],i=n[1];return Object(c.useEffect)(i,[t]),Object(f.jsxs)("div",{children:[s&&s.data?Object(f.jsx)(R,Object(b.a)({},s.data)):"Loading...",Object(f.jsx)("div",{children:Object(f.jsx)(C.a,{href:"/",children:"Go back"})})]})}var z=function(){var e=Object(c.useReducer)(u,{user:{},todos:[]}),t=Object(o.a)(e,2),a=t[0],r=t[1],n=(a.user,Object(H.f)({"/":Object(H.g)({view:Object(f.jsx)(F,{})}),"/users":Object(H.g)({view:Object(f.jsx)(B,{})}),"/todo/create":Object(H.g)({view:Object(f.jsx)(w,{})}),"/todo/:id":Object(H.g)((function(e){return{view:Object(f.jsx)(A,{id:e.params.id})}}))}));return Object(f.jsx)("div",{children:Object(f.jsx)(l.a.Provider,{value:{state:a,dispatch:r},children:Object(f.jsx)(C.b,{routes:n,children:Object(f.jsxs)(T.a,{fluid:!0,children:[Object(f.jsx)(L,{}),Object(f.jsx)(C.c,{})]})})})})},N=a(37),P=a.n(N).a.create({baseURL:"/"});s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O.a,{value:P,children:Object(f.jsx)(z,{})})}),document.getElementById("root"))},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0),r=a.n(c).a.createContext({state:{},dispatch:function(){}})}},[[100,1,2]]]);
//# sourceMappingURL=main.11403f26.chunk.js.map