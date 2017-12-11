/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);jQuery.noConflict();
var Prototype={Version:"1.7",Browser:(function(){var b=navigator.userAgent;var a=Object.prototype.toString.call(window.opera)=="[object Opera]";return{IE:!!window.attachEvent&&!a,Opera:a,WebKit:b.indexOf("AppleWebKit/")>-1,Gecko:b.indexOf("Gecko")>-1&&b.indexOf("KHTML")===-1,MobileSafari:/Apple.*Mobile/.test(b)}})(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:(function(){var a=window.Element||window.HTMLElement;return !!(a&&a.prototype)})(),SpecificElementExtensions:(function(){if(typeof window.HTMLDivElement!=="undefined"){return true}var c=document.createElement("div"),b=document.createElement("form"),a=false;if(c.__proto__&&(c.__proto__!==b.__proto__)){a=true}c=b=null;return a})()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)<\/script>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(a){return a}};if(Prototype.Browser.MobileSafari){Prototype.BrowserFeatures.SpecificElementExtensions=false}var Abstract={};var Try={these:function(){var c;for(var b=0,d=arguments.length;b<d;b++){var a=arguments[b];try{c=a();break}catch(f){}}return c}};var Class=(function(){var d=(function(){for(var e in {toString:1}){if(e==="toString"){return false}}return true})();function a(){}function b(){var h=null,g=$A(arguments);if(Object.isFunction(g[0])){h=g.shift()}function e(){this.initialize.apply(this,arguments)}Object.extend(e,Class.Methods);e.superclass=h;e.subclasses=[];if(h){a.prototype=h.prototype;e.prototype=new a;h.subclasses.push(e)}for(var f=0,j=g.length;f<j;f++){e.addMethods(g[f])}if(!e.prototype.initialize){e.prototype.initialize=Prototype.emptyFunction}e.prototype.constructor=e;return e}function c(l){var g=this.superclass&&this.superclass.prototype,f=Object.keys(l);if(d){if(l.toString!=Object.prototype.toString){f.push("toString")}if(l.valueOf!=Object.prototype.valueOf){f.push("valueOf")}}for(var e=0,h=f.length;e<h;e++){var k=f[e],j=l[k];if(g&&Object.isFunction(j)&&j.argumentNames()[0]=="$super"){var m=j;j=(function(i){return function(){return g[i].apply(this,arguments)}})(k).wrap(m);j.valueOf=m.valueOf.bind(m);j.toString=m.toString.bind(m)}this.prototype[k]=j}return this}return{create:b,Methods:{addMethods:c}}})();(function(){var C=Object.prototype.toString,B="Null",o="Undefined",v="Boolean",f="Number",s="String",H="Object",t="[object Function]",y="[object Boolean]",g="[object Number]",l="[object String]",h="[object Array]",x="[object Date]",i=window.JSON&&typeof JSON.stringify==="function"&&JSON.stringify(0)==="0"&&typeof JSON.stringify(Prototype.K)==="undefined";function k(J){switch(J){case null:return B;case (void 0):return o}var I=typeof J;switch(I){case"boolean":return v;case"number":return f;case"string":return s}return H}function z(I,K){for(var J in K){I[J]=K[J]}return I}function G(I){try{if(c(I)){return"undefined"}if(I===null){return"null"}return I.inspect?I.inspect():String(I)}catch(J){if(J instanceof RangeError){return"..."}throw J}}function D(I){return F("",{"":I},[])}function F(R,O,P){var Q=O[R],N=typeof Q;if(k(Q)===H&&typeof Q.toJSON==="function"){Q=Q.toJSON(R)}var K=C.call(Q);switch(K){case g:case y:case l:Q=Q.valueOf()}switch(Q){case null:return"null";case true:return"true";case false:return"false"}N=typeof Q;switch(N){case"string":return Q.inspect(true);case"number":return isFinite(Q)?String(Q):"null";case"object":for(var J=0,I=P.length;J<I;J++){if(P[J]===Q){throw new TypeError()}}P.push(Q);var M=[];if(K===h){for(var J=0,I=Q.length;J<I;J++){var L=F(J,Q,P);M.push(typeof L==="undefined"?"null":L)}M="["+M.join(",")+"]"}else{var S=Object.keys(Q);for(var J=0,I=S.length;J<I;J++){var R=S[J],L=F(R,Q,P);if(typeof L!=="undefined"){M.push(R.inspect(true)+":"+L)}}M="{"+M.join(",")+"}"}P.pop();return M}}function w(I){return JSON.stringify(I)}function j(I){return $H(I).toQueryString()}function p(I){return I&&I.toHTML?I.toHTML():String.interpret(I)}function r(I){if(k(I)!==H){throw new TypeError()}var J=[];for(var K in I){if(I.hasOwnProperty(K)){J.push(K)}}return J}function d(I){var J=[];for(var K in I){J.push(I[K])}return J}function A(I){return z({},I)}function u(I){return !!(I&&I.nodeType==1)}function m(I){return C.call(I)===h}var b=(typeof Array.isArray=="function")&&Array.isArray([])&&!Array.isArray({});if(b){m=Array.isArray}function e(I){return I instanceof Hash}function a(I){return C.call(I)===t}function n(I){return C.call(I)===l}function q(I){return C.call(I)===g}function E(I){return C.call(I)===x}function c(I){return typeof I==="undefined"}z(Object,{extend:z,inspect:G,toJSON:i?w:D,toQueryString:j,toHTML:p,keys:Object.keys||r,values:d,clone:A,isElement:u,isArray:m,isHash:e,isFunction:a,isString:n,isNumber:q,isDate:E,isUndefined:c})})();Object.extend(Function.prototype,(function(){var k=Array.prototype.slice;function d(o,l){var n=o.length,m=l.length;while(m--){o[n+m]=l[m]}return o}function i(m,l){m=k.call(m,0);return d(m,l)}function g(){var l=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return l.length==1&&!l[0]?[]:l}function h(n){if(arguments.length<2&&Object.isUndefined(arguments[0])){return this}var l=this,m=k.call(arguments,1);return function(){var o=i(m,arguments);return l.apply(n,o)}}function f(n){var l=this,m=k.call(arguments,1);return function(p){var o=d([p||window.event],m);return l.apply(n,o)}}function j(){if(!arguments.length){return this}var l=this,m=k.call(arguments,0);return function(){var n=i(m,arguments);return l.apply(this,n)}}function e(n){var l=this,m=k.call(arguments,1);n=n*1000;return window.setTimeout(function(){return l.apply(l,m)},n)}function a(){var l=d([0.01],arguments);return this.delay.apply(this,l)}function c(m){var l=this;return function(){var n=d([l.bind(this)],arguments);return m.apply(this,n)}}function b(){if(this._methodized){return this._methodized}var l=this;return this._methodized=function(){var m=d([this],arguments);return l.apply(null,m)}}return{argumentNames:g,bind:h,bindAsEventListener:f,curry:j,delay:e,defer:a,wrap:c,methodize:b}})());(function(c){function b(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1).toPaddedString(2)+"-"+this.getUTCDate().toPaddedString(2)+"T"+this.getUTCHours().toPaddedString(2)+":"+this.getUTCMinutes().toPaddedString(2)+":"+this.getUTCSeconds().toPaddedString(2)+"Z"}function a(){return this.toISOString()}if(!c.toISOString){c.toISOString=b}if(!c.toJSON){c.toJSON=a}})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")};var PeriodicalExecuter=Class.create({initialize:function(b,a){this.callback=b;this.frequency=a;this.currentlyExecuting=false;this.registerCallback()},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),this.frequency*1000)},execute:function(){this.callback(this)},stop:function(){if(!this.timer){return}clearInterval(this.timer);this.timer=null},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.execute();this.currentlyExecuting=false}catch(a){this.currentlyExecuting=false;throw a}}}});Object.extend(String,{interpret:function(a){return a==null?"":String(a)},specialChar:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\\":"\\\\"}});Object.extend(String.prototype,(function(){var NATIVE_JSON_PARSE_SUPPORT=window.JSON&&typeof JSON.parse==="function"&&JSON.parse('{"test": true}').test;function prepareReplacement(replacement){if(Object.isFunction(replacement)){return replacement}var template=new Template(replacement);return function(match){return template.evaluate(match)}}function gsub(pattern,replacement){var result="",source=this,match;replacement=prepareReplacement(replacement);if(Object.isString(pattern)){pattern=RegExp.escape(pattern)}if(!(pattern.length||pattern.source)){replacement=replacement("");return replacement+source.split("").join(replacement)+replacement}while(source.length>0){if(match=source.match(pattern)){result+=source.slice(0,match.index);result+=String.interpret(replacement(match));source=source.slice(match.index+match[0].length)}else{result+=source,source=""}}return result}function sub(pattern,replacement,count){replacement=prepareReplacement(replacement);count=Object.isUndefined(count)?1:count;return this.gsub(pattern,function(match){if(--count<0){return match[0]}return replacement(match)})}function scan(pattern,iterator){this.gsub(pattern,iterator);return String(this)}function truncate(length,truncation){length=length||30;truncation=Object.isUndefined(truncation)?"...":truncation;return this.length>length?this.slice(0,length-truncation.length)+truncation:String(this)}function strip(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}function stripTags(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"")}function stripScripts(){return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"")}function extractScripts(){var matchAll=new RegExp(Prototype.ScriptFragment,"img"),matchOne=new RegExp(Prototype.ScriptFragment,"im");return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||["",""])[1]})}function evalScripts(){return this.extractScripts().map(function(script){return eval(script)})}function escapeHTML(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function unescapeHTML(){return this.stripTags().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}function toQueryParams(separator){var match=this.strip().match(/([^?#]*)(#.*)?$/);if(!match){return{}}return match[1].split(separator||"&").inject({},function(hash,pair){if((pair=pair.split("="))[0]){var key=decodeURIComponent(pair.shift()),value=pair.length>1?pair.join("="):pair[0];if(value!=undefined){value=decodeURIComponent(value)}if(key in hash){if(!Object.isArray(hash[key])){hash[key]=[hash[key]]}hash[key].push(value)}else{hash[key]=value}}return hash})}function toArray(){return this.split("")}function succ(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1)}function times(count){return count<1?"":new Array(count+1).join(this)}function camelize(){return this.replace(/-+(.)?/g,function(match,chr){return chr?chr.toUpperCase():""})}function capitalize(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase()}function underscore(){return this.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase()}function dasherize(){return this.replace(/_/g,"-")}function inspect(useDoubleQuotes){var escapedString=this.replace(/[\x00-\x1f\\]/g,function(character){if(character in String.specialChar){return String.specialChar[character]}return"\\u00"+character.charCodeAt().toPaddedString(2,16)});if(useDoubleQuotes){return'"'+escapedString.replace(/"/g,'\\"')+'"'}return"'"+escapedString.replace(/'/g,"\\'")+"'"}function unfilterJSON(filter){return this.replace(filter||Prototype.JSONFilter,"$1")}function isJSON(){var str=this;if(str.blank()){return false}str=str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@");str=str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");str=str.replace(/(?:^|:|,)(?:\s*\[)+/g,"");return(/^[\],:{}\s]*$/).test(str)}function evalJSON(sanitize){var json=this.unfilterJSON(),cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if(cx.test(json)){json=json.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}try{if(!sanitize||json.isJSON()){return eval("("+json+")")}}catch(e){}throw new SyntaxError("Badly formed JSON string: "+this.inspect())}function parseJSON(){var json=this.unfilterJSON();return JSON.parse(json)}function include(pattern){return this.indexOf(pattern)>-1}function startsWith(pattern){return this.lastIndexOf(pattern,0)===0}function endsWith(pattern){var d=this.length-pattern.length;return d>=0&&this.indexOf(pattern,d)===d}function empty(){return this==""}function blank(){return/^\s*$/.test(this)}function interpolate(object,pattern){return new Template(this,pattern).evaluate(object)}return{gsub:gsub,sub:sub,scan:scan,truncate:truncate,strip:String.prototype.trim||strip,stripTags:stripTags,stripScripts:stripScripts,extractScripts:extractScripts,evalScripts:evalScripts,escapeHTML:escapeHTML,unescapeHTML:unescapeHTML,toQueryParams:toQueryParams,parseQuery:toQueryParams,toArray:toArray,succ:succ,times:times,camelize:camelize,capitalize:capitalize,underscore:underscore,dasherize:dasherize,inspect:inspect,unfilterJSON:unfilterJSON,isJSON:isJSON,evalJSON:NATIVE_JSON_PARSE_SUPPORT?parseJSON:evalJSON,include:include,startsWith:startsWith,endsWith:endsWith,empty:empty,blank:blank,interpolate:interpolate}})());var Template=Class.create({initialize:function(a,b){this.template=a.toString();this.pattern=b||Template.Pattern},evaluate:function(a){if(a&&Object.isFunction(a.toTemplateReplacements)){a=a.toTemplateReplacements()}return this.template.gsub(this.pattern,function(d){if(a==null){return(d[1]+"")}var f=d[1]||"";if(f=="\\"){return d[2]}var b=a,g=d[3],e=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;d=e.exec(g);if(d==null){return f}while(d!=null){var c=d[1].startsWith("[")?d[2].replace(/\\\\]/g,"]"):d[1];b=b[c];if(null==b||""==d[3]){break}g=g.substring("["==d[3]?d[1].length:d[0].length);d=e.exec(g)}return f+String.interpret(b)})}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;var $break={};var Enumerable=(function(){function c(y,x){var w=0;try{this._each(function(A){y.call(x,A,w++)})}catch(z){if(z!=$break){throw z}}return this}function r(z,y,x){var w=-z,A=[],B=this.toArray();if(z<1){return B}while((w+=z)<B.length){A.push(B.slice(w,w+z))}return A.collect(y,x)}function b(y,x){y=y||Prototype.K;var w=true;this.each(function(A,z){w=w&&!!y.call(x,A,z);if(!w){throw $break}});return w}function i(y,x){y=y||Prototype.K;var w=false;this.each(function(A,z){if(w=!!y.call(x,A,z)){throw $break}});return w}function j(y,x){y=y||Prototype.K;var w=[];this.each(function(A,z){w.push(y.call(x,A,z))});return w}function t(y,x){var w;this.each(function(A,z){if(y.call(x,A,z)){w=A;throw $break}});return w}function h(y,x){var w=[];this.each(function(A,z){if(y.call(x,A,z)){w.push(A)}});return w}function g(z,y,x){y=y||Prototype.K;var w=[];if(Object.isString(z)){z=new RegExp(RegExp.escape(z))}this.each(function(B,A){if(z.match(B)){w.push(y.call(x,B,A))}});return w}function a(w){if(Object.isFunction(this.indexOf)){if(this.indexOf(w)!=-1){return true}}var x=false;this.each(function(y){if(y==w){x=true;throw $break}});return x}function q(x,w){w=Object.isUndefined(w)?null:w;return this.eachSlice(x,function(y){while(y.length<x){y.push(w)}return y})}function l(w,y,x){this.each(function(A,z){w=y.call(x,w,A,z)});return w}function v(x){var w=$A(arguments).slice(1);return this.map(function(y){return y[x].apply(y,w)})}function p(y,x){y=y||Prototype.K;var w;this.each(function(A,z){A=y.call(x,A,z);if(w==null||A>=w){w=A}});return w}function n(y,x){y=y||Prototype.K;var w;this.each(function(A,z){A=y.call(x,A,z);if(w==null||A<w){w=A}});return w}function e(z,x){z=z||Prototype.K;var y=[],w=[];this.each(function(B,A){(z.call(x,B,A)?y:w).push(B)});return[y,w]}function f(x){var w=[];this.each(function(y){w.push(y[x])});return w}function d(y,x){var w=[];this.each(function(A,z){if(!y.call(x,A,z)){w.push(A)}});return w}function m(x,w){return this.map(function(z,y){return{value:z,criteria:x.call(w,z,y)}}).sort(function(B,A){var z=B.criteria,y=A.criteria;return z<y?-1:z>y?1:0}).pluck("value")}function o(){return this.map()}function s(){var x=Prototype.K,w=$A(arguments);if(Object.isFunction(w.last())){x=w.pop()}var y=[this].concat(w).map($A);return this.map(function(A,z){return x(y.pluck(z))})}function k(){return this.toArray().length}function u(){return"#<Enumerable:"+this.toArray().inspect()+">"}return{each:c,eachSlice:r,all:b,every:b,any:i,some:i,collect:j,map:j,detect:t,findAll:h,select:h,filter:h,grep:g,include:a,member:a,inGroupsOf:q,inject:l,invoke:v,max:p,min:n,partition:e,pluck:f,reject:d,sortBy:m,toArray:o,entries:o,zip:s,size:k,inspect:u,find:t}})();function $A(c){if(!c){return[]}if("toArray" in Object(c)){return c.toArray()}var b=c.length||0,a=new Array(b);while(b--){a[b]=c[b]}return a}function $w(a){if(!Object.isString(a)){return[]}a=a.strip();return a?a.split(/\s+/):[]}Array.from=$A;(function(){var r=Array.prototype,m=r.slice,o=r.forEach;function b(w,v){for(var u=0,x=this.length>>>0;u<x;u++){if(u in this){w.call(v,this[u],u,this)}}}if(!o){o=b}function l(){this.length=0;return this}function d(){return this[0]}function g(){return this[this.length-1]}function i(){return this.select(function(u){return u!=null})}function t(){return this.inject([],function(v,u){if(Object.isArray(u)){return v.concat(u.flatten())}v.push(u);return v})}function h(){var u=m.call(arguments,0);return this.select(function(v){return !u.include(v)})}function f(u){return(u===false?this.toArray():this)._reverse()}function k(u){return this.inject([],function(x,w,v){if(0==v||(u?x.last()!=w:!x.include(w))){x.push(w)}return x})}function p(u){return this.uniq().findAll(function(v){return u.detect(function(w){return v===w})})}function q(){return m.call(this,0)}function j(){return this.length}function s(){return"["+this.map(Object.inspect).join(", ")+"]"}function a(w,u){u||(u=0);var v=this.length;if(u<0){u=v+u}for(;u<v;u++){if(this[u]===w){return u}}return -1}function n(v,u){u=isNaN(u)?this.length:(u<0?this.length+u:u)+1;var w=this.slice(0,u).reverse().indexOf(v);return(w<0)?w:u-w-1}function c(){var z=m.call(this,0),x;for(var v=0,w=arguments.length;v<w;v++){x=arguments[v];if(Object.isArray(x)&&!("callee" in x)){for(var u=0,y=x.length;u<y;u++){z.push(x[u])}}else{z.push(x)}}return z}Object.extend(r,Enumerable);if(!r._reverse){r._reverse=r.reverse}Object.extend(r,{_each:o,clear:l,first:d,last:g,compact:i,flatten:t,without:h,reverse:f,uniq:k,intersect:p,clone:q,toArray:q,size:j,inspect:s});var e=(function(){return[].concat(arguments)[0][0]!==1})(1,2);if(e){r.concat=c}if(!r.indexOf){r.indexOf=a}if(!r.lastIndexOf){r.lastIndexOf=n}})();function $H(a){return new Hash(a)}var Hash=Class.create(Enumerable,(function(){function e(p){this._object=Object.isHash(p)?p.toObject():Object.clone(p)}function f(q){for(var p in this._object){var r=this._object[p],s=[p,r];s.key=p;s.value=r;q(s)}}function j(p,q){return this._object[p]=q}function c(p){if(this._object[p]!==Object.prototype[p]){return this._object[p]}}function m(p){var q=this._object[p];delete this._object[p];return q}function o(){return Object.clone(this._object)}function n(){return this.pluck("key")}function l(){return this.pluck("value")}function g(q){var p=this.detect(function(r){return r.value===q});return p&&p.key}function i(p){return this.clone().update(p)}function d(p){return new Hash(p).inject(this,function(q,r){q.set(r.key,r.value);return q})}function b(p,q){if(Object.isUndefined(q)){return p}return p+"="+encodeURIComponent(String.interpret(q))}function a(){return this.inject([],function(t,w){var s=encodeURIComponent(w.key),q=w.value;if(q&&typeof q=="object"){if(Object.isArray(q)){var v=[];for(var r=0,p=q.length,u;r<p;r++){u=q[r];v.push(b(s,u))}return t.concat(v)}}else{t.push(b(s,q))}return t}).join("&")}function k(){return"#<Hash:{"+this.map(function(p){return p.map(Object.inspect).join(": ")}).join(", ")+"}>"}function h(){return new Hash(this)}return{initialize:e,_each:f,set:j,get:c,unset:m,toObject:o,toTemplateReplacements:o,keys:n,values:l,index:g,merge:i,update:d,toQueryString:a,inspect:k,toJSON:o,clone:h}})());Hash.from=$H;Object.extend(Number.prototype,(function(){function d(){return this.toPaddedString(2,16)}function b(){return this+1}function h(j,i){$R(0,this,true).each(j,i);return this}function g(k,j){var i=this.toString(j||10);return"0".times(k-i.length)+i}function a(){return Math.abs(this)}function c(){return Math.round(this)}function e(){return Math.ceil(this)}function f(){return Math.floor(this)}return{toColorPart:d,succ:b,times:h,toPaddedString:g,abs:a,round:c,ceil:e,floor:f}})());function $R(c,a,b){return new ObjectRange(c,a,b)}var ObjectRange=Class.create(Enumerable,(function(){function b(f,d,e){this.start=f;this.end=d;this.exclusive=e}function c(d){var e=this.start;while(this.include(e)){d(e);e=e.succ()}}function a(d){if(d<this.start){return false}if(this.exclusive){return d<this.end}return d<=this.end}return{initialize:b,_each:c,include:a}})());var Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")})||false},activeRequestCount:0};Ajax.Responders={responders:[],_each:function(a){this.responders._each(a)},register:function(a){if(!this.include(a)){this.responders.push(a)}},unregister:function(a){this.responders=this.responders.without(a)},dispatch:function(d,b,c,a){this.each(function(f){if(Object.isFunction(f[d])){try{f[d].apply(f,[b,c,a])}catch(g){}}})}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--}});Ajax.Base=Class.create({initialize:function(a){this.options={method:"post",asynchronous:true,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:"",evalJSON:true,evalJS:true};Object.extend(this.options,a||{});this.options.method=this.options.method.toLowerCase();if(Object.isHash(this.options.parameters)){this.options.parameters=this.options.parameters.toObject()}}});Ajax.Request=Class.create(Ajax.Base,{_complete:false,initialize:function($super,b,a){$super(a);this.transport=Ajax.getTransport();this.request(b)},request:function(b){this.url=b;this.method=this.options.method;var d=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);if(!["get","post"].include(this.method)){d+=(d?"&":"")+"_method="+this.method;this.method="post"}if(d&&this.method==="get"){this.url+=(this.url.include("?")?"&":"?")+d}this.parameters=d.toQueryParams();try{var a=new Ajax.Response(this);if(this.options.onCreate){this.options.onCreate(a)}Ajax.Responders.dispatch("onCreate",this,a);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);if(this.options.asynchronous){this.respondToReadyState.bind(this).defer(1)}this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body=this.method=="post"?(this.options.postBody||d):null;this.transport.send(this.body);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange()}}catch(c){this.dispatchException(c)}},onStateChange:function(){var a=this.transport.readyState;if(a>1&&!((a==4)&&this._complete)){this.respondToReadyState(this.transport.readyState)}},setRequestHeaders:function(){var e={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,Accept:"text/javascript, text/html, application/xml, text/xml, */*"};if(this.method=="post"){e["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+this.options.encoding:"");if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005){e.Connection="close"}}if(typeof this.options.requestHeaders=="object"){var c=this.options.requestHeaders;if(Object.isFunction(c.push)){for(var b=0,d=c.length;b<d;b+=2){e[c[b]]=c[b+1]}}else{$H(c).each(function(f){e[f.key]=f.value})}}for(var a in e){this.transport.setRequestHeader(a,e[a])}},success:function(){var a=this.getStatus();return !a||(a>=200&&a<300)||a==304},getStatus:function(){try{if(this.transport.status===1223){return 204}return this.transport.status||0}catch(a){return 0}},respondToReadyState:function(a){var c=Ajax.Request.Events[a],b=new Ajax.Response(this);if(c=="Complete"){try{this._complete=true;(this.options["on"+b.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(b,b.headerJSON)}catch(d){this.dispatchException(d)}var f=b.getHeader("Content-type");if(this.options.evalJS=="force"||(this.options.evalJS&&this.isSameOrigin()&&f&&f.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))){this.evalResponse()}}try{(this.options["on"+c]||Prototype.emptyFunction)(b,b.headerJSON);Ajax.Responders.dispatch("on"+c,this,b,b.headerJSON)}catch(d){this.dispatchException(d)}if(c=="Complete"){this.transport.onreadystatechange=Prototype.emptyFunction}},isSameOrigin:function(){var a=this.url.match(/^\s*https?:\/\/[^\/]*/);return !a||(a[0]=="#{protocol}//#{domain}#{port}".interpolate({protocol:location.protocol,domain:document.domain,port:location.port?":"+location.port:""}))},getHeader:function(a){try{return this.transport.getResponseHeader(a)||null}catch(b){return null}},evalResponse:function(){try{return eval((this.transport.responseText||"").unfilterJSON())}catch(e){this.dispatchException(e)}},dispatchException:function(a){(this.options.onException||Prototype.emptyFunction)(this,a);Ajax.Responders.dispatch("onException",this,a)}});Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];Ajax.Response=Class.create({initialize:function(c){this.request=c;var d=this.transport=c.transport,a=this.readyState=d.readyState;if((a>2&&!Prototype.Browser.IE)||a==4){this.status=this.getStatus();this.statusText=this.getStatusText();this.responseText=String.interpret(d.responseText);this.headerJSON=this._getHeaderJSON()}if(a==4){var b=d.responseXML;this.responseXML=Object.isUndefined(b)?null:b;this.responseJSON=this._getResponseJSON()}},status:0,statusText:"",getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||""}catch(a){return""}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders()}catch(a){return null}},getResponseHeader:function(a){return this.transport.getResponseHeader(a)},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders()},_getHeaderJSON:function(){var a=this.getHeader("X-JSON");if(!a){return null}a=decodeURIComponent(escape(a));try{return a.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}},_getResponseJSON:function(){var a=this.request.options;if(!a.evalJSON||(a.evalJSON!="force"&&!(this.getHeader("Content-type")||"").include("application/json"))||this.responseText.blank()){return null}try{return this.responseText.evalJSON(a.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}}});Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,a,c,b){this.container={success:(a.success||a),failure:(a.failure||(a.success?null:a))};b=Object.clone(b);var d=b.onComplete;b.onComplete=(function(e,f){this.updateContent(e.responseText);if(Object.isFunction(d)){d(e,f)}}).bind(this);$super(c,b)},updateContent:function(d){var c=this.container[this.success()?"success":"failure"],a=this.options;if(!a.evalScripts){d=d.stripScripts()}if(c=$(c)){if(a.insertion){if(Object.isString(a.insertion)){var b={};b[a.insertion]=d;c.insert(b)}else{a.insertion(c,d)}}else{c.update(d)}}}});Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,a,c,b){$super(b);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=a;this.url=c;this.start()},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent()},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments)},updateComplete:function(a){if(this.options.decay){this.decay=(a.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=a.responseText}this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency)},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options)}});function $(b){if(arguments.length>1){for(var a=0,d=[],c=arguments.length;a<c;a++){d.push($(arguments[a]))}return d}if(Object.isString(b)){b=document.getElementById(b)}return Element.extend(b)}if(Prototype.BrowserFeatures.XPath){document._getElementsByXPath=function(f,a){var c=[];var e=document.evaluate(f,$(a)||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(var b=0,d=e.snapshotLength;b<d;b++){c.push(Element.extend(e.snapshotItem(b)))}return c}}if(!Node){var Node={}}if(!Node.ELEMENT_NODE){Object.extend(Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12})}(function(c){function d(f,e){if(f==="select"){return false}if("type" in e){return false}return true}var b=(function(){try{var e=document.createElement('<input name="x">');return e.tagName.toLowerCase()==="input"&&e.name==="x"}catch(f){return false}})();var a=c.Element;c.Element=function(g,f){f=f||{};g=g.toLowerCase();var e=Element.cache;if(b&&f.name){g="<"+g+' name="'+f.name+'">';delete f.name;return Element.writeAttribute(document.createElement(g),f)}if(!e[g]){e[g]=Element.extend(document.createElement(g))}var h=d(g,f)?e[g].cloneNode(false):document.createElement(g);return Element.writeAttribute(h,f)};Object.extend(c.Element,a||{});if(a){c.Element.prototype=a.prototype}})(this);Element.idCounter=1;Element.cache={};Element._purgeElement=function(b){var a=b._prototypeUID;if(a){Element.stopObserving(b);b._prototypeUID=void 0;delete Element.Storage[a]}};Element.Methods={visible:function(a){return $(a).style.display!="none"},toggle:function(a){a=$(a);Element[Element.visible(a)?"hide":"show"](a);return a},hide:function(a){a=$(a);a.style.display="none";return a},show:function(a){a=$(a);a.style.display="";return a},remove:function(a){a=$(a);a.parentNode.removeChild(a);return a},update:(function(){var d=(function(){var g=document.createElement("select"),h=true;g.innerHTML='<option value="test">test</option>';if(g.options&&g.options[0]){h=g.options[0].nodeName.toUpperCase()!=="OPTION"}g=null;return h})();var b=(function(){try{var g=document.createElement("table");if(g&&g.tBodies){g.innerHTML="<tbody><tr><td>test</td></tr></tbody>";var i=typeof g.tBodies[0]=="undefined";g=null;return i}}catch(h){return true}})();var a=(function(){try{var g=document.createElement("div");g.innerHTML="<link>";var i=(g.childNodes.length===0);g=null;return i}catch(h){return true}})();var c=d||b||a;var f=(function(){var g=document.createElement("script"),i=false;try{g.appendChild(document.createTextNode(""));i=!g.firstChild||g.firstChild&&g.firstChild.nodeType!==3}catch(h){i=true}g=null;return i})();function e(l,m){l=$(l);var g=Element._purgeElement;var n=l.getElementsByTagName("*"),k=n.length;while(k--){g(n[k])}if(m&&m.toElement){m=m.toElement()}if(Object.isElement(m)){return l.update().insert(m)}m=Object.toHTML(m);var j=l.tagName.toUpperCase();if(j==="SCRIPT"&&f){l.text=m;return l}if(c){if(j in Element._insertionTranslations.tags){while(l.firstChild){l.removeChild(l.firstChild)}Element._getContentFromAnonymousElement(j,m.stripScripts()).each(function(i){l.appendChild(i)})}else{if(a&&Object.isString(m)&&m.indexOf("<link")>-1){while(l.firstChild){l.removeChild(l.firstChild)}var h=Element._getContentFromAnonymousElement(j,m.stripScripts(),true);h.each(function(i){l.appendChild(i)})}else{l.innerHTML=m.stripScripts()}}}else{l.innerHTML=m.stripScripts()}m.evalScripts.bind(m).defer();return l}return e})(),replace:function(b,c){b=$(b);if(c&&c.toElement){c=c.toElement()}else{if(!Object.isElement(c)){c=Object.toHTML(c);var a=b.ownerDocument.createRange();a.selectNode(b);c.evalScripts.bind(c).defer();c=a.createContextualFragment(c.stripScripts())}}b.parentNode.replaceChild(c,b);return b},insert:function(c,e){c=$(c);if(Object.isString(e)||Object.isNumber(e)||Object.isElement(e)||(e&&(e.toElement||e.toHTML))){e={bottom:e}}var d,f,b,g;for(var a in e){d=e[a];a=a.toLowerCase();f=Element._insertionTranslations[a];if(d&&d.toElement){d=d.toElement()}if(Object.isElement(d)){f(c,d);continue}d=Object.toHTML(d);b=((a=="before"||a=="after")?c.parentNode:c).tagName.toUpperCase();g=Element._getContentFromAnonymousElement(b,d.stripScripts());if(a=="top"||a=="after"){g.reverse()}g.each(f.curry(c));d.evalScripts.bind(d).defer()}return c},wrap:function(b,c,a){b=$(b);if(Object.isElement(c)){$(c).writeAttribute(a||{})}else{if(Object.isString(c)){c=new Element(c,a)}else{c=new Element("div",c)}}if(b.parentNode){b.parentNode.replaceChild(c,b)}c.appendChild(b);return c},inspect:function(b){b=$(b);var a="<"+b.tagName.toLowerCase();$H({id:"id",className:"class"}).each(function(f){var e=f.first(),c=f.last(),d=(b[e]||"").toString();if(d){a+=" "+c+"="+d.inspect(true)}});return a+">"},recursivelyCollect:function(a,c,d){a=$(a);d=d||-1;var b=[];while(a=a[c]){if(a.nodeType==1){b.push(Element.extend(a))}if(b.length==d){break}}return b},ancestors:function(a){return Element.recursivelyCollect(a,"parentNode")},descendants:function(a){return Element.select(a,"*")},firstDescendant:function(a){a=$(a).firstChild;while(a&&a.nodeType!=1){a=a.nextSibling}return $(a)},immediateDescendants:function(b){var a=[],c=$(b).firstChild;while(c){if(c.nodeType===1){a.push(Element.extend(c))}c=c.nextSibling}return a},previousSiblings:function(a,b){return Element.recursivelyCollect(a,"previousSibling")},nextSiblings:function(a){return Element.recursivelyCollect(a,"nextSibling")},siblings:function(a){a=$(a);return Element.previousSiblings(a).reverse().concat(Element.nextSiblings(a))},match:function(b,a){b=$(b);if(Object.isString(a)){return Prototype.Selector.match(b,a)}return a.match(b)},up:function(b,d,a){b=$(b);if(arguments.length==1){return $(b.parentNode)}var c=Element.ancestors(b);return Object.isNumber(d)?c[d]:Prototype.Selector.find(c,d,a)},down:function(b,c,a){b=$(b);if(arguments.length==1){return Element.firstDescendant(b)}return Object.isNumber(c)?Element.descendants(b)[c]:Element.select(b,c)[a||0]},previous:function(b,c,a){b=$(b);if(Object.isNumber(c)){a=c,c=false}if(!Object.isNumber(a)){a=0}if(c){return Prototype.Selector.find(b.previousSiblings(),c,a)}else{return b.recursivelyCollect("previousSibling",a+1)[a]}},next:function(b,d,a){b=$(b);if(Object.isNumber(d)){a=d,d=false}if(!Object.isNumber(a)){a=0}if(d){return Prototype.Selector.find(b.nextSiblings(),d,a)}else{var c=Object.isNumber(a)?a+1:1;return b.recursivelyCollect("nextSibling",a+1)[a]}},select:function(a){a=$(a);var b=Array.prototype.slice.call(arguments,1).join(", ");return Prototype.Selector.select(b,a)},adjacent:function(a){a=$(a);var b=Array.prototype.slice.call(arguments,1).join(", ");return Prototype.Selector.select(b,a.parentNode).without(a)},identify:function(a){a=$(a);var b=Element.readAttribute(a,"id");if(b){return b}do{b="anonymous_element_"+Element.idCounter++}while($(b));Element.writeAttribute(a,"id",b);return b},readAttribute:function(c,a){c=$(c);if(Prototype.Browser.IE){var b=Element._attributeTranslations.read;if(b.values[a]){return b.values[a](c,a)}if(b.names[a]){a=b.names[a]}if(a.include(":")){return(!c.attributes||!c.attributes[a])?null:c.attributes[a].value}}return c.getAttribute(a)},writeAttribute:function(e,c,f){e=$(e);var b={},d=Element._attributeTranslations.write;if(typeof c=="object"){b=c}else{b[c]=Object.isUndefined(f)?true:f}for(var a in b){c=d.names[a]||a;f=b[a];if(d.values[a]){c=d.values[a](e,f)}if(f===false||f===null){e.removeAttribute(c)}else{if(f===true){e.setAttribute(c,c)}else{e.setAttribute(c,f)}}}return e},getHeight:function(a){return Element.getDimensions(a).height},getWidth:function(a){return Element.getDimensions(a).width},classNames:function(a){return new Element.ClassNames(a)},hasClassName:function(a,b){if(!(a=$(a))){return}var c=a.className;return(c.length>0&&(c==b||new RegExp("(^|\\s)"+b+"(\\s|$)").test(c)))},addClassName:function(a,b){if(!(a=$(a))){return}if(!Element.hasClassName(a,b)){a.className+=(a.className?" ":"")+b}return a},removeClassName:function(a,b){if(!(a=$(a))){return}a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," ").strip();return a},toggleClassName:function(a,b){if(!(a=$(a))){return}return Element[Element.hasClassName(a,b)?"removeClassName":"addClassName"](a,b)},cleanWhitespace:function(b){b=$(b);var c=b.firstChild;while(c){var a=c.nextSibling;if(c.nodeType==3&&!/\S/.test(c.nodeValue)){b.removeChild(c)}c=a}return b},empty:function(a){return $(a).innerHTML.blank()},descendantOf:function(b,a){b=$(b),a=$(a);if(b.compareDocumentPosition){return(b.compareDocumentPosition(a)&8)===8}if(a.contains){return a.contains(b)&&a!==b}while(b=b.parentNode){if(b==a){return true}}return false},scrollTo:function(a){a=$(a);var b=Element.cumulativeOffset(a);window.scrollTo(b[0],b[1]);return a},getStyle:function(b,c){b=$(b);c=c=="float"?"cssFloat":c.camelize();var d=b.style[c];if(!d||d=="auto"){var a=document.defaultView.getComputedStyle(b,null);d=a?a[c]:null}if(c=="opacity"){return d?parseFloat(d):1}return d=="auto"?null:d},getOpacity:function(a){return $(a).getStyle("opacity")},setStyle:function(b,c){b=$(b);var e=b.style,a;if(Object.isString(c)){b.style.cssText+=";"+c;return c.include("opacity")?b.setOpacity(c.match(/opacity:\s*(\d?\.?\d*)/)[1]):b}for(var d in c){if(d=="opacity"){b.setOpacity(c[d])}else{e[(d=="float"||d=="cssFloat")?(Object.isUndefined(e.styleFloat)?"cssFloat":"styleFloat"):d]=c[d]}}return b},setOpacity:function(a,b){a=$(a);a.style.opacity=(b==1||b==="")?"":(b<0.00001)?0:b;return a},makePositioned:function(a){a=$(a);var b=Element.getStyle(a,"position");if(b=="static"||!b){a._madePositioned=true;a.style.position="relative";if(Prototype.Browser.Opera){a.style.top=0;a.style.left=0}}return a},undoPositioned:function(a){a=$(a);if(a._madePositioned){a._madePositioned=undefined;a.style.position=a.style.top=a.style.left=a.style.bottom=a.style.right=""}return a},makeClipping:function(a){a=$(a);if(a._overflow){return a}a._overflow=Element.getStyle(a,"overflow")||"auto";if(a._overflow!=="hidden"){a.style.overflow="hidden"}return a},undoClipping:function(a){a=$(a);if(!a._overflow){return a}a.style.overflow=a._overflow=="auto"?"":a._overflow;a._overflow=null;return a},clonePosition:function(b,d){var a=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{});d=$(d);var e=Element.viewportOffset(d),f=[0,0],c=null;b=$(b);if(Element.getStyle(b,"position")=="absolute"){c=Element.getOffsetParent(b);f=Element.viewportOffset(c)}if(c==document.body){f[0]-=document.body.offsetLeft;f[1]-=document.body.offsetTop}if(a.setLeft){b.style.left=(e[0]-f[0]+a.offsetLeft)+"px"}if(a.setTop){b.style.top=(e[1]-f[1]+a.offsetTop)+"px"}if(a.setWidth){b.style.width=d.offsetWidth+"px"}if(a.setHeight){b.style.height=d.offsetHeight+"px"}return b}};Object.extend(Element.Methods,{getElementsBySelector:Element.Methods.select,childElements:Element.Methods.immediateDescendants});Element._attributeTranslations={write:{names:{className:"class",htmlFor:"for"},values:{}}};if(Prototype.Browser.Opera){Element.Methods.getStyle=Element.Methods.getStyle.wrap(function(d,b,c){switch(c){case"height":case"width":if(!Element.visible(b)){return null}var e=parseInt(d(b,c),10);if(e!==b["offset"+c.capitalize()]){return e+"px"}var a;if(c==="height"){a=["border-top-width","padding-top","padding-bottom","border-bottom-width"]}else{a=["border-left-width","padding-left","padding-right","border-right-width"]}return a.inject(e,function(f,g){var h=d(b,g);return h===null?f:f-parseInt(h,10)})+"px";default:return d(b,c)}});Element.Methods.readAttribute=Element.Methods.readAttribute.wrap(function(c,a,b){if(b==="title"){return a.title}return c(a,b)})}else{if(Prototype.Browser.IE){Element.Methods.getStyle=function(a,b){a=$(a);b=(b=="float"||b=="cssFloat")?"styleFloat":b.camelize();var c=a.style[b];if(!c&&a.currentStyle){c=a.currentStyle[b]}if(b=="opacity"){if(c=(a.getStyle("filter")||"").match(/alpha\(opacity=(.*)\)/)){if(c[1]){return parseFloat(c[1])/100}}return 1}if(c=="auto"){if((b=="width"||b=="height")&&(a.getStyle("display")!="none")){return a["offset"+b.capitalize()]+"px"}return null}return c};Element.Methods.setOpacity=function(b,e){function f(g){return g.replace(/alpha\([^\)]*\)/gi,"")}b=$(b);var a=b.currentStyle;if((a&&!a.hasLayout)||(!a&&b.style.zoom=="normal")){b.style.zoom=1}var d=b.getStyle("filter"),c=b.style;if(e==1||e===""){(d=f(d))?c.filter=d:c.removeAttribute("filter");return b}else{if(e<0.00001){e=0}}c.filter=f(d)+"alpha(opacity="+(e*100)+")";return b};Element._attributeTranslations=(function(){var b="className",a="for",c=document.createElement("div");c.setAttribute(b,"x");if(c.className!=="x"){c.setAttribute("class","x");if(c.className==="x"){b="class"}}c=null;c=document.createElement("label");c.setAttribute(a,"x");if(c.htmlFor!=="x"){c.setAttribute("htmlFor","x");if(c.htmlFor==="x"){a="htmlFor"}}c=null;return{read:{names:{"class":b,className:b,"for":a,htmlFor:a},values:{_getAttr:function(d,e){return d.getAttribute(e)},_getAttr2:function(d,e){return d.getAttribute(e,2)},_getAttrNode:function(d,f){var e=d.getAttributeNode(f);return e?e.value:""},_getEv:(function(){var d=document.createElement("div"),g;d.onclick=Prototype.emptyFunction;var e=d.getAttribute("onclick");if(String(e).indexOf("{")>-1){g=function(f,h){h=f.getAttribute(h);if(!h){return null}h=h.toString();h=h.split("{")[1];h=h.split("}")[0];return h.strip()}}else{if(e===""){g=function(f,h){h=f.getAttribute(h);if(!h){return null}return h.strip()}}}d=null;return g})(),_flag:function(d,e){return $(d).hasAttribute(e)?e:null},style:function(d){return d.style.cssText.toLowerCase()},title:function(d){return d.title}}}}})();Element._attributeTranslations.write={names:Object.extend({cellpadding:"cellPadding",cellspacing:"cellSpacing"},Element._attributeTranslations.read.names),values:{checked:function(a,b){a.checked=!!b},style:function(a,b){a.style.cssText=b?b:""}}};Element._attributeTranslations.has={};$w("colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder").each(function(a){Element._attributeTranslations.write.names[a.toLowerCase()]=a;Element._attributeTranslations.has[a.toLowerCase()]=a});(function(a){Object.extend(a,{href:a._getAttr2,src:a._getAttr2,type:a._getAttr,action:a._getAttrNode,disabled:a._flag,checked:a._flag,readonly:a._flag,multiple:a._flag,onload:a._getEv,onunload:a._getEv,onclick:a._getEv,ondblclick:a._getEv,onmousedown:a._getEv,onmouseup:a._getEv,onmouseover:a._getEv,onmousemove:a._getEv,onmouseout:a._getEv,onfocus:a._getEv,onblur:a._getEv,onkeypress:a._getEv,onkeydown:a._getEv,onkeyup:a._getEv,onsubmit:a._getEv,onreset:a._getEv,onselect:a._getEv,onchange:a._getEv})})(Element._attributeTranslations.read.values);if(Prototype.BrowserFeatures.ElementExtensions){(function(){function a(e){var b=e.getElementsByTagName("*"),d=[];for(var c=0,f;f=b[c];c++){if(f.tagName!=="!"){d.push(f)}}return d}Element.Methods.down=function(c,d,b){c=$(c);if(arguments.length==1){return c.firstDescendant()}return Object.isNumber(d)?a(c)[d]:Element.select(c,d)[b||0]}})()}}else{if(Prototype.Browser.Gecko&&/rv:1\.8\.0/.test(navigator.userAgent)){Element.Methods.setOpacity=function(a,b){a=$(a);a.style.opacity=(b==1)?0.999999:(b==="")?"":(b<0.00001)?0:b;return a}}else{if(Prototype.Browser.WebKit){Element.Methods.setOpacity=function(a,b){a=$(a);a.style.opacity=(b==1||b==="")?"":(b<0.00001)?0:b;if(b==1){if(a.tagName.toUpperCase()=="IMG"&&a.width){a.width++;a.width--}else{try{var d=document.createTextNode(" ");a.appendChild(d);a.removeChild(d)}catch(c){}}}return a}}}}}if("outerHTML" in document.documentElement){Element.Methods.replace=function(c,e){c=$(c);if(e&&e.toElement){e=e.toElement()}if(Object.isElement(e)){c.parentNode.replaceChild(e,c);return c}e=Object.toHTML(e);var d=c.parentNode,b=d.tagName.toUpperCase();if(Element._insertionTranslations.tags[b]){var f=c.next(),a=Element._getContentFromAnonymousElement(b,e.stripScripts());d.removeChild(c);if(f){a.each(function(g){d.insertBefore(g,f)})}else{a.each(function(g){d.appendChild(g)})}}else{c.outerHTML=e.stripScripts()}e.evalScripts.bind(e).defer();return c}}Element._returnOffset=function(b,c){var a=[b,c];a.left=b;a.top=c;return a};Element._getContentFromAnonymousElement=function(e,d,f){var g=new Element("div"),c=Element._insertionTranslations.tags[e];var a=false;if(c){a=true}else{if(f){a=true;c=["","",0]}}if(a){g.innerHTML="&nbsp;"+c[0]+d+c[1];g.removeChild(g.firstChild);for(var b=c[2];b--;){g=g.firstChild}}else{g.innerHTML=d}return $A(g.childNodes)};Element._insertionTranslations={before:function(a,b){a.parentNode.insertBefore(b,a)},top:function(a,b){a.insertBefore(b,a.firstChild)},bottom:function(a,b){a.appendChild(b)},after:function(a,b){a.parentNode.insertBefore(b,a.nextSibling)},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}};(function(){var a=Element._insertionTranslations.tags;Object.extend(a,{THEAD:a.TBODY,TFOOT:a.TBODY,TH:a.TD})})();Element.Methods.Simulated={hasAttribute:function(a,c){c=Element._attributeTranslations.has[c]||c;var b=$(a).getAttributeNode(c);return !!(b&&b.specified)}};Element.Methods.ByTag={};Object.extend(Element,Element.Methods);(function(a){if(!Prototype.BrowserFeatures.ElementExtensions&&a.__proto__){window.HTMLElement={};window.HTMLElement.prototype=a.__proto__;Prototype.BrowserFeatures.ElementExtensions=true}a=null})(document.createElement("div"));Element.extend=(function(){function c(g){if(typeof window.Element!="undefined"){var i=window.Element.prototype;if(i){var k="_"+(Math.random()+"").slice(2),h=document.createElement(g);i[k]="x";var j=(h[k]!=="x");delete i[k];h=null;return j}}return false}function b(h,g){for(var j in g){var i=g[j];if(Object.isFunction(i)&&!(j in h)){h[j]=i.methodize()}}}var d=c("object");if(Prototype.BrowserFeatures.SpecificElementExtensions){if(d){return function(h){if(h&&typeof h._extendedByPrototype=="undefined"){var g=h.tagName;if(g&&(/^(?:object|applet|embed)$/i.test(g))){b(h,Element.Methods);b(h,Element.Methods.Simulated);b(h,Element.Methods.ByTag[g.toUpperCase()])}}return h}}return Prototype.K}var a={},e=Element.Methods.ByTag;var f=Object.extend(function(i){if(!i||typeof i._extendedByPrototype!="undefined"||i.nodeType!=1||i==window){return i}var g=Object.clone(a),h=i.tagName.toUpperCase();if(e[h]){Object.extend(g,e[h])}b(i,g);i._extendedByPrototype=Prototype.emptyFunction;return i},{refresh:function(){if(!Prototype.BrowserFeatures.ElementExtensions){Object.extend(a,Element.Methods);Object.extend(a,Element.Methods.Simulated)}}});f.refresh();return f})();if(document.documentElement.hasAttribute){Element.hasAttribute=function(a,b){return a.hasAttribute(b)}}else{Element.hasAttribute=Element.Methods.Simulated.hasAttribute}Element.addMethods=function(c){var i=Prototype.BrowserFeatures,d=Element.Methods.ByTag;if(!c){Object.extend(Form,Form.Methods);Object.extend(Form.Element,Form.Element.Methods);Object.extend(Element.Methods.ByTag,{FORM:Object.clone(Form.Methods),INPUT:Object.clone(Form.Element.Methods),SELECT:Object.clone(Form.Element.Methods),TEXTAREA:Object.clone(Form.Element.Methods),BUTTON:Object.clone(Form.Element.Methods)})}if(arguments.length==2){var b=c;c=arguments[1]}if(!b){Object.extend(Element.Methods,c||{})}else{if(Object.isArray(b)){b.each(g)}else{g(b)}}function g(k){k=k.toUpperCase();if(!Element.Methods.ByTag[k]){Element.Methods.ByTag[k]={}}Object.extend(Element.Methods.ByTag[k],c)}function a(m,l,k){k=k||false;for(var o in m){var n=m[o];if(!Object.isFunction(n)){continue}if(!k||!(o in l)){l[o]=n.methodize()}}}function e(n){var k;var m={OPTGROUP:"OptGroup",TEXTAREA:"TextArea",P:"Paragraph",FIELDSET:"FieldSet",UL:"UList",OL:"OList",DL:"DList",DIR:"Directory",H1:"Heading",H2:"Heading",H3:"Heading",H4:"Heading",H5:"Heading",H6:"Heading",Q:"Quote",INS:"Mod",DEL:"Mod",A:"Anchor",IMG:"Image",CAPTION:"TableCaption",COL:"TableCol",COLGROUP:"TableCol",THEAD:"TableSection",TFOOT:"TableSection",TBODY:"TableSection",TR:"TableRow",TH:"TableCell",TD:"TableCell",FRAMESET:"FrameSet",IFRAME:"IFrame"};if(m[n]){k="HTML"+m[n]+"Element"}if(window[k]){return window[k]}k="HTML"+n+"Element";if(window[k]){return window[k]}k="HTML"+n.capitalize()+"Element";if(window[k]){return window[k]}var l=document.createElement(n),o=l.__proto__||l.constructor.prototype;l=null;return o}var h=window.HTMLElement?HTMLElement.prototype:Element.prototype;if(i.ElementExtensions){a(Element.Methods,h);a(Element.Methods.Simulated,h,true)}if(i.SpecificElementExtensions){for(var j in Element.Methods.ByTag){var f=e(j);if(Object.isUndefined(f)){continue}a(d[j],f.prototype)}}Object.extend(Element,Element.Methods);delete Element.ByTag;if(Element.extend.refresh){Element.extend.refresh()}Element.cache={}};document.viewport={getDimensions:function(){return{width:this.getWidth(),height:this.getHeight()}},getScrollOffsets:function(){return Element._returnOffset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)}};(function(b){var g=Prototype.Browser,e=document,c,d={};function a(){if(g.WebKit&&!e.evaluate){return document}if(g.Opera&&window.parseFloat(window.opera.version())<9.5){return document.body}return document.documentElement}function f(h){if(!c){c=a()}d[h]="client"+h;b["get"+h]=function(){return c[d[h]]};return b["get"+h]()}b.getWidth=f.curry("Width");b.getHeight=f.curry("Height")})(document.viewport);Element.Storage={UID:1};Element.addMethods({getStorage:function(b){if(!(b=$(b))){return}var a;if(b===window){a=0}else{if(typeof b._prototypeUID==="undefined"){b._prototypeUID=Element.Storage.UID++}a=b._prototypeUID}if(!Element.Storage[a]){Element.Storage[a]=$H()}return Element.Storage[a]},store:function(b,a,c){if(!(b=$(b))){return}if(arguments.length===2){Element.getStorage(b).update(a)}else{Element.getStorage(b).set(a,c)}return b},retrieve:function(c,b,a){if(!(c=$(c))){return}var e=Element.getStorage(c),d=e.get(b);if(Object.isUndefined(d)){e.set(b,a);d=a}return d},clone:function(c,a){if(!(c=$(c))){return}var e=c.cloneNode(a);e._prototypeUID=void 0;if(a){var d=Element.select(e,"*"),b=d.length;while(b--){d[b]._prototypeUID=void 0}}return Element.extend(e)},purge:function(c){if(!(c=$(c))){return}var a=Element._purgeElement;a(c);var d=c.getElementsByTagName("*"),b=d.length;while(b--){a(d[b])}return null}});(function(){function h(v){var u=v.match(/^(\d+)%?$/i);if(!u){return null}return(Number(u[1])/100)}function o(F,G,v){var y=null;if(Object.isElement(F)){y=F;F=y.getStyle(G)}if(F===null){return null}if((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(F)){return window.parseFloat(F)}var A=F.include("%"),w=(v===document.viewport);if(/\d/.test(F)&&y&&y.runtimeStyle&&!(A&&w)){var u=y.style.left,E=y.runtimeStyle.left;y.runtimeStyle.left=y.currentStyle.left;y.style.left=F||0;F=y.style.pixelLeft;y.style.left=u;y.runtimeStyle.left=E;return F}if(y&&A){v=v||y.parentNode;var x=h(F);var B=null;var z=y.getStyle("position");var D=G.include("left")||G.include("right")||G.include("width");var C=G.include("top")||G.include("bottom")||G.include("height");if(v===document.viewport){if(D){B=document.viewport.getWidth()}else{if(C){B=document.viewport.getHeight()}}}else{if(D){B=$(v).measure("width")}else{if(C){B=$(v).measure("height")}}}return(B===null)?0:B*x}return 0}function g(u){if(Object.isString(u)&&u.endsWith("px")){return u}return u+"px"}function j(v){var u=v;while(v&&v.parentNode){var w=v.getStyle("display");if(w==="none"){return false}v=$(v.parentNode)}return true}var d=Prototype.K;if("currentStyle" in document.documentElement){d=function(u){if(!u.currentStyle.hasLayout){u.style.zoom=1}return u}}function f(u){if(u.include("border")){u=u+"-width"}return u.camelize()}Element.Layout=Class.create(Hash,{initialize:function($super,v,u){$super();this.element=$(v);Element.Layout.PROPERTIES.each(function(w){this._set(w,null)},this);if(u){this._preComputing=true;this._begin();Element.Layout.PROPERTIES.each(this._compute,this);this._end();this._preComputing=false}},_set:function(v,u){return Hash.prototype.set.call(this,v,u)},set:function(v,u){throw"Properties of Element.Layout are read-only."},get:function($super,v){var u=$super(v);return u===null?this._compute(v):u},_begin:function(){if(this._prepared){return}var y=this.element;if(j(y)){this._prepared=true;return}var A={position:y.style.position||"",width:y.style.width||"",visibility:y.style.visibility||"",display:y.style.display||""};y.store("prototype_original_styles",A);var B=y.getStyle("position"),u=y.getStyle("width");if(u==="0px"||u===null){y.style.display="block";u=y.getStyle("width")}var v=(B==="fixed")?document.viewport:y.parentNode;y.setStyle({position:"absolute",visibility:"hidden",display:"block"});var w=y.getStyle("width");var x;if(u&&(w===u)){x=o(y,"width",v)}else{if(B==="absolute"||B==="fixed"){x=o(y,"width",v)}else{var C=y.parentNode,z=$(C).getLayout();x=z.get("width")-this.get("margin-left")-this.get("border-left")-this.get("padding-left")-this.get("padding-right")-this.get("border-right")-this.get("margin-right")}}y.setStyle({width:x+"px"});this._prepared=true},_end:function(){var v=this.element;var u=v.retrieve("prototype_original_styles");v.store("prototype_original_styles",null);v.setStyle(u);this._prepared=false},_compute:function(v){var u=Element.Layout.COMPUTATIONS;if(!(v in u)){throw"Property not found."}return this._set(v,u[v].call(this,this.element))},toObject:function(){var u=$A(arguments);var v=(u.length===0)?Element.Layout.PROPERTIES:u.join(" ").split(" ");var w={};v.each(function(x){if(!Element.Layout.PROPERTIES.include(x)){return}var y=this.get(x);if(y!=null){w[x]=y}},this);return w},toHash:function(){var u=this.toObject.apply(this,arguments);return new Hash(u)},toCSS:function(){var u=$A(arguments);var w=(u.length===0)?Element.Layout.PROPERTIES:u.join(" ").split(" ");var v={};w.each(function(x){if(!Element.Layout.PROPERTIES.include(x)){return}if(Element.Layout.COMPOSITE_PROPERTIES.include(x)){return}var y=this.get(x);if(y!=null){v[f(x)]=y+"px"}},this);return v},inspect:function(){return"#<Element.Layout>"}});Object.extend(Element.Layout,{PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),COMPUTATIONS:{height:function(w){if(!this._preComputing){this._begin()}var u=this.get("border-box-height");if(u<=0){if(!this._preComputing){this._end()}return 0}var x=this.get("border-top"),v=this.get("border-bottom");var z=this.get("padding-top"),y=this.get("padding-bottom");if(!this._preComputing){this._end()}return u-x-v-z-y},width:function(w){if(!this._preComputing){this._begin()}var v=this.get("border-box-width");if(v<=0){if(!this._preComputing){this._end()}return 0}var z=this.get("border-left"),u=this.get("border-right");var x=this.get("padding-left"),y=this.get("padding-right");if(!this._preComputing){this._end()}return v-z-u-x-y},"padding-box-height":function(v){var u=this.get("height"),x=this.get("padding-top"),w=this.get("padding-bottom");return u+x+w},"padding-box-width":function(u){var v=this.get("width"),w=this.get("padding-left"),x=this.get("padding-right");return v+w+x},"border-box-height":function(v){if(!this._preComputing){this._begin()}var u=v.offsetHeight;if(!this._preComputing){this._end()}return u},"border-box-width":function(u){if(!this._preComputing){this._begin()}var v=u.offsetWidth;if(!this._preComputing){this._end()}return v},"margin-box-height":function(v){var u=this.get("border-box-height"),w=this.get("margin-top"),x=this.get("margin-bottom");if(u<=0){return 0}return u+w+x},"margin-box-width":function(w){var v=this.get("border-box-width"),x=this.get("margin-left"),u=this.get("margin-right");if(v<=0){return 0}return v+x+u},top:function(u){var v=u.positionedOffset();return v.top},bottom:function(u){var x=u.positionedOffset(),v=u.getOffsetParent(),w=v.measure("height");var y=this.get("border-box-height");return w-y-x.top},left:function(u){var v=u.positionedOffset();return v.left},right:function(w){var y=w.positionedOffset(),x=w.getOffsetParent(),u=x.measure("width");var v=this.get("border-box-width");return u-v-y.left},"padding-top":function(u){return o(u,"paddingTop")},"padding-bottom":function(u){return o(u,"paddingBottom")},"padding-left":function(u){return o(u,"paddingLeft")},"padding-right":function(u){return o(u,"paddingRight")},"border-top":function(u){return o(u,"borderTopWidth")},"border-bottom":function(u){return o(u,"borderBottomWidth")},"border-left":function(u){return o(u,"borderLeftWidth")},"border-right":function(u){return o(u,"borderRightWidth")},"margin-top":function(u){return o(u,"marginTop")},"margin-bottom":function(u){return o(u,"marginBottom")},"margin-left":function(u){return o(u,"marginLeft")},"margin-right":function(u){return o(u,"marginRight")}}});if("getBoundingClientRect" in document.documentElement){Object.extend(Element.Layout.COMPUTATIONS,{right:function(v){var w=d(v.getOffsetParent());var x=v.getBoundingClientRect(),u=w.getBoundingClientRect();return(u.right-x.right).round()},bottom:function(v){var w=d(v.getOffsetParent());var x=v.getBoundingClientRect(),u=w.getBoundingClientRect();return(u.bottom-x.bottom).round()}})}Element.Offset=Class.create({initialize:function(v,u){this.left=v.round();this.top=u.round();this[0]=this.left;this[1]=this.top},relativeTo:function(u){return new Element.Offset(this.left-u.left,this.top-u.top)},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this)},toString:function(){return"[#{left}, #{top}]".interpolate(this)},toArray:function(){return[this.left,this.top]}});function r(v,u){return new Element.Layout(v,u)}function b(u,v){return $(u).getLayout().get(v)}function n(v){v=$(v);var z=Element.getStyle(v,"display");if(z&&z!=="none"){return{width:v.offsetWidth,height:v.offsetHeight}}var w=v.style;var u={visibility:w.visibility,position:w.position,display:w.display};var y={visibility:"hidden",display:"block"};if(u.position!=="fixed"){y.position="absolute"}Element.setStyle(v,y);var x={width:v.offsetWidth,height:v.offsetHeight};Element.setStyle(v,u);return x}function l(u){u=$(u);if(e(u)||c(u)||m(u)||k(u)){return $(document.body)}var v=(Element.getStyle(u,"display")==="inline");if(!v&&u.offsetParent){return $(u.offsetParent)}while((u=u.parentNode)&&u!==document.body){if(Element.getStyle(u,"position")!=="static"){return k(u)?$(document.body):$(u)}}return $(document.body)}function t(v){v=$(v);var u=0,w=0;if(v.parentNode){do{u+=v.offsetTop||0;w+=v.offsetLeft||0;v=v.offsetParent}while(v)}return new Element.Offset(w,u)}function p(v){v=$(v);var w=v.getLayout();var u=0,y=0;do{u+=v.offsetTop||0;y+=v.offsetLeft||0;v=v.offsetParent;if(v){if(m(v)){break}var x=Element.getStyle(v,"position");if(x!=="static"){break}}}while(v);y-=w.get("margin-top");u-=w.get("margin-left");return new Element.Offset(y,u)}function a(v){var u=0,w=0;do{u+=v.scrollTop||0;w+=v.scrollLeft||0;v=v.parentNode}while(v);return new Element.Offset(w,u)}function s(y){v=$(v);var u=0,x=0,w=document.body;var v=y;do{u+=v.offsetTop||0;x+=v.offsetLeft||0;if(v.offsetParent==w&&Element.getStyle(v,"position")=="absolute"){break}}while(v=v.offsetParent);v=y;do{if(v!=w){u-=v.scrollTop||0;x-=v.scrollLeft||0}}while(v=v.parentNode);return new Element.Offset(x,u)}function q(u){u=$(u);if(Element.getStyle(u,"position")==="absolute"){return u}var y=l(u);var x=u.viewportOffset(),v=y.viewportOffset();var z=x.relativeTo(v);var w=u.getLayout();u.store("prototype_absolutize_original_styles",{left:u.getStyle("left"),top:u.getStyle("top"),width:u.getStyle("width"),height:u.getStyle("height")});u.setStyle({position:"absolute",top:z.top+"px",left:z.left+"px",width:w.get("width")+"px",height:w.get("height")+"px"});return u}function i(v){v=$(v);if(Element.getStyle(v,"position")==="relative"){return v}var u=v.retrieve("prototype_absolutize_original_styles");if(u){v.setStyle(u)}return v}if(Prototype.Browser.IE){l=l.wrap(function(w,v){v=$(v);if(e(v)||c(v)||m(v)||k(v)){return $(document.body)}var u=v.getStyle("position");if(u!=="static"){return w(v)}v.setStyle({position:"relative"});var x=w(v);v.setStyle({position:u});return x});p=p.wrap(function(x,v){v=$(v);if(!v.parentNode){return new Element.Offset(0,0)}var u=v.getStyle("position");if(u!=="static"){return x(v)}var w=v.getOffsetParent();if(w&&w.getStyle("position")==="fixed"){d(w)}v.setStyle({position:"relative"});var y=x(v);v.setStyle({position:u});return y})}else{if(Prototype.Browser.Webkit){t=function(v){v=$(v);var u=0,w=0;do{u+=v.offsetTop||0;w+=v.offsetLeft||0;if(v.offsetParent==document.body){if(Element.getStyle(v,"position")=="absolute"){break}}v=v.offsetParent}while(v);return new Element.Offset(w,u)}}}Element.addMethods({getLayout:r,measure:b,getDimensions:n,getOffsetParent:l,cumulativeOffset:t,positionedOffset:p,cumulativeScrollOffset:a,viewportOffset:s,absolutize:q,relativize:i});function m(u){return u.nodeName.toUpperCase()==="BODY"}function k(u){return u.nodeName.toUpperCase()==="HTML"}function e(u){return u.nodeType===Node.DOCUMENT_NODE}function c(u){return u!==document.body&&!Element.descendantOf(u,document.body)}if("getBoundingClientRect" in document.documentElement){Element.addMethods({viewportOffset:function(u){u=$(u);if(c(u)){return new Element.Offset(0,0)}var v=u.getBoundingClientRect(),w=document.documentElement;return new Element.Offset(v.left-w.clientLeft,v.top-w.clientTop)}})}})();window.$$=function(){var a=$A(arguments).join(", ");return Prototype.Selector.select(a,document)};Prototype.Selector=(function(){function a(){throw new Error('Method "Prototype.Selector.select" must be defined.')}function c(){throw new Error('Method "Prototype.Selector.match" must be defined.')}function d(l,m,h){h=h||0;var g=Prototype.Selector.match,k=l.length,f=0,j;for(j=0;j<k;j++){if(g(l[j],m)&&h==f++){return Element.extend(l[j])}}}function e(h){for(var f=0,g=h.length;f<g;f++){Element.extend(h[f])}return h}var b=Prototype.K;return{select:a,match:c,find:d,extendElements:(Element.extend===b)?b:e,extendElement:Element.extend}})();Prototype._original_property=window.Sizzle;
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,j=0,d=Object.prototype.toString,o=false,i=true;[0,0].sort(function(){i=false;return 0});var b=function(E,u,B,w){B=B||[];var e=u=u||document;if(u.nodeType!==1&&u.nodeType!==9){return[]}if(!E||typeof E!=="string"){return B}var C=[],D,z,I,H,A,t,s=true,x=p(u),G=E;while((q.exec(""),D=q.exec(G))!==null){G=D[3];C.push(D[1]);if(D[2]){t=D[3];break}}if(C.length>1&&k.exec(E)){if(C.length===2&&f.relative[C[0]]){z=g(C[0]+C[1],u)}else{z=f.relative[C[0]]?[u]:b(C.shift(),u);while(C.length){E=C.shift();if(f.relative[E]){E+=C.shift()}z=g(E,z)}}}else{if(!w&&C.length>1&&u.nodeType===9&&!x&&f.match.ID.test(C[0])&&!f.match.ID.test(C[C.length-1])){var J=b.find(C.shift(),u,x);u=J.expr?b.filter(J.expr,J.set)[0]:J.set[0]}if(u){var J=w?{expr:C.pop(),set:a(w)}:b.find(C.pop(),C.length===1&&(C[0]==="~"||C[0]==="+")&&u.parentNode?u.parentNode:u,x);z=J.expr?b.filter(J.expr,J.set):J.set;if(C.length>0){I=a(z)}else{s=false}while(C.length){var v=C.pop(),y=v;if(!f.relative[v]){v=""}else{y=C.pop()}if(y==null){y=u}f.relative[v](I,y,x)}}else{I=C=[]}}if(!I){I=z}if(!I){throw"Syntax error, unrecognized expression: "+(v||E)}if(d.call(I)==="[object Array]"){if(!s){B.push.apply(B,I)}else{if(u&&u.nodeType===1){for(var F=0;I[F]!=null;F++){if(I[F]&&(I[F]===true||I[F].nodeType===1&&h(u,I[F]))){B.push(z[F])}}}else{for(var F=0;I[F]!=null;F++){if(I[F]&&I[F].nodeType===1){B.push(z[F])}}}}}else{a(I,B)}if(t){b(t,e,B,w);b.uniqueSort(B)}return B};b.uniqueSort=function(s){if(c){o=i;s.sort(c);if(o){for(var e=1;e<s.length;e++){if(s[e]===s[e-1]){s.splice(e--,1)}}}}return s};b.matches=function(e,s){return b(e,null,null,s)};b.find=function(y,e,z){var x,v;if(!y){return[]}for(var u=0,t=f.order.length;u<t;u++){var w=f.order[u],v;if((v=f.leftMatch[w].exec(y))){var s=v[1];v.splice(1,1);if(s.substr(s.length-1)!=="\\"){v[1]=(v[1]||"").replace(/\\/g,"");x=f.find[w](v,e,z);if(x!=null){y=y.replace(f.match[w],"");break}}}}if(!x){x=e.getElementsByTagName("*")}return{set:x,expr:y}};b.filter=function(B,A,E,u){var t=B,G=[],y=A,w,e,x=A&&A[0]&&p(A[0]);while(B&&A.length){for(var z in f.filter){if((w=f.match[z].exec(B))!=null){var s=f.filter[z],F,D;e=false;if(y==G){G=[]}if(f.preFilter[z]){w=f.preFilter[z](w,y,E,G,u,x);if(!w){e=F=true}else{if(w===true){continue}}}if(w){for(var v=0;(D=y[v])!=null;v++){if(D){F=s(D,w,v,y);var C=u^!!F;if(E&&F!=null){if(C){e=true}else{y[v]=false}}else{if(C){G.push(D);e=true}}}}}if(F!==undefined){if(!E){y=G}B=B.replace(f.match[z],"");if(!e){return[]}break}}}if(B==t){if(e==null){throw"Syntax error, unrecognized expression: "+B}else{break}}t=B}return y};var f=b.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(y,e,x){var v=typeof e==="string",z=v&&!/\W/.test(e),w=v&&!z;if(z&&!x){e=e.toUpperCase()}for(var u=0,t=y.length,s;u<t;u++){if((s=y[u])){while((s=s.previousSibling)&&s.nodeType!==1){}y[u]=w||s&&s.nodeName===e?s||false:s===e}}if(w){b.filter(e,y,true)}},">":function(x,s,y){var v=typeof s==="string";if(v&&!/\W/.test(s)){s=y?s:s.toUpperCase();for(var t=0,e=x.length;t<e;t++){var w=x[t];if(w){var u=w.parentNode;x[t]=u.nodeName===s?u:false}}}else{for(var t=0,e=x.length;t<e;t++){var w=x[t];if(w){x[t]=v?w.parentNode:w.parentNode===s}}if(v){b.filter(s,x,true)}}},"":function(u,s,w){var t=j++,e=r;if(!/\W/.test(s)){var v=s=w?s:s.toUpperCase();e=n}e("parentNode",s,t,u,v,w)},"~":function(u,s,w){var t=j++,e=r;if(typeof s==="string"&&!/\W/.test(s)){var v=s=w?s:s.toUpperCase();e=n}e("previousSibling",s,t,u,v,w)}},find:{ID:function(s,t,u){if(typeof t.getElementById!=="undefined"&&!u){var e=t.getElementById(s[1]);return e?[e]:[]}},NAME:function(t,w,x){if(typeof w.getElementsByName!=="undefined"){var s=[],v=w.getElementsByName(t[1]);for(var u=0,e=v.length;u<e;u++){if(v[u].getAttribute("name")===t[1]){s.push(v[u])}}return s.length===0?null:s}},TAG:function(e,s){return s.getElementsByTagName(e[1])}},preFilter:{CLASS:function(u,s,t,e,x,y){u=" "+u[1].replace(/\\/g,"")+" ";if(y){return u}for(var v=0,w;(w=s[v])!=null;v++){if(w){if(x^(w.className&&(" "+w.className+" ").indexOf(u)>=0)){if(!t){e.push(w)}}else{if(t){s[v]=false}}}}return false},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(s,e){for(var t=0;e[t]===false;t++){}return e[t]&&p(e[t])?s[1]:s[1].toUpperCase()},CHILD:function(e){if(e[1]=="nth"){var s=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(e[2]=="even"&&"2n"||e[2]=="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(s[1]+(s[2]||1))-0;e[3]=s[3]-0}e[0]=j++;return e},ATTR:function(v,s,t,e,w,x){var u=v[1].replace(/\\/g,"");if(!x&&f.attrMap[u]){v[1]=f.attrMap[u]}if(v[2]==="~="){v[4]=" "+v[4]+" "}return v},PSEUDO:function(v,s,t,e,w){if(v[1]==="not"){if((q.exec(v[3])||"").length>1||/^\w/.test(v[3])){v[3]=b(v[3],null,null,s)}else{var u=b.filter(v[3],s,t,true^w);if(!t){e.push.apply(e,u)}return false}}else{if(f.match.POS.test(v[0])||f.match.CHILD.test(v[0])){return true}}return v},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(t,s,e){return !!b(e[3],t).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||e.nodeName.toUpperCase()==="BUTTON"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)}},setFilters:{first:function(s,e){return e===0},last:function(t,s,e,u){return s===u.length-1},even:function(s,e){return e%2===0},odd:function(s,e){return e%2===1},lt:function(t,s,e){return s<e[3]-0},gt:function(t,s,e){return s>e[3]-0},nth:function(t,s,e){return e[3]-0==s},eq:function(t,s,e){return e[3]-0==s}},filter:{PSEUDO:function(x,t,u,y){var s=t[1],v=f.filters[s];if(v){return v(x,u,t,y)}else{if(s==="contains"){return(x.textContent||x.innerText||"").indexOf(t[3])>=0}else{if(s==="not"){var w=t[3];for(var u=0,e=w.length;u<e;u++){if(w[u]===x){return false}}return true}}}},CHILD:function(e,u){var x=u[1],s=e;switch(x){case"only":case"first":while((s=s.previousSibling)){if(s.nodeType===1){return false}}if(x=="first"){return true}s=e;case"last":while((s=s.nextSibling)){if(s.nodeType===1){return false}}return true;case"nth":var t=u[2],A=u[3];if(t==1&&A==0){return true}var w=u[0],z=e.parentNode;if(z&&(z.sizcache!==w||!e.nodeIndex)){var v=0;for(s=z.firstChild;s;s=s.nextSibling){if(s.nodeType===1){s.nodeIndex=++v}}z.sizcache=w}var y=e.nodeIndex-A;if(t==0){return y==0}else{return(y%t==0&&y/t>=0)}}},ID:function(s,e){return s.nodeType===1&&s.getAttribute("id")===e},TAG:function(s,e){return(e==="*"&&s.nodeType===1)||s.nodeName===e},CLASS:function(s,e){return(" "+(s.className||s.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(w,u){var t=u[1],e=f.attrHandle[t]?f.attrHandle[t](w):w[t]!=null?w[t]:w.getAttribute(t),x=e+"",v=u[2],s=u[4];return e==null?v==="!=":v==="="?x===s:v==="*="?x.indexOf(s)>=0:v==="~="?(" "+x+" ").indexOf(s)>=0:!s?x&&e!==false:v==="!="?x!=s:v==="^="?x.indexOf(s)===0:v==="$="?x.substr(x.length-s.length)===s:v==="|="?x===s||x.substr(0,s.length+1)===s+"-":false},POS:function(v,s,t,w){var e=s[2],u=f.setFilters[e];if(u){return u(v,t,s,w)}}}};var k=f.match.POS;for(var m in f.match){f.match[m]=new RegExp(f.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source);f.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+f.match[m].source)}var a=function(s,e){s=Array.prototype.slice.call(s,0);if(e){e.push.apply(e,s);return e}return s};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(l){a=function(v,u){var s=u||[];if(d.call(v)==="[object Array]"){Array.prototype.push.apply(s,v)}else{if(typeof v.length==="number"){for(var t=0,e=v.length;t<e;t++){s.push(v[t])}}else{for(var t=0;v[t];t++){s.push(v[t])}}}return s}}var c;if(document.documentElement.compareDocumentPosition){c=function(s,e){if(!s.compareDocumentPosition||!e.compareDocumentPosition){if(s==e){o=true}return 0}var t=s.compareDocumentPosition(e)&4?-1:s===e?0:1;if(t===0){o=true}return t}}else{if("sourceIndex" in document.documentElement){c=function(s,e){if(!s.sourceIndex||!e.sourceIndex){if(s==e){o=true}return 0}var t=s.sourceIndex-e.sourceIndex;if(t===0){o=true}return t}}else{if(document.createRange){c=function(u,s){if(!u.ownerDocument||!s.ownerDocument){if(u==s){o=true}return 0}var t=u.ownerDocument.createRange(),e=s.ownerDocument.createRange();t.setStart(u,0);t.setEnd(u,0);e.setStart(s,0);e.setEnd(s,0);var v=t.compareBoundaryPoints(Range.START_TO_END,e);if(v===0){o=true}return v}}}}(function(){var s=document.createElement("div"),t="script"+(new Date).getTime();s.innerHTML="<a name='"+t+"'/>";var e=document.documentElement;e.insertBefore(s,e.firstChild);if(!!document.getElementById(t)){f.find.ID=function(v,w,x){if(typeof w.getElementById!=="undefined"&&!x){var u=w.getElementById(v[1]);return u?u.id===v[1]||typeof u.getAttributeNode!=="undefined"&&u.getAttributeNode("id").nodeValue===v[1]?[u]:undefined:[]}};f.filter.ID=function(w,u){var v=typeof w.getAttributeNode!=="undefined"&&w.getAttributeNode("id");return w.nodeType===1&&v&&v.nodeValue===u}}e.removeChild(s);e=s=null})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){f.find.TAG=function(s,w){var v=w.getElementsByTagName(s[1]);if(s[1]==="*"){var u=[];for(var t=0;v[t];t++){if(v[t].nodeType===1){u.push(v[t])}}v=u}return v}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){f.attrHandle.href=function(s){return s.getAttribute("href",2)}}e=null})();if(document.querySelectorAll){(function(){var e=b,t=document.createElement("div");t.innerHTML="<p class='TEST'></p>";if(t.querySelectorAll&&t.querySelectorAll(".TEST").length===0){return}b=function(x,w,u,v){w=w||document;if(!v&&w.nodeType===9&&!p(w)){try{return a(w.querySelectorAll(x),u)}catch(y){}}return e(x,w,u,v)};for(var s in e){b[s]=e[s]}t=null})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var e=document.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}f.order.splice(1,0,"CLASS");f.find.CLASS=function(s,t,u){if(typeof t.getElementsByClassName!=="undefined"&&!u){return t.getElementsByClassName(s[1])}};e=null})()}function n(s,x,w,B,y,A){var z=s=="previousSibling"&&!A;for(var u=0,t=B.length;u<t;u++){var e=B[u];if(e){if(z&&e.nodeType===1){e.sizcache=w;e.sizset=u}e=e[s];var v=false;while(e){if(e.sizcache===w){v=B[e.sizset];break}if(e.nodeType===1&&!A){e.sizcache=w;e.sizset=u}if(e.nodeName===x){v=e;break}e=e[s]}B[u]=v}}}function r(s,x,w,B,y,A){var z=s=="previousSibling"&&!A;for(var u=0,t=B.length;u<t;u++){var e=B[u];if(e){if(z&&e.nodeType===1){e.sizcache=w;e.sizset=u}e=e[s];var v=false;while(e){if(e.sizcache===w){v=B[e.sizset];break}if(e.nodeType===1){if(!A){e.sizcache=w;e.sizset=u}if(typeof x!=="string"){if(e===x){v=true;break}}else{if(b.filter(x,[e]).length>0){v=e;break}}}e=e[s]}B[u]=v}}}var h=document.compareDocumentPosition?function(s,e){return s.compareDocumentPosition(e)&16}:function(s,e){return s!==e&&(s.contains?s.contains(e):true)};var p=function(e){return e.nodeType===9&&e.documentElement.nodeName!=="HTML"||!!e.ownerDocument&&e.ownerDocument.documentElement.nodeName!=="HTML"};var g=function(e,y){var u=[],v="",w,t=y.nodeType?[y]:y;while((w=f.match.PSEUDO.exec(e))){v+=w[0];e=e.replace(f.match.PSEUDO,"")}e=f.relative[e]?e+"*":e;for(var x=0,s=t.length;x<s;x++){b(e,t[x],u)}return b.filter(v,u)};window.Sizzle=b})();(function(c){var d=Prototype.Selector.extendElements;function a(e,f){return d(c(e,f||document))}function b(f,e){return c.matches(e,[f]).length==1}Prototype.Selector.engine=c;Prototype.Selector.select=a;Prototype.Selector.match=b})(Sizzle);window.Sizzle=Prototype._original_property;delete Prototype._original_property;var Form={reset:function(a){a=$(a);a.reset();return a},serializeElements:function(h,d){if(typeof d!="object"){d={hash:!!d}}else{if(Object.isUndefined(d.hash)){d.hash=true}}var e,g,a=false,f=d.submit,b,c;if(d.hash){c={};b=function(i,j,k){if(j in i){if(!Object.isArray(i[j])){i[j]=[i[j]]}i[j].push(k)}else{i[j]=k}return i}}else{c="";b=function(i,j,k){return i+(i?"&":"")+encodeURIComponent(j)+"="+encodeURIComponent(k)}}return h.inject(c,function(i,j){if(!j.disabled&&j.name){e=j.name;g=$(j).getValue();if(g!=null&&j.type!="file"&&(j.type!="submit"||(!a&&f!==false&&(!f||e==f)&&(a=true)))){i=b(i,e,g)}}return i})}};Form.Methods={serialize:function(b,a){return Form.serializeElements(Form.getElements(b),a)},getElements:function(e){var f=$(e).getElementsByTagName("*"),d,a=[],c=Form.Element.Serializers;for(var b=0;d=f[b];b++){a.push(d)}return a.inject([],function(g,h){if(c[h.tagName.toLowerCase()]){g.push(Element.extend(h))}return g})},getInputs:function(g,c,d){g=$(g);var a=g.getElementsByTagName("input");if(!c&&!d){return $A(a).map(Element.extend)}for(var e=0,h=[],f=a.length;e<f;e++){var b=a[e];if((c&&b.type!=c)||(d&&b.name!=d)){continue}h.push(Element.extend(b))}return h},disable:function(a){a=$(a);Form.getElements(a).invoke("disable");return a},enable:function(a){a=$(a);Form.getElements(a).invoke("enable");return a},findFirstElement:function(b){var c=$(b).getElements().findAll(function(d){return"hidden"!=d.type&&!d.disabled});var a=c.findAll(function(d){return d.hasAttribute("tabIndex")&&d.tabIndex>=0}).sortBy(function(d){return d.tabIndex}).first();return a?a:c.find(function(d){return/^(?:input|select|textarea)$/i.test(d.tagName)})},focusFirstElement:function(b){b=$(b);var a=b.findFirstElement();if(a){a.activate()}return b},request:function(b,a){b=$(b),a=Object.clone(a||{});var d=a.parameters,c=b.readAttribute("action")||"";if(c.blank()){c=window.location.href}a.parameters=b.serialize(true);if(d){if(Object.isString(d)){d=d.toQueryParams()}Object.extend(a.parameters,d)}if(b.hasAttribute("method")&&!a.method){a.method=b.method}return new Ajax.Request(c,a)}};Form.Element={focus:function(a){$(a).focus();return a},select:function(a){$(a).select();return a}};Form.Element.Methods={serialize:function(a){a=$(a);if(!a.disabled&&a.name){var b=a.getValue();if(b!=undefined){var c={};c[a.name]=b;return Object.toQueryString(c)}}return""},getValue:function(a){a=$(a);var b=a.tagName.toLowerCase();return Form.Element.Serializers[b](a)},setValue:function(a,b){a=$(a);var c=a.tagName.toLowerCase();Form.Element.Serializers[c](a,b);return a},clear:function(a){$(a).value="";return a},present:function(a){return $(a).value!=""},activate:function(a){a=$(a);try{a.focus();if(a.select&&(a.tagName.toLowerCase()!="input"||!(/^(?:button|reset|submit)$/i.test(a.type)))){a.select()}}catch(b){}return a},disable:function(a){a=$(a);a.disabled=true;return a},enable:function(a){a=$(a);a.disabled=false;return a}};var Field=Form.Element;var $F=Form.Element.Methods.getValue;Form.Element.Serializers=(function(){function b(h,i){switch(h.type.toLowerCase()){case"checkbox":case"radio":return f(h,i);default:return e(h,i)}}function f(h,i){if(Object.isUndefined(i)){return h.checked?h.value:null}else{h.checked=!!i}}function e(h,i){if(Object.isUndefined(i)){return h.value}else{h.value=i}}function a(k,n){if(Object.isUndefined(n)){return(k.type==="select-one"?c:d)(k)}var j,l,o=!Object.isArray(n);for(var h=0,m=k.length;h<m;h++){j=k.options[h];l=this.optionValue(j);if(o){if(l==n){j.selected=true;return}}else{j.selected=n.include(l)}}}function c(i){var h=i.selectedIndex;return h>=0?g(i.options[h]):null}function d(l){var h,m=l.length;if(!m){return null}for(var k=0,h=[];k<m;k++){var j=l.options[k];if(j.selected){h.push(g(j))}}return h}function g(h){return Element.hasAttribute(h,"value")?h.value:h.text}return{input:b,inputSelector:f,textarea:e,select:a,selectOne:c,selectMany:d,optionValue:g,button:e}})();Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,a,b,c){$super(c,b);this.element=$(a);this.lastValue=this.getValue()},execute:function(){var a=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(a)?this.lastValue!=a:String(this.lastValue)!=String(a)){this.callback(this.element,a);this.lastValue=a}}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element)}});Abstract.EventObserver=Class.create({initialize:function(a,b){this.element=$(a);this.callback=b;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=="form"){this.registerFormCallbacks()}else{this.registerCallback(this.element)}},onElementEvent:function(){var a=this.getValue();if(this.lastValue!=a){this.callback(this.element,a);this.lastValue=a}},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this)},registerCallback:function(a){if(a.type){switch(a.type.toLowerCase()){case"checkbox":case"radio":Event.observe(a,"click",this.onElementEvent.bind(this));break;default:Event.observe(a,"change",this.onElementEvent.bind(this));break}}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element)}});(function(){var C={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,cache:{}};var f=document.documentElement;var D="onmouseenter" in f&&"onmouseleave" in f;var a=function(E){return false};if(window.attachEvent){if(window.addEventListener){a=function(E){return !(E instanceof window.Event)}}else{a=function(E){return true}}}var r;function A(F,E){return F.which?(F.which===E+1):(F.button===E)}var o={0:1,1:4,2:2};function y(F,E){return F.button===o[E]}function B(F,E){switch(E){case 0:return F.which==1&&!F.metaKey;case 1:return F.which==2||(F.which==1&&F.metaKey);case 2:return F.which==3;default:return false}}if(window.attachEvent){if(!window.addEventListener){r=y}else{r=function(F,E){return a(F)?y(F,E):A(F,E)}}}else{if(Prototype.Browser.WebKit){r=B}else{r=A}}function v(E){return r(E,0)}function t(E){return r(E,1)}function n(E){return r(E,2)}function d(G){G=C.extend(G);var F=G.target,E=G.type,H=G.currentTarget;if(H&&H.tagName){if(E==="load"||E==="error"||(E==="click"&&H.tagName.toLowerCase()==="input"&&H.type==="radio")){F=H}}if(F.nodeType==Node.TEXT_NODE){F=F.parentNode}return Element.extend(F)}function p(F,G){var E=C.element(F);if(!G){return E}while(E){if(Object.isElement(E)&&Prototype.Selector.match(E,G)){return Element.extend(E)}E=E.parentNode}}function s(E){return{x:c(E),y:b(E)}}function c(G){var F=document.documentElement,E=document.body||{scrollLeft:0};return G.pageX||(G.clientX+(F.scrollLeft||E.scrollLeft)-(F.clientLeft||0))}function b(G){var F=document.documentElement,E=document.body||{scrollTop:0};return G.pageY||(G.clientY+(F.scrollTop||E.scrollTop)-(F.clientTop||0))}function q(E){C.extend(E);E.preventDefault();E.stopPropagation();E.stopped=true}C.Methods={isLeftClick:v,isMiddleClick:t,isRightClick:n,element:d,findElement:p,pointer:s,pointerX:c,pointerY:b,stop:q};var x=Object.keys(C.Methods).inject({},function(E,F){E[F]=C.Methods[F].methodize();return E});if(window.attachEvent){function i(F){var E;switch(F.type){case"mouseover":case"mouseenter":E=F.fromElement;break;case"mouseout":case"mouseleave":E=F.toElement;break;default:return null}return Element.extend(E)}var u={stopPropagation:function(){this.cancelBubble=true},preventDefault:function(){this.returnValue=false},inspect:function(){return"[object Event]"}};C.extend=function(F,E){if(!F){return false}if(!a(F)){return F}if(F._extendedByPrototype){return F}F._extendedByPrototype=Prototype.emptyFunction;var G=C.pointer(F);Object.extend(F,{target:F.srcElement||E,relatedTarget:i(F),pageX:G.x,pageY:G.y});Object.extend(F,x);Object.extend(F,u);return F}}else{C.extend=Prototype.K}if(window.addEventListener){C.prototype=window.Event.prototype||document.createEvent("HTMLEvents").__proto__;Object.extend(C.prototype,x)}function m(I,H,J){var G=Element.retrieve(I,"prototype_event_registry");if(Object.isUndefined(G)){e.push(I);G=Element.retrieve(I,"prototype_event_registry",$H())}var E=G.get(H);if(Object.isUndefined(E)){E=[];G.set(H,E)}if(E.pluck("handler").include(J)){return false}var F;if(H.include(":")){F=function(K){if(Object.isUndefined(K.eventName)){return false}if(K.eventName!==H){return false}C.extend(K,I);J.call(I,K)}}else{if(!D&&(H==="mouseenter"||H==="mouseleave")){if(H==="mouseenter"||H==="mouseleave"){F=function(L){C.extend(L,I);var K=L.relatedTarget;while(K&&K!==I){try{K=K.parentNode}catch(M){K=I}}if(K===I){return}J.call(I,L)}}}else{F=function(K){C.extend(K,I);J.call(I,K)}}}F.handler=J;E.push(F);return F}function h(){for(var E=0,F=e.length;E<F;E++){C.stopObserving(e[E]);e[E]=null}}var e=[];if(Prototype.Browser.IE){window.attachEvent("onunload",h)}if(Prototype.Browser.WebKit){window.addEventListener("unload",Prototype.emptyFunction,false)}var l=Prototype.K,g={mouseenter:"mouseover",mouseleave:"mouseout"};if(!D){l=function(E){return(g[E]||E)}}function w(H,G,I){H=$(H);var F=m(H,G,I);if(!F){return H}if(G.include(":")){if(H.addEventListener){H.addEventListener("dataavailable",F,false)}else{H.attachEvent("ondataavailable",F);H.attachEvent("onlosecapture",F)}}else{var E=l(G);if(H.addEventListener){H.addEventListener(E,F,false)}else{H.attachEvent("on"+E,F)}}return H}function k(K,H,L){K=$(K);var G=Element.retrieve(K,"prototype_event_registry");if(!G){return K}if(!H){G.each(function(N){var M=N.key;k(K,M)});return K}var I=G.get(H);if(!I){return K}if(!L){I.each(function(M){k(K,H,M.handler)});return K}var J=I.length,F;while(J--){if(I[J].handler===L){F=I[J];break}}if(!F){return K}if(H.include(":")){if(K.removeEventListener){K.removeEventListener("dataavailable",F,false)}else{K.detachEvent("ondataavailable",F);K.detachEvent("onlosecapture",F)}}else{var E=l(H);if(K.removeEventListener){K.removeEventListener(E,F,false)}else{K.detachEvent("on"+E,F)}}G.set(H,I.without(F));return K}function z(H,G,F,E){H=$(H);if(Object.isUndefined(E)){E=true}if(H==document&&document.createEvent&&!H.dispatchEvent){H=document.documentElement}var I;if(document.createEvent){I=document.createEvent("HTMLEvents");I.initEvent("dataavailable",E,true)}else{I=document.createEventObject();I.eventType=E?"ondataavailable":"onlosecapture"}I.eventName=G;I.memo=F||{};if(document.createEvent){H.dispatchEvent(I)}else{H.fireEvent(I.eventType,I)}return C.extend(I)}C.Handler=Class.create({initialize:function(G,F,E,H){this.element=$(G);this.eventName=F;this.selector=E;this.callback=H;this.handler=this.handleEvent.bind(this)},start:function(){C.observe(this.element,this.eventName,this.handler);return this},stop:function(){C.stopObserving(this.element,this.eventName,this.handler);return this},handleEvent:function(F){var E=C.findElement(F,this.selector);if(E){this.callback.call(this.element,F,E)}}});function j(G,F,E,H){G=$(G);if(Object.isFunction(E)&&Object.isUndefined(H)){H=E,E=null}return new C.Handler(G,F,E,H).start()}Object.extend(C,C.Methods);Object.extend(C,{fire:z,observe:w,stopObserving:k,on:j});Element.addMethods({fire:z,observe:w,stopObserving:k,on:j});Object.extend(document,{fire:z.methodize(),observe:w.methodize(),stopObserving:k.methodize(),on:j.methodize(),loaded:false});if(window.Event){Object.extend(window.Event,C)}else{window.Event=C}})();(function(){var d;function a(){if(document.loaded){return}if(d){window.clearTimeout(d)}document.loaded=true;document.fire("dom:loaded")}function c(){if(document.readyState==="complete"){document.stopObserving("readystatechange",c);a()}}function b(){try{document.documentElement.doScroll("left")}catch(f){d=b.defer();return}a()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",a,false)}else{document.observe("readystatechange",c);if(window==top){d=b.defer()}}Event.observe(window,"load",a)})();Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.Methods.childOf=Element.Methods.descendantOf;var Insertion={Before:function(a,b){return Element.insert(a,{before:b})},Top:function(a,b){return Element.insert(a,{top:b})},Bottom:function(a,b){return Element.insert(a,{bottom:b})},After:function(a,b){return Element.insert(a,{after:b})}};var $continue=new Error('"throw $continue" is deprecated, use "return" instead');var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},within:function(b,a,c){if(this.includeScrollOffsets){return this.withinIncludingScrolloffsets(b,a,c)}this.xcomp=a;this.ycomp=c;this.offset=Element.cumulativeOffset(b);return(c>=this.offset[1]&&c<this.offset[1]+b.offsetHeight&&a>=this.offset[0]&&a<this.offset[0]+b.offsetWidth)},withinIncludingScrolloffsets:function(b,a,d){var c=Element.cumulativeScrollOffset(b);this.xcomp=a+c[0]-this.deltaX;this.ycomp=d+c[1]-this.deltaY;this.offset=Element.cumulativeOffset(b);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+b.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+b.offsetWidth)},overlap:function(b,a){if(!b){return 0}if(b=="vertical"){return((this.offset[1]+a.offsetHeight)-this.ycomp)/a.offsetHeight}if(b=="horizontal"){return((this.offset[0]+a.offsetWidth)-this.xcomp)/a.offsetWidth}},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(a){Position.prepare();return Element.absolutize(a)},relativize:function(a){Position.prepare();return Element.relativize(a)},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(b,c,a){a=a||{};return Element.clonePosition(c,b,a)}};if(!document.getElementsByClassName){document.getElementsByClassName=function(b){function a(c){return c.blank()?null:"[contains(concat(' ', @class, ' '), ' "+c+" ')]"}b.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(c,e){e=e.toString().strip();var d=/\s/.test(e)?$w(e).map(a).join(""):a(e);return d?document._getElementsByXPath(".//*"+d,c):[]}:function(e,f){f=f.toString().strip();var g=[],h=(/\s/.test(f)?$w(f):null);if(!h&&!f){return g}var c=$(e).getElementsByTagName("*");f=" "+f+" ";for(var d=0,k,j;k=c[d];d++){if(k.className&&(j=" "+k.className+" ")&&(j.include(f)||(h&&h.all(function(i){return !i.toString().blank()&&j.include(" "+i+" ")})))){g.push(Element.extend(k))}}return g};return function(d,c){return $(c||document.body).getElementsByClassName(d)}}(Element.Methods)}Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(a){this.element=$(a)},_each:function(a){this.element.className.split(/\s+/).select(function(b){return b.length>0})._each(a)},set:function(a){this.element.className=a},add:function(a){if(this.include(a)){return}this.set($A(this).concat(a).join(" "))},remove:function(a){if(!this.include(a)){return}this.set($A(this).without(a).join(" "))},toString:function(){return $A(this).join(" ")}};Object.extend(Element.ClassNames.prototype,Enumerable);(function(){window.Selector=Class.create({initialize:function(a){this.expression=a.strip()},findElements:function(a){return Prototype.Selector.select(this.expression,a)},match:function(a){return Prototype.Selector.match(a,this.expression)},toString:function(){return this.expression},inspect:function(){return"#<Selector: "+this.expression+">"}});Object.extend(Selector,{matchElements:function(f,g){var a=Prototype.Selector.match,d=[];for(var c=0,e=f.length;c<e;c++){var b=f[c];if(a(b,g)){d.push(Element.extend(b))}}return d},findElement:function(f,g,b){b=b||0;var a=0,d;for(var c=0,e=f.length;c<e;c++){d=f[c];if(Prototype.Selector.match(d,g)&&b===a++){return Element.extend(d)}}},findChildElements:function(b,c){var a=c.toArray().join(", ");return Prototype.Selector.select(a,b||document)}})})();
// Credit Card Validation Javascript
// copyright 12th May 2003, by Stephen Chapman, Felgall Pty Ltd

// You have permission to copy and use this javascript provided that
// the content of the script is not changed in any way.

function validateCreditCard(s) {
    // remove non-numerics
    var v = "0123456789";
    var w = "";
    for (i=0; i < s.length; i++) {
        x = s.charAt(i);
        if (v.indexOf(x,0) != -1)
        w += x;
    }
    // validate number
    j = w.length / 2;
    k = Math.floor(j);
    m = Math.ceil(j) - k;
    c = 0;
    for (i=0; i<k; i++) {
        a = w.charAt(i*2+m) * 2;
        c += a > 9 ? Math.floor(a/10 + a%10) : a;
    }
    for (i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
    return (c%10 == 0);
}


/*
* Really easy field validation with Prototype
* http://tetlaw.id.au/view/javascript/really-easy-field-validation
* Andrew Tetlaw
* Version 1.5.4.1 (2007-01-05)
*
* Copyright (c) 2007 Andrew Tetlaw
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
var Validator = Class.create();

Validator.prototype = {
    initialize : function(className, error, test, options) {
        if(typeof test == 'function'){
            this.options = $H(options);
            this._test = test;
        } else {
            this.options = $H(test);
            this._test = function(){return true};
        }
        this.error = error || 'Validation failed.';
        this.className = className;
    },
    test : function(v, elm) {
        return (this._test(v,elm) && this.options.all(function(p){
            return Validator.methods[p.key] ? Validator.methods[p.key](v,elm,p.value) : true;
        }));
    }
}
Validator.methods = {
    pattern : function(v,elm,opt) {return Validation.get('IsEmpty').test(v) || opt.test(v)},
    minLength : function(v,elm,opt) {return v.length >= opt},
    maxLength : function(v,elm,opt) {return v.length <= opt},
    min : function(v,elm,opt) {return v >= parseFloat(opt)},
    max : function(v,elm,opt) {return v <= parseFloat(opt)},
    notOneOf : function(v,elm,opt) {return $A(opt).all(function(value) {
        return v != value;
    })},
    oneOf : function(v,elm,opt) {return $A(opt).any(function(value) {
        return v == value;
    })},
    is : function(v,elm,opt) {return v == opt},
    isNot : function(v,elm,opt) {return v != opt},
    equalToField : function(v,elm,opt) {return v == $F(opt)},
    notEqualToField : function(v,elm,opt) {return v != $F(opt)},
    include : function(v,elm,opt) {return $A(opt).all(function(value) {
        return Validation.get(value).test(v,elm);
    })}
}

var Validation = Class.create();
Validation.defaultOptions = {
    onSubmit : true,
    stopOnFirst : false,
    immediate : false,
    focusOnError : true,
    useTitles : false,
    addClassNameToContainer: false,
    containerClassName: '.input-box',
    onFormValidate : function(result, form) {},
    onElementValidate : function(result, elm) {}
};

Validation.prototype = {
    initialize : function(form, options){
        this.form = $(form);
        if (!this.form) {
            return;
        }
        this.options = Object.extend({
            onSubmit : Validation.defaultOptions.onSubmit,
            stopOnFirst : Validation.defaultOptions.stopOnFirst,
            immediate : Validation.defaultOptions.immediate,
            focusOnError : Validation.defaultOptions.focusOnError,
            useTitles : Validation.defaultOptions.useTitles,
            onFormValidate : Validation.defaultOptions.onFormValidate,
            onElementValidate : Validation.defaultOptions.onElementValidate
        }, options || {});
        if(this.options.onSubmit) Event.observe(this.form,'submit',this.onSubmit.bind(this),false);
        if(this.options.immediate) {
            Form.getElements(this.form).each(function(input) { // Thanks Mike!
                if (input.tagName.toLowerCase() == 'select') {
                    Event.observe(input, 'blur', this.onChange.bindAsEventListener(this));
                }
                if (input.type.toLowerCase() == 'radio' || input.type.toLowerCase() == 'checkbox') {
                    Event.observe(input, 'click', this.onChange.bindAsEventListener(this));
                } else {
                    Event.observe(input, 'change', this.onChange.bindAsEventListener(this));
                }
            }, this);
        }
    },
    onChange : function (ev) {
        Validation.isOnChange = true;
        Validation.validate(Event.element(ev),{
                useTitle : this.options.useTitles,
                onElementValidate : this.options.onElementValidate
        });
        Validation.isOnChange = false;
    },
    onSubmit :  function(ev){
        if(!this.validate()) Event.stop(ev);
    },
    validate : function() {
        var result = false;
        var useTitles = this.options.useTitles;
        var callback = this.options.onElementValidate;
        try {
            if(this.options.stopOnFirst) {
                result = Form.getElements(this.form).all(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this);
            } else {
                result = Form.getElements(this.form).collect(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this).all();
            }
        } catch (e) {
        }
        if(!result && this.options.focusOnError) {
            try{
                Form.getElements(this.form).findAll(function(elm){return $(elm).hasClassName('validation-failed')}).first().focus()
            }
            catch(e){
            }
        }
        this.options.onFormValidate(result, this.form);
        return result;
    },
    reset : function() {
        Form.getElements(this.form).each(Validation.reset);
    },
    isElementInForm : function(elm, form) {
        var domForm = elm.up('form');
        if (domForm == form) {
            return true;
        }
        return false;
    }
}

Object.extend(Validation, {
    validate : function(elm, options){
        options = Object.extend({
            useTitle : false,
            onElementValidate : function(result, elm) {}
        }, options || {});
        elm = $(elm);

        var cn = $w(elm.className);
        return result = cn.all(function(value) {
            var test = Validation.test(value,elm,options.useTitle);
            options.onElementValidate(test, elm);
            return test;
        });
    },
    insertAdvice : function(elm, advice){
        var container = $(elm).up('.field-row');
        if(container){
            Element.insert(container, {after: advice});
        } else if (elm.up('td.value')) {
            elm.up('td.value').insert({bottom: advice});
        } else if (elm.advaiceContainer && $(elm.advaiceContainer)) {
            $(elm.advaiceContainer).update(advice);
        }
        else {
            switch (elm.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    var p = elm.parentNode;
                    if(p) {
                        Element.insert(p, {'bottom': advice});
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
                    break;
                default:
                    Element.insert(elm, {'after': advice});
            }
        }
    },
    showAdvice : function(elm, advice, adviceName){
        if(!elm.advices){
            elm.advices = new Hash();
        }
        else{
            elm.advices.each(function(pair){
                if (!advice || pair.value.id != advice.id) {
                    // hide non-current advice after delay
                    this.hideAdvice(elm, pair.value);
                }
            }.bind(this));
        }
        elm.advices.set(adviceName, advice);
        if(typeof Effect == 'undefined') {
            advice.style.display = 'block';
        } else {
            if(!advice._adviceAbsolutize) {
                new Effect.Appear(advice, {duration : 1 });
            } else {
                Position.absolutize(advice);
                advice.show();
                advice.setStyle({
                    'top':advice._adviceTop,
                    'left': advice._adviceLeft,
                    'width': advice._adviceWidth,
                    'z-index': 1000
                });
                advice.addClassName('advice-absolute');
            }
        }
    },
    hideAdvice : function(elm, advice){
        if (advice != null) {
            new Effect.Fade(advice, {duration : 1, afterFinishInternal : function() {advice.hide();}});
        }
    },
    updateCallback : function(elm, status) {
        if (typeof elm.callbackFunction != 'undefined') {
            eval(elm.callbackFunction+'(\''+elm.id+'\',\''+status+'\')');
        }
    },
    ajaxError : function(elm, errorMsg) {
        var name = 'validate-ajax';
        var advice = Validation.getAdvice(name, elm);
        if (advice == null) {
            advice = this.createAdvice(name, elm, false, errorMsg);
        }
        this.showAdvice(elm, advice, 'validate-ajax');
        this.updateCallback(elm, 'failed');

        elm.addClassName('validation-failed');
        elm.addClassName('validate-ajax');
        if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
            var container = elm.up(Validation.defaultOptions.containerClassName);
            if (container && this.allowContainerClassName(elm)) {
                container.removeClassName('validation-passed');
                container.addClassName('validation-error');
            }
        }
    },
    allowContainerClassName: function (elm) {
        if (elm.type == 'radio' || elm.type == 'checkbox') {
            return elm.hasClassName('change-container-classname');
        }

        return true;
    },
    test : function(name, elm, useTitle) {
        var v = Validation.get(name);
        var prop = '__advice'+name.camelize();
        try {
        if(Validation.isVisible(elm) && !v.test($F(elm), elm)) {
            //if(!elm[prop]) {
                var advice = Validation.getAdvice(name, elm);
                if (advice == null) {
                    advice = this.createAdvice(name, elm, useTitle);
                }
                this.showAdvice(elm, advice, name);
                this.updateCallback(elm, 'failed');
            //}
            elm[prop] = 1;
            if (!elm.advaiceContainer) {
                elm.removeClassName('validation-passed');
                elm.addClassName('validation-failed');
            }

           if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && this.allowContainerClassName(elm)) {
                    container.removeClassName('validation-passed');
                    container.addClassName('validation-error');
                }
            }
            return false;
        } else {
            var advice = Validation.getAdvice(name, elm);
            this.hideAdvice(elm, advice);
            this.updateCallback(elm, 'passed');
            elm[prop] = '';
            elm.removeClassName('validation-failed');
            elm.addClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && !container.down('.validation-failed') && this.allowContainerClassName(elm)) {
                    if (!Validation.get('IsEmpty').test(elm.value) || !this.isVisible(elm)) {
                        container.addClassName('validation-passed');
                    } else {
                        container.removeClassName('validation-passed');
                    }
                    container.removeClassName('validation-error');
                }
            }
            return true;
        }
        } catch(e) {
            throw(e)
        }
    },
    isVisible : function(elm) {
        while(elm.tagName != 'BODY') {
            if(!$(elm).visible()) return false;
            elm = elm.parentNode;
        }
        return true;
    },
    getAdvice : function(name, elm) {
        return $('advice-' + name + '-' + Validation.getElmID(elm)) || $('advice-' + Validation.getElmID(elm));
    },
    createAdvice : function(name, elm, useTitle, customError) {
        var v = Validation.get(name);
        var errorMsg = useTitle ? ((elm && elm.title) ? elm.title : v.error) : v.error;
        if (customError) {
            errorMsg = customError;
        }
        try {
            if (Translator){
                errorMsg = Translator.translate(errorMsg);
            }
        }
        catch(e){}

        advice = '<div class="validation-advice" id="advice-' + name + '-' + Validation.getElmID(elm) +'" style="display:none">' + errorMsg + '</div>'


        Validation.insertAdvice(elm, advice);
        advice = Validation.getAdvice(name, elm);
        if($(elm).hasClassName('absolute-advice')) {
            var dimensions = $(elm).getDimensions();
            var originalPosition = Position.cumulativeOffset(elm);

            advice._adviceTop = (originalPosition[1] + dimensions.height) + 'px';
            advice._adviceLeft = (originalPosition[0])  + 'px';
            advice._adviceWidth = (dimensions.width)  + 'px';
            advice._adviceAbsolutize = true;
        }
        return advice;
    },
    getElmID : function(elm) {
        return elm.id ? elm.id : elm.name;
    },
    reset : function(elm) {
        elm = $(elm);
        var cn = $w(elm.className);
        cn.each(function(value) {
            var prop = '__advice'+value.camelize();
            if(elm[prop]) {
                var advice = Validation.getAdvice(value, elm);
                if (advice) {
                    advice.hide();
                }
                elm[prop] = '';
            }
            elm.removeClassName('validation-failed');
            elm.removeClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container) {
                    container.removeClassName('validation-passed');
                    container.removeClassName('validation-error');
                }
            }
        });
    },
    add : function(className, error, test, options) {
        var nv = {};
        nv[className] = new Validator(className, error, test, options);
        Object.extend(Validation.methods, nv);
    },
    addAllThese : function(validators) {
        var nv = {};
        $A(validators).each(function(value) {
                nv[value[0]] = new Validator(value[0], value[1], value[2], (value.length > 3 ? value[3] : {}));
            });
        Object.extend(Validation.methods, nv);
    },
    get : function(name) {
        return  Validation.methods[name] ? Validation.methods[name] : Validation.methods['_LikeNoIDIEverSaw_'];
    },
    methods : {
        '_LikeNoIDIEverSaw_' : new Validator('_LikeNoIDIEverSaw_','',{})
    }
});

Validation.add('IsEmpty', '', function(v) {
    return  (v == '' || (v == null) || (v.length == 0) || /^\s+$/.test(v));
});

Validation.addAllThese([
    ['validate-no-html-tags', 'HTML tags are not allowed', function(v) {
                return !/<(\/)?\w+/.test(v);
            }],
    ['validate-select', 'Please select an option.', function(v) {
                return ((v != "none") && (v != null) && (v.length != 0));
            }],
    ['required-entry', 'This is a required field.', function(v) {
                return !Validation.get('IsEmpty').test(v);
            }],
    ['validate-number', 'Please enter a valid number in this field.', function(v) {
                return Validation.get('IsEmpty').test(v)
                    || (!isNaN(parseNumber(v)) && /^\s*-?\d*(\.\d*)?\s*$/.test(v));
            }],
    ['validate-number-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^number-range-(-?[\d.,]+)?-(-?[\d.,]+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-digits', 'Please use numbers only in this field. Please avoid spaces or other characters such as dots or commas.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  !/[^\d]/.test(v);
            }],
    ['validate-digits-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^digits-range-(-?\d+)?-(-?\d+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-alpha', 'Please use letters only (a-z or A-Z) in this field.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-zA-Z]+$/.test(v)
            }],
    ['validate-code', 'Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-z]+[a-z0-9_]+$/.test(v)
            }],
    ['validate-alphanum', 'Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9]+$/.test(v)
            }],
    ['validate-alphanum-with-spaces', 'Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.', function(v) {
                    return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9 ]+$/.test(v)
            }],
    ['validate-street', 'Please use only letters (a-z or A-Z) or numbers (0-9) or spaces and # only in this field.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  /^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}/.test(v)
            }],
    ['validate-phoneStrict', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-phoneLax', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^((\d[-. ]?)?((\(\d{3}\))|\d{3}))?[-. ]?\d{3}[-. ]?\d{4}$/.test(v);
            }],
    ['validate-fax', 'Please enter a valid fax number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-date', 'Please enter a valid date.', function(v) {
                var test = new Date(v);
                return Validation.get('IsEmpty').test(v) || !isNaN(test);
            }],
    ['validate-date-range', 'The From Date value should be less than or equal to the To Date value.', function(v, elm) {
            var m = /\bdate-range-(\w+)-(\w+)\b/.exec(elm.className);
            if (!m || m[2] == 'to' || Validation.get('IsEmpty').test(v)) {
                return true;
            }

            var currentYear = new Date().getFullYear() + '';
            var normalizedTime = function(v) {
                v = v.split(/[.\/]/);
                if (v[2] && v[2].length < 4) {
                    v[2] = currentYear.substr(0, v[2].length) + v[2];
                }
                return new Date(v.join('/')).getTime();
            };

            var dependentElements = Element.select(elm.form, '.validate-date-range.date-range-' + m[1] + '-to');
            return !dependentElements.length || Validation.get('IsEmpty').test(dependentElements[0].value)
                || normalizedTime(v) <= normalizedTime(dependentElements[0].value);
        }],
    ['validate-email', 'Please enter a valid email address. For example johndoe@domain.com.', function (v) {
                //return Validation.get('IsEmpty').test(v) || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(v)
                //return Validation.get('IsEmpty').test(v) || /^[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9][\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9\.]{1,30}[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9]@([a-z0-9_-]{1,30}\.){1,5}[a-z]{2,4}$/i.test(v)
                return Validation.get('IsEmpty').test(v) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v)
            }],
    ['validate-emailSender', 'Please use only visible characters and spaces.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[\S ]+$/.test(v)
                    }],
    ['validate-password', 'Please enter 6 or more characters. Leading or trailing spaces will be ignored.', function(v) {
                var pass=v.strip(); /*strip leading and trailing spaces*/
                return !(pass.length>0 && pass.length < 6);
            }],
    ['validate-admin-password', 'Please enter 7 or more characters. Password should contain both numeric and alphabetic characters.', function(v) {
                var pass=v.strip();
                if (0 == pass.length) {
                    return true;
                }
                if (!(/[a-z]/i.test(v)) || !(/[0-9]/.test(v))) {
                    return false;
                }
                return !(pass.length < 7);
            }],
    ['validate-cpassword', 'Please make sure your passwords match.', function(v) {
                var conf = $('confirmation') ? $('confirmation') : $$('.validate-cpassword')[0];
                var pass = false;
                if ($('password')) {
                    pass = $('password');
                }
                var passwordElements = $$('.validate-password');
                for (var i = 0; i < passwordElements.size(); i++) {
                    var passwordElement = passwordElements[i];
                    if (passwordElement.up('form').id == conf.up('form').id) {
                        pass = passwordElement;
                    }
                }
                if ($$('.validate-admin-password').size()) {
                    pass = $$('.validate-admin-password')[0];
                }
                return (pass.value == conf.value);
            }],
    ['validate-both-passwords', 'Please make sure your passwords match.', function(v, input) {
                var dependentInput = $(input.form[input.name == 'password' ? 'confirmation' : 'password']),
                    isEqualValues  = input.value == dependentInput.value;

                if (isEqualValues && dependentInput.hasClassName('validation-failed')) {
                    Validation.test(this.className, dependentInput);
                }

                return dependentInput.value == '' || isEqualValues;
            }],
    ['validate-url', 'Please enter a valid URL. Protocol is required (http://, https:// or ftp://)', function (v) {
                v = (v || '').replace(/^\s+/, '').replace(/\s+$/, '');
                return Validation.get('IsEmpty').test(v) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(v)
            }],
    ['validate-clean-url', 'Please enter a valid URL. For example http://www.example.com or www.example.com', function (v) {
                return Validation.get('IsEmpty').test(v) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v) || /^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)
            }],
    ['validate-identifier', 'Please enter a valid URL Key. For example "example-page", "example-page.html" or "anotherlevel/example-page".', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[a-z0-9][a-z0-9_\/-]+(\.[a-z0-9_-]+)?$/.test(v)
            }],
    ['validate-xml-identifier', 'Please enter a valid XML-identifier. For example something_1, block5, id-4.', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[A-Z][A-Z0-9_\/-]*$/i.test(v)
            }],
    ['validate-ssn', 'Please enter a valid social security number. For example 123-45-6789.', function(v) {
            return Validation.get('IsEmpty').test(v) || /^\d{3}-?\d{2}-?\d{4}$/.test(v);
            }],
    ['validate-zip', 'Please enter a valid zip code. For example 90602 or 90602-1234.', function(v) {
            return Validation.get('IsEmpty').test(v) || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);
            }],
    ['validate-zip-international', 'Please enter a valid zip code.', function(v) {
            //return Validation.get('IsEmpty').test(v) || /(^[A-z0-9]{2,10}([\s]{0,1}|[\-]{0,1})[A-z0-9]{2,10}$)/.test(v);
            return true;
            }],
    ['validate-date-au', 'Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.', function(v) {
                if(Validation.get('IsEmpty').test(v)) return true;
                var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
                if(!regex.test(v)) return false;
                var d = new Date(v.replace(regex, '$2/$1/$3'));
                return ( parseInt(RegExp.$2, 10) == (1+d.getMonth()) ) &&
                            (parseInt(RegExp.$1, 10) == d.getDate()) &&
                            (parseInt(RegExp.$3, 10) == d.getFullYear() );
            }],
    ['validate-currency-dollar', 'Please enter a valid $ amount. For example $100.00.', function(v) {
                // [$]1[##][,###]+[.##]
                // [$]1###+[.##]
                // [$]0.##
                // [$].##
                return Validation.get('IsEmpty').test(v) ||  /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(v)
            }],
    ['validate-one-required', 'Please select one of the above options.', function (v,elm) {
                var p = elm.parentNode;
                var options = p.getElementsByTagName('INPUT');
                return $A(options).any(function(elm) {
                    return $F(elm);
                });
            }],
    ['validate-one-required-by-name', 'Please select one of the options.', function (v,elm) {
                var inputs = $$('input[name="' + elm.name.replace(/([\\"])/g, '\\$1') + '"]');

                var error = 1;
                for(var i=0;i<inputs.length;i++) {
                    if((inputs[i].type == 'checkbox' || inputs[i].type == 'radio') && inputs[i].checked == true) {
                        error = 0;
                    }

                    if(Validation.isOnChange && (inputs[i].type == 'checkbox' || inputs[i].type == 'radio')) {
                        Validation.reset(inputs[i]);
                    }
                }

                if( error == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }],
    ['validate-not-negative-number', 'Please enter a number 0 or greater in this field.', function(v) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }
                v = parseNumber(v);
                return !isNaN(v) && v >= 0;
            }],
    ['validate-zero-or-greater', 'Please enter a number 0 or greater in this field.', function(v) {
            return Validation.get('validate-not-negative-number').test(v);
        }],
    ['validate-greater-than-zero', 'Please enter a number greater than 0 in this field.', function(v) {
            if (Validation.get('IsEmpty').test(v)) {
                return true;
            }
            v = parseNumber(v);
            return !isNaN(v) && v > 0;
        }],
    ['validate-state', 'Please select State/Province.', function(v) {
                return (v!=0 || v == '');
            }],
    ['validate-new-password', 'Please enter 6 or more characters. Leading or trailing spaces will be ignored.', function(v) {
                if (!Validation.get('validate-password').test(v)) return false;
                if (Validation.get('IsEmpty').test(v) && v != '') return false;
                return true;
            }],
    ['validate-cc-number', 'Please enter a valid credit card number.', function(v, elm) {
                // remove non-numerics
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (ccTypeContainer && typeof Validation.creditCartTypes.get(ccTypeContainer.value) != 'undefined'
                        && Validation.creditCartTypes.get(ccTypeContainer.value)[2] == false) {
                    if (!Validation.get('IsEmpty').test(v) && Validation.get('validate-digits').test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return validateCreditCard(v);
            }],
    ['validate-cc-type', 'Credit card number does not match credit card type.', function(v, elm) {
                // remove credit card number delimiters such as "-" and space
                elm.value = removeDelimiters(elm.value);
                v         = removeDelimiters(v);

                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                // Other card type or switch or solo card
                if (Validation.creditCartTypes.get(ccType)[0]==false) {
                    return true;
                }

                var validationFailure = false;
                Validation.creditCartTypes.each(function (pair) {
                    if (pair.key == ccType) {
                        if (pair.value[0] && !v.match(pair.value[0])) {
                            validationFailure = true;
                        }
                        throw $break;
                    }
                });

                if (validationFailure) {
                    return false;
                }

                if (ccTypeContainer.hasClassName('validation-failed') && Validation.isOnChange) {
                    Validation.validate(ccTypeContainer);
                }

                return true;
            }],
     ['validate-cc-type-select', 'Card type does not match credit card number.', function(v, elm) {
                var ccNumberContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_type')) + '_cc_number');
                if (Validation.isOnChange && Validation.get('IsEmpty').test(ccNumberContainer.value)) {
                    return true;
                }
                if (Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer)) {
                    Validation.validate(ccNumberContainer);
                }
                return Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer);
            }],
     ['validate-cc-exp', 'Incorrect credit card expiration date.', function(v, elm) {
                var ccExpMonth   = v;
                var ccExpYear    = $(elm.id.substr(0,elm.id.indexOf('_expiration')) + '_expiration_yr').value;
                var currentTime  = new Date();
                var currentMonth = currentTime.getMonth() + 1;
                var currentYear  = currentTime.getFullYear();
                if (ccExpMonth < currentMonth && ccExpYear == currentYear) {
                    return false;
                }
                return true;
            }],
     ['validate-cc-cvn', 'Please enter a valid credit card verification number.', function(v, elm) {
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_cid')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                var re = Validation.creditCartTypes.get(ccType)[1];

                if (v.match(re)) {
                    return true;
                }

                return false;
            }],
     ['validate-ajax', '', function(v, elm) { return true; }],
     ['validate-data', 'Please use only letters (a-z or A-Z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                if(v != '' && v) {
                    return /^[A-Za-z]+[A-Za-z0-9_]+$/.test(v);
                }
                return true;
            }],
     ['validate-css-length', 'Please input a valid CSS-length. For example 100px or 77pt or 20em or .5ex or 50%.', function (v) {
                if (v != '' && v) {
                    return /^[0-9\.]+(px|pt|em|ex|%)?$/.test(v) && (!(/\..*\./.test(v))) && !(/\.$/.test(v));
                }
                return true;
            }],
     ['validate-length', 'Text length does not satisfy specified text range.', function (v, elm) {
                var reMax = new RegExp(/^maximum-length-[0-9]+$/);
                var reMin = new RegExp(/^minimum-length-[0-9]+$/);
                var result = true;
                $w(elm.className).each(function(name, index) {
                    if (name.match(reMax) && result) {
                       var length = name.split('-')[2];
                       result = (v.length <= length);
                    }
                    if (name.match(reMin) && result && !Validation.get('IsEmpty').test(v)) {
                        var length = name.split('-')[2];
                        result = (v.length >= length);
                    }
                });
                return result;
            }],
     ['validate-percents', 'Please enter a number lower than 100.', {max:100}],
     ['required-file', 'Please select a file', function(v, elm) {
         var result = !Validation.get('IsEmpty').test(v);
         if (result === false) {
             ovId = elm.id + '_value';
             if ($(ovId)) {
                 result = !Validation.get('IsEmpty').test($(ovId).value);
             }
         }
         return result;
     }],
     ['validate-cc-ukss', 'Please enter issue number or start date for switch/solo card type.', function(v,elm) {
         var endposition;

         if (elm.id.match(/(.)+_cc_issue$/)) {
             endposition = elm.id.indexOf('_cc_issue');
         } else if (elm.id.match(/(.)+_start_month$/)) {
             endposition = elm.id.indexOf('_start_month');
         } else {
             endposition = elm.id.indexOf('_start_year');
         }

         var prefix = elm.id.substr(0,endposition);

         var ccTypeContainer = $(prefix + '_cc_type');

         if (!ccTypeContainer) {
               return true;
         }
         var ccType = ccTypeContainer.value;

         if(['SS','SM','SO'].indexOf(ccType) == -1){
             return true;
         }

         $(prefix + '_cc_issue').advaiceContainer
           = $(prefix + '_start_month').advaiceContainer
           = $(prefix + '_start_year').advaiceContainer
           = $(prefix + '_cc_type_ss_div').down('ul li.adv-container');

         var ccIssue   =  $(prefix + '_cc_issue').value;
         var ccSMonth  =  $(prefix + '_start_month').value;
         var ccSYear   =  $(prefix + '_start_year').value;

         var ccStartDatePresent = (ccSMonth && ccSYear) ? true : false;

         if (!ccStartDatePresent && !ccIssue){
             return false;
         }
         return true;
     }]
]);

function removeDelimiters (v) {
    v = v.replace(/\s/g, '');
    v = v.replace(/\-/g, '');
    return v;
}

function parseNumber(v)
{
    if (typeof v != 'string') {
        return parseFloat(v);
    }

    var isDot  = v.indexOf('.');
    var isComa = v.indexOf(',');

    if (isDot != -1 && isComa != -1) {
        if (isComa > isDot) {
            v = v.replace('.', '').replace(',', '.');
        }
        else {
            v = v.replace(',', '');
        }
    }
    else if (isComa != -1) {
        v = v.replace(',', '.');
    }

    return parseFloat(v);
}

/**
 * Hash with credit card types which can be simply extended in payment modules
 * 0 - regexp for card number
 * 1 - regexp for cvn
 * 2 - check or not credit card number trough Luhn algorithm by
 *     function validateCreditCard which you can find above in this file
 */
Validation.creditCartTypes = $H({
//    'SS': [new RegExp('^((6759[0-9]{12})|(5018|5020|5038|6304|6759|6761|6763[0-9]{12,19})|(49[013][1356][0-9]{12})|(6333[0-9]{12})|(6334[0-4]\d{11})|(633110[0-9]{10})|(564182[0-9]{10}))([0-9]{2,3})?$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'SO': [new RegExp('^(6334[5-9]([0-9]{11}|[0-9]{13,14}))|(6767([0-9]{12}|[0-9]{14,15}))$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'VI': [new RegExp('^4[0-9]{12}([0-9]{3})?$'), new RegExp('^[0-9]{3}$'), true],
    'MC': [new RegExp('^5[1-5][0-9]{14}$'), new RegExp('^[0-9]{3}$'), true],
    'AE': [new RegExp('^3[47][0-9]{13}$'), new RegExp('^[0-9]{4}$'), true],
    'DI': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'JCB': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3,4}$'), true],
    'DICL': [new RegExp('^(30[0-5][0-9]{13}|3095[0-9]{12}|35(2[8-9][0-9]{12}|[3-8][0-9]{13})|36[0-9]{12}|3[8-9][0-9]{14}|6011(0[0-9]{11}|[2-4][0-9]{11}|74[0-9]{10}|7[7-9][0-9]{10}|8[6-9][0-9]{10}|9[0-9]{11})|62(2(12[6-9][0-9]{10}|1[3-9][0-9]{11}|[2-8][0-9]{12}|9[0-1][0-9]{11}|92[0-5][0-9]{10})|[4-6][0-9]{13}|8[2-8][0-9]{12})|6(4[4-9][0-9]{13}|5[0-9]{14}))$'), new RegExp('^[0-9]{3}$'), true],
    'SM': [new RegExp('(^(5[0678])[0-9]{11,18}$)|(^(6[^05])[0-9]{11,18}$)|(^(601)[^1][0-9]{9,16}$)|(^(6011)[0-9]{9,11}$)|(^(6011)[0-9]{13,16}$)|(^(65)[0-9]{11,13}$)|(^(65)[0-9]{15,18}$)|(^(49030)[2-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49033)[5-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49110)[1-2]([0-9]{10}$|[0-9]{12,13}$))|(^(49117)[4-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49118)[0-2]([0-9]{10}$|[0-9]{12,13}$))|(^(4936)([0-9]{12}$|[0-9]{14,15}$))'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'OT': [false, new RegExp('^([0-9]{3}|[0-9]{4})?$'), false]
});

// script.aculo.us builder.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Builder = {
  NODEMAP: {
    AREA: 'map',
    CAPTION: 'table',
    COL: 'table',
    COLGROUP: 'table',
    LEGEND: 'fieldset',
    OPTGROUP: 'select',
    OPTION: 'select',
    PARAM: 'object',
    TBODY: 'table',
    TD: 'table',
    TFOOT: 'table',
    TH: 'table',
    THEAD: 'table',
    TR: 'table'
  },
  // note: For Firefox < 1.5, OPTION and OPTGROUP tags are currently broken,
  //       due to a Firefox bug
  node: function(elementName) {
    elementName = elementName.toUpperCase();

    // try innerHTML approach
    var parentTag = this.NODEMAP[elementName] || 'div';
    var parentElement = document.createElement(parentTag);
    try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
      parentElement.innerHTML = "<" + elementName + "></" + elementName + ">";
    } catch(e) {}
    var element = parentElement.firstChild || null;

    // see if browser added wrapping tags
    if(element && (element.tagName.toUpperCase() != elementName))
      element = element.getElementsByTagName(elementName)[0];

    // fallback to createElement approach
    if(!element) element = document.createElement(elementName);

    // abort if nothing could be created
    if(!element) return;

    // attributes (or text)
    if(arguments[1])
      if(this._isStringOrNumber(arguments[1]) ||
        (arguments[1] instanceof Array) ||
        arguments[1].tagName) {
          this._children(element, arguments[1]);
        } else {
          var attrs = this._attributes(arguments[1]);
          if(attrs.length) {
            try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
              parentElement.innerHTML = "<" +elementName + " " +
                attrs + "></" + elementName + ">";
            } catch(e) {}
            element = parentElement.firstChild || null;
            // workaround firefox 1.0.X bug
            if(!element) {
              element = document.createElement(elementName);
              for(attr in arguments[1])
                element[attr == 'class' ? 'className' : attr] = arguments[1][attr];
            }
            if(element.tagName.toUpperCase() != elementName)
              element = parentElement.getElementsByTagName(elementName)[0];
          }
        }

    // text, or array of children
    if(arguments[2])
      this._children(element, arguments[2]);

     return $(element);
  },
  _text: function(text) {
     return document.createTextNode(text);
  },

  ATTR_MAP: {
    'className': 'class',
    'htmlFor': 'for'
  },

  _attributes: function(attributes) {
    var attrs = [];
    for(attribute in attributes)
      attrs.push((attribute in this.ATTR_MAP ? this.ATTR_MAP[attribute] : attribute) +
          '="' + attributes[attribute].toString().escapeHTML().gsub(/"/,'&quot;') + '"');
    return attrs.join(" ");
  },
  _children: function(element, children) {
    if(children.tagName) {
      element.appendChild(children);
      return;
    }
    if(typeof children=='object') { // array can hold nodes and text
      children.flatten().each( function(e) {
        if(typeof e=='object')
          element.appendChild(e);
        else
          if(Builder._isStringOrNumber(e))
            element.appendChild(Builder._text(e));
      });
    } else
      if(Builder._isStringOrNumber(children))
        element.appendChild(Builder._text(children));
  },
  _isStringOrNumber: function(param) {
    return(typeof param=='string' || typeof param=='number');
  },
  build: function(html) {
    var element = this.node('div');
    $(element).update(html.strip());
    return element.down();
  },
  dump: function(scope) {
    if(typeof scope != 'object' && typeof scope != 'function') scope = window; //global scope

    var tags = ("A ABBR ACRONYM ADDRESS APPLET AREA B BASE BASEFONT BDO BIG BLOCKQUOTE BODY " +
      "BR BUTTON CAPTION CENTER CITE CODE COL COLGROUP DD DEL DFN DIR DIV DL DT EM FIELDSET " +
      "FONT FORM FRAME FRAMESET H1 H2 H3 H4 H5 H6 HEAD HR HTML I IFRAME IMG INPUT INS ISINDEX "+
      "KBD LABEL LEGEND LI LINK MAP MENU META NOFRAMES NOSCRIPT OBJECT OL OPTGROUP OPTION P "+
      "PARAM PRE Q S SAMP SCRIPT SELECT SMALL SPAN STRIKE STRONG STYLE SUB SUP TABLE TBODY TD "+
      "TEXTAREA TFOOT TH THEAD TITLE TR TT U UL VAR").split(/\s+/);

    tags.each( function(tag){
      scope[tag] = function() {
        return Builder.node.apply(Builder, [tag].concat($A(arguments)));
      };
    });
  }
};
// script.aculo.us effects.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
  var color = '#';
  if (this.slice(0,4) == 'rgb(') {
    var cols = this.slice(4,this.length-1).split(',');
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
  } else {
    if (this.slice(0,1) == '#') {
      if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
      if (this.length==7) color = this.toLowerCase();
    }
  }
  return (color.length==7 ? color : (arguments[0] || this));
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ?
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
  element = $(element);
  element.setStyle({fontSize: (percent/100) + 'em'});
  if (Prototype.Browser.WebKit) window.scrollBy(0,0);
  return element;
};

Element.getInlineOpacity = function(element){
  return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + .5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(pos) {
      var pos = ((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
      return pos > 1 ? 1 : pos;
    },
    wobble: function(pos) {
      return (-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
    },
    pulse: function(pos, pulses) {
      return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
    },
    spring: function(pos) {
      return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';

    element = $(element);
    $A(element.childNodes).each( function(child) {
      if (child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            new Element('span', {style: tagifyStyle}).update(
              character == ' ' ? String.fromCharCode(160) : character),
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if (((typeof element == 'object') ||
        Object.isFunction(element)) &&
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;

    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || { });
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || { });
    Effect[element.visible() ?
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();

    var position = Object.isString(effect.options.queue) ?
      effect.options.queue : effect.options.queue.position;

    switch(position) {
      case 'front':
        // move unstarted effects after this effect
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'with-last':
        timestamp = this.effects.pluck('startOn').max() || timestamp;
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }

    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);

    if (!this.interval)
      this.interval = setInterval(this.loop.bind(this), 15);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if (this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    for(var i=0, len=this.effects.length;i<len;i++)
      this.effects[i] && this.effects[i].loop(timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if (!Object.isString(queueName)) return queueName;

    return this.instances.get(queueName) ||
      this.instances.set(queueName, new Effect.ScopedQueue());
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(options) {
    function codeForEvent(options,eventName){
      return (
        (options[eventName+'Internal'] ? 'this.options.'+eventName+'Internal(this);' : '') +
        (options[eventName] ? 'this.options.'+eventName+'(this);' : '')
      );
    }
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;

    this.render = (function() {
      function dispatch(effect, eventName) {
        if (effect.options[eventName + 'Internal'])
          effect.options[eventName + 'Internal'](effect);
        if (effect.options[eventName])
          effect.options[eventName](effect);
      }

      return function(pos) {
        if (this.state === "idle") {
          this.state = "running";
          dispatch(this, 'beforeSetup');
          if (this.setup) this.setup();
          dispatch(this, 'afterSetup');
        }
        if (this.state === "running") {
          pos = (this.options.transition(pos) * this.fromToDelta) + this.options.from;
          this.position = pos;
          dispatch(this, 'beforeUpdate');
          if (this.update) this.update(pos);
          dispatch(this, 'afterUpdate');
        }
      };
    })();

    this.event('beforeStart');
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if (timePos >= this.startOn) {
      if (timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if (this.finish) this.finish();
        this.event('afterFinish');
        return;
      }
      var pos   = (timePos - this.startOn) / this.totalTime,
          frame = (pos * this.totalFrames).round();
      if (frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  cancel: function() {
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if (this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    var data = $H();
    for(property in this)
      if (!Object.isFunction(this[property])) data.set(property, this[property]);
    return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if (effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(object, from, to) {
    object = Object.isString(object) ? $(object) : object;
    var args = $A(arguments), method = args.last(),
      options = args.length == 5 ? args[3] : null;
    this.method = Object.isFunction(method) ? method.bind(object) :
      Object.isFunction(object[method]) ? object[method].bind(object) :
      function(value) { object[method] = value };
    this.start(Object.extend({ from: from, to: to }, options || { }));
  },
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function() {
    this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    // make this work on IE on elements without 'layout'
    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || { });
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'absolute') {
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: (this.options.x  * position + this.originalLeft).round() + 'px',
      top:  (this.options.y  * position + this.originalTop).round()  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element,
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(element, percent) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || { });
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');

    this.originalStyle = { };
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));

    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;

    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%','pt'].each( function(fontSizeType) {
      if (fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));

    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;

    this.dims = null;
    if (this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if (/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if (!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if (this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = { };
    if (this.options.scaleX) d.width = width.round() + 'px';
    if (this.options.scaleY) d.height = height.round() + 'px';
    if (this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if (this.elementPositioning == 'absolute') {
        if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if (this.options.scaleY) d.top = -topd + 'px';
        if (this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if (this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = { };
    if (!this.options.keepBackgroundImage) {
      this.oldStyle.backgroundImage = this.element.getStyle('background-image');
      this.element.setStyle({backgroundImage: 'none'});
    }
    if (!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if (!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = function(element) {
  var options = arguments[1] || { },
  scrollOffsets = document.viewport.getScrollOffsets(),
  elementOffsets = $(element).cumulativeOffset();

  if (options.offset) elementOffsets[1] += options.offset;

  return new Effect.Tween(null,
    scrollOffsets.top,
    elementOffsets[1],
    options,
    function(p){ scrollTo(scrollOffsets.left, p.round()); }
  );
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
    from: element.getOpacity() || 1.0,
    to:   0.0,
    afterFinishInternal: function(effect) {
      if (effect.options.to!=0) return;
      effect.element.hide().setStyle({opacity: oldOpacity});
    }
  }, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from).show();
  }}, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = {
    opacity: element.getInlineOpacity(),
    position: element.getStyle('position'),
    top:  element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height
  };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200,
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }),
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ],
     Object.extend({ duration: 1.0,
      beforeSetupInternal: function(effect) {
        Position.absolutize(effect.effects[0].element);
      },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide().setStyle(oldStyle); }
     }, arguments[1] || { })
   );
};

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0,
    Object.extend({ scaleContent: false,
      scaleX: false,
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping();
      }
    }, arguments[1] || { })
  );
};

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping();
    }
  }, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, Object.extend({
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, {
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) {
          effect.element.makePositioned().makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
        }
      });
    }
  }, arguments[1] || { }));
};

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }),
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned();
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        }
      }, arguments[1] || { }));
};

Effect.Shake = function(element) {
  element = $(element);
  var options = Object.extend({
    distance: 20,
    duration: 0.5
  }, arguments[1] || {});
  var distance = parseFloat(options.distance);
  var split = parseFloat(options.duration) / 10.0;
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element,
      { x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
        effect.element.undoPositioned().setStyle(oldStyle);
  }}); }}); }}); }}); }}); }});
};

Effect.SlideDown = function(element) {
  element = $(element).cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || { })
  );
};

Effect.SlideUp = function(element) {
  element = $(element).cleanWhitespace();
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false,
    scaleX: false,
    scaleMode: 'box',
    scaleFrom: 100,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
    }
   }, arguments[1] || { })
  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, {
    restoreAfterFinish: true,
    beforeSetup: function(effect) {
      effect.element.makeClipping();
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping();
    }
  });
};

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var initialMoveX, initialMoveY;
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0;
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }

  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01,
    beforeSetup: function(effect) {
      effect.element.hide().makeClipping().makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width },
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'}).show();
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
             }
           }, options)
      );
    }
  });
};

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }

  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned().makeClipping();
         },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
       }, options)
  );
};

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || { },
    oldOpacity = element.getInlineOpacity(),
    transition = options.transition || Effect.Transitions.linear,
    reverser   = function(pos){
      return 1 - transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
    };

  return new Effect.Opacity(element,
    Object.extend(Object.extend({  duration: 2.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
};

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  element.makeClipping();
  return new Effect.Scale(element, 5, Object.extend({
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, {
      scaleContent: false,
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping().setStyle(oldStyle);
      } });
  }}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      style: { }
    }, arguments[1] || { });

    if (!Object.isString(options.style)) this.style = $H(options.style);
    else {
      if (options.style.include(':'))
        this.style = options.style.parseStyle();
      else {
        this.element.addClassName(options.style);
        this.style = $H(this.element.getStyles());
        this.element.removeClassName(options.style);
        var css = this.element.getStyles();
        this.style = this.style.reject(function(style) {
          return style.value == css[style.key];
        });
        options.afterFinishInternal = function(effect) {
          effect.element.addClassName(effect.options.style);
          effect.transforms.each(function(transform) {
            effect.element.style[transform.style] = '';
          });
        };
      }
    }
    this.start(options);
  },

  setup: function(){
    function parseColor(color){
      if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
      color = color.parseColor();
      return $R(0,2).map(function(i){
        return parseInt( color.slice(i*2+1,i*2+3), 16 );
      });
    }
    this.transforms = this.style.map(function(pair){
      var property = pair[0], value = pair[1], unit = null;

      if (value.parseColor('#zzzzzz') != '#zzzzzz') {
        value = value.parseColor();
        unit  = 'color';
      } else if (property == 'opacity') {
        value = parseFloat(value);
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
          this.element.setStyle({zoom: 1});
      } else if (Element.CSS_LENGTH.test(value)) {
          var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
          value = parseFloat(components[1]);
          unit = (components.length == 3) ? components[2] : null;
      }

      var originalValue = this.element.getStyle(property);
      return {
        style: property.camelize(),
        originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0),
        targetValue: unit=='color' ? parseColor(value) : value,
        unit: unit
      };
    }.bind(this)).reject(function(transform){
      return (
        (transform.originalValue == transform.targetValue) ||
        (
          transform.unit != 'color' &&
          (isNaN(transform.originalValue) || isNaN(transform.targetValue))
        )
      );
    });
  },
  update: function(position) {
    var style = { }, transform, i = this.transforms.length;
    while(i--)
      style[(transform = this.transforms[i]).style] =
        transform.unit=='color' ? '#'+
          (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
          (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
          (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
        (transform.originalValue +
          (transform.targetValue - transform.originalValue) * position).toFixed(3) +
            (transform.unit === null ? '' : transform.unit);
    this.element.setStyle(style, true);
  }
});

Effect.Transform = Class.create({
  initialize: function(tracks){
    this.tracks  = [];
    this.options = arguments[1] || { };
    this.addTracks(tracks);
  },
  addTracks: function(tracks){
    tracks.each(function(track){
      track = $H(track);
      var data = track.values().first();
      this.tracks.push($H({
        ids:     track.keys().first(),
        effect:  Effect.Morph,
        options: { style: data }
      }));
    }.bind(this));
    return this;
  },
  play: function(){
    return new Effect.Parallel(
      this.tracks.map(function(track){
        var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
        var elements = [$(ids) || $$(ids)].flatten();
        return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
      }).flatten(),
      this.options
    );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
  var style, styleRules = $H();
  if (Prototype.Browser.WebKit)
    style = new Element('div',{style:this}).style;
  else {
    String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
    style = String.__parseStyleElement.childNodes[0].style;
  }

  Element.CSS_PROPERTIES.each(function(property){
    if (style[property]) styleRules.set(property, style[property]);
  });

  if (Prototype.Browser.IE && this.include('opacity'))
    styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

  return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(element) {
    var css = document.defaultView.getComputedStyle($(element), null);
    return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
      styles[property] = css[property];
      return styles;
    });
  };
} else {
  Element.getStyles = function(element) {
    element = $(element);
    var css = element.currentStyle, styles;
    styles = Element.CSS_PROPERTIES.inject({ }, function(results, property) {
      results[property] = css[property];
      return results;
    });
    if (!styles.opacity) styles.opacity = element.getOpacity();
    return styles;
  };
}

Effect.Methods = {
  morph: function(element, style) {
    element = $(element);
    new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
    return element;
  },
  visualEffect: function(element, effect, options) {
    element = $(element);
    var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
    new Effect[klass](element, options);
    return element;
  },
  highlight: function(element, options) {
    element = $(element);
    new Effect.Highlight(element, options);
    return element;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(effect) {
    Effect.Methods[effect] = function(element, options){
      element = $(element);
      Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
      return element;
    };
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
  function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);
// script.aculo.us dragdrop.js v1.9.0, Thu Dec 23 16:54:48 -0500 2010

// Copyright (c) 2005-2010 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if(Object.isUndefined(Effect))
  throw("dragdrop.js requires including script.aculo.us' effects.js library");

var Droppables = {
  drops: [],

  remove: function(element) {
    this.drops = this.drops.reject(function(d) { return d.element==$(element) });
  },

  add: function(element) {
    element = $(element);
    var options = Object.extend({
      greedy:     true,
      hoverclass: null,
      tree:       false
    }, arguments[1] || { });

    // cache containers
    if(options.containment) {
      options._containers = [];
      var containment = options.containment;
      if(Object.isArray(containment)) {
        containment.each( function(c) { options._containers.push($(c)) });
      } else {
        options._containers.push($(containment));
      }
    }

    if(options.accept) options.accept = [options.accept].flatten();

    Element.makePositioned(element); // fix IE
    options.element = element;

    this.drops.push(options);
  },

  findDeepestChild: function(drops) {
    deepest = drops[0];

    for (i = 1; i < drops.length; ++i)
      if (Element.isParent(drops[i].element, deepest.element))
        deepest = drops[i];

    return deepest;
  },

  isContained: function(element, drop) {
    var containmentNode;
    if(drop.tree) {
      containmentNode = element.treeNode;
    } else {
      containmentNode = element.parentNode;
    }
    return drop._containers.detect(function(c) { return containmentNode == c });
  },

  isAffected: function(point, element, drop) {
    return (
      (drop.element!=element) &&
      ((!drop._containers) ||
        this.isContained(element, drop)) &&
      ((!drop.accept) ||
        (Element.classNames(element).detect(
          function(v) { return drop.accept.include(v) } ) )) &&
      Position.within(drop.element, point[0], point[1]) );
  },

  deactivate: function(drop) {
    if(drop.hoverclass)
      Element.removeClassName(drop.element, drop.hoverclass);
    this.last_active = null;
  },

  activate: function(drop) {
    if(drop.hoverclass)
      Element.addClassName(drop.element, drop.hoverclass);
    this.last_active = drop;
  },

  show: function(point, element) {
    if(!this.drops.length) return;
    var drop, affected = [];

    this.drops.each( function(drop) {
      if(Droppables.isAffected(point, element, drop))
        affected.push(drop);
    });

    if(affected.length>0)
      drop = Droppables.findDeepestChild(affected);

    if(this.last_active && this.last_active != drop) this.deactivate(this.last_active);
    if (drop) {
      Position.within(drop.element, point[0], point[1]);
      if(drop.onHover)
        drop.onHover(element, drop.element, Position.overlap(drop.overlap, drop.element));

      if (drop != this.last_active) Droppables.activate(drop);
    }
  },

  fire: function(event, element) {
    if(!this.last_active) return;
    Position.prepare();

    if (this.isAffected([Event.pointerX(event), Event.pointerY(event)], element, this.last_active))
      if (this.last_active.onDrop) {
        this.last_active.onDrop(element, this.last_active.element, event);
        return true;
      }
  },

  reset: function() {
    if(this.last_active)
      this.deactivate(this.last_active);
  }
};

var Draggables = {
  drags: [],
  observers: [],

  register: function(draggable) {
    if(this.drags.length == 0) {
      this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
      this.eventMouseMove = this.updateDrag.bindAsEventListener(this);
      this.eventKeypress  = this.keyPress.bindAsEventListener(this);

      Event.observe(document, "mouseup", this.eventMouseUp);
      Event.observe(document, "mousemove", this.eventMouseMove);
      Event.observe(document, "keypress", this.eventKeypress);
    }
    this.drags.push(draggable);
  },

  unregister: function(draggable) {
    this.drags = this.drags.reject(function(d) { return d==draggable });
    if(this.drags.length == 0) {
      Event.stopObserving(document, "mouseup", this.eventMouseUp);
      Event.stopObserving(document, "mousemove", this.eventMouseMove);
      Event.stopObserving(document, "keypress", this.eventKeypress);
    }
  },

  activate: function(draggable) {
    if(draggable.options.delay) {
      this._timeout = setTimeout(function() {
        Draggables._timeout = null;
        window.focus();
        Draggables.activeDraggable = draggable;
      }.bind(this), draggable.options.delay);
    } else {
      window.focus(); // allows keypress events if window isn't currently focused, fails for Safari
      this.activeDraggable = draggable;
    }
  },

  deactivate: function() {
    this.activeDraggable = null;
  },

  updateDrag: function(event) {
    if(!this.activeDraggable) return;
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    // Mozilla-based browsers fire successive mousemove events with
    // the same coordinates, prevent needless redrawing (moz bug?)
    if(this._lastPointer && (this._lastPointer.inspect() == pointer.inspect())) return;
    this._lastPointer = pointer;

    this.activeDraggable.updateDrag(event, pointer);
  },

  endDrag: function(event) {
    if(this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    if(!this.activeDraggable) return;
    this._lastPointer = null;
    this.activeDraggable.endDrag(event);
    this.activeDraggable = null;
  },

  keyPress: function(event) {
    if(this.activeDraggable)
      this.activeDraggable.keyPress(event);
  },

  addObserver: function(observer) {
    this.observers.push(observer);
    this._cacheObserverCallbacks();
  },

  removeObserver: function(element) {  // element instead of observer fixes mem leaks
    this.observers = this.observers.reject( function(o) { return o.element==element });
    this._cacheObserverCallbacks();
  },

  notify: function(eventName, draggable, event) {  // 'onStart', 'onEnd', 'onDrag'
    if(this[eventName+'Count'] > 0)
      this.observers.each( function(o) {
        if(o[eventName]) o[eventName](eventName, draggable, event);
      });
    if(draggable.options[eventName]) draggable.options[eventName](draggable, event);
  },

  _cacheObserverCallbacks: function() {
    ['onStart','onEnd','onDrag'].each( function(eventName) {
      Draggables[eventName+'Count'] = Draggables.observers.select(
        function(o) { return o[eventName]; }
      ).length;
    });
  }
};

/*--------------------------------------------------------------------------*/

var Draggable = Class.create({
  initialize: function(element) {
    var defaults = {
      handle: false,
      reverteffect: function(element, top_offset, left_offset) {
        var dur = Math.sqrt(Math.abs(top_offset^2)+Math.abs(left_offset^2))*0.02;
        new Effect.Move(element, { x: -left_offset, y: -top_offset, duration: dur,
          queue: {scope:'_draggable', position:'end'}
        });
      },
      endeffect: function(element) {
        var toOpacity = Object.isNumber(element._opacity) ? element._opacity : 1.0;
        new Effect.Opacity(element, {duration:0.2, from:0.7, to:toOpacity,
          queue: {scope:'_draggable', position:'end'},
          afterFinish: function(){
            Draggable._dragging[element] = false
          }
        });
      },
      zindex: 1000,
      revert: false,
      quiet: false,
      scroll: false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      snap: false,  // false, or xy or [x,y] or function(x,y){ return [x,y] }
      delay: 0
    };

    if(!arguments[1] || Object.isUndefined(arguments[1].endeffect))
      Object.extend(defaults, {
        starteffect: function(element) {
          element._opacity = Element.getOpacity(element);
          Draggable._dragging[element] = true;
          new Effect.Opacity(element, {duration:0.2, from:element._opacity, to:0.7});
        }
      });

    var options = Object.extend(defaults, arguments[1] || { });

    this.element = $(element);

    if(options.handle && Object.isString(options.handle))
      this.handle = this.element.down('.'+options.handle, 0);

    if(!this.handle) this.handle = $(options.handle);
    if(!this.handle) this.handle = this.element;

    if(options.scroll && !options.scroll.scrollTo && !options.scroll.outerHTML) {
      options.scroll = $(options.scroll);
      this._isScrollChild = Element.childOf(this.element, options.scroll);
    }

    Element.makePositioned(this.element); // fix IE

    this.options  = options;
    this.dragging = false;

    this.eventMouseDown = this.initDrag.bindAsEventListener(this);
    Event.observe(this.handle, "mousedown", this.eventMouseDown);

    Draggables.register(this);
  },

  destroy: function() {
    Event.stopObserving(this.handle, "mousedown", this.eventMouseDown);
    Draggables.unregister(this);
  },

  currentDelta: function() {
    return([
      parseInt(Element.getStyle(this.element,'left') || '0'),
      parseInt(Element.getStyle(this.element,'top') || '0')]);
  },

  initDrag: function(event) {
    if(!Object.isUndefined(Draggable._dragging[this.element]) &&
      Draggable._dragging[this.element]) return;
    if(Event.isLeftClick(event)) {
      // abort on form elements, fixes a Firefox issue
      var src = Event.element(event);
      if((tag_name = src.tagName.toUpperCase()) && (
        tag_name=='INPUT' ||
        tag_name=='SELECT' ||
        tag_name=='OPTION' ||
        tag_name=='BUTTON' ||
        tag_name=='TEXTAREA')) return;

      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      var pos     = this.element.cumulativeOffset();
      this.offset = [0,1].map( function(i) { return (pointer[i] - pos[i]) });

      Draggables.activate(this);
      Event.stop(event);
    }
  },

  startDrag: function(event) {
    this.dragging = true;
    if(!this.delta)
      this.delta = this.currentDelta();

    if(this.options.zindex) {
      this.originalZ = parseInt(Element.getStyle(this.element,'z-index') || 0);
      this.element.style.zIndex = this.options.zindex;
    }

    if(this.options.ghosting) {
      this._clone = this.element.cloneNode(true);
      this._originallyAbsolute = (this.element.getStyle('position') == 'absolute');
      if (!this._originallyAbsolute)
        Position.absolutize(this.element);
      this.element.parentNode.insertBefore(this._clone, this.element);
    }

    if(this.options.scroll) {
      if (this.options.scroll == window) {
        var where = this._getWindowScroll(this.options.scroll);
        this.originalScrollLeft = where.left;
        this.originalScrollTop = where.top;
      } else {
        this.originalScrollLeft = this.options.scroll.scrollLeft;
        this.originalScrollTop = this.options.scroll.scrollTop;
      }
    }

    Draggables.notify('onStart', this, event);

    if(this.options.starteffect) this.options.starteffect(this.element);
  },

  updateDrag: function(event, pointer) {
    if(!this.dragging) this.startDrag(event);

    if(!this.options.quiet){
      Position.prepare();
      Droppables.show(pointer, this.element);
    }

    Draggables.notify('onDrag', this, event);

    this.draw(pointer);
    if(this.options.change) this.options.change(this);

    if(this.options.scroll) {
      this.stopScrolling();

      var p;
      if (this.options.scroll == window) {
        with(this._getWindowScroll(this.options.scroll)) { p = [ left, top, left+width, top+height ]; }
      } else {
        p = Position.page(this.options.scroll).toArray();
        p[0] += this.options.scroll.scrollLeft + Position.deltaX;
        p[1] += this.options.scroll.scrollTop + Position.deltaY;
        p.push(p[0]+this.options.scroll.offsetWidth);
        p.push(p[1]+this.options.scroll.offsetHeight);
      }
      var speed = [0,0];
      if(pointer[0] < (p[0]+this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[0]+this.options.scrollSensitivity);
      if(pointer[1] < (p[1]+this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[1]+this.options.scrollSensitivity);
      if(pointer[0] > (p[2]-this.options.scrollSensitivity)) speed[0] = pointer[0]-(p[2]-this.options.scrollSensitivity);
      if(pointer[1] > (p[3]-this.options.scrollSensitivity)) speed[1] = pointer[1]-(p[3]-this.options.scrollSensitivity);
      this.startScrolling(speed);
    }

    // fix AppleWebKit rendering
    if(Prototype.Browser.WebKit) window.scrollBy(0,0);

    Event.stop(event);
  },

  finishDrag: function(event, success) {
    this.dragging = false;

    if(this.options.quiet){
      Position.prepare();
      var pointer = [Event.pointerX(event), Event.pointerY(event)];
      Droppables.show(pointer, this.element);
    }

    if(this.options.ghosting) {
      if (!this._originallyAbsolute)
        Position.relativize(this.element);
      delete this._originallyAbsolute;
      Element.remove(this._clone);
      this._clone = null;
    }

    var dropped = false;
    if(success) {
      dropped = Droppables.fire(event, this.element);
      if (!dropped) dropped = false;
    }
    if(dropped && this.options.onDropped) this.options.onDropped(this.element);
    Draggables.notify('onEnd', this, event);

    var revert = this.options.revert;
    if(revert && Object.isFunction(revert)) revert = revert(this.element);

    var d = this.currentDelta();
    if(revert && this.options.reverteffect) {
      if (dropped == 0 || revert != 'failure')
        this.options.reverteffect(this.element,
          d[1]-this.delta[1], d[0]-this.delta[0]);
    } else {
      this.delta = d;
    }

    if(this.options.zindex)
      this.element.style.zIndex = this.originalZ;

    if(this.options.endeffect)
      this.options.endeffect(this.element);

    Draggables.deactivate(this);
    Droppables.reset();
  },

  keyPress: function(event) {
    if(event.keyCode!=Event.KEY_ESC) return;
    this.finishDrag(event, false);
    Event.stop(event);
  },

  endDrag: function(event) {
    if(!this.dragging) return;
    this.stopScrolling();
    this.finishDrag(event, true);
    Event.stop(event);
  },

  draw: function(point) {
    var pos = this.element.cumulativeOffset();
    if(this.options.ghosting) {
      var r   = Position.realOffset(this.element);
      pos[0] += r[0] - Position.deltaX; pos[1] += r[1] - Position.deltaY;
    }

    var d = this.currentDelta();
    pos[0] -= d[0]; pos[1] -= d[1];

    if(this.options.scroll && (this.options.scroll != window && this._isScrollChild)) {
      pos[0] -= this.options.scroll.scrollLeft-this.originalScrollLeft;
      pos[1] -= this.options.scroll.scrollTop-this.originalScrollTop;
    }

    var p = [0,1].map(function(i){
      return (point[i]-pos[i]-this.offset[i])
    }.bind(this));

    if(this.options.snap) {
      if(Object.isFunction(this.options.snap)) {
        p = this.options.snap(p[0],p[1],this);
      } else {
      if(Object.isArray(this.options.snap)) {
        p = p.map( function(v, i) {
          return (v/this.options.snap[i]).round()*this.options.snap[i] }.bind(this));
      } else {
        p = p.map( function(v) {
          return (v/this.options.snap).round()*this.options.snap }.bind(this));
      }
    }}

    var style = this.element.style;
    if((!this.options.constraint) || (this.options.constraint=='horizontal'))
      style.left = p[0] + "px";
    if((!this.options.constraint) || (this.options.constraint=='vertical'))
      style.top  = p[1] + "px";

    if(style.visibility=="hidden") style.visibility = ""; // fix gecko rendering
  },

  stopScrolling: function() {
    if(this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
      Draggables._lastScrollPointer = null;
    }
  },

  startScrolling: function(speed) {
    if(!(speed[0] || speed[1])) return;
    this.scrollSpeed = [speed[0]*this.options.scrollSpeed,speed[1]*this.options.scrollSpeed];
    this.lastScrolled = new Date();
    this.scrollInterval = setInterval(this.scroll.bind(this), 10);
  },

  scroll: function() {
    var current = new Date();
    var delta = current - this.lastScrolled;
    this.lastScrolled = current;
    if(this.options.scroll == window) {
      with (this._getWindowScroll(this.options.scroll)) {
        if (this.scrollSpeed[0] || this.scrollSpeed[1]) {
          var d = delta / 1000;
          this.options.scroll.scrollTo( left + d*this.scrollSpeed[0], top + d*this.scrollSpeed[1] );
        }
      }
    } else {
      this.options.scroll.scrollLeft += this.scrollSpeed[0] * delta / 1000;
      this.options.scroll.scrollTop  += this.scrollSpeed[1] * delta / 1000;
    }

    Position.prepare();
    Droppables.show(Draggables._lastPointer, this.element);
    Draggables.notify('onDrag', this);
    if (this._isScrollChild) {
      Draggables._lastScrollPointer = Draggables._lastScrollPointer || $A(Draggables._lastPointer);
      Draggables._lastScrollPointer[0] += this.scrollSpeed[0] * delta / 1000;
      Draggables._lastScrollPointer[1] += this.scrollSpeed[1] * delta / 1000;
      if (Draggables._lastScrollPointer[0] < 0)
        Draggables._lastScrollPointer[0] = 0;
      if (Draggables._lastScrollPointer[1] < 0)
        Draggables._lastScrollPointer[1] = 0;
      this.draw(Draggables._lastScrollPointer);
    }

    if(this.options.change) this.options.change(this);
  },

  _getWindowScroll: function(w) {
    var T, L, W, H;
    with (w.document) {
      if (w.document.documentElement && documentElement.scrollTop) {
        T = documentElement.scrollTop;
        L = documentElement.scrollLeft;
      } else if (w.document.body) {
        T = body.scrollTop;
        L = body.scrollLeft;
      }
      if (w.innerWidth) {
        W = w.innerWidth;
        H = w.innerHeight;
      } else if (w.document.documentElement && documentElement.clientWidth) {
        W = documentElement.clientWidth;
        H = documentElement.clientHeight;
      } else {
        W = body.offsetWidth;
        H = body.offsetHeight;
      }
    }
    return { top: T, left: L, width: W, height: H };
  }
});

Draggable._dragging = { };

/*--------------------------------------------------------------------------*/

var SortableObserver = Class.create({
  initialize: function(element, observer) {
    this.element   = $(element);
    this.observer  = observer;
    this.lastValue = Sortable.serialize(this.element);
  },

  onStart: function() {
    this.lastValue = Sortable.serialize(this.element);
  },

  onEnd: function() {
    Sortable.unmark();
    if(this.lastValue != Sortable.serialize(this.element))
      this.observer(this.element)
  }
});

var Sortable = {
  SERIALIZE_RULE: /^[^_\-](?:[A-Za-z0-9\-\_]*)[_](.*)$/,

  sortables: { },

  _findRootElement: function(element) {
    while (element.tagName.toUpperCase() != "BODY") {
      if(element.id && Sortable.sortables[element.id]) return element;
      element = element.parentNode;
    }
  },

  options: function(element) {
    element = Sortable._findRootElement($(element));
    if(!element) return;
    return Sortable.sortables[element.id];
  },

  destroy: function(element){
    element = $(element);
    var s = Sortable.sortables[element.id];

    if(s) {
      Draggables.removeObserver(s.element);
      s.droppables.each(function(d){ Droppables.remove(d) });
      s.draggables.invoke('destroy');

      delete Sortable.sortables[s.element.id];
    }
  },

  create: function(element) {
    element = $(element);
    var options = Object.extend({
      element:     element,
      tag:         'li',       // assumes li children, override with tag: 'tagname'
      dropOnEmpty: false,
      tree:        false,
      treeTag:     'ul',
      overlap:     'vertical', // one of 'vertical', 'horizontal'
      constraint:  'vertical', // one of 'vertical', 'horizontal', false
      containment: element,    // also takes array of elements (or id's); or false
      handle:      false,      // or a CSS class
      only:        false,
      delay:       0,
      hoverclass:  null,
      ghosting:    false,
      quiet:       false,
      scroll:      false,
      scrollSensitivity: 20,
      scrollSpeed: 15,
      format:      this.SERIALIZE_RULE,

      // these take arrays of elements or ids and can be
      // used for better initialization performance
      elements:    false,
      handles:     false,

      onChange:    Prototype.emptyFunction,
      onUpdate:    Prototype.emptyFunction
    }, arguments[1] || { });

    // clear any old sortable with same element
    this.destroy(element);

    // build options for the draggables
    var options_for_draggable = {
      revert:      true,
      quiet:       options.quiet,
      scroll:      options.scroll,
      scrollSpeed: options.scrollSpeed,
      scrollSensitivity: options.scrollSensitivity,
      delay:       options.delay,
      ghosting:    options.ghosting,
      constraint:  options.constraint,
      handle:      options.handle };

    if(options.starteffect)
      options_for_draggable.starteffect = options.starteffect;

    if(options.reverteffect)
      options_for_draggable.reverteffect = options.reverteffect;
    else
      if(options.ghosting) options_for_draggable.reverteffect = function(element) {
        element.style.top  = 0;
        element.style.left = 0;
      };

    if(options.endeffect)
      options_for_draggable.endeffect = options.endeffect;

    if(options.zindex)
      options_for_draggable.zindex = options.zindex;

    // build options for the droppables
    var options_for_droppable = {
      overlap:     options.overlap,
      containment: options.containment,
      tree:        options.tree,
      hoverclass:  options.hoverclass,
      onHover:     Sortable.onHover
    };

    var options_for_tree = {
      onHover:      Sortable.onEmptyHover,
      overlap:      options.overlap,
      containment:  options.containment,
      hoverclass:   options.hoverclass
    };

    // fix for gecko engine
    Element.cleanWhitespace(element);

    options.draggables = [];
    options.droppables = [];

    // drop on empty handling
    if(options.dropOnEmpty || options.tree) {
      Droppables.add(element, options_for_tree);
      options.droppables.push(element);
    }

    (options.elements || this.findElements(element, options) || []).each( function(e,i) {
      var handle = options.handles ? $(options.handles[i]) :
        (options.handle ? $(e).select('.' + options.handle)[0] : e);
      options.draggables.push(
        new Draggable(e, Object.extend(options_for_draggable, { handle: handle })));
      Droppables.add(e, options_for_droppable);
      if(options.tree) e.treeNode = element;
      options.droppables.push(e);
    });

    if(options.tree) {
      (Sortable.findTreeElements(element, options) || []).each( function(e) {
        Droppables.add(e, options_for_tree);
        e.treeNode = element;
        options.droppables.push(e);
      });
    }

    // keep reference
    this.sortables[element.identify()] = options;

    // for onupdate
    Draggables.addObserver(new SortableObserver(element, options.onUpdate));

  },

  // return all suitable-for-sortable elements in a guaranteed order
  findElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.tag);
  },

  findTreeElements: function(element, options) {
    return Element.findChildren(
      element, options.only, options.tree ? true : false, options.treeTag);
  },

  onHover: function(element, dropon, overlap) {
    if(Element.isParent(dropon, element)) return;

    if(overlap > .33 && overlap < .66 && Sortable.options(dropon).tree) {
      return;
    } else if(overlap>0.5) {
      Sortable.mark(dropon, 'before');
      if(dropon.previousSibling != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, dropon);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    } else {
      Sortable.mark(dropon, 'after');
      var nextElement = dropon.nextSibling || null;
      if(nextElement != element) {
        var oldParentNode = element.parentNode;
        element.style.visibility = "hidden"; // fix gecko rendering
        dropon.parentNode.insertBefore(element, nextElement);
        if(dropon.parentNode!=oldParentNode)
          Sortable.options(oldParentNode).onChange(element);
        Sortable.options(dropon.parentNode).onChange(element);
      }
    }
  },

  onEmptyHover: function(element, dropon, overlap) {
    var oldParentNode = element.parentNode;
    var droponOptions = Sortable.options(dropon);

    if(!Element.isParent(dropon, element)) {
      var index;

      var children = Sortable.findElements(dropon, {tag: droponOptions.tag, only: droponOptions.only});
      var child = null;

      if(children) {
        var offset = Element.offsetSize(dropon, droponOptions.overlap) * (1.0 - overlap);

        for (index = 0; index < children.length; index += 1) {
          if (offset - Element.offsetSize (children[index], droponOptions.overlap) >= 0) {
            offset -= Element.offsetSize (children[index], droponOptions.overlap);
          } else if (offset - (Element.offsetSize (children[index], droponOptions.overlap) / 2) >= 0) {
            child = index + 1 < children.length ? children[index + 1] : null;
            break;
          } else {
            child = children[index];
            break;
          }
        }
      }

      dropon.insertBefore(element, child);

      Sortable.options(oldParentNode).onChange(element);
      droponOptions.onChange(element);
    }
  },

  unmark: function() {
    if(Sortable._marker) Sortable._marker.hide();
  },

  mark: function(dropon, position) {
    // mark on ghosting only
    var sortable = Sortable.options(dropon.parentNode);
    if(sortable && !sortable.ghosting) return;

    if(!Sortable._marker) {
      Sortable._marker =
        ($('dropmarker') || Element.extend(document.createElement('DIV'))).
          hide().addClassName('dropmarker').setStyle({position:'absolute'});
      document.getElementsByTagName("body").item(0).appendChild(Sortable._marker);
    }
    var offsets = dropon.cumulativeOffset();
    Sortable._marker.setStyle({left: offsets[0]+'px', top: offsets[1] + 'px'});

    if(position=='after')
      if(sortable.overlap == 'horizontal')
        Sortable._marker.setStyle({left: (offsets[0]+dropon.clientWidth) + 'px'});
      else
        Sortable._marker.setStyle({top: (offsets[1]+dropon.clientHeight) + 'px'});

    Sortable._marker.show();
  },

  _tree: function(element, options, parent) {
    var children = Sortable.findElements(element, options) || [];

    for (var i = 0; i < children.length; ++i) {
      var match = children[i].id.match(options.format);

      if (!match) continue;

      var child = {
        id: encodeURIComponent(match ? match[1] : null),
        element: element,
        parent: parent,
        children: [],
        position: parent.children.length,
        container: $(children[i]).down(options.treeTag)
      };

      /* Get the element containing the children and recurse over it */
      if (child.container)
        this._tree(child.container, options, child);

      parent.children.push (child);
    }

    return parent;
  },

  tree: function(element) {
    element = $(element);
    var sortableOptions = this.options(element);
    var options = Object.extend({
      tag: sortableOptions.tag,
      treeTag: sortableOptions.treeTag,
      only: sortableOptions.only,
      name: element.id,
      format: sortableOptions.format
    }, arguments[1] || { });

    var root = {
      id: null,
      parent: null,
      children: [],
      container: element,
      position: 0
    };

    return Sortable._tree(element, options, root);
  },

  /* Construct a [i] index for a particular node */
  _constructIndex: function(node) {
    var index = '';
    do {
      if (node.id) index = '[' + node.position + ']' + index;
    } while ((node = node.parent) != null);
    return index;
  },

  sequence: function(element) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[1] || { });

    return $(this.findElements(element, options) || []).map( function(item) {
      return item.id.match(options.format) ? item.id.match(options.format)[1] : '';
    });
  },

  setSequence: function(element, new_sequence) {
    element = $(element);
    var options = Object.extend(this.options(element), arguments[2] || { });

    var nodeMap = { };
    this.findElements(element, options).each( function(n) {
        if (n.id.match(options.format))
            nodeMap[n.id.match(options.format)[1]] = [n, n.parentNode];
        n.parentNode.removeChild(n);
    });

    new_sequence.each(function(ident) {
      var n = nodeMap[ident];
      if (n) {
        n[1].appendChild(n[0]);
        delete nodeMap[ident];
      }
    });
  },

  serialize: function(element) {
    element = $(element);
    var options = Object.extend(Sortable.options(element), arguments[1] || { });
    var name = encodeURIComponent(
      (arguments[1] && arguments[1].name) ? arguments[1].name : element.id);

    if (options.tree) {
      return Sortable.tree(element, arguments[1]).children.map( function (item) {
        return [name + Sortable._constructIndex(item) + "[id]=" +
                encodeURIComponent(item.id)].concat(item.children.map(arguments.callee));
      }).flatten().join('&');
    } else {
      return Sortable.sequence(element, arguments[1]).map( function(item) {
        return name + "[]=" + encodeURIComponent(item);
      }).join('&');
    }
  }
};

// Returns true if child is contained within element
Element.isParent = function(child, element) {
  if (!child.parentNode || child == element) return false;
  if (child.parentNode == element) return true;
  return Element.isParent(child.parentNode, element);
};

Element.findChildren = function(element, only, recursive, tagName) {
  if(!element.hasChildNodes()) return null;
  tagName = tagName.toUpperCase();
  if(only) only = [only].flatten();
  var elements = [];
  $A(element.childNodes).each( function(e) {
    if(e.tagName && e.tagName.toUpperCase()==tagName &&
      (!only || (Element.classNames(e).detect(function(v) { return only.include(v) }))))
        elements.push(e);
    if(recursive) {
      var grandchildren = Element.findChildren(e, only, recursive, tagName);
      if(grandchildren) elements.push(grandchildren);
    }
  });

  return (elements.length>0 ? elements.flatten() : []);
};

Element.offsetSize = function (element, type) {
  return element['offset' + ((type=='vertical' || type=='height') ? 'Height' : 'Width')];
};
// script.aculo.us controls.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2008 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2008 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element);
    this.element     = element;
    this.update      = $(update);
    this.hasFocus    = false;
    this.changed     = false;
    this.active      = false;
    this.index       = 0;
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow ||
      function(element, update){
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide ||
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string')
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;

    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix &&
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update,
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },

  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN ||
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer =
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex)
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },

  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },

  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;
  },

  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ?
          Element.addClassName(this.getEntry(i),"selected") :
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) {
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },

  markPrevious: function() {
    if(this.index > 0) this.index--;
      else this.index = this.entryCount-1;
    //this.getEntry(this.index).scrollIntoView(true); useless
  },

  markNext: function() {
    if(this.index < this.entryCount-1) this.index++;
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },

  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },

  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },

  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');

    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();

    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount =
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else {
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;

      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();

    var entry = encodeURIComponent(this.options.paramName) + '=' +
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams)
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" +
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
};

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML.unescapeHTML();
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw('Server returned an invalid collection representation.');
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element);
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});
// script.aculo.us slider.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Marty Haught, Thomas Fuchs
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

if (!Control) var Control = { };

// options:
//  axis: 'vertical', or 'horizontal' (default)
//
// callbacks:
//  onChange(value)
//  onSlide(value)
Control.Slider = Class.create({
  initialize: function(handle, track, options) {
    var slider = this;

    if (Object.isArray(handle)) {
      this.handles = handle.collect( function(e) { return $(e) });
    } else {
      this.handles = [$(handle)];
    }

    this.track   = $(track);
    this.options = options || { };

    this.axis      = this.options.axis || 'horizontal';
    this.increment = this.options.increment || 1;
    this.step      = parseInt(this.options.step || '1');
    this.range     = this.options.range || $R(0,1);

    this.value     = 0; // assure backwards compat
    this.values    = this.handles.map( function() { return 0 });
    this.spans     = this.options.spans ? this.options.spans.map(function(s){ return $(s) }) : false;
    this.options.startSpan = $(this.options.startSpan || null);
    this.options.endSpan   = $(this.options.endSpan || null);

    this.restricted = this.options.restricted || false;

    this.maximum   = this.options.maximum || this.range.end;
    this.minimum   = this.options.minimum || this.range.start;

    // Will be used to align the handle onto the track, if necessary
    this.alignX = parseInt(this.options.alignX || '0');
    this.alignY = parseInt(this.options.alignY || '0');

    this.trackLength = this.maximumOffset() - this.minimumOffset();

    this.handleLength = this.isVertical() ?
      (this.handles[0].offsetHeight != 0 ?
        this.handles[0].offsetHeight : this.handles[0].style.height.replace(/px$/,"")) :
      (this.handles[0].offsetWidth != 0 ? this.handles[0].offsetWidth :
        this.handles[0].style.width.replace(/px$/,""));

    this.active   = false;
    this.dragging = false;
    this.disabled = false;

    if (this.options.disabled) this.setDisabled();

    // Allowed values array
    this.allowedValues = this.options.values ? this.options.values.sortBy(Prototype.K) : false;
    if (this.allowedValues) {
      this.minimum = this.allowedValues.min();
      this.maximum = this.allowedValues.max();
    }

    this.eventMouseDown = this.startDrag.bindAsEventListener(this);
    this.eventMouseUp   = this.endDrag.bindAsEventListener(this);
    this.eventMouseMove = this.update.bindAsEventListener(this);

    // Initialize handles in reverse (make sure first handle is active)
    this.handles.each( function(h,i) {
      i = slider.handles.length-1-i;
      slider.setValue(parseFloat(
        (Object.isArray(slider.options.sliderValue) ?
          slider.options.sliderValue[i] : slider.options.sliderValue) ||
         slider.range.start), i);
      h.makePositioned().observe("mousedown", slider.eventMouseDown);
    });

    this.track.observe("mousedown", this.eventMouseDown);
    document.observe("mouseup", this.eventMouseUp);
    $(this.track.parentNode.parentNode).observe("mousemove", this.eventMouseMove);


    this.initialized = true;
  },
  dispose: function() {
    var slider = this;
    Event.stopObserving(this.track, "mousedown", this.eventMouseDown);
    Event.stopObserving(document, "mouseup", this.eventMouseUp);
    Event.stopObserving(this.track.parentNode.parentNode, "mousemove", this.eventMouseMove);
    this.handles.each( function(h) {
      Event.stopObserving(h, "mousedown", slider.eventMouseDown);
    });
  },
  setDisabled: function(){
    this.disabled = true;
    this.track.parentNode.className = this.track.parentNode.className + ' disabled';
  },
  setEnabled: function(){
    this.disabled = false;
  },
  getNearestValue: function(value){
    if (this.allowedValues){
      if (value >= this.allowedValues.max()) return(this.allowedValues.max());
      if (value <= this.allowedValues.min()) return(this.allowedValues.min());

      var offset = Math.abs(this.allowedValues[0] - value);
      var newValue = this.allowedValues[0];
      this.allowedValues.each( function(v) {
        var currentOffset = Math.abs(v - value);
        if (currentOffset <= offset){
          newValue = v;
          offset = currentOffset;
        }
      });
      return newValue;
    }
    if (value > this.range.end) return this.range.end;
    if (value < this.range.start) return this.range.start;
    return value;
  },
  setValue: function(sliderValue, handleIdx){
    if (!this.active) {
      this.activeHandleIdx = handleIdx || 0;
      this.activeHandle    = this.handles[this.activeHandleIdx];
      this.updateStyles();
    }
    handleIdx = handleIdx || this.activeHandleIdx || 0;
    if (this.initialized && this.restricted) {
      if ((handleIdx>0) && (sliderValue<this.values[handleIdx-1]))
        sliderValue = this.values[handleIdx-1];
      if ((handleIdx < (this.handles.length-1)) && (sliderValue>this.values[handleIdx+1]))
        sliderValue = this.values[handleIdx+1];
    }
    sliderValue = this.getNearestValue(sliderValue);
    this.values[handleIdx] = sliderValue;
    this.value = this.values[0]; // assure backwards compat

    this.handles[handleIdx].style[this.isVertical() ? 'top' : 'left'] =
      this.translateToPx(sliderValue);

    this.drawSpans();
    if (!this.dragging || !this.event) this.updateFinished();
  },
  setValueBy: function(delta, handleIdx) {
    this.setValue(this.values[handleIdx || this.activeHandleIdx || 0] + delta,
      handleIdx || this.activeHandleIdx || 0);
  },
  translateToPx: function(value) {
    return Math.round(
      ((this.trackLength-this.handleLength)/(this.range.end-this.range.start)) *
      (value - this.range.start)) + "px";
  },
  translateToValue: function(offset) {
    return ((offset/(this.trackLength-this.handleLength) *
      (this.range.end-this.range.start)) + this.range.start);
  },
  getRange: function(range) {
    var v = this.values.sortBy(Prototype.K);
    range = range || 0;
    return $R(v[range],v[range+1]);
  },
  minimumOffset: function(){
    return(this.isVertical() ? this.alignY : this.alignX);
  },
  maximumOffset: function(){
    return(this.isVertical() ?
      (this.track.offsetHeight != 0 ? this.track.offsetHeight :
        this.track.style.height.replace(/px$/,"")) - this.alignY :
      (this.track.offsetWidth != 0 ? this.track.offsetWidth :
        this.track.style.width.replace(/px$/,"")) - this.alignX);
  },
  isVertical:  function(){
    return (this.axis == 'vertical');
  },
  drawSpans: function() {
    var slider = this;
    if (this.spans)
      $R(0, this.spans.length-1).each(function(r) { slider.setSpan(slider.spans[r], slider.getRange(r)) });
    if (this.options.startSpan)
      this.setSpan(this.options.startSpan,
        $R(0, this.values.length>1 ? this.getRange(0).min() : this.value ));
    if (this.options.endSpan)
      this.setSpan(this.options.endSpan,
        $R(this.values.length>1 ? this.getRange(this.spans.length-1).max() : this.value, this.maximum));
  },
  setSpan: function(span, range) {
    if (this.isVertical()) {
      span.style.top = this.translateToPx(range.start);
      span.style.height = this.translateToPx(range.end - range.start + this.range.start);
    } else {
      span.style.left = this.translateToPx(range.start);
      span.style.width = this.translateToPx(range.end - range.start + this.range.start);
    }
  },
  updateStyles: function() {
    this.handles.each( function(h){ Element.removeClassName(h, 'selected') });
    Element.addClassName(this.activeHandle, 'selected');
  },
  startDrag: function(event) {
    if (Event.isLeftClick(event)) {
      if (!this.disabled){
        this.active = true;

        var handle = Event.element(event);
        var pointer  = [Event.pointerX(event), Event.pointerY(event)];
        var track = handle;
        if (track==this.track) {
          var offsets  = Position.cumulativeOffset(this.track);
          this.event = event;
          this.setValue(this.translateToValue(
           (this.isVertical() ? pointer[1]-offsets[1] : pointer[0]-offsets[0])-(this.handleLength/2)
          ));
          var offsets  = Position.cumulativeOffset(this.activeHandle);
          this.offsetX = (pointer[0] - offsets[0]);
          this.offsetY = (pointer[1] - offsets[1]);
        } else {
          // find the handle (prevents issues with Safari)
          while((this.handles.indexOf(handle) == -1) && handle.parentNode)
            handle = handle.parentNode;

          if (this.handles.indexOf(handle)!=-1) {
            this.activeHandle    = handle;
            this.activeHandleIdx = this.handles.indexOf(this.activeHandle);
            this.updateStyles();

            var offsets  = Position.cumulativeOffset(this.activeHandle);
            this.offsetX = (pointer[0] - offsets[0]);
            this.offsetY = (pointer[1] - offsets[1]);
          }
        }
      }
      Event.stop(event);
    }
  },
  update: function(event) {
   if (this.active) {
      if (!this.dragging) this.dragging = true;
      this.draw(event);
      if (Prototype.Browser.WebKit) window.scrollBy(0,0);
      Event.stop(event);
   }
  },
  draw: function(event) {
    var pointer = [Event.pointerX(event), Event.pointerY(event)];
    var offsets = Position.cumulativeOffset(this.track);
    pointer[0] -= this.offsetX + offsets[0];
    pointer[1] -= this.offsetY + offsets[1];
    this.event = event;
    this.setValue(this.translateToValue( this.isVertical() ? pointer[1] : pointer[0] ));
    if (this.initialized && this.options.onSlide)
      this.options.onSlide(this.values.length>1 ? this.values : this.value, this);
  },
  endDrag: function(event) {
    if (this.active && this.dragging) {
      this.finishDrag(event, true);
      Event.stop(event);
    }
    this.active = false;
    this.dragging = false;
  },
  finishDrag: function(event, success) {
    this.active = false;
    this.dragging = false;
    this.updateFinished();
  },
  updateFinished: function() {
    if (this.initialized && this.options.onChange)
      this.options.onChange(this.values.length>1 ? this.values : this.value, this);
    this.event = null;
  }
});
/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = url;
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = url;
}

function setLanguageCode(code, fromCode){
    //TODO: javascript cookies have different domain and path than php cookies
    var href = window.location.href;
    var after = '', dash;
    if (dash = href.match(/\#(.*)$/)) {
        href = href.replace(/\#(.*)$/, '');
        after = dash[0];
    }

    if (href.match(/[?]/)) {
        var re = /([?&]store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '$1'+code);
        } else {
            href += '&store='+code;
        }

        var re = /([?&]from_store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '');
        }
    } else {
        href += '?store='+code;
    }
    if (typeof(fromCode) != 'undefined') {
        href += '&from_store='+fromCode;
    }
    href += after;

    setLocation(href);
}

/**
 * Add classes to specified elements.
 * Supported classes are: 'odd', 'even', 'first', 'last'
 *
 * @param elements - array of elements to be decorated
 * [@param decorateParams] - array of classes to be set. If omitted, all available will be used
 */
function decorateGeneric(elements, decorateParams)
{
    var allSupportedParams = ['odd', 'even', 'first', 'last'];
    var _decorateParams = {};
    var total = elements.length;

    if (total) {
        // determine params called
        if (typeof(decorateParams) == 'undefined') {
            decorateParams = allSupportedParams;
        }
        if (!decorateParams.length) {
            return;
        }
        for (var k in allSupportedParams) {
            _decorateParams[allSupportedParams[k]] = false;
        }
        for (var k in decorateParams) {
            _decorateParams[decorateParams[k]] = true;
        }

        // decorate elements
        // elements[0].addClassName('first'); // will cause bug in IE (#5587)
        if (_decorateParams.first) {
            Element.addClassName(elements[0], 'first');
        }
        if (_decorateParams.last) {
            Element.addClassName(elements[total-1], 'last');
        }
        for (var i = 0; i < total; i++) {
            if ((i + 1) % 2 == 0) {
                if (_decorateParams.even) {
                    Element.addClassName(elements[i], 'even');
                }
            }
            else {
                if (_decorateParams.odd) {
                    Element.addClassName(elements[i], 'odd');
                }
            }
        }
    }
}

/**
 * Decorate table rows and cells, tbody etc
 * @see decorateGeneric()
 */
function decorateTable(table, options) {
    var table = $(table);
    if (table) {
        // set default options
        var _options = {
            'tbody'    : false,
            'tbody tr' : ['odd', 'even', 'first', 'last'],
            'thead tr' : ['first', 'last'],
            'tfoot tr' : ['first', 'last'],
            'tr td'    : ['last']
        };
        // overload options
        if (typeof(options) != 'undefined') {
            for (var k in options) {
                _options[k] = options[k];
            }
        }
        // decorate
        if (_options['tbody']) {
            decorateGeneric(table.select('tbody'), _options['tbody']);
        }
        if (_options['tbody tr']) {
            decorateGeneric(table.select('tbody tr'), _options['tbody tr']);
        }
        if (_options['thead tr']) {
            decorateGeneric(table.select('thead tr'), _options['thead tr']);
        }
        if (_options['tfoot tr']) {
            decorateGeneric(table.select('tfoot tr'), _options['tfoot tr']);
        }
        if (_options['tr td']) {
            var allRows = table.select('tr');
            if (allRows.length) {
                for (var i = 0; i < allRows.length; i++) {
                    decorateGeneric(allRows[i].getElementsByTagName('TD'), _options['tr td']);
                }
            }
        }
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li')
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last']);
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateDataList(list) {
    list = $(list);
    if (list) {
        decorateGeneric(list.select('dt'), ['odd', 'even', 'last']);
        decorateGeneric(list.select('dd'), ['odd', 'even', 'last']);
    }
}

/**
 * Parse SID and produces the correct URL
 */
function parseSidUrl(baseUrl, urlExt) {
    var sidPos = baseUrl.indexOf('/?SID=');
    var sid = '';
    urlExt = (urlExt != undefined) ? urlExt : '';

    if(sidPos > -1) {
        sid = '?' + baseUrl.substring(sidPos + 2);
        baseUrl = baseUrl.substring(0, sidPos + 1);
    }

    return baseUrl+urlExt+sid;
}

/**
 * Formats currency using patern
 * format - JSON (pattern, decimal, decimalsDelimeter, groupsDelimeter)
 * showPlus - true (always show '+'or '-'),
 *      false (never show '-' even if number is negative)
 *      null (show '-' if number is negative)
 */

function formatCurrency(price, format, showPlus){
    var precision = isNaN(format.precision = Math.abs(format.precision)) ? 2 : format.precision;
    var requiredPrecision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;

    //precision = (precision > requiredPrecision) ? precision : requiredPrecision;
    //for now we don't need this difference so precision is requiredPrecision
    precision = requiredPrecision;

    var integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;

    var decimalSymbol = format.decimalSymbol == undefined ? "," : format.decimalSymbol;
    var groupSymbol = format.groupSymbol == undefined ? "." : format.groupSymbol;
    var groupLength = format.groupLength == undefined ? 3 : format.groupLength;

    var s = '';

    if (showPlus == undefined || showPlus == true) {
        s = price < 0 ? "-" : ( showPlus ? "+" : "");
    } else if (showPlus == false) {
        s = '';
    }

    var i = parseInt(price = Math.abs(+price || 0).toFixed(precision)) + "";
    var pad = (i.length < integerRequired) ? (integerRequired - i.length) : 0;
    while (pad) { i = '0' + i; pad--; }
    j = (j = i.length) > groupLength ? j % groupLength : 0;
    re = new RegExp("(\\d{" + groupLength + "})(?=\\d)", "g");

    /**
     * replace(/-/, 0) is only for fixing Safari bug which appears
     * when Math.abs(0).toFixed() executed on "0" number.
     * Result is "0.-0" :(
     */
    var r = (j ? i.substr(0, j) + groupSymbol : "") + i.substr(j).replace(re, "$1" + groupSymbol) + (precision ? decimalSymbol + Math.abs(price - i).toFixed(precision).replace(/-/, 0).slice(2) : "")
    var pattern = '';
    if (format.pattern.indexOf('{sign}') == -1) {
        pattern = s + format.pattern;
    } else {
        pattern = format.pattern.replace('{sign}', s);
    }

    return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

function expandDetails(el, childClass) {
    if (Element.hasClassName(el,'show-details')) {
        $$(childClass).each(function(item){item.hide()});
        Element.removeClassName(el,'show-details');
    }
    else {
        $$(childClass).each(function(item){item.show()});
        Element.addClassName(el,'show-details');
    }
}

// Version 1.0
var isIE = navigator.appVersion.match(/MSIE/) == "MSIE";

if (!window.Varien)
    var Varien = new Object();

Varien.showLoading = function(){
    var loader = $('loading-process');
    loader && loader.show();
}
Varien.hideLoading = function(){
    var loader = $('loading-process');
    loader && loader.hide();
}
Varien.GlobalHandlers = {
    onCreate: function() {
        Varien.showLoading();
    },

    onComplete: function() {
        if(Ajax.activeRequestCount == 0) {
            Varien.hideLoading();
        }
    }
};

Ajax.Responders.register(Varien.GlobalHandlers);

/**
 * Quick Search form client model
 */
Varien.searchForm = Class.create();
Varien.searchForm.prototype = {
    initialize : function(form, field, emptyText){
        this.form   = $(form);
        this.field  = $(field);
        this.emptyText = emptyText;

        Event.observe(this.form,  'submit', this.submit.bind(this));
        Event.observe(this.field, 'focus', this.focus.bind(this));
        Event.observe(this.field, 'blur', this.blur.bind(this));
        this.blur();
    },

    submit : function(event){
        if (this.field.value == this.emptyText || this.field.value == ''){
            Event.stop(event);
            return false;
        }
        return true;
    },

    focus : function(event){
        if(this.field.value==this.emptyText){
            this.field.value='';
        }

    },

    blur : function(event){
        if(this.field.value==''){
            this.field.value=this.emptyText;
        }
    },

    initAutocomplete : function(url, destinationElement){
        new Ajax.Autocompleter(
            this.field,
            destinationElement,
            url,
            {
                paramName: this.field.name,
                method: 'get',
                minChars: 2,
                updateElement: this._selectAutocompleteItem.bind(this),
                onShow : function(element, update) {
                    if(!update.style.position || update.style.position=='absolute') {
                        update.style.position = 'absolute';
                        Position.clone(element, update, {
                            setHeight: false,
                            offsetTop: element.offsetHeight
                        });
                    }
                    Effect.Appear(update,{duration:0});
                }

            }
        );
    },

    _selectAutocompleteItem : function(element){
        if(element.title){
            this.field.value = element.title;
        }
        this.form.submit();
    }
}

Varien.Tabs = Class.create();
Varien.Tabs.prototype = {
  initialize: function(selector) {
    var self=this;
    $$(selector+' a').each(this.initTab.bind(this));
  },

  initTab: function(el) {
      el.href = 'javascript:void(0)';
      if ($(el.parentNode).hasClassName('active')) {
        this.showContent(el);
      }
      el.observe('click', this.showContent.bind(this, el));
  },

  showContent: function(a) {
    var li = $(a.parentNode), ul = $(li.parentNode);
    ul.getElementsBySelector('li', 'ol').each(function(el){
      var contents = $(el.id+'_contents');
      if (el==li) {
        el.addClassName('active');
        contents.show();
      } else {
        el.removeClassName('active');
        contents.hide();
      }
    });
  }
}

Varien.DateElement = Class.create();
Varien.DateElement.prototype = {
    initialize: function(type, content, required, format) {
        if (type == 'id') {
            // id prefix
            this.day    = $(content + 'day');
            this.month  = $(content + 'month');
            this.year   = $(content + 'year');
            this.full   = $(content + 'full');
            this.advice = $(content + 'date-advice');
        } else if (type == 'container') {
            // content must be container with data
            this.day    = content.day;
            this.month  = content.month;
            this.year   = content.year;
            this.full   = content.full;
            this.advice = content.advice;
        } else {
            return;
        }

        this.required = required;
        this.format   = format;

        this.day.addClassName('validate-custom');
        this.day.validate = this.validate.bind(this);
        this.month.addClassName('validate-custom');
        this.month.validate = this.validate.bind(this);
        this.year.addClassName('validate-custom');
        this.year.validate = this.validate.bind(this);

        this.setDateRange(false, false);
        this.year.setAttribute('autocomplete','off');

        this.advice.hide();
    },
    validate: function() {
        var error = false,
            day   = parseInt(this.day.value, 10)   || 0,
            month = parseInt(this.month.value, 10) || 0,
            year  = parseInt(this.year.value, 10)  || 0;
        if (this.day.value.strip().empty()
            && this.month.value.strip().empty()
            && this.year.value.strip().empty()
        ) {
            if (this.required) {
                error = 'This date is a required value.';
            } else {
                this.full.value = '';
            }
        } else if (!day || !month || !year) {
            error = 'Please enter a valid full date.';
        } else {
            var date = new Date, countDaysInMonth = 0, errorType = null;
            date.setYear(year);date.setMonth(month-1);date.setDate(32);
            countDaysInMonth = 32 - date.getDate();
            if(!countDaysInMonth || countDaysInMonth>31) countDaysInMonth = 31;

            if (day<1 || day>countDaysInMonth) {
                errorType = 'day';
                error = 'Please enter a valid day (1-%d).';
            } else if (month<1 || month>12) {
                errorType = 'month';
                error = 'Please enter a valid month (1-12).';
            } else {
                if(day % 10 == day) this.day.value = '0'+day;
                if(month % 10 == month) this.month.value = '0'+month;
                this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
                var testFull = this.month.value + '/' + this.day.value + '/'+ this.year.value;
                var test = new Date(testFull);
                if (isNaN(test)) {
                    error = 'Please enter a valid date.';
                } else {
                    this.setFullDate(test);
                }
            }
            var valueError = false;
            if (!error && !this.validateData()){//(year<1900 || year>curyear) {
                errorType = this.validateDataErrorType;//'year';
                valueError = this.validateDataErrorText;//'Please enter a valid year (1900-%d).';
                error = valueError;
            }
        }

        if (error !== false) {
            try {
                error = Translator.translate(error);
            }
            catch (e) {}
            if (!valueError) {
                this.advice.innerHTML = error.replace('%d', countDaysInMonth);
            } else {
                this.advice.innerHTML = this.errorTextModifier(error);
            }
            this.advice.show();
            return false;
        }

        // fixing elements class
        this.day.removeClassName('validation-failed');
        this.month.removeClassName('validation-failed');
        this.year.removeClassName('validation-failed');

        this.advice.hide();
        return true;
    },
    validateData: function() {
        var year = this.fullDate.getFullYear();
        var date = new Date;
        this.curyear = date.getFullYear();
        return (year>=1900 && year<=this.curyear);
    },
    validateDataErrorType: 'year',
    validateDataErrorText: 'Please enter a valid year (1900-%d).',
    errorTextModifier: function(text) {
        return text.replace('%d', this.curyear);
    },
    setDateRange: function(minDate, maxDate) {
        this.minDate = minDate;
        this.maxDate = maxDate;
    },
    setFullDate: function(date) {
        this.fullDate = date;
    }
};

Varien.DOB = Class.create();
Varien.DOB.prototype = {
    initialize: function(selector, required, format) {
        var el = $$(selector)[0];
        var container       = {};
        container.day       = Element.select(el, '.dob-day input')[0];
        container.month     = Element.select(el, '.dob-month input')[0];
        container.year      = Element.select(el, '.dob-year input')[0];
        container.full      = Element.select(el, '.dob-full input')[0];
        container.advice    = Element.select(el, '.validation-advice')[0];

        new Varien.DateElement('container', container, required, format);
    }
};

Varien.dateRangeDate = Class.create();
Varien.dateRangeDate.prototype = Object.extend(new Varien.DateElement(), {
    validateData: function() {
        var validate = true;
        if (this.minDate || this.maxValue) {
            if (this.minDate) {
                this.minDate = new Date(this.minDate);
                this.minDate.setHours(0);
                if (isNaN(this.minDate)) {
                    this.minDate = new Date('1/1/1900');
                }
                validate = validate && (this.fullDate >= this.minDate)
            }
            if (this.maxDate) {
                this.maxDate = new Date(this.maxDate)
                this.minDate.setHours(0);
                if (isNaN(this.maxDate)) {
                    this.maxDate = new Date();
                }
                validate = validate && (this.fullDate <= this.maxDate)
            }
            if (this.maxDate && this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date between %s and %s';
            } else if (this.maxDate) {
                this.validateDataErrorText = 'Please enter a valid date less than or equal to %s';
            } else if (this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date equal to or greater than %s';
            } else {
                this.validateDataErrorText = '';
            }
        }
        return validate;
    },
    validateDataErrorText: 'Date should be between %s and %s',
    errorTextModifier: function(text) {
        if (this.minDate) {
            text = text.sub('%s', this.dateFormat(this.minDate));
        }
        if (this.maxDate) {
            text = text.sub('%s', this.dateFormat(this.maxDate));
        }
        return text;
    },
    dateFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
});

Varien.FileElement = Class.create();
Varien.FileElement.prototype = {
    initialize: function (id) {
        this.fileElement = $(id);
        this.hiddenElement = $(id + '_value');

        this.fileElement.observe('change', this.selectFile.bind(this));
    },
    selectFile: function(event) {
        this.hiddenElement.value = this.fileElement.getValue();
    }
};

Validation.addAllThese([
    ['validate-custom', ' ', function(v,elm) {
        return elm.validate();
    }]
]);

function truncateOptions() {
    $$('.truncated').each(function(element){
        Event.observe(element, 'mouseover', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').addClassName('show')
            }
        });
        Event.observe(element, 'mouseout', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').removeClassName('show')
            }
        });

    });
}
Event.observe(window, 'load', function(){
   truncateOptions();
});

Element.addMethods({
    getInnerText: function(element)
    {
        element = $(element);
        if(element.innerText && !Prototype.Browser.Opera) {
            return element.innerText
        }
        return element.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, ' ').strip();
    }
});

/*
if (!("console" in window) || !("firebug" in console))
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
*/

/**
 * Executes event handler on the element. Works with event handlers attached by Prototype,
 * in a browser-agnostic fashion.
 * @param element The element object
 * @param event Event name, like 'change'
 *
 * @example fireEvent($('my-input', 'click'));
 */
function fireEvent(element, event) {
    if (document.createEvent) {
        // dispatch for all browsers except IE before version 9
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
        return element.dispatchEvent(evt);
    } else {
        // dispatch for IE before version 9
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt)
    }
}

/**
 * Returns more accurate results of floating-point modulo division
 * E.g.:
 * 0.6 % 0.2 = 0.19999999999999996
 * modulo(0.6, 0.2) = 0
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor)
{
    var epsilon = divisor / 10000;
    var remainder = dividend % divisor;

    if (Math.abs(remainder - divisor) < epsilon || Math.abs(remainder) < epsilon) {
        remainder = 0;
    }

    return remainder;
}

/**
 * createContextualFragment is not supported in IE9. Adding its support.
 */
if ((typeof Range != "undefined") && !Range.prototype.createContextualFragment)
{
    Range.prototype.createContextualFragment = function(html)
    {
        var frag = document.createDocumentFragment(),
        div = document.createElement("div");
        frag.appendChild(div);
        div.outerHTML = html;
        return frag;
    };
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */
VarienForm = Class.create();
VarienForm.prototype = {
    initialize: function(formId, firstFieldFocus){
        this.form       = $(formId);
        if (!this.form) {
            return;
        }
        this.cache      = $A();
        this.currLoader = false;
        this.currDataIndex = false;
        this.validator  = new Validation(this.form);
        this.elementFocus   = this.elementOnFocus.bindAsEventListener(this);
        this.elementBlur    = this.elementOnBlur.bindAsEventListener(this);
        this.childLoader    = this.onChangeChildLoad.bindAsEventListener(this);
        this.highlightClass = 'highlight';
        this.extraChildParams = '';
        this.firstFieldFocus= firstFieldFocus || false;
        this.bindElements();
        if(this.firstFieldFocus){
            try{
                Form.Element.focus(Form.findFirstElement(this.form))
            }
            catch(e){}
        }
    },

    submit : function(url){
        if(this.validator && this.validator.validate()){
             this.form.submit();
        }
        return false;
    },

    bindElements:function (){
        var elements = Form.getElements(this.form);
        for (var row in elements) {
            if (elements[row].id) {
                Event.observe(elements[row],'focus',this.elementFocus);
                Event.observe(elements[row],'blur',this.elementBlur);
            }
        }
    },

    elementOnFocus: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.addClassName(element, this.highlightClass);
        }
    },

    elementOnBlur: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.removeClassName(element, this.highlightClass);
        }
    },

    setElementsRelation: function(parent, child, dataUrl, first){
        if (parent=$(parent)) {
            // TODO: array of relation and caching
            if (!this.cache[parent.id]){
                this.cache[parent.id] = $A();
                this.cache[parent.id]['child']     = child;
                this.cache[parent.id]['dataUrl']   = dataUrl;
                this.cache[parent.id]['data']      = $A();
                this.cache[parent.id]['first']      = first || false;
            }
            Event.observe(parent,'change',this.childLoader);
        }
    },

    onChangeChildLoad: function(event){
        element = Event.element(event);
        this.elementChildLoad(element);
    },

    elementChildLoad: function(element, callback){
        this.callback = callback || false;
        if (element.value) {
            this.currLoader = element.id;
            this.currDataIndex = element.value;
            if (this.cache[element.id]['data'][element.value]) {
                this.setDataToChild(this.cache[element.id]['data'][element.value]);
            }
            else{
                new Ajax.Request(this.cache[this.currLoader]['dataUrl'],{
                        method: 'post',
                        parameters: {"parent":element.value},
                        onComplete: this.reloadChildren.bind(this)
                });
            }
        }
    },

    reloadChildren: function(transport){
        var data = eval('(' + transport.responseText + ')');
        this.cache[this.currLoader]['data'][this.currDataIndex] = data;
        this.setDataToChild(data);
    },

    setDataToChild: function(data){
        if (data.length) {
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<select name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                if(this.cache[this.currLoader]['first']){
                    html+= '<option value="">'+this.cache[this.currLoader]['first']+'</option>';
                }
                for (var i in data){
                    if(data[i].value) {
                        html+= '<option value="'+data[i].value+'"';
                        if(child.value && (child.value == data[i].value || child.value == data[i].label)){
                            html+= ' selected';
                        }
                        html+='>'+data[i].label+'</option>';
                    }
                }
                html+= '</select>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }
        else{
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<input type="text" name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }

        this.bindElements();
        if (this.callback) {
            this.callback();
        }
    }
}

RegionUpdater = Class.create();
RegionUpdater.prototype = {
    initialize: function (countryEl, regionTextEl, regionSelectEl, regions, disableAction, zipEl)
    {
        this.countryEl = $(countryEl);
        this.regionTextEl = $(regionTextEl);
        this.regionSelectEl = $(regionSelectEl);
        this.zipEl = $(zipEl);
        this.config = regions['config'];
        delete regions.config;
        this.regions = regions;

        this.disableAction = (typeof disableAction=='undefined') ? 'hide' : disableAction;
        this.zipOptions = (typeof zipOptions=='undefined') ? false : zipOptions;

        if (this.regionSelectEl.options.length<=1) {
            this.update();
        }

        Event.observe(this.countryEl, 'change', this.update.bind(this));
    },

    _checkRegionRequired: function()
    {
        var label, wildCard;
        var elements = [this.regionTextEl, this.regionSelectEl];
        var that = this;
        if (typeof this.config == 'undefined') {
            return;
        }
        var regionRequired = this.config.regions_required.indexOf(this.countryEl.value) >= 0;

        elements.each(function(currentElement) {
            Validation.reset(currentElement);
            label = $$('label[for="' + currentElement.id + '"]')[0];
            if (label) {
                wildCard = label.down('em') || label.down('span.required');
                if (!that.config.show_all_regions) {
                    if (regionRequired) {
                        label.up().show();
                    } else {
                        label.up().hide();
                    }
                }
            }

            if (label && wildCard) {
                if (!regionRequired) {
                    wildCard.hide();
                    if (label.hasClassName('required')) {
                        label.removeClassName('required');
                    }
                } else if (regionRequired) {
                    wildCard.show();
                    if (!label.hasClassName('required')) {
                        label.addClassName('required')
                    }
                }
            }

            if (!regionRequired) {
                if (currentElement.hasClassName('required-entry')) {
                    currentElement.removeClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    currentElement.hasClassName('validate-select')) {
                    currentElement.removeClassName('validate-select');
                }
            } else {
                if (!currentElement.hasClassName('required-entry')) {
                    currentElement.addClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    !currentElement.hasClassName('validate-select')) {
                    currentElement.addClassName('validate-select');
                }
            }
        });
    },

    update: function()
    {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }

            this.regionSelectEl.options.length = 1;
            for (regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId == def || (region.name && region.name.toLowerCase() == def)
                    || (region.name && region.code.toLowerCase() == def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            this.regionSelectEl.options.length = 1;
            this.sortSelect();
            if (this.disableAction == 'hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';
                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction == 'disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;
            } else if (this.disableAction == 'nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    },

    setMarkDisplay: function(elem, display){
        elem = $(elem);
        var labelElement = elem.up(0).down('label > span.required') ||
                           elem.up(1).down('label > span.required') ||
                           elem.up(0).down('label.required > em') ||
                           elem.up(1).down('label.required > em');
        if(labelElement) {
            inputElement = labelElement.up().next('input');
            if (display) {
                labelElement.show();
                if (inputElement) {
                    inputElement.addClassName('required-entry');
                }
            } else {
                labelElement.hide();
                if (inputElement) {
                    inputElement.removeClassName('required-entry');
                }
            }
        }
    },
    sortSelect : function () {
        var elem = this.regionSelectEl;
        var tmpArray = new Array();
        var currentVal = $(elem).value;
        for (var i = 0; i < $(elem).options.length; i++) {
            if (i == 0) {
                continue;
            }
            tmpArray[i-1] = new Array();
            tmpArray[i-1][0] = $(elem).options[i].text;
            tmpArray[i-1][1] = $(elem).options[i].value;
        }
        tmpArray.sort();
        for (var i = 1; i <= tmpArray.length; i++) {
            var op = new Option(tmpArray[i-1][0], tmpArray[i-1][1]);
            $(elem).options[i] = op;
        }
        $(elem).value = currentVal;
        return;
    }
}

ZipUpdater = Class.create();
ZipUpdater.prototype = {
    initialize: function(country, zipElement)
    {
        this.country = country;
        this.zipElement = $(zipElement);
    },

    update: function()
    {
        // Country ISO 2-letter codes must be pre-defined
        if (typeof optionalZipCountries == 'undefined') {
            return false;
        }

        // Ajax-request and normal content load compatibility
        if (this.zipElement != undefined) {
            Validation.reset(this.zipElement)
            this._setPostcodeOptional();
        } else {
            Event.observe(window, "load", this._setPostcodeOptional.bind(this));
        }
    },

    _setPostcodeOptional: function()
    {
        this.zipElement = $(this.zipElement);
        if (this.zipElement == undefined) {
            return false;
        }

        // find label
        var label = $$('label[for="' + this.zipElement.id + '"]')[0];
        if (label != undefined) {
            var wildCard = label.down('em') || label.down('span.required');
        }

        // Make Zip and its label required/optional
        if (optionalZipCountries.indexOf(this.country) != -1) {
            while (this.zipElement.hasClassName('required-entry')) {
                this.zipElement.removeClassName('required-entry');
            }
            if (wildCard != undefined) {
                wildCard.hide();
            }
        } else {
            this.zipElement.addClassName('required-entry');
            if (wildCard != undefined) {
                wildCard.show();
            }
        }
    }
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */

/**
 * @classDescription simple Navigation with replacing old handlers
 * @param {String} id id of ul element with navigation lists
 * @param {Object} settings object with settings
 */
var mainNav = function() {

    var main = {
        obj_nav :   $(arguments[0]) || $("nav"),

        settings :  {
            show_delay      :   0,
            hide_delay      :   0,
            _ie6            :   /MSIE 6.+Win/.test(navigator.userAgent),
            _ie7            :   /MSIE 7.+Win/.test(navigator.userAgent)
        },

        init :  function(obj, level) {
            obj.lists = obj.childElements();
            obj.lists.each(function(el,ind){
                main.handlNavElement(el);
                if((main.settings._ie6 || main.settings._ie7) && level){
                    main.ieFixZIndex(el, ind, obj.lists.size());
                }
            });
            if(main.settings._ie6 && !level){
                document.execCommand("BackgroundImageCache", false, true);
            }
        },

        handlNavElement :   function(list) {
            if(list !== undefined){
                list.onmouseover = function(){
                    main.fireNavEvent(this,true);
                };
                list.onmouseout = function(){
                    main.fireNavEvent(this,false);
                };
                if(list.down("ul")){
                    main.init(list.down("ul"), true);
                }
            }
        },

        ieFixZIndex : function(el, i, l) {
            if(el.tagName.toString().toLowerCase().indexOf("iframe") == -1){
                el.style.zIndex = l - i;
            } else {
                el.onmouseover = "null";
                el.onmouseout = "null";
            }
        },

        fireNavEvent :  function(elm,ev) {
            if(ev){
                elm.addClassName("over");
                elm.down("a").addClassName("over");
                if (elm.childElements()[1]) {
                    main.show(elm.childElements()[1]);
                }
            } else {
                elm.removeClassName("over");
                elm.down("a").removeClassName("over");
                if (elm.childElements()[1]) {
                    main.hide(elm.childElements()[1]);
                }
            }
        },

        show : function (sub_elm) {
            if (sub_elm.hide_time_id) {
                clearTimeout(sub_elm.hide_time_id);
            }
            sub_elm.show_time_id = setTimeout(function() {
                if (!sub_elm.hasClassName("shown-sub")) {
                    sub_elm.addClassName("shown-sub");
                }
            }, main.settings.show_delay);
        },

        hide : function (sub_elm) {
            if (sub_elm.show_time_id) {
                clearTimeout(sub_elm.show_time_id);
            }
            sub_elm.hide_time_id = setTimeout(function(){
                if (sub_elm.hasClassName("shown-sub")) {
                    sub_elm.removeClassName("shown-sub");
                }
            }, main.settings.hide_delay);
        }

    };
    if (arguments[1]) {
        main.settings = Object.extend(main.settings, arguments[1]);
    }
    if (main.obj_nav) {
        main.init(main.obj_nav, false);
    }
};

document.observe("dom:loaded", function() {
    //run navigation without delays and with default id="#nav"
    //mainNav();

    //run navigation with delays
    mainNav("nav", {"show_delay":"100","hide_delay":"100"});
});

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */

var Translate = Class.create();
Translate.prototype = {
    initialize: function(data){
        this.data = $H(data);
    },

    translate : function(){
        var args = arguments;
        var text = arguments[0];

        if(this.data.get(text)){
            return this.data.get(text);
        }
        return text;
    },
    add : function() {
        if (arguments.length > 1) {
            this.data.set(arguments[0], arguments[1]);
        } else if (typeof arguments[0] =='object') {
            $H(arguments[0]).each(function (pair){
                this.data.set(pair.key, pair.value);
            }.bind(this));
        }
    }
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */
// old school cookie functions grabbed off the web

if (!window.Mage) var Mage = {};

Mage.Cookies = {};
Mage.Cookies.expires  = null;
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = null;
Mage.Cookies.secure   = false;
Mage.Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : Mage.Cookies.expires;
     var path = (argc > 3) ? argv[3] : Mage.Cookies.path;
     var domain = (argc > 4) ? argv[4] : Mage.Cookies.domain;
     var secure = (argc > 5) ? argv[5] : Mage.Cookies.secure;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};

Mage.Cookies.get = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen){
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Mage.Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if(i == 0)
            break;
    }
    return null;
};

Mage.Cookies.clear = function(name) {
  if(Mage.Cookies.get(name)){
    document.cookie = name + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Mage.Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
};

/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
    Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
    This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();
/**********************************************************************************************
* JsCountdown Timer script by Praveen Lobo (http://PraveenLobo.com/techblog/javascript-JsCountdown-timer/)
* This notice MUST stay intact(in both JS file and SCRIPT tag) for legal use.
* http://praveenlobo.com/blog/disclaimer/
**********************************************************************************************/
var JsCountdown = Class.create();
JsCountdown.prototype = {
    initialize: function(fromDate, toDate, id, daysText, textColor){
        this.fromDate = new Date(fromDate);
        this.endDate = new Date(toDate);
        this.countainer = document.getElementById(id);
        this.daysText = daysText;
        this.textColor = textColor;
        this.numOfDays = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        this.borrowed = 0, this.years = 0, this.months = 0, this.days = 0;
        this.hours = 0, this.minutes = 0, this.seconds = 0;
        this.updateNumOfDays();
        this.updateCounter();
    },

    updateNumOfDays: function(){
        var dateNow = this.fromDate;
        var currYear = dateNow.getFullYear();
        if ( (currYear % 4 == 0 && currYear % 100 != 0 ) || currYear % 400 == 0 ) {
            this.numOfDays[1] = 29;
        }
        var self = this;
        setTimeout(function(){self.updateNumOfDays();}, (new Date((currYear+1), 1, 2) - dateNow));
    },

    datePartDiff: function(then, now, MAX){
        var diff = now - then - this.borrowed;
        this.borrowed = 0;
        if ( diff > -1 ) return diff;
        this.borrowed = 1;
        return (MAX + diff);
    },

    calculate: function(){
        var futureDate = this.endDate;
        var currDate = this.fromDate;
        var dateDiff = new Date(this.endDate-this.fromDate);
        var secs = Math.floor(dateDiff.valueOf()/1000);
        this.seconds = (Math.floor(secs/1))%60;
        this.minutes = (Math.floor(secs/60))%60;
        this.hours = (Math.floor(secs/3600))%24;
        if (secs >= 86400) {
            this.days = (Math.floor(secs/86400))%100000;
        } else {
            this.days = 0;
        }
        var newSecs = this.fromDate.getSeconds() + 1;
        this.fromDate.setSeconds(newSecs);
    },

    addLeadingZero: function(value){
        return value < 10 ? ("0" + value) : value;
    },

    formatTime: function(){
        this.seconds = this.addLeadingZero(this.seconds);
        this.minutes = this.addLeadingZero(this.minutes);
        this.hours = this.addLeadingZero(this.hours);
    },

    updateCounter: function(){
        this.calculate();
        this.formatTime();
        this.countainer.innerHTML = "<div class=\"js-countdown" + (this.days > 0? "-days" : "") + "\" style=\"color:" + this.textColor + "!important;\">" + (this.days > 0? "<strong>" + this.days + "</strong> " + this.daysText : "") + " <strong>" + this.hours + "</strong>:<strong>" + this.minutes + "</strong>:<strong>" + this.seconds + "</strong></div>";
        if ( this.endDate > this.fromDate ) {
            var self = this;
            setTimeout(function(){self.updateCounter();}, 1000);
        }
    }
};
/**
 * Varnish Caching Refresh Using Ajax
 */
function EdgeCastHeaderRefreshOnSuccess(data) {
    jQuery.each(data, function(block, content) {
        if (content) {
            jQuery('#' + block).html(content);
            if (block == 'headerCart') {
                jQuery('.ajaxify_header_cart').parent().html(content);
            }
            afterMofAjax();
        }
    });
}

window.onpageshow = function() {
    if (typeof localStorage !== 'undefined') {
        try {
            var data = JSON.parse(localStorage.getItem('privateContentCache'));
            if (data) {
                EdgeCastHeaderRefreshOnSuccess(data);
            }
        } catch (e) {
        }
    }
};

function EdgeCastHeaderRefresh(refreshUrl, callback) {
    new Ajax.Request(
        refreshUrl,
        {
            method: 'get',
            onSuccess: function(transport) {

                if (typeof localStorage !== 'undefined') {
                    try {
                        localStorage.setItem('privateContentCache', JSON.stringify(transport.responseJSON));
                    } catch(e) {
                    }
                }

                EdgeCastHeaderRefreshOnSuccess(transport.responseJSON);
                if (typeof callback == 'function') {
                    callback(transport.responseJSON);
                }
            }
        }
    );
}
var MultiOptionFilter=Class.create({initialize:function(a,b,c,d,e,f){this.url=a,this.ajax_search_layered=b,this.extra_updatehtml_func=c,this.filter_preaction_func=d,this.href_extract_func=null,this.live_req_cnt=0,this.use_exploded_ajaxmenu=e,this.use_history_pushState=f,this.use_loader=1,this.prefetch_next_page=0,this.request_params="",this.request_url=a,this.resetObserverArrays(),this._ajaxResponseContainer=null,this._defaultListLimit=100,this.requestId=0,this.nestedContainer=!1,this.productListScrollIntoViewThreshold=170,this.scrollProductListToView=!1,this.keepProductListHeaderInView=!0,this.boundingContainer=!1,this.lastRequestOptions={},this.filterState="undefined"!=typeof mof_filter_options?mof_filter_options:"",this.baseUrl=""},setBaseUrl:function(a){this.baseUrl=a},setFilterState:function(a){this.filterState=a},setScrollProductListToView:function(a){this.scrollProductListToView=a},setBoundingContainer:function(a){this.boundingContainer=a},addUpdateLayeredPanelHooks:function(a,b){this.hook_before_update=a,this.hook_after_update=b},setExtraUpdateHtmlFunc:function(a){this.extra_updatehtml_func=a},setExtraUpdateHtmlFuncAfterListeners:function(a){this.extra_updatehtml_func_after_listeners=a},setFilterPreactionFunc:function(a){this.filter_preaction_func=a},setExplodedMenuUpdateFunc:function(a){this.exploded_menu_update_func=a},setHrefExtractFunc:function(a){this.href_extract_func=a},setPrefetchNextPage:function(a){this.prefetch_next_page=a},setItemToggleFunc:function(a){this.item_toggle_func=a},setUseLoader:function(a){this.use_loader=a},resetObserverArrays:function(){this.obs_toolbars_click=new Array,this.obs_toolbars_change=new Array,this.obs_filter=new Array,this.obs_search=new Array,this.obs_others=new Array,this.obs_dupl_cnt=0},addEventListenersToFilterLinks:function(){var a=$$(".toolbar");a.each(function(a){$(a).select("select").length>0&&$(a).select("select").each(function(a){a.removeAttribute("onchange"),a.onchange=null}.bind(this))}.bind(this));var b=$$(".filter-block ul li a");b.each(function(a){this.obs_filter.indexOf(a)<0?(Event.observe(a,"click",this.multiOptionFilterAction.bind(this)),this.obs_filter.push(a)):this.obs_dupl_cnt++}.bind(this));var c=$$(".filter-block ul li .price_range");if(c.each(function(a){this.obs_filter.indexOf(a)<0?(Event.observe(a,"change",this.multiOptionFilterAction.bind(this)),this.obs_filter.push(a)):this.obs_dupl_cnt++}.bind(this)),a.each(function(a){$(a).select("a").length>0&&$(a).select("a").each(function(a){this.obs_toolbars_click.indexOf(a)<0?(Event.observe(a,"click",this.multiOptionFilterAction.bind(this)),this.obs_toolbars_click.push(a)):this.obs_dupl_cnt++}.bind(this)),$(a).select("select").length>0&&$(a).select("select").each(function(a){this.obs_toolbars_change.indexOf(a)<0?(Event.observe(a,"change",this.multiOptionFilterAction.bind(this)),this.obs_toolbars_change.push(a)):this.obs_dupl_cnt++}.bind(this))}.bind(this)),this.ajax_search_layered){var d=$("search_mini_form");d&&this.obs_search.indexOf(d)<0&&(Event.observe(d,"submit",this.multiOptionFilterAction.bind(this)),this.obs_search.push(d))}$$(".mof-view-all")&&$$(".mof-view-all").each(function(a){Event.observe(a,"click",this.multiOptionFilterAction.bind(this))}.bind(this)),$$(".selected-filters")&&$$(".selected-filters").length&&$$(".selected-filters").each(function(a){Event.observe(a,"click",this.multiOptionFilterAction.bind(this))}.bind(this))},addNodesToListeners:function(a,b){a&&a.each(function(a){this.obs_others.indexOf(a)<0?(Event.observe(a,b,this.multiOptionFilterAction.bind(this)),this.obs_others.push(a)):this.obs_dupl_cnt++}.bind(this))},getOptionIdFromLink:function(a){for(var b=$w(a.className),c=0;c<b.length;c++){var d=b[c].split("--");if(d.length>1)return d[1]}this.addNodesToListeners},extendQueryString:function(a,b,c){return a.indexOf("?")>=0&&"&"!=a.charAt(a.length-1)&&(a+="&"),c.length>0&&(a+=b+"="+c),a},updateLink:function(a,b,c,d){var e=a.readAttribute(b),f=e.indexOf(c+"=");if(f>0&&("?"==e[f-1]||"&"==e[f-1]))if("view-all"!=d){f+=c.length+1;for(var g=f-1;(g=e.indexOf(d,g+1))>0;){var h=g+d.length;if(("="==e[g-1]||","==e[g-1])&&(h>=e.length||"&"==e[h]||","==e[h])){e=","==e[g-1]?e.substr(0,g-1)+e.substr(h):"&"!=e[h]?e.substr(0,g)+e.substr(h+1):e.substr(0,g)+e.substr(h);break}}if(0>g){var i=e.substr(f);e=e.substr(0,f)+d,i&&(e+=","+i)}}else{var g=e.indexOf("&",f+1),j=e.substr(0,f);g>0&&(j+=e.substr(g)),e=j}else"view-all"!=d&&(a.hasClassName("mof-view-all")||(e=this.extendQueryString(e,c,d)));if("view-all"==d){var k=this.getOptionIdFromLink(a);k&&(e=this.extendQueryString(e,c,k))}return e},updateActiveMenuLinks:function(a,b){var c=this.attrib;a.select("a").each(function(a){var d=this.updateLink(a,"href",c,b);a.writeAttribute("href",d)}.bind(this))},setRequestUrl:function(a){this.request_url=a},multiOptionFilterAction:function(a){var b=null,c=null,d="",e=null;this.trigger_menu=null,this.attrib=null;var f=null;if(this.href_extract_func&&(b=this.href_extract_func(a)),a){if(null==b){var g=Event.findElement(a,"A");if(null!=g)b=g.readAttribute("href"),c=b,e=g.hasClassName("mof-view-all")?"view-all":this.getOptionIdFromLink(g),$(g).ancestors().each(function(a){$(a).hasClassName("filter-block")&&(f=a,$w(a.className).each(function(a){a.match(/\-\-/)&&(this.trigger_menu=a,this.attrib=this.trigger_menu.split("--")[1])}.bind(this)))}.bind(this)),this.attrib&&this.item_toggle_func&&this.item_toggle_func(g);else{var h=Event.findElement(a,".price_range");if(h){d=this.filterState;var i=this.unpackOptions(d);i.price=h.value.replace("..","-"),d=this.packOptions(i)}else{var j=Event.findElement(a,"SELECT");if(j&&(b=$F(j)),!b&&(b=a.element().readAttribute("action"))){var k=encodeURIComponent($("search").value);try{k==mof_search_instruction&&(k="")}catch(a){}d=this.filterState,d=d.replace(/(.*)q=[^\&]*(.*)/,"$1$2"),d=d.replace(/(.*)\&\&(.*)/,"$1&$2"),k&&(d&&"&"!=d[d.length-1]&&(d+="&"),d+="q="+k)}}}}if(Event.stop(a),!d)if(b.indexOf("?")>=0){var l=b?b.split("?"):[];l.length>1&&(d=l[1])}else e="view-all",this.attrib=!1}var m=!1;if(this.filter_preaction_func&&(m=this.filter_preaction_func(a,this.url,d)),!m){this.live_req_cnt++||this.addLoader(),b=this.request_url;var n=!1;if(this.request_params=d,"view-all"!=e||this.attrib)var i=this.unpackOptions(d);else{var i=this.unpackOptions(this.resetAll(this.filterState,!0));"view-all"==e&&(i.p=1,i.cat=""),n=!0}if(void 0==this.attrib){var o=this.unpackOptions(this.filterState);Object.keys(o).each(function(a){void 0==i[a]&&(i[a]=o[a])})}i=this.prepareAnswer(i),this.requestId++,i.rid=this.requestId.toString(),i._mof_ajax_request="1",void 0==i.p&&(i.p="1"),this.lastRequestOptions=i,b=b.split("?").shift()+"?"+this.packOptions(i,n),new Ajax.Request(b,{method:"get",onSuccess:this.updateHtml.bind(this),onComplete:function(){--this.live_req_cnt||this.removeLoader()}.bind(this)}),this.attrib&&e&&f&&this.updateActiveMenuLinks(f,e)}null!==c&&this.use_history_pushState&&"undefined"!=typeof history.pushState&&history.pushState(null,null,b)},prepareAnswer:function(a){return a},unpackOptions:function(a){if(""==a||void 0==a)return{};-1!=a.indexOf("?")&&(a=a.split("?").pop());var b=a.split("&"),c={};return b.each(function(a){var b=a.split("="),d=b.shift();c[d]=b.pop().split(",")}),c},setDefaultLimit:function(a){this._defaultListLimit=a},resetAll:function(a,b){var c=this.unpackOptions(a);return $$(".filter-block").each(function(a){a.select("ul").each(function(a){var b=a.id.split("-").pop();c[b]=""})}),c.limit=this._defaultListLimit,this.packOptions(c,b)},packOptions:function(a,b){var c="";return Object.keys(a).each(function(d){(""!=a[d]||b)&&(c.length&&(c+="&"),c+=d+"="+a[d])}),c},intializeNextPage:function(){if(1==this.prefetch_next_page){var a=this.getNextPageParams(this.filterState);new Ajax.Request(this.url,{method:"get",parameters:a})}},getNextPageParams:function(a){var b=!1,c=a.split("&");for(i=0;i<c.length;i++){var d=c[i].split("=");"p"==d[0]&&(d[1]=parseInt(d[1])+1,b="p="+d[1],a=a.replace(c[i],b))}return 0==b&&(a+="&p=2"),a+"&__prefetch__=1"},getNextPage:function(){this.request_params=this.getNextPageParams(this.request_params),new Ajax.Request(this.request_url,{method:"get",parameters:this.request_params})},updateHtml:function(transport){if(transport&&null!=transport.responseText)try{var response=eval("("+transport.responseText+")")}catch(e){var response={}}if(response.rid==this.requestId){if("undefined"!=typeof response.block_layered_nav)response.block_layered_nav.html&&this.updateFilters(response.block_layered_nav.html);else if("undefined"!=typeof response.exploded_menu){this.hook_before_update&&this.hook_before_update(this.trigger_menu);var rem=response.exploded_menu;for(var a in rem)if(rem.hasOwnProperty(a)){var ul_node=$("filter-ul-id--"+a);if(ul_node&&a!=this.attrib){var html=response.exploded_menu[a];this.exploded_menu_update_func?this.exploded_menu_update_func(ul_node,html):ul_node.update(html)}}this.hook_after_update&&this.hook_after_update(this.trigger_menu)}var list_elem;this._ajaxResponseContainer&&(list_elem=$(this._ajaxResponseContainer)),list_elem||(list_elem=this.getListElement()),list_elem&&(this.isOuterReplacementListElement()&&1!=response.error_code?list_elem.outerHTML=response.block_product_list.html:list_elem.innerHTML=response.block_product_list.html);var filtersOptionsContainer=$$(".selected-filters");response.selected_options&&filtersOptionsContainer&&filtersOptionsContainer.length&&($$(".selected-filters")[0].outerHTML=response.selected_options.html),Object.keys(response.widgets).length&&jQuery(Object.keys(response.widgets)).each(function(a,b){var c="."+b,d=jQuery(c);d.length&&(d[0].innerHTML=response.widgets[b])}),1==this.prefetch_next_page&&this.getNextPage(),this.filterState=response.query_string,this.extra_updatehtml_func&&this.extra_updatehtml_func(),this.scrollProductListToView&&setTimeout(this.scrollToTop.bindAsEventListener(this),200),this.addEventListenersToFilterLinks(),this.extra_updatehtml_func_after_listeners&&this.extra_updatehtml_func_after_listeners()}},scrollToTop:function(){var a=this.getListElement();if(a){var b=a.measure("height"),c=a.cumulativeOffset().top,d=a.viewportOffset();this.boundingContainer&&(c=this.boundingContainer.cumulativeOffset().top),this.keepProductListHeaderInView?this.getListElement().viewportOffset().top<0&&window.scrollTo(0,c):d&&d.top+b<this.productListScrollIntoViewThreshold?window.scrollTo(0,c):d.top<0&&void 0!=this.lastRequestOptions.p&&window.scrollTo(0,c)}},getFilterContainer:function(){var a=$$(".block-layered-nav");return a.length?a[0]:!1},updateFilters:function(a){var b=this.getFilterContainer();if(b){if(this.hook_before_update&&this.hook_before_update(this.trigger_menu),this.nestedContainer)b.update(c.innerHTML);else{b.update(a);var c=b.down(".block-layered-nav");b.down(".block-layered-nav")&&b.update(c.innerHTML)}this.hook_after_update&&this.hook_after_update(this.trigger_menu)}},getListElement:function(){var a=!1,b=["product-list-container",".category-view",".results-view",".category-products"];return $(b).each(function(b){if("."==b.substr(0,1)?(a=$$(b),a=a.length>0?a[0]:void 0):a=$(b),a)throw $break}),a},isOuterReplacementListElement:function(){return $("product-list-container")?!1:$$(".category-view").length>0?!1:$$(".results-view").length>0?!1:$$(".category-products").length>0?!0:!1},setAjaxContainerId:function(a){this._ajaxResponseContainer=a},centerElementVertically:function(a){if(null!=$(a)){var b=document.viewport.getDimensions(),c=b.height,d=Math.round(c/2);d-=$(a).getHeight()/2,$(a).style.top=d+"px"}},addLoader:function(){if(this.use_loader){var a='<div id="multioptionfilter-loader"><div class="loader"></div></div>';$$("body")[0].insert(a),this.centerElementVertically($("multioptionfilter-loader"))}},removeLoader:function(){if(this.use_loader){var a=$("multioptionfilter-loader");a&&a.remove()}}});
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
    width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
    keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
    (I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
    openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
    isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
        c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
    k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
    b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
        setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
        d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
        a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
        b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
        y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
        if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
        (h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
        {},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
        mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
        !0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
        "image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
        this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
        f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
        e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
        outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
        g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
        "no"===k?"scroll":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
        h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
        h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
    "iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
        y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
    !a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
        b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
        a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
    (c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
    {duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
    b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
    f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
    b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
    f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
    b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
    e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
    ":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
    d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
var Vaimo_SearchSuggestionsViewModel = Class.create({
    history: [],
    baseUrl: '',
    allowedHistorySize: 20,
    initializationEventName: 'dom:loaded',
    initialize: function() {
        // use this when creating the object
    },
    load: function() {
        // Use this when dom has loaded
    },
    clear: function() {
    },
    renderItem: function(item) {
    },
    renderSpelling: function(item) {
    },
    update: function(newList, spellings) {
        this.clear();
        if (newList) {
            $(newList).each(function(item) {
                this.renderItem(item);
            }.bind(this));
        }
        if (spellings) {
            $(spellings).each(function(item) {
                this.renderSpelling(item);
            }.bind(this));
        }
    },
    searchHistory: function(query) {
        if (query == '') {
            return [];
        }

        var found = false;
        $(this.history).each(function(item) {
            if (item.query == query) {
                found = item;
                return false;
            }
        });
        return found;
    },
    archive: function(queryObject) {
        if (!this.searchHistory(queryObject.query)) {
            if (this.history.length > this.allowedHistorySize) {
                this.history.splice(this.allowedHistorySize - 1, this.history.length - this.allowedHistorySize);
            }
            this.history.unshift(queryObject);
        }
    }
});
var Vaimo_SearchSuggestionsController = Class.create({
    controllerUrl: 'trigger/searchsuggestions/search.php',
    requestUrl: '',
    searchField: false,
    lastAjaxQuery: null,
    viewModel: null,
    requestCounter: 0,
    lastReceivedId: 0,
    currentDisplay: '',
    requestOverwriteTimeout: 0,
    lastQuery: '',
    storeId: 0,
    initialize: function(configuration) {
        this.viewModel = new Vaimo_SearchSuggestionsViewModel();
        var eventName = this.viewModel.initializationEventName;
        Event.observe(document, eventName, function(event) {
            this.applyConfiguration(configuration);

            if (event.memo.baseUrlClean) {
                this.baseUrl = event.memo.baseUrlClean;
            }
            if (!this.getSearchFieldEntity()) {
                return;
            }
            this.viewModel.baseUrl = this.baseUrl;
            this.requestUrl = this.baseUrl + this.controllerUrl;
            this.initiateObservers();
            this.viewModel.load();
            event.memo.vaimoSearchSuggestions = this.viewModel;
        }.bind(this));

        Event.observe(window, 'load', function() {
            if (!this.getSearchFieldEntity()) {
                return;
            }
            this.updateListAbsolutePosition(this.getSuggestionEtalonEntity());
        }.bind(this));

        Event.observe(window, 'resize', function() {
            if (!this.getSearchFieldEntity()) {
                return;
            }
            this.updateListAbsolutePosition(this.getSuggestionEtalonEntity());
        }.bind(this));
    },
    applyConfiguration: function(configuration) {
        if (!configuration) {
            var suggestionsInfoJson = $('suggestionsinfo');
            if (suggestionsInfoJson) {
                configuration = suggestionsInfoJson.innerHTML.evalJSON();
            }
        }

        // No-go, if configuration is missing
        if (!configuration) {
            return;
        }

        // Okay. We're dealing with configuration object here
        if (typeof configuration == 'object') {
            this.storeId = configuration.storeid;
            this.requestOverwriteTimeout = configuration.typing_threshold;
            this.baseUrl = configuration.baseurl;
        }

        return true;
    },
    initiateObservers: function() {
        this.getSearchForm().setAttribute('autocomplete', 'off');
        this.updateListAbsolutePosition(this.getSuggestionEtalonEntity());

        Event.observe(this.getSearchFieldEntity(), 'keyup', function() {
            var searchField = this.getSearchFieldEntity();
            var query = searchField.value;

            if (this.currentDisplay == query) {
                return;
            }

            this.currentDisplay = query;

            this.search(query);
        }.bind(this));

        Event.observe(this.getSearchFieldEntity(), 'focus', function() {
            var searchField = this.getSearchFieldEntity();
            this.search(searchField.value);
        }.bind(this));

        Event.observe(document, 'click', function() {
            this.lastAjaxQuery = setTimeout(function() {
                this.viewModel.clear();
            }.bind(this), 200);
        }.bind(this));
    },
    getFilters: function() {
        // By standard, we really don't apply any filters
        return {};
    },
    prepareFilters: function(filters, targetObject) {
        if (filters) {
            var keys = Object.keys(filters);
            $(keys).each(function(key) {
                targetObject['filters[' + key + ']'] = filters[key];
            });
        }

        return targetObject;
    },
    getSearchParameters: function(query) {
        var searchParams = {
            q: encodeURIComponent(query),
            id: this.requestCounter,
            store_id: this.storeId
        };

        this.prepareFilters(this.getFilters(), searchParams);

        return searchParams;
    },
    search: function(query) {
        if (query.length < 2) {
            if (this.viewModel.listContainer.is(':visible')) {
                this.viewModel.listContainer.hide();
            }
            return this;
        }
        query = query.replace(/^\s+|\s+$/g, '');

        if ((!query && !this.lastQuery.length) || query == this.lastQuery) {
            return;
        }

        this.lastQuery = query;
        var historyEntry = this.viewModel.searchHistory(query);

        if (!historyEntry) {
            if (this.lastAjaxQuery) {
                clearTimeout(this.lastAjaxQuery);
            }

            this.lastAjaxQuery = setTimeout(function() {
                this.requestCounter++;
                new Ajax.Request (this.requestUrl, {
                    method: 'post',
                    parameters: this.getSearchParameters(query),
                    onComplete: this.searchResultsReceived.bindAsEventListener(this)
                });
            }.bind(this), this.requestOverwriteTimeout);
        } else if (historyEntry.data) {
            this.lastReceivedId = this.requestCounter++;
            this.viewModel.update(historyEntry.data, historyEntry.info.suggestions);
        }
    },
    searchResultsReceived: function(transport) {
        var response = transport.responseText.evalJSON();
        if (response.error == undefined && response.id > this.lastReceivedId) {
            this.lastReceivedId = response.id;
            this.viewModel.archive(response);
            this.viewModel.update(response.data, response.info.suggestions);
        }
    },
    getSearchForm: function() {
        return this.getSearchFieldEntity().up('form');
    },
    getSearchFieldEntity: function() {
        if (!this.searchField) {
            this.searchField = $('search');
        }

        if (this.searchField) {
            return this.searchField;
        }

        return false;
    },
    getSuggestionEtalonEntity: function() {
        return this.getSearchForm();
    },
    updateListAbsolutePosition: function(referenceEntity) {
        var referenceEntity = $('search_mini_form');
        var submitButton = referenceEntity.down('.search-submit');
        var list = $('searchsuggestion_list');
        if (list) {
            var offset = referenceEntity.cumulativeOffset();
            var referenceEntityPaddingRight = parseInt(referenceEntity.getStyle('padding-right'));
            list.setStyle({
                width: (referenceEntity.offsetWidth - referenceEntityPaddingRight - submitButton.getWidth()) + 'px',
                position: 'absolute',
                left: offset.left + 'px',
                top: (offset.top + referenceEntity.offsetHeight) + 'px'
            });
        }
    }
});

MultiOptionFilter.prototype.updateHtml  = MultiOptionFilter.prototype.updateHtml.wrap(function(parentMethod, transport){
    if( transport && transport.responseText!=null ){
        try{
            var response = eval('(' + transport.responseText + ')');
        }
        catch (e) {
            var response = {};
        }
    }

    // Ignore old request responses
    if (response.rid != this.requestId) {
        return;
    }

    // Empty nav HTML indicates we should keep old panel
    if (typeof response.block_layered_nav != 'undefined') {
        if (response.block_layered_nav.html) {
            this.updateFilters(response.block_layered_nav.html);
        }
    } else if (typeof response.exploded_menu != 'undefined'){
        // We have received exploded menus in return
        if (this.hook_before_update) {
            this.hook_before_update(this.trigger_menu);
        }

        var rem = response.exploded_menu;
        for( var a in rem ){
            if( !rem.hasOwnProperty(a) ){
                continue;
            }
            // Is it a menu ?
            var ul_node = $("filter-ul-id--"+a);
            // Not the triggering menu?
            if( ul_node && a!=this.attrib ){
                var html = response.exploded_menu[a];
                if( this.exploded_menu_update_func ){
                    this.exploded_menu_update_func( ul_node, html );
                } else {
                    ul_node.update(html);
                }
            }
        }

        if (this.hook_after_update) {
            this.hook_after_update(this.trigger_menu);
        }
    }

    var list_elem;
    // Allow custom containers
    if (this._ajaxResponseContainer) {
        list_elem = $(this._ajaxResponseContainer);
    }

    // List block tagged in some various ways
    if (!list_elem) {
        list_elem = this.getListElement();
    }

    if (list_elem) {
        if (!response.sm){
            if (!this.isOuterReplacementListElement() || response.error_code == 1) {
                list_elem.innerHTML = response.block_product_list.html;
            } else {
                list_elem.outerHTML = response.block_product_list.html;
            }
        }
        else {
            jQuery('ul.products-grid').append(
                response.block_product_list['html']['grid']
            );
            jQuery('.toolbar-bottom').html(response.block_product_list['html']['button']);
        }
    }

    var filtersOptionsContainer = $$('.selected-filters');
    if (response.selected_options && filtersOptionsContainer && filtersOptionsContainer.length) {
        $$('.selected-filters')[0].outerHTML = response.selected_options.html;
    }

    if (Object.keys(response.widgets).length) {
        jQuery(Object.keys(response.widgets)).each(function(key, value) {
            var selector = '.' + value;
            var element = jQuery(selector);
            if (element.length) {
                element[0].innerHTML = response.widgets[value];
            }
        });
    }

    // Prefetch
    if(this.prefetch_next_page == 1) {
        this.getNextPage();
    }

    // Update the global query string variable
    this.filterState = response.query_string;

    if (this.extra_updatehtml_func) {
        this.extra_updatehtml_func();
    }

    // Scroll up if the top of the list is not visible. Timeout added to wait for the product list update on slower browsers/systems
    if (this.scrollProductListToView) {
        setTimeout(this.scrollToTop.bindAsEventListener(this), 200);
    }

    this.addEventListenersToFilterLinks();

    if (this.extra_updatehtml_func_after_listeners) {
        this.extra_updatehtml_func_after_listeners();
    }

    Favourites.loadmore();
    pandora();
    SellerRatings.loadMoreRatings();
    setdataToolTip();
});
/**
 * Removes registered service worker when viewing desktop site.
 */
if (location.protocol === 'https:' && navigator && navigator.serviceWorker) {

    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (var i in registrations) {
            if (registrations.hasOwnProperty(i)) {
                registrations[i].unregister();
            }
        } });
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */
if(typeof Product=='undefined') {
    var Product = {};
}

/********************* IMAGE ZOOMER ***********************/

Product.Zoom = Class.create();
/**
 * Image zoom control
 *
 * @author      Magento Core Team <core@magentocommerce.com>
 */
Product.Zoom.prototype = {
    initialize: function(imageEl, trackEl, handleEl, zoomInEl, zoomOutEl, hintEl){
        this.containerEl = $(imageEl).parentNode;
        this.imageEl = $(imageEl);
        this.handleEl = $(handleEl);
        this.trackEl = $(trackEl);
        this.hintEl = $(hintEl);

        this.containerDim = Element.getDimensions(this.containerEl);
        this.imageDim = Element.getDimensions(this.imageEl);

        this.imageDim.ratio = this.imageDim.width/this.imageDim.height;

        this.floorZoom = 1;

        if (this.imageDim.width > this.imageDim.height) {
            this.ceilingZoom = this.imageDim.width / this.containerDim.width;
        } else {
            this.ceilingZoom = this.imageDim.height / this.containerDim.height;
        }

        if (this.imageDim.width <= this.containerDim.width
            && this.imageDim.height <= this.containerDim.height) {
            this.trackEl.up().hide();
            this.hintEl.hide();
            this.containerEl.removeClassName('product-image-zoom');
            return;
        }

        this.imageX = 0;
        this.imageY = 0;
        this.imageZoom = 1;

        this.sliderSpeed = 0;
        this.sliderAccel = 0;
        this.zoomBtnPressed = false;

        this.showFull = false;

        this.selects = document.getElementsByTagName('select');

        this.draggable = new Draggable(imageEl, {
            starteffect:false,
            reverteffect:false,
            endeffect:false,
            snap:this.contain.bind(this)
        });

        this.slider = new Control.Slider(handleEl, trackEl, {
            axis:'horizontal',
            minimum:0,
            maximum:Element.getDimensions(this.trackEl).width,
            alignX:0,
            increment:1,
            sliderValue:0,
            onSlide:this.scale.bind(this),
            onChange:this.scale.bind(this)
        });

        this.scale(0);

        Event.observe(this.imageEl, 'dblclick', this.toggleFull.bind(this));

        Event.observe($(zoomInEl), 'mousedown', this.startZoomIn.bind(this));
        Event.observe($(zoomInEl), 'mouseup', this.stopZooming.bind(this));
        Event.observe($(zoomInEl), 'mouseout', this.stopZooming.bind(this));

        Event.observe($(zoomOutEl), 'mousedown', this.startZoomOut.bind(this));
        Event.observe($(zoomOutEl), 'mouseup', this.stopZooming.bind(this));
        Event.observe($(zoomOutEl), 'mouseout', this.stopZooming.bind(this));
    },

    toggleFull: function () {
        this.showFull = !this.showFull;

        //Hide selects for IE6 only
        if (typeof document.body.style.maxHeight == "undefined")  {
            for (i=0; i<this.selects.length; i++) {
                this.selects[i].style.visibility = this.showFull ? 'hidden' : 'visible';
            }
        }
        val_scale = !this.showFull ? this.slider.value : 1;
        this.scale(val_scale);

        this.trackEl.style.visibility = this.showFull ? 'hidden' : 'visible';
        this.containerEl.style.overflow = this.showFull ? 'visible' : 'hidden';
        this.containerEl.style.zIndex = this.showFull ? '1000' : '9';

        return this;
    },

    scale: function (v) {
        var centerX  = (this.containerDim.width*(1-this.imageZoom)/2-this.imageX)/this.imageZoom;
        var centerY  = (this.containerDim.height*(1-this.imageZoom)/2-this.imageY)/this.imageZoom;
        var overSize = (this.imageDim.width > this.containerDim.width || this.imageDim.height > this.containerDim.height);

        this.imageZoom = this.floorZoom+(v*(this.ceilingZoom-this.floorZoom));

        if (overSize) {
            if (this.imageDim.width > this.imageDim.height) {
                this.imageEl.style.width = (this.imageZoom*this.containerDim.width)+'px';
            } else {
                this.imageEl.style.height = (this.imageZoom*this.containerDim.height)+'px';
            }
            if (this.containerDim.ratio) {
                if (this.imageDim.width > this.imageDim.height) {
                    this.imageEl.style.height = (this.imageZoom*this.containerDim.width*this.containerDim.ratio)+'px'; // for safari
                } else {
                    this.imageEl.style.width = (this.imageZoom*this.containerDim.height*this.containerDim.ratio)+'px'; // for safari
                }
            }
        } else {
            this.slider.setDisabled();
        }

        this.imageX = this.containerDim.width*(1-this.imageZoom)/2-centerX*this.imageZoom;
        this.imageY = this.containerDim.height*(1-this.imageZoom)/2-centerY*this.imageZoom;

        this.contain(this.imageX, this.imageY, this.draggable);

        return true;
    },

    startZoomIn: function()
    {
        if (!this.slider.disabled) {
            this.zoomBtnPressed = true;
            this.sliderAccel = .002;
            this.periodicalZoom();
            this.zoomer = new PeriodicalExecuter(this.periodicalZoom.bind(this), .05);
        }
        return this;
    },

    startZoomOut: function()
    {
        if (!this.slider.disabled) {
            this.zoomBtnPressed = true;
            this.sliderAccel = -.002;
            this.periodicalZoom();
            this.zoomer = new PeriodicalExecuter(this.periodicalZoom.bind(this), .05);
        }
        return this;
    },

    stopZooming: function()
    {
        if (!this.zoomer || this.sliderSpeed==0) {
            return;
        }
        this.zoomBtnPressed = false;
        this.sliderAccel = 0;
    },

    periodicalZoom: function()
    {
        if (!this.zoomer) {
            return this;
        }

        if (this.zoomBtnPressed) {
            this.sliderSpeed += this.sliderAccel;
        } else {
            this.sliderSpeed /= 1.5;
            if (Math.abs(this.sliderSpeed)<.001) {
                this.sliderSpeed = 0;
                this.zoomer.stop();
                this.zoomer = null;
            }
        }
        this.slider.value += this.sliderSpeed;

        this.slider.setValue(this.slider.value);
        this.scale(this.slider.value);

        return this;
    },

    contain: function (x,y,draggable) {

        var dim = Element.getDimensions(draggable.element);

        var xMin = 0, xMax = this.containerDim.width-dim.width;
        var yMin = 0, yMax = this.containerDim.height-dim.height;

        x = x>xMin ? xMin : x;
        x = x<xMax ? xMax : x;
        y = y>yMin ? yMin : y;
        y = y<yMax ? yMax : y;

        if (this.containerDim.width > dim.width) {
            x = (this.containerDim.width/2) - (dim.width/2);
        }

        if (this.containerDim.height > dim.height) {
            y = (this.containerDim.height/2) - (dim.height/2);
        }

        this.imageX = x;
        this.imageY = y;

        this.imageEl.style.left = this.imageX+'px';
        this.imageEl.style.top = this.imageY+'px';

        return [x,y];
    }
}

/**************************** CONFIGURABLE PRODUCT **************************/
Product.Config = Class.create();
Product.Config.prototype = {
    initialize: function(config){
        this.config     = config;
        this.taxConfig  = this.config.taxConfig;
        this.settings   = $$('.super-attribute-select');
        this.state      = new Hash();
        this.priceTemplate = new Template(this.config.template);
        this.prices     = config.prices;

        this.settings.each(function(element){
            Event.observe(element, 'change', this.configure.bind(this))
        }.bind(this));

        // fill state
        this.settings.each(function(element){
            var attributeId = element.id.replace(/[a-z]*/, '');
            if(attributeId && this.config.attributes[attributeId]) {
                element.config = this.config.attributes[attributeId];
                element.attributeId = attributeId;
                this.state[attributeId] = false;
            }
        }.bind(this))

        // Init settings dropdown
        var childSettings = [];
        for(var i=this.settings.length-1;i>=0;i--){
            var prevSetting = this.settings[i-1] ? this.settings[i-1] : false;
            var nextSetting = this.settings[i+1] ? this.settings[i+1] : false;
            if(i==0){
                this.fillSelect(this.settings[i])
            }
            else {
                this.settings[i].disabled=true;
            }
            $(this.settings[i]).childSettings = childSettings.clone();
            $(this.settings[i]).prevSetting   = prevSetting;
            $(this.settings[i]).nextSetting   = nextSetting;
            childSettings.push(this.settings[i]);
        }

        // Set default values - from config and overwrite them by url values
        if (config.defaultValues) {
            this.values = config.defaultValues;
        }

        var separatorIndex = window.location.href.indexOf('#');
        if (separatorIndex != -1) {
            var paramsStr = window.location.href.substr(separatorIndex+1);
            var urlValues = paramsStr.toQueryParams();
            if (!this.values) {
                this.values = {};
            }
            for (var i in urlValues) {
                this.values[i] = urlValues[i];
            }
        }

        this.configureForValues();
        document.observe("dom:loaded", this.configureForValues.bind(this));
    },

    configureForValues: function () {
        if (this.values) {
            this.settings.each(function(element){
                var attributeId = element.attributeId;
                element.value = (typeof(this.values[attributeId]) == 'undefined')? '' : this.values[attributeId];
                this.configureElement(element);
            }.bind(this));
        }
    },

    configure: function(event){
        var element = Event.element(event);
        this.configureElement(element);
    },

    configureElement : function(element) {
        this.reloadOptionLabels(element);
        if(element.value){
            this.state[element.config.id] = element.value;
            if(element.nextSetting){
                element.nextSetting.disabled = false;
                this.fillSelect(element.nextSetting);
                this.resetChildren(element.nextSetting);
            }
        }
        else {
            this.resetChildren(element);
        }
        this.reloadPrice();
//      Calculator.updatePrice();
    },

    reloadOptionLabels: function(element){
        var selectedPrice;
        if(element.options[element.selectedIndex].config){
            selectedPrice = parseFloat(element.options[element.selectedIndex].config.price)
        }
        else{
            selectedPrice = 0;
        }
        for(var i=0;i<element.options.length;i++){
            if(element.options[i].config){
                element.options[i].text = this.getOptionLabel(element.options[i].config, element.options[i].config.price-selectedPrice);
            }
        }
    },

    resetChildren : function(element){
        if(element.childSettings) {
            for(var i=0;i<element.childSettings.length;i++){
                element.childSettings[i].selectedIndex = 0;
                element.childSettings[i].disabled = true;
                if(element.config){
                    this.state[element.config.id] = false;
                }
            }
        }
    },

    fillSelect: function(element){
        var attributeId = element.id.replace(/[a-z]*/, '');
        var options = this.getAttributeOptions(attributeId);
        this.clearSelect(element);
        element.options[0] = new Option('', '');
        element.options[0].innerHTML = this.config.chooseText;

        var prevConfig = false;
        if(element.prevSetting){
            prevConfig = element.prevSetting.options[element.prevSetting.selectedIndex];
        }

        if(options) {
            var index = 1;
            for(var i=0;i<options.length;i++){
                var allowedProducts = [];
                if(prevConfig) {
                    for(var j=0;j<options[i].products.length;j++){
                        if(prevConfig.config.allowedProducts
                            && prevConfig.config.allowedProducts.indexOf(options[i].products[j])>-1){
                            allowedProducts.push(options[i].products[j]);
                        }
                    }
                } else {
                    allowedProducts = options[i].products.clone();
                }

                if(allowedProducts.size()>0){
                    options[i].allowedProducts = allowedProducts;
                    element.options[index] = new Option(this.getOptionLabel(options[i], options[i].price), options[i].id);
                    element.options[index].config = options[i];
                    index++;
                }
            }
        }
    },

    getOptionLabel: function(option, price){
        var price = parseFloat(price);
        if (this.taxConfig.includeTax) {
            var tax = price / (100 + this.taxConfig.defaultTax) * this.taxConfig.defaultTax;
            var excl = price - tax;
            var incl = excl*(1+(this.taxConfig.currentTax/100));
        } else {
            var tax = price * (this.taxConfig.currentTax / 100);
            var excl = price;
            var incl = excl + tax;
        }

        if (this.taxConfig.showIncludeTax || this.taxConfig.showBothPrices) {
            price = incl;
        } else {
            price = excl;
        }

        var str = option.label;
        if(price){
            if (this.taxConfig.showBothPrices) {
                str+= ' ' + this.formatPrice(excl, true) + ' (' + this.formatPrice(price, true) + ' ' + this.taxConfig.inclTaxTitle + ')';
            } else {
                str+= ' ' + this.formatPrice(price, true);
            }
        }
        return str;
    },

    formatPrice: function(price, showSign){
        var str = '';
        price = parseFloat(price);
        if(showSign){
            if(price<0){
                str+= '-';
                price = -price;
            }
            else{
                str+= '+';
            }
        }

        var roundedPrice = (Math.round(price*100)/100).toString();

        if (this.prices && this.prices[roundedPrice]) {
            str+= this.prices[roundedPrice];
        }
        else {
            str+= this.priceTemplate.evaluate({price:price.toFixed(2)});
        }
        return str;
    },

    clearSelect: function(element){
        for(var i=element.options.length-1;i>=0;i--){
            element.remove(i);
        }
    },

    getAttributeOptions: function(attributeId){
        if(this.config.attributes[attributeId]){
            return this.config.attributes[attributeId].options;
        }
    },

    reloadPrice: function(){
        var price    = 0;
        var oldPrice = 0;
        for(var i=this.settings.length-1;i>=0;i--){
            var selected = this.settings[i].options[this.settings[i].selectedIndex];
            if(selected.config){
                price    += parseFloat(selected.config.price);
                oldPrice += parseFloat(selected.config.oldPrice);
            }
        }

        optionsPrice.changePrice('config', {'price': price, 'oldPrice': oldPrice});
        optionsPrice.reload();

        return price;

        if($('product-price-'+this.config.productId)){
            $('product-price-'+this.config.productId).innerHTML = price;
        }
        this.reloadOldPrice();
    },

    reloadOldPrice: function(){
        if ($('old-price-'+this.config.productId)) {

            var price = parseFloat(this.config.oldPrice);
            for(var i=this.settings.length-1;i>=0;i--){
                var selected = this.settings[i].options[this.settings[i].selectedIndex];
                if(selected.config){
                    var parsedOldPrice = parseFloat(selected.config.oldPrice);
                    price += isNaN(parsedOldPrice) ? 0 : parsedOldPrice;
                }
            }
            if (price < 0)
                price = 0;
            price = this.formatPrice(price);

            if($('old-price-'+this.config.productId)){
                $('old-price-'+this.config.productId).innerHTML = price;
            }

        }
    }
}


/**************************** SUPER PRODUCTS ********************************/

Product.Super = {};
Product.Super.Configurable = Class.create();

Product.Super.Configurable.prototype = {
    initialize: function(container, observeCss, updateUrl, updatePriceUrl, priceContainerId) {
        this.container = $(container);
        this.observeCss = observeCss;
        this.updateUrl = updateUrl;
        this.updatePriceUrl = updatePriceUrl;
        this.priceContainerId = priceContainerId;
        this.registerObservers();
    },
    registerObservers: function() {
        var elements = this.container.getElementsByClassName(this.observeCss);
        elements.each(function(element){
            Event.observe(element, 'change', this.update.bindAsEventListener(this));
        }.bind(this));
        return this;
    },
    update: function(event) {
        var elements = this.container.getElementsByClassName(this.observeCss);
        var parameters = Form.serializeElements(elements, true);

        new Ajax.Updater(this.container, this.updateUrl + '?ajax=1', {
                parameters:parameters,
                onComplete:this.registerObservers.bind(this)
        });
        var priceContainer = $(this.priceContainerId);
        if(priceContainer) {
            new Ajax.Updater(priceContainer, this.updatePriceUrl + '?ajax=1', {
                parameters:parameters
            });
        }
    }
}

/**************************** PRICE RELOADER ********************************/
Product.OptionsPrice = Class.create();
Product.OptionsPrice.prototype = {
    initialize: function(config) {
        this.productId          = config.productId;
        this.priceFormat        = config.priceFormat;
        this.includeTax         = config.includeTax;
        this.defaultTax         = config.defaultTax;
        this.currentTax         = config.currentTax;
        this.productPrice       = config.productPrice;
        this.showIncludeTax     = config.showIncludeTax;
        this.showBothPrices     = config.showBothPrices;
        this.productOldPrice    = config.productOldPrice;
        this.priceInclTax       = config.priceInclTax;
        this.priceExclTax       = config.priceExclTax;
        this.skipCalculate      = config.skipCalculate; /** @deprecated after 1.5.1.0 */
        this.duplicateIdSuffix  = config.idSuffix;
        this.specialTaxPrice    = config.specialTaxPrice;
        this.tierPrices         = config.tierPrices;
        this.tierPricesInclTax  = config.tierPricesInclTax;

        this.oldPlusDisposition = config.oldPlusDisposition;
        this.plusDisposition    = config.plusDisposition;
        this.plusDispositionTax = config.plusDispositionTax;

        this.oldMinusDisposition = config.oldMinusDisposition;
        this.minusDisposition    = config.minusDisposition;

        this.exclDisposition     = config.exclDisposition;

        this.optionPrices   = {};
        this.customPrices   = {};
        this.containers     = {};

        this.displayZeroPrice   = true;

        this.initPrices();
    },

    setDuplicateIdSuffix: function(idSuffix) {
        this.duplicateIdSuffix = idSuffix;
    },

    initPrices: function() {
        this.containers[0] = 'product-price-' + this.productId;
        this.containers[1] = 'bundle-price-' + this.productId;
        this.containers[2] = 'price-including-tax-' + this.productId;
        this.containers[3] = 'price-excluding-tax-' + this.productId;
        this.containers[4] = 'old-price-' + this.productId;
    },

    changePrice: function(key, price) {
        this.optionPrices[key] = price;
    },

    addCustomPrices: function(key, price) {
        this.customPrices[key] = price;
    },
    getOptionPrices: function() {
        var price = 0;
        var nonTaxable = 0;
        var oldPrice = 0;
        var priceInclTax = 0;
        var currentTax = this.currentTax;
        $H(this.optionPrices).each(function(pair) {
            if ('undefined' != typeof(pair.value.price) && 'undefined' != typeof(pair.value.oldPrice)) {
                price += parseFloat(pair.value.price);
                oldPrice += parseFloat(pair.value.oldPrice);
            } else if (pair.key == 'nontaxable') {
                nonTaxable = pair.value;
            } else if (pair.key == 'priceInclTax') {
                priceInclTax += pair.value;
            } else if (pair.key == 'optionsPriceInclTax') {
                priceInclTax += pair.value * (100 + currentTax) / 100;
            } else {
                price += parseFloat(pair.value);
                oldPrice += parseFloat(pair.value);
            }
        });
        var result = [price, nonTaxable, oldPrice, priceInclTax];
        return result;
    },

    reload: function() {
        var price;
        var formattedPrice;
        var optionPrices = this.getOptionPrices();
        var nonTaxable = optionPrices[1];
        var optionOldPrice = optionPrices[2];
        var priceInclTax = optionPrices[3];
        optionPrices = optionPrices[0];

        $H(this.containers).each(function(pair) {
            var _productPrice;
            var _plusDisposition;
            var _minusDisposition;
            var _priceInclTax;
            if ($(pair.value)) {
                if (pair.value == 'old-price-'+this.productId && this.productOldPrice != this.productPrice) {
                    _productPrice = this.productOldPrice;
                    _plusDisposition = this.oldPlusDisposition;
                    _minusDisposition = this.oldMinusDisposition;
                } else {
                    _productPrice = this.productPrice;
                    _plusDisposition = this.plusDisposition;
                    _minusDisposition = this.minusDisposition;
                }
                _priceInclTax = priceInclTax;

                if (pair.value == 'old-price-'+this.productId && optionOldPrice !== undefined) {
                    price = optionOldPrice+parseFloat(_productPrice);
                } else if (this.specialTaxPrice == 'true' && this.priceInclTax !== undefined && this.priceExclTax !== undefined) {
                    price = optionPrices+parseFloat(this.priceExclTax);
                    _priceInclTax += this.priceInclTax;
                } else {
                    price = optionPrices+parseFloat(_productPrice);
                    _priceInclTax += parseFloat(_productPrice) * (100 + this.currentTax) / 100;
                }

                if (this.specialTaxPrice == 'true') {
                    var excl = price;
                    var incl = _priceInclTax;
                } else if (this.includeTax == 'true') {
                    // tax = tax included into product price by admin
                    var tax = price / (100 + this.defaultTax) * this.defaultTax;
                    var excl = price - tax;
                    var incl = excl*(1+(this.currentTax/100));
                } else {
                    var tax = price * (this.currentTax / 100);
                    var excl = price;
                    var incl = excl + tax;
                }

                var subPrice = 0;
                var subPriceincludeTax = 0;
                Object.values(this.customPrices).each(function(el){
                    if (el.excludeTax && el.includeTax) {
                        subPrice += parseFloat(el.excludeTax);
                        subPriceincludeTax += parseFloat(el.includeTax);
                    } else {
                        subPrice += parseFloat(el.price);
                        subPriceincludeTax += parseFloat(el.price);
                    }
                });
                excl += subPrice;
                incl += subPriceincludeTax;

                if (typeof this.exclDisposition == 'undefined') {
                    excl += parseFloat(_plusDisposition);
                }

                incl += parseFloat(_plusDisposition) + parseFloat(this.plusDispositionTax);
                excl -= parseFloat(_minusDisposition);
                incl -= parseFloat(_minusDisposition);

                //adding nontaxlable part of options
                excl += parseFloat(nonTaxable);
                incl += parseFloat(nonTaxable);

                if (pair.value == 'price-including-tax-'+this.productId) {
                    price = incl;
                } else if (pair.value == 'price-excluding-tax-'+this.productId) {
                    price = excl;
                } else if (pair.value == 'old-price-'+this.productId) {
                    if (this.showIncludeTax || this.showBothPrices) {
                        price = incl;
                    } else {
                        price = excl;
                    }
                } else {
                    if (this.showIncludeTax) {
                        price = incl;
                    } else {
                        price = excl;
                    }
                }

                if (price < 0) price = 0;

                if (price > 0 || this.displayZeroPrice) {
                    formattedPrice = this.formatPrice(price);
                } else {
                    formattedPrice = '';
                }

                if ($(pair.value).select('.price')[0]) {
                    $(pair.value).select('.price')[0].innerHTML = formattedPrice;
                    if ($(pair.value+this.duplicateIdSuffix) && $(pair.value+this.duplicateIdSuffix).select('.price')[0]) {
                        $(pair.value+this.duplicateIdSuffix).select('.price')[0].innerHTML = formattedPrice;
                    }
                } else {
                    $(pair.value).innerHTML = formattedPrice;
                    if ($(pair.value+this.duplicateIdSuffix)) {
                        $(pair.value+this.duplicateIdSuffix).innerHTML = formattedPrice;
                    }
                }
            };
        }.bind(this));

        if (typeof(skipTierPricePercentUpdate) === "undefined" && typeof(this.tierPrices) !== "undefined") {
            for (var i = 0; i < this.tierPrices.length; i++) {
                $$('.benefit').each(function(el) {
                    var parsePrice = function(html) {
                        var format = this.priceFormat;
                        var decimalSymbol = format.decimalSymbol === undefined ? "," : format.decimalSymbol;
                        var regexStr = '[^0-9-' + decimalSymbol + ']';
                        //remove all characters except number and decimal symbol
                        html = html.replace(new RegExp(regexStr, 'g'), '');
                        html = html.replace(decimalSymbol, '.');
                        return parseFloat(html);
                    }.bind(this);

                    var updateTierPriceInfo = function(priceEl, tierPriceDiff, tierPriceEl, benefitEl) {
                        if (typeof(tierPriceEl) === "undefined") {
                            //tierPrice is not shown, e.g., MAP, no need to update the tier price info
                            return;
                        }
                        var price = parsePrice(priceEl.innerHTML);
                        var tierPrice = price + tierPriceDiff;

                        tierPriceEl.innerHTML = this.formatPrice(tierPrice);

                        var $percent = Selector.findChildElements(benefitEl, ['.percent.tier-' + i]);
                        $percent.each(function(el) {
                            el.innerHTML = Math.ceil(100 - ((100 / price) * tierPrice));
                        });
                    }.bind(this);

                    var tierPriceElArray = $$('.tier-price.tier-' + i + ' .price');
                    if (this.showBothPrices) {
                        var containerExclTax = $(this.containers[3]);
                        var tierPriceExclTaxDiff = this.tierPrices[i];
                        var tierPriceExclTaxEl = tierPriceElArray[0];
                        updateTierPriceInfo(containerExclTax, tierPriceExclTaxDiff, tierPriceExclTaxEl, el);
                        var containerInclTax = $(this.containers[2]);
                        var tierPriceInclTaxDiff = this.tierPricesInclTax[i];
                        var tierPriceInclTaxEl = tierPriceElArray[1];
                        updateTierPriceInfo(containerInclTax, tierPriceInclTaxDiff, tierPriceInclTaxEl, el);
                    } else if (this.showIncludeTax) {
                        var container = $(this.containers[0]);
                        var tierPriceInclTaxDiff = this.tierPricesInclTax[i];
                        var tierPriceInclTaxEl = tierPriceElArray[0];
                        updateTierPriceInfo(container, tierPriceInclTaxDiff, tierPriceInclTaxEl, el);
                    } else {
                        var container = $(this.containers[0]);
                        var tierPriceExclTaxDiff = this.tierPrices[i];
                        var tierPriceExclTaxEl = tierPriceElArray[0];
                        updateTierPriceInfo(container, tierPriceExclTaxDiff, tierPriceExclTaxEl, el);
                    }
                }, this);
            }
        }

    },
    formatPrice: function(price) {
        return formatCurrency(price, this.priceFormat);
    }
}

/*  Copyright Mihai Bazon, 2002-2005 | www.bazon.net/mishoo
 * -----------------------------------------------------------
 *
 * The DHTML Calendar, version 1.0 "It is happening again"
 *
 * Details and latest version at:
 * www.dynarch.com/projects/calendar
 *
 * This script is developed by Dynarch.com.  Visit us at www.dynarch.com.
 *
 * This script is distributed under the GNU Lesser General Public License.
 * Read the entire license text here: http://www.gnu.org/licenses/lgpl.html
 */

// $Id: calendar.js,v 1.51 2005/03/07 16:44:31 mishoo Exp $

/** The Calendar object constructor. */
Calendar = function (firstDayOfWeek, dateStr, onSelected, onClose) {
    // member variables
    this.activeDiv = null;
    this.currentDateEl = null;
    this.getDateStatus = null;
    this.getDateToolTip = null;
    this.getDateText = null;
    this.timeout = null;
    this.onSelected = onSelected || null;
    this.onClose = onClose || null;
    this.dragging = false;
    this.hidden = false;
    this.minYear = 1970;
    this.maxYear = 2050;
    this.dateFormat = Calendar._TT["DEF_DATE_FORMAT"];
    this.ttDateFormat = Calendar._TT["TT_DATE_FORMAT"];
    this.isPopup = true;
    this.weekNumbers = true;
    this.firstDayOfWeek = typeof firstDayOfWeek == "number" ? firstDayOfWeek : Calendar._FD; // 0 for Sunday, 1 for Monday, etc.
    this.showsOtherMonths = false;
    this.dateStr = dateStr;
    this.ar_days = null;
    this.showsTime = false;
    this.time24 = true;
    this.yearStep = 2;
    this.hiliteToday = true;
    this.multiple = null;
    // HTML elements
    this.table = null;
    this.element = null;
    this.tbody = null;
    this.firstdayname = null;
    // Combo boxes
    this.monthsCombo = null;
    this.yearsCombo = null;
    this.hilitedMonth = null;
    this.activeMonth = null;
    this.hilitedYear = null;
    this.activeYear = null;
    // Information
    this.dateClicked = false;

    // one-time initializations
    if (typeof Calendar._SDN == "undefined") {
        // table of short day names
        if (typeof Calendar._SDN_len == "undefined")
            Calendar._SDN_len = 3;
        var ar = new Array();
        for (var i = 8; i > 0;) {
            ar[--i] = Calendar._DN[i].substr(0, Calendar._SDN_len);
        }
        Calendar._SDN = ar;
        // table of short month names
        if (typeof Calendar._SMN_len == "undefined")
            Calendar._SMN_len = 3;
        ar = new Array();
        for (var i = 12; i > 0;) {
            ar[--i] = Calendar._MN[i].substr(0, Calendar._SMN_len);
        }
        Calendar._SMN = ar;
    }
};

// ** constants

/// "static", needed for event handlers.
Calendar._C = null;

/// detect a special case of "web browser"
Calendar.is_ie = ( /msie/i.test(navigator.userAgent) &&
           !/opera/i.test(navigator.userAgent) );

Calendar.is_ie5 = ( Calendar.is_ie && /msie 5\.0/i.test(navigator.userAgent) );

/// detect Opera browser
Calendar.is_opera = /opera/i.test(navigator.userAgent);

/// detect KHTML-based browsers
Calendar.is_khtml = /Konqueror|Safari|KHTML/i.test(navigator.userAgent);

/// detect Gecko browsers
Calendar.is_gecko = navigator.userAgent.match(/gecko/i);

// BEGIN: UTILITY FUNCTIONS; beware that these might be moved into a separate
//        library, at some point.

// Returns CSS property for element
Calendar.getStyle = function(element, style) {
    if (element.currentStyle) {
        var y = element.currentStyle[style];
    } else if (window.getComputedStyle) {
        var y = document.defaultView.getComputedStyle(element,null).getPropertyValue(style);
    }

    return y;
};

/*
 * Different ways to find element's absolute position
 */
Calendar.getAbsolutePos = function(element) {

    var res = new Object();
    res.x = 0; res.y = 0;

    // variant 1 (working best, copy-paste from prototype library)
    do {
        res.x += element.offsetLeft || 0;
        res.y += element.offsetTop  || 0;
        element = element.offsetParent;
        if (element) {
            if (element.tagName.toUpperCase() == 'BODY') break;
            var p = Calendar.getStyle(element, 'position');
            if ((p !== 'static') && (p !== 'relative')) break;
        }
    } while (element);

    return res;

    // variant 2 (good solution, but lost in IE8)
    if (element !== null) {
        res.x = element.offsetLeft;
        res.y = element.offsetTop;

        var offsetParent = element.offsetParent;
        var parentNode = element.parentNode;

        while (offsetParent !== null) {
            res.x += offsetParent.offsetLeft;
            res.y += offsetParent.offsetTop;

            if (offsetParent != document.body && offsetParent != document.documentElement) {
                res.x -= offsetParent.scrollLeft;
                res.y -= offsetParent.scrollTop;
            }
            //next lines are necessary to support FireFox problem with offsetParent
            if (Calendar.is_gecko) {
                while (offsetParent != parentNode && parentNode !== null) {
                    res.x -= parentNode.scrollLeft;
                    res.y -= parentNode.scrollTop;
                    parentNode = parentNode.parentNode;
                }
            }
            parentNode = offsetParent.parentNode;
            offsetParent = offsetParent.offsetParent;
        }
    }
    return res;

    // variant 2 (not working)

//    var SL = 0, ST = 0;
//    var is_div = /^div$/i.test(el.tagName);
//    if (is_div && el.scrollLeft)
//        SL = el.scrollLeft;
//    if (is_div && el.scrollTop)
//        ST = el.scrollTop;
//    var r = { x: el.offsetLeft - SL, y: el.offsetTop - ST };
//    if (el.offsetParent) {
//        var tmp = this.getAbsolutePos(el.offsetParent);
//        r.x += tmp.x;
//        r.y += tmp.y;
//    }
//    return r;
};

Calendar.isRelated = function (el, evt) {
    var related = evt.relatedTarget;
    if (!related) {
        var type = evt.type;
        if (type == "mouseover") {
            related = evt.fromElement;
        } else if (type == "mouseout") {
            related = evt.toElement;
        }
    }
    while (related) {
        if (related == el) {
            return true;
        }
        related = related.parentNode;
    }
    return false;
};

Calendar.removeClass = function(el, className) {
    if (!(el && el.className)) {
        return;
    }
    var cls = el.className.split(" ");
    var ar = new Array();
    for (var i = cls.length; i > 0;) {
        if (cls[--i] != className) {
            ar[ar.length] = cls[i];
        }
    }
    el.className = ar.join(" ");
};

Calendar.addClass = function(el, className) {
    Calendar.removeClass(el, className);
    el.className += " " + className;
};

// FIXME: the following 2 functions totally suck, are useless and should be replaced immediately.
Calendar.getElement = function(ev) {
    var f = Calendar.is_ie ? window.event.srcElement : ev.currentTarget;
    while (f.nodeType != 1 || /^div$/i.test(f.tagName))
        f = f.parentNode;
    return f;
};

Calendar.getTargetElement = function(ev) {
    var f = Calendar.is_ie ? window.event.srcElement : ev.target;
    while (f.nodeType != 1)
        f = f.parentNode;
    return f;
};

Calendar.stopEvent = function(ev) {
    ev || (ev = window.event);
    if (Calendar.is_ie) {
        ev.cancelBubble = true;
        ev.returnValue = false;
    } else {
        ev.preventDefault();
        ev.stopPropagation();
    }
    return false;
};

Calendar.addEvent = function(el, evname, func) {
    if (el.attachEvent) { // IE
        el.attachEvent("on" + evname, func);
    } else if (el.addEventListener) { // Gecko / W3C
        el.addEventListener(evname, func, true);
    } else {
        el["on" + evname] = func;
    }
};

Calendar.removeEvent = function(el, evname, func) {
    if (el.detachEvent) { // IE
        el.detachEvent("on" + evname, func);
    } else if (el.removeEventListener) { // Gecko / W3C
        el.removeEventListener(evname, func, true);
    } else {
        el["on" + evname] = null;
    }
};

Calendar.createElement = function(type, parent) {
    var el = null;
    if (document.createElementNS) {
        // use the XHTML namespace; IE won't normally get here unless
        // _they_ "fix" the DOM2 implementation.
        el = document.createElementNS("http://www.w3.org/1999/xhtml", type);
    } else {
        el = document.createElement(type);
    }
    if (typeof parent != "undefined") {
        parent.appendChild(el);
    }
    return el;
};

// END: UTILITY FUNCTIONS

// BEGIN: CALENDAR STATIC FUNCTIONS

/** Internal -- adds a set of events to make some element behave like a button. */
Calendar._add_evs = function(el) {
    with (Calendar) {
        addEvent(el, "mouseover", dayMouseOver);
        addEvent(el, "mousedown", dayMouseDown);
        addEvent(el, "mouseout", dayMouseOut);
        if (is_ie) {
            addEvent(el, "dblclick", dayMouseDblClick);
            el.setAttribute("unselectable", true);
        }
    }
};

Calendar.findMonth = function(el) {
    if (typeof el.month != "undefined") {
        return el;
    } else if (typeof el.parentNode.month != "undefined") {
        return el.parentNode;
    }
    return null;
};

Calendar.findYear = function(el) {
    if (typeof el.year != "undefined") {
        return el;
    } else if (typeof el.parentNode.year != "undefined") {
        return el.parentNode;
    }
    return null;
};

Calendar.showMonthsCombo = function () {
    var cal = Calendar._C;
    if (!cal) {
        return false;
    }
    var cal = cal;
    var cd = cal.activeDiv;
    var mc = cal.monthsCombo;
    if (cal.hilitedMonth) {
        Calendar.removeClass(cal.hilitedMonth, "hilite");
    }
    if (cal.activeMonth) {
        Calendar.removeClass(cal.activeMonth, "active");
    }
    var mon = cal.monthsCombo.getElementsByTagName("div")[cal.date.getMonth()];
    Calendar.addClass(mon, "active");
    cal.activeMonth = mon;
    var s = mc.style;
    s.display = "block";
    if (cd.navtype < 0)
        s.left = cd.offsetLeft + "px";
    else {
        var mcw = mc.offsetWidth;
        if (typeof mcw == "undefined")
            // Konqueror brain-dead techniques
            mcw = 50;
        s.left = (cd.offsetLeft + cd.offsetWidth - mcw) + "px";
    }
    s.top = (cd.offsetTop + cd.offsetHeight) + "px";
};

Calendar.showYearsCombo = function (fwd) {
    var cal = Calendar._C;
    if (!cal) {
        return false;
    }
    var cal = cal;
    var cd = cal.activeDiv;
    var yc = cal.yearsCombo;
    if (cal.hilitedYear) {
        Calendar.removeClass(cal.hilitedYear, "hilite");
    }
    if (cal.activeYear) {
        Calendar.removeClass(cal.activeYear, "active");
    }
    cal.activeYear = null;
    var Y = cal.date.getFullYear() + (fwd ? 1 : -1);
    var yr = yc.firstChild;
    var show = false;
    for (var i = 12; i > 0; --i) {
        if (Y >= cal.minYear && Y <= cal.maxYear) {
            yr.innerHTML = Y;
            yr.year = Y;
            yr.style.display = "block";
            show = true;
        } else {
            yr.style.display = "none";
        }
        yr = yr.nextSibling;
        Y += fwd ? cal.yearStep : -cal.yearStep;
    }
    if (show) {
        var s = yc.style;
        s.display = "block";
        if (cd.navtype < 0)
            s.left = cd.offsetLeft + "px";
        else {
            var ycw = yc.offsetWidth;
            if (typeof ycw == "undefined")
                // Konqueror brain-dead techniques
                ycw = 50;
            s.left = (cd.offsetLeft + cd.offsetWidth - ycw) + "px";
        }
        s.top = (cd.offsetTop + cd.offsetHeight) + "px";
    }
};

// event handlers

Calendar.tableMouseUp = function(ev) {
    var cal = Calendar._C;
    if (!cal) {
        return false;
    }
    if (cal.timeout) {
        clearTimeout(cal.timeout);
    }
    var el = cal.activeDiv;
    if (!el) {
        return false;
    }
    var target = Calendar.getTargetElement(ev);
    ev || (ev = window.event);
    Calendar.removeClass(el, "active");
    if (target == el || target.parentNode == el) {
        Calendar.cellClick(el, ev);
    }
    var mon = Calendar.findMonth(target);
    var date = null;
    if (mon) {
        date = new CalendarDateObject(cal.date);
        if (mon.month != date.getMonth()) {
            date.setMonth(mon.month);
            cal.setDate(date);
            cal.dateClicked = false;
            cal.callHandler();
        }
    } else {
        var year = Calendar.findYear(target);
        if (year) {
            date = new CalendarDateObject(cal.date);
            if (year.year != date.getFullYear()) {
                date.setFullYear(year.year);
                cal.setDate(date);
                cal.dateClicked = false;
                cal.callHandler();
            }
        }
    }
    with (Calendar) {
        removeEvent(document, "mouseup", tableMouseUp);
        removeEvent(document, "mouseover", tableMouseOver);
        removeEvent(document, "mousemove", tableMouseOver);
        cal._hideCombos();
        _C = null;
        return stopEvent(ev);
    }
};

Calendar.tableMouseOver = function (ev) {
    var cal = Calendar._C;
    if (!cal) {
        return;
    }
    var el = cal.activeDiv;
    var target = Calendar.getTargetElement(ev);
    if (target == el || target.parentNode == el) {
        Calendar.addClass(el, "hilite active");
        Calendar.addClass(el.parentNode, "rowhilite");
    } else {
        if (typeof el.navtype == "undefined" || (el.navtype != 50 && (el.navtype == 0 || Math.abs(el.navtype) > 2)))
            Calendar.removeClass(el, "active");
        Calendar.removeClass(el, "hilite");
        Calendar.removeClass(el.parentNode, "rowhilite");
    }
    ev || (ev = window.event);
    if (el.navtype == 50 && target != el) {
        var pos = Calendar.getAbsolutePos(el);
        var w = el.offsetWidth;
        var x = ev.clientX;
        var dx;
        var decrease = true;
        if (x > pos.x + w) {
            dx = x - pos.x - w;
            decrease = false;
        } else
            dx = pos.x - x;

        if (dx < 0) dx = 0;
        var range = el._range;
        var current = el._current;
        var count = Math.floor(dx / 10) % range.length;
        for (var i = range.length; --i >= 0;)
            if (range[i] == current)
                break;
        while (count-- > 0)
            if (decrease) {
                if (--i < 0)
                    i = range.length - 1;
            } else if ( ++i >= range.length )
                i = 0;
        var newval = range[i];
        el.innerHTML = newval;

        cal.onUpdateTime();
    }
    var mon = Calendar.findMonth(target);
    if (mon) {
        if (mon.month != cal.date.getMonth()) {
            if (cal.hilitedMonth) {
                Calendar.removeClass(cal.hilitedMonth, "hilite");
            }
            Calendar.addClass(mon, "hilite");
            cal.hilitedMonth = mon;
        } else if (cal.hilitedMonth) {
            Calendar.removeClass(cal.hilitedMonth, "hilite");
        }
    } else {
        if (cal.hilitedMonth) {
            Calendar.removeClass(cal.hilitedMonth, "hilite");
        }
        var year = Calendar.findYear(target);
        if (year) {
            if (year.year != cal.date.getFullYear()) {
                if (cal.hilitedYear) {
                    Calendar.removeClass(cal.hilitedYear, "hilite");
                }
                Calendar.addClass(year, "hilite");
                cal.hilitedYear = year;
            } else if (cal.hilitedYear) {
                Calendar.removeClass(cal.hilitedYear, "hilite");
            }
        } else if (cal.hilitedYear) {
            Calendar.removeClass(cal.hilitedYear, "hilite");
        }
    }
    return Calendar.stopEvent(ev);
};

Calendar.tableMouseDown = function (ev) {
    if (Calendar.getTargetElement(ev) == Calendar.getElement(ev)) {
        return Calendar.stopEvent(ev);
    }
};

Calendar.calDragIt = function (ev) {
    var cal = Calendar._C;
    if (!(cal && cal.dragging)) {
        return false;
    }
    var posX;
    var posY;
    if (Calendar.is_ie) {
        posY = window.event.clientY + document.body.scrollTop;
        posX = window.event.clientX + document.body.scrollLeft;
    } else {
        posX = ev.pageX;
        posY = ev.pageY;
    }
    cal.hideShowCovered();
    var st = cal.element.style;
    st.left = (posX - cal.xOffs) + "px";
    st.top = (posY - cal.yOffs) + "px";
    return Calendar.stopEvent(ev);
};

Calendar.calDragEnd = function (ev) {
    var cal = Calendar._C;
    if (!cal) {
        return false;
    }
    cal.dragging = false;
    with (Calendar) {
        removeEvent(document, "mousemove", calDragIt);
        removeEvent(document, "mouseup", calDragEnd);
        tableMouseUp(ev);
    }
    cal.hideShowCovered();
};

Calendar.dayMouseDown = function(ev) {
    var el = Calendar.getElement(ev);
    if (el.disabled) {
        return false;
    }
    var cal = el.calendar;
    cal.activeDiv = el;
    Calendar._C = cal;
    if (el.navtype != 300) with (Calendar) {
        if (el.navtype == 50) {
            el._current = el.innerHTML;
            addEvent(document, "mousemove", tableMouseOver);
        } else
            addEvent(document, Calendar.is_ie5 ? "mousemove" : "mouseover", tableMouseOver);
        addClass(el, "hilite active");
        addEvent(document, "mouseup", tableMouseUp);
    } else if (cal.isPopup) {
        cal._dragStart(ev);
    }
    if (el.navtype == -1 || el.navtype == 1) {
        if (cal.timeout) clearTimeout(cal.timeout);
        cal.timeout = setTimeout("Calendar.showMonthsCombo()", 250);
    } else if (el.navtype == -2 || el.navtype == 2) {
        if (cal.timeout) clearTimeout(cal.timeout);
        cal.timeout = setTimeout((el.navtype > 0) ? "Calendar.showYearsCombo(true)" : "Calendar.showYearsCombo(false)", 250);
    } else {
        cal.timeout = null;
    }
    return Calendar.stopEvent(ev);
};

Calendar.dayMouseDblClick = function(ev) {
    Calendar.cellClick(Calendar.getElement(ev), ev || window.event);
    if (Calendar.is_ie) {
        document.selection.empty();
    }
};

Calendar.dayMouseOver = function(ev) {
    var el = Calendar.getElement(ev);
    if (Calendar.isRelated(el, ev) || Calendar._C || el.disabled) {
        return false;
    }
    if (el.ttip) {
        if (el.ttip.substr(0, 1) == "_") {
            el.ttip = el.caldate.print(el.calendar.ttDateFormat) + el.ttip.substr(1);
        }
        el.calendar.tooltips.innerHTML = el.ttip;
    }
    if (el.navtype != 300) {
        Calendar.addClass(el, "hilite");
        if (el.caldate) {
            Calendar.addClass(el.parentNode, "rowhilite");
        }
    }
    return Calendar.stopEvent(ev);
};

Calendar.dayMouseOut = function(ev) {
    with (Calendar) {
        var el = getElement(ev);
        if (isRelated(el, ev) || _C || el.disabled)
            return false;
        removeClass(el, "hilite");
        if (el.caldate)
            removeClass(el.parentNode, "rowhilite");
        if (el.calendar)
            el.calendar.tooltips.innerHTML = _TT["SEL_DATE"];
        return stopEvent(ev);
    }
};

/**
 *  A generic "click" handler :) handles all types of buttons defined in this
 *  calendar.
 */
Calendar.cellClick = function(el, ev) {
    var cal = el.calendar;
    var closing = false;
    var newdate = false;
    var date = null;
    if (typeof el.navtype == "undefined") {
        if (cal.currentDateEl) {
            Calendar.removeClass(cal.currentDateEl, "selected");
            Calendar.addClass(el, "selected");
            closing = (cal.currentDateEl == el);
            if (!closing) {
                cal.currentDateEl = el;
            }
        }
        cal.date.setDateOnly(el.caldate);
        date = cal.date;
        var other_month = !(cal.dateClicked = !el.otherMonth);
        if (!other_month && !cal.currentDateEl)
            cal._toggleMultipleDate(new CalendarDateObject(date));
        else
            newdate = !el.disabled;
        // a date was clicked
        if (other_month)
            cal._init(cal.firstDayOfWeek, date);
    } else {
        if (el.navtype == 200) {
            Calendar.removeClass(el, "hilite");
            cal.callCloseHandler();
            return;
        }
        date = new CalendarDateObject(cal.date);
        if (el.navtype == 0)
            date.setDateOnly(new CalendarDateObject()); // TODAY
        // unless "today" was clicked, we assume no date was clicked so
        // the selected handler will know not to close the calenar when
        // in single-click mode.
        // cal.dateClicked = (el.navtype == 0);
        cal.dateClicked = false;
        var year = date.getFullYear();
        var mon = date.getMonth();
        function setMonth(m) {
            var day = date.getDate();
            var max = date.getMonthDays(m);
            if (day > max) {
                date.setDate(max);
            }
            date.setMonth(m);
        };
        switch (el.navtype) {
            case 400:
            Calendar.removeClass(el, "hilite");
            var text = Calendar._TT["ABOUT"];
            if (typeof text != "undefined") {
                text += cal.showsTime ? Calendar._TT["ABOUT_TIME"] : "";
            } else {
                // FIXME: this should be removed as soon as lang files get updated!
                text = "Help and about box text is not translated into this language.\n" +
                    "If you know this language and you feel generous please update\n" +
                    "the corresponding file in \"lang\" subdir to match calendar-en.js\n" +
                    "and send it back to <mihai_bazon@yahoo.com> to get it into the distribution  ;-)\n\n" +
                    "Thank you!\n" +
                    "http://dynarch.com/mishoo/calendar.epl\n";
            }
            alert(text);
            return;
            case -2:
            if (year > cal.minYear) {
                date.setFullYear(year - 1);
            }
            break;
            case -1:
            if (mon > 0) {
                setMonth(mon - 1);
            } else if (year-- > cal.minYear) {
                date.setFullYear(year);
                setMonth(11);
            }
            break;
            case 1:
            if (mon < 11) {
                setMonth(mon + 1);
            } else if (year < cal.maxYear) {
                date.setFullYear(year + 1);
                setMonth(0);
            }
            break;
            case 2:
            if (year < cal.maxYear) {
                date.setFullYear(year + 1);
            }
            break;
            case 100:
            cal.setFirstDayOfWeek(el.fdow);
            return;
            case 50:
            var range = el._range;
            var current = el.innerHTML;
            for (var i = range.length; --i >= 0;)
                if (range[i] == current)
                    break;
            if (ev && ev.shiftKey) {
                if (--i < 0)
                    i = range.length - 1;
            } else if ( ++i >= range.length )
                i = 0;
            var newval = range[i];
            el.innerHTML = newval;
            cal.onUpdateTime();
            return;
            case 0:
            // TODAY will bring us here
            if ((typeof cal.getDateStatus == "function") &&
                cal.getDateStatus(date, date.getFullYear(), date.getMonth(), date.getDate())) {
                return false;
            }
            break;
        }
        if (!date.equalsTo(cal.date)) {
            cal.setDate(date);
            newdate = true;
        } else if (el.navtype == 0)
            newdate = closing = true;
    }
    if (newdate) {
        ev && cal.callHandler();
    }
    if (closing) {
        Calendar.removeClass(el, "hilite");
        ev && cal.callCloseHandler();
    }
};

// END: CALENDAR STATIC FUNCTIONS

// BEGIN: CALENDAR OBJECT FUNCTIONS

/**
 *  This function creates the calendar inside the given parent.  If _par is
 *  null than it creates a popup calendar inside the BODY element.  If _par is
 *  an element, be it BODY, then it creates a non-popup calendar (still
 *  hidden).  Some properties need to be set before calling this function.
 */
Calendar.prototype.create = function (_par) {
    var parent = null;
    if (! _par) {
        // default parent is the document body, in which case we create
        // a popup calendar.
        parent = document.getElementsByTagName("body")[0];
        this.isPopup = true;
    } else {
        parent = _par;
        this.isPopup = false;
    }
    this.date = this.dateStr ? new CalendarDateObject(this.dateStr) : new CalendarDateObject();

    var table = Calendar.createElement("table");
    this.table = table;
    table.cellSpacing = 0;
    table.cellPadding = 0;
    table.calendar = this;
    Calendar.addEvent(table, "mousedown", Calendar.tableMouseDown);

    var div = Calendar.createElement("div");
    this.element = div;
    div.className = "calendar";
    if (this.isPopup) {
        div.style.position = "absolute";
        div.style.display = "none";
    }
    div.appendChild(table);

    var thead = Calendar.createElement("thead", table);
    var cell = null;
    var row = null;

    var cal = this;
    var hh = function (text, cs, navtype) {
        cell = Calendar.createElement("td", row);
        cell.colSpan = cs;
        cell.className = "button";
        if (navtype != 0 && Math.abs(navtype) <= 2)
            cell.className += " nav";
        Calendar._add_evs(cell);
        cell.calendar = cal;
        cell.navtype = navtype;
        cell.innerHTML = "<div unselectable='on'>" + text + "</div>";
        return cell;
    };

    row = Calendar.createElement("tr", thead);
    var title_length = 6;
    (this.isPopup) && --title_length;
    (this.weekNumbers) && ++title_length;

    hh("?", 1, 400).ttip = Calendar._TT["INFO"];
    this.title = hh("", title_length, 300);
    this.title.className = "title";
    if (this.isPopup) {
        this.title.ttip = Calendar._TT["DRAG_TO_MOVE"];
        this.title.style.cursor = "move";
        hh("&#x00d7;", 1, 200).ttip = Calendar._TT["CLOSE"];
    }

    row = Calendar.createElement("tr", thead);
    row.className = "headrow";

    this._nav_py = hh("&#x00ab;", 1, -2);
    this._nav_py.ttip = Calendar._TT["PREV_YEAR"];

    this._nav_pm = hh("&#x2039;", 1, -1);
    this._nav_pm.ttip = Calendar._TT["PREV_MONTH"];

    this._nav_now = hh(Calendar._TT["TODAY"], this.weekNumbers ? 4 : 3, 0);
    this._nav_now.ttip = Calendar._TT["GO_TODAY"];

    this._nav_nm = hh("&#x203a;", 1, 1);
    this._nav_nm.ttip = Calendar._TT["NEXT_MONTH"];

    this._nav_ny = hh("&#x00bb;", 1, 2);
    this._nav_ny.ttip = Calendar._TT["NEXT_YEAR"];

    // day names
    row = Calendar.createElement("tr", thead);
    row.className = "daynames";
    if (this.weekNumbers) {
        cell = Calendar.createElement("td", row);
        cell.className = "name wn";
        cell.innerHTML = Calendar._TT["WK"];
    }
    for (var i = 7; i > 0; --i) {
        cell = Calendar.createElement("td", row);
        if (!i) {
            cell.navtype = 100;
            cell.calendar = this;
            Calendar._add_evs(cell);
        }
    }
    this.firstdayname = (this.weekNumbers) ? row.firstChild.nextSibling : row.firstChild;
    this._displayWeekdays();

    var tbody = Calendar.createElement("tbody", table);
    this.tbody = tbody;

    for (i = 6; i > 0; --i) {
        row = Calendar.createElement("tr", tbody);
        if (this.weekNumbers) {
            cell = Calendar.createElement("td", row);
        }
        for (var j = 7; j > 0; --j) {
            cell = Calendar.createElement("td", row);
            cell.calendar = this;
            Calendar._add_evs(cell);
        }
    }

    if (this.showsTime) {
        row = Calendar.createElement("tr", tbody);
        row.className = "time";

        cell = Calendar.createElement("td", row);
        cell.className = "time";
        cell.colSpan = 2;
        cell.innerHTML = Calendar._TT["TIME"] || "&nbsp;";

        cell = Calendar.createElement("td", row);
        cell.className = "time";
        cell.colSpan = this.weekNumbers ? 4 : 3;

        (function(){
            function makeTimePart(className, init, range_start, range_end) {
                var part = Calendar.createElement("span", cell);
                part.className = className;
                part.innerHTML = init;
                part.calendar = cal;
                part.ttip = Calendar._TT["TIME_PART"];
                part.navtype = 50;
                part._range = [];
                if (typeof range_start != "number")
                    part._range = range_start;
                else {
                    for (var i = range_start; i <= range_end; ++i) {
                        var txt;
                        if (i < 10 && range_end >= 10) txt = '0' + i;
                        else txt = '' + i;
                        part._range[part._range.length] = txt;
                    }
                }
                Calendar._add_evs(part);
                return part;
            };
            var hrs = cal.date.getHours();
            var mins = cal.date.getMinutes();
            var t12 = !cal.time24;
            var pm = (hrs > 12);
            if (t12 && pm) hrs -= 12;
            var H = makeTimePart("hour", hrs, t12 ? 1 : 0, t12 ? 12 : 23);
            var span = Calendar.createElement("span", cell);
            span.innerHTML = ":";
            span.className = "colon";
            var M = makeTimePart("minute", mins, 0, 59);
            var AP = null;
            cell = Calendar.createElement("td", row);
            cell.className = "time";
            cell.colSpan = 2;
            if (t12)
                AP = makeTimePart("ampm", pm ? "pm" : "am", ["am", "pm"]);
            else
                cell.innerHTML = "&nbsp;";

            cal.onSetTime = function() {
                var pm, hrs = this.date.getHours(),
                    mins = this.date.getMinutes();
                if (t12) {
                    pm = (hrs >= 12);
                    if (pm) hrs -= 12;
                    if (hrs == 0) hrs = 12;
                    AP.innerHTML = pm ? "pm" : "am";
                }
                H.innerHTML = (hrs < 10) ? ("0" + hrs) : hrs;
                M.innerHTML = (mins < 10) ? ("0" + mins) : mins;
            };

            cal.onUpdateTime = function() {
                var date = this.date;
                var h = parseInt(H.innerHTML, 10);
                if (t12) {
                    if (/pm/i.test(AP.innerHTML) && h < 12)
                        h += 12;
                    else if (/am/i.test(AP.innerHTML) && h == 12)
                        h = 0;
                }
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                date.setHours(h);
                date.setMinutes(parseInt(M.innerHTML, 10));
                date.setFullYear(y);
                date.setMonth(m);
                date.setDate(d);
                this.dateClicked = false;
                this.callHandler();
            };
        })();
    } else {
        this.onSetTime = this.onUpdateTime = function() {};
    }

    var tfoot = Calendar.createElement("tfoot", table);

    row = Calendar.createElement("tr", tfoot);
    row.className = "footrow";

    cell = hh(Calendar._TT["SEL_DATE"], this.weekNumbers ? 8 : 7, 300);
    cell.className = "ttip";
    if (this.isPopup) {
        cell.ttip = Calendar._TT["DRAG_TO_MOVE"];
        cell.style.cursor = "move";
    }
    this.tooltips = cell;

    div = Calendar.createElement("div", this.element);
    this.monthsCombo = div;
    div.className = "combo";
    for (i = 0; i < Calendar._MN.length; ++i) {
        var mn = Calendar.createElement("div");
        mn.className = Calendar.is_ie ? "label-IEfix" : "label";
        mn.month = i;
        mn.innerHTML = Calendar._SMN[i];
        div.appendChild(mn);
    }

    div = Calendar.createElement("div", this.element);
    this.yearsCombo = div;
    div.className = "combo";
    for (i = 12; i > 0; --i) {
        var yr = Calendar.createElement("div");
        yr.className = Calendar.is_ie ? "label-IEfix" : "label";
        div.appendChild(yr);
    }

    this._init(this.firstDayOfWeek, this.date);
    parent.appendChild(this.element);
};

/** keyboard navigation, only for popup calendars */
Calendar._keyEvent = function(ev) {
    var cal = window._dynarch_popupCalendar;
    if (!cal || cal.multiple)
        return false;
    (Calendar.is_ie) && (ev = window.event);
    var act = (Calendar.is_ie || ev.type == "keypress"),
        K = ev.keyCode;
    if (ev.ctrlKey) {
        switch (K) {
            case 37: // KEY left
            act && Calendar.cellClick(cal._nav_pm);
            break;
            case 38: // KEY up
            act && Calendar.cellClick(cal._nav_py);
            break;
            case 39: // KEY right
            act && Calendar.cellClick(cal._nav_nm);
            break;
            case 40: // KEY down
            act && Calendar.cellClick(cal._nav_ny);
            break;
            default:
            return false;
        }
    } else switch (K) {
        case 32: // KEY space (now)
        Calendar.cellClick(cal._nav_now);
        break;
        case 27: // KEY esc
        act && cal.callCloseHandler();
        break;
        case 37: // KEY left
        case 38: // KEY up
        case 39: // KEY right
        case 40: // KEY down
        if (act) {
            var prev, x, y, ne, el, step;
            prev = K == 37 || K == 38;
            step = (K == 37 || K == 39) ? 1 : 7;
            function setVars() {
                el = cal.currentDateEl;
                var p = el.pos;
                x = p & 15;
                y = p >> 4;
                ne = cal.ar_days[y][x];
            };setVars();
            function prevMonth() {
                var date = new CalendarDateObject(cal.date);
                date.setDate(date.getDate() - step);
                cal.setDate(date);
            };
            function nextMonth() {
                var date = new CalendarDateObject(cal.date);
                date.setDate(date.getDate() + step);
                cal.setDate(date);
            };
            while (1) {
                switch (K) {
                    case 37: // KEY left
                    if (--x >= 0)
                        ne = cal.ar_days[y][x];
                    else {
                        x = 6;
                        K = 38;
                        continue;
                    }
                    break;
                    case 38: // KEY up
                    if (--y >= 0)
                        ne = cal.ar_days[y][x];
                    else {
                        prevMonth();
                        setVars();
                    }
                    break;
                    case 39: // KEY right
                    if (++x < 7)
                        ne = cal.ar_days[y][x];
                    else {
                        x = 0;
                        K = 40;
                        continue;
                    }
                    break;
                    case 40: // KEY down
                    if (++y < cal.ar_days.length)
                        ne = cal.ar_days[y][x];
                    else {
                        nextMonth();
                        setVars();
                    }
                    break;
                }
                break;
            }
            if (ne) {
                if (!ne.disabled)
                    Calendar.cellClick(ne);
                else if (prev)
                    prevMonth();
                else
                    nextMonth();
            }
        }
        break;
        case 13: // KEY enter
        if (act)
            Calendar.cellClick(cal.currentDateEl, ev);
        break;
        default:
        return false;
    }
    return Calendar.stopEvent(ev);
};

/**
 *  (RE)Initializes the calendar to the given date and firstDayOfWeek
 */
Calendar.prototype._init = function (firstDayOfWeek, date) {
    var today = new CalendarDateObject(),
        TY = today.getFullYear(),
        TM = today.getMonth(),
        TD = today.getDate();
    this.table.style.visibility = "hidden";
    var year = date.getFullYear();
    if (year < this.minYear) {
        year = this.minYear;
        date.setFullYear(year);
    } else if (year > this.maxYear) {
        year = this.maxYear;
        date.setFullYear(year);
    }
    this.firstDayOfWeek = firstDayOfWeek;
    this.date = new CalendarDateObject(date);
    var month = date.getMonth();
    var mday = date.getDate();
    var no_days = date.getMonthDays();

    // calendar voodoo for computing the first day that would actually be
    // displayed in the calendar, even if it's from the previous month.
    // WARNING: this is magic. ;-)
    date.setDate(1);
    var day1 = (date.getDay() - this.firstDayOfWeek) % 7;
    if (day1 < 0)
        day1 += 7;
    date.setDate(-day1);
    date.setDate(date.getDate() + 1);

    var row = this.tbody.firstChild;
    var MN = Calendar._SMN[month];
    var ar_days = this.ar_days = new Array();
    var weekend = Calendar._TT["WEEKEND"];
    var dates = this.multiple ? (this.datesCells = {}) : null;
    for (var i = 0; i < 6; ++i, row = row.nextSibling) {
        var cell = row.firstChild;
        if (this.weekNumbers) {
            cell.className = "day wn";
            cell.innerHTML = date.getWeekNumber();
            cell = cell.nextSibling;
        }
        row.className = "daysrow";
        var hasdays = false, iday, dpos = ar_days[i] = [];
        for (var j = 0; j < 7; ++j, cell = cell.nextSibling, date.setDate(iday + 1)) {
            iday = date.getDate();
            var wday = date.getDay();
            cell.className = "day";
            cell.pos = i << 4 | j;
            dpos[j] = cell;
            var current_month = (date.getMonth() == month);
            if (!current_month) {
                if (this.showsOtherMonths) {
                    cell.className += " othermonth";
                    cell.otherMonth = true;
                } else {
                    cell.className = "emptycell";
                    cell.innerHTML = "&nbsp;";
                    cell.disabled = true;
                    continue;
                }
            } else {
                cell.otherMonth = false;
                hasdays = true;
            }
            cell.disabled = false;
            cell.innerHTML = this.getDateText ? this.getDateText(date, iday) : iday;
            if (dates)
                dates[date.print("%Y%m%d")] = cell;
            if (this.getDateStatus) {
                var status = this.getDateStatus(date, year, month, iday);
                if (this.getDateToolTip) {
                    var toolTip = this.getDateToolTip(date, year, month, iday);
                    if (toolTip)
                        cell.title = toolTip;
                }
                if (status === true) {
                    cell.className += " disabled";
                    cell.disabled = true;
                } else {
                    if (/disabled/i.test(status))
                        cell.disabled = true;
                    cell.className += " " + status;
                }
            }
            if (!cell.disabled) {
                cell.caldate = new CalendarDateObject(date);
                cell.ttip = "_";
                if (!this.multiple && current_month
                    && iday == mday && this.hiliteToday) {
                    cell.className += " selected";
                    this.currentDateEl = cell;
                }
                if (date.getFullYear() == TY &&
                    date.getMonth() == TM &&
                    iday == TD) {
                    cell.className += " today";
                    cell.ttip += Calendar._TT["PART_TODAY"];
                }
                if (weekend.indexOf(wday.toString()) != -1)
                    cell.className += cell.otherMonth ? " oweekend" : " weekend";
            }
        }
        if (!(hasdays || this.showsOtherMonths))
            row.className = "emptyrow";
    }
    this.title.innerHTML = Calendar._MN[month] + ", " + year;
    this.onSetTime();
    this.table.style.visibility = "visible";
    this._initMultipleDates();
    // PROFILE
    // this.tooltips.innerHTML = "Generated in " + ((new CalendarDateObject()) - today) + " ms";
};

Calendar.prototype._initMultipleDates = function() {
    if (this.multiple) {
        for (var i in this.multiple) {
            var cell = this.datesCells[i];
            var d = this.multiple[i];
            if (!d)
                continue;
            if (cell)
                cell.className += " selected";
        }
    }
};

Calendar.prototype._toggleMultipleDate = function(date) {
    if (this.multiple) {
        var ds = date.print("%Y%m%d");
        var cell = this.datesCells[ds];
        if (cell) {
            var d = this.multiple[ds];
            if (!d) {
                Calendar.addClass(cell, "selected");
                this.multiple[ds] = date;
            } else {
                Calendar.removeClass(cell, "selected");
                delete this.multiple[ds];
            }
        }
    }
};

Calendar.prototype.setDateToolTipHandler = function (unaryFunction) {
    this.getDateToolTip = unaryFunction;
};

/**
 *  Calls _init function above for going to a certain date (but only if the
 *  date is different than the currently selected one).
 */
Calendar.prototype.setDate = function (date) {
    if (!date.equalsTo(this.date)) {
        this._init(this.firstDayOfWeek, date);
    }
};

/**
 *  Refreshes the calendar.  Useful if the "disabledHandler" function is
 *  dynamic, meaning that the list of disabled date can change at runtime.
 *  Just * call this function if you think that the list of disabled dates
 *  should * change.
 */
Calendar.prototype.refresh = function () {
    this._init(this.firstDayOfWeek, this.date);
};

/** Modifies the "firstDayOfWeek" parameter (pass 0 for Synday, 1 for Monday, etc.). */
Calendar.prototype.setFirstDayOfWeek = function (firstDayOfWeek) {
    this._init(firstDayOfWeek, this.date);
    this._displayWeekdays();
};

/**
 *  Allows customization of what dates are enabled.  The "unaryFunction"
 *  parameter must be a function object that receives the date (as a JS Date
 *  object) and returns a boolean value.  If the returned value is true then
 *  the passed date will be marked as disabled.
 */
Calendar.prototype.setDateStatusHandler = Calendar.prototype.setDisabledHandler = function (unaryFunction) {
    this.getDateStatus = unaryFunction;
};

/** Customization of allowed year range for the calendar. */
Calendar.prototype.setRange = function (a, z) {
    this.minYear = a;
    this.maxYear = z;
};

/** Calls the first user handler (selectedHandler). */
Calendar.prototype.callHandler = function () {
    if (this.onSelected) {
        this.onSelected(this, this.date.print(this.dateFormat));
    }
};

/** Calls the second user handler (closeHandler). */
Calendar.prototype.callCloseHandler = function () {
    if (this.onClose) {
        this.onClose(this);
    }
    this.hideShowCovered();
};

/** Removes the calendar object from the DOM tree and destroys it. */
Calendar.prototype.destroy = function () {
    var el = this.element.parentNode;
    el.removeChild(this.element);
    Calendar._C = null;
    window._dynarch_popupCalendar = null;
};

/**
 *  Moves the calendar element to a different section in the DOM tree (changes
 *  its parent).
 */
Calendar.prototype.reparent = function (new_parent) {
    var el = this.element;
    el.parentNode.removeChild(el);
    new_parent.appendChild(el);
};

// This gets called when the user presses a mouse button anywhere in the
// document, if the calendar is shown.  If the click was outside the open
// calendar this function closes it.
Calendar._checkCalendar = function(ev) {
    var calendar = window._dynarch_popupCalendar;
    if (!calendar) {
        return false;
    }
    var el = Calendar.is_ie ? Calendar.getElement(ev) : Calendar.getTargetElement(ev);
    for (; el != null && el != calendar.element; el = el.parentNode);
    if (el == null) {
        // calls closeHandler which should hide the calendar.
        window._dynarch_popupCalendar.callCloseHandler();
        return Calendar.stopEvent(ev);
    }
};

/** Shows the calendar. */
Calendar.prototype.show = function () {
    var rows = this.table.getElementsByTagName("tr");
    for (var i = rows.length; i > 0;) {
        var row = rows[--i];
        Calendar.removeClass(row, "rowhilite");
        var cells = row.getElementsByTagName("td");
        for (var j = cells.length; j > 0;) {
            var cell = cells[--j];
            Calendar.removeClass(cell, "hilite");
            Calendar.removeClass(cell, "active");
        }
    }
    this.element.style.display = "block";
    this.hidden = false;
    if (this.isPopup) {
        window._dynarch_popupCalendar = this;
        Calendar.addEvent(document, "keydown", Calendar._keyEvent);
        Calendar.addEvent(document, "keypress", Calendar._keyEvent);
        Calendar.addEvent(document, "mousedown", Calendar._checkCalendar);
    }
    this.hideShowCovered();
};

/**
 *  Hides the calendar.  Also removes any "hilite" from the class of any TD
 *  element.
 */
Calendar.prototype.hide = function () {
    if (this.isPopup) {
        Calendar.removeEvent(document, "keydown", Calendar._keyEvent);
        Calendar.removeEvent(document, "keypress", Calendar._keyEvent);
        Calendar.removeEvent(document, "mousedown", Calendar._checkCalendar);
    }
    this.element.style.display = "none";
    this.hidden = true;
    this.hideShowCovered();
};

/**
 *  Shows the calendar at a given absolute position (beware that, depending on
 *  the calendar element style -- position property -- this might be relative
 *  to the parent's containing rectangle).
 */
Calendar.prototype.showAt = function (x, y) {
    var s = this.element.style;
    s.left = x + "px";
    s.top = y + "px";
    this.show();
};

/** Shows the calendar near a given element. */
Calendar.prototype.showAtElement = function (el, opts) {
    var self = this;
    var p = Calendar.getAbsolutePos(el);
    if (!opts || typeof opts != "string") {
        this.showAt(p.x, p.y + el.offsetHeight);
        return true;
    }
    function fixPosition(box) {
        if (box.x < 0)
            box.x = 0;
        if (box.y < 0)
            box.y = 0;
        var cp = document.createElement("div");
        var s = cp.style;
        s.position = "absolute";
        s.right = s.bottom = s.width = s.height = "0px";
        document.body.appendChild(cp);
        var br = Calendar.getAbsolutePos(cp);
        document.body.removeChild(cp);
        if (Calendar.is_ie) {
            br.y += document.documentElement.scrollTop;
            br.x += document.documentElement.scrollLeft;
        } else {
            br.y += window.scrollY;
            br.x += window.scrollX;
        }
        var tmp = box.x + box.width - br.x;
        if (tmp > 0) box.x -= tmp;
        tmp = box.y + box.height - br.y;
        if (tmp > 0) box.y -= tmp;
    };
    this.element.style.display = "block";
    Calendar.continuation_for_the_fucking_khtml_browser = function() {
        var w = self.element.offsetWidth;
        var h = self.element.offsetHeight;
        self.element.style.display = "none";
        var valign = opts.substr(0, 1);
        var halign = "l";
        if (opts.length > 1) {
            halign = opts.substr(1, 1);
        }
        // vertical alignment
        switch (valign) {
            case "T": p.y -= h; break;
            case "B": p.y += el.offsetHeight; break;
            case "C": p.y += (el.offsetHeight - h) / 2; break;
            case "t": p.y += el.offsetHeight - h; break;
            case "b": break; // already there
        }
        // horizontal alignment
        switch (halign) {
            case "L": p.x -= w; break;
            case "R": p.x += el.offsetWidth; break;
            case "C": p.x += (el.offsetWidth - w) / 2; break;
            case "l": p.x += el.offsetWidth - w; break;
            case "r": break; // already there
        }
        p.width = w;
        p.height = h + 40;
        self.monthsCombo.style.display = "none";
        fixPosition(p);
        self.showAt(p.x, p.y);
    };
    if (Calendar.is_khtml)
        setTimeout("Calendar.continuation_for_the_fucking_khtml_browser()", 10);
    else
        Calendar.continuation_for_the_fucking_khtml_browser();
};

/** Customizes the date format. */
Calendar.prototype.setDateFormat = function (str) {
    this.dateFormat = str;
};

/** Customizes the tooltip date format. */
Calendar.prototype.setTtDateFormat = function (str) {
    this.ttDateFormat = str;
};

/**
 *  Tries to identify the date represented in a string.  If successful it also
 *  calls this.setDate which moves the calendar to the given date.
 */
Calendar.prototype.parseDate = function(str, fmt) {
    if (!fmt)
        fmt = this.dateFormat;
    this.setDate(Date.parseDate(str, fmt));
};

Calendar.prototype.hideShowCovered = function () {
    if (!Calendar.is_ie && !Calendar.is_opera)
        return;
    function getVisib(obj){
        var value = obj.style.visibility;
        if (!value) {
            if (document.defaultView && typeof (document.defaultView.getComputedStyle) == "function") { // Gecko, W3C
                if (!Calendar.is_khtml)
                    value = document.defaultView.
                        getComputedStyle(obj, "").getPropertyValue("visibility");
                else
                    value = '';
            } else if (obj.currentStyle) { // IE
                value = obj.currentStyle.visibility;
            } else
                value = '';
        }
        return value;
    };

    var tags = new Array("applet", "iframe", "select");
    var el = this.element;

    var p = Calendar.getAbsolutePos(el);
    var EX1 = p.x;
    var EX2 = el.offsetWidth + EX1;
    var EY1 = p.y;
    var EY2 = el.offsetHeight + EY1;

    for (var k = tags.length; k > 0; ) {
        var ar = document.getElementsByTagName(tags[--k]);
        var cc = null;

        for (var i = ar.length; i > 0;) {
            cc = ar[--i];

            p = Calendar.getAbsolutePos(cc);
            var CX1 = p.x;
            var CX2 = cc.offsetWidth + CX1;
            var CY1 = p.y;
            var CY2 = cc.offsetHeight + CY1;

            if (this.hidden || (CX1 > EX2) || (CX2 < EX1) || (CY1 > EY2) || (CY2 < EY1)) {
                if (!cc.__msh_save_visibility) {
                    cc.__msh_save_visibility = getVisib(cc);
                }
                cc.style.visibility = cc.__msh_save_visibility;
            } else {
                if (!cc.__msh_save_visibility) {
                    cc.__msh_save_visibility = getVisib(cc);
                }
                cc.style.visibility = "hidden";
            }
        }
    }
};

/** Internal function; it displays the bar with the names of the weekday. */
Calendar.prototype._displayWeekdays = function () {
    var fdow = this.firstDayOfWeek;
    var cell = this.firstdayname;
    var weekend = Calendar._TT["WEEKEND"];
    for (var i = 0; i < 7; ++i) {
        cell.className = "day name";
        var realday = (i + fdow) % 7;
        if (i) {
            cell.ttip = Calendar._TT["DAY_FIRST"].replace("%s", Calendar._DN[realday]);
            cell.navtype = 100;
            cell.calendar = this;
            cell.fdow = realday;
            Calendar._add_evs(cell);
        }
        if (weekend.indexOf(realday.toString()) != -1) {
            Calendar.addClass(cell, "weekend");
        }
        cell.innerHTML = Calendar._SDN[(i + fdow) % 7];
        cell = cell.nextSibling;
    }
};

/** Internal function.  Hides all combo boxes that might be displayed. */
Calendar.prototype._hideCombos = function () {
    this.monthsCombo.style.display = "none";
    this.yearsCombo.style.display = "none";
};

/** Internal function.  Starts dragging the element. */
Calendar.prototype._dragStart = function (ev) {
    if (this.dragging) {
        return;
    }
    this.dragging = true;
    var posX;
    var posY;
    if (Calendar.is_ie) {
        posY = window.event.clientY + document.body.scrollTop;
        posX = window.event.clientX + document.body.scrollLeft;
    } else {
        posY = ev.clientY + window.scrollY;
        posX = ev.clientX + window.scrollX;
    }
    var st = this.element.style;
    this.xOffs = posX - parseInt(st.left);
    this.yOffs = posY - parseInt(st.top);
    with (Calendar) {
        addEvent(document, "mousemove", calDragIt);
        addEvent(document, "mouseup", calDragEnd);
    }
};

// BEGIN: DATE OBJECT PATCHES

/** Adds the number of days array to the Date object. */
Date._MD = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

/** Constants used for time computations */
Date.SECOND = 1000 /* milliseconds */;
Date.MINUTE = 60 * Date.SECOND;
Date.HOUR   = 60 * Date.MINUTE;
Date.DAY    = 24 * Date.HOUR;
Date.WEEK   =  7 * Date.DAY;

Date.parseDate = function(str, fmt) {
    var today = new CalendarDateObject();
    var y = 0;
    var m = -1;
    var d = 0;

    // translate date into en_US, because split() cannot parse non-latin stuff
    var a = str;
    var i;
    for (i = 0; i < Calendar._MN.length; i++) {
        a = a.replace(Calendar._MN[i], enUS.m.wide[i]);
    }
    for (i = 0; i < Calendar._SMN.length; i++) {
        a = a.replace(Calendar._SMN[i], enUS.m.abbr[i]);
    }
    a = a.replace(Calendar._am, 'am');
    a = a.replace(Calendar._am.toLowerCase(), 'am');
    a = a.replace(Calendar._pm, 'pm');
    a = a.replace(Calendar._pm.toLowerCase(), 'pm');

    a = a.split(/\W+/);

    var b = fmt.match(/%./g);
    var i = 0, j = 0;
    var hr = 0;
    var min = 0;
    for (i = 0; i < a.length; ++i) {
        if (!a[i])
            continue;
        switch (b[i]) {
            case "%d":
            case "%e":
            d = parseInt(a[i], 10);
            break;

            case "%m":
            m = parseInt(a[i], 10) - 1;
            break;

            case "%Y":
            case "%y":
            y = parseInt(a[i], 10);
            (y < 100) && (y += (y > 29) ? 1900 : 2000);
            break;

            case "%b":
            for (j = 0; j < 12; ++j) {
                if (enUS.m.abbr[j].substr(0, a[i].length).toLowerCase() == a[i].toLowerCase()) { m = j; break; }
            }
            break;

            case "%B":
            for (j = 0; j < 12; ++j) {
                if (enUS.m.wide[j].substr(0, a[i].length).toLowerCase() == a[i].toLowerCase()) { m = j; break; }
            }
            break;

            case "%H":
            case "%I":
            case "%k":
            case "%l":
            hr = parseInt(a[i], 10);
            break;

            case "%P":
            case "%p":
            if (/pm/i.test(a[i]) && hr < 12)
                hr += 12;
            else if (/am/i.test(a[i]) && hr >= 12)
                hr -= 12;
            break;

            case "%M":
            min = parseInt(a[i], 10);
            break;
        }
    }
    if (isNaN(y)) y = today.getFullYear();
    if (isNaN(m)) m = today.getMonth();
    if (isNaN(d)) d = today.getDate();
    if (isNaN(hr)) hr = today.getHours();
    if (isNaN(min)) min = today.getMinutes();
    if (y != 0 && m != -1 && d != 0)
        return new CalendarDateObject(y, m, d, hr, min, 0);
    y = 0; m = -1; d = 0;
    for (i = 0; i < a.length; ++i) {
        if (a[i].search(/[a-zA-Z]+/) != -1) {
            var t = -1;
            for (j = 0; j < 12; ++j) {
                if (Calendar._MN[j].substr(0, a[i].length).toLowerCase() == a[i].toLowerCase()) { t = j; break; }
            }
            if (t != -1) {
                if (m != -1) {
                    d = m+1;
                }
                m = t;
            }
        } else if (parseInt(a[i], 10) <= 12 && m == -1) {
            m = a[i]-1;
        } else if (parseInt(a[i], 10) > 31 && y == 0) {
            y = parseInt(a[i], 10);
            (y < 100) && (y += (y > 29) ? 1900 : 2000);
        } else if (d == 0) {
            d = a[i];
        }
    }
    if (y == 0)
        y = today.getFullYear();
    if (m != -1 && d != 0)
        return new CalendarDateObject(y, m, d, hr, min, 0);
    return today;
};

/** Returns the number of days in the current month */
Date.prototype.getMonthDays = function(month) {
    var year = this.getFullYear();
    if (typeof month == "undefined") {
        month = this.getMonth();
    }
    if (((0 == (year%4)) && ( (0 != (year%100)) || (0 == (year%400)))) && month == 1) {
        return 29;
    } else {
        return Date._MD[month];
    }
};

/** Returns the number of day in the year. */
Date.prototype.getDayOfYear = function() {
    var now = new CalendarDateObject(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
    var then = new CalendarDateObject(this.getFullYear(), 0, 0, 0, 0, 0);
    var time = now - then;
    return Math.floor(time / Date.DAY);
};

/** Returns the number of the week in year, as defined in ISO 8601. */
Date.prototype.getWeekNumber = function() {
    var d = new CalendarDateObject(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
    var DoW = d.getDay();
    d.setDate(d.getDate() - (DoW + 6) % 7 + 3); // Nearest Thu
    var ms = d.valueOf(); // GMT
    d.setMonth(0);
    d.setDate(4); // Thu in Week 1
    return Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1;
};

/** Checks date and time equality */
Date.prototype.equalsTo = function(date) {
    return ((this.getFullYear() == date.getFullYear()) &&
        (this.getMonth() == date.getMonth()) &&
        (this.getDate() == date.getDate()) &&
        (this.getHours() == date.getHours()) &&
        (this.getMinutes() == date.getMinutes()));
};

/** Set only the year, month, date parts (keep existing time) */
Date.prototype.setDateOnly = function(date) {
    var tmp = new CalendarDateObject(date);
    this.setDate(1);
    this.setFullYear(tmp.getFullYear());
    this.setMonth(tmp.getMonth());
    this.setDate(tmp.getDate());
};

/** Prints the date in a string according to the given format. */
Date.prototype.print = function (str) {
    var m = this.getMonth();
    var d = this.getDate();
    var y = this.getFullYear();
    var wn = this.getWeekNumber();
    var w = this.getDay();
    var s = {};
    var hr = this.getHours();
    var pm = (hr >= 12);
    var ir = (pm) ? (hr - 12) : hr;
    var dy = this.getDayOfYear();
    if (ir == 0)
        ir = 12;
    var min = this.getMinutes();
    var sec = this.getSeconds();
    s["%a"] = Calendar._SDN[w]; // abbreviated weekday name [FIXME: I18N]
    s["%A"] = Calendar._DN[w]; // full weekday name
    s["%b"] = Calendar._SMN[m]; // abbreviated month name [FIXME: I18N]
    s["%B"] = Calendar._MN[m]; // full month name
    // FIXME: %c : preferred date and time representation for the current locale
    s["%C"] = 1 + Math.floor(y / 100); // the century number
    s["%d"] = (d < 10) ? ("0" + d) : d; // the day of the month (range 01 to 31)
    s["%e"] = d; // the day of the month (range 1 to 31)
    // FIXME: %D : american date style: %m/%d/%y
    // FIXME: %E, %F, %G, %g, %h (man strftime)
    s["%H"] = (hr < 10) ? ("0" + hr) : hr; // hour, range 00 to 23 (24h format)
    s["%I"] = (ir < 10) ? ("0" + ir) : ir; // hour, range 01 to 12 (12h format)
    s["%j"] = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy; // day of the year (range 001 to 366)
    s["%k"] = hr;        // hour, range 0 to 23 (24h format)
    s["%l"] = ir;        // hour, range 1 to 12 (12h format)
    s["%m"] = (m < 9) ? ("0" + (1+m)) : (1+m); // month, range 01 to 12
    s["%M"] = (min < 10) ? ("0" + min) : min; // minute, range 00 to 59
    s["%n"] = "\n";        // a newline character
    s["%p"] = pm ? Calendar._pm.toUpperCase() : Calendar._am.toUpperCase();
    s["%P"] = pm ? Calendar._pm.toLowerCase() : Calendar._am.toLowerCase();
    // FIXME: %r : the time in am/pm notation %I:%M:%S %p
    // FIXME: %R : the time in 24-hour notation %H:%M
    s["%s"] = Math.floor(this.getTime() / 1000);
    s["%S"] = (sec < 10) ? ("0" + sec) : sec; // seconds, range 00 to 59
    s["%t"] = "\t";        // a tab character
    // FIXME: %T : the time in 24-hour notation (%H:%M:%S)
    s["%U"] = s["%W"] = s["%V"] = (wn < 10) ? ("0" + wn) : wn;
    s["%u"] = w + 1;    // the day of the week (range 1 to 7, 1 = MON)
    s["%w"] = w;        // the day of the week (range 0 to 6, 0 = SUN)
    // FIXME: %x : preferred date representation for the current locale without the time
    // FIXME: %X : preferred time representation for the current locale without the date
    s["%y"] = ('' + y).substr(2, 2); // year without the century (range 00 to 99)
    s["%Y"] = y;        // year with the century
    s["%%"] = "%";        // a literal '%' character

    var re = /%./g;
    if (!Calendar.is_ie5 && !Calendar.is_khtml)
        return str.replace(re, function (par) { return s[par] || par; });

    var a = str.match(re);
    for (var i = 0; i < a.length; i++) {
        var tmp = s[a[i]];
        if (tmp) {
            re = new RegExp(a[i], 'g');
            str = str.replace(re, tmp);
        }
    }

    return str;
};

Date.prototype.__msh_oldSetFullYear = Date.prototype.setFullYear;
Date.prototype.setFullYear = function(y) {
    var d = new CalendarDateObject(this);
    d.__msh_oldSetFullYear(y);
    if (d.getMonth() != this.getMonth())
        this.setDate(28);
    this.__msh_oldSetFullYear(y);
};

CalendarDateObject.prototype = new Date();
CalendarDateObject.prototype.constructor = CalendarDateObject;
CalendarDateObject.prototype.parent = Date.prototype;
function CalendarDateObject() {
    var dateObj;
    if (arguments.length > 1) {
        dateObj = eval("new this.parent.constructor("+Array.prototype.slice.call(arguments).join(",")+");");
    } else if (arguments.length > 0) {
        dateObj = new this.parent.constructor(arguments[0]);
    } else {
        dateObj = new this.parent.constructor();
        if (typeof(CalendarDateObject._SERVER_TIMZEONE_SECONDS) != "undefined") {
            dateObj.setTime((CalendarDateObject._SERVER_TIMZEONE_SECONDS + dateObj.getTimezoneOffset()*60)*1000);
        }
    }
    return dateObj;
}

// END: DATE OBJECT PATCHES


// global object that remembers the calendar
window._dynarch_popupCalendar = null;

/*  Copyright Mihai Bazon, 2002, 2003  |  http://dynarch.com/mishoo/
 * ---------------------------------------------------------------------------
 *
 * The DHTML Calendar
 *
 * Details and latest version at:
 * http://dynarch.com/mishoo/calendar.epl
 *
 * This script is distributed under the GNU Lesser General Public License.
 * Read the entire license text here: http://www.gnu.org/licenses/lgpl.html
 *
 * This file defines helper functions for setting up the calendar.  They are
 * intended to help non-programmers get a working calendar on their site
 * quickly.  This script should not be seen as part of the calendar.  It just
 * shows you what one can do with the calendar, while in the same time
 * providing a quick and simple method for setting it up.  If you need
 * exhaustive customization of the calendar creation process feel free to
 * modify this code to suit your needs (this is recommended and much better
 * than modifying calendar.js itself).
 */
Calendar.setup=function(params){function param_default(pname,def){if(typeof params[pname]=="undefined"){params[pname]=def;}};param_default("inputField",null);param_default("displayArea",null);param_default("button",null);param_default("eventName","click");param_default("ifFormat","%Y/%m/%d");param_default("daFormat","%Y/%m/%d");param_default("singleClick",true);param_default("disableFunc",null);param_default("dateStatusFunc",params["disableFunc"]);param_default("dateText",null);param_default("firstDay",null);param_default("align","Br");param_default("range",[1900,2999]);param_default("weekNumbers",true);param_default("flat",null);param_default("flatCallback",null);param_default("onSelect",null);param_default("onClose",null);param_default("onUpdate",null);param_default("date",null);param_default("showsTime",false);param_default("timeFormat","24");param_default("electric",true);param_default("step",2);param_default("position",null);param_default("cache",false);param_default("showOthers",false);param_default("multiple",null);var tmp=["inputField","displayArea","button"];for(var i in tmp){if(typeof params[tmp[i]]=="string"){params[tmp[i]]=document.getElementById(params[tmp[i]]);}}if(!(params.flat||params.multiple||params.inputField||params.displayArea||params.button)){alert("Calendar.setup:\n  Nothing to setup (no fields found).  Please check your code");return false;}function onSelect(cal){var p=cal.params;var update=(cal.dateClicked||p.electric);if(update&&p.inputField){p.inputField.value=cal.date.print(p.ifFormat);if(typeof p.inputField.onchange=="function")p.inputField.onchange();if(typeof fireEvent == 'function')fireEvent(p.inputField, "change");}if(update&&p.displayArea)p.displayArea.innerHTML=cal.date.print(p.daFormat);if(update&&typeof p.onUpdate=="function")p.onUpdate(cal);if(update&&p.flat){if(typeof p.flatCallback=="function")p.flatCallback(cal);}if(update&&p.singleClick&&cal.dateClicked)cal.callCloseHandler();};if(params.flat!=null){if(typeof params.flat=="string")params.flat=document.getElementById(params.flat);if(!params.flat){alert("Calendar.setup:\n  Flat specified but can't find parent.");return false;}var cal=new Calendar(params.firstDay,params.date,params.onSelect||onSelect);cal.showsOtherMonths=params.showOthers;cal.showsTime=params.showsTime;cal.time24=(params.timeFormat=="24");cal.params=params;cal.weekNumbers=params.weekNumbers;cal.setRange(params.range[0],params.range[1]);cal.setDateStatusHandler(params.dateStatusFunc);cal.getDateText=params.dateText;if(params.ifFormat){cal.setDateFormat(params.ifFormat);}if(params.inputField&&typeof params.inputField.value=="string"){cal.parseDate(params.inputField.value);}cal.create(params.flat);cal.show();return false;}var triggerEl=params.button||params.displayArea||params.inputField;triggerEl["on"+params.eventName]=function(){var dateEl=params.inputField||params.displayArea;var dateFmt=params.inputField?params.ifFormat:params.daFormat;var mustCreate=false;var cal=window.calendar;if(dateEl)params.date=Date.parseDate(dateEl.value||dateEl.innerHTML,dateFmt);if(!(cal&&params.cache)){window.calendar=cal=new Calendar(params.firstDay,params.date,params.onSelect||onSelect,params.onClose||function(cal){cal.hide();});cal.showsTime=params.showsTime;cal.time24=(params.timeFormat=="24");cal.weekNumbers=params.weekNumbers;mustCreate=true;}else{if(params.date)cal.setDate(params.date);cal.hide();}if(params.multiple){cal.multiple={};for(var i=params.multiple.length;--i>=0;){var d=params.multiple[i];var ds=d.print("%Y%m%d");cal.multiple[ds]=d;}}cal.showsOtherMonths=params.showOthers;cal.yearStep=params.step;cal.setRange(params.range[0],params.range[1]);cal.params=params;cal.setDateStatusHandler(params.dateStatusFunc);cal.getDateText=params.dateText;cal.setDateFormat(dateFmt);if(mustCreate)cal.create();cal.refresh();if(!params.position)cal.showAtElement(params.button||params.displayArea||params.inputField,params.align);else cal.showAt(params.position[0],params.position[1]);return false;};return cal;};
var Vaimo_SearchSuggestionsViewModel = Class.create(Vaimo_SearchSuggestionsViewModel, {
    groupTemplate: undefined,
    itemTemplate: undefined,
    listContainer: undefined,
    clear: function() {
        this.listContainer.html('');
    },
    createTemplate: function(id) {
        var container = jQuery('#' + id);
        if (container.length) {
            var fragmentContainer = document.createElement('div');
            fragmentContainer.innerHTML = container.html();
            var fragment = document.createDocumentFragment();
            fragment.appendChild(fragmentContainer.firstElementChild);
            return fragment;
        }
    },
    update: function(newList, spellings) {
        this.clear();
        if (spellings) {
            this.renderSpelling(spellings);
        }
        if (newList) {
            $(newList).each(function(item) {
                this.renderItem(item);
            }.bind(this));
        }
        if (newList.length) {
            this.listContainer.show();
        } else {
            this.listContainer.hide();
        }
    },
    load: function() {
        this.listContainer = jQuery('#searchsuggestion_list');
        this.groupTemplate = this.createTemplate('suggestionGroupTemplate');
        this.itemTemplate = this.createTemplate('suggestionListItemTemplate');
    },
    renderItem: function(item) {
        var groupInstance = jQuery(this.groupTemplate).clone(true)[0];
        var node = groupInstance.querySelector('.searchsuggestion_group_title');
        jQuery(node).html(item.name);
        jQuery(this.listContainer).append(groupInstance);
    },
    renderSpelling: function(item) {
        if (0 == item.length) {
            return this;
        }

        var groupInstance = jQuery(this.groupTemplate).clone(true)[0];
        var groupItems = jQuery(groupInstance.querySelector('.searchsuggestion_group_items'));
        var node = groupInstance.querySelector('.searchsuggestion_group_title');
        var maxSuggestCount = 5;
        var suggestCount = 0;
        jQuery(item).each(function(index, itemData) {
            if (undefined == suggestionCategoryIds[itemData.id] || suggestCount >= maxSuggestCount) {
                return this;
            }
            var itemInstance = jQuery(this.itemTemplate).clone(true)[0];
            var keys = Object.keys(itemData);
            jQuery(keys).each(function(keyIndex, key) {
                var node = itemInstance.querySelector('.searchsuggestion_' + key);
                var target = jQuery(node).data('target');
                var value = itemData[key];
                // To replace cat in url querystring to category_id
                if(key == 'url_key') {
                    value = value.replace('&cat=' , '&category_id=');
                    value = value.replace('?cat=' , '?category_id=');
                }
                if (target) {
                    if (target == 'href') {
                        value = this.baseUrl + value;
                    }
                    jQuery(node).attr(target, value);
                } else {
                    jQuery(node).text(value);
                }
                if(key == 'name') {
                    value = value.replace(itemData.query , '$&');
                    jQuery(node).text(value);
                    jQuery(node).append(' in <span style="color:#e47911">' + suggestionCategoryIds[itemData.id] + '</span><span> (' + itemData.match_count + ')</span>');
                }
            }.bind(this));
            groupItems.append(itemInstance);
            suggestCount++;
        }.bind(this));
        jQuery(this.listContainer).append(groupInstance);
    }
});

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition End User License Agreement
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magento.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magento.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magento.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright Copyright (c) 2006-2015 X.commerce, Inc. (http://www.magento.com)
 * @license http://www.magento.com/license/enterprise-edition
 */

/**************************** WEEE STUFF ********************************/
function taxToggle(details, switcher, expandedClassName)
{
    if ($(details).style.display == 'none') {
        $(details).show();
        $(switcher).addClassName(expandedClassName);
    } else {
        $(details).hide();
        $(switcher).removeClassName(expandedClassName);
    }
}

/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-carousel.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery)
document.observe("dom:loaded", function() {
    loader = new Loader();
});

Loader = Class.create();
Loader.prototype = {
    initialize: function() {
        var _loaderOverly = new Element('div', {
                id: 'vaimo-loader-overlay',
                style: 'display:none;'
            }),
            _loader  = new Element('div', {
                id: 'vaimo-loader',
                style: 'display:none;'
            });

        if (!$('vaimo-loader')) {
            document.body.insert({bottom: _loaderOverly});
            document.body.insert({bottom: _loader});
            this.loader = $('vaimo-loader');
            this.loaderOverlay = $('vaimo-loader-overlay');
        }
    },

    show: function() {
        // center loader
        var loaderDimensions = this.loader.getDimensions(),
            windowDimensions = document.viewport.getDimensions(),
            _top = (windowDimensions.height - loaderDimensions.height) / 2,
            _left = (windowDimensions.width - loaderDimensions.width) / 2;

        this.loader.setStyle({
            left:_left + 'px',
            top:_top + 'px'
        });

        this.loaderOverlay.show();
        this.loader.show();
    },

    hide: function() {
        this.loaderOverlay.hide();
        this.loader.hide();
    }
};
/**
 * menu-aim is a jQuery plugin for dropdown menus that can differentiate
 * between a user trying hover over a dropdown item vs trying to navigate into
 * a submenu's contents.
 *
 * menu-aim assumes that you have are using a menu with submenus that expand
 * to the menu's right. It will fire events when the user's mouse enters a new
 * dropdown item *and* when that item is being intentionally hovered over.
 *
 * __________________________
 * | Monkeys  >|   Gorilla  |
 * | Gorillas >|   Content  |
 * | Chimps   >|   Here     |
 * |___________|____________|
 *
 * In the above example, "Gorillas" is selected and its submenu content is
 * being shown on the right. Imagine that the user's cursor is hovering over
 * "Gorillas." When they move their mouse into the "Gorilla Content" area, they
 * may briefly hover over "Chimps." This shouldn't close the "Gorilla Content"
 * area.
 *
 * This problem is normally solved using timeouts and delays. menu-aim tries to
 * solve this by detecting the direction of the user's mouse movement. This can
 * make for quicker transitions when navigating up and down the menu. The
 * experience is hopefully similar to amazon.com/'s "Shop by Department"
 * dropdown.
 *
 * Use like so:
 *
 *      $("#menu").menuAim({
 *          activate: $.noop,  // fired on row activation
 *          deactivate: $.noop  // fired on row deactivation
 *      });
 *
 *  ...to receive events when a menu's row has been purposefully (de)activated.
 *
 * The following options can be passed to menuAim. All functions execute with
 * the relevant row's HTML element as the execution context ('this'):
 *
 *      .menuAim({
 *          // Function to call when a row is purposefully activated. Use this
 *          // to show a submenu's content for the activated row.
 *          activate: function() {},
 *
 *          // Function to call when a row is deactivated.
 *          deactivate: function() {},
 *
 *          // Function to call when mouse enters a menu row. Entering a row
 *          // does not mean the row has been activated, as the user may be
 *          // mousing over to a submenu.
 *          enter: function() {},
 *
 *          // Function to call when mouse exits a menu row.
 *          exit: function() {},
 *
 *          // Selector for identifying which elements in the menu are rows
 *          // that can trigger the above events. Defaults to "> li".
 *          rowSelector: "> li",
 *
 *          // You may have some menu rows that aren't submenus and therefore
 *          // shouldn't ever need to "activate." If so, filter submenu rows w/
 *          // this selector. Defaults to "*" (all elements).
 *          submenuSelector: "*",
 *
 *          // Direction the submenu opens relative to the main menu. Can be
 *          // left, right, above, or below. Defaults to "right".
 *          submenuDirection: "right"
 *      });
 *
 * https://github.com/kamens/jQuery-menu-aim
*/
(function($) {

    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop,
                destroy: false
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});

                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        options.deactivate(activeRow);
                    }

                    activeRow = null;
                }
            };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                if (row == activeRow) {
                    return;
                }

                if (activeRow) {
                    options.deactivate(activeRow);
                }

                options.activate(row);
                activeRow = row;
            };

        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function(row) {
                var delay = activationDelay();

                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                    // If there is no other submenu row already active, then
                    // go ahead and activate immediately.
                    return 0;
                }

                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];

                if (!loc) {
                    return 0;
                }

                if (!prevLoc) {
                    prevLoc = loc;
                }

                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }

                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }

                // Detect if the user is moving towards the currently activated
                // submenu.
                //
                // If the mouse is heading relatively clearly towards
                // the submenu's content, we should wait and give the user more
                // time before activating a new row. If the mouse is heading
                // elsewhere, we can immediately activate a new row.
                //
                // We detect this by calculating the slope formed between the
                // current mouse location and the upper/lower right points of
                // the menu. We do the same for the previous mouse location.
                // If the current mouse location's slopes are
                // increasing/decreasing appropriately compared to the
                // previous's, we know the user is moving toward the submenu.
                //
                // Note that since the y-axis increases as the cursor moves
                // down the screen, we are looking for the slope between the
                // cursor and the upper right corner to decrease over time, not
                // increase (somewhat counterintuitively).
                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };

                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;

                // Our expectations for decreasing or increasing slope values
                // depends on which direction the submenu opens relative to the
                // main menu. By default, if the menu opens on the right, we
                // expect the slope between the cursor and the upper right
                // corner to decrease over time, as explained above. If the
                // submenu opens in a different direction, we change our slope
                // expectations.
                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }

                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);

                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {
                    // Mouse is moving from previous location towards the
                    // currently activated submenu. Delay before activating a
                    // new menu row, because user may be moving into submenu.
                    lastDelayLoc = loc;
                    return DELAY;
                }

                lastDelayLoc = null;
                return 0;
            };
        if(!options.destroy) {
            /**
             * Hook up initial menu events
             */

            $menu.on('mouseleave', mouseleaveMenu);
            $menu.find(options.rowSelector).on('mouseenter', mouseenterRow);
            $menu.find(options.rowSelector).on('mouseleave', mouseleaveRow);
            $menu.find(options.rowSelector).on('click', clickRow);

            $(document).on('mousemove', mousemoveDocument);

        } else {
            /**
             * Destroy is active, cleaning objects from events
             */
            $menu.off('mouseleave');
            $menu.find(options.rowSelector).off('mouseenter mouseleave click');
            $(document).off('mousemove');

        }


    };



})(jQuery);

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    design
 * @package     enterprise_default
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */

// Add validation hints
Validation.defaultOptions.immediate = true;
Validation.defaultOptions.addClassNameToContainer = true;

Event.observe(document, 'dom:loaded', function() {
    var inputs = $$('ul.options-list input');
    for (var i = 0, l = inputs.length; i < l; i ++) {
        inputs[i].addClassName('change-container-classname');
    }
})

if (!window.Enterprise) {
    window.Enterprise = {};
}
Enterprise.templatesPattern =  /(^|.|\r|\n)(\{\{(.*?)\}\})/;

Enterprise.TopCart = {
    initialize: function(container) {
        this.container = $(container);
        this.element = this.container.up(0);
        this.elementHeader = this.container.previous(0);
        this.intervalDuration = 4000;
        this.interval = null;
        this.onElementMouseOut = this.handleMouseOut.bindAsEventListener(this);
        this.onElementMouseOver = this.handleMouseOver.bindAsEventListener(this);
        this.onElementMouseClick = this.handleMouseClick.bindAsEventListener(this);

        this.element.observe('mouseout', this.onElementMouseOut);
        this.element.observe('mouseover', this.onElementMouseOver);
        this.elementHeader.observe('click', this.onElementMouseClick);
    },

    handleMouseOut: function (evt) {
        if ($(this.elementHeader).hasClassName('expanded')) {
            this.interval = setTimeout(this.hideCart.bind(this), this.intervalDuration);
        }
    },

    handleMouseOver: function (evt) {
        if (this.interval !== null) {
             clearTimeout(this.interval);
             this.interval = null;
        }
    },

    handleMouseClick: function (evt) {
        if (!$(this.elementHeader).hasClassName('expanded') && !$(this.container.id).hasClassName('process'))  {
            this.showCart();
        }
        else {
            this.hideCart();
        }
    },

    showCart: function (timePeriod) {
        this.container.parentNode.style.zIndex=992;
        new Effect.SlideDown(this.container.id, { duration: 0.5,
            beforeStart: function(effect) {$( effect.element.id ).addClassName('process');},
            afterFinish: function(effect) {$( effect.element.id ).removeClassName('process'); }
            });
        $(this.elementHeader).addClassName('expanded');
        if(timePeriod) {
            this.timePeriod = timePeriod*1000;
            this.interval = setTimeout(this.hideCart.bind(this), this.timePeriod);
        }
    },

    hideCart: function () {

        if (!$(this.container.id).hasClassName('process') && $(this.elementHeader).hasClassName('expanded')) {
            new Effect.SlideUp(this.container.id, { duration: 0.5,
                beforeStart: function(effect) {$( effect.element.id ).addClassName('process');},
                afterFinish: function(effect) {
                    $( effect.element.id ).removeClassName('process');
                    effect.element.parentNode.style.zIndex=1;
                    }
                });
        }
        if (this.interval !== null) {
            clearTimeout(this.interval);
            this.interval = null;
        }
        $(this.elementHeader).removeClassName('expanded');
    }
};


Enterprise.Bundle = {
     oldReloadPrice: false,
     initialize: function () {
        this.slider = $('bundleProduct');
        this.xOffset = $('bundle-product-wrapper').getDimensions().width;
     },
     swapReloadPrice: function () {
         Enterprise.Bundle.oldReloadPrice = Product.Bundle.prototype.reloadPrice;
         Product.Bundle.prototype.reloadPrice = Enterprise.Bundle.reloadPrice;
         Product.Bundle.prototype.selection = Enterprise.Bundle.selection;
     },
     reloadPrice: function () {
         var result = Enterprise.Bundle.oldReloadPrice.bind(this)();
         var priceContainer, duplicateContainer = null
         if (priceContainer = $('bundle-product-wrapper').down('.price-box .price-as-configured')) {
            if (duplicateContainer = $('bundle-product-wrapper').down('.duplicate-price-box .price-as-configured')) {
                duplicateContainer.down('.price').update(
                    priceContainer.down('.price').innerHTML
                );
            }
         }
         if (!this.summaryTemplate && $('bundle-summary-template')) {
             this.summaryTemplate = new Template($('bundle-summary-template').innerHTML, Enterprise.templatesPattern);
             this.optionTemplate = new Template($('bundle-summary-option-template').innerHTML, Enterprise.templatesPattern);
             this.optionMultiTemplate = new Template($('bundle-summary-option-multi-template').innerHTML, Enterprise.templatesPattern);
         }

         if (this.summaryTemplate && $('bundle-summary')) {
             var summaryHTMLArray = [];
             for (var option in this.config.options) {
                if (typeof (this.config.selected[option]) !== 'undefined') {
                    var optionHTML = '';
                    for (var i = 0, l = this.config.selected[option].length; i < l; i ++) {
                        var selection = this.selection(option, this.config.selected[option][i]);
                        if (selection && this.config.options[option].isMulti) {
                            optionHTML += this.optionMultiTemplate.evaluate(selection);
                        } else if (selection) {
                            optionHTML += this.optionTemplate.evaluate(selection);
                        }
                    }

                    if (optionHTML.length > 0) {
                        var position = parseInt(this.config.options[option].position);
                        summaryHTMLArray[position] = this.summaryTemplate.evaluate({label:this.config.options[option].title.escapeHTML(), options: optionHTML});
                    }
                }
             }

             var summaryHTML = summaryHTMLArray.join('');
             if (typeof($('bundle-summary').update(summaryHTML).childElements().last()) != 'undefined') {
                 $('bundle-summary').update(summaryHTML).childElements().last().addClassName('last');
             }
         }
         return result;
     },
     selection: function(optionId, selectionId) {
        if (selectionId == '' || selectionId == 'none') {
            return false;
        }
        var qty = null;
        if (this.config.options[optionId].selections[selectionId].customQty == 1 && !this.config['options'][optionId].isMulti) {
            if ($('bundle-option-' + optionId + '-qty-input')) {
                qty = $('bundle-option-' + optionId + '-qty-input').value;
            } else {
                qty = 1;
            }
        } else {
            qty = this.config.options[optionId].selections[selectionId].qty;
        }

        return {qty: qty, name: this.config.options[optionId].selections[selectionId].name.escapeHTML()};
     },
     start: function () {
        if (!$('bundle-product-wrapper').hasClassName('moving-now')) {
            new Effect.Move(this.slider, {
                x: -this.xOffset, y: 0, mode: 'relative', duration: 1.5,
                beforeStart: function (effect) {
                    $('bundle-product-wrapper').setStyle({height: $('productView').getHeight() + 'px'});
                    $('options-container').show();
                    Enterprise.BundleSummary.initialize();
                    $('bundle-product-wrapper').addClassName('moving-now');
                },
                afterFinish: function (effect) {
                    $('bundle-product-wrapper').setStyle({height: 'auto'});
                    $('productView').hide();
                    $('bundle-product-wrapper').removeClassName('moving-now');
                }
            });
         }
     },
     end: function () {
        if (!$('bundle-product-wrapper').hasClassName('moving-now')) {
            new Effect.Move(this.slider, {
                    x: this.xOffset, y: 0, mode: 'relative', duration: 1.5,
                    beforeStart: function (effect) {
                        $('bundle-product-wrapper').setStyle({height: $('options-container').getHeight() + 'px'});
                        $('productView').show();
                        $('bundle-product-wrapper').addClassName('moving-now');
                    },
                    afterFinish: function (effect) {
                        $('bundle-product-wrapper').setStyle({height: 'auto'});
                        $('options-container').hide();
                        Enterprise.BundleSummary.exitSummary();
                        $('bundle-product-wrapper').removeClassName('moving-now');
                    }
                });
        }
     }
};

Enterprise.BundleSummary = {
    initialize: function () {
        this.summary = $('bundleSummary');
        this.summaryOffsetTop = $('customizeTitle').getDimensions().height;
        this.summary.setStyle({top:this.summaryOffsetTop + "px"});
        this.summaryContainer = this.summary.up(0);
        this.doNotCheck = false;
        this.summaryStartY = this.summary.positionedOffset().top;
        this.summaryStartY = this.summaryOffsetTop;
        this.summaryStartX = this.summary.positionedOffset().left;
        this.onDocScroll = this.handleDocScroll.bindAsEventListener(this);
        this.GetScroll = setInterval(this.onDocScroll, 50);
        this.onEffectEnds = this.effectEnds.bind(this);
    },

    handleDocScroll: function () {
        if (this.currentOffsetTop == document.viewport.getScrollOffsets().top
            && (this.checkOffset(null) == null)) {
            return;
        } else {
            if (this.currentOffsetTop == document.viewport.getScrollOffsets().top) {
                this.doNotCheck = true;
            }
            this.currentOffsetTop = document.viewport.getScrollOffsets().top;
        }

        if (this.currentEffect) {
            this.currentEffect.cancel();
            var topOffset = 0;
            if (this.summaryContainer.viewportOffset().top < -60) {
               topOffset =  -(this.summaryContainer.viewportOffset().top);
            } else {
               topOffset = this.summaryStartY;
            }

            topOffset = this.checkOffset(topOffset);
            if (topOffset === null) {
                this.currentEffect = false;
                return;
            }

            this.currentEffect.start({
                x: this.summaryStartX,
                y: topOffset,
                mode: 'absolute',
                duration: 0.3,
                afterFinish: this.onEffectEnds
            });



            return;
        }


        this.currentEffect = new Effect.Move(this.summary);
    },

    effectEnds: function () {
        if (this.doNotCheck == true) {
            this.doNotCheck = false;
        }
    },

    checkOffset: function (offset) {
        if (this.doNotCheck && offset === null) {
            return null;
        }
        var dimensions = this.summary.getDimensions();
        var parentDimensions = this.summary.up().getDimensions();
        if ((offset !== null ? offset : this.summary.offsetTop) + dimensions.height >= parentDimensions.height) {
            offset = parentDimensions.height - dimensions.height;
        } else if (offset === null &&
            this.currentOffsetTop > (this.summaryContainer.viewportOffset().top) &&
            (this.currentOffsetTop - this.summaryContainer.viewportOffset().top) > this.summary.offsetTop) {
            offset = this.currentOffsetTop - this.summaryContainer.viewportOffset().top;
        }

        return offset;
    },

    exitSummary: function () {
        clearInterval(this.GetScroll);
    }
};

Enterprise.Tabs = Class.create();
Object.extend(Enterprise.Tabs.prototype, {
    initialize: function (container) {
        this.container = $(container);
        this.container.addClassName('tab-list');
        this.tabs = this.container.select('dt.tab');
        this.activeTab = this.tabs.first();
        this.tabs.first().addClassName('first');
        this.tabs.last().addClassName('last');
        this.onTabClick = this.handleTabClick.bindAsEventListener(this);
        for (var i = 0, l = this.tabs.length; i < l; i ++) {
            this.tabs[i].observe('click', this.onTabClick);
        }
        this.select();
    },
    handleTabClick: function (evt) {
        this.activeTab = Event.findElement(evt, 'dt');
        this.select();
    },
    select: function () {
        for (var i = 0, l = this.tabs.length; i < l; i ++) {
            if (this.tabs[i] == this.activeTab) {
                this.tabs[i].addClassName('active');
                this.tabs[i].style.zIndex = this.tabs.length + 2;
                /*this.tabs[i].next('dd').show();*/
                new Effect.Appear (this.tabs[i].next('dd'), { duration:0.5 });
                this.tabs[i].parentNode.style.height=this.tabs[i].next('dd').getHeight() + 15 + 'px';
            } else {
                this.tabs[i].removeClassName('active');
                this.tabs[i].style.zIndex = this.tabs.length + 1 - i;
                this.tabs[i].next('dd').hide();
            }
        }
    }
});

Enterprise.Slider = Class.create();

Object.extend(Enterprise.Slider.prototype, {
    initialize: function (container, config) {
        this.container = $(container);
        this.config = {
            panelCss: 'slider-panel',
            sliderCss: 'slider',
            itemCss: 'slider-item',
            slideButtonCss: 'slide-button',
            slideButtonInactiveCss: 'inactive',
            forwardButtonCss: 'forward',
            backwardButtonCss: 'backward',
            pageSize: 6,
            scrollSize: 2,
            slideDuration: 1.0,
            slideDirection: 'horizontal',
            fadeEffect: true
        };

        Object.extend(this.config, config || {});

        this.items = this.container.select('.' + this.config.itemCss);
        this.isPlaying = false;
        this.isAbsolutized = false;
        this.offset = 0;
        this.onClick = this.handleClick.bindAsEventListener(this);
        this.sliderPanel = this.container.down('.' + this.config.panelCss);
        this.slider =  this.sliderPanel.down('.' + this.config.sliderCss);
        this.container.select('.' + this.config.slideButtonCss).each(
            this.initializeHandlers.bind(this)
        );
        this.updateButtons();

        Event.observe(window, 'load', this.initializeDimensions.bind(this));
    },
    initializeHandlers: function (element) {
        if (element.hasClassName(this.config.forwardButtonCss) ||
            element.hasClassName(this.config.backwardButtonCss)) {
            element.observe('click', this.onClick);
        }
    },
    handleClick: function (evt) {
        var element = Event.element(evt);
        if (!element.hasClassName(this.config.slideButtonCss)) {
            element = element.up('.' + this.config.slideButtonCss);
        }

        if (!element.hasClassName(this.config.slideButtonInactiveCss)) {
           element.hasClassName(this.config.forwardButtonCss) || this.backward();
           element.hasClassName(this.config.backwardButtonCss) || this.forward();
        }
        Event.stop(evt);
    },
    updateButtons: function () {
        var buttons = this.container.select('.' + this.config.slideButtonCss);
        for (var i = 0, l = buttons.length; i < l; i++) {
            if (buttons[i].hasClassName(this.config.backwardButtonCss)) {
                if (this.offset <= 0) {
                    buttons[i].addClassName(this.config.slideButtonInactiveCss);
                }
                else {
                    buttons[i].removeClassName(this.config.slideButtonInactiveCss);
                }
            } else if (buttons[i].hasClassName(this.config.forwardButtonCss)) {
                if (this.offset >= this.items.length - this.config.pageSize) {
                    buttons[i].addClassName(this.config.slideButtonInactiveCss);
                }
                else {
                    buttons[i].removeClassName(this.config.slideButtonInactiveCss);
                }
            }
        }
    },
    initializeDimensions: function () {
        if ((this.config.slideDirection == 'horizontal' && this.sliderPanel.style.width) ||
            (this.config.slideDirection != 'horizontal' && this.sliderPanel.style.height)) {
            return this;
        }
        var firstItem = this.items.first();
        var offset = 0;
        if (this.config.slideDirection == 'horizontal') {
            offset = (parseInt(firstItem.getStyle('margin-left')) + parseInt(firstItem.getStyle('margin-right'))) * (this.config.pageSize - 1);
            this.sliderPanel.setStyle({width: (firstItem.getDimensions().width * this.config.pageSize + offset) + 'px'});
        } else {
            offset = (parseInt(firstItem.getStyle('margin-bottom')) + parseInt(firstItem.getStyle('margin-top'))) * (this.config.pageSize - 1);
            this.sliderPanel.setStyle({height: (firstItem.getDimensions().height * this.config.pageSize + offset) + 'px'});
        }

        var dimensions = this.sliderPanel.getDimensions();

        var sliderParent = this.sliderPanel.up();
        /*
        dimensions.height += parseInt(sliderParent.getStyle('padding-top'));
        dimensions.height += parseInt(sliderParent.getStyle('padding-bottom'));
        dimensions.width += parseInt(sliderParent.getStyle('padding-left'));
        dimensions.width += parseInt(sliderParent.getStyle('padding-right'));

        if (sliderParent.down('.slide-button')) {
            var buttonDimensions = sliderParent.down('.slide-button').getDimensions();
            if (this.config.slideDirection == 'horizontal') {
                dimensions.width += 2 * buttonDimensions.width;
            } else {
                dimensions.height += 2 * buttonDimensions.height;
            }
        }
        */
        sliderParent.setStyle({
            width: dimensions.width + 'px',
            height: dimensions.height + 'px'
        });
        return this;
    },
    absolutize: function () {
        if (!this.isAbsolutized) {
            this.isAbsolutized = true;
            var dimensions = this.sliderPanel.getDimensions();
            this.sliderPanel.setStyle({
                height: dimensions.height + 'px',
                width: dimensions.width + 'px'
            });

            this.slider.absolutize();
        }
    },

    forward: function () {
        if (this.offset + this.config.pageSize <= this.items.length - 1) {
            this.slide(true);
        }
    },
    backward: function () {
        if (this.offset > 0) {
            this.slide(false);
        }
    },
    slide: function (isForward) {

        if (this.isPlaying) {
            return;
        }
        this.absolutize();
        this.effectConfig = {
            duration: this.config.slideDuration
        };
        if (this.config.slideDirection == 'horizontal') {
            this.effectConfig.x = this.getSlidePosition(isForward).left;
        } else {
            this.effectConfig.y = this.getSlidePosition(isForward).top;
        }
        this.start();

    },
    start: function ()
    {
        if (this.config.fadeEffect) {
            this.fadeIn();
        } else {
            this.move();
        }
    },
    fadeIn: function ()
    {
        new Effect.Fade(this.slider.up('div.slider-panel'), {
            from: 1.0,
            to:0.5,
            afterFinish: this.move.bind(this),
            beforeStart: this.effectStarts.bind(this),
            duration: 0.3
        });
    },
    fadeOut: function ()
    {
        new Effect.Fade(this.slider.up('div.slider-panel'), {
                from: 0.5,
                to:1.0,
                afterFinish: this.effectEnds.bind(this),
                duration: 0.3
        });
    },
    move: function ()
    {
        if (this.config.fadeEffect) {
            this.effectConfig.afterFinish = this.fadeOut.bind(this);
        } else {
            this.effectConfig.afterFinish = this.effectEnds.bind(this);
            this.effectConfig.beforeStart = this.effectStarts.bind(this);
        }

        new Effect.Move(this.slider, this.effectConfig);
    },
    effectStarts: function () {
        this.isPlaying = true;
    },
    effectEnds: function () {
        this.isPlaying = false;
        this.updateButtons();
    },
    getSlidePosition: function (isForward) {
        var targetOffset;
        if (isForward) {
            targetOffset = Math.min(this.items.length - this.config.pageSize, this.offset + this.config.scrollSize)
        }
        else {
            targetOffset = Math.max(this.offset - this.config.scrollSize, 0);
        }
        this.offset = targetOffset;
        var item = this.items[targetOffset];
        var itemOffset = {left:0, top:0};

        itemOffset.left = -(item.cumulativeOffset().left
                       -  this.slider.cumulativeOffset().left + this.slider.offsetLeft);
        itemOffset.top = -(item.cumulativeOffset().top
                       -  this.slider.cumulativeOffset().top + this.slider.offsetTop);
        return itemOffset;
    }
});

Enterprise.PopUpMenu = {
    currentPopUp: null,
    documentHandlerInitialized: false,
    popUpZIndex: 994,
    hideDelay: 2000,
    hideOnClick: true,
    hideInterval: null,
    initializeDocumentHandler: function () {
        if (!this.documentHandlerInitialized) {
            this.documentHandlerInitialized = true;
            Event.observe(
                document.body,
                'click',
                this.handleDocumentClick.bindAsEventListener(this)
            );
        }
    },
    handleDocumentClick: function (evt) {
        if (this.currentPopUp !== null) {
            var element = Event.element(evt);
            if (!this.currentPopUp.onlyShowed && this.hideOnClick) {
                this.hide();
            } else {
                this.currentPopUp.onlyShowed = false;
            }
        }
    },
    handlePopUpOver: function (evt) {
        if (this.currentPopUp !== null) {
            this.currentPopUp.removeClassName('faded');
            this.resetTimeout(0);
        }
    },
    handlePopUpOut: function (evt) {
        if (this.currentPopUp !== null) {
            this.currentPopUp.addClassName('faded');
            this.resetTimeout(1);
        }
    },
    show: function (trigger) {
        this.initializeDocumentHandler();

        var container = $(trigger).up('.switch-wrapper');
        if (!$('popId-' + container.id)) {
            return;
        }

        if (this.currentPopUp !== null && $('popId-' + container.id) !== this.currentPopUp) {
            this.hide(true);
        } else if (this.currentPopUp !== null && this.currentPopUp === $('popId-' + container.id)) {
            this.hide();
            return;
        }

        this.currentPopUp = $('popId-' + container.id);
        this.currentPopUp.container = container;
        this.currentPopUp.container.oldZIndex = this.currentPopUp.container.style.zIndex;
        this.currentPopUp.container.style.zIndex = this.popUpZIndex;
        new Effect.Appear(this.currentPopUp, { duration:0.3 });


        if (!this.currentPopUp.isHandled) {
            this.currentPopUp.observe('mouseover', this.handlePopUpOver.bindAsEventListener(this));
            this.currentPopUp.observe('mouseout', this.handlePopUpOut.bindAsEventListener(this));
            this.currentPopUp.isHandled = true;
        }
        this.currentPopUp.onlyShowed = true;
        this.currentPopUp.container.down('.switcher').addClassName('list-opened');
        this.resetTimeout(2);
    },
    hide: function () {
        if (this.currentPopUp !== null) {
            if (arguments.length == 0) {
                new Effect.Fade(this.currentPopUp, {duration: 0.3});
            } else {
                this.currentPopUp.hide();
            }
            this.currentPopUp.container.style.zIndex = this.currentPopUp.container.oldZIndex;
            this.resetTimeout(0);
            this.currentPopUp.container.down('.switcher').removeClassName('list-opened');
            this.currentPopUp = null;
        }
    },
    resetTimeout: function (delay) {
        if (this.hideTimeout !== null) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        if (delay) {
            this.hideTimeout = setTimeout(
                this.hide.bind(this),
                this.hideDelay * delay
            );
        }
    }
};


function popUpMenu(element) {
   Enterprise.PopUpMenu.show(element);
}
/*
function popUpMenu(element,trigger) {
        var iDelay = 2000;
        var new_popup = 0;
        var sTempId = 'popUped';
        if (document.getElementById(sTempId)) {
            var eTemp = document.getElementById(sTempId);
            $(sTempId).previous(0).down('.switcher').removeClassName('list-opened');
            new Effect.Fade (eTemp, { duration:0.3 });
            eTemp.id = sNativeId;
            clearTimeout(tId);
            document.onclick = null;
        }

        sNativeId = 'popId-'+$(element).up(1).id;
        var el = $(sNativeId);
        el.id = sTempId;

        if (eTemp && el == eTemp) {
            hideElement();
        } else {
            $(element).addClassName('list-opened');
            $(sTempId).getOffsetParent().style.zIndex = 994;
            new Effect.Appear (el, { duration:0.3 });
            tId=setTimeout("hideElement()",2*iDelay);
        }
        new_popup = 1;
        document.onclick = function() {
            if (!new_popup) {
                hideElement();
                document.onclick = null;
            }
            new_popup = 0;
        }

        el.onmouseout = function() {
            if ($(sTempId)) {
                $(sTempId).addClassName('faded');
                tId=setTimeout("hideElement()",iDelay);
            }
        }

        el.onmouseover = function() {
            if ($(sTempId)) {
                $(sTempId).removeClassName('faded');
                clearTimeout(tId);
            }
        }

        hideElement = function() {
            //el.hide();
            new Effect.Fade (el, { duration:0.3 });
            $(element).removeClassName('list-opened');
            el.getOffsetParent().style.zIndex = 1;
            el.id = sNativeId;
            if (tId) {clearTimeout(tId);}
        }
} */

Enterprise.Widget = Class.create({
    _node: null,
    _children: [],

    initialize: function (node) {
        this._node = node;
    },

    getNode: function() {
        return this._node;
    },

    /**
     * @param {Enterprise.Widget} widget
     */
    addChild: function(widget) {
        this._children.push(widget);
        var children = $(this._node).immediateDescendants(),
            exists = false;
        $(this._node).immediateDescendants().each(function(child) {
            if (child == widget.getNode()) {
                exists = true;
            }
        });
        if (!exists) {
            widget.placeAt(this._node);
        }
    },

    placeAt: function(node) {
        $(node).insert(this._node);
    }
});

Enterprise.Widget.Dialog = Class.create(Enterprise.Widget, {

    _title: '',

    _titleNode: {},

    _contentNode: {},

    _backNode: {},

    _isPlaced: false,

    initialize: function ($super, title, content, additionalClass) {
        this._title = title;
        //this._node = new Element('div', {'class': 'popup-block block', 'style': {'display': 'none'}});
        this._node = new Element('div', {'class': 'popup-block block'});
        this._node.addClassName(additionalClass);
        //this._windowOverlay = new Element('div', {'class': 'window-overlay', 'style': {'display': 'none'}});
        this._windowOverlay = new Element('div', {'class': 'window-overlay'});
        var headerNode = new Element('div', {'class': 'block-title'});
        this._titleNode = new Element('strong').update(title);
        this._closeButton = new Element('div', {'class': 'btn-close'}).update('Close');
        $(this._closeButton).onclick = (function() {
            this.hide();
        }).bind(this);
        headerNode.insert(this._titleNode);
        headerNode.insert(this._closeButton);
        this._node.insert(headerNode);

        this._contentNode = new Element('div', {'class': 'block-content'});
        this._contentNode.insert(content);

        this._node.insert(this._contentNode);
    },

    place: function() {
        $(document.body).insert(this._windowOverlay);
        $(document.body).insert(this._node);
        this._isPlaced = true;
    },

    setTitle: function(title) {
        $(this._titleNode).update(title);
    },

    setContent: function(content) {
        $(this._contentNode).update(content);
    },

    getContent: function() {
        return this._contentNode;
    },

    show: function() {
        if (!this._isPlaced) {
            this.place();
        }
        //$(this._windowOverlay).setStyle({'display':'block'});
        $(this._windowOverlay).addClassName('active');
        this._windowOverlay.style.height=$$('body')[0].getHeight()+'px';
        //$(this._node).setStyle({'display': 'block'});
        $(this._node).addClassName('active');
    },

    hide: function() {
        //$(this._windowOverlay).setStyle({'display':'none'});
        $(this._windowOverlay).removeClassName('active');
        //$(this._node).setStyle({'display':'none'});
        $(this._node).removeClassName('active');
    },

    setBusy: function(state) {
        if (state) {
            $(this._node).addClassName('loading');
        } else {
            $(this._node).removeClassName('loading');
        }
    },

    destroy: function() {
        $(this._node).remove();
    }
});

Enterprise.Widget.SplitButton = Class.create(Enterprise.Widget, {
    _list: null,
    _templateString: '<strong><span></span></strong>' +
        '<a href="#" class="change"></a>' +
        '<div class="list-container">' +
            '<ul>' +
            '</ul>' +
        '</div>',

    initialize: function($super, title, alt, type) {
        if (typeof title != 'string') {
            $super(title);
        } else {
            $super(new Element('div', {'class': 'split-button split-button-created' + ((type)? ' ' + type: '')}));
            this._node.update(this._templateString);
            this._node.down('strong span').update(title);
            this._node.down('.change').update(alt);
        }



        this._node.down('strong').setAttribute('tabindex', 20);
        this._list = $(this._node).down('ul');
        Event.observe($(this._node).down('.change'), 'click', this.onToggle.bind(this));
        Event.observe($(this._node).down('.change'), 'blur', this.close.bind(this));
        Event.observe($(this._node).down('strong'), 'click',  this.onToggle.bind(this));
        Event.observe($(this._node).down('strong'), 'blur',  this.close.bind(this));
    },

    onClick: function(event) {
    },

    onToggle: function(event) {
        Event.stop(event);
        if (this.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    },

    isOpened: function() {
        return $(this._node).hasClassName('active');
    },

    open: function() {
        $(this._node).addClassName('active');
        this.onOpen();
    },

    onOpen: function() {
    },

    close: function() {
        $(this._node).removeClassName.bind($(this._node), 'active').delay(0.2);
        this.onClose();
    },

    onClose: function() {
    },

    /**
     * @param {Enterprise.Widget.SplitButton.Option} option
     */
    addOption: function(option) {
        option.placeAt(this._list);
        option.onClick = option.onClick.wrap((function(proceed) {
            proceed();
            this.close();
        }).bind(this));
    }
});

Enterprise.Widget.SplitButton.Option = Class.create(Enterprise.Widget, {

    initialize: function($super, title, type) {
        $super(new Element('li', {'class' : type ? type : null}));
        this._node.update('<span title="' + title + '">' + title + '</span>');
        Event.observe(this._node, 'click', (function(){this.onClick()}).bind(this));
    },

    getNode: function() {
        return this._node;
    },

    onClick: function() {

    }
})

Enterprise.loadSplitButtons = function() {
    if (typeof Enterprise.splitButtonsLoaded == 'undefined') {
        Enterprise.splitButtonsLoaded = true;
        $$('.split-button').each(function(node) {
            if (!$(node).hasClassName('split-button-created')) {
                new Enterprise.Widget.SplitButton(node);
            }
        });
    }
};

Enterprise.textOverflow = function(elem) {
    var container = $(elem);
    if (container.getStyle('overflow') == 'hidden') {
        var inner = container.down(0);
        var initialHeight = container.getHeight();
        if (inner.getHeight() > initialHeight) {
            var words = inner.innerHTML.split(' ');
            var test = new Element('span', {'style': 'visibility:hidden;'});
            test.style.width = container.getWidth();
            container.insert(test);
            var tempString = '';
            for (var i = 0; $(test).getHeight() <= initialHeight || i < words.legth; i++) {
                tempString = tempString + words[i] + ' ';
                test.update(tempString)
            };
            var finalstring = (words.slice(-words.length, i - 2)).join(' ');
            test.remove();
            inner.update(finalstring + '&hellip;');
        }
    }
};
Event.observe(document, 'dom:loaded', Enterprise.loadSplitButtons);

jQuery(document).ready(function($){

    var $search = $("#search");

    /* Product Reviews */
    $('#show_review_form').click(function(){
        $('#reviews-tab .form-add').show();
    });

    $('#hide_review_form').click(function(){
        $('#reviews-tab .form-add').hide();
    });

        /* TEMPORARY TO HIDE "TRACK MY ORDER" */

        $('.top-header .links .first').hide();

    //headerLinks();

    //todo Google Captcha (fix for iframe)
    jQuery('body.catalog-product-view > iframe').css('display', 'none');

    /* Hover Menu e */

    function initMenu() {
        if (jQuery(window).width() > 767) {
            function activateSubmenu(row) {
                var $row = $(row),
                    submenuId = $row.data("submenu-id"),
                    $submenu = $("#" + submenuId);
                //$submenu.css("display", "block");
                //$submenu.addClass('subActive');
                $row.find("a.firstlevel").addClass("activeMenu");
            }

            function deactivateSubmenu(row) {
                var $row = $(row),
                    submenuId = $row.data("submenu-id"),
                    $submenu = $("#" + submenuId);
                //$submenu.css("display", "none");
                //$submenu.removeClass('subActive');
                $row.find("a.firstlevel").removeClass("activeMenu");
            }

            function exitMenu(row){
                var $row = $(row),
                    submenuId = $row.data("submenu-id"),
                    $submenu = $("#" + submenuId);

                if($submenu.hasClass('subActive') == false){
                    $row.find("a.firstlevel").removeClass("activeMenu");
                }
            }

            if ($('.cms-index-index').length) {
                $('#header #vaimo-menu').prependTo($('.sidebar.col-left'));
            }
            var $menu = $("#menu");
            $menu.menuAim({
                activate: activateSubmenu,
                deactivate: deactivateSubmenu,
                rowSelector: "> li.vertical-nav-item",
                exitMenu: exitMenu
            });
            if($("#menu").data('menuAimInitialised') != 'true') {
                var menuItem = jQuery('#menu > li.vertical-nav-item');
                /*$(menuItem).hover(function(){
                    jQuery(this).toggleClass("activeMenu");
                });*/
                /*function overE(e){
                    $("#menu > li.vertical-nav-item").removeClass("activeMenu");
                    $(e).find(".col-wrapper").show();
                    $(e).addClass("activeMenu");
                };*/

                /*function outE(e){
                    $("#menu > li.vertical-nav-item >.col-wrapper").hide();
                };*/


                /*$("#menu").menuAim({
                    activate:overE,
                    deactivate:outE
                });*/
                $('#menu').data('menuAimInitialised', 'true');
            }


            if($(".menu-top").data('menuHoverInitialised') != 'true') {
                $('.menu-top').on('mouseenter', function(){
                    $(this).addClass('visibleMenu');
                    $('div.vertnav').addClass('active');
                    $('div.vertnav').on('mouseenter', function(){
                        $('.menu-top').addClass('visibleMenu');
                        $('div.vertnav').addClass('active');
                    });
                    $('div.vertnav').on('mouseleave', function(){
                        $('.menu-top').removeClass('visibleMenu');
                        $('div.vertnav').removeClass('active');
                    });
                });

                $('.menu-top').on('mouseleave', function(){
                    $(this).removeClass('visibleMenu');
                    $('div.vertnav').removeClass('active');
                });
                $('.menu-top').data('menuHoverInitialised', 'true');
            }

        } else if($('.cms-index-index').length && jQuery(window).width() <= 767) {
            $('#vaimo-menu').appendTo('.menu-top');
        }

    }

    function destroyHoverMenu() {
        $('.menu-top').off('mouseenter');
        $('.menu-top').off('mouseleave');
        $('.vertnav').off('mouseenter');
        $('.vertnav').off('mouseleave');
    }

    $('.carousel.selected-slide').carousel( {
        pause: true,
        interval: false
    });

    // Hide menu when moving mouse outside of menu
    $("#menu").mouseleave(function(){
        $(".col-wrapper").hide();
        $(".vertnav > li").removeClass("activeMenu");
        //initMenu();
    });

    // Category in search bar
    var catSearch = $('#category_select');
    var catSearchId = $('#selectid');
    catSearch.change(function() {
        catSearchId.html($('#category_select option:selected').html());
        $('#search_mini_form .input-wrapper').css("margin-right", $('.input-wrapper-category').width()+46);
    });

    // Add to cart change qty
    $('.change .add').click(function() {
        var currentQty = parseInt($('#qty').val());
        var newQty = currentQty + 1;
        if (newQty < 1) {
            newQty = 1;
        }
        $('#qty').val(newQty);
    });
    $('.change .subtract').click(function() {
        var currentQty = parseInt($('#qty').val());
        var newQty = currentQty - 1;
        if (newQty < 1) {
            newQty = 1;
        }
        $('#qty').val(newQty);
    });
    $('#qty').change(function() {
        var currentQty = parseInt($('#qty').val());
        if(currentQty < 1) {
            $('#qty').val(1);
        }
    });

    $(document).trigger("initMoreViewsSlider", [ 80, 6 ]);

    $('body.catalog-product-view .more-views .previous').on( "click", function() {
        $('.bx-controls-direction .bx-prev').click();
    });

    function centerVerticallyFooterIcon() {
        var footer = jQuery('#footer .row'),
            footerIcon = footer.find('i.footer_icon.logo');
        footerIcon.css('margin-top', (footer.height() - footerIcon.height()) / 2);
    }
    centerVerticallyFooterIcon();

    //Easyzoom Callout

    if ($('.media-container').length > 0) {
        var options = {
            parent: 'body',
            parent: '.col-main'
        };

        //Removing touch event which prevents from scrolling down the page
        if( isMobile() ) {
            options.touch = false;
        }

        $('#zoom-target').easyZoom(options);
    }

    var lazyCounter = 1,
        totalLazies = $("img.lazy").length;

    $("img.lazy").lazy({
        afterLoad: function(element) {
            // this will be called after the image is finally loaded
            element.removeClass("margin");
            element.removeAttr("style");
            if(totalLazies == lazyCounter && jQuery('.carousel-inner').length) {
                jQuery('.carousel-inner').sliderHeightAdjustment();
            }
            lazyCounter++;
        },
        bind: "event",
        effect: "fadeIn",
        effectTime: "slow",
        visibleOnly: false
    });

    $('.category-products .products-grid li.item .product-image, .category-products .products-grid li.item .quickview-link').mouseenter(function () {
            $(this).closest('li.item').addClass('hover');
            $(this).closest('li.item').trigger('classHoverActive');

    }).mouseleave(function () {
            $(this).closest('li.item').removeClass('hover');
            $(this).closest('li.item').trigger('classHoverNotActive');

        });




    $('.faq-list .title').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('.content').not(':animated').slideToggle();
    });

    function androidBrowserBanners (){
        if(navigator.userAgent.match(/Android/i)) {
            var sliderWidth = $('.cms-index-index .swipeslideshow .slide').width();
            $('.cms-index-index .swipeslideshow .slides img').css({'max-width': sliderWidth});
        }
    };

    androidBrowserBanners();

    /* ********* Resize stuff ********** */

    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    // Put all stuff that needs to go after resize here:
    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            quickView.centerElementVertically('quickview');
            addToCartAjax.centerElement('atca-popup-container');
            centerVerticallyFooterIcon();
            androidBrowserBanners();
        }
    }
    /* ********* End Resize ********** */

    // Account pages select menu
    $('.accountNavSelect').change(function(){
        var href = $(this).attr('value');
        window.location = href;
    });

    $("body").on({
        mouseenter: function(){
            $(".myaccount-dropdown").stop(true,true).show();
        }, mouseleave: function(){
            $(".myaccount-dropdown").stop(true,true).hide();
        }
    }, "#myaccount-dropdown");


    $('.header-puffs .span3 p a').each(function(e){
        $(this).closest('div').find('a').attr('href',this.href);
    });

    // Mobile menu expand
    $('.mobile-menu-expand').click(function(){
        $(this).toggleClass('active');
        $('#vaimo-menu, body').toggleClass('expanded');
        if(navigator.userAgent.match(/Opera Mini/i)) {
            $('#vaimo-menu, body').toggleClass('expanded-opera-mini');
        }
        $('#header').toggleClass('expanded');
        if($('body').hasClass('expanded')) {
            if(!navigator.userAgent.match(/Opera Mini/i)) {
                $('#vaimo-menu').height($(window).height()-16); // Safari fix
            }
            $(document).bind('touchmove', function(ev) {
                if (!jQuery(ev.target).parents().hasClass('menu-top')) {
                    ev.preventDefault();
                };
            });
            $('#vaimo-menu').on('touchmove', function(ev){
                ev.stopPropagation(); // non-homepage menu
            });
        } else {
            $('#vaimo-menu').height('auto');
            $(document).unbind('touchmove');
        };


    });
    //footer ads-block for Android, iPhone, iPad devices
    $(function(){
        var ua = navigator.userAgent.toLowerCase(),
            isAndroid = ua.indexOf("android") > -1,
            hadLocationWindow = sessionStorage.getItem("hadLocationWindow"),
            footerAdsBlock = $('.footer-ads-block'),
            isUiWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isSafariOrUiWebView = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

        if(isAndroid || isUiWebView || isSafariOrUiWebView){
            footerAdsBlock.addClass('iDevise-dev');
            if(isAndroid){
                $('.android-link').show();
            }else{
                $('.iDevice-link').show();
            }

            if(hadLocationWindow == null || hadLocationWindow == 'undefined' || hadLocationWindow != 'NO'){
                sessionStorage.setItem("hadLocationWindow", "YES");
                $('.footer-ads-block.iDevise-dev').show();
            }else{
                $('.footer-ads-block.iDevise-dev').hide();
            }
            $(".footer-ads-block .close-btn, .download-btn").click(function(){
                sessionStorage.setItem("hadLocationWindow", "NO");
                $('.footer-ads-block.iDevise-dev').hide();
            })
        }
    });

    // Account menu expand
    $('.myaccount').click(function(){
        var a = jQuery('#header'),
            b = a.find('.myaccount-phone-dropdown');

        jQuery(this).toggleClass('active');
        b.toggleClass('expanded');

        // workaround for: Expand Mobile Search Field
        if(b.is('.expanded')) {
            b.show()
        } else {
            b.hide()
        }

    });

    // Account Pages
    $('.toggle-container .toggle-header').click(function(){
        $('.icon-chevron-down', this).toggle();
        $('.icon-chevron-up', this).toggle();
        $(this).closest('.toggle-container').find('.toggle-content').slideToggle('fast');
    });

    // Top search mobile
    /**
     *  Expand Mobile Search Field
     */
    function searchExpand() {

            var a = jQuery('#header'),
                b = a.find('.row.tools-row'),
                c = b.find('.search-top'),
                d = c.find('.search_mini_form'),
                e = c.find('.input-text'),
                f = a.find('.mobile-menu-expand, .myaccount-phone, .headercart'), // toggle
                g = a.find('.myaccount-phone-dropdown'); // just hide

            d.on('click', function() {
                e.get(0).focus();
            });

            var h;
            var j = function(m,l) {
                return function(n) {
                    n&&n.preventDefault();
                    h&&clearTimeout(h);
                    h = setTimeout(function() {
                        if (l && jQuery(window).width() < 768) {
                            g.fadeOut(60);
                            f.fadeOut(60, function() {
                                b.addClass("expanded");
                                a.addClass("search-expand");
                            })
                        } else {
                            a.removeClass("search-expand");
                            h = setTimeout(function() {
                                b.removeClass("expanded");
                                f.fadeIn(200)
                                if(g.is('.expanded')) {
                                    g.fadeIn(200)
                                }
                            }, 100);
                        }
                    }, m);
                };
            };

            e.on('focus',j(200,true)).on('blur',j(100));
        }
    searchExpand();

    $('#top-search-mobile .input-text').change(function(){
        var searchWord = $(this).val();
        $search.val(searchWord);
    });

    $('#top-search-mobile .btn-submit, #top-search-mobile .icon').click(function(){
        $('#search_mini_form .search-submit').click();
    });

    if($('.udprod-vendor-productedit textarea').length || $('.udprod-vendor-productnew textarea').length) {
            if(typeof tinymce!='undefined'){
                tinymce.init({
                    selector: ".udprod-vendor-productedit textarea, .udprod-vendor-productnew textarea"
                });
            }
    }

    $('input:radio[name="loginOptions"]').change(function(){
        if($(this).val() == 'new-customer'){
            $('.account-login .last-button .input-box.create').show();

            $('.account-login .last-button .input-box.login').hide();
            $('.account-login .last-button .input-box.create button').focus();
            $('.account-login .last-button .input-box.create button').click();
        }
        if($(this).val() == 'login'){
            $('.account-login .last-button .input-box.login').show();
            $('.account-login input.password').focus();
            $('.account-login .last-button .input-box.create').hide();
        }
    });

    // Enabling popups
//    function headerLinks() {
//        $('.header-puffs div').click(function(e) {
//
//            //We don't want to be redirected
//            e.preventDefault();
//
//            var id = $(this).attr('id');
//
//            $.fancybox({
//                wrapCSS: 'header-links',
//                autoSize: false,
//                width: 540,
//                height: 432,
//                href: '#' + id + '-content',
//                scrolling: 'no'
//            })
//        });
//    }

    //Accordion on a faq page
    $('.accordion > div').hide();

    $('.accordion > .head > a').click(function() {
        $(this).parent().next().slideToggle();
        return false;
    });

    //Accordion on a cart page
    $('.cart .discount .main-form').hide();
    $('.cart .discount label').click(function() {
        $(this).next('.main-form').slideToggle('fast');
        $(this).find('i').toggle();
    });

//    //Cart pgae updating script on changing amount
//    $( ".cart .qty" ).change(function() {
//        alert( "Handler for .change() called." );
//    });
//    $( ".cart .qty" ).keydown(function() {
//        alert( "Handler for .keydown() called." );
//    });

    function mobileNavClick() {
        if ( jQuery(window).width() < 768 || /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            jQuery('ul.vertnav > li.vertical-nav-item > a.vertnavlink, ul.vertnav > li.vertical-nav-item > i.icon').on( "click", function(e){


                if(jQuery(this).parent('.vertical-nav-item').hasClass('has-children-item')) {

                    if(jQuery(this).hasClass('vertnavlink')) {
                        jQuery(this).siblings('.icon').toggleClass('active');
                    }
                    if(jQuery(this).hasClass('icon')) {
                        jQuery(this).toggleClass('active');
                    }
                    jQuery(this).siblings('.col-wrapper').toggleClass('expanded');
                    return false;
                } else {
                    return true;
                }


            });


        }

    }

    function cloneRightColumnBlocksAfterSlider() {
        // Only for Homepage
        if (jQuery('.cms-index-index').length > 0) {
            var colMainSlideshow = jQuery('.col-main #swipeslideshow_1'),
                rightColFeaturedDeal = jQuery('.col-right .identifier-mutliple_deal_sidebar_block'),
                rightColFeaturedSeller = jQuery('.col-right .identifier-widget-right-top-sellers');

            if (colMainSlideshow.length > 0) {
                // Clone "Featured Marketplace Seller" block from right column and place after slider
                if (rightColFeaturedSeller.length > 0) {
                    var mainColFeaturedSeller = rightColFeaturedSeller.clone(true).addClass('visible-phone');
                    mainColFeaturedSeller.find('#rr_placement_0').parent().remove();
                    mainColFeaturedSeller.insertAfter(colMainSlideshow);
                    rightColFeaturedSeller.addClass('visible-desktop');
                }

                // Clone "Featured Deal" block from right column and place after slider
                if (rightColFeaturedDeal.length > 0) {
                    var mainColFeaturedDeal = rightColFeaturedDeal.clone(true).addClass('visible-phone');
                    mainColFeaturedDeal.insertAfter(colMainSlideshow);
                    rightColFeaturedDeal.addClass('visible-desktop');
                }
            }
        }
    }
    cloneRightColumnBlocksAfterSlider();

//    function init

    jQuery(document).on("deviceSwitch", function (event) {
        mobileNavClick();
        initMenu();
        jQuery('.carousel-inner').sliderHeightAdjustment();
    });

    // Wishlist
    $('.switch-visibility .make-public, .switch-visibility .make-private').click(function() {
        $('body').append('<div id="vaimo-loader-overlay"></div><div id="vaimo-loader"></div>');
        $('.btn-edit-wishlist').click();
        $('body > .window-overlay').toggleClass('active');
        $('body > .popup-block').toggleClass('active');
        $('#wishlist-public').click();
        $('#wishlist-public').parents('form').find('.btn-save').click();
    });

    // Invitations

    $('.social-invitation .facebook textarea').change(function() {
        var facebookSummary = $(this).val();
        var facebookUrl = 'https://www.facebook.com/sharer.php?s=100&p[title]=Konga Invitation&p[summary]='+facebookSummary+'&p[url]='+invitationUrl;
        $(this).closest('li').find('a').attr('href', facebookUrl);
    });

    $('.social-invitation .twitter textarea').change(function() {
        var twitterSummary = $(this).val()+' '+invitationUrl;
        var twitterUrl = 'https://twitter.com/intent/tweet?text='+twitterSummary;
        $(this).closest('li').find('a').attr('href', twitterUrl);
    });

    $('.social-invitation .google textarea').change(function() {
        $(this).val(invitationUrl);
    });

    $('#invitationForm .button').click(function() {
        $('.social-invitation .checkbox').each(function() {
            if($(this).prop('checked')){
                $(this).closest('div').find('a')[0].click();
            }
        });
    });

    $('.multipledeals .share-btn.button').on( "click", function() {
        $(this).closest('.social_wrap').toggle();
    });

    // Cart page
    var cartQtyInputs = $('#shopping-cart-table input.qty');
    cartQtyInputs.each(function() {
        $(this).data('prev-qty', $(this).val());
    });

    cartQtyInputs.on('change keyup', function() {
        if (currentDevice !== 'phone') {
            if ($(this).data('prev-qty') == $(this).val()) {
                $(this).next().hide();
            } else {
                if (parseInt($(this).val())) {
                    $(this).next().show();
                }
            }
        }
    });

    equalHeight($('.multipledeals .product-name'));

    if($search.val() && $search.val().length === 0) {
        if (jQuery(".input-text.forgot_password").length === 0) {
            $search.attr("autofocus", "autofocus");
        }
    }
});

function decorateMyList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li')
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last', 'first']);
    }
}

function afterMofAjax() {
    jQuery("img.lazy").lazy({
        afterLoad: function(element) {
            // this will be called after the image is finally loaded
            element.removeClass("margin");
            jQuery(window).trigger('resize');
        },
        bind: "event",
        effect: "fadeIn",
        effectTime: "slow",
        visibleOnly: false
    });

}
function isMobile() {
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
    return false;
}

HorizontalTabs = Class.create();
HorizontalTabs.prototype = {
    initialize : function (container) {
        this.container  = $(container);
        this._tabs      = this.container.select('dt.tab');
        this.content    = this.container.select('dd.tab-content');
        this.tabs = '';
        this.tabHeader = '';
        this.onTabClick = this.switchTab.bindAsEventListener(this);

        this.container.addClassName('horizontal-tabs');
        this.buildTabs();
        this.switchTab();

        this.tabs.each(function (tab) {
            tab.observe('click', this.onTabClick);
        }, this);
    },

    buildTabs : function () {
        this.container.insert({top : new Element('div', {'class' : 'tab-header'})});
        this.tabHeader = this.container.down(0);

        this._tabs.each(function (tab, index) {
            this.tabHeader.insert({bottom : new Element('div', {'class' : 'tab tab-' + index}).update(tab.innerHTML)});
            tab.hide();
        }, this);

        this.tabs = this.tabHeader.select('div.tab');
    },

    switchTab : function (event) {
        var regex = /tab-(\d)/;
        var id = 0;
        var elem = this.tabs.first();
        if (event != undefined) {
            elem = Event.findElement(event, 'div');
            id = regex.exec(elem.className)[1];
        }

        this.tabs.invoke('removeClassName', 'active');
        this.content.invoke('hide');

        elem.addClassName('active');
        this.content.each(function (tab, index) {
            if (id == index) {
                tab.show();
            }
        });
    }
};


jQuery(document).on("deviceSwitch", function (event) {
    if(event.device == 'tablet' || event.device == 'desktop' || event.device == 'desktop_large') {
        jQuery('.media-container .product-name-placeholder h1').appendTo(jQuery('.product-essential .product-shop .product-name'));
    } else if (event.device == 'phone') {
        jQuery('.product-essential .product-shop .product-name h1').appendTo(jQuery('.media-container .product-name-placeholder'));
    }
});

function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = jQuery(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}


var phone_min_width = 0,
    phone_max_width = 768,
    tablet_min_width = 768,
    tablet_max_width = 979,
    desktop_min_width = 980,
    desktop_max_width = 1199,
    currentDevice;

(function($,sr){
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 1000);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

jQuery(window).smartresize(function(){
    /**
     * Responsive phone (portrait height < 460)
     */
    var mobile_landscape_min_height = 460,
        bodyMinLandscape = 'mobile-min-landscape',
        landscapeMinHeight = jQuery(window).height() < mobile_landscape_min_height;

    jQuery('body').toggleClass(bodyMinLandscape, landscapeMinHeight);

});


//magic goes here
(function($){

    $.fn.sliderHeightAdjustment = function() {

        return this.each(function (idx, el) {
            var maxHeight = 0,
                sliderContainer = $(el);

            sliderContainer.find('.item').each(function(idx, slide){
                if($(slide).height() > maxHeight) {
                    maxHeight = $(slide).height();
                }
            });

            sliderContainer.height(maxHeight);
        });
    };


    $(window).resize(function(){

        /**
         * Responsive phone
         * window.outerWidth < phone_max_width
         */
        if(window.outerWidth < tablet_min_width) {
            if(currentDevice != 'phone'){
                $.event.trigger({type: 'deviceSwitch', device: 'phone'});
            }
        }

        if(window.outerWidth >= phone_max_width && window.outerWidth < desktop_min_width) {
            if(currentDevice != 'tablet'){
                $.event.trigger({type: 'deviceSwitch', device: 'tablet'});
            }
        }

        if(window.outerWidth > tablet_max_width) {
            if(currentDevice != 'desktop'){
                $.event.trigger({type: 'deviceSwitch', device: 'desktop'});
            }
        }

        if(window.outerWidth > desktop_max_width) {
            if(currentDevice != 'desktop_large'){
                $.event.trigger({type: 'deviceSwitch', device: 'desktop_large'});
            }
        }

        /**
         * Responsive tablet
         * window.outerWidth < tablet_max_width &&  window.outerWidth > tablet_min_width
         */

        jQuery('.carousel-inner').sliderHeightAdjustment();
        //We need to adjust '.carousel-inner' height more often than triggers 'deviceSwitch'. That's why this row is here

    });

    $(document).bind('deviceSwitch', function(e) {
        currentDevice = e.device;
    });

    $(window).load(function() {
        $(window).trigger('resize');
    });
})(jQuery);
if (typeof Vaimo_SearchSuggestionsController != 'undefined') {
    var Vaimo_SearchSuggestionsController = Class.create(Vaimo_SearchSuggestionsController, {
        getFilters: function() {
            var filters = this.constructor.superclass.prototype.getFilters.apply(this,[]);
            var selector = jQuery('#category_select');
            if (selector.length) {
                var selectedCategoryId = Number(selector.val());
                if (selectedCategoryId > 0) {
                    filters['category_ids'] = selectedCategoryId;
                }
            }

            return filters;
        },

        getSuggestionEtalonEntity: function() {
            return this.getSearchFieldEntity().up(0);
        }
    });
}

if (typeof MultiOptionFilter != 'undefined') {
    var MultiOptionFilter = Class.create(MultiOptionFilter, {
        currentPage: 1,
        addEventListenersToFilterLinks: function() {
            this.constructor.superclass.prototype.addEventListenersToFilterLinks.apply(this);

            jQuery('.pages ol li .more').click(function() {
                jQuery('.pages ol li .more').addClass('more-clicked').hide();
            });

            this.setFiltersHeight();
            this.toggleFilters();

            jQuery('.category-products .products-grid li.item .product-image, .category-products .products-grid li.item .quickview-link').mouseenter(function () {
                jQuery(this).closest('li.item').addClass('hover');
                jQuery(this).closest('li.item').trigger('classHoverActive');

            }).mouseleave(function () {
                    jQuery(this).closest('li.item').removeClass('hover');
                    jQuery(this).closest('li.item').trigger('classHoverNotActive');

            });
        },

        setFiltersHeight: function(){
            var filterList = jQuery('.filter-list');
            jQuery(filterList).each(function(e, val) {
                var filterListItem = jQuery(this).find('li').size(),
                    collapseBtn = jQuery(this).closest('.filter-box').closest('.filter-block').find('.filter-title .icon');

                if( filterListItem > 4 ){
                    jQuery(collapseBtn).show();
                }
            });

            var filtersCount = jQuery('.main-filter-control .filter-block').not('.filter-block--mirakl_shop_id, .filter-block--sort_by').size(),
                filtersHider = jQuery('.main-filter-control .filter-block').not('.filter-block.filter-block--cat, .filter-block.filter-block--price, .filter-block.filter-block--brand, .filter-block--sort_by, .new-search-filter'),
                filterViewMoreBtn = jQuery('.main-filter-control #more-filters');
            if(filtersCount <= 3){
                filterViewMoreBtn.hide();
            }
            jQuery(filterViewMoreBtn).click(function(){
                jQuery(this).toggleClass('active');
                filtersHider.slideToggle("1000");
            })


        },

        toggleFilters: function() {

            jQuery('.filter-block h4').click(function (){
                var collapseMore = jQuery(this).find('.icon .more'),
                    collapseLess = jQuery(this).find('.icon .less'),
                    filterBox = jQuery(this).closest('div').find('.filter-box'),
                    filterList = jQuery(this).closest('div').find('.filter-list').height();

                jQuery(this).toggleClass(function() {
                    var filterClass = jQuery(this).parent().attr('class').substr(jQuery(this).parent().attr('class').indexOf("filter-block--"));
                        filterClass = filterClass.replace(/\s+/, "");

                    if (jQuery(this).is('.expand')) {
                        Mage.Cookies.set(filterClass, '');
                        return 'expand';
                    }
                    else {
                        Mage.Cookies.set(filterClass, 'hidden');
                        return 'expand';
                    }
                });

                if (jQuery(this).is('.expand')) {
                    collapseLess.hide();
                    collapseMore.show();
                    jQuery(filterBox).animate({height:'26'});
                }
                else {
                    collapseLess.show();
                    collapseMore.hide();
                    jQuery(filterBox).animate({height: filterList});

                }
            });

            jQuery('.filter-block h4').each(function() {
                var collapseMore = jQuery(this).find('.icon .more');
                var collapseLess = jQuery(this).find('.icon .less');
                var filterClass = jQuery(this).parent().attr('class').substr(jQuery(this).parent().attr('class').indexOf("filter-block--"));
                filterClass = filterClass.replace(/\s+/, "");
                if(Mage.Cookies.get(filterClass) == 'hidden') {
                    jQuery(this).addClass('expand');
                    collapseLess.hide();
                    collapseMore.show();
                    jQuery(this).closest('div').find('.filter-box').animate({height:'26'});
                }
            });

            // Search Filter Items

            jQuery('.filter-search-clear').click(function() {
                jQuery(this).closest('form').find('.filter-input').val('').change();
            });

            jQuery.expr[':'].Contains = function(a,i,m){
                return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
            };

            jQuery('.filter-input').change(function() {
                var filterValue = jQuery(this).val();
                var searchSessionId = 'search-'+jQuery(this).closest('.filter-block').attr('class').split(' ')[2];
                Mage.Cookies.set(searchSessionId, filterValue);
                if(filterValue) {
                    jQuery(this).closest('.filter-box').find("li a:not(:Contains(" + filterValue + "))").parent().slideUp('fast');
                    jQuery(this).closest('.filter-box').find("li a:Contains(" + filterValue + ")").parent().slideDown('fast');
                }
                else {
                    jQuery(this).closest('.filter-box').find('li').slideDown();
                }
                return false;
            }).keyup(function() {
                // fire the above change event after every letter
                jQuery(this).change();
            });

            jQuery('.filter-input').each(function() {
                var searchSessionId = 'search-'+jQuery(this).closest('.filter-block').attr('class').split(' ')[2];
                if(Mage.Cookies.get(searchSessionId)) {
                    jQuery(this).val(Mage.Cookies.get(searchSessionId)).change();
                }
            });

            jQuery('.mobile-filter-control li').click(function() {
                function hideAll() {
                    jQuery('.mobile-filter-control li').removeClass('active');
                    jQuery('.main-filter-control > div').removeClass('active');
                }


                if(!jQuery(this).hasClass('active')) {
                    hideAll();
                    var filterTitleClass = '.'+jQuery(this).prop('class');
                    jQuery(this).addClass('active');
                    jQuery(filterTitleClass).addClass('active');
                } else {
                    hideAll();
                }
            });

            jQuery('.mof-view-all, .mof-apply').click(function() {
                jQuery('.mobile-filter-control li').removeClass('active');
                jQuery('.main-filter-control > div').removeClass('active');
            });

            jQuery('.filter-block--sort_by span').click(function() {
                var sortByClass = '.sort-by-mobile .'+jQuery(this).attr('class').split(' ')[1];
                var links = jQuery(sortByClass);
                if (links.length) {
                    links[0].click();
                }
            });

        },
        unpackOptions: function(url) {

            if (url == '' || url == undefined) {
                return {};
            }

            if (url.indexOf('?') != -1) {
                url = url.split('?').pop();
            }

            var opts = url.split('&');
            var mofFilters = {};
            var isLimitSet = 0;
            opts.each(function(item) {
                var tmp = item.split('=');
                var attribute = tmp.shift();
                mofFilters[attribute] = tmp.pop().split(',');
                if(attribute == 'limit') {
                    isLimitSet = 1;
                }
            });

            if(!isLimitSet) {
                mofFilters['limit'] = 16;
            }

            if (typeof suggestion != 'undefined') {
                mofFilters['q'] = suggestion;
            } else if ((searchQuery = location.search.split('&q=')[1]) || (searchQuery = location.search.split('?q=')[1])) {
                mofFilters['q'] = searchQuery;
            };

            return mofFilters;
        },

        multiOptionFilterAction : function($super, e) {
            var href = null;
            var realHref = null;
            var params = "";
            var opt_id = null;
            this.trigger_menu = null;
            this.attrib = null;
            var trigger_node = null;

            if( this.href_extract_func ){
                href = this.href_extract_func( e );
            }

            if (e) {
                if (href == null) {
                    var link = Event.findElement(e, 'A');
                    if (link != null){
                        href = link.readAttribute('href');
                        realHref = href;
                        if( link.hasClassName("mof-view-all") ){
                            opt_id = "view-all";
                        } else {
                            // Extract the option ID
                            opt_id = this.getOptionIdFromLink(link);
                        }
                        // Extract the attribute name
                        $(link).ancestors().each( function(node){

                            if( $(node).hasClassName('filter-block') ){
                                trigger_node = node;
                                $w(node.className).each(function(cls){
                                    // If it contain -- we select it, no one else is using -- in classnames...
                                    if( cls.match(/\-\-/) ){
                                        this.trigger_menu = cls;
                                        this.attrib = this.trigger_menu.split("--")[1];
                                    }

                                }.bind(this));

                            }
                        }.bind(this));

                        // Callback to app, for process item
                        if( this.attrib && this.item_toggle_func ){
                            this.item_toggle_func( link );
                        }
                    }
                    else {
                        var price_input = Event.findElement(e, '.price_range');
                        if (price_input){
                            params = this.filterState;
                            var options = this.unpackOptions(params);
                            options['price'] = price_input.value.replace('..', '-');
                            params = this.packOptions(options);
                        } else {

                            // most likely a select
                            var select = Event.findElement(e, 'SELECT');
                            if( select ){
                                href = $F(select);
                            }
                            if( !href ){
                                // Mini search form
                                href = e.element().readAttribute('action');
                                if( href ){
                                    //var word = $('search').value;
                                    var word = encodeURIComponent( $('search').value );
                                    try {
                                        // See if we get the search instruction here
                                        if( word == mof_search_instruction ){
                                            //alert( "Empty search" );
                                            //Event.stop(e);
                                            //return;
                                            // Let it go through to clear all searching
                                            word = "";
                                        }
                                    } catch( e ){ }
                                    params = this.filterState;
                                    // Clear out old search

                                    params = params.replace(/(.*)q=[^\&]*(.*)/,"$1$2");
                                    params = params.replace(/(.*)\&\&(.*)/,"$1\&$2");
                                    if( word ){
                                        if( params ){
                                            if( params[params.length-1]!='&' ) params += "&";
                                        }
                                        params += 'q='+word;
                                    }
                                }
                            }
                        }
                    }
                }
                Event.stop(e);

                if (!params){
                    if (href.indexOf('?') >= 0) {
                        var parts = href ? href.split('?') : [];
                        if (parts.length > 1) {
                            params = parts[1];
                        }
                    } else {
                        // default to view-all
                        opt_id = 'view-all';
                        this.attrib = false;
                    }
                }
            }

            // Give application a chance if it has a pre-hook
            var processed = false;
            if( this.filter_preaction_func ){
                processed = this.filter_preaction_func( e, this.url, params );
            }

            if (!processed) {
                var moreBtn = Event.findElement(e, '.more');

                if (!this.live_req_cnt++) {
                    if (moreBtn) {
                        this.showMoreLoader(moreBtn);
                    } else {
                        this.addLoader();
                    }
                }

                var href = this.request_url;

                var leaveBlank = false;
                this.request_params = params;
                if (opt_id == 'view-all' && !this.attrib) {
                    var options = this.unpackOptions(this.resetAll(this.filterState, true));
                    // reset page
                    if (opt_id == 'view-all') {
                        options.p = 1;
                    }
                    leaveBlank = true;
                } else {
                    var options = this.unpackOptions(params);
                }

                // Merge in all missing mof options for links like page_size, etc
                if (this.attrib == undefined) {
                    var mofOptions = this.unpackOptions(this.filterState);
                    Object.keys(mofOptions).each(function(key) {
                        if (options[key] == undefined) {
                            options[key] = mofOptions[key];
                        }
                    });
                }

                options = this.prepareAnswer(options);

                // Show the clear URL as URL path in browser
                this.requestId++;
                options['rid'] = this.requestId.toString();

                // This will be used to indicate our generic observer that it's a MOF ajax call!
                options['_mof_ajax_request'] = '1';

                // Reset pagiation when changing options
                if (options['p'] == undefined) {
                    options['p'] = '1';
                }

                // Add sort order
                var orderHref = jQuery('.toolbar-top .sort-by select option:selected').val();
                if (orderHref) {
                    var orderParams = ['dir', 'order'];
                    orderChunks = orderHref.split('?').pop().split('&');
                    orderChunks.each(function (c) {
                        var param = c.split('=');
                        if (orderParams.indexOf(param[0]) != -1) {
                            options[param[0]] = param[1];
                        }
                    });
                }

                this.lastRequestOptions = options;

                href = href.split('?').shift() + '?' + this.packOptions(options, leaveBlank);

                new Ajax.Request(href, {
                    method:'get',
                    onSuccess: this.updateHtml.bind(this),
                    onFailure: this.ajaxFailure,
                    onComplete: function() {
                        if (!(--this.live_req_cnt)) {
                            var selectFilterCategory = jQuery('.selected-filter-block.filter-block--category').size();
                            if(selectFilterCategory == 1){
                                jQuery('.filter-block.filter-block--cat').hide();
                            }
                            try {
                                //ellipsis for product name on category page
                                ellipsisLabelFilter();
                            } catch (e) {}
                            if (moreBtn) {
                                this.hideMoreLoader(moreBtn);
                            } else {
                                this.removeLoader();
                            }
                        }
                    }.bind(this)
                });

                // Now modify the hrefs for this menu, once the query is in progress, we need all hrefs in this menu to include it
                if( this.attrib && opt_id && trigger_node ){
                    this.updateActiveMenuLinks( trigger_node, opt_id );
                }
            }

            if (realHref !== null && this.use_history_pushState && typeof history.pushState !== "undefined") {
                history.pushState(null, null, href);
            }
        },

        showMoreLoader : function(moreBtn) {
            $(moreBtn).next('.more-loader').show();
        },

        hideMoreLoader : function(moreBtn) {
            $(moreBtn).next('.more-loader').hide();
        }
    });

    jQuery(function() {
        var checkNext = function() {
            if (typeof mof != 'undefined') {
                if( !mof.live_req_cnt &&
                    jQuery('.no-pagination').length === 0 && // not all items shown already
                    jQuery('.pages ol li .more').hasClass('more-clicked')) // more button pressed at least once
                {
                    var viewPort = document.viewport.getDimensions();
                    var windowHeight = viewPort.height;

                    var scrollOffsets = document.viewport.getScrollOffsets();
                    var scrollTop = scrollOffsets.top;
                    var scrollHeight = $$('body')[0].getHeight();

                    var addHeightFromBottom = 850;
                    var sidebarMainDifference = jQuery('.sidebar').height() - jQuery('.col-main').height();
                    if(sidebarMainDifference > 0) {
                        addHeightFromBottom += sidebarMainDifference;
                    }

                    if( scrollTop >= (scrollHeight - (windowHeight + addHeightFromBottom)) ) {
                        //loadNextPage();
                    }
                }
            }

            setTimeout(checkNext, 300);
        };

        var loadNextPage = function() {
            var moreBtns = $$('.pages ol li .more');
            if (document.createEvent) {
                var evt = document.createEvent('HTMLEvents');
                evt.initEvent('click', true, true);
                moreBtns[moreBtns.length - 1].dispatchEvent(evt);
            } else if (this.fireEvent) {
                moreBtns[moreBtns.length - 1].fireEvent('on' + 'click');
            }
        }

        checkNext();
    });
}

function heightAdjustGrid(numItemsPerRow) {

    var maxHeight = 0, rows = Array(), i = 1, row = Array(), j = 1, numHeadings = jQuery('.products-grid li .product-name').size();

    // Put headings in row array
    jQuery('.products-grid li .product-name').each(function(){
        row.push(this);
        if(i == numItemsPerRow || j == numHeadings) {
            rows.push(row);
            row = [];
            i = 0;
        }
        i++;
        j++;
    });

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });

    row = Array(), rows = Array(), i = 1, j = 1, maxHeight = 0;

    // Put alternate price boxes in row array
    jQuery('.products-grid li .price-box-alternate').each(function(){
        row.push(this);
        if(i == numItemsPerRow || j == numHeadings) {
            rows.push(row);
            row = [];
            i = 0;
        }
        i++;
        j++;
    });

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });

    row = Array(), rows = Array(), i = 1, j = 1, maxHeight = 0;

    // Put action boxes in row array
    jQuery('.products-grid li .actions').each(function(){
        row.push(this);
        if(i == numItemsPerRow || j == numHeadings) {
            rows.push(row);
            row = [];
            i = 0;
        }
        i++;
        j++;
    });

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });

    row = Array(), rows = Array(), i = 1, j = 1, maxHeight = 0;

    // Put price boxes in row array
    jQuery('.products-grid li .price-box').each(function(){
        row.push(this);
        if(i == numItemsPerRow || j == numHeadings) {
            rows.push(row);
            row = [];
            i = 0;
        }
        i++;
        j++;
    });

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });
}

jQuery(document).ready(function ($) {

    /* Focus handler for footer newsletter subscribe
     ----------------------------------------------------------
     */
    $('#newsletter').focus(function () {
        $('#newsletter').val('');
    });

    /* Adjust height on grid rows */
    heightAdjustGrid(4);
});
/*!
 * jQuery Lazy - min - v0.1.11
 * http://jquery.eisbehr.de/lazy/
 *
 * Copyright 2013, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL v2 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * jQuery("img.lazy").lazy();
 */
(function(e,t,n,r){e.fn.lazy=function(r){function o(n){if(typeof n!="boolean")n=false;s.each(function(){var r=e(this);var s=this.tagName.toLowerCase();if(a(r)||n){if(r.attr(i.attribute)&&(s=="img"&&r.attr(i.attribute)!=r.attr("src")||s!="img"&&r.attr(i.attribute)!=r.css("background-image"))&&!r.data("loaded")&&(r.is(":visible")||!i.visibleOnly)){var o=e(new Image);e.each(this.attributes,function(e,t){if(t.name!="src"){var n=r.attr(t.name);o.attr(t.name,n)}});if(i.onError)o.error(function(){i.onError(o)});var u=true;o.one("load",function(){var e=function(){if(u){t.setTimeout(e,100);return}r.hide();if(s=="img")r.attr("src",o.attr("src"));else r.css("background-image","url("+o.attr("src")+")");r[i.effect](i.effectTime);if(i.removeAttribute)r.removeAttr(i.attribute);if(i.afterLoad)i.afterLoad(r);o.unbind("load");o.remove()};e()});if(i.beforeLoad)i.beforeLoad(r);o.attr("src",r.attr(i.attribute));if(i.onLoad)i.onLoad(o);u=false;if(o.complete)o.load();r.data("loaded",true)}}});s=e(s).filter(function(){return!e(this).data("loaded")})}function u(){if(i.delay>=0)setTimeout(function(){o(true)},i.delay);if(i.delay<0||i.combined){o(false);e(t).bind("scroll",l(i.throttle,o));e(t).bind("resize",l(i.throttle,o))}}function a(e){var t=n.documentElement.scrollTop?n.documentElement.scrollTop:n.body.scrollTop;return t+f()+i.threshold>e.offset().top+e.height()}function f(){if(t.innerHeight)return t.innerHeight;if(n.documentElement&&n.documentElement.clientHeight)return n.documentElement.clientHeight;if(n.body&&n.body.clientHeight)return n.body.clientHeight;if(n.body&&n.body.offsetHeight)return n.body.offsetHeight;return i.fallbackHeight}function l(e,t){function s(){function o(){r=+(new Date);t.apply()}var s=+(new Date)-r;n&&clearTimeout(n);if(s>e||!i.enableThrottle)o();else n=setTimeout(o,e-s)}var n;var r=0;return s}var i={bind:"load",threshold:500,fallbackHeight:2e3,visibleOnly:true,delay:-1,combined:false,attribute:"data-src",removeAttribute:true,effect:"show",effectTime:0,enableThrottle:false,throttle:250,beforeLoad:null,onLoad:null,afterLoad:null,onError:null};if(r)e.extend(i,r);var s=this;if(i.bind=="load")e(t).load(u);else if(i.bind=="event")u();if(i.onError)s.bind("error",function(){i.onError(e(this))});return this};e.fn.Lazy=e.fn.lazy})(jQuery,window,document);
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "))}catch(n){return}try{return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});
/*! TinySort 1.5.6
* Copyright (c) 2008-2013 Ron Valstar http://tinysort.sjeiti.com/
* License:
*     MIT: http://www.opensource.org/licenses/mit-license.php
*     GPL: http://www.gnu.org/licenses/gpl.html
*/
!function(a,b){"use strict";function c(a){return a&&a.toLowerCase?a.toLowerCase():a}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]==b)return!e;return e}var e=!1,f=null,g=parseFloat,h=Math.min,i=/(-?\d+\.?\d*)$/g,j=/(\d+\.?\d*)$/g,k=[],l=[],m=function(a){return"string"==typeof a},n=function(a,b){for(var c,d=a.length,e=d;e--;)c=d-e-1,b(a[c],c)},o=Array.prototype.indexOf||function(a){var b=this.length,c=Number(arguments[1])||0;for(c=0>c?Math.ceil(c):Math.floor(c),0>c&&(c+=b);b>c;c++)if(c in this&&this[c]===a)return c;return-1};a.tinysort={id:"TinySort",version:"1.5.6",copyright:"Copyright (c) 2008-2013 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licensed:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},plugin:function(){var a=function(a,b){k.push(a),l.push(b)};return a.indexOf=o,a}(),defaults:{order:"asc",attr:f,data:f,useVal:e,place:"start",returns:e,cases:e,forceStrings:e,ignoreDashes:e,sortFunction:f}},a.fn.extend({tinysort:function(){var p,q,r,s,t=this,u=[],v=[],w=[],x=[],y=0,z=[],A=[],B=function(a){n(k,function(b){b.call(b,a)})},C=function(a,b){return"string"==typeof b&&(a.cases||(b=c(b)),b=b.replace(/^\s*(.*?)\s*$/i,"$1")),b},D=function(a,b){var c=0;for(0!==y&&(y=0);0===c&&s>y;){var d=x[y],f=d.oSettings,h=f.ignoreDashes?j:i;if(B(f),f.sortFunction)c=f.sortFunction(a,b);else if("rand"==f.order)c=Math.random()<.5?1:-1;else{var k=e,o=C(f,a.s[y]),p=C(f,b.s[y]);if(!f.forceStrings){var q=m(o)?o&&o.match(h):e,r=m(p)?p&&p.match(h):e;if(q&&r){var t=o.substr(0,o.length-q[0].length),u=p.substr(0,p.length-r[0].length);t==u&&(k=!e,o=g(q[0]),p=g(r[0]))}}c=d.iAsc*(p>o?-1:o>p?1:0)}n(l,function(a){c=a.call(a,k,o,p,c)}),0===c&&y++}return c};for(p=0,r=arguments.length;r>p;p++){var E=arguments[p];m(E)?z.push(E)-1>A.length&&(A.length=z.length-1):A.push(E)>z.length&&(z.length=A.length)}for(z.length>A.length&&(A.length=z.length),s=z.length,0===s&&(s=z.length=1,A.push({})),p=0,r=s;r>p;p++){var F=z[p],G=a.extend({},a.tinysort.defaults,A[p]),H=!(!F||""===F),I=H&&":"===F[0];x.push({sFind:F,oSettings:G,bFind:H,bAttr:!(G.attr===f||""===G.attr),bData:G.data!==f,bFilter:I,$Filter:I?t.filter(F):t,fnSort:G.sortFunction,iAsc:"asc"==G.order?1:-1})}return t.each(function(c,d){var e,f=a(d),g=f.parent().get(0),h=[];for(q=0;s>q;q++){var i=x[q],j=i.bFind?i.bFilter?i.$Filter.filter(d):f.find(i.sFind):f;h.push(i.bData?j.data(i.oSettings.data):i.bAttr?j.attr(i.oSettings.attr):i.oSettings.useVal?j.val():j.text()),e===b&&(e=j)}var k=o.call(w,g);0>k&&(k=w.push(g)-1,v[k]={s:[],n:[]}),e.length>0?v[k].s.push({s:h,e:f,n:c}):v[k].n.push({e:f,n:c})}),n(v,function(a){a.s.sort(D)}),n(v,function(a){var b=a.s,c=a.n,f=b.length,g=c.length,i=f+g,j=[],k=i,l=[0,0];switch(G.place){case"first":n(b,function(a){k=h(k,a.n)});break;case"org":n(b,function(a){j.push(a.n)});break;case"end":k=g;break;default:k=0}for(p=0;i>p;p++){var m=d(j,p)?!e:p>=k&&k+f>p,o=m?0:1,q=(m?b:c)[l[o]].e;q.parent().append(q),(m||!G.returns)&&u.push(q.get(0)),l[o]++}}),t.length=0,Array.prototype.push.apply(t,u),t}}),a.fn.TinySort=a.fn.Tinysort=a.fn.tsort=a.fn.tinysort}(jQuery);
/**
 * Created by phemmy on 05/01/16.
 */

/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"3896375","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif"],"f":"//use.typekit.net/c/e6c607/1w;proxima-nova,7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191,gbm:W:i4,gbt:W:i7,gbl:W:n4,gbn:W:n5,gbq:W:n6,gbs:W:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a9afe1b5b2a62161fbabe860bcaa1511187a688fc072d61e5e3fe0f169bd480b23989f593829c68d665f835b04533a9f2dcc6813e4238cc939a9eaae8959ab1bf2d9511a0e1ae70","fi":[139,140,173,175,176,25136],"fn":["proxima-nova",["i4","i7","n4","n5","n6","n7"]],"ht":"tk","js":"1.14.5","k":"//use.typekit.net/{id}.js","kt":"bpy7rom","l":"typekit","p":"//p.typekit.net/p.gif?s=1&k=bpy7rom&ht=tk&h={host}&f=139.140.173.175.176.25136&a=3896375&_={_}","ps":1,"w":"bpy7rom"};
/*{"k":"1.14.5","last_published":"2015-09-21 12:05:01 UTC","auto_updating":true}*/
;(function(window,document,undefined){
    function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var m=Date.now||function(){return+new Date};
    function ca(a,b){this.wa=a;this.T=b||a;this.C=this.T.document}var da=!!window.FontFace;ca.prototype.createElement=function(a,b,c){a=this.C.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.C.createTextNode(c));return a};function ea(a,b,c){a=a.C.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.C.body?b():setTimeout(c,0)}c()}
    function n(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
    function ha(a){if("string"===typeof a.Ja)return a.Ja;var b=a.T.location.protocol;"about:"==b&&(b=a.wa.location.protocol);return"https:"==b?"https:":"http:"}function ia(a){return a.T.location.hostname||a.wa.location.hostname}
    function ja(a,b,c,d){function e(){K&&q&&A&&(K(B),K=null)}function f(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)){a();return}setTimeout(function(){f(a)},0)}function g(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)&&(k[c].media&&"all"===k[c].media||"all"===k[c].media.mediaText)){a();return}setTimeout(function(){g(a)},0)}var l=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),k=a.C.styleSheets,q=!1,A=!d,B=null,K=c||null;da?(l.onload=
            function(){q=!0;e()},l.onerror=function(){q=!0;B=Error("Stylesheet failed to load");e()}):setTimeout(function(){q=!0;e()},0);ea(a,"head",l);d&&f(function(){l.media="all";g(function(){A=!0;e()})})}
    function ka(a,b,c){var d=a.C.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function la(a){this.Ha=a||"-"}
    la.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ha)};function ma(a,b){this.e=a;this.v=a.T.document.documentElement;this.ea=b;this.p="wf";this.o=new la("-");this.Fa=!1!==b.events;this.J=!1!==b.classes}function na(a){if(a.J){var b=ga(a.v,a.o.h(a.p,"active")),c=[],d=[a.o.h(a.p,"loading")];b||c.push(a.o.h(a.p,"inactive"));n(a.v,c,d)}p(a,"inactive")}
    function p(a,b,c){if(a.Fa&&a.ea[b])if(c)a.ea[b](c.getName(),r(c));else a.ea[b]()}function t(a,b){this.U=a;this.da=4;this.ca="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.ca=c[1],this.da=parseInt(c[2],10))}t.prototype.getName=function(){return this.U};function oa(a){return pa(a)+" "+(a.da+"00")+" 300px "+qa(a.U)}
    function qa(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function r(a){return a.ca+a.da}function pa(a){var b="normal";"o"===a.ca?b="oblique":"i"===a.ca&&(b="italic");return b}function u(a,b){this.e=a;this.B=b;this.s=this.e.createElement("span",{"aria-hidden":"true"},this.B)}function v(a){ea(a.e,"body",a.s)}
    function x(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+qa(a.U)+";"+("font-style:"+pa(a)+";font-weight:"+(a.da+"00")+";")}u.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};
    function ra(a,b,c,d,e,f,g){this.X=a;this.aa=b;this.e=c;this.q=d;this.B=g||"BESbswy";this.I={};this.L=e||3E3;this.xa=f||null;this.S=this.R=this.Q=this.P=null;this.P=new u(this.e,this.B);this.Q=new u(this.e,this.B);this.R=new u(this.e,this.B);this.S=new u(this.e,this.B);a=new t(this.q.getName()+",serif",r(this.q));a=x(a);this.P.s.style.cssText=a;a=new t(this.q.getName()+",sans-serif",r(this.q));a=x(a);this.Q.s.style.cssText=a;a=new t("serif",r(this.q));a=x(a);this.R.s.style.cssText=a;a=new t("sans-serif",
            r(this.q));a=x(a);this.S.s.style.cssText=a;v(this.P);v(this.Q);v(this.R);v(this.S)}var y={Ua:"serif",Ta:"sans-serif"},sa=null;function ta(){if(null===sa){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);sa=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return sa}ra.prototype.start=function(){this.I.serif=this.R.s.offsetWidth;this.I["sans-serif"]=this.S.s.offsetWidth;this.Ma=m();ua(this)};
    function va(a,b,c){for(var d in y)if(y.hasOwnProperty(d)&&b===a.I[y[d]]&&c===a.I[y[d]])return!0;return!1}function ua(a){var b=a.P.s.offsetWidth,c=a.Q.s.offsetWidth,d;(d=b===a.I.serif&&c===a.I["sans-serif"])||(d=ta()&&va(a,b,c));d?m()-a.Ma>=a.L?ta()&&va(a,b,c)&&(null===a.xa||a.xa.hasOwnProperty(a.q.getName()))?wa(a,a.X):wa(a,a.aa):xa(a):wa(a,a.X)}function xa(a){setTimeout(h(function(){ua(this)},a),50)}
    function wa(a,b){setTimeout(h(function(){this.P.remove();this.Q.remove();this.R.remove();this.S.remove();b(this.q)},a),0)}function ya(a,b,c,d,e,f){this.X=a;this.aa=b;this.q=d;this.e=c;this.L=e||3E3;this.B=f||void 0}ya.prototype.start=function(){function a(){m()-d>=c.L?c.aa(c.q):b.fonts.load(oa(c.q),c.B).then(function(b){1<=b.length?c.X(c.q):setTimeout(a,25)},function(){c.aa(c.q)})}var b=this.e.T.document,c=this,d=m();a()};
    function za(a,b,c){this.e=a;this.G=b;this.ga=0;this.Aa=this.va=!1;this.L=c}var z=null;za.prototype.qa=function(a){var b=this.G;b.J&&n(b.v,[b.o.h(b.p,a.getName(),r(a).toString(),"active")],[b.o.h(b.p,a.getName(),r(a).toString(),"loading"),b.o.h(b.p,a.getName(),r(a).toString(),"inactive")]);p(b,"fontactive",a);this.Aa=!0;Aa(this)};
    za.prototype.ra=function(a){var b=this.G;if(b.J){var c=ga(b.v,b.o.h(b.p,a.getName(),r(a).toString(),"active")),d=[],e=[b.o.h(b.p,a.getName(),r(a).toString(),"loading")];c||d.push(b.o.h(b.p,a.getName(),r(a).toString(),"inactive"));n(b.v,d,e)}p(b,"fontinactive",a);Aa(this)};function Aa(a){0==--a.ga&&a.va&&(a.Aa?(a=a.G,a.J&&n(a.v,[a.o.h(a.p,"active")],[a.o.h(a.p,"loading"),a.o.h(a.p,"inactive")]),p(a,"active")):na(a.G))}function Ba(){this.ka=0;this.ba=null}
    function Ca(a){a.ka++;return function(){a.ka--;Da(a)}}function Ea(a,b){a.ba=b;Da(a)}function Da(a){0==a.ka&&a.ba&&(a.ba(),a.ba=null)}function C(){this.K=this.W=-1}C.prototype.now=function(){return(new Date).getTime()};C.prototype.start=function(){this.W=this.now();this.K=-1};C.prototype.stop=function(){this.K=this.now()};function Fa(){var a=[{name:"font-family",value:D.c[E+1]}];this.Ka=[D.c[E]];this.na=a}
    function Ga(a){for(var b=a.Ka.join(","),c=[],d=0;d<a.na.length;d++){var e=a.na[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function F(a,b,c,d){this.n=null!=a?a:null;this.A=null!=b?b:null;this.V=null!=c?c:null;this.h=null!=d?d:null}var Ha=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    F.prototype.compare=function(a){return this.n>a.n||this.n===a.n&&this.A>a.A||this.n===a.n&&this.A===a.A&&this.V>a.V?1:this.n<a.n||this.n===a.n&&this.A<a.A||this.n===a.n&&this.A===a.A&&this.V<a.V?-1:0};function G(a,b){return-1===a.compare(b)}function H(a,b){return 0===a.compare(b)||1===a.compare(b)}function Ia(a,b){return 0===a.compare(b)||-1===a.compare(b)}function I(a,b){return 0===a.compare(b)}F.prototype.toString=function(){return[this.n,this.A||"",this.V||"",this.h||""].join("")};
    function J(a){a=Ha.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new F(b,c,d,e)}function L(a,b,c,d,e,f,g){this.U=a;this.r=b;this.F=c;this.D=d;this.m=e;this.g=f;this.ha=g}L.prototype.getName=function(){return this.U};function Ja(a,b){this.b=a;this.N=b}
    var Ka=new L("Unknown",new F,"Unknown",new F,"Unknown",new F,void 0);
    Ja.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=M(this);var b=J(N(this)),c=null,d=null,e=null,e=O(this.b,/Trident\/([\d\w\.]+)/,1),f=Q(this.N),c=-1!=this.b.indexOf("MSIE")?J(O(this.b,/MSIE ([\d\w\.]+)/,1)):J(O(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=J(e)):(d="Unknown",e=new F);a=new L("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Edge/"))a=M(this),b=J(N(this)),c=J(O(this.b,/Edge\/([\d\w\.]+)/,1)),a=new L("Edge",c,"Edge",c,a,b,Q(this.N));
    else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=J(O(this.b,/Presto\/([\d\w\.]+)/,1)),c=J(N(this)),d=Q(this.N),null!==b.n?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=J(O(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=J(O(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new L("OperaMini",f,a,b,M(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=J(O(this.b,/Version\/([\d\.]+)/,1)),null!==f.n)){a=new L("Opera",f,a,b,M(this),c,d);break a}f=J(O(this.b,/Opera[\/ ]([\d\.]+)/,1));
        a=null!==f.n?new L("Opera",f,a,b,M(this),c,d):new L("Opera",new F,a,b,M(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=La(this):/AppleWeb(K|k)it/.test(this.b)?a=La(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new F,c=J(N(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=J(O(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=J(O(this.b,/rv:([^\)]+)/,1)),a=new L(a,b,"Gecko",d,M(this),c,Q(this.N))):a=Ka;return a};
    function M(a){var b=O(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=O(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
    function N(a){var b=O(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=O(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=O(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=O(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=O(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
    function La(a){var b=M(a),c=J(N(a)),d=J(O(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new F,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
    e?f="Unknown":"Silk"==e?f=O(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=O(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=O(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=O(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=O(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=O(a.b,/PhantomJS\/([\d.]+)/,1));f=J(f);return new L(e,f,"AppleWebKit",d,b,c,Q(a.N))}function O(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function Q(a){if(a.documentMode)return a.documentMode}function Ma(a){this.e=a}
    Ma.prototype.toString=function(){return encodeURIComponent(ia(this.e))};function Na(a,b){this.t=a;this.u=b}Na.prototype.toString=function(){for(var a=[],b=0;b<this.u.length;b++)for(var c=this.u[b],d=c.H(),c=c.H(this.t),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function Oa(a){this.Oa=a}
    Oa.prototype.h=function(a,b){var c=a||{},d=this.Oa.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(b?"http:":"https:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Pa(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Qa(a,b){this.O=a;this.$=b;this.ta={};this.pa={}}Qa.prototype.H=function(a){return a?(this.ta[a]||this.$).slice(0):this.$.slice(0)};
    function Ra(a,b,c){for(var d=[],e=a.O.split(",")[0].replace(/"|'/g,""),f=a.H(),g,l=[],k={},q=0;q<f.length;q++)g=f[q],0<g.length&&!k[g]&&(k[g]=!0,l.push(g));c=c.za?c.za(e,l,d):l;a.ta[b]=c;a.pa[b]=d}function Sa(a,b){for(var c=a.H(b),d=a.pa[b]||[],e=[],f=0;f<c.length;f++)e.push(new t(a.O,c[f]));for(f=0;f<d.length;f++)if(c=d[f].O,c!==a.O)for(var g=d[f].H(),l=0;l<g.length;l++)e.push(new t(c,g[l]));return e}function Ta(a,b){this.O=a;this.$=b}Ta.prototype.H=function(){return this.$};
    function Ua(a,b,c,d,e,f,g){this.La=a;this.Ga=b;this.Z=c||[];this.Ca=d||null;this.Na=e||null;this.version=f||null;this.Ea=g||null}
    Ua.prototype.send=function(a,b,c){var d=new Oa("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.Ea||"").toString().substr(0,20));a=encodeURIComponent(ia(a));var f=[],g=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var g=window.Typekit.fonts,l=0;l<this.Z.length;l++){for(var k=!1,q=0;q<g.length;q++)if(this.Z[l]===g[q]){k=
            !0;break}k||(f.push(this.Z[l]),g.push(this.Z[l]))}f.length&&Va(d.h({service:this.La,token:this.Na,app:e,hosting:this.Ga,host:a,variations:f.join("."),account:this.Ca,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Va(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function Xa(){this.la=this.Ba=this.M=this.ia=this.ja=!0}function R(a){return"Windows"===a.m}
    function Ya(a){return R(a)&&H(a.g,new F(6,1))}function S(a){return R(a)&&I(a.g,new F(5,1))||R(a)&&I(a.g,new F(5,2))||R(a)&&I(a.g,new F(6,0))||Ya(a)}function T(a){return"Macintosh"===a.m&&(H(a.g,new F(10,4))||null===a.g.n)}function Za(a,b){return b.ja&&("iPhone"===a.m||"iPod"===a.m)&&H(a.g,new F(4,2))&&G(a.g,new F(5))}function $a(a,b){return b.ja&&("iPhone"===a.m||"iPod"===a.m)&&H(a.g,new F(5))}function ab(a,b){return b.ia&&"iPad"===a.m&&H(a.g,new F(4,2))&&G(a.g,new F(5))}
    function bb(a,b){return b.ia&&"iPad"===a.m&&H(a.g,new F(5))}function U(a,b){return b.M&&"Android"===a.m}function cb(a,b){return U(a,b)&&H(a.g,new F(2,2))&&G(a.g,new F(3,1))}function db(a,b){return U(a,b)&&H(a.g,new F(3,1))&&G(a.g,new F(4,1))}function V(a){return"Linux"===a.m||"Ubuntu"===a.m}function eb(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F||"Unknown"===a.getName()&&"AppleWebKit"===a.F&&("iPhone"===a.m||"iPad"===a.m||"iPod"===a.m)}
    function fb(a){return"Chrome"===a.getName()&&H(a.r,new F(6))&&Ia(a.r,new F(35))}function gb(a){return"Chrome"===a.getName()&&H(a.r,new F(36))}function hb(a){return"BuiltinBrowser"===a.getName()}function ib(a){this.za=a}function jb(a,b){return b}
    var kb={Ra:"a",Wa:"d",Qa:"i",Sa:"j",Pa:"k",Va:"l",NONE:"x"},lb={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.F&&H(a.D,new F(525,13))&&G(a.D,new F(534,50))&&(S(a)||T(a))||hb(a)&&(cb(a,b)||U(a,b)&&H(a.g,new F(4,1)))||b.M&&"Silk"===a.getName()&&G(a.r,new F(2))&&(cb(a,b)||T)||b.M&&"Silk"===a.getName()&&H(a.r,new F(2))&&U(a,b)&&H(a.g,new F(4,1))||eb(a)&&(ab(a,b)||Za(a,b))||fb(a)&&(ab(a,b)||Za(a,b))||gb(a)&&(ab(a,b)||Za(a,b))||"AdobeAIR"===a.getName()&&H(a.r,new F(2,5))&&(R(a)&&null===
            a.g.n||V(a)||T(a))},d:function(a,b){var c;(c=fb(a)&&(S(a)||V(a)||T(a)||U(a,b)||"CrOS"===a.m||"CrKey"===a.m||bb(a,b)||$a(a,b))||gb(a)&&(bb(a,b)||$a(a,b)))||(c="Gecko"===a.F&&1===a.D.compare(new F(1,9,1))&&Ia(a.D,new F(38))&&(S(a)||V(a)||T(a)||U(a,b)));(c=c||"Safari"===a.getName()&&"AppleWebKit"===a.F&&H(a.D,new F(534,50))&&(S(a)||T(a))||eb(a)&&(bb(a,b)||$a(a,b)))||(c="Opera"===a.getName()&&H(a.r,new F(11,10))&&Ia(a.r,new F(22))&&(S(a)||V(a)||T(a)||U(a,b)));return c||"MSIE"===a.getName()&&9<=a.ha&&
            (Ya(a)||R(a)&&I(a.g,new F(6,0)))||"Edge"===a.getName()&&Ya(a)||"MSIE"===a.getName()&&b.Ba&&"Windows Phone"===a.m&&H(a.g,new F(8))||hb(a)&&(b.la&&"BlackBerry"===a.m&&H(a.g,new F(10))||V(a))},j:function(a,b){return hb(a)&&db(a,b)||b.M&&"Silk"===a.getName()&&H(a.r,new F(2))&&(db(a,b)||V(a))},i:function(a){return"MSIE"===a.getName()&&H(a.r,new F(6,0))&&(void 0===a.ha||9>a.ha)&&S(a)},l:function(a,b){return gb(a)&&(S(a)||V(a)||T(a)||U(a,b)||"CrOS"===a.m||"CrKey"===a.m)||"Gecko"===a.F&&H(a.D,new F(39))&&
            (S(a)||V(a)||T(a)||U(a,b))||"Opera"===a.getName()&&H(a.r,new F(23))&&(S(a)||V(a)||T(a)||U(a,b))},x:function(){return!1}},mb={};
    mb.i=new ib(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ta(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var l=f[g];if(a[l]){d=d.concat(a[l]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
    g==e&&c.push(g);return c});var W={};W.a=W.d=W.l=W.j=function(){return[]};W.i=function(a,b,c){return[new Ma(a),new Na(b,c)]};W.k=function(a){return[new Ma(a)]};function nb(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.t="x";this.ma=this.b=null;this.u=[];this.Y=[];this.ua=this.fa=null;this.oa=!1}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.t};
    X.prototype.init=function(){if(0<this.Y.length){for(var a=[],b=0;b<this.Y.length;b++)a.push(Ga(this.Y[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
    X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",l=f.hostname||this.ua;a=f.timeout;c=!!f.async;var k=!1!==f.events,q=null,A=new C,B=new C,K=new Ba;f.active&&(d=f.active);f.active=function(){B.stop();e.ya&&e.ya.send(e.e,-1!==A.W&&-1!==A.K?A.K-A.W:-1,-1!==B.W&&-1!==B.K?B.K-B.W:-1);d()};q=new ma(this.e,f);if(this.t){for(var f=mb[this.t]||new ib(jb),w=0;w<this.u.length;w++)Ra(this.u[w],this.t,f);this.fa&&(f=nb(this.e,this.t,this.u),f=Pa(this.t,f),f.contextPath=g,
    l&&(f.hostname=l),g=this.fa.h(f,this.oa?"https:"!==ha(this.e):!1),A.start(),ja(this.e,g,Ca(K),c));if(k){for(var P=[],Wa={},s=new za(this.e,q,a),w=0;w<this.u.length;w++)P=P.concat(Sa(this.u[w],this.t));for(w=0;w<P.length;w++)Wa[P[w].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";Ea(K,function(){A.stop();B.start();fa(e.e,function(){var a=P,c={},d=Wa||{};if(0===a.length&&b)na(s.G);else{s.ga+=a.length;b&&(s.va=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],l=d[g.getName()],k=s.G,q=g;
        k.J&&n(k.v,[k.o.h(k.p,q.getName(),r(q).toString(),"loading")]);p(k,"fontloading",q);k=null;null===z&&(z=window.FontFace?(k=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(k[1],10):!0:!1);k=z?new ya(h(s.qa,s),h(s.ra,s),s.e,g,s.L,l):new ra(h(s.qa,s),h(s.ra,s),s.e,g,s.L,c,l);f.push(k)}for(e=0;e<f.length;e++)f[e].start()}})})}}};X.prototype.performOptionalActions=function(){};function ob(a,b,c,d){this.Ia=a;this.e=b;this.b=c;this.v=d;this.w=[]}ob.prototype.Da=function(a){this.w.push(a)};
    ob.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)pb(this,c[g],function(){0==--f&&qb(e,d)});else qb(this,d)};function pb(a,b,c){b=a.Ia.h({id:encodeURIComponent(b)});ka(a.e,b,c)}
    function qb(a,b){if(0!=a.w.length){for(var c=new ma(a.e,b),d=!1,e=0;e<a.w.length;e++)a.w[e].init(),d=d||a.w[e].supportsConfiguredBrowser();if(d)for(c.J&&n(c.v,[c.o.h(c.p,"loading")]),p(c,"loading"),c=0;c<a.w.length;c++)d=a.w[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.w.length-1,b);else na(c);a.w=[]}}var rb=(new Ja(navigator.userAgent,document)).parse(),sb=new ca(window);window.Typekit||(window.Typekit={});
    if(!window.Typekit.load){var tb=window.Typekit.config||{},ub=null;tb.k&&(ub=new Oa(tb.k));var vb=new ob(ub,sb,rb,document.documentElement);window.Typekit.load=function(){vb.load.apply(vb,arguments)};window.Typekit.addKit=function(){vb.Da.apply(vb,arguments)}}var wb,Y,Z,D=window.Typekit.config||{};Z=new X(sb);Z.ya=new Ua(D.ps,D.ht,D.fi,D.a,D.kt,D.js,D.l);Y=new Xa;Y.ja=!D.si;Y.ia=!D.st;Y.M=!D.sa;Y.Ba=!D.sw;Y.la=!D.sb;Z.ma=Y;D.ds&&(Z.oa=D.ds);D.f&&(wb=new Oa(D.f),Z.fa=wb);D.hn&&(Z.ua=D.hn);var E;
    if(D.fn)for(E=0;E<D.fn.length;E+=2)Z.u.push(new Qa(D.fn[E],D.fn[E+1]));if(D.c)for(E=0;E<D.c.length;E+=2)Z.Y.push(new Fa);Z.b=rb;var xb;a:{var yb=Z.b,zb=new Xa,Ab=Z.ma||zb,Bb;for(Bb in kb){var $=kb[Bb];if(lb[$]&&lb[$](yb,Ab)){xb=$;break a}}for(Bb in kb)if($=kb[Bb],lb[$]&&lb[$](yb,zb)){xb="x";break a}xb="k"}Z.t=xb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(Cb){};
})(this,document);

function getViewMode(windowWidth) {

    var viewMode = '';

    if(windowWidth > 1199) {
        viewMode = 'large';
    } else if(windowWidth > 979) {
        viewMode = 'default';
    } else if(windowWidth > 767) {
        viewMode = 'portraitTablet';
    } else if(windowWidth < 768 && windowWidth > 480) {
        viewMode = 'phonesToTablets';
    } else {
        viewMode = 'phones';
    }

    return viewMode;
}

function copyFooterMenu (viewMode){

    // If not yet added, then add...
    if(jQuery('#sitemap-and-advanced-search-wrapper').find('.bottomlinks').size() < 1) {
        jQuery('#sitemap-and-advanced-search-wrapper').append('<div class="content">' + jQuery('#footer-bottom-menu').html() + '</div>');
    }
}

function resetInlineStyles () {
    jQuery("#footer .heading i, #footer .content, .account-login .heading i, .account-login .content").removeAttr('style');
    jQuery('#search_mini_form').show();
    jQuery('#nav').show();
}

jQuery(document).ready(function ($) {

    /* Toggle search field on phone
     ----------------------------------------------------------
     */
    $('#toggle-search').click(function (e) {
        e.preventDefault();
        $('#search_mini_form').toggle();
    });

    /* Toggle main nav on phone
     ----------------------------------------------------------
     */
    $('#toggle-nav').click(function (e) {
        e.preventDefault();
        $('#nav').toggle();
    });

    /* Toggle footer boxes on phone
     ----------------------------------------------------------
     */
    $('#footer h5.heading, .account-login h5.heading').click(function () {
        if ($(window).width() < 769) {
            $(this).closest('div').find('.content').toggle();
            $(this).find('i').toggle();
        }
    });

    /* Fix list heights on document ready
     ----------------------------------------------------------
     */
    var viewMode = getViewMode($(window).width());
    if(viewMode == 'default' || viewMode == 'large')Â {
        heightAdjustGrid(4);
    }
    else if(viewMode == 'portraitTablet') {
        heightAdjustGrid(4);
    }
    else {
        heightAdjustGrid(2);
        copyFooterMenu();
    }

    /* Custom responsive handling for footer menu and grid lists..
     --------------------------------------------------------------
     */
    $(window).resize(function() {

        if(viewMode != getViewMode($(window).width())){

            viewMode = getViewMode($(window).width());

            // Fix list heights on window resize
            if(viewMode == 'default' || viewMode == 'large')Â {
                heightAdjustGrid(4);
                resetInlineStyles();
            }
            else if(viewMode == 'portraitTablet') {
                heightAdjustGrid(4);
                resetInlineStyles();
            }
            else {
                copyFooterMenu(viewMode);
                heightAdjustGrid(2);
            }
        }
    });
});
/**
 * Created by adebola on 9/8/15.
 */
jq = jQuery.noConflict();

var phoneNumber = "";
var pin_code = "";
var sms_pinid = "";

function divNotificationClose() {
    jq('#force_account_verification').hide('slow');
    jq('#force_account_verification').css('position', 'inherit');
    jq("#header").css('top', '0');
}

var customForm = new VarienForm('_varien_validate_phone');

Validation.add('required-validate-phone', 'Invalid phone number.', function (v) {
    return Validation.get('IsEmpty').test(v) || /^0[0-9]{10}/.test(v);
});

Validation.add('required-validate-code', 'Invalid pin number.', function (v) {
    return Validation.get('IsEmpty').test(v) || /^[0-9]{4}/.test(v);
});

jq("input[name='telephone']").keyup(function () {
    phoneNumber = this.value;
});

jq(document).ready(function () {

    jq('._close_fancybox').click(function () {
        jq.fancybox.close();
    });

    jq('._back_fancybox').click(function (e) {
        jq('._close_fancybox').trigger('click');
        jq('._number').trigger('click');
        e.preventDefault();
    });

    jq('.fancybox').fancybox({
        closeBtn: false, // hide close button
        closeClick: false, // prevents closing when clicking INSIDE fancybox
        helpers: {
            // prevents closing when clicking OUTSIDE fancybox
            overlay: {closeClick: false}
        },
        keys: {
            // prevents closing when press ESC button
            close: null
        }
    });

    jq(".fancybox ._sms").click(function () {
        jq('.fancybox').trigger('click');
    });

    var phoneNumber = '';
    jq('._verify_btn').click(function () {
        jq("#_account_verification ._verify_msg").html('');
        phoneNumber = jq('#_account_verification ._telephone').val();
        var digReg = /^0[0-9]{10}/;
        if (digReg.test(phoneNumber) == true) {
            var validatePhone = jq.ajax({
                url: jq('#dataElement').data('verification-url'),
                type: 'POST',
                data: {customer_id: jq('#dataElement').data('customer-id'), phone_no: "" + phoneNumber + ""},
                beforeSend: function () {
                }
            }).done(function () {
                    window.phone_validation_response = validatePhone.responseText;
                    try {
                        var data = JSON.parse(window.phone_validation_response);
                        if (data['status'] == true) {
                            jq("#_account_verification ._verify_msg").removeClass('_force_validation_error_advice');
                            jq("#_account_verification input[name='telephone']").removeClass('_force_validation_error');
                            sendVerificationPin();
                            jq('._close_fancybox').trigger('click');
                            jq(".fancybox ._sms").trigger('click');
                            jq("#_account_verification_sms ._quoted_msg").html("Please enter the verification code sent to " + phoneNumber);
                        } else {
                            msg = data['message'];
                            jq("#_account_verification ._verify_msg").html(msg);
                            jq("#_account_verification ._verify_msg").addClass('_force_validation_error_advice');
                            jq("#_account_verification input[name='telephone']").addClass('_force_validation_error');
                        }
                    }
                    catch (e) {

                    }
                })

        } else{
            jq("#_account_verification ._verify_msg").html('Phone number is required');
            jq("#_account_verification ._verify_msg").addClass('_force_validation_error_advice');
        }

    });

    var sms_pinid = '';
    //trigger sending of verification pin
    function sendVerificationPin() {
        var formData = {telephone: phoneNumber, email : jq('#dataElement').data('email')};
        var send_pin = jq.ajax({
            url: jq('#dataElement').data('send-pin-url'),
            type: "POST",
            data: JSON.stringify(formData),
            beforeSend: function () {
            }
        }).done(function () {
                window.send_pin = send_pin.responseText;
                try {
                    var response = JSON.parse(window.send_pin);
                    if (response['success'] && response['success'] == 1) {
                        sms_pinid = response['pin_id'];
                        jq('#_account_verification_sms .code_error_msg').html('');
                    } else {
                        // Display error message// Display error
                        jq('#_account_verification .code_error_msg').html('Unable to send verification code SMS');
                        jq('#_account_verification .code_error_msg').addClass('_force_validation_error_advice');
                    }
                }
                catch (e) {

                }
            })
    }

    jq("#_account_verification_sms #resendCode").unbind('click').click(function (e) {
        //e.preventDefault();
        sendVerificationPin();
    });


    jq('._number').unbind('click').click(function (e) {
        jq('.fancybox').fancybox({
            closeBtn: false, // hide close button
            closeClick: false, // prevents closing when clicking INSIDE fancybox
            helpers: {
                // prevents closing when clicking OUTSIDE fancybox
                overlay: {closeClick: false}
            },
            keys: {
                // prevents closing when press ESC button
                close: null
            }
        });
    });

    // verify the code entered
    jq('#_account_verification_sms ._verify_btn_code').unbind('click').click(function () {
        pin_code = jq('#pinCode').val();
        var valCode = /^[0-9]{4}/;
        if (valCode.test(pin_code) == true) {
            var formData = {
                sms_pin: pin_code,
                telephone: phoneNumber,
                pin_id: sms_pinid
            };
            var validateCode = jq.ajax({
                url: jq('#dataElement').data('verify-pin-url'),
                type: 'POST',
                data: JSON.stringify(formData),
                beforeSend: function () {
                }
            }).done(function () {
                    window.validation_response = validateCode.responseText;
                    var responseData = JSON.parse(window.validation_response);
                    try {
                        if (responseData['success'] && responseData['success'] == 1) {
                            updateCustomerPhone();
                            jq('._close_fancybox').trigger('click');
                            location.reload();
                        } else {
                            // Display error
                            jq('#_account_verification_sms .code_error_msg').html(responseData['message']);
                            jq('#_account_verification_sms .code_error_msg').addClass('_force_validation_error_advice');
                        }
                    }
                    catch (e) {

                    }
                })
        } else {
            // Display error
            jq('#_account_verification_sms .code_error_msg').html('Invalid code');
            jq('#_account_verification_sms .code_error_msg').addClass('_force_validation_error_advice');
        }

    });

    //trigger updating customer phone as verified
   function updateCustomerPhone() {
        var updateData = {
            phone_no: phoneNumber,
            customer_id: jq('#dataElement').data('customer-id')
        };

        var update_phone_number = jq.ajax({
            url: jq('#dataElement').data('update-phone-url'),
            type: "GET",
            data: updateData,
            beforeSend: function () {
            }
        }).done(function () {
            window.update_response = update_phone_number.responseText;
            var responseData = JSON.parse(window.update_response);
            jq('._close_fancybox').trigger('click');
        })
    }


    /* Check for customer phone number verification status*/
    var customer_verification_status = parseInt(typeof konga_customer_info !== 'undefined' && konga_customer_info['customer_verification_status']);
    var enforce_verification = jq('#dataElement').data('enforce-verification');
    if (typeof customer_verification_status !== 'undefined') {
        if (customer_verification_status == 0 && enforce_verification == '1') {
            jq('._number').trigger('click');
        }
    }

});



/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    design
 * @package     enterprise_default
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */

if (!window.Enterprise) {
    window.Enterprise = {};
}

if (!Enterprise.Wishlist) {
    Enterprise.Wishlist = {
        Widget: {
            Form: {}
        }
    };
}

Enterprise.Wishlist.Widget.Form = Class.create(Enterprise.Widget, {
    action: null,
    isValid: false,

    initialize: function($super, action) {
        var _templateString = '<ul class="form-list">' +
                '<li><label for="wishlist-name">' + Translator.translate('Wishlist Name') + '</label><div class="input-box"><input type="text" id="wishlist-name" maxlength="255" class="input-text required-entry validate-length maximum-length-255" name="name"/></div>' +
                '<li class="control"><div class="input-box"><input type="checkbox" id="wishlist-public" name="visibility"></div><label for="wishlist-public">' + Translator.translate('Make This Wishlist Public') + '</label></li>' +
            '</ul>' +
            '<div class="buttons-set form-buttons"><button type="submit" class="button btn-save"><span><span>' + Translator.translate('Save') + '</span></span></button><button type="button" class="button btn-cancel"><span><span>' + Translator.translate('Cancel') + '</span></span></button></div>';

        this.action = action;
        $super(new Element('form', {'method': 'post', 'action': action}));
        this._node.update(_templateString);

        var that = this;
        var deferredList = {
            event: null,
            counter: 0,
            callback: function() {
                this.counter++;
                if (this.counter >= 2) {
                    this.success();
                }
            },
            success: function() {
                that.onSubmit(this.event);
            }
        };

        var validation = new Validation(this._node, {
            onFormValidate: (function(result) {
                this.isValid = result;
                deferredList.callback();
            }).bind(this)
        });
        Event.observe(this._node, 'submit',
            (function(event) {
                deferredList.event = event;
                deferredList.callback();
            }).bind(this)
        );
        Event.observe($(this._node).down('button.btn-cancel'), 'click',
            (function() {
                this.onCancel();
            }).bind(this)
        );
        this.nameNode = $(this._node).down('#wishlist-name');
        this.visibilityNode = $(this._node).down('#wishlist-public');
    },

    onSubmit: function(event) {
    },

    onCancel: function() {

    },

    setName: function(name) {
        this.nameNode.value = name;
    },

    setIsVisible: function(state) {
        this.visibilityNode.checked = !!state;
    }
});


Enterprise.Wishlist.Widget.Form.Create = Class.create(Enterprise.Wishlist.Widget.Form, {
    useAjax: true,

    initialize: function($super, action, useAjax) {
        $super(action);
        this.useAjax = useAjax;
    },

    onSubmit: function(event) {
        Event.stop(event);
        if (!this.isValid) {
            return;
        }
        if (!this.useAjax) {
            this.onWishlistCreated({serializedData: $(this._node).serialize()});
        } else {
            var callback = (function(wishlistId){this.onWishlistCreated(wishlistId)}).bind(this);
            new Ajax.Request(this.action, {
                method: 'post',
                parameters: $(this._node).serialize(),
                onSuccess: function(response) {
                    try {
                        var data = response.responseJSON;
                        if (typeof data.wishlist_id != 'undefined') {
                            callback(data.wishlist_id);
                        } else if (typeof data.redirect != 'undefined') {
                            setLocation(data.redirect);
                        } else {
                            alert(Translator.translate('Error happened while creating wishlist. Please try again later'));
                        }
                    } catch (e) {
                        setLocation(window.location.href);
                    }
                }
            });
        }
    },

    onWishlistCreated: function(wishlist) {

    }
});

Enterprise.Wishlist.createWithCallback = function(createUrl, callback, useAjax) {
    if (typeof useAjax == 'undefined') {
        useAjax = true;
    }
    if (!Enterprise.Wishlist.createWithCallbackDialog) {
        var createWithCallbackForm = new Enterprise.Wishlist.Widget.Form.Create(createUrl, useAjax);
        Enterprise.Wishlist.createWithCallbackDialog = new Enterprise.Widget.Dialog(
            Translator.translate('Create New Wishlist'),
            createWithCallbackForm.getNode()
        );
        Enterprise.Wishlist.createWithCallbackDialog.form = createWithCallbackForm;
        createWithCallbackForm.onCancel = Enterprise.Wishlist.createWithCallbackDialog.hide.bind(Enterprise.Wishlist.createWithCallbackDialog);
        Enterprise.Wishlist.createWithCallbackDialog.form.onSubmit = Enterprise.Wishlist.createWithCallbackDialog.form.onSubmit.wrap(function(proceed, event) {
            proceed(event);
            if (this.isValid) {
                Enterprise.Wishlist.createWithCallbackDialog.setBusy(true);
            }
        })
    }
    Enterprise.Wishlist.createWithCallbackDialog.form.useAjax = useAjax;
    Enterprise.Wishlist.createWithCallbackDialog.form.onWishlistCreated = callback;
    Enterprise.Wishlist.createWithCallbackDialog.show();
}

Enterprise.Wishlist.create = function(createUrl, callback) {
    if (!Enterprise.Wishlist.createDialog) {
        var createForm = new Enterprise.Wishlist.Widget.Form(createUrl);
        Enterprise.Wishlist.createDialog = new Enterprise.Widget.Dialog(
            Translator.translate('Create New Wishlist'),
            createForm.getNode()
        );
        createForm.onCancel = Enterprise.Wishlist.createDialog.hide.bind(Enterprise.Wishlist.createDialog);
    }
    Enterprise.Wishlist.createDialog.show();
}

Enterprise.Wishlist.edit = function(editUrl, wishlistName, visibility) {
    if (!Enterprise.Wishlist.editDialog) {
        var editForm = new Enterprise.Wishlist.Widget.Form(editUrl);
        Enterprise.Wishlist.editDialog = new Enterprise.Widget.Dialog(
            Translator.translate('Edit Wishlist'),
            editForm.getNode()
        );
        Enterprise.Wishlist.editDialog.form = editForm;
        editForm.onCancel = Enterprise.Wishlist.editDialog.hide.bind(Enterprise.Wishlist.editDialog);
    }
    Enterprise.Wishlist.editDialog.form.setName(wishlistName);
    Enterprise.Wishlist.editDialog.form.setIsVisible(visibility);
    Enterprise.Wishlist.editDialog.show();
}

Enterprise.Wishlist.getRowQty = function(rowNode) {
    var qtyNode = $(rowNode).down('input.qty');
    return qtyNode ? qtyNode.value : null;
}

Enterprise.Wishlist.copyItemTo = function(itemId, qty, wishlistId) {
    var form = new Element('form', {method: 'post', action: Enterprise.Wishlist.url.copyItem});
    form.insert(new Element('input', {name: 'item_id', type: 'hidden', value: itemId}));
    if (typeof wishlistId != 'undefined') {
        form.insert(new Element('input', {name: 'wishlist_id', type: 'hidden', value: wishlistId}));
    }
    form.insert(new Element('input', {name: 'qty', type: 'hidden', value: qty}));
    $(document.body).insert(form);
    form.submit();
};

Enterprise.Wishlist.moveItemTo = function(itemId, qty, wishlistId) {
    var form = new Element('form', {method: 'post', action: Enterprise.Wishlist.url.moveItem});
    form.insert(new Element('input', {name: 'item_id', type: 'hidden', value: itemId}));
    if (typeof wishlistId != 'undefined') {
        form.insert(new Element('input', {name: 'wishlist_id', type: 'hidden', value: wishlistId}));
    }
    form.insert(new Element('input', {name: 'qty', type: 'hidden', value: qty}));
    $(document.body).insert(form);
    form.submit();
    return false;
};

Enterprise.Wishlist.copySelectedTo = function(wishlistId) {
    if (!this.itemsSelected()) {
        alert(Translator.translate('You must select items to copy'));
        return;
    }
    var url = Enterprise.Wishlist.url.copySelected;
    this.form.action = url.gsub('%wishlist_id%', wishlistId);
    this.form.submit();
};

Enterprise.Wishlist.moveSelectedTo = function(wishlistId) {
    if (!this.itemsSelected()) {
        alert(Translator.translate('You must select items to move'));
        return;
    }
    var url = Enterprise.Wishlist.url.moveSelected;
    this.form.action = url.gsub('%wishlist_id%', wishlistId);
    this.form.submit();
};

Enterprise.Wishlist.itemsSelected = function() {
    var selected = false;
    $(this.form).select('input.select').each(function(item) {
        if ($(item).checked) {
            selected = true;
        }
    });
    return selected;
};

Enterprise.Wishlist.copyItemToNew = function(itemId, qty) {
    this.createWithCallback(Enterprise.Wishlist.url.create, this.copyItemTo.bind(this, itemId, qty));
};

Enterprise.Wishlist.moveItemToNew = function(itemId, qty) {
    this.createWithCallback(Enterprise.Wishlist.url.create, this.moveItemTo.bind(this, itemId, qty));
};

Enterprise.Wishlist.moveSelectedToNew = function() {
    if (!this.itemsSelected()) {
        alert(Translator.translate('You must select items to move'));
        return;
    }
    this.createWithCallback(Enterprise.Wishlist.url.create, this.moveSelectedTo.bind(this));
};

Enterprise.Wishlist.copySelectedToNew = function() {
    if (!this.itemsSelected()) {
        alert(Translator.translate('You must select items to copy'));
        return;
    }
    this.createWithCallback(Enterprise.Wishlist.url.create, this.copySelectedTo.bind(this));
};

Event.observe(document, 'dom:loaded', function() {
    if (typeof Enterprise.Wishlist.list != 'undefined'
        && (Enterprise.Wishlist.list.length || Enterprise.Wishlist.canCreate)) {

        var buildUrl = function(url, wishlist) {
            var glue = url.indexOf('?') == -1 ? '?' : '&';
            var wishlistInfo = '';
            if (typeof wishlist.serializedData != 'undefined') {
                wishlistInfo = wishlist.serializedData;
            } else {
                wishlistInfo = Hash.toQueryString({'wishlist_id': wishlist});
            }
            return url + glue + wishlistInfo;
        }

        $$('.link-wishlist').each(function(link) {
            var url = link.href;
            var onclick = link.onclick || function() {
                setLocation(this.href);
            }

            var wishlistSplitButton = new Enterprise.Widget.SplitButton(link.innerHTML, Translator.translate('Add to:'), 'light clickable');
            wishlistSplitButton.onClick = onclick.bind({href: url});

            Enterprise.Wishlist.list.each(function(wishlist) {
                var option = new Enterprise.Widget.SplitButton.Option(wishlist.name);
                option.onClick = onclick.bind({href: buildUrl(url, wishlist.id)});
                wishlistSplitButton.addOption(option);
            });

            if (Enterprise.Wishlist.canCreate) {
                var option = new Enterprise.Widget.SplitButton.Option(Translator.translate('Create New Wishlist'), 'new');
                option.onClick = Enterprise.Wishlist.createWithCallback.bind(this, Enterprise.Wishlist.url.create, function(wishlist) {
                    (onclick.bind({
                        href: buildUrl(url, wishlist)
                    }))();
                }, link.hasClassName('use-ajax'));
                wishlistSplitButton.addOption(option);
            }

            wishlistSplitButton.placeAt(link.up());
            link.remove();
        });
    }
});
document.observe("dom:loaded", function() {
  $$('#wishlist-table div.description').each(function(el) { Enterprise.textOverflow(el); });
});


var AddToCartAjax = Class.create({

    initialize: function(options){

        var defaults = {
            addUrl: '',
            addFromWishlistUrl: '',
            removeUrl: '',
            redirectUrl: '',
            updateUrl: '',
            overlayHexColorCode: '',
            overlayOpacity: '0.5',
            popupTimeout: '10',
            popupFadeoutDuration: '0.5',
            defaultQty: '1',
            confirmDeleteMessage: '',
            popupWidth: '255',
            afterCartUpdateFunc: null,
            showPopupWhenAdding: true,
            beforeAddFunc: null,
            minMargin: 15,
            displayWidthForSwitch: 767,
            redirectDelay: 2000,
            ecpAjaxifyUrl: ''
        };

        this.options = Object.extend(defaults, options);

        this.options.popupTimeout = parseInt(parseFloat(this.options.popupTimeout) * 1000);
    },

    add: function(clickedNode, productId, buyRelated, showPopupWhenAdding){

        this.options.showPopupWhenAdding = (typeof showPopupWhenAdding == 'undefined') ? this.options.showPopupWhenAdding : showPopupWhenAdding;

        /* BeforeAddFunc is where we can add our custom validation...
        ... or any other feature we like..
        */
        if( this.options.beforeAddFunc && !this.options.beforeAddFunc() ){
            return false;
        }

        // reset giftcard message text
        var giftcardPersonalise = $('gift_card_personalise'),
            giftcardMessage = $('giftcard_message');
        if ((giftcardPersonalise && giftcardMessage) &&
            (!giftcardPersonalise.checked || giftcardMessage.value == giftcardMessage.defaultValue)
        ) {
            giftcardMessage.value = "";
        }

        this.buyRelated = (typeof buyRelated == 'undefined') ? false : buyRelated;

        if(!this.isLoading){

            var qty = this.options.defaultQty;

            if ($('qty_' + productId) != null) {
                qty = $F('qty_' + productId);
            }

            var params = '';
            var formNode = $(clickedNode).up('form');

            this.parent = $(clickedNode).up('.item');

            if(typeof(formNode) == 'undefined'){
                params = 'product=' + productId + '&qty=' + qty;
            }
            else {

                var varienForm = new VarienForm($(formNode).readAttribute('id'));

                if (!varienForm.validator.validate()) {
                    return false;
                }
                params = $(formNode).serialize();
                params += '&product=' + productId;
            }
            if(this.buyRelated){
                params += '&buyRelated=' + this.buyRelated;
                this.showRelated();
                this.isLoading = true;
            }
            else{
                params += '&buyRelated=' + this.buyRelated;

                this.resetPopup();
                loader.show();

                this.isLoading = true;
            }


            var r = new Ajax.Request(this.options.addUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },
    addByString: function(params, buyRelated){

        this.buyRelated = (typeof buyRelated == 'undefined') ? false : buyRelated;

        if(!this.isLoading){
            if(this.buyRelated){
                params += '&buyRelated=' + this.buyRelated;
                this.showRelated();
                this.isLoading = true;
            }
            else{
                params += '&buyRelated=' + this.buyRelated;

                this.isLoading = true;

                this.resetPopup();
                loader.show();
            }

            var r = new Ajax.Request(this.options.addUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },
    addFromWishList: function(itemId){

        if(!this.isLoading){

            var params = '',
                qty = 1;

            var form = $('wishlist-view-form');
            if (form) {
                var input = form['qty[' + itemId + ']'];
                if (input) {
                    qty = input.value;
                }
            }

            params = 'item=' + itemId + '&qty=' + qty;

            this.isLoading = true;

            this.resetPopup();
            loader.show();

            var r = new Ajax.Request(this.options.addFromWishlistUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },

    remove: function(clickedNode, itemId){

        if(!this.isLoading) {
            var params = 'id=' + itemId;

            loader.show();

            this.isLoading = true;
            this.isRemoving = true;

            var r = new Ajax.Request(this.options.removeUrl, {
                method: 'post',
                parameters: params,
                onSuccess: this.onSuccess.bind(this),
                onFailure: this.onFailure.bind(this)
            });

        }
        else {
            return false;
        }
    },

    update: function(clickedNode) {
        if(!this.isLoading) {
            var input = $(clickedNode).previous('input'),
                params = input.name + '=' + input.value;

            loader.show();

            this.isLoading = true;
            this.isRemoving = true;

            var r = new Ajax.Request(this.options.updateUrl, {
                method: 'post',
                parameters: params,
                onSuccess: this.onSuccess.bind(this),
                onFailure: this.onFailure.bind(this)
            });
        }
        else {
            return false;
        }
    },

    onSuccess: function(transport) {

        if(transport && transport.responseText) {
            try {
                response = eval('(' + transport.responseText + ')');
            }
            catch(e) {
                response = {};
            }

            // hide quickview
            if (quickView !== undefined) {
                quickView.closeQuickView();
            }

            loader.hide();
            if(this.isRemoving !== true && (parseInt(this.options.showPopupWhenAdding) || !response.success)) {
                this.showPopup();
            }

            /*
                Redirect to product page if product has mandatory options or if
                standing on cart/checkout-page and cart has been emptied.
            */
            if(response.redirect && response.redirect.url) {
                // Redirect
                setTimeout(function(){
                    window.location = this.redirect.url;
                }.bind(response), this.options.redirectDelay);
            }

            /*
                Redirect to product page if product has mandatory options or if
                standing on cart/checkout-page and cart has been emptied.
            */
            if(response.redirectRelated && response.redirectRelated.url) {
                // Redirect
                setTimeout(function(){
                    window.location = this.redirectRelated.url;
                }.bind(response), this.options.redirectDelay);
            }

            // update cart blocks
            if (response.blocks) {
                if (response.blocks.headerCart) {
                    if ($('headercart')) {
                        $('headercart').update(response.blocks.headerCart);
                        $$('.fav_and_cart .cart_side #headercart')[0].update(response.blocks.headerCart);
                    }
                    if ($('headercart-disabled')) {
                        $('headercart-disabled').update(response.blocks.headerCart);
                        $$('.fav_and_cart .cart_side #headercart-disabled')[0].update(response.blocks.headerCart);
                    }
                    if ($$('.mobile-header-cart #headercart-disabled')[0]) {
                        $$('.mobile-header-cart #headercart-disabled')[0].update(response.blocks.headerCart);
                    }
                }

                if (response.blocks.popupCart && $('atca-popup-content')) {
                    $('atca-popup-content').update(response.blocks.popupCart);
                    this.centerElement('atca-popup-container');
                    this.validate();
                }
            }

            // Only update featured category ajaxify blocks
            EdgeCastHeaderRefresh(this.options.ecpAjaxifyUrl +
                '?grocery-home-page-products-3&grocery-home-page-products-4&grocery-home-page-products-6');

            // Something went wrong...
            if(response.error){
                if( this.options.afterCartUpdateFunc ){
                    this.options.afterCartUpdateFunc();
                }
            }

            // Something went wrong...
            if(response.errorRelated) {
                this.relatedText.show();
                this.relatedImage.show();

                this.relatedText.update(response.errorRelated.message);
                this.relatedText.addClassName('atca-error');
                this.relatedImage.addClassName('atca-error');

                if(response.errorRelated.html && $('atca-cart')){
                    $('atca-cart').update(response.errorRelated.html);

                    if( this.options.afterCartUpdateFunc ){
                        this.options.afterCartUpdateFunc();
                    }
                }
            }

            // Yeah, added/removed successfully!
            if(response.success) {
                var itemCountNumber = (typeof(response.successRelated) === 'object') ? response.successRelated.itemCount : response.success.itemCount,
                itemQtyNumber = (typeof(response.successRelated) === 'object') ? response.successRelated.itemQty : response.success.itemQty;

                // JS hooks
                $(document).fire('addtocartajax:update', { itemCount: itemCountNumber, itemQty: itemQtyNumber });
                $(document).fire('quickcheckout:reload');

                if( this.options.afterCartUpdateFunc ){
                    this.options.afterCartUpdateFunc();
                }

                if (response.success.url && !this.options.showPopupWhenAdding) {
                    // Redirect
                    window.location = response.success.url;
                }
            }

            // Yeah, added/removed successfully!
            if(response.successRelated) {
                this.relatedText.show();
                this.relatedImage.show();
                this.relatedText.update(response.successRelated.message);
                this.relatedText.addClassName('atca-success');
                this.relatedImage.addClassName('atca-success');

                if(response.successRelated.wishlist_html){
                    $$('.my-wishlist').each(function(node){
                        node.replace(response.successRelated.wishlist_html);
                    }.bind(this));
                }

                // JS hooks
                $(document).fire('addtocartajax:update');
                $(document).fire('quickcheckout:reload');

                if( this.options.afterCartUpdateFunc ){
                    this.options.afterCartUpdateFunc();
                }
            }

            if(!response.successRelated){
                if ($('atca-related-container')) {
                    $('atca-related-container').show();
                }

                if (response.success !== undefined) {
                    if(!response.success.buyRelated && this.options.popupTimeout !== 0) {
                        this.timeout = setTimeout(function(){
                            this.closePopup();
                        }.bind(this),this.options.popupTimeout);
                    }
                }
            }
        }

        this.isLoading = false;
        this.isRemoving = false;
    },

    onFailure: function(){
        this.closePopup();
    },

    resetPopup: function(){

        if($('atca-continue-btn')){
            $('atca-continue-btn').setStyle({
                'float': 'left'
            });
        }

        if($('atca-no-btn')){
            $('atca-no-btn').hide();
        }

        if($('atca-yes-btn')){
            $('atca-yes-btn').hide();
        }

        if($('atca-continue-btn')){
            $('atca-continue-btn').show();
        }

        if($('atca-redirect-btn')){
            $('atca-redirect-btn').show();
        }

        if($('atca-message-text')){
            $('atca-message-text').hide();
        }

        if($('atca-related-container')){
            $('atca-related-container').hide();
        }

        if($('atca-message-text')){
            $('atca-message-text').removeAttribute('class');
        }

    },

    showPopup: function(){
        // Overlay functionality
        if(!this.overlayObserverHasBeenAdded){
            $('atca-overlay').observe('click', function(e){
                if(!this.isLoading){
                    this.closePopup();
                }
            }.bind(this));
            $('atca-popup-close').observe('click', function(e){
                if(!this.isLoading){
                    this.closePopup();
                }
            }.bind(this));

            this.overlayObserverHasBeenAdded = true;
        }

        $('atca-overlay').show();
        $('atca-popup-container').show();

        this.centerElement('atca-popup-container');
    },

    showRelated: function(){

        this.pleaseWaitContainer = this.parent.down('#atca-please-wait-related');
        this.pleaseWaitImageContainer = this.parent.down('#atca-please-wait-image-related');
        this.relatedContainer = this.parent.down('#atca-message-text-related-container');
        this.relatedText = this.parent.down('#atca-message-text-related');
        this.relatedImage = this.parent.down('#atca-message-image-related');

        this.relatedText.hide();
        this.relatedImage.hide();

        this.relatedContainer.show();
        this.pleaseWaitContainer.show();
        this.pleaseWaitImageContainer.show();

    },

    closePopup: function(){

        clearTimeout(this.timeout);

        $('atca-popup-container').hide();

        if($('messages_product_view')){
            $('messages_product_view').hide();
        }

        if($('atca-overlay')){
            $('atca-overlay').hide();
        }

        this.isLoading = false;
    },

    centerElement: function(element){
        this.centerElementHorizontally(element);
        this.centerElementVertically(element);
        this.updateButtonsStyle(element);
    },

    centerElementHorizontally: function(element){
        if ($(element) != null) {
            var $element = $(element);
            $element.setStyle({left: null, right: null});
            var viewport = document.viewport.getDimensions(),
                viewportWidth = viewport.width,
                windowInnerWidth  = window.innerWidth,
                modalWidth = $element.getWidth();

            if (windowInnerWidth <= this.options.displayWidthForSwitch
                || viewportWidth <= this.options.displayWidthForSwitch
            ) {
                var newXPos = Math.round((windowInnerWidth - modalWidth) / 2),
                    marginX = Math.round(newXPos / 2);
                if (windowInnerWidth <= (modalWidth + newXPos * 2)) {
                    $element.setStyle({left: marginX + 'px', right: marginX + 'px'});
                } else if (marginX < this.options.minMargin) {
                    $element.setStyle({left: this.options.minMargin + 'px', right: this.options.minMargin});
                } else {
                    $element.setStyle({left: newXPos + 'px', right: null});
                }
            } else {
                var xPos = Math.round((viewportWidth - modalWidth) / 2);
                $element.setStyle({left: xPos + 'px', right: null});
            }
        }
    },

    centerElementVertically: function(element) {
        if ($(element) != null) {
            var viewport = document.viewport.getDimensions();
            var documentViewportHeight = viewport.height;
            var displayScreenHeight  = window.innerHeight;
            if (displayScreenHeight < documentViewportHeight) {
                var newYPos = Math.round((window.innerHeight - $(element).getHeight()) / 2);
                $(element).setStyle({top: newYPos + 'px'});
            } else {
                var yPos = Math.round((documentViewportHeight - $(element).getHeight()) / 2);
                $(element).setStyle({top: yPos + 'px'});
            }
        }
    },

    getTotalWidthOfElement: function (element) {
        if ($(element) != null) {
            var elementLayout = $(element).getLayout(),
                elementWidth = elementLayout.get('width');

            elementWidth += elementLayout.get('padding-left');
            elementWidth += elementLayout.get('padding-right');
            elementWidth += elementLayout.get('margin-left');
            elementWidth += elementLayout.get('margin-right');
            if (elementLayout.get('border-right-width') != undefined) {
                elementWidth += elementLayout.get('border-right-width');
            }
            if (elementLayout.get('border-left-width') != undefined){
                elementWidth += elementLayout.get('border-left-width');
            }

            return elementWidth;
        }
        return null;
    },

    getTotalInnerWidthOfElement: function (element) {
        if ($(element) != null) {
            var elementLayout = $(element).getLayout(),
                elementWidth = elementLayout.get('width');

            elementWidth -= elementLayout.get('padding-left');
            elementWidth -= elementLayout.get('padding-right');

            return elementWidth;
        }
        return null;
    },

    updateButtonsStyle: function (element) {
        if ($(element) != null && $('atca-button-container') != null && $('atca-redirect-btn') != null
            && $('atca-continue-btn') != null
            ) {
            var container = $(element),
                buttonsContainer = $('atca-button-container'),
                continueButton = $('atca-continue-btn'),
                redirectButton = $('atca-redirect-btn');

            continueButton.setStyle({width: 'auto'});
            redirectButton.setStyle({width: 'auto'});

            var containerInnerWidth = this.getTotalInnerWidthOfElement(buttonsContainer);
            var continueButtonWidth = this.getTotalWidthOfElement(continueButton);
            var redirectButtonWidth = this.getTotalWidthOfElement(redirectButton);

            var buttonsLength = continueButtonWidth + redirectButtonWidth;

            if (containerInnerWidth <= buttonsLength) {
                continueButton.setStyle({width: '100%'});
                redirectButton.setStyle({width: '100%'});
            }
        }
    },

    redirect: function(url){

        url = typeof(url) != 'undefined' ? url : '';

        if(url == ''){
            url = this.options.redirectUrl;
        }

        window.location = url;
    },

    validate: function(){
        var thisObject = this;
        $$('#atca-popup-cart-container .qty').each(function (el, idx) {
            $(el).observe('change', function () {
                    if (!thisObject.isNormalInteger($(this).value)) {
                        $(this).value = $(this).defaultValue;
                    }
                }
            );
        });
    },

    isNormalInteger: function (str) {
        return /^\+?(0|[1-9]\d*)$/.test(str);
    }
});

jQuery(function($){

    $(function() {
        handleCart.init();
    });

    var handleCart = (function() {
        var searchFormButton,
            cart,
            active = false,
            timeoutTimer,
            settings = {
                show: 60,
                hide: 0,
                showDelay: 300,
                easingSwing: 'swing',
                easingSwing: 'linear'
            };

        function init() {
            searchFormButton = $("#search_mini_form .button");

            $(document).on({
                mouseenter: mouseenter,
                mouseleave: mouseleave
            }, "#headercart");

        }

        function openCart() {
            getCart().stop(true,true).slideDown(settings.show, settings.easingSwing);
            $('.headercart .top').addClass('hover');
            searchFormButton.css("visibility","hidden"); // ie7 workaround
            active = true;
        }

        function closeCart() {
            getCart().stop(true,true).slideUp(settings.hide, settings.easingSwing, function() {
                $('.headercart .top').removeClass('hover');
            });
            searchFormButton.css("visibility","visible"); // ie7 workaround
            active = false;
        }

        function mouseenter() {
            if(!timeoutTimer) {
                timeoutTimer = setTimeout(openCart, settings.showDelay);
            }
        }

        function mouseleave() {
            if(timeoutTimer) {
                clearTimeout(timeoutTimer);
                timeoutTimer = null;
            }

            if(active) {
                closeCart();
            }
        }

        function getCart() {
            cart = $(".showcart");

            return cart;
        }

        return {
            init: init
        }
    })();


});
jQuery(document).on("initMoreViewsSlider", function(event, sliderCustomWidth, slidesAmount){

    //Initialise slider differently based on amount of images
    if(jQuery('.thumbs-slider li').length > slidesAmount) {
        jQuery('.thumbs-slider').bxSlider({
            pager: false,
            prevText: '&lsaquo;',
            nextText: '&rsaquo;',
            infiniteLoop: false,
            slideWidth: sliderCustomWidth, //80 default
            minSlides: jQuery(window).width() > 767 ? slidesAmount : 3, //4 default
            maxSlides: jQuery(window).width() > 767 ? slidesAmount : 3, //4 default
            moveSlides: 1,
            slideMargin: 10,
            infiniteLoop: true,
            touchEnabled: true,
            mode: jQuery('body.catalog-product-view').length == 1 && jQuery(window).width() > 767 ? 'vertical' : 'horizontal'
        });
    } else {
        jQuery('.thumbs-slider').bxSlider({
            pager: false,
            prevText: '&lsaquo;',
            nextText: '&rsaquo;',
            infiniteLoop: false,
            slideWidth: sliderCustomWidth, //80 default
            minSlides: jQuery(window).width() > 767 ? slidesAmount : 3, //4 default
            maxSlides: jQuery(window).width() > 767 ? slidesAmount : 3, //4 default
            moveSlides: 1,
            slideMargin: 10,
            controls: false,
            touchEnabled: true,
            mode: jQuery('body.catalog-product-view').length == 1 && jQuery(window).width() > 767 ? 'vertical' : 'horizontal'
        });
    }
    // Thumnbails switch main image on a click
    jQuery(".thumbs-slider li a").on( "click", function(event) {
        event.preventDefault();
        var imgSrc = jQuery(this).attr('href');
        var zoomImgSrc = jQuery(this).data('easyzoomSource');
        jQuery('#zoom-target .zoom-image').attr('src', imgSrc);
        jQuery('#zoom-target').attr('href', zoomImgSrc);
        jQuery('.emulate-img').show();
        jQuery('#zoom-target').hide();
        jQuery('.emulate-img').hide();
        jQuery('#zoom-target').show();
        jQuery(".thumbs-slider li a").removeClass('active');
        jQuery(this).addClass('active');

        //Easyzoom Callout

        if (jQuery('.media-container').length > 0) {
            var options = {
                parent: 'body',
                parent: '.col-main'
            };

            //Removing touch event which prevents from scrolling down the page
            if( isMobile() ) {
                options.touch = false;
            }

            jQuery('#zoom-target').easyZoom(options);
        }
    });



});


var QuickView = Class.create({

    initialize: function(options){

        var defaults = {
            url: '',
            defaultHeight: 300
        };

        this.options = Object.extend(defaults, options);
    },

    closeQuickView: function() {
        $('quickview').hide();
        $('quickview-overlay').hide();
    },

    showOverlay: function() {
        $('quickview').show();
        $('quickview-overlay').show();

    },

    load: function(id){

        if($('quickview')){
            // use global loader
            loader.show();

            $('quickview').setStyle({
                height: this.options.defaultHeight + 'px'
            });
            this.centerElementVertically('quickview-loader');
            this.centerElementVertically('quickview');
        }

        var params = '&id=' + id;

        var r = new Ajax.Request(this.options.url,
            {
                method: 'get',
                parameters: params,
                onSuccess: this.onSuccess.bind(this),
                onFailure: this.onFailure.bind(this)
            });

        return false;
    },

    onSuccess: function(transport){
        if(transport && transport.responseText){

            try{
                response = eval('(' + transport.responseText + ')');
            }
            catch(e){
                response = {};
            }

            if(response.success){
                // use global loader
                loader.hide();
                this.showOverlay();

                if( $('quickview') ){
                    $('quickview-content').update( response.success.html );

                    // Hook
                    $(document).fire('quickview:update');
                    jQuery(document).trigger("quickviewUpdate");
                    jQuery(document).trigger("initMoreViewsSlider", [ 80, 3 ]);

                    $('quickview-close').show();
                    $('quickview-content').show();

                    $('quickview').setStyle({
                        height: 'auto'
                    });
                    this.centerElementVertically('quickview');

                }
            }
            else if(response.error){
                alert(response.error.message);
            }
        }
    },

    onFailure: function(){
        // Do nothing here
    },

    centerElementVertically: function(element){

        if($(element) != null){
            var viewport = document.viewport.getDimensions();
            var windowHeight = viewport.height;

            //var scrollOffsets = document.viewport.getScrollOffsets();
            //var scrollTop = scrollOffsets.top;

            //var yPos = Math.round(windowHeight/2) + scrollTop;
            var yPos = Math.round(windowHeight/2);
            yPos = yPos - ($(element).getHeight()/2)
            $(element).setStyle({
                top: yPos + 'px'
            });
        }
    }
});

/*

    Awkward Showcase - jQuery plugin
    http://www.jquery.com
    http://www.awkwardgroup.com/sandbox/awkward-showcase-a-jquery-plugin
    http://demo.awkwardgroup.com/showcase
    Version: 1.1.1

    Copyright (C) 2011 Awkward Group (http://www.awkwardgroup.com)
    Licensed under Attribution-ShareAlike 3.0 Unported
    http://creativecommons.org/licenses/by-sa/3.0/

    Markup example for jQuery("#showcase").awShowcase();

    <div id="showcase" class="showcase">
        <!-- Each child div in #showcase represents a slide -->
        <div class="showcase-slide">
            <!-- Put the slide content in a div with the class .showcase-content -->
            <div class="showcase-content">
                <!-- If the slide contains multiple elements you should wrap them in a div with the class .showcase-content-wrapper.
                We usually wrap even if there is only one element, because it looks better. :-) -->
                <div class="showcase-content-wrapper">
                    <img src="images/01.jpg" alt="01" />
                </div>
            </div>
            <!-- Put the caption content in a div with the class .showcase-caption -->
            <div class="showcase-caption">
                The Caption
            </div>
            <!-- Put the tooltips in a div with the class .showcase-tooltips. -->
            <div class="showcase-tooltips">
                <!-- Each anchor in .showcase-tooltips represents a tooltip. The coords attribute represents the position of the tooltip. -->
                <a href="http://www.awkward.se" coords="634,130">
                    <!-- The content of the anchor-tag is displayed in the tooltip. -->
                    This is a tooltip that displays the anchor html in a nice way.
                </a>
                <a href="http://www.awkward.se" coords="356, 172">
                    <!-- You can add multiple elements to the anchor-tag which are display in the tooltip. -->
                    <img src="images/glasses.png" />
                    <span style="display: block; font-weight: bold; padding: 3px 0 3px 0; text-align: center;">
                        White Glasses: 500$
                    </span>
                </a>
            </div>
        </div>
        <div class="showcase-slide">
            <div class="showcase-content">
                <div class="showcase-content-wrapper">
                    Content...
                </div>
            </div>
        </div>
    </div>

*/

(function($) {

    $.fn.awShowcase = function(options) {

        // Default configuration properties
        var defaults =
        {
            content_width:          700,
            content_height:         470,
            fit_to_parent:          false,
            auto:                   false,
            interval:               3000,
            continuous:             false,
            loading:                true,
            tooltip_width:          200,
            tooltip_icon_width:     32,
            tooltip_icon_height:    32,
            tooltip_offsetx:        18,
            tooltip_offsety:        0,
            arrows:                 true,
            buttons:                true,
            btn_numbers:            false,
            keybord_keys:           false,
            mousetrace:             false, /* Trace x and y coordinates for the mouse */
            pauseonover:            true,
            stoponclick:            true,
            transition:             'hslide', /* hslide / vslide / fade */
            transition_delay:       300,
            transition_speed:       500,
            show_caption:           'onload', /* onload / onhover / show */
            thumbnails:             false,
            thumbnails_position:    'outside-last', /* outside-last / outside-first / inside-last / inside-first */
            thumbnails_direction:   'vertical', /* vertical / horizontal */
            thumbnails_slidex:      0, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
            dynamic_height:         false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
            speed_change:           false, /* This prevents user from swithing more then one slide at once */
            viewline:               false, /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
            fullscreen_width_x:     15,
            custom_function:        null
        };

        // *****************
        // SET UP THE PLUGIN
        // *****************

        // Declare and set up some important variables
        options = jQuery.extend(defaults, options);
        var current_id = 0;
        var previous_id = 0;
        var break_loop = false;
        var pause_loop = false;
        var myInterval = null;
        var showcase = jQuery(this);
        var showcase_width = options.content_width;
        var animating = false;
        // Viewline specific variables
        var content_viewline_width = 10000;
        var animation_distance = 0;
        var old_animation_distance = 0;
        var remaining_width = 0;

        // Set up the content wrapper
        var content_container = jQuery(document.createElement('div'))
            .css('overflow', 'hidden')
            .css('position', 'relative')
            .addClass('showcase-content-container')
            .prependTo(showcase);

        // Set up the showcase for hundred percent width
        if (options.fit_to_parent)
        {
            showcase_width = jQuery(showcase).width() + options.fullscreen_width_x;
        }

        // Set up the showcase for Viewline Mayhem
        if (options.viewline)
        {
            options.thumbnails = false;
            options.dynamic_height = false;
            content_container.css('width', content_viewline_width);
            showcase.css('overflow', 'hidden');
            $('.showcase-arrow-previous').hide();
        }

        // Set up content and create the content and thumbnail array
        var contentArray = [];
        var thumbnailArray = [];
        var content_count = 0;
        showcase.children('.showcase-slide').each(function()
        {
            // Get content
            var object = jQuery(this);
            content_count++;

            // If thumbnails are activated
            if (options.thumbnails)
            {
                // Get thumbnail and put in array
                var thumb = object.find('.showcase-thumbnail');
                thumbnailArray.push(thumb);
                thumb.remove();
            }

            // Set content width and height
            var object_width = object.find('.showcase-content').children().width();
            var object_height = object.find('.showcase-content').children().height();

            // Add content html in array and remove it from DOM
            contentArray.push(object.html());
            object.remove();

            // Get correct content
            var new_object = getContent(content_count-1);
            if (options.viewline || content_count === 1) { content_container.append(new_object); }

            // Viewline setup
            if (options.viewline)
            {
                new_object.css('position', 'relative');
                new_object.css('float', 'left');
                new_object.css('width', object_width);
            }

            // Set content and content container load height
            if (options.dynamic_height)
            {
                new_object.css('height', object_height);
                if (content_count === 1) { content_container.css('height', object_height); }
            }
            else
            {
                new_object.css('height', options.content_height);
                if (content_count === 1) { content_container.css('height', options.content_height); }
            }

            if (options.viewline || content_count === 1)
            {
                displayAnchors(new_object);
                displayCaption(new_object);

                if (options.show_caption === 'show')
                {
                    jQuery(new_object).find('.showcase-caption').show();
                }
            }
        });

        // Declare and set up the thumbnail wrapper
        var thumb_wrapper;
        var thumbnailStretch = 0;
        var thumbnailsPerPage = 0;
        if (options.thumbnails)
        {
            // Create wrapper
            thumb_container = jQuery('<div />');
            thumb_restriction = jQuery('<div />');
            thumb_wrapper = jQuery('<div />');

            // Add content to thumbnail wrapper
            for (i = thumbnailArray.length-1; i >= 0; --i)
            {
                var thumbnail = jQuery(thumbnailArray[i]).css({'overflow' : 'hidden'});
                thumbnail.attr('id', 'showcase-thumbnail-' + i);
                thumbnail.addClass((i === 0) ? 'active' : '');
                thumbnail.click(function(a, b)
                {
                    // This function is used to extract the correct i value on click
                    return function()
                    {
                        // Disable auto change on click
                        if (myInterval) { pause_loop = true; clearInterval(myInterval); }
                        changeContent(a, b);
                    };
                }(i, ''));
                thumb_wrapper.prepend(thumbnail);
            }

            // Style and position thumbnail container and content wrapper
            // + insert thumbnail container
            if (options.thumbnails_position === 'outside-first' || options.thumbnails_position === 'outside-last')
            {
                if (options.thumbnails_direction !== 'horizontal')
                {
                    /* outside & vertical */
                    content_container.css('float', 'left');
                    content_container.css('width', options.content_width);
                    thumb_container.css('float', 'left');
                    thumb_container.css('height', options.content_height);
                }
                else
                {
                    /* outside & horizontal */
                    jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left');
                    //jQuery(thumb_wrapper).append(jQuery('<div />').addClass('clear'));
                }

                if (options.thumbnails_position === 'outside-last')
                {
                    /* outside-last */
                    showcase.append(thumb_container);
                    if (options.thumbnails_direction !== 'horizontal') { showcase.append(jQuery('<div />').addClass('clear')); }
                }
                else
                {
                    /* outside-first */
                    showcase.prepend(thumb_container);
                    if (options.thumbnails_direction !== 'horizontal') { showcase.append(jQuery('<div />').addClass('clear')); }
                }
            }
            else
            {
                thumb_container.css({'position' : 'absolute', 'z-index' : 20});
                if (options.thumbnails_direction === 'horizontal')
                {
                    /* inside & horizontal */
                    thumb_container.css({'left' : 0, 'right' : 0});
                    jQuery(thumb_wrapper).find('.showcase-thumbnail').css('float', 'left');
                    jQuery(thumb_wrapper).append(jQuery('<div />').addClass('clear'));

                    /* inside first */
                    if (options.thumbnails_position === 'inside-first') { thumb_container.css('top', 0); }
                    /* inside last */
                    else { thumb_container.css('bottom', 0); }
                }
                else
                {
                    /* inside & vertical */
                    thumb_container.css({'top' : 0, 'bottom' : 0});
                    /* inside first */
                    if (options.thumbnails_position === 'inside-first') { thumb_container.css('left', 0); }
                    /* inside last */
                    else { thumb_container.css('right', 0); }
                }
                content_container.prepend(thumb_container);
            }

            // Add class and style to thumbnail container
            thumb_container.addClass('showcase-thumbnail-container');
            thumb_container.css('overflow', 'hidden');

            // Add class and style to thumbnail restriction
            thumb_restriction.addClass('showcase-thumbnail-restriction');
            thumb_restriction.css({'overflow' : 'hidden', 'position' : 'relative'});
            if (options.thumbnails_direction === 'horizontal') { thumb_restriction.css({'float' : 'left'}); }

            // Add class and style to thumbnail wrapper
            thumb_wrapper.addClass('showcase-thumbnail-wrapper');
            if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.addClass('showcase-thumbnail-wrapper-horizontal'); }
            else { thumb_wrapper.addClass('showcase-thumbnail-wrapper-vertical'); }
            thumb_wrapper.css('position', 'relative');

            // Append wrapper and restriction
            thumb_restriction.append(thumb_wrapper);
            thumb_container.append(thumb_restriction);

            // Add backward button
            var buttonBackward = jQuery('<div class="showcase-thumbnail-button-backward" />');
            if (options.thumbnails_direction !== 'horizontal')
            {
                buttonBackward.html('<span class="showcase-thumbnail-vertical"><span>Up</span></span>');
            }
            else
            {
                buttonBackward.css({'float' : 'left'});
                buttonBackward.html('<span class="showcase-thumbnail-horizontal"><span>Left</span></span>');
            }
            buttonBackward.click(function() { slideThumbnailWrapper('backward', false, true); });
            thumb_container.prepend(buttonBackward);

            // Add forward button
            var buttonForward = jQuery('<div class="showcase-thumbnail-button-forward" />');
            if (options.thumbnails_direction !== 'horizontal')
            {
                buttonForward.html('<span class="showcase-thumbnail-vertical"><span>Down</span></span>');
            }
            else
            {
                buttonForward.css({'float' : 'left'});
                buttonForward.html('<span class="showcase-thumbnail-horizontal"><span>Right</span></span>');
            }
            buttonForward.click(function() { slideThumbnailWrapper('forward', false, true); });
            thumb_container.append(buttonForward);

            // Set the number of thumbnails per page.
            var thumbnailVisibleStretch = 0;
            if (options.thumbnails_direction !== 'horizontal')
            {
                thumbnailVisibleStretch = getElementHeight(thumb_wrapper, false);
                thumbnailVisibleStretch += (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
                while (thumbnailVisibleStretch < options.content_height)
                {
                    thumbnailVisibleStretch += getElementHeight(jQuery(thumbnailArray[0]));
                    thumbnailsPerPage++;
                }
            }
            else
            {
                thumbnailVisibleStretch = getElementWidth(thumb_wrapper, false);
                thumbnailVisibleStretch += (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));

                while (thumbnailVisibleStretch < showcase_width)
                {
                    thumbnailVisibleStretch += getElementWidth(jQuery(thumbnailArray[0]));
                    thumbnailsPerPage++;
                }
            }

            // Hide buttons if they're not necessary
            if (thumbnailsPerPage+1 > thumbnailArray.length)
            {
                if (options.thumbnails_direction !== 'horizontal')
                {
                    thumb_restriction.css('margin-top', getElementHeight(buttonBackward));
                }
                else
                {
                    thumb_restriction.css('margin-left', getElementWidth(buttonBackward));
                }
                buttonBackward.hide();
                buttonForward.hide();
            }

            // Set thumbnail restriction height or width
            if (options.thumbnails_direction !== 'horizontal')
            {
                var buttonsHeight = (getElementHeight(buttonBackward)) + (getElementHeight(buttonForward));
                thumb_restriction.css('height', options.content_height - buttonsHeight);
            }
            else
            {
                var buttonsWidth = (getElementWidth(buttonBackward)) + (getElementWidth(buttonForward));
                thumb_restriction.css('width',  showcase_width-buttonsWidth);
            }

            // Set thumbnail wrapper width
            if (options.thumbnails_direction === 'horizontal')
            {
                jQuery('.showcase-thumbnail').each(function() { thumbnailStretch += getElementWidth(jQuery(this)); });
                thumb_wrapper.css('width', thumbnailStretch);
            }
            else { jQuery('.showcase-thumbnail').each(function() { thumbnailStretch += getElementHeight(jQuery(this)); }); }
        }

        // Set showcase width and height
        if (options.thumbnails && options.thumbnails_position.indexOf("outside") !== -1 && options.thumbnails_direction !== 'horizontal' && !options.viewline)
        {
            showcase.css('width', showcase_width + getElementWidth(thumb_wrapper, true, false));
        }
        else if  (!options.fit_to_parent) { showcase.css('width', showcase_width); }

        // Turn on/off auto slide
        if (content_count > 1 && options.auto) { myInterval = window.setInterval(autoChange, options.interval); }

        // Pause auto on mouse over
        if (options.auto && options.pauseonover)
        {
            showcase.mouseenter(function() { break_loop = true; clearInterval(myInterval); });
            showcase.mouseleave(function()
            {
                if (!pause_loop)
                {
                    break_loop = false; myInterval = window.setInterval(autoChange, options.interval);
                }
            });
        }

        // Adding navigation arrows
        if (options.arrows && content_count > 1)
        {
            // Left arrow
            jQuery(document.createElement('div'))
                .addClass('showcase-arrow-previous')
                .prependTo(showcase)
                .click(function() {
                    // Disable auto change on click
                    if (myInterval)
                    {
                        if (options.stoponclick) { pause_loop = true; }
                        clearInterval(myInterval);
                    }
                    changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
                });
            // Right arrow
            jQuery(document.createElement('div'))
                .addClass('showcase-arrow-next')
                .prependTo(showcase)
                .click(function() {
                    // Disable auto change on click
                    if (myInterval)
                    {
                        if (options.stoponclick) { pause_loop = true; }
                        clearInterval(myInterval);
                    }
                    changeContent(current_id+1, 'next');
                });

            if (options.viewline) { $('.showcase-arrow-previous').hide(); }
        }

        // Adding navigation buttons
        if (options.buttons && content_count > 1)
        {
            // Create button wrapper
            jQuery(document.createElement('div'))
                .css('clear', 'both')
                .addClass('showcase-button-wrapper')
                .appendTo(showcase);
            i = 0;
            // Add button for each content
            while (i < content_count)
            {
                jQuery(document.createElement('span'))
                    .attr('id', 'showcase-navigation-button-' + i)
                    .addClass((i === 0) ? 'active' : '')
                    // Add numbers or unicode
                    .html((options.btn_numbers) ? parseInt(i)+1 : '&#9679;')
                    .click(function(a, b)
                    {
                        // This function is used to extract the correct i value on click
                        return function()
                        {
                            // Disable auto change on click
                            if (myInterval)
                            {
                                if (options.stoponclick) { pause_loop = true; }
                                clearInterval(myInterval);
                            }
                            changeContent(a, b);
                        };
                    }(i, ''))
                    .appendTo(jQuery(showcase).find('.showcase-button-wrapper'));
                i++;
            }
        }

        // Activating the keybord arrow keys
        if (options.keybord_keys)
        {
            jQuery(document).keydown(function(e)
            {
                // Disable auto change on click
                if (options.stoponclick) { pause_loop = true; }
                if (myInterval) clearInterval(myInterval);

                // Left arrow
                if (e.keyCode === 37) {
                    changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
                }

                // Right arrow
                if (e.keyCode === 39) {
                    changeContent((current_id === content_count-1) ? 0 : parseInt(current_id)+1, 'next');
                }
            });
        }


        // *************
        // THE FUNCTIONS
        // *************

        // Returns the specified content (by array id)
        function getContent(id) {

            var new_content = jQuery(document.createElement('div'))
                .attr('id', 'showcase-content-' + id)
                .css('overflow', 'hidden')
                .css('position', 'absolute')
                .addClass('showcase-content')
                .html(contentArray[id]);

            // Set content width
            if (!options.viewline) { new_content.css('width', options.content_width); }

            // Position the content wrapper if showcase width is set to hundred percent
            if (options.fit_to_parent && !options.viewline) { new_content.css('left', (showcase_width/2)-options.content_width/2); }

            return new_content;
        }

        // Function that runs when content is set to change automatically
        function autoChange() {

            // Set next content id
            var nextID = parseInt(current_id)+1;
            // If the next id is outside the array and continuous is set to true set the id to 0
            if (nextID === content_count && options.continuous) { nextID = 0; }
            // If continuous is set to false break the auto change
            else if (nextID === content_count && !options.continuous) { break_loop = true; clearInterval(myInterval); }
            // Don't change the content if the auto change is broken
            if (!break_loop) { changeContent(nextID, 'next'); }
        }

        // Changes the content (no explanation/comments needed :)
        function changeContent(id, direction) {

            // If the next content isn't the current content
            if (current_id !== id && !animating) {

                var obj;
                var obj2;
                var delay = 0;
                var i;

                // Set left/right position if showcase is set to full width
                var lrpos = (options.fit_to_parent) ? (showcase_width/2)-(options.content_width/2) : 0;

                // If we want to display the next content
                if ((id > current_id && direction !== 'previous') || direction === 'next') {

                    if (options.viewline) {

                        if (current_id < content_count-1) {

                            // Prevent uggly transitions
                            if (!options.speed_change) { animating = true; }

                            // BugFix
                            updateContentViewlineWidth();

                            // Pause Autoplay
                            if (options.pauseonover) { window.clearInterval(myInterval); }

                            // First we check if the content will fill the screen after animation.
                            remaining_width = 0;

                            // Loop trough the content array to find out
                            // the total width for the content that remains.
                            for (i=current_id+1, len=content_count; i<len; ++i)
                            {
                                obj = addedContentArray[i];
                                remaining_width += obj.find('.showcase-content').children().width();
                            }

                            // If the remaining width is wider than the browser window.
                            if (remaining_width > showcase_width)
                            {
                                old_animation_distance = animation_distance;
                                animation_distance -= addedContentArray[current_id].find('.showcase-content').children().width();
                            }
                            else if ($('.showcase-arrow-next').is(':visible'))
                            {
                                old_animation_distance = animation_distance;
                                animation_distance = -(content_viewline_width - (remaining_width + (showcase_width - remaining_width)));
                                $('.showcase-arrow-next').fadeOut(300);
                            }

                            content_container.animate({left: animation_distance + 'px'}, options.transition_speed, function() { animating = false; });

                            // Change current content id (if content is finished)
                            if ($('.showcase-arrow-next').is(':visible')) { current_id++; }

                            $('.showcase-arrow-previous').fadeIn(300);
                        }
                    }
                    else {

                        // Prevent uggly transitions
                        if (!options.speed_change) { animating = true; }

                        // Get current and next content element
                        obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
                        obj2 = getContent(id);

                        // Append next element and set height
                        content_container.append(obj2);
                        if (options.dynamic_height) { obj2.css('height', obj2.find('.showcase-content').children().height()); }
                        else { obj2.css('height', options.content_height); }

                        // Animate height first if next content is not as high
                        if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {

                            content_container.stop(true, true).animate({ height: obj2.find('.showcase-content').children().height() }, 200);
                            delay = 100;
                        }

                        // Animate current element
                        if (options.transition === 'hslide') {

                            jQuery(obj).delay(delay).animate({ left: -(options.content_width) }, options.transition_speed+options.transition_delay, function() { obj.remove(); });
                        }
                        else if (options.transition === 'vslide') {

                            jQuery(obj).delay(delay).animate({ top: -(options.content_height) }, options.transition_speed+options.transition_delay, function() { obj.remove(); });
                        }
                        else {

                            jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() { obj.remove(); });
                        }

                        // This will hide them, not display them :)
                        displayAnchors(obj, true);
                        displayCaption(obj, true);

                        // Animate next element
                        if (options.transition === 'hslide') {

                            obj2.css('left', showcase_width);
                            jQuery(obj2).delay(delay).animate({ left: lrpos }, options.transition_speed, function() {
                                    displayAnchors(obj2);
                                    displayCaption(obj2);
                                    afterAnimation(obj2);
                                }
                            );
                        }
                        else if (options.transition === 'vslide') {

                            obj2.css('top', showcase.height());
                            jQuery(obj2).delay(delay).animate({ top: '0px' }, options.transition_speed, function() {
                                    displayAnchors(obj2);
                                    displayCaption(obj2);
                                    afterAnimation(obj2);
                                }
                            );
                        }
                        else {

                            obj2.css('left', lrpos);
                            obj2.css('display', 'none');
                            jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function()
                                {
                                    displayAnchors(obj2);
                                    displayCaption(obj2);
                                    afterAnimation(obj2);
                                }
                            );
                        }
                    }
                }
                // If we want to display the previous content
                else if (id < current_id || direction === 'previous') {

                    if (options.viewline) {

                        if (current_id !== 0) {

                            // Prevent uggly transitions
                            if (!options.speed_change) { animating = true; }

                            // BugFix
                            updateContentViewlineWidth();

                            // Pause Autoplay
                            if (options.pauseonover) { window.clearInterval(myInterval); }

                            content_container.animate({left: old_animation_distance + 'px'}, options.transition_speed, function() { animating = false; });

                            // Set animation distance
                            animation_distance = old_animation_distance;

                            // Change current content id
                            current_id--;

                            if (current_id === 0) { $('.showcase-arrow-previous').fadeOut(300); }

                            // Set old distance
                            old_id = current_id - 1;
                            sub_width = jQuery(addedContentArray[old_id]).width();
                            old_animation_distance = old_animation_distance + sub_width;
                        }

                        $('.showcase-arrow-next').fadeIn(300);
                    }
                    else {

                        // Prevent uggly transitions
                        if (!options.speed_change) { animating = true; }

                        // Get current and next content element
                        obj = jQuery(showcase).find('#showcase-content-' + parseInt(current_id));
                        obj2 = getContent(id);

                        // Append next element and set height
                        content_container.append(obj2);
                        if (options.dynamic_height) { obj2.css('height', obj2.find('.showcase-content').children().height()); }
                        else { obj2.css('height', options.content_height); }

                        // Animate height first if next content is not as high
                        if (obj.find('.showcase-content').children().height() > obj2.find('.showcase-content').children().height() && options.dynamic_height) {

                            content_container.stop(true, true).animate({ height: obj2.find('.showcase-content').children().height()}, 200);
                            delay = 100;
                        }

                        // Animate current element
                        if (options.transition === 'hslide') {

                            jQuery(obj).delay(delay).animate({
                                left: (showcase_width) + 'px'
                                }, options.transition_speed+options.transition_delay, function() {
                                    displayAnchors(obj, true);
                                    displayCaption(obj, true);
                                    obj.remove();
                            });
                        }
                        else if (options.transition === 'vslide') {

                            jQuery(obj).delay(delay).animate({
                                top: (options.content_height) + 'px'
                                }, options.transition_speed+options.transition_delay, function(){
                                    displayAnchors(obj, true);
                                    displayCaption(obj, true);
                                    obj.remove();
                            });
                        }
                        else {

                            jQuery(obj).delay(delay).fadeOut(options.transition_speed, function() {
                                displayAnchors(obj, true);
                                displayCaption(obj, true);
                                obj.remove();
                            });
                        }

                        // Animate next element
                        if (options.transition === 'hslide')
                        {
                            obj2.css('left', '-' + options.content_width + 'px');
                            jQuery(obj2).delay(delay).animate({
                                left: lrpos
                                }, options.transition_speed, function() {
                                    displayAnchors(obj2);
                                    displayCaption(obj2);
                                    afterAnimation(obj2);
                            });
                        }
                        else if (options.transition === 'vslide')
                        {
                            obj2.css('top', '-' +  showcase.height() + 'px');
                            jQuery(obj2).delay(delay).animate({
                                top: '0px'
                                }, options.transition_speed, function() {
                                    displayAnchors(obj2);
                                    displayCaption(obj2);
                                    afterAnimation(obj2);
                            });
                        }
                        else
                        {
                            obj2.css('left', lrpos);
                            obj2.css('display', 'none');
                            jQuery(obj2).delay(delay).fadeIn(options.transition_speed, function() {
                                displayAnchors(obj2);
                                displayCaption(obj2);
                                afterAnimation(obj2);
                            });
                        }
                        content_container.append(obj2);
                    }
                }

                if(!options.viewline)
                {
                    // Change previous and current content id
                    previous_id = current_id;
                    current_id = id;

                    // Slide thumbnail wrapper
                    if (options.thumbnails)
                    {
                        if ((current_id > previous_id && direction !== 'previous') || direction === 'next')
                        {
                            slideThumbnailWrapper('forward', true);
                        }
                        else if (current_id < previous_id || direction === 'previous')
                        {
                            slideThumbnailWrapper('backward', true);
                        }
                    }

                    // Change click handlers for arrows
                    if (options.arrows)
                    {
                        jQuery(showcase).find('.showcase-arrow-previous')
                            .unbind('click')
                            .click(function() {
                                if (myInterval)
                                {
                                    if (options.stoponclick) { pause_loop = true; }
                                    clearInterval(myInterval);
                                }
                                changeContent((current_id === 0) ? content_count-1 : parseInt(current_id)-1, 'previous');
                            });
                            jQuery(showcase).find('.showcase-arrow-next')
                            .unbind('click')
                            .click(function() {
                                if (myInterval)
                                {
                                    if (options.stoponclick) { pause_loop = true; }
                                    clearInterval(myInterval);
                                }
                                changeContent((current_id === content_count-1) ? 0 : parseInt(current_id)+1, 'next');
                            });
                    }

                    // Change active class for thumbnails
                    if (options.thumbnails)
                    {
                        i = 0;
                        showcase.find('.showcase-thumbnail').each(function()
                        {
                            var object = jQuery(this);
                            object.removeClass('active');
                            if (i === current_id) { object.addClass('active'); }
                            i++;
                        });
                    }

                    // If caption is set to 'show'
                    if (options.show_caption === 'show') { jQuery(obj2).find('.showcase-caption').show(); }
                }

                // Change active class for buttons
                if (options.buttons)
                {
                    i = 0;
                    showcase.find('.showcase-button-wrapper span').each(function()
                    {
                        var object = jQuery(this);
                        object.removeClass('active');
                        if (i === current_id) { object.addClass('active'); }
                        i++;
                    });
                }

                // A function that runs on content change, if it exists.
                if (typeof options.custom_function == 'function')
                {
                    options.custom_function();
                }
            }
        }

        function afterAnimation(obj)
        {
            if (options.dynamic_height) { content_container.stop(true, true).animate({ height: obj.find('.showcase-content').children().height() }, 200); }
            animating = false;
        }

        // Slide thumbnail wrapper
        var thumbnailSlidePosition = 0;
        function slideThumbnailWrapper(direction, check, backwardforward)
        {
            var doTheSlide = true;
            var thumbnailHeightOrWidth = getElementHeight(jQuery(thumb_wrapper).find('.showcase-thumbnail'));
            if (options.thumbnails_direction === 'horizontal')
            {
                thumbnailHeightOrWidth = getElementWidth(jQuery(thumb_wrapper).find('.showcase-thumbnail'));
            }
            var multiplySlidePosition = 1;

            // Set slide x
            if (options.thumbnails_slidex === 0) { options.thumbnails_slidex = thumbnailsPerPage; }

            // Check if we need to do the slide
            if (check)
            {
                var thumbnailSlidePositionCopy = thumbnailSlidePosition;
                var thumbnailsScrolled = 0;
                while (thumbnailSlidePositionCopy < 0)
                {
                    if (options.thumbnails_direction === 'horizontal')
                    {
                        thumbnailSlidePositionCopy += getElementWidth(jQuery(thumbnailArray[0]));
                    }
                    else
                    {
                        thumbnailSlidePositionCopy += getElementHeight(jQuery(thumbnailArray[0]));
                    }
                    thumbnailsScrolled++;
                }

                var firstVisible = thumbnailsScrolled;
                var lastVisible = thumbnailsPerPage + thumbnailsScrolled -1;

                // Check if the next active thumbnail is outside the visible area
                if (current_id >= firstVisible && current_id <= lastVisible) { doTheSlide = false; }

                // If the next active thumbnail is far away..
                var distance;
                if ((current_id - lastVisible) > options.thumbnails_slidex)
                {
                    distance = current_id - lastVisible;

                    while (distance > options.thumbnails_slidex)
                    {
                        distance -= options.thumbnails_slidex;
                        multiplySlidePosition++;
                    }
                }
                else if ((firstVisible - current_id) > options.thumbnails_slidex)
                {
                    distance =  firstVisible - current_id;

                    while (distance > options.thumbnails_slidex)
                    {
                        distance -= options.thumbnails_slidex;
                        multiplySlidePosition++;
                    }
                }
                else { multiplySlidePosition = 1; }
            }

            if (direction === 'forward' && doTheSlide)
            {
                if (options.thumbnails_direction === 'vertical' && options.content_height < (thumbnailStretch + thumbnailSlidePosition))
                {
                    thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
                }
                else if (options.thumbnails_direction === 'horizontal' && options.content_width < (thumbnailStretch + thumbnailSlidePosition))
                {
                    thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
                }
                else if (current_id === 0)
                {
                    if (!backwardforward) { thumbnailSlidePosition = 0; }
                }
                if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.animate({ left: thumbnailSlidePosition }, 300); }
                else { thumb_wrapper.animate({ top: thumbnailSlidePosition }, 300); }
            }
            else if (doTheSlide)
            {
                if (thumbnailSlidePosition < 0)
                {
                    thumbnailSlidePosition += thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
                }
                else if (current_id === content_count-1)
                {
                    if (!backwardforward)
                    {
                        thumbnailSlidePosition -= thumbnailHeightOrWidth * (options.thumbnails_slidex * multiplySlidePosition);
                    }
                }
                else { thumbnailSlidePosition = 0; }
                if (options.thumbnails_direction === 'horizontal') { thumb_wrapper.animate({ left: thumbnailSlidePosition }, 300); }
                else { thumb_wrapper.animate({ top: thumbnailSlidePosition }, 300); }
            }
        }

        // Displays the caption
        function displayCaption(container, fadeOut)
        {
            var caption = container.find('.showcase-caption');
            if (!fadeOut)
            {
                if (options.show_caption === 'onload') { caption.fadeIn(300); }
                else if (options.show_caption === 'onhover')
                {
                    jQuery(container).mouseenter(function()
                    {
                        caption.fadeIn(300);
                    });

                    jQuery(container).mouseleave(function()
                    {
                        caption.stop(true, true).fadeOut(100);
                    });
                }
            }
            else { caption.stop(true, true).fadeOut(300); }
        }

        // Displays the anchors in the current slide
        function displayAnchors(container, fadeOut)
        {
            // Get each anchor tooltip
            container.find('.showcase-tooltips a').each(function()
            {
                if (!fadeOut)
                {
                    // Get coordinates
                    var coords = jQuery(this).attr('coords');
                    coords = coords.split(',');

                    // Style and position anchor
                    jQuery(this).addClass('showcase-plus-anchor');
                    jQuery(this).css('position', 'absolute');
                    jQuery(this).css('display', 'none');
                    jQuery(this).css('width', options.tooltip_icon_width);
                    jQuery(this).css('height', options.tooltip_icon_height);
                    jQuery(this).css('left', parseInt(coords[0]) - (parseInt(options.tooltip_icon_width)/2));
                    jQuery(this).css('top', parseInt(coords[1]) - (parseInt(options.tooltip_icon_height)/2));
                    var content = jQuery(this).html();
                    jQuery(this).mouseenter(function()
                    {
                        animateTooltip(container, coords[0], coords[1], content);
                    });
                    jQuery(this).mouseleave(function()
                    {
                        animateTooltip(container, coords[0], coords[1], content);
                    });
                    jQuery(this).html('');
                    jQuery(this).fadeIn(300);
                }
                else
                {
                    jQuery(this).stop(true, true).fadeOut(300);
                }
            });
        }

        // Controls the animation for the tooltips
        var tooltip = null;
        function animateTooltip(container, x, y, content)
        {
            // if tooltip is null (doesn't exsist)
            if (tooltip === null)
            {
                // Create the tooltip
                tooltip = jQuery(document.createElement('div'))
                    .addClass('showcase-tooltip')
                    .css('display', 'none')
                    .css('position', 'absolute')
                    .css('max-width', options.tooltip_width)
                    .html(content);
                container.append(tooltip);

                // Position the tooltip (this is where we try not to display the tooltip outside the content wrapper)
                var tooltip_paddingx = parseInt(tooltip.css('padding-right'))*2 + parseInt(tooltip.css('border-right-width'))*2;
                var tooltip_paddingy = parseInt(tooltip.css('padding-bottom'))*2 + parseInt(tooltip.css('border-bottom-width'))*2;
                lastx = parseInt(x) + tooltip.width() + tooltip_paddingx;
                lasty = parseInt(y) + tooltip.height() + tooltip_paddingy;

                if (lastx < options.content_width)
                {
                    tooltip.css('left', parseInt(x) + parseInt(options.tooltip_offsetx));
                }
                else
                {
                    tooltip.css('left', (parseInt(x) - parseInt(options.tooltip_offsetx)) - (parseInt(tooltip.width()) + parseInt(options.tooltip_offsetx)));
                }

                if (lasty < options.content_height)
                {
                    tooltip.css('top', parseInt(y) + parseInt(options.tooltip_offsety));
                }
                else
                {
                    tooltip.css('top', (parseInt(y) - parseInt(options.tooltip_offsety)) - (parseInt(tooltip.height()) + parseInt(tooltip_paddingy)));
                }

                // Fade in the tooltip
                tooltip.fadeIn(400);
            }
            else
            {
                // Fade out the tooltip
                tooltip.fadeOut(400);
                // Remove it from the DOM
                tooltip.remove();
                // And set the variable to null
                tooltip = null;
            }
        }

        /* Returns the correct height for the element, including padding and borders. */
        function getElementHeight(el, incHeight, incMargin, incPadding, incBorders)
        {
            incHeight = typeof(incHeight) !== 'undefined' ? incHeight : true;
            incMargin = typeof(incMargin) !== 'undefined' ? incMargin : true;
            incPadding = typeof(incPadding) !== 'undefined' ? incPadding : true;
            incBorders = typeof(incBorders) !== 'undefined' ? incBorders : true;
            var elHeight = (incHeight) ? jQuery((el)).height() : 0;
            var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-top')) + parseFloat(jQuery(el).css('margin-bottom')) : 0;
            var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-top')) + parseFloat(jQuery(el).css('padding-bottom')) : 0;
            var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-top-width')) + parseFloat(jQuery((el)).css('border-bottom-width')) : 0;
            elHeight += elMargin + elPadding + elBorder;
            return elHeight;
        }

        /* Returns the correct width for the element, including width, margin, padding and borders. */
        function getElementWidth(el, incWidth, incMargin, incPadding, incBorders)
        {
            incWidth = typeof(incWidth) !== 'undefined' ? incWidth : true;
            incMargin = typeof(incMargin) !== 'undefined' ? incMargin : true;
            incPadding = typeof(incPadding) !== 'undefined' ? incPadding : true;
            incBorders = typeof(incBorders) !== 'undefined' ? incBorders : true;
            var elWidth = (incWidth) ? jQuery((el)).width() : 0;
            var elMargin = (incMargin) ? parseFloat(jQuery((el)).css('margin-left')) + parseFloat(jQuery(el).css('margin-right')) : 0;
            var elPadding = (incPadding) ? parseFloat(jQuery((el)).css('padding-left')) + parseFloat(jQuery((el)).css('padding-right')) : 0;
            var elBorder = (incBorders) ? parseFloat(jQuery((el)).css('border-left-width')) + parseFloat(jQuery((el)).css('border-right-width')) : 0;
            elWidth += elMargin + elPadding + elBorder;
            return elWidth;
        }

        // Traces the mouse position (used for positioning anchors)
        if (options.mousetrace)
        {
            // Create the div tha displays the coordinates
            var mousetrace = jQuery(document.createElement('div'))
                .css('position', 'absolute')
                .css('top', '0')
                .css('background-color', '#fff')
                .css('color', '#000')
                .css('padding', '3px 5px')
                .css('x-index', '30')
                .html('X: 0 Y: 0');
            showcase.append(mousetrace);
            var offset = showcase.offset();

            // Print the coordinates
            content_container.mousemove(function(e){ mousetrace.html('X: ' + (e.pageX - offset.left)  + ' Y: ' + (e.pageY - offset.top)); });
        }

        // Show all content on one page
        $('#awOnePageButton').click(function showInOnePage()
        {
            if ($('.view-page').is(':visible'))
            {
                var temp_container = jQuery(document.createElement('div'));
                temp_container.addClass('showcase-onepage');
                showcase.before(temp_container);

                // Disable auto change on click
                if (myInterval) { pause_loop = true; clearInterval(myInterval); }

                $(this).find('.view-page').hide();
                $(this).find('.view-slide').show();
                showcase.hide();

                $.each(contentArray, function(index, value)
                {
                    obj = getContent(index);
                    obj.css('position', 'relative');
                    temp_container.append(obj);

                    displayAnchors(obj);
                    displayCaption(obj);

                    if (options.dynamic_height) { obj.css('height', obj.find('.showcase-content').children().height()); }
                    else { obj.css('height', options.content_height); }
                });

                var clear = jQuery(document.createElement('div'));
                clear.addClass('clear');
                temp_container.append(clear);
            }
            else
            {
                $('.showcase-onepage').remove();
                $(this).find('.view-page').show();
                $(this).find('.view-slide').hide();
                showcase.show();
            }

            return false;
        });

        // The correct width is returned when all content is fully loaded.
        var addedContentArray = [];
        function updateContentViewlineWidth()
        {
            content_viewline_width = 0;
            content_container.children('div').each(function()
            {
                content_viewline_width += $(this).find('.showcase-content').children().width();
                addedContentArray.push($(this));
            });
        }

        // Remove loading class
        showcase.removeClass('showcase-load');
    };

})(jQuery);
(function($) {
    
    $.fn.slideshowCustomFunctions = function() {
        if($("#textbox-wrapper").length == 1){
            $("#textbox-wrapper").centerTextboxWrapper();
        }
    }
    
    $.fn.centerTextboxWrapper = function() {
        if(this.hasClass('center')){
            this.css('margin-left','-'+(this.width()/2)+'px');
        }
    }

})(jQuery);
/*
 * Created by Olayode Ezekiel <olayode@konga.com>
 */

var ccwpMouseWheelEvt = function (e) {

    if(e.originalEvent){
        var sl = this.scrollLeft + ((e.originalEvent.wheelDelta > 0)? -200 : 200);
        ccwpDoScroll(sl, this);
    }

    return false;
};

var ccwpSliderMoveTo = function (e) {
    var button = jQuery(e.currentTarget);
    var drt = button.attr('data-slide');
    var slider = button.parents('.ccwp-main-container').find('.ccwp-for-slider')[0];
    
    var sl = slider.scrollLeft + ((drt == 'left')? -200 : 200);
    ccwpDoScroll(sl, slider);
    
    e.preventDefault();
    
};

var ccwpDoScroll = function(value, slider){
    value = (!isNaN(Number(value))? Number(value) : false);
    if(value !== false){
        jQuery(slider).stop().animate({scrollLeft: value}, '500', 'swing', function() {});
    }
};

jQuery(document).ready(function(){
    jQuery(".konga-mousewheel-horizontal-slider").on("mousewheel", ccwpMouseWheelEvt);
});

/*************** Vaimo.JpiFrontend ***************/
/*
 * Developed by Vaimo Sweden AB @ 2012
 *
 * Notes:
 * All the selectors used must have the jQuery syntax.
 * The default selectors correspond to the "Vaimo Imitate" theme. Other themes may require the changing of the selectors.
 *
 * More info: wiki.vaimo.com/docu/wiki
 *
 */

(function($){
    //"use strict";

    $.fn.vaimoJpiFrontend = function(options, customFunctions, customBinders){

        //Private variables
        var thisProductContainer = this;
        var optionElementToLoad = null;
        var lookupLastPos;
        var lookupLastPos_ix;
        var gallery;

        var settings = $.extend({
            attributeIds : null,
            msg_more_options : null,
            confProductId : null,
            lookup : null,
            mainImageSelector : ".product-image a img",
            categoryListMainImageSelector : "",
            gallerySelector : '.more-views ul',
            galleryImagesSelector : ".more-views a img",
            priceSelector : ".product-options-bottom .price",
            selectedItemInfo : null,
            qty_sel : 0,
            useConfImages : "No",
            useForSimples : "No",
            optionsRenderMethod : "Buttons",
            isGalleryRendered : true,
            enabledDebug : false,
            debugMode : "Console",
            isCategory : false,
            categoryAllowClickOnDisabledOptions : true
        }, options || {});

        var functions = $.extend({
            //The awesome functions
            adjustPrice : function(price) {
            $(settings.priceSelector).each(function(){
                if (price){
                    thisProductContainer.find(settings.priceSelector).replaceWith(price);
                }
            });
        },

        adjustPriceHtml : function(price_html) {
            $(settings.priceSelector).each(function(){
                if (price_html){
                    thisProductContainer.find(settings.priceSelector).replaceWith(price_html);
                }
            });
        },

        hasStockBelow : function(lut, ix) {
            // Are we at bottom level ?
            if (typeof lut['qty'] != 'undefined' && typeof lut['qty'] != 'object') {
                return {qty:lut['qty'], backorders:lut['backorders'], manage_stock:lut['manage_stock']};
            }

            if (ix < settings.attributeIds.length){
                // Not at bottom, we need positive result from at least one below
                for( var optId in lut ){
                    if (lut.hasOwnProperty(optId)){
                        var optionStock = this.hasStockBelow(lut[optId], ix+1);
                        if (this.isAvailableInStock(optionStock)) {
                            return optionStock;
                        }
                    }
                }
            }

            // None had stock below, return false
            return false;
        },

        lookupFirstBelow : function(lut, key, ix) {
            // Are we at bottom level ?
            if (typeof lut[key] !="undefined" && lut[key]) {
                return lut[key];
            }

            // Not at bottom, keep looking deeper
            for (var optId in lut) {
                if (ix+1 > settings.attributeIds.length) { break };
                if (lut.hasOwnProperty(optId)) {
                    var r = this.lookupFirstBelow(lut[optId], key, ix+1);
                    if (r) { return r; }
                }
            }

            // None had key defined below (or it was empty)
            return false;
        },

        getOptionsStockInfo : function(lut, ix) {
            // Check each option, if it has stock below
            qtyArray = {};
            for( var optId in lut ){
                if( lut.hasOwnProperty(optId) ){
                    qtyArray[optId] = this.hasStockBelow(lut[optId], ix+1);
                }
            }
            return qtyArray;
        },

        isAvailableInStock : function(stockItem) {
            return (stockItem.qty > 0 || stockItem.backorders || (typeof stockItem.manage_stock != 'undefined' && !stockItem.manage_stock));
        },

        // This will walk through super attributes after position "ix" and
        // enable or disable buttons according to simple product availability
        enableDisableFromLevel : function(lut, ix, productId){
            // Here we decide if we start from the top of the lookup array.
            if( !lut ){
                lut = settings.lookup;
                ix = 0;
            }

            // Keep track of selected variant and qty
            var selectedItemInfo;

            // Go through options, trace selection
            // Enable/disable options according to stock status
            while(ix < settings.attributeIds.length) {
                var aid = settings.attributeIds[ix];
                // First disable all nodes on this level
                $('.' + productId + '_jpi_attr_' + aid).each( function() {
                    $(this).attr('disabled', 'disabled');
                } );

                // Enable buttons at this level according to stock
                var stockInfo = this.getOptionsStockInfo(lut, ix);
                var firstOpt, option;
                var optionsArray = new Array();
                for (var oid2 in stockInfo){
                    if (stockInfo.hasOwnProperty(oid2)){
                        if (!firstOpt ) { firstOpt = oid2; }
                        optionsArray[0] = $('#' + productId + '_jpi_option_' + aid + "-" + oid2); // Buttons
                        optionsArray[1] = $('#' + productId + '_jpi_option_' + aid + "-" + oid2 + "_selectOption"); // Selects
                        for (var i=0; i<optionsArray.length; i++) {
                            option = optionsArray[i];
                            if (option){

                                if (this.isAvailableInStock(stockInfo[oid2])){
                                    option.removeAttr('disabled');
                                }

                                if (ix == settings.attributeIds.length-1 && option.hasClass("attribute-selected")){
                                    selectedItemInfo = this.isAvailableInStock(stockInfo[oid2]) ? lut[oid2] : null;
                                }

                                // Update main image and price
                                if(option.hasClass('attribute-selected') && typeof selectedItemInfo != "undefined"){
                                    if(lut[oid2]['backorders']) {
//                                        $('button.btn-cart').html('Preorder <i class="icon"></i>');
                                        $('button.btn-cart').html('Buy Now');
                                    } else {
                                        $('button.btn-cart').html('Buy Now');
                                    }

                                    var price, price_html;
                                    if (selectedItemInfo['price_html'] !== undefined) {
                                        price_html = selectedItemInfo['price_html']
                                        this.adjustPriceHtml(price_html);
                                    } else {
                                        price = selectedItemInfo['price'];
                                        this.adjustPrice(price);
                                    }
                                }
                            }
                        }
                    }
                }

                // If this option is not available in stock, suppress it
                var optionElement = $('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]);
                var optionValue = optionElement.val();
                if (optionValue && !stockInfo[optionValue]){
                    optionElement.val('');
                    $('#' + productId + '_jpi_option_' + aid + "-" + optionValue).removeClass("attribute-selected");
                }

                //  Continue in LUT
                lut = lut[ optionValue ? optionValue : firstOpt ];
                ix++;
            }

            settings.selectedItemInfo = selectedItemInfo;
        },

        restoreOnLoad : function() {
            // Restore the old load function
            if (optionElementToLoad) {
                optionElementToLoad.onload = this.old_load_f ;
                optionElementToLoad = null;
                this.old_load_f = null;
            }
        },

        // Check that all options are specified before adding to cart
        checkAddToCart : function(productId) {
            for (var ix=0; ix < settings.attributeIds.length; ix++ )  {
                var v = $('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]).val();
                if (!v){
                    alert( this.msg_more_options );
                    return false;
                }
            }
            return true;
        },

        replaceMainImage : function(src, dataZoomImage){
                //thisProductContainer.find(settings.mainImageSelector).fadeTo(500,0);


                thisProductContainer.find(settings.mainImageSelector).attr('src', src);
                thisProductContainer.find(settings.mainImageSelector).attr('data-zoom', dataZoomImage);
                if (!settings.isCategory) { //On the category page we still need the image to point at the product page
                    thisProductContainer.find(settings.mainImageSelector).parent('a').attr('href', dataZoomImage);
                }
                //thisProductContainer.find(settings.mainImageSelector).fadeTo(500,1);
                if ($('.media-container').length > 0) {
                    var options = {
                        parent: 'body',
                        parent: '.col-main'
                    };

                    //Removing touch event which prevents from scrolling down the page
                    if( isMobile() ) {
                        options.touch = false;
                    }

                    var $zoom = $('#zoom-target').easyZoom(options);
                    $zoom.data('easyZoom').gallery('.more-views li a');
                }





            return false;
        },

        setMainImageFromGallery : function(){
            if (gallery.length > 0){
                thisProductContainer.find(settings.mainImageSelector).attr('src', gallery[0].main);
                thisProductContainer.find(settings.mainImageSelector).attr('data-zoom', gallery[0].zoom);
                $('.emulate-img img').attr('src', thisProductContainer.find(settings.mainImageSelector).attr('data-zoom'));
                if (!settings.isCategory) { //On the category page we still need the image to point at the product page
                    thisProductContainer.find(settings.mainImageSelector).parent('a').attr('href', gallery[0].zoom);
                }
            }
        },

        // AdjustGallery takes care of what happens when the gallery is being reloaded. It is invoked by
        // the function optionClick();
        //
        // This must change the thumbnais according to the gallery and also the main image
        adjustGallery : function(useConf) {
            var newSetOfImages = true;
            if (useConf == "No") { useConf = false; } else { useConf = true; }

            if (!useConf) {
                //It is not enough to replace the href and src in our thumbs because one color may have more images
                //than another. Let's empty the gallery and rebuild it
                thisProductContainer.find(settings.gallerySelector).empty();
                var newGallery = '';
                for (var i in gallery){
                    if (is_int(i)) {
                        var imageMain = gallery[i].main;
                        var imageThumb = gallery[i].thumb;
                        var imageZoom = gallery[i].zoom;
                        newGallery += '<li><a rel="group" data-easyzoom-source="' + imageMain + '" href="' + imageMain + '"><img src="' + imageThumb + '" data-main="' + imageMain + '" data-zoom="' + imageZoom + '" /></a></li>';

                        if (imageMain ==  thisProductContainer.find(settings.mainImageSelector).attr('src')) {
                            newSetOfImages = false;
                        }
                    }
                }
            } else {
                //We must keep the original images there in this case, so we don't empty gallery first
                thisProductContainer.find(settings.gallerySelector).find('li.image-from-simple').remove();
                var newGallery = '';
                for (var i in gallery){
                    if (this.is_int(i)) {
                        var imageMain = gallery[i].main;
                        var imageThumb = gallery[i].thumb;
                        var imageZoom = gallery[i].zoom;
                        newGallery += '<li><a rel="group" data-easyzoom-source="' + imageMain + '" href="' + imageMain + '"><img src="' + imageThumb + '" data-main="' + imageMain + '" data-zoom="' + imageZoom + '" /></a></li>';

                        if (imageMain ==  thisProductContainer.find(settings.mainImageSelector).attr('src')) {
                            newSetOfImages = false;
                        }
                    }
                }
            }

            //thisProductContainer.find(settings.gallerySelector).closest('.more-views').prepend('<ul></ul>');

            thisProductContainer.find(settings.gallerySelector).closest('.bx-wrapper').remove();
            if($('.product-essential .more-views ul.thumbs-slider').length == 0) {
                $('.product-essential .more-views').prepend('<ul class="thumbs-slider"></ul>');
            }

            thisProductContainer.find(settings.gallerySelector).prepend(newGallery);

            binders.bindGalleryImages();


            if (newSetOfImages && !useConf){
                //setMainImageFromGallery();
                thisProductContainer.find(settings.gallerySelector).find('li:first-child').click();
                thisProductContainer.find(settings.gallerySelector).find('li:first-child a').addClass('active');
            } else if (useConf) {
                thisProductContainer.find(settings.gallerySelector).find('li:first-child').click();
                thisProductContainer.find(settings.gallerySelector).find('li:first-child a').addClass('active');
                //$('#zoom-target').easyZoom(options);
            }


        },

        is_int : function (value){
            if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
                return true;
            } else {
                return false;
            }
        },

        /* optionClick is the function called when the user clicks on a button/selector on the product page
         * and or category page
         *
         * thisButton : The button that invoiced the action
         * attributeId, optionId : Parameters that show the attribute and the value that the click button corresponds to
         */
        optionClick : function ( thisButton, attributeId, optionId, productId ) {
            var previouslySelectedOptionId = $('#' + productId + "_jpi_hidden_attr_" + attributeId).val();
            if (previouslySelectedOptionId != optionId || settings.optionsRenderMethod != "Both") { // This is in case we have both select and buttons rendered and connected
                // We should also make sure that options after jpi_frontend one are adjusted according to stock situation
                // First walk past already chosen options (which are obviously in stock)
                var currentLookup = settings.lookup;
                var ix = 0;
                while (settings.attributeIds[ix] != attributeId) {
                    var oid = $('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]).val();
                    if (oid == "") {
                        alert ("optionClick - No value - should not happen");
                    }
                    else {
                        currentLookup = currentLookup[oid];
                    }
                    ix++;
                }

                // Handle current attribute, follow it in lookup
                //currentLookup = currentLookup[opt_id]; ix++;

                // Change the hidden input
                $('#' + productId + "_jpi_hidden_attr_" + attributeId).val(optionId);

                // Remove class on previous selected
                if (previouslySelectedOptionId) {
                    $('#' + productId + '_jpi_option_' + attributeId + "-" + previouslySelectedOptionId).removeClass("attribute-selected");
                }

                // Add class on selected one
                $(thisButton).addClass("attribute-selected");

                // For those that are left, we accept chosen options as long as there are choices in stock
                this.enableDisableFromLevel(currentLookup, ix, productId);

                // Get Gallery from Json info
                gallery = this.lookupFirstBelow(currentLookup[optionId], "media_gallery", ix+1);

                if (gallery && gallery.length > 0 && settings.isGalleryRendered) {
                    this.adjustGallery(settings.useConfImages);
                } else if (typeof gallery[0] != "undefined") {
                    this.replaceMainImage(gallery[0].main, gallery[0].zoom);
                } else {
                    if (settings.debugMode) { console.log('Vaimo_JpiFrontend debug : The gallery for this option seems to be empty!'); }
                }

                // Store current position in lookup
                lookupLastPos = currentLookup[optionId];
                lookupLastPos_ix = ix + 1;
            } else { // Something must still be done
                $(thisButton).addClass("attribute-selected");
            }
        }

        //End of the functions
    }, customFunctions || {});

    var binders = $.extend({

        bindOptionButtons : function(){
            thisProductContainer.find('.attribute-button-text').on('click', function(){
                if ($(this).attr('disabled') != 'disabled' || settings.categoryAllowClickOnDisabledOptions) {
                    var productId = $(this).data('productid');
                    var attributeId = $(this).data('attributeid');
                    var optionId = $(this).data('optionid');

                    if (typeof optionId != undefined && optionId != null && optionId != "") {
                        functions.optionClick(this, attributeId, optionId, productId);
                    }
                    $('.attribute-select-text.attribute-' + attributeId).val(optionId);
                }
            });
        },

        bindOptionSelects : function(){
            thisProductContainer.find('.attribute-select-text').on('change', function(){
                if ($(this).attr('disabled') != 'disabled') {
                    var productId = $(this).data('productid');
                    var attributeId = $(this).data('attributeid');
                    var optionId = $(this).val();

                    if (typeof optionId != undefined && optionId != null && optionId != "") {
                        functions.optionClick(this, attributeId, optionId, productId);
                    }
                    $('#' + productId + '_jpi_option_' + attributeId + "-" + optionId).click();
                }
            });
        },

        bindGalleryImages : function(){
            thisProductContainer.find(settings.gallerySelector + ' li').off('click');
            thisProductContainer.find(settings.gallerySelector + ' li').on('click', function(){
                if ($(this).attr('disabled') != 'disabled') {
                    thisProductContainer.find(settings.gallerySelector + ' li a').removeClass('active');
                    $(this).find('a').addClass('active');
                    functions.replaceMainImage($(this).children('a').children('img').data('main'), $(this).children('a').children('img').data('zoom'));

                    return false;
                }
            });
            jQuery(document).trigger("initMoreViewsSlider", [ 80, 6 ]);
        }
    }, customBinders || {});

    // Build in functions that cannot be overriden
    debugMessage = function (message) {
        if (settings.enabledDebug){
            switch (settings.debugMode) {
                case "Console" :
                    console.log(message);
                    break;
                case "Alert" :
                    alert(message);
                    break;
                case "Both" :
                    console.log(message);
                    alert(message);
                    break;
            }
        }
    };

    if ($(settings.gallerySelector).length == 0) {
        settings.isGalleryRendered = false;
        debugMessage('Vaimo_JpiFrontend debug : The product gallery seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
    }

    if ($(settings.mainImageSelector).length == 0) {
        debugMessage('Vaimo_JpiFrontend debug : The main product image seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
    }

    if ($(settings.priceSelector).length == 0) {
        debugMessage('Vaimo_JpiFrontend debug : The main product price to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
    }

    if (settings.isCategory) {
        settings.mainImageSelector = settings.categoryListMainImageSelector;
        if ($(settings.categoryListMainImageSelector).length == 0) {
            debugMessage('Vaimo_JpiFrontend debug : The main category product image on the category listing seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
        }
    }

    window.jpiSettings = settings;
    window.jpiFunctions = functions;

    this.each(function () {

        this.attributeIds = settings.attributeIds;
        this.msg_more_options = settings.msg_more_options;
        this.confProductId = settings.confProductId;
        this.lookup = settings.lookup;
        this.mainImageSelector = settings.mainImageSelector;
        this.categoryListMainImageSelector = settings.categoryListMainImageSelector;
        this.gallerySelector = settings.gallerySelector;
        this.galleryImagesSelector = settings.galleryImagesSelector;
        this.priceSelector = settings.priceSelector;
        this.selectedItemInfo = settings.selectedItemInfo;
        this.qty_sel = settings.qty_sel;
        this.useConfImages = settings.useConfImages;
        this.useForSimples = settings.useForSimples;
        this.optionsRenderMethod = settings.optionsRenderMethod;
        this.isGalleryRendered = settings.isGalleryRendered;
        this.enabledDebug = settings.enabledDebug;
        this.debugMode = settings.debugMode;
        this.isCategory = settings.isCategory;
        this.categoryAllowClickOnDisabledOptions = settings.categoryAllowClickOnDisabledOptions;

        this.adjustPrice = functions.adjustPrice;
        this.adjustPriceHtml = functions.adjustPriceHtml;
        this.hasStockBelow = functions.hasStockBelow;
        this.lookupFirstBelow = functions.lookupFirstBelow;
        this.getOptionsStockInfo = functions.getOptionsStockInfo;
        this.isAvailableInStock = functions.isAvailableInStock;
        this.enableDisableFromLevel = functions.enableDisableFromLevel;
        this.restoreOnLoad = functions.restoreOnLoad;
        this.checkAddToCart = functions.checkAddToCart;
        this.replaceMainImage = functions.replaceMainImage;
        this.setMainImageFromGallery = functions.setMainImageFromGallery;
        this.adjustGallery = functions.adjustGallery;
        this.optionClick = functions.optionClick;
        this.is_int = functions.is_int;

        this.bindOptionButtons = binders.bindOptionButtons;
        this.bindOptionSelects = binders.bindOptionSelects;
        this.bindGalleryImages = binders.bindGalleryImages;

    });

    //Let's call some function now that the plugin is initialized (remember the document is already 'ready' here)
    if ( settings.useForSimples == 'No' ) { //Default case
        this.get(0).enableDisableFromLevel(false, 0, settings.confProductId);
        switch (settings.optionsRenderMethod) {
            case "Buttons":
                binders.bindOptionButtons();
                break;
            case "Selects":
                binders.bindOptionSelects();
                break;
            case "Both":
                binders.bindOptionButtons();
                binders.bindOptionSelects();
                //connectButtonsAndSelects();
                break;
        }

        if (settings.isGalleryRendered && typeof functions.bindGalleryImages!="undefined") { functions.bindGalleryImages(); }
        thisProductContainer.find('.attribute-selected:first-child').click(); //Let's click to invoke the clickOption here
    } else { //Only Image funcitonality needed
        if (settings.isGalleryRendered) { functions.bindGalleryImages(); }
    }
};

//Initializing the module
$(document).ready(function(){
    $initialized = false;
    var customFunctionsArray = null;
    var customBindersArray = null;
    if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }
    if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }

    $('.product-data-mine').each(function(){
        var lookupMalformedJSON = $(this).data('lookup');
        var JSONLookup = lookupMalformedJSON.replace(/'/g, '\"');
        var optionsArray = {
            attributeIds : $(this).data('attributeids'),
            confProductId : $(this).data('confproductid'),
            messageMoreOptions : $(this).data('messagemoreoptions'),
            lookup : $.parseJSON(JSONLookup),
            useConfImages : $('.jpi-settings').data('useimagesfromconfigurable'),
            optionsRenderMethod : $('.jpi-settings').data('optionsrendermethod'),
            enabledDebug : $('.jpi-settings').data('enabledebug'),
            debugMode : $('.jpi-settings').data('debugmode'),
            mainImageSelector : $('.jpi-settings').data('mainimageselector'),
            categoryListMainImageSelector : $('.jpi-settings').data('categorylistmainimageselector'),
            gallerySelector : $('.jpi-settings').data('galleryselector'),
            galleryImageSelector : $('.jpi-settings').data('galleryimageselector'),
            priceSelector : $('.jpi-settings').data('priceselector'),
            isCategory : $('.jpi-settings').data('iscategory')
        };

        if ($('.jpi-settings').data('iscategory')){
            $(this).parents('.item').vaimoJpiFrontend(optionsArray, customFunctionsArray);
        } else {
            $(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray);
        }

        $initialized = true;
    });

    if (!$initialized) {
        if ( $('.jpi-settings').length > 0 && $('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes') == 'Yes' ) {
            var optionsArray = {
                useForSimples : $('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes')
            };

            if ($('.jpi-settings').data('iscategory')){
                $(this).parents('.item').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
            } else {
                $(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
            }
        }
    }
});

//Initializing the module for quickview
$(document).on("quickviewUpdate", function(){
    $initialized = false;
    var customFunctionsArray = null;
    var customBindersArray = null;
    if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }
    if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }

    $('.product-data-mine').each(function(){
        var lookupMalformedJSON = $(this).data('lookup');
        var JSONLookup = lookupMalformedJSON.replace(/'/g, '\"');
        var optionsArray = {
            attributeIds : $(this).data('attributeids'),
            confProductId : $(this).data('confproductid'),
            messageMoreOptions : $(this).data('messagemoreoptions'),
            lookup : $.parseJSON(JSONLookup),
            useConfImages : $('.jpi-settings').data('useimagesfromconfigurable'),
            optionsRenderMethod : $('.jpi-settings').data('optionsrendermethod'),
            enabledDebug : $('.jpi-settings').data('enabledebug'),
            debugMode : $('.jpi-settings').data('debugmode'),
            mainImageSelector : $('.jpi-settings').data('mainimageselector'),
            categoryListMainImageSelector : $('.jpi-settings').data('categorylistmainimageselector'),
            gallerySelector : $('.jpi-settings').data('galleryselector'),
            galleryImageSelector : $('.jpi-settings').data('galleryimageselector'),
            priceSelector : $('.jpi-settings').data('priceselector')
        };

        $(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
        $initialized = true;
    });

    if (!$initialized) {
        if ( $('.jpi-settings').length > 0 && $('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes') == 'Yes' ) {
            var optionsArray = {
                useForSimples : $('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes')
            };
            $('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
        }
    }
});

})(jQuery);

//same code as vertnav
jQuery(document).ready(function($) {

    $('.expandlink').click(function(e){

        e.preventDefault();

        var clickedNode = $(e.target);
        var parentLi = clickedNode.closest('li');

        if(parentLi.hasClass('closed')){
            parentLi.removeClass('closed');
            parentLi.addClass('open');
            parentLi.find('ul').show();
        }
        else {
            parentLi.removeClass('open');
            parentLi.addClass('closed');
            parentLi.find('ul').hide();
        }
    });

    $('.vertnavlink span').each(function(){

        var spanWidth = $(this).width();

        $(this).closest('li').find('.expandlink').each(function(){
            $(this).css('left', (spanWidth + 20) + 'px');
            $(this).show();
        });
    });
});
jQuery(document).ready(function($){
    $('.carousel-nav a').click(function(q){
        q.preventDefault();
        targetSlide = parseInt($(this).attr('data-to'));

        //Cycles the carousel to a particular slide
        $($(this).attr('href')).carousel(targetSlide);

        //Add active-bullet class to current slide
        $(this).addClass('active-bullet').siblings().removeClass('active-bullet');
    });

    $(".carousel").live("slid", function(obj){
        //Change active bullet on slide
        $(this).find('.carousel-nav').children().eq($(this).find('.active').index()).addClass('active-bullet')
            .siblings().removeClass('active-bullet');
    });
});
jQuery(document).ready(function($)
{
    $(".swipeslideshow").each(function(){
        var swipeslideshowid = $(this).data('swipeslideshowid');
        var mousesetting = $(this).data('mouse');
        var intervalsetting = $(this).data('interval');
        var autostartsetting = $(this).data('autostart');
        var createdotssetting = $(this).data('createdots');
        var dotssetting = $(this).data('dots');
        var fullwidth = $(this).data('fullwidth');
        var height = $(this).data('height');
        var width = $(this).data('width');

        if(fullwidth == 0){
            $('#swipeslideshow_'+swipeslideshowid+'').height(height);
            $('#swipeslideshow_'+swipeslideshowid+'').width(width);
        }
        else{
            $('#swipeslideshow_'+swipeslideshowid+'').addClass('fullwidth');
        }
        
        $('#swipeslideshow_'+swipeslideshowid+'').swipeshow({          
            mouse: mousesetting, 
            interval: intervalsetting, 
            autostart: autostartsetting, 
            createdots: createdotssetting,
            $dots: $(dotssetting) 
        });
    });
});

/*! Swipeshow (c) 2013 Rico Sta. Cruz, MIT license.
 *  http://ricostacruz.com/swipeshow
 *  https://github.com/rstacruz/swipeshow
 */

;(function($){

    /**
     * Opinionated, touch-enabled simple slideshow using Cycler.js.
     *
     *     <div class="slideshow">
     *       <ul class="slides">
     *         <li class="slide"> ... </il>
     *         <li class="slide"> ... </li>
     *         <li class="slide"> ... </li>
     *       </ul>
     *
     *       <!-- optional controls: -->
     *       <button class="next"></button>
     *       <button class="previous"></button>
     *     </div>
     *
     * To use:
     *
     *     $(".slideshow").swipeshow();
     *
     * Options (all of these are optional):
     *
     *     $(".slideshow").swipeshow({
 *       autostart: true,
 *       interval: 3000,     // Time between movement (ms)
 *       initial: 0,         // First slide's index
 *       speed: 700,         // Animation speed (ms)
 *       friction: 0.3,      // What happens when you swipe out of bounds?
 *       mouse: true,        // enable mouse dragging controls?
 *       keys: true,
 *
 *       onactivate: function(){},
 *       onpause: function(){},
 *
 *       $next:     $("button.next"),
 *       $previous: $("button.previous"),
 *       $dots:     $("div.dots")
 *     });
     *
     *     $(".slideshow").swipeshow().next();
     *     $(".slideshow").swipeshow().previous();
     *     $(".slideshow").swipeshow().goTo(2);
     *
     *     $(".slideshow").swipeshow().pause();
     *     $(".slideshow").swipeshow().start();
     *
     * Assumptions it makes:
     *
     *  - Markup is like above (`.slideshow > .slides > .slide`).
     *  - Buttons (optional), by default, will be found in `.slideshow > .next` (and `.previous`)
     *  - If there are images inside the slides, it will wait to load them before
     *    starting the slideshow.
     */

    $.swipeshow = {};

    $.swipeshow.version = "0.10.6";

    // Detect transition support, jQuery 1.8+ style.
    var transitions = typeof $("<div>").css({transition: 'all'}).css('transition') == 'string';

    var touchEnabled = ('ontouchstart' in document.documentElement);

    // Checks for 3d support
    var has3d = (function() {
        var div = $("<div>");
        div.css('transform', 'translate3d(0,0,0)');
        return div.css('transform') !== '';
    })();

    // Count instances.
    var instances = 0;

    function Swipeshow(element, options) {
        this.$slideshow = $(element);
        this.$container = this.$slideshow.find('> .slides');
        this.$slides    = this.$container.find('> .slide');
        this.options    = options;
        this.tag        = '.swipeshow.swipeshow-'+(++instances);
        this.disabled   = false;

        // Buttons
        this.$next      = getElement(this.$slideshow, options.$next, '.next', '~ .controls .next');
        this.$previous  = getElement(this.$slideshow, options.$previous, '.previous', '~ .controls .previous');
        this.$dots      = getElement(this.$slideshow, options.$dots, '.dots', '~ .controls .dots');

        this._addClasses();
        this._bindButtons();
        this._buildDots();
        if (options.keys) this._bindKeys();

        this.cycler     = this._getCycler();
        if (options.autostart !== false) this._startSlideshow();

        // Bind events.
        this._bindSwipeEvents();
        this._bindHoverPausing();
        this._bindResize();

        return this;
    }

    Swipeshow.prototype = {
        // Public API: delegate to Cycler
        goTo:     function(n) { this.cycler.goTo(n); return this; },
        previous: function()  { this.cycler.previous(); return this; },
        next:     function()  { this.cycler.next(); return this; },
        pause:    function()  { this.cycler.pause(); return this; },
        start:    function()  { this.cycler.start(); return this; },

        isStarted: function()  { return this.cycler && this.cycler.isStarted(); },
        isPaused:  function()  { return !this.isStarted(); },

        defaults: {
            speed: 400,
            friction: 0.3,
            mouse: true,
            keys: true,
            swipeThreshold: { distance: 10, time: 400 }
        },

        unbind: function() {
            var $slideshow = this.$slideshow;
            var $container = this.$container;
            var $slides    = this.$slides;
            var $dots      = this.$dots;
            var tag = this.tag;

            // Kill the timer.
            this.cycler.pause();

            // Unbind the events based on their tag (eg, `swipeshow-1`).
            $container.find('img').off(tag);
            $container.off(tag);
            $(document).off(tag);
            $(window).off(tag);

            // Remove dots
            if ($dots.length) $dots.html('');

            // Unregister so that it can be initialized again later.
            $slideshow.data('swipeshow', null);

            // Remove magic classes
            $slideshow.removeClass('running paused swipeshow-active touch no-touch');
            $container.removeClass('gliding grabbed');
            $slides.removeClass('active');
            $dots.removeClass('active');
            $('html').removeClass('swipeshow-grabbed');
        },

        /**
         * Returns the cycler instance.
         */

        _getCycler: function() {
            var ss = this;
            var options = this.options;

            return new Cycler(ss.$slides, $.extend({}, options, {
                autostart: false,
                onactivate: $.proxy(this._onactivate, this),
                onpause: $.proxy(this._onpause, this),
                onstart: $.proxy(this._onstart, this)
            }));
        },

        /**
         * On slideshow activate handler for Cycler.
         */

        _onactivate: function(current, i, prev, j) {
            if (this.options.onactivate) this.options.onactivate(current, i, prev, j);

            // Set classes
            if (prev) $(prev).removeClass('active');
            if (current) $(current).addClass('active');

            // Dots
            if (this.$dots.length) {
                this.$dots.find('.dot-item.active').removeClass('active');
                this.$dots.find('.dot-item[data-index="'+i+'"]').addClass('active');

                // Modified by Vaimo
                if (this.options.replacemainimage){
                    replaceMainImage(this.$dots.find('.dot-item[data-index="'+i+'"] a.dot').attr('href'));
                }
                //End Modified by Vaimo
            }

            // Move to the slide
            this._moveToSlide(i);
        },

        /**
         * Moves to slide number `i`. (Internal)
         * For external use, just use goto().
         */

        _moveToSlide: function(i) {
            var width = this.$slideshow.width();
            setOffset(this.$container, -1 * width * i, this.options.speed);
        },

        /**
         * On slideshow pause handler. (Internal)
         */

        _onpause: function() {
            if (this.options.onpause) this.options.onpause();
            this.$slideshow
                .addClass('paused')
                .removeClass('running');
        },

        /**
         * On slideshow start handler. (Internal)
         */

        _onstart: function() {
            if (this.options.onstart) this.options.onstart();
            this.$slideshow
                .removeClass('paused')
                .addClass('running');
        },

        /**
         * Add classes to $slideshow. (Internal)
         */

        _addClasses: function() {
            this.$slideshow.addClass('paused swipeshow-active');
            this.$slideshow.addClass(touchEnabled ? 'touch' : 'no-touch');
        },

        _buildDots: function() {
            var ss    = this;
            var $dots = ss.$dots;
            var tag   = ss.tag;

            if (!$dots.length) return;

            $dots.html('').addClass('active');

            // Modified by Vaimo
            if (this.options.createdots && ss.$slides.length > 1){
                ss.$slides.each(function(i) {
                    $dots.append($(
                        "<button class='dot-item' data-index='"+i+"'>"+
                            "<span class='dot' data-number='"+(i+1)+"'>"+(i+1)+"</span>"+
                        "</button>"
                    ));
                });
            }
            //End Modified by Vaimo

            $dots.on('click'+tag, '.dot-item', function() {
                var index = +($(this).data('index'));
                ss.goTo(index);
            });

        },

        _bindKeys: function() {
            var ss = this;
            var tag = ss.tag;
            var RIGHT = 39, LEFT = 37;

            $(document).on('keyup'+tag, function(e) {
                if (e.keyCode == RIGHT)
                    ss.next();
                else if (e.keyCode == LEFT)
                    ss.previous();
            });
        },

        // Binds events to buttons.
        _bindButtons: function() {
            var ss = this;

            this.$next.on('click', function(e) {
                e.preventDefault();
                if (!ss.disabled) ss.next();
            });

            this.$previous.on('click', function(e) {
                e.preventDefault();
                if (!ss.disabled) ss.previous();
            });
        },

        /**
         * Starts the slideshow initially. (Internal)
         */

        _startSlideshow: function() {
            var ss = this;
            var $images = ss.$slideshow.find('img');

            // If there are images, defer starting until images are loaded.
            if ($images.length === 0) {
                ss.start();
            } else {
                ss.disabled = true;
                ss.$slideshow.addClass('disabled');

                $images.onloadall(function() {
                    ss.disabled = false;
                    ss.$slideshow.removeClass('disabled');
                    ss.start();
                });
            }
        },

        /**
         * Re-adjusts the slideshow after resizing the window. (Internal)
         */

        _bindResize: function() {
            var ss = this;

            $(window).on('resize'+ss.tag, function() {
                var width = ss.$slideshow.width();

                // Re-sit the current slide
                setOffset(ss.$container, -1 * width * ss.cycler.current, 0);

                // Reposition the CSS of the container and slides
                ss._reposition();
            });

            $(window).trigger('resize'+ss.tag);
        },

        /**
         * Reposition the CSS of the container and slides. (Internal)
         */

        _reposition: function() {
            var width = this.$slideshow.width();
            var count = this.$slides.length;

            this.$slides.css({ width: width });
            this.$container.css({ width: width * count });
            this.$slides.css({ visibility: 'visible' });
            this.$slides.each(function(i) { $(this).css({ left: width * i }); });
        },

        /**
         * Binds pause-on-hover behavior. (Internal)
         */

        _bindHoverPausing: function() {
            // No need for this on touch-enabled browsers.
            if (touchEnabled) return;

            var ss = this;
            var tag = ss.tag;
            var hoverPaused = false;

            ss.$slideshow.on('mouseenter'+tag, function() {
                if (!ss.isStarted()) return;
                hoverPaused = true;
                ss.pause();
            });

            ss.$slideshow.on('mouseleave'+tag, function() {
                if (!hoverPaused) return;
                hoverPaused = false;
                ss.start();
            });
        },

        /**
         * Binds swiping behavior. (Internal)
         */

        _bindSwipeEvents: function() {
            var ss = this;
            var $slideshow = ss.$slideshow;
            var $container = ss.$container;
            var c = ss.cycler;
            var options = ss.options;
            var tag = ss.tag;

            // States
            var moving = false;
            var origin;
            var start;
            var delta;
            var lastTouch;
            var minDelta; // Minimum change for it to take effect.

            var width; // widtih of the slideshow
            var length = c.list.length;
            var friction = options.friction;

            // Store the tag so it can be unbound later.
            $slideshow.data('swipeshow:tag', tag);

            // Prevent dragging of the image.
            $container.find('img').on('mousedown'+tag, function(e) {
                e.preventDefault();
            });

            $container.on('touchstart'+tag + (options.mouse ? ' mousedown'+tag : ''), function(e) {
                // Don't do anything if flash.
                if (isFlash(e)) return;

                // Only prevent mouse clicks. This allows vertical scrolling on mobile.
                // Do this before the sanity checks... you don't want the user to
                // accidentally drag the <img>.
                if (e.type === 'mousedown')
                    e.preventDefault();

                if (ss.disabled) return;
                if ($container.is(':animated')) $container.stop();

                // Make some elements hard to swipe from.
                if ($(e.target).is('button, a, input, select, [data-tappable]')) {
                    minDelta = 100;
                } else {
                    minDelta = 0;
                }

                // Add classes.
                $container.addClass('grabbed');
                $('html').addClass('swipeshow-grabbed');

                width  = $slideshow.width();
                moving = true;
                origin = { x: null };
                start  = { x: getOffset($container), started: c.isStarted() };
                delta  = 0;
                lastTouch = null;

                // Pause the slideshow, but resume it later.
                if (start.started) c.pause();
            });

            $(document).on('touchmove'+tag + (options.mouse ? ' mousemove'+tag : ''), function(e) {
                if (ss.disabled) return;
                if ($container.is(':animated')) return;
                if (!moving) return;

                // X can sometimes be NaN because the touch event may not have any X/Y info.
                var x = getX(e);
                if (isNaN(x)) return;

                // Regord the first touch now. on a touchmove, not a touchstart. They
                // sometimes return different x/y coordinates.
                if (origin.x === null) origin.x = x;

                delta = x - origin.x;

                // When swiping was triggered on a button, it should be harder to swipe from.
                if (Math.abs(delta) <= minDelta) delta = 0;

                var target = start.x + delta;
                var max = -1 * width * (length - 1);

                // Only prevent scrolling when it's moved too far to the right/left
                if (Math.abs(delta) > 3)
                    e.preventDefault();

                // Have some friction when scrolling out of bounds.
                if (target > 0) target *= friction;
                if (target < max) target = max + (target - max) * friction;

                // Record when it was last touched, so that when the finger is lifted, we
                // know how long it's been since
                lastTouch = +new Date();

                setOffset($container, target, 0);
            });

            $(document).on('touchend'+tag + (options.mouse ? ' mouseup'+tag : ''), function(e) {
                if (ss.disabled) return;
                if ($container.is(':animated')) return;
                if (!moving) return;
                if (isFlash(e)) return;

                var left  = getOffset($container);

                // Set classes
                $container.removeClass('grabbed');
                $('html').removeClass('swipeshow-grabbed');

                // Find out what slide it stopped to.
                var index = -1 * Math.round(left / width);

                // If the finger moved, but not enough to advance...
                if (lastTouch && c.current === index) {
                    var timeDelta = +new Date() - lastTouch;

                    var threshold = options.swipeThreshold;
                    // If distance is far enough, and time is short enough.
                    // I just winged these magic numbers trying to compare the experience to iOS's Photo app.
                    if (Math.abs(delta) > threshold.distance && timeDelta < threshold.time) {
                        var sign = delta < 0 ? -1 : 1;
                        index -= sign;
                    }
                }

                if (index < 0) index = 0;
                if (index > c.list.length-1) index = c.list.length-1;

                // Switch to that slide.
                c.goTo(index);

                // Restart the slideshow if it was already started before.
                if (start.started) c.start();

                // Reset.
                moving = false;
            });
        }
    };

    $.fn.swipeshow = function(options) {
        if (!options) options = {};

        options = $.extend({}, Swipeshow.prototype.defaults, options);

        $(this).each(function() {
            // Idempotency: don't do anything if it's already been initialized.
            if ($(this).data('swipeshow')) return;

            var ss = new Swipeshow(this, options);
            $(this).data('swipeshow', ss);
        });

        return $(this).data('swipeshow');
    };

    /**
     * Unbinds everything.
     */

    $.fn.unswipeshow = function() {
        return this.each(function() {
            var ss = $(this).data('swipeshow');
            if (ss) ss.unbind();
        });
    };

    /**
     * Given a list of selectors, find one that matches and is based on a given `root`.
     *
     *     getElement($(".menu"), "a", "button");
     */

    function getElement(root) {
        var arg;
        for (var i=1; i < arguments.length; ++i) {
            arg = arguments[i];
            if (typeof arg === 'string') {
                var $el = $(arg, root);
                if ($el.length) return $el;
            } else if (typeof arg === 'object' && arg.constructor === $ && arg.length) {
                return arg;
            }
        }

        return $();
    }

    var offsetTimer;

    /**
     * Sets the X offset of the given element `$el` (usually `.slides`).
     * `speed` is in milliseconds. If `speed` is `0`, it happens instantly.
     */

    function setOffset($el, left, speed) {
        $el.data('swipeshow:left', left);
        if (transitions) {
            if (speed === 0) {
                $el.css({ transform: translate(left, 0), transition: 'none' });
            } else {
                $el.css({ transform: translate(left, 0), transition: 'all '+speed+'ms ease' });
            }
        } else {
            if (speed === 0) {
                $el.css({left: left});
            } else {
                $el.animate({left: left}, speed);
            }
        }

        // Add the class to the `.slides` so it can be styled appropriately if needed.
        $el.addClass('gliding');

        if (typeof offsetTimer === 'undefined')
            clearTimeout(offsetTimer);

        offsetTimer = setTimeout(function() {
            $el.removeClass('gliding');
            offsetTimer = undefined;
        }, speed);
    }

    function translate(x,y) {
        if (has3d) {
            return 'translate3d('+x+'px,'+y+'px,0)';
        } else {
            return 'translate('+x+'px,'+y+'px)';
        }
    }

    /**
     * Find the X offset of the container ('.slides').
     * Attempting to parse it out of the transform value ("matrix(1, 0, 0, 1,
     * -200, 0)") never seems to yield the right offset, so let's just go with
     * the stored value.
     */

    function getOffset($el) {
        return $el.data('swipeshow:left') || 0;
    }

    /**
     * Extracts the X from given event object. Works for mouse or touch events.
     */

    function getX(e) {
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0])
            return e.originalEvent.touches[0].clientX;

        if (e.clientX)
            return e.clientX;
    }

    /**
     * Checks if a given event is triggered in a Flash video.
     * https://github.com/rstacruz/swipeshow/issues/14
     */

    function isFlash(e) {
        return $(e.target).is('embed, object');
    }

})(jQuery);

// ============================================================================

/*! Onloadall (c) 2012-2013 Rico Sta. Cruz, MIT license. */

(function($) {
    $.fn.onloadall = function(callback) {
        var $images = this;

        var images = {
            loaded: 0,
            total: $images.length
        };

        // Wait till all images are loaded...
        $images.on('load.onloadall', function() {
            if (++images.loaded >= images.total) { callback.apply($images); }
        });

        $(function() {
            $images.each(function() {
                if (this.complete) $(this).trigger('load.onloadall');
            });
        });

        return this;
    };
})(jQuery);

// ============================================================================

/*! Cycler (c) 2012-2013 Rico Sta. Cruz, MIT license. */

/*
 * Cycles between a given `list` at a given `interval`.
 * Simply define an `onactivate` hook.
 *
 * All the options are optional except `onactivate`.
 *
 *     c = new Cycler(list, {
 *       interval: 3000,
 *       initial: 0, // first slide's index
 *       onactivate: function(current, index, prev, prevIndex) { ... }, // Required
 *       onstart: function() { ... },
 *       onpause: function() { ... }
 *     });
 *
 * Slideshow example
 * -----------------
 *
 * The most common usecase of Cycler is to make your own carousel/slideshow
 * implementation. Here's how you might make one:
 *
 *     var $parent = $(".slideshow");
 *     var $images = $parent.find("img");
 *
 *     var c = new Cycler($images, {
 *       interval: 5000,
 *       onactivate: function(current) {
 *         $images.hide();
 *         $(current).show();
 *       }
 *     });
 *
 *     // Custom controls example
 *     $parent.find("button.next").on("click", function() { c.next(); });
 *     $parent.find("button.prev").on("click", function() { c.previous(); });
 *
 *     // Pause on hover example
 *     $parent.on("hover", function() { c.pause(); }, function() { c.start(); });
 *
 * Navigating
 * ----------
 *
 * You can switch by slides using `next()`, `previous()` and `goTo()`. When
 * these are invoked, the interval timer is reset (that is, it will take 3000ms
 * again to switch to the next slide).
 *
 * If these are called when the slideshow is paused, it should remain paused.
 *
 * Doing this will trigger the `onactivate` callback.
 *
 *     c.next();
 *     c.previous();
 *     c.goTo(0);
 *
 * The onactivate hook
 * -------------------
 *
 * This is where the magic happens. It's called everytime a new slide is activated.
 *
 * The callback takes 4 arguments: the current list item (`current`) + its
 * index in the list (`index`), and the previous item (`prev`) + its index (`prevIndex`).
 *
 *     var list = [ 'Apple', 'Banana', 'Cherry' ];
 *
 *     new Cycler(list, {
 *       onactivate: function(current, index, prev, prevIndex) {
 *         console.log("Switching from", prev, "to", current);
 *         console.log("(from", prevIndex, "to", index, ")");
 *       };
 *     });
 *
 *     // Result:
 *     //
 *     // Switching from null to "Apple" (from null to 0)
 *     // Switching from "Apple" to "Banana" (from 0 to 1)
 *     // Switching from "Banana" to "Cherry" (from 1 to 2)
 *     // Switching from "Cherry" to "Apple" (from 2 to 0)
 *
 * Pausing
 * -------
 *
 * You can pause and unpause the slideshow with `pause()` and `start()`. Note
 * that calling `start()` will reset the interval timer.
 *
 * These will call the `onpause` and `onstart` callbacks respectively.
 *
 *     c.pause();
 *     c.start();
 *
 * You can pass `true` as an argument (eg, `c.pause(true)`) to these to supress
 * triggering the callbacks.
 *
 * Properties
 * ----------
 *
 *     c.current    // Numeric index of current item
 *     c.list       // The list being cycled
 *
 * Chainability
 * ------------
 *
 * All the methods are chainable, too, so you can do:
 *
 *     c.next().pause();
 */

(function() {
    function Cycler(list, options) {
        this.interval   = options.interval || 3000;
        this.onactivate = options.onactivate || (function(){});
        this.onpause    = options.onpause || (function(){});
        this.onstart    = options.onstart || (function(){});
        this.initial    = (typeof options.initial === 'undefined') ? 0 : options.initial;
        this.autostart  = (typeof options.autostart === 'undefined') ? true : options.autostart;
        this.list       = list;
        this.current    = null;

        this.goTo(this.initial);
        if (this.autostart && typeof options.interval === 'number') this.start();

        return this;
    }

    Cycler.prototype = {
        start: function(silent) {
            var self = this;
            if ((!self.isStarted()) && (!silent)) self.onstart.apply(self);

            self.pause(true);
            self._timer = setTimeout(function() {
                self.next();
            }, self.interval);
            return self;
        },

        pause: function(silent) {
            if (this.isStarted()) {
                if (!silent) this.onpause.apply(this);
                clearTimeout(this._timer);
                this._timer = null;
            }
            return this;
        },

        // Delays the interval a bit
        restart: function(silent) {
            if (this.isStarted()) this.pause(true).start(silent);
            return this;
        },

        previous: function() {
            return this.next(-1);
        },

        isStarted: function() {
            return !! this._timer;
        },

        isPaused: function() {
            return ! this.isStarted();
        },

        next: function(i) {
            if (typeof i === 'undefined') i = 1;

            var len = this.list.length;
            if (len === 0) return this;

            // Get the index of the new item
            var idx = (this.current + i + len*2) % len;

            return this.goTo(idx);
        },

        goTo: function(idx) {
            if (typeof idx !== 'number') return this;

            var prev = this.current;
            this.current = idx;

            this.onactivate.call(this, this.list[idx], idx, this.list[prev], prev);
            this.restart(true);
            return this;
        }
    };

    window.Cycler = Cycler;
})();
(function(b,c){function a(x,d){var m={id:"zoom-panel",parent:"body",error:'Â§<p class="zoom-error">There has been a problem attempting to loading the image.</p>',loading:'<p class="fullsize-loading">Loading</p>',cursor:"crosshair",touch:true};
this.opts=b.extend({},m,d);var q=this,u=false,p=true,y=false,f,e,n,l,k,j,i,h,g,r;function v(){q.ele={$target:b(x),$source:b("img",x),$parent:b(q.opts.parent),$loader:b(q.opts.loading),$panel:b('<div id="'+q.opts.id+'" />')};
o(q.ele.$target.attr("href"));q.ele.$target.on("click",function(z){z.preventDefault();}).on("mouseenter",function(z){y=true;w(z);}).on("mousemove",function(z){if(!y){y=true;
w(z);}else{s(z);}}).on("mouseleave",function(){q.hide();y=false;});if(q.opts.touch&&"ontouchstart" in document.documentElement){x.addEventListener("touchstart",function(z){if(z.touches.length===1){z.preventDefault();
y=true;w(z);}},false);x.addEventListener("touchmove",function(z){if(z.touches.length===1){z.preventDefault();s(z);}},false);x.addEventListener("touchend",function(){q.hide();
y=false;},false);}return q;}function o(z){u=false;q.ele.$target.css("cursor","progress");q.ele.$loader.appendTo(q.ele.$target);q.ele.$zoomed=q.loadimg(z).on("error",function(){p=false;
t();}).on("load",function(){u=true;q.ele.$target.css("cursor",q.opts.cursor);q.ele.$loader.detach();q.ele.$panel.html(q.ele.$zoomed.css("position","absolute"));
if(y){q.ele.$target.trigger("mouseenter");}});}function t(){q.ele.$panel.html(q.opts.error);}function s(D){if(D.type.indexOf("touch")===0){f=D.touches[0].pageX;
e=D.touches[0].pageY;}else{f=D.pageX||f;e=D.pageY||e;}var C=q.ele.$source.offset(),A=f-C.left,B=e-C.top,E=A*g,z=B*r;E=(E>k)?k:E;z=(z>h)?h:z;if(E>0&&z>0){q.ele.$zoomed.css({left:-E,top:-z});
}}function w(z){if(q.ele.$panel.parent().length===0){q.ele.$panel.appendTo(q.ele.$parent).css("opacity",0);}q.ele.$panel.stop().animate({opacity:1},200);
n=q.ele.$source.width();j=q.ele.$source.height();l=q.ele.$panel.width();i=q.ele.$panel.height();k=q.ele.$zoomed.width()-l;h=q.ele.$zoomed.height()-i;g=k/n;
r=h/j;s(z);}this.loadimg=function(A){var z=new Image();z.src=A+"?"+(new Date()).getTime();z.onload=function(){z=null;};return b(z);};this.hide=function(){if(q.ele.$panel.parent().length){q.ele.$panel.stop().animate({opacity:0},200,function(){q.ele.$panel=q.ele.$panel.detach();
});}};this.update=function(z){this.hide();o(z);};return x.tagName.toLowerCase()==="a"?v():c;}b.fn.easyZoom=function(d){return this.each(function(){b.data(this,"easyZoom",new a(this,d));
});};a.prototype.gallery=function(d,g){var f=this,e=g?b(g):this.ele.$parent;e.on("click",d,function(j){j.preventDefault();var i=b(this).addClass("thumbnail-loading"),k=i.attr("href"),h=i.data("easyzoomSource");
f.loadimg(h).on("load",function(){f.ele.$source.attr("src",h);f.ele.$target.attr("href",k);f.update(k);i.removeClass("thumbnail-loading");});});};})(jQuery);
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
/*!
 * jQuery Cycle2; build: v20131005
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
 */

/*! core engine; version: 20131003 */
;(function($) {
    "use strict";

    var version = '20131003';

    $.fn.cycle = function( options ) {
        // fix mistakes with the ready state
        var o;
        if ( this.length === 0 && !$.isReady ) {
            o = { s: this.selector, c: this.context };
            $.fn.cycle.log('requeuing slideshow (dom not ready)');
            $(function() {
                $( o.s, o.c ).cycle(options);
            });
            return this;
        }

        return this.each(function() {
            var data, opts, shortName, val;
            var container = $(this);
            var log = $.fn.cycle.log;

            if ( container.data('cycle.opts') )
                return; // already initialized

            if ( container.data('cycle-log') === false ||
                ( options && options.log === false ) ||
                ( opts && opts.log === false) ) {
                log = $.noop;
            }

            log('--c2 init--');
            data = container.data();
            for (var p in data) {
                // allow props to be accessed sans 'cycle' prefix and log the overrides
                if (data.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                    val = data[p];
                    shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                    log(shortName+':', val, '('+typeof val +')');
                    data[shortName] = val;
                }
            }

            opts = $.extend( {}, $.fn.cycle.defaults, data, options || {});

            opts.timeoutId = 0;
            opts.paused = opts.paused || false; // #57
            opts.container = container;
            opts._maxZ = opts.maxZ;

            opts.API = $.extend ( { _container: container }, $.fn.cycle.API );
            opts.API.log = log;
            opts.API.trigger = function( eventName, args ) {
                opts.container.trigger( eventName, args );
                return opts.API;
            };

            container.data( 'cycle.opts', opts );
            container.data( 'cycle.API', opts.API );

            // opportunity for plugins to modify opts and API
            opts.API.trigger('cycle-bootstrap', [ opts, opts.API ]);

            opts.API.addInitialSlides();
            opts.API.preInitSlideshow();

            if ( opts.slides.length )
                opts.API.initSlideshow();
        });
    };

    $.fn.cycle.API = {
        opts: function() {
            return this._container.data( 'cycle.opts' );
        },
        addInitialSlides: function() {
            var opts = this.opts();
            var slides = opts.slides;
            opts.slideCount = 0;
            opts.slides = $(); // empty set

            // add slides that already exist
            slides = slides.jquery ? slides : opts.container.find( slides );

            if ( opts.random ) {
                slides.sort(function() {return Math.random() - 0.5;});
            }

            opts.API.add( slides );
        },

        preInitSlideshow: function() {
            var opts = this.opts();
            opts.API.trigger('cycle-pre-initialize', [ opts ]);
            var tx = $.fn.cycle.transitions[opts.fx];
            if (tx && $.isFunction(tx.preInit))
                tx.preInit( opts );
            opts._preInitialized = true;
        },

        postInitSlideshow: function() {
            var opts = this.opts();
            opts.API.trigger('cycle-post-initialize', [ opts ]);
            var tx = $.fn.cycle.transitions[opts.fx];
            if (tx && $.isFunction(tx.postInit))
                tx.postInit( opts );
        },

        initSlideshow: function() {
            var opts = this.opts();
            var pauseObj = opts.container;
            var slideOpts;
            opts.API.calcFirstSlide();

            if ( opts.container.css('position') == 'static' )
                opts.container.css('position', 'relative');

            $(opts.slides[opts.currSlide]).css('opacity',1).show();
            opts.API.stackSlides( opts.slides[opts.currSlide], opts.slides[opts.nextSlide], !opts.reverse );

            if ( opts.pauseOnHover ) {
                // allow pauseOnHover to specify an element
                if ( opts.pauseOnHover !== true )
                    pauseObj = $( opts.pauseOnHover );

                pauseObj.hover(
                    function(){ opts.API.pause( true ); },
                    function(){ opts.API.resume( true ); }
                );
            }

            // stage initial transition
            if ( opts.timeout ) {
                slideOpts = opts.API.getSlideOpts( opts.currSlide );
                opts.API.queueTransition( slideOpts, slideOpts.timeout + opts.delay );
            }

            opts._initialized = true;
            opts.API.updateView( true );
            opts.API.trigger('cycle-initialized', [ opts ]);
            opts.API.postInitSlideshow();
        },

        pause: function( hover ) {
            var opts = this.opts(),
                slideOpts = opts.API.getSlideOpts(),
                alreadyPaused = opts.hoverPaused || opts.paused;

            if ( hover )
                opts.hoverPaused = true;
            else
                opts.paused = true;

            if ( ! alreadyPaused ) {
                opts.container.addClass('cycle-paused');
                opts.API.trigger('cycle-paused', [ opts ]).log('cycle-paused');

                if ( slideOpts.timeout ) {
                    clearTimeout( opts.timeoutId );
                    opts.timeoutId = 0;

                    // determine how much time is left for the current slide
                    opts._remainingTimeout -= ( $.now() - opts._lastQueue );
                    if ( opts._remainingTimeout < 0 || isNaN(opts._remainingTimeout) )
                        opts._remainingTimeout = undefined;
                }
            }
        },

        resume: function( hover ) {
            var opts = this.opts(),
                alreadyResumed = !opts.hoverPaused && !opts.paused,
                remaining;

            if ( hover )
                opts.hoverPaused = false;
            else
                opts.paused = false;


            if ( ! alreadyResumed ) {
                opts.container.removeClass('cycle-paused');
                // #gh-230; if an animation is in progress then don't queue a new transition; it will
                // happen naturally
                if ( opts.slides.filter(':animated').length === 0 )
                    opts.API.queueTransition( opts.API.getSlideOpts(), opts._remainingTimeout );
                opts.API.trigger('cycle-resumed', [ opts, opts._remainingTimeout ] ).log('cycle-resumed');
            }
        },

        add: function( slides, prepend ) {
            var opts = this.opts();
            var oldSlideCount = opts.slideCount;
            var startSlideshow = false;
            var len;

            if ( $.type(slides) == 'string')
                slides = $.trim( slides );

            $( slides ).each(function(i) {
                var slideOpts;
                var slide = $(this);

                if ( prepend )
                    opts.container.prepend( slide );
                else
                    opts.container.append( slide );

                opts.slideCount++;
                slideOpts = opts.API.buildSlideOpts( slide );

                if ( prepend )
                    opts.slides = $( slide ).add( opts.slides );
                else
                    opts.slides = opts.slides.add( slide );

                opts.API.initSlide( slideOpts, slide, --opts._maxZ );

                slide.data('cycle.opts', slideOpts);
                opts.API.trigger('cycle-slide-added', [ opts, slideOpts, slide ]);
            });

            opts.API.updateView( true );

            startSlideshow = opts._preInitialized && (oldSlideCount < 2 && opts.slideCount >= 1);
            if ( startSlideshow ) {
                if ( !opts._initialized )
                    opts.API.initSlideshow();
                else if ( opts.timeout ) {
                    len = opts.slides.length;
                    opts.nextSlide = opts.reverse ? len - 1 : 1;
                    if ( !opts.timeoutId ) {
                        opts.API.queueTransition( opts );
                    }
                }
            }
        },

        calcFirstSlide: function() {
            var opts = this.opts();
            var firstSlideIndex;
            firstSlideIndex = parseInt( opts.startingSlide || 0, 10 );
            if (firstSlideIndex >= opts.slides.length || firstSlideIndex < 0)
                firstSlideIndex = 0;

            opts.currSlide = firstSlideIndex;
            if ( opts.reverse ) {
                opts.nextSlide = firstSlideIndex - 1;
                if (opts.nextSlide < 0)
                    opts.nextSlide = opts.slides.length - 1;
            }
            else {
                opts.nextSlide = firstSlideIndex + 1;
                if (opts.nextSlide == opts.slides.length)
                    opts.nextSlide = 0;
            }
        },

        calcNextSlide: function() {
            var opts = this.opts();
            var roll;
            if ( opts.reverse ) {
                roll = (opts.nextSlide - 1) < 0;
                opts.nextSlide = roll ? opts.slideCount - 1 : opts.nextSlide-1;
                opts.currSlide = roll ? 0 : opts.nextSlide+1;
            }
            else {
                roll = (opts.nextSlide + 1) == opts.slides.length;
                opts.nextSlide = roll ? 0 : opts.nextSlide+1;
                opts.currSlide = roll ? opts.slides.length-1 : opts.nextSlide-1;
            }
        },

        calcTx: function( slideOpts, manual ) {
            var opts = slideOpts;
            var tx;
            if ( manual && opts.manualFx )
                tx = $.fn.cycle.transitions[opts.manualFx];
            if ( !tx )
                tx = $.fn.cycle.transitions[opts.fx];

            if (!tx) {
                tx = $.fn.cycle.transitions.fade;
                opts.API.log('Transition "' + opts.fx + '" not found.  Using fade.');
            }
            return tx;
        },

        prepareTx: function( manual, fwd ) {
            var opts = this.opts();
            var after, curr, next, slideOpts, tx;

            if ( opts.slideCount < 2 ) {
                opts.timeoutId = 0;
                return;
            }
            if ( manual && ( !opts.busy || opts.manualTrump ) ) {
                opts.API.stopTransition();
                opts.busy = false;
                clearTimeout(opts.timeoutId);
                opts.timeoutId = 0;
            }
            if ( opts.busy )
                return;
            if ( opts.timeoutId === 0 && !manual )
                return;

            curr = opts.slides[opts.currSlide];
            next = opts.slides[opts.nextSlide];
            slideOpts = opts.API.getSlideOpts( opts.nextSlide );
            tx = opts.API.calcTx( slideOpts, manual );

            opts._tx = tx;

            if ( manual && slideOpts.manualSpeed !== undefined )
                slideOpts.speed = slideOpts.manualSpeed;

            // if ( opts.nextSlide === opts.currSlide )
            //     opts.API.calcNextSlide();

            // ensure that:
            //      1. advancing to a different slide
            //      2. this is either a manual event (prev/next, pager, cmd) or
            //              a timer event and slideshow is not paused
            if ( opts.nextSlide != opts.currSlide &&
                (manual || (!opts.paused && !opts.hoverPaused && opts.timeout) )) { // #62

                opts.API.trigger('cycle-before', [ slideOpts, curr, next, fwd ]);
                if ( tx.before )
                    tx.before( slideOpts, curr, next, fwd );

                after = function() {
                    opts.busy = false;
                    // #76; bail if slideshow has been destroyed
                    if (! opts.container.data( 'cycle.opts' ) )
                        return;

                    if (tx.after)
                        tx.after( slideOpts, curr, next, fwd );
                    opts.API.trigger('cycle-after', [ slideOpts, curr, next, fwd ]);
                    opts.API.queueTransition( slideOpts);
                    opts.API.updateView( true );
                };

                opts.busy = true;
                if (tx.transition)
                    tx.transition(slideOpts, curr, next, fwd, after);
                else
                    opts.API.doTransition( slideOpts, curr, next, fwd, after);

                opts.API.calcNextSlide();
                opts.API.updateView();
            } else {
                opts.API.queueTransition( slideOpts );
            }
        },

        // perform the actual animation
        doTransition: function( slideOpts, currEl, nextEl, fwd, callback) {
            var opts = slideOpts;
            var curr = $(currEl), next = $(nextEl);
            var fn = function() {
                // make sure animIn has something so that callback doesn't trigger immediately
                next.animate(opts.animIn || { opacity: 1}, opts.speed, opts.easeIn || opts.easing, callback);
            };

            next.css(opts.cssBefore || {});
            curr.animate(opts.animOut || {}, opts.speed, opts.easeOut || opts.easing, function() {
                curr.css(opts.cssAfter || {});
                if (!opts.sync) {
                    fn();
                }
            });
            if (opts.sync) {
                fn();
            }
        },

        queueTransition: function( slideOpts, specificTimeout ) {
            var opts = this.opts();
            var timeout = specificTimeout !== undefined ? specificTimeout : slideOpts.timeout;
            if (opts.nextSlide === 0 && --opts.loop === 0) {
                opts.API.log('terminating; loop=0');
                opts.timeout = 0;
                if ( timeout ) {
                    setTimeout(function() {
                        opts.API.trigger('cycle-finished', [ opts ]);
                    }, timeout);
                }
                else {
                    opts.API.trigger('cycle-finished', [ opts ]);
                }
                // reset nextSlide
                opts.nextSlide = opts.currSlide;
                return;
            }
            if ( timeout ) {
                opts._lastQueue = $.now();
                if ( specificTimeout === undefined )
                    opts._remainingTimeout = slideOpts.timeout;

                if ( !opts.paused && ! opts.hoverPaused ) {
                    opts.timeoutId = setTimeout(function() {
                        opts.API.prepareTx( false, !opts.reverse );
                    }, timeout );
                }
            }
        },

        stopTransition: function() {
            var opts = this.opts();
            if ( opts.slides.filter(':animated').length ) {
                opts.slides.stop(false, true);
                opts.API.trigger('cycle-transition-stopped', [ opts ]);
            }

            if ( opts._tx && opts._tx.stopTransition )
                opts._tx.stopTransition( opts );
        },

        // advance slide forward or back
        advanceSlide: function( val ) {
            var opts = this.opts();
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
            opts.nextSlide = opts.currSlide + val;

            if (opts.nextSlide < 0)
                opts.nextSlide = opts.slides.length - 1;
            else if (opts.nextSlide >= opts.slides.length)
                opts.nextSlide = 0;

            opts.API.prepareTx( true,  val >= 0 );
            return false;
        },

        buildSlideOpts: function( slide ) {
            var opts = this.opts();
            var val, shortName;
            var slideOpts = slide.data() || {};
            for (var p in slideOpts) {
                // allow props to be accessed sans 'cycle' prefix and log the overrides
                if (slideOpts.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                    val = slideOpts[p];
                    shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                    opts.API.log('['+(opts.slideCount-1)+']', shortName+':', val, '('+typeof val +')');
                    slideOpts[shortName] = val;
                }
            }

            slideOpts = $.extend( {}, $.fn.cycle.defaults, opts, slideOpts );
            slideOpts.slideNum = opts.slideCount;

            try {
                // these props should always be read from the master state object
                delete slideOpts.API;
                delete slideOpts.slideCount;
                delete slideOpts.currSlide;
                delete slideOpts.nextSlide;
                delete slideOpts.slides;
            } catch(e) {
                // no op
            }
            return slideOpts;
        },

        getSlideOpts: function( index ) {
            var opts = this.opts();
            if ( index === undefined )
                index = opts.currSlide;

            var slide = opts.slides[index];
            var slideOpts = $(slide).data('cycle.opts');
            return $.extend( {}, opts, slideOpts );
        },

        initSlide: function( slideOpts, slide, suggestedZindex ) {
            var opts = this.opts();
            slide.css( slideOpts.slideCss || {} );
            if ( suggestedZindex > 0 )
                slide.css( 'zIndex', suggestedZindex );

            // ensure that speed settings are sane
            if ( isNaN( slideOpts.speed ) )
                slideOpts.speed = $.fx.speeds[slideOpts.speed] || $.fx.speeds._default;
            if ( !slideOpts.sync )
                slideOpts.speed = slideOpts.speed / 2;

            slide.addClass( opts.slideClass );
        },

        updateView: function( isAfter, isDuring ) {
            var opts = this.opts();
            if ( !opts._initialized )
                return;
            var slideOpts = opts.API.getSlideOpts();
            var currSlide = opts.slides[ opts.currSlide ];

            if ( ! isAfter && isDuring !== true ) {
                opts.API.trigger('cycle-update-view-before', [ opts, slideOpts, currSlide ]);
                if ( opts.updateView < 0 )
                    return;
            }

            if ( opts.slideActiveClass ) {
                opts.slides.removeClass( opts.slideActiveClass )
                    .eq( opts.currSlide ).addClass( opts.slideActiveClass );
            }

            if ( isAfter && opts.hideNonActive )
                opts.slides.filter( ':not(.' + opts.slideActiveClass + ')' ).hide();

            opts.API.trigger('cycle-update-view', [ opts, slideOpts, currSlide, isAfter ]);

            if ( isAfter )
                opts.API.trigger('cycle-update-view-after', [ opts, slideOpts, currSlide ]);
        },

        getComponent: function( name ) {
            var opts = this.opts();
            var selector = opts[name];
            if (typeof selector === 'string') {
                // if selector is a child, sibling combinator, adjancent selector then use find, otherwise query full dom
                return (/^\s*[\>|\+|~]/).test( selector ) ? opts.container.find( selector ) : $( selector );
            }
            if (selector.jquery)
                return selector;

            return $(selector);
        },

        stackSlides: function( curr, next, fwd ) {
            var opts = this.opts();
            if ( !curr ) {
                curr = opts.slides[opts.currSlide];
                next = opts.slides[opts.nextSlide];
                fwd = !opts.reverse;
            }

            // reset the zIndex for the common case:
            // curr slide on top,  next slide beneath, and the rest in order to be shown
            $(curr).css('zIndex', opts.maxZ);

            var i;
            var z = opts.maxZ - 2;
            var len = opts.slideCount;
            if (fwd) {
                for ( i = opts.currSlide + 1; i < len; i++ )
                    $( opts.slides[i] ).css( 'zIndex', z-- );
                for ( i = 0; i < opts.currSlide; i++ )
                    $( opts.slides[i] ).css( 'zIndex', z-- );
            }
            else {
                for ( i = opts.currSlide - 1; i >= 0; i-- )
                    $( opts.slides[i] ).css( 'zIndex', z-- );
                for ( i = len - 1; i > opts.currSlide; i-- )
                    $( opts.slides[i] ).css( 'zIndex', z-- );
            }

            $(next).css('zIndex', opts.maxZ - 1);
        },

        getSlideIndex: function( el ) {
            return this.opts().slides.index( el );
        }

    }; // API

// default logger
    $.fn.cycle.log = function log() {
        /*global console:true */
        if (window.console && console.log)
            return;
    };

    $.fn.cycle.version = function() { return 'Cycle2: ' + version; };

// helper functions

    function lowerCase(s) {
        return (s || '').toLowerCase();
    }

// expose transition object
    $.fn.cycle.transitions = {
        custom: {
        },
        none: {
            before: function( opts, curr, next, fwd ) {
                opts.API.stackSlides( next, curr, fwd );
                opts.cssBefore = { opacity: 1, display: 'block' };
            }
        },
        fade: {
            before: function( opts, curr, next, fwd ) {
                var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
                opts.API.stackSlides( curr, next, fwd );
                opts.cssBefore = $.extend(css, { opacity: 0, display: 'block' });
                opts.animIn = { opacity: 1 };
                opts.animOut = { opacity: 0 };
            }
        },
        fadeout: {
            before: function( opts , curr, next, fwd ) {
                var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
                opts.API.stackSlides( curr, next, fwd );
                opts.cssBefore = $.extend(css, { opacity: 1, display: 'block' });
                opts.animOut = { opacity: 0 };
            }
        },
        scrollHorz: {
            before: function( opts, curr, next, fwd ) {
                opts.API.stackSlides( curr, next, fwd );
                var w = opts.container.css('overflow','hidden').width();
                opts.cssBefore = { left: fwd ? w : - w, top: 0, opacity: 1, display: 'block' };
                opts.cssAfter = { zIndex: opts._maxZ - 2, left: 0 };
                opts.animIn = { left: 0 };
                opts.animOut = { left: fwd ? -w : w };
            }
        }
    };

// @see: http://jquery.malsup.com/cycle2/api
    $.fn.cycle.defaults = {
        allowWrap:        true,
        autoSelector:     '.cycle-slideshow[data-cycle-auto-init!=false]',
        delay:            0,
        easing:           null,
        fx:              'fade',
        hideNonActive:    true,
        loop:             0,
        manualFx:         undefined,
        manualSpeed:      undefined,
        manualTrump:      true,
        maxZ:             100,
        pauseOnHover:     false,
        reverse:          false,
        slideActiveClass: 'cycle-slide-active',
        slideClass:       'cycle-slide',
        slideCss:         { position: 'absolute', top: 0, left: 0 },
        slides:          '> img',
        speed:            500,
        startingSlide:    0,
        sync:             true,
        timeout:          4000,
        updateView:       -1
    };

// automatically find and run slideshows
    $(document).ready(function() {
        $( $.fn.cycle.defaults.autoSelector ).cycle();
    });

})(jQuery);

/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130304 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        autoHeight: 0 // setting this option to false disables autoHeight logic
    });

    $(document).on( 'cycle-initialized', function( e, opts ) {
        var autoHeight = opts.autoHeight;
        var t = $.type( autoHeight );
        var resizeThrottle = null;
        var ratio;

        if ( t !== 'string' && t !== 'number' )
            return;

        // bind events
        opts.container.on( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
        opts.container.on( 'cycle-destroyed', onDestroy );

        if ( autoHeight == 'container' ) {
            opts.container.on( 'cycle-before', onBefore );
        }
        else if ( t === 'string' && /\d+\:\d+/.test( autoHeight ) ) {
            // use ratio
            ratio = autoHeight.match(/(\d+)\:(\d+)/);
            ratio = ratio[1] / ratio[2];
            opts._autoHeightRatio = ratio;
        }

        // if autoHeight is a number then we don't need to recalculate the sentinel
        // index on resize
        if ( t !== 'number' ) {
            // bind unique resize handler per slideshow (so it can be 'off-ed' in onDestroy)
            opts._autoHeightOnResize = function () {
                clearTimeout( resizeThrottle );
                resizeThrottle = setTimeout( onResize, 50 );
            };

            $(window).on( 'resize orientationchange', opts._autoHeightOnResize );
        }

        setTimeout( onResize, 30 );

        function onResize() {
            initAutoHeight( e, opts );
        }
    });

    function initAutoHeight( e, opts ) {
        var clone, height, sentinelIndex;
        var autoHeight = opts.autoHeight;

        if ( autoHeight == 'container' ) {
            height = $( opts.slides[ opts.currSlide ] ).outerHeight();
            opts.container.height( height );
        }
        else if ( opts._autoHeightRatio ) {
            opts.container.height( opts.container.width() / opts._autoHeightRatio );
        }
        else if ( autoHeight === 'calc' || ( $.type( autoHeight ) == 'number' && autoHeight >= 0 ) ) {
            if ( autoHeight === 'calc' )
                sentinelIndex = calcSentinelIndex( e, opts );
            else if ( autoHeight >= opts.slides.length )
                sentinelIndex = 0;
            else
                sentinelIndex = autoHeight;

            // only recreate sentinel if index is different
            //if ( sentinelIndex == opts._sentinelIndex )
                return;

            opts._sentinelIndex = sentinelIndex;
            if ( opts._sentinel )
                opts._sentinel.remove();


                // clone existing slide as sentinel
                clone = $( opts.slides[ sentinelIndex ].clone(true) );

                // #50; remove special attributes from cloned content
                clone.removeAttr( 'id name rel' ).find( '[id],[name],[rel]' ).removeAttr( 'id name rel' );

                clone.css({
                    position: 'static',
                    visibility: 'hidden',
                    display: 'block'
                }).prependTo( opts.container ).addClass('cycle-sentinel cycle-slide').removeClass('cycle-slide-active');
                clone.find( '*' ).css( 'visibility', 'hidden' );

                opts._sentinel = clone;




        }
    }

    function calcSentinelIndex( e, opts ) {
        var index = 0, max = -1;

        // calculate tallest slide index
        opts.slides.each(function(i) {
            var h = $(this).height();
            if ( h > max ) {
                max = h;
                index = i;
            }
        });
        return index;
    }

    function onBefore( e, opts, outgoing, incoming, forward ) {
        var h = $(incoming).outerHeight();
        var duration = opts.sync ? opts.speed / 2 : opts.speed;
        opts.container.animate( { height: h }, duration );
    }

    function onDestroy( e, opts ) {
        if ( opts._autoHeightOnResize ) {
            $(window).off( 'resize orientationchange', opts._autoHeightOnResize );
            opts._autoHeightOnResize = null;
        }
        opts.container.off( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
        opts.container.off( 'cycle-destroyed', onDestroy );
        opts.container.off( 'cycle-before', onBefore );

        if ( opts._sentinel ) {
            opts._sentinel.remove();
            opts._sentinel = null;
        }
    }

})(jQuery);

/*! caption plugin for Cycle2;  version: 20130306 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        caption:          '> .cycle-caption',
        captionTemplate:  '{{slideNum}} / {{slideCount}}',
        overlay:          '> .cycle-overlay',
        overlayTemplate:  '<div>{{title}}</div><div>{{desc}}</div>',
        captionModule:    'caption'
    });

    $(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
        if ( opts.captionModule !== 'caption' )
            return;
        var el;
        $.each(['caption','overlay'], function() {
            var name = this;
            var template = slideOpts[name+'Template'];
            var el = opts.API.getComponent( name );
            if( el.length && template ) {
                el.html( opts.API.tmpl( template, slideOpts, opts, currSlide ) );
                el.show();
            }
            else {
                el.hide();
            }
        });
    });

    $(document).on( 'cycle-destroyed', function( e, opts ) {
        var el;
        $.each(['caption','overlay'], function() {
            var name = this, template = opts[name+'Template'];
            if ( opts[name] && template ) {
                el = opts.API.getComponent( 'caption' );
                el.empty();
            }
        });
    });

})(jQuery);

/*! command plugin for Cycle2;  version: 20130707 */
(function($) {
    "use strict";

    var c2 = $.fn.cycle;

    $.fn.cycle = function( options ) {
        var cmd, cmdFn, opts;
        var args = $.makeArray( arguments );

        if ( $.type( options ) == 'number' ) {
            return this.cycle( 'goto', options );
        }

        if ( $.type( options ) == 'string' ) {
            return this.each(function() {
                var cmdArgs;
                cmd = options;
                opts = $(this).data('cycle.opts');

                if ( opts === undefined ) {
                    c2.log('slideshow must be initialized before sending commands; "' + cmd + '" ignored');
                    return;
                }
                else {
                    cmd = cmd == 'goto' ? 'jump' : cmd; // issue #3; change 'goto' to 'jump' internally
                    cmdFn = opts.API[ cmd ];
                    if ( $.isFunction( cmdFn )) {
                        cmdArgs = $.makeArray( args );
                        cmdArgs.shift();
                        return cmdFn.apply( opts.API, cmdArgs );
                    }
                    else {
                        c2.log( 'unknown command: ', cmd );
                    }
                }
            });
        }
        else {
            return c2.apply( this, arguments );
        }
    };

// copy props
    $.extend( $.fn.cycle, c2 );

    $.extend( c2.API, {
        next: function() {
            var opts = this.opts();
            if ( opts.busy && ! opts.manualTrump )
                return;

            var count = opts.reverse ? -1 : 1;
            if ( opts.allowWrap === false && ( opts.currSlide + count ) >= opts.slideCount )
                return;

            opts.API.advanceSlide( count );
            opts.API.trigger('cycle-next', [ opts ]).log('cycle-next');
        },

        prev: function() {
            var opts = this.opts();
            if ( opts.busy && ! opts.manualTrump )
                return;
            var count = opts.reverse ? 1 : -1;
            if ( opts.allowWrap === false && ( opts.currSlide + count ) < 0 )
                return;

            opts.API.advanceSlide( count );
            opts.API.trigger('cycle-prev', [ opts ]).log('cycle-prev');
        },

        destroy: function() {
            this.stop(); //#204

            var opts = this.opts();
            var clean = $.isFunction( $._data ) ? $._data : $.noop;  // hack for #184 and #201
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
            opts.API.stop();
            opts.API.trigger( 'cycle-destroyed', [ opts ] ).log('cycle-destroyed');
            opts.container.removeData();
            clean( opts.container[0], 'parsedAttrs', false );

            // #75; remove inline styles
            if ( ! opts.retainStylesOnDestroy ) {
                opts.container.removeAttr( 'style' );
                opts.slides.removeAttr( 'style' );
                opts.slides.removeClass( opts.slideActiveClass );
            }
            opts.slides.each(function() {
                $(this).removeData();
                clean( this, 'parsedAttrs', false );
            });
        },

        jump: function( index ) {
            // go to the requested slide
            var fwd;
            var opts = this.opts();
            if ( opts.busy && ! opts.manualTrump )
                return;
            var num = parseInt( index, 10 );
            if (isNaN(num) || num < 0 || num >= opts.slides.length) {
                opts.API.log('goto: invalid slide index: ' + num);
                return;
            }
            if (num == opts.currSlide) {
                opts.API.log('goto: skipping, already on slide', num);
                return;
            }
            opts.nextSlide = num;
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
            opts.API.log('goto: ', num, ' (zero-index)');
            fwd = opts.currSlide < opts.nextSlide;
            opts.API.prepareTx( true, fwd );
        },

        stop: function() {
            var opts = this.opts();
            var pauseObj = opts.container;
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
            opts.API.stopTransition();
            if ( opts.pauseOnHover ) {
                if ( opts.pauseOnHover !== true )
                    pauseObj = $( opts.pauseOnHover );
                pauseObj.off('mouseenter mouseleave');
            }
            opts.API.trigger('cycle-stopped', [ opts ]).log('cycle-stopped');
        },

        reinit: function() {
            var opts = this.opts();
            opts.API.destroy();
            opts.container.cycle();
        },

        remove: function( index ) {
            var opts = this.opts();
            var slide, slideToRemove, slides = [], slideNum = 1;
            for ( var i=0; i < opts.slides.length; i++ ) {
                slide = opts.slides[i];
                if ( i == index ) {
                    slideToRemove = slide;
                }
                else {
                    slides.push( slide );
                    $( slide ).data('cycle.opts').slideNum = slideNum;
                    slideNum++;
                }
            }
            if ( slideToRemove ) {
                opts.slides = $( slides );
                opts.slideCount--;
                $( slideToRemove ).remove();
                if (index == opts.currSlide)
                    opts.API.advanceSlide( 1 );
                else if ( index < opts.currSlide )
                    opts.currSlide--;
                else
                    opts.currSlide++;

                opts.API.trigger('cycle-slide-removed', [ opts, index, slideToRemove ]).log('cycle-slide-removed');
                opts.API.updateView();
            }
        }

    });

// listen for clicks on elements with data-cycle-cmd attribute
    $(document).on('click.cycle', '[data-cycle-cmd]', function(e) {
        // issue cycle command
        e.preventDefault();
        var el = $(this);
        var command = el.data('cycle-cmd');
        var context = el.data('cycle-context') || '.cycle-slideshow';
        $(context).cycle(command, el.data('cycle-arg'));
    });


})(jQuery);

/*! hash plugin for Cycle2;  version: 20130905 */
(function($) {
    "use strict";

    $(document).on( 'cycle-pre-initialize', function( e, opts ) {
        onHashChange( opts, true );

        opts._onHashChange = function() {
            onHashChange( opts, false );
        };

        $( window ).on( 'hashchange', opts._onHashChange);
    });

    $(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
        if ( slideOpts.hash && ( '#' + slideOpts.hash ) != window.location.hash ) {
            opts._hashFence = true;
            window.location.hash = slideOpts.hash;
        }
    });

    $(document).on( 'cycle-destroyed', function( e, opts) {
        if ( opts._onHashChange ) {
            $( window ).off( 'hashchange', opts._onHashChange );
        }
    });

    function onHashChange( opts, setStartingSlide ) {
        var hash;
        if ( opts._hashFence ) {
            opts._hashFence = false;
            return;
        }

        hash = window.location.hash.substring(1);

        opts.slides.each(function(i) {
            if ( $(this).data( 'cycle-hash' ) == hash ) {
                if ( setStartingSlide === true ) {
                    opts.startingSlide = i;
                }
                else {
                    var fwd = opts.currSlide < i;
                    opts.nextSlide = i;
                    opts.API.prepareTx( true, fwd );
                }
                return false;
            }
        });
    }

})(jQuery);

/*! loader plugin for Cycle2;  version: 20130307 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        loader: false
    });

    $(document).on( 'cycle-bootstrap', function( e, opts ) {
        var addFn;

        if ( !opts.loader )
            return;

        // override API.add for this slideshow
        addFn = opts.API.add;
        opts.API.add = add;

        function add( slides, prepend ) {
            var slideArr = [];
            if ( $.type( slides ) == 'string' )
                slides = $.trim( slides );
            else if ( $.type( slides) === 'array' ) {
                for (var i=0; i < slides.length; i++ )
                    slides[i] = $(slides[i])[0];
            }

            slides = $( slides );
            var slideCount = slides.length;

            if ( ! slideCount )
                return;

            slides.hide().appendTo('body').each(function(i) { // appendTo fixes #56
                var count = 0;
                var slide = $(this);
                var images = slide.is('img') ? slide : slide.find('img');
                slide.data('index', i);
                // allow some images to be marked as unimportant (and filter out images w/o src value)
                images = images.filter(':not(.cycle-loader-ignore)').filter(':not([src=""])');
                if ( ! images.length ) {
                    --slideCount;
                    slideArr.push( slide );
                    return;
                }

                count = images.length;
                images.each(function() {
                    // add images that are already loaded
                    if ( this.complete ) {
                        imageLoaded();
                    }
                    else {
                        $(this).load(function() {
                            imageLoaded();
                        }).error(function() {
                                if ( --count === 0 ) {
                                    // ignore this slide
                                    opts.API.log('slide skipped; img not loaded:', this.src);
                                    if ( --slideCount === 0 && opts.loader == 'wait') {
                                        addFn.apply( opts.API, [ slideArr, prepend ] );
                                    }
                                }
                            });
                    }
                });

                function imageLoaded() {
                    if ( --count === 0 ) {
                        --slideCount;
                        addSlide( slide );
                    }
                }
            });

            if ( slideCount )
                opts.container.addClass('cycle-loading');


            function addSlide( slide ) {
                var curr;
                if ( opts.loader == 'wait' ) {
                    slideArr.push( slide );
                    if ( slideCount === 0 ) {
                        // #59; sort slides into original markup order
                        slideArr.sort( sorter );
                        addFn.apply( opts.API, [ slideArr, prepend ] );
                        opts.container.removeClass('cycle-loading');
                    }
                }
                else {
                    curr = $(opts.slides[opts.currSlide]);
                    addFn.apply( opts.API, [ slide, prepend ] );
                    curr.show();
                    opts.container.removeClass('cycle-loading');
                }
            }

            function sorter(a, b) {
                return a.data('index') - b.data('index');
            }
        }
    });

})(jQuery);

/*! pager plugin for Cycle2;  version: 20130525 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        pager:            '> .cycle-pager',
        pagerActiveClass: 'cycle-pager-active',
        pagerEvent:       'click.cycle',
        pagerTemplate:    '<span>&bull;</span>'
    });

    $(document).on( 'cycle-bootstrap', function( e, opts, API ) {
        // add method to API
        API.buildPagerLink = buildPagerLink;
    });

    $(document).on( 'cycle-slide-added', function( e, opts, slideOpts, slideAdded ) {
        if ( opts.pager ) {
            opts.API.buildPagerLink ( opts, slideOpts, slideAdded );
            opts.API.page = page;
        }
    });

    $(document).on( 'cycle-slide-removed', function( e, opts, index, slideRemoved ) {
        if ( opts.pager ) {
            var pagers = opts.API.getComponent( 'pager' );
            pagers.each(function() {
                var pager = $(this);
                $( pager.children()[index] ).remove();
            });
        }
    });

    $(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
        var pagers;

        if ( opts.pager ) {
            pagers = opts.API.getComponent( 'pager' );
            pagers.each(function() {
                $(this).children().removeClass( opts.pagerActiveClass )
                    .eq( opts.currSlide ).addClass( opts.pagerActiveClass );
            });
        }
    });

    $(document).on( 'cycle-destroyed', function( e, opts ) {
        var pager = opts.API.getComponent( 'pager' );

        if ( pager ) {
            pager.children().off( opts.pagerEvent ); // #202
            if ( opts.pagerTemplate )
                pager.empty();
        }
    });

    function buildPagerLink( opts, slideOpts, slide ) {
        var pagerLink;
        var pagers = opts.API.getComponent( 'pager' );
        pagers.each(function() {
            var pager = $(this);
            if ( slideOpts.pagerTemplate ) {
                var markup = opts.API.tmpl( slideOpts.pagerTemplate, slideOpts, opts, slide[0] );
                pagerLink = $( markup ).appendTo( pager );
            }
            else {
                pagerLink = pager.children().eq( opts.slideCount - 1 );
            }
            pagerLink.on( opts.pagerEvent, function(e) {
                e.preventDefault();
                opts.API.page( pager, e.currentTarget);
            });
        });
    }

    function page( pager, target ) {
        /*jshint validthis:true */
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;

        var index = pager.children().index( target );
        var nextSlide = index;
        var fwd = opts.currSlide < nextSlide;
        if (opts.currSlide == nextSlide) {
            return; // no op, clicked pager for the currently displayed slide
        }
        opts.nextSlide = nextSlide;
        opts.API.prepareTx( true, fwd );
        opts.API.trigger('cycle-pager-activated', [opts, pager, target ]);
    }

})(jQuery);


/*! prevnext plugin for Cycle2;  version: 20130709 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        next:           '> .cycle-next',
        nextEvent:      'click.cycle',
        disabledClass:  'disabled',
        prev:           '> .cycle-prev',
        prevEvent:      'click.cycle',
        swipe:          false
    });

    $(document).on( 'cycle-initialized', function( e, opts ) {
        opts.API.getComponent( 'next' ).on( opts.nextEvent, function(e) {
            e.preventDefault();
            opts.API.next();
        });

        opts.API.getComponent( 'prev' ).on( opts.prevEvent, function(e) {
            e.preventDefault();
            opts.API.prev();
        });

        if ( opts.swipe ) {
            var nextEvent = opts.swipeVert ? 'swipeUp.cycle' : 'swipeLeft.cycle swipeleft.cycle';
            var prevEvent = opts.swipeVert ? 'swipeDown.cycle' : 'swipeRight.cycle swiperight.cycle';
            opts.container.on( nextEvent, function(e) {
                opts.API.next();
            });
            opts.container.on( prevEvent, function() {
                opts.API.prev();
            });
        }
    });

    $(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
        if ( opts.allowWrap )
            return;

        var cls = opts.disabledClass;
        var next = opts.API.getComponent( 'next' );
        var prev = opts.API.getComponent( 'prev' );
        var prevBoundry = opts._prevBoundry || 0;
        var nextBoundry = (opts._nextBoundry !== undefined)?opts._nextBoundry:opts.slideCount - 1;

        if ( opts.currSlide == nextBoundry )
            next.addClass( cls ).prop( 'disabled', true );
        else
            next.removeClass( cls ).prop( 'disabled', false );

        if ( opts.currSlide === prevBoundry )
            prev.addClass( cls ).prop( 'disabled', true );
        else
            prev.removeClass( cls ).prop( 'disabled', false );
    });


    $(document).on( 'cycle-destroyed', function( e, opts ) {
        opts.API.getComponent( 'prev' ).off( opts.nextEvent );
        opts.API.getComponent( 'next' ).off( opts.prevEvent );
        opts.container.off( 'swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle' );
    });

})(jQuery);

/*! progressive loader plugin for Cycle2;  version: 20130315 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        progressive: false
    });

    $(document).on( 'cycle-pre-initialize', function( e, opts ) {
        if ( !opts.progressive )
            return;

        var API = opts.API;
        var nextFn = API.next;
        var prevFn = API.prev;
        var prepareTxFn = API.prepareTx;
        var type = $.type( opts.progressive );
        var slides, scriptEl;

        if ( type == 'array' ) {
            slides = opts.progressive;
        }
        else if ($.isFunction( opts.progressive ) ) {
            slides = opts.progressive( opts );
        }
        else if ( type == 'string' ) {
            scriptEl = $( opts.progressive );
            slides = $.trim( scriptEl.html() );
            if ( !slides )
                return;
            // is it json array?
            if ( /^(\[)/.test( slides ) ) {
                try {
                    slides = $.parseJSON( slides );
                }
                catch(err) {
                    API.log( 'error parsing progressive slides', err );
                    return;
                }
            }
            else {
                // plain text, split on delimeter
                slides = slides.split( new RegExp( scriptEl.data('cycle-split') || '\n') );

                // #95; look for empty slide
                if ( ! slides[ slides.length - 1 ] )
                    slides.pop();
            }
        }



        if ( prepareTxFn ) {
            API.prepareTx = function( manual, fwd ) {
                var index, slide;

                if ( manual || slides.length === 0 ) {
                    prepareTxFn.apply( opts.API, [ manual, fwd ] );
                    return;
                }

                if ( fwd && opts.currSlide == ( opts.slideCount-1) ) {
                    slide = slides[ 0 ];
                    slides = slides.slice( 1 );
                    opts.container.one('cycle-slide-added', function(e, opts ) {
                        setTimeout(function() {
                            opts.API.advanceSlide( 1 );
                        },50);
                    });
                    opts.API.add( slide );
                }
                else if ( !fwd && opts.currSlide === 0 ) {
                    index = slides.length-1;
                    slide = slides[ index ];
                    slides = slides.slice( 0, index );
                    opts.container.one('cycle-slide-added', function(e, opts ) {
                        setTimeout(function() {
                            opts.currSlide = 1;
                            opts.API.advanceSlide( -1 );
                        },50);
                    });
                    opts.API.add( slide, true );
                }
                else {
                    prepareTxFn.apply( opts.API, [ manual, fwd ] );
                }
            };
        }

        if ( nextFn ) {
            API.next = function() {
                var opts = this.opts();
                if ( slides.length && opts.currSlide == ( opts.slideCount - 1 ) ) {
                    var slide = slides[ 0 ];
                    slides = slides.slice( 1 );
                    opts.container.one('cycle-slide-added', function(e, opts ) {
                        nextFn.apply( opts.API );
                        opts.container.removeClass('cycle-loading');
                    });
                    opts.container.addClass('cycle-loading');
                    opts.API.add( slide );
                }
                else {
                    nextFn.apply( opts.API );
                }
            };
        }

        if ( prevFn ) {
            API.prev = function() {
                var opts = this.opts();
                if ( slides.length && opts.currSlide === 0 ) {
                    var index = slides.length-1;
                    var slide = slides[ index ];
                    slides = slides.slice( 0, index );
                    opts.container.one('cycle-slide-added', function(e, opts ) {
                        opts.currSlide = 1;
                        opts.API.advanceSlide( -1 );
                        opts.container.removeClass('cycle-loading');
                    });
                    opts.container.addClass('cycle-loading');
                    opts.API.add( slide, true );
                }
                else {
                    prevFn.apply( opts.API );
                }
            };
        }
    });

})(jQuery);

/*! tmpl plugin for Cycle2;  version: 20121227 */
(function($) {
    "use strict";

    $.extend($.fn.cycle.defaults, {
        tmplRegex: '{{((.)?.*?)}}'
    });

    $.extend($.fn.cycle.API, {
        tmpl: function( str, opts /*, ... */) {
            var regex = new RegExp( opts.tmplRegex || $.fn.cycle.defaults.tmplRegex, 'g' );
            var args = $.makeArray( arguments );
            args.shift();
            return str.replace(regex, function(_, str) {
                var i, j, obj, prop, names = str.split('.');
                for (i=0; i < args.length; i++) {
                    obj = args[i];
                    if ( ! obj )
                        continue;
                    if (names.length > 1) {
                        prop = obj;
                        for (j=0; j < names.length; j++) {
                            obj = prop;
                            prop = prop[ names[j] ] || str;
                        }
                    } else {
                        prop = obj[str];
                    }

                    if ($.isFunction(prop))
                        return prop.apply(obj, args);
                    if (prop !== undefined && prop !== null && prop != str)
                        return prop;
                }
                return str;
            });
        }
    });

})(jQuery);
/*
 * https://github.com/kamens/jQuery-menu-aim
 * don't update this plugin
 * it has been modified 
*/
(function($) {
    $.fn.menuAim = function(opts) {
        // Initialize menu-aim for all elements in jQuery collection
        this.each(function() {
            init.call(this, opts);
        });

        return this;
    };

    function init(opts) {
        var $menu = $(this),
            activeRow = null,
            mouseLocs = [],
            lastDelayLoc = null,
            timeoutId = null,
            options = $.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,  // bigger = more forgivey when entering submenu
                enter: $.noop,
                exit: $.noop,
                activate: $.noop,
                deactivate: $.noop,
                exitMenu: $.noop
            }, opts);

        var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
            DELAY = 300;  // ms delay when user appears to be entering submenu

        /**
         * Keep track of the last few locations of the mouse.
         */
        var mousemoveDocument = function(e) {
                mouseLocs.push({x: e.pageX, y: e.pageY});

                if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
                    mouseLocs.shift();
                }
            };

        /**
         * Cancel possible row activations when leaving the menu entirely
         */
        var mouseleaveMenu = function() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // If exitMenu is supplied and returns true, deactivate the
                // currently active row on menu exit.
                if (options.exitMenu(this)) {
                    if (activeRow) {
                        console.log('options2', options);
                        options.deactivate(activeRow);
                    }

                    activeRow = null;
                }
            };

        /**
         * Trigger a possible row activation whenever entering a new row.
         */
        var mouseenterRow = function() {
                if (timeoutId) {
                    // Cancel any previous activation delays
                    clearTimeout(timeoutId);
                }

                options.enter(this);
                possiblyActivate(this);
            },
            mouseleaveRow = function() {
                options.exit(this);
            };

        /*
         * Immediately activate a row if the user clicks on it.
         */
        var clickRow = function() {
                activate(this);
            };

        /**
         * Activate a menu row.
         */
        var activate = function(row) {
                /*if (row == activeRow) {
                    return;
                }*/

                if (activeRow) {
                    options.deactivate(activeRow);
                }

                options.activate(row);
                activeRow = row;
            };

        /**
         * Possibly activate a menu row. If mouse movement indicates that we
         * shouldn't activate yet because user may be trying to enter
         * a submenu's content, then delay and check again later.
         */
        var possiblyActivate = function(row) {
                var delay = activationDelay();

                if (delay) {
                    timeoutId = setTimeout(function() {
                        possiblyActivate(row);
                    }, delay);
                } else {
                    activate(row);
                }
            };

        /**
         * Return the amount of time that should be used as a delay before the
         * currently hovered row is activated.
         *
         * Returns 0 if the activation should happen immediately. Otherwise,
         * returns the number of milliseconds that should be delayed before
         * checking again to see if the row should be activated.
         */
        var activationDelay = function() {
                if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
                    // If there is no other submenu row already active, then
                    // go ahead and activate immediately.
                    return 0;
                }

                var offset = $menu.offset(),
                    upperLeft = {
                        x: offset.left,
                        y: offset.top - options.tolerance
                    },
                    upperRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: upperLeft.y
                    },
                    lowerLeft = {
                        x: offset.left,
                        y: offset.top + $menu.outerHeight() + options.tolerance
                    },
                    lowerRight = {
                        x: offset.left + $menu.outerWidth(),
                        y: lowerLeft.y
                    },
                    loc = mouseLocs[mouseLocs.length - 1],
                    prevLoc = mouseLocs[0];

                if (!loc) {
                    return 0;
                }

                if (!prevLoc) {
                    prevLoc = loc;
                }

                if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
                    prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
                    // If the previous mouse location was outside of the entire
                    // menu's bounds, immediately activate.
                    return 0;
                }

                if (lastDelayLoc &&
                        loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
                    // If the mouse hasn't moved since the last time we checked
                    // for activation status, immediately activate.
                    return 0;
                }

                // Detect if the user is moving towards the currently activated
                // submenu.
                //
                // If the mouse is heading relatively clearly towards
                // the submenu's content, we should wait and give the user more
                // time before activating a new row. If the mouse is heading
                // elsewhere, we can immediately activate a new row.
                //
                // We detect this by calculating the slope formed between the
                // current mouse location and the upper/lower right points of
                // the menu. We do the same for the previous mouse location.
                // If the current mouse location's slopes are
                // increasing/decreasing appropriately compared to the
                // previous's, we know the user is moving toward the submenu.
                //
                // Note that since the y-axis increases as the cursor moves
                // down the screen, we are looking for the slope between the
                // cursor and the upper right corner to decrease over time, not
                // increase (somewhat counterintuitively).
                function slope(a, b) {
                    return (b.y - a.y) / (b.x - a.x);
                };

                var decreasingCorner = upperRight,
                    increasingCorner = lowerRight;

                // Our expectations for decreasing or increasing slope values
                // depends on which direction the submenu opens relative to the
                // main menu. By default, if the menu opens on the right, we
                // expect the slope between the cursor and the upper right
                // corner to decrease over time, as explained above. If the
                // submenu opens in a different direction, we change our slope
                // expectations.
                if (options.submenuDirection == "left") {
                    decreasingCorner = lowerLeft;
                    increasingCorner = upperLeft;
                } else if (options.submenuDirection == "below") {
                    decreasingCorner = lowerRight;
                    increasingCorner = lowerLeft;
                } else if (options.submenuDirection == "above") {
                    decreasingCorner = upperLeft;
                    increasingCorner = upperRight;
                }

                var decreasingSlope = slope(loc, decreasingCorner),
                    increasingSlope = slope(loc, increasingCorner),
                    prevDecreasingSlope = slope(prevLoc, decreasingCorner),
                    prevIncreasingSlope = slope(prevLoc, increasingCorner);

                if (decreasingSlope < prevDecreasingSlope &&
                        increasingSlope > prevIncreasingSlope) {
                    // Mouse is moving from previous location towards the
                    // currently activated submenu. Delay before activating a
                    // new menu row, because user may be moving into submenu.
                    lastDelayLoc = loc;
                    return DELAY;
                }

                lastDelayLoc = null;
                return 0;
            };

        /**
         * Hook up initial menu events
         */
        $menu
            .mouseleave(mouseleaveMenu)
            .find(options.rowSelector)
                .mouseenter(mouseenterRow)
                .mouseleave(mouseleaveRow)
                .click(clickRow);

        $(document).mousemove(mousemoveDocument);

    };
})(jQuery);


/*! Plugin for Cycle2; Copyright (c) 2012 M. Alsup; ver: 20121120 */
(function(a){function b(a,b,c){if(a&&c.style.filter){b._filter=c.style.filter;try{c.style.removeAttribute("filter")}catch(d){}}else!a&&b._filter&&(c.style.filter=b._filter)}"use strict",a.extend(a.fn.cycle.transitions,{fade:{before:function(c,d,e,f){var g=c.API.getSlideOpts(c.nextSlide).slideCss||{};c.API.stackSlides(d,e,f),c.cssBefore=a.extend(g,{opacity:0,display:"block"}),c.animIn={opacity:1},c.animOut={opacity:0},b(!0,c,e)},after:function(a,c,d){b(!1,a,d)}},fadeout:{before:function(c,d,e,f){var g=c.API.getSlideOpts(c.nextSlide).slideCss||{};c.API.stackSlides(d,e,f),c.cssBefore=a.extend(g,{opacity:1,display:"block"}),c.animOut={opacity:0},b(!0,c,e)},after:function(a,c,d){b(!1,a,d)}}})})(jQuery);
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-tab.js
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery);
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);

// Generated by CoffeeScript 1.6.2
/*
 Sticky Elements Shortcut for jQuery Waypoints - v2.0.3
 Copyright (c) 2011-2013 Caleb Troughton
 Dual licensed under the MIT license and GPL license.
 https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
 */
(function() {
    (function(root, factory) {
        if (typeof define === 'function' && define.amd) {
            return define(['jquery', 'waypoints'], factory);
        } else {
            return factory(root.jQuery);
        }
    })(this, function($) {
        var defaults, wrap;

        defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: 'stuck'
            //padding:'0px'
        };
        wrap = function($elements, options) {
            $elements.wrap(options.wrapper);
            return $elements.parent();
        };
        $.waypoints('extendFn', 'sticky', function(opt) {
            var $wrap, options, originalHandler;

            options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
            $wrap = wrap(this, options);
            originalHandler = options.handler;
            options.handler = function(direction) {
                var $sticky, shouldBeStuck;

                $sticky = $(this).children(':first');
                shouldBeStuck = direction === 'down' || direction === 'right';
                $sticky.toggleClass(options.stuckClass, shouldBeStuck);
                $wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
                //$wrap.css(shouldBeStuck ? { "padding-bottom" : options.padding} : { "padding-bottom" : ""});

                // dispatching event notifying that sticky header has been showed/removed
                jQuery(document).trigger(jQuery.Event('sticky_header_toggle'));

                if (originalHandler != null) {
                    return originalHandler.call(this, direction);
                }
            };
            $wrap.waypoint(options);
            return this.data('stuckClass', options.stuckClass);
        });
        return $.waypoints('extendFn', 'unsticky', function() {
            this.parent().waypoint('destroy');
            this.unwrap();
            return this.removeClass(this.data('stuckClass'));
        });
    });

}).call(this);

jQuery(document).on("sticky_header_toggle", function (event) {

    if(window.__IS_ACCOUNT_PAGE !== undefined) {
        return;
    }

    var header_container_obj = jQuery('#header').find('.container');
    var logo_anchor_obj = header_container_obj.find('.mobile-logo');
    var menu_top_obj = header_container_obj.find('.menu-top');
    var logo_sticky_header_class = 'logo_sticky_header';

    if(jQuery('#header').hasClass('sticked-nav') && event.device == 'mobile' ) {
        // showing logo instead of category menu when sticky header is visible
        menu_top_obj.hide();
    } else {
        // showing category menu and removing previously cloned logo when closing sticky header
        menu_top_obj.show();
    }
});

jQuery(document).on("deviceSwitch", function (event) {

    if(window.__IS_ACCOUNT_PAGE !== undefined) {
        return;
    }

    if(event.device == 'tablet' || event.device == 'desktop' || event.device == 'desktop_large') {
        jQuery(function() {
            if(jQuery("#header").data('waypointstickyactive') != 'true') {
                function getDeviceType() {
                    var deviceType = '',
                        currWidth = jQuery(window).width(),
                        isHome = jQuery('body').hasClass('cms-index-index');

                    if(currWidth < 768) {
                        deviceType = 'phone'
                    }else if(currWidth > 1199 && isHome) {
                        deviceType = 'destopHomePage'
                    } else if(currWidth > 1199 && !isHome) {
                        deviceType = 'desktop'
                    } else {
                        deviceType = 'tablet'
                    }

                    return deviceType;
                }

                deviceOffset = {
                    'phone': -38,
                    'tablet': -73,
                    'desktop': -50,
                    'destopHomePage': -430
                }

                jQuery('#header').waypoint('sticky', {
                    wrapper: '<div class="sticky-wrapper" />',
                    stuckClass: 'sticked-nav',
                    offset: deviceOffset[getDeviceType()],
                    handler: function() {
                        jQuery(this).find('#header').toggleClass('animated fadeInDown')
                        if(jQuery('#header').hasClass('sticked-nav') && jQuery('body.cms-index-index').length == 1) {
                            jQuery('.menu-top').removeClass('visibleMenu');
                            jQuery('.sidebar.col-left #vaimo-menu').appendTo(jQuery( ".menu-top" ));
                            jQuery('body.cms-index-index .menu-top').on('mouseenter', function(){
                                jQuery(this).addClass('visibleMenu');
                                jQuery('div.vertnav').addClass('active');
                                jQuery('div.vertnav').on('mouseenter', function(){
                                    jQuery('.menu-top').addClass('visibleMenu');
                                    jQuery('div.vertnav').addClass('active');
                                });
                                jQuery('div.vertnav').on('mouseleave', function(){
                                    jQuery('.menu-top').removeClass('visibleMenu');
                                    jQuery('div.vertnav').removeClass('active');
                                });
                            });

                            jQuery('body.cms-index-index .menu-top').on('mouseleave', function(){
                                jQuery('.menu-top').removeClass('visibleMenu');
                                jQuery('div.vertnav').removeClass('active');
                            });
                        } else if (!jQuery('#header').hasClass('sticked-nav') && jQuery('body.cms-index-index').length == 1 && event.device == 'desktop_large') {
                            jQuery('.menu-top').addClass('visibleMenu');
                            jQuery('.menu-top').off('mouseenter');
                            jQuery('.menu-top').off('mouseleave');
                            jQuery('div.vertnav').off('mouseenter');
                            jQuery('div.vertnav').off('mouseleave');
                            jQuery('div.vertnav').on('mouseleave', function(){
                                jQuery("#menu > li.vertical-nav-item").removeClass("activeMenu");
                                jQuery("#menu > li.vertical-nav-item >.col-wrapper").hide();
                            });
                            jQuery('#header #vaimo-menu').prependTo(jQuery('.sidebar.col-left'));
                        }
                        if(jQuery('#header').hasClass('sticked-nav')) {
                            jQuery('#searchsuggestion_list, body').addClass('positionfixeddesktop');
                            jQuery('.main-logo').hide();
                            jQuery('.logo-stickyHeader').show();
                            jQuery('.main-fav-logo').hide();
                            jQuery('.sticky-fav-logo').show();
                            jQuery('#force_account_verification').css('position','fixed');
                            if(jQuery('#force_account_verification').length > 0 && jQuery('#force_account_verification').css('display') != "none"){
                                jQuery('#header').css('top','46px');
                                jQuery('.searchsuggestion_list').css('top','148px;');
                            }
                        } else if (!jQuery('#header').hasClass('sticked-nav')) {
                            jQuery('#searchsuggestion_list, body').removeClass('positionfixeddesktop');
                            jQuery('.main-logo').show();
                            jQuery('.logo-stickyHeader').hide();
                            jQuery('.main-fav-logo').show();
                            jQuery('.sticky-fav-logo').hide();
                            jQuery('#force_account_verification').css('position','inherit');
                            jQuery('#header').css('top','0');
                            jQuery('.searchsuggestion_list').css('top','96px;')
                        }
                    }
                });
                jQuery('#header').data('waypointstickyactive', 'true');
            }
        });

    } else {
        jQuery(function() {
            if(jQuery("#header").data('waypointstickyactivemobile') != 'true') {
                jQuery('#header').waypoint('sticky', {
                    wrapper: '<div class="sticky-wrapper" />',
                    stuckClass: 'sticked-nav',
                    offset: -38,
                    handler: function() {
                        if(jQuery('#header').hasClass('sticked-nav')) {
                            jQuery('#searchsuggestion_list').addClass('positionfixedmobile');
                        } else if (!jQuery('#header').hasClass('sticked-nav')) {
                            jQuery('.main-logo').show();
                            jQuery('.logo-stickyHeader').hide();
                            jQuery('#searchsuggestion_list').removeClass('positionfixedmobile');
                            jQuery('.main-fav-logo').show();
                            jQuery('.sticky-fav-logo').hide();
                        }
                    }
                });
                jQuery('#header').data('waypointstickyactivemobile', 'true');
            }
        });
    }
});

var lastScrollTop = 0;

jQuery( window ).on("scroll", function(event) {

    if(window.__IS_ACCOUNT_PAGE !== undefined) {
        return;
    }

    var scrollTop = jQuery(this).scrollTop(),
        $header = jQuery("header")

    if (scrollTop > 67) {
        if (lastScrollTop <= 0) {

            $header.removeClass("hide")

        } else if (scrollTop > lastScrollTop) {

            $header.addClass("hide") // downscroll code

        } else {

            $header.removeClass("hide") // upscroll code

        }

        lastScrollTop = scrollTop
    }
});








JsCountdown.addMethods({
    updateCounter: function(){
        this.calculate();
        this.formatTime();
        this.countainer.innerHTML = "<div class=\"js-countdown" + (this.days > 0? "-days" : "") + "\" style=\"color:" + this.textColor + "!important;\"><i class='icon'></i>" + (this.days > 0? "<strong>" + this.days + "D</strong>" : "") + " <strong>" + this.hours + "H</strong> <strong>" + this.minutes + "M</strong> <strong>" + this.seconds + "S</strong></div>";
        if ( this.endDate > this.fromDate ) {
            var self = this;
            setTimeout(function(){self.updateCounter();}, 1000);
        }
    }
});
/**
 * equalheight.jquery.js
 * Make row elements all the height of the tallest item in the row
 *
 * Created by Jay Contonio on 2010-09-02.
 * Modified on 2011-02-24 to add row functionality
 *
 * @example for rows with two columns @link http://fcc.gov/rulemaking (whenever it launches)
 * $('.column').equalheight(2);
 */

(function($) {
    $.fn.equalheight = function(numberOfColumns)
    {

        if (!numberOfColumns)
        {
            throw new Error('Number of columns is required');
        }

        var currentHeight = 0;
        var rows = [];
        var row = [];

        // Create an array of rows so we can compare the tallest item in each row
        $(this).each(function(i) {
            row.push(this);
            if (i % numberOfColumns)
            {
                rows.push(row);
                row = [];
            }
        });

        for (var i=0; i < rows.length; i++) {
            // Loop through each row and compare it's height to the variable currentHeight
            // if the item's height is greater than the currentHeight, set currentHeight to the new height
            for (var j=0; j < rows[i].length; j++) {
                console.log($(rows[i][j]).height());
                if ($(rows[i][j]).height() >= currentHeight) currentHeight = $(rows[i][j]).height();
            }
            console.log(currentHeight);
            // Apply currentHeight to both items in the row
            for (var z=0; z < rows[i].length; z++) {
                $(rows[i][z]).css({ 'height': currentHeight + 'px' });
                //console.log($(rows[i][z]));
            }
            // Start over for the next row
            currentHeight = 0;
        }

    };
})(jQuery);
jQuery(document).ready(function(){



    jQuery('#ModalBoxDesktop form, #ModalBoxMobile form').submit(function() {
        var x = jQuery(this).find("input[name='email']").val();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            alert("Not a valid e-mail address");
            return false;
        }

    });

    function getCookie(c_name)
    {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    }
    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }
    function checkCookie() {
        var username = getCookie("konga_lenovo_username");
        if (username != null && username != "") {

        } else {
            var w = jQuery(window).width();
            if (w > 767) {

                jQuery(".ModalBoxDesktop").fancybox({
                    scrolling:'no',
                    padding:0,
                    afterLoad: function() {
                        jQuery(".fancybox-skin").addClass('custom-skin');
                    },
                    afterShow: function() {
                        jQuery('#ModalBoxDesktop .form .inputs').focus();
                    }

                });
                jQuery(".ModalBoxDesktop").click();

            }
            else if (w >= 320) {

                jQuery(".ModalBoxMobile").fancybox({
                    scrolling:'no',
                    padding:0,
                    afterLoad: function() {
                        jQuery(".fancybox-skin").addClass('custom-skin-mobile');
                        if(navigator.userAgent.match(/Opera Mini/i)){
                            jQuery(".fancybox-overlay").addClass('opera-mini-fancybox');
                        };
                    },
                    afterShow: function() {
                        jQuery('#ModalBoxDesktop .form .inputs').focus();
                    }
                });

                jQuery(".ModalBoxMobile").click();

            }
            setCookie("konga_lenovo_username", "konga_lenovo_promo", 1);
        }
    }

    var curTime = new Date();
    var nineTime = new Date(2013, 11, 2, 21, 0);


    if(true){
        //(curTime >= nineTime)
        checkCookie();
    }


});
var jq = jQuery.noConflict();
jQuery(document).ready(function(jq) {
    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    if (isOperaMini) {
        jq('img.lazy-img').each(function() {
            var imgDataSrc = jq(this).attr('data-src');
            jq(this).attr('src', imgDataSrc)
        });

        jq('.popular-category-block li').css('height', '130px');

    } else {
        jq('img.lazy-img').lazy({
            beforeLoad: function(element) {
                var img = document.createElement('img');
                if (img.complete) {
                    element.attr('src', element.attr('data-src'));
                    element.removeAttr('data-src');
                }
            },
            onError: function(element) {
                if (typeof console != 'undefined' && typeof console.log != 'undefined') {
                    console.log('image loading error: ' + element.attr('src'));
                }
            },
            bind: 'event',
            effect: 'fadeIn',
            effectTime: 1000,
            removeAttribute: false,
            throttle: 250
        });
    }

    var popularItems = jq('.popular-category-block li.item'),
        btnMore = jq('.popular-category-block li.more');
    jq('.popular-category-block li.item').slice(0, 8).each(function(index) {
        jq(this).show();
    });

    jq(btnMore).click(function(){
        jq(this).hide();
        popularItems.show();
    });
});


jq(document).ready(function () {
    if (jq('#messages')){
        jq('#messages').hide();
        var messageHtml = jq('#messages').html();
        if (messageHtml){
            jQuery('<div/>', {
                id: 'notificationMessages',
                html: messageHtml
            }).insertBefore("#main-content-container .main-container");
        }
    }
});
