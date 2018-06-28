                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



vp.define("vp.images");

vp.images.MyImagesMap={};
vp.images.MyImages=function $vpfn_chYa_dGx4dXf0mRuP8pZzA8$21(sContainerId,fnIsUserLoggedIn,fnImageSelectCallback,eSearchTypes,bMultiSelect,iPageSize,sPfid)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


var _jContainer=$("#"+sContainerId);


var _showSearchTypes=eSearchTypes;
this.showSearchTypes=eSearchTypes;


var _eImageTypes=eSearchTypes;


var _oSearch=null;
var _bSearched=false;


var _oDisplayImages=null;
var _oDisplayAlbums=null;


this.onrefreshitem=new vp.events.CustomEvent(this,"onrefreshitem");





this.refresh=function $vpfn_L6nCV_ZorvaTkjWW2XGgOA37$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var bImages=_jContainer.find(".show-images").is(":visible");
var bAlbums=_jContainer.find(".show-albums").is(":visible");
if(!bImages&&!bAlbums)
{
return;
}


var oDisplay=bImages?_oDisplayImages:_oDisplayAlbums;
var aItems=oDisplay.getItemsOnPage();


for(var i=0,l=aItems.length;i<l;i++)
{
var oItem=aItems[i];
if(bImages)
{
me.onrefreshitem.fire({image:oItem});
}
else
{
me.onrefreshitem.fire({album:oItem});
}
}


oDisplay.refreshItems();
};




this.load=function $vpfn_02XFHY8PUAsSIhtdaEDzTQ72$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_jContainer.find(".image-types").length>0)
{

var bShowUploads=(_showSearchTypes&me.showSearchTypes&vp.image.search.Type.Upload)>0;
var bShowLogos=(_showSearchTypes&me.showSearchTypes&vp.image.search.Type.Logo)>0;
var bShowCaricatures=(_showSearchTypes&me.showSearchTypes&vp.image.search.Type.Caricature)>0;
var bShowAlbums=bShowUploads&&(_showSearchTypes&me.showSearchTypes&vp.image.search.Type.Album)>0;

_jContainer.find(".image-types .type-uploads").toggle(bShowUploads);
_jContainer.find(".image-types .type-logos").toggle(bShowLogos);
_jContainer.find(".image-types .type-caricatures").toggle(bShowCaricatures);
_jContainer.find(".image-types .type-albums").toggle(bShowAlbums);


_eImageTypes=bShowUploads?vp.image.search.Type.Upload:(bShowLogos?vp.image.search.Type.Logo:vp.image.search.Type.Caricature);

_jContainer.find(".image-types .type-uploads input").attr('checked',_eImageTypes==vp.image.search.Type.Upload);
_jContainer.find(".image-types .type-logos input").attr('checked',_eImageTypes==vp.image.search.Type.Logo);
_jContainer.find(".image-types .type-caricatures input").attr('checked',_eImageTypes==vp.image.search.Type.Caricature);
_jContainer.find(".image-types .type-albums input").attr('checked',_eImageTypes==vp.image.search.Type.Album);
}


search();
};
var loadRadioType=function $vpfn_d$nwFWhDlSFLukUy8paH6g100$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var eNewType=parseInt(e.target.value);


if(eNewType!=_eImageTypes)
{
_eImageTypes=eNewType;
search();
}
};

var search=function $vpfn_cDrm1xq42UQPuUWknlW8Qg113$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var bLoggedIn=fnIsUserLoggedIn();
var bIncludeUploads=(_eImageTypes&vp.image.search.Type.Upload)>0;
var bIncludeAlbums=(_eImageTypes&vp.image.search.Type.Album)>0;
var bAuthenticated=bLoggedIn||(vp.images.MyImagesUploadsBySession&&bIncludeUploads&&!bIncludeAlbums);


_jContainer.find(".not-logged-in-force").toggle(!bLoggedIn&&!bAuthenticated);
_jContainer.find(".not-logged-in-allow").toggle(!bLoggedIn&&bAuthenticated);
_jContainer.find(".authenticated").toggle(bAuthenticated);


if(bAuthenticated)
{
searchBegin();
}

else if(!_bSearched)
{
searchAfterSignIn();
}

_bSearched=true;
};
var searchOnSignIn=function $vpfn_sltws$Y8OgmSyB5HTb$uSw140$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(vp.images.MyImagesUploadsBySession)
{
vp.image.search.clearCache(vp.image.search.Type.Upload);
}


if(vp&&vp.fastpath&&vp.fastpath.photomatch)
{
vp.fastpath.photomatch.userIsLoggedIn=true;
}


search();
};
var searchAfterSignIn=function $vpfn_a9ecBcoILwbKqchU2um8sg157$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var loginManager=new vp.studio.LoginManager(fnIsUserLoggedIn);
loginManager.title=_jContainer.find(".login-dialog-title").html();
loginManager.login(searchOnSignIn);
};
var searchBegin=function $vpfn_odfSUYaUGDdTGr2wZ34Ysg163$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_jContainer.find(".not-logged-in-force").hide();
_jContainer.find(".authenticated").show();


