(this.webpackJsonptenders=this.webpackJsonptenders||[]).push([[0],{45:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),l=n.n(c),o=n(15),i=n(21),u=n(2),d=n(4),s=n.n(d),m=n(13),v=n(14),p=n(6),f=n.n(p),b=n(5),E=n.n(b),h=n(22),g=n.n(h),x="https://public.mtender.gov.md/tenders",j=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(44),y=n(42),k=n(11),C=n(1);function T(){var e=Object(k.a)(["\n  min-width: 40%;\n"]);return T=function(){return e},e}function D(){var e=Object(k.a)(["\n  margin-bottom: 7px;\n"]);return D=function(){return e},e}function z(){var e=Object(k.a)(["\n  color: var(--c-primary);\n  margin-bottom: 10px;  \n"]);return z=function(){return e},e}function B(){var e=Object(k.a)(["\n  width: 60%;\n  padding: 20px;\n  margin: 20px auto;  \n\n  border: 2px solid #a5d5ff;\n  border-radius: 10px;\n  \n  transition: box-shadow 0.3s linear;\n\n  &:hover {\n    box-shadow: 3px 3px 5px 3px rgba(64,113,140,0.52);\n  }\n"]);return B=function(){return e},e}var P=C.default.div(B()),R=Object(C.default)(E.a)(z()),S={Card:P,CardText:Object(C.default)(E.a)(D()),Title:R,Block:C.default.div(T())},A=function(e){var t,n,a,c=e.item,l=c.publishedDate,i=c.records[0],u=i.ocid,d=i.compiledRelease.tender,s=i.compiledRelease.tender,m=s.title,v=s.description,p="".concat(null===(t=d.value)||void 0===t?void 0:t.amount," ").concat(null===(n=d.value)||void 0===n?void 0:n.currency),b=null===(a=i.compiledRelease.planning)||void 0===a?void 0:a.budget.budgetBreakdown[0].sourceParty.name;return r.a.createElement("li",null,r.a.createElement(S.Card,null,r.a.createElement(S.Title,{variant:"h4"},r.a.createElement(o.b,{to:"/tenders/".concat(u)},m)),r.a.createElement(f.a,{alignment:{horizontal:"space-between"}},r.a.createElement(S.Block,null,r.a.createElement(S.CardText,null,"Source: ",b),r.a.createElement(E.a,null,"Description: ",v)),r.a.createElement(S.Block,null,r.a.createElement(E.a,null,"Budget: ",p),r.a.createElement(E.a,null,"Date of Publication: ",l)))))},I=function(e){var t=e.tenders,n=Object(a.useState)([]),c=Object(v.a)(n,2),l=c[0],o=c[1];return Object(a.useEffect)((function(){var e=t.map((function(e){return"".concat(x,"/").concat(e.ocid)}));function n(){return(n=Object(m.a)(s.a.mark((function t(){var n,a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(y.a)(e),t.prev=1,r=s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.value,e.next=3,O(t);case 3:n=e.sent,o((function(e){return[].concat(Object(w.a)(e),[n])}));case 5:case"end":return e.stop()}}),e)})),n.s();case 4:if((a=n.n()).done){t.next=8;break}return t.delegateYield(r(),"t0",6);case 6:t.next=4;break;case 8:t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),n.e(t.t1);case 13:return t.prev=13,n.f(),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),r.a.createElement("ul",null,r.a.createElement(f.a,{direction:"column"},l.map((function(e){return r.a.createElement(A,{key:e.actualReleases[0].ocid,item:e})}))))},J=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(v.a)(l,2),i=o[0],u=o[1];return Object(a.useEffect)((function(){try{Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,j();case 3:t=e.sent,n=t.data,c(n),u(!1);case 7:case"end":return e.stop()}}),e)})))()}catch(e){console.log("Can&apos;t fetch tenders")}}),[]),r.a.createElement(f.a,{alignment:{horizontal:"center",vertical:"center"},direction:"column"},r.a.createElement(E.a,{color:"var(--c-primary)",variant:"h1"},"Tenders"),i?r.a.createElement(g.a,{appearance:{color:"var(--c-primary-light)",size:40}}):n.length?r.a.createElement(I,{tenders:n}):r.a.createElement(E.a,null,"No tenders here yet"))},N=n(43),W=n.n(N),F=n(23),G=n.n(F);function M(){var e=Object(k.a)(["\n  font-size: 22px;\n"]);return M=function(){return e},e}function Y(){var e=Object(k.a)(["\n  color: var(--c-primary);\n  font-weight: bold;\n  text-align: center;\n"]);return Y=function(){return e},e}function q(){var e=Object(k.a)(["\n  display: inline;\n  margin-right: 10px;\n\n  color: var(--c-primary-light);\n  font-weight: bold;  \n"]);return q=function(){return e},e}function H(){var e=Object(k.a)(["\n  display: inline;\n"]);return H=function(){return e},e}function K(){var e=Object(k.a)(["\n  width: 70%;\n  margin: 50px auto;\n\n  @media (max-width: 1000px) {\n    width: 80%;\n  }\n\n  @media(max-width: var(--bp-md)) {\n    width: 90%;\n  }\n"]);return K=function(){return e},e}var L=C.default.div(K()),Q=Object(C.default)(E.a)(H()),U=Object(C.default)(E.a)(q()),V=Object(C.default)(E.a)(Y()),X={Wrapper:L,Description:Object(C.default)(E.a)(M()),ColoredText:U,Content:Q,ContactsTitle:V},Z=function(){var e,t,n,c,l,i,d,p,b,h,j,w=Object(a.useState)([]),y=Object(v.a)(w,2),k=y[0],C=y[1],T=Object(a.useState)(!1),D=Object(v.a)(T,2),z=D[0],B=D[1],P=Object(u.f)().id,R="".concat(x,"/").concat(P);Object(a.useEffect)((function(){try{Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,O(R);case 3:t=e.sent,C(t),B(!1);case 6:case"end":return e.stop()}}),e)})))()}catch(e){console.log("error")}}),[R]);var S=null===(e=k.records)||void 0===e?void 0:e[0].compiledRelease.tender,A=null===S||void 0===S?void 0:S.title,I=null===S||void 0===S?void 0:S.description,J="".concat(null===S||void 0===S?void 0:S.value.amount," ").concat(null===S||void 0===S?void 0:S.value.currency),N=null===(t=k.records)||void 0===t?void 0:t[0].compiledRelease.id,F=null===(n=k.records)||void 0===n||null===(c=n[0].compiledRelease.parties)||void 0===c?void 0:c[0],M=null===F||void 0===F||null===(l=F.address)||void 0===l?void 0:l.streetAddress,Y=null===F||void 0===F||null===(i=F.address)||void 0===i?void 0:i.postalCode,q=null===F||void 0===F||null===(d=F.contactPoint)||void 0===d?void 0:d.name,H=null===F||void 0===F||null===(p=F.contactPoint)||void 0===p?void 0:p.email,K=null===F||void 0===F||null===(b=F.contactPoint)||void 0===b?void 0:b.telephone,L=null===(h=k.records)||void 0===h||null===(j=h[0].compiledRelease.planning.budget.budgetBreakdown)||void 0===j?void 0:j[0].period,Q=null===L||void 0===L?void 0:L.startDate,U=null===L||void 0===L?void 0:L.endDate,V=[["Tender ID:",N],["Budget:",J],["Date of Publication:",null===k||void 0===k?void 0:k.publishedDate],["Start Date:",Q],["End Date:",U]],Z=[["Address:",[M,Y]],["Name:",q],["Email:",H],["Phone:",K]];return r.a.createElement(r.a.Fragment,null,z?r.a.createElement(f.a,{alignment:{horizontal:"center",vertical:"center"},margin:{top:"large"}},r.a.createElement(g.a,{appearance:{color:"var(--c-primary-light)",size:40}})):r.a.createElement(X.Wrapper,null,r.a.createElement(f.a,{alignment:{horizontal:"center"},margin:{bottom:"medium"}},r.a.createElement(E.a,{variant:"h2",color:"var(--c-primary)"},"Title: ",A)),r.a.createElement(f.a,{margin:{bottom:"medium"}},r.a.createElement(X.ColoredText,{variant:"h4"},"Description:"),r.a.createElement(X.Description,null,I)),r.a.createElement(f.a,null,r.a.createElement(W.a,null,r.a.createElement(G.a,null,r.a.createElement(f.a,{direction:"column",margin:{top:"medium",bottom:"medium"}},V.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,e[0]),r.a.createElement(X.Content,null,e[1]))})))),r.a.createElement(G.a,null,r.a.createElement(f.a,{direction:"column"},r.a.createElement(X.ContactsTitle,null,"Contacts"),Z.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(X.ColoredText,null,e[0]),r.a.createElement(E.a,null,e[1]))})))))),r.a.createElement(f.a,{alignment:{horizontal:"end"},margin:{top:"large"}},r.a.createElement(o.b,{to:"/"},"Go back to all tenders"))),";")},$=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(J,null)),r.a.createElement(u.a,{path:"/tenders/:id?"},r.a.createElement(Z,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.ThemeProvider,null,r.a.createElement(o.a,null,r.a.createElement($,null)))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4b3d8635.chunk.js.map