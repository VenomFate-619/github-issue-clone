(this["webpackJsonpgithub-issues-task"]=this["webpackJsonpgithub-issues-task"]||[]).push([[0],{13:function(e,s,a){},28:function(e,s,a){},30:function(e,s,a){},32:function(e,s,a){},34:function(e,s,a){},35:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a.n(t),i=a(4),n=a.n(i),r=a(2),l=a(12),d=a(14),j=a(16),o="CHANGE_WATCH",h="CHANGE_STAR",b="CHANGE_FORK",u="ERROR",v="REQUEST",x="FETCH_DATA",O="NEXT_PAGE",f={watch:0,fork:0,star:0,page:1,issues:[],loading:!0};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,s=arguments.length>1?arguments[1]:void 0,a=Object(j.a)({},e);switch(s.type){case o:return a.watch+=s.payload,a;case h:return a.star+=s.payload,a;case b:return a.fork+=s.payload,a;case v:return a.loading=!0,a;case x:return a.loading=!1,a.issues=a.issues.concat(s.payload),a;case O:return a.page=s.payload,a;case u:return a.loading=!1,a;default:return a}},m=Object(l.b)(g,{watch:0,fork:0,star:0,page:1,issues:[],loading:!0},Object(l.a)(d.a)),p=(a(25),a(28),a(0));var w=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("i",{className:"fas fa-bars fa-lg"})}),Object(p.jsx)("div",{children:Object(p.jsx)("i",{className:"fab fa-github fa-lg"})}),Object(p.jsx)("div",{children:Object(p.jsx)("i",{className:"far fa-bell fa-lg"})})]})},N=(a(30),a(3)),z=a.n(N),A=a(5);var M=new AbortController,k=(a(32),a(15)),_=a(6),y=a.n(_);var C=function(e){var s=e.text,a=e.icon,c=e.count,i=e.onClick,n=Object(t.useState)(!1),r=Object(k.a)(n,2),l=r[0],d=r[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:y.a.bagde,onClick:function(){l?(i(s.toLowerCase(),-1),d(!1)):(i(s.toLowerCase(),1),d(!0))},children:[Object(p.jsxs)("div",{className:y.a.title,children:[Object(p.jsx)("i",{className:a}),s]}),Object(p.jsx)("div",{className:y.a.count,children:c})]})})},R=a(7),L=a.n(R);var V=function(e){var s=e.text,a=e.count,t=e.children;return Object(p.jsxs)("div",{className:L.a.bagde,children:[Object(p.jsxs)("div",{className:L.a.title,children:[t,s]}),Object(p.jsx)("div",{className:L.a.count,children:a})]})};var H=function(){var e=Object(r.c)((function(e){return e})),s=Object(r.b)(),a=function(e,a){switch(e){case"watch":s({type:o,payload:a});break;case"star":s(function(e){return{type:h,payload:e}}(a));break;case"fork":s(function(e){return{type:b,payload:e}}(a))}};return Object(p.jsx)("div",{className:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"repo-info",children:[Object(p.jsxs)("div",{className:"repo-header",children:[Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{children:"facebook / "}),Object(p.jsx)("span",{children:"create-react-app"})]})]}),Object(p.jsxs)("div",{className:"bagde-collection",children:[Object(p.jsx)(C,{text:"watch",count:e.watch,icon:"far fa-eye",onClick:a}),Object(p.jsx)(C,{text:"star",count:e.star,icon:"far fa-star",onClick:a}),Object(p.jsx)(C,{text:"fork",count:e.fork,icon:"fas fa-code-branch",onClick:a})]}),Object(p.jsx)("div",{className:"break"}),Object(p.jsxs)("div",{className:"repo-nav",children:[Object(p.jsx)(V,{text:"code",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"})})}),Object(p.jsx)(V,{text:"issues",count:12,children:Object(p.jsxs)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:[Object(p.jsx)("path",{d:"M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),Object(p.jsx)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"})]})}),Object(p.jsx)(V,{text:"Pull request",count:2,children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"})})}),Object(p.jsx)(V,{text:"actions",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"})})}),Object(p.jsx)(V,{text:"projects",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"})})}),Object(p.jsx)(V,{text:"wiki",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"})})}),Object(p.jsx)(V,{text:"Security",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"})})}),Object(p.jsx)(V,{text:"insight",children:Object(p.jsx)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"})})})]})]})})})},B=(a(13),function(){return Object(p.jsxs)("div",{className:"issue-header",children:[Object(p.jsxs)("div",{className:"number-issues-container",children:[Object(p.jsxs)("div",{className:"number-issues-open",children:[Object(p.jsxs)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:[Object(p.jsx)("path",{d:"M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),Object(p.jsx)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"})]}),Object(p.jsx)("div",{className:"issues-status-count",children:"460 Open"})]}),Object(p.jsxs)("div",{className:"number-issues-closed",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true",width:"16",height:"16",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"})}),Object(p.jsx)("div",{className:"issues-status-count",children:"8,973 Closed"})]})]}),Object(p.jsxs)("div",{className:"issue-header-tabs-container",children:[Object(p.jsxs)("div",{className:"issue-header-button",children:["Author ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]}),Object(p.jsxs)("div",{className:"issue-header-button ",children:["Label ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]}),Object(p.jsxs)("div",{className:"issue-header-button ",children:["Projects ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]}),Object(p.jsxs)("div",{className:"issue-header-button  ",children:["Milestones ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]}),Object(p.jsxs)("div",{className:"issue-header-button ",children:["Assignee ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]}),Object(p.jsxs)("div",{className:"issue-header-button",children:["Sort ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]})]})]})}),E=a(11),S=a.n(E),T=c.a.memo((function(e){var s=e.created_at,a=e.title,t=e.number,c=e.login,i=(e.index,S()(s)),n=S()(),r=i.from(n);return Object(p.jsxs)("div",{className:"issue",children:[Object(p.jsxs)("div",{className:"svg-and-issue",children:[Object(p.jsxs)("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",fill:"green",children:[Object(p.jsx)("path",{d:"M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}),Object(p.jsx)("path",{fillRule:"evenodd",d:"M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"})]}),Object(p.jsx)("h4",{className:"issue-title",children:a})]}),Object(p.jsxs)("p",{className:"issue-creator",children:["#",t," opened ",r," by ",c]})]})}));var F=function(){var e=Object(r.b)(),s=Object(r.c)((function(e){return e})),a=s.loading,c=(s.page,s.issues),i=Object(t.useRef)(null),n=Object(t.useCallback)(function(){var s=Object(A.a)(z.a.mark((function s(a){return z.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:a[0].isIntersecting&&(console.log("visible"),e(function(){var e=Object(A.a)(z.a.mark((function e(s,a){var t,c,i,n,r,l;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M.abort(),M=new AbortController,e.prev=2,s({type:v}),e.next=6,fetch("https://api.github.com/repos/facebook/react/issues?per_page=7&page=".concat(a().page),{signal:M.signal});case 6:return t=e.sent,e.next=9,t.json();case 9:c=e.sent,s({type:x,payload:c}),i=t.headers.get("Link").split(","),(n=i.filter((function(e,s){if(-1!==e.search('rel="next"'))return e}))).length>0&&(n=n[0].trim(),console.log(n),r=n.slice(1,n.search('rel="next"')-3),l=new URLSearchParams(r),console.log(l.get("page")),s({type:"NEXT_PAGE",payload:l.get("page")})),e.next=24;break;case 16:if(e.prev=16,e.t0=e.catch(2),console.log(e.t0),"AbortError"!==(null===e.t0||void 0===e.t0?void 0:e.t0.name)){e.next=23;break}return e.abrupt("return");case 23:s({type:u});case 24:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(s,a){return e.apply(this,arguments)}}()));case 2:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),[e]),l=Object(t.useCallback)((function(e){var s=new IntersectionObserver(n,{root:null,rootMargin:"0px",threshold:.5});return e&&e.current&&s.observe(e.current),function(){return s.unobserve(e.current)}}),[n]);return Object(t.useEffect)((function(){l(i)}),[i,l]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(B,{}),Object(p.jsxs)("div",{className:"issue-row",children:[c.map((function(e,s){return Object(p.jsx)(T,{created_at:e.created_at,login:e.user.login,number:e.number,title:e.title,index:s},s)})),a&&Object(p.jsx)("div",{children:"loading"}),Object(p.jsx)("div",{ref:i})]})]})},G=(a(34),function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"search-bar-row",children:[Object(p.jsxs)("div",{className:"filter-and-form",children:[Object(p.jsx)("div",{className:"button-filter",children:Object(p.jsxs)("p",{children:["Filters \xa0 ",Object(p.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(p.jsx)("input",{className:"search-bar",placeholder:"  is:issue is:open ",style:{fontSize:"14px"}}),Object(p.jsxs)("div",{className:"labels-and-milestones",children:[Object(p.jsxs)("div",{className:"labels-button gray-hover",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg labels-svg",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"})}),"\xa0 Labels \xa0 ",Object(p.jsx)("div",{className:"number",children:"58"})]}),Object(p.jsxs)("div",{className:"milestones-button gray-hover",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg milestones-svg",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true",width:"16",height:"16",children:Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"})}),"\xa0 Milestones \xa0 ",Object(p.jsx)("div",{className:"number",children:"1"})]})]})]}),Object(p.jsx)("div",{className:"new-issue",children:"New Issue"})]})})});var P=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{}),Object(p.jsxs)(r.a,{store:m,children:[Object(p.jsx)(H,{}),Object(p.jsx)(G,{}),Object(p.jsx)(F,{})]})]})};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},6:function(e,s,a){e.exports={bagde:"badge_bagde__2fXyh",title:"badge_title__1Hlg_",count:"badge_count__2vc4r"}},7:function(e,s,a){e.exports={bagde:"badge2_bagde__2Zckr",title:"badge2_title__1Dtee",count:"badge2_count__2tbcl"}}},[[35,1,2]]]);
//# sourceMappingURL=main.75734569.chunk.js.map