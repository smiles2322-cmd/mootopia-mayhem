var Cf=0,wu=1,Pf=2;var eo=1,If=2,Br=3,ss=0,rn=1,It=2,Wn=0,rs=1,an=2,Eu=3,Tu=4,Lf=5;var Is=100,Df=101,Nf=102,Uf=103,Ff=104,Bf=200,Of=201,kf=202,zf=203,Au=204,Ru=205,Hf=206,Gf=207,Vf=208,Wf=209,Xf=210,qf=211,$f=212,Yf=213,Zf=214,vl=0,yl=1,bl=2,yr=3,Ml=4,Sl=5,wl=6,El=7,Cu=0,Jf=1,Kf=2,ii=0,to=1,no=2,io=3,Ls=4,so=5,ro=6,ao=7;var Pu=300,as=301,Ds=302,sc=303,rc=304,oo=306,Tl=1e3,di=1001,Al=1002,tn=1003,jf=1004;var lo=1005;var sn=1006,ac=1007;var os=1008;var Mn=1009,Iu=1010,Lu=1011,Or=1012,oc=1013,si=1014,Xn=1015,on=1016,lc=1017,cc=1018,kr=1020,Du=35902,Nu=35899,Uu=1021,Fu=1022,qn=1023,fi=1026,ls=1027,hc=1028,uc=1029,cs=1030,dc=1031;var fc=1033,co=33776,ho=33777,uo=33778,fo=33779,pc=35840,mc=35841,gc=35842,xc=35843,_c=36196,vc=37492,yc=37496,bc=37488,Mc=37489,po=37490,Sc=37491,wc=37808,Ec=37809,Tc=37810,Ac=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Lc=37816,Dc=37817,Nc=37818,Uc=37819,Fc=37820,Bc=37821,Oc=36492,kc=36494,zc=36495,Hc=36283,Gc=36284,mo=36285,Vc=36286;var ba=2300,Rl=2301,gl=2302,du=2303,fu=2400,pu=2401,mu=2402;var Qf=3200;var Wc=0,ep=1,Ni="",xn="srgb",Ma="srgb-linear",Sa="linear",xt="srgb";var xl=7680;var tp=519,np=512,ip=513,sp=514,Xc=515,rp=516,ap=517,qc=518,op=519,Bu=35044;var Ou="300 es",ei=2e3,br=2001;function y0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function b0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=Mr("canvas");return i.style.display="block",i}var qd={},Sr=null;function wa(...i){let e="THREE."+i.shift();Sr?Sr("log",e,...i):console.log(e,...i)}function cp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=cp(i);let e="THREE."+i.shift();if(Sr)Sr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=cp(i);let e="THREE."+i.shift();if(Sr)Sr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ts(...i){let e=i.join(" ");e in qd||(qd[e]=!0,qe(...i))}function hp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var up={[vl]:yl,[bl]:wl,[Ml]:El,[yr]:Sl,[yl]:vl,[wl]:bl,[El]:Ml,[Sl]:yr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oh=Math.PI/180,Cl=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function M0(i,e){return(i%e+e)%e}function kh(i,e,t){return(1-t)*i+t*e}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+_*o;let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zh.copy(this).projectOnVector(e),this.sub(zh)}reflect(e){return this.sub(zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zh=new L,$d=new bn,Qe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],T=s[4],y=s[7],A=s[2],E=s[5],P=s[8];return r[0]=a*_+o*b+c*A,r[3]=a*g+o*T+c*E,r[6]=a*p+o*y+c*P,r[1]=l*_+h*b+u*A,r[4]=l*g+h*T+u*E,r[7]=l*p+h*y+u*P,r[2]=d*_+f*b+m*A,r[5]=d*g+f*T+m*E,r[8]=d*p+f*y+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hh.makeScale(e,t)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hh.makeRotation(-e)),this}translate(e,t){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hh=new Qe,Yd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){let i={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ma]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:Yd,fromXYZ:Zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Yd,fromXYZ:Zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var ct=S0();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,Pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Mr("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},w0=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gh(s[a].image)):r.push(Gh(s[a]))}else r=Gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var E0=0,Vh=new L,dn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=sn,a=os,o=qn,c=Mn,l=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Pi(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Pu;dn.DEFAULT_ANISOTROPY=1;var Bt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,y=(f+1)/2,A=(p+1)/2,E=(h+d)/4,P=(u+_)/4,v=(m+g)/4;return T>y&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=P/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=v/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ea=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ll=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ft=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T0,e,A0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Xi.crossVectors(n,Rn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Xi.crossVectors(n,Rn)),Xi.normalize(),Ho.crossVectors(Rn,Xi),s[0]=Xi.x,s[4]=Ho.x,s[8]=Rn.x,s[1]=Xi.y,s[5]=Ho.y,s[9]=Rn.y,s[2]=Xi.z,s[6]=Ho.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],T=n[7],y=n[11],A=n[15],E=s[0],P=s[4],v=s[8],R=s[12],I=s[1],U=s[5],G=s[9],X=s[13],B=s[2],W=s[6],J=s[10],Q=s[14],F=s[3],O=s[7],H=s[11],Y=s[15];return r[0]=a*E+o*I+c*B+l*F,r[4]=a*P+o*U+c*W+l*O,r[8]=a*v+o*G+c*J+l*H,r[12]=a*R+o*X+c*Q+l*Y,r[1]=h*E+u*I+d*B+f*F,r[5]=h*P+u*U+d*W+f*O,r[9]=h*v+u*G+d*J+f*H,r[13]=h*R+u*X+d*Q+f*Y,r[2]=m*E+_*I+g*B+p*F,r[6]=m*P+_*U+g*W+p*O,r[10]=m*v+_*G+g*J+p*H,r[14]=m*R+_*X+g*Q+p*Y,r[3]=b*E+T*I+y*B+A*F,r[7]=b*P+T*U+y*W+A*O,r[11]=b*v+T*G+y*J+A*H,r[15]=b*R+T*X+y*Q+A*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],b=c*f-l*d,T=o*f-l*u,y=o*d-c*u,A=a*f-l*h,E=a*d-c*h,P=a*u-o*h;return t*(_*b-g*T+p*y)-n*(m*b-g*A+p*E)+s*(m*T-_*A+p*P)-r*(m*y-_*E+g*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],b=t*o-n*a,T=t*c-s*a,y=t*l-r*a,A=n*c-s*o,E=n*l-r*o,P=s*l-r*c,v=h*_-u*m,R=h*g-d*m,I=h*p-f*m,U=u*g-d*_,G=u*p-f*_,X=d*p-f*g,B=b*X-T*G+y*U+A*I-E*R+P*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/B;return e[0]=(o*X-c*G+l*U)*W,e[1]=(s*G-n*X-r*U)*W,e[2]=(_*P-g*E+p*A)*W,e[3]=(d*E-u*P-f*A)*W,e[4]=(c*I-a*X-l*R)*W,e[5]=(t*X-s*I+r*R)*W,e[6]=(g*y-m*P-p*T)*W,e[7]=(h*P-d*y+f*T)*W,e[8]=(a*G-o*I+l*v)*W,e[9]=(n*I-t*G-r*v)*W,e[10]=(m*E-_*y+p*b)*W,e[11]=(u*y-h*E-f*b)*W,e[12]=(o*R-a*U-c*v)*W,e[13]=(t*U-n*R+s*v)*W,e[14]=(_*T-m*A-g*b)*W,e[15]=(h*A-u*T+d*b)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,b=c*l,T=c*h,y=c*u,A=n.x,E=n.y,P=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+y)*A,s[2]=(m-T)*A,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(d+p))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(m+T)*P,s[9]=(g-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=tr.set(s[0],s[1],s[2]).length(),o=tr.set(s[4],s[5],s[6]).length(),c=tr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let l=1/a,h=1/o,u=1/c;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=ei,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===ei)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===br)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===ei)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===br)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new L,Jn=new ft,T0=new L(0,0,0),A0=new L(1,1,1),Xi=new L,Ho=new L,Rn=new L,Jd=new ft,Kd=new bn,Pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},R0=0,jd=new L,nr=new bn,wi=new ft,Go=new L,la=new L,C0=new L,P0=new bn,Qd=new L(1,0,0),ef=new L(0,1,0),tf=new L(0,0,1),nf={type:"added"},I0={type:"removed"},ir={type:"childadded",child:null},Wh={type:"childremoved",child:null},$t=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Pn,n=new bn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(la,Go,this.up):wi.lookAt(Go,la,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(wi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),ir.child=e,this.dispatchEvent(ir),ir.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new L(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},L0={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Xh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=M0(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xh(a,r,e+1/3),this.g=Xh(a,r,e),this.b=Xh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=xn){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return ct.workingToColorSpace(hn.copy(this),e),Math.round(ht(hn.r*255,0,255))*65536+Math.round(ht(hn.g*255,0,255))*256+Math.round(ht(hn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=xn){ct.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Vo);let n=kh(qi.h,Vo.h,t),s=kh(qi.s,Vo.s,t),r=kh(qi.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new me;me.NAMES=dp;var Aa=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ra=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new L,Ei=new L,qh=new L,Ti=new L,sr=new L,rr=new L,sf=new L,$h=new L,Yh=new L,Zh=new L,Jh=new Bt,Kh=new Bt,jh=new Bt,Ci=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Ei.subVectors(n,t),qh.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Ei),c=Kn.dot(qh),l=Ei.dot(Ei),h=Ei.dot(qh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(a,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Jh.setScalar(0),Kh.setScalar(0),jh.setScalar(0),Jh.fromBufferAttribute(e,t),Kh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jh,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Ei.subVectors(e,t),Kn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,n),rr.subVectors(r,n),$h.subVectors(e,n);let c=sr.dot($h),l=rr.dot($h);if(c<=0&&l<=0)return t.copy(n);Yh.subVectors(e,s);let h=sr.dot(Yh),u=rr.dot(Yh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(sr,a);Zh.subVectors(e,r);let f=sr.dot(Zh),m=rr.dot(Zh);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(rr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return sf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(sf,o);let p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Xo.subVectors(this.max,ca),ar.subVectors(e.a,ca),or.subVectors(e.b,ca),lr.subVectors(e.c,ca),$i.subVectors(or,ar),Yi.subVectors(lr,or),bs.subVectors(ar,lr);let t=[0,-$i.z,$i.y,0,-Yi.z,Yi.y,0,-bs.z,bs.y,$i.z,0,-$i.x,Yi.z,0,-Yi.x,bs.z,0,-bs.x,-$i.y,$i.x,0,-Yi.y,Yi.x,0,-bs.y,bs.x,0];return!Qh(t,ar,or,lr,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Qh(t,ar,or,lr,Xo))?!1:(qo.crossVectors($i,Yi),t=[qo.x,qo.y,qo.z],Qh(t,ar,or,lr,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,Wo=new mi,ar=new L,or=new L,lr=new L,$i=new L,Yi=new L,bs=new L,ca=new L,Xo=new L,qo=new L,Ms=new L;function Qh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ms.fromArray(i,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=e.dot(Ms),l=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wt=new L,$o=new oe,D0=0,Nt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ca=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},N0=new mi,ha=new L,eu=new L,gi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):N0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(eu)),this.expandByPoint(ha.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},U0=0,Gn=new ft,tu=new $t,cr=new L,Cn=new mi,ua=new mi,en=new L,gt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?Pa:Ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Cn.min,ua.min),Cn.expandByPoint(en),en.addVectors(Cn.max,ua.max),Cn.expandByPoint(en)):(Cn.expandByPoint(ua.min),Cn.expandByPoint(ua.max))}Cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(cr.fromBufferAttribute(e,l),en.add(cr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new L,c[v]=new L;let l=new L,h=new L,u=new L,d=new oe,f=new oe,m=new oe,_=new L,g=new L;function p(v,R,I){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,I),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(U),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(U),o[v].add(_),o[R].add(_),o[I].add(_),c[v].add(g),c[R].add(g),c[I].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,R=b.length;v<R;++v){let I=b[v],U=I.start,G=I.count;for(let X=U,B=U+G;X<B;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let T=new L,y=new L,A=new L,E=new L;function P(v){A.fromBufferAttribute(s,v),E.copy(A);let R=o[v];T.copy(R),T.sub(A.multiplyScalar(A.dot(R))).normalize(),y.crossVectors(E,R);let U=y.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,U)}for(let v=0,R=b.length;v<R;++v){let I=b[v],U=I.start,G=I.count;for(let X=U,B=U+G;X<B;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Nt(d,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},gn=new L,Ia=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new L,F0=new L,B0=new Qe,Qn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=nu.subVectors(n,t).cross(F0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||B0.getNormalMatrix(e),s=this.coplanarPoint(nu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},O0=0,ti=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=rs,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Li=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,da=new L,ur=new L,dr=new L,fr=new oe,fa=new oe,fp=new ft,Yo=new L,pa=new L,Zo=new L,rf=new oe,iu=new oe,af=new oe,Ji=class extends $t{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dl(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Ia(n,3,0,!1)),hr.setAttribute("uv",new Ia(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jo(Yo.set(-.5,-.5,0),dr,a,ur,s,r),Jo(pa.set(.5,-.5,0),dr,a,ur,s,r),Jo(Zo.set(.5,.5,0),dr,a,ur,s,r),rf.set(0,0),iu.set(1,0),af.set(1,1);let o=e.ray.intersectTriangle(Yo,pa,Zo,!1,da);if(o===null&&(Jo(pa.set(-.5,.5,0),dr,a,ur,s,r),iu.set(0,1),o=e.ray.intersectTriangle(Yo,Zo,pa,!1,da),o===null))return;let c=e.ray.origin.distanceTo(da);c<e.near||c>e.far||t.push({distance:c,point:da.clone(),uv:Ci.getInterpolation(da,Yo,pa,Zo,rf,iu,af,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jo(i,e,t,n,s,r){fr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fa.x=r*fr.x-s*fr.y,fa.y=s*fr.x+r*fr.y):fa.copy(fr),i.copy(e),i.x+=fa.x,i.y+=fa.y,i.applyMatrix4(fp)}var Ri=new L,su=new L,Ko=new L,jo=new L,Tr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){su.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),jo.copy(this.origin).sub(su);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ko),o=jo.dot(this.direction),c=-jo.dot(Ko),l=jo.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(su).addScaledVector(Ko,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,b=n.y-a.y,T=n.z-a.z,y=Math.abs(c),A=Math.abs(l),E=Math.abs(h),P,v,R,I,U,G,X,B,W,J,Q,F;if(y>=A&&y>=E?(R=c,G=u,W=m,F=p,c>=0?(P=l,v=h,I=d,U=f,X=_,B=g,J=b,Q=T):(P=h,v=l,I=f,U=d,X=g,B=_,J=T,Q=b)):A>=E?(R=l,G=d,W=_,F=b,l>=0?(P=h,v=c,I=f,U=u,X=g,B=m,J=T,Q=p):(P=c,v=h,I=u,U=f,X=m,B=g,J=p,Q=T)):(R=h,G=f,W=g,F=T,h>=0?(P=c,v=l,I=u,U=d,X=m,B=_,J=p,Q=b):(P=l,v=c,I=d,U=u,X=_,B=m,J=b,Q=p)),R===0)return null;let O=P/R,H=v/R,Y=1/R,he=I-O*G,ue=U-H*G,it=X-O*W,je=B-H*W,rt=J-O*F,D=Q-H*F,ee=rt*je-D*it,_e=he*D-ue*rt,Ve=it*ue-je*he;if(s){if(ee<0||_e<0||Ve<0)return null}else if((ee<0||_e<0||Ve<0)&&(ee>0||_e>0||Ve>0))return null;let Ie=ee+_e+Ve;if(Ie===0)return null;let Ze=Y*(ee*G+_e*W+Ve*F);return(Ie>0?Ze<0:Ze>0)?null:this.at(Ze/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},of=new ft,Ss=new Tr,Qo=new gi,lf=new L,el=new L,tl=new L,nl=new L,ru=new L,il=new L,cf=new L,sl=new L,de=class extends $t{constructor(e=new gt,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){il.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(ru.fromBufferAttribute(u,e),a?il.addScaledVector(ru,h):il.addScaledVector(ru.sub(t),h))}t.add(il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(Qo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Qo,lf)===null||Ss.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(of.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(of),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),T=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,A=T;y<A;y+=3){let E=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=rl(this,p,e,n,l,h,u,E,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);s=rl(this,a,e,n,l,h,u,b,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),T=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,A=T;y<A;y+=3){let E=y,P=y+1,v=y+2;s=rl(this,p,e,n,l,h,u,E,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=g,T=g+1,y=g+2;s=rl(this,a,e,n,l,h,u,b,T,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function k0(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ss,o),c===null)return null;sl.copy(o),sl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(sl);return l<t.near||l>t.far?null:{distance:l,point:sl.clone(),object:i}}function rl(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,el),i.getVertexPosition(c,tl),i.getVertexPosition(l,nl);let h=k0(i,e,t,n,el,tl,nl,cf);if(h){let u=new L;Ci.getBarycoord(cf,el,tl,nl,u),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,c,l,u,new oe)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Ci.getNormal(el,tl,nl,d.normal),h.face=d,h.barycoord=u}return h}var La=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=tn,h=tn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new ft,hf=new ft,al=[],uf=new mi,z0=new ft,ma=new de,ga=new gi,In=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,z0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),uf.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),ga.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(n),e.ray.intersectsSphere(ga)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),hf.multiplyMatrices(n,pr),ma.matrixWorld=hf,ma.raycast(e,al);for(let a=0,o=al.length;a<o;a++){let c=al[a];c.instanceId=r,c.object=this,t.push(c)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new La(new Float32Array(s*this.count),s,this.count,hc,Xn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new gi,H0=new oe(.5,.5),ol=new L,Ar=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],T=r[13],y=r[14],A=r[15];if(s[0].setComponents(l-a,f-h,p-m,A-b).normalize(),s[1].setComponents(l+a,f+h,p+m,A+b).normalize(),s[2].setComponents(l+o,f+u,p+_,A+T).normalize(),s[3].setComponents(l-o,f-u,p-_,A-T).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,p-g,A-y).normalize();else if(s[4].setComponents(l-c,f-d,p-g,A-y).normalize(),t===ei)s[5].setComponents(l+c,f+d,p+g,A+y).normalize();else if(t===br)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=H0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rr=class extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Nl=new L,Ul=new L,df=new ft,xa=new Tr,ll=new gi,au=new L,ff=new L,Na=class extends $t{constructor(e=new gt,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Nl.fromBufferAttribute(t,s-1),Ul.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Ul);e.setAttribute("lineDistance",new Ke(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(s),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;df.copy(s).invert(),xa.copy(e.ray).applyMatrix4(df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),b=h.getX(_+1),T=cl(this,e,xa,c,p,b,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=cl(this,e,xa,c,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){let p=cl(this,e,xa,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=cl(this,e,xa,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Nl.fromBufferAttribute(o,s),Ul.fromBufferAttribute(o,r),t.distanceSqToSegment(Nl,Ul,au,ff)>n)return;au.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(au);if(!(l<e.near||l>e.far))return{distance:l,point:ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cr=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pf=new ft,gu=new Tr,hl=new gi,ul=new L,As=class extends $t{constructor(e=new gt,t=new Cr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;pf.copy(s).invert(),gu.copy(e.ray).applyMatrix4(pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){let g=l.getX(m);ul.fromBufferAttribute(u,g),mf(ul,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)ul.fromBufferAttribute(u,m),mf(ul,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mf(i,e,t,n,s,r,a){let o=gu.distanceSqToPoint(i);if(o<t){let c=new L;gu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ua=class extends dn{constructor(e=[],t=as,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rs=class extends dn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends dn{constructor(e,t,n=si,s,r,a,o=tn,c=tn,l,h=fi,u=1){if(h!==fi&&h!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fl=class extends Ki{constructor(e,t=si,n=as,s,r,a=tn,o=tn,c,l=fi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function m(_,g,p,b,T,y,A,E,P,v,R){let I=y/P,U=A/v,G=y/2,X=A/2,B=E/2,W=P+1,J=v+1,Q=0,F=0,O=new L;for(let H=0;H<J;H++){let Y=H*U-X;for(let he=0;he<W;he++){let ue=he*I-G;O[_]=ue*b,O[g]=Y*T,O[p]=B,l.push(O.x,O.y,O.z),O[_]=0,O[g]=0,O[p]=E>0?1:-1,h.push(O.x,O.y,O.z),u.push(he/P),u.push(1-H/v),Q+=1}}for(let H=0;H<v;H++)for(let Y=0;Y<P;Y++){let he=d+Y+W*H,ue=d+Y+W*(H+1),it=d+(Y+1)+W*(H+1),je=d+(Y+1)+W*H;c.push(he,ue,je),c.push(ue,it,je),F+=6}o.addGroup(f,F,R),f+=F,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ji=class i extends gt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,_=s+1,g=new L,p=new L;for(let b=0;b<=m;b++){let T=0,y=0,A=0,E=0;if(b<=n){let R=b/n,I=R*Math.PI/2;y=-h-e*Math.cos(I),A=e*Math.sin(I),E=-e*Math.cos(I),T=R*u}else if(b<=n+r){let R=(b-n)/r;y=-h+R*t,A=e,E=0,T=u+R*d}else{let R=(b-n-r)/n,I=R*Math.PI/2;y=h+e*Math.sin(I),A=e*Math.cos(I),E=e*Math.sin(I),T=u+d+R*u}let P=Math.max(0,Math.min(1,T/f)),v=0;b===0?v=.5/s:b===m&&(v=-.5/s);for(let R=0;R<=s;R++){let I=R/s,U=I*Math.PI*2,G=Math.sin(U),X=Math.cos(U);p.x=-A*X,p.y=y,p.z=A*G,o.push(p.x,p.y,p.z),g.set(-A*X,E,A*G),g.normalize(),c.push(g.x,g.y,g.z),l.push(I+v,P)}if(b>0){let R=(b-1)*_;for(let I=0;I<s;I++){let U=R+I,G=R+I+1,X=b*_+I,B=b*_+I+1;a.push(U,G,X),a.push(G,B,X)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},xi=class i extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,h=new oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bt=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function b(){let y=new L,A=new L,E=0,P=(t-e)/n;for(let v=0;v<=r;v++){let R=[],I=v/r,U=I*(t-e)+e;for(let G=0;G<=s;G++){let X=G/s,B=X*c+o,W=Math.sin(B),J=Math.cos(B);A.x=U*W,A.y=-I*n+g,A.z=U*J,u.push(A.x,A.y,A.z),y.set(W,P,J).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-I),R.push(m++)}_.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let I=_[R][v],U=_[R+1][v],G=_[R+1][v+1],X=_[R][v+1];(e>0||R!==0)&&(h.push(I,U,X),E+=3),(t>0||R!==r-1)&&(h.push(U,G,X),E+=3)}l.addGroup(p,E,0),p+=E}function T(y){let A=m,E=new oe,P=new L,v=0,R=y===!0?e:t,I=y===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),m++;let U=m;for(let G=0;G<=s;G++){let B=G/s*c+o,W=Math.cos(B),J=Math.sin(B);P.x=R*J,P.y=g*I,P.z=R*W,u.push(P.x,P.y,P.z),d.push(0,I,0),E.x=W*.5+.5,E.y=J*.5*I+.5,f.push(E.x,E.y),m++}for(let G=0;G<s;G++){let X=A+G,B=U+G;y===!0?h.push(B,B+1,X):h.push(B+1,B,X),v+=3}l.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ni=class i extends bt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pr=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let T=new L,y=new L,A=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],y),f(t[E+2],A),c(T,y,A,b)}function c(b,T,y,A){let E=A+1,P=[];for(let v=0;v<=E;v++){P[v]=[];let R=b.clone().lerp(y,v/E),I=T.clone().lerp(y,v/E),U=E-v;for(let G=0;G<=U;G++)G===0&&v===E?P[v][G]=R:P[v][G]=R.clone().lerp(I,G/U)}for(let v=0;v<E;v++)for(let R=0;R<2*(E-v)-1;R++){let I=Math.floor(R/2);R%2===0?(d(P[v][I+1]),d(P[v+1][I]),d(P[v][I])):(d(P[v][I+1]),d(P[v+1][I+1]),d(P[v+1][I]))}}function l(b){let T=new L;for(let y=0;y<r.length;y+=3)T.x=r[y+0],T.y=r[y+1],T.z=r[y+2],T.normalize().multiplyScalar(b),r[y+0]=T.x,r[y+1]=T.y,r[y+2]=T.z}function h(){let b=new L;for(let T=0;T<r.length;T+=3){b.x=r[T+0],b.y=r[T+1],b.z=r[T+2];let y=g(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;a.push(y,1-A)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){let T=a[b+0],y=a[b+2],A=a[b+4],E=Math.max(T,y,A),P=Math.min(T,y,A);E>.9&&P<.1&&(T<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,T){let y=b*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function m(){let b=new L,T=new L,y=new L,A=new L,E=new oe,P=new oe,v=new oe;for(let R=0,I=0;R<r.length;R+=9,I+=6){b.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),E.set(a[I+0],a[I+1]),P.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),A.copy(b).add(T).add(y).divideScalar(3);let U=g(A);_(E,I+0,b,U),_(P,I+2,T,U),_(v,I+4,y,U)}}function _(b,T,y,A){A<0&&b.x===1&&(a[T]=b.x-1),y.x===0&&y.z===0&&(a[T]=A/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new ft;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ir=class extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Bl=class extends Ir{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ku(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var gf=new L,xf=new L,ou=new ku,lu=new ku,cu=new ku,Ol=class extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(xf.subVectors(s[0],s[1]).add(s[0]),l=xf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(gf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ou.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),lu.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),cu.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ou.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),lu.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),cu.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ou.calc(c),lu.calc(c),cu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _f(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function G0(i,e){let t=1-i;return t*t*e}function V0(i,e){return 2*(1-i)*i*e}function W0(i,e){return i*i*e}function va(i,e,t,n){return G0(i,e)+V0(i,t)+W0(i,n)}function X0(i,e){let t=1-i;return t*t*t*e}function q0(i,e){let t=1-i;return 3*t*t*i*e}function $0(i,e){return 3*(1-i)*i*i*e}function Y0(i,e){return i*i*i*e}function ya(i,e,t,n,s){return X0(i,e)+q0(i,t)+$0(i,n)+Y0(i,s)}var Ba=class extends Ln{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kl=class extends Ln{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y),ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends Ln{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Ln{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends Ln{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(va(e,s.x,r.x,a.x),va(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends Ln{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(va(e,s.x,r.x,a.x),va(e,s.y,r.y,a.y),va(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(_f(o,c.x,l.x,h.x,u.x),_f(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},xu=Object.freeze({__proto__:null,ArcCurve:Bl,CatmullRomCurve3:Ol,CubicBezierCurve:Ba,CubicBezierCurve3:kl,EllipseCurve:Ir,LineCurve:Oa,LineCurve3:zl,QuadraticBezierCurve:ka,QuadraticBezierCurve3:Hl,SplineCurve:za}),Gl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xu[s.type]().fromJSON(s))}return this}},Ha=class extends Gl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Oa(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ka(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ba(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Ir(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Lr=class extends Ha{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ha().fromJSON(s))}return this}};function Z0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=pp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=eg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ga(r,a,t,o,c,l,0),a}function pp(i,e,t,n,s){let r;if(s===ug(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=vf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=vf(a/n|0,i[a],i[a+1],r);return r&&Dr(r,r.next)&&(Wa(r),r=r.next),r}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Dr(t,t.next)||Ot(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&rg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?K0(i,n,s,r):J0(i)){e.push(c.i,i.i,l.i),Wa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=j0(Cs(i),e),Ga(i,e,t,n,s,r,2)):a===2&&Q0(i,e,t,n,s,r):Ga(Cs(i),e,t,n,s,r,1);break}}}function J0(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&_a(s,o,r,c,a,l,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function K0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ot(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),_=Math.max(o,c,l),g=Math.max(h,u,d),p=_u(f,m,e,t,n),b=_u(_,g,e,t,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=p&&y&&y.z<=b;){if(T.x>=f&&T.x<=_&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&_a(o,h,c,u,l,d,T.x,T.y)&&Ot(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&_a(o,h,c,u,l,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=_&&T.y>=m&&T.y<=g&&T!==s&&T!==a&&_a(o,h,c,u,l,d,T.x,T.y)&&Ot(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&_a(o,h,c,u,l,d,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function j0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Dr(n,s)&&gp(n,t,t.next,s)&&Va(n,s)&&Va(s,n)&&(e.push(n.i,t.i,s.i),Wa(t),Wa(t.next),t=i=s),t=t.next}while(t!==i);return Cs(t)}function Q0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lg(a,o)){let c=xp(a,o);a=Cs(a,a.next),c=Cs(c,c.next),Ga(a,e,t,n,s,r,0),Ga(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=pp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(og(l))}s.sort(tg);for(let r=0;r<s.length;r++)t=ng(s[r],t);return t}function tg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ng(i,e){let t=ig(i,e);if(!t)return e;let n=xp(t,i);return Cs(n,n.next),Cs(t,t.next)}function ig(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Dr(i,t))return t;do{if(Dr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&mp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Va(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&sg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function sg(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function rg(i,e,t,n){let s=i;do s.z===0&&(s.z=_u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ag(s)}function ag(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _u(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function og(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function _a(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&mp(i,e,t,n,s,r,a,o)}function lg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cg(i,e)&&(Va(i,e)&&Va(e,i)&&hg(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||Dr(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Dr(i,e){return i.x===e.x&&i.y===e.y}function gp(i,e,t,n){let s=fl(Ot(i,e,t)),r=fl(Ot(i,e,n)),a=fl(Ot(t,n,i)),o=fl(Ot(t,n,e));return!!(s!==r&&a!==o||s===0&&dl(i,t,e)||r===0&&dl(i,n,e)||a===0&&dl(t,i,n)||o===0&&dl(t,e,n))}function dl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fl(i){return i>0?1:i<0?-1:0}function cg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function hg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xp(i,e){let t=vu(i.i,i.x,i.y),n=vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vf(i,e,t,n){let s=vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ug(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yu=class{static triangulate(e,t,n=2){return Z0(e,t,n)}},Es=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];yf(e),bf(n,e);let a=e.length;t.forEach(yf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,bf(n,t[c]);let o=yu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function yf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Xa=class i extends gt{constructor(e=new Lr([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:dg,T,y=!1,A,E,P,v;if(p){T=p.getSpacedPoints(h),y=!0,d=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,ae),E=new L,P=new L,v=new L}d||(g=0,f=0,m=0,_=0);let R=o.extractPoints(l),I=R.shape,U=R.holes;if(!Es.isClockWise(I)){I=I.reverse();for(let ae=0,ce=U.length;ae<ce;ae++){let fe=U[ae];Es.isClockWise(fe)&&(U[ae]=fe.reverse())}}function X(ae){let fe=10000000000000001e-36,pe=ae[0];for(let ye=1;ye<=ae.length;ye++){let We=ye%ae.length,Ge=ae[We],Je=Ge.x-pe.x,et=Ge.y-pe.y,N=Je*Je+et*et,_t=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(pe.x),Math.abs(pe.y)),ut=fe*_t*_t;if(N<=ut){ae.splice(We,1),ye--;continue}pe=Ge}}X(I),U.forEach(X);let B=U.length,W=I;for(let ae=0;ae<B;ae++){let ce=U[ae];I=I.concat(ce)}function J(ae,ce,fe){return ce||$e("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ce,fe)}let Q=I.length;function F(ae,ce,fe){let pe,ye,We,Ge=ae.x-ce.x,Je=ae.y-ce.y,et=fe.x-ae.x,N=fe.y-ae.y,_t=Ge*Ge+Je*Je,ut=Ge*N-Je*et;if(Math.abs(ut)>Number.EPSILON){let C=Math.sqrt(_t),x=Math.sqrt(et*et+N*N),V=ce.x-Je/C,Z=ce.y+Ge/C,te=fe.x-N/x,ge=fe.y+et/x,ve=((te-V)*N-(ge-Z)*et)/(Ge*N-Je*et);pe=V+Ge*ve-ae.x,ye=Z+Je*ve-ae.y;let ne=pe*pe+ye*ye;if(ne<=2)return new oe(pe,ye);We=Math.sqrt(ne/2)}else{let C=!1;Ge>Number.EPSILON?et>Number.EPSILON&&(C=!0):Ge<-Number.EPSILON?et<-Number.EPSILON&&(C=!0):Math.sign(Je)===Math.sign(N)&&(C=!0),C?(pe=-Je,ye=Ge,We=Math.sqrt(_t)):(pe=Ge,ye=Je,We=Math.sqrt(_t/2))}return new oe(pe/We,ye/We)}let O=[];for(let ae=0,ce=W.length,fe=ce-1,pe=ae+1;ae<ce;ae++,fe++,pe++)fe===ce&&(fe=0),pe===ce&&(pe=0),O[ae]=F(W[ae],W[fe],W[pe]);let H=[],Y,he=O.concat();for(let ae=0,ce=B;ae<ce;ae++){let fe=U[ae];Y=[];for(let pe=0,ye=fe.length,We=ye-1,Ge=pe+1;pe<ye;pe++,We++,Ge++)We===ye&&(We=0),Ge===ye&&(Ge=0),Y[pe]=F(fe[pe],fe[We],fe[Ge]);H.push(Y),he=he.concat(Y)}let ue;if(g===0)ue=Es.triangulateShape(W,U);else{let ae=[],ce=[];for(let fe=0;fe<g;fe++){let pe=fe/g,ye=f*Math.cos(pe*Math.PI/2),We=m*Math.sin(pe*Math.PI/2)+_;for(let Ge=0,Je=W.length;Ge<Je;Ge++){let et=J(W[Ge],O[Ge],We);_e(et.x,et.y,-ye),pe===0&&ae.push(et)}for(let Ge=0,Je=B;Ge<Je;Ge++){let et=U[Ge];Y=H[Ge];let N=[];for(let _t=0,ut=et.length;_t<ut;_t++){let C=J(et[_t],Y[_t],We);_e(C.x,C.y,-ye),pe===0&&N.push(C)}pe===0&&ce.push(N)}}ue=Es.triangulateShape(ae,ce)}let it=ue.length,je=m+_;for(let ae=0;ae<Q;ae++){let ce=d?J(I[ae],he[ae],je):I[ae];y?(P.copy(A.normals[0]).multiplyScalar(ce.x),E.copy(A.binormals[0]).multiplyScalar(ce.y),v.copy(T[0]).add(P).add(E),_e(v.x,v.y,v.z)):_e(ce.x,ce.y,0)}for(let ae=1;ae<=h;ae++)for(let ce=0;ce<Q;ce++){let fe=d?J(I[ce],he[ce],je):I[ce];y?(P.copy(A.normals[ae]).multiplyScalar(fe.x),E.copy(A.binormals[ae]).multiplyScalar(fe.y),v.copy(T[ae]).add(P).add(E),_e(v.x,v.y,v.z)):_e(fe.x,fe.y,u/h*ae)}for(let ae=g-1;ae>=0;ae--){let ce=ae/g,fe=f*Math.cos(ce*Math.PI/2),pe=m*Math.sin(ce*Math.PI/2)+_;for(let ye=0,We=W.length;ye<We;ye++){let Ge=J(W[ye],O[ye],pe);_e(Ge.x,Ge.y,u+fe)}for(let ye=0,We=U.length;ye<We;ye++){let Ge=U[ye];Y=H[ye];for(let Je=0,et=Ge.length;Je<et;Je++){let N=J(Ge[Je],Y[Je],pe);y?_e(N.x,N.y+T[h-1].y,T[h-1].x+fe):_e(N.x,N.y,u+fe)}}}rt(),D();function rt(){let ae=s.length/3;if(d){let ce=0,fe=Q*ce;for(let pe=0;pe<it;pe++){let ye=ue[pe];Ve(ye[2]+fe,ye[1]+fe,ye[0]+fe)}ce=h+g*2,fe=Q*ce;for(let pe=0;pe<it;pe++){let ye=ue[pe];Ve(ye[0]+fe,ye[1]+fe,ye[2]+fe)}}else{for(let ce=0;ce<it;ce++){let fe=ue[ce];Ve(fe[2],fe[1],fe[0])}for(let ce=0;ce<it;ce++){let fe=ue[ce];Ve(fe[0]+Q*h,fe[1]+Q*h,fe[2]+Q*h)}}n.addGroup(ae,s.length/3-ae,0)}function D(){let ae=s.length/3,ce=0;ee(W,ce),ce+=W.length;for(let fe=0,pe=U.length;fe<pe;fe++){let ye=U[fe];ee(ye,ce),ce+=ye.length}n.addGroup(ae,s.length/3-ae,1)}function ee(ae,ce){let fe=ae.length;for(;--fe>=0;){let pe=fe,ye=fe-1;ye<0&&(ye=ae.length-1);for(let We=0,Ge=h+g*2;We<Ge;We++){let Je=Q*We,et=Q*(We+1),N=ce+pe+Je,_t=ce+ye+Je,ut=ce+ye+et,C=ce+pe+et;Ie(N,_t,ut,C)}}}function _e(ae,ce,fe){c.push(ae),c.push(ce),c.push(fe)}function Ve(ae,ce,fe){Ze(ae),Ze(ce),Ze(fe);let pe=s.length/3,ye=b.generateTopUV(n,s,pe-3,pe-2,pe-1);Mt(ye[0]),Mt(ye[1]),Mt(ye[2])}function Ie(ae,ce,fe,pe){Ze(ae),Ze(ce),Ze(pe),Ze(ce),Ze(fe),Ze(pe);let ye=s.length/3,We=b.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);Mt(We[0]),Mt(We[1]),Mt(We[3]),Mt(We[1]),Mt(We[2]),Mt(We[3])}function Ze(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function Mt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xu[s.type]().fromJSON(s)),new i(n,e.options)}},dg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(d,1-m),new oe(_,1-p)]:[new oe(o,1-c),new oe(h,1-u),new oe(f,1-m),new oe(g,1-p)]}};function fg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ps=class i extends Pr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qa=class i extends gt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,d=new oe,f=new L,m=new L,_=new L,g=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let b=0;b<=t;b++){let T=n+b*h*s,y=Math.sin(T),A=Math.cos(T);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*A,a.push(u.x,u.y,u.z),d.x=b/t,d.y=E/(e.length-1),o.push(d.x,d.y);let P=c[3*E+0]*y,v=c[3*E+1],R=c[3*E+0]*A;l.push(P,v,R)}}for(let b=0;b<t;b++)for(let T=0;T<e.length-1;T++){let y=T+b*e.length,A=y,E=y+e.length,P=y+e.length+1,v=y+1;r.push(A,E,v),r.push(P,v,E)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Qi=class i extends Pr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Di=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let T=0;T<l;T++){let y=T*u-r;m.push(y,-b,0),_.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let T=b+l*p,y=b+l*(p+1),A=b+1+l*(p+1),E=b+1+l*p;f.push(T,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vn=class i extends gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,m=new oe;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let b=p+g,T=b,y=b+n+1,A=b+n+2,E=b+1;o.push(T,y,E),o.push(y,A,E)}}this.setIndex(o),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ut=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],T=p/n,y=a+T*o,A=e*Math.cos(y),E=Math.sqrt(e*e-A*A),P=0;p===0&&a===0?P=.5/t:p===n&&c===Math.PI&&(P=-.5/t);for(let v=0;v<=t;v++){let R=v/t,I=s+R*r;u.x=-E*Math.cos(I),u.y=A,u.z=E*Math.sin(I),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(R+P,1-T),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let T=h[p][b+1],y=h[p][b],A=h[p+1][b],E=h[p+1][b+1];(p!==0||a>0)&&f.push(T,y,E),(p!==n-1||c<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},$a=class i extends Pr{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zt=class i extends gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new L,f=new L,m=new L;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,b=(s+1)*(_-1)+g-1,T=(s+1)*(_-1)+g,y=(s+1)*_+g;c.push(p,b,y),c.push(b,T,y)}this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Mf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Mf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Ui={clone:Ns,merge:fn},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new me().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Nr=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pt=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vl=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xl=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=e,o=2*t-n;break;case mu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:a=e,c=2*n-t;break;case mu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,b=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+b*a[l+A]+T*a[c+A]+y*a[u+A];return r}},ql=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},$l=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yl=class extends es{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),_=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let _=a[l+m],g=a[c+m],p=f*d+m*2,b=u[p],T=u[p+1],y=e*d+m*2,A=h[y],E=h[y+1],P=_g(n,t,b,A,s);r[m]=_p(P,_,T,E,g)}return r}};function _p(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function xg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _g(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=_p(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=xg(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),hu(e.settings)&&(n.settings={inTangents:mr(e.settings.inTangents,Array),outTangents:mr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case Rl:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;hu(this.settings)&&(Sf(this.settings.inTangents,e),Sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){$e("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){$e("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&b0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){$e("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,hu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Rl;var ts=class extends Dn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=ba;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};Zl.prototype.ValueTypeName="color";var Jl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};Jl.prototype.ValueTypeName="number";var Kl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ya=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};Ya.prototype.ValueTypeName="quaternion";Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Dn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ba;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};jl.prototype.ValueTypeName="vector";var _l={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(wf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!wf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function wf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ql=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Ql,Ur=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=new WeakMap,ec=class extends Ur{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_l.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=gr.get(a);u===void 0&&(u=[],gr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Mr("img");function c(){h(),t&&t(this);let u=gr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}gr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),_l.remove(`image:${e}`);let d=gr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_l.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Za=class extends Ur{constructor(e){super(e)}load(e,t,n,s){let r=new dn,a=new ec(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ja=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ka=class extends Ja{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uu=new ft,Ef=new L,Tf=new L,tc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new L,ml=new bn,hi=new L,ja=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new L,Af=new oe,Rf=new oe,un=class extends ja{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Af,Rf),t.subVectors(Rf,Af)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var is=class extends ja{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bu=class extends tc{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xr=-90,_r=1,nc=class extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new un(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new un(xr,_r,e,t);a.layers=this.layers,this.add(a);let o=new un(xr,_r,e,t);o.layers=this.layers,this.add(o);let c=new un(xr,_r,e,t);c.layers=this.layers,this.add(c);let l=new un(xr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ic=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vg(){this._document.hidden===!1&&this.reset()}var Hu="\\[\\]\\.:\\/",yg=new RegExp("["+Hu+"]","g"),Gu="[^"+Hu+"]",bg="[^"+Hu.replace("\\.","")+"]",Mg=/((?:WC+[\/:])*)/.source.replace("WC",Gu),Sg=/(WCOD+)?/.source.replace("WCOD",bg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),Tg=new RegExp("^"+Mg+Sg+wg+Eg+"$"),Ag=["material","materials","bones","map"],Mu=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){let t=Tg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Mu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DM=new Float32Array(1);var Su=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Vu(i,e,t,n){let s=Rg(n);switch(t){case Uu:return i*e;case hc:return i*e/s.components*s.byteLength;case uc:return i*e/s.components*s.byteLength;case cs:return i*e*2/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case Fu:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case fc:return i*e*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:case xc:return Math.max(i,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(e,8)/2;case _c:case vc:case bc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:case po:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oc:case kc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mo:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rg(i){switch(i){case Mn:case Iu:return{byteLength:1,components:1};case Or:case Lu:case on:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case si:case oc:case Xn:return{byteLength:4,components:1};case Du:case Nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pg(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bg=`#ifdef USE_AOMAP
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
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Xg=`#ifdef USE_BUMPMAP
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
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Px=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,e_=`#ifdef USE_NORMALMAP
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
#endif`,t_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,g_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,b_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,q_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,J_=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,K_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,j_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rv=`uniform float size;
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
	#include <morphinstance_vertex>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
	#include <premultiplied_alpha_fragment>
}`,cv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ot={alphahash_fragment:Ig,alphahash_pars_fragment:Lg,alphamap_fragment:Dg,alphamap_pars_fragment:Ng,alphatest_fragment:Ug,alphatest_pars_fragment:Fg,aomap_fragment:Bg,aomap_pars_fragment:Og,batching_pars_vertex:kg,batching_vertex:zg,begin_vertex:Hg,beginnormal_vertex:Gg,bsdfs:Vg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:qg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:Kg,color_pars_vertex:jg,color_vertex:Qg,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:sx,emissivemap_fragment:rx,emissivemap_pars_fragment:ax,colorspace_fragment:ox,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:hx,envmap_pars_fragment:ux,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Sx,envmap_vertex:fx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:xx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:vx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:bx,lights_pars_begin:Mx,lights_toon_fragment:wx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:Px,lights_fragment_maps:Ix,lights_fragment_end:Lx,lightprobes_pars_fragment:Dx,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Ux,logdepthbuf_pars_vertex:Fx,logdepthbuf_vertex:Bx,map_fragment:Ox,map_pars_fragment:kx,map_particle_fragment:zx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:qx,morphtarget_pars_vertex:$x,morphtarget_vertex:Yx,normal_fragment_begin:Zx,normal_fragment_maps:Jx,normal_pars_fragment:Kx,normal_pars_vertex:jx,normal_vertex:Qx,normalmap_pars_fragment:e_,clearcoat_normal_fragment_begin:t_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:s_,opaque_fragment:r_,packing:a_,premultiplied_alpha_fragment:o_,project_vertex:l_,dithering_fragment:c_,dithering_pars_fragment:h_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:d_,shadowmap_pars_fragment:f_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:g_,skinbase_vertex:x_,skinning_pars_vertex:__,skinning_vertex:v_,skinnormal_vertex:y_,specularmap_fragment:b_,specularmap_pars_fragment:M_,tonemapping_fragment:S_,tonemapping_pars_fragment:w_,transmission_fragment:E_,transmission_pars_fragment:T_,uv_pars_fragment:A_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:P_,background_vert:I_,background_frag:L_,backgroundCube_vert:D_,backgroundCube_frag:N_,cube_vert:U_,cube_frag:F_,depth_vert:B_,depth_frag:O_,distance_vert:k_,distance_frag:z_,equirect_vert:H_,equirect_frag:G_,linedashed_vert:V_,linedashed_frag:W_,meshbasic_vert:X_,meshbasic_frag:q_,meshlambert_vert:$_,meshlambert_frag:Y_,meshmatcap_vert:Z_,meshmatcap_frag:J_,meshnormal_vert:K_,meshnormal_frag:j_,meshphong_vert:Q_,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:av,shadow_vert:ov,shadow_frag:lv,sprite_vert:cv,sprite_frag:hv},Ae={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},vi={basic:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new me(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new me(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:fn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:fn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:fn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:fn([Ae.lights,Ae.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:fn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var $c={r:0,b:0,g:0},uv=new ft,Gp=new Qe;Gp.set(-1,0,0,0,1,0,0,0,1);function dv(i,e,t,n,s,r){let a=new me(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function m(b){let T=!1,y=f(b);y===null?g(a,o):y&&y.isColor&&(g(y,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,T){let y=f(T);y&&(y.isCubeTexture||y.mapping===oo)?(l===void 0&&(l=new de(new Yt(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ns(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gp),l.material.toneMapped=ct.getTransfer(y.colorSpace)!==xt,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new de(new Di(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ns(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,T){b.getRGB($c,zu(i)),t.buffers.color.setClear($c.r,$c.g,$c.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:_,dispose:p}}function fv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,G,X,B,W){let J=!1,Q=u(U,B,X,G);r!==Q&&(r=Q,l(r.object)),J=f(U,B,X,W),J&&m(U,B,X,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(U,G,X,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,G,X,B){let W=B.wireframe===!0,J=n[G.id];J===void 0&&(J={},n[G.id]=J);let Q=U.isInstancedMesh===!0?U.id:0,F=J[Q];F===void 0&&(F={},J[Q]=F);let O=F[X.id];O===void 0&&(O={},F[X.id]=O);let H=O[W];return H===void 0&&(H=d(c()),O[W]=H),H}function d(U){let G=[],X=[],B=[];for(let W=0;W<t;W++)G[W]=0,X[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:B,object:U,attributes:{},index:null}}function f(U,G,X,B){let W=r.attributes,J=G.attributes,Q=0,F=X.getAttributes();for(let O in F)if(F[O].location>=0){let Y=W[O],he=J[O];if(he===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),Y===void 0||Y.attribute!==he||he&&Y.data!==he.data)return!0;Q++}return r.attributesNum!==Q||r.index!==B}function m(U,G,X,B){let W={},J=G.attributes,Q=0,F=X.getAttributes();for(let O in F)if(F[O].location>=0){let Y=J[O];Y===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));let he={};he.attribute=Y,Y&&Y.data&&(he.data=Y.data),W[O]=he,Q++}r.attributes=W,r.attributesNum=Q,r.index=B}function _(){let U=r.newAttributes;for(let G=0,X=U.length;G<X;G++)U[G]=0}function g(U){p(U,0)}function p(U,G){let X=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;X[U]=1,B[U]===0&&(i.enableVertexAttribArray(U),B[U]=1),W[U]!==G&&(i.vertexAttribDivisor(U,G),W[U]=G)}function b(){let U=r.newAttributes,G=r.enabledAttributes;for(let X=0,B=G.length;X<B;X++)G[X]!==U[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function T(U,G,X,B,W,J,Q){Q===!0?i.vertexAttribIPointer(U,G,X,W,J):i.vertexAttribPointer(U,G,X,B,W,J)}function y(U,G,X,B){_();let W=B.attributes,J=X.getAttributes(),Q=G.defaultAttributeValues;for(let F in J){let O=J[F];if(O.location>=0){let H=W[F];if(H===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){let Y=H.normalized,he=H.itemSize,ue=e.get(H);if(ue===void 0)continue;let it=ue.buffer,je=ue.type,rt=ue.bytesPerElement,D=je===i.INT||je===i.UNSIGNED_INT||H.gpuType===oc;if(H.isInterleavedBufferAttribute){let ee=H.data,_e=ee.stride,Ve=H.offset;if(ee.isInstancedInterleavedBuffer){for(let Ie=0;Ie<O.locationSize;Ie++)p(O.location+Ie,ee.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)g(O.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ie=0;Ie<O.locationSize;Ie++)T(O.location+Ie,he/O.locationSize,je,Y,_e*rt,(Ve+he/O.locationSize*Ie)*rt,D)}else{if(H.isInstancedBufferAttribute){for(let ee=0;ee<O.locationSize;ee++)p(O.location+ee,H.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ee=0;ee<O.locationSize;ee++)g(O.location+ee);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ee=0;ee<O.locationSize;ee++)T(O.location+ee,he/O.locationSize,je,Y,he*rt,he/O.locationSize*ee*rt,D)}}else if(Q!==void 0){let Y=Q[F];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(O.location,Y);break;case 3:i.vertexAttrib3fv(O.location,Y);break;case 4:i.vertexAttrib4fv(O.location,Y);break;default:i.vertexAttrib1fv(O.location,Y)}}}}b()}function A(){R();for(let U in n){let G=n[U];for(let X in G){let B=G[X];for(let W in B){let J=B[W];for(let Q in J)h(J[Q].object),delete J[Q];delete B[W]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let G=n[U.id];for(let X in G){let B=G[X];for(let W in B){let J=B[W];for(let Q in J)h(J[Q].object),delete J[Q];delete B[W]}}delete n[U.id]}function P(U){for(let G in n){let X=n[G];for(let B in X){let W=X[B];if(W[U.id]===void 0)continue;let J=W[U.id];for(let Q in J)h(J[Q].object),delete J[Q];delete W[U.id]}}}function v(U){for(let G in n){let X=n[G],B=U.isInstancedMesh===!0?U.id:0,W=X[B];if(W!==void 0){for(let J in W){let Q=W[J];for(let F in Q)h(Q[F].object),delete Q[F];delete W[J]}delete X[B],Object.keys(X).length===0&&delete n[G]}}}function R(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function pv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==qn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Mn&&P!==Xn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:A,samples:E}}function gv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,T=b*4,y=p.clippingState||null;c.value=y,y=h(m,d,T,f);for(let A=0;A!==T;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=f;T!==_;++T,y+=4)a.copy(u[T]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Hr=4,xv=6,_v=20,vv=256,go=new is,yp=new me,Wu=null,Xu=0,qu=0,$u=!1,yv=new L,Us=new L,Zc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=yv}=r;Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:on,format:qn,colorSpace:Ma,depthBuffer:!1},s=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bv(r)),this._blurMaterial=Sv(r,e,t),this._ggxMaterial=Mv(r,e,t)}return s}_compileMaterial(e){let t=new de(new gt,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s,r){let c=new un(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(yp),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Yt,new Ye({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(yp),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let A=this._cubeSize;zr(s,y*A,T>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===as||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Hr?n-m+Hr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,zr(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,go),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,zr(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(o,go)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),d=4*(this._cubeSize-h);zr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,go)}};function bv(i){let e=[],t=[],n=i,s=i-Hr+1+xv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let p=0;p<u;p++){let b=p%3*2/3-1,T=p>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];m.set(y,f*d*p);for(let A=0;A<d;A++){let E=h[A*2]*2-1,P=h[A*2+1]*2-1;p===0?Us.set(1,P,E):p===1?Us.set(-E,1,-P):p===2?Us.set(-E,P,1):p===3?Us.set(-1,P,-E):p===4?Us.set(-E,-1,P):Us.set(E,P,-1),Us.toArray(_,(p*d+A)*f)}}let g=new gt;g.setAttribute("position",new Nt(m,f)),g.setAttribute("outputDirection",new Nt(_,f)),t.push(new de(g,null)),n>Hr&&n--}return{lodMeshes:t,sizeLods:e}}function bp(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mv(i,e,t){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sv(i,e,t){return new Rt({name:"SphericalGaussianBlur",defines:{SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mp(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sp(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Wn});r.uniforms.tEquirect.value=t;let a=new de(s,r),o=t.minFilter;return t.minFilter===os&&(t.minFilter=sn),new nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function wv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===sc||f===rc)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Jc(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===sc||f===rc,_=f===as||f===Ds;if(m||_){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zc(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Zc(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===sc?d.mapping=as:f===rc&&(d.mapping=Ds),d}function c(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ev(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ts("WebGLRenderer: "+n+" extension not supported."),s}}}function Tv(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let T=0,y=b.length;T<y;T+=3){let A=b[T+0],E=b[T+1],P=b[T+2];d.push(A,E,E,P,P,A)}}else{let b=m.array;_=m.version;for(let T=0,y=b.length/3-1;T<y;T+=3){let A=T+0,E=T+1,P=T+2;d.push(A,E,E,P,P,A)}}let g=new(m.count>=65535?Pa:Ca)(d,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Av(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Rv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,e,t){let n=new WeakMap,s=new Bt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let R=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*A*4*u),P=new Ea(E,y,A,u);P.type=Xn,P.needsUpdate=!0;let v=T*4;for(let I=0;I<u;I++){let U=g[I],G=p[I],X=b[I],B=y*A*4*I;for(let W=0;W<U.count;W++){let J=W*v;f===!0&&(s.fromBufferAttribute(U,W),E[B+J+0]=s.x,E[B+J+1]=s.y,E[B+J+2]=s.z,E[B+J+3]=0),m===!0&&(s.fromBufferAttribute(G,W),E[B+J+4]=s.x,E[B+J+5]=s.y,E[B+J+6]=s.z,E[B+J+7]=0),_===!0&&(s.fromBufferAttribute(X,W),E[B+J+8]=s.x,E[B+J+9]=s.y,E[B+J+10]=s.z,E[B+J+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new oe(y,A)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Pv(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Iv={[to]:"LINEAR_TONE_MAPPING",[no]:"REINHARD_TONE_MAPPING",[io]:"CINEON_TONE_MAPPING",[Ls]:"ACES_FILMIC_TONE_MAPPING",[ro]:"AGX_TONE_MAPPING",[ao]:"NEUTRAL_TONE_MAPPING",[so]:"CUSTOM_TONE_MAPPING"};function Lv(i,e,t,n,s,r){let a=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new gt;l.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let h=new Nr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new de(l,h),d=new is(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,b=[],T=!1;this.setSize=function(y,A){a.setSize(y,A),o!==null&&o.setSize(y,A),c!==null&&c.setSize(y,A);for(let E=0;E<b.length;E++){let P=b[E];P.setSize&&P.setSize(y,A)}},this.setEffects=function(y){b=y,T=b.length>0&&b[0].isRenderPass===!0;let A=a.width,E=a.height;b.length>0&&o===null&&(o=new Xt(A,E,{type:on,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(A,E,{type:on,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<b.length;P++){let v=b[P];v.setSize&&v.setSize(A,E)}},this.begin=function(y,A){if(_||y.toneMapping===ii&&b.length===0)return!1;if(p=A,A!==null){let E=A.width,P=A.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return T===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ii,!0},this.hasRenderPass=function(){return T},this.end=function(y,A){y.toneMapping=g,_=!0;let E=a,P=o;for(let v=0;v<b.length;v++){let R=b[v];R.enabled!==!1&&(R.render(y,P,E,A),R.needsSwap!==!1&&(E=P,P=P===o?c:o))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},ct.getTransfer(f)===xt&&(h.defines.SRGB_TRANSFER="");let v=Iv[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Vp=new dn,Ju=new Ki(1,1),Wp=new Ea,Xp=new Ll,qp=new Ua,wp=[],Ep=[],Tp=new Float32Array(16),Ap=new Float32Array(9),Rp=new Float32Array(4);function Vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wp[s];if(r===void 0&&(r=new Float32Array(s),wp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Rp.set(n),i.uniformMatrix2fv(this.addr,!1,Rp),Kt(t,n)}}function Ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Ap.set(n),i.uniformMatrix3fv(this.addr,!1,Ap),Kt(t,n)}}function kv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Tp.set(n),i.uniformMatrix4fv(this.addr,!1,Tp),Kt(t,n)}}function zv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?qc:Xc,r=Ju):r=Vp,t.setTexture2D(e||r,s)}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xp,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qp,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wp,s)}function jv(i){switch(i){case 5126:return Dv;case 35664:return Nv;case 35665:return Uv;case 35666:return Fv;case 35674:return Bv;case 35675:return Ov;case 35676:return kv;case 5124:case 35670:return zv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Qv(i,e){i.uniform1fv(this.addr,e)}function ey(i,e){let t=Vr(e,this.size,2);i.uniform2fv(this.addr,t)}function ty(i,e){let t=Vr(e,this.size,3);i.uniform3fv(this.addr,t)}function ny(i,e){let t=Vr(e,this.size,4);i.uniform4fv(this.addr,t)}function iy(i,e){let t=Vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sy(i,e){let t=Vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ry(i,e){let t=Vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ay(i,e){i.uniform1iv(this.addr,e)}function oy(i,e){i.uniform2iv(this.addr,e)}function ly(i,e){i.uniform3iv(this.addr,e)}function cy(i,e){i.uniform4iv(this.addr,e)}function hy(i,e){i.uniform1uiv(this.addr,e)}function uy(i,e){i.uniform2uiv(this.addr,e)}function dy(i,e){i.uniform3uiv(this.addr,e)}function fy(i,e){i.uniform4uiv(this.addr,e)}function py(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ju:a=Vp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function my(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xp,r[a])}function gy(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||qp,r[a])}function xy(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wp,r[a])}function _y(i){switch(i){case 5126:return Qv;case 35664:return ey;case 35665:return ty;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return xy}}var Ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_y(t.type)}},Qu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function Cp(i,e){i.seq.push(e),i.map[e.id]=e}function vy(i,e,t){let n=i.name,s=n.length;for(Yu.lastIndex=0;;){let r=Yu.exec(n),a=Yu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cp(t,l===void 0?new Ku(o,i,e):new ju(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Qu(o),Cp(t,u)),t=u}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);vy(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Pp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yy=37297,by=0;function My(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ip=new Qe;function Sy(i){ct._getMatrix(Ip,ct.workingColorSpace,i);let e=`mat3( ${Ip.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+My(i.getShaderSource(e),o)}else return r}function wy(i,e){let t=Sy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ey={[to]:"Linear",[no]:"Reinhard",[io]:"Cineon",[Ls]:"ACESFilmic",[ro]:"AgX",[ao]:"Neutral",[so]:"Custom"};function Ty(i,e){let t=Ey[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yc=new L;function Ay(){ct.getLuminanceCoefficients(Yc);let i=Yc.x.toFixed(4),e=Yc.y.toFixed(4),t=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function Cy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Py(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _o(i){return i!==""}function Dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(i){return i.replace(Iy,Dy)}var Ly=new Map;function Dy(i,e){let t=ot[e];if(t===void 0){let n=Ly.get(e);if(n!==void 0)t=ot[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ed(t)}var Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(i){return i.replace(Ny,Uy)}function Uy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Fy={[eo]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function By(i){return Fy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[as]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function ky(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Oy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zy={[Ds]:"ENVMAP_MODE_REFRACTION"};function Hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gy={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function Vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gy[i.combine]||"ENVMAP_BLENDING_NONE"}function Wy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=By(t),l=ky(t),h=Hy(t),u=Vy(t),d=Wy(t),f=Ry(t),m=Cy(r),_=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_o).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(g=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ot.tonemapping_pars_fragment:"",t.toneMapping!==ii?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),Ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),a=ed(a),a=Dp(a,t),a=Np(a,t),o=ed(o),o=Dp(o,t),o=Np(o,t),a=Up(a),o=Up(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=b+g+a,y=b+p+o,A=Pp(s,s.VERTEX_SHADER,T),E=Pp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(E)||"",W=G.trim(),J=X.trim(),Q=B.trim(),F=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{let H=Lp(s,A,"vertex"),Y=Lp(s,E,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+H+`
`+Y)}else W!==""?qe("WebGLProgram: Program Info Log:",W):(J===""||Q==="")&&(O=!1);O&&(U.diagnostics={runnable:F,programLog:W,vertexShader:{log:J,prefix:g},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(A),s.deleteShader(E),v=new Gr(s,_),R=Py(s,_)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,yy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=by++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var qy=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nd(e),t.set(e,n)),n}},nd=class{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}};function $y(i){return i===cs||i===po||i===mo}function Yy(i,e,t,n,s,r){let a=new Ta,o=new td,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,R,I,U,G,X){let B=U.fog,W=G.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||J,Q),O=F&&F.mapping===oo?F.image.height:null,H=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=Y!==void 0?Y.length:0,ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let it,je,rt,D;if(H){let Ct=vi[H];it=Ct.vertexShader,je=Ct.fragmentShader}else{it=v.vertexShader,je=v.fragmentShader;let Ct=o.getVertexShaderStage(v),vt=o.getFragmentShaderStage(v);o.update(v,Ct,vt),rt=Ct.id,D=vt.id}let ee=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ve=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,Ze=!!v.map,Mt=!!v.matcap,ae=!!F,ce=!!v.aoMap,fe=!!v.lightMap,pe=!!v.bumpMap&&v.wireframe===!1,ye=!!v.normalMap,We=!!v.displacementMap,Ge=!!v.emissiveMap,Je=!!v.metalnessMap,et=!!v.roughnessMap,N=v.anisotropy>0,_t=v.clearcoat>0,ut=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,V=v.sheen>0,Z=v.transmission>0,te=N&&!!v.anisotropyMap,ge=_t&&!!v.clearcoatMap,ve=_t&&!!v.clearcoatNormalMap,ne=_t&&!!v.clearcoatRoughnessMap,se=x&&!!v.iridescenceMap,Me=x&&!!v.iridescenceThicknessMap,ke=V&&!!v.sheenColorMap,Te=V&&!!v.sheenRoughnessMap,Se=!!v.specularMap,ze=!!v.specularColorMap,Xe=!!v.specularIntensityMap,nt=Z&&!!v.transmissionMap,z=Z&&!!v.thicknessMap,we=!!v.gradientMap,ie=!!v.alphaMap,Ee=v.alphaTest>0,Pe=!!v.alphaHash,le=!!v.extensions,He=ii;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=i.toneMapping);let Fe={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:je,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:D,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&G.instanceColor!==null,instancingMorph:Ve&&G.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Mt,envMap:ae,envMapMode:ae&&F.mapping,envMapCubeUVHeight:O,aoMap:ce,lightMap:fe,bumpMap:pe,normalMap:ye,displacementMap:We,emissiveMap:Ge,normalMapObjectSpace:ye&&v.normalMapType===ep,normalMapTangentSpace:ye&&v.normalMapType===Wc,packedNormalMap:ye&&v.normalMapType===Wc&&$y(v.normalMap.format),metalnessMap:Je,roughnessMap:et,anisotropy:N,anisotropyMap:te,clearcoat:_t,clearcoatMap:ge,clearcoatNormalMap:ve,clearcoatRoughnessMap:ne,dispersion:ut,retroreflection:C,iridescence:x,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:V,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:Se,specularColorMap:ze,specularIntensityMap:Xe,transmission:Z,transmissionMap:nt,thicknessMap:z,gradientMap:we,opaque:v.transparent===!1&&v.blending===rs&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:Pe,combine:v.combine,mapUv:Ze&&m(v.map.channel),aoMapUv:ce&&m(v.aoMap.channel),lightMapUv:fe&&m(v.lightMap.channel),bumpMapUv:pe&&m(v.bumpMap.channel),normalMapUv:ye&&m(v.normalMap.channel),displacementMapUv:We&&m(v.displacementMap.channel),emissiveMapUv:Ge&&m(v.emissiveMap.channel),metalnessMapUv:Je&&m(v.metalnessMap.channel),roughnessMapUv:et&&m(v.roughnessMap.channel),anisotropyMapUv:te&&m(v.anisotropyMap.channel),clearcoatMapUv:ge&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(v.sheenRoughnessMap.channel),specularMapUv:Se&&m(v.specularMap.channel),specularColorMapUv:ze&&m(v.specularColorMap.channel),specularIntensityMapUv:Xe&&m(v.specularIntensityMap.channel),transmissionMapUv:nt&&m(v.transmissionMap.channel),thicknessMapUv:z&&m(v.thicknessMap.channel),alphaMapUv:ie&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ye||N),vertexNormals:!!W.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Ze||ie),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ue,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Ge&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)R.push(I),R.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(R,v),b(R,v),R.push(i.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function p(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function b(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let R=f[v.type],I;if(R){let U=vi[R];I=Ui.clone(U.uniforms)}else I=v.uniforms;return I}function y(v,R){let I=h.get(R);return I!==void 0?++I.usedTimes:(I=new Xy(i,R,v,s),l.push(I),h.set(R,I)),I}function A(v){if(--v.usedTimes===0){let R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:A,releaseShaderCache:E,programs:l,dispose:P}}function Zy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Op(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,g,p){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=a(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=g,b.group=p),e++,b}function c(d,f,m,_,g,p,b){b.reversedDepth===!0&&(g=-g);let T=o(d,f,m,_,g,p);m.transmission>0?n.push(T):m.transparent===!0?s.push(T):t.push(T)}function l(d,f,m,_,g,p){let b=o(d,f,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function h(d,f){t.length>1&&t.sort(d||Jy),n.length>1&&n.sort(f||Bp),s.length>1&&s.sort(f||Bp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Ky(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Op,i.set(n,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new me};break;case"SpotLight":t={position:new L,direction:new L,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Qy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var eb=0;function tb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nb(i){let e=new jy,t=Qy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new ft,a=new ft;function o(l){let h=0,u=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,T=0,y=0,A=0,E=0,P=0,v=0,R=0,I=0;l.sort(tb);for(let G=0,X=l.length;G<X;G++){let B=l[G],W=B.color,J=B.intensity,Q=B.distance,F=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===cs?F=B.shadow.map.texture:F=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=W.r*J,u+=W.g*J,d+=W.b*J;else if(B.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(B.sh.coefficients[O],J);I++}else if(B.isSunLight){let O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let H=B.shadow,Y=t.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=F;let he=H.getViewportCount();for(let ue=0;ue<he;ue++)n.sunShadowMatrix[_+ue]=H.getMatrix(ue),n.sunShadowCascade[_+ue]=H._cascadeData[ue];_+=he,m++}n.sun[f]=O,f++}else if(B.isDirectionalLight){let O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let H=B.shadow,Y=t.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=F,n.directionalShadowMatrix[g]=B.shadow.matrix,A++}n.directional[g]=O,g++}else if(B.isSpotLight){let O=e.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(W).multiplyScalar(J),O.distance=Q,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,n.spot[b]=O;let H=B.shadow;if(B.map&&(n.spotLightMap[v]=B.map,v++,H.updateMatrices(B),B.castShadow&&R++),n.spotLightMatrix[b]=H.matrix,B.castShadow){let Y=t.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.spotShadow[b]=Y,n.spotShadowMap[b]=F,P++}b++}else if(B.isRectAreaLight){let O=e.get(B);O.color.copy(W).multiplyScalar(J),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),n.rectArea[T]=O,T++}else if(B.isPointLight){let O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){let H=B.shadow,Y=t.get(B);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=B.shadow.matrix,E++}n.point[p]=O,p++}else if(B.isHemisphereLight){let O=e.get(B);O.skyColor.copy(B.color).multiplyScalar(J),O.groundColor.copy(B.groundColor).multiplyScalar(J),n.hemi[y]=O,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==P||U.numSpotMaps!==v||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=b,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,U.sunLength=f,U.directionalLength=g,U.pointLength=p,U.spotLength=b,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=P,U.numSpotMaps=v,U.numLightProbes=I,n.version=eb++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){let y=l[b];if(y.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(y.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function kp(i){let e=new nb(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ib(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new kp(i),e.set(s,[o])):r>=a.length?(o=new kp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ab=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ob=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],zp=new ft,xo=new L,Zu=new L;function lb(i,e,t){let n=new Ar,s=new oe,r=new oe,a=new Bt,o=new Vl,c=new Wl,l={},h=t.maxTextureSize,u={[ss]:rn,[rn]:ss,[It]:It},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:sb,fragmentShader:rb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new gt;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(E,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===If&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);let R=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Wn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=p!==this.type;X&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=E.length;B<W;B++){let J=E[B],Q=J.shadow;if(Q===void 0){qe("WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let F=Q.getFrameExtents();s.multiply(F),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,Q.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=O,Q.map===null||X===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Br){if(J.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Xt(s.x,s.y,{format:cs,type:on,minFilter:sn,magFilter:sn,generateMipmaps:!1}),Q.map.texture.name=J.name+".shadowMap",Q.map.depthTexture=new Ki(s.x,s.y,Xn),Q.map.depthTexture.name=J.name+".shadowMapDepth",Q.map.depthTexture.format=fi,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=tn,Q.map.depthTexture.magFilter=tn}else J.isPointLight?(Q.map=new Jc(s.x),Q.map.depthTexture=new Fl(s.x,si)):(Q.map=new Xt(s.x,s.y),Q.map.depthTexture=new Ki(s.x,s.y,si)),Q.map.depthTexture.name=J.name+".shadowMap",Q.map.depthTexture.format=fi,this.type===eo?(Q.map.depthTexture.compareFunction=O?qc:Xc,Q.map.depthTexture.minFilter=sn,Q.map.depthTexture.magFilter=sn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=tn,Q.map.depthTexture.magFilter=tn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let H=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();J.isPointLight!==!0&&Q.updateMatrices(J,v);for(let Y=0;Y<H;Y++){let he=Q.getCamera(Y);if(J.isPointLight){let ue=Q.camera,it=Q.matrix,je=J.distance||ue.far;je!==ue.far&&(ue.far=je,ue.updateProjectionMatrix()),xo.setFromMatrixPosition(J.matrixWorld),ue.position.copy(xo),Zu.copy(ue.position),Zu.add(ab[Y]),ue.up.copy(ob[Y]),ue.lookAt(Zu),ue.updateMatrixWorld(),it.makeTranslation(-xo.x,-xo.y,-xo.z),zp.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(zp,ue.coordinateSystem,ue.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(Q.map),i.clear());let ue=Q.getViewport(Y);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),G.viewport(a)}n=Q.getFrustum(Y),y(P,v,he,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Br&&b(Q,v),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(R,I,U)};function b(E,P){let v=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Xt(s.x,s.y,{format:cs,type:on}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,v,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,v,f,_,null)}function T(E,P,v,R){let I=null,U=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)I=U;else if(I=v.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let G=I.uuid,X=P.uuid,B=l[G];B===void 0&&(B={},l[G]=B);let W=B[X];W===void 0&&(W=I.clone(),B[X]=W,P.addEventListener("dispose",A)),I=W}if(I.visible=P.visible,I.wireframe=P.wireframe,R===Br?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:u[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let G=i.properties.get(I);G.light=v}return I}function y(E,P,v,R,I){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===Br)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let X=e.update(E),B=E.material;if(Array.isArray(B)){let W=X.groups;for(let J=0,Q=W.length;J<Q;J++){let F=W[J],O=B[F.materialIndex];if(O&&O.visible){let H=T(E,O,R,I);E.onBeforeShadow(i,E,P,v,X,H,F),i.renderBufferDirect(v,null,X,H,E,F),E.onAfterShadow(i,E,P,v,X,H,F)}}}else if(B.visible){let W=T(E,B,R,I);E.onBeforeShadow(i,E,P,v,X,W,null),i.renderBufferDirect(v,null,X,W,E,null),E.onAfterShadow(i,E,P,v,X,W,null)}}let G=E.children;for(let X=0,B=G.length;X<B;X++)y(G[X],P,v,R,I)}function A(E){E.target.removeEventListener("dispose",A);for(let v in l){let R=l[v],I=E.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}}function cb(i,e){function t(){let z=!1,we=new Bt,ie=null,Ee=new Bt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!z&&(i.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){z=Pe},setClear:function(Pe,le,He,Fe,Ct){Ct===!0&&(Pe*=Fe,le*=Fe,He*=Fe),we.set(Pe,le,He,Fe),Ee.equals(we)===!1&&(i.clearColor(Pe,le,He,Fe),Ee.copy(we))},reset:function(){z=!1,ie=null,Ee.set(-1,0,0,0)}}}function n(){let z=!1,we=!1,ie=null,Ee=null,Pe=null;return{setReversed:function(le){if(we!==le){let He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=le;let Fe=Pe;Pe=null,this.setClear(Fe)}},getReversed:function(){return we},setTest:function(le){le?ee(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(le){ie!==le&&!z&&(i.depthMask(le),ie=le)},setFunc:function(le){if(we&&(le=up[le]),Ee!==le){switch(le){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=le}},setLocked:function(le){z=le},setClear:function(le){Pe!==le&&(Pe=le,we&&(le=1-le),i.clearDepth(le))},reset:function(){z=!1,ie=null,Ee=null,Pe=null,we=!1}}}function s(){let z=!1,we=null,ie=null,Ee=null,Pe=null,le=null,He=null,Fe=null,Ct=null;return{setTest:function(vt){z||(vt?ee(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(vt){we!==vt&&!z&&(i.stencilMask(vt),we=vt)},setFunc:function(vt,Zn,li){(ie!==vt||Ee!==Zn||Pe!==li)&&(i.stencilFunc(vt,Zn,li),ie=vt,Ee=Zn,Pe=li)},setOp:function(vt,Zn,li){(le!==vt||He!==Zn||Fe!==li)&&(i.stencilOp(vt,Zn,li),le=vt,He=Zn,Fe=li)},setLocked:function(vt){z=vt},setClear:function(vt){Ct!==vt&&(i.clearStencil(vt),Ct=vt)},reset:function(){z=!1,we=null,ie=null,Ee=null,Pe=null,le=null,He=null,Fe=null,Ct=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,T=null,y=null,A=null,E=null,P=null,v=new me(0,0,0),R=0,I=!1,U=null,G=null,X=null,B=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,F=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),Q=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Q=F>=2);let H=null,Y={},he=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),it=new Bt().fromArray(he),je=new Bt().fromArray(ue);function rt(z,we,ie,Ee){let Pe=new Uint8Array(4),le=i.createTexture();i.bindTexture(z,le),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<ie;He++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(we+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return le}let D={};D[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),D[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),D[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(yr),pe(!1),ye(wu),ee(i.CULL_FACE),ce(Wn);function ee(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function _e(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ve(z,we){return d[z]!==we?(i.bindFramebuffer(z,we),d[z]=we,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=we),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ie(z,we){let ie=m,Ee=!1;if(z){ie=f.get(we),ie===void 0&&(ie=[],f.set(we,ie));let Pe=z.textures;if(ie.length!==Pe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let le=0,He=Pe.length;le<He;le++)ie[le]=i.COLOR_ATTACHMENT0+le;ie.length=Pe.length,Ee=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ie)}function Ze(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Mt={[Is]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Nf]:i.FUNC_REVERSE_SUBTRACT};Mt[Uf]=i.MIN,Mt[Ff]=i.MAX;let ae={[Bf]:i.ZERO,[Of]:i.ONE,[kf]:i.SRC_COLOR,[Au]:i.SRC_ALPHA,[Xf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Hf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[Wf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[qf]:i.CONSTANT_COLOR,[$f]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[Zf]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(z,we,ie,Ee,Pe,le,He,Fe,Ct,vt){if(z===Wn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),z!==Lf){if(z!==p||vt!==I){if((b!==Is||A!==Is)&&(i.blendEquation(i.FUNC_ADD),b=Is,A=Is),vt)switch(z){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",z);break}else switch(z){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case an:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eu:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tu:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",z);break}T=null,y=null,E=null,P=null,v.set(0,0,0),R=0,p=z,I=vt}return}Pe=Pe||we,le=le||ie,He=He||Ee,(we!==b||Pe!==A)&&(i.blendEquationSeparate(Mt[we],Mt[Pe]),b=we,A=Pe),(ie!==T||Ee!==y||le!==E||He!==P)&&(i.blendFuncSeparate(ae[ie],ae[Ee],ae[le],ae[He]),T=ie,y=Ee,E=le,P=He),(Fe.equals(v)===!1||Ct!==R)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Ct),v.copy(Fe),R=Ct),p=z,I=!1}function fe(z,we){z.side===It?_e(i.CULL_FACE):ee(i.CULL_FACE);let ie=z.side===rn;we&&(ie=!ie),pe(ie),z.blending===rs&&z.transparent===!1?ce(Wn):ce(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ee=z.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(z){U!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),U=z)}function ye(z){z!==Cf?(ee(i.CULL_FACE),z!==G&&(z===wu?i.cullFace(i.BACK):z===Pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),G=z}function We(z){z!==X&&(Q&&i.lineWidth(z),X=z)}function Ge(z,we,ie){z?(ee(i.POLYGON_OFFSET_FILL),(B!==we||W!==ie)&&(B=we,W=ie,a.getReversed()&&(we=-we),i.polygonOffset(we,ie))):_e(i.POLYGON_OFFSET_FILL)}function Je(z){z?ee(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function et(z){z===void 0&&(z=i.TEXTURE0+J-1),H!==z&&(i.activeTexture(z),H=z)}function N(z,we,ie){ie===void 0&&(H===null?ie=i.TEXTURE0+J-1:ie=H);let Ee=Y[ie];Ee===void 0&&(Ee={type:void 0,texture:void 0},Y[ie]=Ee),(Ee.type!==z||Ee.texture!==we)&&(H!==ie&&(i.activeTexture(ie),H=ie),i.bindTexture(z,we||D[z]),Ee.type=z,Ee.texture=we)}function _t(){let z=Y[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(z){$e("WebGLState:",z)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(z){$e("WebGLState:",z)}}function x(){try{i.texSubImage2D(...arguments)}catch(z){$e("WebGLState:",z)}}function V(){try{i.texSubImage3D(...arguments)}catch(z){$e("WebGLState:",z)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(z){$e("WebGLState:",z)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(z){$e("WebGLState:",z)}}function ge(){try{i.texStorage2D(...arguments)}catch(z){$e("WebGLState:",z)}}function ve(){try{i.texStorage3D(...arguments)}catch(z){$e("WebGLState:",z)}}function ne(){try{i.texImage2D(...arguments)}catch(z){$e("WebGLState:",z)}}function se(){try{i.texImage3D(...arguments)}catch(z){$e("WebGLState:",z)}}function Me(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function ke(z,we){u[z]!==we&&(i.pixelStorei(z,we),u[z]=we)}function Te(z){it.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Se(z){je.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),je.copy(z))}function ze(z,we){let ie=l.get(we);ie===void 0&&(ie=new WeakMap,l.set(we,ie));let Ee=ie.get(z);Ee===void 0&&(Ee=i.getUniformBlockIndex(we,z.name),ie.set(z,Ee))}function Xe(z,we){let Ee=l.get(we).get(z);c.get(we)!==Ee&&(i.uniformBlockBinding(we,Ee,z.__bindingPointIndex),c.set(we,Ee))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,Y={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,T=null,y=null,A=null,E=null,P=null,v=new me(0,0,0),R=0,I=!1,U=null,G=null,X=null,B=null,W=null,it.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:Ze,setBlending:ce,setMaterial:fe,setFlipSided:pe,setCullFace:ye,setLineWidth:We,setPolygonOffset:Ge,setScissorTest:Je,activeTexture:et,bindTexture:N,unbindTexture:_t,compressedTexImage2D:ut,compressedTexImage3D:C,texImage2D:ne,texImage3D:se,pixelStorei:ke,getParameter:Me,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:ge,texStorage3D:ve,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Te,viewport:Se,reset:nt}}function hb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return m?new OffscreenCanvas(C,x):Mr("canvas")}function g(C,x,V){let Z=1,te=ut(C);if((te.width>V||te.height>V)&&(Z=V/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ge=Math.floor(Z*te.width),ve=Math.floor(Z*te.height);d===void 0&&(d=_(ge,ve));let ne=x?_(ge,ve):d;return ne.width=ge,ne.height=ve,ne.getContext("2d").drawImage(C,0,0,ge,ve),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ge+"x"+ve+")."),ne}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function p(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,x,V,Z,te,ge=!1){if(C!==null){if(i[C]!==void 0)return i[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ve;Z&&(ve=e.get("EXT_texture_norm16"),ve||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=x;if(x===i.RED&&(V===i.FLOAT&&(ne=i.R32F),V===i.HALF_FLOAT&&(ne=i.R16F),V===i.UNSIGNED_BYTE&&(ne=i.R8),V===i.UNSIGNED_SHORT&&ve&&(ne=ve.R16_EXT),V===i.SHORT&&ve&&(ne=ve.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.R8UI),V===i.UNSIGNED_SHORT&&(ne=i.R16UI),V===i.UNSIGNED_INT&&(ne=i.R32UI),V===i.BYTE&&(ne=i.R8I),V===i.SHORT&&(ne=i.R16I),V===i.INT&&(ne=i.R32I)),x===i.RG&&(V===i.FLOAT&&(ne=i.RG32F),V===i.HALF_FLOAT&&(ne=i.RG16F),V===i.UNSIGNED_BYTE&&(ne=i.RG8),V===i.UNSIGNED_SHORT&&ve&&(ne=ve.RG16_EXT),V===i.SHORT&&ve&&(ne=ve.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RG8UI),V===i.UNSIGNED_SHORT&&(ne=i.RG16UI),V===i.UNSIGNED_INT&&(ne=i.RG32UI),V===i.BYTE&&(ne=i.RG8I),V===i.SHORT&&(ne=i.RG16I),V===i.INT&&(ne=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),V===i.UNSIGNED_INT&&(ne=i.RGB32UI),V===i.BYTE&&(ne=i.RGB8I),V===i.SHORT&&(ne=i.RGB16I),V===i.INT&&(ne=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),V===i.UNSIGNED_INT&&(ne=i.RGBA32UI),V===i.BYTE&&(ne=i.RGBA8I),V===i.SHORT&&(ne=i.RGBA16I),V===i.INT&&(ne=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGB16_EXT),V===i.SHORT&&ve&&(ne=ve.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),x===i.RGBA){let se=ge?Sa:ct.getTransfer(te);V===i.FLOAT&&(ne=i.RGBA32F),V===i.HALF_FLOAT&&(ne=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ne=se===xt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ve&&(ne=ve.RGBA16_EXT),V===i.SHORT&&ve&&(ne=ve.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function A(C,x){let V;return C?x===null||x===si||x===kr?V=i.DEPTH24_STENCIL8:x===Xn?V=i.DEPTH32F_STENCIL8:x===Or&&(V=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===si||x===kr?V=i.DEPTH_COMPONENT24:x===Xn?V=i.DEPTH_COMPONENT32F:x===Or&&(V=i.DEPTH_COMPONENT16),V}function E(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==sn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){let x=C.target;x.removeEventListener("dispose",P),R(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function v(C){let x=C.target;x.removeEventListener("dispose",v),U(x)}function R(C){let x=n.get(C);if(x.__webglInit===void 0)return;let V=C.source,Z=f.get(V);if(Z){let te=Z[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(C),Object.keys(Z).length===0&&f.delete(V)}n.remove(C)}function I(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let V=C.source,Z=f.get(V);delete Z[x.__cacheKey],a.memory.textures--}function U(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let te=0;te<x.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=C.textures;for(let Z=0,te=V.length;Z<te;Z++){let ge=n.get(V[Z]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(C)}let G=0;function X(){G=0}function B(){return G}function W(C){G=C}function J(){let C=G;return C>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,C}function Q(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function F(C,x){let V=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let Z=C.image;if(Z===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,C,x);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function O(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){_e(V,C,x);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function H(C,x){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){_e(V,C,x);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function Y(C,x){let V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Ve(V,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let he={[Tl]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},ue={[tn]:i.NEAREST,[jf]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ac]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},it={[np]:i.NEVER,[op]:i.ALWAYS,[ip]:i.LESS,[Xc]:i.LEQUAL,[sp]:i.EQUAL,[qc]:i.GEQUAL,[rp]:i.GREATER,[ap]:i.NOTEQUAL};function je(C,x){if(x.type===Xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===sn||x.magFilter===ac||x.magFilter===lo||x.magFilter===os||x.minFilter===sn||x.minFilter===ac||x.minFilter===lo||x.minFilter===os)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,he[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==lo&&x.minFilter!==os||x.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function rt(C,x){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));let Z=x.source,te=f.get(Z);te===void 0&&(te={},f.set(Z,te));let ge=Q(x);if(ge!==C.__cacheKey){te[ge]===void 0&&(te[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),te[ge].usedTimes++;let ve=te[C.__cacheKey];ve!==void 0&&(te[C.__cacheKey].usedTimes--,ve.usedTimes===0&&I(x)),C.__cacheKey=ge,C.__webglTexture=te[ge].texture}return V}function D(C,x,V){return Math.floor(Math.floor(C/V)/x)}function ee(C,x,V,Z){let ge=C.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,Z,x.data);else{ge.sort((ke,Te)=>ke.start-Te.start);let ve=0;for(let ke=1;ke<ge.length;ke++){let Te=ge[ve],Se=ge[ke],ze=Te.start+Te.count,Xe=D(Se.start,x.width,4),nt=D(Te.start,x.width,4);Se.start<=ze+1&&Xe===nt&&D(Se.start+Se.count-1,x.width,4)===Xe?Te.count=Math.max(Te.count,Se.start+Se.count-Te.start):(++ve,ge[ve]=Se)}ge.length=ve+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ke=0,Te=ge.length;ke<Te;ke++){let Se=ge[ke],ze=Math.floor(Se.start/4),Xe=Math.ceil(Se.count/4),nt=ze%x.width,z=Math.floor(ze/x.width),we=Xe,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,nt,z,we,ie,V,Z,x.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function _e(C,x,V){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let te=rt(C,x),ge=x.source;t.bindTexture(Z,C.__webglTexture,i.TEXTURE0+V);let ve=n.get(ge);if(ge.version!==ve.__version||te===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=ct.getPrimaries(ct.workingColorSpace),Ee=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ni||ie===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let se=g(x.image,!1,s.maxTextureSize);se=_t(x,se);let Me=r.convert(x.format,x.colorSpace),ke=r.convert(x.type),Te=y(x.internalFormat,Me,ke,x.normalized,x.colorSpace,x.isVideoTexture);je(Z,x);let Se,ze=x.mipmaps,Xe=x.isVideoTexture!==!0,nt=ve.__version===void 0||te===!0,z=ge.dataReady,we=E(x,se);if(x.isDepthTexture)Te=A(x.format===ls,x.type),nt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Me,ke,null));else if(x.isDataTexture)if(ze.length>0){Xe&&nt&&t.texStorage2D(i.TEXTURE_2D,we,Te,ze[0].width,ze[0].height);for(let ie=0,Ee=ze.length;ie<Ee;ie++)Se=ze[ie],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,ke,Se.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Se.width,Se.height,0,Me,ke,Se.data);x.generateMipmaps=!1}else Xe?(nt&&t.texStorage2D(i.TEXTURE_2D,we,Te,se.width,se.height),z&&ee(x,se,Me,ke)):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Me,ke,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,ze[0].width,ze[0].height,se.depth);for(let ie=0,Ee=ze.length;ie<Ee;ie++)if(Se=ze[ie],x.format!==qn)if(Me!==null)if(Xe){if(z)if(x.layerUpdates.size>0){let Pe=Vu(Se.width,Se.height,x.format,x.type);for(let le of x.layerUpdates){let He=Se.data.subarray(le*Pe/Se.data.BYTES_PER_ELEMENT,(le+1)*Pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,le,Se.width,Se.height,1,Me,He)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Se.width,Se.height,se.depth,0,Se.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,se.depth,Me,ke,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Te,Se.width,Se.height,se.depth,0,Me,ke,Se.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Xe&&nt&&t.texStorage2D(i.TEXTURE_2D,we,Te,ze[0].width,ze[0].height);for(let ie=0,Ee=ze.length;ie<Ee;ie++)Se=ze[ie],x.format!==qn?Me!==null?Xe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Te,Se.width,Se.height,0,Se.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Se.width,Se.height,Me,ke,Se.data):t.texImage2D(i.TEXTURE_2D,ie,Te,Se.width,Se.height,0,Me,ke,Se.data)}else if(x.isDataArrayTexture)if(Xe){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,se.width,se.height,se.depth),z)if(x.layerUpdates.size>0){let ie=Vu(se.width,se.height,x.format,x.type);for(let Ee of x.layerUpdates){let Pe=se.data.subarray(Ee*ie/se.data.BYTES_PER_ELEMENT,(Ee+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,se.width,se.height,1,Me,ke,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,ke,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,Me,ke,se.data);else if(x.isData3DTexture)Xe?(nt&&t.texStorage3D(i.TEXTURE_3D,we,Te,se.width,se.height,se.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,ke,se.data)):t.texImage3D(i.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,Me,ke,se.data);else if(x.isFramebufferTexture){if(nt)if(Xe)t.texStorage2D(i.TEXTURE_2D,we,Te,se.width,se.height);else{let ie=se.width,Ee=se.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Te,ie,Ee,0,Me,ke,null),ie>>=1,Ee>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),u.add(x),ie.onpaint=Ee=>{let Pe=Ee.changedElements;for(let le of u)Pe.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Pe=i.RGBA,le=i.RGBA,He=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,le,He,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&nt){let ie=ut(ze[0]);t.texStorage2D(i.TEXTURE_2D,we,Te,ie.width,ie.height)}for(let ie=0,Ee=ze.length;ie<Ee;ie++)Se=ze[ie],Xe?z&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Me,ke,Se):t.texImage2D(i.TEXTURE_2D,ie,Te,Me,ke,Se);x.generateMipmaps=!1}else if(Xe){if(nt){let ie=ut(se);t.texStorage2D(i.TEXTURE_2D,we,Te,ie.width,ie.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,ke,se)}else t.texImage2D(i.TEXTURE_2D,0,Te,Me,ke,se);p(x)&&b(Z),ve.__version=ge.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ve(C,x,V){if(x.image.length!==6)return;let Z=rt(C,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let ge=n.get(te);if(te.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);let ve=ct.getPrimaries(ct.workingColorSpace),ne=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),se=x.colorSpace===Ni||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Me=x.isCompressedTexture||x.image[0].isCompressedTexture,ke=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let le=0;le<6;le++)!Me&&!ke?Te[le]=g(x.image[le],!0,s.maxCubemapSize):Te[le]=ke?x.image[le].image:x.image[le],Te[le]=_t(x,Te[le]);let Se=Te[0],ze=r.convert(x.format,x.colorSpace),Xe=r.convert(x.type),nt=y(x.internalFormat,ze,Xe,x.normalized,x.colorSpace),z=x.isVideoTexture!==!0,we=ge.__version===void 0||Z===!0,ie=te.dataReady,Ee=E(x,Se);je(i.TEXTURE_CUBE_MAP,x);let Pe;if(Me){z&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,Se.width,Se.height);for(let le=0;le<6;le++){Pe=Te[le].mipmaps;for(let He=0;He<Pe.length;He++){let Fe=Pe[He];x.format!==qn?ze!==null?z?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,nt,Fe.width,Fe.height,0,Fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,0,0,Fe.width,Fe.height,ze,Xe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He,nt,Fe.width,Fe.height,0,ze,Xe,Fe.data)}}}else{if(Pe=x.mipmaps,z&&we){Pe.length>0&&Ee++;let le=ut(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,le.width,le.height)}for(let le=0;le<6;le++)if(ke){z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Te[le].width,Te[le].height,ze,Xe,Te[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,Te[le].width,Te[le].height,0,ze,Xe,Te[le].data);for(let He=0;He<Pe.length;He++){let Ct=Pe[He].image[le].image;z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,Ct.width,Ct.height,ze,Xe,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,nt,Ct.width,Ct.height,0,ze,Xe,Ct.data)}}else{z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ze,Xe,Te[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,ze,Xe,Te[le]);for(let He=0;He<Pe.length;He++){let Fe=Pe[He];z?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,0,0,ze,Xe,Fe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,He+1,nt,ze,Xe,Fe.image[le])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),ge.__version=te.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ie(C,x,V,Z,te,ge){let ve=r.convert(V.format,V.colorSpace),ne=r.convert(V.type),se=y(V.internalFormat,ve,ne,V.normalized,V.colorSpace),Me=n.get(x),ke=n.get(V);if(ke.__renderTarget=x,!Me.__hasExternalTextures){let Te=Math.max(1,x.width>>ge),Se=Math.max(1,x.height>>ge);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ge,se,Te,Se,x.depth,0,ve,ne,null):t.texImage2D(te,ge,se,Te,Se,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,ke.__webglTexture,0,Je(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,ke.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(C,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let Z=x.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,ge=A(x.stencilBuffer,te),ve=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(x),ge,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(x),ge,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ge,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{let Z=x.textures;for(let te=0;te<Z.length;te++){let ge=Z[te],ve=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),se=y(ge.internalFormat,ve,ne,ge.normalized,ge.colorSpace);et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(x),se,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(C,x,V){let Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),je(i.TEXTURE_CUBE_MAP,x.depthTexture);let Me=r.convert(x.depthTexture.format),ke=r.convert(x.depthTexture.type),Te;x.depthTexture.format===fi?Te=i.DEPTH_COMPONENT24:x.depthTexture.format===ls&&(Te=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,x.width,x.height,0,Me,ke,null)}}else F(x.depthTexture,0);let ge=te.__webglTexture,ve=Je(x),ne=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,se=x.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===fi)et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ge,0);else if(x.depthTexture.format===ls)et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,ge,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(C){let x=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=Z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)Mt(x.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?Mt(x.__webglFramebuffer[0],C,0):Mt(x.__webglFramebuffer,C,0)}else if(V){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ze(x.__webglDepthbuffer[Z],C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ze(x.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,x,V){let Z=n.get(C);x!==void 0&&Ie(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ae(C)}function fe(C){let x=C.texture,V=n.get(C),Z=n.get(x);C.addEventListener("dispose",v);let te=C.textures,ge=C.isWebGLCubeRenderTarget===!0,ve=te.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),ge){V.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ne]=[];for(let se=0;se<x.mipmaps.length;se++)V.__webglFramebuffer[ne][se]=i.createFramebuffer()}else V.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)V.__webglFramebuffer[ne]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,se=te.length;ne<se;ne++){let Me=n.get(te[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&et(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let se=te[ne];V.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ne]);let Me=r.convert(se.format,se.colorSpace),ke=r.convert(se.type),Te=y(se.internalFormat,Me,ke,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),Se=Je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,V.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)Ie(V.__webglFramebuffer[ne][se],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else Ie(V.__webglFramebuffer[ne],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(x)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,se=te.length;ne<se;ne++){let Me=te[ne],ke=n.get(Me),Te=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ke.__webglTexture),je(Te,Me),Ie(V.__webglFramebuffer,C,Me,i.COLOR_ATTACHMENT0+ne,Te,0),p(Me)&&b(Te)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),je(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)Ie(V.__webglFramebuffer[se],C,x,i.COLOR_ATTACHMENT0,ne,se);else Ie(V.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,ne,0);p(x)&&b(ne),t.unbindTexture()}C.depthBuffer&&ae(C)}function pe(C){let x=C.textures;for(let V=0,Z=x.length;V<Z;V++){let te=x[V];if(p(te)){let ge=T(C),ve=n.get(te).__webglTexture;t.bindTexture(ge,ve),b(ge),t.unbindTexture()}}}let ye=[],We=[];function Ge(C){if(C.samples>0){if(et(C)===!1){let x=C.textures,V=C.width,Z=C.height,te=i.COLOR_BUFFER_BIT,ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),ne=x.length>1;if(ne)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let se=C.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let ke=n.get(x[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,te,i.NEAREST),c===!0&&(ye.length=0,We.length=0,ye.push(i.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ye.push(ge),We.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Me]);let ke=n.get(x[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Je(C){return Math.min(s.maxSamples,C.samples)}function et(C){let x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function _t(C,x){let V=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ma&&V!==Ni&&(ct.getTransfer(V)===xt?(Z!==qn||te!==Mn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",V)),x}function ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=ce,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ub(i,e){function t(n,s=Ni){let r,a=ct.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Lu)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===oc)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Uu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===qn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===fc)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===vc||n===yc||n===bc||n===Mc||n===po||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===vc)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===kc||n===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oc)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Gc||n===mo||n===Vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rt({vertexShader:db,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new id,p={},b=t.getContextAttributes(),T=null,y=null,A=[],E=[],P=new oe,v=null,R=null,I=new un;I.viewport=new Bt;let U=new un;U.viewport=new Bt;let G=[I,U],X=new ic,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let ee=A[D];return ee===void 0&&(ee=new Er,A[D]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(D){let ee=A[D];return ee===void 0&&(ee=new Er,A[D]=ee),ee.getGripSpace()},this.getHand=function(D){let ee=A[D];return ee===void 0&&(ee=new Er,A[D]=ee),ee.getHandSpace()};function J(D){let ee=E.indexOf(D.inputSource);if(ee===-1)return;let _e=A[ee];_e!==void 0&&(_e.update(D.inputSource,D.frame,l||a),_e.dispatchEvent({type:D.type,data:D.inputSource}))}function Q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",F);for(let D=0;D<A.length;D++){let ee=E[D];ee!==null&&(E[D]=null,A[D].disconnect(ee))}B=null,W=null,g.reset();for(let D in p)delete p[D];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),R!==null){let D=R.camera;D.fov=R.fov,D.zoom=R.zoom,D.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",F),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ve=null,Ie=null;b.depth&&(Ie=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?ls:fi,Ve=b.stencil?kr:si);let Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Xt(d.textureWidth,d.textureHeight,{format:qn,type:Mn,depthTexture:new Ki(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xt(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(D){for(let ee=0;ee<D.removed.length;ee++){let _e=D.removed[ee],Ve=E.indexOf(_e);Ve>=0&&(E[Ve]=null,A[Ve].disconnect(_e))}for(let ee=0;ee<D.added.length;ee++){let _e=D.added[ee],Ve=E.indexOf(_e);if(Ve===-1){for(let Ze=0;Ze<A.length;Ze++)if(Ze>=E.length){E.push(_e),Ve=Ze;break}else if(E[Ze]===null){E[Ze]=_e,Ve=Ze;break}if(Ve===-1)break}let Ie=A[Ve];Ie&&Ie.connect(_e)}}let O=new L,H=new L;function Y(D,ee,_e){O.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(_e.matrixWorld);let Ve=O.distanceTo(H),Ie=ee.projectionMatrix.elements,Ze=_e.projectionMatrix.elements,Mt=Ie[14]/(Ie[10]-1),ae=Ie[14]/(Ie[10]+1),ce=(Ie[9]+1)/Ie[5],fe=(Ie[9]-1)/Ie[5],pe=(Ie[8]-1)/Ie[0],ye=(Ze[8]+1)/Ze[0],We=Mt*pe,Ge=Mt*ye,Je=Ve/(-pe+ye),et=Je*-pe;if(ee.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(et),D.translateZ(Je),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Ie[10]===-1)D.projectionMatrix.copy(ee.projectionMatrix),D.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let N=Mt+Je,_t=ae+Je,ut=We-et,C=Ge+(Ve-et),x=ce*ae/_t*N,V=fe*ae/_t*N;D.projectionMatrix.makePerspective(ut,C,x,V,N,_t),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function he(D,ee){ee===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ee.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let ee=D.near,_e=D.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),X.near=U.near=I.near=ee,X.far=U.far=I.far=_e,(B!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),B=X.near,W=X.far),X.layers.mask=D.layers.mask|6,I.layers.mask=X.layers.mask&-5,U.layers.mask=X.layers.mask&-3;let Ve=D.parent,Ie=X.cameras;he(X,Ve);for(let Ze=0;Ze<Ie.length;Ze++)he(Ie[Ze],Ve);Ie.length===2?Y(X,I,U):X.projectionMatrix.copy(I.projectionMatrix),R===null&&D.isPerspectiveCamera&&(R={camera:D,fov:D.fov,zoom:D.zoom}),ue(D,X,Ve)};function ue(D,ee,_e){_e===null?D.matrix.copy(ee.matrixWorld):(D.matrix.copy(_e.matrixWorld),D.matrix.invert(),D.matrix.multiply(ee.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(ee.projectionMatrix),D.projectionMatrixInverse.copy(ee.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Cl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(D){return p[D]};let it=null;function je(D,ee){if(h=ee.getViewerPose(l||a),m=ee,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ve=!1;_e.length!==X.cameras.length&&(X.cameras.length=0,Ve=!0);for(let ae=0;ae<_e.length;ae++){let ce=_e[ae],fe=null;if(f!==null)fe=f.getViewport(ce);else{let ye=u.getViewSubImage(d,ce);fe=ye.viewport,ae===0&&(e.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(y))}let pe=G[ae];pe===void 0&&(pe=new un,pe.layers.enable(ae),pe.viewport=new Bt,G[ae]=pe),pe.matrix.fromArray(ce.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ce.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(fe.x,fe.y,fe.width,fe.height),ae===0&&(X.matrix.copy(pe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ve===!0&&X.cameras.push(pe)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let ae=u.getDepthInformation(_e[0]);ae&&ae.isValid&&ae.texture&&g.init(ae,s.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ae=0;ae<_e.length;ae++){let ce=_e[ae].camera;if(ce){let fe=p[ce];fe||(fe=new Fa,p[ce]=fe);let pe=u.getCameraImage(ce);fe.sourceTexture=pe}}}}for(let _e=0;_e<A.length;_e++){let Ve=E[_e],Ie=A[_e];Ve!==null&&Ie!==void 0&&Ie.update(Ve,ee,l||a)}it&&it(D,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let rt=new Hp;rt.setAnimationLoop(je),this.setAnimationLoop=function(D){it=D},this.dispose=function(){}}},pb=new ft,$p=new Qe;$p.set(-1,0,0,0,1,0,0,0,1);function mb(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),T=b.envMap,y=b.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($p),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,A){let E=A.program;n.uniformBlockBinding(y,E)}function l(y,A){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",b));let P=A.program;n.updateUBOMapping(y,P);let v=e.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function h(y){let A=u();y.__bindingPointIndex=A;let E=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let A=s[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,R=E.length;v<R;v++){let I=E[v];if(Array.isArray(I))for(let U=0,G=I.length;U<G;U++)f(I[U],v,U,P);else f(I,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,A,E,P){if(_(y,A,E,P)===!0){let v=y.__offset,R=y.value;if(Array.isArray(R)){let I=0;for(let U=0;U<R.length;U++){let G=R[U],X=p(G);m(G,y.__data,I),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,A,E){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,E)}function _(y,A,E,P){let v=y.value,R=A+"_"+E;if(P[R]===void 0)return typeof v=="number"||typeof v=="boolean"?P[R]=v:ArrayBuffer.isView(v)?P[R]=v.slice():P[R]=v.clone(),!0;{let I=P[R];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return P[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function g(y){let A=y.uniforms,E=0,P=16;for(let R=0,I=A.length;R<I;R++){let U=Array.isArray(A[R])?A[R]:[A[R]];for(let G=0,X=U.length;G<X;G++){let B=U[G],W=Array.isArray(B.value)?B.value:[B.value];for(let J=0,Q=W.length;J<Q;J++){let F=W[J],O=p(F),H=E%P,Y=H%O.boundary,he=H+Y;E+=Y,he!==0&&P-he<O.storage&&(E+=P-he),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=O.storage}}}let v=E%P;return v>0&&(E+=P-v),y.__size=E,y.__cache={},this}function p(y){let A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),A}function b(y){let A=y.target;A.removeEventListener("dispose",b);let E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function _b(){return _i===null&&(_i=new La(xb,16,16,cs,on),_i.name="DFG_LUT",_i.minFilter=sn,_i.magFilter=sn,_i.wrapS=di,_i.wrapT=di,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Kc=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,g=new Set([fc,dc,uc]),p=new Set([Mn,si,Or,kr,lc,cc]),b=new Uint32Array(4),T=new Int32Array(4),y=new L,A=null,E=null,P=[],v=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,G=null,X=null,B=null,W=null;this._outputColorSpace=xn;let J=0,Q=0,F=null,O=-1,H=null,Y=new Bt,he=new Bt,ue=null,it=new me(0),je=0,rt=t.width,D=t.height,ee=1,_e=null,Ve=null,Ie=new Bt(0,0,rt,D),Ze=new Bt(0,0,rt,D),Mt=!1,ae=new Ar,ce=!1,fe=!1,pe=new ft,ye=new L,We=new Bt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function et(){return F===null?ee:1}let N=n;function _t(S,k){return t.getContext(S,k)}let ut,C,x,V,Z,te,ge,ve,ne,se,Me,ke,Te,Se,ze,Xe,nt,z,we,ie,Ee,Pe,le;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Zn,!1),N===null){let k="webgl2";if(N=_t(k,S),N===null)throw _t(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(S){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Zn,!1),$e("WebGLRenderer: "+S.message),S}function He(){ut=new Ev(N),ut.init(),Ee=new ub(N,ut),C=new mv(N,ut,e,Ee),x=new cb(N,ut),C.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),X=N.createFramebuffer(),B=N.createFramebuffer(),W=N.createFramebuffer(),V=new Rv(N),Z=new Zy,te=new hb(N,ut,x,Z,C,Ee,V),ge=new wv(I),ve=new Pg(N),Pe=new fv(N,ve),ne=new Tv(N,ve,V,Pe),se=new Pv(N,ne,ve,Pe,V),z=new Cv(N,C,te),ze=new gv(Z),Me=new Yy(I,ge,ut,C,Pe,ze),ke=new mb(I,Z),Te=new Ky,Se=new ib(ut),nt=new dv(I,ge,x,se,m,c),Xe=new lb(I,se,C),le=new gb(N,V,C,x),we=new pv(N,ut,V),ie=new Av(N,ut,V),V.programs=Me.programs,I.capabilities=C,I.extensions=ut,I.properties=Z,I.renderLists=Te,I.shadowMap=Xe,I.state=x,I.info=V}_!==Mn&&(R=new Lv(_,t.width,t.height,o,s,r));let Fe=new sd(I,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize(rt,D,!1))},this.getSize=function(S){return S.set(rt,D)},this.setSize=function(S,k,K=!0){if(Fe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=S,D=k,t.width=Math.floor(S*ee),t.height=Math.floor(k*ee),K===!0&&(t.style.width=S+"px",t.style.height=k+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(rt*ee,D*ee).floor()},this.setDrawingBufferSize=function(S,k,K){rt=S,D=k,ee=K,t.width=Math.floor(S*K),t.height=Math.floor(k*K),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(_===Mn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Y)},this.getViewport=function(S){return S.copy(Ie)},this.setViewport=function(S,k,K,q){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,k,K,q),x.viewport(Y.copy(Ie).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(Ze)},this.setScissor=function(S,k,K,q){S.isVector4?Ze.set(S.x,S.y,S.z,S.w):Ze.set(S,k,K,q),x.scissor(he.copy(Ze).multiplyScalar(ee).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){x.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Ve=S},this.getClearColor=function(S){return S.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,K=!0){let q=0;if(S){let $=!1;if(F!==null){let Ce=F.texture.format;$=g.has(Ce)}if($){let Ce=F.texture.type,De=p.has(Ce),Re=nt.getClearColor(),Ne=nt.getClearAlpha(),Oe=Re.r,at=Re.g,dt=Re.b;De?(b[0]=Oe,b[1]=at,b[2]=dt,b[3]=Ne,N.clearBufferuiv(N.COLOR,0,b)):(T[0]=Oe,T[1]=at,T[2]=dt,T[3]=Ne,N.clearBufferiv(N.COLOR,0,T))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),G=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Zn,!1),nt.dispose(),Te.dispose(),Se.dispose(),Z.dispose(),ge.dispose(),se.dispose(),Pe.dispose(),le.dispose(),Me.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Bd),Fe.removeEventListener("sessionend",Od),ys.stop()};function Ct(S){S.preventDefault(),wa("WebGLRenderer: Context Lost."),U=!0}function vt(){wa("WebGLRenderer: Context Restored."),U=!1;let S=V.autoReset,k=Xe.enabled,K=Xe.autoUpdate,q=Xe.needsUpdate,$=Xe.type;He(),V.autoReset=S,Xe.enabled=k,Xe.autoUpdate=K,Xe.needsUpdate=q,Xe.type=$}function Zn(S){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function li(S){let k=S.target;k.removeEventListener("dispose",li),f0(k)}function f0(S){p0(S),Z.remove(S)}function p0(S){let k=Z.get(S).programs;k!==void 0&&(k.forEach(function(K){Me.releaseProgram(K)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,K,q,$,Ce){k===null&&(k=Ge);let De=$.isMesh&&$.matrixWorld.determinantAffine()<0,Re=x0(S,k,K,q,$);x.setMaterial(q,De);let Ne=K.index,Oe=1;if(q.wireframe===!0){if(Ne=ne.getWireframeAttribute(K),Ne===void 0)return;Oe=2}let at=K.drawRange,dt=K.attributes.position,Ue=at.start*Oe,yt=(at.start+at.count)*Oe;Ce!==null&&(Ue=Math.max(Ue,Ce.start*Oe),yt=Math.min(yt,(Ce.start+Ce.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),yt=Math.min(yt,Ne.count)):dt!=null&&(Ue=Math.max(Ue,0),yt=Math.min(yt,dt.count));let Vt=yt-Ue;if(Vt<0||Vt===1/0)return;Pe.setup($,q,Re,K,Ne);let Lt,At=we;if(Ne!==null&&(Lt=ve.get(Ne),At=ie,At.setIndex(Lt)),$.isMesh)q.wireframe===!0?(x.setLineWidth(q.wireframeLinewidth*et()),At.setMode(N.LINES)):At.setMode(N.TRIANGLES);else if($.isLine){let ln=q.linewidth;ln===void 0&&(ln=1),x.setLineWidth(ln*et()),$.isLineSegments?At.setMode(N.LINES):$.isLineLoop?At.setMode(N.LINE_LOOP):At.setMode(N.LINE_STRIP)}else $.isPoints?At.setMode(N.POINTS):$.isSprite&&At.setMode(N.TRIANGLES);if($.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))At.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let ln=$._multiDrawStarts,Le=$._multiDrawCounts,mn=$._multiDrawCount,mt=Ne?ve.get(Ne).bytesPerElement:1,Hn=Z.get(q).currentProgram.getUniforms();for(let ci=0;ci<mn;ci++)Hn.setValue(N,"_gl_DrawID",ci),At.render(ln[ci]/mt,Le[ci])}else if($.isInstancedMesh)At.renderInstances(Ue,Vt,$.count);else if(K.isInstancedBufferGeometry){let ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Le=Math.min(K.instanceCount,ln);At.renderInstances(Ue,Vt,Le)}else At.render(Ue,Vt)};function Fd(S,k,K,q){G!==null&&S.isNodeMaterial&&G.setObject(q,S),ce===!0&&ze.setState(S,K,!1),S.transparent===!0&&S.side===It&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,zo(S,k,q),S.side=ss,S.needsUpdate=!0,zo(S,k,q),S.side=It):zo(S,k,q)}this.compile=function(S,k,K=null){K===null&&(K=S),G!==null&&G.renderStart(S,k,K),E=Se.get(K),E.init(k),v.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),S!==K&&S.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),G!==null&&G.updateLights(E.state.lightsArray),fe=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,fe),ce===!0&&ze.setGlobalState(this.clippingPlanes,k),G!==null&&Xe.render(E.state.shadowsArray,K,k);let q=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let De=0;De<Ce.length;De++){let Re=Ce[De];Fd(Re,K,k,$),q.add(Re)}else Fd(Ce,K,k,$),q.add(Ce)}),E=v.pop(),G!==null&&G.renderEnd(),q},this.compileAsync=function(S,k,K=null){let q=this.compile(S,k,K);return new Promise($=>{function Ce(){if(q.forEach(function(De){let Ne=Z.get(De).currentProgram;(Ne===void 0||Ne.isReady())&&q.delete(De)}),q.size===0){$(S);return}setTimeout(Ce,10)}ut.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Fh=null;function m0(S){Fh&&Fh(S)}function Bd(){ys.stop()}function Od(){ys.start()}let ys=new Hp;ys.setAnimationLoop(m0),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(S){Fh=S,Fe.setAnimationLoop(S),S===null?ys.stop():ys.start()},Fe.addEventListener("sessionstart",Bd),Fe.addEventListener("sessionend",Od),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(S,k);let K=Fe.enabled===!0&&Fe.isPresenting===!0,q=R!==null&&(F===null||K)&&R.begin(I,F);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(k),k=Fe.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,k,F),E=Se.get(S,v.length),E.init(k),E.state.textureUnits=te.getTextureUnits(),v.push(E),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ae.setFromProjectionMatrix(pe,ei,k.reversedDepth),fe=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,fe),A=Te.get(S,P.length),A.init(),P.push(A),Fe.enabled===!0&&Fe.isPresenting===!0){let De=I.xr.getDepthSensingMesh();De!==null&&Bh(De,k,-1/0,I.sortObjects)}Bh(S,k,0,I.sortObjects),A.finish(),G!==null&&G.updateLights(E.state.lightsArray),I.sortObjects===!0&&A.sort(_e,Ve),Je=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Je&&nt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ze.beginShadows();let $=E.state.shadowsArray;if(Xe.render($,S,k),ce===!0&&ze.endShadows(),(q&&R.hasRenderPass())===!1){let De=A.opaque,Re=A.transmissive;if(E.setupLights(),k.isArrayCamera){let Ne=k.cameras;if(Re.length>0)for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe];zd(De,Re,S,dt)}Je&&nt.render(S);for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe];kd(A,S,dt,dt.viewport)}}else Re.length>0&&zd(De,Re,S,k),Je&&nt.render(S),kd(A,S,k)}F!==null&&Q===0&&(te.updateMultisampleRenderTarget(F),te.updateRenderTargetMipmap(F)),q&&R.end(I),S.isScene===!0&&S.onAfterRender(I,S,k),Pe.resetDefaultState(),O=-1,H=null,v.pop(),v.length>0?(E=v[v.length-1],te.setTextureUnits(E.state.textureUnits),ce===!0&&ze.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,G!==null&&G.renderEnd()};function Bh(S,k,K,q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ae)){q&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);let De=se.update(S),Re=S.material;Re.visible&&A.push(S,De,Re,K,We.z,null,k)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ae))){let De=se.update(S),Re=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),We.copy(De.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(Re)){let Ne=De.groups;for(let Oe=0,at=Ne.length;Oe<at;Oe++){let dt=Ne[Oe],Ue=Re[dt.materialIndex];Ue&&Ue.visible&&A.push(S,De,Ue,K,We.z,dt,k)}}else Re.visible&&A.push(S,De,Re,K,We.z,null,k)}}let Ce=S.children;for(let De=0,Re=Ce.length;De<Re;De++)Bh(Ce[De],k,K,q)}function kd(S,k,K,q){let{opaque:$,transmissive:Ce,transparent:De}=S;E.setupLightsView(K),ce===!0&&ze.setGlobalState(I.clippingPlanes,K),q&&x.viewport(Y.copy(q)),$.length>0&&ko($,k,K),Ce.length>0&&ko(Ce,k,K),De.length>0&&ko(De,k,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function zd(S,k,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let Ue=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new Xt(1,1,{generateMipmaps:!0,type:Ue?on:Mn,minFilter:os,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ce=E.state.transmissionRenderTarget[q.id],De=q.viewport||Y;Ce.setSize(De.z*I.transmissionResolutionScale,De.w*I.transmissionResolutionScale);let Re=I.getRenderTarget(),Ne=I.getActiveCubeFace(),Oe=I.getActiveMipmapLevel();I.setRenderTarget(Ce),I.getClearColor(it),je=I.getClearAlpha(),je<1&&I.setClearColor(16777215,.5),I.clear(),Je&&nt.render(K);let at=I.toneMapping;I.toneMapping=ii;let dt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),ce===!0&&ze.setGlobalState(I.clippingPlanes,q),ko(S,K,q),te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let yt=0,Vt=k.length;yt<Vt;yt++){let Lt=k[yt],{object:At,geometry:ln,material:Le,group:mn}=Lt;if(Le.side===It&&At.layers.test(q.layers)){let mt=Le.side;Le.side=rn,Le.needsUpdate=!0,Hd(At,K,q,ln,Le,mn),Le.side=mt,Le.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce))}I.setRenderTarget(Re,Ne,Oe),I.setClearColor(it,je),dt!==void 0&&(q.viewport=dt),I.toneMapping=at}function ko(S,k,K){let q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Ce=S.length;$<Ce;$++){let De=S[$],{object:Re,geometry:Ne,group:Oe}=De,at=De.material;at.allowOverride===!0&&q!==null&&(at=q),Re.layers.test(K.layers)&&Hd(Re,k,K,Ne,at,Oe)}}function Hd(S,k,K,q,$,Ce){G!==null&&$.isNodeMaterial&&G.setObject(S,$),S.onBeforeRender(I,k,K,q,$,Ce),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(I,k,K,q,S,Ce),$.transparent===!0&&$.side===It&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,I.renderBufferDirect(K,k,q,$,S,Ce),$.side=ss,$.needsUpdate=!0,I.renderBufferDirect(K,k,q,$,S,Ce),$.side=It):I.renderBufferDirect(K,k,q,$,S,Ce),S.onAfterRender(I,k,K,q,$,Ce)}function zo(S,k,K){k.isScene!==!0&&(k=Ge);let q=Z.get(S),$=E.state.lights,Ce=E.state.shadowsArray,De=$.state.version,Re=Me.getParameters(S,$.state,Ce,k,K,E.state.lightProbeGridArray),Ne=Me.getProgramCacheKey(Re),Oe=q.programs;q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;let at=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;q.envMap=ge.get(S.envMap||q.environment,at),q.envMapRotation=q.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",li),Oe=new Map,q.programs=Oe);let dt=Oe.get(Ne);if(dt!==void 0){if(q.currentProgram===dt&&q.lightsStateVersion===De)return Vd(S,Re),dt}else Re.uniforms=Me.getUniforms(S),G!==null&&S.isNodeMaterial&&G.build(S,K,Re),S.onBeforeCompile(Re,I),dt=Me.acquireProgram(Re,Ne),Oe.set(Ne,dt),q.uniforms=Re.uniforms;let Ue=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Vd(S,Re),q.needsLights=v0(S),q.lightsStateVersion=De,q.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.sunLights.value=$.state.sun,Ue.sunLightShadows.value=$.state.sunShadow,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.sunShadowMatrix.value=$.state.sunShadowMatrix,Ue.sunShadowCascade.value=$.state.sunShadowCascade,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=dt,q.uniformsList=null,dt}function Gd(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=Gr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Vd(S,k){let K=Z.get(S);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function g0(S,k){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let K=0,q=S.length;K<q;K++){let $=S[K];if($.texture!==null&&$.boundingBox.containsPoint(y))return $}return null}function x0(S,k,K,q,$){k.isScene!==!0&&(k=Ge),te.resetTextureUnits();let Ce=k.fog,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,Re=F===null?I.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ct.workingColorSpace,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Oe=ge.get(q.envMap||De,Ne),at=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,dt=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!K.morphAttributes.position,yt=!!K.morphAttributes.normal,Vt=!!K.morphAttributes.color,Lt=ii;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=I.toneMapping);let At=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=At!==void 0?At.length:0,Le=Z.get(q),mn=E.state.lights;if(ce===!0&&(fe===!0||S!==H)){let Pt=S===H&&q.id===O;ze.setState(q,S,Pt)}let mt=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==mn.state.version||Le.outputColorSpace!==Re||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==Oe||q.fog===!0&&Le.fog!==Ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ze.numPlanes||Le.numIntersection!==ze.numIntersection)||Le.vertexAlphas!==at||Le.vertexTangents!==dt||Le.morphTargets!==Ue||Le.morphNormals!==yt||Le.morphColors!==Vt||Le.toneMapping!==Lt||Le.morphTargetsCount!==ln||!!Le.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Le.__version=q.version);let Hn=Le.currentProgram;mt===!0&&(Hn=zo(q,k,$),G&&q.isNodeMaterial&&G.onUpdateProgram(q,Hn,Le));let ci=!1,Gi=!1,js=!1,Et=Hn.getUniforms(),Ht=Le.uniforms;if(x.useProgram(Hn.program)&&(ci=!0,Gi=!0,js=!0),q.id!==O&&(O=q.id,Gi=!0),Le.needsLights){let Pt=g0(E.state.lightProbeGridArray,$);Le.lightProbeGrid!==Pt&&(Le.lightProbeGrid=Pt,Gi=!0)}if(ci||H!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(N,"projectionMatrix",S.projectionMatrix),Et.setValue(N,"viewMatrix",S.matrixWorldInverse);let Wi=Et.map.cameraPosition;Wi!==void 0&&Wi.setValue(N,ye.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&Et.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),H!==S&&(H=S,Gi=!0,js=!0)}if(Le.needsLights&&(mn.state.sunShadowMap.length>0&&Et.setValue(N,"sunShadowMap",mn.state.sunShadowMap,te),mn.state.directionalShadowMap.length>0&&Et.setValue(N,"directionalShadowMap",mn.state.directionalShadowMap,te),mn.state.spotShadowMap.length>0&&Et.setValue(N,"spotShadowMap",mn.state.spotShadowMap,te),mn.state.pointShadowMap.length>0&&Et.setValue(N,"pointShadowMap",mn.state.pointShadowMap,te)),$.isSkinnedMesh){Et.setOptional(N,$,"bindMatrix"),Et.setOptional(N,$,"bindMatrixInverse");let Pt=$.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Et.setValue(N,"boneTexture",Pt.boneTexture,te))}$.isBatchedMesh&&(Et.setOptional(N,$,"batchingTexture"),Et.setValue(N,"batchingTexture",$._matricesTexture,te),Et.setOptional(N,$,"batchingIdTexture"),Et.setValue(N,"batchingIdTexture",$._indirectTexture,te),Et.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&Et.setValue(N,"batchingColorTexture",$._colorsTexture,te));let Vi=K.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&z.update($,K,Hn),(Gi||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,Et.setValue(N,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ht.envMapIntensity.value=k.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=_b()),Gi){if(Et.setValue(N,"toneMappingExposure",I.toneMappingExposure),Le.needsLights&&_0(Ht,js),Ce&&q.fog===!0&&ke.refreshFogUniforms(Ht,Ce),ke.refreshMaterialUniforms(Ht,q,ee,D,E.state.transmissionRenderTarget[S.id]),Le.needsLights&&Le.lightProbeGrid){let Pt=Le.lightProbeGrid;Ht.probesSH.value=Pt.texture,Ht.probesMin.value.copy(Pt.boundingBox.min),Ht.probesMax.value.copy(Pt.boundingBox.max),Ht.probesResolution.value.copy(Pt.resolution)}Gr.upload(N,Gd(Le),Ht,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gr.upload(N,Gd(Le),Ht,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(N,"center",$.center),Et.setValue(N,"modelViewMatrix",$.modelViewMatrix),Et.setValue(N,"normalMatrix",$.normalMatrix),Et.setValue(N,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){let Pt=q.uniformsGroups;for(let Wi=0,Qs=Pt.length;Wi<Qs;Wi++){let Xd=Pt[Wi];le.update(Xd,Hn),le.bind(Xd,Hn)}}return Hn}function _0(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function v0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,k,K){let q=Z.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(S.texture).__webglTexture=k,Z.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let K=Z.get(S);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,K=0){F=S,J=k,Q=K;let q=null,$=!1,Ce=!1;if(S){let Re=Z.get(S);if(Re.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,Re.__webglFramebuffer),Y.copy(S.viewport),he.copy(S.scissor),ue=S.scissorTest,x.viewport(Y),x.scissor(he),x.setScissorTest(ue),O=-1;return}else if(Re.__webglFramebuffer===void 0)te.setupRenderTarget(S);else if(Re.__hasExternalTextures)te.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let at=S.depthTexture;if(Re.__boundDepthTexture!==at){if(at!==null&&Z.has(at)&&(S.width!==at.image.width||S.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(S)}}let Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);let Oe=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?q=Oe[k][K]:q=Oe[k],$=!0):S.samples>0&&te.useMultisampledRTT(S)===!1?q=Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[K]:q=Oe,Y.copy(S.viewport),he.copy(S.scissor),ue=S.scissorTest}else Y.copy(Ie).multiplyScalar(ee).floor(),he.copy(Ze).multiplyScalar(ee).floor(),ue=Mt;if(K!==0&&(q=X),x.bindFramebuffer(N.FRAMEBUFFER,q)&&x.drawBuffers(S,q),x.viewport(Y),x.scissor(he),x.setScissorTest(ue),$){let Re=Z.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,K)}else if(Ce){let Re=k;for(let Ne=0;Ne<S.textures.length;Ne++){let Oe=Z.get(S.textures[Ne]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,K,Re)}}else if(S!==null&&K!==0){let Re=Z.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,K)}O=-1};function Wd(S){let k=Z.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=C.textureFormatReadable(S.format),k.__typeReadable=C.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,K,q,$,Ce,De,Re=0){if(!(S&&S.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){x.bindFramebuffer(N.FRAMEBUFFER,Ne);try{let Oe=S.textures[Re],at=Oe.format,dt=Oe.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re);let Ue=Wd(Oe);if(Ue.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-q&&K>=0&&K<=S.height-$&&N.readPixels(k,K,q,$,Ee.convert(at),Ee.convert(dt),Ce)}finally{let Oe=F!==null?Z.get(F).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,k,K,q,$,Ce,De,Re=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(k>=0&&k<=S.width-q&&K>=0&&K<=S.height-$){x.bindFramebuffer(N.FRAMEBUFFER,Ne);let Oe=S.textures[Re],at=Oe.format,dt=Oe.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Re);let Ue=Wd(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,Ce.byteLength,N.STREAM_READ),N.readPixels(k,K,q,$,Ee.convert(at),Ee.convert(dt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Vt=F!==null?Z.get(F).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,Vt);let Lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hp(N,Lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ce),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(yt),N.deleteSync(Lt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,K=0){let q=Math.pow(2,-K),$=Math.floor(S.image.width*q),Ce=Math.floor(S.image.height*q),De=k!==null?k.x:0,Re=k!==null?k.y:0;te.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,De,Re,$,Ce),x.unbindTexture()},this.copyTextureToTexture=function(S,k,K=null,q=null,$=0,Ce=0){let De,Re,Ne,Oe,at,dt,Ue,yt,Vt,Lt=S.isCompressedTexture?S.mipmaps[Ce]:S.image;if(K!==null)De=K.max.x-K.min.x,Re=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,at=K.min.y,dt=K.isBox3?K.min.z:0;else{let Ht=Math.pow(2,-$);De=Math.floor(Lt.width*Ht),Re=Math.floor(Lt.height*Ht),S.isDataArrayTexture?Ne=Lt.depth:S.isData3DTexture?Ne=Math.floor(Lt.depth*Ht):Ne=1,Oe=0,at=0,dt=0}q!==null?(Ue=q.x,yt=q.y,Vt=q.z):(Ue=0,yt=0,Vt=0);let At=Ee.convert(k.format),ln=Ee.convert(k.type),Le;k.isData3DTexture?(te.setTexture3D(k,0),Le=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(te.setTexture2DArray(k,0),Le=N.TEXTURE_2D_ARRAY):(te.setTexture2D(k,0),Le=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let mn=x.getParameter(N.UNPACK_ROW_LENGTH),mt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),Hn=x.getParameter(N.UNPACK_SKIP_PIXELS),ci=x.getParameter(N.UNPACK_SKIP_ROWS),Gi=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,Lt.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),x.pixelStorei(N.UNPACK_SKIP_ROWS,at),x.pixelStorei(N.UNPACK_SKIP_IMAGES,dt);let js=S.isDataArrayTexture||S.isData3DTexture,Et=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let Ht=Z.get(S),Vi=Z.get(k),Pt=Z.get(Ht.__renderTarget),Wi=Z.get(Vi.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,Pt.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Qs=0;Qs<Ne;Qs++)js&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,$,dt+Qs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,Ce,Vt+Qs)),N.blitFramebuffer(Oe,at,De,Re,Ue,yt,De,Re,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||Z.has(S)){let Ht=Z.get(S),Vi=Z.get(k);x.bindFramebuffer(N.READ_FRAMEBUFFER,B),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,W);for(let Pt=0;Pt<Ne;Pt++)js?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ht.__webglTexture,$,dt+Pt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ht.__webglTexture,$),Et?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vi.__webglTexture,Ce,Vt+Pt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vi.__webglTexture,Ce),$!==0?N.blitFramebuffer(Oe,at,De,Re,Ue,yt,De,Re,N.COLOR_BUFFER_BIT,N.NEAREST):Et?N.copyTexSubImage3D(Le,Ce,Ue,yt,Vt+Pt,Oe,at,De,Re):N.copyTexSubImage2D(Le,Ce,Ue,yt,Oe,at,De,Re);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Et?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Le,Ce,Ue,yt,Vt,De,Re,Ne,At,ln,Lt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Le,Ce,Ue,yt,Vt,De,Re,Ne,At,Lt.data):N.texSubImage3D(Le,Ce,Ue,yt,Vt,De,Re,Ne,At,ln,Lt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ce,Ue,yt,De,Re,At,ln,Lt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ce,Ue,yt,Lt.width,Lt.height,At,Lt.data):N.texSubImage2D(N.TEXTURE_2D,Ce,Ue,yt,De,Re,At,ln,Lt);x.pixelStorei(N.UNPACK_ROW_LENGTH,mn),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,Hn),x.pixelStorei(N.UNPACK_SKIP_ROWS,ci),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Gi),Ce===0&&k.generateMipmaps&&N.generateMipmap(Le),x.unbindTexture()},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&te.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?te.setTextureCube(S,0):S.isData3DTexture?te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?te.setTexture2DArray(S,0):te.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){J=0,Q=0,F=null,x.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vb=new is(-1,1,1,-1,0,1),rd=class extends gt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},yb=new rd,hs=class{constructor(e){this._mesh=new de(yb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var th=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ui.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var vo=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},nh=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ih=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new th(Wr),this.copyPass.material.blending=Wn,this.timer=new Qa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(a instanceof vo?n=!0:a instanceof nh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sh=class extends Nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Yp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Xr=class i extends Nn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Xt(r,a,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Xt(r,a,{type:on,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Yp;this.highPassUniforms=Ui.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ui.clone(Wr.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,premultipliedAlpha:!0,blending:an,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new me,this._oldClearAlpha=1,this._basic=new Ye,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Rt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Xr.BlurDirectionX=new oe(1,0);Xr.BlurDirectionY=new oe(0,1);var yo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var rh=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ui.clone(yo.uniforms),this.material=new Nr({name:yo.name,uniforms:this.uniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===to?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===no?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===io?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===so&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};import{GlitterWallet as qs}from"./glitter-wallet.js";var ah=class{constructor(){this.ctx=null,this.sfxVol=.8,this.musicVol=.45,this.musicOn=!1,this.spatial=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=1,this.master.connect(this.ctx.destination),this.sfx=this.ctx.createGain(),this.sfx.gain.value=this.sfxVol,this.sfx.connect(this.master),this.mus=this.ctx.createGain(),this.mus.gain.value=this.musicVol,this.mus.connect(this.master);let t=this.ctx.sampleRate*.5;this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1}setVol(e,t){this.sfxVol=e,this.musicVol=t,this.ctx&&(this.sfx.gain.value=e,this.mus.gain.value=t)}get t(){return this.ctx.currentTime}out(e){if(e&&this.ctx.createPanner){let t=this.ctx.createPanner();return t.panningModel="HRTF",t.distanceModel="inverse",t.refDistance=3,t.rolloffFactor=.9,t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z),t.connect(this.sfx),t}return this.sfx}env(e,t,n,s,r){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(s,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+r)}moo(e=1,t=null,n=.5){if(!this.ctx)return;let s=this.t,r=this.ctx.createOscillator(),a=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),c=this.ctx.createGain(),l=150*e;r.type="sawtooth",a.type="square",r.frequency.setValueAtTime(l*.85,s),r.frequency.linearRampToValueAtTime(l*1.08,s+.18),r.frequency.exponentialRampToValueAtTime(l*.7,s+.75),a.frequency.setValueAtTime(l*.5,s),a.frequency.exponentialRampToValueAtTime(l*.36,s+.75),o.type="lowpass",o.Q.value=6,o.frequency.setValueAtTime(380,s),o.frequency.linearRampToValueAtTime(1100,s+.25),o.frequency.linearRampToValueAtTime(450,s+.75);let h=this.ctx.createOscillator(),u=this.ctx.createGain();h.frequency.value=6,u.gain.value=l*.04,h.connect(u),u.connect(r.frequency);let d=this.ctx.createGain();d.gain.value=.25,a.connect(d),d.connect(o),r.connect(o),o.connect(c),c.connect(this.out(t)),this.env(c,s,.06,n,.75),[r,a,h].forEach(f=>{f.start(s),f.stop(s+.9)})}tone(e,t,n,s,r=.3,a=null,o=0){if(!this.ctx)return;let c=this.t+o,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(t,c),n&&l.frequency.exponentialRampToValueAtTime(n,c+s),l.connect(h),h.connect(this.out(a)),this.env(h,c,.01,r,s),l.start(c),l.stop(c+s+.05)}noiseHit(e=.2,t=2e3,n=.3,s=null){if(!this.ctx)return;let r=this.t,a=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.buffer=this.noise,o.type="bandpass",o.frequency.value=t,o.Q.value=1.2,a.connect(o),o.connect(c),c.connect(this.out(s)),this.env(c,r,.005,n,e),a.start(r),a.stop(r+e+.05)}squeak(){this.tone("sine",900,1800,.08,.25),this.tone("sine",1800,1100,.08,.2,null,.07)}boing(){this.tone("sine",160,620,.32,.35),this.tone("triangle",320,1200,.25,.12)}jump(){this.tone("sine",300,700,.15,.22)}poof(e){this.noiseHit(.35,1800,.35,e),this.tone("triangle",600,1500,.12,.15,e)}chime(e=0){[784,988,1175,1568].forEach((n,s)=>this.tone("triangle",n*(1+e*.06),null,.18,.15,null,s*.05))}glitter(){for(let e=0;e<5;e++)this.tone("sine",1800+Math.random()*1600,null,.12,.08,null,e*.035)}bump(){this.tone("sine",220,90,.25,.4),this.noiseHit(.15,400,.3)}whoosh(){this.noiseHit(.9,900,.3),this.tone("sine",200,1400,.9,.15)}stomp(){this.tone("sine",90,40,.5,.6),this.noiseHit(.4,250,.4)}fanfare(){[523,659,784,1047,784,1047].forEach((e,t)=>this.tone("square",e,null,.16,.09,null,t*.13))}ultra(){[523,659,784,1047,1319,1568,2093].forEach((e,t)=>{this.tone("triangle",e,null,.5,.12,null,t*.07),this.tone("sine",e*1.5,null,.6,.06,null,t*.07+.03)}),this.tone("sine",262,524,1.4,.15,null,.05)}levelUp(){[392,523,659,784,1047].forEach((e,t)=>this.tone("square",e,null,.18,.08,null,t*.09)),this.tone("triangle",1568,2093,.6,.1,null,.45)}zap(e){this.noiseHit(.25,3500,.3,e),this.tone("sawtooth",1400,200,.2,.12,e)}heal(){[660,880,1320].forEach((e,t)=>this.tone("sine",e,e*1.2,.3,.12,null,t*.06))}ping(e,t=1320){this.tone("sine",t,null,.12,.25,e)}startMusic(e="calm"){if(!this.ctx)return;this.stopMusic(),this.musicOn=!0,this.mood=e;let t=[0,2,4,7,9,12,14,16],n=e==="boss"?[0,-2,-4,-5]:[0,-3,-5,-7],s=e==="boss"?150:e==="stampede"?140:112,r=60/s/2,a=0,o=this.t+.1,c=e==="boss"?196:262,l=7,h=()=>(l=(l*9301+49297)%233280)/233280,u=Array.from({length:32},()=>h()<.7?t[Math.floor(h()*t.length)]:null),d=()=>{if(this.musicOn){for(;o<this.t+.3;){let f=Math.floor(a/8)%4,m=u[a%32];m!==null&&this.note("triangle",c*Math.pow(2,m/12),o,r*.9,.12),a%2===0&&this.note("sine",c/2*Math.pow(2,n[f]/12),o,r*1.6,.18),a%4===2&&this.noteNoise(o,.05),o+=r,a++}this.musicTimer=setTimeout(d,100)}};d()}note(e,t,n,s,r){let a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=e,a.frequency.value=t,a.connect(o),o.connect(this.mus),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(r,n+.01),o.gain.exponentialRampToValueAtTime(1e-4,n+s),a.start(n),a.stop(n+s+.02)}noteNoise(e,t){let n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=this.noise,s.type="highpass",s.frequency.value=6e3,n.connect(s),s.connect(r),r.connect(this.mus),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.05),n.start(e),n.stop(e+.08)}stopMusic(){this.musicOn=!1,clearTimeout(this.musicTimer)}};function Fs(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var oh=null;function lh(){if(oh)return oh;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),oh=new Rs(i),oh}function Zp(i,e){let t=new Ut(400,32,16),n=new Rt({side:rn,depthWrite:!1,fog:!1,uniforms:{top:{value:new me(328730)},mid:{value:new me(1708112)},hor:{value:new me(867162)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 hor; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.15? mix(mid, top, smoothstep(0.15,0.8,h)) : mix(hor, mid, smoothstep(-0.2,0.15,h)); gl_FragColor=vec4(c,1.0);}"}),s=new de(t,n);s.renderOrder=-10,i.add(s);let r=900,a=new Float32Array(r*3),o=Fs(42);for(let u=0;u<r;u++){let d=o()*Math.PI*2,f=Math.acos(o()*.95);a[u*3]=Math.sin(f)*Math.cos(d)*380,a[u*3+1]=Math.cos(f)*380,a[u*3+2]=Math.sin(f)*Math.sin(d)*380}let c=new gt;c.setAttribute("position",new Nt(a,3));let l=new As(c,new Cr({size:1.6,color:12572927,map:lh(),transparent:!0,depthWrite:!1,fog:!1,sizeAttenuation:!1}));i.add(l);let h=[[15260159,26,new L(-120,150,-260)],[11071743,12,new L(-60,120,-290)]];for(let[u,d,f]of h){let m=new de(new Ut(d,32,16),new Ye({color:u,fog:!1}));m.position.copy(f),i.add(m);let _=new Ji(new Li({map:lh(),color:u,transparent:!0,opacity:.45,depthWrite:!1,fog:!1,blending:an}));_.scale.setScalar(d*5),_.position.copy(f),i.add(_)}e.push((u,d)=>{s.position.copy(d.position),l.position.copy(d.position),l.rotation.y=u*.003})}function ad(i,e,t,n,s,r,a=1923666){let o=Fs(r),c=[];c.push(new oe(.001,.25)),c.push(new oe(n*.7,.22)),c.push(new oe(n*.95,.05)),c.push(new oe(n,-.3));let l=7;for(let p=1;p<=l;p++){let b=p/l;c.push(new oe(Math.max(.05,n*(1-b)*(.75+o()*.3)),-.3-s*Math.pow(b,.8)))}let h=new qa(c,28),u=h.attributes.position,d=new Float32Array(u.count*3),f=new me(a),m=new me(2760773),_=new me(4009315);for(let p=0;p<u.count;p++){let b=u.getY(p),T=Math.atan2(u.getZ(p),u.getX(p));if(b<-.35){let A=Math.sin(T*5+b*2+r)*.12+Math.sin(T*11)*.06;u.setX(p,u.getX(p)*(1+A)),u.setZ(p,u.getZ(p)*(1+A))}let y=b>-.1?f:m.clone().lerp(_,(Math.sin(b*3+T*3)+1)/2);d[p*3]=y.r,d[p*3+1]=y.g,d[p*3+2]=y.b}h.setAttribute("color",new Nt(d,3)),h.computeVertexNormals();let g=new de(h,new pt({vertexColors:!0,roughness:.92,metalness:0}));return g.position.set(i,e,t),g.receiveShadow=!1,g}var ch=class{constructor(e,t=160){let n=new bt(.12,.2,1,7);n.translate(0,.5,0);let s=new Ut(.6,16,8,0,Math.PI*2,0,Math.PI/2);s.scale(1,.6,1);{let h=s.attributes.position,u=new Float32Array(h.count*3);for(let d=0;d<h.count;d++){let f=1-h.getY(d)/.36,m=.18+Math.pow(Math.max(0,f),2.2)*1.5+(Math.sin(h.getX(d)*18)*Math.sin(h.getZ(d)*18)>.6?.9:0);u[d*3]=u[d*3+1]=u[d*3+2]=m}s.setAttribute("color",new Nt(u,3))}let r=new Ut(.09,6,4);this.stem=new In(n,new pt({color:10467288,emissive:2241365,roughness:.7}),t),this.cap=new In(s,new Ye({color:16777215,vertexColors:!0}),t);let a=new xi(.6,16);a.rotateX(Math.PI/2),this.gill=new In(a,new Ye({color:16777215}),t);let o=new Ut(1,10,6);o.scale(.35,.05,1),o.translate(0,0,.9),this.leaf=new In(o,new pt({color:998714,emissive:675658,emissiveIntensity:.6,roughness:.6}),t*4);let c=new bt(.035,.035,1,4);c.translate(0,-.5,0),this.vine=new In(c,new pt({color:1784644,emissive:731955}),t*2),this.tip=new In(r,new Ye({color:16777215}),t*2);let l=new xi(.16,6);l.rotateX(-Math.PI/2),this.moss=new In(l,new Ye({color:16777215,transparent:!0,opacity:.4,depthWrite:!1}),t*3);for(let h of["stem","cap","gill","leaf","vine","tip","moss"])this[h].count=0,this[h].frustumCulled=!1,e.add(this[h]);this.m=new ft,this.q=new bn,this.e=new Pn,this.s=new L,this.v=new L,this.colliders=[]}put(e,t,n,s,r,a,o,c,l=0,h=0,u){e.count>=e.instanceMatrix.count||(this.e.set(l,r,h),this.q.setFromEuler(this.e),this.m.compose(this.v.set(t,n,s),this.q,this.s.set(a,o,c)),e.setMatrixAt(e.count,this.m),u!==void 0&&e.setColorAt(e.count,new me(u)),e.count++)}mushroom(e,t,n,s,r,a=!0){this.put(this.stem,e,t,n,0,s*.6,s,s*.6),this.put(this.cap,e,t+s*.98,n,0,s*.9,s*.9,s*.9,0,0,r),this.put(this.gill,e,t+s*.97,n,0,s*.88,1,s*.88,0,0,r),a&&s>1.5&&this.colliders.push({x:e,z:n,r:.25*s})}plant(e,t,n,s,r){for(let o=0;o<5;o++)this.put(this.leaf,e,t+.05,n,o/5*Math.PI*2+r,s,s,s,-.5-r*.2)}vineAt(e,t,n,s,r){this.put(this.vine,e,t,n,0,1,s,1),this.put(this.tip,e,t-s,n,0,1.4,1.4,1.4,0,0,r)}finish(){for(let e of["stem","cap","gill","leaf","vine","tip","moss"])this[e].instanceMatrix.needsUpdate=!0,this[e].instanceColor&&(this[e].instanceColor.needsUpdate=!0)}};function od(i,e,t,n,s,r,a){let o=new Rt({transparent:!0,depthWrite:!1,blending:an,side:It,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float t; varying vec2 vUv; void main(){ float s = sin(vUv.x*40.0)*0.5+0.5; float f = fract(vUv.y*6.0 + t*1.6 + s*0.3); float a = (0.35+0.65*smoothstep(0.0,0.7,f)) * smoothstep(0.0,0.15,vUv.x)*smoothstep(1.0,0.85,vUv.x) * smoothstep(0.0,0.25,vUv.y); gl_FragColor = vec4(mix(vec3(0.2,0.6,1.0), vec3(0.6,1.0,1.0), f)*a*0.8, a);}"}),c=new de(new Di(n,s),o);return c.position.set(i,e-s/2,t),c.rotation.y=r,a.push(l=>{o.uniforms.t.value=l}),c}function ld(i,e,t,n,s,r=.35){let a=new St;return[16731501,16752451,16770669,6094749,5100287,10185727].forEach((c,l)=>{let h=new de(new Zt(n-l*.9,.45,6,48,Math.PI),new Ye({color:c,transparent:!0,opacity:r,depthWrite:!1,blending:an}));a.add(h)}),a.position.set(i,e,t),a.rotation.y=s,a}function Jp(i,e,t,n){let a=[16731501,16752451,16770669,6094749,5100287,10185727].map(f=>new me(f)),o=new L().subVectors(e,i);o.y=0;let c=new L(-o.z,0,o.x).normalize(),l=[],h=[],u=[];for(let f=0;f<=30;f++){let m=f/30,_=new L().lerpVectors(i,e,m);_.y+=Math.sin(Math.PI*m)*n;for(let g=0;g<=6;g++){let p=(g/6-.5)*t;l.push(_.x+c.x*p,_.y,_.z+c.z*p);let b=a[Math.min(5,g)];h.push(b.r,b.g,b.b)}}for(let f=0;f<30;f++)for(let m=0;m<6;m++){let _=f*7+m,g=_+6+1;u.push(_,g,_+1,_+1,g,g+1)}let d=new gt;return d.setAttribute("position",new Ke(l,3)),d.setAttribute("color",new Ke(h,3)),d.setIndex(u),d.computeVertexNormals(),new de(d,new Ye({vertexColors:!0,side:It,transparent:!0,opacity:.85}))}function cd(i,e,t,n,s,r=!1){let a=new St,o=Fs(s),c=r?new pt({color:16751317,emissive:12596879,emissiveIntensity:.7,roughness:.8}):new pt({color:5918618,emissive:3812736,emissiveIntensity:.9,roughness:1}),l=new Ut(1,14,10),h=r?6:7;for(let u=0;u<h;u++){let d=new de(l,c),f=u/h*Math.PI*2,m=u===0?0:.9;d.position.set(Math.cos(f)*m*n,(o()*.3-(r?.25:0))*n,Math.sin(f)*m*n*.8),d.scale.setScalar(n*(.6+o()*.4)),r&&(d.scale.y*=.6),a.add(d)}return a.position.set(i,e,t),a}var hh=class{constructor(e,t,n){let s=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t*3),o=Fs(7),c=[new me(6750192),new me(16739312),new me(11832575),new me(10354539)];for(let h=0;h<t;h++){s[h*3]=(o()-.5)*n,s[h*3+1]=o()*14-2,s[h*3+2]=(o()-.5)*n,r[h]=o()*10;let u=c[h%4];a.set([u.r,u.g,u.b],h*3)}let l=new gt;l.setAttribute("position",new Nt(s,3)),l.setAttribute("ph",new Nt(r,1)),l.setAttribute("color",new Nt(a,3)),this.mat=new Rt({transparent:!0,depthWrite:!1,blending:an,uniforms:{t:{value:0},map:{value:lh()},px:{value:1}},vertexShader:"attribute float ph; attribute vec3 color; uniform float t; uniform float px; varying vec3 vC; varying float vA; void main(){ vec3 p=position; p.y += sin(t*0.4+ph)*1.2 + mod(t*0.3+ph*3.0, 14.0)*0.15; p.x += sin(t*0.3+ph*2.0)*0.8; vec4 mv=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize = px*(10.0+6.0*sin(t*2.0+ph))*(10.0/-mv.z); vC=color; vA=0.5+0.5*sin(t*1.5+ph*4.0);}",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 tx=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vC*tx.a*vA, tx.a*vA);}"}),this.pts=new As(l,this.mat),this.pts.frustumCulled=!1,e.add(this.pts)}update(e,t){this.mat.uniforms.t.value=e,this.mat.uniforms.px.value=t}},bo=class{constructor(e,t,n){this.n=t,this.i=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.size=new Float32Array(t);let s=new gt;s.setAttribute("position",new Nt(this.pos,3)),s.setAttribute("color",new Nt(this.col,3)),s.setAttribute("a",new Nt(new Float32Array(t),1)),s.setAttribute("sz",new Nt(this.size,1)),this.g=s,this.additive=n,this.mat=new Rt({transparent:!0,depthWrite:!1,blending:n?an:rs,uniforms:{map:{value:lh()},px:{value:1}},vertexShader:"attribute vec3 color; attribute float a; attribute float sz; uniform float px; varying vec3 vC; varying float vA; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize = px*sz*(30.0/-mv.z); vC=color; vA=a; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 tx=texture2D(map, gl_PointCoord); float a=tx.a*vA; if(a<0.01) discard; gl_FragColor=vec4(vC, a);}"}),this.pts=new As(s,this.mat),this.pts.frustumCulled=!1,e.add(this.pts)}emit(e,t,n,s,r,a,o,c,l=2,h=-6){this.grav=h;for(let u=0;u<s;u++){let d=this.i;this.i=(this.i+1)%this.n,this.pos[d*3]=e,this.pos[d*3+1]=t,this.pos[d*3+2]=n;let f=Math.random()*Math.PI*2,m=Math.random()*2-1,_=a*(.4+Math.random()*.6);this.vel[d*3]=Math.cos(f)*Math.sqrt(1-m*m)*_,this.vel[d*3+1]=Math.abs(m)*_+l,this.vel[d*3+2]=Math.sin(f)*Math.sqrt(1-m*m)*_;let g=r[Math.random()*r.length|0];this.col[d*3]=g.r,this.col[d*3+1]=g.g,this.col[d*3+2]=g.b,this.life[d]=this.max[d]=o*(.6+Math.random()*.4),this.size[d]=c*(.6+Math.random()*.6)}}update(e,t){let n=this.g.attributes.a.array,s=this.additive?-5:.8,r=this.additive?.985:.95;for(let a=0;a<this.n;a++){if(this.life[a]<=0){n[a]=0;continue}this.life[a]-=e;let o=Math.max(0,this.life[a]/this.max[a]);n[a]=this.additive?o:o*.55,this.vel[a*3+1]+=s*e;for(let c=0;c<3;c++)this.vel[a*3+c]*=r,this.pos[a*3+c]+=this.vel[a*3+c]*e;this.additive||(this.size[a]+=e*2)}this.g.attributes.position.needsUpdate=!0,this.g.attributes.a.needsUpdate=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.sz.needsUpdate=!0,this.mat.uniforms.px.value=t}};function Kp(i){let e=new St,t=new de(new Zt(1.6,.18,10,48),new Ye({color:8058879})),n=new Rt({transparent:!0,depthWrite:!1,side:It,blending:an,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float t; varying vec2 vUv; void main(){ vec2 p=vUv-0.5; float r=length(p)*2.0; float a=atan(p.y,p.x); float sw=sin(a*5.0 - r*12.0 + t*4.0)*0.5+0.5; vec3 c = 0.5+0.5*cos(6.2831*(vec3(0.0,0.33,0.67)+r*0.8 - t*0.2 + sw*0.2)); float al=smoothstep(1.0,0.6,r)*(0.45+0.55*sw); gl_FragColor=vec4(c*al, al);}"}),s=new de(new xi(1.55,40),n);return e.add(t,s),e.userData.ring=t,i.push(r=>{n.uniforms.t.value=r,t.rotation.z=r*.5}),e}function uh(i){let e=new St,t=new de(new Zt(i,.08,6,48),new Ye({color:16765803}));t.rotation.x=Math.PI/2,t.position.y=.6,e.add(t);let n=t.clone();n.position.y=1.1,e.add(n);let s=new bt(.12,.14,1.4,6),r=new pt({color:4863334,emissive:2758720});for(let o=0;o<12;o++){let c=o/12*Math.PI*2,l=new de(s,r);l.position.set(Math.cos(c)*i,.7,Math.sin(c)*i),e.add(l)}let a=new de(new xi(i,32),new Ye({color:16765803,transparent:!0,opacity:.12,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.05,e.add(a),e}var hd=[[13215743,13921279],[10481864,4063152],[16758170,16742973],[16754648,16727492],[11000063,4048127],[16773287,16765501]],_n=(i,e=14,t=10)=>new Ut(i,e,t);function dh(){let i=new bt(.17,.14,.62,8);return i.translate(0,-.31,0),i}function fh(){let i=new bt(.16,.18,.14,8);return i.translate(0,-.66,0),i}function em(){let i=new ni(.28,.6,12);i.translate(0,.3,0);let e=new bt(.22,.22,.42,14);e.translate(0,.25,0);let t=new bt(.38,.38,.04,16),n=ud([e,t]),s=new bt(.3,.26,.3,6,1,!0);s.translate(0,.15,0);let r=new Zt(.34,.08,6,16);r.rotateX(Math.PI/2),r.translate(0,.05,0);let a=new Ut(.34,14,8,0,Math.PI*2,0,Math.PI/2),o=new Ut(.1,8,6);o.translate(0,.36,0);let c=new Ut(.34,14,8,0,Math.PI*2,0,Math.PI/2),l=new ni(.07,.35,8);l.rotateZ(-1),l.translate(.42,.2,0);let h=l.clone();return h.scale(-1,1,1),{party:i,tophat:n,crown:s,flower:r,beanie:ud([a,o]),viking:ud([c,l,h])}}function ud(i){let e=[],t=[],n=[],s=0;for(let a of i){let o=(a.index,a),c=o.attributes.position,l=o.attributes.normal;for(let h=0;h<c.count;h++)e.push(c.getX(h),c.getY(h),c.getZ(h)),t.push(l.getX(h),l.getY(h),l.getZ(h));if(o.index)for(let h=0;h<o.index.count;h++)n.push(o.index.getX(h)+s);else for(let h=0;h<c.count;h++)n.push(h+s);s+=c.count}let r=new gt;return r.setAttribute("position",new Ke(e,3)),r.setAttribute("normal",new Ke(t,3)),r.setIndex(n),r}var dd={party:16735940,tophat:2761024,crown:16765501,flower:16747224,beanie:4048127,viking:12634328};function tm(i){let e=new Yt(.3,.07,.07),t=new ni(.08,.32,8),n=_n(.2,12,6),s=_n(.05,6,4);return[["body",_n(1,18,12),"body",[0,.95,0],[0,0,0],[.88,.74,1.05]],["head",_n(.56),"body",[0,1.38,.95],[0,0,0],[1,.95,1]],["snout",_n(.33),"pink",[0,1.16,1.38],[0,0,0],[1.25,.8,.9]],["nos1",s,"dark",[.13,1.2,1.66],[0,0,0],[1,1,1]],["nos2",s,"dark",[-.13,1.2,1.66],[0,0,0],[1,1,1]],["mouth",n,"dark",[0,1,1.55],[0,0,0],[1.3,.35,.4]],["eyeL",_n(.2),"white",[.22,1.58,1.3],[0,0,0],[1,1.1,.8]],["eyeR",_n(.2),"white",[-.22,1.58,1.3],[0,0,0],[1,1.1,.8]],["pupL",_n(.1,8,6),"dark",[.22,1.56,1.46],[0,0,0],[1,1,.6]],["pupR",_n(.1,8,6),"dark",[-.22,1.56,1.46],[0,0,0],[1,1,.6]],["browL",e,"dark",[.22,1.82,1.38],[0,0,0],[1,1,1]],["browR",e,"dark",[-.22,1.82,1.38],[0,0,0],[1,1,1]],["hornL",t,"horn",[.3,1.88,.85],[0,0,-.45],[1,1,1]],["hornR",t,"horn",[-.3,1.88,.85],[0,0,.45],[1,1,1]],["earL",_n(.2,8,6),"body",[.56,1.55,.82],[0,0,-.4],[1.5,.55,.9]],["earR",_n(.2,8,6),"body",[-.56,1.55,.82],[0,0,.4],[1.5,.55,.9]],["spot1",_n(.24,10,6),"spot",[.66,1.15,.15],[0,0,0],[.55,1.3,1.3]],["spot2",_n(.3,10,6),"spot",[-.64,.95,-.35],[0,0,0],[.55,1.3,1.3]],["spot3",_n(.22,10,6),"spot",[.15,1.6,-.45],[0,0,0],[1.3,.5,1.3]],["spot4",_n(.12,8,6),"spot",[-.3,1.3,.5],[0,0,0],[.7,.7,.7]],["leg0",dh(),"body",[.45,.6,.5],[0,0,0],[1,1,1]],["leg1",dh(),"body",[-.45,.6,.5],[0,0,0],[1,1,1]],["leg2",dh(),"body",[.45,.6,-.5],[0,0,0],[1,1,1]],["leg3",dh(),"body",[-.45,.6,-.5],[0,0,0],[1,1,1]],["hoof0",fh(),"horn",[.45,.6,.5],[0,0,0],[1,1,1]],["hoof1",fh(),"horn",[-.45,.6,.5],[0,0,0],[1,1,1]],["hoof2",fh(),"horn",[.45,.6,-.5],[0,0,0],[1,1,1]],["hoof3",fh(),"horn",[-.45,.6,-.5],[0,0,0],[1,1,1]],["hat",i,"hat",[0,1.9,.92],[-.15,0,.15],[1,1,1]]]}function nm(){return{body:new pt({color:16777215,roughness:.45,emissive:1710634,emissiveIntensity:1}),pink:new pt({color:16752327,roughness:.4,emissive:4198440}),white:new pt({color:16777215,roughness:.2,emissive:6710903}),dark:new pt({color:1379362,roughness:.3}),horn:new pt({color:15259840,roughness:.6,emissive:2761760}),spot:new Ye({color:16777215}),hat:new pt({color:16777215,roughness:.5,emissive:3349043})}}var jp=new ft,Qp=new ft,ph=new ft,Fi=new bn,us=new Pn,Bs=new L,mh=new L,ds=new me,gh=class{constructor(e,t=48){this.max=t,this.cows=[],this.hats=em(),this.hatType="party",this.mats=nm(),this.parts=[];for(let[n,s,r,a,o,c]of tm(this.hats.party)){let l=new In(s,this.mats[r],t);l.count=0,l.frustumCulled=!1,(r==="body"||r==="spot"||r==="hat")&&l.setColorAt(0,ds.set(16777215)),e.add(l),us.set(o[0],o[1],o[2]),Fi.setFromEuler(us),this.parts.push({key:n,mesh:l,mk:r,pos:new L(...a),quat:Fi.clone(),scl:new L(...c),local:new ft().compose(new L(...a),Fi.clone(),new L(...c))})}this.hatPart=this.parts.find(n=>n.key==="hat")}setHat(e){this.hats[e]||(e="party"),this.hatType=e,this.hatPart.mesh.geometry=this.hats[e]}clear(){this.cows.length=0}spawn(e,t,n,s="grunt",r){if(this.cows.length>=this.max)return null;let a=Math.random()*hd.length|0,o={grunt:{s:1,hp:2,spd:2.6},charger:{s:.92,hp:2,spd:3.1},tank:{s:1.45,hp:5,spd:1.8},calf:{s:.7,hp:1,spd:3.6}}[s],c={kind:s,x:e,y:t,z:n,vx:0,vz:0,vy:0,kx:0,kz:0,yaw:Math.random()*6.28,hp:Math.ceil(o.hp*r.hp),maxHp:0,spd:o.spd*r.spd,s:o.s*(.92+Math.random()*.16),body:hd[a][0],spot:hd[a][1],state:"wander",t:Math.random()*2,cd:1+Math.random()*2,walk:Math.random()*6,flash:0,squash:0,dead:!1,homeX:e,homeZ:n,wtx:e,wtz:n,angry:0,inCorral:!1,spawnT:.5};return c.maxHp=c.hp,this.cows.push(c),c}render(e,t){let n=0;for(let s of this.cows){if(s.dead)continue;let r=t?0:Math.sin(s.walk*2)*.06,a=1+s.squash,o=s.spawnT>0?1-s.spawnT*2:1,c=s.s*Math.max(.01,o);us.set(s.state==="windup"?-.15:0,s.yaw,r),Fi.setFromEuler(us);let l=t?0:Math.abs(Math.sin(s.walk))*.12*Math.min(1,Math.hypot(s.vx,s.vz)/2);Qp.compose(Bs.set(s.x,s.y+l*c,s.z),Fi,mh.set(c/Math.sqrt(a),c*a,c/Math.sqrt(a)));let h=s.flash>0;for(let u of this.parts){let d=u.local;if(u.key.startsWith("leg")||u.key.startsWith("hoof")){let f=+u.key.slice(-1),m=Math.sin(s.walk*2+(f===0||f===3?0:Math.PI))*.6*Math.min(1,Math.hypot(s.vx,s.vz)/1.5);us.set(m,0,0),Fi.setFromEuler(us),d=ph.compose(u.pos,Fi,u.scl)}else if(u.key.startsWith("brow")){let f=u.key==="browL"?1:-1,m=s.angry>.5?-.5*f:.15*f;us.set(0,0,m),Fi.setFromEuler(us),Bs.copy(u.pos),Bs.y-=s.angry*.05,d=ph.compose(Bs,Fi,u.scl)}else u.key.startsWith("pup")?(Bs.copy(u.pos),Bs.x+=Math.sin(e*1.3+s.homeX)*.04,d=ph.compose(Bs,u.quat,u.scl)):u.key==="mouth"&&(mh.copy(u.scl),mh.y*=s.state==="windup"||s.state==="charge"?2:1,d=ph.compose(u.pos,u.quat,mh));jp.multiplyMatrices(Qp,d),u.mesh.setMatrixAt(n,jp),u.mk==="body"?u.mesh.setColorAt(n,h?ds.set(16777215):ds.set(s.body)):u.mk==="spot"?(ds.set(s.state==="windup"?16732208:s.spot),h&&ds.set(16777215),ds.multiplyScalar(2.2),u.mesh.setColorAt(n,ds)):u.mk==="hat"&&u.mesh.setColorAt(n,ds.set(dd[this.hatType]||16735940))}n++}for(let s of this.parts)s.mesh.count=n,s.mesh.instanceMatrix.needsUpdate=!0,s.mesh.instanceColor&&(s.mesh.instanceColor.needsUpdate=!0)}};function im(i,e,t="crown",n=5905034){let s=em(),r=nm(),a=new St,o={};r.body.color.set(i),r.spot.color.set(e),r.hat.color.set(dd[t]),r.hat.emissive.set(dd[t]).multiplyScalar(.55),r.hat.metalness=.3;for(let[l,h,u,d,f,m]of tm(s[t])){let _=new de(h,r[u]);_.position.set(...d),_.rotation.set(...f),_.scale.set(...m),a.add(_),o[l]=_}let c=new de(new Ut(1.05,16,10,Math.PI*1.1,Math.PI*.8,.2,1.4),new pt({color:n,emissive:new me(n).multiplyScalar(.55),side:It,roughness:.4}));return c.position.set(0,1.05,-.05),c.scale.set(.95,.85,1.1),a.add(c),{group:a,parts:o,mats:r}}var qr={blade:{name:"Energy Blade",range:2.4,arc:2,dmg:1,cd:.26,knock:5,chain:3,finisher:2},spear:{name:"Glow Spear",range:3.6,arc:.8,dmg:1.5,cd:.42,knock:7,chain:2,finisher:2.5},staff:{name:"Moonstaff",range:2.7,arc:2.4,dmg:1,cd:.36,knock:10,chain:3,finisher:1.5,spinFinisher:!0}},Os={cyan:4060671,magenta:16727512,gold:16765501,lime:9305917,void:10181631,prism:16777215},xh={nightshade:{jacket:2765152,trim:4060671,scarf:2078120},ember:{jacket:3349018,trim:16742973,scarf:13712701},aurora:{jacket:1715507,trim:9305917,scarf:8011263},royal:{jacket:2759232,trim:16765501,scarf:16727512},ghost:{jacket:14212335,trim:10181631,scarf:7043752}},_h=class{constructor(e){let t=new St;this.group=t,e.add(t),this.jacket=new pt({color:1711411,roughness:.45,emissive:1317432}),this.trim=new Ye({color:4060671}),this.scarfM=new pt({color:2078120,roughness:.6,emissive:668464});let n=new pt({color:14723458,roughness:.6,emissive:2757640}),s=new pt({color:1708576,roughness:.5}),r=new pt({color:789012,roughness:.4}),a=new pt({color:16777215,roughness:.2,emissive:5592405}),o=new St;t.add(o),this.body=o;let c=new de(new ji(.34,.45,4,12),this.jacket);c.position.y=.95,o.add(c);let l=new de(new Zt(.35,.035,6,20),this.trim);l.rotation.x=Math.PI/2,l.position.y=.78,o.add(l);let h=new de(new Yt(.04,.5,.02),this.trim);h.position.set(.1,1,.33),o.add(h);let u=new St;u.position.y=1.6,o.add(u),this.head=u,u.add(new de(new Ut(.36,18,14),n));let d=new de(new Ut(.42,16,12,0,Math.PI*2,0,Math.PI*.62),this.jacket);d.rotation.x=-.5,d.position.set(0,.02,-.06),u.add(d);let f=new de(new Zt(.33,.025,6,24),this.trim);f.position.set(0,.06,.16),f.rotation.x=-.35,u.add(f);for(let b=0;b<6;b++){let T=new de(new ni(.08,.3,6),s);T.position.set(-.2+b*.08,.25,.22),T.rotation.set(.9,0,(b-2.5)*.25),u.add(T)}for(let b of[.13,-.13]){let T=new de(new Ut(.075,10,8),a);T.position.set(b,.02,.31),T.scale.set(1,1.2,.6),u.add(T);let y=new de(new Ut(.042,8,6),r);y.position.set(b,.01,.36),u.add(y);let A=new de(new Yt(.1,.022,.02),s);A.position.set(b,.12,.34),A.rotation.z=b>0?-.2:.2,u.add(A)}let m=new de(new Zt(.07,.014,4,10,Math.PI*.8),r);m.position.set(.03,-.12,.33),m.rotation.z=Math.PI*1.15,u.add(m);let _=new de(new Zt(.26,.09,8,16),this.scarfM);_.rotation.x=Math.PI/2,_.position.y=1.3,o.add(_),this.tail=new de(new Yt(.16,.05,.7),this.scarfM),this.tail.geometry.translate(0,0,-.35),this.tail.position.set(.12,1.3,-.2),o.add(this.tail);let g=new ji(.11,.42,4,8);g.translate(0,-.3,0),this.legs=[.15,-.15].map(b=>{let T=new de(g,r);return T.position.set(b,.66,0),o.add(T),T});let p=new ji(.09,.38,4,8);p.translate(0,-.25,0),this.arms=[.42,-.42].map(b=>{let T=new de(p,this.jacket);return T.position.set(b,1.22,0),o.add(T),T}),this.weaponPivot=new St,this.weaponPivot.position.set(0,-.55,.05),this.arms[0].add(this.weaponPivot),this.glowM=new Ye({color:4060671}),this.handleM=new pt({color:2763322,roughness:.3,metalness:.6}),this.trailM=new Ye({color:4060671,transparent:!0,opacity:0,side:It,blending:an,depthWrite:!1}),this.swing=new de(new Vn(1,2.4,24,1,-1,2),this.trailM),this.swing.rotation.x=-Math.PI/2,this.swing.position.y=1,t.add(this.swing),this.ring=new de(new Vn(.55,.7,24),new Ye({color:4060671,transparent:!0,opacity:.8,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.05,this.ring.visible=!1,t.add(this.ring),this.shadow=new de(new xi(.5,20),new Ye({color:0,transparent:!0,opacity:.35,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,e.add(this.shadow),this.setWeapon("blade","cyan"),this.anim=0,this.attackT=0,this.attackDur=.25,this.attackKind=0}setOutfit(e){let t=xh[e]||xh.nightshade;this.jacket.color.set(t.jacket),this.trim.color.set(t.trim),this.scarfM.color.set(t.scarf)}setWeapon(e,t){for(this.type=e,this.glowM.color.set(Os[t]||Os.cyan),this.trailM.color.set(Os[t]||Os.cyan),this.skin=t;this.weaponPivot.children.length;)this.weaponPivot.remove(this.weaponPivot.children[0]);let n=new St;if(e==="blade"){let s=new de(new bt(.04,.04,.3,8),this.handleM);n.add(s);let r=new de(new Yt(.22,.04,.06),this.handleM);r.position.y=.16,n.add(r);let a=new de(new ji(.045,1.1,4,8),this.glowM);a.position.y=.75,a.scale.z=.5,n.add(a)}else if(e==="spear"){let s=new de(new bt(.035,.035,2.2,8),this.handleM);s.position.y=.5,n.add(s);let r=new de(new Qi(.16),this.glowM);r.scale.set(.6,2.2,.6),r.position.y=1.75,n.add(r);let a=new de(new Zt(.06,.02,6,12),this.glowM);a.rotation.x=Math.PI/2,a.position.y=1.4,n.add(a)}else{let s=new de(new bt(.04,.04,2,8),this.handleM);s.position.y=.2,n.add(s);for(let r of[1.25,-.85]){let a=new de(new Ps(.15,1),this.glowM);a.position.y=r,n.add(a)}}n.rotation.x=Math.PI/2,this.weaponPivot.add(n),this.weapon=n}attack(e){this.attackT=this.attackDur=e==="spin"?.45:.24,this.attackKind=e,this.trailM.opacity=.8;let t=qr[this.type];this.swing.geometry.dispose();let n=e==="spin"?Math.PI*2:t.arc;this.swing.geometry=new Vn(.6,t.range,24,1,-Math.PI/2-n/2,n)}update(e,t,n,s){this.group.position.set(n.x,n.y,n.z),this.group.rotation.y=n.yaw;let r=Math.hypot(n.vx,n.vz);this.anim+=e*(2+r*2.2);let a=Math.min(1,r/6),o=!n.grounded;if(this.legs[0].rotation.x=o?-.6:Math.sin(this.anim)*.9*a,this.legs[1].rotation.x=o?.3:-Math.sin(this.anim)*.9*a,this.arms[1].rotation.x=-Math.sin(this.anim)*.7*a+(o?-1.2:0),this.body.position.y=s?0:Math.abs(Math.sin(this.anim))*.08*a,this.body.rotation.x=a*.15,this.tail.rotation.x=-.4+Math.sin(t*8)*.15*(s?0:1)-a*.6,this.attackT>0){this.attackT-=e;let c=1-this.attackT/this.attackDur;if(this.attackKind==="spin")this.arms[0].rotation.set(-Math.PI/2,0,0),this.body.rotation.y=c*Math.PI*2;else if(this.type==="spear")this.arms[0].rotation.set(-Math.PI/2+.2,0,0),this.arms[0].position.z=Math.sin(c*Math.PI)*.6;else{let l=this.attackKind===1?-1:1;this.arms[0].rotation.set(-1.4,0,0),this.arms[0].rotation.z=0,this.body.rotation.y=l*(1-c*2)}this.trailM.opacity=Math.max(0,.75*(1-c)),this.swing.rotation.z=this.attackKind==="spin"?c*6:0}else this.arms[0].rotation.set(-.6-Math.sin(this.anim)*.4*a,0,.15),this.arms[0].position.z=0,this.body.rotation.y=0,this.trailM.opacity=0;n.dashT>0&&(this.body.rotation.x=.5),this.group.visible=!(n.iframes>0&&n.hurtBlink&&Math.floor(t*20)%2===0)}};var vh={skin:{label:"Weapon Glow",items:[{id:"cyan",name:"Night Cyan",price:0},{id:"magenta",name:"Hot Magenta",price:120},{id:"lime",name:"Toxic Lime",price:150},{id:"gold",name:"Smug Gold",price:250},{id:"void",name:"Void Violet",price:300},{id:"prism",name:"Prism White",price:500}]},outfit:{label:"Hero Outfits",items:[{id:"nightshade",name:"Nightshade Hoodie",price:0},{id:"ember",name:"Ember Rogue",price:150},{id:"aurora",name:"Aurora Ranger",price:200},{id:"royal",name:"Royal Menace",price:350},{id:"ghost",name:"Ghost Mode",price:400}]},hat:{label:"Cow Hats",items:[{id:"party",name:"Party Cone",price:0},{id:"beanie",name:"Moody Beanie",price:100},{id:"flower",name:"Flower Crown",price:150},{id:"tophat",name:"Business Top Hat",price:180},{id:"viking",name:"Horned Helmet (Ironic)",price:250},{id:"crown",name:"Tiny Crown",price:400}]},trail:{label:"Trails",items:[{id:"none",name:"No Trail",price:0},{id:"sparks",name:"Star Sparks",price:120},{id:"bubbles",name:"Glow Bubbles",price:140},{id:"embers",name:"Ember Drift",price:180},{id:"rainbow",name:"Neon Rainbow",price:260}]}},ks={aggro:["Moo-ve along? Absolutely not.","This is a no-hero pasture.","Do you have a reservation? No? Charge!","We are not a herd. We are a collective.","I have been waiting all day to be mildly inconvenienced.","You look like someone who skips leg day. Moo."],kill:["Udderly uncalled for.","I will be telling my therapist about this.","Worth it.","One star. Would not get bonked again.","I regret nothing. Except that.","Tell my calves... actually, they never call.","Rude. Effective, but rude."],yeet:["Yeeted into the void!","That cow has left the chat.","Gravity: 1. Cow: 0."],hurt:["Ouch. That was a whole cow.","Note to self: cows have elbows.","Rude. Accurate, but rude."],combo:["Combo! The herd is filing a complaint.","Combo! Somebody stop this person.","Combo! Glitter for the glitter god."],herd:["Impounded. Enjoy your time-out.","Corralled. Think about what you did."]},$r=[{name:"The Rainbow's Edge",intro:"Rumor says there is a secret at the foot of the neon rainbow. Rumor is usually wrong. Go check anyway."},{name:"Glowroot Hollow",intro:"Glowroot Hollow. The plants glow, the cows growl, and nobody here pays rent."},{name:"Cloudhop Spires",intro:"Cloudhop Spires. Bounce on the pink clouds. Do not look down. Okay, look down, it is gorgeous."},{name:"Moonfall Arena",intro:"Moonfall Arena. The Baroness is hosting, and attendance is mandatory."},{name:"The Udder Throne",intro:"The Udder Throne. The King of all cows has finally noticed you. That is not a compliment."}],sm={sirloin:{name:"Sir Loin, Knight of the Hoof Table",short:"Sir Loin",body:10481864,spot:4063152,hat:"viking",scale:2.2,hp:28,speed:4.2,moves:["charge","stomp"],intro:"Kneel before Sir Loin, Knight of the Hoof Table! Or do not. I will charge either way.",mid:"Is that all? My grandmother hits harder, and she is a cloud now.",defeat:"Tell the Baroness... I tried. Mostly."},baroness:{name:"Baroness Bellowmoo, the Unbothered",short:"Baroness Bellowmoo",body:13215743,spot:16727492,hat:"crown",scale:3,hp:60,speed:4.6,moves:["charge","stomp","summon","rain"],intro:"Darling, you trampled my party. Allow me to return the favor.",mid:"Oh, now I am bothered. Congratulations.",defeat:"Fine. FINE. The after-party is canceled."},king:{name:"King Cudsworth the Magnificent, Lord of All Pastures",short:"King Cudsworth",body:16773590,spot:16756768,hat:"crown",cape:11735598,scale:3.6,hp:95,speed:4.4,moves:["charge","stomp","summon","rain","decree"],intro:"Who dares interrupt my royal grazing? Kneel. Or be knelt upon.",mid:"You scuffed the royal hooves. Guards! Calves! Anyone!",mid2:"ENOUGH. By royal decree, the floor is now lava. Well, shockwaves. Same idea.",defeat:"Long live... somebody else, I suppose. Moo."}};var pn=[{id:"common",name:"Common",color:"#d6d6e4",hex:14079716,affixes:1,mult:1,sell:4,beam:2.2},{id:"uncommon",name:"Uncommon",color:"#5cff8a",hex:6094730,affixes:2,mult:1.35,sell:9,beam:3},{id:"rare",name:"Rare",color:"#5cb4ff",hex:5089023,affixes:2,mult:1.8,sell:20,beam:4},{id:"epic",name:"Epic",color:"#c98cff",hex:11820287,affixes:3,mult:2.4,sell:45,beam:5.2},{id:"legendary",name:"Legendary",color:"#ffb84d",hex:16752672,affixes:4,mult:3.2,sell:110,beam:7},{id:"ultra",name:"Ultra Rare",color:"#ff8af5",hex:16747253,affixes:5,mult:4.4,sell:400,beam:11,rainbow:!0}],Gt=Object.fromEntries(pn.map((i,e)=>[i.id,e])),Hs=["weapon","helm","chest","boots","trinket"],Un={weapon:"Weapon",helm:"Helm",chest:"Chest",boots:"Boots",trinket:"Trinket"},Mo={dmg:"Damage",armor:"Armor",spd:"Speed",gf:"Glitter find",hp:"Max health"},am={dmg:"%",armor:"",spd:"%",gf:"%",hp:""},bb={dmg:250,armor:200,spd:40,gf:300,hp:150},Mb={weapon:{main:"dmg",base:10,extras:["dmg","spd","gf","hp"]},helm:{main:"armor",base:6,extras:["hp","gf","armor","dmg"]},chest:{main:"armor",base:10,extras:["hp","armor","dmg","gf"]},boots:{main:"spd",base:5,extras:["armor","spd","gf","hp"]},trinket:{main:"gf",base:12,extras:["gf","dmg","spd","hp"]}},Sb={dmg:5,armor:4,spd:3,gf:8,hp:8},wb={weapon:["Churn Cleaver","Butter Blade","Milkmaid Mallet","Hoofpick Shiv","Pitchfork of Mild Menace","Glow Spatula","Cud Cutter"],helm:["Bucket Helm","Cowbell Coif","Pail Visor","Haynet Hood","Feed Sack Cap","Horned Hoodie"],chest:["Haybale Hauberk","Picnic Blanket Plate","Leather-ish Vest","Moo-ffler Mail","Silo Cuirass","Barn Door Breastplate"],boots:["Clodhoppers","Pasture Sneakers","Hoof Huggers","Mud Stompers","Cowpat Galoshes","Fence Hoppers"],trinket:["Lucky Cowbell","Cud Charm","Moon Milk Locket","Clover of Questionable Luck","Pocket Haystack","Udderly Shiny Pebble"]},Eb={common:["Slightly Chewed","Muddy","Secondhand","Damp","Wobbly","Grass-Stained"],uncommon:["Sturdy","Grass-Fed","Polished","Free-Range","Well-Milked"],rare:["Glowroot","Moonlit","Prismatic","Cloudhop","Neon"],epic:["Stampeding","Bellowing","Udderly Savage","Thundermoo","Spotlight-Stealing"]},Tb=["of Moo-mentum","of Extra Cheese","of the Late Pasture","of Bovine Fury","of the Second Breakfast","of Utter Moo-gic","of the Midnight Milk Run","of Questionable Hygiene"],Ab={weapon:["Excalibutter, Blade of the Spreadable Realm","The Moo-ltiverse Mallet"],helm:["Crown of the Cosmic Cow","Helm of a Thousand Moos"],chest:["The Milky Way Mantle","Plate of the Prismatic Pasture"],boots:["Hooves of Infinite Moo-mentum","Rainbow Moonwalkers"],trinket:["The Last Cowbell in the Universe","Holy Cow, an Actual Halo"]},Rb={weapon:["Udder Chaos, Ender of Picnics","The Cowlibur","Bellowmoo's Bedazzled Gavel"],helm:["Crown of the Unbothered","The Bovine Thinking Cap","Halo of Holy Cow"],chest:["Sir Loin's Hoof Table Plate","The Unbreakable Butter Churn","Rainbow Rancher Regalia"],boots:["Stampede Slippers of Doom","The Moonwalk Moo-ccasins","Ten League Clodhoppers"],trinket:["The Golden Cowbell","Heart of the Glitter Herd","The Infinite Cud"]},Bi={small:{id:"small",name:"Glow Milk Shot",heal:35,color:"#9ff6ff",sell:3,buff:"regen",dur:6},big:{id:"big",name:"Double Cream Elixir",heal:75,color:"#ff9ff0",sell:8,buff:"regen",dur:10},rage:{id:"rage",name:"Rage Cream",heal:0,color:"#ff7a5c",sell:6,buff:"rage",dur:30},swift:{id:"swift",name:"Hoof Speed Tonic",heal:0,color:"#5cffea",sell:6,buff:"swift",dur:30},lucky:{id:"lucky",name:"Lucky Clover Brew",heal:0,color:"#8dff5c",sell:6,buff:"lucky",dur:45}},Gs={crumb:{id:"crumb",name:"Cud Crumbs",color:"#c8f07a",desc:"Chewed, re-chewed, and somehow magical."},hide:{id:"hide",name:"Moonhide Scraps",color:"#a7c8ff",desc:"Glows a little when nobody is looking."},nail:{id:"nail",name:"Rainbow Hoofnail",color:"#ffb0f0",desc:"Rare. Smells like a thunderstorm."}},pd=[{id:"brewSmall",name:"Brew a Glow Milk Shot",cost:{crumb:4},gives:{potion:"small"}},{id:"brewBig",name:"Brew a Double Cream Elixir",cost:{crumb:4,hide:2},gives:{potion:"big"}},{id:"polish",name:"Polish gear (reroll one stat higher)",cost:{hide:3,nail:1},gives:{upgrade:!0}}],zs=(i,e)=>i[Math.floor(e()*i.length)%i.length],Cb=0,Pb=()=>Date.now().toString(36)+(Cb++).toString(36)+Math.floor(Math.random()*1e4).toString(36);function fs(i,e=0,t=0){let n=[60,26,10,3.4,.6].map((a,o)=>a*(1+e*o*.6));t=Math.min(t,4);let s=0;for(let a=t;a<n.length;a++)s+=n[a];let r=i()*s;for(let a=t;a<n.length;a++)if(r-=n[a],r<=0)return pn[a].id;return pn[n.length-1].id}function Sn({slot:i,rarity:e,ilvl:t=1,r:n=Math.random}){i=i||zs(Hs,n),e=e||"common";let s=pn[Gt[e]],r=Mb[i],a=s.mult*(1+(t-1)*.18),o={},c=(h,u)=>{o[h]=Math.round((o[h]||0)+u)};c(r.main,r.base*a*(.85+n()*.3));for(let h=1;h<s.affixes;h++){let u=zs(r.extras,n);c(u,Sb[u]*a*(.6+n()*.6))}let l;return e==="ultra"?l=zs(Ab[i],n):e==="legendary"?l=zs(Rb[i],n):(l=`${zs(Eb[e],n)} ${zs(wb[i],n)}`,Gt[e]>=2&&n()<.6&&(l+=" "+zs(Tb,n))),{uid:Pb(),kind:"gear",slot:i,rarity:e,ilvl:t,req:Ib(t),name:l,stats:o,value:Math.round(s.sell*(1+(t-1)*.25)),t:Date.now()}}var Ib=i=>Math.max(1,(i-1)*2),Oi=i=>i.req||1;function om(i){return{common:"Found in a field. Smells like it.",uncommon:"Someone took care of this. Then a cow sat on it.",rare:"It hums a little. The cows hate the tune.",epic:"The herd tells stories about this one. Rude stories.",legendary:"One of a kind. The Baroness wants it back.",ultra:"Ultra Rare. Cows whisper about it in hushed moos. You may never see another."}[i.rarity]}function lm(i){let e={dmg:0,armor:0,spd:0,gf:0,hp:0};for(let t of Hs){let n=i[t];if(n)for(let s in n.stats)e[s]+=n.stats[s]}for(let t in e)e[t]=Math.min(e[t],bb[t]);return e}var yh=i=>i/(i+60);function cm(i,e){let t=new Set([...Object.keys(i.stats),...Object.keys(e?e.stats:{})]),n=[];for(let r of t){let a=i.stats[r]||0,o=e&&e.stats[r]||0;n.push({k:r,a,b:o,d:a-o})}let s=["dmg","armor","hp","spd","gf"];return n.sort((r,a)=>s.indexOf(r.k)-s.indexOf(a.k))}function So(i){if(!i)return 0;let e={dmg:1.2,armor:1,hp:.6,spd:1.5,gf:.5},t=0;for(let n in i.stats)t+=i.stats[n]*e[n];return t}var hm=.0025,Lb=.035,fd=(i,e)=>i*(1+Math.max(0,e)/100);function um(i,{diff:e="normal",area:t=1,gf:n=0,pity:s=!1,forceUltra:r=!1,r:a=Math.random}={}){let o={normal:0,hard:.5,nightmare:1}[e]||0,c=o+t*.15+n/200,l=Math.max(1,t+Math.round(o*2)),h=[],u={grunt:.17,charger:.21,tank:.38,calf:.06}[i]??.15;if(r||a()<fd(hm,n)?h.push({type:"gear",item:Sn({rarity:"ultra",ilvl:l+1,r:a})}):(s||a()<u)&&h.push({type:"gear",item:Sn({rarity:fs(a,c),ilvl:l,r:a})}),a()<({tank:.22}[i]??.08)){let d=a();h.push({type:"potion",id:d<.55?"small":d<.7+o*.05?"big":d<.8?"rage":d<.9?"swift":"lucky"})}return a()<.3&&h.push({type:"bit",id:a()<.08+c*.03?"nail":a()<.35?"hide":"crumb",n:1+(a()<.3?1:0)}),h}function dm(i,{diff:e="normal",area:t=2,gf:n=0,forceUltra:s=!1,r=Math.random}={}){let a={normal:0,hard:.5,nightmare:1}[e]||0,o=t+1+Math.round(a*2),c=[];return i==="king"?((s||r()<fd(Lb,n))&&c.push({type:"gear",item:Sn({rarity:"ultra",ilvl:o+1,r})}),c.push({type:"gear",item:Sn({rarity:"legendary",ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,2+a,3),ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,1+a,2),ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,1+a,2),ilvl:o,r})}),c.push({type:"potion",id:"big"}),c.push({type:"potion",id:"rage"}),c.push({type:"bit",id:"nail",n:3}),c):((s||r()<fd(hm*4,n))&&c.push({type:"gear",item:Sn({rarity:"ultra",ilvl:o+1,r})}),i==="baroness"?(c.push({type:"gear",item:Sn({rarity:"legendary",ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,2+a,3),ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,1+a,2),ilvl:o,r})}),c.push({type:"potion",id:"big"}),c.push({type:"bit",id:"nail",n:2})):(c.push({type:"gear",item:Sn({rarity:fs(r,1.5+a,3),ilvl:o,r})}),c.push({type:"gear",item:Sn({rarity:fs(r,1+a,2),ilvl:o,r})}),c.push({type:"potion",id:"big"}),c.push({type:"bit",id:"nail",n:1})),c)}var fm="mootopia.loot.v1",wo=60,md=60;function rm(){return{bag:[],stash:[],equipped:{},potions:{small:1,big:0,rage:0,swift:0,lucky:0},bits:{crumb:0,hide:0,nail:0},found:0,trophies:[],ui:{sort:"rarity",rar:"all",slot:"all",view:"bag"}}}function pm(){try{let e=JSON.parse(localStorage.getItem(fm));if(e){let t=rm();return{...t,...e,potions:{...t.potions,...e.potions},bits:{...t.bits,...e.bits},equipped:e.equipped||{},stash:e.stash||[],trophies:e.trophies||[],ui:{...t.ui,...e.ui||{}}}}}catch{}let i=rm();return i.equipped.weapon=Sn({slot:"weapon",rarity:"common",ilvl:1}),i.equipped.weapon.name="Trusty Butter Knife",i.equipped.weapon.stats={dmg:6},i}function Yr(i){try{localStorage.setItem(fm,JSON.stringify(i))}catch{}}var mm="mootopia.hero.v1";var Zr=i=>Math.round(60*Math.pow(i,1.45)),gd={grunt:12,charger:16,tank:30,calf:6,sirloin:160,baroness:320,king:650},ps={might:{name:"Might",desc:"+3% damage per point",stat:"dmg",per:3},hide:{name:"Thick Hide",desc:"+3 armor per point",stat:"armor",per:3},hooves:{name:"Quick Hooves",desc:"+2% speed per point",stat:"spd",per:2},luck:{name:"Lucky Spots",desc:"+5% Glitter find per point",stat:"gf",per:5},mind:{name:"Moon Mind",desc:"+8 max mana per point",stat:"mana",per:8}};function gm(){let i={level:1,xp:0,points:0,talents:{might:0,hide:0,hooves:0,luck:0,mind:0}};try{let e=JSON.parse(localStorage.getItem(mm));if(e)return{...i,...e,talents:{...i.talents,...e.talents||{}}}}catch{}return i}function xd(i){try{localStorage.setItem(mm,JSON.stringify(i))}catch{}}function xm(i,e){let t=0;if(i.level>=30)return 0;for(i.xp+=Math.max(0,Math.round(e));i.level<30&&i.xp>=Zr(i.level);)i.xp-=Zr(i.level),i.level++,i.points++,t++;return i.level>=30&&(i.xp=0),t}function bh(i){let e=i.talents,t={dmg:(i.level-1)*2,armor:0,spd:0,gf:0,hp:(i.level-1)*4,mana:60+(i.level-1)*5};for(let n in ps)t[ps[n].stat]+=(e[n]||0)*ps[n].per;return t}var Jr=[{id:"mend",name:"Glow Milk Mend",key:"4",level:1,mana:25,cd:6,kind:"heal",color:"#9ff6ff",desc:"Heal 30% of your health, then regenerate for 8 seconds."},{id:"moonbeam",name:"Moonbeam Stampede",key:"5",level:2,mana:30,cd:5,kind:"damage",color:"#c9b8ff",desc:"A herd of moonlight cows tramples everything near you."},{id:"courage",name:"Cowbell Courage",key:"6",level:3,mana:35,cd:20,kind:"support",color:"#ffd23d",desc:"Ring the cowbell: +30% damage and +20 armor for 12 seconds."},{id:"thunder",name:"Udder Thunder",key:"7",level:4,mana:40,cd:8,kind:"damage",color:"#7ad7ff",desc:"Lightning jumps between up to 5 enemies."}],Fn={regen:{name:"Glow Regen",short:"REG",color:"#7dffb0",fx:{regen:4}},courage:{name:"Cowbell Courage",short:"BELL",color:"#ffd23d",fx:{dmg:30,armor:20}},rage:{name:"Rage Cream",short:"RAGE",color:"#ff7a5c",fx:{dmg:30}},swift:{name:"Hoof Speed",short:"SPD",color:"#5cffea",fx:{spd:20}},lucky:{name:"Lucky Clover",short:"LUCK",color:"#8dff5c",fx:{gf:50}},shield:{name:"Haybale Shield",short:"SHLD",color:"#ffb84d",fx:{armor:40}}},_d=["rage","swift","lucky","regen","shield"];var vm="mootopia.token.v1",Db="https://smiles2322-cmd.github.io/mootopia-mayhem/",Nb="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";function Ub(i){if(!i||/[^1-9A-HJ-NP-Za-km-z]/.test(i))return null;let e=[0];for(let t of i){let n=Nb.indexOf(t);for(let s=0;s<e.length;s++)n+=e[s]*58,e[s]=n&255,n>>=8;for(;n;)e.push(n&255),n>>=8}for(let t of i)if(t==="1")e.push(0);else break;return e.reverse()}function vd(i,e="mint address"){let t=(i||"").trim();if(!t)return{ok:!1,msg:`Paste your ${e} first.`};if(/\s/.test(t)&&t.split(/\s+/).length>=6)return{ok:!1,seed:!0,msg:"That looks like a seed phrase. Never paste it anywhere, including here. Nothing was saved, and the box was cleared."};if(t.length>60&&/^[1-9A-HJ-NP-Za-km-z]+$/.test(t))return{ok:!1,seed:!0,msg:"That looks like a private key, not a public address. Never paste a private key anywhere. Nothing was saved, and the box was cleared."};if(/^\[\s*\d+\s*(,\s*\d+\s*){20,}\]$/.test(t))return{ok:!1,seed:!0,msg:"That looks like a private key file. Never paste it anywhere. Nothing was saved, and the box was cleared."};if(t.length<32||t.length>44)return{ok:!1,msg:`A Solana ${e} is 32 to 44 characters. This one is ${t.length}.`};let n=t.match(/[^1-9A-HJ-NP-Za-km-z]/);if(n)return{ok:!1,msg:`"${n[0]}" can't be in a Solana address. They never use 0, O, I, or lowercase l.`};let s=Ub(t);return!s||s.length!==32?{ok:!1,msg:"That is not a valid 32-byte Solana address. Copy it again from FluxBeam, Phantom, or Solscan."}:t==="TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"||t==="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"||t==="11111111111111111111111111111111"?{ok:!1,msg:`That is a Solana program address, not your ${e}.`}:{ok:!0,mint:t,address:t}}var Fb=i=>vd(i,"mint address");function jr(){try{return Object.assign({done:{},mint:"",devnet:!1,symbol:"GLITR",imageUrl:""},JSON.parse(localStorage.getItem(vm))||{})}catch{return{done:{},mint:"",devnet:!1,symbol:"GLITR",imageUrl:""}}}function Mh(i){try{localStorage.setItem(vm,JSON.stringify(i))}catch{}}var To=i=>`https://solscan.io/token/${i.mint}${i.devnet?"?cluster=devnet":""}`,_m=i=>i.length>14?i.slice(0,6)+"..."+i.slice(-6):i,Eo=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Kr=(i,e)=>`<a href="${i}" target="_blank" rel="noopener noreferrer">${e}<span class="vh"> (opens in a new tab)</span></a>`;function Sh(i){let e=i.imageUrl&&/^https:\/\//.test(i.imageUrl)?i.imageUrl:"https://PASTE-YOUR-HOSTED-LOGO-URL/glitter_token_logo_512.png";return JSON.stringify({name:"Glitter",symbol:(i.symbol||"GLITR").toUpperCase().slice(0,10),description:"Glitter is the in-game currency for Tammy Michelli's Smiles2322 games, starting with Moo-topia Mayhem. Players earn Glitter by playing and spend it in the in-game Glitter Shop. It is built for earn-and-spend in the games, not as an investment.",image:e,external_url:Db,attributes:[{trait_type:"Creator",value:"Tammy Michelli / Smiles2322"},{trait_type:"Type",value:"In-game currency"},{trait_type:"Chain",value:"Solana"},{trait_type:"Usage",value:"Earn and spend only"}],properties:{category:"image",files:[{uri:e,type:"image/png"}]}},null,2)}var ms=[{id:"wallet",title:"Install Phantom or Solflare",body:()=>`<p>Get the wallet only from the official site: ${Kr("https://phantom.com/download/","phantom.com/download")} or ${Kr("https://solflare.com/","solflare.com")}. Fake wallet apps and fake browser extensions are a common scam. If you already have one of these wallets, use it.</p>`},{id:"seed",title:"Write your seed phrase on paper",body:()=>'<p>When the wallet shows 12 or 24 words, write them on paper, in order, and keep the paper somewhere safe.</p><ul class="nolist"><li>Never share them with anyone, including support agents, helpers, or this game.</li><li>Never type them into any website or app.</li><li>Never screenshot or photograph them, and never put them in email, Notes, or cloud storage.</li></ul><p>Anyone with those words can empty the wallet.</p>'},{id:"sol",title:"Buy about $5 of SOL",body:()=>"<p>Use the official Buy button inside Phantom or Solflare. About <b>$5</b> covers card fees and leaves about <b>$4 (0.05 SOL)</b> in the wallet. Creating the token only costs about <b>$0.36</b> in network fees, so keep the rest in the wallet for later reward mints. Do not buy more than you need. You do not need a trading pool or a listing.</p>"},{id:"logo",title:"Download your Glitter logo",body:()=>'<div class="logorow"><img src="img/glitter_token_logo_512.png" alt="Glitter token logo, a pink iridescent gem" width="96" height="96"><div><p>This is your gem, sized 512 by 512 for wallets and explorers.</p><a class="btnlink" href="img/glitter_token_logo_512.png" download="glitter_token_logo_512.png">Download logo</a></div></div>'},{id:"meta",title:"Host the logo and metadata.json",body:i=>`<p>Wallets read your token's name, symbol and logo from a small file called <b>metadata.json</b>, hosted at a public link that never changes. The free, easy option is a GitHub Pages repo you never delete, for example <code>smiles2322-cmd/glitter-metadata</code>. Upload the logo first, then paste its public link below and download your ready-made metadata.json.</p>
      <label class="field"><span>Symbol (GLTR is already used, so GLITR is suggested)</span><input id="tgSymbol" maxlength="10" autocomplete="off" spellcheck="false" value="${Eo(i.symbol)}"></label>
      <label class="field"><span>Your hosted logo link (starts with https://)</span><input id="tgImage" type="url" inputmode="url" autocomplete="off" spellcheck="false" placeholder="https://smiles2322-cmd.github.io/glitter-metadata/glitter_token_logo_512.png" value="${Eo(i.imageUrl)}"></label>
      <pre id="tgJson" class="json" tabindex="0" aria-label="metadata.json preview"></pre>
      <div class="row2"><button id="tgDownload" type="button">Download metadata.json</button><button id="tgCopy" type="button">Copy JSON</button></div>
      <p class="tip">After you upload metadata.json too, open both links in a private browser window to check they load with no login.</p>`},{id:"devnet",title:"Practice on devnet first (free)",body:()=>`<p>Devnet is Solana's practice network. Its SOL and tokens are fake and free. Turn on devnet or testnet mode in your wallet's developer settings, get free test SOL from ${Kr("https://faucet.solana.com","faucet.solana.com")}, and run the whole flow once. Paste the test mint below with "This is a devnet test token" checked, and make sure the name and logo look right before you spend real SOL.</p>`},{id:"create",title:"Create the token on FluxBeam (Token-2022 with metadata)",body:()=>`<p>Open ${Kr("https://fluxbeam.xyz/app/tools/token_create","FluxBeam token creator")} and check the address bar says <b>fluxbeam.xyz</b>. Connect your wallet there, not here. Pick the <b>Token-2022 / Token Extensions</b> (V2) option and turn on <b>metadata only</b>. Leave transfer fees, transfer hooks and other extras off. Name: <b>Glitter</b>. Symbol: your choice from step 5. Paste your metadata.json link or upload the logo. ${Kr("https://docs.fluxbeam.xyz/fluxtools-tutorials/v1-token-creation","FluxBeam help docs")}</p><p class="tip">Before you approve in your wallet, read the prompt. You should see a small SOL amount leaving. If a site ever asks for your seed phrase or a fee of 0.5 SOL or more, close the tab.</p>`},{id:"supply",title:"Set supply and decimals",body:()=>"<p><b>Decimals: 6</b> (like USDC, plenty for a game shop, and permanent). <b>Supply: 100,000,000</b> as your starting treasury for shop rewards. Write down a personal cap, for example 1,000,000,000, so the economy does not inflate by accident.</p>"},{id:"auth",title:"Decide on mint and freeze authority",body:()=>`<div class="tradeoff"><div><b>Freeze authority</b><p>Lets the creator lock anyone's Glitter. Wallets and scanners flag it as a risk. A game currency does not need it. <b>Turn it off or revoke it.</b> Revoking is permanent.</p></div>
      <div><b>Mint authority</b><p><b>Keep it</b> if the game will keep paying out new Glitter as rewards. <b>Revoke it</b> to lock the supply forever so nobody, including you, can ever make more. Traders and scanners prefer revoked, but you can never mint rewards again. Revoking cannot be undone.</p></div></div><p>Your kit recommends: freeze off, keep mint authority while Glitter is earn-and-spend only, and keep update authority until the logo looks right in your wallet. Revisit mint authority only after a lawyer has reviewed any sale or trading plan.</p>`},{id:"link",title:"Paste your mint address into the game",body:()=>"<p>After the token is created, copy its <b>mint address</b> (a long code of letters and numbers) from FluxBeam, your wallet, or Solscan, and paste it in the box below. That address is the real identity of Glitter. The ticker is not.</p>"},{id:"verify",title:"Check it on Solscan",body:()=>"<p>Open the Solscan link the game shows after you link your token. Confirm: name Glitter, your symbol, your gem logo, 6 decimals, 100,000,000 supply, Token-2022 program, freeze authority empty, and your metadata link. Then check that Phantom or Solflare shows the name and logo.</p>"}];function ym({$:i,speak:e,onChange:t}){let n=jr(),s=i("tokenBody");function r(){return n.mint?`<p class="linked"><img src="img/glitter_32.png" alt="" width="20" height="20"> Linked token: <code title="${Eo(n.mint)}">${Eo(_m(n.mint))}</code>${n.devnet?' <span class="pill">devnet test</span>':""} ${Kr(To(n),"View on Solscan")}</p>`:'<p class="linked none">No token linked yet.</p>'}function a(){let o=ms.filter(f=>n.done[f.id]).length;s.innerHTML=`
      <div class="warnbox" role="note" aria-label="Read first">
        <b>Read first</b>
        <ul>
          <li><b>Test on devnet first.</b> It is free and uses fake SOL.</li>
          <li><b>This app never asks for your seed phrase or private key</b>, never connects to your wallet, and never creates the token for you. You press every button yourself on the official sites.</li>
          <li><b>Earn-and-spend only.</b> Players earn Glitter by playing and spend it in the shop.</li>
          <li><b>A lawyer must review before any sale or trading.</b> Do not sell Glitter, add a trading pool, or market it as an investment until a crypto lawyer says it is OK. This guide is not legal, tax, or investment advice.</li>
        </ul>
      </div>
      <div class="costbox"><b>What it costs (your kit, November 14, 2026, SOL about $72)</b>
        <div class="row"><span>Token-2022 network cost</span><b>about 0.005 SOL, about $0.36</b></div>
        <div class="row"><span>FluxBeam service fee</span><b>$0</b></div>
        <div class="row"><span>Keep in your wallet</span><b>about 0.05 SOL, about $4</b></div>
        <div class="row"><span>Card or app fee when buying SOL</span><b>a few dollars</b></div>
        <small>Prices move. Treat these as a snapshot and check the fee line on screen before you approve.</small></div>
      <div class="progress" role="progressbar" aria-label="Guide progress" aria-valuemin="0" aria-valuemax="${ms.length}" aria-valuenow="${o}"><div style="width:${(100*o/ms.length).toFixed(1)}%"></div><span>${o} of ${ms.length} steps done</span></div>
      <ol class="steps">${ms.map((f,m)=>`<li class="step${n.done[f.id]?" done":""}" data-step="${f.id}">
        <details${!n.done[f.id]&&ms.findIndex(_=>!n.done[_.id])===m?" open":""}><summary><span class="num" aria-hidden="true">${n.done[f.id]?"&#10003;":m+1}</span><span class="st">${f.title}</span></summary><div class="sbody">${f.body(n)}</div></details>
        <label class="check"><input type="checkbox" data-done="${f.id}" ${n.done[f.id]?"checked":""}><span>Done<span class="vh">: ${f.title}</span></span></label></li>`).join("")}</ol>
      <div class="mintbox">
        <h3 id="mintH">Link your Glitter token</h3>
        <label class="field"><span>Mint address</span><input id="tgMint" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste the mint address" aria-describedby="tgMintMsg" value="${Eo(n.mint)}"></label>
        <label class="check inline"><input type="checkbox" id="tgDevnet" ${n.devnet?"checked":""}><span>This is a devnet test token</span></label>
        <div class="row2"><button id="tgSave" type="button" class="primary">Save mint address</button><button id="tgClear" type="button">Unlink</button></div>
        <p id="tgMintMsg" class="msg" role="status" aria-live="polite"></p>
        <div id="tgLinked">${r()}</div>
        <p class="tip">Only the public mint address is saved, on this device. The game keeps using local Glitter until a developer plugs a real token adapter into glitter-wallet.js.</p>
      </div>`;let c=i("tgJson");c&&(c.textContent=Sh(n)),s.querySelectorAll("[data-done]").forEach(f=>f.addEventListener("change",()=>{n.done[f.dataset.done]=f.checked,Mh(n);let m=s.scrollTop;a(),s.scrollTop=m;let _=ms.filter(p=>n.done[p.id]).length;e(`${f.checked?"Done":"Not done"}. ${_} of ${ms.length} steps.`);let g=s.querySelector(`[data-done="${f.dataset.done}"]`);g&&g.focus()}));let l=i("tgSymbol"),h=i("tgImage"),u=()=>{n.symbol=l.value.replace(/[^A-Za-z0-9]/g,"").toUpperCase(),n.imageUrl=h.value.trim(),Mh(n),c.textContent=Sh(n)};l.addEventListener("input",u),h.addEventListener("input",u),i("tgDownload").addEventListener("click",()=>{let f=new Blob([Sh(n)+`
`],{type:"application/json"}),m=document.createElement("a");m.href=URL.createObjectURL(f),m.download="metadata.json",document.body.appendChild(m),m.click(),setTimeout(()=>{URL.revokeObjectURL(m.href),m.remove()},500),e(h.value.trim()?"metadata.json downloaded.":"metadata.json downloaded. Remember to paste your hosted logo link first, or edit the image line before you upload.")}),i("tgCopy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Sh(n)),e("Copied.")}catch{e("Copy is blocked here. Use Download instead.")}});let d=i("tgMintMsg");i("tgSave").addEventListener("click",()=>{let f=i("tgMint"),m=Fb(f.value);if(!m.ok){m.seed&&(f.value=""),d.textContent=m.msg,d.className="msg bad",f.setAttribute("aria-invalid","true");return}n.mint=m.mint,n.devnet=i("tgDevnet").checked,n.done.link=!0,Mh(n),a();let _=i("tgMintMsg");_.textContent=`Saved. Linked token: ${_m(n.mint)}${n.devnet?" (devnet test)":""}.`,_.className="msg good",t&&t(n)}),i("tgClear").addEventListener("click",()=>{n.mint="",n.devnet=!1,n.done.link=!1,Mh(n),a();let f=i("tgMintMsg");f.textContent="Unlinked.",f.className="msg",t&&t(n)})}return{render:a,get state(){return n},linkedHtml:()=>(n=jr(),r())}}var Sm="mootopia.wallet.v1",Ao=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),yd=i=>i&&i.length>14?i.slice(0,4)+"..."+i.slice(-4):i||"",bm=(i,e)=>`<a href="${i}" target="_blank" rel="noopener noreferrer">${e}<span class="vh"> (opens in a new tab)</span></a>`;function Bb(){try{return Object.assign({address:"",source:""},JSON.parse(localStorage.getItem(Sm))||{})}catch{return{address:"",source:""}}}function Mm(i){try{localStorage.setItem(Sm,JSON.stringify({address:i.address,source:i.source}))}catch{}}function wm({$:i,speak:e,getGlitter:t,openGuide:n}){let s=Bb(),r=i("walletBody");function a(l="",h=""){let u=jr();r.innerHTML=`
      <div class="walletcard">
        <div class="wbal"><img src="img/glitter_256.png" alt="" width="64" height="64"><div><small>In-game Glitter</small><b id="wBal">${t().toLocaleString()}</b><small>Saved on this device</small></div></div>
        <div class="row"><span>Glitter token</span><b>${u.mint?`<code title="${Ao(u.mint)}">${Ao(yd(u.mint))}</code>${u.devnet?' <span class="pill">devnet test</span>':""} ${bm(To(u),"Solscan")}`:"Not linked yet"}</b></div>
        <div class="row"><span>Your wallet</span><b id="wAddr">${s.address?`<code title="${Ao(s.address)}">${Ao(yd(s.address))}</code> ${bm(`https://solscan.io/account/${s.address}`,"Solscan")}`:"Not linked"}</b></div>
      </div>
      <div class="warnbox" role="note" aria-label="Important">
        <b>Important</b>
        <ul>
          <li><b>In-game Glitter is not on-chain yet.</b> It is a number saved on this device. It is not money and can't be cashed out.</li>
          <li>Any on-chain payout needs Tammy's token setup and a lawyer's review first.</li>
          <li><b>This screen only reads a public address.</b> It never asks for, accepts, or stores a seed phrase or private key, and it never signs or sends anything.</li>
        </ul>
      </div>
      <div class="mintbox">
        <h3>Link a wallet address</h3>
        <p class="tip">Paste your public Solana address (the one people send to). In Phantom, tap your account name to copy it.</p>
        <label class="field"><span>Public wallet address</span><input id="wInput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste your public address" aria-describedby="wMsg" value=""></label>
        <div class="row2"><button id="wSave" class="primary" type="button">Link address</button><button id="wPhantom" type="button">Connect Phantom (read only)</button></div>
        <p id="wMsg" class="msg ${h}" role="status" aria-live="polite">${Ao(l)}</p>
        ${s.address?'<button id="wClear" type="button">Unlink wallet</button>':""}
        <p class="tip">Connect Phantom only reads your public address. If Phantom asks you to sign or approve a transaction from this game, say no: this game never needs that.</p>
      </div>
      <button id="wGuide" class="tokenbtn" type="button"><img src="img/glitter_64.png" alt="" width="24" height="24"> Create My Glitter Token guide</button>`,i("wSave").addEventListener("click",()=>o(i("wInput").value,"paste")),i("wPhantom").addEventListener("click",c);let d=i("wClear");d&&d.addEventListener("click",async()=>{if(s.source==="phantom")try{let f=window.phantom&&window.phantom.solana;f&&f.disconnect&&await f.disconnect()}catch{}s={address:"",source:""},Mm(s),a("Wallet unlinked."),e("Wallet unlinked.")}),i("wGuide").addEventListener("click",()=>n&&n())}function o(l,h){let u=vd(l,"wallet address");if(!u.ok){if(u.seed){let f=i("wInput");f&&(f.value="")}a(u.msg,"bad");let d=i("wInput");return d&&d.setAttribute("aria-invalid","true"),e(u.msg),!1}return s={address:u.address,source:h},Mm(s),a(`Linked wallet ${yd(u.address)}.`,"good"),e("Wallet linked."),!0}async function c(){let l=window.phantom&&window.phantom.solana;if(!l||!l.isPhantom||!l.connect){a("Phantom was not found in this browser. On a phone, open this game inside the Phantom app browser, or paste your public address instead.","bad");return}try{let h=await l.connect(),u=h&&h.publicKey||l.publicKey;if(!u)throw new Error("no key");o(u.toString(),"phantom")}catch{a("Phantom did not share an address. Nothing was changed.","bad")}}return{render:a,get state(){return s},link:o}}var Em="mootopia.onboard.v1",Ro=[{t:"Welcome to Moo-topia",b:"You are Rook Vale. The herd is unhinged and you are the cleanup crew. Here is a 30-second tour. You can skip it anytime.",art:"gem"},{t:"Move",b:"<b>Phone:</b> drag the left side of the screen to move and the right side to look around. Tap <b>Jump</b> twice for a double jump, and <b>Dash</b> to dodge.<br><b>Keyboard:</b> WASD or arrows to move, Space to jump, Shift to dash, Q and E to turn.",art:"move"},{t:"Attack",b:"Tap <b>Hit</b> (or press J, or click). When a cow paws the ground and its spots glow orange, a charge is coming: dash sideways, then bonk it while it is dizzy.",art:"hit"},{t:"Spells",b:"Spells use mana (the blue bar) and have cooldowns. Tap a spell button, or press <b>4, 5, 6 or 7</b>. You start with <b>Glow Milk Mend</b>, a heal. Moonbeam Stampede, Cowbell Courage and Udder Thunder unlock as you level up.",art:"spell"},{t:"Loot and buffs",b:"Cows drop Glitter (picked up for you), potions, crafting bits and gear. Gear glows with a colored beam: the brighter the color, the rarer it is. Walk up and tap <b>Pick up</b> (or press F). Glowing shrines and tonics give timed buffs, shown under your health.",art:"loot"},{t:"Your bag",b:"Tap <b>Bag</b> (or press I) to equip gear, compare it with what you are wearing, sort and filter, stash favorites, sell junk for Glitter, and spend talent points.",art:"bag"},{t:"Levels",b:"Every cow you defeat gives XP. Level up to get stronger, earn talent points, unlock spells, and wear better gear. Some gear needs a higher level.",art:"level"},{t:"Wallet",b:"The <b>Wallet</b> screen shows your Glitter and lets you link a public Solana address. In-game Glitter stays on this device for now. The game never asks for your seed phrase or private key.",art:"wallet"}],Tm=()=>{try{return localStorage.getItem(Em)==="done"}catch{return!0}};function Am({$:i,speak:e,onClose:t}){let n=i("onboard"),s=0,r=null;function a(){let h=Ro[s];n.innerHTML=`<div class="obcard" role="dialog" aria-modal="true" aria-labelledby="obT" aria-describedby="obB">
      <div class="obart ob-${h.art}" aria-hidden="true">${h.art==="gem"||h.art==="wallet"?'<img src="img/glitter_256.png" alt="">':""}</div>
      <p class="obstep">Step ${s+1} of ${Ro.length}</p>
      <h2 id="obT">${h.t}</h2><p id="obB">${h.b}</p>
      <div class="obdots" aria-hidden="true">${Ro.map((u,d)=>`<span class="${d===s?"on":""}"></span>`).join("")}</div>
      <div class="row2"><button id="obBack" type="button" ${s===0?"disabled":""}>Back</button><button id="obNext" class="primary" type="button">${s===Ro.length-1?"Let's go!":"Next"}</button></div>
      <button id="obSkip" type="button" class="linkbtn">Skip tutorial</button></div>`,i("obBack").addEventListener("click",()=>{s>0&&(s--,a(),i("obNext").focus())}),i("obNext").addEventListener("click",()=>{s<Ro.length-1?(s++,a(),i("obNext").focus()):l()}),i("obSkip").addEventListener("click",l),e(`${h.t}. ${h.b.replace(/<[^>]+>/g,"")}`)}function o(h){if(!n.hidden&&(h.key==="Escape"&&(h.preventDefault(),l()),h.key==="Tab")){let u=[...n.querySelectorAll("button:not([disabled])")];if(!u.length)return;let d=u[0],f=u[u.length-1];h.shiftKey&&document.activeElement===d?(h.preventDefault(),f.focus()):!h.shiftKey&&document.activeElement===f&&(h.preventDefault(),d.focus())}}document.addEventListener("keydown",o,!0);function c(){s=0,r=document.activeElement,n.hidden=!1,a(),setTimeout(()=>i("obNext")&&i("obNext").focus(),30)}function l(){try{localStorage.setItem(Em,"done")}catch{}n.hidden=!0,n.innerHTML="",r&&r.focus&&r.focus(),t&&t()}return{open:c,close:l,get open_(){return!n.hidden}}}var Co=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),bd=(i,e)=>`${e>0?"+":""}${e}${am[i]}`,Ob={weapon:'<path d="M19 3l-9.5 9.5M17 3h4v4L11 17l-4-4zM7 13l4 4-2 2-1.5-1.5L5 20l-1-1 2.5-2.5L5 15z"/>',helm:'<path d="M4 15a8 8 0 0116 0v3H4zM12 7v8M4 15h16M7 3l1.5 4M17 3l-1.5 4"/>',chest:'<path d="M8 3l4 3 4-3 4 3-2 4v10H6V10L4 6zM12 6v14"/>',boots:'<path d="M7 3h5v9l7 3v4H5v-4l2-1zM5 17h14"/>',trinket:'<path d="M9 4h6l1 3H8zM7 7h10l2 10H5zM12 17v3M10 20h4"/>'},Rm=i=>`<svg class="slotic" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${Ob[i]}</svg>`,kb={rarity:"Rarity",slot:"Type",level:"Item level",newest:"Newest"};function Cm({$:i,speak:e,sfx:t,earn:n,onChange:s,getHero:r,spendPoint:a,canUse:o,useConsumable:c}){let l=pm(),h=null,u=()=>{Yr(l),s&&s(d())},d=()=>lm(l.equipped),f=()=>r?r().level:99;function m(F){return F.rarity==="ultra"&&l.trophies.push({name:F.name,slot:F.slot,t:Date.now()}),l.bag.length>=wo?(u(),!1):(l.bag.push(F),l.found++,u(),!0)}function _(F,O=1){l.potions[F]=(l.potions[F]||0)+O,u()}function g(F,O=1){l.bits[F]=(l.bits[F]||0)+O,u()}function p(){let F=l.potions.small>0?"small":l.potions.big>0?"big":null;return F?(l.potions[F]--,u(),Bi[F]):null}function b(F){return l.potions[F]>0?(l.potions[F]--,u(),Bi[F]):null}let T=F=>F==="stash"?l.stash:l.bag;function y(F){let O=l.bag.findIndex(he=>he.uid===F);if(O<0)return!1;let H=l.bag[O];if(Oi(H)>f())return e(`${H.name} needs level ${Oi(H)}. You are level ${f()}.`),!1;let Y=l.equipped[H.slot];return l.bag.splice(O,1),l.equipped[H.slot]=H,Y&&l.bag.splice(O,0,Y),h={where:"eq",slot:H.slot,uid:H.uid},u(),t&&t.chime(1),e(`Equipped ${H.name}.`),!0}function A(F){let O=l.equipped[F];if(O){if(l.bag.length>=wo){e("Bag is full.");return}delete l.equipped[F],l.bag.push(O),h={where:"bag",uid:O.uid},u(),e(`Took off ${O.name}.`)}}function E(F,O="bag"){let H=T(O),Y=H.findIndex(ue=>ue.uid===F);if(Y<0)return 0;let he=H[Y];return H.splice(Y,1),h=null,u(),n(he.value,"sell"),t&&t.glitter(),e(`Sold ${he.name} for ${he.value} Glitter.`),he.value}function P(F,O="bag"){let H=T(O),Y=H.findIndex(it=>it.uid===F);if(Y<0)return;let he=H[Y],ue=Gt[he.rarity];H.splice(Y,1),l.bits.crumb+=1+ue,ue>=1&&(l.bits.hide+=ue),ue>=3&&(l.bits.nail+=ue-2),h=null,u(),e(`Salvaged ${he.name} into crafting bits.`)}function v(F,O){let H=T(O),Y=O==="stash"?l.bag:l.stash,he=O==="stash"?wo:md,ue=H.findIndex(je=>je.uid===F);if(ue<0)return;if(Y.length>=he){e(O==="stash"?"Bag is full.":"Stash is full.");return}let it=H.splice(ue,1)[0];Y.push(it),h=null,u(),e(O==="stash"?`Moved ${it.name} to your bag.`:`Stashed ${it.name}.`)}function R(){let F=l.bag.filter(H=>H.rarity==="common"),O=0;for(let H of F)O+=H.value;return l.bag=l.bag.filter(H=>H.rarity!=="common"),h=null,u(),O&&(n(O,"sell"),t&&t.glitter()),e(F.length?`Sold ${F.length} common item${F.length===1?"":"s"} for ${O} Glitter.`:"No common junk to sell."),O}function I(F){let O=pd.find(H=>H.id===F);if(O){for(let H in O.cost)if((l.bits[H]||0)<O.cost[H]){e("Not enough crafting bits.");return}if(O.gives.upgrade){let H=U();if(!H){e("Select a piece of gear to polish first.");return}let Y=Object.keys(H.stats).sort((he,ue)=>H.stats[he]-H.stats[ue])[0];H.stats[Y]=Math.round(H.stats[Y]*1.25+1),H.polished=(H.polished||0)+1,H.value=Math.round(H.value*1.15),e(`Polished ${H.name}. ${Mo[Y]} is now ${H.stats[Y]}.`)}else l.potions[O.gives.potion]++,e(`Brewed a ${Bi[O.gives.potion].name}.`);for(let H in O.cost)l.bits[H]-=O.cost[H];u(),t&&t.chime(2)}}function U(){return h?h.where==="eq"?l.equipped[h.slot]||null:T(h.where).find(F=>F.uid===h.uid)||null:null}function G(F){let O=l.ui,H=F.slice();O.rar!=="all"&&(H=H.filter(he=>he.rarity===O.rar)),O.slot!=="all"&&(H=H.filter(he=>he.slot===O.slot));let Y={rarity:(he,ue)=>Gt[ue.rarity]-Gt[he.rarity]||So(ue)-So(he),slot:(he,ue)=>Hs.indexOf(he.slot)-Hs.indexOf(ue.slot)||Gt[ue.rarity]-Gt[he.rarity],level:(he,ue)=>ue.ilvl-he.ilvl||Gt[ue.rarity]-Gt[he.rarity],newest:(he,ue)=>(ue.t||0)-(he.t||0)}[O.sort]||(()=>0);return H.sort(Y)}function X(F,O=""){let H=pn[Gt[F.rarity]],Y=So(F)>So(l.equipped[F.slot]),he=Oi(F)>f();return`<button class="icell r-${F.rarity}${h&&h.uid===F.uid?" sel":""}${he?" locked":""}" ${O} style="--rc:${H.color}" aria-label="${Co(F.name)}, ${H.name} ${Un[F.slot]}${he?", needs level "+Oi(F):""}${Y?", upgrade":""}">${Rm(F.slot)}${Y?'<span class="up" aria-hidden="true">&#9650;</span>':""}${he?`<span class="lk" aria-hidden="true">L${Oi(F)}</span>`:""}</button>`}function B(){let F=U();if(!F)return`<p class="hint">Tap an item to see its stats and compare it with what you're wearing.</p>`;let O=pn[Gt[F.rarity]],H=l.equipped[F.slot],Y=h.where==="eq",he=h.where==="stash",ue=Oi(F)>f(),it=cm(F,Y?null:H).map(({k:rt,a:D,d:ee})=>`<div class="row"><span>${Mo[rt]}</span><b>${bd(rt,D)}${Y?"":` <i class="${ee>0?"pos":ee<0?"neg":"eq"}">${ee===0?"=":(ee>0?"&#9650; ":"&#9660; ")+bd(rt,ee)}</i>`}</b></div>`).join(""),je;return Y?je=`<button data-act="unequip" data-slot="${F.slot}">Take off</button>`:he?je=`<button class="primary" data-act="unstash" data-uid="${F.uid}">Move to bag</button><button data-act="sell" data-where="stash" data-uid="${F.uid}">Sell <span class="gem" aria-hidden="true"></span> ${F.value}</button>`:je=`<button class="primary" data-act="equip" data-uid="${F.uid}" ${ue?"disabled":""}>${ue?`Needs level ${Oi(F)}`:"Equip"}</button><button data-act="sell" data-uid="${F.uid}">Sell <span class="gem" aria-hidden="true"></span> ${F.value}</button><button data-act="stash" data-uid="${F.uid}">Stash</button><button data-act="salvage" data-uid="${F.uid}">Salvage</button>`,`<div class="dname${F.rarity==="ultra"?" rainbowtxt":""}" style="color:${O.color}">${Co(F.name)}</div>
      <div class="dsub">${O.name} ${Un[F.slot]} &middot; item level ${F.ilvl} &middot; <span class="${ue?"neg":""}">requires level ${Oi(F)}</span>${F.polished?" &middot; polished":""}</div>
      <div class="dstats">${it}</div>
      ${Y?'<p class="cmp">Equipped.</p>':`<p class="cmp">${H?`Compared with your <b style="color:${pn[Gt[H.rarity]].color}">${Co(H.name)}</b>.`:"Nothing equipped in this slot yet."}</p>`}
      <p class="flav">${om(F)}</p>
      <div class="dbtns">${je}</div>`}function W(){if(!r)return"";let F=r(),O=F.need?Math.round(100*F.xp/F.need):100;return`<div class="heropanel"><div class="herohead"><b>Level ${F.level}</b><div class="xpbar" role="progressbar" aria-label="Experience" aria-valuemin="0" aria-valuemax="${F.need}" aria-valuenow="${F.xp}"><div style="width:${O}%"></div><span>${F.need?`${F.xp} / ${F.need} XP`:"Max level"}</span></div></div>
      <div class="talents"><small>${F.points?`<b class="pts">${F.points} talent point${F.points===1?"":"s"} to spend</b>`:"Earn a talent point every level."}</small>
      ${Object.entries(ps).map(([H,Y])=>`<div class="tal"><span><b>${Y.name}</b> ${F.talents[H]||0}<small>${Y.desc}</small></span><button class="small" data-tal="${H}" ${F.points?"":"disabled"} aria-label="Add a point to ${Y.name}">+</button></div>`).join("")}</div></div>`}function J(){let F=d(),O=i("bagBody"),H=l.ui,Y=H.view==="stash"?"stash":"bag",he=T(Y),ue=G(he),it=Object.keys(Mo).map(D=>`<div class="stat"><small>${Mo[D]}</small><b>${bd(D,F[D])}</b></div>`).join(""),je=o?o():!1;O.innerHTML=`
      ${W()}
      <div class="bagtop">
        <div class="eqgrid" role="group" aria-label="Equipped gear">${Hs.map(D=>{let ee=l.equipped[D];return`<div class="eqslot"><small>${Un[D]}</small>${ee?X(ee,`data-eq="${D}"`).replace("icell","icell eqc"+(h&&h.where==="eq"&&h.slot===D?" sel":"")):`<button class="icell empty" data-eq="${D}" aria-label="${Un[D]} slot, empty">${Rm(D)}</button>`}</div>`}).join("")}</div>
        <div class="statgrid" aria-label="Your gear stats">${it}<div class="stat"><small>Damage taken</small><b>${F.armor?"-"+Math.round(yh(F.armor)*100)+"%":"0%"}</b></div></div>
      </div>
      ${l.trophies.length?`<div class="trophies"><b class="rainbowtxt">Ultra Rare finds</b> ${l.trophies.map(D=>`<span class="trophy">${Co(D.name)}</span>`).join("")}</div>`:""}
      <div class="bagmain">
        <div class="bagleft">
          <div class="viewtabs" role="tablist" aria-label="Bag or stash"><button role="tab" data-view="bag" aria-selected="${Y==="bag"}" class="${Y==="bag"?"on":""}">Bag ${l.bag.length}/${wo}</button><button role="tab" data-view="stash" aria-selected="${Y==="stash"}" class="${Y==="stash"?"on":""}">Stash ${l.stash.length}/${md}</button></div>
          <div class="filters">
            <label class="sel"><span>Sort</span><select id="bagSort">${Object.entries(kb).map(([D,ee])=>`<option value="${D}" ${H.sort===D?"selected":""}>${ee}</option>`).join("")}</select></label>
            <label class="sel"><span>Type</span><select id="bagSlot"><option value="all">All types</option>${Hs.map(D=>`<option value="${D}" ${H.slot===D?"selected":""}>${Un[D]}</option>`).join("")}</select></label>
          </div>
          <div class="rarchips" role="group" aria-label="Filter by rarity"><button class="chipbtn${H.rar==="all"?" on":""}" data-rar="all" aria-pressed="${H.rar==="all"}">All</button>${pn.map(D=>`<button class="chipbtn${H.rar===D.id?" on":""}${D.rainbow?" rainbowbd":""}" style="--c:${D.color}" data-rar="${D.id}" aria-pressed="${H.rar===D.id}">${D.name}</button>`).join("")}</div>
          <div class="baghead"><small id="bagCount">${ue.length} shown</small>${Y==="bag"?'<button id="bagJunk" class="small">Sell all Common</button>':""}</div>
          <div class="baggrid" role="group" aria-label="${Y==="bag"?"Bag":"Stash"}">${ue.map(D=>X(D,`data-uid="${D.uid}" data-where="${Y}"`)).join("")||`<p class="hint">${he.length?"Nothing matches these filters.":Y==="bag"?"Your bag is empty. Bonk some cows.":"Your stash is empty. Stash gear you want to keep safe."}</p>`}</div>
          <div class="consum">
            <b>Potions and tonics</b>${je?"":" <small>(use them during a run)</small>"}
            <div class="stacks">${Object.values(Bi).map(D=>`<div class="stack" style="--c:${D.color}"><span class="sdot" aria-hidden="true"></span><span class="sname">${D.name}</span><b class="scount">&times;${l.potions[D.id]||0}</b><button class="small" data-use="${D.id}" ${je&&l.potions[D.id]>0?"":"disabled"} aria-label="Use ${D.name}, ${l.potions[D.id]||0} left">Use</button></div>`).join("")}</div>
            <div><b>Crafting bits</b> ${Object.values(Gs).map(D=>`<span class="chip" style="--c:${D.color}" title="${Co(D.desc)}">${D.name} &times;${l.bits[D.id]||0}</span>`).join("")}</div>
            <div class="recipes">${pd.map(D=>{let ee=Object.keys(D.cost).every(_e=>(l.bits[_e]||0)>=D.cost[_e]);return`<button class="small" data-craft="${D.id}" ${ee?"":"disabled"}>${D.name} <small>(${Object.entries(D.cost).map(([_e,Ve])=>`${Ve} ${Gs[_e].name}`).join(", ")})</small></button>`}).join("")}</div>
          </div>
        </div>
        <div class="bagright" id="bagDetail" aria-live="polite">${B()}</div>
      </div>`,O.querySelectorAll(".baggrid [data-uid]").forEach(D=>D.addEventListener("click",()=>{h={where:D.dataset.where,uid:D.dataset.uid},J(),Q()})),O.querySelectorAll("[data-eq]").forEach(D=>D.addEventListener("click",()=>{if(!l.equipped[D.dataset.eq]){e(`${Un[D.dataset.eq]} slot is empty.`);return}h={where:"eq",slot:D.dataset.eq,uid:l.equipped[D.dataset.eq].uid},J(),Q()})),O.querySelectorAll("[data-act]").forEach(D=>D.addEventListener("click",()=>{let ee=D.dataset.act,_e=D.dataset.uid;ee==="equip"?y(_e):ee==="unequip"?A(D.dataset.slot):ee==="sell"?E(_e,D.dataset.where||"bag"):ee==="salvage"?P(_e):ee==="stash"?v(_e,"bag"):ee==="unstash"&&v(_e,"stash"),J(),Q()})),O.querySelectorAll("[data-craft]").forEach(D=>D.addEventListener("click",()=>{I(D.dataset.craft),J()})),O.querySelectorAll("[data-use]").forEach(D=>D.addEventListener("click",()=>{c&&c(D.dataset.use)&&J()})),O.querySelectorAll("[data-tal]").forEach(D=>D.addEventListener("click",()=>{if(a&&a(D.dataset.tal)){u(),J();let ee=O.querySelector(`[data-tal="${D.dataset.tal}"]`);ee&&!ee.disabled&&ee.focus()}})),O.querySelectorAll("[data-view]").forEach(D=>D.addEventListener("click",()=>{l.ui.view=D.dataset.view,h=null,Yr(l),J(),O.querySelector(`[data-view="${D.dataset.view}"]`).focus()})),O.querySelectorAll("[data-rar]").forEach(D=>D.addEventListener("click",()=>{l.ui.rar=D.dataset.rar,Yr(l),J(),O.querySelector(`[data-rar="${D.dataset.rar}"]`).focus(),e(`${i("bagCount").textContent}.`)})),i("bagSort").addEventListener("change",D=>{l.ui.sort=D.target.value,Yr(l),J(),i("bagSort").focus()}),i("bagSlot").addEventListener("change",D=>{l.ui.slot=D.target.value,Yr(l),J(),i("bagSlot").focus()});let rt=i("bagJunk");rt&&rt.addEventListener("click",()=>{R(),J()})}function Q(){let F=i("bagDetail");F&&F.querySelector("button")&&window.innerWidth<700&&F.scrollIntoView({block:"nearest"})}return{inv:l,render:J,stats:d,addItem:m,addPotion:_,addBit:g,usePotion:p,takePotion:b,equip:y,sell:E,sellJunk:R,select(F){h={where:"bag",uid:F}},get potionCount(){return(l.potions.small||0)+(l.potions.big||0)}}}var be=i=>document.getElementById(i),Bm=(i,e,t)=>Math.max(e,Math.min(t,i)),ea=i=>i[Math.random()*i.length|0],ta=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},Ad="mootopia.settings.v1",Om="mootopia.progress.v1",zb={reduceMotion:!1,highContrast:!1,largeText:!1,audioCues:!0,blv:!1,glow:!0,music:.45,sfx:.8,difficulty:"normal",weapon:"blade",shake:!0},re=Object.assign({},zb);try{Object.assign(re,JSON.parse(localStorage.getItem(Ad))||{})}catch{}matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches&&!localStorage.getItem(Ad)&&(re.reduceMotion=!0);var Rh=()=>{try{localStorage.setItem(Ad,JSON.stringify(re))}catch{}},ri={unlocked:1,best:{}};try{Object.assign(ri,JSON.parse(localStorage.getItem(Om))||{})}catch{}var km=()=>{try{localStorage.setItem(Om,JSON.stringify(ri))}catch{}},Sd={normal:{label:"Normal",hp:1,spd:1,dmg:1,count:1,boss:1,glitter:1,aggro:9,cd:1},hard:{label:"Hard",hp:1.5,spd:1.15,dmg:1.5,count:1.25,boss:1.4,glitter:1.5,aggro:11,cd:.8},nightmare:{label:"Nightmare",hp:2,spd:1.3,dmg:2.2,count:1.5,boss:1.9,glitter:2,aggro:14,cd:.6}},Yn=()=>Sd[re.difficulty]||Sd.normal,na=be("game"),Zs=new Kc({canvas:na,antialias:!0,powerPreference:"high-performance"}),Mi=Math.min(window.devicePixelRatio||1,2);Zs.setPixelRatio(Mi);Zs.toneMapping=Ls;Zs.toneMappingExposure=1.15;var qt=new Ra;qt.fog=new Aa(725558,.02);var En=new un(62,1,.1,900),zm=new Ka(8359167,1707818,1.1);qt.add(zm);var Hm=new Fr(13161727,1.6);Hm.position.set(-30,60,-40);qt.add(Hm);var Gm=new Fr(16739288,.35);Gm.position.set(40,20,50);qt.add(Gm);var ia=new ih(Zs);ia.addPass(new sh(qt,En));var Vm=new Xr(new oe(256,256),1.05,.6,.72);ia.addPass(Vm);ia.addPass(new rh);var Ks=[];Zp(qt,Ks);var Hb=Ks.length,Gb=new hh(qt,260,90),kt=new bo(qt,1400,!0),No=new bo(qt,300,!1),yn=new gh(qt,56),ai=new _h(qt),xe=new ah;function Rd(){let i=window.innerWidth,e=window.innerHeight;Zs.setPixelRatio(Mi),Zs.setSize(i,e,!1),ia.setPixelRatio(Mi),ia.setSize(i,e),Vm.resolution.set(Math.floor(i*Mi/2),Math.floor(e*Mi/2)),En.aspect=i/e,En.fov=i<e?68:58,En.updateProjectionMatrix()}window.addEventListener("resize",Rd);Rd();var M={mode:"title",level:0,stampede:!1,t:0,levelT:0,score:0,combo:0,comboT:0,bestCombo:0,kills:0,herded:0,bottles:0,stars:0,caches:0,glitterRun:0,totals:{},portalOpen:!1,boss:null,wave:0,waveT:0,hitStop:0,shake:0,objective:"",fpsAcc:0,fpsN:0,fpsCheckT:0},w={x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,grounded:!0,jumps:0,hp:100,maxHp:100,iframes:0,dashT:0,dashCd:0,atkCd:0,chain:0,chainT:0,safe:{x:0,y:0,z:0},hurtBlink:!1,plat:null},Bn=0,Vb=10,Wb=5.2,bi=new L,j=null,zi=0;qs.getBalance().then(i=>{zi=i,Dh()});qs.on("balance",i=>{typeof i=="number"&&(zi=i,Dh())});var On={};async function Xb(){On=Object.assign({skin:"cyan",outfit:"nightshade",hat:"party",trail:"none"},await qs.getEquipped()),ai.setWeapon(re.weapon,On.skin),ai.setOutfit(On.outfit),yn.setHat(On.hat)}Xb();var Vs={dmg:0,armor:0,spd:0,gf:0,hp:0},st=gm(),gs=bh(st),kn=[],An={dmg:0,armor:0,spd:0,gf:0,hp:0,regen:0,mana:60};function aa(){let i={dmg:Vs.dmg+gs.dmg,armor:Vs.armor+gs.armor,spd:Vs.spd+gs.spd,gf:Vs.gf+gs.gf,hp:Vs.hp+gs.hp,regen:0,mana:gs.mana};for(let t of kn){let n=Fn[t.id].fx;for(let s in n)i[s]=(i[s]||0)+n[s]}i.spd=Math.min(i.spd,60),An=i;let e=w.maxHp;w.maxHp=100+An.hp,w.hp>0&&w.maxHp>e&&(w.hp=Math.min(w.maxHp,w.hp+(w.maxHp-e))),w.hp=Math.min(w.hp,w.maxHp),w.maxMana=An.mana,w.mana==null&&(w.mana=w.maxMana),w.mana=Math.min(w.mana,w.maxMana)}var Si=Cm({$:i=>document.getElementById(i),speak:i=>tt(i),sfx:xe,earn:(i,e)=>$s(i,e),onChange:i=>Wm(i),getHero:()=>({level:st.level,xp:st.xp,need:st.level>=30?0:Zr(st.level),points:st.points,talents:st.talents}),spendPoint:i=>!st.points||!ps[i]?!1:(st.points--,st.talents[i]=(st.talents[i]||0)+1,xd(st),gs=bh(st),aa(),xe.chime(1),tt(`${ps[i].name} is now ${st.talents[i]}.`),!0),canUse:()=>M.bagBack==="play",useConsumable:i=>uM(i)});function Wm(i){Vs=i,aa(),Uo()}function Uo(){let i=Si.potionCount,e=document.getElementById("btnPotion");e&&(e.querySelector("b").textContent=i,e.disabled=i<=0,e.setAttribute("aria-label",`Drink potion, ${i} left`))}function Qt(i,e,t){let n=-1/0,s=null;for(let r of j.platforms){let a;if(r.type==="bridge"){let o=r.bx-r.ax,c=r.bz-r.az,l=o*o+c*c,h=((i-r.ax)*o+(e-r.az)*c)/l;if(h<0||h>1)continue;let u=r.ax+o*h,d=r.az+c*h;if(Math.hypot(i-u,e-d)>r.w/2)continue;a=r.ay+(r.by-r.ay)*h+Math.sin(Math.PI*h)*r.arch}else{let o=i-r.x,c=e-r.z;if(o*o+c*c>r.r*r.r)continue;a=r.y}a<=t+.75&&a>n&&(n=a,s=r)}return{y:n,p:s}}var Pm=be("sr"),Im=0;function tt(i,e=!1){if(Pm.textContent="",setTimeout(()=>{Pm.textContent=i},30),!re.blv||!window.speechSynthesis)return;let t=performance.now();if(!(!e&&t-Im<900)){Im=t;try{e&&speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(i);n.rate=1.08,n.pitch=1,speechSynthesis.speak(n)}catch{}}}function jt(i){if(re.blv||re.audioCues)try{navigator.vibrate&&navigator.vibrate(i)}catch{}}var Eh=0;function lt(i,e=""){let t=be("quip");t.innerHTML=(e?`<b>${e}:</b> `:"")+i,t.classList.add("show"),Eh=3.2,re.blv&&tt(((e?e+": ":"")+i).replace(/<[^>]+>/g,""))}function Dh(){be("glitterVal").textContent=zi.toLocaleString();let i=be("shopBal");i&&(i.textContent=zi.toLocaleString())}function qb(){let i=be("glitterBox");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}async function $s(i,e){i=Math.round(i*(e==="sell"?1:Yn().glitter*(1+An.gf/100))),!(i<=0)&&(M.glitterRun+=i,zi+=i,Dh(),qb(),await qs.earn(i,e))}function nn(i){for(let t of document.querySelectorAll(".screen"))t.hidden=t.id!==i;let e=be(i);if(e){let t=e.querySelector("[data-autofocus]")||e.querySelector("button");t&&setTimeout(()=>t.focus(),30)}}function Cd(){for(let i of document.querySelectorAll(".screen"))i.hidden=!0}function wd(){document.body.classList.toggle("hc",re.highContrast),document.body.classList.toggle("lt",re.largeText),document.body.classList.toggle("blv",re.blv),document.body.classList.toggle("rm",re.reduceMotion),zm.intensity=re.highContrast?2:1.1,qt.fog.density=re.highContrast?.008:.02,yn.mats.body.emissive.set(re.highContrast?4868712:1710634),ai.ring.visible=re.highContrast||re.blv,xe.setVol(re.sfx,re.music)}wd();var Ws=[4060671,16727512,10181631,7077789,16747069,4033535],Be=(i,e=1.8)=>new me(i).multiplyScalar(e);function $b(){j&&(qt.remove(j.group),j.decor&&["stem","cap","gill","leaf","vine","tip","moss"].forEach(i=>qt.remove(j.decor[i])),M.boss&&(qt.remove(M.boss.group),M.boss=null),yn.clear(),j=null,Ks.length=Hb)}function Yb(){let i=new St;return qt.add(i),j={group:i,decor:new ch(qt,220),platforms:[],items:[],hazards:[],fx:[],shrines:[],corral:null,portal:null,portalPos:null,spawn:{x:0,y:0,z:0},camYaw:0,rand:Fs(1234+M.level*77),killGoal:0,minY:-30},j}function $n(i,e,t,n,s={}){let r=j,a=r.rand,o=s.depth||n*1.3;r.group.add(ad(i,e,t,n,o,i*13+t*7+1e3|0,s.top||1195590)),r.platforms.push({type:"disc",x:i,y:e,z:t,r:n*.97});let c=new de(new Zt(n*.96,.04,6,64),new Ye({color:Be(s.rim||4060671,.75)}));if(c.rotation.x=Math.PI/2,c.position.set(i,e+.05,t),r.group.add(c),s.noDecor)return;let l=Math.floor(n*.9);for(let h=0;h<l;h++){let u=a()*Math.PI*2,d=n*(.55+a()*.38),f=i+Math.cos(u)*d,m=t+Math.sin(u)*d;if(s.clear&&Math.hypot(f-s.clear[0],m-s.clear[1])<s.clear[2])continue;let _=a()<.3;r.decor.mushroom(f,e,m,_?2.2+a()*2.5:.5+a()*.9,Be(Ws[a()*Ws.length|0],_?1.4:1.9),_)}for(let h=0;h<l;h++){let u=a()*Math.PI*2,d=n*(.3+a()*.65);r.decor.plant(i+Math.cos(u)*d,e,t+Math.sin(u)*d,.6+a()*1.4,a())}for(let h=0;h<l*3;h++){let u=a()*Math.PI*2,d=n*Math.sqrt(a())*.93;r.decor.put(r.decor.moss,i+Math.cos(u)*d,e+.03,t+Math.sin(u)*d,a()*6,.5+a(),1,.5+a(),0,0,Be(Ws[a()*3|0],2))}for(let h=0;h<l*2;h++){let u=a()*Math.PI*2,d=n*(.6+a()*.35);r.decor.vineAt(i+Math.cos(u)*d,e-.4,t+Math.sin(u)*d,2+a()*o*.8,Be(Ws[a()*Ws.length|0],2))}if(s.waterfall){let h=s.waterfall;r.group.add(od(i+Math.cos(h)*n*.97,e+.1,t+Math.sin(h)*n*.97,2.4,o*1.6,-h+Math.PI/2,Ks))}}function wh(i,e,t,n,s,r,a=2.4,o=1.2){j.group.add(Jp(new L(i,e+.05,t),new L(n,s+.05,r),a,o)),j.platforms.push({type:"bridge",ax:i,ay:e,az:t,bx:n,by:s,bz:r,w:a,arch:o})}function xs(i,e,t,n){j.group.add(cd(i,e,t,n*.62,i*3+t|0,!0)),j.platforms.push({type:"disc",x:i,y:e+n*.2,z:t,r:n*.9,bounce:!0})}function Zb(i){let e=Fs(i);for(let t=0;t<14;t++){let n=e()*Math.PI*2,s=60+e()*70,r=5+e()*10,a=ad(Math.cos(n)*s,-10+e()*30,Math.sin(n)*s,r,r*1.6,t*31+i,996160);j.group.add(a),e()<.5&&j.group.add(od(a.position.x+r*.9,a.position.y,a.position.z,1.5+e()*2,r*3,e()*6,Ks))}for(let t=0;t<10;t++){let n=e()*Math.PI*2,s=85+e()*60;j.group.add(cd(Math.cos(n)*s,-25+e()*20,Math.sin(n)*s,3+e()*4,t+i))}j.group.add(ld(-40,-20,-90,50,.3,.22))}var Jb=new Za,Xm=Jb.load("img/glitter_256.png");Xm.colorSpace=xn;var Kb=new Li({map:Xm,color:new me(1,1,1),transparent:!0,depthWrite:!1}),jb=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,200,250,0.6)"),t.addColorStop(1,"rgba(255,150,240,0)"),e.fillStyle=t,e.beginPath();for(let s=0;s<8;s++){let r=s%2?5:32,a=s/8*Math.PI*2;e.lineTo(32+Math.cos(a)*r,32+Math.sin(a)*r)}return e.closePath(),e.fill(),new Rs(i)})(),Qb=new Li({map:jb,color:new me(2,2,2),transparent:!0,depthWrite:!1,blending:an});function eM(i=.75){let e=new St,t=new Ji(Kb);t.scale.set(i,i,1),e.add(t);let n=new Ji(Qb.clone());return n.scale.set(.35,.35,1),n.position.set(i*.28,i*.3,.01),e.add(n),e.userData.sparkle=n,e.userData.sprite=!0,e}var qm=new bt(.1,.32,1,14,1,!0);qm.translate(0,.5,0);var tM=new Vn(.45,.62,28);function nM(i,e){let t=new St;if(i==="gear"){let n=pn[Gt[e.item.rarity]],s=new de(qm,new Ye({color:Be(n.hex,.85),transparent:!0,opacity:.55,depthWrite:!1,blending:an,side:It}));s.scale.set(1,n.beam,1),s.position.y=-.9,t.add(s),t.userData.beam=s;let r=new de(tM,new Ye({color:Be(n.hex,1.1),transparent:!0,opacity:.85,depthWrite:!1,side:It}));if(r.rotation.x=-Math.PI/2,r.position.y=-.84,t.add(r),t.userData.ring=r,n.rainbow){s.scale.x=s.scale.z=1.5;let l=new de(new Zt(.55,.05,6,24),new Ye({color:Be(16777215,2)}));l.position.y=.5,l.rotation.x=Math.PI/2,t.add(l)}let a=new de(new Yt(.5,.32,.36),new pt({color:4861210,roughness:.5,emissive:1707269}));t.add(a);let o=new de(new Yt(.54,.1,.4),new Ye({color:Be(n.hex,1.4)}));o.position.y=.2,t.add(o);let c=new de(new Yt(.08,.34,.38),new Ye({color:Be(n.hex,1.4)}));t.add(c)}else if(i==="potion"){let n=new me(Bi[e.id].color),s=new de(new Ut(.22,12,10),new Ye({color:n.clone().multiplyScalar(1.6)}));t.add(s);let r=new de(new bt(.07,.09,.18,8),new Ye({color:Be(15398655,1.2)}));r.position.y=.26,t.add(r)}else{let n=new de(new $a(.2),new Ye({color:new me(Gs[e.id].color).multiplyScalar(1.5)}));t.add(n)}return t}function wt(i,e,t,n,s={}){let r;if(i==="gear"||i==="potion"||i==="bit")r=nM(i,s);else if(i==="bottle"){r=new St;let o=new Ye({color:Be(15398655,1.3)}),c=new de(new bt(.22,.24,.5,10),o);r.add(c);let l=new de(new bt(.1,.18,.2,10),o);l.position.y=.33,r.add(l);let h=new de(new bt(.11,.11,.08,10),new Ye({color:Be(16727512,1.5)}));h.position.y=.47,r.add(h)}else if(i==="star"){let o=new Lr;for(let c=0;c<10;c++){let l=c%2?.2:.48,h=c/10*Math.PI*2+Math.PI/2;c?o.lineTo(Math.cos(h)*l,Math.sin(h)*l):o.moveTo(Math.cos(h)*l,Math.sin(h)*l)}r=new de(new Xa(o,{depth:.14,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:1}),new Ye({color:Be(16765501,1.6)}))}else if(i==="cache"){r=new St;for(let o=0;o<6;o++){let c=new de(new Qi(.25+o%3*.1),new Ye({color:Be(o%2?16727512:4060671,1.6)})),l=o*1.05;c.position.set(Math.cos(l)*.35,.1+o%3*.15,Math.sin(l)*.35),c.scale.y=1.8,c.rotation.z=Math.cos(l)*.4,r.add(c)}}else r=eM((s.value||1)>=6?.95:.75);r.position.set(e,t+.9,n),j.group.add(r);let a=Object.assign({type:i,mesh:r,x:e,y:t+.9,z:n,t:Math.random()*6,taken:!1},s);return j.items.push(a),a}function sa(i,e,t="grunt"){let n=Qt(i,e,50);return yn.spawn(i,n.y===-1/0?0:n.y,e,t,Yn())}function Qr(i,e,t,n,s=["grunt"]){let r=j.rand,a=Math.round(n*Yn().count);for(let o=0;o<a;o++){let c=r()*Math.PI*2,l=r()*t;sa(i+Math.cos(c)*l,e+Math.sin(c)*l,s[o%s.length])}}function Po(i,e,t,n){let s=Kp(Ks);return s.position.set(i,e+1.8,t),s.visible=!n,j.group.add(s),j.portal=s,j.portalPos=new L(i,e,t),s}var iM=[()=>{$n(0,0,0,13,{waterfall:.6,clear:[0,-9,4]}),$n(-20,-3,6,6,{waterfall:2.5}),wh(-12.5,0,3,-15,-3,5,2.2,1),j.group.add(ld(10,0,-9,10,0,.55)),Po(.2,0,-9.5,!0),j.secret=!0,wt("bottle",-20,-3,6),wt("star",6,0,4),wt("gem",-4,0,2,{value:3});let i=sa(5,2,"calf");i&&(i.sleepy=!0,i.hp=1),j.spawn={x:0,y:0,z:8},j.camYaw=0,j.killGoal=0,M.objective="Find the secret at the foot of the neon rainbow"},()=>{$n(0,0,0,16,{waterfall:2.2,clear:[0,-12,3]}),$n(30,2,-10,9,{waterfall:.3,rim:16727512}),$n(-26,1,-18,8,{waterfall:3.5,rim:10181631}),wh(15,0,-4.5,22,2,-8,2.6,1.4),wh(-14,0,-7,-20,1,-13,2.6,1.2),j.corral={x:-7,z:8,r:3};let i=uh(3);i.position.set(-7,0,8),j.group.add(i),Qr(3,-2,9,6,["grunt","grunt","charger"]),Qr(30,-10,5,4,["grunt","charger"]),Qr(-26,-18,4,3,["charger","grunt"]),[[8,6],[-10,-4],[12,-10],[30,-16],[-26,-13],[-4,12]].forEach(([e,t])=>wt("bottle",e,Qt(e,t,50).y,t)),[[34,-6],[-2,-14],[-30,-22]].forEach(([e,t])=>wt("star",e,Qt(e,t,50).y,t)),wt("cache",-31,1,-21,{hidden:!0}),j.decor.mushroom(-29.5,1,-19.5,4.2,Be(10181631,1.4),!0),Xs(-8,2),j.spawn={x:0,y:0,z:12},j.camYaw=0,Po(0,0,-12,!0)},()=>{$n(0,0,0,9,{waterfall:1}),xs(0,-1.5,-12,2.6),$n(0,6,-25,9.5,{rim:16727512,waterfall:4}),wh(6.5,6,-28.5,18.5,4,-33.5,2.4,2),$n(24,4,-37,8,{rim:7077789,waterfall:.2}),xs(24,2,-47.5,2.4),$n(24,9,-61,11,{rim:16765501,waterfall:5,clear:[24,-61,6]}),j.corral={x:-4,z:-27,r:2.6};let i=uh(2.6);i.position.set(-4,6,-27),j.group.add(i),Qr(0,-2,5,3,["grunt","charger"]),Qr(2,-24,6,5,["grunt","charger","grunt","tank"]),Qr(24,-37,5,4,["charger","tank"]),wt("bottle",0,6,-21),wt("bottle",24,4,-33),wt("bottle",18,9,-61),wt("bottle",-5,0,3),wt("star",0,4,-12),wt("star",24,8,-47.5),wt("star",31,9,-66),wt("cache",6,0,6,{hidden:!0}),j.decor.mushroom(5,0,4.6,3.6,Be(16747069,1.4),!0),Xs(-3,-23),j.spawn={x:0,y:0,z:5},j.camYaw=0,j.minY=-35,j.bossTrigger={x:24,z:-61,r:9,type:"sirloin"},Po(24,9,-68,!0)},()=>{$n(0,0,0,20,{waterfall:1.5,clear:[0,0,15],rim:16727512});for(let i=0;i<10;i++){let e=i/10*Math.PI*2;j.decor.mushroom(Math.cos(e)*17.5,0,Math.sin(e)*17.5,4+i%3,Be(Ws[i%Ws.length],1.4),!0)}xs(-12,.3,12,2.2),xs(12,.3,12,2.2),wt("bottle",-14,0,0),wt("bottle",14,0,0),wt("star",0,0,14),wt("cache",0,0,-18.5,{hidden:!0}),j.spawn={x:0,y:0,z:13},j.camYaw=0,j.bossTrigger={x:0,z:0,r:30,type:"baroness"},j.arenaR=18.5,Po(0,0,-10,!0),Xs(-15,6)},()=>{$n(0,0,0,23,{waterfall:2.6,clear:[0,0,17],rim:16765501,top:2760518}),j.group.add(sM(0,0,-19.5));for(let i=0;i<12;i++){let e=i/12*Math.PI*2;Math.abs(Math.sin(e))>.8||j.decor.mushroom(Math.cos(e)*20.5,0,Math.sin(e)*20.5,4.5+i%3,Be(i%2?16765501:16727403,1.4),!0)}for(let[i,e]of[[-9,-12],[9,-12],[-14,2],[14,2]])j.group.add(rM(i,0,e));xs(-15,.3,11,2.2),xs(15,.3,11,2.2),wt("bottle",-16,0,-4),wt("bottle",16,0,-4),wt("star",0,0,16),wt("cache",18,0,-12,{hidden:!0}),Xs(-10,12),Xs(10,12),j.spawn={x:0,y:0,z:16},j.camYaw=0,j.bossTrigger={x:0,z:-2,r:30,type:"king"},j.arenaR=21,Po(0,0,-14,!0)}];function sM(i,e,t){let n=new St;n.position.set(i,e,t);let s=new pt({color:16761405,metalness:.6,roughness:.3,emissive:4861952}),r=new pt({color:11735598,roughness:.6,emissive:3145736}),a=new de(new bt(4.2,4.6,.6,24),s);a.position.y=.3,n.add(a);let o=new de(new Yt(3.4,1.2,2.6),r);o.position.y=1.2,n.add(o);let c=new de(new Yt(3.6,5,.6),r);c.position.set(0,3.6,-1.1),n.add(c);for(let h of[-1.9,1.9]){let u=new de(new bt(.25,.3,6,10),s);u.position.set(h,3,-1.1),n.add(u);let d=new de(new Ut(.42,14,10),new Ye({color:Be(16765501,1.8)}));d.position.set(h,6.2,-1.1),n.add(d)}let l=new de(new bt(1.1,.9,.9,6,1,!0),new Ye({color:Be(16765501,1.6),side:It}));return l.position.set(0,6.7,-1.1),n.add(l),n}function rM(i,e,t){let n=new St;n.position.set(i,e,t);let s=new de(new bt(.08,.08,5,8),new pt({color:16761405,metalness:.5,roughness:.3}));s.position.y=2.5,n.add(s);let r=new de(new Di(1.4,2.2),new pt({color:11735598,side:It,emissive:4194320}));r.position.set(.72,3.6,0),n.add(r);let a=new de(new Qi(.28),new Ye({color:Be(16765501,1.8)}));return a.position.set(.72,3.8,.02),n.add(a),n}function aM(){$n(0,0,0,22,{waterfall:2,clear:[0,0,8],rim:16765501}),j.corral={x:0,z:0,r:3.2};let i=uh(3.2);j.group.add(i),xs(-15,.3,-12,2.2),xs(15,.3,12,2.2),j.spawn={x:0,y:0,z:8},j.camYaw=0,j.arenaR=21,Xs(-12,6),Xs(12,-6)}function Pd(i,e=!1){$b(),Yb(),M.level=i,M.stampede=e,M.portalOpen=!1,M.levelT=0,M.wave=0,M.waveT=1.5,M.score=0,M.combo=0,M.bestCombo=0,M.kills=0,M.herded=0,M.bottles=0,M.stars=0,M.caches=0,M.glitterRun=0,M.bossBeaten=!1,M.lootRun=0,M.xpRun=0,M.nearGear=null,Ld(),Zb(i*101+(e?999:0)),e?aM():iM[i](),j.decor.finish(),j.totalBottles=j.items.filter(s=>s.type==="bottle").length,j.totalStars=j.items.filter(s=>s.type==="star").length,kn.length=0,aa(),Ph(!0);for(let s in oi)oi[s]=0;w.mana=w.maxMana;let t=j.spawn;Object.assign(w,{x:t.x,y:t.y,z:t.z,vx:0,vy:0,vz:0,yaw:Math.PI,grounded:!0,hp:w.maxHp,iframes:0,dashT:0,atkCd:0,chain:0}),w.safe={x:t.x,y:t.y,z:t.z},Bn=j.camYaw,bi.set(t.x,t.y+1.2,t.z),yn.setHat(On.hat||"party"),be("bossbar").hidden=!0,be("combo").hidden=!0,M.comboT=0;let n=e?"Stampede":$r[i].name;be("areaName").textContent=n,M.mode==="play"&&(setTimeout(()=>{M.mode==="play"&&lt(e?"Stampede. Infinite cows, finite patience. How long can you last?":$r[i].intro)},400),re.blv&&tt(n+". "+(e?"Endless waves. Survive.":$r[i].intro),!0),xe.startMusic(e?"stampede":i>=3?"boss":"calm")),oa()}var Js=()=>yn.cows.filter(i=>!i.dead&&!i.sleepy);function oa(){let i=M.objective;if(j){if(M.stampede)i=`Wave ${M.wave} \xB7 ${Js().length} cows`;else if(M.level>0){let e=Js().length;M.boss?i=`Defeat ${M.boss.def.short}`:j.bossTrigger&&!M.bossBeaten&&e===0&&M.level===2?i="Climb to the golden spire. Something smug waits there.":j.bossTrigger&&!M.bossBeaten&&M.level===3?i="Survive the Baroness":j.bossTrigger&&!M.bossBeaten&&M.level===4?i="Dethrone the King":e>0?i=`Clear the herd: ${e} cow${e===1?"":"s"} left`:i=M.portalOpen?"Portal open. Step through to finish.":""}be("objective").textContent=i}}function Id(){M.portalOpen||!j.portal||(M.portalOpen=!0,j.portal.visible=!0,xe.chime(2),xe.whoosh(),lt(M.level===0?"A secret portal. In a rainbow. Obviously.":"The exit portal is open. Step through when ready."),re.blv&&tt("Portal open. Follow the chiming beacon.",!0),oa())}function $m(i){let e=sm[i],t=im(e.body,e.spot,e.hat,e.cape);if(i==="king"){let a=t.parts.hat;a.scale.set(1.3,1.25,1.3),a.position.y+=.06;let o=new pt({color:16765501,metalness:.7,roughness:.25,emissive:5913088});for(let c=0;c<6;c++){let l=c/6*Math.PI*2,h=new de(new ni(.06,.16,6),o);h.position.set(Math.cos(l)*.27,.37,Math.sin(l)*.27),a.add(h);let u=new de(new Ut(.035,8,6),new Ye({color:Be(c%2?16727403:4060671,1.6)}));u.position.set(Math.cos(l)*.29,.15,Math.sin(l)*.29),a.add(u)}}let n=t.group;n.scale.setScalar(e.scale),qt.add(n);let s=j.bossTrigger,r=Qt(s.x,s.z-4,50).y;M.boss={type:i,def:e,group:n,parts:t.parts,mats:t.mats,x:s.x,y:r,z:s.z-4,yaw:0,hp:Math.round(e.hp*Yn().boss),maxHp:Math.round(e.hp*Yn().boss),state:"intro",t:2.2,flash:0,walk:0,phase:1,cdir:{x:0,z:0},vy:0,moveIdx:0,mooT:0},be("bossName").textContent=e.name,be("bossbar").hidden=!1,lt(e.intro,e.short),xe.moo(.55,null,.8),xe.startMusic("boss"),re.blv&&tt(e.name+" appears ahead! Listen for the deep moo.",!0),oa()}function oM(i){let e=M.boss;if(!e)return;let t=Yn(),n=w.x-e.x,s=w.z-e.z,r=Math.hypot(n,s),a=e.def.scale;e.t-=i,e.flash-=i,e.mooT-=i;let o=m=>{let _=Math.atan2(n,s);e.yaw+=ta(_,e.yaw)*Math.min(1,m*i)},c=e.def.speed*t.spd*(e.phase>=2?1.25:1)*(e.phase>=3?1.1:1),l=0,h=(m,_)=>{let g=e.x+m*i,p=e.z+_*i,b=Qt(g,p,e.y+2);return b.y>-1/0&&(!j.arenaR||Math.hypot(g,p)<j.arenaR)?(e.x=g,e.z=p,e.y+=(b.y-e.y)*Math.min(1,i*10),!0):!1};switch(e.state){case"intro":o(3),e.t<=0&&(e.state="chase",e.t=1.5);break;case"chase":if(o(4),r>3&&(h(Math.sin(e.yaw)*c,Math.cos(e.yaw)*c),l=1),e.t<=0){let m=e.def.moves.filter(g=>(g!=="rain"||e.phase>=2)&&(g!=="decree"||e.phase>=3)),_=m[e.moveIdx++%m.length];e.state="wind_"+_,e.t=_==="charge"?.9*t.cd+.3:.75,lM(_)}break;case"wind_charge":o(6),e.t<=0&&(e.state="charge",e.t=1.1,e.cdir={x:Math.sin(e.yaw),z:Math.cos(e.yaw)},xe.moo(.5,null,.9));break;case"charge":{let m=h(e.cdir.x*c*4,e.cdir.z*c*4);l=2,(!m||e.t<=0)&&(e.state="dizzy",e.t=1.6,lt("Dizzy! Hit it while the room spins."),re.blv&&tt("Boss is dizzy. Attack now!")),r<1.1*a+.4&&ra(26*t.dmg,e.x,e.z,14);break}case"wind_stomp":e.vy=0,e.t<=0&&(e.state="stomp",e.t=.6);break;case"stomp":e.t<=0&&(xe.stomp(),Hi(.6),j.hazards.push(Md(e.x,e.y,e.z,12+t.spd*3)),e.phase===2&&re.difficulty!=="normal"&&setTimeout(()=>M.boss&&j.hazards.push(Md(e.x,e.y,e.z,14)),600),e.state="chase",e.t=2.2*t.cd+.6);break;case"wind_summon":if(e.t<=0){for(let m=0;m<(e.phase===2?4:2)+(re.difficulty==="nightmare"?2:0);m++){let _=Math.random()*6.28,g=sa(e.x+Math.cos(_)*4,e.z+Math.sin(_)*4,"calf");g&&(g.state="chase")}lt("Children! Mommy needs you to headbutt someone.",e.def.short),e.state="chase",e.t=2.5*t.cd+.5}break;case"wind_decree":if(e.t<=0){lt("By royal decree: dodge!",e.def.short);for(let m=0;m<3;m++)setTimeout(()=>{M.boss&&M.boss===e&&e.state!=="dead"&&(xe.stomp(),Hi(.5),j.hazards.push(Md(e.x,e.y,e.z,16)))},m*650);for(let m=0;m<2;m++){let _=Math.random()*6.28,g=sa(e.x+Math.cos(_)*5,e.z+Math.sin(_)*5,"charger");g&&(g.state="chase")}e.state="chase",e.t=3*t.cd+.6}break;case"wind_rain":if(e.t<=0){let m=5+(re.difficulty==="nightmare"?4:re.difficulty==="hard"?2:0);for(let _=0;_<m;_++){let g=Math.random()*6.28,p=_===0?0:2+Math.random()*6;j.hazards.push(_M(w.x+Math.cos(g)*p,w.z+Math.sin(g)*p))}e.state="chase",e.t=2.5*t.cd+.5}break;case"dizzy":e.t<=0&&(e.state="chase",e.t=1.4*t.cd+.5);break;case"dead":e.group.scale.multiplyScalar(Math.max(0,1-i*3)),e.group.rotation.y+=i*12,e.t<=0&&(qt.remove(e.group),M.boss=null,be("bossbar").hidden=!0,cM(e));return}let u=0;if(e.state==="stomp"&&(u=Math.sin((1-e.t/.6)*Math.PI)*3),r<1*a&&e.state!=="dead"){let m=(1*a-r)/(r||1);w.x+=n*m,w.z+=s*m,e.state!=="dizzy"&&ra(8*t.dmg,e.x,e.z,8)}e.walk+=i*(l?6*l:1);let d=e.group;d.position.set(e.x,e.y+u,e.z),d.rotation.set(e.state.startsWith("wind")?-.12:0,e.yaw,e.state==="dizzy"?Math.sin(M.t*10)*.12:Math.sin(e.walk)*.05);let f=e.state.startsWith("wind")?1+Math.sin(M.t*30)*.04:1;d.scale.set(a/f,a*f,a/f);for(let m=0;m<4;m++){let _=Math.sin(e.walk*2+(m===0||m===3?0:Math.PI))*.6*(l?1:0);e.parts["leg"+m].rotation.x=_,e.parts["hoof"+m].rotation.x=_}e.parts.browL.rotation.z=-.5,e.parts.browR.rotation.z=.5,e.mats.body.emissive.set(e.flash>0?6706551:e.state==="dizzy"?3359846:1710634),e.mats.spot.color.set(e.state.startsWith("wind")?16732208:e.def.spot).multiplyScalar(2.2),e.state==="dizzy"&&Math.random()<.3&&kt.emit(e.x+Math.sin(M.t*8)*1.5,e.y+2*a+.4,e.z+Math.cos(M.t*8)*1.5,1,[new me(16765501)],.2,.4,3,0,0),re.blv&&e.mooT<=0&&(e.mooT=1.4,xe.moo(.5,Tn(e.x,e.y+2,e.z),.6)),be("bossFill").style.width=100*e.hp/e.maxHp+"%"}function lM(i){let e=M.boss,t=Tn(e.x,e.y+2,e.z);i==="charge"&&(xe.tone("sawtooth",120,60,.6,.25,t),(re.blv||re.audioCues)&&tt("Charge incoming! "+_s(e.x,e.z)+". Dash sideways!",!0)),i==="stomp"&&(xe.tone("sine",200,500,.5,.25,t),(re.blv||re.audioCues)&&tt("Stomp! Jump over the wave!",!0)),i==="decree"&&(re.blv||re.audioCues)&&tt("Royal decree! Three shockwaves. Jump each one!",!0),i==="rain"&&(lt("Glitter bombs, darling. Very on trend.",e.def.short),(re.blv||re.audioCues)&&tt("Bombs falling around you. Keep moving!",!0)),jt([60,40,60])}function Ed(i,e,t){let n=M.boss;if(!n||n.state==="dead"||n.state==="intro")return!1;let s=n.state==="dizzy"?2:1;if(n.hp-=i*s,n.flash=.12,xe.tone("square",220,110,.12,.2),e0(),M.score+=Math.round(25*Nd()),kt.emit(n.x,n.y+2.5,n.z,re.reduceMotion?6:14,[new me(n.def.spot),new me(16777215)],6,.6,3),n.type==="king"?(n.phase===1&&n.hp<=n.maxHp*.66?(n.phase=2,lt(n.def.mid,n.def.short),tt("Phase two!")):n.phase===2&&n.hp<=n.maxHp*.33&&(n.phase=3,lt(n.def.mid2,n.def.short),tt("Phase three! Royal decree incoming.",!0),xe.fanfare()),be("bossName").textContent=`${n.def.name}${n.phase>1?", phase "+n.phase:""}`):n.phase===1&&n.hp<=n.maxHp/2&&n.def.moves.includes("rain")?(n.phase=2,lt(n.def.mid,n.def.short)):n.phase===1&&n.hp<=n.maxHp/2&&!n._mid&&(n._mid=!0,lt(n.def.mid,n.def.short)),n.hp<=0){n.hp=0,n.state="dead",n.t=1,lt(n.def.defeat,n.def.short),xe.moo(.45,null,1),xe.fanfare(),Hi(.8);for(let r=0;r<4;r++)setTimeout(()=>{kt.emit(n.x,n.y+3,n.z,re.reduceMotion?30:90,Dd(n.def.body,n.def.spot),14,1.6,6,4),No.emit(n.x,n.y+2,n.z,20,[new me(7035546)],5,1.5,8,1)},r*180);jt([100,50,200])}return!0}function cM(i){M.bossBeaten=!0,M.score+=i.type==="baroness"?5e3:2e3,M.kills++;for(let e=0;e<16;e++){let t=e/16*6.28;wt("gem",i.x+Math.cos(t)*2.5,i.y,i.z+Math.sin(t)*2.5,{value:Math.round((i.type==="baroness"?120:50)/16)+1,magnet:.6})}Ym(dm(i.type,{diff:re.difficulty,area:M.stampede?2+Math.floor(M.wave/5):M.level,gf:An.gf,forceUltra:Km()}),i.x,i.y,i.z,3.6),Ch(gd[i.type]||150,i.def.short),!M.stampede&&(yn.cows.forEach(e=>{!e.dead&&e.kind==="calf"&&Do(e,0,0,!0)}),Id(),oa())}function Ym(i,e,t,n,s=1.6){let r=-1;if(i.forEach((a,o)=>{let c=Math.random()*6.28+o*2.1,l=s*(.5+Math.random()*.5),h=e+Math.cos(c)*l,u=n+Math.sin(c)*l,d=Qt(h,u,t+3);d.y===-1/0&&(h=e,u=n,d=Qt(h,u,t+3));let f=d.y===-1/0?t:d.y;a.type==="gear"?(wt("gear",h,f,u,{item:a.item}),r=Math.max(r,Gt[a.item.rarity]),M.lootRun++):a.type==="potion"?wt("potion",h,f,u,{id:a.id,magnet:.5}):wt("bit",h,f,u,{id:a.id,n:a.n||1,magnet:.5})}),r>=0){let a=pn[r];r>=5?(xe.ultra(),lt('<span class="rainbowtxt">ULTRA RARE DROP!</span> Follow the rainbow beam!'),jt([60,40,60,40,60,40,200]),Ys(),Hi(.4)):r>=3?(xe.fanfare(),lt(`${a.name} drop! Look for the ${r===4?"golden":"purple"} beam.`),jt([40,30,40,30,80])):xe.tone("triangle",700+r*200,1400+r*300,.25,.15),(re.blv||re.audioCues)&&tt(`${a.name} item dropped ${_s(e,n)}.`)}}function Zm(i){if(!i||i.taken)return;let e=i.item,t=pn[Gt[e.rarity]];i.taken=!0,j.group.remove(i.mesh),M.nearGear=null,Ld(),e.rarity==="ultra"&&(xe.ultra(),Ys(),Ys()),Si.addItem(e)?(xe.chime(Gt[e.rarity]>=3?3:1),lt(`<span style="color:${t.color}">${e.name}</span> (${t.name} ${Un[e.slot]}) added to your bag.`),tt(`Picked up ${e.name}, ${t.name} ${Un[e.slot]}.`),jt(25),hM()):($s(e.value,"sell"),lt(`Bag full, so ${e.name} was sold for ${e.value} Glitter.`),tt(`Bag full. Sold ${e.name} for ${e.value} Glitter.`))}function Ld(){let i=be("btnPickup"),e=M.nearGear;if(!e){i.hidden||(i.hidden=!0);return}let t=pn[Gt[e.item.rarity]],n=`Pick up ${e.item.name}`;i.dataset.uid!==e.item.uid&&(i.dataset.uid=e.item.uid,i.innerHTML=`<small style="color:${t.color}">${t.name} ${Un[e.item.slot]}</small><span>${e.item.name}</span><em>Tap to pick up</em>`,i.style.setProperty("--rc",t.color),i.setAttribute("aria-label",n)),i.hidden=!1}function hM(){let i=be("btnBag");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}function Jm(){if(M.mode!=="play")return;if(w.hp>=w.maxHp){lt("You are already at full health. Save it.");return}let i=Si.usePotion();if(!i){lt("Out of potions. Cows sometimes drop them.");return}w.hp=Math.min(w.maxHp,w.hp+i.heal),i.buff&&Lo(i.buff,i.dur),xe.chime(0),kt.emit(w.x,w.y+1,w.z,20,[new me(i.color).multiplyScalar(2)],3,.8,3,2),lt(`${i.name}. +${i.heal} health.`),tt(`Healed. Health ${Math.round(w.hp)}`),Uo()}function uM(i){let e=Bi[i];if(!e)return!1;if(e.heal>0&&w.hp>=w.maxHp&&!e.buff)return tt("Already at full health."),!1;let t=Si.takePotion(i);return t?(t.heal&&(w.hp=Math.min(w.maxHp,w.hp+t.heal)),t.buff&&Lo(t.buff,t.dur),xe.chime(0),tt(`${t.name}${t.heal?`, +${t.heal} health`:""}${t.buff?`. ${Fn[t.buff].name} for ${t.dur} seconds`:""}.`),Uo(),!0):!1}function Km(){return M.forceUltra?(M.forceUltra=!1,!0):!1}function Ch(i,e){let t=xm(st,i);xd(st),M.xpRun=(M.xpRun||0)+Math.round(i),wn.xp=null,t&&dM(t)}function dM(i){if(gs=bh(st),aa(),w.hp=w.maxHp,w.mana=w.maxMana,xe.levelUp(),jt([50,40,50,40,150]),Hi(.3),j)for(let n=0;n<3;n++)setTimeout(()=>kt.emit(w.x,w.y+.4+n*.6,w.z,re.reduceMotion?14:40,[Be(16765501,2),Be(16777215,2),Be(10483455,2)],5,1.1,4,4),n*150);let e=be("lvlup"),t=Jr.filter(n=>n.level===st.level);e.innerHTML=`<b>LEVEL UP!</b><span>Level ${st.level}</span><small>+${i||1} talent point${(i||1)>1?"s":""}${t.length?` &middot; New spell: ${t.map(n=>n.name).join(", ")}`:""}</small>`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),clearTimeout(M.lvlT),M.lvlT=setTimeout(()=>e.classList.remove("show"),2600),tt(`Level up! You are level ${st.level}. You have a talent point to spend in the bag.${t.length?" New spell unlocked: "+t.map(n=>n.name).join(", ")+".":""}`,!0),jm(),wn.lvl=null}function Lo(i,e){let t=kn.find(n=>n.id===i);t?(t.t=Math.max(t.t,e),t.dur=Math.max(t.dur,e)):kn.push({id:i,t:e,dur:e}),aa(),Ph(!0),re.blv&&tt(`${Fn[i].name} for ${Math.round(e)} seconds.`)}function fM(i){let e=!1;for(let t of kn)t.t-=i,t.t<=0&&(e=!0);if(e){for(let t=kn.length-1;t>=0;t--)kn[t].t<=0&&((re.blv||re.audioCues)&&tt(`${Fn[kn[t].id].name} wore off.`),kn.splice(t,1));aa(),Ph(!0)}An.regen&&w.hp>0&&(w.hp=Math.min(w.maxHp,w.hp+An.regen*i)),w.mana=Math.min(w.maxMana,w.mana+(5+st.level*.2)*i),M.buffT=(M.buffT||0)-i,M.buffT<=0&&(M.buffT=.25,Ph())}function Ph(i){let e=be("buffs");e&&((i||e.childElementCount!==kn.length)&&(e.innerHTML=kn.map(t=>`<div class="buff" data-b="${t.id}" style="--c:${Fn[t.id].color}" role="img" aria-label="${Fn[t.id].name}"><span class="bring"></span><b>${Fn[t.id].short}</b><small></small></div>`).join("")),kn.forEach((t,n)=>{let s=e.children[n];s&&(s.style.setProperty("--p",(100*t.t/t.dur).toFixed(1)),s.querySelector("small").textContent=Math.ceil(t.t)+"s",s.setAttribute("aria-label",`${Fn[t.id].name}, ${Math.ceil(t.t)} seconds left`))}))}var oi={};function jm(){let i=be("spellbar");i&&(i.innerHTML=Jr.map(e=>{let t=st.level<e.level;return`<button class="spell${t?" locked":""}" data-spell="${e.id}" style="--c:${e.color}" ${t?"disabled":""} aria-label="${e.name}${t?`, unlocks at level ${e.level}`:`, ${e.mana} mana, key ${e.key}`}"><span class="sic sic-${e.id}" aria-hidden="true"></span><span class="scd" aria-hidden="true"></span><kbd aria-hidden="true">${t?"L"+e.level:e.key}</kbd></button>`}).join(""),i.querySelectorAll("[data-spell]").forEach(e=>e.addEventListener("pointerdown",t=>{t.preventDefault(),xe.init(),Ih(e.dataset.spell)})),i.querySelectorAll("[data-spell]").forEach(e=>e.addEventListener("click",t=>{t.detail===0&&Ih(e.dataset.spell)})))}function Qm(){let i=be("spellbar");if(!i)return;for(let n of Jr){let s=i.querySelector(`[data-spell="${n.id}"]`);if(!s||st.level<n.level)continue;let r=Math.max(0,oi[n.id]||0);s.style.setProperty("--cd",(100*r/n.cd).toFixed(1)),s.classList.toggle("nomana",w.mana<n.mana),s.classList.toggle("cooling",r>0)}let e=Math.round(w.mana),t=Math.round(w.maxMana);wn.mana!==e+"/"+t&&(wn.mana=e+"/"+t,be("manaFill").style.width=100*w.mana/w.maxMana+"%",be("manaTxt").textContent=`${e}`,be("manabar").setAttribute("aria-valuenow",e),be("manabar").setAttribute("aria-valuemax",t))}function pM(i){let e=[];for(let t of yn.cows)!t.dead&&Math.hypot(t.x-w.x,t.z-w.z)<i&&Math.abs(t.y-w.y)<4&&e.push(t);return e}function Ih(i){if(M.mode!=="play")return!1;let e=Jr.find(n=>n.id===i);if(!e)return!1;if(st.level<e.level)return lt(`${e.name} unlocks at level ${e.level}.`),!1;if((oi[i]||0)>0)return re.blv&&tt(`${e.name} is cooling down.`),!1;if(w.mana<e.mana)return lt("Not enough mana. It refills over time."),xe.tone("sine",300,200,.12,.15),!1;w.mana-=e.mana,oi[i]=e.cd,M.casts=(M.casts||0)+1,M.lastCast=i;let t=1+An.dmg/100;if(i==="mend")w.hp=Math.min(w.maxHp,w.hp+w.maxHp*.3),Lo("regen",8),xe.heal(),kt.emit(w.x,w.y+1,w.z,re.reduceMotion?14:40,[Be(10483455,2),Be(8257456,2),Be(16777215,1.5)],3,1,3.5,3,2),lt("Glow Milk Mend. Moonlight, but make it medicinal.");else if(i==="courage")Lo("courage",12),xe.tone("triangle",880,null,.6,.2),xe.tone("triangle",1320,null,.5,.12,null,.12),kt.emit(w.x,w.y+1.5,w.z,30,[Be(16765501,2)],4,.8,4,2),lt("Cowbell Courage! More cowbell, more damage.");else if(i==="moonbeam"){let s=new de(new Vn(.8,1.2,40),new Ye({color:Be(13220095,2),transparent:!0,side:It,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(w.x,w.y+.15,w.z),j.group.add(s),j.fx.push({mesh:s,t:0,dur:.6,grow:7.5});for(let a=0;a<10;a++){let o=a/10*6.28;kt.emit(w.x+Math.cos(o)*7.5*.6,w.y+.5,w.z+Math.sin(o)*7.5*.6,6,[Be(13220095,2),Be(16777215,2)],3,.7,4,6,-2)}let r=0;for(let a of pM(7.5))kt.emit(a.x,a.y+3,a.z,12,[Be(16777215,2),Be(13220095,2)],2,.6,5,-8,-20),Td(a,3.2*t,(a.x-w.x)/4,(a.z-w.z)/4,9),a.dead&&a.kind&&r++;M.boss&&Math.hypot(M.boss.x-w.x,M.boss.z-w.z)<7.5+M.boss.def.scale&&Ed(4*t,0,0),xe.stomp(),xe.whoosh(),Hi(.4),lt("Moonbeam Stampede! The ghost herd sends its regards.")}else if(i==="thunder"){let n=[],s={x:w.x,y:w.y+1.5,z:w.z},r=yn.cows.filter(a=>!a.dead&&Math.hypot(a.x-w.x,a.z-w.z)<14);for(let a=0;a<5;a++){let o=null,c=9;for(let l of r){if(n.includes(l))continue;let h=Math.hypot(l.x-s.x,l.z-s.z);h<(a===0?14:9)&&(!o||h<c)&&(o=l,c=h)}if(!o)break;n.push(o),Lm(s,{x:o.x,y:o.y+1.2,z:o.z}),s={x:o.x,y:o.y+1.2,z:o.z}}for(let a of n)Td(a,4*t,0,0,3);M.boss&&Math.hypot(M.boss.x-w.x,M.boss.z-w.z)<16&&(Lm({x:w.x,y:w.y+1.5,z:w.z},{x:M.boss.x,y:M.boss.y+3,z:M.boss.z}),Ed(5*t,0,0)),xe.zap(),mM(),lt(n.length||M.boss?"Udder Thunder! Shockingly rude.":"Udder Thunder! Nobody was close enough. Very dramatic, though.")}return jt(30),Qm(),re.blv&&tt(e.name),!0}function Lm(i,e){let t=[];for(let r=0;r<=8;r++){let a=r/8,o=r&&r<8?.5:0;t.push(new L(i.x+(e.x-i.x)*a+(Math.random()-.5)*o,i.y+(e.y-i.y)*a+(Math.random()-.5)*o,i.z+(e.z-i.z)*a+(Math.random()-.5)*o))}let s=new Na(new gt().setFromPoints(t),new Rr({color:Be(10479871,3),transparent:!0}));j.group.add(s),j.fx.push({mesh:s,t:0,dur:.35}),kt.emit(e.x,e.y,e.z,10,[Be(10479871,2),Be(16777215,2)],4,.4,3,2)}function mM(){if(re.reduceMotion)return;let i=be("flash");i.classList.remove("zap"),i.offsetWidth,i.classList.add("zap")}function gM(i){for(let e of j.fx){e.t+=i;let t=e.t/e.dur;if(e.grow){let n=1+t*e.grow;e.mesh.scale.set(n,n,1)}e.mesh.material.opacity=Math.max(0,1-t),t>=1&&(j.group.remove(e.mesh),e.done=!0)}j.fx=j.fx.filter(e=>!e.done);for(let e in oi)oi[e]=Math.max(0,oi[e]-i)}function Xs(i,e){let t=Qt(i,e,50).y,n=new St;n.position.set(i,t,e);let s=new de(new bt(.7,.9,.4,8),new pt({color:3813472,roughness:.6,emissive:1182256}));s.position.y=.2,n.add(s);let r=new de(new bt(.18,.25,1.4,8),new pt({color:5917328,roughness:.5,emissive:1708096}));r.position.y=1.1,n.add(r);let a=new Ye({color:Be(8257456,1.8)}),o=new de(new Ps(.3,1),a);o.position.y=2.1,n.add(o);let c=new de(new Vn(1,1.15,32),new Ye({color:Be(8257456,1.2),transparent:!0,opacity:.8,side:It,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.05,n.add(c),j.group.add(n);let l=_d[(j.shrines.length+M.level)%_d.length];a.color.set(Fn[l].color).multiplyScalar(1.8),c.material.color.set(Fn[l].color),j.shrines.push({x:i,y:t,z:e,orb:o,ring:c,orbM:a,cd:0,buff:l})}function xM(i){for(let e of j.shrines){e.cd=Math.max(0,e.cd-i);let t=e.cd<=0;e.orb.position.y=2.1+(re.reduceMotion?0:Math.sin(M.t*2+e.x)*.15),e.orb.rotation.y+=i,e.orb.visible=t,e.ring.material.opacity=t?.8:.15,t&&Math.hypot(w.x-e.x,w.z-e.z)<1.4&&Math.abs(w.y-e.y)<1.5&&(e.cd=45,Lo(e.buff,30),xe.chime(3),kt.emit(e.x,e.y+2,e.z,40,[new me(Fn[e.buff].color).multiplyScalar(2),Be(16777215,2)],5,1,4,3),lt(`Shrine blessing: ${Fn[e.buff].name} for 30 seconds.`),jt([30,30,60]),M.shrinesUsed=(M.shrinesUsed||0)+1)}}function Md(i,e,t,n){let s=new de(new Zt(1,.18,6,48),new Ye({color:Be(16735940,2),transparent:!0}));return s.rotation.x=Math.PI/2,s.position.set(i,e+.3,t),j.group.add(s),{type:"ring",x:i,y:e,z:t,r:1,max:n,speed:9,mesh:s,hit:!1}}function _M(i,e){let t=Qt(i,e,50),n=t.y===-1/0?w.y:t.y,s=new de(new Vn(1.9,2.2,32),new Ye({color:Be(16727403,2),transparent:!0,side:It,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(i,n+.08,e),j.group.add(s),{type:"bomb",x:i,y:n,z:e,t:1.4,mesh:s}}function vM(i){for(let e of j.hazards){if(e.type==="ring"){e.r+=e.speed*i,e.mesh.scale.set(e.r,e.r,1),e.mesh.material.opacity=1-e.r/e.max;let t=Math.hypot(w.x-e.x,w.z-e.z);!e.hit&&Math.abs(t-e.r)<.8&&w.y-e.y<.9&&(e.hit=!0,ra(18*Yn().dmg,e.x,e.z,10)),e.r>=e.max&&(e.done=!0)}else if(e.type==="bomb"){e.t-=i,e.mesh.material.opacity=.5+.5*Math.sin(e.t*20);let t=1+(1.4-e.t)*.05;e.mesh.scale.set(t,t,t),e.t<=0&&(e.done=!0,kt.emit(e.x,e.y+.5,e.z,re.reduceMotion?10:30,[new me(16727512),new me(16765501),new me(16777215)],8,.8,4,4),xe.poof(Tn(e.x,e.y,e.z)),Math.hypot(w.x-e.x,w.z-e.z)<2.2&&ra(14*Yn().dmg,e.x,e.z,8))}e.done&&j.group.remove(e.mesh)}j.hazards=j.hazards.filter(e=>!e.done)}var Io=new L;function Tn(i,e,t){return Io.set(i,e,t).applyMatrix4(En.matrixWorldInverse),{x:Io.x,y:Io.y,z:Io.z}}function _s(i,e){let t=Tn(i,w.y,e),n=t.x<-1.5?"left":t.x>1.5?"right":"",s=t.z<0?"ahead":"behind";return n?`${s} ${n}`:s}var Dd=(i,e)=>[new me(i).multiplyScalar(1.5),new me(e).multiplyScalar(2),new me(16777215).multiplyScalar(1.5)];function Nd(){return 1+Math.floor(M.combo/5)*.5}function e0(){M.combo++,M.comboT=3,M.bestCombo=Math.max(M.bestCombo,M.combo);let i=be("combo");i.textContent=`x${M.combo} COMBO`,i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"),i.hidden=M.combo<2,M.combo%10===0&&(lt(ea(ks.combo)),$s(5,"combo"),Ys(),xe.glitter())}function Hi(i){!re.reduceMotion&&re.shake&&(M.shake=Math.max(M.shake,i))}function Dm(){if(w.atkCd>0||M.mode!=="play")return;let i=qr[re.weapon];w.chain=w.chainT>0?w.chain+1:1,w.chain>i.chain&&(w.chain=1);let e=w.chain===i.chain,t=e&&i.spinFinisher,n=null,s=1e9,r=i.range+(re.blv?3:1.5),a=(l,h,u)=>{let d=l-w.x,f=h-w.z,m=Math.hypot(d,f)-u;if(m>r)return;let _=Math.abs(ta(Math.atan2(d,f),w.yaw));if(!re.blv&&_>1.4&&m>1.2)return;let g=m+_*1.5;g<s&&(s=g,n={x:l,z:h})};for(let l of yn.cows)l.dead||a(l.x,l.z,.6*l.s);M.boss&&a(M.boss.x,M.boss.z,M.boss.def.scale*.9),n&&(w.yaw=Math.atan2(n.x-w.x,n.z-w.z)),ai.attack(t?"spin":w.chain%2),w.atkCd=i.cd*(e?1.4:1),w.chainT=.65,xe.tone(re.weapon==="staff"?"triangle":"sawtooth",re.weapon==="spear"?500:800,200,.12,.08),xe.noiseHit(.1,3e3,.12);let o=i.dmg*(e?i.finisher:1)*(1+An.dmg/100),c=0;for(let l of yn.cows){if(l.dead)continue;let h=l.x-w.x,u=l.z-w.z,d=Math.hypot(h,u);d>i.range+.6*l.s||Math.abs(l.y-w.y)>2.2||!t&&Math.abs(ta(Math.atan2(h,u),w.yaw))>i.arc/2+(d<1.2?1:0)||(Td(l,o,h/(d||1),u/(d||1),i.knock*(e?1.6:1)),c++)}if(M.boss){let l=M.boss,h=l.x-w.x,u=l.z-w.z;Math.hypot(h,u)<i.range+l.def.scale*.95&&(t||Math.abs(ta(Math.atan2(h,u),w.yaw))<i.arc/2+.6)&&Ed(o,h,u)&&c++}c&&(re.reduceMotion||(M.hitStop=e?.07:.035),Hi(e?.35:.15),jt(e?35:15))}function Td(i,e,t,n,s){i.sleepy&&(i.sleepy=!1),i.state==="stunned"&&(e*=1.5),i.hp-=e,i.flash=.12,i.squash=.35;let r=i.kind==="tank"?.45:1;i.kx+=t*s*r,i.kz+=n*s*r,i.vy=3,(i.state==="windup"||i.state==="charge"||i.state==="butt")&&(i.state="stunned"),i.state!=="stunned"&&(i.state="stunned"),i.t=.4,i.angry=1,xe.tone("square",300+Math.random()*120,140,.1,.18,Tn(i.x,i.y+1,i.z)),xe.squeak(),kt.emit(i.x,i.y+1.2*i.s,i.z,re.reduceMotion?4:10,Dd(i.body,i.spot),5,.5,2.5),e0(),M.score+=Math.round(10*Nd()),i.hp<=0&&Do(i,t,n)}function Do(i,e,t,n=!1,s="bonk"){if(i.dead)return;i.dead=!0,M.kills++;let r={grunt:100,charger:150,tank:300,calf:50}[i.kind]||100;M.score+=Math.round(r*Nd()),kt.emit(i.x,i.y+1*i.s,i.z,re.reduceMotion?18:55,Dd(i.body,i.spot),9,1.2,4.5,3),No.emit(i.x,i.y+.8,i.z,re.reduceMotion?4:10,[new me(7035546),new me(4868730)],3,1.2,6,1),n||(xe.moo(.8+Math.random()*.6+(i.kind==="calf"?.6:0)-(i.kind==="tank"?.25:0),Tn(i.x,i.y+1,i.z),.45),xe.poof(Tn(i.x,i.y,i.z)));let a={grunt:2,charger:3,tank:6,calf:1}[i.kind]||2;if(wt("gem",i.x,i.y-.6,i.z,{value:a,magnet:.35}),!n||s==="herd"){let o=um(i.kind,{diff:re.difficulty,area:M.stampede?1+Math.min(4,Math.floor(M.wave/3)):M.level,gf:An.gf,forceUltra:Km(),pity:(M.dry||0)>=7});M.dry=o.some(c=>c.type==="gear")?0:(M.dry||0)+1,Ym(o,i.x,i.y,i.z)}(!n||s==="herd"||s==="spell")&&Ch((gd[i.kind]||10)*({normal:1,hard:1.3,nightmare:1.7}[re.difficulty]||1)),s==="yeet"?(lt(ea(ks.yeet)),M.score+=200):s==="herd"?lt(ea(ks.herd)):Math.random()<.28&&lt(ea(ks.kill),"Cow"),jt(30),yM()}function yM(){oa();let i=Js().length;re.blv&&M.level>0&&!M.stampede&&tt(i?`${i} cows left`:"Herd cleared!"),!(M.stampede||M.level===0)&&i===0&&!j.bossTrigger&&Id()}function ra(i,e,t,n){if(M.invuln||w.iframes>0||w.dashT>0||M.mode!=="play")return;re.blv&&(i*=.6),i*=1-yh(An.armor),w.hp-=i,w.iframes=.9,w.hurtBlink=!0;let s=w.x-e,r=w.z-t,a=Math.hypot(s,r)||1;w.vx+=s/a*n,w.vz+=r/a*n,w.vy=Math.max(w.vy,5),w.grounded=!1,M.combo=0,be("combo").hidden=!0,xe.bump(),Hi(.5),jt([80,30,120]),be("hurt").classList.remove("flash"),be("hurt").offsetWidth,be("hurt").classList.add("flash"),Math.random()<.3&&lt(ea(ks.hurt)),re.blv&&tt(`Hit! Health ${Math.max(0,Math.round(w.hp))}`,!0),w.hp<=0&&(w.hp=0,setTimeout(()=>Nh(!1),600),M.mode="dying")}function Ys(){kt.emit(w.x,w.y+1.2,w.z,re.reduceMotion?12:36,[Be(16739312,2),Be(7075583,2),Be(16765501,2),Be(16777215,1.5)],6,.9,3.5,3)}function bM(i){let e=Yn(),t=re.blv?.8:1,n=yn.cows,s=null,r=1e9;for(let a of n){if(a.dead)continue;a.spawnT=Math.max(0,a.spawnT-i),a.flash-=i,a.squash*=Math.exp(-i*10),a.t-=i,a.cd-=i,a.angry=Math.max(0,a.angry-i*.1);let o=w.x-a.x,c=w.z-a.z,l=Math.hypot(o,c),h=Math.atan2(o,c);l<r&&(r=l,s=a);let u=0,d=a.yaw,f=a.spd*t;if(a.sleepy)a.vx=a.vz=0,Math.random()<.01&&kt.emit(a.x,a.y+2,a.z,1,[new me(11193599)],.3,1.2,3,.6,0);else switch(a.state){case"wander":a.t<=0&&(a.t=2+Math.random()*3,a.wtx=a.homeX+(Math.random()-.5)*8,a.wtz=a.homeZ+(Math.random()-.5)*8);{let E=a.wtx-a.x,P=a.wtz-a.z;Math.hypot(E,P)>.5&&(d=Math.atan2(E,P),u=f*.35)}l<e.aggro&&Math.abs(w.y-a.y)<4&&(a.state="chase",a.angry=1,a.cd=.6+Math.random()*1.2,Math.random()<.15&&lt(ea(ks.aggro),"Cow"),(re.blv||re.audioCues)&&xe.tone("sawtooth",160,90,.25,.12,Tn(a.x,a.y+1,a.z)));break;case"chase":d=h,u=l>1.6?f:0,a.angry=1,l>e.aggro*2.2&&(a.state="wander"),a.cd<=0&&((a.kind==="charger"||a.kind==="tank"||a.kind==="grunt"&&Math.random()<.3)&&l>2.5&&l<9?(a.state="windup",a.t=(a.kind==="tank"?1:.75)*(.6+.4*e.cd)*(re.blv?1.5:1),(re.blv||re.audioCues)&&(xe.tone("sawtooth",110,70,.5,.25,Tn(a.x,a.y+1,a.z)),xe.noiseHit(.3,600,.2,Tn(a.x,a.y,a.z))),re.blv&&tt("Charge, "+_s(a.x,a.z),!0)):l<2.2?(a.state="butt",a.t=.45*(re.blv?1.6:1)):a.cd=.5);break;case"windup":d=h,u=0,Math.random()<.3&&No.emit(a.x,a.y+.1,a.z,1,[new me(9075370)],1.5,.6,3,.5),a.t<=0&&(a.state="charge",a.t=.85,a.cx=Math.sin(a.yaw),a.cz=Math.cos(a.yaw),xe.moo(.9,Tn(a.x,a.y+1,a.z),.35));break;case"charge":d=Math.atan2(a.cx,a.cz),u=f*4.2,l<1.1*a.s+.5&&(ra((a.kind==="tank"?24:16)*e.dmg,a.x,a.z,12),a.state="stunned",a.t=.8),a.t<=0&&(a.state="stunned",a.t=.7,a.cd=(2+Math.random()*1.5)*e.cd);break;case"butt":d=h,u=0,a.t<=0&&(l<2.3&&Math.abs(w.y-a.y)<1.5&&ra((a.kind==="tank"?16:9)*e.dmg,a.x,a.z,7),a.state="chase",a.cd=(1.4+Math.random())*e.cd);break;case"stunned":u=0,a.t<=0&&(a.state="chase",a.cd=Math.max(a.cd,.6));break}let m=a.state==="charge"?0:7;a.yaw+=ta(d,a.yaw)*Math.min(1,m*i);let _=Math.sin(a.yaw)*u,g=Math.cos(a.yaw)*u;a.vx+=(_-a.vx)*Math.min(1,i*8),a.vz+=(g-a.vz)*Math.min(1,i*8);let p=a.x+a.vx*i,b=a.z+a.vz*i,T=Qt(p+Math.sin(a.yaw)*.6,b+Math.cos(a.yaw)*.6,a.y+.5);(T.y===-1/0||T.y<a.y-1.2)&&(p=a.x,b=a.z,a.vx=a.vz=0,a.state==="charge"&&(a.state="stunned",a.t=.7),a.state==="wander"&&(a.t=0)),p+=a.kx*i,b+=a.kz*i;let y=Math.exp(-i*5);a.kx*=y,a.kz*=y;for(let E of j.decor.colliders){let P=p-E.x,v=b-E.z,R=Math.hypot(P,v),I=E.r+.6*a.s;R<I&&R>0&&(p=E.x+P/R*I,b=E.z+v/R*I)}a.x=p,a.z=b;let A=Qt(a.x,a.z,a.y+.5);if(a.vy-=30*i,a.y+=a.vy*i,A.y>-1/0&&a.y<=A.y&&(a.y=A.y,a.vy=0,A.p&&A.p.bounce&&(a.vy=12)),a.y<j.minY+10){Do(a,0,0,!1,"yeet");continue}a.walk+=i*(1+Math.hypot(a.vx,a.vz)*1.8),j.corral&&(a.state==="stunned"||Math.hypot(a.kx,a.kz)>1.5)&&Math.hypot(a.x-j.corral.x,a.z-j.corral.z)<j.corral.r&&Math.abs(a.y-Qt(j.corral.x,j.corral.z,50).y)<1.5&&a.state!=="charge"&&(M.herded++,$s(2,"herd"),M.score+=150,Do(a,0,0,!1,"herd"))}for(let a=0;a<n.length;a++){let o=n[a];if(o.dead)continue;for(let d=a+1;d<n.length;d++){let f=n[d];if(f.dead)continue;let m=f.x-o.x,_=f.z-o.z,g=m*m+_*_,p=.9*(o.s+f.s);if(g<p*p&&g>1e-4){let b=Math.sqrt(g),T=(p-b)/b*.5;o.x-=m*T,o.z-=_*T,f.x+=m*T,f.z+=_*T}}let c=w.x-o.x,l=w.z-o.z,h=Math.hypot(c,l),u=.9*o.s+.35;if(h<u&&h>.001&&Math.abs(w.y-o.y)<1.4){let d=(u-h)/h;w.x+=c*d*.7,w.z+=l*d*.7,o.x-=c*d*.3,o.z-=l*d*.3}}re.blv&&s&&r<25&&(M.mooT=(M.mooT||0)-i,M.mooT<=0&&(M.mooT=Bm(r/8,.7,2.2),xe.moo(s.kind==="calf"?1.5:s.kind==="tank"?.7:1.05,Tn(s.x,s.y+1,s.z),.35))),M.nearestCow=s,M.nearestCowD=r}var vn=new Set,Ft={sx:0,sy:0,jumpQ:!1,atkQ:!1,dashQ:!1,atkHeld:!1};window.addEventListener("keydown",i=>{if(M.mode!=="play"&&M.mode!=="paused")return;let e=i.key.toLowerCase();if(e==="escape"||e==="p"){i.preventDefault(),Uh();return}if(M.mode!=="play")return;if([" ","arrowup","arrowdown","arrowleft","arrowright"].includes(e)&&i.preventDefault(),i.repeat){vn.add(e);return}vn.add(e),e===" "&&(Ft.jumpQ=!0),(e==="j"||e==="enter")&&(Ft.atkQ=!0),(e==="k"||e==="shift")&&(Ft.dashQ=!0),e==="1"&&Th("blade"),e==="2"&&Th("spear"),e==="3"&&Th("staff"),e==="r"&&i0();let t=Jr.find(n=>n.key===e);t&&Ih(t.id),e==="f"&&Zm(M.nearGear),e==="h"&&Jm(),(e==="i"||e==="b")&&Oo()});window.addEventListener("keyup",i=>vn.delete(i.key.toLowerCase()));window.addEventListener("blur",()=>vn.clear());function Th(i){re.weapon=i,Rh(),ai.setWeapon(i,On.skin),be("btnSwap").setAttribute("aria-label","Switch weapon, current "+qr[i].name),lt(qr[i].name+" equipped."),re.blv&&tt(qr[i].name)}var ki={id:null,ox:0,oy:0},zn={id:null,x:0,moved:0},Ah=be("stick"),t0=be("knob");na.addEventListener("pointerdown",i=>{if(M.mode!=="play")return;xe.init();let e=i.pointerType==="touch"||i.pointerType==="pen";e&&document.body.classList.add("touch"),e&&i.clientX<window.innerWidth*.5&&ki.id===null?(ki.id=i.pointerId,ki.ox=i.clientX,ki.oy=i.clientY,Ah.style.left=i.clientX+"px",Ah.style.top=i.clientY+"px",Ah.classList.add("on")):zn.id===null&&(zn.id=i.pointerId,zn.x=i.clientX,zn.moved=0,zn.touch=e);try{na.setPointerCapture(i.pointerId)}catch{}});na.addEventListener("pointermove",i=>{if(i.pointerId===ki.id){let e=i.clientX-ki.ox,t=i.clientY-ki.oy,n=Math.hypot(e,t),s=55;n>s&&(e*=s/n,t*=s/n),Ft.sx=e/s,Ft.sy=-t/s,t0.style.transform=`translate(${e}px, ${t}px)`}else if(i.pointerId===zn.id){let e=i.clientX-zn.x;zn.x=i.clientX,zn.moved+=Math.abs(e),Bn-=e*.008}});var n0=i=>{i.pointerId===ki.id&&(ki.id=null,Ft.sx=Ft.sy=0,t0.style.transform="",Ah.classList.remove("on")),i.pointerId===zn.id&&(!zn.touch&&zn.moved<6&&i.type==="pointerup"&&(Ft.atkQ=!0),zn.id=null)};na.addEventListener("pointerup",n0);na.addEventListener("pointercancel",n0);function Fo(i,e){let t=be(i);t.addEventListener("pointerdown",s=>{s.preventDefault(),xe.init(),e(),t.classList.add("down")});let n=()=>t.classList.remove("down");t.addEventListener("pointerup",n),t.addEventListener("pointerleave",n),t.addEventListener("click",s=>{s.detail===0&&e()})}Fo("btnAtk",()=>{Ft.atkQ=!0,Ft.atkHeld=!0});be("btnAtk").addEventListener("pointerup",()=>{Ft.atkHeld=!1});Fo("btnJump",()=>{Ft.jumpQ=!0});Fo("btnDash",()=>{Ft.dashQ=!0});Fo("btnSwap",()=>{let i=["blade","spear","staff"];Th(i[(i.indexOf(re.weapon)+1)%3])});Fo("btnScan",()=>i0());be("btnPickup").addEventListener("click",()=>{xe.init(),Zm(M.nearGear)});be("btnPotion").addEventListener("click",()=>{xe.init(),Jm()});be("btnBag").addEventListener("click",()=>{xe.init(),Oo()});function i0(){let i=Js().length,e=`${Math.round(w.hp)} health. `;if(M.boss&&(e+=`${M.boss.def.short} is ${_s(M.boss.x,M.boss.z)}, ${Math.round(Math.hypot(M.boss.x-w.x,M.boss.z-w.z))} meters. `),i){let n=M.nearestCow;e+=`${i} cows. Nearest ${_s(n.x,n.z)}, ${Math.round(M.nearestCowD)} meters. `}else e+="No cows nearby. ";let t=s0();t&&(e+=`A ${t.type==="gear"?pn[Gt[t.item.rarity]].name+" "+Un[t.item.slot]:t.type==="potion"?"potion":t.type==="bit"?"crafting bit":t.type==="gem"?"glitter gem":t.type==="cache"?"sparkle cache":t.type==="bottle"?"glow milk bottle":"star"} ${_s(t.x,t.z)}. `),M.portalOpen?e+=`Portal ${_s(j.portalPos.x,j.portalPos.z)}, ${Math.round(Math.hypot(j.portalPos.x-w.x,j.portalPos.z-w.z))} meters.`:j.portalPos&&M.level===0&&(e+=`The rainbow's foot is ${_s(j.portalPos.x,j.portalPos.z)}.`),tt(e,!0),re.blv||lt(e)}function s0(){let i=null,e=1e9;for(let t of j.items){if(t.taken)continue;let n=Math.hypot(t.x-w.x,t.z-w.z);n<e&&(e=n,i=t)}return e<30?i:null}function MM(i){let e=Yn(),t=Ft.sx,n=Ft.sy;(vn.has("a")||vn.has("arrowleft"))&&(t-=1),(vn.has("d")||vn.has("arrowright"))&&(t+=1),(vn.has("w")||vn.has("arrowup"))&&(n+=1),(vn.has("s")||vn.has("arrowdown"))&&(n-=1),vn.has("q")&&(Bn+=i*2.2),vn.has("e")&&(Bn-=i*2.2);let s=Math.hypot(t,n);s>1&&(t/=s,n/=s);let r=-Math.sin(Bn),a=-Math.cos(Bn),o=Math.cos(Bn),c=-Math.sin(Bn),l=r*n+o*t,h=a*n+c*t,u=7.2*(1+An.spd/100);if(w.iframes-=i,w.iframes<=0&&(w.hurtBlink=!1),w.atkCd-=i,w.chainT-=i,w.dashCd-=i,Ft.dashQ&&w.dashCd<=0){Ft.dashQ=!1;let T=s>.1?l:Math.sin(w.yaw),y=s>.1?h:Math.cos(w.yaw),A=Math.hypot(T,y)||1;w.dashT=.2,w.dashCd=.75,w.dvx=T/A*22,w.dvz=y/A*22,xe.noiseHit(.2,1500,.18),No.emit(w.x,w.y+.3,w.z,5,[new me(8030924)],2,.5,3,.5)}if(Ft.dashQ=!1,re.blv&&w.grounded&&s>.1){let T=Qt(w.x+l*.9,w.z+h*.9,w.y+.5);(T.y===-1/0||T.y<w.y-1.5)&&(l=h=0,(!M.edgeT||M.t-M.edgeT>.8)&&(M.edgeT=M.t,xe.tone("sine",180,140,.15,.2),jt(25),tt("Edge. Jump to cross.")))}if(w.dashT>0)w.dashT-=i,w.vx=w.dvx,w.vz=w.dvz;else{let T=w.grounded?14:6;w.vx+=(l*u-w.vx)*Math.min(1,T*i),w.vz+=(h*u-w.vz)*Math.min(1,T*i)}if(s>.15&&w.atkCd<.05&&(w.yaw+=ta(Math.atan2(l,h),w.yaw)*Math.min(1,i*14)),Ft.jumpQ&&(Ft.jumpQ=!1,w.grounded||w.coyote>0?(w.vy=11.5,w.grounded=!1,w.jumps=1,w.coyote=0,xe.jump()):w.jumps<2&&(w.vy=10,w.jumps=2,xe.tone("sine",500,1e3,.12,.18),kt.emit(w.x,w.y+.2,w.z,8,[Be(Os[On.skin]||4060671,2)],3,.4,3,0,0))),Ft.atkQ?(Ft.atkQ=!1,Dm()):Ft.atkHeld&&w.atkCd<=0&&Dm(),re.blv&&!w.grounded&&w.vy<4&&Qt(w.x,w.z,w.y).y===-1/0){let y=null,A=9;for(let E of j.platforms){if(E.type==="bridge"||E.y>w.y+1)continue;let P=Math.hypot(E.x-w.x,E.z-w.z)-E.r;P<A&&(A=P,y=E)}if(y){let E=y.x-w.x,P=y.z-w.z,v=Math.hypot(E,P)||1;w.vx+=E/v*18*i,w.vz+=P/v*18*i}}w.vy-=30*i,w.vy<-40&&(w.vy=-40);let d=w.x+w.vx*i,f=w.z+w.vz*i;for(let T of j.decor.colliders){let y=d-T.x,A=f-T.z,E=Math.hypot(y,A),P=T.r+.4;E<P&&E>0&&w.y<6&&(d=T.x+y/E*P,f=T.z+A/E*P)}if(j.arenaR){let T=Math.hypot(d,f);T>j.arenaR+3&&M.boss&&(d*=(j.arenaR+3)/T,f*=(j.arenaR+3)/T)}w.x=d,w.z=f;let m=w.y+w.vy*i,_=Qt(w.x,w.z,Math.max(w.y,m)),g=w.grounded;_.y>-1/0&&m<=_.y&&w.vy<=0?(w.y=_.y,w.vy=0,w.grounded=!0,w.jumps=0,w.plat=_.p,!g&&!re.reduceMotion&&Hi(.05),_.p&&_.p.bounce?(w.vy=22,w.grounded=!1,w.jumps=1,xe.boing(),jt(30),kt.emit(w.x,w.y,w.z,14,[Be(16751317,2)],5,.6,3,1)):_.p&&_.p.type==="disc"&&(w.safe={x:w.x,y:w.y,z:w.z})):(g&&(w.coyote=.12),w.grounded=!1,w.y=m),w.coyote=(w.coyote||0)-i,w.y<j.minY&&(Object.assign(w,{x:w.safe.x,y:w.safe.y+.5,z:w.safe.z,vx:0,vy:0,vz:0}),w.hp-=re.blv?4:10,w.iframes=1,lt("The void spat you back out. It has standards."),xe.whoosh(),re.blv&&tt("You fell. Back on solid ground.",!0),jt(150),w.hp<=0&&(w.hp=0,M.mode="dying",setTimeout(()=>Nh(!1),400))),ai.update(i,M.t,w,re.reduceMotion);let p=Qt(w.x,w.z,w.y+.1);if(ai.shadow.visible=p.y>-1/0,p.y>-1/0){ai.shadow.position.set(w.x,p.y+.04,w.z);let T=Bm(1-(w.y-p.y)*.08,.4,1);ai.shadow.scale.set(T,T,T)}let b=On.trail;if(b&&b!=="none"&&Math.hypot(w.vx,w.vz)>2&&Math.random()<(re.reduceMotion?.25:.8)){let T=b==="rainbow"?[Be(new me().setHSL(M.t*.5%1,1,.6),2)]:b==="embers"?[Be(16742973,2),Be(16765501,2)]:b==="bubbles"?[Be(7075583,1.4)]:[Be(16777215,2),Be(16765501,2)];kt.emit(w.x,w.y+(b==="bubbles"?.8:.3),w.z,1,T,b==="bubbles"?.6:1.2,b==="bubbles"?1.4:.6,b==="bubbles"?5:2.5,b==="bubbles"?1:.5)}}function SM(i){let e=M.pingT=(M.pingT||0)-i,t=null,n=1e9;for(let s of j.items){if(s.taken)continue;s.t+=i;let r=w.x-s.x,a=w.z-s.z,o=w.y+1-s.y,c=Math.hypot(r,a,o);if(s.type==="gem"||s.type==="potion"||s.type==="bit"){if(s.magnet>0)s.magnet-=i;else if(c<(s.type==="gem"?9:5)){let h=Math.min(1,i*7);s.x+=r*h,s.y+=o*h,s.z+=a*h}}if(s.mesh.position.set(s.x,s.y+(re.reduceMotion?0:Math.sin(s.t*2.5)*.15),s.z),s.mesh.userData.sprite){let h=s.mesh.userData.sparkle,u=re.reduceMotion?.8:.5+.5*Math.sin(s.t*5+s.x);h.material.opacity=u,h.scale.setScalar(.18+.28*u),h.material.rotation=s.t*1.5}else s.mesh.rotation.y=s.t*2;if(s.type==="gear"){if(s.item.rarity==="ultra"){let u=(M.t*.35+s.x*.05)%1;s.mesh.userData.beam.material.color.setHSL(u,1,.55).multiplyScalar(1.2),s.mesh.userData.ring&&s.mesh.userData.ring.material.color.setHSL((u+.5)%1,1,.6),!re.reduceMotion&&Math.random()<.25&&kt.emit(s.x,s.y+Math.random()*4,s.z,1,[new me().setHSL(Math.random(),1,.6).multiplyScalar(2)],1,.8,3,1,0)}s.mesh.userData.beam&&!re.reduceMotion&&(s.mesh.userData.beam.material.opacity=.45+.12*Math.sin(s.t*3));let h=Math.hypot(r,a);h<2.6&&Math.abs(o)<2.5&&h<n&&(n=h,t=s);continue}c<(s.type==="gem"?1.1:1.4)&&wM(s)}if((re.blv||re.audioCues)&&e<=0){M.pingT=2.4;let s=s0();s&&re.blv&&xe.ping(Tn(s.x,s.y,s.z),s.type==="cache"?1760:s.type==="star"?1320:990),M.portalOpen&&j.portalPos&&xe.tone("triangle",660,990,.3,.2,Tn(j.portalPos.x,j.portalPos.y+1.5,j.portalPos.z))}t!==M.nearGear&&(M.nearGear=t,Ld(),t&&re.blv&&tt(`${pn[Gt[t.item.rarity]].name} ${Un[t.item.slot]} here. Tap Pick up or press F.`))}function wM(i){i.taken=!0,j.group.remove(i.mesh),i.type==="bottle"?(M.bottles++,w.hp=Math.min(w.maxHp,w.hp+25),M.score+=50,xe.chime(0),lt("Glow Milk. Tastes like moonlight and poor decisions. +25 health."),jt([20,20,20])):i.type==="star"?(M.stars++,M.score+=250,$s(5,"star"),xe.chime(1),Ys(),jt([20,20,40]),re.blv&&tt("Star!")):i.type==="cache"?(M.caches++,M.score+=500,$s(25,"cache"),xe.glitter(),xe.chime(2),Ys(),Ys(),lt("Hidden sparkle cache! Somebody was saving this for a rainy day. It is raining now."),jt([30,30,30,30,60])):i.type==="potion"?(Si.addPotion(i.id),xe.chime(0),lt(`${Bi[i.id].name} added. Tap the potion button or press H to drink.`),Uo(),jt(15)):i.type==="bit"?(Si.addBit(i.id,i.n),xe.tone("triangle",1200,1600,.1,.12),Math.random()<.35&&lt(`${Gs[i.id].name} x${i.n}. ${Gs[i.id].desc}`)):($s(i.value||1,"gem"),xe.glitter(),kt.emit(w.x,w.y+1.2,w.z,re.reduceMotion?6:16,[Be(16739312,2),Be(7075583,2),Be(16777215,1.6)],4,.6,2.5,2),jt(10))}function Nm(i){bi.lerp(Io.set(w.x,w.y+1.2,w.z),Math.min(1,i*8));let e=M.boss?1+(M.boss.def.scale-1.5)*.25:1;M.camK=(M.camK||1)+(e-(M.camK||1))*Math.min(1,i*2);let t=Vb*M.camK*(window.innerWidth<window.innerHeight?1.08:1);En.position.set(bi.x+Math.sin(Bn)*t,bi.y+Wb*M.camK,bi.z+Math.cos(Bn)*t),M.shake>0&&(En.position.x+=(Math.random()-.5)*M.shake,En.position.y+=(Math.random()-.5)*M.shake,M.shake=Math.max(0,M.shake-i*2.5)),En.lookAt(bi.x,bi.y+.6,bi.z),En.updateMatrixWorld(),xe.ctx&&xe.ctx.listener}function EM(i){if(Js().length>0||M.boss||(M.waveT-=i,M.waveT>0))return;M.wave++,M.waveT=3;let e=M.wave,t=Yn(),n=Math.min(40,Math.round((3+e*2)*t.count));for(let s=0;s<n;s++){let r=Math.random()*6.28,a=10+Math.random()*9,o=e>=3&&s%6===0?"tank":e>=2&&s%3===0?"charger":"grunt",c=sa(Math.cos(r)*a,Math.sin(r)*a,o);c&&(c.state="chase",c.spd*=1+e*.03)}if(e%5===0&&(j.bossTrigger={x:0,z:-10,r:0},$m("sirloin"),M.boss.hp=M.boss.maxHp=Math.round(M.boss.maxHp*(1+e/10))),e>1){let s=Math.random()*6.28;wt("bottle",Math.cos(s)*8,0,Math.sin(s)*8)}lt(`Wave ${e}. ${n} cows. Zero chill.`),re.blv&&tt(`Wave ${e}. ${n} cows.`,!0),xe.moo(.7,null,.6),oa()}function Nh(i){if(M.mode==="results")return;M.mode="results",xe.stopMusic(),vn.clear(),Ft.sx=Ft.sy=0;let e=M.levelT,t=Yn();i&&(xe.fanfare(),M.stampede||(ri.unlocked=Math.max(ri.unlocked,M.level+1)));let n=(M.stampede?"stampede":"L"+M.level)+"_"+re.difficulty,s=ri.best[n]||0,r=M.score>s;r&&(ri.best[n]=M.score),km();let a=!i&&!M.stampede?"None":M.score>9e3?"S":M.score>5e3?"A":M.score>2500?"B":"C";be("resTitle").textContent=M.stampede?"Trampled (Lovingly)":i?M.level===4?"The King Is Dethroned!":M.level===3?"Party Canceled. The King Heard That.":"Area Cleared!":"Tuckered Out",be("resSub").textContent=M.stampede?`You survived ${M.wave} wave${M.wave===1?"":"s"} on ${t.label}.`:`${$r[M.level].name} \xB7 ${t.label}`;let o=[["Score",M.score.toLocaleString()+(r?" (new best!)":"")],["Grade",a],["Cows defeated",M.kills],["Cows corralled",M.herded],["Best combo","x"+M.bestCombo],["Glow Milk",M.stampede?M.bottles:`${M.bottles} / ${j.totalBottles}`],["Stars",M.stampede?M.stars:`${M.stars} / ${j.totalStars}`],["Sparkle caches",M.caches],["Glitter earned","+"+M.glitterRun],["Gear dropped",M.lootRun],["XP earned","+"+(M.xpRun||0)],["Hero level",st.level],["Time",`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`]];be("resStats").innerHTML=o.map(([c,l])=>`<div class="row"><span>${c}</span><b>${l}</b></div>`).join(""),be("btnNext").hidden=!(i&&!M.stampede&&M.level<4),be("hud").hidden=!0,be("touch").hidden=!0,nn("results"),tt(`${be("resTitle").textContent}. Score ${M.score}. Glitter earned ${M.glitterRun}.`,!0)}function Bo(i,e=!1){xe.init(),Cd(),be("hud").hidden=!1,be("touch").hidden=!1,M.mode="play",Pd(i,e),r0(!0)}function Uh(){M.mode==="play"?(M.mode="paused",nn("pause"),xe.stopMusic()):M.mode==="paused"&&(Cd(),M.mode="play",xe.startMusic(M.stampede?"stampede":M.boss||M.level>=3?"boss":"calm"))}document.addEventListener("visibilitychange",()=>{document.hidden&&M.mode==="play"&&Uh()});function TM(i){if(M.level===0&&!M.stampede&&j.secret&&!M.portalOpen){let t=j.portalPos;Math.hypot(w.x-t.x,w.z-t.z)<6&&Id()}let e=j.bossTrigger;if(!M.stampede&&e&&!M.boss&&!M.bossBeaten&&Math.hypot(w.x-e.x,w.z-e.z)<e.r&&Math.abs(w.y-Qt(e.x,e.z,50).y)<2&&$m(e.type),M.portalOpen&&j.portalPos){let t=j.portalPos;j.portal.rotation.y=Math.atan2(En.position.x-t.x,En.position.z-t.z),Math.hypot(w.x-t.x,w.z-t.z)<1.6&&Math.abs(w.y-t.y)<2.5&&(xe.whoosh(),kt.emit(t.x,t.y+1.8,t.z,60,[Be(4060671,2),Be(16727512,2),Be(16765501,2)],8,1,4,2),M.level===0?(be("flash").classList.remove("go"),be("flash").offsetWidth,be("flash").classList.add("go"),ri.unlocked=Math.max(ri.unlocked,1),km(),Pd(1)):Nh(!0))}M.stampede&&EM(i)}var wn={};function AM(i,e){wn[i]!==e&&(wn[i]=e,be(i).textContent=e)}function r0(i){if(i)for(let n in wn)delete wn[n];let e=Math.max(0,Math.round(w.hp));wn.hp!==e&&(wn.hp=e,be("hpFill").style.width=100*e/w.maxHp+"%",be("hpbar").setAttribute("aria-valuenow",e),be("hpTxt").textContent=e,be("hpbar").classList.toggle("low",e<30)),AM("score",M.score.toLocaleString()),wn.lvl!==st.level&&(wn.lvl=st.level,be("lvlBadge").textContent="Lv "+st.level,be("lvlBadge").setAttribute("aria-label","Level "+st.level));let t=st.level>=30?100:Math.round(100*st.xp/Zr(st.level));wn.xp!==t&&(wn.xp=t,be("xpFill").style.width=t+"%"),M.comboT<=0&&M.combo>0&&(M.combo=0,be("combo").hidden=!0)}var Um=performance.now();function a0(i){requestAnimationFrame(a0);let e=Math.min(.05,(i-Um)/1e3);if(Um=i,M.t+=e,M.fpsAcc+=e,M.fpsN++,M.fpsAcc>4){let t=M.fpsN/M.fpsAcc;M.fpsAcc=0,M.fpsN=0,M.fps=t,t<34&&M.mode==="play"&&!M.noAuto&&(Mi>1.25?(Mi=1.25,Rd()):re.glow&&!M.autoGlowOff&&(M.autoGlowOff=!0))}M.mode==="play"||M.mode==="dying"?(M.hitStop>0&&(M.hitStop-=e,e*=.1),M.levelT+=e,M.comboT-=e,MM(e),bM(e),oM(e),vM(e),SM(e),fM(e),gM(e),xM(e),M.mode==="play"&&TM(e),M.spT=(M.spT||0)-e,M.spT<=0&&(M.spT=.1,Qm()),Eh>0&&(Eh-=e,Eh<=0&&be("quip").classList.remove("show")),(re.audioCues||re.blv)&&w.hp<30&&w.hp>0&&(M.beatT=(M.beatT||0)-e,M.beatT<=0&&(M.beatT=.9,xe.tone("sine",70,50,.15,.3))),r0(),Nm(e)):(M.mode==="title"||M.mode==="results")&&j&&(Bn+=e*.08,Nm(e)),yn.render(M.t,re.reduceMotion);for(let t of Ks)t(M.t,En);Gb.update(M.t,Mi),kt.update(e,Mi),No.update(e,Mi),re.glow&&!M.autoGlowOff?ia.render():Zs.render(qt,En)}function zt(i,e){be(i).addEventListener("click",t=>{xe.init(),e(t)})}function vs(){for(let t of document.querySelectorAll("[data-diff]")){let n=t.dataset.diff===re.difficulty;t.setAttribute("aria-pressed",n),t.classList.toggle("on",n)}let i=be("areaList");i.innerHTML="",$r.forEach((t,n)=>{let s=document.createElement("button");s.className="area";let r=n>ri.unlocked;s.disabled=r;let a=ri.best["L"+n+"_"+re.difficulty];s.innerHTML=`<span>${n===0?"Prologue":"Area "+n}: ${t.name}</span><small>${r?"Locked":a?"Best "+a.toLocaleString():""}</small>`,s.addEventListener("click",()=>{xe.init(),Bo(n)}),i.appendChild(s)});let e=ri.best["stampede_"+re.difficulty];be("stampedeBest").textContent=e?"Best "+e.toLocaleString():""}for(let i of document.querySelectorAll("[data-diff]"))i.addEventListener("click",()=>{re.difficulty=i.dataset.diff,Rh(),vs(),tt(Sd[re.difficulty].label+" difficulty")});zt("btnStory",()=>{vs(),nn("areas")});zt("btnStampede",()=>Bo(0,!0));zt("btnShop",()=>d0());zt("btnSettings",()=>{M.settingsBack=M.mode==="paused"?"pause":"title",u0()});zt("btnHow",()=>nn("how"));zt("btnReplayTut",()=>{nn("title"),l0.open()});zt("btnTitleWallet",()=>RM());zt("walletBack",()=>{let i=M.walletBack||"title";M.walletBack=null,i==="title"&&vs(),nn(i)});for(let i of document.querySelectorAll("[data-back]"))i.addEventListener("click",()=>{let e=i.dataset.back==="auto"?M.settingsBack||"title":i.dataset.back;e==="title"&&vs(),nn(e)});zt("btnResume",()=>Uh());zt("btnPauseSettings",()=>{M.settingsBack="pause",u0()});zt("btnQuit",()=>h0());zt("btnPause",()=>Uh());zt("btnRetry",()=>Bo(M.level,M.stampede));zt("btnNext",()=>Bo(M.level+1));zt("btnMenu",()=>h0());zt("btnResShop",()=>{M.shopBack="results",d0()});zt("btnTitleBag",()=>Oo());zt("btnTitleToken",()=>Ud());zt("btnShopToken",()=>{M.tokenBack="shop",Ud()});zt("btnPauseBag",()=>Oo());zt("btnResBag",()=>Oo());zt("bagBack",()=>CM());zt("tokenBack",()=>{let i=M.tokenBack||"title";M.tokenBack=null,i==="shop"?Lh().then(()=>nn("shop")):i==="wallet"?(o0.render(),nn("wallet")):(vs(),nn(i))});var o0=wm({$:be,speak:i=>tt(i),getGlitter:()=>zi,openGuide:()=>{M.tokenBack="wallet",Ud()}});function RM(){M.walletBack=M.mode==="results"?"results":"title",o0.render(),nn("wallet")}var l0=Am({$:be,speak:i=>tt(i),onClose:()=>{let i=be("btnStory");i&&!be("title").hidden&&i.focus()}});function Oo(){M.mode==="play"?(M.mode="paused",xe.stopMusic(),M.bagBack="play"):M.bagBack=M.mode==="paused"?"pause":M.mode==="results"?"results":"title",Si.render(),nn("bag"),tt("Gear and bag.")}function CM(){let i=M.bagBack||"title";M.bagBack=null,i==="play"?(Cd(),M.mode="play",xe.startMusic(M.stampede?"stampede":M.boss||M.level>=3?"boss":"calm")):(i==="title"&&vs(),nn(i))}var PM=ym({$:be,speak:i=>tt(i),onChange:()=>c0()});function Ud(){M.tokenBack||(M.tokenBack=M.mode==="results"?"results":"title"),PM.render(),nn("token")}function c0(){let i=jr(),e=i.mint?`<img src="img/glitter_32.png" alt="" width="16" height="16"> Linked token: <code>${i.mint.slice(0,6)}...${i.mint.slice(-6)}</code>${i.devnet?" (devnet test)":""} <a href="${To(i)}" target="_blank" rel="noopener noreferrer">Solscan<span class="vh"> (opens in a new tab)</span></a>`:"";for(let t of["titleLinked","shopLinked"]){let n=be(t);n&&(n.innerHTML=e,n.hidden=!i.mint)}}function h0(){M.mode="title",xe.stopMusic(),be("hud").hidden=!0,be("touch").hidden=!0,vs(),nn("title")}var IM=[["reduceMotion","Reduce motion","Less shake, wobble and particles"],["highContrast","High contrast","Brighter world, bolder HUD, ground rings"],["largeText","Large text","Bigger menus and HUD"],["audioCues","Audio cues","Warning sounds for charges, stomps and low health"],["blv","Blind & Low Vision mode","Spatial moos, spoken cues, haptics, edge guard, aim lock, landing assist (off by default)"],["glow","Glow effects (bloom)","Turn off for older phones"],["shake","Screen shake","Camera kick on big hits"]];function u0(){let i=be("setList");i.innerHTML="";for(let[e,t,n]of IM){let s=document.createElement("label");s.className="toggle",s.innerHTML=`<input type="checkbox" role="switch" ${re[e]?"checked":""}><span><b>${t}</b><small>${n}</small></span>`,s.querySelector("input").addEventListener("change",r=>{re[e]=r.target.checked,e==="glow"&&(M.autoGlowOff=!1),Rh(),wd(),e==="blv"&&re.blv&&tt("Blind and low vision mode on. Press R or the Scan button to hear what is around you.",!0)}),i.appendChild(s)}for(let[e,t]of[["music","Music volume"],["sfx","Sound effects volume"]]){let n=document.createElement("label");n.className="slider",n.innerHTML=`<span>${t}</span><input type="range" min="0" max="1" step="0.05" value="${re[e]}">`,n.querySelector("input").addEventListener("input",s=>{re[e]=+s.target.value,Rh(),wd()}),i.appendChild(n)}nn("settings")}var yi="skin";async function d0(){M.shopBack||(M.shopBack=M.mode==="results"?"results":"title"),be("shopBack").dataset.back=M.shopBack,M.shopBack=null,await Lh(),nn("shop")}async function Lh(){let i=await qs.listOwned();Dh();let e=be("shopTabs");e.innerHTML="";for(let n of Object.keys(vh)){let s=document.createElement("button");s.textContent=vh[n].label,s.setAttribute("role","tab"),s.setAttribute("aria-selected",n===yi),s.className=n===yi?"on":"",s.addEventListener("click",()=>{yi=n,Lh()}),e.appendChild(s)}let t=be("shopGrid");t.innerHTML="";for(let n of vh[yi].items){let s=n.price===0||i.includes(yi+":"+n.id),r=On[yi]===n.id,a=document.createElement("div");a.className="card"+(r?" on":"");let o=LM(yi,n.id);a.innerHTML=`<div class="sw" style="${o}"></div><b>${n.name}</b><small>${r?"Equipped":s?"Owned":`<span class="gem"></span> ${n.price}`}</small>`;let c=document.createElement("button");c.textContent=r?"Equipped":s?"Equip":"Buy",c.disabled=r||!s&&zi<n.price,c.setAttribute("aria-label",`${c.textContent} ${n.name}${s?"":", "+n.price+" Glitter"}`),c.addEventListener("click",async()=>{if(!s){let l=await qs.spend(n.price,yi+":"+n.id);if(!l.ok){tt("Not enough Glitter.");return}zi=l.balance,xe.glitter(),tt(`Bought ${n.name}`)}On[yi]=n.id,await qs.equip(yi,n.id),ai.setWeapon(re.weapon,On.skin),ai.setOutfit(On.outfit),yn.setHat(On.hat),xe.chime(0),Lh()}),a.appendChild(c),t.appendChild(a)}}function LM(i,e){let t=n=>"#"+new me(n).getHexString();if(i==="skin")return`background:radial-gradient(circle, #fff 0 12%, ${t(Os[e])} 40%, transparent 72%)`;if(i==="outfit"){let n=xh[e];return`background:linear-gradient(135deg, ${t(n.jacket)} 0 55%, ${t(n.trim)} 55% 65%, ${t(n.scarf)} 65%)`}return i==="hat"?`background:${t({party:16735940,tophat:2761024,crown:16765501,flower:16747224,beanie:4048127,viking:12634328}[e])}; border-radius:50% 50% 12% 12%`:e==="none"?"background:#222a":`background:${{sparks:"radial-gradient(#fff,#ffd23d 30%,transparent 60%)",bubbles:"radial-gradient(circle at 35% 35%,#fff 0 8%,#6bf6ff 20%,transparent 60%)",embers:"radial-gradient(#ffd23d,#ff7a3d 35%,transparent 65%)",rainbow:"conic-gradient(#ff4d6d,#ffe66d,#5cff9d,#4dd2ff,#9b6bff,#ff4d6d)"}[e]}`}Wm(Si.stats());c0();jm();w.mana=w.maxMana;Pd(1);M.mode="title";xe.stopMusic();be("hud").hidden=!0;be("touch").hidden=!0;be("quip").classList.remove("show");vs();nn("title");Bn=.6;requestAnimationFrame(a0);Tm()||setTimeout(()=>l0.open(),400);"serviceWorker"in navigator&&location.protocol!=="file:"&&navigator.serviceWorker.register("./sw.js").catch(()=>{});window.__moo={get state(){return{mode:M.mode,level:M.level,stampede:M.stampede,score:M.score,kills:M.kills,combo:M.combo,cows:Js().length,hp:w.hp,boss:M.boss?{hp:M.boss.hp,max:M.boss.maxHp,state:M.boss.state}:null,portalOpen:M.portalOpen,glitter:zi,glitterRun:M.glitterRun,fps:M.fps,player:{x:w.x,y:w.y,z:w.z}}},teleport(i,e,t){w.x=i,w.z=e,w.y=t??Qt(i,e,50).y,w.vx=w.vz=w.vy=0,bi.set(w.x,w.y+1.2,w.z)},cowInFront(i=1.8){let e=Js()[0]||sa(w.x,w.z+i);return e.x=w.x+Math.sin(w.yaw)*i,e.z=w.z+Math.cos(w.yaw)*i,e.y=w.y,e.state="stunned",e.t=5,e.kx=e.kz=0,!0},clearCows(){for(let i of yn.cows)i.dead||Do(i,0,0,!0)},bossTo(i){M.boss&&(M.boss.hp=i)},faceBoss(){M.boss&&(w.yaw=Math.atan2(M.boss.x-w.x,M.boss.z-w.z))},invulnerable(i=!0){M.invuln=i},start:Bo,finish:Nh,noAutoQuality(){M.noAuto=!0},get gear(){return Object.assign({},Vs,{maxHp:w.maxHp})},get bag(){return JSON.parse(JSON.stringify(Si.inv))},get loot(){return j.items.filter(i=>!i.taken&&i.type==="gear").map(i=>({name:i.item.name,rarity:i.item.rarity,slot:i.item.slot,x:i.x,z:i.z}))},get itemCounts(){let i={};for(let e of j.items){let t=e.type+(e.taken?"-taken":"");i[t]=(i[t]||0)+1}return i},get hero(){return{level:st.level,xp:st.xp,points:st.points,talents:Object.assign({},st.talents),mana:w.mana,maxMana:w.maxMana,maxHp:w.maxHp}},get buffs(){return kn.map(i=>({id:i.id,t:i.t}))},get eff(){return Object.assign({},An)},get casts(){return{n:M.casts||0,last:M.lastCast}},get spellCd(){return Object.assign({},oi)},addXp(i){return Ch(i),st.level},setLevel(i){for(;st.level<i;)Ch(Zr(st.level)-st.xp);return st.level},cast(i){return Ih(i)},fillMana(){w.mana=w.maxMana;for(let i in oi)oi[i]=0},forceUltra(){M.forceUltra=!0},givePotion(i,e=1){for(let t=0;t<e;t++)Si.addPotion(i);Uo()},get level4(){return{shrines:j.shrines.length}},hurt(i){w.hp=Math.max(1,w.hp-i)},shrineAt(){let i=j.shrines[0];return i?{x:i.x,z:i.z}:null},get bossPhase(){return M.boss?M.boss.phase:0},bossPos_:null,get bossPos(){return M.boss?{x:M.boss.x,z:M.boss.z}:null},showcase(){for(let i=0;i<5;i++){let e=w.yaw-.6+i*.3;wt("gem",w.x+Math.sin(e)*3,w.y,w.z+Math.cos(e)*3,{value:i===2?6:2,magnet:999})}},get nearGear(){return M.nearGear?M.nearGear.item.name:null},dmgMult(){return 1+An.dmg/100},walkTo(i,e){w.x=i,w.z=e,w.y=Qt(i,e,w.y+3).y,w.y===-1/0&&(w.y=0),bi.set(w.x,w.y+1.2,w.z)},lookAtLoot(){let i=j.items.find(e=>!e.taken&&e.type==="gear");return i&&(Bn=Math.atan2(w.x-i.x,w.z-i.z)+.5),!!i}};export{Sd as DIFFS};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
