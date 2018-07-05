                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.widget)
{
vp.widget={};
}

vp.widget.floatingPanel=function $vpfn_hpdTScr6iw_QURXsoNXvpA14$26(anchor,userOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.options={
skin:"primary",
size:null,
position:{my:"left top",at:"right center",of:anchor},
singular:true,
onshow:function(){},
onhide:function(){},
onbeforehide:function $vpfn_7bzi9q1QUdIrCTlXybuVrw23$22(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}return true;}
};

this.anchorElement=anchor;

this.element=null;

this.options=$.extend(this.options,userOptions);

this.identifier=Math.random();

var init=function $vpfn_B_3v3fXjqPG$6iezQr878w34$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.element=$(
"<div id='floatingPanel"+this.identifier+"' class='floatingPanel floatingPanel-skin-"+this.options.skin.toLowerCase()+"'>"
+"<div class='floatingPanel-inner'>"
+"   <div class='floatingPanel-header'>"
+"       <div class='floatingPanel-close'></div>"
+"       <div class='floatingPanel-header-inner'></div>"
+"   </div>"
+"   <div class='floatingPanel-content'></div>"
+"</div>"
+"<div class='floatingPanel-arrow'></div>"
);

var arrowPosition;
if(this.options.pointFrom)
{
arrowPosition=this.options.pointFrom;
}
else
{
if(this.options.position)
{
arrowPosition=this.options.position.at;
}
}

if(arrowPosition)
{
if(arrowPosition.indexOf("right")>-1)
{
this.element.find(".floatingPanel-arrow").addClass("floatingPanel-arrow-left");
}
else if(arrowPosition.indexOf("left")>-1)
{
this.element.find(".floatingPanel-arrow").addClass("floatingPanel-arrow-right");
}
else if(arrowPosition.indexOf("top")>-1)
{
this.element.find(".floatingPanel-arrow").addClass("floatingPanel-arrow-bottom");
}
else if(arrowPosition.indexOf("bottom")>-1)
{
this.element.find(".floatingPanel-arrow").addClass("floatingPanel-arrow-top");
}
}

if(this.options.hideCloseButton)
{
this.element.find(".floatingPanel-close").remove();
}

if(this.options.draggable)
{
if(this.options.skin.toLowerCase()==='dialog')
{
this.options.draggable.handle=".floatingPanel-header";
}
if(this.options.draggable.handle)
{
this.element.addClass("floatingPanel-draggable-header");
}
}

if(this.options.size)
{
this.element.css(this.options.size);
}

if(this.options.header)
{
this.element.find(".floatingPanel-header-inner").append(this.options.header);
}
else
{
this.options.content.css("top","-10px");
}

if(this.options.content)
{
this.element.find(".floatingPanel-content").append(this.options.content);
}

this.options.position.of=this.anchorElement;

if(this.options.atElement)
{
this.anchorElement.append(this.element);
}
else
{
$("body").append(this.element);
}


var me=this;

this.anchorElement.prop("floatingPanel",this);

if(this.options.draggable)
{
this.element.draggable(this.options.draggable);
this.element.bind("drag",function $vpfn_7bzi9q1QUdIrCTlXybuVrw136$38(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}$(".floatingPanel-arrow",me.element).hide();
me.animationOptions="";});
}

if(this.options.resizable)
{
this.element.resizable(this.options.resizable);
}
};

this.show=function $vpfn_jI30b4quf2u7AC_pMM4UkQ146$16(options)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
if($("body").find(this.element).is(":visible"))
{
return;
}
if(this.options.singular)
{
$(".floatingPanel").not(this.element).detach();
}
if($("body").find(this.element).length===0)
{
if(this.element)
{
this.element.css({top:"",left:""});
$("body").append(this.element);
}
else
{
init.call(this);
}
}

if(!vp.browser.isIE||(vp.browser.isIE&&vp.browser.ver>=8))
{
this.animationOptions=options;
}

if(this.animationOptions)
{
this.element.position(this.options.position);
}

if(!vp.browser.isIE||(vp.browser.isIE&&vp.browser.ver>=8))
{
this.element.show(options,null,function $vpfn_7bzi9q1QUdIrCTlXybuVrw182$45(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.options.onshow();});
if(!options)
{
this.options.onshow();
}
}
else
{
this.element.show();
this.options.onshow();
}
$(".floatingPanel-arrow",this.element).show();

if(!this.animationOptions)
{
this.element.position(this.options.position);
}
setTimeout(function $vpfn_7bzi9q1QUdIrCTlXybuVrw199$19(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}$("body").click(function $vpfn_7bzi9q1QUdIrCTlXybuVrw199$48(event){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var continueHiding=me.options.onbeforehide.call(me,event);
if(!continueHiding)
{
return;
}
if((me.element.find($(event.target)).length===0&&me.element[0]!==event.target)||event.target===$(".floatingPanel-close")[0])
{
me.hide();
$(this).unbind(event);
}
});},0);
};

this.hide=function $vpfn_zJ76JsCMeStYEUz9RKZV8w213$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
if(this.animationOptions)
{
this.element.hide(this.animationOptions,function $vpfn_7bzi9q1QUdIrCTlXybuVrw218$53(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.element.detach();
me.options.onhide();});
}
else
{
this.element.detach();
me.options.onhide();
}
};

this.setHeader=function $vpfn_ux6S4FbVIBJxZBmQ65TEZw228$21(newHeader)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.options.header=newHeader;
};

init.call(this);
};
