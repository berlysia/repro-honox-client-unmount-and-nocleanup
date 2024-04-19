const Y="modulepreload",ee=function(e){return"/"+e},L={},R=function(t,a,r){let s=Promise.resolve();if(a&&a.length>0){const l=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),u=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.all(a.map(c=>{if(c=ee(c),c in L)return;L[c]=!0;const v=c.endsWith(".css"),f=v?'[rel="stylesheet"]':"";if(!!r)for(let g=l.length-1;g>=0;g--){const h=l[g];if(h.href===c&&(!v||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const o=document.createElement("link");if(o.rel=v?"stylesheet":Y,v||(o.as="script",o.crossOrigin=""),o.href=c,u&&o.setAttribute("nonce",u),document.head.appendChild(o),v)return new Promise((g,h)=>{o.addEventListener("load",g),o.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(l=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=l,window.dispatchEvent(n),!n.defaultPrevented)throw l})};var te=Symbol("RENDERER"),V=Symbol("ERROR_HANDLER"),m=Symbol("STASH"),re=e=>{e&&"className"in e&&(e.class=e.className,delete e.className)},F=(e,t,a)=>{typeof e=="string"&&re(t);let r;return t&&"children"in t?(r=t.children,delete t.children):r=[],{tag:e,props:t,key:a,children:Array.isArray(r)?r:[r]}},ae=e=>F("",e,void 0),se=e=>({value:t,children:a})=>{const r=ae({children:[{tag:()=>{e.push(t)}},...a,{tag:()=>{e.pop()}}]});return r[V]=s=>{throw e.pop(),s},r},ne=e=>{const t=[e],a={values:t,Provider:se(t)};return k.push(a),a},k=[],le=e=>e.values.at(-1),ie={Change:"Input",DoubleClick:"DblClick"},ce={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},y=[],P=void 0,d=e=>Array.isArray(e),M=e=>{const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,a,r]=t;return[(ie[a]||a).toLowerCase(),!!r]}},fe=(e,t,a)=>{t||(t={});for(const[r,s]of Object.entries(t))if(!a||a[r]!==s){const l=M(r);if(l){if(typeof s!="function")throw new Error(`Event handler for "${r}" is not a function`);a&&e.removeEventListener(l[0],a[r],l[1]),e.addEventListener(l[0],s,l[1])}else if(r==="dangerouslySetInnerHTML"&&s)e.innerHTML=s.__html;else if(r==="ref")typeof s=="function"?s(e):"current"in s&&(s.current=e);else if(r==="style")typeof s=="string"?e.style.cssText=s:(e.style.cssText="",Object.assign(e.style,s));else{const n=e.nodeName;if(r==="value"){if(n==="INPUT"||n==="TEXTAREA"||n==="SELECT"){if(e.value=s==null||s===!1?null:s,n==="TEXTAREA"){e.textContent=s;continue}else if(n==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(r==="checked"&&n==="INPUT"||r==="selected"&&n==="OPTION")&&(e[r]=s);s==null||s===!1?e.removeAttribute(r):s===!0?e.setAttribute(r,""):typeof s=="string"||typeof s=="number"?e.setAttribute(r,s):e.setAttribute(r,s.toString())}}if(a){for(const[r,s]of Object.entries(a))if(!(r in t)){const l=M(r);l?e.removeEventListener(l[0],s,l[1]):r==="ref"?typeof s=="function"?s(null):s.current=null:e.removeAttribute(r)}}},oe=(e,t)=>{if(t.s){const r=t.s;return t.s=void 0,r}t[m][0]=0,y.push([e,t]);const a=t.tag[te]||t.tag;try{return[a.call(null,{...t.props,children:t.children})]}finally{y.pop()}},H=(e,t,a,r,s)=>{var l;r.push(...e.vR),typeof e.tag=="function"&&((l=e[m][1][E])==null||l.forEach(n=>s.push(n))),e.vC.forEach(n=>{d(n)?a.push(n):typeof n.tag=="function"||n.tag===""?(n.c=t,H(n,t,a,r,s)):(a.push(n),r.push(...n.vR))})},D=e=>{if(e){if(e.e)return e.e}else return null;if(e.vC)for(let t=0,a=e.vC.length;t<a;t++){const r=D(e.vC[t]);if(r)return r}return D(e.nN)},U=e=>{var t,a,r,s;d(e)||((a=(t=e[m])==null?void 0:t[1][E])==null||a.forEach(l=>{var n;return(n=l[2])==null?void 0:n.call(l)}),(r=e.vC)==null||r.forEach(U)),(s=e.e)==null||s.remove(),e.tag=void 0},q=(e,t)=>{e.tag!==void 0&&(e.c=t,B(e,t))},ue=(e,t)=>{d(e)?t.textContent=e[0]:B(e,t)},j=(e,t)=>{if(t){for(let a=0,r=e.length;a<r;a++)if(e[a]===t)return a}},B=(e,t)=>{var u;const a=[],r=[],s=[];H(e,t,a,r,s);const l=t.childNodes;let n=j(l,D(e.nN))??j(l,(u=a.find(c=>c.e))==null?void 0:u.e)??l.length;for(let c=0,v=a.length;c<v;c++,n++){const f=a[c];let i;d(f)?(f.e&&f[1]&&(f.e.textContent=f[0]),f[1]=!1,i=f.e||(f.e=document.createTextNode(f[0]))):(i=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),fe(i,f.props,f.pP),ue(f,i)),l[n]!==i&&l[n-1]!==f.e&&t.insertBefore(i,l[n]||null)}r.forEach(U),s.forEach(([,c])=>c==null?void 0:c()),requestAnimationFrame(()=>{s.forEach(([,,,c])=>c==null?void 0:c())})},C=(e,t,a,r)=>{var v;if(t.tag===void 0)return;let s;r||(r=typeof t.tag=="function"?oe(e,t):t.children),((v=r[0])==null?void 0:v.tag)===""&&(s=r[0][V],a||(a=t));const l=t.vC?[...t.vC]:[],n=[],u=[];let c;try{r.flat().forEach(f=>{let i=z(f);if(i){c&&(c.nN=i),c=i,typeof i.tag=="function"&&k.length>0&&(i[m][2]=k.map(h=>[h,h.values.at(-1)]));let o;const g=l.findIndex(h=>h.key===i.key);if(g!==-1&&(o=l[g],l.splice(g,1)),o)d(i)?d(o)?(o[0]!==i[0]&&(o[0]=i[0],o[1]=!0),i=o):u.push(o):o.tag!==i.tag?u.push(o):(o.pP=o.props,o.props=i.props,o.children=i.children,i=o);else if(!d(i)&&P){const h=le(P);h&&(i.n=h)}d(i)||C(e,i,a),n.push(i)}}),t.vC=n,u.push(...l),t.vR=u}catch(f){if(s){const i=s(f,()=>N([0,!1,e[2]],a));if(i){e[0]===1?e[1]=!0:C(e,t,a,[i]);return}}throw f}},z=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return[e.toString(),!0];if(typeof e.tag=="function")e[m]=[0,[]];else{const t=ce[e.tag];t&&(e.n=t,P||(P=ne("")),e.children=[{tag:P.Provider,props:{value:t},children:e.children}])}return e}},W=(e,t,a)=>{e.c===t&&(e.c=a,e.vC.forEach(r=>W(r,t,a)))},$=(e,t)=>{var a,r;(a=t[m][2])==null||a.forEach(([s,l])=>{s.values.push(l)}),C(e,t,void 0),(r=t[m][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&q(t,t.c)},w=new WeakMap,N=async(e,t)=>{const a=w.get(t);a&&a[0](void 0);let r;const s=new Promise(n=>r=n);w.set(t,[r,()=>{e[2]?e[2](e,t,n=>{$(n,t)}).then(()=>r(t)):($(e,t),r(t))}]),await Promise.resolve();const l=w.get(t);return l&&(w.delete(t),l[1]()),s},ve=(e,t)=>{const a=z({tag:"",children:[e]});C([],a,void 0);const r=document.createDocumentFragment();q(a,r),W(a,r,t),t.replaceChildren(r)},_=0,E=1,O=3,S=new WeakMap,he=(e,t)=>!e||!t||e.length!==t.length||t.some((a,r)=>a!==e[r]),me=void 0,x=[],Z=e=>{var t;e.vC&&(e.s=e.vC,e.vC=void 0),(t=e.s)==null||t.forEach(Z)},Ce=e=>{var n;const t=()=>typeof e=="function"?e():e,a=y.at(-1);if(!a)return[t(),()=>{}];const[,r]=a,s=(n=r[m][1])[_]||(n[_]=[]),l=r[m][0]++;return s[l]||(s[l]=[t(),u=>{const c=me,v=s[l];if(typeof u=="function"&&(u=u(v[0])),u!==v[0])if(v[0]=u,x.length){const f=x.at(-1);N([f,!1,c],r).then(i=>{if(!i||f!==2)return;const o=i.vC;(()=>{setTimeout(()=>{if(o!==i.vC)return;const h=Object.assign({},i);h.vC=void 0,C([],h,void 0),Z(h),i.s=h.s,N([0,!1,c],i)})})()})}else N([0,!1,c],r)}])},ge=(e,t,a)=>{var v;const r=y.at(-1);if(!r)return;const[,s]=r,l=(v=s[m][1])[E]||(v[E]=[]),n=s[m][0]++,[u,,c]=l[n]||(l[n]=[]);if(he(u,a)){c&&c();const f=()=>{i[e]=void 0,i[2]=t()},i=[a,void 0,void 0,void 0];i[e]=f,l[n]=i}},we=(e,t)=>ge(3,e,t),Ne=e=>{var u;const t=S.get(e);if(t){if(t.length===2)throw t[1];return t[0]}e.then(c=>S.set(e,[c]),c=>S.set(e,[void 0,c]));const a=y.at(-1);if(!a)throw e;const[,r]=a,s=(u=r[m][1])[O]||(u[O]=[]),l=r[m][0]++;e.then(c=>{s[l]=[c]},c=>{s[l]=[void 0,c]});const n=s[l];if(n){if(n.length===2)throw n[1];return n[0]}throw e};const de="component-name",pe="data-serialized-props",Ee="data-hono-template",ye=async e=>{const t=(e==null?void 0:e.ISLAND_FILES)??{...Object.assign({"/app/islands/wrapper.tsx":()=>R(()=>import("./wrapper-CR3VZizp.js"),[])}),...Object.assign({})},a=(e==null?void 0:e.island_root)??"/app",r=async l=>{const n=Object.keys(t).map(async u=>{const c=u.replace(a,""),v=l.querySelectorAll(`[${de}="${c}"]:not([data-hono-hydrated])`);if(v){const f=Array.from(v).map(async i=>{var I;i.setAttribute("data-hono-hydrated","true");const o=t[u],h=await(await o()).default,X=(I=i.attributes.getNamedItem(pe))==null?void 0:I.value,T=JSON.parse(X??"{}"),J=(e==null?void 0:e.hydrate)??ve,b=(e==null?void 0:e.createElement)??F,p=i.childNodes[i.childNodes.length-1];if((p==null?void 0:p.nodeName)==="TEMPLATE"&&(p==null?void 0:p.attributes.getNamedItem(Ee))!==null){let A=e==null?void 0:e.createChildren;if(!A){const{buildCreateChildrenFn:K}=await R(()=>import("./runtime--6PqzyyX.js"),[]);A=K(b,async Q=>(await t[`${a}${Q}`]()).default)}T.children=await A(p.content.childNodes)}const G=await b(h,T);await J(G,i)});await Promise.all(f)}});await Promise.all(n)},s=(e==null?void 0:e.triggerHydration)??(async l=>{if(document.querySelector('template[id^="H:"], template[id^="E:"]')){const{hydrateComponentHonoSuspense:n}=await R(()=>import("./runtime--6PqzyyX.js"),[]);await n(l)}await l(document)});await(s==null?void 0:s(r))};ye();export{de as C,te as D,ae as F,we as a,V as b,Ne as c,pe as d,Ee as e,F as j,Ce as u};
