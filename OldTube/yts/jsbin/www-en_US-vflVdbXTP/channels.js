(function(g){var window=this;var cna,dna,ena,GT,IT,KT,JT,LT,MT,NT,OT,TT,fna,gna,hna,ina,UT,$T,jna,bU,cU,kna,lna,gU;cna=function(){g.MI()};
g.ET=function(a,b){var c=a.elements[b];if(c){if(c.type)return g.ls(c);for(var d=0;d<c.length;d++){var e=g.ls(c[d]);if(e)return e}}return null};
dna=function(a,b,c){0<c.length||(b=g.M(b),(0,g.E)(b,function(d){var e=new a;e.Sa(d);c.push(e)}))};
ena=function(a){(0,g.E)(a,function(b){b.dispose()});
a.length=0};
g.FT=function(a,b){var c=[];a.init=g.w(dna,a,b,c);a.dispose=g.w(ena,c)};
GT=function(){g.Y.apply(this,arguments)};
g.HT=function(){this.D=null;g.Y.call(this)};
IT=function(){g.Y.call(this);this.D=this.Mh=this.Fi=null;this.J=g.H("CHANNEL_ID",void 0)};
KT=function(a,b){a.Fi.textContent="";a.Mh.textContent="";var c=a.R("business-email-button");c&&g.V(a).Va(c,"click",a.G);a.D&&JT(a);a.Mh.innerHTML=b;g.ik("https://www.google.com/recaptcha/api.js");a.D=a.R("captcha-form");a.D&&g.V(a).O(a.D,"submit",a.H)};
JT=function(a){g.V(a).Va(a.D,"submit",a.H);a.D=null};
LT=function(){g.Y.call(this)};
MT=function(){g.Y.call(this)};
NT=function(){g.Y.call(this);this.D=null};
OT=function(){g.Y.call(this)};
g.PT=function(){g.Y.call(this);this.H=this.D=!1};
TT=function(){g.Uk(QT);QT.length=0;g.Nq(RT);ST=RT=null};
fna=function(a){ST==a.C&&TT()};
gna=function(a){UT(!0,a.C)};
hna=function(a){UT(!1,a.C)};
ina=function(){VT&&VT.pauseVideo()};
UT=function(a,b){if(b==WT){if(XT&&(g.Jh(XT),XT=0,!a))return;var c;if(c=a&&VT)c=VT,c=!(c.D&&c.D.isReady()&&0==c.D.getPlayerState());c&&(XT=g.Ih("yt-ui-videoplayer-ended",g.w(UT,!0,b)))}};
$T=function(a){a=g.D(a);if(!a)return null;var b=new g.HT;b.Sa(a);g.le(ZT,b);return b};
jna=function(){g.OI.getInstance().Vd()};
g.aU=function(){g.Y.call(this);this.G="";this.D=this.Ud=null};
bU=function(a,b){g.W(a);b&&g.W(b)};
cU=function(){g.el.call(this,"www/channels",["www/common"],["channel","playlist"],kna,lna)};
kna=function(){g.RI();g.RE(g.gI);if(RT=g.N("subscription-confirmation-dialog"))ST=g.H("CHANNEL_ID",void 0),QT.push(g.Tk(g.mH,fna)),g.QD.getInstance().show(RT);OT.init();GT.init();g.PT.init();var a=g.N("alert-with-button-renderer");a&&(dU=new g.lO,dU.Sa(a));g.MI();eU.push(g.Ih("yt-uix-load-more-success",cna));g.rJ();a=g.H("CHANNEL_TAB",void 0);if(a in fU)fU[a][0]();gU=a};
lna=function(){g.SE(g.OI);var a=gU;if(a in fU)fU[a][1]();g.wJ();g.SE(g.gI);TT();OT.dispose();GT.dispose();g.PT.dispose();g.Jh(eU);eU.length=0;dU&&dU.dispose()};
g.p(GT,g.Y);GT.prototype.Z=function(){g.Y.prototype.Z.call(this);var a=this.K();a&&g.V(this).O(a,"click",this.D)};
GT.prototype.D=function(){function a(){google.payments.inapp.buy({jwt:d,parameters:{locale:g.H("GAPI_LOCALE"),price:e,uiTemplate:"donation",userSessionIndex:g.H("SESSION_INDEX")}})}
var b=g.N("donation-amount-input"),c=this.K(),d=g.L(c,"jwt"),e=b.value;(b=g.L(c,"gb_url"))&&g.ik(b,a)};
g.OB(GT,"channel-donation-button");g.z(g.HT,g.Y);g.h=g.HT.prototype;g.h.Z=function(){g.HT.Y.Z.call(this);var a=g.L(this.K(),"swf-config");a&&(a=JSON.parse(g.Op(a)),this.D=g.Ql(this.F,a),this.D.addEventListener("onStateChange",this.Oo),this.D.addEventListener("onReady",this.Ho))};
g.h.W=function(){this.D.removeEventListener("onStateChange",this.Oo);this.D.removeEventListener("onReady",this.Ho);this.D=null;g.tt(this.K());g.HT.Y.W.call(this)};
g.h.Oo=function(a){0==a&&g.J("yt-ui-videoplayer-ended",this)};
g.h.Ho=function(){g.J("yt-ui-videoplayer-ready",this)};
g.h.pauseVideo=function(){this.D.isReady()?this.D.pauseVideo():g.Ns("yt-ui-videoplayer-ready",(0,g.v)(this.pauseVideo,this))};g.p(IT,g.Y);IT.prototype.Z=function(){g.Y.prototype.Z.call(this);this.Fi=this.R("business-email-inline");this.Mh=this.R("business-email-captcha-container");var a=this.R("business-email-button");a&&g.V(this).O(a,"click",this.G)};
IT.prototype.G=function(){g.K("/channels_profile_ajax?action_get_business_email_captcha=1",{onSuccess:function(a,b){"CAPTCHA"==b.str_code&&KT(this,b.html_content)},
context:this})};
IT.prototype.H=function(a){a.preventDefault();g.Ts(this.D,{ia:{channel_id:this.J},onSuccess:function(b,c){if("EMAIL_ADDR"==c.str_code||"ERROR"==c.str_code){var d=c.html_content;this.Fi.textContent="";this.Mh.textContent="";JT(this);this.Fi.innerHTML=d}},
onError:function(b,c){"CAPTCHA"==c.str_code&&KT(this,c.html_content)},
context:this})};
g.FT(IT,"business-email-container");g.p(LT,g.Y);g.h=LT.prototype;
g.h.Z=function(){g.NB(this,"click","about-action-with-overlay",this.WF,null,document.documentElement);g.NB(this,"click","abuse-type-radio-input",this.Au,null,document.documentElement);g.NB(this,"click","continue-flag-channel",this.SE,null,document.documentElement);g.NB(this,"click","submit-flag-background",g.w(this.bs,"report_background"),null,document.documentElement);g.NB(this,"click","submit-flag-profile-image",g.w(this.bs,"report_profile_image"),null,document.documentElement);g.NB(this,"click",
"submit-flag-with-action",this.jG,null,document.documentElement)};
g.h.bs=function(a){var b=g.D("flag-channel-form"),c=g.D("flag-channel-action-input");b&&c&&(c.value=a,b.submit())};
g.h.jG=function(a){var b=a.currentTarget;a=g.L(b,"flagging-action");var c=g.D("flag-service-ajax-form"),d=g.D("flag-service-ajax-action-input");c&&d&&(b.disabled=!0,d.value=a,g.Ts(c,{onSuccess:function(){window.location.reload()},
onError:function(){b.disabled=!1}}))};
g.h.WF=function(a){(a=g.L(a.currentTarget,"overlay-class")+"")&&g.QD.getInstance().show(g.N(a,void 0))};
g.h.Au=function(){var a=g.UD();g.N("continue-flag-channel",a).disabled=!1};
g.h.SE=function(){var a=g.UD();a=g.N("flag-channel-abuse-form",a);a=g.ET(a,"next_url");g.QD.getInstance().hide();"string"===typeof a&&""!=a&&g.rt(a)};
g.FT(LT,"about-action-report-user");g.p(MT,g.Y);MT.prototype.Z=function(){g.Y.prototype.Z.call(this);g.UI(this.K());this.ea("feed-item-dismissal-content-replaced",this.D)};
MT.prototype.W=function(){g.VI();g.Y.prototype.W.call(this)};
MT.prototype.D=function(a){(a=g.L(a,"dismissal-token"))&&g.K("/channels_feed_ajax?action_remove_channel_post=1",{method:"POST",ia:{dismissal_token:a}})};
g.OB(MT,"browse-items-primary");g.p(NT,g.Y);NT.prototype.Z=function(){var a=g.L(this.K(),"src");if(a){this.D=g.yc(a);g.V(this).O(window,"message",this.G);var b=g.L(this.K(),"append-analytics"),c=g.q.ga;b&&"true"==b.toLowerCase()&&c&&c(function(d){var e=g.u("gaplugins.Linker");e&&(d=new e(d),(d=g.u("decorate",d))&&(a=d(a)))});
this.K().src=a}};
NT.prototype.G=function(a){a=a.yc;g.yc(a.origin)==this.D&&(a=JSON.parse(a.data))&&"height"in a&&(this.K().style.height=a.height)};
g.OB(NT,"c4-custom-tab-iframe");g.p(OT,g.Y);OT.prototype.Z=function(){g.Y.prototype.Z.call(this);this.D=this.R("search-field");var a=this.R("search-form");g.V(this).O(a,"submit",this.G);var b=this.K();g.NB(this,"click","show-search",function(){g.R(b,"expanded");g.Vf(function(){var c=g.D("channels-search-field"),d=g.D("circled-user-profiles");if(c&&(c.focus(),d)){c=c.getBoundingClientRect();var e=d.getBoundingClientRect();c.right+30>e.left&&(d.style.visibility="hidden")}},200)})};
OT.prototype.G=function(a){a.preventDefault();if(this.D.value.trim()){a=this.R("search-form");var b=g.Jo(g.os(a));a=g.ki(a.action,b).replace(/%20/g,"+");b={};var c=g.H("EVENT_ID");c&&(b.ei=c,b.feature="web-channel-search");g.yl(a,b)}};
g.OB(OT,"channel-search");var dU,eU=[];g.p(g.PT,g.Y);g.h=g.PT.prototype;g.h.Z=function(){g.Y.prototype.Z.call(this);var a=this.R("legal-text");if("false"!=g.L(this.K(),"autoscroll")){var b={start:0};b.end=a.scrollHeight-a.clientHeight;b.duration=b.end/3;b.uh="linear";this.G=new g.Ix(a,b);this.D=!0;g.V(this).O(a,"click",this.yH);g.V(this).O(a,"mouseover",this.AH);g.V(this).O(a,"mouseout",this.xH);g.V(this).O(a,"scroll",this.zH)}};
g.h.zH=function(){this.H||this.D||(this.G.pause(),this.H=!0)};
g.h.yH=function(){this.G.pause();this.D=!1;this.H=!0};
g.h.AH=function(){this.G.pause();this.D=!1};
g.h.xH=function(){this.D||this.H||(this.G.play(),this.D=!0)};
g.OB(g.PT,"c4-legal-info");var ST,QT=[],RT=null;var ZT,WT,VT,XT,hU=[],iU=[];g.p(g.aU,g.Y);g.h=g.aU.prototype;g.h.Z=function(){g.Y.prototype.Z.call(this);this.G=g.L(this.K(),"full-list-id");var a=g.V(this),b=this.R("playlist-share");b&&a.O(b,"click",this.VD);(b=this.R("addto-playlist-button"))&&a.O(b,"click",this.Uz);(b=this.R("report-playlist-button"))&&a.O(b,"click",this.pD);this.ea("yt-uix-videoactionmenu-hide",this.Gx);(a=g.N("pl-join-collaboration"))&&g.V(this).O(a,"click",this.bC)};
g.h.Uz=function(a){if(!this.D){a=a.currentTarget;if(a){var b=g.LC(a);b=g.N("playlist-add-to-menu",b)}b&&(a=g.L(a,"src-playlist-id"))&&(this.D=new g.nD({sourcePlaylistId:a}),this.D.Sa(b),g.le(this,this.D))}};
g.h.pD=function(){var a=g.N("report-playlist-dialog",void 0);g.Ts(g.D("flag-service-ajax-form"),{onSuccess:function(){g.R(a,"report-playlist-success")},
onFailure:function(){g.R(a,"report-playlist-failure")},
Ya:function(){g.QD.getInstance().show(a)}})};
g.h.VD=function(){var a=g.D("playlist-share-container"),b=g.D("playlist-share-alerts");if(g.lx(a))bU(a,b);else{if(!this.Ud){var c=g.D("playlist-share-loading");g.W(c);this.Ud=new g.ZO(a,null,this.G,function(){g.X(c);g.W(a);b&&g.W(b)},"playlist",!1,!0,null,null,null,null,null,null,10,null,null,"playlist")}g.le(this,this.Ud);
bU(a,b);g.zt("playlistShare")}};
g.h.Gx=function(){var a=g.N("playlist-add-to-menu"),b=g.N("playlist-menu");a=g.JC(a);b=g.JC(b);g.RC(g.IC.getInstance(),a);g.RC(g.IC.getInstance(),b)};
g.h.bC=function(a){a=g.L(a.currentTarget,"join-collaboration-token");g.K("/playlist_edit_service_ajax/?action_join_collaboration=1",{method:"POST",ia:{playlist_id:this.G,join_collaboration_token:a},onSuccess:function(b,c){c&&c.result&&c.result.redirect_url&&g.yl(c.result.redirect_url)},
context:this})};
g.OB(g.aU,"pl-header");g.t("yt.www.creator.yoda.tipaction.registerForCard",function(a){var b=g.CD.getInstance();a=g.D(g.Z(b,"card")+g.Zg(a));g.L(a,"has-tip-handler")||(g.Xs(a,"has-tip-handler","true"),g.Is(a,g.iI))},void 0);
g.p(cU,g.el);cU.prototype.enable=function(){g.el.prototype.enable.call(this);g.RE(g.OI)};
var fU={about:[function(){LT.init();g.hJ();IT.init()},
function(){LT.dispose();g.Jh(g.fJ);g.fJ.length=0;IT.dispose()}],
community:[function(){g.LO.init()},
function(){g.LO.dispose()}],
discussion:[function(){g.D("comment-section-renderer")&&g.LO.init()},
function(){g.LO.dispose()}],
feed:[function(){(g.N("activity-feeds-container")||g.D("browse-items-primary"))&&MT.init()},
function(){(g.N("activity-feeds-container")||g.D("browse-items-primary"))&&MT.dispose()}],
featured:[function(){ZT=new g.F;WT=g.H("CHANNEL_ID",void 0);(VT=$T("upsell-video"))&&iU.push(g.Tk("ypc-purchase-flow-start",ina));var a=$T("pyv-video-view");WT&&!a&&iU.push(g.Tk(g.mH,gna),g.Tk(g.nH,hna));hU.push(g.Ih("yt-uix-load-more-success",jna));g.D("channel-navigation-menu")||LT.init()},
function(){g.Jh(hU);hU.length=0;g.Uk(iU);iU.length=0;VT=null;ZT.dispose();g.D("channel-navigation-menu")||LT.dispose()}],
custom:[function(){NT.init()},
function(){NT.dispose()}],
playlist:[function(){g.aU.init()},
function(){g.aU.dispose()}]};
g.il(new cU);})(_yt_www);
