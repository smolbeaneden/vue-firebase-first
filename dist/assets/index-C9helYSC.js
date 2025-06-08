var $I=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var M2=$I((F2,ul)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},ni=[],Gn=()=>{},WI=()=>!1,nc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xh=t=>t.startsWith("onUpdate:"),xt=Object.assign,Jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BI=Object.prototype.hasOwnProperty,xe=(t,e)=>BI.call(t,e),ce=Array.isArray,si=t=>sc(t)==="[object Map]",V_=t=>sc(t)==="[object Set]",fe=t=>typeof t=="function",at=t=>typeof t=="string",Zs=t=>typeof t=="symbol",Ze=t=>t!==null&&typeof t=="object",F_=t=>(Ze(t)||fe(t))&&fe(t.then)&&fe(t.catch),U_=Object.prototype.toString,sc=t=>U_.call(t),HI=t=>sc(t).slice(8,-1),$_=t=>sc(t)==="[object Object]",Zh=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lo=Qh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jI=/-(\w)/g,zs=rc(t=>t.replace(jI,(e,n)=>n?n.toUpperCase():"")),YI=/\B([A-Z])/g,Mr=rc(t=>t.replace(YI,"-$1").toLowerCase()),W_=rc(t=>t.charAt(0).toUpperCase()+t.slice(1)),iu=rc(t=>t?`on${W_(t)}`:""),$s=(t,e)=>!Object.is(t,e),Ka=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},B_=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Gu=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Np;const ic=()=>Np||(Np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ef(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=at(s)?KI(s):ef(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(at(t)||Ze(t))return t}const GI=/;(?![^(]*\))/g,zI=/:([^]+)/,qI=/\/\*[^]*?\*\//g;function KI(t){const e={};return t.replace(qI,"").split(GI).forEach(n=>{if(n){const s=n.split(zI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function tf(t){let e="";if(at(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=tf(t[n]);s&&(e+=s+" ")}else if(Ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const QI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",XI=Qh(QI);function H_(t){return!!t||t===""}const j_=t=>!!(t&&t.__v_isRef===!0),Y_=t=>at(t)?t:t==null?"":ce(t)||Ze(t)&&(t.toString===U_||!fe(t.toString))?j_(t)?Y_(t.value):JSON.stringify(t,G_,2):String(t),G_=(t,e)=>j_(e)?G_(t,e.value):si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ou(s,i)+" =>"]=r,n),{})}:V_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ou(n))}:Zs(e)?ou(e):Ze(e)&&!ce(e)&&!$_(e)?String(e):e,ou=(t,e="")=>{var n;return Zs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class JI{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ZI(){return Zt}let We;const au=new WeakSet;class z_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,au.has(this)&&(au.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||K_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dp(this),Q_(this);const e=We,n=Rn;We=this,Rn=!0;try{return this.fn()}finally{X_(this),We=e,Rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rf(e);this.deps=this.depsTail=void 0,Dp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?au.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zu(this)&&this.run()}get dirty(){return zu(this)}}let q_=0,co,uo;function K_(t,e=!1){if(t.flags|=8,e){t.next=uo,uo=t;return}t.next=co,co=t}function nf(){q_++}function sf(){if(--q_>0)return;if(uo){let e=uo;for(uo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;co;){let e=co;for(co=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Q_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function X_(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),rf(s),e0(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function zu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(J_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function J_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ko))return;t.globalVersion=ko;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!zu(t)){t.flags&=-3;return}const n=We,s=Rn;We=t,Rn=!0;try{Q_(t);const r=t.fn(t._value);(e.version===0||$s(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{We=n,Rn=s,X_(t),t.flags&=-3}}function rf(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function e0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rn=!0;const Z_=[];function er(){Z_.push(Rn),Rn=!1}function tr(){const t=Z_.pop();Rn=t===void 0?!0:t}function Dp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=We;We=void 0;try{e()}finally{We=n}}}let ko=0;class t0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class of{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!We||!Rn||We===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==We)n=this.activeLink=new t0(We,this),We.deps?(n.prevDep=We.depsTail,We.depsTail.nextDep=n,We.depsTail=n):We.deps=We.depsTail=n,ey(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=We.depsTail,n.nextDep=void 0,We.depsTail.nextDep=n,We.depsTail=n,We.deps===n&&(We.deps=s)}return n}trigger(e){this.version++,ko++,this.notify(e)}notify(e){nf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sf()}}}function ey(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ey(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qu=new WeakMap,yr=Symbol(""),Ku=Symbol(""),No=Symbol("");function Ct(t,e,n){if(Rn&&We){let s=qu.get(t);s||qu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new of),r.map=s,r.key=n),r.track()}}function us(t,e,n,s,r,i){const o=qu.get(t);if(!o){ko++;return}const l=c=>{c&&c.trigger()};if(nf(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&Zh(n);if(c&&n==="length"){const f=Number(s);o.forEach((d,m)=>{(m==="length"||m===No||!Zs(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(No)),e){case"add":c?u&&l(o.get("length")):(l(o.get(yr)),si(t)&&l(o.get(Ku)));break;case"delete":c||(l(o.get(yr)),si(t)&&l(o.get(Ku)));break;case"set":si(t)&&l(o.get(yr));break}}sf()}function jr(t){const e=Me(t);return e===t?e:(Ct(e,"iterate",No),Cn(t)?e:e.map($t))}function af(t){return Ct(t=Me(t),"iterate",No),t}const n0={__proto__:null,[Symbol.iterator](){return lu(this,Symbol.iterator,$t)},concat(...t){return jr(this).concat(...t.map(e=>ce(e)?jr(e):e))},entries(){return lu(this,"entries",t=>(t[1]=$t(t[1]),t))},every(t,e){return ss(this,"every",t,e,void 0,arguments)},filter(t,e){return ss(this,"filter",t,e,n=>n.map($t),arguments)},find(t,e){return ss(this,"find",t,e,$t,arguments)},findIndex(t,e){return ss(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ss(this,"findLast",t,e,$t,arguments)},findLastIndex(t,e){return ss(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ss(this,"forEach",t,e,void 0,arguments)},includes(...t){return cu(this,"includes",t)},indexOf(...t){return cu(this,"indexOf",t)},join(t){return jr(this).join(t)},lastIndexOf(...t){return cu(this,"lastIndexOf",t)},map(t,e){return ss(this,"map",t,e,void 0,arguments)},pop(){return Ki(this,"pop")},push(...t){return Ki(this,"push",t)},reduce(t,...e){return Op(this,"reduce",t,e)},reduceRight(t,...e){return Op(this,"reduceRight",t,e)},shift(){return Ki(this,"shift")},some(t,e){return ss(this,"some",t,e,void 0,arguments)},splice(...t){return Ki(this,"splice",t)},toReversed(){return jr(this).toReversed()},toSorted(t){return jr(this).toSorted(t)},toSpliced(...t){return jr(this).toSpliced(...t)},unshift(...t){return Ki(this,"unshift",t)},values(){return lu(this,"values",$t)}};function lu(t,e,n){const s=af(t),r=s[e]();return s!==t&&!Cn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const s0=Array.prototype;function ss(t,e,n,s,r,i){const o=af(t),l=o!==t&&!Cn(t),c=o[e];if(c!==s0[e]){const d=c.apply(t,i);return l?$t(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,$t(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,s);return l&&r?r(f):f}function Op(t,e,n,s){const r=af(t);let i=n;return r!==t&&(Cn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,$t(l),c,t)}),r[e](i,...s)}function cu(t,e,n){const s=Me(t);Ct(s,"iterate",No);const r=s[e](...n);return(r===-1||r===!1)&&uf(n[0])?(n[0]=Me(n[0]),s[e](...n)):r}function Ki(t,e,n=[]){er(),nf();const s=Me(t)[e].apply(t,n);return sf(),tr(),s}const r0=Qh("__proto__,__v_isRef,__isVue"),ty=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zs));function i0(t){Zs(t)||(t=String(t));const e=Me(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class ny{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?m0:oy:i?iy:ry).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=n0[n]))return c;if(n==="hasOwnProperty")return i0}const l=Reflect.get(e,n,Ot(e)?e:s);return(Zs(n)?ty.has(n):r0(n))||(r||Ct(e,"get",n),i)?l:Ot(l)?o&&Zh(n)?l:l.value:Ze(l)?r?ly(l):oc(l):l}}class sy extends ny{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ir(i);if(!Cn(s)&&!Ir(s)&&(i=Me(i),s=Me(s)),!ce(e)&&Ot(i)&&!Ot(s))return c?!1:(i.value=s,!0)}const o=ce(e)&&Zh(n)?Number(n)<e.length:xe(e,n),l=Reflect.set(e,n,s,Ot(e)?e:r);return e===Me(r)&&(o?$s(s,i)&&us(e,"set",n,s):us(e,"add",n,s)),l}deleteProperty(e,n){const s=xe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&us(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Zs(n)||!ty.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",ce(e)?"length":yr),Reflect.ownKeys(e)}}class o0 extends ny{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const a0=new sy,l0=new o0,c0=new sy(!0),Qu=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function u0(t,e,n){return function(...s){const r=this.__v_raw,i=Me(r),o=si(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),f=n?Qu:e?Xu:$t;return!e&&Ct(i,"iterate",c?Ku:yr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function xa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h0(t,e){const n={get(r){const i=this.__v_raw,o=Me(i),l=Me(r);t||($s(r,l)&&Ct(o,"get",r),Ct(o,"get",l));const{has:c}=Ma(o),u=e?Qu:t?Xu:$t;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ct(Me(r),"iterate",yr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Me(i),l=Me(r);return t||($s(r,l)&&Ct(o,"has",r),Ct(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Me(l),u=e?Qu:t?Xu:$t;return!t&&Ct(c,"iterate",yr),l.forEach((f,d)=>r.call(i,u(f),u(d),o))}};return xt(n,t?{add:xa("add"),set:xa("set"),delete:xa("delete"),clear:xa("clear")}:{add(r){!e&&!Cn(r)&&!Ir(r)&&(r=Me(r));const i=Me(this);return Ma(i).has.call(i,r)||(i.add(r),us(i,"add",r,r)),this},set(r,i){!e&&!Cn(i)&&!Ir(i)&&(i=Me(i));const o=Me(this),{has:l,get:c}=Ma(o);let u=l.call(o,r);u||(r=Me(r),u=l.call(o,r));const f=c.call(o,r);return o.set(r,i),u?$s(i,f)&&us(o,"set",r,i):us(o,"add",r,i),this},delete(r){const i=Me(this),{has:o,get:l}=Ma(i);let c=o.call(i,r);c||(r=Me(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&us(i,"delete",r,void 0),u},clear(){const r=Me(this),i=r.size!==0,o=r.clear();return i&&us(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=u0(r,t,e)}),n}function lf(t,e){const n=h0(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,i)}const f0={get:lf(!1,!1)},d0={get:lf(!1,!0)},p0={get:lf(!0,!1)},ry=new WeakMap,iy=new WeakMap,oy=new WeakMap,m0=new WeakMap;function g0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _0(t){return t.__v_skip||!Object.isExtensible(t)?0:g0(HI(t))}function oc(t){return Ir(t)?t:cf(t,!1,a0,f0,ry)}function ay(t){return cf(t,!1,c0,d0,iy)}function ly(t){return cf(t,!0,l0,p0,oy)}function cf(t,e,n,s,r){if(!Ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=_0(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function ho(t){return Ir(t)?ho(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function Cn(t){return!!(t&&t.__v_isShallow)}function uf(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function y0(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&B_(t,"__v_skip",!0),t}const $t=t=>Ze(t)?oc(t):t,Xu=t=>Ze(t)?ly(t):t;function Ot(t){return t?t.__v_isRef===!0:!1}function Qa(t){return cy(t,!1)}function v0(t){return cy(t,!0)}function cy(t,e){return Ot(t)?t:new w0(t,e)}class w0{constructor(e,n){this.dep=new of,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Me(e),this._value=n?e:$t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Cn(e)||Ir(e);e=s?e:Me(e),$s(e,n)&&(this._rawValue=e,this._value=s?e:$t(e),this.dep.trigger())}}function vr(t){return Ot(t)?t.value:t}const T0={get:(t,e,n)=>e==="__v_raw"?t:vr(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function uy(t){return ho(t)?t:new Proxy(t,T0)}class E0{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new of(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ko-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&We!==this)return K_(this,!0),!0}get value(){const e=this.dep.track();return J_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function I0(t,e,n=!1){let s,r;return fe(t)?s=t:(s=t.get,r=t.set),new E0(s,r,n)}const La={},hl=new WeakMap;let ur;function S0(t,e=!1,n=ur){if(n){let s=hl.get(n);s||hl.set(n,s=[]),s.push(t)}}function b0(t,e,n=$e){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=W=>r?W:Cn(W)||r===!1||r===0?hs(W,1):hs(W);let f,d,m,_,R=!1,N=!1;if(Ot(t)?(d=()=>t.value,R=Cn(t)):ho(t)?(d=()=>u(t),R=!0):ce(t)?(N=!0,R=t.some(W=>ho(W)||Cn(W)),d=()=>t.map(W=>{if(Ot(W))return W.value;if(ho(W))return u(W);if(fe(W))return c?c(W,2):W()})):fe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){er();try{m()}finally{tr()}}const W=ur;ur=f;try{return c?c(t,3,[_]):t(_)}finally{ur=W}}:d=Gn,e&&r){const W=d,ue=r===!0?1/0:r;d=()=>hs(W(),ue)}const D=ZI(),j=()=>{f.stop(),D&&D.active&&Jh(D.effects,f)};if(i&&e){const W=e;e=(...ue)=>{W(...ue),j()}}let B=N?new Array(t.length).fill(La):La;const H=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const ue=f.run();if(r||R||(N?ue.some((pe,I)=>$s(pe,B[I])):$s(ue,B))){m&&m();const pe=ur;ur=f;try{const I=[ue,B===La?void 0:N&&B[0]===La?[]:B,_];c?c(e,3,I):e(...I),B=ue}finally{ur=pe}}}else f.run()};return l&&l(H),f=new z_(d),f.scheduler=o?()=>o(H,!1):H,_=W=>S0(W,!1,f),m=f.onStop=()=>{const W=hl.get(f);if(W){if(c)c(W,4);else for(const ue of W)ue();hl.delete(f)}},e?s?H(!0):B=f.run():o?o(H.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function hs(t,e=1/0,n){if(e<=0||!Ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ot(t))hs(t.value,e,n);else if(ce(t))for(let s=0;s<t.length;s++)hs(t[s],e,n);else if(V_(t)||si(t))t.forEach(s=>{hs(s,e,n)});else if($_(t)){for(const s in t)hs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&hs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zo(t,e,n,s){try{return s?t(...s):t()}catch(r){ac(r,e,n)}}function zn(t,e,n,s){if(fe(t)){const r=Zo(t,e,n,s);return r&&F_(r)&&r.catch(i=>{ac(i,e,n)}),r}if(ce(t)){const r=[];for(let i=0;i<t.length;i++)r.push(zn(t[i],e,n,s));return r}}function ac(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){er(),Zo(i,null,10,[t,c,u]),tr();return}}A0(t,n,r,s,o)}function A0(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Wt=[];let $n=-1;const ri=[];let xs=null,zr=0;const hy=Promise.resolve();let fl=null;function fy(t){const e=fl||hy;return t?e.then(this?t.bind(this):t):e}function R0(t){let e=$n+1,n=Wt.length;for(;e<n;){const s=e+n>>>1,r=Wt[s],i=Do(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function hf(t){if(!(t.flags&1)){const e=Do(t),n=Wt[Wt.length-1];!n||!(t.flags&2)&&e>=Do(n)?Wt.push(t):Wt.splice(R0(e),0,t),t.flags|=1,dy()}}function dy(){fl||(fl=hy.then(my))}function C0(t){ce(t)?ri.push(...t):xs&&t.id===-1?xs.splice(zr+1,0,t):t.flags&1||(ri.push(t),t.flags|=1),dy()}function Mp(t,e,n=$n+1){for(;n<Wt.length;n++){const s=Wt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Wt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function py(t){if(ri.length){const e=[...new Set(ri)].sort((n,s)=>Do(n)-Do(s));if(ri.length=0,xs){xs.push(...e);return}for(xs=e,zr=0;zr<xs.length;zr++){const n=xs[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xs=null,zr=0}}const Do=t=>t.id==null?t.flags&2?-1:1/0:t.id;function my(t){try{for($n=0;$n<Wt.length;$n++){const e=Wt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Wt.length;$n++){const e=Wt[$n];e&&(e.flags&=-2)}$n=-1,Wt.length=0,py(),fl=null,(Wt.length||ri.length)&&my()}}let un=null,gy=null;function dl(t){const e=un;return un=t,gy=t&&t.type.__scopeId||null,e}function P0(t,e=un,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Hp(-1);const i=dl(e);let o;try{o=t(...r)}finally{dl(i),s._d&&Hp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function uu(t,e){if(un===null)return t;const n=hc(un),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=$e]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&hs(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ar(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(er(),zn(c,n,8,[t.el,l,t,e]),tr())}}const k0=Symbol("_vte"),N0=t=>t.__isTeleport;function ff(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ff(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ea(t,e){return fe(t)?xt({name:t.name},e,{setup:t}):t}function _y(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pl(t,e,n,s,r=!1){if(ce(t)){t.forEach((R,N)=>pl(R,e&&(ce(e)?e[N]:e),n,s,r));return}if(fo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pl(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?hc(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===$e?l.refs={}:l.refs,d=l.setupState,m=Me(d),_=d===$e?()=>!1:R=>xe(m,R);if(u!=null&&u!==c&&(at(u)?(f[u]=null,_(u)&&(d[u]=null)):Ot(u)&&(u.value=null)),fe(c))Zo(c,l,12,[o,f]);else{const R=at(c),N=Ot(c);if(R||N){const D=()=>{if(t.f){const j=R?_(c)?d[c]:f[c]:c.value;r?ce(j)&&Jh(j,i):ce(j)?j.includes(i)||j.push(i):R?(f[c]=[i],_(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=o,_(c)&&(d[c]=o)):N&&(c.value=o,t.k&&(f[t.k]=o))};o?(D.id=-1,Jt(D,n)):D()}}}ic().requestIdleCallback;ic().cancelIdleCallback;const fo=t=>!!t.type.__asyncLoader,yy=t=>t.type.__isKeepAlive;function D0(t,e){vy(t,"a",e)}function O0(t,e){vy(t,"da",e)}function vy(t,e,n=Bt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(lc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)yy(r.parent.vnode)&&M0(s,e,n,r),r=r.parent}}function M0(t,e,n,s){const r=lc(e,t,s,!0);wy(()=>{Jh(s[e],r)},n)}function lc(t,e,n=Bt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const l=ta(n),c=zn(e,n,t,o);return l(),tr(),c});return s?r.unshift(i):r.push(i),i}}const Ss=t=>(e,n=Bt)=>{(!xo||t==="sp")&&lc(t,(...s)=>e(...s),n)},x0=Ss("bm"),L0=Ss("m"),V0=Ss("bu"),F0=Ss("u"),U0=Ss("bum"),wy=Ss("um"),$0=Ss("sp"),W0=Ss("rtg"),B0=Ss("rtc");function H0(t,e=Bt){lc("ec",t,e)}const j0=Symbol.for("v-ndc"),Ju=t=>t?By(t)?hc(t):Ju(t.parent):null,po=xt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ju(t.parent),$root:t=>Ju(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ey(t),$forceUpdate:t=>t.f||(t.f=()=>{hf(t.update)}),$nextTick:t=>t.n||(t.n=fy.bind(t.proxy)),$watch:t=>hS.bind(t)}),hu=(t,e)=>t!==$e&&!t.__isScriptSetup&&xe(t,e),Y0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(hu(s,e))return o[e]=1,s[e];if(r!==$e&&xe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==$e&&xe(n,e))return o[e]=4,n[e];Zu&&(o[e]=0)}}const f=po[e];let d,m;if(f)return e==="$attrs"&&Ct(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==$e&&xe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,xe(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return hu(r,e)?(r[e]=n,!0):s!==$e&&xe(s,e)?(s[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==$e&&xe(t,o)||hu(e,o)||(l=i[0])&&xe(l,o)||xe(s,o)||xe(po,o)||xe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xp(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zu=!0;function G0(t){const e=Ey(t),n=t.proxy,s=t.ctx;Zu=!1,e.beforeCreate&&Lp(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:_,updated:R,activated:N,deactivated:D,beforeDestroy:j,beforeUnmount:B,destroyed:H,unmounted:W,render:ue,renderTracked:pe,renderTriggered:I,errorCaptured:y,serverPrefetch:E,expose:S,inheritAttrs:b,components:C,directives:T,filters:Lt}=e;if(u&&z0(u,s,null),o)for(const Te in o){const ye=o[Te];fe(ye)&&(s[Te]=ye.bind(n))}if(r){const Te=r.call(n,n);Ze(Te)&&(t.data=oc(Te))}if(Zu=!0,i)for(const Te in i){const ye=i[Te],Qt=fe(ye)?ye.bind(n,n):fe(ye.get)?ye.get.bind(n,n):Gn,_n=!fe(ye)&&fe(ye.set)?ye.set.bind(n):Gn,on=wn({get:Qt,set:_n});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>on.value,set:Xe=>on.value=Xe})}if(l)for(const Te in l)Ty(l[Te],s,n,Te);if(c){const Te=fe(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(ye=>{Xa(ye,Te[ye])})}f&&Lp(f,t,"c");function rt(Te,ye){ce(ye)?ye.forEach(Qt=>Te(Qt.bind(n))):ye&&Te(ye.bind(n))}if(rt(x0,d),rt(L0,m),rt(V0,_),rt(F0,R),rt(D0,N),rt(O0,D),rt(H0,y),rt(B0,pe),rt(W0,I),rt(U0,B),rt(wy,W),rt($0,E),ce(S))if(S.length){const Te=t.exposed||(t.exposed={});S.forEach(ye=>{Object.defineProperty(Te,ye,{get:()=>n[ye],set:Qt=>n[ye]=Qt})})}else t.exposed||(t.exposed={});ue&&t.render===Gn&&(t.render=ue),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),T&&(t.directives=T),E&&_y(t)}function z0(t,e,n=Gn){ce(t)&&(t=eh(t));for(const s in t){const r=t[s];let i;Ze(r)?"default"in r?i=gs(r.from||s,r.default,!0):i=gs(r.from||s):i=gs(r),Ot(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Lp(t,e,n){zn(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ty(t,e,n,s){let r=s.includes(".")?Ly(n,s):()=>n[s];if(at(t)){const i=e[t];fe(i)&&Ja(r,i)}else if(fe(t))Ja(r,t.bind(n));else if(Ze(t))if(ce(t))t.forEach(i=>Ty(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Ja(r,i,t)}}function Ey(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>ml(c,u,o,!0)),ml(c,e,o)),Ze(e)&&i.set(e,c),c}function ml(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ml(t,i,n,!0),r&&r.forEach(o=>ml(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=q0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const q0={data:Vp,props:Fp,emits:Fp,methods:io,computed:io,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:io,directives:io,watch:Q0,provide:Vp,inject:K0};function Vp(t,e){return e?t?function(){return xt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function K0(t,e){return io(eh(t),eh(e))}function eh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ft(t,e){return t?[...new Set([].concat(t,e))]:e}function io(t,e){return t?xt(Object.create(null),t,e):e}function Fp(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:xt(Object.create(null),xp(t),xp(e??{})):e}function Q0(t,e){if(!t)return e;if(!e)return t;const n=xt(Object.create(null),t);for(const s in e)n[s]=Ft(t[s],e[s]);return n}function Iy(){return{app:null,config:{isNativeTag:WI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X0=0;function J0(t,e){return function(s,r=null){fe(s)||(s=xt({},s)),r!=null&&!Ze(r)&&(r=null);const i=Iy(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:X0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:OS,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...d)):fe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const _=u._ceVNode||hn(s,r);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),c=!0,u._container=f,f.__vue_app__=u,hc(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(zn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=ii;ii=u;try{return f()}finally{ii=d}}};return u}}let ii=null;function Xa(t,e){if(Bt){let n=Bt.provides;const s=Bt.parent&&Bt.parent.provides;s===n&&(n=Bt.provides=Object.create(s)),n[t]=e}}function gs(t,e,n=!1){const s=Bt||un;if(s||ii){const r=ii?ii._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}const Sy={},by=()=>Object.create(Sy),Ay=t=>Object.getPrototypeOf(t)===Sy;function Z0(t,e,n,s=!1){const r={},i=by();t.propsDefaults=Object.create(null),Ry(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ay(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function eS(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Me(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(cc(t.emitsOptions,m))continue;const _=e[m];if(c)if(xe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=zs(m);r[R]=th(c,l,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Ry(t,e,r,i)&&(u=!0);let f;for(const d in l)(!e||!xe(e,d)&&((f=Mr(d))===d||!xe(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=th(c,l,d,void 0,t,!0)):delete r[d]);if(i!==l)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&us(t.attrs,"set","")}function Ry(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(lo(c))continue;const u=e[c];let f;r&&xe(r,f=zs(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:cc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Me(n),u=l||$e;for(let f=0;f<i.length;f++){const d=i[f];n[d]=th(r,c,d,u[d],t,!xe(u,d))}}return o}function th(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=xe(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const f=ta(r);s=u[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Mr(n))&&(s=!0))}return s}const tS=new WeakMap;function Cy(t,e,n=!1){const s=n?tS:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const f=d=>{c=!0;const[m,_]=Cy(d,e,!0);xt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ze(t)&&s.set(t,ni),ni;if(ce(i))for(let f=0;f<i.length;f++){const d=zs(i[f]);Up(d)&&(o[d]=$e)}else if(i)for(const f in i){const d=zs(f);if(Up(d)){const m=i[f],_=o[d]=ce(m)||fe(m)?{type:m}:xt({},m),R=_.type;let N=!1,D=!0;if(ce(R))for(let j=0;j<R.length;++j){const B=R[j],H=fe(B)&&B.name;if(H==="Boolean"){N=!0;break}else H==="String"&&(D=!1)}else N=fe(R)&&R.name==="Boolean";_[0]=N,_[1]=D,(N||xe(_,"default"))&&l.push(d)}}const u=[o,l];return Ze(t)&&s.set(t,u),u}function Up(t){return t[0]!=="$"&&!lo(t)}const Py=t=>t[0]==="_"||t==="$stable",df=t=>ce(t)?t.map(Bn):[Bn(t)],nS=(t,e,n)=>{if(e._n)return e;const s=P0((...r)=>df(e(...r)),n);return s._c=!1,s},ky=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Py(r))continue;const i=t[r];if(fe(i))e[r]=nS(r,i,s);else if(i!=null){const o=df(i);e[r]=()=>o}}},Ny=(t,e)=>{const n=df(e);t.slots.default=()=>n},Dy=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},sS=(t,e,n)=>{const s=t.slots=by();if(t.vnode.shapeFlag&32){const r=e._;r?(Dy(s,e,n),n&&B_(s,"_",r,!0)):ky(e,s)}else e&&Ny(t,e)},rS=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=$e;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Dy(r,e,n):(i=!e.$stable,ky(e,r)),o=e}else e&&(Ny(t,e),o={default:1});if(i)for(const l in r)!Py(l)&&o[l]==null&&delete r[l]},Jt=yS;function iS(t){return oS(t)}function oS(t,e){const n=ic();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:_=Gn,insertStaticContent:R}=t,N=(v,w,A,M=null,L=null,x=null,q=void 0,G=null,Y=!!w.dynamicChildren)=>{if(v===w)return;v&&!Qi(v,w)&&(M=O(v),Xe(v,L,x,!0),v=null),w.patchFlag===-2&&(Y=!1,w.dynamicChildren=null);const{type:F,ref:ie,shapeFlag:X}=w;switch(F){case uc:D(v,w,A,M);break;case Oo:j(v,w,A,M);break;case du:v==null&&B(w,A,M,q);break;case cs:C(v,w,A,M,L,x,q,G,Y);break;default:X&1?ue(v,w,A,M,L,x,q,G,Y):X&6?T(v,w,A,M,L,x,q,G,Y):(X&64||X&128)&&F.process(v,w,A,M,L,x,q,G,Y,te)}ie!=null&&L&&pl(ie,v&&v.ref,x,w||v,!w)},D=(v,w,A,M)=>{if(v==null)s(w.el=l(w.children),A,M);else{const L=w.el=v.el;w.children!==v.children&&u(L,w.children)}},j=(v,w,A,M)=>{v==null?s(w.el=c(w.children||""),A,M):w.el=v.el},B=(v,w,A,M)=>{[v.el,v.anchor]=R(v.children,w,A,M,v.el,v.anchor)},H=({el:v,anchor:w},A,M)=>{let L;for(;v&&v!==w;)L=m(v),s(v,A,M),v=L;s(w,A,M)},W=({el:v,anchor:w})=>{let A;for(;v&&v!==w;)A=m(v),r(v),v=A;r(w)},ue=(v,w,A,M,L,x,q,G,Y)=>{w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),v==null?pe(w,A,M,L,x,q,G,Y):E(v,w,L,x,q,G,Y)},pe=(v,w,A,M,L,x,q,G)=>{let Y,F;const{props:ie,shapeFlag:X,transition:se,dirs:ae}=v;if(Y=v.el=o(v.type,x,ie&&ie.is,ie),X&8?f(Y,v.children):X&16&&y(v.children,Y,null,M,L,fu(v,x),q,G),ae&&ar(v,null,M,"created"),I(Y,v,v.scopeId,q,M),ie){for(const he in ie)he!=="value"&&!lo(he)&&i(Y,he,null,ie[he],x,M);"value"in ie&&i(Y,"value",null,ie.value,x),(F=ie.onVnodeBeforeMount)&&Un(F,M,v)}ae&&ar(v,null,M,"beforeMount");const oe=aS(L,se);oe&&se.beforeEnter(Y),s(Y,w,A),((F=ie&&ie.onVnodeMounted)||oe||ae)&&Jt(()=>{F&&Un(F,M,v),oe&&se.enter(Y),ae&&ar(v,null,M,"mounted")},L)},I=(v,w,A,M,L)=>{if(A&&_(v,A),M)for(let x=0;x<M.length;x++)_(v,M[x]);if(L){let x=L.subTree;if(w===x||Fy(x.type)&&(x.ssContent===w||x.ssFallback===w)){const q=L.vnode;I(v,q,q.scopeId,q.slotScopeIds,L.parent)}}},y=(v,w,A,M,L,x,q,G,Y=0)=>{for(let F=Y;F<v.length;F++){const ie=v[F]=G?Ls(v[F]):Bn(v[F]);N(null,ie,w,A,M,L,x,q,G)}},E=(v,w,A,M,L,x,q)=>{const G=w.el=v.el;let{patchFlag:Y,dynamicChildren:F,dirs:ie}=w;Y|=v.patchFlag&16;const X=v.props||$e,se=w.props||$e;let ae;if(A&&lr(A,!1),(ae=se.onVnodeBeforeUpdate)&&Un(ae,A,w,v),ie&&ar(w,v,A,"beforeUpdate"),A&&lr(A,!0),(X.innerHTML&&se.innerHTML==null||X.textContent&&se.textContent==null)&&f(G,""),F?S(v.dynamicChildren,F,G,A,M,fu(w,L),x):q||ye(v,w,G,null,A,M,fu(w,L),x,!1),Y>0){if(Y&16)b(G,X,se,A,L);else if(Y&2&&X.class!==se.class&&i(G,"class",null,se.class,L),Y&4&&i(G,"style",X.style,se.style,L),Y&8){const oe=w.dynamicProps;for(let he=0;he<oe.length;he++){const Ee=oe[he],Et=X[Ee],pt=se[Ee];(pt!==Et||Ee==="value")&&i(G,Ee,Et,pt,L,A)}}Y&1&&v.children!==w.children&&f(G,w.children)}else!q&&F==null&&b(G,X,se,A,L);((ae=se.onVnodeUpdated)||ie)&&Jt(()=>{ae&&Un(ae,A,w,v),ie&&ar(w,v,A,"updated")},M)},S=(v,w,A,M,L,x,q)=>{for(let G=0;G<w.length;G++){const Y=v[G],F=w[G],ie=Y.el&&(Y.type===cs||!Qi(Y,F)||Y.shapeFlag&70)?d(Y.el):A;N(Y,F,ie,null,M,L,x,q,!0)}},b=(v,w,A,M,L)=>{if(w!==A){if(w!==$e)for(const x in w)!lo(x)&&!(x in A)&&i(v,x,w[x],null,L,M);for(const x in A){if(lo(x))continue;const q=A[x],G=w[x];q!==G&&x!=="value"&&i(v,x,G,q,L,M)}"value"in A&&i(v,"value",w.value,A.value,L)}},C=(v,w,A,M,L,x,q,G,Y)=>{const F=w.el=v?v.el:l(""),ie=w.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:ae}=w;ae&&(G=G?G.concat(ae):ae),v==null?(s(F,A,M),s(ie,A,M),y(w.children||[],A,ie,L,x,q,G,Y)):X>0&&X&64&&se&&v.dynamicChildren?(S(v.dynamicChildren,se,A,L,x,q,G),(w.key!=null||L&&w===L.subTree)&&Oy(v,w,!0)):ye(v,w,A,ie,L,x,q,G,Y)},T=(v,w,A,M,L,x,q,G,Y)=>{w.slotScopeIds=G,v==null?w.shapeFlag&512?L.ctx.activate(w,A,M,q,Y):Lt(w,A,M,L,x,q,Y):rn(v,w,Y)},Lt=(v,w,A,M,L,x,q)=>{const G=v.component=RS(v,M,L);if(yy(v)&&(G.ctx.renderer=te),CS(G,!1,q),G.asyncDep){if(L&&L.registerDep(G,rt,q),!v.el){const Y=G.subTree=hn(Oo);j(null,Y,w,A)}}else rt(G,v,w,A,L,x,q)},rn=(v,w,A)=>{const M=w.component=v.component;if(gS(v,w,A))if(M.asyncDep&&!M.asyncResolved){Te(M,w,A);return}else M.next=w,M.update();else w.el=v.el,M.vnode=w},rt=(v,w,A,M,L,x,q)=>{const G=()=>{if(v.isMounted){let{next:X,bu:se,u:ae,parent:oe,vnode:he}=v;{const It=My(v);if(It){X&&(X.el=he.el,Te(v,X,q)),It.asyncDep.then(()=>{v.isUnmounted||G()});return}}let Ee=X,Et;lr(v,!1),X?(X.el=he.el,Te(v,X,q)):X=he,se&&Ka(se),(Et=X.props&&X.props.onVnodeBeforeUpdate)&&Un(Et,oe,X,he),lr(v,!0);const pt=Wp(v),an=v.subTree;v.subTree=pt,N(an,pt,d(an.el),O(an),v,L,x),X.el=pt.el,Ee===null&&_S(v,pt.el),ae&&Jt(ae,L),(Et=X.props&&X.props.onVnodeUpdated)&&Jt(()=>Un(Et,oe,X,he),L)}else{let X;const{el:se,props:ae}=w,{bm:oe,m:he,parent:Ee,root:Et,type:pt}=v,an=fo(w);lr(v,!1),oe&&Ka(oe),!an&&(X=ae&&ae.onVnodeBeforeMount)&&Un(X,Ee,w),lr(v,!0);{Et.ce&&Et.ce._injectChildStyle(pt);const It=v.subTree=Wp(v);N(null,It,A,M,v,L,x),w.el=It.el}if(he&&Jt(he,L),!an&&(X=ae&&ae.onVnodeMounted)){const It=w;Jt(()=>Un(X,Ee,It),L)}(w.shapeFlag&256||Ee&&fo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&Jt(v.a,L),v.isMounted=!0,w=A=M=null}};v.scope.on();const Y=v.effect=new z_(G);v.scope.off();const F=v.update=Y.run.bind(Y),ie=v.job=Y.runIfDirty.bind(Y);ie.i=v,ie.id=v.uid,Y.scheduler=()=>hf(ie),lr(v,!0),F()},Te=(v,w,A)=>{w.component=v;const M=v.vnode.props;v.vnode=w,v.next=null,eS(v,w.props,M,A),rS(v,w.children,A),er(),Mp(v),tr()},ye=(v,w,A,M,L,x,q,G,Y=!1)=>{const F=v&&v.children,ie=v?v.shapeFlag:0,X=w.children,{patchFlag:se,shapeFlag:ae}=w;if(se>0){if(se&128){_n(F,X,A,M,L,x,q,G,Y);return}else if(se&256){Qt(F,X,A,M,L,x,q,G,Y);return}}ae&8?(ie&16&&jt(F,L,x),X!==F&&f(A,X)):ie&16?ae&16?_n(F,X,A,M,L,x,q,G,Y):jt(F,L,x,!0):(ie&8&&f(A,""),ae&16&&y(X,A,M,L,x,q,G,Y))},Qt=(v,w,A,M,L,x,q,G,Y)=>{v=v||ni,w=w||ni;const F=v.length,ie=w.length,X=Math.min(F,ie);let se;for(se=0;se<X;se++){const ae=w[se]=Y?Ls(w[se]):Bn(w[se]);N(v[se],ae,A,null,L,x,q,G,Y)}F>ie?jt(v,L,x,!0,!1,X):y(w,A,M,L,x,q,G,Y,X)},_n=(v,w,A,M,L,x,q,G,Y)=>{let F=0;const ie=w.length;let X=v.length-1,se=ie-1;for(;F<=X&&F<=se;){const ae=v[F],oe=w[F]=Y?Ls(w[F]):Bn(w[F]);if(Qi(ae,oe))N(ae,oe,A,null,L,x,q,G,Y);else break;F++}for(;F<=X&&F<=se;){const ae=v[X],oe=w[se]=Y?Ls(w[se]):Bn(w[se]);if(Qi(ae,oe))N(ae,oe,A,null,L,x,q,G,Y);else break;X--,se--}if(F>X){if(F<=se){const ae=se+1,oe=ae<ie?w[ae].el:M;for(;F<=se;)N(null,w[F]=Y?Ls(w[F]):Bn(w[F]),A,oe,L,x,q,G,Y),F++}}else if(F>se)for(;F<=X;)Xe(v[F],L,x,!0),F++;else{const ae=F,oe=F,he=new Map;for(F=oe;F<=se;F++){const mt=w[F]=Y?Ls(w[F]):Bn(w[F]);mt.key!=null&&he.set(mt.key,F)}let Ee,Et=0;const pt=se-oe+1;let an=!1,It=0;const Ps=new Array(pt);for(F=0;F<pt;F++)Ps[F]=0;for(F=ae;F<=X;F++){const mt=v[F];if(Et>=pt){Xe(mt,L,x,!0);continue}let ln;if(mt.key!=null)ln=he.get(mt.key);else for(Ee=oe;Ee<=se;Ee++)if(Ps[Ee-oe]===0&&Qi(mt,w[Ee])){ln=Ee;break}ln===void 0?Xe(mt,L,x,!0):(Ps[ln-oe]=F+1,ln>=It?It=ln:an=!0,N(mt,w[ln],A,null,L,x,q,G,Y),Et++)}const Li=an?lS(Ps):ni;for(Ee=Li.length-1,F=pt-1;F>=0;F--){const mt=oe+F,ln=w[mt],ya=mt+1<ie?w[mt+1].el:M;Ps[F]===0?N(null,ln,A,ya,L,x,q,G,Y):an&&(Ee<0||F!==Li[Ee]?on(ln,A,ya,2):Ee--)}}},on=(v,w,A,M,L=null)=>{const{el:x,type:q,transition:G,children:Y,shapeFlag:F}=v;if(F&6){on(v.component.subTree,w,A,M);return}if(F&128){v.suspense.move(w,A,M);return}if(F&64){q.move(v,w,A,te);return}if(q===cs){s(x,w,A);for(let X=0;X<Y.length;X++)on(Y[X],w,A,M);s(v.anchor,w,A);return}if(q===du){H(v,w,A);return}if(M!==2&&F&1&&G)if(M===0)G.beforeEnter(x),s(x,w,A),Jt(()=>G.enter(x),L);else{const{leave:X,delayLeave:se,afterLeave:ae}=G,oe=()=>s(x,w,A),he=()=>{X(x,()=>{oe(),ae&&ae()})};se?se(x,oe,he):he()}else s(x,w,A)},Xe=(v,w,A,M=!1,L=!1)=>{const{type:x,props:q,ref:G,children:Y,dynamicChildren:F,shapeFlag:ie,patchFlag:X,dirs:se,cacheIndex:ae}=v;if(X===-2&&(L=!1),G!=null&&pl(G,null,A,v,!0),ae!=null&&(w.renderCache[ae]=void 0),ie&256){w.ctx.deactivate(v);return}const oe=ie&1&&se,he=!fo(v);let Ee;if(he&&(Ee=q&&q.onVnodeBeforeUnmount)&&Un(Ee,w,v),ie&6)Fn(v.component,A,M);else{if(ie&128){v.suspense.unmount(A,M);return}oe&&ar(v,null,w,"beforeUnmount"),ie&64?v.type.remove(v,w,A,te,M):F&&!F.hasOnce&&(x!==cs||X>0&&X&64)?jt(F,w,A,!1,!0):(x===cs&&X&384||!L&&ie&16)&&jt(Y,w,A),M&&Je(v)}(he&&(Ee=q&&q.onVnodeUnmounted)||oe)&&Jt(()=>{Ee&&Un(Ee,w,v),oe&&ar(v,null,w,"unmounted")},A)},Je=v=>{const{type:w,el:A,anchor:M,transition:L}=v;if(w===cs){Cs(A,M);return}if(w===du){W(v);return}const x=()=>{r(A),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:q,delayLeave:G}=L,Y=()=>q(A,x);G?G(v.el,x,Y):Y()}else x()},Cs=(v,w)=>{let A;for(;v!==w;)A=m(v),r(v),v=A;r(w)},Fn=(v,w,A)=>{const{bum:M,scope:L,job:x,subTree:q,um:G,m:Y,a:F}=v;$p(Y),$p(F),M&&Ka(M),L.stop(),x&&(x.flags|=8,Xe(q,v,w,A)),G&&Jt(G,w),Jt(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},jt=(v,w,A,M=!1,L=!1,x=0)=>{for(let q=x;q<v.length;q++)Xe(v[q],w,A,M,L)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),A=w&&w[k0];return A?m(A):w};let Z=!1;const Q=(v,w,A)=>{v==null?w._vnode&&Xe(w._vnode,null,null,!0):N(w._vnode||null,v,w,null,null,null,A),w._vnode=v,Z||(Z=!0,Mp(),py(),Z=!1)},te={p:N,um:Xe,m:on,r:Je,mt:Lt,mc:y,pc:ye,pbc:S,n:O,o:t};return{render:Q,hydrate:void 0,createApp:J0(Q)}}function fu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function aS(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oy(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ls(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Oy(o,l)),l.type===uc&&(l.el=o.el)}}function lS(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function My(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:My(e)}function $p(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const cS=Symbol.for("v-scx"),uS=()=>gs(cS);function Ja(t,e,n){return xy(t,e,n)}function xy(t,e,n=$e){const{immediate:s,deep:r,flush:i,once:o}=n,l=xt({},n),c=e&&s||!e&&i!=="post";let u;if(xo){if(i==="sync"){const _=uS();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Gn,_.resume=Gn,_.pause=Gn,_}}const f=Bt;l.call=(_,R,N)=>zn(_,f,R,N);let d=!1;i==="post"?l.scheduler=_=>{Jt(_,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(_,R)=>{R?_():hf(_)}),l.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=b0(t,e,l);return xo&&(u?u.push(m):c&&m()),m}function hS(t,e,n){const s=this.proxy,r=at(t)?t.includes(".")?Ly(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=ta(this),l=xy(r,i.bind(s),n);return o(),l}function Ly(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const fS=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zs(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function dS(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||$e;let r=n;const i=e.startsWith("update:"),o=i&&fS(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>at(f)?f.trim():f)),o.number&&(r=n.map(Gu)));let l,c=s[l=iu(e)]||s[l=iu(zs(e))];!c&&i&&(c=s[l=iu(Mr(e))]),c&&zn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,zn(u,t,6,r)}}function Vy(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=u=>{const f=Vy(u,e,!0);f&&(l=!0,xt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ze(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):xt(o,i),Ze(t)&&s.set(t,o),o)}function cc(t,e){return!t||!nc(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Mr(e))||xe(t,e))}function Wp(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:_,ctx:R,inheritAttrs:N}=t,D=dl(t);let j,B;try{if(n.shapeFlag&4){const W=r||s,ue=W;j=Bn(u.call(ue,W,f,d,_,m,R)),B=l}else{const W=e;j=Bn(W.length>1?W(d,{attrs:l,slots:o,emit:c}):W(d,null)),B=e.props?l:pS(l)}}catch(W){mo.length=0,ac(W,t,1),j=hn(Oo)}let H=j;if(B&&N!==!1){const W=Object.keys(B),{shapeFlag:ue}=H;W.length&&ue&7&&(i&&W.some(Xh)&&(B=mS(B,i)),H=pi(H,B,!1,!0))}return n.dirs&&(H=pi(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&ff(H,n.transition),j=H,dl(D),j}const pS=t=>{let e;for(const n in t)(n==="class"||n==="style"||nc(n))&&((e||(e={}))[n]=t[n]);return e},mS=(t,e)=>{const n={};for(const s in t)(!Xh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gS(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Bp(s,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==s[m]&&!cc(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Bp(s,o,u):!0:!!o;return!1}function Bp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!cc(n,i))return!0}return!1}function _S({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fy=t=>t.__isSuspense;function yS(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):C0(t)}const cs=Symbol.for("v-fgt"),uc=Symbol.for("v-txt"),Oo=Symbol.for("v-cmt"),du=Symbol.for("v-stc"),mo=[];let en=null;function pf(t=!1){mo.push(en=t?null:[])}function vS(){mo.pop(),en=mo[mo.length-1]||null}let Mo=1;function Hp(t,e=!1){Mo+=t,t<0&&en&&e&&(en.hasOnce=!0)}function Uy(t){return t.dynamicChildren=Mo>0?en||ni:null,vS(),Mo>0&&en&&en.push(t),t}function wS(t,e,n,s,r,i){return Uy(Ut(t,e,n,s,r,i,!0))}function $y(t,e,n,s,r){return Uy(hn(t,e,n,s,r,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Qi(t,e){return t.type===e.type&&t.key===e.key}const Wy=({key:t})=>t??null,Za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||Ot(t)||fe(t)?{i:un,r:t,k:e,f:!!n}:t:null);function Ut(t,e=null,n=null,s=0,r=null,i=t===cs?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wy(e),ref:e&&Za(e),scopeId:gy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return l?(mf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=at(n)?8:16),Mo>0&&!o&&en&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&en.push(c),c}const hn=TS;function TS(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===j0)&&(t=Oo),gl(t)){const l=pi(t,e,!0);return n&&mf(l,n),Mo>0&&!i&&en&&(l.shapeFlag&6?en[en.indexOf(t)]=l:en.push(l)),l.patchFlag=-2,l}if(DS(t)&&(t=t.__vccOpts),e){e=ES(e);let{class:l,style:c}=e;l&&!at(l)&&(e.class=tf(l)),Ze(c)&&(uf(c)&&!ce(c)&&(c=xt({},c)),e.style=ef(c))}const o=at(t)?1:Fy(t)?128:N0(t)?64:Ze(t)?4:fe(t)?2:0;return Ut(t,e,n,s,r,o,i,!0)}function ES(t){return t?uf(t)||Ay(t)?xt({},t):t:null}function pi(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?SS(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Wy(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Za(e)):[i,Za(e)]:Za(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==cs?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pi(t.ssContent),ssFallback:t.ssFallback&&pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&ff(f,c.clone(f)),f}function IS(t=" ",e=0){return hn(uc,null,t,e)}function Bn(t){return t==null||typeof t=="boolean"?hn(Oo):ce(t)?hn(cs,null,t.slice()):gl(t)?Ls(t):hn(uc,null,String(t))}function Ls(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pi(t)}function mf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ay(e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:un},n=32):(e=String(e),s&64?(n=16,e=[IS(e)]):n=8);t.children=e,t.shapeFlag|=n}function SS(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=tf([e.class,s.class]));else if(r==="style")e.style=ef([e.style,s.style]);else if(nc(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Un(t,e,n,s=null){zn(t,e,7,[n,s])}const bS=Iy();let AS=0;function RS(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||bS,i={uid:AS++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new JI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cy(s,r),emitsOptions:Vy(s,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dS.bind(null,i),t.ce&&t.ce(i),i}let Bt=null,_l,nh;{const t=ic(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};_l=e("__VUE_INSTANCE_SETTERS__",n=>Bt=n),nh=e("__VUE_SSR_SETTERS__",n=>xo=n)}const ta=t=>{const e=Bt;return _l(t),t.scope.on(),()=>{t.scope.off(),_l(e)}},jp=()=>{Bt&&Bt.scope.off(),_l(null)};function By(t){return t.vnode.shapeFlag&4}let xo=!1;function CS(t,e=!1,n=!1){e&&nh(e);const{props:s,children:r}=t.vnode,i=By(t);Z0(t,s,i,e),sS(t,r,n);const o=i?PS(t,e):void 0;return e&&nh(!1),o}function PS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y0);const{setup:s}=n;if(s){er();const r=t.setupContext=s.length>1?NS(t):null,i=ta(t),o=Zo(s,t,0,[t.props,r]),l=F_(o);if(tr(),i(),(l||t.sp)&&!fo(t)&&_y(t),l){if(o.then(jp,jp),e)return o.then(c=>{Yp(t,c)}).catch(c=>{ac(c,t,0)});t.asyncDep=o}else Yp(t,o)}else Hy(t)}function Yp(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ze(e)&&(t.setupState=uy(e)),Hy(t)}function Hy(t,e,n){const s=t.type;t.render||(t.render=s.render||Gn);{const r=ta(t);er();try{G0(t)}finally{tr(),r()}}}const kS={get(t,e){return Ct(t,"get",""),t[e]}};function NS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kS),slots:t.slots,emit:t.emit,expose:e}}function hc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uy(y0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in po)return po[n](t)},has(e,n){return n in e||n in po}})):t.proxy}function DS(t){return fe(t)&&"__vccOpts"in t}const wn=(t,e)=>I0(t,e,xo);function jy(t,e,n){const s=arguments.length;return s===2?Ze(e)&&!ce(e)?gl(e)?hn(t,null,[e]):hn(t,e):hn(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gl(n)&&(n=[n]),hn(t,e,n))}const OS="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sh;const Gp=typeof window<"u"&&window.trustedTypes;if(Gp)try{sh=Gp.createPolicy("vue",{createHTML:t=>t})}catch{}const Yy=sh?t=>sh.createHTML(t):t=>t,MS="http://www.w3.org/2000/svg",xS="http://www.w3.org/1998/Math/MathML",as=typeof document<"u"?document:null,zp=as&&as.createElement("template"),LS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?as.createElementNS(MS,t):e==="mathml"?as.createElementNS(xS,t):n?as.createElement(t,{is:n}):as.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zp.innerHTML=Yy(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=zp.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},VS=Symbol("_vtc");function FS(t,e,n){const s=t[VS];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qp=Symbol("_vod"),US=Symbol("_vsh"),$S=Symbol(""),WS=/(^|;)\s*display\s*:/;function BS(t,e,n){const s=t.style,r=at(n);let i=!1;if(n&&!r){if(e)if(at(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&el(s,l,"")}else for(const o in e)n[o]==null&&el(s,o,"");for(const o in n)o==="display"&&(i=!0),el(s,o,n[o])}else if(r){if(e!==n){const o=s[$S];o&&(n+=";"+o),s.cssText=n,i=WS.test(n)}}else e&&t.removeAttribute("style");qp in t&&(t[qp]=i?s.display:"",t[US]&&(s.display="none"))}const Kp=/\s*!important$/;function el(t,e,n){if(ce(n))n.forEach(s=>el(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=HS(t,e);Kp.test(n)?t.setProperty(Mr(s),n.replace(Kp,""),"important"):t[s]=n}}const Qp=["Webkit","Moz","ms"],pu={};function HS(t,e){const n=pu[e];if(n)return n;let s=zs(e);if(s!=="filter"&&s in t)return pu[e]=s;s=W_(s);for(let r=0;r<Qp.length;r++){const i=Qp[r]+s;if(i in t)return pu[e]=i}return e}const Xp="http://www.w3.org/1999/xlink";function Jp(t,e,n,s,r,i=XI(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xp,e.slice(6,e.length)):t.setAttributeNS(Xp,e,n):n==null||i&&!H_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zs(n)?String(n):n)}function Zp(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=H_(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function qr(t,e,n,s){t.addEventListener(e,n,s)}function jS(t,e,n,s){t.removeEventListener(e,n,s)}const em=Symbol("_vei");function YS(t,e,n,s,r=null){const i=t[em]||(t[em]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=GS(e);if(s){const u=i[e]=KS(s,r);qr(t,l,u,c)}else o&&(jS(t,l,o,c),i[e]=void 0)}}const tm=/(?:Once|Passive|Capture)$/;function GS(t){let e;if(tm.test(t)){e={};let s;for(;s=t.match(tm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let mu=0;const zS=Promise.resolve(),qS=()=>mu||(zS.then(()=>mu=0),mu=Date.now());function KS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zn(QS(s,n.value),e,5,[s])};return n.value=t,n.attached=qS(),n}function QS(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const nm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,XS=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?FS(t,s,o):e==="style"?BS(t,n,s):nc(e)?Xh(e)||YS(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JS(t,e,s,o))?(Zp(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jp(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!at(s))?Zp(t,zs(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Jp(t,e,s,o))};function JS(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&nm(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return nm(e)&&at(n)?!1:e in t}const sm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Ka(e,n):e};function ZS(t){t.target.composing=!0}function rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gu=Symbol("_assign"),_u={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[gu]=sm(r);const i=s||r.props&&r.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Gu(l)),t[gu](l)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",ZS),qr(t,"compositionend",rm),qr(t,"change",rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[gu]=sm(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gu(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},eb=["ctrl","shift","alt","meta"],tb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eb.some(n=>t[`${n}Key`]&&!e.includes(n))},nb=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=tb[e[o]];if(l&&l(r,e))return}return t(r,...i)})},sb=xt({patchProp:XS},LS);let im;function rb(){return im||(im=iS(sb))}const ib=(...t)=>{const e=rb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ab(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,ob(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function ob(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ab(t){return at(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function Gy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gy(t.default)}const Oe=Object.assign;function yu(t,e){const n={};for(const s in e){const r=e[s];n[s]=kn(r)?r.map(t):t(r)}return n}const go=()=>{},kn=Array.isArray,zy=/#/g,cb=/&/g,ub=/\//g,hb=/=/g,fb=/\?/g,qy=/\+/g,db=/%5B/g,pb=/%5D/g,Ky=/%5E/g,mb=/%60/g,Qy=/%7B/g,gb=/%7C/g,Xy=/%7D/g,_b=/%20/g;function gf(t){return encodeURI(""+t).replace(gb,"|").replace(db,"[").replace(pb,"]")}function yb(t){return gf(t).replace(Qy,"{").replace(Xy,"}").replace(Ky,"^")}function rh(t){return gf(t).replace(qy,"%2B").replace(_b,"+").replace(zy,"%23").replace(cb,"%26").replace(mb,"`").replace(Qy,"{").replace(Xy,"}").replace(Ky,"^")}function vb(t){return rh(t).replace(hb,"%3D")}function wb(t){return gf(t).replace(zy,"%23").replace(fb,"%3F")}function Tb(t){return t==null?"":wb(t).replace(ub,"%2F")}function Lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Eb=/\/$/,Ib=t=>t.replace(Eb,"");function vu(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Rb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Lo(o)}}function Sb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&mi(e.matched[s],n.matched[r])&&Jy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ab(t[n],e[n]))return!1;return!0}function Ab(t,e){return kn(t)?am(t,e):kn(e)?am(e,t):t===e}function am(t,e){return kn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Os={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vo;(function(t){t.pop="pop",t.push="push"})(Vo||(Vo={}));var _o;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_o||(_o={}));function Cb(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ib(t)}const Pb=/^[^#]+#/;function kb(t,e){return t.replace(Pb,"#")+e}function Nb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fc=()=>({left:window.scrollX,top:window.scrollY});function Db(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Nb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lm(t,e){return(history.state?history.state.position-e:-1)+t}const ih=new Map;function Ob(t,e){ih.set(t,e)}function Mb(t){const e=ih.get(t);return ih.delete(t),e}let xb=()=>location.protocol+"//"+location.host;function Zy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),om(c,"")}return om(n,t)+s+r}function Lb(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const _=Zy(t,location),R=n.value,N=e.value;let D=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}D=N?m.position-N.position:0}else s(_);r.forEach(j=>{j(n.value,R,{delta:D,type:Vo.pop,direction:D?D>0?_o.forward:_o.back:_o.unknown})})};function c(){o=n.value}function u(m){r.push(m);const _=()=>{const R=r.indexOf(m);R>-1&&r.splice(R,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:fc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function cm(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fc():null}}function Vb(t){const{history:e,location:n}=window,s={value:Zy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:xb()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),r.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(c,u){const f=Oe({},e.state,cm(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,f,!0),s.value=c}function l(c,u){const f=Oe({},r.value,e.state,{forward:c,scroll:fc()});i(f.current,f,!0);const d=Oe({},cm(s.value,c,null),{position:f.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function Fb(t){t=Cb(t);const e=Vb(t),n=Lb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Oe({location:"",base:t,go:s,createHref:kb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ub(t){return typeof t=="string"||t&&typeof t=="object"}function ev(t){return typeof t=="string"||typeof t=="symbol"}const tv=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function gi(t,e){return Oe(new Error,{type:t,[tv]:!0},e)}function rs(t,e){return t instanceof Error&&tv in t&&(e==null||!!(t.type&e))}const hm="[^/]+?",$b={sensitive:!1,strict:!1,start:!0,end:!0},Wb=/[.+*?^${}()[\]/\\]/g;function Bb(t,e){const n=Oe({},$b,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const m=u[d];let _=40+(n.sensitive?.25:0);if(m.type===0)d||(r+="/"),r+=m.value.replace(Wb,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:N,optional:D,regexp:j}=m;i.push({name:R,repeatable:N,optional:D});const B=j||hm;if(B!==hm){_+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${R}" (${B}): `+W.message)}}let H=N?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;d||(H=D&&u.length<2?`(?:/${H})`:"/"+H),D&&(H+="?"),r+=H,_+=20,D&&(_+=-8),N&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",R=i[m-1];d[R.name]=_&&R.repeatable?_.split("/"):_}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:N,optional:D}=_,j=R in u?u[R]:"";if(kn(j)&&!N)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const B=kn(j)?j.join("/"):j;if(!B)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${R}"`);f+=B}}return f||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function Hb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nv(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Hb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(fm(s))return 1;if(fm(r))return-1}return r.length-s.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jb={type:0,value:""},Yb=/[a-zA-Z0-9_]/;function Gb(t){if(!t)return[[]];if(t==="/")return[[jb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:Yb.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function zb(t,e,n){const s=Bb(Gb(t.path),n),r=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qb(t,e){const n=[],s=new Map;e=gm({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,m,_){const R=!_,N=pm(d);N.aliasOf=_&&_.record;const D=gm(e,d),j=[N];if("alias"in d){const W=typeof d.alias=="string"?[d.alias]:d.alias;for(const ue of W)j.push(pm(Oe({},N,{components:_?_.record.components:N.components,path:ue,aliasOf:_?_.record:N})))}let B,H;for(const W of j){const{path:ue}=W;if(m&&ue[0]!=="/"){const pe=m.record.path,I=pe[pe.length-1]==="/"?"":"/";W.path=m.record.path+(ue&&I+ue)}if(B=zb(W,m,D),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),R&&d.name&&!mm(B)&&o(d.name)),sv(B)&&c(B),N.children){const pe=N.children;for(let I=0;I<pe.length;I++)i(pe[I],B,_&&_.children[I])}_=_||B}return H?()=>{o(H)}:go}function o(d){if(ev(d)){const m=s.get(d);m&&(s.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=Xb(d,n);n.splice(m,0,d),d.record.name&&!mm(d)&&s.set(d.record.name,d)}function u(d,m){let _,R={},N,D;if("name"in d&&d.name){if(_=s.get(d.name),!_)throw gi(1,{location:d});D=_.record.name,R=Oe(dm(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),d.params&&dm(d.params,_.keys.map(H=>H.name))),N=_.stringify(R)}else if(d.path!=null)N=d.path,_=n.find(H=>H.re.test(N)),_&&(R=_.parse(N),D=_.record.name);else{if(_=m.name?s.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw gi(1,{location:d,currentLocation:m});D=_.record.name,R=Oe({},m.params,d.params),N=_.stringify(R)}const j=[];let B=_;for(;B;)j.unshift(B.record),B=B.parent;return{name:D,path:N,params:R,matched:j,meta:Qb(j)}}t.forEach(d=>i(d));function f(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:r}}function dm(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function pm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function mm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qb(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function gm(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xb(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;nv(t,e[i])<0?s=i:n=i+1}const r=Jb(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function Jb(t){let e=t;for(;e=e.parent;)if(sv(e)&&nv(t,e)===0)return e}function sv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(qy," "),o=i.indexOf("="),l=Lo(o<0?i:i.slice(0,o)),c=o<0?null:Lo(i.slice(o+1));if(l in e){let u=e[l];kn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function _m(t){let e="";for(let n in t){const s=t[n];if(n=vb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kn(s)?s.map(i=>i&&rh(i)):[s&&rh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const tA=Symbol(""),ym=Symbol(""),_f=Symbol(""),rv=Symbol(""),oh=Symbol("");function Xi(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vs(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(gi(4,{from:n,to:e})):m instanceof Error?c(m):Ub(m)?c(gi(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function wu(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Gy(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Vs(f,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=lb(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const _=(d.__vccOpts||d)[e];return _&&Vs(_,n,s,o,l,r)()}))}}return i}function vm(t){const e=gs(_f),n=gs(rv),s=wn(()=>{const c=vr(t.to);return e.resolve(c)}),r=wn(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(mi.bind(null,f));if(m>-1)return m;const _=wm(c[u-2]);return u>1&&wm(f)===_&&d[d.length-1].path!==_?d.findIndex(mi.bind(null,c[u-2])):m}),i=wn(()=>r.value>-1&&oA(n.params,s.value.params)),o=wn(()=>r.value>-1&&r.value===n.matched.length-1&&Jy(n.params,s.value.params));function l(c={}){if(iA(c)){const u=e[vr(t.replace)?"replace":"push"](vr(t.to)).catch(go);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:wn(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function nA(t){return t.length===1?t[0]:t}const sA=ea({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vm,setup(t,{slots:e}){const n=oc(vm(t)),{options:s}=gs(_f),r=wn(()=>({[Tm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&nA(e.default(n));return t.custom?i:jy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),rA=sA;function iA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!kn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function wm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tm=(t,e,n)=>t??e??n,aA=ea({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=gs(oh),r=wn(()=>t.route||s.value),i=gs(ym,0),o=wn(()=>{let u=vr(i);const{matched:f}=r.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=wn(()=>r.value.matched[o.value]);Xa(ym,wn(()=>o.value+1)),Xa(tA,l),Xa(oh,r);const c=Qa();return Ja(()=>[c.value,l.value,t.name],([u,f,d],[m,_,R])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!mi(f,_)||!m)&&(f.enterCallbacks[d]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=r.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Em(n.default,{Component:m,route:u});const _=d.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,D=jy(m,Oe({},R,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Em(n.default,{Component:D,route:u})||D}}});function Em(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iv=aA;function lA(t){const e=qb(t.routes,t),n=t.parseQuery||Zb,s=t.stringifyQuery||_m,r=t.history,i=Xi(),o=Xi(),l=Xi(),c=v0(Os);let u=Os;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=yu.bind(null,O=>""+O),d=yu.bind(null,Tb),m=yu.bind(null,Lo);function _(O,Z){let Q,te;return ev(O)?(Q=e.getRecordMatcher(O),te=Z):te=O,e.addRoute(te,Q)}function R(O){const Z=e.getRecordMatcher(O);Z&&e.removeRoute(Z)}function N(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function j(O,Z){if(Z=Oe({},Z||c.value),typeof O=="string"){const A=vu(n,O,Z.path),M=e.resolve({path:A.path},Z),L=r.createHref(A.fullPath);return Oe(A,M,{params:m(M.params),hash:Lo(A.hash),redirectedFrom:void 0,href:L})}let Q;if(O.path!=null)Q=Oe({},O,{path:vu(n,O.path,Z.path).path});else{const A=Oe({},O.params);for(const M in A)A[M]==null&&delete A[M];Q=Oe({},O,{params:d(A)}),Z.params=d(Z.params)}const te=e.resolve(Q,Z),Ce=O.hash||"";te.params=f(m(te.params));const v=Sb(s,Oe({},O,{hash:yb(Ce),path:te.path})),w=r.createHref(v);return Oe({fullPath:v,hash:Ce,query:s===_m?eA(O.query):O.query||{}},te,{redirectedFrom:void 0,href:w})}function B(O){return typeof O=="string"?vu(n,O,c.value.path):Oe({},O)}function H(O,Z){if(u!==O)return gi(8,{from:Z,to:O})}function W(O){return I(O)}function ue(O){return W(Oe(B(O),{replace:!0}))}function pe(O){const Z=O.matched[O.matched.length-1];if(Z&&Z.redirect){const{redirect:Q}=Z;let te=typeof Q=="function"?Q(O):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=B(te):{path:te},te.params={}),Oe({query:O.query,hash:O.hash,params:te.path!=null?{}:O.params},te)}}function I(O,Z){const Q=u=j(O),te=c.value,Ce=O.state,v=O.force,w=O.replace===!0,A=pe(Q);if(A)return I(Oe(B(A),{state:typeof A=="object"?Oe({},Ce,A.state):Ce,force:v,replace:w}),Z||Q);const M=Q;M.redirectedFrom=Z;let L;return!v&&bb(s,te,Q)&&(L=gi(16,{to:M,from:te}),on(te,te,!0,!1)),(L?Promise.resolve(L):S(M,te)).catch(x=>rs(x)?rs(x,2)?x:_n(x):ye(x,M,te)).then(x=>{if(x){if(rs(x,2))return I(Oe({replace:w},B(x.to),{state:typeof x.to=="object"?Oe({},Ce,x.to.state):Ce,force:v}),Z||M)}else x=C(M,te,!0,w,Ce);return b(M,te,x),x})}function y(O,Z){const Q=H(O,Z);return Q?Promise.reject(Q):Promise.resolve()}function E(O){const Z=Cs.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(O):O()}function S(O,Z){let Q;const[te,Ce,v]=cA(O,Z);Q=wu(te.reverse(),"beforeRouteLeave",O,Z);for(const A of te)A.leaveGuards.forEach(M=>{Q.push(Vs(M,O,Z))});const w=y.bind(null,O,Z);return Q.push(w),jt(Q).then(()=>{Q=[];for(const A of i.list())Q.push(Vs(A,O,Z));return Q.push(w),jt(Q)}).then(()=>{Q=wu(Ce,"beforeRouteUpdate",O,Z);for(const A of Ce)A.updateGuards.forEach(M=>{Q.push(Vs(M,O,Z))});return Q.push(w),jt(Q)}).then(()=>{Q=[];for(const A of v)if(A.beforeEnter)if(kn(A.beforeEnter))for(const M of A.beforeEnter)Q.push(Vs(M,O,Z));else Q.push(Vs(A.beforeEnter,O,Z));return Q.push(w),jt(Q)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),Q=wu(v,"beforeRouteEnter",O,Z,E),Q.push(w),jt(Q))).then(()=>{Q=[];for(const A of o.list())Q.push(Vs(A,O,Z));return Q.push(w),jt(Q)}).catch(A=>rs(A,8)?A:Promise.reject(A))}function b(O,Z,Q){l.list().forEach(te=>E(()=>te(O,Z,Q)))}function C(O,Z,Q,te,Ce){const v=H(O,Z);if(v)return v;const w=Z===Os,A=Kr?history.state:{};Q&&(te||w?r.replace(O.fullPath,Oe({scroll:w&&A&&A.scroll},Ce)):r.push(O.fullPath,Ce)),c.value=O,on(O,Z,Q,w),_n()}let T;function Lt(){T||(T=r.listen((O,Z,Q)=>{if(!Fn.listening)return;const te=j(O),Ce=pe(te);if(Ce){I(Oe(Ce,{replace:!0,force:!0}),te).catch(go);return}u=te;const v=c.value;Kr&&Ob(lm(v.fullPath,Q.delta),fc()),S(te,v).catch(w=>rs(w,12)?w:rs(w,2)?(I(Oe(B(w.to),{force:!0}),te).then(A=>{rs(A,20)&&!Q.delta&&Q.type===Vo.pop&&r.go(-1,!1)}).catch(go),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),ye(w,te,v))).then(w=>{w=w||C(te,v,!1),w&&(Q.delta&&!rs(w,8)?r.go(-Q.delta,!1):Q.type===Vo.pop&&rs(w,20)&&r.go(-1,!1)),b(te,v,w)}).catch(go)}))}let rn=Xi(),rt=Xi(),Te;function ye(O,Z,Q){_n(O);const te=rt.list();return te.length?te.forEach(Ce=>Ce(O,Z,Q)):console.error(O),Promise.reject(O)}function Qt(){return Te&&c.value!==Os?Promise.resolve():new Promise((O,Z)=>{rn.add([O,Z])})}function _n(O){return Te||(Te=!O,Lt(),rn.list().forEach(([Z,Q])=>O?Q(O):Z()),rn.reset()),O}function on(O,Z,Q,te){const{scrollBehavior:Ce}=t;if(!Kr||!Ce)return Promise.resolve();const v=!Q&&Mb(lm(O.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return fy().then(()=>Ce(O,Z,v)).then(w=>w&&Db(w)).catch(w=>ye(w,O,Z))}const Xe=O=>r.go(O);let Je;const Cs=new Set,Fn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:j,options:t,push:W,replace:ue,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:rt.add,isReady:Qt,install(O){const Z=this;O.component("RouterLink",rA),O.component("RouterView",iv),O.config.globalProperties.$router=Z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(c)}),Kr&&!Je&&c.value===Os&&(Je=!0,W(r.location).catch(Ce=>{}));const Q={};for(const Ce in Os)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});O.provide(_f,Z),O.provide(rv,ay(Q)),O.provide(oh,c);const te=O.unmount;Cs.add(O),O.unmount=function(){Cs.delete(O),Cs.size<1&&(u=Os,T&&T(),T=null,c.value=Os,Je=!1,Te=!1),te()}}};function jt(O){return O.reduce((Z,Q)=>Z.then(()=>E(Q)),Promise.resolve())}return Fn}function cA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>mi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>mi(u,c))||r.push(c))}return[n,s,r]}const uA=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},hA=ea({__name:"App",setup(t){return(e,n)=>(pf(),$y(vr(iv)))}}),fA=()=>{};var Im={};/**
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
 */const ov={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(t,e){if(!t)throw bi(e)},bi=function(t){return new Error("Firebase Database ("+ov.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const av=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},dA=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[f],n[d],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new pA;const m=i<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),d!==64){const R=u<<6&192|d;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lv=function(t){const e=av(t);return dc.encodeByteArray(e,!0)},yl=function(t){return lv(t).replace(/\./g,"")},vl=function(t){try{return dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mA(t){return cv(void 0,t)}function cv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gA(n)||(t[n]=cv(t[n],e[n]));return t}function gA(t){return t!=="__proto__"}/**
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
 */function _A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yA=()=>_A().__FIREBASE_DEFAULTS__,vA=()=>{if(typeof process>"u"||typeof Im>"u")return;const t=Im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},pc=()=>{try{return fA()||yA()||vA()||wA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TA=t=>{var e,n;return(n=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},EA=t=>{const e=TA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uv=()=>{var t;return(t=pc())===null||t===void 0?void 0:t.config},IA=t=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function SA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
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
 */function Nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nn())}function bA(){var t;const e=(t=pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RA(){return ov.NODE_ADMIN===!0}function CA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vf(){try{return typeof indexedDB=="object"}catch{return!1}}function dv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function PA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const kA="FirebaseError";class Ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kA,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?NA(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Ln(r,l,s)}}function NA(t,e){return t.replace(DA,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const DA=/\{\$([^}]+)}/g;/**
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
 */function Uo(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
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
 */const pv=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Uo(vl(i[0])||""),n=Uo(vl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},OA=function(t){const e=pv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MA=function(t){const e=pv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(bm(i)&&bm(o)){if(!$o(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function bm(t){return t!==null&&typeof t=="object"}/**
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
 */function wf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class xA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const m=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),f=1518500249):(u=i^o^l,f=1859775393):d<60?(u=i&o|l&(i|o),f=2400959708):(u=i^o^l,f=3395469782);const m=(r<<5|r>>>27)+u+c+f+s[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function LA(t,e){const n=new VA(t,e);return n.subscribe.bind(n)}class VA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");FA(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Tu),r.error===void 0&&(r.error=Tu),r.complete===void 0&&(r.complete=Tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}function UA(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $A=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,K(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},mc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const WA=1e3,BA=2,HA=4*60*60*1e3,jA=.5;function Am(t,e=WA,n=BA){const s=e*Math.pow(n,t),r=Math.round(jA*s*(Math.random()-.5)*2);return Math.min(HA,s+r)}/**
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
 */function dn(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class YA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zA(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GA(t){return t===hr?void 0:t}function zA(t){return t.instantiationMode==="EAGER"}/**
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
 */class qA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const KA={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},QA=ge.INFO,XA={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},JA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=XA[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ai{constructor(e){this.name=e,this._logLevel=QA,this._logHandler=JA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const ZA=(t,e)=>e.some(n=>t instanceof n);let Rm,Cm;function eR(){return Rm||(Rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tR(){return Cm||(Cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,ah=new WeakMap,gv=new WeakMap,Eu=new WeakMap,Tf=new WeakMap;function nR(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mv.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function sR(t){if(ah.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ah.set(t,e)}let lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rR(t){lh=t(lh)}function iR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Iu(this),e,...n);return gv.set(s,e.sort?e.sort():[e]),Ws(s)}:tR().includes(t)?function(...e){return t.apply(Iu(this),e),Ws(mv.get(this))}:function(...e){return Ws(t.apply(Iu(this),e))}}function oR(t){return typeof t=="function"?iR(t):(t instanceof IDBTransaction&&sR(t),ZA(t,eR())?new Proxy(t,lh):t)}function Ws(t){if(t instanceof IDBRequest)return nR(t);if(Eu.has(t))return Eu.get(t);const e=oR(t);return e!==t&&(Eu.set(t,e),Tf.set(e,t)),e}const Iu=t=>Tf.get(t);function _v(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=Ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ws(o.result),c.oldVersion,c.newVersion,Ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const aR=["get","getKey","getAll","getAllKeys","count"],lR=["put","add","delete","clear"],Su=new Map;function Pm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=lR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||aR.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Su.set(e,i),i}rR(t=>({...t,get:(e,n,s)=>Pm(e,n)||t.get(e,n,s),has:(e,n)=>!!Pm(e,n)||t.has(e,n)}));/**
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
 */class cR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",km="0.11.4";/**
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
 */const Es=new Ai("@firebase/app"),hR="@firebase/app-compat",fR="@firebase/analytics-compat",dR="@firebase/analytics",pR="@firebase/app-check-compat",mR="@firebase/app-check",gR="@firebase/auth",_R="@firebase/auth-compat",yR="@firebase/database",vR="@firebase/data-connect",wR="@firebase/database-compat",TR="@firebase/functions",ER="@firebase/functions-compat",IR="@firebase/installations",SR="@firebase/installations-compat",bR="@firebase/messaging",AR="@firebase/messaging-compat",RR="@firebase/performance",CR="@firebase/performance-compat",PR="@firebase/remote-config",kR="@firebase/remote-config-compat",NR="@firebase/storage",DR="@firebase/storage-compat",OR="@firebase/firestore",MR="@firebase/vertexai",xR="@firebase/firestore-compat",LR="firebase",VR="11.6.0";/**
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
 */const uh="[DEFAULT]",FR={[ch]:"fire-core",[hR]:"fire-core-compat",[dR]:"fire-analytics",[fR]:"fire-analytics-compat",[mR]:"fire-app-check",[pR]:"fire-app-check-compat",[gR]:"fire-auth",[_R]:"fire-auth-compat",[yR]:"fire-rtdb",[vR]:"fire-data-connect",[wR]:"fire-rtdb-compat",[TR]:"fire-fn",[ER]:"fire-fn-compat",[IR]:"fire-iid",[SR]:"fire-iid-compat",[bR]:"fire-fcm",[AR]:"fire-fcm-compat",[RR]:"fire-perf",[CR]:"fire-perf-compat",[PR]:"fire-rc",[kR]:"fire-rc-compat",[NR]:"fire-gcs",[DR]:"fire-gcs-compat",[OR]:"fire-fst",[xR]:"fire-fst-compat",[MR]:"fire-vertex","fire-js":"fire-js",[LR]:"fire-js-all"};/**
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
 */const Tl=new Map,UR=new Map,hh=new Map;function Nm(t,e){try{t.container.addComponent(e)}catch(n){Es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(hh.has(e))return Es.debug(`There were multiple attempts to register component ${e}.`),!1;hh.set(e,t);for(const n of Tl.values())Nm(n,t);for(const n of UR.values())Nm(n,t);return!0}function na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fs(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bs=new nr("app","Firebase",$R);/**
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
 */class WR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ri=VR;function yv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Bs.create("bad-app-name",{appName:String(r)});if(n||(n=uv()),!n)throw Bs.create("no-options");const i=Tl.get(r);if(i){if($o(n,i.options)&&$o(s,i.config))return i;throw Bs.create("duplicate-app",{appName:r})}const o=new qA(r);for(const c of hh.values())o.addComponent(c);const l=new WR(n,s,o);return Tl.set(r,l),l}function vv(t=uh){const e=Tl.get(t);if(!e&&t===uh&&uv())return yv();if(!e)throw Bs.create("no-app",{appName:t});return e}function wt(t,e,n){var s;let r=(s=FR[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Es.warn(l.join(" "));return}Kt(new Ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BR="firebase-heartbeat-database",HR=1,Wo="firebase-heartbeat-store";let bu=null;function wv(){return bu||(bu=_v(BR,HR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bs.create("idb-open",{originalErrorMessage:t.message})})),bu}async function jR(t){try{const n=(await wv()).transaction(Wo),s=await n.objectStore(Wo).get(Tv(t));return await n.done,s}catch(e){if(e instanceof Ln)Es.warn(e.message);else{const n=Bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Es.warn(n.message)}}}async function Dm(t,e){try{const s=(await wv()).transaction(Wo,"readwrite");await s.objectStore(Wo).put(e,Tv(t)),await s.done}catch(n){if(n instanceof Ln)Es.warn(n.message);else{const s=Bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(s.message)}}}function Tv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YR=1024,GR=30;class zR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Om();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>GR){const o=QR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Es.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Om(),{heartbeatsToSend:s,unsentEntries:r}=qR(this._heartbeatsCache.heartbeats),i=yl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Es.warn(n),""}}}function Om(){return new Date().toISOString().substring(0,10)}function qR(t,e=YR){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Mm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class KR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vf()?dv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mm(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}function QR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function XR(t){Kt(new Ht("platform-logger",e=>new cR(e),"PRIVATE")),Kt(new Ht("heartbeat",e=>new zR(e),"PRIVATE")),wt(ch,km,t),wt(ch,km,"esm2017"),wt("fire-js","")}XR("");var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ef;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.D=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(S,b,C){for(var T=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)T[Lt-2]=arguments[Lt];return y.prototype[b].apply(S,T)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)S[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)S[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],b=I.g[2];var C=I.g[3],T=y+(C^E&(b^C))+S[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[2]+606105819&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[6]+2821735955&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[10]+4294925233&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(C^E&(b^C))+S[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(b^y&(E^b))+S[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=b+(E^C&(y^E))+S[14]+2792965006&4294967295,b=C+(T<<17&4294967295|T>>>15),T=E+(y^b&(C^y))+S[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(b^C&(E^b))+S[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[11]+643717713&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[15]+3634488961&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[3]+4107603335&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^C&(E^b))+S[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^b&(y^E))+S[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(C^y))+S[7]+1735328473&4294967295,b=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(b^C))+S[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(E^b^C)+S[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[11]+1839030562&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[7]+4139469664&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[3]+3572445317&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^C)+S[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^b)+S[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=b+(C^y^E)+S[15]+530742520&4294967295,b=C+(T<<16&4294967295|T>>>16),T=E+(b^C^y)+S[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(b^(E|~C))+S[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[14]+2878612391&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[10]+4293915773&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[6]+2734768916&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~C))+S[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~b))+S[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=b+(y^(C|~E))+S[2]+718787259&4294967295,b=C+(T<<15&4294967295|T>>>17),T=E+(C^(b|~y))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+C&4294967295}s.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var E=y-this.blockSize,S=this.B,b=this.h,C=0;C<y;){if(b==0)for(;C<=E;)r(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(S[b++]=I.charCodeAt(C++),b==this.blockSize){r(this,S),b=0;break}}else for(;C<y;)if(S[b++]=I[C++],b==this.blockSize){r(this,S),b=0;break}}this.h=b,this.o+=y},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var E=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=E&255,E/=256;for(this.u(I),I=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)I[E++]=this.g[y]>>>S&255;return I};function i(I,y){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;for(var E=[],S=!0,b=I.length-1;0<=b;b--){var C=I[b]|0;S&&C==y||(E[b]=C,S=!1)}this.g=E}var l={};function c(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return d;if(0>I)return D(u(-I));for(var y=[],E=1,S=0;I>=E;S++)y[S]=I/E|0,E*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return D(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),S=d,b=0;b<I.length;b+=8){var C=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+C),y);8>C?(C=u(Math.pow(y,C)),S=S.j(C).add(u(T))):(S=S.j(E),S=S.add(u(T)))}return S}var d=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var I=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);I+=(0<=S?S:4294967296+S)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(N(this))return"-"+D(this).toString(I);for(var y=u(Math.pow(I,6)),E=this,S="";;){var b=W(E,y).g;E=j(E,b.j(y));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=b,R(E))return C+S;for(;6>C.length;)C="0"+C;S=C+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function N(I){return I.h==-1}t.l=function(I){return I=j(this,I),N(I)?-1:R(I)?0:1};function D(I){for(var y=I.g.length,E=[],S=0;S<y;S++)E[S]=~I.g[S];return new o(E,~I.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],S=0,b=0;b<=y;b++){var C=S+(this.i(b)&65535)+(I.i(b)&65535),T=(C>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);S=T>>>16,C&=65535,T&=65535,E[b]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(I,y){return I.add(D(y))}t.j=function(I){if(R(this)||R(I))return d;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var y=this.g.length+I.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var b=0;b<I.g.length;b++){var C=this.i(S)>>>16,T=this.i(S)&65535,Lt=I.i(b)>>>16,rn=I.i(b)&65535;E[2*S+2*b]+=T*rn,B(E,2*S+2*b),E[2*S+2*b+1]+=C*rn,B(E,2*S+2*b+1),E[2*S+2*b+1]+=T*Lt,B(E,2*S+2*b+1),E[2*S+2*b+2]+=C*Lt,B(E,2*S+2*b+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function B(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function H(I,y){this.g=I,this.h=y}function W(I,y){if(R(y))throw Error("division by zero");if(R(I))return new H(d,d);if(N(I))return y=W(D(I),y),new H(D(y.g),D(y.h));if(N(y))return y=W(I,D(y)),new H(D(y.g),y.h);if(30<I.g.length){if(N(I)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;0>=S.l(I);)E=ue(E),S=ue(S);var b=pe(E,1),C=pe(S,1);for(S=pe(S,2),E=pe(E,2);!R(S);){var T=C.add(S);0>=T.l(I)&&(b=b.add(E),C=T),S=pe(S,1),E=pe(E,1)}return y=j(I,b.j(y)),new H(b,y)}for(b=d;0<=I.l(y);){for(E=Math.max(1,Math.floor(I.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),C=u(E),T=C.j(y);N(T)||0<T.l(I);)E-=S,C=u(E),T=C.j(y);R(C)&&(C=m),b=b.add(C),I=j(I,T)}return new H(b,I)}t.A=function(I){return W(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&I.i(S);return new o(E,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|I.i(S);return new o(E,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^I.i(S);return new o(E,this.h^I.h)};function ue(I){for(var y=I.g.length+1,E=[],S=0;S<y;S++)E[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(E,I.h)}function pe(I,y){var E=y>>5;y%=32;for(var S=I.g.length-E,b=[],C=0;C<S;C++)b[C]=0<y?I.i(C+E)>>>y|I.i(C+E+1)<<32-y:I.i(C+E);return new o(b,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ef=o}).apply(typeof xm<"u"?xm:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ev,oo,Iv,tl,fh,Sv,bv,Av;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var p=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in p))break e;p=p[P]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,g=!1,P={next:function(){if(!g&&p<a.length){var k=p++;return{value:h(k,a[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,P,k){for(var z=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)z[Ue-2]=arguments[Ue];return h.prototype[P].apply(g,z)}}function N(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function D(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const P=a.length||0,k=g.length||0;a.length=P+k;for(let z=0;z<k;z++)a[P+z]=g[z]}else a.push(g)}}class j{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var ue=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function pe(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function I(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let p,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(p in g)a[p]=g[p];for(let k=0;k<E.length;k++)p=E[k],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function b(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Qt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Lt{constructor(){this.h=this.g=null}add(h,p){const g=rn.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var rn=new j(()=>new rt,a=>a.reset());class rt{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ye=!1,Qt=new Lt,_n=()=>{const a=l.Promise.resolve(void 0);Te=()=>{a.then(on)}};var on=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(p){C(p)}var h=rn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var Cs=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Fn(a,h){if(Je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ue){e:{try{W(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Fn.aa.h.call(this)}}R(Fn,Je);var jt={2:"touch",3:"pen",4:"mouse"};Fn.prototype.h=function(){Fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Z=0;function Q(a,h,p,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=P,this.key=++Z,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ce(a){this.src=a,this.g={},this.h=0}Ce.prototype.add=function(a,h,p,g,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var z=w(a,h,g,P);return-1<z?(h=a[z],p||(h.fa=!1)):(h=new Q(h,this.src,k,!!g,P),h.fa=p,a.push(h)),h};function v(a,h){var p=h.type;if(p in a.g){var g=a.g[p],P=Array.prototype.indexOf.call(g,h,void 0),k;(k=0<=P)&&Array.prototype.splice.call(g,P,1),k&&(te(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function w(a,h,p,g){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==h&&k.capture==!!p&&k.ha==g)return P}return-1}var A="closure_lm_"+(1e6*Math.random()|0),M={};function L(a,h,p,g,P){if(Array.isArray(h)){for(var k=0;k<h.length;k++)L(a,h[k],p,g,P);return null}return p=ae(p),a&&a[O]?a.K(h,p,u(g)?!!g.capture:!1,P):x(a,h,p,!1,g,P)}function x(a,h,p,g,P,k){if(!h)throw Error("Invalid event type");var z=u(P)?!!P.capture:!!P,Ue=X(a);if(Ue||(a[A]=Ue=new Ce(a)),p=Ue.add(h,p,g,z,k),p.proxy)return p;if(g=q(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)Cs||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(F(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function a(p){return h.call(a.src,a.listener,p)}const h=ie;return a}function G(a,h,p,g,P){if(Array.isArray(h))for(var k=0;k<h.length;k++)G(a,h[k],p,g,P);else g=u(g)?!!g.capture:!!g,p=ae(p),a&&a[O]?(a=a.i,h=String(h).toString(),h in a.g&&(k=a.g[h],p=w(k,p,g,P),-1<p&&(te(k[p]),Array.prototype.splice.call(k,p,1),k.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,p,g,P)),(p=-1<a?h[a]:null)&&Y(p))}function Y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[O])v(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(F(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=X(h))?(v(p,a),p.h==0&&(p.src=null,h[A]=null)):te(a)}}}function F(a){return a in M?M[a]:M[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Fn(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&Y(a),a=p.call(g,h)}return a}function X(a){return a=a[A],a instanceof Ce?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function oe(){Xe.call(this),this.i=new Ce(this),this.M=this,this.F=null}R(oe,Xe),oe.prototype[O]=!0,oe.prototype.removeEventListener=function(a,h,p,g){G(this,a,h,p,g)};function he(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Je(h,a);else if(h instanceof Je)h.target=h.target||a;else{var P=h;h=new Je(g,a),S(h,P)}if(P=!0,p)for(var k=p.length-1;0<=k;k--){var z=h.g=p[k];P=Ee(z,g,!0,h)&&P}if(z=h.g=a,P=Ee(z,g,!0,h)&&P,P=Ee(z,g,!1,h)&&P,p)for(k=0;k<p.length;k++)z=h.g=p[k],P=Ee(z,g,!1,h)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)te(p[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},oe.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ee(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,k=0;k<h.length;++k){var z=h[k];if(z&&!z.da&&z.capture==p){var Ue=z.listener,gt=z.ha||z.src;z.fa&&v(a.i,z),P=Ue.call(gt,g)!==!1&&P}}return P&&!g.defaultPrevented}function Et(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function pt(a){a.g=Et(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class an extends Xe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){Xe.call(this),this.h=a,this.g={}}R(It,Xe);var Ps=[];function Li(a){pe(a.g,function(h,p){this.g.hasOwnProperty(p)&&Y(h)},a),a.g={}}It.prototype.N=function(){It.aa.N.call(this),Li(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,ln=l.JSON.parse,ya=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function jc(){}jc.prototype.h=null;function $d(a){return a.h||(a.h=a.i())}function Wd(){}var Vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yc(){Je.call(this,"d")}R(Yc,Je);function Gc(){Je.call(this,"c")}R(Gc,Je);var sr={},Bd=null;function va(){return Bd=Bd||new oe}sr.La="serverreachability";function Hd(a){Je.call(this,sr.La,a)}R(Hd,Je);function Fi(a){const h=va();he(h,new Hd(h))}sr.STAT_EVENT="statevent";function jd(a,h){Je.call(this,sr.STAT_EVENT,a),this.stat=h}R(jd,Je);function Vt(a){const h=va();he(h,new jd(h,a))}sr.Ma="timingevent";function Yd(a,h){Je.call(this,sr.Ma,a),this.size=h}R(Yd,Je);function Ui(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function _I(a,h,p,g,P,k){a.info(function(){if(a.g)if(k)for(var z="",Ue=k.split("&"),gt=0;gt<Ue.length;gt++){var Pe=Ue[gt].split("=");if(1<Pe.length){var St=Pe[0];Pe=Pe[1];var bt=St.split("_");z=2<=bt.length&&bt[1]=="type"?z+(St+"="+Pe+"&"):z+(St+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+p+`
`+z})}function yI(a,h,p,g,P,k,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+p+`
`+k+" "+z})}function $r(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+wI(a,p)+(g?" "+g:"")})}function vI(a,h){a.info(function(){return"TIMEOUT: "+h})}$i.prototype.info=function(){};function wI(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return mt(p)}catch{return h}}var wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zc;function Ta(){}R(Ta,jc),Ta.prototype.g=function(){return new XMLHttpRequest},Ta.prototype.i=function(){return{}},zc=new Ta;function ks(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zd}function zd(){this.i=null,this.g="",this.h=!1}var qd={},qc={};function Kc(a,h,p){a.L=1,a.v=ba(ts(h)),a.m=p,a.P=!0,Kd(a,null)}function Kd(a,h){a.F=Date.now(),Ea(a),a.A=ts(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),cp(p.i,"t",g),a.C=0,p=a.j.J,a.h=new zd,a.g=Rp(a.j,p?h:null,!a.m),0<a.O&&(a.M=new an(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ps[0]=P.toString()),P=Ps);for(var k=0;k<P.length;k++){var z=L(p,P[k],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Fi(),_I(a.i,a.u,a.A,a.l,a.R,a.m)}ks.prototype.ca=function(a){a=a.target;const h=this.M;h&&ns(a)==3?h.j():this.Y(a)},ks.prototype.Y=function(a){try{if(a==this.g)e:{const bt=ns(this.g);var h=this.g.Ba();const Hr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||gp(this.g)))){this.J||bt!=4||h==7||(h==8||0>=Hr?Fi(3):Fi(2)),Qc(this);var p=this.g.Z();this.X=p;t:if(Qd(this)){var g=gp(this.g);a="";var P=g.length,k=ns(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),Wi(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(k&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,yI(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ue)){var Pe=Ue;break t}}Pe=null}if(p=Pe)$r(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xc(this,p);else{this.o=!1,this.s=3,Vt(12),rr(this),Wi(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<z.length;)if(yn=TI(this,z),yn==qc){bt==4&&(this.s=4,Vt(14),p=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==qd){this.s=4,Vt(15),$r(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else $r(this.i,this.l,yn,null),Xc(this,yn);if(Qd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||z.length!=0||this.h.h||(this.s=1,Vt(16),p=!1),this.o=this.o&&p,!p)$r(this.i,this.l,z,"[Invalid Chunked Response]"),rr(this),Wi(this);else if(0<z.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),su(St),St.M=!0,Vt(11))}}else $r(this.i,this.l,z,null),Xc(this,z);bt==4&&rr(this),this.o&&!this.J&&(bt==4?Ip(this.j,this):(this.o=!1,Ea(this)))}else FI(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),rr(this),Wi(this)}}}catch{}finally{}};function Qd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TI(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?qc:(p=Number(h.substring(p,g)),isNaN(p)?qd:(g+=1,g+p>h.length?qc:(h=h.slice(g,g+p),a.C=g+p,h)))}ks.prototype.cancel=function(){this.J=!0,rr(this)};function Ea(a){a.S=Date.now()+a.I,Xd(a,a.I)}function Xd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ui(m(a.ba,a),h)}function Qc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ks.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(vI(this.i,this.A),this.L!=2&&(Fi(),Vt(17)),rr(this),this.s=2,Wi(this)):Xd(this,this.S-a)};function Wi(a){a.j.G==0||a.J||Ip(a.j,a)}function rr(a){Qc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Li(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Xc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Jc(p.h,a))){if(!a.K&&Jc(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Na(p),Pa(p);else break e;nu(p),Vt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ui(m(p.Za,p),6e3));if(1>=ep(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else or(p,11)}else if((a.K||p.g==a)&&Na(p),!B(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let Pe=P[h];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const St=Pe[3];St!=null&&(p.la=St,p.j.info("VER="+p.la));const bt=Pe[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const Hr=Pe[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(g=1.5*Hr,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const yn=a.g;if(yn){const Oa=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var k=g.h;k.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Zc(k,k.h),k.h=null))}if(g.D){const ru=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;ru&&(g.ya=ru,He(g.I,g.D,ru))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var z=a;if(g.qa=Ap(g,g.J?g.ia:null,g.W),z.K){tp(g.h,z);var Ue=z,gt=g.L;gt&&(Ue.I=gt),Ue.B&&(Qc(Ue),Ea(Ue)),g.g=z}else Tp(g);0<p.i.length&&ka(p)}else Pe[0]!="stop"&&Pe[0]!="close"||or(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?or(p,7):tu(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}Fi(4)}catch{}}var EI=class{constructor(a,h){this.g=a,this.map=h}};function Jd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ep(a){return a.h?1:a.g?a.g.size:0}function Jc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Zc(a,h){a.g?a.g.add(h):a.h=h}function tp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Jd.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function np(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return N(a.i)}function II(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function SI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function sp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=SI(a),g=II(a),P=g.length,k=0;k<P;k++)h.call(void 0,g[k],p&&p[k],a)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bI(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),P=null;if(0<=g){var k=a[p].substring(0,g);P=a[p].substring(g+1)}else k=a[p];h(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ir(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ir){this.h=a.h,Ia(this,a.j),this.o=a.o,this.g=a.g,Sa(this,a.s),this.l=a.l;var h=a.i,p=new ji;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),ip(this,p),this.m=a.m}else a&&(h=String(a).match(rp))?(this.h=!1,Ia(this,h[1]||"",!0),this.o=Bi(h[2]||""),this.g=Bi(h[3]||"",!0),Sa(this,h[4]),this.l=Bi(h[5]||"",!0),ip(this,h[6]||"",!0),this.m=Bi(h[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}ir.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Hi(h,op,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hi(h,op,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Hi(p,p.charAt(0)=="/"?CI:RI,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Hi(p,kI)),a.join("")};function ts(a){return new ir(a)}function Ia(a,h,p){a.j=p?Bi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Sa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ip(a,h,p){h instanceof ji?(a.i=h,NI(a.i,a.h)):(p||(h=Hi(h,PI)),a.i=new ji(h,a.h))}function He(a,h,p){a.i.set(h,p)}function ba(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,AI),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function AI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var op=/[#\/\?@]/g,RI=/[#\?:]/g,CI=/[#\?]/g,PI=/[#\?@]/g,kI=/#/g;function ji(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ns(a){a.g||(a.g=new Map,a.h=0,a.i&&bI(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ji.prototype,t.add=function(a,h){Ns(this),this.i=null,a=Wr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function ap(a,h){Ns(a),h=Wr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lp(a,h){return Ns(a),h=Wr(a,h),a.g.has(h)}t.forEach=function(a,h){Ns(this),this.g.forEach(function(p,g){p.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){Ns(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const P=a[g];for(let k=0;k<P.length;k++)p.push(h[g])}return p},t.V=function(a){Ns(this);let h=[];if(typeof a=="string")lp(this,a)&&(h=h.concat(this.g.get(Wr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Ns(this),this.i=null,a=Wr(this,a),lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function cp(a,h,p){ap(a,h),0<p.length&&(a.i=null,a.g.set(Wr(a,h),N(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const k=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=k;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function Wr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function NI(a,h){h&&!a.j&&(Ns(a),a.i=null,a.g.forEach(function(p,g){var P=g.toLowerCase();g!=P&&(ap(this,g),cp(this,P,p))},a)),a.j=h}function DI(a,h){const p=new $i;if(l.Image){const g=new Image;g.onload=_(Ds,p,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Ds,p,"TestLoadImage: error",!1,h,g),g.onabort=_(Ds,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Ds,p,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function OI(a,h){const p=new $i,g=new AbortController,P=setTimeout(()=>{g.abort(),Ds(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(k=>{clearTimeout(P),k.ok?Ds(p,"TestPingServer: ok",!0,h):Ds(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Ds(p,"TestPingServer: error",!1,h)})}function Ds(a,h,p,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(p)}catch{}}function MI(){this.g=new ya}function xI(a,h,p){const g=p||"";try{sp(a,function(P,k){let z=P;u(P)&&(z=mt(P)),h.push(g+k+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Aa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Aa,jc),Aa.prototype.g=function(){return new Ra(this.l,this.j)},Aa.prototype.i=function(a){return function(){return a}}({});function Ra(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ra,oe),t=Ra.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Yi(this):Gi(this),this.readyState==3&&up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Yi(this))},t.Qa=function(a){this.g&&(this.response=a,Yi(this))},t.ga=function(){this.g&&Yi(this)};function Yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Gi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let h="";return pe(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function eu(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=hp(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):He(a,h,p))}function et(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(et,oe);var LI=/^https?$/i,VI=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zc.g(),this.v=this.o?$d(this.o):$d(zc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(k){fp(this,k);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)p.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())p.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(VI,h,void 0))||g||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of p)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mp(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){fp(this,k)}};function fp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,dp(a),Ca(a)}function dp(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Ca(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ca(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pp(this):this.bb())},t.bb=function(){pp(this)};function pp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ns(a)!=4||a.Z()!=2)){if(a.u&&ns(a)==4)Et(a.Ea,0,a);else if(he(a,"readystatechange"),ns(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=z===0){var P=String(a.D).match(rp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!LI.test(P?P.toLowerCase():"")}p=g}if(p)he(a,"complete"),he(a,"success");else{a.m=6;try{var k=2<ns(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",dp(a)}}finally{Ca(a)}}}}function Ca(a,h){if(a.g){mp(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{p.onreadystatechange=g}catch{}}}function mp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ns(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ns(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ln(h)}};function gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function FI(a){const h={};a=(a.g&&2<=ns(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var p=b(a[g]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const k=h[P]||[];h[P]=k,k.push(p)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function _p(a){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zi("baseRetryDelayMs",5e3,a),this.cb=zi("retryDelaySeedMs",1e4,a),this.Wa=zi("forwardChannelMaxRetries",2,a),this.wa=zi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jd(a&&a.concurrentRequestLimit),this.Da=new MI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_p.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){Vt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Ap(this,null,this.W),ka(this)};function tu(a){if(yp(a),a.G==3){var h=a.U++,p=ts(a.I);if(He(p,"SID",a.K),He(p,"RID",h),He(p,"TYPE","terminate"),qi(a,p),h=new ks(a,a.j,h),h.L=2,h.v=ba(ts(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Rp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ea(h)}bp(a)}function Pa(a){a.g&&(su(a),a.g.cancel(),a.g=null)}function yp(a){Pa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ka(a){if(!Zd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||_n(),ye||(Te(),ye=!0),Qt.add(h,a),a.B=0}}function UI(a,h){return ep(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ui(m(a.Ga,a,h),Sp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new ks(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),S(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=wp(this,P,h),p=ts(this.I),He(p,"RID",a),He(p,"CVER",22),this.D&&He(p,"X-HTTP-Session-Id",this.D),qi(this,p),k&&(this.O?h="headers="+encodeURIComponent(String(hp(k)))+"&"+h:this.m&&eu(p,this.m,k)),Zc(this.h,P),this.Ua&&He(p,"TYPE","init"),this.P?(He(p,"$req",h),He(p,"SID","null"),P.T=!0,Kc(P,p,null)):Kc(P,p,h),this.G=2}}else this.G==3&&(a?vp(this,a):this.i.length==0||Zd(this.h)||vp(this))};function vp(a,h){var p;h?p=h.l:p=a.U++;const g=ts(a.I);He(g,"SID",a.K),He(g,"RID",p),He(g,"AID",a.T),qi(a,g),a.m&&a.o&&eu(g,a.m,a.o),p=new ks(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=wp(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Zc(a.h,p),Kc(p,g,h)}function qi(a,h){a.H&&pe(a.H,function(p,g){He(h,g,p)}),a.l&&sp({},function(p,g){He(h,g,p)})}function wp(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const z=["count="+p];k==-1?0<p?(k=P[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let Ue=!0;for(let gt=0;gt<p;gt++){let Pe=P[gt].g;const St=P[gt].map;if(Pe-=k,0>Pe)k=Math.max(0,P[gt].g-100),Ue=!1;else try{xI(St,z,"req"+Pe+"_")}catch{g&&g(St)}}if(Ue){g=z.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function Tp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||_n(),ye||(Te(),ye=!0),Qt.add(h,a),a.v=0}}function nu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ui(m(a.Fa,a),Sp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ui(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Pa(this),Ep(this))};function su(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ep(a){a.g=new ks(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ts(a.qa);He(h,"RID","rpc"),He(h,"SID",a.K),He(h,"AID",a.T),He(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(h,"TO",a.ja),He(h,"TYPE","xmlhttp"),qi(a,h),a.m&&a.o&&eu(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ba(ts(h)),p.m=null,p.P=!0,Kd(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Pa(this),nu(this),Vt(19))};function Na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ip(a,h){var p=null;if(a.g==h){Na(a),su(a),a.g=null;var g=2}else if(Jc(a.h,h))p=h.D,tp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=va(),he(g,new Yd(g,p)),ka(a)}else Tp(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&UI(a,h)||g==2&&nu(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),P){case 1:or(a,5);break;case 4:or(a,10);break;case 3:or(a,6);break;default:or(a,2)}}}function Sp(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function or(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const P=!g;g=new ir(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ia(g,"https"),ba(g),P?DI(g.toString(),p):OI(g.toString(),p)}else Vt(2);a.G=0,a.l&&a.l.sa(h),bp(a),yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function bp(a){if(a.G=0,a.ka=[],a.l){const h=np(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Ap(a,h,p){var g=p instanceof ir?ts(p):new ir(p);if(g.g!="")h&&(g.g=h+"."+g.g),Sa(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var k=new ir(null);g&&Ia(k,g),h&&(k.g=h),P&&Sa(k,P),p&&(k.l=p),g=k}return p=a.D,h=a.ya,p&&h&&He(g,p,h),He(g,"VER",a.la),qi(a,g),g}function Rp(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new Aa({eb:p})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cp(){}t=Cp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Da(){}Da.prototype.g=function(a,h){return new Xt(a,h)};function Xt(a,h){oe.call(this),this.g=new _p(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!B(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Br(this)}R(Xt,oe),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){tu(this.g)},Xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=mt(a),a=p);h.i.push(new EI(h.Ya++,a)),h.G==3&&ka(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,tu(this.g),delete this.g,Xt.aa.N.call(this)};function Pp(a){Yc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Pp,Yc);function kp(){Gc.call(this),this.status=1}R(kp,Gc);function Br(a){this.g=a}R(Br,Cp),Br.prototype.ua=function(){he(this.g,"a")},Br.prototype.ta=function(a){he(this.g,new Pp(a))},Br.prototype.sa=function(a){he(this.g,new kp)},Br.prototype.ra=function(){he(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Av=function(){return new Da},bv=function(){return va()},Sv=sr,fh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,tl=wa,Gd.COMPLETE="complete",Iv=Gd,Wd.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,oo=Wd,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,Ev=et}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const Lm="@firebase/firestore",Vm="4.7.10";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let Ci="11.5.0";/**
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
 */const Sr=new Ai("@firebase/firestore");function Qr(){return Sr.logLevel}function ne(t,...e){if(Sr.logLevel<=ge.DEBUG){const n=e.map(If);Sr.debug(`Firestore (${Ci}): ${t}`,...n)}}function br(t,...e){if(Sr.logLevel<=ge.ERROR){const n=e.map(If);Sr.error(`Firestore (${Ci}): ${t}`,...n)}}function gc(t,...e){if(Sr.logLevel<=ge.WARN){const n=e.map(If);Sr.warn(`Firestore (${Ci}): ${t}`,...n)}}function If(t){if(typeof t=="string")return t;try{/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function nt(t,e){t||_e()}function Be(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Rv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class ZR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eC{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){nt(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wr,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(nt(typeof s.accessToken=="string"),new Rv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string"),new Rt(e)}}class tC{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nC{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new tC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sC{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,fs(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){nt(this.o===void 0);const s=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Fm(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nt(typeof n.token=="string"),this.R=n.token,new Fm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function iC(){return new TextEncoder}/**
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
 */class Cv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=rC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function dh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return Re(s,r);{const i=iC(),o=oC(i.encode(Um(t,n)),i.encode(Um(e,n)));return o!==0?o:Re(s,r)}}n+=s>65535?2:1}return Re(t.length,e.length)}function Um(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function oC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Re(t[n],e[n]);return Re(t.length,e.length)}function yi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */const $m=-62135596800,Wm=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Wm);return new dt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$m)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wm}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$m;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Qe{static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new dt(0,0))}static max(){return new Qe(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bm="__name__";class Wn{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(),s===void 0?s=e.length-n:s>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Wn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Re(e.length,n.length)}static compareSegments(e,n){const s=Wn.isNumericId(e),r=Wn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):dh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ef.fromString(e.substring(4,e.length-2))}}class tt extends Wn{construct(e,n,s){return new tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(U.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const aC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Wn{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return aC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bm}static keyField(){return new vt([Bm])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new le(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new le(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new le(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(tt.fromString(e))}static fromName(e){return new me(tt.fromString(e).popFirst(5))}static empty(){return new me(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new tt(e.slice()))}}/**
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
 */const Bo=-1;function lC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Qe.fromTimestamp(s===1e9?new dt(n+1,0):new dt(n,s));return new qs(r,me.empty(),e)}function cC(t){return new qs(t.readTime,t.key,Bo)}class qs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qs(Qe.min(),me.empty(),Bo)}static max(){return new qs(Qe.max(),me.empty(),Bo)}}function uC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const hC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sf(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==hC)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,s)=>{n(e)})}static reject(e){return new V((n,s)=>{s(e)})}static waitFor(e){return new V((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=V.resolve(!1);for(const s of e)n=n.next(r=>r?V.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new V((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&s(o)},f=>r(f))}})}static doWhile(e,n){return new V((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function dC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function sa(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bf.ae=-1;/**
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
 */const Af=-1;function Rf(t){return t==null}function El(t){return t===0&&1/t==-1/0}function pC(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Pv="";function mC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hm(e)),e=gC(t.get(n),e);return Hm(e)}function gC(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Pv:n+="";break;default:n+=i}}return n}function Hm(t){return t+Pv+""}/**
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
 */function jm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Dn=class ph{constructor(e,n){this.comparator=e,this.root=n||Hs.EMPTY}insert(e,n){return new ph(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Hs.BLACK,null,null))}remove(e){return new ph(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}},Fa=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Hs=class os{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??os.RED,this.left=r??os.EMPTY,this.right=i??os.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new os(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return os.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return os.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,os.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,os.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}};Hs.EMPTY=null,Hs.RED=!0,Hs.BLACK=!1;Hs.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Hs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tt{constructor(e){this.comparator=e,this.data=new Dn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ym(this.data.getIterator())}getIteratorFrom(e){return new Ym(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class Ym{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new In([])}unionWith(e){let n=new Tt(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new In(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _C extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _C("Invalid base64 string: "+i):i}}(e);return new qn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new qn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qn.EMPTY_BYTE_STRING=new qn("");const yC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(nt(!!t),typeof t=="string"){let e=0;const n=yC.exec(t);if(nt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?qn.fromBase64String(t):qn.fromUint8Array(t)}/**
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
 */const Nv="server_timestamp",Dv="__type__",Ov="__previous_value__",Mv="__local_write_time__";function Cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dv])===null||n===void 0?void 0:n.stringValue)===Nv}function Pf(t){const e=t.mapValue.fields[Ov];return Cf(e)?Pf(e):e}function Il(t){const e=Ar(t.mapValue.fields[Mv].timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class vC{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const Sl="(default)";class bl{constructor(e,n){this.projectId=e,this.database=n||Sl}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database===Sl}isEqual(e){return e instanceof bl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xv="__type__",wC="__max__",Ua={mapValue:{}},Lv="__vector__",mh="value";function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cf(t)?4:EC(t)?9007199254740991:TC(t)?10:11:_e()}function Kn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Il(t).isEqual(Il(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ar(r.timestampValue),l=Ar(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return vi(r.bytesValue).isEqual(vi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return _t(r.geoPointValue.latitude)===_t(i.geoPointValue.latitude)&&_t(r.geoPointValue.longitude)===_t(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _t(r.integerValue)===_t(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=_t(r.doubleValue),l=_t(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(jm(o)!==jm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Kn(o[c],l[c])))return!1;return!0}(t,e);default:return _e()}}function Ho(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Rr(t),s=Rr(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=_t(i.integerValue||i.doubleValue),c=_t(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Gm(t.timestampValue,e.timestampValue);case 4:return Gm(Il(t),Il(e));case 5:return dh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vi(i),c=vi(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Re(l[u],c[u]);if(f!==0)return f}return Re(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Re(_t(i.latitude),_t(o.latitude));return l!==0?l:Re(_t(i.longitude),_t(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,f;const d=i.fields||{},m=o.fields||{},_=(l=d[mh])===null||l===void 0?void 0:l.arrayValue,R=(c=m[mh])===null||c===void 0?void 0:c.arrayValue,N=Re(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:zm(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ua.mapValue&&o===Ua.mapValue)return 0;if(i===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=dh(c[d],f[d]);if(m!==0)return m;const _=wi(l[c[d]],u[f[d]]);if(_!==0)return _}return Re(c.length,f.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Gm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Ar(t),s=Ar(e),r=Re(n.seconds,s.seconds);return r!==0?r:Re(n.nanos,s.nanos)}function zm(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=wi(n[r],s[r]);if(i)return i}return Re(n.length,s.length)}function Ti(t){return gh(t)}function gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ar(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return me.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=gh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${gh(n.fields[o])}`;return r+"}"}(t.mapValue):_e()}function nl(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pf(t);return e?16+nl(e):16;case 5:return 2*t.stringValue.length;case 6:return vi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+nl(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return Pi(s.fields,(i,o)=>{r+=i.length+nl(o)}),r}(t.mapValue);default:throw _e()}}function _h(t){return!!t&&"integerValue"in t}function kf(t){return!!t&&"arrayValue"in t}function sl(t){return!!t&&"mapValue"in t}function TC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[xv])===null||n===void 0?void 0:n.stringValue)===Lv}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=yo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wC}/**
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
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=yo(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];sl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Pi(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tn(yo(this.value))}}function Vv(t){const e=[];return Pi(t.fields,(n,s)=>{const r=new vt([n]);if(sl(s)){const i=Vv(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new In(e)}/**
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
 */class vn{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vn(e,0,Qe.min(),Qe.min(),Qe.min(),Tn.empty(),0)}static newFoundDocument(e,n,s,r){return new vn(e,1,n,Qe.min(),s,r,0)}static newNoDocument(e,n){return new vn(e,2,n,Qe.min(),Qe.min(),Tn.empty(),0)}static newUnknownDocument(e,n){return new vn(e,3,n,Qe.min(),Qe.min(),Tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Al{constructor(e,n){this.position=e,this.inclusive=n}}function qm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=me.comparator(me.fromName(o.referenceValue),n.key):s=wi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function IC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fv{}class ht extends Fv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new bC(e,n,s):n==="array-contains"?new CC(e,s):n==="in"?new PC(e,s):n==="not-in"?new kC(e,s):n==="array-contains-any"?new NC(e,s):new ht(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new AC(e,s):new RC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(wi(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ks extends Fv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ks(e,n)}matches(e){return Uv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Uv(t){return t.op==="and"}function $v(t){return SC(t)&&Uv(t)}function SC(t){for(const e of t.filters)if(e instanceof Ks)return!1;return!0}function yh(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+Ti(t.value);if($v(t))return t.filters.map(e=>yh(e)).join(",");{const e=t.filters.map(n=>yh(n)).join(",");return`${t.op}(${e})`}}function Wv(t,e){return t instanceof ht?function(s,r){return r instanceof ht&&s.op===r.op&&s.field.isEqual(r.field)&&Kn(s.value,r.value)}(t,e):t instanceof Ks?function(s,r){return r instanceof Ks&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&Wv(o,r.filters[l]),!0):!1}(t,e):void _e()}function Bv(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${Ti(n.value)}`}(t):t instanceof Ks?function(n){return n.op.toString()+" {"+n.getFilters().map(Bv).join(" ,")+"}"}(t):"Filter"}class bC extends ht{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class AC extends ht{constructor(e,n){super(e,"in",n),this.keys=Hv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RC extends ht{constructor(e,n){super(e,"not-in",n),this.keys=Hv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>me.fromName(s.referenceValue))}class CC extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kf(n)&&Ho(n.arrayValue,this.value)}}class PC extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ho(this.value.arrayValue,n)}}class kC extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ho(this.value.arrayValue,n)}}class NC extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ho(this.value.arrayValue,s))}}/**
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
 */class DC{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Qm(t,e=null,n=[],s=[],r=null,i=null,o=null){return new DC(t,e,n,s,r,i,o)}function Nf(t){const e=Be(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ti(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ti(s)).join(",")),e.le=n}return e.le}function Df(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Km(t.startAt,e.startAt)&&Km(t.endAt,e.endAt)}/**
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
 */class _c{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function OC(t,e,n,s,r,i,o,l){return new _c(t,e,n,s,r,i,o,l)}function MC(t){return new _c(t)}function Xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xC(t){return t.collectionGroup!==null}function vo(t){const e=Be(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Tt(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Rl(i,s))}),n.has(vt.keyField().canonicalString())||e.he.push(new Rl(vt.keyField(),s))}return e.he}function Tr(t){const e=Be(t);return e.Pe||(e.Pe=LC(e,vo(t))),e.Pe}function LC(t,e){if(t.limitType==="F")return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Rl(r.field,i)});const n=t.endAt?new Al(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Al(t.startAt.position,t.startAt.inclusive):null;return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function vh(t,e,n){return new _c(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jv(t,e){return Df(Tr(t),Tr(e))&&t.limitType===e.limitType}function Yv(t){return`${Nf(Tr(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Bv(r)).join(", ")}]`),Rf(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Ti(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Ti(r)).join(",")),`Target(${s})`}(Tr(t))}; limitType=${t.limitType})`}function Of(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):me.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of vo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=qm(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,vo(s),r)||s.endAt&&!function(o,l,c){const u=qm(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,vo(s),r))}(t,e)}function VC(t){return(e,n)=>{let s=!1;for(const r of vo(t)){const i=FC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function FC(t,e,n){const s=t.field.isKeyField()?me.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?wi(c,u):_e()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
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
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return kv(this.inner)}size(){return this.innerSize}}/**
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
 */const UC=new Dn(me.comparator);function Cl(){return UC}const Gv=new Dn(me.comparator);function $a(...t){let e=Gv;for(const n of t)e=e.insert(n.key,n);return e}function zv(t){let e=Gv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function dr(){return wo()}function qv(){return wo()}function wo(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const $C=new Dn(me.comparator),WC=new Tt(me.comparator);function Pt(...t){let e=WC;for(const n of t)e=e.add(n);return e}const BC=new Tt(Re);function HC(){return BC}/**
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
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function Kv(t){return{integerValue:""+t}}function jC(t,e){return pC(e)?Kv(e):Mf(t,e)}/**
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
 */class yc{constructor(){this._=void 0}}function YC(t,e,n){return t instanceof Pl?function(r,i){const o={fields:{[Dv]:{stringValue:Nv},[Mv]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Cf(i)&&(i=Pf(i)),i&&(o.fields[Ov]=i),{mapValue:o}}(n,e):t instanceof jo?Xv(t,e):t instanceof Yo?Jv(t,e):function(r,i){const o=Qv(r,i),l=Jm(o)+Jm(r.Ie);return _h(o)&&_h(r.Ie)?Kv(l):Mf(r.serializer,l)}(t,e)}function GC(t,e,n){return t instanceof jo?Xv(t,e):t instanceof Yo?Jv(t,e):n}function Qv(t,e){return t instanceof kl?function(s){return _h(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Pl extends yc{}class jo extends yc{constructor(e){super(),this.elements=e}}function Xv(t,e){const n=Zv(e);for(const s of t.elements)n.some(r=>Kn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Yo extends yc{constructor(e){super(),this.elements=e}}function Jv(t,e){let n=Zv(e);for(const s of t.elements)n=n.filter(r=>!Kn(r,s));return{arrayValue:{values:n}}}class kl extends yc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Jm(t){return _t(t.integerValue||t.doubleValue)}function Zv(t){return kf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function zC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof jo&&r instanceof jo||s instanceof Yo&&r instanceof Yo?yi(s.elements,r.elements,Kn):s instanceof kl&&r instanceof kl?Kn(s.Ie,r.Ie):s instanceof Pl&&r instanceof Pl}(t.transform,e.transform)}class qC{constructor(e,n){this.version=e,this.transformResults=n}}class _s{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _s}static exists(e){return new _s(void 0,e)}static updateTime(e){return new _s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vc{}function ew(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nw(t.key,_s.none()):new ra(t.key,t.data,_s.none());{const n=t.data,s=Tn.empty();let r=new Tt(vt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Lr(t.key,s,new In(r.toArray()),_s.none())}}function KC(t,e,n){t instanceof ra?function(r,i,o){const l=r.value.clone(),c=eg(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(r,i,o){if(!rl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=eg(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(tw(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function To(t,e,n,s){return t instanceof ra?function(i,o,l,c){if(!rl(i.precondition,o))return l;const u=i.value.clone(),f=tg(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Lr?function(i,o,l,c){if(!rl(i.precondition,o))return l;const u=tg(i.fieldTransforms,c,o),f=o.data;return f.setAll(tw(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,l){return rl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function QC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Qv(s.transform,r||null);i!=null&&(n===null&&(n=Tn.empty()),n.set(s.field,i))}return n||null}function Zm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&yi(s,r,(i,o)=>zC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends vc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lr extends vc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function eg(t,e,n){const s=new Map;nt(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,GC(o,l,n[r]))}return s}function tg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,YC(i,o,e))}return s}class nw extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XC extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&KC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=To(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=To(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=qv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=ew(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Qe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pt())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(n,s)=>Zm(n,s))&&yi(this.baseMutations,e.baseMutations,(n,s)=>Zm(n,s))}}class xf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){nt(e.mutations.length===s.length);let r=function(){return $C}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new xf(e,n,s,r)}}/**
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
 */class ZC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var it,Ie;function eP(t){switch(t){case U.OK:return _e();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return _e()}}function tP(t){if(t===void 0)return br("GRPC error has no .code"),U.UNKNOWN;switch(t){case it.OK:return U.OK;case it.CANCELLED:return U.CANCELLED;case it.UNKNOWN:return U.UNKNOWN;case it.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case it.INTERNAL:return U.INTERNAL;case it.UNAVAILABLE:return U.UNAVAILABLE;case it.UNAUTHENTICATED:return U.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case it.NOT_FOUND:return U.NOT_FOUND;case it.ALREADY_EXISTS:return U.ALREADY_EXISTS;case it.PERMISSION_DENIED:return U.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case it.ABORTED:return U.ABORTED;case it.OUT_OF_RANGE:return U.OUT_OF_RANGE;case it.UNIMPLEMENTED:return U.UNIMPLEMENTED;case it.DATA_LOSS:return U.DATA_LOSS;default:return _e()}}(Ie=it||(it={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ef([4294967295,4294967295],0);class nP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rP(t,e){return wh(t,e.toTimestamp())}function oi(t){return nt(!!t),Qe.fromTimestamp(function(n){const s=Ar(n);return new dt(s.seconds,s.nanos)}(t))}function sw(t,e){return Th(t,e).canonicalString()}function Th(t,e){const n=function(r){return new tt(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iP(t){const e=tt.fromString(t);return nt(dP(e)),e}function Eh(t,e){return sw(t.databaseId,e.path)}function oP(t){const e=iP(t);return e.length===4?tt.emptyPath():lP(e)}function aP(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lP(t){return nt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ng(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function cP(t,e){let n;if(e instanceof ra)n={update:ng(t,e.key,e.value)};else if(e instanceof nw)n={delete:Eh(t,e.key)};else if(e instanceof Lr)n={update:ng(t,e.key,e.data),updateMask:fP(e.fieldMask)};else{if(!(e instanceof XC))return _e();n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof kl)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw _e()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:rP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e()}(t,e.precondition)),n}function uP(t,e){return t&&t.length>0?(nt(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?oi(r.updateTime):oi(i);return o.isEqual(Qe.min())&&(o=oi(i)),new qC(o,r.transformResults||[])}(n,e))):[]}function hP(t){let e=oP(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){nt(s===1);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=rw(d);return m instanceof Ks&&$v(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(R){return new Rl(Xr(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Rf(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,_=d.values||[];return new Al(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,_=d.values||[];return new Al(_,m)}(n.endAt)),OC(e,r,o,i,l,"F",c,u)}function rw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Xr(n.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Xr(n.unaryFilter.field);return ht.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return ht.create(Xr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ks.create(n.compositeFilter.filters.map(s=>rw(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function Xr(t){return vt.fromServerFormat(t.fieldPath)}function fP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class pP{constructor(e){this.Tt=e}}function mP(t){const e=hP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}/**
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
 */class gP{constructor(){this.Tn=new _P}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(qs.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(qs.min())}updateCollectionGroup(e,n,s){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class _P{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Tt(tt.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Tt(tt.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iw=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(iw,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
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
 */class Ei{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ei(0)}static Kn(){return new Ei(-1)}}/**
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
 */const rg="LruGarbageCollector",yP=1048576;function ig([t,e],[n,s]){const r=Re(t,n);return r===0?Re(e,s):r}class vP{constructor(e){this.Hn=e,this.buffer=new Tt(ig),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();ig(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wP{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(rg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){sa(n)?ne(rg,"Ignoring IndexedDB error during garbage collection: ",n):await Sf(n)}await this.er(3e5)})}}class TP{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return V.resolve(bf.ae);const s=new vP(n);return this.tr.forEachTarget(e,r=>s.Zn(r.sequenceNumber)).next(()=>this.tr.rr(e,r=>s.Zn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(sg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,r,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,l=Date.now(),this.removeTargets(e,s,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),Qr()<=ge.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function EP(t,e){return new TP(t,e)}/**
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
 */class IP{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?V.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bP{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&To(s.mutation,r,In.empty(),dt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Pt()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Pt()){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$a();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=dr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Pt()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Cl();const o=wo(),l=function(){return wo()}();return n.forEach((c,u)=>{const f=s.get(u.key);r.has(u.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),To(f.mutation,u,f.mutation.getFieldMask(),dt.now())):o.set(u.key,In.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var d;return l.set(u,new SP(f,(d=o.get(u))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(e,n){const s=wo();let r=new Dn((o,l)=>o-l),i=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=s.get(c)||In.empty();f=l.applyToLocalView(u,f),s.set(c,f);const d=(r.get(l.batchId)||Pt()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=qv();f.forEach(m=>{if(!i.has(m)){const _=ew(n.get(m),s.get(m));_!==null&&d.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return V.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):V.resolve(dr());let l=Bo,c=i;return o.next(u=>V.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Pt())).next(f=>({batchId:l,changes:zv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next(s=>{let r=$a();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=$a();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const u=function(d,m){return new _c(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,vn.newInvalidDocument(f)))});let l=$a();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&To(f.mutation,u,In.empty(),dt.now()),Of(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class AP{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:oi(r.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(r){return{name:r.name,query:mP(r.bundledQuery),readTime:oi(r.readTime)}}(n)),V.resolve()}}/**
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
 */class RP{constructor(){this.overlays=new Dn(me.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const s=dr();return V.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Et(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Rr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(s)),V.resolve()}getOverlaysForCollection(e,n,s){const r=dr(),i=n.length+1,o=new me(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return V.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Dn((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=i.get(u.largestBatchId);f===null&&(f=dr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=r)););return V.resolve(l)}Et(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Rr.get(r.largestBatchId).delete(s.key);this.Rr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ZC(n,s));let i=this.Rr.get(n);i===void 0&&(i=Pt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(s.key))}}/**
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
 */class CP{constructor(){this.sessionToken=qn.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Lf{constructor(){this.Vr=new Tt(ct.mr),this.gr=new Tt(ct.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new ct(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new ct(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new me(new tt([])),s=new ct(n,e),r=new ct(n,e+1),i=[];return this.gr.forEachInRange([s,r],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new me(new tt([])),s=new ct(n,e),r=new ct(n,e+1);let i=Pt();return this.gr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ct{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return me.comparator(e.key,n.key)||Re(e.Cr,n.Cr)}static pr(e,n){return Re(e.Cr,n.Cr)||me.comparator(e.key,n.key)}}/**
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
 */class PP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Tt(ct.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JC(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Mr=this.Mr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Nr(s),i=r<0?0:r;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Af:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ct(n,0),r=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([s,r],o=>{const l=this.Or(o.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Tt(Re);return n.forEach(r=>{const i=new ct(r,0),o=new ct(r,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{s=s.add(l.Cr)})}),V.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;me.isDocumentKey(i)||(i=i.child(""));const o=new ct(new me(i),0);let l=new Tt(Re);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(s=>{const r=this.Or(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){nt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return V.forEach(n.mutations,r=>{const i=new ct(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new ct(n,0),r=this.Mr.firstAfterOrEqual(s);return V.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kP{constructor(e){this.kr=e,this.docs=function(){return new Dn(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return V.resolve(s?s.document.mutableCopy():vn.newInvalidDocument(n))}getEntries(e,n){let s=Cl();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():vn.newInvalidDocument(r))}),V.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Cl();const o=n.path,l=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uC(cC(f),s)<=0||(r.has(f.key)||Of(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,s,r){_e()}qr(e,n){return V.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new NP(this)}getSize(e){return V.resolve(this.size)}}class NP extends IP{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(s)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class DP{constructor(e){this.persistence=e,this.Qr=new xr(n=>Nf(n),Df),this.lastRemoteSnapshotVersion=Qe.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Lf,this.targetCount=0,this.Kr=Ei.Un()}forEachTarget(e,n){return this.Qr.forEach((s,r)=>n(r)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),V.waitFor(i).next(()=>r)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return V.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),V.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return V.resolve(s)}containsKey(e,n){return V.resolve(this.Ur.containsKey(n))}}/**
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
 */class ow{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new bf(0),this.zr=!1,this.zr=!0,this.jr=new CP,this.referenceDelegate=e(this),this.Hr=new DP(this),this.indexManager=new gP,this.remoteDocumentCache=function(r){return new kP(r)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new pP(n),this.Yr=new AP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new PP(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){ne("MemoryPersistence","Starting transaction:",e);const r=new OP(this.Gr.next());return this.referenceDelegate.Zr(),s(r).next(i=>this.referenceDelegate.Xr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}ei(e,n){return V.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class OP extends fC{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.ti=new Lf,this.ni=null}static ri(e){return new Vf(e)}get ii(){if(this.ni)return this.ni;throw _e()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),V.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(r=>this.ii.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ii.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,s=>{const r=me.fromPath(s);return this.si(e,r).next(i=>{i||n.removeEntry(r,Qe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Nl{constructor(e,n){this.persistence=e,this.oi=new xr(s=>mC(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=EP(this,n)}static ri(e,n){return new Nl(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(s,r)=>this.ar(e,s,r).next(i=>i?V.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,o=>this.ar(e,o,n).next(l=>{l||(s++,i.removeEntry(o,Qe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=nl(e.data.value)),n}ar(e,n,s){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.oi.get(n);return V.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ff{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=r}static Yi(e,n){let s=Pt(),r=Pt();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ff(e,n.fromCache,s,r)}}/**
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
 */class MP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return CA()?8:dC(Nn())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MP;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,s,r){return s.documentReadCount<this.es?(Qr()<=ge.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Qr()<=ge.DEBUG&&ne("QueryEngine","Query:",Ji(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ts*r?(Qr()<=ge.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(n))):V.resolve())}rs(e,n){if(Xm(n))return V.resolve(null);let s=Tr(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=vh(n,null,"F"),s=Tr(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Pt(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,vh(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,s,r){return Xm(n)||r.isEqual(Qe.min())?V.resolve(null):this.ns.getDocuments(e,s).next(i=>{const o=this.cs(n,i);return this.ls(n,o,s,r)?V.resolve(null):(Qr()<=ge.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ji(n)),this.hs(e,o,n,lC(r,Bo)).next(l=>l))})}cs(e,n){let s=new Tt(VC(e));return n.forEach((r,i)=>{Of(e,i)&&(s=s.add(i))}),s}ls(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,n,s){return Qr()<=ge.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.ns.getDocumentsMatchingQuery(e,n,qs.min(),s)}hs(e,n,s,r){return this.ns.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const LP="LocalStore";class VP{constructor(e,n,s,r){this.persistence=e,this.Ps=n,this.serializer=r,this.Ts=new Dn(Re),this.Is=new xr(i=>Nf(i),Df),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bP(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function FP(t,e,n,s){return new VP(t,e,n,s)}async function aw(t,e){const n=Be(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=Pt();for(const u of r){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function UP(t,e){const n=Be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let _=V.resolve();return m.forEach(R=>{_=_.next(()=>f.getEntry(c,R)).next(N=>{const D=u.docVersions.get(R);nt(D!==null),N.version.compareTo(D)<0&&(d.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=Pt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function $P(t){const e=Be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function WP(t,e){const n=Be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Af),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class og{constructor(){this.activeTargetIds=HC()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BP{constructor(){this.ho=new og,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new og,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HP{To(e){}shutdown(){}}/**
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
 */const ag="ConnectivityMonitor";class lg{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne(ag,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne(ag,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wa=null;function Ih(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
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
 */const Au="RestConnection",jP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${r}`,this.wo=this.databaseId.database===Sl?`project_id=${s}`:`project_id=${s}&database_id=${r}`}So(e,n,s,r,i){const o=Ih(),l=this.bo(e,n.toUriEncodedString());ne(Au,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,r,i),this.vo(e,l,c,s).then(u=>(ne(Au,`Received RPC '${e}' ${o}: `,u),u),u=>{throw gc(Au,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",s),u})}Co(e,n,s,r,i,o){return this.So(e,n,s,r,i)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}bo(e,n){const s=jP[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class GP{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const At="WebChannelConnection";class zP extends YP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,r){const i=Ih();return new Promise((o,l)=>{const c=new Ev;c.setWithCredentials(!0),c.listenOnce(Iv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tl.NO_ERROR:const f=c.getResponseJson();ne(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case tl.TIMEOUT:ne(At,`RPC '${e}' ${i} timed out`),l(new le(U.DEADLINE_EXCEEDED,"Request time out"));break;case tl.HTTP_ERROR:const d=c.getStatus();if(ne(At,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const R=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(j)>=0?j:U.UNKNOWN}(_.status);l(new le(R,_.message))}else l(new le(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new le(U.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ne(At,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);ne(At,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Wo(e,n,s){const r=Ih(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Av(),l=bv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");ne(At,`Creating RPC '${e}' stream ${r}: ${f}`,c);const d=o.createWebChannel(f,c);let m=!1,_=!1;const R=new GP({Fo:D=>{_?ne(At,`Not sending because RPC '${e}' stream ${r} is closed:`,D):(m||(ne(At,`Opening RPC '${e}' stream ${r} transport.`),d.open(),m=!0),ne(At,`RPC '${e}' stream ${r} sending:`,D),d.send(D))},Mo:()=>d.close()}),N=(D,j,B)=>{D.listen(j,H=>{try{B(H)}catch(W){setTimeout(()=>{throw W},0)}})};return N(d,oo.EventType.OPEN,()=>{_||(ne(At,`RPC '${e}' stream ${r} transport opened.`),R.Qo())}),N(d,oo.EventType.CLOSE,()=>{_||(_=!0,ne(At,`RPC '${e}' stream ${r} transport closed`),R.Uo())}),N(d,oo.EventType.ERROR,D=>{_||(_=!0,gc(At,`RPC '${e}' stream ${r} transport errored:`,D),R.Uo(new le(U.UNAVAILABLE,"The operation could not be completed")))}),N(d,oo.EventType.MESSAGE,D=>{var j;if(!_){const B=D.data[0];nt(!!B);const H=B,W=(H==null?void 0:H.error)||((j=H[0])===null||j===void 0?void 0:j.error);if(W){ne(At,`RPC '${e}' stream ${r} received error:`,W);const ue=W.status;let pe=function(E){const S=it[E];if(S!==void 0)return tP(S)}(ue),I=W.message;pe===void 0&&(pe=U.INTERNAL,I="Unknown error status: "+ue+" with message "+W.message),_=!0,R.Uo(new le(pe,I)),d.close()}else ne(At,`RPC '${e}' stream ${r} received:`,B),R.Ko(B)}}),N(l,Sv.STAT_EVENT,D=>{D.stat===fh.PROXY?ne(At,`RPC '${e}' stream ${r} detected buffering proxy`):D.stat===fh.NOPROXY&&ne(At,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function Ru(){return typeof document<"u"?document:null}/**
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
 */function wc(t){return new nP(t,!0)}/**
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
 */class lw{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),r=Math.max(0,n-s);r>0&&ne("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const cg="PersistentStream";class qP{constructor(e,n,s,r,i,o,l,c){this.Ti=e,this.n_=s,this.r_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new lw(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.i_===n&&this.V_(s,r)},s=>{e(()=>{const r=new le(U.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(r)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(r=>{s(()=>this.m_(r))}),this.stream.onMessage(r=>{s(()=>++this.__==1?this.g_(r):this.onNext(r))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ne(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KP extends qP{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return nt(!!e.streamToken),this.lastStreamToken=e.streamToken,nt(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){nt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=uP(e.writeResults,e.commitTime),s=oi(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=aP(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>cP(this.serializer,s))};this.I_(n)}}/**
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
 */class QP{}class XP extends QP{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Th(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(U.UNKNOWN,i.toString())})}Co(e,n,s,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,Th(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(U.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class JP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(br(n),this.N_=!1):ne("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ia="RemoteStore";class ZP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{s.enqueueAndForget(async()=>{aa(this)&&(ne(ia,"Restarting streams for network reachability change."),await async function(c){const u=Be(c);u.W_.add(4),await oa(u),u.j_.set("Unknown"),u.W_.delete(4),await Tc(u)}(this))})}),this.j_=new JP(s,r)}}async function Tc(t){if(aa(t))for(const e of t.G_)await e(!0)}async function oa(t){for(const e of t.G_)await e(!1)}function aa(t){return Be(t).W_.size===0}async function cw(t,e,n){if(!sa(e))throw e;t.W_.add(1),await oa(t),t.j_.set("Offline"),n||(n=()=>$P(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne(ia,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Tc(t)})}function uw(t,e){return e().catch(n=>cw(t,n,e))}async function Ec(t){const e=Be(t),n=Qs(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Af;for(;ek(e);)try{const r=await WP(e.localStore,s);if(r===null){e.U_.length===0&&n.P_();break}s=r.batchId,tk(e,r)}catch(r){await cw(e,r)}hw(e)&&fw(e)}function ek(t){return aa(t)&&t.U_.length<10}function tk(t,e){t.U_.push(e);const n=Qs(t);n.c_()&&n.S_&&n.b_(e.mutations)}function hw(t){return aa(t)&&!Qs(t).u_()&&t.U_.length>0}function fw(t){Qs(t).start()}async function nk(t){Qs(t).C_()}async function sk(t){const e=Qs(t);for(const n of t.U_)e.b_(n.mutations)}async function rk(t,e,n){const s=t.U_.shift(),r=xf.from(s,e,n);await uw(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ec(t)}async function ik(t,e){e&&Qs(t).S_&&await async function(s,r){if(function(o){return eP(o)&&o!==U.ABORTED}(r.code)){const i=s.U_.shift();Qs(s).h_(),await uw(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ec(s)}}(t,e),hw(t)&&fw(t)}async function ug(t,e){const n=Be(t);n.asyncQueue.verifyOperationInProgress(),ne(ia,"RemoteStore received new credentials");const s=aa(n);n.W_.add(3),await oa(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Tc(n)}async function ok(t,e){const n=Be(t);e?(n.W_.delete(2),await Tc(n)):e||(n.W_.add(2),await oa(n),n.j_.set("Unknown"))}function Qs(t){return t.Y_||(t.Y_=function(n,s,r){const i=Be(n);return i.M_(),new KP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:nk.bind(null,t),Lo:ik.bind(null,t),D_:sk.bind(null,t),v_:rk.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Ec(t)):(await t.Y_.stop(),t.U_.length>0&&(ne(ia,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class Uf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Uf(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dw(t,e){if(br("AsyncQueue",`${e}: ${t}`),sa(t))return new le(U.UNAVAILABLE,`${e}: ${t}`);throw t}class ak{constructor(){this.queries=hg(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const r=Be(n),i=r.queries;r.queries=hg(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(s)})})(this,new le(U.ABORTED,"Firestore shutting down"))}}function hg(){return new xr(t=>Yv(t),jv)}function lk(t){t.ia.forEach(e=>{e.next()})}var fg,dg;(dg=fg||(fg={}))._a="default",dg.Cache="cache";const ck="SyncEngine";class uk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new xr(l=>Yv(l),jv),this.qa=new Map,this.Qa=new Set,this.$a=new Dn(me.comparator),this.Ua=new Map,this.Ka=new Lf,this.Wa={},this.Ga=new Map,this.za=Ei.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function hk(t,e,n){const s=mk(t);try{const r=await function(o,l){const c=Be(o),u=dt.now(),f=l.reduce((_,R)=>_.add(R.key),Pt());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Cl(),N=Pt();return c.ds.getEntries(_,f).next(D=>{R=D,R.forEach((j,B)=>{B.isValidDocument()||(N=N.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(D=>{d=D;const j=[];for(const B of l){const H=QC(B,d.get(B.key).overlayedDocument);H!=null&&j.push(new Lr(B.key,H,Vv(H.value.mapValue),_s.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,j,l)}).next(D=>{m=D;const j=D.applyToLocalDocumentSet(d,N);return c.documentOverlayCache.saveOverlays(_,D.batchId,j)})}).then(()=>({batchId:m.batchId,changes:zv(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Dn(Re)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(s,r.batchId,n),await Ic(s,r.changes),await Ec(s.remoteStore)}catch(r){const i=dw(r,"Failed to persist write");n.reject(i)}}function pg(t,e,n){const s=Be(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=Be(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.ta)m.sa(l)&&(u=!0)}),u&&lk(c)}(s.eventManager,e),r.length&&s.La.p_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function fk(t,e){const n=Be(t),s=e.batch.batchId;try{const r=await UP(n.localStore,e);mw(n,s,null),pw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ic(n,r)}catch(r){await Sf(r)}}async function dk(t,e,n){const s=Be(t);try{const r=await function(o,l){const c=Be(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(nt(d!==null),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(s.localStore,e);mw(s,e,n),pw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ic(s,r)}catch(r){await Sf(r)}}function pw(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function mw(t,e,n){const s=Be(t);let r=s.Wa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Wa[s.currentUser.toKey()]=r}}async function Ic(t,e,n){const s=Be(t),r=[],i=[],o=[];s.ka.isEmpty()||(s.ka.forEach((l,c)=>{o.push(s.Ha(c,e,n).then(u=>{var f;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=Ff.Yi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.La.p_(r),await async function(c,u){const f=Be(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>V.forEach(u,m=>V.forEach(m.Hi,_=>f.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>V.forEach(m.Ji,_=>f.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!sa(d))throw d;ne(LP,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const _=f.Ts.get(m),R=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(R);f.Ts=f.Ts.insert(m,N)}}}(s.localStore,i))}async function pk(t,e){const n=Be(t);if(!n.currentUser.isEqual(e)){ne(ck,"User change. New user:",e.toKey());const s=await aw(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new le(U.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ic(n,s.Rs)}}function mk(t){const e=Be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dk.bind(null,e),e}class Dl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return FP(this.persistence,new xP,e.initialUser,this.serializer)}Xa(e){return new ow(Vf.ri,this.serializer)}Za(e){return new BP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dl.provider={build:()=>new Dl};class gk extends Dl{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){nt(this.persistence.referenceDelegate instanceof Nl);const s=this.persistence.referenceDelegate.garbageCollector;return new wP(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new ow(s=>Nl.ri(s,n),this.serializer)}}class Sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pk.bind(null,this.syncEngine),await ok(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ak}()}createDatastore(e){const n=wc(e.databaseInfo.databaseId),s=function(i){return new zP(i)}(e.databaseInfo);return function(i,o,l,c){return new XP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new ZP(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pg(this.syncEngine,n,0),function(){return lg.D()?new lg:new HP}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,f){const d=new uk(r,i,o,l,c,u);return f&&(d.ja=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=Be(r);ne(ia,"RemoteStore shutting down."),i.W_.add(5),await oa(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Sh.provider={build:()=>new Sh};/**
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
 */const Xs="FirestoreClient";class _k{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=Cv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ne(Xs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ne(Xs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=dw(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Cu(t,e){t.asyncQueue.verifyOperationInProgress(),ne(Xs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await aw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yk(t);ne(Xs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>ug(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>ug(e.remoteStore,r)),t._onlineComponents=e}async function yk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne(Xs,"Using user provided OfflineComponentProvider");try{await Cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===U.FAILED_PRECONDITION||r.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;gc("Error using user provided cache. Falling back to memory cache: "+n),await Cu(t,new Dl)}}else ne(Xs,"Using default OfflineComponentProvider"),await Cu(t,new gk(void 0));return t._offlineComponents}async function vk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne(Xs,"Using user provided OnlineComponentProvider"),await mg(t,t._uninitializedComponentsProvider._online)):(ne(Xs,"Using default OnlineComponentProvider"),await mg(t,new Sh))),t._onlineComponents}function wk(t){return vk(t).then(e=>e.syncEngine)}/**
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
 */function gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const gg=new Map;/**
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
 */function _w(t,e,n){if(!n)throw new le(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tk(t,e,n,s){if(e===!0&&s===!0)throw new le(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!me.isDocumentKey(t))throw new le(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yg(t){if(me.isDocumentKey(t))throw new le(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $f(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function yw(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$f(t);throw new le(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const vw="firestore.googleapis.com",vg=!0;class wg{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new le(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vw,this.ssl=vg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:vg;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yP)throw new le(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new JR;switch(s.type){case"firstParty":return new nC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=gg.get(n);s&&(ne("ComponentProvider","Removing Datastore"),gg.delete(n),s.terminate())}(this),Promise.resolve()}}function Ek(t,e,n,s={}){var r;const i=(t=yw(t,Sc))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==vw&&i.host!==l&&gc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:s});if(!$o(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,f;if(typeof s.mockUserToken=="string")u=s.mockUserToken,f=Rt.MOCK_USER;else{u=SA(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const d=s.mockUserToken.sub||s.mockUserToken.user_id;if(!d)throw new le(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Rt(d)}t._authCredentials=new ZR(new Rv(u,f))}}/**
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
 */class Wf{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wf(this.firestore,e,this._query)}}class ys{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ys(this.firestore,e,this._key)}}class js extends Wf{constructor(e,n,s){super(e,n,MC(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ys(this.firestore,null,new me(e))}withConverter(e){return new js(this.firestore,e,this._path)}}function Ik(t,e,...n){if(t=dn(t),_w("collection","path",e),t instanceof Sc){const s=tt.fromString(e,...n);return yg(s),new js(t,null,s)}{if(!(t instanceof ys||t instanceof js))throw new le(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(tt.fromString(e,...n));return yg(s),new js(t.firestore,null,s)}}function Sk(t,e,...n){if(t=dn(t),arguments.length===1&&(e=Cv.newId()),_w("doc","path",e),t instanceof Sc){const s=tt.fromString(e,...n);return _g(s),new ys(t,null,new me(s))}{if(!(t instanceof ys||t instanceof js))throw new le(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(tt.fromString(e,...n));return _g(s),new ys(t.firestore,t instanceof js?t.converter:null,new me(s))}}/**
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
 */const Tg="AsyncQueue";class Eg{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new lw(this,"async_queue_retry"),this.Su=()=>{const s=Ru();s&&ne(Tg,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=Ru();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Ru();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new wr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!sa(e))throw e;ne(Tg,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw br("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const r=Uf.createAndSchedule(this,e,n,s,i=>this.Fu(i));return this.fu.push(r),r}Du(){this.gu&&_e()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class ww extends Sc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Eg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eg(e),this._firestoreClient=void 0,await e}}}function bk(t,e){const n=typeof t=="object"?t:vv(),s=typeof t=="string"?t:Sl,r=na(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=EA("firestore");i&&Ek(r,...i)}return r}function Ak(t){if(t._terminated)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Rk(t),t._firestoreClient}function Rk(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,f){return new vC(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,gw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new _k(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Go(qn.fromBase64String(e))}catch(n){throw new le(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Go(qn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Tw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ew{constructor(e){this._methodName=e}}/**
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
 */class Iw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */class Sw{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Ck=/^__.*__$/;class Pk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}function bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Bf{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Bf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ku({path:s,Qu:!1});return r.$u(e),r}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ku({path:s,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ol(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(bw(this.Lu)&&Ck.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class kk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||wc(e)}ju(e,n,s,r=!1){return new Bf({Lu:e,methodName:n,zu:s,path:vt.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nk(t){const e=t._freezeSettings(),n=wc(t._databaseId);return new kk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dk(t,e,n,s,r,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,r);Pw("Data must be an object, but it was:",o,s);const l=Rw(s,o);let c,u;if(i.merge)c=new In(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=Ok(e,d,n);if(!o.contains(m))throw new le(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Lk(f,m)||f.push(m)}c=new In(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Pk(new Tn(l),c,u)}function Aw(t,e){if(Cw(t=dn(t)))return Pw("Unsupported field value:",e,t),Rw(t,e);if(t instanceof Ew)return function(s,r){if(!bw(r.Lu))throw r.Wu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Wu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=Aw(l,r.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=dn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return jC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=dt.fromDate(s);return{timestampValue:wh(r.serializer,i)}}if(s instanceof dt){const i=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wh(r.serializer,i)}}if(s instanceof Iw)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Go)return{bytesValue:sP(r.serializer,s._byteString)};if(s instanceof ys){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sw(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Sw)return function(o,l){return{mapValue:{fields:{[xv]:{stringValue:Lv},[mh]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Mf(l.serializer,u)})}}}}}}(s,r);throw r.Wu(`Unsupported field value: ${$f(s)}`)}(t,e)}function Rw(t,e){const n={};return kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(s,r)=>{const i=Aw(r,e.qu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Cw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Iw||t instanceof Go||t instanceof ys||t instanceof Ew||t instanceof Sw)}function Pw(t,e,n){if(!Cw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=$f(n);throw s==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+s)}}function Ok(t,e,n){if((e=dn(e))instanceof Tw)return e._internalPath;if(typeof e=="string")return xk(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mk=new RegExp("[~\\*/\\[\\]]");function xk(t,e,n){if(e.search(Mk)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tw(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new le(U.INVALID_ARGUMENT,l+t+c)}function Lk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function Vk(t,e,n){let s;return s=t?t.toFirestore(e):e,s}function Fk(t,e){const n=yw(t.firestore,ww),s=Sk(t),r=Vk(t.converter,e);return Uk(n,[Dk(Nk(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,_s.exists(!1))]).then(()=>s)}function Uk(t,e){return function(s,r){const i=new wr;return s.asyncQueue.enqueueAndForget(async()=>hk(await wk(s),r,i)),i.promise}(Ak(t),e)}(function(e,n=!0){(function(r){Ci=r})(Ri),Kt(new Ht("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new ww(new eC(s.getProvider("auth-internal")),new sC(o,s.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(u.options.projectId,f)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),wt(Lm,Vm,e),wt(Lm,Vm,"esm2017")})();var $k="firebase",Wk="11.6.0";/**
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
 */wt($k,Wk,"app");const kw="@firebase/installations",Hf="0.6.13";/**
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
 */const Nw=1e4,Dw=`w:${Hf}`,Ow="FIS_v2",Bk="https://firebaseinstallations.googleapis.com/v1",Hk=60*60*1e3,jk="installations",Yk="Installations";/**
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
 */const Gk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Cr=new nr(jk,Yk,Gk);function Mw(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
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
 */function xw({projectId:t}){return`${Bk}/projects/${t}/installations`}function Lw(t){return{token:t.token,requestStatus:2,expiresIn:qk(t.expiresIn),creationTime:Date.now()}}async function Vw(t,e){const s=(await e.json()).error;return Cr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Fw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zk(t,{refreshToken:e}){const n=Fw(t);return n.append("Authorization",Kk(e)),n}async function Uw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qk(t){return Number(t.replace("s","000"))}function Kk(t){return`${Ow} ${t}`}/**
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
 */async function Qk({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=xw(t),r=Fw(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Ow,appId:t.appId,sdkVersion:Dw},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await Uw(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Lw(u.authToken)}}else throw await Vw("Create Installation",c)}/**
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
 */function $w(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Xk(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Jk=/^[cdef][\w-]{21}$/,bh="";function Zk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eN(t);return Jk.test(n)?n:bh}catch{return bh}}function eN(t){return Xk(t).substr(0,22)}/**
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
 */function bc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ww=new Map;function Bw(t,e){const n=bc(t);Hw(n,e),tN(n,e)}function Hw(t,e){const n=Ww.get(t);if(n)for(const s of n)s(e)}function tN(t,e){const n=nN();n&&n.postMessage({key:t,fid:e}),sN()}let pr=null;function nN(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=t=>{Hw(t.data.key,t.data.fid)}),pr}function sN(){Ww.size===0&&pr&&(pr.close(),pr=null)}/**
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
 */const rN="firebase-installations-database",iN=1,Pr="firebase-installations-store";let Pu=null;function jf(){return Pu||(Pu=_v(rN,iN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),Pu}async function Ml(t,e){const n=bc(t),r=(await jf()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Bw(t,e.fid),e}async function jw(t){const e=bc(t),s=(await jf()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function Ac(t,e){const n=bc(t),r=(await jf()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&Bw(t,l.fid),l}/**
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
 */async function Yf(t){let e;const n=await Ac(t.appConfig,s=>{const r=oN(s),i=aN(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===bh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function oN(t){const e=t||{fid:Zk(),registrationStatus:0};return Yw(e)}function aN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Cr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=lN(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cN(t)}:{installationEntry:e}}async function lN(t,e){try{const n=await Qk(t,e);return Ml(t.appConfig,n)}catch(n){throw Mw(n)&&n.customData.serverCode===409?await jw(t.appConfig):await Ml(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cN(t){let e=await Ig(t.appConfig);for(;e.registrationStatus===1;)await $w(100),e=await Ig(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Yf(t);return s||n}return e}function Ig(t){return Ac(t,e=>{if(!e)throw Cr.create("installation-not-found");return Yw(e)})}function Yw(t){return uN(t)?{fid:t.fid,registrationStatus:0}:t}function uN(t){return t.registrationStatus===1&&t.registrationTime+Nw<Date.now()}/**
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
 */async function hN({appConfig:t,heartbeatServiceProvider:e},n){const s=fN(t,n),r=zk(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Dw,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await Uw(()=>fetch(s,l));if(c.ok){const u=await c.json();return Lw(u)}else throw await Vw("Generate Auth Token",c)}function fN(t,{fid:e}){return`${xw(t)}/${e}/authTokens:generate`}/**
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
 */async function Gf(t,e=!1){let n;const s=await Ac(t.appConfig,i=>{if(!Gw(i))throw Cr.create("not-registered");const o=i.authToken;if(!e&&mN(o))return i;if(o.requestStatus===1)return n=dN(t,e),i;{if(!navigator.onLine)throw Cr.create("app-offline");const l=_N(i);return n=pN(t,l),l}});return n?await n:s.authToken}async function dN(t,e){let n=await Sg(t.appConfig);for(;n.authToken.requestStatus===1;)await $w(100),n=await Sg(t.appConfig);const s=n.authToken;return s.requestStatus===0?Gf(t,e):s}function Sg(t){return Ac(t,e=>{if(!Gw(e))throw Cr.create("not-registered");const n=e.authToken;return yN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pN(t,e){try{const n=await hN(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ml(t.appConfig,s),n}catch(n){if(Mw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jw(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ml(t.appConfig,s)}throw n}}function Gw(t){return t!==void 0&&t.registrationStatus===2}function mN(t){return t.requestStatus===2&&!gN(t)}function gN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Hk}function _N(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yN(t){return t.requestStatus===1&&t.requestTime+Nw<Date.now()}/**
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
 */async function vN(t){const e=t,{installationEntry:n,registrationPromise:s}=await Yf(e);return s?s.catch(console.error):Gf(e).catch(console.error),n.fid}/**
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
 */async function wN(t,e=!1){const n=t;return await TN(n),(await Gf(n,e)).token}async function TN(t){const{registrationPromise:e}=await Yf(t);e&&await e}/**
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
 */function EN(t){if(!t||!t.options)throw ku("App Configuration");if(!t.name)throw ku("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ku(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ku(t){return Cr.create("missing-app-config-values",{valueName:t})}/**
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
 */const zw="installations",IN="installations-internal",SN=t=>{const e=t.getProvider("app").getImmediate(),n=EN(e),s=na(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},bN=t=>{const e=t.getProvider("app").getImmediate(),n=na(e,zw).getImmediate();return{getId:()=>vN(n),getToken:r=>wN(n,r)}};function AN(){Kt(new Ht(zw,SN,"PUBLIC")),Kt(new Ht(IN,bN,"PRIVATE"))}AN();wt(kw,Hf);wt(kw,Hf,"esm2017");/**
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
 */const xl="analytics",RN="firebase_id",CN="origin",PN=60*1e3,kN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zf="https://www.googletagmanager.com/gtag/js";/**
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
 */const qt=new Ai("@firebase/analytics");/**
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
 */const NN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tn=new nr("analytics","Analytics",NN);/**
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
 */function DN(t){if(!t.startsWith(zf)){const e=tn.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function qw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ON(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MN(t,e){const n=ON("firebase-js-sdk-policy",{createScriptURL:DN}),s=document.createElement("script"),r=`${zf}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function xN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function LN(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await qw(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){qt.error(l)}t("config",r,i)}async function VN(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await qw(n);for(const c of o){const u=l.find(d=>d.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){qt.error(i)}}function FN(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[l,c]=o;await VN(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await LN(t,e,n,s,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){qt.error(l)}}return r}function UN(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=FN(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function $N(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zf)&&n.src.includes(t))return n;return null}/**
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
 */const WN=30,BN=1e3;class HN{constructor(e={},n=BN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Kw=new HN;function jN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YN(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:jN(s)},i=kN.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(l=c.error.message)}catch{}throw tn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function GN(t,e=Kw,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw tn.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw tn.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new KN;return setTimeout(async()=>{l.abort()},PN),Qw({appId:s,apiKey:r,measurementId:i},o,l,e)}async function Qw(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Kw){var i;const{appId:o,measurementId:l}=t;try{await zN(s,e)}catch(c){if(l)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw c}try{const c=await YN(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!qN(u)){if(r.deleteThrottleMetadata(o),l)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw c}const f=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Am(n,r.intervalMillis,WN):Am(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(o,d),qt.debug(`Calling attemptFetch again in ${f} millis`),Qw(t,d,s,r)}}function zN(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qN(t){if(!(t instanceof Ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QN(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function XN(){if(vf())try{await dv()}catch(t){return qt.warn(tn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qt.warn(tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function JN(t,e,n,s,r,i,o){var l;const c=GN(t);c.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>qt.error(_)),e.push(c);const u=XN().then(_=>{if(_)return s.getId()}),[f,d]=await Promise.all([c,u]);$N(i)||MN(i,f.measurementId),r("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[CN]="firebase",m.update=!0,d!=null&&(m[RN]=d),r("config",f.measurementId,m),f.measurementId}/**
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
 */class ZN{constructor(e){this.app=e}_delete(){return delete Eo[this.app.options.appId],Promise.resolve()}}let Eo={},bg=[];const Ag={};let Nu="dataLayer",eD="gtag",Rg,Xw,Cg=!1;function tD(){const t=[];if(hv()&&t.push("This is a browser extension environment."),PA()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=tn.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function nD(t,e,n){tD();const s=t.options.appId;if(!s)throw tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tn.create("no-api-key");if(Eo[s]!=null)throw tn.create("already-exists",{id:s});if(!Cg){xN(Nu);const{wrappedGtag:i,gtagCore:o}=UN(Eo,bg,Ag,Nu,eD);Xw=i,Rg=o,Cg=!0}return Eo[s]=JN(t,bg,Ag,e,Rg,Nu,n),new ZN(t)}function sD(t=vv()){t=dn(t);const e=na(t,xl);return e.isInitialized()?e.getImmediate():rD(t)}function rD(t,e={}){const n=na(t,xl);if(n.isInitialized()){const r=n.getImmediate();if($o(e,n.getOptions()))return r;throw tn.create("already-initialized")}return n.initialize({options:e})}function iD(t,e,n,s){t=dn(t),QN(Xw,Eo[t.app.options.appId],e,n,s).catch(r=>qt.error(r))}const Pg="@firebase/analytics",kg="0.10.12";function oD(){Kt(new Ht(xl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return nD(s,r,n)},"PUBLIC")),Kt(new Ht("analytics-internal",t,"PRIVATE")),wt(Pg,kg),wt(Pg,kg,"esm2017");function t(e){try{const n=e.getProvider(xl).getImmediate();return{logEvent:(s,r,i)=>iD(n,s,r,i)}}catch(n){throw tn.create("interop-component-reg-failed",{reason:n})}}}oD();const aD={apiKey:"AIzaSyAJpA0XbWrYnCA_E_J9tnPN9oH0H8E12hk",authDomain:"landing-page-a6a08.firebaseapp.com",databaseURL:"https://landing-page-a6a08-default-rtdb.europe-west1.firebasedatabase.app",projectId:"landing-page-a6a08",storageBucket:"landing-page-a6a08.firebasestorage.app",messagingSenderId:"200230849264",appId:"1:200230849264:web:318f9b925acfb742ddd035",measurementId:"G-QE7W9JBH68"},qf=yv(aD);sD(qf);const lD=bk(qf);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Jw;function J(){return Jw.apply(null,arguments)}function cD(t){Jw=t}function On(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Er(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kf(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(ke(t,e))return!1;return!0}function Yt(t){return t===void 0}function Is(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function la(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Zw(t,e){var n=[],s,r=t.length;for(s=0;s<r;++s)n.push(e(t[s],s));return n}function Fs(t,e){for(var n in e)ke(e,n)&&(t[n]=e[n]);return ke(e,"toString")&&(t.toString=e.toString),ke(e,"valueOf")&&(t.valueOf=e.valueOf),t}function Jn(t,e,n,s){return ET(t,e,n,s,!0).utc()}function uD(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function de(t){return t._pf==null&&(t._pf=uD()),t._pf}var Ah;Array.prototype.some?Ah=Array.prototype.some:Ah=function(t){var e=Object(this),n=e.length>>>0,s;for(s=0;s<n;s++)if(s in e&&t.call(this,e[s],s,e))return!0;return!1};function Qf(t){var e=null,n=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(e=de(t),n=Ah.call(e.parsedDateParts,function(r){return r!=null}),s=e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n),t._strict&&(s=s&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function Rc(t){var e=Jn(NaN);return t!=null?Fs(de(e),t):de(e).userInvalidated=!0,e}var Ng=J.momentProperties=[],Du=!1;function Xf(t,e){var n,s,r,i=Ng.length;if(Yt(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),Yt(e._i)||(t._i=e._i),Yt(e._f)||(t._f=e._f),Yt(e._l)||(t._l=e._l),Yt(e._strict)||(t._strict=e._strict),Yt(e._tzm)||(t._tzm=e._tzm),Yt(e._isUTC)||(t._isUTC=e._isUTC),Yt(e._offset)||(t._offset=e._offset),Yt(e._pf)||(t._pf=de(e)),Yt(e._locale)||(t._locale=e._locale),i>0)for(n=0;n<i;n++)s=Ng[n],r=e[s],Yt(r)||(t[s]=r);return t}function ca(t){Xf(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Du===!1&&(Du=!0,J.updateOffset(this),Du=!1)}function Mn(t){return t instanceof ca||t!=null&&t._isAMomentObject!=null}function eT(t){J.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function mn(t,e){var n=!0;return Fs(function(){if(J.deprecationHandler!=null&&J.deprecationHandler(null,t),n){var s=[],r,i,o,l=arguments.length;for(i=0;i<l;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(o in arguments[0])ke(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[i];s.push(r)}eT(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),n=!1}return e.apply(this,arguments)},e)}var Dg={};function tT(t,e){J.deprecationHandler!=null&&J.deprecationHandler(t,e),Dg[t]||(eT(e),Dg[t]=!0)}J.suppressDeprecationWarnings=!1;J.deprecationHandler=null;function Zn(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function hD(t){var e,n;for(n in t)ke(t,n)&&(e=t[n],Zn(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Rh(t,e){var n=Fs({},t),s;for(s in e)ke(e,s)&&(Er(t[s])&&Er(e[s])?(n[s]={},Fs(n[s],t[s]),Fs(n[s],e[s])):e[s]!=null?n[s]=e[s]:delete n[s]);for(s in t)ke(t,s)&&!ke(e,s)&&Er(t[s])&&(n[s]=Fs({},n[s]));return n}function Jf(t){t!=null&&this.set(t)}var Ch;Object.keys?Ch=Object.keys:Ch=function(t){var e,n=[];for(e in t)ke(t,e)&&n.push(e);return n};var fD={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function dD(t,e,n){var s=this._calendar[t]||this._calendar.sameElse;return Zn(s)?s.call(e,n):s}function Qn(t,e,n){var s=""+Math.abs(t),r=e-s.length,i=t>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+s}var Zf=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ba=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ou={},ai={};function re(t,e,n,s){var r=s;typeof s=="string"&&(r=function(){return this[s]()}),t&&(ai[t]=r),e&&(ai[e[0]]=function(){return Qn(r.apply(this,arguments),e[1],e[2])}),n&&(ai[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function pD(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function mD(t){var e=t.match(Zf),n,s;for(n=0,s=e.length;n<s;n++)ai[e[n]]?e[n]=ai[e[n]]:e[n]=pD(e[n]);return function(r){var i="",o;for(o=0;o<s;o++)i+=Zn(e[o])?e[o].call(r,t):e[o];return i}}function il(t,e){return t.isValid()?(e=nT(e,t.localeData()),Ou[e]=Ou[e]||mD(e),Ou[e](t)):t.localeData().invalidDate()}function nT(t,e){var n=5;function s(r){return e.longDateFormat(r)||r}for(Ba.lastIndex=0;n>=0&&Ba.test(t);)t=t.replace(Ba,s),Ba.lastIndex=0,n-=1;return t}var gD={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function _D(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(Zf).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[t])}var yD="Invalid date";function vD(){return this._invalidDate}var wD="%d",TD=/\d{1,2}/;function ED(t){return this._ordinal.replace("%d",t)}var ID={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function SD(t,e,n,s){var r=this._relativeTime[n];return Zn(r)?r(t,e,n,s):r.replace(/%d/i,t)}function bD(t,e){var n=this._relativeTime[t>0?"future":"past"];return Zn(n)?n(e):n.replace(/%s/i,e)}var Og={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function gn(t){return typeof t=="string"?Og[t]||Og[t.toLowerCase()]:void 0}function ed(t){var e={},n,s;for(s in t)ke(t,s)&&(n=gn(s),n&&(e[n]=t[s]));return e}var AD={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function RD(t){var e=[],n;for(n in t)ke(t,n)&&e.push({unit:n,priority:AD[n]});return e.sort(function(s,r){return s.priority-r.priority}),e}var sT=/\d/,sn=/\d\d/,rT=/\d{3}/,td=/\d{4}/,Cc=/[+-]?\d{6}/,qe=/\d\d?/,iT=/\d\d\d\d?/,oT=/\d\d\d\d\d\d?/,Pc=/\d{1,3}/,nd=/\d{1,4}/,kc=/[+-]?\d{1,6}/,ki=/\d+/,Nc=/[+-]?\d+/,CD=/Z|[+-]\d\d:?\d\d/gi,Dc=/Z|[+-]\d\d(?::?\d\d)?/gi,PD=/[+-]?\d+(\.\d{1,3})?/,ua=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ni=/^[1-9]\d?/,sd=/^([1-9]\d|\d)/,Ll;Ll={};function ee(t,e,n){Ll[t]=Zn(e)?e:function(s,r){return s&&n?n:e}}function kD(t,e){return ke(Ll,t)?Ll[t](e._strict,e._locale):new RegExp(ND(t))}function ND(t){return vs(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,n,s,r,i){return n||s||r||i}))}function vs(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function cn(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function ve(t){var e=+t,n=0;return e!==0&&isFinite(e)&&(n=cn(e)),n}var Ph={};function Fe(t,e){var n,s=e,r;for(typeof t=="string"&&(t=[t]),Is(e)&&(s=function(i,o){o[e]=ve(i)}),r=t.length,n=0;n<r;n++)Ph[t[n]]=s}function ha(t,e){Fe(t,function(n,s,r,i){r._w=r._w||{},e(n,r._w,r,i)})}function DD(t,e,n){e!=null&&ke(Ph,t)&&Ph[t](e,n._a,n,t)}function Oc(t){return t%4===0&&t%100!==0||t%400===0}var Mt=0,ds=1,Hn=2,ot=3,Sn=4,ps=5,mr=6,OD=7,MD=8;re("Y",0,0,function(){var t=this.year();return t<=9999?Qn(t,4):"+"+t});re(0,["YY",2],0,function(){return this.year()%100});re(0,["YYYY",4],0,"year");re(0,["YYYYY",5],0,"year");re(0,["YYYYYY",6,!0],0,"year");ee("Y",Nc);ee("YY",qe,sn);ee("YYYY",nd,td);ee("YYYYY",kc,Cc);ee("YYYYYY",kc,Cc);Fe(["YYYYY","YYYYYY"],Mt);Fe("YYYY",function(t,e){e[Mt]=t.length===2?J.parseTwoDigitYear(t):ve(t)});Fe("YY",function(t,e){e[Mt]=J.parseTwoDigitYear(t)});Fe("Y",function(t,e){e[Mt]=parseInt(t,10)});function Io(t){return Oc(t)?366:365}J.parseTwoDigitYear=function(t){return ve(t)+(ve(t)>68?1900:2e3)};var aT=Di("FullYear",!0);function xD(){return Oc(this.year())}function Di(t,e){return function(n){return n!=null?(lT(this,t,n),J.updateOffset(this,e),this):zo(this,t)}}function zo(t,e){if(!t.isValid())return NaN;var n=t._d,s=t._isUTC;switch(e){case"Milliseconds":return s?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return s?n.getUTCSeconds():n.getSeconds();case"Minutes":return s?n.getUTCMinutes():n.getMinutes();case"Hours":return s?n.getUTCHours():n.getHours();case"Date":return s?n.getUTCDate():n.getDate();case"Day":return s?n.getUTCDay():n.getDay();case"Month":return s?n.getUTCMonth():n.getMonth();case"FullYear":return s?n.getUTCFullYear():n.getFullYear();default:return NaN}}function lT(t,e,n){var s,r,i,o,l;if(!(!t.isValid()||isNaN(n))){switch(s=t._d,r=t._isUTC,e){case"Milliseconds":return void(r?s.setUTCMilliseconds(n):s.setMilliseconds(n));case"Seconds":return void(r?s.setUTCSeconds(n):s.setSeconds(n));case"Minutes":return void(r?s.setUTCMinutes(n):s.setMinutes(n));case"Hours":return void(r?s.setUTCHours(n):s.setHours(n));case"Date":return void(r?s.setUTCDate(n):s.setDate(n));case"FullYear":break;default:return}i=n,o=t.month(),l=t.date(),l=l===29&&o===1&&!Oc(i)?28:l,r?s.setUTCFullYear(i,o,l):s.setFullYear(i,o,l)}}function LD(t){return t=gn(t),Zn(this[t])?this[t]():this}function VD(t,e){if(typeof t=="object"){t=ed(t);var n=RD(t),s,r=n.length;for(s=0;s<r;s++)this[n[s].unit](t[n[s].unit])}else if(t=gn(t),Zn(this[t]))return this[t](e);return this}function FD(t,e){return(t%e+e)%e}var st;Array.prototype.indexOf?st=Array.prototype.indexOf:st=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function rd(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=FD(e,12);return t+=(e-n)/12,n===1?Oc(t)?29:28:31-n%7%2}re("M",["MM",2],"Mo",function(){return this.month()+1});re("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});re("MMMM",0,0,function(t){return this.localeData().months(this,t)});ee("M",qe,Ni);ee("MM",qe,sn);ee("MMM",function(t,e){return e.monthsShortRegex(t)});ee("MMMM",function(t,e){return e.monthsRegex(t)});Fe(["M","MM"],function(t,e){e[ds]=ve(t)-1});Fe(["MMM","MMMM"],function(t,e,n,s){var r=n._locale.monthsParse(t,s,n._strict);r!=null?e[ds]=r:de(n).invalidMonth=t});var UD="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),cT="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),uT=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,$D=ua,WD=ua;function BD(t,e){return t?On(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||uT).test(e)?"format":"standalone"][t.month()]:On(this._months)?this._months:this._months.standalone}function HD(t,e){return t?On(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[uT.test(e)?"format":"standalone"][t.month()]:On(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function jD(t,e,n){var s,r,i,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)i=Jn([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return n?e==="MMM"?(r=st.call(this._shortMonthsParse,o),r!==-1?r:null):(r=st.call(this._longMonthsParse,o),r!==-1?r:null):e==="MMM"?(r=st.call(this._shortMonthsParse,o),r!==-1?r:(r=st.call(this._longMonthsParse,o),r!==-1?r:null)):(r=st.call(this._longMonthsParse,o),r!==-1?r:(r=st.call(this._shortMonthsParse,o),r!==-1?r:null))}function YD(t,e,n){var s,r,i;if(this._monthsParseExact)return jD.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(r=Jn([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[s]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),n&&e==="MMMM"&&this._longMonthsParse[s].test(t))return s;if(n&&e==="MMM"&&this._shortMonthsParse[s].test(t))return s;if(!n&&this._monthsParse[s].test(t))return s}}function hT(t,e){if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=ve(e);else if(e=t.localeData().monthsParse(e),!Is(e))return t}var n=e,s=t.date();return s=s<29?s:Math.min(s,rd(t.year(),n)),t._isUTC?t._d.setUTCMonth(n,s):t._d.setMonth(n,s),t}function fT(t){return t!=null?(hT(this,t),J.updateOffset(this,!0),this):zo(this,"Month")}function GD(){return rd(this.year(),this.month())}function zD(t){return this._monthsParseExact?(ke(this,"_monthsRegex")||dT.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(ke(this,"_monthsShortRegex")||(this._monthsShortRegex=$D),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function qD(t){return this._monthsParseExact?(ke(this,"_monthsRegex")||dT.call(this),t?this._monthsStrictRegex:this._monthsRegex):(ke(this,"_monthsRegex")||(this._monthsRegex=WD),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function dT(){function t(c,u){return u.length-c.length}var e=[],n=[],s=[],r,i,o,l;for(r=0;r<12;r++)i=Jn([2e3,r]),o=vs(this.monthsShort(i,"")),l=vs(this.months(i,"")),e.push(o),n.push(l),s.push(l),s.push(o);e.sort(t),n.sort(t),s.sort(t),this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}function KD(t,e,n,s,r,i,o){var l;return t<100&&t>=0?(l=new Date(t+400,e,n,s,r,i,o),isFinite(l.getFullYear())&&l.setFullYear(t)):l=new Date(t,e,n,s,r,i,o),l}function qo(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Vl(t,e,n){var s=7+e-n,r=(7+qo(t,0,s).getUTCDay()-e)%7;return-r+s-1}function pT(t,e,n,s,r){var i=(7+n-s)%7,o=Vl(t,s,r),l=1+7*(e-1)+i+o,c,u;return l<=0?(c=t-1,u=Io(c)+l):l>Io(t)?(c=t+1,u=l-Io(t)):(c=t,u=l),{year:c,dayOfYear:u}}function Ko(t,e,n){var s=Vl(t.year(),e,n),r=Math.floor((t.dayOfYear()-s-1)/7)+1,i,o;return r<1?(o=t.year()-1,i=r+ws(o,e,n)):r>ws(t.year(),e,n)?(i=r-ws(t.year(),e,n),o=t.year()+1):(o=t.year(),i=r),{week:i,year:o}}function ws(t,e,n){var s=Vl(t,e,n),r=Vl(t+1,e,n);return(Io(t)-s+r)/7}re("w",["ww",2],"wo","week");re("W",["WW",2],"Wo","isoWeek");ee("w",qe,Ni);ee("ww",qe,sn);ee("W",qe,Ni);ee("WW",qe,sn);ha(["w","ww","W","WW"],function(t,e,n,s){e[s.substr(0,1)]=ve(t)});function QD(t){return Ko(t,this._week.dow,this._week.doy).week}var XD={dow:0,doy:6};function JD(){return this._week.dow}function ZD(){return this._week.doy}function eO(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function tO(t){var e=Ko(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}re("d",0,"do","day");re("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});re("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});re("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});re("e",0,0,"weekday");re("E",0,0,"isoWeekday");ee("d",qe);ee("e",qe);ee("E",qe);ee("dd",function(t,e){return e.weekdaysMinRegex(t)});ee("ddd",function(t,e){return e.weekdaysShortRegex(t)});ee("dddd",function(t,e){return e.weekdaysRegex(t)});ha(["dd","ddd","dddd"],function(t,e,n,s){var r=n._locale.weekdaysParse(t,s,n._strict);r!=null?e.d=r:de(n).invalidWeekday=t});ha(["d","e","E"],function(t,e,n,s){e[s]=ve(t)});function nO(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function sO(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function id(t,e){return t.slice(e,7).concat(t.slice(0,e))}var rO="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),mT="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),iO="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),oO=ua,aO=ua,lO=ua;function cO(t,e){var n=On(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?id(n,this._week.dow):t?n[t.day()]:n}function uO(t){return t===!0?id(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function hO(t){return t===!0?id(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function fO(t,e,n){var s,r,i,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)i=Jn([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return n?e==="dddd"?(r=st.call(this._weekdaysParse,o),r!==-1?r:null):e==="ddd"?(r=st.call(this._shortWeekdaysParse,o),r!==-1?r:null):(r=st.call(this._minWeekdaysParse,o),r!==-1?r:null):e==="dddd"?(r=st.call(this._weekdaysParse,o),r!==-1||(r=st.call(this._shortWeekdaysParse,o),r!==-1)?r:(r=st.call(this._minWeekdaysParse,o),r!==-1?r:null)):e==="ddd"?(r=st.call(this._shortWeekdaysParse,o),r!==-1||(r=st.call(this._weekdaysParse,o),r!==-1)?r:(r=st.call(this._minWeekdaysParse,o),r!==-1?r:null)):(r=st.call(this._minWeekdaysParse,o),r!==-1||(r=st.call(this._weekdaysParse,o),r!==-1)?r:(r=st.call(this._shortWeekdaysParse,o),r!==-1?r:null))}function dO(t,e,n){var s,r,i;if(this._weekdaysParseExact)return fO.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(r=Jn([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),n&&e==="dddd"&&this._fullWeekdaysParse[s].test(t))return s;if(n&&e==="ddd"&&this._shortWeekdaysParse[s].test(t))return s;if(n&&e==="dd"&&this._minWeekdaysParse[s].test(t))return s;if(!n&&this._weekdaysParse[s].test(t))return s}}function pO(t){if(!this.isValid())return t!=null?this:NaN;var e=zo(this,"Day");return t!=null?(t=nO(t,this.localeData()),this.add(t-e,"d")):e}function mO(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function gO(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=sO(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function _O(t){return this._weekdaysParseExact?(ke(this,"_weekdaysRegex")||od.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(ke(this,"_weekdaysRegex")||(this._weekdaysRegex=oO),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function yO(t){return this._weekdaysParseExact?(ke(this,"_weekdaysRegex")||od.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(ke(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=aO),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function vO(t){return this._weekdaysParseExact?(ke(this,"_weekdaysRegex")||od.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(ke(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=lO),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function od(){function t(f,d){return d.length-f.length}var e=[],n=[],s=[],r=[],i,o,l,c,u;for(i=0;i<7;i++)o=Jn([2e3,1]).day(i),l=vs(this.weekdaysMin(o,"")),c=vs(this.weekdaysShort(o,"")),u=vs(this.weekdays(o,"")),e.push(l),n.push(c),s.push(u),r.push(l),r.push(c),r.push(u);e.sort(t),n.sort(t),s.sort(t),r.sort(t),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function ad(){return this.hours()%12||12}function wO(){return this.hours()||24}re("H",["HH",2],0,"hour");re("h",["hh",2],0,ad);re("k",["kk",2],0,wO);re("hmm",0,0,function(){return""+ad.apply(this)+Qn(this.minutes(),2)});re("hmmss",0,0,function(){return""+ad.apply(this)+Qn(this.minutes(),2)+Qn(this.seconds(),2)});re("Hmm",0,0,function(){return""+this.hours()+Qn(this.minutes(),2)});re("Hmmss",0,0,function(){return""+this.hours()+Qn(this.minutes(),2)+Qn(this.seconds(),2)});function gT(t,e){re(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}gT("a",!0);gT("A",!1);function _T(t,e){return e._meridiemParse}ee("a",_T);ee("A",_T);ee("H",qe,sd);ee("h",qe,Ni);ee("k",qe,Ni);ee("HH",qe,sn);ee("hh",qe,sn);ee("kk",qe,sn);ee("hmm",iT);ee("hmmss",oT);ee("Hmm",iT);ee("Hmmss",oT);Fe(["H","HH"],ot);Fe(["k","kk"],function(t,e,n){var s=ve(t);e[ot]=s===24?0:s});Fe(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t});Fe(["h","hh"],function(t,e,n){e[ot]=ve(t),de(n).bigHour=!0});Fe("hmm",function(t,e,n){var s=t.length-2;e[ot]=ve(t.substr(0,s)),e[Sn]=ve(t.substr(s)),de(n).bigHour=!0});Fe("hmmss",function(t,e,n){var s=t.length-4,r=t.length-2;e[ot]=ve(t.substr(0,s)),e[Sn]=ve(t.substr(s,2)),e[ps]=ve(t.substr(r)),de(n).bigHour=!0});Fe("Hmm",function(t,e,n){var s=t.length-2;e[ot]=ve(t.substr(0,s)),e[Sn]=ve(t.substr(s))});Fe("Hmmss",function(t,e,n){var s=t.length-4,r=t.length-2;e[ot]=ve(t.substr(0,s)),e[Sn]=ve(t.substr(s,2)),e[ps]=ve(t.substr(r))});function TO(t){return(t+"").toLowerCase().charAt(0)==="p"}var EO=/[ap]\.?m?\.?/i,IO=Di("Hours",!0);function SO(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var yT={calendar:fD,longDateFormat:gD,invalidDate:yD,ordinal:wD,dayOfMonthOrdinalParse:TD,relativeTime:ID,months:UD,monthsShort:cT,week:XD,weekdays:rO,weekdaysMin:iO,weekdaysShort:mT,meridiemParse:EO},Ke={},Zi={},Qo;function bO(t,e){var n,s=Math.min(t.length,e.length);for(n=0;n<s;n+=1)if(t[n]!==e[n])return n;return s}function Mg(t){return t&&t.toLowerCase().replace("_","-")}function AO(t){for(var e=0,n,s,r,i;e<t.length;){for(i=Mg(t[e]).split("-"),n=i.length,s=Mg(t[e+1]),s=s?s.split("-"):null;n>0;){if(r=Mc(i.slice(0,n).join("-")),r)return r;if(s&&s.length>=n&&bO(i,s)>=n-1)break;n--}e++}return Qo}function RO(t){return!!(t&&t.match("^[^/\\\\]*$"))}function Mc(t){var e=null,n;if(Ke[t]===void 0&&typeof ul<"u"&&ul&&ul.exports&&RO(t))try{e=Qo._abbr,n=require,n("./locale/"+t),Ys(e)}catch{Ke[t]=null}return Ke[t]}function Ys(t,e){var n;return t&&(Yt(e)?n=As(t):n=ld(t,e),n?Qo=n:typeof console<"u"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Qo._abbr}function ld(t,e){if(e!==null){var n,s=yT;if(e.abbr=t,Ke[t]!=null)tT("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=Ke[t]._config;else if(e.parentLocale!=null)if(Ke[e.parentLocale]!=null)s=Ke[e.parentLocale]._config;else if(n=Mc(e.parentLocale),n!=null)s=n._config;else return Zi[e.parentLocale]||(Zi[e.parentLocale]=[]),Zi[e.parentLocale].push({name:t,config:e}),null;return Ke[t]=new Jf(Rh(s,e)),Zi[t]&&Zi[t].forEach(function(r){ld(r.name,r.config)}),Ys(t),Ke[t]}else return delete Ke[t],null}function CO(t,e){if(e!=null){var n,s,r=yT;Ke[t]!=null&&Ke[t].parentLocale!=null?Ke[t].set(Rh(Ke[t]._config,e)):(s=Mc(t),s!=null&&(r=s._config),e=Rh(r,e),s==null&&(e.abbr=t),n=new Jf(e),n.parentLocale=Ke[t],Ke[t]=n),Ys(t)}else Ke[t]!=null&&(Ke[t].parentLocale!=null?(Ke[t]=Ke[t].parentLocale,t===Ys()&&Ys(t)):Ke[t]!=null&&delete Ke[t]);return Ke[t]}function As(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Qo;if(!On(t)){if(e=Mc(t),e)return e;t=[t]}return AO(t)}function PO(){return Ch(Ke)}function cd(t){var e,n=t._a;return n&&de(t).overflow===-2&&(e=n[ds]<0||n[ds]>11?ds:n[Hn]<1||n[Hn]>rd(n[Mt],n[ds])?Hn:n[ot]<0||n[ot]>24||n[ot]===24&&(n[Sn]!==0||n[ps]!==0||n[mr]!==0)?ot:n[Sn]<0||n[Sn]>59?Sn:n[ps]<0||n[ps]>59?ps:n[mr]<0||n[mr]>999?mr:-1,de(t)._overflowDayOfYear&&(e<Mt||e>Hn)&&(e=Hn),de(t)._overflowWeeks&&e===-1&&(e=OD),de(t)._overflowWeekday&&e===-1&&(e=MD),de(t).overflow=e),t}var kO=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,NO=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,DO=/Z|[+-]\d\d(?::?\d\d)?/,Ha=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Mu=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],OO=/^\/?Date\((-?\d+)/i,MO=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,xO={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vT(t){var e,n,s=t._i,r=kO.exec(s)||NO.exec(s),i,o,l,c,u=Ha.length,f=Mu.length;if(r){for(de(t).iso=!0,e=0,n=u;e<n;e++)if(Ha[e][1].exec(r[1])){o=Ha[e][0],i=Ha[e][2]!==!1;break}if(o==null){t._isValid=!1;return}if(r[3]){for(e=0,n=f;e<n;e++)if(Mu[e][1].exec(r[3])){l=(r[2]||" ")+Mu[e][0];break}if(l==null){t._isValid=!1;return}}if(!i&&l!=null){t._isValid=!1;return}if(r[4])if(DO.exec(r[4]))c="Z";else{t._isValid=!1;return}t._f=o+(l||"")+(c||""),hd(t)}else t._isValid=!1}function LO(t,e,n,s,r,i){var o=[VO(t),cT.indexOf(e),parseInt(n,10),parseInt(s,10),parseInt(r,10)];return i&&o.push(parseInt(i,10)),o}function VO(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function FO(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function UO(t,e,n){if(t){var s=mT.indexOf(t),r=new Date(e[0],e[1],e[2]).getDay();if(s!==r)return de(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function $O(t,e,n){if(t)return xO[t];if(e)return 0;var s=parseInt(n,10),r=s%100,i=(s-r)/100;return i*60+r}function wT(t){var e=MO.exec(FO(t._i)),n;if(e){if(n=LO(e[4],e[3],e[2],e[5],e[6],e[7]),!UO(e[1],n,t))return;t._a=n,t._tzm=$O(e[8],e[9],e[10]),t._d=qo.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),de(t).rfc2822=!0}else t._isValid=!1}function WO(t){var e=OO.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(vT(t),t._isValid===!1)delete t._isValid;else return;if(wT(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:J.createFromInputFallback(t)}J.createFromInputFallback=mn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Jr(t,e,n){return t??e??n}function BO(t){var e=new Date(J.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function ud(t){var e,n,s=[],r,i,o;if(!t._d){for(r=BO(t),t._w&&t._a[Hn]==null&&t._a[ds]==null&&HO(t),t._dayOfYear!=null&&(o=Jr(t._a[Mt],r[Mt]),(t._dayOfYear>Io(o)||t._dayOfYear===0)&&(de(t)._overflowDayOfYear=!0),n=qo(o,0,t._dayOfYear),t._a[ds]=n.getUTCMonth(),t._a[Hn]=n.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=s[e]=r[e];for(;e<7;e++)t._a[e]=s[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[ot]===24&&t._a[Sn]===0&&t._a[ps]===0&&t._a[mr]===0&&(t._nextDay=!0,t._a[ot]=0),t._d=(t._useUTC?qo:KD).apply(null,s),i=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[ot]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==i&&(de(t).weekdayMismatch=!0)}}function HO(t){var e,n,s,r,i,o,l,c,u;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(i=1,o=4,n=Jr(e.GG,t._a[Mt],Ko(Ge(),1,4).year),s=Jr(e.W,1),r=Jr(e.E,1),(r<1||r>7)&&(c=!0)):(i=t._locale._week.dow,o=t._locale._week.doy,u=Ko(Ge(),i,o),n=Jr(e.gg,t._a[Mt],u.year),s=Jr(e.w,u.week),e.d!=null?(r=e.d,(r<0||r>6)&&(c=!0)):e.e!=null?(r=e.e+i,(e.e<0||e.e>6)&&(c=!0)):r=i),s<1||s>ws(n,i,o)?de(t)._overflowWeeks=!0:c!=null?de(t)._overflowWeekday=!0:(l=pT(n,s,r,i,o),t._a[Mt]=l.year,t._dayOfYear=l.dayOfYear)}J.ISO_8601=function(){};J.RFC_2822=function(){};function hd(t){if(t._f===J.ISO_8601){vT(t);return}if(t._f===J.RFC_2822){wT(t);return}t._a=[],de(t).empty=!0;var e=""+t._i,n,s,r,i,o,l=e.length,c=0,u,f;for(r=nT(t._f,t._locale).match(Zf)||[],f=r.length,n=0;n<f;n++)i=r[n],s=(e.match(kD(i,t))||[])[0],s&&(o=e.substr(0,e.indexOf(s)),o.length>0&&de(t).unusedInput.push(o),e=e.slice(e.indexOf(s)+s.length),c+=s.length),ai[i]?(s?de(t).empty=!1:de(t).unusedTokens.push(i),DD(i,s,t)):t._strict&&!s&&de(t).unusedTokens.push(i);de(t).charsLeftOver=l-c,e.length>0&&de(t).unusedInput.push(e),t._a[ot]<=12&&de(t).bigHour===!0&&t._a[ot]>0&&(de(t).bigHour=void 0),de(t).parsedDateParts=t._a.slice(0),de(t).meridiem=t._meridiem,t._a[ot]=jO(t._locale,t._a[ot],t._meridiem),u=de(t).era,u!==null&&(t._a[Mt]=t._locale.erasConvertYear(u,t._a[Mt])),ud(t),cd(t)}function jO(t,e,n){var s;return n==null?e:t.meridiemHour!=null?t.meridiemHour(e,n):(t.isPM!=null&&(s=t.isPM(n),s&&e<12&&(e+=12),!s&&e===12&&(e=0)),e)}function YO(t){var e,n,s,r,i,o,l=!1,c=t._f.length;if(c===0){de(t).invalidFormat=!0,t._d=new Date(NaN);return}for(r=0;r<c;r++)i=0,o=!1,e=Xf({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[r],hd(e),Qf(e)&&(o=!0),i+=de(e).charsLeftOver,i+=de(e).unusedTokens.length*10,de(e).score=i,l?i<s&&(s=i,n=e):(s==null||i<s||o)&&(s=i,n=e,o&&(l=!0));Fs(t,n||e)}function GO(t){if(!t._d){var e=ed(t._i),n=e.day===void 0?e.date:e.day;t._a=Zw([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],function(s){return s&&parseInt(s,10)}),ud(t)}}function zO(t){var e=new ca(cd(TT(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function TT(t){var e=t._i,n=t._f;return t._locale=t._locale||As(t._l),e===null||n===void 0&&e===""?Rc({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),Mn(e)?new ca(cd(e)):(la(e)?t._d=e:On(n)?YO(t):n?hd(t):qO(t),Qf(t)||(t._d=null),t))}function qO(t){var e=t._i;Yt(e)?t._d=new Date(J.now()):la(e)?t._d=new Date(e.valueOf()):typeof e=="string"?WO(t):On(e)?(t._a=Zw(e.slice(0),function(n){return parseInt(n,10)}),ud(t)):Er(e)?GO(t):Is(e)?t._d=new Date(e):J.createFromInputFallback(t)}function ET(t,e,n,s,r){var i={};return(e===!0||e===!1)&&(s=e,e=void 0),(n===!0||n===!1)&&(s=n,n=void 0),(Er(t)&&Kf(t)||On(t)&&t.length===0)&&(t=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=n,i._i=t,i._f=e,i._strict=s,zO(i)}function Ge(t,e,n,s){return ET(t,e,n,s,!1)}var KO=mn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ge.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Rc()}),QO=mn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Ge.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Rc()});function IT(t,e){var n,s;if(e.length===1&&On(e[0])&&(e=e[0]),!e.length)return Ge();for(n=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][t](n))&&(n=e[s]);return n}function XO(){var t=[].slice.call(arguments,0);return IT("isBefore",t)}function JO(){var t=[].slice.call(arguments,0);return IT("isAfter",t)}var ZO=function(){return Date.now?Date.now():+new Date},eo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function eM(t){var e,n=!1,s,r=eo.length;for(e in t)if(ke(t,e)&&!(st.call(eo,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(s=0;s<r;++s)if(t[eo[s]]){if(n)return!1;parseFloat(t[eo[s]])!==ve(t[eo[s]])&&(n=!0)}return!0}function tM(){return this._isValid}function nM(){return Vn(NaN)}function xc(t){var e=ed(t),n=e.year||0,s=e.quarter||0,r=e.month||0,i=e.week||e.isoWeek||0,o=e.day||0,l=e.hour||0,c=e.minute||0,u=e.second||0,f=e.millisecond||0;this._isValid=eM(e),this._milliseconds=+f+u*1e3+c*6e4+l*1e3*60*60,this._days=+o+i*7,this._months=+r+s*3+n*12,this._data={},this._locale=As(),this._bubble()}function ol(t){return t instanceof xc}function kh(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function sM(t,e,n){var s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),i=0,o;for(o=0;o<s;o++)ve(t[o])!==ve(e[o])&&i++;return i+r}function ST(t,e){re(t,0,0,function(){var n=this.utcOffset(),s="+";return n<0&&(n=-n,s="-"),s+Qn(~~(n/60),2)+e+Qn(~~n%60,2)})}ST("Z",":");ST("ZZ","");ee("Z",Dc);ee("ZZ",Dc);Fe(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=fd(Dc,t)});var rM=/([\+\-]|\d\d)/gi;function fd(t,e){var n=(e||"").match(t),s,r,i;return n===null?null:(s=n[n.length-1]||[],r=(s+"").match(rM)||["-",0,0],i=+(r[1]*60)+ve(r[2]),i===0?0:r[0]==="+"?i:-i)}function dd(t,e){var n,s;return e._isUTC?(n=e.clone(),s=(Mn(t)||la(t)?t.valueOf():Ge(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),J.updateOffset(n,!1),n):Ge(t).local()}function Nh(t){return-Math.round(t._d.getTimezoneOffset())}J.updateOffset=function(){};function iM(t,e,n){var s=this._offset||0,r;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=fd(Dc,t),t===null)return this}else Math.abs(t)<16&&!n&&(t=t*60);return!this._isUTC&&e&&(r=Nh(this)),this._offset=t,this._isUTC=!0,r!=null&&this.add(r,"m"),s!==t&&(!e||this._changeInProgress?RT(this,Vn(t-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,J.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Nh(this)}function oM(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function aM(t){return this.utcOffset(0,t)}function lM(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Nh(this),"m")),this}function cM(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=fd(CD,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function uM(t){return this.isValid()?(t=t?Ge(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function hM(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function fM(){if(!Yt(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Xf(t,this),t=TT(t),t._a?(e=t._isUTC?Jn(t._a):Ge(t._a),this._isDSTShifted=this.isValid()&&sM(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function dM(){return this.isValid()?!this._isUTC:!1}function pM(){return this.isValid()?this._isUTC:!1}function bT(){return this.isValid()?this._isUTC&&this._offset===0:!1}var mM=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,gM=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Vn(t,e){var n=t,s=null,r,i,o;return ol(t)?n={ms:t._milliseconds,d:t._days,M:t._months}:Is(t)||!isNaN(+t)?(n={},e?n[e]=+t:n.milliseconds=+t):(s=mM.exec(t))?(r=s[1]==="-"?-1:1,n={y:0,d:ve(s[Hn])*r,h:ve(s[ot])*r,m:ve(s[Sn])*r,s:ve(s[ps])*r,ms:ve(kh(s[mr]*1e3))*r}):(s=gM.exec(t))?(r=s[1]==="-"?-1:1,n={y:cr(s[2],r),M:cr(s[3],r),w:cr(s[4],r),d:cr(s[5],r),h:cr(s[6],r),m:cr(s[7],r),s:cr(s[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=_M(Ge(n.from),Ge(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),i=new xc(n),ol(t)&&ke(t,"_locale")&&(i._locale=t._locale),ol(t)&&ke(t,"_isValid")&&(i._isValid=t._isValid),i}Vn.fn=xc.prototype;Vn.invalid=nM;function cr(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function xg(t,e){var n={};return n.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function _M(t,e){var n;return t.isValid()&&e.isValid()?(e=dd(e,t),t.isBefore(e)?n=xg(t,e):(n=xg(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function AT(t,e){return function(n,s){var r,i;return s!==null&&!isNaN(+s)&&(tT(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),r=Vn(n,s),RT(this,r,t),this}}function RT(t,e,n,s){var r=e._milliseconds,i=kh(e._days),o=kh(e._months);t.isValid()&&(s=s??!0,o&&hT(t,zo(t,"Month")+o*n),i&&lT(t,"Date",zo(t,"Date")+i*n),r&&t._d.setTime(t._d.valueOf()+r*n),s&&J.updateOffset(t,i||o))}var yM=AT(1,"add"),vM=AT(-1,"subtract");function CT(t){return typeof t=="string"||t instanceof String}function wM(t){return Mn(t)||la(t)||CT(t)||Is(t)||EM(t)||TM(t)||t===null||t===void 0}function TM(t){var e=Er(t)&&!Kf(t),n=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,o=s.length;for(r=0;r<o;r+=1)i=s[r],n=n||ke(t,i);return e&&n}function EM(t){var e=On(t),n=!1;return e&&(n=t.filter(function(s){return!Is(s)&&CT(t)}).length===0),e&&n}function IM(t){var e=Er(t)&&!Kf(t),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<s.length;r+=1)i=s[r],n=n||ke(t,i);return e&&n}function SM(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function bM(t,e){arguments.length===1&&(arguments[0]?wM(arguments[0])?(t=arguments[0],e=void 0):IM(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||Ge(),s=dd(n,this).startOf("day"),r=J.calendarFormat(this,s)||"sameElse",i=e&&(Zn(e[r])?e[r].call(this,n):e[r]);return this.format(i||this.localeData().calendar(r,this,Ge(n)))}function AM(){return new ca(this)}function RM(t,e){var n=Mn(t)?t:Ge(t);return this.isValid()&&n.isValid()?(e=gn(e)||"millisecond",e==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function CM(t,e){var n=Mn(t)?t:Ge(t);return this.isValid()&&n.isValid()?(e=gn(e)||"millisecond",e==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function PM(t,e,n,s){var r=Mn(t)?t:Ge(t),i=Mn(e)?e:Ge(e);return this.isValid()&&r.isValid()&&i.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(s[1]===")"?this.isBefore(i,n):!this.isAfter(i,n))):!1}function kM(t,e){var n=Mn(t)?t:Ge(t),s;return this.isValid()&&n.isValid()?(e=gn(e)||"millisecond",e==="millisecond"?this.valueOf()===n.valueOf():(s=n.valueOf(),this.clone().startOf(e).valueOf()<=s&&s<=this.clone().endOf(e).valueOf())):!1}function NM(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function DM(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function OM(t,e,n){var s,r,i;if(!this.isValid())return NaN;if(s=dd(t,this),!s.isValid())return NaN;switch(r=(s.utcOffset()-this.utcOffset())*6e4,e=gn(e),e){case"year":i=al(this,s)/12;break;case"month":i=al(this,s);break;case"quarter":i=al(this,s)/3;break;case"second":i=(this-s)/1e3;break;case"minute":i=(this-s)/6e4;break;case"hour":i=(this-s)/36e5;break;case"day":i=(this-s-r)/864e5;break;case"week":i=(this-s-r)/6048e5;break;default:i=this-s}return n?i:cn(i)}function al(t,e){if(t.date()<e.date())return-al(e,t);var n=(e.year()-t.year())*12+(e.month()-t.month()),s=t.clone().add(n,"months"),r,i;return e-s<0?(r=t.clone().add(n-1,"months"),i=(e-s)/(s-r)):(r=t.clone().add(n+1,"months"),i=(e-s)/(r-s)),-(n+i)||0}J.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";J.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function MM(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function xM(t){if(!this.isValid())return null;var e=t!==!0,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?il(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Zn(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",il(n,"Z")):il(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function LM(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",n,s,r,i;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),n="["+t+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=e+'[")]',this.format(n+s+r+i)}function VM(t){t||(t=this.isUtc()?J.defaultFormatUtc:J.defaultFormat);var e=il(this,t);return this.localeData().postformat(e)}function FM(t,e){return this.isValid()&&(Mn(t)&&t.isValid()||Ge(t).isValid())?Vn({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function UM(t){return this.from(Ge(),t)}function $M(t,e){return this.isValid()&&(Mn(t)&&t.isValid()||Ge(t).isValid())?Vn({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function WM(t){return this.to(Ge(),t)}function PT(t){var e;return t===void 0?this._locale._abbr:(e=As(t),e!=null&&(this._locale=e),this)}var kT=mn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function NT(){return this._locale}var Fl=1e3,li=60*Fl,Ul=60*li,DT=(365*400+97)*24*Ul;function ci(t,e){return(t%e+e)%e}function OT(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-DT:new Date(t,e,n).valueOf()}function MT(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-DT:Date.UTC(t,e,n)}function BM(t){var e,n;if(t=gn(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?MT:OT,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=ci(e+(this._isUTC?0:this.utcOffset()*li),Ul);break;case"minute":e=this._d.valueOf(),e-=ci(e,li);break;case"second":e=this._d.valueOf(),e-=ci(e,Fl);break}return this._d.setTime(e),J.updateOffset(this,!0),this}function HM(t){var e,n;if(t=gn(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?MT:OT,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=Ul-ci(e+(this._isUTC?0:this.utcOffset()*li),Ul)-1;break;case"minute":e=this._d.valueOf(),e+=li-ci(e,li)-1;break;case"second":e=this._d.valueOf(),e+=Fl-ci(e,Fl)-1;break}return this._d.setTime(e),J.updateOffset(this,!0),this}function jM(){return this._d.valueOf()-(this._offset||0)*6e4}function YM(){return Math.floor(this.valueOf()/1e3)}function GM(){return new Date(this.valueOf())}function zM(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function qM(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function KM(){return this.isValid()?this.toISOString():null}function QM(){return Qf(this)}function XM(){return Fs({},de(this))}function JM(){return de(this).overflow}function ZM(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}re("N",0,0,"eraAbbr");re("NN",0,0,"eraAbbr");re("NNN",0,0,"eraAbbr");re("NNNN",0,0,"eraName");re("NNNNN",0,0,"eraNarrow");re("y",["y",1],"yo","eraYear");re("y",["yy",2],0,"eraYear");re("y",["yyy",3],0,"eraYear");re("y",["yyyy",4],0,"eraYear");ee("N",pd);ee("NN",pd);ee("NNN",pd);ee("NNNN",u1);ee("NNNNN",h1);Fe(["N","NN","NNN","NNNN","NNNNN"],function(t,e,n,s){var r=n._locale.erasParse(t,s,n._strict);r?de(n).era=r:de(n).invalidEra=t});ee("y",ki);ee("yy",ki);ee("yyy",ki);ee("yyyy",ki);ee("yo",f1);Fe(["y","yy","yyy","yyyy"],Mt);Fe(["yo"],function(t,e,n,s){var r;n._locale._eraYearOrdinalRegex&&(r=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[Mt]=n._locale.eraYearOrdinalParse(t,r):e[Mt]=parseInt(t,10)});function e1(t,e){var n,s,r,i=this._eras||As("en")._eras;for(n=0,s=i.length;n<s;++n){switch(typeof i[n].since){case"string":r=J(i[n].since).startOf("day"),i[n].since=r.valueOf();break}switch(typeof i[n].until){case"undefined":i[n].until=1/0;break;case"string":r=J(i[n].until).startOf("day").valueOf(),i[n].until=r.valueOf();break}}return i}function t1(t,e,n){var s,r,i=this.eras(),o,l,c;for(t=t.toUpperCase(),s=0,r=i.length;s<r;++s)if(o=i[s].name.toUpperCase(),l=i[s].abbr.toUpperCase(),c=i[s].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(l===t)return i[s];break;case"NNNN":if(o===t)return i[s];break;case"NNNNN":if(c===t)return i[s];break}else if([o,l,c].indexOf(t)>=0)return i[s]}function n1(t,e){var n=t.since<=t.until?1:-1;return e===void 0?J(t.since).year():J(t.since).year()+(e-t.offset)*n}function s1(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].name;return""}function r1(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].narrow;return""}function i1(){var t,e,n,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),s[t].since<=n&&n<=s[t].until||s[t].until<=n&&n<=s[t].since)return s[t].abbr;return""}function o1(){var t,e,n,s,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=r[t].since<=r[t].until?1:-1,s=this.clone().startOf("day").valueOf(),r[t].since<=s&&s<=r[t].until||r[t].until<=s&&s<=r[t].since)return(this.year()-J(r[t].since).year())*n+r[t].offset;return this.year()}function a1(t){return ke(this,"_erasNameRegex")||md.call(this),t?this._erasNameRegex:this._erasRegex}function l1(t){return ke(this,"_erasAbbrRegex")||md.call(this),t?this._erasAbbrRegex:this._erasRegex}function c1(t){return ke(this,"_erasNarrowRegex")||md.call(this),t?this._erasNarrowRegex:this._erasRegex}function pd(t,e){return e.erasAbbrRegex(t)}function u1(t,e){return e.erasNameRegex(t)}function h1(t,e){return e.erasNarrowRegex(t)}function f1(t,e){return e._eraYearOrdinalRegex||ki}function md(){var t=[],e=[],n=[],s=[],r,i,o,l,c,u=this.eras();for(r=0,i=u.length;r<i;++r)o=vs(u[r].name),l=vs(u[r].abbr),c=vs(u[r].narrow),e.push(o),t.push(l),n.push(c),s.push(o),s.push(l),s.push(c);this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}re(0,["gg",2],0,function(){return this.weekYear()%100});re(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Lc(t,e){re(0,[t,t.length],0,e)}Lc("gggg","weekYear");Lc("ggggg","weekYear");Lc("GGGG","isoWeekYear");Lc("GGGGG","isoWeekYear");ee("G",Nc);ee("g",Nc);ee("GG",qe,sn);ee("gg",qe,sn);ee("GGGG",nd,td);ee("gggg",nd,td);ee("GGGGG",kc,Cc);ee("ggggg",kc,Cc);ha(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,s){e[s.substr(0,2)]=ve(t)});ha(["gg","GG"],function(t,e,n,s){e[s]=J.parseTwoDigitYear(t)});function d1(t){return xT.call(this,t,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function p1(t){return xT.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function m1(){return ws(this.year(),1,4)}function g1(){return ws(this.isoWeekYear(),1,4)}function _1(){var t=this.localeData()._week;return ws(this.year(),t.dow,t.doy)}function y1(){var t=this.localeData()._week;return ws(this.weekYear(),t.dow,t.doy)}function xT(t,e,n,s,r){var i;return t==null?Ko(this,s,r).year:(i=ws(t,s,r),e>i&&(e=i),v1.call(this,t,e,n,s,r))}function v1(t,e,n,s,r){var i=pT(t,e,n,s,r),o=qo(i.year,0,i.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}re("Q",0,"Qo","quarter");ee("Q",sT);Fe("Q",function(t,e){e[ds]=(ve(t)-1)*3});function w1(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}re("D",["DD",2],"Do","date");ee("D",qe,Ni);ee("DD",qe,sn);ee("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});Fe(["D","DD"],Hn);Fe("Do",function(t,e){e[Hn]=ve(t.match(qe)[0])});var LT=Di("Date",!0);re("DDD",["DDDD",3],"DDDo","dayOfYear");ee("DDD",Pc);ee("DDDD",rT);Fe(["DDD","DDDD"],function(t,e,n){n._dayOfYear=ve(t)});function T1(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}re("m",["mm",2],0,"minute");ee("m",qe,sd);ee("mm",qe,sn);Fe(["m","mm"],Sn);var E1=Di("Minutes",!1);re("s",["ss",2],0,"second");ee("s",qe,sd);ee("ss",qe,sn);Fe(["s","ss"],ps);var I1=Di("Seconds",!1);re("S",0,0,function(){return~~(this.millisecond()/100)});re(0,["SS",2],0,function(){return~~(this.millisecond()/10)});re(0,["SSS",3],0,"millisecond");re(0,["SSSS",4],0,function(){return this.millisecond()*10});re(0,["SSSSS",5],0,function(){return this.millisecond()*100});re(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});re(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});re(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});re(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});ee("S",Pc,sT);ee("SS",Pc,sn);ee("SSS",Pc,rT);var Us,VT;for(Us="SSSS";Us.length<=9;Us+="S")ee(Us,ki);function S1(t,e){e[mr]=ve(("0."+t)*1e3)}for(Us="S";Us.length<=9;Us+="S")Fe(Us,S1);VT=Di("Milliseconds",!1);re("z",0,0,"zoneAbbr");re("zz",0,0,"zoneName");function b1(){return this._isUTC?"UTC":""}function A1(){return this._isUTC?"Coordinated Universal Time":""}var $=ca.prototype;$.add=yM;$.calendar=bM;$.clone=AM;$.diff=OM;$.endOf=HM;$.format=VM;$.from=FM;$.fromNow=UM;$.to=$M;$.toNow=WM;$.get=LD;$.invalidAt=JM;$.isAfter=RM;$.isBefore=CM;$.isBetween=PM;$.isSame=kM;$.isSameOrAfter=NM;$.isSameOrBefore=DM;$.isValid=QM;$.lang=kT;$.locale=PT;$.localeData=NT;$.max=QO;$.min=KO;$.parsingFlags=XM;$.set=VD;$.startOf=BM;$.subtract=vM;$.toArray=zM;$.toObject=qM;$.toDate=GM;$.toISOString=xM;$.inspect=LM;typeof Symbol<"u"&&Symbol.for!=null&&($[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});$.toJSON=KM;$.toString=MM;$.unix=YM;$.valueOf=jM;$.creationData=ZM;$.eraName=s1;$.eraNarrow=r1;$.eraAbbr=i1;$.eraYear=o1;$.year=aT;$.isLeapYear=xD;$.weekYear=d1;$.isoWeekYear=p1;$.quarter=$.quarters=w1;$.month=fT;$.daysInMonth=GD;$.week=$.weeks=eO;$.isoWeek=$.isoWeeks=tO;$.weeksInYear=_1;$.weeksInWeekYear=y1;$.isoWeeksInYear=m1;$.isoWeeksInISOWeekYear=g1;$.date=LT;$.day=$.days=pO;$.weekday=mO;$.isoWeekday=gO;$.dayOfYear=T1;$.hour=$.hours=IO;$.minute=$.minutes=E1;$.second=$.seconds=I1;$.millisecond=$.milliseconds=VT;$.utcOffset=iM;$.utc=aM;$.local=lM;$.parseZone=cM;$.hasAlignedHourOffset=uM;$.isDST=hM;$.isLocal=dM;$.isUtcOffset=pM;$.isUtc=bT;$.isUTC=bT;$.zoneAbbr=b1;$.zoneName=A1;$.dates=mn("dates accessor is deprecated. Use date instead.",LT);$.months=mn("months accessor is deprecated. Use month instead",fT);$.years=mn("years accessor is deprecated. Use year instead",aT);$.zone=mn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",oM);$.isDSTShifted=mn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",fM);function R1(t){return Ge(t*1e3)}function C1(){return Ge.apply(null,arguments).parseZone()}function FT(t){return t}var Ne=Jf.prototype;Ne.calendar=dD;Ne.longDateFormat=_D;Ne.invalidDate=vD;Ne.ordinal=ED;Ne.preparse=FT;Ne.postformat=FT;Ne.relativeTime=SD;Ne.pastFuture=bD;Ne.set=hD;Ne.eras=e1;Ne.erasParse=t1;Ne.erasConvertYear=n1;Ne.erasAbbrRegex=l1;Ne.erasNameRegex=a1;Ne.erasNarrowRegex=c1;Ne.months=BD;Ne.monthsShort=HD;Ne.monthsParse=YD;Ne.monthsRegex=qD;Ne.monthsShortRegex=zD;Ne.week=QD;Ne.firstDayOfYear=ZD;Ne.firstDayOfWeek=JD;Ne.weekdays=cO;Ne.weekdaysMin=hO;Ne.weekdaysShort=uO;Ne.weekdaysParse=dO;Ne.weekdaysRegex=_O;Ne.weekdaysShortRegex=yO;Ne.weekdaysMinRegex=vO;Ne.isPM=TO;Ne.meridiem=SO;function $l(t,e,n,s){var r=As(),i=Jn().set(s,e);return r[n](i,t)}function UT(t,e,n){if(Is(t)&&(e=t,t=void 0),t=t||"",e!=null)return $l(t,e,n,"month");var s,r=[];for(s=0;s<12;s++)r[s]=$l(t,s,n,"month");return r}function gd(t,e,n,s){typeof t=="boolean"?(Is(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,Is(e)&&(n=e,e=void 0),e=e||"");var r=As(),i=t?r._week.dow:0,o,l=[];if(n!=null)return $l(e,(n+i)%7,s,"day");for(o=0;o<7;o++)l[o]=$l(e,(o+i)%7,s,"day");return l}function P1(t,e){return UT(t,e,"months")}function k1(t,e){return UT(t,e,"monthsShort")}function N1(t,e,n){return gd(t,e,n,"weekdays")}function D1(t,e,n){return gd(t,e,n,"weekdaysShort")}function O1(t,e,n){return gd(t,e,n,"weekdaysMin")}Ys("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=ve(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+n}});J.lang=mn("moment.lang is deprecated. Use moment.locale instead.",Ys);J.langData=mn("moment.langData is deprecated. Use moment.localeData instead.",As);var is=Math.abs;function M1(){var t=this._data;return this._milliseconds=is(this._milliseconds),this._days=is(this._days),this._months=is(this._months),t.milliseconds=is(t.milliseconds),t.seconds=is(t.seconds),t.minutes=is(t.minutes),t.hours=is(t.hours),t.months=is(t.months),t.years=is(t.years),this}function $T(t,e,n,s){var r=Vn(e,n);return t._milliseconds+=s*r._milliseconds,t._days+=s*r._days,t._months+=s*r._months,t._bubble()}function x1(t,e){return $T(this,t,e,1)}function L1(t,e){return $T(this,t,e,-1)}function Lg(t){return t<0?Math.floor(t):Math.ceil(t)}function V1(){var t=this._milliseconds,e=this._days,n=this._months,s=this._data,r,i,o,l,c;return t>=0&&e>=0&&n>=0||t<=0&&e<=0&&n<=0||(t+=Lg(Dh(n)+e)*864e5,e=0,n=0),s.milliseconds=t%1e3,r=cn(t/1e3),s.seconds=r%60,i=cn(r/60),s.minutes=i%60,o=cn(i/60),s.hours=o%24,e+=cn(o/24),c=cn(WT(e)),n+=c,e-=Lg(Dh(c)),l=cn(n/12),n%=12,s.days=e,s.months=n,s.years=l,this}function WT(t){return t*4800/146097}function Dh(t){return t*146097/4800}function F1(t){if(!this.isValid())return NaN;var e,n,s=this._milliseconds;if(t=gn(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+s/864e5,n=this._months+WT(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(Dh(this._months)),t){case"week":return e/7+s/6048e5;case"day":return e+s/864e5;case"hour":return e*24+s/36e5;case"minute":return e*1440+s/6e4;case"second":return e*86400+s/1e3;case"millisecond":return Math.floor(e*864e5)+s;default:throw new Error("Unknown unit "+t)}}function Rs(t){return function(){return this.as(t)}}var BT=Rs("ms"),U1=Rs("s"),$1=Rs("m"),W1=Rs("h"),B1=Rs("d"),H1=Rs("w"),j1=Rs("M"),Y1=Rs("Q"),G1=Rs("y"),z1=BT;function q1(){return Vn(this)}function K1(t){return t=gn(t),this.isValid()?this[t+"s"]():NaN}function Vr(t){return function(){return this.isValid()?this._data[t]:NaN}}var Q1=Vr("milliseconds"),X1=Vr("seconds"),J1=Vr("minutes"),Z1=Vr("hours"),ex=Vr("days"),tx=Vr("months"),nx=Vr("years");function sx(){return cn(this.days()/7)}var ls=Math.round,Zr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function rx(t,e,n,s,r){return r.relativeTime(e||1,!!n,t,s)}function ix(t,e,n,s){var r=Vn(t).abs(),i=ls(r.as("s")),o=ls(r.as("m")),l=ls(r.as("h")),c=ls(r.as("d")),u=ls(r.as("M")),f=ls(r.as("w")),d=ls(r.as("y")),m=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||o<=1&&["m"]||o<n.m&&["mm",o]||l<=1&&["h"]||l<n.h&&["hh",l]||c<=1&&["d"]||c<n.d&&["dd",c];return n.w!=null&&(m=m||f<=1&&["w"]||f<n.w&&["ww",f]),m=m||u<=1&&["M"]||u<n.M&&["MM",u]||d<=1&&["y"]||["yy",d],m[2]=e,m[3]=+t>0,m[4]=s,rx.apply(null,m)}function ox(t){return t===void 0?ls:typeof t=="function"?(ls=t,!0):!1}function ax(t,e){return Zr[t]===void 0?!1:e===void 0?Zr[t]:(Zr[t]=e,t==="s"&&(Zr.ss=e-1),!0)}function lx(t,e){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=Zr,r,i;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(n=t),typeof e=="object"&&(s=Object.assign({},Zr,e),e.s!=null&&e.ss==null&&(s.ss=e.s-1)),r=this.localeData(),i=ix(this,!n,s,r),n&&(i=r.pastFuture(+this,i)),r.postformat(i)}var xu=Math.abs;function Yr(t){return(t>0)-(t<0)||+t}function Vc(){if(!this.isValid())return this.localeData().invalidDate();var t=xu(this._milliseconds)/1e3,e=xu(this._days),n=xu(this._months),s,r,i,o,l=this.asSeconds(),c,u,f,d;return l?(s=cn(t/60),r=cn(s/60),t%=60,s%=60,i=cn(n/12),n%=12,o=t?t.toFixed(3).replace(/\.?0+$/,""):"",c=l<0?"-":"",u=Yr(this._months)!==Yr(l)?"-":"",f=Yr(this._days)!==Yr(l)?"-":"",d=Yr(this._milliseconds)!==Yr(l)?"-":"",c+"P"+(i?u+i+"Y":"")+(n?u+n+"M":"")+(e?f+e+"D":"")+(r||s||t?"T":"")+(r?d+r+"H":"")+(s?d+s+"M":"")+(t?d+o+"S":"")):"P0D"}var Ae=xc.prototype;Ae.isValid=tM;Ae.abs=M1;Ae.add=x1;Ae.subtract=L1;Ae.as=F1;Ae.asMilliseconds=BT;Ae.asSeconds=U1;Ae.asMinutes=$1;Ae.asHours=W1;Ae.asDays=B1;Ae.asWeeks=H1;Ae.asMonths=j1;Ae.asQuarters=Y1;Ae.asYears=G1;Ae.valueOf=z1;Ae._bubble=V1;Ae.clone=q1;Ae.get=K1;Ae.milliseconds=Q1;Ae.seconds=X1;Ae.minutes=J1;Ae.hours=Z1;Ae.days=ex;Ae.weeks=sx;Ae.months=tx;Ae.years=nx;Ae.humanize=lx;Ae.toISOString=Vc;Ae.toString=Vc;Ae.toJSON=Vc;Ae.locale=PT;Ae.localeData=NT;Ae.toIsoString=mn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Vc);Ae.lang=kT;re("X",0,0,"unix");re("x",0,0,"valueOf");ee("x",Nc);ee("X",PD);Fe("X",function(t,e,n){n._d=new Date(parseFloat(t)*1e3)});Fe("x",function(t,e,n){n._d=new Date(ve(t))});//! moment.js
J.version="2.30.1";cD(Ge);J.fn=$;J.min=XO;J.max=JO;J.now=ZO;J.utc=Jn;J.unix=R1;J.months=P1;J.isDate=la;J.locale=Ys;J.invalid=Rc;J.duration=Vn;J.isMoment=Mn;J.weekdays=N1;J.parseZone=C1;J.localeData=As;J.isDuration=ol;J.monthsShort=k1;J.weekdaysMin=O1;J.defineLocale=ld;J.updateLocale=CO;J.locales=PO;J.weekdaysShort=D1;J.normalizeUnits=gn;J.relativeTimeRounding=ox;J.relativeTimeThreshold=ax;J.calendarFormat=SM;J.prototype=$;J.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const cx={class:"submit",type:"submit",id:"submit",value:"submit"},ux=ea({__name:"ContactForm",setup(t){const e=Qa("Submit"),n=Qa({name:"",email:"",phoneNumber:""}),s=Qa(!1);console.log(n);async function r(){try{e.value="submitting...";const i=await Fk(Ik(lD,"submitted"),{name:n.value.name,email:n.value.email,phoneNumber:n.value.phoneNumber,timeStamp:J().format("MMMM Do YYYY, HH:mm:ss")});alert("תודה רבה! ניצור אתכם קשר בימים הקרובים:)"),s.value=!0,n.value={name:"",email:"",phoneNumber:""}}catch(i){console.log("Error occurred",{error:i}),alert("נכשלה שליחת הטופס")}e.value="Submit"}return(i,o)=>(pf(),wS("form",{onSubmit:nb(r,["prevent"]),name:"contact-form",method:"post",action:"https://script.google.com/macros/s/AKfycbxuXSdSsm7fxiDj3Kxq1AC80w26FlnaBaFNefTBASDyUw0UNiyqJHbWdNJLSy-M7iCV-g/exec",class:"form flex flex-col gap-4 w-full","data-netlify":"true"},[Ut("div",null,[o[3]||(o[3]=Ut("div",{class:"textContainer"},[Ut("label",{class:"formHeader",for:"name"},"שם מלא")],-1)),uu(Ut("input",{class:"prompt text-right",type:"text",id:"name",name:"Name","onUpdate:modelValue":o[0]||(o[0]=l=>n.value.name=l),required:""},null,512),[[_u,n.value.name]])]),Ut("div",null,[o[4]||(o[4]=Ut("div",{class:"textContainer"},[Ut("label",{class:"formHeader",for:"email"},"מייל")],-1)),uu(Ut("input",{class:"prompt",type:"email",id:"email",name:"Email","onUpdate:modelValue":o[1]||(o[1]=l=>n.value.email=l),required:""},null,512),[[_u,n.value.email]])]),Ut("div",null,[o[5]||(o[5]=Ut("div",{class:"textContainer"},[Ut("label",{class:"formHeader",for:"phoneNumber"},"מספר טלפון")],-1)),uu(Ut("input",{class:"prompt",type:"tel",id:"phoneNumber",name:"Phone Number","onUpdate:modelValue":o[2]||(o[2]=l=>n.value.phoneNumber=l),required:""},null,512),[[_u,n.value.phoneNumber]])]),Ut("button",cx,Y_(e.value),1)],32))}}),hx=uA(ux,[["__scopeId","data-v-f918489a"]]),fx=ea({__name:"HomeView",setup(t){return(e,n)=>(pf(),$y(hx))}}),dx=lA({history:Fb("/"),routes:[{path:"/",name:"home",component:fx}]});function HT(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function jT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const px=jT,YT=new nr("auth","Firebase",jT());/**
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
 */const Wl=new Ai("@firebase/auth");function mx(t,...e){Wl.logLevel<=ge.WARN&&Wl.warn(`Auth (${Ri}): ${t}`,...e)}function ll(t,...e){Wl.logLevel<=ge.ERROR&&Wl.error(`Auth (${Ri}): ${t}`,...e)}/**
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
 */function Vg(t,...e){throw _d(t,...e)}function GT(t,...e){return _d(t,...e)}function zT(t,e,n){const s=Object.assign(Object.assign({},px()),{[e]:n});return new nr("auth","Firebase",s).create(e,{appName:t.name})}function cl(t){return zT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _d(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return YT.create(t,...e)}function De(t,e,...n){if(!t)throw _d(e,...n)}function So(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Bl(t,e){t||So(e)}function gx(){return Fg()==="http:"||Fg()==="https:"}function Fg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _x(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gx()||hv()||"connection"in navigator)?navigator.onLine:!0}function yx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bl(n>e,"Short delay should be less than long delay!"),this.isMobile=yf()||fv()}get(){return _x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vx(t,e){Bl(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;So("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;So("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;So("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ex=new fa(3e4,6e4);function KT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fc(t,e,n,s,r={}){return QT(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=wf(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return AA()||(u.referrerPolicy="no-referrer"),qT.fetch()(await XT(t,t.config.apiHost,n,l),u)})}async function QT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},wx),e);try{const r=new Ix(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ja(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zT(t,f,u);Vg(t,f)}}catch(r){if(r instanceof Ln)throw r;Vg(t,"network-request-failed",{message:String(r)})}}async function XT(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?vx(t.config,r):`${t.config.apiScheme}://${r}`;return Tx.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Ix{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(GT(this.auth,"network-request-failed")),Ex.get())})}}function ja(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=GT(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Sx(t,e){return Fc(t,"POST","/v1/accounts:delete",e)}async function Hl(t,e){return Fc(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bx(t,e=!1){const n=dn(t),s=await n.getIdToken(e),r=JT(s);De(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:bo(Lu(r.auth_time)),issuedAtTime:bo(Lu(r.iat)),expirationTime:bo(Lu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lu(t){return Number(t)*1e3}function JT(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const r=vl(n);return r?JSON.parse(r):(ll("Failed to decode base64 JWT payload"),null)}catch(r){return ll("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ug(t){const e=JT(t);return De(e,"internal-error"),De(typeof e.exp<"u","internal-error"),De(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oh(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ln&&Ax(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Rx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Oh(t,Hl(n,{idToken:s}));De(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ZT(i.providerUserInfo):[],l=Px(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Cx(t){const e=dn(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Px(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ZT(t){return t.map(e=>{var{providerId:n}=e,s=HT(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function kx(t,e){const n=await QT(t,{},async()=>{const s=wf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await XT(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qT.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Nx(t,e){return Fc(t,"POST","/v2/accounts:revokeToken",KT(t,e))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){De(e.idToken,"internal-error"),De(typeof e.idToken<"u","internal-error"),De(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){De(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(De(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await kx(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ui;return s&&(De(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(De(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(De(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return So("not implemented")}}/**
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
 */function Ms(t,e){De(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=HT(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oh(this,this.stsTokenManager.getToken(this.auth,e));return De(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bx(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(De(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){De(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fs(this.auth.app))return Promise.reject(cl(this.auth));const e=await this.getIdToken();return await Oh(this,Sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,f;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:W,isAnonymous:ue,providerData:pe,stsTokenManager:I}=n;De(H&&I,e,"internal-error");const y=ui.fromJSON(this.name,I);De(typeof H=="string",e,"internal-error"),Ms(d,e.name),Ms(m,e.name),De(typeof W=="boolean",e,"internal-error"),De(typeof ue=="boolean",e,"internal-error"),Ms(_,e.name),Ms(R,e.name),Ms(N,e.name),Ms(D,e.name),Ms(j,e.name),Ms(B,e.name);const E=new jn({uid:H,auth:e,email:m,emailVerified:W,displayName:d,isAnonymous:ue,photoURL:R,phoneNumber:_,tenantId:N,stsTokenManager:y,createdAt:j,lastLoginAt:B});return pe&&Array.isArray(pe)&&(E.providerData=pe.map(S=>Object.assign({},S))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,s=!1){const r=new ui;r.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await jl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];De(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ZT(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new ui;l.updateFromIdToken(s);const c=new jn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Mh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const $g=new Map;function gr(t){Bl(t instanceof Function,"Expected a class definition");let e=$g.get(t);return e?(Bl(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$g.set(t,e),e)}/**
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
 */class eE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eE.type="NONE";const Wg=eE;/**
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
 */function Vu(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vu(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vu("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hl(this.auth,{idToken:e}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(gr(Wg),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||gr(Wg);const o=Vu(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await Hl(e,{idToken:f}).catch(()=>{});if(!m)break;d=await jn._fromGetAccountInfoResponse(e,m,f)}else d=jn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hi(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hi(i,e,s))}}/**
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
 */function Bg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vx(e))return"Blackberry";if(Fx(e))return"Webos";if(Ox(e))return"Safari";if((e.includes("chrome/")||Mx(e))&&!e.includes("edge/"))return"Chrome";if(Lx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dx(t=Nn()){return/firefox\//i.test(t)}function Ox(t=Nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mx(t=Nn()){return/crios\//i.test(t)}function xx(t=Nn()){return/iemobile/i.test(t)}function Lx(t=Nn()){return/android/i.test(t)}function Vx(t=Nn()){return/blackberry/i.test(t)}function Fx(t=Nn()){return/webos/i.test(t)}/**
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
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=Bg(Nn());break;case"Worker":n=`${Bg(Nn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
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
 */class Ux{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function $x(t,e={}){return Fc(t,"GET","/v2/passwordPolicy",KT(t,e))}/**
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
 */const Wx=6;class Bx{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Wx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Hx{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hg(this),this.idTokenSubscription=new Hg(this),this.beforeStateQueue=new Ux(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hl(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return De(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fs(this.app))return Promise.reject(cl(this));const n=e?dn(e):null;return n&&De(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&De(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fs(this.app)?Promise.reject(cl(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fs(this.app)?Promise.reject(cl(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $x(this),n=new Bx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;De(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(De(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return De(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(fs(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jx(t){return dn(t)}class Hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LA(n=>this.observer=n)}get next(){return De(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Yx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new fa(3e4,6e4);/**
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
 */new fa(2e3,1e4);/**
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
 */new fa(3e4,6e4);/**
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
 */new fa(5e3,15e3);var jg="@firebase/auth",Yg="1.10.0";/**
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
 */class Gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){De(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qx(t){Kt(new Ht("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;De(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},u=new Hx(s,r,i,c);return Yx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kt(new Ht("auth-internal",e=>{const n=jx(e.getProvider("auth").getImmediate());return(s=>new Gx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(jg,Yg,zx(t)),wt(jg,Yg,"esm2017")}/**
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
 */const Kx=5*60;IA("authIdTokenMaxAge");qx("Browser");/**
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
 */const Qx=new Map,Xx={activated:!1,tokenObservers:[]};function xn(t){return Qx.get(t)||Object.assign({},Xx)}const Gg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class Jx{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Fo,this.pending.promise.catch(n=>{}),await Zx(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Fo,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Zx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const eL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Yl=new nr("appCheck","AppCheck",eL);function nE(t){if(!xn(t).activated)throw Yl.create("use-before-activation",{appName:t.name})}/**
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
 */const tL="firebase-app-check-database",nL=1,xh="firebase-app-check-store";let Ya=null;function sL(){return Ya||(Ya=new Promise((t,e)=>{try{const n=indexedDB.open(tL,nL);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Yl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(xh,{keyPath:"compositeKey"})}}}catch(n){e(Yl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ya)}function rL(t,e){return iL(oL(t),e)}async function iL(t,e){const s=(await sL()).transaction(xh,"readwrite"),i=s.objectStore(xh).put({compositeKey:t,value:e});return new Promise((o,l)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;l(Yl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function oL(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Lh=new Ai("@firebase/app-check");function zg(t,e){return vf()?rL(t,e).catch(n=>{Lh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const aL={error:"UNKNOWN_ERROR"};function lL(t){return dc.encodeString(JSON.stringify(t),!1)}async function Vh(t,e=!1,n=!1){const s=t.app;nE(s);const r=xn(s);let i=r.token,o;if(i&&!ao(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(ao(u)?i=u:await zg(s,void 0))}if(!e&&i&&ao(i))return{token:i.token};let l=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),l=!0),i=await xn(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?Lh.warn(u.message):n&&Lh.error(u),o=u}let c;return i?o?ao(i)?c={token:i.token,internalError:o}:c=Kg(o):(c={token:i.token},r.token=i,await zg(s,i)):c=Kg(o),l&&fL(s,c),c}async function cL(t){const e=t.app;nE(e);const{provider:n}=xn(e);{const{token:s}=await n.getToken();return{token:s}}}function uL(t,e,n,s){const{app:r}=t,i=xn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ao(i.token)){const l=i.token;Promise.resolve().then(()=>{n({token:l.token}),qg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>qg(t))}function sE(t,e){const n=xn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function qg(t){const{app:e}=t,n=xn(e);let s=n.tokenRefresher;s||(s=hL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function hL(t){const{app:e}=t;return new Jx(async()=>{const n=xn(e);let s;if(n.token?s=await Vh(t,!0):s=await Vh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=xn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Gg.RETRIAL_MIN_WAIT,Gg.RETRIAL_MAX_WAIT)}function fL(t,e){const n=xn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ao(t){return t.expireTimeMillis-Date.now()>0}function Kg(t){return{token:lL(aL),error:t}}/**
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
 */class dL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=xn(this.app);for(const n of e)sE(this.app,n.next);return Promise.resolve()}}function pL(t,e){return new dL(t,e)}function mL(t){return{getToken:e=>Vh(t,e),getLimitedUseToken:()=>cL(t),addTokenListener:e=>uL(t,"INTERNAL",e),removeTokenListener:e=>sE(t.app,e)}}const gL="@firebase/app-check",_L="0.8.13",yL="app-check",Qg="app-check-internal";function vL(){Kt(new Ht(yL,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return pL(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Qg).initialize()})),Kt(new Ht(Qg,t=>{const e=t.getProvider("app-check").getImmediate();return mL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),wt(gL,_L)}vL();const wL=Symbol("firebaseApp");var Xg={};const Jg="@firebase/database",Zg="1.0.14";/**
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
 */let rE="";function TL(t){rE=t}/**
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
 */class EL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class IL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const iE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EL(e)}}catch{}return new IL},_r=iE("localStorage"),SL=iE("sessionStorage");/**
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
 */const fi=new Ai("@firebase/database"),bL=function(){let t=1;return function(){return t++}}(),oE=function(t){const e=$A(t),n=new xA;n.update(e);const s=n.digest();return dc.encodeByteArray(s)},da=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=da.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let Ao=null,e_=!0;const AL=function(t,e){K(!0,"Can't turn on custom loggers persistently."),fi.logLevel=ge.VERBOSE,Ao=fi.log.bind(fi)},kt=function(...t){if(e_===!0&&(e_=!1,Ao===null&&SL.get("logging_enabled")===!0&&AL()),Ao){const e=da.apply(null,t);Ao(e)}},pa=function(t){return function(...e){kt(t,...e)}},Fh=function(...t){const e="FIREBASE INTERNAL ERROR: "+da(...t);fi.error(e)},kr=function(...t){const e=`FIREBASE FATAL ERROR: ${da(...t)}`;throw fi.error(e),new Error(e)},nn=function(...t){const e="FIREBASE WARNING: "+da(...t);fi.warn(e)},RL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",Nr="[MAX_NAME]",Oi=function(t,e){if(t===e)return 0;if(t===Ii||e===Nr)return-1;if(e===Ii||t===Nr)return 1;{const n=t_(t),s=t_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},PL=function(t,e){return t===e?0:t<e?-1:1},to=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},yd=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=yd(t[e[s]]);return n+="}",n},lE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function pn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cE=function(t){K(!aE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,l,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const f=u.join("");let d="";for(c=0;c<64;c+=8){let m=parseInt(f.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),d=d+m}return d.toLowerCase()},kL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},DL=new RegExp("^-?(0*)\\d{1,10}$"),OL=-2147483648,ML=2147483647,t_=function(t){if(DL.test(t)){const e=Number(t);if(e>=OL&&e<=ML)return e}return null},ma=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nn("Exception was thrown by user callback.",n),e},Math.floor(0))}},xL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ro=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,fs(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class VL{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nn(e)}}/**
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
 */const vd="5",uE="v",hE="s",fE="r",dE="f",pE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mE="ls",gE="p",Uh="ac",_E="websocket",yE="long_polling";/**
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
 */class FL{constructor(e,n,s,r,i=!1,o="",l=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function UL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function vE(t,e,n){K(typeof e=="string","typeof type must == string"),K(typeof n=="object","typeof params must == object");let s;if(e===_E)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UL(t)&&(n.ns=t.namespace);const r=[];return pn(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class $L{constructor(){this.counters_={}}incrementCounter(e,n=1){bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mA(this.counters_)}}/**
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
 */const Fu={},Uu={};function wd(t){const e=t.toString();return Fu[e]||(Fu[e]=new $L),Fu[e]}function WL(t,e){const n=t.toString();return Uu[n]||(Uu[n]=e()),Uu[n]}/**
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
 */class BL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ma(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const n_="start",HL="close",jL="pLPCommand",YL="pRTLPCB",wE="id",TE="pw",EE="ser",GL="cb",zL="seg",qL="ts",KL="d",QL="dframe",IE=1870,SE=30,XL=IE-SE,JL=25e3,ZL=3e4;class ei{constructor(e,n,s,r,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pa(e),this.stats_=wd(n),this.urlFn=c=>(this.appCheckToken&&(c[Uh]=this.appCheckToken),vE(n,yE,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZL)),CL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Td((...i)=>{const[o,l,c,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===n_)this.id=l,this.password=c;else if(o===HL)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[n_]="t",s[EE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[GL]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uE]=vd,this.transportSessionId&&(s[hE]=this.transportSessionId),this.lastSessionId&&(s[mE]=this.lastSessionId),this.applicationId&&(s[gE]=this.applicationId),this.appCheckToken&&(s[Uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(s[fE]=dE);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ei.forceAllow_=!0}static forceDisallow(){ei.forceDisallow_=!0}static isAvailable(){return ei.forceAllow_?!0:!ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kL()&&!NL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lv(n),r=lE(s,XL);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QL]="t",s[wE]=e,s[TE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Td{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bL(),window[jL+this.uniqueCallbackIdentifier]=e,window[YL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Td.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){kt("frame writing exception"),l.stack&&kt(l.stack),kt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||kt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wE]=this.myID,e[TE]=this.myPW,e[EE]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+SE+s.length<=IE;){const o=this.pendingSegs.shift();s=s+"&"+zL+r+"="+o.seg+"&"+qL+r+"="+o.ts+"&"+KL+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(JL)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const eV=16384,tV=45e3;let Gl=null;typeof MozWebSocket<"u"?Gl=MozWebSocket:typeof WebSocket<"u"&&(Gl=WebSocket);class En{constructor(e,n,s,r,i,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pa(this.connId),this.stats_=wd(n),this.connURL=En.connectionURL_(n,o,l,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[uE]=vd,typeof location<"u"&&location.hostname&&pE.test(location.hostname)&&(o[fE]=dE),n&&(o[hE]=n),s&&(o[mE]=s),r&&(o[Uh]=r),i&&(o[gE]=i),vE(e,_E,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let s;RA(),this.mySock=new Gl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gl!==null&&!En.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Uo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lE(n,eV);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}En.responsesRequiredToBeHealthy=2;En.healthyTimeout=3e4;/**
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
 */class Xo{static get ALL_TRANSPORTS(){return[ei,En]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=En&&En.isAvailable();let s=n&&!En.previouslyFailed();if(e.webSocketOnly&&(n||nn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[En];else{const r=this.transports_=[];for(const i of Xo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Xo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xo.globalTransportInitialized_=!1;/**
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
 */const nV=6e4,sV=5e3,rV=10*1024,iV=100*1024,$u="t",s_="d",oV="s",r_="r",aV="e",i_="o",o_="a",a_="n",l_="p",lV="h";class cV{constructor(e,n,s,r,i,o,l,c,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pa("c:"+this.id+":"),this.transportManager_=new Xo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($u in e){const n=e[$u];n===o_?this.upgradeIfSecondaryHealthy_():n===r_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===i_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=to("t",e),s=to("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:l_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:o_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:a_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=to("t",e),s=to("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=to($u,e);if(s_ in e){const s=e[s_];if(n===lV){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===a_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oV?this.onConnectionShutdown_(s):n===r_?this.onReset_(s):n===aV?Fh("Server Error: "+s):n===i_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vd!==s&&nn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:l_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bE{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class AE{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){K(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class zl extends AE{static getInstance(){return new zl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const c_=32,u_=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ve(){return new ze("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Js(t){return t.pieces_.length-t.pieceNum_}function Ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function RE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function CE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function PE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function ft(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ze(n,0)}function we(t){return t.pieceNum_>=t.pieces_.length}function fn(t,e){const n=Se(t),s=Se(e);if(n===null)return e;if(n===s)return fn(Ye(t),Ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kE(t,e){if(Js(t)!==Js(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Js(t)>Js(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class hV{constructor(e,n){this.errorPrefix_=n,this.parts_=CE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=mc(this.parts_[s]);NE(this)}}function fV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mc(e),NE(t)}function dV(t){const e=t.parts_.pop();t.byteLength_-=mc(e),t.parts_.length>0&&(t.byteLength_-=1)}function NE(t){if(t.byteLength_>u_)throw new Error(t.errorPrefix_+"has a key path longer than "+u_+" bytes ("+t.byteLength_+").");if(t.parts_.length>c_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+c_+") or object contains a cycle "+fr(t))}function fr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ed extends AE{static getInstance(){return new Ed}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const no=1e3,pV=60*5*1e3,h_=30*1e3,mV=1.3,gV=3e4,_V="server_kill",f_=3;class Ts extends bE{constructor(e,n,s,r,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Ts.nextPersistentConnectionId_++,this.log_=pa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=no,this.maxReconnectDelay_=pV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(yt(i)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Fo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Ts.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bs(e,"w")){const s=_i(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();nn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=h_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fh("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gV&&(this.reconnectDelay_=no),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ts.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},u=function(d){K(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?kt("getToken() completed but was canceled"):(kt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=m&&m.token,l=new cV(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{nn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(_V)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nn(d),c())}}}interrupt(e){kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sm(this.interruptReasons_)&&(this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>yd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=f_&&(this.reconnectDelay_=h_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=f_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+rE.replace(/\./g,"-")]=1,yf()?e["framework.cordova"]=1:fv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zl.getInstance().currentlyOnline();return Sm(this.interruptReasons_)&&e}}Ts.nextPersistentConnectionId_=0;Ts.nextConnectionId_=0;/**
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
 */class be{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new be(e,n)}}/**
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
 */class Uc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new be(Ii,e),r=new be(Ii,n);return this.compare(s,r)!==0}minPost(){return be.MIN}}/**
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
 */let Ga;class DE extends Uc{static get __EMPTY_NODE(){return Ga}static set __EMPTY_NODE(e){Ga=e}compare(e,n){return Oi(e.name,n.name)}isDefinedOn(e){throw bi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return be.MIN}maxPost(){return new be(Nr,Ga)}makePost(e,n){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Ga)}toString(){return".key"}}const di=new DE;/**
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
 */class za{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ut.RED,this.left=r??zt.EMPTY_NODE,this.right=i??zt.EMPTY_NODE}copy(e,n,s,r,i){return new ut(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class yV{copy(e,n,s,r,i){return this}insert(e,n,s){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new za(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new za(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new za(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new za(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new yV;/**
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
 */function vV(t,e){return Oi(t.name,e.name)}function Id(t,e){return Oi(t,e)}/**
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
 */let $h;function wV(t){$h=t}const OE=function(t){return typeof t=="number"?"number:"+cE(t):"string:"+t},ME=function(t){if(t.isLeafNode()){const e=t.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bs(e,".sv"),"Priority must be a string or number.")}else K(t===$h||t.isEmpty(),"priority of unexpected type.");K(t===$h||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let d_;class lt{static set __childrenNodeConstructor(e){d_=e}static get __childrenNodeConstructor(){return d_}constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ME(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:Se(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||Js(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+OE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cE(this.value_):e+=this.value_,this.lazyHash_=oE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=lt.VALUE_TYPE_ORDER.indexOf(n),i=lt.VALUE_TYPE_ORDER.indexOf(s);return K(r>=0,"Unknown leaf type: "+n),K(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xE,LE;function TV(t){xE=t}function EV(t){LE=t}class IV extends Uc{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Oi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return be.MIN}maxPost(){return new be(Nr,new lt("[PRIORITY-POST]",LE))}makePost(e,n){const s=xE(e);return new be(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Dt=new IV;/**
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
 */const SV=Math.log(2);class bV{constructor(e){const n=i=>parseInt(Math.log(i)/SV,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ql=function(t,e,n,s){t.sort(e);const r=function(c,u){const f=u-c;let d,m;if(f===0)return null;if(f===1)return d=t[c],m=n?n(d):d,new ut(m,d.node,ut.BLACK,null,null);{const _=parseInt(f/2,10)+c,R=r(c,_),N=r(_+1,u);return d=t[_],m=n?n(d):d,new ut(m,d.node,ut.BLACK,R,N)}},i=function(c){let u=null,f=null,d=t.length;const m=function(R,N){const D=d-R,j=d;d-=R;const B=r(D+1,j),H=t[D],W=n?n(H):H;_(new ut(W,H.node,N,null,B))},_=function(R){u?(u.left=R,u=R):(f=R,u=R)};for(let R=0;R<c.count;++R){const N=c.nextBitIsOne(),D=Math.pow(2,c.count-(R+1));N?m(D,ut.BLACK):(m(D,ut.BLACK),m(D,ut.RED))}return f},o=new bV(t.length),l=i(o);return new zt(s||e,l)};/**
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
 */let Wu;const Gr={};class ms{static get Default(){return K(Gr&&Dt,"ChildrenNode.ts has not been loaded"),Wu=Wu||new ms({".priority":Gr},{".priority":Dt}),Wu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=_i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return bs(this.indexSet_,e.toString())}addIndex(e,n){K(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(be.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let l;r?l=ql(s,e.getCompare()):l=Gr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new ms(f,u)}addToIndexes(e,n){const s=wl(this.indexes_,(r,i)=>{const o=_i(this.indexSet_,i);if(K(o,"Missing index implementation for "+i),r===Gr)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(be.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),ql(l,o.getCompare())}else return Gr;else{const l=n.get(e.name);let c=r;return l&&(c=c.remove(new be(e.name,l))),c.insert(e,e.node)}});return new ms(s,this.indexSet_)}removeFromIndexes(e,n){const s=wl(this.indexes_,r=>{if(r===Gr)return r;{const i=n.get(e.name);return i?r.remove(new be(e.name,i)):r}});return new ms(s,this.indexSet_)}}/**
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
 */let so;class Le{static get EMPTY_NODE(){return so||(so=new Le(new zt(Id),null,ms.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ME(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||so}updatePriority(e){return this.children_.isEmpty()?this:new Le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?so:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(Ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(K(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new be(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?so:this.priorityNode_;return new Le(r,o,i)}}updateChild(e,n){const s=Se(e);if(s===null)return n;{K(Se(e)!==".priority"||Js(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Ye(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Dt,(o,l)=>{n[o]=l.val(e),s++,i&&Le.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+OE(this.getPriority().val())+":"),this.forEachChild(Dt,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":oE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new be(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new be(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new be(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ga?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Dt),r=n.getIterator(Dt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}Le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AV extends Le{constructor(){super(new zt(Id),Le.EMPTY_NODE,ms.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Le.EMPTY_NODE}isEmpty(){return!1}}const ga=new AV;Object.defineProperties(be,{MIN:{value:new be(Ii,Le.EMPTY_NODE)},MAX:{value:new be(Nr,ga)}});DE.__EMPTY_NODE=Le.EMPTY_NODE;lt.__childrenNodeConstructor=Le;wV(ga);EV(ga);/**
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
 */const RV=!0;function Nt(t,e=null){if(t===null)return Le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,Nt(e))}if(!(t instanceof Array)&&RV){const n=[];let s=!1;if(pn(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Nt(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new be(o,c)))}}),n.length===0)return Le.EMPTY_NODE;const i=ql(n,vV,o=>o.name,Id);if(s){const o=ql(n,Dt.getCompare());return new Le(i,Nt(e),new ms({".priority":o},{".priority":Dt}))}else return new Le(i,Nt(e),ms.Default)}else{let n=Le.EMPTY_NODE;return pn(t,(s,r)=>{if(bs(t,s)&&s.substring(0,1)!=="."){const i=Nt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Nt(e))}}TV(Nt);/**
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
 */class CV extends Uc{constructor(e){super(),this.indexPath_=e,K(!we(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Oi(e.name,n.name):i}makePost(e,n){const s=Nt(e),r=Le.EMPTY_NODE.updateChild(this.indexPath_,s);return new be(n,r)}maxPost(){const e=Le.EMPTY_NODE.updateChild(this.indexPath_,ga);return new be(Nr,e)}toString(){return CE(this.indexPath_,0).join("/")}}/**
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
 */class PV extends Uc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Oi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,n){const s=Nt(e);return new be(n,s)}toString(){return".value"}}const kV=new PV;/**
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
 */function NV(t){return{type:"value",snapshotNode:t}}function DV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function OV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function p_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dt}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function m_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Dt?n="$priority":t.index_===kV?n="$value":t.index_===di?n="$key":(K(t.index_ instanceof CV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function g_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Dt&&(e.i=t.index_.toString()),e}/**
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
 */class Kl extends bE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=pa("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Kl.getListenId_(e,s),l={};this.listens_[o]=l;const c=m_(e._queryParams);this.restRequest_(i+".json",c,(u,f)=>{let d=f;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),_i(this.listens_,o)===l){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",r(m,null)}})}unlisten(e,n){const s=Kl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=m_(e._queryParams),s=e._path.toString(),r=new Fo;return this.restRequest_(s+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(s,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wf(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Uo(l.responseText)}catch{nn("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&nn("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class xV{constructor(){this.rootNode_=Le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ql(){return{value:null,children:new Map}}function VE(t,e,n){if(we(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Se(e);t.children.has(s)||t.children.set(s,Ql());const r=t.children.get(s);e=Ye(e),VE(r,e,n)}}function Wh(t,e,n){t.value!==null?n(e,t.value):LV(t,(s,r)=>{const i=new ze(e.toString()+"/"+s);Wh(r,i,n)})}function LV(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class VV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&pn(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const __=10*1e3,FV=30*1e3,UV=5*60*1e3;class $V{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VV(e);const s=__+(FV-__)*Math.random();Ro(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;pn(e,(r,i)=>{i>0&&bs(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*UV))}}/**
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
 */var Yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function FE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function UE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $E(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Yn.ACK_USER_WRITE,this.source=FE()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new Xl(Ve(),n,this.revert)}}else return K(Se(this.path)===e,"operationForChild called for unrelated child."),new Xl(Ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Dr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Yn.OVERWRITE}operationForChild(e){return we(this.path)?new Dr(this.source,Ve(),this.snap.getImmediateChild(e)):new Dr(this.source,Ye(this.path),this.snap)}}/**
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
 */class Jo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Yn.MERGE}operationForChild(e){if(we(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new Dr(this.source,Ve(),n.value):new Jo(this.source,Ve(),n)}else return K(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jo(this.source,Ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WV(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(MV(o.childName,o.snapshotNode))}),ro(t,r,"child_removed",e,s,n),ro(t,r,"child_added",e,s,n),ro(t,r,"child_moved",i,s,n),ro(t,r,"child_changed",e,s,n),ro(t,r,"value",e,s,n),r}function ro(t,e,n,s,r,i){const o=s.filter(l=>l.type===n);o.sort((l,c)=>HV(t,l,c)),o.forEach(l=>{const c=BV(t,l,i);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function BV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HV(t,e,n){if(e.childName==null||n.childName==null)throw bi("Should only compare child_ events.");const s=new be(e.childName,e.snapshotNode),r=new be(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function WE(t,e){return{eventCache:t,serverCache:e}}function Co(t,e,n,s){return WE(new bd(e,n,s),t.serverCache)}function BE(t,e,n,s){return WE(t.eventCache,new bd(e,n,s))}function Bh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Or(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Bu;const jV=()=>(Bu||(Bu=new zt(PL)),Bu);class je{static fromObject(e){let n=new je(null);return pn(e,(s,r)=>{n=n.set(new ze(s),r)}),n}constructor(e,n=jV()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ve(),value:this.value};if(we(e))return null;{const s=Se(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Ye(e),n);return i!=null?{path:ft(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const n=Se(e),s=this.children.get(n);return s!==null?s.subtree(Ye(e)):new je(null)}}set(e,n){if(we(e))return new je(n,this.children);{const s=Se(e),i=(this.children.get(s)||new je(null)).set(Ye(e),n),o=this.children.insert(s,i);return new je(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Se(e),s=this.children.get(n);if(s){const r=s.remove(Ye(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new je(null):new je(this.value,i)}else return this}}get(e){if(we(e))return this.value;{const n=Se(e),s=this.children.get(n);return s?s.get(Ye(e)):null}}setTree(e,n){if(we(e))return n;{const s=Se(e),i=(this.children.get(s)||new je(null)).setTree(Ye(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new je(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ft(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ve(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(we(e))return null;{const i=Se(e),o=this.children.get(i);return o?o.findOnPath_(Ye(e),ft(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ve(),n)}foreachOnPath_(e,n,s){if(we(e))return this;{this.value&&s(n,this.value);const r=Se(e),i=this.children.get(r);return i?i.foreachOnPath_(Ye(e),ft(n,r),s):new je(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ft(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new je(null))}}function Po(t,e,n){if(we(e))return new Pn(new je(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=fn(r,e);return i=i.updateChild(o,n),new Pn(t.writeTree_.set(r,i))}else{const r=new je(n),i=t.writeTree_.setTree(e,r);return new Pn(i)}}}function y_(t,e,n){let s=t;return pn(n,(r,i)=>{s=Po(s,ft(e,r),i)}),s}function v_(t,e){if(we(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new je(null));return new Pn(n)}}function Hh(t,e){return Fr(t,e)!=null}function Fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(fn(n.path,e)):null}function w_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Dt,(s,r)=>{e.push(new be(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new be(s,r.value))}),e}function Gs(t,e){if(we(e))return t;{const n=Fr(t,e);return n!=null?new Pn(new je(n)):new Pn(t.writeTree_.subtree(e))}}function jh(t){return t.writeTree_.isEmpty()}function Si(t,e){return HE(Ve(),t.writeTree_,e)}function HE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(K(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=HE(ft(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ft(t,".priority"),s)),n}}/**
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
 */function jE(t,e){return KE(e,t)}function YV(t,e,n,s,r){K(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Po(t.visibleWrites,e,n)),t.lastWriteId=s}function GV(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zV(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);K(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&qV(l,s.path)?r=!1:bn(s.path,l.path)&&(i=!0)),o--}if(r){if(i)return KV(t),!0;if(s.snap)t.visibleWrites=v_(t.visibleWrites,s.path);else{const l=s.children;pn(l,c=>{t.visibleWrites=v_(t.visibleWrites,ft(s.path,c))})}return!0}else return!1}function qV(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(ft(t.path,n),e))return!0;return!1}function KV(t){t.visibleWrites=YE(t.allWrites,QV,Ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QV(t){return t.visible}function YE(t,e,n){let s=Pn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let l;if(i.snap)bn(n,o)?(l=fn(n,o),s=Po(s,l,i.snap)):bn(o,n)&&(l=fn(o,n),s=Po(s,Ve(),i.snap.getChild(l)));else if(i.children){if(bn(n,o))l=fn(n,o),s=y_(s,l,i.children);else if(bn(o,n))if(l=fn(o,n),we(l))s=y_(s,Ve(),i.children);else{const c=_i(i.children,Se(l));if(c){const u=c.getChild(Ye(l));s=Po(s,Ve(),u)}}}else throw bi("WriteRecord should have .snap or .children")}}return s}function GE(t,e,n,s,r){if(!s&&!r){const i=Fr(t.visibleWrites,e);if(i!=null)return i;{const o=Gs(t.visibleWrites,e);if(jh(o))return n;if(n==null&&!Hh(o,Ve()))return null;{const l=n||Le.EMPTY_NODE;return Si(o,l)}}}else{const i=Gs(t.visibleWrites,e);if(!r&&jh(i))return n;if(!r&&n==null&&!Hh(i,Ve()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(bn(u.path,e)||bn(e,u.path))},l=YE(t.allWrites,o,e),c=n||Le.EMPTY_NODE;return Si(l,c)}}}function XV(t,e,n){let s=Le.EMPTY_NODE;const r=Fr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Dt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Gs(t.visibleWrites,e);return n.forEachChild(Dt,(o,l)=>{const c=Si(Gs(i,new ze(o)),l);s=s.updateImmediateChild(o,c)}),w_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Gs(t.visibleWrites,e);return w_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function JV(t,e,n,s,r){K(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ft(e,n);if(Hh(t.visibleWrites,i))return null;{const o=Gs(t.visibleWrites,i);return jh(o)?r.getChild(n):Si(o,r.getChild(n))}}function ZV(t,e,n,s){const r=ft(e,n),i=Fr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Gs(t.visibleWrites,r);return Si(o,s.getNode().getImmediateChild(n))}else return null}function eF(t,e){return Fr(t.visibleWrites,e)}function tF(t,e,n,s,r,i,o){let l;const c=Gs(t.visibleWrites,e),u=Fr(c,Ve());if(u!=null)l=u;else if(n!=null)l=Si(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),m=i?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=m.getNext();for(;_&&f.length<r;)d(_,s)!==0&&f.push(_),_=m.getNext();return f}else return[]}function nF(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Yh(t,e,n,s){return GE(t.writeTree,t.treePath,e,n,s)}function zE(t,e){return XV(t.writeTree,t.treePath,e)}function T_(t,e,n,s){return JV(t.writeTree,t.treePath,e,n,s)}function Jl(t,e){return eF(t.writeTree,ft(t.treePath,e))}function sF(t,e,n,s,r,i){return tF(t.writeTree,t.treePath,e,n,s,r,i)}function Ad(t,e,n){return ZV(t.writeTree,t.treePath,e,n)}function qE(t,e){return KE(ft(t.treePath,e),t.writeTree)}function KE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;K(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,p_(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,OV(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,DV(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,p_(s,e.snapshotNode,r.oldSnap));else throw bi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class iF{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const QE=new iF;class Rd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new bd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ad(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Or(this.viewCache_),i=sF(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function oF(t,e){K(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aF(t,e,n,s,r){const i=new rF;let o,l;if(n.type===Yn.OVERWRITE){const u=n;u.source.fromUser?o=Gh(t,e,u.path,u.snap,s,r,i):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!we(u.path),o=Zl(t,e,u.path,u.snap,s,r,l,i))}else if(n.type===Yn.MERGE){const u=n;u.source.fromUser?o=cF(t,e,u.path,u.children,s,r,i):(K(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zh(t,e,u.path,u.children,s,r,l,i))}else if(n.type===Yn.ACK_USER_WRITE){const u=n;u.revert?o=fF(t,e,u.path,s,r,i):o=uF(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Yn.LISTEN_COMPLETE)o=hF(t,e,n.path,s,i);else throw bi("Unknown operation type: "+n.type);const c=i.getChanges();return lF(e,o,c),{viewCache:o,changes:c}}function lF(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Bh(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(NV(Bh(e)))}}function XE(t,e,n,s,r,i){const o=e.eventCache;if(Jl(s,n)!=null)return e;{let l,c;if(we(n))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Or(e),f=u instanceof Le?u:Le.EMPTY_NODE,d=zE(s,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Yh(s,Or(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Se(n);if(u===".priority"){K(Js(n)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const d=T_(s,n,f,c);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=Ye(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=T_(s,n,o.getNode(),c);m!=null?d=o.getNode().getImmediateChild(u).updateChild(f,m):d=o.getNode().getImmediateChild(u)}else d=Ad(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,f,r,i):l=o.getNode()}}return Co(e,l,o.isFullyInitialized()||we(n),t.filter.filtersNodes())}}function Zl(t,e,n,s,r,i,o,l){const c=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(we(n))u=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=f.updateFullNode(c.getNode(),_,null)}else{const _=Se(n);if(!c.isCompleteForPath(n)&&Js(n)>1)return e;const R=Ye(n),D=c.getNode().getImmediateChild(_).updateChild(R,s);_===".priority"?u=f.updatePriority(c.getNode(),D):u=f.updateChild(c.getNode(),_,D,R,QE,null)}const d=BE(e,u,c.isFullyInitialized()||we(n),f.filtersNodes()),m=new Rd(r,d,i);return XE(t,d,n,r,m,l)}function Gh(t,e,n,s,r,i,o){const l=e.eventCache;let c,u;const f=new Rd(r,e,i);if(we(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Co(e,u,!0,t.filter.filtersNodes());else{const d=Se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=Co(e,u,l.isFullyInitialized(),l.isFiltered());else{const m=Ye(n),_=l.getNode().getImmediateChild(d);let R;if(we(m))R=s;else{const N=f.getCompleteChild(d);N!=null?RE(m)===".priority"&&N.getChild(PE(m)).isEmpty()?R=N:R=N.updateChild(m,s):R=Le.EMPTY_NODE}if(_.equals(R))c=e;else{const N=t.filter.updateChild(l.getNode(),d,R,m,f,o);c=Co(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function E_(t,e){return t.eventCache.isCompleteForChild(e)}function cF(t,e,n,s,r,i,o){let l=e;return s.foreach((c,u)=>{const f=ft(n,c);E_(e,Se(f))&&(l=Gh(t,l,f,u,r,i,o))}),s.foreach((c,u)=>{const f=ft(n,c);E_(e,Se(f))||(l=Gh(t,l,f,u,r,i,o))}),l}function I_(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function zh(t,e,n,s,r,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;we(n)?u=s:u=new je(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((d,m)=>{if(f.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),R=I_(t,_,m);c=Zl(t,c,new ze(d),R,r,i,o,l)}}),u.children.inorderTraversal((d,m)=>{const _=!e.serverCache.isCompleteForChild(d)&&m.value===null;if(!f.hasChild(d)&&!_){const R=e.serverCache.getNode().getImmediateChild(d),N=I_(t,R,m);c=Zl(t,c,new ze(d),N,r,i,o,l)}}),c}function uF(t,e,n,s,r,i,o){if(Jl(r,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(we(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Zl(t,e,n,c.getNode().getChild(n),r,i,l,o);if(we(n)){let u=new je(null);return c.getNode().forEachChild(di,(f,d)=>{u=u.set(new ze(f),d)}),zh(t,e,n,u,r,i,l,o)}else return e}else{let u=new je(null);return s.foreach((f,d)=>{const m=ft(n,f);c.isCompleteForPath(m)&&(u=u.set(f,c.getNode().getChild(m)))}),zh(t,e,n,u,r,i,l,o)}}function hF(t,e,n,s,r){const i=e.serverCache,o=BE(e,i.getNode(),i.isFullyInitialized()||we(n),i.isFiltered());return XE(t,o,n,s,QE,r)}function fF(t,e,n,s,r,i){let o;if(Jl(s,n)!=null)return e;{const l=new Rd(s,e,r),c=e.eventCache.getNode();let u;if(we(n)||Se(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Yh(s,Or(e));else{const d=e.serverCache.getNode();K(d instanceof Le,"serverChildren would be complete if leaf node"),f=zE(s,d)}f=f,u=t.filter.updateFullNode(c,f,i)}else{const f=Se(n);let d=Ad(s,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),d!=null?u=t.filter.updateChild(c,f,d,Ye(n),l,i):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(c,f,Le.EMPTY_NODE,Ye(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yh(s,Or(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Jl(s,Ve())!=null,Co(e,u,o,t.filter.filtersNodes())}}function dF(t,e){const n=Or(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!we(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function S_(t,e,n,s){e.type===Yn.MERGE&&e.source.queryId!==null&&(K(Or(t.viewCache_),"We should always have a full cache before handling merges"),K(Bh(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=aF(t.processor_,r,e,n,s);return oF(t.processor_,i.viewCache),K(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,pF(t,i.changes,i.viewCache.eventCache.getNode())}function pF(t,e,n,s){const r=t.eventRegistrations_;return WV(t.eventGenerator_,e,n,r)}/**
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
 */let b_;function mF(t){K(!b_,"__referenceConstructor has already been defined"),b_=t}function Cd(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return K(i!=null,"SyncTree gave us an op for an invalid query."),S_(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(S_(o,e,n,s));return i}}function Pd(t,e){let n=null;for(const s of t.views.values())n=n||dF(s,e);return n}/**
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
 */let A_;function gF(t){K(!A_,"__referenceConstructor has already been defined"),A_=t}class R_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=nF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _F(t,e,n,s,r){return YV(t.pendingWriteTree_,e,n,s,r),r?Wc(t,new Dr(FE(),e,n)):[]}function ti(t,e,n=!1){const s=GV(t.pendingWriteTree_,e);if(zV(t.pendingWriteTree_,e)){let i=new je(null);return s.snap!=null?i=i.set(Ve(),!0):pn(s.children,o=>{i=i.set(new ze(o),!0)}),Wc(t,new Xl(s.path,i,n))}else return[]}function $c(t,e,n){return Wc(t,new Dr(UE(),e,n))}function yF(t,e,n){const s=je.fromObject(n);return Wc(t,new Jo(UE(),e,s))}function vF(t,e,n,s){const r=tI(t,s);if(r!=null){const i=nI(r),o=i.path,l=i.queryId,c=fn(o,e),u=new Dr($E(l),c,n);return sI(t,o,u)}else return[]}function wF(t,e,n,s){const r=tI(t,s);if(r){const i=nI(r),o=i.path,l=i.queryId,c=fn(o,e),u=je.fromObject(n),f=new Jo($E(l),c,u);return sI(t,o,f)}else return[]}function JE(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=fn(o,e),u=Pd(l,c);if(u)return u});return GE(r,e,i,n,!0)}function Wc(t,e){return ZE(e,t.syncPointTree_,null,jE(t.pendingWriteTree_,Ve()))}function ZE(t,e,n,s){if(we(t.path))return eI(t,e,n,s);{const r=e.get(Ve());n==null&&r!=null&&(n=Pd(r,Ve()));let i=[];const o=Se(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,f=qE(s,o);i=i.concat(ZE(l,c,u,f))}return r&&(i=i.concat(Cd(r,t,s,n))),i}}function eI(t,e,n,s){const r=e.get(Ve());n==null&&r!=null&&(n=Pd(r,Ve()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=qE(s,o),f=t.operationForChild(o);f&&(i=i.concat(eI(f,l,c,u)))}),r&&(i=i.concat(Cd(r,t,s,n))),i}function tI(t,e){return t.tagToQueryMap.get(e)}function nI(t){const e=t.indexOf("$");return K(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function sI(t,e,n){const s=t.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const r=jE(t.pendingWriteTree_,e);return Cd(s,n,r,null)}/**
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
 */class kd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new Nd(this.syncTree_,n)}node(){return JE(this.syncTree_,this.path_)}}const TF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},C_=function(t,e,n){if(!t||typeof t!="object")return t;if(K(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return EF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IF(t[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},EF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:K(!1,"Unexpected server value: "+t)}},IF=function(t,e,n){t.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const r=e.node();if(K(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},SF=function(t,e,n,s){return Dd(e,new Nd(n,t),s)},bF=function(t,e,n){return Dd(t,new kd(e),n)};function Dd(t,e,n){const s=t.getPriority().val(),r=C_(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=C_(o.getValue(),e,n);return l!==o.getValue()||r!==o.getPriority().val()?new lt(l,Nt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new lt(r))),o.forEachChild(Dt,(l,c)=>{const u=Dd(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
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
 */class Od{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Md(t,e){let n=e instanceof ze?e:new ze(e),s=t,r=Se(n);for(;r!==null;){const i=_i(s.node.children,r)||{children:{},childCount:0};s=new Od(r,s,i),n=Ye(n),r=Se(n)}return s}function Mi(t){return t.node.value}function rI(t,e){t.node.value=e,qh(t)}function iI(t){return t.node.childCount>0}function AF(t){return Mi(t)===void 0&&!iI(t)}function Bc(t,e){pn(t.node.children,(n,s)=>{e(new Od(n,t,s))})}function oI(t,e,n,s){n&&e(t),Bc(t,r=>{oI(r,e,!0)})}function RF(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _a(t){return new ze(t.parent===null?t.name:_a(t.parent)+"/"+t.name)}function qh(t){t.parent!==null&&CF(t.parent,t.name,t)}function CF(t,e,n){const s=AF(n),r=bs(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,qh(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,qh(t))}/**
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
 */const PF=/[\[\].#$\/\u0000-\u001F\u007F]/,kF=/[\[\].#$\u0000-\u001F\u007F]/,Hu=10*1024*1024,aI=function(t){return typeof t=="string"&&t.length!==0&&!PF.test(t)},NF=function(t){return typeof t=="string"&&t.length!==0&&!kF.test(t)},DF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),NF(t)},lI=function(t,e,n){const s=n instanceof ze?new hV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fr(s));if(typeof e=="function")throw new Error(t+"contains a function "+fr(s)+" with contents = "+e.toString());if(aE(e))throw new Error(t+"contains "+e.toString()+" "+fr(s));if(typeof e=="string"&&e.length>Hu/3&&mc(e)>Hu)throw new Error(t+"contains a string greater than "+Hu+" utf8 bytes "+fr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(pn(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!aI(o)))throw new Error(t+" contains an invalid key ("+o+") "+fr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fV(s,o),lI(t,l,s),dV(s)}),r&&i)throw new Error(t+' contains ".value" child '+fr(s)+" in addition to actual children.")}},OF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!aI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DF(n))throw new Error(UA(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class MF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xF(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!kE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Ur(t,e,n){xF(t,n),LF(t,s=>bn(s,e)||bn(e,s))}function LF(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(VF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function VF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ao&&kt("event: "+n.toString()),ma(s)}}}/**
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
 */const FF="repo_interrupt",UF=25;class $F{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ql(),this.transactionQueueTree_=new Od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WF(t,e,n){if(t.stats_=wd(t.repoInfo_),t.forceRestClient_||xL())t.server_=new Kl(t.repoInfo_,(s,r,i,o)=>{P_(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>k_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ts(t.repoInfo_,e,(s,r,i,o)=>{P_(t,s,r,i,o)},s=>{k_(t,s)},s=>{HF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=WL(t.repoInfo_,()=>new $V(t.stats_,t.server_)),t.infoData_=new xV,t.infoSyncTree_=new R_({startListening:(s,r,i,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=$c(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xd(t,"connected",!1),t.serverSyncTree_=new R_({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(l,c)=>{const u=o(l,c);Ur(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function BF(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cI(t){return TF({timestamp:BF(t)})}function P_(t,e,n,s,r){t.dataUpdateCount++;const i=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=wl(n,u=>Nt(u));o=wF(t.serverSyncTree_,i,c,r)}else{const c=Nt(n);o=vF(t.serverSyncTree_,i,c,r)}else if(s){const c=wl(n,u=>Nt(u));o=yF(t.serverSyncTree_,i,c)}else{const c=Nt(n);o=$c(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=Vd(t,i)),Ur(t.eventQueue_,l,o)}function k_(t,e){xd(t,"connected",e),e===!1&&YF(t)}function HF(t,e){pn(e,(n,s)=>{xd(t,n,s)})}function xd(t,e,n){const s=new ze("/.info/"+e),r=Nt(n);t.infoData_.updateSnapshot(s,r);const i=$c(t.infoSyncTree_,s,r);Ur(t.eventQueue_,s,i)}function jF(t){return t.nextWriteId_++}function YF(t){uI(t,"onDisconnectEvents");const e=cI(t),n=Ql();Wh(t.onDisconnect_,Ve(),(r,i)=>{const o=SF(r,i,t.serverSyncTree_,e);VE(n,r,o)});let s=[];Wh(n,Ve(),(r,i)=>{s=s.concat($c(t.serverSyncTree_,r,i));const o=KF(t,r);Vd(t,o)}),t.onDisconnect_=Ql(),Ur(t.eventQueue_,Ve(),s)}function GF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(FF)}function uI(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),kt(n,...e)}function hI(t,e,n){return JE(t.serverSyncTree_,e,n)||Le.EMPTY_NODE}function Ld(t,e=t.transactionQueueTree_){if(e||Hc(t,e),Mi(e)){const n=dI(t,e);K(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&zF(t,_a(e),n)}else iI(e)&&Bc(e,n=>{Ld(t,n)})}function zF(t,e,n){const s=n.map(u=>u.currentWriteId),r=hI(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const f=n[u];K(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=fn(e,f.path);i=i.updateChild(d,f.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{uI(t,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const d=[];for(let m=0;m<n.length;m++)n[m].status=2,f=f.concat(ti(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&d.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Hc(t,Md(t.transactionQueueTree_,e)),Ld(t,t.transactionQueueTree_),Ur(t.eventQueue_,e,f);for(let m=0;m<d.length;m++)ma(d[m])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nn("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Vd(t,e)}},o)}function Vd(t,e){const n=fI(t,e),s=_a(n),r=dI(t,n);return qF(t,r,s),s}function qF(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=fn(n,c.path);let f=!1,d;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,d=c.abortReason,r=r.concat(ti(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=UF)f=!0,d="maxretry",r=r.concat(ti(t.serverSyncTree_,c.currentWriteId,!0));else{const m=hI(t,c.path,o);c.currentInputSnapshot=m;const _=e[l].update(m.val());if(_!==void 0){lI("transaction failed: Data returned ",_,c.path);let R=Nt(_);typeof _=="object"&&_!=null&&bs(_,".priority")||(R=R.updatePriority(m.getPriority()));const D=c.currentWriteId,j=cI(t),B=bF(R,m,j);c.currentOutputSnapshotRaw=R,c.currentOutputSnapshotResolved=B,c.currentWriteId=jF(t),o.splice(o.indexOf(D),1),r=r.concat(_F(t.serverSyncTree_,c.path,B,c.currentWriteId,c.applyLocally)),r=r.concat(ti(t.serverSyncTree_,D,!0))}else f=!0,d="nodata",r=r.concat(ti(t.serverSyncTree_,c.currentWriteId,!0))}Ur(t.eventQueue_,n,r),r=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Hc(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)ma(s[l]);Ld(t,t.transactionQueueTree_)}function fI(t,e){let n,s=t.transactionQueueTree_;for(n=Se(e);n!==null&&Mi(s)===void 0;)s=Md(s,n),e=Ye(e),n=Se(e);return s}function dI(t,e){const n=[];return pI(t,e,n),n.sort((s,r)=>s.order-r.order),n}function pI(t,e,n){const s=Mi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Bc(e,r=>{pI(t,r,n)})}function Hc(t,e){const n=Mi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,rI(e,n.length>0?n:void 0)}Bc(e,s=>{Hc(t,s)})}function KF(t,e){const n=_a(fI(t,e)),s=Md(t.transactionQueueTree_,e);return RF(s,r=>{ju(t,r)}),ju(t,s),oI(s,r=>{ju(t,r)}),n}function ju(t,e){const n=Mi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(K(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(K(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ti(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?rI(e,void 0):n.length=i+1,Ur(t.eventQueue_,_a(e),r);for(let o=0;o<s.length;o++)ma(s[o])}}/**
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
 */function QF(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function XF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nn(`Invalid query segment '${n}' in query '${t}'`)}return e}const N_=function(t,e){const n=JF(t),s=n.namespace;n.domain==="firebase.com"&&kr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RL();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new FL(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ze(n.pathString)}},JF=function(t){let e="",n="",s="",r="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(r=QF(t.substring(f,d)));const m=XF(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),i=s}"ns"in m&&(i=m.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:r,namespace:i}};/**
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
 */class Fd{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return we(this._path)?null:RE(this._path)}get ref(){return new xi(this._repo,this._path)}get _queryIdentifier(){const e=g_(this._queryParams),n=yd(e);return n==="{}"?"default":n}get _queryObject(){return g_(this._queryParams)}isEqual(e){if(e=dn(e),!(e instanceof Fd))return!1;const n=this._repo===e._repo,s=kE(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+uV(this._path)}}class xi extends Fd{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=PE(this._path);return e===null?null:new xi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}mF(xi);gF(xi);/**
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
 */const ZF="FIREBASE_DATABASE_EMULATOR_HOST",Kh={};let e2=!1;function t2(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||kr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=N_(i,r),l=o.repoInfo,c;typeof process<"u"&&Xg&&(c=Xg[ZF]),c?(i=`http://${c}?ns=${l.namespace}`,o=N_(i,r),l=o.repoInfo):o.repoInfo.secure;const u=new VL(t.name,t.options,e);OF("Invalid Firebase Database URL",o),we(o.path)||kr("Database URL must point to the root of a Firebase Database (not including a child path).");const f=s2(l,t,u,new LL(t,n));return new r2(f,t)}function n2(t,e){const n=Kh[e];(!n||n[t.key]!==t)&&kr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GF(t),delete n[t.key]}function s2(t,e,n,s){let r=Kh[e.name];r||(r={},Kh[e.name]=r);let i=r[t.toURLString()];return i&&kr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new $F(t,e2,n,s),r[t.toURLString()]=i,i}class r2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xi(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function i2(t){TL(Ri),Kt(new Ht("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return t2(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),wt(Jg,Zg,t),wt(Jg,Zg,"esm2017")}Ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};i2();/**
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
 */const mI="firebasestorage.googleapis.com",o2="storageBucket",a2=2*60*1e3,l2=10*60*1e3;/**
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
 */class es extends Ln{constructor(e,n,s=0){super(Yu(e),`Firebase Storage: ${n} (${Yu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,es.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function Yu(t){return"storage/"+t}function c2(){const t="An unknown error occurred, please check the error payload for server response.";return new es(Xn.UNKNOWN,t)}function u2(){return new es(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function h2(){return new es(Xn.CANCELED,"User canceled the upload/download.")}function f2(t){return new es(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function d2(t){return new es(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function D_(t){return new es(Xn.INVALID_ARGUMENT,t)}function gI(){return new es(Xn.APP_DELETED,"The Firebase app was deleted.")}function p2(t){return new es(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class An{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=An.makeFromUrl(e,n)}catch{return new An(e,"")}if(s.path==="")return s;throw d2(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(W){W.path_=decodeURIComponent(W.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${f}/b/${r}/o${m}`,"i"),R={bucket:1,path:3},N=n===mI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",j=new RegExp(`^https?://${N}/${r}/${D}`,"i"),H=[{regex:l,indices:c,postModify:i},{regex:_,indices:R,postModify:u},{regex:j,indices:{bucket:1,path:2},postModify:u}];for(let W=0;W<H.length;W++){const ue=H[W],pe=ue.regex.exec(e);if(pe){const I=pe[ue.indices.bucket];let y=pe[ue.indices.path];y||(y=""),s=new An(I,y),ue.postModify(s);break}}if(s==null)throw f2(e);return s}}class m2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function g2(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...D){u||(u=!0,e.apply(null,D))}function d(D){r=setTimeout(()=>{r=null,t(_,c())},D)}function m(){i&&clearTimeout(i)}function _(D,...j){if(u){m();return}if(D){m(),f.call(null,D,...j);return}if(c()||o){m(),f.call(null,D,...j);return}s<64&&(s*=2);let H;l===1?(l=2,H=0):H=(s+Math.random())*1e3,d(H)}let R=!1;function N(D){R||(R=!0,m(),!u&&(r!==null?(D||(l=2),clearTimeout(r),d(0)):D||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function _2(t){t(!1)}/**
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
 */function y2(t){return t!==void 0}function O_(t,e,n,s){if(s<e)throw D_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw D_(`Invalid value for '${t}'. Expected ${n} or less.`)}function v2(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ec;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ec||(ec={}));/**
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
 */function w2(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class T2{constructor(e,n,s,r,i,o,l,c,u,f,d,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new qa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ec.NO_ERROR,c=i.getStatus();if(!l||w2(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ec.ABORT;s(!1,new qa(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new qa(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());y2(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=c2();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?gI():h2();o(c)}else{const c=u2();o(c)}};this.canceled_?n(!1,new qa(!1,null,!0)):this.backoffId_=g2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function E2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function I2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function S2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function b2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function A2(t,e,n,s,r,i,o=!0){const l=v2(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return S2(u,e),E2(u,n),I2(u,i),b2(u,s),new T2(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function R2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function C2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class tc{constructor(e,n){this._service=e,n instanceof An?this._location=n:this._location=An.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new tc(e,n)}get root(){const e=new An(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return C2(this._location.path)}get storage(){return this._service}get parent(){const e=R2(this._location.path);if(e===null)return null;const n=new An(this._location.bucket,e);return new tc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw p2(e)}}function M_(t,e){const n=e==null?void 0:e[o2];return n==null?null:An.makeFromBucketSpec(n,t)}class P2{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=mI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=a2,this._maxUploadRetryTime=l2,this._requests=new Set,r!=null?this._bucket=An.makeFromBucketSpec(r,this._host):this._bucket=M_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=An.makeFromBucketSpec(this._url,e):this._bucket=M_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){O_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){O_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(fs(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tc(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new m2(gI());{const o=A2(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const x_="@firebase/storage",L_="0.13.7";/**
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
 */const k2="storage";function N2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new P2(n,s,r,e,Ri)}function D2(){Kt(new Ht(k2,N2,"PUBLIC").setMultipleInstances(!0)),wt(x_,L_,""),wt(x_,L_,"esm2017")}D2();function O2(t,{firebaseApp:e,modules:n=[]}){t.provide(wL,e);for(const s of n)s(e,t)}const Ud=ib(hA);Ud.use(dx);Ud.use(O2,{firebaseApp:qf});Ud.mount("#app")});export default M2();
