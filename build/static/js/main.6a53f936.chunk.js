(window["webpackJsonpart-gallery"]=window["webpackJsonpart-gallery"]||[]).push([[0],{142:function(e,a,t){},199:function(e,a,t){e.exports=t(398)},204:function(e,a,t){},252:function(e,a,t){},398:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(9),c=t.n(r),i=(t(204),t(30)),o=t(31),s=t(34),m=t(32),u=t(14),h=t(35),d=t(52),b=(t(142),t(55),Object({NODE_ENV:"production",PUBLIC_URL:"/Projects"}).REACT_APP_API_BASE_URL||"http://localhost:8080/api"),E="accessToken",g=function(e){var a=new Headers({"Content-Type":"application/json"});localStorage.getItem(E)&&a.append("Authorization","Bearer "+localStorage.getItem(E));var t={headers:a};return e=Object.assign({},t,e),fetch(e.url,e).then(function(e){return e.json().then(function(a){return e.ok?a:Promise.reject(a)})})};var p=t(411);var f=t(408),v=t(410),y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleMenuClick=t.handleMenuClick.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleMenuClick",value:function(){this.props.onLogout()}},{key:"render",value:function(){var e;return e=this.props.currentUser?[n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Pages"),n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/"},"- Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/"},"- Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/designer.html"},"- Designer")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/developers.html"},"- Developers")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Login"},"- Log In")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/DesignManager"},"- Design Manager")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Email"},"- Email")))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"About Us"),n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/designer.html"},"- Designer")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/developers.html"},"- Developers")))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Login"},"Log In")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/DesignManager"},"Design Manager")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Email"},"Email")),n.a.createElement("li",null,n.a.createElement(f.a.Link,{href:"/",onSelect:this.handleMenuClick},"Log out"))]:[n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Pages"),n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/"},"- Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/"},"- Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/designer.html"},"- Designer")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/developers.html"},"- Developers")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Login"},"- Log In")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/DesignManager"},"- Design Manager")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Email"},"- Email")))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/"},"Projects")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"About Us"),n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/designer.html"},"- Designer")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/ArtCollectionWebsite/developers.html"},"- Developers")))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Login"},"Log In")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/DesignManager"},"Design Manager")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://abbylululu.github.io/Projects/#/Email"},"Email"))],n.a.createElement("div",{className:"header-area"},n.a.createElement("div",{className:"main-header-area"},n.a.createElement("div",{className:"classy-nav-container breakpoint-off"},n.a.createElement(v.a,{className:"classy-navbar justify-content-between navbar-fixed-top",expand:"lg",variant:"light",bg:"dark",fixed:"top"},n.a.createElement("div",{className:"bg-curve",style:{"background-image":"url(1../img/core-img/curve.png)"}}),n.a.createElement(v.a.Brand,{href:"https://abbylululu.github.io/ArtCollectionWebsite/"},n.a.createElement("img",{alt:"",src:"../img/core-img/logo.jpeg",height:"60",width:"60",className:"nav-brand"})),n.a.createElement("div",{className:"classy-menu"},n.a.createElement("div",{className:"classynav"},n.a.createElement("ul",{id:"nav"},e)))))))}}]),a}(l.Component),N=Object(d.g)(y),j=t(179),w=t.n(j);var O=function(){return n.a.createElement("div",{className:"footer-area section-padding-80-0"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-12 col-sm-6 col-lg-4 col-xl-3"},n.a.createElement("div",{className:"single-footer-widget mb-60"},n.a.createElement(w.a.Brand,{href:"/index.html",className:"d-block mb-4"},n.a.createElement("img",{alt:"",src:"../img/core-img/logo.jpeg",height:"60",width:"60",className:"nav-brand"})),n.a.createElement("h3",null,"A place of art."))),n.a.createElement("div",{className:"col-12 col-lg-4 col-xl-3"},n.a.createElement("div",{className:"single-footer-widget mb-60"},n.a.createElement("h4",{className:"widget-title"},"Contact"),n.a.createElement("div",{className:"footer-content mb-30"},n.a.createElement("h4",null,"+1-607-379-4550"),n.a.createElement("h6",null,"Maplewood Apartment, Ithaca, NY 14850")),n.a.createElement("div",{className:"footer-social-info"},n.a.createElement("a",{href:"#",className:"facebook","data-toggle":"tooltip","data-placement":"top",title:"Facebook"},n.a.createElement("i",{className:"fa fa-facebook"})),n.a.createElement("a",{href:"#",className:"twitter","data-toggle":"tooltip","data-placement":"top",title:"Twitter"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"#",className:"pinterest","data-toggle":"tooltip","data-placement":"top",title:"Pinterest"},n.a.createElement("i",{className:"fa fa-pinterest"})),n.a.createElement("a",{href:"#",className:"instagram","data-toggle":"tooltip","data-placement":"top",title:"Instagram"},n.a.createElement("i",{className:"fa fa-instagram"})),n.a.createElement("a",{href:"#",className:"youtube","data-toggle":"tooltip","data-placement":"top",title:"YouTube"},n.a.createElement("i",{className:"fa fa-youtube-play"}))))))))},C=t(197),k=t(42),P=t.n(k),L=t(180),S=t.n(L),x=t(97),A=t.n(x),D=t(59),I=t.n(D),U=t(79),M=t.n(U),T=t(181),W=t.n(T),F=t(70),H=t.n(F),_=t(44),B=t.n(_);var z=function(){var e=Object(l.useState)(!1),a=Object(C.a)(e,2),t=a[0],r=a[1],c=function(){return r(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"breadcumb-area"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-end"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcumb--con"},n.a.createElement("h2",{className:"title"},"Design Manager"),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"index.html"},n.a.createElement("i",{class:"fa fa-home"})," Home")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Design Manager")))))))),n.a.createElement(P.a,null,n.a.createElement(S.a,null,n.a.createElement("h1",{style:{fontSize:80}},"Design Manager"),n.a.createElement("p",{style:{fontSize:30}}," Manage your design here")),n.a.createElement(A.a,null,n.a.createElement(I.a,{xs:7},n.a.createElement("h1",null,"Designs")),n.a.createElement(I.a,{xs:2}),n.a.createElement(I.a,null,n.a.createElement(M.a,{variant:"primary",onClick:function(){return r(!0)},block:!0},"Add a new design"))),n.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,variant:"dark"},n.a.createElement("tr",null,n.a.createElement("th",{width:"10%"},"#"),n.a.createElement("th",{width:"25%"},"Title"),n.a.createElement("th",{width:"30%"},"URL"),n.a.createElement("th",{width:"35%"},"Action")),n.a.createElement("tbody",{id:"content"})),n.a.createElement(H.a,{show:t,onHide:c},n.a.createElement(H.a.Header,{closeButton:!0},n.a.createElement(H.a.Title,null,"Upload Design")),n.a.createElement(H.a.Body,null,n.a.createElement(B.a,null,n.a.createElement(B.a.Group,{controlId:"form.design"},n.a.createElement(B.a.Label,null,"Design"),n.a.createElement(B.a.Control,{type:"file"}),n.a.createElement(B.a.Text,{className:"text-muted"},"Please upload your design here")),n.a.createElement(B.a.Group,{controlId:"form.description"},n.a.createElement(B.a.Label,null,"Description"),n.a.createElement(B.a.Control,{type:"text",placeholder:"Please enter description here"})))),n.a.createElement(H.a.Footer,null,n.a.createElement(M.a,{variant:"secondary",onClick:c},"Cancel"),n.a.createElement(M.a,{variant:"primary",onClick:c},"Upload")))))},Y=t(98),R=(t(251),t(182)),q=t.n(R),G=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={autoplay:!0},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.leftIcon,l=a.rightIcon;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"breadcumb-area"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-end"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcumb--con"},n.a.createElement("h2",{className:"title"},"Project"),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"index.html"},n.a.createElement("i",{class:"fa fa-home"})," Home")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Project")))))))),n.a.createElement("div",{class:"mona-projects-area section-padding-80-0 mb-50"},n.a.createElement(P.a,null,n.a.createElement(A.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},n.a.createElement(I.a,Object(Y.a)({md:24},"md",12),n.a.createElement(q.a,{animation:!0,autoplay:this.state.autoplay,slideshowSpeed:2e3,leftIcon:t,rightIcon:l,onSelect:this.onSelect,ref:function(a){return e.slider=a},version:4},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:"https://i.kinja-img.com/gawker-media/image/upload/s--u7Bp8hZt--/c_scale,f_auto,fl_progressive,q_80,w_800/drnzblgclnsjvrbp7r6e.png",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"First slide label"),n.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:"https://www.geek.com/wp-content/uploads/2016/05/rickandmorty-2-625x350.jpg",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"First slide label"),n.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:"https://pixel.nymag.com/imgs/daily/vulture/2017/09/22/22-rick-and-morty.w700.h700.jpg",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"First slide label"),n.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))))))))}}]),a}(n.a.PureComponent),J=t(407),V=t(409),Z=t(22),$=t(102),K=(t(252),J.a.Item),Q=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=J.a.create()(X);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"breadcumb-area"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-end"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcumb--con"},n.a.createElement("h2",{className:"title"},"Log in"),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"index.html"},n.a.createElement("i",{class:"fa fa-home"})," Home")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Log in")))))))),n.a.createElement(P.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"30vh"}},n.a.createElement("div",{className:"login-container"},n.a.createElement("div",{className:"login-content"},n.a.createElement(e,{onLogin:this.props.onLogin})))))}}]),a}(l.Component),X=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.props.form.validateFields(function(e,t){e||function(e){return g({url:b+"/auth/signin",method:"POST",body:JSON.stringify(e)})}(Object.assign({},t)).then(function(e){localStorage.setItem(E,e.accessToken),a.props.onLogin()}).catch(function(e){401===e.status?p.a.error({description:"Your Username or Password is incorrect. Please try again!"}):p.a.error({description:e.message||"Sorry! Something went wrong. Please try again!"})})})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return n.a.createElement(J.a,{onSubmit:this.handleSubmit,className:"login-form"},n.a.createElement(K,{className:"email"},e("usernameOrEmail",{rules:[{required:!0,message:"Please input your username or email!"}]})(n.a.createElement(V.a,{prefix:n.a.createElement(Z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),size:"40",name:"usernameOrEmail",placeholder:"Username or Email"}))),n.a.createElement(K,{className:"password"},e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(n.a.createElement(V.a,{prefix:n.a.createElement(Z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),size:"40",name:"password",type:"password",placeholder:"Password"}))),n.a.createElement("br",null),n.a.createElement(K,null,n.a.createElement($.a,{type:"primary",htmlType:"submit",size:"large",className:"login-form-button"},"Login")))}}]),a}(l.Component),ee=Q,ae=t(192),te=function(e){var a=e.component,t=e.authenticated,l=Object(ae.a)(e,["component","authenticated"]);return n.a.createElement(d.b,Object.assign({},l,{render:function(e){return t?n.a.createElement(a,Object.assign({},l,e)):n.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},le=t(140),ne=t.n(le),re=t(193),ce=t(402),ie=t(403),oe=t(404),se=t(405),me=t(406),ue=t(194),he=t.n(ue),de=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(Y.a)({},e.target.name,e.target.value))},t.state={from:"",title:"",content:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(){var e=Object(re.a)(ne.a.mark(function e(a){var t,l,n,r;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=this.state,l=t.from,n=t.title,r=t.content,e.next=4,he.a.post("/api/form",{from:l,title:n,content:r});case 4:e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"breadcumb-area"},n.a.createElement("div",{className:"container h-100"},n.a.createElement("div",{className:"row h-100 align-items-end"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcumb--con"},n.a.createElement("h2",{className:"title"},"Email"),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"index.html"},n.a.createElement("i",{class:"fa fa-home"})," Home")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Email")))))))),n.a.createElement(P.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"}},n.a.createElement(ce.a,{onSubmit:this.handleSubmit,style:{width:"600px"}},n.a.createElement(ie.a,null,n.a.createElement(oe.a,{for:"exampleEmail"},"From"),n.a.createElement(se.a,{type:"email",name:"from",placeholder:"your email address",onChange:this.handleChange})),n.a.createElement(ie.a,null,n.a.createElement(oe.a,{for:"exampleEmail"},"Title"),n.a.createElement(se.a,{type:"textarea",name:"title",placeholder:"subject",onChange:this.handleChange})),n.a.createElement(ie.a,null,n.a.createElement(oe.a,{for:"exampleEmail"},"Content"),n.a.createElement(se.a,{type:"textarea",name:"content",placeholder:"comment",onChange:this.handleChange})),n.a.createElement(me.a,{type:"primary",onClick:this.handleSubmit},"Send"))))}}]),a}(l.Component),be=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={currentUser:null,isAuthenticated:!1,isLoading:!1},t.handleLogout=t.handleLogout.bind(Object(u.a)(t)),t.loadCurrentUser=t.loadCurrentUser.bind(Object(u.a)(t)),t.handleLogin=t.handleLogin.bind(Object(u.a)(t)),p.a.config({placement:"topRight",top:70,duration:3}),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"loadCurrentUser",value:function(){var e=this;this.setState({isLoading:!0}),(localStorage.getItem(E)?g({url:b+"/user/me",method:"GET"}):Promise.reject("No access token set.")).then(function(a){e.setState({currentUser:a,isAuthenticated:!0,isLoading:!1})}).catch(function(a){e.setState({isLoading:!1})})}},{key:"componentDidMount",value:function(){this.loadCurrentUser()}},{key:"handleLogout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"You're successfully logged out.";localStorage.removeItem(E),this.setState({currentUser:null,isAuthenticated:!1}),this.props.history.push(e),p.a[a]({description:t})}},{key:"handleLogin",value:function(){p.a.success({description:"You're successfully logged in."}),this.loadCurrentUser(),this.props.history.push("/DesignManager")}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{isAuthenticated:this.state.isAuthenticated,currentUser:this.state.currentUser,onLogout:this.handleLogout}),n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/redirectToStatic",component:function(){return window.location.href="https://github.com/CTTY/art-gallery",null}}),n.a.createElement(d.b,{exact:!0,path:"/",component:G}),n.a.createElement(d.b,{exact:!0,path:"/Email",component:de}),n.a.createElement(d.b,{path:"/login",render:function(a){return n.a.createElement(ee,Object.assign({onLogin:e.handleLogin},a))}}),n.a.createElement(te,{authenticated:this.state.isAuthenticated,path:"/DesignManager",component:z,handleLogout:this.handleLogout})),n.a.createElement(O,null))}}]),a}(l.Component),Ee=Object(d.g)(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=t(77);t(397);c.a.render(n.a.createElement(ge.a,null,n.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,a,t){}},[[199,1,2]]]);
//# sourceMappingURL=main.6a53f936.chunk.js.map