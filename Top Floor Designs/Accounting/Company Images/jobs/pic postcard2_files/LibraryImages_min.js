                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



vp.define("vp.images");

vp.images.LibraryImagesMap={};
vp.images.LibraryImages=function $vpfn_djuT271V3QBV1P_Vr4$iCg8$26(sContainerId,fnImageSelectCallback,iPageSize,iSearchLocation)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


var _jContainer=$("#"+sContainerId);


var _oSearch=null;


var _oDisplay=null;




this.search=function $vpfn_FEgqwpzV2k5pgSS5vDpD0A24$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sInput=_jContainer.find(".search-word").val()||"";


if(!sInput.trim())
{
return;
}


_jContainer.find(".loaded-images").hide();
_jContainer.find(".loading-images").show();


_oSearch=new vp.image.LibraryImageSearch(searchComplete,
{
searchWords:sInput,
searchLocation:iSearchLocation
});


_oSearch.search();
};
var searchComplete=function $vpfn_Terz_hEI8cYpEa7GJeWsEQ48$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(e.target!=_oSearch)
{
return;
}


var aImages=_oSearch.images;
if(!aImages)
{
return;
}


_jContainer.find(".loading-images").hide();
_jContainer.find(".loaded-images").show();


if(aImages.length>0)
{
showImages(aImages);

_jContainer.find(".no-images").hide();
_jContainer.find(".show-images").show();
}
else
{
_jContainer.find(".show-images").hide();
_jContainer.find(".no-images").show();
}


var oDialog=vp.dialog.getCurrent();
if(oDialog)
{
oDialog.resizeToFitContent(false);
}
};
var showImages=function $vpfn_0U7RVMV5cqb2S4j2UQckUg88$21(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_oDisplay)
{
_oDisplay=new vp.widget.SelectableItems(
_jContainer.find(".image-list")[0],
buildImage,
{
itemsPerPage:iPageSize,
paginators:[_jContainer.find(".image-paginator").children()[0]],
notDraggables:".item-container",
previewSelector:".item-preview",
draggableSelector:".item-container",
clickToSelect:false,
dragToSelect:false,
makeItemsDraggable:false,
scope:"uploader"
});
}


_oDisplay.updateItems(aImages,false,{imageDropHandler:onChooseImage});
};
var buildImage=function $vpfn_KWQx5bWJbc_w2nLqiiJCDA112$21(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var elements=vp.images.buildImage(oImage,onChooseImage,false);
return elements.jContainer;
};


var onChooseImage=function $vpfn_V8tivW$vCF3k3ozdMBf4OA120$24(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(aImages.length>0)
{
fnImageSelectCallback(aImages[0]);
}
};





var onKey=function $vpfn_2iHg_MiJhWbm9AUN_rn7cw133$16(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);

if(e.keyCode==13)
{
me.search();
vp.events.cancelEvent(e);
}
};

var init=function $vpfn_57X4RBsL4Z0vBV84inF2FQ144$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_jContainer.find(".search-word").keydown(onKey);


_jContainer.find(".search-start").click(function $vpfn_N6us4Biabvt8FX9KT0UjbA150$48(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.search();
return false;
});
};
init();
};
