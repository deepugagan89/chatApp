(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(92)},54:function(e,t,a){},83:function(e,t){},87:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(44),r=a.n(c),l=(a(54),a(46)),o=a(6),i=a(14),m=a(9),h=a(10),u=a(15),d=a(17),p=function(e){return n.createElement("h3",null,e.children)},f=null,g=function(){function e(){Object(m.a)(this,e)}return Object(h.a)(e,null,[{key:"setUserDetails",value:function(e){f=JSON.parse(JSON.stringify(e))}},{key:"getUserDetails",value:function(){return f}}]),e}(),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n.handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(i.a)({},a,s))},n.handleSubmit=function(){g.setUserDetails(n.state),n.props.history.push("/chat")},n.state={name:"",chatId:e.match.params.chatId||"",newChat:!e.match.params.chatId},n}return Object(h.a)(a,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(p,null,"User Details"),n.createElement("form",null,n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"name"},"Name:"),n.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,className:"form-control",placeholder:"Enter Name",id:"name",name:"name"})),n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"chatId"},"Chat ID:"),n.createElement("input",{type:"text",value:this.state.chatId,readOnly:!0,className:"form-control",placeholder:"Chat ID",id:"chatId"})),n.createElement("div",{className:"form-group form-check"},n.createElement("label",{className:"form-check-label"},n.createElement("input",{className:"form-check-input",readOnly:!0,type:"checkbox",name:"newChat",checked:this.state.newChat})," Start New Chat")),n.createElement("button",{type:"button",onClick:this.handleSubmit,className:"btn btn-primary"},"Submit")))}}]),a}(n.Component),E=a(16),b=a(45),k=a.n(b),N={socketUrl:"/"},y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={user:{},users:[],messages:[],chatId:""},n.socket=null,n.handleChange=function(e){var t=e.target,a=t.name,s=t.value;n.setState(Object(i.a)({},a,s))},n.sendMessage=function(){n.socket.emit("chatMessage",{message:n.state.chatMessage,chatId:n.chatId,name:n.state.user.name}),n.setState({chatMessage:""})},g.getUserDetails()?(n.state={user:g.getUserDetails(),users:[],messages:[],chatId:""},n):(n.props.history.push("/"),Object(E.a)(n))}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement("div",{className:"chat-head"},n.createElement(p,null,"Anonymous Chat - ",this.state.user.name),n.createElement("div",null,"Users- ",this.state.users.map((function(t){return t.name&&t.chatId==e.state.chatId?t.name+",":""}))),n.createElement("div",null,"Chat Link - ",window.location.href+"/"+this.state.chatId)),n.createElement("div",{className:"row chat-container"},n.createElement("div",{className:"col-12 chat"},this.state.messages.map((function(t){return n.createElement("div",{class:(t._id===e.socket.id?"mine":"yours")+" messages"},n.createElement("div",{class:"message last"},t.message),n.createElement("span",{className:"chatee"},t.name))})))),n.createElement("div",{className:"row message-input"},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-10"},n.createElement("input",{type:"text",value:this.state.chatMessage,name:"chatMessage",onChange:this.handleChange,onKeyPress:function(t){13===t.which&&e.sendMessage()},className:"col-12 form-control",placeholder:"chatMessage"})),n.createElement("div",{className:"col-2"},n.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.sendMessage},"Send"))))))}},{key:"componentDidMount",value:function(){var e=this;null==this.socket&&(this.socket=k()(N.socketUrl),this.socket.on("connection",(function(){console.log("connected")})),this.socket.emit("userDetails",this.state.user),this.socket.on("message",(function(t){if(e.state.chatId==t.chatId){var a=JSON.parse(JSON.stringify(e.state.messages));a.push(t),e.setState({messages:a})}})),this.socket.on("users",(function(t){e.setState({users:t}),t.map((function(t){t._id===e.socket.id&&(e.chatId=t.chatId,e.setState({chatId:t.chatId}))}))})))}}]),a}(n.Component);a(86),a(87);var I=function(){return s.a.createElement("div",{className:"container mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(l.a,null,s.a.createElement(o.c,null,s.a.createElement(o.a,{path:"/",exact:!0,component:v}),s.a.createElement(o.a,{path:"/chat/:chatId",exact:!0,component:v}),s.a.createElement(o.a,{path:"/chat",exact:!0,component:y}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.0da7af60.chunk.js.map