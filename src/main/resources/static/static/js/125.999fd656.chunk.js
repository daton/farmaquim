(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[125],{1424:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var o=n(13),i=n(43);function a(e){var t,n=function(n){return function(){t=null,e.apply(void 0,Object(o.a)(n))}},a=function(){if(null==t){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];t=Object(i.a)(n(o))}};return a.cancel=function(){return i.a.cancel(t)},a}function r(){return function(e,t,n){var o=n.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return o;var n=a(o.bind(this));return i=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),i=!1,n}}}}},2025:function(e,t,n){},2490:function(e,t,n){"use strict";n.r(t);n(118),n(2025);var o=n(5),i=n(7),a=n(17),r=n(18),l=n(21),f=n(22),c=n(20),u=n(0),s=n.n(u),p=n(11),d=n.n(p),h=n(59),m=n(206),v=n(83),g=n(1424),b=n(84);function y(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function x(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function E(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var w=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],O=[];function P(e,t){if(e){var n=O.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},O.push(n),w.forEach((function(t){n.eventHandlers[t]=Object(b.a)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function T(e){var t=O.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(O=O.filter((function(e){return e!==t})),w.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var N,j=function(e,t,n,o){var i,a=arguments.length,r=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};function S(){return"undefined"!==typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(N||(N={}));var A=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.apply(this,arguments)).state={status:N.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,n=e.props.offsetTop;return void 0===t&&void 0===n&&(n=0),n},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,o=t.lastAffix,i=e.props.onChange,a=e.getTargetFunc();if(n===N.Prepare&&e.fixedNode&&e.placeholderNode&&a){var r=e.getOffsetTop(),l=e.getOffsetBottom(),f=a();if(f){var c={status:N.None},u=y(f),s=y(e.placeholderNode),p=x(s,u,r),d=E(s,u,l);void 0!==p?(c.affixStyle={position:"fixed",top:p,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}):void 0!==d&&(c.affixStyle={position:"fixed",bottom:d,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}),c.lastAffix=!!c.affixStyle,i&&o!==c.lastAffix&&i(c.lastAffix),e.setState(c)}}},e.prepareMeasure=function(){e.setState({status:N.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,n=e.state,a=n.affixStyle,r=n.placeholderStyle,l=e.props,f=l.prefixCls,c=l.children,s=d()(Object(i.a)({},t("affix",f),!!a)),p=Object(h.a)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return u.createElement(m.a,{onResize:function(){e.updatePosition()}},u.createElement("div",Object(o.a)({},p,{ref:e.savePlaceholderNode}),a&&u.createElement("div",{style:r,"aria-hidden":"true"}),u.createElement("div",{className:s,ref:e.saveFixedNode,style:a},u.createElement(m.a,{onResize:function(){e.updatePosition()}},c))))},e}return Object(r.a)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||S}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){P(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),o=null;n&&(o=n()||null),t!==o&&(T(this),o&&(P(o,this),this.updatePosition()),this.setState({prevTarget:o})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),T(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),o=this.getOffsetBottom(),i=e();if(i&&this.placeholderNode){var a=y(i),r=y(this.placeholderNode),l=x(r,a,n),f=E(r,a,o);if(void 0!==l&&t.top===l||void 0!==f&&t.bottom===f)return}}this.prepareMeasure()}}]),n}(u.Component);A.contextType=v.b,j([Object(g.b)()],A.prototype,"updatePosition",null),j([Object(g.b)()],A.prototype,"lazyUpdatePosition",null);var B=A,C=(n(158),n(75));t.default=function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null," Basic Affix "),s.a.createElement(B,null,s.a.createElement(C.a,{type:"primary"},"Affix top")),s.a.createElement("br",null),s.a.createElement(B,{offsetBottom:0},s.a.createElement(C.a,{type:"primary"},"Affix bottom")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Containter to Scroll Affix "),s.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},s.a.createElement("div",{className:"background"},s.a.createElement(B,{target:function(){return e.container}},s.a.createElement(C.a,{type:"primary"},"Fixed at the top of container")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Affix with Callback "),s.a.createElement(B,{offsetTop:120,onChange:function(e){}},s.a.createElement(C.a,null,"120px to affix top")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))}}}]);
//# sourceMappingURL=125.999fd656.chunk.js.map