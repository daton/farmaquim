(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[128],{2011:function(e,t,a){},2495:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(60),s=a(61),o=a(221),r=a(198),l=a(197),c=a(0),h=a.n(c),u=a(81),p=a(1996),x=a(2007),m=a(828),d=a(2525),g=a(185),b={className:"isoCardBoxLayout",autoSize:!0,verticalCompact:!0,cols:{lg:96,md:96,sm:96,xs:96,xxs:96},breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:200},draggableHandle:".isoDragBox",isResizable:!0,rowHeight:1,margin:[0,0]},z=10,v=10,B=function(e,t){var a=-1;return e.forEach((function(e,n){e.uid.toString()===t.toString()&&(a=n)})),a},y=(a(2009),a(2010),a(2011),g.a.deleteBox),f=g.a.saveBox,C=Object(p.WidthProvider)(p.Responsive),j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onLayoutChange=n.onLayoutChange.bind(Object(o.a)(n)),n.breakPointChange=n.breakPointChange.bind(Object(o.a)(n)),n.autoHeight=n.autoHeight.bind(Object(o.a)(n)),n.state={breakpoint:"lg"},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){this.setState({allBox:this.props.allBox})}},{key:"componentWillReceiveProps",value:function(e){e.reload&&this.setState({allBox:e.allBox})}},{key:"onLayoutChange",value:function(e){var t=this,a=this.state.allBox;e.forEach((function(e){var n=B(a,e.i);if(-1!==n){var i=e.x,s=e.y,o=e.h,r=e.w,l=e.i;a[n].size[t.state.breakpoint]={x:i,y:s,h:o,w:r,i:l}}})),this.setState({allBox:a}),this.props.saveBox(a)}},{key:"breakPointChange",value:function(e){this.setState({breakpoint:e})}},{key:"autoHeight",value:function(e,t){var a=t.height,n=this.state,i=n.allBox,s=n.breakpoint,o=this;0!==a&&(i.map((function(t){var n=B(i,e);return i[n].size[s].h!==Math.ceil(a/b.rowHeight)&&(i[n].size[s].h=Math.ceil(a/b.rowHeight)),null})),setTimeout((function(){o.setState({allBox:i})}),1))}},{key:"render",value:function(){var e=this,t=this.state.allBox,a=this.props.deleteBox,i=function(e){var t=[],a=[],i=[],s=[],o=[];return e.forEach((function(e){t.push(Object(n.a)(Object(n.a)({},e),{},{x:parseInt(e.size.md.x,10),y:parseInt(e.size.md.y,10),h:parseInt(e.size.md.h,10),w:parseInt(e.size.md.w,10),i:e.size.md.i.toString()})),a.push(Object(n.a)(Object(n.a)({},e),{},{x:parseInt(e.size.lg.x,10),y:parseInt(e.size.lg.y,10),h:parseInt(e.size.lg.h,10),w:parseInt(e.size.lg.w,10),i:e.size.lg.i.toString()})),i.push(Object(n.a)(Object(n.a)({},e),{},{x:parseInt(e.size.sm.x,10),y:parseInt(e.size.sm.y,10),h:parseInt(e.size.sm.h,10),w:parseInt(e.size.sm.w,10),i:e.size.sm.i.toString()})),s.push(Object(n.a)(Object(n.a)({},e),{},{x:parseInt(e.size.xs.x,10),y:parseInt(e.size.xs.y,10),h:parseInt(e.size.xs.h,10),w:parseInt(e.size.xs.w,10),i:e.size.xs.i.toString()})),o.push(Object(n.a)(Object(n.a)({},e),{},{x:parseInt(e.size.xxs.x,10),y:parseInt(e.size.xxs.y,10),h:parseInt(e.size.xxs.h,10),w:parseInt(e.size.xxs.w,10),i:e.size.xxs.i.toString()}))})),{md:t,lg:a,sm:i,xs:s,xxs:o}}(t),s=Object(n.a)(Object(n.a)({},b),{},{layouts:i,onDragStop:this.onLayoutChange,onResizeStop:this.onLayoutChange,onBreakpointChange:this.breakPointChange});return h.a.createElement("div",{className:"isoCardBoxContentWrapper"},h.a.createElement(C,s,i.md.map((function(t){return h.a.createElement("div",{className:"isomorphicSingleCardHolder",key:t.i},h.a.createElement(x.ReactElementResize,{debounceTimeout:200,onResize:function(a){e.autoHeight(t.i,a)}},(function(e){return h.a.createElement("div",{className:"isomorphicSingleCard",style:{paddingRight:"".concat(Math.ceil(z),"px"),paddingBottom:"".concat(Math.ceil(v),"px")}},h.a.createElement("div",{className:"isoCardBox"},h.a.createElement("div",{className:"isoCardBoxHeader"},h.a.createElement("h3",null,t.title),h.a.createElement("div",{className:"isoCardControl"},h.a.createElement("button",{className:"isoDeleteBtn",onClick:function(){return a(t.i)}},h.a.createElement(m.a,null)),h.a.createElement("button",{className:"isoDragBox",type:"button"},h.a.createElement(d.a,null)))),h.a.createElement("div",{className:"isoCardBoxBody"},h.a.createElement("p",null,t.content),t.reactComponent?h.a.createElement(t.reactComponent,null):null)))})))}))))}}]),a}(c.Component);t.default=Object(u.b)((function(e){return{allBox:e.Box.allBox,reload:e.Box.reload}}),{saveBox:f,deleteBox:y})(j)}}]);
//# sourceMappingURL=128.eab002fd.chunk.js.map