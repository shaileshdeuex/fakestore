(this["webpackJsonpshoping-cart"]=this["webpackJsonpshoping-cart"]||[]).push([[0],{46:function(e,t,a){},64:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(10),c=a.n(n),i=(a(64),a(16)),s=a(40),o=a.n(s),d=a(48),j=a(20),l=a(107),u=a(108),h=a(109),b=a(97),m=a(104),x=a(101),O=a(102),p=a(99),g=a(103),f=a(56),v=a.n(f),y=a(110),C=a(100),N=a(92),Q=a(95),_=a(96),S=a(98),w=a(52),k=a.n(w),B=a(53),D=a.n(B),F=a(54),P=a.n(F),T=a(2);var I=function(e){e.cartId;var t=e.item,a=e.increaseQty,r=e.decreaseQty,n=t.id,c=t.itemQty,i=t.itemName,s=t.image,o=t.price;return Object(T.jsxs)(N.a,{className:"ShoppingCartCard_root",children:[Object(T.jsx)(Q.a,{image:s,className:"ShoppingCartCard_image"}),Object(T.jsxs)("div",{className:"ShoppingCartCard_details",children:[Object(T.jsxs)(_.a,{children:[Object(T.jsx)(b.a,{variant:"body1",children:i}),Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:Object(T.jsxs)("strong",{children:["Price: $",o*c]})})]}),Object(T.jsxs)(S.a,{className:"ShoppingCartCard_buttoncontainer",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(p.a,{onClick:function(){return a(n)},children:Object(T.jsx)(k.a,{})}),Object(T.jsx)("span",{children:c}),Object(T.jsx)(p.a,{onClick:function(){return r(n,c,!1)},children:Object(T.jsx)(D.a,{})})]}),Object(T.jsx)(p.a,{"aria-label":"delete",onClick:function(){return r(n,c,!0)},children:Object(T.jsx)(P.a,{})})]})]})]})},W=a(55),A=a.n(W);a(46);var L=function(e){var t=e.sideDrawer,a=e.handleDrawer,r=e.cart,n=e.increaseQty,c=e.decreaseQty;return Object(T.jsx)(y.a,{anchor:"right",open:t,onClose:function(){return a(!1)},children:Object(T.jsxs)("div",{className:"shoppingCartCard_Container",children:[Object(T.jsx)(p.a,{onClick:function(){return a(!1)},children:Object(T.jsx)(A.a,{})}),r.length?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"shoppingCartTotal",children:[Object(T.jsx)(b.a,{variant:"h5",children:"Total"}),Object(T.jsxs)(b.a,{variant:"h5",children:["$",r.reduce((function(e,t){return e+t.price*t.itemQty}),0).toFixed(2)]})]}),Object(T.jsx)(C.a,{}),r.map((function(e,t){return Object(T.jsx)(I,{cartId:t,item:e,increaseQty:n,decreaseQty:c},t)}))]}):Object(T.jsx)("div",{className:"noCartItem_container",children:Object(T.jsx)(b.a,{variant:"h6",color:"textSecondary",children:"No Item Added to The Cart"})})]})})};var $=function(e){var t=e.sideDrawer,a=e.handleDrawer,r=e.cart,n=e.increaseQty,c=e.decreaseQty;return Object(T.jsxs)(x.a,{position:"sticky",elevation:0,children:[Object(T.jsxs)(O.a,{className:"header_menuBar",children:[Object(T.jsx)(b.a,{variant:"h6",color:"textSecondary",children:"Fake Store"}),Object(T.jsx)(p.a,{"aria-label":"add to shopping cart",onClick:function(){return a(!0)},children:Object(T.jsx)(g.a,{badgeContent:r.reduce((function(e,t){return e+t.itemQty}),0),color:"secondary",children:Object(T.jsx)(v.a,{})})})]}),Object(T.jsx)(L,{cart:r,sideDrawer:t,handleDrawer:a,increaseQty:n,decreaseQty:c})]})},E=a(57);var J=function(){return Object(T.jsxs)(E.a,{className:"coverPost",children:[Object(T.jsx)(m.a,{container:!0,className:"coverPost_containt",children:Object(T.jsx)(m.a,{item:!0,md:6,children:Object(T.jsxs)("div",{children:[Object(T.jsx)(b.a,{className:"fontWhite coverPost_heading",component:"h1",variant:"h3",gutterBottom:!0,children:"Big Billion Days are Comming."}),Object(T.jsx)(b.a,{className:"fontWhite",variant:"h5",gutterBottom:!0,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem corrupti ullam. Molestias esse eum illum numquam ab"})]})})}),Object(T.jsx)("div",{className:"coverPost_Overlay"})]})},M=a(105),q=a(106);function z(e){var t,a,r=e.item,n=e.addToCart,c=r.category,i=r.description,s=r.image,o=r.price,d=r.title;return Object(T.jsxs)(N.a,{className:"mediaCard_root",children:[Object(T.jsxs)(M.a,{style:{flexGrow:3},className:"mediaCard_body",children:[Object(T.jsx)(Q.a,{className:"MediaCard_image",image:s}),Object(T.jsxs)(_.a,{className:"mediaCard_body",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:d}),Object(T.jsx)(b.a,{variant:"caption",children:c})]}),Object(T.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:(t=i,a=200,t.substring(0,a).concat("..."))}),Object(T.jsx)(b.a,{gutterBottom:!0,variant:"h5",children:Object(T.jsxs)("strong",{children:["Price: $",o]})})]})]}),Object(T.jsx)(S.a,{children:Object(T.jsx)(q.a,{size:"small",color:"primary",className:"mediaCard_button",onClick:function(){return n(r)},children:"Add To Cart"})})]})}var G=new Date;var Y=function(){return Object(T.jsx)("footer",{children:Object(T.jsxs)(b.a,{variant:"subtitle1",align:"center",color:"textSecondary",children:[Object(T.jsx)("span",{children:"\xa9"})," Copyright ",G.getFullYear()," By Fake Store."]})})};var H=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),s=Object(j.a)(c,2),x=s[0],O=s[1],p=Object(r.useState)({loading:!1,data:[],error:!1}),g=Object(j.a)(p,2),f=g[0],v=g[1];Object(r.useEffect)((function(){v({loading:!0,data:[],error:!1});fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then(function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({loading:!1,data:t,error:!1}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){v({loading:!1,data:[],error:!0})}))}),[v]);var y=function(e,t,a){return e.id===t&&("add"===a?e.itemQty+=1:"remove"===a&&(e.itemQty-=1)),e},C=function(e){var t=e.id,a=e.title,r=e.image,n=e.price;!function(e){return x.find((function(t){return e===t.id}))}(t)?O([].concat(Object(i.a)(x),[{id:t,itemQty:1,itemName:a,image:r,price:n}])):O(x.map((function(e){return y(e,t,"add")})))};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(l.a,{}),Object(T.jsxs)(u.a,{maxWidth:"lg",children:[Object(T.jsx)($,{cart:x,sideDrawer:a,handleDrawer:function(e){n(e)},increaseQty:function(e){O(x.map((function(t){return y(t,e,"add")})))},decreaseQty:function(e,t,a){O(1===t||a?x.filter((function(t){return t.id!==e})):x.map((function(t){return y(t,e,"remove")})))}}),Object(T.jsxs)("main",{children:[Object(T.jsx)(J,{}),f.loading&&Object(T.jsx)(h.a,{}),Object(T.jsxs)(u.a,{maxWidth:"lg",className:"data_container",children:[f.error&&Object(T.jsx)(b.a,{variant:"h5",align:"center",color:"textSecondary",children:"There is a problem loading data. Please try again"}),Object(T.jsx)(m.a,{container:!0,spacing:4,children:f.data.map((function(e){return Object(T.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(T.jsx)(z,{item:e,addToCart:C})},e.id)}))})]})]}),Object(T.jsx)(Y,{})]})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};c.a.render(Object(T.jsx)(H,{}),document.getElementById("root")),K()}},[[72,1,2]]]);
//# sourceMappingURL=main.2353d248.chunk.js.map