var qp=Object.defineProperty;var Yp=(i,e,t)=>e in i?qp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var vs=(i,e,t)=>Yp(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="158",jp=0,Zl=1,$p=2,vd=1,Zp=2,ii=3,Ni=0,$t=1,Gn=2,Ci=0,Yr=1,Kl=2,Jl=3,Ql=4,Kp=5,rr=100,Jp=101,Qp=102,eu=103,tu=104,em=200,tm=201,nm=202,im=203,vc=204,xc=205,rm=206,sm=207,om=208,am=209,cm=210,lm=211,um=212,hm=213,dm=214,fm=0,pm=1,mm=2,qo=3,_m=4,gm=5,vm=6,xm=7,xd=0,ym=1,Sm=2,Ri=0,Mm=1,Em=2,bm=3,Tm=4,wm=5,yd=300,Jr=301,Qr=302,yc=303,Sc=304,pa=306,Mc=1e3,Dn=1001,Ec=1002,Ht=1003,nu=1004,Na=1005,Mn=1006,Am=1007,Bs=1008,Pi=1009,Cm=1010,Rm=1011,nl=1012,Sd=1013,Mi=1014,Ei=1015,ks=1016,Md=1017,Ed=1018,ar=1020,Pm=1021,Nn=1023,Lm=1024,Dm=1025,cr=1026,es=1027,Nm=1028,bd=1029,Im=1030,Td=1031,wd=1033,Ia=33776,Oa=33777,Ua=33778,Fa=33779,iu=35840,ru=35841,su=35842,ou=35843,Om=36196,au=37492,cu=37496,lu=37808,uu=37809,hu=37810,du=37811,fu=37812,pu=37813,mu=37814,_u=37815,gu=37816,vu=37817,xu=37818,yu=37819,Su=37820,Mu=37821,Ba=36492,Eu=36494,bu=36495,Um=36283,Tu=36284,wu=36285,Au=36286,Ad=3e3,lr=3001,Fm=3200,Bm=3201,km=0,zm=1,bn="",Rt="srgb",li="srgb-linear",il="display-p3",ma="display-p3-linear",Yo="linear",Qe="srgb",jo="rec709",$o="p3",Mr=7680,Cu=519,Vm=512,Gm=513,Hm=514,Wm=515,Xm=516,qm=517,Ym=518,jm=519,Ru=35044,Pu="300 es",bc=1035,ai=2e3,Zo=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Ps=Math.PI/180,zs=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function rl(i,e){return(i%e+e)%e}function $m(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Zm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function Km(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function Jm(i,e=1){return e-Math.abs(rl(i,e*2)-e)}function Qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function e_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function t_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function n_(i,e){return i+Math.random()*(e-i)}function i_(i){return i*(.5-Math.random())}function r_(i){i!==void 0&&(Lu=i);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s_(i){return i*Ps}function o_(i){return i*zs}function Tc(i){return(i&i-1)===0&&i!==0}function a_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:Ps,RAD2DEG:zs,generateUUID:ls,clamp:Wt,euclideanModulo:rl,mapLinear:$m,inverseLerp:Zm,lerp:Ls,damp:Km,pingpong:Jm,smoothstep:Qm,smootherstep:e_,randInt:t_,randFloat:n_,randFloatSpread:i_,seededRandom:r_,degToRad:s_,radToDeg:o_,isPowerOfTwo:Tc,ceilPowerOfTwo:a_,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:c_,normalize:Vt,denormalize:kr};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,r,s,a,o,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],m=r[0],p=r[3],_=r[6],M=r[1],x=r[4],S=r[7],v=r[2],T=r[5],E=r[8];return s[0]=a*m+o*M+c*v,s[3]=a*p+o*x+c*T,s[6]=a*_+o*S+c*E,s[1]=l*m+u*M+h*v,s[4]=l*p+u*x+h*T,s[7]=l*_+u*S+h*E,s[2]=d*m+f*M+g*v,s[5]=d*p+f*x+g*T,s[8]=d*_+f*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*l-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(u*t-r*c)*m,e[5]=(r*s-o*t)*m,e[6]=f*m,e[7]=(n*c-l*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ka.makeScale(e,t)),this}rotate(e){return this.premultiply(ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new Ue;function Cd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=Jo("canvas");return i.style.display="block",i}const Du={};function Ds(i){i in Du||(Du[i]=!0,console.warn(i))}const Nu=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Iu=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[li]:{transfer:Yo,primaries:jo,toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:Qe,primaries:jo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ma]:{transfer:Yo,primaries:$o,toReference:i=>i.applyMatrix3(Iu),fromReference:i=>i.applyMatrix3(Nu)},[il]:{transfer:Qe,primaries:$o,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Iu),fromReference:i=>i.applyMatrix3(Nu).convertLinearToSRGB()}},u_=new Set([li,ma]),Xe={enabled:!0,_workingColorSpace:li,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!u_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=uo[e].toReference,r=uo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return uo[i].primaries},getTransfer:function(i){return i===bn?Yo:uo[i].transfer}};function jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Er;class Rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Jo("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jr(t[n]/255)*255):t[n]=jr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h_=0;class Pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Va(r[a].image)):s.push(Va(r[a]))}else s=Va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d_=0;class mn extends _r{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Dn,r=Dn,s=Mn,a=Bs,o=Nn,c=Pi,l=mn.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=ls(),this.name="",this.source=new Pd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===lr?Rt:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?lr:Ad}set encoding(e){Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===lr?Rt:bn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=yd;mn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],m=c[2],p=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,v=(_+1)/2,T=(u+d)/4,E=(h+m)/4,w=(g+p)/4;return x>S&&x>v?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=E/n):S>v?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=w/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=E/s,r=w/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-m)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f_ extends _r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===lr?Rt:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends f_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ld extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p_ extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(h!==m||c!==d||l!==f||u!==g){let p=1-o;const _=c*d+l*f+u*g+h*m,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const v=Math.sqrt(x),T=Math.atan2(v,_*M);p=Math.sin(p*T)/v,o=Math.sin(o*T)/v}const S=o*M;if(c=c*p+d*S,l=l*p+f*S,u=u*p+g*S,h=h*p+m*S,p===1-o){const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new H,Ou=new us;class Js{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),fo.subVectors(this.max,xs),br.subVectors(e.a,xs),Tr.subVectors(e.b,xs),wr.subVectors(e.c,xs),mi.subVectors(Tr,br),_i.subVectors(wr,Tr),qi.subVectors(br,wr);let t=[0,-mi.z,mi.y,0,-_i.z,_i.y,0,-qi.z,qi.y,mi.z,0,-mi.x,_i.z,0,-_i.x,qi.z,0,-qi.x,-mi.y,mi.x,0,-_i.y,_i.x,0,-qi.y,qi.x,0];return!Ha(t,br,Tr,wr,fo)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,br,Tr,wr,fo))?!1:(po.crossVectors(mi,_i),t=[po.x,po.y,po.z],Ha(t,br,Tr,wr,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,ho=new Js,br=new H,Tr=new H,wr=new H,mi=new H,_i=new H,qi=new H,xs=new H,fo=new H,po=new H,Yi=new H;function Ha(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Yi.fromArray(i,s);const o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const m_=new Js,ys=new H,Wa=new H;class _a{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ys,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Wa)),this.expandByPoint(ys.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new H,Xa=new H,mo=new H,gi=new H,qa=new H,_o=new H,Ya=new H;class Dd{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xa.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=gi.dot(this.direction),c=-gi.dot(mo),l=gi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xa).addScaledVector(mo,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,s){qa.subVectors(t,e),_o.subVectors(n,e),Ya.crossVectors(qa,_o);let a=this.direction.dot(Ya),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const c=o*this.direction.dot(_o.crossVectors(gi,_o));if(c<0)return null;const l=o*this.direction.dot(qa.cross(gi));if(l<0||c+l>a)return null;const u=-o*gi.dot(Ya);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,a,o,c,l,u,h,d,f,g,m,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,m,p)}set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-m*l,t[9]=-o*c,t[2]=m-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,m=l*h;t[0]=d+m*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=m+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,m=l*h;t[0]=d-m*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=m-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,m=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+m,t[1]=c*h,t[5]=m*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=m-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,m=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+m,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(__,e,g_)}lookAt(e,t,n){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),vi.crossVectors(n,on),vi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),vi.crossVectors(n,on)),vi.normalize(),go.crossVectors(on,vi),r[0]=vi.x,r[4]=go.x,r[8]=on.x,r[1]=vi.y,r[5]=go.y,r[9]=on.y,r[2]=vi.z,r[6]=go.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],m=n[6],p=n[10],_=n[14],M=n[3],x=n[7],S=n[11],v=n[15],T=r[0],E=r[4],w=r[8],y=r[12],b=r[1],D=r[5],L=r[9],B=r[13],R=r[2],O=r[6],F=r[10],U=r[14],Z=r[3],W=r[7],Y=r[11],N=r[15];return s[0]=a*T+o*b+c*R+l*Z,s[4]=a*E+o*D+c*O+l*W,s[8]=a*w+o*L+c*F+l*Y,s[12]=a*y+o*B+c*U+l*N,s[1]=u*T+h*b+d*R+f*Z,s[5]=u*E+h*D+d*O+f*W,s[9]=u*w+h*L+d*F+f*Y,s[13]=u*y+h*B+d*U+f*N,s[2]=g*T+m*b+p*R+_*Z,s[6]=g*E+m*D+p*O+_*W,s[10]=g*w+m*L+p*F+_*Y,s[14]=g*y+m*B+p*U+_*N,s[3]=M*T+x*b+S*R+v*Z,s[7]=M*E+x*D+S*O+v*W,s[11]=M*w+x*L+S*F+v*Y,s[15]=M*y+x*B+S*U+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*f-n*c*f)+m*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+p*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+_*(-r*o*u-t*c*h+t*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],_=e[15],M=h*p*l-m*d*l+m*c*f-o*p*f-h*c*_+o*d*_,x=g*d*l-u*p*l-g*c*f+a*p*f+u*c*_-a*d*_,S=u*m*l-g*h*l+g*o*f-a*m*f-u*o*_+a*h*_,v=g*h*c-u*m*c-g*o*d+a*m*d+u*o*p-a*h*p,T=t*M+n*x+r*S+s*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=M*E,e[1]=(m*d*s-h*p*s-m*r*f+n*p*f+h*r*_-n*d*_)*E,e[2]=(o*p*s-m*c*s+m*r*l-n*p*l-o*r*_+n*c*_)*E,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*f-n*c*f)*E,e[4]=x*E,e[5]=(u*p*s-g*d*s+g*r*f-t*p*f-u*r*_+t*d*_)*E,e[6]=(g*c*s-a*p*s-g*r*l+t*p*l+a*r*_-t*c*_)*E,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*E,e[8]=S*E,e[9]=(g*h*s-u*m*s-g*n*f+t*m*f+u*n*_-t*h*_)*E,e[10]=(a*m*s-g*o*s+g*n*l-t*m*l-a*n*_+t*o*_)*E,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*E,e[12]=v*E,e[13]=(u*m*r-g*h*r+g*n*d-t*m*d-u*n*p+t*h*p)*E,e[14]=(g*o*r-a*m*r-g*n*c+t*m*c+a*n*p-t*o*p)*E,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,m=a*u,p=a*h,_=o*h,M=c*l,x=c*u,S=c*h,v=n.x,T=n.y,E=n.z;return r[0]=(1-(m+_))*v,r[1]=(f+S)*v,r[2]=(g-x)*v,r[3]=0,r[4]=(f-S)*T,r[5]=(1-(d+_))*T,r[6]=(p+M)*T,r[7]=0,r[8]=(g+x)*E,r[9]=(p-M)*E,r[10]=(1-(d+m))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/s,u=1/a,h=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ai){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,g;if(o===ai)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Zo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ai){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*l,f=(n+r)*u;let g,m;if(o===ai)g=(a+s)*h,m=-2*h;else if(o===Zo)g=s*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=m,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new H,Rn=new Tt,__=new H(0,0,0),g_=new H(1,1,1),vi=new H,go=new H,on=new H,Uu=new Tt,Fu=new us;class ga{constructor(e=0,t=0,n=0,r=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const Bu=new H,Cr=new us,Qn=new Tt,vo=new H,Ss=new H,x_=new H,y_=new us,ku=new H(1,0,0),zu=new H(0,1,0),Vu=new H(0,0,1),S_={type:"added"},M_={type:"removed"};class vt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new H,t=new ga,n=new us,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ue}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ss,vo,this.up):Qn.lookAt(vo,Ss,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}vt.DEFAULT_UP=new H(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new H,ei=new H,ja=new H,ti=new H,Rr=new H,Pr=new H,Gu=new H,$a=new H,Za=new H,Ka=new H;let xo=!1;class Ln{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ei.subVectors(n,t),ja.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(ei),c=Pn.dot(ja),l=ei.dot(ei),u=ei.dot(ja),h=a*l-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,r,s,a,o,c){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(e,t,n,r,s,a,o,c)}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,ti),c.setScalar(0),c.addScaledVector(s,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ei.subVectors(e,t),Pn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Rr.subVectors(r,n),Pr.subVectors(s,n),$a.subVectors(e,n);const c=Rr.dot($a),l=Pr.dot($a);if(c<=0&&l<=0)return t.copy(n);Za.subVectors(e,r);const u=Rr.dot(Za),h=Pr.dot(Za);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Rr,a);Ka.subVectors(e,s);const f=Rr.dot(Ka),g=Pr.dot(Ka);if(g>=0&&f<=g)return t.copy(s);const m=f*l-c*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Pr,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Gu.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Gu,o);const _=1/(p+m+d);return a=m*_,o=d*_,t.copy(n).addScaledVector(Rr,a).addScaledVector(Pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=rl(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ja(a,s,e+1/3),this.g=Ja(a,s,e),this.b=Ja(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Xe.fromWorkingColorSpace(It.copy(this),e),Math.round(Wt(It.r*255,0,255))*65536+Math.round(Wt(It.g*255,0,255))*256+Math.round(Wt(It.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(It.copy(this),t);const n=It.r,r=It.g,s=It.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Rt){Xe.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(yo);const n=Ls(xi.h,yo.h,t),r=Ls(xi.s,yo.s,t),s=Ls(xi.l,yo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const It=new Ve;Ve.NAMES=Id;let E_=0;class Qs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Yr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Od extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new H,So=new qe;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ru,this.updateRange={offset:0,count:-1},this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ud extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fd extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qn extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let b_=0;const yn=new Tt,Qa=new vt,Lr=new H,an=new Js,Ms=new Js,bt=new H;class di extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cd(e)?Fd:Ud)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(an.min,Ms.min),an.expandByPoint(bt),bt.addVectors(an.max,Ms.max),an.expandByPoint(bt)):(an.expandByPoint(Ms.min),an.expandByPoint(Ms.max))}an.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(Lr.fromBufferAttribute(e,l),bt.add(Lr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new H,u[b]=new H;const h=new H,d=new H,f=new H,g=new qe,m=new qe,p=new qe,_=new H,M=new H;function x(b,D,L){h.fromArray(r,b*3),d.fromArray(r,D*3),f.fromArray(r,L*3),g.fromArray(a,b*2),m.fromArray(a,D*2),p.fromArray(a,L*2),d.sub(h),f.sub(h),m.sub(g),p.sub(g);const B=1/(m.x*p.y-p.x*m.y);isFinite(B)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(B),M.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(B),l[b].add(_),l[D].add(_),l[L].add(_),u[b].add(M),u[D].add(M),u[L].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,D=S.length;b<D;++b){const L=S[b],B=L.start,R=L.count;for(let O=B,F=B+R;O<F;O+=3)x(n[O+0],n[O+1],n[O+2])}const v=new H,T=new H,E=new H,w=new H;function y(b){E.fromArray(s,b*3),w.copy(E);const D=l[b];v.copy(D),v.sub(E.multiplyScalar(E.dot(D))).normalize(),T.crossVectors(w,D);const B=T.dot(u[b])<0?-1:1;c[b*4]=v.x,c[b*4+1]=v.y,c[b*4+2]=v.z,c[b*4+3]=B}for(let b=0,D=S.length;b<D;++b){const L=S[b],B=L.start,R=L.count;for(let O=B,F=B+R;O<F;O+=3)y(n[O+0]),y(n[O+1]),y(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,h=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let m=0,p=c.length;m<p;m++){o.isInterleavedBufferAttribute?f=c[m]*o.data.stride+o.offset:f=c[m]*u;for(let _=0;_<u;_++)d[g++]=l[f++]}return new Xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Tt,ji=new Dd,Mo=new _a,Wu=new H,Dr=new H,Nr=new H,Ir=new H,ec=new H,Eo=new H,bo=new qe,To=new qe,wo=new qe,Xu=new H,qu=new H,Yu=new H,Ao=new H,Co=new H;class bi extends vt{constructor(e=new di,t=new Od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ec.fromBufferAttribute(h,e),a?Eo.addScaledVector(ec,u):Eo.addScaledVector(ec.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Mo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Mo,Wu)===null||ji.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Hu.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,v=x;S<v;S+=3){const T=o.getX(S),E=o.getX(S+1),w=o.getX(S+2);r=Ro(this,_,e,n,l,u,h,T,E,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),m=Math.min(o.count,f.start+f.count);for(let p=g,_=m;p<_;p+=3){const M=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);r=Ro(this,a,e,n,l,u,h,M,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,m=d.length;g<m;g++){const p=d[g],_=a[p.materialIndex],M=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,v=x;S<v;S+=3){const T=S,E=S+1,w=S+2;r=Ro(this,_,e,n,l,u,h,T,E,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),m=Math.min(c.count,f.start+f.count);for(let p=g,_=m;p<_;p+=3){const M=p,x=p+1,S=p+2;r=Ro(this,a,e,n,l,u,h,M,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function T_(i,e,t,n,r,s,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ni,o),c===null)return null;Co.copy(o),Co.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Co);return l<t.near||l>t.far?null:{distance:l,point:Co.clone(),object:i}}function Ro(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Dr),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Ir);const u=T_(i,e,t,n,Dr,Nr,Ir,Ao);if(u){r&&(bo.fromBufferAttribute(r,o),To.fromBufferAttribute(r,c),wo.fromBufferAttribute(r,l),u.uv=Ln.getInterpolation(Ao,Dr,Nr,Ir,bo,To,wo,new qe)),s&&(bo.fromBufferAttribute(s,o),To.fromBufferAttribute(s,c),wo.fromBufferAttribute(s,l),u.uv1=Ln.getInterpolation(Ao,Dr,Nr,Ir,bo,To,wo,new qe),u.uv2=u.uv1),a&&(Xu.fromBufferAttribute(a,o),qu.fromBufferAttribute(a,c),Yu.fromBufferAttribute(a,l),u.normal=Ln.getInterpolation(Ao,Dr,Nr,Ir,Xu,qu,Yu,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};Ln.getNormal(Dr,Nr,Ir,h.normal),u.face=h}return u}class hs extends di{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(h,2));function g(m,p,_,M,x,S,v,T,E,w,y){const b=S/E,D=v/w,L=S/2,B=v/2,R=T/2,O=E+1,F=w+1;let U=0,Z=0;const W=new H;for(let Y=0;Y<F;Y++){const N=Y*D-B;for(let z=0;z<O;z++){const le=z*b-L;W[m]=le*M,W[p]=N*x,W[_]=R,l.push(W.x,W.y,W.z),W[m]=0,W[p]=0,W[_]=T>0?1:-1,u.push(W.x,W.y,W.z),h.push(z/E),h.push(1-Y/w),U+=1}}for(let Y=0;Y<w;Y++)for(let N=0;N<E;N++){const z=d+N+O*Y,le=d+N+O*(Y+1),oe=d+(N+1)+O*(Y+1),Q=d+(N+1)+O*Y;c.push(z,le,Q),c.push(le,oe,Q),Z+=6}o.addGroup(f,Z,y),f+=Z,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ts(i[t]);for(const r in n)e[r]=n[r]}return e}function w_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bd(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}const A_={clone:ts,merge:Gt};var C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class kd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends kd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Ur=1;class P_ extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Or,Ur,e,t);r.layers=this.layers,this.add(r);const s=new En(Or,Ur,e,t);s.layers=this.layers,this.add(s);const a=new En(Or,Ur,e,t);a.layers=this.layers,this.add(a);const o=new En(Or,Ur,e,t);o.layers=this.layers,this.add(o);const c=new En(Or,Ur,e,t);c.layers=this.layers,this.add(c);const l=new En(Or,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends mn{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Jr,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===lr?Rt:bn),this.texture=new zd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hs(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Ci});s.uniforms.tEquirect.value=t;const a=new bi(r,s),o=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Mn),new P_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const tc=new H,D_=new H,N_=new Ue;class er{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=tc.subVectors(n,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||N_.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new _a,Po=new H;class Vd{constructor(e=new er,t=new er,n=new er,r=new er,s=new er,a=new er){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],m=r[10],p=r[11],_=r[12],M=r[13],x=r[14],S=r[15];if(n[0].setComponents(c-s,d-l,p-f,S-_).normalize(),n[1].setComponents(c+s,d+l,p+f,S+_).normalize(),n[2].setComponents(c+a,d+u,p+g,S+M).normalize(),n[3].setComponents(c-a,d-u,p-g,S-M).normalize(),n[4].setComponents(c-o,d-h,p-m,S-x).normalize(),t===ai)n[5].setComponents(c+o,d+h,p+m,S+x).normalize();else if(t===Zo)n[5].setComponents(o,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function I_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const h=l.array,d=l.usage,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,f=u.updateRange;i.bindBuffer(h,l),f.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class sl extends di{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const M=_*d-a;for(let x=0;x<l;x++){const S=x*h-s;g.push(S,-M,0),m.push(0,0,1),p.push(x/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let M=0;M<o;M++){const x=M+l*_,S=M+l*(_+1),v=M+1+l*(_+1),T=M+1+l*_;f.push(x,S,T),f.push(S,v,T)}this.setIndex(f),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(m,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var O_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Dg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ev=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:O_,alphahash_pars_fragment:U_,alphamap_fragment:F_,alphamap_pars_fragment:B_,alphatest_fragment:k_,alphatest_pars_fragment:z_,aomap_fragment:V_,aomap_pars_fragment:G_,begin_vertex:H_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:q_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:j_,clipping_planes_pars_fragment:$_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:K_,color_fragment:J_,color_pars_fragment:Q_,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:rg,displacementmap_pars_vertex:sg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:ug,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:wg,envmap_vertex:mg,fog_vertex:_g,fog_pars_vertex:gg,fog_fragment:vg,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_fragment:Sg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:bg,lights_pars_begin:Tg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Cg,lights_phong_fragment:Rg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Dg,lights_fragment_begin:Ng,lights_fragment_maps:Ig,lights_fragment_end:Og,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:kg,map_fragment:zg,map_pars_fragment:Vg,map_particle_fragment:Gg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:jg,morphtarget_vertex:$g,normal_fragment_begin:Zg,normal_fragment_maps:Kg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:s0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:c0,project_vertex:l0,dithering_fragment:u0,dithering_pars_fragment:h0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:_0,shadowmask_pars_fragment:g0,skinbase_vertex:v0,skinning_pars_vertex:x0,skinning_vertex:y0,skinnormal_vertex:S0,specularmap_fragment:M0,specularmap_pars_fragment:E0,tonemapping_fragment:b0,tonemapping_pars_fragment:T0,transmission_fragment:w0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:R0,uv_vertex:P0,worldpos_vertex:L0,background_vert:D0,background_frag:N0,backgroundCube_vert:I0,backgroundCube_frag:O0,cube_vert:U0,cube_frag:F0,depth_vert:B0,depth_frag:k0,distanceRGBA_vert:z0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:H0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:j0,meshlambert_frag:$0,meshmatcap_vert:Z0,meshmatcap_frag:K0,meshnormal_vert:J0,meshnormal_frag:Q0,meshphong_vert:ev,meshphong_frag:tv,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:rv,meshtoon_frag:sv,points_vert:ov,points_frag:av,shadow_vert:cv,shadow_frag:lv,sprite_vert:uv,sprite_frag:hv},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Lo={r:0,b:0,g:0};function dv(i,e,t,n,r,s,a){const o=new Ve(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(p,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x===null?m(o,c):x&&x.isColor&&(m(x,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===pa)?(u===void 0&&(u=new bi(new hs(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ts(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Qe,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new bi(new sl(2,2),new Ii({name:"BackgroundMaterial",uniforms:ts(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,_){p.getRGB(Lo,Bd(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:g}}function fv(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function h(R,O,F,U,Z){let W=!1;if(a){const Y=m(U,F,O);l!==Y&&(l=Y,f(l.object)),W=_(R,U,F,Z),W&&M(R,U,F,Z)}else{const Y=O.wireframe===!0;(l.geometry!==U.id||l.program!==F.id||l.wireframe!==Y)&&(l.geometry=U.id,l.program=F.id,l.wireframe=Y,W=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,w(R,O,F,U),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,O,F){const U=F.wireframe===!0;let Z=o[R.id];Z===void 0&&(Z={},o[R.id]=Z);let W=Z[O.id];W===void 0&&(W={},Z[O.id]=W);let Y=W[U];return Y===void 0&&(Y=p(d()),W[U]=Y),Y}function p(R){const O=[],F=[],U=[];for(let Z=0;Z<r;Z++)O[Z]=0,F[Z]=0,U[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:U,object:R,attributes:{},index:null}}function _(R,O,F,U){const Z=l.attributes,W=O.attributes;let Y=0;const N=F.getAttributes();for(const z in N)if(N[z].location>=0){const oe=Z[z];let Q=W[z];if(Q===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),oe===void 0||oe.attribute!==Q||Q&&oe.data!==Q.data)return!0;Y++}return l.attributesNum!==Y||l.index!==U}function M(R,O,F,U){const Z={},W=O.attributes;let Y=0;const N=F.getAttributes();for(const z in N)if(N[z].location>=0){let oe=W[z];oe===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const Q={};Q.attribute=oe,oe&&oe.data&&(Q.data=oe.data),Z[z]=Q,Y++}l.attributes=Z,l.attributesNum=Y,l.index=U}function x(){const R=l.newAttributes;for(let O=0,F=R.length;O<F;O++)R[O]=0}function S(R){v(R,0)}function v(R,O){const F=l.newAttributes,U=l.enabledAttributes,Z=l.attributeDivisors;F[R]=1,U[R]===0&&(i.enableVertexAttribArray(R),U[R]=1),Z[R]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),Z[R]=O)}function T(){const R=l.newAttributes,O=l.enabledAttributes;for(let F=0,U=O.length;F<U;F++)O[F]!==R[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function E(R,O,F,U,Z,W,Y){Y===!0?i.vertexAttribIPointer(R,O,F,Z,W):i.vertexAttribPointer(R,O,F,U,Z,W)}function w(R,O,F,U){if(n.isWebGL2===!1&&(R.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=U.attributes,W=F.getAttributes(),Y=O.defaultAttributeValues;for(const N in W){const z=W[N];if(z.location>=0){let le=Z[N];if(le===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const oe=le.normalized,Q=le.itemSize,Se=t.get(le);if(Se===void 0)continue;const Fe=Se.buffer,ee=Se.type,Te=Se.bytesPerElement,Ze=n.isWebGL2===!0&&(ee===i.INT||ee===i.UNSIGNED_INT||le.gpuType===Sd);if(le.isInterleavedBufferAttribute){const Ce=le.data,V=Ce.stride,nn=le.offset;if(Ce.isInstancedInterleavedBuffer){for(let ge=0;ge<z.locationSize;ge++)v(z.location+ge,Ce.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ge=0;ge<z.locationSize;ge++)S(z.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let ge=0;ge<z.locationSize;ge++)E(z.location+ge,Q/z.locationSize,ee,oe,V*Te,(nn+Q/z.locationSize*ge)*Te,Ze)}else{if(le.isInstancedBufferAttribute){for(let Ce=0;Ce<z.locationSize;Ce++)v(z.location+Ce,le.meshPerAttribute);R.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<z.locationSize;Ce++)S(z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ce=0;Ce<z.locationSize;Ce++)E(z.location+Ce,Q/z.locationSize,ee,oe,Q*Te,Q/z.locationSize*Ce*Te,Ze)}}else if(Y!==void 0){const oe=Y[N];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(z.location,oe);break;case 3:i.vertexAttrib3fv(z.location,oe);break;case 4:i.vertexAttrib4fv(z.location,oe);break;default:i.vertexAttrib1fv(z.location,oe)}}}}T()}function y(){L();for(const R in o){const O=o[R];for(const F in O){const U=O[F];for(const Z in U)g(U[Z].object),delete U[Z];delete O[F]}delete o[R]}}function b(R){if(o[R.id]===void 0)return;const O=o[R.id];for(const F in O){const U=O[F];for(const Z in U)g(U[Z].object),delete U[Z];delete O[F]}delete o[R.id]}function D(R){for(const O in o){const F=o[O];if(F[R.id]===void 0)continue;const U=F[R.id];for(const Z in U)g(U[Z].object),delete U[Z];delete F[R.id]}}function L(){B(),u=!0,l!==c&&(l=c,f(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:L,resetDefaultState:B,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function pv(i,e,t,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=i,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function mv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=a||e.has("OES_texture_float"),v=x&&S,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:T}}function _v(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new er,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const M=s?0:n,x=M*4;let S=_.clippingState||null;c.value=S,S=u(g,d,x,f);for(let v=0;v!==x;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const _=f+m*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,S=f;x!==m;++x,S+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function gv(i){let e=new WeakMap;function t(a,o){return o===yc?a.mapping=Jr:o===Sc&&(a.mapping=Qr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===yc||o===Sc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new L_(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vv extends kd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,ju=[.125,.215,.35,.446,.526,.582],sr=20,nc=new vv,$u=new Ve;let ic=null,rc=0,sc=0;const tr=(1+Math.sqrt(5))/2,Fr=1/tr,Zu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,tr,Fr),new H(0,tr,-Fr),new H(Fr,0,tr),new H(-Fr,0,tr),new H(tr,Fr,0),new H(-tr,Fr,0)];class Ku{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ks,format:Nn,colorSpace:li,depthBuffer:!1},r=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xv(s)),this._blurMaterial=yv(s,e,t)}return r}_compileMaterial(e){const t=new bi(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,n,r){const o=new En(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($u),u.toneMapping=Ri,u.autoClear=!1;const f=new Od({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new bi(new hs,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy($u),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):M===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const x=this._cubeSize;Do(r,M*x,_>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Do(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(r-1)%Zu.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bi(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*sr-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const _=[];let M=0;for(let E=0;E<sr;++E){const w=E/m,y=Math.exp(-w*w/2);_.push(y),E===0?M+=y:E<p&&(M+=2*y)}for(let E=0;E<_.length;E++)_[E]=_[E]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[r],v=3*S*(r>x-Gr?r-x+Gr:0),T=4*(this._cubeSize-S);Do(t,v,T,3*S,2*S),c.setRenderTarget(t),c.render(h,nc)}}function xv(i){const e=[],t=[],n=[];let r=i;const s=i-Gr+1+ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Gr?c=ju[a-i+Gr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,m=3,p=2,_=1,M=new Float32Array(m*g*f),x=new Float32Array(p*g*f),S=new Float32Array(_*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,w=T>2?0:-1,y=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];M.set(y,m*g*T),x.set(d,p*g*T);const b=[T,T,T,T,T,T];S.set(b,_*g*T)}const v=new di;v.setAttribute("position",new Xn(M,m)),v.setAttribute("uv",new Xn(x,p)),v.setAttribute("faceIndex",new Xn(S,_)),e.push(v),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(i,e,t){const n=new pr(i,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yv(i,e,t){const n=new Float32Array(sr),r=new H(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Qu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function eh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yc||c===Sc,u=c===Jr||c===Qr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ku(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Ku(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ev(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const m=d.morphAttributes[g];for(let p=0,_=m.length;p<_;p++)e.remove(m[p])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const m=f[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let m=0;if(f!==null){const M=f.array;m=f.version;for(let x=0,S=M.length;x<S;x+=3){const v=M[x+0],T=M[x+1],E=M[x+2];d.push(v,T,T,E,E,v)}}else if(g!==void 0){const M=g.array;m=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const v=x+0,T=x+1,E=x+2;d.push(v,T,T,E,E,v)}}else return;const p=new(Cd(d)?Fd:Ud)(d,1);p.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function bv(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,f){i.drawElements(s,f,o,d*c),t.update(f,s,1)}function h(d,f,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,o,d*c,g),t.update(f,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Tv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wv(i,e){return i[0]-e[0]}function Av(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let O=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var f=O;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),v===!0&&(y=3);let b=u.attributes.position.count*y,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*D*4*m),B=new Ld(L,b,D,m);B.type=Ei,B.needsUpdate=!0;const R=y*4;for(let F=0;F<m;F++){const U=T[F],Z=E[F],W=w[F],Y=b*D*4*F;for(let N=0;N<U.count;N++){const z=N*R;x===!0&&(a.fromBufferAttribute(U,N),L[Y+z+0]=a.x,L[Y+z+1]=a.y,L[Y+z+2]=a.z,L[Y+z+3]=0),S===!0&&(a.fromBufferAttribute(Z,N),L[Y+z+4]=a.x,L[Y+z+5]=a.y,L[Y+z+6]=a.z,L[Y+z+7]=0),v===!0&&(a.fromBufferAttribute(W,N),L[Y+z+8]=a.x,L[Y+z+9]=a.y,L[Y+z+10]=a.z,L[Y+z+11]=W.itemSize===4?a.w:1)}}p={count:m,texture:B,size:new qe(b,D)},s.set(u,p),u.addEventListener("dispose",O)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let S=0;S<g;S++)m[S]=[S,0];n[u.id]=m}for(let S=0;S<g;S++){const v=m[S];v[0]=S,v[1]=d[S]}m.sort(Av);for(let S=0;S<8;S++)S<g&&m[S][1]?(o[S][0]=m[S][0],o[S][1]=m[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(wv);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const v=o[S],T=v[0],E=v[1];T!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+S)!==p[T]&&u.setAttribute("morphTarget"+S,p[T]),_&&u.getAttribute("morphNormal"+S)!==_[T]&&u.setAttribute("morphNormal"+S,_[T]),r[S]=E,M+=E):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),_&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Rv(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Hd=new mn,Wd=new Ld,Xd=new p_,qd=new zd,th=[],nh=[],ih=new Float32Array(16),rh=new Float32Array(9),sh=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=th[r];if(s===void 0&&(s=new Float32Array(r),th[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),St(t,n)}}function Ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),St(t,n)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),St(t,n)}}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Xv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Hd,r)}function qv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xd,r)}function Yv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||qd,r)}function jv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wd,r)}function $v(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Iv;case 35675:return Ov;case 35676:return Uv;case 5124:case 35670:return Fv;case 35667:case 35671:return Bv;case 35668:case 35672:return kv;case 35669:case 35673:return zv;case 5125:return Vv;case 36294:return Gv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return jv}}function Zv(i,e){i.uniform1fv(this.addr,e)}function Kv(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Jv(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function ex(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tx(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nx(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ix(i,e){i.uniform1iv(this.addr,e)}function rx(i,e){i.uniform2iv(this.addr,e)}function sx(i,e){i.uniform3iv(this.addr,e)}function ox(i,e){i.uniform4iv(this.addr,e)}function ax(i,e){i.uniform1uiv(this.addr,e)}function cx(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function ux(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Hd,s[a])}function dx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xd,s[a])}function fx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||qd,s[a])}function px(i,e,t){const n=this.cache,r=e.length,s=va(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Wd,s[a])}function mx(i){switch(i){case 5126:return Zv;case 35664:return Kv;case 35665:return Jv;case 35666:return Qv;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return cx;case 36295:return lx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}class _x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$v(t.type)}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=mx(t.type)}}class vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function xx(i,e,t){const n=i.name,r=n.length;for(oc.lastIndex=0;;){const s=oc.exec(n),a=oc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){oh(t,l===void 0?new _x(o,i,e):new gx(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new vx(o),oh(t,h)),t=h}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);xx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yx=37297;let Sx=0;function Mx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ex(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===$o&&t===jo?n="LinearDisplayP3ToLinearSRGB":e===jo&&t===$o&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case ma:return[n,"LinearTransferOETF"];case Rt:case il:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ch(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(e),a)}else return r}function bx(i,e){const t=Ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Tx(i,e){let t;switch(e){case Mm:t="Linear";break;case Em:t="Reinhard";break;case bm:t="OptimizedCineon";break;case Tm:t="ACESFilmic";break;case wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function Ax(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ws(i){return i!==""}function lh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(Rx,Lx)}const Px=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lx(i,e){let t=De[e];if(t===void 0){const n=Px.get(e);if(n!==void 0)t=De[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}const Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(Dx,Nx)}function Nx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ix(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Ox(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ux(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case ym:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function Bx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ix(t),l=Ox(t),u=Ux(t),h=Fx(t),d=Bx(t),f=t.isWebGL2?"":wx(t),g=Ax(s),m=r.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),_.length>0&&(_+=`
`)):(p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),_=[f,dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?De.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),a=wc(a),a=lh(a,t),a=uh(a,t),o=wc(o),o=lh(o,t),o=uh(o,t),a=hh(a),o=hh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+p+a,S=M+_+o,v=ah(r,r.VERTEX_SHADER,x),T=ah(r,r.FRAGMENT_SHADER,S);r.attachShader(m,v),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function E(D){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(m).trim(),B=r.getShaderInfoLog(v).trim(),R=r.getShaderInfoLog(T).trim();let O=!0,F=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,v,T);else{const U=ch(r,v,"vertex"),Z=ch(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+U+`
`+Z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||R==="")&&(F=!1);F&&(D.diagnostics={runnable:O,programLog:L,vertexShader:{log:B,prefix:p},fragmentShader:{log:R,prefix:_}})}r.deleteShader(v),r.deleteShader(T),w=new Vo(r,m),y=Cx(r,m)}let w;this.getUniforms=function(){return w===void 0&&E(this),w};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(m,yx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=T,this}let zx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gx(e),t.set(e,n)),n}}class Gx{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}}function Hx(i,e,t,n,r,s,a){const o=new Nd,c=new Vx,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===0?"uv":`uv${y}`}function p(y,b,D,L,B){const R=L.fog,O=B.geometry,F=y.isMeshStandardMaterial?L.environment:null,U=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),Z=U&&U.mapping===pa?U.image.height:null,W=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=Y!==void 0?Y.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let le,oe,Q,Se;if(W){const pt=Vn[W];le=pt.vertexShader,oe=pt.fragmentShader}else le=y.vertexShader,oe=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),Se=c.getFragmentShaderID(y);const Fe=i.getRenderTarget(),ee=B.isInstancedMesh===!0,Te=!!y.map,Ze=!!y.matcap,Ce=!!U,V=!!y.aoMap,nn=!!y.lightMap,ge=!!y.bumpMap,Ae=!!y.normalMap,we=!!y.displacementMap,ot=!!y.emissiveMap,Ie=!!y.metalnessMap,Oe=!!y.roughnessMap,Ye=y.anisotropy>0,Mt=y.clearcoat>0,Dt=y.iridescence>0,P=y.sheen>0,A=y.transmission>0,X=Ye&&!!y.anisotropyMap,ie=Mt&&!!y.clearcoatMap,te=Mt&&!!y.clearcoatNormalMap,re=Mt&&!!y.clearcoatRoughnessMap,me=Dt&&!!y.iridescenceMap,ce=Dt&&!!y.iridescenceThicknessMap,de=P&&!!y.sheenColorMap,Me=P&&!!y.sheenRoughnessMap,Ge=!!y.specularMap,ne=!!y.specularColorMap,We=!!y.specularIntensityMap,Re=A&&!!y.transmissionMap,Ee=A&&!!y.thicknessMap,ve=!!y.gradientMap,pe=!!y.alphaMap,ze=y.alphaTest>0,I=!!y.alphaHash,he=!!y.extensions,se=!!O.attributes.uv1,K=!!O.attributes.uv2,ae=!!O.attributes.uv3;let xe=Ri;return y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(xe=i.toneMapping),{isWebGL2:u,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:oe,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:ee,instancingColor:ee&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:li,map:Te,matcap:Ze,envMap:Ce,envMapMode:Ce&&U.mapping,envMapCubeUVHeight:Z,aoMap:V,lightMap:nn,bumpMap:ge,normalMap:Ae,displacementMap:d&&we,emissiveMap:ot,normalMapObjectSpace:Ae&&y.normalMapType===zm,normalMapTangentSpace:Ae&&y.normalMapType===km,metalnessMap:Ie,roughnessMap:Oe,anisotropy:Ye,anisotropyMap:X,clearcoat:Mt,clearcoatMap:ie,clearcoatNormalMap:te,clearcoatRoughnessMap:re,iridescence:Dt,iridescenceMap:me,iridescenceThicknessMap:ce,sheen:P,sheenColorMap:de,sheenRoughnessMap:Me,specularMap:Ge,specularColorMap:ne,specularIntensityMap:We,transmission:A,transmissionMap:Re,thicknessMap:Ee,gradientMap:ve,opaque:y.transparent===!1&&y.blending===Yr,alphaMap:pe,alphaTest:ze,alphaHash:I,combine:y.combine,mapUv:Te&&m(y.map.channel),aoMapUv:V&&m(y.aoMap.channel),lightMapUv:nn&&m(y.lightMap.channel),bumpMapUv:ge&&m(y.bumpMap.channel),normalMapUv:Ae&&m(y.normalMap.channel),displacementMapUv:we&&m(y.displacementMap.channel),emissiveMapUv:ot&&m(y.emissiveMap.channel),metalnessMapUv:Ie&&m(y.metalnessMap.channel),roughnessMapUv:Oe&&m(y.roughnessMap.channel),anisotropyMapUv:X&&m(y.anisotropyMap.channel),clearcoatMapUv:ie&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(y.sheenRoughnessMap.channel),specularMapUv:Ge&&m(y.specularMap.channel),specularColorMapUv:ne&&m(y.specularColorMap.channel),specularIntensityMapUv:We&&m(y.specularIntensityMap.channel),transmissionMapUv:Re&&m(y.transmissionMap.channel),thicknessMapUv:Ee&&m(y.thicknessMap.channel),alphaMapUv:pe&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ae||Ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:K,vertexUv3s:ae,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Te||pe),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===$t,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:he&&y.extensions.derivatives===!0,extensionFragDepth:he&&y.extensions.fragDepth===!0,extensionDrawBuffers:he&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function _(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(M(b,y),x(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function S(y){const b=g[y.type];let D;if(b){const L=Vn[b];D=A_.clone(L.uniforms)}else D=y.uniforms;return D}function v(y,b){let D;for(let L=0,B=l.length;L<B;L++){const R=l[L];if(R.cacheKey===b){D=R,++D.usedTimes;break}}return D===void 0&&(D=new kx(i,b,y,s),l.push(D)),D}function T(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function E(y){c.remove(y)}function w(){c.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:w}}function Wx(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ph(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,g,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function o(h,d,f,g,m,p){const _=a(h,d,f,g,m,p);f.transmission>0?n.push(_):f.transparent===!0?r.push(_):t.push(_)}function c(h,d,f,g,m,p){const _=a(h,d,f,g,m,p);f.transmission>0?n.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function l(h,d){t.length>1&&t.sort(h||Xx),n.length>1&&n.sort(d||fh),r.length>1&&r.sort(d||fh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function qx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ph,i.set(n,[a])):r>=s.length?(a=new ph,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ve};break;case"SpotLight":t={position:new H,direction:new H,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $x=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kx(i,e){const t=new Yx,n=jx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,a=new Tt,o=new Tt;function c(u,h){let d=0,f=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let m=0,p=0,_=0,M=0,x=0,S=0,v=0,T=0,E=0,w=0,y=0;u.sort(Zx);const b=h===!0?Math.PI:1;for(let L=0,B=u.length;L<B;L++){const R=u[L],O=R.color,F=R.intensity,U=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=O.r*F*b,f+=O.g*F*b,g+=O.b*F*b;else if(R.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(R.sh.coefficients[W],F);y++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Y=R.shadow,N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,r.directionalShadow[m]=N,r.directionalShadowMap[m]=Z,r.directionalShadowMatrix[m]=R.shadow.matrix,S++}r.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(O).multiplyScalar(F*b),W.distance=U,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,r.spot[_]=W;const Y=R.shadow;if(R.map&&(r.spotLightMap[E]=R.map,E++,Y.updateMatrices(R),R.castShadow&&w++),r.spotLightMatrix[_]=Y.matrix,R.castShadow){const N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,r.spotShadow[_]=N,r.spotShadowMap[_]=Z,T++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),r.rectArea[M]=W,M++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Y=R.shadow,N=n.get(R);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=R.shadow.matrix,v++}r.point[p]=W,p++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(F*b),W.groundColor.copy(R.groundColor).multiplyScalar(F*b),r.hemi[x]=W,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==v||D.numSpotShadows!==T||D.numSpotMaps!==E||D.numLightProbes!==y)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=M,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=T+E-w,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=y,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=v,D.numSpotShadows=T,D.numSpotMaps=E,D.numLightProbes=y,r.version=$x++)}function l(u,h){let d=0,f=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const S=u[M];if(S.isDirectionalLight){const v=r.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),d++}else if(S.isSpotLight){const v=r.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=r.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(S.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const v=r.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),f++}else if(S.isHemisphereLight){const v=r.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:r}}function mh(i,e){const t=new Kx(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Jx(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new mh(i,e),t.set(s,[c])):a>=o.length?(c=new mh(i,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qx extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ey extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iy(i,e,t){let n=new Vd;const r=new qe,s=new qe,a=new Pt,o=new Qx({depthPacking:Bm}),c=new ey,l={},u=t.maxTextureSize,h={[Ni]:$t,[$t]:Ni,[Gn]:Gn},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new bi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let _=this.type;this.render=function(v,T,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=_!==ii&&this.type===ii,B=_===ii&&this.type!==ii;for(let R=0,O=v.length;R<O;R++){const F=v[R],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Z=U.getFrameExtents();if(r.multiply(Z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,U.mapSize.y=s.y)),U.map===null||L===!0||B===!0){const Y=this.type!==ii?{minFilter:Ht,magFilter:Ht}:{};U.map!==null&&U.map.dispose(),U.map=new pr(r.x,r.y,Y),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const W=U.getViewportCount();for(let Y=0;Y<W;Y++){const N=U.getViewport(Y);a.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),D.viewport(a),U.updateMatrices(F,Y),n=U.getFrustum(),S(T,E,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===ii&&M(U,E),U.needsUpdate=!1}_=this.type,p.needsUpdate=!1,i.setRenderTarget(w,y,b)};function M(v,T){const E=e.update(m);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new pr(r.x,r.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,E,d,m,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,E,f,m,null)}function x(v,T,E,w){let y=null;const b=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(b!==void 0)y=b;else if(y=E.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=y.uuid,L=T.uuid;let B=l[D];B===void 0&&(B={},l[D]=B);let R=B[L];R===void 0&&(R=y.clone(),B[L]=R),y=R}if(y.visible=T.visible,y.wireframe=T.wireframe,w===ii?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=i.properties.get(y);D.light=E}return y}function S(v,T,E,w,y){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===ii)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const L=e.update(v),B=v.material;if(Array.isArray(B)){const R=L.groups;for(let O=0,F=R.length;O<F;O++){const U=R[O],Z=B[U.materialIndex];if(Z&&Z.visible){const W=x(v,Z,w,y);i.renderBufferDirect(E,null,L,W,v,U)}}}else if(B.visible){const R=x(v,B,w,y);i.renderBufferDirect(E,null,L,R,v,null)}}const D=v.children;for(let L=0,B=D.length;L<B;L++)S(D[L],T,E,w,y)}}function ry(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const he=new Pt;let se=null;const K=new Pt(0,0,0,0);return{setMask:function(ae){se!==ae&&!I&&(i.colorMask(ae,ae,ae,ae),se=ae)},setLocked:function(ae){I=ae},setClear:function(ae,xe,He,pt,xn){xn===!0&&(ae*=pt,xe*=pt,He*=pt),he.set(ae,xe,He,pt),K.equals(he)===!1&&(i.clearColor(ae,xe,He,pt),K.copy(he))},reset:function(){I=!1,se=null,K.set(-1,0,0,0)}}}function s(){let I=!1,he=null,se=null,K=null;return{setTest:function(ae){ae?Te(i.DEPTH_TEST):Ze(i.DEPTH_TEST)},setMask:function(ae){he!==ae&&!I&&(i.depthMask(ae),he=ae)},setFunc:function(ae){if(se!==ae){switch(ae){case fm:i.depthFunc(i.NEVER);break;case pm:i.depthFunc(i.ALWAYS);break;case mm:i.depthFunc(i.LESS);break;case qo:i.depthFunc(i.LEQUAL);break;case _m:i.depthFunc(i.EQUAL);break;case gm:i.depthFunc(i.GEQUAL);break;case vm:i.depthFunc(i.GREATER);break;case xm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ae}},setLocked:function(ae){I=ae},setClear:function(ae){K!==ae&&(i.clearDepth(ae),K=ae)},reset:function(){I=!1,he=null,se=null,K=null}}}function a(){let I=!1,he=null,se=null,K=null,ae=null,xe=null,He=null,pt=null,xn=null;return{setTest:function(Ke){I||(Ke?Te(i.STENCIL_TEST):Ze(i.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!I&&(i.stencilMask(Ke),he=Ke)},setFunc:function(Ke,kt,Bn){(se!==Ke||K!==kt||ae!==Bn)&&(i.stencilFunc(Ke,kt,Bn),se=Ke,K=kt,ae=Bn)},setOp:function(Ke,kt,Bn){(xe!==Ke||He!==kt||pt!==Bn)&&(i.stencilOp(Ke,kt,Bn),xe=Ke,He=kt,pt=Bn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){xn!==Ke&&(i.clearStencil(Ke),xn=Ke)},reset:function(){I=!1,he=null,se=null,K=null,ae=null,xe=null,He=null,pt=null,xn=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,S=null,v=null,T=null,E=null,w=null,y=new Ve(0,0,0),b=0,D=!1,L=null,B=null,R=null,O=null,F=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=W>=2);let N=null,z={};const le=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),Q=new Pt().fromArray(le),Se=new Pt().fromArray(oe);function Fe(I,he,se,K){const ae=new Uint8Array(4),xe=i.createTexture();i.bindTexture(I,xe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<se;He++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(he+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return xe}const ee={};ee[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ee[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Te(i.DEPTH_TEST),c.setFunc(qo),Ie(!1),Oe(Zl),Te(i.CULL_FACE),we(Ci);function Te(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Ze(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Ce(I,he){return f[I]!==he?(i.bindFramebuffer(I,he),f[I]=he,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function V(I,he){let se=m,K=!1;if(I)if(se=g.get(he),se===void 0&&(se=[],g.set(he,se)),I.isWebGLMultipleRenderTargets){const ae=I.texture;if(se.length!==ae.length||se[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,He=ae.length;xe<He;xe++)se[xe]=i.COLOR_ATTACHMENT0+xe;se.length=ae.length,K=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,K=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,K=!0);K&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function nn(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ge={[rr]:i.FUNC_ADD,[Jp]:i.FUNC_SUBTRACT,[Qp]:i.FUNC_REVERSE_SUBTRACT};if(n)ge[eu]=i.MIN,ge[tu]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ge[eu]=I.MIN_EXT,ge[tu]=I.MAX_EXT)}const Ae={[em]:i.ZERO,[tm]:i.ONE,[nm]:i.SRC_COLOR,[vc]:i.SRC_ALPHA,[cm]:i.SRC_ALPHA_SATURATE,[om]:i.DST_COLOR,[rm]:i.DST_ALPHA,[im]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[am]:i.ONE_MINUS_DST_COLOR,[sm]:i.ONE_MINUS_DST_ALPHA,[lm]:i.CONSTANT_COLOR,[um]:i.ONE_MINUS_CONSTANT_COLOR,[hm]:i.CONSTANT_ALPHA,[dm]:i.ONE_MINUS_CONSTANT_ALPHA};function we(I,he,se,K,ae,xe,He,pt,xn,Ke){if(I===Ci){_===!0&&(Ze(i.BLEND),_=!1);return}if(_===!1&&(Te(i.BLEND),_=!0),I!==Kp){if(I!==M||Ke!==D){if((x!==rr||T!==rr)&&(i.blendEquation(i.FUNC_ADD),x=rr,T=rr),Ke)switch(I){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,v=null,E=null,w=null,y.set(0,0,0),b=0,M=I,D=Ke}return}ae=ae||he,xe=xe||se,He=He||K,(he!==x||ae!==T)&&(i.blendEquationSeparate(ge[he],ge[ae]),x=he,T=ae),(se!==S||K!==v||xe!==E||He!==w)&&(i.blendFuncSeparate(Ae[se],Ae[K],Ae[xe],Ae[He]),S=se,v=K,E=xe,w=He),(pt.equals(y)===!1||xn!==b)&&(i.blendColor(pt.r,pt.g,pt.b,xn),y.copy(pt),b=xn),M=I,D=!1}function ot(I,he){I.side===Gn?Ze(i.CULL_FACE):Te(i.CULL_FACE);let se=I.side===$t;he&&(se=!se),Ie(se),I.blending===Yr&&I.transparent===!1?we(Ci):we(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const K=I.stencilWrite;l.setTest(K),K&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):Ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function Oe(I){I!==jp?(Te(i.CULL_FACE),I!==B&&(I===Zl?i.cullFace(i.BACK):I===$p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ze(i.CULL_FACE),B=I}function Ye(I){I!==R&&(Z&&i.lineWidth(I),R=I)}function Mt(I,he,se){I?(Te(i.POLYGON_OFFSET_FILL),(O!==he||F!==se)&&(i.polygonOffset(he,se),O=he,F=se)):Ze(i.POLYGON_OFFSET_FILL)}function Dt(I){I?Te(i.SCISSOR_TEST):Ze(i.SCISSOR_TEST)}function P(I){I===void 0&&(I=i.TEXTURE0+U-1),N!==I&&(i.activeTexture(I),N=I)}function A(I,he,se){se===void 0&&(N===null?se=i.TEXTURE0+U-1:se=N);let K=z[se];K===void 0&&(K={type:void 0,texture:void 0},z[se]=K),(K.type!==I||K.texture!==he)&&(N!==se&&(i.activeTexture(se),N=se),i.bindTexture(I,he||ee[I]),K.type=I,K.texture=he)}function X(){const I=z[N];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function Ee(I){Se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function ve(I,he){let se=h.get(he);se===void 0&&(se=new WeakMap,h.set(he,se));let K=se.get(I);K===void 0&&(K=i.getUniformBlockIndex(he,I.name),se.set(I,K))}function pe(I,he){const K=h.get(he).get(I);u.get(he)!==K&&(i.uniformBlockBinding(he,K,I.__bindingPointIndex),u.set(he,K))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},N=null,z={},f={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,S=null,v=null,T=null,E=null,w=null,y=new Ve(0,0,0),b=0,D=!1,L=null,B=null,R=null,O=null,F=null,Q.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Te,disable:Ze,bindFramebuffer:Ce,drawBuffers:V,useProgram:nn,setBlending:we,setMaterial:ot,setFlipSided:Ie,setCullFace:Oe,setLineWidth:Ye,setPolygonOffset:Mt,setScissorTest:Dt,activeTexture:P,bindTexture:A,unbindTexture:X,compressedTexImage2D:ie,compressedTexImage3D:te,texImage2D:ne,texImage3D:We,updateUBOMapping:ve,uniformBlockBinding:pe,texStorage2D:Me,texStorage3D:Ge,texSubImage2D:re,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:de,scissor:Re,viewport:Ee,reset:ze}}function sy(i,e,t,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return _?new OffscreenCanvas(P,A):Jo("canvas")}function x(P,A,X,ie){let te=1;if((P.width>ie||P.height>ie)&&(te=ie/Math.max(P.width,P.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const re=A?Ko:Math.floor,me=re(te*P.width),ce=re(te*P.height);m===void 0&&(m=M(me,ce));const de=X?M(me,ce):m;return de.width=me,de.height=ce,de.getContext("2d").drawImage(P,0,0,me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+me+"x"+ce+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return Tc(P.width)&&Tc(P.height)}function v(P){return o?!1:P.wrapS!==Dn||P.wrapT!==Dn||P.minFilter!==Ht&&P.minFilter!==Mn}function T(P,A){return P.generateMipmaps&&A&&P.minFilter!==Ht&&P.minFilter!==Mn}function E(P){i.generateMipmap(P)}function w(P,A,X,ie,te=!1){if(o===!1)return A;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=A;if(A===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),A===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),A===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),A===i.RGBA){const me=te?Yo:Xe.getTransfer(ie);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=me===Qe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(P,A,X){return T(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==Ht&&P.minFilter!==Mn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function b(P){return P===Ht||P===nu||P===Na?i.NEAREST:i.LINEAR}function D(P){const A=P.target;A.removeEventListener("dispose",D),B(A),A.isVideoTexture&&g.delete(A)}function L(P){const A=P.target;A.removeEventListener("dispose",L),O(A)}function B(P){const A=n.get(P);if(A.__webglInit===void 0)return;const X=P.source,ie=p.get(X);if(ie){const te=ie[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(P),Object.keys(ie).length===0&&p.delete(X)}n.remove(P)}function R(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const X=P.source,ie=p.get(X);delete ie[A.__cacheKey],a.memory.textures--}function O(P){const A=P.texture,X=n.get(P),ie=n.get(A);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(X.__webglFramebuffer[te]))for(let re=0;re<X.__webglFramebuffer[te].length;re++)i.deleteFramebuffer(X.__webglFramebuffer[te][re]);else i.deleteFramebuffer(X.__webglFramebuffer[te]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[te])}else{if(Array.isArray(X.__webglFramebuffer))for(let te=0;te<X.__webglFramebuffer.length;te++)i.deleteFramebuffer(X.__webglFramebuffer[te]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let te=0;te<X.__webglColorRenderbuffer.length;te++)X.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[te]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let te=0,re=A.length;te<re;te++){const me=n.get(A[te]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(A[te])}n.remove(A),n.remove(P)}let F=0;function U(){F=0}function Z(){const P=F;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),F+=1,P}function W(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function Y(P,A){const X=n.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,P,A);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function N(P,A){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function z(P,A){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function le(P,A){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Ze(X,P,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}const oe={[Mc]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Ec]:i.MIRRORED_REPEAT},Q={[Ht]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Am]:i.LINEAR_MIPMAP_NEAREST,[Bs]:i.LINEAR_MIPMAP_LINEAR},Se={[Vm]:i.NEVER,[jm]:i.ALWAYS,[Gm]:i.LESS,[Wm]:i.LEQUAL,[Hm]:i.EQUAL,[Ym]:i.GEQUAL,[Xm]:i.GREATER,[qm]:i.NOTEQUAL};function Fe(P,A,X){if(X?(i.texParameteri(P,i.TEXTURE_WRAP_S,oe[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,oe[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,oe[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Q[A.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Dn||A.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,b(A.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Ht&&A.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ht||A.minFilter!==Na&&A.minFilter!==Bs||A.type===Ei&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===ks&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ee(P,A){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",D));const ie=A.source;let te=p.get(ie);te===void 0&&(te={},p.set(ie,te));const re=W(A);if(re!==P.__cacheKey){te[re]===void 0&&(te[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[re].usedTimes++;const me=te[P.__cacheKey];me!==void 0&&(te[P.__cacheKey].usedTimes--,me.usedTimes===0&&R(A)),P.__cacheKey=re,P.__webglTexture=te[re].texture}return X}function Te(P,A,X){let ie=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=i.TEXTURE_3D);const te=ee(P,A),re=A.source;t.bindTexture(ie,P.__webglTexture,i.TEXTURE0+X);const me=n.get(re);if(re.version!==me.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const ce=Xe.getPrimaries(Xe.workingColorSpace),de=A.colorSpace===bn?null:Xe.getPrimaries(A.colorSpace),Me=A.colorSpace===bn||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ge=v(A)&&S(A.image)===!1;let ne=x(A.image,Ge,!1,u);ne=Dt(A,ne);const We=S(ne)||o,Re=s.convert(A.format,A.colorSpace);let Ee=s.convert(A.type),ve=w(A.internalFormat,Re,Ee,A.colorSpace,A.isVideoTexture);Fe(ie,A,We);let pe;const ze=A.mipmaps,I=o&&A.isVideoTexture!==!0,he=me.__version===void 0||te===!0,se=y(A,ne,We);if(A.isDepthTexture)ve=i.DEPTH_COMPONENT,o?A.type===Ei?ve=i.DEPTH_COMPONENT32F:A.type===Mi?ve=i.DEPTH_COMPONENT24:A.type===ar?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:A.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===cr&&ve===i.DEPTH_COMPONENT&&A.type!==nl&&A.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Mi,Ee=s.convert(A.type)),A.format===es&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,A.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ar,Ee=s.convert(A.type))),he&&(I?t.texStorage2D(i.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,Re,Ee,null));else if(A.isDataTexture)if(ze.length>0&&We){I&&he&&t.texStorage2D(i.TEXTURE_2D,se,ve,ze[0].width,ze[0].height);for(let K=0,ae=ze.length;K<ae;K++)pe=ze[K],I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,Re,Ee,pe.data):t.texImage2D(i.TEXTURE_2D,K,ve,pe.width,pe.height,0,Re,Ee,pe.data);A.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,se,ve,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Re,Ee,ne.data)):t.texImage2D(i.TEXTURE_2D,0,ve,ne.width,ne.height,0,Re,Ee,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){I&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ve,ze[0].width,ze[0].height,ne.depth);for(let K=0,ae=ze.length;K<ae;K++)pe=ze[K],A.format!==Nn?Re!==null?I?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,ne.depth,Re,pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ve,pe.width,pe.height,ne.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pe.width,pe.height,ne.depth,Re,Ee,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ve,pe.width,pe.height,ne.depth,0,Re,Ee,pe.data)}else{I&&he&&t.texStorage2D(i.TEXTURE_2D,se,ve,ze[0].width,ze[0].height);for(let K=0,ae=ze.length;K<ae;K++)pe=ze[K],A.format!==Nn?Re!==null?I?t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,Re,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,pe.width,pe.height,Re,Ee,pe.data):t.texImage2D(i.TEXTURE_2D,K,ve,pe.width,pe.height,0,Re,Ee,pe.data)}else if(A.isDataArrayTexture)I?(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ve,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Re,Ee,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,Re,Ee,ne.data);else if(A.isData3DTexture)I?(he&&t.texStorage3D(i.TEXTURE_3D,se,ve,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Re,Ee,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,Re,Ee,ne.data);else if(A.isFramebufferTexture){if(he)if(I)t.texStorage2D(i.TEXTURE_2D,se,ve,ne.width,ne.height);else{let K=ne.width,ae=ne.height;for(let xe=0;xe<se;xe++)t.texImage2D(i.TEXTURE_2D,xe,ve,K,ae,0,Re,Ee,null),K>>=1,ae>>=1}}else if(ze.length>0&&We){I&&he&&t.texStorage2D(i.TEXTURE_2D,se,ve,ze[0].width,ze[0].height);for(let K=0,ae=ze.length;K<ae;K++)pe=ze[K],I?t.texSubImage2D(i.TEXTURE_2D,K,0,0,Re,Ee,pe):t.texImage2D(i.TEXTURE_2D,K,ve,Re,Ee,pe);A.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,se,ve,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ee,ne)):t.texImage2D(i.TEXTURE_2D,0,ve,Re,Ee,ne);T(A,We)&&E(ie),me.__version=re.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ze(P,A,X){if(A.image.length!==6)return;const ie=ee(P,A),te=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const re=n.get(te);if(te.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);const me=Xe.getPrimaries(Xe.workingColorSpace),ce=A.colorSpace===bn?null:Xe.getPrimaries(A.colorSpace),de=A.colorSpace===bn||me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ge=A.image[0]&&A.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!Me&&!Ge?ne[K]=x(A.image[K],!1,!0,l):ne[K]=Ge?A.image[K].image:A.image[K],ne[K]=Dt(A,ne[K]);const We=ne[0],Re=S(We)||o,Ee=s.convert(A.format,A.colorSpace),ve=s.convert(A.type),pe=w(A.internalFormat,Ee,ve,A.colorSpace),ze=o&&A.isVideoTexture!==!0,I=re.__version===void 0||ie===!0;let he=y(A,We,Re);Fe(i.TEXTURE_CUBE_MAP,A,Re);let se;if(Me){ze&&I&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,pe,We.width,We.height);for(let K=0;K<6;K++){se=ne[K].mipmaps;for(let ae=0;ae<se.length;ae++){const xe=se[ae];A.format!==Nn?Ee!==null?ze?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,xe.width,xe.height,Ee,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,0,0,xe.width,xe.height,Ee,ve,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae,pe,xe.width,xe.height,0,Ee,ve,xe.data)}}}else{se=A.mipmaps,ze&&I&&(se.length>0&&he++,t.texStorage2D(i.TEXTURE_CUBE_MAP,he,pe,ne[0].width,ne[0].height));for(let K=0;K<6;K++)if(Ge){ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,Ee,ve,ne[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,ne[K].width,ne[K].height,0,Ee,ve,ne[K].data);for(let ae=0;ae<se.length;ae++){const He=se[ae].image[K].image;ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,He.width,He.height,Ee,ve,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,pe,He.width,He.height,0,Ee,ve,He.data)}}else{ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ve,ne[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,Ee,ve,ne[K]);for(let ae=0;ae<se.length;ae++){const xe=se[ae];ze?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,0,0,Ee,ve,xe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ae+1,pe,Ee,ve,xe.image[K])}}}T(A,Re)&&E(i.TEXTURE_CUBE_MAP),re.__version=te.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Ce(P,A,X,ie,te,re){const me=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),de=w(X.internalFormat,me,ce,X.colorSpace);if(!n.get(A).__hasExternalTextures){const Ge=Math.max(1,A.width>>re),ne=Math.max(1,A.height>>re);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,re,de,Ge,ne,A.depth,0,me,ce,null):t.texImage2D(te,re,de,Ge,ne,0,me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Ye(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,te,n.get(X).__webglTexture,0,Oe(A)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,te,n.get(X).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(P,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||Ye(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Ei?ie=i.DEPTH_COMPONENT32F:te.type===Mi&&(ie=i.DEPTH_COMPONENT24));const re=Oe(A);Ye(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,ie,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ie,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const ie=Oe(A);X&&Ye(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):Ye(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ie.length;te++){const re=ie[te],me=s.convert(re.format,re.colorSpace),ce=s.convert(re.type),de=w(re.internalFormat,me,ce,re.colorSpace),Me=Oe(A);X&&Ye(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,de,A.width,A.height):Ye(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,de,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nn(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const ie=n.get(A.depthTexture).__webglTexture,te=Oe(A);if(A.depthTexture.format===cr)Ye(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(A.depthTexture.format===es)Ye(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(P){const A=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");nn(A.__webglFramebuffer,P)}else if(X){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=i.createRenderbuffer(),V(A.__webglDepthbuffer[ie],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),V(A.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(P,A,X){const ie=n.get(P);A!==void 0&&Ce(ie.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ge(P)}function we(P){const A=P.texture,X=n.get(P),ie=n.get(A);P.addEventListener("dispose",L),P.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=A.version,a.memory.textures++);const te=P.isWebGLCubeRenderTarget===!0,re=P.isWebGLMultipleRenderTargets===!0,me=S(P)||o;if(te){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)X.__webglFramebuffer[ce][de]=i.createFramebuffer()}else X.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)X.__webglFramebuffer[ce]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(re)if(r.drawBuffers){const ce=P.texture;for(let de=0,Me=ce.length;de<Me;de++){const Ge=n.get(ce[de]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ye(P)===!1){const ce=re?A:[A];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const Me=ce[de];X.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[de]);const Ge=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),We=w(Me.internalFormat,Ge,ne,Me.colorSpace,P.isXRRenderTarget===!0),Re=Oe(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,We,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,X.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),V(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,A,me);for(let ce=0;ce<6;ce++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Ce(X.__webglFramebuffer[ce][de],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Ce(X.__webglFramebuffer[ce],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);T(A,me)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const ce=P.texture;for(let de=0,Me=ce.length;de<Me;de++){const Ge=ce[de],ne=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Fe(i.TEXTURE_2D,Ge,me),Ce(X.__webglFramebuffer,P,Ge,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),T(Ge,me)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?ce=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ie.__webglTexture),Fe(ce,A,me),o&&A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)Ce(X.__webglFramebuffer[de],P,A,i.COLOR_ATTACHMENT0,ce,de);else Ce(X.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,ce,0);T(A,me)&&E(ce),t.unbindTexture()}P.depthBuffer&&ge(P)}function ot(P){const A=S(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ie=0,te=X.length;ie<te;ie++){const re=X[ie];if(T(re,A)){const me=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(re).__webglTexture;t.bindTexture(me,ce),E(me),t.unbindTexture()}}}function Ie(P){if(o&&P.samples>0&&Ye(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,ie=P.height;let te=i.COLOR_BUFFER_BIT;const re=[],me=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(P),de=P.isWebGLMultipleRenderTargets===!0;if(de)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){re.push(i.COLOR_ATTACHMENT0+Me),P.depthBuffer&&re.push(me);const Ge=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ge===!1&&(P.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Me]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),de){const ne=n.get(A[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,X,ie,0,0,X,ie,te,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Me]);const Ge=n.get(A[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(h,P.samples)}function Ye(P){const A=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Mt(P){const A=a.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function Dt(P,A){const X=P.colorSpace,ie=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===bc||X!==li&&X!==bn&&(Xe.getTransfer(X)===Qe?o===!1?e.has("EXT_sRGB")===!0&&ie===Nn?(P.format=bc,P.minFilter=Mn,P.generateMipmaps=!1):A=Rd.sRGBToLinear(A):(ie!==Nn||te!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=le,this.rebindTextures=Ae,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ye}function oy(i,e,t){const n=t.isWebGL2;function r(s,a=bn){let o;const c=Xe.getTransfer(a);if(s===Pi)return i.UNSIGNED_BYTE;if(s===Md)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ed)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Cm)return i.BYTE;if(s===Rm)return i.SHORT;if(s===nl)return i.UNSIGNED_SHORT;if(s===Sd)return i.INT;if(s===Mi)return i.UNSIGNED_INT;if(s===Ei)return i.FLOAT;if(s===ks)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Pm)return i.ALPHA;if(s===Nn)return i.RGBA;if(s===Lm)return i.LUMINANCE;if(s===Dm)return i.LUMINANCE_ALPHA;if(s===cr)return i.DEPTH_COMPONENT;if(s===es)return i.DEPTH_STENCIL;if(s===bc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Nm)return i.RED;if(s===bd)return i.RED_INTEGER;if(s===Im)return i.RG;if(s===Td)return i.RG_INTEGER;if(s===wd)return i.RGBA_INTEGER;if(s===Ia||s===Oa||s===Ua||s===Fa)if(c===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===iu||s===ru||s===su||s===ou)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ru)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ou)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Om)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===cu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===au)return c===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===cu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===uu||s===hu||s===du||s===fu||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===yu||s===Su||s===Mu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===du)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_u)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Su)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mu)return c===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ba||s===Eu||s===bu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ba)return c===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Eu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Um||s===Tu||s===wu||s===Au)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Tu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Au)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ar?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ay extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class No extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(l,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new No;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ly extends mn{constructor(e,t,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:cr,u!==cr&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=Mi),n===void 0&&u===es&&(n=ar),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uy extends _r{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const M=[],x=[],S=new En;S.layers.enable(1),S.viewport=new Pt;const v=new En;v.layers.enable(2),v.viewport=new Pt;const T=[S,v],E=new ay;E.layers.enable(1),E.layers.enable(2);let w=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=M[N];return z===void 0&&(z=new ac,M[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=M[N];return z===void 0&&(z=new ac,M[N]=z),z.getGripSpace()},this.getHand=function(N){let z=M[N];return z===void 0&&(z=new ac,M[N]=z),z.getHandSpace()};function b(N){const z=x.indexOf(N.inputSource);if(z===-1)return;const le=M[z];le!==void 0&&(le.update(N.inputSource,N.frame,l||a),le.dispatchEvent({type:N.type,data:N.inputSource}))}function D(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",L);for(let N=0;N<M.length;N++){const z=x[N];z!==null&&(x[N]=null,M[N].disconnect(z))}w=null,y=null,e.setRenderTarget(p),f=null,d=null,h=null,r=null,_=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",D),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,z),r.updateRenderState({baseLayer:f}),_=new pr(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let z=null,le=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=m.stencil?es:cr,le=m.stencil?ar:Mi);const Q={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),_=new pr(d.textureWidth,d.textureHeight,{format:Nn,type:Pi,depthTexture:new ly(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Se=e.properties.get(_);Se.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(N){for(let z=0;z<N.removed.length;z++){const le=N.removed[z],oe=x.indexOf(le);oe>=0&&(x[oe]=null,M[oe].disconnect(le))}for(let z=0;z<N.added.length;z++){const le=N.added[z];let oe=x.indexOf(le);if(oe===-1){for(let Se=0;Se<M.length;Se++)if(Se>=x.length){x.push(le),oe=Se;break}else if(x[Se]===null){x[Se]=le,oe=Se;break}if(oe===-1)break}const Q=M[oe];Q&&Q.connect(le)}}const B=new H,R=new H;function O(N,z,le){B.setFromMatrixPosition(z.matrixWorld),R.setFromMatrixPosition(le.matrixWorld);const oe=B.distanceTo(R),Q=z.projectionMatrix.elements,Se=le.projectionMatrix.elements,Fe=Q[14]/(Q[10]-1),ee=Q[14]/(Q[10]+1),Te=(Q[9]+1)/Q[5],Ze=(Q[9]-1)/Q[5],Ce=(Q[8]-1)/Q[0],V=(Se[8]+1)/Se[0],nn=Fe*Ce,ge=Fe*V,Ae=oe/(-Ce+V),we=Ae*-Ce;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(Ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const ot=Fe+Ae,Ie=ee+Ae,Oe=nn-we,Ye=ge+(oe-we),Mt=Te*ee/Ie*ot,Dt=Ze*ee/Ie*ot;N.projectionMatrix.makePerspective(Oe,Ye,Mt,Dt,ot,Ie),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function F(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;E.near=v.near=S.near=N.near,E.far=v.far=S.far=N.far,(w!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,y=E.far);const z=N.parent,le=E.cameras;F(E,z);for(let oe=0;oe<le.length;oe++)F(le[oe],z);le.length===2?O(E,S,v):E.projectionMatrix.copy(S.projectionMatrix),U(N,E,z)};function U(N,z,le){le===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=zs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let Z=null;function W(N,z){if(u=z.getViewerPose(l||a),g=z,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let oe=!1;le.length!==E.cameras.length&&(E.cameras.length=0,oe=!0);for(let Q=0;Q<le.length;Q++){const Se=le[Q];let Fe=null;if(f!==null)Fe=f.getViewport(Se);else{const Te=h.getViewSubImage(d,Se);Fe=Te.viewport,Q===0&&(e.setRenderTargetTextures(_,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(_))}let ee=T[Q];ee===void 0&&(ee=new En,ee.layers.enable(Q),ee.viewport=new Pt,T[Q]=ee),ee.matrix.fromArray(Se.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Se.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Q===0&&(E.matrix.copy(ee.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),oe===!0&&E.cameras.push(ee)}}for(let le=0;le<M.length;le++){const oe=x[le],Q=M[le];oe!==null&&Q!==void 0&&Q.update(oe,z,l||a)}Z&&Z(N,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const Y=new Gd;Y.setAnimationLoop(W),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}}function hy(i,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Bd(i)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function r(p,_,M,x,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(p,_):_.isMeshToonMaterial?(s(p,_),h(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_)):_.isMeshStandardMaterial?(s(p,_),d(p,_),_.isMeshPhysicalMaterial&&f(p,_,S)):_.isMeshMatcapMaterial?(s(p,_),g(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),m(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?c(p,_,M,x):_.isSpriteMaterial?l(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===$t&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===$t&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const M=e.get(_).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap){p.lightMap.value=_.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=_.lightMapIntensity*x,t(_.lightMap,p.lightMapTransform)}_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function c(p,_,M,x){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*M,p.scale.value=x*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function l(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function h(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function d(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),e.get(_).envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function f(p,_,M){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$t&&p.clearcoatNormalScale.value.negate())),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,_){_.matcap&&(p.matcap.value=_.matcap)}function m(p,_){const M=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dy(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function l(M,x){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",p));const v=x.program;n.updateUBOMapping(M,v);const T=e.render.frame;s[M.id]!==T&&(d(M),s[M.id]=T)}function u(M){const x=h();M.__bindingPointIndex=x;const S=i.createBuffer(),v=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],S=M.uniforms,v=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=S.length;T<E;T++){const w=S[T];if(f(w,T,v)===!0){const y=w.__offset,b=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let L=0;L<b.length;L++){const B=b[L],R=m(B);typeof B=="number"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,y+D,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=B.elements[0],w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=B.elements[0],w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=B.elements[0]):(B.toArray(w.__data,D),D+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,w.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,S){const v=M.value;if(S[x]===void 0){if(typeof v=="number")S[x]=v;else{const T=Array.isArray(v)?v:[v],E=[];for(let w=0;w<T.length;w++)E.push(T[w].clone());S[x]=E}return!0}else if(typeof v=="number"){if(S[x]!==v)return S[x]=v,!0}else{const T=Array.isArray(S[x])?S[x]:[S[x]],E=Array.isArray(v)?v:[v];for(let w=0;w<T.length;w++){const y=T[w];if(y.equals(E[w])===!1)return y.copy(E[w]),!0}}return!1}function g(M){const x=M.uniforms;let S=0;const v=16;let T=0;for(let E=0,w=x.length;E<w;E++){const y=x[E],b={boundary:0,storage:0},D=Array.isArray(y.value)?y.value:[y.value];for(let L=0,B=D.length;L<B;L++){const R=D[L],O=m(R);b.boundary+=O.boundary,b.storage+=O.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,E>0){T=S%v;const L=v-T;T!==0&&L-b.boundary<0&&(S+=v-T,y.__offset=S)}S+=b.storage}return T=S%v,T>0&&(S+=v-T),M.__size=S,M.__cache={},this}function m(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:_}}class Yd{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const _=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let S=!1,v=0,T=0,E=null,w=-1,y=null;const b=new Pt,D=new Pt;let L=null;const B=new Ve(0);let R=0,O=t.width,F=t.height,U=1,Z=null,W=null;const Y=new Pt(0,0,O,F),N=new Pt(0,0,O,F);let z=!1;const le=new Vd;let oe=!1,Q=!1,Se=null;const Fe=new Tt,ee=new qe,Te=new H,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return E===null?U:1}let V=n;function nn(C,k){for(let q=0;q<C.length;q++){const j=C[q],$=t.getContext(j,k);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",he,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),V=nn(k,C),V===null)throw nn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ge,Ae,we,ot,Ie,Oe,Ye,Mt,Dt,P,A,X,ie,te,re,me,ce,de,Me,Ge,ne,We,Re,Ee;function ve(){ge=new Mv(V),Ae=new mv(V,ge,e),ge.init(Ae),We=new oy(V,ge,Ae),we=new ry(V,ge,Ae),ot=new Tv(V),Ie=new Wx,Oe=new sy(V,ge,we,Ie,Ae,We,ot),Ye=new gv(x),Mt=new Sv(x),Dt=new I_(V,Ae),Re=new fv(V,ge,Dt,Ae),P=new Ev(V,Dt,ot,Re),A=new Rv(V,P,Dt,ot),Me=new Cv(V,Ae,Oe),me=new _v(Ie),X=new Hx(x,Ye,Mt,ge,Ae,Re,me),ie=new hy(x,Ie),te=new qx,re=new Jx(ge,Ae),de=new dv(x,Ye,Mt,we,A,d,c),ce=new iy(x,A,Ae),Ee=new dy(V,ot,Ae,we),Ge=new pv(V,ge,ot,Ae),ne=new bv(V,ge,ot,Ae),ot.programs=X.programs,x.capabilities=Ae,x.extensions=ge,x.properties=Ie,x.renderLists=te,x.shadowMap=ce,x.state=we,x.info=ot}ve();const pe=new uy(x,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(O,F,!1))},this.getSize=function(C){return C.set(O,F)},this.setSize=function(C,k,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,F=k,t.width=Math.floor(C*U),t.height=Math.floor(k*U),q===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*U,F*U).floor()},this.setDrawingBufferSize=function(C,k,q){O=C,F=k,U=q,t.width=Math.floor(C*q),t.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(Y)},this.setViewport=function(C,k,q,j){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,k,q,j),we.viewport(b.copy(Y).multiplyScalar(U).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,k,q,j){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,k,q,j),we.scissor(D.copy(N).multiplyScalar(U).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){we.setScissorTest(z=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(C=!0,k=!0,q=!0){let j=0;if(C){let $=!1;if(E!==null){const fe=E.texture.format;$=fe===wd||fe===Td||fe===bd}if($){const fe=E.texture.type,_e=fe===Pi||fe===Mi||fe===nl||fe===ar||fe===Md||fe===Ed,ye=de.getClearColor(),be=de.getClearAlpha(),Ne=ye.r,Pe=ye.g,Le=ye.b;_e?(f[0]=Ne,f[1]=Pe,f[2]=Le,f[3]=be,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=Ne,g[1]=Pe,g[2]=Le,g[3]=be,V.clearBufferiv(V.COLOR,0,g))}else j|=V.COLOR_BUFFER_BIT}k&&(j|=V.DEPTH_BUFFER_BIT),q&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",he,!1),te.dispose(),re.dispose(),Ie.dispose(),Ye.dispose(),Mt.dispose(),A.dispose(),Re.dispose(),Ee.dispose(),X.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",xn),pe.removeEventListener("sessionend",Ke),Se&&(Se.dispose(),Se=null),kt.stop()};function ze(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=ot.autoReset,k=ce.enabled,q=ce.autoUpdate,j=ce.needsUpdate,$=ce.type;ve(),ot.autoReset=C,ce.enabled=k,ce.autoUpdate=q,ce.needsUpdate=j,ce.type=$}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){const k=C.target;k.removeEventListener("dispose",se),K(k)}function K(C){ae(C),Ie.remove(C)}function ae(C){const k=Ie.get(C).programs;k!==void 0&&(k.forEach(function(q){X.releaseProgram(q)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,j,$,fe){k===null&&(k=Ze);const _e=$.isMesh&&$.matrixWorld.determinant()<0,ye=Gp(C,k,q,j,$);we.setMaterial(j,_e);let be=q.index,Ne=1;if(j.wireframe===!0){if(be=P.getWireframeAttribute(q),be===void 0)return;Ne=2}const Pe=q.drawRange,Le=q.attributes.position;let ht=Pe.start*Ne,rn=(Pe.start+Pe.count)*Ne;fe!==null&&(ht=Math.max(ht,fe.start*Ne),rn=Math.min(rn,(fe.start+fe.count)*Ne)),be!==null?(ht=Math.max(ht,0),rn=Math.min(rn,be.count)):Le!=null&&(ht=Math.max(ht,0),rn=Math.min(rn,Le.count));const Et=rn-ht;if(Et<0||Et===1/0)return;Re.setup($,j,ye,q,be);let Zn,at=Ge;if(be!==null&&(Zn=Dt.get(be),at=ne,at.setIndex(Zn)),$.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*Ce()),at.setMode(V.LINES)):at.setMode(V.TRIANGLES);else if($.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),we.setLineWidth(Be*Ce()),$.isLineSegments?at.setMode(V.LINES):$.isLineLoop?at.setMode(V.LINE_LOOP):at.setMode(V.LINE_STRIP)}else $.isPoints?at.setMode(V.POINTS):$.isSprite&&at.setMode(V.TRIANGLES);if($.isInstancedMesh)at.renderInstances(ht,Et,$.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ra=Math.min(q.instanceCount,Be);at.renderInstances(ht,Et,Ra)}else at.render(ht,Et)};function xe(C,k,q){C.transparent===!0&&C.side===Gn&&C.forceSinglePass===!1?(C.side=$t,C.needsUpdate=!0,lo(C,k,q),C.side=Ni,C.needsUpdate=!0,lo(C,k,q),C.side=Gn):lo(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),p=re.get(q),p.init(),M.push(p),q.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),C!==q&&C.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(x._useLegacyLights);const j=new Set;return C.traverse(function($){const fe=$.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const ye=fe[_e];xe(ye,q,$),j.add(ye)}else xe(fe,q,$),j.add(fe)}),M.pop(),p=null,j},this.compileAsync=function(C,k,q=null){const j=this.compile(C,k,q);return new Promise($=>{function fe(){if(j.forEach(function(_e){Ie.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){$(C);return}setTimeout(fe,10)}ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let He=null;function pt(C){He&&He(C)}function xn(){kt.stop()}function Ke(){kt.start()}const kt=new Gd;kt.setAnimationLoop(pt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(C){He=C,pe.setAnimationLoop(C),C===null?kt.stop():kt.start()},pe.addEventListener("sessionstart",xn),pe.addEventListener("sessionend",Ke),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,E),p=re.get(C,M.length),p.init(),M.push(p),Fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(Fe),Q=this.localClippingEnabled,oe=me.init(this.clippingPlanes,Q),m=te.get(C,_.length),m.init(),_.push(m),Bn(C,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Z,W),this.info.render.frame++,oe===!0&&me.beginShadows();const q=p.state.shadowsArray;if(ce.render(q,C,k),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(m,C),p.setupLights(x._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let $=0,fe=j.length;$<fe;$++){const _e=j[$];Wl(m,C,_e,_e.viewport)}}else Wl(m,C,k);E!==null&&(Oe.updateMultisampleRenderTarget(E),Oe.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,k),Re.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Bn(C,k,q,j){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||le.intersectsSprite(C)){j&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Fe);const _e=A.update(C),ye=C.material;ye.visible&&m.push(C,_e,ye,q,Te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||le.intersectsObject(C))){const _e=A.update(C),ye=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Te.copy(_e.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(Fe)),Array.isArray(ye)){const be=_e.groups;for(let Ne=0,Pe=be.length;Ne<Pe;Ne++){const Le=be[Ne],ht=ye[Le.materialIndex];ht&&ht.visible&&m.push(C,_e,ht,q,Te.z,Le)}}else ye.visible&&m.push(C,_e,ye,q,Te.z,null)}}const fe=C.children;for(let _e=0,ye=fe.length;_e<ye;_e++)Bn(fe[_e],k,q,j)}function Wl(C,k,q,j){const $=C.opaque,fe=C.transmissive,_e=C.transparent;p.setupLightsView(q),oe===!0&&me.setGlobalState(x.clippingPlanes,q),fe.length>0&&Vp($,fe,k,q),j&&we.viewport(b.copy(j)),$.length>0&&co($,k,q),fe.length>0&&co(fe,k,q),_e.length>0&&co(_e,k,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Vp(C,k,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;Se===null&&(Se=new pr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?ks:Pi,minFilter:Bs,samples:fe?4:0})),x.getDrawingBufferSize(ee),fe?Se.setSize(ee.x,ee.y):Se.setSize(Ko(ee.x),Ko(ee.y));const _e=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(B),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const ye=x.toneMapping;x.toneMapping=Ri,co(C,q,j),Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se);let be=!1;for(let Ne=0,Pe=k.length;Ne<Pe;Ne++){const Le=k[Ne],ht=Le.object,rn=Le.geometry,Et=Le.material,Zn=Le.group;if(Et.side===Gn&&ht.layers.test(j.layers)){const at=Et.side;Et.side=$t,Et.needsUpdate=!0,Xl(ht,q,j,rn,Et,Zn),Et.side=at,Et.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(Se),Oe.updateRenderTargetMipmap(Se)),x.setRenderTarget(_e),x.setClearColor(B,R),x.toneMapping=ye}function co(C,k,q){const j=k.isScene===!0?k.overrideMaterial:null;for(let $=0,fe=C.length;$<fe;$++){const _e=C[$],ye=_e.object,be=_e.geometry,Ne=j===null?_e.material:j,Pe=_e.group;ye.layers.test(q.layers)&&Xl(ye,k,q,be,Ne,Pe)}}function Xl(C,k,q,j,$,fe){C.onBeforeRender(x,k,q,j,$,fe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(x,k,q,j,C,fe),$.transparent===!0&&$.side===Gn&&$.forceSinglePass===!1?($.side=$t,$.needsUpdate=!0,x.renderBufferDirect(q,k,j,$,C,fe),$.side=Ni,$.needsUpdate=!0,x.renderBufferDirect(q,k,j,$,C,fe),$.side=Gn):x.renderBufferDirect(q,k,j,$,C,fe),C.onAfterRender(x,k,q,j,$,fe)}function lo(C,k,q){k.isScene!==!0&&(k=Ze);const j=Ie.get(C),$=p.state.lights,fe=p.state.shadowsArray,_e=$.state.version,ye=X.getParameters(C,$.state,fe,k,q),be=X.getProgramCacheKey(ye);let Ne=j.programs;j.environment=C.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(C.isMeshStandardMaterial?Mt:Ye).get(C.envMap||j.environment),Ne===void 0&&(C.addEventListener("dispose",se),Ne=new Map,j.programs=Ne);let Pe=Ne.get(be);if(Pe!==void 0){if(j.currentProgram===Pe&&j.lightsStateVersion===_e)return Yl(C,ye),Pe}else ye.uniforms=X.getUniforms(C),C.onBuild(q,ye,x),C.onBeforeCompile(ye,x),Pe=X.acquireProgram(ye,be),Ne.set(be,Pe),j.uniforms=ye.uniforms;const Le=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=me.uniform),Yl(C,ye),j.needsLights=Wp(C),j.lightsStateVersion=_e,j.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Pe,j.uniformsList=null,Pe}function ql(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Vo.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Yl(C,k){const q=Ie.get(C);q.outputColorSpace=k.outputColorSpace,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Gp(C,k,q,j,$){k.isScene!==!0&&(k=Ze),Oe.resetTextureUnits();const fe=k.fog,_e=j.isMeshStandardMaterial?k.environment:null,ye=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:li,be=(j.isMeshStandardMaterial?Mt:Ye).get(j.envMap||_e),Ne=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let Et=Ri;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=x.toneMapping);const Zn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=Zn!==void 0?Zn.length:0,Be=Ie.get(j),Ra=p.state.lights;if(oe===!0&&(Q===!0||C!==y)){const sn=C===y&&j.id===w;me.setState(j,C,sn)}let mt=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ra.state.version||Be.outputColorSpace!==ye||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||Be.envMap!==be||j.fog===!0&&Be.fog!==fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==me.numPlanes||Be.numIntersection!==me.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Pe||Be.morphTargets!==Le||Be.morphNormals!==ht||Be.morphColors!==rn||Be.toneMapping!==Et||Ae.isWebGL2===!0&&Be.morphTargetsCount!==at)&&(mt=!0):(mt=!0,Be.__version=j.version);let Wi=Be.currentProgram;mt===!0&&(Wi=lo(j,k,$));let jl=!1,gs=!1,Pa=!1;const zt=Wi.getUniforms(),Xi=Be.uniforms;if(we.useProgram(Wi.program)&&(jl=!0,gs=!0,Pa=!0),j.id!==w&&(w=j.id,gs=!0),jl||y!==C){zt.setValue(V,"projectionMatrix",C.projectionMatrix),zt.setValue(V,"viewMatrix",C.matrixWorldInverse);const sn=zt.map.cameraPosition;sn!==void 0&&sn.setValue(V,Te.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&zt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,gs=!0,Pa=!0)}if($.isSkinnedMesh){zt.setOptional(V,$,"bindMatrix"),zt.setOptional(V,$,"bindMatrixInverse");const sn=$.skeleton;sn&&(Ae.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),zt.setValue(V,"boneTexture",sn.boneTexture,Oe),zt.setValue(V,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=q.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&Ae.isWebGL2===!0)&&Me.update($,q,Wi),(gs||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,zt.setValue(V,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Xi.envMap.value=be,Xi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),gs&&(zt.setValue(V,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Hp(Xi,Pa),fe&&j.fog===!0&&ie.refreshFogUniforms(Xi,fe),ie.refreshMaterialUniforms(Xi,j,U,F,Se),Vo.upload(V,ql(Be),Xi,Oe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vo.upload(V,ql(Be),Xi,Oe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&zt.setValue(V,"center",$.center),zt.setValue(V,"modelViewMatrix",$.modelViewMatrix),zt.setValue(V,"normalMatrix",$.normalMatrix),zt.setValue(V,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const sn=j.uniformsGroups;for(let Da=0,Xp=sn.length;Da<Xp;Da++)if(Ae.isWebGL2){const $l=sn[Da];Ee.update($l,Wi),Ee.bind($l,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}function Hp(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Wp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,k,q){Ie.get(C.texture).__webglTexture=k,Ie.get(C.depthTexture).__webglTexture=q;const j=Ie.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const q=Ie.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,q=0){E=C,v=k,T=q;let j=!0,$=null,fe=!1,_e=!1;if(C){const be=Ie.get(C);be.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):be.__webglFramebuffer===void 0?Oe.setupRenderTarget(C):be.__hasExternalTextures&&Oe.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const Pe=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?$=Pe[k][q]:$=Pe[k],fe=!0):Ae.isWebGL2&&C.samples>0&&Oe.useMultisampledRTT(C)===!1?$=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?$=Pe[q]:$=Pe,b.copy(C.viewport),D.copy(C.scissor),L=C.scissorTest}else b.copy(Y).multiplyScalar(U).floor(),D.copy(N).multiplyScalar(U).floor(),L=z;if(we.bindFramebuffer(V.FRAMEBUFFER,$)&&Ae.drawBuffers&&j&&we.drawBuffers(C,$),we.viewport(b),we.scissor(D),we.setScissorTest(L),fe){const be=Ie.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,q)}else if(_e){const be=Ie.get(C.texture),Ne=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Ne)}w=-1},this.readRenderTargetPixels=function(C,k,q,j,$,fe,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){we.bindFramebuffer(V.FRAMEBUFFER,ye);try{const be=C.texture,Ne=be.format,Pe=be.type;if(Ne!==Nn&&We.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===ks&&(ge.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Pe!==Pi&&We.convert(Pe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Ei&&(Ae.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-j&&q>=0&&q<=C.height-$&&V.readPixels(k,q,j,$,We.convert(Ne),We.convert(Pe),fe)}finally{const be=E!==null?Ie.get(E).__webglFramebuffer:null;we.bindFramebuffer(V.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,k,q=0){const j=Math.pow(2,-q),$=Math.floor(k.image.width*j),fe=Math.floor(k.image.height*j);Oe.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,C.x,C.y,$,fe),we.unbindTexture()},this.copyTextureToTexture=function(C,k,q,j=0){const $=k.image.width,fe=k.image.height,_e=We.convert(q.format),ye=We.convert(q.type);Oe.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,C.x,C.y,$,fe,_e,ye,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,_e,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,C.x,C.y,_e,ye,k.image),j===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q,j,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=C.max.x-C.min.x+1,_e=C.max.y-C.min.y+1,ye=C.max.z-C.min.z+1,be=We.convert(j.format),Ne=We.convert(j.type);let Pe;if(j.isData3DTexture)Oe.setTexture3D(j,0),Pe=V.TEXTURE_3D;else if(j.isDataArrayTexture)Oe.setTexture2DArray(j,0),Pe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Le=V.getParameter(V.UNPACK_ROW_LENGTH),ht=V.getParameter(V.UNPACK_IMAGE_HEIGHT),rn=V.getParameter(V.UNPACK_SKIP_PIXELS),Et=V.getParameter(V.UNPACK_SKIP_ROWS),Zn=V.getParameter(V.UNPACK_SKIP_IMAGES),at=q.isCompressedTexture?q.mipmaps[0]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,at.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,at.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Pe,$,k.x,k.y,k.z,fe,_e,ye,be,Ne,at.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Pe,$,k.x,k.y,k.z,fe,_e,ye,be,at.data)):V.texSubImage3D(Pe,$,k.x,k.y,k.z,fe,_e,ye,be,Ne,at),V.pixelStorei(V.UNPACK_ROW_LENGTH,Le),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zn),$===0&&j.generateMipmaps&&V.generateMipmap(Pe),we.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Oe.setTextureCube(C,0):C.isData3DTexture?Oe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Oe.setTexture2DArray(C,0):Oe.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){v=0,T=0,E=null,we.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===il?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===ma?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?lr:Ad}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?Rt:li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class fy extends Yd{}fy.prototype.isWebGL1Renderer=!0;class py extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class my extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _h=new Tt,Ac=new Dd,Io=new _a,Oo=new H;class gh extends vt{constructor(e=new di,t=new my){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;_h.copy(r).invert(),Ac.copy(e.ray).applyMatrix4(_h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,m=f;g<m;g++){const p=l.getX(g);Oo.fromBufferAttribute(h,p),vh(Oo,p,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,m=f;g<m;g++)Oo.fromBufferAttribute(h,g),vh(Oo,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vh(i,e,t,n,r,s,a){const o=Ac.distanceSqToPoint(i);if(o<t){const c=new H;Ac.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class al extends di{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const m=[],p=n/2;let _=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new qn(h,3)),this.setAttribute("normal",new qn(d,3)),this.setAttribute("uv",new qn(f,2));function M(){const S=new H,v=new H;let T=0;const E=(t-e)/n;for(let w=0;w<=s;w++){const y=[],b=w/s,D=b*(t-e)+e;for(let L=0;L<=r;L++){const B=L/r,R=B*c+o,O=Math.sin(R),F=Math.cos(R);v.x=D*O,v.y=-b*n+p,v.z=D*F,h.push(v.x,v.y,v.z),S.set(O,E,F).normalize(),d.push(S.x,S.y,S.z),f.push(B,1-b),y.push(g++)}m.push(y)}for(let w=0;w<r;w++)for(let y=0;y<s;y++){const b=m[y][w],D=m[y+1][w],L=m[y+1][w+1],B=m[y][w+1];u.push(b,D,B),u.push(D,L,B),T+=6}l.addGroup(_,T,0),_+=T}function x(S){const v=g,T=new qe,E=new H;let w=0;const y=S===!0?e:t,b=S===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;const D=g;for(let L=0;L<=r;L++){const R=L/r*c+o,O=Math.cos(R),F=Math.sin(R);E.x=y*F,E.y=p*b,E.z=y*O,h.push(E.x,E.y,E.z),d.push(0,b,0),T.x=O*.5+.5,T.y=F*.5*b+.5,f.push(T.x,T.y),g++}for(let L=0;L<r;L++){const B=v+L,R=D+L;S===!0?u.push(R,R+1,B):u.push(R+1,R,B),w+=3}l.addGroup(_,w,S===!0?1:2),_+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const xh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _y{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const gy=new _y;class cl{constructor(e){this.manager=e!==void 0?e:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class vy extends Error{constructor(e,t){super(e),this.response=t}}class xy extends cl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xh.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:r});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ni[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:S})=>{if(x)_.close();else{m+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let T=0,E=u.length;T<E;T++){const w=u[T];w.onProgress&&w.onProgress(v)}_.enqueue(S),M()}})}}});return new Response(p)}else throw new vy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{xh.add(e,l);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}let Uo;class jd{static getContext(){return Uo===void 0&&(Uo=new(window.AudioContext||window.webkitAudioContext)),Uo}static setContext(e){Uo=e}}class yy extends cl{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new xy(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{const l=c.slice(0);jd.getContext().decodeAudioData(l,function(h){t(h)},o)}catch(l){o(l)}},n,r);function o(c){r?r(c):console.error(c),s.manager.itemError(e)}}}class Sy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yh(){return(typeof performance>"u"?Date:performance).now()}const Zi=new H,Sh=new us,My=new H,Ki=new H;class Ey extends vt{constructor(){super(),this.type="AudioListener",this.context=jd.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Sy}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zi,Sh,My),Ki.set(0,0,-1).applyQuaternion(Sh),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Zi.x,r),t.positionY.linearRampToValueAtTime(Zi.y,r),t.positionZ.linearRampToValueAtTime(Zi.z,r),t.forwardX.linearRampToValueAtTime(Ki.x,r),t.forwardY.linearRampToValueAtTime(Ki.y,r),t.forwardZ.linearRampToValueAtTime(Ki.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Zi.x,Zi.y,Zi.z),t.setOrientation(Ki.x,Ki.y,Ki.z,n.x,n.y,n.z)}}class by extends vt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class Ty{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function ri(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function $d(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vs={duration:.5,overwrite:!1,delay:0},ll,Lt,tt,Tn=1e8,$e=1/Tn,Cc=Math.PI*2,wy=Cc/4,Ay=0,Zd=Math.sqrt,Cy=Math.cos,Ry=Math.sin,At=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},ul=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},Zt=function(e){return e!==!1},hl=function(){return typeof window<"u"},Fo=function(e){return lt(e)||At(e)},Kd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ut=Array.isArray,Py=/random\([^)]+\)/g,Ly=/,\s*/g,Mh=/(?:-?\.?\d|\.)+/gi,Jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qd=/[+-]=-?[.\d]+/,Dy=/[^,'"\[\]\s]+/gi,Ny=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,it,zn,Rc,dl,gn={},Qo={},ef,tf=function(e){return(Qo=ns(e,gn))&&tn},fl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gs=function(e,t){return!t&&console.warn(e)},nf=function(e,t){return e&&(gn[e]=t)&&Qo&&(Qo[e]=t)||gn},Hs=function(){return 0},Iy={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},Oy={suppressEvents:!0},pl={},Li=[],Pc={},rf,ln={},lc={},Eh=30,Ho=[],ml="",_l=function(e){var t=e[0],n,r;if(Yn(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ho.length;r--&&!Ho[r].targetTest(t););n=Ho[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wf(e[r],n)))||e.splice(r,1);return e},ur=function(e){return e._gsap||_l(wn(e))[0]._gsap},sf=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():ul(n)&&e.getAttribute&&e.getAttribute(t)||n},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},nt=function(e){return Math.round(e*1e7)/1e7||0},$r=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Uy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ea=function(){var e=Li.length,t=Li.slice(0),n,r;for(Pc={},Li.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},gl=function(e){return!!(e._initted||e._startAt||e.add)},of=function(e,t,n,r){Li.length&&!Lt&&ea(),e.render(t,n,!!(Lt&&t<0&&gl(e))),Li.length&&!Lt&&ea()},af=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Dy).length<2?t:At(e)?e.trim():e},cf=function(e){return e},vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fy=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ns=function(e,t){for(var n in t)e[n]=t[n];return e},bh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ta=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ns=function(e){var t=e.parent||it,n=e.keyframes?Fy(Ut(e.keyframes)):vn;if(Zt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},By=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},lf=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},xa=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Oi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ky=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lc=function(e,t,n,r){return e._startAt&&(Lt?e._startAt.revert(Go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zy=function i(e){return!e||e._ts&&i(e.parent)},Th=function(e){return e._repeat?is(e._tTime,e=e.duration()+e._rDelay)*e:0},is=function(e,t){var n=Math.floor(e=nt(e/t));return e&&n===e?n-1:n},na=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ya=function(e){return e._end=nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||$e)||0))},Sa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ya(e),n._dirty||hr(n,e)),e},uf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=na(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>$e)&&t.render(n,!0)),hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-$e}},Hn=function(e,t,n,r){return t.parent&&Oi(t),t._start=nt((ui(n)?n:n||e!==it?Sn(e,n,t):e._time)+t._delay),t._end=nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lf(e,t,"_first","_last",e._sort?"_start":0),Dc(t)||(e._recent=t),r||uf(e,t),e._ts<0&&Sa(e,e._tTime),e},hf=function(e,t){return(gn.ScrollTrigger||fl("scrollTrigger",t))&&gn.ScrollTrigger.create(t,e)},df=function(e,t,n,r,s){if(xl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rf!==hn.frame)return Li.push(e),e._lazy=[s,r],1},Vy=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Dc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gy=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Vy(e)&&!(!e._initted&&Dc(e))||(e._ts<0||e._dp._ts<0)&&!Dc(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=eo(0,e._tDur,t),u=is(c,o),e._yoyo&&u&1&&(a=1-a),u!==is(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Lt||r||e._zTime===$e||!t&&e._zTime){if(!e._initted&&df(e,t,r,n,c))return;for(h=e._zTime,e._zTime=t||(n?$e:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Lc(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Oi(e,1),!n&&!Lt&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Hy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},rs=function(e,t,n,r){var s=e._repeat,a=nt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:nt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Sa(e,e._tTime=e._tDur*o),e.parent&&ya(e),n||hr(e.parent,e),e},wh=function(e){return e instanceof jt?hr(e):rs(e,e._dur)},Wy={_start:0,endTime:Hs,totalDuration:Hs},Sn=function i(e,t,n){var r=e.labels,s=e._recent||Wy,a=e.duration()>=Tn?s.endTime(!1):e._dur,o,c,l;return At(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Ut(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Is=function(e,t,n){var r=ui(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,c;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Zt(c.vars.inherit)&&c.parent;a.immediateRender=Zt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new gt(t[0],a,t[s+1])},ki=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!At(e)||!(t=Ny.exec(e))?"":t[1]},Xy=function(e,t,n){return ki(n,function(r){return eo(e,t,r)})},Nc=[].slice,ff=function(e,t){return e&&Yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==zn},qy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return At(r)&&!t||ff(r,1)?(s=n).push.apply(s,wn(r)):n.push(r)})||n},wn=function(e,t,n){return tt&&!t&&tt.selector?tt.selector(e):At(e)&&!n&&(Rc||!ss())?Nc.call((t||dl).querySelectorAll(e),0):Ut(e)?qy(e,n):ff(e)?Nc.call(e,0):e?[e]:[]},Ic=function(e){return e=wn(e)[0]||Gs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?Gs("Invalid scope")||dl.createElement("div"):e)}},pf=function(e){return e.sort(function(){return .5-Math.random()})},mf=function(e){if(lt(e))return e;var t=Yn(e)?e:{each:e},n=dr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,h=r;return At(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],h=r[1]),function(d,f,g){var m=(g||t).length,p=a[m],_,M,x,S,v,T,E,w,y;if(!p){if(y=t.grid==="auto"?0:(t.grid||[1,Tn])[1],!y){for(E=-Tn;E<(E=g[y++].getBoundingClientRect().left)&&y<m;);y<m&&y--}for(p=a[m]=[],_=c?Math.min(y,m)*u-.5:r%y,M=y===Tn?0:c?m*h/y-.5:r/y|0,E=0,w=Tn,T=0;T<m;T++)x=T%y-_,S=M-(T/y|0),p[T]=v=l?Math.abs(l==="y"?S:x):Zd(x*x+S*S),v>E&&(E=v),v<w&&(w=v);r==="random"&&pf(p),p.max=E-w,p.min=w,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:l?l==="y"?m/y:y:Math.max(y,m/y))||0)*(r==="edges"?-1:1),p.b=m<0?s-m:s,p.u=Ot(t.amount||t.each)||0,n=n&&m<0?sS(n):n}return m=(p[d]-p.min)/p.max||0,nt(p.b+(n?n(m):m)*p.v)+p.u}},Oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=nt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ui(n)?0:Ot(n))}},_f=function(e,t){var n=Ut(e),r,s;return!n&&Yn(e)&&(r=n=e.radius||Tn,e.values?(e=wn(e.values),(s=!ui(e[0]))&&(r*=r)):e=Oc(e.increment)),ki(t,n?lt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Tn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-o),d<l&&(l=d,u=h);return u=!r||l<=r?e[u]:a,s||u===a||ui(a)?u:u+Ot(a)}:Oc(e))},gf=function(e,t,n,r){return ki(Ut(e)?!t:n===!0?!!(n=0):!r,function(){return Ut(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Yy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},jy=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},$y=function(e,t,n){return xf(e,t,0,1,n)},vf=function(e,t,n){return ki(n,function(r){return e[~~t(r)]})},Zy=function i(e,t,n){var r=t-e;return Ut(e)?vf(e,i(0,e.length),t):ki(n,function(s){return(r+(s-e)%r)%r+e})},Ky=function i(e,t,n){var r=t-e,s=r*2;return Ut(e)?vf(e,i(0,e.length-1),t):ki(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ws=function(e){return e.replace(Py,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ly);return gf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},xf=function(e,t,n,r,s){var a=t-e,o=r-n;return ki(s,function(c){return n+((c-e)/a*o||0)})},Jy=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=At(e),o={},c,l,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Ut(e)&&!Ut(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(i(e[l-1],e[l]));h--,s=function(g){g*=h;var m=Math.min(d,~~g);return u[m](g-m)},n=t}else r||(e=ns(Ut(e)?[]:{},e));if(!u){for(c in t)vl.call(o,e,c,"get",t[c]);s=function(g){return Ml(g,o)||(a?e.p:e)}}}return ki(n,s)},Ah=function(e,t,n){var r=e.labels,s=Tn,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},dn=function(e,t,n){var r=e.vars,s=r[t],a=tt,o=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&Li.length&&ea(),o&&(tt=o),u=c?s.apply(l,c):s.call(l),tt=a,u},As=function(e){return Oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&dn(e,"onInterrupt"),e},Wr,yf=[],Sf=function(e){if(e)if(e=!e.name&&e.default||e,hl()||e.headless){var t=e.name,n=lt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Hs,render:Ml,add:vl,kill:mS,modifier:pS,rawVars:0},a={targetTest:0,get:0,getSetter:Sl,aliases:{},register:0};if(ss(),e!==r){if(ln[t])return;vn(r,vn(ta(e,s),a)),ns(r.prototype,ns(s,ta(e,a))),ln[r.prop=t]=r,e.targetTest&&(Ho.push(r),pl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}nf(t,r),e.register&&e.register(tn,r,Jt)}else yf.push(e)},je=255,Cs={aqua:[0,je,je],lime:[0,je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,je],navy:[0,0,128],white:[je,je,je],olive:[128,128,0],yellow:[je,je,0],orange:[je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[je,0,0],pink:[je,192,203],cyan:[0,je,je],transparent:[je,je,je,0]},uc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*je+.5|0},Mf=function(e,t,n){var r=e?ui(e)?[e>>16,e>>8&je,e&je]:0:Cs.black,s,a,o,c,l,u,h,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cs[e])r=Cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&je,r&je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&je,e&je]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Mh),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=uc(c+1/3,s,a),r[1]=uc(c,s,a),r[2]=uc(c-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Jd),n&&r.length<4&&(r[3]=1),r}else r=e.match(Mh)||Cs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/je,a=r[1]/je,o=r[2]/je,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Ef=function(e){var t=[],n=[],r=-1;return e.split(Di).forEach(function(s){var a=s.match(Hr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Ch=function(e,t,n){var r="",s=(e+r).match(Di),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Mf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Ef(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(Di,"1").split(Hr),h=l.length-1;o<h;o++)r+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(Di),h=l.length-1;o<h;o++)r+=l[o]+s[o];return r+l[h]},Di=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Qy=/hsl[a]?\(/,bf=function(e){var t=e.join(" "),n;if(Di.lastIndex=0,Di.test(t))return n=Qy.test(t),e[1]=Ch(e[1],n),e[0]=Ch(e[0],n,Ef(e[1])),!0},Xs,hn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],c,l,u,h,d,f,g=function m(p){var _=i()-r,M=p===!0,x,S,v,T;if((_>e||_<0)&&(n+=_-t),r+=_,v=r-n,x=v-a,(x>0||M)&&(T=++h.frame,d=v-h.time*1e3,h.time=v=v/1e3,a+=x+(x>=s?4:s-x),S=1),M||(c=l(m)),S)for(f=0;f<o.length;f++)o[f](v,d,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ef&&(!Rc&&hl()&&(zn=Rc=window,dl=zn.document||{},gn.gsap=tn,(zn.gsapVersions||(zn.gsapVersions=[])).push(tn.version),tf(Qo||zn.GreenSockGlobals||!zn.gsap&&zn||{}),yf.forEach(Sf)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Xs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Xs=0,l=Hs},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,_,M){var x=_?function(S,v,T,E){p(S,v,T,E),h.remove(x)}:p;return h.remove(p),o[M?"unshift":"push"](x),ss(),x},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},h}(),ss=function(){return!Xs&&hn.wake()},ke={},eS=/^[\d.\-M][\d.\-,\s]/,tS=/["']/g,nS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[r]=isNaN(l)?l.replace(tS,"").trim():+l,r=c.substr(o+1).trim();return t},iS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},rS=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nS(t[1])]:iS(e).split(",").map(af)):ke._CE&&eS.test(e)?ke._CE("",e):n},sS=function(e){return function(t){return 1-e(1-t)}},dr=function(e,t){return e&&(lt(e)?e:ke[e]||rS(e))||t},gr=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Kt(e,function(o){ke[o]=gn[o]=s,ke[a=o.toLowerCase()]=n;for(var c in s)ke[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ke[o+"."+c]=s[c]}),s},Tf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Cc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ry((u-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Tf(o);return s=Cc/s,c.config=function(l,u){return i(e,l,u)},c},dc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Tf(n);return r.config=function(s){return i(e,s)},r};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;gr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;gr("Elastic",hc("in"),hc("out"),hc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});gr("Circ",function(i){return-(Zd(1-i*i)-1)});gr("Sine",function(i){return i===1?1:-Cy(i*wy)+1});gr("Back",dc("in"),dc("out"),dc());ke.SteppedEase=ke.steps=gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-$e;return function(o){return((r*eo(0,a,o)|0)+s)*n}}};Vs.ease=ke["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ml+=i+","+i+"Params,"});var wf=function(e,t){this.id=Ay++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sf,this.set=t?t.getSetter:Sl},qs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rs(this,+t.duration,1,1),this.data=t.data,tt&&(this._ctx=tt,tt.data.push(this)),Xs||hn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ss(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sa(this,n),!s._dp||s.parent||uf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===$e||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),of(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?is(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ya(this),ky(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=nt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Hn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Zt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?na(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Oy);var r=Lt;return Lt=n,gl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Sn(this,n),Zt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Zt(r)),this._dur||(this._zTime=-$e),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-$e)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=lt(n)?n:cf,c=function(){var u=r.then;r.then=null,s&&s(),lt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){As(this)},i}();vn(qs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var jt=function(i){$d(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Zt(n.sortChildren),it&&Hn(n.parent||it,ri(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hf(ri(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Is(0,arguments,this),this},t.from=function(r,s,a){return Is(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Is(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ns(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(r,s,Sn(this,a),1),this},t.call=function(r,s,a){return Hn(this,gt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new gt(r,a,Sn(this,c)),this},t.staggerFrom=function(r,s,a,o,c,l,u){return a.runBackwards=1,Ns(a).immediateRender=Zt(a.immediateRender),this.staggerTo(r,s,a,o,c,l,u)},t.staggerFromTo=function(r,s,a,o,c,l,u,h){return o.startAt=a,Ns(o).immediateRender=Zt(o.immediateRender),this.staggerTo(r,s,o,c,l,u,h)},t.render=function(r,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:nt(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,f,g,m,p,_,M,x,S,v,T,E;if(this!==it&&u>c&&r>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,r+=this._time-o),d=u,S=this._start,x=this._ts,_=!x,h&&(l||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=nt(u%p),u===c?(m=this._repeat,d=l):(v=nt(u/p),m=~~v,m&&m===v&&(d=l,m--),d>l&&(d=l)),v=is(this._tTime,p),!o&&this._tTime&&v!==m&&this._tTime-v*p-this._dur<=0&&(v=m),T&&m&1&&(d=l-d,E=1),m!==v&&!this._lock){var w=T&&v&1,y=w===(T&&m&1);if(m<v&&(w=!w),o=w?0:u%l?l:u,this._lock=1,this.render(o||(E?0:nt(m*p)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,v=m),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,o=w?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Hy(this,nt(o),nt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&l&&!s&&!v&&(dn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-$e);break}}f=g}else{f=this._last;for(var b=r<0?r:d;f;){if(g=f._prev,(f._act||b<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,s,a||Lt&&gl(f)),d!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=b?-$e:$e);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-$e)._zTime=d>=o?1:-1,this._ts))return this._start=S,ya(this),this.render(r,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(r<0&&!o)&&(u||o||!c)&&(dn(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ui(s)||(s=Sn(this,s,r)),!(r instanceof qs)){if(Ut(r))return r.forEach(function(o){return a.add(o,s)}),this;if(At(r))return this.addLabel(r,s);if(lt(r))r=gt.delayedCall(0,r);else return this}return this!==r?Hn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Tn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof gt?s&&c.push(l):(a&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return At(r)?this.removeLabel(r):lt(r)?this.killTweensOf(r):(r.parent===this&&xa(this,r),r===this._recent&&(this._recent=this._last),hr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=nt(hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Sn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=gt.delayedCall(0,s||Hs,a);return o.data="isPause",this._hasPause=1,Hn(this,o,Sn(this,r))},t.removePause=function(r){var s=this._first;for(r=Sn(this,r);s;)s._start===r&&s.data==="isPause"&&Oi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),c=o.length;c--;)Ti!==o[c]&&o[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=wn(r),c=this._first,l=ui(s),u;c;)c instanceof gt?Uy(c._targets,o)&&(l?(!Ti||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Sn(a,r),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,g=gt.to(a,vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||$e,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&rs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,vn({startAt:{time:Sn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ah(this,Sn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ah(this,Sn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+$e)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(r=nt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=r);return hr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,c=Tn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=nt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;rs(a,a===it&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(it._ts&&(of(it,na(r,it)),rf=hn.frame),hn.frame>=Eh){Eh+=_n.autoSleep||120;var s=it._first;if((!s||!s._ts)&&_n.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(qs);vn(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var oS=function(e,t,n,r,s,a,o){var c=new Jt(this._pt,e,t,0,1,Df,null,s),l=0,u=0,h,d,f,g,m,p,_,M;for(c.b=n,c.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Ws(r)),a&&(M=[n,r],a(M,e,t),n=M[0],r=M[1]),d=n.match(cc)||[];h=cc.exec(r);)g=h[0],m=r.substring(l,h.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:m||u===1?m:",",s:p,c:g.charAt(1)==="="?$r(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=cc.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=o,(Qd.test(r)||_)&&(c.e=0),this._pt=c,c},vl=function(e,t,n,r,s,a,o,c,l,u){lt(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:lt(h)?l?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=lt(h)?l?hS:Pf:yl,g;if(At(r)&&(~r.indexOf("random(")&&(r=Ws(r)),r.charAt(1)==="="&&(g=$r(d,r)+(Ot(d)||0),(g||g===0)&&(r=g))),!u||d!==r||Uc)return!isNaN(d*r)&&r!==""?(g=new Jt(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?fS:Lf,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&fl(t,r),oS.call(this,e,t,d,r,f,c||_n.stringFilter,l))},aS=function(e,t,n,r,s){if(lt(e)&&(e=Os(e,s,t,n,r)),!Yn(e)||e.style&&e.nodeType||Ut(e)||Kd(e))return At(e)?Os(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Os(e[o],s,t,n,r);return a},Af=function(e,t,n,r,s,a){var o,c,l,u;if(ln[e]&&(o=new ln[e]).init(s,o.rawVars?t[e]:aS(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=c=new Jt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Wr))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Ti,Uc,xl=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,m=e._startAt,p=e._targets,_=e.parent,M=_&&_.data==="nested"?_.vars.targets:p,x=e._overwrite==="auto"&&!ll,S=e.timeline,v=r.easeReverse||h,T,E,w,y,b,D,L,B,R,O,F,U,Z;if(S&&(!d||!s)&&(s="none"),e._ease=dr(s,Vs.ease),e._rEase=v&&(dr(v)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(B=p[0]?ur(p[0]).harness:0,U=B&&r[B.prop],T=ta(r,pl),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!f?m.render(-1,!0):m.revert(u&&g?Go:Iy),m._lazy=0),a){if(Oi(e._startAt=gt.set(p,vn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!m&&Zt(c),startAt:null,delay:0,onUpdate:l&&function(){return dn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt||!o&&!f)&&e._startAt.revert(Go),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!m){if(t&&(o=!1),w=vn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Zt(c),immediateRender:o,stagger:0,parent:_},T),U&&(w[B.prop]=U),Oi(e._startAt=gt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Lt?e._startAt.revert(Go):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,$e,$e);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Zt(c)||c&&!g,E=0;E<p.length;E++){if(b=p[E],L=b._gsap||_l(p)[E]._gsap,e._ptLookup[E]=O={},Pc[L.id]&&Li.length&&ea(),F=M===p?E:M.indexOf(b),B&&(R=new B).init(b,U||T,e,F,M)!==!1&&(e._pt=y=new Jt(e._pt,b,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(W){O[W]=y}),R.priority&&(D=1)),!B||U)for(w in T)ln[w]&&(R=Af(w,T,e,F,b,M))?R.priority&&(D=1):O[w]=y=vl.call(e,b,w,"get",T[w],F,M,0,r.stringFilter);e._op&&e._op[E]&&e.kill(b,e._op[E]),x&&e._pt&&(Ti=e,it.killTweensOf(b,O,e.globalTime(t)),Z=!e.parent,Ti=0),e._pt&&c&&(Pc[L.id]=1)}D&&Nf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&S.render(Tn,!0,!0)},cS=function(e,t,n,r,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uc=1,e.vars[t]="+=0",xl(e,o),Uc=0,c?Gs(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=dt(n)+Ot(h.e)),h.b&&(h.b=u.s+Ot(h.b))},lS=function(e,t){var n=e[0]?ur(e[0]).harness:0,r=n&&n.aliases,s,a,o,c;if(!r)return t;s=ns({},t);for(a in r)if(a in s)for(c=r[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},uS=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Ut(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Os=function(e,t,n,r,s){return lt(e)?e.call(t,n,r,s):At(e)&&~e.indexOf("random(")?Ws(e):e},Cf=ml+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rf={};Kt(Cf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Rf[i]=1});var gt=function(i){$d(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ns(r))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,m=c.defaults,p=c.scrollTrigger,_=r.parent||it,M=(Ut(n)||Kd(n)?ui(n[0]):"length"in r)?[n]:wn(n),x,S,v,T,E,w,y,b;if(o._targets=M.length?_l(M):Gs("GSAP target "+n+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Fo(l)||Fo(u)){r=o.vars;var D=r.easeReverse||r.yoyoEase;if(x=o.timeline=new jt({data:"nested",defaults:m||{},targets:_&&_.data==="nested"?_.vars.targets:M}),x.kill(),x.parent=x._dp=ri(o),x._start=0,d||Fo(l)||Fo(u)){if(T=M.length,y=d&&mf(d),Yn(d))for(E in d)~Cf.indexOf(E)&&(b||(b={}),b[E]=d[E]);for(S=0;S<T;S++)v=ta(r,Rf),v.stagger=0,D&&(v.easeReverse=D),b&&ns(v,b),w=M[S],v.duration=+Os(l,ri(o),S,w,M),v.delay=(+Os(u,ri(o),S,w,M)||0)-o._delay,!d&&T===1&&v.delay&&(o._delay=u=v.delay,o._start+=u,v.delay=0),x.to(w,v,y?y(S,w,M):0),x._ease=ke.none;x.duration()?l=u=0:o.timeline=0}else if(g){Ns(vn(x.vars.defaults,{ease:"none"})),x._ease=dr(g.ease||r.ease||"none");var L=0,B,R,O;if(Ut(g))g.forEach(function(F){return x.to(M,F,">")}),x.duration();else{v={};for(E in g)E==="ease"||E==="easeEach"||uS(E,g[E],v,g.easeEach);for(E in v)for(B=v[E].sort(function(F,U){return F.t-U.t}),L=0,S=0;S<B.length;S++)R=B[S],O={ease:R.e,duration:(R.t-(S?B[S-1].t:0))/100*l},O[E]=R.v,x.to(M,O,L),L+=O.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||o.duration(l=x.duration())}else o.timeline=0;return f===!0&&!ll&&(Ti=ri(o),it.killTweensOf(M),Ti=0),Hn(_,ri(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!l&&!g&&o._start===nt(_._time)&&Zt(h)&&zy(ri(o))&&_.data!=="nested")&&(o._tTime=-$e,o.render(Math.max(0,-u)||0)),p&&hf(ri(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,c=this._tDur,l=this._dur,u=r<0,h=r>c-$e&&!u?c:r<$e?0:r,d,f,g,m,p,_,M,x;if(!l)Gy(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(d=nt(h%m),h===c?(g=this._repeat,d=l):(p=nt(h/m),g=~~p,g&&g===p?(d=l,g--):d>l&&(d=l)),_=this._yoyo&&g&1,_&&(d=l-d),p=is(this._tTime,m),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==m&&this._initted&&(this._lock=a=1,this.render(nt(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(df(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=d<o;if(S!==this._inv){var v=S?o:l-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=v?(S?-1:1)/v:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/l);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!p&&(dn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Lc(this,r,s,a),dn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Lc(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(u&&!o)&&(h||o||_)&&(dn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,c){Xs||hn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||xl(this,l),u=this._ease(l/this._dur),cS(this,r,s,a,o,u,l,c)?this.resetTo(r,s,a,o,1):(Sa(this,0),this.parent||lf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?As(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Lt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ti&&Ti.vars.overwrite!==!0)._first||As(this),this.parent&&a!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=r?wn(r):o,l=this._ptLookup,u=this._pt,h,d,f,g,m,p,_;if((!s||s==="all")&&By(o,c))return s==="all"&&(this._pt=0),As(this);for(h=this._op=this._op||[],s!=="all"&&(At(s)&&(m={},Kt(s,function(M){return m[M]=1}),s=m),s=lS(o,s)),_=o.length;_--;)if(~c.indexOf(o[_])){d=l[_],s==="all"?(h[_]=s,g=d,f={}):(f=h[_]=h[_]||{},g=s);for(m in g)p=d&&d[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&xa(this,p,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&u&&As(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Is(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Is(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return it.killTweensOf(r,s,a)},e}(qs);vn(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(i){gt[i]=function(){var e=new jt,t=Nc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var yl=function(e,t,n){return e[t]=n},Pf=function(e,t,n){return e[t](n)},hS=function(e,t,n,r){return e[t](r.fp,n)},dS=function(e,t,n){return e.setAttribute(t,n)},Sl=function(e,t){return lt(e[t])?Pf:ul(e[t])&&e.setAttribute?dS:yl},Lf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Df=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ml=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pS=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},mS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xa(this,t,"_pt"):t.dep||(n=1),t=r;return!n},_S=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Nf=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Jt=function(){function i(t,n,r,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Lf,this.d=c||this,this.set=l||yl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=_S,this.m=n,this.mt=s,this.tween=r},i}();Kt(ml+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return pl[i]=1});gn.TweenMax=gn.TweenLite=gt;gn.TimelineLite=gn.TimelineMax=jt;it=new jt({sortChildren:!1,defaults:Vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=bf;var fr=[],Wo={},gS=[],Rh=0,vS=0,fc=function(e){return(Wo[e]||gS).map(function(t){return t()})},Fc=function(){var e=Date.now(),t=[];e-Rh>2&&(fc("matchMediaInit"),fr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,c,l;for(o in r)a=zn.matchMedia(r[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),fc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Rh=e,fc("matchMedia"))},If=function(){function i(t,n){this.selector=n&&Ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){lt(n)&&(s=r,r=n,n=lt);var a=this,o=function(){var l=tt,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=Ic(s)),tt=a,h=r.apply(a,arguments),lt(h)&&a._r.push(h),tt=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===lt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var r=tt;tt=null,n(this),tt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof gt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof jt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof gt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=fr.length;a--;)fr[a].id===this.id&&fr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),xS=function(){function i(t){this.contexts=[],this.scope=t,tt&&tt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Yn(n)||(n={matches:n});var a=new If(0,s||this.scope),o=a.conditions={},c,l,u;tt&&!a.selector&&(a.selector=tt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(l in n)l==="all"?u=1:(c=zn.matchMedia(n[l]),c&&(fr.indexOf(a)<0&&fr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(Fc):c.addEventListener("change",Fc)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ia={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Sf(r)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return it.getTweensOf(e,t)},getProperty:function(e,t,n,r){At(e)&&(e=wn(e)[0]);var s=ur(e||{}).get,a=n?cf:af;return n==="native"&&(n=""),e&&(t?a((ln[t]&&ln[t].get||s)(e,t,n,r)):function(o,c,l){return a((ln[o]&&ln[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var r=e.map(function(u){return tn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=ln[t],o=ur(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;Wr._pt=0,h.init(e,n?u+n:u,Wr,0,[e]),h.render(1,h),Wr._pt&&Ml(1,Wr)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=tn.to(e,vn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(c,l,u){return s.resetTo(t,c,l,u)};return a.tween=s,a},isTweening:function(e){return it.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=dr(e.ease,Vs.ease)),bh(Vs,e||{})},config:function(e){return bh(_n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ln[o]&&!gn[o]&&Gs(t+" effect requires "+o+" plugin.")}),lc[t]=function(o,c,l){return n(wn(o),vn(c||{},s),l)},a&&(jt.prototype[t]=function(o,c,l){return this.add(lc[t](o,Yn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ke[e]=dr(t)},parseEase:function(e,t){return arguments.length?dr(e,t):ke},getById:function(e){return it.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jt(e),r,s;for(n.smoothChildTiming=Zt(e.smoothChildTiming),it.remove(n),n._dp=0,n._time=n._tTime=it._time,r=it._first;r;)s=r._next,(t||!(!r._dur&&r instanceof gt&&r.vars.onComplete===r._targets[0]))&&Hn(n,r,r._start-r._delay),r=s;return Hn(it,n,0),n},context:function(e,t){return e?new If(e,t):tt},matchMedia:function(e){return new xS(e)},matchMediaRefresh:function(){return fr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Fc()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Zy,wrapYoyo:Ky,distribute:mf,random:gf,snap:_f,normalize:$y,getUnit:Ot,clamp:Xy,splitColor:Mf,toArray:wn,selector:Ic,mapRange:xf,pipe:Yy,unitize:jy,interpolate:Jy,shuffle:pf},install:tf,effects:lc,ticker:hn,updateRoot:jt.updateRoot,plugins:ln,globalTimeline:it,core:{PropTween:Jt,globals:nf,Tween:gt,Timeline:jt,Animation:qs,getCache:ur,_removeLinkedListItem:xa,reverting:function(){return Lt},context:function(e){return e&&tt&&(tt.data.push(e),e._ctx=tt),tt},suppressOverwrites:function(e){return ll=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ia[i]=gt[i]});hn.add(jt.updateRoot);Wr=ia.to({},{duration:0});var yS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},SS=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=yS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},pc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var c,l;if(At(s)&&(c={},Kt(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}SS(o,s)}}}},tn=ia.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Lt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pc("roundProps",Oc),pc("modifiers"),pc("snap",_f))||ia;gt.version=jt.version=tn.version="3.15.0";ef=1;hl()&&ss();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ph,wi,Zr,El,or,Lh,bl,MS=function(){return typeof window<"u"},hi={},nr=180/Math.PI,Kr=Math.PI/180,Br=Math.atan2,Dh=1e8,Tl=/([A-Z])/g,ES=/(left|right|width|margin|padding|x)/i,bS=/[\s,\(]\S/,Wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},CS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Of=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},RS=function(e,t,n){return e.style[t]=n},PS=function(e,t,n){return e.style.setProperty(t,n)},LS=function(e,t,n){return e._gsap[t]=n},DS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},NS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},IS=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},rt="transform",Qt=rt+"Origin",OS=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in hi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=oi(r,o)}):this.tfm[e]=a.x?a[e]:oi(r,e),e===Qt&&(this.tfm.zOrigin=a.zOrigin);else return Wn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(rt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Qt,t,"")),e=rt}(s||t)&&this.props.push(e,t,s[e])},Ff=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},US=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bl(),(!s||!s.isStart)&&!n[rt]&&(Ff(n),r.zOrigin&&n[Qt]&&(n[Qt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Bf=function(e,t){var n={target:e,props:[],revert:US,save:OS};return e._gsap||tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},kf,kc=function(e,t){var n=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return n&&n.style?n:wi.createElement(e)},fn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Tl,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,os(t)||t,1)||""},Nh="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,n){var r=t||or,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Nh[a]:"")+e},zc=function(){MS()&&window.document&&(Ph=window,wi=Ph.document,Zr=wi.documentElement,or=kc("div")||{style:{}},kc("div"),rt=os(rt),Qt=rt+"Origin",or.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kf=!!os("perspective"),bl=tn.core.reverting,El=1)},Ih=function(e){var t=e.ownerSVGElement,n=kc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Zr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Zr.removeChild(n),s},Oh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zf=function(e){var t,n;try{t=e.getBBox()}catch{t=Ih(e),n=1}return t&&(t.width||t.height)||n||(t=Ih(e)),t&&!t.width&&!t.x&&!t.y?{x:+Oh(e,["x","cx","x1"])||0,y:+Oh(e,["y","cy","y1"])||0,width:0,height:0}:t},Vf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zf(e))},Ui=function(e,t){if(t){var n=e.style,r;t in hi&&t!==Qt&&(t=rt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Tl,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,r,s,a){var o=new Jt(e._pt,t,n,0,1,a?Uf:Of);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Uh={deg:1,rad:1,turn:1},FS={grid:1,flex:1},Fi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=or.style,c=ES.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=r==="px",f=r==="%",g,m,p,_;if(r===a||!s||Uh[r]||Uh[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),_=e.getCTM&&Vf(e),(f||a==="%")&&(hi[t]||~t.indexOf("adius")))return g=_?e.getBBox()[c?"width":"height"]:e[u],dt(f?s/g*h:s/100*g);if(o[c?"width":"height"]=h+(d?a:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===wi||!m.appendChild)&&(m=wi.body),p=m._gsap,p&&f&&p.width&&c&&p.time===hn.time&&!p.uncache)return dt(s/p.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,g=e[u],M?e.style[t]=M:Ui(e,t)}else(f||a==="%")&&!FS[fn(m,"display")]&&(o.position=fn(e,"position")),m===e&&(o.position="static"),m.appendChild(or),g=or[u],m.removeChild(or),o.position="absolute";return c&&f&&(p=ur(m),p.time=hn.time,p.width=m[u]),dt(d?g*s/h:g&&s?h/g*s:0)},oi=function(e,t,n,r){var s;return El||zc(),t in Wn&&t!=="transform"&&(t=Wn[t],~t.indexOf(",")&&(t=t.split(",")[0])),hi[t]&&t!=="transform"?(s=js(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:sa(fn(e,Qt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ra[t]&&ra[t](e,t,n)||fn(e,t)||sf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fi(e,t,s,n)+n:s},BS=function(e,t,n,r){if(!n||n==="none"){var s=os(t,e,1),a=s&&fn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=fn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,Df),c=0,l=0,u,h,d,f,g,m,p,_,M,x,S,v;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=fn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=fn(e,t)||r,m?e.style[t]=m:Ui(e,t)),u=[n,r],bf(u),n=u[0],r=u[1],d=n.match(Hr)||[],v=r.match(Hr)||[],v.length){for(;h=Hr.exec(r);)p=h[0],M=r.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(m=d[l++]||"")&&(f=parseFloat(m)||0,S=m.substr((f+"").length),p.charAt(1)==="="&&(p=$r(f,p)+S),_=parseFloat(p),x=p.substr((_+"").length),c=Hr.lastIndex-x.length,x||(x=x||_n.units[t]||S,c===r.length&&(r+=x,o.e+=x)),S!==x&&(f=Fi(e,t,m,x)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<r.length?r.substring(c,r.length):""}else o.r=t==="display"&&r==="none"?Uf:Of;return Qd.test(r)&&(o.e=0),this._pt=o,o},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Fh[n]||n,t[1]=Fh[r]||r,t.join(" ")},zS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],hi[o]&&(c=1,o=o==="transformOrigin"?Qt:rt),Ui(n,o);c&&(Ui(n,rt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",js(n,1),a.uncache=1,Ff(r)))}},ra={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,zS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ys=[1,0,0,1,0,0],Gf={},Hf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=fn(e,rt);return Hf(t)?Ys:t.substr(7).match(Jd).map(dt)},wl=function(e,t){var n=e._gsap||ur(e),r=e.style,s=Bh(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ys:s):(s===Ys&&!e.offsetParent&&e!==Zr&&!n.svg&&(c=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Zr.appendChild(e)),s=Bh(e),c?r.display=c:Ui(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Zr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vc=function(e,t,n,r,s,a){var o=e._gsap,c=s||wl(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=c[0],g=c[1],m=c[2],p=c[3],_=c[4],M=c[5],x=t.split(" "),S=parseFloat(x[0])||0,v=parseFloat(x[1])||0,T,E,w,y;n?c!==Ys&&(E=f*p-g*m)&&(w=S*(p/E)+v*(-m/E)+(m*M-p*_)/E,y=S*(-g/E)+v*(f/E)-(f*M-g*_)/E,S=w,v=y):(T=zf(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),v=T.y+(~(x[1]||x[0]).indexOf("%")?v/100*T.height:v)),r||r!==!1&&o.smooth?(_=S-l,M=v-u,o.xOffset=h+(_*f+M*m)-_,o.yOffset=d+(_*g+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=v,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Qt]="0px 0px",a&&(Ai(a,o,"xOrigin",l,S),Ai(a,o,"yOrigin",u,v),Ai(a,o,"xOffset",h,o.xOffset),Ai(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+v)},js=function(e,t){var n=e._gsap||new wf(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=fn(e,Qt)||"0",u,h,d,f,g,m,p,_,M,x,S,v,T,E,w,y,b,D,L,B,R,O,F,U,Z,W,Y,N,z,le,oe,Q;return u=h=d=m=p=_=M=x=S=0,f=g=1,n.svg=!!(e.getCTM&&Vf(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[rt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[rt]!=="none"?c[rt]:"")),r.scale=r.rotate=r.translate="none"),E=wl(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),l=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),Vc(e,U||l,!!U||n.originIsAbsolute,n.smooth!==!1,E)),v=n.xOrigin||0,T=n.yOrigin||0,E!==Ys&&(D=E[0],L=E[1],B=E[2],R=E[3],u=O=E[4],h=F=E[5],E.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(R*R+B*B),m=D||L?Br(L,D)*nr:0,M=B||R?Br(B,R)*nr+m:0,M&&(g*=Math.abs(Math.cos(M*Kr))),n.svg&&(u-=v-(v*D+T*B),h-=T-(v*L+T*R))):(Q=E[6],le=E[7],Y=E[8],N=E[9],z=E[10],oe=E[11],u=E[12],h=E[13],d=E[14],w=Br(Q,z),p=w*nr,w&&(y=Math.cos(-w),b=Math.sin(-w),U=O*y+Y*b,Z=F*y+N*b,W=Q*y+z*b,Y=O*-b+Y*y,N=F*-b+N*y,z=Q*-b+z*y,oe=le*-b+oe*y,O=U,F=Z,Q=W),w=Br(-B,z),_=w*nr,w&&(y=Math.cos(-w),b=Math.sin(-w),U=D*y-Y*b,Z=L*y-N*b,W=B*y-z*b,oe=R*b+oe*y,D=U,L=Z,B=W),w=Br(L,D),m=w*nr,w&&(y=Math.cos(w),b=Math.sin(w),U=D*y+L*b,Z=O*y+F*b,L=L*y-D*b,F=F*y-O*b,D=U,O=Z),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,_=180-_),f=dt(Math.sqrt(D*D+L*L+B*B)),g=dt(Math.sqrt(F*F+Q*Q)),w=Br(O,F),M=Math.abs(w)>2e-4?w*nr:0,S=oe?1/(oe<0?-oe:oe):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Hf(fn(e,rt)),U&&e.setAttribute("transform",U))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=dt(f),n.scaleY=dt(g),n.rotation=dt(m)+o,n.rotationX=dt(p)+o,n.rotationY=dt(_)+o,n.skewX=M+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Qt]=sa(l)),n.xOffset=n.yOffset=0,n.force3D=_n.force3D,n.renderTransform=n.svg?GS:kf?Wf:VS,n.uncache=0,n},sa=function(e){return(e=e.split(" "))[0]+" "+e[1]},mc=function(e,t,n){var r=Ot(t);return dt(parseFloat(t)+parseFloat(Fi(e,"x",n+"px",r)))+r},VS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wf(e,t)},Ji="0deg",Es="0px",Qi=") ",Wf=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,m=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,S="",v=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Ji||u!==Ji)){var T=parseFloat(u)*Kr,E=Math.sin(T),w=Math.cos(T),y;T=parseFloat(h)*Kr,y=Math.cos(T),a=mc(M,a,E*y*-x),o=mc(M,o,-Math.sin(T)*-x),c=mc(M,c,w*y*-x+x)}p!==Es&&(S+="perspective("+p+Qi),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(v||a!==Es||o!==Es||c!==Es)&&(S+=c!==Es||v?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Qi),l!==Ji&&(S+="rotate("+l+Qi),u!==Ji&&(S+="rotateY("+u+Qi),h!==Ji&&(S+="rotateX("+h+Qi),(d!==Ji||f!==Ji)&&(S+="skew("+d+", "+f+Qi),(g!==1||m!==1)&&(S+="scale("+g+", "+m+Qi),M.style[rt]=S||"translate(0, 0)"},GS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,m=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(a),S=parseFloat(o),v,T,E,w,y;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Kr,l*=Kr,v=Math.cos(c)*h,T=Math.sin(c)*h,E=Math.sin(c-l)*-d,w=Math.cos(c-l)*d,l&&(u*=Kr,y=Math.tan(l-u),y=Math.sqrt(1+y*y),E*=y,w*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),v*=y,T*=y)),v=dt(v),T=dt(T),E=dt(E),w=dt(w)):(v=h,w=d,T=E=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=Fi(f,"x",a,"px"),S=Fi(f,"y",o,"px")),(g||m||p||_)&&(x=dt(x+g-(g*v+m*E)+p),S=dt(S+m-(g*T+m*w)+_)),(r||s)&&(y=f.getBBox(),x=dt(x+r/100*y.width),S=dt(S+s/100*y.height)),y="matrix("+v+","+T+","+E+","+w+","+x+","+S+")",f.setAttribute("transform",y),M&&(f.style[rt]=y)},HS=function(e,t,n,r,s){var a=360,o=At(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?nr:1),l=c-r,u=r+l+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Dh)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Dh)%a-~~(l/a)*a)),e._pt=d=new Jt(e._pt,t,n,r,l,TS),d.e=u,d.u="deg",e._props.push(n),d},kh=function(e,t){for(var n in t)e[n]=t[n];return e},WS=function(e,t,n){var r=kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,d,f,g;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[rt]=t,o=js(n,1),Ui(n,rt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[rt],a[rt]=t,o=js(n,1),a[rt]=l);for(c in hi)l=r[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=Ot(l),g=Ot(u),h=f!==g?Fi(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new Jt(e._pt,o,c,h,d-h,Bc),e._pt.u=g||0,e._props.push(c));kh(o,r)};Kt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ra[e>1?"border"+i:i]=function(o,c,l,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return oi(o,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,m){return f[g]=d[m]=d[m]||d[(m-1)/2|0]}),o.init(c,f,h)}});var Xf={name:"css",register:zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,d,f,g,m,p,_,M,x,S,v,T,E,w,y;El||zc(),this.styles=this.styles||Bf(e),w=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(ln[m]&&Af(m,t,n,r,e,s)))){if(f=typeof u,g=ra[m],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ws(u)),g)g(this,e,m,u,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Di.lastIndex=0,Di.test(l)||(p=Ot(l),_=Ot(u),_?p!==_&&(l=Fi(e,m,l,_)+_):p&&(u+=p)),this.add(o,"setProperty",l,u,r,s,0,0,m),a.push(m),w.push(m,0,o[m]);else if(f!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,r,e,s):c[m],At(l)&&~l.indexOf("random(")&&(l=Ws(l)),Ot(l+"")||l==="auto"||(l+=_n.units[m]||Ot(oi(e,m))||""),(l+"").charAt(1)==="="&&(l=oi(e,m))):l=oi(e,m),d=parseFloat(l),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),m in Wn&&(m==="autoAlpha"&&(d===1&&oi(e,"visibility")==="hidden"&&h&&(d=0),w.push("visibility",0,o.visibility),Ai(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Wn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in hi,x){if(this.styles.save(m),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=fn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=u,u=fn(e,"perspective"),b?e.style.perspective=b:Ui(e,"perspective")}h=parseFloat(u)}if(S||(v=e._gsap,v.renderTransform&&!t.parseTransform||js(e,t.parseTransform),T=t.smoothOrigin!==!1&&v.smooth,S=this._pt=new Jt(this._pt,o,rt,0,1,v.renderTransform,v,0,-1),S.dep=1),m==="scale")this._pt=new Jt(this._pt,v,"scaleY",v.scaleY,(M?$r(v.scaleY,M+h):h)-v.scaleY||0,Bc),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){w.push(Qt,0,o[Qt]),u=kS(u),v.svg?Vc(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Ai(this,v,"zOrigin",v.zOrigin,_),Ai(this,o,m,sa(l),sa(u)));continue}else if(m==="svgOrigin"){Vc(e,u,1,T,0,this);continue}else if(m in Gf){HS(this,v,m,d,M?$r(d,M+u):u);continue}else if(m==="smoothOrigin"){Ai(this,v,"smooth",v.smooth,u);continue}else if(m==="force3D"){v[m]=u;continue}else if(m==="transform"){WS(this,u,e);continue}}else m in o||(m=os(m)||m);if(x||(h||h===0)&&(d||d===0)&&!bS.test(u)&&m in o)p=(l+"").substr((d+"").length),h||(h=0),_=Ot(u)||(m in _n.units?_n.units[m]:p),p!==_&&(d=Fi(e,m,l,_)),this._pt=new Jt(this._pt,x?v:o,m,d,(M?$r(d,M+h):h)-d,!x&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?CS:Bc),this._pt.u=_||0,x&&y!==u?(this._pt.b=l,this._pt.e=y,this._pt.r=AS):p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=wS);else if(m in o)BS.call(this,e,m,l,M?M+u:u);else if(m in e)this.add(e,m,l||e[m],M?M+u:u,r,s);else if(m!=="parseTransform"){fl(m,u);continue}x||(m in o?w.push(m,0,o[m]):typeof e[m]=="function"?w.push(m,2,e[m]()):w.push(m,1,l||e[m])),a.push(m)}}E&&Nf(this)},render:function(e,t){if(t.tween._time||!bl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:oi,aliases:Wn,getSetter:function(e,t,n){var r=Wn[t];return r&&r.indexOf(",")<0&&(t=r),t in hi&&t!==Qt&&(e._gsap.x||oi(e,"x"))?n&&Lh===n?t==="scale"?DS:LS:(Lh=n||{})&&(t==="scale"?NS:IS):e.style&&!ul(e.style[t])?RS:~t.indexOf("-")?PS:Sl(e,t)},core:{_removeProperty:Ui,_getMatrix:wl}};tn.utils.checkPrefix=os;tn.core.getStyleSaver=Bf;(function(i,e,t,n){var r=Kt(i+","+e+","+t,function(s){hi[s]=1});Kt(e,function(s){_n.units[s]="deg",Gf[s]=1}),Wn[r[13]]=i+","+e,Kt(n,function(s){var a=s.split(":");Wn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){_n.units[i]="px"});tn.registerPlugin(Xf);var ir=tn.registerPlugin(Xf)||tn;ir.core.Tween;const XS=`#define GLSLIFY 1
varying float vDistance;uniform float time;uniform float offsetSize;uniform float size;uniform float offsetGain;uniform float amplitude;uniform float frequency;uniform float maxDistance;vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}vec2 mod289(vec2 x){return x-floor(x*(1./289.))*289.;}vec3 permute(vec3 x){return mod289(((x*34.)+1.)*x);}float noise(vec2 v){const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);m=m*m;m=m*m;vec3 x=2.*fract(p*C.www)-1.;vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;m*=1.79284291400159-.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.*dot(m,g);}vec3 curl(float x,float y,float z){float eps=1.,eps2=2.*eps;float n1,n2,a,b;x+=time*.05;y+=time*.05;z+=time*.05;vec3 curl=vec3(0.);n1=noise(vec2(x,y+eps));n2=noise(vec2(x,y-eps));a=(n1-n2)/eps2;n1=noise(vec2(x,z+eps));n2=noise(vec2(x,z-eps));b=(n1-n2)/eps2;curl.x=a-b;n1=noise(vec2(y,z+eps));n2=noise(vec2(y,z-eps));a=(n1-n2)/eps2;n1=noise(vec2(x+eps,z));n2=noise(vec2(x+eps,z));b=(n1-n2)/eps2;curl.y=a-b;n1=noise(vec2(x+eps,y));n2=noise(vec2(x-eps,y));a=(n1-n2)/eps2;n1=noise(vec2(y+eps,z));n2=noise(vec2(y-eps,z));b=(n1-n2)/eps2;curl.z=a-b;return curl;}void main(){vec3 newpos=position;vec3 target=position+(normal*.1)+curl(newpos.x*frequency,newpos.y*frequency,newpos.z*frequency)*amplitude;float d=length(newpos-target)/maxDistance;newpos=mix(position,target,pow(d,4.));newpos.z+=sin(time)*(.1*offsetGain);vec4 mvPosition=modelViewMatrix*vec4(newpos,1.);gl_PointSize=size+(pow(d,3.)*offsetSize)*(1./-mvPosition.z);gl_Position=projectionMatrix*mvPosition;vDistance=d;}`,qS=`#define GLSLIFY 1
varying float vDistance;uniform vec3 startColor;uniform vec3 endColor;float circle(in vec2 _st,in float _radius){vec2 dist=_st-vec2(.5);return 1.-smoothstep(_radius-(_radius*.01),_radius+(_radius*.01),dot(dist,dist)*4.);}void main(){float alpha=1.;vec2 uv=vec2(gl_PointCoord.x,1.-gl_PointCoord.y);vec3 circ=vec3(circle(uv,1.));vec3 color=vec3(1.);color=mix(startColor,endColor,vDistance);gl_FragColor=vec4(color,circ.r*vDistance);}`;class YS extends vt{constructor(){super(),this.name="ReactiveParticles",this.time=0,this.properties={startColor:16777215,endColor:3355443,autoMix:!0,autoRotate:!0}}init(){cn.holder.add(this),this.holderObjects=new vt,this.add(this.holderObjects),this.material=new Ii({side:Gn,vertexShader:XS,fragmentShader:qS,transparent:!0,uniforms:{time:{value:0},offsetSize:{value:2},size:{value:1.1},frequency:{value:2},amplitude:{value:1},offsetGain:{value:0},maxDistance:{value:1.8},startColor:{value:new Ve(this.properties.startColor)},endColor:{value:new Ve(this.properties.endColor)}}}),this.addGUI(),this.resetMesh()}createBoxMesh(){let e=Math.floor(qt.randInt(5,20)),t=Math.floor(qt.randInt(1,40)),n=Math.floor(qt.randInt(5,80));this.geometry=new hs(1,1,1,e,t,n),this.material.uniforms.offsetSize.value=Math.floor(qt.randInt(30,60)),this.material.needsUpdate=!0,this.pointsMesh=new vt,this.pointsMesh.rotateX(Math.PI/2),this.holderObjects.add(this.pointsMesh);const r=new gh(this.geometry,this.material);this.pointsMesh.add(r),ir.to(this.pointsMesh.rotation,{duration:3,x:Math.random()*Math.PI,z:Math.random()*Math.PI*2,ease:"none"}),ir.to(this.position,{duration:.6,z:qt.randInt(9,11),ease:"elastic.out(0.8)"})}createCylinderMesh(){let e=Math.floor(qt.randInt(1,3)),t=Math.floor(qt.randInt(1,5));this.geometry=new al(1,1,4,64*e,64*t,!0),this.material.uniforms.offsetSize.value=Math.floor(qt.randInt(30,60)),this.material.uniforms.size.value=2,this.material.needsUpdate=!0,this.material.uniforms.needsUpdate=!0,this.pointsMesh=new gh(this.geometry,this.material),this.pointsMesh.rotation.set(Math.PI/2,0,0),this.holderObjects.add(this.pointsMesh);let n=0,r=qt.randInt(9,11);Math.random()<.2&&(n=Math.PI/2,r=qt.randInt(10,11.5)),ir.to(this.holderObjects.rotation,{duration:.2,y:n,ease:"elastic.out(0.2)"}),ir.to(this.position,{duration:.6,z:r,ease:"elastic.out(0.8)"})}onBPMBeat(){const e=cn.bpmManager.getBPMDuration()/1e3;cn.audioManager.isPlaying&&(Math.random()<.3&&this.properties.autoRotate&&ir.to(this.holderObjects.rotation,{duration:Math.random()<.8?15:e,z:Math.random()*Math.PI,ease:"elastic.out(0.2)"}),Math.random()<.3&&this.resetMesh())}resetMesh(){this.properties.autoMix&&(this.destroyMesh(),Math.random()<.5?this.createCylinderMesh():this.createBoxMesh(),ir.to(this.material.uniforms.frequency,{duration:cn.bpmManager?cn.bpmManager.getBPMDuration()/1e3*2:2,value:qt.randFloat(.5,3),ease:"expo.easeInOut"}))}destroyMesh(){var e,t;this.pointsMesh&&(this.holderObjects.remove(this.pointsMesh),(e=this.pointsMesh.geometry)==null||e.dispose(),(t=this.pointsMesh.material)==null||t.dispose(),this.pointsMesh=null)}update(){var e;if((e=cn.audioManager)!=null&&e.isPlaying){this.material.uniforms.amplitude.value=.8+qt.mapLinear(cn.audioManager.frequencyData.high,0,.6,-.1,.2),this.material.uniforms.offsetGain.value=cn.audioManager.frequencyData.mid*.6;const t=qt.mapLinear(cn.audioManager.frequencyData.low,.6,1,.2,.5);this.time+=qt.clamp(t,.2,.5)}else this.material.uniforms.frequency.value=.8,this.material.uniforms.amplitude.value=(window.isSoundCloudPlaying?1.1+Math.sin(this.time*0.8)*0.3:1),this.time+=(window.isSoundCloudPlaying?0.15:0.005),this.material.uniforms.frequency.value=(window.isSoundCloudPlaying?1.2+Math.sin(this.time*0.5)*0.4:0.8);this.material.uniforms.time.value=this.time}addGUI(){const e=cn.gui,t=e.addFolder("PARTICLES");t.addColor(this.properties,"startColor").listen().name("Start Color").onChange(a=>{this.material.uniforms.startColor.value=new Ve(a)}),t.addColor(this.properties,"endColor").listen().name("End Color").onChange(a=>{this.material.uniforms.endColor.value=new Ve(a)});const n=e.addFolder("VISUALIZER");n.add(this.properties,"autoMix").listen().name("Auto Mix"),n.add(this.properties,"autoRotate").listen().name("Auto Rotate");const r={showBox:()=>{this.destroyMesh(),this.createBoxMesh(),this.properties.autoMix=!1}};n.add(r,"showBox").name("Show Box");const s={showCylinder:()=>{this.destroyMesh(),this.createCylinderMesh(),this.properties.autoMix=!1}};n.add(s,"showCylinder").name("Show Cylinder")}}function jS(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function Xr(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),c=i.s.toFixed(1),l=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+a+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+c+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+c+",v:"+l+",a:"+a+"}"}return"unknown format"}var zh=Array.prototype.forEach,bs=Array.prototype.slice,J={BREAK:{},extend:function(e){return this.each(bs.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(bs.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=bs.call(arguments);return function(){for(var t=bs.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(zh&&e.forEach&&e.forEach===zh)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,n||e.apply(s,a)}var c=n||!r;clearTimeout(r),r=setTimeout(o,t),c&&e.apply(s,a)}},toArray:function(e){return e.toArray?e.toArray():bs.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},$S=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Xr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Xr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Xr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Xr}}},{litmus:J.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)&&J.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return J.isNumber(e.r)&&J.isNumber(e.g)&&J.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)&&J.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return J.isNumber(e.h)&&J.isNumber(e.s)&&J.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ts=void 0,Bo=void 0,Gc=function(){Bo=!1;var e=arguments.length>1?J.toArray(arguments):arguments[0];return J.each($S,function(t){if(t.litmus(e))return J.each(t.conversions,function(n,r){if(Ts=n.read(e),Bo===!1&&Ts!==!1)return Bo=Ts,Ts.conversionName=r,Ts.conversion=n,J.BREAK}),J.BREAK}),Bo},Vh=void 0,oa={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-s*t),c=n*(1-(1-s)*t),l=[[n,c,a],[o,n,a],[a,n,c],[a,o,n],[c,a,n],[n,a,o]][r];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),a=s-r,o=void 0,c=void 0;if(s!==0)c=a/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/a:t===s?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:c,v:s/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Vh=t*8)|e&~(255<<Vh)}},ZS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},On=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Un=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Bi=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(n)}},zi=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Vi=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},wt=function(){function i(){if(On(this,i),this.__state=Gc.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Un(i,[{key:"toString",value:function(){return Xr(this)}},{key:"toHexString",value:function(){return Xr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Al(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(wt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(wt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Cl(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(wt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(wt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}wt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=oa.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")J.extend(i.__state,oa.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};wt.recalculateHSV=function(i){var e=oa.rgb_to_hsv(i.r,i.g,i.b);J.extend(i.__state,{s:e.s,v:e.v}),J.isNaN(e.h)?J.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};wt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Al(wt.prototype,"r",2);Al(wt.prototype,"g",1);Al(wt.prototype,"b",0);Cl(wt.prototype,"h");Cl(wt.prototype,"s");Cl(wt.prototype,"v");Object.defineProperty(wt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(wt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=oa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var vr=function(){function i(e,t){On(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Un(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),KS={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},qf={};J.each(KS,function(i,e){J.each(i,function(t){qf[t]=e})});var JS=/(\d+(\.\d+)?)px/;function kn(i){if(i==="0"||J.isUndefined(i))return 0;var e=i.match(JS);return J.isNull(e)?0:parseFloat(e[1])}var G={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,s=t;J.isUndefined(s)&&(s=!0),J.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var s=n||{},a=qf[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var c=s.x||s.clientX||0,l=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,c,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(o,r),e.dispatchEvent(o)},bind:function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),G},unbind:function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),G},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return G},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return G},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return kn(t["border-left-width"])+kn(t["border-right-width"])+kn(t["padding-left"])+kn(t["padding-right"])+kn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return kn(t["border-top-width"])+kn(t["border-bottom-width"])+kn(t["padding-top"])+kn(t["padding-bottom"])+kn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Yf=function(i){zi(e,i);function e(t,n){On(this,e);var r=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return G.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Un(e,[{key:"setValue",value:function(n){var r=Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(vr),QS=function(i){zi(e,i);function e(t,n,r){On(this,e);var s=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r,o=s;if(s.__select=document.createElement("select"),J.isArray(a)){var c={};J.each(a,function(l){c[l]=l}),a=c}return J.each(a,function(l,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",l),o.__select.appendChild(h)}),s.updateDisplay(),G.bind(s.__select,"change",function(){var l=this.options[this.selectedIndex].value;o.setValue(l)}),s.domElement.appendChild(s.__select),s}return Un(e,[{key:"setValue",value:function(n){var r=Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return G.isActive(this.__select)?this:(this.__select.value=this.getValue(),Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(vr),eM=function(i){zi(e,i);function e(t,n){On(this,e);var r=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),G.bind(r.__input,"keyup",a),G.bind(r.__input,"change",a),G.bind(r.__input,"blur",o),G.bind(r.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Un(e,[{key:"updateDisplay",value:function(){return G.isActive(this.__input)||(this.__input.value=this.getValue()),Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(vr);function Gh(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var jf=function(i){zi(e,i);function e(t,n,r){On(this,e);var s=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Gh(s.__impliedStep),s}return Un(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Gh(n),this}}]),e}(vr);function tM(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var aa=function(i){zi(e,i);function e(t,n,r){On(this,e);var s=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var a=s,o=void 0;function c(){var g=parseFloat(a.__input.value);J.isNaN(g)||a.setValue(g)}function l(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){l()}function h(g){var m=o-g.clientY;a.setValue(a.getValue()+m*a.__impliedStep),o=g.clientY}function d(){G.unbind(window,"mousemove",h),G.unbind(window,"mouseup",d),l()}function f(g){G.bind(window,"mousemove",h),G.bind(window,"mouseup",d),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),G.bind(s.__input,"change",c),G.bind(s.__input,"blur",u),G.bind(s.__input,"mousedown",f),G.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,l())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Un(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():tM(this.getValue(),this.__precision),Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(jf);function Hh(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var Hc=function(i){zi(e,i);function e(t,n,r,s,a){On(this,e);var o=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:a})),c=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),G.bind(o.__background,"mousedown",l),G.bind(o.__background,"touchstart",d),G.addClass(o.__background,"slider"),G.addClass(o.__foreground,"slider-fg");function l(m){document.activeElement.blur(),G.bind(window,"mousemove",u),G.bind(window,"mouseup",h),u(m)}function u(m){m.preventDefault();var p=c.__background.getBoundingClientRect();return c.setValue(Hh(m.clientX,p.left,p.right,c.__min,c.__max)),!1}function h(){G.unbind(window,"mousemove",u),G.unbind(window,"mouseup",h),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function d(m){m.touches.length===1&&(G.bind(window,"touchmove",f),G.bind(window,"touchend",g),f(m))}function f(m){var p=m.touches[0].clientX,_=c.__background.getBoundingClientRect();c.setValue(Hh(p,_.left,_.right,c.__min,c.__max))}function g(){G.unbind(window,"touchmove",f),G.unbind(window,"touchend",g),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Un(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Bi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(jf),$f=function(i){zi(e,i);function e(t,n,r){On(this,e);var s=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,G.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),G.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Un(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(vr),Wc=function(i){zi(e,i);function e(t,n){On(this,e);var r=Vi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new wt(r.getValue()),r.__temp=new wt(0);var s=r;r.domElement=document.createElement("div"),G.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",G.bind(r.__input,"keydown",function(m){m.keyCode===13&&h.call(this)}),G.bind(r.__input,"blur",h),G.bind(r.__selector,"mousedown",function(){G.addClass(this,"drag").bind(window,"mouseup",function(){G.removeClass(s.__selector,"drag")})}),G.bind(r.__selector,"touchstart",function(){G.addClass(this,"drag").bind(window,"touchend",function(){G.removeClass(s.__selector,"drag")})});var a=document.createElement("div");J.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(a.style,{width:"100%",height:"100%",background:"none"}),Wh(a,"top","rgba(0,0,0,0)","#000"),J.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),iM(r.__hue_field),J.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),G.bind(r.__saturation_field,"mousedown",o),G.bind(r.__saturation_field,"touchstart",o),G.bind(r.__field_knob,"mousedown",o),G.bind(r.__field_knob,"touchstart",o),G.bind(r.__hue_field,"mousedown",c),G.bind(r.__hue_field,"touchstart",c);function o(m){f(m),G.bind(window,"mousemove",f),G.bind(window,"touchmove",f),G.bind(window,"mouseup",l),G.bind(window,"touchend",l)}function c(m){g(m),G.bind(window,"mousemove",g),G.bind(window,"touchmove",g),G.bind(window,"mouseup",u),G.bind(window,"touchend",u)}function l(){G.unbind(window,"mousemove",f),G.unbind(window,"touchmove",f),G.unbind(window,"mouseup",l),G.unbind(window,"touchend",l),d()}function u(){G.unbind(window,"mousemove",g),G.unbind(window,"touchmove",g),G.unbind(window,"mouseup",u),G.unbind(window,"touchend",u),d()}function h(){var m=Gc(this.value);m!==!1?(s.__color.__state=m,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),_=m.touches&&m.touches[0]||m,M=_.clientX,x=_.clientY,S=(M-p.left)/(p.right-p.left),v=1-(x-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),S>1?S=1:S<0&&(S=0),s.__color.v=v,s.__color.s=S,s.setValue(s.__color.toOriginal()),!1}function g(m){m.type.indexOf("touch")===-1&&m.preventDefault();var p=s.__hue_field.getBoundingClientRect(),_=m.touches&&m.touches[0]||m,M=_.clientY,x=1-(M-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return r}return Un(e,[{key:"updateDisplay",value:function(){var n=Gc(this.getValue());if(n!==!1){var r=!1;J.each(wt.COMPONENTS,function(o){if(!J.isUndefined(n[o])&&!J.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Wh(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(vr),nM=["-moz-","-o-","-webkit-","-ms-",""];function Wh(i,e,t,n){i.style.background="",J.each(nM,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function iM(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var rM={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},sM=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,oM=function(e,t){var n=e[t];return J.isArray(arguments[2])||J.isObject(arguments[2])?new QS(e,t,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new Hc(e,t,arguments[2],arguments[3],arguments[4]):new Hc(e,t,arguments[2],arguments[3]):J.isNumber(arguments[4])?new aa(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new aa(e,t,{min:arguments[2],max:arguments[3]}):J.isString(n)?new eM(e,t):J.isFunction(n)?new $f(e,t,""):J.isBoolean(n)?new Yf(e,t):null};function aM(i){setTimeout(i,1e3/60)}var cM=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||aM,lM=function(){function i(){On(this,i),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),G.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;G.bind(this.backgroundElement,"click",function(){e.hide()})}return Un(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",G.unbind(t.domElement,"webkitTransitionEnd",r),G.unbind(t.domElement,"transitionend",r),G.unbind(t.domElement,"oTransitionEnd",r)};G.bind(this.domElement,"webkitTransitionEnd",n),G.bind(this.domElement,"transitionend",n),G.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-G.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-G.getHeight(this.domElement)/2+"px"}}]),i}(),uM=jS(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);rM.inject(uM);var Xh="dg",qh=72,Yh=20,$s="Default",Rs=function(){try{return!!window.localStorage}catch{return!1}}(),Us=void 0,jh=!0,zr=void 0,_c=!1,Zf=[],Je=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),G.addClass(this.domElement,Xh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:$s}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&Zf.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Rs&&localStorage.getItem(Vr(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,pM(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Yc(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?G.addClass(t.__ul,i.CLASS_CLOSED):G.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(d){Rs&&(r=d,d?G.bind(window,"unload",s):G.unbind(window,"unload",s),localStorage.setItem(Vr(t,"isLocal"),d))}}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,G.addClass(this.domElement,i.CLASS_MAIN),G.makeSelectable(this.domElement,!1),Rs&&r){t.useLocalStorage=!0;var o=localStorage.getItem(Vr(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,G.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(G.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(G.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),G.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);G.addClass(c,"controller-name"),a=Rl(t,c);var l=function(d){return d.preventDefault(),t.closed=!t.closed,!1};G.addClass(this.__ul,i.CLASS_CLOSED),G.addClass(a,"title"),G.bind(a,"click",l),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(jh&&(zr=document.createElement("div"),G.addClass(zr,Xh),G.addClass(zr,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(zr),jh=!1),zr.appendChild(this.domElement),G.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Yc(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},G.bind(window,"resize",this.__resizeHandler),G.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),G.bind(this.__ul,"transitionend",this.__resizeHandler),G.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&fM(this),s=function(){Rs&&localStorage.getItem(Vr(t,"isLocal"))==="true"&&localStorage.setItem(Vr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,J.defer(function(){h.width-=1})}n.parent||u()};Je.toggleHide=function(){_c=!_c,J.each(Zf,function(i){i.domElement.style.display=_c?"none":""})};Je.CLASS_AUTO_PLACE="a";Je.CLASS_AUTO_PLACE_CONTAINER="ac";Je.CLASS_MAIN="main";Je.CLASS_CONTROLLER_ROW="cr";Je.CLASS_TOO_TALL="taller-than-window";Je.CLASS_CLOSED="closed";Je.CLASS_CLOSE_BUTTON="close-button";Je.CLASS_CLOSE_TOP="close-top";Je.CLASS_CLOSE_BOTTOM="close-bottom";Je.CLASS_DRAG="drag";Je.DEFAULT_WIDTH=245;Je.TEXT_CLOSED="Close Controls";Je.TEXT_OPEN="Open Controls";Je._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===qh||i.keyCode===qh)&&Je.toggleHide()};G.bind(window,"keydown",Je._keydownHandler,!1);J.extend(Je.prototype,{add:function(e,t){return Fs(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Fs(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;J.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&zr.removeChild(this.domElement);var e=this;J.each(this.__folders,function(t){e.removeFolder(t)}),G.unbind(window,"keydown",Je._keydownHandler,!1),$h(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Je(t);this.__folders[e]=n;var r=Rl(this,n.domElement);return G.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],$h(e);var t=this;J.each(e.__folders,function(n){e.removeFolder(n)}),J.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=G.getOffset(e.__ul).top,n=0;J.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=G.getHeight(r))}),window.innerHeight-t-Yh<n?(G.addClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Yh+"px"):(G.removeClass(e.domElement,Je.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&J.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(Us)&&(Us=new lM,Us.domElement.innerHTML=sM),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;J.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&dM(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Yc(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ko(this)),e.folders={},J.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ko(this),Xc(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[$s]=ko(this,!0)),this.load.remembered[e]=ko(this),this.preset=e,qc(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){J.each(this.__controllers,function(t){this.getRoot().load.remembered?Kf(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),J.each(this.__folders,function(t){t.revert(t)}),e||Xc(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Jf(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(e){e.updateDisplay()}),J.each(this.__folders,function(e){e.updateDisplay()})}});function Rl(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function $h(i){G.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&G.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Xc(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function hM(i,e,t){if(t.__li=e,t.__gui=i,J.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Fs(i,t.object,t.property,{before:o,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(a)||J.isObject(a)){var c=t.__li.nextElementSibling;return t.remove(),Fs(i,t.object,t.property,{before:c,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Hc){var n=new aa(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=t[s],o=n[s];t[s]=n[s]=function(){var c=Array.prototype.slice.call(arguments);return o.apply(n,c),a.apply(t,c)}}),G.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof aa){var r=function(a){if(J.isNumber(t.__min)&&J.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Fs(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(o),c&&l.listen(),l}return a};t.min=J.compose(r,t.min),t.max=J.compose(r,t.max)}else t instanceof Yf?(G.bind(e,"click",function(){G.fakeEvent(t.__checkbox,"click")}),G.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof $f?(G.bind(e,"click",function(){G.fakeEvent(t.__button,"click")}),G.bind(e,"mouseover",function(){G.addClass(t.__button,"hover")}),G.bind(e,"mouseout",function(){G.removeClass(t.__button,"hover")})):t instanceof Wc&&(G.addClass(e,"color"),t.updateDisplay=J.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=J.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&Xc(i.getRoot(),!0),s},t.setValue)}function Kf(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[$s])a=s[$s];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Fs(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new Wc(e,t);else{var s=[e,t].concat(n.factoryArgs);r=oM.apply(i,s)}n.before instanceof vr&&(n.before=n.before.__li),Kf(i,r),G.addClass(r.domElement,"c");var a=document.createElement("span");G.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var c=Rl(i,o,n.before);return G.addClass(c,Je.CLASS_CONTROLLER_ROW),r instanceof Wc?G.addClass(c,"color"):G.addClass(c,ZS(r.getValue())),hM(i,c,r),i.__controllers.push(r),r}function Vr(i,e){return document.location.href+"."+e}function qc(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Zh(i,e){e.style.display=i.useLocalStorage?"block":"none"}function dM(i){var e=i.__save_row=document.createElement("li");G.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),G.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",G.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",G.addClass(n,"button"),G.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",G.addClass(r,"button"),G.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",G.addClass(s,"button"),G.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?J.each(i.load.remembered,function(h,d){qc(i,d,d===i.preset)}):qc(i,$s,!1),G.bind(a,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),Rs){var o=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(Vr(i,"isLocal"))==="true"&&c.setAttribute("checked","checked"),Zh(i,o),G.bind(c,"change",function(){i.useLocalStorage=!i.useLocalStorage,Zh(i,o)})}var u=document.getElementById("dg-new-constructor");G.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Us.hide()}),G.bind(t,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Us.show(),u.focus(),u.select()}),G.bind(n,"click",function(){i.save()}),G.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),G.bind(s,"click",function(){i.revert()})}function fM(i){var e=void 0;i.__resize_handle=document.createElement("div"),J.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function n(){G.removeClass(i.__closeButton,Je.CLASS_DRAG),G.unbind(window,"mousemove",t),G.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),e=s.clientX,G.addClass(i.__closeButton,Je.CLASS_DRAG),G.bind(window,"mousemove",t),G.bind(window,"mouseup",n),!1}G.bind(i.__resize_handle,"mousedown",r),G.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Yc(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function ko(i,e){var t={};return J.each(i.__rememberedObjects,function(n,r){var s={},a=i.__rememberedObjectIndecesToControllers[r];J.each(a,function(o,c){s[c]=e?o.initialValue:o.getValue()}),t[r]=s}),t}function pM(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Jf(i){i.length!==0&&cM.call(window,function(){Jf(i)}),J.each(i,function(e){e.updateDisplay()})}var mM=Je;const _M=i=>(e,t)=>(i.set(e,t),t),Kh=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,Qf=536870912,Jh=Qf*2,gM=(i,e)=>t=>{const n=e.get(t);let r=n===void 0?t.size:n<Jh?n+1:0;if(!t.has(r))return i(t,r);if(t.size<Qf){for(;t.has(r);)r=Math.floor(Math.random()*Jh);return i(t,r)}if(t.size>Kh)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(r);)r=Math.floor(Math.random()*Kh);return i(t,r)},ep=new WeakMap,vM=_M(ep),xM=gM(vM,ep),yM=(i,e,t,n)=>r=>{const s=e(r);return a=>{const o=i(a);a.addEventListener("message",({data:h})=>{const{id:d}=h;if(d!==null&&o.has(d)){const{reject:f,resolve:g}=o.get(d);o.delete(d),h.error===void 0?g(h.result):f(new Error(h.error.message))}}),n(a)&&a.start();const c=(h,d=null,f=[])=>new Promise((g,m)=>{const p=t(o);o.set(p,{reject:m,resolve:g}),d===null?a.postMessage({id:p,method:h},f):a.postMessage({id:p,method:h,params:d},f)}),l=(h,d,f=[])=>{a.postMessage({id:null,method:h,params:d},f)};let u={};for(const[h,d]of Object.entries(s))u={...u,[h]:d({call:c,notify:l})};return{...u}}},SM=i=>e=>{if(i.has(e))return i.get(e);const t=new Map;return i.set(e,t),t},MM=i=>e=>({...e,connect:({call:t})=>async()=>{const{port1:n,port2:r}=new MessageChannel,s=await t("connect",{port:n},[n]);return i.set(r,s),r},disconnect:({call:t})=>async n=>{const r=i.get(n);if(r===void 0)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})},isSupported:({call:t})=>()=>t("isSupported")}),EM=i=>typeof i.start=="function",bM=yM(SM(new WeakMap),MM(new WeakMap),xM,EM),Qh=(i,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:i}),ed=(i,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:i}),jc=(i,e)=>({startTime:e,type:"setValue",value:i}),tp=(i,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:i}),np=(i,e,{startTime:t,target:n,timeConstant:r})=>n+(e-n)*Math.exp((t-i)/r),qr=i=>i.type==="exponentialRampToValue",ca=i=>i.type==="linearRampToValue",Si=i=>qr(i)||ca(i),Pl=i=>i.type==="setValue",si=i=>i.type==="setValueCurve",la=(i,e,t,n)=>{const r=i[e];return r===void 0?n:Si(r)||Pl(r)?r.value:si(r)?r.values[r.values.length-1]:np(t,la(i,e-1,r.startTime,n),r)},td=(i,e,t,n,r)=>t===void 0?[n.insertTime,r]:Si(t)?[t.endTime,t.value]:Pl(t)?[t.startTime,t.value]:si(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,la(i,e-1,t.startTime,r)],$c=i=>i.type==="cancelAndHold",Zc=i=>i.type==="cancelScheduledValues",yi=i=>$c(i)||Zc(i)?i.cancelTime:qr(i)||ca(i)?i.endTime:i.startTime,nd=(i,e,t,{endTime:n,value:r})=>t===r?r:0<t&&0<r||t<0&&r<0?t*(r/t)**((i-e)/(n-e)):i<n?t:r,id=(i,e,t,{endTime:n,value:r})=>t+(i-e)/(n-e)*(r-t),ip=(i,e)=>{const t=Math.floor(e);if(t===e)return i[t];const n=Math.ceil(e);return(1-(e-t))*i[t]+(1-(n-e))*i[n]},TM=(i,{duration:e,startTime:t,values:n})=>{const r=(i-t)/e*(n.length-1);return ip(n,r)},wM=(i,e,t)=>{const n=i.length,r=Math.max(1,Math.floor(t/e*n))+1,s=i instanceof Float32Array?new Float32Array(r):i.slice(0,r);for(let a=0;a<r;a+=1){const c=a/(r-1)*t/e*(n-1);s[a]=ip(i,c)}return s},zo=i=>i.type==="setTarget";class AM{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=yi(e);if($c(e)||Zc(e)){const n=this._automationEvents.findIndex(s=>Zc(e)&&si(s)?s.startTime+s.duration>=t:yi(s)>=t),r=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),$c(e)){const s=this._automationEvents[this._automationEvents.length-1];if(r!==void 0&&Si(r)){if(s!==void 0&&zo(s))throw new Error("The internal list is malformed.");const a=s===void 0?r.insertTime:si(s)?s.startTime+s.duration:yi(s),o=s===void 0?this._defaultValue:si(s)?s.values[s.values.length-1]:s.value,c=qr(r)?nd(t,a,o,r):id(t,a,o,r),l=qr(r)?Qh(c,t,this._currenTime):ed(c,t,this._currenTime);this._automationEvents.push(l)}if(s!==void 0&&zo(s)&&this._automationEvents.push(jc(this.getValue(t),t)),s!==void 0&&si(s)&&s.startTime+s.duration>t){const a=t-s.startTime;this._automationEvents[this._automationEvents.length-1]=tp(wM(s.values,s.duration,a),s.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>yi(a)>t),r=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(r!==void 0&&si(r)&&yi(r)+r.duration>t)return!1;const s=qr(e)?Qh(e.value,e.endTime,this._currenTime):ca(e)?ed(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(s);else{if(si(e)&&t+e.duration>yi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,s)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>yi(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),r=n[0];zo(r)&&n.unshift(jc(la(this._automationEvents,t-2,r.startTime,this._defaultValue),r.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(a=>yi(a)>e),n=this._automationEvents[t],r=(t===-1?this._automationEvents.length:t)-1,s=this._automationEvents[r];if(s!==void 0&&zo(s)&&(n===void 0||!Si(n)||n.insertTime>e))return np(e,la(this._automationEvents,r-1,s.startTime,this._defaultValue),s);if(s!==void 0&&Pl(s)&&(n===void 0||!Si(n)))return s.value;if(s!==void 0&&si(s)&&(n===void 0||!Si(n)||s.startTime+s.duration>e))return e<s.startTime+s.duration?TM(e,s):s.values[s.values.length-1];if(s!==void 0&&Si(s)&&(n===void 0||!Si(n)))return s.value;if(n!==void 0&&qr(n)){const[a,o]=td(this._automationEvents,r,s,n,this._defaultValue);return nd(e,a,o,n)}if(n!==void 0&&ca(n)){const[a,o]=td(this._automationEvents,r,s,n,this._defaultValue);return id(e,a,o,n)}return this._defaultValue}}const CM=i=>({cancelTime:i,type:"cancelAndHold"}),RM=i=>({cancelTime:i,type:"cancelScheduledValues"}),PM=(i,e)=>({endTime:e,type:"exponentialRampToValue",value:i}),LM=(i,e)=>({endTime:e,type:"linearRampToValue",value:i}),DM=(i,e,t)=>({startTime:e,target:i,timeConstant:t,type:"setTarget"}),NM=()=>new DOMException("","AbortError"),IM=i=>(e,t,[n,r,s],a)=>{i(e[r],[t,n,s],o=>o[0]===t&&o[1]===n,a)},OM=i=>(e,t,n)=>{const r=[];for(let s=0;s<n.numberOfInputs;s+=1)r.push(new Set);i.set(e,{activeInputs:r,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},UM=i=>(e,t)=>{i.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},as=new WeakSet,rp=new WeakMap,sp=new WeakMap,op=new WeakMap,ap=new WeakMap,cp=new WeakMap,lp=new WeakMap,Kc=new WeakMap,rd=new WeakMap,up={construct(){return up}},FM=i=>{try{const e=new Proxy(i,up);new e}catch{return!1}return!0},sd=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,od=(i,e)=>{const t=[];let n=i.replace(/^[\s]+/,""),r=n.match(sd);for(;r!==null;){const s=r[1].slice(1,-1),a=r[0].replace(/([\s]+)?;?$/,"").replace(s,new URL(s,e).toString());t.push(a),n=n.slice(r[0].length).replace(/^[\s]+/,""),r=n.match(sd)}return[t.join(";"),n]},ad=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},cd=i=>{if(!FM(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},BM=(i,e,t,n,r,s,a,o,c,l,u,h,d)=>{let f=0;return(g,m,p={credentials:"omit"})=>{const _=u.get(g);if(_!==void 0&&_.has(m))return Promise.resolve();const M=l.get(g);if(M!==void 0){const v=M.get(m);if(v!==void 0)return v}const x=s(g),S=x.audioWorklet===void 0?r(m).then(([v,T])=>{const[E,w]=od(v,T),y=`${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${w}
})})(window,'_AWGS')`;return t(y)}).then(()=>{const v=d._AWGS.pop();if(v===void 0)throw new SyntaxError;n(x.currentTime,x.sampleRate,()=>v(class{},void 0,(T,E)=>{if(T.trim()==="")throw e();const w=rd.get(x);if(w!==void 0){if(w.has(T))throw e();cd(E),ad(E.parameterDescriptors),w.set(T,E)}else cd(E),ad(E.parameterDescriptors),rd.set(x,new Map([[T,E]]))},x.sampleRate,void 0,void 0))}):Promise.all([r(m),Promise.resolve(i(h,h))]).then(([[v,T],E])=>{const w=f+1;f=w;const[y,b]=od(v,T),R=`${y};((AudioWorkletProcessor,registerProcessor)=>{${b}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${w}',class extends AudioWorkletProcessor{process(){return !1}})`,O=new Blob([R],{type:"application/javascript; charset=utf-8"}),F=URL.createObjectURL(O);return x.audioWorklet.addModule(F,p).then(()=>{if(o(x))return x;const U=a(x);return U.audioWorklet.addModule(F,p).then(()=>U)}).then(U=>{if(c===null)throw new SyntaxError;try{new c(U,`__sac${w}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(F))});return M===void 0?l.set(g,new Map([[m,S]])):M.set(m,S),S.then(()=>{const v=u.get(g);v===void 0?u.set(g,new Set([m])):v.add(m)}).finally(()=>{const v=l.get(g);v!==void 0&&v.delete(m)}),S}},Gi=(i,e)=>{const t=i.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Ma=(i,e)=>{const t=Array.from(i).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return i.delete(n),n},hp=(i,e,t,n)=>{const r=Gi(i,e),s=Ma(r,a=>a[0]===t&&a[1]===n);return r.size===0&&i.delete(e),s},to=i=>Gi(lp,i),cs=i=>{if(as.has(i))throw new Error("The AudioNode is already stored.");as.add(i),to(i).forEach(e=>e(!0))},dp=i=>"port"in i,no=i=>{if(!as.has(i))throw new Error("The AudioNode is not stored.");as.delete(i),to(i).forEach(e=>e(!1))},Jc=(i,e)=>{!dp(i)&&e.every(t=>t.size===0)&&no(i)},kM=(i,e,t,n,r,s,a,o,c,l,u,h,d)=>{const f=new WeakMap;return(g,m,p,_,M)=>{const{activeInputs:x,passiveInputs:S}=s(m),{outputs:v}=s(g),T=o(g),E=w=>{const y=c(m),b=c(g);if(w){const D=hp(S,g,p,_);i(x,g,D,!1),!M&&!h(g)&&t(b,y,p,_),d(m)&&cs(m)}else{const D=n(x,g,p,_);e(S,_,D,!1),!M&&!h(g)&&r(b,y,p,_);const L=a(m);if(L===0)u(m)&&Jc(m,x);else{const B=f.get(m);B!==void 0&&clearTimeout(B),f.set(m,setTimeout(()=>{u(m)&&Jc(m,x)},L*1e3))}}};return l(v,[m,p,_],w=>w[0]===m&&w[1]===p&&w[2]===_,!0)?(T.add(E),u(g)?i(x,g,[p,_,E],!0):e(S,_,[g,p,E],!0),!0):!1}},zM=i=>(e,t,[n,r,s],a)=>{const o=e.get(n);o===void 0?e.set(n,new Set([[r,t,s]])):i(o,[r,t,s],c=>c[0]===r&&c[1]===t,a)},VM=i=>(e,t)=>{const n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const r=()=>{t.removeEventListener("ended",r),t.disconnect(n),n.disconnect()};t.addEventListener("ended",r)},GM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},HM=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...GM,...c},h=n(l,u),d=s(l)?e():null;super(o,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},Xt=(i,e)=>i.context===e,WM=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Xt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},ua=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},xr=()=>new DOMException("","IndexSizeError"),Ll=i=>{i.getChannelData=(e=>t=>{try{return e.call(i,t)}catch(n){throw n.code===12?xr():n}})(i.getChannelData)},XM={numberOfChannels:1},qM=(i,e,t,n,r,s,a,o)=>{let c=null;return class fp{constructor(u){if(r===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...XM,...u};c===null&&(c=new r(1,1,44100));const g=n!==null&&e(s,s)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(g.numberOfChannels===0)throw t();return typeof g.copyFromChannel!="function"?(a(g),Ll(g)):e(ua,()=>ua(g))||o(g),i.add(g),g}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===fp.prototype||i.has(u)}}},un=-34028234663852886e22,Yt=-un,ci=i=>as.has(i),YM={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},jM=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const h=s(l),d={...YM,...u},f=r(h,d),g=a(h),m=g?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,g,f.playbackRate,Yt,un)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){cs(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),ci(this)&&no(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},$M=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=Xt(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),a!==null&&h.start(...a),o!==null&&h.stop(o)}return s.set(u,h),d?await i(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await r(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=s.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},ZM=i=>"playbackRate"in i,KM=i=>"frequency"in i&&"gain"in i,JM=i=>"offset"in i,QM=i=>!("frequency"in i)&&"gain"in i,eE=i=>"detune"in i&&"frequency"in i&&!("gain"in i),tE=i=>"pan"in i,pn=i=>Gi(rp,i),io=i=>Gi(op,i),Qc=(i,e)=>{const{activeInputs:t}=pn(i);t.forEach(r=>r.forEach(([s])=>{e.includes(i)||Qc(s,[...e,i])}));const n=ZM(i)?[i.playbackRate]:dp(i)?Array.from(i.parameters.values()):KM(i)?[i.Q,i.detune,i.frequency,i.gain]:JM(i)?[i.offset]:QM(i)?[i.gain]:eE(i)?[i.detune,i.frequency]:tE(i)?[i.pan]:[];for(const r of n){const s=io(r);s!==void 0&&s.activeInputs.forEach(([a])=>Qc(a,e))}ci(i)&&no(i)},nE=i=>{Qc(i.destination,[])},iE=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const h=s(l),d=a(h),f=r(h,u,d),g=d?e(o):null;super(l,!1,f,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},rE=i=>{const e=new WeakMap,t=async(n,r)=>{const s=r.destination;return e.set(r,s),await i(n,r,s),s};return{render(n,r){const s=e.get(r);return s!==void 0?Promise.resolve(s):t(n,r)}}},sE=(i,e,t,n,r,s,a,o)=>(c,l)=>{const u=l.listener,h=()=>{const v=new Float32Array(1),T=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),E=a(l);let w=!1,y=[0,0,-1,0,1,0],b=[0,0,0];const D=()=>{if(w)return;w=!0;const O=n(l,256,9,0);O.onaudioprocess=({inputBuffer:F})=>{const U=[s(F,v,0),s(F,v,1),s(F,v,2),s(F,v,3),s(F,v,4),s(F,v,5)];U.some((W,Y)=>W!==y[Y])&&(u.setOrientation(...U),y=U);const Z=[s(F,v,6),s(F,v,7),s(F,v,8)];Z.some((W,Y)=>W!==b[Y])&&(u.setPosition(...Z),b=Z)},T.connect(O)},L=O=>F=>{F!==y[O]&&(y[O]=F,u.setOrientation(...y))},B=O=>F=>{F!==b[O]&&(b[O]=F,u.setPosition(...b))},R=(O,F,U)=>{const Z=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F});Z.connect(T,0,O),Z.start(),Object.defineProperty(Z.offset,"defaultValue",{get(){return F}});const W=i({context:c},E,Z.offset,Yt,un);return o(W,"value",Y=>()=>Y.call(W),Y=>N=>{try{Y.call(W,N)}catch(z){if(z.code!==9)throw z}D(),E&&U(N)}),W.cancelAndHoldAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.cancelAndHoldAtTime),W.cancelScheduledValues=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.cancelScheduledValues),W.exponentialRampToValueAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.exponentialRampToValueAtTime),W.linearRampToValueAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.linearRampToValueAtTime),W.setTargetAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.setTargetAtTime),W.setValueAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.setValueAtTime),W.setValueCurveAtTime=(Y=>E?()=>{throw r()}:(...N)=>{const z=Y.apply(W,N);return D(),z})(W.setValueCurveAtTime),W};return{forwardX:R(0,0,L(0)),forwardY:R(1,0,L(1)),forwardZ:R(2,-1,L(2)),positionX:R(6,0,B(0)),positionY:R(7,0,B(1)),positionZ:R(8,0,B(2)),upX:R(3,0,L(3)),upY:R(4,1,L(4)),upZ:R(5,0,L(5))}},{forwardX:d,forwardY:f,forwardZ:g,positionX:m,positionY:p,positionZ:_,upX:M,upY:x,upZ:S}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return g},get positionX(){return m},get positionY(){return p},get positionZ(){return _},get upX(){return M},get upY(){return x},get upZ(){return S}}},ha=i=>"context"in i,ro=i=>ha(i[0]),yr=(i,e,t,n)=>{for(const r of i)if(t(r)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(e),!0},ld=(i,e,[t,n],r)=>{yr(i,[e,t,n],s=>s[0]===e&&s[1]===t,r)},ud=(i,[e,t,n],r)=>{const s=i.get(e);s===void 0?i.set(e,new Set([[t,n]])):yr(s,[t,n],a=>a[0]===t,r)},fs=i=>"inputs"in i,da=(i,e,t,n)=>{if(fs(e)){const r=e.inputs[n];return i.connect(r,t,0),[r,t,0]}return i.connect(e,t,n),[e,t,n]},pp=(i,e,t)=>{for(const n of i)if(n[0]===e&&n[1]===t)return i.delete(n),n;return null},oE=(i,e,t)=>Ma(i,n=>n[0]===e&&n[1]===t),mp=(i,e)=>{if(!to(i).delete(e))throw new Error("Missing the expected event listener.")},_p=(i,e,t)=>{const n=Gi(i,e),r=Ma(n,s=>s[0]===t);return n.size===0&&i.delete(e),r},fa=(i,e,t,n)=>{fs(e)?i.disconnect(e.inputs[n],t,0):i.disconnect(e,t,n)},st=i=>Gi(sp,i),Zs=i=>Gi(ap,i),mr=i=>Kc.has(i),Xo=i=>!as.has(i),hd=(i,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=i.createScriptProcessor(256,1,1),r=i.createGain(),s=i.createBuffer(1,2,44100),a=s.getChannelData(0);a[0]=1,a[1]=1;const o=i.createBufferSource();o.buffer=s,o.loop=!0,o.connect(n).connect(i.destination),o.connect(r),o.disconnect(r),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(i.destination)},o.start()}}),gc=(i,e)=>{const t=new Map;for(const n of i)for(const r of n){const s=t.get(r);t.set(r,s===void 0?1:s+1)}t.forEach((n,r)=>e(r,n))},dd=i=>"context"in i,aE=i=>{const e=new Map;i.connect=(t=>(n,r=0,s=0)=>{const a=dd(n)?t(n,r,s):t(n,r),o=e.get(n);return o===void 0?e.set(n,[{input:s,output:r}]):o.every(c=>c.input!==s||c.output!==r)&&o.push({input:s,output:r}),a})(i.connect.bind(i)),i.disconnect=(t=>(n,r,s)=>{if(t.apply(i),n===void 0)e.clear();else if(typeof n=="number")for(const[a,o]of e){const c=o.filter(l=>l.output!==n);c.length===0?e.delete(a):e.set(a,c)}else if(e.has(n))if(r===void 0)e.delete(n);else{const a=e.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==r&&(c.input!==s||s===void 0));o.length===0?e.delete(n):e.set(n,o)}}for(const[a,o]of e)o.forEach(c=>{dd(a)?i.connect(a,c.output,c.input):i.connect(a,c.output)})})(i.disconnect)},cE=(i,e,t,n)=>{const{activeInputs:r,passiveInputs:s}=io(e),{outputs:a}=pn(i),o=to(i),c=l=>{const u=st(i),h=Zs(e);if(l){const d=_p(s,i,t);ld(r,i,d,!1),!n&&!mr(i)&&u.connect(h,t)}else{const d=oE(r,i,t);ud(s,d,!1),!n&&!mr(i)&&u.disconnect(h,t)}};return yr(a,[e,t],l=>l[0]===e&&l[1]===t,!0)?(o.add(c),ci(i)?ld(r,i,[t,c],!0):ud(s,[i,t,c],!0),!0):!1},lE=(i,e,t,n)=>{const{activeInputs:r,passiveInputs:s}=pn(e),a=pp(r[n],i,t);return a===null?[hp(s,i,t,n)[2],!1]:[a[2],!0]},uE=(i,e,t)=>{const{activeInputs:n,passiveInputs:r}=io(e),s=pp(n,i,t);return s===null?[_p(r,i,t)[1],!1]:[s[2],!0]},Dl=(i,e,t,n,r)=>{const[s,a]=lE(i,t,n,r);if(s!==null&&(mp(i,s),a&&!e&&!mr(i)&&fa(st(i),st(t),n,r)),ci(t)){const{activeInputs:o}=pn(t);Jc(t,o)}},Nl=(i,e,t,n)=>{const[r,s]=uE(i,t,n);r!==null&&(mp(i,r),s&&!e&&!mr(i)&&st(i).disconnect(Zs(t),n))},hE=(i,e)=>{const t=pn(i),n=[];for(const r of t.outputs)ro(r)?Dl(i,e,...r):Nl(i,e,...r),n.push(r[0]);return t.outputs.clear(),n},dE=(i,e,t)=>{const n=pn(i),r=[];for(const s of n.outputs)s[1]===t&&(ro(s)?Dl(i,e,...s):Nl(i,e,...s),r.push(s[0]),n.outputs.delete(s));return r},fE=(i,e,t,n,r)=>{const s=pn(i);return Array.from(s.outputs).filter(a=>a[0]===t&&(n===void 0||a[1]===n)&&(r===void 0||a[2]===r)).map(a=>(ro(a)?Dl(i,e,...a):Nl(i,e,...a),s.outputs.delete(a),a[0]))},pE=(i,e,t,n,r,s,a,o,c,l,u,h,d,f,g,m)=>class extends l{constructor(_,M,x,S){super(x),this._context=_,this._nativeAudioNode=x;const v=u(_);h(v)&&t(hd,()=>hd(v,m))!==!0&&aE(x),sp.set(this,x),lp.set(this,new Set),_.state!=="closed"&&M&&cs(this),i(this,S,x)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(_){this._nativeAudioNode.channelCount=_}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(_){this._nativeAudioNode.channelCountMode=_}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(_){this._nativeAudioNode.channelInterpretation=_}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(_,M=0,x=0){if(M<0||M>=this._nativeAudioNode.numberOfOutputs)throw r();const S=u(this._context),v=g(S);if(d(_)||f(_))throw s();if(ha(_)){const w=st(_);try{const b=da(this._nativeAudioNode,w,M,x),D=Xo(this);(v||D)&&this._nativeAudioNode.disconnect(...b),this.context.state!=="closed"&&!D&&Xo(_)&&cs(_)}catch(b){throw b.code===12?s():b}if(e(this,_,M,x,v)){const b=c([this],_);gc(b,n(v))}return _}const T=Zs(_);if(T.name==="playbackRate"&&T.maxValue===1024)throw a();try{this._nativeAudioNode.connect(T,M),(v||Xo(this))&&this._nativeAudioNode.disconnect(T,M)}catch(w){throw w.code===12?s():w}if(cE(this,_,M,v)){const w=c([this],_);gc(w,n(v))}}disconnect(_,M,x){let S;const v=u(this._context),T=g(v);if(_===void 0)S=hE(this,T);else if(typeof _=="number"){if(_<0||_>=this.numberOfOutputs)throw r();S=dE(this,T,_)}else{if(M!==void 0&&(M<0||M>=this.numberOfOutputs)||ha(_)&&x!==void 0&&(x<0||x>=_.numberOfInputs))throw r();if(S=fE(this,T,_,M,x),S.length===0)throw s()}for(const E of S){const w=c([this],E);gc(w,o)}}},mE=(i,e,t,n,r,s,a,o,c,l,u,h,d)=>(f,g,m,p=null,_=null)=>{const M=m.value,x=new AM(M),S=g?n(x):null,v={get defaultValue(){return M},get maxValue(){return p===null?m.maxValue:p},get minValue(){return _===null?m.minValue:_},get value(){return m.value},set value(T){m.value=T,v.setValueAtTime(T,f.context.currentTime)},cancelAndHoldAtTime(T){if(typeof m.cancelAndHoldAtTime=="function")S===null&&x.flush(f.context.currentTime),x.add(r(T)),m.cancelAndHoldAtTime(T);else{const E=Array.from(x).pop();S===null&&x.flush(f.context.currentTime),x.add(r(T));const w=Array.from(x).pop();m.cancelScheduledValues(T),E!==w&&w!==void 0&&(w.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(w.value,w.endTime):w.type==="linearRampToValue"?m.linearRampToValueAtTime(w.value,w.endTime):w.type==="setValue"?m.setValueAtTime(w.value,w.startTime):w.type==="setValueCurve"&&m.setValueCurveAtTime(w.values,w.startTime,w.duration))}return v},cancelScheduledValues(T){return S===null&&x.flush(f.context.currentTime),x.add(s(T)),m.cancelScheduledValues(T),v},exponentialRampToValueAtTime(T,E){if(T===0)throw new RangeError;if(!Number.isFinite(E)||E<0)throw new RangeError;const w=f.context.currentTime;return S===null&&x.flush(w),Array.from(x).length===0&&(x.add(l(M,w)),m.setValueAtTime(M,w)),x.add(a(T,E)),m.exponentialRampToValueAtTime(T,E),v},linearRampToValueAtTime(T,E){const w=f.context.currentTime;return S===null&&x.flush(w),Array.from(x).length===0&&(x.add(l(M,w)),m.setValueAtTime(M,w)),x.add(o(T,E)),m.linearRampToValueAtTime(T,E),v},setTargetAtTime(T,E,w){return S===null&&x.flush(f.context.currentTime),x.add(c(T,E,w)),m.setTargetAtTime(T,E,w),v},setValueAtTime(T,E){return S===null&&x.flush(f.context.currentTime),x.add(l(T,E)),m.setValueAtTime(T,E),v},setValueCurveAtTime(T,E,w){const y=T instanceof Float32Array?T:new Float32Array(T);if(h!==null&&h.name==="webkitAudioContext"){const b=E+w,D=f.context.sampleRate,L=Math.ceil(E*D),B=Math.floor(b*D),R=B-L,O=new Float32Array(R);for(let U=0;U<R;U+=1){const Z=(y.length-1)/w*((L+U)/D-E),W=Math.floor(Z),Y=Math.ceil(Z);O[U]=W===Y?y[W]:(1-(Z-W))*y[W]+(1-(Y-Z))*y[Y]}S===null&&x.flush(f.context.currentTime),x.add(u(O,E,w)),m.setValueCurveAtTime(O,E,w);const F=B/D;F<b&&d(v,O[O.length-1],F),d(v,y[y.length-1],b)}else S===null&&x.flush(f.context.currentTime),x.add(u(y,E,w)),m.setValueCurveAtTime(y,E,w);return v}};return t.set(v,m),e.set(v,f),i(v,S),v},_E=i=>({replay(e){for(const t of i)if(t.type==="exponentialRampToValue"){const{endTime:n,value:r}=t;e.exponentialRampToValueAtTime(r,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:r}=t;e.linearRampToValueAtTime(r,n)}else if(t.type==="setTarget"){const{startTime:n,target:r,timeConstant:s}=t;e.setTargetAtTime(r,n,s)}else if(t.type==="setValue"){const{startTime:n,value:r}=t;e.setValueAtTime(r,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:r,values:s}=t;e.setValueCurveAtTime(s,r,n)}else throw new Error("Can't apply an unknown automation.")}}),gE=(i,e,t,n,r,s,a,o,c,l,u,h,d,f,g,m,p,_,M,x)=>class extends g{constructor(v,T){super(v,T),this._nativeContext=v,this._audioWorklet=i===void 0?void 0:{addModule:(E,w)=>i(this,E,w)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new r(this)}createBuffer(v,T,E){return new t({length:T,numberOfChannels:v,sampleRate:E})}createBufferSource(){return new n(this)}createChannelMerger(v=6){return new s(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new a(this,{numberOfOutputs:v})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(v=1){return new u(this,{maxDelayTime:v})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(v,T){return new f(this,{feedback:T,feedforward:v})}createOscillator(){return new m(this)}createPanner(){return new p(this)}createPeriodicWave(v,T,E={disableNormalization:!1}){return new _(this,{...E,imag:T,real:v})}createStereoPanner(){return new M(this)}createWaveShaper(){return new x(this)}decodeAudioData(v,T,E){return l(this._nativeContext,v).then(w=>(typeof T=="function"&&T(w),w),w=>{throw typeof E=="function"&&E(w),w})}},vE={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},xE=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const h=s(l),d={...vE,...u},f=r(h,d),g=a(h),m=g?t():null;super(l,!1,f,m),this._Q=e(this,g,f.Q,Yt,un),this._detune=e(this,g,f.detune,1200*Math.log2(Yt),-1200*Math.log2(Yt)),this._frequency=e(this,g,f.frequency,l.sampleRate/2,0),this._gain=e(this,g,f.gain,40*Math.log10(Yt),un),this._nativeBiquadFilterNode=f,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},yE=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Xt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return s.set(c,l),u?(await i(c,o.Q,l.Q),await i(c,o.detune,l.detune),await i(c,o.frequency,l.frequency),await i(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},SE=(i,e)=>(t,n)=>{const r=e.get(t);if(r!==void 0)return r;const s=i.get(t);if(s!==void 0)return s;try{const a=n();return a instanceof Promise?(i.set(t,a),a.catch(()=>!1).then(o=>(i.delete(t),e.set(t,o),o))):(e.set(t,a),a)}catch{return e.set(t,!1),!1}},ME={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},EE=(i,e,t,n,r)=>class extends i{constructor(a,o){const c=n(a),l={...ME,...o},u=t(c,l),h=r(c)?e():null;super(a,!1,u,h)}},bE=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Xt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},TE={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},wE=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u=s({...TE,...c}),h=t(l,u),d=r(l)?e():null;super(o,!1,h,d)}},AE=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Xt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=i(a,l)}return n.set(a,o),await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},CE=i=>(e,t,n)=>i(t,e,n),RE=i=>(e,t)=>{const n=i(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),r=e.createBuffer(1,2,44100);return n.buffer=r,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},PE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},LE=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),h={...PE,...l},d=n(u,h),f=s(u),g=f?t():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Yt,un),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){cs(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),ci(this)&&no(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},DE=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null;const c=async(l,u)=>{let h=t(l);const d=Xt(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),a!==null&&h.start(a),o!==null&&h.stop(o)}return s.set(u,h),d?await i(u,l.offset,h.offset):await n(u,l.offset,h.offset),await r(l,u,h),h};return{set start(l){a=l},set stop(l){o=l},render(l,u){const h=s.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},NE=i=>e=>(i[0]=e,i[0]),IE={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},OE=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u={...IE,...c},h=t(l,u),f=r(l)?e():null;super(o,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&s(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,s(this,0)}else this._isBufferNullified=!1,s(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},UE=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Xt(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=i(a,l)}return n.set(a,o),fs(o)?await t(s,a,o.inputs[0]):await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},FE=(i,e)=>(t,n,r)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,r)}catch(s){throw s.name==="SyntaxError"?i():s}},BE=()=>new DOMException("","DataCloneError"),fd=i=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const r=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>r();try{e.postMessage(i,[i])}catch{}finally{r()}})},kE=(i,e,t,n,r,s,a,o,c,l,u)=>(h,d)=>{const f=a(h)?h:s(h);if(r.has(d)){const g=t();return Promise.reject(g)}try{r.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(g=>(fd(d).catch(()=>{}),e(o,()=>o(g))||u(g),i.add(g),g)):new Promise((g,m)=>{const p=async()=>{try{await fd(d)}catch{}},_=M=>{m(M),p()};try{f.decodeAudioData(d,M=>{typeof M.copyFromChannel!="function"&&(l(M),Ll(M)),i.add(M),p().then(()=>g(M))},M=>{_(M===null?n():M)})}catch(M){_(M)}})},zE=(i,e,t,n,r,s,a,o)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=s(c.context),d=o(h);if(u===l){if(e.delete(c),!d&&a(c)){const f=n(c),{outputs:g}=t(c);for(const m of g)if(ro(m)){const p=n(m[0]);i(f,p,m[1],m[2])}else{const p=r(m[0]);f.connect(p,m[1])}}}else e.set(c,u-l)},VE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},GE=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),h={...VE,...l},d=n(u,h),f=s(u),g=f?t(h.maxDelayTime):null;super(c,!1,d,g),this._delayTime=e(this,f,d.delayTime),a(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},HE=(i,e,t,n,r)=>s=>{const a=new WeakMap,o=async(c,l)=>{let u=t(c);const h=Xt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:s};u=e(l,d)}return a.set(l,u),h?await i(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await r(c,l,u),u};return{render(c,l){const u=a.get(l);return u!==void 0?Promise.resolve(u):o(c,l)}}},WE=i=>(e,t,n,r)=>i(e[r],s=>s[0]===t&&s[1]===n),XE=i=>"delayTime"in i,qE=(i,e,t)=>function n(r,s){const a=ha(s)?s:t(i,s);if(XE(a))return[];if(r[0]===a)return[r];if(r.includes(a))return[];const{outputs:o}=e(a);return Array.from(o).map(c=>n([...r,a],c[0])).reduce((c,l)=>c.concat(l),[])},YE={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},jE=(i,e,t,n,r,s,a,o)=>class extends i{constructor(l,u){const h=s(l),d={...YE,...u},f=n(h,d),g=a(h),m=g?t():null;super(l,!1,f,m),this._attack=e(this,g,f.attack),this._knee=e(this,g,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,g,f.ratio),this._release=e(this,g,f.release),this._threshold=e(this,g,f.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,r()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,r()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},$E=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Xt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return s.set(c,l),u?(await i(c,o.attack,l.attack),await i(c,o.knee,l.knee),await i(c,o.ratio,l.ratio),await i(c,o.release,l.release),await i(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},ZE=()=>new DOMException("","EncodingError"),KE=i=>e=>new Promise((t,n)=>{if(i===null){n(new SyntaxError);return}const r=i.document.head;if(r===null)n(new SyntaxError);else{const s=i.document.createElement("script"),a=new Blob([e],{type:"application/javascript"}),o=URL.createObjectURL(a),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(o)};i.onerror=(u,h,d,f,g)=>{if(h===o||h===i.location.href&&d===1&&f===1)return l(),n(g),!1;if(c!==null)return c(u,h,d,f,g)},s.onerror=()=>{l(),n(new SyntaxError)},s.onload=()=>{l(),t()},s.src=o,s.type="module",r.appendChild(s)}}),JE=i=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,r){if(n!==null){let s=this._listeners.get(n);s===void 0&&(s=i(this,n),typeof n=="function"&&this._listeners.set(n,s)),this._nativeEventTarget.addEventListener(t,s,r)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,r){const s=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,s===void 0?null:s,r)}},QE=i=>(e,t,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},eb=i=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw i()},tb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},nb=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...tb,...c},h=n(l,u),d=s(l),f=d?t():null;super(o,!1,h,f),this._gain=e(this,d,h.gain,Yt,un)}get gain(){return this._gain}},ib=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Xt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return s.set(c,l),u?await i(c,o.gain,l.gain):await n(c,o.gain,l.gain),await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},rb=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},sb=i=>e=>{var t;return(t=i.get(e))!==null&&t!==void 0?t:0},ob=i=>e=>{const t=i(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},en=()=>new DOMException("","InvalidStateError"),ab=i=>e=>{const t=i.get(e);if(t===void 0)throw en();return t},cb=(i,e)=>t=>{let n=i.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),i.set(t,n),n},lb=i=>e=>{const t=i.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Ea=()=>new DOMException("","InvalidAccessError"),ub=i=>{i.getFrequencyResponse=(e=>(t,n,r)=>{if(t.length!==n.length||n.length!==r.length)throw Ea();return e.call(i,t,n,r)})(i.getFrequencyResponse)},hb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},db=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=n(o),u=r(l),h={...hb,...c},d=e(l,u?null:o.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(o,!1,d,f),ub(d),this._nativeIIRFilterNode=d,s(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},gp=(i,e,t,n,r,s,a,o,c,l,u)=>{const h=l.length;let d=o;for(let f=0;f<h;f+=1){let g=t[0]*l[f];for(let m=1;m<r;m+=1){const p=d-m&c-1;g+=t[m]*s[p],g-=i[m]*a[p]}for(let m=r;m<n;m+=1)g+=t[m]*s[d-m&c-1];for(let m=r;m<e;m+=1)g-=i[m]*a[d-m&c-1];s[d]=l[f],a[d]=g,d=d+1&c-1,u[f]=g}return d},fb=(i,e,t,n)=>{const r=t instanceof Float64Array?t:new Float64Array(t),s=n instanceof Float64Array?n:new Float64Array(n),a=r.length,o=s.length,c=Math.min(a,o);if(r[0]!==1){for(let g=0;g<a;g+=1)s[g]/=r[0];for(let g=1;g<o;g+=1)r[g]/=r[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(i.numberOfChannels,i.length,i.sampleRate),f=i.numberOfChannels;for(let g=0;g<f;g+=1){const m=i.getChannelData(g),p=d.getChannelData(g);u.fill(0),h.fill(0),gp(r,a,s,o,c,u,h,0,l,m,p)}return d},pb=(i,e,t,n,r)=>(s,a)=>{const o=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const g=Xt(f,h);if(h.createIIRFilter===void 0?d=i(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(f=h.createIIRFilter(a,s)),o.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const p=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,p,p.destination);const _=await r(p);return fb(_,h,s,a)})()}const m=await c;return d.buffer=m,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=o.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},mb=(i,e,t,n,r,s)=>a=>(o,c)=>{const l=i.get(o);if(l===void 0){if(!a&&s(o)){const u=n(o),{outputs:h}=t(o);for(const d of h)if(ro(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=r(d[0]);u.disconnect(f,d[1])}}i.set(o,c)}else i.set(o,l+c)},_b=i=>e=>i!==null&&e instanceof i,gb=i=>e=>i!==null&&typeof i.AudioNode=="function"&&e instanceof i.AudioNode,vb=i=>e=>i!==null&&typeof i.AudioParam=="function"&&e instanceof i.AudioParam,xb=(i,e)=>t=>i(t)||e(t),yb=i=>e=>i!==null&&e instanceof i,Sb=i=>i!==null&&i.isSecureContext,Mb=(i,e,t,n,r,s)=>class extends t{constructor(o,c){super(o),this._nativeContext=o,cp.set(this,o),n(o)&&r.set(o,new Set),this._destination=new i(this,c),this._listener=e(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?s(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Ks=i=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=i.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Eb=(i,e)=>(t,n,r)=>{const s=new Set;return t.connect=(a=>(o,c=0,l=0)=>{const u=s.size===0;if(e(o))return a.call(t,o,c,l),i(s,[o,c,l],h=>h[0]===o&&h[1]===c&&h[2]===l,!0),u&&n(),o;a.call(t,o,c),i(s,[o,c],h=>h[0]===o&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(a=>(o,c,l)=>{const u=s.size>0;if(o===void 0)a.apply(t),s.clear();else if(typeof o=="number"){a.call(t,o);for(const d of s)d[1]===o&&s.delete(d)}else{e(o)?a.call(t,o,c,l):a.call(t,o,c);for(const d of s)d[0]===o&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&s.delete(d)}const h=s.size===0;u&&h&&r()})(t.disconnect),t},et=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t]&&(i[t]=n)},Ct=(i,e)=>{et(i,e,"channelCount"),et(i,e,"channelCountMode"),et(i,e,"channelInterpretation")},pd=i=>typeof i.getFloatTimeDomainData=="function",bb=i=>{i.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);i.getByteTimeDomainData(t);const n=Math.max(t.length,i.fftSize);for(let r=0;r<n;r+=1)e[r]=(t[r]-128)*.0078125;return e}},Tb=(i,e)=>(t,n)=>{const r=t.createAnalyser();if(Ct(r,n),!(n.maxDecibels>n.minDecibels))throw e();return et(r,n,"fftSize"),et(r,n,"maxDecibels"),et(r,n,"minDecibels"),et(r,n,"smoothingTimeConstant"),i(pd,()=>pd(r))||bb(r),r},wb=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,ct=(i,e,t)=>{const n=e[t];n!==void 0&&n!==i[t].value&&(i[t].value=n)},Ab=i=>{i.start=(e=>{let t=!1;return(n=0,r=0,s)=>{if(t)throw en();e.call(i,n,r,s),t=!0}})(i.start)},Il=i=>{i.start=(e=>(t=0,n=0,r)=>{if(typeof r=="number"&&r<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(i,t,n,r)})(i.start)},Ol=i=>{i.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(i,t)})(i.stop)},Cb=(i,e,t,n,r,s,a,o,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return Ct(f,d),ct(f,d,"playbackRate"),et(f,d,"buffer"),et(f,d,"loop"),et(f,d,"loopEnd"),et(f,d,"loopStart"),e(t,()=>t(h))||Ab(f),e(n,()=>n(h))||c(f),e(r,()=>r(h))||l(f,h),e(s,()=>s(h))||Il(f),e(a,()=>a(h))||u(f,h),e(o,()=>o(h))||Ol(f),i(h,f),f},Rb=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,Pb=(i,e)=>(t,n,r)=>{const s=t.destination;if(s.channelCount!==n)try{s.channelCount=n}catch{}r&&s.channelCountMode!=="explicit"&&(s.channelCountMode="explicit"),s.maxChannelCount===0&&Object.defineProperty(s,"maxChannelCount",{value:n});const a=i(t,{channelCount:n,channelCountMode:s.channelCountMode,channelInterpretation:s.channelInterpretation,gain:1});return e(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{s.channelCount=c}catch(l){if(c>s.maxChannelCount)throw l}}),e(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),s.channelCountMode=c}),e(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),s.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>s.maxChannelCount}),a.connect(s),a},Lb=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,Db=(i,e)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*e))))),vp=(i,e)=>{const t=i.createBiquadFilter();return Ct(t,e),ct(t,e,"Q"),ct(t,e,"detune"),ct(t,e,"frequency"),ct(t,e,"gain"),et(t,e,"type"),t},Nb=(i,e)=>(t,n)=>{const r=t.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&e(t,r),Ct(r,n),r},Ib=i=>{const e=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw en()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw en()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw en()}})},Ul=(i,e)=>{const t=i.createChannelSplitter(e.numberOfOutputs);return Ct(t,e),Ib(t),t},Ob=(i,e,t,n,r)=>(s,a)=>{if(s.createConstantSource===void 0)return t(s,a);const o=s.createConstantSource();return Ct(o,a),ct(o,a,"offset"),e(n,()=>n(s))||Il(o),e(r,()=>r(s))||Ol(o),i(s,o),o},ps=(i,e)=>(i.connect=e.connect.bind(e),i.disconnect=e.disconnect.bind(e),i),Ub=(i,e,t,n)=>(r,{offset:s,...a})=>{const o=r.createBuffer(1,2,44100),c=e(r,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(r,{...a,gain:s}),u=o.getChannelData(0);u[0]=1,u[1]=1,c.buffer=o,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return i(r,c),n(ps(h,l),d,f)},Fb=(i,e)=>(t,n)=>{const r=t.createConvolver();if(Ct(r,n),n.disableNormalization===r.normalize&&(r.normalize=!n.disableNormalization),et(r,n,"buffer"),n.channelCount>2||(e(r,"channelCount",s=>()=>s.call(r),s=>a=>{if(a>2)throw i();return s.call(r,a)}),n.channelCountMode==="max"))throw i();return e(r,"channelCountMode",s=>()=>s.call(r),s=>a=>{if(a==="max")throw i();return s.call(r,a)}),r},xp=(i,e)=>{const t=i.createDelay(e.maxDelayTime);return Ct(t,e),ct(t,e,"delayTime"),t},Bb=i=>(e,t)=>{const n=e.createDynamicsCompressor();if(Ct(n,t),t.channelCount>2||t.channelCountMode==="max")throw i();return ct(n,t,"attack"),ct(n,t,"knee"),ct(n,t,"ratio"),ct(n,t,"release"),ct(n,t,"threshold"),n},In=(i,e)=>{const t=i.createGain();return Ct(t,e),ct(t,e,"gain"),t},kb=i=>(e,t,n)=>{if(e.createIIRFilter===void 0)return i(e,t,n);const r=e.createIIRFilter(n.feedforward,n.feedback);return Ct(r,n),r};function zb(i,e){const t=e[0]*e[0]+e[1]*e[1];return[(i[0]*e[0]+i[1]*e[1])/t,(i[1]*e[0]-i[0]*e[1])/t]}function Vb(i,e){return[i[0]*e[0]-i[1]*e[1],i[0]*e[1]+i[1]*e[0]]}function md(i,e){let t=[0,0];for(let n=i.length-1;n>=0;n-=1)t=Vb(t,e),t[0]+=i[n];return t}const Gb=(i,e,t,n)=>(r,s,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=Db(s,r.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),g=d.length,m=f.length,p=Math.min(g,m);if(g===0||g>20)throw n();if(d[0]===0)throw e();if(m===0||m>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let w=0;w<m;w+=1)f[w]/=d[0];for(let w=1;w<g;w+=1)d[w]/=d[0]}const _=t(r,h,a,a);_.channelCount=a,_.channelCountMode=o,_.channelInterpretation=c;const M=32,x=[],S=[],v=[];for(let w=0;w<a;w+=1){x.push(0);const y=new Float32Array(M),b=new Float32Array(M);y.fill(0),b.fill(0),S.push(y),v.push(b)}_.onaudioprocess=w=>{const y=w.inputBuffer,b=w.outputBuffer,D=y.numberOfChannels;for(let L=0;L<D;L+=1){const B=y.getChannelData(L),R=b.getChannelData(L);x[L]=gp(d,g,f,m,p,S[L],v[L],x[L],M,B,R)}};const T=r.sampleRate/2;return ps({get bufferSize(){return h},get channelCount(){return _.channelCount},set channelCount(w){_.channelCount=w},get channelCountMode(){return _.channelCountMode},set channelCountMode(w){_.channelCountMode=w},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(w){_.channelInterpretation=w},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...w){return _.addEventListener(w[0],w[1],w[2])},dispatchEvent(...w){return _.dispatchEvent(w[0])},getFrequencyResponse(w,y,b){if(w.length!==y.length||y.length!==b.length)throw i();const D=w.length;for(let L=0;L<D;L+=1){const B=-Math.PI*(w[L]/T),R=[Math.cos(B),Math.sin(B)],O=md(f,R),F=md(d,R),U=zb(O,F);y[L]=Math.sqrt(U[0]*U[0]+U[1]*U[1]),b[L]=Math.atan2(U[1],U[0])}},removeEventListener(...w){return _.removeEventListener(w[0],w[1],w[2])}},_)},Hb=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,Wb=(i,e,t,n,r,s)=>(a,o)=>{const c=a.createOscillator();return Ct(c,o),ct(c,o,"detune"),ct(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):et(c,o,"type"),e(t,()=>t(a))||Il(c),e(n,()=>n(a))||s(c,a),e(r,()=>r(a))||Ol(c),i(a,c),c},Xb=i=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?i(e,t):(Ct(n,t),ct(n,t,"orientationX"),ct(n,t,"orientationY"),ct(n,t,"orientationZ"),ct(n,t,"positionX"),ct(n,t,"positionY"),ct(n,t,"positionZ"),et(n,t,"coneInnerAngle"),et(n,t,"coneOuterAngle"),et(n,t,"coneOuterGain"),et(n,t,"distanceModel"),et(n,t,"maxDistance"),et(n,t,"panningModel"),et(n,t,"refDistance"),et(n,t,"rolloffFactor"),n)},qb=(i,e,t,n,r,s,a,o,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:g,maxDistance:m,orientationX:p,orientationY:_,orientationZ:M,panningModel:x,positionX:S,positionY:v,positionZ:T,refDistance:E,rolloffFactor:w,...y})=>{const b=u.createPanner();if(y.channelCount>2||y.channelCountMode==="max")throw a();Ct(b,y);const D={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},L=t(u,{...D,channelInterpretation:"speakers",numberOfInputs:6}),B=n(u,{...y,gain:1}),R=n(u,{...D,gain:1}),O=n(u,{...D,gain:0}),F=n(u,{...D,gain:0}),U=n(u,{...D,gain:0}),Z=n(u,{...D,gain:0}),W=n(u,{...D,gain:0}),Y=r(u,256,6,1),N=s(u,{...D,curve:new Float32Array([1,1]),oversample:"none"});let z=[p,_,M],le=[S,v,T];const oe=new Float32Array(1);Y.onaudioprocess=({inputBuffer:ee})=>{const Te=[c(ee,oe,0),c(ee,oe,1),c(ee,oe,2)];Te.some((Ce,V)=>Ce!==z[V])&&(b.setOrientation(...Te),z=Te);const Ze=[c(ee,oe,3),c(ee,oe,4),c(ee,oe,5)];Ze.some((Ce,V)=>Ce!==le[V])&&(b.setPosition(...Ze),le=Ze)},Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(W.gain,"defaultValue",{get:()=>0});const Q={get bufferSize(){},get channelCount(){return b.channelCount},set channelCount(ee){if(ee>2)throw a();B.channelCount=ee,b.channelCount=ee},get channelCountMode(){return b.channelCountMode},set channelCountMode(ee){if(ee==="max")throw a();B.channelCountMode=ee,b.channelCountMode=ee},get channelInterpretation(){return b.channelInterpretation},set channelInterpretation(ee){B.channelInterpretation=ee,b.channelInterpretation=ee},get coneInnerAngle(){return b.coneInnerAngle},set coneInnerAngle(ee){b.coneInnerAngle=ee},get coneOuterAngle(){return b.coneOuterAngle},set coneOuterAngle(ee){b.coneOuterAngle=ee},get coneOuterGain(){return b.coneOuterGain},set coneOuterGain(ee){if(ee<0||ee>1)throw e();b.coneOuterGain=ee},get context(){return b.context},get distanceModel(){return b.distanceModel},set distanceModel(ee){b.distanceModel=ee},get inputs(){return[B]},get maxDistance(){return b.maxDistance},set maxDistance(ee){if(ee<0)throw new RangeError;b.maxDistance=ee},get numberOfInputs(){return b.numberOfInputs},get numberOfOutputs(){return b.numberOfOutputs},get orientationX(){return R.gain},get orientationY(){return O.gain},get orientationZ(){return F.gain},get panningModel(){return b.panningModel},set panningModel(ee){b.panningModel=ee},get positionX(){return U.gain},get positionY(){return Z.gain},get positionZ(){return W.gain},get refDistance(){return b.refDistance},set refDistance(ee){if(ee<0)throw new RangeError;b.refDistance=ee},get rolloffFactor(){return b.rolloffFactor},set rolloffFactor(ee){if(ee<0)throw new RangeError;b.rolloffFactor=ee},addEventListener(...ee){return B.addEventListener(ee[0],ee[1],ee[2])},dispatchEvent(...ee){return B.dispatchEvent(ee[0])},removeEventListener(...ee){return B.removeEventListener(ee[0],ee[1],ee[2])}};h!==Q.coneInnerAngle&&(Q.coneInnerAngle=h),d!==Q.coneOuterAngle&&(Q.coneOuterAngle=d),f!==Q.coneOuterGain&&(Q.coneOuterGain=f),g!==Q.distanceModel&&(Q.distanceModel=g),m!==Q.maxDistance&&(Q.maxDistance=m),p!==Q.orientationX.value&&(Q.orientationX.value=p),_!==Q.orientationY.value&&(Q.orientationY.value=_),M!==Q.orientationZ.value&&(Q.orientationZ.value=M),x!==Q.panningModel&&(Q.panningModel=x),S!==Q.positionX.value&&(Q.positionX.value=S),v!==Q.positionY.value&&(Q.positionY.value=v),T!==Q.positionZ.value&&(Q.positionZ.value=T),E!==Q.refDistance&&(Q.refDistance=E),w!==Q.rolloffFactor&&(Q.rolloffFactor=w),(z[0]!==1||z[1]!==0||z[2]!==0)&&b.setOrientation(...z),(le[0]!==0||le[1]!==0||le[2]!==0)&&b.setPosition(...le);const Se=()=>{B.connect(b),i(B,N,0,0),N.connect(R).connect(L,0,0),N.connect(O).connect(L,0,1),N.connect(F).connect(L,0,2),N.connect(U).connect(L,0,3),N.connect(Z).connect(L,0,4),N.connect(W).connect(L,0,5),L.connect(Y).connect(u.destination)},Fe=()=>{B.disconnect(b),o(B,N,0,0),N.disconnect(R),R.disconnect(L),N.disconnect(O),O.disconnect(L),N.disconnect(F),F.disconnect(L),N.disconnect(U),U.disconnect(L),N.disconnect(Z),Z.disconnect(L),N.disconnect(W),W.disconnect(L),L.disconnect(Y),Y.disconnect(u.destination)};return l(ps(Q,b),Se,Fe)},Yb=i=>(e,{disableNormalization:t,imag:n,real:r})=>{const s=n instanceof Float32Array?n:new Float32Array(n),a=r instanceof Float32Array?r:new Float32Array(r),o=e.createPeriodicWave(a,s,{disableNormalization:t});if(Array.from(n).length<2)throw i();return o},ba=(i,e,t,n)=>i.createScriptProcessor(e,t,n),jb=(i,e)=>(t,n)=>{const r=n.channelCountMode;if(r==="clamped-max")throw e();if(t.createStereoPanner===void 0)return i(t,n);const s=t.createStereoPanner();return Ct(s,n),ct(s,n,"pan"),Object.defineProperty(s,"channelCountMode",{get:()=>r,set:a=>{if(a!==r)throw e()}}),s},$b=(i,e,t,n,r,s)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(g,m,p,_)=>{const M=new Float32Array(16385),x=new Float32Array(16385);for(let y=0;y<16385;y+=1){const b=y/16384*c;M[y]=Math.cos(b),x[y]=Math.sin(b)}const S=t(g,{...l,gain:0}),v=n(g,{...u,curve:M}),T=n(g,{...u,curve:o}),E=t(g,{...l,gain:0}),w=n(g,{...u,curve:x});return{connectGraph(){m.connect(S),m.connect(T.inputs===void 0?T:T.inputs[0]),m.connect(E),T.connect(p),p.connect(v.inputs===void 0?v:v.inputs[0]),p.connect(w.inputs===void 0?w:w.inputs[0]),v.connect(S.gain),w.connect(E.gain),S.connect(_,0,0),E.connect(_,0,1)},disconnectGraph(){m.disconnect(S),m.disconnect(T.inputs===void 0?T:T.inputs[0]),m.disconnect(E),T.disconnect(p),p.disconnect(v.inputs===void 0?v:v.inputs[0]),p.disconnect(w.inputs===void 0?w:w.inputs[0]),v.disconnect(S.gain),w.disconnect(E.gain),S.disconnect(_,0,0),E.disconnect(_,0,1)}}},d=(g,m,p,_)=>{const M=new Float32Array(16385),x=new Float32Array(16385),S=new Float32Array(16385),v=new Float32Array(16385),T=Math.floor(16385/2);for(let U=0;U<16385;U+=1)if(U>T){const Z=(U-T)/(16384-T)*c;M[U]=Math.cos(Z),x[U]=Math.sin(Z),S[U]=0,v[U]=1}else{const Z=U/(16384-T)*c;M[U]=1,x[U]=0,S[U]=Math.cos(Z),v[U]=Math.sin(Z)}const E=e(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),w=t(g,{...l,gain:0}),y=n(g,{...u,curve:M}),b=t(g,{...l,gain:0}),D=n(g,{...u,curve:x}),L=n(g,{...u,curve:o}),B=t(g,{...l,gain:0}),R=n(g,{...u,curve:S}),O=t(g,{...l,gain:0}),F=n(g,{...u,curve:v});return{connectGraph(){m.connect(E),m.connect(L.inputs===void 0?L:L.inputs[0]),E.connect(w,0),E.connect(b,0),E.connect(B,1),E.connect(O,1),L.connect(p),p.connect(y.inputs===void 0?y:y.inputs[0]),p.connect(D.inputs===void 0?D:D.inputs[0]),p.connect(R.inputs===void 0?R:R.inputs[0]),p.connect(F.inputs===void 0?F:F.inputs[0]),y.connect(w.gain),D.connect(b.gain),R.connect(B.gain),F.connect(O.gain),w.connect(_,0,0),B.connect(_,0,0),b.connect(_,0,1),O.connect(_,0,1)},disconnectGraph(){m.disconnect(E),m.disconnect(L.inputs===void 0?L:L.inputs[0]),E.disconnect(w,0),E.disconnect(b,0),E.disconnect(B,1),E.disconnect(O,1),L.disconnect(p),p.disconnect(y.inputs===void 0?y:y.inputs[0]),p.disconnect(D.inputs===void 0?D:D.inputs[0]),p.disconnect(R.inputs===void 0?R:R.inputs[0]),p.disconnect(F.inputs===void 0?F:F.inputs[0]),y.disconnect(w.gain),D.disconnect(b.gain),R.disconnect(B.gain),F.disconnect(O.gain),w.disconnect(_,0,0),B.disconnect(_,0,0),b.disconnect(_,0,1),O.disconnect(_,0,1)}}},f=(g,m,p,_,M)=>{if(m===1)return h(g,p,_,M);if(m===2)return d(g,p,_,M);throw r()};return(g,{channelCount:m,channelCountMode:p,pan:_,...M})=>{if(p==="max")throw r();const x=i(g,{...M,channelCount:1,channelCountMode:p,numberOfInputs:2}),S=t(g,{...M,channelCount:m,channelCountMode:p,gain:1}),v=t(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:_});let{connectGraph:T,disconnectGraph:E}=f(g,m,S,v,x);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const w={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(L){S.channelCount!==L&&(y&&E(),{connectGraph:T,disconnectGraph:E}=f(g,L,S,v,x),y&&T()),S.channelCount=L},get channelCountMode(){return S.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw r();S.channelCountMode=L},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(L){S.channelInterpretation=L},get context(){return S.context},get inputs(){return[S]},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get pan(){return v.gain},addEventListener(...L){return S.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return S.dispatchEvent(L[0])},removeEventListener(...L){return S.removeEventListener(L[0],L[1],L[2])}};let y=!1;const b=()=>{T(),y=!0},D=()=>{E(),y=!1};return s(ps(w,x),b,D)}},Zb=(i,e,t,n,r,s,a)=>(o,c)=>{const l=o.createWaveShaper();if(s!==null&&s.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return t(o,c);Ct(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();et(l,{curve:u},"curve"),et(l,c,"oversample");let h=null,d=!1;return a(l,"curve",m=>()=>m.call(l),m=>p=>(m.call(l,p),d&&(n(p)&&h===null?h=i(o,l):!n(p)&&h!==null&&(h(),h=null)),p)),r(l,()=>{d=!0,n(l.curve)&&(h=i(o,l))},()=>{d=!1,h!==null&&(h(),h=null)})},Kb=(i,e,t,n,r)=>(s,{curve:a,oversample:o,...c})=>{const l=s.createWaveShaper(),u=s.createWaveShaper();Ct(l,c),Ct(u,c);const h=t(s,{...c,gain:1}),d=t(s,{...c,gain:-1}),f=t(s,{...c,gain:1}),g=t(s,{...c,gain:-1});let m=null,p=!1,_=null;const M={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){h.channelCount=v,d.channelCount=v,l.channelCount=v,f.channelCount=v,u.channelCount=v,g.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){h.channelCountMode=v,d.channelCountMode=v,l.channelCountMode=v,f.channelCountMode=v,u.channelCountMode=v,g.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){h.channelInterpretation=v,d.channelInterpretation=v,l.channelInterpretation=v,f.channelInterpretation=v,u.channelInterpretation=v,g.channelInterpretation=v},get context(){return l.context},get curve(){return _},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,u.curve=v;else{const T=v.length,E=new Float32Array(T+2-T%2),w=new Float32Array(T+2-T%2);E[0]=v[0],w[0]=-v[T-1];const y=Math.ceil((T+1)/2),b=(T+1)/2-1;for(let D=1;D<y;D+=1){const L=D/y*b,B=Math.floor(L),R=Math.ceil(L);E[D]=B===R?v[B]:(1-(L-B))*v[B]+(1-(R-L))*v[R],w[D]=B===R?-v[T-1-B]:-((1-(L-B))*v[T-1-B])-(1-(R-L))*v[T-1-R]}E[y]=T%2===1?v[y-1]:(v[y-2]+v[y-1])/2,l.curve=E,u.curve=w}_=v,p&&(n(_)&&m===null?m=i(s,h):m!==null&&(m(),m=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,u.oversample=v},addEventListener(...v){return h.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return h.dispatchEvent(v[0])},removeEventListener(...v){return h.removeEventListener(v[0],v[1],v[2])}};a!==null&&(M.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==M.oversample&&(M.oversample=o);const x=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(g).connect(f),p=!0,n(_)&&(m=i(s,h))},S=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(g),g.disconnect(f),p=!1,m!==null&&(m(),m=null)};return r(ps(M,f),x,S)},An=()=>new DOMException("","NotSupportedError"),Jb={numberOfChannels:1},Qb=(i,e,t,n,r)=>class extends i{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...Jb,...l},f=n(h,u,d);e(Ks,()=>Ks(f))||f.addEventListener("statechange",(()=>{let g=0;const m=p=>{this._state==="running"&&(g>0?(f.removeEventListener("statechange",m),p.stopImmediatePropagation(),this._waitForThePromiseToSettle(p)):g+=1)};return m})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",r(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,nE(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},eT={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},tT=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),h={...eT,...l},d=t(u,h),f=s(u),g=f?n():null,m=c.sampleRate/2;super(c,!1,d,g),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){cs(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),ci(this)&&no(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},nT=(i,e,t,n,r)=>()=>{const s=new WeakMap;let a=null,o=null,c=null;const l=async(u,h)=>{let d=t(u);const f=Xt(d,h);if(!f){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:a===null?void 0:a,type:d.type};d=e(h,g),o!==null&&d.start(o),c!==null&&d.stop(c)}return s.set(h,d),f?(await i(h,u.detune,d.detune),await i(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await r(u,h,d),d};return{set periodicWave(u){a=u},set start(u){o=u},set stop(u){c=u},render(u,h){const d=s.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},iT={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},rT=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),h={...iT,...l},d=t(u,h),f=s(u),g=f?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Yt,un),this._orientationY=e(this,f,d.orientationY,Yt,un),this._orientationZ=e(this,f,d.orientationZ,Yt,un),this._positionX=e(this,f,d.positionX,Yt,un),this._positionY=e(this,f,d.positionY,Yt,un),this._positionZ=e(this,f,d.positionZ,Yt,un),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},sT=(i,e,t,n,r,s,a,o,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,g)=>{let m=null,p=s(f);const _={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation},M={..._,coneInnerAngle:p.coneInnerAngle,coneOuterAngle:p.coneOuterAngle,coneOuterGain:p.coneOuterGain,distanceModel:p.distanceModel,maxDistance:p.maxDistance,panningModel:p.panningModel,refDistance:p.refDistance,rolloffFactor:p.rolloffFactor},x=Xt(p,g);if("bufferSize"in p)m=n(g,{..._,gain:1});else if(!x){const S={...M,orientationX:p.orientationX.value,orientationY:p.orientationY.value,orientationZ:p.orientationZ.value,positionX:p.positionX.value,positionY:p.positionY.value,positionZ:p.positionZ.value};p=r(g,S)}if(u.set(g,m===null?p:m),m!==null){if(h===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=new a(6,f.context.length,g.sampleRate),L=e(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});L.connect(D.destination),h=(async()=>{const B=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(R,O)=>{const F=t(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:O===0?1:0});return await o(D,R,F.offset),F}));for(let R=0;R<6;R+=1)B[R].connect(L,0,R),B[R].start(0);return l(D)})()}const S=await h,v=n(g,{..._,gain:1});await c(f,g,v);const T=[];for(let D=0;D<S.numberOfChannels;D+=1)T.push(S.getChannelData(D));let E=[T[0][0],T[1][0],T[2][0]],w=[T[3][0],T[4][0],T[5][0]],y=n(g,{..._,gain:1}),b=r(g,{...M,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:w[0],positionY:w[1],positionZ:w[2]});v.connect(y).connect(b.inputs[0]),b.connect(m);for(let D=128;D<S.length;D+=128){const L=[T[0][D],T[1][D],T[2][D]],B=[T[3][D],T[4][D],T[5][D]];if(L.some((R,O)=>R!==E[O])||B.some((R,O)=>R!==w[O])){E=L,w=B;const R=D/g.sampleRate;y.gain.setValueAtTime(0,R),y=n(g,{..._,gain:0}),b=r(g,{...M,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:w[0],positionY:w[1],positionZ:w[2]}),y.gain.setValueAtTime(1,R),v.connect(y).connect(b.inputs[0]),b.connect(m)}}return m}return x?(await i(g,f.orientationX,p.orientationX),await i(g,f.orientationY,p.orientationY),await i(g,f.orientationZ,p.orientationZ),await i(g,f.positionX,p.positionX),await i(g,f.positionY,p.positionY),await i(g,f.positionZ,p.positionZ)):(await o(g,f.orientationX,p.orientationX),await o(g,f.orientationY,p.orientationY),await o(g,f.orientationZ,p.orientationZ),await o(g,f.positionX,p.positionX),await o(g,f.positionY,p.positionY),await o(g,f.positionZ,p.positionZ)),fs(p)?await c(f,g,p.inputs[0]):await c(f,g,p),p};return{render(f,g){const m=u.get(g);return m!==void 0?Promise.resolve(m):d(f,g)}}},oT={disableNormalization:!1},aT=(i,e,t,n)=>class yp{constructor(s,a){const o=e(s),c=n({...oT,...a}),l=i(o,c);return t.add(l),l}static[Symbol.hasInstance](s){return s!==null&&typeof s=="object"&&Object.getPrototypeOf(s)===yp.prototype||t.has(s)}},cT=(i,e)=>(t,n,r)=>(i(n).replay(r),e(n,t,r)),lT=(i,e,t)=>async(n,r,s)=>{const a=i(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,u])=>{const d=await e(l).render(l,r),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(s,u,c)})).reduce((o,c)=>[...o,...c],[]))},uT=(i,e,t)=>async(n,r,s)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const u=await i(o).render(o,r);t(o)||u.connect(s,c)}))},hT=(i,e,t,n)=>r=>i(Ks,()=>Ks(r))?Promise.resolve(i(n,n)).then(s=>{if(!s){const a=t(r,512,0,1);r.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>r.currentTime,a.connect(r.destination)}return r.startRendering()}):new Promise(s=>{const a=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});r.oncomplete=o=>{a.disconnect(),s(o.renderedBuffer)},a.connect(r.destination),r.startRendering()}),dT=i=>(e,t)=>i.set(e,t),fT=(i,e,t,n,r,s,a,o)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>r(l)).then(u=>(typeof u.copyFromChannel!="function"?(a(u),Ll(u)):e(s,()=>s(u))||o(u),i.add(u),u)),pT={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},mT=(i,e,t,n,r,s)=>class extends i{constructor(o,c){const l=r(o),u={...pT,...c},h=t(l,u),d=s(l),f=d?n():null;super(o,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},_T=(i,e,t,n,r)=>()=>{const s=new WeakMap,a=async(o,c)=>{let l=t(o);const u=Xt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return s.set(c,l),u?await i(c,o.pan,l.pan):await n(c,o.pan,l.pan),fs(l)?await r(o,c,l.inputs[0]):await r(o,c,l),l};return{render(o,c){const l=s.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},gT=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},vT=(i,e)=>async()=>{if(i===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),r=URL.createObjectURL(t);let s=!1,a=!1;try{await n.audioWorklet.addModule(r);const o=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>s=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(r)}return s&&!a},xT=(i,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(r=>{t.oncomplete=()=>{n.disconnect(),r(t.currentTime!==0)},t.startRendering()})},yT={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},ST=(i,e,t,n,r,s,a)=>class extends i{constructor(c,l){const u=r(c),h={...yT,...l},d=t(u,h),g=s(u)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},MT=(i,e,t)=>()=>{const n=new WeakMap,r=async(s,a)=>{let o=e(s);if(!Xt(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=i(a,l)}return n.set(a,o),fs(o)?await t(s,a,o.inputs[0]):await t(s,a,o),o};return{render(s,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):r(s,a)}}},ET=()=>typeof window>"u"?null:window,bT=(i,e)=>t=>{t.copyFromChannel=(n,r,s=0)=>{const a=i(s),o=i(r);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)n[h]=l[h+a]},t.copyToChannel=(n,r,s=0)=>{const a=i(s),o=i(r);if(o>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(o),u=n.length;for(let h=a<0?-a:0;h+a<c&&h<u;h+=1)l[h+a]=n[h]}},TT=i=>e=>{e.copyFromChannel=(t=>(n,r,s=0)=>{const a=i(s),o=i(r);if(a<e.length)return t.call(e,n,o,a)})(e.copyFromChannel),e.copyToChannel=(t=>(n,r,s=0)=>{const a=i(s),o=i(r);if(a<e.length)return t.call(e,n,o,a)})(e.copyToChannel)},wT=i=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),i(e,"buffer",r=>()=>{const s=r.call(e);return s===n?null:s},r=>s=>r.call(e,s===null?n:s))},AT=(i,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const r=t.createBufferSource();e(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)r.connect(n,0,c)},()=>r.disconnect(n))},Sp=(i,e,t)=>i.copyFromChannel===void 0?i.getChannelData(t)[0]:(i.copyFromChannel(e,t),e[0]),Mp=i=>{if(i===null)return!1;const e=i.length;return e%2!==0?i[Math.floor(e/2)]!==0:i[e/2-1]+i[e/2]!==0},so=(i,e,t,n)=>{let r=i;for(;!r.hasOwnProperty(e);)r=Object.getPrototypeOf(r);const{get:s,set:a}=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(i,e,{get:t(s),set:n(a)})},CT=i=>({...i,channelCount:i.numberOfOutputs}),RT=i=>{const{imag:e,real:t}=i;return e===void 0?t===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(t,()=>0),real:t}:t===void 0?{...i,imag:e,real:Array.from(e,()=>0)}:{...i,imag:e,real:t}},Ep=(i,e,t)=>{try{i.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;Ep(i,e,t+1e-7)}},PT=i=>{const e=i.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},LT=i=>{const e=i.createBufferSource(),t=i.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},DT=i=>{const e=i.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Fl=i=>{const e=i.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},bp=i=>{const e=i.createBuffer(1,1,44100),t=i.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Bl=i=>{const e=i.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},NT=i=>{i.start=(e=>(t=0,n=0,r)=>{const s=i.buffer,a=s===null?n:Math.min(s.duration,n);s!==null&&a>s.duration-.5/i.context.sampleRate?e.call(i,t,0,0):e.call(i,t,a,r)})(i.start)},Tp=(i,e)=>{const t=e.createGain();i.connect(t);const n=(r=>()=>{r.call(i,t),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),ps(i,t),i.stop=(r=>{let s=!1;return(a=0)=>{if(s)try{r.call(i,a)}catch{t.gain.setValueAtTime(0,a)}else r.call(i,a),s=!0}})(i.stop)},oo=(i,e)=>t=>{const n={value:i};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(i,t):e.handleEvent.call(i,t)},IT=IM(yr),OT=zM(yr),UT=WE(Ma),wp=new WeakMap,FT=sb(wp),Fn=SE(new Map,new WeakMap),jn=ET(),Ap=Tb(Fn,xr),kl=rb(pn),Ft=lT(pn,kl,mr),BT=WM(Ap,st,Ft),ft=ab(cp),Hi=Hb(jn),ut=yb(Hi),Cp=new WeakMap,Rp=JE(oo),Ta=Rb(jn),Pp=_b(Ta),Lp=gb(jn),kT=vb(jn),el=Lb(jn),Bt=pE(OM(rp),kM(IT,OT,da,UT,fa,pn,FT,to,st,yr,ci,mr,Xo),Fn,mb(Kc,fa,pn,st,Zs,ci),xr,Ea,An,zE(da,Kc,pn,st,Zs,ft,ci,ut),qE(Cp,pn,Gi),Rp,ft,Pp,Lp,kT,ut,el),zT=HM(Bt,BT,xr,Ap,ft,ut),zl=new WeakSet,_d=wb(jn),Dp=NE(new Uint32Array(1)),Vl=bT(Dp,xr),Gl=TT(Dp),VT=qM(zl,Fn,An,_d,Hi,gT(_d),Vl,Gl),wa=VM(In),Np=uT(kl,io,mr),fi=CE(Np),ao=Cb(wa,Fn,PT,LT,DT,Fl,bp,Bl,NT,wT(so),Tp),pi=cT(ob(io),Np),GT=$M(fi,ao,st,pi,Ft),$n=mE(UM(op),Cp,ap,_E,CM,RM,PM,LM,DM,jc,tp,Ta,Ep),HT=jM(Bt,GT,$n,en,ao,ft,ut,oo),WT=iE(Bt,rE,xr,en,Pb(In,so),ft,ut,Ft),XT=yE(fi,vp,st,pi,Ft),Sr=dT(wp),qT=xE(Bt,$n,XT,Ea,vp,ft,ut,Sr),ms=Eb(yr,Lp),YT=AT(en,ms),_s=Nb(Ta,YT),jT=bE(_s,st,Ft),$T=EE(Bt,jT,_s,ft,ut),ZT=AE(Ul,st,Ft),KT=wE(Bt,ZT,Ul,ft,ut,CT),JT=Ub(wa,ao,In,ms),Aa=Ob(wa,Fn,JT,Fl,Bl),QT=DE(fi,Aa,st,pi,Ft),ew=LE(Bt,$n,QT,Aa,ft,ut,oo),Ip=Fb(An,so),tw=UE(Ip,st,Ft),nw=OE(Bt,tw,Ip,ft,ut,Sr),iw=HE(fi,xp,st,pi,Ft),rw=GE(Bt,$n,iw,xp,ft,ut,Sr),Op=Bb(An),sw=$E(fi,Op,st,pi,Ft),ow=jE(Bt,$n,sw,Op,An,ft,ut,Sr),aw=ib(fi,In,st,pi,Ft),cw=nb(Bt,$n,aw,In,ft,ut),lw=Gb(Ea,en,ba,An),Hl=hT(Fn,In,ba,xT(In,Hi)),uw=pb(ao,st,Hi,Ft,Hl),hw=kb(lw),dw=db(Bt,hw,uw,ft,ut,Sr),fw=sE($n,_s,Aa,ba,An,Sp,ut,so),Up=new WeakMap,pw=Mb(WT,fw,Rp,ut,Up,oo),Fp=Wb(wa,Fn,Fl,bp,Bl,Tp),mw=nT(fi,Fp,st,pi,Ft),_w=tT(Bt,$n,Fp,mw,ft,ut,oo),Bp=RE(ao),gw=Kb(Bp,en,In,Mp,ms),Ca=Zb(Bp,en,gw,Mp,ms,Ta,so),vw=qb(da,en,_s,In,ba,Ca,An,fa,Sp,ms),kp=Xb(vw),xw=sT(fi,_s,Aa,In,kp,st,Hi,pi,Ft,Hl),yw=rT(Bt,$n,kp,xw,ft,ut,Sr),Sw=Yb(xr),Mw=aT(Sw,ft,new WeakSet,RT),Ew=$b(_s,Ul,In,Ca,An,ms),zp=jb(Ew,An),bw=_T(fi,zp,st,pi,Ft),Tw=mT(Bt,$n,zp,bw,ft,ut),ww=MT(Ca,st,Ft),Aw=ST(Bt,en,Ca,ww,ft,ut,Sr),Cw=Sb(jn),Rw=QE(jn),Pw=new WeakMap,Lw=cb(Pw,Hi),Dw=Cw?BM(Fn,An,KE(jn),Rw,eb(NM),ft,Lw,ut,el,new WeakMap,new WeakMap,vT(el,Hi),jn):void 0,Nw=xb(Pp,ut),Iw=kE(zl,Fn,BE,ZE,new WeakSet,ft,Nw,ua,Ks,Vl,Gl),Ow=gE(Dw,zT,VT,HT,qT,$T,KT,ew,nw,Iw,rw,ow,cw,dw,pw,_w,yw,Mw,Tw,Aw),Uw=lb(Up),Fw=FE(An,Hi),Bw=fT(zl,Fn,kl,Uw,Hl,ua,Vl,Gl),kw=Qb(Ow,Fn,en,Fw,Bw),gd=(i,e,t)=>{const n=new kw(i.numberOfChannels,Math.round(t*i.sampleRate),i.sampleRate),r=n.createBiquadFilter(),s=n.createBufferSource();return r.frequency.value=240,r.type="lowpass",s.buffer=i,s.connect(r).connect(n.destination),s.start(0,e,t),n.startRendering().then(a=>{const o=a.getChannelData(0),c=a.sampleRate;return{channelData:o,sampleRate:c}})},zw=bM({analyze:({call:i})=>async(...e)=>{var t;const[n,r,s]=e,a=typeof r=="number"?r:0,o=typeof s=="number"?s:n.duration-a,{channelData:c,sampleRate:l}=await gd(n,a,o),u=typeof r=="object"?r:typeof s=="object"?s:(t=e[3])!==null&&t!==void 0?t:null;return i("analyze",{channelData:c,sampleRate:l,...u===null?u:{tempoSettings:u}},[c.buffer])},guess:({call:i})=>async(...e)=>{var t;const[n,r,s]=e,a=typeof r=="number"?r:0,o=typeof s=="number"?s:n.duration-a,{channelData:c,sampleRate:l}=await gd(n,a,o),u=typeof r=="object"?r:typeof s=="object"?s:(t=e[3])!==null&&t!==void 0?t:null;return i("guess",{channelData:c,sampleRate:l,...u===null?u:{tempoSettings:u}},[c.buffer])}}),Vw=i=>{const e=new Worker(i);return zw(e)},Gw=(i,e)=>{let t=null;return()=>{if(t!==null)return t;const n=new Blob([e],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return t=i(r),setTimeout(()=>URL.revokeObjectURL(r)),t}},Hw=`(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=a(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:c}})=>{const u=r[i];try{if(void 0===u)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?u():u(c);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const c=new Map,u=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(c);return c.set(o,()=>{n(),t.close(),c.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=u(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},h=(e,t,r)=>{const n=e.length,o=[];let s=!1;for(let a=0;a<n;a+=1)e[a]>t?s=!0:s&&(s=!1,o.push(a-1),a+=r/4-1);return s&&o.push(n-1),o},d=(e,t,r)=>{const n=(e=>{let t=0;const r=e.length;for(let n=0;n<r;n+=1)e[n]>t&&(t=e[n]);return t})(e),o=.3*n;let s=[],a=n-.05*n;if(n>.25)for(;s.length<30&&a>=o;)s=h(e,a,t),a-=.05*n;const i=(e=>{const t=[];return e.forEach((r,n)=>{const o=Math.min(e.length-n,10);for(let s=1;s<o;s+=1){const o=e[n+s]-r;t.some(e=>e.interval===o&&(e.peaks.push(r),!0))||t.push({interval:o,peaks:[r]})}}),t})(s),c=((e,t,r={})=>{var n,o;const s=Math.max(0,null!==(n=r.maxTempo)&&void 0!==n?n:180),a=Math.max(0,null!==(o=r.minTempo)&&void 0!==o?o:90),i=[];return e.forEach(e=>{let r=60/(e.interval/t);for(;r<a;)r*=2;for(;r>s;)r/=2;if(r<a)return;let n=!1,o=e.peaks.length;i.forEach(t=>{if(t.tempo===r&&(t.score+=e.peaks.length,t.peaks=[...t.peaks,...e.peaks],n=!0),t.tempo>r-.5&&t.tempo<r+.5){const n=2*Math.abs(t.tempo-r);o+=(1-n)*t.peaks.length,t.score+=(1-n)*e.peaks.length}}),n||i.push({peaks:e.peaks,score:o,tempo:r})}),i})(i,t,r);return c.sort((e,t)=>t.score-e.score),c},p=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");return n[0].tempo},f=(e,t,r)=>{const n=d(e,t,r);if(0===n.length)throw new Error("The given channelData does not contain any detectable beats.");const{peaks:o,tempo:s}=n[0],a=Math.round(s),i=60/a;o.sort((e,t)=>e-t);let c=o[0]/t;for(;c>i;)c-=i;return{bpm:a,offset:c,tempo:s}};l(self,{analyze:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:p(e,t,r)}),guess:({channelData:e,sampleRate:t,tempoSettings:r})=>({result:f(e,t,r)})})})()})();`,Ww=Gw(Vw,Hw),Xw=(...i)=>Ww().guess(...i);class qw extends _r{constructor(){super(),this.interval=500,this.intervalId=null,this.bpmValue=0}setBPM(e){this.interval=6e4/e,clearInterval(this.intervalId),this.intervalId=setInterval(this.updateBPM.bind(this),this.interval)}updateBPM(){this.dispatchEvent({type:"beat"})}async detectBPM(e){const{bpm:t}=await Xw(e);this.setBPM(t),console.log(`BPM detected: ${t}`)}getBPMDuration(){return this.interval}}class Yw{constructor(){this.frequencyArray=[],this.frequencyData={low:0,mid:0,high:0},this.isPlaying=!1,this.lowFrequency=10,this.midFrequency=150,this.highFrequency=9e3,this.smoothedLowFrequency=0,this.audioContext=null,this.song={url:"https://p.scdn.co/mp3-preview/3be3fb77f5b2945c95e86d4c40ceceac20e5108f?cid=b62f0af3b0d54eca9bb49b99a2fc5820"}}async loadAudioBuffer(){return new Promise(async(t,n)=>{const r=new Ey;this.audio=new by(r),new yy().load(this.song.url,a=>{this.audio.setBuffer(a),this.audio.setLoop(!0),this.audio.setVolume(.5),this.audioContext=this.audio.context,this.bufferLength=this.audioAnalyser.data.length,t()}),this.audioAnalyser=new Ty(this.audio,1024)})}play(){this.audio.play(),this.isPlaying=!0}pause(){this.audio.pause(),this.isPlaying=!1}collectAudioData(){this.frequencyArray=this.audioAnalyser.getFrequencyData()}analyzeFrequency(){const e=Math.floor(this.lowFrequency*this.bufferLength/this.audioContext.sampleRate),t=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),n=Math.floor(this.midFrequency*this.bufferLength/this.audioContext.sampleRate),r=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),s=Math.floor(this.highFrequency*this.bufferLength/this.audioContext.sampleRate),a=this.bufferLength-1,o=this.normalizeValue(this.calculateAverage(this.frequencyArray,e,t)),c=this.normalizeValue(this.calculateAverage(this.frequencyArray,n,r)),l=this.normalizeValue(this.calculateAverage(this.frequencyArray,s,a));this.frequencyData={low:o,mid:c,high:l}}calculateAverage(e,t,n){let r=0;for(let s=t;s<=n;s++)r+=e[s];return r/(n-t+1)}normalizeValue(e){return e/256}update(){this.isPlaying&&(this.collectAudioData(),this.analyzeFrequency())}}const xt=class xt{constructor(){this.onClickBinder=()=>this.init(),document.addEventListener("click",this.onClickBinder)}init(){document.removeEventListener("click",this.onClickBinder),this.renderer=new Yd({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.autoClear=!1,document.querySelector(".content").appendChild(this.renderer.domElement),this.camera=new En(70,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.z=12,this.camera.frustumCulled=!1,this.scene=new py,this.scene.add(this.camera),xt.holder=new vt,xt.holder.name="holder",this.scene.add(xt.holder),xt.holder.sortObjects=!1,xt.gui=new mM,this.createManagers(),this.resize(),window.addEventListener("resize",()=>this.resize())}async createManagers(){xt.audioManager=new Yw,await xt.audioManager.loadAudioBuffer(),xt.bpmManager=new qw,xt.bpmManager.addEventListener("beat",()=>{this.particles.onBPMBeat()}),await xt.bpmManager.detectBPM(xt.audioManager.audio.buffer),document.querySelector(".user_interaction").remove(),xt.audioManager.play(),this.particles=new YS,this.particles.init(),this.update()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}update(){var e;requestAnimationFrame(()=>this.update()),(e=this.particles)==null||e.update(),xt.audioManager.update(),this.renderer.render(this.scene,this.camera)}};vs(xt,"holder",null),vs(xt,"gui",null),vs(xt,"audioManager",null),vs(xt,"bpmManager",null);let cn=xt;new cn;
