(this.webpackJsonpbag_shop_ui=this.webpackJsonpbag_shop_ui||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),o=(n(14),n(2)),i=n(4),u=n(6),l=n(5),m=(n(15),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={showCatalogue:!0},a}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props.toggleCatalogue;return Object(m.jsxs)("div",{className:"top-bar",children:[Object(m.jsx)("span",{className:"top-btn",children:"MAIN"}),Object(m.jsx)("span",{className:"top-btn",onClick:t,children:"CATALOGUE"})]})}}]),n}(a.Component),h=(n(17),n.p+"static/media/mattioli.94c0d4b6.jpeg"),b=n(3),d=n.n(b),j=n(7),f=function t(){var e=this;Object(o.a)(this,t),this._apiBase="http://127.0.0.1:8000/api/product/",this.getResource=function(){var t=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Couldn't fetch ".concat(e,", status: ").concat(n.status));case 5:return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getAllItems=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("".concat(e._apiBase));case 2:return n=t.sent,t.abrupt("return",n.map(e._transformItem));case 4:case"end":return t.stop()}}),t)}))),this.getItem=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("".concat(e._apiBase,"/").concat(n));case 2:return a=t.sent,t.abrupt("return",e._transformItem(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this._transformItem=function(t){return{id:t.id,product_name:t.product_name,description:t.description,thumbnail:t.thumbnail}}},g=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={itemList:[]},t.bagService=new f,t.onItemListLoaded=function(e){t.setState({itemList:e})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.bagService.getAllItems().then(this.onItemListLoaded),console.log("mount")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"renderItems",value:function(t){var e=t.map((function(t){return Object(m.jsxs)("li",{className:"item",children:[Object(m.jsx)("img",{src:h,alt:t.name}),Object(m.jsx)("div",{className:"item__name",children:t.product_name}),Object(m.jsx)("div",{className:"item__description",children:t.description})]},t.id)}));return Object(m.jsx)("ul",{className:"item__grid",children:e})}},{key:"render",value:function(){var t=this.state.itemList,e=this.renderItems(t);return Object(m.jsxs)("div",{className:"item__list",children:[e,Object(m.jsx)("button",{className:"button",children:"LOAD MORE"})]})}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={showCatalogue:!1},t.toggleCatalogue=function(){t.setState((function(t){return{showCatalogue:!t.showCatalogue}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.showCatalogue?Object(m.jsx)(g,{}):null;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{toggleCatalogue:this.toggleCatalogue}),t]})}}]),n}(a.Component);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1cee59fb.chunk.js.map