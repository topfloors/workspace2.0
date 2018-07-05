                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}

if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.studio)
{
vp.studio={};
}








vp.studio.LoginManager=function $vpfn_skGJkRPINYqnWhMatRZYtg20$25(fnIsUserLoggedIn,sTitle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.title=sTitle;




this.isGuestEnabled=false;




this.width=450;




this.height=380;





this.onstart=new vp.events.CustomEvent(this,"onstart");





this.onfinish=new vp.events.CustomEvent(this,"onfinish");







this.login=function $vpfn_EV3jFdJ9jLi586zXpJ16Hw63$17(fnCallback,sForwardURL)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oWin=null;

if(!fnIsUserLoggedIn())
{
me.onstart.fire();

var sUrl="/vp/ns/mini_sign_in.aspx?dialog=1";

if(me.isGuestEnabled)
{
sUrl+="&guest=1";
}

if(fnCallback)
{


var fnLoginCallbackWrapper=function $vpfn_xhN$E1gRTJ8VpmlF2a2NSA82$45()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.onfinish.fire();
fnIsUserLoggedIn(true);
fnCallback();
};

var iCallbackID=vp.win.createCallbackHandler(fnLoginCallbackWrapper);
sUrl+="&callback_id="+iCallbackID;
}

if(sForwardURL)
{
sUrl+="&rurl="+vp.web.urlEncode(sForwardURL);
}

vp.dialog.IFrameDialog.open(
"loginWin",
me.title,
sUrl,
vp.dialog.chrome.Primary,
me.width,
me.height);
}
else if(fnCallback)
{
fnCallback();
}

return oWin;
};

};
