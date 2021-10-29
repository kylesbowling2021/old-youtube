(function(g){var window=this;var dW=function(a,b,c){g.F.call(this);this.C=null;this.jb=a;this.D=b;this.G=c;this.F=new g.GJ(this)},eW=function(a){a.C||(a.C=g.N("filter-crumb-ghost",a.jb));
return a.C},fW=function(a){return g.G(a,"filter-ghost")&&!g.G(a,"filter-disabled")},hW=function(){g.F.call(this);
this.F=!1;this.C=[];var a=g.N("search-header"),b=g.N("filter-crumb-list"),c=g.D("filter-dropdown"),d;if(d=b)if(d=g.M("filter-crumb",b),d.length){var e=g.Qr(b);e=e.left+e.width;d=g.Qr(d[d.length-1]);d=184<=e-(d.left+d.width)}else d=!0;a&&c&&d&&(a=new dW(a,b,c),a.init(),g.le(this,a));g.LI();if(document.atmfc)for(a=gW(),b=g.M("yt-lockup-video",document.atmfc),c=0;d=b[c++];)if(e=g.L(d,"context-item-id")){var f=g.be("INPUT",{className:"copyright-cop-checkbox",type:"checkbox",name:e});-1<(0,g.Va)(a,e)&&
(f.checked=!0);this.C.push(g.I(f,"change",yoa),g.I(f,"click",zoa));d.appendChild(f)}},gW=function(){var a=document.atmfc.selected_vids.value;
return a?a.split(","):[]},iW=function(a){document.atmfc.selected_vids.value=a.join(",")},zoa=function(a){a.stopPropagation()},yoa=function(a){var b=gW();
a=a.target;var c=a.name;a.checked?g.Vo(b,c):g.Za(b,c);iW(b)};g.p(dW,g.F);g.h=dW.prototype;g.h.W=function(){g.F.prototype.W.call(this);this.F.removeAll();this.G=this.D=this.jb=this.C=null};
g.h.init=function(){var a=this.D,b=g.ee("li");b.className="filter-crumb filter-crumb-ghost";var c=g.kc(g.tb("Constant HTML to be immediatelly used."),g.sb(g.tb('<a class="filter"><span class="filter-text filter-ghost"></span><span class="yt-close">&times;</span></a>')));g.Fp(b,c);a.appendChild(b);a=this.jb;b=["filter-crumb","yt-close"];c=[];for(var d=0;d<b.length;++d){var e=b[d];if(c.length)c=g.M(e,a);else{for(var f=[],k=0;k<c.length;++k)for(var l=g.M(e,c[k]),m=0;m<l.length;++m)f.push(l[m]);c=f}}(0,g.E)(c,
this.St,this);a=this.G;g.HJ(this.F,a,"mouseover",this.EB,"filter-ghost");g.HJ(this.F,a,"mouseout",this.DB,"filter-ghost")};
g.h.St=function(a){this.F.ye(a,"click",this.CB)};
g.h.CB=function(a){g.R(g.Q(a.target,"filter-crumb"),"filter-crumb-removed")};
g.h.EB=function(a){var b=a.target;if(fW(b)){a=eW(this);b=g.hr(b);var c=g.N("filter-ghost",a);g.O(c,b);g.R(a,"filter-crumb-active")}};
g.h.DB=function(a){fW(a.target)&&(a=eW(this),g.T(a,"filter-crumb-active"))};g.p(hW,g.F);hW.prototype.W=function(){g.F.prototype.W.call(this);this.F=!1;for(var a=0;a<this.C.length;++a)g.lh(this.C[a]);this.C=[];var b=window._402;b&&b.close&&b.close()};
var jW=null;g.hl(g.mt({name:"www/results",deps:["www/common"],page:"results",init:function(){jW&&jW.dispose();jW=null;jW=new hW},
dispose:function(){jW&&jW.dispose();jW=null}}));
g.t("yt.www.search.checkAll",function(a){for(var b=gW(),c=g.M("copyright-cop-checkbox",document.atmfc),d=0,e;e=c[d++];)e.checked!=a&&(e.checked=a,e=e.name,a?g.Vo(b,e):g.Za(b,e));iW(b)},void 0);
g.t("yt.www.search.toggleWatchCard",function(){if(jW){var a=jW;a.F||(a.F=!0,g.Vm("action=searchwcexpand"))}},void 0);})(_yt_www);
