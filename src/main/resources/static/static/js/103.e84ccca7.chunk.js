(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[103,145,146,147,148],{2505:function(n,e,t){"use strict";t.r(e);var i,r=t(0),o=t.n(r),a=t(2255),l=t.n(a),c=(t(2256),l.a),d=t(650),s=t(507),p=t(505),f=t(503),u=t(508),h=t(45),g=t(39),x=t(9),m=t(49),b=g.d.div(i||(i=Object(h.a)(["\n  .filepicker {\n    width: 100%;\n    min-height: 320px;\n    padding: 35px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffffff;\n    border: 1px dashed ",";\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    ",";\n\n    .closeBtn {\n      width: 30px;\n      height: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      padding: 0;\n      margin-right: 0;\n      background-color: transparent;\n      outline: 0;\n      border: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      ",";\n      ",";\n      ",";\n\n      &:before {\n        content: '\f2d7';\n        font-family: 'ionicons';\n        font-size: 14px;\n        color: ",";\n        line-height: 1;\n        ",";\n      }\n\n      &:hover {\n        &:before {\n          color: ",";\n        }\n      }\n    }\n\n    .dz-message {\n      width: 100%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin: 0;\n\n      span {\n        font-size: 14px;\n        color: ",";\n        font-weight: 700;\n        margin-top: 6px;\n      }\n\n      &:before {\n        content: '\f255';\n        font-family: 'ionicons';\n        font-size: 53.4px;\n        line-height: 32px;\n        color: ",";\n      }\n    }\n\n    .dz-progress {\n      width: 100%;\n      height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: none;\n      background-color: rgba(255, 255, 255, 0.8);\n      ",";\n    }\n\n    .dz-preview {\n      width: 100px;\n      height: 127px;\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      overflow: hidden;\n      float: left;\n      position: relative;\n      margin: 0;\n      margin-left: 2px;\n      margin-bottom: 2px;\n\n      .dz-progress {\n        display: none;\n      }\n\n      .dz-image {\n        width: 100%;\n        height: 100px;\n        margin-bottom: 2px;\n        display: block;\n        flex-shrink: 0;\n        overflow-y: hidden;\n        position: relative;\n        background: none;\n        background-color: ",";\n        ",";\n\n        img {\n          max-width: 100%;\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n\n      .dz-details {\n        width: 100%;\n        height: 25px;\n        padding: 0 8px;\n        flex-shrink: 0;\n        opacity: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: default;\n        background-color: ",";\n\n        .dz-size {\n          display: none;\n        }\n        .dz-filename {\n          width: 100%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n\n          span {\n            font-size: 14px;\n            color: ",";\n            white-space: nowrap;\n            background-color: transparent;\n          }\n\n          &:not(:hover) {\n            span {\n              border: 0;\n            }\n          }\n\n          &:hover {\n            span {\n              border: 0;\n              background-color: transparent;\n            }\n          }\n        }\n      }\n\n      .dz-success-mark {\n        display: none;\n      }\n\n      .dz-remove {\n        font-size: 14px;\n        font-weight: 400;\n        background-color: ",";\n        width: 100%;\n        height: 25px;\n        color: #fff;\n        line-height: 25px;\n        display: inline-block;\n        text-align: center;\n        position: absolute;\n        bottom: -25px;\n        left: 0px;\n        cursor: pointer;\n        border: 0;\n        outline: 0;\n        padding: 0;\n        ",";\n      }\n\n      &:hover {\n        .dz-remove {\n          bottom: 0;\n        }\n      }\n    }\n\n    &.dz-started {\n      .dz-message {\n        display: none;\n      }\n    }\n  }\n"],["\n  .filepicker {\n    width: 100%;\n    min-height: 320px;\n    padding: 35px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffffff;\n    border: 1px dashed ",";\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    ",";\n\n    .closeBtn {\n      width: 30px;\n      height: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      padding: 0;\n      margin-right: 0;\n      background-color: transparent;\n      outline: 0;\n      border: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      ",";\n      ",";\n      ",";\n\n      &:before {\n        content: '\\f2d7';\n        font-family: 'ionicons';\n        font-size: 14px;\n        color: ",";\n        line-height: 1;\n        ",";\n      }\n\n      &:hover {\n        &:before {\n          color: ",";\n        }\n      }\n    }\n\n    .dz-message {\n      width: 100%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin: 0;\n\n      span {\n        font-size: 14px;\n        color: ",";\n        font-weight: 700;\n        margin-top: 6px;\n      }\n\n      &:before {\n        content: '\\f255';\n        font-family: 'ionicons';\n        font-size: 53.4px;\n        line-height: 32px;\n        color: ",";\n      }\n    }\n\n    .dz-progress {\n      width: 100%;\n      height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: none;\n      background-color: rgba(255, 255, 255, 0.8);\n      ",";\n    }\n\n    .dz-preview {\n      width: 100px;\n      height: 127px;\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      overflow: hidden;\n      float: left;\n      position: relative;\n      margin: 0;\n      margin-left: 2px;\n      margin-bottom: 2px;\n\n      .dz-progress {\n        display: none;\n      }\n\n      .dz-image {\n        width: 100%;\n        height: 100px;\n        margin-bottom: 2px;\n        display: block;\n        flex-shrink: 0;\n        overflow-y: hidden;\n        position: relative;\n        background: none;\n        background-color: ",";\n        ",";\n\n        img {\n          max-width: 100%;\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n\n      .dz-details {\n        width: 100%;\n        height: 25px;\n        padding: 0 8px;\n        flex-shrink: 0;\n        opacity: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: default;\n        background-color: ",";\n\n        .dz-size {\n          display: none;\n        }\n        .dz-filename {\n          width: 100%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n\n          span {\n            font-size: 14px;\n            color: ",";\n            white-space: nowrap;\n            background-color: transparent;\n          }\n\n          &:not(:hover) {\n            span {\n              border: 0;\n            }\n          }\n\n          &:hover {\n            span {\n              border: 0;\n              background-color: transparent;\n            }\n          }\n        }\n      }\n\n      .dz-success-mark {\n        display: none;\n      }\n\n      .dz-remove {\n        font-size: 14px;\n        font-weight: 400;\n        background-color: ",";\n        width: 100%;\n        height: 25px;\n        color: #fff;\n        line-height: 25px;\n        display: inline-block;\n        text-align: center;\n        position: absolute;\n        bottom: -25px;\n        left: 0px;\n        cursor: pointer;\n        border: 0;\n        outline: 0;\n        padding: 0;\n        ",";\n      }\n\n      &:hover {\n        .dz-remove {\n          bottom: 0;\n        }\n      }\n    }\n\n    &.dz-started {\n      .dz-message {\n        display: none;\n      }\n    }\n  }\n"])),Object(x.palette)("border",0),Object(m.a)("0"),Object(m.a)("50%"),Object(m.b)("none"),Object(m.c)(),Object(x.palette)("text",3),Object(m.c)(),Object(x.palette)("text",0),Object(x.palette)("text",3),Object(x.palette)("primary",0),Object(m.a)("0"),Object(x.palette)("secondary",6),Object(m.a)("0"),Object(x.palette)("secondary",1),Object(x.palette)("text",4),Object(x.palette)("error",0),Object(m.c)());e.default=function(){var n={addedfile:function(n){return Object(d.c)("success","".concat(n.name," added"))},success:function(n){return Object(d.c)("success","".concat(n.name," successfully uploaded"))},error:function(n){return Object(d.c)("error","Server is not set in the demo")}};return o.a.createElement(f.default,null,o.a.createElement(s.default,null,"Dropzone"),o.a.createElement(p.default,null,o.a.createElement(u.default,null,o.a.createElement(b,null,o.a.createElement(c,{config:{iconFiletypes:[".jpg",".png",".gif"],method:!0,showFiletypeIcon:!0,uploadMultiple:!1,maxFilesize:2,maxFiles:2,dictMaxFilesExceeded:"You can only upload upto 2 images",dictRemoveFile:"Delete",dictCancelUploadConfirmation:"Are you sure to cancel upload?",postUrl:"no-url"},eventHandlers:n,djsConfig:{autoProcessQueue:!1}})))))}},503:function(n,e,t){"use strict";t.r(e);var i,r=t(0),o=t.n(r),a=t(45),l=t(39).d.div(i||(i=Object(a.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));e.default=function(n){return o.a.createElement(l,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},505:function(n,e,t){"use strict";t.r(e);var i,r,o,a=t(0),l=t.n(a),c=t(45),d=t(39),s=t(9),p=d.d.h3(i||(i=Object(c.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(s.palette)("text",0)),f=d.d.p(r||(r=Object(c.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(s.palette)("text",3)),u=function(n){return l.a.createElement("div",null,n.title?l.a.createElement(p,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?l.a.createElement(f,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")},h=d.d.div(o||(o=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(s.palette)("border",0),"");e.default=function(n){return l.a.createElement(h,{className:"".concat(n.className?n.className:""," isoBoxWrapper"),style:n.style},l.a.createElement(u,{title:n.title,subtitle:n.subtitle}),n.children)}},507:function(n,e,t){"use strict";t.r(e);var i,r=t(0),o=t.n(r),a=t(45),l=t(39),c=t(9),d=t(73),s=l.d.h1(i||(i=Object(a.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(c.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),p=Object(d.a)(s);e.default=function(n){return o.a.createElement(p,{className:"isoComponentTitle"},n.children)}},508:function(n,e,t){"use strict";t.r(e);var i,r=t(0),o=t.n(r),a=t(45),l=t(39),c=t(9),d=t(73),s=l.d.div(i||(i=Object(a.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"0":"10px"}),(function(n){return"rtl"===n["data-rtl"]?"10px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"70px"}),(function(n){return"rtl"===n["data-rtl"]?"70px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"right":"left"}),(function(n){return"rtl"===n["data-rtl"]?"0":"295px"}),(function(n){return"rtl"===n["data-rtl"]?"295px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"70px"}),(function(n){return"rtl"===n["data-rtl"]?"70px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"}),(function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"}),(function(n){return"rtl"===n["data-rtl"]?"0":"8px"}),(function(n){return"rtl"===n["data-rtl"]?"8px":"0"}),Object(c.palette)("secondary",1),(function(n){return"rtl"===n["data-rtl"]?"auto":"6px"}),(function(n){return"rtl"===n["data-rtl"]?"6px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"15px"}),(function(n){return"rtl"===n["data-rtl"]?"15px":"0"}),(function(n){return n["data-rtl"],"0"}),(function(n){return n["data-rtl"],"0"})),p=Object(d.a)(s);e.default=function(n){return o.a.createElement(p,{className:"isoExampleWrapper",style:n.style},n.children)}},529:function(n,e,t){"use strict";t(557);var i=t(210);e.a=function(n,e,t){i.a[n]({message:e,description:t})}},650:function(n,e,t){"use strict";t.d(e,"c",(function(){return r.a})),t.d(e,"a",(function(){return x})),t.d(e,"b",(function(){return v}));var i,r=t(529),o=(t(158),t(75)),a=t(119),l=t(0),c=t.n(l),d=t(627),s=t(45),p=t(39),f=t(49),u=t(73),h=p.d.div(i||(i=Object(s.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 160px;\n\n  .ant-btn {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: ",";\n    ",";\n\n    &:empty {\n      visibility: visible;\n    }\n\n    &:last-child {\n      margin: 0;\n    }\n\n    &:nth-child(n + 6) {\n      margin-top: 15px;\n    }\n\n    &:nth-child(5n) {\n      margin-right: 0;\n      margin-left: 0;\n    }\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(f.a)("3px")),g=Object(u.a)(h),x=function(n){var e=n.colors,t=n.seectedColor,i=n.changeColor,r=c.a.useState(!1),l=Object(a.a)(r,2),s=l[0],p=l[1];return c.a.createElement(d.a,{content:c.a.createElement(g,{className:"isoColorOptions"},e.map((function(n,e){var t={background:n};return c.a.createElement(o.a,{key:e,onClick:function(){p(!1),i(e)},style:t})}))),trigger:"click",visible:s,onVisibleChange:function(){p((function(n){return!n}))}},c.a.createElement(o.a,{style:{backgroundColor:e[t]},className:"isoColorChooser"}))},m=t(1),b=t(499),w=t(502),y=t(120);function v(n){var e=c.a.useState({value:n.value,editable:!1}),t=Object(a.a)(e,2),i=t[0],r=t[1];function o(){r(Object(m.a)(Object(m.a)({},i),{},{editable:!1})),n.onChange&&n.onChange(n.itemKey,i.value)}var l=i.value,d=i.editable;return c.a.createElement("div",{className:"isoNoteContent"},d?c.a.createElement("div",{className:"isoNoteEditWrapper"},c.a.createElement(y.c,{rows:3,value:l,onChange:function(n){var e=n.target.value;r(Object(m.a)(Object(m.a)({},i),{},{value:e}))},onPressEnter:o}),c.a.createElement(b.a,{className:"isoNoteEditIcon",onClick:o})):c.a.createElement("p",{className:"isoNoteTextWrapper",onClick:function(){r(Object(m.a)(Object(m.a)({},i),{},{editable:!0}))}},l||" ",c.a.createElement(w.a,{className:"isoNoteEditIcon"})))}}}]);
//# sourceMappingURL=103.e84ccca7.chunk.js.map