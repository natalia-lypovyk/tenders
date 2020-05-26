(this.webpackJsonptenders=this.webpackJsonptenders||[]).push([[0],{45:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(38),c=n.n(l),o=n(15),i=n(21),u=n(3),d=n(6),m=n.n(d),s=n(13),v=n(14),p=n(2),f=n.n(p),E=n(4),b=n.n(E),h=n(22),x=n.n(h),g="https://public.mtender.gov.md/tenders",j=function(){var e=Object(s.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(44),C=n(42),y=n(11),T=n(1);function k(){var e=Object(y.a)(["\n  min-width: 40%;\n"]);return k=function(){return e},e}function D(){var e=Object(y.a)(["\n  margin-bottom: 7px;\n"]);return D=function(){return e},e}function z(){var e=Object(y.a)(["\n  color: var(--c-primary);\n  margin-bottom: 10px;  \n"]);return z=function(){return e},e}function B(){var e=Object(y.a)(["\n  width: 60%;\n  padding: 20px;\n  margin: 20px auto;  \n\n  border: 2px solid #a5d5ff;\n  border-radius: 10px;\n  \n  transition: box-shadow 0.3s linear;\n\n  &:hover {\n    box-shadow: 3px 3px 5px 3px rgba(64,113,140,0.52);\n  }\n"]);return B=function(){return e},e}var P=T.default.div(B()),R=Object(T.default)(b.a)(z()),S={Card:P,CardText:Object(T.default)(b.a)(D()),Title:R,Block:T.default.div(k())},A=function(e){var t,n,a,l=e.item,c=l.publishedDate,i=l.records[0],u=i.ocid,d=i.compiledRelease.tender,m=i.compiledRelease.tender,s=m.title,v=m.description,p="".concat(null===(t=d.value)||void 0===t?void 0:t.amount," ").concat(null===(n=d.value)||void 0===n?void 0:n.currency),E=null===(a=i.compiledRelease.planning)||void 0===a?void 0:a.budget.budgetBreakdown[0].sourceParty.name;return r.a.createElement("li",null,r.a.createElement(S.Card,null,r.a.createElement(S.Title,{variant:"h4"},r.a.createElement(o.b,{to:"/tenders/".concat(u)},s)),r.a.createElement(f.a,{alignment:{horizontal:"space-between"}},r.a.createElement(S.Block,null,r.a.createElement(S.CardText,null,"Source: ",E),r.a.createElement(b.a,null,"Description: ",v)),r.a.createElement(S.Block,null,r.a.createElement(b.a,null,"Budget: ",p),r.a.createElement(b.a,null,"Date of Publication: ",c)))))},I=function(e){var t=e.tenders,n=Object(a.useState)([]),l=Object(v.a)(n,2),c=l[0],o=l[1];return Object(a.useEffect)((function(){var e=t.map((function(e){return"".concat(g,"/").concat(e.ocid)}));function n(){return(n=Object(s.a)(m.a.mark((function t(){var n,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(C.a)(e),t.prev=1,r=m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.value,e.next=3,O(t);case 3:n=e.sent,o((function(e){return[].concat(Object(w.a)(e),[n])}));case 5:case"end":return e.stop()}}),e)})),n.s();case 4:if((a=n.n()).done){t.next=8;break}return t.delegateYield(r(),"t0",6);case 6:t.next=4;break;case 8:t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),n.e(t.t1);case 13:return t.prev=13,n.f(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement("ul",null,r.a.createElement(f.a,{direction:"column"},c.map((function(e){return r.a.createElement(A,{key:e.actualReleases[0].ocid,item:e})}))))},J=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(v.a)(c,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){try{Object(s.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,j();case 3:t=e.sent,n=t.data,l(n),u(!1);case 7:case"end":return e.stop()}}),e)})))()}catch(e){console.log("Can&apos;t fetch tenders")}}),[]),r.a.createElement(f.a,{alignment:{horizontal:"center",vertical:"center"},direction:"column"},r.a.createElement(b.a,{color:"var(--c-primary)",variant:"h1"},"Tenders"),i?r.a.createElement(x.a,{appearance:{color:"var(--c-primary-light)",size:40}}):n.length?r.a.createElement(I,{tenders:n}):r.a.createElement(b.a,null,"No tenders here yet"))},N=n(43),W=n.n(N),F=n(23),G=n.n(F);function M(){var e=Object(y.a)(["\n  font-size: 22px;\n"]);return M=function(){return e},e}function Y(){var e=Object(y.a)(["\n  color: var(--c-primary);\n  font-weight: bold;\n  text-align: center;\n"]);return Y=function(){return e},e}function q(){var e=Object(y.a)(["\n  display: inline;\n  margin-right: 10px;\n\n  color: var(--c-primary-light);\n  font-weight: bold;  \n"]);return q=function(){return e},e}function H(){var e=Object(y.a)(["\n  display: inline;\n"]);return H=function(){return e},e}function K(){var e=Object(y.a)(["\n  width: 70%;\n  margin: 50px auto;\n\n  @media (max-width: 1000px) {\n    width: 80%;\n  }\n\n  @media(max-width: var(--bp-md)) {\n    width: 90%;\n  }\n"]);return K=function(){return e},e}var L=T.default.div(K()),Q=Object(T.default)(b.a)(H()),U=Object(T.default)(b.a)(q()),V=Object(T.default)(b.a)(Y()),X={Wrapper:L,Description:Object(T.default)(b.a)(M()),ColoredText:U,Content:Q,ContactsTitle:V},Z=function(){var e,t,n,l,c,i,d,p,E,h,j,w=Object(a.useState)([]),C=Object(v.a)(w,2),y=C[0],T=C[1],k=Object(a.useState)(!1),D=Object(v.a)(k,2),z=D[0],B=D[1],P=Object(u.f)().id,R="".concat(g,"/").concat(P);Object(a.useEffect)((function(){try{(function(){var e=Object(s.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,O(R);case 3:t=e.sent,T(t),B(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){console.log("error")}}),[R]);var S=null===(e=y.records)||void 0===e?void 0:e[0].compiledRelease.tender,A=null===S||void 0===S?void 0:S.title,I=null===S||void 0===S?void 0:S.description,J="".concat(null===S||void 0===S?void 0:S.value.amount," ").concat(null===S||void 0===S?void 0:S.value.currency),N=null===(t=y.records)||void 0===t?void 0:t[0].compiledRelease.id,F=null===(n=y.records)||void 0===n||null===(l=n[0].compiledRelease.parties)||void 0===l?void 0:l[0],M=null===F||void 0===F||null===(c=F.address)||void 0===c?void 0:c.streetAddress,Y=null===F||void 0===F||null===(i=F.address)||void 0===i?void 0:i.postalCode,q=null===F||void 0===F||null===(d=F.contactPoint)||void 0===d?void 0:d.name,H=null===F||void 0===F||null===(p=F.contactPoint)||void 0===p?void 0:p.email,K=null===F||void 0===F||null===(E=F.contactPoint)||void 0===E?void 0:E.telephone,L=null===(h=y.records)||void 0===h||null===(j=h[0].compiledRelease.planning.budget.budgetBreakdown)||void 0===j?void 0:j[0].period,Q=null===L||void 0===L?void 0:L.startDate,U=null===L||void 0===L?void 0:L.endDate,V=null===y||void 0===y?void 0:y.publishedDate;return r.a.createElement(r.a.Fragment,null,z?r.a.createElement(f.a,{alignment:{horizontal:"center",vertical:"center"},margin:{top:"large"}},r.a.createElement(x.a,{appearance:{color:"var(--c-primary-light)",size:40}})):r.a.createElement(X.Wrapper,null,r.a.createElement(f.a,{alignment:{horizontal:"center"},margin:{bottom:"medium"}},r.a.createElement(b.a,{variant:"h2",color:"var(--c-primary)"},"Title: ",A)),r.a.createElement(f.a,{margin:{bottom:"medium"}},r.a.createElement(X.ColoredText,{variant:"h4"},"Description:"),r.a.createElement(X.Description,null,I)),r.a.createElement(f.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(f.a,{direction:"column",margin:{top:"medium",bottom:"medium"}},r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Tender ID:"),r.a.createElement(X.Content,null,N)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Budget:"),r.a.createElement(X.Content,null,J)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Date of Publication:"),r.a.createElement(X.Content,null,V)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Start Date:"),r.a.createElement(X.Content,null,Q)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"End Date:"),r.a.createElement(X.Content,null,U)))),r.a.createElement(G.a,null,r.a.createElement(f.a,{direction:"column"},r.a.createElement(X.ContactsTitle,null,"Contacts"),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Address:"),r.a.createElement(b.a,null,M,", ",Y)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Name:"),r.a.createElement(b.a,null,q)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Email:"),r.a.createElement(b.a,null,H)),r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,"Phone:"),r.a.createElement(b.a,null,K)))))),r.a.createElement(f.a,{alignment:{horizontal:"end"},margin:{top:"large"}},r.a.createElement(o.b,{to:"/"},"Go back to all tenders"))),";")},$=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(J,null)),r.a.createElement(u.a,{path:"/tenders/:id?"},r.a.createElement(Z,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.ThemeProvider,null,r.a.createElement(o.a,null,r.a.createElement($,null)))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.06d827bf.chunk.js.map