(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(2),o=t(0),u=t.n(o),c=t(14),l=t.n(c),i=t(3),m=t.n(i),d="http://localhost:3001/api/persons",s=function(){return m.a.get(d)},f=function(e){return m.a.post(d,e)},h=function(e){return m.a.delete("".concat(d,"/").concat(e))},b=function(e,n){return m.a.put("".concat(d,"/").concat(e),n)},p=function(e){var n=e.value,t=e.onChange;return u.a.createElement("div",null,"filter shown with",u.a.createElement("input",{value:n,onChange:t}))},g=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,r=e.newNumber,o=e.handleNumberChange;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null," name:",u.a.createElement("input",{value:t,onChange:a})),u.a.createElement("div",null,"number:",u.a.createElement("input",{value:r,onChange:o})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.handleDeleteClick,t=e.persons,a=e.newFilter;return u.a.createElement("ul",null,t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.toLowerCase())})).map((function(e){return u.a.createElement("li",{key:e.name},e.name," ",e.number,u.a.createElement("button",{type:"submit",onClick:function(){return n(e)}},"delete"))})))},E=function(e){var n=e.message,t={color:e.colour,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:u.a.createElement("div",{style:t},n)},w=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],l=Object(o.useState)(""),i=Object(r.a)(l,2),m=i[0],d=i[1],w=Object(o.useState)(""),O=Object(r.a)(w,2),j=O[0],C=O[1],N=Object(o.useState)(""),k=Object(r.a)(N,2),y=k[0],S=k[1],T=Object(o.useState)(null),D=Object(r.a)(T,2),x=D[0],B=D[1],F=Object(o.useState)(),I=Object(r.a)(F,2),J=I[0],L=I[1];Object(o.useEffect)((function(){s().then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[x]);var R=function(e){var n=Object(a.a)(Object(a.a)({},e),{},{number:j});b(e.id,n).then((function(n){c(t.map((function(t){return t.id!==e.id?t:n.data})))})).catch((function(e){console.log(e.response),L("red"),400===e.response.status?B(e.response.data.error):B("Information of ".concat(n.name," has already removed from server")),setTimeout((function(){B(null)}),4e3)})),L("green"),B("Replaced the number of ".concat(n.name," with a new one")),setTimeout((function(){B(null)}),4e3)};return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(E,{message:x,colour:J}),u.a.createElement(p,{value:y,onChange:function(e){return S(e.target.value)}}),u.a.createElement("h3",null,"add a new"),u.a.createElement(g,{addName:function(e){if(e.preventDefault(),t.some((function(e){return e.name===m}))){var n=t.find((function(e){return e.name===m}));window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&R(n)}else{var a={name:m,number:j};f(a).then((function(){c(t.concat(a))})).catch((function(e){L("red"),B(e.response.data.error),setTimeout((function(){B(null)}),4e3)})),L("green"),B("Added ".concat(m)),setTimeout((function(){B(null)}),4e3)}d(""),C("")},newName:m,handleNameChange:function(e){return d(e.target.value)},newNumber:j,handleNumberChange:function(e){return C(e.target.value)}}),u.a.createElement("h3",null,"Numbers"),u.a.createElement(v,{handleDeleteClick:function(e){window.confirm("Delete ".concat(e.name,"?"))&&(h(e.id).then((function(){c(t.filter((function(n){return n.name!==e.name})))})).catch((function(n){L("red"),B("Too fast! Error occured while deleting ".concat(e.name)),setTimeout((function(){B(null)}),4e3)})),L("green"),B("Deleted ".concat(e.name)),setTimeout((function(){B(null)}),4e3))},persons:t,newFilter:y}))};l.a.render(u.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ca90443b.chunk.js.map