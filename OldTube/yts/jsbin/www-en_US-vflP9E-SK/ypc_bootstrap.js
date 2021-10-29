(function(g){var window=this;var N0=function(){g.Sh()},O0=function(a){var b=a.itemData.itemId,c=a.config.flowType,d=a.offerData?a.offerData.offerId:null,e=a.innertubeRequestParams,f=a.transactionAction,k={};
k.ypc_it=a.itemData.itemType;k.ypc_ii=b;k.ypc_ft=c;e&&(k.ypc_irp=e);d&&(k.ypc_oi=d);f&&(k.ypc_ta=f);return k},Q0=function(){var a=ora,b=g.D("legacy-history-iframe");
this.G=this.D=this.C=null;this.F=a;this.L=P0?b:null;this.J=window;this.H=this.J.location;this.X=this.H.href.split("#")[0];this.N=(0,g.v)(this.M,this)},R0=function(a){a=a.H.href;
var b=a.indexOf("#");return 0>b?"":a.substring(b+1)},pra=function(a,b){var c=a.X+"#"+b,d=a.H.href;
d!=c&&d+"#"!=c&&g.mc(a.H,c)},S0=function(a,b){var c=a.L.contentWindow.document,d=c.body?c.body.innerHTML:"",e="#"+g.nc(b);
d!=e&&(d=g.Bp(g.Dp("title",{},window.document.title||""),g.Dp("body")),c.open("text/html"),c.write(g.fc(d)),g.O(c.body,e),c.close())},T0=function(){var a=ora;
this.H=this.L=this.C=null;this.D=a;this.G=window;this.F=this.G.location;this.N=(0,g.v)(this.J,this)},rra=function(){var a=qra("state");
a.setEnabled.call(a,!0,!0)},sra=function(a){var b=null,c=qra();
b=b||window.history&&window.history.state;c.replace.call(c,a,b,!0)},qra=function(a){var b=g.u("ytglobal.HistoryHistoryInstance");
b||("state"==(void 0===a?"hash":a)?(b=new T0,T0.prototype.setEnabled=T0.prototype.sb,T0.prototype.add=T0.prototype.add,T0.prototype.replace=T0.prototype.replace):(b=new Q0,Q0.prototype.setEnabled=Q0.prototype.sb,Q0.prototype.add=Q0.prototype.add,Q0.prototype.replace=Q0.prototype.add),g.t("ytglobal.HistoryHistoryInstance",b,void 0));return b},ora=function(a,b){g.J("navigate",a,b)},V0=function(a){var b=g.H("YPC_LOADER_CSS",void 0),c=g.H("YPC_LOADER_JS",void 0);
tra&&(c="www/ypc_core");U0.length||(U0.push(new g.Bf(function(d){g.pl(b,d)})),U0.push(new g.Bf(function(d){g.hk(c,d)})));
g.Jf(U0).then(function(){a&&a()})},X0=function(a,b,c,d,e){if(g.eG())V0(function(){g.u("yt.ypc.checkout.showYpcOverlay")(a,b,c,d,e)});
else{var f={ypc_it:a,ypc_ii:b,ypc_ft:c};d&&(f.ypc_irp=d);e&&(f.ypc_cc=e);f=W0(f);g.wl(f)}},ura=function(a){if(g.eG())V0(function(){g.u("yt.ypc.checkout.showPrepurchaseOverlay")(a)});
else{var b=W0({});g.wl(b)}},vra=function(a,b){if(g.eG())V0(function(){g.u("yt.ypc.checkout.showYpcOverlayForInnertubeRequestParams")(a,b)});
else{var c=W0({ypc_ft:a,ypc_irp:b});g.wl(c)}},wra=function(a,b,c){g.eG()?V0(function(){g.u("yt.ypc.checkout.offerpurchaser.purchaseOffer")(a,c)}):(b=W0(b),g.wl(b))},xra=function(a,b){if(g.eG())V0(function(){g.u("yt.ypc.subscription.openUnsubscribeOverlay")(a,b)});
else throw Error("Unsubscribe triggered when user not signed in.");},W0=function(a){a=g.ki(window.location.href,a);
var b=g.H("YPC_SIGNIN_URL",void 0),c=g.Ps(b)["continue"];c=g.ki(c,{next:a});return g.ki(b,{"continue":c})},zra=function(a){if(a=a.currentTarget)yra(a),(a=g.L(a,"ytr-prepurchase-html"))&&ura(g.Np(a))},Ara=function(a){var b=a.currentTarget;
if(b)if(a=g.L(b,"ypc-transaction-action"),b=g.eQ(b,"D")){if(b.gtmData){var c=JSON.parse(b.gtmData);c&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(c))}(a="start_payment"==a)&&Y0("inline-offer-button-click",b.itemData);wra(b,O0(b),a);setTimeout(N0,0)}else g.ah(Error("ypc-offer-button does not contain purchaseFlowData."))},Cra=function(a){(a=a.currentTarget)&&Bra(a)},Dra=function(a){V0(a.callback)},Era=function(a){Y0("container-button-click-attempt");
var b=g.N("ypc-checkout-button",a.container);(a=g.N("ytr-purchase-button",a.container))?(b=g.G(a,"ypc-offer-button"),(a.href||b)&&a.click()):b&&Bra(b)},Fra=function(a){var b=a.C;
a=b.itemId;var c=b.itemType;b=b.flowType;Y0("paid-subscribe-button-click",{itemType:c,itemId:a});X0(c,a,b)},Bra=function(a){var b=g.L(a,"ypc-item-type"),c=g.L(a,"ypc-item-id"),d=g.L(a,"ypc-flow-type");
a=g.L(a,"ypc-irp")||void 0;g.eG()?Y0("purchase-button-click",{itemId:c,itemType:b}):Y0("signin-button-click");X0(b,c,d,a)},Gra=function(a){var b=a.currentTarget;
a=g.L(b,"ypc-item-type");b=g.L(b,"ypc-item-id");a&&b&&(Y0("unsubscribe-button-click",{itemId:b,itemType:a}),xra(a,b))},Hra=function(a){var b=a.C;
a=b.itemType;b=b.itemId;Y0("paid-unsubscribe-button-click",{itemType:a,itemId:b});xra(a,b)},Y0=function(a,b){var c={};
g.mb(c,{label:a,pageName:g.H("PAGE_NAME")});b&&g.mb(c,b);g.xt("ypc-checkout",g.Ec(c))},yra=function(a){var b;
g.G(a,"yt-unlimited-more-offer-button")?b="YTO_GTM_2_BUTTON_CLICK_DATA":g.G(a,"ypc-offer-button")&&(b="YTO_GTM_1_BUTTON_CLICK_DATA");b&&(a=g.H(b,""))&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(a))},Ira=function(a){a=a.currentTarget;
var b=g.L(a,"tab-id");if(b){for(var c=g.M("offer-module-tab-content"),d=0;d<c.length;d++)c[d].classList.remove("active-tab");c=g.M("offer-module-tab");for(d=0;d<c.length;d++)c[d].classList.remove("active-tab");g.D(b).classList.add("active-tab");a.classList.add("active-tab")}},Jra=function(a){if(a=a.currentTarget){yra(a);
var b=g.eQ(a,"U");b?(V0(function(){g.u("yt.ypc.checkout.offerpurchaser.completeTransaction")(b)}),setTimeout(N0,0)):g.ah(Error("ypc-complete-transaction-button does not contain purchaseFlowData"))}},Kra=function(a){a=a.currentTarget;
var b=g.L(a,"feedback-token");b&&(a={itct:g.L(a,"innertube-clicktracking"),feedback_tokens:[b],wait_for_response:1},g.K("/feed_change_ajax?action_give_feedback=1",{method:"POST",onSuccess:function(c,d){d&&d.actions&&g.Kp(d.actions.url_endpoint.url,window,g.tb("_self"))},
ia:a}))},Nra=function(){var a=g.Ps(window.location.href);
if(Lra){g.bb(Mra,function(c){g.gb(a,c)});
var b=g.Fc(window.location.href.split("?",2)[0],a);rra();sra(b)}},Ora=g.Fg&&8<=document.documentMode||g.Un&&g.Yc("1.9.2")||g.Vn&&g.Yc("532.1"),P0=g.Fg&&!Ora;
Q0.prototype.sb=function(a,b){this.D&&(g.lh(this.D),delete this.D);this.G&&(g.qh(this.G),delete this.G);if(a){this.C=R0(this);if(P0){var c=this.L.contentWindow.document.body;c&&c.innerHTML||S0(this,this.C)}b||this.F(this.C);Ora?this.D=g.I(this.J,"hashchange",this.N):this.G=g.oh(this.N,200)}};
Q0.prototype.M=function(){if(P0){var a=(a=this.L.contentWindow.document.body)?g.oc(g.hr(a).substring(1)):"";a!=this.C?(this.C=a,pra(this,a),this.F(a)):(a=R0(this),a!=this.C&&(this.C=a,S0(this,a),this.F(a)))}else a=R0(this),a!=this.C&&(this.C=a,this.F(a))};
Q0.prototype.add=function(a,b,c){this.C=""+a;P0&&S0(this,a);pra(this,a);c||this.F(this.C)};T0.prototype.sb=function(a,b){this.H&&(g.lh(this.H),delete this.H);this.L&&(g.qh(this.L),delete this.L);a&&Lra&&(this.C=this.F.href,b||this.D(this.C),this.H=g.I(this.G,"popstate",this.N))};
T0.prototype.J=function(a){var b=this.F.href;if((a=a.state)||b!=this.C)this.C=b,this.D(b,a)};
T0.prototype.add=function(a,b,c){if(a||b)a=a||this.F.href,this.G.history.pushState(b,"",a),this.C=a,c||this.D(a,b)};
T0.prototype.replace=function(a,b,c){if(a||b)a=a||this.F.href,this.G.history.replaceState(b,"",a),this.C=a,c||this.D(a,b)};
var Lra=!!window.history.pushState&&(!g.Vn||g.Vn&&g.Yc("534.11"));var U0=[],tra=!1;var Z0=[],$0=[];var Mra={NJ:"ypc_cc",kK:"ypc_ft",CK:"ypc_irp",FK:"ypc_ii",GK:"ypc_it"};g.hl(g.mt({name:"www/ypc_bootstrap",deps:["www/common"],page:"feed index results watch channel playlist subscription_manager unlimited live_chat live_dashboard".split(" "),init:function(){tra=!0;g.N("ypc-delayedloader-target")&&V0();var a=g.Ps(window.location.href),b=a.ypc_it,c=a.ypc_ii,d=a.ypc_ft||"D",e=a.ypc_oi,f=a.ypc_irp,k=a.ypc_cc,l=a.ypc_ta;"channel"==g.H("PAGE_NAME")&&"ypc_cc"in a&&(b="U",c=g.H("CHANNEL_ID",void 0));if(f||c&&b)Nra(),"start_payment"==l?(a=g.dQ(e,b,c,d,k,null,"","",f,l),wra(a,
O0(a),!0)):c&&b?X0(b,c,d,f,k):vra(d,f);Z0.push(g.U(document.body,"click",Cra,"ypc-checkout-button"),g.U(document.body,"click",Ara,"ypc-offer-button"),g.U(document.body,"click",Jra,"ypc-complete-transaction-button"),g.U(document.body,"click",zra,"ytr-pre-purchase-button"),g.U(document.documentElement,"click",Gra,"ypc-unsubscribe-link"),g.U(document.documentElement,"click",Gra,"ypc-unsubscribe-button"),g.U(document.documentElement,"click",Ira,"offer-module-tab"),g.U(document.documentElement,"click",
Kra,"yt-unlimited-more-offer-button"));$0.push(g.Sk(g.dH,Dra),g.Sk(g.DR,Era),g.Sk(g.eH,Fra),g.Sk(g.hH,Hra))},
dispose:function(){U0.length=0;g.lh(Z0);Z0.length=0;g.Tk($0);$0.length=0}}));
g.t("yt.ypc.bootstrap.api.loadOffers",X0,void 0);g.t("yt.ypc.bootstrap.api.loadOffersForInnertubeRequestParams",vra,void 0);})(_yt_www);
