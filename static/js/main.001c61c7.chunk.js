(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){e.exports=n(228)},228:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),i=n.n(a),o=n(23),c=n.n(o),l=n(21),d=n(9),s=n(66),u=n(24),p=function(e){return{type:m.ADD_LIST,payload:e}},f=function(e,t,n,r,a,i){return{type:m.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexEnd:r,droppableIndexStart:n,draggableId:a,type:i}}},b=function(e,t){return{type:m.ADD_CARD,payload:{text:t,listID:e}}},m={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD"},h=2,g=6,x=[{title:"Last Episode",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"we created a static list and a static card"},{id:"card-".concat(1),text:"we used a mix between material UI React and styled components"}]},{title:"This Episode",id:"list-".concat(1),cards:[{id:"card-".concat(2),text:"we will create our first reducer"},{id:"card-".concat(3),text:"and render many cards on our list with static data"},{id:"card-".concat(4),text:"we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)"},{id:"card-".concat(5),text:"we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)"}]}],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_LIST:var n={title:t.payload,cards:[],id:"list-".concat(h)};return h+=1,[].concat(Object(u.a)(e),[n]);case m.ADD_CARD:var r={text:t.payload.text,id:"card-".concat(g)};return g+=1,console.log("action received",t),e.map(function(e){return e.id===t.payload.listID?Object(s.a)({},e,{cards:[].concat(Object(u.a)(e.cards),[r])}):e});case m.DRAG_HAPPENED:var a=t.payload,i=a.droppableIdStart,o=a.droppableIdEnd,c=a.droppableIndexEnd,l=a.droppableIndexStart,d=(a.draggableId,a.type),p=Object(u.a)(e);if("list"===d){var f=p.splice(l,1);return p.splice.apply(p,[c,0].concat(Object(u.a)(f))),p}if(i===o){var b,v=e.find(function(e){return i===e.id}),E=v.cards.splice(l,1);(b=v.cards).splice.apply(b,[c,0].concat(Object(u.a)(E)))}if(i!==o){var O,D=e.find(function(e){return i===e.id}).cards.splice(l,1);(O=e.find(function(e){return o===e.id}).cards).splice.apply(O,[c,0].concat(Object(u.a)(D)))}return p;case m.EDIT_CARD:var j=t.payload,y=j.id,w=j.listID,I=j.newText;return e.map(function(e){if(e.id===w){var t=e.cards.map(function(e){return e.id===y?(e.text=I,e):e});return Object(s.a)({},e,{cards:t})}return e});default:return e}},E=Object(d.c)({lists:v}),O=Object(d.e)(E),D=n(47),j=n(48),y=n(53),w=n(49),I=n(52),A=n(65),k=n(50),C=n.n(k),S=n(101),R=n.n(S),P=n(100),_=n.n(P),T=n(22),F=n(4),L=n(20),H=n.n(L),G=n(95);function N(){var e=Object(r.a)(["\n      margin-left: 8px;\n      cursor: pointer;\n    "]);return N=function(){return e},e}function z(){var e=Object(r.a)(["\n      margin-top: 8px;\n      display: flex;\n      align-items: center;\n      margin-left: 8px;\n    "]);return z=function(){return e},e}function B(){var e=Object(r.a)(["\n      resize: none;\n      width: 100%;\n      overflow: hidden;\n      outline: none;\n      border: none;\n    "]);return B=function(){return e},e}function M(){var e=Object(r.a)(["\n      min-height: 85px;\n      padding: 6px 8px 2px;\n    "]);return M=function(){return e},e}function J(){var e=Object(r.a)(["\n      width: 300px;\n      margin-bottom: 8px;\n    "]);return J=function(){return e},e}var W=i.a.memo(function(e){var t=e.list,n=e.text,r=void 0===n?"":n,a=e.onChange,o=e.closeForm,c=e.children,l=t?"Enter list title...":"Enter a title for this card...",d=F.b.div(J()),s=Object(F.b)(C.a)(M()),u=Object(F.b)(G.a)(B()),p=F.b.div(z()),f=Object(F.b)(H.a)(N());return i.a.createElement(d,null,i.a.createElement(s,null,i.a.createElement(u,{placeholder:l,autoFocus:!0,value:r,onChange:function(e){return a(e)},onBlur:o})),i.a.createElement(p,null,c,i.a.createElement(f,{onMouseDown:o},"close")))}),U=n(96),Y=n.n(U);function $(){var e=Object(r.a)(["\n    && {\n      color: white;\n      background: #5aac44;\n    }\n  "]);return $=function(){return e},e}var q=function(e){var t=e.children,n=e.onClick,r=Object(F.b)(Y.a)($());return i.a.createElement(r,{variant:"contained",onMouseDown:n},t)};function K(){var e=Object(r.a)(["\n    position: absolute;\n    display: none;\n    right: 5px;\n    top: 5px;\n    opacity: 0.5;\n    ",":hover & {\n      display: block;\n      cursor: pointer;\n    }\n    &:hover {\n      opacity: 0.8;\n    }\n  "]);return K=function(){return e},e}function Q(){var e=Object(r.a)(["\n    margin: 0 0 8px 0;\n    position: relative;\n    max-width: 100%;\n    word-wrap: break-word;\n  "]);return Q=function(){return e},e}var V=i.a.memo(function(e){var t=e.text,n=e.id,r=e.listID,o=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(A.a)(l,2),s=d[0],u=d[1],p=Object(a.useState)(t),f=Object(A.a)(p,2),b=f[0],h=f[1],g=F.b.div(Q()),x=Object(F.b)(H.a)(K(),g),v=function(e){u(!1)},E=function(e){h(e.target.value)},O=function(e){e.preventDefault(),c(function(e,t,n){return{type:m.EDIT_CARD,payload:{id:e,listID:t,newText:n}}}(n,r,b)),u(!1)};return s?i.a.createElement(W,{text:b,onChange:E,closeForm:v},i.a.createElement(q,{onClick:O},"Save")):i.a.createElement(T.b,{draggableId:String(n),index:o},function(e){return i.a.createElement(g,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return u(!0)}}),i.a.createElement(C.a,null,i.a.createElement(x,{onMouseDown:function(){return u(!0)},fontSize:"small"},"edit"),i.a.createElement(_.a,null,i.a.createElement(R.a,null,t))))})}),X=Object(l.b)()(V);function Z(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return Z=function(){return e},e}var ee=function(e){var t=e.list,n=e.children,r=e.onClick,a=t?1:.5,o=t?"white":"inherit",c=t?"rgba(0,0,0,.15)":"inherit",l=F.b.div(Z(),a,o,c);return i.a.createElement(l,{onClick:r},i.a.createElement(H.a,null,"add"),i.a.createElement("p",{style:{flexShrink:0}},n))};function te(){var e=Object(r.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return te=function(){return e},e}var ne=function(e){function t(){var e,n;Object(D.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).state={formOpen:!1,text:""},n.openForm=function(){n.setState({formOpen:!0})},n.closeForm=function(e){n.setState({formOpen:!1})},n.handleInputChange=function(e){n.setState({text:e.target.value})},n.handleAddList=function(){var e=n.props.dispatch,t=n.state.text;t&&(n.setState({text:""}),e(p(t)))},n.handleAddCard=function(){var e=n.props,t=e.dispatch,r=e.listID,a=n.state.text;a&&(n.setState({text:""}),t(b(r,a)))},n.renderOpenForm=function(){var e=n.props.list,t=e?"Add another list":"Add another card",r=e?1:.5,a=e?"white":"inherit",o=e?"rgba(0,0,0,.15)":"inherit",c=F.b.div(te(),r,a,o);return i.a.createElement(c,{onClick:n.openForm},i.a.createElement(H.a,null,"add"),i.a.createElement("p",{style:{flexShrink:0}},t))},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?i.a.createElement(W,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},i.a.createElement(q,{onClick:t?this.handleAddList:this.handleAddCard},t?"Add List":"Add Card")):i.a.createElement(ee,{list:t,onClick:this.openForm},t?"Add another list":"Add another card")}}]),t}(i.a.PureComponent),re=Object(l.b)()(ne);function ae(){var e=Object(r.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return ae=function(){return e},e}var ie=F.b.div(ae()),oe=i.a.memo(function(e){var t=e.title,n=e.cards,r=e.listID,a=e.index;return i.a.createElement(T.b,{draggableId:String(r),index:a},function(e){return i.a.createElement(ie,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),i.a.createElement(T.c,{droppableId:String(r),type:"card"},function(e){return i.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),i.a.createElement("h4",null,t),n.map(function(e,t){return i.a.createElement(X,{key:e.id,text:e.text,id:e.id,index:t,listID:r})}),e.placeholder,i.a.createElement(re,{listID:r}))}))})});function ce(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return ce=function(){return e},e}var le=F.b.div(ce()),de=function(e){function t(){var e,n;Object(D.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(y.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(a)))).onDragEnd=function(e){var t=e.destination,r=e.source,a=e.draggableId,i=e.type;t&&n.props.dispatch(f(r.droppableId,t.droppableId,r.index,t.index,a,i))},n}return Object(I.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.lists;return i.a.createElement(T.a,{onDragEnd:this.onDragEnd},i.a.createElement("h2",null,"Hello Youtube"),i.a.createElement(T.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(t){return i.a.createElement(le,Object.assign({},t.droppableProps,{ref:t.innerRef}),e.map(function(e,t){return i.a.createElement(oe,{listID:e.id,key:e.id,title:e.title,cards:e.cards,index:t})}),t.placeholder,i.a.createElement(re,{list:!0}))}))}}]),t}(a.PureComponent),se=Object(l.b)(function(e){return{lists:e.lists}})(de);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(){var e=Object(r.a)(["\n  html {\n    background-color: orange;\n  }\n"]);return ue=function(){return e},e}var pe=Object(F.a)(ue());c.a.render(i.a.createElement(l.a,{store:O},i.a.createElement(pe,null),i.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.001c61c7.chunk.js.map