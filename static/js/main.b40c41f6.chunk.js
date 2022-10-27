(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),s=n(10),i=(n(15),n(4)),l=n(2),r=n(0),j=n(8),d=(n(16),n(1)),o=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),j=i[0],o=i[1],u=Object(r.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1];return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:j,date:new Date(x)};e.onSaveExpenseData(n),a(""),o(""),O("")},children:[Object(d.jsxs)("div",{className:"new-expense__controls",children:[Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{children:"Title"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{children:"Amount"}),Object(d.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{children:"Date"}),Object(d.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(d.jsx)("div",{className:"new-expense__actions",children:Object(d.jsx)("button",{type:"submit",children:"Add Expense"})})]})},u=(n(18),function(e){return Object(d.jsx)("div",{className:"new-expense",children:Object(d.jsx)(o,{onSaveExpenseData:function(t){var n=Object(j.a)(Object(j.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})});n(19);var b=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(d.jsxs)("div",{className:"expense-date",children:[Object(d.jsx)("div",{className:"expense-date__month",children:t}),Object(d.jsx)("div",{className:"expense-date__year",children:c}),Object(d.jsx)("div",{className:"expense-date__day",children:n})]})},x=(n(20),function(e){var t="card "+e.className;return Object(d.jsx)("div",{className:t,children:e.children})}),O=(n(21),function(e){return Object(d.jsxs)(x,{className:"expense-item",children:[Object(d.jsx)(b,{date:e.date}),Object(d.jsxs)("div",{className:"expense-item__description",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})}),m=(n(22),function(e){return Object(d.jsx)("div",{className:"expenses-filter",children:Object(d.jsxs)("div",{className:"expenses-filter__control",children:[Object(d.jsx)("label",{className:"expenses-filter label",children:"Filter by year"}),Object(d.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(d.jsx)("option",{value:"2022",children:"2022"}),Object(d.jsx)("option",{value:"2021",children:"2021"}),Object(d.jsx)("option",{value:"2020",children:"2020"}),Object(d.jsx)("option",{value:"2019",children:"2019"})]})]})})}),p=(n(23),function(e){var t=Object(r.useState)("2020"),n=Object(l.a)(t,2),c=n[0],a=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString().includes(c)}));return Object(d.jsx)("div",{children:Object(d.jsxs)(x,{className:"expenses",children:[Object(d.jsx)(m,{selected:c,onChangeFilter:function(e){a(e)}}),s.map((function(e){return Object(d.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})})}),h=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],v=function(){var e=Object(r.useState)(h),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(d.jsx)(p,{items:n})]})};a.a.render(Object(d.jsx)(s.a,{basename:"/ExpenseManager",children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.b40c41f6.chunk.js.map