"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=r(c)===c&&n(c)!==c,s=i,i=n(c)===c&&r(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return F},_:function(){return s},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=s(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:`${t}-${l}-${a}`,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:l().object.isRequired,alt:C},z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],O=new Set;let I,T;const $=function(e){let{as:t="div",image:n,style:l,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=s(e,z);const{width:y,height:b,layout:v}=n,w=c(y,b,v),{style:x,className:E}=w,k=s(w,j),N=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{I||(I=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(S);if(T&&O.has(S))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;N.current&&(N.current.innerHTML=a(i({isLoading:!0,isLoaded:O.has(S),image:n},h)),O.has(S)||(t=requestAnimationFrame((()=>{N.current&&(r=s(N.current,S,O,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(S)&&T&&(N.current.innerHTML=T(i({isLoading:O.has(S),isLoaded:O.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},k,{style:i({},x,l,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:N,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)($,e):null}));_.propTypes=L,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=s(t,q);return l&&console.warn(l),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const R=P((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=s(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:w,height:C,layout:L,images:z,placeholder:j,backgroundColor:O}=o,I=c(w,C,L),{style:T,className:$}=I,_=s(I,N),q={fallback:void 0,sources:[]};return z.fallback&&(q.fallback=i({},z.fallback,{srcSet:z.fallback.srcSet?S(z.fallback.srcSet):void 0})),z.sources&&(q.sources=z.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},_,{style:i({},T,l,{backgroundColor:h}),className:`${$}${a?` ${a}`:""}`}),r.createElement(g,{layout:L,width:w,height:C},r.createElement(x,i({},u(j,!1,L,w,C,O,y,b))),r.createElement(E,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===m,!1,q,m,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},A=new Set(["fixed","fullWidth","constrained"]),W={src:l().string.isRequired,alt:C,width:M,height:M,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=W;const F=P(_);F.displayName="StaticImage",F.propTypes=W},6983:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1883),l=a(5434),i=a(3750);var s=()=>{const e="undefined"!=typeof window&&JSON.parse(localStorage.getItem("dark")||!1),{0:t,1:a}=(0,r.useState)(e);return r.createElement("button",{className:"h-auto group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/20 dark:hover:ring-white/30",onClick:()=>{const e=document.querySelector("body");!0===t?(e.classList.remove("dark"),localStorage.setItem("dark",!1),a(!1)):(e.classList.add("dark"),localStorage.setItem("dark",!0),a(!0))}},t?r.createElement(l.Dq,{className:"w-6 h-6 inline-block text-white/30 mr-2/"}):r.createElement(i.jQg,{className:"w-6 h-6 inline-block mr-2/"}))},o=a(8032);var c=e=>{let{title:t}=e;return r.createElement("footer",{className:"mt-8 md:mt-16 lg:mt-32 flex-none"},r.createElement("div",{className:"sm:px-8"},r.createElement("div",{className:"mx-auto w-full max-w-7xl lg:px-8"},r.createElement("div",{className:"border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"},r.createElement("div",{className:"relative px-4 sm:px-8 lg:px-12"},r.createElement("div",{className:"mx-auto max-w-2xl lg:max-w-5xl"},r.createElement("div",{className:"flex flex-col items-center justify-between gap-6 sm:flex-row"},r.createElement("div",{className:"flex flex-wrap justify-center items-center  gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"},r.createElement("div",{className:"flex rounded-full border border-zinc-700 dark:border-zinc-50 p-1"},r.createElement(o.S,{className:"rounded-full",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.jpeg",width:30,height:30,quality:95,alt:"Profile picture",__imageData:a(3992)})),r.createElement(n.Link,{className:"dark:text-white text-2xl font-bold ml-2 text-center",to:"/"},t)),r.createElement("p",{className:"text-sm text-zinc-400 dark:text-zinc-500 text-center"},"My views shared here are not endorsed by my employers or associates."))))))))};var d=e=>{let{location:t,title:a,children:l}=e;const i="/"===t.pathname;let o;return o=i?r.createElement(r.Fragment,null):r.createElement(n.Link,{className:"dark:text-white text-2xl font-bold",to:"/"},a),r.createElement("div",{className:"flex h-full bg-zinc-50 dark:bg-black","data-is-root-path":i},r.createElement("div",{className:"flex w-full"},r.createElement("div",{className:"fixed inset-0 flex justify-center sm:px-8"},r.createElement("div",{className:"flex w-full max-w-7xl lg:px-8"},r.createElement("div",{className:"w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"}))),r.createElement("div",{className:"relative flex w-full flex-col"},r.createElement("header",{className:"relative z-50 flex flex-none flex-col"},r.createElement("div",{className:"top-0 z-10 h-16 pt-6"},r.createElement("div",{className:"sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"},r.createElement("div",{className:"mx-auto w-full max-w-7xl lg:px-8"},r.createElement("div",{className:"relative px-4 sm:px-8 lg:px-12"},r.createElement("div",{className:"mx-auto max-w-2xl lg:max-w-5xl"},r.createElement("div",{className:"relative flex gap-4"},r.createElement("div",{className:"flex flex-1 px-2 py-1"},o),r.createElement(s,{className:"flex justify-end md:flex-1"})))))))),r.createElement("main",{className:"flex flex-col justify-center mt-8"},l),r.createElement(c,{title:a}))))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t,a,l;let{description:i,pageTitle:s,children:o}=e;const{site:c}=(0,n.useStaticQuery)("2841359383"),d=i||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,s?`${u} | ${s}`:u),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:u}),r.createElement("meta",{name:"twitter:description",content:d}),o)}},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function o(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function c(e){return function(t){return r.createElement(d,i({attr:i({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var a,n=e.attr,l=e.size,o=e.title,c=s(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},3992:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/1ea90e27012d487af4911e4fb694f868/bff39/profile-pic.jpg","srcSet":"/static/1ea90e27012d487af4911e4fb694f868/bff39/profile-pic.jpg 30w,\\n/static/1ea90e27012d487af4911e4fb694f868/22a5a/profile-pic.jpg 60w","sizes":"30px"},"sources":[{"srcSet":"/static/1ea90e27012d487af4911e4fb694f868/7331c/profile-pic.avif 30w,\\n/static/1ea90e27012d487af4911e4fb694f868/fc876/profile-pic.avif 60w","type":"image/avif","sizes":"30px"},{"srcSet":"/static/1ea90e27012d487af4911e4fb694f868/9694d/profile-pic.webp 30w,\\n/static/1ea90e27012d487af4911e4fb694f868/79de8/profile-pic.webp 60w","type":"image/webp","sizes":"30px"}]},"width":30,"height":30}')}}]);
//# sourceMappingURL=commons-1f8b9427e16133c130cd.js.map