(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(3),n=a.n(s),i=a(24),r=a.n(i),o=(a(47),a(12)),l=(a(48),a(14)),j=a(9),d=(a(49),a(36)),m=a.n(d),h=a(37),u=a.n(h),b=Object(s.createContext)(),p=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(c.jsx)(b.Provider,{value:Object(s.useReducer)(t,a),children:n})},O=function(){return Object(s.useContext)(b)},g=a(39).a.initializeApp({apiKey:"AIzaSyDjegIRiPcp3mrpPj3eofYQ982xpXPtwlQ",authDomain:"amaz-17a43.firebaseapp.com",projectId:"amaz-17a43",storageBucket:"amaz-17a43.appspot.com",messagingSenderId:"902955713297",appId:"1:902955713297:web:954511a9b753a99f9202b0",measurementId:"G-9XDSSTM4PS"}).auth();var _=function(){var e=O(),t=Object(o.a)(e,1)[0],a=t.basket,s=t.user;return Object(c.jsxs)("nav",{className:"header",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(c.jsxs)("div",{className:"header__search",children:[Object(c.jsx)("input",{type:"text",className:"header__searchInput"}),Object(c.jsx)(m.a,{className:"header__searchIcon"})]}),Object(c.jsxs)("div",{className:"header__nav",children:[Object(c.jsx)(l.b,{to:"/login",className:"header__link",children:Object(c.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header__option",children:[Object(c.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===s||void 0===s?void 0:s.email]}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign in"})]})}),Object(c.jsx)(l.b,{to:"/",className:"header__link",children:Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(c.jsx)(l.b,{to:!s&&"/login",className:"header__link",children:Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(c.jsx)(l.b,{to:"/checkout",className:"header__link",children:Object(c.jsxs)("div",{className:"header__optionBasket",children:[Object(c.jsx)(u.a,{}),Object(c.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})},x=a.p+"static/media/amazon_banner.aca93bd3.jpg",f=(a(58),a(27)),v=a.n(f);a(59);var N=function(e){var t=e.id,a=e.title,s=e.image,n=e.price,i=e.rating,r=O(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(c.jsxs)("div",{className:"product",children:[Object(c.jsxs)("div",{className:"product__info",children:[Object(c.jsx)("p",{children:a}),Object(c.jsxs)("p",{className:"product__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:n})]}),Object(c.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e){return Object(c.jsx)(v.a,{className:"star"})}))})]}),Object(c.jsx)("img",{src:s,alt:""}),Object(c.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",payload:{id:t,title:a,image:s,price:n,rating:i}})},children:"Add to basket"})]})};var k=function(){return Object(c.jsxs)("div",{div:!0,className:"home",children:[Object(c.jsx)("img",{className:"home__image",src:x,alt:""}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(N,{id:"2343246",title:"Alpha Prime Women's Grace Tank",price:30,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71rj6Kft3%2BL._AC_UY879_.jpg"}),Object(c.jsx)(N,{id:"74562",title:"Crayola Pip Squeaks Washable Markers Set, Stocking Stuffer for Boys & Girls, Ages 4, 5, 6, 7",price:11.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/91Xj8aZbbTL._AC_SX679_.jpg"})]}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(N,{id:"75743",title:"A Promised Land Hardcover \u2013 November 17, 2020",price:23.96,rating:1,image:"https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"}),Object(c.jsx)(N,{id:"23424",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)\n",price:1024.96,rating:4,image:"https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UL320_.jpg"})]}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(N,{id:"34534213",title:"lApple Pencil",price:94.96,rating:2,image:"https://images-na.ssl-images-amazon.com/images/I/21l795GXZkL._AC_SY879_.jpg"}),Object(c.jsx)(N,{id:"2341",title:'10.2" Selfie Ring Light with Tripod Stand & Cell Phone Holder for Live Stream/Makeup, UBeesize Mini Led Camera Ringlight for YouTube Video/Photography Compatible with All Phones (Black)',price:30.96,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/616Z3Wln04L._AC_SX679_.jpg"}),Object(c.jsx)(N,{id:"123987641",title:"Automatic Soap Hand Sanitizer Dispenser Touchless Hands Free Wall Mounted for Kitchen Bathroom White",price:30.96,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/51VdlMOjXEL._AC_SX679_.jpg"})]}),Object(c.jsx)("div",{className:"home__row",children:Object(c.jsx)(N,{id:"7439",title:'Samsung QN98Q900RBFXZA 98" 8k QLED Smart UHD TV (2019)',price:59999.96,rating:3,image:"https://m.media-amazon.com/images/I/51maP9cZxJL._AC_UY218_.jpg"})})]})};a(60),a(61);var S=function(e){var t=e.id,a=e.price,s=e.rating,n=e.title,i=e.image,r=O(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(c.jsxs)("div",{className:"checkoutProduct",children:[Object(c.jsx)("img",{src:i,alt:"",className:"checkoutProduct__image"}),Object(c.jsxs)("div",{className:"checkoutProduct__info",children:[Object(c.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(c.jsxs)("p",{className:"checkoutProduct__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:a})]}),Object(c.jsx)("div",{className:"checkout__rating",children:Array(s).fill().map((function(e){return Object(c.jsx)(v.a,{className:"star"})}))}),Object(c.jsxs)("button",{onClick:function(){return j({type:"REMOVE_FROM_BASKET",payload:t})},children:["Remove Item"," "]})]})]})},A=(a(62),a(38)),C=a.n(A),y=a(40),P=a(21),z=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(t.type){case"SET_USER":return Object(P.a)(Object(P.a)({},e),{},{user:t.payload});case"ADD_TO_BASKET":return Object(P.a)(Object(P.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.payload])});case"REMOVE_FROM_BASKET":var a=e.basket.filter((function(e){return e.id!==t.payload}));return Object(P.a)(Object(P.a)({},e),{},{basket:a});default:return e}};var L=function(){var e=O(),t=Object(o.a)(e,1)[0].basket;return Object(c.jsxs)("div",{className:"subtotal",children:[Object(c.jsx)(C.a,{renderText:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Subtotal (",t.length," items) ",Object(c.jsx)("strong",{children:"  ".concat(e)})]}),Object(c.jsxs)("small",{className:"subtotal__gift",children:[Object(c.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:z(t),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(c.jsx)("button",{children:"Proceed to Checkout "})]})};var w=function(){var e=O(),t=Object(o.a)(e,1)[0].basket;return Object(c.jsxs)("div",{className:"checkout",children:[Object(c.jsxs)("div",{className:"checkout__left",children:[Object(c.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG",alt:"",className:"chekout__ad"}),0===(null===t||void 0===t?void 0:t.length)?Object(c.jsxs)("div",{children:[" ",Object(c.jsxs)("h2",{children:["Check your Saved for later items below or"," ",Object(c.jsx)(l.b,{to:"/",children:"continue shopping"})]})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket "}),t.map((function(e){return Object(c.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(c.jsx)("div",{className:"checkout__right",children:Object(c.jsx)(L,{})})]})};a(64);var B=function(){var e=Object(j.f)(),t=Object(s.useState)(""),a=Object(o.a)(t,2),n=a[0],i=a[1],r=Object(s.useState)(""),d=Object(o.a)(r,2),m=d[0],h=d[1];return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"",className:"login__logo"})}),Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("h1",{children:"Sign in"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"Email"}),Object(c.jsx)("input",{type:"email",value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{type:"password",value:m,onChange:function(e){return h(e.target.value)}}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(n,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign in"})]}),Object(c.jsx)("p",{children:"By Signing-in you agree to Amazon's Conditions of Use & Sale. see our privacy notice, Our Cookies Notice and our Interset-Based Ads Notice."}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(n,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create Your Amazon Account"})]})]})};var I=function(){var e=O(),t=Object(o.a)(e,2),a=(t[0].user,t[1]);return Object(s.useEffect)((function(){var e=g.onAuthStateChanged((function(t){return a(t?{type:"SET_USER",payload:t}:{type:"SET_USER",payload:null}),function(){e()}}))}),[]),Object(c.jsx)(l.a,{children:Object(c.jsx)(j.c,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)(j.a,{exact:!0,path:"/",children:[Object(c.jsx)(_,{}),Object(c.jsx)(k,{})]}),Object(c.jsxs)(j.a,{path:"/checkout",children:[Object(c.jsx)(_,{}),Object(c.jsx)(w,{})]}),Object(c.jsx)(j.a,{path:"/login",children:Object(c.jsx)(B,{})})]})})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(p,{initialState:{basket:[],user:null},reducer:T,children:Object(c.jsx)(I,{})})}),document.getElementById("root")),E()}},[[66,1,2]]]);
//# sourceMappingURL=main.0ebe9c67.chunk.js.map