(function(g){var window=this;var rra=function(){g.Sh()},sra=function(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,k={};
k.ypc_it=a.itemData.itemType;k.ypc_ii=b;k.ypc_ft=c;e&&(k.ypc_irp=e);d&&(k.ypc_oi=d);f&&(k.ypc_ta=f);return k},P0=function(){var a=tra,b=g.D("legacy-history-iframe");
this.G=this.D=this.C=null;this.F=a;this.L=O0?b:null;this.J=window;this.H=this.J.location;this.X=this.H.href.split("#")[0];this.N=(0,g.v)(this.M,this)},Q0=function(a){a=a.H.href;
var b=a.indexOf("#");return 0>b?"":a.substring(b+1)},ura=function(a,b){var c=a.X+"#"+b,d=a.H.href;
d!=c&&d+"#"!=c&&g.mc(a.H,c)},R0=function(a,b){var c=a.L.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+g.nc(b);
d!=e&&(d=g.Cp(g.Ep("title",{},window.document.title||""),g.Ep("body")),c.open("text/html"),c.write(g.fc(d)),g.O(c.body,e),c.close())},S0=function(){var a=tra;
this.H=this.L=this.C=null;this.D=a;this.G=window;this.F=this.G.location;this.N=(0,g.v)(this.J,this)},wra=function(){var a=vra("state");
a.setEnabled.call(a,!0,!0)},xra=function(a){var b=null,c=vra();
b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)},vra=function(a){var b=g.u("ytglobal.HistoryHistoryInstance");
b||("state"==(void 0===a?"hash":a)?(b=new S0,S0.prototype.setEnabled=S0.prototype.sb,S0.prototype.add=S0.prototype.add,S0.prototype.replace=S0.prototype.replace):(b=new P0,P0.prototype.setEnabled=P0.prototype.sb,P0.prototype.add=P0.prototype.add,P0.prototype.replace=P0.prototype.add),g.t("ytglobal.HistoryHistoryInstance",b,void 0));return b},tra=function(a,b){g.J("navigate",a,b)},U0=function(a){var b=g.H("YPC_LOADER_CSS",void 0),c=g.H("YPC_LOADER_JS",void 0);
yra&&(c="www/ypc_core");T0.length||(T0.push(new g.Bf(function(d){g.ql(b,d)})),T0.push(new g.Bf(function(d){g.ik(c,d)})));
g.Jf(T0).then(function(){a&&a()})},W0=function(a,b,c,d,e){if(g.fG())U0(function(){g.u("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=V0(f);g.xl(f)}},zra=function(a){if(g.fG())U0(function(){g.u("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=V0({});g.xl(b)}},Ara=function(a,b){if(g.fG())U0(function(){g.u("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=V0({ypc_ft:a,ypc_irp:b});g.xl(c)}},Bra=function(a,b,c){g.fG()?U0(function(){g.u("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=V0(b),g.xl(b))},Cra=function(a,b){if(g.fG())U0(function(){g.u("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");},V0=function(a){a=g.ki(window.location.href,a);
var b=g.H("YPC_SIGNIN_URL",void 0),c=g.Qs(b)["continue"];c=g.ki(c,{next:a});return g.ki(b,{"continue":c})},Era=function(a){if(a=a.currentTarget)Dra(a),(a=g.L(a,"ytr-prepurchase-html"))&&zra(g.Op(a))},Fra=function(a){var b=a.currentTarget;
if(b)if(a=g.L(b,"ypc-transaction-action"),b=g.gQ(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&X0("inline-offer-button-click",b.itemData);Bra(b,sra(b),a);setTimeout(rra,0)}else g.ah(Error("ypc-offer-button does not contain purchaseFlowData."))},Hra=function(a){(a=a.currentTarget)&&Gra(a)},Ira=function(a){U0(a.callback)},Jra=function(a){X0("container-button-click-attempt");
var b=g.N("ypc-checkout-button",a.container);(a=g.N("ytr-purchase-button",a.container))?(b=g.G(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&Gra(b)},Kra=function(a){var b=a.C;
a=b.itemId;var c=b.itemType;b=b.flowType;X0("paid-subscribe-button-click",{itemType:c,itemId:a});W0(c,a,b)},Gra=function(a){var b=g.L(a,"ypc-item-type"),c=g.L(a,"ypc-item-id"),d=g.L(a,"ypc-flow-type");
a=g.L(a,"ypc-irp")||void 0;g.fG()?X0("purchase-button-click",{itemId:c,itemType:b}):X0("signin-button-click");W0(b,c,d,a)},Lra=function(a){var b=a.currentTarget;
a=g.L(b,"ypc-item-type");b=g.L(b,"ypc-item-id");a&&b&&(X0("unsubscribe-button-click",{itemId:b,itemType:a}),Cra(a,b))},Mra=function(a){var b=a.C;
a=b.itemType;b=b.itemId;X0("paid-unsubscribe-button-click",{itemType:a,itemId:b});Cra(a,b)},X0=function(a,b){var c={};
g.mb(c,{label:a,pageName:g.H("PAGE_NAME")});b&&g.mb(c,b);g.zt("ypc-checkout",g.Ec(c))},Dra=function(a){var b;
g.G(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":g.G(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=g.H(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))},Nra=function(a){a=a.currentTarget;
var b=g.L(a,"tab-id");if(b){for(var c=g.M("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=g.M("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");g.D(b).classList.add("active-tab");a.classList.add("active-tab")}},Ora=function(a){if(a=a.currentTarget){Dra(a);
var b=g.gQ(a,"U");b?(U0(function(){g.u("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(rra,0)):g.ah(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}},Pra=function(a){a=a.currentTarget;
var b=g.L(a,"feedback-token");b&&(a={itct:g.L(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},g.K("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){d&&d.actions&&g.Lp(d.actions.url_endpoint.url,window,g.tb("_self"))},
ia:a}))},Sra=function(){var a=g.Qs(window.location.href);
if(Qra){g.bb(Rra,function(c){g.gb(a,c)});
var b=g.Fc(window.location.href.split("?",2)[0],a);wra();xra(b)}},Tra=g.Fg&&8<=document.documentMode||g.Vn&&g.Yc("1.9.2")||g.Wn&&g.Yc("532.1"),O0=g.Fg&&!Tra;
P0.prototype.sb=function(a,b){this.D&&(g.lh(this.D),delete this.D);this.G&&(g.qh(this.G),delete this.G);if(a){this.C=Q0(this);if(O0){var c=this.L.contentWindow.document.body;c&&c.innerHTML||R0(this,this.C)}b||this.F(this.C);Tra?this.D=g.I(this.J,"hashchange",this.N):this.G=g.oh(this.N,200)}};
P0.prototype.M=function(){if(O0){var a=(a=this.L.contentWindow.document.body)?g.oc(g.ir(a).substring(1)):"";a!=this.C?(this.C=a,ura(this,a),this.F(a)):(a=Q0(this),a!=this.C&&(this.C=a,R0(this,a),this.F(a)))}else a=Q0(this),a!=this.C&&(this.C=a,this.F(a))};
P0.prototype.add=function(a,b,c){this.C=""+a;O0&&R0(this,a);ura(this,a);c||this.F(this.C)};S0.prototype.sb=function(a,b){this.H&&(g.lh(this.H),delete this.H);this.L&&(g.qh(this.L),delete this.L);a&&Qra&&(this.C=this.F.href,b||this.D(this.C),this.H=g.I(this.G,"popstate",this.N))};
S0.prototype.J=function(a){var b=this.F.href;if((a=a.state)||b!=this.C)this.C=b,this.D(b,a)};
S0.prototype.add=function(a,b,c){if(a||b)a=a||this.F.href,this.G.history.pushState(b,"",a),this.C=a,c||this.D(a,b)};
S0.prototype.replace=function(a,b,c){if(a||b)a=a||this.F.href,this.G.history.replaceState(b,"",a),this.C=a,c||this.D(a,b)};
var Qra=!!window.history.pushState&&(!g.Wn||g.Wn&&g.Yc("534.11"));var T0=[],yra=!1;var Y0=[],Z0=[];var Rra={NJ:"ypc_cc",kK:"ypc_ft",CK:"ypc_irp",FK:"ypc_ii",GK:"ypc_it"};g.il(g.nt({name:"www/ypc_bootstrap",deps:["www/common"],page:"feed index results watch channel playlist subscription_manager unlimited live_chat live_dashboard".split(" "),init:function(){yra=!0;g.N("ypc-delayedloader-target")&&U0();var a=g.Qs(window.location.href),b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,k=a.ypc_cc,l=a.ypc_ta;"channel"==g.H("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=g.H("CHANNEL_ID",void 0));if(f||c&&b)Sra(),"start_payment"==l?(a=g.fQ(e,b,c,d,k,null,"","",f,l),Bra(a,
sra(a),!0)):c&&b?W0(b,c,d,f,k):Ara(d,f);Y0.push(g.U(document.body,"click",Hra,"ypc-checkout-button"),g.U(document.body,"click",Fra,"ypc-offer-button"),g.U(document.body,"click",Ora,"ypc-complete-transaction-button"),g.U(document.body,"click",Era,"ytr-pre-purchase-button"),g.U(document.documentElement,"click",Lra,"ypc-unsubscribe-link"),g.U(document.documentElement,"click",Lra,"ypc-unsubscribe-button"),g.U(document.documentElement,"click",Nra,"offer-module-tab"),g.U(document.documentElement,"click",
Pra,"yt-unlimited-more-offer-button"));Z0.push(g.Tk(g.eH,Ira),g.Tk(g.FR,Jra),g.Tk(g.fH,Kra),g.Tk(g.iH,Mra))},
dispose:function(){T0.length=0;g.lh(Y0);Y0.length=0;g.Uk(Z0);Z0.length=0}}));
g.t("yt.ypc.bootstrap.api.loadOffers",W0,void 0);g.t("yt.ypc.bootstrap.api.loadOffersForInnertubeRequestParams",Ara,void 0);})(_yt_www);
