import{i as r,j as s,L as c}from"./index-fada8f66.js";import{s as o,T as i}from"./TeachersCard-84ca80fb.js";import{n}from"./index.browser-342e672c.js";const d="_main_1k35p_1",l="_title_1k35p_8",m="_cardsList_1k35p_13",x="_cardsItem_1k35p_24",_="_errorText_1k35p_37",p="_accentText_1k35p_41",e={main:d,title:l,cardsList:m,cardsItem:x,errorText:_,accentText:p},j=()=>{const t=r(o);return s.jsxs("main",{className:e.main,children:[s.jsx("h2",{className:e.title,children:"Favorites"}),t.length>0?s.jsx("ul",{className:e.cardsList,children:t.map(a=>s.jsx("li",{className:e.cardsItem,children:s.jsx(i,{card:a})},n()))}):s.jsxs("p",{className:e.errorText,children:["Oops! It looks like you haven't added any teachers to your favorites yet, so we can't display what isn't there. Add some favorites and come ",s.jsx(c,{className:e.accentText,to:"/teachers",children:"back!"})]})]})};export{j as default};