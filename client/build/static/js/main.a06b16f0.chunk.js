(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{103:function(e,t,a){},145:function(e,t,a){e.exports=a(279)},150:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){e.exports=a.p+"static/media/penny.128c48c6.svg"},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){e.exports=a.p+"static/media/globe.0e99500f.mp4"},275:function(e,t,a){e.exports=a.p+"static/media/ogglobe.145a8ac2.ogv"},276:function(e,t,a){e.exports=a.p+"static/media/webmglobe.cf9b0c18.webm"},277:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=a(331),i=a(29),u=Object(i.a)(),m=a(9),s=Object(n.createContext)(null),d=function(e){var t=e.children,a=Object(n.useState)(),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){fetch("/user").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(s.Provider,{value:c},t)};d.context=s;var E=d,p=(a(150),a(16)),y=(a(151),function(){return l.a.createElement("div",{className:"loginCont"},l.a.createElement("a",{href:"/auth/facebook",className:"loginBtn",id:"facebookBtn"},l.a.createElement(p.d,null)),l.a.createElement("a",{href:"/auth/google",className:"loginBtn",id:"googleBtn"},l.a.createElement(p.g,null)))}),f=a(36),g=a(54),b=function(){var e=new g.a;return Object(n.useEffect)((function(){e.to("#pennyImg",3,{opacity:1,ease:f.a.easeOut},.3),e.to("#hHeader",5,{opacity:1,ease:f.a.easeOut},.5),e.to("#hPar1",3,{opacity:1,ease:f.a.easeOut},1.5),e.to("#hPar2",3,{opacity:1,ease:f.a.easeOut},2.5),e.to(".hButton",5,{opacity:1,ease:f.a.easeOut},3.5),e.to(".loginBtn",3,{opacity:1,ease:f.a.easeOut},4),e.to("#signInTxt",3,{opacity:1,ease:f.a.easeOut},4)}),[e]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"hContent"},l.a.createElement("img",{src:a(153),alt:"penny",id:"pennyImg"}),l.a.createElement("div",{className:"hTitle"},l.a.createElement("p",{id:"hPar1"},"My name's ",l.a.createElement("span",{id:"hHeader"},"Penny"),"."),l.a.createElement("p",{id:"hPar2"},"I'm here to help you manage your finances."))),l.a.createElement("p",{id:"signInTxt"},"Sign In"),l.a.createElement(y,{id:"hSign"})))},h=a(322),v=a(315),S=a(320),x=a(319),O=a(321),j=a(326),C=a(44),N=a.n(C),k=function(e){return N.a.post("/api/salary/update",e)},I=function(e){var t=e.id;return N.a.get("/api/expense/".concat(t,"/").concat(e.category))},P=function(e){var t=e.id;return N.a.get("/api/home/".concat(t))},w=function(e){return N.a.post("/api/expense/create",e)},L=function(e){return N.a.post("/api/expense/update",e)},F=function(e){return N.a.put("/api/expense/delete/".concat(e.id))},G=(a(103),a(280)),H=a(318),M=a(125),D=a(120);var B=function(e){var t=e.inputRef,a=e.onChange,n=Object(M.a)(e,["inputRef","onChange"]);return l.a.createElement(D.a,Object.assign({},n,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,decimalScale:2,isNumericString:!0,prefix:"$"}))},T=function(e){var t=e.handleChange,a=e.onSubmit,n=e.clearAlerts,r=e.salary;return l.a.createElement("form",{onSubmit:a,onFocus:n},l.a.createElement(v.a,{container:!0,id:"salaryContainer"},l.a.createElement(v.a,{item:!0,xl:!0,id:"salaryGrid"},l.a.createElement(G.a,{fullWidth:!0},l.a.createElement(H.a,{label:"Salary",value:0!==r?r:"",onChange:t,className:"hourlyWageInput salaryField",id:"formatted-numberformat-input",InputProps:{inputComponent:B}}))),l.a.createElement(v.a,{item:!0,xs:12,id:"hourlySubmit"},l.a.createElement(S.a,{variant:"outlined",type:"submit"},"Submit"))))},A=(a(173),function(e){var t=e.handleWeekly,a=e.handleHourly,n=e.onSubmit,r=e.clearAlerts,c=e.hourly,o=e.weekly,i=e.salary;return l.a.createElement("form",{onSubmit:n,onFocus:r,id:"hourlySalForm"},l.a.createElement(v.a,{container:!0,id:"hourlyContainer"},l.a.createElement(v.a,{item:!0,id:"hourlyWageGrid"},l.a.createElement(G.a,{fullWidth:!0},l.a.createElement(H.a,{label:"Hourly Average",className:"hourlyWageInput",name:"hourly",value:c,onChange:a,id:"formatted-numberformat-input",InputProps:{inputComponent:B}}))),l.a.createElement(v.a,{item:!0,xs:!0,id:"weeklyGrid"},l.a.createElement(H.a,{id:"outlined-adornment-amount",className:"weeklyAverageInput",name:"weekly",variant:"outlined",value:o,label:"Average Weekly Hours:",onChange:t})),l.a.createElement(v.a,{item:!0},i&&c&&o?l.a.createElement("p",{id:"salaryTotalP"},i.toLocaleString("en-US",{style:"currency",currency:"USD"})):null),l.a.createElement(v.a,{item:!0,xs:12,id:"hourlySubmit"},l.a.createElement(S.a,{variant:"outlined",type:"submit"},"Submit"))))}),R=(a(174),function(e){var t=e.selected,a=e.setSelected,r=e.setSalarySection,c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(null),d=Object(m.a)(s,2),E=d[0],p=d[1],y=Object(n.useState)(""),f=Object(m.a)(y,2),g=f[0],b=f[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),x=v[0],C=v[1],N=Object(n.useState)(""),I=Object(m.a)(N,2),P=I[0],w=I[1],L=function(e){if(e.preventDefault(),"hourly"===E&&!g||"hourly"===E&&!x)return w("Both your hourly rate and weekly hours must be entered.");k({id:t._id,salary:i}).then((function(e){a(e.data),console.log(e.data),r(!1)})).catch((function(e){return console.log(e)}))},F=function(){w(null)},G=function(e){p(e)};Object(n.useEffect)((function(){u(g*x*4*12)}),[g,x]);var H=function(e){b(e.target.value)},M=function(e){C(e.target.value)},D=function(e){u(e.target.value)};return l.a.createElement(l.a.Fragment,null,P?l.a.createElement("p",null,P):null,E?"salaried"===E?l.a.createElement(T,{handleChange:D,onSubmit:L,clearAlerts:F,salary:i}):"hourly"===E?l.a.createElement(A,{handleHourly:H,handleWeekly:M,onSubmit:L,clearAlerts:F,hourly:g,weekly:x,salary:i}):void 0:l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{value:"hourly",control:l.a.createElement(j.a,{color:"primary"}),label:"Hourly",labelPlacement:"start",onClick:function(){return G("hourly")}}),l.a.createElement(O.a,{value:"salaried",control:l.a.createElement(j.a,{color:"primary"}),label:"Salaried",labelPlacement:"start",onClick:function(){return G("salaried")}})),l.a.createElement(S.a,{id:"salaryBackBtn",onClick:function(){return p(null),void r(!1)}},"Cancel"))}),q=(a(175),a(176),function(e){var t=e.message,a=e.total;return l.a.createElement("h3",{className:"contentHeader"},t," ",a?l.a.createElement(l.a.Fragment,null,a.toLocaleString("en-US",{style:"currency",currency:"USD"})):null)}),U=(a(177),a(85)),W=a(20),_=a.n(W),Y=function(e){var t=e.profile,a=e.nrTotal,n=e.rTotal,r=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},c=function(e){var a=100*(e/(t.salary/12)).toFixed(2);return l.a.createElement("p",{className:"ovPercP"},l.a.createElement("span",{className:"percSpan"},a,"%")," of your income.")};return l.a.createElement(v.a,{container:!0,className:"ovSubC"},l.a.createElement(v.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(x.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Estimated monthly income: "),r(t.salary/12)))),l.a.createElement(v.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(x.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total monthly charges: "),r(n)),c(n))),l.a.createElement(v.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(x.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total msc. Charges from ",_()(Date.now()).format("MMMM"),":"," "),r(a)),c(a))),l.a.createElement(v.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(x.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",{className:"ovI"},"Total charges this month: "),r(n+a)),c(n+a))),l.a.createElement(v.a,{item:!0,xs:12,className:"ovSubI"},l.a.createElement(x.a,{className:"ovP"},l.a.createElement("header",null,l.a.createElement("span",null,"Budget remaining: "),r(n+a)))))},z=function(e){var t=e.user,a=Object(n.useState)(null),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)(null),p=Object(m.a)(E,2),y=p[0],f=p[1],g=Object(n.useState)(null),b=Object(m.a)(g,2),h=b[0],S=b[1],O=Object(n.useState)(null),j=Object(m.a)(O,2),C=j[0],N=j[1];return Object(n.useEffect)((function(){if(null!==c){console.log("profile",c),console.log("profile.expense array",c.expense);var e=0,t=0,a=0,n=0,l=0,r=0,o=0,i=0,u=0,m=0,s=0;c.expense.filter((function(e){if(!1===e.recurring&&_()(e.date).format("MMMM")===_()(Date.now()).format("MMMM"))return s+=e.amount,e;N(s)})),c.expense.map((function(c){switch(c.category){case"finances":return!0===c.monthly?e+=c.amount:r+=c.amount;case"living":return!0===c.monthly?t+=c.amount:o+=c.amount;case"health":return!0===c.monthly?a+=c.amount:i+=c.amount;case"leisure":return!0===c.monthly?n+=c.amount:u+=c.amount;case"travel":return!0===c.monthly?l+=c.amount:m+=c.amount;default:return c}}));var E=e+t+a+n+l;S(E);var p=r+o+i+u+m;d({labels:["Finances","Living","Health","Leisure","Travel"],datasets:[{label:"Recurring Monthly Expenses - ".concat(E.toLocaleString("en-US",{style:"currency",currency:"USD"})),backgroundColor:["#5A4218","green","red","gold","aquamarine"],data:[e,t,a,n,l]}]}),f({labels:["Finances","Living","Health","Leisure","Travel"],datasets:[{label:"Msc. Charges - ".concat(p.toLocaleString("en-US",{style:"currency",currency:"USD"})),backgroundColor:["#5A4218","green","red","gold","aquamarine"],data:[r,o,i,u,m]}]})}}),[c]),Object(n.useEffect)((function(){P({id:t}).then((function(e){console.log("response",e),o(e.data)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:6,className:"pieGridItem"},null!==s?l.a.createElement(x.a,{id:"recurringPiePaper"},l.a.createElement(U.a,{id:"recurringPie",data:s,options:{title:{display:!0,text:s.datasets[0].label,fontSize:12},legend:{display:!0,position:"bottom",maintainAspectRation:!1}}})):l.a.createElement("p",null,"Loading")),l.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:6,className:"pieGridItem"},null!==y?l.a.createElement(x.a,{id:"recurringPiePaper"},l.a.createElement(U.a,{id:"recurringPie",data:y,options:{title:{display:!0,text:y.datasets[0].label,fontSize:12},legend:{display:!0,position:"bottom",maintainAspectRation:!1}}})):l.a.createElement("p",null,"Loading")),l.a.createElement(v.a,{container:!0,id:"mobileOverview"},null!==h&&null!==C?l.a.createElement(Y,{rTotal:h,nrTotal:C,profile:c}):null))},V=(a(268),function(e){var t=e.monthly,a=e.display,r=Object(n.useState)("..."),c=Object(m.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){if(!0===t)switch(a){case"finances":i("Ex. Loans, credit card payments, etc.");break;case"living":i("Ex. Electric bill, phone bill, etc.");break;case"health":i("Ex. Gym membership, Health Insurance, Medical bills, etc.");break;case"leisure":i("Ex. Entertainment subscriptions, Cable bill, Internet bill, etc.");break;case"travel":i("Ex. Car Payments, Auto Insurance, etc.");break;default:i("...")}else switch(a){case"finances":i("Ex. Taxes, Donations, etc.");break;case"living":i("Ex. Home Improvements, Appliances, etc.");break;case"health":i("Ex. Food, Spa days, Prescriptions, etc.");break;case"leisure":i("Ex. Video games, movie tickets, concerts, etc.");break;case"travel":i("Eag renewal, vehicle purchases, plane tickets, vacations, etc.");break;default:i("No expenses found for this category.")}}),[a,t]),l.a.createElement(x.a,{className:"helperPaper"},l.a.createElement("h2",null,"No expenses found for this category. Try adding one..."),l.a.createElement("h4",null,o))}),J=(a(269),a(283)),$=a(288),K=a(329),Q=a(285),X=a(284),Z=a(328),ee=a(327),te=a(124),ae=a(15),ne=a(323),le=(a(270),function(e){var t=e.user,a=e.propData,r=e.form,c=e.toggleForm,o=e.setRetrieve,i=Object(n.useState)(""),u=Object(m.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)(""),p=Object(m.a)(E,2),y=p[0],f=p[1],g=Object(n.useState)(!1),b=Object(m.a)(g,2),h=b[0],x=b[1],j=Object(n.useState)(new Date),C=Object(m.a)(j,2),N=C[0],k=C[1],I=Object(n.useState)(""),P=Object(m.a)(I,2),F=P[0],M=P[1],D=Object(n.useState)(""),T=Object(m.a)(D,2),A=T[0],R=T[1];Object(n.useEffect)((function(){a&&(d(a.category.toLowerCase()),x(a.monthly),k(a.date),M(a.amount),R(a.title),!0===a.monthly?f("Yes"):f("No"))}),[a]);return l.a.createElement(v.a,{container:!0,id:"expenseGrid"},l.a.createElement(v.a,{item:!0,id:"categoryGrid"},l.a.createElement(G.a,null,l.a.createElement(J.a,{id:"demo-simple-select-helper-label"},"Category"),l.a.createElement($.a,{id:"demo-simple-select-helper",value:s,onChange:function(e){document.querySelector("#categoryGrid").style.border="none",d(e.target.value)}},l.a.createElement(K.a,{value:"finances"},l.a.createElement("em",null,"Finances")),l.a.createElement(K.a,{value:"living"},l.a.createElement("em",null,"Living")),l.a.createElement(K.a,{value:"health"},l.a.createElement("em",null,"Health")),l.a.createElement(K.a,{value:"leisure"},l.a.createElement("em",null,"Leisure")),l.a.createElement(K.a,{value:"travel"},l.a.createElement("em",null,"Travel"))),l.a.createElement(Q.a,null,"How you want to categorize this expense."))),l.a.createElement(v.a,{item:!0,id:"monthlyGrid"},l.a.createElement(G.a,{component:"fieldset"},l.a.createElement(X.a,{component:"legend"},"Is this a monthly charge?"),l.a.createElement(Z.a,{"aria-label":"monthly",name:"monthly",value:y,onChange:function(e){switch(document.querySelector("#monthlyGrid").style.border="none",f(e.target.value),e.target.value){case"Yes":x(!0);break;case"No":default:x(!1)}}},l.a.createElement(O.a,{value:"Yes",control:l.a.createElement(ee.a,null),label:"Yes"}),l.a.createElement(O.a,{value:"No",control:l.a.createElement(ee.a,null),label:"No"})))),l.a.createElement(v.a,{item:!0,id:"dateGrid"},l.a.createElement(ae.a,{utils:te.a},l.a.createElement(ne.a,{disableToolbar:!0,autoOk:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Date picker inline",value:N,onChange:function(e){k(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),l.a.createElement(v.a,{item:!0,id:"amountGrid"},l.a.createElement(G.a,{fullWidth:!0},l.a.createElement(H.a,{label:"Amount",value:F,onChange:function(e){document.querySelector("#amountGrid").style.border="none",M(e.target.value)},id:"formatted-numberformat-input",InputProps:{inputComponent:B}}))),l.a.createElement(v.a,{item:!0,id:"titleGrid"},l.a.createElement(H.a,{id:"outlined-multiline-flexible",label:"Expense Title",multiline:!0,rowsMax:"4",value:A,onChange:function(e){document.querySelector("#titleGrid").style.border="none",R(e.target.value)},margin:"normal",variant:"outlined"})),l.a.createElement(v.a,{item:!0,id:"submitGrid"},l.a.createElement(S.a,{variant:"contained",color:"primary",type:"submit",onClick:function(e){if(e.preventDefault(),!0===r){var n={id:a._id,category:s,monthly:h,date:N,amount:F,title:A};L(n).then((function(e){c(!1),o(!0)}))}else{if(""!==s&&""!==y&&""!==F&&""!==A)w({id:t,category:s,monthly:h,date:N,amount:F,title:A}).then((function(e){document.querySelector("#expenseInputPaper").style.display="none",M(""),f(""),x(!1),R(""),d(""),o(!0)}));else""===s&&(document.querySelector("#categoryGrid").style.border="3px solid red"),""===y&&(document.querySelector("#monthlyGrid").style.border="3px solid red"),""===F&&(document.querySelector("#amountGrid").style.border="3px solid red"),""===A&&(document.querySelector("#titleGrid").style.border="3px solid red")}}},"Submit")),c?l.a.createElement(v.a,{item:!0,id:"cancelExpenseGrid"},l.a.createElement(S.a,{variant:"contained",color:"primary",type:"button",onClick:function(e){c(!1)}},"Cancel")):null)}),re=(a(273),function(e){var t=e.data,a=e.setRetrieve,r=Object(n.useState)(!1),c=Object(m.a)(r,2),o=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,className:"chargeItem"},!0===o&&t?l.a.createElement(le,{propData:t,form:o,toggleForm:i,setRetrieve:a}):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{item:!0,xs:3,className:"gridICharge"},l.a.createElement("p",null,t.title)),l.a.createElement(v.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement("p",null,"$",t.amount)),l.a.createElement(v.a,{item:!0,xs:3,className:"gridICharge"},l.a.createElement("p",null,_()(t.date).format("MM/DD/YYYY"))),l.a.createElement(v.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement(S.a,{type:"button",onClick:function(){i(!0)}},l.a.createElement(p.c,null))),l.a.createElement(v.a,{item:!0,xs:1,className:"gridICharge"},l.a.createElement(S.a,{type:"button",className:"expenseDeleteBtn",onClick:function(){document.querySelectorAll(".expenseDeleteBtn").disabled=!0,F({id:t._id}).then((function(e){document.querySelectorAll(".expenseDeleteBtn").disabled=!1,a(!0)}))}},l.a.createElement(p.b,null))))))}),ce=function(e){var t=e.display,a=e.user,r=Object(n.useState)(null),c=Object(m.a)(r,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(m.a)(u,2),d=s[0],E=s[1],y=Object(n.useState)(null),f=Object(m.a)(y,2),g=f[0],b=f[1],h=Object(n.useState)(!1),O=Object(m.a)(h,2),j=O[0],C=O[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),P=k[0],w=k[1],L=Object(n.useState)(null),F=Object(m.a)(L,2),G=F[0],H=F[1],M=function(){null!==t&&null!==a&&I({id:a,category:t}).then((function(e){i(e.data),C(!1)}))},D=function(e){return e.sort((function(e,t){return _()(t.date).unix()-_()(e.date).unix()}))},B=function(){w(!P)};return Object(n.useEffect)((function(){var e=document.querySelector("#expenseInputPaper");!1===P&&(e.style.display="none"),!0===P&&(e.style.display="flex")}),[P]),Object(n.useEffect)((function(){if(null!==d&&d.length>0){var e=0;d.map((function(t){return e+=t.amount})),H(e)}}),[d]),Object(n.useEffect)(M,[t,a,j]),Object(n.useEffect)((function(){if(null!==o&&"home"!==t){var e=o.filter((function(e){return!1===e.monthly})),a=o.filter((function(e){return!0===e.monthly})),n=D(e),l=D(a);E(l),b(n)}}),[o]),l.a.createElement(l.a.Fragment,null,"home"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,id:"addCont"},l.a.createElement(v.a,{item:!0,xs:12,id:"addItem"},l.a.createElement(x.a,{id:"addPaper"},l.a.createElement(v.a,{item:!0,xs:12,id:"addExpenseSection"},l.a.createElement(S.a,{id:"toggleExpenseBtn",onClick:B},l.a.createElement("p",{style:{marginRight:10}},"Add Expense")," ",l.a.createElement(p.e,{style:{fontSize:24}})," "))),l.a.createElement(x.a,{id:"expenseInputPaper"},l.a.createElement(v.a,{item:!0,xs:12,id:"expenseInputSection"},a?l.a.createElement(le,{user:a,update:function(){return M()},setRetrieve:C}):null)))),l.a.createElement(v.a,{container:!0,id:"homeContentGrid"},l.a.createElement(z,{user:a}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{container:!0,id:"addCont"},l.a.createElement(v.a,{item:!0,xs:12,id:"addItem"},l.a.createElement(x.a,{id:"addPaper"},l.a.createElement(v.a,{item:!0,xs:12,id:"addExpenseSection"},l.a.createElement(S.a,{id:"toggleExpenseBtn",onClick:B},l.a.createElement("p",{style:{marginRight:10}},"Add Expense")," ",l.a.createElement(p.e,{style:{fontSize:24}})," "))),l.a.createElement(x.a,{id:"expenseInputPaper"},l.a.createElement(v.a,{item:!0,xs:12,id:"expenseInputSection"},a?l.a.createElement(le,{user:a,setRetrieve:C}):null)))),l.a.createElement(v.a,{container:!0,id:"contentContainer"},l.a.createElement(v.a,{item:!0,xs:12,lg:5},l.a.createElement(x.a,null,d&&d.length>0?l.a.createElement(q,{message:"Monthly",total:G}):l.a.createElement(V,{monthly:!0,display:t}),l.a.createElement(v.a,{container:!0,className:"expListCont"},d?d.map((function(e,t){return l.a.createElement(re,{data:e,key:t,setRetrieve:C})})):null))),l.a.createElement(v.a,{item:!0,xs:12,lg:5},l.a.createElement(x.a,null,g&&g.length>0?l.a.createElement(q,{message:"Non-Monthly"}):l.a.createElement(V,{monthly:!1,display:t}),l.a.createElement(v.a,{container:!0,className:"expListCont"},null!==g&&g.length>0?g.map((function(e,t){return l.a.createElement(re,{data:e,key:t,setRetrieve:C})})):null))))))},oe=a(274),ie=a(275),ue=a(276),me=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)("Home"),d=Object(m.a)(s,2),y=d[0],f=d[1],g=Object(n.useContext)(E.context);Object(n.useEffect)((function(){return r(g)}),[g]);var b=[{style:{color:"#5A4218"},name:"Finances",icon:l.a.createElement(p.j,null)},{style:{color:"green"},name:"Living",icon:l.a.createElement(p.k,null)},{style:{color:"red"},name:"Health",icon:l.a.createElement(p.h,null)},{style:{color:"gold"},name:"Leisure",icon:l.a.createElement(p.f,null)},{style:{color:"aquamarine"},name:"Travel",icon:l.a.createElement(p.a,null)}];return l.a.createElement(h.a,{maxWidth:"xl",id:"profilePage"},l.a.createElement("div",{id:"backgroundContainer"},l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,id:"backgroundVid"},l.a.createElement("source",{src:oe,type:"video/mp4"}),l.a.createElement("source",{src:ie,type:"video/ogg"}),l.a.createElement("source",{src:ue,type:"video/webm"}))),l.a.createElement(v.a,{container:!0,id:"profileHeader"},l.a.createElement(v.a,{item:!0},a?l.a.createElement("p",{id:"welcomeH"},"Welcome, ",a.username," ",l.a.createElement(S.a,{id:"logBtn",variant:"contained",href:"/auth/logout"},"Log out")):null),l.a.createElement(v.a,{item:!0,id:"name_logout"},a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"logoutSection"},l.a.createElement(S.a,{id:"homeBtn",onClick:function(){return f("Home")}},l.a.createElement(p.i,{style:{fontSize:"36px"}}),l.a.createElement("p",null,"Home")))):""),l.a.createElement(v.a,{item:!0,id:"gridDate"},l.a.createElement("p",null,_()(Date.now()).format("dddd, LL")))),l.a.createElement(v.a,{container:!0,id:"gridSalary"},l.a.createElement(x.a,{className:"profHeaderSub",id:"salaryPaper"},a&&!i?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{id:"currentSalP"},"Current yearly income: ",a.salary.toLocaleString("en-US",{style:"currency",currency:"USD"})),l.a.createElement(S.a,{id:"salaryUpdateBtn",variant:"outlined",onClick:function(){u(!0)}},"Update")):l.a.createElement(R,{selected:a,setSelected:r,setSalarySection:u}))),l.a.createElement(v.a,{container:!0,id:"expenseCategories"},l.a.createElement(v.a,{item:!0,xs:12,id:"categoryNav"},l.a.createElement(x.a,{className:"categorySelectRegion"},b.map((function(e,t){return l.a.createElement(S.a,{href:"#text-buttons",style:e.style,onClick:function(){return t=e.name,void f(t);var t},key:t,className:"categoryBtn"},l.a.createElement("p",{className:"catIcon"},e.icon),l.a.createElement("p",{className:"expenseCatText"},e.name))}))))),l.a.createElement(v.a,{container:!0,id:"chosenCatContainer"},l.a.createElement(v.a,{item:!0,xs:12,className:"chosenCatRegion"},a?function(){switch(y){case"Home":return l.a.createElement(ce,{display:"home",user:a._id});case"Travel":return l.a.createElement(ce,{display:"travel",user:a._id});case"Health":return l.a.createElement(ce,{display:"health",user:a._id});case"Leisure":return l.a.createElement(ce,{display:"leisure",user:a._id});case"Living":return l.a.createElement(ce,{display:"living",user:a._id});case"Finances":return l.a.createElement(ce,{display:"finances",user:a._id});default:return l.a.createElement(ce,{displpay:"home",user:a._id})}}():l.a.createElement("p",null,"Loading"))))};a(277);var se=function(){return l.a.createElement(o.b,{history:u},l.a.createElement(E,null,l.a.createElement(o.a,{path:"/profile/",component:me})),l.a.createElement(o.a,{exact:!0,path:"/",component:b}))};c.a.render(l.a.createElement(se,null),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.a06b16f0.chunk.js.map