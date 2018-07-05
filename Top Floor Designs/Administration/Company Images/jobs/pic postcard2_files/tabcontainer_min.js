                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}(function $vpfn_QSl_gsp0iZ7u8JbIn0A__Q1$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$.fn.tabContainer=function $vpfn_bcvnM4LwgvwUMmHieDdJEA3$24(jQueryUIOptions,controlOptions){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var $headerLinks=$(this).find("> .tab-container-headers > li > a");
var $contents=$(this).find(".tab-container-contents");
var $content=$(this).find(".tab-container-content");


var currMaxHeaderHeight=0;
$headerLinks.each(function $vpfn_QSl_gsp0iZ7u8JbIn0A__Q11$24(i){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($(this).height()>currMaxHeaderHeight)
{
currMaxHeaderHeight=$(this).height();
}
});


if(currMaxHeaderHeight>0)
{
$headerLinks.height(currMaxHeaderHeight);
}


if(controlOptions.equalizeContentHeights!==false)
{
$contents.css("height",$(this).find(".tab-container-content-default").css("height"));
}



$content.each(function $vpfn_QSl_gsp0iZ7u8JbIn0A__Q32$22(i){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!($(this).hasClass("tab-container-content-default")))
{
$(this).addClass("tab-container-content-transparent").addClass("tab-container-content-ready");
}
});

if(controlOptions.equalizeContentHeights===true)
{


var currMaxContentHeight=0;
$content.each(function $vpfn_QSl_gsp0iZ7u8JbIn0A__Q44$24(i){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($(this).height()>currMaxContentHeight)
{
currMaxContentHeight=$(this).height();
}
});
$contents.css("min-height",currMaxContentHeight+parseInt($content.css("paddingTop"))+parseInt($content.css("paddingBottom"))).css("height","auto");
}


this.tabs(jQueryUIOptions);


this.tabs({panelTemplate:"<div class='tab-container-content tab-container-content-ready'></div>"});

if(!vp.browser.isIE||vp.browser.ver>8)
{
this.tabs({fx:{opacity:'toggle',duration:'fast'}});
}


$content.removeClass("tab-container-content-transparent");
$content.addClass("tab-container-content-opaque clearfix");


this.trigger("tabsinitialize");

return(this);
};

})(jQuery);
