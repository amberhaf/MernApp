(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t){},33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),s=(a(38),a(8)),i=a(2),o=function(){return l.a.createElement("footer",{class:"footer text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-4 mb-5 mb-lg-0"}),l.a.createElement("div",{class:"col-lg-4 mb-5 mb-lg-0"},l.a.createElement("h4",{class:"text-uppercase mb-4"},"Contact us"),l.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},l.a.createElement("i",{class:"fab fa-fw fa-facebook-f"})),l.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},l.a.createElement("i",{class:"fab fa-fw fa-instagram"})),l.a.createElement("a",{class:"btn btn-outline-light btn-social mx-1",href:"#!"},l.a.createElement("i",{class:"fab fa-fw fa-linkedin-in"}))),l.a.createElement("div",{class:"col-lg-4"}))))},m=function(){return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-default "}),l.a.createElement("nav",{class:"navbar navbar-expand-lg bg-secondary fixed-top",id:"mainNav"},l.a.createElement("div",{class:"container"},l.a.createElement("img",{img:!0,class:"logo3",src:"../logo.svg",alt:""}),l.a.createElement("a",{class:"brand-logo navbar-brand js-scroll-trigger",href:"#page-top"},l.a.createElement("h2",{class:"navName"},"MU Women In Stem")),l.a.createElement("button",{class:"navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{class:"fas fa-bars"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{class:"navbar-nav ml-auto"},l.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"}," ",l.a.createElement(s.b,{to:"/",class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"},"About")),l.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"}," ",l.a.createElement(s.b,{to:"/events",class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"},"Events")),l.a.createElement("li",{class:"nav-item mx-0 mx-lg-1"}," ",l.a.createElement(s.b,{to:"/blogs",class:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"},"Blogs")))))))},u=function(){return l.a.createElement("section",{className:"page-section bg-primary text-white mb-0",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"About"),l.a.createElement("div",{className:"divider-custom divider-light"},l.a.createElement("div",{className:"divider-custom-line"}),l.a.createElement("div",{className:"divider-custom-icon"},l.a.createElement("i",{className:"fas fa-star"})),l.a.createElement("div",{className:"divider-custom-line"})),l.a.createElement("div",{className:"text-center mt-4"},l.a.createElement("p",null,"Maynooth University Women In STEM Society focuses on celebrating and empowering Women in Science, Technology, Engineering and Maths (STEM) related subjects in Maynooth University. We host and promote many events throughout the Semester such as panel discussions from companies, chill nights and more. We also have mentorship programs, career talks and many more opportunities for networking."),l.a.createElement("p",null,"We are open to hear and include diverse underrepresented groups such as POC (people of colour), the LGBTQ+ community, and women as a whole in our activities. To strive to encourage a wider and more diverse group of individuals to engage in and pursue STEM activities. As well become more confident about engagement in STEM activities."))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(u,null),l.a.createElement(o,null))},h=a(31),g=a.n(h),p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(g.a,null),l.a.createElement(o,null))},E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"page-banner-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Page Could Not Be Found"))),l.a.createElement("section",{className:"error-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"error-box"},l.a.createElement("h1",null,"404"),l.a.createElement("h2",null,"Page Not Found"),l.a.createElement("p",null,"We are sorry. But the page you are looking for cannot be found."," "),l.a.createElement("a",{className:"button-one",href:"index.html"},"Go To HomePage")))),l.a.createElement(o,null))},v=a(12),b=a(13),f=a(15),y=a(14),x=a(10),N=a.n(x),k=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",description:"",dates:"",posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){N.a.get("/api/event").then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){alert("Error retrieving data!!!")}))},e.submit=function(t){t.preventDefault();var a={title:e.state.title,description:e.state.description,dates:e.state.dates};N()({url:"/api/matchEvent",method:"POST",data:a}).then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){console.log("Internal server error")}))},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return l.a.createElement("div",{key:t,className:"blog-post__display"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.dates))})):null},e}return Object(b.a)(a,[{key:"render",value:function(){return console.log("State: ",this.state),l.a.createElement("section",{className:"page-section bg-primary text-white mb-0",id:"submit"},l.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"Events"),l.a.createElement("div",{className:"divider-custom divider-light"},l.a.createElement("div",{className:"divider-custom-line"}),l.a.createElement("div",{className:"divider-custom-icon"},l.a.createElement("i",{className:"fas fa-star"})),l.a.createElement("div",{className:"divider-custom-line"})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"results",className:"blog- text-center mt-4"},this.displayBlogPost(this.state.posts))))}}]),a}(l.a.Component),w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(k,null),l.a.createElement(o,null))},S=a(32),C=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",description:"",biology:!1,chemistry:!1,physics:!1,maths:!1,computerScience:!1,engineering:!1,posts:[]},e.componentDidMount=function(){e.getBlogPost()},e.getBlogPost=function(){N.a.get("/api/").then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){alert("Error retrieving data!!!")}))},e.submit=function(t){t.preventDefault();var a={title:e.state.title,description:e.state.description,biology:e.state.biology,chemistry:e.state.chemistry,physics:e.state.physics,maths:e.state.maths,computerScience:e.state.computerScience,engineering:e.state.engineering};N()({url:"/api/match",method:"POST",data:a}).then((function(t){var a=t.data;e.setState({posts:a}),console.log("Data has been received!!")})).catch((function(){console.log("Internal server error")}))},e.resetUserInputs=function(){e.setState({title:"",description:"",biology:!1,chemistry:!1,physics:!1,maths:!1,computerScience:!1,engineering:!1})},e.displayBlogPost=function(e){return e.length?e.map((function(e,t){return l.a.createElement("div",{key:t,className:"blog-post__display"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description))})):null},e}return Object(b.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(S.a)({},n,a))}},{key:"render",value:function(){return console.log("State: ",this.state),l.a.createElement("section",{className:"page-section bg-primary text-white mb-0",id:"quiz"},l.a.createElement("h2",{className:"page-section-heading text-center text-uppercase text-white"},"Blogs"),l.a.createElement("div",{className:"divider-custom divider-light"},l.a.createElement("div",{className:"divider-custom-line"}),l.a.createElement("div",{className:"divider-custom-icon"},l.a.createElement("i",{className:"fas fa-star"})),l.a.createElement("div",{className:"divider-custom-line"})),l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("div",{className:"container text-center mt-4"},l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Biology:",l.a.createElement("input",{type:"checkbox",name:"biology",checked:this.state.biology,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Chemistry:",l.a.createElement("input",{type:"checkbox",name:"chemistry",checked:this.state.chemistry,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Physics:",l.a.createElement("input",{type:"checkbox",name:"physics",checked:this.state.physics,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Maths:",l.a.createElement("input",{type:"checkbox",name:"maths",checked:this.state.maths,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Computer Science:",l.a.createElement("input",{type:"checkbox",name:"computerScience",checked:this.state.computerScience,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",{className:"form-input checkbox"},l.a.createElement("label",null,"Engineering:",l.a.createElement("input",{type:"checkbox",name:"engineering",checked:this.state.engineering,onChange:this.handleChange.bind(this)}))),l.a.createElement("div",null,l.a.createElement("button",{id:"filter",href:"results",className:"bg-primary text-white rounded"},"Filter")))),l.a.createElement("div",{id:"results",className:"blog- text-center mt-4"},this.displayBlogPost(this.state.posts)))}}]),a}(l.a.Component),B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(C,null),l.a.createElement(o,null))};var P=function(){return l.a.createElement(s.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(d,null)),l.a.createElement(i.a,{path:"/events"},l.a.createElement(w,null)),l.a.createElement(i.a,{path:"/result"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/blogs"},l.a.createElement(B,null)),l.a.createElement(i.a,{path:"*"},l.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ff80a9be.chunk.js.map