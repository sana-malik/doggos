(this.webpackJsonpdoggos=this.webpackJsonpdoggos||[]).push([[0],{154:function(e,t,c){},184:function(e,t,c){},267:function(e,t,c){},275:function(e,t,c){},277:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(27),s=c.n(i),a=(c(154),c(21)),j=c(282),d=c(54),l=c(119),o=c(279),b=c(61),h=c(287),u=c(71),O=c(148),x=c.p+"static/media/logo.c99d2d53.png",g=c(7);var p=function(){return Object(g.jsx)(l.b,{id:"header",padding:"5px",backgroundColor:"gray-900",children:Object(g.jsxs)(d.a,{gap:"size-150",alignItems:"center",children:[Object(g.jsx)(o.a,{src:x,width:"60px",alt:"A good boy, sitting."}),Object(g.jsx)(b.a,{level:1,flex:"1 0 0%",children:"The Dog Catalog"}),Object(g.jsxs)(h.b,{type:"popover",children:[Object(g.jsx)(u.b,{variant:"overBackground",children:"About"}),Object(g.jsxs)(h.a,{children:[Object(g.jsx)(b.a,{children:"About the Dog Catalog"}),Object(g.jsx)(O.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(b.b,{children:["Made by Sana Malik",Object(g.jsx)("br",{}),"Credits:",Object(g.jsx)("br",{}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:["Data from ",Object(g.jsx)("a",{href:"https://thedogapi.com/",children:"The Dog API"})]}),Object(g.jsxs)("li",{children:["Icon from ",Object(g.jsx)("a",{href:"https://thenounproject.com/",children:"The Noun Project"})]})]})]})})]})]})]})})},f=c(11),m=c(5),v=c(286),y=c(280),w=c(103),k=c(124),C=c.n(k);function S(e,t,c){return"height"===t?e[t][c]+'"':"weight"===t?e[t][c]+" lbs":e[t]||"Unknown"}var z=[{key:"name",title:"Name"},{key:"breed_group",title:"Breed Group"},{key:"bred_for",title:"Bred For"},{key:"origin",title:"Origin"},{key:"height",title:"Height"},{key:"weight",title:"Weight"},{key:"life_span",title:"Lifespan"},{key:"temperament",title:"Temperament"}];var D=function(e){var t,c=e.breed,r=c.country_code,n=z.map((function(e){return Object(g.jsxs)(b.b,{children:[Object(g.jsxs)("b",{children:[e.title,":"]})," ",S(c,e.key,"imperial"),Object(g.jsx)("br",{})]})}));return Object(g.jsxs)(h.a,{children:[Object(g.jsxs)(b.a,{children:[c.name," ",r&&(t=r,t.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(127397+e.charCodeAt(0))})))]}),Object(g.jsx)(O.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(d.a,{gap:"size-400",alignItems:"start",children:[Object(g.jsx)(o.a,{src:c.image.url,flex:"0 1 50%"}),Object(g.jsx)(l.b,{children:n})]})})]})};c(184);var A=function(e){var t=e.breed,c=e.onChange;return Object(g.jsxs)(y.a,{width:"size-3600",children:[Object(g.jsx)(o.a,{src:t.image.url,height:"200px",objectFit:"cover"}),Object(g.jsx)("div",{className:"breed-name",children:t.name}),Object(g.jsxs)("div",{className:"card-footer",children:[Object(g.jsxs)(h.b,{isDismissable:!0,type:"modal",children:[Object(g.jsxs)(u.a,{"aria-label":"View breed details",isQuiet:!0,children:[Object(g.jsx)(C.a,{})," View Details"]}),Object(g.jsx)(D,{breed:t})]}),Object(g.jsx)(w.a,{isSelected:t.selected,onChange:c,children:"Compare"})]})]})},B=c(283),F=c(285),I=c(46),M=c(122);var P=function(e){var t=e.breeds,c=e.close,r=[Object(g.jsx)(F.a,{align:"end",showDivider:!0,isRowHeader:!0,children:"Attribute"})].concat(t.map((function(e){return Object(g.jsx)(F.a,{children:Object(g.jsx)(o.a,{src:e.image.url,height:"200px",objectFit:"cover"})})}))),n=z.map((function(e){return Object(g.jsx)(I.c,{children:[Object(g.jsx)(I.a,{children:e.title})].concat(t.map((function(t){return Object(g.jsx)(I.a,{children:S(t,e.key,"imperial")})})))})}));return Object(g.jsxs)(h.a,{size:"L",children:[Object(g.jsx)(b.a,{children:"Breed Comparison"}),Object(g.jsx)(O.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(F.b,{overflowMode:"wrap",height:"100%",children:[Object(g.jsx)(I.e,{children:r}),Object(g.jsx)(I.d,{children:n})]})}),Object(g.jsx)(M.a,{children:Object(g.jsx)(u.b,{variant:"secondary",onPress:c,children:"Close"})})]})};var E=function(e){var t=e.breeds,c=e.setSelected,r=B.a.Option,n=t.filter((function(e){return e.selected})).map((function(e){return e.name})),i=t.map((function(e){return Object(g.jsx)(r,{value:e.name,children:e.name},e.id)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{gap:"size-100",children:[Object(g.jsxs)("div",{style:{flex:"1"},children:[Object(g.jsx)(B.a,{mode:"multiple",allowClear:!0,style:{width:"100%"},placeholder:"Select up to ".concat(4," breeds to compare..."),value:n,onChange:function(e){t.forEach((function(t){e.includes(t.name)?c(t,!0):c(t,!1)}))},children:i}),n.length>4?Object(g.jsxs)(b.b,{children:["Please select up to ",4," breeds."]}):Object(g.jsx)(g.Fragment,{})]}),Object(g.jsxs)(h.b,{type:"fullscreen",children:[Object(g.jsx)(u.a,{isDisabled:n.length<=1||n.length>4,children:"Compare Breeds"}),function(e){return Object(g.jsx)(P,{breeds:t.filter((function(e){return n.includes(e.name)})),close:e})}]})]})})};c(267);var N=function(e){var t=e.breeds,c=e.setSelected,r=t.map((function(e){return Object(g.jsx)(A,{breed:e,onChange:function(t){return c(e,t)}},e.id)}));return Object(g.jsxs)(d.a,{direction:"column",height:"100%",children:[Object(g.jsx)(E,{breeds:t,setSelected:c}),Object(g.jsx)(O.a,{size:"M",margin:"size-100"}),Object(g.jsx)(d.a,{id:"main-breed-grid",wrap:!0,gap:"size-100",justifyContent:"space-evenly",children:r})]})},T=c(281),_=c(142),H=c.n(_);var J=function(e){var t=e.error;return Object(g.jsxs)(T.a,{children:[Object(g.jsx)(H.a,{}),Object(g.jsx)(b.a,{children:t}),Object(g.jsx)(l.a,{children:"An error occured while fetching breeds."})]})};var L=function(){var e=Object(r.useState)(),t=Object(m.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)(),s=Object(m.a)(i,2),a=s[0],j=s[1];return Object(r.useEffect)((function(){fetch("https://api.thedogapi.com/v1/breeds").then((function(e){if(e.ok)return e.json();throw new Error("".concat(e.status))})).then((function(e){j(void 0),n(e)})).catch((function(e){n(void 0),j(e.message)}))}),[]),Object(g.jsx)(l.b,{id:"content",children:a&&Object(g.jsx)(J,{error:a})||c&&Object(g.jsx)(N,{breeds:c,setSelected:function(e,t){e.selected=t,n(c&&Object(f.a)(c))}})||Object(g.jsx)(l.b,{id:"loading",children:Object(g.jsx)(v.a,{size:"large"})})})};c(275);var U=function(){return Object(g.jsx)(a.a,{theme:j.a,height:"100%",children:Object(g.jsxs)(d.a,{direction:"column",height:"100%",children:[Object(g.jsx)(p,{}),Object(g.jsx)(L,{})]})})};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.4c2f8588.chunk.js.map