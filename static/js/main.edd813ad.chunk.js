(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(6),s=a(7),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=a(9),d=a.n(u),m=(a(15),a(16),a(0)),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{"data-id":a,className:d()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e,"data-id":e.id},e.id)}))})};function f(e){return l.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:f(e.userId)})})),O=function(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))},x=function(){var e=Object(o.useState)(p),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),u=s[0],d=s[1],j=Object(o.useState)(0),b=Object(r.a)(j,2),x=b[0],v=b[1],S=Object(o.useState)(!1),y=Object(r.a)(S,2),I=y[0],N=y[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1],D=function(e){e.nativeEvent.preventDefault();var t=u.trim();if(N(!t),k(!x),t&&x){var i={id:O(a)+1,userId:x,title:u,completed:!1,user:f(x)};n((function(e){return[].concat(Object(c.a)(e),[i])})),d(""),v(0)}};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){return D(e)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"titleInput",children:["Title:",Object(m.jsx)("input",{type:"text",id:"titleInput","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){return function(e){N(!1);var t=e.target.value;d(t.replace(/[^A-Za-z\s\d\u0400-\u04FF]/g,""))}(e)}})]}),I&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{htmlFor:"userSelect",children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",id:"userSelect",placeholder:"Choose a user",value:x,onChange:function(e){return function(e){v(Number(e.target.value)),k(!1)}(e)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){var t=e.name,a=e.id;return Object(m.jsx)("option",{value:a,children:t},a)}))]})]}),_&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.edd813ad.chunk.js.map