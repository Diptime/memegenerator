(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(4),c=n.n(i),o=(n(14),n(15),n(0));var r=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),Object(o.jsx)("p",{children:"Meme Generator"})]})},m=n(5),l=n(6),h=n(7),u=n(2),d=n(9),b=n(8),j=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",meme:[]},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.imgflip.com/get_memes").then((function(t){return t.json()})).then((function(e){var n=e.data.memes;t.setState({meme:n})}))}},{key:"handleChange",value:function(t){var e=t.target,n=e.name,a=e.value;this.setState(Object(m.a)({},n,a))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Math.floor(Math.random()*this.state.meme.length),n=this.state.meme[e].url;this.setState({randomImg:n})}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(o.jsx)("div",{class:"input-group mb-3",children:Object(o.jsx)("input",{className:"form-control",id:"inputGroup-sizing-default",type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange})}),Object(o.jsx)("div",{class:"input-group mb-3",children:Object(o.jsx)("input",{className:"form-control",id:"inputGroup-sizing-default",type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange})}),Object(o.jsx)("button",{className:"btn btn-danger",children:"Generate"})]}),Object(o.jsxs)("div",{className:"meme",children:[Object(o.jsx)("img",{className:"img-fluid",src:this.state.randomImg,alt:""}),Object(o.jsx)("h2",{className:"top",children:this.state.topText}),Object(o.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(s.a.Component);var p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(r,{}),Object(o.jsx)(j,{})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.3c36f4c9.chunk.js.map