import{e as c,j as s,L as r}from"./index-4f934c3a.js";import{s as n,T as o}from"./TeachersCard-e7e2ffcd.js";import{n as i}from"./index.browser-342e672c.js";const d="_main_5nc9a_1",l="_title_5nc9a_8",m="_cardsList_5nc9a_13",x="_cardsItem_5nc9a_24",_="_errorText_5nc9a_37",h="_accentText_5nc9a_41",e={main:d,title:l,cardsList:m,cardsItem:x,errorText:_,accentText:h},f=()=>{const a=c(n);return s.jsxs("main",{className:e.main,children:[s.jsx("h2",{className:e.title,children:"Favorites"}),a.length>0?s.jsx("ul",{className:e.cardsList,children:a.map(t=>s.jsx("li",{className:e.cardsItem,children:s.jsx(o,{card:t})},i()))}):s.jsxs("p",{className:e.errorText,children:["Oops! It looks like you haven't added any teachers to your favorites yet, so we can't display what isn't there. Add some favorites and come ",s.jsx(r,{className:e.accentText,to:"/teachers",children:"back!"})]})]})};export{f as default};
