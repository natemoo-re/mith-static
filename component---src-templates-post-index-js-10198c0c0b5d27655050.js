(self.webpackChunkmith_static=self.webpackChunkmith_static||[]).push([[647],{3364:function(e,t,r){"use strict";r.d(t,{G:function(){return O}});var n=r(1878),a=r(5697),o=r.n(a),s=r(7294);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=m(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var b=!1;try{b=!0}catch(v){}function d(e){return n.Qc.icon?n.Qc.icon(e):null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?i({},e,t):{}}function O(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),a=r.icon,o=r.mask,s=r.symbol,l=r.className,c=r.title,m=r.titleId,y=d(a),v=g("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,s=e.border,l=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,m=(i(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":s,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),i(t,"fa-rotate-".concat(f),null!=f&&0!==f),i(t,"fa-pull-".concat(p),null!=p),i(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),p(l.split(" ")))),w=g("transform","string"==typeof r.transform?n.Qc.transform(r.transform):r.transform),E=g("mask",d(o)),j=(0,n.qv)(y,u({},v,{},w,{},E,{symbol:s,title:c,titleId:m}));if(!j)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var N=j.abstract,x={ref:t};return Object.keys(r).forEach((function(e){O.defaultProps.hasOwnProperty(e)||(x[e]=r[e])})),h(N[0],x)}O.displayName="FontAwesomeIcon",O.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},O.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),s=n.style,l=void 0===s?{}:s,i=f(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},l),t.apply(void 0,[r.tag,u({},o.attrs,{},i)].concat(p(a)))}.bind(null,s.createElement)},1097:function(e,t,r){"use strict";var n=r(5444),a=r(7294);t.Z=function(e){var t=e.count,r=e.path;return a.createElement("section",{className:"pagination-wrap"},a.createElement("ul",{className:"pagination"},Array.from({length:t},(function(e,t){return a.createElement("li",{className:"page-link"},a.createElement(n.rU,{activeClassName:"active",className:"page-link",key:"pagination-number"+(t+1),to:"/"+r+"/"+(0===t?"":t+1)},t+1))}))))}},2682:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(5444),o=r(3364),s=r(378),l=r(1097),i=r(7487);t.default=function(e){var t=e.data,r=t.allPostsJson.nodes,c=t.allPostsJson.pageInfo.pageCount;return n.createElement(s.Z,null,n.createElement(i.Z,{title:"MITH News"}),n.createElement("div",{className:"page-news"},n.createElement("section",{className:"posts news"},n.createElement("h1",{className:"page-title"},"News  ",n.createElement("a",{href:"/news/feed.xml",className:"icon-rss"},n.createElement(o.G,{title:"News RSS Feed",icon:"rss"}))),r.map((function(e){var r="/news/"+e.slug,o=e.slug+".md",s=t.allMarkdownRemark.nodes.find((function(e){return e.fileAbsolutePath.match(o)}));if(!s)throw new Error("missing markdown post for slug "+e.slug);return n.createElement("article",{className:"post news-post",key:"news-"+e.id},n.createElement("h2",{className:"post-title"},n.createElement(a.rU,{to:r},e.post_title)),n.createElement("div",{className:"meta"},"by ",n.createElement("span",{className:"author"},e.author_name)," ","on ",n.createElement("time",null,e.post_date)),n.createElement("div",{className:"excerpt"},s.excerpt,n.createElement(a.rU,{to:r,className:"read-more"},"continue reading")))}))),n.createElement(l.Z,{count:c,path:"news"})))}}}]);
//# sourceMappingURL=component---src-templates-post-index-js-10198c0c0b5d27655050.js.map