(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[60,145,146,147,148],{1425:function(e,t,n){"use strict";n(559);var a=n(203);t.a=a.a},2503:function(e,t,n){"use strict";n.r(t);n(319);var a,r=n(110),l=(n(511),n(509)),c=(n(512),n(510)),i=n(27),o=n(119),s=n(0),u=n.n(s),d=(n(926),n(944).a),p=n(1425),f=n(201),m=n(507),g=n(505),b=n(503),h=n(508),x=n(518),E=n(515),y=n(45),O=n(39),w=n(9),j=n(49),v=n(73),k=O.d.div(a||(a=Object(y.a)(["\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ",";\n    background: ",";\n    font-size: 12px;\n    color: ",";\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ",";\n    margin-left: ",";\n    cursor: pointer;\n    white-space: nowrap;\n    ",";\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .anticon-cross {\n      margin: ",";\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ",";\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ",";\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ",";\n        color: #ffffff;\n      }\n    }\n  }\n"])),Object(w.palette)("border",0),Object(w.palette)("grayscale",6),Object(w.palette)("text",3),(function(e){return"rtl"===e["data-rtl"]?"inherit":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"inherit"}),Object(j.c)(),Object(w.palette)("text",3),Object(w.palette)("text",3),(function(e){return"rtl"===e["data-rtl"]?"0 3px 0 0":"0 0 0 3px"}),Object(w.palette)("primary",0),Object(w.palette)("primary",0),Object(w.palette)("primary",0)),C=Object(v.a)(k),N=d.CheckableTag,S=function(e){return u.a.createElement(C,null,u.a.createElement(d,e,e.children))},T=["Movie","Books","Music"];t.default=function(){var e=u.a.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=u.a.useState(["Unremovable","Tag 2","Tag 3"]),d=Object(o.a)(s,2),y=d[0],O=d[1],w=u.a.useState(!1),j=Object(o.a)(w,2),v=j[0],k=j[1],C=u.a.useState(""),F=Object(o.a)(C,2),P=F[0],B=F[1],z=u.a.useRef(null);u.a.useEffect((function(){v&&z.current&&z.current.focus()}),[v]);var D=function(){var e;P&&-1===y.indexOf(P)&&(e=[].concat(Object(i.a)(y),[P])),O(e),k(!1),B("")},R=E.b.rowStyle,W=E.b.colStyle,I=E.b.gutter;return u.a.createElement(b.default,null,u.a.createElement(m.default,null,u.a.createElement(x.a,{id:"uiElements.tags.tags"})),u.a.createElement(l.a,{style:R,gutter:I,justify:"start"},u.a.createElement(c.a,{md:12,sm:12,xs:24,style:W},u.a.createElement(g.default,{title:u.a.createElement(x.a,{id:"uiElements.tags.basicExample"}),subtitle:u.a.createElement(x.a,{id:"uiElements.tags.basicExampleSubTitle"})},u.a.createElement(h.default,null,u.a.createElement(S,null,u.a.createElement(x.a,{id:"uiElements.tags.tagOne"})),u.a.createElement(S,null,u.a.createElement("a",{href:"https://isomorphic.redq.io/dashboard/op_tag"},u.a.createElement(x.a,{id:"uiElements.tags.link"}))),u.a.createElement(S,{closable:!0,onClose:function(e){}},u.a.createElement(x.a,{id:"uiElements.tags.tagTwo"})),u.a.createElement(S,{closable:!0,onClose:function(e){e.preventDefault()}},u.a.createElement(x.a,{id:"uiElements.tags.preventDefault"}))))),u.a.createElement(c.a,{md:12,sm:12,xs:24,style:W},u.a.createElement(g.default,{title:u.a.createElement(x.a,{id:"uiElements.tags.colorfulTag"})},u.a.createElement(h.default,null,u.a.createElement(S,{color:"#f50"},"#f50"),u.a.createElement(S,{color:"#2db7f5"},"#2db7f5"),u.a.createElement(S,{color:"#87d068"},"#87d068"),u.a.createElement(S,{color:"#108ee9"},"#108ee9"))))),u.a.createElement(l.a,{style:R,gutter:I,justify:"start"},u.a.createElement(c.a,{md:12,sm:12,xs:24,style:W},u.a.createElement(g.default,{title:u.a.createElement(x.a,{id:"uiElements.tags.hotTags"}),subtitle:u.a.createElement(x.a,{id:"uiElements.tags.hotTagsSubTitle"})},u.a.createElement(h.default,null,u.a.createElement("strong",null,u.a.createElement(x.a,{id:"uiElements.tags.hots"})," "),T.map((function(e){return u.a.createElement(N,{key:e,checked:n.indexOf(e)>-1,onChange:function(t){return function(e,t){var r=t?[].concat(Object(i.a)(n),[e]):n.filter((function(t){return t!==e}));a(r)}(e,t)}},e)}))))),u.a.createElement(c.a,{md:12,sm:12,xs:24,style:W},u.a.createElement(g.default,{title:u.a.createElement(x.a,{id:"uiElements.tags.addRemoveDynamically"}),subtitle:u.a.createElement(x.a,{id:"uiElements.tags.addRemoveDynamicallySubTitle"})},u.a.createElement(h.default,null,y.map((function(e,t){var n=e.length>20,a=u.a.createElement(S,{key:e,closable:0!==t,onClose:function(){return function(e){var t=y.filter((function(t){return t!==e}));O(t)}(e)}},n?"".concat(e.slice(0,20),"..."):e);return n?u.a.createElement(p.a,{title:e},a):a})),v&&u.a.createElement(r.a,{ref:z,type:"text",size:"small",style:{width:78},value:P,onChange:function(e){B(e.target.value)},onBlur:D,onPressEnter:D}),!v&&u.a.createElement(f.b,{size:"small",type:"dashed",onClick:function(){k(!0)}},u.a.createElement(x.a,{id:"uiElements.tags.newTag"})))))))}},503:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(45),i=n(39).d.div(a||(a=Object(c.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));t.default=function(e){return l.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},505:function(e,t,n){"use strict";n.r(t);var a,r,l,c=n(0),i=n.n(c),o=n(45),s=n(39),u=n(9),d=s.d.h3(a||(a=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(u.palette)("text",0)),p=s.d.p(r||(r=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(u.palette)("text",3)),f=function(e){return i.a.createElement("div",null,e.title?i.a.createElement(d,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?i.a.createElement(p,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")},m=s.d.div(l||(l=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(u.palette)("border",0),"");t.default=function(e){return i.a.createElement(m,{className:"".concat(e.className?e.className:""," isoBoxWrapper"),style:e.style},i.a.createElement(f,{title:e.title,subtitle:e.subtitle}),e.children)}},507:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(45),i=n(39),o=n(9),s=n(73),u=i.d.h1(a||(a=Object(c.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),d=Object(s.a)(u);t.default=function(e){return l.a.createElement(d,{className:"isoComponentTitle"},e.children)}},508:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(45),i=n(39),o=n(9),s=n(73),u=i.d.div(a||(a=Object(c.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(e){return"rtl"===e["data-rtl"]?"0":"10px"}),(function(e){return"rtl"===e["data-rtl"]?"10px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),(function(e){return"rtl"===e["data-rtl"]?"0":"295px"}),(function(e){return"rtl"===e["data-rtl"]?"295px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"}),(function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"0":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0"}),Object(o.palette)("secondary",1),(function(e){return"rtl"===e["data-rtl"]?"auto":"6px"}),(function(e){return"rtl"===e["data-rtl"]?"6px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"15px"}),(function(e){return"rtl"===e["data-rtl"]?"15px":"0"}),(function(e){return e["data-rtl"],"0"}),(function(e){return e["data-rtl"],"0"})),d=Object(s.a)(u);t.default=function(e){return l.a.createElement(d,{className:"isoExampleWrapper",style:e.style},e.children)}},509:function(e,t,n){"use strict";var a=n(1737);t.a=a.a},510:function(e,t,n){"use strict";var a=n(1237);t.a=a.a},511:function(e,t,n){"use strict";n(118),n(516)},512:function(e,t,n){"use strict";n(118),n(516)},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,l={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.b=l},926:function(e,t,n){"use strict";n(118),n(927)},927:function(e,t,n){},944:function(e,t,n){"use strict";var a=n(7),r=n(5),l=n(10),c=n(0),i=n(11),o=n.n(i),s=n(59),u=n(209),d=n(83),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){var t,n=e.prefixCls,l=e.className,i=e.checked,s=e.onChange,u=e.onClick,f=p(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,c.useContext(d.b).getPrefixCls)("tag",n),g=o()(m,(t={},Object(a.a)(t,"".concat(m,"-checkable"),!0),Object(a.a)(t,"".concat(m,"-checkable-checked"),i),t),l);return c.createElement("span",Object(r.a)({},f,{className:g,onClick:function(e){null===s||void 0===s||s(!i),null===u||void 0===u||u(e)}}))},m=n(228),g=n(214),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},h=new RegExp("^(".concat(m.a.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(m.b.join("|"),")$")),E=function(e,t){var n,i=e.prefixCls,p=e.className,f=e.style,m=e.children,E=e.icon,y=e.color,O=e.onClose,w=e.closeIcon,j=e.closable,v=void 0!==j&&j,k=b(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=c.useContext(d.b),N=C.getPrefixCls,S=C.direction,T=c.useState(!0),F=Object(l.a)(T,2),P=F[0],B=F[1];c.useEffect((function(){"visible"in k&&B(k.visible)}),[k.visible]);var z=function(){return!!y&&(h.test(y)||x.test(y))},D=Object(r.a)({backgroundColor:y&&!z()?y:void 0},f),R=z(),W=N("tag",i),I=o()(W,(n={},Object(a.a)(n,"".concat(W,"-").concat(y),R),Object(a.a)(n,"".concat(W,"-has-color"),y&&!R),Object(a.a)(n,"".concat(W,"-hidden"),!P),Object(a.a)(n,"".concat(W,"-rtl"),"rtl"===S),n),p),J=function(e){e.stopPropagation(),null===O||void 0===O||O(e),e.defaultPrevented||"visible"in k||B(!1)},L="onClick"in k||m&&"a"===m.type,M=Object(s.a)(k,["visible"]),$=E||null,q=$?c.createElement(c.Fragment,null,$,c.createElement("span",null,m)):m,U=c.createElement("span",Object(r.a)({},M,{ref:t,className:I,style:D}),q,v?w?c.createElement("span",{className:"".concat(W,"-close-icon"),onClick:J},w):c.createElement(u.a,{className:"".concat(W,"-close-icon"),onClick:J}):null);return L?c.createElement(g.a,null,U):U},y=c.forwardRef(E);y.displayName="Tag",y.CheckableTag=f;t.a=y}}]);
//# sourceMappingURL=60.8a4002b1.chunk.js.map