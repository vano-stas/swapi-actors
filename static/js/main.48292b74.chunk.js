(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),s=a(6);a(29);var o=function(){return c.a.createElement("nav",{className:"navigation-app"},c.a.createElement(s.b,{className:"page-link-item",to:"/"},c.a.createElement("h3",{className:"page-link-item"},"Swapi actors")),c.a.createElement("ul",{className:"nav-links-group"},c.a.createElement(s.b,{className:"page-link-item",to:"/"},c.a.createElement("li",{className:"page-link-item"},"Home")),c.a.createElement(s.b,{className:"page-link-item",to:"/actors"},c.a.createElement("li",{className:"page-link-item"},"Actors"))))},m=a(15),i=a.n(m),u=a(22),p=a(11),E=a(10),f=(a(35),function(){return c.a.createElement("div",{className:"container--box"},c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"spinner spinner--3"})))});a(36);var d=function(e){var t=e.fetchItems,a=e.items,l=(e.setItems,e.onDeleted);Object(n.useEffect)(function(){t()},[]);var r=a.loading?c.a.createElement(f,null):null;return c.a.createElement("ul",{className:"list-group col-4"},r,a.items.map(function(e){return c.a.createElement("li",{className:"list-group-item actors-item",key:e.id},e.name,c.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return l(e.id)}},c.a.createElement("i",{className:"fa fa-trash-o"})))}))},v=a(9),b=a(23);a(37);var g=function(e){var t=e.addActor,a={name:"",id:null},l=Object(n.useState)(a),r=Object(E.a)(l,2),s=r[0],o=r[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),13===e.keyCode&&(t(s),o(a))},className:"col-4"},c.a.createElement("label",{htmlFor:"actor"},"Actor: "),c.a.createElement("input",{type:"text",name:"name",className:"ml-3 col-10",value:s.name,onKeyDown:function(e){13==e.keyCode&&(t(s),o(a))},onChange:function(e){var t=e.target,a=t.name,n=t.value;o(Object(b.a)({},s,Object(v.a)({},a,n)))}}))};a(38);var h=function(){var e=Object(n.useState)({items:[],loading:!0}),t=Object(E.a)(e,2),a=t[0],l=t[1],r=function(){var e=Object(u.a)(i.a.mark(function e(){var t,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/people/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=[],a.results.map(function(e,t){return n[t]={name:e.name,id:t}}),l({items:n,loading:!1});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"actors-page"},c.a.createElement("h3",null,"Actors page"),c.a.createElement("div",{className:"actor-content"},c.a.createElement(g,{addActor:function(e){console.log(e),e.id=a.items.length+1,l({items:[].concat(Object(p.a)(a.items),[e]),loading:!1}),console.log(a.items)}}),c.a.createElement(d,{fetchItems:r,items:a,setItems:l,onDeleted:function(e){var t=a.items.findIndex(function(t){return t.id===e}),n=[].concat(Object(p.a)(a.items.slice(0,t)),Object(p.a)(a.items.slice(t+1)));console.log(n),l({items:n,loading:!1})}})))};a(39);var N=function(){return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{class:"jumbotron col-12 mb-0"},c.a.createElement("h1",{class:"display-4"},"SWAPI"),c.a.createElement("p",{class:"lead"},"The Star Wars Api"),c.a.createElement("hr",{class:"my-4"}),c.a.createElement("p",null,"All the Star Wars data you've ever wanted:"),c.a.createElement("p",null,"Planets, Spaceships, Vehicles, People, Films and Species"),c.a.createElement("p",null,"From all SEVEN Star Wars films"),c.a.createElement("p",null,"Now with The Force Awakens data!"),c.a.createElement("p",{class:"lead"},c.a.createElement("a",{class:"btn btn-primary btn-lg",href:"https://swapi.co",role:"button"},"Learn more"))))},w=a(5);a(40);var k=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(o,null),c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/",exact:!0,component:N}),c.a.createElement(w.a,{path:"/actors",component:h}))))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.48292b74.chunk.js.map