_jContainer.find(".loaded-images").hide();
_jContainer.find(".loading-images").show();


var eTypes=_eImageTypes;
if((eTypes&vp.image.search.Type.Upload)>0)
{
eTypes|=vp.image.search.Type.Partner;
}


_oSearch=new vp.image.MyImagesSearch(searchComplete,
{
searchTypes:eTypes,
searchProduct:sPfid
});


_oSearch.search();
};
var searchComplete=function $vpfn_PsllA5qNokgviisjiz1E2A190$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(e.target!=_oSearch)
{
return;
}


var bAlbum=(_eImageTypes&vp.image.search.Type.Album)>0;
var aImages=_oSearch.images;
if(!aImages)
{
return;
}


if(bAlbum)
{
for(var i=0;i<aImages.length;i++)
{
var oAlbum=aImages[i];
oAlbum.isAlbum=true;


if(oAlbum.images.length===0)
{
aImages.remove(i);
i--;
}
}
}


_jContainer.find(".loading-images").hide();
_jContainer.find(".loaded-images").show();


if(bAlbum&&aImages&&aImages.length>0)
{
showAlbums(aImages);
}
else if(aImages&&aImages.length>0)
{
showImages(aImages);
}
else
{
_jContainer.find(".show-albums").hide();
_jContainer.find(".show-images").hide();
_jContainer.find(".no-images").show();
}


var oDialog=vp.dialog.getCurrent();
if(oDialog)
{
oDialog.resizeToFitContent(false);
}
};
var showImages=function $vpfn_k_7GpYH3AOGhZR$mzNpz6A250$21(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_oDisplayImages)
{
_oDisplayImages=new vp.widget.SelectableItems(
_jContainer.find(".image-list")[0],
buildImage,
{
itemsPerPage:iPageSize,
paginators:[_jContainer.find(".image-paginator").children()[0]],
notDraggables:".item-container",
previewSelector:".item-preview",
draggableSelector:".item-container",
clickToSelect:bMultiSelect,
dragToSelect:bMultiSelect,
makeItemsDraggable:bMultiSelect,
scope:"uploader"
});
}


_oDisplayImages.updateItems(aImages,false,{imageDropHandler:onChooseImages});


_jContainer.find(".no-images").hide();
_jContainer.find(".show-albums").hide();
_jContainer.find(".back-to-albums").toggle((_eImageTypes&vp.image.search.Type.Album)>0);
_jContainer.find(".show-images").show();
};
var showAlbums=function $vpfn_FqFN46XGD3rCuk3QqghDTg280$21(aAlbums)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_oDisplayAlbums)
{
_oDisplayAlbums=new vp.widget.SelectableItems(
_jContainer.find(".album-list")[0],
buildAlbum,
{
itemsPerPage:iPageSize,
paginators:[_jContainer.find(".album-paginator").children()[0]],
previewSelector:".item-preview",
draggableSelector:".item-preview",
makeItemsDraggable:bMultiSelect,
scope:"uploader"
});


_oDisplayAlbums.createDraggablePreviewElement=function $vpfn_00u42sAoeWylKis7bCgv4w298$60(jPreview,aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return jPreview.clone();
};
}


_oDisplayAlbums.updateItems(aAlbums,false,{imageDropHandler:onChooseImages});


_jContainer.find(".no-images").hide();
_jContainer.find(".show-images").hide();
_jContainer.find(".show-albums").show();
};

var buildImage=function $vpfn__mPGATWH9M62Mp4UqmO9qw313$21(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.onrefreshitem.fire({image:oImage});


var elements=vp.images.buildImage(oImage,onChooseImages,bMultiSelect);
return elements.jContainer;
};

var buildAlbum=function $vpfn_BGz_SRPlWs1b$MdwayYv2Q323$21(oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.onrefreshitem.fire({album:oAlbum});


var elements=vp.images.buildPreview({
containerClass:"item-container album-container"
});



elements.jPreview
.attr("src",vp.ui.imageUrl("/vp/images/b09/common/misc-images/folder.png"))
.addClass("pngfix")
.show();


elements.jPreview.click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g341$32(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
onChooseAlbum(oAlbum);
return false;
});


var sName=oAlbum.albumName;
var sCapt=sName.length>15?sName.substring(0,12)+"...":sName;
var jCapt=$("<div>"+sCapt+"</div>")
.addClass("album-title");
elements.jContainer.append(jCapt);

return elements.jContainer;
};


var onChoosePartnerImage=function $vpfn_YGsFcfqzZ3fWZwQD0S04cA358$31(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnChooseImage=function $vpfn_MgZN4hmX04qaE2hAyG4f8A360$28(oUploadResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oUploadResult.cancel)
{

}
else if(oUploadResult.error)
{
vp.upload.showErrorDialog(oUploadResult);
}
else if(oUploadResult.success)
{

vp.image.search.clearCache(vp.image.search.Type.Upload);


var aImages=oUploadResult.success.images;
if(bMultiSelect)
{
search();
fnImageSelectCallback(aImages);
}
else
{
fnImageSelectCallback(aImages[0]);
}
}
};


