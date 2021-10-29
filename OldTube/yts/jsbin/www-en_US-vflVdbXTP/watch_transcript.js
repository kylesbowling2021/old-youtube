(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var SAa=function(){if(!g.Fg)return!1;try{return new ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}},UAa=function(a){if("undefined"!=typeof DOMParser){var b=new DOMParser;
a=g.qr(a);return b.parseFromString(g.fc(a),"application/xml")}if(TAa){b=new ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");},g$=function(a){a=void 0===a?{}:a;
this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=a.name||null;this.id=a.id||null;this.C=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null},h$=function(a){var b=a.languageName||"",c=[b];
"asr"===a.kind&&-1===b.indexOf("(")&&c.push(" (Automatic Captions)");a.name&&c.push(" - "+a.name);a.translationLanguage&&c.push(" >> "+a.translationLanguage.languageName);return c.join("")},VAa=function(){this.F=[];
this.C=[]},i$=function(a,b){return b?a.C.concat(a.F):a.C},j$=function(a,b){switch(b.kind){case "asr":return WAa(b,a.F);
default:return WAa(b,a.C)}},WAa=function(a,b){return g.Ua(b,function(c){return a.equals(c)})?!1:(b.push(a),!0)},k$=function(){g.F.call(this);
this.C=new VAa;this.L=[]},XAa=function(a,b){return g.Ua(i$(a.C,!0),function(c){return c.toString()===b})},l$=function(a,b,c,d,e){k$.call(this,e||null);
this.videoId=b;this.H=d;this.D={};this.F=null;b=c||g.Qs(a).hl||"";b=b.split("_").join("-");this.G=g.ki(a,{hl:b})},ZAa=function(){if(g.H("TTS_URL")&&!m$){var a=g.eO();
a&&(m$=new YAa(a))}},$Aa=function(a,b,c){this.start=a;
this.append=b;this.text=c},YAa=function(a){this.player=a;
this.N=null;this.la=!1;this.G=[];this.L=[];this.D=new l$(g.H("TTS_URL",void 0),g.H("VIDEO_ID",void 0),null,!0);this.V=null;this.aa=[];this.M=-1;this.T=!1;this.J=this.X=0;this.C=this.F=null;this.player.addEventListener("captionschanged",(0,g.v)(this.Cz,this))},aBa=function(a,b){if(b.translationLanguage){var c=b.translationLanguage.languageCode;
b.translationLanguage.languageName=a.D.D[c]||c}c=new g$(b);return c.isValid()?c:null},n$=function(a,b,c){var d=g.be("BUTTON",{className:["yt-ui-menu-item yt-uix-menu-close-on-select yt-uix-button-menu-item"],
value:c});c=g.be("SPAN",{className:"yt-uix-button-content transcript-lang",value:c});b=document.createTextNode(String(b));a.H.appendChild(d);d.appendChild(c);c.appendChild(b)},cBa=function(a,b){var c=b.getAttribute("t");
c=c?parseInt(c,10):1E3*parseFloat(b.getAttribute("start")||0);var d=!!b.getAttribute("append"),e=UAa("<html>"+(b.firstChild&&b.firstChild.nodeValue||"")+"</html>");return bBa(a,c,d,e.firstChild)},bBa=function(a,b,c,d){for(var e=[],f=0;f<d.childNodes.length;f++){var k=d.childNodes[f];
3==k.nodeType?e.push(new $Aa(b,c||0<f,k.nodeValue)):e=e.concat(bBa(a,b,c||0<f,k))}return e},dBa=function(a,b){g.qh(a.J);
var c=Math.min(b.offsetTop-a.C.offsetTop,a.C.scrollHeight-a.C.offsetHeight),d=0;a.J=g.oh((0,g.v)(function(){var e=c-this.C.scrollTop,f=Math.round(100*e/(1E3-50*d));Math.abs(e)<=Math.abs(f)||20<d?(this.C.scrollTop=c,g.qh(this.J)):(this.C.scrollTop+=f,d++)},a),50)},TAa=g.Fg&&SAa();g.h=g$.prototype;g.h.getId=function(){return this.id};
g.h.getName=function(){return this.name};
g.h.isServable=function(){return this.C};
g.h.getUrl=function(){return this.url};
g.h.toString=function(){return this.languageCode+": "+h$(this)+" - "+this.vssId};
g.h.equals=function(a){return a?this.toString()===a.toString():!1};
g.h.isValid=function(){return!(!this.languageCode||this.translationLanguage&&!this.translationLanguage.languageCode)};g.p(k$,g.F);g.h=k$.prototype;g.h.Oi=function(){};
g.h.up=function(){};
g.h.wj=function(){};
g.h.Tn=function(){return""};
g.h.W=function(){this.wj();g.F.prototype.W.call(this)};g.p(l$,k$);l$.prototype.Oi=function(a,b,c){var d=this;b=this.Tn(a,b);this.wj();this.F=g.K(b,{format:"RAW",onSuccess:function(e){d.F=null;c(e.responseText,a)},
withCredentials:!0})};
l$.prototype.up=function(a){var b=this,c=this.G,d={type:"list",tlangs:1,v:this.videoId,vssids:1};this.H&&(d.asrs=1);c=g.ki(c,d);this.wj();this.F=g.K(c,{format:"RAW",onSuccess:function(e){b.F=null;if((e=e.responseXML)&&e.firstChild){for(var f=e.getElementsByTagName("track"),k=0;k<f.length;k++){var l=f[k],m=l.getAttribute("lang_code"),n=l.getAttribute("lang_translated"),r=l.getAttribute("name"),x=l.getAttribute("kind"),y=l.getAttribute("id"),C="true"===l.getAttribute("lang_default"),S="true"===l.getAttribute("cantran");
l=l.getAttribute("vss_id");j$(b.C,new g$({languageCode:m,languageName:n,name:r,kind:x,id:y,is_servable:!0,is_translateable:S,vss_id:l,is_default:C}))}e=e.getElementsByTagName("target");f=e.length;for(k=0;k<f;k++)m={languageCode:e[k].getAttribute("lang_code"),languageName:e[k].getAttribute("lang_translated"),languageOriginal:e[k].getAttribute("lang_original"),id:e[k].getAttribute("id"),isDefault:"true"===e[k].getAttribute("lang_default")},b.D[m.languageCode]=m.languageName,b.L.push(m)}a()},
withCredentials:!0})};
l$.prototype.Tn=function(a,b){var c=this.G,d={v:this.videoId,type:"track",lang:a.languageCode,name:a.getName(),kind:a.kind,fmt:b};a.translationLanguage&&(d.tlang=a.translationLanguage?a.translationLanguage.languageCode:a.languageCode);return c=g.ki(c,d)};
l$.prototype.wj=function(){this.F&&this.F.abort()};var m$=null;g.h=YAa.prototype;g.h.dispose=function(){g.lh(this.G);this.G.length=0;this.L.length=0;g.qh(this.X);g.qh(this.J)};
g.h.Cz=function(a){var b=aBa(this,a);b&&(this.la?(j$(this.D.C,b)&&n$(this,h$(b),b.toString()),this.D.Oi(b,"srv1",(0,g.v)(this.Tl,this))):this.L.push(a))};
g.h.open=function(a){if(this.la)a();else if(this.N=g.D("watch-transcript-container"),"true"==g.L(this.N,"disabled"))a();else{var b=g.be("DIV",{className:"yt-uix-menu"}),c=g.be("DIV",{className:"yt-uix-menu-trigger"});this.F=g.be("BUTTON",{className:["yt-uix-button yt-uix-button-default hidden"],"button-menu-id":"watch-transcript-track-selector"});this.H=g.be("DIV",{className:["yt-uix-menu-content yt-ui-menu-content yt-uix-menu-content-hidden"]});this.N.appendChild(b);b.appendChild(c);c.appendChild(this.F);
b.appendChild(this.H);this.C=document.createElement("div");this.C.id="transcript-scrollbox";g.R(this.C,"yt-uix-scroller");this.G.push(g.I(this.C,"mouseover",(0,g.v)(function(){this.T=!0},this)));
this.G.push(g.I(this.C,"mouseout",(0,g.v)(function(){this.T=!1},this)));
this.N.appendChild(this.C);this.G.push(g.U(this.C,"click",(0,g.v)(this.Bz,this),"caption-line"));this.D.up((0,g.v)(function(){a:{for(var d=this.D,e=null,f=0;f<this.L.length;f++)(e=aBa(this,this.L[f]))&&j$(d.C,e);var k=i$(d.C,!0);if(0>=k.length)g.W("watch-transcript-not-found");else{f=g.be("SPAN",{className:"yt-uix-button-content transcript-lang"});var l=document.createTextNode(String(h$(k[0])));this.F.appendChild(f);f.appendChild(l);f=g.be("IMG",{"class":"yt-uix-button-arrow",src:g.H("DROPDOWN_ARROW_URL",
void 0)});this.F.appendChild(f);g.W(this.F);f=0;for(l=k.length;f<l;f++)n$(this,h$(k[f]),k[f].toString());if(k=g.pt("CC_ADD_TRANSCRIPT_TITLE"))n$(this,k,"add-cc"),g.Ox(6035988,"cc_transcriptions"),g.Nx();this.G.push(g.U(this.H,"click",(0,g.v)(this.ux,this),"yt-uix-button-menu-item"));if(!e&&(e=i$(d.C,void 0)[0],!e))break a;d.Oi(e,"srv1",(0,g.v)(this.Tl,this))}}a()},this));
this.la=!0}};
g.h.ux=function(a){if("add-cc"==a.target.value)(a=g.H("CC_ADD_TRANSCRIPT_URL",void 0))&&g.xl(a);else{var b=this.D,c=(0,g.v)(this.Tl,this),d=XAa(b,a.target.value);d&&b.Oi(d,"srv1",c);this.H&&g.Pq(this.F.firstChild,a.target)}};
g.h.Bz=function(a){var b=g.L(a.currentTarget,"time");b&&(this.player.seekTo(parseInt(b,10),!0),a.preventDefault())};
g.h.Tl=function(a,b){this.M=-1;var c=[];if("string"===typeof a){c=[];try{var d=UAa(a);if(d&&d.firstChild)for(var e=g.ia(Array.from(d.firstChild.children)),f=e.next();!f.done;f=e.next())c=c.concat(cBa(this,f.value))}catch(y){c=[]}}this.V=b;f=c;d=[];g.qh(this.X);g.fe(this.C);e=document.createDocumentFragment();c=-1;for(var k=0,l=f.length;k<l;k++){var m=f[k];if(m.append){var n=e.getElementById("cp-"+c),r=n.getElementsByClassName("caption-line-text")[0];n=g.ir(r);"string"===typeof m.text&&g.O(r,n.concat(m.text))}else{c++;
n=document.createElement("div");r=m.start/1E3;d.push(m.start);n.id="cp-"+c;n.className="caption-line";g.Xs(n,"time",r+"");e.appendChild(n);var x=document.createElement("div");x.className="caption-line-time";x.textContent=Math.floor(r/60)+":"+(10>r%60?"0":"")+Math.floor(r%60);n.appendChild(x);r=document.createElement("div");r.className="caption-line-text";"string"===typeof m.text&&g.O(r,m.text);n.appendChild(r)}}this.F&&(f=g.N("transcript-lang",this.F),g.O(f,h$(this.V)));this.aa=d;this.C.appendChild(e);
this.X=g.oh((0,g.v)(this.tG,this),500)};
g.h.tG=function(){for(var a=this.player.getCurrentTime(),b=this.aa,c=this.M,d=c;;){var e=0<=d?b[d]/1E3:-1;if(a+.5<e)--d;else if(e=d+1<b.length?b[d+1]/1E3:1E6,a+.5>e)d+=1;else break}d!=c&&(0<=c&&(a=g.D("cp-"+c),g.T(a,"caption-line-highlight")),0<=d&&(a=g.D("cp-"+d),g.R(a,"caption-line-highlight")),this.M=d,this.T||dBa(this,g.D("cp-"+(3<=d?d-3:0))))};g.t("yt.www.watch.transcript.open",function(a){ZAa();m$.open(a)},void 0);
g.il(g.nt({name:"www/watch_transcript",deps:["www/watch"],page:"watch",init:function(){ZAa()},
dispose:function(){m$&&(m$.dispose(),m$=null)}}));})(_yt_www);
