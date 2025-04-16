(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ou(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ls=[],En=()=>{},OE=()=>!1,xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),au=t=>t.startsWith("onUpdate:"),vt=Object.assign,lu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},DE=Object.prototype.hasOwnProperty,Ce=(t,e)=>DE.call(t,e),re=Array.isArray,cs=t=>Ma(t)==="[object Map]",vg=t=>Ma(t)==="[object Set]",le=t=>typeof t=="function",ze=t=>typeof t=="string",fi=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Eg=t=>(Be(t)||le(t))&&le(t.then)&&le(t.catch),Tg=Object.prototype.toString,Ma=t=>Tg.call(t),xE=t=>Ma(t).slice(8,-1),Ig=t=>Ma(t)==="[object Object]",cu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,or=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ME=/-(\w)/g,oi=La(t=>t.replace(ME,(e,n)=>n?n.toUpperCase():"")),LE=/\B([A-Z])/g,Wi=La(t=>t.replace(LE,"-$1").toLowerCase()),wg=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cl=La(t=>t?`on${wg(t)}`:""),ei=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ag=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},cc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vf;const Va=()=>vf||(vf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ze(i)?BE(i):uu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ze(t)||Be(t))return t}const VE=/;(?![^(]*\))/g,FE=/:([^]+)/,UE=/\/\*[^]*?\*\//g;function BE(t){const e={};return t.replace(UE,"").split(VE).forEach(n=>{if(n){const i=n.split(FE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function hu(t){let e="";if(ze(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const i=hu(t[n]);i&&(e+=i+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $E="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jE=ou($E);function bg(t){return!!t||t===""}const Cg=t=>!!(t&&t.__v_isRef===!0),Rg=t=>ze(t)?t:t==null?"":re(t)||Be(t)&&(t.toString===Tg||!le(t.toString))?Cg(t)?Rg(t.value):JSON.stringify(t,Sg,2):String(t),Sg=(t,e)=>Cg(e)?Sg(t,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Rl(i,r)+" =>"]=s,n),{})}:vg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rl(n))}:fi(e)?Rl(e):Be(e)&&!re(e)&&!Ig(e)?String(e):e,Rl=(t,e="")=>{var n;return fi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class HE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function WE(){return Lt}let ke;const Sl=new WeakSet;class Pg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Lt&&Lt.active&&Lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sl.has(this)&&(Sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ef(this),Og(this);const e=ke,n=rn;ke=this,rn=!0;try{return this.fn()}finally{Dg(this),ke=e,rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pu(e);this.deps=this.depsTail=void 0,Ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let Ng=0,ar,lr;function kg(t,e=!1){if(t.flags|=8,e){t.next=lr,lr=t;return}t.next=ar,ar=t}function fu(){Ng++}function du(){if(--Ng>0)return;if(lr){let e=lr;for(lr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ar;){let e=ar;for(ar=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Og(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),pu(i),qE(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Cr))return;t.globalVersion=Cr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uc(t)){t.flags&=-3;return}const n=ke,i=rn;ke=t,rn=!0;try{Og(t);const s=t.fn(t._value);(e.version===0||ei(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,rn=i,Dg(t),t.flags&=-3}}function pu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)pu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rn=!0;const Mg=[];function di(){Mg.push(rn),rn=!1}function pi(){const t=Mg.pop();rn=t===void 0?!0:t}function Ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Cr=0;class zE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!rn||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new zE(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Lg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=i)}return n}trigger(e){this.version++,Cr++,this.notify(e)}notify(e){fu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{du()}}}function Lg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Lg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hc=new WeakMap,Pi=Symbol(""),fc=Symbol(""),Rr=Symbol("");function dt(t,e,n){if(rn&&ke){let i=hc.get(t);i||hc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new gu),s.map=i,s.key=n),s.track()}}function Dn(t,e,n,i,s,r){const o=hc.get(t);if(!o){Cr++;return}const l=c=>{c&&c.trigger()};if(fu(),e==="clear")o.forEach(l);else{const c=re(t),u=c&&cu(n);if(c&&n==="length"){const f=Number(i);o.forEach((p,g)=>{(g==="length"||g===Rr||!fi(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Rr)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Pi)),cs(t)&&l(o.get(fc)));break;case"delete":c||(l(o.get(Pi)),cs(t)&&l(o.get(fc)));break;case"set":cs(t)&&l(o.get(Pi));break}}du()}function Zi(t){const e=be(t);return e===t?e:(dt(e,"iterate",Rr),on(t)?e:e.map(At))}function mu(t){return dt(t=be(t),"iterate",Rr),t}const GE={__proto__:null,[Symbol.iterator](){return Pl(this,Symbol.iterator,At)},concat(...t){return Zi(this).concat(...t.map(e=>re(e)?Zi(e):e))},entries(){return Pl(this,"entries",t=>(t[1]=At(t[1]),t))},every(t,e){return Sn(this,"every",t,e,void 0,arguments)},filter(t,e){return Sn(this,"filter",t,e,n=>n.map(At),arguments)},find(t,e){return Sn(this,"find",t,e,At,arguments)},findIndex(t,e){return Sn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Sn(this,"findLast",t,e,At,arguments)},findLastIndex(t,e){return Sn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Sn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nl(this,"includes",t)},indexOf(...t){return Nl(this,"indexOf",t)},join(t){return Zi(this).join(t)},lastIndexOf(...t){return Nl(this,"lastIndexOf",t)},map(t,e){return Sn(this,"map",t,e,void 0,arguments)},pop(){return Qs(this,"pop")},push(...t){return Qs(this,"push",t)},reduce(t,...e){return Tf(this,"reduce",t,e)},reduceRight(t,...e){return Tf(this,"reduceRight",t,e)},shift(){return Qs(this,"shift")},some(t,e){return Sn(this,"some",t,e,void 0,arguments)},splice(...t){return Qs(this,"splice",t)},toReversed(){return Zi(this).toReversed()},toSorted(t){return Zi(this).toSorted(t)},toSpliced(...t){return Zi(this).toSpliced(...t)},unshift(...t){return Qs(this,"unshift",t)},values(){return Pl(this,"values",At)}};function Pl(t,e,n){const i=mu(t),s=i[e]();return i!==t&&!on(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const KE=Array.prototype;function Sn(t,e,n,i,s,r){const o=mu(t),l=o!==t&&!on(t),c=o[e];if(c!==KE[e]){const p=c.apply(t,r);return l?At(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,At(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,u,i);return l&&s?s(f):f}function Tf(t,e,n,i){const s=mu(t);let r=n;return s!==t&&(on(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,At(l),c,t)}),s[e](r,...i)}function Nl(t,e,n){const i=be(t);dt(i,"iterate",Rr);const s=i[e](...n);return(s===-1||s===!1)&&vu(n[0])?(n[0]=be(n[0]),i[e](...n)):s}function Qs(t,e,n=[]){di(),fu();const i=be(t)[e].apply(t,n);return du(),pi(),i}const QE=ou("__proto__,__v_isRef,__isVue"),Vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fi));function YE(t){fi(t)||(t=String(t));const e=be(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Fg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?oT:jg:r?$g:Bg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=re(e);if(!s){let c;if(o&&(c=GE[n]))return c;if(n==="hasOwnProperty")return YE}const l=Reflect.get(e,n,yt(e)?e:i);return(fi(n)?Vg.has(n):QE(n))||(s||dt(e,"get",n),r)?l:yt(l)?o&&cu(n)?l:l.value:Be(l)?s?Wg(l):Fa(l):l}}class Ug extends Fg{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const c=Di(r);if(!on(i)&&!Di(i)&&(r=be(r),i=be(i)),!re(e)&&yt(r)&&!yt(i))return c?!1:(r.value=i,!0)}const o=re(e)&&cu(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,i,yt(e)?e:s);return e===be(s)&&(o?ei(i,r)&&Dn(e,"set",n,i):Dn(e,"add",n,i)),l}deleteProperty(e,n){const i=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Dn(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!fi(n)||!Vg.has(n))&&dt(e,"has",n),i}ownKeys(e){return dt(e,"iterate",re(e)?"length":Pi),Reflect.ownKeys(e)}}class XE extends Fg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const JE=new Ug,ZE=new XE,eT=new Ug(!0);const dc=t=>t,wo=t=>Reflect.getPrototypeOf(t);function tT(t,e,n){return function(...i){const s=this.__v_raw,r=be(s),o=cs(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...i),f=n?dc:e?pc:At;return!e&&dt(r,"iterate",c?fc:Pi),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nT(t,e){const n={get(s){const r=this.__v_raw,o=be(r),l=be(s);t||(ei(s,l)&&dt(o,"get",s),dt(o,"get",l));const{has:c}=wo(o),u=e?dc:t?pc:At;if(c.call(o,s))return u(r.get(s));if(c.call(o,l))return u(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&dt(be(s),"iterate",Pi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=be(r),l=be(s);return t||(ei(s,l)&&dt(o,"has",s),dt(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=be(l),u=e?dc:t?pc:At;return!t&&dt(c,"iterate",Pi),l.forEach((f,p)=>s.call(r,u(f),u(p),o))}};return vt(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){!e&&!on(s)&&!Di(s)&&(s=be(s));const r=be(this);return wo(r).has.call(r,s)||(r.add(s),Dn(r,"add",s,s)),this},set(s,r){!e&&!on(r)&&!Di(r)&&(r=be(r));const o=be(this),{has:l,get:c}=wo(o);let u=l.call(o,s);u||(s=be(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,r),u?ei(r,f)&&Dn(o,"set",s,r):Dn(o,"add",s,r),this},delete(s){const r=be(this),{has:o,get:l}=wo(r);let c=o.call(r,s);c||(s=be(s),c=o.call(r,s)),l&&l.call(r,s);const u=r.delete(s);return c&&Dn(r,"delete",s,void 0),u},clear(){const s=be(this),r=s.size!==0,o=s.clear();return r&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tT(s,t,e)}),n}function _u(t,e){const n=nT(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ce(n,s)&&s in i?n:i,s,r)}const iT={get:_u(!1,!1)},sT={get:_u(!1,!0)},rT={get:_u(!0,!1)};const Bg=new WeakMap,$g=new WeakMap,jg=new WeakMap,oT=new WeakMap;function aT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lT(t){return t.__v_skip||!Object.isExtensible(t)?0:aT(xE(t))}function Fa(t){return Di(t)?t:yu(t,!1,JE,iT,Bg)}function Hg(t){return yu(t,!1,eT,sT,$g)}function Wg(t){return yu(t,!0,ZE,rT,jg)}function yu(t,e,n,i,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=lT(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function cr(t){return Di(t)?cr(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function vu(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function cT(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Ag(t,"__v_skip",!0),t}const At=t=>Be(t)?Fa(t):t,pc=t=>Be(t)?Wg(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function Vo(t){return qg(t,!1)}function uT(t){return qg(t,!0)}function qg(t,e){return yt(t)?t:new hT(t,e)}class hT{constructor(e,n){this.dep=new gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:At(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||on(e)||Di(e);e=i?e:be(e),ei(e,n)&&(this._rawValue=e,this._value=i?e:At(e),this.dep.trigger())}}function Ni(t){return yt(t)?t.value:t}const fT={get:(t,e,n)=>e==="__v_raw"?t:Ni(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function zg(t){return cr(t)?t:new Proxy(t,fT)}class dT{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Cr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return kg(this,!0),!0}get value(){const e=this.dep.track();return xg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pT(t,e,n=!1){let i,s;return le(t)?i=t:(i=t.get,s=t.set),new dT(i,s,n)}const bo={},Ko=new WeakMap;let Ii;function gT(t,e=!1,n=Ii){if(n){let i=Ko.get(n);i||Ko.set(n,i=[]),i.push(t)}}function mT(t,e,n=Ne){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=n,u=B=>s?B:on(B)||s===!1||s===0?xn(B,1):xn(B);let f,p,g,_,R=!1,k=!1;if(yt(t)?(p=()=>t.value,R=on(t)):cr(t)?(p=()=>u(t),R=!0):re(t)?(k=!0,R=t.some(B=>cr(B)||on(B)),p=()=>t.map(B=>{if(yt(B))return B.value;if(cr(B))return u(B);if(le(B))return c?c(B,2):B()})):le(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){di();try{g()}finally{pi()}}const B=Ii;Ii=f;try{return c?c(t,3,[_]):t(_)}finally{Ii=B}}:p=En,e&&s){const B=p,oe=s===!0?1/0:s;p=()=>xn(B(),oe)}const O=WE(),H=()=>{f.stop(),O&&O.active&&lu(O.effects,f)};if(r&&e){const B=e;e=(...oe)=>{B(...oe),H()}}let $=k?new Array(t.length).fill(bo):bo;const j=B=>{if(!(!(f.flags&1)||!f.dirty&&!B))if(e){const oe=f.run();if(s||R||(k?oe.some((ce,w)=>ei(ce,$[w])):ei(oe,$))){g&&g();const ce=Ii;Ii=f;try{const w=[oe,$===bo?void 0:k&&$[0]===bo?[]:$,_];c?c(e,3,w):e(...w),$=oe}finally{Ii=ce}}}else f.run()};return l&&l(j),f=new Pg(p),f.scheduler=o?()=>o(j,!1):j,_=B=>gT(B,!1,f),g=f.onStop=()=>{const B=Ko.get(f);if(B){if(c)c(B,4);else for(const oe of B)oe();Ko.delete(f)}},e?i?j(!0):$=f.run():o?o(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function xn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))xn(t.value,e,n);else if(re(t))for(let i=0;i<t.length;i++)xn(t[i],e,n);else if(vg(t)||cs(t))t.forEach(i=>{xn(i,e,n)});else if(Ig(t)){for(const i in t)xn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&xn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(t,e,n,i){try{return i?t(...i):t()}catch(s){Ua(s,e,n)}}function Tn(t,e,n,i){if(le(t)){const s=qr(t,e,n,i);return s&&Eg(s)&&s.catch(r=>{Ua(r,e,n)}),s}if(re(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Tn(t[r],e,n,i));return s}}function Ua(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(r){di(),qr(r,null,10,[t,c,u]),pi();return}}_T(t,n,s,i,o)}function _T(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let gn=-1;const us=[];let Xn=null,ts=0;const Gg=Promise.resolve();let Qo=null;function Kg(t){const e=Qo||Gg;return t?e.then(this?t.bind(this):t):e}function yT(t){let e=gn+1,n=bt.length;for(;e<n;){const i=e+n>>>1,s=bt[i],r=Sr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Eu(t){if(!(t.flags&1)){const e=Sr(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=Sr(n)?bt.push(t):bt.splice(yT(e),0,t),t.flags|=1,Qg()}}function Qg(){Qo||(Qo=Gg.then(Xg))}function vT(t){re(t)?us.push(...t):Xn&&t.id===-1?Xn.splice(ts+1,0,t):t.flags&1||(us.push(t),t.flags|=1),Qg()}function If(t,e,n=gn+1){for(;n<bt.length;n++){const i=bt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;bt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yg(t){if(us.length){const e=[...new Set(us)].sort((n,i)=>Sr(n)-Sr(i));if(us.length=0,Xn){Xn.push(...e);return}for(Xn=e,ts=0;ts<Xn.length;ts++){const n=Xn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xn=null,ts=0}}const Sr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xg(t){try{for(gn=0;gn<bt.length;gn++){const e=bt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<bt.length;gn++){const e=bt[gn];e&&(e.flags&=-2)}gn=-1,bt.length=0,Yg(),Qo=null,(bt.length||us.length)&&Xg()}}let Wt=null,Jg=null;function Yo(t){const e=Wt;return Wt=t,Jg=t&&t.type.__scopeId||null,e}function ET(t,e=Wt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&kf(-1);const r=Yo(e);let o;try{o=t(...s)}finally{Yo(r),i._d&&kf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function kl(t,e){if(Wt===null)return t;const n=Ha(Wt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,l,c=Ne]=e[s];r&&(le(r)&&(r={mounted:r,updated:r}),r.deep&&xn(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ei(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(di(),Tn(c,n,8,[t.el,l,t,e]),pi())}}const TT=Symbol("_vte"),IT=t=>t.__isTeleport;function Tu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function zr(t,e){return le(t)?vt({name:t.name},e,{setup:t}):t}function Zg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xo(t,e,n,i,s=!1){if(re(t)){t.forEach((R,k)=>Xo(R,e&&(re(e)?e[k]:e),n,i,s));return}if(ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xo(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ha(i.component):i.el,o=s?null:r,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=be(p),_=p===Ne?()=>!1:R=>Ce(g,R);if(u!=null&&u!==c&&(ze(u)?(f[u]=null,_(u)&&(p[u]=null)):yt(u)&&(u.value=null)),le(c))qr(c,l,12,[o,f]);else{const R=ze(c),k=yt(c);if(R||k){const O=()=>{if(t.f){const H=R?_(c)?p[c]:f[c]:c.value;s?re(H)&&lu(H,r):re(H)?H.includes(r)||H.push(r):R?(f[c]=[r],_(c)&&(p[c]=f[c])):(c.value=[r],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,_(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,Mt(O,n)):O()}}}Va().requestIdleCallback;Va().cancelIdleCallback;const ur=t=>!!t.type.__asyncLoader,em=t=>t.type.__isKeepAlive;function wT(t,e){tm(t,"a",e)}function AT(t,e){tm(t,"da",e)}function tm(t,e,n=Ct){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ba(e,i,n),n){let s=n.parent;for(;s&&s.parent;)em(s.parent.vnode)&&bT(i,e,n,s),s=s.parent}}function bT(t,e,n,i){const s=Ba(e,t,i,!0);nm(()=>{lu(i[e],s)},n)}function Ba(t,e,n=Ct,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{di();const l=Gr(n),c=Tn(e,n,t,o);return l(),pi(),c});return i?s.unshift(r):s.push(r),r}}const jn=t=>(e,n=Ct)=>{(!kr||t==="sp")&&Ba(t,(...i)=>e(...i),n)},CT=jn("bm"),RT=jn("m"),ST=jn("bu"),PT=jn("u"),NT=jn("bum"),nm=jn("um"),kT=jn("sp"),OT=jn("rtg"),DT=jn("rtc");function xT(t,e=Ct){Ba("ec",t,e)}const MT=Symbol.for("v-ndc"),gc=t=>t?Am(t)?Ha(t):gc(t.parent):null,hr=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>{Eu(t.update)}),$nextTick:t=>t.n||(t.n=Kg.bind(t.proxy)),$watch:t=>nI.bind(t)}),Ol=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),LT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ol(i,e))return o[e]=1,i[e];if(s!==Ne&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,r[e];if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const f=hr[e];let p,g;if(f)return e==="$attrs"&&dt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ce(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ol(s,e)?(s[e]=n,!0):i!==Ne&&Ce(i,e)?(i[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||t!==Ne&&Ce(t,o)||Ol(e,o)||(l=r[0])&&Ce(l,o)||Ce(i,o)||Ce(hr,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wf(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function VT(t){const e=sm(t),n=t.proxy,i=t.ctx;mc=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:R,activated:k,deactivated:O,beforeDestroy:H,beforeUnmount:$,destroyed:j,unmounted:B,render:oe,renderTracked:ce,renderTriggered:w,errorCaptured:y,serverPrefetch:I,expose:A,inheritAttrs:b,components:S,directives:T,filters:Et}=e;if(u&&FT(u,i,null),o)for(const ge in o){const de=o[ge];le(de)&&(i[ge]=de.bind(n))}if(s){const ge=s.call(n,n);Be(ge)&&(t.data=Fa(ge))}if(mc=!0,r)for(const ge in r){const de=r[ge],Dt=le(de)?de.bind(n,n):le(de.get)?de.get.bind(n,n):En,Qt=!le(de)&&le(de.set)?de.set.bind(n):En,$t=Jt({get:Dt,set:Qt});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>$t.value,set:Fe=>$t.value=Fe})}if(l)for(const ge in l)im(l[ge],i,n,ge);if(c){const ge=le(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(de=>{Fo(de,ge[de])})}f&&Af(f,t,"c");function We(ge,de){re(de)?de.forEach(Dt=>ge(Dt.bind(n))):de&&ge(de.bind(n))}if(We(CT,p),We(RT,g),We(ST,_),We(PT,R),We(wT,k),We(AT,O),We(xT,y),We(DT,ce),We(OT,w),We(NT,$),We(nm,B),We(kT,I),re(A))if(A.length){const ge=t.exposed||(t.exposed={});A.forEach(de=>{Object.defineProperty(ge,de,{get:()=>n[de],set:Dt=>n[de]=Dt})})}else t.exposed||(t.exposed={});oe&&t.render===En&&(t.render=oe),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),T&&(t.directives=T),I&&Zg(t)}function FT(t,e,n=En){re(t)&&(t=_c(t));for(const i in t){const s=t[i];let r;Be(s)?"default"in s?r=Vn(s.from||i,s.default,!0):r=Vn(s.from||i):r=Vn(s),yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Af(t,e,n){Tn(re(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function im(t,e,n,i){let s=i.includes(".")?ym(n,i):()=>n[i];if(ze(t)){const r=e[t];le(r)&&Uo(s,r)}else if(le(t))Uo(s,t.bind(n));else if(Be(t))if(re(t))t.forEach(r=>im(r,e,n,i));else{const r=le(t.handler)?t.handler.bind(n):e[t.handler];le(r)&&Uo(s,r,t)}}function sm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!s.length&&!n&&!i?c=e:(c={},s.length&&s.forEach(u=>Jo(c,u,o,!0)),Jo(c,e,o)),Be(e)&&r.set(e,c),c}function Jo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Jo(t,r,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=UT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const UT={data:bf,props:Cf,emits:Cf,methods:ir,computed:ir,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ir,directives:ir,watch:$T,provide:bf,inject:BT};function bf(t,e){return e?t?function(){return vt(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function BT(t,e){return ir(_c(t),_c(e))}function _c(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function ir(t,e){return t?vt(Object.create(null),t,e):e}function Cf(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:vt(Object.create(null),wf(t),wf(e??{})):e}function $T(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const i in e)n[i]=It(t[i],e[i]);return n}function rm(){return{app:null,config:{isNativeTag:OE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jT=0;function HT(t,e){return function(i,s=null){le(i)||(i=vt({},i)),s!=null&&!Be(s)&&(s=null);const r=rm(),o=new WeakSet,l=[];let c=!1;const u=r.app={_uid:jT++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:AI,get config(){return r.config},set config(f){},use(f,...p){return o.has(f)||(f&&le(f.install)?(o.add(f),f.install(u,...p)):le(f)&&(o.add(f),f(u,...p))),u},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),u},component(f,p){return p?(r.components[f]=p,u):r.components[f]},directive(f,p){return p?(r.directives[f]=p,u):r.directives[f]},mount(f,p,g){if(!c){const _=u._ceVNode||qt(i,s);return _.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,u._container=f,f.__vue_app__=u,Ha(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return r.provides[f]=p,u},runWithContext(f){const p=hs;hs=u;try{return f()}finally{hs=p}}};return u}}let hs=null;function Fo(t,e){if(Ct){let n=Ct.provides;const i=Ct.parent&&Ct.parent.provides;i===n&&(n=Ct.provides=Object.create(i)),n[t]=e}}function Vn(t,e,n=!1){const i=Ct||Wt;if(i||hs){const s=hs?hs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(i&&i.proxy):e}}const om={},am=()=>Object.create(om),lm=t=>Object.getPrototypeOf(t)===om;function WT(t,e,n,i=!1){const s={},r=am();t.propsDefaults=Object.create(null),cm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Hg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function qT(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=be(s),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if($a(t.emitsOptions,g))continue;const _=e[g];if(c)if(Ce(r,g))_!==r[g]&&(r[g]=_,u=!0);else{const R=oi(g);s[R]=yc(c,l,R,_,t,!1)}else _!==r[g]&&(r[g]=_,u=!0)}}}else{cm(t,e,s,r)&&(u=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=Wi(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=yc(c,l,p,void 0,t,!0)):delete s[p]);if(r!==l)for(const p in r)(!e||!Ce(e,p))&&(delete r[p],u=!0)}u&&Dn(t.attrs,"set","")}function cm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(or(c))continue;const u=e[c];let f;s&&Ce(s,f=oi(c))?!r||!r.includes(f)?n[f]=u:(l||(l={}))[f]=u:$a(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(r){const c=be(n),u=l||Ne;for(let f=0;f<r.length;f++){const p=r[f];n[p]=yc(s,c,p,u[p],t,!Ce(u,p))}}return o}function yc(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&le(c)){const{propsDefaults:u}=s;if(n in u)i=u[n];else{const f=Gr(s);i=u[n]=c.call(null,e),f()}}else i=c;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Wi(n))&&(i=!0))}return i}const zT=new WeakMap;function um(t,e,n=!1){const i=n?zT:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let c=!1;if(!le(t)){const f=p=>{c=!0;const[g,_]=um(p,e,!0);vt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!c)return Be(t)&&i.set(t,ls),ls;if(re(r))for(let f=0;f<r.length;f++){const p=oi(r[f]);Rf(p)&&(o[p]=Ne)}else if(r)for(const f in r){const p=oi(f);if(Rf(p)){const g=r[f],_=o[p]=re(g)||le(g)?{type:g}:vt({},g),R=_.type;let k=!1,O=!0;if(re(R))for(let H=0;H<R.length;++H){const $=R[H],j=le($)&&$.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(O=!1)}else k=le(R)&&R.name==="Boolean";_[0]=k,_[1]=O,(k||Ce(_,"default"))&&l.push(p)}}const u=[o,l];return Be(t)&&i.set(t,u),u}function Rf(t){return t[0]!=="$"&&!or(t)}const hm=t=>t[0]==="_"||t==="$stable",Iu=t=>re(t)?t.map(_n):[_n(t)],GT=(t,e,n)=>{if(e._n)return e;const i=ET((...s)=>Iu(e(...s)),n);return i._c=!1,i},fm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(hm(s))continue;const r=t[s];if(le(r))e[s]=GT(s,r,i);else if(r!=null){const o=Iu(r);e[s]=()=>o}}},dm=(t,e)=>{const n=Iu(e);t.slots.default=()=>n},pm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},KT=(t,e,n)=>{const i=t.slots=am();if(t.vnode.shapeFlag&32){const s=e._;s?(pm(i,e,n),n&&Ag(i,"_",s,!0)):fm(e,i)}else e&&dm(t,e)},QT=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ne;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:pm(s,e,n):(r=!e.$stable,fm(e,s)),o=e}else e&&(dm(t,e),o={default:1});if(r)for(const l in s)!hm(l)&&o[l]==null&&delete s[l]},Mt=cI;function YT(t){return XT(t)}function XT(t,e){const n=Va();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=En,insertStaticContent:R}=t,k=(v,E,C,x=null,L=null,M=null,G=void 0,q=null,W=!!E.dynamicChildren)=>{if(v===E)return;v&&!Ys(v,E)&&(x=D(v),Fe(v,L,M,!0),v=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:F,ref:te,shapeFlag:Y}=E;switch(F){case ja:O(v,E,C,x);break;case Pr:H(v,E,C,x);break;case xl:v==null&&$(E,C,x,G);break;case On:S(v,E,C,x,L,M,G,q,W);break;default:Y&1?oe(v,E,C,x,L,M,G,q,W):Y&6?T(v,E,C,x,L,M,G,q,W):(Y&64||Y&128)&&F.process(v,E,C,x,L,M,G,q,W,J)}te!=null&&L&&Xo(te,v&&v.ref,M,E||v,!E)},O=(v,E,C,x)=>{if(v==null)i(E.el=l(E.children),C,x);else{const L=E.el=v.el;E.children!==v.children&&u(L,E.children)}},H=(v,E,C,x)=>{v==null?i(E.el=c(E.children||""),C,x):E.el=v.el},$=(v,E,C,x)=>{[v.el,v.anchor]=R(v.children,E,C,x,v.el,v.anchor)},j=({el:v,anchor:E},C,x)=>{let L;for(;v&&v!==E;)L=g(v),i(v,C,x),v=L;i(E,C,x)},B=({el:v,anchor:E})=>{let C;for(;v&&v!==E;)C=g(v),s(v),v=C;s(E)},oe=(v,E,C,x,L,M,G,q,W)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),v==null?ce(E,C,x,L,M,G,q,W):I(v,E,L,M,G,q,W)},ce=(v,E,C,x,L,M,G,q)=>{let W,F;const{props:te,shapeFlag:Y,transition:ee,dirs:ie}=v;if(W=v.el=o(v.type,M,te&&te.is,te),Y&8?f(W,v.children):Y&16&&y(v.children,W,null,x,L,Dl(v,M),G,q),ie&&Ei(v,null,x,"created"),w(W,v,v.scopeId,G,x),te){for(const ae in te)ae!=="value"&&!or(ae)&&r(W,ae,null,te[ae],M,x);"value"in te&&r(W,"value",null,te.value,M),(F=te.onVnodeBeforeMount)&&pn(F,x,v)}ie&&Ei(v,null,x,"beforeMount");const ne=JT(L,ee);ne&&ee.beforeEnter(W),i(W,E,C),((F=te&&te.onVnodeMounted)||ne||ie)&&Mt(()=>{F&&pn(F,x,v),ne&&ee.enter(W),ie&&Ei(v,null,x,"mounted")},L)},w=(v,E,C,x,L)=>{if(C&&_(v,C),x)for(let M=0;M<x.length;M++)_(v,x[M]);if(L){let M=L.subTree;if(E===M||Em(M.type)&&(M.ssContent===E||M.ssFallback===E)){const G=L.vnode;w(v,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(v,E,C,x,L,M,G,q,W=0)=>{for(let F=W;F<v.length;F++){const te=v[F]=q?Jn(v[F]):_n(v[F]);k(null,te,E,C,x,L,M,G,q)}},I=(v,E,C,x,L,M,G)=>{const q=E.el=v.el;let{patchFlag:W,dynamicChildren:F,dirs:te}=E;W|=v.patchFlag&16;const Y=v.props||Ne,ee=E.props||Ne;let ie;if(C&&Ti(C,!1),(ie=ee.onVnodeBeforeUpdate)&&pn(ie,C,E,v),te&&Ei(E,v,C,"beforeUpdate"),C&&Ti(C,!0),(Y.innerHTML&&ee.innerHTML==null||Y.textContent&&ee.textContent==null)&&f(q,""),F?A(v.dynamicChildren,F,q,C,x,Dl(E,L),M):G||de(v,E,q,null,C,x,Dl(E,L),M,!1),W>0){if(W&16)b(q,Y,ee,C,L);else if(W&2&&Y.class!==ee.class&&r(q,"class",null,ee.class,L),W&4&&r(q,"style",Y.style,ee.style,L),W&8){const ne=E.dynamicProps;for(let ae=0;ae<ne.length;ae++){const me=ne[ae],at=Y[me],Ze=ee[me];(Ze!==at||me==="value")&&r(q,me,at,Ze,L,C)}}W&1&&v.children!==E.children&&f(q,E.children)}else!G&&F==null&&b(q,Y,ee,C,L);((ie=ee.onVnodeUpdated)||te)&&Mt(()=>{ie&&pn(ie,C,E,v),te&&Ei(E,v,C,"updated")},x)},A=(v,E,C,x,L,M,G)=>{for(let q=0;q<E.length;q++){const W=v[q],F=E[q],te=W.el&&(W.type===On||!Ys(W,F)||W.shapeFlag&70)?p(W.el):C;k(W,F,te,null,x,L,M,G,!0)}},b=(v,E,C,x,L)=>{if(E!==C){if(E!==Ne)for(const M in E)!or(M)&&!(M in C)&&r(v,M,E[M],null,L,x);for(const M in C){if(or(M))continue;const G=C[M],q=E[M];G!==q&&M!=="value"&&r(v,M,q,G,L,x)}"value"in C&&r(v,"value",E.value,C.value,L)}},S=(v,E,C,x,L,M,G,q,W)=>{const F=E.el=v?v.el:l(""),te=E.anchor=v?v.anchor:l("");let{patchFlag:Y,dynamicChildren:ee,slotScopeIds:ie}=E;ie&&(q=q?q.concat(ie):ie),v==null?(i(F,C,x),i(te,C,x),y(E.children||[],C,te,L,M,G,q,W)):Y>0&&Y&64&&ee&&v.dynamicChildren?(A(v.dynamicChildren,ee,C,L,M,G,q),(E.key!=null||L&&E===L.subTree)&&gm(v,E,!0)):de(v,E,C,te,L,M,G,q,W)},T=(v,E,C,x,L,M,G,q,W)=>{E.slotScopeIds=q,v==null?E.shapeFlag&512?L.ctx.activate(E,C,x,G,W):Et(E,C,x,L,M,G,W):Bt(v,E,W)},Et=(v,E,C,x,L,M,G)=>{const q=v.component=yI(v,x,L);if(em(v)&&(q.ctx.renderer=J),vI(q,!1,G),q.asyncDep){if(L&&L.registerDep(q,We,G),!v.el){const W=q.subTree=qt(Pr);H(null,W,E,C)}}else We(q,v,E,C,L,M,G)},Bt=(v,E,C)=>{const x=E.component=v.component;if(aI(v,E,C))if(x.asyncDep&&!x.asyncResolved){ge(x,E,C);return}else x.next=E,x.update();else E.el=v.el,x.vnode=E},We=(v,E,C,x,L,M,G)=>{const q=()=>{if(v.isMounted){let{next:Y,bu:ee,u:ie,parent:ne,vnode:ae}=v;{const lt=mm(v);if(lt){Y&&(Y.el=ae.el,ge(v,Y,G)),lt.asyncDep.then(()=>{v.isUnmounted||q()});return}}let me=Y,at;Ti(v,!1),Y?(Y.el=ae.el,ge(v,Y,G)):Y=ae,ee&&Lo(ee),(at=Y.props&&Y.props.onVnodeBeforeUpdate)&&pn(at,ne,Y,ae),Ti(v,!0);const Ze=Pf(v),jt=v.subTree;v.subTree=Ze,k(jt,Ze,p(jt.el),D(jt),v,L,M),Y.el=Ze.el,me===null&&lI(v,Ze.el),ie&&Mt(ie,L),(at=Y.props&&Y.props.onVnodeUpdated)&&Mt(()=>pn(at,ne,Y,ae),L)}else{let Y;const{el:ee,props:ie}=E,{bm:ne,m:ae,parent:me,root:at,type:Ze}=v,jt=ur(E);Ti(v,!1),ne&&Lo(ne),!jt&&(Y=ie&&ie.onVnodeBeforeMount)&&pn(Y,me,E),Ti(v,!0);{at.ce&&at.ce._injectChildStyle(Ze);const lt=v.subTree=Pf(v);k(null,lt,C,x,v,L,M),E.el=lt.el}if(ae&&Mt(ae,L),!jt&&(Y=ie&&ie.onVnodeMounted)){const lt=E;Mt(()=>pn(Y,me,lt),L)}(E.shapeFlag&256||me&&ur(me.vnode)&&me.vnode.shapeFlag&256)&&v.a&&Mt(v.a,L),v.isMounted=!0,E=C=x=null}};v.scope.on();const W=v.effect=new Pg(q);v.scope.off();const F=v.update=W.run.bind(W),te=v.job=W.runIfDirty.bind(W);te.i=v,te.id=v.uid,W.scheduler=()=>Eu(te),Ti(v,!0),F()},ge=(v,E,C)=>{E.component=v;const x=v.vnode.props;v.vnode=E,v.next=null,qT(v,E.props,x,C),QT(v,E.children,C),di(),If(v),pi()},de=(v,E,C,x,L,M,G,q,W=!1)=>{const F=v&&v.children,te=v?v.shapeFlag:0,Y=E.children,{patchFlag:ee,shapeFlag:ie}=E;if(ee>0){if(ee&128){Qt(F,Y,C,x,L,M,G,q,W);return}else if(ee&256){Dt(F,Y,C,x,L,M,G,q,W);return}}ie&8?(te&16&&St(F,L,M),Y!==F&&f(C,Y)):te&16?ie&16?Qt(F,Y,C,x,L,M,G,q,W):St(F,L,M,!0):(te&8&&f(C,""),ie&16&&y(Y,C,x,L,M,G,q,W))},Dt=(v,E,C,x,L,M,G,q,W)=>{v=v||ls,E=E||ls;const F=v.length,te=E.length,Y=Math.min(F,te);let ee;for(ee=0;ee<Y;ee++){const ie=E[ee]=W?Jn(E[ee]):_n(E[ee]);k(v[ee],ie,C,null,L,M,G,q,W)}F>te?St(v,L,M,!0,!1,Y):y(E,C,x,L,M,G,q,W,Y)},Qt=(v,E,C,x,L,M,G,q,W)=>{let F=0;const te=E.length;let Y=v.length-1,ee=te-1;for(;F<=Y&&F<=ee;){const ie=v[F],ne=E[F]=W?Jn(E[F]):_n(E[F]);if(Ys(ie,ne))k(ie,ne,C,null,L,M,G,q,W);else break;F++}for(;F<=Y&&F<=ee;){const ie=v[Y],ne=E[ee]=W?Jn(E[ee]):_n(E[ee]);if(Ys(ie,ne))k(ie,ne,C,null,L,M,G,q,W);else break;Y--,ee--}if(F>Y){if(F<=ee){const ie=ee+1,ne=ie<te?E[ie].el:x;for(;F<=ee;)k(null,E[F]=W?Jn(E[F]):_n(E[F]),C,ne,L,M,G,q,W),F++}}else if(F>ee)for(;F<=Y;)Fe(v[F],L,M,!0),F++;else{const ie=F,ne=F,ae=new Map;for(F=ne;F<=ee;F++){const et=E[F]=W?Jn(E[F]):_n(E[F]);et.key!=null&&ae.set(et.key,F)}let me,at=0;const Ze=ee-ne+1;let jt=!1,lt=0;const qn=new Array(Ze);for(F=0;F<Ze;F++)qn[F]=0;for(F=ie;F<=Y;F++){const et=v[F];if(at>=Ze){Fe(et,L,M,!0);continue}let Ht;if(et.key!=null)Ht=ae.get(et.key);else for(me=ne;me<=ee;me++)if(qn[me-ne]===0&&Ys(et,E[me])){Ht=me;break}Ht===void 0?Fe(et,L,M,!0):(qn[Ht-ne]=F+1,Ht>=lt?lt=Ht:jt=!0,k(et,E[Ht],C,null,L,M,G,q,W),at++)}const Ls=jt?ZT(qn):ls;for(me=Ls.length-1,F=Ze-1;F>=0;F--){const et=ne+F,Ht=E[et],oo=et+1<te?E[et+1].el:x;qn[F]===0?k(null,Ht,C,oo,L,M,G,q,W):jt&&(me<0||F!==Ls[me]?$t(Ht,C,oo,2):me--)}}},$t=(v,E,C,x,L=null)=>{const{el:M,type:G,transition:q,children:W,shapeFlag:F}=v;if(F&6){$t(v.component.subTree,E,C,x);return}if(F&128){v.suspense.move(E,C,x);return}if(F&64){G.move(v,E,C,J);return}if(G===On){i(M,E,C);for(let Y=0;Y<W.length;Y++)$t(W[Y],E,C,x);i(v.anchor,E,C);return}if(G===xl){j(v,E,C);return}if(x!==2&&F&1&&q)if(x===0)q.beforeEnter(M),i(M,E,C),Mt(()=>q.enter(M),L);else{const{leave:Y,delayLeave:ee,afterLeave:ie}=q,ne=()=>i(M,E,C),ae=()=>{Y(M,()=>{ne(),ie&&ie()})};ee?ee(M,ne,ae):ae()}else i(M,E,C)},Fe=(v,E,C,x=!1,L=!1)=>{const{type:M,props:G,ref:q,children:W,dynamicChildren:F,shapeFlag:te,patchFlag:Y,dirs:ee,cacheIndex:ie}=v;if(Y===-2&&(L=!1),q!=null&&Xo(q,null,C,v,!0),ie!=null&&(E.renderCache[ie]=void 0),te&256){E.ctx.deactivate(v);return}const ne=te&1&&ee,ae=!ur(v);let me;if(ae&&(me=G&&G.onVnodeBeforeUnmount)&&pn(me,E,v),te&6)dn(v.component,C,x);else{if(te&128){v.suspense.unmount(C,x);return}ne&&Ei(v,null,E,"beforeUnmount"),te&64?v.type.remove(v,E,C,J,x):F&&!F.hasOnce&&(M!==On||Y>0&&Y&64)?St(F,E,C,!1,!0):(M===On&&Y&384||!L&&te&16)&&St(W,E,C),x&&Ue(v)}(ae&&(me=G&&G.onVnodeUnmounted)||ne)&&Mt(()=>{me&&pn(me,E,v),ne&&Ei(v,null,E,"unmounted")},C)},Ue=v=>{const{type:E,el:C,anchor:x,transition:L}=v;if(E===On){Wn(C,x);return}if(E===xl){B(v);return}const M=()=>{s(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:q}=L,W=()=>G(C,M);q?q(v.el,M,W):W()}else M()},Wn=(v,E)=>{let C;for(;v!==E;)C=g(v),s(v),v=C;s(E)},dn=(v,E,C)=>{const{bum:x,scope:L,job:M,subTree:G,um:q,m:W,a:F}=v;Sf(W),Sf(F),x&&Lo(x),L.stop(),M&&(M.flags|=8,Fe(G,v,E,C)),q&&Mt(q,E),Mt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},St=(v,E,C,x=!1,L=!1,M=0)=>{for(let G=M;G<v.length;G++)Fe(v[G],E,C,x,L)},D=v=>{if(v.shapeFlag&6)return D(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=g(v.anchor||v.el),C=E&&E[TT];return C?g(C):E};let X=!1;const Q=(v,E,C)=>{v==null?E._vnode&&Fe(E._vnode,null,null,!0):k(E._vnode||null,v,E,null,null,null,C),E._vnode=v,X||(X=!0,If(),Yg(),X=!1)},J={p:k,um:Fe,m:$t,r:Ue,mt:Et,mc:y,pc:de,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:HT(Q)}}function Dl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ti({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function JT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gm(t,e,n=!1){const i=t.children,s=e.children;if(re(i)&&re(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Jn(s[r]),l.el=o.el),!n&&l.patchFlag!==-2&&gm(o,l)),l.type===ja&&(l.el=o.el)}}function ZT(t){const e=t.slice(),n=[0];let i,s,r,o,l;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(s=n[n.length-1],t[s]<u){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<u?r=l+1:o=l;u<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function mm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mm(e)}function Sf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const eI=Symbol.for("v-scx"),tI=()=>Vn(eI);function Uo(t,e,n){return _m(t,e,n)}function _m(t,e,n=Ne){const{immediate:i,deep:s,flush:r,once:o}=n,l=vt({},n),c=e&&i||!e&&r!=="post";let u;if(kr){if(r==="sync"){const _=tI();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=En,_.resume=En,_.pause=En,_}}const f=Ct;l.call=(_,R,k)=>Tn(_,f,R,k);let p=!1;r==="post"?l.scheduler=_=>{Mt(_,f&&f.suspense)}:r!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():Eu(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=mT(t,e,l);return kr&&(u?u.push(g):c&&g()),g}function nI(t,e,n){const i=this.proxy,s=ze(t)?t.includes(".")?ym(i,t):()=>i[t]:t.bind(i,i);let r;le(e)?r=e:(r=e.handler,n=e);const o=Gr(this),l=_m(s,r.bind(i),n);return o(),l}function ym(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const iI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${oi(e)}Modifiers`]||t[`${Wi(e)}Modifiers`];function sI(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ne;let s=n;const r=e.startsWith("update:"),o=r&&iI(i,e.slice(7));o&&(o.trim&&(s=n.map(f=>ze(f)?f.trim():f)),o.number&&(s=n.map(cc)));let l,c=i[l=Cl(e)]||i[l=Cl(oi(e))];!c&&r&&(c=i[l=Cl(Wi(e))]),c&&Tn(c,t,6,s);const u=i[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Tn(u,t,6,s)}}function vm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!le(t)){const c=u=>{const f=vm(u,e,!0);f&&(l=!0,vt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(Be(t)&&i.set(t,null),null):(re(r)?r.forEach(c=>o[c]=null):vt(o,r),Be(t)&&i.set(t,o),o)}function $a(t,e){return!t||!xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Wi(e))||Ce(t,e))}function Pf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:R,inheritAttrs:k}=t,O=Yo(t);let H,$;try{if(n.shapeFlag&4){const B=s||i,oe=B;H=_n(u.call(oe,B,f,p,_,g,R)),$=l}else{const B=e;H=_n(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),$=e.props?l:rI(l)}}catch(B){fr.length=0,Ua(B,t,1),H=qt(Pr)}let j=H;if($&&k!==!1){const B=Object.keys($),{shapeFlag:oe}=j;B.length&&oe&7&&(r&&B.some(au)&&($=oI($,r)),j=_s(j,$,!1,!0))}return n.dirs&&(j=_s(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Tu(j,n.transition),H=j,Yo(O),H}const rI=t=>{let e;for(const n in t)(n==="class"||n==="style"||xa(n))&&((e||(e={}))[n]=t[n]);return e},oI=(t,e)=>{const n={};for(const i in t)(!au(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function aI(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Nf(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==i[g]&&!$a(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Nf(i,o,u):!0:!!o;return!1}function Nf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!$a(n,r))return!0}return!1}function lI({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Em=t=>t.__isSuspense;function cI(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):vT(t)}const On=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),Pr=Symbol.for("v-cmt"),xl=Symbol.for("v-stc"),fr=[];let Vt=null;function wu(t=!1){fr.push(Vt=t?null:[])}function uI(){fr.pop(),Vt=fr[fr.length-1]||null}let Nr=1;function kf(t,e=!1){Nr+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Tm(t){return t.dynamicChildren=Nr>0?Vt||ls:null,uI(),Nr>0&&Vt&&Vt.push(t),t}function hI(t,e,n,i,s,r){return Tm(wt(t,e,n,i,s,r,!0))}function Im(t,e,n,i,s){return Tm(qt(t,e,n,i,s,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function Ys(t,e){return t.type===e.type&&t.key===e.key}const wm=({key:t})=>t??null,Bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||yt(t)||le(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function wt(t,e=null,n=null,i=0,s=null,r=t===On?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wm(e),ref:e&&Bo(e),scopeId:Jg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return l?(Au(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),Nr>0&&!o&&Vt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Vt.push(c),c}const qt=fI;function fI(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===MT)&&(t=Pr),Zo(t)){const l=_s(t,e,!0);return n&&Au(l,n),Nr>0&&!r&&Vt&&(l.shapeFlag&6?Vt[Vt.indexOf(t)]=l:Vt.push(l)),l.patchFlag=-2,l}if(wI(t)&&(t=t.__vccOpts),e){e=dI(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=hu(l)),Be(c)&&(vu(c)&&!re(c)&&(c=vt({},c)),e.style=uu(c))}const o=ze(t)?1:Em(t)?128:IT(t)?64:Be(t)?4:le(t)?2:0;return wt(t,e,n,i,s,o,r,!0)}function dI(t){return t?vu(t)||lm(t)?vt({},t):t:null}function _s(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=t,u=e?gI(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&wm(u),ref:e&&e.ref?n&&r?re(r)?r.concat(Bo(e)):[r,Bo(e)]:Bo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==On?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_s(t.ssContent),ssFallback:t.ssFallback&&_s(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&Tu(f,c.clone(f)),f}function pI(t=" ",e=0){return qt(ja,null,t,e)}function _n(t){return t==null||typeof t=="boolean"?qt(Pr):re(t)?qt(On,null,t.slice()):Zo(t)?Jn(t):qt(ja,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_s(t)}function Au(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lm(e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),i&64?(n=16,e=[pI(e)]):n=8);t.children=e,t.shapeFlag|=n}function gI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=hu([e.class,i.class]));else if(s==="style")e.style=uu([e.style,i.style]);else if(xa(s)){const r=e[s],o=i[s];o&&r!==o&&!(re(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function pn(t,e,n,i=null){Tn(t,e,7,[n,i])}const mI=rm();let _I=0;function yI(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||mI,r={uid:_I++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new HE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(i,s),emitsOptions:vm(i,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sI.bind(null,r),t.ce&&t.ce(r),r}let Ct=null,ea,vc;{const t=Va(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>Ct=n),vc=e("__VUE_SSR_SETTERS__",n=>kr=n)}const Gr=t=>{const e=Ct;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},Of=()=>{Ct&&Ct.scope.off(),ea(null)};function Am(t){return t.vnode.shapeFlag&4}let kr=!1;function vI(t,e=!1,n=!1){e&&vc(e);const{props:i,children:s}=t.vnode,r=Am(t);WT(t,i,r,e),KT(t,s,n);const o=r?EI(t,e):void 0;return e&&vc(!1),o}function EI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,LT);const{setup:i}=n;if(i){di();const s=t.setupContext=i.length>1?II(t):null,r=Gr(t),o=qr(i,t,0,[t.props,s]),l=Eg(o);if(pi(),r(),(l||t.sp)&&!ur(t)&&Zg(t),l){if(o.then(Of,Of),e)return o.then(c=>{Df(t,c)}).catch(c=>{Ua(c,t,0)});t.asyncDep=o}else Df(t,o)}else bm(t)}function Df(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=zg(e)),bm(t)}function bm(t,e,n){const i=t.type;t.render||(t.render=i.render||En);{const s=Gr(t);di();try{VT(t)}finally{pi(),s()}}}const TI={get(t,e){return dt(t,"get",""),t[e]}};function II(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,TI),slots:t.slots,emit:t.emit,expose:e}}function Ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zg(cT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)},has(e,n){return n in e||n in hr}})):t.proxy}function wI(t){return le(t)&&"__vccOpts"in t}const Jt=(t,e)=>pT(t,e,kr);function Cm(t,e,n){const i=arguments.length;return i===2?Be(e)&&!re(e)?Zo(e)?qt(t,null,[e]):qt(t,e):qt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zo(n)&&(n=[n]),qt(t,e,n))}const AI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ec;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{Ec=xf.createPolicy("vue",{createHTML:t=>t})}catch{}const Rm=Ec?t=>Ec.createHTML(t):t=>t,bI="http://www.w3.org/2000/svg",CI="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Mf=kn&&kn.createElement("template"),RI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?kn.createElementNS(bI,t):e==="mathml"?kn.createElementNS(CI,t):n?kn.createElement(t,{is:n}):kn.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Mf.innerHTML=Rm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Mf.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},SI=Symbol("_vtc");function PI(t,e,n){const i=t[SI];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lf=Symbol("_vod"),NI=Symbol("_vsh"),kI=Symbol(""),OI=/(^|;)\s*display\s*:/;function DI(t,e,n){const i=t.style,s=ze(n);let r=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&$o(i,l,"")}else for(const o in e)n[o]==null&&$o(i,o,"");for(const o in n)o==="display"&&(r=!0),$o(i,o,n[o])}else if(s){if(e!==n){const o=i[kI];o&&(n+=";"+o),i.cssText=n,r=OI.test(n)}}else e&&t.removeAttribute("style");Lf in t&&(t[Lf]=r?i.display:"",t[NI]&&(i.display="none"))}const Vf=/\s*!important$/;function $o(t,e,n){if(re(n))n.forEach(i=>$o(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=xI(t,e);Vf.test(n)?t.setProperty(Wi(i),n.replace(Vf,""),"important"):t[i]=n}}const Ff=["Webkit","Moz","ms"],Ml={};function xI(t,e){const n=Ml[e];if(n)return n;let i=oi(e);if(i!=="filter"&&i in t)return Ml[e]=i;i=wg(i);for(let s=0;s<Ff.length;s++){const r=Ff[s]+i;if(r in t)return Ml[e]=r}return e}const Uf="http://www.w3.org/1999/xlink";function Bf(t,e,n,i,s,r=jE(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uf,e.slice(6,e.length)):t.setAttributeNS(Uf,e,n):n==null||r&&!bg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":fi(n)?String(n):n)}function $f(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ns(t,e,n,i){t.addEventListener(e,n,i)}function MI(t,e,n,i){t.removeEventListener(e,n,i)}const jf=Symbol("_vei");function LI(t,e,n,i,s=null){const r=t[jf]||(t[jf]={}),o=r[e];if(i&&o)o.value=i;else{const[l,c]=VI(e);if(i){const u=r[e]=BI(i,s);ns(t,l,u,c)}else o&&(MI(t,l,o,c),r[e]=void 0)}}const Hf=/(?:Once|Passive|Capture)$/;function VI(t){let e;if(Hf.test(t)){e={};let i;for(;i=t.match(Hf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wi(t.slice(2)),e]}let Ll=0;const FI=Promise.resolve(),UI=()=>Ll||(FI.then(()=>Ll=0),Ll=Date.now());function BI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Tn($I(i,n.value),e,5,[i])};return n.value=t,n.attached=UI(),n}function $I(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jI=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?PI(t,i,o):e==="style"?DI(t,n,i):xa(e)?au(e)||LI(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HI(t,e,i,o))?($f(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(i))?$f(t,oi(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Bf(t,e,i,o))};function HI(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wf(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wf(e)&&ze(n)?!1:e in t}const qf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Lo(e,n):e};function WI(t){t.target.composing=!0}function zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vl=Symbol("_assign"),Fl={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Vl]=qf(s);const r=i||s.props&&s.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=cc(l)),t[Vl](l)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",WI),ns(t,"compositionend",zf),ns(t,"change",zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Vl]=qf(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?cc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===c)||(t.value=c))}},qI=["ctrl","shift","alt","meta"],zI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qI.some(n=>t[`${n}Key`]&&!e.includes(n))},GI=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const l=zI[e[o]];if(l&&l(s,e))return}return t(s,...r)})},KI=vt({patchProp:jI},RI);let Gf;function QI(){return Gf||(Gf=YT(KI))}const YI=(...t)=>{const e=QI().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=JI(i);if(!s)return;const r=e._component;!le(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,XI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function XI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function JI(t){return ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof document<"u";function Sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sm(t.default)}const Ae=Object.assign;function Ul(t,e){const n={};for(const i in e){const s=e[i];n[i]=ln(s)?s.map(t):t(s)}return n}const dr=()=>{},ln=Array.isArray,Pm=/#/g,ew=/&/g,tw=/\//g,nw=/=/g,iw=/\?/g,Nm=/\+/g,sw=/%5B/g,rw=/%5D/g,km=/%5E/g,ow=/%60/g,Om=/%7B/g,aw=/%7C/g,Dm=/%7D/g,lw=/%20/g;function bu(t){return encodeURI(""+t).replace(aw,"|").replace(sw,"[").replace(rw,"]")}function cw(t){return bu(t).replace(Om,"{").replace(Dm,"}").replace(km,"^")}function Tc(t){return bu(t).replace(Nm,"%2B").replace(lw,"+").replace(Pm,"%23").replace(ew,"%26").replace(ow,"`").replace(Om,"{").replace(Dm,"}").replace(km,"^")}function uw(t){return Tc(t).replace(nw,"%3D")}function hw(t){return bu(t).replace(Pm,"%23").replace(iw,"%3F")}function fw(t){return t==null?"":hw(t).replace(tw,"%2F")}function Or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dw=/\/$/,pw=t=>t.replace(dw,"");function Bl(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(i=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=yw(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Or(o)}}function gw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mw(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&ys(e.matched[i],n.matched[s])&&xm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_w(t[n],e[n]))return!1;return!0}function _w(t,e){return ln(t)?Qf(t,e):ln(e)?Qf(e,t):t===e}function Qf(t,e){return ln(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,l;for(o=0;o<i.length;o++)if(l=i[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Dr;(function(t){t.pop="pop",t.push="push"})(Dr||(Dr={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function vw(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pw(t)}const Ew=/^[^#]+#/;function Tw(t,e){return t.replace(Ew,"#")+e}function Iw(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Wa=()=>({left:window.scrollX,top:window.scrollY});function ww(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Iw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yf(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function Aw(t,e){Ic.set(t,e)}function bw(t){const e=Ic.get(t);return Ic.delete(t),e}let Cw=()=>location.protocol+"//"+location.host;function Mm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Kf(c,"")}return Kf(n,t)+i+s}function Rw(t,e,n,i){let s=[],r=[],o=null;const l=({state:g})=>{const _=Mm(t,location),R=n.value,k=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===R){o=null;return}O=k?g.position-k.position:0}else i(_);s.forEach(H=>{H(n.value,R,{delta:O,type:Dr.pop,direction:O?O>0?pr.forward:pr.back:pr.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return r.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Ae({},g.state,{scroll:Wa()}),"")}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Xf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Wa():null}}function Sw(t){const{history:e,location:n}=window,i={value:Mm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Cw()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(c,u){const f=Ae({},e.state,Xf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});r(c,f,!0),i.value=c}function l(c,u){const f=Ae({},s.value,e.state,{forward:c,scroll:Wa()});r(f.current,f,!0);const p=Ae({},Xf(i.value,c,null),{position:f.position+1},u);r(c,p,!1),i.value=c}return{location:i,state:s,push:l,replace:o}}function Pw(t){t=vw(t);const e=Sw(t),n=Rw(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ae({location:"",base:t,go:i,createHref:Tw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Nw(t){return typeof t=="string"||t&&typeof t=="object"}function Lm(t){return typeof t=="string"||typeof t=="symbol"}const Vm=Symbol("");var Jf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jf||(Jf={}));function vs(t,e){return Ae(new Error,{type:t,[Vm]:!0},e)}function Pn(t,e){return t instanceof Error&&Vm in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",kw={sensitive:!1,strict:!1,start:!0,end:!0},Ow=/[.+*?^${}()[\]/\\]/g;function Dw(t,e){const n=Ae({},kw,e),i=[];let s=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Ow,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:k,optional:O,regexp:H}=g;r.push({name:R,repeatable:k,optional:O});const $=H||Zf;if($!==Zf){_+=10;try{new RegExp(`(${$})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${R}" (${$}): `+B.message)}}let j=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(j=O&&u.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),k&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}i.push(f)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",R=r[g-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:k,optional:O}=_,H=R in u?u[R]:"";if(ln(H)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const $=ln(H)?H.join("/"):H;if(!$)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=$}}return f||"/"}return{re:o,score:i,keys:r,parse:l,stringify:c}}function xw(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=xw(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(ed(i))return 1;if(ed(s))return-1}return s.length-i.length}function ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mw={type:0,value:""},Lw=/[a-zA-Z0-9_]/;function Vw(t){if(!t)return[[]];if(t==="/")return[[Mw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,c,u="",f="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=i;break;case 1:c==="("?n=2:Lw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Fw(t,e,n){const i=Dw(Vw(t.path),n),s=Ae(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Uw(t,e){const n=[],i=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function s(p){return i.get(p)}function r(p,g,_){const R=!_,k=nd(p);k.aliasOf=_&&_.record;const O=sd(e,p),H=[k];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of B)H.push(nd(Ae({},k,{components:_?_.record.components:k.components,path:oe,aliasOf:_?_.record:k})))}let $,j;for(const B of H){const{path:oe}=B;if(g&&oe[0]!=="/"){const ce=g.record.path,w=ce[ce.length-1]==="/"?"":"/";B.path=g.record.path+(oe&&w+oe)}if($=Fw(B,g,O),_?_.alias.push($):(j=j||$,j!==$&&j.alias.push($),R&&p.name&&!id($)&&o(p.name)),Um($)&&c($),k.children){const ce=k.children;for(let w=0;w<ce.length;w++)r(ce[w],$,_&&_.children[w])}_=_||$}return j?()=>{o(j)}:dr}function o(p){if(Lm(p)){const g=i.get(p);g&&(i.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&i.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=jw(p,n);n.splice(g,0,p),p.record.name&&!id(p)&&i.set(p.record.name,p)}function u(p,g){let _,R={},k,O;if("name"in p&&p.name){if(_=i.get(p.name),!_)throw vs(1,{location:p});O=_.record.name,R=Ae(td(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&td(p.params,_.keys.map(j=>j.name))),k=_.stringify(R)}else if(p.path!=null)k=p.path,_=n.find(j=>j.re.test(k)),_&&(R=_.parse(k),O=_.record.name);else{if(_=g.name?i.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw vs(1,{location:p,currentLocation:g});O=_.record.name,R=Ae({},g.params,p.params),k=_.stringify(R)}const H=[];let $=_;for(;$;)H.unshift($.record),$=$.parent;return{name:O,path:k,params:R,matched:H,meta:$w(H)}}t.forEach(p=>r(p));function f(){n.length=0,i.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function td(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function nd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Bw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Bw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $w(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function sd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function jw(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Fm(t,e[r])<0?i=r:n=r+1}const s=Hw(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Hw(t){let e=t;for(;e=e.parent;)if(Um(e)&&Fm(t,e)===0)return e}function Um({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ww(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Nm," "),o=r.indexOf("="),l=Or(o<0?r:r.slice(0,o)),c=o<0?null:Or(r.slice(o+1));if(l in e){let u=e[l];ln(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function rd(t){let e="";for(let n in t){const i=t[n];if(n=uw(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(i)?i.map(r=>r&&Tc(r)):[i&&Tc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function qw(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ln(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const zw=Symbol(""),od=Symbol(""),Cu=Symbol(""),Bm=Symbol(""),wc=Symbol("");function Xs(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Zn(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(vs(4,{from:n,to:e})):g instanceof Error?c(g):Nw(g)?c(vs(2,{from:e,to:g})):(o&&i.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=r(()=>t.call(i&&i.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function $l(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sm(c)){const f=(c.__vccOpts||c)[e];f&&r.push(Zn(f,n,i,o,l,s))}else{let u=c();r.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=ZI(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Zn(_,n,i,o,l,s)()}))}}return r}function ad(t){const e=Vn(Cu),n=Vn(Bm),i=Jt(()=>{const c=Ni(t.to);return e.resolve(c)}),s=Jt(()=>{const{matched:c}=i.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ys.bind(null,f));if(g>-1)return g;const _=ld(c[u-2]);return u>1&&ld(f)===_&&p[p.length-1].path!==_?p.findIndex(ys.bind(null,c[u-2])):g}),r=Jt(()=>s.value>-1&&Xw(n.params,i.value.params)),o=Jt(()=>s.value>-1&&s.value===n.matched.length-1&&xm(n.params,i.value.params));function l(c={}){if(Yw(c)){const u=e[Ni(t.replace)?"replace":"push"](Ni(t.to)).catch(dr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:Jt(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}function Gw(t){return t.length===1?t[0]:t}const Kw=zr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ad,setup(t,{slots:e}){const n=Fa(ad(t)),{options:i}=Vn(Cu),s=Jt(()=>({[cd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Gw(e.default(n));return t.custom?r:Cm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Qw=Kw;function Yw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xw(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ln(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,Jw=zr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vn(wc),s=Jt(()=>t.route||i.value),r=Vn(od,0),o=Jt(()=>{let u=Ni(r);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Jt(()=>s.value.matched[o.value]);Fo(od,Jt(()=>o.value+1)),Fo(zw,l),Fo(wc,s);const c=Vo();return Uo(()=>[c.value,l.value,t.name],([u,f,p],[g,_,R])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!ys(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return ud(n.default,{Component:g,route:u});const _=p.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Cm(g,Ae({},R,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return ud(n.default,{Component:O,route:u})||O}}});function ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $m=Jw;function Zw(t){const e=Uw(t.routes,t),n=t.parseQuery||Ww,i=t.stringifyQuery||rd,s=t.history,r=Xs(),o=Xs(),l=Xs(),c=uT(Qn);let u=Qn;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ul.bind(null,D=>""+D),p=Ul.bind(null,fw),g=Ul.bind(null,Or);function _(D,X){let Q,J;return Lm(D)?(Q=e.getRecordMatcher(D),J=X):J=D,e.addRoute(J,Q)}function R(D){const X=e.getRecordMatcher(D);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function H(D,X){if(X=Ae({},X||c.value),typeof D=="string"){const C=Bl(n,D,X.path),x=e.resolve({path:C.path},X),L=s.createHref(C.fullPath);return Ae(C,x,{params:g(x.params),hash:Or(C.hash),redirectedFrom:void 0,href:L})}let Q;if(D.path!=null)Q=Ae({},D,{path:Bl(n,D.path,X.path).path});else{const C=Ae({},D.params);for(const x in C)C[x]==null&&delete C[x];Q=Ae({},D,{params:p(C)}),X.params=p(X.params)}const J=e.resolve(Q,X),Te=D.hash||"";J.params=f(g(J.params));const v=gw(i,Ae({},D,{hash:cw(Te),path:J.path})),E=s.createHref(v);return Ae({fullPath:v,hash:Te,query:i===rd?qw(D.query):D.query||{}},J,{redirectedFrom:void 0,href:E})}function $(D){return typeof D=="string"?Bl(n,D,c.value.path):Ae({},D)}function j(D,X){if(u!==D)return vs(8,{from:X,to:D})}function B(D){return w(D)}function oe(D){return B(Ae($(D),{replace:!0}))}function ce(D){const X=D.matched[D.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let J=typeof Q=="function"?Q(D):Q;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=$(J):{path:J},J.params={}),Ae({query:D.query,hash:D.hash,params:J.path!=null?{}:D.params},J)}}function w(D,X){const Q=u=H(D),J=c.value,Te=D.state,v=D.force,E=D.replace===!0,C=ce(Q);if(C)return w(Ae($(C),{state:typeof C=="object"?Ae({},Te,C.state):Te,force:v,replace:E}),X||Q);const x=Q;x.redirectedFrom=X;let L;return!v&&mw(i,J,Q)&&(L=vs(16,{to:x,from:J}),$t(J,J,!0,!1)),(L?Promise.resolve(L):A(x,J)).catch(M=>Pn(M)?Pn(M,2)?M:Qt(M):de(M,x,J)).then(M=>{if(M){if(Pn(M,2))return w(Ae({replace:E},$(M.to),{state:typeof M.to=="object"?Ae({},Te,M.to.state):Te,force:v}),X||x)}else M=S(x,J,!0,E,Te);return b(x,J,M),M})}function y(D,X){const Q=j(D,X);return Q?Promise.reject(Q):Promise.resolve()}function I(D){const X=Wn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(D):D()}function A(D,X){let Q;const[J,Te,v]=eA(D,X);Q=$l(J.reverse(),"beforeRouteLeave",D,X);for(const C of J)C.leaveGuards.forEach(x=>{Q.push(Zn(x,D,X))});const E=y.bind(null,D,X);return Q.push(E),St(Q).then(()=>{Q=[];for(const C of r.list())Q.push(Zn(C,D,X));return Q.push(E),St(Q)}).then(()=>{Q=$l(Te,"beforeRouteUpdate",D,X);for(const C of Te)C.updateGuards.forEach(x=>{Q.push(Zn(x,D,X))});return Q.push(E),St(Q)}).then(()=>{Q=[];for(const C of v)if(C.beforeEnter)if(ln(C.beforeEnter))for(const x of C.beforeEnter)Q.push(Zn(x,D,X));else Q.push(Zn(C.beforeEnter,D,X));return Q.push(E),St(Q)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),Q=$l(v,"beforeRouteEnter",D,X,I),Q.push(E),St(Q))).then(()=>{Q=[];for(const C of o.list())Q.push(Zn(C,D,X));return Q.push(E),St(Q)}).catch(C=>Pn(C,8)?C:Promise.reject(C))}function b(D,X,Q){l.list().forEach(J=>I(()=>J(D,X,Q)))}function S(D,X,Q,J,Te){const v=j(D,X);if(v)return v;const E=X===Qn,C=is?history.state:{};Q&&(J||E?s.replace(D.fullPath,Ae({scroll:E&&C&&C.scroll},Te)):s.push(D.fullPath,Te)),c.value=D,$t(D,X,Q,E),Qt()}let T;function Et(){T||(T=s.listen((D,X,Q)=>{if(!dn.listening)return;const J=H(D),Te=ce(J);if(Te){w(Ae(Te,{replace:!0,force:!0}),J).catch(dr);return}u=J;const v=c.value;is&&Aw(Yf(v.fullPath,Q.delta),Wa()),A(J,v).catch(E=>Pn(E,12)?E:Pn(E,2)?(w(Ae($(E.to),{force:!0}),J).then(C=>{Pn(C,20)&&!Q.delta&&Q.type===Dr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),de(E,J,v))).then(E=>{E=E||S(J,v,!1),E&&(Q.delta&&!Pn(E,8)?s.go(-Q.delta,!1):Q.type===Dr.pop&&Pn(E,20)&&s.go(-1,!1)),b(J,v,E)}).catch(dr)}))}let Bt=Xs(),We=Xs(),ge;function de(D,X,Q){Qt(D);const J=We.list();return J.length?J.forEach(Te=>Te(D,X,Q)):console.error(D),Promise.reject(D)}function Dt(){return ge&&c.value!==Qn?Promise.resolve():new Promise((D,X)=>{Bt.add([D,X])})}function Qt(D){return ge||(ge=!D,Et(),Bt.list().forEach(([X,Q])=>D?Q(D):X()),Bt.reset()),D}function $t(D,X,Q,J){const{scrollBehavior:Te}=t;if(!is||!Te)return Promise.resolve();const v=!Q&&bw(Yf(D.fullPath,0))||(J||!Q)&&history.state&&history.state.scroll||null;return Kg().then(()=>Te(D,X,v)).then(E=>E&&ww(E)).catch(E=>de(E,D,X))}const Fe=D=>s.go(D);let Ue;const Wn=new Set,dn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:H,options:t,push:B,replace:oe,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:We.add,isReady:Dt,install(D){const X=this;D.component("RouterLink",Qw),D.component("RouterView",$m),D.config.globalProperties.$router=X,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Ni(c)}),is&&!Ue&&c.value===Qn&&(Ue=!0,B(s.location).catch(Te=>{}));const Q={};for(const Te in Qn)Object.defineProperty(Q,Te,{get:()=>c.value[Te],enumerable:!0});D.provide(Cu,X),D.provide(Bm,Hg(Q)),D.provide(wc,c);const J=D.unmount;Wn.add(D),D.unmount=function(){Wn.delete(D),Wn.size<1&&(u=Qn,T&&T(),T=null,c.value=Qn,Ue=!1,ge=!1),J()}}};function St(D){return D.reduce((X,Q)=>X.then(()=>I(Q)),Promise.resolve())}return dn}function eA(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(u=>ys(u,l))?i.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ys(u,c))||s.push(c))}return[n,i,s]}const tA=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},nA=zr({__name:"App",setup(t){return(e,n)=>(wu(),Im(Ni($m)))}}),iA=()=>{};var hd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(t,e){if(!t)throw Ss(e)},Ss=function(t){return new Error("Firebase Database ("+jm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sA=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=r>>2,p=(r&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),i.push(n[f],n[p],n[g],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||u==null||p==null)throw new rA;const g=r<<2|l>>4;if(i.push(g),u!==64){const _=l<<4&240|u>>2;if(i.push(_),p!==64){const R=u<<6&192|p;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wm=function(t){const e=Hm(t);return qa.encodeByteArray(e,!0)},ta=function(t){return Wm(t).replace(/\./g,"")},na=function(t){try{return qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){return qm(void 0,t)}function qm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aA(n)||(t[n]=qm(t[n],e[n]));return t}function aA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=()=>lA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof hd>"u")return;const t=hd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&na(t[1]);return e&&JSON.parse(e)},za=()=>{try{return iA()||cA()||uA()||hA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fA=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dA=t=>{const e=fA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},zm=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},pA=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function mA(){var t;const e=(t=za())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yA(){return jm.NODE_ADMIN===!0}function vA(){return!mA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Su(){try{return typeof indexedDB=="object"}catch{return!1}}function Qm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function EA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="FirebaseError";class fn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=TA,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?IA(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new fn(s,l,i)}}function IA(t,e){return t.replace(wA,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const wA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Mr(na(r[0])||""),n=Mr(na(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},AA=function(t){const e=Ym(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bA=function(t){const e=Ym(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Es(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ia(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Lr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(dd(r)&&dd(o)){if(!Lr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)i[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const g=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let p=0;p<80;p++){p<40?p<20?(u=l^r&(o^l),f=1518500249):(u=r^o^l,f=1859775393):p<60?(u=r&o|l&(r|o),f=2400959708):(u=r^o^l,f=3395469782);const g=(s<<5|s>>>27)+u+c+f+i[p]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function RA(t,e){const n=new SA(t,e);return n.subscribe.bind(n)}class SA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");PA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=jl),s.error===void 0&&(s.error=jl),s.complete===void 0&&(s.complete=jl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}function NA(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,K(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ga=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1e3,DA=2,xA=4*60*60*1e3,MA=.5;function pd(t,e=OA,n=DA){const i=e*Math.pow(n,t),s=Math.round(MA*i*(Math.random()-.5)*2);return Math.min(xA,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new xr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FA(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:VA(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VA(t){return t===wi?void 0:t}function FA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const BA={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},$A=he.INFO,jA={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},HA=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=jA[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ps{constructor(e){this.name=e,this._logLevel=$A,this._logHandler=HA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const WA=(t,e)=>e.some(n=>t instanceof n);let gd,md;function qA(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zA(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xm=new WeakMap,Ac=new WeakMap,Jm=new WeakMap,Hl=new WeakMap,Nu=new WeakMap;function GA(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ti(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xm.set(n,t)}).catch(()=>{}),Nu.set(e,t),e}function KA(t){if(Ac.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ac.set(t,e)}let bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ac.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QA(t){bc=t(bc)}function YA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Wl(this),e,...n);return Jm.set(i,e.sort?e.sort():[e]),ti(i)}:zA().includes(t)?function(...e){return t.apply(Wl(this),e),ti(Xm.get(this))}:function(...e){return ti(t.apply(Wl(this),e))}}function XA(t){return typeof t=="function"?YA(t):(t instanceof IDBTransaction&&KA(t),WA(t,qA())?new Proxy(t,bc):t)}function ti(t){if(t instanceof IDBRequest)return GA(t);if(Hl.has(t))return Hl.get(t);const e=XA(t);return e!==t&&(Hl.set(t,e),Nu.set(e,t)),e}const Wl=t=>Nu.get(t);function Zm(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=ti(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ti(o.result),c.oldVersion,c.newVersion,ti(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const JA=["get","getKey","getAll","getAllKeys","count"],ZA=["put","add","delete","clear"],ql=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ZA.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||JA.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ql.set(e,r),r}QA(t=>({...t,get:(e,n,i)=>_d(e,n)||t.get(e,n,i),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function tb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",yd="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Ps("@firebase/app"),nb="@firebase/app-compat",ib="@firebase/analytics-compat",sb="@firebase/analytics",rb="@firebase/app-check-compat",ob="@firebase/app-check",ab="@firebase/auth",lb="@firebase/auth-compat",cb="@firebase/database",ub="@firebase/data-connect",hb="@firebase/database-compat",fb="@firebase/functions",db="@firebase/functions-compat",pb="@firebase/installations",gb="@firebase/installations-compat",mb="@firebase/messaging",_b="@firebase/messaging-compat",yb="@firebase/performance",vb="@firebase/performance-compat",Eb="@firebase/remote-config",Tb="@firebase/remote-config-compat",Ib="@firebase/storage",wb="@firebase/storage-compat",Ab="@firebase/firestore",bb="@firebase/vertexai",Cb="@firebase/firestore-compat",Rb="firebase",Sb="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="[DEFAULT]",Pb={[Cc]:"fire-core",[nb]:"fire-core-compat",[sb]:"fire-analytics",[ib]:"fire-analytics-compat",[ob]:"fire-app-check",[rb]:"fire-app-check-compat",[ab]:"fire-auth",[lb]:"fire-auth-compat",[cb]:"fire-rtdb",[ub]:"fire-data-connect",[hb]:"fire-rtdb-compat",[fb]:"fire-fn",[db]:"fire-fn-compat",[pb]:"fire-iid",[gb]:"fire-iid-compat",[mb]:"fire-fcm",[_b]:"fire-fcm-compat",[yb]:"fire-perf",[vb]:"fire-perf-compat",[Eb]:"fire-rc",[Tb]:"fire-rc-compat",[Ib]:"fire-gcs",[wb]:"fire-gcs-compat",[Ab]:"fire-fst",[Cb]:"fire-fst-compat",[bb]:"fire-vertex","fire-js":"fire-js",[Rb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,Nb=new Map,Sc=new Map;function vd(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(Sc.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of sa.values())vd(n,t);for(const n of Nb.values())vd(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ni=new gi("app","Firebase",kb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=Sb;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ni.create("bad-app-name",{appName:String(s)});if(n||(n=zm()),!n)throw ni.create("no-options");const r=sa.get(s);if(r){if(Lr(n,r.options)&&Lr(i,r.config))return r;throw ni.create("duplicate-app",{appName:s})}const o=new UA(s);for(const c of Sc.values())o.addComponent(c);const l=new Ob(n,i,o);return sa.set(s,l),l}function t_(t=Rc){const e=sa.get(t);if(!e&&t===Rc&&zm())return e_();if(!e)throw ni.create("no-app",{appName:t});return e}function rt(t,e,n){var i;let s=(i=Pb[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Ot(new Rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="firebase-heartbeat-database",xb=1,Vr="firebase-heartbeat-store";let zl=null;function n_(){return zl||(zl=Zm(Db,xb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ni.create("idb-open",{originalErrorMessage:t.message})})),zl}async function Mb(t){try{const n=(await n_()).transaction(Vr),i=await n.objectStore(Vr).get(i_(t));return await n.done,i}catch(e){if(e instanceof fn)$n.warn(e.message);else{const n=ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Ed(t,e){try{const i=(await n_()).transaction(Vr,"readwrite");await i.objectStore(Vr).put(e,i_(t)),await i.done}catch(n){if(n instanceof fn)$n.warn(n.message);else{const i=ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(i.message)}}}function i_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=1024,Vb=30;class Fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bb(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Td();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Vb){const o=$b(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$n.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Td(),{heartbeatsToSend:i,unsentEntries:s}=Ub(this._heartbeatsCache.heartbeats),r=ta(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return $n.warn(n),""}}}function Td(){return new Date().toISOString().substring(0,10)}function Ub(t,e=Lb){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Id(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Id(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Bb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Su()?Qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Id(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}function $b(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){Ot(new Rt("platform-logger",e=>new eb(e),"PRIVATE")),Ot(new Rt("heartbeat",e=>new Fb(e),"PRIVATE")),rt(Cc,yd,t),rt(Cc,yd,"esm2017"),rt("fire-js","")}jb("");var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ku;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,b,S){for(var T=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)T[Et-2]=arguments[Et];return y.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(b=0;16>b;++b)A[b]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],b=w.g[2];var S=w.g[3],T=y+(S^I&(b^S))+A[0]+3614090360&4294967295;y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[3]+3250441966&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[4]+4118548399&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[7]+4249261313&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[8]+1770035416&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[11]+2304563134&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(S^I&(b^S))+A[12]+1804603682&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(b^y&(I^b))+A[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(I^S&(y^I))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=I+(y^b&(S^y))+A[15]+1236535329&4294967295,I=b+(T<<22&4294967295|T>>>10),T=y+(b^S&(I^b))+A[1]+4129170786&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[0]+3921069994&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[5]+3593408605&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[4]+3889429448&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[9]+568446438&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[8]+1163531501&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(I^b))+A[13]+2850285829&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^b&(y^I))+A[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^I&(S^y))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(b^S))+A[12]+2368359562&4294967295,I=b+(T<<20&4294967295|T>>>12),T=y+(I^b^S)+A[5]+4294588738&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[14]+4259657740&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[1]+2763975236&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[10]+3200236656&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[13]+681279174&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[6]+76029189&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(I^b^S)+A[9]+3654602809&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^b)+A[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^I)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=I+(b^S^y)+A[2]+3299628645&4294967295,I=b+(T<<23&4294967295|T>>>9),T=y+(b^(I|~S))+A[0]+4096336452&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[5]+4237533241&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[12]+1700485571&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[1]+2240044497&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[8]+1873313359&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[13]+1309151649&4294967295,I=b+(T<<21&4294967295|T>>>11),T=y+(b^(I|~S))+A[4]+4149444226&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~b))+A[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~I))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=I+(S^(b|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}i.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,A=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<y;)if(A[b++]=w[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)w[I++]=this.g[y]>>>A&255;return w};function r(w,y){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==y||(I[b]=S,A=!1)}this.g=I}var l={};function c(w){return-128<=w&&128>w?r(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(u(-w));for(var y=[],I=1,A=0;w>=I;A++)y[A]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(y,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),T=parseInt(w.substring(b,b+S),y);8>S?(S=u(Math.pow(y,S)),A=A.j(S).add(u(T))):(A=A.j(I),A=A.add(u(T)))}return A}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(k(this))return"-"+O(this).toString(w);for(var y=u(Math.pow(w,6)),I=this,A="";;){var b=B(I,y).g;I=H(I,b.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=b,R(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=H(this,w),k(w)?-1:R(w)?0:1};function O(w){for(var y=w.g.length,I=[],A=0;A<y;A++)I[A]=~w.g[A];return new o(I,~w.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0,b=0;b<=y;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,I[b]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function H(w,y){return w.add(O(y))}t.j=function(w){if(R(this)||R(w))return p;if(k(this))return k(w)?O(this).j(O(w)):O(O(this).j(w));if(k(w))return O(this.j(O(w)));if(0>this.l(_)&&0>w.l(_))return u(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,Et=w.i(b)>>>16,Bt=w.i(b)&65535;I[2*A+2*b]+=T*Bt,$(I,2*A+2*b),I[2*A+2*b+1]+=S*Bt,$(I,2*A+2*b+1),I[2*A+2*b+1]+=T*Et,$(I,2*A+2*b+1),I[2*A+2*b+2]+=S*Et,$(I,2*A+2*b+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function $(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function j(w,y){this.g=w,this.h=y}function B(w,y){if(R(y))throw Error("division by zero");if(R(w))return new j(p,p);if(k(w))return y=B(O(w),y),new j(O(y.g),O(y.h));if(k(y))return y=B(w,O(y)),new j(O(y.g),y.h);if(30<w.g.length){if(k(w)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=y;0>=A.l(w);)I=oe(I),A=oe(A);var b=ce(I,1),S=ce(A,1);for(A=ce(A,2),I=ce(I,2);!R(A);){var T=S.add(A);0>=T.l(w)&&(b=b.add(I),S=T),A=ce(A,1),I=ce(I,1)}return y=H(w,b.j(y)),new j(b,y)}for(b=p;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=u(I),T=S.j(y);k(T)||0<T.l(w);)I-=A,S=u(I),T=S.j(y);R(S)&&(S=g),b=b.add(S),w=H(w,T)}return new j(b,w)}t.A=function(w){return B(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function oe(w){for(var y=w.g.length+1,I=[],A=0;A<y;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function ce(w,y){var I=y>>5;y%=32;for(var A=w.g.length-I,b=[],S=0;S<A;S++)b[S]=0<y?w.i(S+I)>>>y|w.i(S+I+1)<<32-y:w.i(S+I);return new o(b,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,ku=o}).apply(typeof wd<"u"?wd:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var s_,sr,r_,jo,Pc,o_,a_,l_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=n(this);function s(a,h){if(h)e:{var d=i;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function r(a,h){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return r(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,N){for(var z=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)z[Pe-2]=arguments[Pe];return h.prototype[P].apply(m,z)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const P=a.length||0,N=m.length||0;a.length=P+N;for(let z=0;z<N;z++)a[P+z]=m[z]}else a.push(m)}}class H{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var oe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ce(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<I.length;N++)d=I[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function S(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Et{constructor(){this.h=this.g=null}add(h,d){const m=Bt.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Bt=new H(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,de=!1,Dt=new Et,Qt=()=>{const a=l.Promise.resolve(void 0);ge=()=>{a.then($t)}};var $t=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var h=Bt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}de=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function dn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(oe){e:{try{B(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}R(dn,Ue);var St={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,d,m,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=P,this.key=++X,this.da=this.fa=!1}function J(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,h,d,m,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var z=E(a,h,m,P);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new Q(h,this.src,N,!!m,P),h.fa=d,a.push(h)),h};function v(a,h){var d=h.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(J(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function E(a,h,d,m){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),x={};function L(a,h,d,m,P){if(Array.isArray(h)){for(var N=0;N<h.length;N++)L(a,h[N],d,m,P);return null}return d=ie(d),a&&a[D]?a.K(h,d,u(m)?!!m.capture:!1,P):M(a,h,d,!1,m,P)}function M(a,h,d,m,P,N){if(!h)throw Error("Invalid event type");var z=u(P)?!!P.capture:!!P,Pe=Y(a);if(Pe||(a[C]=Pe=new Te(a)),d=Pe.add(h,d,m,z,N),d.proxy)return d;if(m=G(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Wn||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),m,P);else if(a.attachEvent)a.attachEvent(F(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=te;return a}function q(a,h,d,m,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)q(a,h[N],d,m,P);else m=u(m)?!!m.capture:!!m,d=ie(d),a&&a[D]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=E(N,d,m,P),-1<d&&(J(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,d,m,P)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[D])v(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(F(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=Y(h))?(v(d,a),d.h==0&&(d.src=null,h[C]=null)):J(a)}}}function F(a){return a in x?x[a]:x[a]="on"+a}function te(a,h){if(a.da)a=!0;else{h=new dn(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&W(a),a=d.call(m,h)}return a}function Y(a){return a=a[C],a instanceof Te?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(h){return a.handleEvent(h)}),a[ee])}function ne(){Fe.call(this),this.i=new Te(this),this.M=this,this.F=null}R(ne,Fe),ne.prototype[D]=!0,ne.prototype.removeEventListener=function(a,h,d,m){q(this,a,h,d,m)};function ae(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var P=h;h=new Ue(m,a),A(h,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var z=h.g=d[N];P=me(z,m,!0,h)&&P}if(z=h.g=a,P=me(z,m,!0,h)&&P,P=me(z,m,!1,h)&&P,d)for(N=0;N<d.length;N++)z=h.g=d[N],P=me(z,m,!1,h)&&P}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)J(d[m]);delete a.g[h],a.h--}}this.F=null},ne.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},ne.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function me(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,N=0;N<h.length;++N){var z=h[N];if(z&&!z.da&&z.capture==d){var Pe=z.listener,tt=z.ha||z.src;z.fa&&v(a.i,z),P=Pe.call(tt,m)!==!1&&P}}return P&&!m.defaultPrevented}function at(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ze(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,Ze(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class jt extends Fe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){Fe.call(this),this.h=a,this.g={}}R(lt,Fe);var qn=[];function Ls(a){ce(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Ls(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Ht=l.JSON.parse,oo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hl(){}hl.prototype.h=null;function Rh(a){return a.h||(a.h=a.i())}function Sh(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fl(){Ue.call(this,"d")}R(fl,Ue);function dl(){Ue.call(this,"c")}R(dl,Ue);var mi={},Ph=null;function ao(){return Ph=Ph||new ne}mi.La="serverreachability";function Nh(a){Ue.call(this,mi.La,a)}R(Nh,Ue);function Fs(a){const h=ao();ae(h,new Nh(h))}mi.STAT_EVENT="statevent";function kh(a,h){Ue.call(this,mi.STAT_EVENT,a),this.stat=h}R(kh,Ue);function Tt(a){const h=ao();ae(h,new kh(h,a))}mi.Ma="timingevent";function Oh(a,h){Ue.call(this,mi.Ma,a),this.size=h}R(Oh,Ue);function Us(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function cE(a,h,d,m,P,N){a.info(function(){if(a.g)if(N)for(var z="",Pe=N.split("&"),tt=0;tt<Pe.length;tt++){var Ie=Pe[tt].split("=");if(1<Ie.length){var ct=Ie[0];Ie=Ie[1];var ut=ct.split("_");z=2<=ut.length&&ut[1]=="type"?z+(ct+"="+Ie+"&"):z+(ct+"=redacted&")}}else z=null;else z=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+d+`
`+z})}function uE(a,h,d,m,P,N,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+z})}function Qi(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+fE(a,d)+(m?" "+m:"")})}function hE(a,h){a.info(function(){return"TIMEOUT: "+h})}Bs.prototype.info=function(){};function fE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return et(d)}catch{return h}}var lo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pl;function co(){}R(co,hl),co.prototype.g=function(){return new XMLHttpRequest},co.prototype.i=function(){return{}},pl=new co;function zn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xh}function xh(){this.i=null,this.g="",this.h=!1}var Mh={},gl={};function ml(a,h,d){a.L=1,a.v=po(Cn(h)),a.m=d,a.P=!0,Lh(a,null)}function Lh(a,h){a.F=Date.now(),uo(a),a.A=Cn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Yh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new xh,a.g=gf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new jt(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(qn[0]=P.toString()),P=qn);for(var N=0;N<P.length;N++){var z=L(d,P[N],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Fs(),cE(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Rn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=Rn(this.g);var h=this.g.Ba();const Ji=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||sf(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Ji?Fs(3):Fs(2)),_l(this);var d=this.g.Z();this.X=d;t:if(Vh(this)){var m=sf(this.g);a="";var P=m.length,N=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_i(this),$s(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==P-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,uE(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,tt=this.g;if((Pe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Pe)){var Ie=Pe;break t}}Ie=null}if(d=Ie)Qi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yl(this,d);else{this.o=!1,this.s=3,Tt(12),_i(this),$s(this);break e}}if(this.P){d=!0;let Yt;for(;!this.J&&this.C<z.length;)if(Yt=dE(this,z),Yt==gl){ut==4&&(this.s=4,Tt(14),d=!1),Qi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Mh){this.s=4,Tt(15),Qi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Qi(this.i,this.l,Yt,null),yl(this,Yt);if(Vh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Qi(this.i,this.l,z,"[Invalid Chunked Response]"),_i(this),$s(this);else if(0<z.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Al(ct),ct.M=!0,Tt(11))}}else Qi(this.i,this.l,z,null),yl(this,z);ut==4&&_i(this),this.o&&!this.J&&(ut==4?hf(this.j,this):(this.o=!1,uo(this)))}else NE(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),_i(this),$s(this)}}}catch{}finally{}};function Vh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dE(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?gl:(d=Number(h.substring(d,m)),isNaN(d)?Mh:(m+=1,m+d>h.length?gl:(h=h.slice(m,m+d),a.C=m+d,h)))}zn.prototype.cancel=function(){this.J=!0,_i(this)};function uo(a){a.S=Date.now()+a.I,Fh(a,a.I)}function Fh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(g(a.ba,a),h)}function _l(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hE(this.i,this.A),this.L!=2&&(Fs(),Tt(17)),_i(this),this.s=2,$s(this)):Fh(this,this.S-a)};function $s(a){a.j.G==0||a.J||hf(a.j,a)}function _i(a){_l(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ls(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function yl(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||vl(d.h,a))){if(!a.K&&vl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Eo(d),yo(d);else break e;wl(d),Tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Us(g(d.Za,d),6e3));if(1>=$h(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vi(d,11)}else if((a.K||d.g==a)&&Eo(d),!$(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let Ie=P[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const ct=Ie[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const ut=Ie[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const Ji=Ie[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(m=1.5*Ji,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Yt=a.g;if(Yt){const Io=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var N=m.h;N.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(El(N,N.h),N.h=null))}if(m.D){const bl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;bl&&(m.ya=bl,De(m.I,m.D,bl))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var z=a;if(m.qa=pf(m,m.J?m.ia:null,m.W),z.K){jh(m.h,z);var Pe=z,tt=m.L;tt&&(Pe.I=tt),Pe.B&&(_l(Pe),uo(Pe)),m.g=z}else cf(m);0<d.i.length&&vo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||vi(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?vi(d,7):Il(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Fs(4)}catch{}}var pE=class{constructor(a,h){this.g=a,this.map=h}};function Uh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $h(a){return a.h?1:a.g?a.g.size:0}function vl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function El(a,h){a.g?a.g.add(h):a.h=h}function jh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Uh.prototype.cancel=function(){if(this.i=Hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function gE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function mE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function Wh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=mE(a),m=gE(a),P=m.length,N=0;N<P;N++)h.call(void 0,m[N],d&&d[N],a)}var qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _E(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var N=a[d].substring(0,m);P=a[d].substring(m+1)}else N=a[d];h(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function yi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yi){this.h=a.h,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.s),this.l=a.l;var h=a.i,d=new Ws;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),zh(this,d),this.m=a.m}else a&&(h=String(a).match(qh))?(this.h=!1,ho(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),fo(this,h[4]),this.l=js(h[5]||"",!0),zh(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}yi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hs(h,Gh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,Gh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?EE:vE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,IE)),a.join("")};function Cn(a){return new yi(a)}function ho(a,h,d){a.j=d?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function zh(a,h,d){h instanceof Ws?(a.i=h,wE(a.i,a.h)):(d||(h=Hs(h,TE)),a.i=new Ws(h,a.h))}function De(a,h,d){a.i.set(h,d)}function po(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,yE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gh=/[#\/\?@]/g,vE=/[#\?:]/g,EE=/[#\?]/g,TE=/[#\?@]/g,IE=/#/g;function Ws(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&_E(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ws.prototype,t.add=function(a,h){Gn(this),this.i=null,a=Yi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Kh(a,h){Gn(a),h=Yi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Qh(a,h){return Gn(a),h=Yi(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(h,P,m,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const P=a[m];for(let N=0;N<P.length;N++)d.push(h[m])}return d},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")Qh(this,a)&&(h=h.concat(this.g.get(Yi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=Yi(this,a),Qh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Yh(a,h,d){Kh(a,h),0<d.length&&(a.i=null,a.g.set(Yi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const N=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var P=N;z[m]!==""&&(P+="="+encodeURIComponent(String(z[m]))),a.push(P)}}return this.i=a.join("&")};function Yi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wE(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Kh(this,m),Yh(this,P,d))},a)),a.j=h}function AE(a,h){const d=new Bs;if(l.Image){const m=new Image;m.onload=_(Kn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Kn,d,"TestLoadImage: error",!1,h,m),m.onabort=_(Kn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Kn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function bE(a,h){const d=new Bs,m=new AbortController,P=setTimeout(()=>{m.abort(),Kn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Kn(d,"TestPingServer: ok",!0,h):Kn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Kn(d,"TestPingServer: error",!1,h)})}function Kn(a,h,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function CE(){this.g=new oo}function RE(a,h,d){const m=d||"";try{Wh(a,function(P,N){let z=P;u(P)&&(z=et(P)),h.push(m+N+"="+encodeURIComponent(z))})}catch(P){throw h.push(m+"type="+encodeURIComponent("_badmap")),P}}function go(a){this.l=a.Ub||null,this.j=a.eb||!1}R(go,hl),go.prototype.g=function(){return new mo(this.l,this.j)},go.prototype.i=function(a){return function(){return a}}({});function mo(a,h){ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(mo,ne),t=mo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):zs(this),this.readyState==3&&Xh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jh(a){let h="";return ce(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Tl(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Jh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,h,d))}function $e(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R($e,ne);var SE=/^https?$/i,PE=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pl.g(),this.v=this.o?Rh(this.o):Rh(pl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Zh(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(PE,h,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Zh(this,N)}};function Zh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ef(a),_o(a)}function ef(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?tf(this):this.bb())},t.bb=function(){tf(this)};function tf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)at(a.Ea,0,a);else if(ae(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=z===0){var P=String(a.D).match(qh)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!SE.test(P?P.toLowerCase():"")}d=m}if(d)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var N=2<Rn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ef(a)}}finally{_o(a)}}}}function _o(a,h){if(a.g){nf(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ae(a,"ready");try{d.onreadystatechange=m}catch{}}}function nf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function sf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function NE(a){const h={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var d=b(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}w(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function rf(a){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gs("baseRetryDelayMs",5e3,a),this.cb=Gs("retryDelaySeedMs",1e4,a),this.Wa=Gs("forwardChannelMaxRetries",2,a),this.wa=Gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Uh(a&&a.concurrentRequestLimit),this.Da=new CE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){Tt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=pf(this,null,this.W),vo(this)};function Il(a){if(of(a),a.G==3){var h=a.U++,d=Cn(a.I);if(De(d,"SID",a.K),De(d,"RID",h),De(d,"TYPE","terminate"),Ks(a,d),h=new zn(a,a.j,h),h.L=2,h.v=po(Cn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=gf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),uo(h)}df(a)}function yo(a){a.g&&(Al(a),a.g.cancel(),a.g=null)}function of(a){yo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function vo(a){if(!Bh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ge||Qt(),de||(ge(),de=!0),Dt.add(h,a),a.B=0}}function kE(a,h){return $h(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(g(a.Ga,a,h),ff(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new zn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=lf(this,P,h),d=Cn(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ks(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Jh(N)))+"&"+h:this.m&&Tl(d,this.m,N)),El(this.h,P),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),P.T=!0,ml(P,d,null)):ml(P,d,h),this.G=2}}else this.G==3&&(a?af(this,a):this.i.length==0||Bh(this.h)||af(this))};function af(a,h){var d;h?d=h.l:d=a.U++;const m=Cn(a.I);De(m,"SID",a.K),De(m,"RID",d),De(m,"AID",a.T),Ks(a,m),a.m&&a.o&&Tl(m,a.m,a.o),d=new zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=lf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),El(a.h,d),ml(d,m,h)}function Ks(a,h){a.H&&ce(a.H,function(d,m){De(h,m,d)}),a.l&&Wh({},function(d,m){De(h,m,d)})}function lf(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const z=["count="+d];N==-1?0<d?(N=P[0].g,z.push("ofs="+N)):N=0:z.push("ofs="+N);let Pe=!0;for(let tt=0;tt<d;tt++){let Ie=P[tt].g;const ct=P[tt].map;if(Ie-=N,0>Ie)N=Math.max(0,P[tt].g-100),Pe=!1;else try{RE(ct,z,"req"+Ie+"_")}catch{m&&m(ct)}}if(Pe){m=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function cf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ge||Qt(),de||(ge(),de=!0),Dt.add(h,a),a.v=0}}function wl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(g(a.Fa,a),ff(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),yo(this),uf(this))};function Al(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function uf(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&Tl(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=po(Cn(h)),d.m=null,d.P=!0,Lh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,yo(this),wl(this),Tt(19))};function Eo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hf(a,h){var d=null;if(a.g==h){Eo(a),Al(a),a.g=null;var m=2}else if(vl(a.h,h))d=h.D,jh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;m=ao(),ae(m,new Oh(m,d)),vo(a)}else cf(a);else if(P=h.s,P==3||P==0&&0<h.X||!(m==1&&kE(a,h)||m==2&&wl(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:vi(a,5);break;case 4:vi(a,10);break;case 3:vi(a,6);break;default:vi(a,2)}}}function ff(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function vi(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new yi(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ho(m,"https"),po(m),P?AE(m.toString(),d):bE(m.toString(),d)}else Tt(2);a.G=0,a.l&&a.l.sa(h),df(a),of(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function df(a){if(a.G=0,a.ka=[],a.l){const h=Hh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function pf(a,h,d){var m=d instanceof yi?Cn(d):new yi(d);if(m.g!="")h&&(m.g=h+"."+m.g),fo(m,m.s);else{var P=l.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var N=new yi(null);m&&ho(N,m),h&&(N.g=h),P&&fo(N,P),d&&(N.l=d),m=N}return d=a.D,h=a.ya,d&&h&&De(m,d,h),De(m,"VER",a.la),Ks(a,m),m}function gf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new go({eb:d})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mf(){}t=mf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){ne.call(this),this.g=new rf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!$(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!$(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Xi(this)}R(xt,ne),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Il(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=et(a),a=d);h.i.push(new pE(h.Ya++,a)),h.G==3&&vo(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,xt.aa.N.call(this)};function _f(a){fl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(_f,fl);function yf(){dl.call(this),this.status=1}R(yf,dl);function Xi(a){this.g=a}R(Xi,mf),Xi.prototype.ua=function(){ae(this.g,"a")},Xi.prototype.ta=function(a){ae(this.g,new _f(a))},Xi.prototype.sa=function(a){ae(this.g,new yf)},Xi.prototype.ra=function(){ae(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,l_=function(){return new To},a_=function(){return ao()},o_=mi,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lo.NO_ERROR=0,lo.TIMEOUT=8,lo.HTTP_ERROR=6,jo=lo,Dh.COMPLETE="complete",r_=Dh,Sh.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",ne.prototype.listen=ne.prototype.K,sr=Sh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,s_=$e}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Ad="@firebase/firestore",bd="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Ps("@firebase/firestore");function ss(){return xi.logLevel}function Z(t,...e){if(xi.logLevel<=he.DEBUG){const n=e.map(Ou);xi.debug(`Firestore (${ks}): ${t}`,...n)}}function Mi(t,...e){if(xi.logLevel<=he.ERROR){const n=e.map(Ou);xi.error(`Firestore (${ks}): ${t}`,...n)}}function Ka(t,...e){if(xi.logLevel<=he.WARN){const n=e.map(Ou);xi.warn(`Firestore (${ks}): ${t}`,...n)}}function Ou(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Mi(e),new Error(e)}function He(t,e){t||fe()}function Oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class Wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qb{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ki,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ki)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(He(typeof i.accessToken=="string"),new c_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string"),new ft(e)}}class zb{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Gb{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kb{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Mn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){He(this.o===void 0);const i=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Cd(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string"),this.R=n.token,new Cd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Qb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%62))}return i}}function Ee(t,e){return t<e?-1:t>e?1:0}function Nc(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return Ee(i,s);{const r=Yb(),o=Xb(r.encode(Rd(t,n)),r.encode(Rd(e,n)));return o!==0?o:Ee(i,s)}}n+=i>65535?2:1}return Ee(t.length,e.length)}function Rd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Xb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ee(t[n],e[n]);return Ee(t.length,e.length)}function Ts(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=-62135596800,Pd=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Pd);return new Je(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sd)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pd}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Sd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Je(0,0))}static max(){return new Ve(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="__name__";class mn{constructor(e,n,i){n===void 0?n=0:n>e.length&&fe(),i===void 0?i=e.length-n:i>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=mn.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return Ee(e.length,n.length)}static compareSegments(e,n){const i=mn.isNumericId(e),s=mn.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):Nc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ku.fromString(e.substring(4,e.length-2))}}class je extends mn{construct(e,n,i){return new je(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const Jb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends mn{construct(e,n,i){return new st(e,n,i)}static isValidIdentifier(e){return Jb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nd}static keyField(){return new st([Nd])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new se(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(i+=l,s++):(r(),s++)}if(r(),o)throw new se(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(je.fromString(e))}static fromName(e){return new ue(je.fromString(e).popFirst(5))}static empty(){return new ue(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new je(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=-1;function Zb(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Ve.fromTimestamp(i===1e9?new Je(n+1,0):new Je(n,i));return new ai(s,ue.empty(),e)}function eC(t){return new ai(t.readTime,t.key,Fr)}class ai{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new ai(Ve.min(),ue.empty(),Fr)}static max(){return new ai(Ve.max(),ue.empty(),Fr)}}function tC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==nC)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,i)=>{n(e)})}static reject(e){return new V((n,i)=>{i(e)})}static waitFor(e){return new V((n,i)=>{let s=0,r=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=V.resolve(!1);for(const i of e)n=n.next(s=>s?V.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new V((i,s)=>{const r=e.length,o=new Array(r);let l=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===r&&i(o)},f=>s(f))}})}static doWhile(e,n){return new V((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function sC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.oe(i),this._e=i=>n.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}xu.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=-1;function Lu(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function rC(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="";function oC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kd(e)),e=aC(t.get(n),e);return kd(e)}function aC(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case h_:n+="";break;default:n+=r}}return n}function kd(t){return t+h_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class kc{constructor(e,n){this.comparator=e,this.root=n||ii.EMPTY}insert(e,n){return new kc(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ii.BLACK,null,null))}remove(e){return new kc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ii.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}},Ro=class{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ii=class Nn{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Nn.RED,this.left=s??Nn.EMPTY,this.right=r??Nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Nn(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Nn.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}};ii.EMPTY=null,ii.RED=!0,ii.BLACK=!1;ii.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,i,s,r){return this}insert(e,n,i){return new ii(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new un(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dd(this.data.getIterator())}getIteratorFrom(e){return new Dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new tn([])}unionWith(e){let n=new ot(st.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new lC("Invalid base64 string: "+r):r}}(e);return new In(n)}static fromUint8Array(e){const n=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new In(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}In.EMPTY_BYTE_STRING=new In("");const cC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(t){if(He(!!t),typeof t=="string"){let e=0;const n=cC.exec(t);if(He(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?In.fromBase64String(t):In.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="server_timestamp",p_="__type__",g_="__previous_value__",m_="__local_write_time__";function Vu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[p_])===null||n===void 0?void 0:n.stringValue)===d_}function Fu(t){const e=t.mapValue.fields[g_];return Vu(e)?Fu(e):e}function oa(t){const e=Li(t.mapValue.fields[m_].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,i,s,r,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const aa="(default)";class la{constructor(e,n){this.projectId=e,this.database=n||aa}static empty(){return new la("","")}get isDefaultDatabase(){return this.database===aa}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="__type__",hC="__max__",So={mapValue:{}},y_="__vector__",Oc="value";function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vu(t)?4:dC(t)?9007199254740991:fC(t)?10:11:fe()}function wn(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Li(s.timestampValue),l=Li(r.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Is(s.bytesValue).isEqual(Is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return nt(s.geoPointValue.latitude)===nt(r.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return nt(s.integerValue)===nt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=nt(s.doubleValue),l=nt(r.doubleValue);return o===l?ra(o)===ra(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,r){const o=s.mapValue.fields||{},l=r.mapValue.fields||{};if(Od(o)!==Od(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function Ur(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=Vi(t),i=Vi(e);if(n!==i)return Ee(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(r,o){const l=nt(r.integerValue||r.doubleValue),c=nt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return xd(t.timestampValue,e.timestampValue);case 4:return xd(oa(t),oa(e));case 5:return Nc(t.stringValue,e.stringValue);case 6:return function(r,o){const l=Is(r),c=Is(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const l=r.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Ee(l[u],c[u]);if(f!==0)return f}return Ee(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const l=Ee(nt(r.latitude),nt(o.latitude));return l!==0?l:Ee(nt(r.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Md(t.arrayValue,e.arrayValue);case 10:return function(r,o){var l,c,u,f;const p=r.fields||{},g=o.fields||{},_=(l=p[Oc])===null||l===void 0?void 0:l.arrayValue,R=(c=g[Oc])===null||c===void 0?void 0:c.arrayValue,k=Ee(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Md(_,R)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===So.mapValue&&o===So.mapValue)return 0;if(r===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Nc(c[p],f[p]);if(g!==0)return g;const _=ws(l[c[p]],u[f[p]]);if(_!==0)return _}return Ee(c.length,f.length)}(t.mapValue,e.mapValue);default:throw fe()}}function xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Li(t),i=Li(e),s=Ee(n.seconds,i.seconds);return s!==0?s:Ee(n.nanos,i.nanos)}function Md(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=ws(n[s],i[s]);if(r)return r}return Ee(n.length,i.length)}function As(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Li(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",s=!0;for(const r of n.values||[])s?s=!1:i+=",",i+=Dc(r);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Dc(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function Ho(t){switch(Vi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fu(t);return e?16+Ho(e):16;case 5:return 2*t.stringValue.length;case 6:return Is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,r)=>s+Ho(r),0)}(t.arrayValue);case 10:case 11:return function(i){let s=0;return Os(i.fields,(r,o)=>{s+=r.length+Ho(o)}),s}(t.mapValue);default:throw fe()}}function xc(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function Wo(t){return!!t&&"mapValue"in t}function fC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[__])===null||n===void 0?void 0:n.stringValue)===y_}function gr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Os(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=gr(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===hC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Wo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(n)}setAll(e){let n=st.emptyPath(),i={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=l.popLast()}o?i[l.lastSegment()]=gr(o):s.push(l.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Wo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Os(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Zt(gr(this.value))}}function v_(t){const e=[];return Os(t.fields,(n,i)=>{const s=new st([n]);if(Wo(i)){const r=v_(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,i,s,r,o,l){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xt(e,0,Ve.min(),Ve.min(),Ve.min(),Zt.empty(),0)}static newFoundDocument(e,n,i,s){return new Xt(e,1,n,Ve.min(),i,s,0)}static newNoDocument(e,n){return new Xt(e,2,n,Ve.min(),Ve.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,Ve.min(),Ve.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=ue.comparator(ue.fromName(o.referenceValue),n.key):i=ws(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function pC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{}class Ye extends E_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new mC(e,n,i):n==="array-contains"?new vC(e,i):n==="in"?new EC(e,i):n==="not-in"?new TC(e,i):n==="array-contains-any"?new IC(e,i):new Ye(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new _C(e,i):new yC(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends E_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new li(e,n)}matches(e){return T_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function T_(t){return t.op==="and"}function I_(t){return gC(t)&&T_(t)}function gC(t){for(const e of t.filters)if(e instanceof li)return!1;return!0}function Mc(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+As(t.value);if(I_(t))return t.filters.map(e=>Mc(e)).join(",");{const e=t.filters.map(n=>Mc(n)).join(",");return`${t.op}(${e})`}}function w_(t,e){return t instanceof Ye?function(i,s){return s instanceof Ye&&i.op===s.op&&i.field.isEqual(s.field)&&wn(i.value,s.value)}(t,e):t instanceof li?function(i,s){return s instanceof li&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,l)=>r&&w_(o,s.filters[l]),!0):!1}(t,e):void fe()}function A_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(t):t instanceof li?function(n){return n.op.toString()+" {"+n.getFilters().map(A_).join(" ,")+"}"}(t):"Filter"}class mC extends Ye{constructor(e,n,i){super(e,n,i),this.key=ue.fromName(i.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class _C extends Ye{constructor(e,n){super(e,"in",n),this.keys=b_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yC extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=b_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>ue.fromName(i.referenceValue))}class vC extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&Ur(n.arrayValue,this.value)}}class EC extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class TC extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class IC extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ur(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n=null,i=[],s=[],r=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=l,this.le=null}}function Fd(t,e=null,n=[],i=[],s=null,r=null,o=null){return new wC(t,e,n,i,s,r,o)}function Bu(t){const e=Oe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Mc(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>As(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>As(i)).join(",")),e.le=n}return e.le}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!w_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vd(t.startAt,e.startAt)&&Vd(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n=null,i=[],s=[],r=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function AC(t,e,n,i,s,r,o,l){return new Qa(t,e,n,i,s,r,o,l)}function bC(t){return new Qa(t)}function Ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CC(t){return t.collectionGroup!==null}function mr(t){const e=Oe(t);if(e.he===null){e.he=[];const n=new Set;for(const r of e.explicitOrderBy)e.he.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(st.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.he.push(new ua(r,i))}),n.has(st.keyField().canonicalString())||e.he.push(new ua(st.keyField(),i))}return e.he}function Oi(t){const e=Oe(t);return e.Pe||(e.Pe=RC(e,mr(t))),e.Pe}function RC(t,e){if(t.limitType==="F")return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new ua(s.field,r)});const n=t.endAt?new ca(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ca(t.startAt.position,t.startAt.inclusive):null;return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Lc(t,e,n){return new Qa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function C_(t,e){return $u(Oi(t),Oi(e))&&t.limitType===e.limitType}function R_(t){return`${Bu(Oi(t))}|lt:${t.limitType}`}function Js(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(s=>A_(s)).join(", ")}]`),Lu(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(s=>As(s)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(s=>As(s)).join(",")),`Target(${i})`}(Oi(t))}; limitType=${t.limitType})`}function ju(t,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):ue.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(t,e)&&function(i,s){for(const r of mr(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(i,s){return!(i.startAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u<=0:u<0}(i.startAt,mr(i),s)||i.endAt&&!function(o,l,c){const u=Ld(o,l,c);return o.inclusive?u>=0:u>0}(i.endAt,mr(i),s))}(t,e)}function SC(t){return(e,n)=>{let i=!1;for(const s of mr(t)){const r=PC(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function PC(t,e,n){const i=t.field.isKeyField()?ue.comparator(e.key,n.key):function(r,o,l){const c=o.data.field(r),u=l.data.field(r);return c!==null&&u!==null?ws(c,u):fe()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Os(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=new un(ue.comparator);function ha(){return NC}const S_=new un(ue.comparator);function Po(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=S_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function bi(){return _r()}function N_(){return _r()}function _r(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const kC=new un(ue.comparator),OC=new ot(ue.comparator);function pt(...t){let e=OC;for(const n of t)e=e.add(n);return e}const DC=new ot(Ee);function xC(){return DC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function MC(t,e){return rC(e)?k_(e):Hu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this._=void 0}}function LC(t,e,n){return t instanceof fa?function(s,r){const o={fields:{[p_]:{stringValue:d_},[m_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Vu(r)&&(r=Fu(r)),r&&(o.fields[g_]=r),{mapValue:o}}(n,e):t instanceof Br?D_(t,e):t instanceof $r?x_(t,e):function(s,r){const o=O_(s,r),l=Bd(o)+Bd(s.Ie);return xc(o)&&xc(s.Ie)?k_(l):Hu(s.serializer,l)}(t,e)}function VC(t,e,n){return t instanceof Br?D_(t,e):t instanceof $r?x_(t,e):n}function O_(t,e){return t instanceof da?function(i){return xc(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class fa extends Ya{}class Br extends Ya{constructor(e){super(),this.elements=e}}function D_(t,e){const n=M_(e);for(const i of t.elements)n.some(s=>wn(s,i))||n.push(i);return{arrayValue:{values:n}}}class $r extends Ya{constructor(e){super(),this.elements=e}}function x_(t,e){let n=M_(e);for(const i of t.elements)n=n.filter(s=>!wn(s,i));return{arrayValue:{values:n}}}class da extends Ya{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Bd(t){return nt(t.integerValue||t.doubleValue)}function M_(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FC(t,e){return t.field.isEqual(e.field)&&function(i,s){return i instanceof Br&&s instanceof Br||i instanceof $r&&s instanceof $r?Ts(i.elements,s.elements,wn):i instanceof da&&s instanceof da?wn(i.Ie,s.Ie):i instanceof fa&&s instanceof fa}(t.transform,e.transform)}class UC{constructor(e,n){this.version=e,this.transformResults=n}}class Fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fn}static exists(e){return new Fn(void 0,e)}static updateTime(e){return new Fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xa{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new F_(t.key,Fn.none()):new Yr(t.key,t.data,Fn.none());{const n=t.data,i=Zt.empty();let s=new ot(st.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new zi(t.key,i,new tn(s.toArray()),Fn.none())}}function BC(t,e,n){t instanceof Yr?function(s,r,o){const l=s.value.clone(),c=jd(s.fieldTransforms,r,o.transformResults);l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(s,r,o){if(!qo(s.precondition,r))return void r.convertToUnknownDocument(o.version);const l=jd(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(V_(s)),c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function yr(t,e,n,i){return t instanceof Yr?function(r,o,l,c){if(!qo(r.precondition,o))return l;const u=r.value.clone(),f=Hd(r.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,i):t instanceof zi?function(r,o,l,c){if(!qo(r.precondition,o))return l;const u=Hd(r.fieldTransforms,c,o),f=o.data;return f.setAll(V_(r)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(p=>p.field))}(t,e,n,i):function(r,o,l){return qo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $C(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=O_(i.transform,s||null);r!=null&&(n===null&&(n=Zt.empty()),n.set(i.field,r))}return n||null}function $d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Ts(i,s,(r,o)=>FC(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yr extends Xa{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zi extends Xa{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function V_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function jd(t,e,n){const i=new Map;He(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,l=e.data.field(r.field);i.set(r.field,VC(o,l,n[s]))}return i}function Hd(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,LC(r,o,e))}return i}class F_ extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jC extends Xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&BC(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=yr(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=yr(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=N_();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let l=this.applyToLocalView(o,r.mutatedFields);l=n.has(s.key)?null:l;const c=L_(o,l);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Ve.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pt())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,i)=>$d(n,i))&&Ts(this.baseMutations,e.baseMutations,(n,i)=>$d(n,i))}}class Wu{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){He(e.mutations.length===i.length);let s=function(){return kC}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Wu(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,_e;function qC(t){switch(t){case U.OK:return fe();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return fe()}}function zC(t){if(t===void 0)return Mi("GRPC error has no .code"),U.UNKNOWN;switch(t){case qe.OK:return U.OK;case qe.CANCELLED:return U.CANCELLED;case qe.UNKNOWN:return U.UNKNOWN;case qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case qe.INTERNAL:return U.INTERNAL;case qe.UNAVAILABLE:return U.UNAVAILABLE;case qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case qe.NOT_FOUND:return U.NOT_FOUND;case qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case qe.ABORTED:return U.ABORTED;case qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case qe.DATA_LOSS:return U.DATA_LOSS;default:return fe()}}(_e=qe||(qe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ku([4294967295,4294967295],0);class GC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QC(t,e){return Vc(t,e.toTimestamp())}function fs(t){return He(!!t),Ve.fromTimestamp(function(n){const i=Li(n);return new Je(i.seconds,i.nanos)}(t))}function U_(t,e){return Fc(t,e).canonicalString()}function Fc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YC(t){const e=je.fromString(t);return He(sR(e)),e}function Uc(t,e){return U_(t.databaseId,e.path)}function XC(t){const e=YC(t);return e.length===4?je.emptyPath():ZC(e)}function JC(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZC(t){return He(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function eR(t,e){let n;if(e instanceof Yr)n={update:Wd(t,e.key,e.value)};else if(e instanceof F_)n={delete:Uc(t,e.key)};else if(e instanceof zi)n={update:Wd(t,e.key,e.data),updateMask:iR(e.fieldMask)};else{if(!(e instanceof jC))return fe();n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const l=o.transform;if(l instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $r)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof da)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw fe()}(0,i))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:QC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:fe()}(t,e.precondition)),n}function tR(t,e){return t&&t.length>0?(He(e!==void 0),t.map(n=>function(s,r){let o=s.updateTime?fs(s.updateTime):fs(r);return o.isEqual(Ve.min())&&(o=fs(r)),new UC(o,s.transformResults||[])}(n,e))):[]}function nR(t){let e=XC(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){He(i===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(p){const g=B_(p);return g instanceof li&&I_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new ua(rs(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Lu(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new ca(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new ca(_,g)}(n.endAt)),AC(e,s,o,r,l,"F",c,u)}function B_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=rs(n.unaryFilter.field);return Ye.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=rs(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rs(n.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rs(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return li.create(n.compositeFilter.filters.map(i=>B_(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function rs(t){return st.fromServerFormat(t.fieldPath)}function iR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.Tt=e}}function oR(t){const e=nR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.Tn=new lR}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ai.min())}updateCollectionGroup(e,n,i){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class lR{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new ot(je.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new ot(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$_=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt($_,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new bs(0)}static Kn(){return new bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="LruGarbageCollector",cR=1048576;function Gd([t,e],[n,i]){const s=Ee(t,n);return s===0?Ee(e,i):s}class uR{constructor(e){this.Hn=e,this.buffer=new ot(Gd),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Gd(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hR{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Z(zd,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qr(n)?Z(zd,"Ignoring IndexedDB error during garbage collection: ",n):await Du(n)}await this.er(3e5)})}}class fR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return V.resolve(xu.ae);const i=new uR(n);return this.tr.forEachTarget(e,s=>i.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>i.Zn(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.tr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(qd)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qd):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let i,s,r,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(i=p,l=Date.now(),this.removeTargets(e,i,n))).next(p=>(r=p,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(p=>(u=Date.now(),ss()<=he.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${r} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:p})))}}function dR(t,e){return new fR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?V.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&yr(i.mutation,s,tn.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,pt()).next(()=>i))}getLocalViewOfDocuments(e,n,i=pt()){const s=bi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Po();return r.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,pt()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,i,s){let r=ha();const o=_r(),l=function(){return _r()}();return n.forEach((c,u)=>{const f=i.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof zi)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),yr(f.mutation,u,f.mutation.getFieldMask(),Je.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new gR(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const i=_r();let s=new un((o,l)=>o-l),r=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=i.get(c)||tn.empty();f=l.applyToLocalView(u,f),i.set(c,f);const p=(s.get(l.batchId)||pt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=N_();f.forEach(g=>{if(!r.has(g)){const _=L_(n.get(g),i.get(g));_!==null&&p.set(g,_),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):V.resolve(bi());let l=Fr,c=r;return o.next(u=>V.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),r.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,pt())).next(f=>({batchId:l,changes:P_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(i=>{let s=Po();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const r=n.collectionGroup;let o=Po();return this.indexManager.getCollectionParents(e,r).next(l=>V.forEach(l,c=>{const u=function(p,g){return new Qa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,i,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r,s))).next(o=>{r.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Xt.newInvalidDocument(f)))});let l=Po();return o.forEach((c,u)=>{const f=r.get(c);f!==void 0&&yr(f.mutation,u,tn.empty(),Je.now()),ju(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fs(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:oR(s.bundledQuery),readTime:fs(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.overlays=new un(ue.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const i=bi();return V.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.Et(e,n,r)}),V.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Rr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Rr.delete(i)),V.resolve()}getOverlaysForCollection(e,n,i){const s=bi(),r=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new un((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let f=r.get(u.largestBatchId);f===null&&(f=bi(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=bi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return V.resolve(l)}Et(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(i.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new WC(n,i));let r=this.Rr.get(n);r===void 0&&(r=pt(),this.Rr.set(n,r)),this.Rr.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.sessionToken=In.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.Vr=new ot(Ke.mr),this.gr=new ot(Ke.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const i=new Ke(e,n);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.wr(new Ke(e,n))}Sr(e,n){e.forEach(i=>this.removeReference(i,n))}br(e){const n=new ue(new je([])),i=new Ke(n,e),s=new Ke(n,e+1),r=[];return this.gr.forEachInRange([i,s],o=>{this.wr(o),r.push(o.key)}),r}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ue(new je([])),i=new Ke(n,e),s=new Ke(n,e+1);let r=pt();return this.gr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ke(e,0),i=this.Vr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ke{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ue.comparator(e.key,n.key)||Ee(e.Cr,n.Cr)}static pr(e,n){return Ee(e.Cr,n.Cr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new ot(Ke.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HC(r,n,i,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new Ke(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Nr(i),r=s<0?0:s;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Mu:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),r=[];return this.Mr.forEachInRange([i,s],o=>{const l=this.Or(o.Cr);r.push(l)}),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ot(Ee);return n.forEach(s=>{const r=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([r,o],l=>{i=i.add(l.Cr)})}),V.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;ue.isDocumentKey(r)||(r=r.child(""));const o=new Ke(new ue(r),0);let l=new ot(Ee);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(i=>{const s=this.Or(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return V.forEach(n.mutations,s=>{const r=new Ke(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,n){const i=new Ke(n,0),s=this.Mr.firstAfterOrEqual(i);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.kr=e,this.docs=function(){return new un(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return V.resolve(i?i.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let i=ha();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Xt.newInvalidDocument(s))}),V.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=ha();const o=n.path,l=new ue(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||tC(eC(f),i)<=0||(s.has(f.key)||ju(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(e,n,i,s){fe()}qr(e,n){return V.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new IR(this)}getSize(e){return V.resolve(this.size)}}class IR extends pR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(i)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.persistence=e,this.Qr=new qi(n=>Bu(n),$u),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.$r=0,this.Ur=new qu,this.targetCount=0,this.Kr=bs.Un()}forEachTarget(e,n){return this.Qr.forEach((i,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.Qr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(r).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const i=this.Qr.get(n)||null;return V.resolve(i)}addMatchingKeys(e,n,i){return this.Ur.yr(n,i),V.resolve()}removeMatchingKeys(e,n,i){this.Ur.Sr(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ur.vr(n);return V.resolve(i)}containsKey(e,n){return V.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new xu(0),this.zr=!1,this.zr=!0,this.jr=new vR,this.referenceDelegate=e(this),this.Hr=new wR(this),this.indexManager=new aR,this.remoteDocumentCache=function(s){return new TR(s)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new rR(n),this.Yr=new _R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Wr[e.toKey()];return i||(i=new ER(n,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,i){Z("MemoryPersistence","Starting transaction:",e);const s=new AR(this.Gr.next());return this.referenceDelegate.Zr(),i(s).next(r=>this.referenceDelegate.Xr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}ei(e,n){return V.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,n)))}}class AR extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class zu{constructor(e){this.persistence=e,this.ti=new qu,this.ni=null}static ri(e){return new zu(e)}get ii(){if(this.ni)return this.ni;throw fe()}addReference(e,n,i){return this.ti.addReference(i,n),this.ii.delete(i.toString()),V.resolve()}removeReference(e,n,i){return this.ti.removeReference(i,n),this.ii.add(i.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.ii.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,i=>{const s=ue.fromPath(i);return this.si(e,s).next(r=>{r||n.removeEntry(s,Ve.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(i=>{i?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class pa{constructor(e,n){this.persistence=e,this.oi=new qi(i=>oC(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=dR(this,n)}static ri(e,n){return new pa(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}sr(e){let n=0;return this.rr(e,i=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(i,s)=>this.ar(e,i,s).next(r=>r?V.resolve():n(s)))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(i++,r.removeEntry(o,Ve.min()))})).next(()=>r.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.oi.set(i,e.currentSequenceNumber),V.resolve()}removeReference(e,n,i){return this.oi.set(i,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ho(e.data.value)),n}ar(e,n,i){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Hi=i,this.Ji=s}static Yi(e,n){let i=pt(),s=pt();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Gu(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return vA()?8:sC(cn())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,i,s){const r={result:null};return this.rs(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ss(e,n,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new bR;return this._s(e,n,o).next(l=>{if(r.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>r.result)}us(e,n,i,s){return i.documentReadCount<this.es?(ss()<=he.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Js(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(ss()<=he.DEBUG&&Z("QueryEngine","Query:",Js(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ts*s?(ss()<=he.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Js(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Oi(n))):V.resolve())}rs(e,n){if(Ud(n))return V.resolve(null);let i=Oi(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lc(n,null,"F"),i=Oi(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=pt(...r);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,Lc(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,i,s){return Ud(n)||s.isEqual(Ve.min())?V.resolve(null):this.ns.getDocuments(e,i).next(r=>{const o=this.cs(n,r);return this.ls(n,o,i,s)?V.resolve(null):(ss()<=he.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Js(n)),this.hs(e,o,n,Zb(s,Fr)).next(l=>l))})}cs(e,n){let i=new ot(SC(e));return n.forEach((s,r)=>{ju(e,r)&&(i=i.add(r))}),i}ls(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}_s(e,n,i){return ss()<=he.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Js(n)),this.ns.getDocumentsMatchingQuery(e,n,ai.min(),i)}hs(e,n,i,s){return this.ns.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR="LocalStore";class SR{constructor(e,n,i,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new un(Ee),this.Is=new qi(r=>Bu(r),$u),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function PR(t,e,n,i){return new SR(t,e,n,i)}async function H_(t,e){const n=Oe(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.As(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],l=[];let c=pt();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of r){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(i,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function NR(t,e){const n=Oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let _=V.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(c,R)).next(k=>{const O=u.docVersions.get(R);He(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=pt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function kR(t){const e=Oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function OR(t,e){const n=Oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Mu),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class Kd{constructor(){this.activeTargetIds=xC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DR{constructor(){this.ho=new Kd,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,i){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Kd,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="ConnectivityMonitor";class Yd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Z(Qd,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Z(Qd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=null;function Bc(){return No===null?No=function(){return 268435456+Math.round(2147483648*Math.random())}():No++,"0x"+No.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="RestConnection",MR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database===aa?`project_id=${i}`:`project_id=${i}&database_id=${s}`}So(e,n,i,s,r){const o=Bc(),l=this.bo(e,n.toUriEncodedString());Z(Gl,`Sending RPC '${e}' ${o}:`,l,i);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,r),this.vo(e,l,c,i).then(u=>(Z(Gl,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ka(Gl,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",i),u})}Co(e,n,i,s,r,o){return this.So(e,n,i,s,r)}Do(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}bo(e,n){const i=MR[e];return`${this.po}/v1/${n}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class FR extends LR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,i,s){const r=Bc();return new Promise((o,l)=>{const c=new s_;c.setWithCredentials(!0),c.listenOnce(r_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jo.NO_ERROR:const f=c.getResponseJson();Z(ht,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case jo.TIMEOUT:Z(ht,`RPC '${e}' ${r} timed out`),l(new se(U.DEADLINE_EXCEEDED,"Request time out"));break;case jo.HTTP_ERROR:const p=c.getStatus();if(Z(ht,`RPC '${e}' ${r} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const R=function(O){const H=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(H)>=0?H:U.UNKNOWN}(_.status);l(new se(R,_.message))}else l(new se(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new se(U.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{Z(ht,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);Z(ht,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",u,i,15)})}Wo(e,n,i){const s=Bc(),r=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=l_(),l=a_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const f=r.join("");Z(ht,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,_=!1;const R=new VR({Fo:O=>{_?Z(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Z(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ht,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Mo:()=>p.close()}),k=(O,H,$)=>{O.listen(H,j=>{try{$(j)}catch(B){setTimeout(()=>{throw B},0)}})};return k(p,sr.EventType.OPEN,()=>{_||(Z(ht,`RPC '${e}' stream ${s} transport opened.`),R.Qo())}),k(p,sr.EventType.CLOSE,()=>{_||(_=!0,Z(ht,`RPC '${e}' stream ${s} transport closed`),R.Uo())}),k(p,sr.EventType.ERROR,O=>{_||(_=!0,Ka(ht,`RPC '${e}' stream ${s} transport errored:`,O),R.Uo(new se(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,sr.EventType.MESSAGE,O=>{var H;if(!_){const $=O.data[0];He(!!$);const j=$,B=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(B){Z(ht,`RPC '${e}' stream ${s} received error:`,B);const oe=B.status;let ce=function(I){const A=qe[I];if(A!==void 0)return zC(A)}(oe),w=B.message;ce===void 0&&(ce=U.INTERNAL,w="Unknown error status: "+oe+" with message "+B.message),_=!0,R.Uo(new se(ce,w)),p.close()}else Z(ht,`RPC '${e}' stream ${s} received:`,$),R.Ko($)}}),k(l,o_.STAT_EVENT,O=>{O.stat===Pc.PROXY?Z(ht,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Pc.NOPROXY&&Z(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function Kl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new GC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Ti=e,this.timerId=n,this.Go=i,this.zo=s,this.jo=r,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-i);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="PersistentStream";class UR{constructor(e,n,i,s,r,o,l,c){this.Ti=e,this.n_=i,this.r_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new W_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Mi(n.toString()),Mi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.i_===n&&this.V_(i,s)},i=>{e(()=>{const s=new se(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(s)})})}V_(e,n){const i=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{i(()=>this.m_(s))}),this.stream.onMessage(s=>{i(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Z(Xd,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(Z(Xd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BR extends UR{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return He(!!e.streamToken),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){He(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=tR(e.writeResults,e.commitTime),i=fs(e.commitTime);return this.listener.v_(i,n)}C_(){const e={};e.database=JC(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>eR(this.serializer,i))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{}class jR extends $R{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Fc(n,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new se(U.UNKNOWN,r.toString())})}Co(e,n,i,s,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Fc(n,i),s,o,l,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class HR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mi(n),this.N_=!1):Z("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="RemoteStore";class WR{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=r,this.z_.To(o=>{i.enqueueAndForget(async()=>{Zr(this)&&(Z(Xr,"Restarting streams for network reachability change."),await async function(c){const u=Oe(c);u.W_.add(4),await Jr(u),u.j_.set("Unknown"),u.W_.delete(4),await Za(u)}(this))})}),this.j_=new HR(i,s)}}async function Za(t){if(Zr(t))for(const e of t.G_)await e(!0)}async function Jr(t){for(const e of t.G_)await e(!1)}function Zr(t){return Oe(t).W_.size===0}async function q_(t,e,n){if(!Qr(e))throw e;t.W_.add(1),await Jr(t),t.j_.set("Offline"),n||(n=()=>kR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Xr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Za(t)})}function z_(t,e){return e().catch(n=>q_(t,n,e))}async function el(t){const e=Oe(t),n=ci(e);let i=e.U_.length>0?e.U_[e.U_.length-1].batchId:Mu;for(;qR(e);)try{const s=await OR(e.localStore,i);if(s===null){e.U_.length===0&&n.P_();break}i=s.batchId,zR(e,s)}catch(s){await q_(e,s)}G_(e)&&K_(e)}function qR(t){return Zr(t)&&t.U_.length<10}function zR(t,e){t.U_.push(e);const n=ci(t);n.c_()&&n.S_&&n.b_(e.mutations)}function G_(t){return Zr(t)&&!ci(t).u_()&&t.U_.length>0}function K_(t){ci(t).start()}async function GR(t){ci(t).C_()}async function KR(t){const e=ci(t);for(const n of t.U_)e.b_(n.mutations)}async function QR(t,e,n){const i=t.U_.shift(),s=Wu.from(i,e,n);await z_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await el(t)}async function YR(t,e){e&&ci(t).S_&&await async function(i,s){if(function(o){return qC(o)&&o!==U.ABORTED}(s.code)){const r=i.U_.shift();ci(i).h_(),await z_(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await el(i)}}(t,e),G_(t)&&K_(t)}async function Jd(t,e){const n=Oe(t);n.asyncQueue.verifyOperationInProgress(),Z(Xr,"RemoteStore received new credentials");const i=Zr(n);n.W_.add(3),await Jr(n),i&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Za(n)}async function XR(t,e){const n=Oe(t);e?(n.W_.delete(2),await Za(n)):e||(n.W_.add(2),await Jr(n),n.j_.set("Unknown"))}function ci(t){return t.Y_||(t.Y_=function(n,i,s){const r=Oe(n);return r.M_(),new BR(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:GR.bind(null,t),Lo:YR.bind(null,t),D_:KR.bind(null,t),v_:QR.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await el(t)):(await t.Y_.stop(),t.U_.length>0&&(Z(Xr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new Ku(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q_(t,e){if(Mi("AsyncQueue",`${e}: ${t}`),Qr(t))return new se(U.UNAVAILABLE,`${e}: ${t}`);throw t}class JR{constructor(){this.queries=Zd(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,i){const s=Oe(n),r=s.queries;s.queries=Zd(),r.forEach((o,l)=>{for(const c of l.ta)c.onError(i)})})(this,new se(U.ABORTED,"Firestore shutting down"))}}function Zd(){return new qi(t=>R_(t),C_)}function ZR(t){t.ia.forEach(e=>{e.next()})}var ep,tp;(tp=ep||(ep={}))._a="default",tp.Cache="cache";const eS="SyncEngine";class tS{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new qi(l=>R_(l),C_),this.qa=new Map,this.Qa=new Set,this.$a=new un(ue.comparator),this.Ua=new Map,this.Ka=new qu,this.Wa={},this.Ga=new Map,this.za=bs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function nS(t,e,n){const i=oS(t);try{const s=await function(o,l){const c=Oe(o),u=Je.now(),f=l.reduce((_,R)=>_.add(R.key),pt());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=ha(),k=pt();return c.ds.getEntries(_,f).next(O=>{R=O,R.forEach((H,$)=>{$.isValidDocument()||(k=k.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(O=>{p=O;const H=[];for(const $ of l){const j=$C($,p.get($.key).overlayedDocument);j!=null&&H.push(new zi($.key,j,v_(j.value.mapValue),Fn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,H,l)}).next(O=>{g=O;const H=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(_,O.batchId,H)})}).then(()=>({batchId:g.batchId,changes:P_(p)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new un(Ee)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(i,s.batchId,n),await tl(i,s.changes),await el(i.remoteStore)}catch(s){const r=Q_(s,"Failed to persist write");n.reject(r)}}function np(t,e,n){const i=Oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.ka.forEach((r,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=Oe(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ta)g.sa(l)&&(u=!0)}),u&&ZR(c)}(i.eventManager,e),s.length&&i.La.p_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function iS(t,e){const n=Oe(t),i=e.batch.batchId;try{const s=await NR(n.localStore,e);X_(n,i,null),Y_(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await tl(n,s)}catch(s){await Du(s)}}async function sS(t,e,n){const i=Oe(t);try{const s=await function(o,l){const c=Oe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(He(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(i.localStore,e);X_(i,e,n),Y_(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await tl(i,s)}catch(s){await Du(s)}}function Y_(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function X_(t,e,n){const i=Oe(t);let s=i.Wa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Wa[i.currentUser.toKey()]=s}}async function tl(t,e,n){const i=Oe(t),s=[],r=[],o=[];i.ka.isEmpty()||(i.ka.forEach((l,c)=>{o.push(i.Ha(c,e,n).then(u=>{var f;if((u||n)&&i.isPrimaryClient){const p=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Gu.Yi(c.targetId,u);r.push(p)}}))}),await Promise.all(o),i.La.p_(s),await async function(c,u){const f=Oe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,g=>V.forEach(g.Hi,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>V.forEach(g.Ji,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Qr(p))throw p;Z(RR,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.Ts.get(g),R=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(R);f.Ts=f.Ts.insert(g,k)}}}(i.localStore,r))}async function rS(t,e){const n=Oe(t);if(!n.currentUser.isEqual(e)){Z(eS,"User change. New user:",e.toKey());const i=await H_(n.localStore,e);n.currentUser=e,function(r,o){r.Ga.forEach(l=>{l.forEach(c=>{c.reject(new se(U.CANCELLED,o))})}),r.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await tl(n,i.Rs)}}function oS(t){const e=Oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sS.bind(null,e),e}class ga{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return PR(this.persistence,new CR,e.initialUser,this.serializer)}Xa(e){return new j_(zu.ri,this.serializer)}Za(e){return new DR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ga.provider={build:()=>new ga};class aS extends ga{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){He(this.persistence.referenceDelegate instanceof pa);const i=this.persistence.referenceDelegate.garbageCollector;return new hR(i,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new j_(i=>pa.ri(i,n),this.serializer)}}class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>np(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=rS.bind(null,this.syncEngine),await XR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JR}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),i=function(r){return new FR(r)}(e.databaseInfo);return function(r,o,l,c){return new jR(r,o,l,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,s,r,o,l){return new WR(i,s,r,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>np(this.syncEngine,n,0),function(){return Yd.D()?new Yd:new xR}())}createSyncEngine(e,n){return function(s,r,o,l,c,u,f){const p=new tS(s,r,o,l,c,u);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const r=Oe(s);Z(Xr,"RemoteStore shutting down."),r.W_.add(5),await Jr(r),r.z_.shutdown(),r.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$c.provider={build:()=>new $c};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="FirestoreClient";class lS{constructor(e,n,i,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=u_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async o=>{Z(ui,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(Z(ui,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Q_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ql(t,e){t.asyncQueue.verifyOperationInProgress(),Z(ui,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await H_(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cS(t);Z(ui,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>Jd(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Jd(e.remoteStore,s)),t._onlineComponents=e}async function cS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(ui,"Using user provided OfflineComponentProvider");try{await Ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ka("Error using user provided cache. Falling back to memory cache: "+n),await Ql(t,new ga)}}else Z(ui,"Using default OfflineComponentProvider"),await Ql(t,new aS(void 0));return t._offlineComponents}async function uS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(ui,"Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(Z(ui,"Using default OnlineComponentProvider"),await ip(t,new $c))),t._onlineComponents}function hS(t){return uS(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e,n){if(!n)throw new se(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fS(t,e,n,i){if(e===!0&&i===!0)throw new se(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!ue.isDocumentKey(t))throw new se(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function op(t){if(ue.isDocumentKey(t))throw new se(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function ey(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(t);throw new se(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firestore.googleapis.com",ap=!0;class lp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new se(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ty,this.ssl=ap}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ap;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cR)throw new se(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nl{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Hb;switch(i.type){case"firstParty":return new Gb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=sp.get(n);i&&(Z("ComponentProvider","Removing Datastore"),sp.delete(n),i.terminate())}(this),Promise.resolve()}}function dS(t,e,n,i={}){var s;const r=(t=ey(t,nl))._getSettings(),o=Object.assign(Object.assign({},r),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;r.host!==ty&&r.host!==l&&Ka("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},r),{host:l,ssl:!1,emulatorOptions:i});if(!Lr(c,o)&&(t._setSettings(c),i.mockUserToken)){let u,f;if(typeof i.mockUserToken=="string")u=i.mockUserToken,f=ft.MOCK_USER;else{u=gA(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new se(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(p)}t._authCredentials=new Wb(new c_(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yu(this.firestore,e,this._query)}}class Un{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Un(this.firestore,e,this._key)}}class si extends Yu{constructor(e,n,i){super(e,n,bC(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Un(this.firestore,null,new ue(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function ny(t,e,...n){if(t=Gt(t),Z_("collection","path",e),t instanceof nl){const i=je.fromString(e,...n);return op(i),new si(t,null,i)}{if(!(t instanceof Un||t instanceof si))throw new se(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(je.fromString(e,...n));return op(i),new si(t.firestore,null,i)}}function pS(t,e,...n){if(t=Gt(t),arguments.length===1&&(e=u_.newId()),Z_("doc","path",e),t instanceof nl){const i=je.fromString(e,...n);return rp(i),new Un(t,null,new ue(i))}{if(!(t instanceof Un||t instanceof si))throw new se(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(je.fromString(e,...n));return rp(i),new Un(t.firestore,t instanceof si?t.converter:null,new ue(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="AsyncQueue";class up{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new W_(this,"async_queue_retry"),this.Su=()=>{const i=Kl();i&&Z(cp,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const n=Kl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ki;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Qr(e))throw e;Z(cp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(i);throw Mi("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.pu=!1,i))));return this.bu=n,n}enqueueAfterDelay(e,n,i){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Ku.createAndSchedule(this,e,n,i,r=>this.Fu(r));return this.fu.push(s),s}Du(){this.gu&&fe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class iy extends nl{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new up(e),this._firestoreClient=void 0,await e}}}function gS(t,e){const n=typeof t=="object"?t:t_(),i=typeof t=="string"?t:aa,s=Kr(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=dA("firestore");r&&dS(s,...r)}return s}function mS(t){if(t._terminated)throw new se(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_S(t),t._firestoreClient}function _S(t){var e,n,i;const s=t._freezeSettings(),r=function(l,c,u,f){return new uC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,J_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new lS(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jr(In.fromBase64String(e))}catch(n){throw new se(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jr(In.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^__.*__$/;class vS{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yr(e,this.data,n,this.fieldTransforms)}}function ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Xu{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Bu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:i,Qu:!1});return s.$u(e),s}Uu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:i,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ma(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(ly(this.Lu)&&yS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ES{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ja(e)}ju(e,n,i,s=!1){return new Xu({Lu:e,methodName:n,zu:i,path:st.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TS(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new ES(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IS(t,e,n,i,s,r={}){const o=t.ju(r.merge||r.mergeFields?2:0,e,n,s);fy("Data must be an object, but it was:",o,i);const l=uy(i,o);let c,u;if(r.merge)c=new tn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const p of r.mergeFields){const g=wS(e,p,n);if(!o.contains(g))throw new se(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);CS(f,g)||f.push(g)}c=new tn(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new vS(new Zt(l),c,u)}function cy(t,e){if(hy(t=Gt(t)))return fy("Unsupported field value:",e,t),uy(t,e);if(t instanceof ry)return function(i,s){if(!ly(s.Lu))throw s.Wu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const l of i){let c=cy(l,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(i,s){if((i=Gt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return MC(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Je.fromDate(i);return{timestampValue:Vc(s.serializer,r)}}if(i instanceof Je){const r=new Je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Vc(s.serializer,r)}}if(i instanceof oy)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof jr)return{bytesValue:KC(s.serializer,i._byteString)};if(i instanceof Un){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:U_(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ay)return function(o,l){return{mapValue:{fields:{[__]:{stringValue:y_},[Oc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Hu(l.serializer,u)})}}}}}}(i,s);throw s.Wu(`Unsupported field value: ${Qu(i)}`)}(t,e)}function uy(t,e){const n={};return f_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Os(t,(i,s)=>{const r=cy(s,e.qu(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function hy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof oy||t instanceof jr||t instanceof Un||t instanceof ry||t instanceof ay)}function fy(t,e,n){if(!hy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const i=Qu(n);throw i==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+i)}}function wS(t,e,n){if((e=Gt(e))instanceof sy)return e._internalPath;if(typeof e=="string")return bS(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const AS=new RegExp("[~\\*/\\[\\]]");function bS(t,e,n){if(e.search(AS)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sy(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new se(U.INVALID_ARGUMENT,l+t+c)}function CS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e,n){let i;return i=t?t.toFirestore(e):e,i}function SS(t,e){const n=ey(t.firestore,iy),i=pS(t),s=RS(t.converter,e);return PS(n,[IS(TS(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,Fn.exists(!1))]).then(()=>i)}function PS(t,e){return function(i,s){const r=new ki;return i.asyncQueue.enqueueAndForget(async()=>nS(await hS(i),s,r)),r.promise}(mS(t),e)}(function(e,n=!0){(function(s){ks=s})(Ns),Ot(new Rt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),l=new iy(new qb(i.getProvider("auth-internal")),new Kb(o,i.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(u.options.projectId,f)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),rt(Ad,bd,e),rt(Ad,bd,"esm2017")})();var NS="firebase",kS="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(NS,kS,"app");const dy="@firebase/installations",Ju="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=1e4,gy=`w:${Ju}`,my="FIS_v2",OS="https://firebaseinstallations.googleapis.com/v1",DS=60*60*1e3,xS="installations",MS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fi=new gi(xS,MS,LS);function _y(t){return t instanceof fn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy({projectId:t}){return`${OS}/projects/${t}/installations`}function vy(t){return{token:t.token,requestStatus:2,expiresIn:FS(t.expiresIn),creationTime:Date.now()}}async function Ey(t,e){const i=(await e.json()).error;return Fi.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ty({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function VS(t,{refreshToken:e}){const n=Ty(t);return n.append("Authorization",US(e)),n}async function Iy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FS(t){return Number(t.replace("s","000"))}function US(t){return`${my} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=yy(t),s=Ty(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:my,appId:t.appId,sdkVersion:gy},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iy(()=>fetch(i,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:vy(u.authToken)}}else throw await Ey("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=/^[cdef][\w-]{21}$/,jc="";function HS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WS(t);return jS.test(n)?n:jc}catch{return jc}}function WS(t){return $S(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;function by(t,e){const n=il(t);Cy(n,e),qS(n,e)}function Cy(t,e){const n=Ay.get(t);if(n)for(const i of n)i(e)}function qS(t,e){const n=zS();n&&n.postMessage({key:t,fid:e}),GS()}let Ci=null;function zS(){return!Ci&&"BroadcastChannel"in self&&(Ci=new BroadcastChannel("[Firebase] FID Change"),Ci.onmessage=t=>{Cy(t.data.key,t.data.fid)}),Ci}function GS(){Ay.size===0&&Ci&&(Ci.close(),Ci=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebase-installations-database",QS=1,Ui="firebase-installations-store";let Yl=null;function Zu(){return Yl||(Yl=Zm(KS,QS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}})),Yl}async function _a(t,e){const n=il(t),s=(await Zu()).transaction(Ui,"readwrite"),r=s.objectStore(Ui),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&by(t,e.fid),e}async function Ry(t){const e=il(t),i=(await Zu()).transaction(Ui,"readwrite");await i.objectStore(Ui).delete(e),await i.done}async function sl(t,e){const n=il(t),s=(await Zu()).transaction(Ui,"readwrite"),r=s.objectStore(Ui),o=await r.get(n),l=e(o);return l===void 0?await r.delete(n):await r.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&by(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(t){let e;const n=await sl(t.appConfig,i=>{const s=YS(i),r=XS(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===jc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function YS(t){const e=t||{fid:HS(),registrationStatus:0};return Sy(e)}function XS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fi.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=JS(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZS(t)}:{installationEntry:e}}async function JS(t,e){try{const n=await BS(t,e);return _a(t.appConfig,n)}catch(n){throw _y(n)&&n.customData.serverCode===409?await Ry(t.appConfig):await _a(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ZS(t){let e=await hp(t.appConfig);for(;e.registrationStatus===1;)await wy(100),e=await hp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await eh(t);return i||n}return e}function hp(t){return sl(t,e=>{if(!e)throw Fi.create("installation-not-found");return Sy(e)})}function Sy(t){return e0(t)?{fid:t.fid,registrationStatus:0}:t}function e0(t){return t.registrationStatus===1&&t.registrationTime+py<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0({appConfig:t,heartbeatServiceProvider:e},n){const i=n0(t,n),s=VS(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:gy,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iy(()=>fetch(i,l));if(c.ok){const u=await c.json();return vy(u)}else throw await Ey("Generate Auth Token",c)}function n0(t,{fid:e}){return`${yy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e=!1){let n;const i=await sl(t.appConfig,r=>{if(!Py(r))throw Fi.create("not-registered");const o=r.authToken;if(!e&&r0(o))return r;if(o.requestStatus===1)return n=i0(t,e),r;{if(!navigator.onLine)throw Fi.create("app-offline");const l=a0(r);return n=s0(t,l),l}});return n?await n:i.authToken}async function i0(t,e){let n=await fp(t.appConfig);for(;n.authToken.requestStatus===1;)await wy(100),n=await fp(t.appConfig);const i=n.authToken;return i.requestStatus===0?th(t,e):i}function fp(t){return sl(t,e=>{if(!Py(e))throw Fi.create("not-registered");const n=e.authToken;return l0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function s0(t,e){try{const n=await t0(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await _a(t.appConfig,i),n}catch(n){if(_y(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ry(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _a(t.appConfig,i)}throw n}}function Py(t){return t!==void 0&&t.registrationStatus===2}function r0(t){return t.requestStatus===2&&!o0(t)}function o0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+DS}function a0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function l0(t){return t.requestStatus===1&&t.requestTime+py<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t){const e=t,{installationEntry:n,registrationPromise:i}=await eh(e);return i?i.catch(console.error):th(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e=!1){const n=t;return await h0(n),(await th(n,e)).token}async function h0(t){const{registrationPromise:e}=await eh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(t){if(!t||!t.options)throw Xl("App Configuration");if(!t.name)throw Xl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xl(t){return Fi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="installations",d0="installations-internal",p0=t=>{const e=t.getProvider("app").getImmediate(),n=f0(e),i=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},g0=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,Ny).getImmediate();return{getId:()=>c0(n),getToken:s=>u0(n,s)}};function m0(){Ot(new Rt(Ny,p0,"PUBLIC")),Ot(new Rt(d0,g0,"PRIVATE"))}m0();rt(dy,Ju);rt(dy,Ju,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="analytics",_0="firebase_id",y0="origin",v0=60*1e3,E0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Ps("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new gi("analytics","Analytics",T0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t){if(!t.startsWith(nh)){const e=Ft.create("invalid-gtag-resource",{gtagURL:t});return kt.warn(e.message),""}return t}function ky(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function w0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function A0(t,e){const n=w0("firebase-js-sdk-policy",{createScriptURL:I0}),i=document.createElement("script"),s=`${nh}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function b0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function C0(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await ky(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){kt.error(l)}t("config",s,r)}async function R0(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await ky(n);for(const c of o){const u=l.find(p=>p.measurementId===c),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){kt.error(r)}}function S0(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[l,c]=o;await R0(t,e,n,l,c)}else if(r==="config"){const[l,c]=o;await C0(t,e,n,i,l,c)}else if(r==="consent"){const[l,c]=o;t("consent",l,c)}else if(r==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(r==="set"){const[l]=o;t("set",l)}else t(r,...o)}catch(l){kt.error(l)}}return s}function P0(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=S0(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function N0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=30,O0=1e3;class D0{constructor(e={},n=O0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Oy=new D0;function x0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function M0(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:x0(i)},r=E0.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function L0(t,e=Oy,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Ft.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new U0;return setTimeout(async()=>{l.abort()},v0),Dy({appId:i,apiKey:s,measurementId:r},o,l,e)}async function Dy(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Oy){var r;const{appId:o,measurementId:l}=t;try{await V0(i,e)}catch(c){if(l)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await M0(t);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!F0(u)){if(s.deleteThrottleMetadata(o),l)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?pd(n,s.intervalMillis,k0):pd(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,p),kt.debug(`Calling attemptFetch again in ${f} millis`),Dy(t,p,i,s)}}function V0(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F0(t){if(!(t instanceof fn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class U0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function B0(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(){if(Su())try{await Qm()}catch(t){return kt.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return kt.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j0(t,e,n,i,s,r,o){var l;const c=L0(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>kt.error(_)),e.push(c);const u=$0().then(_=>{if(_)return i.getId()}),[f,p]=await Promise.all([c,u]);N0(r)||A0(r,f.measurementId),s("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[y0]="firebase",g.update=!0,p!=null&&(g[_0]=p),s("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.app=e}_delete(){return delete vr[this.app.options.appId],Promise.resolve()}}let vr={},dp=[];const pp={};let Jl="dataLayer",W0="gtag",gp,xy,mp=!1;function q0(){const t=[];if(Gm()&&t.push("This is a browser extension environment."),EA()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});kt.warn(n.message)}}function z0(t,e,n){q0();const i=t.options.appId;if(!i)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(vr[i]!=null)throw Ft.create("already-exists",{id:i});if(!mp){b0(Jl);const{wrappedGtag:r,gtagCore:o}=P0(vr,dp,pp,Jl,W0);xy=r,gp=o,mp=!0}return vr[i]=j0(t,dp,pp,e,gp,Jl,n),new H0(t)}function G0(t=t_()){t=Gt(t);const e=Kr(t,ya);return e.isInitialized()?e.getImmediate():K0(t)}function K0(t,e={}){const n=Kr(t,ya);if(n.isInitialized()){const s=n.getImmediate();if(Lr(e,n.getOptions()))return s;throw Ft.create("already-initialized")}return n.initialize({options:e})}function Q0(t,e,n,i){t=Gt(t),B0(xy,vr[t.app.options.appId],e,n,i).catch(s=>kt.error(s))}const _p="@firebase/analytics",yp="0.10.12";function Y0(){Ot(new Rt(ya,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return z0(i,s,n)},"PUBLIC")),Ot(new Rt("analytics-internal",t,"PRIVATE")),rt(_p,yp),rt(_p,yp,"esm2017");function t(e){try{const n=e.getProvider(ya).getImmediate();return{logEvent:(i,s,r)=>Q0(n,i,s,r)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}Y0();const X0={apiKey:"AIzaSyAJpA0XbWrYnCA_E_J9tnPN9oH0H8E12hk",authDomain:"landing-page-a6a08.firebaseapp.com",projectId:"landing-page-a6a08",storageBucket:"landing-page-a6a08.firebasestorage.app",messagingSenderId:"200230849264",appId:"1:200230849264:web:318f9b925acfb742ddd035",measurementId:"G-QE7W9JBH68"},ih=e_(X0);G0(ih);const J0=gS(ih),Z0=ny(J0,"submitted forms"),eP={class:"submit",type:"submit",id:"submit",value:"submit"},tP=zr({__name:"ContactForm",setup(t){const e=Vo("Submit"),n=Vo({name:"",email:"",phoneNumber:""}),i=Vo(!1);console.log(n);async function s(){try{e.value="submitting...",await SS(ny(Z0,"submitted forms"),{name:n.value.name,email:n.value.email,phoneNumber:n.value.phoneNumber}),alert("תודה רבה! ניצור אתכם קשר בימים הקרובים:)"),i.value=!0,n.value={name:"",email:"",phoneNumber:""}}catch(r){console.log("Error occurred",{error:r}),alert("נכשלה שליחת הטופס")}e.value="Submit"}return(r,o)=>(wu(),hI("form",{onSubmit:GI(s,["prevent"]),name:"contact-form",method:"post",action:"https://script.google.com/macros/s/AKfycbxuXSdSsm7fxiDj3Kxq1AC80w26FlnaBaFNefTBASDyUw0UNiyqJHbWdNJLSy-M7iCV-g/exec",class:"form flex flex-col gap-4 w-full","data-netlify":"true"},[wt("div",null,[o[3]||(o[3]=wt("div",{class:"textContainer"},[wt("label",{class:"formHeader",for:"name"},"שם מלא")],-1)),kl(wt("input",{class:"prompt text-right",type:"text",id:"name",name:"Name","onUpdate:modelValue":o[0]||(o[0]=l=>n.value.name=l),required:""},null,512),[[Fl,n.value.name]])]),wt("div",null,[o[4]||(o[4]=wt("div",{class:"textContainer"},[wt("label",{class:"formHeader",for:"email"},"מייל")],-1)),kl(wt("input",{class:"prompt",type:"email",id:"email",name:"Email","onUpdate:modelValue":o[1]||(o[1]=l=>n.value.email=l),required:""},null,512),[[Fl,n.value.email]])]),wt("div",null,[o[5]||(o[5]=wt("div",{class:"textContainer"},[wt("label",{class:"formHeader",for:"phoneNumber"},"מספר טלפון")],-1)),kl(wt("input",{class:"prompt",type:"tel",id:"phoneNumber",name:"Phone Number","onUpdate:modelValue":o[2]||(o[2]=l=>n.value.phoneNumber=l),required:""},null,512),[[Fl,n.value.phoneNumber]])]),wt("button",eP,Rg(e.value),1)],32))}}),nP=tA(tP,[["__scopeId","data-v-582dbb4e"]]),iP=zr({__name:"HomeView",setup(t){return(e,n)=>(wu(),Im(nP))}}),sP=Zw({history:Pw("/"),routes:[{path:"/",name:"home",component:iP}]});function My(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rP=Ly,Vy=new gi("auth","Firebase",Ly());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Ps("@firebase/auth");function oP(t,...e){va.logLevel<=he.WARN&&va.warn(`Auth (${Ns}): ${t}`,...e)}function zo(t,...e){va.logLevel<=he.ERROR&&va.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t,...e){throw sh(t,...e)}function Fy(t,...e){return sh(t,...e)}function Uy(t,e,n){const i=Object.assign(Object.assign({},rP()),{[e]:n});return new gi("auth","Firebase",i).create(e,{appName:t.name})}function Go(t){return Uy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Vy.create(t,...e)}function we(t,e,...n){if(!t)throw sh(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zo(e),new Error(e)}function Ea(t,e){t||Er(e)}function aP(){return Ep()==="http:"||Ep()==="https:"}function Ep(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aP()||Gm()||"connection"in navigator)?navigator.onLine:!0}function cP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ea(n>e,"Short delay should be less than long delay!"),this.isMobile=Ru()||Km()}get(){return lP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){Ea(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dP=new eo(3e4,6e4);function $y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rl(t,e,n,i,s={}){return jy(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Pu(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return _A()||(u.referrerPolicy="no-referrer"),By.fetch()(await Hy(t,t.config.apiHost,n,l),u)})}async function jy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},hP),e);try{const s=new pP(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ko(t,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Uy(t,f,u);vp(t,f)}}catch(s){if(s instanceof fn)throw s;vp(t,"network-request-failed",{message:String(s)})}}async function Hy(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?uP(t.config,s):`${t.config.apiScheme}://${s}`;return fP.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class pP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Fy(this.auth,"network-request-failed")),dP.get())})}}function ko(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Fy(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return rl(t,"POST","/v1/accounts:delete",e)}async function Ta(t,e){return rl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mP(t,e=!1){const n=Gt(t),i=await n.getIdToken(e),s=Wy(i);we(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Tr(Zl(s.auth_time)),issuedAtTime:Tr(Zl(s.iat)),expirationTime:Tr(Zl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zl(t){return Number(t)*1e3}function Wy(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return zo("JWT malformed, contained fewer than 3 sections"),null;try{const s=na(n);return s?JSON.parse(s):(zo("Failed to decode base64 JWT payload"),null)}catch(s){return zo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tp(t){const e=Wy(t);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof fn&&_P(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Hc(t,Ta(n,{idToken:i}));we(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qy(r.providerUserInfo):[],l=EP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Wc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function vP(t){const e=Gt(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EP(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function qy(t){return t.map(e=>{var{providerId:n}=e,i=My(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){const n=await jy(t,{},async()=>{const i=Pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await Hy(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",By.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IP(t,e){return rl(t,"POST","/v2/accounts:revokeToken",$y(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){we(e.length!==0,"internal-error");const n=Tp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await TP(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new ds;return i&&(we(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(we(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(we(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){we(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=My(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hc(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mP(this,e)}reload(){return vP(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Go(this.auth));const e=await this.getIdToken();return await Hc(this,gP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,c,u,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:B,isAnonymous:oe,providerData:ce,stsTokenManager:w}=n;we(j&&w,e,"internal-error");const y=ds.fromJSON(this.name,w);we(typeof j=="string",e,"internal-error"),Yn(p,e.name),Yn(g,e.name),we(typeof B=="boolean",e,"internal-error"),we(typeof oe=="boolean",e,"internal-error"),Yn(_,e.name),Yn(R,e.name),Yn(k,e.name),Yn(O,e.name),Yn(H,e.name),Yn($,e.name);const I=new yn({uid:j,auth:e,email:g,emailVerified:B,displayName:p,isAnonymous:oe,photoURL:R,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:H,lastLoginAt:$});return ce&&Array.isArray(ce)&&(I.providerData=ce.map(A=>Object.assign({},A))),O&&(I._redirectEventId=O),I}static async _fromIdTokenResponse(e,n,i=!1){const s=new ds;s.updateFromServerResponse(n);const r=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ia(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];we(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?qy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new ds;l.updateFromIdToken(i);const c=new yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=new Map;function Ri(t){Ea(t instanceof Function,"Expected a class definition");let e=Ip.get(t);return e?(Ea(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ip.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const wp=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ec(this.userKey,s.apiKey,r),this.fullPersistenceKey=ec("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ta(this.auth,{idToken:e}).catch(()=>{});return n?yn._fromGetAccountInfoResponse(this.auth,n,e):null}return yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ps(Ri(wp),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Ri(wp);const o=ec(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await Ta(e,{idToken:f}).catch(()=>{});if(!g)break;p=await yn._fromGetAccountInfoResponse(e,g,f)}else p=yn._fromJSON(e,f);u!==r&&(l=p),r=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ps(r,e,i):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ps(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SP(e))return"Blackberry";if(PP(e))return"Webos";if(AP(e))return"Safari";if((e.includes("chrome/")||bP(e))&&!e.includes("edge/"))return"Chrome";if(RP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function wP(t=cn()){return/firefox\//i.test(t)}function AP(t=cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bP(t=cn()){return/crios\//i.test(t)}function CP(t=cn()){return/iemobile/i.test(t)}function RP(t=cn()){return/android/i.test(t)}function SP(t=cn()){return/blackberry/i.test(t)}function PP(t=cn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e=[]){let n;switch(t){case"Browser":n=Ap(cn());break;case"Worker":n=`${Ap(cn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e={}){return rl(t,"GET","/v2/passwordPolicy",$y(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=6;class DP{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bp(this),this.idTokenSubscription=new bp(this),this.beforeStateQueue=new NP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ta(this,{idToken:e}),i=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Go(this));const n=e?Gt(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Go(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Go(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kP(this),n=new DP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await IP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ri(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function MP(t){return Gt(t)}class bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=RA(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function LP(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new eo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new eo(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new eo(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new eo(5e3,15e3);var Cp="@firebase/auth",Rp="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UP(t){Ot(new Rt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;we(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(t)},u=new xP(i,s,r,c);return LP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ot(new Rt("auth-internal",e=>{const n=MP(e.getProvider("auth").getImmediate());return(i=>new VP(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Cp,Rp,FP(t)),rt(Cp,Rp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=5*60;pA("authIdTokenMaxAge");UP("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Map,jP={activated:!1,tokenObservers:[]};function hn(t){return $P.get(t)||Object.assign({},jP)}const Sp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xr,this.pending.promise.catch(n=>{}),await WP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xr,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function WP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},wa=new gi("appCheck","AppCheck",qP);function Ky(t){if(!hn(t).activated)throw wa.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-app-check-database",GP=1,qc="firebase-app-check-store";let Oo=null;function KP(){return Oo||(Oo=new Promise((t,e)=>{try{const n=indexedDB.open(zP,GP);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(wa.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(qc,{keyPath:"compositeKey"})}}}catch(n){e(wa.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Oo)}function QP(t,e){return YP(XP(t),e)}async function YP(t,e){const i=(await KP()).transaction(qc,"readwrite"),r=i.objectStore(qc).put({compositeKey:t,value:e});return new Promise((o,l)=>{r.onsuccess=c=>{o()},i.onerror=c=>{var u;l(wa.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function XP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Ps("@firebase/app-check");function Pp(t,e){return Su()?QP(t,e).catch(n=>{zc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP={error:"UNKNOWN_ERROR"};function ZP(t){return qa.encodeString(JSON.stringify(t),!1)}async function Gc(t,e=!1,n=!1){const i=t.app;Ky(i);const s=hn(i);let r=s.token,o;if(r&&!rr(r)&&(s.token=void 0,r=void 0),!r){const u=await s.cachedTokenPromise;u&&(rr(u)?r=u:await Pp(i,void 0))}if(!e&&r&&rr(r))return{token:r.token};let l=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),l=!0),r=await hn(i).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?zc.warn(u.message):n&&zc.error(u),o=u}let c;return r?o?rr(r)?c={token:r.token,internalError:o}:c=kp(o):(c={token:r.token},s.token=r,await Pp(i,r)):c=kp(o),l&&iN(i,c),c}async function eN(t){const e=t.app;Ky(e);const{provider:n}=hn(e);{const{token:i}=await n.getToken();return{token:i}}}function tN(t,e,n,i){const{app:s}=t,r=hn(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&rr(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Np(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Np(t))}function Qy(t,e){const n=hn(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Np(t){const{app:e}=t,n=hn(e);let i=n.tokenRefresher;i||(i=nN(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function nN(t){const{app:e}=t;return new HP(async()=>{const n=hn(e);let i;if(n.token?i=await Gc(t,!0):i=await Gc(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=hn(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Sp.RETRIAL_MIN_WAIT,Sp.RETRIAL_MAX_WAIT)}function iN(t,e){const n=hn(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function rr(t){return t.expireTimeMillis-Date.now()>0}function kp(t){return{token:ZP(JP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=hn(this.app);for(const n of e)Qy(this.app,n.next);return Promise.resolve()}}function rN(t,e){return new sN(t,e)}function oN(t){return{getToken:e=>Gc(t,e),getLimitedUseToken:()=>eN(t),addTokenListener:e=>tN(t,"INTERNAL",e),removeTokenListener:e=>Qy(t.app,e)}}const aN="@firebase/app-check",lN="0.8.13",cN="app-check",Op="app-check-internal";function uN(){Ot(new Rt(cN,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return rN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Op).initialize()})),Ot(new Rt(Op,t=>{const e=t.getProvider("app-check").getImmediate();return oN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),rt(aN,lN)}uN();const hN=Symbol("firebaseApp");var Dp={};const xp="@firebase/database",Mp="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yy="";function fN(t){Yy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Mr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dN(e)}}catch{}return new pN},Si=Xy("localStorage"),gN=Xy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Ps("@firebase/database"),mN=function(){let t=1;return function(){return t++}}(),Jy=function(t){const e=kA(t),n=new CA;n.update(e);const i=n.digest();return qa.encodeByteArray(i)},to=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=to.apply(null,i):typeof i=="object"?e+=it(i):e+=i,e+=" "}return e};let Ir=null,Lp=!0;const _N=function(t,e){K(!0,"Can't turn on custom loggers persistently."),gs.logLevel=he.VERBOSE,Ir=gs.log.bind(gs)},gt=function(...t){if(Lp===!0&&(Lp=!1,Ir===null&&gN.get("logging_enabled")===!0&&_N()),Ir){const e=to.apply(null,t);Ir(e)}},no=function(t){return function(...e){gt(t,...e)}},Kc=function(...t){const e="FIREBASE INTERNAL ERROR: "+to(...t);gs.error(e)},Bi=function(...t){const e=`FIREBASE FATAL ERROR: ${to(...t)}`;throw gs.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+to(...t);gs.warn(e)},yN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cs="[MIN_NAME]",$i="[MAX_NAME]",Ds=function(t,e){if(t===e)return 0;if(t===Cs||e===$i)return-1;if(e===Cs||t===$i)return 1;{const n=Vp(t),i=Vp(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},EN=function(t,e){return t===e?0:t<e?-1:1},Zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},rh=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=it(e[i]),n+=":",n+=rh(t[e[i]]);return n+="}",n},ev=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tv=function(t){K(!Zy(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const f=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},TN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wN=new RegExp("^-?(0*)\\d{1,10}$"),AN=-2147483648,bN=2147483647,Vp=function(t){if(wN.test(t)){const e=Number(t);if(e>=AN&&e<=bN)return e}return null},io=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},CN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="5",nv="v",iv="s",sv="r",rv="f",ov=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,av="ls",lv="p",Qc="ac",cv="websocket",uv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,i,s,r=!1,o="",l=!1,c=!1,u=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hv(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let i;if(e===cv)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NN(t)&&(n.ns=t.namespace);const s=[];return Kt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.counters_={}}incrementCounter(e,n=1){Hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc={},nc={};function ah(t){const e=t.toString();return tc[e]||(tc[e]=new kN),tc[e]}function ON(t,e){const n=t.toString();return nc[n]||(nc[n]=e()),nc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&io(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="start",xN="close",MN="pLPCommand",LN="pRTLPCB",fv="id",dv="pw",pv="ser",VN="cb",FN="seg",UN="ts",BN="d",$N="dframe",gv=1870,mv=30,jN=gv-mv,HN=25e3,WN=3e4;class os{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=ah(n),this.urlFn=c=>(this.appCheckToken&&(c[Qc]=this.appCheckToken),hv(n,uv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WN)),vN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lh((...r)=>{const[o,l,c,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fp)this.id=l,this.password=c;else if(o===xN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fp]="t",i[pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[VN]=this.scriptTagHolder.uniqueCallbackIdentifier),i[nv]=oh,this.transportSessionId&&(i[iv]=this.transportSessionId),this.lastSessionId&&(i[av]=this.lastSessionId),this.applicationId&&(i[lv]=this.applicationId),this.appCheckToken&&(i[Qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(i[sv]=rv);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TN()&&!IN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Wm(n),s=ev(i,jN);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[$N]="t",i[fv]=e,i[dv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lh{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mN(),window[MN+this.uniqueCallbackIdentifier]=e,window[LN+this.uniqueCallbackIdentifier]=n,this.myIFrame=lh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){gt("frame writing exception"),l.stack&&gt(l.stack),gt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fv]=this.myID,e[dv]=this.myPW,e[pv]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mv+i.length<=gv;){const o=this.pendingSegs.shift();i=i+"&"+FN+s+"="+o.seg+"&"+UN+s+"="+o.ts+"&"+BN+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(HN)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=16384,zN=45e3;let Aa=null;typeof MozWebSocket<"u"?Aa=MozWebSocket:typeof WebSocket<"u"&&(Aa=WebSocket);class en{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=ah(n),this.connURL=en.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[nv]=oh,typeof location<"u"&&location.hostname&&ov.test(location.hostname)&&(o[sv]=rv),n&&(o[iv]=n),i&&(o[av]=i),s&&(o[Qc]=s),r&&(o[lv]=r),hv(e,cv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Si.set("previous_websocket_failure",!0);try{let i;yA(),this.mySock=new Aa(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Aa!==null&&!en.forceDisallow_}static previouslyFailed(){return Si.isInMemoryStorage||Si.get("previous_websocket_failure")===!0}markConnectionHealthy(){Si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Mr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ev(n,qN);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{static get ALL_TRANSPORTS(){return[os,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=en&&en.isAvailable();let i=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[en];else{const s=this.transports_=[];for(const r of Hr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Hr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=6e4,KN=5e3,QN=10*1024,YN=100*1024,ic="t",Up="d",XN="s",Bp="r",JN="e",$p="o",jp="a",Hp="n",Wp="p",ZN="h";class ek{constructor(e,n,i,s,r,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new Hr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ic in e){const n=e[ic];n===jp?this.upgradeIfSecondaryHealthy_():n===Bp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zs("t",e),i=Zs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zs("t",e),i=Zs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zs(ic,e);if(Up in e){const i=e[Up];if(n===ZN){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XN?this.onConnectionShutdown_(i):n===Bp?this.onReset_(i):n===JN?Kc("Server Error: "+i):n===$p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),oh!==i&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),wr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends yv{static getInstance(){return new ba}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ru()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=32,zp=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Le("")}function ye(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hi(t){return t.pieces_.length-t.pieceNum_}function Me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function vv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ev(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Tv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function Xe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof Le)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new Le(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=ye(t),i=ye(e);if(n===null)return e;if(n===i)return zt(Me(t),Me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Iv(t,e){if(hi(t)!==hi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function nn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(hi(t)>hi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class nk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ev(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ga(this.parts_[i]);wv(this)}}function ik(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ga(e),wv(t)}function sk(t){const e=t.parts_.pop();t.byteLength_-=Ga(e),t.parts_.length>0&&(t.byteLength_-=1)}function wv(t){if(t.byteLength_>zp)throw new Error(t.errorPrefix_+"has a key path longer than "+zp+" bytes ("+t.byteLength_+").");if(t.parts_.length>qp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qp+") or object contains a cycle "+Ai(t))}function Ai(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends yv{static getInstance(){return new ch}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=1e3,rk=60*5*1e3,Gp=30*1e3,ok=1.3,ak=3e4,lk="server_kill",Kp=3;class Bn extends _v{constructor(e,n,i,s,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Bn.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=er,this.maxReconnectDelay_=rk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ch.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(it(r)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new xr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,u=l.s;Bn.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Hn(e,"w")){const i=Es(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AA(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kc("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ak&&(this.reconnectDelay_=er),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ok)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Bn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){K(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new ek(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{Ut(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(lk)},r))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ut(p),c())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fd(this.interruptReasons_)&&(this.reconnectDelay_=er,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>rh(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new Le(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kp&&(this.reconnectDelay_=Gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yy.replace(/\./g,"-")]=1,Ru()?e["framework.cordova"]=1:Km()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ba.getInstance().currentlyOnline();return fd(this.interruptReasons_)&&e}}Bn.nextPersistentConnectionId_=0;Bn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ve(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ve(Cs,e),s=new ve(Cs,n);return this.compare(i,s)!==0}minPost(){return ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class Av extends ol{static get __EMPTY_NODE(){return Do}static set __EMPTY_NODE(e){Do=e}compare(e,n){return Ds(e.name,n.name)}isDefinedOn(e){throw Ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ve.MIN}maxPost(){return new ve($i,Do)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new ve(e,Do)}toString(){return".key"}}const ms=new Av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Qe.RED,this.left=s??Nt.EMPTY_NODE,this.right=r??Nt.EMPTY_NODE}copy(e,n,i,s,r){return new Qe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class ck{copy(e,n,i,s,r){return this}insert(e,n,i){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,n=Nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xo(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e){return Ds(t.name,e.name)}function uh(t,e){return Ds(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc;function hk(t){Yc=t}const bv=function(t){return typeof t=="number"?"number:"+tv(t):"string:"+t},Cv=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hn(e,".sv"),"Priority must be a string or number.")}else K(t===Yc||t.isEmpty(),"priority of unexpected type.");K(t===Yc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qp;class Ge{static set __childrenNodeConstructor(e){Qp=e}static get __childrenNodeConstructor(){return Qp}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ye(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ye(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(K(i!==".priority"||hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tv(this.value_):e+=this.value_,this.lazyHash_=Jy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(i);return K(s>=0,"Unknown leaf type: "+n),K(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rv,Sv;function fk(t){Rv=t}function dk(t){Sv=t}class pk extends ol{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ds(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ve.MIN}maxPost(){return new ve($i,new Ge("[PRIORITY-POST]",Sv))}makePost(e,n){const i=Rv(e);return new ve(n,new Ge("[PRIORITY-POST]",i))}toString(){return".priority"}}const _t=new pk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=Math.log(2);class mk{constructor(e){const n=r=>parseInt(Math.log(r)/gk,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ca=function(t,e,n,i){t.sort(e);const s=function(c,u){const f=u-c;let p,g;if(f===0)return null;if(f===1)return p=t[c],g=n?n(p):p,new Qe(g,p.node,Qe.BLACK,null,null);{const _=parseInt(f/2,10)+c,R=s(c,_),k=s(_+1,u);return p=t[_],g=n?n(p):p,new Qe(g,p.node,Qe.BLACK,R,k)}},r=function(c){let u=null,f=null,p=t.length;const g=function(R,k){const O=p-R,H=p;p-=R;const $=s(O+1,H),j=t[O],B=n?n(j):j;_(new Qe(B,j.node,k,null,$))},_=function(R){u?(u.left=R,u=R):(f=R,u=R)};for(let R=0;R<c.count;++R){const k=c.nextBitIsOne(),O=Math.pow(2,c.count-(R+1));k?g(O,Qe.BLACK):(g(O,Qe.BLACK),g(O,Qe.RED))}return f},o=new mk(t.length),l=r(o);return new Nt(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;const es={};class Ln{static get Default(){return K(es&&_t,"ChildrenNode.ts has not been loaded"),sc=sc||new Ln({".priority":es},{".priority":_t}),sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Es(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Nt?n:null}hasIndex(e){return Hn(this.indexSet_,e.toString())}addIndex(e,n){K(e!==ms,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ve.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Ca(i,e.getCompare()):l=es;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new Ln(f,u)}addToIndexes(e,n){const i=ia(this.indexes_,(s,r)=>{const o=Es(this.indexSet_,r);if(K(o,"Missing index implementation for "+r),s===es)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(ve.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Ca(l,o.getCompare())}else return es;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new ve(e.name,l))),c.insert(e,e.node)}});return new Ln(i,this.indexSet_)}removeFromIndexes(e,n){const i=ia(this.indexes_,s=>{if(s===es)return s;{const r=n.get(e.name);return r?s.remove(new ve(e.name,r)):s}});return new Ln(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;class Re{static get EMPTY_NODE(){return tr||(tr=new Re(new Nt(uh),null,Ln.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Cv(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tr}updatePriority(e){return this.children_.isEmpty()?this:new Re(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?tr:n}}getChild(e){const n=ye(e);return n===null?this:this.getImmediateChild(n).getChild(Me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ve(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?tr:this.priorityNode_;return new Re(s,o,r)}}updateChild(e,n){const i=ye(e);if(i===null)return n;{K(ye(e)!==".priority"||hi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(Me(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(_t,(o,l)=>{n[o]=l.val(e),i++,r&&Re.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bv(this.getPriority().val())+":"),this.forEachChild(_t,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Jy(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ve(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ve(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ve(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ve.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===ms||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Re(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ms||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(_t),s=n.getIterator(_t);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ms?null:this.indexMap_.get(e.toString())}}Re.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _k extends Re{constructor(){super(new Nt(uh),Re.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Re.EMPTY_NODE}isEmpty(){return!1}}const so=new _k;Object.defineProperties(ve,{MIN:{value:new ve(Cs,Re.EMPTY_NODE)},MAX:{value:new ve($i,so)}});Av.__EMPTY_NODE=Re.EMPTY_NODE;Ge.__childrenNodeConstructor=Re;hk(so);dk(so);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=!0;function mt(t,e=null){if(t===null)return Re.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,mt(e))}if(!(t instanceof Array)&&yk){const n=[];let i=!1;if(Kt(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=mt(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new ve(o,c)))}}),n.length===0)return Re.EMPTY_NODE;const r=Ca(n,uk,o=>o.name,uh);if(i){const o=Ca(n,_t.getCompare());return new Re(r,mt(e),new Ln({".priority":o},{".priority":_t}))}else return new Re(r,mt(e),Ln.Default)}else{let n=Re.EMPTY_NODE;return Kt(t,(i,s)=>{if(Hn(t,i)&&i.substring(0,1)!=="."){const r=mt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(mt(e))}}fk(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk extends ol{constructor(e){super(),this.indexPath_=e,K(!pe(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ds(e.name,n.name):r}makePost(e,n){const i=mt(e),s=Re.EMPTY_NODE.updateChild(this.indexPath_,i);return new ve(n,s)}maxPost(){const e=Re.EMPTY_NODE.updateChild(this.indexPath_,so);return new ve($i,e)}toString(){return Ev(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek extends ol{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ds(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ve.MIN}maxPost(){return ve.MAX}makePost(e,n){const i=mt(e);return new ve(n,i)}toString(){return".value"}}const Tk=new Ek;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){return{type:"value",snapshotNode:t}}function wk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ak(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yp(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cs}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new hh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_t?n="$priority":t.index_===Tk?n="$value":t.index_===ms?n="$key":(K(t.index_ instanceof vk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=it(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+it(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=it(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends _v{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=no("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ra.getListenId_(e,i),l={};this.listens_[o]=l;const c=Xp(e._queryParams);this.restRequest_(r+".json",c,(u,f)=>{let p=f;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(r,p,!1,i),Es(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,n){const i=Ra.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Xp(e._queryParams),i=e._path.toString(),s=new xr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pu(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Mr(l.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.rootNode_=Re.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){return{value:null,children:new Map}}function Pv(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ye(e);t.children.has(i)||t.children.set(i,Sa());const s=t.children.get(i);e=Me(e),Pv(s,e,n)}}function Xc(t,e,n){t.value!==null?n(e,t.value):Rk(t,(i,s)=>{const r=new Le(e.toString()+"/"+i);Xc(s,r,n)})}function Rk(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Kt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=10*1e3,Pk=30*1e3,Nk=5*60*1e3;class kk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Sk(e);const i=Zp+(Pk-Zp)*Math.random();wr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Kt(e,(s,r)=>{r>0&&Hn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),wr(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vn||(vn={}));function Nv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ov(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=vn.ACK_USER_WRITE,this.source=Nv()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new Pa(Se(),n,this.revert)}}else return K(ye(this.path)===e,"operationForChild called for unrelated child."),new Pa(Me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=vn.OVERWRITE}operationForChild(e){return pe(this.path)?new ji(this.source,Se(),this.snap.getImmediateChild(e)):new ji(this.source,Me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=vn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new ji(this.source,Se(),n.value):new Wr(this.source,Se(),n)}else return K(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wr(this.source,Me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ye(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Ok(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bk(o.childName,o.snapshotNode))}),nr(t,s,"child_removed",e,i,n),nr(t,s,"child_added",e,i,n),nr(t,s,"child_moved",r,i,n),nr(t,s,"child_changed",e,i,n),nr(t,s,"value",e,i,n),s}function nr(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,c)=>xk(t,l,c)),o.forEach(l=>{const c=Dk(t,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function Dk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xk(t,e,n){if(e.childName==null||n.childName==null)throw Ss("Should only compare child_ events.");const i=new ve(e.childName,e.snapshotNode),s=new ve(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e){return{eventCache:t,serverCache:e}}function Ar(t,e,n,i){return Dv(new fh(e,n,i),t.serverCache)}function xv(t,e,n,i){return Dv(t.eventCache,new fh(e,n,i))}function Jc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;const Mk=()=>(rc||(rc=new Nt(EN)),rc);class xe{static fromObject(e){let n=new xe(null);return Kt(e,(i,s)=>{n=n.set(new Le(i),s)}),n}constructor(e,n=Mk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(pe(e))return null;{const i=ye(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(Me(e),n);return r!=null?{path:Xe(new Le(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=ye(e),i=this.children.get(n);return i!==null?i.subtree(Me(e)):new xe(null)}}set(e,n){if(pe(e))return new xe(n,this.children);{const i=ye(e),r=(this.children.get(i)||new xe(null)).set(Me(e),n),o=this.children.insert(i,r);return new xe(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=ye(e),i=this.children.get(n);if(i){const s=i.remove(Me(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new xe(null):new xe(this.value,r)}else return this}}get(e){if(pe(e))return this.value;{const n=ye(e),i=this.children.get(n);return i?i.get(Me(e)):null}}setTree(e,n){if(pe(e))return n;{const i=ye(e),r=(this.children.get(i)||new xe(null)).setTree(Me(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new xe(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Xe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(pe(e))return null;{const r=ye(e),o=this.children.get(r);return o?o.findOnPath_(Me(e),Xe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(pe(e))return this;{this.value&&i(n,this.value);const s=ye(e),r=this.children.get(s);return r?r.foreachOnPath_(Me(e),Xe(n,s),i):new xe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Xe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new xe(null))}}function br(t,e,n){if(pe(e))return new an(new xe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=zt(s,e);return r=r.updateChild(o,n),new an(t.writeTree_.set(s,r))}else{const s=new xe(n),r=t.writeTree_.setTree(e,s);return new an(r)}}}function eg(t,e,n){let i=t;return Kt(n,(s,r)=>{i=br(i,Xe(e,s),r)}),i}function tg(t,e){if(pe(e))return an.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new an(n)}}function Zc(t,e){return Gi(t,e)!=null}function Gi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function ng(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_t,(i,s)=>{e.push(new ve(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ve(i,s.value))}),e}function ri(t,e){if(pe(e))return t;{const n=Gi(t,e);return n!=null?new an(new xe(n)):new an(t.writeTree_.subtree(e))}}function eu(t){return t.writeTree_.isEmpty()}function Rs(t,e){return Mv(Se(),t.writeTree_,e)}function Mv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(K(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Mv(Xe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Xe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){return $v(e,t)}function Lk(t,e,n,i,s){K(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=br(t.visibleWrites,e,n)),t.lastWriteId=i}function Vk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Fk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Uk(l,i.path)?s=!1:nn(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Bk(t),!0;if(i.snap)t.visibleWrites=tg(t.visibleWrites,i.path);else{const l=i.children;Kt(l,c=>{t.visibleWrites=tg(t.visibleWrites,Xe(i.path,c))})}return!0}else return!1}function Uk(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(Xe(t.path,n),e))return!0;return!1}function Bk(t){t.visibleWrites=Vv(t.allWrites,$k,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $k(t){return t.visible}function Vv(t,e,n){let i=an.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)nn(n,o)?(l=zt(n,o),i=br(i,l,r.snap)):nn(o,n)&&(l=zt(o,n),i=br(i,Se(),r.snap.getChild(l)));else if(r.children){if(nn(n,o))l=zt(n,o),i=eg(i,l,r.children);else if(nn(o,n))if(l=zt(o,n),pe(l))i=eg(i,Se(),r.children);else{const c=Es(r.children,ye(l));if(c){const u=c.getChild(Me(l));i=br(i,Se(),u)}}}else throw Ss("WriteRecord should have .snap or .children")}}return i}function Fv(t,e,n,i,s){if(!i&&!s){const r=Gi(t.visibleWrites,e);if(r!=null)return r;{const o=ri(t.visibleWrites,e);if(eu(o))return n;if(n==null&&!Zc(o,Se()))return null;{const l=n||Re.EMPTY_NODE;return Rs(o,l)}}}else{const r=ri(t.visibleWrites,e);if(!s&&eu(r))return n;if(!s&&n==null&&!Zc(r,Se()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(nn(u.path,e)||nn(e,u.path))},l=Vv(t.allWrites,o,e),c=n||Re.EMPTY_NODE;return Rs(l,c)}}}function jk(t,e,n){let i=Re.EMPTY_NODE;const s=Gi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_t,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ri(t.visibleWrites,e);return n.forEachChild(_t,(o,l)=>{const c=Rs(ri(r,new Le(o)),l);i=i.updateImmediateChild(o,c)}),ng(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ri(t.visibleWrites,e);return ng(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Hk(t,e,n,i,s){K(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Xe(e,n);if(Zc(t.visibleWrites,r))return null;{const o=ri(t.visibleWrites,r);return eu(o)?s.getChild(n):Rs(o,s.getChild(n))}}function Wk(t,e,n,i){const s=Xe(e,n),r=Gi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ri(t.visibleWrites,s);return Rs(o,i.getNode().getImmediateChild(n))}else return null}function qk(t,e){return Gi(t.visibleWrites,e)}function zk(t,e,n,i,s,r,o){let l;const c=ri(t.visibleWrites,e),u=Gi(c,Se());if(u!=null)l=u;else if(n!=null)l=Rs(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),g=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let _=g.getNext();for(;_&&f.length<s;)p(_,i)!==0&&f.push(_),_=g.getNext();return f}else return[]}function Gk(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function tu(t,e,n,i){return Fv(t.writeTree,t.treePath,e,n,i)}function Uv(t,e){return jk(t.writeTree,t.treePath,e)}function ig(t,e,n,i){return Hk(t.writeTree,t.treePath,e,n,i)}function Na(t,e){return qk(t.writeTree,Xe(t.treePath,e))}function Kk(t,e,n,i,s,r){return zk(t.writeTree,t.treePath,e,n,i,s,r)}function dh(t,e,n){return Wk(t.writeTree,t.treePath,e,n)}function Bv(t,e){return $v(Xe(t.treePath,e),t.writeTree)}function $v(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Yp(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Ak(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,wk(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Yp(i,e.snapshotNode,s.oldSnap));else throw Ss("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const jv=new Yk;class ph{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new fh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dh(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hi(this.viewCache_),r=Kk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Xk(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Jk(t,e,n,i,s){const r=new Qk;let o,l;if(n.type===vn.OVERWRITE){const u=n;u.source.fromUser?o=nu(t,e,u.path,u.snap,i,s,r):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!pe(u.path),o=ka(t,e,u.path,u.snap,i,s,l,r))}else if(n.type===vn.MERGE){const u=n;u.source.fromUser?o=eO(t,e,u.path,u.children,i,s,r):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=iu(t,e,u.path,u.children,i,s,l,r))}else if(n.type===vn.ACK_USER_WRITE){const u=n;u.revert?o=iO(t,e,u.path,i,s,r):o=tO(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===vn.LISTEN_COMPLETE)o=nO(t,e,n.path,i,r);else throw Ss("Unknown operation type: "+n.type);const c=r.getChanges();return Zk(e,o,c),{viewCache:o,changes:c}}function Zk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Jc(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ik(Jc(e)))}}function Hv(t,e,n,i,s,r){const o=e.eventCache;if(Na(i,n)!=null)return e;{let l,c;if(pe(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Hi(e),f=u instanceof Re?u:Re.EMPTY_NODE,p=Uv(i,f);l=t.filter.updateFullNode(e.eventCache.getNode(),p,r)}else{const u=tu(i,Hi(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=ye(n);if(u===".priority"){K(hi(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const p=ig(i,n,f,c);p!=null?l=t.filter.updatePriority(f,p):l=o.getNode()}else{const f=Me(n);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=ig(i,n,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(f,g):p=o.getNode().getImmediateChild(u)}else p=dh(i,u,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),u,p,f,s,r):l=o.getNode()}}return Ar(e,l,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function ka(t,e,n,i,s,r,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(pe(n))u=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,i);u=f.updateFullNode(c.getNode(),_,null)}else{const _=ye(n);if(!c.isCompleteForPath(n)&&hi(n)>1)return e;const R=Me(n),O=c.getNode().getImmediateChild(_).updateChild(R,i);_===".priority"?u=f.updatePriority(c.getNode(),O):u=f.updateChild(c.getNode(),_,O,R,jv,null)}const p=xv(e,u,c.isFullyInitialized()||pe(n),f.filtersNodes()),g=new ph(s,p,r);return Hv(t,p,n,s,g,l)}function nu(t,e,n,i,s,r,o){const l=e.eventCache;let c,u;const f=new ph(s,e,r);if(pe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ar(e,u,!0,t.filter.filtersNodes());else{const p=ye(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),c=Ar(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Me(n),_=l.getNode().getImmediateChild(p);let R;if(pe(g))R=i;else{const k=f.getCompleteChild(p);k!=null?vv(g)===".priority"&&k.getChild(Tv(g)).isEmpty()?R=k:R=k.updateChild(g,i):R=Re.EMPTY_NODE}if(_.equals(R))c=e;else{const k=t.filter.updateChild(l.getNode(),p,R,g,f,o);c=Ar(e,k,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function sg(t,e){return t.eventCache.isCompleteForChild(e)}function eO(t,e,n,i,s,r,o){let l=e;return i.foreach((c,u)=>{const f=Xe(n,c);sg(e,ye(f))&&(l=nu(t,l,f,u,s,r,o))}),i.foreach((c,u)=>{const f=Xe(n,c);sg(e,ye(f))||(l=nu(t,l,f,u,s,r,o))}),l}function rg(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function iu(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;pe(n)?u=i:u=new xe(null).setTree(n,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const _=e.serverCache.getNode().getImmediateChild(p),R=rg(t,_,g);c=ka(t,c,new Le(p),R,s,r,o,l)}}),u.children.inorderTraversal((p,g)=>{const _=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!_){const R=e.serverCache.getNode().getImmediateChild(p),k=rg(t,R,g);c=ka(t,c,new Le(p),k,s,r,o,l)}}),c}function tO(t,e,n,i,s,r,o){if(Na(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(pe(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ka(t,e,n,c.getNode().getChild(n),s,r,l,o);if(pe(n)){let u=new xe(null);return c.getNode().forEachChild(ms,(f,p)=>{u=u.set(new Le(f),p)}),iu(t,e,n,u,s,r,l,o)}else return e}else{let u=new xe(null);return i.foreach((f,p)=>{const g=Xe(n,f);c.isCompleteForPath(g)&&(u=u.set(f,c.getNode().getChild(g)))}),iu(t,e,n,u,s,r,l,o)}}function nO(t,e,n,i,s){const r=e.serverCache,o=xv(e,r.getNode(),r.isFullyInitialized()||pe(n),r.isFiltered());return Hv(t,o,n,i,jv,s)}function iO(t,e,n,i,s,r){let o;if(Na(i,n)!=null)return e;{const l=new ph(i,e,s),c=e.eventCache.getNode();let u;if(pe(n)||ye(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=tu(i,Hi(e));else{const p=e.serverCache.getNode();K(p instanceof Re,"serverChildren would be complete if leaf node"),f=Uv(i,p)}f=f,u=t.filter.updateFullNode(c,f,r)}else{const f=ye(n);let p=dh(i,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?u=t.filter.updateChild(c,f,p,Me(n),l,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,Re.EMPTY_NODE,Me(n),l,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=tu(i,Hi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Na(i,Se())!=null,Ar(e,u,o,t.filter.filtersNodes())}}function sO(t,e){const n=Hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(ye(e)).isEmpty())?n.getChild(e):null}function og(t,e,n,i){e.type===vn.MERGE&&e.source.queryId!==null&&(K(Hi(t.viewCache_),"We should always have a full cache before handling merges"),K(Jc(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Jk(t.processor_,s,e,n,i);return Xk(t.processor_,r.viewCache),K(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rO(t,r.changes,r.viewCache.eventCache.getNode())}function rO(t,e,n,i){const s=t.eventRegistrations_;return Ok(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag;function oO(t){K(!ag,"__referenceConstructor has already been defined"),ag=t}function gh(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return K(r!=null,"SyncTree gave us an op for an invalid query."),og(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(og(o,e,n,i));return r}}function mh(t,e){let n=null;for(const i of t.views.values())n=n||sO(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lg;function aO(t){K(!lg,"__referenceConstructor has already been defined"),lg=t}class cg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=Gk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lO(t,e,n,i,s){return Lk(t.pendingWriteTree_,e,n,i,s),s?ll(t,new ji(Nv(),e,n)):[]}function as(t,e,n=!1){const i=Vk(t.pendingWriteTree_,e);if(Fk(t.pendingWriteTree_,e)){let r=new xe(null);return i.snap!=null?r=r.set(Se(),!0):Kt(i.children,o=>{r=r.set(new Le(o),!0)}),ll(t,new Pa(i.path,r,n))}else return[]}function al(t,e,n){return ll(t,new ji(kv(),e,n))}function cO(t,e,n){const i=xe.fromObject(n);return ll(t,new Wr(kv(),e,i))}function uO(t,e,n,i){const s=Gv(t,i);if(s!=null){const r=Kv(s),o=r.path,l=r.queryId,c=zt(o,e),u=new ji(Ov(l),c,n);return Qv(t,o,u)}else return[]}function hO(t,e,n,i){const s=Gv(t,i);if(s){const r=Kv(s),o=r.path,l=r.queryId,c=zt(o,e),u=xe.fromObject(n),f=new Wr(Ov(l),c,u);return Qv(t,o,f)}else return[]}function Wv(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=zt(o,e),u=mh(l,c);if(u)return u});return Fv(s,e,r,n,!0)}function ll(t,e){return qv(e,t.syncPointTree_,null,Lv(t.pendingWriteTree_,Se()))}function qv(t,e,n,i){if(pe(t.path))return zv(t,e,n,i);{const s=e.get(Se());n==null&&s!=null&&(n=mh(s,Se()));let r=[];const o=ye(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=Bv(i,o);r=r.concat(qv(l,c,u,f))}return s&&(r=r.concat(gh(s,t,i,n))),r}}function zv(t,e,n,i){const s=e.get(Se());n==null&&s!=null&&(n=mh(s,Se()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Bv(i,o),f=t.operationForChild(o);f&&(r=r.concat(zv(f,l,c,u)))}),s&&(r=r.concat(gh(s,t,i,n))),r}function Gv(t,e){return t.tagToQueryMap.get(e)}function Kv(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function Qv(t,e,n){const i=t.syncPointTree_.get(e);K(i,"Missing sync point for query tag that we're tracking");const s=Lv(t.pendingWriteTree_,e);return gh(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _h(n)}node(){return this.node_}}class yh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new yh(this.syncTree_,n)}node(){return Wv(this.syncTree_,this.path_)}}const fO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ug=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pO(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},pO=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&K(!1,"Unexpected increment value: "+i);const s=e.node();if(K(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},gO=function(t,e,n,i){return vh(e,new yh(n,t),i)},mO=function(t,e,n){return vh(t,new _h(e),n)};function vh(t,e,n){const i=t.getPriority().val(),s=ug(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ug(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ge(l,mt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ge(s))),o.forEachChild(_t,(l,c)=>{const u=vh(c,e.getImmediateChild(l),n);u!==c&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Th(t,e){let n=e instanceof Le?e:new Le(e),i=t,s=ye(n);for(;s!==null;){const r=Es(i.node.children,s)||{children:{},childCount:0};i=new Eh(s,i,r),n=Me(n),s=ye(n)}return i}function xs(t){return t.node.value}function Yv(t,e){t.node.value=e,su(t)}function Xv(t){return t.node.childCount>0}function _O(t){return xs(t)===void 0&&!Xv(t)}function cl(t,e){Kt(t.node.children,(n,i)=>{e(new Eh(n,t,i))})}function Jv(t,e,n,i){n&&e(t),cl(t,s=>{Jv(s,e,!0)})}function yO(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ro(t){return new Le(t.parent===null?t.name:ro(t.parent)+"/"+t.name)}function su(t){t.parent!==null&&vO(t.parent,t.name,t)}function vO(t,e,n){const i=_O(n),s=Hn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,su(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,su(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=/[\[\].#$\/\u0000-\u001F\u007F]/,TO=/[\[\].#$\u0000-\u001F\u007F]/,oc=10*1024*1024,Zv=function(t){return typeof t=="string"&&t.length!==0&&!EO.test(t)},IO=function(t){return typeof t=="string"&&t.length!==0&&!TO.test(t)},wO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),IO(t)},eE=function(t,e,n){const i=n instanceof Le?new nk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ai(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ai(i)+" with contents = "+e.toString());if(Zy(e))throw new Error(t+"contains "+e.toString()+" "+Ai(i));if(typeof e=="string"&&e.length>oc/3&&Ga(e)>oc)throw new Error(t+"contains a string greater than "+oc+" utf8 bytes "+Ai(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Kt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ai(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ik(i,o),eE(t,l,i),sk(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ai(i)+" in addition to actual children.")}},AO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wO(n))throw new Error(NA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CO(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Iv(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ki(t,e,n){CO(t,n),RO(t,i=>nn(i,e)||nn(e,i))}function RO(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(SO(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ir&&gt("event: "+n.toString()),io(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="repo_interrupt",NO=25;class kO{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sa(),this.transactionQueueTree_=new Eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OO(t,e,n){if(t.stats_=ah(t.repoInfo_),t.forceRestClient_||CN())t.server_=new Ra(t.repoInfo_,(i,s,r,o)=>{hg(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Bn(t.repoInfo_,e,(i,s,r,o)=>{hg(t,i,s,r,o)},i=>{fg(t,i)},i=>{xO(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=ON(t.repoInfo_,()=>new kk(t.stats_,t.server_)),t.infoData_=new Ck,t.infoSyncTree_=new cg({startListening:(i,s,r,o)=>{let l=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(l=al(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ih(t,"connected",!1),t.serverSyncTree_=new cg({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,c)=>{const u=o(l,c);Ki(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function DO(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tE(t){return fO({timestamp:DO(t)})}function hg(t,e,n,i,s){t.dataUpdateCount++;const r=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=ia(n,u=>mt(u));o=hO(t.serverSyncTree_,r,c,s)}else{const c=mt(n);o=uO(t.serverSyncTree_,r,c,s)}else if(i){const c=ia(n,u=>mt(u));o=cO(t.serverSyncTree_,r,c)}else{const c=mt(n);o=al(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Ah(t,r)),Ki(t.eventQueue_,l,o)}function fg(t,e){Ih(t,"connected",e),e===!1&&LO(t)}function xO(t,e){Kt(e,(n,i)=>{Ih(t,n,i)})}function Ih(t,e,n){const i=new Le("/.info/"+e),s=mt(n);t.infoData_.updateSnapshot(i,s);const r=al(t.infoSyncTree_,i,s);Ki(t.eventQueue_,i,r)}function MO(t){return t.nextWriteId_++}function LO(t){nE(t,"onDisconnectEvents");const e=tE(t),n=Sa();Xc(t.onDisconnect_,Se(),(s,r)=>{const o=gO(s,r,t.serverSyncTree_,e);Pv(n,s,o)});let i=[];Xc(n,Se(),(s,r)=>{i=i.concat(al(t.serverSyncTree_,s,r));const o=BO(t,s);Ah(t,o)}),t.onDisconnect_=Sa(),Ki(t.eventQueue_,Se(),i)}function VO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PO)}function nE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function iE(t,e,n){return Wv(t.serverSyncTree_,e,n)||Re.EMPTY_NODE}function wh(t,e=t.transactionQueueTree_){if(e||ul(t,e),xs(e)){const n=rE(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&FO(t,ro(e),n)}else Xv(e)&&cl(e,n=>{wh(t,n)})}function FO(t,e,n){const i=n.map(u=>u.currentWriteId),s=iE(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const f=n[u];K(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=zt(e,f.path);r=r.updateChild(p,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,u=>{nE(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const p=[];for(let g=0;g<n.length;g++)n[g].status=2,f=f.concat(as(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&p.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();ul(t,Th(t.transactionQueueTree_,e)),wh(t,t.transactionQueueTree_),Ki(t.eventQueue_,e,f);for(let g=0;g<p.length;g++)io(p[g])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Ut("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}Ah(t,e)}},o)}function Ah(t,e){const n=sE(t,e),i=ro(n),s=rE(t,n);return UO(t,s,i),i}function UO(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=zt(n,c.path);let f=!1,p;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,s=s.concat(as(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=NO)f=!0,p="maxretry",s=s.concat(as(t.serverSyncTree_,c.currentWriteId,!0));else{const g=iE(t,c.path,o);c.currentInputSnapshot=g;const _=e[l].update(g.val());if(_!==void 0){eE("transaction failed: Data returned ",_,c.path);let R=mt(_);typeof _=="object"&&_!=null&&Hn(_,".priority")||(R=R.updatePriority(g.getPriority()));const O=c.currentWriteId,H=tE(t),$=mO(R,g,H);c.currentOutputSnapshotRaw=R,c.currentOutputSnapshotResolved=$,c.currentWriteId=MO(t),o.splice(o.indexOf(O),1),s=s.concat(lO(t.serverSyncTree_,c.path,$,c.currentWriteId,c.applyLocally)),s=s.concat(as(t.serverSyncTree_,O,!0))}else f=!0,p="nodata",s=s.concat(as(t.serverSyncTree_,c.currentWriteId,!0))}Ki(t.eventQueue_,n,s),s=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}ul(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)io(i[l]);wh(t,t.transactionQueueTree_)}function sE(t,e){let n,i=t.transactionQueueTree_;for(n=ye(e);n!==null&&xs(i)===void 0;)i=Th(i,n),e=Me(e),n=ye(e);return i}function rE(t,e){const n=[];return oE(t,e,n),n.sort((i,s)=>i.order-s.order),n}function oE(t,e,n){const i=xs(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);cl(e,s=>{oE(t,s,n)})}function ul(t,e){const n=xs(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Yv(e,n.length>0?n:void 0)}cl(e,i=>{ul(t,i)})}function BO(t,e){const n=ro(sE(t,e)),i=Th(t.transactionQueueTree_,e);return yO(i,s=>{ac(t,s)}),ac(t,i),Jv(i,s=>{ac(t,s)}),n}function ac(t,e){const n=xs(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(as(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yv(e,void 0):n.length=r+1,Ki(t.eventQueue_,ro(e),s);for(let o=0;o<i.length;o++)io(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const dg=function(t,e){const n=HO(t),i=n.namespace;n.domain==="firebase.com"&&Bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PN(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Le(n.pathString)}},HO=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(f,p)),f<p&&(s=$O(t.substring(f,p)));const g=jO(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const R=e.indexOf(".");i=e.substring(0,R).toLowerCase(),n=e.substring(R+1),r=i}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return pe(this._path)?null:vv(this._path)}get ref(){return new Ms(this._repo,this._path)}get _queryIdentifier(){const e=Jp(this._queryParams),n=rh(e);return n==="{}"?"default":n}get _queryObject(){return Jp(this._queryParams)}isEqual(e){if(e=Gt(e),!(e instanceof bh))return!1;const n=this._repo===e._repo,i=Iv(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+tk(this._path)}}class Ms extends bh{constructor(e,n){super(e,n,new hh,!1)}get parent(){const e=Tv(this._path);return e===null?null:new Ms(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}oO(Ms);aO(Ms);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="FIREBASE_DATABASE_EMULATOR_HOST",ru={};let qO=!1;function zO(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dg(r,s),l=o.repoInfo,c;typeof process<"u"&&Dp&&(c=Dp[WO]),c?(r=`http://${c}?ns=${l.namespace}`,o=dg(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new SN(t.name,t.options,e);AO("Invalid Firebase Database URL",o),pe(o.path)||Bi("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KO(l,t,u,new RN(t,n));return new QO(f,t)}function GO(t,e){const n=ru[e];(!n||n[t.key]!==t)&&Bi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VO(t),delete n[t.key]}function KO(t,e,n,i){let s=ru[e.name];s||(s={},ru[e.name]=s);let r=s[t.toURLString()];return r&&Bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kO(t,qO,n,i),s[t.toURLString()]=r,r}class QO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ms(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){fN(Ns),Ot(new Rt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return zO(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),rt(xp,Mp,t),rt(xp,Mp,"esm2017")}Bn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="firebasestorage.googleapis.com",XO="storageBucket",JO=2*60*1e3,ZO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends fn{constructor(e,n,i=0){super(lc(e),`Firebase Storage: ${n} (${lc(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,bn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var An;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(An||(An={}));function lc(t){return"storage/"+t}function eD(){const t="An unknown error occurred, please check the error payload for server response.";return new bn(An.UNKNOWN,t)}function tD(){return new bn(An.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nD(){return new bn(An.CANCELED,"User canceled the upload/download.")}function iD(t){return new bn(An.INVALID_URL,"Invalid URL '"+t+"'.")}function sD(t){return new bn(An.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pg(t){return new bn(An.INVALID_ARGUMENT,t)}function lE(){return new bn(An.APP_DELETED,"The Firebase app was deleted.")}function rD(t){return new bn(An.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=sn.makeFromUrl(e,n)}catch{return new sn(e,"")}if(i.path==="")return i;throw sD(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},k=n===aE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",H=new RegExp(`^https?://${k}/${s}/${O}`,"i"),j=[{regex:l,indices:c,postModify:r},{regex:_,indices:R,postModify:u},{regex:H,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<j.length;B++){const oe=j[B],ce=oe.regex.exec(e);if(ce){const w=ce[oe.indices.bucket];let y=ce[oe.indices.path];y||(y=""),i=new sn(w,y),oe.postModify(i);break}}if(i==null)throw iD(e);return i}}class oD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,c())},O)}function g(){r&&clearTimeout(r)}function _(O,...H){if(u){g();return}if(O){g(),f.call(null,O,...H);return}if(c()||o){g(),f.call(null,O,...H);return}i<64&&(i*=2);let j;l===1?(l=2,j=0):j=(i+Math.random())*1e3,p(j)}let R=!1;function k(O){R||(R=!0,g(),!u&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),r=setTimeout(()=>{o=!0,k(!0)},n),k}function lD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){return t!==void 0}function gg(t,e,n,i){if(i<e)throw pg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw pg(`Invalid value for '${t}'. Expected ${n} or less.`)}function uD(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var Oa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Oa||(Oa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,i,s,r,o,l,c,u,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Mo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Oa.NO_ERROR,c=r.getStatus();if(!l||hD(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===Oa.ABORT;i(!1,new Mo(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;i(!0,new Mo(u,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());cD(c)?r(c):r()}catch(c){o(c)}else if(l!==null){const c=eD();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?lE():nD();o(c)}else{const c=tD();o(c)}};this.canceled_?n(!1,new Mo(!1,null,!0)):this.backoffId_=aD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function dD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _D(t,e,n,i,s,r,o=!0){const l=uD(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return gD(u,e),dD(u,n),pD(u,r),mD(u,i),new fD(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this._service=e,n instanceof sn?this._location=n:this._location=sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Da(e,n)}get root(){const e=new sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vD(this._location.path)}get storage(){return this._service}get parent(){const e=yD(this._location.path);if(e===null)return null;const n=new sn(this._location.bucket,e);return new Da(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rD(e)}}function mg(t,e){const n=e==null?void 0:e[XO];return n==null?null:sn.makeFromBucketSpec(n,t)}class ED{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=aE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JO,this._maxUploadRetryTime=ZO,this._requests=new Set,s!=null?this._bucket=sn.makeFromBucketSpec(s,this._host):this._bucket=mg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sn.makeFromBucketSpec(this._url,e):this._bucket=mg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Da(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new oD(lE());{const o=_D(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const _g="@firebase/storage",yg="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="storage";function ID(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ED(n,i,s,e,Ns)}function wD(){Ot(new Rt(TD,ID,"PUBLIC").setMultipleInstances(!0)),rt(_g,yg,""),rt(_g,yg,"esm2017")}wD();function AD(t,{firebaseApp:e,modules:n=[]}){t.provide(hN,e);for(const i of n)i(e,t)}const Ch=YI(nA);Ch.use(sP);Ch.use(AD,{firebaseApp:ih});Ch.mount("#app");
