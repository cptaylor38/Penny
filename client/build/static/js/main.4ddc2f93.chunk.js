(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{116:function(e,t,a){},141:function(e,t,a){e.exports=a(272)},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/media/penny.128c48c6.svg"},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=a(326),i=a(27),u=Object(i.a)(),m=a(8),s=Object(n.createContext)(null),d=function(e){var t=e.children,a=Object(n.useState)(),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){fetch("/user").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(s.Provider,{value:c},t)};d.context=s;var E=d,y=(a(146),a(15)),p=(a(147),function(){return l.a.createElement("div",{className:"loginCont"},l.a.createElement("a",{href:"/auth/google",className:"loginBtn",id:"googleBtn"},l.a.createElement(y.f,null)))}),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"hContent"},l.a.createElement("img",{src:a(148),alt:"penny",id:"pennyImg"}),l.a.createElement("div",{className:"hTitle"},l.a.createElement("p",{id:"hPar1"},"My name's ",l.a.createElement("span",{id:"hHeader"},"Penny"),"."),l.a.createElement("p",{id:"hPar2"},"I'm here to help you manage your finances."))),l.a.createElement("p",{id:"signInTxt"},"Sign In"),l.a.createElement(p,{id:"hSign"})))},h=a(317),g=a(310),b=(a(149),a(314)),v=a(273),S=(a(150),function(e){var t=e.message,a=e.total;return l.a.createElement("h3",{className:"contentHeader"},t," ",a?l.a.createElement(l.a.Fragment,null,a.toLocaleString("en-US",{style:"currency",currency:"USD"})):null)}),x=(a(151),a(79)),O=a(41),j=a.n(O),C=function(e){return j.a.post("/api/salary/update",e)},N=function(e){var t=e.id;return j.a.get("/api/expense/".concat(t,"/").concat(e.category))},k=function(e){var t=e.id;return j.a.get("/api/home/".concat(t))},I=function(e){return j.a.post("/api/expense/create",e)},w=function(e){return j.a.post("/api/expense/update",e)},P=function(e){return j.a.put("/api/expense/delete/".concat(e.id))},F=a(18),L=a.n(F),T=function(e){var t=e.profile,a=e.nrTotal,n=e.rTotal,r=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},c=function(e){var a=100*(e/(t.salary/12)).toFixed(2);return l.a.createElement("p",{className:"ovPercP"},l.a.createElement("span",{className:"percSpan"},a,"%")," of your income.")};return l.a.createElement(g.a,{container:!0,className:"ovSubC"},l.a.createElement(g.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(v.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Estimated monthly income: "),r(t.salary/12)))),l.a.createElement(g.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(v.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total monthly charges: "),r(n)),c(n))),l.a.createElement(g.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(v.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total msc. Charges from ",L()(Date.now()).format("MMMM"),":"," "),r(a)),c(a))),l.a.createElement(g.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(v.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total charges this month: "),r(n+a)),c(n+a))),l.a.createElement(g.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(v.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",null,"Budget remaining: "),r(t.salary/12-(n+a))))))},A=function(e){var t=e.user,a=Object(n.useState)(null),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)(null),y=Object(m.a)(E,2),p=y[0],f=y[1],h=Object(n.useState)(null),b=Object(m.a)(h,2),S=b[0],O=b[1],j=Object(n.useState)(null),C=Object(m.a)(j,2),N=C[0],I=C[1];return Object(n.useEffect)((function(){if(null!==c){console.log("profile",c),console.log("profile.expense array",c.expense);var e=0,t=0,a=0,n=0,l=0,r=0,o=0,i=0,u=0,m=0,s=0;c.expense.filter((function(e){if(!1===e.recurring&&L()(e.date).format("MMMM")===L()(Date.now()).format("MMMM"))return s+=e.amount,e;I(s)})),c.expense.map((function(c){switch(c.category){case"finances":return!0===c.monthly?e+=c.amount:r+=c.amount;case"living":return!0===c.monthly?t+=c.amount:o+=c.amount;case"health":return!0===c.monthly?a+=c.amount:i+=c.amount;case"leisure":return!0===c.monthly?n+=c.amount:u+=c.amount;case"travel":return!0===c.monthly?l+=c.amount:m+=c.amount;default:return c}}));var E=e+t+a+n+l;O(E);var y=r+o+i+u+m;I(y),d({labels:["Finances","Living","Health","Leisure","Travel"],datasets:[{label:"Recurring Monthly Expenses - ".concat(E.toLocaleString("en-US",{style:"currency",currency:"USD"})),backgroundColor:["#5A4218","green","red","gold","aquamarine"],data:[e,t,a,n,l]}]}),f({labels:["Finances","Living","Health","Leisure","Travel"],datasets:[{label:"Msc. Charges - ".concat(y.toLocaleString("en-US",{style:"currency",currency:"USD"})),backgroundColor:["#5A4218","green","red","gold","aquamarine"],data:[r,o,i,u,m]}]})}}),[c]),Object(n.useEffect)((function(){k({id:t}).then((function(e){console.log("response",e),o(e.data)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{item:!0,xs:12,sm:12,md:6,lg:6,className:"pieGridItem"},null!==s&&S>0?l.a.createElement(v.a,{id:"recurringPiePaper"},l.a.createElement(x.a,{id:"recurringPie",data:s,options:{title:{display:!0,text:s.datasets[0].label,fontSize:12},legend:{display:!0,position:"bottom",maintainAspectRation:!1}}})):l.a.createElement(v.a,{className:"ovAlt"},l.a.createElement("p",null,"This section evaluates your recurring charges, i.e. Credit card charges, school loan payments, phone payments, etc. Click 'Add Expense' above to add an item."))),l.a.createElement(g.a,{item:!0,xs:12,sm:12,md:6,lg:6,className:"pieGridItem"},null!==p&&N>0?l.a.createElement(v.a,{id:"recurringPiePaper"},l.a.createElement(x.a,{id:"recurringPie",data:p,options:{title:{display:!0,text:p.datasets[0].label,fontSize:12},legend:{display:!0,position:"bottom",maintainAspectRation:!1}}})):l.a.createElement(v.a,{className:"ovAlt"},l.a.createElement("p",null,"This section evaluates your one-time charges, i.e. meals, gas, movie tickets, etc. Click 'Add Expense' above to add an item."))),l.a.createElement(g.a,{container:!0,id:"mobileOverview"},null!==S&&null!==N&&c.salary>0?l.a.createElement(T,{rTotal:S,nrTotal:N,profile:c}):l.a.createElement(v.a,{className:"ovAlt"},"This section provides an overview of your charges and how they affect your monthly income. Please ensure your salary is updated above.")))},G=(a(261),function(e){var t=e.monthly,a=e.display,r=Object(n.useState)("..."),c=Object(m.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){if(!0===t)switch(a){case"finances":i("Ex. Loans, credit card payments, etc.");break;case"living":i("Ex. Electric bill, phone bill, etc.");break;case"health":i("Ex. Gym membership, Health Insurance, Medical bills, etc.");break;case"leisure":i("Ex. Entertainment subscriptions, Cable bill, Internet bill, etc.");break;case"travel":i("Ex. Car Payments, Auto Insurance, etc.");break;default:i("...")}else switch(a){case"finances":i("Ex. Taxes, Donations, etc.");break;case"living":i("Ex. Home Improvements, Appliances, etc.");break;case"health":i("Ex. Food, Spa days, Prescriptions, etc.");break;case"leisure":i("Ex. Video games, movie tickets, concerts, etc.");break;case"travel":i("Ex. renewal, vehicle purchases, plane tickets, vacations, etc.");break;default:i("No expenses found for this category.")}}),[a,t]),l.a.createElement("div",{className:"helperPaper"},l.a.createElement("h2",null,"No expenses found for this category. Try adding one..."),l.a.createElement("h4",null,o))}),M=(a(262),a(274)),D=a(275),B=a(282),H=a(324),R=a(279),U=a(276),q=a(325),W=a(313),_=a(321),Y=a(315),z=a(121),J=a(14),V=a(318),$=a(122),K=a(118);var Q=function(e){var t=e.inputRef,a=e.onChange,n=Object($.a)(e,["inputRef","onChange"]);return l.a.createElement(K.a,Object.assign({},n,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,decimalScale:2,isNumericString:!0,prefix:"$"}))},X=(a(263),function(e){var t=e.user,a=e.propData,r=e.form,c=e.toggleForm,o=e.setRetrieve,i=(e.update,Object(n.useState)("")),u=Object(m.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)(""),y=Object(m.a)(E,2),p=y[0],f=y[1],h=Object(n.useState)(!1),v=Object(m.a)(h,2),S=v[0],x=v[1],O=Object(n.useState)(new Date),j=Object(m.a)(O,2),C=j[0],N=j[1],k=Object(n.useState)(""),P=Object(m.a)(k,2),F=P[0],L=P[1],T=Object(n.useState)(""),A=Object(m.a)(T,2),G=A[0],$=A[1];Object(n.useEffect)((function(){a&&(d(a.category.toLowerCase()),x(a.monthly),N(a.date),L(a.amount),$(a.title),!0===a.monthly?f("Yes"):f("No"))}),[a]);return l.a.createElement(g.a,{container:!0,id:"expenseGrid"},l.a.createElement(g.a,{item:!0,id:"categoryGrid"},l.a.createElement(M.a,null,l.a.createElement(D.a,{id:"demo-simple-select-helper-label"},"Category"),l.a.createElement(B.a,{id:"demo-simple-select-helper",value:s,onChange:function(e){document.querySelector("#categoryGrid").style.border="none",d(e.target.value)}},l.a.createElement(H.a,{value:"finances"},l.a.createElement("em",null,"Finances")),l.a.createElement(H.a,{value:"living"},l.a.createElement("em",null,"Living")),l.a.createElement(H.a,{value:"health"},l.a.createElement("em",null,"Health")),l.a.createElement(H.a,{value:"leisure"},l.a.createElement("em",null,"Leisure")),l.a.createElement(H.a,{value:"travel"},l.a.createElement("em",null,"Travel"))),l.a.createElement(R.a,null,"How you want to categorize this expense."))),l.a.createElement(g.a,{item:!0,id:"monthlyGrid"},l.a.createElement(M.a,{component:"fieldset"},l.a.createElement(U.a,{component:"legend"},"Is this a monthly charge?"),l.a.createElement(q.a,{"aria-label":"monthly",name:"monthly",value:p,onChange:function(e){switch(document.querySelector("#monthlyGrid").style.border="none",f(e.target.value),e.target.value){case"Yes":x(!0);break;case"No":default:x(!1)}}},l.a.createElement(W.a,{value:"Yes",control:l.a.createElement(_.a,null),label:"Yes"}),l.a.createElement(W.a,{value:"No",control:l.a.createElement(_.a,null),label:"No"})))),l.a.createElement(g.a,{item:!0,id:"dateGrid"},l.a.createElement(J.a,{utils:z.a},l.a.createElement(V.a,{disableToolbar:!0,autoOk:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:C,onChange:function(e){N(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),l.a.createElement(g.a,{item:!0,id:"amountGrid"},l.a.createElement(M.a,{fullWidth:!0},l.a.createElement(Y.a,{label:"Amount",value:F,onChange:function(e){document.querySelector("#amountGrid").style.border="none",L(e.target.value)},id:"formatted-numberformat-input",InputProps:{inputComponent:Q}}))),l.a.createElement(g.a,{item:!0,id:"titleGrid"},l.a.createElement(Y.a,{id:"outlined-multiline-flexible",label:"Expense Title",multiline:!0,rowsMax:"4",value:G,onChange:function(e){document.querySelector("#titleGrid").style.border="none",$(e.target.value)},margin:"normal",variant:"outlined"})),l.a.createElement(g.a,{item:!0,id:"submitGrid"},l.a.createElement(b.a,{variant:"contained",color:"primary",type:"submit",onClick:function(e){if(e.preventDefault(),!0===r){var n={id:a._id,category:s,monthly:S,date:C,amount:F,title:G};w(n).then((function(e){o(!0)}))}else{if(""!==s&&""!==p&&""!==F&&""!==G)I({id:t,category:s,monthly:S,date:C,amount:F,title:G}).then((function(e){L(""),f(""),x(!1),$(""),d(""),o(!0)}));else""===s&&(document.querySelector("#categoryGrid").style.border="3px solid red"),""===p&&(document.querySelector("#monthlyGrid").style.border="3px solid red"),""===F&&(document.querySelector("#amountGrid").style.border="3px solid red"),""===G&&(document.querySelector("#titleGrid").style.border="3px solid red")}}},"Submit")),c?l.a.createElement(g.a,{item:!0,id:"cancelExpenseGrid"},l.a.createElement(b.a,{variant:"contained",color:"primary",type:"button",onClick:function(e){c(!1)}},"Cancel")):null)}),Z=(a(266),function(e){var t=e.data,a=e.setRetrieve,r=Object(n.useState)(!1),c=Object(m.a)(r,2),o=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{container:!0,className:"chargeItem"},!0===o&&t?l.a.createElement(X,{propData:t,form:o,toggleForm:i,setRetrieve:a}):l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{item:!0,xs:3,className:"gridICharge"},l.a.createElement("p",null,t.title)),l.a.createElement(g.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement("p",null,"$",t.amount)),l.a.createElement(g.a,{item:!0,xs:3,className:"gridICharge"},l.a.createElement("p",null,L()(t.date).format("MM/DD/YYYY"))),l.a.createElement(g.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement(b.a,{type:"button",onClick:function(){i(!0)}},l.a.createElement(y.c,null))),l.a.createElement(g.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement(b.a,{type:"button",className:"expenseDeleteBtn",onClick:function(){document.querySelectorAll(".expenseDeleteBtn").disabled=!0,P({id:t._id}).then((function(e){document.querySelectorAll(".expenseDeleteBtn").disabled=!1,a(!0)}))}},l.a.createElement(y.b,null))))))}),ee=function(e){var t=e.display,a=e.user,r=Object(n.useState)(null),c=Object(m.a)(r,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(m.a)(u,2),d=s[0],E=s[1],p=Object(n.useState)(null),f=Object(m.a)(p,2),h=f[0],x=f[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),C=j[0],k=j[1],I=Object(n.useState)(!1),w=Object(m.a)(I,2),P=w[0],F=w[1],T=Object(n.useState)(null),M=Object(m.a)(T,2),D=M[0],B=M[1],H=function(){null!==t&&null!==a&&N({id:a,category:t}).then((function(e){i(e.data),k(!1)}))},R=function(e){return e.sort((function(e,t){return L()(t.date).unix()-L()(e.date).unix()}))},U=function(){F(!P)};return Object(n.useEffect)((function(){var e=document.querySelector("#expenseInputSection");!1===P&&(e.style.display="none"),!0===P&&(e.style.display="flex")}),[P]),Object(n.useEffect)((function(){if(null!==d&&d.length>0){var e=0;d.map((function(t){return e+=t.amount})),B(e)}}),[d]),Object(n.useEffect)(H,[t,a,C]),Object(n.useEffect)((function(){if(null!==o&&"home"!==t){var e=o.filter((function(e){return!1===e.monthly})),a=o.filter((function(e){return!0===e.monthly})),n=R(e),l=R(a);E(l),x(n)}}),[o]),l.a.createElement(l.a.Fragment,null,"home"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{container:!0,id:"addCont"},l.a.createElement(g.a,{item:!0,xs:12,id:"addItem"},l.a.createElement(g.a,{item:!0,xs:12,id:"addExpenseSection"},l.a.createElement(b.a,{id:"toggleExpenseBtn",onClick:U},l.a.createElement("p",{style:{marginRight:10}},"Add Expense")," ",l.a.createElement(y.d,{style:{fontSize:24}})," ")),l.a.createElement(g.a,{item:!0,xs:12,id:"expenseInputSection"},a?l.a.createElement(X,{user:a,update:function(){return H()},setRetrieve:k}):null))),l.a.createElement(g.a,{container:!0,id:"homeContentGrid"},l.a.createElement(A,{user:a}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{container:!0,id:"addCont"},l.a.createElement(g.a,{item:!0,xs:12,id:"addItem"},l.a.createElement(g.a,{item:!0,xs:12,id:"addExpenseSection"},l.a.createElement(b.a,{id:"toggleExpenseBtn",onClick:U},l.a.createElement("p",{style:{marginRight:10}},"Add Expense")," ",l.a.createElement(y.d,{style:{fontSize:24}})," ")),l.a.createElement(g.a,{item:!0,xs:12,id:"expenseInputSection"},a?l.a.createElement(X,{user:a,setRetrieve:k}):null))),l.a.createElement(g.a,{container:!0,id:"contentContainer"},l.a.createElement(g.a,{item:!0,xs:12,lg:5},l.a.createElement(v.a,null,d&&d.length>0?l.a.createElement(S,{message:"Monthly",total:D}):l.a.createElement(G,{monthly:!0,display:t}),l.a.createElement(g.a,{container:!0,className:"expListCont"},d?d.map((function(e,t){return l.a.createElement(Z,{data:e,key:t,setRetrieve:k})})):null))),l.a.createElement(g.a,{item:!0,xs:12,lg:5},l.a.createElement(v.a,null,h&&h.length>0?l.a.createElement(S,{message:"Non-Monthly"}):l.a.createElement(G,{monthly:!1,display:t}),l.a.createElement(g.a,{container:!0,className:"expListCont"},null!==h&&h.length>0?h.map((function(e,t){return l.a.createElement(Z,{data:e,key:t,setRetrieve:k})})):null))))))},te=a(316),ae=a(322),ne=(a(116),function(e){var t=e.handleChange,a=e.onSubmit,n=e.clearAlerts,r=e.salary;return l.a.createElement("form",{onSubmit:a,onFocus:n},l.a.createElement(g.a,{container:!0,id:"salaryContainer"},l.a.createElement(g.a,{item:!0,xl:!0,id:"salaryGrid"},l.a.createElement(M.a,{fullWidth:!0},l.a.createElement(Y.a,{label:"Salary",value:0!==r?r:"",onChange:t,className:"hourlyWageInput salaryField",id:"formatted-numberformat-input",InputProps:{inputComponent:Q}}))),l.a.createElement(g.a,{item:!0,xs:12,id:"hourlySubmit"},l.a.createElement(b.a,{variant:"outlined",type:"submit"},"Submit"))))}),le=(a(267),function(e){var t=e.handleWeekly,a=e.handleHourly,n=e.onSubmit,r=e.clearAlerts,c=e.hourly,o=e.weekly,i=e.salary;return l.a.createElement("form",{onSubmit:n,onFocus:r,id:"hourlySalForm"},l.a.createElement(g.a,{container:!0,id:"hourlyContainer"},l.a.createElement(g.a,{item:!0,id:"hourlyWageGrid"},l.a.createElement(M.a,{fullWidth:!0},l.a.createElement(Y.a,{label:"Hourly Average",className:"hourlyWageInput",name:"hourly",value:c,onChange:a,id:"formatted-numberformat-input",InputProps:{inputComponent:Q}}))),l.a.createElement(g.a,{item:!0,xs:!0,id:"weeklyGrid"},l.a.createElement(Y.a,{id:"outlined-adornment-amount",className:"weeklyAverageInput",name:"weekly",variant:"outlined",value:o,label:"Average Weekly Hours:",onChange:t})),l.a.createElement(g.a,{item:!0,xs:12,id:"hourlySubmit"},i&&c&&o?l.a.createElement("p",{id:"salaryTotalP"},i.toLocaleString("en-US",{style:"currency",currency:"USD"})):null,l.a.createElement(b.a,{variant:"outlined",type:"submit"},"Submit"))))}),re=(a(268),function(e){var t=e.selected,a=e.setSelected,r=e.setSalarySection,c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(null),d=Object(m.a)(s,2),E=d[0],y=d[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),h=f[0],g=f[1],v=Object(n.useState)(""),S=Object(m.a)(v,2),x=S[0],O=S[1],j=Object(n.useState)(""),N=Object(m.a)(j,2),k=N[0],I=N[1],w=function(e){if(e.preventDefault(),"hourly"===E&&!h||"hourly"===E&&!x)return I("Both your hourly rate and weekly hours must be entered.");C({id:t._id,salary:i}).then((function(e){a(e.data),console.log(e.data),r(!1)})).catch((function(e){return console.log(e)}))},P=function(){I(null)},F=function(e){y(e)};Object(n.useEffect)((function(){u(h*x*4*12)}),[h,x]);var L=function(e){g(e.target.value)},T=function(e){O(e.target.value)},A=function(e){u(e.target.value)};return l.a.createElement(l.a.Fragment,null,k?l.a.createElement("p",null,k):null,E?"salaried"===E?l.a.createElement(ne,{handleChange:A,onSubmit:w,clearAlerts:P,salary:i}):"hourly"===E?l.a.createElement(le,{handleHourly:L,handleWeekly:T,onSubmit:w,clearAlerts:P,hourly:h,weekly:x,salary:i}):void 0:l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{value:"hourly",control:l.a.createElement(ae.a,{color:"primary"}),label:"Hourly",labelPlacement:"start",onClick:function(){return F("hourly")}}),l.a.createElement(W.a,{value:"salaried",control:l.a.createElement(ae.a,{color:"primary"}),label:"Salaried",labelPlacement:"start",onClick:function(){return F("salaried")}})),l.a.createElement(b.a,{id:"salaryBackBtn",onClick:function(){return y(null),void r(!1)}},"Cancel"))}),ce=(a(269),function(e){var t=e.user,a=e.setChosenCat,n=e.categoryOnClick,r=e.showSalaryUpdate,c=e.selected,o=e.salarySection,i=e.setSalarySection,u=e.setSelected,m=[{style:{color:"green"},name:"Finances",icon:l.a.createElement(y.i,null)},{style:{color:"blue"},name:"Living",icon:l.a.createElement(y.j,null)},{style:{color:"red"},name:"Health",icon:l.a.createElement(y.g,null)},{style:{color:"gold"},name:"Leisure",icon:l.a.createElement(y.e,null)},{style:{color:"rgb(68, 46, 16)"},name:"Travel",icon:l.a.createElement(y.a,null)}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(te.a,{position:"static",id:"siteNav"},l.a.createElement(g.a,{container:!0,id:"navTop"},l.a.createElement(g.a,{item:!0},t?l.a.createElement("h3",null,"Welcome, ",t.username):l.a.createElement("h3",null,"Loading profile..."),l.a.createElement(g.a,{item:!0},l.a.createElement("p",null,L()(Date.now()).format("dddd, LL")))),l.a.createElement(g.a,{item:!0,id:"navSalary"},c&&!o?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Current yearly income:"," ",l.a.createElement("span",{style:{color:"rgb(159, 400, 159)"}},c.salary.toLocaleString("en-US",{style:"currency",currency:"USD"}))),l.a.createElement(b.a,{id:"salaryUpdateBtn",variant:"outlined",onClick:function(){return r()}},l.a.createElement(y.c,null))):l.a.createElement(re,{selected:c,setSelected:u,setSalarySection:i})),l.a.createElement(g.a,{item:!0},l.a.createElement(b.a,{className:"navBtn",id:"homeBtn",variant:"contained",onClick:function(){return a("Home")}},l.a.createElement(y.h,null))),l.a.createElement(g.a,{item:!0},l.a.createElement(b.a,{className:"navBtn",variant:"contained",href:"/auth/logout"},"Sign Out"))),l.a.createElement(g.a,{container:!0,id:"navBottom"},l.a.createElement("div",{id:"categoryNav"},m.map((function(e,t){return l.a.createElement(b.a,{href:"#text-buttons",style:e.style,onClick:function(){return n(e.name)},key:t,className:"categoryBtn"},l.a.createElement("p",{className:"catIcon"},e.icon),l.a.createElement("p",{className:"expenseCatText"},e.name))}))))))}),oe=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)("Home"),d=Object(m.a)(s,2),y=d[0],p=d[1],f=Object(n.useContext)(E.context);Object(n.useEffect)((function(){return r(f)}),[f]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ce,{selected:a,setSelected:r,user:f,setChosenCat:p,showSalaryUpdate:function(){u(!0)},salarySection:i,setSalarySection:u,categoryOnClick:function(e){p(e)}}),l.a.createElement(h.a,{maxWidth:"xl",id:"profilePage"},l.a.createElement(g.a,{container:!0,id:"chosenCatContainer"},l.a.createElement(g.a,{item:!0,xs:12,className:"chosenCatRegion"},a?function(){switch(y){case"Home":return l.a.createElement(ee,{display:"home",user:a._id});case"Travel":return l.a.createElement(ee,{display:"travel",user:a._id});case"Health":return l.a.createElement(ee,{display:"health",user:a._id});case"Leisure":return l.a.createElement(ee,{display:"leisure",user:a._id});case"Living":return l.a.createElement(ee,{display:"living",user:a._id});case"Finances":return l.a.createElement(ee,{display:"finances",user:a._id});default:return l.a.createElement(ee,{displpay:"home",user:a._id})}}():l.a.createElement("p",null,"Loading")))))};a(270);var ie=function(){return l.a.createElement(o.b,{history:u},l.a.createElement(E,null,l.a.createElement(o.a,{path:"/profile/",component:oe})),l.a.createElement(o.a,{exact:!0,path:"/",component:f}))};c.a.render(l.a.createElement(ie,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.4ddc2f93.chunk.js.map