var oProgressFinal=new vp.upload.ProgressFinalizer(fnChooseImage,fnChooseImage);


var oManager=new vp.upload.Manager('partnerUploadsKey');
oManager.registerProgress(vp.upload.progressPageObject);
oManager.registerProgress(oProgressFinal);


var oDownload=new vp.upload.PartnerFileDownload(oManager,oImage.fileId,true);
oManager.pushUpload(oDownload);
};
var onChooseImages=function $vpfn_wqJ1lMHhWUoODwuKnqWg4g401$25(aItems)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var aImages=[];
for(var i=0,ilen=aItems.length;i<ilen;i++)
{
var oItem=aItems[i];
if(oItem.isAlbum)
{

for(var j=0,jlen=oItem.images.length;j<jlen;j++)
{
aImages.push(oItem.images[j]);
}
}
else
{

if(oItem.type==vp.image.Type.Partner)
{
onChoosePartnerImage(oItem);
}
else
{
aImages.push(oItem);
}
}
}




if(aImages.length>0)
{
if(bMultiSelect)
{
fnImageSelectCallback(aImages);
}
else
{
fnImageSelectCallback(aImages[0]);
}
}
};


var onChooseAlbum=function $vpfn_xEpsHIklREzj6sd3FhE_UA447$24(oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var jLink=_jContainer.find(".back-to-albums");


jLink.find("span").empty().append(oAlbum.albumName);


jLink.find("a")
.unbind("click")
.click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g457$19(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
showAlbums(_oSearch.images);
return false;
});


showImages(oAlbum.images);
};

var init=function $vpfn_UFe9BgAvGTD9P$eR3UWMig467$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_jContainer.find(".image-types input").click(loadRadioType);


_jContainer.find(".sign-in").click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g473$43(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
searchAfterSignIn();
return false;
});


_jContainer.find(".image-select-all").click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g480$52(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
onChooseImages(_oDisplayImages.getItemsOnPage());
return false;
}).toggle(bMultiSelect);
};
init();
};


vp.images.bUserLoggedIn=false;
vp.images.isUserLoggedIn=function $vpfn_Xgh8to7sG950e2SFG4HkbQ491$27(bForceValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bForceValue)
{
vp.images.bUserLoggedIn=true;
}
return vp.images.bUserLoggedIn;
};






vp.images.buildImage=function $vpfn_in$uq9nRsCgnO9asgYM1kQ505$23(oImage,fnChooseImage,bHover)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var elements=vp.images.buildPreview({
containerClass:"item-container image-container",
hover:bHover
});


var oImagePvw=new vp.image.ImagePreview(oImage);
oImagePvw.previewSize.width=100;
oImagePvw.previewSize.height=100;
var sImageName=oImage.name;
var sImageUrl=oImagePvw.getPreviewUrl();


elements.jPreview
.attr("alt",sImageName)
.attr("title",sImageName)
.addClass("image-"+oImage.type+"-"+oImage.id);


elements.jContainer.click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g527$30(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnChooseImage([oImage]);
return false;
});




setTimeout(function $vpfn_KtcXC034F4vjMXDVj9Sk4g536$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

elements.jPreview.load(function $vpfn_KtcXC034F4vjMXDVj9Sk4g539$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).show();

vp.ui.scaleImageToFit(this,
parseFloat($(this).css("width")),
parseFloat($(this).css("height")));
});

elements.jPreview.attr("src",sImageUrl);
},0);

return elements;
};






vp.images.buildPreview=function $vpfn_$qKgLZyGiaI3Hqh0kNa3jQ559$25(oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

oOptions=
jQuery.extend({
hover:false,
previewClass:'item-preview',
containerClass:'item-container',
disabledClass:'disabled',
selectedClass:'selected',
hoveredClass:'hovered'
},(oOptions||{}));


var jPreview=$("<img />")
.hide()
.addClass(oOptions.previewClass);


var jCheckmark=$("<img />")
.attr("src",vp.ui.imageUrl("/vp/images/B11/common/icon/check-used-photo.png"))
.addClass("pngfix")
.addClass("checkmark-overlay");


var jContainer=$("<div />")
.addClass(oOptions.containerClass)
.append(jPreview)
.append(jCheckmark);


if(oOptions.hover)
{

jContainer.mouseenter(function $vpfn_KtcXC034F4vjMXDVj9Sk4g593$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!$(this).hasClass(oOptions.selectedClass)&&!$(this).hasClass(oOptions.disabledClass))
{
$(this).addClass(oOptions.hoveredClass);
}
});

jContainer.mouseleave(function $vpfn_KtcXC034F4vjMXDVj9Sk4g601$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($(this).hasClass(oOptions.hoveredClass))
{
$(this).removeClass(oOptions.hoveredClass);
}
});


jContainer.click(function $vpfn_KtcXC034F4vjMXDVj9Sk4g610$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).removeClass(oOptions.hoveredClass);
});
}

return{jPreview:jPreview,jContainer:jContainer};
};
