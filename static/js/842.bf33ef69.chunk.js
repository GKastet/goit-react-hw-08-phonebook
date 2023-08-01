"use strict";(self.webpackChunkreact_backend_phonebook=self.webpackChunkreact_backend_phonebook||[]).push([[842],{4842:function(n,e,t){t.r(e),t.d(e,{ContactsPage:function(){return F},default:function(){return P}});var r,a=t(9439),o=t(168),i=t(5867),c=i.ZP.form(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  label{\n    display: flex;\n    flex-direction: column;\n  }\n\n  input{\n    padding: 10px 15px;\n    cursor: pointer;\n    border-radius: 8px;\n  }\n\n  button{\n    width: 100px;\n    padding: 10px;\n    border-radius: 8px;\n    cursor: pointer;\n    background-color: lightyellow;\n    transition: background-color 250ms linear;\n    &:hover{\n        background-color: yellow;\n    }\n  }\n"]))),d=t(2791),s=t(3329);var u,l,p=function(n){var e=n.formAddContact,t=(0,d.useState)(""),r=(0,a.Z)(t,2),o=r[0],i=r[1],u=(0,d.useState)(""),l=(0,a.Z)(u,2),p=l[0],x=l[1],m=function(n){var e=n.currentTarget,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&x(r)},h=function(){i(""),x("")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(c,{onSubmit:function(n){n.preventDefault(),e({name:o,number:p}),h()},children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Name"}),(0,s.jsx)("input",{value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:m})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Number"}),(0,s.jsx)("input",{value:p,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:m})]}),(0,s.jsx)("button",{type:"submit",children:"Add contact"})]})})},x=i.ZP.div(u||(u=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 20px;\n"]))),m=i.ZP.div(l||(l=(0,o.Z)(["\n    display: flex;\n    gap: 20px;\np{\n    margin:0;\n    padding: 0;\n    font-size: 18px;\n\n}\n\n    button{\n        margin: 0;\n        padding: 0 4px;\n        border-radius: 4px;\n        cursor: pointer;\n        font-size: 16px;\n    }\n"]))),h=function(n){var e=n.id,t=n.name,r=n.number,a=n.onRemoveContact;return(0,s.jsxs)(m,{children:[(0,s.jsxs)("p",{children:[t,": ",r]}),(0,s.jsx)("button",{type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)};var f,b,v=function(n){var e=n.filteredContact,t=n.onRemoveContact;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x,{children:e.map((function(n){var e=n.id,r=n.name,a=n.number;return(0,s.jsx)(h,{id:e,name:r,number:a,onRemoveContact:t},e)}))})})},g=i.ZP.input(f||(f=(0,o.Z)(["\n    padding: 10px 15px;\n    cursor: pointer;\n    border-radius: 8px;\n"]))),j=function(n){var e=n.value,t=n.handleOnChangeFilter;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Find contacts by name"}),(0,s.jsx)(g,{type:"text",value:e,onChange:t})]})},C=t(8983),y=i.ZP.section(b||(b=(0,o.Z)(["\n  width: 400px;\n  margin: 50px auto 0;\n  display: flex;\n  flex-direction: column;\n"]))),Z=t(9434),k=t(3652),A=t(4818),w=t(6351),F=function(){var n=(0,Z.v9)(w.Af),e=(0,Z.v9)(w.xU),t=(0,Z.v9)(w.zh),r=(0,Z.v9)(w.XQ),a=(0,Z.I0)();(0,d.useEffect)((function(){a((0,A.x8)())}),[a]);var o=function(n){a((0,k.W)(n.currentTarget.value))},i=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,s.jsxs)(y,{children:[(0,s.jsx)("h1",{children:"Phonebook"}),(0,s.jsx)(p,{formAddContact:function(e){n.find((function(n){return n.name===e.name}))?alert("".concat(e.name," is already in contacts")):a((0,A.je)(e))},contactsArr:n}),(0,s.jsx)("h2",{children:"Contacts"}),(0,s.jsx)(j,{value:r,handleOnChangeFilter:o}),e&&(0,s.jsx)(C.Z,{}),t&&(0,s.jsxs)(s.Fragment,{children:["Oops... Error: ",t]}),(0,s.jsx)(v,{filteredContact:i,onRemoveContact:function(n){a((0,A.xX)(n))},value:r,handleOnChangeFilter:o})]})},P=F}}]);
//# sourceMappingURL=842.bf33ef69.chunk.js.map