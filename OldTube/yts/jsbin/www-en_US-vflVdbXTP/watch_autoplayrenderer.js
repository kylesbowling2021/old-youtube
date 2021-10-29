(function(g){var window=this;var aAa=function(){var a=g.$g();return!(!a||"visible"==a)},S7=function(){return!g.Lo(g.sk.getInstance(),140)},cAa=function(){if(g.H("AUTONAV_EXTRA_CHECK")){var a=S7(),b=!bAa.get("autonav_disabled"),c="";
a!==b&&(c="Cookie does not match localstorage value cookie: "+a+"\n        LocalStorage: "+b);c&&g.Zj(Error(c))}},lAa=function(){T7.push(g.Ih("player-playback-start",g.w(U7,!0)));
T7.push(g.Ih("player-autonav-change-request",dAa));T7.push(g.Ih("player-autonav-pause-request",eAa));(0,g.E)(["check","uncheck","change"],function(b){V7.push(g.I(W7,b,fAa))});
T7.push(g.Ih("page-scroll",gAa));V7.push(g.I(g.D("watch8-secondary-actions"),"click",hAa,!0));V7.push(g.I(document.body,"focus",iAa,!0));V7.push(g.I(document.body,"blur",jAa,!0));T7.push(g.Ih("yt-www-comments-sharebox-open",iAa));V7.push(g.I(document,"visibilitychange",X7));var a=g.eO();a.addEventListener("onVolumeChange",X7);a.addEventListener("onStateChange",kAa)},hAa=function(){mAa=g.oh(function(){var a=g.D("watch-action-panels");
if(a){for(var b=g.M("pause-resume-autoplay"),c=!1,d=0;d<b.length;d++)if(g.G(b[d],"yt-uix-button-toggled")){c=!0;break}!c&&g.G(a,"hid")?(Y7=!1,g.qh(mAa)):Y7=!0;U7()}},500)},nAa=function(){Z7=null!=document.activeElement&&"IFRAME"==document.activeElement.tagName.toUpperCase();
U7()},gAa=function(){$7=-200>d8.getBoundingClientRect().top;
U7()},oAa=function(a){return"INPUT"==a.tagName||"TEXTAREA"==a.tagName||!!a.isContentEditable},iAa=function(a){if(a&&oAa(a.target)){if("autoplay-checkbox"==a.target.id)return;
E8=!0}U7()},X7=function(){if(pAa()){var a=g.eO();
V8=aAa()&&(a.isMuted()||0==a.getVolume());U7()}},eAa=function(a){O9=a;
U7()},qAa=function(){P9=!0;
U7();Q9=0},rAa=function(){if(R9){var a=g.Ik();
a&&g.Xj("youThere",{clientScreenNonce:a,youThereEventType:"YOU_THERE_EVENT_TYPE_AUTOPLAY_RESUMED"})}R9=P9=!1;U7();Q9&&g.ph(Q9);Q9=g.nh(qAa,144E5-g.Dh())},jAa=function(a){aAa()||(a&&oAa(a.target)&&(E8=!1),U7())},U7=function(a){S9=$7||Z7||E8||V8||O9||Y7||P9||R9||sAa;
var b=S7()?S9?3:2:1;var c=g.eO(),d=pAa();d&&!c.setAutonav&&g.ah(Error("Player is ready but setAutonav is not"));d&&(a||tAa!=b)&&(c.setAutonavState(b),tAa=b);cAa()},pAa=function(){var a=g.eO();
return!(!a||!a.isReady())},fAa=function(){var a=W7.checked,b=S7();
a!==b&&(b=g.Ec({state:a?"enabled":"disabled"}),g.zt("autoplay",b),b=g.sk.getInstance(),a||g.Mo(141,!0),g.Mo(140,!a),b.save(),bAa.set("autonav_disabled",!a));U7()},dAa=function(a){W7.checked=a;
fAa()},kAa=function(a){if(0==a&&g.H("PREFETCH_AUTONAV")&&S7()&&!S9&&(a=g.N("autoplay-bar"),a=g.N("spf-link",a))){var b=g.GB(a);
b.autonav=1;b.feature="related-auto";b.playnext=1;var c=g.Dh();0<c&&(b.lact=c);if(c=g.eO())c=c.getVisibilityState(),0!=c&&(b.vis=c);g.wG(a.href,!!g.H("PREBUFFER_AUTONAV"),b)}};var bAa=new g.Ni("yt.autonav");var V7=[],T7=[],d8=null,W7=null,uAa=0,mAa=0,Q9=0,vAa=0,S9=!1,$7=!1,E8=!1,Y7=!1,Z7=!1,V8=!1,O9=!1,P9=!1,R9=!1,sAa=!1,tAa=1;g.il(g.nt({name:"www/autoplayrenderer",deps:["www/watch"],page:"watch",init:function(){d8=g.D("player");if(W7=g.D("autoplay-checkbox"))g.eO()?(uAa=g.oh(nAa,500),rAa(),T7.push(g.Ih("USER_ACTIVE",rAa)),W7.checked=S7(),lAa(),gAa(),X7(),cAa()):g.ch(Error("Autoplay player is missing"))},
dispose:function(){g.lh(V7);V7.length=0;g.Jh(T7);Q9&&(g.ph(Q9),Q9=0);g.ph(vAa);vAa=0;T7.length=0;W7=d8=null;$7=!1;g.qh(uAa);var a=g.eO();a&&(a.removeEventListener("onStateChange",kAa),a.removeEventListener("onVolumeChange",X7));sAa=R9=P9=O9=V8=Y7=Z7=E8=$7=S9=!1}}));})(_yt_www);
