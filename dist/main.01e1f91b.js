parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="/*你好，我叫小潘\n* 接下来我要展示我的前端功底\n* 下面我会创建一个 div */\n\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/*接下来我要将刚刚创建的 div 变成一个八卦图\n* 请注意！！！\n* 第一步，将刚刚创建的 div 变成一个圆*/\n\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,.5);\n    border: none;\n}\n/*八卦是一黑一白，\n* 所以第二步我们将 div 的左边变成白色，\n* 右边变成黑色*/\n\n#div1{\n    background: \n    linear-gradient(90deg, rgba(255,255,255,1) 0%, \n    rgba(255,255,255,1) 50%, \n    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*接下来，我们要展示什么是“阴阳互根” \n* 嘻嘻*/\n\n#div1::before{\n    transform: translateX(-50%);\n    background: #fff;\n    background: \n    radial-gradient(circle, rgba(0,0,0,1) 0%,\n    rgba(0,0,0,1) 25%, \n    rgba(255,255,255,1) 25%);\n}\n\n#div1::after{\n    transform: translate(-50%,100%);\n    background: #000;\n    background:\n    radial-gradient(circle, rgba(255,255,255,1) 0%,\n    rgba(255,255,255,1) 25%, \n    rgba(0,0,0,1) 25%);\n}\n/*结束了，谢谢！*/\n",e="",d=0,i=function i(){setTimeout(function(){"\n"===a[d]?e+="<br>":" "===a[d]?e+="&nbsp;":e+=a[d],n.innerHTML=e,r.innerHTML=a.substring(0,d),window.scrollTo(0,99999),d<a.length-1&&(d+=1,i())},50)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.01e1f91b.js.map